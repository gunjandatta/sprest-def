/**
 * Custom Methods
 */
module.exports = {
    // Attachments
    "Collection(SP.Attachment)": [
        {
            name: "add",
            returnType: "SP.ListItem",
            params: [
                { $: { Name: "FileName", Type: "SP.ListItemCreationInformation" }, },
                { $: { Name: "Content", Type: "any" }, }
            ]
        }
    ],

    // Content Types
    "Collection(SP.ContentType)": [
        {
            name: "add",
            returnType: "SP.ContentType",
            params: [{ $: { Name: "parameters", Type: "SP.ContentTypeCreationInformation | any" } }]
        }
    ],

    // Features
    "Collection(SP.Feature)": [
        {
            name: "getByName",
            returnType: "IBaseResults<SP.Feature>",
            params: [{ $: { Name: "name", Type: "string" } }]
        }
    ],

    // Field
    "SP.Field": [
        {
            name: "add",
            returnType: "SP.Field",
            params: [{ $: { Name: "parameters", Type: "SP.FieldCreationInformation | any" } }]
        },
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Field Types - Fix "update" method
    "SP.FieldCalculated": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldChoice": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldComputed": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldCurrency": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldDateTime": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldGeolocation": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldGuid": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldLocation": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldLookup": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldMultiChoice": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldMultiLineText": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldNumber": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldRatingScale": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldText": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldUrl": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],
    "SP.FieldUser": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Fields
    "Collection(SP.Field)": [
        {
            name: "createFieldAsXml",
            returnType: "any",
            params: [{ $: { Name: "schemaXml", Type: "string" } }]
        }
    ],

    // Field Links
    "Collection(SP.FieldLink)": [
        {
            name: "add",
            returnType: "SP.FieldLink",
            params: [{ $: { Name: "parameters", Type: "any" } }]
        }
    ],

    // File
    "SP.File": [
        {
            name: "content",
            returnType: "any",
            params: []
        },
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Folder
    "SP.Folder": [
        {
            name: "getByUrl",
            returnType: "any",
            params: [{ $: { Name: "serverRelativeUrl", Type: "string" } }]
        },
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Groups
    "Collection(SP.Group)": [
        {
            name: "add",
            returnType: "SP.Group",
            params: [{ $: { Name: "parameters", Type: "SP.GroupCreationInformation" } }]
        }
    ],

    // List
    "SP.List": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Lists
    "Collection(SP.List)": [
        {
            name: "add",
            returnType: "SP.List",
            params: [{ $: { Name: "parameters", Type: "SP.ListCreationInformation | any" } }]
        }
    ],

    // List Item
    "SP.ListItem": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // List Items
    "Collection(SP.ListItem)": [
        {
            name: "add",
            returnType: "SP.ListItem",
            params: [{ $: { Name: "parameters", Type: "SP.ListItemCreationInformation | any" } }]
        }
    ],

    // Role Assignment
    "SP.RoleAssignment": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Role Definition
    "SP.RoleDefinition": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Site
    "SP.Site": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // User
    "SP.User": [
        {
            name: "add",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "SP.UserCreationInformation" } }]
        },
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // User Custom Action
    "SP.UserCustomAction": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // User Custom Actions
    "Collection(SP.UserCustomAction)": [
        {
            name: "add",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Web
    "SP.Web": [
        {
            name: "doesUserHavePermissions",
            returnType: "boolean",
            params: [
                { $: { Name: "high", Type: "number" } },
                { $: { Name: "low", Type: "number" } },
            ]
        },
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ]
}