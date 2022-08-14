import { Base } from "../../";
import { graph } from "../../";
import { Edm } from "../../";

/*********************************************
* entity
**********************************************/
export interface entity {
	id?: string;
}

/*********************************************
* entityCollections
**********************************************/
export interface entityCollections {

}

/*********************************************
* auditLogRoot
**********************************************/
export interface auditLogRoot {

}

/*********************************************
* auditLogRootCollections
**********************************************/
export interface auditLogRootCollections {

}

/*********************************************
* directoryAudit
**********************************************/
export interface directoryAudit {
	activityDateTime?: anyOffset;
	activityDisplayName?: string;
	additionalDetails?: { results: Array<graph.keyValue> };
	category?: string;
	correlationId?: string;
	initiatedBy?: graph.auditActivityInitiator;
	loggedByService?: string;
	operationType?: string;
	result?: graph.operationResult;
	resultReason?: string;
	targetResources?: { results: Array<graph.targetResource> };
}

/*********************************************
* directoryAuditCollections
**********************************************/
export interface directoryAuditCollections {

}

/*********************************************
* provisioningObjectSummary
**********************************************/
export interface provisioningObjectSummary {
	activityDateTime?: anyOffset;
	changeId?: string;
	cycleId?: string;
	durationInMilliseconds?: number;
	initiatedBy?: graph.initiator;
	jobId?: string;
	modifiedProperties?: { results: Array<graph.modifiedProperty> };
	provisioningAction?: graph.provisioningAction;
	provisioningStatusInfo?: graph.provisioningStatusInfo;
	provisioningSteps?: { results: Array<graph.provisioningStep> };
	servicePrincipal?: graph.provisioningServicePrincipal;
	sourceIdentity?: graph.provisionedIdentity;
	sourceSystem?: graph.provisioningSystem;
	targetIdentity?: graph.provisionedIdentity;
	targetSystem?: graph.provisioningSystem;
	tenantId?: string;
}

/*********************************************
* provisioningObjectSummaryCollections
**********************************************/
export interface provisioningObjectSummaryCollections {

}

/*********************************************
* signIn
**********************************************/
export interface signIn {
	appDisplayName?: string;
	appId?: string;
	appliedConditionalAccessPolicies?: { results: Array<graph.appliedConditionalAccessPolicy> };
	clientAppUsed?: string;
	conditionalAccessStatus?: graph.conditionalAccessStatus;
	correlationId?: string;
	createdDateTime?: anyOffset;
	deviceDetail?: graph.deviceDetail;
	ipAddress?: string;
	isInteractive?: boolean;
	location?: graph.signInLocation;
	resourceDisplayName?: string;
	resourceId?: string;
	riskDetail?: graph.riskDetail;
	riskEventTypes?: { results: Array<graph.riskEventType> };
	riskEventTypes_v2?: { results: Array<string> };
	riskLevelAggregated?: graph.riskLevel;
	riskLevelDuringSignIn?: graph.riskLevel;
	riskState?: graph.riskState;
	status?: graph.signInStatus;
	userDisplayName?: string;
	userId?: string;
	userPrincipalName?: string;
}

/*********************************************
* signInCollections
**********************************************/
export interface signInCollections {

}

/*********************************************
* restrictedSignIn
**********************************************/
export interface restrictedSignIn {
	targetTenantId?: any;
}

/*********************************************
* restrictedSignInCollections
**********************************************/
export interface restrictedSignInCollections {

}

/*********************************************
* invitation
**********************************************/
export interface invitation {
	invitedUserDisplayName?: string;
	invitedUserEmailAddress?: string;
	invitedUserMessageInfo?: graph.invitedUserMessageInfo;
	invitedUserType?: string;
	inviteRedeemUrl?: string;
	inviteRedirectUrl?: string;
	sendInvitationMessage?: boolean;
	status?: string;
}

/*********************************************
* invitationCollections
**********************************************/
export interface invitationCollections {

}

/*********************************************
* directoryObject
**********************************************/
export interface directoryObject {
	deletedDateTime?: anyOffset;
}

/*********************************************
* directoryObjectCollections
**********************************************/
export interface directoryObjectCollections {

}

/*********************************************
* user
**********************************************/
export interface user {
	accountEnabled?: boolean;
	ageGroup?: string;
	assignedLicenses?: { results: Array<graph.assignedLicense> };
	assignedPlans?: { results: Array<graph.assignedPlan> };
	businessPhones?: { results: Array<string> };
	city?: string;
	companyName?: string;
	consentProvidedForMinor?: string;
	country?: string;
	createdDateTime?: anyOffset;
	creationType?: string;
	department?: string;
	displayName?: string;
	employeeHireDate?: anyOffset;
	employeeId?: string;
	employeeOrgData?: graph.employeeOrgData;
	employeeType?: string;
	externalUserState?: string;
	externalUserStateChangeDateTime?: anyOffset;
	faxNumber?: string;
	givenName?: string;
	identities?: { results: Array<graph.objectIdentity> };
	imAddresses?: { results: Array<string> };
	isResourceAccount?: boolean;
	jobTitle?: string;
	lastPasswordChangeDateTime?: anyOffset;
	legalAgeGroupClassification?: string;
	licenseAssignmentStates?: { results: Array<graph.licenseAssignmentState> };
	mail?: string;
	mailNickname?: string;
	mobilePhone?: string;
	officeLocation?: string;
	onPremisesDistinguishedName?: string;
	onPremisesDomainName?: string;
	onPremisesExtensionAttributes?: graph.onPremisesExtensionAttributes;
	onPremisesImmutableId?: string;
	onPremisesLastSyncDateTime?: anyOffset;
	onPremisesProvisioningErrors?: { results: Array<graph.onPremisesProvisioningError> };
	onPremisesSamAccountName?: string;
	onPremisesSecurityIdentifier?: string;
	onPremisesSyncEnabled?: boolean;
	onPremisesUserPrincipalName?: string;
	otherMails?: { results: Array<string> };
	passwordPolicies?: string;
	passwordProfile?: graph.passwordProfile;
	postalCode?: string;
	preferredDataLocation?: string;
	preferredLanguage?: string;
	provisionedPlans?: { results: Array<graph.provisionedPlan> };
	proxyAddresses?: { results: Array<string> };
	showInAddressList?: boolean;
	signInSessionsValidFromDateTime?: anyOffset;
	state?: string;
	streetAddress?: string;
	surname?: string;
	usageLocation?: string;
	userPrincipalName?: string;
	userType?: string;
	mailboxSettings?: graph.mailboxSettings;
	deviceEnrollmentLimit?: number;
	aboutMe?: string;
	birthday?: anyOffset;
	hireDate?: anyOffset;
	interests?: { results: Array<string> };
	mySite?: string;
	pastProjects?: { results: Array<string> };
	preferredName?: string;
	responsibilities?: { results: Array<string> };
	schools?: { results: Array<string> };
	skills?: { results: Array<string> };
}

/*********************************************
* userCollections
**********************************************/
export interface userCollections {

}

/*********************************************
* appRoleAssignment
**********************************************/
export interface appRoleAssignment {
	appRoleId?: any;
	createdDateTime?: anyOffset;
	principalDisplayName?: string;
	principalId?: any;
	principalType?: string;
	resourceDisplayName?: string;
	resourceId?: any;
}

/*********************************************
* appRoleAssignmentCollections
**********************************************/
export interface appRoleAssignmentCollections {

}

/*********************************************
* licenseDetails
**********************************************/
export interface licenseDetails {
	servicePlans?: { results: Array<graph.servicePlanInfo> };
	skuId?: any;
	skuPartNumber?: string;
}

/*********************************************
* licenseDetailsCollections
**********************************************/
export interface licenseDetailsCollections {

}

/*********************************************
* oAuth2PermissionGrant
**********************************************/
export interface oAuth2PermissionGrant {
	clientId?: string;
	consentType?: string;
	principalId?: string;
	resourceId?: string;
	scope?: string;
}

/*********************************************
* oAuth2PermissionGrantCollections
**********************************************/
export interface oAuth2PermissionGrantCollections {

}

/*********************************************
* scopedRoleMembership
**********************************************/
export interface scopedRoleMembership {
	administrativeUnitId?: string;
	roleId?: string;
	roleMemberInfo?: graph.identity;
}

/*********************************************
* scopedRoleMembershipCollections
**********************************************/
export interface scopedRoleMembershipCollections {

}

/*********************************************
* calendar
**********************************************/
export interface calendar {
	allowedOnlineMeetingProviders?: { results: Array<graph.onlineMeetingProviderType> };
	canEdit?: boolean;
	canShare?: boolean;
	canViewPrivateItems?: boolean;
	changeKey?: string;
	color?: graph.calendarColor;
	defaultOnlineMeetingProvider?: graph.onlineMeetingProviderType;
	hexColor?: string;
	isDefaultCalendar?: boolean;
	isRemovable?: boolean;
	isTallyingResponses?: boolean;
	name?: string;
	owner?: graph.emailAddress;
}

/*********************************************
* calendarCollections
**********************************************/
export interface calendarCollections {

}

/*********************************************
* calendarGroup
**********************************************/
export interface calendarGroup {
	changeKey?: string;
	classId?: any;
	name?: string;
}

/*********************************************
* calendarGroupCollections
**********************************************/
export interface calendarGroupCollections {

}

/*********************************************
* outlookItem
**********************************************/
export interface outlookItem {
	categories?: { results: Array<string> };
	changeKey?: string;
	createdDateTime?: anyOffset;
	lastModifiedDateTime?: anyOffset;
}

/*********************************************
* outlookItemCollections
**********************************************/
export interface outlookItemCollections {

}

/*********************************************
* event
**********************************************/
export interface event {
	allowNewTimeProposals?: boolean;
	attendees?: { results: Array<graph.attendee> };
	body?: graph.itemBody;
	bodyPreview?: string;
	end?: graph.dateTimeTimeZone;
	hasAttachments?: boolean;
	hideAttendees?: boolean;
	iCalUId?: string;
	importance?: graph.importance;
	isAllDay?: boolean;
	isCancelled?: boolean;
	isDraft?: boolean;
	isOnlineMeeting?: boolean;
	isOrganizer?: boolean;
	isReminderOn?: boolean;
	location?: graph.location;
	locations?: { results: Array<graph.location> };
	onlineMeeting?: graph.onlineMeetingInfo;
	onlineMeetingProvider?: graph.onlineMeetingProviderType;
	onlineMeetingUrl?: string;
	organizer?: graph.recipient;
	originalEndTimeZone?: string;
	originalStart?: anyOffset;
	originalStartTimeZone?: string;
	recurrence?: graph.patternedRecurrence;
	reminderMinutesBeforeStart?: number;
	responseRequested?: boolean;
	responseStatus?: graph.responseStatus;
	sensitivity?: graph.sensitivity;
	seriesMasterId?: string;
	showAs?: graph.freeBusyStatus;
	start?: graph.dateTimeTimeZone;
	subject?: string;
	transactionId?: string;
	type?: graph.eventType;
	webLink?: string;
}

/*********************************************
* eventCollections
**********************************************/
export interface eventCollections {

}

/*********************************************
* contactFolder
**********************************************/
export interface contactFolder {
	displayName?: string;
	parentFolderId?: string;
}

/*********************************************
* contactFolderCollections
**********************************************/
export interface contactFolderCollections {

}

/*********************************************
* contact
**********************************************/
export interface contact {
	assistantName?: string;
	birthday?: anyOffset;
	businessAddress?: graph.physicalAddress;
	businessHomePage?: string;
	businessPhones?: { results: Array<string> };
	children?: { results: Array<string> };
	companyName?: string;
	department?: string;
	displayName?: string;
	emailAddresses?: { results: Array<graph.emailAddress> };
	fileAs?: string;
	generation?: string;
	givenName?: string;
	homeAddress?: graph.physicalAddress;
	homePhones?: { results: Array<string> };
	imAddresses?: { results: Array<string> };
	initials?: string;
	jobTitle?: string;
	manager?: string;
	middleName?: string;
	mobilePhone?: string;
	nickName?: string;
	officeLocation?: string;
	otherAddress?: graph.physicalAddress;
	parentFolderId?: string;
	personalNotes?: string;
	profession?: string;
	spouseName?: string;
	surname?: string;
	title?: string;
	yomiCompanyName?: string;
	yomiGivenName?: string;
	yomiSurname?: string;
}

/*********************************************
* contactCollections
**********************************************/
export interface contactCollections {

}

/*********************************************
* inferenceClassification
**********************************************/
export interface inferenceClassification {

}

/*********************************************
* inferenceClassificationCollections
**********************************************/
export interface inferenceClassificationCollections {

}

/*********************************************
* mailFolder
**********************************************/
export interface mailFolder {
	childFolderCount?: number;
	displayName?: string;
	isHidden?: boolean;
	parentFolderId?: string;
	totalItemCount?: number;
	unreadItemCount?: number;
}

/*********************************************
* mailFolderCollections
**********************************************/
export interface mailFolderCollections {

}

/*********************************************
* message
**********************************************/
export interface message {
	bccRecipients?: { results: Array<graph.recipient> };
	body?: graph.itemBody;
	bodyPreview?: string;
	ccRecipients?: { results: Array<graph.recipient> };
	conversationId?: string;
	conversationIndex?: any;
	flag?: graph.followupFlag;
	from?: graph.recipient;
	hasAttachments?: boolean;
	importance?: graph.importance;
	inferenceClassification?: graph.inferenceClassificationType;
	internetMessageHeaders?: { results: Array<graph.internetMessageHeader> };
	internetMessageId?: string;
	isDeliveryReceiptRequested?: boolean;
	isDraft?: boolean;
	isRead?: boolean;
	isReadReceiptRequested?: boolean;
	parentFolderId?: string;
	receivedDateTime?: anyOffset;
	replyTo?: { results: Array<graph.recipient> };
	sender?: graph.recipient;
	sentDateTime?: anyOffset;
	subject?: string;
	toRecipients?: { results: Array<graph.recipient> };
	uniqueBody?: graph.itemBody;
	webLink?: string;
}

/*********************************************
* messageCollections
**********************************************/
export interface messageCollections {

}

/*********************************************
* outlookUser
**********************************************/
export interface outlookUser {

}

/*********************************************
* outlookUserCollections
**********************************************/
export interface outlookUserCollections {

}

/*********************************************
* person
**********************************************/
export interface person {
	birthday?: string;
	companyName?: string;
	department?: string;
	displayName?: string;
	givenName?: string;
	imAddress?: string;
	isFavorite?: boolean;
	jobTitle?: string;
	officeLocation?: string;
	personNotes?: string;
	personType?: graph.personType;
	phones?: { results: Array<graph.phone> };
	postalAddresses?: { results: Array<graph.location> };
	profession?: string;
	scoredEmailAddresses?: { results: Array<graph.scoredEmailAddress> };
	surname?: string;
	userPrincipalName?: string;
	websites?: { results: Array<graph.website> };
	yomiCompany?: string;
}

/*********************************************
* personCollections
**********************************************/
export interface personCollections {

}

/*********************************************
* baseItem
**********************************************/
export interface baseItem {
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	description?: string;
	eTag?: string;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: anyOffset;
	name?: string;
	parentReference?: graph.itemReference;
	webUrl?: string;
}

/*********************************************
* baseItemCollections
**********************************************/
export interface baseItemCollections {

}

/*********************************************
* drive
**********************************************/
export interface drive {
	driveType?: string;
	owner?: graph.identitySet;
	quota?: graph.quota;
	sharePointIds?: graph.sharepointIds;
	system?: graph.systemFacet;
}

/*********************************************
* driveCollections
**********************************************/
export interface driveCollections {

}

/*********************************************
* site
**********************************************/
export interface site {
	displayName?: string;
	error?: graph.publicError;
	root?: graph.root;
	sharepointIds?: graph.sharepointIds;
	siteCollection?: graph.siteCollection;
}

/*********************************************
* siteCollections
**********************************************/
export interface siteCollections {

}

/*********************************************
* extension
**********************************************/
export interface extension {

}

/*********************************************
* extensionCollections
**********************************************/
export interface extensionCollections {

}

/*********************************************
* agreementAcceptance
**********************************************/
export interface agreementAcceptance {
	agreementFileId?: string;
	agreementId?: string;
	deviceDisplayName?: string;
	deviceId?: string;
	deviceOSType?: string;
	deviceOSVersion?: string;
	expirationDateTime?: anyOffset;
	recordedDateTime?: anyOffset;
	state?: graph.agreementAcceptanceState;
	userDisplayName?: string;
	userEmail?: string;
	userId?: string;
	userPrincipalName?: string;
}

/*********************************************
* agreementAcceptanceCollections
**********************************************/
export interface agreementAcceptanceCollections {

}

/*********************************************
* managedDevice
**********************************************/
export interface managedDevice {
	activationLockBypassCode?: string;
	androidSecurityPatchLevel?: string;
	azureADDeviceId?: string;
	azureADRegistered?: boolean;
	complianceGracePeriodExpirationDateTime?: anyOffset;
	complianceState?: graph.complianceState;
	configurationManagerClientEnabledFeatures?: graph.configurationManagerClientEnabledFeatures;
	deviceActionResults?: { results: Array<graph.deviceActionResult> };
	deviceCategoryDisplayName?: string;
	deviceEnrollmentType?: graph.deviceEnrollmentType;
	deviceHealthAttestationState?: graph.deviceHealthAttestationState;
	deviceName?: string;
	deviceRegistrationState?: graph.deviceRegistrationState;
	easActivated?: boolean;
	easActivationDateTime?: anyOffset;
	easDeviceId?: string;
	emailAddress?: string;
	enrolledDateTime?: anyOffset;
	ethernetMacAddress?: string;
	exchangeAccessState?: graph.deviceManagementExchangeAccessState;
	exchangeAccessStateReason?: graph.deviceManagementExchangeAccessStateReason;
	exchangeLastSuccessfulSyncDateTime?: anyOffset;
	freeStorageSpaceInBytes?: number;
	iccid?: string;
	imei?: string;
	isEncrypted?: boolean;
	isSupervised?: boolean;
	jailBroken?: string;
	lastSyncDateTime?: anyOffset;
	managedDeviceName?: string;
	managedDeviceOwnerType?: graph.managedDeviceOwnerType;
	managementAgent?: graph.managementAgentType;
	manufacturer?: string;
	meid?: string;
	model?: string;
	notes?: string;
	operatingSystem?: string;
	osVersion?: string;
	partnerReportedThreatState?: graph.managedDevicePartnerReportedHealthState;
	phoneNumber?: string;
	physicalMemoryInBytes?: number;
	remoteAssistanceSessionErrorDetails?: string;
	remoteAssistanceSessionUrl?: string;
	serialNumber?: string;
	subscriberCarrier?: string;
	totalStorageSpaceInBytes?: number;
	udid?: string;
	userDisplayName?: string;
	userId?: string;
	userPrincipalName?: string;
	wiFiMacAddress?: string;
}

/*********************************************
* managedDeviceCollections
**********************************************/
export interface managedDeviceCollections {

}

/*********************************************
* managedAppRegistration
**********************************************/
export interface managedAppRegistration {
	appIdentifier?: graph.mobileAppIdentifier;
	applicationVersion?: string;
	createdDateTime?: anyOffset;
	deviceName?: string;
	deviceTag?: string;
	deviceType?: string;
	flaggedReasons?: { results: Array<graph.managedAppFlaggedReason> };
	lastSyncDateTime?: anyOffset;
	managementSdkVersion?: string;
	platformVersion?: string;
	userId?: string;
	version?: string;
}

/*********************************************
* managedAppRegistrationCollections
**********************************************/
export interface managedAppRegistrationCollections {

}

/*********************************************
* deviceManagementTroubleshootingEvent
**********************************************/
export interface deviceManagementTroubleshootingEvent {
	correlationId?: string;
	eventDateTime?: anyOffset;
}

/*********************************************
* deviceManagementTroubleshootingEventCollections
**********************************************/
export interface deviceManagementTroubleshootingEventCollections {

}

/*********************************************
* plannerUser
**********************************************/
export interface plannerUser {

}

/*********************************************
* plannerUserCollections
**********************************************/
export interface plannerUserCollections {

}

/*********************************************
* officeGraphInsights
**********************************************/
export interface officeGraphInsights {

}

/*********************************************
* officeGraphInsightsCollections
**********************************************/
export interface officeGraphInsightsCollections {

}

/*********************************************
* userSettings
**********************************************/
export interface userSettings {
	contributionToContentDiscoveryAsOrganizationDisabled?: boolean;
	contributionToContentDiscoveryDisabled?: boolean;
}

/*********************************************
* userSettingsCollections
**********************************************/
export interface userSettingsCollections {

}

/*********************************************
* onenote
**********************************************/
export interface onenote {

}

/*********************************************
* onenoteCollections
**********************************************/
export interface onenoteCollections {

}

/*********************************************
* profilePhoto
**********************************************/
export interface profilePhoto {
	height?: number;
	width?: number;
}

/*********************************************
* profilePhotoCollections
**********************************************/
export interface profilePhotoCollections {

}

/*********************************************
* userActivity
**********************************************/
export interface userActivity {
	activationUrl?: string;
	activitySourceHost?: string;
	appActivityId?: string;
	appDisplayName?: string;
	contentInfo?: graph.Json;
	contentUrl?: string;
	createdDateTime?: anyOffset;
	expirationDateTime?: anyOffset;
	fallbackUrl?: string;
	lastModifiedDateTime?: anyOffset;
	status?: graph.status;
	userTimezone?: string;
	visualElements?: graph.visualInfo;
}

/*********************************************
* userActivityCollections
**********************************************/
export interface userActivityCollections {

}

/*********************************************
* onlineMeeting
**********************************************/
export interface onlineMeeting {
	allowAttendeeToEnableCamera?: boolean;
	allowAttendeeToEnableMic?: boolean;
	allowedPresenters?: graph.onlineMeetingPresenters;
	allowMeetingChat?: graph.meetingChatMode;
	allowTeamworkReactions?: boolean;
	attendeeReport?: any;
	audioConferencing?: graph.audioConferencing;
	broadcastSettings?: graph.broadcastMeetingSettings;
	chatInfo?: graph.chatInfo;
	creationDateTime?: anyOffset;
	endDateTime?: anyOffset;
	externalId?: string;
	isBroadcast?: boolean;
	isEntryExitAnnounced?: boolean;
	joinInformation?: graph.itemBody;
	joinWebUrl?: string;
	lobbyBypassSettings?: graph.lobbyBypassSettings;
	participants?: graph.meetingParticipants;
	recordAutomatically?: boolean;
	startDateTime?: anyOffset;
	subject?: string;
	videoTeleconferenceId?: string;
}

/*********************************************
* onlineMeetingCollections
**********************************************/
export interface onlineMeetingCollections {

}

/*********************************************
* presence
**********************************************/
export interface presence {
	activity?: string;
	availability?: string;
}

/*********************************************
* presenceCollections
**********************************************/
export interface presenceCollections {

}

/*********************************************
* authentication
**********************************************/
export interface authentication {

}

/*********************************************
* authenticationCollections
**********************************************/
export interface authenticationCollections {

}

/*********************************************
* chat
**********************************************/
export interface chat {
	chatType?: graph.chatType;
	createdDateTime?: anyOffset;
	lastUpdatedDateTime?: anyOffset;
	onlineMeetingInfo?: graph.teamworkOnlineMeetingInfo;
	tenantId?: string;
	topic?: string;
	webUrl?: string;
}

/*********************************************
* chatCollections
**********************************************/
export interface chatCollections {

}

/*********************************************
* team
**********************************************/
export interface team {
	classification?: string;
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	funSettings?: graph.teamFunSettings;
	guestSettings?: graph.teamGuestSettings;
	internalId?: string;
	isArchived?: boolean;
	memberSettings?: graph.teamMemberSettings;
	messagingSettings?: graph.teamMessagingSettings;
	specialization?: graph.teamSpecialization;
	summary?: graph.teamSummary;
	tenantId?: string;
	visibility?: graph.teamVisibilityType;
	webUrl?: string;
}

/*********************************************
* teamCollections
**********************************************/
export interface teamCollections {

}

/*********************************************
* userTeamwork
**********************************************/
export interface userTeamwork {

}

/*********************************************
* userTeamworkCollections
**********************************************/
export interface userTeamworkCollections {

}

/*********************************************
* todo
**********************************************/
export interface todo {

}

/*********************************************
* todoCollections
**********************************************/
export interface todoCollections {

}

/*********************************************
* application
**********************************************/
export interface application {
	addIns?: { results: Array<graph.addIn> };
	api?: graph.apiApplication;
	appId?: string;
	applicationTemplateId?: string;
	appRoles?: { results: Array<graph.appRole> };
	certification?: graph.certification;
	createdDateTime?: anyOffset;
	description?: string;
	disabledByMicrosoftStatus?: string;
	displayName?: string;
	groupMembershipClaims?: string;
	identifierUris?: { results: Array<string> };
	info?: graph.informationalUrl;
	isDeviceOnlyAuthSupported?: boolean;
	isFallbackPublicClient?: boolean;
	keyCredentials?: { results: Array<graph.keyCredential> };
	logo?: any;
	notes?: string;
	oauth2RequirePostResponse?: boolean;
	optionalClaims?: graph.optionalClaims;
	parentalControlSettings?: graph.parentalControlSettings;
	passwordCredentials?: { results: Array<graph.passwordCredential> };
	publicClient?: graph.publicClientApplication;
	publisherDomain?: string;
	requiredResourceAccess?: { results: Array<graph.requiredResourceAccess> };
	samlMetadataUrl?: string;
	serviceManagementReference?: string;
	signInAudience?: string;
	spa?: graph.spaApplication;
	tags?: { results: Array<string> };
	tokenEncryptionKeyId?: any;
	verifiedPublisher?: graph.verifiedPublisher;
	web?: graph.webApplication;
}

/*********************************************
* applicationCollections
**********************************************/
export interface applicationCollections {

}

/*********************************************
* servicePrincipal
**********************************************/
export interface servicePrincipal {
	accountEnabled?: boolean;
	addIns?: { results: Array<graph.addIn> };
	alternativeNames?: { results: Array<string> };
	appDescription?: string;
	appDisplayName?: string;
	appId?: string;
	applicationTemplateId?: string;
	appOwnerOrganizationId?: any;
	appRoleAssignmentRequired?: boolean;
	appRoles?: { results: Array<graph.appRole> };
	description?: string;
	disabledByMicrosoftStatus?: string;
	displayName?: string;
	homepage?: string;
	info?: graph.informationalUrl;
	keyCredentials?: { results: Array<graph.keyCredential> };
	loginUrl?: string;
	logoutUrl?: string;
	notes?: string;
	notificationEmailAddresses?: { results: Array<string> };
	oauth2PermissionScopes?: { results: Array<graph.permissionScope> };
	passwordCredentials?: { results: Array<graph.passwordCredential> };
	preferredSingleSignOnMode?: string;
	preferredTokenSigningKeyThumbprint?: string;
	replyUrls?: { results: Array<string> };
	resourceSpecificApplicationPermissions?: { results: Array<graph.resourceSpecificPermission> };
	samlSingleSignOnSettings?: graph.samlSingleSignOnSettings;
	servicePrincipalNames?: { results: Array<string> };
	servicePrincipalType?: string;
	signInAudience?: string;
	tags?: { results: Array<string> };
	tokenEncryptionKeyId?: any;
}

/*********************************************
* servicePrincipalCollections
**********************************************/
export interface servicePrincipalCollections {

}

/*********************************************
* extensionProperty
**********************************************/
export interface extensionProperty {
	appDisplayName?: string;
	dataType?: string;
	isSyncedFromOnPremises?: boolean;
	name?: string;
	targetObjects?: { results: Array<string> };
}

/*********************************************
* extensionPropertyCollections
**********************************************/
export interface extensionPropertyCollections {

}

/*********************************************
* federatedIdentityCredential
**********************************************/
export interface federatedIdentityCredential {
	audiences?: { results: Array<string> };
	description?: string;
	issuer?: string;
	name?: string;
	subject?: string;
}

/*********************************************
* federatedIdentityCredentialCollections
**********************************************/
export interface federatedIdentityCredentialCollections {

}

/*********************************************
* policyBase
**********************************************/
export interface policyBase {
	description?: string;
	displayName?: string;
}

/*********************************************
* policyBaseCollections
**********************************************/
export interface policyBaseCollections {

}

/*********************************************
* stsPolicy
**********************************************/
export interface stsPolicy {
	definition?: { results: Array<string> };
	isOrganizationDefault?: boolean;
}

/*********************************************
* stsPolicyCollections
**********************************************/
export interface stsPolicyCollections {

}

/*********************************************
* homeRealmDiscoveryPolicy
**********************************************/
export interface homeRealmDiscoveryPolicy {

}

/*********************************************
* homeRealmDiscoveryPolicyCollections
**********************************************/
export interface homeRealmDiscoveryPolicyCollections {

}

/*********************************************
* tokenIssuancePolicy
**********************************************/
export interface tokenIssuancePolicy {

}

/*********************************************
* tokenIssuancePolicyCollections
**********************************************/
export interface tokenIssuancePolicyCollections {

}

/*********************************************
* tokenLifetimePolicy
**********************************************/
export interface tokenLifetimePolicy {

}

/*********************************************
* tokenLifetimePolicyCollections
**********************************************/
export interface tokenLifetimePolicyCollections {

}

/*********************************************
* applicationTemplate
**********************************************/
export interface applicationTemplate {
	categories?: { results: Array<string> };
	description?: string;
	displayName?: string;
	homePageUrl?: string;
	logoUrl?: string;
	publisher?: string;
	supportedProvisioningTypes?: { results: Array<string> };
	supportedSingleSignOnModes?: { results: Array<string> };
}

/*********************************************
* applicationTemplateCollections
**********************************************/
export interface applicationTemplateCollections {

}

/*********************************************
* claimsMappingPolicy
**********************************************/
export interface claimsMappingPolicy {

}

/*********************************************
* claimsMappingPolicyCollections
**********************************************/
export interface claimsMappingPolicyCollections {

}

/*********************************************
* delegatedPermissionClassification
**********************************************/
export interface delegatedPermissionClassification {
	classification?: graph.permissionClassificationType;
	permissionId?: string;
	permissionName?: string;
}

/*********************************************
* delegatedPermissionClassificationCollections
**********************************************/
export interface delegatedPermissionClassificationCollections {

}

/*********************************************
* endpoint
**********************************************/
export interface endpoint {
	capability?: string;
	providerId?: string;
	providerName?: string;
	providerResourceId?: string;
	uri?: string;
}

/*********************************************
* endpointCollections
**********************************************/
export interface endpointCollections {

}

/*********************************************
* authenticationMethodConfiguration
**********************************************/
export interface authenticationMethodConfiguration {
	state?: graph.authenticationMethodState;
}

/*********************************************
* authenticationMethodConfigurationCollections
**********************************************/
export interface authenticationMethodConfigurationCollections {

}

/*********************************************
* authenticationMethodsPolicy
**********************************************/
export interface authenticationMethodsPolicy {
	description?: string;
	displayName?: string;
	lastModifiedDateTime?: anyOffset;
	policyVersion?: string;
	reconfirmationInDays?: number;
	registrationEnforcement?: graph.registrationEnforcement;
}

/*********************************************
* authenticationMethodsPolicyCollections
**********************************************/
export interface authenticationMethodsPolicyCollections {

}

/*********************************************
* authenticationMethodTarget
**********************************************/
export interface authenticationMethodTarget {
	isRegistrationRequired?: boolean;
	targetType?: graph.authenticationMethodTargetType;
}

/*********************************************
* authenticationMethodTargetCollections
**********************************************/
export interface authenticationMethodTargetCollections {

}

/*********************************************
* emailAuthenticationMethodConfiguration
**********************************************/
export interface emailAuthenticationMethodConfiguration {
	allowExternalIdToUseEmailOtp?: graph.externalEmailOtpState;
}

/*********************************************
* emailAuthenticationMethodConfigurationCollections
**********************************************/
export interface emailAuthenticationMethodConfigurationCollections {

}

/*********************************************
* fido2AuthenticationMethodConfiguration
**********************************************/
export interface fido2AuthenticationMethodConfiguration {
	isAttestationEnforced?: boolean;
	isSelfServiceRegistrationAllowed?: boolean;
	keyRestrictions?: graph.fido2KeyRestrictions;
}

/*********************************************
* fido2AuthenticationMethodConfigurationCollections
**********************************************/
export interface fido2AuthenticationMethodConfigurationCollections {

}

/*********************************************
* microsoftAuthenticatorAuthenticationMethodConfiguration
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodConfiguration {

}

/*********************************************
* microsoftAuthenticatorAuthenticationMethodConfigurationCollections
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodConfigurationCollections {

}

/*********************************************
* microsoftAuthenticatorAuthenticationMethodTarget
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodTarget {
	authenticationMode?: graph.microsoftAuthenticatorAuthenticationMode;
}

/*********************************************
* microsoftAuthenticatorAuthenticationMethodTargetCollections
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodTargetCollections {

}

/*********************************************
* policyRoot
**********************************************/
export interface policyRoot {

}

/*********************************************
* policyRootCollections
**********************************************/
export interface policyRootCollections {

}

/*********************************************
* authenticationFlowsPolicy
**********************************************/
export interface authenticationFlowsPolicy {
	description?: string;
	displayName?: string;
	selfServiceSignUp?: graph.selfServiceSignUpAuthenticationFlowConfiguration;
}

/*********************************************
* authenticationFlowsPolicyCollections
**********************************************/
export interface authenticationFlowsPolicyCollections {

}

/*********************************************
* activityBasedTimeoutPolicy
**********************************************/
export interface activityBasedTimeoutPolicy {

}

/*********************************************
* activityBasedTimeoutPolicyCollections
**********************************************/
export interface activityBasedTimeoutPolicyCollections {

}

/*********************************************
* authorizationPolicy
**********************************************/
export interface authorizationPolicy {
	allowedToSignUpEmailBasedSubscriptions?: boolean;
	allowedToUseSSPR?: boolean;
	allowEmailVerifiedUsersToJoinOrganization?: boolean;
	allowInvitesFrom?: graph.allowInvitesFrom;
	blockMsolPowerShell?: boolean;
	defaultUserRolePermissions?: graph.defaultUserRolePermissions;
	guestUserRoleId?: any;
}

/*********************************************
* authorizationPolicyCollections
**********************************************/
export interface authorizationPolicyCollections {

}

/*********************************************
* crossTenantAccessPolicy
**********************************************/
export interface crossTenantAccessPolicy {

}

/*********************************************
* crossTenantAccessPolicyCollections
**********************************************/
export interface crossTenantAccessPolicyCollections {

}

/*********************************************
* permissionGrantPolicy
**********************************************/
export interface permissionGrantPolicy {

}

/*********************************************
* permissionGrantPolicyCollections
**********************************************/
export interface permissionGrantPolicyCollections {

}

/*********************************************
* featureRolloutPolicy
**********************************************/
export interface featureRolloutPolicy {
	description?: string;
	displayName?: string;
	feature?: graph.stagedFeatureName;
	isAppliedToOrganization?: boolean;
	isEnabled?: boolean;
}

/*********************************************
* featureRolloutPolicyCollections
**********************************************/
export interface featureRolloutPolicyCollections {

}

/*********************************************
* adminConsentRequestPolicy
**********************************************/
export interface adminConsentRequestPolicy {
	isEnabled?: boolean;
	notifyReviewers?: boolean;
	remindersEnabled?: boolean;
	requestDurationInDays?: number;
	reviewers?: { results: Array<graph.accessReviewReviewerScope> };
	version?: number;
}

/*********************************************
* adminConsentRequestPolicyCollections
**********************************************/
export interface adminConsentRequestPolicyCollections {

}

/*********************************************
* conditionalAccessPolicy
**********************************************/
export interface conditionalAccessPolicy {
	conditions?: graph.conditionalAccessConditionSet;
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	grantControls?: graph.conditionalAccessGrantControls;
	modifiedDateTime?: anyOffset;
	sessionControls?: graph.conditionalAccessSessionControls;
	state?: graph.conditionalAccessPolicyState;
}

/*********************************************
* conditionalAccessPolicyCollections
**********************************************/
export interface conditionalAccessPolicyCollections {

}

/*********************************************
* identitySecurityDefaultsEnforcementPolicy
**********************************************/
export interface identitySecurityDefaultsEnforcementPolicy {
	isEnabled?: boolean;
}

/*********************************************
* identitySecurityDefaultsEnforcementPolicyCollections
**********************************************/
export interface identitySecurityDefaultsEnforcementPolicyCollections {

}

/*********************************************
* unifiedRoleManagementPolicy
**********************************************/
export interface unifiedRoleManagementPolicy {
	description?: string;
	displayName?: string;
	isOrganizationDefault?: boolean;
	lastModifiedBy?: graph.identity;
	lastModifiedDateTime?: anyOffset;
	scopeId?: string;
	scopeType?: string;
}

/*********************************************
* unifiedRoleManagementPolicyCollections
**********************************************/
export interface unifiedRoleManagementPolicyCollections {

}

/*********************************************
* unifiedRoleManagementPolicyAssignment
**********************************************/
export interface unifiedRoleManagementPolicyAssignment {
	policyId?: string;
	roleDefinitionId?: string;
	scopeId?: string;
	scopeType?: string;
}

/*********************************************
* unifiedRoleManagementPolicyAssignmentCollections
**********************************************/
export interface unifiedRoleManagementPolicyAssignmentCollections {

}

/*********************************************
* temporaryAccessPassAuthenticationMethodConfiguration
**********************************************/
export interface temporaryAccessPassAuthenticationMethodConfiguration {
	defaultLength?: number;
	defaultLifetimeInMinutes?: number;
	isUsableOnce?: boolean;
	maximumLifetimeInMinutes?: number;
	minimumLifetimeInMinutes?: number;
}

/*********************************************
* temporaryAccessPassAuthenticationMethodConfigurationCollections
**********************************************/
export interface temporaryAccessPassAuthenticationMethodConfigurationCollections {

}

/*********************************************
* bitlocker
**********************************************/
export interface bitlocker {

}

/*********************************************
* bitlockerCollections
**********************************************/
export interface bitlockerCollections {

}

/*********************************************
* bitlockerRecoveryKey
**********************************************/
export interface bitlockerRecoveryKey {
	createdDateTime?: anyOffset;
	deviceId?: string;
	key?: string;
	volumeType?: graph.volumeType;
}

/*********************************************
* bitlockerRecoveryKeyCollections
**********************************************/
export interface bitlockerRecoveryKeyCollections {

}

/*********************************************
* informationProtection
**********************************************/
export interface informationProtection {

}

/*********************************************
* informationProtectionCollections
**********************************************/
export interface informationProtectionCollections {

}

/*********************************************
* threatAssessmentRequest
**********************************************/
export interface threatAssessmentRequest {
	category?: graph.threatCategory;
	contentType?: graph.threatAssessmentContentType;
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	expectedAssessment?: graph.threatExpectedAssessment;
	requestSource?: graph.threatAssessmentRequestSource;
	status?: graph.threatAssessmentStatus;
}

/*********************************************
* threatAssessmentRequestCollections
**********************************************/
export interface threatAssessmentRequestCollections {

}

/*********************************************
* bookingAppointment
**********************************************/
export interface bookingAppointment {
	additionalInformation?: string;
	customers?: { results: Array<graph.bookingCustomerInformationBase> };
	customerTimeZone?: string;
	duration?: Edm.Duration;
	endDateTime?: graph.dateTimeTimeZone;
	filledAttendeesCount?: number;
	isLocationOnline?: boolean;
	joinWebUrl?: string;
	maximumAttendeesCount?: number;
	optOutOfCustomerEmail?: boolean;
	postBuffer?: Edm.Duration;
	preBuffer?: Edm.Duration;
	price?: number;
	priceType?: graph.bookingPriceType;
	reminders?: { results: Array<graph.bookingReminder> };
	selfServiceAppointmentId?: string;
	serviceId?: string;
	serviceLocation?: graph.location;
	serviceName?: string;
	serviceNotes?: string;
	smsNotificationsEnabled?: boolean;
	staffMemberIds?: { results: Array<string> };
	startDateTime?: graph.dateTimeTimeZone;
}

/*********************************************
* bookingAppointmentCollections
**********************************************/
export interface bookingAppointmentCollections {

}

/*********************************************
* bookingBusiness
**********************************************/
export interface bookingBusiness {
	address?: graph.physicalAddress;
	businessHours?: { results: Array<graph.bookingWorkHours> };
	businessType?: string;
	defaultCurrencyIso?: string;
	displayName?: string;
	email?: string;
	isPublished?: boolean;
	phone?: string;
	publicUrl?: string;
	schedulingPolicy?: graph.bookingSchedulingPolicy;
	webSiteUrl?: string;
}

/*********************************************
* bookingBusinessCollections
**********************************************/
export interface bookingBusinessCollections {

}

/*********************************************
* bookingCustomerBase
**********************************************/
export interface bookingCustomerBase {

}

/*********************************************
* bookingCustomerBaseCollections
**********************************************/
export interface bookingCustomerBaseCollections {

}

/*********************************************
* bookingCustomQuestion
**********************************************/
export interface bookingCustomQuestion {
	answerInputType?: graph.answerInputType;
	answerOptions?: { results: Array<string> };
	displayName?: string;
}

/*********************************************
* bookingCustomQuestionCollections
**********************************************/
export interface bookingCustomQuestionCollections {

}

/*********************************************
* bookingService
**********************************************/
export interface bookingService {
	additionalInformation?: string;
	customQuestions?: { results: Array<graph.bookingQuestionAssignment> };
	defaultDuration?: Edm.Duration;
	defaultLocation?: graph.location;
	defaultPrice?: number;
	defaultPriceType?: graph.bookingPriceType;
	defaultReminders?: { results: Array<graph.bookingReminder> };
	description?: string;
	displayName?: string;
	isHiddenFromCustomers?: boolean;
	isLocationOnline?: boolean;
	maximumAttendeesCount?: number;
	notes?: string;
	postBuffer?: Edm.Duration;
	preBuffer?: Edm.Duration;
	schedulingPolicy?: graph.bookingSchedulingPolicy;
	smsNotificationsEnabled?: boolean;
	staffMemberIds?: { results: Array<string> };
	webUrl?: string;
}

/*********************************************
* bookingServiceCollections
**********************************************/
export interface bookingServiceCollections {

}

/*********************************************
* bookingStaffMemberBase
**********************************************/
export interface bookingStaffMemberBase {

}

/*********************************************
* bookingStaffMemberBaseCollections
**********************************************/
export interface bookingStaffMemberBaseCollections {

}

/*********************************************
* bookingCurrency
**********************************************/
export interface bookingCurrency {
	symbol?: string;
}

/*********************************************
* bookingCurrencyCollections
**********************************************/
export interface bookingCurrencyCollections {

}

/*********************************************
* bookingCustomer
**********************************************/
export interface bookingCustomer {
	addresses?: { results: Array<graph.physicalAddress> };
	displayName?: string;
	emailAddress?: string;
	phones?: { results: Array<graph.phone> };
}

/*********************************************
* bookingCustomerCollections
**********************************************/
export interface bookingCustomerCollections {

}

/*********************************************
* bookingStaffMember
**********************************************/
export interface bookingStaffMember {
	availabilityIsAffectedByPersonalCalendar?: boolean;
	displayName?: string;
	emailAddress?: string;
	role?: graph.bookingStaffRole;
	timeZone?: string;
	useBusinessHours?: boolean;
	workingHours?: { results: Array<graph.bookingWorkHours> };
}

/*********************************************
* bookingStaffMemberCollections
**********************************************/
export interface bookingStaffMemberCollections {

}

/*********************************************
* solutionsRoot
**********************************************/
export interface solutionsRoot {

}

/*********************************************
* solutionsRootCollections
**********************************************/
export interface solutionsRootCollections {

}

/*********************************************
* authoredNote
**********************************************/
export interface authoredNote {
	author?: graph.identity;
	content?: graph.itemBody;
	createdDateTime?: anyOffset;
}

/*********************************************
* authoredNoteCollections
**********************************************/
export interface authoredNoteCollections {

}

/*********************************************
* privacy
**********************************************/
export interface privacy {

}

/*********************************************
* privacyCollections
**********************************************/
export interface privacyCollections {

}

/*********************************************
* subjectRightsRequest
**********************************************/
export interface subjectRightsRequest {
	assignedTo?: graph.identity;
	closedDateTime?: anyOffset;
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	dataSubject?: graph.dataSubject;
	dataSubjectType?: graph.dataSubjectType;
	description?: string;
	displayName?: string;
	history?: { results: Array<graph.subjectRightsRequestHistory> };
	insight?: graph.subjectRightsRequestDetail;
	internalDueDateTime?: anyOffset;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: anyOffset;
	regulations?: { results: Array<string> };
	stages?: { results: Array<graph.subjectRightsRequestStageDetail> };
	status?: graph.subjectRightsRequestStatus;
	type?: graph.subjectRightsRequestType;
}

/*********************************************
* subjectRightsRequestCollections
**********************************************/
export interface subjectRightsRequestCollections {

}

/*********************************************
* channel
**********************************************/
export interface channel {
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	email?: string;
	isFavoriteByDefault?: boolean;
	membershipType?: graph.channelMembershipType;
	tenantId?: string;
	webUrl?: string;
}

/*********************************************
* channelCollections
**********************************************/
export interface channelCollections {

}

/*********************************************
* group
**********************************************/
export interface group {
	assignedLabels?: { results: Array<graph.assignedLabel> };
	assignedLicenses?: { results: Array<graph.assignedLicense> };
	classification?: string;
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	expirationDateTime?: anyOffset;
	groupTypes?: { results: Array<string> };
	hasMembersWithLicenseErrors?: boolean;
	isAssignableToRole?: boolean;
	licenseProcessingState?: graph.licenseProcessingState;
	mail?: string;
	mailEnabled?: boolean;
	mailNickname?: string;
	membershipRule?: string;
	membershipRuleProcessingState?: string;
	onPremisesDomainName?: string;
	onPremisesLastSyncDateTime?: anyOffset;
	onPremisesNetBiosName?: string;
	onPremisesProvisioningErrors?: { results: Array<graph.onPremisesProvisioningError> };
	onPremisesSamAccountName?: string;
	onPremisesSecurityIdentifier?: string;
	onPremisesSyncEnabled?: boolean;
	preferredDataLocation?: string;
	preferredLanguage?: string;
	proxyAddresses?: { results: Array<string> };
	renewedDateTime?: anyOffset;
	securityEnabled?: boolean;
	securityIdentifier?: string;
	theme?: string;
	visibility?: string;
	allowExternalSenders?: boolean;
	autoSubscribeNewMembers?: boolean;
	hideFromAddressLists?: boolean;
	hideFromOutlookClients?: boolean;
	isSubscribedByMail?: boolean;
	unseenCount?: number;
	isArchived?: boolean;
}

/*********************************************
* groupCollections
**********************************************/
export interface groupCollections {

}

/*********************************************
* teamsAppInstallation
**********************************************/
export interface teamsAppInstallation {

}

/*********************************************
* teamsAppInstallationCollections
**********************************************/
export interface teamsAppInstallationCollections {

}

/*********************************************
* conversationMember
**********************************************/
export interface conversationMember {
	displayName?: string;
	roles?: { results: Array<string> };
	visibleHistoryStartDateTime?: anyOffset;
}

/*********************************************
* conversationMemberCollections
**********************************************/
export interface conversationMemberCollections {

}

/*********************************************
* teamsAsyncOperation
**********************************************/
export interface teamsAsyncOperation {
	attemptsCount?: number;
	createdDateTime?: anyOffset;
	error?: graph.operationError;
	lastActionDateTime?: anyOffset;
	operationType?: graph.teamsAsyncOperationType;
	status?: graph.teamsAsyncOperationStatus;
	targetResourceId?: string;
	targetResourceLocation?: string;
}

/*********************************************
* teamsAsyncOperationCollections
**********************************************/
export interface teamsAsyncOperationCollections {

}

/*********************************************
* teamsTemplate
**********************************************/
export interface teamsTemplate {

}

/*********************************************
* teamsTemplateCollections
**********************************************/
export interface teamsTemplateCollections {

}

/*********************************************
* schedule
**********************************************/
export interface schedule {
	enabled?: boolean;
	offerShiftRequestsEnabled?: boolean;
	openShiftsEnabled?: boolean;
	provisionStatus?: graph.operationStatus;
	provisionStatusCode?: string;
	swapShiftsRequestsEnabled?: boolean;
	timeClockEnabled?: boolean;
	timeOffRequestsEnabled?: boolean;
	timeZone?: string;
	workforceIntegrationIds?: { results: Array<string> };
}

/*********************************************
* scheduleCollections
**********************************************/
export interface scheduleCollections {

}

/*********************************************
* compliance
**********************************************/
export interface compliance {

}

/*********************************************
* complianceCollections
**********************************************/
export interface complianceCollections {

}

/*********************************************
* resourceSpecificPermissionGrant
**********************************************/
export interface resourceSpecificPermissionGrant {
	clientAppId?: string;
	clientId?: string;
	permission?: string;
	permissionType?: string;
	resourceAppId?: string;
}

/*********************************************
* resourceSpecificPermissionGrantCollections
**********************************************/
export interface resourceSpecificPermissionGrantCollections {

}

/*********************************************
* groupSetting
**********************************************/
export interface groupSetting {
	displayName?: string;
	templateId?: string;
	values?: { results: Array<graph.settingValue> };
}

/*********************************************
* groupSettingCollections
**********************************************/
export interface groupSettingCollections {

}

/*********************************************
* conversation
**********************************************/
export interface conversation {
	hasAttachments?: boolean;
	lastDeliveredDateTime?: anyOffset;
	preview?: string;
	topic?: string;
	uniqueSenders?: { results: Array<string> };
}

/*********************************************
* conversationCollections
**********************************************/
export interface conversationCollections {

}

/*********************************************
* conversationThread
**********************************************/
export interface conversationThread {
	ccRecipients?: { results: Array<graph.recipient> };
	hasAttachments?: boolean;
	isLocked?: boolean;
	lastDeliveredDateTime?: anyOffset;
	preview?: string;
	topic?: string;
	toRecipients?: { results: Array<graph.recipient> };
	uniqueSenders?: { results: Array<string> };
}

/*********************************************
* conversationThreadCollections
**********************************************/
export interface conversationThreadCollections {

}

/*********************************************
* groupLifecyclePolicy
**********************************************/
export interface groupLifecyclePolicy {
	alternateNotificationEmails?: string;
	groupLifetimeInDays?: number;
	managedGroupTypes?: string;
}

/*********************************************
* groupLifecyclePolicyCollections
**********************************************/
export interface groupLifecyclePolicyCollections {

}

/*********************************************
* plannerGroup
**********************************************/
export interface plannerGroup {

}

/*********************************************
* plannerGroupCollections
**********************************************/
export interface plannerGroupCollections {

}

/*********************************************
* security
**********************************************/
export interface security {

}

/*********************************************
* securityCollections
**********************************************/
export interface securityCollections {

}

/*********************************************
* alert
**********************************************/
export interface alert {
	activityGroupName?: string;
	alertDetections?: { results: Array<graph.alertDetection> };
	assignedTo?: string;
	azureSubscriptionId?: string;
	azureTenantId?: string;
	category?: string;
	closedDateTime?: anyOffset;
	cloudAppStates?: { results: Array<graph.cloudAppSecurityState> };
	comments?: { results: Array<string> };
	confidence?: number;
	createdDateTime?: anyOffset;
	description?: string;
	detectionIds?: { results: Array<string> };
	eventDateTime?: anyOffset;
	feedback?: graph.alertFeedback;
	fileStates?: { results: Array<graph.fileSecurityState> };
	historyStates?: { results: Array<graph.alertHistoryState> };
	hostStates?: { results: Array<graph.hostSecurityState> };
	incidentIds?: { results: Array<string> };
	investigationSecurityStates?: { results: Array<graph.investigationSecurityState> };
	lastEventDateTime?: anyOffset;
	lastModifiedDateTime?: anyOffset;
	malwareStates?: { results: Array<graph.malwareState> };
	messageSecurityStates?: { results: Array<graph.messageSecurityState> };
	networkConnections?: { results: Array<graph.networkConnection> };
	processes?: { results: Array<graph.process> };
	recommendedActions?: { results: Array<string> };
	registryKeyStates?: { results: Array<graph.registryKeyState> };
	securityResources?: { results: Array<graph.securityResource> };
	severity?: graph.alertSeverity;
	sourceMaterials?: { results: Array<string> };
	status?: graph.alertStatus;
	tags?: { results: Array<string> };
	title?: string;
	triggers?: { results: Array<graph.alertTrigger> };
	uriClickSecurityStates?: { results: Array<graph.uriClickSecurityState> };
	userStates?: { results: Array<graph.userSecurityState> };
	vendorInformation?: graph.securityVendorInformation;
	vulnerabilityStates?: { results: Array<graph.vulnerabilityState> };
}

/*********************************************
* alertCollections
**********************************************/
export interface alertCollections {

}

/*********************************************
* secureScoreControlProfile
**********************************************/
export interface secureScoreControlProfile {
	actionType?: string;
	actionUrl?: string;
	azureTenantId?: string;
	complianceInformation?: { results: Array<graph.complianceInformation> };
	controlCategory?: string;
	controlStateUpdates?: { results: Array<graph.secureScoreControlStateUpdate> };
	deprecated?: boolean;
	implementationCost?: string;
	lastModifiedDateTime?: anyOffset;
	maxScore?: number;
	rank?: number;
	remediation?: string;
	remediationImpact?: string;
	service?: string;
	threats?: { results: Array<string> };
	tier?: string;
	title?: string;
	userImpact?: string;
	vendorInformation?: graph.securityVendorInformation;
}

/*********************************************
* secureScoreControlProfileCollections
**********************************************/
export interface secureScoreControlProfileCollections {

}

/*********************************************
* secureScore
**********************************************/
export interface secureScore {
	activeUserCount?: number;
	averageComparativeScores?: { results: Array<graph.averageComparativeScore> };
	azureTenantId?: string;
	controlScores?: { results: Array<graph.controlScore> };
	createdDateTime?: anyOffset;
	currentScore?: number;
	enabledServices?: { results: Array<string> };
	licensedUserCount?: number;
	maxScore?: number;
	vendorInformation?: graph.securityVendorInformation;
}

/*********************************************
* secureScoreCollections
**********************************************/
export interface secureScoreCollections {

}

/*********************************************
* itemAnalytics
**********************************************/
export interface itemAnalytics {

}

/*********************************************
* itemAnalyticsCollections
**********************************************/
export interface itemAnalyticsCollections {

}

/*********************************************
* columnDefinition
**********************************************/
export interface columnDefinition {
	boolean?: graph.booleanColumn;
	calculated?: graph.calculatedColumn;
	choice?: graph.choiceColumn;
	columnGroup?: string;
	contentApprovalStatus?: graph.contentApprovalStatusColumn;
	currency?: graph.currencyColumn;
	dateTime?: graph.dateTimeColumn;
	defaultValue?: graph.defaultColumnValue;
	description?: string;
	displayName?: string;
	enforceUniqueValues?: boolean;
	geolocation?: graph.geolocationColumn;
	hidden?: boolean;
	hyperlinkOrPicture?: graph.hyperlinkOrPictureColumn;
	indexed?: boolean;
	isDeletable?: boolean;
	isReorderable?: boolean;
	isSealed?: boolean;
	lookup?: graph.lookupColumn;
	name?: string;
	number?: graph.numberColumn;
	personOrGroup?: graph.personOrGroupColumn;
	propagateChanges?: boolean;
	readOnly?: boolean;
	required?: boolean;
	sourceContentType?: graph.contentTypeInfo;
	term?: graph.termColumn;
	text?: graph.textColumn;
	thumbnail?: graph.thumbnailColumn;
	type?: graph.columnTypes;
	validation?: graph.columnValidation;
}

/*********************************************
* columnDefinitionCollections
**********************************************/
export interface columnDefinitionCollections {

}

/*********************************************
* contentType
**********************************************/
export interface contentType {
	associatedHubsUrls?: { results: Array<string> };
	description?: string;
	documentSet?: graph.documentSet;
	documentTemplate?: graph.documentSetContent;
	group?: string;
	hidden?: boolean;
	inheritedFrom?: graph.itemReference;
	isBuiltIn?: boolean;
	name?: string;
	order?: graph.contentTypeOrder;
	parentId?: string;
	propagateChanges?: boolean;
	readOnly?: boolean;
	sealed?: boolean;
}

/*********************************************
* contentTypeCollections
**********************************************/
export interface contentTypeCollections {

}

/*********************************************
* list
**********************************************/
export interface list {
	displayName?: string;
	list?: graph.listInfo;
	sharepointIds?: graph.sharepointIds;
	system?: graph.systemFacet;
}

/*********************************************
* listCollections
**********************************************/
export interface listCollections {

}

/*********************************************
* longRunningOperation
**********************************************/
export interface longRunningOperation {
	createdDateTime?: anyOffset;
	lastActionDateTime?: anyOffset;
	resourceLocation?: string;
	status?: graph.longRunningOperationStatus;
	statusDetail?: string;
}

/*********************************************
* longRunningOperationCollections
**********************************************/
export interface longRunningOperationCollections {

}

/*********************************************
* richLongRunningOperation
**********************************************/
export interface richLongRunningOperation {
	error?: graph.publicError;
	percentageComplete?: number;
	resourceId?: string;
	type?: string;
}

/*********************************************
* richLongRunningOperationCollections
**********************************************/
export interface richLongRunningOperationCollections {

}

/*********************************************
* permission
**********************************************/
export interface permission {
	expirationDateTime?: anyOffset;
	grantedTo?: graph.identitySet;
	grantedToIdentities?: { results: Array<graph.identitySet> };
	grantedToIdentitiesV2?: { results: Array<graph.sharePointIdentitySet> };
	grantedToV2?: graph.sharePointIdentitySet;
	hasPassword?: boolean;
	inheritedFrom?: graph.itemReference;
	invitation?: graph.sharingInvitation;
	link?: graph.sharingLink;
	roles?: { results: Array<string> };
	shareId?: string;
}

/*********************************************
* permissionCollections
**********************************************/
export interface permissionCollections {

}

/*********************************************
* identityApiConnector
**********************************************/
export interface identityApiConnector {
	authenticationConfiguration?: graph.apiAuthenticationConfigurationBase;
	displayName?: string;
	targetUrl?: string;
}

/*********************************************
* identityApiConnectorCollections
**********************************************/
export interface identityApiConnectorCollections {

}

/*********************************************
* identityProviderBase
**********************************************/
export interface identityProviderBase {
	displayName?: string;
}

/*********************************************
* identityProviderBaseCollections
**********************************************/
export interface identityProviderBaseCollections {

}

/*********************************************
* appleManagedIdentityProvider
**********************************************/
export interface appleManagedIdentityProvider {
	certificateData?: string;
	developerId?: string;
	keyId?: string;
	serviceId?: string;
}

/*********************************************
* appleManagedIdentityProviderCollections
**********************************************/
export interface appleManagedIdentityProviderCollections {

}

/*********************************************
* identityUserFlow
**********************************************/
export interface identityUserFlow {
	userFlowType?: graph.userFlowType;
	userFlowTypeVersion?: any;
}

/*********************************************
* identityUserFlowCollections
**********************************************/
export interface identityUserFlowCollections {

}

/*********************************************
* b2xIdentityUserFlow
**********************************************/
export interface b2xIdentityUserFlow {
	apiConnectorConfiguration?: graph.userFlowApiConnectorConfiguration;
}

/*********************************************
* b2xIdentityUserFlowCollections
**********************************************/
export interface b2xIdentityUserFlowCollections {

}

/*********************************************
* identityProvider
**********************************************/
export interface identityProvider {
	clientId?: string;
	clientSecret?: string;
	name?: string;
	type?: string;
}

/*********************************************
* identityProviderCollections
**********************************************/
export interface identityProviderCollections {

}

/*********************************************
* userFlowLanguageConfiguration
**********************************************/
export interface userFlowLanguageConfiguration {
	displayName?: string;
	isEnabled?: boolean;
}

/*********************************************
* userFlowLanguageConfigurationCollections
**********************************************/
export interface userFlowLanguageConfigurationCollections {

}

/*********************************************
* identityUserFlowAttributeAssignment
**********************************************/
export interface identityUserFlowAttributeAssignment {
	displayName?: string;
	isOptional?: boolean;
	requiresVerification?: boolean;
	userAttributeValues?: { results: Array<graph.userAttributeValuesItem> };
	userInputType?: graph.identityUserFlowAttributeInputType;
}

/*********************************************
* identityUserFlowAttributeAssignmentCollections
**********************************************/
export interface identityUserFlowAttributeAssignmentCollections {

}

/*********************************************
* builtInIdentityProvider
**********************************************/
export interface builtInIdentityProvider {
	identityProviderType?: string;
}

/*********************************************
* builtInIdentityProviderCollections
**********************************************/
export interface builtInIdentityProviderCollections {

}

/*********************************************
* identityUserFlowAttribute
**********************************************/
export interface identityUserFlowAttribute {
	dataType?: graph.identityUserFlowAttributeDataType;
	description?: string;
	displayName?: string;
	userFlowAttributeType?: graph.identityUserFlowAttributeType;
}

/*********************************************
* identityUserFlowAttributeCollections
**********************************************/
export interface identityUserFlowAttributeCollections {

}

/*********************************************
* identityBuiltInUserFlowAttribute
**********************************************/
export interface identityBuiltInUserFlowAttribute {

}

/*********************************************
* identityBuiltInUserFlowAttributeCollections
**********************************************/
export interface identityBuiltInUserFlowAttributeCollections {

}

/*********************************************
* identityContainer
**********************************************/
export interface identityContainer {

}

/*********************************************
* identityContainerCollections
**********************************************/
export interface identityContainerCollections {

}

/*********************************************
* conditionalAccessRoot
**********************************************/
export interface conditionalAccessRoot {

}

/*********************************************
* conditionalAccessRootCollections
**********************************************/
export interface conditionalAccessRootCollections {

}

/*********************************************
* identityCustomUserFlowAttribute
**********************************************/
export interface identityCustomUserFlowAttribute {

}

/*********************************************
* identityCustomUserFlowAttributeCollections
**********************************************/
export interface identityCustomUserFlowAttributeCollections {

}

/*********************************************
* socialIdentityProvider
**********************************************/
export interface socialIdentityProvider {
	clientId?: string;
	clientSecret?: string;
	identityProviderType?: string;
}

/*********************************************
* socialIdentityProviderCollections
**********************************************/
export interface socialIdentityProviderCollections {

}

/*********************************************
* userFlowLanguagePage
**********************************************/
export interface userFlowLanguagePage {

}

/*********************************************
* userFlowLanguagePageCollections
**********************************************/
export interface userFlowLanguagePageCollections {

}

/*********************************************
* administrativeUnit
**********************************************/
export interface administrativeUnit {
	description?: string;
	displayName?: string;
	visibility?: string;
}

/*********************************************
* administrativeUnitCollections
**********************************************/
export interface administrativeUnitCollections {

}

/*********************************************
* appScope
**********************************************/
export interface appScope {
	displayName?: string;
	type?: string;
}

/*********************************************
* appScopeCollections
**********************************************/
export interface appScopeCollections {

}

/*********************************************
* certificateBasedAuthConfiguration
**********************************************/
export interface certificateBasedAuthConfiguration {
	certificateAuthorities?: { results: Array<graph.certificateAuthority> };
}

/*********************************************
* certificateBasedAuthConfigurationCollections
**********************************************/
export interface certificateBasedAuthConfigurationCollections {

}

/*********************************************
* contract
**********************************************/
export interface contract {
	contractType?: string;
	customerId?: any;
	defaultDomainName?: string;
	displayName?: string;
}

/*********************************************
* contractCollections
**********************************************/
export interface contractCollections {

}

/*********************************************
* crossTenantAccessPolicyConfigurationDefault
**********************************************/
export interface crossTenantAccessPolicyConfigurationDefault {
	b2bCollaborationInbound?: graph.crossTenantAccessPolicyB2BSetting;
	b2bCollaborationOutbound?: graph.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectInbound?: graph.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectOutbound?: graph.crossTenantAccessPolicyB2BSetting;
	inboundTrust?: graph.crossTenantAccessPolicyInboundTrust;
	isServiceDefault?: boolean;
}

/*********************************************
* crossTenantAccessPolicyConfigurationDefaultCollections
**********************************************/
export interface crossTenantAccessPolicyConfigurationDefaultCollections {

}

/*********************************************
* crossTenantAccessPolicyConfigurationPartner
**********************************************/
export interface crossTenantAccessPolicyConfigurationPartner {
	b2bCollaborationInbound?: graph.crossTenantAccessPolicyB2BSetting;
	b2bCollaborationOutbound?: graph.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectInbound?: graph.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectOutbound?: graph.crossTenantAccessPolicyB2BSetting;
	inboundTrust?: graph.crossTenantAccessPolicyInboundTrust;
	isServiceProvider?: boolean;
	tenantId?: string;
}

/*********************************************
* crossTenantAccessPolicyConfigurationPartnerCollections
**********************************************/
export interface crossTenantAccessPolicyConfigurationPartnerCollections {

}

/*********************************************
* device
**********************************************/
export interface device {
	accountEnabled?: boolean;
	alternativeSecurityIds?: { results: Array<graph.alternativeSecurityId> };
	approximateLastSignInDateTime?: anyOffset;
	complianceExpirationDateTime?: anyOffset;
	deviceId?: string;
	deviceMetadata?: string;
	deviceVersion?: number;
	displayName?: string;
	isCompliant?: boolean;
	isManaged?: boolean;
	mdmAppId?: string;
	onPremisesLastSyncDateTime?: anyOffset;
	onPremisesSyncEnabled?: boolean;
	operatingSystem?: string;
	operatingSystemVersion?: string;
	physicalIds?: { results: Array<string> };
	profileType?: string;
	systemLabels?: { results: Array<string> };
	trustType?: string;
}

/*********************************************
* deviceCollections
**********************************************/
export interface deviceCollections {

}

/*********************************************
* directory
**********************************************/
export interface directory {

}

/*********************************************
* directoryCollections
**********************************************/
export interface directoryCollections {

}

/*********************************************
* directoryObjectPartnerReference
**********************************************/
export interface directoryObjectPartnerReference {
	description?: string;
	displayName?: string;
	externalPartnerTenantId?: any;
	objectType?: string;
}

/*********************************************
* directoryObjectPartnerReferenceCollections
**********************************************/
export interface directoryObjectPartnerReferenceCollections {

}

/*********************************************
* directoryRole
**********************************************/
export interface directoryRole {
	description?: string;
	displayName?: string;
	roleTemplateId?: string;
}

/*********************************************
* directoryRoleCollections
**********************************************/
export interface directoryRoleCollections {

}

/*********************************************
* directoryRoleTemplate
**********************************************/
export interface directoryRoleTemplate {
	description?: string;
	displayName?: string;
}

/*********************************************
* directoryRoleTemplateCollections
**********************************************/
export interface directoryRoleTemplateCollections {

}

/*********************************************
* domain
**********************************************/
export interface domain {
	authenticationType?: string;
	availabilityStatus?: string;
	isAdminManaged?: boolean;
	isDefault?: boolean;
	isInitial?: boolean;
	isRoot?: boolean;
	isVerified?: boolean;
	manufacturer?: string;
	model?: string;
	passwordNotificationWindowInDays?: number;
	passwordValidityPeriodInDays?: number;
	state?: graph.domainState;
	supportedServices?: { results: Array<string> };
}

/*********************************************
* domainCollections
**********************************************/
export interface domainCollections {

}

/*********************************************
* samlOrWsFedProvider
**********************************************/
export interface samlOrWsFedProvider {
	issuerUri?: string;
	metadataExchangeUri?: string;
	passiveSignInUri?: string;
	preferredAuthenticationProtocol?: graph.authenticationProtocol;
	signingCertificate?: string;
}

/*********************************************
* samlOrWsFedProviderCollections
**********************************************/
export interface samlOrWsFedProviderCollections {

}

/*********************************************
* internalDomainFederation
**********************************************/
export interface internalDomainFederation {
	activeSignInUri?: string;
	federatedIdpMfaBehavior?: graph.federatedIdpMfaBehavior;
	isSignedAuthenticationRequestRequired?: boolean;
	nextSigningCertificate?: string;
	promptLoginBehavior?: graph.promptLoginBehavior;
	signingCertificateUpdateStatus?: graph.signingCertificateUpdateStatus;
	signOutUri?: string;
}

/*********************************************
* internalDomainFederationCollections
**********************************************/
export interface internalDomainFederationCollections {

}

/*********************************************
* domainDnsRecord
**********************************************/
export interface domainDnsRecord {
	isOptional?: boolean;
	label?: string;
	recordType?: string;
	supportedService?: string;
	ttl?: number;
}

/*********************************************
* domainDnsRecordCollections
**********************************************/
export interface domainDnsRecordCollections {

}

/*********************************************
* domainDnsCnameRecord
**********************************************/
export interface domainDnsCnameRecord {
	canonicalName?: string;
}

/*********************************************
* domainDnsCnameRecordCollections
**********************************************/
export interface domainDnsCnameRecordCollections {

}

/*********************************************
* domainDnsMxRecord
**********************************************/
export interface domainDnsMxRecord {
	mailExchange?: string;
	preference?: number;
}

/*********************************************
* domainDnsMxRecordCollections
**********************************************/
export interface domainDnsMxRecordCollections {

}

/*********************************************
* domainDnsSrvRecord
**********************************************/
export interface domainDnsSrvRecord {
	nameTarget?: string;
	port?: number;
	priority?: number;
	protocol?: string;
	service?: string;
	weight?: number;
}

/*********************************************
* domainDnsSrvRecordCollections
**********************************************/
export interface domainDnsSrvRecordCollections {

}

/*********************************************
* domainDnsTxtRecord
**********************************************/
export interface domainDnsTxtRecord {
	text?: string;
}

/*********************************************
* domainDnsTxtRecordCollections
**********************************************/
export interface domainDnsTxtRecordCollections {

}

/*********************************************
* domainDnsUnavailableRecord
**********************************************/
export interface domainDnsUnavailableRecord {
	description?: string;
}

/*********************************************
* domainDnsUnavailableRecordCollections
**********************************************/
export interface domainDnsUnavailableRecordCollections {

}

/*********************************************
* externalDomainName
**********************************************/
export interface externalDomainName {

}

/*********************************************
* externalDomainNameCollections
**********************************************/
export interface externalDomainNameCollections {

}

/*********************************************
* groupSettingTemplate
**********************************************/
export interface groupSettingTemplate {
	description?: string;
	displayName?: string;
	values?: { results: Array<graph.settingTemplateValue> };
}

/*********************************************
* groupSettingTemplateCollections
**********************************************/
export interface groupSettingTemplateCollections {

}

/*********************************************
* organization
**********************************************/
export interface organization {
	assignedPlans?: { results: Array<graph.assignedPlan> };
	businessPhones?: { results: Array<string> };
	city?: string;
	country?: string;
	countryLetterCode?: string;
	createdDateTime?: anyOffset;
	displayName?: string;
	marketingNotificationEmails?: { results: Array<string> };
	onPremisesLastSyncDateTime?: anyOffset;
	onPremisesSyncEnabled?: boolean;
	postalCode?: string;
	preferredLanguage?: string;
	privacyProfile?: graph.privacyProfile;
	provisionedPlans?: { results: Array<graph.provisionedPlan> };
	securityComplianceNotificationMails?: { results: Array<string> };
	securityComplianceNotificationPhones?: { results: Array<string> };
	state?: string;
	street?: string;
	technicalNotificationMails?: { results: Array<string> };
	tenantType?: string;
	verifiedDomains?: { results: Array<graph.verifiedDomain> };
	mobileDeviceManagementAuthority?: graph.mdmAuthority;
}

/*********************************************
* organizationCollections
**********************************************/
export interface organizationCollections {

}

/*********************************************
* organizationalBrandingProperties
**********************************************/
export interface organizationalBrandingProperties {
	backgroundColor?: string;
	backgroundImage?: any;
	backgroundImageRelativeUrl?: string;
	bannerLogo?: any;
	bannerLogoRelativeUrl?: string;
	cdnList?: { results: Array<string> };
	signInPageText?: string;
	squareLogo?: any;
	squareLogoRelativeUrl?: string;
	usernameHintText?: string;
}

/*********************************************
* organizationalBrandingPropertiesCollections
**********************************************/
export interface organizationalBrandingPropertiesCollections {

}

/*********************************************
* organizationalBranding
**********************************************/
export interface organizationalBranding {

}

/*********************************************
* organizationalBrandingCollections
**********************************************/
export interface organizationalBrandingCollections {

}

/*********************************************
* organizationalBrandingLocalization
**********************************************/
export interface organizationalBrandingLocalization {

}

/*********************************************
* organizationalBrandingLocalizationCollections
**********************************************/
export interface organizationalBrandingLocalizationCollections {

}

/*********************************************
* orgContact
**********************************************/
export interface orgContact {
	addresses?: { results: Array<graph.physicalOfficeAddress> };
	companyName?: string;
	department?: string;
	displayName?: string;
	givenName?: string;
	jobTitle?: string;
	mail?: string;
	mailNickname?: string;
	onPremisesLastSyncDateTime?: anyOffset;
	onPremisesProvisioningErrors?: { results: Array<graph.onPremisesProvisioningError> };
	onPremisesSyncEnabled?: boolean;
	phones?: { results: Array<graph.phone> };
	proxyAddresses?: { results: Array<string> };
	surname?: string;
}

/*********************************************
* orgContactCollections
**********************************************/
export interface orgContactCollections {

}

/*********************************************
* permissionGrantConditionSet
**********************************************/
export interface permissionGrantConditionSet {
	clientApplicationIds?: { results: Array<string> };
	clientApplicationPublisherIds?: { results: Array<string> };
	clientApplicationsFromVerifiedPublisherOnly?: boolean;
	clientApplicationTenantIds?: { results: Array<string> };
	permissionClassification?: string;
	permissions?: { results: Array<string> };
	permissionType?: graph.permissionType;
	resourceApplication?: string;
}

/*********************************************
* permissionGrantConditionSetCollections
**********************************************/
export interface permissionGrantConditionSetCollections {

}

/*********************************************
* rbacApplication
**********************************************/
export interface rbacApplication {

}

/*********************************************
* rbacApplicationCollections
**********************************************/
export interface rbacApplicationCollections {

}

/*********************************************
* unifiedRoleAssignment
**********************************************/
export interface unifiedRoleAssignment {
	appScopeId?: string;
	condition?: string;
	directoryScopeId?: string;
	principalId?: string;
	roleDefinitionId?: string;
}

/*********************************************
* unifiedRoleAssignmentCollections
**********************************************/
export interface unifiedRoleAssignmentCollections {

}

/*********************************************
* unifiedRoleDefinition
**********************************************/
export interface unifiedRoleDefinition {
	description?: string;
	displayName?: string;
	isBuiltIn?: boolean;
	isEnabled?: boolean;
	resourceScopes?: { results: Array<string> };
	rolePermissions?: { results: Array<graph.unifiedRolePermission> };
	templateId?: string;
	version?: string;
}

/*********************************************
* unifiedRoleDefinitionCollections
**********************************************/
export interface unifiedRoleDefinitionCollections {

}

/*********************************************
* unifiedRoleScheduleInstanceBase
**********************************************/
export interface unifiedRoleScheduleInstanceBase {
	appScopeId?: string;
	directoryScopeId?: string;
	principalId?: string;
	roleDefinitionId?: string;
}

/*********************************************
* unifiedRoleScheduleInstanceBaseCollections
**********************************************/
export interface unifiedRoleScheduleInstanceBaseCollections {

}

/*********************************************
* unifiedRoleAssignmentScheduleInstance
**********************************************/
export interface unifiedRoleAssignmentScheduleInstance {
	assignmentType?: string;
	endDateTime?: anyOffset;
	memberType?: string;
	roleAssignmentOriginId?: string;
	roleAssignmentScheduleId?: string;
	startDateTime?: anyOffset;
}

/*********************************************
* unifiedRoleAssignmentScheduleInstanceCollections
**********************************************/
export interface unifiedRoleAssignmentScheduleInstanceCollections {

}

/*********************************************
* request
**********************************************/
export interface request {
	approvalId?: string;
	completedDateTime?: anyOffset;
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	customData?: string;
	status?: string;
}

/*********************************************
* requestCollections
**********************************************/
export interface requestCollections {

}

/*********************************************
* unifiedRoleAssignmentScheduleRequest
**********************************************/
export interface unifiedRoleAssignmentScheduleRequest {
	action?: graph.unifiedRoleScheduleRequestActions;
	appScopeId?: string;
	directoryScopeId?: string;
	isValidationOnly?: boolean;
	justification?: string;
	principalId?: string;
	roleDefinitionId?: string;
	scheduleInfo?: graph.requestSchedule;
	targetScheduleId?: string;
	ticketInfo?: graph.ticketInfo;
}

/*********************************************
* unifiedRoleAssignmentScheduleRequestCollections
**********************************************/
export interface unifiedRoleAssignmentScheduleRequestCollections {

}

/*********************************************
* unifiedRoleScheduleBase
**********************************************/
export interface unifiedRoleScheduleBase {
	appScopeId?: string;
	createdDateTime?: anyOffset;
	createdUsing?: string;
	directoryScopeId?: string;
	modifiedDateTime?: anyOffset;
	principalId?: string;
	roleDefinitionId?: string;
	status?: string;
}

/*********************************************
* unifiedRoleScheduleBaseCollections
**********************************************/
export interface unifiedRoleScheduleBaseCollections {

}

/*********************************************
* unifiedRoleAssignmentSchedule
**********************************************/
export interface unifiedRoleAssignmentSchedule {
	assignmentType?: string;
	memberType?: string;
	scheduleInfo?: graph.requestSchedule;
}

/*********************************************
* unifiedRoleAssignmentScheduleCollections
**********************************************/
export interface unifiedRoleAssignmentScheduleCollections {

}

/*********************************************
* unifiedRoleEligibilityScheduleInstance
**********************************************/
export interface unifiedRoleEligibilityScheduleInstance {
	endDateTime?: anyOffset;
	memberType?: string;
	roleEligibilityScheduleId?: string;
	startDateTime?: anyOffset;
}

/*********************************************
* unifiedRoleEligibilityScheduleInstanceCollections
**********************************************/
export interface unifiedRoleEligibilityScheduleInstanceCollections {

}

/*********************************************
* unifiedRoleEligibilityScheduleRequest
**********************************************/
export interface unifiedRoleEligibilityScheduleRequest {
	action?: graph.unifiedRoleScheduleRequestActions;
	appScopeId?: string;
	directoryScopeId?: string;
	isValidationOnly?: boolean;
	justification?: string;
	principalId?: string;
	roleDefinitionId?: string;
	scheduleInfo?: graph.requestSchedule;
	targetScheduleId?: string;
	ticketInfo?: graph.ticketInfo;
}

/*********************************************
* unifiedRoleEligibilityScheduleRequestCollections
**********************************************/
export interface unifiedRoleEligibilityScheduleRequestCollections {

}

/*********************************************
* unifiedRoleEligibilitySchedule
**********************************************/
export interface unifiedRoleEligibilitySchedule {
	memberType?: string;
	scheduleInfo?: graph.requestSchedule;
}

/*********************************************
* unifiedRoleEligibilityScheduleCollections
**********************************************/
export interface unifiedRoleEligibilityScheduleCollections {

}

/*********************************************
* roleManagement
**********************************************/
export interface roleManagement {

}

/*********************************************
* roleManagementCollections
**********************************************/
export interface roleManagementCollections {

}

/*********************************************
* samlOrWsFedExternalDomainFederation
**********************************************/
export interface samlOrWsFedExternalDomainFederation {

}

/*********************************************
* samlOrWsFedExternalDomainFederationCollections
**********************************************/
export interface samlOrWsFedExternalDomainFederationCollections {

}

/*********************************************
* subscribedSku
**********************************************/
export interface subscribedSku {
	appliesTo?: string;
	capabilityStatus?: string;
	consumedUnits?: number;
	prepaidUnits?: graph.licenseUnitsDetail;
	servicePlans?: { results: Array<graph.servicePlanInfo> };
	skuId?: any;
	skuPartNumber?: string;
}

/*********************************************
* subscribedSkuCollections
**********************************************/
export interface subscribedSkuCollections {

}

/*********************************************
* educationAssignment
**********************************************/
export interface educationAssignment {
	addedStudentAction?: graph.educationAddedStudentAction;
	addToCalendarAction?: graph.educationAddToCalendarOptions;
	allowLateSubmissions?: boolean;
	allowStudentsToAddResourcesToSubmission?: boolean;
	assignDateTime?: anyOffset;
	assignedDateTime?: anyOffset;
	assignTo?: graph.educationAssignmentRecipient;
	classId?: string;
	closeDateTime?: anyOffset;
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	displayName?: string;
	dueDateTime?: anyOffset;
	grading?: graph.educationAssignmentGradeType;
	instructions?: graph.educationItemBody;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: anyOffset;
	notificationChannelUrl?: string;
	resourcesFolderUrl?: string;
	status?: graph.educationAssignmentStatus;
	webUrl?: string;
}

/*********************************************
* educationAssignmentCollections
**********************************************/
export interface educationAssignmentCollections {

}

/*********************************************
* educationCategory
**********************************************/
export interface educationCategory {
	displayName?: string;
}

/*********************************************
* educationCategoryCollections
**********************************************/
export interface educationCategoryCollections {

}

/*********************************************
* educationAssignmentResource
**********************************************/
export interface educationAssignmentResource {
	distributeForStudentWork?: boolean;
	resource?: graph.educationResource;
}

/*********************************************
* educationAssignmentResourceCollections
**********************************************/
export interface educationAssignmentResourceCollections {

}

/*********************************************
* educationRubric
**********************************************/
export interface educationRubric {
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	description?: graph.educationItemBody;
	displayName?: string;
	grading?: graph.educationAssignmentGradeType;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: anyOffset;
	levels?: { results: Array<graph.rubricLevel> };
	qualities?: { results: Array<graph.rubricQuality> };
}

/*********************************************
* educationRubricCollections
**********************************************/
export interface educationRubricCollections {

}

/*********************************************
* educationSubmission
**********************************************/
export interface educationSubmission {
	reassignedBy?: graph.identitySet;
	reassignedDateTime?: anyOffset;
	recipient?: graph.educationSubmissionRecipient;
	resourcesFolderUrl?: string;
	returnedBy?: graph.identitySet;
	returnedDateTime?: anyOffset;
	status?: graph.educationSubmissionStatus;
	submittedBy?: graph.identitySet;
	submittedDateTime?: anyOffset;
	unsubmittedBy?: graph.identitySet;
	unsubmittedDateTime?: anyOffset;
}

/*********************************************
* educationSubmissionCollections
**********************************************/
export interface educationSubmissionCollections {

}

/*********************************************
* educationAssignmentDefaults
**********************************************/
export interface educationAssignmentDefaults {
	addedStudentAction?: graph.educationAddedStudentAction;
	addToCalendarAction?: graph.educationAddToCalendarOptions;
	dueTime?: anyOfDay;
	notificationChannelUrl?: string;
}

/*********************************************
* educationAssignmentDefaultsCollections
**********************************************/
export interface educationAssignmentDefaultsCollections {

}

/*********************************************
* educationAssignmentSettings
**********************************************/
export interface educationAssignmentSettings {
	submissionAnimationDisabled?: boolean;
}

/*********************************************
* educationAssignmentSettingsCollections
**********************************************/
export interface educationAssignmentSettingsCollections {

}

/*********************************************
* educationClass
**********************************************/
export interface educationClass {
	classCode?: string;
	course?: graph.educationCourse;
	createdBy?: graph.identitySet;
	description?: string;
	displayName?: string;
	externalId?: string;
	externalName?: string;
	externalSource?: graph.educationExternalSource;
	externalSourceDetail?: string;
	grade?: string;
	mailNickname?: string;
	term?: graph.educationTerm;
}

/*********************************************
* educationClassCollections
**********************************************/
export interface educationClassCollections {

}

/*********************************************
* educationUser
**********************************************/
export interface educationUser {
	relatedContacts?: { results: Array<graph.relatedContact> };
	accountEnabled?: boolean;
	assignedLicenses?: { results: Array<graph.assignedLicense> };
	assignedPlans?: { results: Array<graph.assignedPlan> };
	businessPhones?: { results: Array<string> };
	createdBy?: graph.identitySet;
	department?: string;
	displayName?: string;
	externalSource?: graph.educationExternalSource;
	externalSourceDetail?: string;
	givenName?: string;
	mail?: string;
	mailingAddress?: graph.physicalAddress;
	mailNickname?: string;
	middleName?: string;
	mobilePhone?: string;
	officeLocation?: string;
	onPremisesInfo?: graph.educationOnPremisesInfo;
	passwordPolicies?: string;
	passwordProfile?: graph.passwordProfile;
	preferredLanguage?: string;
	primaryRole?: graph.educationUserRole;
	provisionedPlans?: { results: Array<graph.provisionedPlan> };
	refreshTokensValidFromDateTime?: anyOffset;
	residenceAddress?: graph.physicalAddress;
	showInAddressList?: boolean;
	student?: graph.educationStudent;
	surname?: string;
	teacher?: graph.educationTeacher;
	usageLocation?: string;
	userPrincipalName?: string;
	userType?: string;
}

/*********************************************
* educationUserCollections
**********************************************/
export interface educationUserCollections {

}

/*********************************************
* educationOrganization
**********************************************/
export interface educationOrganization {
	description?: string;
	displayName?: string;
	externalSource?: graph.educationExternalSource;
	externalSourceDetail?: string;
}

/*********************************************
* educationOrganizationCollections
**********************************************/
export interface educationOrganizationCollections {

}

/*********************************************
* educationSchool
**********************************************/
export interface educationSchool {
	address?: graph.physicalAddress;
	createdBy?: graph.identitySet;
	externalId?: string;
	externalPrincipalId?: string;
	fax?: string;
	highestGrade?: string;
	lowestGrade?: string;
	phone?: string;
	principalEmail?: string;
	principalName?: string;
	schoolNumber?: string;
}

/*********************************************
* educationSchoolCollections
**********************************************/
export interface educationSchoolCollections {

}

/*********************************************
* educationOutcome
**********************************************/
export interface educationOutcome {
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: anyOffset;
}

/*********************************************
* educationOutcomeCollections
**********************************************/
export interface educationOutcomeCollections {

}

/*********************************************
* educationFeedbackOutcome
**********************************************/
export interface educationFeedbackOutcome {
	feedback?: graph.educationFeedback;
	publishedFeedback?: graph.educationFeedback;
}

/*********************************************
* educationFeedbackOutcomeCollections
**********************************************/
export interface educationFeedbackOutcomeCollections {

}

/*********************************************
* educationPointsOutcome
**********************************************/
export interface educationPointsOutcome {
	points?: graph.educationAssignmentPointsGrade;
	publishedPoints?: graph.educationAssignmentPointsGrade;
}

/*********************************************
* educationPointsOutcomeCollections
**********************************************/
export interface educationPointsOutcomeCollections {

}

/*********************************************
* educationRoot
**********************************************/
export interface educationRoot {

}

/*********************************************
* educationRootCollections
**********************************************/
export interface educationRootCollections {

}

/*********************************************
* educationRubricOutcome
**********************************************/
export interface educationRubricOutcome {
	publishedRubricQualityFeedback?: { results: Array<graph.rubricQualityFeedbackModel> };
	publishedRubricQualitySelectedLevels?: { results: Array<graph.rubricQualitySelectedColumnModel> };
	rubricQualityFeedback?: { results: Array<graph.rubricQualityFeedbackModel> };
	rubricQualitySelectedLevels?: { results: Array<graph.rubricQualitySelectedColumnModel> };
}

/*********************************************
* educationRubricOutcomeCollections
**********************************************/
export interface educationRubricOutcomeCollections {

}

/*********************************************
* educationSubmissionResource
**********************************************/
export interface educationSubmissionResource {
	assignmentResourceUrl?: string;
	resource?: graph.educationResource;
}

/*********************************************
* educationSubmissionResourceCollections
**********************************************/
export interface educationSubmissionResourceCollections {

}

/*********************************************
* driveItem
**********************************************/
export interface driveItem {
	audio?: graph.audio;
	bundle?: graph.bundle;
	content?: any;
	cTag?: string;
	deleted?: graph.deleted;
	file?: graph.file;
	fileSystemInfo?: graph.fileSystemInfo;
	folder?: graph.folder;
	image?: graph.image;
	location?: graph.geoCoordinates;
	malware?: graph.malware;
	package?: graph.package;
	pendingOperations?: graph.pendingOperations;
	photo?: graph.photo;
	publication?: graph.publicationFacet;
	remoteItem?: graph.remoteItem;
	root?: graph.root;
	searchResult?: graph.searchResult;
	shared?: graph.shared;
	sharepointIds?: graph.sharepointIds;
	size?: number;
	specialFolder?: graph.specialFolder;
	video?: graph.video;
	webDavUrl?: string;
}

/*********************************************
* driveItemCollections
**********************************************/
export interface driveItemCollections {

}

/*********************************************
* workbook
**********************************************/
export interface workbook {

}

/*********************************************
* workbookCollections
**********************************************/
export interface workbookCollections {

}

/*********************************************
* listItem
**********************************************/
export interface listItem {
	contentType?: graph.contentTypeInfo;
	sharepointIds?: graph.sharepointIds;
}

/*********************************************
* listItemCollections
**********************************************/
export interface listItemCollections {

}

/*********************************************
* subscription
**********************************************/
export interface subscription {
	applicationId?: string;
	changeType?: string;
	clientState?: string;
	creatorId?: string;
	encryptionCertificate?: string;
	encryptionCertificateId?: string;
	expirationDateTime?: anyOffset;
	includeResourceData?: boolean;
	latestSupportedTlsVersion?: string;
	lifecycleNotificationUrl?: string;
	notificationQueryOptions?: string;
	notificationUrl?: string;
	notificationUrlAppId?: string;
	resource?: string;
}

/*********************************************
* subscriptionCollections
**********************************************/
export interface subscriptionCollections {

}

/*********************************************
* thumbnailSet
**********************************************/
export interface thumbnailSet {
	large?: graph.thumbnail;
	medium?: graph.thumbnail;
	small?: graph.thumbnail;
	source?: graph.thumbnail;
}

/*********************************************
* thumbnailSetCollections
**********************************************/
export interface thumbnailSetCollections {

}

/*********************************************
* baseItemVersion
**********************************************/
export interface baseItemVersion {
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: anyOffset;
	publication?: graph.publicationFacet;
}

/*********************************************
* baseItemVersionCollections
**********************************************/
export interface baseItemVersionCollections {

}

/*********************************************
* driveItemVersion
**********************************************/
export interface driveItemVersion {
	content?: any;
	size?: number;
}

/*********************************************
* driveItemVersionCollections
**********************************************/
export interface driveItemVersionCollections {

}

/*********************************************
* workbookApplication
**********************************************/
export interface workbookApplication {
	calculationMode?: string;
}

/*********************************************
* workbookApplicationCollections
**********************************************/
export interface workbookApplicationCollections {

}

/*********************************************
* workbookComment
**********************************************/
export interface workbookComment {
	content?: string;
	contentType?: string;
}

/*********************************************
* workbookCommentCollections
**********************************************/
export interface workbookCommentCollections {

}

/*********************************************
* workbookFunctions
**********************************************/
export interface workbookFunctions {

}

/*********************************************
* workbookFunctionsCollections
**********************************************/
export interface workbookFunctionsCollections {

}

/*********************************************
* workbookNamedItem
**********************************************/
export interface workbookNamedItem {
	comment?: string;
	name?: string;
	scope?: string;
	type?: string;
	value?: graph.Json;
	visible?: boolean;
}

/*********************************************
* workbookNamedItemCollections
**********************************************/
export interface workbookNamedItemCollections {

}

/*********************************************
* workbookOperation
**********************************************/
export interface workbookOperation {
	error?: graph.workbookOperationError;
	resourceLocation?: string;
	status?: graph.workbookOperationStatus;
}

/*********************************************
* workbookOperationCollections
**********************************************/
export interface workbookOperationCollections {

}

/*********************************************
* workbookTable
**********************************************/
export interface workbookTable {
	highlightFirstColumn?: boolean;
	highlightLastColumn?: boolean;
	legacyId?: string;
	name?: string;
	showBandedColumns?: boolean;
	showBandedRows?: boolean;
	showFilterButton?: boolean;
	showHeaders?: boolean;
	showTotals?: boolean;
	style?: string;
}

/*********************************************
* workbookTableCollections
**********************************************/
export interface workbookTableCollections {

}

/*********************************************
* workbookWorksheet
**********************************************/
export interface workbookWorksheet {
	name?: string;
	position?: number;
	visibility?: string;
}

/*********************************************
* workbookWorksheetCollections
**********************************************/
export interface workbookWorksheetCollections {

}

/*********************************************
* workbookChart
**********************************************/
export interface workbookChart {
	height?: number;
	left?: number;
	name?: string;
	top?: number;
	width?: number;
}

/*********************************************
* workbookChartCollections
**********************************************/
export interface workbookChartCollections {

}

/*********************************************
* workbookChartAxes
**********************************************/
export interface workbookChartAxes {

}

/*********************************************
* workbookChartAxesCollections
**********************************************/
export interface workbookChartAxesCollections {

}

/*********************************************
* workbookChartDataLabels
**********************************************/
export interface workbookChartDataLabels {
	position?: string;
	separator?: string;
	showBubbleSize?: boolean;
	showCategoryName?: boolean;
	showLegendKey?: boolean;
	showPercentage?: boolean;
	showSeriesName?: boolean;
	showValue?: boolean;
}

/*********************************************
* workbookChartDataLabelsCollections
**********************************************/
export interface workbookChartDataLabelsCollections {

}

/*********************************************
* workbookChartAreaFormat
**********************************************/
export interface workbookChartAreaFormat {

}

/*********************************************
* workbookChartAreaFormatCollections
**********************************************/
export interface workbookChartAreaFormatCollections {

}

/*********************************************
* workbookChartLegend
**********************************************/
export interface workbookChartLegend {
	overlay?: boolean;
	position?: string;
	visible?: boolean;
}

/*********************************************
* workbookChartLegendCollections
**********************************************/
export interface workbookChartLegendCollections {

}

/*********************************************
* workbookChartSeries
**********************************************/
export interface workbookChartSeries {
	name?: string;
}

/*********************************************
* workbookChartSeriesCollections
**********************************************/
export interface workbookChartSeriesCollections {

}

/*********************************************
* workbookChartTitle
**********************************************/
export interface workbookChartTitle {
	overlay?: boolean;
	text?: string;
	visible?: boolean;
}

/*********************************************
* workbookChartTitleCollections
**********************************************/
export interface workbookChartTitleCollections {

}

/*********************************************
* workbookChartFill
**********************************************/
export interface workbookChartFill {

}

/*********************************************
* workbookChartFillCollections
**********************************************/
export interface workbookChartFillCollections {

}

/*********************************************
* workbookChartFont
**********************************************/
export interface workbookChartFont {
	bold?: boolean;
	color?: string;
	italic?: boolean;
	name?: string;
	size?: number;
	underline?: string;
}

/*********************************************
* workbookChartFontCollections
**********************************************/
export interface workbookChartFontCollections {

}

/*********************************************
* workbookChartAxis
**********************************************/
export interface workbookChartAxis {
	majorUnit?: graph.Json;
	maximum?: graph.Json;
	minimum?: graph.Json;
	minorUnit?: graph.Json;
}

/*********************************************
* workbookChartAxisCollections
**********************************************/
export interface workbookChartAxisCollections {

}

/*********************************************
* workbookChartAxisFormat
**********************************************/
export interface workbookChartAxisFormat {

}

/*********************************************
* workbookChartAxisFormatCollections
**********************************************/
export interface workbookChartAxisFormatCollections {

}

/*********************************************
* workbookChartGridlines
**********************************************/
export interface workbookChartGridlines {
	visible?: boolean;
}

/*********************************************
* workbookChartGridlinesCollections
**********************************************/
export interface workbookChartGridlinesCollections {

}

/*********************************************
* workbookChartAxisTitle
**********************************************/
export interface workbookChartAxisTitle {
	text?: string;
	visible?: boolean;
}

/*********************************************
* workbookChartAxisTitleCollections
**********************************************/
export interface workbookChartAxisTitleCollections {

}

/*********************************************
* workbookChartLineFormat
**********************************************/
export interface workbookChartLineFormat {
	color?: string;
}

/*********************************************
* workbookChartLineFormatCollections
**********************************************/
export interface workbookChartLineFormatCollections {

}

/*********************************************
* workbookChartAxisTitleFormat
**********************************************/
export interface workbookChartAxisTitleFormat {

}

/*********************************************
* workbookChartAxisTitleFormatCollections
**********************************************/
export interface workbookChartAxisTitleFormatCollections {

}

/*********************************************
* workbookChartDataLabelFormat
**********************************************/
export interface workbookChartDataLabelFormat {

}

/*********************************************
* workbookChartDataLabelFormatCollections
**********************************************/
export interface workbookChartDataLabelFormatCollections {

}

/*********************************************
* workbookChartGridlinesFormat
**********************************************/
export interface workbookChartGridlinesFormat {

}

/*********************************************
* workbookChartGridlinesFormatCollections
**********************************************/
export interface workbookChartGridlinesFormatCollections {

}

/*********************************************
* workbookChartLegendFormat
**********************************************/
export interface workbookChartLegendFormat {

}

/*********************************************
* workbookChartLegendFormatCollections
**********************************************/
export interface workbookChartLegendFormatCollections {

}

/*********************************************
* workbookChartPoint
**********************************************/
export interface workbookChartPoint {
	value?: graph.Json;
}

/*********************************************
* workbookChartPointCollections
**********************************************/
export interface workbookChartPointCollections {

}

/*********************************************
* workbookChartPointFormat
**********************************************/
export interface workbookChartPointFormat {

}

/*********************************************
* workbookChartPointFormatCollections
**********************************************/
export interface workbookChartPointFormatCollections {

}

/*********************************************
* workbookChartSeriesFormat
**********************************************/
export interface workbookChartSeriesFormat {

}

/*********************************************
* workbookChartSeriesFormatCollections
**********************************************/
export interface workbookChartSeriesFormatCollections {

}

/*********************************************
* workbookChartTitleFormat
**********************************************/
export interface workbookChartTitleFormat {

}

/*********************************************
* workbookChartTitleFormatCollections
**********************************************/
export interface workbookChartTitleFormatCollections {

}

/*********************************************
* workbookCommentReply
**********************************************/
export interface workbookCommentReply {
	content?: string;
	contentType?: string;
}

/*********************************************
* workbookCommentReplyCollections
**********************************************/
export interface workbookCommentReplyCollections {

}

/*********************************************
* workbookFilter
**********************************************/
export interface workbookFilter {
	criteria?: graph.workbookFilterCriteria;
}

/*********************************************
* workbookFilterCollections
**********************************************/
export interface workbookFilterCollections {

}

/*********************************************
* workbookFormatProtection
**********************************************/
export interface workbookFormatProtection {
	formulaHidden?: boolean;
	locked?: boolean;
}

/*********************************************
* workbookFormatProtectionCollections
**********************************************/
export interface workbookFormatProtectionCollections {

}

/*********************************************
* workbookFunctionResult
**********************************************/
export interface workbookFunctionResult {
	error?: string;
	value?: graph.Json;
}

/*********************************************
* workbookFunctionResultCollections
**********************************************/
export interface workbookFunctionResultCollections {

}

/*********************************************
* workbookPivotTable
**********************************************/
export interface workbookPivotTable {
	name?: string;
}

/*********************************************
* workbookPivotTableCollections
**********************************************/
export interface workbookPivotTableCollections {

}

/*********************************************
* workbookRange
**********************************************/
export interface workbookRange {
	address?: string;
	addressLocal?: string;
	cellCount?: number;
	columnCount?: number;
	columnHidden?: boolean;
	columnIndex?: number;
	formulas?: graph.Json;
	formulasLocal?: graph.Json;
	formulasR1C1?: graph.Json;
	hidden?: boolean;
	numberFormat?: graph.Json;
	rowCount?: number;
	rowHidden?: boolean;
	rowIndex?: number;
	text?: graph.Json;
	values?: graph.Json;
	valueTypes?: graph.Json;
}

/*********************************************
* workbookRangeCollections
**********************************************/
export interface workbookRangeCollections {

}

/*********************************************
* workbookRangeFormat
**********************************************/
export interface workbookRangeFormat {
	columnWidth?: number;
	horizontalAlignment?: string;
	rowHeight?: number;
	verticalAlignment?: string;
	wrapText?: boolean;
}

/*********************************************
* workbookRangeFormatCollections
**********************************************/
export interface workbookRangeFormatCollections {

}

/*********************************************
* workbookRangeSort
**********************************************/
export interface workbookRangeSort {

}

/*********************************************
* workbookRangeSortCollections
**********************************************/
export interface workbookRangeSortCollections {

}

/*********************************************
* workbookRangeBorder
**********************************************/
export interface workbookRangeBorder {
	color?: string;
	sideIndex?: string;
	style?: string;
	weight?: string;
}

/*********************************************
* workbookRangeBorderCollections
**********************************************/
export interface workbookRangeBorderCollections {

}

/*********************************************
* workbookRangeFill
**********************************************/
export interface workbookRangeFill {
	color?: string;
}

/*********************************************
* workbookRangeFillCollections
**********************************************/
export interface workbookRangeFillCollections {

}

/*********************************************
* workbookRangeFont
**********************************************/
export interface workbookRangeFont {
	bold?: boolean;
	color?: string;
	italic?: boolean;
	name?: string;
	size?: number;
	underline?: string;
}

/*********************************************
* workbookRangeFontCollections
**********************************************/
export interface workbookRangeFontCollections {

}

/*********************************************
* workbookRangeView
**********************************************/
export interface workbookRangeView {
	cellAddresses?: graph.Json;
	columnCount?: number;
	formulas?: graph.Json;
	formulasLocal?: graph.Json;
	formulasR1C1?: graph.Json;
	index?: number;
	numberFormat?: graph.Json;
	rowCount?: number;
	text?: graph.Json;
	values?: graph.Json;
	valueTypes?: graph.Json;
}

/*********************************************
* workbookRangeViewCollections
**********************************************/
export interface workbookRangeViewCollections {

}

/*********************************************
* workbookTableColumn
**********************************************/
export interface workbookTableColumn {
	index?: number;
	name?: string;
	values?: graph.Json;
}

/*********************************************
* workbookTableColumnCollections
**********************************************/
export interface workbookTableColumnCollections {

}

/*********************************************
* workbookTableRow
**********************************************/
export interface workbookTableRow {
	index?: number;
	values?: graph.Json;
}

/*********************************************
* workbookTableRowCollections
**********************************************/
export interface workbookTableRowCollections {

}

/*********************************************
* workbookTableSort
**********************************************/
export interface workbookTableSort {
	fields?: { results: Array<graph.workbookSortField> };
	matchCase?: boolean;
	method?: string;
}

/*********************************************
* workbookTableSortCollections
**********************************************/
export interface workbookTableSortCollections {

}

/*********************************************
* workbookWorksheetProtection
**********************************************/
export interface workbookWorksheetProtection {
	options?: graph.workbookWorksheetProtectionOptions;
	protected?: boolean;
}

/*********************************************
* workbookWorksheetProtectionCollections
**********************************************/
export interface workbookWorksheetProtectionCollections {

}

/*********************************************
* place
**********************************************/
export interface place {
	address?: graph.physicalAddress;
	displayName?: string;
	geoCoordinates?: graph.outlookGeoCoordinates;
	phone?: string;
}

/*********************************************
* placeCollections
**********************************************/
export interface placeCollections {

}

/*********************************************
* room
**********************************************/
export interface room {
	audioDeviceName?: string;
	bookingType?: graph.bookingType;
	building?: string;
	capacity?: number;
	displayDeviceName?: string;
	emailAddress?: string;
	floorLabel?: string;
	floorNumber?: number;
	isWheelChairAccessible?: boolean;
	label?: string;
	nickname?: string;
	tags?: { results: Array<string> };
	videoDeviceName?: string;
}

/*********************************************
* roomCollections
**********************************************/
export interface roomCollections {

}

/*********************************************
* roomList
**********************************************/
export interface roomList {
	emailAddress?: string;
}

/*********************************************
* roomListCollections
**********************************************/
export interface roomListCollections {

}

/*********************************************
* attachment
**********************************************/
export interface attachment {
	contentType?: string;
	isInline?: boolean;
	lastModifiedDateTime?: anyOffset;
	name?: string;
	size?: number;
}

/*********************************************
* attachmentCollections
**********************************************/
export interface attachmentCollections {

}

/*********************************************
* calendarPermission
**********************************************/
export interface calendarPermission {
	allowedRoles?: { results: Array<graph.calendarRoleType> };
	emailAddress?: graph.emailAddress;
	isInsideOrganization?: boolean;
	isRemovable?: boolean;
	role?: graph.calendarRoleType;
}

/*********************************************
* calendarPermissionCollections
**********************************************/
export interface calendarPermissionCollections {

}

/*********************************************
* multiValueLegacyExtendedProperty
**********************************************/
export interface multiValueLegacyExtendedProperty {
	value?: { results: Array<string> };
}

/*********************************************
* multiValueLegacyExtendedPropertyCollections
**********************************************/
export interface multiValueLegacyExtendedPropertyCollections {

}

/*********************************************
* singleValueLegacyExtendedProperty
**********************************************/
export interface singleValueLegacyExtendedProperty {
	value?: string;
}

/*********************************************
* singleValueLegacyExtendedPropertyCollections
**********************************************/
export interface singleValueLegacyExtendedPropertyCollections {

}

/*********************************************
* calendarSharingMessage
**********************************************/
export interface calendarSharingMessage {
	canAccept?: boolean;
	sharingMessageAction?: graph.calendarSharingMessageAction;
	sharingMessageActions?: { results: Array<graph.calendarSharingMessageAction> };
	suggestedCalendarName?: string;
}

/*********************************************
* calendarSharingMessageCollections
**********************************************/
export interface calendarSharingMessageCollections {

}

/*********************************************
* post
**********************************************/
export interface post {
	body?: graph.itemBody;
	conversationId?: string;
	conversationThreadId?: string;
	from?: graph.recipient;
	hasAttachments?: boolean;
	newParticipants?: { results: Array<graph.recipient> };
	receivedDateTime?: anyOffset;
	sender?: graph.recipient;
}

/*********************************************
* postCollections
**********************************************/
export interface postCollections {

}

/*********************************************
* eventMessage
**********************************************/
export interface eventMessage {
	endDateTime?: graph.dateTimeTimeZone;
	isAllDay?: boolean;
	isDelegated?: boolean;
	isOutOfDate?: boolean;
	location?: graph.location;
	meetingMessageType?: graph.meetingMessageType;
	recurrence?: graph.patternedRecurrence;
	startDateTime?: graph.dateTimeTimeZone;
	type?: graph.eventType;
}

/*********************************************
* eventMessageCollections
**********************************************/
export interface eventMessageCollections {

}

/*********************************************
* eventMessageRequest
**********************************************/
export interface eventMessageRequest {
	allowNewTimeProposals?: boolean;
	meetingRequestType?: graph.meetingRequestType;
	previousEndDateTime?: graph.dateTimeTimeZone;
	previousLocation?: graph.location;
	previousStartDateTime?: graph.dateTimeTimeZone;
	responseRequested?: boolean;
}

/*********************************************
* eventMessageRequestCollections
**********************************************/
export interface eventMessageRequestCollections {

}

/*********************************************
* eventMessageResponse
**********************************************/
export interface eventMessageResponse {
	proposedNewTime?: graph.timeSlot;
	responseType?: graph.responseType;
}

/*********************************************
* eventMessageResponseCollections
**********************************************/
export interface eventMessageResponseCollections {

}

/*********************************************
* fileAttachment
**********************************************/
export interface fileAttachment {
	contentBytes?: any;
	contentId?: string;
	contentLocation?: string;
}

/*********************************************
* fileAttachmentCollections
**********************************************/
export interface fileAttachmentCollections {

}

/*********************************************
* inferenceClassificationOverride
**********************************************/
export interface inferenceClassificationOverride {
	classifyAs?: graph.inferenceClassificationType;
	senderEmailAddress?: graph.emailAddress;
}

/*********************************************
* inferenceClassificationOverrideCollections
**********************************************/
export interface inferenceClassificationOverrideCollections {

}

/*********************************************
* itemAttachment
**********************************************/
export interface itemAttachment {

}

/*********************************************
* itemAttachmentCollections
**********************************************/
export interface itemAttachmentCollections {

}

/*********************************************
* messageRule
**********************************************/
export interface messageRule {
	actions?: graph.messageRuleActions;
	conditions?: graph.messageRulePredicates;
	displayName?: string;
	exceptions?: graph.messageRulePredicates;
	hasError?: boolean;
	isEnabled?: boolean;
	isReadOnly?: boolean;
	sequence?: number;
}

/*********************************************
* messageRuleCollections
**********************************************/
export interface messageRuleCollections {

}

/*********************************************
* mailSearchFolder
**********************************************/
export interface mailSearchFolder {
	filterQuery?: string;
	includeNestedFolders?: boolean;
	isSupported?: boolean;
	sourceFolderIds?: { results: Array<string> };
}

/*********************************************
* mailSearchFolderCollections
**********************************************/
export interface mailSearchFolderCollections {

}

/*********************************************
* openTypeExtension
**********************************************/
export interface openTypeExtension {
	extensionName?: string;
}

/*********************************************
* openTypeExtensionCollections
**********************************************/
export interface openTypeExtensionCollections {

}

/*********************************************
* outlookCategory
**********************************************/
export interface outlookCategory {
	color?: graph.categoryColor;
	displayName?: string;
}

/*********************************************
* outlookCategoryCollections
**********************************************/
export interface outlookCategoryCollections {

}

/*********************************************
* referenceAttachment
**********************************************/
export interface referenceAttachment {

}

/*********************************************
* referenceAttachmentCollections
**********************************************/
export interface referenceAttachmentCollections {

}

/*********************************************
* columnLink
**********************************************/
export interface columnLink {
	name?: string;
}

/*********************************************
* columnLinkCollections
**********************************************/
export interface columnLinkCollections {

}

/*********************************************
* listItemVersion
**********************************************/
export interface listItemVersion {

}

/*********************************************
* listItemVersionCollections
**********************************************/
export interface listItemVersionCollections {

}

/*********************************************
* documentSetVersion
**********************************************/
export interface documentSetVersion {
	comment?: string;
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	items?: { results: Array<graph.documentSetVersionItem> };
	shouldCaptureMinorVersion?: boolean;
}

/*********************************************
* documentSetVersionCollections
**********************************************/
export interface documentSetVersionCollections {

}

/*********************************************
* fieldValueSet
**********************************************/
export interface fieldValueSet {

}

/*********************************************
* fieldValueSetCollections
**********************************************/
export interface fieldValueSetCollections {

}

/*********************************************
* itemActivity
**********************************************/
export interface itemActivity {
	access?: graph.accessAction;
	activityDateTime?: anyOffset;
	actor?: graph.identitySet;
}

/*********************************************
* itemActivityCollections
**********************************************/
export interface itemActivityCollections {

}

/*********************************************
* itemActivityStat
**********************************************/
export interface itemActivityStat {
	access?: graph.itemActionStat;
	create?: graph.itemActionStat;
	delete?: graph.itemActionStat;
	edit?: graph.itemActionStat;
	endDateTime?: anyOffset;
	incompleteData?: graph.incompleteData;
	isTrending?: boolean;
	move?: graph.itemActionStat;
	startDateTime?: anyOffset;
}

/*********************************************
* itemActivityStatCollections
**********************************************/
export interface itemActivityStatCollections {

}

/*********************************************
* sharedDriveItem
**********************************************/
export interface sharedDriveItem {
	owner?: graph.identitySet;
}

/*********************************************
* sharedDriveItemCollections
**********************************************/
export interface sharedDriveItemCollections {

}

/*********************************************
* schemaExtension
**********************************************/
export interface schemaExtension {
	description?: string;
	owner?: string;
	properties?: { results: Array<graph.extensionSchemaProperty> };
	status?: string;
	targetTypes?: { results: Array<string> };
}

/*********************************************
* schemaExtensionCollections
**********************************************/
export interface schemaExtensionCollections {

}

/*********************************************
* cloudCommunications
**********************************************/
export interface cloudCommunications {

}

/*********************************************
* cloudCommunicationsCollections
**********************************************/
export interface cloudCommunicationsCollections {

}

/*********************************************
* call
**********************************************/
export interface call {
	callbackUri?: string;
	callChainId?: string;
	callOptions?: graph.callOptions;
	callRoutes?: { results: Array<graph.callRoute> };
	chatInfo?: graph.chatInfo;
	direction?: graph.callDirection;
	incomingContext?: graph.incomingContext;
	mediaConfig?: graph.mediaConfig;
	mediaState?: graph.callMediaState;
	meetingInfo?: graph.meetingInfo;
	myParticipantId?: string;
	requestedModalities?: { results: Array<graph.modality> };
	resultInfo?: graph.resultInfo;
	source?: graph.participantInfo;
	state?: graph.callState;
	subject?: string;
	targets?: { results: Array<graph.invitationParticipantInfo> };
	tenantId?: string;
	toneInfo?: graph.toneInfo;
	transcription?: graph.callTranscriptionInfo;
}

/*********************************************
* callCollections
**********************************************/
export interface callCollections {

}

/*********************************************
* accessReviewHistoryDefinition
**********************************************/
export interface accessReviewHistoryDefinition {
	createdBy?: graph.userIdentity;
	createdDateTime?: anyOffset;
	decisions?: { results: Array<graph.accessReviewHistoryDecisionFilter> };
	displayName?: string;
	reviewHistoryPeriodEndDateTime?: anyOffset;
	reviewHistoryPeriodStartDateTime?: anyOffset;
	scheduleSettings?: graph.accessReviewHistoryScheduleSettings;
	scopes?: { results: Array<graph.accessReviewScope> };
	status?: graph.accessReviewHistoryStatus;
}

/*********************************************
* accessReviewHistoryDefinitionCollections
**********************************************/
export interface accessReviewHistoryDefinitionCollections {

}

/*********************************************
* accessReviewHistoryInstance
**********************************************/
export interface accessReviewHistoryInstance {
	downloadUri?: string;
	expirationDateTime?: anyOffset;
	fulfilledDateTime?: anyOffset;
	reviewHistoryPeriodEndDateTime?: anyOffset;
	reviewHistoryPeriodStartDateTime?: anyOffset;
	runDateTime?: anyOffset;
	status?: graph.accessReviewHistoryStatus;
}

/*********************************************
* accessReviewHistoryInstanceCollections
**********************************************/
export interface accessReviewHistoryInstanceCollections {

}

/*********************************************
* accessReviewInstance
**********************************************/
export interface accessReviewInstance {
	endDateTime?: anyOffset;
	fallbackReviewers?: { results: Array<graph.accessReviewReviewerScope> };
	reviewers?: { results: Array<graph.accessReviewReviewerScope> };
	scope?: graph.accessReviewScope;
	startDateTime?: anyOffset;
	status?: string;
}

/*********************************************
* accessReviewInstanceCollections
**********************************************/
export interface accessReviewInstanceCollections {

}

/*********************************************
* accessReviewReviewer
**********************************************/
export interface accessReviewReviewer {
	createdDateTime?: anyOffset;
	displayName?: string;
	userPrincipalName?: string;
}

/*********************************************
* accessReviewReviewerCollections
**********************************************/
export interface accessReviewReviewerCollections {

}

/*********************************************
* accessReviewInstanceDecisionItem
**********************************************/
export interface accessReviewInstanceDecisionItem {
	accessReviewId?: string;
	appliedBy?: graph.userIdentity;
	appliedDateTime?: anyOffset;
	applyResult?: string;
	decision?: string;
	justification?: string;
	principal?: graph.identity;
	principalLink?: string;
	recommendation?: string;
	resource?: graph.accessReviewInstanceDecisionItemResource;
	resourceLink?: string;
	reviewedBy?: graph.userIdentity;
	reviewedDateTime?: anyOffset;
}

/*********************************************
* accessReviewInstanceDecisionItemCollections
**********************************************/
export interface accessReviewInstanceDecisionItemCollections {

}

/*********************************************
* accessReviewStage
**********************************************/
export interface accessReviewStage {
	endDateTime?: anyOffset;
	fallbackReviewers?: { results: Array<graph.accessReviewReviewerScope> };
	reviewers?: { results: Array<graph.accessReviewReviewerScope> };
	startDateTime?: anyOffset;
	status?: string;
}

/*********************************************
* accessReviewStageCollections
**********************************************/
export interface accessReviewStageCollections {

}

/*********************************************
* accessReviewScheduleDefinition
**********************************************/
export interface accessReviewScheduleDefinition {
	additionalNotificationRecipients?: { results: Array<graph.accessReviewNotificationRecipientItem> };
	createdBy?: graph.userIdentity;
	createdDateTime?: anyOffset;
	descriptionForAdmins?: string;
	descriptionForReviewers?: string;
	displayName?: string;
	fallbackReviewers?: { results: Array<graph.accessReviewReviewerScope> };
	instanceEnumerationScope?: graph.accessReviewScope;
	lastModifiedDateTime?: anyOffset;
	reviewers?: { results: Array<graph.accessReviewReviewerScope> };
	scope?: graph.accessReviewScope;
	settings?: graph.accessReviewScheduleSettings;
	stageSettings?: { results: Array<graph.accessReviewStageSettings> };
	status?: string;
}

/*********************************************
* accessReviewScheduleDefinitionCollections
**********************************************/
export interface accessReviewScheduleDefinitionCollections {

}

/*********************************************
* accessReviewSet
**********************************************/
export interface accessReviewSet {

}

/*********************************************
* accessReviewSetCollections
**********************************************/
export interface accessReviewSetCollections {

}

/*********************************************
* appConsentApprovalRoute
**********************************************/
export interface appConsentApprovalRoute {

}

/*********************************************
* appConsentApprovalRouteCollections
**********************************************/
export interface appConsentApprovalRouteCollections {

}

/*********************************************
* appConsentRequest
**********************************************/
export interface appConsentRequest {
	appDisplayName?: string;
	appId?: string;
	pendingScopes?: { results: Array<graph.appConsentRequestScope> };
}

/*********************************************
* appConsentRequestCollections
**********************************************/
export interface appConsentRequestCollections {

}

/*********************************************
* userConsentRequest
**********************************************/
export interface userConsentRequest {
	reason?: string;
}

/*********************************************
* userConsentRequestCollections
**********************************************/
export interface userConsentRequestCollections {

}

/*********************************************
* approval
**********************************************/
export interface approval {

}

/*********************************************
* approvalCollections
**********************************************/
export interface approvalCollections {

}

/*********************************************
* approvalStage
**********************************************/
export interface approvalStage {
	assignedToMe?: boolean;
	displayName?: string;
	justification?: string;
	reviewedBy?: graph.identity;
	reviewedDateTime?: anyOffset;
	reviewResult?: string;
	status?: string;
}

/*********************************************
* approvalStageCollections
**********************************************/
export interface approvalStageCollections {

}

/*********************************************
* entitlementManagement
**********************************************/
export interface entitlementManagement {

}

/*********************************************
* entitlementManagementCollections
**********************************************/
export interface entitlementManagementCollections {

}

/*********************************************
* accessPackage
**********************************************/
export interface accessPackage {
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	isHidden?: boolean;
	modifiedDateTime?: anyOffset;
}

/*********************************************
* accessPackageCollections
**********************************************/
export interface accessPackageCollections {

}

/*********************************************
* accessPackageAssignmentPolicy
**********************************************/
export interface accessPackageAssignmentPolicy {
	allowedTargetScope?: graph.allowedTargetScope;
	automaticRequestSettings?: graph.accessPackageAutomaticRequestSettings;
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	expiration?: graph.expirationPattern;
	modifiedDateTime?: anyOffset;
	requestApprovalSettings?: graph.accessPackageAssignmentApprovalSettings;
	requestorSettings?: graph.accessPackageAssignmentRequestorSettings;
	reviewSettings?: graph.accessPackageAssignmentReviewSettings;
	specificAllowedTargets?: { results: Array<graph.subjectSet> };
}

/*********************************************
* accessPackageAssignmentPolicyCollections
**********************************************/
export interface accessPackageAssignmentPolicyCollections {

}

/*********************************************
* accessPackageAssignmentRequest
**********************************************/
export interface accessPackageAssignmentRequest {
	completedDateTime?: anyOffset;
	createdDateTime?: anyOffset;
	requestType?: graph.accessPackageRequestType;
	schedule?: graph.entitlementManagementSchedule;
	state?: graph.accessPackageRequestState;
	status?: string;
}

/*********************************************
* accessPackageAssignmentRequestCollections
**********************************************/
export interface accessPackageAssignmentRequestCollections {

}

/*********************************************
* accessPackageAssignment
**********************************************/
export interface accessPackageAssignment {
	expiredDateTime?: anyOffset;
	schedule?: graph.entitlementManagementSchedule;
	state?: graph.accessPackageAssignmentState;
	status?: string;
}

/*********************************************
* accessPackageAssignmentCollections
**********************************************/
export interface accessPackageAssignmentCollections {

}

/*********************************************
* accessPackageCatalog
**********************************************/
export interface accessPackageCatalog {
	catalogType?: graph.accessPackageCatalogType;
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	isExternallyVisible?: boolean;
	modifiedDateTime?: anyOffset;
	state?: graph.accessPackageCatalogState;
}

/*********************************************
* accessPackageCatalogCollections
**********************************************/
export interface accessPackageCatalogCollections {

}

/*********************************************
* connectedOrganization
**********************************************/
export interface connectedOrganization {
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	identitySources?: { results: Array<graph.identitySource> };
	modifiedDateTime?: anyOffset;
	state?: graph.connectedOrganizationState;
}

/*********************************************
* connectedOrganizationCollections
**********************************************/
export interface connectedOrganizationCollections {

}

/*********************************************
* entitlementManagementSettings
**********************************************/
export interface entitlementManagementSettings {
	durationUntilExternalUserDeletedAfterBlocked?: Edm.Duration;
	externalUserLifecycleAction?: graph.accessPackageExternalUserLifecycleAction;
}

/*********************************************
* entitlementManagementSettingsCollections
**********************************************/
export interface entitlementManagementSettingsCollections {

}

/*********************************************
* identityGovernance
**********************************************/
export interface identityGovernance {

}

/*********************************************
* identityGovernanceCollections
**********************************************/
export interface identityGovernanceCollections {

}

/*********************************************
* termsOfUseContainer
**********************************************/
export interface termsOfUseContainer {

}

/*********************************************
* termsOfUseContainerCollections
**********************************************/
export interface termsOfUseContainerCollections {

}

/*********************************************
* agreement
**********************************************/
export interface agreement {
	displayName?: string;
	isPerDeviceAcceptanceRequired?: boolean;
	isViewingBeforeAcceptanceRequired?: boolean;
	termsExpiration?: graph.termsExpiration;
	userReacceptRequiredFrequency?: Edm.Duration;
}

/*********************************************
* agreementCollections
**********************************************/
export interface agreementCollections {

}

/*********************************************
* agreementFileProperties
**********************************************/
export interface agreementFileProperties {
	createdDateTime?: anyOffset;
	displayName?: string;
	fileData?: graph.agreementFileData;
	fileName?: string;
	isDefault?: boolean;
	isMajorVersion?: boolean;
	language?: string;
}

/*********************************************
* agreementFilePropertiesCollections
**********************************************/
export interface agreementFilePropertiesCollections {

}

/*********************************************
* agreementFile
**********************************************/
export interface agreementFile {

}

/*********************************************
* agreementFileCollections
**********************************************/
export interface agreementFileCollections {

}

/*********************************************
* agreementFileLocalization
**********************************************/
export interface agreementFileLocalization {

}

/*********************************************
* agreementFileLocalizationCollections
**********************************************/
export interface agreementFileLocalizationCollections {

}

/*********************************************
* agreementFileVersion
**********************************************/
export interface agreementFileVersion {

}

/*********************************************
* agreementFileVersionCollections
**********************************************/
export interface agreementFileVersionCollections {

}

/*********************************************
* namedLocation
**********************************************/
export interface namedLocation {
	createdDateTime?: anyOffset;
	displayName?: string;
	modifiedDateTime?: anyOffset;
}

/*********************************************
* namedLocationCollections
**********************************************/
export interface namedLocationCollections {

}

/*********************************************
* countryNamedLocation
**********************************************/
export interface countryNamedLocation {
	countriesAndRegions?: { results: Array<string> };
	countryLookupMethod?: graph.countryLookupMethodType;
	includeUnknownCountriesAndRegions?: boolean;
}

/*********************************************
* countryNamedLocationCollections
**********************************************/
export interface countryNamedLocationCollections {

}

/*********************************************
* identityProtectionRoot
**********************************************/
export interface identityProtectionRoot {

}

/*********************************************
* identityProtectionRootCollections
**********************************************/
export interface identityProtectionRootCollections {

}

/*********************************************
* riskDetection
**********************************************/
export interface riskDetection {
	activity?: graph.activityType;
	activityDateTime?: anyOffset;
	additionalInfo?: string;
	correlationId?: string;
	detectedDateTime?: anyOffset;
	detectionTimingType?: graph.riskDetectionTimingType;
	ipAddress?: string;
	lastUpdatedDateTime?: anyOffset;
	location?: graph.signInLocation;
	requestId?: string;
	riskDetail?: graph.riskDetail;
	riskEventType?: string;
	riskLevel?: graph.riskLevel;
	riskState?: graph.riskState;
	source?: string;
	tokenIssuerType?: graph.tokenIssuerType;
	userDisplayName?: string;
	userId?: string;
	userPrincipalName?: string;
}

/*********************************************
* riskDetectionCollections
**********************************************/
export interface riskDetectionCollections {

}

/*********************************************
* riskyUser
**********************************************/
export interface riskyUser {
	isDeleted?: boolean;
	isProcessing?: boolean;
	riskDetail?: graph.riskDetail;
	riskLastUpdatedDateTime?: anyOffset;
	riskLevel?: graph.riskLevel;
	riskState?: graph.riskState;
	userDisplayName?: string;
	userPrincipalName?: string;
}

/*********************************************
* riskyUserCollections
**********************************************/
export interface riskyUserCollections {

}

/*********************************************
* ipNamedLocation
**********************************************/
export interface ipNamedLocation {
	ipRanges?: { results: Array<graph.ipRange> };
	isTrusted?: boolean;
}

/*********************************************
* ipNamedLocationCollections
**********************************************/
export interface ipNamedLocationCollections {

}

/*********************************************
* riskyUserHistoryItem
**********************************************/
export interface riskyUserHistoryItem {
	activity?: graph.riskUserActivity;
	initiatedBy?: string;
	userId?: string;
}

/*********************************************
* riskyUserHistoryItemCollections
**********************************************/
export interface riskyUserHistoryItemCollections {

}

/*********************************************
* accessPackageSubject
**********************************************/
export interface accessPackageSubject {
	displayName?: string;
	email?: string;
	objectId?: string;
	onPremisesSecurityIdentifier?: string;
	principalName?: string;
	subjectType?: graph.accessPackageSubjectType;
}

/*********************************************
* accessPackageSubjectCollections
**********************************************/
export interface accessPackageSubjectCollections {

}

/*********************************************
* mobileApp
**********************************************/
export interface mobileApp {
	createdDateTime?: anyOffset;
	description?: string;
	developer?: string;
	displayName?: string;
	informationUrl?: string;
	isFeatured?: boolean;
	largeIcon?: graph.mimeContent;
	lastModifiedDateTime?: anyOffset;
	notes?: string;
	owner?: string;
	privacyInformationUrl?: string;
	publisher?: string;
	publishingState?: graph.mobileAppPublishingState;
}

/*********************************************
* mobileAppCollections
**********************************************/
export interface mobileAppCollections {

}

/*********************************************
* mobileLobApp
**********************************************/
export interface mobileLobApp {
	committedContentVersion?: string;
	fileName?: string;
	size?: number;
}

/*********************************************
* mobileLobAppCollections
**********************************************/
export interface mobileLobAppCollections {

}

/*********************************************
* androidLobApp
**********************************************/
export interface androidLobApp {
	minimumSupportedOperatingSystem?: graph.androidMinimumOperatingSystem;
	packageId?: string;
	versionCode?: string;
	versionName?: string;
}

/*********************************************
* androidLobAppCollections
**********************************************/
export interface androidLobAppCollections {

}

/*********************************************
* androidStoreApp
**********************************************/
export interface androidStoreApp {
	appStoreUrl?: string;
	minimumSupportedOperatingSystem?: graph.androidMinimumOperatingSystem;
	packageId?: string;
}

/*********************************************
* androidStoreAppCollections
**********************************************/
export interface androidStoreAppCollections {

}

/*********************************************
* deviceAppManagement
**********************************************/
export interface deviceAppManagement {
	isEnabledForMicrosoftStoreForBusiness?: boolean;
	microsoftStoreForBusinessLanguage?: string;
	microsoftStoreForBusinessLastCompletedApplicationSyncTime?: anyOffset;
	microsoftStoreForBusinessLastSuccessfulSyncDateTime?: anyOffset;
}

/*********************************************
* deviceAppManagementCollections
**********************************************/
export interface deviceAppManagementCollections {

}

/*********************************************
* managedEBook
**********************************************/
export interface managedEBook {
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	informationUrl?: string;
	largeCover?: graph.mimeContent;
	lastModifiedDateTime?: anyOffset;
	privacyInformationUrl?: string;
	publishedDateTime?: anyOffset;
	publisher?: string;
}

/*********************************************
* managedEBookCollections
**********************************************/
export interface managedEBookCollections {

}

/*********************************************
* mobileAppCategory
**********************************************/
export interface mobileAppCategory {
	displayName?: string;
	lastModifiedDateTime?: anyOffset;
}

/*********************************************
* mobileAppCategoryCollections
**********************************************/
export interface mobileAppCategoryCollections {

}

/*********************************************
* managedDeviceMobileAppConfiguration
**********************************************/
export interface managedDeviceMobileAppConfiguration {
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	lastModifiedDateTime?: anyOffset;
	targetedMobileApps?: { results: Array<string> };
	version?: number;
}

/*********************************************
* managedDeviceMobileAppConfigurationCollections
**********************************************/
export interface managedDeviceMobileAppConfigurationCollections {

}

/*********************************************
* vppToken
**********************************************/
export interface vppToken {
	appleId?: string;
	automaticallyUpdateApps?: boolean;
	countryOrRegion?: string;
	expirationDateTime?: anyOffset;
	lastModifiedDateTime?: anyOffset;
	lastSyncDateTime?: anyOffset;
	lastSyncStatus?: graph.vppTokenSyncStatus;
	organizationName?: string;
	state?: graph.vppTokenState;
	token?: string;
	vppTokenAccountType?: graph.vppTokenAccountType;
}

/*********************************************
* vppTokenCollections
**********************************************/
export interface vppTokenCollections {

}

/*********************************************
* managedAppPolicy
**********************************************/
export interface managedAppPolicy {
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	lastModifiedDateTime?: anyOffset;
	version?: string;
}

/*********************************************
* managedAppPolicyCollections
**********************************************/
export interface managedAppPolicyCollections {

}

/*********************************************
* managedAppProtection
**********************************************/
export interface managedAppProtection {
	allowedDataStorageLocations?: { results: Array<graph.managedAppDataStorageLocation> };
	allowedInboundDataTransferSources?: graph.managedAppDataTransferLevel;
	allowedOutboundClipboardSharingLevel?: graph.managedAppClipboardSharingLevel;
	allowedOutboundDataTransferDestinations?: graph.managedAppDataTransferLevel;
	contactSyncBlocked?: boolean;
	dataBackupBlocked?: boolean;
	deviceComplianceRequired?: boolean;
	disableAppPinIfDevicePinIsSet?: boolean;
	fingerprintBlocked?: boolean;
	managedBrowser?: graph.managedBrowserType;
	managedBrowserToOpenLinksRequired?: boolean;
	maximumPinRetries?: number;
	minimumPinLength?: number;
	minimumRequiredAppVersion?: string;
	minimumRequiredOsVersion?: string;
	minimumWarningAppVersion?: string;
	minimumWarningOsVersion?: string;
	organizationalCredentialsRequired?: boolean;
	periodBeforePinReset?: Edm.Duration;
	periodOfflineBeforeAccessCheck?: Edm.Duration;
	periodOfflineBeforeWipeIsEnforced?: Edm.Duration;
	periodOnlineBeforeAccessCheck?: Edm.Duration;
	pinCharacterSet?: graph.managedAppPinCharacterSet;
	pinRequired?: boolean;
	printBlocked?: boolean;
	saveAsBlocked?: boolean;
	simplePinBlocked?: boolean;
}

/*********************************************
* managedAppProtectionCollections
**********************************************/
export interface managedAppProtectionCollections {

}

/*********************************************
* targetedManagedAppProtection
**********************************************/
export interface targetedManagedAppProtection {
	isAssigned?: boolean;
}

/*********************************************
* targetedManagedAppProtectionCollections
**********************************************/
export interface targetedManagedAppProtectionCollections {

}

/*********************************************
* androidManagedAppProtection
**********************************************/
export interface androidManagedAppProtection {
	customBrowserDisplayName?: string;
	customBrowserPackageId?: string;
	deployedAppCount?: number;
	disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean;
	encryptAppData?: boolean;
	minimumRequiredPatchVersion?: string;
	minimumWarningPatchVersion?: string;
	screenCaptureBlocked?: boolean;
}

/*********************************************
* androidManagedAppProtectionCollections
**********************************************/
export interface androidManagedAppProtectionCollections {

}

/*********************************************
* defaultManagedAppProtection
**********************************************/
export interface defaultManagedAppProtection {
	appDataEncryptionType?: graph.managedAppDataEncryptionType;
	customSettings?: { results: Array<graph.keyValuePair> };
	deployedAppCount?: number;
	disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean;
	encryptAppData?: boolean;
	faceIdBlocked?: boolean;
	minimumRequiredPatchVersion?: string;
	minimumRequiredSdkVersion?: string;
	minimumWarningPatchVersion?: string;
	screenCaptureBlocked?: boolean;
}

/*********************************************
* defaultManagedAppProtectionCollections
**********************************************/
export interface defaultManagedAppProtectionCollections {

}

/*********************************************
* iosManagedAppProtection
**********************************************/
export interface iosManagedAppProtection {
	appDataEncryptionType?: graph.managedAppDataEncryptionType;
	customBrowserProtocol?: string;
	deployedAppCount?: number;
	faceIdBlocked?: boolean;
	minimumRequiredSdkVersion?: string;
}

/*********************************************
* iosManagedAppProtectionCollections
**********************************************/
export interface iosManagedAppProtectionCollections {

}

/*********************************************
* managedAppStatus
**********************************************/
export interface managedAppStatus {
	displayName?: string;
	version?: string;
}

/*********************************************
* managedAppStatusCollections
**********************************************/
export interface managedAppStatusCollections {

}

/*********************************************
* windowsInformationProtection
**********************************************/
export interface windowsInformationProtection {
	azureRightsManagementServicesAllowed?: boolean;
	dataRecoveryCertificate?: graph.windowsInformationProtectionDataRecoveryCertificate;
	enforcementLevel?: graph.windowsInformationProtectionEnforcementLevel;
	enterpriseDomain?: string;
	enterpriseInternalProxyServers?: { results: Array<graph.windowsInformationProtectionResourceCollection> };
	enterpriseIPRanges?: { results: Array<graph.windowsInformationProtectionIPRangeCollection> };
	enterpriseIPRangesAreAuthoritative?: boolean;
	enterpriseNetworkDomainNames?: { results: Array<graph.windowsInformationProtectionResourceCollection> };
	enterpriseProtectedDomainNames?: { results: Array<graph.windowsInformationProtectionResourceCollection> };
	enterpriseProxiedDomains?: { results: Array<graph.windowsInformationProtectionProxiedDomainCollection> };
	enterpriseProxyServers?: { results: Array<graph.windowsInformationProtectionResourceCollection> };
	enterpriseProxyServersAreAuthoritative?: boolean;
	exemptApps?: { results: Array<graph.windowsInformationProtectionApp> };
	iconsVisible?: boolean;
	indexingEncryptedStoresOrItemsBlocked?: boolean;
	isAssigned?: boolean;
	neutralDomainResources?: { results: Array<graph.windowsInformationProtectionResourceCollection> };
	protectedApps?: { results: Array<graph.windowsInformationProtectionApp> };
	protectionUnderLockConfigRequired?: boolean;
	revokeOnUnenrollDisabled?: boolean;
	rightsManagementServicesTemplateId?: any;
	smbAutoEncryptedFileExtensions?: { results: Array<graph.windowsInformationProtectionResourceCollection> };
}

/*********************************************
* windowsInformationProtectionCollections
**********************************************/
export interface windowsInformationProtectionCollections {

}

/*********************************************
* mdmWindowsInformationProtectionPolicy
**********************************************/
export interface mdmWindowsInformationProtectionPolicy {

}

/*********************************************
* mdmWindowsInformationProtectionPolicyCollections
**********************************************/
export interface mdmWindowsInformationProtectionPolicyCollections {

}

/*********************************************
* managedAppConfiguration
**********************************************/
export interface managedAppConfiguration {
	customSettings?: { results: Array<graph.keyValuePair> };
}

/*********************************************
* managedAppConfigurationCollections
**********************************************/
export interface managedAppConfigurationCollections {

}

/*********************************************
* targetedManagedAppConfiguration
**********************************************/
export interface targetedManagedAppConfiguration {
	deployedAppCount?: number;
	isAssigned?: boolean;
}

/*********************************************
* targetedManagedAppConfigurationCollections
**********************************************/
export interface targetedManagedAppConfigurationCollections {

}

/*********************************************
* windowsInformationProtectionPolicy
**********************************************/
export interface windowsInformationProtectionPolicy {
	daysWithoutContactBeforeUnenroll?: number;
	mdmEnrollmentUrl?: string;
	minutesOfInactivityBeforeDeviceLock?: number;
	numberOfPastPinsRemembered?: number;
	passwordMaximumAttemptCount?: number;
	pinExpirationDays?: number;
	pinLowercaseLetters?: graph.windowsInformationProtectionPinCharacterRequirements;
	pinMinimumLength?: number;
	pinSpecialCharacters?: graph.windowsInformationProtectionPinCharacterRequirements;
	pinUppercaseLetters?: graph.windowsInformationProtectionPinCharacterRequirements;
	revokeOnMdmHandoffDisabled?: boolean;
	windowsHelloForBusinessBlocked?: boolean;
}

/*********************************************
* windowsInformationProtectionPolicyCollections
**********************************************/
export interface windowsInformationProtectionPolicyCollections {

}

/*********************************************
* iosLobApp
**********************************************/
export interface iosLobApp {
	applicableDeviceType?: graph.iosDeviceType;
	buildNumber?: string;
	bundleId?: string;
	expirationDateTime?: anyOffset;
	minimumSupportedOperatingSystem?: graph.iosMinimumOperatingSystem;
	versionNumber?: string;
}

/*********************************************
* iosLobAppCollections
**********************************************/
export interface iosLobAppCollections {

}

/*********************************************
* iosMobileAppConfiguration
**********************************************/
export interface iosMobileAppConfiguration {
	encodedSettingXml?: any;
	settings?: { results: Array<graph.appConfigurationSettingItem> };
}

/*********************************************
* iosMobileAppConfigurationCollections
**********************************************/
export interface iosMobileAppConfigurationCollections {

}

/*********************************************
* iosStoreApp
**********************************************/
export interface iosStoreApp {
	applicableDeviceType?: graph.iosDeviceType;
	appStoreUrl?: string;
	bundleId?: string;
	minimumSupportedOperatingSystem?: graph.iosMinimumOperatingSystem;
}

/*********************************************
* iosStoreAppCollections
**********************************************/
export interface iosStoreAppCollections {

}

/*********************************************
* iosVppApp
**********************************************/
export interface iosVppApp {
	applicableDeviceType?: graph.iosDeviceType;
	appStoreUrl?: string;
	bundleId?: string;
	licensingType?: graph.vppLicensingType;
	releaseDateTime?: anyOffset;
	totalLicenseCount?: number;
	usedLicenseCount?: number;
	vppTokenAccountType?: graph.vppTokenAccountType;
	vppTokenAppleId?: string;
	vppTokenOrganizationName?: string;
}

/*********************************************
* iosVppAppCollections
**********************************************/
export interface iosVppAppCollections {

}

/*********************************************
* macOSOfficeSuiteApp
**********************************************/
export interface macOSOfficeSuiteApp {

}

/*********************************************
* macOSOfficeSuiteAppCollections
**********************************************/
export interface macOSOfficeSuiteAppCollections {

}

/*********************************************
* managedApp
**********************************************/
export interface managedApp {
	appAvailability?: graph.managedAppAvailability;
	version?: string;
}

/*********************************************
* managedAppCollections
**********************************************/
export interface managedAppCollections {

}

/*********************************************
* managedMobileLobApp
**********************************************/
export interface managedMobileLobApp {
	committedContentVersion?: string;
	fileName?: string;
	size?: number;
}

/*********************************************
* managedMobileLobAppCollections
**********************************************/
export interface managedMobileLobAppCollections {

}

/*********************************************
* managedAndroidLobApp
**********************************************/
export interface managedAndroidLobApp {
	minimumSupportedOperatingSystem?: graph.androidMinimumOperatingSystem;
	packageId?: string;
	versionCode?: string;
	versionName?: string;
}

/*********************************************
* managedAndroidLobAppCollections
**********************************************/
export interface managedAndroidLobAppCollections {

}

/*********************************************
* managedAndroidStoreApp
**********************************************/
export interface managedAndroidStoreApp {
	appStoreUrl?: string;
	minimumSupportedOperatingSystem?: graph.androidMinimumOperatingSystem;
	packageId?: string;
}

/*********************************************
* managedAndroidStoreAppCollections
**********************************************/
export interface managedAndroidStoreAppCollections {

}

/*********************************************
* managedDeviceMobileAppConfigurationAssignment
**********************************************/
export interface managedDeviceMobileAppConfigurationAssignment {
	target?: graph.deviceAndAppManagementAssignmentTarget;
}

/*********************************************
* managedDeviceMobileAppConfigurationAssignmentCollections
**********************************************/
export interface managedDeviceMobileAppConfigurationAssignmentCollections {

}

/*********************************************
* managedDeviceMobileAppConfigurationDeviceStatus
**********************************************/
export interface managedDeviceMobileAppConfigurationDeviceStatus {
	complianceGracePeriodExpirationDateTime?: anyOffset;
	deviceDisplayName?: string;
	deviceModel?: string;
	lastReportedDateTime?: anyOffset;
	status?: graph.complianceStatus;
	userName?: string;
	userPrincipalName?: string;
}

/*********************************************
* managedDeviceMobileAppConfigurationDeviceStatusCollections
**********************************************/
export interface managedDeviceMobileAppConfigurationDeviceStatusCollections {

}

/*********************************************
* managedDeviceMobileAppConfigurationDeviceSummary
**********************************************/
export interface managedDeviceMobileAppConfigurationDeviceSummary {
	configurationVersion?: number;
	errorCount?: number;
	failedCount?: number;
	lastUpdateDateTime?: anyOffset;
	notApplicableCount?: number;
	pendingCount?: number;
	successCount?: number;
}

/*********************************************
* managedDeviceMobileAppConfigurationDeviceSummaryCollections
**********************************************/
export interface managedDeviceMobileAppConfigurationDeviceSummaryCollections {

}

/*********************************************
* managedDeviceMobileAppConfigurationUserStatus
**********************************************/
export interface managedDeviceMobileAppConfigurationUserStatus {
	devicesCount?: number;
	lastReportedDateTime?: anyOffset;
	status?: graph.complianceStatus;
	userDisplayName?: string;
	userPrincipalName?: string;
}

/*********************************************
* managedDeviceMobileAppConfigurationUserStatusCollections
**********************************************/
export interface managedDeviceMobileAppConfigurationUserStatusCollections {

}

/*********************************************
* managedDeviceMobileAppConfigurationUserSummary
**********************************************/
export interface managedDeviceMobileAppConfigurationUserSummary {
	configurationVersion?: number;
	errorCount?: number;
	failedCount?: number;
	lastUpdateDateTime?: anyOffset;
	notApplicableCount?: number;
	pendingCount?: number;
	successCount?: number;
}

/*********************************************
* managedDeviceMobileAppConfigurationUserSummaryCollections
**********************************************/
export interface managedDeviceMobileAppConfigurationUserSummaryCollections {

}

/*********************************************
* managedIOSLobApp
**********************************************/
export interface managedIOSLobApp {
	applicableDeviceType?: graph.iosDeviceType;
	buildNumber?: string;
	bundleId?: string;
	expirationDateTime?: anyOffset;
	minimumSupportedOperatingSystem?: graph.iosMinimumOperatingSystem;
	versionNumber?: string;
}

/*********************************************
* managedIOSLobAppCollections
**********************************************/
export interface managedIOSLobAppCollections {

}

/*********************************************
* managedIOSStoreApp
**********************************************/
export interface managedIOSStoreApp {
	applicableDeviceType?: graph.iosDeviceType;
	appStoreUrl?: string;
	bundleId?: string;
	minimumSupportedOperatingSystem?: graph.iosMinimumOperatingSystem;
}

/*********************************************
* managedIOSStoreAppCollections
**********************************************/
export interface managedIOSStoreAppCollections {

}

/*********************************************
* mobileAppContent
**********************************************/
export interface mobileAppContent {

}

/*********************************************
* mobileAppContentCollections
**********************************************/
export interface mobileAppContentCollections {

}

/*********************************************
* microsoftStoreForBusinessApp
**********************************************/
export interface microsoftStoreForBusinessApp {
	licenseType?: graph.microsoftStoreForBusinessLicenseType;
	packageIdentityName?: string;
	productKey?: string;
	totalLicenseCount?: number;
	usedLicenseCount?: number;
}

/*********************************************
* microsoftStoreForBusinessAppCollections
**********************************************/
export interface microsoftStoreForBusinessAppCollections {

}

/*********************************************
* mobileAppAssignment
**********************************************/
export interface mobileAppAssignment {
	intent?: graph.installIntent;
	settings?: graph.mobileAppAssignmentSettings;
	target?: graph.deviceAndAppManagementAssignmentTarget;
}

/*********************************************
* mobileAppAssignmentCollections
**********************************************/
export interface mobileAppAssignmentCollections {

}

/*********************************************
* mobileAppContentFile
**********************************************/
export interface mobileAppContentFile {
	azureStorageUri?: string;
	azureStorageUriExpirationDateTime?: anyOffset;
	createdDateTime?: anyOffset;
	isCommitted?: boolean;
	manifest?: any;
	name?: string;
	size?: number;
	sizeEncrypted?: number;
	uploadState?: graph.mobileAppContentFileUploadState;
}

/*********************************************
* mobileAppContentFileCollections
**********************************************/
export interface mobileAppContentFileCollections {

}

/*********************************************
* webApp
**********************************************/
export interface webApp {
	appUrl?: string;
	useManagedBrowser?: boolean;
}

/*********************************************
* webAppCollections
**********************************************/
export interface webAppCollections {

}

/*********************************************
* win32LobApp
**********************************************/
export interface win32LobApp {
	applicableArchitectures?: graph.windowsArchitecture;
	installCommandLine?: string;
	installExperience?: graph.win32LobAppInstallExperience;
	minimumCpuSpeedInMHz?: number;
	minimumFreeDiskSpaceInMB?: number;
	minimumMemoryInMB?: number;
	minimumNumberOfProcessors?: number;
	minimumSupportedWindowsRelease?: string;
	msiInformation?: graph.win32LobAppMsiInformation;
	returnCodes?: { results: Array<graph.win32LobAppReturnCode> };
	rules?: { results: Array<graph.win32LobAppRule> };
	setupFilePath?: string;
	uninstallCommandLine?: string;
}

/*********************************************
* win32LobAppCollections
**********************************************/
export interface win32LobAppCollections {

}

/*********************************************
* windowsMobileMSI
**********************************************/
export interface windowsMobileMSI {
	commandLine?: string;
	ignoreVersionDetection?: boolean;
	productCode?: string;
	productVersion?: string;
}

/*********************************************
* windowsMobileMSICollections
**********************************************/
export interface windowsMobileMSICollections {

}

/*********************************************
* windowsUniversalAppX
**********************************************/
export interface windowsUniversalAppX {
	applicableArchitectures?: graph.windowsArchitecture;
	applicableDeviceTypes?: graph.windowsDeviceType;
	identityName?: string;
	identityPublisherHash?: string;
	identityResourceIdentifier?: string;
	identityVersion?: string;
	isBundle?: boolean;
	minimumSupportedOperatingSystem?: graph.windowsMinimumOperatingSystem;
}

/*********************************************
* windowsUniversalAppXCollections
**********************************************/
export interface windowsUniversalAppXCollections {

}

/*********************************************
* deviceInstallState
**********************************************/
export interface deviceInstallState {
	deviceId?: string;
	deviceName?: string;
	errorCode?: string;
	installState?: graph.installState;
	lastSyncDateTime?: anyOffset;
	osDescription?: string;
	osVersion?: string;
	userName?: string;
}

/*********************************************
* deviceInstallStateCollections
**********************************************/
export interface deviceInstallStateCollections {

}

/*********************************************
* eBookInstallSummary
**********************************************/
export interface eBookInstallSummary {
	failedDeviceCount?: number;
	failedUserCount?: number;
	installedDeviceCount?: number;
	installedUserCount?: number;
	notInstalledDeviceCount?: number;
	notInstalledUserCount?: number;
}

/*********************************************
* eBookInstallSummaryCollections
**********************************************/
export interface eBookInstallSummaryCollections {

}

/*********************************************
* iosVppEBook
**********************************************/
export interface iosVppEBook {
	appleId?: string;
	genres?: { results: Array<string> };
	language?: string;
	seller?: string;
	totalLicenseCount?: number;
	usedLicenseCount?: number;
	vppOrganizationName?: string;
	vppTokenId?: any;
}

/*********************************************
* iosVppEBookCollections
**********************************************/
export interface iosVppEBookCollections {

}

/*********************************************
* managedEBookAssignment
**********************************************/
export interface managedEBookAssignment {
	installIntent?: graph.installIntent;
	target?: graph.deviceAndAppManagementAssignmentTarget;
}

/*********************************************
* managedEBookAssignmentCollections
**********************************************/
export interface managedEBookAssignmentCollections {

}

/*********************************************
* iosVppEBookAssignment
**********************************************/
export interface iosVppEBookAssignment {

}

/*********************************************
* iosVppEBookAssignmentCollections
**********************************************/
export interface iosVppEBookAssignmentCollections {

}

/*********************************************
* userInstallStateSummary
**********************************************/
export interface userInstallStateSummary {
	failedDeviceCount?: number;
	installedDeviceCount?: number;
	notInstalledDeviceCount?: number;
	userName?: string;
}

/*********************************************
* userInstallStateSummaryCollections
**********************************************/
export interface userInstallStateSummaryCollections {

}

/*********************************************
* deviceManagement
**********************************************/
export interface deviceManagement {
	intuneAccountId?: any;
	settings?: graph.deviceManagementSettings;
	intuneBrand?: graph.intuneBrand;
	subscriptionState?: graph.deviceManagementSubscriptionState;
}

/*********************************************
* deviceManagementCollections
**********************************************/
export interface deviceManagementCollections {

}

/*********************************************
* termsAndConditions
**********************************************/
export interface termsAndConditions {
	acceptanceStatement?: string;
	bodyText?: string;
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	lastModifiedDateTime?: anyOffset;
	title?: string;
	version?: number;
}

/*********************************************
* termsAndConditionsCollections
**********************************************/
export interface termsAndConditionsCollections {

}

/*********************************************
* deviceCompliancePolicy
**********************************************/
export interface deviceCompliancePolicy {
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	lastModifiedDateTime?: anyOffset;
	version?: number;
}

/*********************************************
* deviceCompliancePolicyCollections
**********************************************/
export interface deviceCompliancePolicyCollections {

}

/*********************************************
* deviceCompliancePolicyDeviceStateSummary
**********************************************/
export interface deviceCompliancePolicyDeviceStateSummary {
	compliantDeviceCount?: number;
	configManagerCount?: number;
	conflictDeviceCount?: number;
	errorDeviceCount?: number;
	inGracePeriodCount?: number;
	nonCompliantDeviceCount?: number;
	notApplicableDeviceCount?: number;
	remediatedDeviceCount?: number;
	unknownDeviceCount?: number;
}

/*********************************************
* deviceCompliancePolicyDeviceStateSummaryCollections
**********************************************/
export interface deviceCompliancePolicyDeviceStateSummaryCollections {

}

/*********************************************
* deviceCompliancePolicySettingStateSummary
**********************************************/
export interface deviceCompliancePolicySettingStateSummary {
	compliantDeviceCount?: number;
	conflictDeviceCount?: number;
	errorDeviceCount?: number;
	nonCompliantDeviceCount?: number;
	notApplicableDeviceCount?: number;
	platformType?: graph.policyPlatformType;
	remediatedDeviceCount?: number;
	setting?: string;
	settingName?: string;
	unknownDeviceCount?: number;
}

/*********************************************
* deviceCompliancePolicySettingStateSummaryCollections
**********************************************/
export interface deviceCompliancePolicySettingStateSummaryCollections {

}

/*********************************************
* deviceConfigurationDeviceStateSummary
**********************************************/
export interface deviceConfigurationDeviceStateSummary {
	compliantDeviceCount?: number;
	conflictDeviceCount?: number;
	errorDeviceCount?: number;
	nonCompliantDeviceCount?: number;
	notApplicableDeviceCount?: number;
	remediatedDeviceCount?: number;
	unknownDeviceCount?: number;
}

/*********************************************
* deviceConfigurationDeviceStateSummaryCollections
**********************************************/
export interface deviceConfigurationDeviceStateSummaryCollections {

}

/*********************************************
* deviceConfiguration
**********************************************/
export interface deviceConfiguration {
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	lastModifiedDateTime?: anyOffset;
	version?: number;
}

/*********************************************
* deviceConfigurationCollections
**********************************************/
export interface deviceConfigurationCollections {

}

/*********************************************
* iosUpdateDeviceStatus
**********************************************/
export interface iosUpdateDeviceStatus {
	complianceGracePeriodExpirationDateTime?: anyOffset;
	deviceDisplayName?: string;
	deviceId?: string;
	deviceModel?: string;
	installStatus?: graph.iosUpdatesInstallStatus;
	lastReportedDateTime?: anyOffset;
	osVersion?: string;
	status?: graph.complianceStatus;
	userId?: string;
	userName?: string;
	userPrincipalName?: string;
}

/*********************************************
* iosUpdateDeviceStatusCollections
**********************************************/
export interface iosUpdateDeviceStatusCollections {

}

/*********************************************
* softwareUpdateStatusSummary
**********************************************/
export interface softwareUpdateStatusSummary {
	compliantDeviceCount?: number;
	compliantUserCount?: number;
	conflictDeviceCount?: number;
	conflictUserCount?: number;
	displayName?: string;
	errorDeviceCount?: number;
	errorUserCount?: number;
	nonCompliantDeviceCount?: number;
	nonCompliantUserCount?: number;
	notApplicableDeviceCount?: number;
	notApplicableUserCount?: number;
	remediatedDeviceCount?: number;
	remediatedUserCount?: number;
	unknownDeviceCount?: number;
	unknownUserCount?: number;
}

/*********************************************
* softwareUpdateStatusSummaryCollections
**********************************************/
export interface softwareUpdateStatusSummaryCollections {

}

/*********************************************
* complianceManagementPartner
**********************************************/
export interface complianceManagementPartner {
	androidEnrollmentAssignments?: { results: Array<graph.complianceManagementPartnerAssignment> };
	androidOnboarded?: boolean;
	displayName?: string;
	iosEnrollmentAssignments?: { results: Array<graph.complianceManagementPartnerAssignment> };
	iosOnboarded?: boolean;
	lastHeartbeatDateTime?: anyOffset;
	macOsEnrollmentAssignments?: { results: Array<graph.complianceManagementPartnerAssignment> };
	macOsOnboarded?: boolean;
	partnerState?: graph.deviceManagementPartnerTenantState;
}

/*********************************************
* complianceManagementPartnerCollections
**********************************************/
export interface complianceManagementPartnerCollections {

}

/*********************************************
* onPremisesConditionalAccessSettings
**********************************************/
export interface onPremisesConditionalAccessSettings {
	enabled?: boolean;
	excludedGroups?: { results: Array<any> };
	includedGroups?: { results: Array<any> };
	overrideDefaultRule?: boolean;
}

/*********************************************
* onPremisesConditionalAccessSettingsCollections
**********************************************/
export interface onPremisesConditionalAccessSettingsCollections {

}

/*********************************************
* deviceCategory
**********************************************/
export interface deviceCategory {
	description?: string;
	displayName?: string;
}

/*********************************************
* deviceCategoryCollections
**********************************************/
export interface deviceCategoryCollections {

}

/*********************************************
* deviceEnrollmentConfiguration
**********************************************/
export interface deviceEnrollmentConfiguration {
	createdDateTime?: anyOffset;
	description?: string;
	displayName?: string;
	lastModifiedDateTime?: anyOffset;
	priority?: number;
	version?: number;
}

/*********************************************
* deviceEnrollmentConfigurationCollections
**********************************************/
export interface deviceEnrollmentConfigurationCollections {

}

/*********************************************
* deviceManagementPartner
**********************************************/
export interface deviceManagementPartner {
	displayName?: string;
	isConfigured?: boolean;
	lastHeartbeatDateTime?: anyOffset;
	partnerAppType?: graph.deviceManagementPartnerAppType;
	partnerState?: graph.deviceManagementPartnerTenantState;
	singleTenantAppId?: string;
	whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime?: anyOffset;
	whenPartnerDevicesWillBeRemovedDateTime?: anyOffset;
}

/*********************************************
* deviceManagementPartnerCollections
**********************************************/
export interface deviceManagementPartnerCollections {

}

/*********************************************
* deviceManagementExchangeConnector
**********************************************/
export interface deviceManagementExchangeConnector {
	connectorServerName?: string;
	exchangeAlias?: string;
	exchangeConnectorType?: graph.deviceManagementExchangeConnectorType;
	exchangeOrganization?: string;
	lastSyncDateTime?: anyOffset;
	primarySmtpAddress?: string;
	serverName?: string;
	status?: graph.deviceManagementExchangeConnectorStatus;
	version?: string;
}

/*********************************************
* deviceManagementExchangeConnectorCollections
**********************************************/
export interface deviceManagementExchangeConnectorCollections {

}

/*********************************************
* mobileThreatDefenseConnector
**********************************************/
export interface mobileThreatDefenseConnector {
	androidDeviceBlockedOnMissingPartnerData?: boolean;
	androidEnabled?: boolean;
	iosDeviceBlockedOnMissingPartnerData?: boolean;
	iosEnabled?: boolean;
	lastHeartbeatDateTime?: anyOffset;
	partnerState?: graph.mobileThreatPartnerTenantState;
	partnerUnresponsivenessThresholdInDays?: number;
	partnerUnsupportedOsVersionBlocked?: boolean;
}

/*********************************************
* mobileThreatDefenseConnectorCollections
**********************************************/
export interface mobileThreatDefenseConnectorCollections {

}

/*********************************************
* applePushNotificationCertificate
**********************************************/
export interface applePushNotificationCertificate {
	appleIdentifier?: string;
	certificate?: string;
	certificateSerialNumber?: string;
	expirationDateTime?: anyOffset;
	lastModifiedDateTime?: anyOffset;
	topicIdentifier?: string;
}

/*********************************************
* applePushNotificationCertificateCollections
**********************************************/
export interface applePushNotificationCertificateCollections {

}

/*********************************************
* detectedApp
**********************************************/
export interface detectedApp {
	deviceCount?: number;
	displayName?: string;
	sizeInByte?: number;
	version?: string;
}

/*********************************************
* detectedAppCollections
**********************************************/
export interface detectedAppCollections {

}

/*********************************************
* managedDeviceOverview
**********************************************/
export interface managedDeviceOverview {
	deviceExchangeAccessStateSummary?: graph.deviceExchangeAccessStateSummary;
	deviceOperatingSystemSummary?: graph.deviceOperatingSystemSummary;
	dualEnrolledDeviceCount?: number;
	enrolledDeviceCount?: number;
	mdmEnrolledCount?: number;
}

/*********************************************
* managedDeviceOverviewCollections
**********************************************/
export interface managedDeviceOverviewCollections {

}

/*********************************************
* importedWindowsAutopilotDeviceIdentity
**********************************************/
export interface importedWindowsAutopilotDeviceIdentity {
	assignedUserPrincipalName?: string;
	groupTag?: string;
	hardwareIdentifier?: any;
	importId?: string;
	productKey?: string;
	serialNumber?: string;
	state?: graph.importedWindowsAutopilotDeviceIdentityState;
}

/*********************************************
* importedWindowsAutopilotDeviceIdentityCollections
**********************************************/
export interface importedWindowsAutopilotDeviceIdentityCollections {

}

/*********************************************
* windowsAutopilotDeviceIdentity
**********************************************/
export interface windowsAutopilotDeviceIdentity {
	addressableUserName?: string;
	azureActiveDirectoryDeviceId?: string;
	displayName?: string;
	enrollmentState?: graph.enrollmentState;
	groupTag?: string;
	lastContactedDateTime?: anyOffset;
	managedDeviceId?: string;
	manufacturer?: string;
	model?: string;
	productKey?: string;
	purchaseOrderIdentifier?: string;
	resourceName?: string;
	serialNumber?: string;
	skuNumber?: string;
	systemFamily?: string;
	userPrincipalName?: string;
}

/*********************************************
* windowsAutopilotDeviceIdentityCollections
**********************************************/
export interface windowsAutopilotDeviceIdentityCollections {

}

/*********************************************
* notificationMessageTemplate
**********************************************/
export interface notificationMessageTemplate {
	brandingOptions?: graph.notificationTemplateBrandingOptions;
	defaultLocale?: string;
	displayName?: string;
	lastModifiedDateTime?: anyOffset;
}

/*********************************************
* notificationMessageTemplateCollections
**********************************************/
export interface notificationMessageTemplateCollections {

}

/*********************************************
* resourceOperation
**********************************************/
export interface resourceOperation {
	actionName?: string;
	description?: string;
	resourceName?: string;
}

/*********************************************
* resourceOperationCollections
**********************************************/
export interface resourceOperationCollections {

}

/*********************************************
* roleAssignment
**********************************************/
export interface roleAssignment {
	description?: string;
	displayName?: string;
	resourceScopes?: { results: Array<string> };
}

/*********************************************
* roleAssignmentCollections
**********************************************/
export interface roleAssignmentCollections {

}

/*********************************************
* deviceAndAppManagementRoleAssignment
**********************************************/
export interface deviceAndAppManagementRoleAssignment {
	members?: { results: Array<string> };
}

/*********************************************
* deviceAndAppManagementRoleAssignmentCollections
**********************************************/
export interface deviceAndAppManagementRoleAssignmentCollections {

}

/*********************************************
* roleDefinition
**********************************************/
export interface roleDefinition {
	description?: string;
	displayName?: string;
	isBuiltIn?: boolean;
	rolePermissions?: { results: Array<graph.rolePermission> };
}

/*********************************************
* roleDefinitionCollections
**********************************************/
export interface roleDefinitionCollections {

}

/*********************************************
* remoteAssistancePartner
**********************************************/
export interface remoteAssistancePartner {
	displayName?: string;
	lastConnectionDateTime?: anyOffset;
	onboardingStatus?: graph.remoteAssistanceOnboardingStatus;
	onboardingUrl?: string;
}

/*********************************************
* remoteAssistancePartnerCollections
**********************************************/
export interface remoteAssistancePartnerCollections {

}

/*********************************************
* deviceManagementReports
**********************************************/
export interface deviceManagementReports {

}

/*********************************************
* deviceManagementReportsCollections
**********************************************/
export interface deviceManagementReportsCollections {

}

/*********************************************
* telecomExpenseManagementPartner
**********************************************/
export interface telecomExpenseManagementPartner {
	appAuthorized?: boolean;
	displayName?: string;
	enabled?: boolean;
	lastConnectionDateTime?: anyOffset;
	url?: string;
}

/*********************************************
* telecomExpenseManagementPartnerCollections
**********************************************/
export interface telecomExpenseManagementPartnerCollections {

}

/*********************************************
* windowsInformationProtectionAppLearningSummary
**********************************************/
export interface windowsInformationProtectionAppLearningSummary {
	applicationName?: string;
	applicationType?: graph.applicationType;
	deviceCount?: number;
}

/*********************************************
* windowsInformationProtectionAppLearningSummaryCollections
**********************************************/
export interface windowsInformationProtectionAppLearningSummaryCollections {

}

/*********************************************
* windowsInformationProtectionNetworkLearningSummary
**********************************************/
export interface windowsInformationProtectionNetworkLearningSummary {
	deviceCount?: number;
	url?: string;
}

/*********************************************
* windowsInformationProtectionNetworkLearningSummaryCollections
**********************************************/
export interface windowsInformationProtectionNetworkLearningSummaryCollections {

}

/*********************************************
* termsAndConditionsAcceptanceStatus
**********************************************/
export interface termsAndConditionsAcceptanceStatus {
	acceptedDateTime?: anyOffset;
	acceptedVersion?: number;
	userDisplayName?: string;
	userPrincipalName?: string;
}

/*********************************************
* termsAndConditionsAcceptanceStatusCollections
**********************************************/
export interface termsAndConditionsAcceptanceStatusCollections {

}

/*********************************************
* termsAndConditionsAssignment
**********************************************/
export interface termsAndConditionsAssignment {
	target?: graph.deviceAndAppManagementAssignmentTarget;
}

/*********************************************
* termsAndConditionsAssignmentCollections
**********************************************/
export interface termsAndConditionsAssignmentCollections {

}

/*********************************************
* androidCompliancePolicy
**********************************************/
export interface androidCompliancePolicy {
	deviceThreatProtectionEnabled?: boolean;
	deviceThreatProtectionRequiredSecurityLevel?: graph.deviceThreatProtectionLevel;
	minAndroidSecurityPatchLevel?: string;
	osMaximumVersion?: string;
	osMinimumVersion?: string;
	passwordExpirationDays?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeLock?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequired?: boolean;
	passwordRequiredType?: graph.androidRequiredPasswordType;
	securityBlockJailbrokenDevices?: boolean;
	securityDisableUsbDebugging?: boolean;
	securityPreventInstallAppsFromUnknownSources?: boolean;
	securityRequireCompanyPortalAppIntegrity?: boolean;
	securityRequireGooglePlayServices?: boolean;
	securityRequireSafetyNetAttestationBasicIntegrity?: boolean;
	securityRequireSafetyNetAttestationCertifiedDevice?: boolean;
	securityRequireUpToDateSecurityProviders?: boolean;
	securityRequireVerifyApps?: boolean;
	storageRequireEncryption?: boolean;
}

/*********************************************
* androidCompliancePolicyCollections
**********************************************/
export interface androidCompliancePolicyCollections {

}

/*********************************************
* androidCustomConfiguration
**********************************************/
export interface androidCustomConfiguration {
	omaSettings?: { results: Array<graph.omaSetting> };
}

/*********************************************
* androidCustomConfigurationCollections
**********************************************/
export interface androidCustomConfigurationCollections {

}

/*********************************************
* androidGeneralDeviceConfiguration
**********************************************/
export interface androidGeneralDeviceConfiguration {
	appsBlockClipboardSharing?: boolean;
	appsBlockCopyPaste?: boolean;
	appsBlockYouTube?: boolean;
	appsHideList?: { results: Array<graph.appListItem> };
	appsInstallAllowList?: { results: Array<graph.appListItem> };
	appsLaunchBlockList?: { results: Array<graph.appListItem> };
	bluetoothBlocked?: boolean;
	cameraBlocked?: boolean;
	cellularBlockDataRoaming?: boolean;
	cellularBlockMessaging?: boolean;
	cellularBlockVoiceRoaming?: boolean;
	cellularBlockWiFiTethering?: boolean;
	compliantAppListType?: graph.appListType;
	compliantAppsList?: { results: Array<graph.appListItem> };
	deviceSharingAllowed?: boolean;
	diagnosticDataBlockSubmission?: boolean;
	factoryResetBlocked?: boolean;
	googleAccountBlockAutoSync?: boolean;
	googlePlayStoreBlocked?: boolean;
	kioskModeApps?: { results: Array<graph.appListItem> };
	kioskModeBlockSleepButton?: boolean;
	kioskModeBlockVolumeButtons?: boolean;
	locationServicesBlocked?: boolean;
	nfcBlocked?: boolean;
	passwordBlockFingerprintUnlock?: boolean;
	passwordBlockTrustAgents?: boolean;
	passwordExpirationDays?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeScreenTimeout?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequired?: boolean;
	passwordRequiredType?: graph.androidRequiredPasswordType;
	passwordSignInFailureCountBeforeFactoryReset?: number;
	powerOffBlocked?: boolean;
	screenCaptureBlocked?: boolean;
	securityRequireVerifyApps?: boolean;
	storageBlockGoogleBackup?: boolean;
	storageBlockRemovableStorage?: boolean;
	storageRequireDeviceEncryption?: boolean;
	storageRequireRemovableStorageEncryption?: boolean;
	voiceAssistantBlocked?: boolean;
	voiceDialingBlocked?: boolean;
	webBrowserBlockAutofill?: boolean;
	webBrowserBlocked?: boolean;
	webBrowserBlockJavaScript?: boolean;
	webBrowserBlockPopups?: boolean;
	webBrowserCookieSettings?: graph.webBrowserCookieSettings;
	wiFiBlocked?: boolean;
}

/*********************************************
* androidGeneralDeviceConfigurationCollections
**********************************************/
export interface androidGeneralDeviceConfigurationCollections {

}

/*********************************************
* androidWorkProfileCompliancePolicy
**********************************************/
export interface androidWorkProfileCompliancePolicy {
	deviceThreatProtectionEnabled?: boolean;
	deviceThreatProtectionRequiredSecurityLevel?: graph.deviceThreatProtectionLevel;
	minAndroidSecurityPatchLevel?: string;
	osMaximumVersion?: string;
	osMinimumVersion?: string;
	passwordExpirationDays?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeLock?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequired?: boolean;
	passwordRequiredType?: graph.androidRequiredPasswordType;
	securityBlockJailbrokenDevices?: boolean;
	securityDisableUsbDebugging?: boolean;
	securityPreventInstallAppsFromUnknownSources?: boolean;
	securityRequireCompanyPortalAppIntegrity?: boolean;
	securityRequireGooglePlayServices?: boolean;
	securityRequireSafetyNetAttestationBasicIntegrity?: boolean;
	securityRequireSafetyNetAttestationCertifiedDevice?: boolean;
	securityRequireUpToDateSecurityProviders?: boolean;
	securityRequireVerifyApps?: boolean;
	storageRequireEncryption?: boolean;
}

/*********************************************
* androidWorkProfileCompliancePolicyCollections
**********************************************/
export interface androidWorkProfileCompliancePolicyCollections {

}

/*********************************************
* androidWorkProfileCustomConfiguration
**********************************************/
export interface androidWorkProfileCustomConfiguration {
	omaSettings?: { results: Array<graph.omaSetting> };
}

/*********************************************
* androidWorkProfileCustomConfigurationCollections
**********************************************/
export interface androidWorkProfileCustomConfigurationCollections {

}

/*********************************************
* androidWorkProfileGeneralDeviceConfiguration
**********************************************/
export interface androidWorkProfileGeneralDeviceConfiguration {
	passwordBlockFingerprintUnlock?: boolean;
	passwordBlockTrustAgents?: boolean;
	passwordExpirationDays?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeScreenTimeout?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequiredType?: graph.androidWorkProfileRequiredPasswordType;
	passwordSignInFailureCountBeforeFactoryReset?: number;
	securityRequireVerifyApps?: boolean;
	workProfileBlockAddingAccounts?: boolean;
	workProfileBlockCamera?: boolean;
	workProfileBlockCrossProfileCallerId?: boolean;
	workProfileBlockCrossProfileContactsSearch?: boolean;
	workProfileBlockCrossProfileCopyPaste?: boolean;
	workProfileBlockNotificationsWhileDeviceLocked?: boolean;
	workProfileBlockScreenCapture?: boolean;
	workProfileBluetoothEnableContactSharing?: boolean;
	workProfileDataSharingType?: graph.androidWorkProfileCrossProfileDataSharingType;
	workProfileDefaultAppPermissionPolicy?: graph.androidWorkProfileDefaultAppPermissionPolicyType;
	workProfilePasswordBlockFingerprintUnlock?: boolean;
	workProfilePasswordBlockTrustAgents?: boolean;
	workProfilePasswordExpirationDays?: number;
	workProfilePasswordMinimumLength?: number;
	workProfilePasswordMinLetterCharacters?: number;
	workProfilePasswordMinLowerCaseCharacters?: number;
	workProfilePasswordMinNonLetterCharacters?: number;
	workProfilePasswordMinNumericCharacters?: number;
	workProfilePasswordMinSymbolCharacters?: number;
	workProfilePasswordMinUpperCaseCharacters?: number;
	workProfilePasswordMinutesOfInactivityBeforeScreenTimeout?: number;
	workProfilePasswordPreviousPasswordBlockCount?: number;
	workProfilePasswordRequiredType?: graph.androidWorkProfileRequiredPasswordType;
	workProfilePasswordSignInFailureCountBeforeFactoryReset?: number;
	workProfileRequirePassword?: boolean;
}

/*********************************************
* androidWorkProfileGeneralDeviceConfigurationCollections
**********************************************/
export interface androidWorkProfileGeneralDeviceConfigurationCollections {

}

/*********************************************
* appleDeviceFeaturesConfigurationBase
**********************************************/
export interface appleDeviceFeaturesConfigurationBase {

}

/*********************************************
* appleDeviceFeaturesConfigurationBaseCollections
**********************************************/
export interface appleDeviceFeaturesConfigurationBaseCollections {

}

/*********************************************
* deviceComplianceActionItem
**********************************************/
export interface deviceComplianceActionItem {
	actionType?: graph.deviceComplianceActionType;
	gracePeriodHours?: number;
	notificationMessageCCList?: { results: Array<string> };
	notificationTemplateId?: string;
}

/*********************************************
* deviceComplianceActionItemCollections
**********************************************/
export interface deviceComplianceActionItemCollections {

}

/*********************************************
* deviceComplianceDeviceOverview
**********************************************/
export interface deviceComplianceDeviceOverview {
	configurationVersion?: number;
	errorCount?: number;
	failedCount?: number;
	lastUpdateDateTime?: anyOffset;
	notApplicableCount?: number;
	pendingCount?: number;
	successCount?: number;
}

/*********************************************
* deviceComplianceDeviceOverviewCollections
**********************************************/
export interface deviceComplianceDeviceOverviewCollections {

}

/*********************************************
* deviceComplianceDeviceStatus
**********************************************/
export interface deviceComplianceDeviceStatus {
	complianceGracePeriodExpirationDateTime?: anyOffset;
	deviceDisplayName?: string;
	deviceModel?: string;
	lastReportedDateTime?: anyOffset;
	status?: graph.complianceStatus;
	userName?: string;
	userPrincipalName?: string;
}

/*********************************************
* deviceComplianceDeviceStatusCollections
**********************************************/
export interface deviceComplianceDeviceStatusCollections {

}

/*********************************************
* deviceCompliancePolicyAssignment
**********************************************/
export interface deviceCompliancePolicyAssignment {
	target?: graph.deviceAndAppManagementAssignmentTarget;
}

/*********************************************
* deviceCompliancePolicyAssignmentCollections
**********************************************/
export interface deviceCompliancePolicyAssignmentCollections {

}

/*********************************************
* settingStateDeviceSummary
**********************************************/
export interface settingStateDeviceSummary {
	compliantDeviceCount?: number;
	conflictDeviceCount?: number;
	errorDeviceCount?: number;
	instancePath?: string;
	nonCompliantDeviceCount?: number;
	notApplicableDeviceCount?: number;
	remediatedDeviceCount?: number;
	settingName?: string;
	unknownDeviceCount?: number;
}

/*********************************************
* settingStateDeviceSummaryCollections
**********************************************/
export interface settingStateDeviceSummaryCollections {

}

/*********************************************
* deviceComplianceScheduledActionForRule
**********************************************/
export interface deviceComplianceScheduledActionForRule {
	ruleName?: string;
}

/*********************************************
* deviceComplianceScheduledActionForRuleCollections
**********************************************/
export interface deviceComplianceScheduledActionForRuleCollections {

}

/*********************************************
* deviceComplianceUserStatus
**********************************************/
export interface deviceComplianceUserStatus {
	devicesCount?: number;
	lastReportedDateTime?: anyOffset;
	status?: graph.complianceStatus;
	userDisplayName?: string;
	userPrincipalName?: string;
}

/*********************************************
* deviceComplianceUserStatusCollections
**********************************************/
export interface deviceComplianceUserStatusCollections {

}

/*********************************************
* deviceComplianceUserOverview
**********************************************/
export interface deviceComplianceUserOverview {
	configurationVersion?: number;
	errorCount?: number;
	failedCount?: number;
	lastUpdateDateTime?: anyOffset;
	notApplicableCount?: number;
	pendingCount?: number;
	successCount?: number;
}

/*********************************************
* deviceComplianceUserOverviewCollections
**********************************************/
export interface deviceComplianceUserOverviewCollections {

}

/*********************************************
* deviceComplianceSettingState
**********************************************/
export interface deviceComplianceSettingState {
	complianceGracePeriodExpirationDateTime?: anyOffset;
	deviceId?: string;
	deviceModel?: string;
	deviceName?: string;
	setting?: string;
	settingName?: string;
	state?: graph.complianceStatus;
	userEmail?: string;
	userId?: string;
	userName?: string;
	userPrincipalName?: string;
}

/*********************************************
* deviceComplianceSettingStateCollections
**********************************************/
export interface deviceComplianceSettingStateCollections {

}

/*********************************************
* deviceCompliancePolicyState
**********************************************/
export interface deviceCompliancePolicyState {
	displayName?: string;
	platformType?: graph.policyPlatformType;
	settingCount?: number;
	settingStates?: { results: Array<graph.deviceCompliancePolicySettingState> };
	state?: graph.complianceStatus;
	version?: number;
}

/*********************************************
* deviceCompliancePolicyStateCollections
**********************************************/
export interface deviceCompliancePolicyStateCollections {

}

/*********************************************
* deviceConfigurationAssignment
**********************************************/
export interface deviceConfigurationAssignment {
	target?: graph.deviceAndAppManagementAssignmentTarget;
}

/*********************************************
* deviceConfigurationAssignmentCollections
**********************************************/
export interface deviceConfigurationAssignmentCollections {

}

/*********************************************
* deviceConfigurationDeviceStatus
**********************************************/
export interface deviceConfigurationDeviceStatus {
	complianceGracePeriodExpirationDateTime?: anyOffset;
	deviceDisplayName?: string;
	deviceModel?: string;
	lastReportedDateTime?: anyOffset;
	status?: graph.complianceStatus;
	userName?: string;
	userPrincipalName?: string;
}

/*********************************************
* deviceConfigurationDeviceStatusCollections
**********************************************/
export interface deviceConfigurationDeviceStatusCollections {

}

/*********************************************
* deviceConfigurationDeviceOverview
**********************************************/
export interface deviceConfigurationDeviceOverview {
	configurationVersion?: number;
	errorCount?: number;
	failedCount?: number;
	lastUpdateDateTime?: anyOffset;
	notApplicableCount?: number;
	pendingCount?: number;
	successCount?: number;
}

/*********************************************
* deviceConfigurationDeviceOverviewCollections
**********************************************/
export interface deviceConfigurationDeviceOverviewCollections {

}

/*********************************************
* deviceConfigurationUserStatus
**********************************************/
export interface deviceConfigurationUserStatus {
	devicesCount?: number;
	lastReportedDateTime?: anyOffset;
	status?: graph.complianceStatus;
	userDisplayName?: string;
	userPrincipalName?: string;
}

/*********************************************
* deviceConfigurationUserStatusCollections
**********************************************/
export interface deviceConfigurationUserStatusCollections {

}

/*********************************************
* deviceConfigurationUserOverview
**********************************************/
export interface deviceConfigurationUserOverview {
	configurationVersion?: number;
	errorCount?: number;
	failedCount?: number;
	lastUpdateDateTime?: anyOffset;
	notApplicableCount?: number;
	pendingCount?: number;
	successCount?: number;
}

/*********************************************
* deviceConfigurationUserOverviewCollections
**********************************************/
export interface deviceConfigurationUserOverviewCollections {

}

/*********************************************
* deviceConfigurationState
**********************************************/
export interface deviceConfigurationState {
	displayName?: string;
	platformType?: graph.policyPlatformType;
	settingCount?: number;
	settingStates?: { results: Array<graph.deviceConfigurationSettingState> };
	state?: graph.complianceStatus;
	version?: number;
}

/*********************************************
* deviceConfigurationStateCollections
**********************************************/
export interface deviceConfigurationStateCollections {

}

/*********************************************
* editionUpgradeConfiguration
**********************************************/
export interface editionUpgradeConfiguration {
	license?: string;
	licenseType?: graph.editionUpgradeLicenseType;
	productKey?: string;
	targetEdition?: graph.windows10EditionType;
}

/*********************************************
* editionUpgradeConfigurationCollections
**********************************************/
export interface editionUpgradeConfigurationCollections {

}

/*********************************************
* iosCertificateProfile
**********************************************/
export interface iosCertificateProfile {

}

/*********************************************
* iosCertificateProfileCollections
**********************************************/
export interface iosCertificateProfileCollections {

}

/*********************************************
* iosCompliancePolicy
**********************************************/
export interface iosCompliancePolicy {
	deviceThreatProtectionEnabled?: boolean;
	deviceThreatProtectionRequiredSecurityLevel?: graph.deviceThreatProtectionLevel;
	managedEmailProfileRequired?: boolean;
	osMaximumVersion?: string;
	osMinimumVersion?: string;
	passcodeBlockSimple?: boolean;
	passcodeExpirationDays?: number;
	passcodeMinimumCharacterSetCount?: number;
	passcodeMinimumLength?: number;
	passcodeMinutesOfInactivityBeforeLock?: number;
	passcodePreviousPasscodeBlockCount?: number;
	passcodeRequired?: boolean;
	passcodeRequiredType?: graph.requiredPasswordType;
	securityBlockJailbrokenDevices?: boolean;
}

/*********************************************
* iosCompliancePolicyCollections
**********************************************/
export interface iosCompliancePolicyCollections {

}

/*********************************************
* iosCustomConfiguration
**********************************************/
export interface iosCustomConfiguration {
	payload?: any;
	payloadFileName?: string;
	payloadName?: string;
}

/*********************************************
* iosCustomConfigurationCollections
**********************************************/
export interface iosCustomConfigurationCollections {

}

/*********************************************
* iosDeviceFeaturesConfiguration
**********************************************/
export interface iosDeviceFeaturesConfiguration {
	assetTagTemplate?: string;
	homeScreenDockIcons?: { results: Array<graph.iosHomeScreenItem> };
	homeScreenPages?: { results: Array<graph.iosHomeScreenPage> };
	lockScreenFootnote?: string;
	notificationSettings?: { results: Array<graph.iosNotificationSettings> };
}

/*********************************************
* iosDeviceFeaturesConfigurationCollections
**********************************************/
export interface iosDeviceFeaturesConfigurationCollections {

}

/*********************************************
* iosGeneralDeviceConfiguration
**********************************************/
export interface iosGeneralDeviceConfiguration {
	accountBlockModification?: boolean;
	activationLockAllowWhenSupervised?: boolean;
	airDropBlocked?: boolean;
	airDropForceUnmanagedDropTarget?: boolean;
	airPlayForcePairingPasswordForOutgoingRequests?: boolean;
	appleNewsBlocked?: boolean;
	appleWatchBlockPairing?: boolean;
	appleWatchForceWristDetection?: boolean;
	appsSingleAppModeList?: { results: Array<graph.appListItem> };
	appStoreBlockAutomaticDownloads?: boolean;
	appStoreBlocked?: boolean;
	appStoreBlockInAppPurchases?: boolean;
	appStoreBlockUIAppInstallation?: boolean;
	appStoreRequirePassword?: boolean;
	appsVisibilityList?: { results: Array<graph.appListItem> };
	appsVisibilityListType?: graph.appListType;
	bluetoothBlockModification?: boolean;
	cameraBlocked?: boolean;
	cellularBlockDataRoaming?: boolean;
	cellularBlockGlobalBackgroundFetchWhileRoaming?: boolean;
	cellularBlockPerAppDataModification?: boolean;
	cellularBlockPersonalHotspot?: boolean;
	cellularBlockVoiceRoaming?: boolean;
	certificatesBlockUntrustedTlsCertificates?: boolean;
	classroomAppBlockRemoteScreenObservation?: boolean;
	classroomAppForceUnpromptedScreenObservation?: boolean;
	compliantAppListType?: graph.appListType;
	compliantAppsList?: { results: Array<graph.appListItem> };
	configurationProfileBlockChanges?: boolean;
	definitionLookupBlocked?: boolean;
	deviceBlockEnableRestrictions?: boolean;
	deviceBlockEraseContentAndSettings?: boolean;
	deviceBlockNameModification?: boolean;
	diagnosticDataBlockSubmission?: boolean;
	diagnosticDataBlockSubmissionModification?: boolean;
	documentsBlockManagedDocumentsInUnmanagedApps?: boolean;
	documentsBlockUnmanagedDocumentsInManagedApps?: boolean;
	emailInDomainSuffixes?: { results: Array<string> };
	enterpriseAppBlockTrust?: boolean;
	enterpriseAppBlockTrustModification?: boolean;
	faceTimeBlocked?: boolean;
	findMyFriendsBlocked?: boolean;
	gameCenterBlocked?: boolean;
	gamingBlockGameCenterFriends?: boolean;
	gamingBlockMultiplayer?: boolean;
	hostPairingBlocked?: boolean;
	iBooksStoreBlocked?: boolean;
	iBooksStoreBlockErotica?: boolean;
	iCloudBlockActivityContinuation?: boolean;
	iCloudBlockBackup?: boolean;
	iCloudBlockDocumentSync?: boolean;
	iCloudBlockManagedAppsSync?: boolean;
	iCloudBlockPhotoLibrary?: boolean;
	iCloudBlockPhotoStreamSync?: boolean;
	iCloudBlockSharedPhotoStream?: boolean;
	iCloudRequireEncryptedBackup?: boolean;
	iTunesBlockExplicitContent?: boolean;
	iTunesBlockMusicService?: boolean;
	iTunesBlockRadio?: boolean;
	keyboardBlockAutoCorrect?: boolean;
	keyboardBlockDictation?: boolean;
	keyboardBlockPredictive?: boolean;
	keyboardBlockShortcuts?: boolean;
	keyboardBlockSpellCheck?: boolean;
	kioskModeAllowAssistiveSpeak?: boolean;
	kioskModeAllowAssistiveTouchSettings?: boolean;
	kioskModeAllowAutoLock?: boolean;
	kioskModeAllowColorInversionSettings?: boolean;
	kioskModeAllowRingerSwitch?: boolean;
	kioskModeAllowScreenRotation?: boolean;
	kioskModeAllowSleepButton?: boolean;
	kioskModeAllowTouchscreen?: boolean;
	kioskModeAllowVoiceOverSettings?: boolean;
	kioskModeAllowVolumeButtons?: boolean;
	kioskModeAllowZoomSettings?: boolean;
	kioskModeAppStoreUrl?: string;
	kioskModeBuiltInAppId?: string;
	kioskModeManagedAppId?: string;
	kioskModeRequireAssistiveTouch?: boolean;
	kioskModeRequireColorInversion?: boolean;
	kioskModeRequireMonoAudio?: boolean;
	kioskModeRequireVoiceOver?: boolean;
	kioskModeRequireZoom?: boolean;
	lockScreenBlockControlCenter?: boolean;
	lockScreenBlockNotificationView?: boolean;
	lockScreenBlockPassbook?: boolean;
	lockScreenBlockTodayView?: boolean;
	mediaContentRatingApps?: graph.ratingAppsType;
	mediaContentRatingAustralia?: graph.mediaContentRatingAustralia;
	mediaContentRatingCanada?: graph.mediaContentRatingCanada;
	mediaContentRatingFrance?: graph.mediaContentRatingFrance;
	mediaContentRatingGermany?: graph.mediaContentRatingGermany;
	mediaContentRatingIreland?: graph.mediaContentRatingIreland;
	mediaContentRatingJapan?: graph.mediaContentRatingJapan;
	mediaContentRatingNewZealand?: graph.mediaContentRatingNewZealand;
	mediaContentRatingUnitedKingdom?: graph.mediaContentRatingUnitedKingdom;
	mediaContentRatingUnitedStates?: graph.mediaContentRatingUnitedStates;
	messagesBlocked?: boolean;
	networkUsageRules?: { results: Array<graph.iosNetworkUsageRule> };
	notificationsBlockSettingsModification?: boolean;
	passcodeBlockFingerprintModification?: boolean;
	passcodeBlockFingerprintUnlock?: boolean;
	passcodeBlockModification?: boolean;
	passcodeBlockSimple?: boolean;
	passcodeExpirationDays?: number;
	passcodeMinimumCharacterSetCount?: number;
	passcodeMinimumLength?: number;
	passcodeMinutesOfInactivityBeforeLock?: number;
	passcodeMinutesOfInactivityBeforeScreenTimeout?: number;
	passcodePreviousPasscodeBlockCount?: number;
	passcodeRequired?: boolean;
	passcodeRequiredType?: graph.requiredPasswordType;
	passcodeSignInFailureCountBeforeWipe?: number;
	podcastsBlocked?: boolean;
	safariBlockAutofill?: boolean;
	safariBlocked?: boolean;
	safariBlockJavaScript?: boolean;
	safariBlockPopups?: boolean;
	safariCookieSettings?: graph.webBrowserCookieSettings;
	safariManagedDomains?: { results: Array<string> };
	safariPasswordAutoFillDomains?: { results: Array<string> };
	safariRequireFraudWarning?: boolean;
	screenCaptureBlocked?: boolean;
	siriBlocked?: boolean;
	siriBlockedWhenLocked?: boolean;
	siriBlockUserGeneratedContent?: boolean;
	siriRequireProfanityFilter?: boolean;
	spotlightBlockInternetResults?: boolean;
	voiceDialingBlocked?: boolean;
	wallpaperBlockModification?: boolean;
	wiFiConnectOnlyToConfiguredNetworks?: boolean;
}

/*********************************************
* iosGeneralDeviceConfigurationCollections
**********************************************/
export interface iosGeneralDeviceConfigurationCollections {

}

/*********************************************
* iosUpdateConfiguration
**********************************************/
export interface iosUpdateConfiguration {
	activeHoursEnd?: anyOfDay;
	activeHoursStart?: anyOfDay;
	scheduledInstallDays?: { results: Array<graph.dayOfWeek> };
	utcTimeOffsetInMinutes?: number;
}

/*********************************************
* iosUpdateConfigurationCollections
**********************************************/
export interface iosUpdateConfigurationCollections {

}

/*********************************************
* macOSCompliancePolicy
**********************************************/
export interface macOSCompliancePolicy {
	deviceThreatProtectionEnabled?: boolean;
	deviceThreatProtectionRequiredSecurityLevel?: graph.deviceThreatProtectionLevel;
	firewallBlockAllIncoming?: boolean;
	firewallEnabled?: boolean;
	firewallEnableStealthMode?: boolean;
	osMaximumVersion?: string;
	osMinimumVersion?: string;
	passwordBlockSimple?: boolean;
	passwordExpirationDays?: number;
	passwordMinimumCharacterSetCount?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeLock?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequired?: boolean;
	passwordRequiredType?: graph.requiredPasswordType;
	storageRequireEncryption?: boolean;
	systemIntegrityProtectionEnabled?: boolean;
}

/*********************************************
* macOSCompliancePolicyCollections
**********************************************/
export interface macOSCompliancePolicyCollections {

}

/*********************************************
* macOSCustomConfiguration
**********************************************/
export interface macOSCustomConfiguration {
	payload?: any;
	payloadFileName?: string;
	payloadName?: string;
}

/*********************************************
* macOSCustomConfigurationCollections
**********************************************/
export interface macOSCustomConfigurationCollections {

}

/*********************************************
* macOSDeviceFeaturesConfiguration
**********************************************/
export interface macOSDeviceFeaturesConfiguration {

}

/*********************************************
* macOSDeviceFeaturesConfigurationCollections
**********************************************/
export interface macOSDeviceFeaturesConfigurationCollections {

}

/*********************************************
* macOSGeneralDeviceConfiguration
**********************************************/
export interface macOSGeneralDeviceConfiguration {
	compliantAppListType?: graph.appListType;
	compliantAppsList?: { results: Array<graph.appListItem> };
	emailInDomainSuffixes?: { results: Array<string> };
	passwordBlockSimple?: boolean;
	passwordExpirationDays?: number;
	passwordMinimumCharacterSetCount?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeLock?: number;
	passwordMinutesOfInactivityBeforeScreenTimeout?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequired?: boolean;
	passwordRequiredType?: graph.requiredPasswordType;
}

/*********************************************
* macOSGeneralDeviceConfigurationCollections
**********************************************/
export interface macOSGeneralDeviceConfigurationCollections {

}

/*********************************************
* reportRoot
**********************************************/
export interface reportRoot {

}

/*********************************************
* reportRootCollections
**********************************************/
export interface reportRootCollections {

}

/*********************************************
* printUsage
**********************************************/
export interface printUsage {
	completedBlackAndWhiteJobCount?: number;
	completedColorJobCount?: number;
	incompleteJobCount?: number;
	usageDate?: Edm.Date;
}

/*********************************************
* printUsageCollections
**********************************************/
export interface printUsageCollections {

}

/*********************************************
* printUsageByPrinter
**********************************************/
export interface printUsageByPrinter {
	printerId?: string;
}

/*********************************************
* printUsageByPrinterCollections
**********************************************/
export interface printUsageByPrinterCollections {

}

/*********************************************
* printUsageByUser
**********************************************/
export interface printUsageByUser {
	userPrincipalName?: string;
}

/*********************************************
* printUsageByUserCollections
**********************************************/
export interface printUsageByUserCollections {

}

/*********************************************
* sharedPCConfiguration
**********************************************/
export interface sharedPCConfiguration {
	accountManagerPolicy?: graph.sharedPCAccountManagerPolicy;
	allowedAccounts?: graph.sharedPCAllowedAccountType;
	allowLocalStorage?: boolean;
	disableAccountManager?: boolean;
	disableEduPolicies?: boolean;
	disablePowerPolicies?: boolean;
	disableSignInOnResume?: boolean;
	enabled?: boolean;
	idleTimeBeforeSleepInSeconds?: number;
	kioskAppDisplayName?: string;
	kioskAppUserModelId?: string;
	maintenanceStartTime?: anyOfDay;
}

/*********************************************
* sharedPCConfigurationCollections
**********************************************/
export interface sharedPCConfigurationCollections {

}

/*********************************************
* windows10CompliancePolicy
**********************************************/
export interface windows10CompliancePolicy {
	bitLockerEnabled?: boolean;
	codeIntegrityEnabled?: boolean;
	earlyLaunchAntiMalwareDriverEnabled?: boolean;
	mobileOsMaximumVersion?: string;
	mobileOsMinimumVersion?: string;
	osMaximumVersion?: string;
	osMinimumVersion?: string;
	passwordBlockSimple?: boolean;
	passwordExpirationDays?: number;
	passwordMinimumCharacterSetCount?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeLock?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequired?: boolean;
	passwordRequiredToUnlockFromIdle?: boolean;
	passwordRequiredType?: graph.requiredPasswordType;
	requireHealthyDeviceReport?: boolean;
	secureBootEnabled?: boolean;
	storageRequireEncryption?: boolean;
}

/*********************************************
* windows10CompliancePolicyCollections
**********************************************/
export interface windows10CompliancePolicyCollections {

}

/*********************************************
* windows10CustomConfiguration
**********************************************/
export interface windows10CustomConfiguration {
	omaSettings?: { results: Array<graph.omaSetting> };
}

/*********************************************
* windows10CustomConfigurationCollections
**********************************************/
export interface windows10CustomConfigurationCollections {

}

/*********************************************
* windows10EndpointProtectionConfiguration
**********************************************/
export interface windows10EndpointProtectionConfiguration {
	applicationGuardAllowPersistence?: boolean;
	applicationGuardAllowPrintToLocalPrinters?: boolean;
	applicationGuardAllowPrintToNetworkPrinters?: boolean;
	applicationGuardAllowPrintToPDF?: boolean;
	applicationGuardAllowPrintToXPS?: boolean;
	applicationGuardBlockClipboardSharing?: graph.applicationGuardBlockClipboardSharingType;
	applicationGuardBlockFileTransfer?: graph.applicationGuardBlockFileTransferType;
	applicationGuardBlockNonEnterpriseContent?: boolean;
	applicationGuardEnabled?: boolean;
	applicationGuardForceAuditing?: boolean;
	appLockerApplicationControl?: graph.appLockerApplicationControlType;
	bitLockerDisableWarningForOtherDiskEncryption?: boolean;
	bitLockerEnableStorageCardEncryptionOnMobile?: boolean;
	bitLockerEncryptDevice?: boolean;
	bitLockerRemovableDrivePolicy?: graph.bitLockerRemovableDrivePolicy;
	defenderAdditionalGuardedFolders?: { results: Array<string> };
	defenderAttackSurfaceReductionExcludedPaths?: { results: Array<string> };
	defenderExploitProtectionXml?: any;
	defenderExploitProtectionXmlFileName?: string;
	defenderGuardedFoldersAllowedAppPaths?: { results: Array<string> };
	defenderSecurityCenterBlockExploitProtectionOverride?: boolean;
	firewallBlockStatefulFTP?: boolean;
	firewallCertificateRevocationListCheckMethod?: graph.firewallCertificateRevocationListCheckMethodType;
	firewallIdleTimeoutForSecurityAssociationInSeconds?: number;
	firewallIPSecExemptionsAllowDHCP?: boolean;
	firewallIPSecExemptionsAllowICMP?: boolean;
	firewallIPSecExemptionsAllowNeighborDiscovery?: boolean;
	firewallIPSecExemptionsAllowRouterDiscovery?: boolean;
	firewallMergeKeyingModuleSettings?: boolean;
	firewallPacketQueueingMethod?: graph.firewallPacketQueueingMethodType;
	firewallPreSharedKeyEncodingMethod?: graph.firewallPreSharedKeyEncodingMethodType;
	firewallProfileDomain?: graph.windowsFirewallNetworkProfile;
	firewallProfilePrivate?: graph.windowsFirewallNetworkProfile;
	firewallProfilePublic?: graph.windowsFirewallNetworkProfile;
	smartScreenBlockOverrideForFiles?: boolean;
	smartScreenEnableInShell?: boolean;
}

/*********************************************
* windows10EndpointProtectionConfigurationCollections
**********************************************/
export interface windows10EndpointProtectionConfigurationCollections {

}

/*********************************************
* windows10EnterpriseModernAppManagementConfiguration
**********************************************/
export interface windows10EnterpriseModernAppManagementConfiguration {
	uninstallBuiltInApps?: boolean;
}

/*********************************************
* windows10EnterpriseModernAppManagementConfigurationCollections
**********************************************/
export interface windows10EnterpriseModernAppManagementConfigurationCollections {

}

/*********************************************
* windows10GeneralConfiguration
**********************************************/
export interface windows10GeneralConfiguration {
	accountsBlockAddingNonMicrosoftAccountEmail?: boolean;
	antiTheftModeBlocked?: boolean;
	appsAllowTrustedAppsSideloading?: graph.stateManagementSetting;
	appsBlockWindowsStoreOriginatedApps?: boolean;
	bluetoothAllowedServices?: { results: Array<string> };
	bluetoothBlockAdvertising?: boolean;
	bluetoothBlockDiscoverableMode?: boolean;
	bluetoothBlocked?: boolean;
	bluetoothBlockPrePairing?: boolean;
	cameraBlocked?: boolean;
	cellularBlockDataWhenRoaming?: boolean;
	cellularBlockVpn?: boolean;
	cellularBlockVpnWhenRoaming?: boolean;
	certificatesBlockManualRootCertificateInstallation?: boolean;
	connectedDevicesServiceBlocked?: boolean;
	copyPasteBlocked?: boolean;
	cortanaBlocked?: boolean;
	defenderBlockEndUserAccess?: boolean;
	defenderCloudBlockLevel?: graph.defenderCloudBlockLevelType;
	defenderDaysBeforeDeletingQuarantinedMalware?: number;
	defenderDetectedMalwareActions?: graph.defenderDetectedMalwareActions;
	defenderFileExtensionsToExclude?: { results: Array<string> };
	defenderFilesAndFoldersToExclude?: { results: Array<string> };
	defenderMonitorFileActivity?: graph.defenderMonitorFileActivity;
	defenderProcessesToExclude?: { results: Array<string> };
	defenderPromptForSampleSubmission?: graph.defenderPromptForSampleSubmission;
	defenderRequireBehaviorMonitoring?: boolean;
	defenderRequireCloudProtection?: boolean;
	defenderRequireNetworkInspectionSystem?: boolean;
	defenderRequireRealTimeMonitoring?: boolean;
	defenderScanArchiveFiles?: boolean;
	defenderScanDownloads?: boolean;
	defenderScanIncomingMail?: boolean;
	defenderScanMappedNetworkDrivesDuringFullScan?: boolean;
	defenderScanMaxCpu?: number;
	defenderScanNetworkFiles?: boolean;
	defenderScanRemovableDrivesDuringFullScan?: boolean;
	defenderScanScriptsLoadedInInternetExplorer?: boolean;
	defenderScanType?: graph.defenderScanType;
	defenderScheduledQuickScanTime?: anyOfDay;
	defenderScheduledScanTime?: anyOfDay;
	defenderSignatureUpdateIntervalInHours?: number;
	defenderSystemScanSchedule?: graph.weeklySchedule;
	developerUnlockSetting?: graph.stateManagementSetting;
	deviceManagementBlockFactoryResetOnMobile?: boolean;
	deviceManagementBlockManualUnenroll?: boolean;
	diagnosticsDataSubmissionMode?: graph.diagnosticDataSubmissionMode;
	edgeAllowStartPagesModification?: boolean;
	edgeBlockAccessToAboutFlags?: boolean;
	edgeBlockAddressBarDropdown?: boolean;
	edgeBlockAutofill?: boolean;
	edgeBlockCompatibilityList?: boolean;
	edgeBlockDeveloperTools?: boolean;
	edgeBlocked?: boolean;
	edgeBlockExtensions?: boolean;
	edgeBlockInPrivateBrowsing?: boolean;
	edgeBlockJavaScript?: boolean;
	edgeBlockLiveTileDataCollection?: boolean;
	edgeBlockPasswordManager?: boolean;
	edgeBlockPopups?: boolean;
	edgeBlockSearchSuggestions?: boolean;
	edgeBlockSendingDoNotTrackHeader?: boolean;
	edgeBlockSendingIntranetTrafficToInternetExplorer?: boolean;
	edgeClearBrowsingDataOnExit?: boolean;
	edgeCookiePolicy?: graph.edgeCookiePolicy;
	edgeDisableFirstRunPage?: boolean;
	edgeEnterpriseModeSiteListLocation?: string;
	edgeFirstRunUrl?: string;
	edgeHomepageUrls?: { results: Array<string> };
	edgeRequireSmartScreen?: boolean;
	edgeSearchEngine?: graph.edgeSearchEngineBase;
	edgeSendIntranetTrafficToInternetExplorer?: boolean;
	edgeSyncFavoritesWithInternetExplorer?: boolean;
	enterpriseCloudPrintDiscoveryEndPoint?: string;
	enterpriseCloudPrintDiscoveryMaxLimit?: number;
	enterpriseCloudPrintMopriaDiscoveryResourceIdentifier?: string;
	enterpriseCloudPrintOAuthAuthority?: string;
	enterpriseCloudPrintOAuthClientIdentifier?: string;
	enterpriseCloudPrintResourceIdentifier?: string;
	experienceBlockDeviceDiscovery?: boolean;
	experienceBlockErrorDialogWhenNoSIM?: boolean;
	experienceBlockTaskSwitcher?: boolean;
	gameDvrBlocked?: boolean;
	internetSharingBlocked?: boolean;
	locationServicesBlocked?: boolean;
	lockScreenAllowTimeoutConfiguration?: boolean;
	lockScreenBlockActionCenterNotifications?: boolean;
	lockScreenBlockCortana?: boolean;
	lockScreenBlockToastNotifications?: boolean;
	lockScreenTimeoutInSeconds?: number;
	logonBlockFastUserSwitching?: boolean;
	microsoftAccountBlocked?: boolean;
	microsoftAccountBlockSettingsSync?: boolean;
	networkProxyApplySettingsDeviceWide?: boolean;
	networkProxyAutomaticConfigurationUrl?: string;
	networkProxyDisableAutoDetect?: boolean;
	networkProxyServer?: graph.windows10NetworkProxyServer;
	nfcBlocked?: boolean;
	oneDriveDisableFileSync?: boolean;
	passwordBlockSimple?: boolean;
	passwordExpirationDays?: number;
	passwordMinimumCharacterSetCount?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeScreenTimeout?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequired?: boolean;
	passwordRequiredType?: graph.requiredPasswordType;
	passwordRequireWhenResumeFromIdleState?: boolean;
	passwordSignInFailureCountBeforeFactoryReset?: number;
	personalizationDesktopImageUrl?: string;
	personalizationLockScreenImageUrl?: string;
	privacyAdvertisingId?: graph.stateManagementSetting;
	privacyAutoAcceptPairingAndConsentPrompts?: boolean;
	privacyBlockInputPersonalization?: boolean;
	resetProtectionModeBlocked?: boolean;
	safeSearchFilter?: graph.safeSearchFilterType;
	screenCaptureBlocked?: boolean;
	searchBlockDiacritics?: boolean;
	searchDisableAutoLanguageDetection?: boolean;
	searchDisableIndexerBackoff?: boolean;
	searchDisableIndexingEncryptedItems?: boolean;
	searchDisableIndexingRemovableDrive?: boolean;
	searchEnableAutomaticIndexSizeManangement?: boolean;
	searchEnableRemoteQueries?: boolean;
	settingsBlockAccountsPage?: boolean;
	settingsBlockAddProvisioningPackage?: boolean;
	settingsBlockAppsPage?: boolean;
	settingsBlockChangeLanguage?: boolean;
	settingsBlockChangePowerSleep?: boolean;
	settingsBlockChangeRegion?: boolean;
	settingsBlockChangeSystemTime?: boolean;
	settingsBlockDevicesPage?: boolean;
	settingsBlockEaseOfAccessPage?: boolean;
	settingsBlockEditDeviceName?: boolean;
	settingsBlockGamingPage?: boolean;
	settingsBlockNetworkInternetPage?: boolean;
	settingsBlockPersonalizationPage?: boolean;
	settingsBlockPrivacyPage?: boolean;
	settingsBlockRemoveProvisioningPackage?: boolean;
	settingsBlockSettingsApp?: boolean;
	settingsBlockSystemPage?: boolean;
	settingsBlockTimeLanguagePage?: boolean;
	settingsBlockUpdateSecurityPage?: boolean;
	sharedUserAppDataAllowed?: boolean;
	smartScreenBlockPromptOverride?: boolean;
	smartScreenBlockPromptOverrideForFiles?: boolean;
	smartScreenEnableAppInstallControl?: boolean;
	startBlockUnpinningAppsFromTaskbar?: boolean;
	startMenuAppListVisibility?: graph.windowsStartMenuAppListVisibilityType;
	startMenuHideChangeAccountSettings?: boolean;
	startMenuHideFrequentlyUsedApps?: boolean;
	startMenuHideHibernate?: boolean;
	startMenuHideLock?: boolean;
	startMenuHidePowerButton?: boolean;
	startMenuHideRecentJumpLists?: boolean;
	startMenuHideRecentlyAddedApps?: boolean;
	startMenuHideRestartOptions?: boolean;
	startMenuHideShutDown?: boolean;
	startMenuHideSignOut?: boolean;
	startMenuHideSleep?: boolean;
	startMenuHideSwitchAccount?: boolean;
	startMenuHideUserTile?: boolean;
	startMenuLayoutEdgeAssetsXml?: any;
	startMenuLayoutXml?: any;
	startMenuMode?: graph.windowsStartMenuModeType;
	startMenuPinnedFolderDocuments?: graph.visibilitySetting;
	startMenuPinnedFolderDownloads?: graph.visibilitySetting;
	startMenuPinnedFolderFileExplorer?: graph.visibilitySetting;
	startMenuPinnedFolderHomeGroup?: graph.visibilitySetting;
	startMenuPinnedFolderMusic?: graph.visibilitySetting;
	startMenuPinnedFolderNetwork?: graph.visibilitySetting;
	startMenuPinnedFolderPersonalFolder?: graph.visibilitySetting;
	startMenuPinnedFolderPictures?: graph.visibilitySetting;
	startMenuPinnedFolderSettings?: graph.visibilitySetting;
	startMenuPinnedFolderVideos?: graph.visibilitySetting;
	storageBlockRemovableStorage?: boolean;
	storageRequireMobileDeviceEncryption?: boolean;
	storageRestrictAppDataToSystemVolume?: boolean;
	storageRestrictAppInstallToSystemVolume?: boolean;
	tenantLockdownRequireNetworkDuringOutOfBoxExperience?: boolean;
	usbBlocked?: boolean;
	voiceRecordingBlocked?: boolean;
	webRtcBlockLocalhostIpAddress?: boolean;
	wiFiBlockAutomaticConnectHotspots?: boolean;
	wiFiBlocked?: boolean;
	wiFiBlockManualConfiguration?: boolean;
	wiFiScanInterval?: number;
	windowsSpotlightBlockConsumerSpecificFeatures?: boolean;
	windowsSpotlightBlocked?: boolean;
	windowsSpotlightBlockOnActionCenter?: boolean;
	windowsSpotlightBlockTailoredExperiences?: boolean;
	windowsSpotlightBlockThirdPartyNotifications?: boolean;
	windowsSpotlightBlockWelcomeExperience?: boolean;
	windowsSpotlightBlockWindowsTips?: boolean;
	windowsSpotlightConfigureOnLockScreen?: graph.windowsSpotlightEnablementSettings;
	windowsStoreBlockAutoUpdate?: boolean;
	windowsStoreBlocked?: boolean;
	windowsStoreEnablePrivateStoreOnly?: boolean;
	wirelessDisplayBlockProjectionToThisDevice?: boolean;
	wirelessDisplayBlockUserInputFromReceiver?: boolean;
	wirelessDisplayRequirePinForPairing?: boolean;
}

/*********************************************
* windows10GeneralConfigurationCollections
**********************************************/
export interface windows10GeneralConfigurationCollections {

}

/*********************************************
* windows10MobileCompliancePolicy
**********************************************/
export interface windows10MobileCompliancePolicy {
	bitLockerEnabled?: boolean;
	codeIntegrityEnabled?: boolean;
	earlyLaunchAntiMalwareDriverEnabled?: boolean;
	osMaximumVersion?: string;
	osMinimumVersion?: string;
	passwordBlockSimple?: boolean;
	passwordExpirationDays?: number;
	passwordMinimumCharacterSetCount?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeLock?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequired?: boolean;
	passwordRequiredType?: graph.requiredPasswordType;
	passwordRequireToUnlockFromIdle?: boolean;
	secureBootEnabled?: boolean;
	storageRequireEncryption?: boolean;
}

/*********************************************
* windows10MobileCompliancePolicyCollections
**********************************************/
export interface windows10MobileCompliancePolicyCollections {

}

/*********************************************
* windows10SecureAssessmentConfiguration
**********************************************/
export interface windows10SecureAssessmentConfiguration {
	allowPrinting?: boolean;
	allowScreenCapture?: boolean;
	allowTextSuggestion?: boolean;
	configurationAccount?: string;
	launchUri?: string;
}

/*********************************************
* windows10SecureAssessmentConfigurationCollections
**********************************************/
export interface windows10SecureAssessmentConfigurationCollections {

}

/*********************************************
* windows10TeamGeneralConfiguration
**********************************************/
export interface windows10TeamGeneralConfiguration {
	azureOperationalInsightsBlockTelemetry?: boolean;
	azureOperationalInsightsWorkspaceId?: string;
	azureOperationalInsightsWorkspaceKey?: string;
	connectAppBlockAutoLaunch?: boolean;
	maintenanceWindowBlocked?: boolean;
	maintenanceWindowDurationInHours?: number;
	maintenanceWindowStartTime?: anyOfDay;
	miracastBlocked?: boolean;
	miracastChannel?: graph.miracastChannel;
	miracastRequirePin?: boolean;
	settingsBlockMyMeetingsAndFiles?: boolean;
	settingsBlockSessionResume?: boolean;
	settingsBlockSigninSuggestions?: boolean;
	settingsDefaultVolume?: number;
	settingsScreenTimeoutInMinutes?: number;
	settingsSessionTimeoutInMinutes?: number;
	settingsSleepTimeoutInMinutes?: number;
	welcomeScreenBackgroundImageUrl?: string;
	welcomeScreenBlockAutomaticWakeUp?: boolean;
	welcomeScreenMeetingInformation?: graph.welcomeScreenMeetingInformation;
}

/*********************************************
* windows10TeamGeneralConfigurationCollections
**********************************************/
export interface windows10TeamGeneralConfigurationCollections {

}

/*********************************************
* windows81CompliancePolicy
**********************************************/
export interface windows81CompliancePolicy {
	osMaximumVersion?: string;
	osMinimumVersion?: string;
	passwordBlockSimple?: boolean;
	passwordExpirationDays?: number;
	passwordMinimumCharacterSetCount?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeLock?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequired?: boolean;
	passwordRequiredType?: graph.requiredPasswordType;
	storageRequireEncryption?: boolean;
}

/*********************************************
* windows81CompliancePolicyCollections
**********************************************/
export interface windows81CompliancePolicyCollections {

}

/*********************************************
* windows81GeneralConfiguration
**********************************************/
export interface windows81GeneralConfiguration {
	accountsBlockAddingNonMicrosoftAccountEmail?: boolean;
	applyOnlyToWindows81?: boolean;
	browserBlockAutofill?: boolean;
	browserBlockAutomaticDetectionOfIntranetSites?: boolean;
	browserBlockEnterpriseModeAccess?: boolean;
	browserBlockJavaScript?: boolean;
	browserBlockPlugins?: boolean;
	browserBlockPopups?: boolean;
	browserBlockSendingDoNotTrackHeader?: boolean;
	browserBlockSingleWordEntryOnIntranetSites?: boolean;
	browserEnterpriseModeSiteListLocation?: string;
	browserInternetSecurityLevel?: graph.internetSiteSecurityLevel;
	browserIntranetSecurityLevel?: graph.siteSecurityLevel;
	browserLoggingReportLocation?: string;
	browserRequireFirewall?: boolean;
	browserRequireFraudWarning?: boolean;
	browserRequireHighSecurityForRestrictedSites?: boolean;
	browserRequireSmartScreen?: boolean;
	browserTrustedSitesSecurityLevel?: graph.siteSecurityLevel;
	cellularBlockDataRoaming?: boolean;
	diagnosticsBlockDataSubmission?: boolean;
	passwordBlockPicturePasswordAndPin?: boolean;
	passwordExpirationDays?: number;
	passwordMinimumCharacterSetCount?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeScreenTimeout?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequiredType?: graph.requiredPasswordType;
	passwordSignInFailureCountBeforeFactoryReset?: number;
	storageRequireDeviceEncryption?: boolean;
	updatesRequireAutomaticUpdates?: boolean;
	userAccountControlSettings?: graph.windowsUserAccountControlSettings;
	workFoldersUrl?: string;
}

/*********************************************
* windows81GeneralConfigurationCollections
**********************************************/
export interface windows81GeneralConfigurationCollections {

}

/*********************************************
* windowsDefenderAdvancedThreatProtectionConfiguration
**********************************************/
export interface windowsDefenderAdvancedThreatProtectionConfiguration {
	allowSampleSharing?: boolean;
	enableExpeditedTelemetryReporting?: boolean;
}

/*********************************************
* windowsDefenderAdvancedThreatProtectionConfigurationCollections
**********************************************/
export interface windowsDefenderAdvancedThreatProtectionConfigurationCollections {

}

/*********************************************
* windowsPhone81CompliancePolicy
**********************************************/
export interface windowsPhone81CompliancePolicy {
	osMaximumVersion?: string;
	osMinimumVersion?: string;
	passwordBlockSimple?: boolean;
	passwordExpirationDays?: number;
	passwordMinimumCharacterSetCount?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeLock?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequired?: boolean;
	passwordRequiredType?: graph.requiredPasswordType;
	storageRequireEncryption?: boolean;
}

/*********************************************
* windowsPhone81CompliancePolicyCollections
**********************************************/
export interface windowsPhone81CompliancePolicyCollections {

}

/*********************************************
* windowsPhone81CustomConfiguration
**********************************************/
export interface windowsPhone81CustomConfiguration {
	omaSettings?: { results: Array<graph.omaSetting> };
}

/*********************************************
* windowsPhone81CustomConfigurationCollections
**********************************************/
export interface windowsPhone81CustomConfigurationCollections {

}

/*********************************************
* windowsPhone81GeneralConfiguration
**********************************************/
export interface windowsPhone81GeneralConfiguration {
	applyOnlyToWindowsPhone81?: boolean;
	appsBlockCopyPaste?: boolean;
	bluetoothBlocked?: boolean;
	cameraBlocked?: boolean;
	cellularBlockWifiTethering?: boolean;
	compliantAppListType?: graph.appListType;
	compliantAppsList?: { results: Array<graph.appListItem> };
	diagnosticDataBlockSubmission?: boolean;
	emailBlockAddingAccounts?: boolean;
	locationServicesBlocked?: boolean;
	microsoftAccountBlocked?: boolean;
	nfcBlocked?: boolean;
	passwordBlockSimple?: boolean;
	passwordExpirationDays?: number;
	passwordMinimumCharacterSetCount?: number;
	passwordMinimumLength?: number;
	passwordMinutesOfInactivityBeforeScreenTimeout?: number;
	passwordPreviousPasswordBlockCount?: number;
	passwordRequired?: boolean;
	passwordRequiredType?: graph.requiredPasswordType;
	passwordSignInFailureCountBeforeFactoryReset?: number;
	screenCaptureBlocked?: boolean;
	storageBlockRemovableStorage?: boolean;
	storageRequireEncryption?: boolean;
	webBrowserBlocked?: boolean;
	wifiBlockAutomaticConnectHotspots?: boolean;
	wifiBlocked?: boolean;
	wifiBlockHotspotReporting?: boolean;
	windowsStoreBlocked?: boolean;
}

/*********************************************
* windowsPhone81GeneralConfigurationCollections
**********************************************/
export interface windowsPhone81GeneralConfigurationCollections {

}

/*********************************************
* windowsUpdateForBusinessConfiguration
**********************************************/
export interface windowsUpdateForBusinessConfiguration {
	automaticUpdateMode?: graph.automaticUpdateMode;
	businessReadyUpdatesOnly?: graph.windowsUpdateType;
	deliveryOptimizationMode?: graph.windowsDeliveryOptimizationMode;
	driversExcluded?: boolean;
	featureUpdatesDeferralPeriodInDays?: number;
	featureUpdatesPaused?: boolean;
	featureUpdatesPauseExpiryDateTime?: anyOffset;
	installationSchedule?: graph.windowsUpdateInstallScheduleType;
	microsoftUpdateServiceAllowed?: boolean;
	prereleaseFeatures?: graph.prereleaseFeatures;
	qualityUpdatesDeferralPeriodInDays?: number;
	qualityUpdatesPaused?: boolean;
	qualityUpdatesPauseExpiryDateTime?: anyOffset;
}

/*********************************************
* windowsUpdateForBusinessConfigurationCollections
**********************************************/
export interface windowsUpdateForBusinessConfigurationCollections {

}

/*********************************************
* enrollmentConfigurationAssignment
**********************************************/
export interface enrollmentConfigurationAssignment {
	target?: graph.deviceAndAppManagementAssignmentTarget;
}

/*********************************************
* enrollmentConfigurationAssignmentCollections
**********************************************/
export interface enrollmentConfigurationAssignmentCollections {

}

/*********************************************
* deviceEnrollmentLimitConfiguration
**********************************************/
export interface deviceEnrollmentLimitConfiguration {
	limit?: number;
}

/*********************************************
* deviceEnrollmentLimitConfigurationCollections
**********************************************/
export interface deviceEnrollmentLimitConfigurationCollections {

}

/*********************************************
* deviceEnrollmentPlatformRestrictionsConfiguration
**********************************************/
export interface deviceEnrollmentPlatformRestrictionsConfiguration {
	androidRestriction?: graph.deviceEnrollmentPlatformRestriction;
	iosRestriction?: graph.deviceEnrollmentPlatformRestriction;
	macOSRestriction?: graph.deviceEnrollmentPlatformRestriction;
	windowsMobileRestriction?: graph.deviceEnrollmentPlatformRestriction;
	windowsRestriction?: graph.deviceEnrollmentPlatformRestriction;
}

/*********************************************
* deviceEnrollmentPlatformRestrictionsConfigurationCollections
**********************************************/
export interface deviceEnrollmentPlatformRestrictionsConfigurationCollections {

}

/*********************************************
* deviceEnrollmentWindowsHelloForBusinessConfiguration
**********************************************/
export interface deviceEnrollmentWindowsHelloForBusinessConfiguration {
	enhancedBiometricsState?: graph.enablement;
	pinExpirationInDays?: number;
	pinLowercaseCharactersUsage?: graph.windowsHelloForBusinessPinUsage;
	pinMaximumLength?: number;
	pinMinimumLength?: number;
	pinPreviousBlockCount?: number;
	pinSpecialCharactersUsage?: graph.windowsHelloForBusinessPinUsage;
	pinUppercaseCharactersUsage?: graph.windowsHelloForBusinessPinUsage;
	remotePassportEnabled?: boolean;
	securityDeviceRequired?: boolean;
	state?: graph.enablement;
	unlockWithBiometricsEnabled?: boolean;
}

/*********************************************
* deviceEnrollmentWindowsHelloForBusinessConfigurationCollections
**********************************************/
export interface deviceEnrollmentWindowsHelloForBusinessConfigurationCollections {

}

/*********************************************
* userExperienceAnalyticsDevicePerformance
**********************************************/
export interface userExperienceAnalyticsDevicePerformance {
	averageBlueScreens?: number;
	averageRestarts?: number;
	blueScreenCount?: number;
	bootScore?: number;
	coreBootTimeInMs?: number;
	coreLoginTimeInMs?: number;
	deviceCount?: number;
	deviceName?: string;
	diskType?: graph.diskType;
	groupPolicyBootTimeInMs?: number;
	groupPolicyLoginTimeInMs?: number;
	healthStatus?: graph.userExperienceAnalyticsHealthState;
	loginScore?: number;
	manufacturer?: string;
	model?: string;
	modelStartupPerformanceScore?: number;
	operatingSystemVersion?: string;
	responsiveDesktopTimeInMs?: number;
	restartCount?: number;
	startupPerformanceScore?: number;
}

/*********************************************
* userExperienceAnalyticsDevicePerformanceCollections
**********************************************/
export interface userExperienceAnalyticsDevicePerformanceCollections {

}

/*********************************************
* importedWindowsAutopilotDeviceIdentityUpload
**********************************************/
export interface importedWindowsAutopilotDeviceIdentityUpload {
	createdDateTimeUtc?: anyOffset;
	status?: graph.importedWindowsAutopilotDeviceIdentityUploadStatus;
}

/*********************************************
* importedWindowsAutopilotDeviceIdentityUploadCollections
**********************************************/
export interface importedWindowsAutopilotDeviceIdentityUploadCollections {

}

/*********************************************
* managedMobileApp
**********************************************/
export interface managedMobileApp {
	mobileAppIdentifier?: graph.mobileAppIdentifier;
	version?: string;
}

/*********************************************
* managedMobileAppCollections
**********************************************/
export interface managedMobileAppCollections {

}

/*********************************************
* managedAppPolicyDeploymentSummary
**********************************************/
export interface managedAppPolicyDeploymentSummary {
	configurationDeployedUserCount?: number;
	configurationDeploymentSummaryPerApp?: { results: Array<graph.managedAppPolicyDeploymentSummaryPerApp> };
	displayName?: string;
	lastRefreshTime?: anyOffset;
	version?: string;
}

/*********************************************
* managedAppPolicyDeploymentSummaryCollections
**********************************************/
export interface managedAppPolicyDeploymentSummaryCollections {

}

/*********************************************
* androidManagedAppRegistration
**********************************************/
export interface androidManagedAppRegistration {

}

/*********************************************
* androidManagedAppRegistrationCollections
**********************************************/
export interface androidManagedAppRegistrationCollections {

}

/*********************************************
* iosManagedAppRegistration
**********************************************/
export interface iosManagedAppRegistration {

}

/*********************************************
* iosManagedAppRegistrationCollections
**********************************************/
export interface iosManagedAppRegistrationCollections {

}

/*********************************************
* managedAppOperation
**********************************************/
export interface managedAppOperation {
	displayName?: string;
	lastModifiedDateTime?: anyOffset;
	state?: string;
	version?: string;
}

/*********************************************
* managedAppOperationCollections
**********************************************/
export interface managedAppOperationCollections {

}

/*********************************************
* managedAppStatusRaw
**********************************************/
export interface managedAppStatusRaw {
	content?: graph.Json;
}

/*********************************************
* managedAppStatusRawCollections
**********************************************/
export interface managedAppStatusRawCollections {

}

/*********************************************
* targetedManagedAppPolicyAssignment
**********************************************/
export interface targetedManagedAppPolicyAssignment {
	target?: graph.deviceAndAppManagementAssignmentTarget;
}

/*********************************************
* targetedManagedAppPolicyAssignmentCollections
**********************************************/
export interface targetedManagedAppPolicyAssignmentCollections {

}

/*********************************************
* windowsInformationProtectionAppLockerFile
**********************************************/
export interface windowsInformationProtectionAppLockerFile {
	displayName?: string;
	file?: any;
	fileHash?: string;
	version?: string;
}

/*********************************************
* windowsInformationProtectionAppLockerFileCollections
**********************************************/
export interface windowsInformationProtectionAppLockerFileCollections {

}

/*********************************************
* localizedNotificationMessage
**********************************************/
export interface localizedNotificationMessage {
	isDefault?: boolean;
	lastModifiedDateTime?: anyOffset;
	locale?: string;
	messageTemplate?: string;
	subject?: string;
}

/*********************************************
* localizedNotificationMessageCollections
**********************************************/
export interface localizedNotificationMessageCollections {

}

/*********************************************
* deviceAndAppManagementRoleDefinition
**********************************************/
export interface deviceAndAppManagementRoleDefinition {

}

/*********************************************
* deviceAndAppManagementRoleDefinitionCollections
**********************************************/
export interface deviceAndAppManagementRoleDefinitionCollections {

}

/*********************************************
* deviceManagementExportJob
**********************************************/
export interface deviceManagementExportJob {
	expirationDateTime?: anyOffset;
	filter?: string;
	format?: graph.deviceManagementReportFileFormat;
	localizationType?: graph.deviceManagementExportJobLocalizationType;
	reportName?: string;
	requestDateTime?: anyOffset;
	select?: { results: Array<string> };
	snapshotId?: string;
	status?: graph.deviceManagementReportStatus;
	url?: string;
}

/*********************************************
* deviceManagementExportJobCollections
**********************************************/
export interface deviceManagementExportJobCollections {

}

/*********************************************
* enrollmentTroubleshootingEvent
**********************************************/
export interface enrollmentTroubleshootingEvent {
	deviceId?: string;
	enrollmentType?: graph.deviceEnrollmentType;
	failureCategory?: graph.deviceEnrollmentFailureReason;
	failureReason?: string;
	managedDeviceIdentifier?: string;
	operatingSystem?: string;
	osVersion?: string;
	userId?: string;
}

/*********************************************
* enrollmentTroubleshootingEventCollections
**********************************************/
export interface enrollmentTroubleshootingEventCollections {

}

/*********************************************
* admin
**********************************************/
export interface admin {

}

/*********************************************
* adminCollections
**********************************************/
export interface adminCollections {

}

/*********************************************
* serviceAnnouncement
**********************************************/
export interface serviceAnnouncement {

}

/*********************************************
* serviceAnnouncementCollections
**********************************************/
export interface serviceAnnouncementCollections {

}

/*********************************************
* serviceHealth
**********************************************/
export interface serviceHealth {
	service?: string;
	status?: graph.serviceHealthStatus;
}

/*********************************************
* serviceHealthCollections
**********************************************/
export interface serviceHealthCollections {

}

/*********************************************
* serviceAnnouncementBase
**********************************************/
export interface serviceAnnouncementBase {
	details?: { results: Array<graph.keyValuePair> };
	endDateTime?: anyOffset;
	lastModifiedDateTime?: anyOffset;
	startDateTime?: anyOffset;
	title?: string;
}

/*********************************************
* serviceAnnouncementBaseCollections
**********************************************/
export interface serviceAnnouncementBaseCollections {

}

/*********************************************
* serviceHealthIssue
**********************************************/
export interface serviceHealthIssue {
	classification?: graph.serviceHealthClassificationType;
	feature?: string;
	featureGroup?: string;
	impactDescription?: string;
	isResolved?: boolean;
	origin?: graph.serviceHealthOrigin;
	posts?: { results: Array<graph.serviceHealthIssuePost> };
	service?: string;
	status?: graph.serviceHealthStatus;
}

/*********************************************
* serviceHealthIssueCollections
**********************************************/
export interface serviceHealthIssueCollections {

}

/*********************************************
* serviceUpdateMessage
**********************************************/
export interface serviceUpdateMessage {
	actionRequiredByDateTime?: anyOffset;
	attachmentsArchive?: any;
	body?: graph.itemBody;
	category?: graph.serviceUpdateCategory;
	hasAttachments?: boolean;
	isMajorChange?: boolean;
	services?: { results: Array<string> };
	severity?: graph.serviceUpdateSeverity;
	tags?: { results: Array<string> };
	viewPoint?: graph.serviceUpdateMessageViewpoint;
}

/*********************************************
* serviceUpdateMessageCollections
**********************************************/
export interface serviceUpdateMessageCollections {

}

/*********************************************
* serviceAnnouncementAttachment
**********************************************/
export interface serviceAnnouncementAttachment {
	content?: any;
	contentType?: string;
	lastModifiedDateTime?: anyOffset;
	name?: string;
	size?: number;
}

/*********************************************
* serviceAnnouncementAttachmentCollections
**********************************************/
export interface serviceAnnouncementAttachmentCollections {

}

/*********************************************
* searchEntity
**********************************************/
export interface searchEntity {

}

/*********************************************
* searchEntityCollections
**********************************************/
export interface searchEntityCollections {

}

/*********************************************
* planner
**********************************************/
export interface planner {

}

/*********************************************
* plannerCollections
**********************************************/
export interface plannerCollections {

}

/*********************************************
* plannerBucket
**********************************************/
export interface plannerBucket {
	name?: string;
	orderHint?: string;
	planId?: string;
}

/*********************************************
* plannerBucketCollections
**********************************************/
export interface plannerBucketCollections {

}

/*********************************************
* plannerPlan
**********************************************/
export interface plannerPlan {
	container?: graph.plannerPlanContainer;
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	owner?: string;
	title?: string;
}

/*********************************************
* plannerPlanCollections
**********************************************/
export interface plannerPlanCollections {

}

/*********************************************
* plannerTask
**********************************************/
export interface plannerTask {
	activeChecklistItemCount?: number;
	appliedCategories?: graph.plannerAppliedCategories;
	assigneePriority?: string;
	assignments?: graph.plannerAssignments;
	bucketId?: string;
	checklistItemCount?: number;
	completedBy?: graph.identitySet;
	completedDateTime?: anyOffset;
	conversationThreadId?: string;
	createdBy?: graph.identitySet;
	createdDateTime?: anyOffset;
	dueDateTime?: anyOffset;
	hasDescription?: boolean;
	orderHint?: string;
	percentComplete?: number;
	planId?: string;
	previewType?: graph.plannerPreviewType;
	priority?: number;
	referenceCount?: number;
	startDateTime?: anyOffset;
	title?: string;
}

/*********************************************
* plannerTaskCollections
**********************************************/
export interface plannerTaskCollections {

}

/*********************************************
* plannerAssignedToTaskBoardTaskFormat
**********************************************/
export interface plannerAssignedToTaskBoardTaskFormat {
	orderHintsByAssignee?: graph.plannerOrderHintsByAssignee;
	unassignedOrderHint?: string;
}

/*********************************************
* plannerAssignedToTaskBoardTaskFormatCollections
**********************************************/
export interface plannerAssignedToTaskBoardTaskFormatCollections {

}

/*********************************************
* plannerBucketTaskBoardTaskFormat
**********************************************/
export interface plannerBucketTaskBoardTaskFormat {
	orderHint?: string;
}

/*********************************************
* plannerBucketTaskBoardTaskFormatCollections
**********************************************/
export interface plannerBucketTaskBoardTaskFormatCollections {

}

/*********************************************
* plannerPlanDetails
**********************************************/
export interface plannerPlanDetails {
	categoryDescriptions?: graph.plannerCategoryDescriptions;
	sharedWith?: graph.plannerUserIds;
}

/*********************************************
* plannerPlanDetailsCollections
**********************************************/
export interface plannerPlanDetailsCollections {

}

/*********************************************
* plannerProgressTaskBoardTaskFormat
**********************************************/
export interface plannerProgressTaskBoardTaskFormat {
	orderHint?: string;
}

/*********************************************
* plannerProgressTaskBoardTaskFormatCollections
**********************************************/
export interface plannerProgressTaskBoardTaskFormatCollections {

}

/*********************************************
* plannerTaskDetails
**********************************************/
export interface plannerTaskDetails {
	checklist?: graph.plannerChecklistItems;
	description?: string;
	previewType?: graph.plannerPreviewType;
	references?: graph.plannerExternalReferences;
}

/*********************************************
* plannerTaskDetailsCollections
**********************************************/
export interface plannerTaskDetailsCollections {

}

/*********************************************
* sharedInsight
**********************************************/
export interface sharedInsight {
	lastShared?: graph.sharingDetail;
	resourceReference?: graph.resourceReference;
	resourceVisualization?: graph.resourceVisualization;
	sharingHistory?: { results: Array<graph.sharingDetail> };
}

/*********************************************
* sharedInsightCollections
**********************************************/
export interface sharedInsightCollections {

}

/*********************************************
* trending
**********************************************/
export interface trending {
	lastModifiedDateTime?: anyOffset;
	resourceReference?: graph.resourceReference;
	resourceVisualization?: graph.resourceVisualization;
	weight?: number;
}

/*********************************************
* trendingCollections
**********************************************/
export interface trendingCollections {

}

/*********************************************
* usedInsight
**********************************************/
export interface usedInsight {
	lastUsed?: graph.usageDetails;
	resourceReference?: graph.resourceReference;
	resourceVisualization?: graph.resourceVisualization;
}

/*********************************************
* usedInsightCollections
**********************************************/
export interface usedInsightCollections {

}

/*********************************************
* changeTrackedEntity
**********************************************/
export interface changeTrackedEntity {
	createdDateTime?: anyOffset;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: anyOffset;
}

/*********************************************
* changeTrackedEntityCollections
**********************************************/
export interface changeTrackedEntityCollections {

}

/*********************************************
* shiftPreferences
**********************************************/
export interface shiftPreferences {
	availability?: { results: Array<graph.shiftAvailability> };
}

/*********************************************
* shiftPreferencesCollections
**********************************************/
export interface shiftPreferencesCollections {

}

/*********************************************
* onenoteEntityBaseModel
**********************************************/
export interface onenoteEntityBaseModel {
	self?: string;
}

/*********************************************
* onenoteEntityBaseModelCollections
**********************************************/
export interface onenoteEntityBaseModelCollections {

}

/*********************************************
* onenoteEntitySchemaObjectModel
**********************************************/
export interface onenoteEntitySchemaObjectModel {
	createdDateTime?: anyOffset;
}

/*********************************************
* onenoteEntitySchemaObjectModelCollections
**********************************************/
export interface onenoteEntitySchemaObjectModelCollections {

}

/*********************************************
* onenoteEntityHierarchyModel
**********************************************/
export interface onenoteEntityHierarchyModel {
	createdBy?: graph.identitySet;
	displayName?: string;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: anyOffset;
}

/*********************************************
* onenoteEntityHierarchyModelCollections
**********************************************/
export interface onenoteEntityHierarchyModelCollections {

}

/*********************************************
* notebook
**********************************************/
export interface notebook {
	isDefault?: boolean;
	isShared?: boolean;
	links?: graph.notebookLinks;
	sectionGroupsUrl?: string;
	sectionsUrl?: string;
	userRole?: graph.onenoteUserRole;
}

/*********************************************
* notebookCollections
**********************************************/
export interface notebookCollections {

}

/*********************************************
* sectionGroup
**********************************************/
export interface sectionGroup {
	sectionGroupsUrl?: string;
	sectionsUrl?: string;
}

/*********************************************
* sectionGroupCollections
**********************************************/
export interface sectionGroupCollections {

}

/*********************************************
* onenoteSection
**********************************************/
export interface onenoteSection {
	isDefault?: boolean;
	links?: graph.sectionLinks;
	pagesUrl?: string;
}

/*********************************************
* onenoteSectionCollections
**********************************************/
export interface onenoteSectionCollections {

}

/*********************************************
* operation
**********************************************/
export interface operation {
	createdDateTime?: anyOffset;
	lastActionDateTime?: anyOffset;
	status?: graph.operationStatus;
}

/*********************************************
* operationCollections
**********************************************/
export interface operationCollections {

}

/*********************************************
* onenoteOperation
**********************************************/
export interface onenoteOperation {
	error?: graph.onenoteOperationError;
	percentComplete?: string;
	resourceId?: string;
	resourceLocation?: string;
}

/*********************************************
* onenoteOperationCollections
**********************************************/
export interface onenoteOperationCollections {

}

/*********************************************
* onenotePage
**********************************************/
export interface onenotePage {
	content?: any;
	contentUrl?: string;
	createdByAppId?: string;
	lastModifiedDateTime?: anyOffset;
	level?: number;
	links?: graph.pageLinks;
	order?: number;
	title?: string;
	userTags?: { results: Array<string> };
}

/*********************************************
* onenotePageCollections
**********************************************/
export interface onenotePageCollections {

}

/*********************************************
* onenoteResource
**********************************************/
export interface onenoteResource {
	content?: any;
	contentUrl?: string;
}

/*********************************************
* onenoteResourceCollections
**********************************************/
export interface onenoteResourceCollections {

}

/*********************************************
* unifiedRoleManagementPolicyRule
**********************************************/
export interface unifiedRoleManagementPolicyRule {
	target?: graph.unifiedRoleManagementPolicyRuleTarget;
}

/*********************************************
* unifiedRoleManagementPolicyRuleCollections
**********************************************/
export interface unifiedRoleManagementPolicyRuleCollections {

}

/*********************************************
* unifiedRoleManagementPolicyApprovalRule
**********************************************/
export interface unifiedRoleManagementPolicyApprovalRule {
	setting?: graph.approvalSettings;
}

/*********************************************
* unifiedRoleManagementPolicyApprovalRuleCollections
**********************************************/
export interface unifiedRoleManagementPolicyApprovalRuleCollections {

}

/*********************************************
* unifiedRoleManagementPolicyAuthenticationContextRule
**********************************************/
export interface unifiedRoleManagementPolicyAuthenticationContextRule {
	claimValue?: string;
	isEnabled?: boolean;
}

/*********************************************
* unifiedRoleManagementPolicyAuthenticationContextRuleCollections
**********************************************/
export interface unifiedRoleManagementPolicyAuthenticationContextRuleCollections {

}

/*********************************************
* unifiedRoleManagementPolicyEnablementRule
**********************************************/
export interface unifiedRoleManagementPolicyEnablementRule {
	enabledRules?: { results: Array<string> };
}

/*********************************************
* unifiedRoleManagementPolicyEnablementRuleCollections
**********************************************/
export interface unifiedRoleManagementPolicyEnablementRuleCollections {

}

/*********************************************
* unifiedRoleManagementPolicyExpirationRule
**********************************************/
export interface unifiedRoleManagementPolicyExpirationRule {
	isExpirationRequired?: boolean;
	maximumDuration?: Edm.Duration;
}

/*********************************************
* unifiedRoleManagementPolicyExpirationRuleCollections
**********************************************/
export interface unifiedRoleManagementPolicyExpirationRuleCollections {

}

/*********************************************
* unifiedRoleManagementPolicyNotificationRule
**********************************************/
export interface unifiedRoleManagementPolicyNotificationRule {
	isDefaultRecipientsEnabled?: boolean;
	notificationLevel?: string;
	notificationRecipients?: { results: Array<string> };
	notificationType?: string;
	recipientType?: string;
}

/*********************************************
* unifiedRoleManagementPolicyNotificationRuleCollections
**********************************************/
export interface unifiedRoleManagementPolicyNotificationRuleCollections {

}

/*********************************************
* print
**********************************************/
export interface print {
	settings?: graph.printSettings;
}

/*********************************************
* printCollections
**********************************************/
export interface printCollections {

}

/*********************************************
* printConnector
**********************************************/
export interface printConnector {
	appVersion?: string;
	displayName?: string;
	fullyQualifiedDomainName?: string;
	location?: graph.printerLocation;
	operatingSystem?: string;
	registeredDateTime?: anyOffset;
}

/*********************************************
* printConnectorCollections
**********************************************/
export interface printConnectorCollections {

}

/*********************************************
* printOperation
**********************************************/
export interface printOperation {
	createdDateTime?: anyOffset;
	status?: graph.printOperationStatus;
}

/*********************************************
* printOperationCollections
**********************************************/
export interface printOperationCollections {

}

/*********************************************
* printerBase
**********************************************/
export interface printerBase {
	capabilities?: graph.printerCapabilities;
	defaults?: graph.printerDefaults;
	displayName?: string;
	isAcceptingJobs?: boolean;
	location?: graph.printerLocation;
	manufacturer?: string;
	model?: string;
	status?: graph.printerStatus;
}

/*********************************************
* printerBaseCollections
**********************************************/
export interface printerBaseCollections {

}

/*********************************************
* printer
**********************************************/
export interface printer {
	hasPhysicalDevice?: boolean;
	isShared?: boolean;
	lastSeenDateTime?: anyOffset;
	registeredDateTime?: anyOffset;
}

/*********************************************
* printerCollections
**********************************************/
export interface printerCollections {

}

/*********************************************
* printService
**********************************************/
export interface printService {

}

/*********************************************
* printServiceCollections
**********************************************/
export interface printServiceCollections {

}

/*********************************************
* printerShare
**********************************************/
export interface printerShare {
	allowAllUsers?: boolean;
	createdDateTime?: anyOffset;
}

/*********************************************
* printerShareCollections
**********************************************/
export interface printerShareCollections {

}

/*********************************************
* printTaskDefinition
**********************************************/
export interface printTaskDefinition {
	createdBy?: graph.appIdentity;
	displayName?: string;
}

/*********************************************
* printTaskDefinitionCollections
**********************************************/
export interface printTaskDefinitionCollections {

}

/*********************************************
* printDocument
**********************************************/
export interface printDocument {
	contentType?: string;
	displayName?: string;
	size?: number;
}

/*********************************************
* printDocumentCollections
**********************************************/
export interface printDocumentCollections {

}

/*********************************************
* printTaskTrigger
**********************************************/
export interface printTaskTrigger {
	event?: graph.printEvent;
}

/*********************************************
* printTaskTriggerCollections
**********************************************/
export interface printTaskTriggerCollections {

}

/*********************************************
* printJob
**********************************************/
export interface printJob {
	configuration?: graph.printJobConfiguration;
	createdBy?: graph.userIdentity;
	createdDateTime?: anyOffset;
	isFetchable?: boolean;
	redirectedFrom?: string;
	redirectedTo?: string;
	status?: graph.printJobStatus;
}

/*********************************************
* printJobCollections
**********************************************/
export interface printJobCollections {

}

/*********************************************
* printerCreateOperation
**********************************************/
export interface printerCreateOperation {
	certificate?: string;
}

/*********************************************
* printerCreateOperationCollections
**********************************************/
export interface printerCreateOperationCollections {

}

/*********************************************
* printTask
**********************************************/
export interface printTask {
	parentUrl?: string;
	status?: graph.printTaskStatus;
}

/*********************************************
* printTaskCollections
**********************************************/
export interface printTaskCollections {

}

/*********************************************
* printServiceEndpoint
**********************************************/
export interface printServiceEndpoint {
	displayName?: string;
	uri?: string;
}

/*********************************************
* printServiceEndpointCollections
**********************************************/
export interface printServiceEndpointCollections {

}

/*********************************************
* activityHistoryItem
**********************************************/
export interface activityHistoryItem {
	activeDurationSeconds?: number;
	createdDateTime?: anyOffset;
	expirationDateTime?: anyOffset;
	lastActiveDateTime?: anyOffset;
	lastModifiedDateTime?: anyOffset;
	startedDateTime?: anyOffset;
	status?: graph.status;
	userTimezone?: string;
}

/*********************************************
* activityHistoryItemCollections
**********************************************/
export interface activityHistoryItemCollections {

}

/*********************************************
* dataPolicyOperation
**********************************************/
export interface dataPolicyOperation {
	completedDateTime?: anyOffset;
	progress?: number;
	status?: graph.dataPolicyOperationStatus;
	storageLocation?: string;
	submittedDateTime?: anyOffset;
	userId?: string;
}

/*********************************************
* dataPolicyOperationCollections
**********************************************/
export interface dataPolicyOperationCollections {

}

/*********************************************
* attendanceRecord
**********************************************/
export interface attendanceRecord {
	attendanceIntervals?: { results: Array<graph.attendanceInterval> };
	emailAddress?: string;
	identity?: graph.identity;
	role?: string;
	totalAttendanceInSeconds?: number;
}

/*********************************************
* attendanceRecordCollections
**********************************************/
export interface attendanceRecordCollections {

}

/*********************************************
* audioRoutingGroup
**********************************************/
export interface audioRoutingGroup {
	receivers?: { results: Array<string> };
	routingMode?: graph.routingMode;
	sources?: { results: Array<string> };
}

/*********************************************
* audioRoutingGroupCollections
**********************************************/
export interface audioRoutingGroupCollections {

}

/*********************************************
* commsOperation
**********************************************/
export interface commsOperation {
	clientContext?: string;
	resultInfo?: graph.resultInfo;
	status?: graph.operationStatus;
}

/*********************************************
* commsOperationCollections
**********************************************/
export interface commsOperationCollections {

}

/*********************************************
* participant
**********************************************/
export interface participant {
	info?: graph.participantInfo;
	isInLobby?: boolean;
	isMuted?: boolean;
	mediaStreams?: { results: Array<graph.mediaStream> };
	metadata?: string;
	recordingInfo?: graph.recordingInfo;
}

/*********************************************
* participantCollections
**********************************************/
export interface participantCollections {

}

/*********************************************
* cancelMediaProcessingOperation
**********************************************/
export interface cancelMediaProcessingOperation {

}

/*********************************************
* cancelMediaProcessingOperationCollections
**********************************************/
export interface cancelMediaProcessingOperationCollections {

}

/*********************************************
* inviteParticipantsOperation
**********************************************/
export interface inviteParticipantsOperation {
	participants?: { results: Array<graph.invitationParticipantInfo> };
}

/*********************************************
* inviteParticipantsOperationCollections
**********************************************/
export interface inviteParticipantsOperationCollections {

}

/*********************************************
* meetingAttendanceReport
**********************************************/
export interface meetingAttendanceReport {
	meetingEndDateTime?: anyOffset;
	meetingStartDateTime?: anyOffset;
	totalParticipantCount?: number;
}

/*********************************************
* meetingAttendanceReportCollections
**********************************************/
export interface meetingAttendanceReportCollections {

}

/*********************************************
* muteParticipantOperation
**********************************************/
export interface muteParticipantOperation {

}

/*********************************************
* muteParticipantOperationCollections
**********************************************/
export interface muteParticipantOperationCollections {

}

/*********************************************
* participantJoiningNotification
**********************************************/
export interface participantJoiningNotification {

}

/*********************************************
* participantJoiningNotificationCollections
**********************************************/
export interface participantJoiningNotificationCollections {

}

/*********************************************
* participantLeftNotification
**********************************************/
export interface participantLeftNotification {
	participantId?: string;
}

/*********************************************
* participantLeftNotificationCollections
**********************************************/
export interface participantLeftNotificationCollections {

}

/*********************************************
* playPromptOperation
**********************************************/
export interface playPromptOperation {

}

/*********************************************
* playPromptOperationCollections
**********************************************/
export interface playPromptOperationCollections {

}

/*********************************************
* recordOperation
**********************************************/
export interface recordOperation {
	recordingAccessToken?: string;
	recordingLocation?: string;
}

/*********************************************
* recordOperationCollections
**********************************************/
export interface recordOperationCollections {

}

/*********************************************
* startHoldMusicOperation
**********************************************/
export interface startHoldMusicOperation {

}

/*********************************************
* startHoldMusicOperationCollections
**********************************************/
export interface startHoldMusicOperationCollections {

}

/*********************************************
* stopHoldMusicOperation
**********************************************/
export interface stopHoldMusicOperation {

}

/*********************************************
* stopHoldMusicOperationCollections
**********************************************/
export interface stopHoldMusicOperationCollections {

}

/*********************************************
* subscribeToToneOperation
**********************************************/
export interface subscribeToToneOperation {

}

/*********************************************
* subscribeToToneOperationCollections
**********************************************/
export interface subscribeToToneOperationCollections {

}

/*********************************************
* unmuteParticipantOperation
**********************************************/
export interface unmuteParticipantOperation {

}

/*********************************************
* unmuteParticipantOperationCollections
**********************************************/
export interface unmuteParticipantOperationCollections {

}

/*********************************************
* updateRecordingStatusOperation
**********************************************/
export interface updateRecordingStatusOperation {

}

/*********************************************
* updateRecordingStatusOperationCollections
**********************************************/
export interface updateRecordingStatusOperationCollections {

}

/*********************************************
* authenticationMethod
**********************************************/
export interface authenticationMethod {

}

/*********************************************
* authenticationMethodCollections
**********************************************/
export interface authenticationMethodCollections {

}

/*********************************************
* emailAuthenticationMethod
**********************************************/
export interface emailAuthenticationMethod {
	emailAddress?: string;
}

/*********************************************
* emailAuthenticationMethodCollections
**********************************************/
export interface emailAuthenticationMethodCollections {

}

/*********************************************
* fido2AuthenticationMethod
**********************************************/
export interface fido2AuthenticationMethod {
	aaGuid?: string;
	attestationCertificates?: { results: Array<string> };
	attestationLevel?: graph.attestationLevel;
	createdDateTime?: anyOffset;
	displayName?: string;
	model?: string;
}

/*********************************************
* fido2AuthenticationMethodCollections
**********************************************/
export interface fido2AuthenticationMethodCollections {

}

/*********************************************
* microsoftAuthenticatorAuthenticationMethod
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethod {
	createdDateTime?: anyOffset;
	deviceTag?: string;
	displayName?: string;
	phoneAppVersion?: string;
}

/*********************************************
* microsoftAuthenticatorAuthenticationMethodCollections
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodCollections {

}

/*********************************************
* passwordAuthenticationMethod
**********************************************/
export interface passwordAuthenticationMethod {
	createdDateTime?: anyOffset;
	password?: string;
}

/*********************************************
* passwordAuthenticationMethodCollections
**********************************************/
export interface passwordAuthenticationMethodCollections {

}

/*********************************************
* phoneAuthenticationMethod
**********************************************/
export interface phoneAuthenticationMethod {
	phoneNumber?: string;
	phoneType?: graph.authenticationPhoneType;
	smsSignInState?: graph.authenticationMethodSignInState;
}

/*********************************************
* phoneAuthenticationMethodCollections
**********************************************/
export interface phoneAuthenticationMethodCollections {

}

/*********************************************
* softwareOathAuthenticationMethod
**********************************************/
export interface softwareOathAuthenticationMethod {
	secretKey?: string;
}

/*********************************************
* softwareOathAuthenticationMethodCollections
**********************************************/
export interface softwareOathAuthenticationMethodCollections {

}

/*********************************************
* temporaryAccessPassAuthenticationMethod
**********************************************/
export interface temporaryAccessPassAuthenticationMethod {
	createdDateTime?: anyOffset;
	isUsable?: boolean;
	isUsableOnce?: boolean;
	lifetimeInMinutes?: number;
	methodUsabilityReason?: string;
	startDateTime?: anyOffset;
	temporaryAccessPass?: string;
}

/*********************************************
* temporaryAccessPassAuthenticationMethodCollections
**********************************************/
export interface temporaryAccessPassAuthenticationMethodCollections {

}

/*********************************************
* windowsHelloForBusinessAuthenticationMethod
**********************************************/
export interface windowsHelloForBusinessAuthenticationMethod {
	createdDateTime?: anyOffset;
	displayName?: string;
	keyStrength?: graph.authenticationMethodKeyStrength;
}

/*********************************************
* windowsHelloForBusinessAuthenticationMethodCollections
**********************************************/
export interface windowsHelloForBusinessAuthenticationMethodCollections {

}

/*********************************************
* aadUserConversationMember
**********************************************/
export interface aadUserConversationMember {
	email?: string;
	tenantId?: string;
	userId?: string;
}

/*********************************************
* aadUserConversationMemberCollections
**********************************************/
export interface aadUserConversationMemberCollections {

}

/*********************************************
* appCatalogs
**********************************************/
export interface appCatalogs {

}

/*********************************************
* appCatalogsCollections
**********************************************/
export interface appCatalogsCollections {

}

/*********************************************
* teamsApp
**********************************************/
export interface teamsApp {
	displayName?: string;
	distributionMethod?: graph.teamsAppDistributionMethod;
	externalId?: string;
}

/*********************************************
* teamsAppCollections
**********************************************/
export interface teamsAppCollections {

}

/*********************************************
* teamInfo
**********************************************/
export interface teamInfo {
	displayName?: string;
	tenantId?: string;
}

/*********************************************
* teamInfoCollections
**********************************************/
export interface teamInfoCollections {

}

/*********************************************
* associatedTeamInfo
**********************************************/
export interface associatedTeamInfo {

}

/*********************************************
* associatedTeamInfoCollections
**********************************************/
export interface associatedTeamInfoCollections {

}

/*********************************************
* chatMessage
**********************************************/
export interface chatMessage {
	attachments?: { results: Array<graph.chatMessageAttachment> };
	body?: graph.itemBody;
	channelIdentity?: graph.channelIdentity;
	chatId?: string;
	createdDateTime?: anyOffset;
	deletedDateTime?: anyOffset;
	etag?: string;
	eventDetail?: graph.eventMessageDetail;
	from?: graph.chatMessageFromIdentitySet;
	importance?: graph.chatMessageImportance;
	lastEditedDateTime?: anyOffset;
	lastModifiedDateTime?: anyOffset;
	locale?: string;
	mentions?: { results: Array<graph.chatMessageMention> };
	messageType?: graph.chatMessageType;
	policyViolation?: graph.chatMessagePolicyViolation;
	reactions?: { results: Array<graph.chatMessageReaction> };
	replyToId?: string;
	subject?: string;
	summary?: string;
	webUrl?: string;
}

/*********************************************
* chatMessageCollections
**********************************************/
export interface chatMessageCollections {

}

/*********************************************
* sharedWithChannelTeamInfo
**********************************************/
export interface sharedWithChannelTeamInfo {
	isHostTeam?: boolean;
}

/*********************************************
* sharedWithChannelTeamInfoCollections
**********************************************/
export interface sharedWithChannelTeamInfoCollections {

}

/*********************************************
* teamsTab
**********************************************/
export interface teamsTab {
	configuration?: graph.teamsTabConfiguration;
	displayName?: string;
	webUrl?: string;
}

/*********************************************
* teamsTabCollections
**********************************************/
export interface teamsTabCollections {

}

/*********************************************
* teamworkHostedContent
**********************************************/
export interface teamworkHostedContent {
	contentBytes?: any;
	contentType?: string;
}

/*********************************************
* teamworkHostedContentCollections
**********************************************/
export interface teamworkHostedContentCollections {

}

/*********************************************
* chatMessageHostedContent
**********************************************/
export interface chatMessageHostedContent {

}

/*********************************************
* chatMessageHostedContentCollections
**********************************************/
export interface chatMessageHostedContentCollections {

}

/*********************************************
* teamsAppDefinition
**********************************************/
export interface teamsAppDefinition {
	createdBy?: graph.identitySet;
	description?: string;
	displayName?: string;
	lastModifiedDateTime?: anyOffset;
	publishingState?: graph.teamsAppPublishingState;
	shortDescription?: string;
	teamsAppId?: string;
	version?: string;
}

/*********************************************
* teamsAppDefinitionCollections
**********************************************/
export interface teamsAppDefinitionCollections {

}

/*********************************************
* teamworkBot
**********************************************/
export interface teamworkBot {

}

/*********************************************
* teamworkBotCollections
**********************************************/
export interface teamworkBotCollections {

}

/*********************************************
* teamwork
**********************************************/
export interface teamwork {

}

/*********************************************
* teamworkCollections
**********************************************/
export interface teamworkCollections {

}

/*********************************************
* workforceIntegration
**********************************************/
export interface workforceIntegration {
	apiVersion?: number;
	displayName?: string;
	encryption?: graph.workforceIntegrationEncryption;
	isActive?: boolean;
	supportedEntities?: graph.workforceIntegrationSupportedEntities;
	url?: string;
}

/*********************************************
* workforceIntegrationCollections
**********************************************/
export interface workforceIntegrationCollections {

}

/*********************************************
* userScopeTeamsAppInstallation
**********************************************/
export interface userScopeTeamsAppInstallation {

}

/*********************************************
* userScopeTeamsAppInstallationCollections
**********************************************/
export interface userScopeTeamsAppInstallationCollections {

}

/*********************************************
* scheduleChangeRequest
**********************************************/
export interface scheduleChangeRequest {
	assignedTo?: graph.scheduleChangeRequestActor;
	managerActionDateTime?: anyOffset;
	managerActionMessage?: string;
	managerUserId?: string;
	senderDateTime?: anyOffset;
	senderMessage?: string;
	senderUserId?: string;
	state?: graph.scheduleChangeState;
}

/*********************************************
* scheduleChangeRequestCollections
**********************************************/
export interface scheduleChangeRequestCollections {

}

/*********************************************
* offerShiftRequest
**********************************************/
export interface offerShiftRequest {
	recipientActionDateTime?: anyOffset;
	recipientActionMessage?: string;
	recipientUserId?: string;
	senderShiftId?: string;
}

/*********************************************
* offerShiftRequestCollections
**********************************************/
export interface offerShiftRequestCollections {

}

/*********************************************
* openShift
**********************************************/
export interface openShift {
	draftOpenShift?: graph.openShiftItem;
	schedulingGroupId?: string;
	sharedOpenShift?: graph.openShiftItem;
}

/*********************************************
* openShiftCollections
**********************************************/
export interface openShiftCollections {

}

/*********************************************
* openShiftChangeRequest
**********************************************/
export interface openShiftChangeRequest {
	openShiftId?: string;
}

/*********************************************
* openShiftChangeRequestCollections
**********************************************/
export interface openShiftChangeRequestCollections {

}

/*********************************************
* schedulingGroup
**********************************************/
export interface schedulingGroup {
	displayName?: string;
	isActive?: boolean;
	userIds?: { results: Array<string> };
}

/*********************************************
* schedulingGroupCollections
**********************************************/
export interface schedulingGroupCollections {

}

/*********************************************
* shift
**********************************************/
export interface shift {
	draftShift?: graph.shiftItem;
	schedulingGroupId?: string;
	sharedShift?: graph.shiftItem;
	userId?: string;
}

/*********************************************
* shiftCollections
**********************************************/
export interface shiftCollections {

}

/*********************************************
* swapShiftsChangeRequest
**********************************************/
export interface swapShiftsChangeRequest {
	recipientShiftId?: string;
}

/*********************************************
* swapShiftsChangeRequestCollections
**********************************************/
export interface swapShiftsChangeRequestCollections {

}

/*********************************************
* timeOffReason
**********************************************/
export interface timeOffReason {
	displayName?: string;
	iconType?: graph.timeOffReasonIconType;
	isActive?: boolean;
}

/*********************************************
* timeOffReasonCollections
**********************************************/
export interface timeOffReasonCollections {

}

/*********************************************
* timeOffRequest
**********************************************/
export interface timeOffRequest {
	endDateTime?: anyOffset;
	startDateTime?: anyOffset;
	timeOffReasonId?: string;
}

/*********************************************
* timeOffRequestCollections
**********************************************/
export interface timeOffRequestCollections {

}

/*********************************************
* timeOff
**********************************************/
export interface timeOff {
	draftTimeOff?: graph.timeOffItem;
	sharedTimeOff?: graph.timeOffItem;
	userId?: string;
}

/*********************************************
* timeOffCollections
**********************************************/
export interface timeOffCollections {

}

/*********************************************
* emailFileAssessmentRequest
**********************************************/
export interface emailFileAssessmentRequest {
	contentData?: string;
	destinationRoutingReason?: graph.mailDestinationRoutingReason;
	recipientEmail?: string;
}

/*********************************************
* emailFileAssessmentRequestCollections
**********************************************/
export interface emailFileAssessmentRequestCollections {

}

/*********************************************
* fileAssessmentRequest
**********************************************/
export interface fileAssessmentRequest {
	contentData?: string;
	fileName?: string;
}

/*********************************************
* fileAssessmentRequestCollections
**********************************************/
export interface fileAssessmentRequestCollections {

}

/*********************************************
* mailAssessmentRequest
**********************************************/
export interface mailAssessmentRequest {
	destinationRoutingReason?: graph.mailDestinationRoutingReason;
	messageUri?: string;
	recipientEmail?: string;
}

/*********************************************
* mailAssessmentRequestCollections
**********************************************/
export interface mailAssessmentRequestCollections {

}

/*********************************************
* threatAssessmentResult
**********************************************/
export interface threatAssessmentResult {
	createdDateTime?: anyOffset;
	message?: string;
	resultType?: graph.threatAssessmentResultType;
}

/*********************************************
* threatAssessmentResultCollections
**********************************************/
export interface threatAssessmentResultCollections {

}

/*********************************************
* urlAssessmentRequest
**********************************************/
export interface urlAssessmentRequest {
	url?: string;
}

/*********************************************
* urlAssessmentRequestCollections
**********************************************/
export interface urlAssessmentRequestCollections {

}

/*********************************************
* attachmentBase
**********************************************/
export interface attachmentBase {
	contentType?: string;
	lastModifiedDateTime?: anyOffset;
	name?: string;
	size?: number;
}

/*********************************************
* attachmentBaseCollections
**********************************************/
export interface attachmentBaseCollections {

}

/*********************************************
* attachmentSession
**********************************************/
export interface attachmentSession {
	content?: any;
	expirationDateTime?: anyOffset;
	nextExpectedRanges?: { results: Array<string> };
}

/*********************************************
* attachmentSessionCollections
**********************************************/
export interface attachmentSessionCollections {

}

/*********************************************
* checklistItem
**********************************************/
export interface checklistItem {
	checkedDateTime?: anyOffset;
	createdDateTime?: anyOffset;
	displayName?: string;
	isChecked?: boolean;
}

/*********************************************
* checklistItemCollections
**********************************************/
export interface checklistItemCollections {

}

/*********************************************
* linkedResource
**********************************************/
export interface linkedResource {
	applicationName?: string;
	displayName?: string;
	externalId?: string;
	webUrl?: string;
}

/*********************************************
* linkedResourceCollections
**********************************************/
export interface linkedResourceCollections {

}

/*********************************************
* taskFileAttachment
**********************************************/
export interface taskFileAttachment {
	contentBytes?: any;
}

/*********************************************
* taskFileAttachmentCollections
**********************************************/
export interface taskFileAttachmentCollections {

}

/*********************************************
* todoTaskList
**********************************************/
export interface todoTaskList {
	displayName?: string;
	isOwner?: boolean;
	isShared?: boolean;
	wellknownListName?: graph.wellknownListName;
}

/*********************************************
* todoTaskListCollections
**********************************************/
export interface todoTaskListCollections {

}

/*********************************************
* todoTask
**********************************************/
export interface todoTask {
	body?: graph.itemBody;
	bodyLastModifiedDateTime?: anyOffset;
	categories?: { results: Array<string> };
	completedDateTime?: graph.dateTimeTimeZone;
	createdDateTime?: anyOffset;
	dueDateTime?: graph.dateTimeTimeZone;
	hasAttachments?: boolean;
	importance?: graph.importance;
	isReminderOn?: boolean;
	lastModifiedDateTime?: anyOffset;
	recurrence?: graph.patternedRecurrence;
	reminderDateTime?: graph.dateTimeTimeZone;
	startDateTime?: graph.dateTimeTimeZone;
	status?: graph.taskStatus;
	title?: string;
}

/*********************************************
* todoTaskCollections
**********************************************/
export interface todoTaskCollections {

}
