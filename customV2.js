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
    siteCollection: [
        {
            name: "add",
            returnType: "site",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
}