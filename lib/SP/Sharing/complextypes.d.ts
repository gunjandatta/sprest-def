import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* Principal
**********************************************/
export interface Principal {
	directoryObjectId?: string;
	email?: string;
	expiration?: string;
	id?: number;
	isActive?: boolean;
	isExternal?: boolean;
	jobTitle?: string;
	loginName?: string;
	name?: string;
	principalType?: number;
	userId?: SP.UserIdInfo;
	userPrincipalName?: string;
}

/*********************************************
* PrincipalCollections
**********************************************/
export interface PrincipalCollections {

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
* LinkInvitationCollections
**********************************************/
export interface LinkInvitationCollections {

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
* AccessRequestSettingsCollections
**********************************************/
export interface AccessRequestSettingsCollections {

}

/*********************************************
* AddressBarLinkSettings
**********************************************/
export interface AddressBarLinkSettings {
	linkDisabled?: boolean;
	linkPermission?: number;
}

/*********************************************
* AddressBarLinkSettingsCollections
**********************************************/
export interface AddressBarLinkSettingsCollections {

}

/*********************************************
* DirectSharingAbilities
**********************************************/
export interface DirectSharingAbilities {
	canAddExternalPrincipal?: SP.Sharing.SharingAbilityStatus;
	canAddInternalPrincipal?: SP.Sharing.SharingAbilityStatus;
	canAddNewExternalPrincipal?: SP.Sharing.SharingAbilityStatus;
	canRequestGrantAccess?: SP.Sharing.SharingAbilityStatus;
	canRequestGrantAccessForExistingExternalPrincipal?: SP.Sharing.SharingAbilityStatus;
	canRequestGrantAccessForInternalPrincipal?: SP.Sharing.SharingAbilityStatus;
	canRequestGrantAccessForNewExternalPrincipal?: SP.Sharing.SharingAbilityStatus;
	supportsEditPermission?: SP.Sharing.SharingAbilityStatus;
	supportsManageListPermission?: SP.Sharing.SharingAbilityStatus;
	supportsReadPermission?: SP.Sharing.SharingAbilityStatus;
	supportsRestrictedViewPermission?: SP.Sharing.SharingAbilityStatus;
	supportsReviewPermission?: SP.Sharing.SharingAbilityStatus;
}

/*********************************************
* DirectSharingAbilitiesCollections
**********************************************/
export interface DirectSharingAbilitiesCollections {

}

/*********************************************
* SharingAbilityStatus
**********************************************/
export interface SharingAbilityStatus {
	disabledReason?: number;
	enabled?: boolean;
}

/*********************************************
* SharingAbilityStatusCollections
**********************************************/
export interface SharingAbilityStatusCollections {

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
* DomainRestrictionSettingsCollections
**********************************************/
export interface DomainRestrictionSettingsCollections {

}

/*********************************************
* EmailData
**********************************************/
export interface EmailData {
	body?: string;
	subject?: string;
}

/*********************************************
* EmailDataCollections
**********************************************/
export interface EmailDataCollections {

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
* EntityPermissionCollections
**********************************************/
export interface EntityPermissionCollections {

}

/*********************************************
* EphemeralLinkRequest
**********************************************/
export interface EphemeralLinkRequest {
	meetingId?: string;
	peoplePickerInput?: string;
	settings?: SP.Sharing.ShareLinkSettings;
}

/*********************************************
* EphemeralLinkRequestCollections
**********************************************/
export interface EphemeralLinkRequestCollections {

}

/*********************************************
* ShareLinkSettings
**********************************************/
export interface ShareLinkSettings {
	allowAnonymousAccess?: boolean;
	applicationLink?: boolean;
	description?: string;
	embeddable?: boolean;
	expiration?: string;
	inviteesToRemove?: { results: Array<SP.Sharing.Principal> };
	limitUseToApplication?: boolean;
	linkKind?: number;
	nav?: string;
	nonDefaultLink?: boolean;
	password?: string;
	passwordProtected?: boolean;
	restrictShareMembership?: boolean;
	restrictToExistingRelationships?: boolean;
	role?: number;
	scope?: number;
	shareId?: any;
	trackLinkUsers?: boolean;
	updatePassword?: boolean;
}

/*********************************************
* ShareLinkSettingsCollections
**********************************************/
export interface ShareLinkSettingsCollections {

}

/*********************************************
* InheritedFrom
**********************************************/
export interface InheritedFrom {
	driveId?: string;
	driveType?: string;
	id?: string;
	name?: string;
	path?: string;
	shareId?: string;
	sharepointIds?: SP.Sharing.SharePointIds;
}

/*********************************************
* InheritedFromCollections
**********************************************/
export interface InheritedFromCollections {

}

/*********************************************
* SharePointIds
**********************************************/
export interface SharePointIds {
	listId?: string;
	listItemId?: string;
	listItemUniqueId?: string;
	siteId?: string;
	siteUrl?: string;
	tenantId?: string;
	webId?: string;
}

/*********************************************
* SharePointIdsCollections
**********************************************/
export interface SharePointIdsCollections {

}

/*********************************************
* LinkInfo
**********************************************/
export interface LinkInfo {
	inheritedFrom?: SP.Sharing.InheritedFrom;
	isInherited?: boolean;
	linkDetails?: SP.SharingLinkInfo;
	linkMembers?: { results: Array<SP.Sharing.Principal> };
	linkStatus?: SP.Sharing.SharingAbilityStatus;
	totalLinkMembersCount?: number;
}

/*********************************************
* LinkInfoCollections
**********************************************/
export interface LinkInfoCollections {

}

/*********************************************
* LinkParameters
**********************************************/
export interface LinkParameters {
	nav?: string;
}

/*********************************************
* LinkParametersCollections
**********************************************/
export interface LinkParametersCollections {

}

/*********************************************
* OversharedWebInfo
**********************************************/
export interface OversharedWebInfo {
	hasUniqueRoleAssignmentsForList?: boolean;
	principals?: { results: Array<SP.Sharing.Principal> };
}

/*********************************************
* OversharedWebInfoCollections
**********************************************/
export interface OversharedWebInfoCollections {

}

/*********************************************
* PermissionCollection
**********************************************/
export interface PermissionCollection {
	appConsentPrincipals?: { results: Array<SP.Sharing.PrincipalInfo> };
	hasInheritedLinks?: boolean;
	links?: { results: Array<SP.Sharing.LinkInfo> };
	principals?: { results: Array<SP.Sharing.PrincipalInfo> };
	siteAdmins?: { results: Array<SP.Sharing.PrincipalInfo> };
	totalNumberOfPrincipals?: number;
}

/*********************************************
* PermissionCollectionCollections
**********************************************/
export interface PermissionCollectionCollections {

}

/*********************************************
* PrincipalInfo
**********************************************/
export interface PrincipalInfo {
	ExpirationDateTimeOnACE?: any;
	inheritedFrom?: SP.Sharing.InheritedFrom;
	isInherited?: boolean;
	members?: { results: Array<SP.Sharing.Principal> };
	principal?: SP.Sharing.Principal;
	role?: number;
}

/*********************************************
* PrincipalInfoCollections
**********************************************/
export interface PrincipalInfoCollections {

}

/*********************************************
* RecipientLimits
**********************************************/
export interface RecipientLimits {
	checkPermissions?: SP.RecipientLimitsInfo;
	grantDirectAccess?: SP.RecipientLimitsInfo;
	shareLink?: SP.RecipientLimitsInfo;
	shareLinkWithDeferRedeem?: SP.RecipientLimitsInfo;
}

/*********************************************
* RecipientLimitsCollections
**********************************************/
export interface RecipientLimitsCollections {

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
* RecipientCollections
**********************************************/
export interface RecipientCollections {

}

/*********************************************
* SensitivityLabelInformation
**********************************************/
export interface SensitivityLabelInformation {
	color?: string;
	displayName?: string;
	hasIRMProtection?: boolean;
	id?: string;
	tooltip?: string;
}

/*********************************************
* SensitivityLabelInformationCollections
**********************************************/
export interface SensitivityLabelInformationCollections {

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
* SharedWithMeViewItemRemovalResultCollections
**********************************************/
export interface SharedWithMeViewItemRemovalResultCollections {

}

/*********************************************
* ShareLinkResponse
**********************************************/
export interface ShareLinkResponse {
	sharingLinkInfo?: SP.SharingLinkInfo;
}

/*********************************************
* ShareLinkResponseCollections
**********************************************/
export interface ShareLinkResponseCollections {

}

/*********************************************
* ShareLinkPartialSuccessResponse
**********************************************/
export interface ShareLinkPartialSuccessResponse {
	entityResults?: { results: Array<SP.Sharing.SharingEntityResult> };
}

/*********************************************
* ShareLinkPartialSuccessResponseCollections
**********************************************/
export interface ShareLinkPartialSuccessResponseCollections {

}

/*********************************************
* SharingEntityResult
**********************************************/
export interface SharingEntityResult {
	Description?: SP.Sharing.SharingEntityResultDescription;
	Key?: string;
}

/*********************************************
* SharingEntityResultCollections
**********************************************/
export interface SharingEntityResultCollections {

}

/*********************************************
* SharingEntityResultDescription
**********************************************/
export interface SharingEntityResultDescription {
	Result?: number;
	ResultString?: string;
}

/*********************************************
* SharingEntityResultDescriptionCollections
**********************************************/
export interface SharingEntityResultDescriptionCollections {

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
* ShareLinkRequestCollections
**********************************************/
export interface ShareLinkRequestCollections {

}

/*********************************************
* SharingAbilities
**********************************************/
export interface SharingAbilities {
	anonymousLinkAbilities?: SP.Sharing.SharingLinkAbilities;
	anyoneLinkAbilities?: SP.Sharing.SharingLinkAbilities;
	canStopSharing?: boolean;
	directSharingAbilities?: SP.Sharing.DirectSharingAbilities;
	organizationLinkAbilities?: SP.Sharing.SharingLinkAbilities;
	peopleSharingLinkAbilities?: SP.Sharing.SharingLinkAbilities;
}

/*********************************************
* SharingAbilitiesCollections
**********************************************/
export interface SharingAbilitiesCollections {

}

/*********************************************
* SharingLinkAbilities
**********************************************/
export interface SharingLinkAbilities {
	canAddNewExternalPrincipals?: SP.Sharing.SharingAbilityStatus;
	canDeleteEditLink?: SP.Sharing.SharingAbilityStatus;
	canDeleteManageListLink?: SP.Sharing.SharingAbilityStatus;
	canDeleteReadLink?: SP.Sharing.SharingAbilityStatus;
	canDeleteRestrictedViewLink?: SP.Sharing.SharingAbilityStatus;
	canDeleteReviewLink?: SP.Sharing.SharingAbilityStatus;
	canDeleteSubmitOnlyLink?: SP.Sharing.SharingAbilityStatus;
	canGetEditLink?: SP.Sharing.SharingAbilityStatus;
	canGetManageListLink?: SP.Sharing.SharingAbilityStatus;
	canGetReadLink?: SP.Sharing.SharingAbilityStatus;
	canGetRestrictedViewLink?: SP.Sharing.SharingAbilityStatus;
	canGetReviewLink?: SP.Sharing.SharingAbilityStatus;
	canGetSubmitOnlyLink?: SP.Sharing.SharingAbilityStatus;
	canHaveExternalUsers?: SP.Sharing.SharingAbilityStatus;
	canManageEditLink?: SP.Sharing.SharingAbilityStatus;
	canManageManageListLink?: SP.Sharing.SharingAbilityStatus;
	canManageReadLink?: SP.Sharing.SharingAbilityStatus;
	canManageRestrictedViewLink?: SP.Sharing.SharingAbilityStatus;
	canManageReviewLink?: SP.Sharing.SharingAbilityStatus;
	canManageSubmitOnlyLink?: SP.Sharing.SharingAbilityStatus;
	linkExpiration?: SP.Sharing.SharingLinkExpirationAbilityStatus;
	passwordProtected?: SP.Sharing.SharingLinkPasswordAbilityStatus;
	submitOnlylinkExpiration?: SP.Sharing.SharingLinkExpirationAbilityStatus;
	supportsRestrictedView?: SP.Sharing.SharingAbilityStatus;
	supportsRestrictToExistingRelationships?: SP.Sharing.SharingAbilityStatus;
	trackLinkUsers?: SP.Sharing.SharingAbilityStatus;
}

/*********************************************
* SharingLinkAbilitiesCollections
**********************************************/
export interface SharingLinkAbilitiesCollections {

}

/*********************************************
* SharingLinkExpirationAbilityStatus
**********************************************/
export interface SharingLinkExpirationAbilityStatus {
	defaultExpirationInDays?: number;
}

/*********************************************
* SharingLinkExpirationAbilityStatusCollections
**********************************************/
export interface SharingLinkExpirationAbilityStatusCollections {

}

/*********************************************
* SharingLinkPasswordAbilityStatus
**********************************************/
export interface SharingLinkPasswordAbilityStatus {

}

/*********************************************
* SharingLinkPasswordAbilityStatusCollections
**********************************************/
export interface SharingLinkPasswordAbilityStatusCollections {

}

/*********************************************
* SharingEntityResultSettingPolicyReason
**********************************************/
export interface SharingEntityResultSettingPolicyReason {
	SettingPolicyResult?: number;
	SettingPolicyResultString?: string;
}

/*********************************************
* SharingEntityResultSettingPolicyReasonCollections
**********************************************/
export interface SharingEntityResultSettingPolicyReasonCollections {

}

/*********************************************
* SharingInformationRequest
**********************************************/
export interface SharingInformationRequest {
	clientSupportedFeatures?: string;
	maxLinkMembersToReturn?: number;
	maxPrincipalsToReturn?: number;
	populateInheritedLinks?: boolean;
}

/*********************************************
* SharingInformationRequestCollections
**********************************************/
export interface SharingInformationRequestCollections {

}

/*********************************************
* SharingLinkAccessRequest
**********************************************/
export interface SharingLinkAccessRequest {
	ensureAccess?: boolean;
	password?: string;
}

/*********************************************
* SharingLinkAccessRequestCollections
**********************************************/
export interface SharingLinkAccessRequestCollections {

}

/*********************************************
* SharingLinkDefaultTemplatesCollection
**********************************************/
export interface SharingLinkDefaultTemplatesCollection {
	templates?: { results: Array<SP.Sharing.SharingLinkDefaultTemplate> };
}

/*********************************************
* SharingLinkDefaultTemplatesCollectionCollections
**********************************************/
export interface SharingLinkDefaultTemplatesCollectionCollections {

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
	trackLinkUsers?: boolean;
}

/*********************************************
* SharingLinkDefaultTemplateCollections
**********************************************/
export interface SharingLinkDefaultTemplateCollections {

}

/*********************************************
* SharingLinkTemplate
**********************************************/
export interface SharingLinkTemplate {
	passwordProtected?: boolean;
	role?: number;
	scope?: number;
	variant?: number;
}

/*********************************************
* SharingLinkTemplateCollections
**********************************************/
export interface SharingLinkTemplateCollections {

}

/*********************************************
* SiteSharingReportCapabilities
**********************************************/
export interface SiteSharingReportCapabilities {
	canCancelSharingReport?: boolean;
	canCreateSharingReport?: boolean;
	createSharingReportNotAllowedReason?: string;
	jobData?: SP.Sharing.SiteSharingReportJobData;
	stopSharingReportNotAllowedReason?: string;
}

/*********************************************
* SiteSharingReportCapabilitiesCollections
**********************************************/
export interface SiteSharingReportCapabilitiesCollections {

}

/*********************************************
* SiteSharingReportJobData
**********************************************/
export interface SiteSharingReportJobData {
	folderUrl?: string;
	webUrl?: string;
}

/*********************************************
* SiteSharingReportJobDataCollections
**********************************************/
export interface SiteSharingReportJobDataCollections {

}

/*********************************************
* SiteSharingReportStatus
**********************************************/
export interface SiteSharingReportStatus {
	errorCode?: number;
	jobData?: SP.Sharing.SiteSharingReportJobData;
	message?: string;
	success?: boolean;
}

/*********************************************
* SiteSharingReportStatusCollections
**********************************************/
export interface SiteSharingReportStatusCollections {

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
* UserDirectoryInfoCollections
**********************************************/
export interface UserDirectoryInfoCollections {

}

/*********************************************
* UserRoleAssignment
**********************************************/
export interface UserRoleAssignment {
	Role?: number;
	UserId?: string;
}

/*********************************************
* UserRoleAssignmentCollections
**********************************************/
export interface UserRoleAssignmentCollections {

}

/*********************************************
* UserSharingResult
**********************************************/
export interface UserSharingResult {
	AllowedRoles?: { results: Array<number> };
	CurrentRole?: number;
	DisplayName?: string;
	Email?: string;
	ExpirationDateTimeOnACE?: any;
	InvitationLink?: string;
	IsUserKnown?: boolean;
	Message?: string;
	OtherMails?: string;
	Status?: boolean;
	User?: string;
}

/*********************************************
* UserSharingResultCollections
**********************************************/
export interface UserSharingResultCollections {

}
