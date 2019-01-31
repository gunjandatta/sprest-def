import { IBaseExecution } from "../../";
import { SP } from "../../";

/*********************************************
* Principal
**********************************************/
export interface Principal {
	email?: string;
	id?: number;
	isActive?: boolean;
	isExternal?: boolean;
	jobTitle?: string;
	loginName?: string;
	name?: string;
	principalType?: number;
	userId?: SP.UserIdInfo;
}

/*********************************************
* LinkInvitation
**********************************************/
export interface LinkInvitation {
	invitedBy?: SP.Sharing.Principal;
	invitedOn?: string;
	invitee?: SP.Sharing.Principal;
}

/*********************************************
* AccessRequestSettings
**********************************************/
export interface AccessRequestSettings {
	hasPendingAccessRequests?: boolean;
	pendingAccessRequestsLink?: string;
	requiresAccessApproval?: boolean;
}

/*********************************************
* DirectSharingAbilities
**********************************************/
export interface DirectSharingAbilities {
	canAddExternalPrincipal?: SP.Sharing.SharingAbilityStatus;
	canAddInternalPrincipal?: SP.Sharing.SharingAbilityStatus;
	canRequestGrantAccess?: SP.Sharing.SharingAbilityStatus;
}

/*********************************************
* SharingAbilityStatus
**********************************************/
export interface SharingAbilityStatus {
	disabledReason?: number;
	enabled?: boolean;
}

/*********************************************
* DomainRestrictionSettings
**********************************************/
export interface DomainRestrictionSettings {
	domainRestrictionMode?: number;
	domainRestrictionModeAtSite?: number;
	restrictedDomains?: string;
	restrictedDomainsAtSite?: string;
}

/*********************************************
* EmailData
**********************************************/
export interface EmailData {
	body?: string;
	subject?: string;
}

/*********************************************
* EntityPermission
**********************************************/
export interface EntityPermission {
	canHaveAccess?: boolean;
	existingAccessType?: number;
	hasAccess?: boolean;
	inputEntity?: string;
	isPending?: boolean;
	recipientDeniedReason?: number;
	resolvedEntity?: string;
	role?: number;
}

/*********************************************
* LinkInfo
**********************************************/
export interface LinkInfo {
	isInherited?: boolean;
	linkDetails?: SP.SharingLinkInfo;
	linkMembers?: Array<SP.Sharing.Principal>;
}

/*********************************************
* OversharedWebInfo
**********************************************/
export interface OversharedWebInfo {
	hasUniqueRoleAssignmentsForList?: boolean;
	principals?: Array<SP.Sharing.Principal>;
}

/*********************************************
* PermissionCollection
**********************************************/
export interface PermissionCollection {
	links?: Array<SP.Sharing.LinkInfo>;
	principals?: Array<SP.Sharing.PrincipalInfo>;
	siteAdmins?: Array<SP.Sharing.PrincipalInfo>;
}

/*********************************************
* PrincipalInfo
**********************************************/
export interface PrincipalInfo {
	principal?: SP.Sharing.Principal;
	role?: number;
}

/*********************************************
* Recipient
**********************************************/
export interface Recipient {
	alias?: string;
	email?: string;
	objectId?: string;
}

/*********************************************
* SharedWithMeViewItemRemovalResult
**********************************************/
export interface SharedWithMeViewItemRemovalResult {
	ErrorCode?: number;
	ErrorMessage?: string;
	Success?: boolean;
}

/*********************************************
* ShareLinkRequest
**********************************************/
export interface ShareLinkRequest {
	createLink?: boolean;
	emailData?: SP.Sharing.EmailData;
	expiration?: string;
	linkKind?: number;
	peoplePickerInput?: string;
	settings?: SP.Sharing.ShareLinkSettings;
}

/*********************************************
* ShareLinkSettings
**********************************************/
export interface ShareLinkSettings {
	allowAnonymousAccess?: boolean;
	applicationLink?: boolean;
	description?: string;
	expiration?: string;
	inviteesToRemove?: Array<SP.Sharing.Principal>;
	limitUseToApplication?: boolean;
	linkKind?: number;
	nonDefaultLink?: boolean;
	password?: string;
	passwordProtected?: boolean;
	restrictShareMembership?: boolean;
	role?: number;
	shareId?: any;
	updatePassword?: boolean;
}

/*********************************************
* ShareLinkResponse
**********************************************/
export interface ShareLinkResponse {
	sharingLinkInfo?: SP.SharingLinkInfo;
}

/*********************************************
* SharingAbilities
**********************************************/
export interface SharingAbilities {
	anonymousLinkAbilities?: SP.Sharing.SharingLinkAbilities;
	directSharingAbilities?: SP.Sharing.DirectSharingAbilities;
	organizationLinkAbilities?: SP.Sharing.SharingLinkAbilities;
	peopleSharingLinkAbilities?: SP.Sharing.SharingLinkAbilities;
}

/*********************************************
* SharingLinkAbilities
**********************************************/
export interface SharingLinkAbilities {
	canGetEditLink?: SP.Sharing.SharingAbilityStatus;
	canGetReadLink?: SP.Sharing.SharingAbilityStatus;
	canHaveExternalUsers?: SP.Sharing.SharingAbilityStatus;
	canManageEditLink?: SP.Sharing.SharingAbilityStatus;
	canManageReadLink?: SP.Sharing.SharingAbilityStatus;
	linkExpiration?: SP.Sharing.SharingLinkExpirationAbilityStatus;
	passwordProtected?: SP.Sharing.SharingLinkPasswordAbilityStatus;
	supportsRestrictedView?: SP.Sharing.SharingAbilityStatus;
}

/*********************************************
* SharingLinkExpirationAbilityStatus
**********************************************/
export interface SharingLinkExpirationAbilityStatus extends SP.Sharing.SharingAbilityStatus {
	defaultExpirationInDays?: number;
}

/*********************************************
* SharingLinkPasswordAbilityStatus
**********************************************/
export interface SharingLinkPasswordAbilityStatus extends SP.Sharing.SharingAbilityStatus {

}

/*********************************************
* SharingInformationRequest
**********************************************/
export interface SharingInformationRequest {
	clientSupportedFeatures?: string;
	maxPrincipalsToReturn?: number;
	populateInheritedLinks?: boolean;
}

/*********************************************
* SharingLinkAccessRequest
**********************************************/
export interface SharingLinkAccessRequest {
	ensureAccess?: boolean;
	password?: string;
}

/*********************************************
* SharingLinkDefaultTemplatesCollection
**********************************************/
export interface SharingLinkDefaultTemplatesCollection {
	templates?: Array<SP.Sharing.SharingLinkDefaultTemplate>;
}

/*********************************************
* SharingLinkDefaultTemplate
**********************************************/
export interface SharingLinkDefaultTemplate {
	linkDetails?: SP.SharingLinkInfo;
	passwordProtected?: boolean;
	role?: number;
	scope?: number;
	shareKind?: number;
}

/*********************************************
* SharingLinkTemplate
**********************************************/
export interface SharingLinkTemplate {
	passwordProtected?: boolean;
	role?: number;
	scope?: number;
}

/*********************************************
* SiteSharingReportCapabilities
**********************************************/
export interface SiteSharingReportCapabilities {
	canCancelSharingReport?: boolean;
	canCreateSharingReport?: boolean;
	createSharingReportNotAllowedReason?: string;
	stopSharingReportNotAllowedReason?: string;
}

/*********************************************
* SiteSharingReportStatus
**********************************************/
export interface SiteSharingReportStatus {
	errorCode?: number;
	message?: string;
	success?: boolean;
}

/*********************************************
* UserDirectoryInfo
**********************************************/
export interface UserDirectoryInfo {
	Name?: string;
	NetId?: string;
	PrimaryEmail?: string;
	PrincipalName?: string;
}

/*********************************************
* UserRoleAssignment
**********************************************/
export interface UserRoleAssignment {
	Role?: number;
	UserId?: string;
}

/*********************************************
* UserSharingResult
**********************************************/
export interface UserSharingResult {
	AllowedRoles?: Array<number>;
	CurrentRole?: number;
	DisplayName?: string;
	Email?: string;
	InvitationLink?: string;
	IsUserKnown?: boolean;
	Message?: string;
	Status?: boolean;
	User?: string;
}
