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
    contentType: [
        {
            name: "update",
            returnType: "void",
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
    permission: [
        {
            name: "update",
            returnType: "void",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    listItem: [
        {
            name: "extractSensitivityLabel",
            returnType: "void",
            argNames: [{ name: "values", type: "any" }]
        },
        {
            name: "setSensitivityLabel",
            returnType: "void",
            argNames: [{ name: "values", type: "{ actionSource?: string; assignmentMethod?: string; id: string; justificationText?: string; }" }]
        },
        {
            name: "update",
            returnType: "void",
            argNames: [{ name: "values", type: "any" }]
        }
    ]
}