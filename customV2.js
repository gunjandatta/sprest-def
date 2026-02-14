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
            argNames: [{ name: "values", type: "{ [key: string]: any }" }]
        }
    ],
    contentType: [
        {
            name: "delete"
        },
        {
            name: "update",
            argNames: [{ name: "values", type: "{ [key: string]: any }" }]
        }
    ],
    drive: [
        {
            name: "getFolder",
            returnType: "driveItem",
            argNames: [
                { name: "folderUrl", type: "string" }
            ]
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
            argNames: [{ name: "values", type: "{ [key: string]: any }" }]
        }
    ],
    listCollection: [
        {
            name: "add",
            argNames: [{ name: "values", type: "{ [key: string]: any }" }]
        }
    ],
    listItem: [
        {
            name: "delete"
        },
        {
            name: "update",
            argNames: [{ name: "values", type: "{ [key: string]: any }" }]
        }
    ],
    listItemCollection: [
        {
            name: "add",
            argNames: [{ name: "fields", type: "{ [key: string]: any }" }]
        }
    ],
    permission: [
        {
            name: "delete"
        },
        {
            name: "update",
            argNames: [{ name: "values", type: "{ roles: string[], grantedToIdentities?: [{ application: { id: string, displayName?: string } }] }" }]
        }
    ],
    permissionCollection: [
        {
            name: "add",
            argNames: [{ name: "values", type: "{ roles: string[], grantedToIdentities: [{ application: { id: string, displayName?: string } }] }" }]
        }
    ]
}