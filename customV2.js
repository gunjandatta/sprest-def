/**
 * Custom Methods for the v2 rest api
 */
module.exports = {
    columnDefinition: [
        {
            name: "update",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    contentType: [
        {
            name: "update",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    list: [
        {
            name: "update",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    permission: [
        {
            name: "update",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    listItem: [
        {
            name: "extractSensitivityLabel",
            argNames: [{ name: "values", type: "any" }]
        },
        {
            name: "setSensitivityLabel",
            argNames: [{ name: "values", type: "{ actionSource?: string; assignmentMethod?: string; id: string; justificationText?: string; }" }]
        },
        {
            name: "update",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    sites: [
        {
            name: "add",
            argNames: [{ name: "values", type: "any" }]
        }
    ]
}