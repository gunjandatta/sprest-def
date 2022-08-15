import { IBaseResult } from "../../base";
import * as ComplexTypes from "./complexTypes.d";
import * as EnumTypes from "./enumTypes.d";

/*********************************************
* entity
**********************************************/
export interface entity  {
	id: string;

}
/*********************************************
* auditLogRoot
**********************************************/
export interface auditLogRoot  {

	directoryAudits: IBaseResult<directoryAudit[]>;
	provisioning: IBaseResult<provisioningObjectSummary[]>;
	restrictedSignIns: IBaseResult<restrictedSignIn[]>;
	signIns: IBaseResult<signIn[]>;
}
/*********************************************
* directoryAudit
**********************************************/
export interface directoryAudit  {
	activityDateTime: any;
	activityDisplayName: string;
	additionalDetails: ComplexTypes.keyValue[];
	category: string;
	correlationId: string;
	initiatedBy: ComplexTypes.auditActivityInitiator;
	loggedByService: string;
	operationType: string;
	result: EnumTypes.operationResult;
	resultReason: string;
	targetResources: ComplexTypes.targetResource[];

}
/*********************************************
* provisioningObjectSummary
**********************************************/
export interface provisioningObjectSummary  {
	activityDateTime: any;
	changeId: string;
	cycleId: string;
	durationInMilliseconds: number;
	initiatedBy: ComplexTypes.initiator;
	jobId: string;
	modifiedProperties: ComplexTypes.modifiedProperty[];
	provisioningAction: EnumTypes.provisioningAction;
	provisioningStatusInfo: ComplexTypes.provisioningStatusInfo;
	provisioningSteps: ComplexTypes.provisioningStep[];
	servicePrincipal: ComplexTypes.provisioningServicePrincipal;
	sourceIdentity: ComplexTypes.provisionedIdentity;
	sourceSystem: ComplexTypes.provisioningSystem;
	targetIdentity: ComplexTypes.provisionedIdentity;
	targetSystem: ComplexTypes.provisioningSystem;
	tenantId: string;

}
/*********************************************
* signIn
**********************************************/
export interface signIn  {
	appDisplayName: string;
	appId: string;
	appliedConditionalAccessPolicies: ComplexTypes.appliedConditionalAccessPolicy[];
	clientAppUsed: string;
	conditionalAccessStatus: EnumTypes.conditionalAccessStatus;
	correlationId: string;
	createdDateTime: any;
	deviceDetail: ComplexTypes.deviceDetail;
	ipAddress: string;
	isInteractive: boolean;
	location: ComplexTypes.signInLocation;
	resourceDisplayName: string;
	resourceId: string;
	riskDetail: EnumTypes.riskDetail;
	riskEventTypes: EnumTypes.riskEventType[];
	riskEventTypes_v2: Array<string>[];
	riskLevelAggregated: EnumTypes.riskLevel;
	riskLevelDuringSignIn: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	status: ComplexTypes.signInStatus;
	userDisplayName: string;
	userId: string;
	userPrincipalName: string;

}
/*********************************************
* restrictedSignIn
**********************************************/
export interface restrictedSignIn  {
	targetTenantId: any;

}
/*********************************************
* invitation
**********************************************/
export interface invitation  {
	invitedUserDisplayName: string;
	invitedUserEmailAddress: string;
	invitedUserMessageInfo: ComplexTypes.invitedUserMessageInfo;
	invitedUserType: string;
	inviteRedeemUrl: string;
	inviteRedirectUrl: string;
	sendInvitationMessage: boolean;
	status: string;
	invitedUser: IBaseResult<user>;
}
/*********************************************
* directoryObject
**********************************************/
export interface directoryObject  {
	deletedDateTime: any;

}
/*********************************************
* user
**********************************************/
export interface user  {
	accountEnabled: boolean;
	ageGroup: string;
	assignedLicenses: ComplexTypes.assignedLicense[];
	assignedPlans: ComplexTypes.assignedPlan[];
	businessPhones: Array<string>[];
	city: string;
	companyName: string;
	consentProvidedForMinor: string;
	country: string;
	createdDateTime: any;
	creationType: string;
	department: string;
	displayName: string;
	employeeHireDate: any;
	employeeId: string;
	employeeOrgData: ComplexTypes.employeeOrgData;
	employeeType: string;
	externalUserState: string;
	externalUserStateChangeDateTime: any;
	faxNumber: string;
	givenName: string;
	identities: ComplexTypes.objectIdentity[];
	imAddresses: Array<string>[];
	isResourceAccount: boolean;
	jobTitle: string;
	lastPasswordChangeDateTime: any;
	legalAgeGroupClassification: string;
	licenseAssignmentStates: ComplexTypes.licenseAssignmentState[];
	mail: string;
	mailNickname: string;
	mobilePhone: string;
	officeLocation: string;
	onPremisesDistinguishedName: string;
	onPremisesDomainName: string;
	onPremisesExtensionAttributes: ComplexTypes.onPremisesExtensionAttributes;
	onPremisesImmutableId: string;
	onPremisesLastSyncDateTime: any;
	onPremisesProvisioningErrors: ComplexTypes.onPremisesProvisioningError[];
	onPremisesSamAccountName: string;
	onPremisesSecurityIdentifier: string;
	onPremisesSyncEnabled: boolean;
	onPremisesUserPrincipalName: string;
	otherMails: Array<string>[];
	passwordPolicies: string;
	passwordProfile: ComplexTypes.passwordProfile;
	postalCode: string;
	preferredDataLocation: string;
	preferredLanguage: string;
	provisionedPlans: ComplexTypes.provisionedPlan[];
	proxyAddresses: Array<string>[];
	showInAddressList: boolean;
	signInSessionsValidFromDateTime: any;
	state: string;
	streetAddress: string;
	surname: string;
	usageLocation: string;
	userPrincipalName: string;
	userType: string;
	mailboxSettings: ComplexTypes.mailboxSettings;
	deviceEnrollmentLimit: number;
	aboutMe: string;
	birthday: any;
	hireDate: any;
	interests: Array<string>[];
	mySite: string;
	pastProjects: Array<string>[];
	preferredName: string;
	responsibilities: Array<string>[];
	schools: Array<string>[];
	skills: Array<string>[];
	appRoleAssignments: IBaseResult<appRoleAssignment[]>;
	createdObjects: IBaseResult<directoryObject[]>;
	directReports: IBaseResult<directoryObject[]>;
	licenseDetails: IBaseResult<licenseDetails[]>;
	manager: IBaseResult<directoryObject>;
	memberOf: IBaseResult<directoryObject[]>;
	oauth2PermissionGrants: IBaseResult<oAuth2PermissionGrant[]>;
	ownedDevices: IBaseResult<directoryObject[]>;
	ownedObjects: IBaseResult<directoryObject[]>;
	registeredDevices: IBaseResult<directoryObject[]>;
	scopedRoleMemberOf: IBaseResult<scopedRoleMembership[]>;
	transitiveMemberOf: IBaseResult<directoryObject[]>;
	calendar: IBaseResult<calendar>;
	calendarGroups: IBaseResult<calendarGroup[]>;
	calendars: IBaseResult<calendar[]>;
	calendarView: IBaseResult<event[]>;
	contactFolders: IBaseResult<contactFolder[]>;
	contacts: IBaseResult<contact[]>;
	events: IBaseResult<event[]>;
	inferenceClassification: IBaseResult<inferenceClassification>;
	mailFolders: IBaseResult<mailFolder[]>;
	messages: IBaseResult<message[]>;
	outlook: IBaseResult<outlookUser>;
	people: IBaseResult<person[]>;
	drive: IBaseResult<drive>;
	drives: IBaseResult<drive[]>;
	followedSites: IBaseResult<site[]>;
	extensions: IBaseResult<extension[]>;
	agreementAcceptances: IBaseResult<agreementAcceptance[]>;
	managedDevices: IBaseResult<managedDevice[]>;
	managedAppRegistrations: IBaseResult<managedAppRegistration[]>;
	deviceManagementTroubleshootingEvents: IBaseResult<deviceManagementTroubleshootingEvent[]>;
	planner: IBaseResult<plannerUser>;
	insights: IBaseResult<officeGraphInsights>;
	settings: IBaseResult<userSettings>;
	onenote: IBaseResult<onenote>;
	photo: IBaseResult<profilePhoto>;
	photos: IBaseResult<profilePhoto[]>;
	activities: IBaseResult<userActivity[]>;
	onlineMeetings: IBaseResult<onlineMeeting[]>;
	presence: IBaseResult<presence>;
	authentication: IBaseResult<authentication>;
	chats: IBaseResult<chat[]>;
	joinedTeams: IBaseResult<team[]>;
	teamwork: IBaseResult<userTeamwork>;
	todo: IBaseResult<todo>;
}
/*********************************************
* appRoleAssignment
**********************************************/
export interface appRoleAssignment  {
	appRoleId: any;
	createdDateTime: any;
	principalDisplayName: string;
	principalId: any;
	principalType: string;
	resourceDisplayName: string;
	resourceId: any;

}
/*********************************************
* licenseDetails
**********************************************/
export interface licenseDetails  {
	servicePlans: ComplexTypes.servicePlanInfo[];
	skuId: any;
	skuPartNumber: string;

}
/*********************************************
* oAuth2PermissionGrant
**********************************************/
export interface oAuth2PermissionGrant  {
	clientId: string;
	consentType: string;
	principalId: string;
	resourceId: string;
	scope: string;

}
/*********************************************
* scopedRoleMembership
**********************************************/
export interface scopedRoleMembership  {
	administrativeUnitId: string;
	roleId: string;
	roleMemberInfo: ComplexTypes.identity;

}
/*********************************************
* calendar
**********************************************/
export interface calendar  {
	allowedOnlineMeetingProviders: EnumTypes.onlineMeetingProviderType[];
	canEdit: boolean;
	canShare: boolean;
	canViewPrivateItems: boolean;
	changeKey: string;
	color: EnumTypes.calendarColor;
	defaultOnlineMeetingProvider: EnumTypes.onlineMeetingProviderType;
	hexColor: string;
	isDefaultCalendar: boolean;
	isRemovable: boolean;
	isTallyingResponses: boolean;
	name: string;
	owner: ComplexTypes.emailAddress;
	calendarPermissions: IBaseResult<calendarPermission[]>;
	calendarView: IBaseResult<event[]>;
	events: IBaseResult<event[]>;
	multiValueExtendedProperties: IBaseResult<multiValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties: IBaseResult<singleValueLegacyExtendedProperty[]>;
}
/*********************************************
* calendarGroup
**********************************************/
export interface calendarGroup  {
	changeKey: string;
	classId: any;
	name: string;
	calendars: IBaseResult<calendar[]>;
}
/*********************************************
* outlookItem
**********************************************/
export interface outlookItem  {
	categories: Array<string>[];
	changeKey: string;
	createdDateTime: any;
	lastModifiedDateTime: any;

}
/*********************************************
* event
**********************************************/
export interface event  {
	allowNewTimeProposals: boolean;
	attendees: ComplexTypes.attendee[];
	body: ComplexTypes.itemBody;
	bodyPreview: string;
	end: ComplexTypes.dateTimeTimeZone;
	hasAttachments: boolean;
	hideAttendees: boolean;
	iCalUId: string;
	importance: EnumTypes.importance;
	isAllDay: boolean;
	isCancelled: boolean;
	isDraft: boolean;
	isOnlineMeeting: boolean;
	isOrganizer: boolean;
	isReminderOn: boolean;
	location: ComplexTypes.location;
	locations: ComplexTypes.location[];
	onlineMeeting: ComplexTypes.onlineMeetingInfo;
	onlineMeetingProvider: EnumTypes.onlineMeetingProviderType;
	onlineMeetingUrl: string;
	organizer: ComplexTypes.recipient;
	originalEndTimeZone: string;
	originalStart: any;
	originalStartTimeZone: string;
	recurrence: ComplexTypes.patternedRecurrence;
	reminderMinutesBeforeStart: number;
	responseRequested: boolean;
	responseStatus: ComplexTypes.responseStatus;
	sensitivity: EnumTypes.sensitivity;
	seriesMasterId: string;
	showAs: EnumTypes.freeBusyStatus;
	start: ComplexTypes.dateTimeTimeZone;
	subject: string;
	transactionId: string;
	type: EnumTypes.eventType;
	webLink: string;
	attachments: IBaseResult<attachment[]>;
	calendar: IBaseResult<calendar>;
	extensions: IBaseResult<extension[]>;
	instances: IBaseResult<event[]>;
	multiValueExtendedProperties: IBaseResult<multiValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties: IBaseResult<singleValueLegacyExtendedProperty[]>;
}
/*********************************************
* contactFolder
**********************************************/
export interface contactFolder  {
	displayName: string;
	parentFolderId: string;
	childFolders: IBaseResult<contactFolder[]>;
	contacts: IBaseResult<contact[]>;
	multiValueExtendedProperties: IBaseResult<multiValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties: IBaseResult<singleValueLegacyExtendedProperty[]>;
}
/*********************************************
* contact
**********************************************/
export interface contact  {
	assistantName: string;
	birthday: any;
	businessAddress: ComplexTypes.physicalAddress;
	businessHomePage: string;
	businessPhones: Array<string>[];
	children: Array<string>[];
	companyName: string;
	department: string;
	displayName: string;
	emailAddresses: ComplexTypes.emailAddress[];
	fileAs: string;
	generation: string;
	givenName: string;
	homeAddress: ComplexTypes.physicalAddress;
	homePhones: Array<string>[];
	imAddresses: Array<string>[];
	initials: string;
	jobTitle: string;
	manager: string;
	middleName: string;
	mobilePhone: string;
	nickName: string;
	officeLocation: string;
	otherAddress: ComplexTypes.physicalAddress;
	parentFolderId: string;
	personalNotes: string;
	profession: string;
	spouseName: string;
	surname: string;
	title: string;
	yomiCompanyName: string;
	yomiGivenName: string;
	yomiSurname: string;
	extensions: IBaseResult<extension[]>;
	multiValueExtendedProperties: IBaseResult<multiValueLegacyExtendedProperty[]>;
	photo: IBaseResult<profilePhoto>;
	singleValueExtendedProperties: IBaseResult<singleValueLegacyExtendedProperty[]>;
}
/*********************************************
* inferenceClassification
**********************************************/
export interface inferenceClassification  {

	overrides: IBaseResult<inferenceClassificationOverride[]>;
}
/*********************************************
* mailFolder
**********************************************/
export interface mailFolder  {
	childFolderCount: number;
	displayName: string;
	isHidden: boolean;
	parentFolderId: string;
	totalItemCount: number;
	unreadItemCount: number;
	childFolders: IBaseResult<mailFolder[]>;
	messageRules: IBaseResult<messageRule[]>;
	messages: IBaseResult<message[]>;
	multiValueExtendedProperties: IBaseResult<multiValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties: IBaseResult<singleValueLegacyExtendedProperty[]>;
}
/*********************************************
* message
**********************************************/
export interface message  {
	bccRecipients: ComplexTypes.recipient[];
	body: ComplexTypes.itemBody;
	bodyPreview: string;
	ccRecipients: ComplexTypes.recipient[];
	conversationId: string;
	conversationIndex: any;
	flag: ComplexTypes.followupFlag;
	from: ComplexTypes.recipient;
	hasAttachments: boolean;
	importance: EnumTypes.importance;
	inferenceClassification: EnumTypes.inferenceClassificationType;
	internetMessageHeaders: ComplexTypes.internetMessageHeader[];
	internetMessageId: string;
	isDeliveryReceiptRequested: boolean;
	isDraft: boolean;
	isRead: boolean;
	isReadReceiptRequested: boolean;
	parentFolderId: string;
	receivedDateTime: any;
	replyTo: ComplexTypes.recipient[];
	sender: ComplexTypes.recipient;
	sentDateTime: any;
	subject: string;
	toRecipients: ComplexTypes.recipient[];
	uniqueBody: ComplexTypes.itemBody;
	webLink: string;
	attachments: IBaseResult<attachment[]>;
	extensions: IBaseResult<extension[]>;
	multiValueExtendedProperties: IBaseResult<multiValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties: IBaseResult<singleValueLegacyExtendedProperty[]>;
}
/*********************************************
* outlookUser
**********************************************/
export interface outlookUser  {

	masterCategories: IBaseResult<outlookCategory[]>;
}
/*********************************************
* person
**********************************************/
export interface person  {
	birthday: string;
	companyName: string;
	department: string;
	displayName: string;
	givenName: string;
	imAddress: string;
	isFavorite: boolean;
	jobTitle: string;
	officeLocation: string;
	personNotes: string;
	personType: ComplexTypes.personType;
	phones: ComplexTypes.phone[];
	postalAddresses: ComplexTypes.location[];
	profession: string;
	scoredEmailAddresses: ComplexTypes.scoredEmailAddress[];
	surname: string;
	userPrincipalName: string;
	websites: ComplexTypes.website[];
	yomiCompany: string;

}
/*********************************************
* baseItem
**********************************************/
export interface baseItem  {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	eTag: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	name: string;
	parentReference: ComplexTypes.itemReference;
	webUrl: string;
	createdByUser: IBaseResult<user>;
	lastModifiedByUser: IBaseResult<user>;
}
/*********************************************
* drive
**********************************************/
export interface drive  {
	driveType: string;
	owner: ComplexTypes.identitySet;
	quota: ComplexTypes.quota;
	sharePointIds: ComplexTypes.sharepointIds;
	system: ComplexTypes.systemFacet;
	bundles: IBaseResult<driveItem[]>;
	following: IBaseResult<driveItem[]>;
	items: IBaseResult<driveItem[]>;
	list: IBaseResult<list>;
	root: IBaseResult<driveItem>;
	special: IBaseResult<driveItem[]>;
}
/*********************************************
* site
**********************************************/
export interface site  {
	displayName: string;
	error: ComplexTypes.publicError;
	root: ComplexTypes.root;
	sharepointIds: ComplexTypes.sharepointIds;
	siteCollection: ComplexTypes.siteCollection;
	analytics: IBaseResult<itemAnalytics>;
	columns: IBaseResult<columnDefinition[]>;
	contentTypes: IBaseResult<contentType[]>;
	drive: IBaseResult<drive>;
	drives: IBaseResult<drive[]>;
	externalColumns: IBaseResult<columnDefinition[]>;
	items: IBaseResult<baseItem[]>;
	lists: IBaseResult<list[]>;
	operations: IBaseResult<richLongRunningOperation[]>;
	permissions: IBaseResult<permission[]>;
	sites: IBaseResult<site[]>;
	termStore: IBaseResult<store>;
	termStores: IBaseResult<store[]>;
	onenote: IBaseResult<onenote>;
}
/*********************************************
* extension
**********************************************/
export interface extension  {


}
/*********************************************
* agreementAcceptance
**********************************************/
export interface agreementAcceptance  {
	agreementFileId: string;
	agreementId: string;
	deviceDisplayName: string;
	deviceId: string;
	deviceOSType: string;
	deviceOSVersion: string;
	expirationDateTime: any;
	recordedDateTime: any;
	state: EnumTypes.agreementAcceptanceState;
	userDisplayName: string;
	userEmail: string;
	userId: string;
	userPrincipalName: string;

}
/*********************************************
* managedDevice
**********************************************/
export interface managedDevice  {
	activationLockBypassCode: string;
	androidSecurityPatchLevel: string;
	azureADDeviceId: string;
	azureADRegistered: boolean;
	complianceGracePeriodExpirationDateTime: any;
	complianceState: EnumTypes.complianceState;
	configurationManagerClientEnabledFeatures: ComplexTypes.configurationManagerClientEnabledFeatures;
	deviceActionResults: ComplexTypes.deviceActionResult[];
	deviceCategoryDisplayName: string;
	deviceEnrollmentType: EnumTypes.deviceEnrollmentType;
	deviceHealthAttestationState: ComplexTypes.deviceHealthAttestationState;
	deviceName: string;
	deviceRegistrationState: EnumTypes.deviceRegistrationState;
	easActivated: boolean;
	easActivationDateTime: any;
	easDeviceId: string;
	emailAddress: string;
	enrolledDateTime: any;
	ethernetMacAddress: string;
	exchangeAccessState: EnumTypes.deviceManagementExchangeAccessState;
	exchangeAccessStateReason: EnumTypes.deviceManagementExchangeAccessStateReason;
	exchangeLastSuccessfulSyncDateTime: any;
	freeStorageSpaceInBytes: number;
	iccid: string;
	imei: string;
	isEncrypted: boolean;
	isSupervised: boolean;
	jailBroken: string;
	lastSyncDateTime: any;
	managedDeviceName: string;
	managedDeviceOwnerType: EnumTypes.managedDeviceOwnerType;
	managementAgent: EnumTypes.managementAgentType;
	manufacturer: string;
	meid: string;
	model: string;
	notes: string;
	operatingSystem: string;
	osVersion: string;
	partnerReportedThreatState: EnumTypes.managedDevicePartnerReportedHealthState;
	phoneNumber: string;
	physicalMemoryInBytes: number;
	remoteAssistanceSessionErrorDetails: string;
	remoteAssistanceSessionUrl: string;
	serialNumber: string;
	subscriberCarrier: string;
	totalStorageSpaceInBytes: number;
	udid: string;
	userDisplayName: string;
	userId: string;
	userPrincipalName: string;
	wiFiMacAddress: string;
	deviceCompliancePolicyStates: IBaseResult<deviceCompliancePolicyState[]>;
	deviceConfigurationStates: IBaseResult<deviceConfigurationState[]>;
	deviceCategory: IBaseResult<deviceCategory>;
}
/*********************************************
* managedAppRegistration
**********************************************/
export interface managedAppRegistration  {
	appIdentifier: ComplexTypes.mobileAppIdentifier;
	applicationVersion: string;
	createdDateTime: any;
	deviceName: string;
	deviceTag: string;
	deviceType: string;
	flaggedReasons: EnumTypes.managedAppFlaggedReason[];
	lastSyncDateTime: any;
	managementSdkVersion: string;
	platformVersion: string;
	userId: string;
	version: string;
	appliedPolicies: IBaseResult<managedAppPolicy[]>;
	intendedPolicies: IBaseResult<managedAppPolicy[]>;
	operations: IBaseResult<managedAppOperation[]>;
}
/*********************************************
* deviceManagementTroubleshootingEvent
**********************************************/
export interface deviceManagementTroubleshootingEvent  {
	correlationId: string;
	eventDateTime: any;

}
/*********************************************
* plannerUser
**********************************************/
export interface plannerUser  {

	plans: IBaseResult<plannerPlan[]>;
	tasks: IBaseResult<plannerTask[]>;
}
/*********************************************
* officeGraphInsights
**********************************************/
export interface officeGraphInsights  {

	shared: IBaseResult<sharedInsight[]>;
	trending: IBaseResult<trending[]>;
	used: IBaseResult<usedInsight[]>;
}
/*********************************************
* userSettings
**********************************************/
export interface userSettings  {
	contributionToContentDiscoveryAsOrganizationDisabled: boolean;
	contributionToContentDiscoveryDisabled: boolean;
	shiftPreferences: IBaseResult<shiftPreferences>;
}
/*********************************************
* onenote
**********************************************/
export interface onenote  {

	notebooks: IBaseResult<notebook[]>;
	operations: IBaseResult<onenoteOperation[]>;
	pages: IBaseResult<onenotePage[]>;
	resources: IBaseResult<onenoteResource[]>;
	sectionGroups: IBaseResult<sectionGroup[]>;
	sections: IBaseResult<onenoteSection[]>;
}
/*********************************************
* profilePhoto
**********************************************/
export interface profilePhoto  {
	height: number;
	width: number;

}
/*********************************************
* userActivity
**********************************************/
export interface userActivity  {
	activationUrl: string;
	activitySourceHost: string;
	appActivityId: string;
	appDisplayName: string;
	contentInfo: ComplexTypes.Json;
	contentUrl: string;
	createdDateTime: any;
	expirationDateTime: any;
	fallbackUrl: string;
	lastModifiedDateTime: any;
	status: EnumTypes.status;
	userTimezone: string;
	visualElements: ComplexTypes.visualInfo;
	historyItems: IBaseResult<activityHistoryItem[]>;
}
/*********************************************
* onlineMeeting
**********************************************/
export interface onlineMeeting  {
	allowAttendeeToEnableCamera: boolean;
	allowAttendeeToEnableMic: boolean;
	allowedPresenters: EnumTypes.onlineMeetingPresenters;
	allowMeetingChat: EnumTypes.meetingChatMode;
	allowTeamworkReactions: boolean;
	attendeeReport: any;
	audioConferencing: ComplexTypes.audioConferencing;
	broadcastSettings: ComplexTypes.broadcastMeetingSettings;
	chatInfo: ComplexTypes.chatInfo;
	creationDateTime: any;
	endDateTime: any;
	externalId: string;
	isBroadcast: boolean;
	isEntryExitAnnounced: boolean;
	joinInformation: ComplexTypes.itemBody;
	joinWebUrl: string;
	lobbyBypassSettings: ComplexTypes.lobbyBypassSettings;
	participants: ComplexTypes.meetingParticipants;
	recordAutomatically: boolean;
	startDateTime: any;
	subject: string;
	videoTeleconferenceId: string;
	attendanceReports: IBaseResult<meetingAttendanceReport[]>;
}
/*********************************************
* presence
**********************************************/
export interface presence  {
	activity: string;
	availability: string;

}
/*********************************************
* authentication
**********************************************/
export interface authentication  {

	emailMethods: IBaseResult<emailAuthenticationMethod[]>;
	fido2Methods: IBaseResult<fido2AuthenticationMethod[]>;
	methods: IBaseResult<authenticationMethod[]>;
	microsoftAuthenticatorMethods: IBaseResult<microsoftAuthenticatorAuthenticationMethod[]>;
	operations: IBaseResult<longRunningOperation[]>;
	passwordMethods: IBaseResult<passwordAuthenticationMethod[]>;
	phoneMethods: IBaseResult<phoneAuthenticationMethod[]>;
	softwareOathMethods: IBaseResult<softwareOathAuthenticationMethod[]>;
	temporaryAccessPassMethods: IBaseResult<temporaryAccessPassAuthenticationMethod[]>;
	windowsHelloForBusinessMethods: IBaseResult<windowsHelloForBusinessAuthenticationMethod[]>;
}
/*********************************************
* chat
**********************************************/
export interface chat  {
	chatType: EnumTypes.chatType;
	createdDateTime: any;
	lastUpdatedDateTime: any;
	onlineMeetingInfo: ComplexTypes.teamworkOnlineMeetingInfo;
	tenantId: string;
	topic: string;
	webUrl: string;
	installedApps: IBaseResult<teamsAppInstallation[]>;
	members: IBaseResult<conversationMember[]>;
	messages: IBaseResult<chatMessage[]>;
	tabs: IBaseResult<teamsTab[]>;
}
/*********************************************
* team
**********************************************/
export interface team  {
	classification: string;
	createdDateTime: any;
	description: string;
	displayName: string;
	funSettings: ComplexTypes.teamFunSettings;
	guestSettings: ComplexTypes.teamGuestSettings;
	internalId: string;
	isArchived: boolean;
	memberSettings: ComplexTypes.teamMemberSettings;
	messagingSettings: ComplexTypes.teamMessagingSettings;
	specialization: EnumTypes.teamSpecialization;
	summary: ComplexTypes.teamSummary;
	tenantId: string;
	visibility: EnumTypes.teamVisibilityType;
	webUrl: string;
	allChannels: IBaseResult<channel[]>;
	channels: IBaseResult<channel[]>;
	group: IBaseResult<group>;
	incomingChannels: IBaseResult<channel[]>;
	installedApps: IBaseResult<teamsAppInstallation[]>;
	members: IBaseResult<conversationMember[]>;
	operations: IBaseResult<teamsAsyncOperation[]>;
	photo: IBaseResult<profilePhoto>;
	primaryChannel: IBaseResult<channel>;
	template: IBaseResult<teamsTemplate>;
	schedule: IBaseResult<schedule>;
}
/*********************************************
* userTeamwork
**********************************************/
export interface userTeamwork  {

	associatedTeams: IBaseResult<associatedTeamInfo[]>;
	installedApps: IBaseResult<userScopeTeamsAppInstallation[]>;
}
/*********************************************
* todo
**********************************************/
export interface todo  {

	lists: IBaseResult<todoTaskList[]>;
}
/*********************************************
* application
**********************************************/
export interface application  {
	addIns: ComplexTypes.addIn[];
	api: ComplexTypes.apiApplication;
	appId: string;
	applicationTemplateId: string;
	appRoles: ComplexTypes.appRole[];
	certification: ComplexTypes.certification;
	createdDateTime: any;
	description: string;
	disabledByMicrosoftStatus: string;
	displayName: string;
	groupMembershipClaims: string;
	identifierUris: Array<string>[];
	info: ComplexTypes.informationalUrl;
	isDeviceOnlyAuthSupported: boolean;
	isFallbackPublicClient: boolean;
	keyCredentials: ComplexTypes.keyCredential[];
	logo: any;
	notes: string;
	oauth2RequirePostResponse: boolean;
	optionalClaims: ComplexTypes.optionalClaims;
	parentalControlSettings: ComplexTypes.parentalControlSettings;
	passwordCredentials: ComplexTypes.passwordCredential[];
	publicClient: ComplexTypes.publicClientApplication;
	publisherDomain: string;
	requiredResourceAccess: ComplexTypes.requiredResourceAccess[];
	samlMetadataUrl: string;
	serviceManagementReference: string;
	signInAudience: string;
	spa: ComplexTypes.spaApplication;
	tags: Array<string>[];
	tokenEncryptionKeyId: any;
	verifiedPublisher: ComplexTypes.verifiedPublisher;
	web: ComplexTypes.webApplication;
	createdOnBehalfOf: IBaseResult<directoryObject>;
	extensionProperties: IBaseResult<extensionProperty[]>;
	federatedIdentityCredentials: IBaseResult<federatedIdentityCredential[]>;
	homeRealmDiscoveryPolicies: IBaseResult<homeRealmDiscoveryPolicy[]>;
	owners: IBaseResult<directoryObject[]>;
	tokenIssuancePolicies: IBaseResult<tokenIssuancePolicy[]>;
	tokenLifetimePolicies: IBaseResult<tokenLifetimePolicy[]>;
}
/*********************************************
* servicePrincipal
**********************************************/
export interface servicePrincipal  {
	accountEnabled: boolean;
	addIns: ComplexTypes.addIn[];
	alternativeNames: Array<string>[];
	appDescription: string;
	appDisplayName: string;
	appId: string;
	applicationTemplateId: string;
	appOwnerOrganizationId: any;
	appRoleAssignmentRequired: boolean;
	appRoles: ComplexTypes.appRole[];
	description: string;
	disabledByMicrosoftStatus: string;
	displayName: string;
	homepage: string;
	info: ComplexTypes.informationalUrl;
	keyCredentials: ComplexTypes.keyCredential[];
	loginUrl: string;
	logoutUrl: string;
	notes: string;
	notificationEmailAddresses: Array<string>[];
	oauth2PermissionScopes: ComplexTypes.permissionScope[];
	passwordCredentials: ComplexTypes.passwordCredential[];
	preferredSingleSignOnMode: string;
	preferredTokenSigningKeyThumbprint: string;
	replyUrls: Array<string>[];
	resourceSpecificApplicationPermissions: ComplexTypes.resourceSpecificPermission[];
	samlSingleSignOnSettings: ComplexTypes.samlSingleSignOnSettings;
	servicePrincipalNames: Array<string>[];
	servicePrincipalType: string;
	signInAudience: string;
	tags: Array<string>[];
	tokenEncryptionKeyId: any;
	appRoleAssignedTo: IBaseResult<appRoleAssignment[]>;
	appRoleAssignments: IBaseResult<appRoleAssignment[]>;
	claimsMappingPolicies: IBaseResult<claimsMappingPolicy[]>;
	createdObjects: IBaseResult<directoryObject[]>;
	delegatedPermissionClassifications: IBaseResult<delegatedPermissionClassification[]>;
	endpoints: IBaseResult<ComplexTypes.endpoint[]>;
	federatedIdentityCredentials: IBaseResult<federatedIdentityCredential[]>;
	homeRealmDiscoveryPolicies: IBaseResult<homeRealmDiscoveryPolicy[]>;
	memberOf: IBaseResult<directoryObject[]>;
	oauth2PermissionGrants: IBaseResult<oAuth2PermissionGrant[]>;
	ownedObjects: IBaseResult<directoryObject[]>;
	owners: IBaseResult<directoryObject[]>;
	tokenIssuancePolicies: IBaseResult<tokenIssuancePolicy[]>;
	tokenLifetimePolicies: IBaseResult<tokenLifetimePolicy[]>;
	transitiveMemberOf: IBaseResult<directoryObject[]>;
}
/*********************************************
* extensionProperty
**********************************************/
export interface extensionProperty  {
	appDisplayName: string;
	dataType: string;
	isSyncedFromOnPremises: boolean;
	name: string;
	targetObjects: Array<string>[];

}
/*********************************************
* federatedIdentityCredential
**********************************************/
export interface federatedIdentityCredential  {
	audiences: Array<string>[];
	description: string;
	issuer: string;
	name: string;
	subject: string;

}
/*********************************************
* policyBase
**********************************************/
export interface policyBase  {
	description: string;
	displayName: string;

}
/*********************************************
* stsPolicy
**********************************************/
export interface stsPolicy  {
	definition: Array<string>[];
	isOrganizationDefault: boolean;
	appliesTo: IBaseResult<directoryObject[]>;
}
/*********************************************
* homeRealmDiscoveryPolicy
**********************************************/
export interface homeRealmDiscoveryPolicy  {


}
/*********************************************
* tokenIssuancePolicy
**********************************************/
export interface tokenIssuancePolicy  {


}
/*********************************************
* tokenLifetimePolicy
**********************************************/
export interface tokenLifetimePolicy  {


}
/*********************************************
* applicationTemplate
**********************************************/
export interface applicationTemplate  {
	categories: Array<string>[];
	description: string;
	displayName: string;
	homePageUrl: string;
	logoUrl: string;
	publisher: string;
	supportedProvisioningTypes: Array<string>[];
	supportedSingleSignOnModes: Array<string>[];

}
/*********************************************
* claimsMappingPolicy
**********************************************/
export interface claimsMappingPolicy  {


}
/*********************************************
* delegatedPermissionClassification
**********************************************/
export interface delegatedPermissionClassification  {
	classification: EnumTypes.permissionClassificationType;
	permissionId: string;
	permissionName: string;

}
/*********************************************
* endpoint
**********************************************/
export interface endpoint  {
	capability: string;
	providerId: string;
	providerName: string;
	providerResourceId: string;
	uri: string;

}
/*********************************************
* authenticationMethodConfiguration
**********************************************/
export interface authenticationMethodConfiguration  {
	state: EnumTypes.authenticationMethodState;

}
/*********************************************
* authenticationMethodsPolicy
**********************************************/
export interface authenticationMethodsPolicy  {
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	policyVersion: string;
	reconfirmationInDays: number;
	registrationEnforcement: ComplexTypes.registrationEnforcement;
	authenticationMethodConfigurations: IBaseResult<authenticationMethodConfiguration[]>;
}
/*********************************************
* authenticationMethodTarget
**********************************************/
export interface authenticationMethodTarget  {
	isRegistrationRequired: boolean;
	targetType: EnumTypes.authenticationMethodTargetType;

}
/*********************************************
* emailAuthenticationMethodConfiguration
**********************************************/
export interface emailAuthenticationMethodConfiguration  {
	allowExternalIdToUseEmailOtp: EnumTypes.externalEmailOtpState;
	includeTargets: IBaseResult<authenticationMethodTarget[]>;
}
/*********************************************
* fido2AuthenticationMethodConfiguration
**********************************************/
export interface fido2AuthenticationMethodConfiguration  {
	isAttestationEnforced: boolean;
	isSelfServiceRegistrationAllowed: boolean;
	keyRestrictions: ComplexTypes.fido2KeyRestrictions;
	includeTargets: IBaseResult<authenticationMethodTarget[]>;
}
/*********************************************
* microsoftAuthenticatorAuthenticationMethodConfiguration
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodConfiguration  {

	includeTargets: IBaseResult<microsoftAuthenticatorAuthenticationMethodTarget[]>;
}
/*********************************************
* microsoftAuthenticatorAuthenticationMethodTarget
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodTarget  {
	authenticationMode: EnumTypes.microsoftAuthenticatorAuthenticationMode;

}
/*********************************************
* policyRoot
**********************************************/
export interface policyRoot  {

	authenticationMethodsPolicy: IBaseResult<authenticationMethodsPolicy>;
	authenticationFlowsPolicy: IBaseResult<authenticationFlowsPolicy>;
	activityBasedTimeoutPolicies: IBaseResult<activityBasedTimeoutPolicy[]>;
	authorizationPolicy: IBaseResult<authorizationPolicy>;
	claimsMappingPolicies: IBaseResult<claimsMappingPolicy[]>;
	crossTenantAccessPolicy: IBaseResult<crossTenantAccessPolicy>;
	homeRealmDiscoveryPolicies: IBaseResult<homeRealmDiscoveryPolicy[]>;
	permissionGrantPolicies: IBaseResult<permissionGrantPolicy[]>;
	tokenIssuancePolicies: IBaseResult<tokenIssuancePolicy[]>;
	tokenLifetimePolicies: IBaseResult<tokenLifetimePolicy[]>;
	featureRolloutPolicies: IBaseResult<featureRolloutPolicy[]>;
	adminConsentRequestPolicy: IBaseResult<adminConsentRequestPolicy>;
	conditionalAccessPolicies: IBaseResult<conditionalAccessPolicy[]>;
	identitySecurityDefaultsEnforcementPolicy: IBaseResult<identitySecurityDefaultsEnforcementPolicy>;
	roleManagementPolicies: IBaseResult<unifiedRoleManagementPolicy[]>;
	roleManagementPolicyAssignments: IBaseResult<unifiedRoleManagementPolicyAssignment[]>;
}
/*********************************************
* authenticationFlowsPolicy
**********************************************/
export interface authenticationFlowsPolicy  {
	description: string;
	displayName: string;
	selfServiceSignUp: ComplexTypes.selfServiceSignUpAuthenticationFlowConfiguration;

}
/*********************************************
* activityBasedTimeoutPolicy
**********************************************/
export interface activityBasedTimeoutPolicy  {


}
/*********************************************
* authorizationPolicy
**********************************************/
export interface authorizationPolicy  {
	allowedToSignUpEmailBasedSubscriptions: boolean;
	allowedToUseSSPR: boolean;
	allowEmailVerifiedUsersToJoinOrganization: boolean;
	allowInvitesFrom: EnumTypes.allowInvitesFrom;
	blockMsolPowerShell: boolean;
	defaultUserRolePermissions: ComplexTypes.defaultUserRolePermissions;
	guestUserRoleId: any;

}
/*********************************************
* crossTenantAccessPolicy
**********************************************/
export interface crossTenantAccessPolicy  {

	default: IBaseResult<crossTenantAccessPolicyConfigurationDefault>;
	partners: IBaseResult<crossTenantAccessPolicyConfigurationPartner[]>;
}
/*********************************************
* permissionGrantPolicy
**********************************************/
export interface permissionGrantPolicy  {

	excludes: IBaseResult<permissionGrantConditionSet[]>;
	includes: IBaseResult<permissionGrantConditionSet[]>;
}
/*********************************************
* featureRolloutPolicy
**********************************************/
export interface featureRolloutPolicy  {
	description: string;
	displayName: string;
	feature: EnumTypes.stagedFeatureName;
	isAppliedToOrganization: boolean;
	isEnabled: boolean;
	appliesTo: IBaseResult<directoryObject[]>;
}
/*********************************************
* adminConsentRequestPolicy
**********************************************/
export interface adminConsentRequestPolicy  {
	isEnabled: boolean;
	notifyReviewers: boolean;
	remindersEnabled: boolean;
	requestDurationInDays: number;
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	version: number;

}
/*********************************************
* conditionalAccessPolicy
**********************************************/
export interface conditionalAccessPolicy  {
	conditions: ComplexTypes.conditionalAccessConditionSet;
	createdDateTime: any;
	description: string;
	displayName: string;
	grantControls: ComplexTypes.conditionalAccessGrantControls;
	modifiedDateTime: any;
	sessionControls: ComplexTypes.conditionalAccessSessionControls;
	state: EnumTypes.conditionalAccessPolicyState;

}
/*********************************************
* identitySecurityDefaultsEnforcementPolicy
**********************************************/
export interface identitySecurityDefaultsEnforcementPolicy  {
	isEnabled: boolean;

}
/*********************************************
* unifiedRoleManagementPolicy
**********************************************/
export interface unifiedRoleManagementPolicy  {
	description: string;
	displayName: string;
	isOrganizationDefault: boolean;
	lastModifiedBy: ComplexTypes.identity;
	lastModifiedDateTime: any;
	scopeId: string;
	scopeType: string;
	effectiveRules: IBaseResult<unifiedRoleManagementPolicyRule[]>;
	rules: IBaseResult<unifiedRoleManagementPolicyRule[]>;
}
/*********************************************
* unifiedRoleManagementPolicyAssignment
**********************************************/
export interface unifiedRoleManagementPolicyAssignment  {
	policyId: string;
	roleDefinitionId: string;
	scopeId: string;
	scopeType: string;
	policy: IBaseResult<unifiedRoleManagementPolicy>;
}
/*********************************************
* temporaryAccessPassAuthenticationMethodConfiguration
**********************************************/
export interface temporaryAccessPassAuthenticationMethodConfiguration  {
	defaultLength: number;
	defaultLifetimeInMinutes: number;
	isUsableOnce: boolean;
	maximumLifetimeInMinutes: number;
	minimumLifetimeInMinutes: number;
	includeTargets: IBaseResult<authenticationMethodTarget[]>;
}
/*********************************************
* bitlocker
**********************************************/
export interface bitlocker  {

	recoveryKeys: IBaseResult<bitlockerRecoveryKey[]>;
}
/*********************************************
* bitlockerRecoveryKey
**********************************************/
export interface bitlockerRecoveryKey  {
	createdDateTime: any;
	deviceId: string;
	key: string;
	volumeType: EnumTypes.volumeType;

}
/*********************************************
* informationProtection
**********************************************/
export interface informationProtection  {

	bitlocker: IBaseResult<bitlocker>;
	threatAssessmentRequests: IBaseResult<threatAssessmentRequest[]>;
}
/*********************************************
* threatAssessmentRequest
**********************************************/
export interface threatAssessmentRequest  {
	category: EnumTypes.threatCategory;
	contentType: EnumTypes.threatAssessmentContentType;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	expectedAssessment: EnumTypes.threatExpectedAssessment;
	requestSource: EnumTypes.threatAssessmentRequestSource;
	status: EnumTypes.threatAssessmentStatus;
	results: IBaseResult<threatAssessmentResult[]>;
}
/*********************************************
* bookingAppointment
**********************************************/
export interface bookingAppointment  {
	additionalInformation: string;
	customers: ComplexTypes.bookingCustomerInformationBase[];
	customerTimeZone: string;
	duration: number;
	endDateTime: ComplexTypes.dateTimeTimeZone;
	filledAttendeesCount: number;
	isLocationOnline: boolean;
	joinWebUrl: string;
	maximumAttendeesCount: number;
	optOutOfCustomerEmail: boolean;
	postBuffer: number;
	preBuffer: number;
	price: number;
	priceType: EnumTypes.bookingPriceType;
	reminders: ComplexTypes.bookingReminder[];
	selfServiceAppointmentId: string;
	serviceId: string;
	serviceLocation: ComplexTypes.location;
	serviceName: string;
	serviceNotes: string;
	smsNotificationsEnabled: boolean;
	staffMemberIds: Array<string>[];
	startDateTime: ComplexTypes.dateTimeTimeZone;

}
/*********************************************
* bookingBusiness
**********************************************/
export interface bookingBusiness  {
	address: ComplexTypes.physicalAddress;
	businessHours: ComplexTypes.bookingWorkHours[];
	businessType: string;
	defaultCurrencyIso: string;
	displayName: string;
	email: string;
	isPublished: boolean;
	phone: string;
	publicUrl: string;
	schedulingPolicy: ComplexTypes.bookingSchedulingPolicy;
	webSiteUrl: string;
	appointments: IBaseResult<bookingAppointment[]>;
	calendarView: IBaseResult<bookingAppointment[]>;
	customers: IBaseResult<bookingCustomerBase[]>;
	customQuestions: IBaseResult<bookingCustomQuestion[]>;
	services: IBaseResult<bookingService[]>;
	staffMembers: IBaseResult<bookingStaffMemberBase[]>;
}
/*********************************************
* bookingCustomerBase
**********************************************/
export interface bookingCustomerBase  {


}
/*********************************************
* bookingCustomQuestion
**********************************************/
export interface bookingCustomQuestion  {
	answerInputType: EnumTypes.answerInputType;
	answerOptions: Array<string>[];
	displayName: string;

}
/*********************************************
* bookingService
**********************************************/
export interface bookingService  {
	additionalInformation: string;
	customQuestions: ComplexTypes.bookingQuestionAssignment[];
	defaultDuration: number;
	defaultLocation: ComplexTypes.location;
	defaultPrice: number;
	defaultPriceType: EnumTypes.bookingPriceType;
	defaultReminders: ComplexTypes.bookingReminder[];
	description: string;
	displayName: string;
	isHiddenFromCustomers: boolean;
	isLocationOnline: boolean;
	maximumAttendeesCount: number;
	notes: string;
	postBuffer: number;
	preBuffer: number;
	schedulingPolicy: ComplexTypes.bookingSchedulingPolicy;
	smsNotificationsEnabled: boolean;
	staffMemberIds: Array<string>[];
	webUrl: string;

}
/*********************************************
* bookingStaffMemberBase
**********************************************/
export interface bookingStaffMemberBase  {


}
/*********************************************
* bookingCurrency
**********************************************/
export interface bookingCurrency  {
	symbol: string;

}
/*********************************************
* bookingCustomer
**********************************************/
export interface bookingCustomer  {
	addresses: ComplexTypes.physicalAddress[];
	displayName: string;
	emailAddress: string;
	phones: ComplexTypes.phone[];

}
/*********************************************
* bookingStaffMember
**********************************************/
export interface bookingStaffMember  {
	availabilityIsAffectedByPersonalCalendar: boolean;
	displayName: string;
	emailAddress: string;
	role: EnumTypes.bookingStaffRole;
	timeZone: string;
	useBusinessHours: boolean;
	workingHours: ComplexTypes.bookingWorkHours[];

}
/*********************************************
* solutionsRoot
**********************************************/
export interface solutionsRoot  {

	bookingBusinesses: IBaseResult<bookingBusiness[]>;
	bookingCurrencies: IBaseResult<bookingCurrency[]>;
}
/*********************************************
* authoredNote
**********************************************/
export interface authoredNote  {
	author: ComplexTypes.identity;
	content: ComplexTypes.itemBody;
	createdDateTime: any;

}
/*********************************************
* privacy
**********************************************/
export interface privacy  {

	subjectRightsRequests: IBaseResult<subjectRightsRequest[]>;
}
/*********************************************
* subjectRightsRequest
**********************************************/
export interface subjectRightsRequest  {
	assignedTo: ComplexTypes.identity;
	closedDateTime: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	dataSubject: ComplexTypes.dataSubject;
	dataSubjectType: EnumTypes.dataSubjectType;
	description: string;
	displayName: string;
	history: ComplexTypes.subjectRightsRequestHistory[];
	insight: ComplexTypes.subjectRightsRequestDetail;
	internalDueDateTime: any;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	regulations: Array<string>[];
	stages: ComplexTypes.subjectRightsRequestStageDetail[];
	status: EnumTypes.subjectRightsRequestStatus;
	type: EnumTypes.subjectRightsRequestType;
	notes: IBaseResult<authoredNote[]>;
	team: IBaseResult<team>;
}
/*********************************************
* channel
**********************************************/
export interface channel  {
	createdDateTime: any;
	description: string;
	displayName: string;
	email: string;
	isFavoriteByDefault: boolean;
	membershipType: EnumTypes.channelMembershipType;
	tenantId: string;
	webUrl: string;
	filesFolder: IBaseResult<driveItem>;
	members: IBaseResult<conversationMember[]>;
	messages: IBaseResult<chatMessage[]>;
	sharedWithTeams: IBaseResult<sharedWithChannelTeamInfo[]>;
	tabs: IBaseResult<teamsTab[]>;
}
/*********************************************
* group
**********************************************/
export interface group  {
	createdDateTime: any;
	description: string;
	displayName: string;
	parentSiteId: string;
	scope: EnumTypes.termGroupScope;
	sets: IBaseResult<set[]>;
}
/*********************************************
* teamsAppInstallation
**********************************************/
export interface teamsAppInstallation  {

	teamsApp: IBaseResult<teamsApp>;
	teamsAppDefinition: IBaseResult<teamsAppDefinition>;
}
/*********************************************
* conversationMember
**********************************************/
export interface conversationMember  {
	displayName: string;
	roles: Array<string>[];
	visibleHistoryStartDateTime: any;

}
/*********************************************
* teamsAsyncOperation
**********************************************/
export interface teamsAsyncOperation  {
	attemptsCount: number;
	createdDateTime: any;
	error: ComplexTypes.operationError;
	lastActionDateTime: any;
	operationType: EnumTypes.teamsAsyncOperationType;
	status: EnumTypes.teamsAsyncOperationStatus;
	targetResourceId: string;
	targetResourceLocation: string;

}
/*********************************************
* teamsTemplate
**********************************************/
export interface teamsTemplate  {


}
/*********************************************
* schedule
**********************************************/
export interface schedule  {
	enabled: boolean;
	offerShiftRequestsEnabled: boolean;
	openShiftsEnabled: boolean;
	provisionStatus: EnumTypes.operationStatus;
	provisionStatusCode: string;
	swapShiftsRequestsEnabled: boolean;
	timeClockEnabled: boolean;
	timeOffRequestsEnabled: boolean;
	timeZone: string;
	workforceIntegrationIds: Array<string>[];
	offerShiftRequests: IBaseResult<offerShiftRequest[]>;
	openShiftChangeRequests: IBaseResult<openShiftChangeRequest[]>;
	openShifts: IBaseResult<openShift[]>;
	schedulingGroups: IBaseResult<schedulingGroup[]>;
	shifts: IBaseResult<shift[]>;
	swapShiftsChangeRequests: IBaseResult<swapShiftsChangeRequest[]>;
	timeOffReasons: IBaseResult<timeOffReason[]>;
	timeOffRequests: IBaseResult<timeOffRequest[]>;
	timesOff: IBaseResult<timeOff[]>;
}
/*********************************************
* compliance
**********************************************/
export interface compliance  {


}
/*********************************************
* resourceSpecificPermissionGrant
**********************************************/
export interface resourceSpecificPermissionGrant  {
	clientAppId: string;
	clientId: string;
	permission: string;
	permissionType: string;
	resourceAppId: string;

}
/*********************************************
* groupSetting
**********************************************/
export interface groupSetting  {
	displayName: string;
	templateId: string;
	values: ComplexTypes.settingValue[];

}
/*********************************************
* conversation
**********************************************/
export interface conversation  {
	hasAttachments: boolean;
	lastDeliveredDateTime: any;
	preview: string;
	topic: string;
	uniqueSenders: Array<string>[];
	threads: IBaseResult<conversationThread[]>;
}
/*********************************************
* conversationThread
**********************************************/
export interface conversationThread  {
	ccRecipients: ComplexTypes.recipient[];
	hasAttachments: boolean;
	isLocked: boolean;
	lastDeliveredDateTime: any;
	preview: string;
	topic: string;
	toRecipients: ComplexTypes.recipient[];
	uniqueSenders: Array<string>[];
	posts: IBaseResult<post[]>;
}
/*********************************************
* groupLifecyclePolicy
**********************************************/
export interface groupLifecyclePolicy  {
	alternateNotificationEmails: string;
	groupLifetimeInDays: number;
	managedGroupTypes: string;

}
/*********************************************
* plannerGroup
**********************************************/
export interface plannerGroup  {

	plans: IBaseResult<plannerPlan[]>;
}
/*********************************************
* security
**********************************************/
export interface security  {

	cases: IBaseResult<casesRoot>;
	alerts: IBaseResult<alert[]>;
	secureScoreControlProfiles: IBaseResult<secureScoreControlProfile[]>;
	secureScores: IBaseResult<secureScore[]>;
}
/*********************************************
* alert
**********************************************/
export interface alert  {
	activityGroupName: string;
	alertDetections: ComplexTypes.alertDetection[];
	assignedTo: string;
	azureSubscriptionId: string;
	azureTenantId: string;
	category: string;
	closedDateTime: any;
	cloudAppStates: ComplexTypes.cloudAppSecurityState[];
	comments: Array<string>[];
	confidence: number;
	createdDateTime: any;
	description: string;
	detectionIds: Array<string>[];
	eventDateTime: any;
	feedback: EnumTypes.alertFeedback;
	fileStates: ComplexTypes.fileSecurityState[];
	historyStates: ComplexTypes.alertHistoryState[];
	hostStates: ComplexTypes.hostSecurityState[];
	incidentIds: Array<string>[];
	investigationSecurityStates: ComplexTypes.investigationSecurityState[];
	lastEventDateTime: any;
	lastModifiedDateTime: any;
	malwareStates: ComplexTypes.malwareState[];
	messageSecurityStates: ComplexTypes.messageSecurityState[];
	networkConnections: ComplexTypes.networkConnection[];
	processes: ComplexTypes.process[];
	recommendedActions: Array<string>[];
	registryKeyStates: ComplexTypes.registryKeyState[];
	securityResources: ComplexTypes.securityResource[];
	severity: EnumTypes.alertSeverity;
	sourceMaterials: Array<string>[];
	status: EnumTypes.alertStatus;
	tags: Array<string>[];
	title: string;
	triggers: ComplexTypes.alertTrigger[];
	uriClickSecurityStates: ComplexTypes.uriClickSecurityState[];
	userStates: ComplexTypes.userSecurityState[];
	vendorInformation: ComplexTypes.securityVendorInformation;
	vulnerabilityStates: ComplexTypes.vulnerabilityState[];

}
/*********************************************
* secureScoreControlProfile
**********************************************/
export interface secureScoreControlProfile  {
	actionType: string;
	actionUrl: string;
	azureTenantId: string;
	complianceInformation: ComplexTypes.complianceInformation[];
	controlCategory: string;
	controlStateUpdates: ComplexTypes.secureScoreControlStateUpdate[];
	deprecated: boolean;
	implementationCost: string;
	lastModifiedDateTime: any;
	maxScore: number;
	rank: number;
	remediation: string;
	remediationImpact: string;
	service: string;
	threats: Array<string>[];
	tier: string;
	title: string;
	userImpact: string;
	vendorInformation: ComplexTypes.securityVendorInformation;

}
/*********************************************
* secureScore
**********************************************/
export interface secureScore  {
	activeUserCount: number;
	averageComparativeScores: ComplexTypes.averageComparativeScore[];
	azureTenantId: string;
	controlScores: ComplexTypes.controlScore[];
	createdDateTime: any;
	currentScore: number;
	enabledServices: Array<string>[];
	licensedUserCount: number;
	maxScore: number;
	vendorInformation: ComplexTypes.securityVendorInformation;

}
/*********************************************
* itemAnalytics
**********************************************/
export interface itemAnalytics  {

	allTime: IBaseResult<itemActivityStat>;
	itemActivityStats: IBaseResult<itemActivityStat[]>;
	lastSevenDays: IBaseResult<itemActivityStat>;
}
/*********************************************
* columnDefinition
**********************************************/
export interface columnDefinition  {
	boolean: ComplexTypes.booleanColumn;
	calculated: ComplexTypes.calculatedColumn;
	choice: ComplexTypes.choiceColumn;
	columnGroup: string;
	contentApprovalStatus: ComplexTypes.contentApprovalStatusColumn;
	currency: ComplexTypes.currencyColumn;
	dateTime: ComplexTypes.dateTimeColumn;
	defaultValue: ComplexTypes.defaultColumnValue;
	description: string;
	displayName: string;
	enforceUniqueValues: boolean;
	geolocation: ComplexTypes.geolocationColumn;
	hidden: boolean;
	hyperlinkOrPicture: ComplexTypes.hyperlinkOrPictureColumn;
	indexed: boolean;
	isDeletable: boolean;
	isReorderable: boolean;
	isSealed: boolean;
	lookup: ComplexTypes.lookupColumn;
	name: string;
	number: ComplexTypes.numberColumn;
	personOrGroup: ComplexTypes.personOrGroupColumn;
	propagateChanges: boolean;
	readOnly: boolean;
	required: boolean;
	sourceContentType: ComplexTypes.contentTypeInfo;
	term: ComplexTypes.termColumn;
	text: ComplexTypes.textColumn;
	thumbnail: ComplexTypes.thumbnailColumn;
	type: EnumTypes.columnTypes;
	validation: ComplexTypes.columnValidation;
	sourceColumn: IBaseResult<columnDefinition>;
}
/*********************************************
* contentType
**********************************************/
export interface contentType  {
	associatedHubsUrls: Array<string>[];
	description: string;
	documentSet: ComplexTypes.documentSet;
	documentTemplate: ComplexTypes.documentSetContent;
	group: string;
	hidden: boolean;
	inheritedFrom: ComplexTypes.itemReference;
	isBuiltIn: boolean;
	name: string;
	order: ComplexTypes.contentTypeOrder;
	parentId: string;
	propagateChanges: boolean;
	readOnly: boolean;
	sealed: boolean;
	base: IBaseResult<contentType>;
	baseTypes: IBaseResult<contentType[]>;
	columnLinks: IBaseResult<columnLink[]>;
	columnPositions: IBaseResult<columnDefinition[]>;
	columns: IBaseResult<columnDefinition[]>;
}
/*********************************************
* list
**********************************************/
export interface list  {
	displayName: string;
	list: ComplexTypes.listInfo;
	sharepointIds: ComplexTypes.sharepointIds;
	system: ComplexTypes.systemFacet;
	columns: IBaseResult<columnDefinition[]>;
	contentTypes: IBaseResult<contentType[]>;
	drive: IBaseResult<drive>;
	items: IBaseResult<listItem[]>;
	operations: IBaseResult<richLongRunningOperation[]>;
	subscriptions: IBaseResult<subscription[]>;
}
/*********************************************
* longRunningOperation
**********************************************/
export interface longRunningOperation  {
	createdDateTime: any;
	lastActionDateTime: any;
	resourceLocation: string;
	status: EnumTypes.longRunningOperationStatus;
	statusDetail: string;

}
/*********************************************
* richLongRunningOperation
**********************************************/
export interface richLongRunningOperation  {
	error: ComplexTypes.publicError;
	percentageComplete: number;
	resourceId: string;
	type: string;

}
/*********************************************
* permission
**********************************************/
export interface permission  {
	expirationDateTime: any;
	grantedTo: ComplexTypes.identitySet;
	grantedToIdentities: ComplexTypes.identitySet[];
	grantedToIdentitiesV2: ComplexTypes.sharePointIdentitySet[];
	grantedToV2: ComplexTypes.sharePointIdentitySet;
	hasPassword: boolean;
	inheritedFrom: ComplexTypes.itemReference;
	invitation: ComplexTypes.sharingInvitation;
	link: ComplexTypes.sharingLink;
	roles: Array<string>[];
	shareId: string;

}
/*********************************************
* identityApiConnector
**********************************************/
export interface identityApiConnector  {
	authenticationConfiguration: ComplexTypes.apiAuthenticationConfigurationBase;
	displayName: string;
	targetUrl: string;

}
/*********************************************
* identityProviderBase
**********************************************/
export interface identityProviderBase  {
	displayName: string;

}
/*********************************************
* appleManagedIdentityProvider
**********************************************/
export interface appleManagedIdentityProvider  {
	certificateData: string;
	developerId: string;
	keyId: string;
	serviceId: string;

}
/*********************************************
* identityUserFlow
**********************************************/
export interface identityUserFlow  {
	userFlowType: EnumTypes.userFlowType;
	userFlowTypeVersion: any;

}
/*********************************************
* b2xIdentityUserFlow
**********************************************/
export interface b2xIdentityUserFlow  {
	apiConnectorConfiguration: ComplexTypes.userFlowApiConnectorConfiguration;
	identityProviders: IBaseResult<identityProvider[]>;
	languages: IBaseResult<userFlowLanguageConfiguration[]>;
	userAttributeAssignments: IBaseResult<identityUserFlowAttributeAssignment[]>;
	userFlowIdentityProviders: IBaseResult<identityProviderBase[]>;
}
/*********************************************
* identityProvider
**********************************************/
export interface identityProvider  {
	clientId: string;
	clientSecret: string;
	name: string;
	type: string;

}
/*********************************************
* userFlowLanguageConfiguration
**********************************************/
export interface userFlowLanguageConfiguration  {
	displayName: string;
	isEnabled: boolean;
	defaultPages: IBaseResult<userFlowLanguagePage[]>;
	overridesPages: IBaseResult<userFlowLanguagePage[]>;
}
/*********************************************
* identityUserFlowAttributeAssignment
**********************************************/
export interface identityUserFlowAttributeAssignment  {
	displayName: string;
	isOptional: boolean;
	requiresVerification: boolean;
	userAttributeValues: ComplexTypes.userAttributeValuesItem[];
	userInputType: EnumTypes.identityUserFlowAttributeInputType;
	userAttribute: IBaseResult<identityUserFlowAttribute>;
}
/*********************************************
* builtInIdentityProvider
**********************************************/
export interface builtInIdentityProvider  {
	identityProviderType: string;

}
/*********************************************
* identityUserFlowAttribute
**********************************************/
export interface identityUserFlowAttribute  {
	dataType: EnumTypes.identityUserFlowAttributeDataType;
	description: string;
	displayName: string;
	userFlowAttributeType: EnumTypes.identityUserFlowAttributeType;

}
/*********************************************
* identityBuiltInUserFlowAttribute
**********************************************/
export interface identityBuiltInUserFlowAttribute  {


}
/*********************************************
* identityContainer
**********************************************/
export interface identityContainer  {

	apiConnectors: IBaseResult<identityApiConnector[]>;
	b2xUserFlows: IBaseResult<b2xIdentityUserFlow[]>;
	identityProviders: IBaseResult<identityProviderBase[]>;
	userFlowAttributes: IBaseResult<identityUserFlowAttribute[]>;
	conditionalAccess: IBaseResult<conditionalAccessRoot>;
}
/*********************************************
* conditionalAccessRoot
**********************************************/
export interface conditionalAccessRoot  {

	namedLocations: IBaseResult<namedLocation[]>;
	policies: IBaseResult<conditionalAccessPolicy[]>;
}
/*********************************************
* identityCustomUserFlowAttribute
**********************************************/
export interface identityCustomUserFlowAttribute  {


}
/*********************************************
* socialIdentityProvider
**********************************************/
export interface socialIdentityProvider  {
	clientId: string;
	clientSecret: string;
	identityProviderType: string;

}
/*********************************************
* userFlowLanguagePage
**********************************************/
export interface userFlowLanguagePage  {


}
/*********************************************
* administrativeUnit
**********************************************/
export interface administrativeUnit  {
	description: string;
	displayName: string;
	visibility: string;
	members: IBaseResult<directoryObject[]>;
	scopedRoleMembers: IBaseResult<scopedRoleMembership[]>;
	extensions: IBaseResult<extension[]>;
}
/*********************************************
* appScope
**********************************************/
export interface appScope  {
	displayName: string;
	type: string;

}
/*********************************************
* certificateBasedAuthConfiguration
**********************************************/
export interface certificateBasedAuthConfiguration  {
	certificateAuthorities: ComplexTypes.certificateAuthority[];

}
/*********************************************
* contract
**********************************************/
export interface contract  {
	contractType: string;
	customerId: any;
	defaultDomainName: string;
	displayName: string;

}
/*********************************************
* crossTenantAccessPolicyConfigurationDefault
**********************************************/
export interface crossTenantAccessPolicyConfigurationDefault  {
	b2bCollaborationInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bCollaborationOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	inboundTrust: ComplexTypes.crossTenantAccessPolicyInboundTrust;
	isServiceDefault: boolean;

}
/*********************************************
* crossTenantAccessPolicyConfigurationPartner
**********************************************/
export interface crossTenantAccessPolicyConfigurationPartner  {
	b2bCollaborationInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bCollaborationOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	inboundTrust: ComplexTypes.crossTenantAccessPolicyInboundTrust;
	isServiceProvider: boolean;
	tenantId: string;

}
/*********************************************
* device
**********************************************/
export interface device  {
	accountEnabled: boolean;
	alternativeSecurityIds: ComplexTypes.alternativeSecurityId[];
	approximateLastSignInDateTime: any;
	complianceExpirationDateTime: any;
	deviceId: string;
	deviceMetadata: string;
	deviceVersion: number;
	displayName: string;
	isCompliant: boolean;
	isManaged: boolean;
	mdmAppId: string;
	onPremisesLastSyncDateTime: any;
	onPremisesSyncEnabled: boolean;
	operatingSystem: string;
	operatingSystemVersion: string;
	physicalIds: Array<string>[];
	profileType: string;
	systemLabels: Array<string>[];
	trustType: string;
	memberOf: IBaseResult<directoryObject[]>;
	registeredOwners: IBaseResult<directoryObject[]>;
	registeredUsers: IBaseResult<directoryObject[]>;
	transitiveMemberOf: IBaseResult<directoryObject[]>;
	extensions: IBaseResult<extension[]>;
}
/*********************************************
* directory
**********************************************/
export interface directory  {

	administrativeUnits: IBaseResult<administrativeUnit[]>;
	deletedItems: IBaseResult<directoryObject[]>;
	federationConfigurations: IBaseResult<identityProviderBase[]>;
}
/*********************************************
* directoryObjectPartnerReference
**********************************************/
export interface directoryObjectPartnerReference  {
	description: string;
	displayName: string;
	externalPartnerTenantId: any;
	objectType: string;

}
/*********************************************
* directoryRole
**********************************************/
export interface directoryRole  {
	description: string;
	displayName: string;
	roleTemplateId: string;
	members: IBaseResult<directoryObject[]>;
	scopedMembers: IBaseResult<scopedRoleMembership[]>;
}
/*********************************************
* directoryRoleTemplate
**********************************************/
export interface directoryRoleTemplate  {
	description: string;
	displayName: string;

}
/*********************************************
* domain
**********************************************/
export interface domain  {
	authenticationType: string;
	availabilityStatus: string;
	isAdminManaged: boolean;
	isDefault: boolean;
	isInitial: boolean;
	isRoot: boolean;
	isVerified: boolean;
	manufacturer: string;
	model: string;
	passwordNotificationWindowInDays: number;
	passwordValidityPeriodInDays: number;
	state: ComplexTypes.domainState;
	supportedServices: Array<string>[];
	domainNameReferences: IBaseResult<directoryObject[]>;
	federationConfiguration: IBaseResult<internalDomainFederation[]>;
	serviceConfigurationRecords: IBaseResult<domainDnsRecord[]>;
	verificationDnsRecords: IBaseResult<domainDnsRecord[]>;
}
/*********************************************
* samlOrWsFedProvider
**********************************************/
export interface samlOrWsFedProvider  {
	issuerUri: string;
	metadataExchangeUri: string;
	passiveSignInUri: string;
	preferredAuthenticationProtocol: EnumTypes.authenticationProtocol;
	signingCertificate: string;

}
/*********************************************
* internalDomainFederation
**********************************************/
export interface internalDomainFederation  {
	activeSignInUri: string;
	federatedIdpMfaBehavior: EnumTypes.federatedIdpMfaBehavior;
	isSignedAuthenticationRequestRequired: boolean;
	nextSigningCertificate: string;
	promptLoginBehavior: EnumTypes.promptLoginBehavior;
	signingCertificateUpdateStatus: ComplexTypes.signingCertificateUpdateStatus;
	signOutUri: string;

}
/*********************************************
* domainDnsRecord
**********************************************/
export interface domainDnsRecord  {
	isOptional: boolean;
	label: string;
	recordType: string;
	supportedService: string;
	ttl: number;

}
/*********************************************
* domainDnsCnameRecord
**********************************************/
export interface domainDnsCnameRecord  {
	canonicalName: string;

}
/*********************************************
* domainDnsMxRecord
**********************************************/
export interface domainDnsMxRecord  {
	mailExchange: string;
	preference: number;

}
/*********************************************
* domainDnsSrvRecord
**********************************************/
export interface domainDnsSrvRecord  {
	nameTarget: string;
	port: number;
	priority: number;
	protocol: string;
	service: string;
	weight: number;

}
/*********************************************
* domainDnsTxtRecord
**********************************************/
export interface domainDnsTxtRecord  {
	text: string;

}
/*********************************************
* domainDnsUnavailableRecord
**********************************************/
export interface domainDnsUnavailableRecord  {
	description: string;

}
/*********************************************
* externalDomainName
**********************************************/
export interface externalDomainName  {


}
/*********************************************
* groupSettingTemplate
**********************************************/
export interface groupSettingTemplate  {
	description: string;
	displayName: string;
	values: ComplexTypes.settingTemplateValue[];

}
/*********************************************
* organization
**********************************************/
export interface organization  {
	assignedPlans: ComplexTypes.assignedPlan[];
	businessPhones: Array<string>[];
	city: string;
	country: string;
	countryLetterCode: string;
	createdDateTime: any;
	displayName: string;
	marketingNotificationEmails: Array<string>[];
	onPremisesLastSyncDateTime: any;
	onPremisesSyncEnabled: boolean;
	postalCode: string;
	preferredLanguage: string;
	privacyProfile: ComplexTypes.privacyProfile;
	provisionedPlans: ComplexTypes.provisionedPlan[];
	securityComplianceNotificationMails: Array<string>[];
	securityComplianceNotificationPhones: Array<string>[];
	state: string;
	street: string;
	technicalNotificationMails: Array<string>[];
	tenantType: string;
	verifiedDomains: ComplexTypes.verifiedDomain[];
	mobileDeviceManagementAuthority: EnumTypes.mdmAuthority;
	branding: IBaseResult<organizationalBranding>;
	certificateBasedAuthConfiguration: IBaseResult<certificateBasedAuthConfiguration[]>;
	extensions: IBaseResult<extension[]>;
}
/*********************************************
* organizationalBrandingProperties
**********************************************/
export interface organizationalBrandingProperties  {
	backgroundColor: string;
	backgroundImage: any;
	backgroundImageRelativeUrl: string;
	bannerLogo: any;
	bannerLogoRelativeUrl: string;
	cdnList: Array<string>[];
	signInPageText: string;
	squareLogo: any;
	squareLogoRelativeUrl: string;
	usernameHintText: string;

}
/*********************************************
* organizationalBranding
**********************************************/
export interface organizationalBranding  {

	localizations: IBaseResult<organizationalBrandingLocalization[]>;
}
/*********************************************
* organizationalBrandingLocalization
**********************************************/
export interface organizationalBrandingLocalization  {


}
/*********************************************
* orgContact
**********************************************/
export interface orgContact  {
	addresses: ComplexTypes.physicalOfficeAddress[];
	companyName: string;
	department: string;
	displayName: string;
	givenName: string;
	jobTitle: string;
	mail: string;
	mailNickname: string;
	onPremisesLastSyncDateTime: any;
	onPremisesProvisioningErrors: ComplexTypes.onPremisesProvisioningError[];
	onPremisesSyncEnabled: boolean;
	phones: ComplexTypes.phone[];
	proxyAddresses: Array<string>[];
	surname: string;
	directReports: IBaseResult<directoryObject[]>;
	manager: IBaseResult<directoryObject>;
	memberOf: IBaseResult<directoryObject[]>;
	transitiveMemberOf: IBaseResult<directoryObject[]>;
}
/*********************************************
* permissionGrantConditionSet
**********************************************/
export interface permissionGrantConditionSet  {
	clientApplicationIds: Array<string>[];
	clientApplicationPublisherIds: Array<string>[];
	clientApplicationsFromVerifiedPublisherOnly: boolean;
	clientApplicationTenantIds: Array<string>[];
	permissionClassification: string;
	permissions: Array<string>[];
	permissionType: EnumTypes.permissionType;
	resourceApplication: string;

}
/*********************************************
* rbacApplication
**********************************************/
export interface rbacApplication  {

	roleAssignments: IBaseResult<unifiedRoleAssignment[]>;
	roleDefinitions: IBaseResult<unifiedRoleDefinition[]>;
	roleAssignmentScheduleInstances: IBaseResult<unifiedRoleAssignmentScheduleInstance[]>;
	roleAssignmentScheduleRequests: IBaseResult<unifiedRoleAssignmentScheduleRequest[]>;
	roleAssignmentSchedules: IBaseResult<unifiedRoleAssignmentSchedule[]>;
	roleEligibilityScheduleInstances: IBaseResult<unifiedRoleEligibilityScheduleInstance[]>;
	roleEligibilityScheduleRequests: IBaseResult<unifiedRoleEligibilityScheduleRequest[]>;
	roleEligibilitySchedules: IBaseResult<unifiedRoleEligibilitySchedule[]>;
}
/*********************************************
* unifiedRoleAssignment
**********************************************/
export interface unifiedRoleAssignment  {
	appScopeId: string;
	condition: string;
	directoryScopeId: string;
	principalId: string;
	roleDefinitionId: string;
	appScope: IBaseResult<appScope>;
	directoryScope: IBaseResult<directoryObject>;
	principal: IBaseResult<directoryObject>;
	roleDefinition: IBaseResult<unifiedRoleDefinition>;
}
/*********************************************
* unifiedRoleDefinition
**********************************************/
export interface unifiedRoleDefinition  {
	description: string;
	displayName: string;
	isBuiltIn: boolean;
	isEnabled: boolean;
	resourceScopes: Array<string>[];
	rolePermissions: ComplexTypes.unifiedRolePermission[];
	templateId: string;
	version: string;
	inheritsPermissionsFrom: IBaseResult<unifiedRoleDefinition[]>;
}
/*********************************************
* unifiedRoleScheduleInstanceBase
**********************************************/
export interface unifiedRoleScheduleInstanceBase  {
	appScopeId: string;
	directoryScopeId: string;
	principalId: string;
	roleDefinitionId: string;
	appScope: IBaseResult<appScope>;
	directoryScope: IBaseResult<directoryObject>;
	principal: IBaseResult<directoryObject>;
	roleDefinition: IBaseResult<unifiedRoleDefinition>;
}
/*********************************************
* unifiedRoleAssignmentScheduleInstance
**********************************************/
export interface unifiedRoleAssignmentScheduleInstance  {
	assignmentType: string;
	endDateTime: any;
	memberType: string;
	roleAssignmentOriginId: string;
	roleAssignmentScheduleId: string;
	startDateTime: any;
	activatedUsing: IBaseResult<unifiedRoleEligibilityScheduleInstance>;
}
/*********************************************
* request
**********************************************/
export interface request  {
	approvalId: string;
	completedDateTime: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	customData: string;
	status: string;

}
/*********************************************
* unifiedRoleAssignmentScheduleRequest
**********************************************/
export interface unifiedRoleAssignmentScheduleRequest  {
	action: EnumTypes.unifiedRoleScheduleRequestActions;
	appScopeId: string;
	directoryScopeId: string;
	isValidationOnly: boolean;
	justification: string;
	principalId: string;
	roleDefinitionId: string;
	scheduleInfo: ComplexTypes.requestSchedule;
	targetScheduleId: string;
	ticketInfo: ComplexTypes.ticketInfo;
	activatedUsing: IBaseResult<unifiedRoleEligibilitySchedule>;
	appScope: IBaseResult<appScope>;
	directoryScope: IBaseResult<directoryObject>;
	principal: IBaseResult<directoryObject>;
	roleDefinition: IBaseResult<unifiedRoleDefinition>;
	targetSchedule: IBaseResult<unifiedRoleAssignmentSchedule>;
}
/*********************************************
* unifiedRoleScheduleBase
**********************************************/
export interface unifiedRoleScheduleBase  {
	appScopeId: string;
	createdDateTime: any;
	createdUsing: string;
	directoryScopeId: string;
	modifiedDateTime: any;
	principalId: string;
	roleDefinitionId: string;
	status: string;
	appScope: IBaseResult<appScope>;
	directoryScope: IBaseResult<directoryObject>;
	principal: IBaseResult<directoryObject>;
	roleDefinition: IBaseResult<unifiedRoleDefinition>;
}
/*********************************************
* unifiedRoleAssignmentSchedule
**********************************************/
export interface unifiedRoleAssignmentSchedule  {
	assignmentType: string;
	memberType: string;
	scheduleInfo: ComplexTypes.requestSchedule;
	activatedUsing: IBaseResult<unifiedRoleEligibilitySchedule>;
}
/*********************************************
* unifiedRoleEligibilityScheduleInstance
**********************************************/
export interface unifiedRoleEligibilityScheduleInstance  {
	endDateTime: any;
	memberType: string;
	roleEligibilityScheduleId: string;
	startDateTime: any;

}
/*********************************************
* unifiedRoleEligibilityScheduleRequest
**********************************************/
export interface unifiedRoleEligibilityScheduleRequest  {
	action: EnumTypes.unifiedRoleScheduleRequestActions;
	appScopeId: string;
	directoryScopeId: string;
	isValidationOnly: boolean;
	justification: string;
	principalId: string;
	roleDefinitionId: string;
	scheduleInfo: ComplexTypes.requestSchedule;
	targetScheduleId: string;
	ticketInfo: ComplexTypes.ticketInfo;
	appScope: IBaseResult<appScope>;
	directoryScope: IBaseResult<directoryObject>;
	principal: IBaseResult<directoryObject>;
	roleDefinition: IBaseResult<unifiedRoleDefinition>;
	targetSchedule: IBaseResult<unifiedRoleEligibilitySchedule>;
}
/*********************************************
* unifiedRoleEligibilitySchedule
**********************************************/
export interface unifiedRoleEligibilitySchedule  {
	memberType: string;
	scheduleInfo: ComplexTypes.requestSchedule;

}
/*********************************************
* roleManagement
**********************************************/
export interface roleManagement  {

	directory: IBaseResult<rbacApplication>;
	entitlementManagement: IBaseResult<rbacApplication>;
}
/*********************************************
* samlOrWsFedExternalDomainFederation
**********************************************/
export interface samlOrWsFedExternalDomainFederation  {

	domains: IBaseResult<externalDomainName[]>;
}
/*********************************************
* subscribedSku
**********************************************/
export interface subscribedSku  {
	appliesTo: string;
	capabilityStatus: string;
	consumedUnits: number;
	prepaidUnits: ComplexTypes.licenseUnitsDetail;
	servicePlans: ComplexTypes.servicePlanInfo[];
	skuId: any;
	skuPartNumber: string;

}
/*********************************************
* educationAssignment
**********************************************/
export interface educationAssignment  {
	addedStudentAction: EnumTypes.educationAddedStudentAction;
	addToCalendarAction: EnumTypes.educationAddToCalendarOptions;
	allowLateSubmissions: boolean;
	allowStudentsToAddResourcesToSubmission: boolean;
	assignDateTime: any;
	assignedDateTime: any;
	assignTo: ComplexTypes.educationAssignmentRecipient;
	classId: string;
	closeDateTime: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;
	dueDateTime: any;
	grading: ComplexTypes.educationAssignmentGradeType;
	instructions: ComplexTypes.educationItemBody;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	notificationChannelUrl: string;
	resourcesFolderUrl: string;
	status: EnumTypes.educationAssignmentStatus;
	webUrl: string;
	categories: IBaseResult<educationCategory[]>;
	resources: IBaseResult<educationAssignmentResource[]>;
	rubric: IBaseResult<educationRubric>;
	submissions: IBaseResult<educationSubmission[]>;
}
/*********************************************
* educationCategory
**********************************************/
export interface educationCategory  {
	displayName: string;

}
/*********************************************
* educationAssignmentResource
**********************************************/
export interface educationAssignmentResource  {
	distributeForStudentWork: boolean;
	resource: ComplexTypes.educationResource;

}
/*********************************************
* educationRubric
**********************************************/
export interface educationRubric  {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: ComplexTypes.educationItemBody;
	displayName: string;
	grading: ComplexTypes.educationAssignmentGradeType;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	levels: ComplexTypes.rubricLevel[];
	qualities: ComplexTypes.rubricQuality[];

}
/*********************************************
* educationSubmission
**********************************************/
export interface educationSubmission  {
	reassignedBy: ComplexTypes.identitySet;
	reassignedDateTime: any;
	recipient: ComplexTypes.educationSubmissionRecipient;
	resourcesFolderUrl: string;
	returnedBy: ComplexTypes.identitySet;
	returnedDateTime: any;
	status: EnumTypes.educationSubmissionStatus;
	submittedBy: ComplexTypes.identitySet;
	submittedDateTime: any;
	unsubmittedBy: ComplexTypes.identitySet;
	unsubmittedDateTime: any;
	outcomes: IBaseResult<educationOutcome[]>;
	resources: IBaseResult<educationSubmissionResource[]>;
	submittedResources: IBaseResult<educationSubmissionResource[]>;
}
/*********************************************
* educationAssignmentDefaults
**********************************************/
export interface educationAssignmentDefaults  {
	addedStudentAction: EnumTypes.educationAddedStudentAction;
	addToCalendarAction: EnumTypes.educationAddToCalendarOptions;
	dueTime: any;
	notificationChannelUrl: string;

}
/*********************************************
* educationAssignmentSettings
**********************************************/
export interface educationAssignmentSettings  {
	submissionAnimationDisabled: boolean;

}
/*********************************************
* educationClass
**********************************************/
export interface educationClass  {
	classCode: string;
	course: ComplexTypes.educationCourse;
	createdBy: ComplexTypes.identitySet;
	description: string;
	displayName: string;
	externalId: string;
	externalName: string;
	externalSource: EnumTypes.educationExternalSource;
	externalSourceDetail: string;
	grade: string;
	mailNickname: string;
	term: ComplexTypes.educationTerm;
	assignmentCategories: IBaseResult<educationCategory[]>;
	assignmentDefaults: IBaseResult<educationAssignmentDefaults>;
	assignments: IBaseResult<educationAssignment[]>;
	assignmentSettings: IBaseResult<educationAssignmentSettings>;
	group: IBaseResult<group>;
	members: IBaseResult<educationUser[]>;
	schools: IBaseResult<educationSchool[]>;
	teachers: IBaseResult<educationUser[]>;
}
/*********************************************
* educationUser
**********************************************/
export interface educationUser  {
	relatedContacts: ComplexTypes.relatedContact[];
	accountEnabled: boolean;
	assignedLicenses: ComplexTypes.assignedLicense[];
	assignedPlans: ComplexTypes.assignedPlan[];
	businessPhones: Array<string>[];
	createdBy: ComplexTypes.identitySet;
	department: string;
	displayName: string;
	externalSource: EnumTypes.educationExternalSource;
	externalSourceDetail: string;
	givenName: string;
	mail: string;
	mailingAddress: ComplexTypes.physicalAddress;
	mailNickname: string;
	middleName: string;
	mobilePhone: string;
	officeLocation: string;
	onPremisesInfo: ComplexTypes.educationOnPremisesInfo;
	passwordPolicies: string;
	passwordProfile: ComplexTypes.passwordProfile;
	preferredLanguage: string;
	primaryRole: EnumTypes.educationUserRole;
	provisionedPlans: ComplexTypes.provisionedPlan[];
	refreshTokensValidFromDateTime: any;
	residenceAddress: ComplexTypes.physicalAddress;
	showInAddressList: boolean;
	student: ComplexTypes.educationStudent;
	surname: string;
	teacher: ComplexTypes.educationTeacher;
	usageLocation: string;
	userPrincipalName: string;
	userType: string;
	assignments: IBaseResult<educationAssignment[]>;
	rubrics: IBaseResult<educationRubric[]>;
	classes: IBaseResult<educationClass[]>;
	schools: IBaseResult<educationSchool[]>;
	taughtClasses: IBaseResult<educationClass[]>;
	user: IBaseResult<user>;
}
/*********************************************
* educationOrganization
**********************************************/
export interface educationOrganization  {
	description: string;
	displayName: string;
	externalSource: EnumTypes.educationExternalSource;
	externalSourceDetail: string;

}
/*********************************************
* educationSchool
**********************************************/
export interface educationSchool  {
	address: ComplexTypes.physicalAddress;
	createdBy: ComplexTypes.identitySet;
	externalId: string;
	externalPrincipalId: string;
	fax: string;
	highestGrade: string;
	lowestGrade: string;
	phone: string;
	principalEmail: string;
	principalName: string;
	schoolNumber: string;
	administrativeUnit: IBaseResult<administrativeUnit>;
	classes: IBaseResult<educationClass[]>;
	users: IBaseResult<educationUser[]>;
}
/*********************************************
* educationOutcome
**********************************************/
export interface educationOutcome  {
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;

}
/*********************************************
* educationFeedbackOutcome
**********************************************/
export interface educationFeedbackOutcome  {
	feedback: ComplexTypes.educationFeedback;
	publishedFeedback: ComplexTypes.educationFeedback;

}
/*********************************************
* educationPointsOutcome
**********************************************/
export interface educationPointsOutcome  {
	points: ComplexTypes.educationAssignmentPointsGrade;
	publishedPoints: ComplexTypes.educationAssignmentPointsGrade;

}
/*********************************************
* educationRoot
**********************************************/
export interface educationRoot  {

	classes: IBaseResult<educationClass[]>;
	me: IBaseResult<educationUser>;
	schools: IBaseResult<educationSchool[]>;
	users: IBaseResult<educationUser[]>;
}
/*********************************************
* educationRubricOutcome
**********************************************/
export interface educationRubricOutcome  {
	publishedRubricQualityFeedback: ComplexTypes.rubricQualityFeedbackModel[];
	publishedRubricQualitySelectedLevels: ComplexTypes.rubricQualitySelectedColumnModel[];
	rubricQualityFeedback: ComplexTypes.rubricQualityFeedbackModel[];
	rubricQualitySelectedLevels: ComplexTypes.rubricQualitySelectedColumnModel[];

}
/*********************************************
* educationSubmissionResource
**********************************************/
export interface educationSubmissionResource  {
	assignmentResourceUrl: string;
	resource: ComplexTypes.educationResource;

}
/*********************************************
* driveItem
**********************************************/
export interface driveItem  {
	audio: ComplexTypes.audio;
	bundle: ComplexTypes.bundle;
	content: any;
	cTag: string;
	deleted: ComplexTypes.deleted;
	file: ComplexTypes.file;
	fileSystemInfo: ComplexTypes.fileSystemInfo;
	folder: ComplexTypes.folder;
	image: ComplexTypes.image;
	location: ComplexTypes.geoCoordinates;
	malware: ComplexTypes.malware;
	package: ComplexTypes.package;
	pendingOperations: ComplexTypes.pendingOperations;
	photo: ComplexTypes.photo;
	publication: ComplexTypes.publicationFacet;
	remoteItem: ComplexTypes.remoteItem;
	root: ComplexTypes.root;
	searchResult: ComplexTypes.searchResult;
	shared: ComplexTypes.shared;
	sharepointIds: ComplexTypes.sharepointIds;
	size: number;
	specialFolder: ComplexTypes.specialFolder;
	video: ComplexTypes.video;
	webDavUrl: string;
	workbook: IBaseResult<workbook>;
	analytics: IBaseResult<itemAnalytics>;
	children: IBaseResult<driveItem[]>;
	listItem: IBaseResult<listItem>;
	permissions: IBaseResult<permission[]>;
	subscriptions: IBaseResult<subscription[]>;
	thumbnails: IBaseResult<thumbnailSet[]>;
	versions: IBaseResult<driveItemVersion[]>;
}
/*********************************************
* workbook
**********************************************/
export interface workbook  {

	application: IBaseResult<workbookApplication>;
	comments: IBaseResult<workbookComment[]>;
	functions: IBaseResult<workbookFunctions>;
	names: IBaseResult<workbookNamedItem[]>;
	operations: IBaseResult<workbookOperation[]>;
	tables: IBaseResult<workbookTable[]>;
	worksheets: IBaseResult<workbookWorksheet[]>;
}
/*********************************************
* listItem
**********************************************/
export interface listItem  {
	contentType: ComplexTypes.contentTypeInfo;
	sharepointIds: ComplexTypes.sharepointIds;
	analytics: IBaseResult<itemAnalytics>;
	documentSetVersions: IBaseResult<documentSetVersion[]>;
	driveItem: IBaseResult<driveItem>;
	fields: IBaseResult<fieldValueSet>;
	versions: IBaseResult<listItemVersion[]>;
}
/*********************************************
* subscription
**********************************************/
export interface subscription  {
	applicationId: string;
	changeType: string;
	clientState: string;
	creatorId: string;
	encryptionCertificate: string;
	encryptionCertificateId: string;
	expirationDateTime: any;
	includeResourceData: boolean;
	latestSupportedTlsVersion: string;
	lifecycleNotificationUrl: string;
	notificationQueryOptions: string;
	notificationUrl: string;
	notificationUrlAppId: string;
	resource: string;

}
/*********************************************
* thumbnailSet
**********************************************/
export interface thumbnailSet  {
	large: ComplexTypes.thumbnail;
	medium: ComplexTypes.thumbnail;
	small: ComplexTypes.thumbnail;
	source: ComplexTypes.thumbnail;

}
/*********************************************
* baseItemVersion
**********************************************/
export interface baseItemVersion  {
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	publication: ComplexTypes.publicationFacet;

}
/*********************************************
* driveItemVersion
**********************************************/
export interface driveItemVersion  {
	content: any;
	size: number;

}
/*********************************************
* workbookApplication
**********************************************/
export interface workbookApplication  {
	calculationMode: string;

}
/*********************************************
* workbookComment
**********************************************/
export interface workbookComment  {
	content: string;
	contentType: string;
	replies: IBaseResult<workbookCommentReply[]>;
}
/*********************************************
* workbookFunctions
**********************************************/
export interface workbookFunctions  {


}
/*********************************************
* workbookNamedItem
**********************************************/
export interface workbookNamedItem  {
	comment: string;
	name: string;
	scope: string;
	type: string;
	value: ComplexTypes.Json;
	visible: boolean;
	worksheet: IBaseResult<workbookWorksheet>;
}
/*********************************************
* workbookOperation
**********************************************/
export interface workbookOperation  {
	error: ComplexTypes.workbookOperationError;
	resourceLocation: string;
	status: EnumTypes.workbookOperationStatus;

}
/*********************************************
* workbookTable
**********************************************/
export interface workbookTable  {
	highlightFirstColumn: boolean;
	highlightLastColumn: boolean;
	legacyId: string;
	name: string;
	showBandedColumns: boolean;
	showBandedRows: boolean;
	showFilterButton: boolean;
	showHeaders: boolean;
	showTotals: boolean;
	style: string;
	columns: IBaseResult<workbookTableColumn[]>;
	rows: IBaseResult<workbookTableRow[]>;
	sort: IBaseResult<workbookTableSort>;
	worksheet: IBaseResult<workbookWorksheet>;
}
/*********************************************
* workbookWorksheet
**********************************************/
export interface workbookWorksheet  {
	name: string;
	position: number;
	visibility: string;
	charts: IBaseResult<workbookChart[]>;
	names: IBaseResult<workbookNamedItem[]>;
	pivotTables: IBaseResult<workbookPivotTable[]>;
	protection: IBaseResult<workbookWorksheetProtection>;
	tables: IBaseResult<workbookTable[]>;
}
/*********************************************
* workbookChart
**********************************************/
export interface workbookChart  {
	height: number;
	left: number;
	name: string;
	top: number;
	width: number;
	axes: IBaseResult<workbookChartAxes>;
	dataLabels: IBaseResult<workbookChartDataLabels>;
	format: IBaseResult<workbookChartAreaFormat>;
	legend: IBaseResult<workbookChartLegend>;
	series: IBaseResult<workbookChartSeries[]>;
	title: IBaseResult<workbookChartTitle>;
	worksheet: IBaseResult<workbookWorksheet>;
}
/*********************************************
* workbookChartAxes
**********************************************/
export interface workbookChartAxes  {

	categoryAxis: IBaseResult<workbookChartAxis>;
	seriesAxis: IBaseResult<workbookChartAxis>;
	valueAxis: IBaseResult<workbookChartAxis>;
}
/*********************************************
* workbookChartDataLabels
**********************************************/
export interface workbookChartDataLabels  {
	position: string;
	separator: string;
	showBubbleSize: boolean;
	showCategoryName: boolean;
	showLegendKey: boolean;
	showPercentage: boolean;
	showSeriesName: boolean;
	showValue: boolean;
	format: IBaseResult<workbookChartDataLabelFormat>;
}
/*********************************************
* workbookChartAreaFormat
**********************************************/
export interface workbookChartAreaFormat  {

	fill: IBaseResult<workbookChartFill>;
	font: IBaseResult<workbookChartFont>;
}
/*********************************************
* workbookChartLegend
**********************************************/
export interface workbookChartLegend  {
	overlay: boolean;
	position: string;
	visible: boolean;
	format: IBaseResult<workbookChartLegendFormat>;
}
/*********************************************
* workbookChartSeries
**********************************************/
export interface workbookChartSeries  {
	name: string;
	format: IBaseResult<workbookChartSeriesFormat>;
	points: IBaseResult<workbookChartPoint[]>;
}
/*********************************************
* workbookChartTitle
**********************************************/
export interface workbookChartTitle  {
	overlay: boolean;
	text: string;
	visible: boolean;
	format: IBaseResult<workbookChartTitleFormat>;
}
/*********************************************
* workbookChartFill
**********************************************/
export interface workbookChartFill  {


}
/*********************************************
* workbookChartFont
**********************************************/
export interface workbookChartFont  {
	bold: boolean;
	color: string;
	italic: boolean;
	name: string;
	size: number;
	underline: string;

}
/*********************************************
* workbookChartAxis
**********************************************/
export interface workbookChartAxis  {
	majorUnit: ComplexTypes.Json;
	maximum: ComplexTypes.Json;
	minimum: ComplexTypes.Json;
	minorUnit: ComplexTypes.Json;
	format: IBaseResult<workbookChartAxisFormat>;
	majorGridlines: IBaseResult<workbookChartGridlines>;
	minorGridlines: IBaseResult<workbookChartGridlines>;
	title: IBaseResult<workbookChartAxisTitle>;
}
/*********************************************
* workbookChartAxisFormat
**********************************************/
export interface workbookChartAxisFormat  {

	font: IBaseResult<workbookChartFont>;
	line: IBaseResult<workbookChartLineFormat>;
}
/*********************************************
* workbookChartGridlines
**********************************************/
export interface workbookChartGridlines  {
	visible: boolean;
	format: IBaseResult<workbookChartGridlinesFormat>;
}
/*********************************************
* workbookChartAxisTitle
**********************************************/
export interface workbookChartAxisTitle  {
	text: string;
	visible: boolean;
	format: IBaseResult<workbookChartAxisTitleFormat>;
}
/*********************************************
* workbookChartLineFormat
**********************************************/
export interface workbookChartLineFormat  {
	color: string;

}
/*********************************************
* workbookChartAxisTitleFormat
**********************************************/
export interface workbookChartAxisTitleFormat  {

	font: IBaseResult<workbookChartFont>;
}
/*********************************************
* workbookChartDataLabelFormat
**********************************************/
export interface workbookChartDataLabelFormat  {

	fill: IBaseResult<workbookChartFill>;
	font: IBaseResult<workbookChartFont>;
}
/*********************************************
* workbookChartGridlinesFormat
**********************************************/
export interface workbookChartGridlinesFormat  {

	line: IBaseResult<workbookChartLineFormat>;
}
/*********************************************
* workbookChartLegendFormat
**********************************************/
export interface workbookChartLegendFormat  {

	fill: IBaseResult<workbookChartFill>;
	font: IBaseResult<workbookChartFont>;
}
/*********************************************
* workbookChartPoint
**********************************************/
export interface workbookChartPoint  {
	value: ComplexTypes.Json;
	format: IBaseResult<workbookChartPointFormat>;
}
/*********************************************
* workbookChartPointFormat
**********************************************/
export interface workbookChartPointFormat  {

	fill: IBaseResult<workbookChartFill>;
}
/*********************************************
* workbookChartSeriesFormat
**********************************************/
export interface workbookChartSeriesFormat  {

	fill: IBaseResult<workbookChartFill>;
	line: IBaseResult<workbookChartLineFormat>;
}
/*********************************************
* workbookChartTitleFormat
**********************************************/
export interface workbookChartTitleFormat  {

	fill: IBaseResult<workbookChartFill>;
	font: IBaseResult<workbookChartFont>;
}
/*********************************************
* workbookCommentReply
**********************************************/
export interface workbookCommentReply  {
	content: string;
	contentType: string;

}
/*********************************************
* workbookFilter
**********************************************/
export interface workbookFilter  {
	criteria: ComplexTypes.workbookFilterCriteria;

}
/*********************************************
* workbookFormatProtection
**********************************************/
export interface workbookFormatProtection  {
	formulaHidden: boolean;
	locked: boolean;

}
/*********************************************
* workbookFunctionResult
**********************************************/
export interface workbookFunctionResult  {
	error: string;
	value: ComplexTypes.Json;

}
/*********************************************
* workbookPivotTable
**********************************************/
export interface workbookPivotTable  {
	name: string;
	worksheet: IBaseResult<workbookWorksheet>;
}
/*********************************************
* workbookRange
**********************************************/
export interface workbookRange  {
	address: string;
	addressLocal: string;
	cellCount: number;
	columnCount: number;
	columnHidden: boolean;
	columnIndex: number;
	formulas: ComplexTypes.Json;
	formulasLocal: ComplexTypes.Json;
	formulasR1C1: ComplexTypes.Json;
	hidden: boolean;
	numberFormat: ComplexTypes.Json;
	rowCount: number;
	rowHidden: boolean;
	rowIndex: number;
	text: ComplexTypes.Json;
	values: ComplexTypes.Json;
	valueTypes: ComplexTypes.Json;
	format: IBaseResult<workbookRangeFormat>;
	sort: IBaseResult<workbookRangeSort>;
	worksheet: IBaseResult<workbookWorksheet>;
}
/*********************************************
* workbookRangeFormat
**********************************************/
export interface workbookRangeFormat  {
	columnWidth: number;
	horizontalAlignment: string;
	rowHeight: number;
	verticalAlignment: string;
	wrapText: boolean;
	borders: IBaseResult<workbookRangeBorder[]>;
	fill: IBaseResult<workbookRangeFill>;
	font: IBaseResult<workbookRangeFont>;
	protection: IBaseResult<workbookFormatProtection>;
}
/*********************************************
* workbookRangeSort
**********************************************/
export interface workbookRangeSort  {


}
/*********************************************
* workbookRangeBorder
**********************************************/
export interface workbookRangeBorder  {
	color: string;
	sideIndex: string;
	style: string;
	weight: string;

}
/*********************************************
* workbookRangeFill
**********************************************/
export interface workbookRangeFill  {
	color: string;

}
/*********************************************
* workbookRangeFont
**********************************************/
export interface workbookRangeFont  {
	bold: boolean;
	color: string;
	italic: boolean;
	name: string;
	size: number;
	underline: string;

}
/*********************************************
* workbookRangeView
**********************************************/
export interface workbookRangeView  {
	cellAddresses: ComplexTypes.Json;
	columnCount: number;
	formulas: ComplexTypes.Json;
	formulasLocal: ComplexTypes.Json;
	formulasR1C1: ComplexTypes.Json;
	index: number;
	numberFormat: ComplexTypes.Json;
	rowCount: number;
	text: ComplexTypes.Json;
	values: ComplexTypes.Json;
	valueTypes: ComplexTypes.Json;
	rows: IBaseResult<workbookRangeView[]>;
}
/*********************************************
* workbookTableColumn
**********************************************/
export interface workbookTableColumn  {
	index: number;
	name: string;
	values: ComplexTypes.Json;
	filter: IBaseResult<workbookFilter>;
}
/*********************************************
* workbookTableRow
**********************************************/
export interface workbookTableRow  {
	index: number;
	values: ComplexTypes.Json;

}
/*********************************************
* workbookTableSort
**********************************************/
export interface workbookTableSort  {
	fields: ComplexTypes.workbookSortField[];
	matchCase: boolean;
	method: string;

}
/*********************************************
* workbookWorksheetProtection
**********************************************/
export interface workbookWorksheetProtection  {
	options: ComplexTypes.workbookWorksheetProtectionOptions;
	protected: boolean;

}
/*********************************************
* place
**********************************************/
export interface place  {
	address: ComplexTypes.physicalAddress;
	displayName: string;
	geoCoordinates: ComplexTypes.outlookGeoCoordinates;
	phone: string;

}
/*********************************************
* room
**********************************************/
export interface room  {
	audioDeviceName: string;
	bookingType: EnumTypes.bookingType;
	building: string;
	capacity: number;
	displayDeviceName: string;
	emailAddress: string;
	floorLabel: string;
	floorNumber: number;
	isWheelChairAccessible: boolean;
	label: string;
	nickname: string;
	tags: Array<string>[];
	videoDeviceName: string;

}
/*********************************************
* roomList
**********************************************/
export interface roomList  {
	emailAddress: string;
	rooms: IBaseResult<room[]>;
}
/*********************************************
* attachment
**********************************************/
export interface attachment  {
	contentType: string;
	isInline: boolean;
	lastModifiedDateTime: any;
	name: string;
	size: number;

}
/*********************************************
* calendarPermission
**********************************************/
export interface calendarPermission  {
	allowedRoles: EnumTypes.calendarRoleType[];
	emailAddress: ComplexTypes.emailAddress;
	isInsideOrganization: boolean;
	isRemovable: boolean;
	role: EnumTypes.calendarRoleType;

}
/*********************************************
* multiValueLegacyExtendedProperty
**********************************************/
export interface multiValueLegacyExtendedProperty  {
	value: Array<string>[];

}
/*********************************************
* singleValueLegacyExtendedProperty
**********************************************/
export interface singleValueLegacyExtendedProperty  {
	value: string;

}
/*********************************************
* calendarSharingMessage
**********************************************/
export interface calendarSharingMessage  {
	canAccept: boolean;
	sharingMessageAction: ComplexTypes.calendarSharingMessageAction;
	sharingMessageActions: ComplexTypes.calendarSharingMessageAction[];
	suggestedCalendarName: string;

}
/*********************************************
* post
**********************************************/
export interface post  {
	body: ComplexTypes.itemBody;
	conversationId: string;
	conversationThreadId: string;
	from: ComplexTypes.recipient;
	hasAttachments: boolean;
	newParticipants: ComplexTypes.recipient[];
	receivedDateTime: any;
	sender: ComplexTypes.recipient;
	attachments: IBaseResult<attachment[]>;
	extensions: IBaseResult<extension[]>;
	inReplyTo: IBaseResult<post>;
	multiValueExtendedProperties: IBaseResult<multiValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties: IBaseResult<singleValueLegacyExtendedProperty[]>;
}
/*********************************************
* eventMessage
**********************************************/
export interface eventMessage  {
	endDateTime: ComplexTypes.dateTimeTimeZone;
	isAllDay: boolean;
	isDelegated: boolean;
	isOutOfDate: boolean;
	location: ComplexTypes.location;
	meetingMessageType: EnumTypes.meetingMessageType;
	recurrence: ComplexTypes.patternedRecurrence;
	startDateTime: ComplexTypes.dateTimeTimeZone;
	type: EnumTypes.eventType;
	event: IBaseResult<event>;
}
/*********************************************
* eventMessageRequest
**********************************************/
export interface eventMessageRequest  {
	allowNewTimeProposals: boolean;
	meetingRequestType: EnumTypes.meetingRequestType;
	previousEndDateTime: ComplexTypes.dateTimeTimeZone;
	previousLocation: ComplexTypes.location;
	previousStartDateTime: ComplexTypes.dateTimeTimeZone;
	responseRequested: boolean;

}
/*********************************************
* eventMessageResponse
**********************************************/
export interface eventMessageResponse  {
	proposedNewTime: ComplexTypes.timeSlot;
	responseType: EnumTypes.responseType;

}
/*********************************************
* fileAttachment
**********************************************/
export interface fileAttachment  {
	contentBytes: any;
	contentId: string;
	contentLocation: string;

}
/*********************************************
* inferenceClassificationOverride
**********************************************/
export interface inferenceClassificationOverride  {
	classifyAs: EnumTypes.inferenceClassificationType;
	senderEmailAddress: ComplexTypes.emailAddress;

}
/*********************************************
* itemAttachment
**********************************************/
export interface itemAttachment  {

	item: IBaseResult<outlookItem>;
}
/*********************************************
* messageRule
**********************************************/
export interface messageRule  {
	actions: ComplexTypes.messageRuleActions;
	conditions: ComplexTypes.messageRulePredicates;
	displayName: string;
	exceptions: ComplexTypes.messageRulePredicates;
	hasError: boolean;
	isEnabled: boolean;
	isReadOnly: boolean;
	sequence: number;

}
/*********************************************
* mailSearchFolder
**********************************************/
export interface mailSearchFolder  {
	filterQuery: string;
	includeNestedFolders: boolean;
	isSupported: boolean;
	sourceFolderIds: Array<string>[];

}
/*********************************************
* openTypeExtension
**********************************************/
export interface openTypeExtension  {
	extensionName: string;

}
/*********************************************
* outlookCategory
**********************************************/
export interface outlookCategory  {
	color: EnumTypes.categoryColor;
	displayName: string;

}
/*********************************************
* referenceAttachment
**********************************************/
export interface referenceAttachment  {


}
/*********************************************
* columnLink
**********************************************/
export interface columnLink  {
	name: string;

}
/*********************************************
* listItemVersion
**********************************************/
export interface listItemVersion  {

	fields: IBaseResult<fieldValueSet>;
}
/*********************************************
* documentSetVersion
**********************************************/
export interface documentSetVersion  {
	comment: string;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	items: ComplexTypes.documentSetVersionItem[];
	shouldCaptureMinorVersion: boolean;

}
/*********************************************
* fieldValueSet
**********************************************/
export interface fieldValueSet  {


}
/*********************************************
* itemActivity
**********************************************/
export interface itemActivity  {
	access: ComplexTypes.accessAction;
	activityDateTime: any;
	actor: ComplexTypes.identitySet;
	driveItem: IBaseResult<driveItem>;
}
/*********************************************
* itemActivityStat
**********************************************/
export interface itemActivityStat  {
	access: ComplexTypes.itemActionStat;
	create: ComplexTypes.itemActionStat;
	delete: ComplexTypes.itemActionStat;
	edit: ComplexTypes.itemActionStat;
	endDateTime: any;
	incompleteData: ComplexTypes.incompleteData;
	isTrending: boolean;
	move: ComplexTypes.itemActionStat;
	startDateTime: any;
	activities: IBaseResult<itemActivity[]>;
}
/*********************************************
* sharedDriveItem
**********************************************/
export interface sharedDriveItem  {
	owner: ComplexTypes.identitySet;
	driveItem: IBaseResult<driveItem>;
	items: IBaseResult<driveItem[]>;
	list: IBaseResult<list>;
	listItem: IBaseResult<listItem>;
	permission: IBaseResult<permission>;
	root: IBaseResult<driveItem>;
	site: IBaseResult<site>;
}
/*********************************************
* schemaExtension
**********************************************/
export interface schemaExtension  {
	description: string;
	owner: string;
	properties: ComplexTypes.extensionSchemaProperty[];
	status: string;
	targetTypes: Array<string>[];

}
/*********************************************
* cloudCommunications
**********************************************/
export interface cloudCommunications  {

	calls: IBaseResult<call[]>;
	callRecords: IBaseResult<callRecord[]>;
	onlineMeetings: IBaseResult<onlineMeeting[]>;
	presences: IBaseResult<presence[]>;
}
/*********************************************
* call
**********************************************/
export interface call  {
	callbackUri: string;
	callChainId: string;
	callOptions: ComplexTypes.callOptions;
	callRoutes: ComplexTypes.callRoute[];
	chatInfo: ComplexTypes.chatInfo;
	direction: EnumTypes.callDirection;
	incomingContext: ComplexTypes.incomingContext;
	mediaConfig: ComplexTypes.mediaConfig;
	mediaState: ComplexTypes.callMediaState;
	meetingInfo: ComplexTypes.meetingInfo;
	myParticipantId: string;
	requestedModalities: EnumTypes.modality[];
	resultInfo: ComplexTypes.resultInfo;
	source: ComplexTypes.participantInfo;
	state: EnumTypes.callState;
	subject: string;
	targets: ComplexTypes.invitationParticipantInfo[];
	tenantId: string;
	toneInfo: ComplexTypes.toneInfo;
	transcription: ComplexTypes.callTranscriptionInfo;
	audioRoutingGroups: IBaseResult<audioRoutingGroup[]>;
	operations: IBaseResult<commsOperation[]>;
	participants: IBaseResult<participant[]>;
}
/*********************************************
* accessReviewHistoryDefinition
**********************************************/
export interface accessReviewHistoryDefinition  {
	createdBy: ComplexTypes.userIdentity;
	createdDateTime: any;
	decisions: EnumTypes.accessReviewHistoryDecisionFilter[];
	displayName: string;
	reviewHistoryPeriodEndDateTime: any;
	reviewHistoryPeriodStartDateTime: any;
	scheduleSettings: ComplexTypes.accessReviewHistoryScheduleSettings;
	scopes: ComplexTypes.accessReviewScope[];
	status: EnumTypes.accessReviewHistoryStatus;
	instances: IBaseResult<accessReviewHistoryInstance[]>;
}
/*********************************************
* accessReviewHistoryInstance
**********************************************/
export interface accessReviewHistoryInstance  {
	downloadUri: string;
	expirationDateTime: any;
	fulfilledDateTime: any;
	reviewHistoryPeriodEndDateTime: any;
	reviewHistoryPeriodStartDateTime: any;
	runDateTime: any;
	status: EnumTypes.accessReviewHistoryStatus;

}
/*********************************************
* accessReviewInstance
**********************************************/
export interface accessReviewInstance  {
	endDateTime: any;
	fallbackReviewers: ComplexTypes.accessReviewReviewerScope[];
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	scope: ComplexTypes.accessReviewScope;
	startDateTime: any;
	status: string;
	contactedReviewers: IBaseResult<accessReviewReviewer[]>;
	decisions: IBaseResult<accessReviewInstanceDecisionItem[]>;
	stages: IBaseResult<accessReviewStage[]>;
}
/*********************************************
* accessReviewReviewer
**********************************************/
export interface accessReviewReviewer  {
	createdDateTime: any;
	displayName: string;
	userPrincipalName: string;

}
/*********************************************
* accessReviewInstanceDecisionItem
**********************************************/
export interface accessReviewInstanceDecisionItem  {
	accessReviewId: string;
	appliedBy: ComplexTypes.userIdentity;
	appliedDateTime: any;
	applyResult: string;
	decision: string;
	justification: string;
	principal: ComplexTypes.identity;
	principalLink: string;
	recommendation: string;
	resource: ComplexTypes.accessReviewInstanceDecisionItemResource;
	resourceLink: string;
	reviewedBy: ComplexTypes.userIdentity;
	reviewedDateTime: any;

}
/*********************************************
* accessReviewStage
**********************************************/
export interface accessReviewStage  {
	endDateTime: any;
	fallbackReviewers: ComplexTypes.accessReviewReviewerScope[];
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	startDateTime: any;
	status: string;
	decisions: IBaseResult<accessReviewInstanceDecisionItem[]>;
}
/*********************************************
* accessReviewScheduleDefinition
**********************************************/
export interface accessReviewScheduleDefinition  {
	additionalNotificationRecipients: ComplexTypes.accessReviewNotificationRecipientItem[];
	createdBy: ComplexTypes.userIdentity;
	createdDateTime: any;
	descriptionForAdmins: string;
	descriptionForReviewers: string;
	displayName: string;
	fallbackReviewers: ComplexTypes.accessReviewReviewerScope[];
	instanceEnumerationScope: ComplexTypes.accessReviewScope;
	lastModifiedDateTime: any;
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	scope: ComplexTypes.accessReviewScope;
	settings: ComplexTypes.accessReviewScheduleSettings;
	stageSettings: ComplexTypes.accessReviewStageSettings[];
	status: string;
	instances: IBaseResult<accessReviewInstance[]>;
}
/*********************************************
* accessReviewSet
**********************************************/
export interface accessReviewSet  {

	definitions: IBaseResult<accessReviewScheduleDefinition[]>;
	historyDefinitions: IBaseResult<accessReviewHistoryDefinition[]>;
}
/*********************************************
* appConsentApprovalRoute
**********************************************/
export interface appConsentApprovalRoute  {

	appConsentRequests: IBaseResult<appConsentRequest[]>;
}
/*********************************************
* appConsentRequest
**********************************************/
export interface appConsentRequest  {
	appDisplayName: string;
	appId: string;
	pendingScopes: ComplexTypes.appConsentRequestScope[];
	userConsentRequests: IBaseResult<userConsentRequest[]>;
}
/*********************************************
* userConsentRequest
**********************************************/
export interface userConsentRequest  {
	reason: string;
	approval: IBaseResult<approval>;
}
/*********************************************
* approval
**********************************************/
export interface approval  {

	stages: IBaseResult<approvalStage[]>;
}
/*********************************************
* approvalStage
**********************************************/
export interface approvalStage  {
	assignedToMe: boolean;
	displayName: string;
	justification: string;
	reviewedBy: ComplexTypes.identity;
	reviewedDateTime: any;
	reviewResult: string;
	status: string;

}
/*********************************************
* entitlementManagement
**********************************************/
export interface entitlementManagement  {

	accessPackageAssignmentApprovals: IBaseResult<approval[]>;
	accessPackages: IBaseResult<accessPackage[]>;
	assignmentPolicies: IBaseResult<accessPackageAssignmentPolicy[]>;
	assignmentRequests: IBaseResult<accessPackageAssignmentRequest[]>;
	assignments: IBaseResult<accessPackageAssignment[]>;
	catalogs: IBaseResult<accessPackageCatalog[]>;
	connectedOrganizations: IBaseResult<connectedOrganization[]>;
	settings: IBaseResult<entitlementManagementSettings>;
}
/*********************************************
* accessPackage
**********************************************/
export interface accessPackage  {
	createdDateTime: any;
	description: string;
	displayName: string;
	isHidden: boolean;
	modifiedDateTime: any;
	assignmentPolicies: IBaseResult<accessPackageAssignmentPolicy[]>;
	catalog: IBaseResult<accessPackageCatalog>;
}
/*********************************************
* accessPackageAssignmentPolicy
**********************************************/
export interface accessPackageAssignmentPolicy  {
	allowedTargetScope: EnumTypes.allowedTargetScope;
	automaticRequestSettings: ComplexTypes.accessPackageAutomaticRequestSettings;
	createdDateTime: any;
	description: string;
	displayName: string;
	expiration: ComplexTypes.expirationPattern;
	modifiedDateTime: any;
	requestApprovalSettings: ComplexTypes.accessPackageAssignmentApprovalSettings;
	requestorSettings: ComplexTypes.accessPackageAssignmentRequestorSettings;
	reviewSettings: ComplexTypes.accessPackageAssignmentReviewSettings;
	specificAllowedTargets: ComplexTypes.subjectSet[];
	accessPackage: IBaseResult<accessPackage>;
	catalog: IBaseResult<accessPackageCatalog>;
}
/*********************************************
* accessPackageAssignmentRequest
**********************************************/
export interface accessPackageAssignmentRequest  {
	completedDateTime: any;
	createdDateTime: any;
	requestType: EnumTypes.accessPackageRequestType;
	schedule: ComplexTypes.entitlementManagementSchedule;
	state: EnumTypes.accessPackageRequestState;
	status: string;
	accessPackage: IBaseResult<accessPackage>;
	assignment: IBaseResult<accessPackageAssignment>;
	requestor: IBaseResult<accessPackageSubject>;
}
/*********************************************
* accessPackageAssignment
**********************************************/
export interface accessPackageAssignment  {
	expiredDateTime: any;
	schedule: ComplexTypes.entitlementManagementSchedule;
	state: EnumTypes.accessPackageAssignmentState;
	status: string;
	accessPackage: IBaseResult<accessPackage>;
	assignmentPolicy: IBaseResult<accessPackageAssignmentPolicy>;
	target: IBaseResult<accessPackageSubject>;
}
/*********************************************
* accessPackageCatalog
**********************************************/
export interface accessPackageCatalog  {
	catalogType: EnumTypes.accessPackageCatalogType;
	createdDateTime: any;
	description: string;
	displayName: string;
	isExternallyVisible: boolean;
	modifiedDateTime: any;
	state: EnumTypes.accessPackageCatalogState;
	accessPackages: IBaseResult<accessPackage[]>;
}
/*********************************************
* connectedOrganization
**********************************************/
export interface connectedOrganization  {
	createdDateTime: any;
	description: string;
	displayName: string;
	identitySources: ComplexTypes.identitySource[];
	modifiedDateTime: any;
	state: EnumTypes.connectedOrganizationState;
	externalSponsors: IBaseResult<directoryObject[]>;
	internalSponsors: IBaseResult<directoryObject[]>;
}
/*********************************************
* entitlementManagementSettings
**********************************************/
export interface entitlementManagementSettings  {
	durationUntilExternalUserDeletedAfterBlocked: number;
	externalUserLifecycleAction: EnumTypes.accessPackageExternalUserLifecycleAction;

}
/*********************************************
* identityGovernance
**********************************************/
export interface identityGovernance  {

	accessReviews: IBaseResult<accessReviewSet>;
	appConsent: IBaseResult<appConsentApprovalRoute>;
	termsOfUse: IBaseResult<termsOfUseContainer>;
	entitlementManagement: IBaseResult<entitlementManagement>;
}
/*********************************************
* termsOfUseContainer
**********************************************/
export interface termsOfUseContainer  {

	agreementAcceptances: IBaseResult<agreementAcceptance[]>;
	agreements: IBaseResult<agreement[]>;
}
/*********************************************
* agreement
**********************************************/
export interface agreement  {
	displayName: string;
	isPerDeviceAcceptanceRequired: boolean;
	isViewingBeforeAcceptanceRequired: boolean;
	termsExpiration: ComplexTypes.termsExpiration;
	userReacceptRequiredFrequency: number;
	acceptances: IBaseResult<agreementAcceptance[]>;
	file: IBaseResult<agreementFile>;
	files: IBaseResult<agreementFileLocalization[]>;
}
/*********************************************
* agreementFileProperties
**********************************************/
export interface agreementFileProperties  {
	createdDateTime: any;
	displayName: string;
	fileData: ComplexTypes.agreementFileData;
	fileName: string;
	isDefault: boolean;
	isMajorVersion: boolean;
	language: string;

}
/*********************************************
* agreementFile
**********************************************/
export interface agreementFile  {

	localizations: IBaseResult<agreementFileLocalization[]>;
}
/*********************************************
* agreementFileLocalization
**********************************************/
export interface agreementFileLocalization  {

	versions: IBaseResult<agreementFileVersion[]>;
}
/*********************************************
* agreementFileVersion
**********************************************/
export interface agreementFileVersion  {


}
/*********************************************
* namedLocation
**********************************************/
export interface namedLocation  {
	createdDateTime: any;
	displayName: string;
	modifiedDateTime: any;

}
/*********************************************
* countryNamedLocation
**********************************************/
export interface countryNamedLocation  {
	countriesAndRegions: Array<string>[];
	countryLookupMethod: EnumTypes.countryLookupMethodType;
	includeUnknownCountriesAndRegions: boolean;

}
/*********************************************
* identityProtectionRoot
**********************************************/
export interface identityProtectionRoot  {

	riskDetections: IBaseResult<riskDetection[]>;
	riskyUsers: IBaseResult<riskyUser[]>;
}
/*********************************************
* riskDetection
**********************************************/
export interface riskDetection  {
	activity: EnumTypes.activityType;
	activityDateTime: any;
	additionalInfo: string;
	correlationId: string;
	detectedDateTime: any;
	detectionTimingType: EnumTypes.riskDetectionTimingType;
	ipAddress: string;
	lastUpdatedDateTime: any;
	location: ComplexTypes.signInLocation;
	requestId: string;
	riskDetail: EnumTypes.riskDetail;
	riskEventType: string;
	riskLevel: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	source: string;
	tokenIssuerType: EnumTypes.tokenIssuerType;
	userDisplayName: string;
	userId: string;
	userPrincipalName: string;

}
/*********************************************
* riskyUser
**********************************************/
export interface riskyUser  {
	isDeleted: boolean;
	isProcessing: boolean;
	riskDetail: EnumTypes.riskDetail;
	riskLastUpdatedDateTime: any;
	riskLevel: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	userDisplayName: string;
	userPrincipalName: string;
	history: IBaseResult<riskyUserHistoryItem[]>;
}
/*********************************************
* ipNamedLocation
**********************************************/
export interface ipNamedLocation  {
	ipRanges: ComplexTypes.ipRange[];
	isTrusted: boolean;

}
/*********************************************
* riskyUserHistoryItem
**********************************************/
export interface riskyUserHistoryItem  {
	activity: ComplexTypes.riskUserActivity;
	initiatedBy: string;
	userId: string;

}
/*********************************************
* accessPackageSubject
**********************************************/
export interface accessPackageSubject  {
	displayName: string;
	email: string;
	objectId: string;
	onPremisesSecurityIdentifier: string;
	principalName: string;
	subjectType: EnumTypes.accessPackageSubjectType;
	connectedOrganization: IBaseResult<connectedOrganization>;
}
/*********************************************
* mobileApp
**********************************************/
export interface mobileApp  {
	createdDateTime: any;
	description: string;
	developer: string;
	displayName: string;
	informationUrl: string;
	isFeatured: boolean;
	largeIcon: ComplexTypes.mimeContent;
	lastModifiedDateTime: any;
	notes: string;
	owner: string;
	privacyInformationUrl: string;
	publisher: string;
	publishingState: EnumTypes.mobileAppPublishingState;
	assignments: IBaseResult<mobileAppAssignment[]>;
	categories: IBaseResult<mobileAppCategory[]>;
}
/*********************************************
* mobileLobApp
**********************************************/
export interface mobileLobApp  {
	committedContentVersion: string;
	fileName: string;
	size: number;
	contentVersions: IBaseResult<mobileAppContent[]>;
}
/*********************************************
* androidLobApp
**********************************************/
export interface androidLobApp  {
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;
	versionCode: string;
	versionName: string;

}
/*********************************************
* androidStoreApp
**********************************************/
export interface androidStoreApp  {
	appStoreUrl: string;
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;

}
/*********************************************
* deviceAppManagement
**********************************************/
export interface deviceAppManagement  {
	isEnabledForMicrosoftStoreForBusiness: boolean;
	microsoftStoreForBusinessLanguage: string;
	microsoftStoreForBusinessLastCompletedApplicationSyncTime: any;
	microsoftStoreForBusinessLastSuccessfulSyncDateTime: any;
	managedEBooks: IBaseResult<managedEBook[]>;
	mobileAppCategories: IBaseResult<mobileAppCategory[]>;
	mobileAppConfigurations: IBaseResult<managedDeviceMobileAppConfiguration[]>;
	mobileApps: IBaseResult<mobileApp[]>;
	vppTokens: IBaseResult<vppToken[]>;
	androidManagedAppProtections: IBaseResult<androidManagedAppProtection[]>;
	defaultManagedAppProtections: IBaseResult<defaultManagedAppProtection[]>;
	iosManagedAppProtections: IBaseResult<iosManagedAppProtection[]>;
	managedAppPolicies: IBaseResult<managedAppPolicy[]>;
	managedAppRegistrations: IBaseResult<managedAppRegistration[]>;
	managedAppStatuses: IBaseResult<managedAppStatus[]>;
	mdmWindowsInformationProtectionPolicies: IBaseResult<mdmWindowsInformationProtectionPolicy[]>;
	targetedManagedAppConfigurations: IBaseResult<targetedManagedAppConfiguration[]>;
	windowsInformationProtectionPolicies: IBaseResult<windowsInformationProtectionPolicy[]>;
}
/*********************************************
* managedEBook
**********************************************/
export interface managedEBook  {
	createdDateTime: any;
	description: string;
	displayName: string;
	informationUrl: string;
	largeCover: ComplexTypes.mimeContent;
	lastModifiedDateTime: any;
	privacyInformationUrl: string;
	publishedDateTime: any;
	publisher: string;
	assignments: IBaseResult<managedEBookAssignment[]>;
	deviceStates: IBaseResult<deviceInstallState[]>;
	installSummary: IBaseResult<eBookInstallSummary>;
	userStateSummary: IBaseResult<userInstallStateSummary[]>;
}
/*********************************************
* mobileAppCategory
**********************************************/
export interface mobileAppCategory  {
	displayName: string;
	lastModifiedDateTime: any;

}
/*********************************************
* managedDeviceMobileAppConfiguration
**********************************************/
export interface managedDeviceMobileAppConfiguration  {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	targetedMobileApps: Array<string>[];
	version: number;
	assignments: IBaseResult<managedDeviceMobileAppConfigurationAssignment[]>;
	deviceStatuses: IBaseResult<managedDeviceMobileAppConfigurationDeviceStatus[]>;
	deviceStatusSummary: IBaseResult<managedDeviceMobileAppConfigurationDeviceSummary>;
	userStatuses: IBaseResult<managedDeviceMobileAppConfigurationUserStatus[]>;
	userStatusSummary: IBaseResult<managedDeviceMobileAppConfigurationUserSummary>;
}
/*********************************************
* vppToken
**********************************************/
export interface vppToken  {
	appleId: string;
	automaticallyUpdateApps: boolean;
	countryOrRegion: string;
	expirationDateTime: any;
	lastModifiedDateTime: any;
	lastSyncDateTime: any;
	lastSyncStatus: EnumTypes.vppTokenSyncStatus;
	organizationName: string;
	state: EnumTypes.vppTokenState;
	token: string;
	vppTokenAccountType: EnumTypes.vppTokenAccountType;

}
/*********************************************
* managedAppPolicy
**********************************************/
export interface managedAppPolicy  {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	version: string;

}
/*********************************************
* managedAppProtection
**********************************************/
export interface managedAppProtection  {
	allowedDataStorageLocations: EnumTypes.managedAppDataStorageLocation[];
	allowedInboundDataTransferSources: EnumTypes.managedAppDataTransferLevel;
	allowedOutboundClipboardSharingLevel: EnumTypes.managedAppClipboardSharingLevel;
	allowedOutboundDataTransferDestinations: EnumTypes.managedAppDataTransferLevel;
	contactSyncBlocked: boolean;
	dataBackupBlocked: boolean;
	deviceComplianceRequired: boolean;
	disableAppPinIfDevicePinIsSet: boolean;
	fingerprintBlocked: boolean;
	managedBrowser: EnumTypes.managedBrowserType;
	managedBrowserToOpenLinksRequired: boolean;
	maximumPinRetries: number;
	minimumPinLength: number;
	minimumRequiredAppVersion: string;
	minimumRequiredOsVersion: string;
	minimumWarningAppVersion: string;
	minimumWarningOsVersion: string;
	organizationalCredentialsRequired: boolean;
	periodBeforePinReset: number;
	periodOfflineBeforeAccessCheck: number;
	periodOfflineBeforeWipeIsEnforced: number;
	periodOnlineBeforeAccessCheck: number;
	pinCharacterSet: EnumTypes.managedAppPinCharacterSet;
	pinRequired: boolean;
	printBlocked: boolean;
	saveAsBlocked: boolean;
	simplePinBlocked: boolean;

}
/*********************************************
* targetedManagedAppProtection
**********************************************/
export interface targetedManagedAppProtection  {
	isAssigned: boolean;
	assignments: IBaseResult<targetedManagedAppPolicyAssignment[]>;
}
/*********************************************
* androidManagedAppProtection
**********************************************/
export interface androidManagedAppProtection  {
	customBrowserDisplayName: string;
	customBrowserPackageId: string;
	deployedAppCount: number;
	disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean;
	encryptAppData: boolean;
	minimumRequiredPatchVersion: string;
	minimumWarningPatchVersion: string;
	screenCaptureBlocked: boolean;
	apps: IBaseResult<managedMobileApp[]>;
	deploymentSummary: IBaseResult<managedAppPolicyDeploymentSummary>;
}
/*********************************************
* defaultManagedAppProtection
**********************************************/
export interface defaultManagedAppProtection  {
	appDataEncryptionType: EnumTypes.managedAppDataEncryptionType;
	customSettings: ComplexTypes.keyValuePair[];
	deployedAppCount: number;
	disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean;
	encryptAppData: boolean;
	faceIdBlocked: boolean;
	minimumRequiredPatchVersion: string;
	minimumRequiredSdkVersion: string;
	minimumWarningPatchVersion: string;
	screenCaptureBlocked: boolean;
	apps: IBaseResult<managedMobileApp[]>;
	deploymentSummary: IBaseResult<managedAppPolicyDeploymentSummary>;
}
/*********************************************
* iosManagedAppProtection
**********************************************/
export interface iosManagedAppProtection  {
	appDataEncryptionType: EnumTypes.managedAppDataEncryptionType;
	customBrowserProtocol: string;
	deployedAppCount: number;
	faceIdBlocked: boolean;
	minimumRequiredSdkVersion: string;
	apps: IBaseResult<managedMobileApp[]>;
	deploymentSummary: IBaseResult<managedAppPolicyDeploymentSummary>;
}
/*********************************************
* managedAppStatus
**********************************************/
export interface managedAppStatus  {
	displayName: string;
	version: string;

}
/*********************************************
* windowsInformationProtection
**********************************************/
export interface windowsInformationProtection  {
	azureRightsManagementServicesAllowed: boolean;
	dataRecoveryCertificate: ComplexTypes.windowsInformationProtectionDataRecoveryCertificate;
	enforcementLevel: EnumTypes.windowsInformationProtectionEnforcementLevel;
	enterpriseDomain: string;
	enterpriseInternalProxyServers: ComplexTypes.windowsInformationProtectionResourceCollection[];
	enterpriseIPRanges: ComplexTypes.windowsInformationProtectionIPRangeCollection[];
	enterpriseIPRangesAreAuthoritative: boolean;
	enterpriseNetworkDomainNames: ComplexTypes.windowsInformationProtectionResourceCollection[];
	enterpriseProtectedDomainNames: ComplexTypes.windowsInformationProtectionResourceCollection[];
	enterpriseProxiedDomains: ComplexTypes.windowsInformationProtectionProxiedDomainCollection[];
	enterpriseProxyServers: ComplexTypes.windowsInformationProtectionResourceCollection[];
	enterpriseProxyServersAreAuthoritative: boolean;
	exemptApps: ComplexTypes.windowsInformationProtectionApp[];
	iconsVisible: boolean;
	indexingEncryptedStoresOrItemsBlocked: boolean;
	isAssigned: boolean;
	neutralDomainResources: ComplexTypes.windowsInformationProtectionResourceCollection[];
	protectedApps: ComplexTypes.windowsInformationProtectionApp[];
	protectionUnderLockConfigRequired: boolean;
	revokeOnUnenrollDisabled: boolean;
	rightsManagementServicesTemplateId: any;
	smbAutoEncryptedFileExtensions: ComplexTypes.windowsInformationProtectionResourceCollection[];
	assignments: IBaseResult<targetedManagedAppPolicyAssignment[]>;
	exemptAppLockerFiles: IBaseResult<windowsInformationProtectionAppLockerFile[]>;
	protectedAppLockerFiles: IBaseResult<windowsInformationProtectionAppLockerFile[]>;
}
/*********************************************
* mdmWindowsInformationProtectionPolicy
**********************************************/
export interface mdmWindowsInformationProtectionPolicy  {


}
/*********************************************
* managedAppConfiguration
**********************************************/
export interface managedAppConfiguration  {
	customSettings: ComplexTypes.keyValuePair[];

}
/*********************************************
* targetedManagedAppConfiguration
**********************************************/
export interface targetedManagedAppConfiguration  {
	deployedAppCount: number;
	isAssigned: boolean;
	apps: IBaseResult<managedMobileApp[]>;
	assignments: IBaseResult<targetedManagedAppPolicyAssignment[]>;
	deploymentSummary: IBaseResult<managedAppPolicyDeploymentSummary>;
}
/*********************************************
* windowsInformationProtectionPolicy
**********************************************/
export interface windowsInformationProtectionPolicy  {
	daysWithoutContactBeforeUnenroll: number;
	mdmEnrollmentUrl: string;
	minutesOfInactivityBeforeDeviceLock: number;
	numberOfPastPinsRemembered: number;
	passwordMaximumAttemptCount: number;
	pinExpirationDays: number;
	pinLowercaseLetters: EnumTypes.windowsInformationProtectionPinCharacterRequirements;
	pinMinimumLength: number;
	pinSpecialCharacters: EnumTypes.windowsInformationProtectionPinCharacterRequirements;
	pinUppercaseLetters: EnumTypes.windowsInformationProtectionPinCharacterRequirements;
	revokeOnMdmHandoffDisabled: boolean;
	windowsHelloForBusinessBlocked: boolean;

}
/*********************************************
* iosLobApp
**********************************************/
export interface iosLobApp  {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	buildNumber: string;
	bundleId: string;
	expirationDateTime: any;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;
	versionNumber: string;

}
/*********************************************
* iosMobileAppConfiguration
**********************************************/
export interface iosMobileAppConfiguration  {
	encodedSettingXml: any;
	settings: ComplexTypes.appConfigurationSettingItem[];

}
/*********************************************
* iosStoreApp
**********************************************/
export interface iosStoreApp  {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	appStoreUrl: string;
	bundleId: string;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;

}
/*********************************************
* iosVppApp
**********************************************/
export interface iosVppApp  {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	appStoreUrl: string;
	bundleId: string;
	licensingType: ComplexTypes.vppLicensingType;
	releaseDateTime: any;
	totalLicenseCount: number;
	usedLicenseCount: number;
	vppTokenAccountType: EnumTypes.vppTokenAccountType;
	vppTokenAppleId: string;
	vppTokenOrganizationName: string;

}
/*********************************************
* macOSOfficeSuiteApp
**********************************************/
export interface macOSOfficeSuiteApp  {


}
/*********************************************
* managedApp
**********************************************/
export interface managedApp  {
	appAvailability: EnumTypes.managedAppAvailability;
	version: string;

}
/*********************************************
* managedMobileLobApp
**********************************************/
export interface managedMobileLobApp  {
	committedContentVersion: string;
	fileName: string;
	size: number;
	contentVersions: IBaseResult<mobileAppContent[]>;
}
/*********************************************
* managedAndroidLobApp
**********************************************/
export interface managedAndroidLobApp  {
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;
	versionCode: string;
	versionName: string;

}
/*********************************************
* managedAndroidStoreApp
**********************************************/
export interface managedAndroidStoreApp  {
	appStoreUrl: string;
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;

}
/*********************************************
* managedDeviceMobileAppConfigurationAssignment
**********************************************/
export interface managedDeviceMobileAppConfigurationAssignment  {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* managedDeviceMobileAppConfigurationDeviceStatus
**********************************************/
export interface managedDeviceMobileAppConfigurationDeviceStatus  {
	complianceGracePeriodExpirationDateTime: any;
	deviceDisplayName: string;
	deviceModel: string;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userName: string;
	userPrincipalName: string;

}
/*********************************************
* managedDeviceMobileAppConfigurationDeviceSummary
**********************************************/
export interface managedDeviceMobileAppConfigurationDeviceSummary  {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;

}
/*********************************************
* managedDeviceMobileAppConfigurationUserStatus
**********************************************/
export interface managedDeviceMobileAppConfigurationUserStatus  {
	devicesCount: number;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userDisplayName: string;
	userPrincipalName: string;

}
/*********************************************
* managedDeviceMobileAppConfigurationUserSummary
**********************************************/
export interface managedDeviceMobileAppConfigurationUserSummary  {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;

}
/*********************************************
* managedIOSLobApp
**********************************************/
export interface managedIOSLobApp  {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	buildNumber: string;
	bundleId: string;
	expirationDateTime: any;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;
	versionNumber: string;

}
/*********************************************
* managedIOSStoreApp
**********************************************/
export interface managedIOSStoreApp  {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	appStoreUrl: string;
	bundleId: string;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;

}
/*********************************************
* mobileAppContent
**********************************************/
export interface mobileAppContent  {

	files: IBaseResult<mobileAppContentFile[]>;
}
/*********************************************
* microsoftStoreForBusinessApp
**********************************************/
export interface microsoftStoreForBusinessApp  {
	licenseType: EnumTypes.microsoftStoreForBusinessLicenseType;
	packageIdentityName: string;
	productKey: string;
	totalLicenseCount: number;
	usedLicenseCount: number;

}
/*********************************************
* mobileAppAssignment
**********************************************/
export interface mobileAppAssignment  {
	intent: EnumTypes.installIntent;
	settings: ComplexTypes.mobileAppAssignmentSettings;
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* mobileAppContentFile
**********************************************/
export interface mobileAppContentFile  {
	azureStorageUri: string;
	azureStorageUriExpirationDateTime: any;
	createdDateTime: any;
	isCommitted: boolean;
	manifest: any;
	name: string;
	size: number;
	sizeEncrypted: number;
	uploadState: EnumTypes.mobileAppContentFileUploadState;

}
/*********************************************
* webApp
**********************************************/
export interface webApp  {
	appUrl: string;
	useManagedBrowser: boolean;

}
/*********************************************
* win32LobApp
**********************************************/
export interface win32LobApp  {
	applicableArchitectures: EnumTypes.windowsArchitecture;
	installCommandLine: string;
	installExperience: ComplexTypes.win32LobAppInstallExperience;
	minimumCpuSpeedInMHz: number;
	minimumFreeDiskSpaceInMB: number;
	minimumMemoryInMB: number;
	minimumNumberOfProcessors: number;
	minimumSupportedWindowsRelease: string;
	msiInformation: ComplexTypes.win32LobAppMsiInformation;
	returnCodes: ComplexTypes.win32LobAppReturnCode[];
	rules: ComplexTypes.win32LobAppRule[];
	setupFilePath: string;
	uninstallCommandLine: string;

}
/*********************************************
* windowsMobileMSI
**********************************************/
export interface windowsMobileMSI  {
	commandLine: string;
	ignoreVersionDetection: boolean;
	productCode: string;
	productVersion: string;

}
/*********************************************
* windowsUniversalAppX
**********************************************/
export interface windowsUniversalAppX  {
	applicableArchitectures: EnumTypes.windowsArchitecture;
	applicableDeviceTypes: EnumTypes.windowsDeviceType;
	identityName: string;
	identityPublisherHash: string;
	identityResourceIdentifier: string;
	identityVersion: string;
	isBundle: boolean;
	minimumSupportedOperatingSystem: ComplexTypes.windowsMinimumOperatingSystem;

}
/*********************************************
* deviceInstallState
**********************************************/
export interface deviceInstallState  {
	deviceId: string;
	deviceName: string;
	errorCode: string;
	installState: EnumTypes.installState;
	lastSyncDateTime: any;
	osDescription: string;
	osVersion: string;
	userName: string;

}
/*********************************************
* eBookInstallSummary
**********************************************/
export interface eBookInstallSummary  {
	failedDeviceCount: number;
	failedUserCount: number;
	installedDeviceCount: number;
	installedUserCount: number;
	notInstalledDeviceCount: number;
	notInstalledUserCount: number;

}
/*********************************************
* iosVppEBook
**********************************************/
export interface iosVppEBook  {
	appleId: string;
	genres: Array<string>[];
	language: string;
	seller: string;
	totalLicenseCount: number;
	usedLicenseCount: number;
	vppOrganizationName: string;
	vppTokenId: any;

}
/*********************************************
* managedEBookAssignment
**********************************************/
export interface managedEBookAssignment  {
	installIntent: EnumTypes.installIntent;
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* iosVppEBookAssignment
**********************************************/
export interface iosVppEBookAssignment  {


}
/*********************************************
* userInstallStateSummary
**********************************************/
export interface userInstallStateSummary  {
	failedDeviceCount: number;
	installedDeviceCount: number;
	notInstalledDeviceCount: number;
	userName: string;
	deviceStates: IBaseResult<deviceInstallState[]>;
}
/*********************************************
* deviceManagement
**********************************************/
export interface deviceManagement  {
	intuneAccountId: any;
	settings: ComplexTypes.deviceManagementSettings;
	intuneBrand: ComplexTypes.intuneBrand;
	subscriptionState: EnumTypes.deviceManagementSubscriptionState;
	termsAndConditions: IBaseResult<termsAndConditions[]>;
	deviceCompliancePolicies: IBaseResult<deviceCompliancePolicy[]>;
	deviceCompliancePolicyDeviceStateSummary: IBaseResult<deviceCompliancePolicyDeviceStateSummary>;
	deviceCompliancePolicySettingStateSummaries: IBaseResult<deviceCompliancePolicySettingStateSummary[]>;
	deviceConfigurationDeviceStateSummaries: IBaseResult<deviceConfigurationDeviceStateSummary>;
	deviceConfigurations: IBaseResult<deviceConfiguration[]>;
	iosUpdateStatuses: IBaseResult<iosUpdateDeviceStatus[]>;
	softwareUpdateStatusSummary: IBaseResult<softwareUpdateStatusSummary>;
	complianceManagementPartners: IBaseResult<complianceManagementPartner[]>;
	conditionalAccessSettings: IBaseResult<onPremisesConditionalAccessSettings>;
	deviceCategories: IBaseResult<deviceCategory[]>;
	deviceEnrollmentConfigurations: IBaseResult<deviceEnrollmentConfiguration[]>;
	deviceManagementPartners: IBaseResult<deviceManagementPartner[]>;
	exchangeConnectors: IBaseResult<deviceManagementExchangeConnector[]>;
	mobileThreatDefenseConnectors: IBaseResult<mobileThreatDefenseConnector[]>;
	applePushNotificationCertificate: IBaseResult<applePushNotificationCertificate>;
	detectedApps: IBaseResult<detectedApp[]>;
	managedDeviceOverview: IBaseResult<managedDeviceOverview>;
	managedDevices: IBaseResult<managedDevice[]>;
	importedWindowsAutopilotDeviceIdentities: IBaseResult<importedWindowsAutopilotDeviceIdentity[]>;
	windowsAutopilotDeviceIdentities: IBaseResult<windowsAutopilotDeviceIdentity[]>;
	notificationMessageTemplates: IBaseResult<notificationMessageTemplate[]>;
	resourceOperations: IBaseResult<resourceOperation[]>;
	roleAssignments: IBaseResult<deviceAndAppManagementRoleAssignment[]>;
	roleDefinitions: IBaseResult<roleDefinition[]>;
	remoteAssistancePartners: IBaseResult<remoteAssistancePartner[]>;
	reports: IBaseResult<deviceManagementReports>;
	telecomExpenseManagementPartners: IBaseResult<telecomExpenseManagementPartner[]>;
	troubleshootingEvents: IBaseResult<deviceManagementTroubleshootingEvent[]>;
	windowsInformationProtectionAppLearningSummaries: IBaseResult<windowsInformationProtectionAppLearningSummary[]>;
	windowsInformationProtectionNetworkLearningSummaries: IBaseResult<windowsInformationProtectionNetworkLearningSummary[]>;
}
/*********************************************
* termsAndConditions
**********************************************/
export interface termsAndConditions  {
	acceptanceStatement: string;
	bodyText: string;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	title: string;
	version: number;
	acceptanceStatuses: IBaseResult<termsAndConditionsAcceptanceStatus[]>;
	assignments: IBaseResult<termsAndConditionsAssignment[]>;
}
/*********************************************
* deviceCompliancePolicy
**********************************************/
export interface deviceCompliancePolicy  {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	version: number;
	assignments: IBaseResult<deviceCompliancePolicyAssignment[]>;
	deviceSettingStateSummaries: IBaseResult<settingStateDeviceSummary[]>;
	deviceStatuses: IBaseResult<deviceComplianceDeviceStatus[]>;
	deviceStatusOverview: IBaseResult<deviceComplianceDeviceOverview>;
	scheduledActionsForRule: IBaseResult<deviceComplianceScheduledActionForRule[]>;
	userStatuses: IBaseResult<deviceComplianceUserStatus[]>;
	userStatusOverview: IBaseResult<deviceComplianceUserOverview>;
}
/*********************************************
* deviceCompliancePolicyDeviceStateSummary
**********************************************/
export interface deviceCompliancePolicyDeviceStateSummary  {
	compliantDeviceCount: number;
	configManagerCount: number;
	conflictDeviceCount: number;
	errorDeviceCount: number;
	inGracePeriodCount: number;
	nonCompliantDeviceCount: number;
	notApplicableDeviceCount: number;
	remediatedDeviceCount: number;
	unknownDeviceCount: number;

}
/*********************************************
* deviceCompliancePolicySettingStateSummary
**********************************************/
export interface deviceCompliancePolicySettingStateSummary  {
	compliantDeviceCount: number;
	conflictDeviceCount: number;
	errorDeviceCount: number;
	nonCompliantDeviceCount: number;
	notApplicableDeviceCount: number;
	platformType: EnumTypes.policyPlatformType;
	remediatedDeviceCount: number;
	setting: string;
	settingName: string;
	unknownDeviceCount: number;
	deviceComplianceSettingStates: IBaseResult<deviceComplianceSettingState[]>;
}
/*********************************************
* deviceConfigurationDeviceStateSummary
**********************************************/
export interface deviceConfigurationDeviceStateSummary  {
	compliantDeviceCount: number;
	conflictDeviceCount: number;
	errorDeviceCount: number;
	nonCompliantDeviceCount: number;
	notApplicableDeviceCount: number;
	remediatedDeviceCount: number;
	unknownDeviceCount: number;

}
/*********************************************
* deviceConfiguration
**********************************************/
export interface deviceConfiguration  {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	version: number;
	assignments: IBaseResult<deviceConfigurationAssignment[]>;
	deviceSettingStateSummaries: IBaseResult<settingStateDeviceSummary[]>;
	deviceStatuses: IBaseResult<deviceConfigurationDeviceStatus[]>;
	deviceStatusOverview: IBaseResult<deviceConfigurationDeviceOverview>;
	userStatuses: IBaseResult<deviceConfigurationUserStatus[]>;
	userStatusOverview: IBaseResult<deviceConfigurationUserOverview>;
}
/*********************************************
* iosUpdateDeviceStatus
**********************************************/
export interface iosUpdateDeviceStatus  {
	complianceGracePeriodExpirationDateTime: any;
	deviceDisplayName: string;
	deviceId: string;
	deviceModel: string;
	installStatus: EnumTypes.iosUpdatesInstallStatus;
	lastReportedDateTime: any;
	osVersion: string;
	status: EnumTypes.complianceStatus;
	userId: string;
	userName: string;
	userPrincipalName: string;

}
/*********************************************
* softwareUpdateStatusSummary
**********************************************/
export interface softwareUpdateStatusSummary  {
	compliantDeviceCount: number;
	compliantUserCount: number;
	conflictDeviceCount: number;
	conflictUserCount: number;
	displayName: string;
	errorDeviceCount: number;
	errorUserCount: number;
	nonCompliantDeviceCount: number;
	nonCompliantUserCount: number;
	notApplicableDeviceCount: number;
	notApplicableUserCount: number;
	remediatedDeviceCount: number;
	remediatedUserCount: number;
	unknownDeviceCount: number;
	unknownUserCount: number;

}
/*********************************************
* complianceManagementPartner
**********************************************/
export interface complianceManagementPartner  {
	androidEnrollmentAssignments: ComplexTypes.complianceManagementPartnerAssignment[];
	androidOnboarded: boolean;
	displayName: string;
	iosEnrollmentAssignments: ComplexTypes.complianceManagementPartnerAssignment[];
	iosOnboarded: boolean;
	lastHeartbeatDateTime: any;
	macOsEnrollmentAssignments: ComplexTypes.complianceManagementPartnerAssignment[];
	macOsOnboarded: boolean;
	partnerState: EnumTypes.deviceManagementPartnerTenantState;

}
/*********************************************
* onPremisesConditionalAccessSettings
**********************************************/
export interface onPremisesConditionalAccessSettings  {
	enabled: boolean;
	excludedGroups: Array<any>[];
	includedGroups: Array<any>[];
	overrideDefaultRule: boolean;

}
/*********************************************
* deviceCategory
**********************************************/
export interface deviceCategory  {
	description: string;
	displayName: string;

}
/*********************************************
* deviceEnrollmentConfiguration
**********************************************/
export interface deviceEnrollmentConfiguration  {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	priority: number;
	version: number;
	assignments: IBaseResult<enrollmentConfigurationAssignment[]>;
}
/*********************************************
* deviceManagementPartner
**********************************************/
export interface deviceManagementPartner  {
	displayName: string;
	isConfigured: boolean;
	lastHeartbeatDateTime: any;
	partnerAppType: EnumTypes.deviceManagementPartnerAppType;
	partnerState: EnumTypes.deviceManagementPartnerTenantState;
	singleTenantAppId: string;
	whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime: any;
	whenPartnerDevicesWillBeRemovedDateTime: any;

}
/*********************************************
* deviceManagementExchangeConnector
**********************************************/
export interface deviceManagementExchangeConnector  {
	connectorServerName: string;
	exchangeAlias: string;
	exchangeConnectorType: EnumTypes.deviceManagementExchangeConnectorType;
	exchangeOrganization: string;
	lastSyncDateTime: any;
	primarySmtpAddress: string;
	serverName: string;
	status: EnumTypes.deviceManagementExchangeConnectorStatus;
	version: string;

}
/*********************************************
* mobileThreatDefenseConnector
**********************************************/
export interface mobileThreatDefenseConnector  {
	androidDeviceBlockedOnMissingPartnerData: boolean;
	androidEnabled: boolean;
	iosDeviceBlockedOnMissingPartnerData: boolean;
	iosEnabled: boolean;
	lastHeartbeatDateTime: any;
	partnerState: EnumTypes.mobileThreatPartnerTenantState;
	partnerUnresponsivenessThresholdInDays: number;
	partnerUnsupportedOsVersionBlocked: boolean;

}
/*********************************************
* applePushNotificationCertificate
**********************************************/
export interface applePushNotificationCertificate  {
	appleIdentifier: string;
	certificate: string;
	certificateSerialNumber: string;
	expirationDateTime: any;
	lastModifiedDateTime: any;
	topicIdentifier: string;

}
/*********************************************
* detectedApp
**********************************************/
export interface detectedApp  {
	deviceCount: number;
	displayName: string;
	sizeInByte: number;
	version: string;
	managedDevices: IBaseResult<managedDevice[]>;
}
/*********************************************
* managedDeviceOverview
**********************************************/
export interface managedDeviceOverview  {
	deviceExchangeAccessStateSummary: ComplexTypes.deviceExchangeAccessStateSummary;
	deviceOperatingSystemSummary: ComplexTypes.deviceOperatingSystemSummary;
	dualEnrolledDeviceCount: number;
	enrolledDeviceCount: number;
	mdmEnrolledCount: number;

}
/*********************************************
* importedWindowsAutopilotDeviceIdentity
**********************************************/
export interface importedWindowsAutopilotDeviceIdentity  {
	assignedUserPrincipalName: string;
	groupTag: string;
	hardwareIdentifier: any;
	importId: string;
	productKey: string;
	serialNumber: string;
	state: ComplexTypes.importedWindowsAutopilotDeviceIdentityState;

}
/*********************************************
* windowsAutopilotDeviceIdentity
**********************************************/
export interface windowsAutopilotDeviceIdentity  {
	addressableUserName: string;
	azureActiveDirectoryDeviceId: string;
	displayName: string;
	enrollmentState: EnumTypes.enrollmentState;
	groupTag: string;
	lastContactedDateTime: any;
	managedDeviceId: string;
	manufacturer: string;
	model: string;
	productKey: string;
	purchaseOrderIdentifier: string;
	resourceName: string;
	serialNumber: string;
	skuNumber: string;
	systemFamily: string;
	userPrincipalName: string;

}
/*********************************************
* notificationMessageTemplate
**********************************************/
export interface notificationMessageTemplate  {
	brandingOptions: EnumTypes.notificationTemplateBrandingOptions;
	defaultLocale: string;
	displayName: string;
	lastModifiedDateTime: any;
	localizedNotificationMessages: IBaseResult<localizedNotificationMessage[]>;
}
/*********************************************
* resourceOperation
**********************************************/
export interface resourceOperation  {
	actionName: string;
	description: string;
	resourceName: string;

}
/*********************************************
* roleAssignment
**********************************************/
export interface roleAssignment  {
	description: string;
	displayName: string;
	resourceScopes: Array<string>[];
	roleDefinition: IBaseResult<roleDefinition>;
}
/*********************************************
* deviceAndAppManagementRoleAssignment
**********************************************/
export interface deviceAndAppManagementRoleAssignment  {
	members: Array<string>[];

}
/*********************************************
* roleDefinition
**********************************************/
export interface roleDefinition  {
	description: string;
	displayName: string;
	isBuiltIn: boolean;
	rolePermissions: ComplexTypes.rolePermission[];
	roleAssignments: IBaseResult<roleAssignment[]>;
}
/*********************************************
* remoteAssistancePartner
**********************************************/
export interface remoteAssistancePartner  {
	displayName: string;
	lastConnectionDateTime: any;
	onboardingStatus: EnumTypes.remoteAssistanceOnboardingStatus;
	onboardingUrl: string;

}
/*********************************************
* deviceManagementReports
**********************************************/
export interface deviceManagementReports  {

	exportJobs: IBaseResult<deviceManagementExportJob[]>;
}
/*********************************************
* telecomExpenseManagementPartner
**********************************************/
export interface telecomExpenseManagementPartner  {
	appAuthorized: boolean;
	displayName: string;
	enabled: boolean;
	lastConnectionDateTime: any;
	url: string;

}
/*********************************************
* windowsInformationProtectionAppLearningSummary
**********************************************/
export interface windowsInformationProtectionAppLearningSummary  {
	applicationName: string;
	applicationType: EnumTypes.applicationType;
	deviceCount: number;

}
/*********************************************
* windowsInformationProtectionNetworkLearningSummary
**********************************************/
export interface windowsInformationProtectionNetworkLearningSummary  {
	deviceCount: number;
	url: string;

}
/*********************************************
* termsAndConditionsAcceptanceStatus
**********************************************/
export interface termsAndConditionsAcceptanceStatus  {
	acceptedDateTime: any;
	acceptedVersion: number;
	userDisplayName: string;
	userPrincipalName: string;
	termsAndConditions: IBaseResult<termsAndConditions>;
}
/*********************************************
* termsAndConditionsAssignment
**********************************************/
export interface termsAndConditionsAssignment  {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* androidCompliancePolicy
**********************************************/
export interface androidCompliancePolicy  {
	deviceThreatProtectionEnabled: boolean;
	deviceThreatProtectionRequiredSecurityLevel: EnumTypes.deviceThreatProtectionLevel;
	minAndroidSecurityPatchLevel: string;
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordExpirationDays: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.androidRequiredPasswordType;
	securityBlockJailbrokenDevices: boolean;
	securityDisableUsbDebugging: boolean;
	securityPreventInstallAppsFromUnknownSources: boolean;
	securityRequireCompanyPortalAppIntegrity: boolean;
	securityRequireGooglePlayServices: boolean;
	securityRequireSafetyNetAttestationBasicIntegrity: boolean;
	securityRequireSafetyNetAttestationCertifiedDevice: boolean;
	securityRequireUpToDateSecurityProviders: boolean;
	securityRequireVerifyApps: boolean;
	storageRequireEncryption: boolean;

}
/*********************************************
* androidCustomConfiguration
**********************************************/
export interface androidCustomConfiguration  {
	omaSettings: ComplexTypes.omaSetting[];

}
/*********************************************
* androidGeneralDeviceConfiguration
**********************************************/
export interface androidGeneralDeviceConfiguration  {
	appsBlockClipboardSharing: boolean;
	appsBlockCopyPaste: boolean;
	appsBlockYouTube: boolean;
	appsHideList: ComplexTypes.appListItem[];
	appsInstallAllowList: ComplexTypes.appListItem[];
	appsLaunchBlockList: ComplexTypes.appListItem[];
	bluetoothBlocked: boolean;
	cameraBlocked: boolean;
	cellularBlockDataRoaming: boolean;
	cellularBlockMessaging: boolean;
	cellularBlockVoiceRoaming: boolean;
	cellularBlockWiFiTethering: boolean;
	compliantAppListType: EnumTypes.appListType;
	compliantAppsList: ComplexTypes.appListItem[];
	deviceSharingAllowed: boolean;
	diagnosticDataBlockSubmission: boolean;
	factoryResetBlocked: boolean;
	googleAccountBlockAutoSync: boolean;
	googlePlayStoreBlocked: boolean;
	kioskModeApps: ComplexTypes.appListItem[];
	kioskModeBlockSleepButton: boolean;
	kioskModeBlockVolumeButtons: boolean;
	locationServicesBlocked: boolean;
	nfcBlocked: boolean;
	passwordBlockFingerprintUnlock: boolean;
	passwordBlockTrustAgents: boolean;
	passwordExpirationDays: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeScreenTimeout: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.androidRequiredPasswordType;
	passwordSignInFailureCountBeforeFactoryReset: number;
	powerOffBlocked: boolean;
	screenCaptureBlocked: boolean;
	securityRequireVerifyApps: boolean;
	storageBlockGoogleBackup: boolean;
	storageBlockRemovableStorage: boolean;
	storageRequireDeviceEncryption: boolean;
	storageRequireRemovableStorageEncryption: boolean;
	voiceAssistantBlocked: boolean;
	voiceDialingBlocked: boolean;
	webBrowserBlockAutofill: boolean;
	webBrowserBlocked: boolean;
	webBrowserBlockJavaScript: boolean;
	webBrowserBlockPopups: boolean;
	webBrowserCookieSettings: EnumTypes.webBrowserCookieSettings;
	wiFiBlocked: boolean;

}
/*********************************************
* androidWorkProfileCompliancePolicy
**********************************************/
export interface androidWorkProfileCompliancePolicy  {
	deviceThreatProtectionEnabled: boolean;
	deviceThreatProtectionRequiredSecurityLevel: EnumTypes.deviceThreatProtectionLevel;
	minAndroidSecurityPatchLevel: string;
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordExpirationDays: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.androidRequiredPasswordType;
	securityBlockJailbrokenDevices: boolean;
	securityDisableUsbDebugging: boolean;
	securityPreventInstallAppsFromUnknownSources: boolean;
	securityRequireCompanyPortalAppIntegrity: boolean;
	securityRequireGooglePlayServices: boolean;
	securityRequireSafetyNetAttestationBasicIntegrity: boolean;
	securityRequireSafetyNetAttestationCertifiedDevice: boolean;
	securityRequireUpToDateSecurityProviders: boolean;
	securityRequireVerifyApps: boolean;
	storageRequireEncryption: boolean;

}
/*********************************************
* androidWorkProfileCustomConfiguration
**********************************************/
export interface androidWorkProfileCustomConfiguration  {
	omaSettings: ComplexTypes.omaSetting[];

}
/*********************************************
* androidWorkProfileGeneralDeviceConfiguration
**********************************************/
export interface androidWorkProfileGeneralDeviceConfiguration  {
	passwordBlockFingerprintUnlock: boolean;
	passwordBlockTrustAgents: boolean;
	passwordExpirationDays: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeScreenTimeout: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequiredType: EnumTypes.androidWorkProfileRequiredPasswordType;
	passwordSignInFailureCountBeforeFactoryReset: number;
	securityRequireVerifyApps: boolean;
	workProfileBlockAddingAccounts: boolean;
	workProfileBlockCamera: boolean;
	workProfileBlockCrossProfileCallerId: boolean;
	workProfileBlockCrossProfileContactsSearch: boolean;
	workProfileBlockCrossProfileCopyPaste: boolean;
	workProfileBlockNotificationsWhileDeviceLocked: boolean;
	workProfileBlockScreenCapture: boolean;
	workProfileBluetoothEnableContactSharing: boolean;
	workProfileDataSharingType: EnumTypes.androidWorkProfileCrossProfileDataSharingType;
	workProfileDefaultAppPermissionPolicy: EnumTypes.androidWorkProfileDefaultAppPermissionPolicyType;
	workProfilePasswordBlockFingerprintUnlock: boolean;
	workProfilePasswordBlockTrustAgents: boolean;
	workProfilePasswordExpirationDays: number;
	workProfilePasswordMinimumLength: number;
	workProfilePasswordMinLetterCharacters: number;
	workProfilePasswordMinLowerCaseCharacters: number;
	workProfilePasswordMinNonLetterCharacters: number;
	workProfilePasswordMinNumericCharacters: number;
	workProfilePasswordMinSymbolCharacters: number;
	workProfilePasswordMinUpperCaseCharacters: number;
	workProfilePasswordMinutesOfInactivityBeforeScreenTimeout: number;
	workProfilePasswordPreviousPasswordBlockCount: number;
	workProfilePasswordRequiredType: EnumTypes.androidWorkProfileRequiredPasswordType;
	workProfilePasswordSignInFailureCountBeforeFactoryReset: number;
	workProfileRequirePassword: boolean;

}
/*********************************************
* appleDeviceFeaturesConfigurationBase
**********************************************/
export interface appleDeviceFeaturesConfigurationBase  {


}
/*********************************************
* deviceComplianceActionItem
**********************************************/
export interface deviceComplianceActionItem  {
	actionType: EnumTypes.deviceComplianceActionType;
	gracePeriodHours: number;
	notificationMessageCCList: Array<string>[];
	notificationTemplateId: string;

}
/*********************************************
* deviceComplianceDeviceOverview
**********************************************/
export interface deviceComplianceDeviceOverview  {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;

}
/*********************************************
* deviceComplianceDeviceStatus
**********************************************/
export interface deviceComplianceDeviceStatus  {
	complianceGracePeriodExpirationDateTime: any;
	deviceDisplayName: string;
	deviceModel: string;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userName: string;
	userPrincipalName: string;

}
/*********************************************
* deviceCompliancePolicyAssignment
**********************************************/
export interface deviceCompliancePolicyAssignment  {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* settingStateDeviceSummary
**********************************************/
export interface settingStateDeviceSummary  {
	compliantDeviceCount: number;
	conflictDeviceCount: number;
	errorDeviceCount: number;
	instancePath: string;
	nonCompliantDeviceCount: number;
	notApplicableDeviceCount: number;
	remediatedDeviceCount: number;
	settingName: string;
	unknownDeviceCount: number;

}
/*********************************************
* deviceComplianceScheduledActionForRule
**********************************************/
export interface deviceComplianceScheduledActionForRule  {
	ruleName: string;
	scheduledActionConfigurations: IBaseResult<deviceComplianceActionItem[]>;
}
/*********************************************
* deviceComplianceUserStatus
**********************************************/
export interface deviceComplianceUserStatus  {
	devicesCount: number;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userDisplayName: string;
	userPrincipalName: string;

}
/*********************************************
* deviceComplianceUserOverview
**********************************************/
export interface deviceComplianceUserOverview  {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;

}
/*********************************************
* deviceComplianceSettingState
**********************************************/
export interface deviceComplianceSettingState  {
	complianceGracePeriodExpirationDateTime: any;
	deviceId: string;
	deviceModel: string;
	deviceName: string;
	setting: string;
	settingName: string;
	state: EnumTypes.complianceStatus;
	userEmail: string;
	userId: string;
	userName: string;
	userPrincipalName: string;

}
/*********************************************
* deviceCompliancePolicyState
**********************************************/
export interface deviceCompliancePolicyState  {
	displayName: string;
	platformType: EnumTypes.policyPlatformType;
	settingCount: number;
	settingStates: ComplexTypes.deviceCompliancePolicySettingState[];
	state: EnumTypes.complianceStatus;
	version: number;

}
/*********************************************
* deviceConfigurationAssignment
**********************************************/
export interface deviceConfigurationAssignment  {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* deviceConfigurationDeviceStatus
**********************************************/
export interface deviceConfigurationDeviceStatus  {
	complianceGracePeriodExpirationDateTime: any;
	deviceDisplayName: string;
	deviceModel: string;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userName: string;
	userPrincipalName: string;

}
/*********************************************
* deviceConfigurationDeviceOverview
**********************************************/
export interface deviceConfigurationDeviceOverview  {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;

}
/*********************************************
* deviceConfigurationUserStatus
**********************************************/
export interface deviceConfigurationUserStatus  {
	devicesCount: number;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userDisplayName: string;
	userPrincipalName: string;

}
/*********************************************
* deviceConfigurationUserOverview
**********************************************/
export interface deviceConfigurationUserOverview  {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;

}
/*********************************************
* deviceConfigurationState
**********************************************/
export interface deviceConfigurationState  {
	displayName: string;
	platformType: EnumTypes.policyPlatformType;
	settingCount: number;
	settingStates: ComplexTypes.deviceConfigurationSettingState[];
	state: EnumTypes.complianceStatus;
	version: number;

}
/*********************************************
* editionUpgradeConfiguration
**********************************************/
export interface editionUpgradeConfiguration  {
	license: string;
	licenseType: EnumTypes.editionUpgradeLicenseType;
	productKey: string;
	targetEdition: EnumTypes.windows10EditionType;

}
/*********************************************
* iosCertificateProfile
**********************************************/
export interface iosCertificateProfile  {


}
/*********************************************
* iosCompliancePolicy
**********************************************/
export interface iosCompliancePolicy  {
	deviceThreatProtectionEnabled: boolean;
	deviceThreatProtectionRequiredSecurityLevel: EnumTypes.deviceThreatProtectionLevel;
	managedEmailProfileRequired: boolean;
	osMaximumVersion: string;
	osMinimumVersion: string;
	passcodeBlockSimple: boolean;
	passcodeExpirationDays: number;
	passcodeMinimumCharacterSetCount: number;
	passcodeMinimumLength: number;
	passcodeMinutesOfInactivityBeforeLock: number;
	passcodePreviousPasscodeBlockCount: number;
	passcodeRequired: boolean;
	passcodeRequiredType: EnumTypes.requiredPasswordType;
	securityBlockJailbrokenDevices: boolean;

}
/*********************************************
* iosCustomConfiguration
**********************************************/
export interface iosCustomConfiguration  {
	payload: any;
	payloadFileName: string;
	payloadName: string;

}
/*********************************************
* iosDeviceFeaturesConfiguration
**********************************************/
export interface iosDeviceFeaturesConfiguration  {
	assetTagTemplate: string;
	homeScreenDockIcons: ComplexTypes.iosHomeScreenItem[];
	homeScreenPages: ComplexTypes.iosHomeScreenPage[];
	lockScreenFootnote: string;
	notificationSettings: ComplexTypes.iosNotificationSettings[];

}
/*********************************************
* iosGeneralDeviceConfiguration
**********************************************/
export interface iosGeneralDeviceConfiguration  {
	accountBlockModification: boolean;
	activationLockAllowWhenSupervised: boolean;
	airDropBlocked: boolean;
	airDropForceUnmanagedDropTarget: boolean;
	airPlayForcePairingPasswordForOutgoingRequests: boolean;
	appleNewsBlocked: boolean;
	appleWatchBlockPairing: boolean;
	appleWatchForceWristDetection: boolean;
	appsSingleAppModeList: ComplexTypes.appListItem[];
	appStoreBlockAutomaticDownloads: boolean;
	appStoreBlocked: boolean;
	appStoreBlockInAppPurchases: boolean;
	appStoreBlockUIAppInstallation: boolean;
	appStoreRequirePassword: boolean;
	appsVisibilityList: ComplexTypes.appListItem[];
	appsVisibilityListType: EnumTypes.appListType;
	bluetoothBlockModification: boolean;
	cameraBlocked: boolean;
	cellularBlockDataRoaming: boolean;
	cellularBlockGlobalBackgroundFetchWhileRoaming: boolean;
	cellularBlockPerAppDataModification: boolean;
	cellularBlockPersonalHotspot: boolean;
	cellularBlockVoiceRoaming: boolean;
	certificatesBlockUntrustedTlsCertificates: boolean;
	classroomAppBlockRemoteScreenObservation: boolean;
	classroomAppForceUnpromptedScreenObservation: boolean;
	compliantAppListType: EnumTypes.appListType;
	compliantAppsList: ComplexTypes.appListItem[];
	configurationProfileBlockChanges: boolean;
	definitionLookupBlocked: boolean;
	deviceBlockEnableRestrictions: boolean;
	deviceBlockEraseContentAndSettings: boolean;
	deviceBlockNameModification: boolean;
	diagnosticDataBlockSubmission: boolean;
	diagnosticDataBlockSubmissionModification: boolean;
	documentsBlockManagedDocumentsInUnmanagedApps: boolean;
	documentsBlockUnmanagedDocumentsInManagedApps: boolean;
	emailInDomainSuffixes: Array<string>[];
	enterpriseAppBlockTrust: boolean;
	enterpriseAppBlockTrustModification: boolean;
	faceTimeBlocked: boolean;
	findMyFriendsBlocked: boolean;
	gameCenterBlocked: boolean;
	gamingBlockGameCenterFriends: boolean;
	gamingBlockMultiplayer: boolean;
	hostPairingBlocked: boolean;
	iBooksStoreBlocked: boolean;
	iBooksStoreBlockErotica: boolean;
	iCloudBlockActivityContinuation: boolean;
	iCloudBlockBackup: boolean;
	iCloudBlockDocumentSync: boolean;
	iCloudBlockManagedAppsSync: boolean;
	iCloudBlockPhotoLibrary: boolean;
	iCloudBlockPhotoStreamSync: boolean;
	iCloudBlockSharedPhotoStream: boolean;
	iCloudRequireEncryptedBackup: boolean;
	iTunesBlockExplicitContent: boolean;
	iTunesBlockMusicService: boolean;
	iTunesBlockRadio: boolean;
	keyboardBlockAutoCorrect: boolean;
	keyboardBlockDictation: boolean;
	keyboardBlockPredictive: boolean;
	keyboardBlockShortcuts: boolean;
	keyboardBlockSpellCheck: boolean;
	kioskModeAllowAssistiveSpeak: boolean;
	kioskModeAllowAssistiveTouchSettings: boolean;
	kioskModeAllowAutoLock: boolean;
	kioskModeAllowColorInversionSettings: boolean;
	kioskModeAllowRingerSwitch: boolean;
	kioskModeAllowScreenRotation: boolean;
	kioskModeAllowSleepButton: boolean;
	kioskModeAllowTouchscreen: boolean;
	kioskModeAllowVoiceOverSettings: boolean;
	kioskModeAllowVolumeButtons: boolean;
	kioskModeAllowZoomSettings: boolean;
	kioskModeAppStoreUrl: string;
	kioskModeBuiltInAppId: string;
	kioskModeManagedAppId: string;
	kioskModeRequireAssistiveTouch: boolean;
	kioskModeRequireColorInversion: boolean;
	kioskModeRequireMonoAudio: boolean;
	kioskModeRequireVoiceOver: boolean;
	kioskModeRequireZoom: boolean;
	lockScreenBlockControlCenter: boolean;
	lockScreenBlockNotificationView: boolean;
	lockScreenBlockPassbook: boolean;
	lockScreenBlockTodayView: boolean;
	mediaContentRatingApps: EnumTypes.ratingAppsType;
	mediaContentRatingAustralia: ComplexTypes.mediaContentRatingAustralia;
	mediaContentRatingCanada: ComplexTypes.mediaContentRatingCanada;
	mediaContentRatingFrance: ComplexTypes.mediaContentRatingFrance;
	mediaContentRatingGermany: ComplexTypes.mediaContentRatingGermany;
	mediaContentRatingIreland: ComplexTypes.mediaContentRatingIreland;
	mediaContentRatingJapan: ComplexTypes.mediaContentRatingJapan;
	mediaContentRatingNewZealand: ComplexTypes.mediaContentRatingNewZealand;
	mediaContentRatingUnitedKingdom: ComplexTypes.mediaContentRatingUnitedKingdom;
	mediaContentRatingUnitedStates: ComplexTypes.mediaContentRatingUnitedStates;
	messagesBlocked: boolean;
	networkUsageRules: ComplexTypes.iosNetworkUsageRule[];
	notificationsBlockSettingsModification: boolean;
	passcodeBlockFingerprintModification: boolean;
	passcodeBlockFingerprintUnlock: boolean;
	passcodeBlockModification: boolean;
	passcodeBlockSimple: boolean;
	passcodeExpirationDays: number;
	passcodeMinimumCharacterSetCount: number;
	passcodeMinimumLength: number;
	passcodeMinutesOfInactivityBeforeLock: number;
	passcodeMinutesOfInactivityBeforeScreenTimeout: number;
	passcodePreviousPasscodeBlockCount: number;
	passcodeRequired: boolean;
	passcodeRequiredType: EnumTypes.requiredPasswordType;
	passcodeSignInFailureCountBeforeWipe: number;
	podcastsBlocked: boolean;
	safariBlockAutofill: boolean;
	safariBlocked: boolean;
	safariBlockJavaScript: boolean;
	safariBlockPopups: boolean;
	safariCookieSettings: EnumTypes.webBrowserCookieSettings;
	safariManagedDomains: Array<string>[];
	safariPasswordAutoFillDomains: Array<string>[];
	safariRequireFraudWarning: boolean;
	screenCaptureBlocked: boolean;
	siriBlocked: boolean;
	siriBlockedWhenLocked: boolean;
	siriBlockUserGeneratedContent: boolean;
	siriRequireProfanityFilter: boolean;
	spotlightBlockInternetResults: boolean;
	voiceDialingBlocked: boolean;
	wallpaperBlockModification: boolean;
	wiFiConnectOnlyToConfiguredNetworks: boolean;

}
/*********************************************
* iosUpdateConfiguration
**********************************************/
export interface iosUpdateConfiguration  {
	activeHoursEnd: any;
	activeHoursStart: any;
	scheduledInstallDays: EnumTypes.dayOfWeek[];
	utcTimeOffsetInMinutes: number;

}
/*********************************************
* macOSCompliancePolicy
**********************************************/
export interface macOSCompliancePolicy  {
	deviceThreatProtectionEnabled: boolean;
	deviceThreatProtectionRequiredSecurityLevel: EnumTypes.deviceThreatProtectionLevel;
	firewallBlockAllIncoming: boolean;
	firewallEnabled: boolean;
	firewallEnableStealthMode: boolean;
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	storageRequireEncryption: boolean;
	systemIntegrityProtectionEnabled: boolean;

}
/*********************************************
* macOSCustomConfiguration
**********************************************/
export interface macOSCustomConfiguration  {
	payload: any;
	payloadFileName: string;
	payloadName: string;

}
/*********************************************
* macOSDeviceFeaturesConfiguration
**********************************************/
export interface macOSDeviceFeaturesConfiguration  {


}
/*********************************************
* macOSGeneralDeviceConfiguration
**********************************************/
export interface macOSGeneralDeviceConfiguration  {
	compliantAppListType: EnumTypes.appListType;
	compliantAppsList: ComplexTypes.appListItem[];
	emailInDomainSuffixes: Array<string>[];
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordMinutesOfInactivityBeforeScreenTimeout: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;

}
/*********************************************
* reportRoot
**********************************************/
export interface reportRoot  {

	dailyPrintUsageByPrinter: IBaseResult<printUsageByPrinter[]>;
	dailyPrintUsageByUser: IBaseResult<printUsageByUser[]>;
	monthlyPrintUsageByPrinter: IBaseResult<printUsageByPrinter[]>;
	monthlyPrintUsageByUser: IBaseResult<printUsageByUser[]>;
}
/*********************************************
* printUsage
**********************************************/
export interface printUsage  {
	completedBlackAndWhiteJobCount: number;
	completedColorJobCount: number;
	incompleteJobCount: number;
	usageDate: any;

}
/*********************************************
* printUsageByPrinter
**********************************************/
export interface printUsageByPrinter  {
	printerId: string;

}
/*********************************************
* printUsageByUser
**********************************************/
export interface printUsageByUser  {
	userPrincipalName: string;

}
/*********************************************
* sharedPCConfiguration
**********************************************/
export interface sharedPCConfiguration  {
	accountManagerPolicy: ComplexTypes.sharedPCAccountManagerPolicy;
	allowedAccounts: EnumTypes.sharedPCAllowedAccountType;
	allowLocalStorage: boolean;
	disableAccountManager: boolean;
	disableEduPolicies: boolean;
	disablePowerPolicies: boolean;
	disableSignInOnResume: boolean;
	enabled: boolean;
	idleTimeBeforeSleepInSeconds: number;
	kioskAppDisplayName: string;
	kioskAppUserModelId: string;
	maintenanceStartTime: any;

}
/*********************************************
* windows10CompliancePolicy
**********************************************/
export interface windows10CompliancePolicy  {
	bitLockerEnabled: boolean;
	codeIntegrityEnabled: boolean;
	earlyLaunchAntiMalwareDriverEnabled: boolean;
	mobileOsMaximumVersion: string;
	mobileOsMinimumVersion: string;
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredToUnlockFromIdle: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	requireHealthyDeviceReport: boolean;
	secureBootEnabled: boolean;
	storageRequireEncryption: boolean;

}
/*********************************************
* windows10CustomConfiguration
**********************************************/
export interface windows10CustomConfiguration  {
	omaSettings: ComplexTypes.omaSetting[];

}
/*********************************************
* windows10EndpointProtectionConfiguration
**********************************************/
export interface windows10EndpointProtectionConfiguration  {
	applicationGuardAllowPersistence: boolean;
	applicationGuardAllowPrintToLocalPrinters: boolean;
	applicationGuardAllowPrintToNetworkPrinters: boolean;
	applicationGuardAllowPrintToPDF: boolean;
	applicationGuardAllowPrintToXPS: boolean;
	applicationGuardBlockClipboardSharing: EnumTypes.applicationGuardBlockClipboardSharingType;
	applicationGuardBlockFileTransfer: EnumTypes.applicationGuardBlockFileTransferType;
	applicationGuardBlockNonEnterpriseContent: boolean;
	applicationGuardEnabled: boolean;
	applicationGuardForceAuditing: boolean;
	appLockerApplicationControl: EnumTypes.appLockerApplicationControlType;
	bitLockerDisableWarningForOtherDiskEncryption: boolean;
	bitLockerEnableStorageCardEncryptionOnMobile: boolean;
	bitLockerEncryptDevice: boolean;
	bitLockerRemovableDrivePolicy: ComplexTypes.bitLockerRemovableDrivePolicy;
	defenderAdditionalGuardedFolders: Array<string>[];
	defenderAttackSurfaceReductionExcludedPaths: Array<string>[];
	defenderExploitProtectionXml: any;
	defenderExploitProtectionXmlFileName: string;
	defenderGuardedFoldersAllowedAppPaths: Array<string>[];
	defenderSecurityCenterBlockExploitProtectionOverride: boolean;
	firewallBlockStatefulFTP: boolean;
	firewallCertificateRevocationListCheckMethod: EnumTypes.firewallCertificateRevocationListCheckMethodType;
	firewallIdleTimeoutForSecurityAssociationInSeconds: number;
	firewallIPSecExemptionsAllowDHCP: boolean;
	firewallIPSecExemptionsAllowICMP: boolean;
	firewallIPSecExemptionsAllowNeighborDiscovery: boolean;
	firewallIPSecExemptionsAllowRouterDiscovery: boolean;
	firewallMergeKeyingModuleSettings: boolean;
	firewallPacketQueueingMethod: EnumTypes.firewallPacketQueueingMethodType;
	firewallPreSharedKeyEncodingMethod: EnumTypes.firewallPreSharedKeyEncodingMethodType;
	firewallProfileDomain: ComplexTypes.windowsFirewallNetworkProfile;
	firewallProfilePrivate: ComplexTypes.windowsFirewallNetworkProfile;
	firewallProfilePublic: ComplexTypes.windowsFirewallNetworkProfile;
	smartScreenBlockOverrideForFiles: boolean;
	smartScreenEnableInShell: boolean;

}
/*********************************************
* windows10EnterpriseModernAppManagementConfiguration
**********************************************/
export interface windows10EnterpriseModernAppManagementConfiguration  {
	uninstallBuiltInApps: boolean;

}
/*********************************************
* windows10GeneralConfiguration
**********************************************/
export interface windows10GeneralConfiguration  {
	accountsBlockAddingNonMicrosoftAccountEmail: boolean;
	antiTheftModeBlocked: boolean;
	appsAllowTrustedAppsSideloading: EnumTypes.stateManagementSetting;
	appsBlockWindowsStoreOriginatedApps: boolean;
	bluetoothAllowedServices: Array<string>[];
	bluetoothBlockAdvertising: boolean;
	bluetoothBlockDiscoverableMode: boolean;
	bluetoothBlocked: boolean;
	bluetoothBlockPrePairing: boolean;
	cameraBlocked: boolean;
	cellularBlockDataWhenRoaming: boolean;
	cellularBlockVpn: boolean;
	cellularBlockVpnWhenRoaming: boolean;
	certificatesBlockManualRootCertificateInstallation: boolean;
	connectedDevicesServiceBlocked: boolean;
	copyPasteBlocked: boolean;
	cortanaBlocked: boolean;
	defenderBlockEndUserAccess: boolean;
	defenderCloudBlockLevel: EnumTypes.defenderCloudBlockLevelType;
	defenderDaysBeforeDeletingQuarantinedMalware: number;
	defenderDetectedMalwareActions: ComplexTypes.defenderDetectedMalwareActions;
	defenderFileExtensionsToExclude: Array<string>[];
	defenderFilesAndFoldersToExclude: Array<string>[];
	defenderMonitorFileActivity: EnumTypes.defenderMonitorFileActivity;
	defenderProcessesToExclude: Array<string>[];
	defenderPromptForSampleSubmission: EnumTypes.defenderPromptForSampleSubmission;
	defenderRequireBehaviorMonitoring: boolean;
	defenderRequireCloudProtection: boolean;
	defenderRequireNetworkInspectionSystem: boolean;
	defenderRequireRealTimeMonitoring: boolean;
	defenderScanArchiveFiles: boolean;
	defenderScanDownloads: boolean;
	defenderScanIncomingMail: boolean;
	defenderScanMappedNetworkDrivesDuringFullScan: boolean;
	defenderScanMaxCpu: number;
	defenderScanNetworkFiles: boolean;
	defenderScanRemovableDrivesDuringFullScan: boolean;
	defenderScanScriptsLoadedInInternetExplorer: boolean;
	defenderScanType: EnumTypes.defenderScanType;
	defenderScheduledQuickScanTime: any;
	defenderScheduledScanTime: any;
	defenderSignatureUpdateIntervalInHours: number;
	defenderSystemScanSchedule: EnumTypes.weeklySchedule;
	developerUnlockSetting: EnumTypes.stateManagementSetting;
	deviceManagementBlockFactoryResetOnMobile: boolean;
	deviceManagementBlockManualUnenroll: boolean;
	diagnosticsDataSubmissionMode: EnumTypes.diagnosticDataSubmissionMode;
	edgeAllowStartPagesModification: boolean;
	edgeBlockAccessToAboutFlags: boolean;
	edgeBlockAddressBarDropdown: boolean;
	edgeBlockAutofill: boolean;
	edgeBlockCompatibilityList: boolean;
	edgeBlockDeveloperTools: boolean;
	edgeBlocked: boolean;
	edgeBlockExtensions: boolean;
	edgeBlockInPrivateBrowsing: boolean;
	edgeBlockJavaScript: boolean;
	edgeBlockLiveTileDataCollection: boolean;
	edgeBlockPasswordManager: boolean;
	edgeBlockPopups: boolean;
	edgeBlockSearchSuggestions: boolean;
	edgeBlockSendingDoNotTrackHeader: boolean;
	edgeBlockSendingIntranetTrafficToInternetExplorer: boolean;
	edgeClearBrowsingDataOnExit: boolean;
	edgeCookiePolicy: EnumTypes.edgeCookiePolicy;
	edgeDisableFirstRunPage: boolean;
	edgeEnterpriseModeSiteListLocation: string;
	edgeFirstRunUrl: string;
	edgeHomepageUrls: Array<string>[];
	edgeRequireSmartScreen: boolean;
	edgeSearchEngine: ComplexTypes.edgeSearchEngineBase;
	edgeSendIntranetTrafficToInternetExplorer: boolean;
	edgeSyncFavoritesWithInternetExplorer: boolean;
	enterpriseCloudPrintDiscoveryEndPoint: string;
	enterpriseCloudPrintDiscoveryMaxLimit: number;
	enterpriseCloudPrintMopriaDiscoveryResourceIdentifier: string;
	enterpriseCloudPrintOAuthAuthority: string;
	enterpriseCloudPrintOAuthClientIdentifier: string;
	enterpriseCloudPrintResourceIdentifier: string;
	experienceBlockDeviceDiscovery: boolean;
	experienceBlockErrorDialogWhenNoSIM: boolean;
	experienceBlockTaskSwitcher: boolean;
	gameDvrBlocked: boolean;
	internetSharingBlocked: boolean;
	locationServicesBlocked: boolean;
	lockScreenAllowTimeoutConfiguration: boolean;
	lockScreenBlockActionCenterNotifications: boolean;
	lockScreenBlockCortana: boolean;
	lockScreenBlockToastNotifications: boolean;
	lockScreenTimeoutInSeconds: number;
	logonBlockFastUserSwitching: boolean;
	microsoftAccountBlocked: boolean;
	microsoftAccountBlockSettingsSync: boolean;
	networkProxyApplySettingsDeviceWide: boolean;
	networkProxyAutomaticConfigurationUrl: string;
	networkProxyDisableAutoDetect: boolean;
	networkProxyServer: ComplexTypes.windows10NetworkProxyServer;
	nfcBlocked: boolean;
	oneDriveDisableFileSync: boolean;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeScreenTimeout: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	passwordRequireWhenResumeFromIdleState: boolean;
	passwordSignInFailureCountBeforeFactoryReset: number;
	personalizationDesktopImageUrl: string;
	personalizationLockScreenImageUrl: string;
	privacyAdvertisingId: EnumTypes.stateManagementSetting;
	privacyAutoAcceptPairingAndConsentPrompts: boolean;
	privacyBlockInputPersonalization: boolean;
	resetProtectionModeBlocked: boolean;
	safeSearchFilter: EnumTypes.safeSearchFilterType;
	screenCaptureBlocked: boolean;
	searchBlockDiacritics: boolean;
	searchDisableAutoLanguageDetection: boolean;
	searchDisableIndexerBackoff: boolean;
	searchDisableIndexingEncryptedItems: boolean;
	searchDisableIndexingRemovableDrive: boolean;
	searchEnableAutomaticIndexSizeManangement: boolean;
	searchEnableRemoteQueries: boolean;
	settingsBlockAccountsPage: boolean;
	settingsBlockAddProvisioningPackage: boolean;
	settingsBlockAppsPage: boolean;
	settingsBlockChangeLanguage: boolean;
	settingsBlockChangePowerSleep: boolean;
	settingsBlockChangeRegion: boolean;
	settingsBlockChangeSystemTime: boolean;
	settingsBlockDevicesPage: boolean;
	settingsBlockEaseOfAccessPage: boolean;
	settingsBlockEditDeviceName: boolean;
	settingsBlockGamingPage: boolean;
	settingsBlockNetworkInternetPage: boolean;
	settingsBlockPersonalizationPage: boolean;
	settingsBlockPrivacyPage: boolean;
	settingsBlockRemoveProvisioningPackage: boolean;
	settingsBlockSettingsApp: boolean;
	settingsBlockSystemPage: boolean;
	settingsBlockTimeLanguagePage: boolean;
	settingsBlockUpdateSecurityPage: boolean;
	sharedUserAppDataAllowed: boolean;
	smartScreenBlockPromptOverride: boolean;
	smartScreenBlockPromptOverrideForFiles: boolean;
	smartScreenEnableAppInstallControl: boolean;
	startBlockUnpinningAppsFromTaskbar: boolean;
	startMenuAppListVisibility: EnumTypes.windowsStartMenuAppListVisibilityType;
	startMenuHideChangeAccountSettings: boolean;
	startMenuHideFrequentlyUsedApps: boolean;
	startMenuHideHibernate: boolean;
	startMenuHideLock: boolean;
	startMenuHidePowerButton: boolean;
	startMenuHideRecentJumpLists: boolean;
	startMenuHideRecentlyAddedApps: boolean;
	startMenuHideRestartOptions: boolean;
	startMenuHideShutDown: boolean;
	startMenuHideSignOut: boolean;
	startMenuHideSleep: boolean;
	startMenuHideSwitchAccount: boolean;
	startMenuHideUserTile: boolean;
	startMenuLayoutEdgeAssetsXml: any;
	startMenuLayoutXml: any;
	startMenuMode: EnumTypes.windowsStartMenuModeType;
	startMenuPinnedFolderDocuments: EnumTypes.visibilitySetting;
	startMenuPinnedFolderDownloads: EnumTypes.visibilitySetting;
	startMenuPinnedFolderFileExplorer: EnumTypes.visibilitySetting;
	startMenuPinnedFolderHomeGroup: EnumTypes.visibilitySetting;
	startMenuPinnedFolderMusic: EnumTypes.visibilitySetting;
	startMenuPinnedFolderNetwork: EnumTypes.visibilitySetting;
	startMenuPinnedFolderPersonalFolder: EnumTypes.visibilitySetting;
	startMenuPinnedFolderPictures: EnumTypes.visibilitySetting;
	startMenuPinnedFolderSettings: EnumTypes.visibilitySetting;
	startMenuPinnedFolderVideos: EnumTypes.visibilitySetting;
	storageBlockRemovableStorage: boolean;
	storageRequireMobileDeviceEncryption: boolean;
	storageRestrictAppDataToSystemVolume: boolean;
	storageRestrictAppInstallToSystemVolume: boolean;
	tenantLockdownRequireNetworkDuringOutOfBoxExperience: boolean;
	usbBlocked: boolean;
	voiceRecordingBlocked: boolean;
	webRtcBlockLocalhostIpAddress: boolean;
	wiFiBlockAutomaticConnectHotspots: boolean;
	wiFiBlocked: boolean;
	wiFiBlockManualConfiguration: boolean;
	wiFiScanInterval: number;
	windowsSpotlightBlockConsumerSpecificFeatures: boolean;
	windowsSpotlightBlocked: boolean;
	windowsSpotlightBlockOnActionCenter: boolean;
	windowsSpotlightBlockTailoredExperiences: boolean;
	windowsSpotlightBlockThirdPartyNotifications: boolean;
	windowsSpotlightBlockWelcomeExperience: boolean;
	windowsSpotlightBlockWindowsTips: boolean;
	windowsSpotlightConfigureOnLockScreen: EnumTypes.windowsSpotlightEnablementSettings;
	windowsStoreBlockAutoUpdate: boolean;
	windowsStoreBlocked: boolean;
	windowsStoreEnablePrivateStoreOnly: boolean;
	wirelessDisplayBlockProjectionToThisDevice: boolean;
	wirelessDisplayBlockUserInputFromReceiver: boolean;
	wirelessDisplayRequirePinForPairing: boolean;

}
/*********************************************
* windows10MobileCompliancePolicy
**********************************************/
export interface windows10MobileCompliancePolicy  {
	bitLockerEnabled: boolean;
	codeIntegrityEnabled: boolean;
	earlyLaunchAntiMalwareDriverEnabled: boolean;
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	passwordRequireToUnlockFromIdle: boolean;
	secureBootEnabled: boolean;
	storageRequireEncryption: boolean;

}
/*********************************************
* windows10SecureAssessmentConfiguration
**********************************************/
export interface windows10SecureAssessmentConfiguration  {
	allowPrinting: boolean;
	allowScreenCapture: boolean;
	allowTextSuggestion: boolean;
	configurationAccount: string;
	launchUri: string;

}
/*********************************************
* windows10TeamGeneralConfiguration
**********************************************/
export interface windows10TeamGeneralConfiguration  {
	azureOperationalInsightsBlockTelemetry: boolean;
	azureOperationalInsightsWorkspaceId: string;
	azureOperationalInsightsWorkspaceKey: string;
	connectAppBlockAutoLaunch: boolean;
	maintenanceWindowBlocked: boolean;
	maintenanceWindowDurationInHours: number;
	maintenanceWindowStartTime: any;
	miracastBlocked: boolean;
	miracastChannel: EnumTypes.miracastChannel;
	miracastRequirePin: boolean;
	settingsBlockMyMeetingsAndFiles: boolean;
	settingsBlockSessionResume: boolean;
	settingsBlockSigninSuggestions: boolean;
	settingsDefaultVolume: number;
	settingsScreenTimeoutInMinutes: number;
	settingsSessionTimeoutInMinutes: number;
	settingsSleepTimeoutInMinutes: number;
	welcomeScreenBackgroundImageUrl: string;
	welcomeScreenBlockAutomaticWakeUp: boolean;
	welcomeScreenMeetingInformation: EnumTypes.welcomeScreenMeetingInformation;

}
/*********************************************
* windows81CompliancePolicy
**********************************************/
export interface windows81CompliancePolicy  {
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	storageRequireEncryption: boolean;

}
/*********************************************
* windows81GeneralConfiguration
**********************************************/
export interface windows81GeneralConfiguration  {
	accountsBlockAddingNonMicrosoftAccountEmail: boolean;
	applyOnlyToWindows81: boolean;
	browserBlockAutofill: boolean;
	browserBlockAutomaticDetectionOfIntranetSites: boolean;
	browserBlockEnterpriseModeAccess: boolean;
	browserBlockJavaScript: boolean;
	browserBlockPlugins: boolean;
	browserBlockPopups: boolean;
	browserBlockSendingDoNotTrackHeader: boolean;
	browserBlockSingleWordEntryOnIntranetSites: boolean;
	browserEnterpriseModeSiteListLocation: string;
	browserInternetSecurityLevel: EnumTypes.internetSiteSecurityLevel;
	browserIntranetSecurityLevel: EnumTypes.siteSecurityLevel;
	browserLoggingReportLocation: string;
	browserRequireFirewall: boolean;
	browserRequireFraudWarning: boolean;
	browserRequireHighSecurityForRestrictedSites: boolean;
	browserRequireSmartScreen: boolean;
	browserTrustedSitesSecurityLevel: EnumTypes.siteSecurityLevel;
	cellularBlockDataRoaming: boolean;
	diagnosticsBlockDataSubmission: boolean;
	passwordBlockPicturePasswordAndPin: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeScreenTimeout: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	passwordSignInFailureCountBeforeFactoryReset: number;
	storageRequireDeviceEncryption: boolean;
	updatesRequireAutomaticUpdates: boolean;
	userAccountControlSettings: EnumTypes.windowsUserAccountControlSettings;
	workFoldersUrl: string;

}
/*********************************************
* windowsDefenderAdvancedThreatProtectionConfiguration
**********************************************/
export interface windowsDefenderAdvancedThreatProtectionConfiguration  {
	allowSampleSharing: boolean;
	enableExpeditedTelemetryReporting: boolean;

}
/*********************************************
* windowsPhone81CompliancePolicy
**********************************************/
export interface windowsPhone81CompliancePolicy  {
	osMaximumVersion: string;
	osMinimumVersion: string;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeLock: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	storageRequireEncryption: boolean;

}
/*********************************************
* windowsPhone81CustomConfiguration
**********************************************/
export interface windowsPhone81CustomConfiguration  {
	omaSettings: ComplexTypes.omaSetting[];

}
/*********************************************
* windowsPhone81GeneralConfiguration
**********************************************/
export interface windowsPhone81GeneralConfiguration  {
	applyOnlyToWindowsPhone81: boolean;
	appsBlockCopyPaste: boolean;
	bluetoothBlocked: boolean;
	cameraBlocked: boolean;
	cellularBlockWifiTethering: boolean;
	compliantAppListType: EnumTypes.appListType;
	compliantAppsList: ComplexTypes.appListItem[];
	diagnosticDataBlockSubmission: boolean;
	emailBlockAddingAccounts: boolean;
	locationServicesBlocked: boolean;
	microsoftAccountBlocked: boolean;
	nfcBlocked: boolean;
	passwordBlockSimple: boolean;
	passwordExpirationDays: number;
	passwordMinimumCharacterSetCount: number;
	passwordMinimumLength: number;
	passwordMinutesOfInactivityBeforeScreenTimeout: number;
	passwordPreviousPasswordBlockCount: number;
	passwordRequired: boolean;
	passwordRequiredType: EnumTypes.requiredPasswordType;
	passwordSignInFailureCountBeforeFactoryReset: number;
	screenCaptureBlocked: boolean;
	storageBlockRemovableStorage: boolean;
	storageRequireEncryption: boolean;
	webBrowserBlocked: boolean;
	wifiBlockAutomaticConnectHotspots: boolean;
	wifiBlocked: boolean;
	wifiBlockHotspotReporting: boolean;
	windowsStoreBlocked: boolean;

}
/*********************************************
* windowsUpdateForBusinessConfiguration
**********************************************/
export interface windowsUpdateForBusinessConfiguration  {
	automaticUpdateMode: EnumTypes.automaticUpdateMode;
	businessReadyUpdatesOnly: EnumTypes.windowsUpdateType;
	deliveryOptimizationMode: EnumTypes.windowsDeliveryOptimizationMode;
	driversExcluded: boolean;
	featureUpdatesDeferralPeriodInDays: number;
	featureUpdatesPaused: boolean;
	featureUpdatesPauseExpiryDateTime: any;
	installationSchedule: ComplexTypes.windowsUpdateInstallScheduleType;
	microsoftUpdateServiceAllowed: boolean;
	prereleaseFeatures: EnumTypes.prereleaseFeatures;
	qualityUpdatesDeferralPeriodInDays: number;
	qualityUpdatesPaused: boolean;
	qualityUpdatesPauseExpiryDateTime: any;

}
/*********************************************
* enrollmentConfigurationAssignment
**********************************************/
export interface enrollmentConfigurationAssignment  {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* deviceEnrollmentLimitConfiguration
**********************************************/
export interface deviceEnrollmentLimitConfiguration  {
	limit: number;

}
/*********************************************
* deviceEnrollmentPlatformRestrictionsConfiguration
**********************************************/
export interface deviceEnrollmentPlatformRestrictionsConfiguration  {
	androidRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	iosRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	macOSRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	windowsMobileRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	windowsRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;

}
/*********************************************
* deviceEnrollmentWindowsHelloForBusinessConfiguration
**********************************************/
export interface deviceEnrollmentWindowsHelloForBusinessConfiguration  {
	enhancedBiometricsState: EnumTypes.enablement;
	pinExpirationInDays: number;
	pinLowercaseCharactersUsage: EnumTypes.windowsHelloForBusinessPinUsage;
	pinMaximumLength: number;
	pinMinimumLength: number;
	pinPreviousBlockCount: number;
	pinSpecialCharactersUsage: EnumTypes.windowsHelloForBusinessPinUsage;
	pinUppercaseCharactersUsage: EnumTypes.windowsHelloForBusinessPinUsage;
	remotePassportEnabled: boolean;
	securityDeviceRequired: boolean;
	state: EnumTypes.enablement;
	unlockWithBiometricsEnabled: boolean;

}
/*********************************************
* userExperienceAnalyticsDevicePerformance
**********************************************/
export interface userExperienceAnalyticsDevicePerformance  {
	averageBlueScreens: number;
	averageRestarts: number;
	blueScreenCount: number;
	bootScore: number;
	coreBootTimeInMs: number;
	coreLoginTimeInMs: number;
	deviceCount: number;
	deviceName: string;
	diskType: EnumTypes.diskType;
	groupPolicyBootTimeInMs: number;
	groupPolicyLoginTimeInMs: number;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	loginScore: number;
	manufacturer: string;
	model: string;
	modelStartupPerformanceScore: number;
	operatingSystemVersion: string;
	responsiveDesktopTimeInMs: number;
	restartCount: number;
	startupPerformanceScore: number;

}
/*********************************************
* importedWindowsAutopilotDeviceIdentityUpload
**********************************************/
export interface importedWindowsAutopilotDeviceIdentityUpload  {
	createdDateTimeUtc: any;
	status: EnumTypes.importedWindowsAutopilotDeviceIdentityUploadStatus;
	deviceIdentities: IBaseResult<importedWindowsAutopilotDeviceIdentity[]>;
}
/*********************************************
* managedMobileApp
**********************************************/
export interface managedMobileApp  {
	mobileAppIdentifier: ComplexTypes.mobileAppIdentifier;
	version: string;

}
/*********************************************
* managedAppPolicyDeploymentSummary
**********************************************/
export interface managedAppPolicyDeploymentSummary  {
	configurationDeployedUserCount: number;
	configurationDeploymentSummaryPerApp: ComplexTypes.managedAppPolicyDeploymentSummaryPerApp[];
	displayName: string;
	lastRefreshTime: any;
	version: string;

}
/*********************************************
* androidManagedAppRegistration
**********************************************/
export interface androidManagedAppRegistration  {


}
/*********************************************
* iosManagedAppRegistration
**********************************************/
export interface iosManagedAppRegistration  {


}
/*********************************************
* managedAppOperation
**********************************************/
export interface managedAppOperation  {
	displayName: string;
	lastModifiedDateTime: any;
	state: string;
	version: string;

}
/*********************************************
* managedAppStatusRaw
**********************************************/
export interface managedAppStatusRaw  {
	content: ComplexTypes.Json;

}
/*********************************************
* targetedManagedAppPolicyAssignment
**********************************************/
export interface targetedManagedAppPolicyAssignment  {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* windowsInformationProtectionAppLockerFile
**********************************************/
export interface windowsInformationProtectionAppLockerFile  {
	displayName: string;
	file: any;
	fileHash: string;
	version: string;

}
/*********************************************
* localizedNotificationMessage
**********************************************/
export interface localizedNotificationMessage  {
	isDefault: boolean;
	lastModifiedDateTime: any;
	locale: string;
	messageTemplate: string;
	subject: string;

}
/*********************************************
* deviceAndAppManagementRoleDefinition
**********************************************/
export interface deviceAndAppManagementRoleDefinition  {


}
/*********************************************
* deviceManagementExportJob
**********************************************/
export interface deviceManagementExportJob  {
	expirationDateTime: any;
	filter: string;
	format: EnumTypes.deviceManagementReportFileFormat;
	localizationType: EnumTypes.deviceManagementExportJobLocalizationType;
	reportName: string;
	requestDateTime: any;
	select: Array<string>[];
	snapshotId: string;
	status: EnumTypes.deviceManagementReportStatus;
	url: string;

}
/*********************************************
* enrollmentTroubleshootingEvent
**********************************************/
export interface enrollmentTroubleshootingEvent  {
	deviceId: string;
	enrollmentType: EnumTypes.deviceEnrollmentType;
	failureCategory: EnumTypes.deviceEnrollmentFailureReason;
	failureReason: string;
	managedDeviceIdentifier: string;
	operatingSystem: string;
	osVersion: string;
	userId: string;

}
/*********************************************
* admin
**********************************************/
export interface admin  {

	serviceAnnouncement: IBaseResult<serviceAnnouncement>;
}
/*********************************************
* serviceAnnouncement
**********************************************/
export interface serviceAnnouncement  {

	healthOverviews: IBaseResult<serviceHealth[]>;
	issues: IBaseResult<serviceHealthIssue[]>;
	messages: IBaseResult<serviceUpdateMessage[]>;
}
/*********************************************
* serviceHealth
**********************************************/
export interface serviceHealth  {
	service: string;
	status: EnumTypes.serviceHealthStatus;
	issues: IBaseResult<serviceHealthIssue[]>;
}
/*********************************************
* serviceAnnouncementBase
**********************************************/
export interface serviceAnnouncementBase  {
	details: ComplexTypes.keyValuePair[];
	endDateTime: any;
	lastModifiedDateTime: any;
	startDateTime: any;
	title: string;

}
/*********************************************
* serviceHealthIssue
**********************************************/
export interface serviceHealthIssue  {
	classification: EnumTypes.serviceHealthClassificationType;
	feature: string;
	featureGroup: string;
	impactDescription: string;
	isResolved: boolean;
	origin: EnumTypes.serviceHealthOrigin;
	posts: ComplexTypes.serviceHealthIssuePost[];
	service: string;
	status: EnumTypes.serviceHealthStatus;

}
/*********************************************
* serviceUpdateMessage
**********************************************/
export interface serviceUpdateMessage  {
	actionRequiredByDateTime: any;
	attachmentsArchive: any;
	body: ComplexTypes.itemBody;
	category: EnumTypes.serviceUpdateCategory;
	hasAttachments: boolean;
	isMajorChange: boolean;
	services: Array<string>[];
	severity: EnumTypes.serviceUpdateSeverity;
	tags: Array<string>[];
	viewPoint: ComplexTypes.serviceUpdateMessageViewpoint;
	attachments: IBaseResult<serviceAnnouncementAttachment[]>;
}
/*********************************************
* serviceAnnouncementAttachment
**********************************************/
export interface serviceAnnouncementAttachment  {
	content: any;
	contentType: string;
	lastModifiedDateTime: any;
	name: string;
	size: number;

}
/*********************************************
* searchEntity
**********************************************/
export interface searchEntity  {


}
/*********************************************
* planner
**********************************************/
export interface planner  {

	buckets: IBaseResult<plannerBucket[]>;
	plans: IBaseResult<plannerPlan[]>;
	tasks: IBaseResult<plannerTask[]>;
}
/*********************************************
* plannerBucket
**********************************************/
export interface plannerBucket  {
	name: string;
	orderHint: string;
	planId: string;
	tasks: IBaseResult<plannerTask[]>;
}
/*********************************************
* plannerPlan
**********************************************/
export interface plannerPlan  {
	container: ComplexTypes.plannerPlanContainer;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	owner: string;
	title: string;
	buckets: IBaseResult<plannerBucket[]>;
	details: IBaseResult<plannerPlanDetails>;
	tasks: IBaseResult<plannerTask[]>;
}
/*********************************************
* plannerTask
**********************************************/
export interface plannerTask  {
	activeChecklistItemCount: number;
	appliedCategories: ComplexTypes.plannerAppliedCategories;
	assigneePriority: string;
	assignments: ComplexTypes.plannerAssignments;
	bucketId: string;
	checklistItemCount: number;
	completedBy: ComplexTypes.identitySet;
	completedDateTime: any;
	conversationThreadId: string;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	dueDateTime: any;
	hasDescription: boolean;
	orderHint: string;
	percentComplete: number;
	planId: string;
	previewType: EnumTypes.plannerPreviewType;
	priority: number;
	referenceCount: number;
	startDateTime: any;
	title: string;
	assignedToTaskBoardFormat: IBaseResult<plannerAssignedToTaskBoardTaskFormat>;
	bucketTaskBoardFormat: IBaseResult<plannerBucketTaskBoardTaskFormat>;
	details: IBaseResult<plannerTaskDetails>;
	progressTaskBoardFormat: IBaseResult<plannerProgressTaskBoardTaskFormat>;
}
/*********************************************
* plannerAssignedToTaskBoardTaskFormat
**********************************************/
export interface plannerAssignedToTaskBoardTaskFormat  {
	orderHintsByAssignee: ComplexTypes.plannerOrderHintsByAssignee;
	unassignedOrderHint: string;

}
/*********************************************
* plannerBucketTaskBoardTaskFormat
**********************************************/
export interface plannerBucketTaskBoardTaskFormat  {
	orderHint: string;

}
/*********************************************
* plannerPlanDetails
**********************************************/
export interface plannerPlanDetails  {
	categoryDescriptions: ComplexTypes.plannerCategoryDescriptions;
	sharedWith: ComplexTypes.plannerUserIds;

}
/*********************************************
* plannerProgressTaskBoardTaskFormat
**********************************************/
export interface plannerProgressTaskBoardTaskFormat  {
	orderHint: string;

}
/*********************************************
* plannerTaskDetails
**********************************************/
export interface plannerTaskDetails  {
	checklist: ComplexTypes.plannerChecklistItems;
	description: string;
	previewType: EnumTypes.plannerPreviewType;
	references: ComplexTypes.plannerExternalReferences;

}
/*********************************************
* sharedInsight
**********************************************/
export interface sharedInsight  {
	lastShared: ComplexTypes.sharingDetail;
	resourceReference: ComplexTypes.resourceReference;
	resourceVisualization: ComplexTypes.resourceVisualization;
	sharingHistory: ComplexTypes.sharingDetail[];
	lastSharedMethod: IBaseResult<entity>;
	resource: IBaseResult<entity>;
}
/*********************************************
* trending
**********************************************/
export interface trending  {
	lastModifiedDateTime: any;
	resourceReference: ComplexTypes.resourceReference;
	resourceVisualization: ComplexTypes.resourceVisualization;
	weight: number;
	resource: IBaseResult<entity>;
}
/*********************************************
* usedInsight
**********************************************/
export interface usedInsight  {
	lastUsed: ComplexTypes.usageDetails;
	resourceReference: ComplexTypes.resourceReference;
	resourceVisualization: ComplexTypes.resourceVisualization;
	resource: IBaseResult<entity>;
}
/*********************************************
* changeTrackedEntity
**********************************************/
export interface changeTrackedEntity  {
	createdDateTime: any;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;

}
/*********************************************
* shiftPreferences
**********************************************/
export interface shiftPreferences  {
	availability: ComplexTypes.shiftAvailability[];

}
/*********************************************
* onenoteEntityBaseModel
**********************************************/
export interface onenoteEntityBaseModel  {
	self: string;

}
/*********************************************
* onenoteEntitySchemaObjectModel
**********************************************/
export interface onenoteEntitySchemaObjectModel  {
	createdDateTime: any;

}
/*********************************************
* onenoteEntityHierarchyModel
**********************************************/
export interface onenoteEntityHierarchyModel  {
	createdBy: ComplexTypes.identitySet;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;

}
/*********************************************
* notebook
**********************************************/
export interface notebook  {
	isDefault: boolean;
	isShared: boolean;
	links: ComplexTypes.notebookLinks;
	sectionGroupsUrl: string;
	sectionsUrl: string;
	userRole: EnumTypes.onenoteUserRole;
	sectionGroups: IBaseResult<sectionGroup[]>;
	sections: IBaseResult<onenoteSection[]>;
}
/*********************************************
* sectionGroup
**********************************************/
export interface sectionGroup  {
	sectionGroupsUrl: string;
	sectionsUrl: string;
	parentNotebook: IBaseResult<notebook>;
	parentSectionGroup: IBaseResult<sectionGroup>;
	sectionGroups: IBaseResult<sectionGroup[]>;
	sections: IBaseResult<onenoteSection[]>;
}
/*********************************************
* onenoteSection
**********************************************/
export interface onenoteSection  {
	isDefault: boolean;
	links: ComplexTypes.sectionLinks;
	pagesUrl: string;
	pages: IBaseResult<onenotePage[]>;
	parentNotebook: IBaseResult<notebook>;
	parentSectionGroup: IBaseResult<sectionGroup>;
}
/*********************************************
* operation
**********************************************/
export interface operation  {
	createdDateTime: any;
	lastActionDateTime: any;
	status: EnumTypes.operationStatus;

}
/*********************************************
* onenoteOperation
**********************************************/
export interface onenoteOperation  {
	error: ComplexTypes.onenoteOperationError;
	percentComplete: string;
	resourceId: string;
	resourceLocation: string;

}
/*********************************************
* onenotePage
**********************************************/
export interface onenotePage  {
	content: any;
	contentUrl: string;
	createdByAppId: string;
	lastModifiedDateTime: any;
	level: number;
	links: ComplexTypes.pageLinks;
	order: number;
	title: string;
	userTags: Array<string>[];
	parentNotebook: IBaseResult<notebook>;
	parentSection: IBaseResult<onenoteSection>;
}
/*********************************************
* onenoteResource
**********************************************/
export interface onenoteResource  {
	content: any;
	contentUrl: string;

}
/*********************************************
* unifiedRoleManagementPolicyRule
**********************************************/
export interface unifiedRoleManagementPolicyRule  {
	target: ComplexTypes.unifiedRoleManagementPolicyRuleTarget;

}
/*********************************************
* unifiedRoleManagementPolicyApprovalRule
**********************************************/
export interface unifiedRoleManagementPolicyApprovalRule  {
	setting: ComplexTypes.approvalSettings;

}
/*********************************************
* unifiedRoleManagementPolicyAuthenticationContextRule
**********************************************/
export interface unifiedRoleManagementPolicyAuthenticationContextRule  {
	claimValue: string;
	isEnabled: boolean;

}
/*********************************************
* unifiedRoleManagementPolicyEnablementRule
**********************************************/
export interface unifiedRoleManagementPolicyEnablementRule  {
	enabledRules: Array<string>[];

}
/*********************************************
* unifiedRoleManagementPolicyExpirationRule
**********************************************/
export interface unifiedRoleManagementPolicyExpirationRule  {
	isExpirationRequired: boolean;
	maximumDuration: number;

}
/*********************************************
* unifiedRoleManagementPolicyNotificationRule
**********************************************/
export interface unifiedRoleManagementPolicyNotificationRule  {
	isDefaultRecipientsEnabled: boolean;
	notificationLevel: string;
	notificationRecipients: Array<string>[];
	notificationType: string;
	recipientType: string;

}
/*********************************************
* print
**********************************************/
export interface print  {
	settings: ComplexTypes.printSettings;
	connectors: IBaseResult<printConnector[]>;
	operations: IBaseResult<printOperation[]>;
	printers: IBaseResult<printer[]>;
	services: IBaseResult<printService[]>;
	shares: IBaseResult<printerShare[]>;
	taskDefinitions: IBaseResult<printTaskDefinition[]>;
}
/*********************************************
* printConnector
**********************************************/
export interface printConnector  {
	appVersion: string;
	displayName: string;
	fullyQualifiedDomainName: string;
	location: ComplexTypes.printerLocation;
	operatingSystem: string;
	registeredDateTime: any;

}
/*********************************************
* printOperation
**********************************************/
export interface printOperation  {
	createdDateTime: any;
	status: ComplexTypes.printOperationStatus;

}
/*********************************************
* printerBase
**********************************************/
export interface printerBase  {
	capabilities: ComplexTypes.printerCapabilities;
	defaults: ComplexTypes.printerDefaults;
	displayName: string;
	isAcceptingJobs: boolean;
	location: ComplexTypes.printerLocation;
	manufacturer: string;
	model: string;
	status: ComplexTypes.printerStatus;
	jobs: IBaseResult<printJob[]>;
}
/*********************************************
* printer
**********************************************/
export interface printer  {
	hasPhysicalDevice: boolean;
	isShared: boolean;
	lastSeenDateTime: any;
	registeredDateTime: any;
	connectors: IBaseResult<printConnector[]>;
	shares: IBaseResult<printerShare[]>;
	taskTriggers: IBaseResult<printTaskTrigger[]>;
}
/*********************************************
* printService
**********************************************/
export interface printService  {

	endpoints: IBaseResult<printServiceEndpoint[]>;
}
/*********************************************
* printerShare
**********************************************/
export interface printerShare  {
	allowAllUsers: boolean;
	createdDateTime: any;
	allowedGroups: IBaseResult<group[]>;
	allowedUsers: IBaseResult<user[]>;
	printer: IBaseResult<printer>;
}
/*********************************************
* printTaskDefinition
**********************************************/
export interface printTaskDefinition  {
	createdBy: ComplexTypes.appIdentity;
	displayName: string;
	tasks: IBaseResult<printTask[]>;
}
/*********************************************
* printDocument
**********************************************/
export interface printDocument  {
	contentType: string;
	displayName: string;
	size: number;

}
/*********************************************
* printTaskTrigger
**********************************************/
export interface printTaskTrigger  {
	event: EnumTypes.printEvent;
	definition: IBaseResult<printTaskDefinition>;
}
/*********************************************
* printJob
**********************************************/
export interface printJob  {
	configuration: ComplexTypes.printJobConfiguration;
	createdBy: ComplexTypes.userIdentity;
	createdDateTime: any;
	isFetchable: boolean;
	redirectedFrom: string;
	redirectedTo: string;
	status: ComplexTypes.printJobStatus;
	documents: IBaseResult<printDocument[]>;
	tasks: IBaseResult<printTask[]>;
}
/*********************************************
* printerCreateOperation
**********************************************/
export interface printerCreateOperation  {
	certificate: string;
	printer: IBaseResult<printer>;
}
/*********************************************
* printTask
**********************************************/
export interface printTask  {
	parentUrl: string;
	status: ComplexTypes.printTaskStatus;
	definition: IBaseResult<printTaskDefinition>;
	trigger: IBaseResult<printTaskTrigger>;
}
/*********************************************
* printServiceEndpoint
**********************************************/
export interface printServiceEndpoint  {
	displayName: string;
	uri: string;

}
/*********************************************
* activityHistoryItem
**********************************************/
export interface activityHistoryItem  {
	activeDurationSeconds: number;
	createdDateTime: any;
	expirationDateTime: any;
	lastActiveDateTime: any;
	lastModifiedDateTime: any;
	startedDateTime: any;
	status: EnumTypes.status;
	userTimezone: string;
	activity: IBaseResult<userActivity>;
}
/*********************************************
* dataPolicyOperation
**********************************************/
export interface dataPolicyOperation  {
	completedDateTime: any;
	progress: number;
	status: EnumTypes.dataPolicyOperationStatus;
	storageLocation: string;
	submittedDateTime: any;
	userId: string;

}
/*********************************************
* attendanceRecord
**********************************************/
export interface attendanceRecord  {
	attendanceIntervals: ComplexTypes.attendanceInterval[];
	emailAddress: string;
	identity: ComplexTypes.identity;
	role: string;
	totalAttendanceInSeconds: number;

}
/*********************************************
* audioRoutingGroup
**********************************************/
export interface audioRoutingGroup  {
	receivers: Array<string>[];
	routingMode: EnumTypes.routingMode;
	sources: Array<string>[];

}
/*********************************************
* commsOperation
**********************************************/
export interface commsOperation  {
	clientContext: string;
	resultInfo: ComplexTypes.resultInfo;
	status: EnumTypes.operationStatus;

}
/*********************************************
* participant
**********************************************/
export interface participant  {
	info: ComplexTypes.participantInfo;
	isInLobby: boolean;
	isMuted: boolean;
	mediaStreams: ComplexTypes.mediaStream[];
	metadata: string;
	recordingInfo: ComplexTypes.recordingInfo;

}
/*********************************************
* cancelMediaProcessingOperation
**********************************************/
export interface cancelMediaProcessingOperation  {


}
/*********************************************
* inviteParticipantsOperation
**********************************************/
export interface inviteParticipantsOperation  {
	participants: ComplexTypes.invitationParticipantInfo[];

}
/*********************************************
* meetingAttendanceReport
**********************************************/
export interface meetingAttendanceReport  {
	meetingEndDateTime: any;
	meetingStartDateTime: any;
	totalParticipantCount: number;
	attendanceRecords: IBaseResult<attendanceRecord[]>;
}
/*********************************************
* muteParticipantOperation
**********************************************/
export interface muteParticipantOperation  {


}
/*********************************************
* participantJoiningNotification
**********************************************/
export interface participantJoiningNotification  {

	call: IBaseResult<call>;
}
/*********************************************
* participantLeftNotification
**********************************************/
export interface participantLeftNotification  {
	participantId: string;
	call: IBaseResult<call>;
}
/*********************************************
* playPromptOperation
**********************************************/
export interface playPromptOperation  {


}
/*********************************************
* recordOperation
**********************************************/
export interface recordOperation  {
	recordingAccessToken: string;
	recordingLocation: string;

}
/*********************************************
* startHoldMusicOperation
**********************************************/
export interface startHoldMusicOperation  {


}
/*********************************************
* stopHoldMusicOperation
**********************************************/
export interface stopHoldMusicOperation  {


}
/*********************************************
* subscribeToToneOperation
**********************************************/
export interface subscribeToToneOperation  {


}
/*********************************************
* unmuteParticipantOperation
**********************************************/
export interface unmuteParticipantOperation  {


}
/*********************************************
* updateRecordingStatusOperation
**********************************************/
export interface updateRecordingStatusOperation  {


}
/*********************************************
* authenticationMethod
**********************************************/
export interface authenticationMethod  {


}
/*********************************************
* emailAuthenticationMethod
**********************************************/
export interface emailAuthenticationMethod  {
	emailAddress: string;

}
/*********************************************
* fido2AuthenticationMethod
**********************************************/
export interface fido2AuthenticationMethod  {
	aaGuid: string;
	attestationCertificates: Array<string>[];
	attestationLevel: EnumTypes.attestationLevel;
	createdDateTime: any;
	displayName: string;
	model: string;

}
/*********************************************
* microsoftAuthenticatorAuthenticationMethod
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethod  {
	createdDateTime: any;
	deviceTag: string;
	displayName: string;
	phoneAppVersion: string;
	device: IBaseResult<device>;
}
/*********************************************
* passwordAuthenticationMethod
**********************************************/
export interface passwordAuthenticationMethod  {
	createdDateTime: any;
	password: string;

}
/*********************************************
* phoneAuthenticationMethod
**********************************************/
export interface phoneAuthenticationMethod  {
	phoneNumber: string;
	phoneType: EnumTypes.authenticationPhoneType;
	smsSignInState: EnumTypes.authenticationMethodSignInState;

}
/*********************************************
* softwareOathAuthenticationMethod
**********************************************/
export interface softwareOathAuthenticationMethod  {
	secretKey: string;

}
/*********************************************
* temporaryAccessPassAuthenticationMethod
**********************************************/
export interface temporaryAccessPassAuthenticationMethod  {
	createdDateTime: any;
	isUsable: boolean;
	isUsableOnce: boolean;
	lifetimeInMinutes: number;
	methodUsabilityReason: string;
	startDateTime: any;
	temporaryAccessPass: string;

}
/*********************************************
* windowsHelloForBusinessAuthenticationMethod
**********************************************/
export interface windowsHelloForBusinessAuthenticationMethod  {
	createdDateTime: any;
	displayName: string;
	keyStrength: EnumTypes.authenticationMethodKeyStrength;
	device: IBaseResult<device>;
}
/*********************************************
* aadUserConversationMember
**********************************************/
export interface aadUserConversationMember  {
	email: string;
	tenantId: string;
	userId: string;
	user: IBaseResult<user>;
}
/*********************************************
* appCatalogs
**********************************************/
export interface appCatalogs  {

	teamsApps: IBaseResult<teamsApp[]>;
}
/*********************************************
* teamsApp
**********************************************/
export interface teamsApp  {
	displayName: string;
	distributionMethod: EnumTypes.teamsAppDistributionMethod;
	externalId: string;
	appDefinitions: IBaseResult<teamsAppDefinition[]>;
}
/*********************************************
* teamInfo
**********************************************/
export interface teamInfo  {
	displayName: string;
	tenantId: string;
	team: IBaseResult<team>;
}
/*********************************************
* associatedTeamInfo
**********************************************/
export interface associatedTeamInfo  {


}
/*********************************************
* chatMessage
**********************************************/
export interface chatMessage  {
	attachments: ComplexTypes.chatMessageAttachment[];
	body: ComplexTypes.itemBody;
	channelIdentity: ComplexTypes.channelIdentity;
	chatId: string;
	createdDateTime: any;
	deletedDateTime: any;
	etag: string;
	eventDetail: ComplexTypes.eventMessageDetail;
	from: ComplexTypes.chatMessageFromIdentitySet;
	importance: EnumTypes.chatMessageImportance;
	lastEditedDateTime: any;
	lastModifiedDateTime: any;
	locale: string;
	mentions: ComplexTypes.chatMessageMention[];
	messageType: EnumTypes.chatMessageType;
	policyViolation: ComplexTypes.chatMessagePolicyViolation;
	reactions: ComplexTypes.chatMessageReaction[];
	replyToId: string;
	subject: string;
	summary: string;
	webUrl: string;
	hostedContents: IBaseResult<chatMessageHostedContent[]>;
	replies: IBaseResult<chatMessage[]>;
}
/*********************************************
* sharedWithChannelTeamInfo
**********************************************/
export interface sharedWithChannelTeamInfo  {
	isHostTeam: boolean;
	allowedMembers: IBaseResult<conversationMember[]>;
}
/*********************************************
* teamsTab
**********************************************/
export interface teamsTab  {
	configuration: ComplexTypes.teamsTabConfiguration;
	displayName: string;
	webUrl: string;
	teamsApp: IBaseResult<teamsApp>;
}
/*********************************************
* teamworkHostedContent
**********************************************/
export interface teamworkHostedContent  {
	contentBytes: any;
	contentType: string;

}
/*********************************************
* chatMessageHostedContent
**********************************************/
export interface chatMessageHostedContent  {


}
/*********************************************
* teamsAppDefinition
**********************************************/
export interface teamsAppDefinition  {
	createdBy: ComplexTypes.identitySet;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	publishingState: EnumTypes.teamsAppPublishingState;
	shortDescription: string;
	teamsAppId: string;
	version: string;
	bot: IBaseResult<teamworkBot>;
}
/*********************************************
* teamworkBot
**********************************************/
export interface teamworkBot  {


}
/*********************************************
* teamwork
**********************************************/
export interface teamwork  {

	workforceIntegrations: IBaseResult<workforceIntegration[]>;
}
/*********************************************
* workforceIntegration
**********************************************/
export interface workforceIntegration  {
	apiVersion: number;
	displayName: string;
	encryption: ComplexTypes.workforceIntegrationEncryption;
	isActive: boolean;
	supportedEntities: EnumTypes.workforceIntegrationSupportedEntities;
	url: string;

}
/*********************************************
* userScopeTeamsAppInstallation
**********************************************/
export interface userScopeTeamsAppInstallation  {

	chat: IBaseResult<chat>;
}
/*********************************************
* scheduleChangeRequest
**********************************************/
export interface scheduleChangeRequest  {
	assignedTo: EnumTypes.scheduleChangeRequestActor;
	managerActionDateTime: any;
	managerActionMessage: string;
	managerUserId: string;
	senderDateTime: any;
	senderMessage: string;
	senderUserId: string;
	state: EnumTypes.scheduleChangeState;

}
/*********************************************
* offerShiftRequest
**********************************************/
export interface offerShiftRequest  {
	recipientActionDateTime: any;
	recipientActionMessage: string;
	recipientUserId: string;
	senderShiftId: string;

}
/*********************************************
* openShift
**********************************************/
export interface openShift  {
	draftOpenShift: ComplexTypes.openShiftItem;
	schedulingGroupId: string;
	sharedOpenShift: ComplexTypes.openShiftItem;

}
/*********************************************
* openShiftChangeRequest
**********************************************/
export interface openShiftChangeRequest  {
	openShiftId: string;

}
/*********************************************
* schedulingGroup
**********************************************/
export interface schedulingGroup  {
	displayName: string;
	isActive: boolean;
	userIds: Array<string>[];

}
/*********************************************
* shift
**********************************************/
export interface shift  {
	draftShift: ComplexTypes.shiftItem;
	schedulingGroupId: string;
	sharedShift: ComplexTypes.shiftItem;
	userId: string;

}
/*********************************************
* swapShiftsChangeRequest
**********************************************/
export interface swapShiftsChangeRequest  {
	recipientShiftId: string;

}
/*********************************************
* timeOffReason
**********************************************/
export interface timeOffReason  {
	displayName: string;
	iconType: EnumTypes.timeOffReasonIconType;
	isActive: boolean;

}
/*********************************************
* timeOffRequest
**********************************************/
export interface timeOffRequest  {
	endDateTime: any;
	startDateTime: any;
	timeOffReasonId: string;

}
/*********************************************
* timeOff
**********************************************/
export interface timeOff  {
	draftTimeOff: ComplexTypes.timeOffItem;
	sharedTimeOff: ComplexTypes.timeOffItem;
	userId: string;

}
/*********************************************
* emailFileAssessmentRequest
**********************************************/
export interface emailFileAssessmentRequest  {
	contentData: string;
	destinationRoutingReason: EnumTypes.mailDestinationRoutingReason;
	recipientEmail: string;

}
/*********************************************
* fileAssessmentRequest
**********************************************/
export interface fileAssessmentRequest  {
	contentData: string;
	fileName: string;

}
/*********************************************
* mailAssessmentRequest
**********************************************/
export interface mailAssessmentRequest  {
	destinationRoutingReason: EnumTypes.mailDestinationRoutingReason;
	messageUri: string;
	recipientEmail: string;

}
/*********************************************
* threatAssessmentResult
**********************************************/
export interface threatAssessmentResult  {
	createdDateTime: any;
	message: string;
	resultType: EnumTypes.threatAssessmentResultType;

}
/*********************************************
* urlAssessmentRequest
**********************************************/
export interface urlAssessmentRequest  {
	url: string;

}
/*********************************************
* attachmentBase
**********************************************/
export interface attachmentBase  {
	contentType: string;
	lastModifiedDateTime: any;
	name: string;
	size: number;

}
/*********************************************
* attachmentSession
**********************************************/
export interface attachmentSession  {
	content: any;
	expirationDateTime: any;
	nextExpectedRanges: Array<string>[];

}
/*********************************************
* checklistItem
**********************************************/
export interface checklistItem  {
	checkedDateTime: any;
	createdDateTime: any;
	displayName: string;
	isChecked: boolean;

}
/*********************************************
* linkedResource
**********************************************/
export interface linkedResource  {
	applicationName: string;
	displayName: string;
	externalId: string;
	webUrl: string;

}
/*********************************************
* taskFileAttachment
**********************************************/
export interface taskFileAttachment  {
	contentBytes: any;

}
/*********************************************
* todoTaskList
**********************************************/
export interface todoTaskList  {
	displayName: string;
	isOwner: boolean;
	isShared: boolean;
	wellknownListName: EnumTypes.wellknownListName;
	extensions: IBaseResult<extension[]>;
	tasks: IBaseResult<todoTask[]>;
}
/*********************************************
* todoTask
**********************************************/
export interface todoTask  {
	body: ComplexTypes.itemBody;
	bodyLastModifiedDateTime: any;
	categories: Array<string>[];
	completedDateTime: ComplexTypes.dateTimeTimeZone;
	createdDateTime: any;
	dueDateTime: ComplexTypes.dateTimeTimeZone;
	hasAttachments: boolean;
	importance: EnumTypes.importance;
	isReminderOn: boolean;
	lastModifiedDateTime: any;
	recurrence: ComplexTypes.patternedRecurrence;
	reminderDateTime: ComplexTypes.dateTimeTimeZone;
	startDateTime: ComplexTypes.dateTimeTimeZone;
	status: EnumTypes.taskStatus;
	title: string;
	attachments: IBaseResult<attachmentBase[]>;
	attachmentSessions: IBaseResult<attachmentSession[]>;
	checklistItems: IBaseResult<checklistItem[]>;
	extensions: IBaseResult<extension[]>;
	linkedResources: IBaseResult<linkedResource[]>;
}
/*********************************************
* casesRoot
**********************************************/
export interface casesRoot  {

	ediscoveryCases: IBaseResult<ediscoveryCase[]>;
}
/*********************************************
* _case
**********************************************/
export interface _case  {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	status: EnumTypes.caseStatus;

}
/*********************************************
* caseOperation
**********************************************/
export interface caseOperation  {
	action: EnumTypes.caseAction;
	completedDateTime: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	percentProgress: number;
	resultInfo: ComplexTypes.resultInfo;
	status: EnumTypes.caseOperationStatus;

}
/*********************************************
* ediscoveryCase
**********************************************/
export interface ediscoveryCase  {
	closedBy: ComplexTypes.identitySet;
	closedDateTime: any;
	externalId: string;
	custodians: IBaseResult<ediscoveryCustodian[]>;
	noncustodialDataSources: IBaseResult<ediscoveryNoncustodialDataSource[]>;
	operations: IBaseResult<caseOperation[]>;
	reviewSets: IBaseResult<ediscoveryReviewSet[]>;
	searches: IBaseResult<ediscoverySearch[]>;
	settings: IBaseResult<ediscoveryCaseSettings>;
	tags: IBaseResult<ediscoveryReviewTag[]>;
}
/*********************************************
* dataSet
**********************************************/
export interface dataSet  {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;

}
/*********************************************
* dataSource
**********************************************/
export interface dataSource  {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;
	holdStatus: EnumTypes.dataSourceHoldStatus;

}
/*********************************************
* dataSourceContainer
**********************************************/
export interface dataSourceContainer  {
	createdDateTime: any;
	displayName: string;
	holdStatus: EnumTypes.dataSourceHoldStatus;
	lastModifiedDateTime: any;
	releasedDateTime: any;
	status: EnumTypes.dataSourceContainerStatus;

}
/*********************************************
* ediscoveryAddToReviewSetOperation
**********************************************/
export interface ediscoveryAddToReviewSetOperation  {

	reviewSet: IBaseResult<ediscoveryReviewSet>;
	search: IBaseResult<ediscoverySearch>;
}
/*********************************************
* ediscoveryReviewSet
**********************************************/
export interface ediscoveryReviewSet  {

	queries: IBaseResult<ediscoveryReviewSetQuery[]>;
}
/*********************************************
* search
**********************************************/
export interface search  {
	contentQuery: string;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;

}
/*********************************************
* ediscoverySearch
**********************************************/
export interface ediscoverySearch  {
	dataSourceScopes: EnumTypes.dataSourceScopes;
	additionalSources: IBaseResult<dataSource[]>;
	addToReviewSetOperation: IBaseResult<ediscoveryAddToReviewSetOperation>;
	custodianSources: IBaseResult<dataSource[]>;
	lastEstimateStatisticsOperation: IBaseResult<ediscoveryEstimateOperation>;
	noncustodialSources: IBaseResult<ediscoveryNoncustodialDataSource[]>;
}
/*********************************************
* ediscoveryCustodian
**********************************************/
export interface ediscoveryCustodian  {
	acknowledgedDateTime: any;
	email: string;
	lastIndexOperation: IBaseResult<ediscoveryIndexOperation>;
	siteSources: IBaseResult<siteSource[]>;
	unifiedGroupSources: IBaseResult<unifiedGroupSource[]>;
	userSources: IBaseResult<userSource[]>;
}
/*********************************************
* ediscoveryNoncustodialDataSource
**********************************************/
export interface ediscoveryNoncustodialDataSource  {

	dataSource: IBaseResult<dataSource>;
	lastIndexOperation: IBaseResult<ediscoveryIndexOperation>;
}
/*********************************************
* ediscoveryCaseSettings
**********************************************/
export interface ediscoveryCaseSettings  {
	ocr: ComplexTypes.ocrSettings;
	redundancyDetection: ComplexTypes.redundancyDetectionSettings;
	topicModeling: ComplexTypes.topicModelingSettings;

}
/*********************************************
* tag
**********************************************/
export interface tag  {
	createdBy: ComplexTypes.identitySet;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;

}
/*********************************************
* ediscoveryReviewTag
**********************************************/
export interface ediscoveryReviewTag  {
	childSelectability: EnumTypes.childSelectability;
	childTags: IBaseResult<ediscoveryReviewTag[]>;
	parent: IBaseResult<ediscoveryReviewTag>;
}
/*********************************************
* ediscoveryIndexOperation
**********************************************/
export interface ediscoveryIndexOperation  {


}
/*********************************************
* siteSource
**********************************************/
export interface siteSource  {

	site: IBaseResult<site>;
}
/*********************************************
* unifiedGroupSource
**********************************************/
export interface unifiedGroupSource  {
	includedSources: EnumTypes.sourceType;
	group: IBaseResult<group>;
}
/*********************************************
* userSource
**********************************************/
export interface userSource  {
	email: string;
	includedSources: EnumTypes.sourceType;
	siteWebUrl: string;

}
/*********************************************
* ediscoveryEstimateOperation
**********************************************/
export interface ediscoveryEstimateOperation  {
	indexedItemCount: number;
	indexedItemsSize: number;
	mailboxCount: number;
	siteCount: number;
	unindexedItemCount: number;
	unindexedItemsSize: number;
	search: IBaseResult<ediscoverySearch>;
}
/*********************************************
* ediscoveryHoldOperation
**********************************************/
export interface ediscoveryHoldOperation  {


}
/*********************************************
* ediscoveryReviewSetQuery
**********************************************/
export interface ediscoveryReviewSetQuery  {


}
/*********************************************
* ediscoveryTagOperation
**********************************************/
export interface ediscoveryTagOperation  {


}
/*********************************************
* store
**********************************************/
export interface store  {
	defaultLanguageTag: string;
	languageTags: Array<string>[];
	groups: IBaseResult<group[]>;
	sets: IBaseResult<set[]>;
}
/*********************************************
* set
**********************************************/
export interface set  {
	createdDateTime: any;
	description: string;
	localizedNames: ComplexTypes.localizedName[];
	properties: ComplexTypes.keyValue[];
	children: IBaseResult<term[]>;
	parentGroup: IBaseResult<group>;
	relations: IBaseResult<relation[]>;
	terms: IBaseResult<term[]>;
}
/*********************************************
* relation
**********************************************/
export interface relation  {
	relationship: EnumTypes.relationType;
	fromTerm: IBaseResult<term>;
	set: IBaseResult<set>;
	toTerm: IBaseResult<term>;
}
/*********************************************
* term
**********************************************/
export interface term  {
	createdDateTime: any;
	descriptions: ComplexTypes.localizedDescription[];
	labels: ComplexTypes.localizedLabel[];
	lastModifiedDateTime: any;
	properties: ComplexTypes.keyValue[];
	children: IBaseResult<term[]>;
	relations: IBaseResult<relation[]>;
	set: IBaseResult<set>;
}
/*********************************************
* callRecord
**********************************************/
export interface callRecord  {
	endDateTime: any;
	joinWebUrl: string;
	lastModifiedDateTime: any;
	modalities: EnumTypes.modality[];
	organizer: ComplexTypes.identitySet;
	participants: ComplexTypes.identitySet[];
	startDateTime: any;
	type: EnumTypes.callType;
	version: number;
	sessions: IBaseResult<session[]>;
}
/*********************************************
* session
**********************************************/
export interface session  {
	callee: ComplexTypes.endpoint;
	caller: ComplexTypes.endpoint;
	endDateTime: any;
	failureInfo: ComplexTypes.failureInfo;
	modalities: EnumTypes.modality[];
	startDateTime: any;
	segments: IBaseResult<segment[]>;
}
/*********************************************
* segment
**********************************************/
export interface segment  {
	callee: ComplexTypes.endpoint;
	caller: ComplexTypes.endpoint;
	endDateTime: any;
	failureInfo: ComplexTypes.failureInfo;
	media: ComplexTypes.media[];
	startDateTime: any;

}
/*********************************************
* connectionOperation
**********************************************/
export interface connectionOperation  {
	error: ComplexTypes.publicError;
	status: EnumTypes.connectionOperationStatus;

}
/*********************************************
* external
**********************************************/
export interface external  {

	connections: IBaseResult<externalConnection[]>;
}
/*********************************************
* externalConnection
**********************************************/
export interface externalConnection  {
	configuration: ComplexTypes.configuration;
	description: string;
	name: string;
	state: EnumTypes.connectionState;
	groups: IBaseResult<externalGroup[]>;
	items: IBaseResult<externalItem[]>;
	operations: IBaseResult<connectionOperation[]>;
	schema: IBaseResult<schema>;
}
/*********************************************
* externalGroup
**********************************************/
export interface externalGroup  {
	description: string;
	displayName: string;
	members: IBaseResult<ComplexTypes.identity[]>;
}
/*********************************************
* externalItem
**********************************************/
export interface externalItem  {
	acl: ComplexTypes.acl[];
	content: ComplexTypes.externalItemContent;
	properties: ComplexTypes.properties;

}
/*********************************************
* schema
**********************************************/
export interface schema  {
	baseType: string;
	properties: ComplexTypes.property[];

}
/*********************************************
* identity
**********************************************/
export interface identity  {
	type: EnumTypes.identityType;

}