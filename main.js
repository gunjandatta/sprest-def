let fs = require("fs");
let parser = require("xml2js").parseString;
let rmDir = require("rimraf");

let create = {
    interface: function (name, baseType, variables) {
        return [
            '/*********************************************',
            '* ' + name,
            '**********************************************/',
            'export interface ' + name + (baseType ? " extends " + baseType : "") + ' {',
            variables,
            '}',
            ''
        ].join('\n');
    }
};

// Recursively create the directories and index files from the namespace
function createDirectories(namespace) {
    let path = "lib";

    // See if we need to create directories
    if (namespace.indexOf('.') > 0) {
        // Get the sub directories
        namespace.split('.').forEach(function (dirName) {
            // Update the path
            path += "/" + dirName

            // See if the directory doesn't exists
            if (!fs.existsSync(path)) {
                // Create the directory
                fs.mkdir(path);
            }
        });
    } else {
        // Update the path
        path += "/" + namespace

        // See if the directory doesn't exist
        if (!fs.existsSync(path)) {
            // Create the directory
            fs.mkdir(path);
        }
    }

    // Return the path
    return path;
};

// Recursively read and generate index files
function generateIndexFiles(path) {
    let content = [];
    let filePath = path + "/index.d.ts";

    // See if an index file exists
    if (fs.existsSync(filePath)) { return; }

    // Read the directory
    fs.readdirSync(path).forEach(obj => {
        // Skip files
        if (/\.d\.ts$/.test(obj)) { return; }

        // Append the content
        content.push('import * as ' + obj + ' from "./' + obj + '";');
        content.push('export { ' + obj + ' }');

        // Generate the index files for this directory
        generateIndexFiles(path + "/" + obj);
    });

    // See if content exist
    if (content) {
        // Create the file
        fs.writeFileSync(filePath, content.join('\n'));
    }
};

// Method to update the references
function updateReferences(fileImports, dirName, type) {
    // See if the type requires an import
    if (type && type.indexOf('.') > 0) {
        // Get the last index of it
        let refType = type.replace(/^Array\<|\>$/g, '');
        refType = refType.substr(0, refType.lastIndexOf('.'));

        // Set the root namespace
        let root = refType.split('.')[0];

        // Build the reference to the lib folder
        let refPath = "";
        for (let j = 0; j < dirName.split('.').length; j++) { refPath += "../"; }

        // Add the import
        fileImports.push('import { ' + root + ' } from "' + refPath + '";');
    }
}

// Read the file
fs.readFile("metadata.xml", "utf8", (err, xml) => {
    let counter = 0;
    if (err) throw err;

    // Parse the xml
    parser(xml, function (err, xml) {
        let directories = {};
        let methodTypes = {};

        // Parse the schemas
        let schemas = xml["edmx:Edmx"]["edmx:DataServices"][0].Schema;
        for (let i = 0; i < schemas.length; i++) {
            let schema = schemas[i];

            // Ensure a namespace name exists
            let ns = schema.$ ? schema.$.Namespace : null;
            if (ns) {
                // Set the directory name
                directories[ns] = directories[ns] || {};
            } else { continue; }

            // Parse the schema
            for (let key in schema) {
                let value = schema[key];

                // Skip the attributes
                if (key == "$") { continue; }

                // See if this is a collection
                if (value.length > 0) {
                    let collection = key + "s";
                    let isAssociation = key == "Association";

                    // Parse the collection
                    for (let j = 0; j < value.length; j++) {
                        let interface = value[j];

                        // See if this is not an association
                        if (isAssociation) {
                            var k = 0;

                            // Parse the end points
                            let endPoints = interface.End || [];
                            for (let k = 0; k < endPoints.length; k++) {
                                let endPoint = endPoints[k];

                                // Get the method information
                                let isCollection = endPoint.$ ? endPoint.$.Multiplicity == '*' : false;
                                let name = interface.$ ? interface.$.Name : null;
                                let role = endPoint.$ ? endPoint.$.Role : null;
                                let type = endPoint.$ ? endPoint.$.Type : null;

                                // Ensure the name, role and type exist
                                if (name && role && type) {
                                    // Ensure method and name types exist
                                    methodTypes[name] = methodTypes[name] || {};

                                    // Add the method
                                    methodTypes[name][role] = { isCollection, type };
                                }
                            }
                        } else {
                            // Add the collection
                            directories[ns][collection] = directories[ns][collection] || {};

                            // Validate the collection
                            let name = interface.$ ? interface.$.Name : null;
                            if (name) {
                                // Add the interface
                                directories[ns][collection][name] = {};

                                // See if the base type exists and doesn't reference itself
                                if (interface.$.BaseType && !interface.$.BaseType.endsWith(name)) {
                                    // Set the base type
                                    directories[ns][collection][name]._BaseType = interface.$.BaseType;
                                }

                                // Parse the methods
                                let methods = interface.NavigationProperty || [];
                                for (let k = 0; k < methods.length; k++) {
                                    let method = methods[k];

                                    // Get the method information
                                    let methodName = method.$ ? method.$.Name : null;
                                    let methodRole = method.$ ? method.$.ToRole : null;
                                    let methodType = method.$ ? method.$.Relationship : null;

                                    // Validate the method information
                                    if (methodName && methodRole && methodType) {
                                        // Ensure methods and method name exist
                                        directories[ns][collection][name]._Methods = directories[ns][collection][name]._Methods || {};
                                        directories[ns][collection][name]._Methods[methodName] = directories[ns][collection][name]._Methods[methodName] || {};

                                        // Add the method
                                        directories[ns][collection][name]._Methods[methodName][methodRole] = methodType;
                                    } else { continue; }
                                }

                                // Parse the properties
                                let properties = interface.Property || [];
                                for (let k = 0; k < properties.length; k++) {
                                    let property = properties[k];

                                    // Ensure a name exists
                                    let propName = property.$ ? property.$.Name : null;
                                    if (propName) {
                                        // Create the property
                                        directories[ns][collection][name][propName] = {};
                                    } else { continue; }

                                    // Parse the attributes
                                    for (let prop in property.$) {
                                        // Skip the name field
                                        if (prop == "Name") { continue; }

                                        // Add the property
                                        directories[ns][collection][name][propName][prop] = property.$[prop];
                                    }
                                }
                            } else { continue; }
                        }
                    }
                }
            }
        }

        // See if the lib directory exists
        if (fs.existsSync("lib")) {
            // Delete the lib directory
            rmDir.sync("lib")
        }

        // Create the directory
        fs.mkdir("lib");

        // Parse the directories
        for (let dirName in directories) {
            // Create the directories
            createDirectories(dirName);
        }

        // Generate the index files
        generateIndexFiles("lib");

        // Parse the directories
        // NameSpace -> Collection -> Interface -> Properties
        // Directory -> File
        for (let dirName in directories) {
            let files = {};
            let filesIndex = [];

            // Set the path
            let path = "lib/" + dirName.replace(/\./g, '/');

            // Parse the filenames
            for (let filename in directories[dirName]) {
                let content = [];
                let fileImports = [];

                // Parse the interfaces
                for (let name in directories[dirName][filename]) {
                    let interface = directories[dirName][filename][name];
                    let methods = [];
                    let queryMethods = [];
                    let variables = [];

                    // Parse the properties
                    for (let propName in interface) {
                        let prop = interface[propName];

                        // Skip the base type
                        if (propName == "_BaseType") {
                            // Update the references
                            updateReferences(fileImports, dirName, prop);
                            continue;
                        }

                        // Skip the methods
                        if (propName == "_Methods") {
                            // Parse the methods
                            for (var methodName in prop) {
                                // Parse the method roles
                                for (var methodRole in prop[methodName]) {
                                    // Get the method type key
                                    let methodKey = prop[methodName][methodRole].split('.');
                                    methodKey = methodKey[methodKey.length - 1];

                                    // See if the method information exists
                                    let methodType = "any";
                                    let methodInfo = methodTypes[methodKey][methodRole];
                                    if (methodInfo) {
                                        // Update the method type
                                        methodType = methodInfo.isCollection ? "Array<" + methodInfo.type + ">" : methodInfo.type;
                                    }

                                    // Add the method
                                    methods.push('\t' + methodName + '<T=' + methodType + '>(): T;');
                                    queryMethods.push('\t' + methodName + '<T=' + methodType + '>(): T;');

                                    // Update the references
                                    updateReferences(fileImports, dirName, methodType);
                                }
                            }

                            // Continue the loop
                            continue;
                        }

                        // Update the type
                        let type = prop.Type || "any";
                        type = type
                            .replace(/Edm\.Boolean/, 'boolean')
                            .replace(/Edm\.Binary/, 'any')
                            .replace(/Edm\.Byte/, 'any')
                            .replace(/Edm\.DateTime/, 'any')
                            .replace(/Edm\.Decimal/, 'number')
                            .replace(/Edm\.Double/, 'number')
                            .replace(/Edm\.Guid/, 'any')
                            .replace(/Edm\.Int16/, 'number')
                            .replace(/Edm\.Int32/, 'number')
                            .replace(/Edm\.Int64/, 'number')
                            .replace(/Edm\.String/, 'string')
                            .replace(/Edm\.Time/, 'any')
                            .replace(/^Collection\(/, 'Array<')
                            .replace(/\)$/, '>');

                        // Update the references
                        updateReferences(fileImports, dirName, type);

                        // Add the variable
                        variables.push('\t' + propName + '?: ' + type + ';');
                    }

                    // Add the content
                    content.push(create.interface(name, interface._BaseType, variables.join('\n')));

                    // See if methods exist
                    if (methods.length > 0) {
                        // Add the content
                        content.push(create.interface(name + "Collections", null, methods.join('\n')));
                        content.push(create.interface(name + "Query", null, queryMethods.join('\n')));
                    }
                }

                // Ensure content exists
                if (content.length > 0) {
                    // Update the index
                    filesIndex.push('export * from "./' + filename.toLowerCase() + '";');

                    // Remove duplicates from the import array
                    fileImports = fileImports.filter(function (item, pos) { return fileImports.indexOf(item) == pos; });

                    // Add the file
                    files[filename.toLowerCase()] = [
                        fileImports.join('\n'),
                        '',
                        content.join('\n'),
                    ].join('\n');
                }
            }

            // Parse the files to create
            for (let file in files) {
                // Write the file
                fs.writeFileSync(path + "/" + file + ".d.ts", files[file]);
            }

            // Create the index file
            fs.appendFileSync(path + "/index.d.ts", '\n' + filesIndex.join('\n'));
        }

        // Log
        console.log("Library generated in './lib'");
    });
});