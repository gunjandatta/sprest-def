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

###### FunctionImport - Fix the ReturnType value
```
<FunctionImport Name="GetUserProfilePropertyFor" ReturnType="SP.UserProfiles.PersonProperties" IsSideEffecting="false" IsBindable="true">
```
