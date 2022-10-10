import { IBaseExecution } from "../../base";
import * as EntityTypes from "./entityTypes.d"

/*********************************************
* invitations
**********************************************/
export interface invitations extends IBaseExecution<EntityTypes.invitation> {
	invitedUser: () => IBaseExecution<EntityTypes.user[]>;
}
/*********************************************
* users
**********************************************/
export interface users extends IBaseExecution<EntityTypes.user> {
	createdObjects: () => IBaseExecution<EntityTypes.directoryObject[]>;
	directReports: () => IBaseExecution<EntityTypes.directoryObject[]>;
	manager: () => IBaseExecution<EntityTypes.directoryObject[]>;
	memberOf: () => IBaseExecution<EntityTypes.directoryObject[]>;
	ownedDevices: () => IBaseExecution<EntityTypes.directoryObject[]>;
	ownedObjects: () => IBaseExecution<EntityTypes.directoryObject[]>;
	registeredDevices: () => IBaseExecution<EntityTypes.directoryObject[]>;
	transitiveMemberOf: () => IBaseExecution<EntityTypes.directoryObject[]>;
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
	createdOnBehalfOf: () => IBaseExecution<EntityTypes.directoryObject[]>;
	owners: () => IBaseExecution<EntityTypes.directoryObject[]>;
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
	directReports: () => IBaseExecution<EntityTypes.directoryObject[]>;
	manager: () => IBaseExecution<EntityTypes.directoryObject[]>;
	memberOf: () => IBaseExecution<EntityTypes.directoryObject[]>;
	transitiveMemberOf: () => IBaseExecution<EntityTypes.directoryObject[]>;
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
	registeredOwners: () => IBaseExecution<EntityTypes.directoryObject[]>;
	registeredUsers: () => IBaseExecution<EntityTypes.directoryObject[]>;
	transitiveMemberOf: () => IBaseExecution<EntityTypes.directoryObject[]>;
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
	members: () => IBaseExecution<EntityTypes.directoryObject[]>;
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
	domainNameReferences: () => IBaseExecution<EntityTypes.directoryObject[]>;
}
/*********************************************
* groups
**********************************************/
export interface groups extends IBaseExecution<EntityTypes.group> {
	createdOnBehalfOf: () => IBaseExecution<EntityTypes.directoryObject[]>;
	memberOf: () => IBaseExecution<EntityTypes.directoryObject[]>;
	members: () => IBaseExecution<EntityTypes.directoryObject[]>;
	owners: () => IBaseExecution<EntityTypes.directoryObject[]>;
	transitiveMemberOf: () => IBaseExecution<EntityTypes.directoryObject[]>;
	transitiveMembers: () => IBaseExecution<EntityTypes.directoryObject[]>;
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
	certificateBasedAuthConfiguration: () => IBaseExecution<EntityTypes.certificateBasedAuthConfiguration>;
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
	createdObjects: () => IBaseExecution<EntityTypes.directoryObject[]>;
	memberOf: () => IBaseExecution<EntityTypes.directoryObject[]>;
	oauth2PermissionGrants: () => IBaseExecution<oauth2PermissionGrants>;
	ownedObjects: () => IBaseExecution<EntityTypes.directoryObject[]>;
	owners: () => IBaseExecution<EntityTypes.directoryObject[]>;
	transitiveMemberOf: () => IBaseExecution<EntityTypes.directoryObject[]>;
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
	parentTerm: () => IBaseExecution<EntityTypes.term[]>;
	termSet: () => IBaseExecution<EntityTypes.set[]>;
	sharedColumns: () => IBaseExecution<columns>;
	welcomePageColumns: () => IBaseExecution<columns>;
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
	group: () => IBaseExecution<EntityTypes.group[]>;
	template: () => IBaseExecution<EntityTypes.teamsTemplate[]>;
}
/*********************************************
* teamsTemplates
**********************************************/
export interface teamsTemplates extends IBaseExecution<EntityTypes.teamsTemplate> {

}