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
            name: "update",
            argNames: [{ name: "values", type: "any" }]
        }
    ],
    managedAppPolicy: [
        {
            name: "targetApps",
            argNames: [
                { name: "apps", type: "any" },
                { name: "appGroupType", type: "any" }
            ]
        }
    ],
    managedAppProtection: [
        {
            name: "targetApps",
            argNames: [
                { name: "apps", type: "any" },
                { name: "appGroupType", type: "any" }
            ]
        }
    ]
}