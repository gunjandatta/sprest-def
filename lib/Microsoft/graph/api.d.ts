import { IBaseExecution } from "../../base";
/*********************************************
* invitations
**********************************************/
export interface invitations extends IBaseExecution<EntityTypes.invitation> {
	invitedUser: IBaseExecution<users>;
}
/*********************************************
* users
**********************************************/
export interface users extends IBaseExecution<EntityTypes.user> {
	createdObjects: IBaseExecution<directoryObjects>;
	directReports: IBaseExecution<directoryObjects>;
	manager: IBaseExecution<directoryObjects>;
	memberOf: IBaseExecution<directoryObjects>;
	ownedDevices: IBaseExecution<directoryObjects>;
	ownedObjects: IBaseExecution<directoryObjects>;
	registeredDevices: IBaseExecution<directoryObjects>;
	transitiveMemberOf: IBaseExecution<directoryObjects>;
}
/*********************************************
* applicationTemplates
**********************************************/
export interface applicationTemplates extends IBaseExecution<EntityTypes.applicationTemplate> {

}
/*********************************************
* authenticationMethodConfigurations
**********************************************/
export interface authenticationMethodConfigurations extends IBaseExecution<EntityTypes.authenticationMethodConfiguration> {

}
/*********************************************
* identityProviders
**********************************************/
export interface identityProviders extends IBaseExecution<EntityTypes.identityProvider> {

}
/*********************************************
* applications
**********************************************/
export interface applications extends IBaseExecution<EntityTypes.application> {
	createdOnBehalfOf: IBaseExecution<directoryObjects>;
	owners: IBaseExecution<directoryObjects>;
}
/*********************************************
* certificateBasedAuthConfiguration
**********************************************/
export interface certificateBasedAuthConfiguration extends IBaseExecution<EntityTypes.certificateBasedAuthConfiguration> {

}
/*********************************************
* contacts
**********************************************/
export interface contacts extends IBaseExecution<EntityTypes.orgContact> {
	directReports: IBaseExecution<directoryObjects>;
	manager: IBaseExecution<directoryObjects>;
	memberOf: IBaseExecution<directoryObjects>;
	transitiveMemberOf: IBaseExecution<directoryObjects>;
}
/*********************************************
* contracts
**********************************************/
export interface contracts extends IBaseExecution<EntityTypes.contract> {

}
/*********************************************
* devices
**********************************************/
export interface devices extends IBaseExecution<EntityTypes.device> {
	registeredOwners: IBaseExecution<directoryObjects>;
	registeredUsers: IBaseExecution<directoryObjects>;
	transitiveMemberOf: IBaseExecution<directoryObjects>;
}
/*********************************************
* directoryObjects
**********************************************/
export interface directoryObjects extends IBaseExecution<EntityTypes.directoryObject> {

}
/*********************************************
* directoryRoles
**********************************************/
export interface directoryRoles extends IBaseExecution<EntityTypes.directoryRole> {
	members: IBaseExecution<directoryObjects>;
}
/*********************************************
* directoryRoleTemplates
**********************************************/
export interface directoryRoleTemplates extends IBaseExecution<EntityTypes.directoryRoleTemplate> {

}
/*********************************************
* domainDnsRecords
**********************************************/
export interface domainDnsRecords extends IBaseExecution<EntityTypes.domainDnsRecord> {

}
/*********************************************
* domains
**********************************************/
export interface domains extends IBaseExecution<EntityTypes.domain> {
	domainNameReferences: IBaseExecution<directoryObjects>;
}
/*********************************************
* groups
**********************************************/
export interface groups extends IBaseExecution<EntityTypes.group> {
	createdOnBehalfOf: IBaseExecution<directoryObjects>;
	memberOf: IBaseExecution<directoryObjects>;
	members: IBaseExecution<directoryObjects>;
	owners: IBaseExecution<directoryObjects>;
	transitiveMemberOf: IBaseExecution<directoryObjects>;
	transitiveMembers: IBaseExecution<directoryObjects>;
}
/*********************************************
* groupSettings
**********************************************/
export interface groupSettings extends IBaseExecution<EntityTypes.groupSetting> {

}
/*********************************************
* groupSettingTemplates
**********************************************/
export interface groupSettingTemplates extends IBaseExecution<EntityTypes.groupSettingTemplate> {

}
/*********************************************
* localizations
**********************************************/
export interface localizations extends IBaseExecution<EntityTypes.organizationalBrandingLocalization> {

}
/*********************************************
* oauth2PermissionGrants
**********************************************/
export interface oauth2PermissionGrants extends IBaseExecution<EntityTypes.oAuth2PermissionGrant> {

}
/*********************************************
* organization
**********************************************/
export interface organization extends IBaseExecution<EntityTypes.organization> {
	certificateBasedAuthConfiguration: IBaseExecution<EntityTypes.certificateBasedAuthConfiguration>;
}
/*********************************************
* permissionGrants
**********************************************/
export interface permissionGrants extends IBaseExecution<EntityTypes.resourceSpecificPermissionGrant> {

}
/*********************************************
* scopedRoleMemberships
**********************************************/
export interface scopedRoleMemberships extends IBaseExecution<EntityTypes.scopedRoleMembership> {

}
/*********************************************
* servicePrincipals
**********************************************/
export interface servicePrincipals extends IBaseExecution<EntityTypes.servicePrincipal> {
	createdObjects: IBaseExecution<directoryObjects>;
	memberOf: IBaseExecution<directoryObjects>;
	oauth2PermissionGrants: IBaseExecution<oauth2PermissionGrants>;
	ownedObjects: IBaseExecution<directoryObjects>;
	owners: IBaseExecution<directoryObjects>;
	transitiveMemberOf: IBaseExecution<directoryObjects>;
}
/*********************************************
* subscribedSkus
**********************************************/
export interface subscribedSkus extends IBaseExecution<EntityTypes.subscribedSku> {

}
/*********************************************
* places
**********************************************/
export interface places extends IBaseExecution<EntityTypes.place> {

}
/*********************************************
* drives
**********************************************/
export interface drives extends IBaseExecution<EntityTypes.drive> {

}
/*********************************************
* shares
**********************************************/
export interface shares extends IBaseExecution<EntityTypes.sharedDriveItem> {

}
/*********************************************
* sites
**********************************************/
export interface sites extends IBaseExecution<EntityTypes.site> {
	parentTerm: IBaseExecution<terms>;
	termSet: IBaseExecution<sets>;
	sharedColumns: IBaseExecution<columns>;
	welcomePageColumns: IBaseExecution<columns>;
}
/*********************************************
* schemaExtensions
**********************************************/
export interface schemaExtensions extends IBaseExecution<EntityTypes.schemaExtension> {

}
/*********************************************
* groupLifecyclePolicies
**********************************************/
export interface groupLifecyclePolicies extends IBaseExecution<EntityTypes.groupLifecyclePolicy> {

}
/*********************************************
* agreementAcceptances
**********************************************/
export interface agreementAcceptances extends IBaseExecution<EntityTypes.agreementAcceptance> {

}
/*********************************************
* agreements
**********************************************/
export interface agreements extends IBaseExecution<EntityTypes.agreement> {

}
/*********************************************
* dataPolicyOperations
**********************************************/
export interface dataPolicyOperations extends IBaseExecution<EntityTypes.dataPolicyOperation> {

}
/*********************************************
* subscriptions
**********************************************/
export interface subscriptions extends IBaseExecution<EntityTypes.subscription> {

}
/*********************************************
* connections
**********************************************/
export interface connections extends IBaseExecution<EntityTypes.externalConnection> {

}
/*********************************************
* chats
**********************************************/
export interface chats extends IBaseExecution<EntityTypes.chat> {

}
/*********************************************
* teams
**********************************************/
export interface teams extends IBaseExecution<EntityTypes.team> {
	group: IBaseExecution<groups>;
	template: IBaseExecution<teamsTemplates>;
}
/*********************************************
* teamsTemplates
**********************************************/
export interface teamsTemplates extends IBaseExecution<EntityTypes.teamsTemplate> {

}