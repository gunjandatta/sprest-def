##### Missing Properties

These are missing properties that are relevant to the SharePoint REST API.

###### EntityType List Item

```
<Property Name="Title" Type="Edm.String" />
<NavigationProperty Name="Comments" Relationship="PS.PS_Engagement_Comments_PS_EngagementComment_CommentsPartner" ToRole="Comments" FromRole="CommentsPartner"/>
```

###### ComplexType GroupCreationInformation

```
<Property Name="AllowMembersEditMembership" Type="Edm.Boolean" />
<Property Name="AllowRequestToJoinLeave" Type="Edm.Boolean" />
<Property Name="AutoAcceptRequestToJoinLeave" Type="Edm.Boolean" />
<Property Name="OnlyAllowMembersViewMembership" Type="Edm.Boolean" />
```