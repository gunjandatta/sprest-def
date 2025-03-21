let fs = require("fs");
let parser = require("xml2js").parseString;
let rmDir = require("rimraf");
let custom = require("./custom");
let customV2 = require("./customV2");

// Method to analyze the interfaces
function analyzeCollections(directories) {
    let hasCollections = {};
    let hasCollectionMethods = {};
    let hasMethods = {};

    // Parse the directories
    for (let dirName in directories) {
        // Parse the filenames
        for (let filename in directories[dirName]) {
            // Parse the interfaces
            for (let name in directories[dirName][filename]) {
                let interface = directories[dirName][filename][name];

                // Set the flags
                hasCollections[dirName + "." + name] = interface._Collections ? true : false;
                hasCollectionMethods[dirName + "." + name] = interface._CollectionMethods ? true : false;
                hasMethods[dirName + "." + name] = interface._Methods ? true : false;
            }
        }
    }

    // Return the data
    return { hasCollections, hasCollectionMethods, hasMethods };
}

// Parse the methods and apply the methods to the directories object
function applyMethodsToDirectories(methods, directories) {
    // Parse the custom methods
    for (let name in custom) {
        // Get the methods
        let oldMethods = methods[name] || [];

        // Parse the custom methods
        for (let i = 0; i < custom[name].length; i++) {
            let methodInfo = custom[name][i];

            // Parse the old methods
            for (let i = 0; i < oldMethods.length; i++) {
                let oldMethod = oldMethods[i];

                // See the method name exists
                if (oldMethod.name == methodInfo.name) {
                    // Comment out the method
                    oldMethod.name = "// " + oldMethod.name;
                }
            }
        }

        // Add the methods
        methods[name] = oldMethods.concat(custom[name]);
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
        }

        // Find the last index of '.'
        let idx = name.lastIndexOf('.');

        // Set the lib and obj name
        let lib = name.substring(0, idx);
        let obj = name.substring(idx + 1);

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
function createDirectories(path, namespace) {
    // See if we need to create directories
    if (namespace.indexOf('.') > 0) {
        // Get the sub directories
        namespace.split('.').forEach(function (dirName) {
            // Update the path
            path += "/" + dirName

            // See if the directory doesn't exists
            if (!fs.existsSync(path)) {
                // Create the directory
                fs.mkdirSync(path, function (err) { });
            }
        });
    } else {
        // Update the path
        path += "/" + namespace

        // See if the directory doesn't exist
        if (!fs.existsSync(path)) {
            // Create the directory
            fs.mkdirSync(path, function (err) { });
        }
    }

    // Return the path
    return path;
};

// Creates the interface
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

// Generates the base collection interface
function generateBaseCollection(methodType, hasCollections, hasCollectionMethods) {
    // See if a collection exists
    if (hasCollections[methodType]) {
        // See if methods exist
        if (hasCollectionMethods[methodType]) {
            // Generate the interface
            return 'Base.IBaseCollection<' + methodType + ', ' + methodType + 'OData, Base.IBaseExecution & ' + methodType + 'CollectionMethods> & Base.IBaseExecution & ' + methodType + 'CollectionMethods';
        } else {
            // Generate the interface
            return 'Base.IBaseCollection<' + methodType + ', ' + methodType + 'OData>';
        }
    } else {
        // See if methods exist
        if (hasCollectionMethods[methodType]) {
            // Generate the interface
            return 'Base.IBaseCollection<' + methodType + '> & ' + methodType + 'CollectionMethods';
        } else {
            // Generate the interface
            return 'Base.IBaseCollection<' + methodType + '>';
        }
    }
}

// Generates the base query interface
function generateBaseQuery(methodType, hasCollections, hasMethods) {
    let baseQuery = null;

    // See if this is a collection
    if (/^Array\<.*\>$/.test(methodType)) {
        // Update the method type
        methodType = methodType.replace(/^Array\</, '').replace(/\>/, '');
    }

    // See if a collection exists
    if (hasCollections[methodType]) {
        // Set the base query
        baseQuery = 'Base.IBaseQuery<' + methodType + ', ' + methodType + 'OData>';
    } else {
        // Set the base query
        baseQuery = 'Base.IBaseQuery<' + methodType + '>';
    }

    // Append the collection
    baseQuery += ' & ' + methodType + 'Collections';

    // See if methods exist
    if (hasMethods[methodType]) {
        // Append the methods
        baseQuery += ' & ' + methodType + 'Methods';
    }

    // Return the query
    return baseQuery;
}

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
function getType(type = "any", enumInterfaces) {
    if (type.indexOf("microsoft.graph") >= 0) {
        let typeInfo = type.split('.');
        let typeName = typeInfo[typeInfo.length - 1];
        if (enumInterfaces[typeName]) {
            return "microsoft.graph." + typeName;
        }
    } else if (type.indexOf("graph.") >= 0) {
        let typeInfo = type.split('.');
        let typeName = typeInfo[typeInfo.length - 1];
        if (enumInterfaces[typeName]) {
            return typeName;
        }
    }

    // Return the type
    return type
        .replace(/Edm\.Boolean/, 'boolean')
        .replace(/Edm\.Binary/, 'any')
        .replace(/Edm\.Byte/, 'any')
        .replace(/Edm\.DateTimeOffset/, 'any')
        .replace(/Edm\.DateTime/, 'any')
        .replace(/Edm\.Date/, 'any')
        .replace(/Edm\.Decimal/, 'number')
        .replace(/Edm\.Double/, 'number')
        .replace(/Edm\.Duration/, 'number')
        .replace(/Edm\.Guid/, 'any')
        .replace(/Edm\.Int16/, 'number')
        .replace(/Edm\.Int32/, 'number')
        .replace(/Edm\.Int64/, 'number')
        .replace(/Edm\.Single/, 'any')
        .replace(/Edm\.Stream/, 'any')
        .replace(/Edm\.String/, 'string')
        .replace(/Edm\.TimeOfDay/, 'any')
        .replace(/Edm\.Time/, 'any')
        .replace(/^Collection\(/, 'Array<')
        .replace(/\)$/, '>');
}

// Method to update the references
function updateReferences(fileImports, dirName, type) {
    // See if the type requires an import
    if (!type.startsWith('{') && type && type.indexOf('.') > 0) {
        // Get the last index of it
        let refType = type.replace(/^Array\<|\>$/g, '');
        refType = refType.substring(0, refType.lastIndexOf('.'));

        // Set the root namespace
        let root = refType.split('.')[0];

        // See if this is the graph
        if (root == "graph") {
            // Update the name
            dirName = dirName.replace("microsoft.graph", "microsoftgraph");
        }

        // Build the reference to the lib folder
        let refPath = "";
        for (let j = 0; j < dirName.split('.').length; j++) { refPath += "../"; }

        // Add the import
        fileImports.push('import { ' + root + ' } from "' + refPath + '";');
    }
}

// Process the Graph metadata
function processGraph(schemas) {
    let actions = {};
    let functions = {};
    let collections = {};
    let complexTypes = {};
    let endPoints = {};
    let enums = {};
    let enumInterfaces = {};
    let entities = {};
    let graphEndPoints = {};

    // Returns the return type
    let convertReturnType = (returnType) => {
        // See if this is an edm value, and do nothing
        if (returnType.indexOf("Edm") >= 0) { return returnType; }

        // Remove microsoft.graph
        if (returnType.indexOf("microsoft.graph") >= 0) {
            let isCollection = returnType.indexOf("Collection(") == 0;
            let info = returnType.split(".")
            //return returnType.replace("microsoft.graph.", "").replace(".", "_");
            return (isCollection ? "Collection(" : "") + info[info.length - 1];
        }

        // Remove graph.
        if (returnType.indexOf("graph.") == 0) {
            return returnType.replace("graph.", "");
        }

        return returnType;
    }

    // Parse the schemas
    for (let i = 0; i < schemas.length; i++) {
        let schema = schemas[i];

        // Parse the schema
        for (let key in schema) {
            let value = schema[key];

            // Skip the attributes
            if (key == "$") { continue; }

            // See if it's an
            if (key == "Annotations") {
                // Parse the annotations
                for (let annotation of value) {
                }

                // Continue
                continue;
            }

            // See if it's an enumerator
            if (key == "EnumType") {
                // Parse the enums
                for (let enumInfo of value) {
                    let name = enumInfo.$.Name;

                    // Add the interface and enum
                    let enumInterface = "/** " + name + " types */\nexport type " + name + " = {\n";
                    let enumDef = "/** " + name + " types */\nexport const " + name + ": GraphTypes." + name + " = {\n";

                    // Parse the members
                    for (let member of enumInfo.Member) {
                        // Add the member
                        enumInterface += "\t" + member.$.Name + ": " + member.$.Value + ";\n"
                        enumDef += "\t" + member.$.Name + ": " + member.$.Value + ",\n"
                    }

                    // Close the interface and enum
                    enumInterface += "}\n";
                    enumDef += "}\n"

                    // Add the enum
                    enums[name] = enumDef;
                    enumInterfaces[name] = enumInterface;
                }

                // Continue
                continue;
            }

            // See if this is a complex type
            if (key == "ComplexType") {
                // Parse the values
                for (let complexType of value) {
                    let name = complexType.$.Name;
                    let returnType = complexType.BaseType;

                    // Parse the properties
                    let props = [];
                    let complexTypesProps = complexType.Property || [];
                    for (let prop of complexTypesProps) {
                        // Add the property
                        props.push({ name: prop.$.Name, returnType: prop.$.Type, nullable: prop.$.Nullable });
                    }

                    // Add the entity type
                    complexTypes[name] = { name, returnType, props };
                }
            }

            // See if this is an entity type
            if (key == "EntityType") {
                // Parse the values
                for (let entityType of value) {
                    let name = entityType.$.Name;
                    let returnType = entityType.$.BaseType;

                    // See if the return type exists
                    if (returnType) {
                        // Update the return type
                        //let values = returnType.split(".");
                        //returnType = values[1] || values[0];
                        returnType = convertReturnType(returnType);
                    }

                    // Parse the properties
                    let props = [];
                    let entityProps = entityType.Property || [];
                    for (let prop of entityProps) {
                        // Add the property
                        props.push({ name: prop.$.Name, returnType: convertReturnType(prop.$.Type), nullable: prop.$.Nullable });
                    }

                    // Parse the methods
                    let methods = [];
                    let subMethods = entityType.NavigationProperty || [];
                    for (let subMethod of subMethods) {
                        // Set the method name
                        let name = subMethod.$.Name;
                        let nameInfo = name.split('/');
                        if (nameInfo.length > 1) {
                            name = nameInfo[nameInfo.length - 1];
                        }

                        // Set the return type
                        //let returnType = convertReturnType(subMethod.$.Type);
                        let returnType = subMethod.$.Type;
                        let returnTypeInfo = returnType.split('/');
                        if (returnTypeInfo.length > 1) {
                            returnType = returnTypeInfo[returnTypeInfo.length - 1];
                        }

                        // Add the method
                        methods.push({ name, returnType });

                        // See if this is a collection
                        if (returnType.startsWith("Collection(")) {
                            let collectionType = returnType.replace("Collection(", "").replace(")", "");
                            //collectionType = collectionType.split('.')[1];
                            collections[collectionType] = returnType;

                            // Add a method to get an object from the collection by its id
                            methods.push({
                                name,
                                returnType: collectionType,
                                //returnType2: collectionType + "Methods",
                                argNames: [{
                                    name: "id",
                                    type: "string | number",
                                    returnType: collectionType
                                }]
                            });
                        }
                    }

                    // Add the entity type
                    entities[name] = { name, returnType, props, methods };
                }

                // Continue
                continue;
            }

            // See if this is an entity container
            if (key == "EntityContainer") {
                // Parse the values
                for (let val of value) {
                    // Parse the entity types
                    let entitySets = val.EntitySet || [];
                    for (let i = 0; i < entitySets.length; i++) {
                        let entitySet = entitySets[i];
                        let name = entitySet.$.Name;
                        let returnType = entitySet.$.EntityType.replace("microsoft.graph", "").replace(".", "_");

                        // Parse the methods
                        let methods = [];
                        let subMethods = entitySet.NavigationPropertyBinding || [];
                        for (let subMethod of subMethods) {
                            // Set the method name
                            let name = subMethod.$.Path;
                            let nameInfo = name.split('/');
                            if (nameInfo.length > 1) {
                                name = nameInfo[nameInfo.length - 1];
                            }

                            // Set the return type
                            let returnType = subMethod.$.Target;
                            let returnTypeInfo = returnType.split('/');
                            if (returnTypeInfo.length > 1) {
                                returnType = returnTypeInfo[returnTypeInfo.length - 1];
                            }


                            // Add the method
                            methods.push({ name, returnType });
                        }

                        // Add the endpoint
                        endPoints[name] = { name: name, returnType, methods };
                    }

                    // Parse the singletons
                    let singletons = val.Singleton || [];
                    for (let singleton of singletons) {
                        let name = singleton.$.Name;
                        let returnType = singleton.$.Type;

                        // Parse the methods
                        let methods = [];
                        let subMethods = singleton.NavigationPropertyBinding || [];
                        for (let subMethod of subMethods) {
                            // Set the method name
                            let name = subMethod.$.Path;
                            let nameInfo = name.split('/');
                            if (nameInfo.length > 1) {
                                name = nameInfo[nameInfo.length - 1];
                            }

                            // Set the return type
                            let returnType = subMethod.$.Target;
                            let returnTypeInfo = returnType.split('/');
                            if (returnTypeInfo.length > 1) {
                                returnType = returnTypeInfo[returnTypeInfo.length - 1];
                            }


                            // Add the method
                            methods.push({ name, returnType });
                        }

                        // Add the endpoint
                        graphEndPoints[name] = { name, returnType, methods };

                        // Continue
                        continue;
                    }
                }

                // Continue
                continue;
            }

            // See if this is an action/function
            if (key == "Action" || key == "Function") {
                // Parse the values
                for (let methodInfo of value) {
                    let bindingParam = null;
                    let methodName = methodInfo.$.Name;
                    let methodParams = [];
                    let methodReturnType = null;

                    // Get the parameters
                    let params = methodInfo.Parameter || [];
                    for (let i = 0; i < params.length; i++) {
                        let param = params[i];

                        if (param.$.Name == "bindingParameter") {
                            bindingParam = param.$.Type;
                        } else {
                            methodParams.push(param);
                        }
                    }

                    // Get the return type
                    if (methodInfo.ReturnType && methodInfo.ReturnType[0]) {
                        methodReturnType = methodInfo.ReturnType[0].$.Type;
                    }

                    // Ensure a binding parameter exists
                    if (bindingParam) {
                        // See if this is an action
                        if (key == "Action") {
                            actions[bindingParam] = actions[bindingParam] || [];
                            actions[bindingParam].push({
                                name: methodName,
                                params: methodParams,
                                returnType: methodReturnType
                            });
                        } else {
                            functions[bindingParam] = functions[bindingParam] || [];
                            functions[bindingParam].push({
                                name: methodName,
                                params: methodParams,
                                returnType: methodReturnType
                            });
                        }
                    }
                }
            }
        }
    }

    // Method to get the type
    let getGraphType = (returnType = "") => {
        // See if the return type is in not an Edm
        if (returnType.indexOf("graph." == 0)) {
            // Set the return type information
            let isCollection = returnType.indexOf("Collection(") == 0;
            let info = (isCollection ? returnType.replace("Collection(", "").replace(")", "") : returnType);
            info = info.indexOf(".") >= 0 ? info.split('.') : info.split('_');

            // See if this is a collection using "s" at the end
            let name = info[info.length - 1];
            let name2 = null;
            if (!isCollection && name[name.length - 1] == "s") {
                // Set the name
                name2 = name.substring(0, name.length - 1);
            }

            // See if it's a complex type
            if (complexTypes[name]) {
                // Set the return type
                returnType = "ComplexTypes." + name;
            } else if (complexTypes[name2]) {
                // Set the return type
                returnType = "ComplexTypes." + name2 + "[]";
            }
            // Else, see if it's an entity
            else if (entities[name]) {
                // Set the return type
                returnType = "EntityTypes." + name;
            }
            // Else, see if it's an entity
            else if (entities[name2]) {
                // Set the return type
                returnType = "EntityTypes." + name2 + "[]";
            }
            // Else, see if it's an enum
            else if (enums[name]) {
                // Set the return type
                returnType = "EnumTypes." + name;
            }
            // Else, see if it's an enum
            else if (enums[name2]) {
                // Set the return type
                returnType = "EnumTypes." + name2 + "[]";
            }
            // Else, see if it's a basic type
            else if (info[0] == "Edm" || returnType.indexOf("Edm.") == 0) {
                returnType = getType(returnType);
            }
            // Else, see if this is a column
            else if (name == "column") {
                returnType = "ComplexTypes.columnDefinition";
            }
            // Else, see if this is a column array
            else if (name == "columns") {
                returnType = "ComplexTypes.columnDefinition[]";
            } else {
                return null;
            }

            // See if this is a collection, and ensure it's an array
            if (isCollection && returnType.indexOf("Array") < 0) {
                returnType += "[]";
            }
        }

        // Return the type
        return returnType;
    }

    // Make the graph directory
    if (fs.existsSync("lib/microsoft/Graph") == false) { fs.mkdirSync("lib/microsoft/Graph"); }

    // Create the endpoints
    let content = [
        "import { IBaseExecution } from \"../../base\";",
        "import * as EntityTypes from \"./entityTypes.d\";\n"
    ];
    for (let name in endPoints) {
        let endPoint = endPoints[name];

        // Parse the methods
        let methods = [];
        for (let method of endPoint.methods) {
            // Add the method
            methods.push("\t" + method.name + ": () => IBaseExecution<" + getGraphType(method.returnType) + ">;");
        }

        // Add the endpoint
        content.push(`/*********************************************
* ${name}
**********************************************/
export interface ${name} extends IBaseExecution<${getGraphType(endPoint.returnType.replace("microsoft.graph.", "graph."))}> {
${methods.join('\n')}
}`);
    }
    fs.writeFileSync("lib/microsoft/graph/api.d.ts", content.join('\n'));

    // Create the enum definitions
    content = [];
    for (let key in enumInterfaces) { content.push(enumInterfaces[key]); }
    fs.writeFileSync("lib/microsoft/graph/enumTypes.d.ts", content.join('\n'));

    // Append the export of the enums
    fs.appendFileSync("lib/microsoft/graph/index.d.ts", [
        'import * as API from "./api";',
        'import * as ComplexTypes from "./complexTypes";',
        'import * as Enums from "./enumTypes";',
        'export { API, ComplexTypes, Enums }',
        'export * from "./entityTypes";',
    ].join('\n'));

    // Append the graph endpoint
    fs.appendFileSync("lib/Microsoft/index.d.ts", [
        '\nimport * as Graph from "./Graph";',
        'export { Graph }'
    ].join('\n'));

    // Create the graph enum types
    content = ["import * as GraphTypes from \"./microsoft/graph/enumTypes\";\n"];
    for (let key in enums) { content.push(enums[key]); }
    fs.writeFileSync("lib/enumTypes.ts", content.join('\n'));

    // Create the complex types
    content = [
        "import * as EnumTypes from \"./enumTypes.d\";",
    ];
    for (let name in complexTypes) {
        let complexType = complexTypes[name];

        // Parse the properties
        let props = [];
        for (let prop of complexType.props) {
            // Add the property
            props.push("\t" + prop.name + ": " + getGraphType(prop.returnType) + ";");
        }

        // Add the endpoint
        content.push(`/*********************************************
* ${name}
**********************************************/
export interface ${name} ${complexType.returnType ? "extends " + complexType.returnType : ""} {
${props.join('\n')}
}`);
    }
    fs.writeFileSync("lib/microsoft/graph/complexTypes.d.ts", content.join('\n').replace(/ComplexTypes./g, ""));

    // Create the entities
    content = [
        "import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResults } from \"../../base\";",
        "import * as ComplexTypes from \"./complexTypes.d\";",
        "import * as EnumTypes from \"./enumTypes.d\";"
    ];

    // Create the mapper content
    let contentMapper = [];
    let contentMapperDef = [];

    // Parse the custom methods
    for (let name in customV2) {
        // Skip collections
        if (name.indexOf("Collection") > 0) { continue; }

        // See if it exists
        if (entities[name]) {
            // Append the methods
            entities[name].methods = entities[name].methods.concat(customV2[name]);
        }
        else {
            // Add the entry
            entities[name] = { props: [], methods: customV2[name] }
        }
    }

    // Get the entity names
    let entityNames = [];
    for (let name in entities) { entityNames.push(name); }
    entityNames = entityNames.sort();

    // Parse the entity names
    for (let i = 0; i < entityNames.length; i++) {
        let name = entityNames[i];
        let entity = entities[name];
        let baseType = entity.returnType && getGraphType(entity.returnType) ? getGraphType(entity.returnType) + " & " : "";

        // See if a collection exists
        let collectionInterface = null;
        let collectionMapper = "";
        let collectionMapperDef = "";
        if (collections["graph." + name] && baseType) {
            let containsAdd = false;
            collectionInterface = `
export interface ${name}Collection extends IBaseCollection<${name}, ${name}OData & ${name}Props> {`

            // Parse the methods
            let collectionMethods = customV2[name + "Collection"] || [];
            for (let j = 0; j < collectionMethods.length; j++) {
                // Get the method
                let collectionMethod = collectionMethods[j];
                containsAdd |= collectionMethod.name == "add";

                // Parse the args
                let collectionMethodArgs = [];
                let collectionMethodArgNames = [];
                for (let k = 0; k < collectionMethod.argNames.length; k++) {
                    let argName = collectionMethod.argNames[k];
                    collectionMethodArgs.push(argName.name + ": " + argName.type);
                    collectionMethodArgNames.push(argName.name);
                }

                // Add the method
                collectionInterface += `\n\t${collectionMethod.name}(${collectionMethodArgs.join(', ')}):IBaseExecution<${collectionMethod.returnType || "void"}>`;

                // Add the mapper information
                collectionMapper += `${collectionMapper ? "\n" : ""}\t\t${collectionMethod.name}: { argNames: ["${collectionMethodArgNames.join('", "')}"], requestType: RequestType.PostBodyNoArgs ${collectionMethod.returnType ? ", returnType: " + collectionMethod.returnType : ""} },`;
                collectionMapperDef += `${collectionMapperDef ? "\n" : ""}\t\t${collectionMethod.name}: IMapperMethod${collectionMethodArgs ? " & { argNames: [\"" + collectionMethodArgNames.join('", "') + "\"]" : ""} }`;
            }

            // Ensure the add method is there by default
            if (!containsAdd) {
                collectionInterface += `\nadd(values?: any): IBaseExecution<${name}>;`
            }

            // Add a new line char
            collectionInterface += `\n}`;
        }

        // Get the base return type
        let baseReturnType = null;
        if (entity.returnType) { baseReturnType = getGraphType(entity.returnType); }

        // Parse the properties
        let props = [];
        let parentReference = null;
        for (let prop of entity.props) {
            /* Comment out for now. Not sure if we need to set this as a reference or not
            if (prop.name == "parentReference") {
                // Set the parent reference
                parentReference = getGraphType(prop.returnType);
            } else {
                // Add the property
                props.push("\t" + prop.name + ": " + getGraphType(prop.returnType) + ";");
            }*/
            // Add the property
            props.push("\t" + prop.name + ": " + getGraphType(prop.returnType) + ";");
        }

        // Parse the methods
        let contentProperties = [];
        let mapper = [];
        let mapperDef = [];
        let methods = [];
        let odataResults = [];
        let prevName = null;
        for (let method of entity.methods) {
            // Add the method
            let argNames = method.argNames || [];
            let argStrings = [];
            let argsMapper = [];
            for (let i = 0; i < argNames.length; i++) {
                let argName = argNames[i];
                argsMapper.push(argName.name);
                argStrings.push(argName.name + ": " + argName.type);
            }
            let returnType = getGraphType(method.returnType, true) || "void";
            let isCollection = returnType.indexOf("[]") > 0;
            let isComplexType = returnType.indexOf("ComplexTypes.") == 0;
            let returnTypeName = returnType.replace(/\[\]$/, '');
            let methodsType = returnType == "void" || isComplexType || isCollection ? "" : " & " + returnTypeName + "Methods";
            let methodString = `\t${method.name}(${argStrings.join(", ")}): `
            if (isCollection) {
                let collectionType = returnTypeName.split('.');
                collectionType = collectionType[collectionType.length - 1];
                if (collections["graph." + collectionType] && getGraphType(entities[collectionType].returnType)) {
                    methodString += `${collectionType}Collection;`;
                } else {
                    methodString += `IBaseCollection<${returnTypeName}${!isComplexType ? ", " + baseType + returnTypeName + "OData & " + returnTypeName + "Props" : ""}>${methodsType}${method.returnType2 && getGraphType(method.returnType2, true) ? " & " + getGraphType(method.returnType2, true) : ""};`
                }
            } else {
                methodString += `${returnTypeName == "void" ? "IBaseExecution" : "IBaseQuery"}<${returnTypeName}>${methodsType}${method.returnType2 && getGraphType(method.returnType2, true) ? " & " + getGraphType(method.returnType2, true) : ""};`
            };
            methods.push(methodString);

            // Ensure we haven't already added it
            if (method.name != prevName) {
                // Add the mapper
                let mapperReturnType = returnTypeName.split('.');
                mapperReturnType = mapperReturnType[mapperReturnType.length - 1];
                argsMapperStr = argsMapper.length > 0 ? `"${argsMapper.join('", "')}"` : "";
                mapper.push(`\t\t${method.name}: {\n${argsMapperStr ? "\t\t\targNames: [" + argsMapperStr + "],\n" : ""}${isCollection ? "\t\t\trequestType: RequestType.Get,\n" : ""}${mapperReturnType != "void" ? "\t\t\treturnType: \"" + mapperReturnType + (isCollection ? "s" : "") + "\"\n" : ""}\t\t},`)
                mapperDef.push(`\t\t${method.name}: IMapperMethod${argsMapperStr ? " & {\n\t\t\targNames: [" + argsMapperStr + "]\n\t\t}" : ""};`);

                // See if it has args
                if (argStrings.length > 0) {
                    // Add the odata result
                    odataResults.push(methodString);
                } else {
                    // Add the odata result
                    odataResults.push(`\t${method.name}: ${isCollection ? "IBaseResults<" : ""}${returnTypeName}${isCollection ? ">" : ""};`);
                }
            }
            // Else, see if this is a collection property
            else if (argNames.length == 1) {
                let mapperReturnType = returnTypeName.split('.');
                mapperReturnType = mapperReturnType[mapperReturnType.length - 1];

                // Add the collection property
                contentProperties.push(`${method.name}|${mapperReturnType}s|/[Name]|${mapperReturnType}`);
            }

            // Set the previous name
            prevName = method.name;
        }

        // Parse the actions
        let entityActions = actions["graph." + name];
        if (entityActions) {
            for (let i = 0; i < entityActions.length; i++) {
                let entityAction = entityActions[i];
                let returnType = entityAction.returnType ? getGraphType(entityAction.returnType) : null;
                let prevMatch = i > 0 && entityActions[i - 1].name == entityAction.name ? true : false;

                // Parse the arguments
                let params = [];
                let paramDefs = [];
                for (let j = 0; j < entityAction.params.length; j++) {
                    let param = entityAction.params[j];

                    // Add the parameter
                    params.push(param.$.Name);
                    paramDefs.push(`${param.$.Name}: ${getGraphType(param.$.Type)}`);
                }

                // Add the method to the mapper and definition
                let strMapper = `\t\t${entityAction.name}: {\n${params.length > 0 ? "\t\t\targNames: [\"" + params.join('", "') + "\"],\n" : ""}\t\t\trequestType: RequestType.PostWithArgsInBody,\n${returnType ? "\t\t\treturnType: \"" + returnType + "\"\n" : ""}\t\t},`;
                let strMapperDef = `\t\t${entityAction.name}: IMapperMethod${params.length > 0 ? " & {\n\t\t\targNames: [\"" + params.join('", "') + "\"]\n\t\t}" : ""};`;
                if (prevMatch) {
                    mapper[mapper.length - 1] = strMapper;
                    mapperDef[mapperDef.length - 1] = strMapperDef;
                } else {
                    mapper.push(strMapper);
                    mapperDef.push(strMapperDef);
                }

                // Add the method
                let strMethod = `\t${entityAction.name}(${params.join(", ")}): IBaseExecution<${returnType || "void"}>;`;
                methods.push(strMethod);
                odataResults.push(strMethod);
            }
        }

        // Parse the functions
        let entityFunctions = functions["graph." + name];
        if (entityFunctions) {
            for (let i = 0; i < entityFunctions.length; i++) {
                let entityFunction = entityFunctions[i];
                let returnType = entityFunction.returnType ? getGraphType(entityFunction.returnType) : null;
                let prevMatch = i > 0 && entityFunctions[i - 1].name == entityFunction.name ? true : false;

                // Parse the arguments
                let params = [];
                let paramDefs = [];
                for (let j = 0; j < entityFunction.params.length; j++) {
                    let param = entityFunction.params[j];

                    // Add the parameter
                    params.push(param.$.Name);
                    paramDefs.push(`${param.$.Name}: ${getGraphType(param.$.Type)}`);
                }

                // Add the method to the mapper and definition
                let strMapper = `\t\t${entityFunction.name}: {\n${params.length > 0 ? "\t\t\targNames: [\"" + params.join('", "') + "\"],\n" : ""}\t\t\trequestType: RequestType.Get,\n${returnType ? "\t\t\treturnType: \"" + returnType + "\"\n" : ""}\t\t},`;
                let strMapperDef = `\t\t${entityFunction.name}: IMapperMethod${params.length > 0 ? " & {\n\t\t\targNames: [\"" + params.join('", "') + "\"]\n\t\t}" : ""};`;
                if (prevMatch) {
                    mapper[mapper.length - 1] = strMapper;
                    mapperDef[mapperDef.length - 1] = strMapperDef;
                } else {
                    mapper.push(strMapper);
                    mapperDef.push(strMapperDef);
                }

                // Add the method
                let strMethod = `\t${entityFunction.name}(${params.join(", ")}): ${returnType || "void"};`;
                methods.push(strMethod);
                odataResults.push(strMethod);
            }
        }

        // Add the endpoint
        /**
         * Commented out for now. Not sure if we need to use the parent reference or not
         * export interface ${name}Props${parentReference || baseReturnType ? " extends" : ""} ${parentReference ? parentReference : ""} ${parentReference && baseReturnType ? ", " : ""}${baseReturnType ? baseReturnType + "Props" : ""} {
         */
        content.push(`/*********************************************
* ${name}
**********************************************/
export interface ${name} extends ${name}Props, ${name}Methods { }
export interface ${name}Props${baseReturnType ? " extends " + baseReturnType + "Props" : ""} {
${props.join('\n')}
}
export interface ${name}Methods${baseReturnType ? " extends " + baseReturnType + "Methods" : ""} {
${methods.join('\n')}
}
export interface ${name}OData${baseReturnType ? " extends " + baseReturnType + "OData" : ""} {
${odataResults.join('\n')}
}${collectionInterface || ""}`);

        // Add the mapper
        contentMapper.push(`\t${name}: {
\t\tproperties: [
${contentProperties.length > 0 ? '\t\t\t"' + contentProperties.join('", "') + '"' : ""}
\t\t],
${name != "searchEntity" ? '\t\tquery: { argNames: ["oData"], requestType: RequestType.OData },' : ""}
${mapper.join('\n')}
\t},`);

        // Add the mapper
        contentMapperDef.push(`\t${name}: {
\t\tproperties?: Array<string>;
${name != "searchEntity" ? '\t\tquery: IMapperMethod & { argNames: ["oData"] };' : ""}
${mapperDef.join('\n')}
\t},`);

        // See if this is a collection
        if (collectionInterface && name != "site") {
            // Add the collection to the mapper
            contentMapper.push(`\t${name}s: {
\t\tquery: { argNames: ["oData"], requestType: RequestType.OData },${collectionMapper ? "\n" + collectionMapper : ""}
\t},`)
            contentMapperDef.push(`\t${name}s: {
\t\tproperties?: Array<string>;
\t\tquery: IMapperMethod & { argNames: ["oData"] }${collectionMapperDef ? "\n" + collectionMapperDef : ""}
\t},`);
        }
    }
    fs.writeFileSync("lib/microsoft/graph/entityTypes.d.ts", content.join('\n').replace(/EntityTypes./g, ""));

    // Create the mapper files
    fs.appendFileSync('lib/mapperv2.d.ts', [
        'import { IMapperMethod } from "./base";\n\n',
        '/** Mapper */',
        'export interface IMapper {',
        contentMapperDef.join('\n'),
        '}'
    ].join('\n'));
    fs.appendFileSync('lib/mapperv2.ts', [
        'import { IMapper } from "./mapperv2.d";',
        'import { RequestType } from "../utils";',
        'export const Mapper: IMapper = {',
        contentMapper.join('\n'),
        '}'
    ].join('\n'));
}

// Process the REST metadata
function processREST(schemas) {
    let directories = {};
    let enumInterfaces = {};
    let methods = {};
    let methodTypes = {};

    // Parse the schemas
    for (let i = 0; i < schemas.length; i++) {
        let schema = schemas[i];

        // Ensure a namespace name exists
        let ns = schema.$ ? schema.$.Namespace : null;
        if (ns) {
            // Set the directory name
            directories[ns] = directories[ns] || {};
            directories[ns]._api = [];
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

                            // See if this is an endpoint
                            if (functionInfo.$.IsComposable && functionInfo.$.IsBindable != "true") {
                                // Add the endpoint
                                directories[ns]._api.push(functionInfo.$);
                                continue;
                            }

                            // See if this function has the valid information
                            let isValid = functionInfo.Parameter ? functionInfo.Parameter[0] : null;
                            isValid = isValid ? isValid.$ : null;
                            isValid = functionInfo.$ && isValid && isValid.Name == "this" && isValid.Type ? true : false;
                            if (!isValid) { continue; }

                            // Get the function information
                            let name = functionInfo.$.Name[0].toLowerCase() + functionInfo.$.Name.slice(1);
                            let returnType = getType(functionInfo.$.ReturnType, enumInterfaces);
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

    // Parse the directories
    for (let dirName in directories) {
        // Create the directories
        createDirectories("lib", dirName);
    }

    // Copy the base file
    fs.copyFile("base.d.ts", "lib/base.d.ts", err => { console.error(err); })

    // Generate the index files
    generateIndexFiles("lib");

    // Append the index file
    fs.appendFileSync("lib/index.d.ts", [
        '\nimport * as Base from "./base";',
        'export { Base }',
        'import { IODataQuery } from "./base";',
        'export { IODataQuery }'
    ].join('\n'));

    // Determine the collections
    let { hasCollections, hasCollectionMethods, hasMethods } = analyzeCollections(directories);

    // Parse the directories
    // NameSpace -> Collection -> Interface -> Properties
    // Directory -> File
    let api = [];
    let apiImports = [];
    let mapper = {};
    for (let dirName in directories) {
        let files = {};
        let filesIndex = [];

        // Set the path
        let path = "lib/" + dirName.replace(/\./g, '/');

        // Parse the filenames
        for (let filename in directories[dirName]) {
            let content = [];
            let fileImports = [];

            // See if this is the API information
            if (filename == "_api") {
                let apiInfo = directories[dirName]._api;

                // Ensure data exists
                if (apiInfo.length == 0) { continue; }

                // Create the interface
                api.push('/** ' + dirName + ' */');
                api.push('export interface ' + dirName + '_API {');

                // Parse the endpoints
                for (let i = 0; i < apiInfo.length; i++) {
                    let endpoint = apiInfo[i];

                    // Validate the endpoint
                    if (endpoint.Name.indexOf('_') > 0) { continue; }

                    // Get the lib containing the type
                    let lib = endpoint.ReturnType.split('.')[0];

                    // See if this is a collection
                    if (/^Collection\(/.test(lib)) {
                        // Get the type
                        lib = lib.replace(/^Collection\(/, '');

                        // Update the return type
                        endpoint.ReturnType = endpoint.ReturnType.replace(/^Collection\(/, '').replace(/\)$/, '') + "Collections";
                    }
                    // Else, see if methods exist
                    else if (hasMethods[endpoint.ReturnType]) {
                        // Update the return type
                        let idx = endpoint.ReturnType.lastIndexOf('.');
                        endpoint.ReturnType = endpoint.ReturnType.substring(0, idx) + '.I' + endpoint.ReturnType.substring(idx + 1);
                    }

                    // Update the imports
                    apiImports.push('import { ' + lib + ' } from ".";');

                    // Add the endpoint
                    let needsQuotes = endpoint.Name.indexOf('.') > 0 ? true : false;
                    api.push('\t' + (needsQuotes ? '"' : '') + endpoint.Name + (needsQuotes ? '"' : '') + ': ' + endpoint.ReturnType + ';');
                }

                // End the interface
                api.push('}');

                // Continue the loop
                continue;
            }

            // Update the references
            updateReferences(fileImports, dirName, "Base.");

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

                                // See if this is a collection
                                if (methodInfo.isCollection) {
                                    // See if a base type exists
                                    let baseType = "";
                                    if (interface._BaseType) {
                                        baseType = interface._BaseType + "Collections & ";
                                    }

                                    // Add the methods
                                    collections.push('\t' + collection + '(): ' + generateBaseCollection(methodType, hasCollections, hasCollectionMethods) + ';');
                                    collections.push('\t' + collection + '(id: string | number): ' + baseType + generateBaseQuery(methodType, hasCollections, hasMethods) + ';');
                                    query.push('\t' + collection + ': Base.IBaseResults<' + methodType + '>' + (hasCollectionMethods[methodType] ? ' & ' + methodType + 'CollectionMethods' : '') + ';');
                                } else {
                                    // See if there is a query
                                    if (hasCollections[methodType]) {
                                        // Add the method
                                        props.push('\t' + collection + '(): ' + generateBaseQuery(methodType, hasCollections, hasMethods) + ';');
                                    } else {
                                        // Add the method
                                        props.push('\t' + collection + '(): ' + 'Base.IBaseExecution<' + methodType + '> & ' + methodType + 'Collections' + (hasMethods[methodType] ? ' & ' + methodType + 'Methods' : '') + ';');
                                    }

                                    // Add the method
                                    query.push('\t' + collection + ': ' + methodType + ' & ' + methodType + 'Collections' + (hasCollectionMethods[methodType] ? ' & ' + methodType + 'CollectionMethods' : '') + ';');
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
                                let paramType = getType(param.Type, enumInterfaces);

                                // Update the reference
                                paramType.indexOf('.') > 0 ? updateReferences(fileImports, dirName, paramType) : null;

                                // Add the parameter
                                params.push(param.Name + "?: " + getType(param.Type, enumInterfaces));
                            }

                            // Set the method type
                            let methodType = getType(methodInfo.returnType, enumInterfaces)

                            // Ensure this method isn't being overridden
                            if (!methodInfo.name.startsWith('\/\/')) {
                                // Add the mapper
                                let mapperKey = dirName + '.' + name + '.Collection';
                                mapper[mapperKey] = mapper[mapperKey] || [];

                                // Prevent duplicates
                                if (mapper[mapperKey].find(a => { return a.name == methodInfo.name; }) == null) {
                                    mapper[mapperKey].push(methodInfo);
                                }
                            }

                            // See if we are overwriting the type
                            if (methodInfo.overwrite) {
                                // Set the type
                                methodType = methodInfo.returnType;
                            }
                            // Else, see if this is a "getBy" method
                            else if (/^getBy/.test(methodInfo.name)) {
                                // Set the type
                                methodType = generateBaseQuery(methodType, hasCollections, hasMethods);
                            } else {
                                // Set the type
                                methodType = 'Base.IBaseExecution<' + methodType + '>';
                            }

                            // Prevent duplicates
                            let collectionMethod = '\t' + methodInfo.name + '(' + params.join(', ') + '): ' + methodType + ';';
                            if (collectionMethods.indexOf(collectionMethod) < 0) {
                                // Add the method
                                collectionMethods.push(collectionMethod);
                            }
                        }

                        // Continue the loop
                        continue;
                    }

                    // See if this object contains methods
                    if (propName == "_Methods") {
                        // Parse the methods
                        for (let i = 0; i < prop.length; i++) {
                            let methodInfo = prop[i];

                            // Set the method name
                            let methodName = methodInfo.name == "deleteObject" ? "delete" : methodInfo.name;

                            // Parse the parameters
                            let params = [];
                            for (let j = 0; j < methodInfo.params.length; j++) {
                                let param = methodInfo.params[j].$;
                                let paramType = getType(param.Type, enumInterfaces);

                                // Update the reference
                                paramType.indexOf('.') > 0 ? updateReferences(fileImports, dirName, paramType) : null;

                                // Add the parameter
                                params.push(param.Name + "?: " + paramType);
                            }

                            // Ensure this method isn't being overridden
                            if (!methodName.startsWith('\/\/')) {
                                // Add the mapper
                                let mapperKey = dirName + '.' + name;
                                mapper[mapperKey] = mapper[mapperKey] || [];
                                mapper[mapperKey].push(methodInfo);
                            }

                            // See if we are not overwriting the type
                            let methodType = methodInfo.returnType;
                            if (methodInfo.overwrite != true) {
                                // See if collections exist
                                if (hasCollections[methodType]) {
                                    // Update the reference
                                    updateReferences(fileImports, dirName, methodType);

                                    // Update the method type
                                    methodType = generateBaseQuery(methodType, hasCollections, hasMethods);
                                } else {
                                    // Get the type
                                    methodType = getType(methodInfo.returnType, enumInterfaces);

                                    // See if this is an array
                                    if (/^Array\<.*\>$/.test(methodType)) {
                                        // Remove the array
                                        methodType = methodType.replace(/^Array\</, '').replace(/\>$/, '');

                                        // Update the reference
                                        updateReferences(fileImports, dirName, methodType);

                                        // Set the type
                                        methodType = generateBaseCollection(methodType, hasCollections, hasCollectionMethods);
                                    } else {
                                        // Update the reference
                                        updateReferences(fileImports, dirName, methodType);

                                        // Set the type
                                        methodType = 'Base.IBaseExecution<' + methodType + '>';
                                    }
                                }
                            }

                            // Add the method
                            methods.push('\t' + methodName + '(' + params.join(', ') + '): ' + methodType + ';');
                        }

                        // Continue the loop
                        continue;
                    }

                    // Update the type
                    let type = getType(prop.Type, enumInterfaces);

                    // Update the references
                    updateReferences(fileImports, dirName, type);

                    // See if this type is a collection and this is the complex or entity types
                    if ((filename == "ComplexTypes" || filename == "EntityTypes") && /^Array\<.*\>$/.test(type)) {
                        // Ensure it's a results type
                        type = "{ results: " + type + " }";
                    }

                    // Add the variable
                    variables.push('\t' + propName + '?: ' + type + ';');
                }

                // See if collection and methods don't exist
                if (collections.length == 0 && methods.length == 0) {
                    // Generate the content
                    content.push(createInterface(name, null, variables.join('\n')));
                    content.push(createInterface(name + "Collections", collectionMethods.length > 0 ? [name + "CollectionMethods"] : null, collections.join('\n')));
                    query.length > 0 ? content.push(createInterface(name + "OData", "Base.IBaseResult, " + name, query.join('\n'))) : null;
                    collectionMethods.length > 0 ? content.push(createInterface(name + "CollectionMethods", null, collectionMethods.join('\n'))) : null;
                } else {
                    let baseTypes = interface._BaseType ? [interface._BaseType] : [];
                    baseTypes.push("Base.IBaseResult")
                    baseTypes.push(name + "Props");
                    baseTypes.push(name + "Collections");
                    baseTypes.push(name + "Methods");

                    // Parse the methods
                    let hasQueryMethod = false;
                    for (let i = 0; i < methods.length; i++) {
                        let method = methods[i];
                        if (/^\tquery\(/.test(method)) {
                            hasQueryMethod = true;
                            break;
                        }
                    }

                    // Generate the content
                    if (baseTypes[1] == "Base.IBaseResult") {
                        content.push(createInterface("I" + name, [baseTypes[0] + "Collections", name + "Collections", name + "Methods", (hasQueryMethod ? "Base.IBaseExecution<I" + name + ">" : "Base.IBaseQuery<" + name + ", I" + name + "Query>")].join(', ')));
                    } else {
                        content.push(createInterface("I" + name, [name + "Collections", name + "Methods", (hasQueryMethod ? "Base.IBaseExecution<I" + name + ">" : "Base.IBaseQuery<" + name + ", I" + name + "Query>")].join(', ')));
                    }
                    content.push(createInterface("I" + name + "Collection", "Base.IBaseResults<" + name + ">" + (collectionMethods.length > 0 ? ", " + name + "CollectionMethods" : ""), "\tdone?: (resolve: (value?: Array<" + name + ">) => void) => void;"));
                    content.push(createInterface("I" + name + "QueryCollection", "Base.IBaseResults<" + name + "OData>" + (collectionMethods.length > 0 ? ", " + name + "CollectionMethods" : ""), "\tdone?: (resolve: (value?: Array<" + name + "OData>) => void) => void;"));
                    content.push(createInterface("I" + name + "Query", [name + "OData", name + "Methods"].join(', ')));
                    content.push(createInterface(name, baseTypes.join(", ")));
                    content.push(createInterface(name + "Props", null, variables.join('\n')));
                    content.push(createInterface(name + "PropMethods", null, props.join('\n')));
                    content.push(createInterface(name + "Collections", name + "PropMethods", collections.join('\n')));
                    collectionMethods.length > 0 ? content.push(createInterface(name + "CollectionMethods", null, collectionMethods.join('\n'))) : null;
                    if (baseTypes[1] == "Base.IBaseResult") {
                        content.push(createInterface(name + "OData", [baseTypes[0] + (hasCollections[baseTypes[0]] ? "OData" : ""), "Base.IBaseResult", name + "Props", name + "Methods"].join(', '), query.join('\n')));
                    } else {
                        content.push(createInterface(name + "OData", ["Base.IBaseResult", name + "Props", name + "Methods"].join(', '), query.join('\n')));
                    }
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

    // Remove duplicates from the import array
    apiImports = apiImports.filter(function (item, pos) { return apiImports.indexOf(item) == pos; });

    // Create the api file
    fs.appendFileSync("lib/api.d.ts", apiImports.join('\n') + '\n\n' + api.join('\n'));

    // Get the mapper keys
    let mapperKeys = [];
    for (let mapperKey in mapper) { mapperKeys.push(mapperKey); }
    mapperKeys = mapperKeys.sort();

    // Parse the mapper names
    let mapperContent = [];
    let mapperDef = [];
    for (let i = 0; i < mapperKeys.length; i++) {
        let mapperKey = mapperKeys[i];
        let mapperMethods = [];

        // Add the lib
        mapperDef.push('\t"' + mapperKey + '": {');
        mapperContent.push('\t"' + mapperKey + '": {');

        // Add the optional properties
        mapperDef.push('\t\tproperties?: Array<string>;');

        // See if this type is queryable
        if (hasCollections[mapperKey] || /\.Collection$/.test(mapperKey)) {
            // Add the query method
            mapperMethods.push({
                name: "query",
                def: '\t\tquery: IMapperMethod & { argNames: ["oData"] },\n',
                method: '\t\tquery: { argNames: ["oData"], requestType: RequestType.OData },\n'
            });
        }

        // Parse the methods
        for (let i = 0; i < mapper[mapperKey].length; i++) {
            let argNames = [];
            let methodInfo = mapper[mapperKey][i];

            // Parse the parameters
            for (let j = 0; j < methodInfo.params.length; j++) {
                let param = methodInfo.params[j];

                // Append the argument
                argNames.push(param.$.Name);
            }

            // Validate the method name
            let methodName = methodInfo.name;
            if (methodName == "deleteObject") {
                // Update the method
                methodName = "delete";
            }

            // Add the method
            mapperMethods.push({
                name: methodName,
                def: [
                    '\t\t' + methodName + ': IMapperMethod & {\n',
                    argNames.length > 0 ? '\t\targNames: [ "' + argNames.join('", "') + '" ],\n' : '',
                    '\t\t},\n'
                ].join(''),
                method: [
                    '\t\t' + methodName + ': {\n',
                    argNames.length > 0 ? '\t\targNames: [ "' + argNames.join('", "') + '" ],\n' : '',
                    methodName == "delete" ? '\t\trequestType: RequestType.Delete\n' : '',
                    '\t\t},\n'
                ].join('')
            });
        }

        // Sort the methods
        mapperMethods = mapperMethods.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });

        // Parse the methods
        for (let i = 0; i < mapperMethods.length; i++) {
            mapperDef.push(mapperMethods[i].def);
            mapperContent.push(mapperMethods[i].method);
        }

        // Add the closing tag
        mapperDef.push('\t}\n');
        mapperContent.push('\t},\n');
    }

    // Create the mapper files
    fs.appendFileSync('lib/mapper.d.ts', [
        'import { IMapperMethod } from "./base";\n\n',
        '/** Mapper */',
        'export interface IMapper {',
        mapperDef.join('\n'),
        '}'
    ].join('\n'));
    fs.appendFileSync('lib/mapper.ts', [
        'import { IMapper } from "./mapper.d";',
        'declare var RequestType;\n',
        'export const Mapper: IMapper = {',
        mapperContent.join('\n'),
        '};'
    ].join('\n'));

    // Log
    console.log("Library generated in './lib'");
}

// Read the rest file
fs.readFile("metadata.xml", "utf8", function (err, rest) {
    if (err) {
        console.log("Error loading the REST xml.");
        console.log(err);
        return;
    }

    // Read the graph file
    fs.readFile("graph.xml", "utf8", function (err, graph) {
        if (err) {
            console.log("Error loading the Graph xml.");
            console.log(err);
            return;
        }

        // Parse the xml
        parser(rest, function (err, restXML) {
            // Process the REST metadata
            processREST(restXML["edmx:Edmx"]["edmx:DataServices"][0].Schema);

            // Parse the xml
            parser(graph, function (err, graphXML) {
                // Process the Graph metadata
                processGraph(graphXML["edmx:Edmx"]["edmx:DataServices"][0].Schema);
            });
        });
    });
});