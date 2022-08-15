import { IBaseResult } from "../../base";
/*********************************************
* invitations
**********************************************/
export interface invitations extends IBaseResult<EntityTypes.invitation> {
	invitedUser: IBaseResult<users>;
}
/*********************************************
* users
**********************************************/
export interface users extends IBaseResult<EntityTypes.user> {
	createdObjects: IBaseResult<directoryObjects>;
	directReports: IBaseResult<directoryObjects>;
	manager: IBaseResult<directoryObjects>;
	memberOf: IBaseResult<directoryObjects>;
	ownedDevices: IBaseResult<directoryObjects>;
	ownedObjects: IBaseResult<directoryObjects>;
	registeredDevices: IBaseResult<directoryObjects>;
	transitiveMemberOf: IBaseResult<directoryObjects>;
}
/*********************************************
* applicationTemplates
**********************************************/
export interface applicationTemplates extends IBaseResult<EntityTypes.applicationTemplate> {

}
/*********************************************
* authenticationMethodConfigurations
**********************************************/
export interface authenticationMethodConfigurations extends IBaseResult<EntityTypes.authenticationMethodConfiguration> {

}
/*********************************************
* identityProviders
**********************************************/
export interface identityProviders extends IBaseResult<EntityTypes.identityProvider> {

}
/*********************************************
* applications
**********************************************/
export interface applications extends IBaseResult<EntityTypes.application> {
	createdOnBehalfOf: IBaseResult<directoryObjects>;
	owners: IBaseResult<directoryObjects>;
}
/*********************************************
* certificateBasedAuthConfiguration
**********************************************/
export interface certificateBasedAuthConfiguration extends IBaseResult<EntityTypes.certificateBasedAuthConfiguration> {

}
/*********************************************
* contacts
**********************************************/
export interface contacts extends IBaseResult<EntityTypes.orgContact> {
	directReports: IBaseResult<directoryObjects>;
	manager: IBaseResult<directoryObjects>;
	memberOf: IBaseResult<directoryObjects>;
	transitiveMemberOf: IBaseResult<directoryObjects>;
}
/*********************************************
* contracts
**********************************************/
export interface contracts extends IBaseResult<EntityTypes.contract> {

}
/*********************************************
* devices
**********************************************/
export interface devices extends IBaseResult<EntityTypes.device> {
	registeredOwners: IBaseResult<directoryObjects>;
	registeredUsers: IBaseResult<directoryObjects>;
	transitiveMemberOf: IBaseResult<directoryObjects>;
}
/*********************************************
* directoryObjects
**********************************************/
export interface directoryObjects extends IBaseResult<EntityTypes.directoryObject> {

}
/*********************************************
* directoryRoles
**********************************************/
export interface directoryRoles extends IBaseResult<EntityTypes.directoryRole> {
	members: IBaseResult<directoryObjects>;
}
/*********************************************
* directoryRoleTemplates
**********************************************/
export interface directoryRoleTemplates extends IBaseResult<EntityTypes.directoryRoleTemplate> {

}
/*********************************************
* domainDnsRecords
**********************************************/
export interface domainDnsRecords extends IBaseResult<EntityTypes.domainDnsRecord> {

}
/*********************************************
* domains
**********************************************/
export interface domains extends IBaseResult<EntityTypes.domain> {
	domainNameReferences: IBaseResult<directoryObjects>;
}
/*********************************************
* groups
**********************************************/
export interface groups extends IBaseResult<EntityTypes.group> {
	createdOnBehalfOf: IBaseResult<directoryObjects>;
	memberOf: IBaseResult<directoryObjects>;
	members: IBaseResult<directoryObjects>;
	owners: IBaseResult<directoryObjects>;
	transitiveMemberOf: IBaseResult<directoryObjects>;
	transitiveMembers: IBaseResult<directoryObjects>;
}
/*********************************************
* groupSettings
**********************************************/
export interface groupSettings extends IBaseResult<EntityTypes.groupSetting> {

}
/*********************************************
* groupSettingTemplates
**********************************************/
export interface groupSettingTemplates extends IBaseResult<EntityTypes.groupSettingTemplate> {

}
/*********************************************
* localizations
**********************************************/
export interface localizations extends IBaseResult<EntityTypes.organizationalBrandingLocalization> {

}
/*********************************************
* oauth2PermissionGrants
**********************************************/
export interface oauth2PermissionGrants extends IBaseResult<EntityTypes.oAuth2PermissionGrant> {

}
/*********************************************
* organization
**********************************************/
export interface organization extends IBaseResult<EntityTypes.organization> {
	certificateBasedAuthConfiguration: IBaseResult<EntityTypes.certificateBasedAuthConfiguration>;
}
/*********************************************
* permissionGrants
**********************************************/
export interface permissionGrants extends IBaseResult<EntityTypes.resourceSpecificPermissionGrant> {

}
/*********************************************
* scopedRoleMemberships
**********************************************/
export interface scopedRoleMemberships extends IBaseResult<EntityTypes.scopedRoleMembership> {

}
/*********************************************
* servicePrincipals
**********************************************/
export interface servicePrincipals extends IBaseResult<EntityTypes.servicePrincipal> {
	createdObjects: IBaseResult<directoryObjects>;
	memberOf: IBaseResult<directoryObjects>;
	oauth2PermissionGrants: IBaseResult<oauth2PermissionGrants>;
	ownedObjects: IBaseResult<directoryObjects>;
	owners: IBaseResult<directoryObjects>;
	transitiveMemberOf: IBaseResult<directoryObjects>;
}
/*********************************************
* subscribedSkus
**********************************************/
export interface subscribedSkus extends IBaseResult<EntityTypes.subscribedSku> {

}
/*********************************************
* places
**********************************************/
export interface places extends IBaseResult<EntityTypes.place> {

}
/*********************************************
* drives
**********************************************/
export interface drives extends IBaseResult<EntityTypes.drive> {

}
/*********************************************
* shares
**********************************************/
export interface shares extends IBaseResult<EntityTypes.sharedDriveItem> {

}
/*********************************************
* sites
**********************************************/
export interface sites extends IBaseResult<EntityTypes.site> {
	parentTerm: IBaseResult<terms>;
	termSet: IBaseResult<sets>;
	sharedColumns: IBaseResult<columns>;
	welcomePageColumns: IBaseResult<columns>;
}
/*********************************************
* schemaExtensions
**********************************************/
export interface schemaExtensions extends IBaseResult<EntityTypes.schemaExtension> {

}
/*********************************************
* groupLifecyclePolicies
**********************************************/
export interface groupLifecyclePolicies extends IBaseResult<EntityTypes.groupLifecyclePolicy> {

}
/*********************************************
* agreementAcceptances
**********************************************/
export interface agreementAcceptances extends IBaseResult<EntityTypes.agreementAcceptance> {

}
/*********************************************
* agreements
**********************************************/
export interface agreements extends IBaseResult<EntityTypes.agreement> {

}
/*********************************************
* dataPolicyOperations
**********************************************/
export interface dataPolicyOperations extends IBaseResult<EntityTypes.dataPolicyOperation> {

}
/*********************************************
* subscriptions
**********************************************/
export interface subscriptions extends IBaseResult<EntityTypes.subscription> {

}
/*********************************************
* connections
**********************************************/
export interface connections extends IBaseResult<EntityTypes.externalConnection> {

}
/*********************************************
* chats
**********************************************/
export interface chats extends IBaseResult<EntityTypes.chat> {

}
/*********************************************
* teams
**********************************************/
export interface teams extends IBaseResult<EntityTypes.team> {
	group: IBaseResult<groups>;
	template: IBaseResult<teamsTemplates>;
}
/*********************************************
* teamsTemplates
**********************************************/
export interface teamsTemplates extends IBaseResult<EntityTypes.teamsTemplate> {

}