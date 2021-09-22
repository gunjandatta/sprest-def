/**
 * Custom Methods
 */
module.exports = {
    // Search
    "Microsoft.Office.Server.Search.REST.SearchService": [
        {
            name: "searchquery",
            returnType: "Microsoft.Office.Server.Search.REST.SearchResult",
            params: [
                { $: { Name: "request", Type: "Microsoft.Office.Server.Search.REST.SearchRequest" } }
            ]
        }
    ],

    // Attachments
    "Collection(SP.Attachment)": [
        {
            name: "add",
            returnType: "SP.Attachment",
            params: [
                { $: { Name: "FileName", Type: "string" }, },
                { $: { Name: "Content", Type: "any" }, }
            ]
        }
    ],

    // Comments
    "Microsoft.SharePoint.Comments.comment": [
        {
            name: "delete",
            returnType: "any",
            params: []
        }
    ],

    // Comments
    "Collection(Microsoft.SharePoint.Comments.comment)": [
        {
            name: "add",
            returnType: "Microsoft.SharePoint.Comments.comment",
            params: [{ $: { Name: "text", Type: "string" } }]
        }
    ],

    // Content Type
    "SP.ContentType": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Content Types
    "Collection(SP.ContentType)": [
        {
            name: "add",
            returnType: "SP.ContentType",
            params: [{ $: { Name: "parameters", Type: "SP.ContentTypeCreationInformation" } }]
        }
    ],

    // Event Receiver
    "SP.EventReceiverDefinition": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Field
    "SP.Field": [
        {
            name: "add",
            returnType: "SP.Field",
            params: [{ $: { Name: "parameters", Type: "SP.FieldCreationInformation" } }]
        },
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Field Link
    "SP.FieldLink": [
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
    "SP.FieldThumbnail": [
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
            returnType: "SP.Field",
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

    // Files
    "Collection(SP.File)": [
        {
            name: "add",
            returnType: "SP.File",
            params: [
                { $: { Name: "Url", Type: "string" } },
                { $: { Name: "Overwrite", Type: "boolean" } },
                { $: { Name: "Content", Type: "any" } }
            ]
        }
    ],

    // Folder
    "SP.Folder": [
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
            name: "getItems",
            overwrite: true,
            returnType: "Base.IBaseCollection<SP.ListItem, SP.ListItemOData, Base.IBaseExecution & SP.ListItemCollectionMethods> & Base.IBaseExecution & SP.ListItemCollectionMethods",
            params: [{ $: { Name: "viewXML", Type: "string" } }]
        },
        {
            name: "getItemsByQuery",
            overwrite: true,
            returnType: "Base.IBaseCollection<SP.ListItem, SP.ListItemOData, Base.IBaseExecution & SP.ListItemCollectionMethods> & Base.IBaseExecution & SP.ListItemCollectionMethods",
            params: [{ $: { Name: "camlQuery", Type: "string" } }]
        },
        {
            name: "getUserEffectivePermissions",
            overwrite: true,
            returnType: "Base.IBaseExecution<{ GetUserEffectivePermissions: SP.BasePermissions }>",
            params: [{ $: { Name: "userName", Type: "string" } }]
        },
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
            params: [{ $: { Name: "parameters", Type: "SP.ListProps" } }]
        }
    ],

    // List Item
    "SP.ListItem": [
        {
            name: "getUserEffectivePermissions",
            overwrite: true,
            returnType: "Base.IBaseExecution<{ GetUserEffectivePermissions: SP.BasePermissions }>",
            params: [{ $: { Name: "userName", Type: "string" } }]
        },
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
            params: [{ $: { Name: "parameters", Type: "any" } }]
        }
    ],

    // Navigation
    "Collection(SP.NavigationNode)": [
        {
            name: "add",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "SP.NavigationNodeCreationInformation" } }]
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

    // Role Definitions
    "Collection(SP.RoleDefinition)": [
        {
            name: "add",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "SP.RoleDefinitionCreationInformation" } }]
        },
        // Note - This is added due to it existing in the metadata twice.
        //        Need to see if it's removed in future updates.
        {
            name: "getById",
            returnType: "SP.RoleDefinition",
            params: [{ $: { Name: "id", Type: "number" } }]
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

    // Tenant App
    "Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor": [
        {
            name: "add",
            returnType: "SP.File",
            params: [
                { $: { Name: "Url", Type: "string" } },
                { $: { Name: "Overwrite", Type: "boolean" } },
                { $: { Name: "Content", Type: "any" } }
            ]
        }
    ],
    "Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor": [
        {
            name: "add",
            returnType: "SP.File",
            params: [
                { $: { Name: "Url", Type: "string" } },
                { $: { Name: "Overwrite", Type: "boolean" } },
                { $: { Name: "Content", Type: "any" } }
            ]
        }
    ],

    // User
    "SP.User": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Users
    "Collection(SP.User)": [
        {
            name: "add",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "SP.UserCreationInformation" } }]
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

    // View
    "SP.View": [
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Views
    "Collection(SP.View)": [
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
                { $: { Name: "low", Type: "number" } }
            ]
        },
        {
            name: "getUserEffectivePermissions",
            overwrite: true,
            returnType: "Base.IBaseExecution<{ GetUserEffectivePermissions: SP.BasePermissions }>",
            params: [{ $: { Name: "userName", Type: "string" } }]
        },
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ],

    // Workflow Task
    "SP.Workflow.SPWorkflowTask": [
        {
            name: "getUserEffectivePermissions",
            overwrite: true,
            returnType: "Base.IBaseExecution<{ GetUserEffectivePermissions: SP.BasePermissions }>",
            params: [{ $: { Name: "userName", Type: "string" } }]
        },
        {
            name: "update",
            returnType: "any",
            params: [{ $: { Name: "properties", Type: "any" } }]
        }
    ]
}