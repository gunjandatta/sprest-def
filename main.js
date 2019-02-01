let fs = require("fs");
let parser = require("xml2js").parseString;
let rmDir = require("rimraf");
let custom = require("./custom");

let hasMethods = {};

function createInterface(name, baseType, variables) {
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

// Parse the methods and apply the methods to the directories object
function applyMethodsToDirectories(methods, directories) {
    // Parse the custom methods
    for (let name in custom) {
        // Add the methods
        methods[name] = (methods[name] || []).concat(custom[name]);
    }

    // Parse the methods
    for (let name in methods) {
        let isCollection = false;
        let method = methods[name];

        // See if this is a collection
        if (/^Collection\(.*\)$/.test(name)) {
            // Update the name
            name = name.replace(/^Collection\(/, "").replace(/\)$/, "");

            // Set the flags
            isCollection = true;
            hasMethods[name] = true;
        }

        // Find the last index of '.'
        let idx = name.lastIndexOf('.');

        // Set the lib and obj name
        let lib = name.substr(0, idx);
        let obj = name.substr(idx + 1);

        // See if a file name exists for this object
        if (directories[lib] && directories[lib].EntityTypes && directories[lib].EntityTypes[obj]) {
            // Set the object
            obj = directories[lib].EntityTypes[obj];

            // See if this is a collection
            if (isCollection) {
                // Add the method
                obj._CollectionMethods = (obj._CollectionMethods || []).concat(method);
            } else {
                // Add the method
                obj._Methods = (obj._Methods || []).concat(method);
            }
        }
    }
}

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

// Method to convert the type
function getType(type = "any") {
    // Return the type
    return type
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
        .replace(/Edm\.Stream/, 'any')
        .replace(/Edm\.String/, 'string')
        .replace(/Edm\.Time/, 'any')
        .replace(/^Collection\(/, 'Array<')
        .replace(/\)$/, '>');
}

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
        let methods = {};
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
                    let isEntityContainer = key == "EntityContainer";

                    // Parse the collection
                    for (let j = 0; j < value.length; j++) {
                        let interface = value[j];

                        // See if this is an association
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
                        }
                        // Else, see if this is an entity container
                        else if (isEntityContainer) {
                            // Parse the functions
                            let functions = interface.FunctionImport || [];
                            for (let k = 0; k < functions.length; k++) {
                                let functionInfo = functions[k];

                                // See if this function has the valid information
                                let isValid = functionInfo.Parameter ? functionInfo.Parameter[0] : null;
                                isValid = isValid ? isValid.$ : null;
                                isValid = functionInfo.$ && isValid && isValid.Name == "this" && isValid.Type ? true : false;
                                if (!isValid) { continue; }

                                // Get the function information
                                let name = functionInfo.$.Name[0].toLowerCase() + functionInfo.$.Name.slice(1);
                                let returnType = getType(functionInfo.$.ReturnType);
                                let parentName = functionInfo.Parameter[0].$.Type;

                                // Create an array for the methods
                                methods[parentName] = methods[parentName] || [];
                                methods[parentName].push({ name, returnType, params: functionInfo.Parameter.slice(1) });
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
                                        // Ensure collection name exist
                                        directories[ns][collection][name]._Collections = directories[ns][collection][name]._Collections || {};
                                        directories[ns][collection][name]._Collections[methodName] = directories[ns][collection][name]._Collections[methodName] || {};

                                        // Add the method
                                        directories[ns][collection][name]._Collections[methodName][methodRole] = methodType;
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

        // Apply the methods to the directories object
        applyMethodsToDirectories(methods, directories);

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

        // Copy the base file
        fs.copyFile("base.d.ts", "lib/base.d.ts", err => { console.error(err); })

        // Generate the index files
        generateIndexFiles("lib");

        // Append the index file
        fs.appendFileSync("lib/index.d.ts", '\nexport * from "./base"');

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

                // Update the references
                updateReferences(fileImports, dirName, "IBaseExecution.");

                // Parse the interfaces
                for (let name in directories[dirName][filename]) {
                    let interface = directories[dirName][filename][name];
                    let collections = [];
                    let collectionMethods = [];
                    let methods = [];
                    let props = [];
                    let query = [];
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

                        // See if this object contains collections
                        if (propName == "_Collections") {
                            // Update the references
                            updateReferences(fileImports, dirName, "IBaseCollection.");
                            updateReferences(fileImports, dirName, "IBaseQuery.");
                            updateReferences(fileImports, dirName, "IBaseResults.");

                            // Parse the collections
                            for (var collection in prop) {
                                // Parse the roles
                                for (var methodRole in prop[collection]) {
                                    // Get the method type key
                                    let methodKey = prop[collection][methodRole].split('.');
                                    methodKey = methodKey[methodKey.length - 1];

                                    // See if the method information exists
                                    let methodInfo = methodTypes[methodKey][methodRole];
                                    let methodType = methodInfo.type || "any";

                                    // Set the method query
                                    let methodQuery = null;
                                    let idx = methodType.lastIndexOf(".");
                                    if (idx > 0) {
                                        // Get the lib
                                        let lib = methodType.substr(0, idx);

                                        // Get the target method
                                        let method = methodType.substr(idx + 1);

                                        // See if methods exist
                                        if (hasMethods[method]) {
                                            // Set the method query
                                            methodQuery = lib + ".I" + method + "Query";
                                        }
                                    }

                                    // See if this is a collection
                                    if (methodInfo.isCollection) {
                                        // Add the methods
                                        collections.push('\t' + collection + '(): ' + 'IBaseCollection<' + methodType + '>' + (hasMethods[methodType] ? " & " + methodType + "CollectionMethods" : "") + ';');
                                        collections.push('\t' + collection + '(id: string | number): ' + 'IBaseQuery<' + methodType + (methodQuery ? ', ' + methodQuery : '') + '>' + (hasMethods[methodType] ? " & " + methodType + "Collections" : "") + ';');
                                        query.push('\t' + collection + ': IBaseResults<' + methodType + '>;');
                                    } else {
                                        // Add the method
                                        props.push('\t' + collection + '(): ' + 'IBaseExecution<' + methodType + '>' + (hasMethods[methodType] ? " & " + methodType + "Collections" : "") + ';');
                                    }

                                    // Update the references
                                    updateReferences(fileImports, dirName, methodType);
                                }
                            }

                            // Continue the loop
                            continue;
                        }

                        // See if this object contains collection methods
                        if (propName == "_CollectionMethods") {
                            // Parse the methods
                            for (let i = 0; i < prop.length; i++) {
                                let methodInfo = prop[i];

                                // Parse the parameters
                                let params = [];
                                for (let j = 0; j < methodInfo.params.length; j++) {
                                    let param = methodInfo.params[j].$;

                                    // Add the parameter
                                    params.push(param.Name + "?: " + getType(param.Type));
                                }

                                // Add the method
                                collectionMethods.push('\t' + methodInfo.name + '(' + params.join(', ') + '): IBaseExecution<' + getType(methodInfo.returnType) + '>;');
                            }

                            // Continue the loop
                            continue;
                        }

                        // See if this object contains methods
                        if (propName == "_Methods") {
                            // Update the references
                            updateReferences(fileImports, dirName, "IBaseQuery.");

                            // Parse the methods
                            for (let i = 0; i < prop.length; i++) {
                                let methodInfo = prop[i];

                                // Set the method name
                                let methodName = methodInfo.name == "deleteObject" ? "delete" : methodInfo.name;

                                // Parse the parameters
                                let params = [];
                                for (let j = 0; j < methodInfo.params.length; j++) {
                                    let param = methodInfo.params[j].$;
                                    let paramType = getType(param.Type);

                                    // Update the reference
                                    paramType.indexOf('.') > 0 ? updateReferences(fileImports, dirName, paramType) : null;

                                    // Add the parameter
                                    params.push(param.Name + "?: " + paramType);
                                }

                                // Add the method
                                methods.push('\t' + methodName + '(' + params.join(', ') + '): IBaseExecution<' + getType(methodInfo.returnType) + '>;');
                            }

                            // Continue the loop
                            continue;
                        }

                        // Update the type
                        let type = getType(prop.Type);

                        // Update the references
                        updateReferences(fileImports, dirName, type);

                        // Add the variable
                        variables.push('\t' + propName + '?: ' + type + ';');
                    }

                    // See if collection and methods don't exist
                    if (collections.length == 0 && methods.length == 0) {
                        // Generate the content
                        content.push(createInterface(name, interface._BaseType, variables.join('\n')));
                        content.push(createInterface(name + "Collections", collectionMethods.length > 0 ? [name + "CollectionMethods"] : null, collections.join('\n')));
                        collectionMethods.length > 0 ? content.push(createInterface(name + "CollectionMethods", null, collectionMethods.join('\n'))) : null;
                    } else {
                        let baseTypes = interface._BaseType ? [interface._BaseType] : [];
                        baseTypes.push(name + "Collections");
                        baseTypes.push(name + "Methods");

                        // Generate the content
                        content.push(createInterface("I" + name, [name + "Collections", name + "Methods", "IBaseQuery<I" + name + "Query>"]));
                        content.push(createInterface("I" + name + "Query", [name + "Query", name + "Methods"]));
                        content.push(createInterface(name, baseTypes.join(", "), variables.join('\n')));
                        content.push(createInterface(name + "Props", null, props.join('\n')));
                        content.push(createInterface(name + "Collections", name + "Props", collections.join('\n')));
                        collectionMethods.length > 0 ? content.push(createInterface(name + "CollectionMethods", null, collectionMethods.join('\n'))) : null;
                        content.push(createInterface(name + "Query", name + "Props", query.join('\n')));
                        content.push(createInterface(name + "Methods", null, methods.join('\n')));
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