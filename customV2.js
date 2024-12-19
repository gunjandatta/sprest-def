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
    driveItem: [
        {
            name: "setSensitivityLabel",
            argNames: [
                { name: "actionSource", type: "string" },
                { name: "assignmentMethod", type: "string" },
                { name: "id", type: "string" },
                { name: "justificationText", type: "string" }
            ]
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
            name: "update",
            argNames: [{ name: "values", type: "any" }]
        }
    ]
}