/**
 * Custom Methods for the v2 rest api
 */
module.exports = {
    columnDefinition: [
        {
            name: "update",
            returnType: "void",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    columnDefinitionCollection: [
        {
            name: "add",
            returnType: "column",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    contentType: [
        {
            name: "update",
            returnType: "void",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    contentTypeCollection: [
        {
            name: "add",
            returnType: "contentType",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    listItem: [
        {
            name: "update",
            returnType: "void",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    listItemCollection: [
        {
            name: "add",
            returnType: "item",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    list: [
        {
            name: "update",
            returnType: "void",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    listCollection: [
        {
            name: "add",
            returnType: "list",
            argNames: [{ name: "values", type: "any" }]
        },
        {
            name: "getById",
            returnType: "list",
            argNames: [{ name: "id", type: "string" }]
        },
        {
            name: "getByTitle",
            returnType: "list",
            argNames: [{ name: "title", type: "string" }]
        }
    ],
    permission: [
        {
            name: "update",
            returnType: "void",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    permissionCollection: [
        {
            name: "add",
            returnType: "permission",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    site: [
        {
            name: "permissions",
            returnType: "permissionCollection"
        },
        {
            name: "permissions",
            returnType: "permission",
            argNames: [{ name: "id", type: "string" }]
        }
    ],
    siteCollection: [
        {
            name: "add",
            returnType: "site",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
}