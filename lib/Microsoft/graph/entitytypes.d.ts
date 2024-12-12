import { IBaseExecution, IBaseQuery } from "../../base";
import * as ComplexTypes from "./complexTypes.d";
import * as EnumTypes from "./enumTypes.d";
/*********************************************
* workflowBase
**********************************************/
export interface workflowBase extends workflowBaseProps, workflowBaseMethods  { }
export interface workflowBaseProps {
	category: EnumTypes.lifecycleWorkflowCategory;
	createdDateTime: any;
	description: string;
	displayName: string;
	executionConditions: ComplexTypes.workflowExecutionConditions;
	isEnabled: boolean;
	isSchedulingEnabled: boolean;
	lastModifiedDateTime: any;
}
export interface workflowBaseMethods {
	createdBy(): IBaseQuery<user>;
	lastModifiedBy(): IBaseQuery<user>;
	tasks(): IBaseQuery<task[]>;
	tasks(id: string | number): IBaseQuery<task>;
}
/*********************************************
* workflow
**********************************************/
export interface workflow extends workflowProps, workflowMethods , workflowBase { }
export interface workflowProps {
	deletedDateTime: any;
	id: string;
	nextScheduleRunDateTime: any;
	version: number;
}
export interface workflowMethods {
	executionScope(): IBaseQuery<userProcessingResult[]>;
	executionScope(id: string | number): IBaseQuery<userProcessingResult>;
	runs(): IBaseQuery<run[]>;
	runs(id: string | number): IBaseQuery<run>;
	taskReports(): IBaseQuery<taskReport[]>;
	taskReports(id: string | number): IBaseQuery<taskReport>;
	userProcessingResults(): IBaseQuery<userProcessingResult[]>;
	userProcessingResults(id: string | number): IBaseQuery<userProcessingResult>;
	versions(): IBaseQuery<workflowVersion[]>;
	versions(id: string | number): IBaseQuery<workflowVersion>;
}
/*********************************************
* lifecycleWorkflowsContainer
**********************************************/
export interface lifecycleWorkflowsContainer extends lifecycleWorkflowsContainerProps, lifecycleWorkflowsContainerMethods , entity { }
export interface lifecycleWorkflowsContainerProps {

}
export interface lifecycleWorkflowsContainerMethods {
	customTaskExtensions(): IBaseQuery<customTaskExtension[]>;
	customTaskExtensions(id: string | number): IBaseQuery<customTaskExtension>;
	deletedItems(): IBaseQuery<deletedItemContainer>;
	insights(): IBaseQuery<insights>;
	settings(): IBaseQuery<lifecycleManagementSettings>;
	taskDefinitions(): IBaseQuery<taskDefinition[]>;
	taskDefinitions(id: string | number): IBaseQuery<taskDefinition>;
	workflows(): IBaseQuery<workflow[]>;
	workflows(id: string | number): IBaseQuery<workflow>;
	workflowTemplates(): IBaseQuery<workflowTemplate[]>;
	workflowTemplates(id: string | number): IBaseQuery<workflowTemplate>;
}
/*********************************************
* task
**********************************************/
export interface task extends taskProps, taskMethods , entity { }
export interface taskProps {
	arguments: ComplexTypes.keyValuePair[];
	category: EnumTypes.lifecycleTaskCategory;
	continueOnError: boolean;
	description: string;
	displayName: string;
	executionSequence: number;
	isEnabled: boolean;
	taskDefinitionId: string;
}
export interface taskMethods {
	taskProcessingResults(): IBaseQuery<taskProcessingResult[]>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult>;
}
/*********************************************
* taskProcessingResult
**********************************************/
export interface taskProcessingResult extends taskProcessingResultProps, taskProcessingResultMethods , entity { }
export interface taskProcessingResultProps {
	completedDateTime: any;
	createdDateTime: any;
	failureReason: string;
	processingStatus: EnumTypes.lifecycleWorkflowProcessingStatus;
	startedDateTime: any;
}
export interface taskProcessingResultMethods {
	subject(): IBaseQuery<user>;
	task(): IBaseQuery<task>;
}
/*********************************************
* customTaskExtension
**********************************************/
export interface customTaskExtension extends customTaskExtensionProps, customTaskExtensionMethods , customCalloutExtension { }
export interface customTaskExtensionProps {
	callbackConfiguration: ComplexTypes.customExtensionCallbackConfiguration;
	createdDateTime: any;
	lastModifiedDateTime: any;
}
export interface customTaskExtensionMethods {
	createdBy(): IBaseQuery<user>;
	lastModifiedBy(): IBaseQuery<user>;
}
/*********************************************
* insights
**********************************************/
export interface insights extends insightsProps, insightsMethods , entity { }
export interface insightsProps {

}
export interface insightsMethods {

}
/*********************************************
* lifecycleManagementSettings
**********************************************/
export interface lifecycleManagementSettings extends lifecycleManagementSettingsProps, lifecycleManagementSettingsMethods , entity { }
export interface lifecycleManagementSettingsProps {
	emailSettings: ComplexTypes.emailSettings;
	workflowScheduleIntervalInHours: number;
}
export interface lifecycleManagementSettingsMethods {

}
/*********************************************
* taskDefinition
**********************************************/
export interface taskDefinition extends taskDefinitionProps, taskDefinitionMethods , entity { }
export interface taskDefinitionProps {
	category: EnumTypes.lifecycleTaskCategory;
	continueOnError: boolean;
	description: string;
	displayName: string;
	parameters: ComplexTypes.parameter[];
	version: number;
}
export interface taskDefinitionMethods {

}
/*********************************************
* workflowTemplate
**********************************************/
export interface workflowTemplate extends workflowTemplateProps, workflowTemplateMethods , entity { }
export interface workflowTemplateProps {
	category: EnumTypes.lifecycleWorkflowCategory;
	description: string;
	displayName: string;
	executionConditions: ComplexTypes.workflowExecutionConditions;
}
export interface workflowTemplateMethods {
	tasks(): IBaseQuery<task[]>;
	tasks(id: string | number): IBaseQuery<task>;
}
/*********************************************
* run
**********************************************/
export interface run extends runProps, runMethods , entity { }
export interface runProps {
	completedDateTime: any;
	failedTasksCount: number;
	failedUsersCount: number;
	lastUpdatedDateTime: any;
	processingStatus: EnumTypes.lifecycleWorkflowProcessingStatus;
	scheduledDateTime: any;
	startedDateTime: any;
	successfulUsersCount: number;
	totalTasksCount: number;
	totalUnprocessedTasksCount: number;
	totalUsersCount: number;
	workflowExecutionType: EnumTypes.workflowExecutionType;
}
export interface runMethods {
	taskProcessingResults(): IBaseQuery<taskProcessingResult[]>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult>;
	userProcessingResults(): IBaseQuery<userProcessingResult[]>;
	userProcessingResults(id: string | number): IBaseQuery<userProcessingResult>;
}
/*********************************************
* userProcessingResult
**********************************************/
export interface userProcessingResult extends userProcessingResultProps, userProcessingResultMethods , entity { }
export interface userProcessingResultProps {
	completedDateTime: any;
	failedTasksCount: number;
	processingStatus: EnumTypes.lifecycleWorkflowProcessingStatus;
	scheduledDateTime: any;
	startedDateTime: any;
	totalTasksCount: number;
	totalUnprocessedTasksCount: number;
	workflowExecutionType: EnumTypes.workflowExecutionType;
	workflowVersion: number;
}
export interface userProcessingResultMethods {
	subject(): IBaseQuery<user>;
	taskProcessingResults(): IBaseQuery<taskProcessingResult[]>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult>;
}
/*********************************************
* taskReport
**********************************************/
export interface taskReport extends taskReportProps, taskReportMethods , entity { }
export interface taskReportProps {
	completedDateTime: any;
	failedUsersCount: number;
	lastUpdatedDateTime: any;
	processingStatus: EnumTypes.lifecycleWorkflowProcessingStatus;
	runId: string;
	startedDateTime: any;
	successfulUsersCount: number;
	totalUsersCount: number;
	unprocessedUsersCount: number;
}
export interface taskReportMethods {
	task(): IBaseQuery<task>;
	taskDefinition(): IBaseQuery<taskDefinition>;
	taskProcessingResults(): IBaseQuery<taskProcessingResult[]>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult>;
}
/*********************************************
* workflowVersion
**********************************************/
export interface workflowVersion extends workflowVersionProps, workflowVersionMethods , workflowBase { }
export interface workflowVersionProps {
	versionNumber: number;
}
export interface workflowVersionMethods {

}
/*********************************************
* entity
**********************************************/
export interface entity extends entityProps, entityMethods  { }
export interface entityProps {
	id: string;
}
export interface entityMethods {

}
/*********************************************
* directoryObject
**********************************************/
export interface directoryObject extends directoryObjectProps, directoryObjectMethods , entity { }
export interface directoryObjectProps {
	deletedDateTime: any;
}
export interface directoryObjectMethods {

}
/*********************************************
* application
**********************************************/
export interface application extends applicationProps, applicationMethods , directoryObject { }
export interface applicationProps {
	addIns: ComplexTypes.addIn[];
	api: ComplexTypes.apiApplication;
	appId: string;
	applicationTemplateId: string;
	appRoles: ComplexTypes.appRole[];
	certification: ComplexTypes.certification;
	createdDateTime: any;
	defaultRedirectUri: string;
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
	nativeAuthenticationApisEnabled: EnumTypes.nativeAuthenticationApisEnabled;
	notes: string;
	oauth2RequirePostResponse: boolean;
	optionalClaims: ComplexTypes.optionalClaims;
	parentalControlSettings: ComplexTypes.parentalControlSettings;
	passwordCredentials: ComplexTypes.passwordCredential[];
	publicClient: ComplexTypes.publicClientApplication;
	publisherDomain: string;
	requestSignatureVerification: ComplexTypes.requestSignatureVerification;
	requiredResourceAccess: ComplexTypes.requiredResourceAccess[];
	samlMetadataUrl: string;
	serviceManagementReference: string;
	servicePrincipalLockConfiguration: ComplexTypes.servicePrincipalLockConfiguration;
	signInAudience: string;
	spa: ComplexTypes.spaApplication;
	tags: Array<string>[];
	tokenEncryptionKeyId: any;
	uniqueName: string;
	verifiedPublisher: ComplexTypes.verifiedPublisher;
	web: ComplexTypes.webApplication;
}
export interface applicationMethods {
	appManagementPolicies(): IBaseQuery<appManagementPolicy[]>;
	appManagementPolicies(id: string | number): IBaseQuery<appManagementPolicy>;
	createdOnBehalfOf(): IBaseQuery<directoryObject>;
	extensionProperties(): IBaseQuery<extensionProperty[]>;
	extensionProperties(id: string | number): IBaseQuery<extensionProperty>;
	federatedIdentityCredentials(): IBaseQuery<federatedIdentityCredential[]>;
	federatedIdentityCredentials(id: string | number): IBaseQuery<federatedIdentityCredential>;
	homeRealmDiscoveryPolicies(): IBaseQuery<homeRealmDiscoveryPolicy[]>;
	homeRealmDiscoveryPolicies(id: string | number): IBaseQuery<homeRealmDiscoveryPolicy>;
	owners(): IBaseQuery<directoryObject[]>;
	owners(id: string | number): IBaseQuery<directoryObject>;
	tokenIssuancePolicies(): IBaseQuery<tokenIssuancePolicy[]>;
	tokenIssuancePolicies(id: string | number): IBaseQuery<tokenIssuancePolicy>;
	tokenLifetimePolicies(): IBaseQuery<tokenLifetimePolicy[]>;
	tokenLifetimePolicies(id: string | number): IBaseQuery<tokenLifetimePolicy>;
	synchronization(): IBaseQuery<synchronization>;
}
/*********************************************
* policyBase
**********************************************/
export interface policyBase extends policyBaseProps, policyBaseMethods , directoryObject { }
export interface policyBaseProps {
	description: string;
	displayName: string;
}
export interface policyBaseMethods {

}
/*********************************************
* appManagementPolicy
**********************************************/
export interface appManagementPolicy extends appManagementPolicyProps, appManagementPolicyMethods , policyBase { }
export interface appManagementPolicyProps {
	isEnabled: boolean;
	restrictions: ComplexTypes.customAppManagementConfiguration;
}
export interface appManagementPolicyMethods {
	appliesTo(): IBaseQuery<directoryObject[]>;
	appliesTo(id: string | number): IBaseQuery<directoryObject>;
}
/*********************************************
* extensionProperty
**********************************************/
export interface extensionProperty extends extensionPropertyProps, extensionPropertyMethods , directoryObject { }
export interface extensionPropertyProps {
	appDisplayName: string;
	dataType: string;
	isMultiValued: boolean;
	isSyncedFromOnPremises: boolean;
	name: string;
	targetObjects: Array<string>[];
}
export interface extensionPropertyMethods {

}
/*********************************************
* federatedIdentityCredential
**********************************************/
export interface federatedIdentityCredential extends federatedIdentityCredentialProps, federatedIdentityCredentialMethods , entity { }
export interface federatedIdentityCredentialProps {
	audiences: Array<string>[];
	description: string;
	issuer: string;
	name: string;
	subject: string;
}
export interface federatedIdentityCredentialMethods {

}
/*********************************************
* stsPolicy
**********************************************/
export interface stsPolicy extends stsPolicyProps, stsPolicyMethods , policyBase { }
export interface stsPolicyProps {
	definition: Array<string>[];
	isOrganizationDefault: boolean;
}
export interface stsPolicyMethods {
	appliesTo(): IBaseQuery<directoryObject[]>;
	appliesTo(id: string | number): IBaseQuery<directoryObject>;
}
/*********************************************
* homeRealmDiscoveryPolicy
**********************************************/
export interface homeRealmDiscoveryPolicy extends homeRealmDiscoveryPolicyProps, homeRealmDiscoveryPolicyMethods , stsPolicy { }
export interface homeRealmDiscoveryPolicyProps {

}
export interface homeRealmDiscoveryPolicyMethods {

}
/*********************************************
* tokenIssuancePolicy
**********************************************/
export interface tokenIssuancePolicy extends tokenIssuancePolicyProps, tokenIssuancePolicyMethods , stsPolicy { }
export interface tokenIssuancePolicyProps {

}
export interface tokenIssuancePolicyMethods {

}
/*********************************************
* tokenLifetimePolicy
**********************************************/
export interface tokenLifetimePolicy extends tokenLifetimePolicyProps, tokenLifetimePolicyMethods , stsPolicy { }
export interface tokenLifetimePolicyProps {

}
export interface tokenLifetimePolicyMethods {

}
/*********************************************
* synchronization
**********************************************/
export interface synchronization extends synchronizationProps, synchronizationMethods , entity { }
export interface synchronizationProps {
	secrets: ComplexTypes.synchronizationSecretKeyStringValuePair[];
}
export interface synchronizationMethods {
	jobs(): IBaseQuery<synchronizationJob[]>;
	jobs(id: string | number): IBaseQuery<synchronizationJob>;
	templates(): IBaseQuery<synchronizationTemplate[]>;
	templates(id: string | number): IBaseQuery<synchronizationTemplate>;
}
/*********************************************
* customCalloutExtension
**********************************************/
export interface customCalloutExtension extends customCalloutExtensionProps, customCalloutExtensionMethods , entity { }
export interface customCalloutExtensionProps {
	authenticationConfiguration: ComplexTypes.customExtensionAuthenticationConfiguration;
	clientConfiguration: ComplexTypes.customExtensionClientConfiguration;
	description: string;
	displayName: string;
	endpointConfiguration: ComplexTypes.customExtensionEndpointConfiguration;
}
export interface customCalloutExtensionMethods {

}
/*********************************************
* deletedItemContainer
**********************************************/
export interface deletedItemContainer extends deletedItemContainerProps, deletedItemContainerMethods , entity { }
export interface deletedItemContainerProps {

}
export interface deletedItemContainerMethods {
	workflows(): IBaseQuery<workflow[]>;
	workflows(id: string | number): IBaseQuery<workflow>;
}
/*********************************************
* group
**********************************************/
export interface group extends groupProps, groupMethods , entity { }
export interface groupProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	parentSiteId: string;
	scope: EnumTypes.termGroupScope;
}
export interface groupMethods {
	sets(): IBaseQuery<set[]>;
	sets(id: string | number): IBaseQuery<set>;
}
/*********************************************
* appRoleAssignment
**********************************************/
export interface appRoleAssignment extends appRoleAssignmentProps, appRoleAssignmentMethods , directoryObject { }
export interface appRoleAssignmentProps {
	appRoleId: any;
	createdDateTime: any;
	principalDisplayName: string;
	principalId: any;
	principalType: string;
	resourceDisplayName: string;
	resourceId: any;
}
export interface appRoleAssignmentMethods {

}
/*********************************************
* resourceSpecificPermissionGrant
**********************************************/
export interface resourceSpecificPermissionGrant extends resourceSpecificPermissionGrantProps, resourceSpecificPermissionGrantMethods , directoryObject { }
export interface resourceSpecificPermissionGrantProps {
	clientAppId: string;
	clientId: string;
	permission: string;
	permissionType: string;
	resourceAppId: string;
}
export interface resourceSpecificPermissionGrantMethods {

}
/*********************************************
* groupSetting
**********************************************/
export interface groupSetting extends groupSettingProps, groupSettingMethods , entity { }
export interface groupSettingProps {
	displayName: string;
	templateId: string;
	values: ComplexTypes.settingValue[];
}
export interface groupSettingMethods {

}
/*********************************************
* calendar
**********************************************/
export interface calendar extends calendarProps, calendarMethods , entity { }
export interface calendarProps {
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
}
export interface calendarMethods {
	calendarPermissions(): IBaseQuery<calendarPermission[]>;
	calendarPermissions(id: string | number): IBaseQuery<calendarPermission>;
	calendarView(): IBaseQuery<event[]>;
	calendarView(id: string | number): IBaseQuery<event>;
	events(): IBaseQuery<event[]>;
	events(id: string | number): IBaseQuery<event>;
	multiValueExtendedProperties(): IBaseQuery<multiValueLegacyExtendedProperty[]>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty>;
	singleValueExtendedProperties(): IBaseQuery<singleValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty>;
}
/*********************************************
* outlookItem
**********************************************/
export interface outlookItem extends outlookItemProps, outlookItemMethods , entity { }
export interface outlookItemProps {
	categories: Array<string>[];
	changeKey: string;
	createdDateTime: any;
	lastModifiedDateTime: any;
}
export interface outlookItemMethods {

}
/*********************************************
* event
**********************************************/
export interface event extends eventProps, eventMethods , outlookItem { }
export interface eventProps {
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
}
export interface eventMethods {
	attachments(): IBaseQuery<attachment[]>;
	attachments(id: string | number): IBaseQuery<attachment>;
	calendar(): IBaseQuery<calendar>;
	extensions(): IBaseQuery<extension[]>;
	extensions(id: string | number): IBaseQuery<extension>;
	instances(): IBaseQuery<event[]>;
	instances(id: string | number): IBaseQuery<event>;
	multiValueExtendedProperties(): IBaseQuery<multiValueLegacyExtendedProperty[]>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty>;
	singleValueExtendedProperties(): IBaseQuery<singleValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty>;
}
/*********************************************
* conversation
**********************************************/
export interface conversation extends conversationProps, conversationMethods , entity { }
export interface conversationProps {
	hasAttachments: boolean;
	lastDeliveredDateTime: any;
	preview: string;
	topic: string;
	uniqueSenders: Array<string>[];
}
export interface conversationMethods {
	threads(): IBaseQuery<conversationThread[]>;
	threads(id: string | number): IBaseQuery<conversationThread>;
}
/*********************************************
* conversationThread
**********************************************/
export interface conversationThread extends conversationThreadProps, conversationThreadMethods , entity { }
export interface conversationThreadProps {
	ccRecipients: ComplexTypes.recipient[];
	hasAttachments: boolean;
	isLocked: boolean;
	lastDeliveredDateTime: any;
	preview: string;
	topic: string;
	toRecipients: ComplexTypes.recipient[];
	uniqueSenders: Array<string>[];
}
export interface conversationThreadMethods {
	posts(): IBaseQuery<post[]>;
	posts(id: string | number): IBaseQuery<post>;
}
/*********************************************
* baseItem
**********************************************/
export interface baseItem extends baseItemProps, baseItemMethods , entity { }
export interface baseItemProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	eTag: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	name: string;
	parentReference: ComplexTypes.itemReference;
	webUrl: string;
}
export interface baseItemMethods {
	createdByUser(): IBaseQuery<user>;
	lastModifiedByUser(): IBaseQuery<user>;
}
/*********************************************
* drive
**********************************************/
export interface drive extends driveProps, driveMethods , baseItem { }
export interface driveProps {
	driveType: string;
	owner: ComplexTypes.identitySet;
	quota: ComplexTypes.quota;
	sharePointIds: ComplexTypes.sharepointIds;
	system: ComplexTypes.systemFacet;
}
export interface driveMethods {
	bundles(): IBaseQuery<driveItem[]>;
	bundles(id: string | number): IBaseQuery<driveItem>;
	following(): IBaseQuery<driveItem[]>;
	following(id: string | number): IBaseQuery<driveItem>;
	items(): IBaseQuery<driveItem[]>;
	items(id: string | number): IBaseQuery<driveItem>;
	list(): IBaseQuery<list>;
	root(): IBaseQuery<driveItem>;
	special(): IBaseQuery<driveItem[]>;
	special(id: string | number): IBaseQuery<driveItem>;
}
/*********************************************
* site
**********************************************/
export interface site extends siteProps, siteMethods , baseItem { }
export interface siteProps {
	displayName: string;
	error: ComplexTypes.publicError;
	isPersonalSite: boolean;
	root: ComplexTypes.root;
	sharepointIds: ComplexTypes.sharepointIds;
	siteCollection: ComplexTypes.siteCollection;
}
export interface siteMethods {
	analytics(): IBaseQuery<itemAnalytics>;
	columns(): IBaseQuery<columnDefinition[]>;
	columns(id: string | number): IBaseQuery<columnDefinition>;
	contentTypes(): IBaseQuery<contentType[]>;
	contentTypes(id: string | number): IBaseQuery<contentType>;
	drive(): IBaseQuery<drive>;
	drives(): IBaseQuery<drive[]>;
	drives(id: string | number): IBaseQuery<drive>;
	externalColumns(): IBaseQuery<columnDefinition[]>;
	externalColumns(id: string | number): IBaseQuery<columnDefinition>;
	items(): IBaseQuery<baseItem[]>;
	items(id: string | number): IBaseQuery<baseItem>;
	lists(): IBaseQuery<list[]>;
	lists(id: string | number): IBaseQuery<list>;
	operations(): IBaseQuery<richLongRunningOperation[]>;
	operations(id: string | number): IBaseQuery<richLongRunningOperation>;
	pages(): IBaseQuery<baseSitePage[]>;
	pages(id: string | number): IBaseQuery<baseSitePage>;
	permissions(): IBaseQuery<permission[]>;
	permissions(id: string | number): IBaseQuery<permission>;
	sites(): IBaseQuery<site[]>;
	sites(id: string | number): IBaseQuery<site>;
	termStore(): IBaseQuery<store>;
	termStores(): IBaseQuery<store[]>;
	termStores(id: string | number): IBaseQuery<store>;
	onenote(): IBaseQuery<onenote>;
}
/*********************************************
* extension
**********************************************/
export interface extension extends extensionProps, extensionMethods , entity { }
export interface extensionProps {

}
export interface extensionMethods {

}
/*********************************************
* groupLifecyclePolicy
**********************************************/
export interface groupLifecyclePolicy extends groupLifecyclePolicyProps, groupLifecyclePolicyMethods , entity { }
export interface groupLifecyclePolicyProps {
	alternateNotificationEmails: string;
	groupLifetimeInDays: number;
	managedGroupTypes: string;
}
export interface groupLifecyclePolicyMethods {

}
/*********************************************
* plannerGroup
**********************************************/
export interface plannerGroup extends plannerGroupProps, plannerGroupMethods , entity { }
export interface plannerGroupProps {

}
export interface plannerGroupMethods {
	plans(): IBaseQuery<plannerPlan[]>;
	plans(id: string | number): IBaseQuery<plannerPlan>;
}
/*********************************************
* onenote
**********************************************/
export interface onenote extends onenoteProps, onenoteMethods , entity { }
export interface onenoteProps {

}
export interface onenoteMethods {
	notebooks(): IBaseQuery<notebook[]>;
	notebooks(id: string | number): IBaseQuery<notebook>;
	operations(): IBaseQuery<onenoteOperation[]>;
	operations(id: string | number): IBaseQuery<onenoteOperation>;
	pages(): IBaseQuery<onenotePage[]>;
	pages(id: string | number): IBaseQuery<onenotePage>;
	resources(): IBaseQuery<onenoteResource[]>;
	resources(id: string | number): IBaseQuery<onenoteResource>;
	sectionGroups(): IBaseQuery<sectionGroup[]>;
	sectionGroups(id: string | number): IBaseQuery<sectionGroup>;
	sections(): IBaseQuery<onenoteSection[]>;
	sections(id: string | number): IBaseQuery<onenoteSection>;
}
/*********************************************
* profilePhoto
**********************************************/
export interface profilePhoto extends profilePhotoProps, profilePhotoMethods , entity { }
export interface profilePhotoProps {
	height: number;
	width: number;
}
export interface profilePhotoMethods {

}
/*********************************************
* team
**********************************************/
export interface team extends teamProps, teamMethods , entity { }
export interface teamProps {
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
}
export interface teamMethods {
	allChannels(): IBaseQuery<channel[]>;
	allChannels(id: string | number): IBaseQuery<channel>;
	channels(): IBaseQuery<channel[]>;
	channels(id: string | number): IBaseQuery<channel>;
	group(): IBaseQuery<group>;
	incomingChannels(): IBaseQuery<channel[]>;
	incomingChannels(id: string | number): IBaseQuery<channel>;
	installedApps(): IBaseQuery<teamsAppInstallation[]>;
	installedApps(id: string | number): IBaseQuery<teamsAppInstallation>;
	members(): IBaseQuery<conversationMember[]>;
	members(id: string | number): IBaseQuery<conversationMember>;
	operations(): IBaseQuery<teamsAsyncOperation[]>;
	operations(id: string | number): IBaseQuery<teamsAsyncOperation>;
	permissionGrants(): IBaseQuery<resourceSpecificPermissionGrant[]>;
	permissionGrants(id: string | number): IBaseQuery<resourceSpecificPermissionGrant>;
	photo(): IBaseQuery<profilePhoto>;
	primaryChannel(): IBaseQuery<channel>;
	tags(): IBaseQuery<teamworkTag[]>;
	tags(id: string | number): IBaseQuery<teamworkTag>;
	template(): IBaseQuery<teamsTemplate>;
	schedule(): IBaseQuery<schedule>;
}
/*********************************************
* identityGovernance
**********************************************/
export interface identityGovernance extends identityGovernanceProps, identityGovernanceMethods  { }
export interface identityGovernanceProps {

}
export interface identityGovernanceMethods {
	lifecycleWorkflows(): IBaseQuery<lifecycleWorkflowsContainer>;
	accessReviews(): IBaseQuery<accessReviewSet>;
	appConsent(): IBaseQuery<appConsentApprovalRoute>;
	termsOfUse(): IBaseQuery<termsOfUseContainer>;
	entitlementManagement(): IBaseQuery<entitlementManagement>;
	privilegedAccess(): IBaseQuery<privilegedAccessRoot>;
}
/*********************************************
* accessReviewSet
**********************************************/
export interface accessReviewSet extends accessReviewSetProps, accessReviewSetMethods , entity { }
export interface accessReviewSetProps {

}
export interface accessReviewSetMethods {
	definitions(): IBaseQuery<accessReviewScheduleDefinition[]>;
	definitions(id: string | number): IBaseQuery<accessReviewScheduleDefinition>;
	historyDefinitions(): IBaseQuery<accessReviewHistoryDefinition[]>;
	historyDefinitions(id: string | number): IBaseQuery<accessReviewHistoryDefinition>;
}
/*********************************************
* appConsentApprovalRoute
**********************************************/
export interface appConsentApprovalRoute extends appConsentApprovalRouteProps, appConsentApprovalRouteMethods , entity { }
export interface appConsentApprovalRouteProps {

}
export interface appConsentApprovalRouteMethods {
	appConsentRequests(): IBaseQuery<appConsentRequest[]>;
	appConsentRequests(id: string | number): IBaseQuery<appConsentRequest>;
}
/*********************************************
* termsOfUseContainer
**********************************************/
export interface termsOfUseContainer extends termsOfUseContainerProps, termsOfUseContainerMethods , entity { }
export interface termsOfUseContainerProps {

}
export interface termsOfUseContainerMethods {
	agreementAcceptances(): IBaseQuery<agreementAcceptance[]>;
	agreementAcceptances(id: string | number): IBaseQuery<agreementAcceptance>;
	agreements(): IBaseQuery<agreement[]>;
	agreements(id: string | number): IBaseQuery<agreement>;
}
/*********************************************
* entitlementManagement
**********************************************/
export interface entitlementManagement extends entitlementManagementProps, entitlementManagementMethods , entity { }
export interface entitlementManagementProps {

}
export interface entitlementManagementMethods {
	accessPackageAssignmentApprovals(): IBaseQuery<approval[]>;
	accessPackageAssignmentApprovals(id: string | number): IBaseQuery<approval>;
	accessPackages(): IBaseQuery<accessPackage[]>;
	accessPackages(id: string | number): IBaseQuery<accessPackage>;
	assignmentPolicies(): IBaseQuery<accessPackageAssignmentPolicy[]>;
	assignmentPolicies(id: string | number): IBaseQuery<accessPackageAssignmentPolicy>;
	assignmentRequests(): IBaseQuery<accessPackageAssignmentRequest[]>;
	assignmentRequests(id: string | number): IBaseQuery<accessPackageAssignmentRequest>;
	assignments(): IBaseQuery<accessPackageAssignment[]>;
	assignments(id: string | number): IBaseQuery<accessPackageAssignment>;
	catalogs(): IBaseQuery<accessPackageCatalog[]>;
	catalogs(id: string | number): IBaseQuery<accessPackageCatalog>;
	connectedOrganizations(): IBaseQuery<connectedOrganization[]>;
	connectedOrganizations(id: string | number): IBaseQuery<connectedOrganization>;
	resourceEnvironments(): IBaseQuery<accessPackageResourceEnvironment[]>;
	resourceEnvironments(id: string | number): IBaseQuery<accessPackageResourceEnvironment>;
	resourceRequests(): IBaseQuery<accessPackageResourceRequest[]>;
	resourceRequests(id: string | number): IBaseQuery<accessPackageResourceRequest>;
	resourceRoleScopes(): IBaseQuery<accessPackageResourceRoleScope[]>;
	resourceRoleScopes(id: string | number): IBaseQuery<accessPackageResourceRoleScope>;
	resources(): IBaseQuery<accessPackageResource[]>;
	resources(id: string | number): IBaseQuery<accessPackageResource>;
	settings(): IBaseQuery<entitlementManagementSettings>;
}
/*********************************************
* privilegedAccessRoot
**********************************************/
export interface privilegedAccessRoot extends privilegedAccessRootProps, privilegedAccessRootMethods , entity { }
export interface privilegedAccessRootProps {

}
export interface privilegedAccessRootMethods {
	group(): IBaseQuery<privilegedAccessGroup>;
}
/*********************************************
* user
**********************************************/
export interface user extends userProps, userMethods , directoryObject { }
export interface userProps {
	signInActivity: ComplexTypes.signInActivity;
	accountEnabled: boolean;
	ageGroup: string;
	assignedLicenses: ComplexTypes.assignedLicense[];
	assignedPlans: ComplexTypes.assignedPlan[];
	authorizationInfo: ComplexTypes.authorizationInfo;
	businessPhones: Array<string>[];
	city: string;
	companyName: string;
	consentProvidedForMinor: string;
	country: string;
	createdDateTime: any;
	creationType: string;
	customSecurityAttributes: ComplexTypes.customSecurityAttributeValue;
	department: string;
	displayName: string;
	employeeHireDate: any;
	employeeId: string;
	employeeLeaveDateTime: any;
	employeeOrgData: ComplexTypes.employeeOrgData;
	employeeType: string;
	externalUserState: string;
	externalUserStateChangeDateTime: any;
	faxNumber: string;
	givenName: string;
	identities: ComplexTypes.objectIdentity[];
	imAddresses: Array<string>[];
	isManagementRestricted: boolean;
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
	securityIdentifier: string;
	serviceProvisioningErrors: ComplexTypes.serviceProvisioningError[];
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
	print: ComplexTypes.userPrint;
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
}
export interface userMethods {
	appRoleAssignments(): IBaseQuery<appRoleAssignment[]>;
	appRoleAssignments(id: string | number): IBaseQuery<appRoleAssignment>;
	createdObjects(): IBaseQuery<directoryObject[]>;
	createdObjects(id: string | number): IBaseQuery<directoryObject>;
	directReports(): IBaseQuery<directoryObject[]>;
	directReports(id: string | number): IBaseQuery<directoryObject>;
	licenseDetails(): IBaseQuery<licenseDetails[]>;
	licenseDetails(id: string | number): IBaseQuery<licenseDetails>;
	manager(): IBaseQuery<directoryObject>;
	memberOf(): IBaseQuery<directoryObject[]>;
	memberOf(id: string | number): IBaseQuery<directoryObject>;
	oauth2PermissionGrants(): IBaseQuery<oAuth2PermissionGrant[]>;
	oauth2PermissionGrants(id: string | number): IBaseQuery<oAuth2PermissionGrant>;
	ownedDevices(): IBaseQuery<directoryObject[]>;
	ownedDevices(id: string | number): IBaseQuery<directoryObject>;
	ownedObjects(): IBaseQuery<directoryObject[]>;
	ownedObjects(id: string | number): IBaseQuery<directoryObject>;
	registeredDevices(): IBaseQuery<directoryObject[]>;
	registeredDevices(id: string | number): IBaseQuery<directoryObject>;
	scopedRoleMemberOf(): IBaseQuery<scopedRoleMembership[]>;
	scopedRoleMemberOf(id: string | number): IBaseQuery<scopedRoleMembership>;
	sponsors(): IBaseQuery<directoryObject[]>;
	sponsors(id: string | number): IBaseQuery<directoryObject>;
	transitiveMemberOf(): IBaseQuery<directoryObject[]>;
	transitiveMemberOf(id: string | number): IBaseQuery<directoryObject>;
	calendar(): IBaseQuery<calendar>;
	calendarGroups(): IBaseQuery<calendarGroup[]>;
	calendarGroups(id: string | number): IBaseQuery<calendarGroup>;
	calendars(): IBaseQuery<calendar[]>;
	calendars(id: string | number): IBaseQuery<calendar>;
	calendarView(): IBaseQuery<event[]>;
	calendarView(id: string | number): IBaseQuery<event>;
	contactFolders(): IBaseQuery<contactFolder[]>;
	contactFolders(id: string | number): IBaseQuery<contactFolder>;
	contacts(): IBaseQuery<contact[]>;
	contacts(id: string | number): IBaseQuery<contact>;
	events(): IBaseQuery<event[]>;
	events(id: string | number): IBaseQuery<event>;
	inferenceClassification(): IBaseQuery<inferenceClassification>;
	mailFolders(): IBaseQuery<mailFolder[]>;
	mailFolders(id: string | number): IBaseQuery<mailFolder>;
	messages(): IBaseQuery<message[]>;
	messages(id: string | number): IBaseQuery<message>;
	outlook(): IBaseQuery<outlookUser>;
	people(): IBaseQuery<person[]>;
	people(id: string | number): IBaseQuery<person>;
	drive(): IBaseQuery<drive>;
	drives(): IBaseQuery<drive[]>;
	drives(id: string | number): IBaseQuery<drive>;
	followedSites(): IBaseQuery<site[]>;
	followedSites(id: string | number): IBaseQuery<site>;
	extensions(): IBaseQuery<extension[]>;
	extensions(id: string | number): IBaseQuery<extension>;
	agreementAcceptances(): IBaseQuery<agreementAcceptance[]>;
	agreementAcceptances(id: string | number): IBaseQuery<agreementAcceptance>;
	managedDevices(): IBaseQuery<managedDevice[]>;
	managedDevices(id: string | number): IBaseQuery<managedDevice>;
	managedAppRegistrations(): IBaseQuery<managedAppRegistration[]>;
	managedAppRegistrations(id: string | number): IBaseQuery<managedAppRegistration>;
	deviceManagementTroubleshootingEvents(): IBaseQuery<deviceManagementTroubleshootingEvent[]>;
	deviceManagementTroubleshootingEvents(id: string | number): IBaseQuery<deviceManagementTroubleshootingEvent>;
	planner(): IBaseQuery<plannerUser>;
	insights(): IBaseQuery<itemInsights>;
	settings(): IBaseQuery<userSettings>;
	onenote(): IBaseQuery<onenote>;
	cloudClipboard(): IBaseQuery<cloudClipboardRoot>;
	photo(): IBaseQuery<profilePhoto>;
	photos(): IBaseQuery<profilePhoto[]>;
	photos(id: string | number): IBaseQuery<profilePhoto>;
	activities(): IBaseQuery<userActivity[]>;
	activities(id: string | number): IBaseQuery<userActivity>;
	onlineMeetings(): IBaseQuery<onlineMeeting[]>;
	onlineMeetings(id: string | number): IBaseQuery<onlineMeeting>;
	presence(): IBaseQuery<presence>;
	authentication(): IBaseQuery<authentication>;
	chats(): IBaseQuery<chat[]>;
	chats(id: string | number): IBaseQuery<chat>;
	joinedTeams(): IBaseQuery<team[]>;
	joinedTeams(id: string | number): IBaseQuery<team>;
	permissionGrants(): IBaseQuery<resourceSpecificPermissionGrant[]>;
	permissionGrants(id: string | number): IBaseQuery<resourceSpecificPermissionGrant>;
	teamwork(): IBaseQuery<userTeamwork>;
	solutions(): IBaseQuery<userSolutionRoot>;
	todo(): IBaseQuery<todo>;
	employeeExperience(): IBaseQuery<employeeExperienceUser>;
}
/*********************************************
* licenseDetails
**********************************************/
export interface licenseDetails extends licenseDetailsProps, licenseDetailsMethods , entity { }
export interface licenseDetailsProps {
	servicePlans: ComplexTypes.servicePlanInfo[];
	skuId: any;
	skuPartNumber: string;
}
export interface licenseDetailsMethods {

}
/*********************************************
* oAuth2PermissionGrant
**********************************************/
export interface oAuth2PermissionGrant extends oAuth2PermissionGrantProps, oAuth2PermissionGrantMethods , entity { }
export interface oAuth2PermissionGrantProps {
	clientId: string;
	consentType: string;
	principalId: string;
	resourceId: string;
	scope: string;
}
export interface oAuth2PermissionGrantMethods {

}
/*********************************************
* scopedRoleMembership
**********************************************/
export interface scopedRoleMembership extends scopedRoleMembershipProps, scopedRoleMembershipMethods , entity { }
export interface scopedRoleMembershipProps {
	administrativeUnitId: string;
	roleId: string;
	roleMemberInfo: ComplexTypes.identity;
}
export interface scopedRoleMembershipMethods {

}
/*********************************************
* calendarGroup
**********************************************/
export interface calendarGroup extends calendarGroupProps, calendarGroupMethods , entity { }
export interface calendarGroupProps {
	changeKey: string;
	classId: any;
	name: string;
}
export interface calendarGroupMethods {
	calendars(): IBaseQuery<calendar[]>;
	calendars(id: string | number): IBaseQuery<calendar>;
}
/*********************************************
* contactFolder
**********************************************/
export interface contactFolder extends contactFolderProps, contactFolderMethods , entity { }
export interface contactFolderProps {
	displayName: string;
	parentFolderId: string;
}
export interface contactFolderMethods {
	childFolders(): IBaseQuery<contactFolder[]>;
	childFolders(id: string | number): IBaseQuery<contactFolder>;
	contacts(): IBaseQuery<contact[]>;
	contacts(id: string | number): IBaseQuery<contact>;
	multiValueExtendedProperties(): IBaseQuery<multiValueLegacyExtendedProperty[]>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty>;
	singleValueExtendedProperties(): IBaseQuery<singleValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty>;
}
/*********************************************
* contact
**********************************************/
export interface contact extends contactProps, contactMethods , outlookItem { }
export interface contactProps {
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
}
export interface contactMethods {
	extensions(): IBaseQuery<extension[]>;
	extensions(id: string | number): IBaseQuery<extension>;
	multiValueExtendedProperties(): IBaseQuery<multiValueLegacyExtendedProperty[]>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty>;
	photo(): IBaseQuery<profilePhoto>;
	singleValueExtendedProperties(): IBaseQuery<singleValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty>;
}
/*********************************************
* inferenceClassification
**********************************************/
export interface inferenceClassification extends inferenceClassificationProps, inferenceClassificationMethods , entity { }
export interface inferenceClassificationProps {

}
export interface inferenceClassificationMethods {
	overrides(): IBaseQuery<inferenceClassificationOverride[]>;
	overrides(id: string | number): IBaseQuery<inferenceClassificationOverride>;
}
/*********************************************
* mailFolder
**********************************************/
export interface mailFolder extends mailFolderProps, mailFolderMethods , entity { }
export interface mailFolderProps {
	childFolderCount: number;
	displayName: string;
	isHidden: boolean;
	parentFolderId: string;
	totalItemCount: number;
	unreadItemCount: number;
}
export interface mailFolderMethods {
	childFolders(): IBaseQuery<mailFolder[]>;
	childFolders(id: string | number): IBaseQuery<mailFolder>;
	messageRules(): IBaseQuery<messageRule[]>;
	messageRules(id: string | number): IBaseQuery<messageRule>;
	messages(): IBaseQuery<message[]>;
	messages(id: string | number): IBaseQuery<message>;
	multiValueExtendedProperties(): IBaseQuery<multiValueLegacyExtendedProperty[]>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty>;
	singleValueExtendedProperties(): IBaseQuery<singleValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty>;
}
/*********************************************
* message
**********************************************/
export interface message extends messageProps, messageMethods , outlookItem { }
export interface messageProps {
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
}
export interface messageMethods {
	attachments(): IBaseQuery<attachment[]>;
	attachments(id: string | number): IBaseQuery<attachment>;
	extensions(): IBaseQuery<extension[]>;
	extensions(id: string | number): IBaseQuery<extension>;
	multiValueExtendedProperties(): IBaseQuery<multiValueLegacyExtendedProperty[]>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty>;
	singleValueExtendedProperties(): IBaseQuery<singleValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty>;
}
/*********************************************
* outlookUser
**********************************************/
export interface outlookUser extends outlookUserProps, outlookUserMethods , entity { }
export interface outlookUserProps {

}
export interface outlookUserMethods {
	masterCategories(): IBaseQuery<outlookCategory[]>;
	masterCategories(id: string | number): IBaseQuery<outlookCategory>;
}
/*********************************************
* person
**********************************************/
export interface person extends personProps, personMethods , entity { }
export interface personProps {
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
export interface personMethods {

}
/*********************************************
* agreementAcceptance
**********************************************/
export interface agreementAcceptance extends agreementAcceptanceProps, agreementAcceptanceMethods , entity { }
export interface agreementAcceptanceProps {
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
export interface agreementAcceptanceMethods {

}
/*********************************************
* managedDevice
**********************************************/
export interface managedDevice extends managedDeviceProps, managedDeviceMethods , entity { }
export interface managedDeviceProps {
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
	enrollmentProfileName: string;
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
	managementCertificateExpirationDate: any;
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
	requireUserEnrollmentApproval: boolean;
	serialNumber: string;
	subscriberCarrier: string;
	totalStorageSpaceInBytes: number;
	udid: string;
	userDisplayName: string;
	userId: string;
	userPrincipalName: string;
	wiFiMacAddress: string;
}
export interface managedDeviceMethods {
	deviceCompliancePolicyStates(): IBaseQuery<deviceCompliancePolicyState[]>;
	deviceCompliancePolicyStates(id: string | number): IBaseQuery<deviceCompliancePolicyState>;
	deviceConfigurationStates(): IBaseQuery<deviceConfigurationState[]>;
	deviceConfigurationStates(id: string | number): IBaseQuery<deviceConfigurationState>;
	deviceCategory(): IBaseQuery<deviceCategory>;
	logCollectionRequests(): IBaseQuery<deviceLogCollectionResponse[]>;
	logCollectionRequests(id: string | number): IBaseQuery<deviceLogCollectionResponse>;
	users(): IBaseQuery<user[]>;
	users(id: string | number): IBaseQuery<user>;
	windowsProtectionState(): IBaseQuery<windowsProtectionState>;
}
/*********************************************
* managedAppRegistration
**********************************************/
export interface managedAppRegistration extends managedAppRegistrationProps, managedAppRegistrationMethods , entity { }
export interface managedAppRegistrationProps {
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
}
export interface managedAppRegistrationMethods {
	appliedPolicies(): IBaseQuery<managedAppPolicy[]>;
	appliedPolicies(id: string | number): IBaseQuery<managedAppPolicy>;
	intendedPolicies(): IBaseQuery<managedAppPolicy[]>;
	intendedPolicies(id: string | number): IBaseQuery<managedAppPolicy>;
	operations(): IBaseQuery<managedAppOperation[]>;
	operations(id: string | number): IBaseQuery<managedAppOperation>;
}
/*********************************************
* deviceManagementTroubleshootingEvent
**********************************************/
export interface deviceManagementTroubleshootingEvent extends deviceManagementTroubleshootingEventProps, deviceManagementTroubleshootingEventMethods , entity { }
export interface deviceManagementTroubleshootingEventProps {
	correlationId: string;
	eventDateTime: any;
}
export interface deviceManagementTroubleshootingEventMethods {

}
/*********************************************
* plannerUser
**********************************************/
export interface plannerUser extends plannerUserProps, plannerUserMethods , entity { }
export interface plannerUserProps {

}
export interface plannerUserMethods {
	plans(): IBaseQuery<plannerPlan[]>;
	plans(id: string | number): IBaseQuery<plannerPlan>;
	tasks(): IBaseQuery<plannerTask[]>;
	tasks(id: string | number): IBaseQuery<plannerTask>;
}
/*********************************************
* officeGraphInsights
**********************************************/
export interface officeGraphInsights extends officeGraphInsightsProps, officeGraphInsightsMethods , entity { }
export interface officeGraphInsightsProps {

}
export interface officeGraphInsightsMethods {
	shared(): IBaseQuery<sharedInsight[]>;
	shared(id: string | number): IBaseQuery<sharedInsight>;
	trending(): IBaseQuery<trending[]>;
	trending(id: string | number): IBaseQuery<trending>;
	used(): IBaseQuery<usedInsight[]>;
	used(id: string | number): IBaseQuery<usedInsight>;
}
/*********************************************
* itemInsights
**********************************************/
export interface itemInsights extends itemInsightsProps, itemInsightsMethods , officeGraphInsights { }
export interface itemInsightsProps {

}
export interface itemInsightsMethods {

}
/*********************************************
* userSettings
**********************************************/
export interface userSettings extends userSettingsProps, userSettingsMethods , entity { }
export interface userSettingsProps {
	contributionToContentDiscoveryAsOrganizationDisabled: boolean;
	contributionToContentDiscoveryDisabled: boolean;
}
export interface userSettingsMethods {
	itemInsights(): IBaseQuery<userInsightsSettings>;
	windows(): IBaseQuery<windowsSetting[]>;
	windows(id: string | number): IBaseQuery<windowsSetting>;
	shiftPreferences(): IBaseQuery<shiftPreferences>;
	storage(): IBaseQuery<userStorage>;
}
/*********************************************
* cloudClipboardRoot
**********************************************/
export interface cloudClipboardRoot extends cloudClipboardRootProps, cloudClipboardRootMethods , entity { }
export interface cloudClipboardRootProps {

}
export interface cloudClipboardRootMethods {
	items(): IBaseQuery<cloudClipboardItem[]>;
	items(id: string | number): IBaseQuery<cloudClipboardItem>;
}
/*********************************************
* userActivity
**********************************************/
export interface userActivity extends userActivityProps, userActivityMethods , entity { }
export interface userActivityProps {
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
}
export interface userActivityMethods {
	historyItems(): IBaseQuery<activityHistoryItem[]>;
	historyItems(id: string | number): IBaseQuery<activityHistoryItem>;
}
/*********************************************
* onlineMeetingBase
**********************************************/
export interface onlineMeetingBase extends onlineMeetingBaseProps, onlineMeetingBaseMethods , entity { }
export interface onlineMeetingBaseProps {
	allowAttendeeToEnableCamera: boolean;
	allowAttendeeToEnableMic: boolean;
	allowedPresenters: EnumTypes.onlineMeetingPresenters;
	allowMeetingChat: EnumTypes.meetingChatMode;
	allowParticipantsToChangeName: boolean;
	allowTeamworkReactions: boolean;
	audioConferencing: ComplexTypes.audioConferencing;
	chatInfo: ComplexTypes.chatInfo;
	isEntryExitAnnounced: boolean;
	joinInformation: ComplexTypes.itemBody;
	joinMeetingIdSettings: ComplexTypes.joinMeetingIdSettings;
	joinWebUrl: string;
	lobbyBypassSettings: ComplexTypes.lobbyBypassSettings;
	recordAutomatically: boolean;
	shareMeetingChatHistoryDefault: EnumTypes.meetingChatHistoryDefaultMode;
	subject: string;
	videoTeleconferenceId: string;
	watermarkProtection: ComplexTypes.watermarkProtectionValues;
}
export interface onlineMeetingBaseMethods {
	attendanceReports(): IBaseQuery<meetingAttendanceReport[]>;
	attendanceReports(id: string | number): IBaseQuery<meetingAttendanceReport>;
}
/*********************************************
* onlineMeeting
**********************************************/
export interface onlineMeeting extends onlineMeetingProps, onlineMeetingMethods , onlineMeetingBase { }
export interface onlineMeetingProps {
	attendeeReport: any;
	broadcastSettings: ComplexTypes.broadcastMeetingSettings;
	creationDateTime: any;
	endDateTime: any;
	externalId: string;
	isBroadcast: boolean;
	participants: ComplexTypes.meetingParticipants;
	startDateTime: any;
}
export interface onlineMeetingMethods {
	recordings(): IBaseQuery<callRecording[]>;
	recordings(id: string | number): IBaseQuery<callRecording>;
	transcripts(): IBaseQuery<callTranscript[]>;
	transcripts(id: string | number): IBaseQuery<callTranscript>;
}
/*********************************************
* presence
**********************************************/
export interface presence extends presenceProps, presenceMethods , entity { }
export interface presenceProps {
	activity: string;
	availability: string;
	statusMessage: ComplexTypes.presenceStatusMessage;
}
export interface presenceMethods {

}
/*********************************************
* authentication
**********************************************/
export interface authentication extends authenticationProps, authenticationMethods , entity { }
export interface authenticationProps {

}
export interface authenticationMethods {
	emailMethods(): IBaseQuery<emailAuthenticationMethod[]>;
	emailMethods(id: string | number): IBaseQuery<emailAuthenticationMethod>;
	fido2Methods(): IBaseQuery<fido2AuthenticationMethod[]>;
	fido2Methods(id: string | number): IBaseQuery<fido2AuthenticationMethod>;
	methods(): IBaseQuery<authenticationMethod[]>;
	methods(id: string | number): IBaseQuery<authenticationMethod>;
	microsoftAuthenticatorMethods(): IBaseQuery<microsoftAuthenticatorAuthenticationMethod[]>;
	microsoftAuthenticatorMethods(id: string | number): IBaseQuery<microsoftAuthenticatorAuthenticationMethod>;
	operations(): IBaseQuery<longRunningOperation[]>;
	operations(id: string | number): IBaseQuery<longRunningOperation>;
	passwordMethods(): IBaseQuery<passwordAuthenticationMethod[]>;
	passwordMethods(id: string | number): IBaseQuery<passwordAuthenticationMethod>;
	phoneMethods(): IBaseQuery<phoneAuthenticationMethod[]>;
	phoneMethods(id: string | number): IBaseQuery<phoneAuthenticationMethod>;
	softwareOathMethods(): IBaseQuery<softwareOathAuthenticationMethod[]>;
	softwareOathMethods(id: string | number): IBaseQuery<softwareOathAuthenticationMethod>;
	temporaryAccessPassMethods(): IBaseQuery<temporaryAccessPassAuthenticationMethod[]>;
	temporaryAccessPassMethods(id: string | number): IBaseQuery<temporaryAccessPassAuthenticationMethod>;
	windowsHelloForBusinessMethods(): IBaseQuery<windowsHelloForBusinessAuthenticationMethod[]>;
	windowsHelloForBusinessMethods(id: string | number): IBaseQuery<windowsHelloForBusinessAuthenticationMethod>;
}
/*********************************************
* chat
**********************************************/
export interface chat extends chatProps, chatMethods , entity { }
export interface chatProps {
	chatType: EnumTypes.chatType;
	createdDateTime: any;
	lastUpdatedDateTime: any;
	onlineMeetingInfo: ComplexTypes.teamworkOnlineMeetingInfo;
	tenantId: string;
	topic: string;
	viewpoint: ComplexTypes.chatViewpoint;
	webUrl: string;
}
export interface chatMethods {
	installedApps(): IBaseQuery<teamsAppInstallation[]>;
	installedApps(id: string | number): IBaseQuery<teamsAppInstallation>;
	lastMessagePreview(): IBaseQuery<chatMessageInfo>;
	members(): IBaseQuery<conversationMember[]>;
	members(id: string | number): IBaseQuery<conversationMember>;
	messages(): IBaseQuery<chatMessage[]>;
	messages(id: string | number): IBaseQuery<chatMessage>;
	permissionGrants(): IBaseQuery<resourceSpecificPermissionGrant[]>;
	permissionGrants(id: string | number): IBaseQuery<resourceSpecificPermissionGrant>;
	pinnedMessages(): IBaseQuery<pinnedChatMessageInfo[]>;
	pinnedMessages(id: string | number): IBaseQuery<pinnedChatMessageInfo>;
	tabs(): IBaseQuery<teamsTab[]>;
	tabs(id: string | number): IBaseQuery<teamsTab>;
}
/*********************************************
* userTeamwork
**********************************************/
export interface userTeamwork extends userTeamworkProps, userTeamworkMethods , entity { }
export interface userTeamworkProps {
	locale: string;
	region: string;
}
export interface userTeamworkMethods {
	associatedTeams(): IBaseQuery<associatedTeamInfo[]>;
	associatedTeams(id: string | number): IBaseQuery<associatedTeamInfo>;
	installedApps(): IBaseQuery<userScopeTeamsAppInstallation[]>;
	installedApps(id: string | number): IBaseQuery<userScopeTeamsAppInstallation>;
}
/*********************************************
* userSolutionRoot
**********************************************/
export interface userSolutionRoot extends userSolutionRootProps, userSolutionRootMethods , entity { }
export interface userSolutionRootProps {

}
export interface userSolutionRootMethods {
	workingTimeSchedule(): IBaseQuery<workingTimeSchedule>;
}
/*********************************************
* todo
**********************************************/
export interface todo extends todoProps, todoMethods , entity { }
export interface todoProps {

}
export interface todoMethods {
	lists(): IBaseQuery<todoTaskList[]>;
	lists(id: string | number): IBaseQuery<todoTaskList>;
}
/*********************************************
* employeeExperienceUser
**********************************************/
export interface employeeExperienceUser extends employeeExperienceUserProps, employeeExperienceUserMethods , entity { }
export interface employeeExperienceUserProps {

}
export interface employeeExperienceUserMethods {
	learningCourseActivities(): IBaseQuery<learningCourseActivity[]>;
	learningCourseActivities(id: string | number): IBaseQuery<learningCourseActivity>;
}
/*********************************************
* auditLogRoot
**********************************************/
export interface auditLogRoot extends auditLogRootProps, auditLogRootMethods  { }
export interface auditLogRootProps {

}
export interface auditLogRootMethods {
	directoryAudits(): IBaseQuery<directoryAudit[]>;
	directoryAudits(id: string | number): IBaseQuery<directoryAudit>;
	provisioning(): IBaseQuery<provisioningObjectSummary[]>;
	provisioning(id: string | number): IBaseQuery<provisioningObjectSummary>;
	signIns(): IBaseQuery<signIn[]>;
	signIns(id: string | number): IBaseQuery<signIn>;
}
/*********************************************
* directoryAudit
**********************************************/
export interface directoryAudit extends directoryAuditProps, directoryAuditMethods , entity { }
export interface directoryAuditProps {
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
export interface directoryAuditMethods {

}
/*********************************************
* provisioningObjectSummary
**********************************************/
export interface provisioningObjectSummary extends provisioningObjectSummaryProps, provisioningObjectSummaryMethods , entity { }
export interface provisioningObjectSummaryProps {
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
export interface provisioningObjectSummaryMethods {

}
/*********************************************
* signIn
**********************************************/
export interface signIn extends signInProps, signInMethods , entity { }
export interface signInProps {
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
export interface signInMethods {

}
/*********************************************
* authenticationMethodsRoot
**********************************************/
export interface authenticationMethodsRoot extends authenticationMethodsRootProps, authenticationMethodsRootMethods , entity { }
export interface authenticationMethodsRootProps {

}
export interface authenticationMethodsRootMethods {
	userRegistrationDetails(): IBaseQuery<userRegistrationDetails[]>;
	userRegistrationDetails(id: string | number): IBaseQuery<userRegistrationDetails>;
}
/*********************************************
* userRegistrationDetails
**********************************************/
export interface userRegistrationDetails extends userRegistrationDetailsProps, userRegistrationDetailsMethods , entity { }
export interface userRegistrationDetailsProps {
	isAdmin: boolean;
	isMfaCapable: boolean;
	isMfaRegistered: boolean;
	isPasswordlessCapable: boolean;
	isSsprCapable: boolean;
	isSsprEnabled: boolean;
	isSsprRegistered: boolean;
	isSystemPreferredAuthenticationMethodEnabled: boolean;
	lastUpdatedDateTime: any;
	methodsRegistered: Array<string>[];
	systemPreferredAuthenticationMethods: Array<string>[];
	userDisplayName: string;
	userPreferredMethodForSecondaryAuthentication: EnumTypes.userDefaultAuthenticationMethod;
	userPrincipalName: string;
	userType: EnumTypes.signInUserType;
}
export interface userRegistrationDetailsMethods {

}
/*********************************************
* governanceInsight
**********************************************/
export interface governanceInsight extends governanceInsightProps, governanceInsightMethods , entity { }
export interface governanceInsightProps {
	insightCreatedDateTime: any;
}
export interface governanceInsightMethods {

}
/*********************************************
* membershipOutlierInsight
**********************************************/
export interface membershipOutlierInsight extends membershipOutlierInsightProps, membershipOutlierInsightMethods , governanceInsight { }
export interface membershipOutlierInsightProps {
	containerId: string;
	memberId: string;
	outlierContainerType: EnumTypes.outlierContainerType;
	outlierMemberType: EnumTypes.outlierMemberType;
}
export interface membershipOutlierInsightMethods {
	container(): IBaseQuery<directoryObject>;
	lastModifiedBy(): IBaseQuery<user>;
	member(): IBaseQuery<directoryObject>;
}
/*********************************************
* relyingPartyDetailedSummary
**********************************************/
export interface relyingPartyDetailedSummary extends relyingPartyDetailedSummaryProps, relyingPartyDetailedSummaryMethods , entity { }
export interface relyingPartyDetailedSummaryProps {
	failedSignInCount: number;
	migrationStatus: EnumTypes.migrationStatus;
	migrationValidationDetails: ComplexTypes.keyValuePair[];
	relyingPartyId: string;
	relyingPartyName: string;
	replyUrls: Array<string>[];
	serviceId: string;
	signInSuccessRate: number;
	successfulSignInCount: number;
	totalSignInCount: number;
	uniqueUserCount: number;
}
export interface relyingPartyDetailedSummaryMethods {

}
/*********************************************
* reportRoot
**********************************************/
export interface reportRoot extends reportRootProps, reportRootMethods  { }
export interface reportRootProps {

}
export interface reportRootMethods {
	authenticationMethods(): IBaseQuery<authenticationMethodsRoot>;
	partners(): IBaseQuery<partners>;
	dailyPrintUsageByPrinter(): IBaseQuery<printUsageByPrinter[]>;
	dailyPrintUsageByPrinter(id: string | number): IBaseQuery<printUsageByPrinter>;
	dailyPrintUsageByUser(): IBaseQuery<printUsageByUser[]>;
	dailyPrintUsageByUser(id: string | number): IBaseQuery<printUsageByUser>;
	monthlyPrintUsageByPrinter(): IBaseQuery<printUsageByPrinter[]>;
	monthlyPrintUsageByPrinter(id: string | number): IBaseQuery<printUsageByPrinter>;
	monthlyPrintUsageByUser(): IBaseQuery<printUsageByUser[]>;
	monthlyPrintUsageByUser(id: string | number): IBaseQuery<printUsageByUser>;
	security(): IBaseQuery<securityReportsRoot>;
}
/*********************************************
* partners
**********************************************/
export interface partners extends partnersProps, partnersMethods , entity { }
export interface partnersProps {

}
export interface partnersMethods {
	billing(): IBaseQuery<billing>;
}
/*********************************************
* printUsage
**********************************************/
export interface printUsage extends printUsageProps, printUsageMethods , entity { }
export interface printUsageProps {
	blackAndWhitePageCount: number;
	colorPageCount: number;
	completedBlackAndWhiteJobCount: number;
	completedColorJobCount: number;
	completedJobCount: number;
	doubleSidedSheetCount: number;
	incompleteJobCount: number;
	mediaSheetCount: number;
	pageCount: number;
	singleSidedSheetCount: number;
	usageDate: any;
}
export interface printUsageMethods {

}
/*********************************************
* printUsageByPrinter
**********************************************/
export interface printUsageByPrinter extends printUsageByPrinterProps, printUsageByPrinterMethods , printUsage { }
export interface printUsageByPrinterProps {
	printerId: string;
	printerName: string;
}
export interface printUsageByPrinterMethods {

}
/*********************************************
* printUsageByUser
**********************************************/
export interface printUsageByUser extends printUsageByUserProps, printUsageByUserMethods , printUsage { }
export interface printUsageByUserProps {
	userPrincipalName: string;
}
export interface printUsageByUserMethods {

}
/*********************************************
* securityReportsRoot
**********************************************/
export interface securityReportsRoot extends securityReportsRootProps, securityReportsRootMethods , entity { }
export interface securityReportsRootProps {

}
export interface securityReportsRootMethods {

}
/*********************************************
* invitation
**********************************************/
export interface invitation extends invitationProps, invitationMethods , entity { }
export interface invitationProps {
	invitedUserDisplayName: string;
	invitedUserEmailAddress: string;
	invitedUserMessageInfo: ComplexTypes.invitedUserMessageInfo;
	invitedUserType: string;
	inviteRedeemUrl: string;
	inviteRedirectUrl: string;
	resetRedemption: boolean;
	sendInvitationMessage: boolean;
	status: string;
}
export interface invitationMethods {
	invitedUser(): IBaseQuery<user>;
	invitedUserSponsors(): IBaseQuery<directoryObject[]>;
	invitedUserSponsors(id: string | number): IBaseQuery<directoryObject>;
}
/*********************************************
* servicePrincipal
**********************************************/
export interface servicePrincipal extends servicePrincipalProps, servicePrincipalMethods , directoryObject { }
export interface servicePrincipalProps {
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
	customSecurityAttributes: ComplexTypes.customSecurityAttributeValue;
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
	verifiedPublisher: ComplexTypes.verifiedPublisher;
}
export interface servicePrincipalMethods {
	appManagementPolicies(): IBaseQuery<appManagementPolicy[]>;
	appManagementPolicies(id: string | number): IBaseQuery<appManagementPolicy>;
	appRoleAssignedTo(): IBaseQuery<appRoleAssignment[]>;
	appRoleAssignedTo(id: string | number): IBaseQuery<appRoleAssignment>;
	appRoleAssignments(): IBaseQuery<appRoleAssignment[]>;
	appRoleAssignments(id: string | number): IBaseQuery<appRoleAssignment>;
	claimsMappingPolicies(): IBaseQuery<claimsMappingPolicy[]>;
	claimsMappingPolicies(id: string | number): IBaseQuery<claimsMappingPolicy>;
	createdObjects(): IBaseQuery<directoryObject[]>;
	createdObjects(id: string | number): IBaseQuery<directoryObject>;
	delegatedPermissionClassifications(): IBaseQuery<delegatedPermissionClassification[]>;
	delegatedPermissionClassifications(id: string | number): IBaseQuery<delegatedPermissionClassification>;
	endpoints(): IBaseQuery<ComplexTypes.endpoint[]>;
	endpoints(id: string | number): IBaseQuery<ComplexTypes.endpoint>;
	federatedIdentityCredentials(): IBaseQuery<federatedIdentityCredential[]>;
	federatedIdentityCredentials(id: string | number): IBaseQuery<federatedIdentityCredential>;
	homeRealmDiscoveryPolicies(): IBaseQuery<homeRealmDiscoveryPolicy[]>;
	homeRealmDiscoveryPolicies(id: string | number): IBaseQuery<homeRealmDiscoveryPolicy>;
	memberOf(): IBaseQuery<directoryObject[]>;
	memberOf(id: string | number): IBaseQuery<directoryObject>;
	oauth2PermissionGrants(): IBaseQuery<oAuth2PermissionGrant[]>;
	oauth2PermissionGrants(id: string | number): IBaseQuery<oAuth2PermissionGrant>;
	ownedObjects(): IBaseQuery<directoryObject[]>;
	ownedObjects(id: string | number): IBaseQuery<directoryObject>;
	owners(): IBaseQuery<directoryObject[]>;
	owners(id: string | number): IBaseQuery<directoryObject>;
	remoteDesktopSecurityConfiguration(): IBaseQuery<remoteDesktopSecurityConfiguration>;
	tokenIssuancePolicies(): IBaseQuery<tokenIssuancePolicy[]>;
	tokenIssuancePolicies(id: string | number): IBaseQuery<tokenIssuancePolicy>;
	tokenLifetimePolicies(): IBaseQuery<tokenLifetimePolicy[]>;
	tokenLifetimePolicies(id: string | number): IBaseQuery<tokenLifetimePolicy>;
	transitiveMemberOf(): IBaseQuery<directoryObject[]>;
	transitiveMemberOf(id: string | number): IBaseQuery<directoryObject>;
	synchronization(): IBaseQuery<synchronization>;
}
/*********************************************
* applicationTemplate
**********************************************/
export interface applicationTemplate extends applicationTemplateProps, applicationTemplateMethods , entity { }
export interface applicationTemplateProps {
	categories: Array<string>[];
	description: string;
	displayName: string;
	homePageUrl: string;
	logoUrl: string;
	publisher: string;
	supportedProvisioningTypes: Array<string>[];
	supportedSingleSignOnModes: Array<string>[];
}
export interface applicationTemplateMethods {

}
/*********************************************
* claimsMappingPolicy
**********************************************/
export interface claimsMappingPolicy extends claimsMappingPolicyProps, claimsMappingPolicyMethods , stsPolicy { }
export interface claimsMappingPolicyProps {

}
export interface claimsMappingPolicyMethods {

}
/*********************************************
* delegatedPermissionClassification
**********************************************/
export interface delegatedPermissionClassification extends delegatedPermissionClassificationProps, delegatedPermissionClassificationMethods , entity { }
export interface delegatedPermissionClassificationProps {
	classification: EnumTypes.permissionClassificationType;
	permissionId: string;
	permissionName: string;
}
export interface delegatedPermissionClassificationMethods {

}
/*********************************************
* endpoint
**********************************************/
export interface endpoint extends endpointProps, endpointMethods , directoryObject { }
export interface endpointProps {
	capability: string;
	providerId: string;
	providerName: string;
	providerResourceId: string;
	uri: string;
}
export interface endpointMethods {

}
/*********************************************
* remoteDesktopSecurityConfiguration
**********************************************/
export interface remoteDesktopSecurityConfiguration extends remoteDesktopSecurityConfigurationProps, remoteDesktopSecurityConfigurationMethods , entity { }
export interface remoteDesktopSecurityConfigurationProps {
	isRemoteDesktopProtocolEnabled: boolean;
}
export interface remoteDesktopSecurityConfigurationMethods {
	targetDeviceGroups(): IBaseQuery<targetDeviceGroup[]>;
	targetDeviceGroups(id: string | number): IBaseQuery<targetDeviceGroup>;
}
/*********************************************
* authenticationCombinationConfiguration
**********************************************/
export interface authenticationCombinationConfiguration extends authenticationCombinationConfigurationProps, authenticationCombinationConfigurationMethods , entity { }
export interface authenticationCombinationConfigurationProps {
	appliesToCombinations: EnumTypes.authenticationMethodModes[];
}
export interface authenticationCombinationConfigurationMethods {

}
/*********************************************
* authenticationMethodConfiguration
**********************************************/
export interface authenticationMethodConfiguration extends authenticationMethodConfigurationProps, authenticationMethodConfigurationMethods , entity { }
export interface authenticationMethodConfigurationProps {
	excludeTargets: ComplexTypes.excludeTarget[];
	state: EnumTypes.authenticationMethodState;
}
export interface authenticationMethodConfigurationMethods {

}
/*********************************************
* authenticationMethodModeDetail
**********************************************/
export interface authenticationMethodModeDetail extends authenticationMethodModeDetailProps, authenticationMethodModeDetailMethods , entity { }
export interface authenticationMethodModeDetailProps {
	authenticationMethod: EnumTypes.baseAuthenticationMethod;
	displayName: string;
}
export interface authenticationMethodModeDetailMethods {

}
/*********************************************
* authenticationMethodsPolicy
**********************************************/
export interface authenticationMethodsPolicy extends authenticationMethodsPolicyProps, authenticationMethodsPolicyMethods , entity { }
export interface authenticationMethodsPolicyProps {
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	policyMigrationState: EnumTypes.authenticationMethodsPolicyMigrationState;
	policyVersion: string;
	reconfirmationInDays: number;
	registrationEnforcement: ComplexTypes.registrationEnforcement;
}
export interface authenticationMethodsPolicyMethods {
	authenticationMethodConfigurations(): IBaseQuery<authenticationMethodConfiguration[]>;
	authenticationMethodConfigurations(id: string | number): IBaseQuery<authenticationMethodConfiguration>;
}
/*********************************************
* authenticationMethodTarget
**********************************************/
export interface authenticationMethodTarget extends authenticationMethodTargetProps, authenticationMethodTargetMethods , entity { }
export interface authenticationMethodTargetProps {
	isRegistrationRequired: boolean;
	targetType: EnumTypes.authenticationMethodTargetType;
}
export interface authenticationMethodTargetMethods {

}
/*********************************************
* authenticationStrengthPolicy
**********************************************/
export interface authenticationStrengthPolicy extends authenticationStrengthPolicyProps, authenticationStrengthPolicyMethods , entity { }
export interface authenticationStrengthPolicyProps {
	allowedCombinations: EnumTypes.authenticationMethodModes[];
	createdDateTime: any;
	description: string;
	displayName: string;
	modifiedDateTime: any;
	policyType: EnumTypes.authenticationStrengthPolicyType;
	requirementsSatisfied: EnumTypes.authenticationStrengthRequirements;
}
export interface authenticationStrengthPolicyMethods {
	combinationConfigurations(): IBaseQuery<authenticationCombinationConfiguration[]>;
	combinationConfigurations(id: string | number): IBaseQuery<authenticationCombinationConfiguration>;
}
/*********************************************
* authenticationStrengthRoot
**********************************************/
export interface authenticationStrengthRoot extends authenticationStrengthRootProps, authenticationStrengthRootMethods , entity { }
export interface authenticationStrengthRootProps {
	combinations: EnumTypes.authenticationMethodModes[];
}
export interface authenticationStrengthRootMethods {
	authenticationMethodModes(): IBaseQuery<authenticationMethodModeDetail[]>;
	authenticationMethodModes(id: string | number): IBaseQuery<authenticationMethodModeDetail>;
	policies(): IBaseQuery<authenticationStrengthPolicy[]>;
	policies(id: string | number): IBaseQuery<authenticationStrengthPolicy>;
}
/*********************************************
* conditionalAccessRoot
**********************************************/
export interface conditionalAccessRoot extends conditionalAccessRootProps, conditionalAccessRootMethods , entity { }
export interface conditionalAccessRootProps {

}
export interface conditionalAccessRootMethods {
	authenticationStrength(): IBaseQuery<authenticationStrengthRoot>;
	authenticationContextClassReferences(): IBaseQuery<authenticationContextClassReference[]>;
	authenticationContextClassReferences(id: string | number): IBaseQuery<authenticationContextClassReference>;
	namedLocations(): IBaseQuery<namedLocation[]>;
	namedLocations(id: string | number): IBaseQuery<namedLocation>;
	policies(): IBaseQuery<conditionalAccessPolicy[]>;
	policies(id: string | number): IBaseQuery<conditionalAccessPolicy>;
	templates(): IBaseQuery<conditionalAccessTemplate[]>;
	templates(id: string | number): IBaseQuery<conditionalAccessTemplate>;
}
/*********************************************
* authenticationContextClassReference
**********************************************/
export interface authenticationContextClassReference extends authenticationContextClassReferenceProps, authenticationContextClassReferenceMethods , entity { }
export interface authenticationContextClassReferenceProps {
	description: string;
	displayName: string;
	isAvailable: boolean;
}
export interface authenticationContextClassReferenceMethods {

}
/*********************************************
* namedLocation
**********************************************/
export interface namedLocation extends namedLocationProps, namedLocationMethods , entity { }
export interface namedLocationProps {
	createdDateTime: any;
	displayName: string;
	modifiedDateTime: any;
}
export interface namedLocationMethods {

}
/*********************************************
* conditionalAccessPolicy
**********************************************/
export interface conditionalAccessPolicy extends conditionalAccessPolicyProps, conditionalAccessPolicyMethods , entity { }
export interface conditionalAccessPolicyProps {
	conditions: ComplexTypes.conditionalAccessConditionSet;
	createdDateTime: any;
	description: string;
	displayName: string;
	grantControls: ComplexTypes.conditionalAccessGrantControls;
	modifiedDateTime: any;
	sessionControls: ComplexTypes.conditionalAccessSessionControls;
	state: EnumTypes.conditionalAccessPolicyState;
	templateId: string;
}
export interface conditionalAccessPolicyMethods {

}
/*********************************************
* conditionalAccessTemplate
**********************************************/
export interface conditionalAccessTemplate extends conditionalAccessTemplateProps, conditionalAccessTemplateMethods , entity { }
export interface conditionalAccessTemplateProps {
	description: string;
	details: ComplexTypes.conditionalAccessPolicyDetail;
	name: string;
	scenarios: EnumTypes.templateScenarios;
}
export interface conditionalAccessTemplateMethods {

}
/*********************************************
* emailAuthenticationMethodConfiguration
**********************************************/
export interface emailAuthenticationMethodConfiguration extends emailAuthenticationMethodConfigurationProps, emailAuthenticationMethodConfigurationMethods , authenticationMethodConfiguration { }
export interface emailAuthenticationMethodConfigurationProps {
	allowExternalIdToUseEmailOtp: EnumTypes.externalEmailOtpState;
}
export interface emailAuthenticationMethodConfigurationMethods {
	includeTargets(): IBaseQuery<authenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget>;
}
/*********************************************
* fido2AuthenticationMethodConfiguration
**********************************************/
export interface fido2AuthenticationMethodConfiguration extends fido2AuthenticationMethodConfigurationProps, fido2AuthenticationMethodConfigurationMethods , authenticationMethodConfiguration { }
export interface fido2AuthenticationMethodConfigurationProps {
	isAttestationEnforced: boolean;
	isSelfServiceRegistrationAllowed: boolean;
	keyRestrictions: ComplexTypes.fido2KeyRestrictions;
}
export interface fido2AuthenticationMethodConfigurationMethods {
	includeTargets(): IBaseQuery<authenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget>;
}
/*********************************************
* fido2CombinationConfiguration
**********************************************/
export interface fido2CombinationConfiguration extends fido2CombinationConfigurationProps, fido2CombinationConfigurationMethods , authenticationCombinationConfiguration { }
export interface fido2CombinationConfigurationProps {
	allowedAAGUIDs: Array<string>[];
}
export interface fido2CombinationConfigurationMethods {

}
/*********************************************
* microsoftAuthenticatorAuthenticationMethodConfiguration
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodConfiguration extends microsoftAuthenticatorAuthenticationMethodConfigurationProps, microsoftAuthenticatorAuthenticationMethodConfigurationMethods , authenticationMethodConfiguration { }
export interface microsoftAuthenticatorAuthenticationMethodConfigurationProps {
	featureSettings: ComplexTypes.microsoftAuthenticatorFeatureSettings;
	isSoftwareOathEnabled: boolean;
}
export interface microsoftAuthenticatorAuthenticationMethodConfigurationMethods {
	includeTargets(): IBaseQuery<microsoftAuthenticatorAuthenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<microsoftAuthenticatorAuthenticationMethodTarget>;
}
/*********************************************
* microsoftAuthenticatorAuthenticationMethodTarget
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodTarget extends microsoftAuthenticatorAuthenticationMethodTargetProps, microsoftAuthenticatorAuthenticationMethodTargetMethods , authenticationMethodTarget { }
export interface microsoftAuthenticatorAuthenticationMethodTargetProps {
	authenticationMode: EnumTypes.microsoftAuthenticatorAuthenticationMode;
}
export interface microsoftAuthenticatorAuthenticationMethodTargetMethods {

}
/*********************************************
* policyRoot
**********************************************/
export interface policyRoot extends policyRootProps, policyRootMethods , entity { }
export interface policyRootProps {

}
export interface policyRootMethods {
	authenticationMethodsPolicy(): IBaseQuery<authenticationMethodsPolicy>;
	authenticationStrengthPolicies(): IBaseQuery<authenticationStrengthPolicy[]>;
	authenticationStrengthPolicies(id: string | number): IBaseQuery<authenticationStrengthPolicy>;
	authenticationFlowsPolicy(): IBaseQuery<authenticationFlowsPolicy>;
	deviceRegistrationPolicy(): IBaseQuery<deviceRegistrationPolicy>;
	activityBasedTimeoutPolicies(): IBaseQuery<activityBasedTimeoutPolicy[]>;
	activityBasedTimeoutPolicies(id: string | number): IBaseQuery<activityBasedTimeoutPolicy>;
	appManagementPolicies(): IBaseQuery<appManagementPolicy[]>;
	appManagementPolicies(id: string | number): IBaseQuery<appManagementPolicy>;
	authorizationPolicy(): IBaseQuery<authorizationPolicy>;
	claimsMappingPolicies(): IBaseQuery<claimsMappingPolicy[]>;
	claimsMappingPolicies(id: string | number): IBaseQuery<claimsMappingPolicy>;
	crossTenantAccessPolicy(): IBaseQuery<crossTenantAccessPolicy>;
	defaultAppManagementPolicy(): IBaseQuery<tenantAppManagementPolicy>;
	homeRealmDiscoveryPolicies(): IBaseQuery<homeRealmDiscoveryPolicy[]>;
	homeRealmDiscoveryPolicies(id: string | number): IBaseQuery<homeRealmDiscoveryPolicy>;
	permissionGrantPolicies(): IBaseQuery<permissionGrantPolicy[]>;
	permissionGrantPolicies(id: string | number): IBaseQuery<permissionGrantPolicy>;
	tokenIssuancePolicies(): IBaseQuery<tokenIssuancePolicy[]>;
	tokenIssuancePolicies(id: string | number): IBaseQuery<tokenIssuancePolicy>;
	tokenLifetimePolicies(): IBaseQuery<tokenLifetimePolicy[]>;
	tokenLifetimePolicies(id: string | number): IBaseQuery<tokenLifetimePolicy>;
	featureRolloutPolicies(): IBaseQuery<featureRolloutPolicy[]>;
	featureRolloutPolicies(id: string | number): IBaseQuery<featureRolloutPolicy>;
	adminConsentRequestPolicy(): IBaseQuery<adminConsentRequestPolicy>;
	conditionalAccessPolicies(): IBaseQuery<conditionalAccessPolicy[]>;
	conditionalAccessPolicies(id: string | number): IBaseQuery<conditionalAccessPolicy>;
	identitySecurityDefaultsEnforcementPolicy(): IBaseQuery<identitySecurityDefaultsEnforcementPolicy>;
	roleManagementPolicies(): IBaseQuery<unifiedRoleManagementPolicy[]>;
	roleManagementPolicies(id: string | number): IBaseQuery<unifiedRoleManagementPolicy>;
	roleManagementPolicyAssignments(): IBaseQuery<unifiedRoleManagementPolicyAssignment[]>;
	roleManagementPolicyAssignments(id: string | number): IBaseQuery<unifiedRoleManagementPolicyAssignment>;
}
/*********************************************
* authenticationFlowsPolicy
**********************************************/
export interface authenticationFlowsPolicy extends authenticationFlowsPolicyProps, authenticationFlowsPolicyMethods , entity { }
export interface authenticationFlowsPolicyProps {
	description: string;
	displayName: string;
	selfServiceSignUp: ComplexTypes.selfServiceSignUpAuthenticationFlowConfiguration;
}
export interface authenticationFlowsPolicyMethods {

}
/*********************************************
* deviceRegistrationPolicy
**********************************************/
export interface deviceRegistrationPolicy extends deviceRegistrationPolicyProps, deviceRegistrationPolicyMethods , entity { }
export interface deviceRegistrationPolicyProps {
	azureADJoin: ComplexTypes.azureADJoinPolicy;
	azureADRegistration: ComplexTypes.azureADRegistrationPolicy;
	description: string;
	displayName: string;
	localAdminPassword: ComplexTypes.localAdminPasswordSettings;
	multiFactorAuthConfiguration: EnumTypes.multiFactorAuthConfiguration;
	userDeviceQuota: number;
}
export interface deviceRegistrationPolicyMethods {

}
/*********************************************
* activityBasedTimeoutPolicy
**********************************************/
export interface activityBasedTimeoutPolicy extends activityBasedTimeoutPolicyProps, activityBasedTimeoutPolicyMethods , stsPolicy { }
export interface activityBasedTimeoutPolicyProps {

}
export interface activityBasedTimeoutPolicyMethods {

}
/*********************************************
* authorizationPolicy
**********************************************/
export interface authorizationPolicy extends authorizationPolicyProps, authorizationPolicyMethods , policyBase { }
export interface authorizationPolicyProps {
	allowedToSignUpEmailBasedSubscriptions: boolean;
	allowedToUseSSPR: boolean;
	allowEmailVerifiedUsersToJoinOrganization: boolean;
	allowInvitesFrom: EnumTypes.allowInvitesFrom;
	allowUserConsentForRiskyApps: boolean;
	blockMsolPowerShell: boolean;
	defaultUserRolePermissions: ComplexTypes.defaultUserRolePermissions;
	guestUserRoleId: any;
}
export interface authorizationPolicyMethods {

}
/*********************************************
* crossTenantAccessPolicy
**********************************************/
export interface crossTenantAccessPolicy extends crossTenantAccessPolicyProps, crossTenantAccessPolicyMethods , policyBase { }
export interface crossTenantAccessPolicyProps {
	allowedCloudEndpoints: Array<string>[];
}
export interface crossTenantAccessPolicyMethods {
	default(): IBaseQuery<crossTenantAccessPolicyConfigurationDefault>;
	partners(): IBaseQuery<crossTenantAccessPolicyConfigurationPartner[]>;
	partners(id: string | number): IBaseQuery<crossTenantAccessPolicyConfigurationPartner>;
	templates(): IBaseQuery<policyTemplate>;
}
/*********************************************
* tenantAppManagementPolicy
**********************************************/
export interface tenantAppManagementPolicy extends tenantAppManagementPolicyProps, tenantAppManagementPolicyMethods , policyBase { }
export interface tenantAppManagementPolicyProps {
	applicationRestrictions: ComplexTypes.appManagementApplicationConfiguration;
	isEnabled: boolean;
	servicePrincipalRestrictions: ComplexTypes.appManagementServicePrincipalConfiguration;
}
export interface tenantAppManagementPolicyMethods {

}
/*********************************************
* permissionGrantPolicy
**********************************************/
export interface permissionGrantPolicy extends permissionGrantPolicyProps, permissionGrantPolicyMethods , policyBase { }
export interface permissionGrantPolicyProps {

}
export interface permissionGrantPolicyMethods {
	excludes(): IBaseQuery<permissionGrantConditionSet[]>;
	excludes(id: string | number): IBaseQuery<permissionGrantConditionSet>;
	includes(): IBaseQuery<permissionGrantConditionSet[]>;
	includes(id: string | number): IBaseQuery<permissionGrantConditionSet>;
}
/*********************************************
* featureRolloutPolicy
**********************************************/
export interface featureRolloutPolicy extends featureRolloutPolicyProps, featureRolloutPolicyMethods , entity { }
export interface featureRolloutPolicyProps {
	description: string;
	displayName: string;
	feature: EnumTypes.stagedFeatureName;
	isAppliedToOrganization: boolean;
	isEnabled: boolean;
}
export interface featureRolloutPolicyMethods {
	appliesTo(): IBaseQuery<directoryObject[]>;
	appliesTo(id: string | number): IBaseQuery<directoryObject>;
}
/*********************************************
* adminConsentRequestPolicy
**********************************************/
export interface adminConsentRequestPolicy extends adminConsentRequestPolicyProps, adminConsentRequestPolicyMethods , entity { }
export interface adminConsentRequestPolicyProps {
	isEnabled: boolean;
	notifyReviewers: boolean;
	remindersEnabled: boolean;
	requestDurationInDays: number;
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	version: number;
}
export interface adminConsentRequestPolicyMethods {

}
/*********************************************
* identitySecurityDefaultsEnforcementPolicy
**********************************************/
export interface identitySecurityDefaultsEnforcementPolicy extends identitySecurityDefaultsEnforcementPolicyProps, identitySecurityDefaultsEnforcementPolicyMethods , policyBase { }
export interface identitySecurityDefaultsEnforcementPolicyProps {
	isEnabled: boolean;
}
export interface identitySecurityDefaultsEnforcementPolicyMethods {

}
/*********************************************
* unifiedRoleManagementPolicy
**********************************************/
export interface unifiedRoleManagementPolicy extends unifiedRoleManagementPolicyProps, unifiedRoleManagementPolicyMethods , entity { }
export interface unifiedRoleManagementPolicyProps {
	description: string;
	displayName: string;
	isOrganizationDefault: boolean;
	lastModifiedBy: ComplexTypes.identity;
	lastModifiedDateTime: any;
	scopeId: string;
	scopeType: string;
}
export interface unifiedRoleManagementPolicyMethods {
	effectiveRules(): IBaseQuery<unifiedRoleManagementPolicyRule[]>;
	effectiveRules(id: string | number): IBaseQuery<unifiedRoleManagementPolicyRule>;
	rules(): IBaseQuery<unifiedRoleManagementPolicyRule[]>;
	rules(id: string | number): IBaseQuery<unifiedRoleManagementPolicyRule>;
}
/*********************************************
* unifiedRoleManagementPolicyAssignment
**********************************************/
export interface unifiedRoleManagementPolicyAssignment extends unifiedRoleManagementPolicyAssignmentProps, unifiedRoleManagementPolicyAssignmentMethods , entity { }
export interface unifiedRoleManagementPolicyAssignmentProps {
	policyId: string;
	roleDefinitionId: string;
	scopeId: string;
	scopeType: string;
}
export interface unifiedRoleManagementPolicyAssignmentMethods {
	policy(): IBaseQuery<unifiedRoleManagementPolicy>;
}
/*********************************************
* smsAuthenticationMethodConfiguration
**********************************************/
export interface smsAuthenticationMethodConfiguration extends smsAuthenticationMethodConfigurationProps, smsAuthenticationMethodConfigurationMethods , authenticationMethodConfiguration { }
export interface smsAuthenticationMethodConfigurationProps {

}
export interface smsAuthenticationMethodConfigurationMethods {
	includeTargets(): IBaseQuery<smsAuthenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<smsAuthenticationMethodTarget>;
}
/*********************************************
* smsAuthenticationMethodTarget
**********************************************/
export interface smsAuthenticationMethodTarget extends smsAuthenticationMethodTargetProps, smsAuthenticationMethodTargetMethods , authenticationMethodTarget { }
export interface smsAuthenticationMethodTargetProps {
	isUsableForSignIn: boolean;
}
export interface smsAuthenticationMethodTargetMethods {

}
/*********************************************
* softwareOathAuthenticationMethodConfiguration
**********************************************/
export interface softwareOathAuthenticationMethodConfiguration extends softwareOathAuthenticationMethodConfigurationProps, softwareOathAuthenticationMethodConfigurationMethods , authenticationMethodConfiguration { }
export interface softwareOathAuthenticationMethodConfigurationProps {

}
export interface softwareOathAuthenticationMethodConfigurationMethods {
	includeTargets(): IBaseQuery<authenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget>;
}
/*********************************************
* temporaryAccessPassAuthenticationMethodConfiguration
**********************************************/
export interface temporaryAccessPassAuthenticationMethodConfiguration extends temporaryAccessPassAuthenticationMethodConfigurationProps, temporaryAccessPassAuthenticationMethodConfigurationMethods , authenticationMethodConfiguration { }
export interface temporaryAccessPassAuthenticationMethodConfigurationProps {
	defaultLength: number;
	defaultLifetimeInMinutes: number;
	isUsableOnce: boolean;
	maximumLifetimeInMinutes: number;
	minimumLifetimeInMinutes: number;
}
export interface temporaryAccessPassAuthenticationMethodConfigurationMethods {
	includeTargets(): IBaseQuery<authenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget>;
}
/*********************************************
* voiceAuthenticationMethodConfiguration
**********************************************/
export interface voiceAuthenticationMethodConfiguration extends voiceAuthenticationMethodConfigurationProps, voiceAuthenticationMethodConfigurationMethods , authenticationMethodConfiguration { }
export interface voiceAuthenticationMethodConfigurationProps {
	isOfficePhoneAllowed: boolean;
}
export interface voiceAuthenticationMethodConfigurationMethods {
	includeTargets(): IBaseQuery<authenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget>;
}
/*********************************************
* x509CertificateAuthenticationMethodConfiguration
**********************************************/
export interface x509CertificateAuthenticationMethodConfiguration extends x509CertificateAuthenticationMethodConfigurationProps, x509CertificateAuthenticationMethodConfigurationMethods , authenticationMethodConfiguration { }
export interface x509CertificateAuthenticationMethodConfigurationProps {
	authenticationModeConfiguration: ComplexTypes.x509CertificateAuthenticationModeConfiguration;
	certificateUserBindings: ComplexTypes.x509CertificateUserBinding[];
}
export interface x509CertificateAuthenticationMethodConfigurationMethods {
	includeTargets(): IBaseQuery<authenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget>;
}
/*********************************************
* x509CertificateCombinationConfiguration
**********************************************/
export interface x509CertificateCombinationConfiguration extends x509CertificateCombinationConfigurationProps, x509CertificateCombinationConfigurationMethods , authenticationCombinationConfiguration { }
export interface x509CertificateCombinationConfigurationProps {
	allowedIssuerSkis: Array<string>[];
	allowedPolicyOIDs: Array<string>[];
}
export interface x509CertificateCombinationConfigurationMethods {

}
/*********************************************
* bitlocker
**********************************************/
export interface bitlocker extends bitlockerProps, bitlockerMethods , entity { }
export interface bitlockerProps {

}
export interface bitlockerMethods {
	recoveryKeys(): IBaseQuery<bitlockerRecoveryKey[]>;
	recoveryKeys(id: string | number): IBaseQuery<bitlockerRecoveryKey>;
}
/*********************************************
* bitlockerRecoveryKey
**********************************************/
export interface bitlockerRecoveryKey extends bitlockerRecoveryKeyProps, bitlockerRecoveryKeyMethods , entity { }
export interface bitlockerRecoveryKeyProps {
	createdDateTime: any;
	deviceId: string;
	key: string;
	volumeType: EnumTypes.volumeType;
}
export interface bitlockerRecoveryKeyMethods {

}
/*********************************************
* informationProtection
**********************************************/
export interface informationProtection extends informationProtectionProps, informationProtectionMethods  { }
export interface informationProtectionProps {

}
export interface informationProtectionMethods {
	bitlocker(): IBaseQuery<bitlocker>;
	threatAssessmentRequests(): IBaseQuery<threatAssessmentRequest[]>;
	threatAssessmentRequests(id: string | number): IBaseQuery<threatAssessmentRequest>;
}
/*********************************************
* threatAssessmentRequest
**********************************************/
export interface threatAssessmentRequest extends threatAssessmentRequestProps, threatAssessmentRequestMethods , entity { }
export interface threatAssessmentRequestProps {
	category: EnumTypes.threatCategory;
	contentType: EnumTypes.threatAssessmentContentType;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	expectedAssessment: EnumTypes.threatExpectedAssessment;
	requestSource: EnumTypes.threatAssessmentRequestSource;
	status: EnumTypes.threatAssessmentStatus;
}
export interface threatAssessmentRequestMethods {
	results(): IBaseQuery<threatAssessmentResult[]>;
	results(id: string | number): IBaseQuery<threatAssessmentResult>;
}
/*********************************************
* bookingAppointment
**********************************************/
export interface bookingAppointment extends bookingAppointmentProps, bookingAppointmentMethods , entity { }
export interface bookingAppointmentProps {
	additionalInformation: string;
	anonymousJoinWebUrl: string;
	appointmentLabel: string;
	createdDateTime: any;
	customerEmailAddress: string;
	customerName: string;
	customerNotes: string;
	customerPhone: string;
	customers: ComplexTypes.bookingCustomerInformationBase[];
	customerTimeZone: string;
	duration: number;
	endDateTime: ComplexTypes.dateTimeTimeZone;
	filledAttendeesCount: number;
	isCustomerAllowedToManageBooking: boolean;
	isLocationOnline: boolean;
	joinWebUrl: string;
	lastUpdatedDateTime: any;
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
export interface bookingAppointmentMethods {

}
/*********************************************
* bookingBusiness
**********************************************/
export interface bookingBusiness extends bookingBusinessProps, bookingBusinessMethods , entity { }
export interface bookingBusinessProps {
	address: ComplexTypes.physicalAddress;
	bookingPageSettings: ComplexTypes.bookingPageSettings;
	businessHours: ComplexTypes.bookingWorkHours[];
	businessType: string;
	createdDateTime: any;
	defaultCurrencyIso: string;
	displayName: string;
	email: string;
	isPublished: boolean;
	languageTag: string;
	lastUpdatedDateTime: any;
	phone: string;
	publicUrl: string;
	schedulingPolicy: ComplexTypes.bookingSchedulingPolicy;
	webSiteUrl: string;
}
export interface bookingBusinessMethods {
	appointments(): IBaseQuery<bookingAppointment[]>;
	appointments(id: string | number): IBaseQuery<bookingAppointment>;
	calendarView(): IBaseQuery<bookingAppointment[]>;
	calendarView(id: string | number): IBaseQuery<bookingAppointment>;
	customers(): IBaseQuery<bookingCustomerBase[]>;
	customers(id: string | number): IBaseQuery<bookingCustomerBase>;
	customQuestions(): IBaseQuery<bookingCustomQuestion[]>;
	customQuestions(id: string | number): IBaseQuery<bookingCustomQuestion>;
	services(): IBaseQuery<bookingService[]>;
	services(id: string | number): IBaseQuery<bookingService>;
	staffMembers(): IBaseQuery<bookingStaffMemberBase[]>;
	staffMembers(id: string | number): IBaseQuery<bookingStaffMemberBase>;
}
/*********************************************
* bookingCustomerBase
**********************************************/
export interface bookingCustomerBase extends bookingCustomerBaseProps, bookingCustomerBaseMethods , entity { }
export interface bookingCustomerBaseProps {

}
export interface bookingCustomerBaseMethods {

}
/*********************************************
* bookingCustomQuestion
**********************************************/
export interface bookingCustomQuestion extends bookingCustomQuestionProps, bookingCustomQuestionMethods , entity { }
export interface bookingCustomQuestionProps {
	answerInputType: EnumTypes.answerInputType;
	answerOptions: Array<string>[];
	createdDateTime: any;
	displayName: string;
	lastUpdatedDateTime: any;
}
export interface bookingCustomQuestionMethods {

}
/*********************************************
* bookingService
**********************************************/
export interface bookingService extends bookingServiceProps, bookingServiceMethods , entity { }
export interface bookingServiceProps {
	additionalInformation: string;
	createdDateTime: any;
	customQuestions: ComplexTypes.bookingQuestionAssignment[];
	defaultDuration: number;
	defaultLocation: ComplexTypes.location;
	defaultPrice: number;
	defaultPriceType: EnumTypes.bookingPriceType;
	defaultReminders: ComplexTypes.bookingReminder[];
	description: string;
	displayName: string;
	isAnonymousJoinEnabled: boolean;
	isCustomerAllowedToManageBooking: boolean;
	isHiddenFromCustomers: boolean;
	isLocationOnline: boolean;
	languageTag: string;
	lastUpdatedDateTime: any;
	maximumAttendeesCount: number;
	notes: string;
	postBuffer: number;
	preBuffer: number;
	schedulingPolicy: ComplexTypes.bookingSchedulingPolicy;
	smsNotificationsEnabled: boolean;
	staffMemberIds: Array<string>[];
	webUrl: string;
}
export interface bookingServiceMethods {

}
/*********************************************
* bookingStaffMemberBase
**********************************************/
export interface bookingStaffMemberBase extends bookingStaffMemberBaseProps, bookingStaffMemberBaseMethods , entity { }
export interface bookingStaffMemberBaseProps {

}
export interface bookingStaffMemberBaseMethods {

}
/*********************************************
* bookingCurrency
**********************************************/
export interface bookingCurrency extends bookingCurrencyProps, bookingCurrencyMethods , entity { }
export interface bookingCurrencyProps {
	symbol: string;
}
export interface bookingCurrencyMethods {

}
/*********************************************
* bookingCustomer
**********************************************/
export interface bookingCustomer extends bookingCustomerProps, bookingCustomerMethods , bookingCustomerBase { }
export interface bookingCustomerProps {
	addresses: ComplexTypes.physicalAddress[];
	createdDateTime: any;
	displayName: string;
	emailAddress: string;
	lastUpdatedDateTime: any;
	phones: ComplexTypes.phone[];
}
export interface bookingCustomerMethods {

}
/*********************************************
* bookingStaffMember
**********************************************/
export interface bookingStaffMember extends bookingStaffMemberProps, bookingStaffMemberMethods , bookingStaffMemberBase { }
export interface bookingStaffMemberProps {
	availabilityIsAffectedByPersonalCalendar: boolean;
	createdDateTime: any;
	displayName: string;
	emailAddress: string;
	isEmailNotificationEnabled: boolean;
	lastUpdatedDateTime: any;
	membershipStatus: EnumTypes.bookingStaffMembershipStatus;
	role: EnumTypes.bookingStaffRole;
	timeZone: string;
	useBusinessHours: boolean;
	workingHours: ComplexTypes.bookingWorkHours[];
}
export interface bookingStaffMemberMethods {

}
/*********************************************
* solutionsRoot
**********************************************/
export interface solutionsRoot extends solutionsRootProps, solutionsRootMethods  { }
export interface solutionsRootProps {

}
export interface solutionsRootMethods {
	bookingBusinesses(): IBaseQuery<bookingBusiness[]>;
	bookingBusinesses(id: string | number): IBaseQuery<bookingBusiness>;
	bookingCurrencies(): IBaseQuery<bookingCurrency[]>;
	bookingCurrencies(id: string | number): IBaseQuery<bookingCurrency>;
	backupRestore(): IBaseQuery<backupRestoreRoot>;
	virtualEvents(): IBaseQuery<virtualEventsRoot>;
}
/*********************************************
* backupRestoreRoot
**********************************************/
export interface backupRestoreRoot extends backupRestoreRootProps, backupRestoreRootMethods , entity { }
export interface backupRestoreRootProps {
	serviceStatus: ComplexTypes.serviceStatus;
}
export interface backupRestoreRootMethods {
	driveInclusionRules(): IBaseQuery<driveProtectionRule[]>;
	driveInclusionRules(id: string | number): IBaseQuery<driveProtectionRule>;
	driveProtectionUnits(): IBaseQuery<driveProtectionUnit[]>;
	driveProtectionUnits(id: string | number): IBaseQuery<driveProtectionUnit>;
	exchangeProtectionPolicies(): IBaseQuery<exchangeProtectionPolicy[]>;
	exchangeProtectionPolicies(id: string | number): IBaseQuery<exchangeProtectionPolicy>;
	exchangeRestoreSessions(): IBaseQuery<exchangeRestoreSession[]>;
	exchangeRestoreSessions(id: string | number): IBaseQuery<exchangeRestoreSession>;
	mailboxInclusionRules(): IBaseQuery<mailboxProtectionRule[]>;
	mailboxInclusionRules(id: string | number): IBaseQuery<mailboxProtectionRule>;
	mailboxProtectionUnits(): IBaseQuery<mailboxProtectionUnit[]>;
	mailboxProtectionUnits(id: string | number): IBaseQuery<mailboxProtectionUnit>;
	oneDriveForBusinessProtectionPolicies(): IBaseQuery<oneDriveForBusinessProtectionPolicy[]>;
	oneDriveForBusinessProtectionPolicies(id: string | number): IBaseQuery<oneDriveForBusinessProtectionPolicy>;
	oneDriveForBusinessRestoreSessions(): IBaseQuery<oneDriveForBusinessRestoreSession[]>;
	oneDriveForBusinessRestoreSessions(id: string | number): IBaseQuery<oneDriveForBusinessRestoreSession>;
	protectionPolicies(): IBaseQuery<protectionPolicyBase[]>;
	protectionPolicies(id: string | number): IBaseQuery<protectionPolicyBase>;
	protectionUnits(): IBaseQuery<protectionUnitBase[]>;
	protectionUnits(id: string | number): IBaseQuery<protectionUnitBase>;
	restorePoints(): IBaseQuery<restorePoint[]>;
	restorePoints(id: string | number): IBaseQuery<restorePoint>;
	restoreSessions(): IBaseQuery<restoreSessionBase[]>;
	restoreSessions(id: string | number): IBaseQuery<restoreSessionBase>;
	serviceApps(): IBaseQuery<serviceApp[]>;
	serviceApps(id: string | number): IBaseQuery<serviceApp>;
	sharePointProtectionPolicies(): IBaseQuery<sharePointProtectionPolicy[]>;
	sharePointProtectionPolicies(id: string | number): IBaseQuery<sharePointProtectionPolicy>;
	sharePointRestoreSessions(): IBaseQuery<sharePointRestoreSession[]>;
	sharePointRestoreSessions(id: string | number): IBaseQuery<sharePointRestoreSession>;
	siteInclusionRules(): IBaseQuery<siteProtectionRule[]>;
	siteInclusionRules(id: string | number): IBaseQuery<siteProtectionRule>;
	siteProtectionUnits(): IBaseQuery<siteProtectionUnit[]>;
	siteProtectionUnits(id: string | number): IBaseQuery<siteProtectionUnit>;
}
/*********************************************
* virtualEventsRoot
**********************************************/
export interface virtualEventsRoot extends virtualEventsRootProps, virtualEventsRootMethods , entity { }
export interface virtualEventsRootProps {

}
export interface virtualEventsRootMethods {
	events(): IBaseQuery<virtualEvent[]>;
	events(id: string | number): IBaseQuery<virtualEvent>;
	townhalls(): IBaseQuery<virtualEventTownhall[]>;
	townhalls(id: string | number): IBaseQuery<virtualEventTownhall>;
	webinars(): IBaseQuery<virtualEventWebinar[]>;
	webinars(id: string | number): IBaseQuery<virtualEventWebinar>;
}
/*********************************************
* cloudPC
**********************************************/
export interface cloudPC extends cloudPCProps, cloudPCMethods , entity { }
export interface cloudPCProps {
	aadDeviceId: string;
	displayName: string;
	gracePeriodEndDateTime: any;
	imageDisplayName: string;
	lastModifiedDateTime: any;
	managedDeviceId: string;
	managedDeviceName: string;
	onPremisesConnectionName: string;
	provisioningPolicyId: string;
	provisioningPolicyName: string;
	provisioningType: EnumTypes.cloudPcProvisioningType;
	servicePlanId: string;
	servicePlanName: string;
	userPrincipalName: string;
}
export interface cloudPCMethods {

}
/*********************************************
* cloudPcAuditEvent
**********************************************/
export interface cloudPcAuditEvent extends cloudPcAuditEventProps, cloudPcAuditEventMethods , entity { }
export interface cloudPcAuditEventProps {
	activity: string;
	activityDateTime: any;
	activityOperationType: EnumTypes.cloudPcAuditActivityOperationType;
	activityResult: EnumTypes.cloudPcAuditActivityResult;
	activityType: string;
	actor: ComplexTypes.cloudPcAuditActor;
	category: EnumTypes.cloudPcAuditCategory;
	componentName: string;
	correlationId: string;
	displayName: string;
	resources: ComplexTypes.cloudPcAuditResource[];
}
export interface cloudPcAuditEventMethods {

}
/*********************************************
* cloudPcDeviceImage
**********************************************/
export interface cloudPcDeviceImage extends cloudPcDeviceImageProps, cloudPcDeviceImageMethods , entity { }
export interface cloudPcDeviceImageProps {
	displayName: string;
	errorCode: EnumTypes.cloudPcDeviceImageErrorCode;
	expirationDate: any;
	lastModifiedDateTime: any;
	operatingSystem: string;
	osBuildNumber: string;
	osStatus: EnumTypes.cloudPcDeviceImageOsStatus;
	sourceImageResourceId: string;
	status: EnumTypes.cloudPcDeviceImageStatus;
	version: string;
}
export interface cloudPcDeviceImageMethods {

}
/*********************************************
* cloudPcGalleryImage
**********************************************/
export interface cloudPcGalleryImage extends cloudPcGalleryImageProps, cloudPcGalleryImageMethods , entity { }
export interface cloudPcGalleryImageProps {
	displayName: string;
	endDate: any;
	expirationDate: any;
	offerName: string;
	publisherName: string;
	sizeInGB: number;
	skuName: string;
	startDate: any;
	status: EnumTypes.cloudPcGalleryImageStatus;
}
export interface cloudPcGalleryImageMethods {

}
/*********************************************
* cloudPcOnPremisesConnection
**********************************************/
export interface cloudPcOnPremisesConnection extends cloudPcOnPremisesConnectionProps, cloudPcOnPremisesConnectionMethods , entity { }
export interface cloudPcOnPremisesConnectionProps {
	adDomainName: string;
	adDomainPassword: string;
	adDomainUsername: string;
	alternateResourceUrl: string;
	connectionType: EnumTypes.cloudPcOnPremisesConnectionType;
	displayName: string;
	healthCheckStatus: EnumTypes.cloudPcOnPremisesConnectionStatus;
	healthCheckStatusDetail: ComplexTypes.cloudPcOnPremisesConnectionStatusDetail;
	inUse: boolean;
	organizationalUnit: string;
	resourceGroupId: string;
	subnetId: string;
	subscriptionId: string;
	subscriptionName: string;
	virtualNetworkId: string;
	virtualNetworkLocation: string;
}
export interface cloudPcOnPremisesConnectionMethods {

}
/*********************************************
* cloudPcProvisioningPolicy
**********************************************/
export interface cloudPcProvisioningPolicy extends cloudPcProvisioningPolicyProps, cloudPcProvisioningPolicyMethods , entity { }
export interface cloudPcProvisioningPolicyProps {
	alternateResourceUrl: string;
	cloudPcGroupDisplayName: string;
	cloudPcNamingTemplate: string;
	description: string;
	displayName: string;
	domainJoinConfigurations: ComplexTypes.cloudPcDomainJoinConfiguration[];
	enableSingleSignOn: boolean;
	gracePeriodInHours: number;
	imageDisplayName: string;
	imageId: string;
	imageType: EnumTypes.cloudPcProvisioningPolicyImageType;
	localAdminEnabled: boolean;
	microsoftManagedDesktop: ComplexTypes.microsoftManagedDesktop;
	provisioningType: EnumTypes.cloudPcProvisioningType;
	windowsSetting: ComplexTypes.cloudPcWindowsSetting;
}
export interface cloudPcProvisioningPolicyMethods {
	assignments(): IBaseQuery<cloudPcProvisioningPolicyAssignment[]>;
	assignments(id: string | number): IBaseQuery<cloudPcProvisioningPolicyAssignment>;
}
/*********************************************
* cloudPcProvisioningPolicyAssignment
**********************************************/
export interface cloudPcProvisioningPolicyAssignment extends cloudPcProvisioningPolicyAssignmentProps, cloudPcProvisioningPolicyAssignmentMethods , entity { }
export interface cloudPcProvisioningPolicyAssignmentProps {
	target: ComplexTypes.cloudPcManagementAssignmentTarget;
}
export interface cloudPcProvisioningPolicyAssignmentMethods {
	assignedUsers(): IBaseQuery<user[]>;
	assignedUsers(id: string | number): IBaseQuery<user>;
}
/*********************************************
* cloudPcUserSetting
**********************************************/
export interface cloudPcUserSetting extends cloudPcUserSettingProps, cloudPcUserSettingMethods , entity { }
export interface cloudPcUserSettingProps {
	createdDateTime: any;
	displayName: string;
	lastModifiedDateTime: any;
	localAdminEnabled: boolean;
	resetEnabled: boolean;
	restorePointSetting: ComplexTypes.cloudPcRestorePointSetting;
}
export interface cloudPcUserSettingMethods {
	assignments(): IBaseQuery<cloudPcUserSettingAssignment[]>;
	assignments(id: string | number): IBaseQuery<cloudPcUserSettingAssignment>;
}
/*********************************************
* cloudPcUserSettingAssignment
**********************************************/
export interface cloudPcUserSettingAssignment extends cloudPcUserSettingAssignmentProps, cloudPcUserSettingAssignmentMethods , entity { }
export interface cloudPcUserSettingAssignmentProps {
	createdDateTime: any;
	target: ComplexTypes.cloudPcManagementAssignmentTarget;
}
export interface cloudPcUserSettingAssignmentMethods {

}
/*********************************************
* deviceManagement
**********************************************/
export interface deviceManagement extends deviceManagementProps, deviceManagementMethods , entity { }
export interface deviceManagementProps {
	intuneAccountId: any;
	settings: ComplexTypes.deviceManagementSettings;
	intuneBrand: ComplexTypes.intuneBrand;
	deviceProtectionOverview: ComplexTypes.deviceProtectionOverview;
	subscriptionState: EnumTypes.deviceManagementSubscriptionState;
	userExperienceAnalyticsSettings: ComplexTypes.userExperienceAnalyticsSettings;
	windowsMalwareOverview: ComplexTypes.windowsMalwareOverview;
}
export interface deviceManagementMethods {
	auditEvents(): IBaseQuery<auditEvent[]>;
	auditEvents(id: string | number): IBaseQuery<auditEvent>;
	virtualEndpoint(): IBaseQuery<virtualEndpoint>;
	termsAndConditions(): IBaseQuery<termsAndConditions[]>;
	termsAndConditions(id: string | number): IBaseQuery<termsAndConditions>;
	deviceCompliancePolicies(): IBaseQuery<deviceCompliancePolicy[]>;
	deviceCompliancePolicies(id: string | number): IBaseQuery<deviceCompliancePolicy>;
	deviceCompliancePolicyDeviceStateSummary(): IBaseQuery<deviceCompliancePolicyDeviceStateSummary>;
	deviceCompliancePolicySettingStateSummaries(): IBaseQuery<deviceCompliancePolicySettingStateSummary[]>;
	deviceCompliancePolicySettingStateSummaries(id: string | number): IBaseQuery<deviceCompliancePolicySettingStateSummary>;
	deviceConfigurationDeviceStateSummaries(): IBaseQuery<deviceConfigurationDeviceStateSummary>;
	deviceConfigurations(): IBaseQuery<deviceConfiguration[]>;
	deviceConfigurations(id: string | number): IBaseQuery<deviceConfiguration>;
	iosUpdateStatuses(): IBaseQuery<iosUpdateDeviceStatus[]>;
	iosUpdateStatuses(id: string | number): IBaseQuery<iosUpdateDeviceStatus>;
	softwareUpdateStatusSummary(): IBaseQuery<softwareUpdateStatusSummary>;
	complianceManagementPartners(): IBaseQuery<complianceManagementPartner[]>;
	complianceManagementPartners(id: string | number): IBaseQuery<complianceManagementPartner>;
	conditionalAccessSettings(): IBaseQuery<onPremisesConditionalAccessSettings>;
	deviceCategories(): IBaseQuery<deviceCategory[]>;
	deviceCategories(id: string | number): IBaseQuery<deviceCategory>;
	deviceEnrollmentConfigurations(): IBaseQuery<deviceEnrollmentConfiguration[]>;
	deviceEnrollmentConfigurations(id: string | number): IBaseQuery<deviceEnrollmentConfiguration>;
	deviceManagementPartners(): IBaseQuery<deviceManagementPartner[]>;
	deviceManagementPartners(id: string | number): IBaseQuery<deviceManagementPartner>;
	exchangeConnectors(): IBaseQuery<deviceManagementExchangeConnector[]>;
	exchangeConnectors(id: string | number): IBaseQuery<deviceManagementExchangeConnector>;
	mobileThreatDefenseConnectors(): IBaseQuery<mobileThreatDefenseConnector[]>;
	mobileThreatDefenseConnectors(id: string | number): IBaseQuery<mobileThreatDefenseConnector>;
	applePushNotificationCertificate(): IBaseQuery<applePushNotificationCertificate>;
	detectedApps(): IBaseQuery<detectedApp[]>;
	detectedApps(id: string | number): IBaseQuery<detectedApp>;
	managedDeviceOverview(): IBaseQuery<managedDeviceOverview>;
	managedDevices(): IBaseQuery<managedDevice[]>;
	managedDevices(id: string | number): IBaseQuery<managedDevice>;
	mobileAppTroubleshootingEvents(): IBaseQuery<mobileAppTroubleshootingEvent[]>;
	mobileAppTroubleshootingEvents(id: string | number): IBaseQuery<mobileAppTroubleshootingEvent>;
	userExperienceAnalyticsAppHealthApplicationPerformance(): IBaseQuery<userExperienceAnalyticsAppHealthApplicationPerformance[]>;
	userExperienceAnalyticsAppHealthApplicationPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthApplicationPerformance>;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails(): IBaseQuery<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails[]>;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails>;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId(): IBaseQuery<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId[]>;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId>;
	userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion(): IBaseQuery<userExperienceAnalyticsAppHealthAppPerformanceByOSVersion[]>;
	userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthAppPerformanceByOSVersion>;
	userExperienceAnalyticsAppHealthDeviceModelPerformance(): IBaseQuery<userExperienceAnalyticsAppHealthDeviceModelPerformance[]>;
	userExperienceAnalyticsAppHealthDeviceModelPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthDeviceModelPerformance>;
	userExperienceAnalyticsAppHealthDevicePerformance(): IBaseQuery<userExperienceAnalyticsAppHealthDevicePerformance[]>;
	userExperienceAnalyticsAppHealthDevicePerformance(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthDevicePerformance>;
	userExperienceAnalyticsAppHealthDevicePerformanceDetails(): IBaseQuery<userExperienceAnalyticsAppHealthDevicePerformanceDetails[]>;
	userExperienceAnalyticsAppHealthDevicePerformanceDetails(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthDevicePerformanceDetails>;
	userExperienceAnalyticsAppHealthOSVersionPerformance(): IBaseQuery<userExperienceAnalyticsAppHealthOSVersionPerformance[]>;
	userExperienceAnalyticsAppHealthOSVersionPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthOSVersionPerformance>;
	userExperienceAnalyticsAppHealthOverview(): IBaseQuery<userExperienceAnalyticsCategory>;
	userExperienceAnalyticsBaselines(): IBaseQuery<userExperienceAnalyticsBaseline[]>;
	userExperienceAnalyticsBaselines(id: string | number): IBaseQuery<userExperienceAnalyticsBaseline>;
	userExperienceAnalyticsCategories(): IBaseQuery<userExperienceAnalyticsCategory[]>;
	userExperienceAnalyticsCategories(id: string | number): IBaseQuery<userExperienceAnalyticsCategory>;
	userExperienceAnalyticsDevicePerformance(): IBaseQuery<userExperienceAnalyticsDevicePerformance[]>;
	userExperienceAnalyticsDevicePerformance(id: string | number): IBaseQuery<userExperienceAnalyticsDevicePerformance>;
	userExperienceAnalyticsDeviceScores(): IBaseQuery<userExperienceAnalyticsDeviceScores[]>;
	userExperienceAnalyticsDeviceScores(id: string | number): IBaseQuery<userExperienceAnalyticsDeviceScores>;
	userExperienceAnalyticsDeviceStartupHistory(): IBaseQuery<userExperienceAnalyticsDeviceStartupHistory[]>;
	userExperienceAnalyticsDeviceStartupHistory(id: string | number): IBaseQuery<userExperienceAnalyticsDeviceStartupHistory>;
	userExperienceAnalyticsDeviceStartupProcesses(): IBaseQuery<userExperienceAnalyticsDeviceStartupProcess[]>;
	userExperienceAnalyticsDeviceStartupProcesses(id: string | number): IBaseQuery<userExperienceAnalyticsDeviceStartupProcess>;
	userExperienceAnalyticsDeviceStartupProcessPerformance(): IBaseQuery<userExperienceAnalyticsDeviceStartupProcessPerformance[]>;
	userExperienceAnalyticsDeviceStartupProcessPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsDeviceStartupProcessPerformance>;
	userExperienceAnalyticsMetricHistory(): IBaseQuery<userExperienceAnalyticsMetricHistory[]>;
	userExperienceAnalyticsMetricHistory(id: string | number): IBaseQuery<userExperienceAnalyticsMetricHistory>;
	userExperienceAnalyticsModelScores(): IBaseQuery<userExperienceAnalyticsModelScores[]>;
	userExperienceAnalyticsModelScores(id: string | number): IBaseQuery<userExperienceAnalyticsModelScores>;
	userExperienceAnalyticsOverview(): IBaseQuery<userExperienceAnalyticsOverview>;
	userExperienceAnalyticsScoreHistory(): IBaseQuery<userExperienceAnalyticsScoreHistory[]>;
	userExperienceAnalyticsScoreHistory(id: string | number): IBaseQuery<userExperienceAnalyticsScoreHistory>;
	userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric(): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric>;
	userExperienceAnalyticsWorkFromAnywhereMetrics(): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereMetric[]>;
	userExperienceAnalyticsWorkFromAnywhereMetrics(id: string | number): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereMetric>;
	userExperienceAnalyticsWorkFromAnywhereModelPerformance(): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereModelPerformance[]>;
	userExperienceAnalyticsWorkFromAnywhereModelPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereModelPerformance>;
	windowsMalwareInformation(): IBaseQuery<windowsMalwareInformation[]>;
	windowsMalwareInformation(id: string | number): IBaseQuery<windowsMalwareInformation>;
	importedWindowsAutopilotDeviceIdentities(): IBaseQuery<importedWindowsAutopilotDeviceIdentity[]>;
	importedWindowsAutopilotDeviceIdentities(id: string | number): IBaseQuery<importedWindowsAutopilotDeviceIdentity>;
	windowsAutopilotDeviceIdentities(): IBaseQuery<windowsAutopilotDeviceIdentity[]>;
	windowsAutopilotDeviceIdentities(id: string | number): IBaseQuery<windowsAutopilotDeviceIdentity>;
	notificationMessageTemplates(): IBaseQuery<notificationMessageTemplate[]>;
	notificationMessageTemplates(id: string | number): IBaseQuery<notificationMessageTemplate>;
	resourceOperations(): IBaseQuery<resourceOperation[]>;
	resourceOperations(id: string | number): IBaseQuery<resourceOperation>;
	roleAssignments(): IBaseQuery<deviceAndAppManagementRoleAssignment[]>;
	roleAssignments(id: string | number): IBaseQuery<deviceAndAppManagementRoleAssignment>;
	roleDefinitions(): IBaseQuery<roleDefinition[]>;
	roleDefinitions(id: string | number): IBaseQuery<roleDefinition>;
	remoteAssistancePartners(): IBaseQuery<remoteAssistancePartner[]>;
	remoteAssistancePartners(id: string | number): IBaseQuery<remoteAssistancePartner>;
	reports(): IBaseQuery<deviceManagementReports>;
	telecomExpenseManagementPartners(): IBaseQuery<telecomExpenseManagementPartner[]>;
	telecomExpenseManagementPartners(id: string | number): IBaseQuery<telecomExpenseManagementPartner>;
	troubleshootingEvents(): IBaseQuery<deviceManagementTroubleshootingEvent[]>;
	troubleshootingEvents(id: string | number): IBaseQuery<deviceManagementTroubleshootingEvent>;
	windowsInformationProtectionAppLearningSummaries(): IBaseQuery<windowsInformationProtectionAppLearningSummary[]>;
	windowsInformationProtectionAppLearningSummaries(id: string | number): IBaseQuery<windowsInformationProtectionAppLearningSummary>;
	windowsInformationProtectionNetworkLearningSummaries(): IBaseQuery<windowsInformationProtectionNetworkLearningSummary[]>;
	windowsInformationProtectionNetworkLearningSummaries(id: string | number): IBaseQuery<windowsInformationProtectionNetworkLearningSummary>;
}
/*********************************************
* auditEvent
**********************************************/
export interface auditEvent extends auditEventProps, auditEventMethods , entity { }
export interface auditEventProps {
	activity: string;
	activityDateTime: any;
	activityOperationType: string;
	activityResult: string;
	activityType: string;
	actor: ComplexTypes.auditActor;
	category: string;
	componentName: string;
	correlationId: any;
	displayName: string;
	resources: ComplexTypes.auditResource[];
}
export interface auditEventMethods {

}
/*********************************************
* virtualEndpoint
**********************************************/
export interface virtualEndpoint extends virtualEndpointProps, virtualEndpointMethods , entity { }
export interface virtualEndpointProps {

}
export interface virtualEndpointMethods {
	auditEvents(): IBaseQuery<cloudPcAuditEvent[]>;
	auditEvents(id: string | number): IBaseQuery<cloudPcAuditEvent>;
	cloudPCs(): IBaseQuery<cloudPC[]>;
	cloudPCs(id: string | number): IBaseQuery<cloudPC>;
	deviceImages(): IBaseQuery<cloudPcDeviceImage[]>;
	deviceImages(id: string | number): IBaseQuery<cloudPcDeviceImage>;
	galleryImages(): IBaseQuery<cloudPcGalleryImage[]>;
	galleryImages(id: string | number): IBaseQuery<cloudPcGalleryImage>;
	onPremisesConnections(): IBaseQuery<cloudPcOnPremisesConnection[]>;
	onPremisesConnections(id: string | number): IBaseQuery<cloudPcOnPremisesConnection>;
	provisioningPolicies(): IBaseQuery<cloudPcProvisioningPolicy[]>;
	provisioningPolicies(id: string | number): IBaseQuery<cloudPcProvisioningPolicy>;
	userSettings(): IBaseQuery<cloudPcUserSetting[]>;
	userSettings(id: string | number): IBaseQuery<cloudPcUserSetting>;
}
/*********************************************
* termsAndConditions
**********************************************/
export interface termsAndConditions extends termsAndConditionsProps, termsAndConditionsMethods , entity { }
export interface termsAndConditionsProps {
	acceptanceStatement: string;
	bodyText: string;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	title: string;
	version: number;
}
export interface termsAndConditionsMethods {
	acceptanceStatuses(): IBaseQuery<termsAndConditionsAcceptanceStatus[]>;
	acceptanceStatuses(id: string | number): IBaseQuery<termsAndConditionsAcceptanceStatus>;
	assignments(): IBaseQuery<termsAndConditionsAssignment[]>;
	assignments(id: string | number): IBaseQuery<termsAndConditionsAssignment>;
}
/*********************************************
* deviceCompliancePolicy
**********************************************/
export interface deviceCompliancePolicy extends deviceCompliancePolicyProps, deviceCompliancePolicyMethods , entity { }
export interface deviceCompliancePolicyProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	version: number;
}
export interface deviceCompliancePolicyMethods {
	assignments(): IBaseQuery<deviceCompliancePolicyAssignment[]>;
	assignments(id: string | number): IBaseQuery<deviceCompliancePolicyAssignment>;
	deviceSettingStateSummaries(): IBaseQuery<settingStateDeviceSummary[]>;
	deviceSettingStateSummaries(id: string | number): IBaseQuery<settingStateDeviceSummary>;
	deviceStatuses(): IBaseQuery<deviceComplianceDeviceStatus[]>;
	deviceStatuses(id: string | number): IBaseQuery<deviceComplianceDeviceStatus>;
	deviceStatusOverview(): IBaseQuery<deviceComplianceDeviceOverview>;
	scheduledActionsForRule(): IBaseQuery<deviceComplianceScheduledActionForRule[]>;
	scheduledActionsForRule(id: string | number): IBaseQuery<deviceComplianceScheduledActionForRule>;
	userStatuses(): IBaseQuery<deviceComplianceUserStatus[]>;
	userStatuses(id: string | number): IBaseQuery<deviceComplianceUserStatus>;
	userStatusOverview(): IBaseQuery<deviceComplianceUserOverview>;
}
/*********************************************
* deviceCompliancePolicyDeviceStateSummary
**********************************************/
export interface deviceCompliancePolicyDeviceStateSummary extends deviceCompliancePolicyDeviceStateSummaryProps, deviceCompliancePolicyDeviceStateSummaryMethods , entity { }
export interface deviceCompliancePolicyDeviceStateSummaryProps {
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
export interface deviceCompliancePolicyDeviceStateSummaryMethods {

}
/*********************************************
* deviceCompliancePolicySettingStateSummary
**********************************************/
export interface deviceCompliancePolicySettingStateSummary extends deviceCompliancePolicySettingStateSummaryProps, deviceCompliancePolicySettingStateSummaryMethods , entity { }
export interface deviceCompliancePolicySettingStateSummaryProps {
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
}
export interface deviceCompliancePolicySettingStateSummaryMethods {
	deviceComplianceSettingStates(): IBaseQuery<deviceComplianceSettingState[]>;
	deviceComplianceSettingStates(id: string | number): IBaseQuery<deviceComplianceSettingState>;
}
/*********************************************
* deviceConfigurationDeviceStateSummary
**********************************************/
export interface deviceConfigurationDeviceStateSummary extends deviceConfigurationDeviceStateSummaryProps, deviceConfigurationDeviceStateSummaryMethods , entity { }
export interface deviceConfigurationDeviceStateSummaryProps {
	compliantDeviceCount: number;
	conflictDeviceCount: number;
	errorDeviceCount: number;
	nonCompliantDeviceCount: number;
	notApplicableDeviceCount: number;
	remediatedDeviceCount: number;
	unknownDeviceCount: number;
}
export interface deviceConfigurationDeviceStateSummaryMethods {

}
/*********************************************
* deviceConfiguration
**********************************************/
export interface deviceConfiguration extends deviceConfigurationProps, deviceConfigurationMethods , entity { }
export interface deviceConfigurationProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	version: number;
}
export interface deviceConfigurationMethods {
	assignments(): IBaseQuery<deviceConfigurationAssignment[]>;
	assignments(id: string | number): IBaseQuery<deviceConfigurationAssignment>;
	deviceSettingStateSummaries(): IBaseQuery<settingStateDeviceSummary[]>;
	deviceSettingStateSummaries(id: string | number): IBaseQuery<settingStateDeviceSummary>;
	deviceStatuses(): IBaseQuery<deviceConfigurationDeviceStatus[]>;
	deviceStatuses(id: string | number): IBaseQuery<deviceConfigurationDeviceStatus>;
	deviceStatusOverview(): IBaseQuery<deviceConfigurationDeviceOverview>;
	userStatuses(): IBaseQuery<deviceConfigurationUserStatus[]>;
	userStatuses(id: string | number): IBaseQuery<deviceConfigurationUserStatus>;
	userStatusOverview(): IBaseQuery<deviceConfigurationUserOverview>;
}
/*********************************************
* iosUpdateDeviceStatus
**********************************************/
export interface iosUpdateDeviceStatus extends iosUpdateDeviceStatusProps, iosUpdateDeviceStatusMethods , entity { }
export interface iosUpdateDeviceStatusProps {
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
export interface iosUpdateDeviceStatusMethods {

}
/*********************************************
* softwareUpdateStatusSummary
**********************************************/
export interface softwareUpdateStatusSummary extends softwareUpdateStatusSummaryProps, softwareUpdateStatusSummaryMethods , entity { }
export interface softwareUpdateStatusSummaryProps {
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
export interface softwareUpdateStatusSummaryMethods {

}
/*********************************************
* complianceManagementPartner
**********************************************/
export interface complianceManagementPartner extends complianceManagementPartnerProps, complianceManagementPartnerMethods , entity { }
export interface complianceManagementPartnerProps {
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
export interface complianceManagementPartnerMethods {

}
/*********************************************
* onPremisesConditionalAccessSettings
**********************************************/
export interface onPremisesConditionalAccessSettings extends onPremisesConditionalAccessSettingsProps, onPremisesConditionalAccessSettingsMethods , entity { }
export interface onPremisesConditionalAccessSettingsProps {
	enabled: boolean;
	excludedGroups: Array<any>[];
	includedGroups: Array<any>[];
	overrideDefaultRule: boolean;
}
export interface onPremisesConditionalAccessSettingsMethods {

}
/*********************************************
* deviceCategory
**********************************************/
export interface deviceCategory extends deviceCategoryProps, deviceCategoryMethods , entity { }
export interface deviceCategoryProps {
	description: string;
	displayName: string;
}
export interface deviceCategoryMethods {

}
/*********************************************
* deviceEnrollmentConfiguration
**********************************************/
export interface deviceEnrollmentConfiguration extends deviceEnrollmentConfigurationProps, deviceEnrollmentConfigurationMethods , entity { }
export interface deviceEnrollmentConfigurationProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	priority: number;
	version: number;
}
export interface deviceEnrollmentConfigurationMethods {
	assignments(): IBaseQuery<enrollmentConfigurationAssignment[]>;
	assignments(id: string | number): IBaseQuery<enrollmentConfigurationAssignment>;
}
/*********************************************
* deviceManagementPartner
**********************************************/
export interface deviceManagementPartner extends deviceManagementPartnerProps, deviceManagementPartnerMethods , entity { }
export interface deviceManagementPartnerProps {
	displayName: string;
	groupsRequiringPartnerEnrollment: ComplexTypes.deviceManagementPartnerAssignment[];
	isConfigured: boolean;
	lastHeartbeatDateTime: any;
	partnerAppType: EnumTypes.deviceManagementPartnerAppType;
	partnerState: EnumTypes.deviceManagementPartnerTenantState;
	singleTenantAppId: string;
	whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime: any;
	whenPartnerDevicesWillBeRemovedDateTime: any;
}
export interface deviceManagementPartnerMethods {

}
/*********************************************
* deviceManagementExchangeConnector
**********************************************/
export interface deviceManagementExchangeConnector extends deviceManagementExchangeConnectorProps, deviceManagementExchangeConnectorMethods , entity { }
export interface deviceManagementExchangeConnectorProps {
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
export interface deviceManagementExchangeConnectorMethods {

}
/*********************************************
* mobileThreatDefenseConnector
**********************************************/
export interface mobileThreatDefenseConnector extends mobileThreatDefenseConnectorProps, mobileThreatDefenseConnectorMethods , entity { }
export interface mobileThreatDefenseConnectorProps {
	allowPartnerToCollectIOSApplicationMetadata: boolean;
	allowPartnerToCollectIOSPersonalApplicationMetadata: boolean;
	androidDeviceBlockedOnMissingPartnerData: boolean;
	androidEnabled: boolean;
	androidMobileApplicationManagementEnabled: boolean;
	iosDeviceBlockedOnMissingPartnerData: boolean;
	iosEnabled: boolean;
	iosMobileApplicationManagementEnabled: boolean;
	lastHeartbeatDateTime: any;
	microsoftDefenderForEndpointAttachEnabled: boolean;
	partnerState: EnumTypes.mobileThreatPartnerTenantState;
	partnerUnresponsivenessThresholdInDays: number;
	partnerUnsupportedOsVersionBlocked: boolean;
	windowsDeviceBlockedOnMissingPartnerData: boolean;
	windowsEnabled: boolean;
}
export interface mobileThreatDefenseConnectorMethods {

}
/*********************************************
* applePushNotificationCertificate
**********************************************/
export interface applePushNotificationCertificate extends applePushNotificationCertificateProps, applePushNotificationCertificateMethods , entity { }
export interface applePushNotificationCertificateProps {
	appleIdentifier: string;
	certificate: string;
	certificateSerialNumber: string;
	certificateUploadFailureReason: string;
	certificateUploadStatus: string;
	expirationDateTime: any;
	lastModifiedDateTime: any;
	topicIdentifier: string;
}
export interface applePushNotificationCertificateMethods {

}
/*********************************************
* detectedApp
**********************************************/
export interface detectedApp extends detectedAppProps, detectedAppMethods , entity { }
export interface detectedAppProps {
	deviceCount: number;
	displayName: string;
	platform: EnumTypes.detectedAppPlatformType;
	publisher: string;
	sizeInByte: number;
	version: string;
}
export interface detectedAppMethods {
	managedDevices(): IBaseQuery<managedDevice[]>;
	managedDevices(id: string | number): IBaseQuery<managedDevice>;
}
/*********************************************
* managedDeviceOverview
**********************************************/
export interface managedDeviceOverview extends managedDeviceOverviewProps, managedDeviceOverviewMethods , entity { }
export interface managedDeviceOverviewProps {
	deviceExchangeAccessStateSummary: ComplexTypes.deviceExchangeAccessStateSummary;
	deviceOperatingSystemSummary: ComplexTypes.deviceOperatingSystemSummary;
	dualEnrolledDeviceCount: number;
	enrolledDeviceCount: number;
	mdmEnrolledCount: number;
}
export interface managedDeviceOverviewMethods {

}
/*********************************************
* mobileAppTroubleshootingEvent
**********************************************/
export interface mobileAppTroubleshootingEvent extends mobileAppTroubleshootingEventProps, mobileAppTroubleshootingEventMethods , entity { }
export interface mobileAppTroubleshootingEventProps {

}
export interface mobileAppTroubleshootingEventMethods {
	appLogCollectionRequests(): IBaseQuery<appLogCollectionRequest[]>;
	appLogCollectionRequests(id: string | number): IBaseQuery<appLogCollectionRequest>;
}
/*********************************************
* userExperienceAnalyticsAppHealthApplicationPerformance
**********************************************/
export interface userExperienceAnalyticsAppHealthApplicationPerformance extends userExperienceAnalyticsAppHealthApplicationPerformanceProps, userExperienceAnalyticsAppHealthApplicationPerformanceMethods , entity { }
export interface userExperienceAnalyticsAppHealthApplicationPerformanceProps {
	activeDeviceCount: number;
	appCrashCount: number;
	appDisplayName: string;
	appHangCount: number;
	appHealthScore: number;
	appName: string;
	appPublisher: string;
	appUsageDuration: number;
	meanTimeToFailureInMinutes: number;
}
export interface userExperienceAnalyticsAppHealthApplicationPerformanceMethods {

}
/*********************************************
* userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails
**********************************************/
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails extends userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsProps, userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsMethods , entity { }
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsProps {
	appCrashCount: number;
	appDisplayName: string;
	appName: string;
	appPublisher: string;
	appVersion: string;
	deviceCountWithCrashes: number;
	isLatestUsedVersion: boolean;
	isMostUsedVersion: boolean;
}
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsMethods {

}
/*********************************************
* userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId
**********************************************/
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId extends userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdProps, userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdMethods , entity { }
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdProps {
	appCrashCount: number;
	appDisplayName: string;
	appName: string;
	appPublisher: string;
	appVersion: string;
	deviceDisplayName: string;
	deviceId: string;
	processedDateTime: any;
}
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdMethods {

}
/*********************************************
* userExperienceAnalyticsAppHealthAppPerformanceByOSVersion
**********************************************/
export interface userExperienceAnalyticsAppHealthAppPerformanceByOSVersion extends userExperienceAnalyticsAppHealthAppPerformanceByOSVersionProps, userExperienceAnalyticsAppHealthAppPerformanceByOSVersionMethods , entity { }
export interface userExperienceAnalyticsAppHealthAppPerformanceByOSVersionProps {
	activeDeviceCount: number;
	appCrashCount: number;
	appDisplayName: string;
	appName: string;
	appPublisher: string;
	appUsageDuration: number;
	meanTimeToFailureInMinutes: number;
	osBuildNumber: string;
	osVersion: string;
}
export interface userExperienceAnalyticsAppHealthAppPerformanceByOSVersionMethods {

}
/*********************************************
* userExperienceAnalyticsAppHealthDeviceModelPerformance
**********************************************/
export interface userExperienceAnalyticsAppHealthDeviceModelPerformance extends userExperienceAnalyticsAppHealthDeviceModelPerformanceProps, userExperienceAnalyticsAppHealthDeviceModelPerformanceMethods , entity { }
export interface userExperienceAnalyticsAppHealthDeviceModelPerformanceProps {
	activeDeviceCount: number;
	deviceManufacturer: string;
	deviceModel: string;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	meanTimeToFailureInMinutes: number;
	modelAppHealthScore: number;
}
export interface userExperienceAnalyticsAppHealthDeviceModelPerformanceMethods {

}
/*********************************************
* userExperienceAnalyticsAppHealthDevicePerformance
**********************************************/
export interface userExperienceAnalyticsAppHealthDevicePerformance extends userExperienceAnalyticsAppHealthDevicePerformanceProps, userExperienceAnalyticsAppHealthDevicePerformanceMethods , entity { }
export interface userExperienceAnalyticsAppHealthDevicePerformanceProps {
	appCrashCount: number;
	appHangCount: number;
	crashedAppCount: number;
	deviceAppHealthScore: number;
	deviceDisplayName: string;
	deviceId: string;
	deviceManufacturer: string;
	deviceModel: string;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	meanTimeToFailureInMinutes: number;
	processedDateTime: any;
}
export interface userExperienceAnalyticsAppHealthDevicePerformanceMethods {

}
/*********************************************
* userExperienceAnalyticsAppHealthDevicePerformanceDetails
**********************************************/
export interface userExperienceAnalyticsAppHealthDevicePerformanceDetails extends userExperienceAnalyticsAppHealthDevicePerformanceDetailsProps, userExperienceAnalyticsAppHealthDevicePerformanceDetailsMethods , entity { }
export interface userExperienceAnalyticsAppHealthDevicePerformanceDetailsProps {
	appDisplayName: string;
	appPublisher: string;
	appVersion: string;
	deviceDisplayName: string;
	deviceId: string;
	eventDateTime: any;
	eventType: string;
}
export interface userExperienceAnalyticsAppHealthDevicePerformanceDetailsMethods {

}
/*********************************************
* userExperienceAnalyticsAppHealthOSVersionPerformance
**********************************************/
export interface userExperienceAnalyticsAppHealthOSVersionPerformance extends userExperienceAnalyticsAppHealthOSVersionPerformanceProps, userExperienceAnalyticsAppHealthOSVersionPerformanceMethods , entity { }
export interface userExperienceAnalyticsAppHealthOSVersionPerformanceProps {
	activeDeviceCount: number;
	meanTimeToFailureInMinutes: number;
	osBuildNumber: string;
	osVersion: string;
	osVersionAppHealthScore: number;
}
export interface userExperienceAnalyticsAppHealthOSVersionPerformanceMethods {

}
/*********************************************
* userExperienceAnalyticsCategory
**********************************************/
export interface userExperienceAnalyticsCategory extends userExperienceAnalyticsCategoryProps, userExperienceAnalyticsCategoryMethods , entity { }
export interface userExperienceAnalyticsCategoryProps {
	insights: ComplexTypes.userExperienceAnalyticsInsight[];
}
export interface userExperienceAnalyticsCategoryMethods {
	metricValues(): IBaseQuery<userExperienceAnalyticsMetric[]>;
	metricValues(id: string | number): IBaseQuery<userExperienceAnalyticsMetric>;
}
/*********************************************
* userExperienceAnalyticsBaseline
**********************************************/
export interface userExperienceAnalyticsBaseline extends userExperienceAnalyticsBaselineProps, userExperienceAnalyticsBaselineMethods , entity { }
export interface userExperienceAnalyticsBaselineProps {
	createdDateTime: any;
	displayName: string;
	isBuiltIn: boolean;
}
export interface userExperienceAnalyticsBaselineMethods {
	appHealthMetrics(): IBaseQuery<userExperienceAnalyticsCategory>;
	batteryHealthMetrics(): IBaseQuery<userExperienceAnalyticsCategory>;
	bestPracticesMetrics(): IBaseQuery<userExperienceAnalyticsCategory>;
	deviceBootPerformanceMetrics(): IBaseQuery<userExperienceAnalyticsCategory>;
	rebootAnalyticsMetrics(): IBaseQuery<userExperienceAnalyticsCategory>;
	resourcePerformanceMetrics(): IBaseQuery<userExperienceAnalyticsCategory>;
	workFromAnywhereMetrics(): IBaseQuery<userExperienceAnalyticsCategory>;
}
/*********************************************
* userExperienceAnalyticsDevicePerformance
**********************************************/
export interface userExperienceAnalyticsDevicePerformance extends userExperienceAnalyticsDevicePerformanceProps, userExperienceAnalyticsDevicePerformanceMethods , entity { }
export interface userExperienceAnalyticsDevicePerformanceProps {
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
export interface userExperienceAnalyticsDevicePerformanceMethods {

}
/*********************************************
* userExperienceAnalyticsDeviceScores
**********************************************/
export interface userExperienceAnalyticsDeviceScores extends userExperienceAnalyticsDeviceScoresProps, userExperienceAnalyticsDeviceScoresMethods , entity { }
export interface userExperienceAnalyticsDeviceScoresProps {
	appReliabilityScore: number;
	batteryHealthScore: number;
	deviceName: string;
	endpointAnalyticsScore: number;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	manufacturer: string;
	model: string;
	startupPerformanceScore: number;
	workFromAnywhereScore: number;
}
export interface userExperienceAnalyticsDeviceScoresMethods {

}
/*********************************************
* userExperienceAnalyticsDeviceStartupHistory
**********************************************/
export interface userExperienceAnalyticsDeviceStartupHistory extends userExperienceAnalyticsDeviceStartupHistoryProps, userExperienceAnalyticsDeviceStartupHistoryMethods , entity { }
export interface userExperienceAnalyticsDeviceStartupHistoryProps {
	coreBootTimeInMs: number;
	coreLoginTimeInMs: number;
	deviceId: string;
	featureUpdateBootTimeInMs: number;
	groupPolicyBootTimeInMs: number;
	groupPolicyLoginTimeInMs: number;
	isFeatureUpdate: boolean;
	isFirstLogin: boolean;
	operatingSystemVersion: string;
	responsiveDesktopTimeInMs: number;
	restartCategory: EnumTypes.userExperienceAnalyticsOperatingSystemRestartCategory;
	restartFaultBucket: string;
	restartStopCode: string;
	startTime: any;
	totalBootTimeInMs: number;
	totalLoginTimeInMs: number;
}
export interface userExperienceAnalyticsDeviceStartupHistoryMethods {

}
/*********************************************
* userExperienceAnalyticsDeviceStartupProcess
**********************************************/
export interface userExperienceAnalyticsDeviceStartupProcess extends userExperienceAnalyticsDeviceStartupProcessProps, userExperienceAnalyticsDeviceStartupProcessMethods , entity { }
export interface userExperienceAnalyticsDeviceStartupProcessProps {
	managedDeviceId: string;
	processName: string;
	productName: string;
	publisher: string;
	startupImpactInMs: number;
}
export interface userExperienceAnalyticsDeviceStartupProcessMethods {

}
/*********************************************
* userExperienceAnalyticsDeviceStartupProcessPerformance
**********************************************/
export interface userExperienceAnalyticsDeviceStartupProcessPerformance extends userExperienceAnalyticsDeviceStartupProcessPerformanceProps, userExperienceAnalyticsDeviceStartupProcessPerformanceMethods , entity { }
export interface userExperienceAnalyticsDeviceStartupProcessPerformanceProps {
	deviceCount: number;
	medianImpactInMs: number;
	processName: string;
	productName: string;
	publisher: string;
	totalImpactInMs: number;
}
export interface userExperienceAnalyticsDeviceStartupProcessPerformanceMethods {

}
/*********************************************
* userExperienceAnalyticsMetricHistory
**********************************************/
export interface userExperienceAnalyticsMetricHistory extends userExperienceAnalyticsMetricHistoryProps, userExperienceAnalyticsMetricHistoryMethods , entity { }
export interface userExperienceAnalyticsMetricHistoryProps {
	deviceId: string;
	metricDateTime: any;
	metricType: string;
}
export interface userExperienceAnalyticsMetricHistoryMethods {

}
/*********************************************
* userExperienceAnalyticsModelScores
**********************************************/
export interface userExperienceAnalyticsModelScores extends userExperienceAnalyticsModelScoresProps, userExperienceAnalyticsModelScoresMethods , entity { }
export interface userExperienceAnalyticsModelScoresProps {
	appReliabilityScore: number;
	batteryHealthScore: number;
	endpointAnalyticsScore: number;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	manufacturer: string;
	model: string;
	modelDeviceCount: number;
	startupPerformanceScore: number;
	workFromAnywhereScore: number;
}
export interface userExperienceAnalyticsModelScoresMethods {

}
/*********************************************
* userExperienceAnalyticsOverview
**********************************************/
export interface userExperienceAnalyticsOverview extends userExperienceAnalyticsOverviewProps, userExperienceAnalyticsOverviewMethods , entity { }
export interface userExperienceAnalyticsOverviewProps {
	insights: ComplexTypes.userExperienceAnalyticsInsight[];
}
export interface userExperienceAnalyticsOverviewMethods {

}
/*********************************************
* userExperienceAnalyticsScoreHistory
**********************************************/
export interface userExperienceAnalyticsScoreHistory extends userExperienceAnalyticsScoreHistoryProps, userExperienceAnalyticsScoreHistoryMethods , entity { }
export interface userExperienceAnalyticsScoreHistoryProps {
	startupDateTime: any;
}
export interface userExperienceAnalyticsScoreHistoryMethods {

}
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric extends userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricProps, userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricMethods , entity { }
export interface userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricProps {
	osCheckFailedPercentage: number;
	processor64BitCheckFailedPercentage: number;
	processorCoreCountCheckFailedPercentage: number;
	processorFamilyCheckFailedPercentage: number;
	processorSpeedCheckFailedPercentage: number;
	ramCheckFailedPercentage: number;
	secureBootCheckFailedPercentage: number;
	storageCheckFailedPercentage: number;
	totalDeviceCount: number;
	tpmCheckFailedPercentage: number;
	upgradeEligibleDeviceCount: number;
}
export interface userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricMethods {

}
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereMetric
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereMetric extends userExperienceAnalyticsWorkFromAnywhereMetricProps, userExperienceAnalyticsWorkFromAnywhereMetricMethods , entity { }
export interface userExperienceAnalyticsWorkFromAnywhereMetricProps {

}
export interface userExperienceAnalyticsWorkFromAnywhereMetricMethods {
	metricDevices(): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereDevice[]>;
	metricDevices(id: string | number): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereDevice>;
}
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereModelPerformance
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereModelPerformance extends userExperienceAnalyticsWorkFromAnywhereModelPerformanceProps, userExperienceAnalyticsWorkFromAnywhereModelPerformanceMethods , entity { }
export interface userExperienceAnalyticsWorkFromAnywhereModelPerformanceProps {
	cloudIdentityScore: number;
	cloudManagementScore: number;
	cloudProvisioningScore: number;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	manufacturer: string;
	model: string;
	modelDeviceCount: number;
	windowsScore: number;
	workFromAnywhereScore: number;
}
export interface userExperienceAnalyticsWorkFromAnywhereModelPerformanceMethods {

}
/*********************************************
* windowsMalwareInformation
**********************************************/
export interface windowsMalwareInformation extends windowsMalwareInformationProps, windowsMalwareInformationMethods , entity { }
export interface windowsMalwareInformationProps {
	additionalInformationUrl: string;
	category: EnumTypes.windowsMalwareCategory;
	displayName: string;
	lastDetectionDateTime: any;
	severity: EnumTypes.windowsMalwareSeverity;
}
export interface windowsMalwareInformationMethods {
	deviceMalwareStates(): IBaseQuery<malwareStateForWindowsDevice[]>;
	deviceMalwareStates(id: string | number): IBaseQuery<malwareStateForWindowsDevice>;
}
/*********************************************
* importedWindowsAutopilotDeviceIdentity
**********************************************/
export interface importedWindowsAutopilotDeviceIdentity extends importedWindowsAutopilotDeviceIdentityProps, importedWindowsAutopilotDeviceIdentityMethods , entity { }
export interface importedWindowsAutopilotDeviceIdentityProps {
	assignedUserPrincipalName: string;
	groupTag: string;
	hardwareIdentifier: any;
	importId: string;
	productKey: string;
	serialNumber: string;
	state: ComplexTypes.importedWindowsAutopilotDeviceIdentityState;
}
export interface importedWindowsAutopilotDeviceIdentityMethods {

}
/*********************************************
* windowsAutopilotDeviceIdentity
**********************************************/
export interface windowsAutopilotDeviceIdentity extends windowsAutopilotDeviceIdentityProps, windowsAutopilotDeviceIdentityMethods , entity { }
export interface windowsAutopilotDeviceIdentityProps {
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
export interface windowsAutopilotDeviceIdentityMethods {

}
/*********************************************
* notificationMessageTemplate
**********************************************/
export interface notificationMessageTemplate extends notificationMessageTemplateProps, notificationMessageTemplateMethods , entity { }
export interface notificationMessageTemplateProps {
	brandingOptions: EnumTypes.notificationTemplateBrandingOptions;
	defaultLocale: string;
	displayName: string;
	lastModifiedDateTime: any;
	roleScopeTagIds: Array<string>[];
}
export interface notificationMessageTemplateMethods {
	localizedNotificationMessages(): IBaseQuery<localizedNotificationMessage[]>;
	localizedNotificationMessages(id: string | number): IBaseQuery<localizedNotificationMessage>;
}
/*********************************************
* resourceOperation
**********************************************/
export interface resourceOperation extends resourceOperationProps, resourceOperationMethods , entity { }
export interface resourceOperationProps {
	actionName: string;
	description: string;
	resourceName: string;
}
export interface resourceOperationMethods {

}
/*********************************************
* roleAssignment
**********************************************/
export interface roleAssignment extends roleAssignmentProps, roleAssignmentMethods , entity { }
export interface roleAssignmentProps {
	description: string;
	displayName: string;
	resourceScopes: Array<string>[];
}
export interface roleAssignmentMethods {
	roleDefinition(): IBaseQuery<roleDefinition>;
}
/*********************************************
* deviceAndAppManagementRoleAssignment
**********************************************/
export interface deviceAndAppManagementRoleAssignment extends deviceAndAppManagementRoleAssignmentProps, deviceAndAppManagementRoleAssignmentMethods , roleAssignment { }
export interface deviceAndAppManagementRoleAssignmentProps {
	members: Array<string>[];
}
export interface deviceAndAppManagementRoleAssignmentMethods {

}
/*********************************************
* roleDefinition
**********************************************/
export interface roleDefinition extends roleDefinitionProps, roleDefinitionMethods , entity { }
export interface roleDefinitionProps {
	description: string;
	displayName: string;
	isBuiltIn: boolean;
	rolePermissions: ComplexTypes.rolePermission[];
}
export interface roleDefinitionMethods {
	roleAssignments(): IBaseQuery<roleAssignment[]>;
	roleAssignments(id: string | number): IBaseQuery<roleAssignment>;
}
/*********************************************
* remoteAssistancePartner
**********************************************/
export interface remoteAssistancePartner extends remoteAssistancePartnerProps, remoteAssistancePartnerMethods , entity { }
export interface remoteAssistancePartnerProps {
	displayName: string;
	lastConnectionDateTime: any;
	onboardingStatus: EnumTypes.remoteAssistanceOnboardingStatus;
	onboardingUrl: string;
}
export interface remoteAssistancePartnerMethods {

}
/*********************************************
* deviceManagementReports
**********************************************/
export interface deviceManagementReports extends deviceManagementReportsProps, deviceManagementReportsMethods , entity { }
export interface deviceManagementReportsProps {

}
export interface deviceManagementReportsMethods {
	exportJobs(): IBaseQuery<deviceManagementExportJob[]>;
	exportJobs(id: string | number): IBaseQuery<deviceManagementExportJob>;
}
/*********************************************
* telecomExpenseManagementPartner
**********************************************/
export interface telecomExpenseManagementPartner extends telecomExpenseManagementPartnerProps, telecomExpenseManagementPartnerMethods , entity { }
export interface telecomExpenseManagementPartnerProps {
	appAuthorized: boolean;
	displayName: string;
	enabled: boolean;
	lastConnectionDateTime: any;
	url: string;
}
export interface telecomExpenseManagementPartnerMethods {

}
/*********************************************
* windowsInformationProtectionAppLearningSummary
**********************************************/
export interface windowsInformationProtectionAppLearningSummary extends windowsInformationProtectionAppLearningSummaryProps, windowsInformationProtectionAppLearningSummaryMethods , entity { }
export interface windowsInformationProtectionAppLearningSummaryProps {
	applicationName: string;
	applicationType: EnumTypes.applicationType;
	deviceCount: number;
}
export interface windowsInformationProtectionAppLearningSummaryMethods {

}
/*********************************************
* windowsInformationProtectionNetworkLearningSummary
**********************************************/
export interface windowsInformationProtectionNetworkLearningSummary extends windowsInformationProtectionNetworkLearningSummaryProps, windowsInformationProtectionNetworkLearningSummaryMethods , entity { }
export interface windowsInformationProtectionNetworkLearningSummaryProps {
	deviceCount: number;
	url: string;
}
export interface windowsInformationProtectionNetworkLearningSummaryMethods {

}
/*********************************************
* authoredNote
**********************************************/
export interface authoredNote extends authoredNoteProps, authoredNoteMethods , entity { }
export interface authoredNoteProps {
	author: ComplexTypes.identity;
	content: ComplexTypes.itemBody;
	createdDateTime: any;
}
export interface authoredNoteMethods {

}
/*********************************************
* privacy
**********************************************/
export interface privacy extends privacyProps, privacyMethods  { }
export interface privacyProps {

}
export interface privacyMethods {
	subjectRightsRequests(): IBaseQuery<subjectRightsRequest[]>;
	subjectRightsRequests(id: string | number): IBaseQuery<subjectRightsRequest>;
}
/*********************************************
* subjectRightsRequest
**********************************************/
export interface subjectRightsRequest extends subjectRightsRequestProps, subjectRightsRequestMethods , entity { }
export interface subjectRightsRequestProps {
	assignedTo: ComplexTypes.identity;
	closedDateTime: any;
	contentQuery: string;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	dataSubject: ComplexTypes.dataSubject;
	dataSubjectType: EnumTypes.dataSubjectType;
	description: string;
	displayName: string;
	externalId: string;
	history: ComplexTypes.subjectRightsRequestHistory[];
	includeAllVersions: boolean;
	includeAuthoredContent: boolean;
	insight: ComplexTypes.subjectRightsRequestDetail;
	internalDueDateTime: any;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	mailboxLocations: ComplexTypes.subjectRightsRequestMailboxLocation;
	pauseAfterEstimate: boolean;
	regulations: Array<string>[];
	siteLocations: ComplexTypes.subjectRightsRequestSiteLocation;
	stages: ComplexTypes.subjectRightsRequestStageDetail[];
	status: EnumTypes.subjectRightsRequestStatus;
	type: EnumTypes.subjectRightsRequestType;
}
export interface subjectRightsRequestMethods {
	approvers(): IBaseQuery<user[]>;
	approvers(id: string | number): IBaseQuery<user>;
	collaborators(): IBaseQuery<user[]>;
	collaborators(id: string | number): IBaseQuery<user>;
	notes(): IBaseQuery<authoredNote[]>;
	notes(id: string | number): IBaseQuery<authoredNote>;
	team(): IBaseQuery<team>;
}
/*********************************************
* security
**********************************************/
export interface security extends securityProps, securityMethods  { }
export interface securityProps {

}
export interface securityMethods {
	subjectRightsRequests(): IBaseQuery<subjectRightsRequest[]>;
	subjectRightsRequests(id: string | number): IBaseQuery<subjectRightsRequest>;
	cases(): IBaseQuery<casesRoot>;
	identities(): IBaseQuery<identityContainer>;
	alerts_v2(): IBaseQuery<alert[]>;
	alerts_v2(id: string | number): IBaseQuery<alert>;
	incidents(): IBaseQuery<incident[]>;
	incidents(id: string | number): IBaseQuery<incident>;
	attackSimulation(): IBaseQuery<attackSimulationRoot>;
	labels(): IBaseQuery<labelsRoot>;
	triggers(): IBaseQuery<triggersRoot>;
	triggerTypes(): IBaseQuery<triggerTypesRoot>;
	alerts(): IBaseQuery<alert[]>;
	alerts(id: string | number): IBaseQuery<alert>;
	secureScoreControlProfiles(): IBaseQuery<secureScoreControlProfile[]>;
	secureScoreControlProfiles(id: string | number): IBaseQuery<secureScoreControlProfile>;
	secureScores(): IBaseQuery<secureScore[]>;
	secureScores(id: string | number): IBaseQuery<secureScore>;
	threatIntelligence(): IBaseQuery<threatIntelligence>;
}
/*********************************************
* attackSimulationRoot
**********************************************/
export interface attackSimulationRoot extends attackSimulationRootProps, attackSimulationRootMethods , entity { }
export interface attackSimulationRootProps {

}
export interface attackSimulationRootMethods {
	endUserNotifications(): IBaseQuery<endUserNotification[]>;
	endUserNotifications(id: string | number): IBaseQuery<endUserNotification>;
	landingPages(): IBaseQuery<landingPage[]>;
	landingPages(id: string | number): IBaseQuery<landingPage>;
	loginPages(): IBaseQuery<loginPage[]>;
	loginPages(id: string | number): IBaseQuery<loginPage>;
	operations(): IBaseQuery<attackSimulationOperation[]>;
	operations(id: string | number): IBaseQuery<attackSimulationOperation>;
	payloads(): IBaseQuery<payload[]>;
	payloads(id: string | number): IBaseQuery<payload>;
	simulationAutomations(): IBaseQuery<simulationAutomation[]>;
	simulationAutomations(id: string | number): IBaseQuery<simulationAutomation>;
	simulations(): IBaseQuery<simulation[]>;
	simulations(id: string | number): IBaseQuery<simulation>;
	trainings(): IBaseQuery<training[]>;
	trainings(id: string | number): IBaseQuery<training>;
}
/*********************************************
* alert
**********************************************/
export interface alert extends alertProps, alertMethods , entity { }
export interface alertProps {
	actorDisplayName: string;
	additionalData: ComplexTypes.dictionary;
	alertPolicyId: string;
	alertWebUrl: string;
	assignedTo: string;
	category: string;
	classification: EnumTypes.alertClassification;
	comments: ComplexTypes.alertComment[];
	createdDateTime: any;
	description: string;
	detectionSource: EnumTypes.detectionSource;
	detectorId: string;
	determination: EnumTypes.alertDetermination;
	evidence: ComplexTypes.alertEvidence[];
	firstActivityDateTime: any;
	incidentId: string;
	incidentWebUrl: string;
	lastActivityDateTime: any;
	lastUpdateDateTime: any;
	mitreTechniques: Array<string>[];
	productName: string;
	providerAlertId: string;
	recommendedActions: string;
	resolvedDateTime: any;
	serviceSource: EnumTypes.serviceSource;
	severity: EnumTypes.alertSeverity;
	status: EnumTypes.alertStatus;
	systemTags: Array<string>[];
	tenantId: string;
	threatDisplayName: string;
	threatFamilyName: string;
	title: string;
}
export interface alertMethods {

}
/*********************************************
* secureScoreControlProfile
**********************************************/
export interface secureScoreControlProfile extends secureScoreControlProfileProps, secureScoreControlProfileMethods , entity { }
export interface secureScoreControlProfileProps {
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
export interface secureScoreControlProfileMethods {

}
/*********************************************
* secureScore
**********************************************/
export interface secureScore extends secureScoreProps, secureScoreMethods , entity { }
export interface secureScoreProps {
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
export interface secureScoreMethods {

}
/*********************************************
* channel
**********************************************/
export interface channel extends channelProps, channelMethods , entity { }
export interface channelProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	email: string;
	isArchived: boolean;
	isFavoriteByDefault: boolean;
	membershipType: EnumTypes.channelMembershipType;
	summary: ComplexTypes.channelSummary;
	tenantId: string;
	webUrl: string;
}
export interface channelMethods {
	filesFolder(): IBaseQuery<driveItem>;
	members(): IBaseQuery<conversationMember[]>;
	members(id: string | number): IBaseQuery<conversationMember>;
	messages(): IBaseQuery<chatMessage[]>;
	messages(id: string | number): IBaseQuery<chatMessage>;
	sharedWithTeams(): IBaseQuery<sharedWithChannelTeamInfo[]>;
	sharedWithTeams(id: string | number): IBaseQuery<sharedWithChannelTeamInfo>;
	tabs(): IBaseQuery<teamsTab[]>;
	tabs(id: string | number): IBaseQuery<teamsTab>;
}
/*********************************************
* teamsAppInstallation
**********************************************/
export interface teamsAppInstallation extends teamsAppInstallationProps, teamsAppInstallationMethods , entity { }
export interface teamsAppInstallationProps {
	consentedPermissionSet: ComplexTypes.teamsAppPermissionSet;
}
export interface teamsAppInstallationMethods {
	teamsApp(): IBaseQuery<teamsApp>;
	teamsAppDefinition(): IBaseQuery<teamsAppDefinition>;
}
/*********************************************
* conversationMember
**********************************************/
export interface conversationMember extends conversationMemberProps, conversationMemberMethods , entity { }
export interface conversationMemberProps {
	displayName: string;
	roles: Array<string>[];
	visibleHistoryStartDateTime: any;
}
export interface conversationMemberMethods {

}
/*********************************************
* teamsAsyncOperation
**********************************************/
export interface teamsAsyncOperation extends teamsAsyncOperationProps, teamsAsyncOperationMethods , entity { }
export interface teamsAsyncOperationProps {
	attemptsCount: number;
	createdDateTime: any;
	error: ComplexTypes.operationError;
	lastActionDateTime: any;
	operationType: EnumTypes.teamsAsyncOperationType;
	status: EnumTypes.teamsAsyncOperationStatus;
	targetResourceId: string;
	targetResourceLocation: string;
}
export interface teamsAsyncOperationMethods {

}
/*********************************************
* teamworkTag
**********************************************/
export interface teamworkTag extends teamworkTagProps, teamworkTagMethods , entity { }
export interface teamworkTagProps {
	description: string;
	displayName: string;
	memberCount: number;
	tagType: EnumTypes.teamworkTagType;
	teamId: string;
}
export interface teamworkTagMethods {
	members(): IBaseQuery<teamworkTagMember[]>;
	members(id: string | number): IBaseQuery<teamworkTagMember>;
}
/*********************************************
* teamsTemplate
**********************************************/
export interface teamsTemplate extends teamsTemplateProps, teamsTemplateMethods , entity { }
export interface teamsTemplateProps {

}
export interface teamsTemplateMethods {

}
/*********************************************
* schedule
**********************************************/
export interface schedule extends scheduleProps, scheduleMethods , entity { }
export interface scheduleProps {
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
}
export interface scheduleMethods {
	offerShiftRequests(): IBaseQuery<offerShiftRequest[]>;
	offerShiftRequests(id: string | number): IBaseQuery<offerShiftRequest>;
	openShiftChangeRequests(): IBaseQuery<openShiftChangeRequest[]>;
	openShiftChangeRequests(id: string | number): IBaseQuery<openShiftChangeRequest>;
	openShifts(): IBaseQuery<openShift[]>;
	openShifts(id: string | number): IBaseQuery<openShift>;
	schedulingGroups(): IBaseQuery<schedulingGroup[]>;
	schedulingGroups(id: string | number): IBaseQuery<schedulingGroup>;
	shifts(): IBaseQuery<shift[]>;
	shifts(id: string | number): IBaseQuery<shift>;
	swapShiftsChangeRequests(): IBaseQuery<swapShiftsChangeRequest[]>;
	swapShiftsChangeRequests(id: string | number): IBaseQuery<swapShiftsChangeRequest>;
	timeOffReasons(): IBaseQuery<timeOffReason[]>;
	timeOffReasons(id: string | number): IBaseQuery<timeOffReason>;
	timeOffRequests(): IBaseQuery<timeOffRequest[]>;
	timeOffRequests(id: string | number): IBaseQuery<timeOffRequest>;
	timesOff(): IBaseQuery<timeOff[]>;
	timesOff(id: string | number): IBaseQuery<timeOff>;
}
/*********************************************
* compliance
**********************************************/
export interface compliance extends complianceProps, complianceMethods  { }
export interface complianceProps {

}
export interface complianceMethods {

}
/*********************************************
* itemAnalytics
**********************************************/
export interface itemAnalytics extends itemAnalyticsProps, itemAnalyticsMethods , entity { }
export interface itemAnalyticsProps {

}
export interface itemAnalyticsMethods {
	allTime(): IBaseQuery<itemActivityStat>;
	itemActivityStats(): IBaseQuery<itemActivityStat[]>;
	itemActivityStats(id: string | number): IBaseQuery<itemActivityStat>;
	lastSevenDays(): IBaseQuery<itemActivityStat>;
}
/*********************************************
* columnDefinition
**********************************************/
export interface columnDefinition extends columnDefinitionProps, columnDefinitionMethods , entity { }
export interface columnDefinitionProps {
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
}
export interface columnDefinitionMethods {
	sourceColumn(): IBaseQuery<columnDefinition>;
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* contentType
**********************************************/
export interface contentType extends contentTypeProps, contentTypeMethods , entity { }
export interface contentTypeProps {
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
}
export interface contentTypeMethods {
	base(): IBaseQuery<contentType>;
	baseTypes(): IBaseQuery<contentType[]>;
	baseTypes(id: string | number): IBaseQuery<contentType>;
	columnLinks(): IBaseQuery<columnLink[]>;
	columnLinks(id: string | number): IBaseQuery<columnLink>;
	columnPositions(): IBaseQuery<columnDefinition[]>;
	columnPositions(id: string | number): IBaseQuery<columnDefinition>;
	columns(): IBaseQuery<columnDefinition[]>;
	columns(id: string | number): IBaseQuery<columnDefinition>;
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* list
**********************************************/
export interface list extends listProps, listMethods , baseItem { }
export interface listProps {
	displayName: string;
	list: ComplexTypes.listInfo;
	sharepointIds: ComplexTypes.sharepointIds;
	system: ComplexTypes.systemFacet;
}
export interface listMethods {
	columns(): IBaseQuery<columnDefinition[]>;
	columns(id: string | number): IBaseQuery<columnDefinition>;
	contentTypes(): IBaseQuery<contentType[]>;
	contentTypes(id: string | number): IBaseQuery<contentType>;
	drive(): IBaseQuery<drive>;
	items(): IBaseQuery<listItem[]>;
	items(id: string | number): IBaseQuery<listItem>;
	operations(): IBaseQuery<richLongRunningOperation[]>;
	operations(id: string | number): IBaseQuery<richLongRunningOperation>;
	subscriptions(): IBaseQuery<subscription[]>;
	subscriptions(id: string | number): IBaseQuery<subscription>;
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* longRunningOperation
**********************************************/
export interface longRunningOperation extends longRunningOperationProps, longRunningOperationMethods , entity { }
export interface longRunningOperationProps {
	createdDateTime: any;
	lastActionDateTime: any;
	resourceLocation: string;
	status: EnumTypes.longRunningOperationStatus;
	statusDetail: string;
}
export interface longRunningOperationMethods {

}
/*********************************************
* richLongRunningOperation
**********************************************/
export interface richLongRunningOperation extends richLongRunningOperationProps, richLongRunningOperationMethods , longRunningOperation { }
export interface richLongRunningOperationProps {
	error: ComplexTypes.publicError;
	percentageComplete: number;
	resourceId: string;
	type: string;
}
export interface richLongRunningOperationMethods {

}
/*********************************************
* baseSitePage
**********************************************/
export interface baseSitePage extends baseSitePageProps, baseSitePageMethods , baseItem { }
export interface baseSitePageProps {
	pageLayout: EnumTypes.pageLayoutType;
	publishingState: ComplexTypes.publicationFacet;
	title: string;
}
export interface baseSitePageMethods {

}
/*********************************************
* permission
**********************************************/
export interface permission extends permissionProps, permissionMethods , entity { }
export interface permissionProps {
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
export interface permissionMethods {
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* authenticationConditionApplication
**********************************************/
export interface authenticationConditionApplication extends authenticationConditionApplicationProps, authenticationConditionApplicationMethods  { }
export interface authenticationConditionApplicationProps {
	appId: string;
}
export interface authenticationConditionApplicationMethods {

}
/*********************************************
* identityUserFlowAttribute
**********************************************/
export interface identityUserFlowAttribute extends identityUserFlowAttributeProps, identityUserFlowAttributeMethods , entity { }
export interface identityUserFlowAttributeProps {
	dataType: EnumTypes.identityUserFlowAttributeDataType;
	description: string;
	displayName: string;
	userFlowAttributeType: EnumTypes.identityUserFlowAttributeType;
}
export interface identityUserFlowAttributeMethods {

}
/*********************************************
* identityProviderBase
**********************************************/
export interface identityProviderBase extends identityProviderBaseProps, identityProviderBaseMethods , entity { }
export interface identityProviderBaseProps {
	displayName: string;
}
export interface identityProviderBaseMethods {

}
/*********************************************
* customAuthenticationExtension
**********************************************/
export interface customAuthenticationExtension extends customAuthenticationExtensionProps, customAuthenticationExtensionMethods , customCalloutExtension { }
export interface customAuthenticationExtensionProps {

}
export interface customAuthenticationExtensionMethods {

}
/*********************************************
* onTokenIssuanceStartCustomExtension
**********************************************/
export interface onTokenIssuanceStartCustomExtension extends onTokenIssuanceStartCustomExtensionProps, onTokenIssuanceStartCustomExtensionMethods , customAuthenticationExtension { }
export interface onTokenIssuanceStartCustomExtensionProps {
	claimsForTokenConfiguration: ComplexTypes.onTokenIssuanceStartReturnClaim[];
}
export interface onTokenIssuanceStartCustomExtensionMethods {

}
/*********************************************
* identityApiConnector
**********************************************/
export interface identityApiConnector extends identityApiConnectorProps, identityApiConnectorMethods , entity { }
export interface identityApiConnectorProps {
	authenticationConfiguration: ComplexTypes.apiAuthenticationConfigurationBase;
	displayName: string;
	targetUrl: string;
}
export interface identityApiConnectorMethods {

}
/*********************************************
* appleManagedIdentityProvider
**********************************************/
export interface appleManagedIdentityProvider extends appleManagedIdentityProviderProps, appleManagedIdentityProviderMethods , identityProviderBase { }
export interface appleManagedIdentityProviderProps {
	certificateData: string;
	developerId: string;
	keyId: string;
	serviceId: string;
}
export interface appleManagedIdentityProviderMethods {

}
/*********************************************
* authenticationEventListener
**********************************************/
export interface authenticationEventListener extends authenticationEventListenerProps, authenticationEventListenerMethods , entity { }
export interface authenticationEventListenerProps {
	authenticationEventsFlowId: string;
	conditions: ComplexTypes.authenticationConditions;
}
export interface authenticationEventListenerMethods {

}
/*********************************************
* authenticationEventsFlow
**********************************************/
export interface authenticationEventsFlow extends authenticationEventsFlowProps, authenticationEventsFlowMethods , entity { }
export interface authenticationEventsFlowProps {
	conditions: ComplexTypes.authenticationConditions;
	description: string;
	displayName: string;
}
export interface authenticationEventsFlowMethods {

}
/*********************************************
* identityUserFlow
**********************************************/
export interface identityUserFlow extends identityUserFlowProps, identityUserFlowMethods , entity { }
export interface identityUserFlowProps {
	userFlowType: EnumTypes.userFlowType;
	userFlowTypeVersion: any;
}
export interface identityUserFlowMethods {

}
/*********************************************
* b2xIdentityUserFlow
**********************************************/
export interface b2xIdentityUserFlow extends b2xIdentityUserFlowProps, b2xIdentityUserFlowMethods , identityUserFlow { }
export interface b2xIdentityUserFlowProps {
	apiConnectorConfiguration: ComplexTypes.userFlowApiConnectorConfiguration;
}
export interface b2xIdentityUserFlowMethods {
	identityProviders(): IBaseQuery<identityProvider[]>;
	identityProviders(id: string | number): IBaseQuery<identityProvider>;
	languages(): IBaseQuery<userFlowLanguageConfiguration[]>;
	languages(id: string | number): IBaseQuery<userFlowLanguageConfiguration>;
	userAttributeAssignments(): IBaseQuery<identityUserFlowAttributeAssignment[]>;
	userAttributeAssignments(id: string | number): IBaseQuery<identityUserFlowAttributeAssignment>;
	userFlowIdentityProviders(): IBaseQuery<identityProviderBase[]>;
	userFlowIdentityProviders(id: string | number): IBaseQuery<identityProviderBase>;
}
/*********************************************
* identityProvider
**********************************************/
export interface identityProvider extends identityProviderProps, identityProviderMethods , entity { }
export interface identityProviderProps {
	clientId: string;
	clientSecret: string;
	name: string;
	type: string;
}
export interface identityProviderMethods {

}
/*********************************************
* userFlowLanguageConfiguration
**********************************************/
export interface userFlowLanguageConfiguration extends userFlowLanguageConfigurationProps, userFlowLanguageConfigurationMethods , entity { }
export interface userFlowLanguageConfigurationProps {
	displayName: string;
	isEnabled: boolean;
}
export interface userFlowLanguageConfigurationMethods {
	defaultPages(): IBaseQuery<userFlowLanguagePage[]>;
	defaultPages(id: string | number): IBaseQuery<userFlowLanguagePage>;
	overridesPages(): IBaseQuery<userFlowLanguagePage[]>;
	overridesPages(id: string | number): IBaseQuery<userFlowLanguagePage>;
}
/*********************************************
* identityUserFlowAttributeAssignment
**********************************************/
export interface identityUserFlowAttributeAssignment extends identityUserFlowAttributeAssignmentProps, identityUserFlowAttributeAssignmentMethods , entity { }
export interface identityUserFlowAttributeAssignmentProps {
	displayName: string;
	isOptional: boolean;
	requiresVerification: boolean;
	userAttributeValues: ComplexTypes.userAttributeValuesItem[];
	userInputType: EnumTypes.identityUserFlowAttributeInputType;
}
export interface identityUserFlowAttributeAssignmentMethods {
	userAttribute(): IBaseQuery<identityUserFlowAttribute>;
}
/*********************************************
* builtInIdentityProvider
**********************************************/
export interface builtInIdentityProvider extends builtInIdentityProviderProps, builtInIdentityProviderMethods , identityProviderBase { }
export interface builtInIdentityProviderProps {
	identityProviderType: string;
}
export interface builtInIdentityProviderMethods {

}
/*********************************************
* externalUsersSelfServiceSignUpEventsFlow
**********************************************/
export interface externalUsersSelfServiceSignUpEventsFlow extends externalUsersSelfServiceSignUpEventsFlowProps, externalUsersSelfServiceSignUpEventsFlowMethods , authenticationEventsFlow { }
export interface externalUsersSelfServiceSignUpEventsFlowProps {
	onAttributeCollection: ComplexTypes.onAttributeCollectionHandler;
	onAuthenticationMethodLoadStart: ComplexTypes.onAuthenticationMethodLoadStartHandler;
	onInteractiveAuthFlowStart: ComplexTypes.onInteractiveAuthFlowStartHandler;
	onUserCreateStart: ComplexTypes.onUserCreateStartHandler;
}
export interface externalUsersSelfServiceSignUpEventsFlowMethods {

}
/*********************************************
* identityBuiltInUserFlowAttribute
**********************************************/
export interface identityBuiltInUserFlowAttribute extends identityBuiltInUserFlowAttributeProps, identityBuiltInUserFlowAttributeMethods , identityUserFlowAttribute { }
export interface identityBuiltInUserFlowAttributeProps {

}
export interface identityBuiltInUserFlowAttributeMethods {

}
/*********************************************
* identityContainer
**********************************************/
export interface identityContainer extends identityContainerProps, identityContainerMethods , entity { }
export interface identityContainerProps {

}
export interface identityContainerMethods {
	healthIssues(): IBaseQuery<healthIssue[]>;
	healthIssues(id: string | number): IBaseQuery<healthIssue>;
	sensors(): IBaseQuery<sensor[]>;
	sensors(id: string | number): IBaseQuery<sensor>;
}
/*********************************************
* identityCustomUserFlowAttribute
**********************************************/
export interface identityCustomUserFlowAttribute extends identityCustomUserFlowAttributeProps, identityCustomUserFlowAttributeMethods , identityUserFlowAttribute { }
export interface identityCustomUserFlowAttributeProps {

}
export interface identityCustomUserFlowAttributeMethods {

}
/*********************************************
* onAttributeCollectionListener
**********************************************/
export interface onAttributeCollectionListener extends onAttributeCollectionListenerProps, onAttributeCollectionListenerMethods , authenticationEventListener { }
export interface onAttributeCollectionListenerProps {
	handler: ComplexTypes.onAttributeCollectionHandler;
}
export interface onAttributeCollectionListenerMethods {

}
/*********************************************
* onAuthenticationMethodLoadStartListener
**********************************************/
export interface onAuthenticationMethodLoadStartListener extends onAuthenticationMethodLoadStartListenerProps, onAuthenticationMethodLoadStartListenerMethods , authenticationEventListener { }
export interface onAuthenticationMethodLoadStartListenerProps {
	handler: ComplexTypes.onAuthenticationMethodLoadStartHandler;
}
export interface onAuthenticationMethodLoadStartListenerMethods {

}
/*********************************************
* onInteractiveAuthFlowStartListener
**********************************************/
export interface onInteractiveAuthFlowStartListener extends onInteractiveAuthFlowStartListenerProps, onInteractiveAuthFlowStartListenerMethods , authenticationEventListener { }
export interface onInteractiveAuthFlowStartListenerProps {
	handler: ComplexTypes.onInteractiveAuthFlowStartHandler;
}
export interface onInteractiveAuthFlowStartListenerMethods {

}
/*********************************************
* onTokenIssuanceStartListener
**********************************************/
export interface onTokenIssuanceStartListener extends onTokenIssuanceStartListenerProps, onTokenIssuanceStartListenerMethods , authenticationEventListener { }
export interface onTokenIssuanceStartListenerProps {
	handler: ComplexTypes.onTokenIssuanceStartHandler;
}
export interface onTokenIssuanceStartListenerMethods {

}
/*********************************************
* onUserCreateStartListener
**********************************************/
export interface onUserCreateStartListener extends onUserCreateStartListenerProps, onUserCreateStartListenerMethods , authenticationEventListener { }
export interface onUserCreateStartListenerProps {
	handler: ComplexTypes.onUserCreateStartHandler;
}
export interface onUserCreateStartListenerMethods {

}
/*********************************************
* socialIdentityProvider
**********************************************/
export interface socialIdentityProvider extends socialIdentityProviderProps, socialIdentityProviderMethods , identityProviderBase { }
export interface socialIdentityProviderProps {
	clientId: string;
	clientSecret: string;
	identityProviderType: string;
}
export interface socialIdentityProviderMethods {

}
/*********************************************
* userFlowLanguagePage
**********************************************/
export interface userFlowLanguagePage extends userFlowLanguagePageProps, userFlowLanguagePageMethods , entity { }
export interface userFlowLanguagePageProps {

}
export interface userFlowLanguagePageMethods {

}
/*********************************************
* deviceLocalCredentialInfo
**********************************************/
export interface deviceLocalCredentialInfo extends deviceLocalCredentialInfoProps, deviceLocalCredentialInfoMethods , entity { }
export interface deviceLocalCredentialInfoProps {
	credentials: ComplexTypes.deviceLocalCredential[];
	deviceName: string;
	lastBackupDateTime: any;
	refreshDateTime: any;
}
export interface deviceLocalCredentialInfoMethods {

}
/*********************************************
* directory
**********************************************/
export interface directory extends directoryProps, directoryMethods , entity { }
export interface directoryProps {

}
export interface directoryMethods {
	deviceLocalCredentials(): IBaseQuery<deviceLocalCredentialInfo[]>;
	deviceLocalCredentials(id: string | number): IBaseQuery<deviceLocalCredentialInfo>;
	administrativeUnits(): IBaseQuery<administrativeUnit[]>;
	administrativeUnits(id: string | number): IBaseQuery<administrativeUnit>;
	attributeSets(): IBaseQuery<attributeSet[]>;
	attributeSets(id: string | number): IBaseQuery<attributeSet>;
	customSecurityAttributeDefinitions(): IBaseQuery<customSecurityAttributeDefinition[]>;
	customSecurityAttributeDefinitions(id: string | number): IBaseQuery<customSecurityAttributeDefinition>;
	deletedItems(): IBaseQuery<directoryObject[]>;
	deletedItems(id: string | number): IBaseQuery<directoryObject>;
	federationConfigurations(): IBaseQuery<identityProviderBase[]>;
	federationConfigurations(id: string | number): IBaseQuery<identityProviderBase>;
	onPremisesSynchronization(): IBaseQuery<onPremisesDirectorySynchronization[]>;
	onPremisesSynchronization(id: string | number): IBaseQuery<onPremisesDirectorySynchronization>;
	subscriptions(): IBaseQuery<companySubscription[]>;
	subscriptions(id: string | number): IBaseQuery<companySubscription>;
}
/*********************************************
* administrativeUnit
**********************************************/
export interface administrativeUnit extends administrativeUnitProps, administrativeUnitMethods , directoryObject { }
export interface administrativeUnitProps {
	description: string;
	displayName: string;
	isMemberManagementRestricted: boolean;
	membershipRule: string;
	membershipRuleProcessingState: string;
	membershipType: string;
	visibility: string;
}
export interface administrativeUnitMethods {
	members(): IBaseQuery<directoryObject[]>;
	members(id: string | number): IBaseQuery<directoryObject>;
	scopedRoleMembers(): IBaseQuery<scopedRoleMembership[]>;
	scopedRoleMembers(id: string | number): IBaseQuery<scopedRoleMembership>;
	extensions(): IBaseQuery<extension[]>;
	extensions(id: string | number): IBaseQuery<extension>;
}
/*********************************************
* attributeSet
**********************************************/
export interface attributeSet extends attributeSetProps, attributeSetMethods , entity { }
export interface attributeSetProps {
	description: string;
	maxAttributesPerSet: number;
}
export interface attributeSetMethods {

}
/*********************************************
* customSecurityAttributeDefinition
**********************************************/
export interface customSecurityAttributeDefinition extends customSecurityAttributeDefinitionProps, customSecurityAttributeDefinitionMethods , entity { }
export interface customSecurityAttributeDefinitionProps {
	attributeSet: string;
	description: string;
	isCollection: boolean;
	isSearchable: boolean;
	name: string;
	status: string;
	type: string;
	usePreDefinedValuesOnly: boolean;
}
export interface customSecurityAttributeDefinitionMethods {
	allowedValues(): IBaseQuery<allowedValue[]>;
	allowedValues(id: string | number): IBaseQuery<allowedValue>;
}
/*********************************************
* onPremisesDirectorySynchronization
**********************************************/
export interface onPremisesDirectorySynchronization extends onPremisesDirectorySynchronizationProps, onPremisesDirectorySynchronizationMethods , entity { }
export interface onPremisesDirectorySynchronizationProps {
	configuration: ComplexTypes.onPremisesDirectorySynchronizationConfiguration;
	features: ComplexTypes.onPremisesDirectorySynchronizationFeature;
}
export interface onPremisesDirectorySynchronizationMethods {

}
/*********************************************
* companySubscription
**********************************************/
export interface companySubscription extends companySubscriptionProps, companySubscriptionMethods , entity { }
export interface companySubscriptionProps {
	commerceSubscriptionId: string;
	createdDateTime: any;
	isTrial: boolean;
	nextLifecycleDateTime: any;
	ownerId: string;
	ownerTenantId: string;
	ownerType: string;
	serviceStatus: ComplexTypes.servicePlanInfo[];
	skuId: string;
	skuPartNumber: string;
	status: string;
	totalLicenses: number;
}
export interface companySubscriptionMethods {

}
/*********************************************
* allowedValue
**********************************************/
export interface allowedValue extends allowedValueProps, allowedValueMethods , entity { }
export interface allowedValueProps {
	isActive: boolean;
}
export interface allowedValueMethods {

}
/*********************************************
* appScope
**********************************************/
export interface appScope extends appScopeProps, appScopeMethods , entity { }
export interface appScopeProps {
	displayName: string;
	type: string;
}
export interface appScopeMethods {

}
/*********************************************
* certificateBasedAuthConfiguration
**********************************************/
export interface certificateBasedAuthConfiguration extends certificateBasedAuthConfigurationProps, certificateBasedAuthConfigurationMethods , entity { }
export interface certificateBasedAuthConfigurationProps {
	certificateAuthorities: ComplexTypes.certificateAuthority[];
}
export interface certificateBasedAuthConfigurationMethods {

}
/*********************************************
* contract
**********************************************/
export interface contract extends contractProps, contractMethods , directoryObject { }
export interface contractProps {
	contractType: string;
	customerId: any;
	defaultDomainName: string;
	displayName: string;
}
export interface contractMethods {

}
/*********************************************
* crossTenantAccessPolicyConfigurationDefault
**********************************************/
export interface crossTenantAccessPolicyConfigurationDefault extends crossTenantAccessPolicyConfigurationDefaultProps, crossTenantAccessPolicyConfigurationDefaultMethods , entity { }
export interface crossTenantAccessPolicyConfigurationDefaultProps {
	automaticUserConsentSettings: ComplexTypes.inboundOutboundPolicyConfiguration;
	b2bCollaborationInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bCollaborationOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	inboundTrust: ComplexTypes.crossTenantAccessPolicyInboundTrust;
	invitationRedemptionIdentityProviderConfiguration: ComplexTypes.defaultInvitationRedemptionIdentityProviderConfiguration;
	isServiceDefault: boolean;
	tenantRestrictions: ComplexTypes.crossTenantAccessPolicyTenantRestrictions;
}
export interface crossTenantAccessPolicyConfigurationDefaultMethods {

}
/*********************************************
* crossTenantAccessPolicyConfigurationPartner
**********************************************/
export interface crossTenantAccessPolicyConfigurationPartner extends crossTenantAccessPolicyConfigurationPartnerProps, crossTenantAccessPolicyConfigurationPartnerMethods  { }
export interface crossTenantAccessPolicyConfigurationPartnerProps {
	automaticUserConsentSettings: ComplexTypes.inboundOutboundPolicyConfiguration;
	b2bCollaborationInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bCollaborationOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	inboundTrust: ComplexTypes.crossTenantAccessPolicyInboundTrust;
	isInMultiTenantOrganization: boolean;
	isServiceProvider: boolean;
	tenantId: string;
	tenantRestrictions: ComplexTypes.crossTenantAccessPolicyTenantRestrictions;
}
export interface crossTenantAccessPolicyConfigurationPartnerMethods {
	identitySynchronization(): IBaseQuery<crossTenantIdentitySyncPolicyPartner>;
}
/*********************************************
* policyTemplate
**********************************************/
export interface policyTemplate extends policyTemplateProps, policyTemplateMethods , entity { }
export interface policyTemplateProps {

}
export interface policyTemplateMethods {
	multiTenantOrganizationIdentitySynchronization(): IBaseQuery<multiTenantOrganizationIdentitySyncPolicyTemplate>;
	multiTenantOrganizationPartnerConfiguration(): IBaseQuery<multiTenantOrganizationPartnerConfigurationTemplate>;
}
/*********************************************
* crossTenantIdentitySyncPolicyPartner
**********************************************/
export interface crossTenantIdentitySyncPolicyPartner extends crossTenantIdentitySyncPolicyPartnerProps, crossTenantIdentitySyncPolicyPartnerMethods  { }
export interface crossTenantIdentitySyncPolicyPartnerProps {
	displayName: string;
	tenantId: string;
	userSyncInbound: ComplexTypes.crossTenantUserSyncInbound;
}
export interface crossTenantIdentitySyncPolicyPartnerMethods {

}
/*********************************************
* device
**********************************************/
export interface device extends deviceProps, deviceMethods , directoryObject { }
export interface deviceProps {
	accountEnabled: boolean;
	alternativeSecurityIds: ComplexTypes.alternativeSecurityId[];
	approximateLastSignInDateTime: any;
	complianceExpirationDateTime: any;
	deviceCategory: string;
	deviceId: string;
	deviceMetadata: string;
	deviceOwnership: string;
	deviceVersion: number;
	displayName: string;
	enrollmentProfileName: string;
	enrollmentType: string;
	isCompliant: boolean;
	isManaged: boolean;
	isManagementRestricted: boolean;
	isRooted: boolean;
	managementType: string;
	manufacturer: string;
	mdmAppId: string;
	model: string;
	onPremisesLastSyncDateTime: any;
	onPremisesSecurityIdentifier: string;
	onPremisesSyncEnabled: boolean;
	operatingSystem: string;
	operatingSystemVersion: string;
	physicalIds: Array<string>[];
	profileType: string;
	registrationDateTime: any;
	systemLabels: Array<string>[];
	trustType: string;
}
export interface deviceMethods {
	memberOf(): IBaseQuery<directoryObject[]>;
	memberOf(id: string | number): IBaseQuery<directoryObject>;
	registeredOwners(): IBaseQuery<directoryObject[]>;
	registeredOwners(id: string | number): IBaseQuery<directoryObject>;
	registeredUsers(): IBaseQuery<directoryObject[]>;
	registeredUsers(id: string | number): IBaseQuery<directoryObject>;
	transitiveMemberOf(): IBaseQuery<directoryObject[]>;
	transitiveMemberOf(id: string | number): IBaseQuery<directoryObject>;
	extensions(): IBaseQuery<extension[]>;
	extensions(id: string | number): IBaseQuery<extension>;
}
/*********************************************
* directoryObjectPartnerReference
**********************************************/
export interface directoryObjectPartnerReference extends directoryObjectPartnerReferenceProps, directoryObjectPartnerReferenceMethods , directoryObject { }
export interface directoryObjectPartnerReferenceProps {
	description: string;
	displayName: string;
	externalPartnerTenantId: any;
	objectType: string;
}
export interface directoryObjectPartnerReferenceMethods {

}
/*********************************************
* directoryRole
**********************************************/
export interface directoryRole extends directoryRoleProps, directoryRoleMethods , directoryObject { }
export interface directoryRoleProps {
	description: string;
	displayName: string;
	roleTemplateId: string;
}
export interface directoryRoleMethods {
	members(): IBaseQuery<directoryObject[]>;
	members(id: string | number): IBaseQuery<directoryObject>;
	scopedMembers(): IBaseQuery<scopedRoleMembership[]>;
	scopedMembers(id: string | number): IBaseQuery<scopedRoleMembership>;
}
/*********************************************
* directoryRoleTemplate
**********************************************/
export interface directoryRoleTemplate extends directoryRoleTemplateProps, directoryRoleTemplateMethods , directoryObject { }
export interface directoryRoleTemplateProps {
	description: string;
	displayName: string;
}
export interface directoryRoleTemplateMethods {

}
/*********************************************
* domain
**********************************************/
export interface domain extends domainProps, domainMethods , entity { }
export interface domainProps {
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
}
export interface domainMethods {
	domainNameReferences(): IBaseQuery<directoryObject[]>;
	domainNameReferences(id: string | number): IBaseQuery<directoryObject>;
	federationConfiguration(): IBaseQuery<internalDomainFederation[]>;
	federationConfiguration(id: string | number): IBaseQuery<internalDomainFederation>;
	rootDomain(): IBaseQuery<domain>;
	serviceConfigurationRecords(): IBaseQuery<domainDnsRecord[]>;
	serviceConfigurationRecords(id: string | number): IBaseQuery<domainDnsRecord>;
	verificationDnsRecords(): IBaseQuery<domainDnsRecord[]>;
	verificationDnsRecords(id: string | number): IBaseQuery<domainDnsRecord>;
}
/*********************************************
* samlOrWsFedProvider
**********************************************/
export interface samlOrWsFedProvider extends samlOrWsFedProviderProps, samlOrWsFedProviderMethods , identityProviderBase { }
export interface samlOrWsFedProviderProps {
	issuerUri: string;
	metadataExchangeUri: string;
	passiveSignInUri: string;
	preferredAuthenticationProtocol: EnumTypes.authenticationProtocol;
	signingCertificate: string;
}
export interface samlOrWsFedProviderMethods {

}
/*********************************************
* internalDomainFederation
**********************************************/
export interface internalDomainFederation extends internalDomainFederationProps, internalDomainFederationMethods , samlOrWsFedProvider { }
export interface internalDomainFederationProps {
	activeSignInUri: string;
	federatedIdpMfaBehavior: EnumTypes.federatedIdpMfaBehavior;
	isSignedAuthenticationRequestRequired: boolean;
	nextSigningCertificate: string;
	promptLoginBehavior: EnumTypes.promptLoginBehavior;
	signingCertificateUpdateStatus: ComplexTypes.signingCertificateUpdateStatus;
	signOutUri: string;
}
export interface internalDomainFederationMethods {

}
/*********************************************
* domainDnsRecord
**********************************************/
export interface domainDnsRecord extends domainDnsRecordProps, domainDnsRecordMethods , entity { }
export interface domainDnsRecordProps {
	isOptional: boolean;
	label: string;
	recordType: string;
	supportedService: string;
	ttl: number;
}
export interface domainDnsRecordMethods {

}
/*********************************************
* domainDnsCnameRecord
**********************************************/
export interface domainDnsCnameRecord extends domainDnsCnameRecordProps, domainDnsCnameRecordMethods , domainDnsRecord { }
export interface domainDnsCnameRecordProps {
	canonicalName: string;
}
export interface domainDnsCnameRecordMethods {

}
/*********************************************
* domainDnsMxRecord
**********************************************/
export interface domainDnsMxRecord extends domainDnsMxRecordProps, domainDnsMxRecordMethods , domainDnsRecord { }
export interface domainDnsMxRecordProps {
	mailExchange: string;
	preference: number;
}
export interface domainDnsMxRecordMethods {

}
/*********************************************
* domainDnsSrvRecord
**********************************************/
export interface domainDnsSrvRecord extends domainDnsSrvRecordProps, domainDnsSrvRecordMethods , domainDnsRecord { }
export interface domainDnsSrvRecordProps {
	nameTarget: string;
	port: number;
	priority: number;
	protocol: string;
	service: string;
	weight: number;
}
export interface domainDnsSrvRecordMethods {

}
/*********************************************
* domainDnsTxtRecord
**********************************************/
export interface domainDnsTxtRecord extends domainDnsTxtRecordProps, domainDnsTxtRecordMethods , domainDnsRecord { }
export interface domainDnsTxtRecordProps {
	text: string;
}
export interface domainDnsTxtRecordMethods {

}
/*********************************************
* domainDnsUnavailableRecord
**********************************************/
export interface domainDnsUnavailableRecord extends domainDnsUnavailableRecordProps, domainDnsUnavailableRecordMethods , domainDnsRecord { }
export interface domainDnsUnavailableRecordProps {
	description: string;
}
export interface domainDnsUnavailableRecordMethods {

}
/*********************************************
* externalDomainName
**********************************************/
export interface externalDomainName extends externalDomainNameProps, externalDomainNameMethods , entity { }
export interface externalDomainNameProps {

}
export interface externalDomainNameMethods {

}
/*********************************************
* groupSettingTemplate
**********************************************/
export interface groupSettingTemplate extends groupSettingTemplateProps, groupSettingTemplateMethods , directoryObject { }
export interface groupSettingTemplateProps {
	description: string;
	displayName: string;
	values: ComplexTypes.settingTemplateValue[];
}
export interface groupSettingTemplateMethods {

}
/*********************************************
* multiTenantOrganization
**********************************************/
export interface multiTenantOrganization extends multiTenantOrganizationProps, multiTenantOrganizationMethods , entity { }
export interface multiTenantOrganizationProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	state: EnumTypes.multiTenantOrganizationState;
}
export interface multiTenantOrganizationMethods {
	joinRequest(): IBaseQuery<multiTenantOrganizationJoinRequestRecord>;
	tenants(): IBaseQuery<multiTenantOrganizationMember[]>;
	tenants(id: string | number): IBaseQuery<multiTenantOrganizationMember>;
}
/*********************************************
* multiTenantOrganizationJoinRequestRecord
**********************************************/
export interface multiTenantOrganizationJoinRequestRecord extends multiTenantOrganizationJoinRequestRecordProps, multiTenantOrganizationJoinRequestRecordMethods , entity { }
export interface multiTenantOrganizationJoinRequestRecordProps {
	addedByTenantId: string;
	memberState: EnumTypes.multiTenantOrganizationMemberState;
	role: EnumTypes.multiTenantOrganizationMemberRole;
	transitionDetails: ComplexTypes.multiTenantOrganizationJoinRequestTransitionDetails;
}
export interface multiTenantOrganizationJoinRequestRecordMethods {

}
/*********************************************
* multiTenantOrganizationMember
**********************************************/
export interface multiTenantOrganizationMember extends multiTenantOrganizationMemberProps, multiTenantOrganizationMemberMethods , directoryObject { }
export interface multiTenantOrganizationMemberProps {
	addedByTenantId: any;
	addedDateTime: any;
	displayName: string;
	joinedDateTime: any;
	role: EnumTypes.multiTenantOrganizationMemberRole;
	state: EnumTypes.multiTenantOrganizationMemberState;
	tenantId: string;
	transitionDetails: ComplexTypes.multiTenantOrganizationMemberTransitionDetails;
}
export interface multiTenantOrganizationMemberMethods {

}
/*********************************************
* multiTenantOrganizationIdentitySyncPolicyTemplate
**********************************************/
export interface multiTenantOrganizationIdentitySyncPolicyTemplate extends multiTenantOrganizationIdentitySyncPolicyTemplateProps, multiTenantOrganizationIdentitySyncPolicyTemplateMethods , entity { }
export interface multiTenantOrganizationIdentitySyncPolicyTemplateProps {
	templateApplicationLevel: EnumTypes.templateApplicationLevel;
	userSyncInbound: ComplexTypes.crossTenantUserSyncInbound;
}
export interface multiTenantOrganizationIdentitySyncPolicyTemplateMethods {

}
/*********************************************
* multiTenantOrganizationPartnerConfigurationTemplate
**********************************************/
export interface multiTenantOrganizationPartnerConfigurationTemplate extends multiTenantOrganizationPartnerConfigurationTemplateProps, multiTenantOrganizationPartnerConfigurationTemplateMethods , entity { }
export interface multiTenantOrganizationPartnerConfigurationTemplateProps {
	automaticUserConsentSettings: ComplexTypes.inboundOutboundPolicyConfiguration;
	b2bCollaborationInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bCollaborationOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	inboundTrust: ComplexTypes.crossTenantAccessPolicyInboundTrust;
	templateApplicationLevel: EnumTypes.templateApplicationLevel;
}
export interface multiTenantOrganizationPartnerConfigurationTemplateMethods {

}
/*********************************************
* organization
**********************************************/
export interface organization extends organizationProps, organizationMethods , directoryObject { }
export interface organizationProps {
	assignedPlans: ComplexTypes.assignedPlan[];
	businessPhones: Array<string>[];
	city: string;
	country: string;
	countryLetterCode: string;
	createdDateTime: any;
	defaultUsageLocation: string;
	displayName: string;
	marketingNotificationEmails: Array<string>[];
	onPremisesLastSyncDateTime: any;
	onPremisesSyncEnabled: boolean;
	partnerTenantType: EnumTypes.partnerTenantType;
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
}
export interface organizationMethods {
	branding(): IBaseQuery<organizationalBranding>;
	certificateBasedAuthConfiguration(): IBaseQuery<certificateBasedAuthConfiguration[]>;
	certificateBasedAuthConfiguration(id: string | number): IBaseQuery<certificateBasedAuthConfiguration>;
	extensions(): IBaseQuery<extension[]>;
	extensions(id: string | number): IBaseQuery<extension>;
}
/*********************************************
* organizationalBrandingProperties
**********************************************/
export interface organizationalBrandingProperties extends organizationalBrandingPropertiesProps, organizationalBrandingPropertiesMethods , entity { }
export interface organizationalBrandingPropertiesProps {
	backgroundColor: string;
	backgroundImage: any;
	backgroundImageRelativeUrl: string;
	bannerLogo: any;
	bannerLogoRelativeUrl: string;
	cdnList: Array<string>[];
	contentCustomization: ComplexTypes.contentCustomization;
	customAccountResetCredentialsUrl: string;
	customCannotAccessYourAccountText: string;
	customCannotAccessYourAccountUrl: string;
	customCSS: any;
	customCSSRelativeUrl: string;
	customForgotMyPasswordText: string;
	customPrivacyAndCookiesText: string;
	customPrivacyAndCookiesUrl: string;
	customResetItNowText: string;
	customTermsOfUseText: string;
	customTermsOfUseUrl: string;
	favicon: any;
	faviconRelativeUrl: string;
	headerBackgroundColor: string;
	headerLogo: any;
	headerLogoRelativeUrl: string;
	loginPageLayoutConfiguration: ComplexTypes.loginPageLayoutConfiguration;
	loginPageTextVisibilitySettings: ComplexTypes.loginPageTextVisibilitySettings;
	signInPageText: string;
	squareLogo: any;
	squareLogoDark: any;
	squareLogoDarkRelativeUrl: string;
	squareLogoRelativeUrl: string;
	usernameHintText: string;
}
export interface organizationalBrandingPropertiesMethods {

}
/*********************************************
* organizationalBranding
**********************************************/
export interface organizationalBranding extends organizationalBrandingProps, organizationalBrandingMethods , organizationalBrandingProperties { }
export interface organizationalBrandingProps {

}
export interface organizationalBrandingMethods {
	localizations(): IBaseQuery<organizationalBrandingLocalization[]>;
	localizations(id: string | number): IBaseQuery<organizationalBrandingLocalization>;
}
/*********************************************
* organizationalBrandingLocalization
**********************************************/
export interface organizationalBrandingLocalization extends organizationalBrandingLocalizationProps, organizationalBrandingLocalizationMethods , organizationalBrandingProperties { }
export interface organizationalBrandingLocalizationProps {

}
export interface organizationalBrandingLocalizationMethods {

}
/*********************************************
* orgContact
**********************************************/
export interface orgContact extends orgContactProps, orgContactMethods , directoryObject { }
export interface orgContactProps {
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
	serviceProvisioningErrors: ComplexTypes.serviceProvisioningError[];
	surname: string;
}
export interface orgContactMethods {
	directReports(): IBaseQuery<directoryObject[]>;
	directReports(id: string | number): IBaseQuery<directoryObject>;
	manager(): IBaseQuery<directoryObject>;
	memberOf(): IBaseQuery<directoryObject[]>;
	memberOf(id: string | number): IBaseQuery<directoryObject>;
	transitiveMemberOf(): IBaseQuery<directoryObject[]>;
	transitiveMemberOf(id: string | number): IBaseQuery<directoryObject>;
}
/*********************************************
* permissionGrantConditionSet
**********************************************/
export interface permissionGrantConditionSet extends permissionGrantConditionSetProps, permissionGrantConditionSetMethods , entity { }
export interface permissionGrantConditionSetProps {
	clientApplicationIds: Array<string>[];
	clientApplicationPublisherIds: Array<string>[];
	clientApplicationsFromVerifiedPublisherOnly: boolean;
	clientApplicationTenantIds: Array<string>[];
	permissionClassification: string;
	permissions: Array<string>[];
	permissionType: EnumTypes.permissionType;
	resourceApplication: string;
}
export interface permissionGrantConditionSetMethods {

}
/*********************************************
* rbacApplication
**********************************************/
export interface rbacApplication extends rbacApplicationProps, rbacApplicationMethods , entity { }
export interface rbacApplicationProps {

}
export interface rbacApplicationMethods {
	resourceNamespaces(): IBaseQuery<unifiedRbacResourceNamespace[]>;
	resourceNamespaces(id: string | number): IBaseQuery<unifiedRbacResourceNamespace>;
	roleAssignments(): IBaseQuery<unifiedRoleAssignment[]>;
	roleAssignments(id: string | number): IBaseQuery<unifiedRoleAssignment>;
	roleDefinitions(): IBaseQuery<unifiedRoleDefinition[]>;
	roleDefinitions(id: string | number): IBaseQuery<unifiedRoleDefinition>;
	roleAssignmentScheduleInstances(): IBaseQuery<unifiedRoleAssignmentScheduleInstance[]>;
	roleAssignmentScheduleInstances(id: string | number): IBaseQuery<unifiedRoleAssignmentScheduleInstance>;
	roleAssignmentScheduleRequests(): IBaseQuery<unifiedRoleAssignmentScheduleRequest[]>;
	roleAssignmentScheduleRequests(id: string | number): IBaseQuery<unifiedRoleAssignmentScheduleRequest>;
	roleAssignmentSchedules(): IBaseQuery<unifiedRoleAssignmentSchedule[]>;
	roleAssignmentSchedules(id: string | number): IBaseQuery<unifiedRoleAssignmentSchedule>;
	roleEligibilityScheduleInstances(): IBaseQuery<unifiedRoleEligibilityScheduleInstance[]>;
	roleEligibilityScheduleInstances(id: string | number): IBaseQuery<unifiedRoleEligibilityScheduleInstance>;
	roleEligibilityScheduleRequests(): IBaseQuery<unifiedRoleEligibilityScheduleRequest[]>;
	roleEligibilityScheduleRequests(id: string | number): IBaseQuery<unifiedRoleEligibilityScheduleRequest>;
	roleEligibilitySchedules(): IBaseQuery<unifiedRoleEligibilitySchedule[]>;
	roleEligibilitySchedules(id: string | number): IBaseQuery<unifiedRoleEligibilitySchedule>;
}
/*********************************************
* unifiedRbacResourceNamespace
**********************************************/
export interface unifiedRbacResourceNamespace extends unifiedRbacResourceNamespaceProps, unifiedRbacResourceNamespaceMethods , entity { }
export interface unifiedRbacResourceNamespaceProps {
	name: string;
}
export interface unifiedRbacResourceNamespaceMethods {
	resourceActions(): IBaseQuery<unifiedRbacResourceAction[]>;
	resourceActions(id: string | number): IBaseQuery<unifiedRbacResourceAction>;
}
/*********************************************
* unifiedRoleAssignment
**********************************************/
export interface unifiedRoleAssignment extends unifiedRoleAssignmentProps, unifiedRoleAssignmentMethods , entity { }
export interface unifiedRoleAssignmentProps {
	appScopeId: string;
	condition: string;
	directoryScopeId: string;
	principalId: string;
	roleDefinitionId: string;
}
export interface unifiedRoleAssignmentMethods {
	appScope(): IBaseQuery<appScope>;
	directoryScope(): IBaseQuery<directoryObject>;
	principal(): IBaseQuery<directoryObject>;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition>;
}
/*********************************************
* unifiedRoleDefinition
**********************************************/
export interface unifiedRoleDefinition extends unifiedRoleDefinitionProps, unifiedRoleDefinitionMethods , entity { }
export interface unifiedRoleDefinitionProps {
	description: string;
	displayName: string;
	isBuiltIn: boolean;
	isEnabled: boolean;
	resourceScopes: Array<string>[];
	rolePermissions: ComplexTypes.unifiedRolePermission[];
	templateId: string;
	version: string;
}
export interface unifiedRoleDefinitionMethods {
	inheritsPermissionsFrom(): IBaseQuery<unifiedRoleDefinition[]>;
	inheritsPermissionsFrom(id: string | number): IBaseQuery<unifiedRoleDefinition>;
}
/*********************************************
* unifiedRoleScheduleInstanceBase
**********************************************/
export interface unifiedRoleScheduleInstanceBase extends unifiedRoleScheduleInstanceBaseProps, unifiedRoleScheduleInstanceBaseMethods , entity { }
export interface unifiedRoleScheduleInstanceBaseProps {
	appScopeId: string;
	directoryScopeId: string;
	principalId: string;
	roleDefinitionId: string;
}
export interface unifiedRoleScheduleInstanceBaseMethods {
	appScope(): IBaseQuery<appScope>;
	directoryScope(): IBaseQuery<directoryObject>;
	principal(): IBaseQuery<directoryObject>;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition>;
}
/*********************************************
* unifiedRoleAssignmentScheduleInstance
**********************************************/
export interface unifiedRoleAssignmentScheduleInstance extends unifiedRoleAssignmentScheduleInstanceProps, unifiedRoleAssignmentScheduleInstanceMethods , unifiedRoleScheduleInstanceBase { }
export interface unifiedRoleAssignmentScheduleInstanceProps {
	assignmentType: string;
	endDateTime: any;
	memberType: string;
	roleAssignmentOriginId: string;
	roleAssignmentScheduleId: string;
	startDateTime: any;
}
export interface unifiedRoleAssignmentScheduleInstanceMethods {
	activatedUsing(): IBaseQuery<unifiedRoleEligibilityScheduleInstance>;
}
/*********************************************
* request
**********************************************/
export interface request extends requestProps, requestMethods , entity { }
export interface requestProps {
	approvalId: string;
	completedDateTime: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	customData: string;
	status: string;
}
export interface requestMethods {

}
/*********************************************
* unifiedRoleAssignmentScheduleRequest
**********************************************/
export interface unifiedRoleAssignmentScheduleRequest extends unifiedRoleAssignmentScheduleRequestProps, unifiedRoleAssignmentScheduleRequestMethods , request { }
export interface unifiedRoleAssignmentScheduleRequestProps {
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
}
export interface unifiedRoleAssignmentScheduleRequestMethods {
	activatedUsing(): IBaseQuery<unifiedRoleEligibilitySchedule>;
	appScope(): IBaseQuery<appScope>;
	directoryScope(): IBaseQuery<directoryObject>;
	principal(): IBaseQuery<directoryObject>;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition>;
	targetSchedule(): IBaseQuery<unifiedRoleAssignmentSchedule>;
}
/*********************************************
* unifiedRoleScheduleBase
**********************************************/
export interface unifiedRoleScheduleBase extends unifiedRoleScheduleBaseProps, unifiedRoleScheduleBaseMethods , entity { }
export interface unifiedRoleScheduleBaseProps {
	appScopeId: string;
	createdDateTime: any;
	createdUsing: string;
	directoryScopeId: string;
	modifiedDateTime: any;
	principalId: string;
	roleDefinitionId: string;
	status: string;
}
export interface unifiedRoleScheduleBaseMethods {
	appScope(): IBaseQuery<appScope>;
	directoryScope(): IBaseQuery<directoryObject>;
	principal(): IBaseQuery<directoryObject>;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition>;
}
/*********************************************
* unifiedRoleAssignmentSchedule
**********************************************/
export interface unifiedRoleAssignmentSchedule extends unifiedRoleAssignmentScheduleProps, unifiedRoleAssignmentScheduleMethods , unifiedRoleScheduleBase { }
export interface unifiedRoleAssignmentScheduleProps {
	assignmentType: string;
	memberType: string;
	scheduleInfo: ComplexTypes.requestSchedule;
}
export interface unifiedRoleAssignmentScheduleMethods {
	activatedUsing(): IBaseQuery<unifiedRoleEligibilitySchedule>;
}
/*********************************************
* unifiedRoleEligibilityScheduleInstance
**********************************************/
export interface unifiedRoleEligibilityScheduleInstance extends unifiedRoleEligibilityScheduleInstanceProps, unifiedRoleEligibilityScheduleInstanceMethods , unifiedRoleScheduleInstanceBase { }
export interface unifiedRoleEligibilityScheduleInstanceProps {
	endDateTime: any;
	memberType: string;
	roleEligibilityScheduleId: string;
	startDateTime: any;
}
export interface unifiedRoleEligibilityScheduleInstanceMethods {

}
/*********************************************
* unifiedRoleEligibilityScheduleRequest
**********************************************/
export interface unifiedRoleEligibilityScheduleRequest extends unifiedRoleEligibilityScheduleRequestProps, unifiedRoleEligibilityScheduleRequestMethods , request { }
export interface unifiedRoleEligibilityScheduleRequestProps {
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
}
export interface unifiedRoleEligibilityScheduleRequestMethods {
	appScope(): IBaseQuery<appScope>;
	directoryScope(): IBaseQuery<directoryObject>;
	principal(): IBaseQuery<directoryObject>;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition>;
	targetSchedule(): IBaseQuery<unifiedRoleEligibilitySchedule>;
}
/*********************************************
* unifiedRoleEligibilitySchedule
**********************************************/
export interface unifiedRoleEligibilitySchedule extends unifiedRoleEligibilityScheduleProps, unifiedRoleEligibilityScheduleMethods , unifiedRoleScheduleBase { }
export interface unifiedRoleEligibilityScheduleProps {
	memberType: string;
	scheduleInfo: ComplexTypes.requestSchedule;
}
export interface unifiedRoleEligibilityScheduleMethods {

}
/*********************************************
* targetDeviceGroup
**********************************************/
export interface targetDeviceGroup extends targetDeviceGroupProps, targetDeviceGroupMethods , entity { }
export interface targetDeviceGroupProps {
	displayName: string;
}
export interface targetDeviceGroupMethods {

}
/*********************************************
* roleManagement
**********************************************/
export interface roleManagement extends roleManagementProps, roleManagementMethods  { }
export interface roleManagementProps {

}
export interface roleManagementMethods {
	directory(): IBaseQuery<rbacApplication>;
	entitlementManagement(): IBaseQuery<rbacApplication>;
}
/*********************************************
* samlOrWsFedExternalDomainFederation
**********************************************/
export interface samlOrWsFedExternalDomainFederation extends samlOrWsFedExternalDomainFederationProps, samlOrWsFedExternalDomainFederationMethods , samlOrWsFedProvider { }
export interface samlOrWsFedExternalDomainFederationProps {

}
export interface samlOrWsFedExternalDomainFederationMethods {
	domains(): IBaseQuery<externalDomainName[]>;
	domains(id: string | number): IBaseQuery<externalDomainName>;
}
/*********************************************
* subscribedSku
**********************************************/
export interface subscribedSku extends subscribedSkuProps, subscribedSkuMethods , entity { }
export interface subscribedSkuProps {
	accountId: string;
	accountName: string;
	appliesTo: string;
	capabilityStatus: string;
	consumedUnits: number;
	prepaidUnits: ComplexTypes.licenseUnitsDetail;
	servicePlans: ComplexTypes.servicePlanInfo[];
	skuId: any;
	skuPartNumber: string;
	subscriptionIds: Array<string>[];
}
export interface subscribedSkuMethods {

}
/*********************************************
* tenantRelationship
**********************************************/
export interface tenantRelationship extends tenantRelationshipProps, tenantRelationshipMethods  { }
export interface tenantRelationshipProps {

}
export interface tenantRelationshipMethods {
	multiTenantOrganization(): IBaseQuery<multiTenantOrganization>;
	delegatedAdminCustomers(): IBaseQuery<delegatedAdminCustomer[]>;
	delegatedAdminCustomers(id: string | number): IBaseQuery<delegatedAdminCustomer>;
	delegatedAdminRelationships(): IBaseQuery<delegatedAdminRelationship[]>;
	delegatedAdminRelationships(id: string | number): IBaseQuery<delegatedAdminRelationship>;
}
/*********************************************
* delegatedAdminCustomer
**********************************************/
export interface delegatedAdminCustomer extends delegatedAdminCustomerProps, delegatedAdminCustomerMethods , entity { }
export interface delegatedAdminCustomerProps {
	displayName: string;
	tenantId: string;
}
export interface delegatedAdminCustomerMethods {
	serviceManagementDetails(): IBaseQuery<delegatedAdminServiceManagementDetail[]>;
	serviceManagementDetails(id: string | number): IBaseQuery<delegatedAdminServiceManagementDetail>;
}
/*********************************************
* delegatedAdminRelationship
**********************************************/
export interface delegatedAdminRelationship extends delegatedAdminRelationshipProps, delegatedAdminRelationshipMethods , entity { }
export interface delegatedAdminRelationshipProps {
	accessDetails: ComplexTypes.delegatedAdminAccessDetails;
	activatedDateTime: any;
	autoExtendDuration: number;
	createdDateTime: any;
	customer: ComplexTypes.delegatedAdminRelationshipCustomerParticipant;
	displayName: string;
	duration: number;
	endDateTime: any;
	lastModifiedDateTime: any;
	status: EnumTypes.delegatedAdminRelationshipStatus;
}
export interface delegatedAdminRelationshipMethods {
	accessAssignments(): IBaseQuery<delegatedAdminAccessAssignment[]>;
	accessAssignments(id: string | number): IBaseQuery<delegatedAdminAccessAssignment>;
	operations(): IBaseQuery<delegatedAdminRelationshipOperation[]>;
	operations(id: string | number): IBaseQuery<delegatedAdminRelationshipOperation>;
	requests(): IBaseQuery<delegatedAdminRelationshipRequest[]>;
	requests(id: string | number): IBaseQuery<delegatedAdminRelationshipRequest>;
}
/*********************************************
* unifiedRbacResourceAction
**********************************************/
export interface unifiedRbacResourceAction extends unifiedRbacResourceActionProps, unifiedRbacResourceActionMethods , entity { }
export interface unifiedRbacResourceActionProps {
	actionVerb: string;
	authenticationContextId: string;
	description: string;
	isAuthenticationContextSettable: boolean;
	name: string;
	resourceScopeId: string;
}
export interface unifiedRbacResourceActionMethods {

}
/*********************************************
* admin
**********************************************/
export interface admin extends adminProps, adminMethods  { }
export interface adminProps {

}
export interface adminMethods {
	edge(): IBaseQuery<edge>;
	sharepoint(): IBaseQuery<sharepoint>;
	microsoft365Apps(): IBaseQuery<adminMicrosoft365Apps>;
	serviceAnnouncement(): IBaseQuery<serviceAnnouncement>;
	reportSettings(): IBaseQuery<adminReportSettings>;
	people(): IBaseQuery<peopleAdminSettings>;
}
/*********************************************
* edge
**********************************************/
export interface edge extends edgeProps, edgeMethods , entity { }
export interface edgeProps {

}
export interface edgeMethods {
	internetExplorerMode(): IBaseQuery<internetExplorerMode>;
}
/*********************************************
* sharepoint
**********************************************/
export interface sharepoint extends sharepointProps, sharepointMethods , entity { }
export interface sharepointProps {

}
export interface sharepointMethods {
	settings(): IBaseQuery<sharepointSettings>;
}
/*********************************************
* adminMicrosoft365Apps
**********************************************/
export interface adminMicrosoft365Apps extends adminMicrosoft365AppsProps, adminMicrosoft365AppsMethods , entity { }
export interface adminMicrosoft365AppsProps {

}
export interface adminMicrosoft365AppsMethods {
	installationOptions(): IBaseQuery<m365AppsInstallationOptions>;
}
/*********************************************
* serviceAnnouncement
**********************************************/
export interface serviceAnnouncement extends serviceAnnouncementProps, serviceAnnouncementMethods , entity { }
export interface serviceAnnouncementProps {

}
export interface serviceAnnouncementMethods {
	healthOverviews(): IBaseQuery<serviceHealth[]>;
	healthOverviews(id: string | number): IBaseQuery<serviceHealth>;
	issues(): IBaseQuery<serviceHealthIssue[]>;
	issues(id: string | number): IBaseQuery<serviceHealthIssue>;
	messages(): IBaseQuery<serviceUpdateMessage[]>;
	messages(id: string | number): IBaseQuery<serviceUpdateMessage>;
}
/*********************************************
* adminReportSettings
**********************************************/
export interface adminReportSettings extends adminReportSettingsProps, adminReportSettingsMethods , entity { }
export interface adminReportSettingsProps {
	displayConcealedNames: boolean;
}
export interface adminReportSettingsMethods {

}
/*********************************************
* peopleAdminSettings
**********************************************/
export interface peopleAdminSettings extends peopleAdminSettingsProps, peopleAdminSettingsMethods , entity { }
export interface peopleAdminSettingsProps {

}
export interface peopleAdminSettingsMethods {
	profileCardProperties(): IBaseQuery<profileCardProperty[]>;
	profileCardProperties(id: string | number): IBaseQuery<profileCardProperty>;
	pronouns(): IBaseQuery<pronounsSettings>;
	itemInsights(): IBaseQuery<insightsSettings>;
}
/*********************************************
* browserSharedCookie
**********************************************/
export interface browserSharedCookie extends browserSharedCookieProps, browserSharedCookieMethods , entity { }
export interface browserSharedCookieProps {
	comment: string;
	createdDateTime: any;
	deletedDateTime: any;
	displayName: string;
	history: ComplexTypes.browserSharedCookieHistory[];
	hostOnly: boolean;
	hostOrDomain: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	path: string;
	sourceEnvironment: EnumTypes.browserSharedCookieSourceEnvironment;
	status: EnumTypes.browserSharedCookieStatus;
}
export interface browserSharedCookieMethods {

}
/*********************************************
* browserSite
**********************************************/
export interface browserSite extends browserSiteProps, browserSiteMethods , entity { }
export interface browserSiteProps {
	allowRedirect: boolean;
	comment: string;
	compatibilityMode: EnumTypes.browserSiteCompatibilityMode;
	createdDateTime: any;
	deletedDateTime: any;
	history: ComplexTypes.browserSiteHistory[];
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	mergeType: EnumTypes.browserSiteMergeType;
	status: EnumTypes.browserSiteStatus;
	targetEnvironment: EnumTypes.browserSiteTargetEnvironment;
	webUrl: string;
}
export interface browserSiteMethods {

}
/*********************************************
* browserSiteList
**********************************************/
export interface browserSiteList extends browserSiteListProps, browserSiteListMethods , entity { }
export interface browserSiteListProps {
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	publishedBy: ComplexTypes.identitySet;
	publishedDateTime: any;
	revision: string;
	status: EnumTypes.browserSiteListStatus;
}
export interface browserSiteListMethods {
	sharedCookies(): IBaseQuery<browserSharedCookie[]>;
	sharedCookies(id: string | number): IBaseQuery<browserSharedCookie>;
	sites(): IBaseQuery<browserSite[]>;
	sites(id: string | number): IBaseQuery<browserSite>;
}
/*********************************************
* internetExplorerMode
**********************************************/
export interface internetExplorerMode extends internetExplorerModeProps, internetExplorerModeMethods , entity { }
export interface internetExplorerModeProps {

}
export interface internetExplorerModeMethods {
	siteLists(): IBaseQuery<browserSiteList[]>;
	siteLists(id: string | number): IBaseQuery<browserSiteList>;
}
/*********************************************
* educationAssignment
**********************************************/
export interface educationAssignment extends educationAssignmentProps, educationAssignmentMethods , entity { }
export interface educationAssignmentProps {
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
	feedbackResourcesFolderUrl: string;
	grading: ComplexTypes.educationAssignmentGradeType;
	instructions: ComplexTypes.educationItemBody;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	moduleUrl: string;
	notificationChannelUrl: string;
	resourcesFolderUrl: string;
	status: EnumTypes.educationAssignmentStatus;
	webUrl: string;
}
export interface educationAssignmentMethods {
	categories(): IBaseQuery<educationCategory[]>;
	categories(id: string | number): IBaseQuery<educationCategory>;
	gradingCategory(): IBaseQuery<educationGradingCategory>;
	resources(): IBaseQuery<educationAssignmentResource[]>;
	resources(id: string | number): IBaseQuery<educationAssignmentResource>;
	rubric(): IBaseQuery<educationRubric>;
	submissions(): IBaseQuery<educationSubmission[]>;
	submissions(id: string | number): IBaseQuery<educationSubmission>;
}
/*********************************************
* educationCategory
**********************************************/
export interface educationCategory extends educationCategoryProps, educationCategoryMethods , entity { }
export interface educationCategoryProps {
	displayName: string;
}
export interface educationCategoryMethods {

}
/*********************************************
* educationGradingCategory
**********************************************/
export interface educationGradingCategory extends educationGradingCategoryProps, educationGradingCategoryMethods , entity { }
export interface educationGradingCategoryProps {
	displayName: string;
	percentageWeight: number;
}
export interface educationGradingCategoryMethods {

}
/*********************************************
* educationAssignmentResource
**********************************************/
export interface educationAssignmentResource extends educationAssignmentResourceProps, educationAssignmentResourceMethods , entity { }
export interface educationAssignmentResourceProps {
	distributeForStudentWork: boolean;
	resource: ComplexTypes.educationResource;
}
export interface educationAssignmentResourceMethods {

}
/*********************************************
* educationRubric
**********************************************/
export interface educationRubric extends educationRubricProps, educationRubricMethods , entity { }
export interface educationRubricProps {
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
export interface educationRubricMethods {

}
/*********************************************
* educationSubmission
**********************************************/
export interface educationSubmission extends educationSubmissionProps, educationSubmissionMethods , entity { }
export interface educationSubmissionProps {
	excusedBy: ComplexTypes.identitySet;
	excusedDateTime: any;
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
	webUrl: string;
}
export interface educationSubmissionMethods {
	outcomes(): IBaseQuery<educationOutcome[]>;
	outcomes(id: string | number): IBaseQuery<educationOutcome>;
	resources(): IBaseQuery<educationSubmissionResource[]>;
	resources(id: string | number): IBaseQuery<educationSubmissionResource>;
	submittedResources(): IBaseQuery<educationSubmissionResource[]>;
	submittedResources(id: string | number): IBaseQuery<educationSubmissionResource>;
}
/*********************************************
* educationAssignmentDefaults
**********************************************/
export interface educationAssignmentDefaults extends educationAssignmentDefaultsProps, educationAssignmentDefaultsMethods , entity { }
export interface educationAssignmentDefaultsProps {
	addedStudentAction: EnumTypes.educationAddedStudentAction;
	addToCalendarAction: EnumTypes.educationAddToCalendarOptions;
	dueTime: any;
	notificationChannelUrl: string;
}
export interface educationAssignmentDefaultsMethods {

}
/*********************************************
* educationAssignmentSettings
**********************************************/
export interface educationAssignmentSettings extends educationAssignmentSettingsProps, educationAssignmentSettingsMethods , entity { }
export interface educationAssignmentSettingsProps {
	submissionAnimationDisabled: boolean;
}
export interface educationAssignmentSettingsMethods {
	gradingCategories(): IBaseQuery<educationGradingCategory[]>;
	gradingCategories(id: string | number): IBaseQuery<educationGradingCategory>;
}
/*********************************************
* educationClass
**********************************************/
export interface educationClass extends educationClassProps, educationClassMethods , entity { }
export interface educationClassProps {
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
}
export interface educationClassMethods {
	assignmentCategories(): IBaseQuery<educationCategory[]>;
	assignmentCategories(id: string | number): IBaseQuery<educationCategory>;
	assignmentDefaults(): IBaseQuery<educationAssignmentDefaults>;
	assignments(): IBaseQuery<educationAssignment[]>;
	assignments(id: string | number): IBaseQuery<educationAssignment>;
	assignmentSettings(): IBaseQuery<educationAssignmentSettings>;
	modules(): IBaseQuery<educationModule[]>;
	modules(id: string | number): IBaseQuery<educationModule>;
	group(): IBaseQuery<group>;
	members(): IBaseQuery<educationUser[]>;
	members(id: string | number): IBaseQuery<educationUser>;
	schools(): IBaseQuery<educationSchool[]>;
	schools(id: string | number): IBaseQuery<educationSchool>;
	teachers(): IBaseQuery<educationUser[]>;
	teachers(id: string | number): IBaseQuery<educationUser>;
}
/*********************************************
* educationModule
**********************************************/
export interface educationModule extends educationModuleProps, educationModuleMethods , entity { }
export interface educationModuleProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
	isPinned: boolean;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	resourcesFolderUrl: string;
	status: EnumTypes.educationModuleStatus;
}
export interface educationModuleMethods {
	resources(): IBaseQuery<educationModuleResource[]>;
	resources(id: string | number): IBaseQuery<educationModuleResource>;
}
/*********************************************
* educationUser
**********************************************/
export interface educationUser extends educationUserProps, educationUserMethods , entity { }
export interface educationUserProps {
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
}
export interface educationUserMethods {
	assignments(): IBaseQuery<educationAssignment[]>;
	assignments(id: string | number): IBaseQuery<educationAssignment>;
	rubrics(): IBaseQuery<educationRubric[]>;
	rubrics(id: string | number): IBaseQuery<educationRubric>;
	classes(): IBaseQuery<educationClass[]>;
	classes(id: string | number): IBaseQuery<educationClass>;
	schools(): IBaseQuery<educationSchool[]>;
	schools(id: string | number): IBaseQuery<educationSchool>;
	taughtClasses(): IBaseQuery<educationClass[]>;
	taughtClasses(id: string | number): IBaseQuery<educationClass>;
	user(): IBaseQuery<user>;
}
/*********************************************
* educationOrganization
**********************************************/
export interface educationOrganization extends educationOrganizationProps, educationOrganizationMethods , entity { }
export interface educationOrganizationProps {
	description: string;
	displayName: string;
	externalSource: EnumTypes.educationExternalSource;
	externalSourceDetail: string;
}
export interface educationOrganizationMethods {

}
/*********************************************
* educationSchool
**********************************************/
export interface educationSchool extends educationSchoolProps, educationSchoolMethods , educationOrganization { }
export interface educationSchoolProps {
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
}
export interface educationSchoolMethods {
	administrativeUnit(): IBaseQuery<administrativeUnit>;
	classes(): IBaseQuery<educationClass[]>;
	classes(id: string | number): IBaseQuery<educationClass>;
	users(): IBaseQuery<educationUser[]>;
	users(id: string | number): IBaseQuery<educationUser>;
}
/*********************************************
* educationOutcome
**********************************************/
export interface educationOutcome extends educationOutcomeProps, educationOutcomeMethods , entity { }
export interface educationOutcomeProps {
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
}
export interface educationOutcomeMethods {

}
/*********************************************
* educationFeedbackOutcome
**********************************************/
export interface educationFeedbackOutcome extends educationFeedbackOutcomeProps, educationFeedbackOutcomeMethods , educationOutcome { }
export interface educationFeedbackOutcomeProps {
	feedback: ComplexTypes.educationFeedback;
	publishedFeedback: ComplexTypes.educationFeedback;
}
export interface educationFeedbackOutcomeMethods {

}
/*********************************************
* educationFeedbackResourceOutcome
**********************************************/
export interface educationFeedbackResourceOutcome extends educationFeedbackResourceOutcomeProps, educationFeedbackResourceOutcomeMethods , educationOutcome { }
export interface educationFeedbackResourceOutcomeProps {
	feedbackResource: ComplexTypes.educationResource;
	resourceStatus: EnumTypes.educationFeedbackResourceOutcomeStatus;
}
export interface educationFeedbackResourceOutcomeMethods {

}
/*********************************************
* educationModuleResource
**********************************************/
export interface educationModuleResource extends educationModuleResourceProps, educationModuleResourceMethods , entity { }
export interface educationModuleResourceProps {
	resource: ComplexTypes.educationResource;
}
export interface educationModuleResourceMethods {

}
/*********************************************
* educationPointsOutcome
**********************************************/
export interface educationPointsOutcome extends educationPointsOutcomeProps, educationPointsOutcomeMethods , educationOutcome { }
export interface educationPointsOutcomeProps {
	points: ComplexTypes.educationAssignmentPointsGrade;
	publishedPoints: ComplexTypes.educationAssignmentPointsGrade;
}
export interface educationPointsOutcomeMethods {

}
/*********************************************
* educationRoot
**********************************************/
export interface educationRoot extends educationRootProps, educationRootMethods  { }
export interface educationRootProps {

}
export interface educationRootMethods {
	classes(): IBaseQuery<educationClass[]>;
	classes(id: string | number): IBaseQuery<educationClass>;
	me(): IBaseQuery<educationUser>;
	schools(): IBaseQuery<educationSchool[]>;
	schools(id: string | number): IBaseQuery<educationSchool>;
	users(): IBaseQuery<educationUser[]>;
	users(id: string | number): IBaseQuery<educationUser>;
}
/*********************************************
* educationRubricOutcome
**********************************************/
export interface educationRubricOutcome extends educationRubricOutcomeProps, educationRubricOutcomeMethods , educationOutcome { }
export interface educationRubricOutcomeProps {
	publishedRubricQualityFeedback: ComplexTypes.rubricQualityFeedbackModel[];
	publishedRubricQualitySelectedLevels: ComplexTypes.rubricQualitySelectedColumnModel[];
	rubricQualityFeedback: ComplexTypes.rubricQualityFeedbackModel[];
	rubricQualitySelectedLevels: ComplexTypes.rubricQualitySelectedColumnModel[];
}
export interface educationRubricOutcomeMethods {

}
/*********************************************
* educationSubmissionResource
**********************************************/
export interface educationSubmissionResource extends educationSubmissionResourceProps, educationSubmissionResourceMethods , entity { }
export interface educationSubmissionResourceProps {
	assignmentResourceUrl: string;
	resource: ComplexTypes.educationResource;
}
export interface educationSubmissionResourceMethods {

}
/*********************************************
* restorePoint
**********************************************/
export interface restorePoint extends restorePointProps, restorePointMethods , entity { }
export interface restorePointProps {
	expirationDateTime: any;
	protectionDateTime: any;
	tags: EnumTypes.restorePointTags;
}
export interface restorePointMethods {
	protectionUnit(): IBaseQuery<protectionUnitBase>;
}
/*********************************************
* protectionRuleBase
**********************************************/
export interface protectionRuleBase extends protectionRuleBaseProps, protectionRuleBaseMethods , entity { }
export interface protectionRuleBaseProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	error: ComplexTypes.publicError;
	isAutoApplyEnabled: boolean;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	status: EnumTypes.protectionRuleStatus;
}
export interface protectionRuleBaseMethods {

}
/*********************************************
* driveProtectionRule
**********************************************/
export interface driveProtectionRule extends driveProtectionRuleProps, driveProtectionRuleMethods , protectionRuleBase { }
export interface driveProtectionRuleProps {
	driveExpression: string;
}
export interface driveProtectionRuleMethods {

}
/*********************************************
* protectionUnitBase
**********************************************/
export interface protectionUnitBase extends protectionUnitBaseProps, protectionUnitBaseMethods , entity { }
export interface protectionUnitBaseProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	error: ComplexTypes.publicError;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	policyId: string;
	status: EnumTypes.protectionUnitStatus;
}
export interface protectionUnitBaseMethods {

}
/*********************************************
* driveProtectionUnit
**********************************************/
export interface driveProtectionUnit extends driveProtectionUnitProps, driveProtectionUnitMethods , protectionUnitBase { }
export interface driveProtectionUnitProps {
	directoryObjectId: string;
	displayName: string;
	email: string;
}
export interface driveProtectionUnitMethods {

}
/*********************************************
* protectionPolicyBase
**********************************************/
export interface protectionPolicyBase extends protectionPolicyBaseProps, protectionPolicyBaseMethods , entity { }
export interface protectionPolicyBaseProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	retentionSettings: ComplexTypes.retentionSetting[];
	status: EnumTypes.protectionPolicyStatus;
}
export interface protectionPolicyBaseMethods {

}
/*********************************************
* exchangeProtectionPolicy
**********************************************/
export interface exchangeProtectionPolicy extends exchangeProtectionPolicyProps, exchangeProtectionPolicyMethods , protectionPolicyBase { }
export interface exchangeProtectionPolicyProps {

}
export interface exchangeProtectionPolicyMethods {
	mailboxInclusionRules(): IBaseQuery<mailboxProtectionRule[]>;
	mailboxInclusionRules(id: string | number): IBaseQuery<mailboxProtectionRule>;
	mailboxProtectionUnits(): IBaseQuery<mailboxProtectionUnit[]>;
	mailboxProtectionUnits(id: string | number): IBaseQuery<mailboxProtectionUnit>;
}
/*********************************************
* restoreSessionBase
**********************************************/
export interface restoreSessionBase extends restoreSessionBaseProps, restoreSessionBaseMethods , entity { }
export interface restoreSessionBaseProps {
	completedDateTime: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	error: ComplexTypes.publicError;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	status: EnumTypes.restoreSessionStatus;
}
export interface restoreSessionBaseMethods {

}
/*********************************************
* exchangeRestoreSession
**********************************************/
export interface exchangeRestoreSession extends exchangeRestoreSessionProps, exchangeRestoreSessionMethods , restoreSessionBase { }
export interface exchangeRestoreSessionProps {

}
export interface exchangeRestoreSessionMethods {
	granularMailboxRestoreArtifacts(): IBaseQuery<granularMailboxRestoreArtifact[]>;
	granularMailboxRestoreArtifacts(id: string | number): IBaseQuery<granularMailboxRestoreArtifact>;
	mailboxRestoreArtifacts(): IBaseQuery<mailboxRestoreArtifact[]>;
	mailboxRestoreArtifacts(id: string | number): IBaseQuery<mailboxRestoreArtifact>;
}
/*********************************************
* mailboxProtectionRule
**********************************************/
export interface mailboxProtectionRule extends mailboxProtectionRuleProps, mailboxProtectionRuleMethods , protectionRuleBase { }
export interface mailboxProtectionRuleProps {
	mailboxExpression: string;
}
export interface mailboxProtectionRuleMethods {

}
/*********************************************
* mailboxProtectionUnit
**********************************************/
export interface mailboxProtectionUnit extends mailboxProtectionUnitProps, mailboxProtectionUnitMethods , protectionUnitBase { }
export interface mailboxProtectionUnitProps {
	directoryObjectId: string;
	displayName: string;
	email: string;
}
export interface mailboxProtectionUnitMethods {

}
/*********************************************
* oneDriveForBusinessProtectionPolicy
**********************************************/
export interface oneDriveForBusinessProtectionPolicy extends oneDriveForBusinessProtectionPolicyProps, oneDriveForBusinessProtectionPolicyMethods , protectionPolicyBase { }
export interface oneDriveForBusinessProtectionPolicyProps {

}
export interface oneDriveForBusinessProtectionPolicyMethods {
	driveInclusionRules(): IBaseQuery<driveProtectionRule[]>;
	driveInclusionRules(id: string | number): IBaseQuery<driveProtectionRule>;
	driveProtectionUnits(): IBaseQuery<driveProtectionUnit[]>;
	driveProtectionUnits(id: string | number): IBaseQuery<driveProtectionUnit>;
}
/*********************************************
* oneDriveForBusinessRestoreSession
**********************************************/
export interface oneDriveForBusinessRestoreSession extends oneDriveForBusinessRestoreSessionProps, oneDriveForBusinessRestoreSessionMethods , restoreSessionBase { }
export interface oneDriveForBusinessRestoreSessionProps {

}
export interface oneDriveForBusinessRestoreSessionMethods {
	driveRestoreArtifacts(): IBaseQuery<driveRestoreArtifact[]>;
	driveRestoreArtifacts(id: string | number): IBaseQuery<driveRestoreArtifact>;
}
/*********************************************
* serviceApp
**********************************************/
export interface serviceApp extends serviceAppProps, serviceAppMethods , entity { }
export interface serviceAppProps {
	application: ComplexTypes.identity;
	effectiveDateTime: any;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	registrationDateTime: any;
	status: EnumTypes.serviceAppStatus;
}
export interface serviceAppMethods {

}
/*********************************************
* sharePointProtectionPolicy
**********************************************/
export interface sharePointProtectionPolicy extends sharePointProtectionPolicyProps, sharePointProtectionPolicyMethods , protectionPolicyBase { }
export interface sharePointProtectionPolicyProps {

}
export interface sharePointProtectionPolicyMethods {
	siteInclusionRules(): IBaseQuery<siteProtectionRule[]>;
	siteInclusionRules(id: string | number): IBaseQuery<siteProtectionRule>;
	siteProtectionUnits(): IBaseQuery<siteProtectionUnit[]>;
	siteProtectionUnits(id: string | number): IBaseQuery<siteProtectionUnit>;
}
/*********************************************
* sharePointRestoreSession
**********************************************/
export interface sharePointRestoreSession extends sharePointRestoreSessionProps, sharePointRestoreSessionMethods , restoreSessionBase { }
export interface sharePointRestoreSessionProps {

}
export interface sharePointRestoreSessionMethods {
	siteRestoreArtifacts(): IBaseQuery<siteRestoreArtifact[]>;
	siteRestoreArtifacts(id: string | number): IBaseQuery<siteRestoreArtifact>;
}
/*********************************************
* siteProtectionRule
**********************************************/
export interface siteProtectionRule extends siteProtectionRuleProps, siteProtectionRuleMethods , protectionRuleBase { }
export interface siteProtectionRuleProps {
	siteExpression: string;
}
export interface siteProtectionRuleMethods {

}
/*********************************************
* siteProtectionUnit
**********************************************/
export interface siteProtectionUnit extends siteProtectionUnitProps, siteProtectionUnitMethods , protectionUnitBase { }
export interface siteProtectionUnitProps {
	siteId: string;
	siteName: string;
	siteWebUrl: string;
}
export interface siteProtectionUnitMethods {

}
/*********************************************
* restoreArtifactBase
**********************************************/
export interface restoreArtifactBase extends restoreArtifactBaseProps, restoreArtifactBaseMethods , entity { }
export interface restoreArtifactBaseProps {
	completionDateTime: any;
	destinationType: EnumTypes.destinationType;
	error: ComplexTypes.publicError;
	startDateTime: any;
	status: EnumTypes.artifactRestoreStatus;
}
export interface restoreArtifactBaseMethods {
	restorePoint(): IBaseQuery<restorePoint>;
}
/*********************************************
* driveRestoreArtifact
**********************************************/
export interface driveRestoreArtifact extends driveRestoreArtifactProps, driveRestoreArtifactMethods , restoreArtifactBase { }
export interface driveRestoreArtifactProps {
	restoredSiteId: string;
	restoredSiteName: string;
	restoredSiteWebUrl: string;
}
export interface driveRestoreArtifactMethods {

}
/*********************************************
* mailboxRestoreArtifact
**********************************************/
export interface mailboxRestoreArtifact extends mailboxRestoreArtifactProps, mailboxRestoreArtifactMethods , restoreArtifactBase { }
export interface mailboxRestoreArtifactProps {
	restoredFolderId: string;
	restoredFolderName: string;
}
export interface mailboxRestoreArtifactMethods {

}
/*********************************************
* granularMailboxRestoreArtifact
**********************************************/
export interface granularMailboxRestoreArtifact extends granularMailboxRestoreArtifactProps, granularMailboxRestoreArtifactMethods , mailboxRestoreArtifact { }
export interface granularMailboxRestoreArtifactProps {
	artifactCount: number;
	searchResponseId: string;
}
export interface granularMailboxRestoreArtifactMethods {

}
/*********************************************
* siteRestoreArtifact
**********************************************/
export interface siteRestoreArtifact extends siteRestoreArtifactProps, siteRestoreArtifactMethods , restoreArtifactBase { }
export interface siteRestoreArtifactProps {
	restoredSiteId: string;
	restoredSiteName: string;
	restoredSiteWebUrl: string;
}
export interface siteRestoreArtifactMethods {

}
/*********************************************
* driveItem
**********************************************/
export interface driveItem extends driveItemProps, driveItemMethods , baseItem { }
export interface driveItemProps {
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
}
export interface driveItemMethods {
	workbook(): IBaseQuery<workbook>;
	analytics(): IBaseQuery<itemAnalytics>;
	children(): IBaseQuery<driveItem[]>;
	children(id: string | number): IBaseQuery<driveItem>;
	listItem(): IBaseQuery<listItem>;
	permissions(): IBaseQuery<permission[]>;
	permissions(id: string | number): IBaseQuery<permission>;
	retentionLabel(): IBaseQuery<itemRetentionLabel>;
	subscriptions(): IBaseQuery<subscription[]>;
	subscriptions(id: string | number): IBaseQuery<subscription>;
	thumbnails(): IBaseQuery<thumbnailSet[]>;
	thumbnails(id: string | number): IBaseQuery<thumbnailSet>;
	versions(): IBaseQuery<driveItemVersion[]>;
	versions(id: string | number): IBaseQuery<driveItemVersion>;
}
/*********************************************
* workbook
**********************************************/
export interface workbook extends workbookProps, workbookMethods , entity { }
export interface workbookProps {

}
export interface workbookMethods {
	application(): IBaseQuery<workbookApplication>;
	comments(): IBaseQuery<workbookComment[]>;
	comments(id: string | number): IBaseQuery<workbookComment>;
	functions(): IBaseQuery<workbookFunctions>;
	names(): IBaseQuery<workbookNamedItem[]>;
	names(id: string | number): IBaseQuery<workbookNamedItem>;
	operations(): IBaseQuery<workbookOperation[]>;
	operations(id: string | number): IBaseQuery<workbookOperation>;
	tables(): IBaseQuery<workbookTable[]>;
	tables(id: string | number): IBaseQuery<workbookTable>;
	worksheets(): IBaseQuery<workbookWorksheet[]>;
	worksheets(id: string | number): IBaseQuery<workbookWorksheet>;
}
/*********************************************
* listItem
**********************************************/
export interface listItem extends listItemProps, listItemMethods , baseItem { }
export interface listItemProps {
	contentType: ComplexTypes.contentTypeInfo;
	sharepointIds: ComplexTypes.sharepointIds;
}
export interface listItemMethods {
	analytics(): IBaseQuery<itemAnalytics>;
	documentSetVersions(): IBaseQuery<documentSetVersion[]>;
	documentSetVersions(id: string | number): IBaseQuery<documentSetVersion>;
	driveItem(): IBaseQuery<driveItem>;
	fields(): IBaseQuery<fieldValueSet>;
	versions(): IBaseQuery<listItemVersion[]>;
	versions(id: string | number): IBaseQuery<listItemVersion>;
	extractSensitivityLabel(values: any): IBaseQuery<void>;
	setSensitivityLabel(values: { actionSource?: string; assignmentMethod?: string; id: string; justificationText?: string; }): IBaseQuery<void>;
	update(values: any): IBaseQuery<void>;
}
/*********************************************
* itemRetentionLabel
**********************************************/
export interface itemRetentionLabel extends itemRetentionLabelProps, itemRetentionLabelMethods , entity { }
export interface itemRetentionLabelProps {
	isLabelAppliedExplicitly: boolean;
	labelAppliedBy: ComplexTypes.identitySet;
	labelAppliedDateTime: any;
	name: string;
	retentionSettings: ComplexTypes.retentionLabelSettings;
}
export interface itemRetentionLabelMethods {

}
/*********************************************
* subscription
**********************************************/
export interface subscription extends subscriptionProps, subscriptionMethods , entity { }
export interface subscriptionProps {
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
export interface subscriptionMethods {

}
/*********************************************
* thumbnailSet
**********************************************/
export interface thumbnailSet extends thumbnailSetProps, thumbnailSetMethods , entity { }
export interface thumbnailSetProps {
	large: ComplexTypes.thumbnail;
	medium: ComplexTypes.thumbnail;
	small: ComplexTypes.thumbnail;
	source: ComplexTypes.thumbnail;
}
export interface thumbnailSetMethods {

}
/*********************************************
* baseItemVersion
**********************************************/
export interface baseItemVersion extends baseItemVersionProps, baseItemVersionMethods , entity { }
export interface baseItemVersionProps {
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	publication: ComplexTypes.publicationFacet;
}
export interface baseItemVersionMethods {

}
/*********************************************
* driveItemVersion
**********************************************/
export interface driveItemVersion extends driveItemVersionProps, driveItemVersionMethods , baseItemVersion { }
export interface driveItemVersionProps {
	content: any;
	size: number;
}
export interface driveItemVersionMethods {

}
/*********************************************
* workbookApplication
**********************************************/
export interface workbookApplication extends workbookApplicationProps, workbookApplicationMethods , entity { }
export interface workbookApplicationProps {
	calculationMode: string;
}
export interface workbookApplicationMethods {

}
/*********************************************
* workbookComment
**********************************************/
export interface workbookComment extends workbookCommentProps, workbookCommentMethods , entity { }
export interface workbookCommentProps {
	content: string;
	contentType: string;
}
export interface workbookCommentMethods {
	replies(): IBaseQuery<workbookCommentReply[]>;
	replies(id: string | number): IBaseQuery<workbookCommentReply>;
}
/*********************************************
* workbookFunctions
**********************************************/
export interface workbookFunctions extends workbookFunctionsProps, workbookFunctionsMethods , entity { }
export interface workbookFunctionsProps {

}
export interface workbookFunctionsMethods {

}
/*********************************************
* workbookNamedItem
**********************************************/
export interface workbookNamedItem extends workbookNamedItemProps, workbookNamedItemMethods , entity { }
export interface workbookNamedItemProps {
	comment: string;
	name: string;
	scope: string;
	type: string;
	value: ComplexTypes.Json;
	visible: boolean;
}
export interface workbookNamedItemMethods {
	worksheet(): IBaseQuery<workbookWorksheet>;
}
/*********************************************
* workbookOperation
**********************************************/
export interface workbookOperation extends workbookOperationProps, workbookOperationMethods , entity { }
export interface workbookOperationProps {
	error: ComplexTypes.workbookOperationError;
	resourceLocation: string;
	status: EnumTypes.workbookOperationStatus;
}
export interface workbookOperationMethods {

}
/*********************************************
* workbookTable
**********************************************/
export interface workbookTable extends workbookTableProps, workbookTableMethods , entity { }
export interface workbookTableProps {
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
}
export interface workbookTableMethods {
	columns(): IBaseQuery<workbookTableColumn[]>;
	columns(id: string | number): IBaseQuery<workbookTableColumn>;
	rows(): IBaseQuery<workbookTableRow[]>;
	rows(id: string | number): IBaseQuery<workbookTableRow>;
	sort(): IBaseQuery<workbookTableSort>;
	worksheet(): IBaseQuery<workbookWorksheet>;
}
/*********************************************
* workbookWorksheet
**********************************************/
export interface workbookWorksheet extends workbookWorksheetProps, workbookWorksheetMethods , entity { }
export interface workbookWorksheetProps {
	name: string;
	position: number;
	visibility: string;
}
export interface workbookWorksheetMethods {
	charts(): IBaseQuery<workbookChart[]>;
	charts(id: string | number): IBaseQuery<workbookChart>;
	names(): IBaseQuery<workbookNamedItem[]>;
	names(id: string | number): IBaseQuery<workbookNamedItem>;
	pivotTables(): IBaseQuery<workbookPivotTable[]>;
	pivotTables(id: string | number): IBaseQuery<workbookPivotTable>;
	protection(): IBaseQuery<workbookWorksheetProtection>;
	tables(): IBaseQuery<workbookTable[]>;
	tables(id: string | number): IBaseQuery<workbookTable>;
}
/*********************************************
* workbookChart
**********************************************/
export interface workbookChart extends workbookChartProps, workbookChartMethods , entity { }
export interface workbookChartProps {
	height: number;
	left: number;
	name: string;
	top: number;
	width: number;
}
export interface workbookChartMethods {
	axes(): IBaseQuery<workbookChartAxes>;
	dataLabels(): IBaseQuery<workbookChartDataLabels>;
	format(): IBaseQuery<workbookChartAreaFormat>;
	legend(): IBaseQuery<workbookChartLegend>;
	series(): IBaseQuery<workbookChartSeries[]>;
	series(id: string | number): IBaseQuery<workbookChartSeries>;
	title(): IBaseQuery<workbookChartTitle>;
	worksheet(): IBaseQuery<workbookWorksheet>;
}
/*********************************************
* workbookChartAxes
**********************************************/
export interface workbookChartAxes extends workbookChartAxesProps, workbookChartAxesMethods , entity { }
export interface workbookChartAxesProps {

}
export interface workbookChartAxesMethods {
	categoryAxis(): IBaseQuery<workbookChartAxis>;
	seriesAxis(): IBaseQuery<workbookChartAxis>;
	valueAxis(): IBaseQuery<workbookChartAxis>;
}
/*********************************************
* workbookChartDataLabels
**********************************************/
export interface workbookChartDataLabels extends workbookChartDataLabelsProps, workbookChartDataLabelsMethods , entity { }
export interface workbookChartDataLabelsProps {
	position: string;
	separator: string;
	showBubbleSize: boolean;
	showCategoryName: boolean;
	showLegendKey: boolean;
	showPercentage: boolean;
	showSeriesName: boolean;
	showValue: boolean;
}
export interface workbookChartDataLabelsMethods {
	format(): IBaseQuery<workbookChartDataLabelFormat>;
}
/*********************************************
* workbookChartAreaFormat
**********************************************/
export interface workbookChartAreaFormat extends workbookChartAreaFormatProps, workbookChartAreaFormatMethods , entity { }
export interface workbookChartAreaFormatProps {

}
export interface workbookChartAreaFormatMethods {
	fill(): IBaseQuery<workbookChartFill>;
	font(): IBaseQuery<workbookChartFont>;
}
/*********************************************
* workbookChartLegend
**********************************************/
export interface workbookChartLegend extends workbookChartLegendProps, workbookChartLegendMethods , entity { }
export interface workbookChartLegendProps {
	overlay: boolean;
	position: string;
	visible: boolean;
}
export interface workbookChartLegendMethods {
	format(): IBaseQuery<workbookChartLegendFormat>;
}
/*********************************************
* workbookChartSeries
**********************************************/
export interface workbookChartSeries extends workbookChartSeriesProps, workbookChartSeriesMethods , entity { }
export interface workbookChartSeriesProps {
	name: string;
}
export interface workbookChartSeriesMethods {
	format(): IBaseQuery<workbookChartSeriesFormat>;
	points(): IBaseQuery<workbookChartPoint[]>;
	points(id: string | number): IBaseQuery<workbookChartPoint>;
}
/*********************************************
* workbookChartTitle
**********************************************/
export interface workbookChartTitle extends workbookChartTitleProps, workbookChartTitleMethods , entity { }
export interface workbookChartTitleProps {
	overlay: boolean;
	text: string;
	visible: boolean;
}
export interface workbookChartTitleMethods {
	format(): IBaseQuery<workbookChartTitleFormat>;
}
/*********************************************
* workbookChartFill
**********************************************/
export interface workbookChartFill extends workbookChartFillProps, workbookChartFillMethods , entity { }
export interface workbookChartFillProps {

}
export interface workbookChartFillMethods {

}
/*********************************************
* workbookChartFont
**********************************************/
export interface workbookChartFont extends workbookChartFontProps, workbookChartFontMethods , entity { }
export interface workbookChartFontProps {
	bold: boolean;
	color: string;
	italic: boolean;
	name: string;
	size: number;
	underline: string;
}
export interface workbookChartFontMethods {

}
/*********************************************
* workbookChartAxis
**********************************************/
export interface workbookChartAxis extends workbookChartAxisProps, workbookChartAxisMethods , entity { }
export interface workbookChartAxisProps {
	majorUnit: ComplexTypes.Json;
	maximum: ComplexTypes.Json;
	minimum: ComplexTypes.Json;
	minorUnit: ComplexTypes.Json;
}
export interface workbookChartAxisMethods {
	format(): IBaseQuery<workbookChartAxisFormat>;
	majorGridlines(): IBaseQuery<workbookChartGridlines>;
	minorGridlines(): IBaseQuery<workbookChartGridlines>;
	title(): IBaseQuery<workbookChartAxisTitle>;
}
/*********************************************
* workbookChartAxisFormat
**********************************************/
export interface workbookChartAxisFormat extends workbookChartAxisFormatProps, workbookChartAxisFormatMethods , entity { }
export interface workbookChartAxisFormatProps {

}
export interface workbookChartAxisFormatMethods {
	font(): IBaseQuery<workbookChartFont>;
	line(): IBaseQuery<workbookChartLineFormat>;
}
/*********************************************
* workbookChartGridlines
**********************************************/
export interface workbookChartGridlines extends workbookChartGridlinesProps, workbookChartGridlinesMethods , entity { }
export interface workbookChartGridlinesProps {
	visible: boolean;
}
export interface workbookChartGridlinesMethods {
	format(): IBaseQuery<workbookChartGridlinesFormat>;
}
/*********************************************
* workbookChartAxisTitle
**********************************************/
export interface workbookChartAxisTitle extends workbookChartAxisTitleProps, workbookChartAxisTitleMethods , entity { }
export interface workbookChartAxisTitleProps {
	text: string;
	visible: boolean;
}
export interface workbookChartAxisTitleMethods {
	format(): IBaseQuery<workbookChartAxisTitleFormat>;
}
/*********************************************
* workbookChartLineFormat
**********************************************/
export interface workbookChartLineFormat extends workbookChartLineFormatProps, workbookChartLineFormatMethods , entity { }
export interface workbookChartLineFormatProps {
	color: string;
}
export interface workbookChartLineFormatMethods {

}
/*********************************************
* workbookChartAxisTitleFormat
**********************************************/
export interface workbookChartAxisTitleFormat extends workbookChartAxisTitleFormatProps, workbookChartAxisTitleFormatMethods , entity { }
export interface workbookChartAxisTitleFormatProps {

}
export interface workbookChartAxisTitleFormatMethods {
	font(): IBaseQuery<workbookChartFont>;
}
/*********************************************
* workbookChartDataLabelFormat
**********************************************/
export interface workbookChartDataLabelFormat extends workbookChartDataLabelFormatProps, workbookChartDataLabelFormatMethods , entity { }
export interface workbookChartDataLabelFormatProps {

}
export interface workbookChartDataLabelFormatMethods {
	fill(): IBaseQuery<workbookChartFill>;
	font(): IBaseQuery<workbookChartFont>;
}
/*********************************************
* workbookChartGridlinesFormat
**********************************************/
export interface workbookChartGridlinesFormat extends workbookChartGridlinesFormatProps, workbookChartGridlinesFormatMethods , entity { }
export interface workbookChartGridlinesFormatProps {

}
export interface workbookChartGridlinesFormatMethods {
	line(): IBaseQuery<workbookChartLineFormat>;
}
/*********************************************
* workbookChartLegendFormat
**********************************************/
export interface workbookChartLegendFormat extends workbookChartLegendFormatProps, workbookChartLegendFormatMethods , entity { }
export interface workbookChartLegendFormatProps {

}
export interface workbookChartLegendFormatMethods {
	fill(): IBaseQuery<workbookChartFill>;
	font(): IBaseQuery<workbookChartFont>;
}
/*********************************************
* workbookChartPoint
**********************************************/
export interface workbookChartPoint extends workbookChartPointProps, workbookChartPointMethods , entity { }
export interface workbookChartPointProps {
	value: ComplexTypes.Json;
}
export interface workbookChartPointMethods {
	format(): IBaseQuery<workbookChartPointFormat>;
}
/*********************************************
* workbookChartPointFormat
**********************************************/
export interface workbookChartPointFormat extends workbookChartPointFormatProps, workbookChartPointFormatMethods , entity { }
export interface workbookChartPointFormatProps {

}
export interface workbookChartPointFormatMethods {
	fill(): IBaseQuery<workbookChartFill>;
}
/*********************************************
* workbookChartSeriesFormat
**********************************************/
export interface workbookChartSeriesFormat extends workbookChartSeriesFormatProps, workbookChartSeriesFormatMethods , entity { }
export interface workbookChartSeriesFormatProps {

}
export interface workbookChartSeriesFormatMethods {
	fill(): IBaseQuery<workbookChartFill>;
	line(): IBaseQuery<workbookChartLineFormat>;
}
/*********************************************
* workbookChartTitleFormat
**********************************************/
export interface workbookChartTitleFormat extends workbookChartTitleFormatProps, workbookChartTitleFormatMethods , entity { }
export interface workbookChartTitleFormatProps {

}
export interface workbookChartTitleFormatMethods {
	fill(): IBaseQuery<workbookChartFill>;
	font(): IBaseQuery<workbookChartFont>;
}
/*********************************************
* workbookCommentReply
**********************************************/
export interface workbookCommentReply extends workbookCommentReplyProps, workbookCommentReplyMethods , entity { }
export interface workbookCommentReplyProps {
	content: string;
	contentType: string;
}
export interface workbookCommentReplyMethods {

}
/*********************************************
* workbookFilter
**********************************************/
export interface workbookFilter extends workbookFilterProps, workbookFilterMethods , entity { }
export interface workbookFilterProps {
	criteria: ComplexTypes.workbookFilterCriteria;
}
export interface workbookFilterMethods {

}
/*********************************************
* workbookFormatProtection
**********************************************/
export interface workbookFormatProtection extends workbookFormatProtectionProps, workbookFormatProtectionMethods , entity { }
export interface workbookFormatProtectionProps {
	formulaHidden: boolean;
	locked: boolean;
}
export interface workbookFormatProtectionMethods {

}
/*********************************************
* workbookFunctionResult
**********************************************/
export interface workbookFunctionResult extends workbookFunctionResultProps, workbookFunctionResultMethods , entity { }
export interface workbookFunctionResultProps {
	error: string;
	value: ComplexTypes.Json;
}
export interface workbookFunctionResultMethods {

}
/*********************************************
* workbookPivotTable
**********************************************/
export interface workbookPivotTable extends workbookPivotTableProps, workbookPivotTableMethods , entity { }
export interface workbookPivotTableProps {
	name: string;
}
export interface workbookPivotTableMethods {
	worksheet(): IBaseQuery<workbookWorksheet>;
}
/*********************************************
* workbookRange
**********************************************/
export interface workbookRange extends workbookRangeProps, workbookRangeMethods , entity { }
export interface workbookRangeProps {
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
}
export interface workbookRangeMethods {
	format(): IBaseQuery<workbookRangeFormat>;
	sort(): IBaseQuery<workbookRangeSort>;
	worksheet(): IBaseQuery<workbookWorksheet>;
}
/*********************************************
* workbookRangeFormat
**********************************************/
export interface workbookRangeFormat extends workbookRangeFormatProps, workbookRangeFormatMethods , entity { }
export interface workbookRangeFormatProps {
	columnWidth: number;
	horizontalAlignment: string;
	rowHeight: number;
	verticalAlignment: string;
	wrapText: boolean;
}
export interface workbookRangeFormatMethods {
	borders(): IBaseQuery<workbookRangeBorder[]>;
	borders(id: string | number): IBaseQuery<workbookRangeBorder>;
	fill(): IBaseQuery<workbookRangeFill>;
	font(): IBaseQuery<workbookRangeFont>;
	protection(): IBaseQuery<workbookFormatProtection>;
}
/*********************************************
* workbookRangeSort
**********************************************/
export interface workbookRangeSort extends workbookRangeSortProps, workbookRangeSortMethods , entity { }
export interface workbookRangeSortProps {

}
export interface workbookRangeSortMethods {

}
/*********************************************
* workbookRangeBorder
**********************************************/
export interface workbookRangeBorder extends workbookRangeBorderProps, workbookRangeBorderMethods , entity { }
export interface workbookRangeBorderProps {
	color: string;
	sideIndex: string;
	style: string;
	weight: string;
}
export interface workbookRangeBorderMethods {

}
/*********************************************
* workbookRangeFill
**********************************************/
export interface workbookRangeFill extends workbookRangeFillProps, workbookRangeFillMethods , entity { }
export interface workbookRangeFillProps {
	color: string;
}
export interface workbookRangeFillMethods {

}
/*********************************************
* workbookRangeFont
**********************************************/
export interface workbookRangeFont extends workbookRangeFontProps, workbookRangeFontMethods , entity { }
export interface workbookRangeFontProps {
	bold: boolean;
	color: string;
	italic: boolean;
	name: string;
	size: number;
	underline: string;
}
export interface workbookRangeFontMethods {

}
/*********************************************
* workbookRangeView
**********************************************/
export interface workbookRangeView extends workbookRangeViewProps, workbookRangeViewMethods , entity { }
export interface workbookRangeViewProps {
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
}
export interface workbookRangeViewMethods {
	rows(): IBaseQuery<workbookRangeView[]>;
	rows(id: string | number): IBaseQuery<workbookRangeView>;
}
/*********************************************
* workbookTableColumn
**********************************************/
export interface workbookTableColumn extends workbookTableColumnProps, workbookTableColumnMethods , entity { }
export interface workbookTableColumnProps {
	index: number;
	name: string;
	values: ComplexTypes.Json;
}
export interface workbookTableColumnMethods {
	filter(): IBaseQuery<workbookFilter>;
}
/*********************************************
* workbookTableRow
**********************************************/
export interface workbookTableRow extends workbookTableRowProps, workbookTableRowMethods , entity { }
export interface workbookTableRowProps {
	index: number;
	values: ComplexTypes.Json;
}
export interface workbookTableRowMethods {

}
/*********************************************
* workbookTableSort
**********************************************/
export interface workbookTableSort extends workbookTableSortProps, workbookTableSortMethods , entity { }
export interface workbookTableSortProps {
	fields: ComplexTypes.workbookSortField[];
	matchCase: boolean;
	method: string;
}
export interface workbookTableSortMethods {

}
/*********************************************
* workbookWorksheetProtection
**********************************************/
export interface workbookWorksheetProtection extends workbookWorksheetProtectionProps, workbookWorksheetProtectionMethods , entity { }
export interface workbookWorksheetProtectionProps {
	options: ComplexTypes.workbookWorksheetProtectionOptions;
	protected: boolean;
}
export interface workbookWorksheetProtectionMethods {

}
/*********************************************
* place
**********************************************/
export interface place extends placeProps, placeMethods , entity { }
export interface placeProps {
	address: ComplexTypes.physicalAddress;
	displayName: string;
	geoCoordinates: ComplexTypes.outlookGeoCoordinates;
	phone: string;
}
export interface placeMethods {

}
/*********************************************
* room
**********************************************/
export interface room extends roomProps, roomMethods , place { }
export interface roomProps {
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
export interface roomMethods {

}
/*********************************************
* roomList
**********************************************/
export interface roomList extends roomListProps, roomListMethods , place { }
export interface roomListProps {
	emailAddress: string;
}
export interface roomListMethods {
	rooms(): IBaseQuery<room[]>;
	rooms(id: string | number): IBaseQuery<room>;
}
/*********************************************
* attachment
**********************************************/
export interface attachment extends attachmentProps, attachmentMethods , entity { }
export interface attachmentProps {
	contentType: string;
	isInline: boolean;
	lastModifiedDateTime: any;
	name: string;
	size: number;
}
export interface attachmentMethods {

}
/*********************************************
* calendarPermission
**********************************************/
export interface calendarPermission extends calendarPermissionProps, calendarPermissionMethods , entity { }
export interface calendarPermissionProps {
	allowedRoles: EnumTypes.calendarRoleType[];
	emailAddress: ComplexTypes.emailAddress;
	isInsideOrganization: boolean;
	isRemovable: boolean;
	role: EnumTypes.calendarRoleType;
}
export interface calendarPermissionMethods {

}
/*********************************************
* multiValueLegacyExtendedProperty
**********************************************/
export interface multiValueLegacyExtendedProperty extends multiValueLegacyExtendedPropertyProps, multiValueLegacyExtendedPropertyMethods , entity { }
export interface multiValueLegacyExtendedPropertyProps {
	value: Array<string>[];
}
export interface multiValueLegacyExtendedPropertyMethods {

}
/*********************************************
* singleValueLegacyExtendedProperty
**********************************************/
export interface singleValueLegacyExtendedProperty extends singleValueLegacyExtendedPropertyProps, singleValueLegacyExtendedPropertyMethods , entity { }
export interface singleValueLegacyExtendedPropertyProps {
	value: string;
}
export interface singleValueLegacyExtendedPropertyMethods {

}
/*********************************************
* calendarSharingMessage
**********************************************/
export interface calendarSharingMessage extends calendarSharingMessageProps, calendarSharingMessageMethods , message { }
export interface calendarSharingMessageProps {
	canAccept: boolean;
	sharingMessageAction: ComplexTypes.calendarSharingMessageAction;
	sharingMessageActions: ComplexTypes.calendarSharingMessageAction[];
	suggestedCalendarName: string;
}
export interface calendarSharingMessageMethods {

}
/*********************************************
* post
**********************************************/
export interface post extends postProps, postMethods , outlookItem { }
export interface postProps {
	body: ComplexTypes.itemBody;
	conversationId: string;
	conversationThreadId: string;
	from: ComplexTypes.recipient;
	hasAttachments: boolean;
	newParticipants: ComplexTypes.recipient[];
	receivedDateTime: any;
	sender: ComplexTypes.recipient;
}
export interface postMethods {
	attachments(): IBaseQuery<attachment[]>;
	attachments(id: string | number): IBaseQuery<attachment>;
	extensions(): IBaseQuery<extension[]>;
	extensions(id: string | number): IBaseQuery<extension>;
	inReplyTo(): IBaseQuery<post>;
	multiValueExtendedProperties(): IBaseQuery<multiValueLegacyExtendedProperty[]>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty>;
	singleValueExtendedProperties(): IBaseQuery<singleValueLegacyExtendedProperty[]>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty>;
}
/*********************************************
* eventMessage
**********************************************/
export interface eventMessage extends eventMessageProps, eventMessageMethods , message { }
export interface eventMessageProps {
	endDateTime: ComplexTypes.dateTimeTimeZone;
	isAllDay: boolean;
	isDelegated: boolean;
	isOutOfDate: boolean;
	location: ComplexTypes.location;
	meetingMessageType: EnumTypes.meetingMessageType;
	recurrence: ComplexTypes.patternedRecurrence;
	startDateTime: ComplexTypes.dateTimeTimeZone;
	type: EnumTypes.eventType;
}
export interface eventMessageMethods {
	event(): IBaseQuery<event>;
}
/*********************************************
* eventMessageRequest
**********************************************/
export interface eventMessageRequest extends eventMessageRequestProps, eventMessageRequestMethods , eventMessage { }
export interface eventMessageRequestProps {
	allowNewTimeProposals: boolean;
	meetingRequestType: EnumTypes.meetingRequestType;
	previousEndDateTime: ComplexTypes.dateTimeTimeZone;
	previousLocation: ComplexTypes.location;
	previousStartDateTime: ComplexTypes.dateTimeTimeZone;
	responseRequested: boolean;
}
export interface eventMessageRequestMethods {

}
/*********************************************
* eventMessageResponse
**********************************************/
export interface eventMessageResponse extends eventMessageResponseProps, eventMessageResponseMethods , eventMessage { }
export interface eventMessageResponseProps {
	proposedNewTime: ComplexTypes.timeSlot;
	responseType: EnumTypes.responseType;
}
export interface eventMessageResponseMethods {

}
/*********************************************
* fileAttachment
**********************************************/
export interface fileAttachment extends fileAttachmentProps, fileAttachmentMethods , attachment { }
export interface fileAttachmentProps {
	contentBytes: any;
	contentId: string;
	contentLocation: string;
}
export interface fileAttachmentMethods {

}
/*********************************************
* inferenceClassificationOverride
**********************************************/
export interface inferenceClassificationOverride extends inferenceClassificationOverrideProps, inferenceClassificationOverrideMethods , entity { }
export interface inferenceClassificationOverrideProps {
	classifyAs: EnumTypes.inferenceClassificationType;
	senderEmailAddress: ComplexTypes.emailAddress;
}
export interface inferenceClassificationOverrideMethods {

}
/*********************************************
* itemAttachment
**********************************************/
export interface itemAttachment extends itemAttachmentProps, itemAttachmentMethods , attachment { }
export interface itemAttachmentProps {

}
export interface itemAttachmentMethods {
	item(): IBaseQuery<outlookItem>;
}
/*********************************************
* messageRule
**********************************************/
export interface messageRule extends messageRuleProps, messageRuleMethods , entity { }
export interface messageRuleProps {
	actions: ComplexTypes.messageRuleActions;
	conditions: ComplexTypes.messageRulePredicates;
	displayName: string;
	exceptions: ComplexTypes.messageRulePredicates;
	hasError: boolean;
	isEnabled: boolean;
	isReadOnly: boolean;
	sequence: number;
}
export interface messageRuleMethods {

}
/*********************************************
* mailSearchFolder
**********************************************/
export interface mailSearchFolder extends mailSearchFolderProps, mailSearchFolderMethods , mailFolder { }
export interface mailSearchFolderProps {
	filterQuery: string;
	includeNestedFolders: boolean;
	isSupported: boolean;
	sourceFolderIds: Array<string>[];
}
export interface mailSearchFolderMethods {

}
/*********************************************
* openTypeExtension
**********************************************/
export interface openTypeExtension extends openTypeExtensionProps, openTypeExtensionMethods , extension { }
export interface openTypeExtensionProps {
	extensionName: string;
}
export interface openTypeExtensionMethods {

}
/*********************************************
* outlookCategory
**********************************************/
export interface outlookCategory extends outlookCategoryProps, outlookCategoryMethods , entity { }
export interface outlookCategoryProps {
	color: EnumTypes.categoryColor;
	displayName: string;
}
export interface outlookCategoryMethods {

}
/*********************************************
* referenceAttachment
**********************************************/
export interface referenceAttachment extends referenceAttachmentProps, referenceAttachmentMethods , attachment { }
export interface referenceAttachmentProps {

}
export interface referenceAttachmentMethods {

}
/*********************************************
* fileStorage
**********************************************/
export interface fileStorage extends fileStorageProps, fileStorageMethods , entity { }
export interface fileStorageProps {

}
export interface fileStorageMethods {
	containers(): IBaseQuery<fileStorageContainer[]>;
	containers(id: string | number): IBaseQuery<fileStorageContainer>;
}
/*********************************************
* fileStorageContainer
**********************************************/
export interface fileStorageContainer extends fileStorageContainerProps, fileStorageContainerMethods , entity { }
export interface fileStorageContainerProps {
	containerTypeId: any;
	createdDateTime: any;
	customProperties: ComplexTypes.fileStorageContainerCustomPropertyDictionary;
	description: string;
	displayName: string;
	settings: ComplexTypes.fileStorageContainerSettings;
	status: EnumTypes.fileStorageContainerStatus;
	viewpoint: ComplexTypes.fileStorageContainerViewpoint;
}
export interface fileStorageContainerMethods {
	drive(): IBaseQuery<drive>;
	permissions(): IBaseQuery<permission[]>;
	permissions(id: string | number): IBaseQuery<permission>;
}
/*********************************************
* sharepointSettings
**********************************************/
export interface sharepointSettings extends sharepointSettingsProps, sharepointSettingsMethods , entity { }
export interface sharepointSettingsProps {
	allowedDomainGuidsForSyncApp: Array<any>[];
	availableManagedPathsForSiteCreation: Array<string>[];
	deletedUserPersonalSiteRetentionPeriodInDays: number;
	excludedFileExtensionsForSyncApp: Array<string>[];
	idleSessionSignOut: ComplexTypes.idleSessionSignOut;
	imageTaggingOption: EnumTypes.imageTaggingChoice;
	isCommentingOnSitePagesEnabled: boolean;
	isFileActivityNotificationEnabled: boolean;
	isLegacyAuthProtocolsEnabled: boolean;
	isLoopEnabled: boolean;
	isMacSyncAppEnabled: boolean;
	isRequireAcceptingUserToMatchInvitedUserEnabled: boolean;
	isResharingByExternalUsersEnabled: boolean;
	isSharePointMobileNotificationEnabled: boolean;
	isSharePointNewsfeedEnabled: boolean;
	isSiteCreationEnabled: boolean;
	isSiteCreationUIEnabled: boolean;
	isSitePagesCreationEnabled: boolean;
	isSitesStorageLimitAutomatic: boolean;
	isSyncButtonHiddenOnPersonalSite: boolean;
	isUnmanagedSyncAppForTenantRestricted: boolean;
	personalSiteDefaultStorageLimitInMB: number;
	sharingAllowedDomainList: Array<string>[];
	sharingBlockedDomainList: Array<string>[];
	sharingCapability: EnumTypes.sharingCapabilities;
	sharingDomainRestrictionMode: EnumTypes.sharingDomainRestrictionMode;
	siteCreationDefaultManagedPath: string;
	siteCreationDefaultStorageLimitInMB: number;
	tenantDefaultTimezone: string;
}
export interface sharepointSettingsMethods {

}
/*********************************************
* storage
**********************************************/
export interface storage extends storageProps, storageMethods  { }
export interface storageProps {

}
export interface storageMethods {
	fileStorage(): IBaseQuery<fileStorage>;
	settings(): IBaseQuery<storageSettings>;
}
/*********************************************
* storageSettings
**********************************************/
export interface storageSettings extends storageSettingsProps, storageSettingsMethods , entity { }
export interface storageSettingsProps {

}
export interface storageSettingsMethods {
	quota(): IBaseQuery<unifiedStorageQuota>;
}
/*********************************************
* canvasLayout
**********************************************/
export interface canvasLayout extends canvasLayoutProps, canvasLayoutMethods , entity { }
export interface canvasLayoutProps {

}
export interface canvasLayoutMethods {
	horizontalSections(): IBaseQuery<horizontalSection[]>;
	horizontalSections(id: string | number): IBaseQuery<horizontalSection>;
	verticalSection(): IBaseQuery<verticalSection>;
}
/*********************************************
* horizontalSection
**********************************************/
export interface horizontalSection extends horizontalSectionProps, horizontalSectionMethods , entity { }
export interface horizontalSectionProps {
	emphasis: EnumTypes.sectionEmphasisType;
	layout: EnumTypes.horizontalSectionLayoutType;
}
export interface horizontalSectionMethods {
	columns(): IBaseQuery<horizontalSectionColumn[]>;
	columns(id: string | number): IBaseQuery<horizontalSectionColumn>;
}
/*********************************************
* verticalSection
**********************************************/
export interface verticalSection extends verticalSectionProps, verticalSectionMethods , entity { }
export interface verticalSectionProps {
	emphasis: EnumTypes.sectionEmphasisType;
}
export interface verticalSectionMethods {
	webparts(): IBaseQuery<webPart[]>;
	webparts(id: string | number): IBaseQuery<webPart>;
}
/*********************************************
* columnLink
**********************************************/
export interface columnLink extends columnLinkProps, columnLinkMethods , entity { }
export interface columnLinkProps {
	name: string;
}
export interface columnLinkMethods {

}
/*********************************************
* listItemVersion
**********************************************/
export interface listItemVersion extends listItemVersionProps, listItemVersionMethods , baseItemVersion { }
export interface listItemVersionProps {

}
export interface listItemVersionMethods {
	fields(): IBaseQuery<fieldValueSet>;
}
/*********************************************
* documentSetVersion
**********************************************/
export interface documentSetVersion extends documentSetVersionProps, documentSetVersionMethods , listItemVersion { }
export interface documentSetVersionProps {
	comment: string;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	items: ComplexTypes.documentSetVersionItem[];
	shouldCaptureMinorVersion: boolean;
}
export interface documentSetVersionMethods {

}
/*********************************************
* fieldValueSet
**********************************************/
export interface fieldValueSet extends fieldValueSetProps, fieldValueSetMethods , entity { }
export interface fieldValueSetProps {

}
export interface fieldValueSetMethods {

}
/*********************************************
* horizontalSectionColumn
**********************************************/
export interface horizontalSectionColumn extends horizontalSectionColumnProps, horizontalSectionColumnMethods , entity { }
export interface horizontalSectionColumnProps {
	width: number;
}
export interface horizontalSectionColumnMethods {
	webparts(): IBaseQuery<webPart[]>;
	webparts(id: string | number): IBaseQuery<webPart>;
}
/*********************************************
* webPart
**********************************************/
export interface webPart extends webPartProps, webPartMethods , entity { }
export interface webPartProps {

}
export interface webPartMethods {

}
/*********************************************
* itemActivity
**********************************************/
export interface itemActivity extends itemActivityProps, itemActivityMethods , entity { }
export interface itemActivityProps {
	access: ComplexTypes.accessAction;
	activityDateTime: any;
	actor: ComplexTypes.identitySet;
}
export interface itemActivityMethods {
	driveItem(): IBaseQuery<driveItem>;
}
/*********************************************
* itemActivityStat
**********************************************/
export interface itemActivityStat extends itemActivityStatProps, itemActivityStatMethods , entity { }
export interface itemActivityStatProps {
	access: ComplexTypes.itemActionStat;
	create: ComplexTypes.itemActionStat;
	delete: ComplexTypes.itemActionStat;
	edit: ComplexTypes.itemActionStat;
	endDateTime: any;
	incompleteData: ComplexTypes.incompleteData;
	isTrending: boolean;
	move: ComplexTypes.itemActionStat;
	startDateTime: any;
}
export interface itemActivityStatMethods {
	activities(): IBaseQuery<itemActivity[]>;
	activities(id: string | number): IBaseQuery<itemActivity>;
}
/*********************************************
* sharedDriveItem
**********************************************/
export interface sharedDriveItem extends sharedDriveItemProps, sharedDriveItemMethods , baseItem { }
export interface sharedDriveItemProps {
	owner: ComplexTypes.identitySet;
}
export interface sharedDriveItemMethods {
	driveItem(): IBaseQuery<driveItem>;
	items(): IBaseQuery<driveItem[]>;
	items(id: string | number): IBaseQuery<driveItem>;
	list(): IBaseQuery<list>;
	listItem(): IBaseQuery<listItem>;
	permission(): IBaseQuery<permission>;
	root(): IBaseQuery<driveItem>;
	site(): IBaseQuery<site>;
}
/*********************************************
* sitePage
**********************************************/
export interface sitePage extends sitePageProps, sitePageMethods , baseSitePage { }
export interface sitePageProps {
	promotionKind: EnumTypes.pagePromotionType;
	reactions: ComplexTypes.reactionsFacet;
	showComments: boolean;
	showRecommendedPages: boolean;
	thumbnailWebUrl: string;
	titleArea: ComplexTypes.titleArea;
}
export interface sitePageMethods {
	canvasLayout(): IBaseQuery<canvasLayout>;
	webParts(): IBaseQuery<webPart[]>;
	webParts(id: string | number): IBaseQuery<webPart>;
}
/*********************************************
* standardWebPart
**********************************************/
export interface standardWebPart extends standardWebPartProps, standardWebPartMethods , webPart { }
export interface standardWebPartProps {
	containerTextWebPartId: string;
	data: ComplexTypes.webPartData;
	webPartType: string;
}
export interface standardWebPartMethods {

}
/*********************************************
* textWebPart
**********************************************/
export interface textWebPart extends textWebPartProps, textWebPartMethods , webPart { }
export interface textWebPartProps {
	innerHtml: string;
}
export interface textWebPartMethods {

}
/*********************************************
* callRecording
**********************************************/
export interface callRecording extends callRecordingProps, callRecordingMethods , entity { }
export interface callRecordingProps {
	callId: string;
	content: any;
	contentCorrelationId: string;
	createdDateTime: any;
	endDateTime: any;
	meetingId: string;
	meetingOrganizer: ComplexTypes.identitySet;
	recordingContentUrl: string;
}
export interface callRecordingMethods {

}
/*********************************************
* callTranscript
**********************************************/
export interface callTranscript extends callTranscriptProps, callTranscriptMethods , entity { }
export interface callTranscriptProps {
	callId: string;
	content: any;
	contentCorrelationId: string;
	createdDateTime: any;
	endDateTime: any;
	meetingId: string;
	meetingOrganizer: ComplexTypes.identitySet;
	metadataContent: any;
	transcriptContentUrl: string;
}
export interface callTranscriptMethods {

}
/*********************************************
* schemaExtension
**********************************************/
export interface schemaExtension extends schemaExtensionProps, schemaExtensionMethods , entity { }
export interface schemaExtensionProps {
	description: string;
	owner: string;
	properties: ComplexTypes.extensionSchemaProperty[];
	status: string;
	targetTypes: Array<string>[];
}
export interface schemaExtensionMethods {

}
/*********************************************
* attributeMappingFunctionSchema
**********************************************/
export interface attributeMappingFunctionSchema extends attributeMappingFunctionSchemaProps, attributeMappingFunctionSchemaMethods , entity { }
export interface attributeMappingFunctionSchemaProps {
	parameters: ComplexTypes.attributeMappingParameterSchema[];
}
export interface attributeMappingFunctionSchemaMethods {

}
/*********************************************
* bulkUpload
**********************************************/
export interface bulkUpload extends bulkUploadProps, bulkUploadMethods , entity { }
export interface bulkUploadProps {

}
export interface bulkUploadMethods {

}
/*********************************************
* directoryDefinition
**********************************************/
export interface directoryDefinition extends directoryDefinitionProps, directoryDefinitionMethods , entity { }
export interface directoryDefinitionProps {
	discoverabilities: EnumTypes.directoryDefinitionDiscoverabilities;
	discoveryDateTime: any;
	name: string;
	objects: ComplexTypes.objectDefinition[];
	readOnly: boolean;
	version: string;
}
export interface directoryDefinitionMethods {

}
/*********************************************
* filterOperatorSchema
**********************************************/
export interface filterOperatorSchema extends filterOperatorSchemaProps, filterOperatorSchemaMethods , entity { }
export interface filterOperatorSchemaProps {
	arity: EnumTypes.scopeOperatorType;
	multivaluedComparisonType: EnumTypes.scopeOperatorMultiValuedComparisonType;
	supportedAttributeTypes: EnumTypes.attributeType[];
}
export interface filterOperatorSchemaMethods {

}
/*********************************************
* synchronizationJob
**********************************************/
export interface synchronizationJob extends synchronizationJobProps, synchronizationJobMethods , entity { }
export interface synchronizationJobProps {
	schedule: ComplexTypes.synchronizationSchedule;
	status: ComplexTypes.synchronizationStatus;
	synchronizationJobSettings: ComplexTypes.keyValuePair[];
	templateId: string;
}
export interface synchronizationJobMethods {
	bulkUpload(): IBaseQuery<bulkUpload>;
	schema(): IBaseQuery<synchronizationSchema>;
}
/*********************************************
* synchronizationTemplate
**********************************************/
export interface synchronizationTemplate extends synchronizationTemplateProps, synchronizationTemplateMethods , entity { }
export interface synchronizationTemplateProps {
	applicationId: any;
	default: boolean;
	description: string;
	discoverable: boolean;
	factoryTag: string;
	metadata: ComplexTypes.synchronizationMetadataEntry[];
}
export interface synchronizationTemplateMethods {
	schema(): IBaseQuery<synchronizationSchema>;
}
/*********************************************
* synchronizationSchema
**********************************************/
export interface synchronizationSchema extends synchronizationSchemaProps, synchronizationSchemaMethods , entity { }
export interface synchronizationSchemaProps {
	synchronizationRules: ComplexTypes.synchronizationRule[];
	version: string;
}
export interface synchronizationSchemaMethods {
	directories(): IBaseQuery<directoryDefinition[]>;
	directories(id: string | number): IBaseQuery<directoryDefinition>;
}
/*********************************************
* cloudCommunications
**********************************************/
export interface cloudCommunications extends cloudCommunicationsProps, cloudCommunicationsMethods  { }
export interface cloudCommunicationsProps {

}
export interface cloudCommunicationsMethods {
	callRecords(): IBaseQuery<callRecord[]>;
	callRecords(id: string | number): IBaseQuery<callRecord>;
	calls(): IBaseQuery<call[]>;
	calls(id: string | number): IBaseQuery<call>;
	onlineMeetings(): IBaseQuery<onlineMeeting[]>;
	onlineMeetings(id: string | number): IBaseQuery<onlineMeeting>;
	presences(): IBaseQuery<presence[]>;
	presences(id: string | number): IBaseQuery<presence>;
}
/*********************************************
* call
**********************************************/
export interface call extends callProps, callMethods , entity { }
export interface callProps {
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
}
export interface callMethods {
	audioRoutingGroups(): IBaseQuery<audioRoutingGroup[]>;
	audioRoutingGroups(id: string | number): IBaseQuery<audioRoutingGroup>;
	contentSharingSessions(): IBaseQuery<contentSharingSession[]>;
	contentSharingSessions(id: string | number): IBaseQuery<contentSharingSession>;
	operations(): IBaseQuery<commsOperation[]>;
	operations(id: string | number): IBaseQuery<commsOperation>;
	participants(): IBaseQuery<participant[]>;
	participants(id: string | number): IBaseQuery<participant>;
}
/*********************************************
* accessReviewHistoryDefinition
**********************************************/
export interface accessReviewHistoryDefinition extends accessReviewHistoryDefinitionProps, accessReviewHistoryDefinitionMethods , entity { }
export interface accessReviewHistoryDefinitionProps {
	createdBy: ComplexTypes.userIdentity;
	createdDateTime: any;
	decisions: EnumTypes.accessReviewHistoryDecisionFilter[];
	displayName: string;
	reviewHistoryPeriodEndDateTime: any;
	reviewHistoryPeriodStartDateTime: any;
	scheduleSettings: ComplexTypes.accessReviewHistoryScheduleSettings;
	scopes: ComplexTypes.accessReviewScope[];
	status: EnumTypes.accessReviewHistoryStatus;
}
export interface accessReviewHistoryDefinitionMethods {
	instances(): IBaseQuery<accessReviewHistoryInstance[]>;
	instances(id: string | number): IBaseQuery<accessReviewHistoryInstance>;
}
/*********************************************
* accessReviewHistoryInstance
**********************************************/
export interface accessReviewHistoryInstance extends accessReviewHistoryInstanceProps, accessReviewHistoryInstanceMethods , entity { }
export interface accessReviewHistoryInstanceProps {
	downloadUri: string;
	expirationDateTime: any;
	fulfilledDateTime: any;
	reviewHistoryPeriodEndDateTime: any;
	reviewHistoryPeriodStartDateTime: any;
	runDateTime: any;
	status: EnumTypes.accessReviewHistoryStatus;
}
export interface accessReviewHistoryInstanceMethods {

}
/*********************************************
* accessReviewInstance
**********************************************/
export interface accessReviewInstance extends accessReviewInstanceProps, accessReviewInstanceMethods , entity { }
export interface accessReviewInstanceProps {
	endDateTime: any;
	fallbackReviewers: ComplexTypes.accessReviewReviewerScope[];
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	scope: ComplexTypes.accessReviewScope;
	startDateTime: any;
	status: string;
}
export interface accessReviewInstanceMethods {
	contactedReviewers(): IBaseQuery<accessReviewReviewer[]>;
	contactedReviewers(id: string | number): IBaseQuery<accessReviewReviewer>;
	decisions(): IBaseQuery<accessReviewInstanceDecisionItem[]>;
	decisions(id: string | number): IBaseQuery<accessReviewInstanceDecisionItem>;
	stages(): IBaseQuery<accessReviewStage[]>;
	stages(id: string | number): IBaseQuery<accessReviewStage>;
}
/*********************************************
* accessReviewReviewer
**********************************************/
export interface accessReviewReviewer extends accessReviewReviewerProps, accessReviewReviewerMethods , entity { }
export interface accessReviewReviewerProps {
	createdDateTime: any;
	displayName: string;
	userPrincipalName: string;
}
export interface accessReviewReviewerMethods {

}
/*********************************************
* accessReviewInstanceDecisionItem
**********************************************/
export interface accessReviewInstanceDecisionItem extends accessReviewInstanceDecisionItemProps, accessReviewInstanceDecisionItemMethods , entity { }
export interface accessReviewInstanceDecisionItemProps {
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
export interface accessReviewInstanceDecisionItemMethods {
	insights(): IBaseQuery<governanceInsight[]>;
	insights(id: string | number): IBaseQuery<governanceInsight>;
}
/*********************************************
* accessReviewStage
**********************************************/
export interface accessReviewStage extends accessReviewStageProps, accessReviewStageMethods , entity { }
export interface accessReviewStageProps {
	endDateTime: any;
	fallbackReviewers: ComplexTypes.accessReviewReviewerScope[];
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	startDateTime: any;
	status: string;
}
export interface accessReviewStageMethods {
	decisions(): IBaseQuery<accessReviewInstanceDecisionItem[]>;
	decisions(id: string | number): IBaseQuery<accessReviewInstanceDecisionItem>;
}
/*********************************************
* accessReviewScheduleDefinition
**********************************************/
export interface accessReviewScheduleDefinition extends accessReviewScheduleDefinitionProps, accessReviewScheduleDefinitionMethods , entity { }
export interface accessReviewScheduleDefinitionProps {
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
}
export interface accessReviewScheduleDefinitionMethods {
	instances(): IBaseQuery<accessReviewInstance[]>;
	instances(id: string | number): IBaseQuery<accessReviewInstance>;
}
/*********************************************
* appConsentRequest
**********************************************/
export interface appConsentRequest extends appConsentRequestProps, appConsentRequestMethods , entity { }
export interface appConsentRequestProps {
	appDisplayName: string;
	appId: string;
	pendingScopes: ComplexTypes.appConsentRequestScope[];
}
export interface appConsentRequestMethods {
	userConsentRequests(): IBaseQuery<userConsentRequest[]>;
	userConsentRequests(id: string | number): IBaseQuery<userConsentRequest>;
}
/*********************************************
* userConsentRequest
**********************************************/
export interface userConsentRequest extends userConsentRequestProps, userConsentRequestMethods , request { }
export interface userConsentRequestProps {
	reason: string;
}
export interface userConsentRequestMethods {
	approval(): IBaseQuery<approval>;
}
/*********************************************
* approval
**********************************************/
export interface approval extends approvalProps, approvalMethods , entity { }
export interface approvalProps {

}
export interface approvalMethods {
	stages(): IBaseQuery<approvalStage[]>;
	stages(id: string | number): IBaseQuery<approvalStage>;
}
/*********************************************
* approvalStage
**********************************************/
export interface approvalStage extends approvalStageProps, approvalStageMethods , entity { }
export interface approvalStageProps {
	assignedToMe: boolean;
	displayName: string;
	justification: string;
	reviewedBy: ComplexTypes.identity;
	reviewedDateTime: any;
	reviewResult: string;
	status: string;
}
export interface approvalStageMethods {

}
/*********************************************
* accessPackage
**********************************************/
export interface accessPackage extends accessPackageProps, accessPackageMethods , entity { }
export interface accessPackageProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	isHidden: boolean;
	modifiedDateTime: any;
}
export interface accessPackageMethods {
	accessPackagesIncompatibleWith(): IBaseQuery<accessPackage[]>;
	accessPackagesIncompatibleWith(id: string | number): IBaseQuery<accessPackage>;
	assignmentPolicies(): IBaseQuery<accessPackageAssignmentPolicy[]>;
	assignmentPolicies(id: string | number): IBaseQuery<accessPackageAssignmentPolicy>;
	catalog(): IBaseQuery<accessPackageCatalog>;
	incompatibleAccessPackages(): IBaseQuery<accessPackage[]>;
	incompatibleAccessPackages(id: string | number): IBaseQuery<accessPackage>;
	incompatibleGroups(): IBaseQuery<group[]>;
	incompatibleGroups(id: string | number): IBaseQuery<group>;
	resourceRoleScopes(): IBaseQuery<accessPackageResourceRoleScope[]>;
	resourceRoleScopes(id: string | number): IBaseQuery<accessPackageResourceRoleScope>;
}
/*********************************************
* accessPackageAssignmentPolicy
**********************************************/
export interface accessPackageAssignmentPolicy extends accessPackageAssignmentPolicyProps, accessPackageAssignmentPolicyMethods , entity { }
export interface accessPackageAssignmentPolicyProps {
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
}
export interface accessPackageAssignmentPolicyMethods {
	accessPackage(): IBaseQuery<accessPackage>;
	catalog(): IBaseQuery<accessPackageCatalog>;
	customExtensionStageSettings(): IBaseQuery<customExtensionStageSetting[]>;
	customExtensionStageSettings(id: string | number): IBaseQuery<customExtensionStageSetting>;
	questions(): IBaseQuery<accessPackageQuestion[]>;
	questions(id: string | number): IBaseQuery<accessPackageQuestion>;
}
/*********************************************
* accessPackageAssignmentRequest
**********************************************/
export interface accessPackageAssignmentRequest extends accessPackageAssignmentRequestProps, accessPackageAssignmentRequestMethods , entity { }
export interface accessPackageAssignmentRequestProps {
	answers: ComplexTypes.accessPackageAnswer[];
	completedDateTime: any;
	createdDateTime: any;
	customExtensionCalloutInstances: ComplexTypes.customExtensionCalloutInstance[];
	requestType: EnumTypes.accessPackageRequestType;
	schedule: ComplexTypes.entitlementManagementSchedule;
	state: EnumTypes.accessPackageRequestState;
	status: string;
}
export interface accessPackageAssignmentRequestMethods {
	accessPackage(): IBaseQuery<accessPackage>;
	assignment(): IBaseQuery<accessPackageAssignment>;
	requestor(): IBaseQuery<accessPackageSubject>;
}
/*********************************************
* accessPackageAssignment
**********************************************/
export interface accessPackageAssignment extends accessPackageAssignmentProps, accessPackageAssignmentMethods , entity { }
export interface accessPackageAssignmentProps {
	customExtensionCalloutInstances: ComplexTypes.customExtensionCalloutInstance[];
	expiredDateTime: any;
	schedule: ComplexTypes.entitlementManagementSchedule;
	state: EnumTypes.accessPackageAssignmentState;
	status: string;
}
export interface accessPackageAssignmentMethods {
	accessPackage(): IBaseQuery<accessPackage>;
	assignmentPolicy(): IBaseQuery<accessPackageAssignmentPolicy>;
	target(): IBaseQuery<accessPackageSubject>;
}
/*********************************************
* accessPackageCatalog
**********************************************/
export interface accessPackageCatalog extends accessPackageCatalogProps, accessPackageCatalogMethods , entity { }
export interface accessPackageCatalogProps {
	catalogType: EnumTypes.accessPackageCatalogType;
	createdDateTime: any;
	description: string;
	displayName: string;
	isExternallyVisible: boolean;
	modifiedDateTime: any;
	state: EnumTypes.accessPackageCatalogState;
}
export interface accessPackageCatalogMethods {
	accessPackages(): IBaseQuery<accessPackage[]>;
	accessPackages(id: string | number): IBaseQuery<accessPackage>;
	customWorkflowExtensions(): IBaseQuery<customCalloutExtension[]>;
	customWorkflowExtensions(id: string | number): IBaseQuery<customCalloutExtension>;
	resourceRoles(): IBaseQuery<accessPackageResourceRole[]>;
	resourceRoles(id: string | number): IBaseQuery<accessPackageResourceRole>;
	resources(): IBaseQuery<accessPackageResource[]>;
	resources(id: string | number): IBaseQuery<accessPackageResource>;
	resourceScopes(): IBaseQuery<accessPackageResourceScope[]>;
	resourceScopes(id: string | number): IBaseQuery<accessPackageResourceScope>;
}
/*********************************************
* connectedOrganization
**********************************************/
export interface connectedOrganization extends connectedOrganizationProps, connectedOrganizationMethods , entity { }
export interface connectedOrganizationProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	identitySources: ComplexTypes.identitySource[];
	modifiedDateTime: any;
	state: EnumTypes.connectedOrganizationState;
}
export interface connectedOrganizationMethods {
	externalSponsors(): IBaseQuery<directoryObject[]>;
	externalSponsors(id: string | number): IBaseQuery<directoryObject>;
	internalSponsors(): IBaseQuery<directoryObject[]>;
	internalSponsors(id: string | number): IBaseQuery<directoryObject>;
}
/*********************************************
* accessPackageResourceEnvironment
**********************************************/
export interface accessPackageResourceEnvironment extends accessPackageResourceEnvironmentProps, accessPackageResourceEnvironmentMethods , entity { }
export interface accessPackageResourceEnvironmentProps {
	connectionInfo: ComplexTypes.connectionInfo;
	createdDateTime: any;
	description: string;
	displayName: string;
	isDefaultEnvironment: boolean;
	modifiedDateTime: any;
	originId: string;
	originSystem: string;
}
export interface accessPackageResourceEnvironmentMethods {
	resources(): IBaseQuery<accessPackageResource[]>;
	resources(id: string | number): IBaseQuery<accessPackageResource>;
}
/*********************************************
* accessPackageResourceRequest
**********************************************/
export interface accessPackageResourceRequest extends accessPackageResourceRequestProps, accessPackageResourceRequestMethods , entity { }
export interface accessPackageResourceRequestProps {
	createdDateTime: any;
	requestType: EnumTypes.accessPackageRequestType;
	state: EnumTypes.accessPackageRequestState;
}
export interface accessPackageResourceRequestMethods {
	catalog(): IBaseQuery<accessPackageCatalog>;
	resource(): IBaseQuery<accessPackageResource>;
}
/*********************************************
* accessPackageResourceRoleScope
**********************************************/
export interface accessPackageResourceRoleScope extends accessPackageResourceRoleScopeProps, accessPackageResourceRoleScopeMethods , entity { }
export interface accessPackageResourceRoleScopeProps {
	createdDateTime: any;
}
export interface accessPackageResourceRoleScopeMethods {
	role(): IBaseQuery<accessPackageResourceRole>;
	scope(): IBaseQuery<accessPackageResourceScope>;
}
/*********************************************
* accessPackageResource
**********************************************/
export interface accessPackageResource extends accessPackageResourceProps, accessPackageResourceMethods , entity { }
export interface accessPackageResourceProps {
	attributes: ComplexTypes.accessPackageResourceAttribute[];
	createdDateTime: any;
	description: string;
	displayName: string;
	modifiedDateTime: any;
	originId: string;
	originSystem: string;
}
export interface accessPackageResourceMethods {
	environment(): IBaseQuery<accessPackageResourceEnvironment>;
	roles(): IBaseQuery<accessPackageResourceRole[]>;
	roles(id: string | number): IBaseQuery<accessPackageResourceRole>;
	scopes(): IBaseQuery<accessPackageResourceScope[]>;
	scopes(id: string | number): IBaseQuery<accessPackageResourceScope>;
}
/*********************************************
* entitlementManagementSettings
**********************************************/
export interface entitlementManagementSettings extends entitlementManagementSettingsProps, entitlementManagementSettingsMethods , entity { }
export interface entitlementManagementSettingsProps {
	durationUntilExternalUserDeletedAfterBlocked: number;
	externalUserLifecycleAction: EnumTypes.accessPackageExternalUserLifecycleAction;
}
export interface entitlementManagementSettingsMethods {

}
/*********************************************
* privilegedAccessGroup
**********************************************/
export interface privilegedAccessGroup extends privilegedAccessGroupProps, privilegedAccessGroupMethods , entity { }
export interface privilegedAccessGroupProps {

}
export interface privilegedAccessGroupMethods {
	assignmentApprovals(): IBaseQuery<approval[]>;
	assignmentApprovals(id: string | number): IBaseQuery<approval>;
	assignmentScheduleInstances(): IBaseQuery<privilegedAccessGroupAssignmentScheduleInstance[]>;
	assignmentScheduleInstances(id: string | number): IBaseQuery<privilegedAccessGroupAssignmentScheduleInstance>;
	assignmentScheduleRequests(): IBaseQuery<privilegedAccessGroupAssignmentScheduleRequest[]>;
	assignmentScheduleRequests(id: string | number): IBaseQuery<privilegedAccessGroupAssignmentScheduleRequest>;
	assignmentSchedules(): IBaseQuery<privilegedAccessGroupAssignmentSchedule[]>;
	assignmentSchedules(id: string | number): IBaseQuery<privilegedAccessGroupAssignmentSchedule>;
	eligibilityScheduleInstances(): IBaseQuery<privilegedAccessGroupEligibilityScheduleInstance[]>;
	eligibilityScheduleInstances(id: string | number): IBaseQuery<privilegedAccessGroupEligibilityScheduleInstance>;
	eligibilityScheduleRequests(): IBaseQuery<privilegedAccessGroupEligibilityScheduleRequest[]>;
	eligibilityScheduleRequests(id: string | number): IBaseQuery<privilegedAccessGroupEligibilityScheduleRequest>;
	eligibilitySchedules(): IBaseQuery<privilegedAccessGroupEligibilitySchedule[]>;
	eligibilitySchedules(id: string | number): IBaseQuery<privilegedAccessGroupEligibilitySchedule>;
}
/*********************************************
* privilegedAccessScheduleInstance
**********************************************/
export interface privilegedAccessScheduleInstance extends privilegedAccessScheduleInstanceProps, privilegedAccessScheduleInstanceMethods , entity { }
export interface privilegedAccessScheduleInstanceProps {
	endDateTime: any;
	startDateTime: any;
}
export interface privilegedAccessScheduleInstanceMethods {

}
/*********************************************
* privilegedAccessGroupAssignmentScheduleInstance
**********************************************/
export interface privilegedAccessGroupAssignmentScheduleInstance extends privilegedAccessGroupAssignmentScheduleInstanceProps, privilegedAccessGroupAssignmentScheduleInstanceMethods , privilegedAccessScheduleInstance { }
export interface privilegedAccessGroupAssignmentScheduleInstanceProps {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	assignmentScheduleId: string;
	assignmentType: EnumTypes.privilegedAccessGroupAssignmentType;
	groupId: string;
	memberType: EnumTypes.privilegedAccessGroupMemberType;
	principalId: string;
}
export interface privilegedAccessGroupAssignmentScheduleInstanceMethods {
	activatedUsing(): IBaseQuery<privilegedAccessGroupEligibilityScheduleInstance>;
	group(): IBaseQuery<group>;
	principal(): IBaseQuery<directoryObject>;
}
/*********************************************
* privilegedAccessScheduleRequest
**********************************************/
export interface privilegedAccessScheduleRequest extends privilegedAccessScheduleRequestProps, privilegedAccessScheduleRequestMethods , request { }
export interface privilegedAccessScheduleRequestProps {
	action: EnumTypes.scheduleRequestActions;
	isValidationOnly: boolean;
	justification: string;
	scheduleInfo: ComplexTypes.requestSchedule;
	ticketInfo: ComplexTypes.ticketInfo;
}
export interface privilegedAccessScheduleRequestMethods {

}
/*********************************************
* privilegedAccessGroupAssignmentScheduleRequest
**********************************************/
export interface privilegedAccessGroupAssignmentScheduleRequest extends privilegedAccessGroupAssignmentScheduleRequestProps, privilegedAccessGroupAssignmentScheduleRequestMethods , privilegedAccessScheduleRequest { }
export interface privilegedAccessGroupAssignmentScheduleRequestProps {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	groupId: string;
	principalId: string;
	targetScheduleId: string;
}
export interface privilegedAccessGroupAssignmentScheduleRequestMethods {
	activatedUsing(): IBaseQuery<privilegedAccessGroupEligibilitySchedule>;
	group(): IBaseQuery<group>;
	principal(): IBaseQuery<directoryObject>;
	targetSchedule(): IBaseQuery<privilegedAccessGroupEligibilitySchedule>;
}
/*********************************************
* privilegedAccessSchedule
**********************************************/
export interface privilegedAccessSchedule extends privilegedAccessScheduleProps, privilegedAccessScheduleMethods , entity { }
export interface privilegedAccessScheduleProps {
	createdDateTime: any;
	createdUsing: string;
	modifiedDateTime: any;
	scheduleInfo: ComplexTypes.requestSchedule;
	status: string;
}
export interface privilegedAccessScheduleMethods {

}
/*********************************************
* privilegedAccessGroupAssignmentSchedule
**********************************************/
export interface privilegedAccessGroupAssignmentSchedule extends privilegedAccessGroupAssignmentScheduleProps, privilegedAccessGroupAssignmentScheduleMethods , privilegedAccessSchedule { }
export interface privilegedAccessGroupAssignmentScheduleProps {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	assignmentType: EnumTypes.privilegedAccessGroupAssignmentType;
	groupId: string;
	memberType: EnumTypes.privilegedAccessGroupMemberType;
	principalId: string;
}
export interface privilegedAccessGroupAssignmentScheduleMethods {
	activatedUsing(): IBaseQuery<privilegedAccessGroupEligibilitySchedule>;
	group(): IBaseQuery<group>;
	principal(): IBaseQuery<directoryObject>;
}
/*********************************************
* privilegedAccessGroupEligibilityScheduleInstance
**********************************************/
export interface privilegedAccessGroupEligibilityScheduleInstance extends privilegedAccessGroupEligibilityScheduleInstanceProps, privilegedAccessGroupEligibilityScheduleInstanceMethods , privilegedAccessScheduleInstance { }
export interface privilegedAccessGroupEligibilityScheduleInstanceProps {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	eligibilityScheduleId: string;
	groupId: string;
	memberType: EnumTypes.privilegedAccessGroupMemberType;
	principalId: string;
}
export interface privilegedAccessGroupEligibilityScheduleInstanceMethods {
	group(): IBaseQuery<group>;
	principal(): IBaseQuery<directoryObject>;
}
/*********************************************
* privilegedAccessGroupEligibilityScheduleRequest
**********************************************/
export interface privilegedAccessGroupEligibilityScheduleRequest extends privilegedAccessGroupEligibilityScheduleRequestProps, privilegedAccessGroupEligibilityScheduleRequestMethods , privilegedAccessScheduleRequest { }
export interface privilegedAccessGroupEligibilityScheduleRequestProps {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	groupId: string;
	principalId: string;
	targetScheduleId: string;
}
export interface privilegedAccessGroupEligibilityScheduleRequestMethods {
	group(): IBaseQuery<group>;
	principal(): IBaseQuery<directoryObject>;
	targetSchedule(): IBaseQuery<privilegedAccessGroupEligibilitySchedule>;
}
/*********************************************
* privilegedAccessGroupEligibilitySchedule
**********************************************/
export interface privilegedAccessGroupEligibilitySchedule extends privilegedAccessGroupEligibilityScheduleProps, privilegedAccessGroupEligibilityScheduleMethods , privilegedAccessSchedule { }
export interface privilegedAccessGroupEligibilityScheduleProps {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	groupId: string;
	memberType: EnumTypes.privilegedAccessGroupMemberType;
	principalId: string;
}
export interface privilegedAccessGroupEligibilityScheduleMethods {
	group(): IBaseQuery<group>;
	principal(): IBaseQuery<directoryObject>;
}
/*********************************************
* userSignInInsight
**********************************************/
export interface userSignInInsight extends userSignInInsightProps, userSignInInsightMethods , governanceInsight { }
export interface userSignInInsightProps {
	lastSignInDateTime: any;
}
export interface userSignInInsightMethods {

}
/*********************************************
* agreement
**********************************************/
export interface agreement extends agreementProps, agreementMethods , entity { }
export interface agreementProps {
	displayName: string;
	isPerDeviceAcceptanceRequired: boolean;
	isViewingBeforeAcceptanceRequired: boolean;
	termsExpiration: ComplexTypes.termsExpiration;
	userReacceptRequiredFrequency: number;
}
export interface agreementMethods {
	acceptances(): IBaseQuery<agreementAcceptance[]>;
	acceptances(id: string | number): IBaseQuery<agreementAcceptance>;
	file(): IBaseQuery<agreementFile>;
	files(): IBaseQuery<agreementFileLocalization[]>;
	files(id: string | number): IBaseQuery<agreementFileLocalization>;
}
/*********************************************
* agreementFileProperties
**********************************************/
export interface agreementFileProperties extends agreementFilePropertiesProps, agreementFilePropertiesMethods , entity { }
export interface agreementFilePropertiesProps {
	createdDateTime: any;
	displayName: string;
	fileData: ComplexTypes.agreementFileData;
	fileName: string;
	isDefault: boolean;
	isMajorVersion: boolean;
	language: string;
}
export interface agreementFilePropertiesMethods {

}
/*********************************************
* agreementFile
**********************************************/
export interface agreementFile extends agreementFileProps, agreementFileMethods , agreementFileProperties { }
export interface agreementFileProps {

}
export interface agreementFileMethods {
	localizations(): IBaseQuery<agreementFileLocalization[]>;
	localizations(id: string | number): IBaseQuery<agreementFileLocalization>;
}
/*********************************************
* agreementFileLocalization
**********************************************/
export interface agreementFileLocalization extends agreementFileLocalizationProps, agreementFileLocalizationMethods , agreementFileProperties { }
export interface agreementFileLocalizationProps {

}
export interface agreementFileLocalizationMethods {
	versions(): IBaseQuery<agreementFileVersion[]>;
	versions(id: string | number): IBaseQuery<agreementFileVersion>;
}
/*********************************************
* agreementFileVersion
**********************************************/
export interface agreementFileVersion extends agreementFileVersionProps, agreementFileVersionMethods , agreementFileProperties { }
export interface agreementFileVersionProps {

}
export interface agreementFileVersionMethods {

}
/*********************************************
* countryNamedLocation
**********************************************/
export interface countryNamedLocation extends countryNamedLocationProps, countryNamedLocationMethods , namedLocation { }
export interface countryNamedLocationProps {
	countriesAndRegions: Array<string>[];
	countryLookupMethod: EnumTypes.countryLookupMethodType;
	includeUnknownCountriesAndRegions: boolean;
}
export interface countryNamedLocationMethods {

}
/*********************************************
* identityProtectionRoot
**********************************************/
export interface identityProtectionRoot extends identityProtectionRootProps, identityProtectionRootMethods  { }
export interface identityProtectionRootProps {

}
export interface identityProtectionRootMethods {
	riskDetections(): IBaseQuery<riskDetection[]>;
	riskDetections(id: string | number): IBaseQuery<riskDetection>;
	riskyServicePrincipals(): IBaseQuery<riskyServicePrincipal[]>;
	riskyServicePrincipals(id: string | number): IBaseQuery<riskyServicePrincipal>;
	riskyUsers(): IBaseQuery<riskyUser[]>;
	riskyUsers(id: string | number): IBaseQuery<riskyUser>;
	servicePrincipalRiskDetections(): IBaseQuery<servicePrincipalRiskDetection[]>;
	servicePrincipalRiskDetections(id: string | number): IBaseQuery<servicePrincipalRiskDetection>;
}
/*********************************************
* riskDetection
**********************************************/
export interface riskDetection extends riskDetectionProps, riskDetectionMethods , entity { }
export interface riskDetectionProps {
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
export interface riskDetectionMethods {

}
/*********************************************
* riskyServicePrincipal
**********************************************/
export interface riskyServicePrincipal extends riskyServicePrincipalProps, riskyServicePrincipalMethods , entity { }
export interface riskyServicePrincipalProps {
	appId: string;
	displayName: string;
	isEnabled: boolean;
	isProcessing: boolean;
	riskDetail: EnumTypes.riskDetail;
	riskLastUpdatedDateTime: any;
	riskLevel: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	servicePrincipalType: string;
}
export interface riskyServicePrincipalMethods {
	history(): IBaseQuery<riskyServicePrincipalHistoryItem[]>;
	history(id: string | number): IBaseQuery<riskyServicePrincipalHistoryItem>;
}
/*********************************************
* riskyUser
**********************************************/
export interface riskyUser extends riskyUserProps, riskyUserMethods , entity { }
export interface riskyUserProps {
	isDeleted: boolean;
	isProcessing: boolean;
	riskDetail: EnumTypes.riskDetail;
	riskLastUpdatedDateTime: any;
	riskLevel: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	userDisplayName: string;
	userPrincipalName: string;
}
export interface riskyUserMethods {
	history(): IBaseQuery<riskyUserHistoryItem[]>;
	history(id: string | number): IBaseQuery<riskyUserHistoryItem>;
}
/*********************************************
* servicePrincipalRiskDetection
**********************************************/
export interface servicePrincipalRiskDetection extends servicePrincipalRiskDetectionProps, servicePrincipalRiskDetectionMethods , entity { }
export interface servicePrincipalRiskDetectionProps {
	activity: EnumTypes.activityType;
	activityDateTime: any;
	additionalInfo: string;
	appId: string;
	correlationId: string;
	detectedDateTime: any;
	detectionTimingType: EnumTypes.riskDetectionTimingType;
	ipAddress: string;
	keyIds: Array<string>[];
	lastUpdatedDateTime: any;
	location: ComplexTypes.signInLocation;
	requestId: string;
	riskDetail: EnumTypes.riskDetail;
	riskEventType: string;
	riskLevel: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	servicePrincipalDisplayName: string;
	servicePrincipalId: string;
	source: string;
	tokenIssuerType: EnumTypes.tokenIssuerType;
}
export interface servicePrincipalRiskDetectionMethods {

}
/*********************************************
* ipNamedLocation
**********************************************/
export interface ipNamedLocation extends ipNamedLocationProps, ipNamedLocationMethods , namedLocation { }
export interface ipNamedLocationProps {
	ipRanges: ComplexTypes.ipRange[];
	isTrusted: boolean;
}
export interface ipNamedLocationMethods {

}
/*********************************************
* riskyServicePrincipalHistoryItem
**********************************************/
export interface riskyServicePrincipalHistoryItem extends riskyServicePrincipalHistoryItemProps, riskyServicePrincipalHistoryItemMethods , riskyServicePrincipal { }
export interface riskyServicePrincipalHistoryItemProps {
	activity: ComplexTypes.riskServicePrincipalActivity;
	initiatedBy: string;
}
export interface riskyServicePrincipalHistoryItemMethods {

}
/*********************************************
* riskyUserHistoryItem
**********************************************/
export interface riskyUserHistoryItem extends riskyUserHistoryItemProps, riskyUserHistoryItemMethods , riskyUser { }
export interface riskyUserHistoryItemProps {
	activity: ComplexTypes.riskUserActivity;
	initiatedBy: string;
	userId: string;
}
export interface riskyUserHistoryItemMethods {

}
/*********************************************
* accessPackageQuestion
**********************************************/
export interface accessPackageQuestion extends accessPackageQuestionProps, accessPackageQuestionMethods , entity { }
export interface accessPackageQuestionProps {
	isAnswerEditable: boolean;
	isRequired: boolean;
	localizations: ComplexTypes.accessPackageLocalizedText[];
	sequence: number;
	text: string;
}
export interface accessPackageQuestionMethods {

}
/*********************************************
* accessPackageSubject
**********************************************/
export interface accessPackageSubject extends accessPackageSubjectProps, accessPackageSubjectMethods , entity { }
export interface accessPackageSubjectProps {
	displayName: string;
	email: string;
	objectId: string;
	onPremisesSecurityIdentifier: string;
	principalName: string;
	subjectType: EnumTypes.accessPackageSubjectType;
}
export interface accessPackageSubjectMethods {
	connectedOrganization(): IBaseQuery<connectedOrganization>;
}
/*********************************************
* customExtensionStageSetting
**********************************************/
export interface customExtensionStageSetting extends customExtensionStageSettingProps, customExtensionStageSettingMethods , entity { }
export interface customExtensionStageSettingProps {
	stage: EnumTypes.accessPackageCustomExtensionStage;
}
export interface customExtensionStageSettingMethods {
	customExtension(): IBaseQuery<customCalloutExtension>;
}
/*********************************************
* accessPackageAssignmentRequestWorkflowExtension
**********************************************/
export interface accessPackageAssignmentRequestWorkflowExtension extends accessPackageAssignmentRequestWorkflowExtensionProps, accessPackageAssignmentRequestWorkflowExtensionMethods , customCalloutExtension { }
export interface accessPackageAssignmentRequestWorkflowExtensionProps {
	callbackConfiguration: ComplexTypes.customExtensionCallbackConfiguration;
	createdBy: string;
	createdDateTime: any;
	lastModifiedBy: string;
	lastModifiedDateTime: any;
}
export interface accessPackageAssignmentRequestWorkflowExtensionMethods {

}
/*********************************************
* accessPackageAssignmentWorkflowExtension
**********************************************/
export interface accessPackageAssignmentWorkflowExtension extends accessPackageAssignmentWorkflowExtensionProps, accessPackageAssignmentWorkflowExtensionMethods , customCalloutExtension { }
export interface accessPackageAssignmentWorkflowExtensionProps {
	callbackConfiguration: ComplexTypes.customExtensionCallbackConfiguration;
	createdBy: string;
	createdDateTime: any;
	lastModifiedBy: string;
	lastModifiedDateTime: any;
}
export interface accessPackageAssignmentWorkflowExtensionMethods {

}
/*********************************************
* accessPackageResourceRole
**********************************************/
export interface accessPackageResourceRole extends accessPackageResourceRoleProps, accessPackageResourceRoleMethods , entity { }
export interface accessPackageResourceRoleProps {
	description: string;
	displayName: string;
	originId: string;
	originSystem: string;
}
export interface accessPackageResourceRoleMethods {
	resource(): IBaseQuery<accessPackageResource>;
}
/*********************************************
* accessPackageResourceScope
**********************************************/
export interface accessPackageResourceScope extends accessPackageResourceScopeProps, accessPackageResourceScopeMethods , entity { }
export interface accessPackageResourceScopeProps {
	description: string;
	displayName: string;
	isRootScope: boolean;
	originId: string;
	originSystem: string;
}
export interface accessPackageResourceScopeMethods {
	resource(): IBaseQuery<accessPackageResource>;
}
/*********************************************
* accessPackageMultipleChoiceQuestion
**********************************************/
export interface accessPackageMultipleChoiceQuestion extends accessPackageMultipleChoiceQuestionProps, accessPackageMultipleChoiceQuestionMethods , accessPackageQuestion { }
export interface accessPackageMultipleChoiceQuestionProps {
	choices: ComplexTypes.accessPackageAnswerChoice[];
	isMultipleSelectionAllowed: boolean;
}
export interface accessPackageMultipleChoiceQuestionMethods {

}
/*********************************************
* accessPackageTextInputQuestion
**********************************************/
export interface accessPackageTextInputQuestion extends accessPackageTextInputQuestionProps, accessPackageTextInputQuestionMethods , accessPackageQuestion { }
export interface accessPackageTextInputQuestionProps {
	isSingleLineQuestion: boolean;
	regexPattern: string;
}
export interface accessPackageTextInputQuestionMethods {

}
/*********************************************
* mobileApp
**********************************************/
export interface mobileApp extends mobileAppProps, mobileAppMethods , entity { }
export interface mobileAppProps {
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
}
export interface mobileAppMethods {
	assignments(): IBaseQuery<mobileAppAssignment[]>;
	assignments(id: string | number): IBaseQuery<mobileAppAssignment>;
	categories(): IBaseQuery<mobileAppCategory[]>;
	categories(id: string | number): IBaseQuery<mobileAppCategory>;
}
/*********************************************
* mobileLobApp
**********************************************/
export interface mobileLobApp extends mobileLobAppProps, mobileLobAppMethods , mobileApp { }
export interface mobileLobAppProps {
	committedContentVersion: string;
	fileName: string;
	size: number;
}
export interface mobileLobAppMethods {
	contentVersions(): IBaseQuery<mobileAppContent[]>;
	contentVersions(id: string | number): IBaseQuery<mobileAppContent>;
}
/*********************************************
* androidLobApp
**********************************************/
export interface androidLobApp extends androidLobAppProps, androidLobAppMethods , mobileLobApp { }
export interface androidLobAppProps {
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;
	versionCode: string;
	versionName: string;
}
export interface androidLobAppMethods {

}
/*********************************************
* androidStoreApp
**********************************************/
export interface androidStoreApp extends androidStoreAppProps, androidStoreAppMethods , mobileApp { }
export interface androidStoreAppProps {
	appStoreUrl: string;
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;
}
export interface androidStoreAppMethods {

}
/*********************************************
* deviceAppManagement
**********************************************/
export interface deviceAppManagement extends deviceAppManagementProps, deviceAppManagementMethods , entity { }
export interface deviceAppManagementProps {
	isEnabledForMicrosoftStoreForBusiness: boolean;
	microsoftStoreForBusinessLanguage: string;
	microsoftStoreForBusinessLastCompletedApplicationSyncTime: any;
	microsoftStoreForBusinessLastSuccessfulSyncDateTime: any;
}
export interface deviceAppManagementMethods {
	managedEBooks(): IBaseQuery<managedEBook[]>;
	managedEBooks(id: string | number): IBaseQuery<managedEBook>;
	mobileAppCategories(): IBaseQuery<mobileAppCategory[]>;
	mobileAppCategories(id: string | number): IBaseQuery<mobileAppCategory>;
	mobileAppConfigurations(): IBaseQuery<managedDeviceMobileAppConfiguration[]>;
	mobileAppConfigurations(id: string | number): IBaseQuery<managedDeviceMobileAppConfiguration>;
	mobileApps(): IBaseQuery<mobileApp[]>;
	mobileApps(id: string | number): IBaseQuery<mobileApp>;
	vppTokens(): IBaseQuery<vppToken[]>;
	vppTokens(id: string | number): IBaseQuery<vppToken>;
	androidManagedAppProtections(): IBaseQuery<androidManagedAppProtection[]>;
	androidManagedAppProtections(id: string | number): IBaseQuery<androidManagedAppProtection>;
	defaultManagedAppProtections(): IBaseQuery<defaultManagedAppProtection[]>;
	defaultManagedAppProtections(id: string | number): IBaseQuery<defaultManagedAppProtection>;
	iosManagedAppProtections(): IBaseQuery<iosManagedAppProtection[]>;
	iosManagedAppProtections(id: string | number): IBaseQuery<iosManagedAppProtection>;
	managedAppPolicies(): IBaseQuery<managedAppPolicy[]>;
	managedAppPolicies(id: string | number): IBaseQuery<managedAppPolicy>;
	managedAppRegistrations(): IBaseQuery<managedAppRegistration[]>;
	managedAppRegistrations(id: string | number): IBaseQuery<managedAppRegistration>;
	managedAppStatuses(): IBaseQuery<managedAppStatus[]>;
	managedAppStatuses(id: string | number): IBaseQuery<managedAppStatus>;
	mdmWindowsInformationProtectionPolicies(): IBaseQuery<mdmWindowsInformationProtectionPolicy[]>;
	mdmWindowsInformationProtectionPolicies(id: string | number): IBaseQuery<mdmWindowsInformationProtectionPolicy>;
	targetedManagedAppConfigurations(): IBaseQuery<targetedManagedAppConfiguration[]>;
	targetedManagedAppConfigurations(id: string | number): IBaseQuery<targetedManagedAppConfiguration>;
	windowsInformationProtectionPolicies(): IBaseQuery<windowsInformationProtectionPolicy[]>;
	windowsInformationProtectionPolicies(id: string | number): IBaseQuery<windowsInformationProtectionPolicy>;
}
/*********************************************
* managedEBook
**********************************************/
export interface managedEBook extends managedEBookProps, managedEBookMethods , entity { }
export interface managedEBookProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	informationUrl: string;
	largeCover: ComplexTypes.mimeContent;
	lastModifiedDateTime: any;
	privacyInformationUrl: string;
	publishedDateTime: any;
	publisher: string;
}
export interface managedEBookMethods {
	assignments(): IBaseQuery<managedEBookAssignment[]>;
	assignments(id: string | number): IBaseQuery<managedEBookAssignment>;
	deviceStates(): IBaseQuery<deviceInstallState[]>;
	deviceStates(id: string | number): IBaseQuery<deviceInstallState>;
	installSummary(): IBaseQuery<eBookInstallSummary>;
	userStateSummary(): IBaseQuery<userInstallStateSummary[]>;
	userStateSummary(id: string | number): IBaseQuery<userInstallStateSummary>;
}
/*********************************************
* mobileAppCategory
**********************************************/
export interface mobileAppCategory extends mobileAppCategoryProps, mobileAppCategoryMethods , entity { }
export interface mobileAppCategoryProps {
	displayName: string;
	lastModifiedDateTime: any;
}
export interface mobileAppCategoryMethods {

}
/*********************************************
* managedDeviceMobileAppConfiguration
**********************************************/
export interface managedDeviceMobileAppConfiguration extends managedDeviceMobileAppConfigurationProps, managedDeviceMobileAppConfigurationMethods , entity { }
export interface managedDeviceMobileAppConfigurationProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	targetedMobileApps: Array<string>[];
	version: number;
}
export interface managedDeviceMobileAppConfigurationMethods {
	assignments(): IBaseQuery<managedDeviceMobileAppConfigurationAssignment[]>;
	assignments(id: string | number): IBaseQuery<managedDeviceMobileAppConfigurationAssignment>;
	deviceStatuses(): IBaseQuery<managedDeviceMobileAppConfigurationDeviceStatus[]>;
	deviceStatuses(id: string | number): IBaseQuery<managedDeviceMobileAppConfigurationDeviceStatus>;
	deviceStatusSummary(): IBaseQuery<managedDeviceMobileAppConfigurationDeviceSummary>;
	userStatuses(): IBaseQuery<managedDeviceMobileAppConfigurationUserStatus[]>;
	userStatuses(id: string | number): IBaseQuery<managedDeviceMobileAppConfigurationUserStatus>;
	userStatusSummary(): IBaseQuery<managedDeviceMobileAppConfigurationUserSummary>;
}
/*********************************************
* vppToken
**********************************************/
export interface vppToken extends vppTokenProps, vppTokenMethods , entity { }
export interface vppTokenProps {
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
export interface vppTokenMethods {

}
/*********************************************
* managedAppPolicy
**********************************************/
export interface managedAppPolicy extends managedAppPolicyProps, managedAppPolicyMethods , entity { }
export interface managedAppPolicyProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	version: string;
}
export interface managedAppPolicyMethods {

}
/*********************************************
* managedAppProtection
**********************************************/
export interface managedAppProtection extends managedAppProtectionProps, managedAppProtectionMethods , managedAppPolicy { }
export interface managedAppProtectionProps {
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
export interface managedAppProtectionMethods {

}
/*********************************************
* targetedManagedAppProtection
**********************************************/
export interface targetedManagedAppProtection extends targetedManagedAppProtectionProps, targetedManagedAppProtectionMethods , managedAppProtection { }
export interface targetedManagedAppProtectionProps {
	isAssigned: boolean;
}
export interface targetedManagedAppProtectionMethods {
	assignments(): IBaseQuery<targetedManagedAppPolicyAssignment[]>;
	assignments(id: string | number): IBaseQuery<targetedManagedAppPolicyAssignment>;
}
/*********************************************
* androidManagedAppProtection
**********************************************/
export interface androidManagedAppProtection extends androidManagedAppProtectionProps, androidManagedAppProtectionMethods , targetedManagedAppProtection { }
export interface androidManagedAppProtectionProps {
	customBrowserDisplayName: string;
	customBrowserPackageId: string;
	deployedAppCount: number;
	disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean;
	encryptAppData: boolean;
	minimumRequiredPatchVersion: string;
	minimumWarningPatchVersion: string;
	screenCaptureBlocked: boolean;
}
export interface androidManagedAppProtectionMethods {
	apps(): IBaseQuery<managedMobileApp[]>;
	apps(id: string | number): IBaseQuery<managedMobileApp>;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary>;
}
/*********************************************
* defaultManagedAppProtection
**********************************************/
export interface defaultManagedAppProtection extends defaultManagedAppProtectionProps, defaultManagedAppProtectionMethods , managedAppProtection { }
export interface defaultManagedAppProtectionProps {
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
}
export interface defaultManagedAppProtectionMethods {
	apps(): IBaseQuery<managedMobileApp[]>;
	apps(id: string | number): IBaseQuery<managedMobileApp>;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary>;
}
/*********************************************
* iosManagedAppProtection
**********************************************/
export interface iosManagedAppProtection extends iosManagedAppProtectionProps, iosManagedAppProtectionMethods , targetedManagedAppProtection { }
export interface iosManagedAppProtectionProps {
	appDataEncryptionType: EnumTypes.managedAppDataEncryptionType;
	customBrowserProtocol: string;
	deployedAppCount: number;
	faceIdBlocked: boolean;
	minimumRequiredSdkVersion: string;
}
export interface iosManagedAppProtectionMethods {
	apps(): IBaseQuery<managedMobileApp[]>;
	apps(id: string | number): IBaseQuery<managedMobileApp>;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary>;
}
/*********************************************
* managedAppStatus
**********************************************/
export interface managedAppStatus extends managedAppStatusProps, managedAppStatusMethods , entity { }
export interface managedAppStatusProps {
	displayName: string;
	version: string;
}
export interface managedAppStatusMethods {

}
/*********************************************
* windowsInformationProtection
**********************************************/
export interface windowsInformationProtection extends windowsInformationProtectionProps, windowsInformationProtectionMethods , managedAppPolicy { }
export interface windowsInformationProtectionProps {
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
}
export interface windowsInformationProtectionMethods {
	assignments(): IBaseQuery<targetedManagedAppPolicyAssignment[]>;
	assignments(id: string | number): IBaseQuery<targetedManagedAppPolicyAssignment>;
	exemptAppLockerFiles(): IBaseQuery<windowsInformationProtectionAppLockerFile[]>;
	exemptAppLockerFiles(id: string | number): IBaseQuery<windowsInformationProtectionAppLockerFile>;
	protectedAppLockerFiles(): IBaseQuery<windowsInformationProtectionAppLockerFile[]>;
	protectedAppLockerFiles(id: string | number): IBaseQuery<windowsInformationProtectionAppLockerFile>;
}
/*********************************************
* mdmWindowsInformationProtectionPolicy
**********************************************/
export interface mdmWindowsInformationProtectionPolicy extends mdmWindowsInformationProtectionPolicyProps, mdmWindowsInformationProtectionPolicyMethods , windowsInformationProtection { }
export interface mdmWindowsInformationProtectionPolicyProps {

}
export interface mdmWindowsInformationProtectionPolicyMethods {

}
/*********************************************
* managedAppConfiguration
**********************************************/
export interface managedAppConfiguration extends managedAppConfigurationProps, managedAppConfigurationMethods , managedAppPolicy { }
export interface managedAppConfigurationProps {
	customSettings: ComplexTypes.keyValuePair[];
}
export interface managedAppConfigurationMethods {

}
/*********************************************
* targetedManagedAppConfiguration
**********************************************/
export interface targetedManagedAppConfiguration extends targetedManagedAppConfigurationProps, targetedManagedAppConfigurationMethods , managedAppConfiguration { }
export interface targetedManagedAppConfigurationProps {
	deployedAppCount: number;
	isAssigned: boolean;
}
export interface targetedManagedAppConfigurationMethods {
	apps(): IBaseQuery<managedMobileApp[]>;
	apps(id: string | number): IBaseQuery<managedMobileApp>;
	assignments(): IBaseQuery<targetedManagedAppPolicyAssignment[]>;
	assignments(id: string | number): IBaseQuery<targetedManagedAppPolicyAssignment>;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary>;
}
/*********************************************
* windowsInformationProtectionPolicy
**********************************************/
export interface windowsInformationProtectionPolicy extends windowsInformationProtectionPolicyProps, windowsInformationProtectionPolicyMethods , windowsInformationProtection { }
export interface windowsInformationProtectionPolicyProps {
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
export interface windowsInformationProtectionPolicyMethods {

}
/*********************************************
* deviceManagementExportJob
**********************************************/
export interface deviceManagementExportJob extends deviceManagementExportJobProps, deviceManagementExportJobMethods , entity { }
export interface deviceManagementExportJobProps {
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
export interface deviceManagementExportJobMethods {

}
/*********************************************
* enterpriseCodeSigningCertificate
**********************************************/
export interface enterpriseCodeSigningCertificate extends enterpriseCodeSigningCertificateProps, enterpriseCodeSigningCertificateMethods , entity { }
export interface enterpriseCodeSigningCertificateProps {
	content: any;
	expirationDateTime: any;
	issuer: string;
	issuerName: string;
	status: EnumTypes.certificateStatus;
	subject: string;
	subjectName: string;
	uploadDateTime: any;
}
export interface enterpriseCodeSigningCertificateMethods {

}
/*********************************************
* iosiPadOSWebClip
**********************************************/
export interface iosiPadOSWebClip extends iosiPadOSWebClipProps, iosiPadOSWebClipMethods , mobileApp { }
export interface iosiPadOSWebClipProps {
	appUrl: string;
	useManagedBrowser: boolean;
}
export interface iosiPadOSWebClipMethods {

}
/*********************************************
* iosLobApp
**********************************************/
export interface iosLobApp extends iosLobAppProps, iosLobAppMethods , mobileLobApp { }
export interface iosLobAppProps {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	buildNumber: string;
	bundleId: string;
	expirationDateTime: any;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;
	versionNumber: string;
}
export interface iosLobAppMethods {

}
/*********************************************
* iosLobAppProvisioningConfigurationAssignment
**********************************************/
export interface iosLobAppProvisioningConfigurationAssignment extends iosLobAppProvisioningConfigurationAssignmentProps, iosLobAppProvisioningConfigurationAssignmentMethods , entity { }
export interface iosLobAppProvisioningConfigurationAssignmentProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface iosLobAppProvisioningConfigurationAssignmentMethods {

}
/*********************************************
* iosMobileAppConfiguration
**********************************************/
export interface iosMobileAppConfiguration extends iosMobileAppConfigurationProps, iosMobileAppConfigurationMethods , managedDeviceMobileAppConfiguration { }
export interface iosMobileAppConfigurationProps {
	encodedSettingXml: any;
	settings: ComplexTypes.appConfigurationSettingItem[];
}
export interface iosMobileAppConfigurationMethods {

}
/*********************************************
* iosStoreApp
**********************************************/
export interface iosStoreApp extends iosStoreAppProps, iosStoreAppMethods , mobileApp { }
export interface iosStoreAppProps {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	appStoreUrl: string;
	bundleId: string;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;
}
export interface iosStoreAppMethods {

}
/*********************************************
* iosVppApp
**********************************************/
export interface iosVppApp extends iosVppAppProps, iosVppAppMethods , mobileApp { }
export interface iosVppAppProps {
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
export interface iosVppAppMethods {

}
/*********************************************
* macOSDmgApp
**********************************************/
export interface macOSDmgApp extends macOSDmgAppProps, macOSDmgAppMethods , mobileLobApp { }
export interface macOSDmgAppProps {
	ignoreVersionDetection: boolean;
	includedApps: ComplexTypes.macOSIncludedApp[];
	minimumSupportedOperatingSystem: ComplexTypes.macOSMinimumOperatingSystem;
	primaryBundleId: string;
	primaryBundleVersion: string;
}
export interface macOSDmgAppMethods {

}
/*********************************************
* macOSLobApp
**********************************************/
export interface macOSLobApp extends macOSLobAppProps, macOSLobAppMethods , mobileLobApp { }
export interface macOSLobAppProps {
	buildNumber: string;
	bundleId: string;
	childApps: ComplexTypes.macOSLobChildApp[];
	ignoreVersionDetection: boolean;
	installAsManaged: boolean;
	md5Hash: Array<string>[];
	md5HashChunkSize: number;
	minimumSupportedOperatingSystem: ComplexTypes.macOSMinimumOperatingSystem;
	versionNumber: string;
}
export interface macOSLobAppMethods {

}
/*********************************************
* macOSMicrosoftDefenderApp
**********************************************/
export interface macOSMicrosoftDefenderApp extends macOSMicrosoftDefenderAppProps, macOSMicrosoftDefenderAppMethods , mobileApp { }
export interface macOSMicrosoftDefenderAppProps {

}
export interface macOSMicrosoftDefenderAppMethods {

}
/*********************************************
* macOSMicrosoftEdgeApp
**********************************************/
export interface macOSMicrosoftEdgeApp extends macOSMicrosoftEdgeAppProps, macOSMicrosoftEdgeAppMethods , mobileApp { }
export interface macOSMicrosoftEdgeAppProps {
	channel: EnumTypes.microsoftEdgeChannel;
}
export interface macOSMicrosoftEdgeAppMethods {

}
/*********************************************
* macOSOfficeSuiteApp
**********************************************/
export interface macOSOfficeSuiteApp extends macOSOfficeSuiteAppProps, macOSOfficeSuiteAppMethods , mobileApp { }
export interface macOSOfficeSuiteAppProps {

}
export interface macOSOfficeSuiteAppMethods {

}
/*********************************************
* managedApp
**********************************************/
export interface managedApp extends managedAppProps, managedAppMethods , mobileApp { }
export interface managedAppProps {
	appAvailability: EnumTypes.managedAppAvailability;
	version: string;
}
export interface managedAppMethods {

}
/*********************************************
* managedMobileLobApp
**********************************************/
export interface managedMobileLobApp extends managedMobileLobAppProps, managedMobileLobAppMethods , managedApp { }
export interface managedMobileLobAppProps {
	committedContentVersion: string;
	fileName: string;
	size: number;
}
export interface managedMobileLobAppMethods {
	contentVersions(): IBaseQuery<mobileAppContent[]>;
	contentVersions(id: string | number): IBaseQuery<mobileAppContent>;
}
/*********************************************
* managedAndroidLobApp
**********************************************/
export interface managedAndroidLobApp extends managedAndroidLobAppProps, managedAndroidLobAppMethods , managedMobileLobApp { }
export interface managedAndroidLobAppProps {
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;
	versionCode: string;
	versionName: string;
}
export interface managedAndroidLobAppMethods {

}
/*********************************************
* managedAndroidStoreApp
**********************************************/
export interface managedAndroidStoreApp extends managedAndroidStoreAppProps, managedAndroidStoreAppMethods , managedApp { }
export interface managedAndroidStoreAppProps {
	appStoreUrl: string;
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;
}
export interface managedAndroidStoreAppMethods {

}
/*********************************************
* managedDeviceMobileAppConfigurationAssignment
**********************************************/
export interface managedDeviceMobileAppConfigurationAssignment extends managedDeviceMobileAppConfigurationAssignmentProps, managedDeviceMobileAppConfigurationAssignmentMethods , entity { }
export interface managedDeviceMobileAppConfigurationAssignmentProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface managedDeviceMobileAppConfigurationAssignmentMethods {

}
/*********************************************
* managedDeviceMobileAppConfigurationDeviceStatus
**********************************************/
export interface managedDeviceMobileAppConfigurationDeviceStatus extends managedDeviceMobileAppConfigurationDeviceStatusProps, managedDeviceMobileAppConfigurationDeviceStatusMethods , entity { }
export interface managedDeviceMobileAppConfigurationDeviceStatusProps {
	complianceGracePeriodExpirationDateTime: any;
	deviceDisplayName: string;
	deviceModel: string;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userName: string;
	userPrincipalName: string;
}
export interface managedDeviceMobileAppConfigurationDeviceStatusMethods {

}
/*********************************************
* managedDeviceMobileAppConfigurationDeviceSummary
**********************************************/
export interface managedDeviceMobileAppConfigurationDeviceSummary extends managedDeviceMobileAppConfigurationDeviceSummaryProps, managedDeviceMobileAppConfigurationDeviceSummaryMethods , entity { }
export interface managedDeviceMobileAppConfigurationDeviceSummaryProps {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;
}
export interface managedDeviceMobileAppConfigurationDeviceSummaryMethods {

}
/*********************************************
* managedDeviceMobileAppConfigurationUserStatus
**********************************************/
export interface managedDeviceMobileAppConfigurationUserStatus extends managedDeviceMobileAppConfigurationUserStatusProps, managedDeviceMobileAppConfigurationUserStatusMethods , entity { }
export interface managedDeviceMobileAppConfigurationUserStatusProps {
	devicesCount: number;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userDisplayName: string;
	userPrincipalName: string;
}
export interface managedDeviceMobileAppConfigurationUserStatusMethods {

}
/*********************************************
* managedDeviceMobileAppConfigurationUserSummary
**********************************************/
export interface managedDeviceMobileAppConfigurationUserSummary extends managedDeviceMobileAppConfigurationUserSummaryProps, managedDeviceMobileAppConfigurationUserSummaryMethods , entity { }
export interface managedDeviceMobileAppConfigurationUserSummaryProps {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;
}
export interface managedDeviceMobileAppConfigurationUserSummaryMethods {

}
/*********************************************
* managedIOSLobApp
**********************************************/
export interface managedIOSLobApp extends managedIOSLobAppProps, managedIOSLobAppMethods , managedMobileLobApp { }
export interface managedIOSLobAppProps {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	buildNumber: string;
	bundleId: string;
	expirationDateTime: any;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;
	versionNumber: string;
}
export interface managedIOSLobAppMethods {

}
/*********************************************
* managedIOSStoreApp
**********************************************/
export interface managedIOSStoreApp extends managedIOSStoreAppProps, managedIOSStoreAppMethods , managedApp { }
export interface managedIOSStoreAppProps {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	appStoreUrl: string;
	bundleId: string;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;
}
export interface managedIOSStoreAppMethods {

}
/*********************************************
* mobileAppContent
**********************************************/
export interface mobileAppContent extends mobileAppContentProps, mobileAppContentMethods , entity { }
export interface mobileAppContentProps {

}
export interface mobileAppContentMethods {
	containedApps(): IBaseQuery<mobileContainedApp[]>;
	containedApps(id: string | number): IBaseQuery<mobileContainedApp>;
	files(): IBaseQuery<mobileAppContentFile[]>;
	files(id: string | number): IBaseQuery<mobileAppContentFile>;
}
/*********************************************
* microsoftStoreForBusinessApp
**********************************************/
export interface microsoftStoreForBusinessApp extends microsoftStoreForBusinessAppProps, microsoftStoreForBusinessAppMethods , mobileApp { }
export interface microsoftStoreForBusinessAppProps {
	licenseType: EnumTypes.microsoftStoreForBusinessLicenseType;
	packageIdentityName: string;
	productKey: string;
	totalLicenseCount: number;
	usedLicenseCount: number;
}
export interface microsoftStoreForBusinessAppMethods {

}
/*********************************************
* mobileAppAssignment
**********************************************/
export interface mobileAppAssignment extends mobileAppAssignmentProps, mobileAppAssignmentMethods , entity { }
export interface mobileAppAssignmentProps {
	intent: EnumTypes.installIntent;
	settings: ComplexTypes.mobileAppAssignmentSettings;
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface mobileAppAssignmentMethods {

}
/*********************************************
* mobileContainedApp
**********************************************/
export interface mobileContainedApp extends mobileContainedAppProps, mobileContainedAppMethods , entity { }
export interface mobileContainedAppProps {

}
export interface mobileContainedAppMethods {

}
/*********************************************
* mobileAppContentFile
**********************************************/
export interface mobileAppContentFile extends mobileAppContentFileProps, mobileAppContentFileMethods , entity { }
export interface mobileAppContentFileProps {
	azureStorageUri: string;
	azureStorageUriExpirationDateTime: any;
	createdDateTime: any;
	isCommitted: boolean;
	isDependency: boolean;
	manifest: any;
	name: string;
	size: number;
	sizeEncrypted: number;
	uploadState: EnumTypes.mobileAppContentFileUploadState;
}
export interface mobileAppContentFileMethods {

}
/*********************************************
* webApp
**********************************************/
export interface webApp extends webAppProps, webAppMethods , mobileApp { }
export interface webAppProps {
	appUrl: string;
	useManagedBrowser: boolean;
}
export interface webAppMethods {

}
/*********************************************
* win32LobApp
**********************************************/
export interface win32LobApp extends win32LobAppProps, win32LobAppMethods , mobileLobApp { }
export interface win32LobAppProps {
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
export interface win32LobAppMethods {

}
/*********************************************
* windowsAppX
**********************************************/
export interface windowsAppX extends windowsAppXProps, windowsAppXMethods , mobileLobApp { }
export interface windowsAppXProps {
	applicableArchitectures: EnumTypes.windowsArchitecture;
	identityName: string;
	identityPublisherHash: string;
	identityResourceIdentifier: string;
	identityVersion: string;
	isBundle: boolean;
	minimumSupportedOperatingSystem: ComplexTypes.windowsMinimumOperatingSystem;
}
export interface windowsAppXMethods {

}
/*********************************************
* windowsMicrosoftEdgeApp
**********************************************/
export interface windowsMicrosoftEdgeApp extends windowsMicrosoftEdgeAppProps, windowsMicrosoftEdgeAppMethods , mobileApp { }
export interface windowsMicrosoftEdgeAppProps {
	channel: EnumTypes.microsoftEdgeChannel;
	displayLanguageLocale: string;
}
export interface windowsMicrosoftEdgeAppMethods {

}
/*********************************************
* windowsMobileMSI
**********************************************/
export interface windowsMobileMSI extends windowsMobileMSIProps, windowsMobileMSIMethods , mobileLobApp { }
export interface windowsMobileMSIProps {
	commandLine: string;
	ignoreVersionDetection: boolean;
	productCode: string;
	productVersion: string;
}
export interface windowsMobileMSIMethods {

}
/*********************************************
* windowsUniversalAppX
**********************************************/
export interface windowsUniversalAppX extends windowsUniversalAppXProps, windowsUniversalAppXMethods , mobileLobApp { }
export interface windowsUniversalAppXProps {
	applicableArchitectures: EnumTypes.windowsArchitecture;
	applicableDeviceTypes: EnumTypes.windowsDeviceType;
	identityName: string;
	identityPublisherHash: string;
	identityResourceIdentifier: string;
	identityVersion: string;
	isBundle: boolean;
	minimumSupportedOperatingSystem: ComplexTypes.windowsMinimumOperatingSystem;
}
export interface windowsUniversalAppXMethods {
	committedContainedApps(): IBaseQuery<mobileContainedApp[]>;
	committedContainedApps(id: string | number): IBaseQuery<mobileContainedApp>;
}
/*********************************************
* windowsUniversalAppXContainedApp
**********************************************/
export interface windowsUniversalAppXContainedApp extends windowsUniversalAppXContainedAppProps, windowsUniversalAppXContainedAppMethods , mobileContainedApp { }
export interface windowsUniversalAppXContainedAppProps {
	appUserModelId: string;
}
export interface windowsUniversalAppXContainedAppMethods {

}
/*********************************************
* windowsWebApp
**********************************************/
export interface windowsWebApp extends windowsWebAppProps, windowsWebAppMethods , mobileApp { }
export interface windowsWebAppProps {
	appUrl: string;
}
export interface windowsWebAppMethods {

}
/*********************************************
* deviceInstallState
**********************************************/
export interface deviceInstallState extends deviceInstallStateProps, deviceInstallStateMethods , entity { }
export interface deviceInstallStateProps {
	deviceId: string;
	deviceName: string;
	errorCode: string;
	installState: EnumTypes.installState;
	lastSyncDateTime: any;
	osDescription: string;
	osVersion: string;
	userName: string;
}
export interface deviceInstallStateMethods {

}
/*********************************************
* eBookInstallSummary
**********************************************/
export interface eBookInstallSummary extends eBookInstallSummaryProps, eBookInstallSummaryMethods , entity { }
export interface eBookInstallSummaryProps {
	failedDeviceCount: number;
	failedUserCount: number;
	installedDeviceCount: number;
	installedUserCount: number;
	notInstalledDeviceCount: number;
	notInstalledUserCount: number;
}
export interface eBookInstallSummaryMethods {

}
/*********************************************
* iosVppEBook
**********************************************/
export interface iosVppEBook extends iosVppEBookProps, iosVppEBookMethods , managedEBook { }
export interface iosVppEBookProps {
	appleId: string;
	genres: Array<string>[];
	language: string;
	seller: string;
	totalLicenseCount: number;
	usedLicenseCount: number;
	vppOrganizationName: string;
	vppTokenId: any;
}
export interface iosVppEBookMethods {

}
/*********************************************
* managedEBookAssignment
**********************************************/
export interface managedEBookAssignment extends managedEBookAssignmentProps, managedEBookAssignmentMethods , entity { }
export interface managedEBookAssignmentProps {
	installIntent: EnumTypes.installIntent;
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface managedEBookAssignmentMethods {

}
/*********************************************
* iosVppEBookAssignment
**********************************************/
export interface iosVppEBookAssignment extends iosVppEBookAssignmentProps, iosVppEBookAssignmentMethods , managedEBookAssignment { }
export interface iosVppEBookAssignmentProps {

}
export interface iosVppEBookAssignmentMethods {

}
/*********************************************
* userInstallStateSummary
**********************************************/
export interface userInstallStateSummary extends userInstallStateSummaryProps, userInstallStateSummaryMethods , entity { }
export interface userInstallStateSummaryProps {
	failedDeviceCount: number;
	installedDeviceCount: number;
	notInstalledDeviceCount: number;
	userName: string;
}
export interface userInstallStateSummaryMethods {
	deviceStates(): IBaseQuery<deviceInstallState[]>;
	deviceStates(id: string | number): IBaseQuery<deviceInstallState>;
}
/*********************************************
* termsAndConditionsAcceptanceStatus
**********************************************/
export interface termsAndConditionsAcceptanceStatus extends termsAndConditionsAcceptanceStatusProps, termsAndConditionsAcceptanceStatusMethods , entity { }
export interface termsAndConditionsAcceptanceStatusProps {
	acceptedDateTime: any;
	acceptedVersion: number;
	userDisplayName: string;
	userPrincipalName: string;
}
export interface termsAndConditionsAcceptanceStatusMethods {
	termsAndConditions(): IBaseQuery<termsAndConditions>;
}
/*********************************************
* termsAndConditionsAssignment
**********************************************/
export interface termsAndConditionsAssignment extends termsAndConditionsAssignmentProps, termsAndConditionsAssignmentMethods , entity { }
export interface termsAndConditionsAssignmentProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface termsAndConditionsAssignmentMethods {

}
/*********************************************
* androidCompliancePolicy
**********************************************/
export interface androidCompliancePolicy extends androidCompliancePolicyProps, androidCompliancePolicyMethods , deviceCompliancePolicy { }
export interface androidCompliancePolicyProps {
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
export interface androidCompliancePolicyMethods {

}
/*********************************************
* androidCustomConfiguration
**********************************************/
export interface androidCustomConfiguration extends androidCustomConfigurationProps, androidCustomConfigurationMethods , deviceConfiguration { }
export interface androidCustomConfigurationProps {
	omaSettings: ComplexTypes.omaSetting[];
}
export interface androidCustomConfigurationMethods {

}
/*********************************************
* androidGeneralDeviceConfiguration
**********************************************/
export interface androidGeneralDeviceConfiguration extends androidGeneralDeviceConfigurationProps, androidGeneralDeviceConfigurationMethods , deviceConfiguration { }
export interface androidGeneralDeviceConfigurationProps {
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
export interface androidGeneralDeviceConfigurationMethods {

}
/*********************************************
* androidWorkProfileCompliancePolicy
**********************************************/
export interface androidWorkProfileCompliancePolicy extends androidWorkProfileCompliancePolicyProps, androidWorkProfileCompliancePolicyMethods , deviceCompliancePolicy { }
export interface androidWorkProfileCompliancePolicyProps {
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
export interface androidWorkProfileCompliancePolicyMethods {

}
/*********************************************
* androidWorkProfileCustomConfiguration
**********************************************/
export interface androidWorkProfileCustomConfiguration extends androidWorkProfileCustomConfigurationProps, androidWorkProfileCustomConfigurationMethods , deviceConfiguration { }
export interface androidWorkProfileCustomConfigurationProps {
	omaSettings: ComplexTypes.omaSetting[];
}
export interface androidWorkProfileCustomConfigurationMethods {

}
/*********************************************
* androidWorkProfileGeneralDeviceConfiguration
**********************************************/
export interface androidWorkProfileGeneralDeviceConfiguration extends androidWorkProfileGeneralDeviceConfigurationProps, androidWorkProfileGeneralDeviceConfigurationMethods , deviceConfiguration { }
export interface androidWorkProfileGeneralDeviceConfigurationProps {
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
export interface androidWorkProfileGeneralDeviceConfigurationMethods {

}
/*********************************************
* appleDeviceFeaturesConfigurationBase
**********************************************/
export interface appleDeviceFeaturesConfigurationBase extends appleDeviceFeaturesConfigurationBaseProps, appleDeviceFeaturesConfigurationBaseMethods , deviceConfiguration { }
export interface appleDeviceFeaturesConfigurationBaseProps {

}
export interface appleDeviceFeaturesConfigurationBaseMethods {

}
/*********************************************
* deviceComplianceActionItem
**********************************************/
export interface deviceComplianceActionItem extends deviceComplianceActionItemProps, deviceComplianceActionItemMethods , entity { }
export interface deviceComplianceActionItemProps {
	actionType: EnumTypes.deviceComplianceActionType;
	gracePeriodHours: number;
	notificationMessageCCList: Array<string>[];
	notificationTemplateId: string;
}
export interface deviceComplianceActionItemMethods {

}
/*********************************************
* deviceComplianceDeviceOverview
**********************************************/
export interface deviceComplianceDeviceOverview extends deviceComplianceDeviceOverviewProps, deviceComplianceDeviceOverviewMethods , entity { }
export interface deviceComplianceDeviceOverviewProps {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;
}
export interface deviceComplianceDeviceOverviewMethods {

}
/*********************************************
* deviceComplianceDeviceStatus
**********************************************/
export interface deviceComplianceDeviceStatus extends deviceComplianceDeviceStatusProps, deviceComplianceDeviceStatusMethods , entity { }
export interface deviceComplianceDeviceStatusProps {
	complianceGracePeriodExpirationDateTime: any;
	deviceDisplayName: string;
	deviceModel: string;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userName: string;
	userPrincipalName: string;
}
export interface deviceComplianceDeviceStatusMethods {

}
/*********************************************
* deviceCompliancePolicyAssignment
**********************************************/
export interface deviceCompliancePolicyAssignment extends deviceCompliancePolicyAssignmentProps, deviceCompliancePolicyAssignmentMethods , entity { }
export interface deviceCompliancePolicyAssignmentProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface deviceCompliancePolicyAssignmentMethods {

}
/*********************************************
* settingStateDeviceSummary
**********************************************/
export interface settingStateDeviceSummary extends settingStateDeviceSummaryProps, settingStateDeviceSummaryMethods , entity { }
export interface settingStateDeviceSummaryProps {
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
export interface settingStateDeviceSummaryMethods {

}
/*********************************************
* deviceComplianceScheduledActionForRule
**********************************************/
export interface deviceComplianceScheduledActionForRule extends deviceComplianceScheduledActionForRuleProps, deviceComplianceScheduledActionForRuleMethods , entity { }
export interface deviceComplianceScheduledActionForRuleProps {
	ruleName: string;
}
export interface deviceComplianceScheduledActionForRuleMethods {
	scheduledActionConfigurations(): IBaseQuery<deviceComplianceActionItem[]>;
	scheduledActionConfigurations(id: string | number): IBaseQuery<deviceComplianceActionItem>;
}
/*********************************************
* deviceComplianceUserStatus
**********************************************/
export interface deviceComplianceUserStatus extends deviceComplianceUserStatusProps, deviceComplianceUserStatusMethods , entity { }
export interface deviceComplianceUserStatusProps {
	devicesCount: number;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userDisplayName: string;
	userPrincipalName: string;
}
export interface deviceComplianceUserStatusMethods {

}
/*********************************************
* deviceComplianceUserOverview
**********************************************/
export interface deviceComplianceUserOverview extends deviceComplianceUserOverviewProps, deviceComplianceUserOverviewMethods , entity { }
export interface deviceComplianceUserOverviewProps {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;
}
export interface deviceComplianceUserOverviewMethods {

}
/*********************************************
* deviceComplianceSettingState
**********************************************/
export interface deviceComplianceSettingState extends deviceComplianceSettingStateProps, deviceComplianceSettingStateMethods , entity { }
export interface deviceComplianceSettingStateProps {
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
export interface deviceComplianceSettingStateMethods {

}
/*********************************************
* deviceCompliancePolicyState
**********************************************/
export interface deviceCompliancePolicyState extends deviceCompliancePolicyStateProps, deviceCompliancePolicyStateMethods , entity { }
export interface deviceCompliancePolicyStateProps {
	displayName: string;
	platformType: EnumTypes.policyPlatformType;
	settingCount: number;
	settingStates: ComplexTypes.deviceCompliancePolicySettingState[];
	state: EnumTypes.complianceStatus;
	version: number;
}
export interface deviceCompliancePolicyStateMethods {

}
/*********************************************
* deviceConfigurationAssignment
**********************************************/
export interface deviceConfigurationAssignment extends deviceConfigurationAssignmentProps, deviceConfigurationAssignmentMethods , entity { }
export interface deviceConfigurationAssignmentProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface deviceConfigurationAssignmentMethods {

}
/*********************************************
* deviceConfigurationDeviceStatus
**********************************************/
export interface deviceConfigurationDeviceStatus extends deviceConfigurationDeviceStatusProps, deviceConfigurationDeviceStatusMethods , entity { }
export interface deviceConfigurationDeviceStatusProps {
	complianceGracePeriodExpirationDateTime: any;
	deviceDisplayName: string;
	deviceModel: string;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userName: string;
	userPrincipalName: string;
}
export interface deviceConfigurationDeviceStatusMethods {

}
/*********************************************
* deviceConfigurationDeviceOverview
**********************************************/
export interface deviceConfigurationDeviceOverview extends deviceConfigurationDeviceOverviewProps, deviceConfigurationDeviceOverviewMethods , entity { }
export interface deviceConfigurationDeviceOverviewProps {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;
}
export interface deviceConfigurationDeviceOverviewMethods {

}
/*********************************************
* deviceConfigurationUserStatus
**********************************************/
export interface deviceConfigurationUserStatus extends deviceConfigurationUserStatusProps, deviceConfigurationUserStatusMethods , entity { }
export interface deviceConfigurationUserStatusProps {
	devicesCount: number;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userDisplayName: string;
	userPrincipalName: string;
}
export interface deviceConfigurationUserStatusMethods {

}
/*********************************************
* deviceConfigurationUserOverview
**********************************************/
export interface deviceConfigurationUserOverview extends deviceConfigurationUserOverviewProps, deviceConfigurationUserOverviewMethods , entity { }
export interface deviceConfigurationUserOverviewProps {
	configurationVersion: number;
	errorCount: number;
	failedCount: number;
	lastUpdateDateTime: any;
	notApplicableCount: number;
	pendingCount: number;
	successCount: number;
}
export interface deviceConfigurationUserOverviewMethods {

}
/*********************************************
* deviceConfigurationState
**********************************************/
export interface deviceConfigurationState extends deviceConfigurationStateProps, deviceConfigurationStateMethods , entity { }
export interface deviceConfigurationStateProps {
	displayName: string;
	platformType: EnumTypes.policyPlatformType;
	settingCount: number;
	settingStates: ComplexTypes.deviceConfigurationSettingState[];
	state: EnumTypes.complianceStatus;
	version: number;
}
export interface deviceConfigurationStateMethods {

}
/*********************************************
* editionUpgradeConfiguration
**********************************************/
export interface editionUpgradeConfiguration extends editionUpgradeConfigurationProps, editionUpgradeConfigurationMethods , deviceConfiguration { }
export interface editionUpgradeConfigurationProps {
	license: string;
	licenseType: EnumTypes.editionUpgradeLicenseType;
	productKey: string;
	targetEdition: EnumTypes.windows10EditionType;
}
export interface editionUpgradeConfigurationMethods {

}
/*********************************************
* iosCertificateProfile
**********************************************/
export interface iosCertificateProfile extends iosCertificateProfileProps, iosCertificateProfileMethods , deviceConfiguration { }
export interface iosCertificateProfileProps {

}
export interface iosCertificateProfileMethods {

}
/*********************************************
* iosCompliancePolicy
**********************************************/
export interface iosCompliancePolicy extends iosCompliancePolicyProps, iosCompliancePolicyMethods , deviceCompliancePolicy { }
export interface iosCompliancePolicyProps {
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
export interface iosCompliancePolicyMethods {

}
/*********************************************
* iosCustomConfiguration
**********************************************/
export interface iosCustomConfiguration extends iosCustomConfigurationProps, iosCustomConfigurationMethods , deviceConfiguration { }
export interface iosCustomConfigurationProps {
	payload: any;
	payloadFileName: string;
	payloadName: string;
}
export interface iosCustomConfigurationMethods {

}
/*********************************************
* iosDeviceFeaturesConfiguration
**********************************************/
export interface iosDeviceFeaturesConfiguration extends iosDeviceFeaturesConfigurationProps, iosDeviceFeaturesConfigurationMethods , appleDeviceFeaturesConfigurationBase { }
export interface iosDeviceFeaturesConfigurationProps {
	assetTagTemplate: string;
	homeScreenDockIcons: ComplexTypes.iosHomeScreenItem[];
	homeScreenPages: ComplexTypes.iosHomeScreenPage[];
	lockScreenFootnote: string;
	notificationSettings: ComplexTypes.iosNotificationSettings[];
}
export interface iosDeviceFeaturesConfigurationMethods {

}
/*********************************************
* iosGeneralDeviceConfiguration
**********************************************/
export interface iosGeneralDeviceConfiguration extends iosGeneralDeviceConfigurationProps, iosGeneralDeviceConfigurationMethods , deviceConfiguration { }
export interface iosGeneralDeviceConfigurationProps {
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
export interface iosGeneralDeviceConfigurationMethods {

}
/*********************************************
* iosUpdateConfiguration
**********************************************/
export interface iosUpdateConfiguration extends iosUpdateConfigurationProps, iosUpdateConfigurationMethods , deviceConfiguration { }
export interface iosUpdateConfigurationProps {
	activeHoursEnd: any;
	activeHoursStart: any;
	scheduledInstallDays: EnumTypes.dayOfWeek[];
	utcTimeOffsetInMinutes: number;
}
export interface iosUpdateConfigurationMethods {

}
/*********************************************
* macOSCompliancePolicy
**********************************************/
export interface macOSCompliancePolicy extends macOSCompliancePolicyProps, macOSCompliancePolicyMethods , deviceCompliancePolicy { }
export interface macOSCompliancePolicyProps {
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
export interface macOSCompliancePolicyMethods {

}
/*********************************************
* macOSCustomConfiguration
**********************************************/
export interface macOSCustomConfiguration extends macOSCustomConfigurationProps, macOSCustomConfigurationMethods , deviceConfiguration { }
export interface macOSCustomConfigurationProps {
	payload: any;
	payloadFileName: string;
	payloadName: string;
}
export interface macOSCustomConfigurationMethods {

}
/*********************************************
* macOSDeviceFeaturesConfiguration
**********************************************/
export interface macOSDeviceFeaturesConfiguration extends macOSDeviceFeaturesConfigurationProps, macOSDeviceFeaturesConfigurationMethods , appleDeviceFeaturesConfigurationBase { }
export interface macOSDeviceFeaturesConfigurationProps {

}
export interface macOSDeviceFeaturesConfigurationMethods {

}
/*********************************************
* macOSGeneralDeviceConfiguration
**********************************************/
export interface macOSGeneralDeviceConfiguration extends macOSGeneralDeviceConfigurationProps, macOSGeneralDeviceConfigurationMethods , deviceConfiguration { }
export interface macOSGeneralDeviceConfigurationProps {
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
export interface macOSGeneralDeviceConfigurationMethods {

}
/*********************************************
* deviceLogCollectionResponse
**********************************************/
export interface deviceLogCollectionResponse extends deviceLogCollectionResponseProps, deviceLogCollectionResponseMethods , entity { }
export interface deviceLogCollectionResponseProps {
	enrolledByUser: string;
	expirationDateTimeUTC: any;
	initiatedByUserPrincipalName: string;
	managedDeviceId: any;
	receivedDateTimeUTC: any;
	requestedDateTimeUTC: any;
	sizeInKB: number;
	status: EnumTypes.appLogUploadState;
}
export interface deviceLogCollectionResponseMethods {

}
/*********************************************
* windowsProtectionState
**********************************************/
export interface windowsProtectionState extends windowsProtectionStateProps, windowsProtectionStateMethods , entity { }
export interface windowsProtectionStateProps {
	antiMalwareVersion: string;
	deviceState: EnumTypes.windowsDeviceHealthState;
	engineVersion: string;
	fullScanOverdue: boolean;
	fullScanRequired: boolean;
	isVirtualMachine: boolean;
	lastFullScanDateTime: any;
	lastFullScanSignatureVersion: string;
	lastQuickScanDateTime: any;
	lastQuickScanSignatureVersion: string;
	lastReportedDateTime: any;
	malwareProtectionEnabled: boolean;
	networkInspectionSystemEnabled: boolean;
	productStatus: EnumTypes.windowsDefenderProductStatus;
	quickScanOverdue: boolean;
	realTimeProtectionEnabled: boolean;
	rebootRequired: boolean;
	signatureUpdateOverdue: boolean;
	signatureVersion: string;
	tamperProtectionEnabled: boolean;
}
export interface windowsProtectionStateMethods {
	detectedMalwareState(): IBaseQuery<windowsDeviceMalwareState[]>;
	detectedMalwareState(id: string | number): IBaseQuery<windowsDeviceMalwareState>;
}
/*********************************************
* sharedPCConfiguration
**********************************************/
export interface sharedPCConfiguration extends sharedPCConfigurationProps, sharedPCConfigurationMethods , deviceConfiguration { }
export interface sharedPCConfigurationProps {
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
export interface sharedPCConfigurationMethods {

}
/*********************************************
* windows10CompliancePolicy
**********************************************/
export interface windows10CompliancePolicy extends windows10CompliancePolicyProps, windows10CompliancePolicyMethods , deviceCompliancePolicy { }
export interface windows10CompliancePolicyProps {
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
export interface windows10CompliancePolicyMethods {

}
/*********************************************
* windows10CustomConfiguration
**********************************************/
export interface windows10CustomConfiguration extends windows10CustomConfigurationProps, windows10CustomConfigurationMethods , deviceConfiguration { }
export interface windows10CustomConfigurationProps {
	omaSettings: ComplexTypes.omaSetting[];
}
export interface windows10CustomConfigurationMethods {

}
/*********************************************
* windows10EndpointProtectionConfiguration
**********************************************/
export interface windows10EndpointProtectionConfiguration extends windows10EndpointProtectionConfigurationProps, windows10EndpointProtectionConfigurationMethods , deviceConfiguration { }
export interface windows10EndpointProtectionConfigurationProps {
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
export interface windows10EndpointProtectionConfigurationMethods {

}
/*********************************************
* windows10EnterpriseModernAppManagementConfiguration
**********************************************/
export interface windows10EnterpriseModernAppManagementConfiguration extends windows10EnterpriseModernAppManagementConfigurationProps, windows10EnterpriseModernAppManagementConfigurationMethods , deviceConfiguration { }
export interface windows10EnterpriseModernAppManagementConfigurationProps {
	uninstallBuiltInApps: boolean;
}
export interface windows10EnterpriseModernAppManagementConfigurationMethods {

}
/*********************************************
* windows10GeneralConfiguration
**********************************************/
export interface windows10GeneralConfiguration extends windows10GeneralConfigurationProps, windows10GeneralConfigurationMethods , deviceConfiguration { }
export interface windows10GeneralConfigurationProps {
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
export interface windows10GeneralConfigurationMethods {

}
/*********************************************
* windows10MobileCompliancePolicy
**********************************************/
export interface windows10MobileCompliancePolicy extends windows10MobileCompliancePolicyProps, windows10MobileCompliancePolicyMethods , deviceCompliancePolicy { }
export interface windows10MobileCompliancePolicyProps {
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
export interface windows10MobileCompliancePolicyMethods {

}
/*********************************************
* windows10SecureAssessmentConfiguration
**********************************************/
export interface windows10SecureAssessmentConfiguration extends windows10SecureAssessmentConfigurationProps, windows10SecureAssessmentConfigurationMethods , deviceConfiguration { }
export interface windows10SecureAssessmentConfigurationProps {
	allowPrinting: boolean;
	allowScreenCapture: boolean;
	allowTextSuggestion: boolean;
	configurationAccount: string;
	launchUri: string;
}
export interface windows10SecureAssessmentConfigurationMethods {

}
/*********************************************
* windows10TeamGeneralConfiguration
**********************************************/
export interface windows10TeamGeneralConfiguration extends windows10TeamGeneralConfigurationProps, windows10TeamGeneralConfigurationMethods , deviceConfiguration { }
export interface windows10TeamGeneralConfigurationProps {
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
export interface windows10TeamGeneralConfigurationMethods {

}
/*********************************************
* windows81CompliancePolicy
**********************************************/
export interface windows81CompliancePolicy extends windows81CompliancePolicyProps, windows81CompliancePolicyMethods , deviceCompliancePolicy { }
export interface windows81CompliancePolicyProps {
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
export interface windows81CompliancePolicyMethods {

}
/*********************************************
* windows81GeneralConfiguration
**********************************************/
export interface windows81GeneralConfiguration extends windows81GeneralConfigurationProps, windows81GeneralConfigurationMethods , deviceConfiguration { }
export interface windows81GeneralConfigurationProps {
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
export interface windows81GeneralConfigurationMethods {

}
/*********************************************
* windowsDefenderAdvancedThreatProtectionConfiguration
**********************************************/
export interface windowsDefenderAdvancedThreatProtectionConfiguration extends windowsDefenderAdvancedThreatProtectionConfigurationProps, windowsDefenderAdvancedThreatProtectionConfigurationMethods , deviceConfiguration { }
export interface windowsDefenderAdvancedThreatProtectionConfigurationProps {
	allowSampleSharing: boolean;
	enableExpeditedTelemetryReporting: boolean;
}
export interface windowsDefenderAdvancedThreatProtectionConfigurationMethods {

}
/*********************************************
* windowsPhone81CompliancePolicy
**********************************************/
export interface windowsPhone81CompliancePolicy extends windowsPhone81CompliancePolicyProps, windowsPhone81CompliancePolicyMethods , deviceCompliancePolicy { }
export interface windowsPhone81CompliancePolicyProps {
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
export interface windowsPhone81CompliancePolicyMethods {

}
/*********************************************
* windowsPhone81CustomConfiguration
**********************************************/
export interface windowsPhone81CustomConfiguration extends windowsPhone81CustomConfigurationProps, windowsPhone81CustomConfigurationMethods , deviceConfiguration { }
export interface windowsPhone81CustomConfigurationProps {
	omaSettings: ComplexTypes.omaSetting[];
}
export interface windowsPhone81CustomConfigurationMethods {

}
/*********************************************
* windowsPhone81GeneralConfiguration
**********************************************/
export interface windowsPhone81GeneralConfiguration extends windowsPhone81GeneralConfigurationProps, windowsPhone81GeneralConfigurationMethods , deviceConfiguration { }
export interface windowsPhone81GeneralConfigurationProps {
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
export interface windowsPhone81GeneralConfigurationMethods {

}
/*********************************************
* windowsUpdateForBusinessConfiguration
**********************************************/
export interface windowsUpdateForBusinessConfiguration extends windowsUpdateForBusinessConfigurationProps, windowsUpdateForBusinessConfigurationMethods , deviceConfiguration { }
export interface windowsUpdateForBusinessConfigurationProps {
	allowWindows11Upgrade: boolean;
	automaticUpdateMode: EnumTypes.automaticUpdateMode;
	autoRestartNotificationDismissal: EnumTypes.autoRestartNotificationDismissalMethod;
	businessReadyUpdatesOnly: EnumTypes.windowsUpdateType;
	deadlineForFeatureUpdatesInDays: number;
	deadlineForQualityUpdatesInDays: number;
	deadlineGracePeriodInDays: number;
	deliveryOptimizationMode: EnumTypes.windowsDeliveryOptimizationMode;
	driversExcluded: boolean;
	engagedRestartDeadlineInDays: number;
	engagedRestartSnoozeScheduleInDays: number;
	engagedRestartTransitionScheduleInDays: number;
	featureUpdatesDeferralPeriodInDays: number;
	featureUpdatesPaused: boolean;
	featureUpdatesPauseExpiryDateTime: any;
	featureUpdatesPauseStartDate: any;
	featureUpdatesRollbackStartDateTime: any;
	featureUpdatesRollbackWindowInDays: number;
	featureUpdatesWillBeRolledBack: boolean;
	installationSchedule: ComplexTypes.windowsUpdateInstallScheduleType;
	microsoftUpdateServiceAllowed: boolean;
	postponeRebootUntilAfterDeadline: boolean;
	prereleaseFeatures: EnumTypes.prereleaseFeatures;
	qualityUpdatesDeferralPeriodInDays: number;
	qualityUpdatesPaused: boolean;
	qualityUpdatesPauseExpiryDateTime: any;
	qualityUpdatesPauseStartDate: any;
	qualityUpdatesRollbackStartDateTime: any;
	qualityUpdatesWillBeRolledBack: boolean;
	scheduleImminentRestartWarningInMinutes: number;
	scheduleRestartWarningInHours: number;
	skipChecksBeforeRestart: boolean;
	updateNotificationLevel: EnumTypes.windowsUpdateNotificationDisplayOption;
	updateWeeks: EnumTypes.windowsUpdateForBusinessUpdateWeeks;
	userPauseAccess: EnumTypes.enablement;
	userWindowsUpdateScanAccess: EnumTypes.enablement;
}
export interface windowsUpdateForBusinessConfigurationMethods {

}
/*********************************************
* enrollmentConfigurationAssignment
**********************************************/
export interface enrollmentConfigurationAssignment extends enrollmentConfigurationAssignmentProps, enrollmentConfigurationAssignmentMethods , entity { }
export interface enrollmentConfigurationAssignmentProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface enrollmentConfigurationAssignmentMethods {

}
/*********************************************
* deviceEnrollmentLimitConfiguration
**********************************************/
export interface deviceEnrollmentLimitConfiguration extends deviceEnrollmentLimitConfigurationProps, deviceEnrollmentLimitConfigurationMethods , deviceEnrollmentConfiguration { }
export interface deviceEnrollmentLimitConfigurationProps {
	limit: number;
}
export interface deviceEnrollmentLimitConfigurationMethods {

}
/*********************************************
* deviceEnrollmentPlatformRestrictionsConfiguration
**********************************************/
export interface deviceEnrollmentPlatformRestrictionsConfiguration extends deviceEnrollmentPlatformRestrictionsConfigurationProps, deviceEnrollmentPlatformRestrictionsConfigurationMethods , deviceEnrollmentConfiguration { }
export interface deviceEnrollmentPlatformRestrictionsConfigurationProps {
	androidRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	iosRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	macOSRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	windowsMobileRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	windowsRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
}
export interface deviceEnrollmentPlatformRestrictionsConfigurationMethods {

}
/*********************************************
* deviceEnrollmentWindowsHelloForBusinessConfiguration
**********************************************/
export interface deviceEnrollmentWindowsHelloForBusinessConfiguration extends deviceEnrollmentWindowsHelloForBusinessConfigurationProps, deviceEnrollmentWindowsHelloForBusinessConfigurationMethods , deviceEnrollmentConfiguration { }
export interface deviceEnrollmentWindowsHelloForBusinessConfigurationProps {
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
export interface deviceEnrollmentWindowsHelloForBusinessConfigurationMethods {

}
/*********************************************
* windows10EnrollmentCompletionPageConfiguration
**********************************************/
export interface windows10EnrollmentCompletionPageConfiguration extends windows10EnrollmentCompletionPageConfigurationProps, windows10EnrollmentCompletionPageConfigurationMethods , deviceEnrollmentConfiguration { }
export interface windows10EnrollmentCompletionPageConfigurationProps {
	allowNonBlockingAppInstallation: boolean;
}
export interface windows10EnrollmentCompletionPageConfigurationMethods {

}
/*********************************************
* appLogCollectionRequest
**********************************************/
export interface appLogCollectionRequest extends appLogCollectionRequestProps, appLogCollectionRequestMethods , entity { }
export interface appLogCollectionRequestProps {
	completedDateTime: any;
	customLogFolders: Array<string>[];
	errorMessage: string;
	status: EnumTypes.appLogUploadState;
}
export interface appLogCollectionRequestMethods {

}
/*********************************************
* malwareStateForWindowsDevice
**********************************************/
export interface malwareStateForWindowsDevice extends malwareStateForWindowsDeviceProps, malwareStateForWindowsDeviceMethods , entity { }
export interface malwareStateForWindowsDeviceProps {
	detectionCount: number;
	deviceName: string;
	executionState: EnumTypes.windowsMalwareExecutionState;
	initialDetectionDateTime: any;
	lastStateChangeDateTime: any;
	threatState: EnumTypes.windowsMalwareThreatState;
}
export interface malwareStateForWindowsDeviceMethods {

}
/*********************************************
* userExperienceAnalyticsMetric
**********************************************/
export interface userExperienceAnalyticsMetric extends userExperienceAnalyticsMetricProps, userExperienceAnalyticsMetricMethods , entity { }
export interface userExperienceAnalyticsMetricProps {
	unit: string;
	value: number;
}
export interface userExperienceAnalyticsMetricMethods {

}
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereDevice
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereDevice extends userExperienceAnalyticsWorkFromAnywhereDeviceProps, userExperienceAnalyticsWorkFromAnywhereDeviceMethods , entity { }
export interface userExperienceAnalyticsWorkFromAnywhereDeviceProps {
	autoPilotProfileAssigned: boolean;
	autoPilotRegistered: boolean;
	azureAdDeviceId: string;
	azureAdJoinType: string;
	azureAdRegistered: boolean;
	cloudIdentityScore: number;
	cloudManagementScore: number;
	cloudProvisioningScore: number;
	compliancePolicySetToIntune: boolean;
	deviceId: string;
	deviceName: string;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	isCloudManagedGatewayEnabled: boolean;
	managedBy: string;
	manufacturer: string;
	model: string;
	osCheckFailed: boolean;
	osDescription: string;
	osVersion: string;
	otherWorkloadsSetToIntune: boolean;
	ownership: string;
	processor64BitCheckFailed: boolean;
	processorCoreCountCheckFailed: boolean;
	processorFamilyCheckFailed: boolean;
	processorSpeedCheckFailed: boolean;
	ramCheckFailed: boolean;
	secureBootCheckFailed: boolean;
	serialNumber: string;
	storageCheckFailed: boolean;
	tenantAttached: boolean;
	tpmCheckFailed: boolean;
	upgradeEligibility: EnumTypes.operatingSystemUpgradeEligibility;
	windowsScore: number;
	workFromAnywhereScore: number;
}
export interface userExperienceAnalyticsWorkFromAnywhereDeviceMethods {

}
/*********************************************
* windowsDeviceMalwareState
**********************************************/
export interface windowsDeviceMalwareState extends windowsDeviceMalwareStateProps, windowsDeviceMalwareStateMethods , entity { }
export interface windowsDeviceMalwareStateProps {
	additionalInformationUrl: string;
	category: EnumTypes.windowsMalwareCategory;
	detectionCount: number;
	displayName: string;
	executionState: EnumTypes.windowsMalwareExecutionState;
	initialDetectionDateTime: any;
	lastStateChangeDateTime: any;
	severity: EnumTypes.windowsMalwareSeverity;
	state: EnumTypes.windowsMalwareState;
	threatState: EnumTypes.windowsMalwareThreatState;
}
export interface windowsDeviceMalwareStateMethods {

}
/*********************************************
* importedWindowsAutopilotDeviceIdentityUpload
**********************************************/
export interface importedWindowsAutopilotDeviceIdentityUpload extends importedWindowsAutopilotDeviceIdentityUploadProps, importedWindowsAutopilotDeviceIdentityUploadMethods , entity { }
export interface importedWindowsAutopilotDeviceIdentityUploadProps {
	createdDateTimeUtc: any;
	status: EnumTypes.importedWindowsAutopilotDeviceIdentityUploadStatus;
}
export interface importedWindowsAutopilotDeviceIdentityUploadMethods {
	deviceIdentities(): IBaseQuery<importedWindowsAutopilotDeviceIdentity[]>;
	deviceIdentities(id: string | number): IBaseQuery<importedWindowsAutopilotDeviceIdentity>;
}
/*********************************************
* windowsAutopilotDeploymentProfile
**********************************************/
export interface windowsAutopilotDeploymentProfile extends windowsAutopilotDeploymentProfileProps, windowsAutopilotDeploymentProfileMethods , entity { }
export interface windowsAutopilotDeploymentProfileProps {
	createdDateTime: any;
	description: string;
	deviceNameTemplate: string;
	deviceType: EnumTypes.windowsAutopilotDeviceType;
	displayName: string;
	hardwareHashExtractionEnabled: boolean;
	lastModifiedDateTime: any;
	locale: string;
	managementServiceAppId: string;
	outOfBoxExperienceSetting: ComplexTypes.outOfBoxExperienceSetting;
	preprovisioningAllowed: boolean;
	roleScopeTagIds: Array<string>[];
}
export interface windowsAutopilotDeploymentProfileMethods {
	assignedDevices(): IBaseQuery<windowsAutopilotDeviceIdentity[]>;
	assignedDevices(id: string | number): IBaseQuery<windowsAutopilotDeviceIdentity>;
}
/*********************************************
* windowsAutopilotDeploymentProfileAssignment
**********************************************/
export interface windowsAutopilotDeploymentProfileAssignment extends windowsAutopilotDeploymentProfileAssignmentProps, windowsAutopilotDeploymentProfileAssignmentMethods , entity { }
export interface windowsAutopilotDeploymentProfileAssignmentProps {

}
export interface windowsAutopilotDeploymentProfileAssignmentMethods {

}
/*********************************************
* managedMobileApp
**********************************************/
export interface managedMobileApp extends managedMobileAppProps, managedMobileAppMethods , entity { }
export interface managedMobileAppProps {
	mobileAppIdentifier: ComplexTypes.mobileAppIdentifier;
	version: string;
}
export interface managedMobileAppMethods {

}
/*********************************************
* managedAppPolicyDeploymentSummary
**********************************************/
export interface managedAppPolicyDeploymentSummary extends managedAppPolicyDeploymentSummaryProps, managedAppPolicyDeploymentSummaryMethods , entity { }
export interface managedAppPolicyDeploymentSummaryProps {
	configurationDeployedUserCount: number;
	configurationDeploymentSummaryPerApp: ComplexTypes.managedAppPolicyDeploymentSummaryPerApp[];
	displayName: string;
	lastRefreshTime: any;
	version: string;
}
export interface managedAppPolicyDeploymentSummaryMethods {

}
/*********************************************
* androidManagedAppRegistration
**********************************************/
export interface androidManagedAppRegistration extends androidManagedAppRegistrationProps, androidManagedAppRegistrationMethods , managedAppRegistration { }
export interface androidManagedAppRegistrationProps {

}
export interface androidManagedAppRegistrationMethods {

}
/*********************************************
* iosManagedAppRegistration
**********************************************/
export interface iosManagedAppRegistration extends iosManagedAppRegistrationProps, iosManagedAppRegistrationMethods , managedAppRegistration { }
export interface iosManagedAppRegistrationProps {

}
export interface iosManagedAppRegistrationMethods {

}
/*********************************************
* managedAppOperation
**********************************************/
export interface managedAppOperation extends managedAppOperationProps, managedAppOperationMethods , entity { }
export interface managedAppOperationProps {
	displayName: string;
	lastModifiedDateTime: any;
	state: string;
	version: string;
}
export interface managedAppOperationMethods {

}
/*********************************************
* managedAppStatusRaw
**********************************************/
export interface managedAppStatusRaw extends managedAppStatusRawProps, managedAppStatusRawMethods , managedAppStatus { }
export interface managedAppStatusRawProps {
	content: ComplexTypes.Json;
}
export interface managedAppStatusRawMethods {

}
/*********************************************
* targetedManagedAppPolicyAssignment
**********************************************/
export interface targetedManagedAppPolicyAssignment extends targetedManagedAppPolicyAssignmentProps, targetedManagedAppPolicyAssignmentMethods , entity { }
export interface targetedManagedAppPolicyAssignmentProps {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;
}
export interface targetedManagedAppPolicyAssignmentMethods {

}
/*********************************************
* windowsInformationProtectionAppLockerFile
**********************************************/
export interface windowsInformationProtectionAppLockerFile extends windowsInformationProtectionAppLockerFileProps, windowsInformationProtectionAppLockerFileMethods , entity { }
export interface windowsInformationProtectionAppLockerFileProps {
	displayName: string;
	file: any;
	fileHash: string;
	version: string;
}
export interface windowsInformationProtectionAppLockerFileMethods {

}
/*********************************************
* localizedNotificationMessage
**********************************************/
export interface localizedNotificationMessage extends localizedNotificationMessageProps, localizedNotificationMessageMethods , entity { }
export interface localizedNotificationMessageProps {
	isDefault: boolean;
	lastModifiedDateTime: any;
	locale: string;
	messageTemplate: string;
	subject: string;
}
export interface localizedNotificationMessageMethods {

}
/*********************************************
* deviceAndAppManagementRoleDefinition
**********************************************/
export interface deviceAndAppManagementRoleDefinition extends deviceAndAppManagementRoleDefinitionProps, deviceAndAppManagementRoleDefinitionMethods , roleDefinition { }
export interface deviceAndAppManagementRoleDefinitionProps {

}
export interface deviceAndAppManagementRoleDefinitionMethods {

}
/*********************************************
* deviceManagementCachedReportConfiguration
**********************************************/
export interface deviceManagementCachedReportConfiguration extends deviceManagementCachedReportConfigurationProps, deviceManagementCachedReportConfigurationMethods , entity { }
export interface deviceManagementCachedReportConfigurationProps {

}
export interface deviceManagementCachedReportConfigurationMethods {

}
/*********************************************
* enrollmentTroubleshootingEvent
**********************************************/
export interface enrollmentTroubleshootingEvent extends enrollmentTroubleshootingEventProps, enrollmentTroubleshootingEventMethods , deviceManagementTroubleshootingEvent { }
export interface enrollmentTroubleshootingEventProps {
	deviceId: string;
	enrollmentType: EnumTypes.deviceEnrollmentType;
	failureCategory: EnumTypes.deviceEnrollmentFailureReason;
	failureReason: string;
	managedDeviceIdentifier: string;
	operatingSystem: string;
	osVersion: string;
	userId: string;
}
export interface enrollmentTroubleshootingEventMethods {

}
/*********************************************
* m365AppsInstallationOptions
**********************************************/
export interface m365AppsInstallationOptions extends m365AppsInstallationOptionsProps, m365AppsInstallationOptionsMethods , entity { }
export interface m365AppsInstallationOptionsProps {
	appsForMac: ComplexTypes.appsInstallationOptionsForMac;
	appsForWindows: ComplexTypes.appsInstallationOptionsForWindows;
	updateChannel: EnumTypes.appsUpdateChannelType;
}
export interface m365AppsInstallationOptionsMethods {

}
/*********************************************
* serviceHealth
**********************************************/
export interface serviceHealth extends serviceHealthProps, serviceHealthMethods , entity { }
export interface serviceHealthProps {
	service: string;
	status: EnumTypes.serviceHealthStatus;
}
export interface serviceHealthMethods {
	issues(): IBaseQuery<serviceHealthIssue[]>;
	issues(id: string | number): IBaseQuery<serviceHealthIssue>;
}
/*********************************************
* serviceAnnouncementBase
**********************************************/
export interface serviceAnnouncementBase extends serviceAnnouncementBaseProps, serviceAnnouncementBaseMethods , entity { }
export interface serviceAnnouncementBaseProps {
	details: ComplexTypes.keyValuePair[];
	endDateTime: any;
	lastModifiedDateTime: any;
	startDateTime: any;
	title: string;
}
export interface serviceAnnouncementBaseMethods {

}
/*********************************************
* serviceHealthIssue
**********************************************/
export interface serviceHealthIssue extends serviceHealthIssueProps, serviceHealthIssueMethods , serviceAnnouncementBase { }
export interface serviceHealthIssueProps {
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
export interface serviceHealthIssueMethods {

}
/*********************************************
* serviceUpdateMessage
**********************************************/
export interface serviceUpdateMessage extends serviceUpdateMessageProps, serviceUpdateMessageMethods , serviceAnnouncementBase { }
export interface serviceUpdateMessageProps {
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
}
export interface serviceUpdateMessageMethods {
	attachments(): IBaseQuery<serviceAnnouncementAttachment[]>;
	attachments(id: string | number): IBaseQuery<serviceAnnouncementAttachment>;
}
/*********************************************
* serviceAnnouncementAttachment
**********************************************/
export interface serviceAnnouncementAttachment extends serviceAnnouncementAttachmentProps, serviceAnnouncementAttachmentMethods , entity { }
export interface serviceAnnouncementAttachmentProps {
	content: any;
	contentType: string;
	lastModifiedDateTime: any;
	name: string;
	size: number;
}
export interface serviceAnnouncementAttachmentMethods {

}
/*********************************************
* searchEntity
**********************************************/
export interface searchEntity extends searchEntityProps, searchEntityMethods , entity { }
export interface searchEntityProps {

}
export interface searchEntityMethods {
	acronyms(): IBaseQuery<acronym[]>;
	acronyms(id: string | number): IBaseQuery<acronym>;
	bookmarks(): IBaseQuery<bookmark[]>;
	bookmarks(id: string | number): IBaseQuery<bookmark>;
	qnas(): IBaseQuery<qna[]>;
	qnas(id: string | number): IBaseQuery<qna>;
}
/*********************************************
* planner
**********************************************/
export interface planner extends plannerProps, plannerMethods , entity { }
export interface plannerProps {

}
export interface plannerMethods {
	buckets(): IBaseQuery<plannerBucket[]>;
	buckets(id: string | number): IBaseQuery<plannerBucket>;
	plans(): IBaseQuery<plannerPlan[]>;
	plans(id: string | number): IBaseQuery<plannerPlan>;
	tasks(): IBaseQuery<plannerTask[]>;
	tasks(id: string | number): IBaseQuery<plannerTask>;
}
/*********************************************
* plannerBucket
**********************************************/
export interface plannerBucket extends plannerBucketProps, plannerBucketMethods , entity { }
export interface plannerBucketProps {
	name: string;
	orderHint: string;
	planId: string;
}
export interface plannerBucketMethods {
	tasks(): IBaseQuery<plannerTask[]>;
	tasks(id: string | number): IBaseQuery<plannerTask>;
}
/*********************************************
* plannerPlan
**********************************************/
export interface plannerPlan extends plannerPlanProps, plannerPlanMethods , entity { }
export interface plannerPlanProps {
	container: ComplexTypes.plannerPlanContainer;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	owner: string;
	title: string;
}
export interface plannerPlanMethods {
	buckets(): IBaseQuery<plannerBucket[]>;
	buckets(id: string | number): IBaseQuery<plannerBucket>;
	details(): IBaseQuery<plannerPlanDetails>;
	tasks(): IBaseQuery<plannerTask[]>;
	tasks(id: string | number): IBaseQuery<plannerTask>;
}
/*********************************************
* plannerTask
**********************************************/
export interface plannerTask extends plannerTaskProps, plannerTaskMethods , entity { }
export interface plannerTaskProps {
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
}
export interface plannerTaskMethods {
	assignedToTaskBoardFormat(): IBaseQuery<plannerAssignedToTaskBoardTaskFormat>;
	bucketTaskBoardFormat(): IBaseQuery<plannerBucketTaskBoardTaskFormat>;
	details(): IBaseQuery<plannerTaskDetails>;
	progressTaskBoardFormat(): IBaseQuery<plannerProgressTaskBoardTaskFormat>;
}
/*********************************************
* plannerAssignedToTaskBoardTaskFormat
**********************************************/
export interface plannerAssignedToTaskBoardTaskFormat extends plannerAssignedToTaskBoardTaskFormatProps, plannerAssignedToTaskBoardTaskFormatMethods , entity { }
export interface plannerAssignedToTaskBoardTaskFormatProps {
	orderHintsByAssignee: ComplexTypes.plannerOrderHintsByAssignee;
	unassignedOrderHint: string;
}
export interface plannerAssignedToTaskBoardTaskFormatMethods {

}
/*********************************************
* plannerBucketTaskBoardTaskFormat
**********************************************/
export interface plannerBucketTaskBoardTaskFormat extends plannerBucketTaskBoardTaskFormatProps, plannerBucketTaskBoardTaskFormatMethods , entity { }
export interface plannerBucketTaskBoardTaskFormatProps {
	orderHint: string;
}
export interface plannerBucketTaskBoardTaskFormatMethods {

}
/*********************************************
* plannerPlanDetails
**********************************************/
export interface plannerPlanDetails extends plannerPlanDetailsProps, plannerPlanDetailsMethods , entity { }
export interface plannerPlanDetailsProps {
	categoryDescriptions: ComplexTypes.plannerCategoryDescriptions;
	sharedWith: ComplexTypes.plannerUserIds;
}
export interface plannerPlanDetailsMethods {

}
/*********************************************
* plannerProgressTaskBoardTaskFormat
**********************************************/
export interface plannerProgressTaskBoardTaskFormat extends plannerProgressTaskBoardTaskFormatProps, plannerProgressTaskBoardTaskFormatMethods , entity { }
export interface plannerProgressTaskBoardTaskFormatProps {
	orderHint: string;
}
export interface plannerProgressTaskBoardTaskFormatMethods {

}
/*********************************************
* plannerTaskDetails
**********************************************/
export interface plannerTaskDetails extends plannerTaskDetailsProps, plannerTaskDetailsMethods , entity { }
export interface plannerTaskDetailsProps {
	checklist: ComplexTypes.plannerChecklistItems;
	description: string;
	previewType: EnumTypes.plannerPreviewType;
	references: ComplexTypes.plannerExternalReferences;
}
export interface plannerTaskDetailsMethods {

}
/*********************************************
* sharedInsight
**********************************************/
export interface sharedInsight extends sharedInsightProps, sharedInsightMethods , entity { }
export interface sharedInsightProps {
	lastShared: ComplexTypes.sharingDetail;
	resourceReference: ComplexTypes.resourceReference;
	resourceVisualization: ComplexTypes.resourceVisualization;
	sharingHistory: ComplexTypes.sharingDetail[];
}
export interface sharedInsightMethods {
	lastSharedMethod(): IBaseQuery<entity>;
	resource(): IBaseQuery<entity>;
}
/*********************************************
* trending
**********************************************/
export interface trending extends trendingProps, trendingMethods , entity { }
export interface trendingProps {
	lastModifiedDateTime: any;
	resourceReference: ComplexTypes.resourceReference;
	resourceVisualization: ComplexTypes.resourceVisualization;
	weight: number;
}
export interface trendingMethods {
	resource(): IBaseQuery<entity>;
}
/*********************************************
* usedInsight
**********************************************/
export interface usedInsight extends usedInsightProps, usedInsightMethods , entity { }
export interface usedInsightProps {
	lastUsed: ComplexTypes.usageDetails;
	resourceReference: ComplexTypes.resourceReference;
	resourceVisualization: ComplexTypes.resourceVisualization;
}
export interface usedInsightMethods {
	resource(): IBaseQuery<entity>;
}
/*********************************************
* userInsightsSettings
**********************************************/
export interface userInsightsSettings extends userInsightsSettingsProps, userInsightsSettingsMethods , entity { }
export interface userInsightsSettingsProps {
	isEnabled: boolean;
}
export interface userInsightsSettingsMethods {

}
/*********************************************
* windowsSetting
**********************************************/
export interface windowsSetting extends windowsSettingProps, windowsSettingMethods , entity { }
export interface windowsSettingProps {
	payloadType: string;
	settingType: EnumTypes.windowsSettingType;
	windowsDeviceId: string;
}
export interface windowsSettingMethods {
	instances(): IBaseQuery<windowsSettingInstance[]>;
	instances(id: string | number): IBaseQuery<windowsSettingInstance>;
}
/*********************************************
* changeTrackedEntity
**********************************************/
export interface changeTrackedEntity extends changeTrackedEntityProps, changeTrackedEntityMethods , entity { }
export interface changeTrackedEntityProps {
	createdDateTime: any;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
}
export interface changeTrackedEntityMethods {

}
/*********************************************
* shiftPreferences
**********************************************/
export interface shiftPreferences extends shiftPreferencesProps, shiftPreferencesMethods , changeTrackedEntity { }
export interface shiftPreferencesProps {
	availability: ComplexTypes.shiftAvailability[];
}
export interface shiftPreferencesMethods {

}
/*********************************************
* userStorage
**********************************************/
export interface userStorage extends userStorageProps, userStorageMethods , entity { }
export interface userStorageProps {

}
export interface userStorageMethods {
	quota(): IBaseQuery<unifiedStorageQuota>;
}
/*********************************************
* onenoteEntityBaseModel
**********************************************/
export interface onenoteEntityBaseModel extends onenoteEntityBaseModelProps, onenoteEntityBaseModelMethods , entity { }
export interface onenoteEntityBaseModelProps {
	self: string;
}
export interface onenoteEntityBaseModelMethods {

}
/*********************************************
* onenoteEntitySchemaObjectModel
**********************************************/
export interface onenoteEntitySchemaObjectModel extends onenoteEntitySchemaObjectModelProps, onenoteEntitySchemaObjectModelMethods , onenoteEntityBaseModel { }
export interface onenoteEntitySchemaObjectModelProps {
	createdDateTime: any;
}
export interface onenoteEntitySchemaObjectModelMethods {

}
/*********************************************
* onenoteEntityHierarchyModel
**********************************************/
export interface onenoteEntityHierarchyModel extends onenoteEntityHierarchyModelProps, onenoteEntityHierarchyModelMethods , onenoteEntitySchemaObjectModel { }
export interface onenoteEntityHierarchyModelProps {
	createdBy: ComplexTypes.identitySet;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
}
export interface onenoteEntityHierarchyModelMethods {

}
/*********************************************
* notebook
**********************************************/
export interface notebook extends notebookProps, notebookMethods , onenoteEntityHierarchyModel { }
export interface notebookProps {
	isDefault: boolean;
	isShared: boolean;
	links: ComplexTypes.notebookLinks;
	sectionGroupsUrl: string;
	sectionsUrl: string;
	userRole: EnumTypes.onenoteUserRole;
}
export interface notebookMethods {
	sectionGroups(): IBaseQuery<sectionGroup[]>;
	sectionGroups(id: string | number): IBaseQuery<sectionGroup>;
	sections(): IBaseQuery<onenoteSection[]>;
	sections(id: string | number): IBaseQuery<onenoteSection>;
}
/*********************************************
* sectionGroup
**********************************************/
export interface sectionGroup extends sectionGroupProps, sectionGroupMethods , onenoteEntityHierarchyModel { }
export interface sectionGroupProps {
	sectionGroupsUrl: string;
	sectionsUrl: string;
}
export interface sectionGroupMethods {
	parentNotebook(): IBaseQuery<notebook>;
	parentSectionGroup(): IBaseQuery<sectionGroup>;
	sectionGroups(): IBaseQuery<sectionGroup[]>;
	sectionGroups(id: string | number): IBaseQuery<sectionGroup>;
	sections(): IBaseQuery<onenoteSection[]>;
	sections(id: string | number): IBaseQuery<onenoteSection>;
}
/*********************************************
* onenoteSection
**********************************************/
export interface onenoteSection extends onenoteSectionProps, onenoteSectionMethods , onenoteEntityHierarchyModel { }
export interface onenoteSectionProps {
	isDefault: boolean;
	links: ComplexTypes.sectionLinks;
	pagesUrl: string;
}
export interface onenoteSectionMethods {
	pages(): IBaseQuery<onenotePage[]>;
	pages(id: string | number): IBaseQuery<onenotePage>;
	parentNotebook(): IBaseQuery<notebook>;
	parentSectionGroup(): IBaseQuery<sectionGroup>;
}
/*********************************************
* operation
**********************************************/
export interface operation extends operationProps, operationMethods , entity { }
export interface operationProps {
	createdDateTime: any;
	lastActionDateTime: any;
	status: EnumTypes.longRunningOperationStatus;
}
export interface operationMethods {

}
/*********************************************
* onenoteOperation
**********************************************/
export interface onenoteOperation extends onenoteOperationProps, onenoteOperationMethods , operation { }
export interface onenoteOperationProps {
	error: ComplexTypes.onenoteOperationError;
	percentComplete: string;
	resourceId: string;
	resourceLocation: string;
}
export interface onenoteOperationMethods {

}
/*********************************************
* onenotePage
**********************************************/
export interface onenotePage extends onenotePageProps, onenotePageMethods , onenoteEntitySchemaObjectModel { }
export interface onenotePageProps {
	content: any;
	contentUrl: string;
	createdByAppId: string;
	lastModifiedDateTime: any;
	level: number;
	links: ComplexTypes.pageLinks;
	order: number;
	title: string;
	userTags: Array<string>[];
}
export interface onenotePageMethods {
	parentNotebook(): IBaseQuery<notebook>;
	parentSection(): IBaseQuery<onenoteSection>;
}
/*********************************************
* onenoteResource
**********************************************/
export interface onenoteResource extends onenoteResourceProps, onenoteResourceMethods , onenoteEntityBaseModel { }
export interface onenoteResourceProps {
	content: any;
	contentUrl: string;
}
export interface onenoteResourceMethods {

}
/*********************************************
* delegatedAdminAccessAssignment
**********************************************/
export interface delegatedAdminAccessAssignment extends delegatedAdminAccessAssignmentProps, delegatedAdminAccessAssignmentMethods , entity { }
export interface delegatedAdminAccessAssignmentProps {
	accessContainer: ComplexTypes.delegatedAdminAccessContainer;
	accessDetails: ComplexTypes.delegatedAdminAccessDetails;
	createdDateTime: any;
	lastModifiedDateTime: any;
	status: EnumTypes.delegatedAdminAccessAssignmentStatus;
}
export interface delegatedAdminAccessAssignmentMethods {

}
/*********************************************
* delegatedAdminServiceManagementDetail
**********************************************/
export interface delegatedAdminServiceManagementDetail extends delegatedAdminServiceManagementDetailProps, delegatedAdminServiceManagementDetailMethods , entity { }
export interface delegatedAdminServiceManagementDetailProps {
	serviceManagementUrl: string;
	serviceName: string;
}
export interface delegatedAdminServiceManagementDetailMethods {

}
/*********************************************
* delegatedAdminRelationshipOperation
**********************************************/
export interface delegatedAdminRelationshipOperation extends delegatedAdminRelationshipOperationProps, delegatedAdminRelationshipOperationMethods , entity { }
export interface delegatedAdminRelationshipOperationProps {
	createdDateTime: any;
	data: string;
	lastModifiedDateTime: any;
	operationType: EnumTypes.delegatedAdminRelationshipOperationType;
	status: EnumTypes.longRunningOperationStatus;
}
export interface delegatedAdminRelationshipOperationMethods {

}
/*********************************************
* delegatedAdminRelationshipRequest
**********************************************/
export interface delegatedAdminRelationshipRequest extends delegatedAdminRelationshipRequestProps, delegatedAdminRelationshipRequestMethods , entity { }
export interface delegatedAdminRelationshipRequestProps {
	action: EnumTypes.delegatedAdminRelationshipRequestAction;
	createdDateTime: any;
	lastModifiedDateTime: any;
	status: EnumTypes.delegatedAdminRelationshipRequestStatus;
}
export interface delegatedAdminRelationshipRequestMethods {

}
/*********************************************
* resellerDelegatedAdminRelationship
**********************************************/
export interface resellerDelegatedAdminRelationship extends resellerDelegatedAdminRelationshipProps, resellerDelegatedAdminRelationshipMethods , delegatedAdminRelationship { }
export interface resellerDelegatedAdminRelationshipProps {
	indirectProviderTenantId: string;
	isPartnerConsentPending: boolean;
}
export interface resellerDelegatedAdminRelationshipMethods {

}
/*********************************************
* cloudClipboardItem
**********************************************/
export interface cloudClipboardItem extends cloudClipboardItemProps, cloudClipboardItemMethods , entity { }
export interface cloudClipboardItemProps {
	createdDateTime: any;
	expirationDateTime: any;
	lastModifiedDateTime: any;
	payloads: ComplexTypes.cloudClipboardItemPayload[];
}
export interface cloudClipboardItemMethods {

}
/*********************************************
* windowsSettingInstance
**********************************************/
export interface windowsSettingInstance extends windowsSettingInstanceProps, windowsSettingInstanceMethods , entity { }
export interface windowsSettingInstanceProps {
	createdDateTime: any;
	expirationDateTime: any;
	lastModifiedDateTime: any;
	payload: string;
}
export interface windowsSettingInstanceMethods {

}
/*********************************************
* profileCardProperty
**********************************************/
export interface profileCardProperty extends profileCardPropertyProps, profileCardPropertyMethods , entity { }
export interface profileCardPropertyProps {
	annotations: ComplexTypes.profileCardAnnotation[];
	directoryPropertyName: string;
}
export interface profileCardPropertyMethods {

}
/*********************************************
* pronounsSettings
**********************************************/
export interface pronounsSettings extends pronounsSettingsProps, pronounsSettingsMethods , entity { }
export interface pronounsSettingsProps {
	isEnabledInOrganization: boolean;
}
export interface pronounsSettingsMethods {

}
/*********************************************
* insightsSettings
**********************************************/
export interface insightsSettings extends insightsSettingsProps, insightsSettingsMethods , entity { }
export interface insightsSettingsProps {
	disabledForGroup: string;
	isEnabledInOrganization: boolean;
}
export interface insightsSettingsMethods {

}
/*********************************************
* unifiedRoleManagementPolicyRule
**********************************************/
export interface unifiedRoleManagementPolicyRule extends unifiedRoleManagementPolicyRuleProps, unifiedRoleManagementPolicyRuleMethods , entity { }
export interface unifiedRoleManagementPolicyRuleProps {
	target: ComplexTypes.unifiedRoleManagementPolicyRuleTarget;
}
export interface unifiedRoleManagementPolicyRuleMethods {

}
/*********************************************
* unifiedRoleManagementPolicyApprovalRule
**********************************************/
export interface unifiedRoleManagementPolicyApprovalRule extends unifiedRoleManagementPolicyApprovalRuleProps, unifiedRoleManagementPolicyApprovalRuleMethods , unifiedRoleManagementPolicyRule { }
export interface unifiedRoleManagementPolicyApprovalRuleProps {
	setting: ComplexTypes.approvalSettings;
}
export interface unifiedRoleManagementPolicyApprovalRuleMethods {

}
/*********************************************
* unifiedRoleManagementPolicyAuthenticationContextRule
**********************************************/
export interface unifiedRoleManagementPolicyAuthenticationContextRule extends unifiedRoleManagementPolicyAuthenticationContextRuleProps, unifiedRoleManagementPolicyAuthenticationContextRuleMethods , unifiedRoleManagementPolicyRule { }
export interface unifiedRoleManagementPolicyAuthenticationContextRuleProps {
	claimValue: string;
	isEnabled: boolean;
}
export interface unifiedRoleManagementPolicyAuthenticationContextRuleMethods {

}
/*********************************************
* unifiedRoleManagementPolicyEnablementRule
**********************************************/
export interface unifiedRoleManagementPolicyEnablementRule extends unifiedRoleManagementPolicyEnablementRuleProps, unifiedRoleManagementPolicyEnablementRuleMethods , unifiedRoleManagementPolicyRule { }
export interface unifiedRoleManagementPolicyEnablementRuleProps {
	enabledRules: Array<string>[];
}
export interface unifiedRoleManagementPolicyEnablementRuleMethods {

}
/*********************************************
* unifiedRoleManagementPolicyExpirationRule
**********************************************/
export interface unifiedRoleManagementPolicyExpirationRule extends unifiedRoleManagementPolicyExpirationRuleProps, unifiedRoleManagementPolicyExpirationRuleMethods , unifiedRoleManagementPolicyRule { }
export interface unifiedRoleManagementPolicyExpirationRuleProps {
	isExpirationRequired: boolean;
	maximumDuration: number;
}
export interface unifiedRoleManagementPolicyExpirationRuleMethods {

}
/*********************************************
* unifiedRoleManagementPolicyNotificationRule
**********************************************/
export interface unifiedRoleManagementPolicyNotificationRule extends unifiedRoleManagementPolicyNotificationRuleProps, unifiedRoleManagementPolicyNotificationRuleMethods , unifiedRoleManagementPolicyRule { }
export interface unifiedRoleManagementPolicyNotificationRuleProps {
	isDefaultRecipientsEnabled: boolean;
	notificationLevel: string;
	notificationRecipients: Array<string>[];
	notificationType: string;
	recipientType: string;
}
export interface unifiedRoleManagementPolicyNotificationRuleMethods {

}
/*********************************************
* printerBase
**********************************************/
export interface printerBase extends printerBaseProps, printerBaseMethods , entity { }
export interface printerBaseProps {
	capabilities: ComplexTypes.printerCapabilities;
	defaults: ComplexTypes.printerDefaults;
	displayName: string;
	isAcceptingJobs: boolean;
	location: ComplexTypes.printerLocation;
	manufacturer: string;
	model: string;
	status: ComplexTypes.printerStatus;
}
export interface printerBaseMethods {
	jobs(): IBaseQuery<printJob[]>;
	jobs(id: string | number): IBaseQuery<printJob>;
}
/*********************************************
* printerShare
**********************************************/
export interface printerShare extends printerShareProps, printerShareMethods , printerBase { }
export interface printerShareProps {
	allowAllUsers: boolean;
	createdDateTime: any;
	viewPoint: ComplexTypes.printerShareViewpoint;
}
export interface printerShareMethods {
	allowedGroups(): IBaseQuery<group[]>;
	allowedGroups(id: string | number): IBaseQuery<group>;
	allowedUsers(): IBaseQuery<user[]>;
	allowedUsers(id: string | number): IBaseQuery<user>;
	printer(): IBaseQuery<printer>;
}
/*********************************************
* print
**********************************************/
export interface print extends printProps, printMethods  { }
export interface printProps {
	settings: ComplexTypes.printSettings;
}
export interface printMethods {
	connectors(): IBaseQuery<printConnector[]>;
	connectors(id: string | number): IBaseQuery<printConnector>;
	operations(): IBaseQuery<printOperation[]>;
	operations(id: string | number): IBaseQuery<printOperation>;
	printers(): IBaseQuery<printer[]>;
	printers(id: string | number): IBaseQuery<printer>;
	services(): IBaseQuery<printService[]>;
	services(id: string | number): IBaseQuery<printService>;
	shares(): IBaseQuery<printerShare[]>;
	shares(id: string | number): IBaseQuery<printerShare>;
	taskDefinitions(): IBaseQuery<printTaskDefinition[]>;
	taskDefinitions(id: string | number): IBaseQuery<printTaskDefinition>;
}
/*********************************************
* printConnector
**********************************************/
export interface printConnector extends printConnectorProps, printConnectorMethods , entity { }
export interface printConnectorProps {
	appVersion: string;
	displayName: string;
	fullyQualifiedDomainName: string;
	location: ComplexTypes.printerLocation;
	operatingSystem: string;
	registeredDateTime: any;
}
export interface printConnectorMethods {

}
/*********************************************
* printOperation
**********************************************/
export interface printOperation extends printOperationProps, printOperationMethods , entity { }
export interface printOperationProps {
	createdDateTime: any;
	status: ComplexTypes.printOperationStatus;
}
export interface printOperationMethods {

}
/*********************************************
* printer
**********************************************/
export interface printer extends printerProps, printerMethods , printerBase { }
export interface printerProps {
	hasPhysicalDevice: boolean;
	isShared: boolean;
	lastSeenDateTime: any;
	registeredDateTime: any;
}
export interface printerMethods {
	connectors(): IBaseQuery<printConnector[]>;
	connectors(id: string | number): IBaseQuery<printConnector>;
	shares(): IBaseQuery<printerShare[]>;
	shares(id: string | number): IBaseQuery<printerShare>;
	taskTriggers(): IBaseQuery<printTaskTrigger[]>;
	taskTriggers(id: string | number): IBaseQuery<printTaskTrigger>;
}
/*********************************************
* printService
**********************************************/
export interface printService extends printServiceProps, printServiceMethods , entity { }
export interface printServiceProps {

}
export interface printServiceMethods {
	endpoints(): IBaseQuery<printServiceEndpoint[]>;
	endpoints(id: string | number): IBaseQuery<printServiceEndpoint>;
}
/*********************************************
* printTaskDefinition
**********************************************/
export interface printTaskDefinition extends printTaskDefinitionProps, printTaskDefinitionMethods , entity { }
export interface printTaskDefinitionProps {
	createdBy: ComplexTypes.appIdentity;
	displayName: string;
}
export interface printTaskDefinitionMethods {
	tasks(): IBaseQuery<printTask[]>;
	tasks(id: string | number): IBaseQuery<printTask>;
}
/*********************************************
* printDocument
**********************************************/
export interface printDocument extends printDocumentProps, printDocumentMethods , entity { }
export interface printDocumentProps {
	contentType: string;
	displayName: string;
	size: number;
}
export interface printDocumentMethods {

}
/*********************************************
* printTaskTrigger
**********************************************/
export interface printTaskTrigger extends printTaskTriggerProps, printTaskTriggerMethods , entity { }
export interface printTaskTriggerProps {
	event: EnumTypes.printEvent;
}
export interface printTaskTriggerMethods {
	definition(): IBaseQuery<printTaskDefinition>;
}
/*********************************************
* printJob
**********************************************/
export interface printJob extends printJobProps, printJobMethods , entity { }
export interface printJobProps {
	configuration: ComplexTypes.printJobConfiguration;
	createdBy: ComplexTypes.userIdentity;
	createdDateTime: any;
	isFetchable: boolean;
	redirectedFrom: string;
	redirectedTo: string;
	status: ComplexTypes.printJobStatus;
}
export interface printJobMethods {
	documents(): IBaseQuery<printDocument[]>;
	documents(id: string | number): IBaseQuery<printDocument>;
	tasks(): IBaseQuery<printTask[]>;
	tasks(id: string | number): IBaseQuery<printTask>;
}
/*********************************************
* printerCreateOperation
**********************************************/
export interface printerCreateOperation extends printerCreateOperationProps, printerCreateOperationMethods , printOperation { }
export interface printerCreateOperationProps {
	certificate: string;
}
export interface printerCreateOperationMethods {
	printer(): IBaseQuery<printer>;
}
/*********************************************
* printTask
**********************************************/
export interface printTask extends printTaskProps, printTaskMethods , entity { }
export interface printTaskProps {
	parentUrl: string;
	status: ComplexTypes.printTaskStatus;
}
export interface printTaskMethods {
	definition(): IBaseQuery<printTaskDefinition>;
	trigger(): IBaseQuery<printTaskTrigger>;
}
/*********************************************
* printServiceEndpoint
**********************************************/
export interface printServiceEndpoint extends printServiceEndpointProps, printServiceEndpointMethods , entity { }
export interface printServiceEndpointProps {
	displayName: string;
	uri: string;
}
export interface printServiceEndpointMethods {

}
/*********************************************
* activityHistoryItem
**********************************************/
export interface activityHistoryItem extends activityHistoryItemProps, activityHistoryItemMethods , entity { }
export interface activityHistoryItemProps {
	activeDurationSeconds: number;
	createdDateTime: any;
	expirationDateTime: any;
	lastActiveDateTime: any;
	lastModifiedDateTime: any;
	startedDateTime: any;
	status: EnumTypes.status;
	userTimezone: string;
}
export interface activityHistoryItemMethods {
	activity(): IBaseQuery<userActivity>;
}
/*********************************************
* dataPolicyOperation
**********************************************/
export interface dataPolicyOperation extends dataPolicyOperationProps, dataPolicyOperationMethods , entity { }
export interface dataPolicyOperationProps {
	completedDateTime: any;
	progress: number;
	status: EnumTypes.dataPolicyOperationStatus;
	storageLocation: string;
	submittedDateTime: any;
	userId: string;
}
export interface dataPolicyOperationMethods {

}
/*********************************************
* endUserNotification
**********************************************/
export interface endUserNotification extends endUserNotificationProps, endUserNotificationMethods , entity { }
export interface endUserNotificationProps {
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	notificationType: EnumTypes.endUserNotificationType;
	source: EnumTypes.simulationContentSource;
	status: EnumTypes.simulationContentStatus;
	supportedLocales: Array<string>[];
}
export interface endUserNotificationMethods {
	details(): IBaseQuery<endUserNotificationDetail[]>;
	details(id: string | number): IBaseQuery<endUserNotificationDetail>;
}
/*********************************************
* training
**********************************************/
export interface training extends trainingProps, trainingMethods , entity { }
export interface trainingProps {
	availabilityStatus: EnumTypes.trainingAvailabilityStatus;
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	durationInMinutes: number;
	hasEvaluation: boolean;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	source: EnumTypes.simulationContentSource;
	supportedLocales: Array<string>[];
	tags: Array<string>[];
	type: EnumTypes.trainingType;
}
export interface trainingMethods {
	languageDetails(): IBaseQuery<trainingLanguageDetail[]>;
	languageDetails(id: string | number): IBaseQuery<trainingLanguageDetail>;
}
/*********************************************
* attackSimulationOperation
**********************************************/
export interface attackSimulationOperation extends attackSimulationOperationProps, attackSimulationOperationMethods , longRunningOperation { }
export interface attackSimulationOperationProps {
	percentageCompleted: number;
	tenantId: string;
	type: EnumTypes.attackSimulationOperationType;
}
export interface attackSimulationOperationMethods {

}
/*********************************************
* landingPage
**********************************************/
export interface landingPage extends landingPageProps, landingPageMethods , entity { }
export interface landingPageProps {
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	locale: string;
	source: EnumTypes.simulationContentSource;
	status: EnumTypes.simulationContentStatus;
	supportedLocales: Array<string>[];
}
export interface landingPageMethods {
	details(): IBaseQuery<landingPageDetail[]>;
	details(id: string | number): IBaseQuery<landingPageDetail>;
}
/*********************************************
* loginPage
**********************************************/
export interface loginPage extends loginPageProps, loginPageMethods , entity { }
export interface loginPageProps {
	content: string;
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	language: string;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	source: EnumTypes.simulationContentSource;
	status: EnumTypes.simulationContentStatus;
}
export interface loginPageMethods {

}
/*********************************************
* payload
**********************************************/
export interface payload extends payloadProps, payloadMethods , entity { }
export interface payloadProps {
	brand: EnumTypes.payloadBrand;
	complexity: EnumTypes.payloadComplexity;
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	detail: ComplexTypes.payloadDetail;
	displayName: string;
	industry: EnumTypes.payloadIndustry;
	isAutomated: boolean;
	isControversial: boolean;
	isCurrentEvent: boolean;
	language: string;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	payloadTags: Array<string>[];
	platform: EnumTypes.payloadDeliveryPlatform;
	predictedCompromiseRate: number;
	simulationAttackType: EnumTypes.simulationAttackType;
	source: EnumTypes.simulationContentSource;
	status: EnumTypes.simulationContentStatus;
	technique: EnumTypes.simulationAttackTechnique;
	theme: EnumTypes.payloadTheme;
}
export interface payloadMethods {

}
/*********************************************
* simulationAutomation
**********************************************/
export interface simulationAutomation extends simulationAutomationProps, simulationAutomationMethods , entity { }
export interface simulationAutomationProps {
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	lastRunDateTime: any;
	nextRunDateTime: any;
	status: EnumTypes.simulationAutomationStatus;
}
export interface simulationAutomationMethods {
	runs(): IBaseQuery<simulationAutomationRun[]>;
	runs(id: string | number): IBaseQuery<simulationAutomationRun>;
}
/*********************************************
* simulation
**********************************************/
export interface simulation extends simulationProps, simulationMethods , entity { }
export interface simulationProps {
	attackTechnique: EnumTypes.simulationAttackTechnique;
	attackType: EnumTypes.simulationAttackType;
	automationId: string;
	completionDateTime: any;
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	durationInDays: number;
	endUserNotificationSetting: ComplexTypes.endUserNotificationSetting;
	excludedAccountTarget: ComplexTypes.accountTargetContent;
	includedAccountTarget: ComplexTypes.accountTargetContent;
	isAutomated: boolean;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	launchDateTime: any;
	oAuthConsentAppDetail: ComplexTypes.oAuthConsentAppDetail;
	payloadDeliveryPlatform: EnumTypes.payloadDeliveryPlatform;
	report: ComplexTypes.simulationReport;
	status: EnumTypes.simulationStatus;
	trainingSetting: ComplexTypes.trainingSetting;
}
export interface simulationMethods {
	landingPage(): IBaseQuery<landingPage>;
	loginPage(): IBaseQuery<loginPage>;
	payload(): IBaseQuery<payload>;
}
/*********************************************
* endUserNotificationDetail
**********************************************/
export interface endUserNotificationDetail extends endUserNotificationDetailProps, endUserNotificationDetailMethods , entity { }
export interface endUserNotificationDetailProps {
	emailContent: string;
	isDefaultLangauge: boolean;
	language: string;
	locale: string;
	sentFrom: ComplexTypes.emailIdentity;
	subject: string;
}
export interface endUserNotificationDetailMethods {

}
/*********************************************
* landingPageDetail
**********************************************/
export interface landingPageDetail extends landingPageDetailProps, landingPageDetailMethods , entity { }
export interface landingPageDetailProps {
	content: string;
	isDefaultLangauge: boolean;
	language: string;
}
export interface landingPageDetailMethods {

}
/*********************************************
* simulationAutomationRun
**********************************************/
export interface simulationAutomationRun extends simulationAutomationRunProps, simulationAutomationRunMethods , entity { }
export interface simulationAutomationRunProps {
	endDateTime: any;
	simulationId: string;
	startDateTime: any;
	status: EnumTypes.simulationAutomationRunStatus;
}
export interface simulationAutomationRunMethods {

}
/*********************************************
* trainingLanguageDetail
**********************************************/
export interface trainingLanguageDetail extends trainingLanguageDetailProps, trainingLanguageDetailMethods , entity { }
export interface trainingLanguageDetailProps {
	content: string;
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	isDefaultLangauge: boolean;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	locale: string;
}
export interface trainingLanguageDetailMethods {

}
/*********************************************
* commsOperation
**********************************************/
export interface commsOperation extends commsOperationProps, commsOperationMethods , entity { }
export interface commsOperationProps {
	clientContext: string;
	resultInfo: ComplexTypes.resultInfo;
	status: EnumTypes.operationStatus;
}
export interface commsOperationMethods {

}
/*********************************************
* addLargeGalleryViewOperation
**********************************************/
export interface addLargeGalleryViewOperation extends addLargeGalleryViewOperationProps, addLargeGalleryViewOperationMethods , commsOperation { }
export interface addLargeGalleryViewOperationProps {

}
export interface addLargeGalleryViewOperationMethods {

}
/*********************************************
* attendanceRecord
**********************************************/
export interface attendanceRecord extends attendanceRecordProps, attendanceRecordMethods , entity { }
export interface attendanceRecordProps {
	attendanceIntervals: ComplexTypes.attendanceInterval[];
	emailAddress: string;
	identity: ComplexTypes.identity;
	role: string;
	totalAttendanceInSeconds: number;
}
export interface attendanceRecordMethods {

}
/*********************************************
* audioRoutingGroup
**********************************************/
export interface audioRoutingGroup extends audioRoutingGroupProps, audioRoutingGroupMethods , entity { }
export interface audioRoutingGroupProps {
	receivers: Array<string>[];
	routingMode: EnumTypes.routingMode;
	sources: Array<string>[];
}
export interface audioRoutingGroupMethods {

}
/*********************************************
* contentSharingSession
**********************************************/
export interface contentSharingSession extends contentSharingSessionProps, contentSharingSessionMethods , entity { }
export interface contentSharingSessionProps {

}
export interface contentSharingSessionMethods {

}
/*********************************************
* participant
**********************************************/
export interface participant extends participantProps, participantMethods , participantBase { }
export interface participantProps {

}
export interface participantMethods {

}
/*********************************************
* cancelMediaProcessingOperation
**********************************************/
export interface cancelMediaProcessingOperation extends cancelMediaProcessingOperationProps, cancelMediaProcessingOperationMethods , commsOperation { }
export interface cancelMediaProcessingOperationProps {

}
export interface cancelMediaProcessingOperationMethods {

}
/*********************************************
* deltaParticipants
**********************************************/
export interface deltaParticipants extends deltaParticipantsProps, deltaParticipantsMethods , entity { }
export interface deltaParticipantsProps {
	sequenceNumber: number;
}
export interface deltaParticipantsMethods {
	participants(): IBaseQuery<participant[]>;
	participants(id: string | number): IBaseQuery<participant>;
}
/*********************************************
* inviteParticipantsOperation
**********************************************/
export interface inviteParticipantsOperation extends inviteParticipantsOperationProps, inviteParticipantsOperationMethods , commsOperation { }
export interface inviteParticipantsOperationProps {
	participants: ComplexTypes.invitationParticipantInfo[];
}
export interface inviteParticipantsOperationMethods {

}
/*********************************************
* meetingAttendanceReport
**********************************************/
export interface meetingAttendanceReport extends meetingAttendanceReportProps, meetingAttendanceReportMethods , entity { }
export interface meetingAttendanceReportProps {
	meetingEndDateTime: any;
	meetingStartDateTime: any;
	totalParticipantCount: number;
}
export interface meetingAttendanceReportMethods {
	attendanceRecords(): IBaseQuery<attendanceRecord[]>;
	attendanceRecords(id: string | number): IBaseQuery<attendanceRecord>;
}
/*********************************************
* muteParticipantOperation
**********************************************/
export interface muteParticipantOperation extends muteParticipantOperationProps, muteParticipantOperationMethods , commsOperation { }
export interface muteParticipantOperationProps {

}
export interface muteParticipantOperationMethods {

}
/*********************************************
* participantJoiningNotification
**********************************************/
export interface participantJoiningNotification extends participantJoiningNotificationProps, participantJoiningNotificationMethods , entity { }
export interface participantJoiningNotificationProps {

}
export interface participantJoiningNotificationMethods {
	call(): IBaseQuery<call>;
}
/*********************************************
* participantLeftNotification
**********************************************/
export interface participantLeftNotification extends participantLeftNotificationProps, participantLeftNotificationMethods , entity { }
export interface participantLeftNotificationProps {
	participantId: string;
}
export interface participantLeftNotificationMethods {
	call(): IBaseQuery<call>;
}
/*********************************************
* playPromptOperation
**********************************************/
export interface playPromptOperation extends playPromptOperationProps, playPromptOperationMethods , commsOperation { }
export interface playPromptOperationProps {

}
export interface playPromptOperationMethods {

}
/*********************************************
* recordOperation
**********************************************/
export interface recordOperation extends recordOperationProps, recordOperationMethods , commsOperation { }
export interface recordOperationProps {
	recordingAccessToken: string;
	recordingLocation: string;
}
export interface recordOperationMethods {

}
/*********************************************
* sendDtmfTonesOperation
**********************************************/
export interface sendDtmfTonesOperation extends sendDtmfTonesOperationProps, sendDtmfTonesOperationMethods , commsOperation { }
export interface sendDtmfTonesOperationProps {
	completionReason: EnumTypes.sendDtmfCompletionReason;
}
export interface sendDtmfTonesOperationMethods {

}
/*********************************************
* startHoldMusicOperation
**********************************************/
export interface startHoldMusicOperation extends startHoldMusicOperationProps, startHoldMusicOperationMethods , commsOperation { }
export interface startHoldMusicOperationProps {

}
export interface startHoldMusicOperationMethods {

}
/*********************************************
* stopHoldMusicOperation
**********************************************/
export interface stopHoldMusicOperation extends stopHoldMusicOperationProps, stopHoldMusicOperationMethods , commsOperation { }
export interface stopHoldMusicOperationProps {

}
export interface stopHoldMusicOperationMethods {

}
/*********************************************
* subscribeToToneOperation
**********************************************/
export interface subscribeToToneOperation extends subscribeToToneOperationProps, subscribeToToneOperationMethods , commsOperation { }
export interface subscribeToToneOperationProps {

}
export interface subscribeToToneOperationMethods {

}
/*********************************************
* unmuteParticipantOperation
**********************************************/
export interface unmuteParticipantOperation extends unmuteParticipantOperationProps, unmuteParticipantOperationMethods , commsOperation { }
export interface unmuteParticipantOperationProps {

}
export interface unmuteParticipantOperationMethods {

}
/*********************************************
* updateRecordingStatusOperation
**********************************************/
export interface updateRecordingStatusOperation extends updateRecordingStatusOperationProps, updateRecordingStatusOperationMethods , commsOperation { }
export interface updateRecordingStatusOperationProps {

}
export interface updateRecordingStatusOperationMethods {

}
/*********************************************
* virtualEvent
**********************************************/
export interface virtualEvent extends virtualEventProps, virtualEventMethods , entity { }
export interface virtualEventProps {
	createdBy: ComplexTypes.communicationsIdentitySet;
	description: ComplexTypes.itemBody;
	displayName: string;
	endDateTime: ComplexTypes.dateTimeTimeZone;
	settings: ComplexTypes.virtualEventSettings;
	startDateTime: ComplexTypes.dateTimeTimeZone;
	status: EnumTypes.virtualEventStatus;
}
export interface virtualEventMethods {
	presenters(): IBaseQuery<virtualEventPresenter[]>;
	presenters(id: string | number): IBaseQuery<virtualEventPresenter>;
	sessions(): IBaseQuery<virtualEventSession[]>;
	sessions(id: string | number): IBaseQuery<virtualEventSession>;
}
/*********************************************
* virtualEventPresenter
**********************************************/
export interface virtualEventPresenter extends virtualEventPresenterProps, virtualEventPresenterMethods , entity { }
export interface virtualEventPresenterProps {
	email: string;
	identity: ComplexTypes.identity;
	presenterDetails: ComplexTypes.virtualEventPresenterDetails;
}
export interface virtualEventPresenterMethods {

}
/*********************************************
* virtualEventSession
**********************************************/
export interface virtualEventSession extends virtualEventSessionProps, virtualEventSessionMethods , onlineMeetingBase { }
export interface virtualEventSessionProps {
	endDateTime: ComplexTypes.dateTimeTimeZone;
	startDateTime: ComplexTypes.dateTimeTimeZone;
}
export interface virtualEventSessionMethods {

}
/*********************************************
* virtualEventRegistration
**********************************************/
export interface virtualEventRegistration extends virtualEventRegistrationProps, virtualEventRegistrationMethods , entity { }
export interface virtualEventRegistrationProps {
	cancelationDateTime: any;
	email: string;
	firstName: string;
	lastName: string;
	preferredLanguage: string;
	preferredTimezone: string;
	registrationDateTime: any;
	registrationQuestionAnswers: ComplexTypes.virtualEventRegistrationQuestionAnswer[];
	status: EnumTypes.virtualEventAttendeeRegistrationStatus;
	userId: string;
}
export interface virtualEventRegistrationMethods {
	sessions(): IBaseQuery<virtualEventSession[]>;
	sessions(id: string | number): IBaseQuery<virtualEventSession>;
}
/*********************************************
* virtualEventRegistrationConfiguration
**********************************************/
export interface virtualEventRegistrationConfiguration extends virtualEventRegistrationConfigurationProps, virtualEventRegistrationConfigurationMethods , entity { }
export interface virtualEventRegistrationConfigurationProps {
	capacity: number;
	registrationWebUrl: string;
}
export interface virtualEventRegistrationConfigurationMethods {
	questions(): IBaseQuery<virtualEventRegistrationQuestionBase[]>;
	questions(id: string | number): IBaseQuery<virtualEventRegistrationQuestionBase>;
}
/*********************************************
* virtualEventRegistrationQuestionBase
**********************************************/
export interface virtualEventRegistrationQuestionBase extends virtualEventRegistrationQuestionBaseProps, virtualEventRegistrationQuestionBaseMethods , entity { }
export interface virtualEventRegistrationQuestionBaseProps {
	displayName: string;
	isRequired: boolean;
}
export interface virtualEventRegistrationQuestionBaseMethods {

}
/*********************************************
* virtualEventRegistrationCustomQuestion
**********************************************/
export interface virtualEventRegistrationCustomQuestion extends virtualEventRegistrationCustomQuestionProps, virtualEventRegistrationCustomQuestionMethods , virtualEventRegistrationQuestionBase { }
export interface virtualEventRegistrationCustomQuestionProps {
	answerChoices: Array<string>[];
	answerInputType: EnumTypes.virtualEventRegistrationQuestionAnswerInputType;
}
export interface virtualEventRegistrationCustomQuestionMethods {

}
/*********************************************
* virtualEventRegistrationPredefinedQuestion
**********************************************/
export interface virtualEventRegistrationPredefinedQuestion extends virtualEventRegistrationPredefinedQuestionProps, virtualEventRegistrationPredefinedQuestionMethods , virtualEventRegistrationQuestionBase { }
export interface virtualEventRegistrationPredefinedQuestionProps {
	label: EnumTypes.virtualEventRegistrationPredefinedQuestionLabel;
}
export interface virtualEventRegistrationPredefinedQuestionMethods {

}
/*********************************************
* virtualEventTownhall
**********************************************/
export interface virtualEventTownhall extends virtualEventTownhallProps, virtualEventTownhallMethods , virtualEvent { }
export interface virtualEventTownhallProps {
	audience: EnumTypes.meetingAudience;
	coOrganizers: ComplexTypes.communicationsUserIdentity[];
	invitedAttendees: ComplexTypes.identity[];
	isInviteOnly: boolean;
}
export interface virtualEventTownhallMethods {

}
/*********************************************
* virtualEventWebinar
**********************************************/
export interface virtualEventWebinar extends virtualEventWebinarProps, virtualEventWebinarMethods , virtualEvent { }
export interface virtualEventWebinarProps {
	audience: EnumTypes.meetingAudience;
	coOrganizers: ComplexTypes.communicationsUserIdentity[];
}
export interface virtualEventWebinarMethods {
	registrationConfiguration(): IBaseQuery<virtualEventWebinarRegistrationConfiguration>;
	registrations(): IBaseQuery<virtualEventRegistration[]>;
	registrations(id: string | number): IBaseQuery<virtualEventRegistration>;
}
/*********************************************
* virtualEventWebinarRegistrationConfiguration
**********************************************/
export interface virtualEventWebinarRegistrationConfiguration extends virtualEventWebinarRegistrationConfigurationProps, virtualEventWebinarRegistrationConfigurationMethods , virtualEventRegistrationConfiguration { }
export interface virtualEventWebinarRegistrationConfigurationProps {
	isManualApprovalEnabled: boolean;
	isWaitlistEnabled: boolean;
}
export interface virtualEventWebinarRegistrationConfigurationMethods {

}
/*********************************************
* authenticationMethod
**********************************************/
export interface authenticationMethod extends authenticationMethodProps, authenticationMethodMethods , entity { }
export interface authenticationMethodProps {

}
export interface authenticationMethodMethods {

}
/*********************************************
* emailAuthenticationMethod
**********************************************/
export interface emailAuthenticationMethod extends emailAuthenticationMethodProps, emailAuthenticationMethodMethods , authenticationMethod { }
export interface emailAuthenticationMethodProps {
	emailAddress: string;
}
export interface emailAuthenticationMethodMethods {

}
/*********************************************
* fido2AuthenticationMethod
**********************************************/
export interface fido2AuthenticationMethod extends fido2AuthenticationMethodProps, fido2AuthenticationMethodMethods , authenticationMethod { }
export interface fido2AuthenticationMethodProps {
	aaGuid: string;
	attestationCertificates: Array<string>[];
	attestationLevel: EnumTypes.attestationLevel;
	createdDateTime: any;
	displayName: string;
	model: string;
}
export interface fido2AuthenticationMethodMethods {

}
/*********************************************
* microsoftAuthenticatorAuthenticationMethod
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethod extends microsoftAuthenticatorAuthenticationMethodProps, microsoftAuthenticatorAuthenticationMethodMethods , authenticationMethod { }
export interface microsoftAuthenticatorAuthenticationMethodProps {
	createdDateTime: any;
	deviceTag: string;
	displayName: string;
	phoneAppVersion: string;
}
export interface microsoftAuthenticatorAuthenticationMethodMethods {
	device(): IBaseQuery<device>;
}
/*********************************************
* passwordAuthenticationMethod
**********************************************/
export interface passwordAuthenticationMethod extends passwordAuthenticationMethodProps, passwordAuthenticationMethodMethods , authenticationMethod { }
export interface passwordAuthenticationMethodProps {
	createdDateTime: any;
	password: string;
}
export interface passwordAuthenticationMethodMethods {

}
/*********************************************
* phoneAuthenticationMethod
**********************************************/
export interface phoneAuthenticationMethod extends phoneAuthenticationMethodProps, phoneAuthenticationMethodMethods , authenticationMethod { }
export interface phoneAuthenticationMethodProps {
	phoneNumber: string;
	phoneType: EnumTypes.authenticationPhoneType;
	smsSignInState: EnumTypes.authenticationMethodSignInState;
}
export interface phoneAuthenticationMethodMethods {

}
/*********************************************
* softwareOathAuthenticationMethod
**********************************************/
export interface softwareOathAuthenticationMethod extends softwareOathAuthenticationMethodProps, softwareOathAuthenticationMethodMethods , authenticationMethod { }
export interface softwareOathAuthenticationMethodProps {
	secretKey: string;
}
export interface softwareOathAuthenticationMethodMethods {

}
/*********************************************
* temporaryAccessPassAuthenticationMethod
**********************************************/
export interface temporaryAccessPassAuthenticationMethod extends temporaryAccessPassAuthenticationMethodProps, temporaryAccessPassAuthenticationMethodMethods , authenticationMethod { }
export interface temporaryAccessPassAuthenticationMethodProps {
	createdDateTime: any;
	isUsable: boolean;
	isUsableOnce: boolean;
	lifetimeInMinutes: number;
	methodUsabilityReason: string;
	startDateTime: any;
	temporaryAccessPass: string;
}
export interface temporaryAccessPassAuthenticationMethodMethods {

}
/*********************************************
* windowsHelloForBusinessAuthenticationMethod
**********************************************/
export interface windowsHelloForBusinessAuthenticationMethod extends windowsHelloForBusinessAuthenticationMethodProps, windowsHelloForBusinessAuthenticationMethodMethods , authenticationMethod { }
export interface windowsHelloForBusinessAuthenticationMethodProps {
	createdDateTime: any;
	displayName: string;
	keyStrength: EnumTypes.authenticationMethodKeyStrength;
}
export interface windowsHelloForBusinessAuthenticationMethodMethods {
	device(): IBaseQuery<device>;
}
/*********************************************
* aadUserConversationMember
**********************************************/
export interface aadUserConversationMember extends aadUserConversationMemberProps, aadUserConversationMemberMethods , conversationMember { }
export interface aadUserConversationMemberProps {
	email: string;
	tenantId: string;
	userId: string;
}
export interface aadUserConversationMemberMethods {
	user(): IBaseQuery<user>;
}
/*********************************************
* anonymousGuestConversationMember
**********************************************/
export interface anonymousGuestConversationMember extends anonymousGuestConversationMemberProps, anonymousGuestConversationMemberMethods , conversationMember { }
export interface anonymousGuestConversationMemberProps {
	anonymousGuestId: string;
}
export interface anonymousGuestConversationMemberMethods {

}
/*********************************************
* appCatalogs
**********************************************/
export interface appCatalogs extends appCatalogsProps, appCatalogsMethods , entity { }
export interface appCatalogsProps {

}
export interface appCatalogsMethods {
	teamsApps(): IBaseQuery<teamsApp[]>;
	teamsApps(id: string | number): IBaseQuery<teamsApp>;
}
/*********************************************
* teamsApp
**********************************************/
export interface teamsApp extends teamsAppProps, teamsAppMethods , entity { }
export interface teamsAppProps {
	displayName: string;
	distributionMethod: EnumTypes.teamsAppDistributionMethod;
	externalId: string;
}
export interface teamsAppMethods {
	appDefinitions(): IBaseQuery<teamsAppDefinition[]>;
	appDefinitions(id: string | number): IBaseQuery<teamsAppDefinition>;
}
/*********************************************
* teamInfo
**********************************************/
export interface teamInfo extends teamInfoProps, teamInfoMethods , entity { }
export interface teamInfoProps {
	displayName: string;
	tenantId: string;
}
export interface teamInfoMethods {
	team(): IBaseQuery<team>;
}
/*********************************************
* associatedTeamInfo
**********************************************/
export interface associatedTeamInfo extends associatedTeamInfoProps, associatedTeamInfoMethods , teamInfo { }
export interface associatedTeamInfoProps {

}
export interface associatedTeamInfoMethods {

}
/*********************************************
* azureCommunicationServicesUserConversationMember
**********************************************/
export interface azureCommunicationServicesUserConversationMember extends azureCommunicationServicesUserConversationMemberProps, azureCommunicationServicesUserConversationMemberMethods , conversationMember { }
export interface azureCommunicationServicesUserConversationMemberProps {
	azureCommunicationServicesId: string;
}
export interface azureCommunicationServicesUserConversationMemberMethods {

}
/*********************************************
* chatMessage
**********************************************/
export interface chatMessage extends chatMessageProps, chatMessageMethods , entity { }
export interface chatMessageProps {
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
	messageHistory: ComplexTypes.chatMessageHistoryItem[];
	messageType: EnumTypes.chatMessageType;
	policyViolation: ComplexTypes.chatMessagePolicyViolation;
	reactions: ComplexTypes.chatMessageReaction[];
	replyToId: string;
	subject: string;
	summary: string;
	webUrl: string;
}
export interface chatMessageMethods {
	hostedContents(): IBaseQuery<chatMessageHostedContent[]>;
	hostedContents(id: string | number): IBaseQuery<chatMessageHostedContent>;
	replies(): IBaseQuery<chatMessage[]>;
	replies(id: string | number): IBaseQuery<chatMessage>;
}
/*********************************************
* sharedWithChannelTeamInfo
**********************************************/
export interface sharedWithChannelTeamInfo extends sharedWithChannelTeamInfoProps, sharedWithChannelTeamInfoMethods , teamInfo { }
export interface sharedWithChannelTeamInfoProps {
	isHostTeam: boolean;
}
export interface sharedWithChannelTeamInfoMethods {
	allowedMembers(): IBaseQuery<conversationMember[]>;
	allowedMembers(id: string | number): IBaseQuery<conversationMember>;
}
/*********************************************
* teamsTab
**********************************************/
export interface teamsTab extends teamsTabProps, teamsTabMethods , entity { }
export interface teamsTabProps {
	configuration: ComplexTypes.teamsTabConfiguration;
	displayName: string;
	webUrl: string;
}
export interface teamsTabMethods {
	teamsApp(): IBaseQuery<teamsApp>;
}
/*********************************************
* chatMessageInfo
**********************************************/
export interface chatMessageInfo extends chatMessageInfoProps, chatMessageInfoMethods , entity { }
export interface chatMessageInfoProps {
	body: ComplexTypes.itemBody;
	createdDateTime: any;
	eventDetail: ComplexTypes.eventMessageDetail;
	from: ComplexTypes.chatMessageFromIdentitySet;
	isDeleted: boolean;
	messageType: EnumTypes.chatMessageType;
}
export interface chatMessageInfoMethods {

}
/*********************************************
* pinnedChatMessageInfo
**********************************************/
export interface pinnedChatMessageInfo extends pinnedChatMessageInfoProps, pinnedChatMessageInfoMethods , entity { }
export interface pinnedChatMessageInfoProps {

}
export interface pinnedChatMessageInfoMethods {
	message(): IBaseQuery<chatMessage>;
}
/*********************************************
* teamworkHostedContent
**********************************************/
export interface teamworkHostedContent extends teamworkHostedContentProps, teamworkHostedContentMethods , entity { }
export interface teamworkHostedContentProps {
	contentBytes: any;
	contentType: string;
}
export interface teamworkHostedContentMethods {

}
/*********************************************
* chatMessageHostedContent
**********************************************/
export interface chatMessageHostedContent extends chatMessageHostedContentProps, chatMessageHostedContentMethods , teamworkHostedContent { }
export interface chatMessageHostedContentProps {

}
export interface chatMessageHostedContentMethods {

}
/*********************************************
* deletedChat
**********************************************/
export interface deletedChat extends deletedChatProps, deletedChatMethods , entity { }
export interface deletedChatProps {

}
export interface deletedChatMethods {

}
/*********************************************
* deletedTeam
**********************************************/
export interface deletedTeam extends deletedTeamProps, deletedTeamMethods , entity { }
export interface deletedTeamProps {

}
export interface deletedTeamMethods {
	channels(): IBaseQuery<channel[]>;
	channels(id: string | number): IBaseQuery<channel>;
}
/*********************************************
* microsoftAccountUserConversationMember
**********************************************/
export interface microsoftAccountUserConversationMember extends microsoftAccountUserConversationMemberProps, microsoftAccountUserConversationMemberMethods , conversationMember { }
export interface microsoftAccountUserConversationMemberProps {
	userId: string;
}
export interface microsoftAccountUserConversationMemberMethods {

}
/*********************************************
* skypeForBusinessUserConversationMember
**********************************************/
export interface skypeForBusinessUserConversationMember extends skypeForBusinessUserConversationMemberProps, skypeForBusinessUserConversationMemberMethods , conversationMember { }
export interface skypeForBusinessUserConversationMemberProps {
	tenantId: string;
	userId: string;
}
export interface skypeForBusinessUserConversationMemberMethods {

}
/*********************************************
* skypeUserConversationMember
**********************************************/
export interface skypeUserConversationMember extends skypeUserConversationMemberProps, skypeUserConversationMemberMethods , conversationMember { }
export interface skypeUserConversationMemberProps {
	skypeId: string;
}
export interface skypeUserConversationMemberMethods {

}
/*********************************************
* teamsAppDefinition
**********************************************/
export interface teamsAppDefinition extends teamsAppDefinitionProps, teamsAppDefinitionMethods , entity { }
export interface teamsAppDefinitionProps {
	authorization: ComplexTypes.teamsAppAuthorization;
	createdBy: ComplexTypes.identitySet;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	publishingState: EnumTypes.teamsAppPublishingState;
	shortDescription: string;
	teamsAppId: string;
	version: string;
}
export interface teamsAppDefinitionMethods {
	bot(): IBaseQuery<teamworkBot>;
}
/*********************************************
* teamworkBot
**********************************************/
export interface teamworkBot extends teamworkBotProps, teamworkBotMethods , entity { }
export interface teamworkBotProps {

}
export interface teamworkBotMethods {

}
/*********************************************
* teamsAppSettings
**********************************************/
export interface teamsAppSettings extends teamsAppSettingsProps, teamsAppSettingsMethods , entity { }
export interface teamsAppSettingsProps {
	allowUserRequestsForAppAccess: boolean;
	isUserPersonalScopeResourceSpecificConsentEnabled: boolean;
}
export interface teamsAppSettingsMethods {

}
/*********************************************
* teamwork
**********************************************/
export interface teamwork extends teamworkProps, teamworkMethods , entity { }
export interface teamworkProps {
	isTeamsEnabled: boolean;
	region: string;
}
export interface teamworkMethods {
	workforceIntegrations(): IBaseQuery<workforceIntegration[]>;
	workforceIntegrations(id: string | number): IBaseQuery<workforceIntegration>;
	deletedChats(): IBaseQuery<deletedChat[]>;
	deletedChats(id: string | number): IBaseQuery<deletedChat>;
	deletedTeams(): IBaseQuery<deletedTeam[]>;
	deletedTeams(id: string | number): IBaseQuery<deletedTeam>;
	teamsAppSettings(): IBaseQuery<teamsAppSettings>;
}
/*********************************************
* workforceIntegration
**********************************************/
export interface workforceIntegration extends workforceIntegrationProps, workforceIntegrationMethods , changeTrackedEntity { }
export interface workforceIntegrationProps {
	apiVersion: number;
	displayName: string;
	encryption: ComplexTypes.workforceIntegrationEncryption;
	isActive: boolean;
	supportedEntities: EnumTypes.workforceIntegrationSupportedEntities;
	url: string;
}
export interface workforceIntegrationMethods {

}
/*********************************************
* teamworkTagMember
**********************************************/
export interface teamworkTagMember extends teamworkTagMemberProps, teamworkTagMemberMethods , entity { }
export interface teamworkTagMemberProps {
	displayName: string;
	tenantId: string;
	userId: string;
}
export interface teamworkTagMemberMethods {

}
/*********************************************
* userScopeTeamsAppInstallation
**********************************************/
export interface userScopeTeamsAppInstallation extends userScopeTeamsAppInstallationProps, userScopeTeamsAppInstallationMethods , teamsAppInstallation { }
export interface userScopeTeamsAppInstallationProps {

}
export interface userScopeTeamsAppInstallationMethods {
	chat(): IBaseQuery<chat>;
}
/*********************************************
* scheduleChangeRequest
**********************************************/
export interface scheduleChangeRequest extends scheduleChangeRequestProps, scheduleChangeRequestMethods , changeTrackedEntity { }
export interface scheduleChangeRequestProps {
	assignedTo: EnumTypes.scheduleChangeRequestActor;
	managerActionDateTime: any;
	managerActionMessage: string;
	managerUserId: string;
	senderDateTime: any;
	senderMessage: string;
	senderUserId: string;
	state: EnumTypes.scheduleChangeState;
}
export interface scheduleChangeRequestMethods {

}
/*********************************************
* offerShiftRequest
**********************************************/
export interface offerShiftRequest extends offerShiftRequestProps, offerShiftRequestMethods , scheduleChangeRequest { }
export interface offerShiftRequestProps {
	recipientActionDateTime: any;
	recipientActionMessage: string;
	recipientUserId: string;
	senderShiftId: string;
}
export interface offerShiftRequestMethods {

}
/*********************************************
* openShift
**********************************************/
export interface openShift extends openShiftProps, openShiftMethods , changeTrackedEntity { }
export interface openShiftProps {
	draftOpenShift: ComplexTypes.openShiftItem;
	schedulingGroupId: string;
	sharedOpenShift: ComplexTypes.openShiftItem;
}
export interface openShiftMethods {

}
/*********************************************
* openShiftChangeRequest
**********************************************/
export interface openShiftChangeRequest extends openShiftChangeRequestProps, openShiftChangeRequestMethods , scheduleChangeRequest { }
export interface openShiftChangeRequestProps {
	openShiftId: string;
}
export interface openShiftChangeRequestMethods {

}
/*********************************************
* schedulingGroup
**********************************************/
export interface schedulingGroup extends schedulingGroupProps, schedulingGroupMethods , changeTrackedEntity { }
export interface schedulingGroupProps {
	displayName: string;
	isActive: boolean;
	userIds: Array<string>[];
}
export interface schedulingGroupMethods {

}
/*********************************************
* shift
**********************************************/
export interface shift extends shiftProps, shiftMethods , changeTrackedEntity { }
export interface shiftProps {
	draftShift: ComplexTypes.shiftItem;
	schedulingGroupId: string;
	sharedShift: ComplexTypes.shiftItem;
	userId: string;
}
export interface shiftMethods {

}
/*********************************************
* swapShiftsChangeRequest
**********************************************/
export interface swapShiftsChangeRequest extends swapShiftsChangeRequestProps, swapShiftsChangeRequestMethods , offerShiftRequest { }
export interface swapShiftsChangeRequestProps {
	recipientShiftId: string;
}
export interface swapShiftsChangeRequestMethods {

}
/*********************************************
* timeOffReason
**********************************************/
export interface timeOffReason extends timeOffReasonProps, timeOffReasonMethods , changeTrackedEntity { }
export interface timeOffReasonProps {
	displayName: string;
	iconType: EnumTypes.timeOffReasonIconType;
	isActive: boolean;
}
export interface timeOffReasonMethods {

}
/*********************************************
* timeOffRequest
**********************************************/
export interface timeOffRequest extends timeOffRequestProps, timeOffRequestMethods , scheduleChangeRequest { }
export interface timeOffRequestProps {
	endDateTime: any;
	startDateTime: any;
	timeOffReasonId: string;
}
export interface timeOffRequestMethods {

}
/*********************************************
* timeOff
**********************************************/
export interface timeOff extends timeOffProps, timeOffMethods , changeTrackedEntity { }
export interface timeOffProps {
	draftTimeOff: ComplexTypes.timeOffItem;
	sharedTimeOff: ComplexTypes.timeOffItem;
	userId: string;
}
export interface timeOffMethods {

}
/*********************************************
* workingTimeSchedule
**********************************************/
export interface workingTimeSchedule extends workingTimeScheduleProps, workingTimeScheduleMethods , entity { }
export interface workingTimeScheduleProps {

}
export interface workingTimeScheduleMethods {

}
/*********************************************
* emailFileAssessmentRequest
**********************************************/
export interface emailFileAssessmentRequest extends emailFileAssessmentRequestProps, emailFileAssessmentRequestMethods , threatAssessmentRequest { }
export interface emailFileAssessmentRequestProps {
	contentData: string;
	destinationRoutingReason: EnumTypes.mailDestinationRoutingReason;
	recipientEmail: string;
}
export interface emailFileAssessmentRequestMethods {

}
/*********************************************
* fileAssessmentRequest
**********************************************/
export interface fileAssessmentRequest extends fileAssessmentRequestProps, fileAssessmentRequestMethods , threatAssessmentRequest { }
export interface fileAssessmentRequestProps {
	contentData: string;
	fileName: string;
}
export interface fileAssessmentRequestMethods {

}
/*********************************************
* mailAssessmentRequest
**********************************************/
export interface mailAssessmentRequest extends mailAssessmentRequestProps, mailAssessmentRequestMethods , threatAssessmentRequest { }
export interface mailAssessmentRequestProps {
	destinationRoutingReason: EnumTypes.mailDestinationRoutingReason;
	messageUri: string;
	recipientEmail: string;
}
export interface mailAssessmentRequestMethods {

}
/*********************************************
* threatAssessmentResult
**********************************************/
export interface threatAssessmentResult extends threatAssessmentResultProps, threatAssessmentResultMethods , entity { }
export interface threatAssessmentResultProps {
	createdDateTime: any;
	message: string;
	resultType: EnumTypes.threatAssessmentResultType;
}
export interface threatAssessmentResultMethods {

}
/*********************************************
* urlAssessmentRequest
**********************************************/
export interface urlAssessmentRequest extends urlAssessmentRequestProps, urlAssessmentRequestMethods , threatAssessmentRequest { }
export interface urlAssessmentRequestProps {
	url: string;
}
export interface urlAssessmentRequestMethods {

}
/*********************************************
* attachmentBase
**********************************************/
export interface attachmentBase extends attachmentBaseProps, attachmentBaseMethods , entity { }
export interface attachmentBaseProps {
	contentType: string;
	lastModifiedDateTime: any;
	name: string;
	size: number;
}
export interface attachmentBaseMethods {

}
/*********************************************
* attachmentSession
**********************************************/
export interface attachmentSession extends attachmentSessionProps, attachmentSessionMethods , entity { }
export interface attachmentSessionProps {
	content: any;
	expirationDateTime: any;
	nextExpectedRanges: Array<string>[];
}
export interface attachmentSessionMethods {

}
/*********************************************
* checklistItem
**********************************************/
export interface checklistItem extends checklistItemProps, checklistItemMethods , entity { }
export interface checklistItemProps {
	checkedDateTime: any;
	createdDateTime: any;
	displayName: string;
	isChecked: boolean;
}
export interface checklistItemMethods {

}
/*********************************************
* linkedResource
**********************************************/
export interface linkedResource extends linkedResourceProps, linkedResourceMethods , entity { }
export interface linkedResourceProps {
	applicationName: string;
	displayName: string;
	externalId: string;
	webUrl: string;
}
export interface linkedResourceMethods {

}
/*********************************************
* taskFileAttachment
**********************************************/
export interface taskFileAttachment extends taskFileAttachmentProps, taskFileAttachmentMethods , attachmentBase { }
export interface taskFileAttachmentProps {
	contentBytes: any;
}
export interface taskFileAttachmentMethods {

}
/*********************************************
* todoTaskList
**********************************************/
export interface todoTaskList extends todoTaskListProps, todoTaskListMethods , entity { }
export interface todoTaskListProps {
	displayName: string;
	isOwner: boolean;
	isShared: boolean;
	wellknownListName: EnumTypes.wellknownListName;
}
export interface todoTaskListMethods {
	extensions(): IBaseQuery<extension[]>;
	extensions(id: string | number): IBaseQuery<extension>;
	tasks(): IBaseQuery<todoTask[]>;
	tasks(id: string | number): IBaseQuery<todoTask>;
}
/*********************************************
* todoTask
**********************************************/
export interface todoTask extends todoTaskProps, todoTaskMethods , entity { }
export interface todoTaskProps {
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
}
export interface todoTaskMethods {
	attachments(): IBaseQuery<attachmentBase[]>;
	attachments(id: string | number): IBaseQuery<attachmentBase>;
	attachmentSessions(): IBaseQuery<attachmentSession[]>;
	attachmentSessions(id: string | number): IBaseQuery<attachmentSession>;
	checklistItems(): IBaseQuery<checklistItem[]>;
	checklistItems(id: string | number): IBaseQuery<checklistItem>;
	extensions(): IBaseQuery<extension[]>;
	extensions(id: string | number): IBaseQuery<extension>;
	linkedResources(): IBaseQuery<linkedResource[]>;
	linkedResources(id: string | number): IBaseQuery<linkedResource>;
}
/*********************************************
* storageQuotaBreakdown
**********************************************/
export interface storageQuotaBreakdown extends storageQuotaBreakdownProps, storageQuotaBreakdownMethods , entity { }
export interface storageQuotaBreakdownProps {
	displayName: string;
	manageWebUrl: string;
	used: number;
}
export interface storageQuotaBreakdownMethods {

}
/*********************************************
* serviceStorageQuotaBreakdown
**********************************************/
export interface serviceStorageQuotaBreakdown extends serviceStorageQuotaBreakdownProps, serviceStorageQuotaBreakdownMethods , storageQuotaBreakdown { }
export interface serviceStorageQuotaBreakdownProps {

}
export interface serviceStorageQuotaBreakdownMethods {

}
/*********************************************
* unifiedStorageQuota
**********************************************/
export interface unifiedStorageQuota extends unifiedStorageQuotaProps, unifiedStorageQuotaMethods , entity { }
export interface unifiedStorageQuotaProps {
	deleted: number;
	manageWebUrl: string;
	remaining: number;
	state: string;
	total: number;
	used: number;
}
export interface unifiedStorageQuotaMethods {
	services(): IBaseQuery<serviceStorageQuotaBreakdown[]>;
	services(id: string | number): IBaseQuery<serviceStorageQuotaBreakdown>;
}
/*********************************************
* community
**********************************************/
export interface community extends communityProps, communityMethods , entity { }
export interface communityProps {
	description: string;
	displayName: string;
	groupId: string;
	privacy: EnumTypes.communityPrivacy;
}
export interface communityMethods {
	group(): IBaseQuery<group>;
	owners(): IBaseQuery<user[]>;
	owners(id: string | number): IBaseQuery<user>;
}
/*********************************************
* employeeExperience
**********************************************/
export interface employeeExperience extends employeeExperienceProps, employeeExperienceMethods  { }
export interface employeeExperienceProps {

}
export interface employeeExperienceMethods {
	communities(): IBaseQuery<community[]>;
	communities(id: string | number): IBaseQuery<community>;
	engagementAsyncOperations(): IBaseQuery<engagementAsyncOperation[]>;
	engagementAsyncOperations(id: string | number): IBaseQuery<engagementAsyncOperation>;
	learningCourseActivities(): IBaseQuery<learningCourseActivity[]>;
	learningCourseActivities(id: string | number): IBaseQuery<learningCourseActivity>;
	learningProviders(): IBaseQuery<learningProvider[]>;
	learningProviders(id: string | number): IBaseQuery<learningProvider>;
}
/*********************************************
* engagementAsyncOperation
**********************************************/
export interface engagementAsyncOperation extends engagementAsyncOperationProps, engagementAsyncOperationMethods , longRunningOperation { }
export interface engagementAsyncOperationProps {
	operationType: EnumTypes.engagementAsyncOperationType;
	resourceId: string;
}
export interface engagementAsyncOperationMethods {

}
/*********************************************
* learningCourseActivity
**********************************************/
export interface learningCourseActivity extends learningCourseActivityProps, learningCourseActivityMethods , entity { }
export interface learningCourseActivityProps {
	completedDateTime: any;
	completionPercentage: number;
	externalcourseActivityId: string;
	learnerUserId: string;
	learningContentId: string;
	learningProviderId: string;
	status: EnumTypes.courseStatus;
}
export interface learningCourseActivityMethods {

}
/*********************************************
* learningProvider
**********************************************/
export interface learningProvider extends learningProviderProps, learningProviderMethods , entity { }
export interface learningProviderProps {
	displayName: string;
	isCourseActivitySyncEnabled: boolean;
	loginWebUrl: string;
	longLogoWebUrlForDarkTheme: string;
	longLogoWebUrlForLightTheme: string;
	squareLogoWebUrlForDarkTheme: string;
	squareLogoWebUrlForLightTheme: string;
}
export interface learningProviderMethods {
	learningContents(): IBaseQuery<learningContent[]>;
	learningContents(id: string | number): IBaseQuery<learningContent>;
	learningCourseActivities(): IBaseQuery<learningCourseActivity[]>;
	learningCourseActivities(id: string | number): IBaseQuery<learningCourseActivity>;
}
/*********************************************
* learningAssignment
**********************************************/
export interface learningAssignment extends learningAssignmentProps, learningAssignmentMethods , learningCourseActivity { }
export interface learningAssignmentProps {
	assignedDateTime: any;
	assignerUserId: string;
	assignmentType: EnumTypes.assignmentType;
	dueDateTime: ComplexTypes.dateTimeTimeZone;
	notes: ComplexTypes.itemBody;
}
export interface learningAssignmentMethods {

}
/*********************************************
* learningContent
**********************************************/
export interface learningContent extends learningContentProps, learningContentMethods , entity { }
export interface learningContentProps {
	additionalTags: Array<string>[];
	contentWebUrl: string;
	contributors: Array<string>[];
	createdDateTime: any;
	description: string;
	duration: number;
	externalId: string;
	format: string;
	isActive: boolean;
	isPremium: boolean;
	isSearchable: boolean;
	languageTag: string;
	lastModifiedDateTime: any;
	level: EnumTypes.level;
	numberOfPages: number;
	skillTags: Array<string>[];
	sourceName: string;
	thumbnailWebUrl: string;
	title: string;
}
export interface learningContentMethods {

}
/*********************************************
* learningSelfInitiatedCourse
**********************************************/
export interface learningSelfInitiatedCourse extends learningSelfInitiatedCourseProps, learningSelfInitiatedCourseMethods , learningCourseActivity { }
export interface learningSelfInitiatedCourseProps {
	startedDateTime: any;
}
export interface learningSelfInitiatedCourseMethods {

}
/*********************************************
* casesRoot
**********************************************/
export interface casesRoot extends casesRootProps, casesRootMethods , entity { }
export interface casesRootProps {

}
export interface casesRootMethods {
	ediscoveryCases(): IBaseQuery<ediscoveryCase[]>;
	ediscoveryCases(id: string | number): IBaseQuery<ediscoveryCase>;
}
/*********************************************
* incident
**********************************************/
export interface incident extends incidentProps, incidentMethods , entity { }
export interface incidentProps {
	assignedTo: string;
	classification: EnumTypes.alertClassification;
	comments: ComplexTypes.alertComment[];
	createdDateTime: any;
	customTags: Array<string>[];
	description: string;
	determination: EnumTypes.alertDetermination;
	displayName: string;
	incidentWebUrl: string;
	lastModifiedBy: string;
	lastUpdateDateTime: any;
	redirectIncidentId: string;
	resolvingComment: string;
	severity: EnumTypes.alertSeverity;
	status: EnumTypes.incidentStatus;
	summary: string;
	systemTags: Array<string>[];
	tenantId: string;
}
export interface incidentMethods {
	alerts(): IBaseQuery<alert[]>;
	alerts(id: string | number): IBaseQuery<alert>;
}
/*********************************************
* labelsRoot
**********************************************/
export interface labelsRoot extends labelsRootProps, labelsRootMethods , entity { }
export interface labelsRootProps {

}
export interface labelsRootMethods {
	authorities(): IBaseQuery<authorityTemplate[]>;
	authorities(id: string | number): IBaseQuery<authorityTemplate>;
	categories(): IBaseQuery<categoryTemplate[]>;
	categories(id: string | number): IBaseQuery<categoryTemplate>;
	citations(): IBaseQuery<citationTemplate[]>;
	citations(id: string | number): IBaseQuery<citationTemplate>;
	departments(): IBaseQuery<departmentTemplate[]>;
	departments(id: string | number): IBaseQuery<departmentTemplate>;
	filePlanReferences(): IBaseQuery<filePlanReferenceTemplate[]>;
	filePlanReferences(id: string | number): IBaseQuery<filePlanReferenceTemplate>;
	retentionLabels(): IBaseQuery<retentionLabel[]>;
	retentionLabels(id: string | number): IBaseQuery<retentionLabel>;
}
/*********************************************
* triggersRoot
**********************************************/
export interface triggersRoot extends triggersRootProps, triggersRootMethods , entity { }
export interface triggersRootProps {

}
export interface triggersRootMethods {
	retentionEvents(): IBaseQuery<retentionEvent[]>;
	retentionEvents(id: string | number): IBaseQuery<retentionEvent>;
}
/*********************************************
* triggerTypesRoot
**********************************************/
export interface triggerTypesRoot extends triggerTypesRootProps, triggerTypesRootMethods , entity { }
export interface triggerTypesRootProps {

}
export interface triggerTypesRootMethods {
	retentionEventTypes(): IBaseQuery<retentionEventType[]>;
	retentionEventTypes(id: string | number): IBaseQuery<retentionEventType>;
}
/*********************************************
* threatIntelligence
**********************************************/
export interface threatIntelligence extends threatIntelligenceProps, threatIntelligenceMethods , entity { }
export interface threatIntelligenceProps {

}
export interface threatIntelligenceMethods {
	articleIndicators(): IBaseQuery<articleIndicator[]>;
	articleIndicators(id: string | number): IBaseQuery<articleIndicator>;
	articles(): IBaseQuery<article[]>;
	articles(id: string | number): IBaseQuery<article>;
	hostComponents(): IBaseQuery<hostComponent[]>;
	hostComponents(id: string | number): IBaseQuery<hostComponent>;
	hostCookies(): IBaseQuery<hostCookie[]>;
	hostCookies(id: string | number): IBaseQuery<hostCookie>;
	hostPairs(): IBaseQuery<hostPair[]>;
	hostPairs(id: string | number): IBaseQuery<hostPair>;
	hostPorts(): IBaseQuery<hostPort[]>;
	hostPorts(id: string | number): IBaseQuery<hostPort>;
	hosts(): IBaseQuery<host[]>;
	hosts(id: string | number): IBaseQuery<host>;
	hostSslCertificates(): IBaseQuery<hostSslCertificate[]>;
	hostSslCertificates(id: string | number): IBaseQuery<hostSslCertificate>;
	hostTrackers(): IBaseQuery<hostTracker[]>;
	hostTrackers(id: string | number): IBaseQuery<hostTracker>;
	intelligenceProfileIndicators(): IBaseQuery<intelligenceProfileIndicator[]>;
	intelligenceProfileIndicators(id: string | number): IBaseQuery<intelligenceProfileIndicator>;
	intelProfiles(): IBaseQuery<intelligenceProfile[]>;
	intelProfiles(id: string | number): IBaseQuery<intelligenceProfile>;
	passiveDnsRecords(): IBaseQuery<passiveDnsRecord[]>;
	passiveDnsRecords(id: string | number): IBaseQuery<passiveDnsRecord>;
	sslCertificates(): IBaseQuery<sslCertificate[]>;
	sslCertificates(id: string | number): IBaseQuery<sslCertificate>;
	subdomains(): IBaseQuery<subdomain[]>;
	subdomains(id: string | number): IBaseQuery<subdomain>;
	vulnerabilities(): IBaseQuery<vulnerability[]>;
	vulnerabilities(id: string | number): IBaseQuery<vulnerability>;
	whoisHistoryRecords(): IBaseQuery<whoisHistoryRecord[]>;
	whoisHistoryRecords(id: string | number): IBaseQuery<whoisHistoryRecord>;
	whoisRecords(): IBaseQuery<whoisRecord[]>;
	whoisRecords(id: string | number): IBaseQuery<whoisRecord>;
}
/*********************************************
* _case
**********************************************/
export interface _case extends _caseProps, _caseMethods , entity { }
export interface _caseProps {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	status: EnumTypes.caseStatus;
}
export interface _caseMethods {

}
/*********************************************
* caseOperation
**********************************************/
export interface caseOperation extends caseOperationProps, caseOperationMethods , entity { }
export interface caseOperationProps {
	action: EnumTypes.caseAction;
	completedDateTime: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	percentProgress: number;
	resultInfo: ComplexTypes.resultInfo;
	status: EnumTypes.caseOperationStatus;
}
export interface caseOperationMethods {

}
/*********************************************
* ediscoveryCase
**********************************************/
export interface ediscoveryCase extends ediscoveryCaseProps, ediscoveryCaseMethods  { }
export interface ediscoveryCaseProps {
	closedBy: ComplexTypes.identitySet;
	closedDateTime: any;
	externalId: string;
}
export interface ediscoveryCaseMethods {
	custodians(): IBaseQuery<ediscoveryCustodian[]>;
	custodians(id: string | number): IBaseQuery<ediscoveryCustodian>;
	noncustodialDataSources(): IBaseQuery<ediscoveryNoncustodialDataSource[]>;
	noncustodialDataSources(id: string | number): IBaseQuery<ediscoveryNoncustodialDataSource>;
	operations(): IBaseQuery<caseOperation[]>;
	operations(id: string | number): IBaseQuery<caseOperation>;
	reviewSets(): IBaseQuery<ediscoveryReviewSet[]>;
	reviewSets(id: string | number): IBaseQuery<ediscoveryReviewSet>;
	searches(): IBaseQuery<ediscoverySearch[]>;
	searches(id: string | number): IBaseQuery<ediscoverySearch>;
	settings(): IBaseQuery<ediscoveryCaseSettings>;
	tags(): IBaseQuery<ediscoveryReviewTag[]>;
	tags(id: string | number): IBaseQuery<ediscoveryReviewTag>;
}
/*********************************************
* dataSet
**********************************************/
export interface dataSet extends dataSetProps, dataSetMethods , entity { }
export interface dataSetProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
}
export interface dataSetMethods {

}
/*********************************************
* dataSource
**********************************************/
export interface dataSource extends dataSourceProps, dataSourceMethods , entity { }
export interface dataSourceProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;
	holdStatus: EnumTypes.dataSourceHoldStatus;
}
export interface dataSourceMethods {

}
/*********************************************
* dataSourceContainer
**********************************************/
export interface dataSourceContainer extends dataSourceContainerProps, dataSourceContainerMethods , entity { }
export interface dataSourceContainerProps {
	createdDateTime: any;
	displayName: string;
	holdStatus: EnumTypes.dataSourceHoldStatus;
	lastModifiedDateTime: any;
	releasedDateTime: any;
	status: EnumTypes.dataSourceContainerStatus;
}
export interface dataSourceContainerMethods {

}
/*********************************************
* ediscoveryAddToReviewSetOperation
**********************************************/
export interface ediscoveryAddToReviewSetOperation extends ediscoveryAddToReviewSetOperationProps, ediscoveryAddToReviewSetOperationMethods , caseOperation { }
export interface ediscoveryAddToReviewSetOperationProps {

}
export interface ediscoveryAddToReviewSetOperationMethods {
	reviewSet(): IBaseQuery<ediscoveryReviewSet>;
	search(): IBaseQuery<ediscoverySearch>;
}
/*********************************************
* ediscoveryReviewSet
**********************************************/
export interface ediscoveryReviewSet extends ediscoveryReviewSetProps, ediscoveryReviewSetMethods , dataSet { }
export interface ediscoveryReviewSetProps {

}
export interface ediscoveryReviewSetMethods {
	queries(): IBaseQuery<ediscoveryReviewSetQuery[]>;
	queries(id: string | number): IBaseQuery<ediscoveryReviewSetQuery>;
}
/*********************************************
* search
**********************************************/
export interface search extends searchProps, searchMethods , entity { }
export interface searchProps {
	contentQuery: string;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
}
export interface searchMethods {

}
/*********************************************
* ediscoverySearch
**********************************************/
export interface ediscoverySearch extends ediscoverySearchProps, ediscoverySearchMethods , search { }
export interface ediscoverySearchProps {
	dataSourceScopes: EnumTypes.dataSourceScopes;
}
export interface ediscoverySearchMethods {
	additionalSources(): IBaseQuery<dataSource[]>;
	additionalSources(id: string | number): IBaseQuery<dataSource>;
	addToReviewSetOperation(): IBaseQuery<ediscoveryAddToReviewSetOperation>;
	custodianSources(): IBaseQuery<dataSource[]>;
	custodianSources(id: string | number): IBaseQuery<dataSource>;
	lastEstimateStatisticsOperation(): IBaseQuery<ediscoveryEstimateOperation>;
	noncustodialSources(): IBaseQuery<ediscoveryNoncustodialDataSource[]>;
	noncustodialSources(id: string | number): IBaseQuery<ediscoveryNoncustodialDataSource>;
}
/*********************************************
* ediscoveryCustodian
**********************************************/
export interface ediscoveryCustodian extends ediscoveryCustodianProps, ediscoveryCustodianMethods , dataSourceContainer { }
export interface ediscoveryCustodianProps {
	acknowledgedDateTime: any;
	email: string;
}
export interface ediscoveryCustodianMethods {
	lastIndexOperation(): IBaseQuery<ediscoveryIndexOperation>;
	siteSources(): IBaseQuery<siteSource[]>;
	siteSources(id: string | number): IBaseQuery<siteSource>;
	unifiedGroupSources(): IBaseQuery<unifiedGroupSource[]>;
	unifiedGroupSources(id: string | number): IBaseQuery<unifiedGroupSource>;
	userSources(): IBaseQuery<userSource[]>;
	userSources(id: string | number): IBaseQuery<userSource>;
}
/*********************************************
* ediscoveryNoncustodialDataSource
**********************************************/
export interface ediscoveryNoncustodialDataSource extends ediscoveryNoncustodialDataSourceProps, ediscoveryNoncustodialDataSourceMethods , dataSourceContainer { }
export interface ediscoveryNoncustodialDataSourceProps {

}
export interface ediscoveryNoncustodialDataSourceMethods {
	dataSource(): IBaseQuery<dataSource>;
	lastIndexOperation(): IBaseQuery<ediscoveryIndexOperation>;
}
/*********************************************
* ediscoveryCaseSettings
**********************************************/
export interface ediscoveryCaseSettings extends ediscoveryCaseSettingsProps, ediscoveryCaseSettingsMethods , entity { }
export interface ediscoveryCaseSettingsProps {
	ocr: ComplexTypes.ocrSettings;
	redundancyDetection: ComplexTypes.redundancyDetectionSettings;
	topicModeling: ComplexTypes.topicModelingSettings;
}
export interface ediscoveryCaseSettingsMethods {

}
/*********************************************
* tag
**********************************************/
export interface tag extends tagProps, tagMethods , entity { }
export interface tagProps {
	createdBy: ComplexTypes.identitySet;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
}
export interface tagMethods {

}
/*********************************************
* ediscoveryReviewTag
**********************************************/
export interface ediscoveryReviewTag extends ediscoveryReviewTagProps, ediscoveryReviewTagMethods , tag { }
export interface ediscoveryReviewTagProps {
	childSelectability: EnumTypes.childSelectability;
}
export interface ediscoveryReviewTagMethods {
	childTags(): IBaseQuery<ediscoveryReviewTag[]>;
	childTags(id: string | number): IBaseQuery<ediscoveryReviewTag>;
	parent(): IBaseQuery<ediscoveryReviewTag>;
}
/*********************************************
* ediscoveryIndexOperation
**********************************************/
export interface ediscoveryIndexOperation extends ediscoveryIndexOperationProps, ediscoveryIndexOperationMethods , caseOperation { }
export interface ediscoveryIndexOperationProps {

}
export interface ediscoveryIndexOperationMethods {

}
/*********************************************
* siteSource
**********************************************/
export interface siteSource extends siteSourceProps, siteSourceMethods , dataSource { }
export interface siteSourceProps {

}
export interface siteSourceMethods {
	site(): IBaseQuery<site>;
}
/*********************************************
* unifiedGroupSource
**********************************************/
export interface unifiedGroupSource extends unifiedGroupSourceProps, unifiedGroupSourceMethods , dataSource { }
export interface unifiedGroupSourceProps {
	includedSources: EnumTypes.sourceType;
}
export interface unifiedGroupSourceMethods {
	group(): IBaseQuery<group>;
}
/*********************************************
* userSource
**********************************************/
export interface userSource extends userSourceProps, userSourceMethods , dataSource { }
export interface userSourceProps {
	email: string;
	includedSources: EnumTypes.sourceType;
	siteWebUrl: string;
}
export interface userSourceMethods {

}
/*********************************************
* ediscoveryEstimateOperation
**********************************************/
export interface ediscoveryEstimateOperation extends ediscoveryEstimateOperationProps, ediscoveryEstimateOperationMethods , caseOperation { }
export interface ediscoveryEstimateOperationProps {
	indexedItemCount: number;
	indexedItemsSize: number;
	mailboxCount: number;
	siteCount: number;
	unindexedItemCount: number;
	unindexedItemsSize: number;
}
export interface ediscoveryEstimateOperationMethods {
	search(): IBaseQuery<ediscoverySearch>;
}
/*********************************************
* ediscoveryExportOperation
**********************************************/
export interface ediscoveryExportOperation extends ediscoveryExportOperationProps, ediscoveryExportOperationMethods , caseOperation { }
export interface ediscoveryExportOperationProps {
	description: string;
	exportFileMetadata: ComplexTypes.exportFileMetadata[];
	exportOptions: EnumTypes.exportOptions;
	exportStructure: EnumTypes.exportFileStructure;
	outputName: string;
}
export interface ediscoveryExportOperationMethods {
	reviewSet(): IBaseQuery<ediscoveryReviewSet>;
	reviewSetQuery(): IBaseQuery<ediscoveryReviewSetQuery>;
}
/*********************************************
* ediscoveryReviewSetQuery
**********************************************/
export interface ediscoveryReviewSetQuery extends ediscoveryReviewSetQueryProps, ediscoveryReviewSetQueryMethods , search { }
export interface ediscoveryReviewSetQueryProps {

}
export interface ediscoveryReviewSetQueryMethods {

}
/*********************************************
* ediscoveryHoldOperation
**********************************************/
export interface ediscoveryHoldOperation extends ediscoveryHoldOperationProps, ediscoveryHoldOperationMethods , caseOperation { }
export interface ediscoveryHoldOperationProps {

}
export interface ediscoveryHoldOperationMethods {

}
/*********************************************
* ediscoveryPurgeDataOperation
**********************************************/
export interface ediscoveryPurgeDataOperation extends ediscoveryPurgeDataOperationProps, ediscoveryPurgeDataOperationMethods , caseOperation { }
export interface ediscoveryPurgeDataOperationProps {

}
export interface ediscoveryPurgeDataOperationMethods {

}
/*********************************************
* ediscoverySearchExportOperation
**********************************************/
export interface ediscoverySearchExportOperation extends ediscoverySearchExportOperationProps, ediscoverySearchExportOperationMethods , caseOperation { }
export interface ediscoverySearchExportOperationProps {
	additionalOptions: EnumTypes.additionalOptions;
	description: string;
	displayName: string;
	exportCriteria: EnumTypes.exportCriteria;
	exportFileMetadata: ComplexTypes.exportFileMetadata[];
	exportFormat: EnumTypes.exportFormat;
	exportLocation: EnumTypes.exportLocation;
	exportSingleItems: boolean;
}
export interface ediscoverySearchExportOperationMethods {
	search(): IBaseQuery<ediscoverySearch>;
}
/*********************************************
* ediscoveryTagOperation
**********************************************/
export interface ediscoveryTagOperation extends ediscoveryTagOperationProps, ediscoveryTagOperationMethods , caseOperation { }
export interface ediscoveryTagOperationProps {

}
export interface ediscoveryTagOperationMethods {

}
/*********************************************
* networkAdapter
**********************************************/
export interface networkAdapter extends networkAdapterProps, networkAdapterMethods , entity { }
export interface networkAdapterProps {
	isEnabled: boolean;
	name: string;
}
export interface networkAdapterMethods {

}
/*********************************************
* healthIssue
**********************************************/
export interface healthIssue extends healthIssueProps, healthIssueMethods , entity { }
export interface healthIssueProps {
	additionalInformation: Array<string>[];
	createdDateTime: any;
	description: string;
	displayName: string;
	domainNames: Array<string>[];
	healthIssueType: EnumTypes.healthIssueType;
	issueTypeId: string;
	lastModifiedDateTime: any;
	recommendations: Array<string>[];
	recommendedActionCommands: Array<string>[];
	sensorDNSNames: Array<string>[];
	severity: EnumTypes.healthIssueSeverity;
	status: EnumTypes.healthIssueStatus;
}
export interface healthIssueMethods {

}
/*********************************************
* sensor
**********************************************/
export interface sensor extends sensorProps, sensorMethods , entity { }
export interface sensorProps {
	createdDateTime: any;
	deploymentStatus: EnumTypes.deploymentStatus;
	displayName: string;
	domainName: string;
	healthStatus: EnumTypes.sensorHealthStatus;
	openHealthIssuesCount: number;
	sensorType: EnumTypes.sensorType;
	settings: ComplexTypes.sensorSettings;
	version: string;
}
export interface sensorMethods {
	healthIssues(): IBaseQuery<healthIssue[]>;
	healthIssues(id: string | number): IBaseQuery<healthIssue>;
}
/*********************************************
* filePlanDescriptorTemplate
**********************************************/
export interface filePlanDescriptorTemplate extends filePlanDescriptorTemplateProps, filePlanDescriptorTemplateMethods , entity { }
export interface filePlanDescriptorTemplateProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;
}
export interface filePlanDescriptorTemplateMethods {

}
/*********************************************
* authorityTemplate
**********************************************/
export interface authorityTemplate extends authorityTemplateProps, authorityTemplateMethods , filePlanDescriptorTemplate { }
export interface authorityTemplateProps {

}
export interface authorityTemplateMethods {

}
/*********************************************
* categoryTemplate
**********************************************/
export interface categoryTemplate extends categoryTemplateProps, categoryTemplateMethods , filePlanDescriptorTemplate { }
export interface categoryTemplateProps {

}
export interface categoryTemplateMethods {
	subcategories(): IBaseQuery<subcategoryTemplate[]>;
	subcategories(id: string | number): IBaseQuery<subcategoryTemplate>;
}
/*********************************************
* subcategoryTemplate
**********************************************/
export interface subcategoryTemplate extends subcategoryTemplateProps, subcategoryTemplateMethods , filePlanDescriptorTemplate { }
export interface subcategoryTemplateProps {

}
export interface subcategoryTemplateMethods {

}
/*********************************************
* citationTemplate
**********************************************/
export interface citationTemplate extends citationTemplateProps, citationTemplateMethods , filePlanDescriptorTemplate { }
export interface citationTemplateProps {
	citationJurisdiction: string;
	citationUrl: string;
}
export interface citationTemplateMethods {

}
/*********************************************
* departmentTemplate
**********************************************/
export interface departmentTemplate extends departmentTemplateProps, departmentTemplateMethods , filePlanDescriptorTemplate { }
export interface departmentTemplateProps {

}
export interface departmentTemplateMethods {

}
/*********************************************
* dispositionReviewStage
**********************************************/
export interface dispositionReviewStage extends dispositionReviewStageProps, dispositionReviewStageMethods  { }
export interface dispositionReviewStageProps {
	name: string;
	reviewersEmailAddresses: Array<string>[];
	stageNumber: string;
}
export interface dispositionReviewStageMethods {

}
/*********************************************
* filePlanDescriptor
**********************************************/
export interface filePlanDescriptor extends filePlanDescriptorProps, filePlanDescriptorMethods , entity { }
export interface filePlanDescriptorProps {
	authority: ComplexTypes.filePlanAuthority;
	category: ComplexTypes.filePlanAppliedCategory;
	citation: ComplexTypes.filePlanCitation;
	department: ComplexTypes.filePlanDepartment;
	filePlanReference: ComplexTypes.filePlanReference;
}
export interface filePlanDescriptorMethods {
	authorityTemplate(): IBaseQuery<authorityTemplate>;
	categoryTemplate(): IBaseQuery<categoryTemplate>;
	citationTemplate(): IBaseQuery<citationTemplate>;
	departmentTemplate(): IBaseQuery<departmentTemplate>;
	filePlanReferenceTemplate(): IBaseQuery<filePlanReferenceTemplate>;
}
/*********************************************
* filePlanReferenceTemplate
**********************************************/
export interface filePlanReferenceTemplate extends filePlanReferenceTemplateProps, filePlanReferenceTemplateMethods , filePlanDescriptorTemplate { }
export interface filePlanReferenceTemplateProps {

}
export interface filePlanReferenceTemplateMethods {

}
/*********************************************
* retentionLabel
**********************************************/
export interface retentionLabel extends retentionLabelProps, retentionLabelMethods , entity { }
export interface retentionLabelProps {
	actionAfterRetentionPeriod: EnumTypes.actionAfterRetentionPeriod;
	behaviorDuringRetentionPeriod: EnumTypes.behaviorDuringRetentionPeriod;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	defaultRecordBehavior: EnumTypes.defaultRecordBehavior;
	descriptionForAdmins: string;
	descriptionForUsers: string;
	displayName: string;
	isInUse: boolean;
	labelToBeApplied: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	retentionDuration: ComplexTypes.retentionDuration;
	retentionTrigger: EnumTypes.retentionTrigger;
}
export interface retentionLabelMethods {
	descriptors(): IBaseQuery<filePlanDescriptor>;
	dispositionReviewStages(): IBaseQuery<dispositionReviewStage[]>;
	dispositionReviewStages(id: string | number): IBaseQuery<dispositionReviewStage>;
	retentionEventType(): IBaseQuery<retentionEventType>;
}
/*********************************************
* retentionEvent
**********************************************/
export interface retentionEvent extends retentionEventProps, retentionEventMethods , entity { }
export interface retentionEventProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
	eventPropagationResults: ComplexTypes.eventPropagationResult[];
	eventQueries: ComplexTypes.eventQuery[];
	eventStatus: ComplexTypes.retentionEventStatus;
	eventTriggerDateTime: any;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	lastStatusUpdateDateTime: any;
}
export interface retentionEventMethods {
	retentionEventType(): IBaseQuery<retentionEventType>;
}
/*********************************************
* retentionEventType
**********************************************/
export interface retentionEventType extends retentionEventTypeProps, retentionEventTypeMethods , entity { }
export interface retentionEventTypeProps {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
}
export interface retentionEventTypeMethods {

}
/*********************************************
* artifact
**********************************************/
export interface artifact extends artifactProps, artifactMethods , entity { }
export interface artifactProps {

}
export interface artifactMethods {

}
/*********************************************
* hostComponent
**********************************************/
export interface hostComponent extends hostComponentProps, hostComponentMethods , artifact { }
export interface hostComponentProps {
	category: string;
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	name: string;
	version: string;
}
export interface hostComponentMethods {
	host(): IBaseQuery<host>;
}
/*********************************************
* host
**********************************************/
export interface host extends hostProps, hostMethods , artifact { }
export interface hostProps {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
}
export interface hostMethods {
	childHostPairs(): IBaseQuery<hostPair[]>;
	childHostPairs(id: string | number): IBaseQuery<hostPair>;
	components(): IBaseQuery<hostComponent[]>;
	components(id: string | number): IBaseQuery<hostComponent>;
	cookies(): IBaseQuery<hostCookie[]>;
	cookies(id: string | number): IBaseQuery<hostCookie>;
	hostPairs(): IBaseQuery<hostPair[]>;
	hostPairs(id: string | number): IBaseQuery<hostPair>;
	parentHostPairs(): IBaseQuery<hostPair[]>;
	parentHostPairs(id: string | number): IBaseQuery<hostPair>;
	passiveDns(): IBaseQuery<passiveDnsRecord[]>;
	passiveDns(id: string | number): IBaseQuery<passiveDnsRecord>;
	passiveDnsReverse(): IBaseQuery<passiveDnsRecord[]>;
	passiveDnsReverse(id: string | number): IBaseQuery<passiveDnsRecord>;
	ports(): IBaseQuery<hostPort[]>;
	ports(id: string | number): IBaseQuery<hostPort>;
	reputation(): IBaseQuery<hostReputation>;
	sslCertificates(): IBaseQuery<hostSslCertificate[]>;
	sslCertificates(id: string | number): IBaseQuery<hostSslCertificate>;
	subdomains(): IBaseQuery<subdomain[]>;
	subdomains(id: string | number): IBaseQuery<subdomain>;
	trackers(): IBaseQuery<hostTracker[]>;
	trackers(id: string | number): IBaseQuery<hostTracker>;
	whois(): IBaseQuery<whoisRecord>;
}
/*********************************************
* article
**********************************************/
export interface article extends articleProps, articleMethods , entity { }
export interface articleProps {
	body: ComplexTypes.formattedContent;
	createdDateTime: any;
	imageUrl: string;
	isFeatured: boolean;
	lastUpdatedDateTime: any;
	summary: ComplexTypes.formattedContent;
	tags: Array<string>[];
	title: string;
}
export interface articleMethods {
	indicators(): IBaseQuery<articleIndicator[]>;
	indicators(id: string | number): IBaseQuery<articleIndicator>;
}
/*********************************************
* indicator
**********************************************/
export interface indicator extends indicatorProps, indicatorMethods , entity { }
export interface indicatorProps {
	source: EnumTypes.indicatorSource;
}
export interface indicatorMethods {
	artifact(): IBaseQuery<artifact>;
}
/*********************************************
* articleIndicator
**********************************************/
export interface articleIndicator extends articleIndicatorProps, articleIndicatorMethods , indicator { }
export interface articleIndicatorProps {

}
export interface articleIndicatorMethods {

}
/*********************************************
* hostPair
**********************************************/
export interface hostPair extends hostPairProps, hostPairMethods , entity { }
export interface hostPairProps {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	linkKind: string;
}
export interface hostPairMethods {
	childHost(): IBaseQuery<host>;
	parentHost(): IBaseQuery<host>;
}
/*********************************************
* hostCookie
**********************************************/
export interface hostCookie extends hostCookieProps, hostCookieMethods , artifact { }
export interface hostCookieProps {
	domain: string;
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	name: string;
}
export interface hostCookieMethods {
	host(): IBaseQuery<host>;
}
/*********************************************
* passiveDnsRecord
**********************************************/
export interface passiveDnsRecord extends passiveDnsRecordProps, passiveDnsRecordMethods , artifact { }
export interface passiveDnsRecordProps {
	collectedDateTime: any;
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	recordType: string;
}
export interface passiveDnsRecordMethods {
	artifact(): IBaseQuery<artifact>;
	parentHost(): IBaseQuery<host>;
}
/*********************************************
* hostPort
**********************************************/
export interface hostPort extends hostPortProps, hostPortMethods , entity { }
export interface hostPortProps {
	banners: ComplexTypes.hostPortBanner[];
	firstSeenDateTime: any;
	lastScanDateTime: any;
	lastSeenDateTime: any;
	port: number;
	protocol: EnumTypes.hostPortProtocol;
	services: ComplexTypes.hostPortComponent[];
	status: EnumTypes.hostPortStatus;
	timesObserved: number;
}
export interface hostPortMethods {
	host(): IBaseQuery<host>;
	mostRecentSslCertificate(): IBaseQuery<sslCertificate>;
}
/*********************************************
* hostReputation
**********************************************/
export interface hostReputation extends hostReputationProps, hostReputationMethods , entity { }
export interface hostReputationProps {
	classification: EnumTypes.hostReputationClassification;
	rules: ComplexTypes.hostReputationRule[];
	score: number;
}
export interface hostReputationMethods {

}
/*********************************************
* hostSslCertificate
**********************************************/
export interface hostSslCertificate extends hostSslCertificateProps, hostSslCertificateMethods , artifact { }
export interface hostSslCertificateProps {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	ports: ComplexTypes.hostSslCertificatePort[];
}
export interface hostSslCertificateMethods {
	host(): IBaseQuery<host>;
	sslCertificate(): IBaseQuery<sslCertificate>;
}
/*********************************************
* subdomain
**********************************************/
export interface subdomain extends subdomainProps, subdomainMethods , entity { }
export interface subdomainProps {
	firstSeenDateTime: any;
}
export interface subdomainMethods {
	host(): IBaseQuery<host>;
}
/*********************************************
* hostTracker
**********************************************/
export interface hostTracker extends hostTrackerProps, hostTrackerMethods , artifact { }
export interface hostTrackerProps {
	firstSeenDateTime: any;
	kind: string;
	lastSeenDateTime: any;
	value: string;
}
export interface hostTrackerMethods {
	host(): IBaseQuery<host>;
}
/*********************************************
* whoisBaseRecord
**********************************************/
export interface whoisBaseRecord extends whoisBaseRecordProps, whoisBaseRecordMethods , entity { }
export interface whoisBaseRecordProps {
	abuse: ComplexTypes.whoisContact;
	admin: ComplexTypes.whoisContact;
	billing: ComplexTypes.whoisContact;
	domainStatus: string;
	expirationDateTime: any;
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	lastUpdateDateTime: any;
	nameservers: ComplexTypes.whoisNameserver[];
	noc: ComplexTypes.whoisContact;
	rawWhoisText: string;
	registrant: ComplexTypes.whoisContact;
	registrar: ComplexTypes.whoisContact;
	registrationDateTime: any;
	technical: ComplexTypes.whoisContact;
	whoisServer: string;
	zone: ComplexTypes.whoisContact;
}
export interface whoisBaseRecordMethods {
	host(): IBaseQuery<host>;
}
/*********************************************
* whoisRecord
**********************************************/
export interface whoisRecord extends whoisRecordProps, whoisRecordMethods , whoisBaseRecord { }
export interface whoisRecordProps {

}
export interface whoisRecordMethods {
	history(): IBaseQuery<whoisHistoryRecord[]>;
	history(id: string | number): IBaseQuery<whoisHistoryRecord>;
}
/*********************************************
* hostname
**********************************************/
export interface hostname extends hostnameProps, hostnameMethods , host { }
export interface hostnameProps {
	registrant: string;
	registrar: string;
}
export interface hostnameMethods {

}
/*********************************************
* sslCertificate
**********************************************/
export interface sslCertificate extends sslCertificateProps, sslCertificateMethods , artifact { }
export interface sslCertificateProps {
	expirationDateTime: any;
	fingerprint: string;
	firstSeenDateTime: any;
	issueDateTime: any;
	issuer: ComplexTypes.sslCertificateEntity;
	lastSeenDateTime: any;
	serialNumber: string;
	sha1: string;
	subject: ComplexTypes.sslCertificateEntity;
}
export interface sslCertificateMethods {
	relatedHosts(): IBaseQuery<host[]>;
	relatedHosts(id: string | number): IBaseQuery<host>;
}
/*********************************************
* intelligenceProfile
**********************************************/
export interface intelligenceProfile extends intelligenceProfileProps, intelligenceProfileMethods , entity { }
export interface intelligenceProfileProps {
	aliases: Array<string>[];
	countriesOrRegionsOfOrigin: ComplexTypes.intelligenceProfileCountryOrRegionOfOrigin[];
	description: ComplexTypes.formattedContent;
	firstActiveDateTime: any;
	kind: EnumTypes.intelligenceProfileKind;
	summary: ComplexTypes.formattedContent;
	targets: Array<string>[];
	title: string;
	tradecraft: ComplexTypes.formattedContent;
}
export interface intelligenceProfileMethods {
	indicators(): IBaseQuery<intelligenceProfileIndicator[]>;
	indicators(id: string | number): IBaseQuery<intelligenceProfileIndicator>;
}
/*********************************************
* intelligenceProfileIndicator
**********************************************/
export interface intelligenceProfileIndicator extends intelligenceProfileIndicatorProps, intelligenceProfileIndicatorMethods , indicator { }
export interface intelligenceProfileIndicatorProps {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
}
export interface intelligenceProfileIndicatorMethods {

}
/*********************************************
* ipAddress
**********************************************/
export interface ipAddress extends ipAddressProps, ipAddressMethods , host { }
export interface ipAddressProps {
	autonomousSystem: ComplexTypes.autonomousSystem;
	countryOrRegion: string;
	hostingProvider: string;
	netblock: string;
}
export interface ipAddressMethods {

}
/*********************************************
* vulnerability
**********************************************/
export interface vulnerability extends vulnerabilityProps, vulnerabilityMethods , entity { }
export interface vulnerabilityProps {
	activeExploitsObserved: boolean;
	commonWeaknessEnumerationIds: Array<string>[];
	createdDateTime: any;
	cvss2Summary: ComplexTypes.cvssSummary;
	cvss3Summary: ComplexTypes.cvssSummary;
	description: ComplexTypes.formattedContent;
	exploits: ComplexTypes.hyperlink[];
	exploitsAvailable: boolean;
	hasChatter: boolean;
	lastModifiedDateTime: any;
	priorityScore: number;
	publishedDateTime: any;
	references: ComplexTypes.hyperlink[];
	remediation: ComplexTypes.formattedContent;
	severity: EnumTypes.vulnerabilitySeverity;
}
export interface vulnerabilityMethods {
	articles(): IBaseQuery<article[]>;
	articles(id: string | number): IBaseQuery<article>;
	components(): IBaseQuery<vulnerabilityComponent[]>;
	components(id: string | number): IBaseQuery<vulnerabilityComponent>;
}
/*********************************************
* whoisHistoryRecord
**********************************************/
export interface whoisHistoryRecord extends whoisHistoryRecordProps, whoisHistoryRecordMethods , whoisBaseRecord { }
export interface whoisHistoryRecordProps {

}
export interface whoisHistoryRecordMethods {

}
/*********************************************
* unclassifiedArtifact
**********************************************/
export interface unclassifiedArtifact extends unclassifiedArtifactProps, unclassifiedArtifactMethods , artifact { }
export interface unclassifiedArtifactProps {
	kind: string;
	value: string;
}
export interface unclassifiedArtifactMethods {

}
/*********************************************
* vulnerabilityComponent
**********************************************/
export interface vulnerabilityComponent extends vulnerabilityComponentProps, vulnerabilityComponentMethods , entity { }
export interface vulnerabilityComponentProps {
	name: string;
}
export interface vulnerabilityComponentMethods {

}
/*********************************************
* store
**********************************************/
export interface store extends storeProps, storeMethods , entity { }
export interface storeProps {
	defaultLanguageTag: string;
	languageTags: Array<string>[];
}
export interface storeMethods {
	groups(): IBaseQuery<group[]>;
	groups(id: string | number): IBaseQuery<group>;
	sets(): IBaseQuery<set[]>;
	sets(id: string | number): IBaseQuery<set>;
}
/*********************************************
* set
**********************************************/
export interface set extends setProps, setMethods , entity { }
export interface setProps {
	createdDateTime: any;
	description: string;
	localizedNames: ComplexTypes.localizedName[];
	properties: ComplexTypes.keyValue[];
}
export interface setMethods {
	children(): IBaseQuery<term[]>;
	children(id: string | number): IBaseQuery<term>;
	parentGroup(): IBaseQuery<group>;
	relations(): IBaseQuery<relation[]>;
	relations(id: string | number): IBaseQuery<relation>;
	terms(): IBaseQuery<term[]>;
	terms(id: string | number): IBaseQuery<term>;
}
/*********************************************
* relation
**********************************************/
export interface relation extends relationProps, relationMethods , entity { }
export interface relationProps {
	relationship: EnumTypes.relationType;
}
export interface relationMethods {
	fromTerm(): IBaseQuery<term>;
	set(): IBaseQuery<set>;
	toTerm(): IBaseQuery<term>;
}
/*********************************************
* term
**********************************************/
export interface term extends termProps, termMethods , entity { }
export interface termProps {
	createdDateTime: any;
	descriptions: ComplexTypes.localizedDescription[];
	labels: ComplexTypes.localizedLabel[];
	lastModifiedDateTime: any;
	properties: ComplexTypes.keyValue[];
}
export interface termMethods {
	children(): IBaseQuery<term[]>;
	children(id: string | number): IBaseQuery<term>;
	relations(): IBaseQuery<relation[]>;
	relations(id: string | number): IBaseQuery<relation>;
	set(): IBaseQuery<set>;
}
/*********************************************
* callRecord
**********************************************/
export interface callRecord extends callRecordProps, callRecordMethods , entity { }
export interface callRecordProps {
	endDateTime: any;
	joinWebUrl: string;
	lastModifiedDateTime: any;
	modalities: EnumTypes.modality[];
	organizer: ComplexTypes.identitySet;
	participants: ComplexTypes.identitySet[];
	startDateTime: any;
	type: EnumTypes.callType;
	version: number;
}
export interface callRecordMethods {
	organizer_v2(): IBaseQuery<organizer>;
	participants_v2(): IBaseQuery<participant[]>;
	participants_v2(id: string | number): IBaseQuery<participant>;
	sessions(): IBaseQuery<session[]>;
	sessions(id: string | number): IBaseQuery<session>;
}
/*********************************************
* participantBase
**********************************************/
export interface participantBase extends participantBaseProps, participantBaseMethods , entity { }
export interface participantBaseProps {
	administrativeUnitInfos: ComplexTypes.administrativeUnitInfo[];
	identity: ComplexTypes.communicationsIdentitySet;
}
export interface participantBaseMethods {

}
/*********************************************
* organizer
**********************************************/
export interface organizer extends organizerProps, organizerMethods , participantBase { }
export interface organizerProps {

}
export interface organizerMethods {

}
/*********************************************
* session
**********************************************/
export interface session extends sessionProps, sessionMethods , entity { }
export interface sessionProps {
	callee: ComplexTypes.endpoint;
	caller: ComplexTypes.endpoint;
	endDateTime: any;
	failureInfo: ComplexTypes.failureInfo;
	isTest: boolean;
	modalities: EnumTypes.modality[];
	startDateTime: any;
}
export interface sessionMethods {
	segments(): IBaseQuery<segment[]>;
	segments(id: string | number): IBaseQuery<segment>;
}
/*********************************************
* segment
**********************************************/
export interface segment extends segmentProps, segmentMethods , entity { }
export interface segmentProps {
	callee: ComplexTypes.endpoint;
	caller: ComplexTypes.endpoint;
	endDateTime: any;
	failureInfo: ComplexTypes.failureInfo;
	media: ComplexTypes.media[];
	startDateTime: any;
}
export interface segmentMethods {

}
/*********************************************
* billing
**********************************************/
export interface billing extends billingProps, billingMethods , entity { }
export interface billingProps {

}
export interface billingMethods {
	manifests(): IBaseQuery<manifest[]>;
	manifests(id: string | number): IBaseQuery<manifest>;
	operations(): IBaseQuery<operation[]>;
	operations(id: string | number): IBaseQuery<operation>;
	reconciliation(): IBaseQuery<billingReconciliation>;
	usage(): IBaseQuery<azureUsage>;
}
/*********************************************
* azureUsage
**********************************************/
export interface azureUsage extends azureUsageProps, azureUsageMethods , entity { }
export interface azureUsageProps {

}
export interface azureUsageMethods {
	billed(): IBaseQuery<billedUsage>;
	unbilled(): IBaseQuery<unbilledUsage>;
}
/*********************************************
* billedUsage
**********************************************/
export interface billedUsage extends billedUsageProps, billedUsageMethods , entity { }
export interface billedUsageProps {

}
export interface billedUsageMethods {

}
/*********************************************
* unbilledUsage
**********************************************/
export interface unbilledUsage extends unbilledUsageProps, unbilledUsageMethods , entity { }
export interface unbilledUsageProps {

}
export interface unbilledUsageMethods {

}
/*********************************************
* billedReconciliation
**********************************************/
export interface billedReconciliation extends billedReconciliationProps, billedReconciliationMethods , entity { }
export interface billedReconciliationProps {

}
export interface billedReconciliationMethods {

}
/*********************************************
* manifest
**********************************************/
export interface manifest extends manifestProps, manifestMethods , entity { }
export interface manifestProps {
	blobCount: number;
	blobs: ComplexTypes.blob[];
	createdDateTime: any;
	dataFormat: string;
	eTag: string;
	partitionType: string;
	partnerTenantId: string;
	rootDirectory: string;
	sasToken: string;
	schemaVersion: string;
}
export interface manifestMethods {

}
/*********************************************
* billingReconciliation
**********************************************/
export interface billingReconciliation extends billingReconciliationProps, billingReconciliationMethods , entity { }
export interface billingReconciliationProps {

}
export interface billingReconciliationMethods {
	billed(): IBaseQuery<billedReconciliation>;
}
/*********************************************
* exportSuccessOperation
**********************************************/
export interface exportSuccessOperation extends exportSuccessOperationProps, exportSuccessOperationMethods , operation { }
export interface exportSuccessOperationProps {

}
export interface exportSuccessOperationMethods {
	resourceLocation(): IBaseQuery<manifest>;
}
/*********************************************
* failedOperation
**********************************************/
export interface failedOperation extends failedOperationProps, failedOperationMethods , operation { }
export interface failedOperationProps {
	error: ComplexTypes.publicError;
}
export interface failedOperationMethods {

}
/*********************************************
* runningOperation
**********************************************/
export interface runningOperation extends runningOperationProps, runningOperationMethods , operation { }
export interface runningOperationProps {

}
export interface runningOperationMethods {

}
/*********************************************
* searchAnswer
**********************************************/
export interface searchAnswer extends searchAnswerProps, searchAnswerMethods , entity { }
export interface searchAnswerProps {
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	webUrl: string;
}
export interface searchAnswerMethods {

}
/*********************************************
* acronym
**********************************************/
export interface acronym extends acronymProps, acronymMethods , searchAnswer { }
export interface acronymProps {
	standsFor: string;
	state: EnumTypes.answerState;
}
export interface acronymMethods {

}
/*********************************************
* bookmark
**********************************************/
export interface bookmark extends bookmarkProps, bookmarkMethods , searchAnswer { }
export interface bookmarkProps {
	availabilityEndDateTime: any;
	availabilityStartDateTime: any;
	categories: Array<string>[];
	groupIds: Array<string>[];
	isSuggested: boolean;
	keywords: ComplexTypes.answerKeyword;
	languageTags: Array<string>[];
	platforms: EnumTypes.devicePlatformType[];
	powerAppIds: Array<string>[];
	state: EnumTypes.answerState;
	targetedVariations: ComplexTypes.answerVariant[];
}
export interface bookmarkMethods {

}
/*********************************************
* qna
**********************************************/
export interface qna extends qnaProps, qnaMethods , searchAnswer { }
export interface qnaProps {
	availabilityEndDateTime: any;
	availabilityStartDateTime: any;
	groupIds: Array<string>[];
	isSuggested: boolean;
	keywords: ComplexTypes.answerKeyword;
	languageTags: Array<string>[];
	platforms: EnumTypes.devicePlatformType[];
	state: EnumTypes.answerState;
	targetedVariations: ComplexTypes.answerVariant[];
}
export interface qnaMethods {

}
/*********************************************
* connectionOperation
**********************************************/
export interface connectionOperation extends connectionOperationProps, connectionOperationMethods , entity { }
export interface connectionOperationProps {
	error: ComplexTypes.publicError;
	status: EnumTypes.connectionOperationStatus;
}
export interface connectionOperationMethods {

}
/*********************************************
* external
**********************************************/
export interface external extends externalProps, externalMethods  { }
export interface externalProps {

}
export interface externalMethods {
	connections(): IBaseQuery<externalConnection[]>;
	connections(id: string | number): IBaseQuery<externalConnection>;
}
/*********************************************
* externalConnection
**********************************************/
export interface externalConnection extends externalConnectionProps, externalConnectionMethods , entity { }
export interface externalConnectionProps {
	activitySettings: ComplexTypes.activitySettings;
	configuration: ComplexTypes.configuration;
	connectorId: string;
	description: string;
	name: string;
	searchSettings: ComplexTypes.searchSettings;
	state: EnumTypes.connectionState;
}
export interface externalConnectionMethods {
	groups(): IBaseQuery<externalGroup[]>;
	groups(id: string | number): IBaseQuery<externalGroup>;
	items(): IBaseQuery<externalItem[]>;
	items(id: string | number): IBaseQuery<externalItem>;
	operations(): IBaseQuery<connectionOperation[]>;
	operations(id: string | number): IBaseQuery<connectionOperation>;
	schema(): IBaseQuery<schema>;
}
/*********************************************
* externalActivity
**********************************************/
export interface externalActivity extends externalActivityProps, externalActivityMethods , entity { }
export interface externalActivityProps {
	startDateTime: any;
	type: EnumTypes.externalActivityType;
}
export interface externalActivityMethods {
	performedBy(): IBaseQuery<ComplexTypes.identity>;
}
/*********************************************
* identity
**********************************************/
export interface identity extends identityProps, identityMethods , entity { }
export interface identityProps {
	type: EnumTypes.identityType;
}
export interface identityMethods {

}
/*********************************************
* externalActivityResult
**********************************************/
export interface externalActivityResult extends externalActivityResultProps, externalActivityResultMethods , externalActivity { }
export interface externalActivityResultProps {
	error: ComplexTypes.publicError;
}
export interface externalActivityResultMethods {

}
/*********************************************
* externalGroup
**********************************************/
export interface externalGroup extends externalGroupProps, externalGroupMethods , entity { }
export interface externalGroupProps {
	description: string;
	displayName: string;
}
export interface externalGroupMethods {
	members(): IBaseQuery<ComplexTypes.identity[]>;
	members(id: string | number): IBaseQuery<ComplexTypes.identity>;
}
/*********************************************
* externalItem
**********************************************/
export interface externalItem extends externalItemProps, externalItemMethods , entity { }
export interface externalItemProps {
	acl: ComplexTypes.acl[];
	content: ComplexTypes.externalItemContent;
	properties: ComplexTypes.properties;
}
export interface externalItemMethods {
	activities(): IBaseQuery<externalActivity[]>;
	activities(id: string | number): IBaseQuery<externalActivity>;
}
/*********************************************
* schema
**********************************************/
export interface schema extends schemaProps, schemaMethods , entity { }
export interface schemaProps {
	baseType: string;
	properties: ComplexTypes.property[];
}
export interface schemaMethods {

}