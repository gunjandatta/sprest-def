/**
 * Custom Methods for the v2 rest api
 */
module.exports = {
    columnDefinition: [
        {
            name: "delete"
        },
        {
            name: "update",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    contentType: [
        {
            name: "delete"
        },
        {
            name: "update",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    driveItem: [
        {
            name: "delete"
        },
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
            name: "delete"
        },
        {
            name: "update",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    permission: [
        {
            name: "delete"
        },
        {
            name: "update",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    listItem: [
        {
            name: "delete"
        },
        {
            name: "update",
            argNames: [{ name: "values", type: "any" }]
        }
    ]
}