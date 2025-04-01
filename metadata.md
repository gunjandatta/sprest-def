##### Missing Properties

These are missing properties that are relevant to the SharePoint REST API.

###### EntityType ListItem

```
<Property Name="Title" Type="Edm.String" />
```

###### ComplexType GroupCreationInformation

```
<Property Name="AllowMembersEditMembership" Type="Edm.Boolean" />
<Property Name="AllowRequestToJoinLeave" Type="Edm.Boolean" />
<Property Name="AutoAcceptRequestToJoinLeave" Type="Edm.Boolean" />
<Property Name="OnlyAllowMembersViewMembership" Type="Edm.Boolean" />
```

###### FunctionImport Name="AddImage" for SitePageServices

Make the stream property the last option

```
<Parameter Name="this" Type="SP.Publishing.SitePageService" />
<Parameter Name="pageName" Type="Edm.String" />
<Parameter Name="imageFileName" Type="Edm.String" />
<Parameter Name="pageId" Type="Edm.Int32" Nullable="false" />
<Parameter Name="imageStream" Type="Edm.Stream" />
```