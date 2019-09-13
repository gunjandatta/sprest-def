##### Missing Properties

These are missing properties that are relevant to the SharePoint REST API.

###### EntityType Group

```
<Property Name="Id" Type="Edm.Int32" Nullable="false" />
<Property Name="IsHiddenInUI" Type="Edm.Boolean" Nullable="false" />
<Property Name="Title" Type="Edm.String"/>
```

###### EntityType List Item

```
<Property Name="Title" Type="Edm.String" />
```

###### EntityType Web

```
<NavigationProperty Name="RoleAssignments" Relationship="SP.SP_SecurableObject_RoleAssignments_SP_RoleAssignment_RoleAssignmentsPartner" ToRole="RoleAssignments" FromRole="RoleAssignmentsPartner" />
```