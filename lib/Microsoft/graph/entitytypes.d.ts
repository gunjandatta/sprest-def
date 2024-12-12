import { IBaseCollection, IBaseQuery } from "../../base";
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
	createdBy(): IBaseQuery<user> & userMethods;
	lastModifiedBy(): IBaseQuery<user> & userMethods;
	tasks(): IBaseCollection<task>;
	tasks(id: string | number): IBaseQuery<task> & taskMethods;
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
	executionScope(): IBaseCollection<userProcessingResult>;
	executionScope(id: string | number): IBaseQuery<userProcessingResult> & userProcessingResultMethods;
	runs(): IBaseCollection<run>;
	runs(id: string | number): IBaseQuery<run> & runMethods;
	taskReports(): IBaseCollection<taskReport>;
	taskReports(id: string | number): IBaseQuery<taskReport> & taskReportMethods;
	userProcessingResults(): IBaseCollection<userProcessingResult>;
	userProcessingResults(id: string | number): IBaseQuery<userProcessingResult> & userProcessingResultMethods;
	versions(): IBaseCollection<workflowVersion>;
	versions(id: string | number): IBaseQuery<workflowVersion> & workflowVersionMethods;
}
/*********************************************
* lifecycleWorkflowsContainer
**********************************************/
export interface lifecycleWorkflowsContainer extends lifecycleWorkflowsContainerProps, lifecycleWorkflowsContainerMethods , entity { }
export interface lifecycleWorkflowsContainerProps {

}
export interface lifecycleWorkflowsContainerMethods {
	customTaskExtensions(): IBaseCollection<customTaskExtension>;
	customTaskExtensions(id: string | number): IBaseQuery<customTaskExtension> & customTaskExtensionMethods;
	deletedItems(): IBaseQuery<deletedItemContainer> & deletedItemContainerMethods;
	insights(): IBaseQuery<insights> & insightsMethods;
	settings(): IBaseQuery<lifecycleManagementSettings> & lifecycleManagementSettingsMethods;
	taskDefinitions(): IBaseCollection<taskDefinition>;
	taskDefinitions(id: string | number): IBaseQuery<taskDefinition> & taskDefinitionMethods;
	workflows(): IBaseCollection<workflow>;
	workflows(id: string | number): IBaseQuery<workflow> & workflowMethods;
	workflowTemplates(): IBaseCollection<workflowTemplate>;
	workflowTemplates(id: string | number): IBaseQuery<workflowTemplate> & workflowTemplateMethods;
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
	taskProcessingResults(): IBaseCollection<taskProcessingResult>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult> & taskProcessingResultMethods;
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
	subject(): IBaseQuery<user> & userMethods;
	task(): IBaseQuery<task> & taskMethods;
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
	createdBy(): IBaseQuery<user> & userMethods;
	lastModifiedBy(): IBaseQuery<user> & userMethods;
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
	tasks(): IBaseCollection<task>;
	tasks(id: string | number): IBaseQuery<task> & taskMethods;
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
	taskProcessingResults(): IBaseCollection<taskProcessingResult>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult> & taskProcessingResultMethods;
	userProcessingResults(): IBaseCollection<userProcessingResult>;
	userProcessingResults(id: string | number): IBaseQuery<userProcessingResult> & userProcessingResultMethods;
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
	subject(): IBaseQuery<user> & userMethods;
	taskProcessingResults(): IBaseCollection<taskProcessingResult>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult> & taskProcessingResultMethods;
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
	task(): IBaseQuery<task> & taskMethods;
	taskDefinition(): IBaseQuery<taskDefinition> & taskDefinitionMethods;
	taskProcessingResults(): IBaseCollection<taskProcessingResult>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult> & taskProcessingResultMethods;
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
	appManagementPolicies(): IBaseCollection<appManagementPolicy>;
	appManagementPolicies(id: string | number): IBaseQuery<appManagementPolicy> & appManagementPolicyMethods;
	createdOnBehalfOf(): IBaseQuery<directoryObject> & directoryObjectMethods;
	extensionProperties(): IBaseCollection<extensionProperty>;
	extensionProperties(id: string | number): IBaseQuery<extensionProperty> & extensionPropertyMethods;
	federatedIdentityCredentials(): IBaseCollection<federatedIdentityCredential>;
	federatedIdentityCredentials(id: string | number): IBaseQuery<federatedIdentityCredential> & federatedIdentityCredentialMethods;
	homeRealmDiscoveryPolicies(): IBaseCollection<homeRealmDiscoveryPolicy>;
	homeRealmDiscoveryPolicies(id: string | number): IBaseQuery<homeRealmDiscoveryPolicy> & homeRealmDiscoveryPolicyMethods;
	owners(): IBaseCollection<directoryObject>;
	owners(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	tokenIssuancePolicies(): IBaseCollection<tokenIssuancePolicy>;
	tokenIssuancePolicies(id: string | number): IBaseQuery<tokenIssuancePolicy> & tokenIssuancePolicyMethods;
	tokenLifetimePolicies(): IBaseCollection<tokenLifetimePolicy>;
	tokenLifetimePolicies(id: string | number): IBaseQuery<tokenLifetimePolicy> & tokenLifetimePolicyMethods;
	synchronization(): IBaseQuery<synchronization> & synchronizationMethods;
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
	appliesTo(): IBaseCollection<directoryObject>;
	appliesTo(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
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
	appliesTo(): IBaseCollection<directoryObject>;
	appliesTo(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
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
	jobs(): IBaseCollection<synchronizationJob>;
	jobs(id: string | number): IBaseQuery<synchronizationJob> & synchronizationJobMethods;
	templates(): IBaseCollection<synchronizationTemplate>;
	templates(id: string | number): IBaseQuery<synchronizationTemplate> & synchronizationTemplateMethods;
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
	workflows(): IBaseCollection<workflow>;
	workflows(id: string | number): IBaseQuery<workflow> & workflowMethods;
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
	sets(): IBaseCollection<set>;
	sets(id: string | number): IBaseQuery<set> & setMethods;
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
	calendarPermissions(): IBaseCollection<calendarPermission>;
	calendarPermissions(id: string | number): IBaseQuery<calendarPermission> & calendarPermissionMethods;
	calendarView(): IBaseCollection<event>;
	calendarView(id: string | number): IBaseQuery<event> & eventMethods;
	events(): IBaseCollection<event>;
	events(id: string | number): IBaseQuery<event> & eventMethods;
	multiValueExtendedProperties(): IBaseCollection<multiValueLegacyExtendedProperty>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	singleValueExtendedProperties(): IBaseCollection<singleValueLegacyExtendedProperty>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
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
	attachments(): IBaseCollection<attachment>;
	attachments(id: string | number): IBaseQuery<attachment> & attachmentMethods;
	calendar(): IBaseQuery<calendar> & calendarMethods;
	extensions(): IBaseCollection<extension>;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	instances(): IBaseCollection<event>;
	instances(id: string | number): IBaseQuery<event> & eventMethods;
	multiValueExtendedProperties(): IBaseCollection<multiValueLegacyExtendedProperty>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	singleValueExtendedProperties(): IBaseCollection<singleValueLegacyExtendedProperty>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
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
	threads(): IBaseCollection<conversationThread>;
	threads(id: string | number): IBaseQuery<conversationThread> & conversationThreadMethods;
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
	posts(): IBaseCollection<post>;
	posts(id: string | number): IBaseQuery<post> & postMethods;
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
	createdByUser(): IBaseQuery<user> & userMethods;
	lastModifiedByUser(): IBaseQuery<user> & userMethods;
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
	bundles(): IBaseCollection<driveItem>;
	bundles(id: string | number): IBaseQuery<driveItem> & driveItemMethods;
	following(): IBaseCollection<driveItem>;
	following(id: string | number): IBaseQuery<driveItem> & driveItemMethods;
	items(): IBaseCollection<driveItem>;
	items(id: string | number): IBaseQuery<driveItem> & driveItemMethods;
	list(): IBaseQuery<list> & listMethods;
	root(): IBaseQuery<driveItem> & driveItemMethods;
	special(): IBaseCollection<driveItem>;
	special(id: string | number): IBaseQuery<driveItem> & driveItemMethods;
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
	analytics(): IBaseQuery<itemAnalytics> & itemAnalyticsMethods;
	columns(): IBaseCollection<columnDefinition>;
	columns(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	contentTypes(): IBaseCollection<contentType>;
	contentTypes(id: string | number): IBaseQuery<contentType> & contentTypeMethods;
	drive(): IBaseQuery<drive> & driveMethods;
	drives(): IBaseCollection<drive>;
	drives(id: string | number): IBaseQuery<drive> & driveMethods;
	externalColumns(): IBaseCollection<columnDefinition>;
	externalColumns(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	items(): IBaseCollection<baseItem>;
	items(id: string | number): IBaseQuery<baseItem> & baseItemMethods;
	lists(): IBaseCollection<list>;
	lists(id: string | number): IBaseQuery<list> & listMethods;
	operations(): IBaseCollection<richLongRunningOperation>;
	operations(id: string | number): IBaseQuery<richLongRunningOperation> & richLongRunningOperationMethods;
	pages(): IBaseCollection<baseSitePage>;
	pages(id: string | number): IBaseQuery<baseSitePage> & baseSitePageMethods;
	permissions(): IBaseCollection<permission>;
	permissions(id: string | number): IBaseQuery<permission> & permissionMethods;
	sites(): IBaseCollection<site>;
	sites(id: string | number): IBaseQuery<site> & siteMethods;
	termStore(): IBaseQuery<store> & storeMethods;
	termStores(): IBaseCollection<store>;
	termStores(id: string | number): IBaseQuery<store> & storeMethods;
	onenote(): IBaseQuery<onenote> & onenoteMethods;
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
	plans(): IBaseCollection<plannerPlan>;
	plans(id: string | number): IBaseQuery<plannerPlan> & plannerPlanMethods;
}
/*********************************************
* onenote
**********************************************/
export interface onenote extends onenoteProps, onenoteMethods , entity { }
export interface onenoteProps {

}
export interface onenoteMethods {
	notebooks(): IBaseCollection<notebook>;
	notebooks(id: string | number): IBaseQuery<notebook> & notebookMethods;
	operations(): IBaseCollection<onenoteOperation>;
	operations(id: string | number): IBaseQuery<onenoteOperation> & onenoteOperationMethods;
	pages(): IBaseCollection<onenotePage>;
	pages(id: string | number): IBaseQuery<onenotePage> & onenotePageMethods;
	resources(): IBaseCollection<onenoteResource>;
	resources(id: string | number): IBaseQuery<onenoteResource> & onenoteResourceMethods;
	sectionGroups(): IBaseCollection<sectionGroup>;
	sectionGroups(id: string | number): IBaseQuery<sectionGroup> & sectionGroupMethods;
	sections(): IBaseCollection<onenoteSection>;
	sections(id: string | number): IBaseQuery<onenoteSection> & onenoteSectionMethods;
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
	allChannels(): IBaseCollection<channel>;
	allChannels(id: string | number): IBaseQuery<channel> & channelMethods;
	channels(): IBaseCollection<channel>;
	channels(id: string | number): IBaseQuery<channel> & channelMethods;
	group(): IBaseQuery<group> & groupMethods;
	incomingChannels(): IBaseCollection<channel>;
	incomingChannels(id: string | number): IBaseQuery<channel> & channelMethods;
	installedApps(): IBaseCollection<teamsAppInstallation>;
	installedApps(id: string | number): IBaseQuery<teamsAppInstallation> & teamsAppInstallationMethods;
	members(): IBaseCollection<conversationMember>;
	members(id: string | number): IBaseQuery<conversationMember> & conversationMemberMethods;
	operations(): IBaseCollection<teamsAsyncOperation>;
	operations(id: string | number): IBaseQuery<teamsAsyncOperation> & teamsAsyncOperationMethods;
	permissionGrants(): IBaseCollection<resourceSpecificPermissionGrant>;
	permissionGrants(id: string | number): IBaseQuery<resourceSpecificPermissionGrant> & resourceSpecificPermissionGrantMethods;
	photo(): IBaseQuery<profilePhoto> & profilePhotoMethods;
	primaryChannel(): IBaseQuery<channel> & channelMethods;
	tags(): IBaseCollection<teamworkTag>;
	tags(id: string | number): IBaseQuery<teamworkTag> & teamworkTagMethods;
	template(): IBaseQuery<teamsTemplate> & teamsTemplateMethods;
	schedule(): IBaseQuery<schedule> & scheduleMethods;
}
/*********************************************
* identityGovernance
**********************************************/
export interface identityGovernance extends identityGovernanceProps, identityGovernanceMethods  { }
export interface identityGovernanceProps {

}
export interface identityGovernanceMethods {
	lifecycleWorkflows(): IBaseQuery<lifecycleWorkflowsContainer> & lifecycleWorkflowsContainerMethods;
	accessReviews(): IBaseQuery<accessReviewSet> & accessReviewSetMethods;
	appConsent(): IBaseQuery<appConsentApprovalRoute> & appConsentApprovalRouteMethods;
	termsOfUse(): IBaseQuery<termsOfUseContainer> & termsOfUseContainerMethods;
	entitlementManagement(): IBaseQuery<entitlementManagement> & entitlementManagementMethods;
	privilegedAccess(): IBaseQuery<privilegedAccessRoot> & privilegedAccessRootMethods;
}
/*********************************************
* accessReviewSet
**********************************************/
export interface accessReviewSet extends accessReviewSetProps, accessReviewSetMethods , entity { }
export interface accessReviewSetProps {

}
export interface accessReviewSetMethods {
	definitions(): IBaseCollection<accessReviewScheduleDefinition>;
	definitions(id: string | number): IBaseQuery<accessReviewScheduleDefinition> & accessReviewScheduleDefinitionMethods;
	historyDefinitions(): IBaseCollection<accessReviewHistoryDefinition>;
	historyDefinitions(id: string | number): IBaseQuery<accessReviewHistoryDefinition> & accessReviewHistoryDefinitionMethods;
}
/*********************************************
* appConsentApprovalRoute
**********************************************/
export interface appConsentApprovalRoute extends appConsentApprovalRouteProps, appConsentApprovalRouteMethods , entity { }
export interface appConsentApprovalRouteProps {

}
export interface appConsentApprovalRouteMethods {
	appConsentRequests(): IBaseCollection<appConsentRequest>;
	appConsentRequests(id: string | number): IBaseQuery<appConsentRequest> & appConsentRequestMethods;
}
/*********************************************
* termsOfUseContainer
**********************************************/
export interface termsOfUseContainer extends termsOfUseContainerProps, termsOfUseContainerMethods , entity { }
export interface termsOfUseContainerProps {

}
export interface termsOfUseContainerMethods {
	agreementAcceptances(): IBaseCollection<agreementAcceptance>;
	agreementAcceptances(id: string | number): IBaseQuery<agreementAcceptance> & agreementAcceptanceMethods;
	agreements(): IBaseCollection<agreement>;
	agreements(id: string | number): IBaseQuery<agreement> & agreementMethods;
}
/*********************************************
* entitlementManagement
**********************************************/
export interface entitlementManagement extends entitlementManagementProps, entitlementManagementMethods , entity { }
export interface entitlementManagementProps {

}
export interface entitlementManagementMethods {
	accessPackageAssignmentApprovals(): IBaseCollection<approval>;
	accessPackageAssignmentApprovals(id: string | number): IBaseQuery<approval> & approvalMethods;
	accessPackages(): IBaseCollection<accessPackage>;
	accessPackages(id: string | number): IBaseQuery<accessPackage> & accessPackageMethods;
	assignmentPolicies(): IBaseCollection<accessPackageAssignmentPolicy>;
	assignmentPolicies(id: string | number): IBaseQuery<accessPackageAssignmentPolicy> & accessPackageAssignmentPolicyMethods;
	assignmentRequests(): IBaseCollection<accessPackageAssignmentRequest>;
	assignmentRequests(id: string | number): IBaseQuery<accessPackageAssignmentRequest> & accessPackageAssignmentRequestMethods;
	assignments(): IBaseCollection<accessPackageAssignment>;
	assignments(id: string | number): IBaseQuery<accessPackageAssignment> & accessPackageAssignmentMethods;
	catalogs(): IBaseCollection<accessPackageCatalog>;
	catalogs(id: string | number): IBaseQuery<accessPackageCatalog> & accessPackageCatalogMethods;
	connectedOrganizations(): IBaseCollection<connectedOrganization>;
	connectedOrganizations(id: string | number): IBaseQuery<connectedOrganization> & connectedOrganizationMethods;
	resourceEnvironments(): IBaseCollection<accessPackageResourceEnvironment>;
	resourceEnvironments(id: string | number): IBaseQuery<accessPackageResourceEnvironment> & accessPackageResourceEnvironmentMethods;
	resourceRequests(): IBaseCollection<accessPackageResourceRequest>;
	resourceRequests(id: string | number): IBaseQuery<accessPackageResourceRequest> & accessPackageResourceRequestMethods;
	resourceRoleScopes(): IBaseCollection<accessPackageResourceRoleScope>;
	resourceRoleScopes(id: string | number): IBaseQuery<accessPackageResourceRoleScope> & accessPackageResourceRoleScopeMethods;
	resources(): IBaseCollection<accessPackageResource>;
	resources(id: string | number): IBaseQuery<accessPackageResource> & accessPackageResourceMethods;
	settings(): IBaseQuery<entitlementManagementSettings> & entitlementManagementSettingsMethods;
}
/*********************************************
* privilegedAccessRoot
**********************************************/
export interface privilegedAccessRoot extends privilegedAccessRootProps, privilegedAccessRootMethods , entity { }
export interface privilegedAccessRootProps {

}
export interface privilegedAccessRootMethods {
	group(): IBaseQuery<privilegedAccessGroup> & privilegedAccessGroupMethods;
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
	appRoleAssignments(): IBaseCollection<appRoleAssignment>;
	appRoleAssignments(id: string | number): IBaseQuery<appRoleAssignment> & appRoleAssignmentMethods;
	createdObjects(): IBaseCollection<directoryObject>;
	createdObjects(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	directReports(): IBaseCollection<directoryObject>;
	directReports(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	licenseDetails(): IBaseCollection<licenseDetails>;
	licenseDetails(id: string | number): IBaseQuery<licenseDetails> & licenseDetailsMethods;
	manager(): IBaseQuery<directoryObject> & directoryObjectMethods;
	memberOf(): IBaseCollection<directoryObject>;
	memberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	oauth2PermissionGrants(): IBaseCollection<oAuth2PermissionGrant>;
	oauth2PermissionGrants(id: string | number): IBaseQuery<oAuth2PermissionGrant> & oAuth2PermissionGrantMethods;
	ownedDevices(): IBaseCollection<directoryObject>;
	ownedDevices(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	ownedObjects(): IBaseCollection<directoryObject>;
	ownedObjects(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	registeredDevices(): IBaseCollection<directoryObject>;
	registeredDevices(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	scopedRoleMemberOf(): IBaseCollection<scopedRoleMembership>;
	scopedRoleMemberOf(id: string | number): IBaseQuery<scopedRoleMembership> & scopedRoleMembershipMethods;
	sponsors(): IBaseCollection<directoryObject>;
	sponsors(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	transitiveMemberOf(): IBaseCollection<directoryObject>;
	transitiveMemberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	calendar(): IBaseQuery<calendar> & calendarMethods;
	calendarGroups(): IBaseCollection<calendarGroup>;
	calendarGroups(id: string | number): IBaseQuery<calendarGroup> & calendarGroupMethods;
	calendars(): IBaseCollection<calendar>;
	calendars(id: string | number): IBaseQuery<calendar> & calendarMethods;
	calendarView(): IBaseCollection<event>;
	calendarView(id: string | number): IBaseQuery<event> & eventMethods;
	contactFolders(): IBaseCollection<contactFolder>;
	contactFolders(id: string | number): IBaseQuery<contactFolder> & contactFolderMethods;
	contacts(): IBaseCollection<contact>;
	contacts(id: string | number): IBaseQuery<contact> & contactMethods;
	events(): IBaseCollection<event>;
	events(id: string | number): IBaseQuery<event> & eventMethods;
	inferenceClassification(): IBaseQuery<inferenceClassification> & inferenceClassificationMethods;
	mailFolders(): IBaseCollection<mailFolder>;
	mailFolders(id: string | number): IBaseQuery<mailFolder> & mailFolderMethods;
	messages(): IBaseCollection<message>;
	messages(id: string | number): IBaseQuery<message> & messageMethods;
	outlook(): IBaseQuery<outlookUser> & outlookUserMethods;
	people(): IBaseCollection<person>;
	people(id: string | number): IBaseQuery<person> & personMethods;
	drive(): IBaseQuery<drive> & driveMethods;
	drives(): IBaseCollection<drive>;
	drives(id: string | number): IBaseQuery<drive> & driveMethods;
	followedSites(): IBaseCollection<site>;
	followedSites(id: string | number): IBaseQuery<site> & siteMethods;
	extensions(): IBaseCollection<extension>;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	agreementAcceptances(): IBaseCollection<agreementAcceptance>;
	agreementAcceptances(id: string | number): IBaseQuery<agreementAcceptance> & agreementAcceptanceMethods;
	managedDevices(): IBaseCollection<managedDevice>;
	managedDevices(id: string | number): IBaseQuery<managedDevice> & managedDeviceMethods;
	managedAppRegistrations(): IBaseCollection<managedAppRegistration>;
	managedAppRegistrations(id: string | number): IBaseQuery<managedAppRegistration> & managedAppRegistrationMethods;
	deviceManagementTroubleshootingEvents(): IBaseCollection<deviceManagementTroubleshootingEvent>;
	deviceManagementTroubleshootingEvents(id: string | number): IBaseQuery<deviceManagementTroubleshootingEvent> & deviceManagementTroubleshootingEventMethods;
	planner(): IBaseQuery<plannerUser> & plannerUserMethods;
	insights(): IBaseQuery<itemInsights> & itemInsightsMethods;
	settings(): IBaseQuery<userSettings> & userSettingsMethods;
	onenote(): IBaseQuery<onenote> & onenoteMethods;
	cloudClipboard(): IBaseQuery<cloudClipboardRoot> & cloudClipboardRootMethods;
	photo(): IBaseQuery<profilePhoto> & profilePhotoMethods;
	photos(): IBaseCollection<profilePhoto>;
	photos(id: string | number): IBaseQuery<profilePhoto> & profilePhotoMethods;
	activities(): IBaseCollection<userActivity>;
	activities(id: string | number): IBaseQuery<userActivity> & userActivityMethods;
	onlineMeetings(): IBaseCollection<onlineMeeting>;
	onlineMeetings(id: string | number): IBaseQuery<onlineMeeting> & onlineMeetingMethods;
	presence(): IBaseQuery<presence> & presenceMethods;
	authentication(): IBaseQuery<authentication> & authenticationMethods;
	chats(): IBaseCollection<chat>;
	chats(id: string | number): IBaseQuery<chat> & chatMethods;
	joinedTeams(): IBaseCollection<team>;
	joinedTeams(id: string | number): IBaseQuery<team> & teamMethods;
	permissionGrants(): IBaseCollection<resourceSpecificPermissionGrant>;
	permissionGrants(id: string | number): IBaseQuery<resourceSpecificPermissionGrant> & resourceSpecificPermissionGrantMethods;
	teamwork(): IBaseQuery<userTeamwork> & userTeamworkMethods;
	solutions(): IBaseQuery<userSolutionRoot> & userSolutionRootMethods;
	todo(): IBaseQuery<todo> & todoMethods;
	employeeExperience(): IBaseQuery<employeeExperienceUser> & employeeExperienceUserMethods;
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
	calendars(): IBaseCollection<calendar>;
	calendars(id: string | number): IBaseQuery<calendar> & calendarMethods;
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
	childFolders(): IBaseCollection<contactFolder>;
	childFolders(id: string | number): IBaseQuery<contactFolder> & contactFolderMethods;
	contacts(): IBaseCollection<contact>;
	contacts(id: string | number): IBaseQuery<contact> & contactMethods;
	multiValueExtendedProperties(): IBaseCollection<multiValueLegacyExtendedProperty>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	singleValueExtendedProperties(): IBaseCollection<singleValueLegacyExtendedProperty>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
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
	extensions(): IBaseCollection<extension>;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	multiValueExtendedProperties(): IBaseCollection<multiValueLegacyExtendedProperty>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	photo(): IBaseQuery<profilePhoto> & profilePhotoMethods;
	singleValueExtendedProperties(): IBaseCollection<singleValueLegacyExtendedProperty>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
}
/*********************************************
* inferenceClassification
**********************************************/
export interface inferenceClassification extends inferenceClassificationProps, inferenceClassificationMethods , entity { }
export interface inferenceClassificationProps {

}
export interface inferenceClassificationMethods {
	overrides(): IBaseCollection<inferenceClassificationOverride>;
	overrides(id: string | number): IBaseQuery<inferenceClassificationOverride> & inferenceClassificationOverrideMethods;
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
	childFolders(): IBaseCollection<mailFolder>;
	childFolders(id: string | number): IBaseQuery<mailFolder> & mailFolderMethods;
	messageRules(): IBaseCollection<messageRule>;
	messageRules(id: string | number): IBaseQuery<messageRule> & messageRuleMethods;
	messages(): IBaseCollection<message>;
	messages(id: string | number): IBaseQuery<message> & messageMethods;
	multiValueExtendedProperties(): IBaseCollection<multiValueLegacyExtendedProperty>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	singleValueExtendedProperties(): IBaseCollection<singleValueLegacyExtendedProperty>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
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
	attachments(): IBaseCollection<attachment>;
	attachments(id: string | number): IBaseQuery<attachment> & attachmentMethods;
	extensions(): IBaseCollection<extension>;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	multiValueExtendedProperties(): IBaseCollection<multiValueLegacyExtendedProperty>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	singleValueExtendedProperties(): IBaseCollection<singleValueLegacyExtendedProperty>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
}
/*********************************************
* outlookUser
**********************************************/
export interface outlookUser extends outlookUserProps, outlookUserMethods , entity { }
export interface outlookUserProps {

}
export interface outlookUserMethods {
	masterCategories(): IBaseCollection<outlookCategory>;
	masterCategories(id: string | number): IBaseQuery<outlookCategory> & outlookCategoryMethods;
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
	deviceCompliancePolicyStates(): IBaseCollection<deviceCompliancePolicyState>;
	deviceCompliancePolicyStates(id: string | number): IBaseQuery<deviceCompliancePolicyState> & deviceCompliancePolicyStateMethods;
	deviceConfigurationStates(): IBaseCollection<deviceConfigurationState>;
	deviceConfigurationStates(id: string | number): IBaseQuery<deviceConfigurationState> & deviceConfigurationStateMethods;
	deviceCategory(): IBaseQuery<deviceCategory> & deviceCategoryMethods;
	logCollectionRequests(): IBaseCollection<deviceLogCollectionResponse>;
	logCollectionRequests(id: string | number): IBaseQuery<deviceLogCollectionResponse> & deviceLogCollectionResponseMethods;
	users(): IBaseCollection<user>;
	users(id: string | number): IBaseQuery<user> & userMethods;
	windowsProtectionState(): IBaseQuery<windowsProtectionState> & windowsProtectionStateMethods;
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
	appliedPolicies(): IBaseCollection<managedAppPolicy>;
	appliedPolicies(id: string | number): IBaseQuery<managedAppPolicy> & managedAppPolicyMethods;
	intendedPolicies(): IBaseCollection<managedAppPolicy>;
	intendedPolicies(id: string | number): IBaseQuery<managedAppPolicy> & managedAppPolicyMethods;
	operations(): IBaseCollection<managedAppOperation>;
	operations(id: string | number): IBaseQuery<managedAppOperation> & managedAppOperationMethods;
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
	plans(): IBaseCollection<plannerPlan>;
	plans(id: string | number): IBaseQuery<plannerPlan> & plannerPlanMethods;
	tasks(): IBaseCollection<plannerTask>;
	tasks(id: string | number): IBaseQuery<plannerTask> & plannerTaskMethods;
}
/*********************************************
* officeGraphInsights
**********************************************/
export interface officeGraphInsights extends officeGraphInsightsProps, officeGraphInsightsMethods , entity { }
export interface officeGraphInsightsProps {

}
export interface officeGraphInsightsMethods {
	shared(): IBaseCollection<sharedInsight>;
	shared(id: string | number): IBaseQuery<sharedInsight> & sharedInsightMethods;
	trending(): IBaseCollection<trending>;
	trending(id: string | number): IBaseQuery<trending> & trendingMethods;
	used(): IBaseCollection<usedInsight>;
	used(id: string | number): IBaseQuery<usedInsight> & usedInsightMethods;
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
	itemInsights(): IBaseQuery<userInsightsSettings> & userInsightsSettingsMethods;
	windows(): IBaseCollection<windowsSetting>;
	windows(id: string | number): IBaseQuery<windowsSetting> & windowsSettingMethods;
	shiftPreferences(): IBaseQuery<shiftPreferences> & shiftPreferencesMethods;
	storage(): IBaseQuery<userStorage> & userStorageMethods;
}
/*********************************************
* cloudClipboardRoot
**********************************************/
export interface cloudClipboardRoot extends cloudClipboardRootProps, cloudClipboardRootMethods , entity { }
export interface cloudClipboardRootProps {

}
export interface cloudClipboardRootMethods {
	items(): IBaseCollection<cloudClipboardItem>;
	items(id: string | number): IBaseQuery<cloudClipboardItem> & cloudClipboardItemMethods;
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
	historyItems(): IBaseCollection<activityHistoryItem>;
	historyItems(id: string | number): IBaseQuery<activityHistoryItem> & activityHistoryItemMethods;
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
	attendanceReports(): IBaseCollection<meetingAttendanceReport>;
	attendanceReports(id: string | number): IBaseQuery<meetingAttendanceReport> & meetingAttendanceReportMethods;
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
	recordings(): IBaseCollection<callRecording>;
	recordings(id: string | number): IBaseQuery<callRecording> & callRecordingMethods;
	transcripts(): IBaseCollection<callTranscript>;
	transcripts(id: string | number): IBaseQuery<callTranscript> & callTranscriptMethods;
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
	emailMethods(): IBaseCollection<emailAuthenticationMethod>;
	emailMethods(id: string | number): IBaseQuery<emailAuthenticationMethod> & emailAuthenticationMethodMethods;
	fido2Methods(): IBaseCollection<fido2AuthenticationMethod>;
	fido2Methods(id: string | number): IBaseQuery<fido2AuthenticationMethod> & fido2AuthenticationMethodMethods;
	methods(): IBaseCollection<authenticationMethod>;
	methods(id: string | number): IBaseQuery<authenticationMethod> & authenticationMethodMethods;
	microsoftAuthenticatorMethods(): IBaseCollection<microsoftAuthenticatorAuthenticationMethod>;
	microsoftAuthenticatorMethods(id: string | number): IBaseQuery<microsoftAuthenticatorAuthenticationMethod> & microsoftAuthenticatorAuthenticationMethodMethods;
	operations(): IBaseCollection<longRunningOperation>;
	operations(id: string | number): IBaseQuery<longRunningOperation> & longRunningOperationMethods;
	passwordMethods(): IBaseCollection<passwordAuthenticationMethod>;
	passwordMethods(id: string | number): IBaseQuery<passwordAuthenticationMethod> & passwordAuthenticationMethodMethods;
	phoneMethods(): IBaseCollection<phoneAuthenticationMethod>;
	phoneMethods(id: string | number): IBaseQuery<phoneAuthenticationMethod> & phoneAuthenticationMethodMethods;
	softwareOathMethods(): IBaseCollection<softwareOathAuthenticationMethod>;
	softwareOathMethods(id: string | number): IBaseQuery<softwareOathAuthenticationMethod> & softwareOathAuthenticationMethodMethods;
	temporaryAccessPassMethods(): IBaseCollection<temporaryAccessPassAuthenticationMethod>;
	temporaryAccessPassMethods(id: string | number): IBaseQuery<temporaryAccessPassAuthenticationMethod> & temporaryAccessPassAuthenticationMethodMethods;
	windowsHelloForBusinessMethods(): IBaseCollection<windowsHelloForBusinessAuthenticationMethod>;
	windowsHelloForBusinessMethods(id: string | number): IBaseQuery<windowsHelloForBusinessAuthenticationMethod> & windowsHelloForBusinessAuthenticationMethodMethods;
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
	installedApps(): IBaseCollection<teamsAppInstallation>;
	installedApps(id: string | number): IBaseQuery<teamsAppInstallation> & teamsAppInstallationMethods;
	lastMessagePreview(): IBaseQuery<chatMessageInfo> & chatMessageInfoMethods;
	members(): IBaseCollection<conversationMember>;
	members(id: string | number): IBaseQuery<conversationMember> & conversationMemberMethods;
	messages(): IBaseCollection<chatMessage>;
	messages(id: string | number): IBaseQuery<chatMessage> & chatMessageMethods;
	permissionGrants(): IBaseCollection<resourceSpecificPermissionGrant>;
	permissionGrants(id: string | number): IBaseQuery<resourceSpecificPermissionGrant> & resourceSpecificPermissionGrantMethods;
	pinnedMessages(): IBaseCollection<pinnedChatMessageInfo>;
	pinnedMessages(id: string | number): IBaseQuery<pinnedChatMessageInfo> & pinnedChatMessageInfoMethods;
	tabs(): IBaseCollection<teamsTab>;
	tabs(id: string | number): IBaseQuery<teamsTab> & teamsTabMethods;
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
	associatedTeams(): IBaseCollection<associatedTeamInfo>;
	associatedTeams(id: string | number): IBaseQuery<associatedTeamInfo> & associatedTeamInfoMethods;
	installedApps(): IBaseCollection<userScopeTeamsAppInstallation>;
	installedApps(id: string | number): IBaseQuery<userScopeTeamsAppInstallation> & userScopeTeamsAppInstallationMethods;
}
/*********************************************
* userSolutionRoot
**********************************************/
export interface userSolutionRoot extends userSolutionRootProps, userSolutionRootMethods , entity { }
export interface userSolutionRootProps {

}
export interface userSolutionRootMethods {
	workingTimeSchedule(): IBaseQuery<workingTimeSchedule> & workingTimeScheduleMethods;
}
/*********************************************
* todo
**********************************************/
export interface todo extends todoProps, todoMethods , entity { }
export interface todoProps {

}
export interface todoMethods {
	lists(): IBaseCollection<todoTaskList>;
	lists(id: string | number): IBaseQuery<todoTaskList> & todoTaskListMethods;
}
/*********************************************
* employeeExperienceUser
**********************************************/
export interface employeeExperienceUser extends employeeExperienceUserProps, employeeExperienceUserMethods , entity { }
export interface employeeExperienceUserProps {

}
export interface employeeExperienceUserMethods {
	learningCourseActivities(): IBaseCollection<learningCourseActivity>;
	learningCourseActivities(id: string | number): IBaseQuery<learningCourseActivity> & learningCourseActivityMethods;
}
/*********************************************
* auditLogRoot
**********************************************/
export interface auditLogRoot extends auditLogRootProps, auditLogRootMethods  { }
export interface auditLogRootProps {

}
export interface auditLogRootMethods {
	directoryAudits(): IBaseCollection<directoryAudit>;
	directoryAudits(id: string | number): IBaseQuery<directoryAudit> & directoryAuditMethods;
	provisioning(): IBaseCollection<provisioningObjectSummary>;
	provisioning(id: string | number): IBaseQuery<provisioningObjectSummary> & provisioningObjectSummaryMethods;
	signIns(): IBaseCollection<signIn>;
	signIns(id: string | number): IBaseQuery<signIn> & signInMethods;
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
	userRegistrationDetails(): IBaseCollection<userRegistrationDetails>;
	userRegistrationDetails(id: string | number): IBaseQuery<userRegistrationDetails> & userRegistrationDetailsMethods;
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
	container(): IBaseQuery<directoryObject> & directoryObjectMethods;
	lastModifiedBy(): IBaseQuery<user> & userMethods;
	member(): IBaseQuery<directoryObject> & directoryObjectMethods;
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
	authenticationMethods(): IBaseQuery<authenticationMethodsRoot> & authenticationMethodsRootMethods;
	partners(): IBaseQuery<partners> & partnersMethods;
	dailyPrintUsageByPrinter(): IBaseCollection<printUsageByPrinter>;
	dailyPrintUsageByPrinter(id: string | number): IBaseQuery<printUsageByPrinter> & printUsageByPrinterMethods;
	dailyPrintUsageByUser(): IBaseCollection<printUsageByUser>;
	dailyPrintUsageByUser(id: string | number): IBaseQuery<printUsageByUser> & printUsageByUserMethods;
	monthlyPrintUsageByPrinter(): IBaseCollection<printUsageByPrinter>;
	monthlyPrintUsageByPrinter(id: string | number): IBaseQuery<printUsageByPrinter> & printUsageByPrinterMethods;
	monthlyPrintUsageByUser(): IBaseCollection<printUsageByUser>;
	monthlyPrintUsageByUser(id: string | number): IBaseQuery<printUsageByUser> & printUsageByUserMethods;
	security(): IBaseQuery<securityReportsRoot> & securityReportsRootMethods;
}
/*********************************************
* partners
**********************************************/
export interface partners extends partnersProps, partnersMethods , entity { }
export interface partnersProps {

}
export interface partnersMethods {
	billing(): IBaseQuery<billing> & billingMethods;
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
	invitedUser(): IBaseQuery<user> & userMethods;
	invitedUserSponsors(): IBaseCollection<directoryObject>;
	invitedUserSponsors(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
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
	appManagementPolicies(): IBaseCollection<appManagementPolicy>;
	appManagementPolicies(id: string | number): IBaseQuery<appManagementPolicy> & appManagementPolicyMethods;
	appRoleAssignedTo(): IBaseCollection<appRoleAssignment>;
	appRoleAssignedTo(id: string | number): IBaseQuery<appRoleAssignment> & appRoleAssignmentMethods;
	appRoleAssignments(): IBaseCollection<appRoleAssignment>;
	appRoleAssignments(id: string | number): IBaseQuery<appRoleAssignment> & appRoleAssignmentMethods;
	claimsMappingPolicies(): IBaseCollection<claimsMappingPolicy>;
	claimsMappingPolicies(id: string | number): IBaseQuery<claimsMappingPolicy> & claimsMappingPolicyMethods;
	createdObjects(): IBaseCollection<directoryObject>;
	createdObjects(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	delegatedPermissionClassifications(): IBaseCollection<delegatedPermissionClassification>;
	delegatedPermissionClassifications(id: string | number): IBaseQuery<delegatedPermissionClassification> & delegatedPermissionClassificationMethods;
	endpoints(): IBaseCollection<ComplexTypes.endpoint>;
	endpoints(id: string | number): IBaseQuery<ComplexTypes.endpoint>;
	federatedIdentityCredentials(): IBaseCollection<federatedIdentityCredential>;
	federatedIdentityCredentials(id: string | number): IBaseQuery<federatedIdentityCredential> & federatedIdentityCredentialMethods;
	homeRealmDiscoveryPolicies(): IBaseCollection<homeRealmDiscoveryPolicy>;
	homeRealmDiscoveryPolicies(id: string | number): IBaseQuery<homeRealmDiscoveryPolicy> & homeRealmDiscoveryPolicyMethods;
	memberOf(): IBaseCollection<directoryObject>;
	memberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	oauth2PermissionGrants(): IBaseCollection<oAuth2PermissionGrant>;
	oauth2PermissionGrants(id: string | number): IBaseQuery<oAuth2PermissionGrant> & oAuth2PermissionGrantMethods;
	ownedObjects(): IBaseCollection<directoryObject>;
	ownedObjects(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	owners(): IBaseCollection<directoryObject>;
	owners(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	remoteDesktopSecurityConfiguration(): IBaseQuery<remoteDesktopSecurityConfiguration> & remoteDesktopSecurityConfigurationMethods;
	tokenIssuancePolicies(): IBaseCollection<tokenIssuancePolicy>;
	tokenIssuancePolicies(id: string | number): IBaseQuery<tokenIssuancePolicy> & tokenIssuancePolicyMethods;
	tokenLifetimePolicies(): IBaseCollection<tokenLifetimePolicy>;
	tokenLifetimePolicies(id: string | number): IBaseQuery<tokenLifetimePolicy> & tokenLifetimePolicyMethods;
	transitiveMemberOf(): IBaseCollection<directoryObject>;
	transitiveMemberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	synchronization(): IBaseQuery<synchronization> & synchronizationMethods;
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
	targetDeviceGroups(): IBaseCollection<targetDeviceGroup>;
	targetDeviceGroups(id: string | number): IBaseQuery<targetDeviceGroup> & targetDeviceGroupMethods;
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
	authenticationMethodConfigurations(): IBaseCollection<authenticationMethodConfiguration>;
	authenticationMethodConfigurations(id: string | number): IBaseQuery<authenticationMethodConfiguration> & authenticationMethodConfigurationMethods;
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
	combinationConfigurations(): IBaseCollection<authenticationCombinationConfiguration>;
	combinationConfigurations(id: string | number): IBaseQuery<authenticationCombinationConfiguration> & authenticationCombinationConfigurationMethods;
}
/*********************************************
* authenticationStrengthRoot
**********************************************/
export interface authenticationStrengthRoot extends authenticationStrengthRootProps, authenticationStrengthRootMethods , entity { }
export interface authenticationStrengthRootProps {
	combinations: EnumTypes.authenticationMethodModes[];
}
export interface authenticationStrengthRootMethods {
	authenticationMethodModes(): IBaseCollection<authenticationMethodModeDetail>;
	authenticationMethodModes(id: string | number): IBaseQuery<authenticationMethodModeDetail> & authenticationMethodModeDetailMethods;
	policies(): IBaseCollection<authenticationStrengthPolicy>;
	policies(id: string | number): IBaseQuery<authenticationStrengthPolicy> & authenticationStrengthPolicyMethods;
}
/*********************************************
* conditionalAccessRoot
**********************************************/
export interface conditionalAccessRoot extends conditionalAccessRootProps, conditionalAccessRootMethods , entity { }
export interface conditionalAccessRootProps {

}
export interface conditionalAccessRootMethods {
	authenticationStrength(): IBaseQuery<authenticationStrengthRoot> & authenticationStrengthRootMethods;
	authenticationContextClassReferences(): IBaseCollection<authenticationContextClassReference>;
	authenticationContextClassReferences(id: string | number): IBaseQuery<authenticationContextClassReference> & authenticationContextClassReferenceMethods;
	namedLocations(): IBaseCollection<namedLocation>;
	namedLocations(id: string | number): IBaseQuery<namedLocation> & namedLocationMethods;
	policies(): IBaseCollection<conditionalAccessPolicy>;
	policies(id: string | number): IBaseQuery<conditionalAccessPolicy> & conditionalAccessPolicyMethods;
	templates(): IBaseCollection<conditionalAccessTemplate>;
	templates(id: string | number): IBaseQuery<conditionalAccessTemplate> & conditionalAccessTemplateMethods;
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
	includeTargets(): IBaseCollection<authenticationMethodTarget>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget> & authenticationMethodTargetMethods;
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
	includeTargets(): IBaseCollection<authenticationMethodTarget>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget> & authenticationMethodTargetMethods;
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
	includeTargets(): IBaseCollection<microsoftAuthenticatorAuthenticationMethodTarget>;
	includeTargets(id: string | number): IBaseQuery<microsoftAuthenticatorAuthenticationMethodTarget> & microsoftAuthenticatorAuthenticationMethodTargetMethods;
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
	authenticationMethodsPolicy(): IBaseQuery<authenticationMethodsPolicy> & authenticationMethodsPolicyMethods;
	authenticationStrengthPolicies(): IBaseCollection<authenticationStrengthPolicy>;
	authenticationStrengthPolicies(id: string | number): IBaseQuery<authenticationStrengthPolicy> & authenticationStrengthPolicyMethods;
	authenticationFlowsPolicy(): IBaseQuery<authenticationFlowsPolicy> & authenticationFlowsPolicyMethods;
	deviceRegistrationPolicy(): IBaseQuery<deviceRegistrationPolicy> & deviceRegistrationPolicyMethods;
	activityBasedTimeoutPolicies(): IBaseCollection<activityBasedTimeoutPolicy>;
	activityBasedTimeoutPolicies(id: string | number): IBaseQuery<activityBasedTimeoutPolicy> & activityBasedTimeoutPolicyMethods;
	appManagementPolicies(): IBaseCollection<appManagementPolicy>;
	appManagementPolicies(id: string | number): IBaseQuery<appManagementPolicy> & appManagementPolicyMethods;
	authorizationPolicy(): IBaseQuery<authorizationPolicy> & authorizationPolicyMethods;
	claimsMappingPolicies(): IBaseCollection<claimsMappingPolicy>;
	claimsMappingPolicies(id: string | number): IBaseQuery<claimsMappingPolicy> & claimsMappingPolicyMethods;
	crossTenantAccessPolicy(): IBaseQuery<crossTenantAccessPolicy> & crossTenantAccessPolicyMethods;
	defaultAppManagementPolicy(): IBaseQuery<tenantAppManagementPolicy> & tenantAppManagementPolicyMethods;
	homeRealmDiscoveryPolicies(): IBaseCollection<homeRealmDiscoveryPolicy>;
	homeRealmDiscoveryPolicies(id: string | number): IBaseQuery<homeRealmDiscoveryPolicy> & homeRealmDiscoveryPolicyMethods;
	permissionGrantPolicies(): IBaseCollection<permissionGrantPolicy>;
	permissionGrantPolicies(id: string | number): IBaseQuery<permissionGrantPolicy> & permissionGrantPolicyMethods;
	tokenIssuancePolicies(): IBaseCollection<tokenIssuancePolicy>;
	tokenIssuancePolicies(id: string | number): IBaseQuery<tokenIssuancePolicy> & tokenIssuancePolicyMethods;
	tokenLifetimePolicies(): IBaseCollection<tokenLifetimePolicy>;
	tokenLifetimePolicies(id: string | number): IBaseQuery<tokenLifetimePolicy> & tokenLifetimePolicyMethods;
	featureRolloutPolicies(): IBaseCollection<featureRolloutPolicy>;
	featureRolloutPolicies(id: string | number): IBaseQuery<featureRolloutPolicy> & featureRolloutPolicyMethods;
	adminConsentRequestPolicy(): IBaseQuery<adminConsentRequestPolicy> & adminConsentRequestPolicyMethods;
	conditionalAccessPolicies(): IBaseCollection<conditionalAccessPolicy>;
	conditionalAccessPolicies(id: string | number): IBaseQuery<conditionalAccessPolicy> & conditionalAccessPolicyMethods;
	identitySecurityDefaultsEnforcementPolicy(): IBaseQuery<identitySecurityDefaultsEnforcementPolicy> & identitySecurityDefaultsEnforcementPolicyMethods;
	roleManagementPolicies(): IBaseCollection<unifiedRoleManagementPolicy>;
	roleManagementPolicies(id: string | number): IBaseQuery<unifiedRoleManagementPolicy> & unifiedRoleManagementPolicyMethods;
	roleManagementPolicyAssignments(): IBaseCollection<unifiedRoleManagementPolicyAssignment>;
	roleManagementPolicyAssignments(id: string | number): IBaseQuery<unifiedRoleManagementPolicyAssignment> & unifiedRoleManagementPolicyAssignmentMethods;
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
	default(): IBaseQuery<crossTenantAccessPolicyConfigurationDefault> & crossTenantAccessPolicyConfigurationDefaultMethods;
	partners(): IBaseCollection<crossTenantAccessPolicyConfigurationPartner>;
	partners(id: string | number): IBaseQuery<crossTenantAccessPolicyConfigurationPartner> & crossTenantAccessPolicyConfigurationPartnerMethods;
	templates(): IBaseQuery<policyTemplate> & policyTemplateMethods;
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
	excludes(): IBaseCollection<permissionGrantConditionSet>;
	excludes(id: string | number): IBaseQuery<permissionGrantConditionSet> & permissionGrantConditionSetMethods;
	includes(): IBaseCollection<permissionGrantConditionSet>;
	includes(id: string | number): IBaseQuery<permissionGrantConditionSet> & permissionGrantConditionSetMethods;
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
	appliesTo(): IBaseCollection<directoryObject>;
	appliesTo(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
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
	effectiveRules(): IBaseCollection<unifiedRoleManagementPolicyRule>;
	effectiveRules(id: string | number): IBaseQuery<unifiedRoleManagementPolicyRule> & unifiedRoleManagementPolicyRuleMethods;
	rules(): IBaseCollection<unifiedRoleManagementPolicyRule>;
	rules(id: string | number): IBaseQuery<unifiedRoleManagementPolicyRule> & unifiedRoleManagementPolicyRuleMethods;
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
	policy(): IBaseQuery<unifiedRoleManagementPolicy> & unifiedRoleManagementPolicyMethods;
}
/*********************************************
* smsAuthenticationMethodConfiguration
**********************************************/
export interface smsAuthenticationMethodConfiguration extends smsAuthenticationMethodConfigurationProps, smsAuthenticationMethodConfigurationMethods , authenticationMethodConfiguration { }
export interface smsAuthenticationMethodConfigurationProps {

}
export interface smsAuthenticationMethodConfigurationMethods {
	includeTargets(): IBaseCollection<smsAuthenticationMethodTarget>;
	includeTargets(id: string | number): IBaseQuery<smsAuthenticationMethodTarget> & smsAuthenticationMethodTargetMethods;
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
	includeTargets(): IBaseCollection<authenticationMethodTarget>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget> & authenticationMethodTargetMethods;
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
	includeTargets(): IBaseCollection<authenticationMethodTarget>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget> & authenticationMethodTargetMethods;
}
/*********************************************
* voiceAuthenticationMethodConfiguration
**********************************************/
export interface voiceAuthenticationMethodConfiguration extends voiceAuthenticationMethodConfigurationProps, voiceAuthenticationMethodConfigurationMethods , authenticationMethodConfiguration { }
export interface voiceAuthenticationMethodConfigurationProps {
	isOfficePhoneAllowed: boolean;
}
export interface voiceAuthenticationMethodConfigurationMethods {
	includeTargets(): IBaseCollection<authenticationMethodTarget>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget> & authenticationMethodTargetMethods;
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
	includeTargets(): IBaseCollection<authenticationMethodTarget>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget> & authenticationMethodTargetMethods;
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
	recoveryKeys(): IBaseCollection<bitlockerRecoveryKey>;
	recoveryKeys(id: string | number): IBaseQuery<bitlockerRecoveryKey> & bitlockerRecoveryKeyMethods;
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
	bitlocker(): IBaseQuery<bitlocker> & bitlockerMethods;
	threatAssessmentRequests(): IBaseCollection<threatAssessmentRequest>;
	threatAssessmentRequests(id: string | number): IBaseQuery<threatAssessmentRequest> & threatAssessmentRequestMethods;
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
	results(): IBaseCollection<threatAssessmentResult>;
	results(id: string | number): IBaseQuery<threatAssessmentResult> & threatAssessmentResultMethods;
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
	appointments(): IBaseCollection<bookingAppointment>;
	appointments(id: string | number): IBaseQuery<bookingAppointment> & bookingAppointmentMethods;
	calendarView(): IBaseCollection<bookingAppointment>;
	calendarView(id: string | number): IBaseQuery<bookingAppointment> & bookingAppointmentMethods;
	customers(): IBaseCollection<bookingCustomerBase>;
	customers(id: string | number): IBaseQuery<bookingCustomerBase> & bookingCustomerBaseMethods;
	customQuestions(): IBaseCollection<bookingCustomQuestion>;
	customQuestions(id: string | number): IBaseQuery<bookingCustomQuestion> & bookingCustomQuestionMethods;
	services(): IBaseCollection<bookingService>;
	services(id: string | number): IBaseQuery<bookingService> & bookingServiceMethods;
	staffMembers(): IBaseCollection<bookingStaffMemberBase>;
	staffMembers(id: string | number): IBaseQuery<bookingStaffMemberBase> & bookingStaffMemberBaseMethods;
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
	bookingBusinesses(): IBaseCollection<bookingBusiness>;
	bookingBusinesses(id: string | number): IBaseQuery<bookingBusiness> & bookingBusinessMethods;
	bookingCurrencies(): IBaseCollection<bookingCurrency>;
	bookingCurrencies(id: string | number): IBaseQuery<bookingCurrency> & bookingCurrencyMethods;
	backupRestore(): IBaseQuery<backupRestoreRoot> & backupRestoreRootMethods;
	virtualEvents(): IBaseQuery<virtualEventsRoot> & virtualEventsRootMethods;
}
/*********************************************
* backupRestoreRoot
**********************************************/
export interface backupRestoreRoot extends backupRestoreRootProps, backupRestoreRootMethods , entity { }
export interface backupRestoreRootProps {
	serviceStatus: ComplexTypes.serviceStatus;
}
export interface backupRestoreRootMethods {
	driveInclusionRules(): IBaseCollection<driveProtectionRule>;
	driveInclusionRules(id: string | number): IBaseQuery<driveProtectionRule> & driveProtectionRuleMethods;
	driveProtectionUnits(): IBaseCollection<driveProtectionUnit>;
	driveProtectionUnits(id: string | number): IBaseQuery<driveProtectionUnit> & driveProtectionUnitMethods;
	exchangeProtectionPolicies(): IBaseCollection<exchangeProtectionPolicy>;
	exchangeProtectionPolicies(id: string | number): IBaseQuery<exchangeProtectionPolicy> & exchangeProtectionPolicyMethods;
	exchangeRestoreSessions(): IBaseCollection<exchangeRestoreSession>;
	exchangeRestoreSessions(id: string | number): IBaseQuery<exchangeRestoreSession> & exchangeRestoreSessionMethods;
	mailboxInclusionRules(): IBaseCollection<mailboxProtectionRule>;
	mailboxInclusionRules(id: string | number): IBaseQuery<mailboxProtectionRule> & mailboxProtectionRuleMethods;
	mailboxProtectionUnits(): IBaseCollection<mailboxProtectionUnit>;
	mailboxProtectionUnits(id: string | number): IBaseQuery<mailboxProtectionUnit> & mailboxProtectionUnitMethods;
	oneDriveForBusinessProtectionPolicies(): IBaseCollection<oneDriveForBusinessProtectionPolicy>;
	oneDriveForBusinessProtectionPolicies(id: string | number): IBaseQuery<oneDriveForBusinessProtectionPolicy> & oneDriveForBusinessProtectionPolicyMethods;
	oneDriveForBusinessRestoreSessions(): IBaseCollection<oneDriveForBusinessRestoreSession>;
	oneDriveForBusinessRestoreSessions(id: string | number): IBaseQuery<oneDriveForBusinessRestoreSession> & oneDriveForBusinessRestoreSessionMethods;
	protectionPolicies(): IBaseCollection<protectionPolicyBase>;
	protectionPolicies(id: string | number): IBaseQuery<protectionPolicyBase> & protectionPolicyBaseMethods;
	protectionUnits(): IBaseCollection<protectionUnitBase>;
	protectionUnits(id: string | number): IBaseQuery<protectionUnitBase> & protectionUnitBaseMethods;
	restorePoints(): IBaseCollection<restorePoint>;
	restorePoints(id: string | number): IBaseQuery<restorePoint> & restorePointMethods;
	restoreSessions(): IBaseCollection<restoreSessionBase>;
	restoreSessions(id: string | number): IBaseQuery<restoreSessionBase> & restoreSessionBaseMethods;
	serviceApps(): IBaseCollection<serviceApp>;
	serviceApps(id: string | number): IBaseQuery<serviceApp> & serviceAppMethods;
	sharePointProtectionPolicies(): IBaseCollection<sharePointProtectionPolicy>;
	sharePointProtectionPolicies(id: string | number): IBaseQuery<sharePointProtectionPolicy> & sharePointProtectionPolicyMethods;
	sharePointRestoreSessions(): IBaseCollection<sharePointRestoreSession>;
	sharePointRestoreSessions(id: string | number): IBaseQuery<sharePointRestoreSession> & sharePointRestoreSessionMethods;
	siteInclusionRules(): IBaseCollection<siteProtectionRule>;
	siteInclusionRules(id: string | number): IBaseQuery<siteProtectionRule> & siteProtectionRuleMethods;
	siteProtectionUnits(): IBaseCollection<siteProtectionUnit>;
	siteProtectionUnits(id: string | number): IBaseQuery<siteProtectionUnit> & siteProtectionUnitMethods;
}
/*********************************************
* virtualEventsRoot
**********************************************/
export interface virtualEventsRoot extends virtualEventsRootProps, virtualEventsRootMethods , entity { }
export interface virtualEventsRootProps {

}
export interface virtualEventsRootMethods {
	events(): IBaseCollection<virtualEvent>;
	events(id: string | number): IBaseQuery<virtualEvent> & virtualEventMethods;
	townhalls(): IBaseCollection<virtualEventTownhall>;
	townhalls(id: string | number): IBaseQuery<virtualEventTownhall> & virtualEventTownhallMethods;
	webinars(): IBaseCollection<virtualEventWebinar>;
	webinars(id: string | number): IBaseQuery<virtualEventWebinar> & virtualEventWebinarMethods;
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
	assignments(): IBaseCollection<cloudPcProvisioningPolicyAssignment>;
	assignments(id: string | number): IBaseQuery<cloudPcProvisioningPolicyAssignment> & cloudPcProvisioningPolicyAssignmentMethods;
}
/*********************************************
* cloudPcProvisioningPolicyAssignment
**********************************************/
export interface cloudPcProvisioningPolicyAssignment extends cloudPcProvisioningPolicyAssignmentProps, cloudPcProvisioningPolicyAssignmentMethods , entity { }
export interface cloudPcProvisioningPolicyAssignmentProps {
	target: ComplexTypes.cloudPcManagementAssignmentTarget;
}
export interface cloudPcProvisioningPolicyAssignmentMethods {
	assignedUsers(): IBaseCollection<user>;
	assignedUsers(id: string | number): IBaseQuery<user> & userMethods;
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
	assignments(): IBaseCollection<cloudPcUserSettingAssignment>;
	assignments(id: string | number): IBaseQuery<cloudPcUserSettingAssignment> & cloudPcUserSettingAssignmentMethods;
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
	auditEvents(): IBaseCollection<auditEvent>;
	auditEvents(id: string | number): IBaseQuery<auditEvent> & auditEventMethods;
	virtualEndpoint(): IBaseQuery<virtualEndpoint> & virtualEndpointMethods;
	termsAndConditions(): IBaseCollection<termsAndConditions>;
	termsAndConditions(id: string | number): IBaseQuery<termsAndConditions> & termsAndConditionsMethods;
	deviceCompliancePolicies(): IBaseCollection<deviceCompliancePolicy>;
	deviceCompliancePolicies(id: string | number): IBaseQuery<deviceCompliancePolicy> & deviceCompliancePolicyMethods;
	deviceCompliancePolicyDeviceStateSummary(): IBaseQuery<deviceCompliancePolicyDeviceStateSummary> & deviceCompliancePolicyDeviceStateSummaryMethods;
	deviceCompliancePolicySettingStateSummaries(): IBaseCollection<deviceCompliancePolicySettingStateSummary>;
	deviceCompliancePolicySettingStateSummaries(id: string | number): IBaseQuery<deviceCompliancePolicySettingStateSummary> & deviceCompliancePolicySettingStateSummaryMethods;
	deviceConfigurationDeviceStateSummaries(): IBaseQuery<deviceConfigurationDeviceStateSummary> & deviceConfigurationDeviceStateSummaryMethods;
	deviceConfigurations(): IBaseCollection<deviceConfiguration>;
	deviceConfigurations(id: string | number): IBaseQuery<deviceConfiguration> & deviceConfigurationMethods;
	iosUpdateStatuses(): IBaseCollection<iosUpdateDeviceStatus>;
	iosUpdateStatuses(id: string | number): IBaseQuery<iosUpdateDeviceStatus> & iosUpdateDeviceStatusMethods;
	softwareUpdateStatusSummary(): IBaseQuery<softwareUpdateStatusSummary> & softwareUpdateStatusSummaryMethods;
	complianceManagementPartners(): IBaseCollection<complianceManagementPartner>;
	complianceManagementPartners(id: string | number): IBaseQuery<complianceManagementPartner> & complianceManagementPartnerMethods;
	conditionalAccessSettings(): IBaseQuery<onPremisesConditionalAccessSettings> & onPremisesConditionalAccessSettingsMethods;
	deviceCategories(): IBaseCollection<deviceCategory>;
	deviceCategories(id: string | number): IBaseQuery<deviceCategory> & deviceCategoryMethods;
	deviceEnrollmentConfigurations(): IBaseCollection<deviceEnrollmentConfiguration>;
	deviceEnrollmentConfigurations(id: string | number): IBaseQuery<deviceEnrollmentConfiguration> & deviceEnrollmentConfigurationMethods;
	deviceManagementPartners(): IBaseCollection<deviceManagementPartner>;
	deviceManagementPartners(id: string | number): IBaseQuery<deviceManagementPartner> & deviceManagementPartnerMethods;
	exchangeConnectors(): IBaseCollection<deviceManagementExchangeConnector>;
	exchangeConnectors(id: string | number): IBaseQuery<deviceManagementExchangeConnector> & deviceManagementExchangeConnectorMethods;
	mobileThreatDefenseConnectors(): IBaseCollection<mobileThreatDefenseConnector>;
	mobileThreatDefenseConnectors(id: string | number): IBaseQuery<mobileThreatDefenseConnector> & mobileThreatDefenseConnectorMethods;
	applePushNotificationCertificate(): IBaseQuery<applePushNotificationCertificate> & applePushNotificationCertificateMethods;
	detectedApps(): IBaseCollection<detectedApp>;
	detectedApps(id: string | number): IBaseQuery<detectedApp> & detectedAppMethods;
	managedDeviceOverview(): IBaseQuery<managedDeviceOverview> & managedDeviceOverviewMethods;
	managedDevices(): IBaseCollection<managedDevice>;
	managedDevices(id: string | number): IBaseQuery<managedDevice> & managedDeviceMethods;
	mobileAppTroubleshootingEvents(): IBaseCollection<mobileAppTroubleshootingEvent>;
	mobileAppTroubleshootingEvents(id: string | number): IBaseQuery<mobileAppTroubleshootingEvent> & mobileAppTroubleshootingEventMethods;
	userExperienceAnalyticsAppHealthApplicationPerformance(): IBaseCollection<userExperienceAnalyticsAppHealthApplicationPerformance>;
	userExperienceAnalyticsAppHealthApplicationPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthApplicationPerformance> & userExperienceAnalyticsAppHealthApplicationPerformanceMethods;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails(): IBaseCollection<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails>;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails> & userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsMethods;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId(): IBaseCollection<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId>;
	userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId> & userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdMethods;
	userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion(): IBaseCollection<userExperienceAnalyticsAppHealthAppPerformanceByOSVersion>;
	userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthAppPerformanceByOSVersion> & userExperienceAnalyticsAppHealthAppPerformanceByOSVersionMethods;
	userExperienceAnalyticsAppHealthDeviceModelPerformance(): IBaseCollection<userExperienceAnalyticsAppHealthDeviceModelPerformance>;
	userExperienceAnalyticsAppHealthDeviceModelPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthDeviceModelPerformance> & userExperienceAnalyticsAppHealthDeviceModelPerformanceMethods;
	userExperienceAnalyticsAppHealthDevicePerformance(): IBaseCollection<userExperienceAnalyticsAppHealthDevicePerformance>;
	userExperienceAnalyticsAppHealthDevicePerformance(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthDevicePerformance> & userExperienceAnalyticsAppHealthDevicePerformanceMethods;
	userExperienceAnalyticsAppHealthDevicePerformanceDetails(): IBaseCollection<userExperienceAnalyticsAppHealthDevicePerformanceDetails>;
	userExperienceAnalyticsAppHealthDevicePerformanceDetails(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthDevicePerformanceDetails> & userExperienceAnalyticsAppHealthDevicePerformanceDetailsMethods;
	userExperienceAnalyticsAppHealthOSVersionPerformance(): IBaseCollection<userExperienceAnalyticsAppHealthOSVersionPerformance>;
	userExperienceAnalyticsAppHealthOSVersionPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsAppHealthOSVersionPerformance> & userExperienceAnalyticsAppHealthOSVersionPerformanceMethods;
	userExperienceAnalyticsAppHealthOverview(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	userExperienceAnalyticsBaselines(): IBaseCollection<userExperienceAnalyticsBaseline>;
	userExperienceAnalyticsBaselines(id: string | number): IBaseQuery<userExperienceAnalyticsBaseline> & userExperienceAnalyticsBaselineMethods;
	userExperienceAnalyticsCategories(): IBaseCollection<userExperienceAnalyticsCategory>;
	userExperienceAnalyticsCategories(id: string | number): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	userExperienceAnalyticsDevicePerformance(): IBaseCollection<userExperienceAnalyticsDevicePerformance>;
	userExperienceAnalyticsDevicePerformance(id: string | number): IBaseQuery<userExperienceAnalyticsDevicePerformance> & userExperienceAnalyticsDevicePerformanceMethods;
	userExperienceAnalyticsDeviceScores(): IBaseCollection<userExperienceAnalyticsDeviceScores>;
	userExperienceAnalyticsDeviceScores(id: string | number): IBaseQuery<userExperienceAnalyticsDeviceScores> & userExperienceAnalyticsDeviceScoresMethods;
	userExperienceAnalyticsDeviceStartupHistory(): IBaseCollection<userExperienceAnalyticsDeviceStartupHistory>;
	userExperienceAnalyticsDeviceStartupHistory(id: string | number): IBaseQuery<userExperienceAnalyticsDeviceStartupHistory> & userExperienceAnalyticsDeviceStartupHistoryMethods;
	userExperienceAnalyticsDeviceStartupProcesses(): IBaseCollection<userExperienceAnalyticsDeviceStartupProcess>;
	userExperienceAnalyticsDeviceStartupProcesses(id: string | number): IBaseQuery<userExperienceAnalyticsDeviceStartupProcess> & userExperienceAnalyticsDeviceStartupProcessMethods;
	userExperienceAnalyticsDeviceStartupProcessPerformance(): IBaseCollection<userExperienceAnalyticsDeviceStartupProcessPerformance>;
	userExperienceAnalyticsDeviceStartupProcessPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsDeviceStartupProcessPerformance> & userExperienceAnalyticsDeviceStartupProcessPerformanceMethods;
	userExperienceAnalyticsMetricHistory(): IBaseCollection<userExperienceAnalyticsMetricHistory>;
	userExperienceAnalyticsMetricHistory(id: string | number): IBaseQuery<userExperienceAnalyticsMetricHistory> & userExperienceAnalyticsMetricHistoryMethods;
	userExperienceAnalyticsModelScores(): IBaseCollection<userExperienceAnalyticsModelScores>;
	userExperienceAnalyticsModelScores(id: string | number): IBaseQuery<userExperienceAnalyticsModelScores> & userExperienceAnalyticsModelScoresMethods;
	userExperienceAnalyticsOverview(): IBaseQuery<userExperienceAnalyticsOverview> & userExperienceAnalyticsOverviewMethods;
	userExperienceAnalyticsScoreHistory(): IBaseCollection<userExperienceAnalyticsScoreHistory>;
	userExperienceAnalyticsScoreHistory(id: string | number): IBaseQuery<userExperienceAnalyticsScoreHistory> & userExperienceAnalyticsScoreHistoryMethods;
	userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric(): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric> & userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricMethods;
	userExperienceAnalyticsWorkFromAnywhereMetrics(): IBaseCollection<userExperienceAnalyticsWorkFromAnywhereMetric>;
	userExperienceAnalyticsWorkFromAnywhereMetrics(id: string | number): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereMetric> & userExperienceAnalyticsWorkFromAnywhereMetricMethods;
	userExperienceAnalyticsWorkFromAnywhereModelPerformance(): IBaseCollection<userExperienceAnalyticsWorkFromAnywhereModelPerformance>;
	userExperienceAnalyticsWorkFromAnywhereModelPerformance(id: string | number): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereModelPerformance> & userExperienceAnalyticsWorkFromAnywhereModelPerformanceMethods;
	windowsMalwareInformation(): IBaseCollection<windowsMalwareInformation>;
	windowsMalwareInformation(id: string | number): IBaseQuery<windowsMalwareInformation> & windowsMalwareInformationMethods;
	importedWindowsAutopilotDeviceIdentities(): IBaseCollection<importedWindowsAutopilotDeviceIdentity>;
	importedWindowsAutopilotDeviceIdentities(id: string | number): IBaseQuery<importedWindowsAutopilotDeviceIdentity> & importedWindowsAutopilotDeviceIdentityMethods;
	windowsAutopilotDeviceIdentities(): IBaseCollection<windowsAutopilotDeviceIdentity>;
	windowsAutopilotDeviceIdentities(id: string | number): IBaseQuery<windowsAutopilotDeviceIdentity> & windowsAutopilotDeviceIdentityMethods;
	notificationMessageTemplates(): IBaseCollection<notificationMessageTemplate>;
	notificationMessageTemplates(id: string | number): IBaseQuery<notificationMessageTemplate> & notificationMessageTemplateMethods;
	resourceOperations(): IBaseCollection<resourceOperation>;
	resourceOperations(id: string | number): IBaseQuery<resourceOperation> & resourceOperationMethods;
	roleAssignments(): IBaseCollection<deviceAndAppManagementRoleAssignment>;
	roleAssignments(id: string | number): IBaseQuery<deviceAndAppManagementRoleAssignment> & deviceAndAppManagementRoleAssignmentMethods;
	roleDefinitions(): IBaseCollection<roleDefinition>;
	roleDefinitions(id: string | number): IBaseQuery<roleDefinition> & roleDefinitionMethods;
	remoteAssistancePartners(): IBaseCollection<remoteAssistancePartner>;
	remoteAssistancePartners(id: string | number): IBaseQuery<remoteAssistancePartner> & remoteAssistancePartnerMethods;
	reports(): IBaseQuery<deviceManagementReports> & deviceManagementReportsMethods;
	telecomExpenseManagementPartners(): IBaseCollection<telecomExpenseManagementPartner>;
	telecomExpenseManagementPartners(id: string | number): IBaseQuery<telecomExpenseManagementPartner> & telecomExpenseManagementPartnerMethods;
	troubleshootingEvents(): IBaseCollection<deviceManagementTroubleshootingEvent>;
	troubleshootingEvents(id: string | number): IBaseQuery<deviceManagementTroubleshootingEvent> & deviceManagementTroubleshootingEventMethods;
	windowsInformationProtectionAppLearningSummaries(): IBaseCollection<windowsInformationProtectionAppLearningSummary>;
	windowsInformationProtectionAppLearningSummaries(id: string | number): IBaseQuery<windowsInformationProtectionAppLearningSummary> & windowsInformationProtectionAppLearningSummaryMethods;
	windowsInformationProtectionNetworkLearningSummaries(): IBaseCollection<windowsInformationProtectionNetworkLearningSummary>;
	windowsInformationProtectionNetworkLearningSummaries(id: string | number): IBaseQuery<windowsInformationProtectionNetworkLearningSummary> & windowsInformationProtectionNetworkLearningSummaryMethods;
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
	auditEvents(): IBaseCollection<cloudPcAuditEvent>;
	auditEvents(id: string | number): IBaseQuery<cloudPcAuditEvent> & cloudPcAuditEventMethods;
	cloudPCs(): IBaseCollection<cloudPC>;
	cloudPCs(id: string | number): IBaseQuery<cloudPC> & cloudPCMethods;
	deviceImages(): IBaseCollection<cloudPcDeviceImage>;
	deviceImages(id: string | number): IBaseQuery<cloudPcDeviceImage> & cloudPcDeviceImageMethods;
	galleryImages(): IBaseCollection<cloudPcGalleryImage>;
	galleryImages(id: string | number): IBaseQuery<cloudPcGalleryImage> & cloudPcGalleryImageMethods;
	onPremisesConnections(): IBaseCollection<cloudPcOnPremisesConnection>;
	onPremisesConnections(id: string | number): IBaseQuery<cloudPcOnPremisesConnection> & cloudPcOnPremisesConnectionMethods;
	provisioningPolicies(): IBaseCollection<cloudPcProvisioningPolicy>;
	provisioningPolicies(id: string | number): IBaseQuery<cloudPcProvisioningPolicy> & cloudPcProvisioningPolicyMethods;
	userSettings(): IBaseCollection<cloudPcUserSetting>;
	userSettings(id: string | number): IBaseQuery<cloudPcUserSetting> & cloudPcUserSettingMethods;
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
	acceptanceStatuses(): IBaseCollection<termsAndConditionsAcceptanceStatus>;
	acceptanceStatuses(id: string | number): IBaseQuery<termsAndConditionsAcceptanceStatus> & termsAndConditionsAcceptanceStatusMethods;
	assignments(): IBaseCollection<termsAndConditionsAssignment>;
	assignments(id: string | number): IBaseQuery<termsAndConditionsAssignment> & termsAndConditionsAssignmentMethods;
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
	assignments(): IBaseCollection<deviceCompliancePolicyAssignment>;
	assignments(id: string | number): IBaseQuery<deviceCompliancePolicyAssignment> & deviceCompliancePolicyAssignmentMethods;
	deviceSettingStateSummaries(): IBaseCollection<settingStateDeviceSummary>;
	deviceSettingStateSummaries(id: string | number): IBaseQuery<settingStateDeviceSummary> & settingStateDeviceSummaryMethods;
	deviceStatuses(): IBaseCollection<deviceComplianceDeviceStatus>;
	deviceStatuses(id: string | number): IBaseQuery<deviceComplianceDeviceStatus> & deviceComplianceDeviceStatusMethods;
	deviceStatusOverview(): IBaseQuery<deviceComplianceDeviceOverview> & deviceComplianceDeviceOverviewMethods;
	scheduledActionsForRule(): IBaseCollection<deviceComplianceScheduledActionForRule>;
	scheduledActionsForRule(id: string | number): IBaseQuery<deviceComplianceScheduledActionForRule> & deviceComplianceScheduledActionForRuleMethods;
	userStatuses(): IBaseCollection<deviceComplianceUserStatus>;
	userStatuses(id: string | number): IBaseQuery<deviceComplianceUserStatus> & deviceComplianceUserStatusMethods;
	userStatusOverview(): IBaseQuery<deviceComplianceUserOverview> & deviceComplianceUserOverviewMethods;
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
	deviceComplianceSettingStates(): IBaseCollection<deviceComplianceSettingState>;
	deviceComplianceSettingStates(id: string | number): IBaseQuery<deviceComplianceSettingState> & deviceComplianceSettingStateMethods;
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
	assignments(): IBaseCollection<deviceConfigurationAssignment>;
	assignments(id: string | number): IBaseQuery<deviceConfigurationAssignment> & deviceConfigurationAssignmentMethods;
	deviceSettingStateSummaries(): IBaseCollection<settingStateDeviceSummary>;
	deviceSettingStateSummaries(id: string | number): IBaseQuery<settingStateDeviceSummary> & settingStateDeviceSummaryMethods;
	deviceStatuses(): IBaseCollection<deviceConfigurationDeviceStatus>;
	deviceStatuses(id: string | number): IBaseQuery<deviceConfigurationDeviceStatus> & deviceConfigurationDeviceStatusMethods;
	deviceStatusOverview(): IBaseQuery<deviceConfigurationDeviceOverview> & deviceConfigurationDeviceOverviewMethods;
	userStatuses(): IBaseCollection<deviceConfigurationUserStatus>;
	userStatuses(id: string | number): IBaseQuery<deviceConfigurationUserStatus> & deviceConfigurationUserStatusMethods;
	userStatusOverview(): IBaseQuery<deviceConfigurationUserOverview> & deviceConfigurationUserOverviewMethods;
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
	assignments(): IBaseCollection<enrollmentConfigurationAssignment>;
	assignments(id: string | number): IBaseQuery<enrollmentConfigurationAssignment> & enrollmentConfigurationAssignmentMethods;
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
	managedDevices(): IBaseCollection<managedDevice>;
	managedDevices(id: string | number): IBaseQuery<managedDevice> & managedDeviceMethods;
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
	appLogCollectionRequests(): IBaseCollection<appLogCollectionRequest>;
	appLogCollectionRequests(id: string | number): IBaseQuery<appLogCollectionRequest> & appLogCollectionRequestMethods;
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
	metricValues(): IBaseCollection<userExperienceAnalyticsMetric>;
	metricValues(id: string | number): IBaseQuery<userExperienceAnalyticsMetric> & userExperienceAnalyticsMetricMethods;
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
	appHealthMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	batteryHealthMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	bestPracticesMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	deviceBootPerformanceMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	rebootAnalyticsMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	resourcePerformanceMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
	workFromAnywhereMetrics(): IBaseQuery<userExperienceAnalyticsCategory> & userExperienceAnalyticsCategoryMethods;
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
	metricDevices(): IBaseCollection<userExperienceAnalyticsWorkFromAnywhereDevice>;
	metricDevices(id: string | number): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereDevice> & userExperienceAnalyticsWorkFromAnywhereDeviceMethods;
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
	deviceMalwareStates(): IBaseCollection<malwareStateForWindowsDevice>;
	deviceMalwareStates(id: string | number): IBaseQuery<malwareStateForWindowsDevice> & malwareStateForWindowsDeviceMethods;
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
	localizedNotificationMessages(): IBaseCollection<localizedNotificationMessage>;
	localizedNotificationMessages(id: string | number): IBaseQuery<localizedNotificationMessage> & localizedNotificationMessageMethods;
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
	roleDefinition(): IBaseQuery<roleDefinition> & roleDefinitionMethods;
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
	roleAssignments(): IBaseCollection<roleAssignment>;
	roleAssignments(id: string | number): IBaseQuery<roleAssignment> & roleAssignmentMethods;
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
	exportJobs(): IBaseCollection<deviceManagementExportJob>;
	exportJobs(id: string | number): IBaseQuery<deviceManagementExportJob> & deviceManagementExportJobMethods;
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
	subjectRightsRequests(): IBaseCollection<subjectRightsRequest>;
	subjectRightsRequests(id: string | number): IBaseQuery<subjectRightsRequest> & subjectRightsRequestMethods;
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
	approvers(): IBaseCollection<user>;
	approvers(id: string | number): IBaseQuery<user> & userMethods;
	collaborators(): IBaseCollection<user>;
	collaborators(id: string | number): IBaseQuery<user> & userMethods;
	notes(): IBaseCollection<authoredNote>;
	notes(id: string | number): IBaseQuery<authoredNote> & authoredNoteMethods;
	team(): IBaseQuery<team> & teamMethods;
}
/*********************************************
* security
**********************************************/
export interface security extends securityProps, securityMethods  { }
export interface securityProps {

}
export interface securityMethods {
	subjectRightsRequests(): IBaseCollection<subjectRightsRequest>;
	subjectRightsRequests(id: string | number): IBaseQuery<subjectRightsRequest> & subjectRightsRequestMethods;
	cases(): IBaseQuery<casesRoot> & casesRootMethods;
	identities(): IBaseQuery<identityContainer> & identityContainerMethods;
	alerts_v2(): IBaseCollection<alert>;
	alerts_v2(id: string | number): IBaseQuery<alert> & alertMethods;
	incidents(): IBaseCollection<incident>;
	incidents(id: string | number): IBaseQuery<incident> & incidentMethods;
	attackSimulation(): IBaseQuery<attackSimulationRoot> & attackSimulationRootMethods;
	labels(): IBaseQuery<labelsRoot> & labelsRootMethods;
	triggers(): IBaseQuery<triggersRoot> & triggersRootMethods;
	triggerTypes(): IBaseQuery<triggerTypesRoot> & triggerTypesRootMethods;
	alerts(): IBaseCollection<alert>;
	alerts(id: string | number): IBaseQuery<alert> & alertMethods;
	secureScoreControlProfiles(): IBaseCollection<secureScoreControlProfile>;
	secureScoreControlProfiles(id: string | number): IBaseQuery<secureScoreControlProfile> & secureScoreControlProfileMethods;
	secureScores(): IBaseCollection<secureScore>;
	secureScores(id: string | number): IBaseQuery<secureScore> & secureScoreMethods;
	threatIntelligence(): IBaseQuery<threatIntelligence> & threatIntelligenceMethods;
}
/*********************************************
* attackSimulationRoot
**********************************************/
export interface attackSimulationRoot extends attackSimulationRootProps, attackSimulationRootMethods , entity { }
export interface attackSimulationRootProps {

}
export interface attackSimulationRootMethods {
	endUserNotifications(): IBaseCollection<endUserNotification>;
	endUserNotifications(id: string | number): IBaseQuery<endUserNotification> & endUserNotificationMethods;
	landingPages(): IBaseCollection<landingPage>;
	landingPages(id: string | number): IBaseQuery<landingPage> & landingPageMethods;
	loginPages(): IBaseCollection<loginPage>;
	loginPages(id: string | number): IBaseQuery<loginPage> & loginPageMethods;
	operations(): IBaseCollection<attackSimulationOperation>;
	operations(id: string | number): IBaseQuery<attackSimulationOperation> & attackSimulationOperationMethods;
	payloads(): IBaseCollection<payload>;
	payloads(id: string | number): IBaseQuery<payload> & payloadMethods;
	simulationAutomations(): IBaseCollection<simulationAutomation>;
	simulationAutomations(id: string | number): IBaseQuery<simulationAutomation> & simulationAutomationMethods;
	simulations(): IBaseCollection<simulation>;
	simulations(id: string | number): IBaseQuery<simulation> & simulationMethods;
	trainings(): IBaseCollection<training>;
	trainings(id: string | number): IBaseQuery<training> & trainingMethods;
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
	filesFolder(): IBaseQuery<driveItem> & driveItemMethods;
	members(): IBaseCollection<conversationMember>;
	members(id: string | number): IBaseQuery<conversationMember> & conversationMemberMethods;
	messages(): IBaseCollection<chatMessage>;
	messages(id: string | number): IBaseQuery<chatMessage> & chatMessageMethods;
	sharedWithTeams(): IBaseCollection<sharedWithChannelTeamInfo>;
	sharedWithTeams(id: string | number): IBaseQuery<sharedWithChannelTeamInfo> & sharedWithChannelTeamInfoMethods;
	tabs(): IBaseCollection<teamsTab>;
	tabs(id: string | number): IBaseQuery<teamsTab> & teamsTabMethods;
}
/*********************************************
* teamsAppInstallation
**********************************************/
export interface teamsAppInstallation extends teamsAppInstallationProps, teamsAppInstallationMethods , entity { }
export interface teamsAppInstallationProps {
	consentedPermissionSet: ComplexTypes.teamsAppPermissionSet;
}
export interface teamsAppInstallationMethods {
	teamsApp(): IBaseQuery<teamsApp> & teamsAppMethods;
	teamsAppDefinition(): IBaseQuery<teamsAppDefinition> & teamsAppDefinitionMethods;
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
	members(): IBaseCollection<teamworkTagMember>;
	members(id: string | number): IBaseQuery<teamworkTagMember> & teamworkTagMemberMethods;
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
	offerShiftRequests(): IBaseCollection<offerShiftRequest>;
	offerShiftRequests(id: string | number): IBaseQuery<offerShiftRequest> & offerShiftRequestMethods;
	openShiftChangeRequests(): IBaseCollection<openShiftChangeRequest>;
	openShiftChangeRequests(id: string | number): IBaseQuery<openShiftChangeRequest> & openShiftChangeRequestMethods;
	openShifts(): IBaseCollection<openShift>;
	openShifts(id: string | number): IBaseQuery<openShift> & openShiftMethods;
	schedulingGroups(): IBaseCollection<schedulingGroup>;
	schedulingGroups(id: string | number): IBaseQuery<schedulingGroup> & schedulingGroupMethods;
	shifts(): IBaseCollection<shift>;
	shifts(id: string | number): IBaseQuery<shift> & shiftMethods;
	swapShiftsChangeRequests(): IBaseCollection<swapShiftsChangeRequest>;
	swapShiftsChangeRequests(id: string | number): IBaseQuery<swapShiftsChangeRequest> & swapShiftsChangeRequestMethods;
	timeOffReasons(): IBaseCollection<timeOffReason>;
	timeOffReasons(id: string | number): IBaseQuery<timeOffReason> & timeOffReasonMethods;
	timeOffRequests(): IBaseCollection<timeOffRequest>;
	timeOffRequests(id: string | number): IBaseQuery<timeOffRequest> & timeOffRequestMethods;
	timesOff(): IBaseCollection<timeOff>;
	timesOff(id: string | number): IBaseQuery<timeOff> & timeOffMethods;
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
	allTime(): IBaseQuery<itemActivityStat> & itemActivityStatMethods;
	itemActivityStats(): IBaseCollection<itemActivityStat>;
	itemActivityStats(id: string | number): IBaseQuery<itemActivityStat> & itemActivityStatMethods;
	lastSevenDays(): IBaseQuery<itemActivityStat> & itemActivityStatMethods;
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
	sourceColumn(): IBaseQuery<columnDefinition> & columnDefinitionMethods;
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
	base(): IBaseQuery<contentType> & contentTypeMethods;
	baseTypes(): IBaseCollection<contentType>;
	baseTypes(id: string | number): IBaseQuery<contentType> & contentTypeMethods;
	columnLinks(): IBaseCollection<columnLink>;
	columnLinks(id: string | number): IBaseQuery<columnLink> & columnLinkMethods;
	columnPositions(): IBaseCollection<columnDefinition>;
	columnPositions(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	columns(): IBaseCollection<columnDefinition>;
	columns(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
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
	columns(): IBaseCollection<columnDefinition>;
	columns(id: string | number): IBaseQuery<columnDefinition> & columnDefinitionMethods;
	contentTypes(): IBaseCollection<contentType>;
	contentTypes(id: string | number): IBaseQuery<contentType> & contentTypeMethods;
	drive(): IBaseQuery<drive> & driveMethods;
	items(): IBaseCollection<listItem>;
	items(id: string | number): IBaseQuery<listItem> & listItemMethods;
	operations(): IBaseCollection<richLongRunningOperation>;
	operations(id: string | number): IBaseQuery<richLongRunningOperation> & richLongRunningOperationMethods;
	subscriptions(): IBaseCollection<subscription>;
	subscriptions(id: string | number): IBaseQuery<subscription> & subscriptionMethods;
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
	identityProviders(): IBaseCollection<identityProvider>;
	identityProviders(id: string | number): IBaseQuery<identityProvider> & identityProviderMethods;
	languages(): IBaseCollection<userFlowLanguageConfiguration>;
	languages(id: string | number): IBaseQuery<userFlowLanguageConfiguration> & userFlowLanguageConfigurationMethods;
	userAttributeAssignments(): IBaseCollection<identityUserFlowAttributeAssignment>;
	userAttributeAssignments(id: string | number): IBaseQuery<identityUserFlowAttributeAssignment> & identityUserFlowAttributeAssignmentMethods;
	userFlowIdentityProviders(): IBaseCollection<identityProviderBase>;
	userFlowIdentityProviders(id: string | number): IBaseQuery<identityProviderBase> & identityProviderBaseMethods;
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
	defaultPages(): IBaseCollection<userFlowLanguagePage>;
	defaultPages(id: string | number): IBaseQuery<userFlowLanguagePage> & userFlowLanguagePageMethods;
	overridesPages(): IBaseCollection<userFlowLanguagePage>;
	overridesPages(id: string | number): IBaseQuery<userFlowLanguagePage> & userFlowLanguagePageMethods;
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
	userAttribute(): IBaseQuery<identityUserFlowAttribute> & identityUserFlowAttributeMethods;
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
	healthIssues(): IBaseCollection<healthIssue>;
	healthIssues(id: string | number): IBaseQuery<healthIssue> & healthIssueMethods;
	sensors(): IBaseCollection<sensor>;
	sensors(id: string | number): IBaseQuery<sensor> & sensorMethods;
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
	deviceLocalCredentials(): IBaseCollection<deviceLocalCredentialInfo>;
	deviceLocalCredentials(id: string | number): IBaseQuery<deviceLocalCredentialInfo> & deviceLocalCredentialInfoMethods;
	administrativeUnits(): IBaseCollection<administrativeUnit>;
	administrativeUnits(id: string | number): IBaseQuery<administrativeUnit> & administrativeUnitMethods;
	attributeSets(): IBaseCollection<attributeSet>;
	attributeSets(id: string | number): IBaseQuery<attributeSet> & attributeSetMethods;
	customSecurityAttributeDefinitions(): IBaseCollection<customSecurityAttributeDefinition>;
	customSecurityAttributeDefinitions(id: string | number): IBaseQuery<customSecurityAttributeDefinition> & customSecurityAttributeDefinitionMethods;
	deletedItems(): IBaseCollection<directoryObject>;
	deletedItems(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	federationConfigurations(): IBaseCollection<identityProviderBase>;
	federationConfigurations(id: string | number): IBaseQuery<identityProviderBase> & identityProviderBaseMethods;
	onPremisesSynchronization(): IBaseCollection<onPremisesDirectorySynchronization>;
	onPremisesSynchronization(id: string | number): IBaseQuery<onPremisesDirectorySynchronization> & onPremisesDirectorySynchronizationMethods;
	subscriptions(): IBaseCollection<companySubscription>;
	subscriptions(id: string | number): IBaseQuery<companySubscription> & companySubscriptionMethods;
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
	members(): IBaseCollection<directoryObject>;
	members(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	scopedRoleMembers(): IBaseCollection<scopedRoleMembership>;
	scopedRoleMembers(id: string | number): IBaseQuery<scopedRoleMembership> & scopedRoleMembershipMethods;
	extensions(): IBaseCollection<extension>;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
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
	allowedValues(): IBaseCollection<allowedValue>;
	allowedValues(id: string | number): IBaseQuery<allowedValue> & allowedValueMethods;
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
	identitySynchronization(): IBaseQuery<crossTenantIdentitySyncPolicyPartner> & crossTenantIdentitySyncPolicyPartnerMethods;
}
/*********************************************
* policyTemplate
**********************************************/
export interface policyTemplate extends policyTemplateProps, policyTemplateMethods , entity { }
export interface policyTemplateProps {

}
export interface policyTemplateMethods {
	multiTenantOrganizationIdentitySynchronization(): IBaseQuery<multiTenantOrganizationIdentitySyncPolicyTemplate> & multiTenantOrganizationIdentitySyncPolicyTemplateMethods;
	multiTenantOrganizationPartnerConfiguration(): IBaseQuery<multiTenantOrganizationPartnerConfigurationTemplate> & multiTenantOrganizationPartnerConfigurationTemplateMethods;
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
	memberOf(): IBaseCollection<directoryObject>;
	memberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	registeredOwners(): IBaseCollection<directoryObject>;
	registeredOwners(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	registeredUsers(): IBaseCollection<directoryObject>;
	registeredUsers(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	transitiveMemberOf(): IBaseCollection<directoryObject>;
	transitiveMemberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	extensions(): IBaseCollection<extension>;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
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
	members(): IBaseCollection<directoryObject>;
	members(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	scopedMembers(): IBaseCollection<scopedRoleMembership>;
	scopedMembers(id: string | number): IBaseQuery<scopedRoleMembership> & scopedRoleMembershipMethods;
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
	domainNameReferences(): IBaseCollection<directoryObject>;
	domainNameReferences(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	federationConfiguration(): IBaseCollection<internalDomainFederation>;
	federationConfiguration(id: string | number): IBaseQuery<internalDomainFederation> & internalDomainFederationMethods;
	rootDomain(): IBaseQuery<domain> & domainMethods;
	serviceConfigurationRecords(): IBaseCollection<domainDnsRecord>;
	serviceConfigurationRecords(id: string | number): IBaseQuery<domainDnsRecord> & domainDnsRecordMethods;
	verificationDnsRecords(): IBaseCollection<domainDnsRecord>;
	verificationDnsRecords(id: string | number): IBaseQuery<domainDnsRecord> & domainDnsRecordMethods;
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
	joinRequest(): IBaseQuery<multiTenantOrganizationJoinRequestRecord> & multiTenantOrganizationJoinRequestRecordMethods;
	tenants(): IBaseCollection<multiTenantOrganizationMember>;
	tenants(id: string | number): IBaseQuery<multiTenantOrganizationMember> & multiTenantOrganizationMemberMethods;
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
	branding(): IBaseQuery<organizationalBranding> & organizationalBrandingMethods;
	certificateBasedAuthConfiguration(): IBaseCollection<certificateBasedAuthConfiguration>;
	certificateBasedAuthConfiguration(id: string | number): IBaseQuery<certificateBasedAuthConfiguration> & certificateBasedAuthConfigurationMethods;
	extensions(): IBaseCollection<extension>;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
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
	localizations(): IBaseCollection<organizationalBrandingLocalization>;
	localizations(id: string | number): IBaseQuery<organizationalBrandingLocalization> & organizationalBrandingLocalizationMethods;
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
	directReports(): IBaseCollection<directoryObject>;
	directReports(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	manager(): IBaseQuery<directoryObject> & directoryObjectMethods;
	memberOf(): IBaseCollection<directoryObject>;
	memberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	transitiveMemberOf(): IBaseCollection<directoryObject>;
	transitiveMemberOf(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
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
	resourceNamespaces(): IBaseCollection<unifiedRbacResourceNamespace>;
	resourceNamespaces(id: string | number): IBaseQuery<unifiedRbacResourceNamespace> & unifiedRbacResourceNamespaceMethods;
	roleAssignments(): IBaseCollection<unifiedRoleAssignment>;
	roleAssignments(id: string | number): IBaseQuery<unifiedRoleAssignment> & unifiedRoleAssignmentMethods;
	roleDefinitions(): IBaseCollection<unifiedRoleDefinition>;
	roleDefinitions(id: string | number): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
	roleAssignmentScheduleInstances(): IBaseCollection<unifiedRoleAssignmentScheduleInstance>;
	roleAssignmentScheduleInstances(id: string | number): IBaseQuery<unifiedRoleAssignmentScheduleInstance> & unifiedRoleAssignmentScheduleInstanceMethods;
	roleAssignmentScheduleRequests(): IBaseCollection<unifiedRoleAssignmentScheduleRequest>;
	roleAssignmentScheduleRequests(id: string | number): IBaseQuery<unifiedRoleAssignmentScheduleRequest> & unifiedRoleAssignmentScheduleRequestMethods;
	roleAssignmentSchedules(): IBaseCollection<unifiedRoleAssignmentSchedule>;
	roleAssignmentSchedules(id: string | number): IBaseQuery<unifiedRoleAssignmentSchedule> & unifiedRoleAssignmentScheduleMethods;
	roleEligibilityScheduleInstances(): IBaseCollection<unifiedRoleEligibilityScheduleInstance>;
	roleEligibilityScheduleInstances(id: string | number): IBaseQuery<unifiedRoleEligibilityScheduleInstance> & unifiedRoleEligibilityScheduleInstanceMethods;
	roleEligibilityScheduleRequests(): IBaseCollection<unifiedRoleEligibilityScheduleRequest>;
	roleEligibilityScheduleRequests(id: string | number): IBaseQuery<unifiedRoleEligibilityScheduleRequest> & unifiedRoleEligibilityScheduleRequestMethods;
	roleEligibilitySchedules(): IBaseCollection<unifiedRoleEligibilitySchedule>;
	roleEligibilitySchedules(id: string | number): IBaseQuery<unifiedRoleEligibilitySchedule> & unifiedRoleEligibilityScheduleMethods;
}
/*********************************************
* unifiedRbacResourceNamespace
**********************************************/
export interface unifiedRbacResourceNamespace extends unifiedRbacResourceNamespaceProps, unifiedRbacResourceNamespaceMethods , entity { }
export interface unifiedRbacResourceNamespaceProps {
	name: string;
}
export interface unifiedRbacResourceNamespaceMethods {
	resourceActions(): IBaseCollection<unifiedRbacResourceAction>;
	resourceActions(id: string | number): IBaseQuery<unifiedRbacResourceAction> & unifiedRbacResourceActionMethods;
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
	appScope(): IBaseQuery<appScope> & appScopeMethods;
	directoryScope(): IBaseQuery<directoryObject> & directoryObjectMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
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
	inheritsPermissionsFrom(): IBaseCollection<unifiedRoleDefinition>;
	inheritsPermissionsFrom(id: string | number): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
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
	appScope(): IBaseQuery<appScope> & appScopeMethods;
	directoryScope(): IBaseQuery<directoryObject> & directoryObjectMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
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
	activatedUsing(): IBaseQuery<unifiedRoleEligibilityScheduleInstance> & unifiedRoleEligibilityScheduleInstanceMethods;
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
	activatedUsing(): IBaseQuery<unifiedRoleEligibilitySchedule> & unifiedRoleEligibilityScheduleMethods;
	appScope(): IBaseQuery<appScope> & appScopeMethods;
	directoryScope(): IBaseQuery<directoryObject> & directoryObjectMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
	targetSchedule(): IBaseQuery<unifiedRoleAssignmentSchedule> & unifiedRoleAssignmentScheduleMethods;
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
	appScope(): IBaseQuery<appScope> & appScopeMethods;
	directoryScope(): IBaseQuery<directoryObject> & directoryObjectMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
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
	activatedUsing(): IBaseQuery<unifiedRoleEligibilitySchedule> & unifiedRoleEligibilityScheduleMethods;
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
	appScope(): IBaseQuery<appScope> & appScopeMethods;
	directoryScope(): IBaseQuery<directoryObject> & directoryObjectMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition> & unifiedRoleDefinitionMethods;
	targetSchedule(): IBaseQuery<unifiedRoleEligibilitySchedule> & unifiedRoleEligibilityScheduleMethods;
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
	directory(): IBaseQuery<rbacApplication> & rbacApplicationMethods;
	entitlementManagement(): IBaseQuery<rbacApplication> & rbacApplicationMethods;
}
/*********************************************
* samlOrWsFedExternalDomainFederation
**********************************************/
export interface samlOrWsFedExternalDomainFederation extends samlOrWsFedExternalDomainFederationProps, samlOrWsFedExternalDomainFederationMethods , samlOrWsFedProvider { }
export interface samlOrWsFedExternalDomainFederationProps {

}
export interface samlOrWsFedExternalDomainFederationMethods {
	domains(): IBaseCollection<externalDomainName>;
	domains(id: string | number): IBaseQuery<externalDomainName> & externalDomainNameMethods;
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
	multiTenantOrganization(): IBaseQuery<multiTenantOrganization> & multiTenantOrganizationMethods;
	delegatedAdminCustomers(): IBaseCollection<delegatedAdminCustomer>;
	delegatedAdminCustomers(id: string | number): IBaseQuery<delegatedAdminCustomer> & delegatedAdminCustomerMethods;
	delegatedAdminRelationships(): IBaseCollection<delegatedAdminRelationship>;
	delegatedAdminRelationships(id: string | number): IBaseQuery<delegatedAdminRelationship> & delegatedAdminRelationshipMethods;
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
	serviceManagementDetails(): IBaseCollection<delegatedAdminServiceManagementDetail>;
	serviceManagementDetails(id: string | number): IBaseQuery<delegatedAdminServiceManagementDetail> & delegatedAdminServiceManagementDetailMethods;
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
	accessAssignments(): IBaseCollection<delegatedAdminAccessAssignment>;
	accessAssignments(id: string | number): IBaseQuery<delegatedAdminAccessAssignment> & delegatedAdminAccessAssignmentMethods;
	operations(): IBaseCollection<delegatedAdminRelationshipOperation>;
	operations(id: string | number): IBaseQuery<delegatedAdminRelationshipOperation> & delegatedAdminRelationshipOperationMethods;
	requests(): IBaseCollection<delegatedAdminRelationshipRequest>;
	requests(id: string | number): IBaseQuery<delegatedAdminRelationshipRequest> & delegatedAdminRelationshipRequestMethods;
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
	edge(): IBaseQuery<edge> & edgeMethods;
	sharepoint(): IBaseQuery<sharepoint> & sharepointMethods;
	microsoft365Apps(): IBaseQuery<adminMicrosoft365Apps> & adminMicrosoft365AppsMethods;
	serviceAnnouncement(): IBaseQuery<serviceAnnouncement> & serviceAnnouncementMethods;
	reportSettings(): IBaseQuery<adminReportSettings> & adminReportSettingsMethods;
	people(): IBaseQuery<peopleAdminSettings> & peopleAdminSettingsMethods;
}
/*********************************************
* edge
**********************************************/
export interface edge extends edgeProps, edgeMethods , entity { }
export interface edgeProps {

}
export interface edgeMethods {
	internetExplorerMode(): IBaseQuery<internetExplorerMode> & internetExplorerModeMethods;
}
/*********************************************
* sharepoint
**********************************************/
export interface sharepoint extends sharepointProps, sharepointMethods , entity { }
export interface sharepointProps {

}
export interface sharepointMethods {
	settings(): IBaseQuery<sharepointSettings> & sharepointSettingsMethods;
}
/*********************************************
* adminMicrosoft365Apps
**********************************************/
export interface adminMicrosoft365Apps extends adminMicrosoft365AppsProps, adminMicrosoft365AppsMethods , entity { }
export interface adminMicrosoft365AppsProps {

}
export interface adminMicrosoft365AppsMethods {
	installationOptions(): IBaseQuery<m365AppsInstallationOptions> & m365AppsInstallationOptionsMethods;
}
/*********************************************
* serviceAnnouncement
**********************************************/
export interface serviceAnnouncement extends serviceAnnouncementProps, serviceAnnouncementMethods , entity { }
export interface serviceAnnouncementProps {

}
export interface serviceAnnouncementMethods {
	healthOverviews(): IBaseCollection<serviceHealth>;
	healthOverviews(id: string | number): IBaseQuery<serviceHealth> & serviceHealthMethods;
	issues(): IBaseCollection<serviceHealthIssue>;
	issues(id: string | number): IBaseQuery<serviceHealthIssue> & serviceHealthIssueMethods;
	messages(): IBaseCollection<serviceUpdateMessage>;
	messages(id: string | number): IBaseQuery<serviceUpdateMessage> & serviceUpdateMessageMethods;
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
	profileCardProperties(): IBaseCollection<profileCardProperty>;
	profileCardProperties(id: string | number): IBaseQuery<profileCardProperty> & profileCardPropertyMethods;
	pronouns(): IBaseQuery<pronounsSettings> & pronounsSettingsMethods;
	itemInsights(): IBaseQuery<insightsSettings> & insightsSettingsMethods;
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
	sharedCookies(): IBaseCollection<browserSharedCookie>;
	sharedCookies(id: string | number): IBaseQuery<browserSharedCookie> & browserSharedCookieMethods;
	sites(): IBaseCollection<browserSite>;
	sites(id: string | number): IBaseQuery<browserSite> & browserSiteMethods;
}
/*********************************************
* internetExplorerMode
**********************************************/
export interface internetExplorerMode extends internetExplorerModeProps, internetExplorerModeMethods , entity { }
export interface internetExplorerModeProps {

}
export interface internetExplorerModeMethods {
	siteLists(): IBaseCollection<browserSiteList>;
	siteLists(id: string | number): IBaseQuery<browserSiteList> & browserSiteListMethods;
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
	categories(): IBaseCollection<educationCategory>;
	categories(id: string | number): IBaseQuery<educationCategory> & educationCategoryMethods;
	gradingCategory(): IBaseQuery<educationGradingCategory> & educationGradingCategoryMethods;
	resources(): IBaseCollection<educationAssignmentResource>;
	resources(id: string | number): IBaseQuery<educationAssignmentResource> & educationAssignmentResourceMethods;
	rubric(): IBaseQuery<educationRubric> & educationRubricMethods;
	submissions(): IBaseCollection<educationSubmission>;
	submissions(id: string | number): IBaseQuery<educationSubmission> & educationSubmissionMethods;
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
	outcomes(): IBaseCollection<educationOutcome>;
	outcomes(id: string | number): IBaseQuery<educationOutcome> & educationOutcomeMethods;
	resources(): IBaseCollection<educationSubmissionResource>;
	resources(id: string | number): IBaseQuery<educationSubmissionResource> & educationSubmissionResourceMethods;
	submittedResources(): IBaseCollection<educationSubmissionResource>;
	submittedResources(id: string | number): IBaseQuery<educationSubmissionResource> & educationSubmissionResourceMethods;
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
	gradingCategories(): IBaseCollection<educationGradingCategory>;
	gradingCategories(id: string | number): IBaseQuery<educationGradingCategory> & educationGradingCategoryMethods;
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
	assignmentCategories(): IBaseCollection<educationCategory>;
	assignmentCategories(id: string | number): IBaseQuery<educationCategory> & educationCategoryMethods;
	assignmentDefaults(): IBaseQuery<educationAssignmentDefaults> & educationAssignmentDefaultsMethods;
	assignments(): IBaseCollection<educationAssignment>;
	assignments(id: string | number): IBaseQuery<educationAssignment> & educationAssignmentMethods;
	assignmentSettings(): IBaseQuery<educationAssignmentSettings> & educationAssignmentSettingsMethods;
	modules(): IBaseCollection<educationModule>;
	modules(id: string | number): IBaseQuery<educationModule> & educationModuleMethods;
	group(): IBaseQuery<group> & groupMethods;
	members(): IBaseCollection<educationUser>;
	members(id: string | number): IBaseQuery<educationUser> & educationUserMethods;
	schools(): IBaseCollection<educationSchool>;
	schools(id: string | number): IBaseQuery<educationSchool> & educationSchoolMethods;
	teachers(): IBaseCollection<educationUser>;
	teachers(id: string | number): IBaseQuery<educationUser> & educationUserMethods;
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
	resources(): IBaseCollection<educationModuleResource>;
	resources(id: string | number): IBaseQuery<educationModuleResource> & educationModuleResourceMethods;
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
	assignments(): IBaseCollection<educationAssignment>;
	assignments(id: string | number): IBaseQuery<educationAssignment> & educationAssignmentMethods;
	rubrics(): IBaseCollection<educationRubric>;
	rubrics(id: string | number): IBaseQuery<educationRubric> & educationRubricMethods;
	classes(): IBaseCollection<educationClass>;
	classes(id: string | number): IBaseQuery<educationClass> & educationClassMethods;
	schools(): IBaseCollection<educationSchool>;
	schools(id: string | number): IBaseQuery<educationSchool> & educationSchoolMethods;
	taughtClasses(): IBaseCollection<educationClass>;
	taughtClasses(id: string | number): IBaseQuery<educationClass> & educationClassMethods;
	user(): IBaseQuery<user> & userMethods;
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
	administrativeUnit(): IBaseQuery<administrativeUnit> & administrativeUnitMethods;
	classes(): IBaseCollection<educationClass>;
	classes(id: string | number): IBaseQuery<educationClass> & educationClassMethods;
	users(): IBaseCollection<educationUser>;
	users(id: string | number): IBaseQuery<educationUser> & educationUserMethods;
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
	classes(): IBaseCollection<educationClass>;
	classes(id: string | number): IBaseQuery<educationClass> & educationClassMethods;
	me(): IBaseQuery<educationUser> & educationUserMethods;
	schools(): IBaseCollection<educationSchool>;
	schools(id: string | number): IBaseQuery<educationSchool> & educationSchoolMethods;
	users(): IBaseCollection<educationUser>;
	users(id: string | number): IBaseQuery<educationUser> & educationUserMethods;
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
	protectionUnit(): IBaseQuery<protectionUnitBase> & protectionUnitBaseMethods;
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
	mailboxInclusionRules(): IBaseCollection<mailboxProtectionRule>;
	mailboxInclusionRules(id: string | number): IBaseQuery<mailboxProtectionRule> & mailboxProtectionRuleMethods;
	mailboxProtectionUnits(): IBaseCollection<mailboxProtectionUnit>;
	mailboxProtectionUnits(id: string | number): IBaseQuery<mailboxProtectionUnit> & mailboxProtectionUnitMethods;
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
	granularMailboxRestoreArtifacts(): IBaseCollection<granularMailboxRestoreArtifact>;
	granularMailboxRestoreArtifacts(id: string | number): IBaseQuery<granularMailboxRestoreArtifact> & granularMailboxRestoreArtifactMethods;
	mailboxRestoreArtifacts(): IBaseCollection<mailboxRestoreArtifact>;
	mailboxRestoreArtifacts(id: string | number): IBaseQuery<mailboxRestoreArtifact> & mailboxRestoreArtifactMethods;
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
	driveInclusionRules(): IBaseCollection<driveProtectionRule>;
	driveInclusionRules(id: string | number): IBaseQuery<driveProtectionRule> & driveProtectionRuleMethods;
	driveProtectionUnits(): IBaseCollection<driveProtectionUnit>;
	driveProtectionUnits(id: string | number): IBaseQuery<driveProtectionUnit> & driveProtectionUnitMethods;
}
/*********************************************
* oneDriveForBusinessRestoreSession
**********************************************/
export interface oneDriveForBusinessRestoreSession extends oneDriveForBusinessRestoreSessionProps, oneDriveForBusinessRestoreSessionMethods , restoreSessionBase { }
export interface oneDriveForBusinessRestoreSessionProps {

}
export interface oneDriveForBusinessRestoreSessionMethods {
	driveRestoreArtifacts(): IBaseCollection<driveRestoreArtifact>;
	driveRestoreArtifacts(id: string | number): IBaseQuery<driveRestoreArtifact> & driveRestoreArtifactMethods;
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
	siteInclusionRules(): IBaseCollection<siteProtectionRule>;
	siteInclusionRules(id: string | number): IBaseQuery<siteProtectionRule> & siteProtectionRuleMethods;
	siteProtectionUnits(): IBaseCollection<siteProtectionUnit>;
	siteProtectionUnits(id: string | number): IBaseQuery<siteProtectionUnit> & siteProtectionUnitMethods;
}
/*********************************************
* sharePointRestoreSession
**********************************************/
export interface sharePointRestoreSession extends sharePointRestoreSessionProps, sharePointRestoreSessionMethods , restoreSessionBase { }
export interface sharePointRestoreSessionProps {

}
export interface sharePointRestoreSessionMethods {
	siteRestoreArtifacts(): IBaseCollection<siteRestoreArtifact>;
	siteRestoreArtifacts(id: string | number): IBaseQuery<siteRestoreArtifact> & siteRestoreArtifactMethods;
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
	restorePoint(): IBaseQuery<restorePoint> & restorePointMethods;
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
	workbook(): IBaseQuery<workbook> & workbookMethods;
	analytics(): IBaseQuery<itemAnalytics> & itemAnalyticsMethods;
	children(): IBaseCollection<driveItem>;
	children(id: string | number): IBaseQuery<driveItem> & driveItemMethods;
	listItem(): IBaseQuery<listItem> & listItemMethods;
	permissions(): IBaseCollection<permission>;
	permissions(id: string | number): IBaseQuery<permission> & permissionMethods;
	retentionLabel(): IBaseQuery<itemRetentionLabel> & itemRetentionLabelMethods;
	subscriptions(): IBaseCollection<subscription>;
	subscriptions(id: string | number): IBaseQuery<subscription> & subscriptionMethods;
	thumbnails(): IBaseCollection<thumbnailSet>;
	thumbnails(id: string | number): IBaseQuery<thumbnailSet> & thumbnailSetMethods;
	versions(): IBaseCollection<driveItemVersion>;
	versions(id: string | number): IBaseQuery<driveItemVersion> & driveItemVersionMethods;
}
/*********************************************
* workbook
**********************************************/
export interface workbook extends workbookProps, workbookMethods , entity { }
export interface workbookProps {

}
export interface workbookMethods {
	application(): IBaseQuery<workbookApplication> & workbookApplicationMethods;
	comments(): IBaseCollection<workbookComment>;
	comments(id: string | number): IBaseQuery<workbookComment> & workbookCommentMethods;
	functions(): IBaseQuery<workbookFunctions> & workbookFunctionsMethods;
	names(): IBaseCollection<workbookNamedItem>;
	names(id: string | number): IBaseQuery<workbookNamedItem> & workbookNamedItemMethods;
	operations(): IBaseCollection<workbookOperation>;
	operations(id: string | number): IBaseQuery<workbookOperation> & workbookOperationMethods;
	tables(): IBaseCollection<workbookTable>;
	tables(id: string | number): IBaseQuery<workbookTable> & workbookTableMethods;
	worksheets(): IBaseCollection<workbookWorksheet>;
	worksheets(id: string | number): IBaseQuery<workbookWorksheet> & workbookWorksheetMethods;
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
	analytics(): IBaseQuery<itemAnalytics> & itemAnalyticsMethods;
	documentSetVersions(): IBaseCollection<documentSetVersion>;
	documentSetVersions(id: string | number): IBaseQuery<documentSetVersion> & documentSetVersionMethods;
	driveItem(): IBaseQuery<driveItem> & driveItemMethods;
	fields(): IBaseQuery<fieldValueSet> & fieldValueSetMethods;
	versions(): IBaseCollection<listItemVersion>;
	versions(id: string | number): IBaseQuery<listItemVersion> & listItemVersionMethods;
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
	replies(): IBaseCollection<workbookCommentReply>;
	replies(id: string | number): IBaseQuery<workbookCommentReply> & workbookCommentReplyMethods;
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
	worksheet(): IBaseQuery<workbookWorksheet> & workbookWorksheetMethods;
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
	columns(): IBaseCollection<workbookTableColumn>;
	columns(id: string | number): IBaseQuery<workbookTableColumn> & workbookTableColumnMethods;
	rows(): IBaseCollection<workbookTableRow>;
	rows(id: string | number): IBaseQuery<workbookTableRow> & workbookTableRowMethods;
	sort(): IBaseQuery<workbookTableSort> & workbookTableSortMethods;
	worksheet(): IBaseQuery<workbookWorksheet> & workbookWorksheetMethods;
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
	charts(): IBaseCollection<workbookChart>;
	charts(id: string | number): IBaseQuery<workbookChart> & workbookChartMethods;
	names(): IBaseCollection<workbookNamedItem>;
	names(id: string | number): IBaseQuery<workbookNamedItem> & workbookNamedItemMethods;
	pivotTables(): IBaseCollection<workbookPivotTable>;
	pivotTables(id: string | number): IBaseQuery<workbookPivotTable> & workbookPivotTableMethods;
	protection(): IBaseQuery<workbookWorksheetProtection> & workbookWorksheetProtectionMethods;
	tables(): IBaseCollection<workbookTable>;
	tables(id: string | number): IBaseQuery<workbookTable> & workbookTableMethods;
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
	axes(): IBaseQuery<workbookChartAxes> & workbookChartAxesMethods;
	dataLabels(): IBaseQuery<workbookChartDataLabels> & workbookChartDataLabelsMethods;
	format(): IBaseQuery<workbookChartAreaFormat> & workbookChartAreaFormatMethods;
	legend(): IBaseQuery<workbookChartLegend> & workbookChartLegendMethods;
	series(): IBaseCollection<workbookChartSeries>;
	series(id: string | number): IBaseQuery<workbookChartSeries> & workbookChartSeriesMethods;
	title(): IBaseQuery<workbookChartTitle> & workbookChartTitleMethods;
	worksheet(): IBaseQuery<workbookWorksheet> & workbookWorksheetMethods;
}
/*********************************************
* workbookChartAxes
**********************************************/
export interface workbookChartAxes extends workbookChartAxesProps, workbookChartAxesMethods , entity { }
export interface workbookChartAxesProps {

}
export interface workbookChartAxesMethods {
	categoryAxis(): IBaseQuery<workbookChartAxis> & workbookChartAxisMethods;
	seriesAxis(): IBaseQuery<workbookChartAxis> & workbookChartAxisMethods;
	valueAxis(): IBaseQuery<workbookChartAxis> & workbookChartAxisMethods;
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
	format(): IBaseQuery<workbookChartDataLabelFormat> & workbookChartDataLabelFormatMethods;
}
/*********************************************
* workbookChartAreaFormat
**********************************************/
export interface workbookChartAreaFormat extends workbookChartAreaFormatProps, workbookChartAreaFormatMethods , entity { }
export interface workbookChartAreaFormatProps {

}
export interface workbookChartAreaFormatMethods {
	fill(): IBaseQuery<workbookChartFill> & workbookChartFillMethods;
	font(): IBaseQuery<workbookChartFont> & workbookChartFontMethods;
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
	format(): IBaseQuery<workbookChartLegendFormat> & workbookChartLegendFormatMethods;
}
/*********************************************
* workbookChartSeries
**********************************************/
export interface workbookChartSeries extends workbookChartSeriesProps, workbookChartSeriesMethods , entity { }
export interface workbookChartSeriesProps {
	name: string;
}
export interface workbookChartSeriesMethods {
	format(): IBaseQuery<workbookChartSeriesFormat> & workbookChartSeriesFormatMethods;
	points(): IBaseCollection<workbookChartPoint>;
	points(id: string | number): IBaseQuery<workbookChartPoint> & workbookChartPointMethods;
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
	format(): IBaseQuery<workbookChartTitleFormat> & workbookChartTitleFormatMethods;
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
	format(): IBaseQuery<workbookChartAxisFormat> & workbookChartAxisFormatMethods;
	majorGridlines(): IBaseQuery<workbookChartGridlines> & workbookChartGridlinesMethods;
	minorGridlines(): IBaseQuery<workbookChartGridlines> & workbookChartGridlinesMethods;
	title(): IBaseQuery<workbookChartAxisTitle> & workbookChartAxisTitleMethods;
}
/*********************************************
* workbookChartAxisFormat
**********************************************/
export interface workbookChartAxisFormat extends workbookChartAxisFormatProps, workbookChartAxisFormatMethods , entity { }
export interface workbookChartAxisFormatProps {

}
export interface workbookChartAxisFormatMethods {
	font(): IBaseQuery<workbookChartFont> & workbookChartFontMethods;
	line(): IBaseQuery<workbookChartLineFormat> & workbookChartLineFormatMethods;
}
/*********************************************
* workbookChartGridlines
**********************************************/
export interface workbookChartGridlines extends workbookChartGridlinesProps, workbookChartGridlinesMethods , entity { }
export interface workbookChartGridlinesProps {
	visible: boolean;
}
export interface workbookChartGridlinesMethods {
	format(): IBaseQuery<workbookChartGridlinesFormat> & workbookChartGridlinesFormatMethods;
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
	format(): IBaseQuery<workbookChartAxisTitleFormat> & workbookChartAxisTitleFormatMethods;
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
	font(): IBaseQuery<workbookChartFont> & workbookChartFontMethods;
}
/*********************************************
* workbookChartDataLabelFormat
**********************************************/
export interface workbookChartDataLabelFormat extends workbookChartDataLabelFormatProps, workbookChartDataLabelFormatMethods , entity { }
export interface workbookChartDataLabelFormatProps {

}
export interface workbookChartDataLabelFormatMethods {
	fill(): IBaseQuery<workbookChartFill> & workbookChartFillMethods;
	font(): IBaseQuery<workbookChartFont> & workbookChartFontMethods;
}
/*********************************************
* workbookChartGridlinesFormat
**********************************************/
export interface workbookChartGridlinesFormat extends workbookChartGridlinesFormatProps, workbookChartGridlinesFormatMethods , entity { }
export interface workbookChartGridlinesFormatProps {

}
export interface workbookChartGridlinesFormatMethods {
	line(): IBaseQuery<workbookChartLineFormat> & workbookChartLineFormatMethods;
}
/*********************************************
* workbookChartLegendFormat
**********************************************/
export interface workbookChartLegendFormat extends workbookChartLegendFormatProps, workbookChartLegendFormatMethods , entity { }
export interface workbookChartLegendFormatProps {

}
export interface workbookChartLegendFormatMethods {
	fill(): IBaseQuery<workbookChartFill> & workbookChartFillMethods;
	font(): IBaseQuery<workbookChartFont> & workbookChartFontMethods;
}
/*********************************************
* workbookChartPoint
**********************************************/
export interface workbookChartPoint extends workbookChartPointProps, workbookChartPointMethods , entity { }
export interface workbookChartPointProps {
	value: ComplexTypes.Json;
}
export interface workbookChartPointMethods {
	format(): IBaseQuery<workbookChartPointFormat> & workbookChartPointFormatMethods;
}
/*********************************************
* workbookChartPointFormat
**********************************************/
export interface workbookChartPointFormat extends workbookChartPointFormatProps, workbookChartPointFormatMethods , entity { }
export interface workbookChartPointFormatProps {

}
export interface workbookChartPointFormatMethods {
	fill(): IBaseQuery<workbookChartFill> & workbookChartFillMethods;
}
/*********************************************
* workbookChartSeriesFormat
**********************************************/
export interface workbookChartSeriesFormat extends workbookChartSeriesFormatProps, workbookChartSeriesFormatMethods , entity { }
export interface workbookChartSeriesFormatProps {

}
export interface workbookChartSeriesFormatMethods {
	fill(): IBaseQuery<workbookChartFill> & workbookChartFillMethods;
	line(): IBaseQuery<workbookChartLineFormat> & workbookChartLineFormatMethods;
}
/*********************************************
* workbookChartTitleFormat
**********************************************/
export interface workbookChartTitleFormat extends workbookChartTitleFormatProps, workbookChartTitleFormatMethods , entity { }
export interface workbookChartTitleFormatProps {

}
export interface workbookChartTitleFormatMethods {
	fill(): IBaseQuery<workbookChartFill> & workbookChartFillMethods;
	font(): IBaseQuery<workbookChartFont> & workbookChartFontMethods;
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
	worksheet(): IBaseQuery<workbookWorksheet> & workbookWorksheetMethods;
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
	format(): IBaseQuery<workbookRangeFormat> & workbookRangeFormatMethods;
	sort(): IBaseQuery<workbookRangeSort> & workbookRangeSortMethods;
	worksheet(): IBaseQuery<workbookWorksheet> & workbookWorksheetMethods;
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
	borders(): IBaseCollection<workbookRangeBorder>;
	borders(id: string | number): IBaseQuery<workbookRangeBorder> & workbookRangeBorderMethods;
	fill(): IBaseQuery<workbookRangeFill> & workbookRangeFillMethods;
	font(): IBaseQuery<workbookRangeFont> & workbookRangeFontMethods;
	protection(): IBaseQuery<workbookFormatProtection> & workbookFormatProtectionMethods;
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
	rows(): IBaseCollection<workbookRangeView>;
	rows(id: string | number): IBaseQuery<workbookRangeView> & workbookRangeViewMethods;
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
	filter(): IBaseQuery<workbookFilter> & workbookFilterMethods;
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
	rooms(): IBaseCollection<room>;
	rooms(id: string | number): IBaseQuery<room> & roomMethods;
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
	attachments(): IBaseCollection<attachment>;
	attachments(id: string | number): IBaseQuery<attachment> & attachmentMethods;
	extensions(): IBaseCollection<extension>;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	inReplyTo(): IBaseQuery<post> & postMethods;
	multiValueExtendedProperties(): IBaseCollection<multiValueLegacyExtendedProperty>;
	multiValueExtendedProperties(id: string | number): IBaseQuery<multiValueLegacyExtendedProperty> & multiValueLegacyExtendedPropertyMethods;
	singleValueExtendedProperties(): IBaseCollection<singleValueLegacyExtendedProperty>;
	singleValueExtendedProperties(id: string | number): IBaseQuery<singleValueLegacyExtendedProperty> & singleValueLegacyExtendedPropertyMethods;
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
	event(): IBaseQuery<event> & eventMethods;
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
	item(): IBaseQuery<outlookItem> & outlookItemMethods;
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
	containers(): IBaseCollection<fileStorageContainer>;
	containers(id: string | number): IBaseQuery<fileStorageContainer> & fileStorageContainerMethods;
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
	drive(): IBaseQuery<drive> & driveMethods;
	permissions(): IBaseCollection<permission>;
	permissions(id: string | number): IBaseQuery<permission> & permissionMethods;
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
	fileStorage(): IBaseQuery<fileStorage> & fileStorageMethods;
	settings(): IBaseQuery<storageSettings> & storageSettingsMethods;
}
/*********************************************
* storageSettings
**********************************************/
export interface storageSettings extends storageSettingsProps, storageSettingsMethods , entity { }
export interface storageSettingsProps {

}
export interface storageSettingsMethods {
	quota(): IBaseQuery<unifiedStorageQuota> & unifiedStorageQuotaMethods;
}
/*********************************************
* canvasLayout
**********************************************/
export interface canvasLayout extends canvasLayoutProps, canvasLayoutMethods , entity { }
export interface canvasLayoutProps {

}
export interface canvasLayoutMethods {
	horizontalSections(): IBaseCollection<horizontalSection>;
	horizontalSections(id: string | number): IBaseQuery<horizontalSection> & horizontalSectionMethods;
	verticalSection(): IBaseQuery<verticalSection> & verticalSectionMethods;
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
	columns(): IBaseCollection<horizontalSectionColumn>;
	columns(id: string | number): IBaseQuery<horizontalSectionColumn> & horizontalSectionColumnMethods;
}
/*********************************************
* verticalSection
**********************************************/
export interface verticalSection extends verticalSectionProps, verticalSectionMethods , entity { }
export interface verticalSectionProps {
	emphasis: EnumTypes.sectionEmphasisType;
}
export interface verticalSectionMethods {
	webparts(): IBaseCollection<webPart>;
	webparts(id: string | number): IBaseQuery<webPart> & webPartMethods;
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
	fields(): IBaseQuery<fieldValueSet> & fieldValueSetMethods;
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
	webparts(): IBaseCollection<webPart>;
	webparts(id: string | number): IBaseQuery<webPart> & webPartMethods;
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
	driveItem(): IBaseQuery<driveItem> & driveItemMethods;
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
	activities(): IBaseCollection<itemActivity>;
	activities(id: string | number): IBaseQuery<itemActivity> & itemActivityMethods;
}
/*********************************************
* sharedDriveItem
**********************************************/
export interface sharedDriveItem extends sharedDriveItemProps, sharedDriveItemMethods , baseItem { }
export interface sharedDriveItemProps {
	owner: ComplexTypes.identitySet;
}
export interface sharedDriveItemMethods {
	driveItem(): IBaseQuery<driveItem> & driveItemMethods;
	items(): IBaseCollection<driveItem>;
	items(id: string | number): IBaseQuery<driveItem> & driveItemMethods;
	list(): IBaseQuery<list> & listMethods;
	listItem(): IBaseQuery<listItem> & listItemMethods;
	permission(): IBaseQuery<permission> & permissionMethods;
	root(): IBaseQuery<driveItem> & driveItemMethods;
	site(): IBaseQuery<site> & siteMethods;
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
	canvasLayout(): IBaseQuery<canvasLayout> & canvasLayoutMethods;
	webParts(): IBaseCollection<webPart>;
	webParts(id: string | number): IBaseQuery<webPart> & webPartMethods;
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
	bulkUpload(): IBaseQuery<bulkUpload> & bulkUploadMethods;
	schema(): IBaseQuery<synchronizationSchema> & synchronizationSchemaMethods;
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
	schema(): IBaseQuery<synchronizationSchema> & synchronizationSchemaMethods;
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
	directories(): IBaseCollection<directoryDefinition>;
	directories(id: string | number): IBaseQuery<directoryDefinition> & directoryDefinitionMethods;
}
/*********************************************
* cloudCommunications
**********************************************/
export interface cloudCommunications extends cloudCommunicationsProps, cloudCommunicationsMethods  { }
export interface cloudCommunicationsProps {

}
export interface cloudCommunicationsMethods {
	callRecords(): IBaseCollection<callRecord>;
	callRecords(id: string | number): IBaseQuery<callRecord> & callRecordMethods;
	calls(): IBaseCollection<call>;
	calls(id: string | number): IBaseQuery<call> & callMethods;
	onlineMeetings(): IBaseCollection<onlineMeeting>;
	onlineMeetings(id: string | number): IBaseQuery<onlineMeeting> & onlineMeetingMethods;
	presences(): IBaseCollection<presence>;
	presences(id: string | number): IBaseQuery<presence> & presenceMethods;
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
	audioRoutingGroups(): IBaseCollection<audioRoutingGroup>;
	audioRoutingGroups(id: string | number): IBaseQuery<audioRoutingGroup> & audioRoutingGroupMethods;
	contentSharingSessions(): IBaseCollection<contentSharingSession>;
	contentSharingSessions(id: string | number): IBaseQuery<contentSharingSession> & contentSharingSessionMethods;
	operations(): IBaseCollection<commsOperation>;
	operations(id: string | number): IBaseQuery<commsOperation> & commsOperationMethods;
	participants(): IBaseCollection<participant>;
	participants(id: string | number): IBaseQuery<participant> & participantMethods;
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
	instances(): IBaseCollection<accessReviewHistoryInstance>;
	instances(id: string | number): IBaseQuery<accessReviewHistoryInstance> & accessReviewHistoryInstanceMethods;
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
	contactedReviewers(): IBaseCollection<accessReviewReviewer>;
	contactedReviewers(id: string | number): IBaseQuery<accessReviewReviewer> & accessReviewReviewerMethods;
	decisions(): IBaseCollection<accessReviewInstanceDecisionItem>;
	decisions(id: string | number): IBaseQuery<accessReviewInstanceDecisionItem> & accessReviewInstanceDecisionItemMethods;
	stages(): IBaseCollection<accessReviewStage>;
	stages(id: string | number): IBaseQuery<accessReviewStage> & accessReviewStageMethods;
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
	insights(): IBaseCollection<governanceInsight>;
	insights(id: string | number): IBaseQuery<governanceInsight> & governanceInsightMethods;
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
	decisions(): IBaseCollection<accessReviewInstanceDecisionItem>;
	decisions(id: string | number): IBaseQuery<accessReviewInstanceDecisionItem> & accessReviewInstanceDecisionItemMethods;
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
	instances(): IBaseCollection<accessReviewInstance>;
	instances(id: string | number): IBaseQuery<accessReviewInstance> & accessReviewInstanceMethods;
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
	userConsentRequests(): IBaseCollection<userConsentRequest>;
	userConsentRequests(id: string | number): IBaseQuery<userConsentRequest> & userConsentRequestMethods;
}
/*********************************************
* userConsentRequest
**********************************************/
export interface userConsentRequest extends userConsentRequestProps, userConsentRequestMethods , request { }
export interface userConsentRequestProps {
	reason: string;
}
export interface userConsentRequestMethods {
	approval(): IBaseQuery<approval> & approvalMethods;
}
/*********************************************
* approval
**********************************************/
export interface approval extends approvalProps, approvalMethods , entity { }
export interface approvalProps {

}
export interface approvalMethods {
	stages(): IBaseCollection<approvalStage>;
	stages(id: string | number): IBaseQuery<approvalStage> & approvalStageMethods;
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
	accessPackagesIncompatibleWith(): IBaseCollection<accessPackage>;
	accessPackagesIncompatibleWith(id: string | number): IBaseQuery<accessPackage> & accessPackageMethods;
	assignmentPolicies(): IBaseCollection<accessPackageAssignmentPolicy>;
	assignmentPolicies(id: string | number): IBaseQuery<accessPackageAssignmentPolicy> & accessPackageAssignmentPolicyMethods;
	catalog(): IBaseQuery<accessPackageCatalog> & accessPackageCatalogMethods;
	incompatibleAccessPackages(): IBaseCollection<accessPackage>;
	incompatibleAccessPackages(id: string | number): IBaseQuery<accessPackage> & accessPackageMethods;
	incompatibleGroups(): IBaseCollection<group>;
	incompatibleGroups(id: string | number): IBaseQuery<group> & groupMethods;
	resourceRoleScopes(): IBaseCollection<accessPackageResourceRoleScope>;
	resourceRoleScopes(id: string | number): IBaseQuery<accessPackageResourceRoleScope> & accessPackageResourceRoleScopeMethods;
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
	accessPackage(): IBaseQuery<accessPackage> & accessPackageMethods;
	catalog(): IBaseQuery<accessPackageCatalog> & accessPackageCatalogMethods;
	customExtensionStageSettings(): IBaseCollection<customExtensionStageSetting>;
	customExtensionStageSettings(id: string | number): IBaseQuery<customExtensionStageSetting> & customExtensionStageSettingMethods;
	questions(): IBaseCollection<accessPackageQuestion>;
	questions(id: string | number): IBaseQuery<accessPackageQuestion> & accessPackageQuestionMethods;
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
	accessPackage(): IBaseQuery<accessPackage> & accessPackageMethods;
	assignment(): IBaseQuery<accessPackageAssignment> & accessPackageAssignmentMethods;
	requestor(): IBaseQuery<accessPackageSubject> & accessPackageSubjectMethods;
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
	accessPackage(): IBaseQuery<accessPackage> & accessPackageMethods;
	assignmentPolicy(): IBaseQuery<accessPackageAssignmentPolicy> & accessPackageAssignmentPolicyMethods;
	target(): IBaseQuery<accessPackageSubject> & accessPackageSubjectMethods;
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
	accessPackages(): IBaseCollection<accessPackage>;
	accessPackages(id: string | number): IBaseQuery<accessPackage> & accessPackageMethods;
	customWorkflowExtensions(): IBaseCollection<customCalloutExtension>;
	customWorkflowExtensions(id: string | number): IBaseQuery<customCalloutExtension> & customCalloutExtensionMethods;
	resourceRoles(): IBaseCollection<accessPackageResourceRole>;
	resourceRoles(id: string | number): IBaseQuery<accessPackageResourceRole> & accessPackageResourceRoleMethods;
	resources(): IBaseCollection<accessPackageResource>;
	resources(id: string | number): IBaseQuery<accessPackageResource> & accessPackageResourceMethods;
	resourceScopes(): IBaseCollection<accessPackageResourceScope>;
	resourceScopes(id: string | number): IBaseQuery<accessPackageResourceScope> & accessPackageResourceScopeMethods;
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
	externalSponsors(): IBaseCollection<directoryObject>;
	externalSponsors(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
	internalSponsors(): IBaseCollection<directoryObject>;
	internalSponsors(id: string | number): IBaseQuery<directoryObject> & directoryObjectMethods;
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
	resources(): IBaseCollection<accessPackageResource>;
	resources(id: string | number): IBaseQuery<accessPackageResource> & accessPackageResourceMethods;
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
	catalog(): IBaseQuery<accessPackageCatalog> & accessPackageCatalogMethods;
	resource(): IBaseQuery<accessPackageResource> & accessPackageResourceMethods;
}
/*********************************************
* accessPackageResourceRoleScope
**********************************************/
export interface accessPackageResourceRoleScope extends accessPackageResourceRoleScopeProps, accessPackageResourceRoleScopeMethods , entity { }
export interface accessPackageResourceRoleScopeProps {
	createdDateTime: any;
}
export interface accessPackageResourceRoleScopeMethods {
	role(): IBaseQuery<accessPackageResourceRole> & accessPackageResourceRoleMethods;
	scope(): IBaseQuery<accessPackageResourceScope> & accessPackageResourceScopeMethods;
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
	environment(): IBaseQuery<accessPackageResourceEnvironment> & accessPackageResourceEnvironmentMethods;
	roles(): IBaseCollection<accessPackageResourceRole>;
	roles(id: string | number): IBaseQuery<accessPackageResourceRole> & accessPackageResourceRoleMethods;
	scopes(): IBaseCollection<accessPackageResourceScope>;
	scopes(id: string | number): IBaseQuery<accessPackageResourceScope> & accessPackageResourceScopeMethods;
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
	assignmentApprovals(): IBaseCollection<approval>;
	assignmentApprovals(id: string | number): IBaseQuery<approval> & approvalMethods;
	assignmentScheduleInstances(): IBaseCollection<privilegedAccessGroupAssignmentScheduleInstance>;
	assignmentScheduleInstances(id: string | number): IBaseQuery<privilegedAccessGroupAssignmentScheduleInstance> & privilegedAccessGroupAssignmentScheduleInstanceMethods;
	assignmentScheduleRequests(): IBaseCollection<privilegedAccessGroupAssignmentScheduleRequest>;
	assignmentScheduleRequests(id: string | number): IBaseQuery<privilegedAccessGroupAssignmentScheduleRequest> & privilegedAccessGroupAssignmentScheduleRequestMethods;
	assignmentSchedules(): IBaseCollection<privilegedAccessGroupAssignmentSchedule>;
	assignmentSchedules(id: string | number): IBaseQuery<privilegedAccessGroupAssignmentSchedule> & privilegedAccessGroupAssignmentScheduleMethods;
	eligibilityScheduleInstances(): IBaseCollection<privilegedAccessGroupEligibilityScheduleInstance>;
	eligibilityScheduleInstances(id: string | number): IBaseQuery<privilegedAccessGroupEligibilityScheduleInstance> & privilegedAccessGroupEligibilityScheduleInstanceMethods;
	eligibilityScheduleRequests(): IBaseCollection<privilegedAccessGroupEligibilityScheduleRequest>;
	eligibilityScheduleRequests(id: string | number): IBaseQuery<privilegedAccessGroupEligibilityScheduleRequest> & privilegedAccessGroupEligibilityScheduleRequestMethods;
	eligibilitySchedules(): IBaseCollection<privilegedAccessGroupEligibilitySchedule>;
	eligibilitySchedules(id: string | number): IBaseQuery<privilegedAccessGroupEligibilitySchedule> & privilegedAccessGroupEligibilityScheduleMethods;
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
	activatedUsing(): IBaseQuery<privilegedAccessGroupEligibilityScheduleInstance> & privilegedAccessGroupEligibilityScheduleInstanceMethods;
	group(): IBaseQuery<group> & groupMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
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
	activatedUsing(): IBaseQuery<privilegedAccessGroupEligibilitySchedule> & privilegedAccessGroupEligibilityScheduleMethods;
	group(): IBaseQuery<group> & groupMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	targetSchedule(): IBaseQuery<privilegedAccessGroupEligibilitySchedule> & privilegedAccessGroupEligibilityScheduleMethods;
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
	activatedUsing(): IBaseQuery<privilegedAccessGroupEligibilitySchedule> & privilegedAccessGroupEligibilityScheduleMethods;
	group(): IBaseQuery<group> & groupMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
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
	group(): IBaseQuery<group> & groupMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
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
	group(): IBaseQuery<group> & groupMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
	targetSchedule(): IBaseQuery<privilegedAccessGroupEligibilitySchedule> & privilegedAccessGroupEligibilityScheduleMethods;
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
	group(): IBaseQuery<group> & groupMethods;
	principal(): IBaseQuery<directoryObject> & directoryObjectMethods;
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
	acceptances(): IBaseCollection<agreementAcceptance>;
	acceptances(id: string | number): IBaseQuery<agreementAcceptance> & agreementAcceptanceMethods;
	file(): IBaseQuery<agreementFile> & agreementFileMethods;
	files(): IBaseCollection<agreementFileLocalization>;
	files(id: string | number): IBaseQuery<agreementFileLocalization> & agreementFileLocalizationMethods;
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
	localizations(): IBaseCollection<agreementFileLocalization>;
	localizations(id: string | number): IBaseQuery<agreementFileLocalization> & agreementFileLocalizationMethods;
}
/*********************************************
* agreementFileLocalization
**********************************************/
export interface agreementFileLocalization extends agreementFileLocalizationProps, agreementFileLocalizationMethods , agreementFileProperties { }
export interface agreementFileLocalizationProps {

}
export interface agreementFileLocalizationMethods {
	versions(): IBaseCollection<agreementFileVersion>;
	versions(id: string | number): IBaseQuery<agreementFileVersion> & agreementFileVersionMethods;
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
	riskDetections(): IBaseCollection<riskDetection>;
	riskDetections(id: string | number): IBaseQuery<riskDetection> & riskDetectionMethods;
	riskyServicePrincipals(): IBaseCollection<riskyServicePrincipal>;
	riskyServicePrincipals(id: string | number): IBaseQuery<riskyServicePrincipal> & riskyServicePrincipalMethods;
	riskyUsers(): IBaseCollection<riskyUser>;
	riskyUsers(id: string | number): IBaseQuery<riskyUser> & riskyUserMethods;
	servicePrincipalRiskDetections(): IBaseCollection<servicePrincipalRiskDetection>;
	servicePrincipalRiskDetections(id: string | number): IBaseQuery<servicePrincipalRiskDetection> & servicePrincipalRiskDetectionMethods;
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
	history(): IBaseCollection<riskyServicePrincipalHistoryItem>;
	history(id: string | number): IBaseQuery<riskyServicePrincipalHistoryItem> & riskyServicePrincipalHistoryItemMethods;
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
	history(): IBaseCollection<riskyUserHistoryItem>;
	history(id: string | number): IBaseQuery<riskyUserHistoryItem> & riskyUserHistoryItemMethods;
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
	connectedOrganization(): IBaseQuery<connectedOrganization> & connectedOrganizationMethods;
}
/*********************************************
* customExtensionStageSetting
**********************************************/
export interface customExtensionStageSetting extends customExtensionStageSettingProps, customExtensionStageSettingMethods , entity { }
export interface customExtensionStageSettingProps {
	stage: EnumTypes.accessPackageCustomExtensionStage;
}
export interface customExtensionStageSettingMethods {
	customExtension(): IBaseQuery<customCalloutExtension> & customCalloutExtensionMethods;
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
	resource(): IBaseQuery<accessPackageResource> & accessPackageResourceMethods;
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
	resource(): IBaseQuery<accessPackageResource> & accessPackageResourceMethods;
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
	assignments(): IBaseCollection<mobileAppAssignment>;
	assignments(id: string | number): IBaseQuery<mobileAppAssignment> & mobileAppAssignmentMethods;
	categories(): IBaseCollection<mobileAppCategory>;
	categories(id: string | number): IBaseQuery<mobileAppCategory> & mobileAppCategoryMethods;
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
	contentVersions(): IBaseCollection<mobileAppContent>;
	contentVersions(id: string | number): IBaseQuery<mobileAppContent> & mobileAppContentMethods;
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
	managedEBooks(): IBaseCollection<managedEBook>;
	managedEBooks(id: string | number): IBaseQuery<managedEBook> & managedEBookMethods;
	mobileAppCategories(): IBaseCollection<mobileAppCategory>;
	mobileAppCategories(id: string | number): IBaseQuery<mobileAppCategory> & mobileAppCategoryMethods;
	mobileAppConfigurations(): IBaseCollection<managedDeviceMobileAppConfiguration>;
	mobileAppConfigurations(id: string | number): IBaseQuery<managedDeviceMobileAppConfiguration> & managedDeviceMobileAppConfigurationMethods;
	mobileApps(): IBaseCollection<mobileApp>;
	mobileApps(id: string | number): IBaseQuery<mobileApp> & mobileAppMethods;
	vppTokens(): IBaseCollection<vppToken>;
	vppTokens(id: string | number): IBaseQuery<vppToken> & vppTokenMethods;
	androidManagedAppProtections(): IBaseCollection<androidManagedAppProtection>;
	androidManagedAppProtections(id: string | number): IBaseQuery<androidManagedAppProtection> & androidManagedAppProtectionMethods;
	defaultManagedAppProtections(): IBaseCollection<defaultManagedAppProtection>;
	defaultManagedAppProtections(id: string | number): IBaseQuery<defaultManagedAppProtection> & defaultManagedAppProtectionMethods;
	iosManagedAppProtections(): IBaseCollection<iosManagedAppProtection>;
	iosManagedAppProtections(id: string | number): IBaseQuery<iosManagedAppProtection> & iosManagedAppProtectionMethods;
	managedAppPolicies(): IBaseCollection<managedAppPolicy>;
	managedAppPolicies(id: string | number): IBaseQuery<managedAppPolicy> & managedAppPolicyMethods;
	managedAppRegistrations(): IBaseCollection<managedAppRegistration>;
	managedAppRegistrations(id: string | number): IBaseQuery<managedAppRegistration> & managedAppRegistrationMethods;
	managedAppStatuses(): IBaseCollection<managedAppStatus>;
	managedAppStatuses(id: string | number): IBaseQuery<managedAppStatus> & managedAppStatusMethods;
	mdmWindowsInformationProtectionPolicies(): IBaseCollection<mdmWindowsInformationProtectionPolicy>;
	mdmWindowsInformationProtectionPolicies(id: string | number): IBaseQuery<mdmWindowsInformationProtectionPolicy> & mdmWindowsInformationProtectionPolicyMethods;
	targetedManagedAppConfigurations(): IBaseCollection<targetedManagedAppConfiguration>;
	targetedManagedAppConfigurations(id: string | number): IBaseQuery<targetedManagedAppConfiguration> & targetedManagedAppConfigurationMethods;
	windowsInformationProtectionPolicies(): IBaseCollection<windowsInformationProtectionPolicy>;
	windowsInformationProtectionPolicies(id: string | number): IBaseQuery<windowsInformationProtectionPolicy> & windowsInformationProtectionPolicyMethods;
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
	assignments(): IBaseCollection<managedEBookAssignment>;
	assignments(id: string | number): IBaseQuery<managedEBookAssignment> & managedEBookAssignmentMethods;
	deviceStates(): IBaseCollection<deviceInstallState>;
	deviceStates(id: string | number): IBaseQuery<deviceInstallState> & deviceInstallStateMethods;
	installSummary(): IBaseQuery<eBookInstallSummary> & eBookInstallSummaryMethods;
	userStateSummary(): IBaseCollection<userInstallStateSummary>;
	userStateSummary(id: string | number): IBaseQuery<userInstallStateSummary> & userInstallStateSummaryMethods;
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
	assignments(): IBaseCollection<managedDeviceMobileAppConfigurationAssignment>;
	assignments(id: string | number): IBaseQuery<managedDeviceMobileAppConfigurationAssignment> & managedDeviceMobileAppConfigurationAssignmentMethods;
	deviceStatuses(): IBaseCollection<managedDeviceMobileAppConfigurationDeviceStatus>;
	deviceStatuses(id: string | number): IBaseQuery<managedDeviceMobileAppConfigurationDeviceStatus> & managedDeviceMobileAppConfigurationDeviceStatusMethods;
	deviceStatusSummary(): IBaseQuery<managedDeviceMobileAppConfigurationDeviceSummary> & managedDeviceMobileAppConfigurationDeviceSummaryMethods;
	userStatuses(): IBaseCollection<managedDeviceMobileAppConfigurationUserStatus>;
	userStatuses(id: string | number): IBaseQuery<managedDeviceMobileAppConfigurationUserStatus> & managedDeviceMobileAppConfigurationUserStatusMethods;
	userStatusSummary(): IBaseQuery<managedDeviceMobileAppConfigurationUserSummary> & managedDeviceMobileAppConfigurationUserSummaryMethods;
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
	assignments(): IBaseCollection<targetedManagedAppPolicyAssignment>;
	assignments(id: string | number): IBaseQuery<targetedManagedAppPolicyAssignment> & targetedManagedAppPolicyAssignmentMethods;
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
	apps(): IBaseCollection<managedMobileApp>;
	apps(id: string | number): IBaseQuery<managedMobileApp> & managedMobileAppMethods;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary> & managedAppPolicyDeploymentSummaryMethods;
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
	apps(): IBaseCollection<managedMobileApp>;
	apps(id: string | number): IBaseQuery<managedMobileApp> & managedMobileAppMethods;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary> & managedAppPolicyDeploymentSummaryMethods;
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
	apps(): IBaseCollection<managedMobileApp>;
	apps(id: string | number): IBaseQuery<managedMobileApp> & managedMobileAppMethods;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary> & managedAppPolicyDeploymentSummaryMethods;
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
	assignments(): IBaseCollection<targetedManagedAppPolicyAssignment>;
	assignments(id: string | number): IBaseQuery<targetedManagedAppPolicyAssignment> & targetedManagedAppPolicyAssignmentMethods;
	exemptAppLockerFiles(): IBaseCollection<windowsInformationProtectionAppLockerFile>;
	exemptAppLockerFiles(id: string | number): IBaseQuery<windowsInformationProtectionAppLockerFile> & windowsInformationProtectionAppLockerFileMethods;
	protectedAppLockerFiles(): IBaseCollection<windowsInformationProtectionAppLockerFile>;
	protectedAppLockerFiles(id: string | number): IBaseQuery<windowsInformationProtectionAppLockerFile> & windowsInformationProtectionAppLockerFileMethods;
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
	apps(): IBaseCollection<managedMobileApp>;
	apps(id: string | number): IBaseQuery<managedMobileApp> & managedMobileAppMethods;
	assignments(): IBaseCollection<targetedManagedAppPolicyAssignment>;
	assignments(id: string | number): IBaseQuery<targetedManagedAppPolicyAssignment> & targetedManagedAppPolicyAssignmentMethods;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary> & managedAppPolicyDeploymentSummaryMethods;
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
	contentVersions(): IBaseCollection<mobileAppContent>;
	contentVersions(id: string | number): IBaseQuery<mobileAppContent> & mobileAppContentMethods;
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
	containedApps(): IBaseCollection<mobileContainedApp>;
	containedApps(id: string | number): IBaseQuery<mobileContainedApp> & mobileContainedAppMethods;
	files(): IBaseCollection<mobileAppContentFile>;
	files(id: string | number): IBaseQuery<mobileAppContentFile> & mobileAppContentFileMethods;
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
	committedContainedApps(): IBaseCollection<mobileContainedApp>;
	committedContainedApps(id: string | number): IBaseQuery<mobileContainedApp> & mobileContainedAppMethods;
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
	deviceStates(): IBaseCollection<deviceInstallState>;
	deviceStates(id: string | number): IBaseQuery<deviceInstallState> & deviceInstallStateMethods;
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
	termsAndConditions(): IBaseQuery<termsAndConditions> & termsAndConditionsMethods;
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
	scheduledActionConfigurations(): IBaseCollection<deviceComplianceActionItem>;
	scheduledActionConfigurations(id: string | number): IBaseQuery<deviceComplianceActionItem> & deviceComplianceActionItemMethods;
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
	detectedMalwareState(): IBaseCollection<windowsDeviceMalwareState>;
	detectedMalwareState(id: string | number): IBaseQuery<windowsDeviceMalwareState> & windowsDeviceMalwareStateMethods;
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
	deviceIdentities(): IBaseCollection<importedWindowsAutopilotDeviceIdentity>;
	deviceIdentities(id: string | number): IBaseQuery<importedWindowsAutopilotDeviceIdentity> & importedWindowsAutopilotDeviceIdentityMethods;
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
	assignedDevices(): IBaseCollection<windowsAutopilotDeviceIdentity>;
	assignedDevices(id: string | number): IBaseQuery<windowsAutopilotDeviceIdentity> & windowsAutopilotDeviceIdentityMethods;
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
	issues(): IBaseCollection<serviceHealthIssue>;
	issues(id: string | number): IBaseQuery<serviceHealthIssue> & serviceHealthIssueMethods;
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
	attachments(): IBaseCollection<serviceAnnouncementAttachment>;
	attachments(id: string | number): IBaseQuery<serviceAnnouncementAttachment> & serviceAnnouncementAttachmentMethods;
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
	acronyms(): IBaseCollection<acronym>;
	acronyms(id: string | number): IBaseQuery<acronym> & acronymMethods;
	bookmarks(): IBaseCollection<bookmark>;
	bookmarks(id: string | number): IBaseQuery<bookmark> & bookmarkMethods;
	qnas(): IBaseCollection<qna>;
	qnas(id: string | number): IBaseQuery<qna> & qnaMethods;
}
/*********************************************
* planner
**********************************************/
export interface planner extends plannerProps, plannerMethods , entity { }
export interface plannerProps {

}
export interface plannerMethods {
	buckets(): IBaseCollection<plannerBucket>;
	buckets(id: string | number): IBaseQuery<plannerBucket> & plannerBucketMethods;
	plans(): IBaseCollection<plannerPlan>;
	plans(id: string | number): IBaseQuery<plannerPlan> & plannerPlanMethods;
	tasks(): IBaseCollection<plannerTask>;
	tasks(id: string | number): IBaseQuery<plannerTask> & plannerTaskMethods;
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
	tasks(): IBaseCollection<plannerTask>;
	tasks(id: string | number): IBaseQuery<plannerTask> & plannerTaskMethods;
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
	buckets(): IBaseCollection<plannerBucket>;
	buckets(id: string | number): IBaseQuery<plannerBucket> & plannerBucketMethods;
	details(): IBaseQuery<plannerPlanDetails> & plannerPlanDetailsMethods;
	tasks(): IBaseCollection<plannerTask>;
	tasks(id: string | number): IBaseQuery<plannerTask> & plannerTaskMethods;
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
	assignedToTaskBoardFormat(): IBaseQuery<plannerAssignedToTaskBoardTaskFormat> & plannerAssignedToTaskBoardTaskFormatMethods;
	bucketTaskBoardFormat(): IBaseQuery<plannerBucketTaskBoardTaskFormat> & plannerBucketTaskBoardTaskFormatMethods;
	details(): IBaseQuery<plannerTaskDetails> & plannerTaskDetailsMethods;
	progressTaskBoardFormat(): IBaseQuery<plannerProgressTaskBoardTaskFormat> & plannerProgressTaskBoardTaskFormatMethods;
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
	lastSharedMethod(): IBaseQuery<entity> & entityMethods;
	resource(): IBaseQuery<entity> & entityMethods;
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
	resource(): IBaseQuery<entity> & entityMethods;
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
	resource(): IBaseQuery<entity> & entityMethods;
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
	instances(): IBaseCollection<windowsSettingInstance>;
	instances(id: string | number): IBaseQuery<windowsSettingInstance> & windowsSettingInstanceMethods;
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
	quota(): IBaseQuery<unifiedStorageQuota> & unifiedStorageQuotaMethods;
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
	sectionGroups(): IBaseCollection<sectionGroup>;
	sectionGroups(id: string | number): IBaseQuery<sectionGroup> & sectionGroupMethods;
	sections(): IBaseCollection<onenoteSection>;
	sections(id: string | number): IBaseQuery<onenoteSection> & onenoteSectionMethods;
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
	parentNotebook(): IBaseQuery<notebook> & notebookMethods;
	parentSectionGroup(): IBaseQuery<sectionGroup> & sectionGroupMethods;
	sectionGroups(): IBaseCollection<sectionGroup>;
	sectionGroups(id: string | number): IBaseQuery<sectionGroup> & sectionGroupMethods;
	sections(): IBaseCollection<onenoteSection>;
	sections(id: string | number): IBaseQuery<onenoteSection> & onenoteSectionMethods;
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
	pages(): IBaseCollection<onenotePage>;
	pages(id: string | number): IBaseQuery<onenotePage> & onenotePageMethods;
	parentNotebook(): IBaseQuery<notebook> & notebookMethods;
	parentSectionGroup(): IBaseQuery<sectionGroup> & sectionGroupMethods;
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
	parentNotebook(): IBaseQuery<notebook> & notebookMethods;
	parentSection(): IBaseQuery<onenoteSection> & onenoteSectionMethods;
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
	jobs(): IBaseCollection<printJob>;
	jobs(id: string | number): IBaseQuery<printJob> & printJobMethods;
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
	allowedGroups(): IBaseCollection<group>;
	allowedGroups(id: string | number): IBaseQuery<group> & groupMethods;
	allowedUsers(): IBaseCollection<user>;
	allowedUsers(id: string | number): IBaseQuery<user> & userMethods;
	printer(): IBaseQuery<printer> & printerMethods;
}
/*********************************************
* print
**********************************************/
export interface print extends printProps, printMethods  { }
export interface printProps {
	settings: ComplexTypes.printSettings;
}
export interface printMethods {
	connectors(): IBaseCollection<printConnector>;
	connectors(id: string | number): IBaseQuery<printConnector> & printConnectorMethods;
	operations(): IBaseCollection<printOperation>;
	operations(id: string | number): IBaseQuery<printOperation> & printOperationMethods;
	printers(): IBaseCollection<printer>;
	printers(id: string | number): IBaseQuery<printer> & printerMethods;
	services(): IBaseCollection<printService>;
	services(id: string | number): IBaseQuery<printService> & printServiceMethods;
	shares(): IBaseCollection<printerShare>;
	shares(id: string | number): IBaseQuery<printerShare> & printerShareMethods;
	taskDefinitions(): IBaseCollection<printTaskDefinition>;
	taskDefinitions(id: string | number): IBaseQuery<printTaskDefinition> & printTaskDefinitionMethods;
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
	connectors(): IBaseCollection<printConnector>;
	connectors(id: string | number): IBaseQuery<printConnector> & printConnectorMethods;
	shares(): IBaseCollection<printerShare>;
	shares(id: string | number): IBaseQuery<printerShare> & printerShareMethods;
	taskTriggers(): IBaseCollection<printTaskTrigger>;
	taskTriggers(id: string | number): IBaseQuery<printTaskTrigger> & printTaskTriggerMethods;
}
/*********************************************
* printService
**********************************************/
export interface printService extends printServiceProps, printServiceMethods , entity { }
export interface printServiceProps {

}
export interface printServiceMethods {
	endpoints(): IBaseCollection<printServiceEndpoint>;
	endpoints(id: string | number): IBaseQuery<printServiceEndpoint> & printServiceEndpointMethods;
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
	tasks(): IBaseCollection<printTask>;
	tasks(id: string | number): IBaseQuery<printTask> & printTaskMethods;
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
	definition(): IBaseQuery<printTaskDefinition> & printTaskDefinitionMethods;
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
	documents(): IBaseCollection<printDocument>;
	documents(id: string | number): IBaseQuery<printDocument> & printDocumentMethods;
	tasks(): IBaseCollection<printTask>;
	tasks(id: string | number): IBaseQuery<printTask> & printTaskMethods;
}
/*********************************************
* printerCreateOperation
**********************************************/
export interface printerCreateOperation extends printerCreateOperationProps, printerCreateOperationMethods , printOperation { }
export interface printerCreateOperationProps {
	certificate: string;
}
export interface printerCreateOperationMethods {
	printer(): IBaseQuery<printer> & printerMethods;
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
	definition(): IBaseQuery<printTaskDefinition> & printTaskDefinitionMethods;
	trigger(): IBaseQuery<printTaskTrigger> & printTaskTriggerMethods;
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
	activity(): IBaseQuery<userActivity> & userActivityMethods;
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
	details(): IBaseCollection<endUserNotificationDetail>;
	details(id: string | number): IBaseQuery<endUserNotificationDetail> & endUserNotificationDetailMethods;
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
	languageDetails(): IBaseCollection<trainingLanguageDetail>;
	languageDetails(id: string | number): IBaseQuery<trainingLanguageDetail> & trainingLanguageDetailMethods;
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
	details(): IBaseCollection<landingPageDetail>;
	details(id: string | number): IBaseQuery<landingPageDetail> & landingPageDetailMethods;
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
	runs(): IBaseCollection<simulationAutomationRun>;
	runs(id: string | number): IBaseQuery<simulationAutomationRun> & simulationAutomationRunMethods;
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
	landingPage(): IBaseQuery<landingPage> & landingPageMethods;
	loginPage(): IBaseQuery<loginPage> & loginPageMethods;
	payload(): IBaseQuery<payload> & payloadMethods;
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
	participants(): IBaseCollection<participant>;
	participants(id: string | number): IBaseQuery<participant> & participantMethods;
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
	attendanceRecords(): IBaseCollection<attendanceRecord>;
	attendanceRecords(id: string | number): IBaseQuery<attendanceRecord> & attendanceRecordMethods;
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
	call(): IBaseQuery<call> & callMethods;
}
/*********************************************
* participantLeftNotification
**********************************************/
export interface participantLeftNotification extends participantLeftNotificationProps, participantLeftNotificationMethods , entity { }
export interface participantLeftNotificationProps {
	participantId: string;
}
export interface participantLeftNotificationMethods {
	call(): IBaseQuery<call> & callMethods;
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
	presenters(): IBaseCollection<virtualEventPresenter>;
	presenters(id: string | number): IBaseQuery<virtualEventPresenter> & virtualEventPresenterMethods;
	sessions(): IBaseCollection<virtualEventSession>;
	sessions(id: string | number): IBaseQuery<virtualEventSession> & virtualEventSessionMethods;
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
	sessions(): IBaseCollection<virtualEventSession>;
	sessions(id: string | number): IBaseQuery<virtualEventSession> & virtualEventSessionMethods;
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
	questions(): IBaseCollection<virtualEventRegistrationQuestionBase>;
	questions(id: string | number): IBaseQuery<virtualEventRegistrationQuestionBase> & virtualEventRegistrationQuestionBaseMethods;
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
	registrationConfiguration(): IBaseQuery<virtualEventWebinarRegistrationConfiguration> & virtualEventWebinarRegistrationConfigurationMethods;
	registrations(): IBaseCollection<virtualEventRegistration>;
	registrations(id: string | number): IBaseQuery<virtualEventRegistration> & virtualEventRegistrationMethods;
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
	device(): IBaseQuery<device> & deviceMethods;
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
	device(): IBaseQuery<device> & deviceMethods;
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
	user(): IBaseQuery<user> & userMethods;
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
	teamsApps(): IBaseCollection<teamsApp>;
	teamsApps(id: string | number): IBaseQuery<teamsApp> & teamsAppMethods;
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
	appDefinitions(): IBaseCollection<teamsAppDefinition>;
	appDefinitions(id: string | number): IBaseQuery<teamsAppDefinition> & teamsAppDefinitionMethods;
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
	team(): IBaseQuery<team> & teamMethods;
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
	hostedContents(): IBaseCollection<chatMessageHostedContent>;
	hostedContents(id: string | number): IBaseQuery<chatMessageHostedContent> & chatMessageHostedContentMethods;
	replies(): IBaseCollection<chatMessage>;
	replies(id: string | number): IBaseQuery<chatMessage> & chatMessageMethods;
}
/*********************************************
* sharedWithChannelTeamInfo
**********************************************/
export interface sharedWithChannelTeamInfo extends sharedWithChannelTeamInfoProps, sharedWithChannelTeamInfoMethods , teamInfo { }
export interface sharedWithChannelTeamInfoProps {
	isHostTeam: boolean;
}
export interface sharedWithChannelTeamInfoMethods {
	allowedMembers(): IBaseCollection<conversationMember>;
	allowedMembers(id: string | number): IBaseQuery<conversationMember> & conversationMemberMethods;
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
	teamsApp(): IBaseQuery<teamsApp> & teamsAppMethods;
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
	message(): IBaseQuery<chatMessage> & chatMessageMethods;
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
	channels(): IBaseCollection<channel>;
	channels(id: string | number): IBaseQuery<channel> & channelMethods;
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
	bot(): IBaseQuery<teamworkBot> & teamworkBotMethods;
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
	workforceIntegrations(): IBaseCollection<workforceIntegration>;
	workforceIntegrations(id: string | number): IBaseQuery<workforceIntegration> & workforceIntegrationMethods;
	deletedChats(): IBaseCollection<deletedChat>;
	deletedChats(id: string | number): IBaseQuery<deletedChat> & deletedChatMethods;
	deletedTeams(): IBaseCollection<deletedTeam>;
	deletedTeams(id: string | number): IBaseQuery<deletedTeam> & deletedTeamMethods;
	teamsAppSettings(): IBaseQuery<teamsAppSettings> & teamsAppSettingsMethods;
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
	chat(): IBaseQuery<chat> & chatMethods;
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
	extensions(): IBaseCollection<extension>;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	tasks(): IBaseCollection<todoTask>;
	tasks(id: string | number): IBaseQuery<todoTask> & todoTaskMethods;
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
	attachments(): IBaseCollection<attachmentBase>;
	attachments(id: string | number): IBaseQuery<attachmentBase> & attachmentBaseMethods;
	attachmentSessions(): IBaseCollection<attachmentSession>;
	attachmentSessions(id: string | number): IBaseQuery<attachmentSession> & attachmentSessionMethods;
	checklistItems(): IBaseCollection<checklistItem>;
	checklistItems(id: string | number): IBaseQuery<checklistItem> & checklistItemMethods;
	extensions(): IBaseCollection<extension>;
	extensions(id: string | number): IBaseQuery<extension> & extensionMethods;
	linkedResources(): IBaseCollection<linkedResource>;
	linkedResources(id: string | number): IBaseQuery<linkedResource> & linkedResourceMethods;
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
	services(): IBaseCollection<serviceStorageQuotaBreakdown>;
	services(id: string | number): IBaseQuery<serviceStorageQuotaBreakdown> & serviceStorageQuotaBreakdownMethods;
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
	group(): IBaseQuery<group> & groupMethods;
	owners(): IBaseCollection<user>;
	owners(id: string | number): IBaseQuery<user> & userMethods;
}
/*********************************************
* employeeExperience
**********************************************/
export interface employeeExperience extends employeeExperienceProps, employeeExperienceMethods  { }
export interface employeeExperienceProps {

}
export interface employeeExperienceMethods {
	communities(): IBaseCollection<community>;
	communities(id: string | number): IBaseQuery<community> & communityMethods;
	engagementAsyncOperations(): IBaseCollection<engagementAsyncOperation>;
	engagementAsyncOperations(id: string | number): IBaseQuery<engagementAsyncOperation> & engagementAsyncOperationMethods;
	learningCourseActivities(): IBaseCollection<learningCourseActivity>;
	learningCourseActivities(id: string | number): IBaseQuery<learningCourseActivity> & learningCourseActivityMethods;
	learningProviders(): IBaseCollection<learningProvider>;
	learningProviders(id: string | number): IBaseQuery<learningProvider> & learningProviderMethods;
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
	learningContents(): IBaseCollection<learningContent>;
	learningContents(id: string | number): IBaseQuery<learningContent> & learningContentMethods;
	learningCourseActivities(): IBaseCollection<learningCourseActivity>;
	learningCourseActivities(id: string | number): IBaseQuery<learningCourseActivity> & learningCourseActivityMethods;
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
	ediscoveryCases(): IBaseCollection<ediscoveryCase>;
	ediscoveryCases(id: string | number): IBaseQuery<ediscoveryCase> & ediscoveryCaseMethods;
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
	alerts(): IBaseCollection<alert>;
	alerts(id: string | number): IBaseQuery<alert> & alertMethods;
}
/*********************************************
* labelsRoot
**********************************************/
export interface labelsRoot extends labelsRootProps, labelsRootMethods , entity { }
export interface labelsRootProps {

}
export interface labelsRootMethods {
	authorities(): IBaseCollection<authorityTemplate>;
	authorities(id: string | number): IBaseQuery<authorityTemplate> & authorityTemplateMethods;
	categories(): IBaseCollection<categoryTemplate>;
	categories(id: string | number): IBaseQuery<categoryTemplate> & categoryTemplateMethods;
	citations(): IBaseCollection<citationTemplate>;
	citations(id: string | number): IBaseQuery<citationTemplate> & citationTemplateMethods;
	departments(): IBaseCollection<departmentTemplate>;
	departments(id: string | number): IBaseQuery<departmentTemplate> & departmentTemplateMethods;
	filePlanReferences(): IBaseCollection<filePlanReferenceTemplate>;
	filePlanReferences(id: string | number): IBaseQuery<filePlanReferenceTemplate> & filePlanReferenceTemplateMethods;
	retentionLabels(): IBaseCollection<retentionLabel>;
	retentionLabels(id: string | number): IBaseQuery<retentionLabel> & retentionLabelMethods;
}
/*********************************************
* triggersRoot
**********************************************/
export interface triggersRoot extends triggersRootProps, triggersRootMethods , entity { }
export interface triggersRootProps {

}
export interface triggersRootMethods {
	retentionEvents(): IBaseCollection<retentionEvent>;
	retentionEvents(id: string | number): IBaseQuery<retentionEvent> & retentionEventMethods;
}
/*********************************************
* triggerTypesRoot
**********************************************/
export interface triggerTypesRoot extends triggerTypesRootProps, triggerTypesRootMethods , entity { }
export interface triggerTypesRootProps {

}
export interface triggerTypesRootMethods {
	retentionEventTypes(): IBaseCollection<retentionEventType>;
	retentionEventTypes(id: string | number): IBaseQuery<retentionEventType> & retentionEventTypeMethods;
}
/*********************************************
* threatIntelligence
**********************************************/
export interface threatIntelligence extends threatIntelligenceProps, threatIntelligenceMethods , entity { }
export interface threatIntelligenceProps {

}
export interface threatIntelligenceMethods {
	articleIndicators(): IBaseCollection<articleIndicator>;
	articleIndicators(id: string | number): IBaseQuery<articleIndicator> & articleIndicatorMethods;
	articles(): IBaseCollection<article>;
	articles(id: string | number): IBaseQuery<article> & articleMethods;
	hostComponents(): IBaseCollection<hostComponent>;
	hostComponents(id: string | number): IBaseQuery<hostComponent> & hostComponentMethods;
	hostCookies(): IBaseCollection<hostCookie>;
	hostCookies(id: string | number): IBaseQuery<hostCookie> & hostCookieMethods;
	hostPairs(): IBaseCollection<hostPair>;
	hostPairs(id: string | number): IBaseQuery<hostPair> & hostPairMethods;
	hostPorts(): IBaseCollection<hostPort>;
	hostPorts(id: string | number): IBaseQuery<hostPort> & hostPortMethods;
	hosts(): IBaseCollection<host>;
	hosts(id: string | number): IBaseQuery<host> & hostMethods;
	hostSslCertificates(): IBaseCollection<hostSslCertificate>;
	hostSslCertificates(id: string | number): IBaseQuery<hostSslCertificate> & hostSslCertificateMethods;
	hostTrackers(): IBaseCollection<hostTracker>;
	hostTrackers(id: string | number): IBaseQuery<hostTracker> & hostTrackerMethods;
	intelligenceProfileIndicators(): IBaseCollection<intelligenceProfileIndicator>;
	intelligenceProfileIndicators(id: string | number): IBaseQuery<intelligenceProfileIndicator> & intelligenceProfileIndicatorMethods;
	intelProfiles(): IBaseCollection<intelligenceProfile>;
	intelProfiles(id: string | number): IBaseQuery<intelligenceProfile> & intelligenceProfileMethods;
	passiveDnsRecords(): IBaseCollection<passiveDnsRecord>;
	passiveDnsRecords(id: string | number): IBaseQuery<passiveDnsRecord> & passiveDnsRecordMethods;
	sslCertificates(): IBaseCollection<sslCertificate>;
	sslCertificates(id: string | number): IBaseQuery<sslCertificate> & sslCertificateMethods;
	subdomains(): IBaseCollection<subdomain>;
	subdomains(id: string | number): IBaseQuery<subdomain> & subdomainMethods;
	vulnerabilities(): IBaseCollection<vulnerability>;
	vulnerabilities(id: string | number): IBaseQuery<vulnerability> & vulnerabilityMethods;
	whoisHistoryRecords(): IBaseCollection<whoisHistoryRecord>;
	whoisHistoryRecords(id: string | number): IBaseQuery<whoisHistoryRecord> & whoisHistoryRecordMethods;
	whoisRecords(): IBaseCollection<whoisRecord>;
	whoisRecords(id: string | number): IBaseQuery<whoisRecord> & whoisRecordMethods;
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
	custodians(): IBaseCollection<ediscoveryCustodian>;
	custodians(id: string | number): IBaseQuery<ediscoveryCustodian> & ediscoveryCustodianMethods;
	noncustodialDataSources(): IBaseCollection<ediscoveryNoncustodialDataSource>;
	noncustodialDataSources(id: string | number): IBaseQuery<ediscoveryNoncustodialDataSource> & ediscoveryNoncustodialDataSourceMethods;
	operations(): IBaseCollection<caseOperation>;
	operations(id: string | number): IBaseQuery<caseOperation> & caseOperationMethods;
	reviewSets(): IBaseCollection<ediscoveryReviewSet>;
	reviewSets(id: string | number): IBaseQuery<ediscoveryReviewSet> & ediscoveryReviewSetMethods;
	searches(): IBaseCollection<ediscoverySearch>;
	searches(id: string | number): IBaseQuery<ediscoverySearch> & ediscoverySearchMethods;
	settings(): IBaseQuery<ediscoveryCaseSettings> & ediscoveryCaseSettingsMethods;
	tags(): IBaseCollection<ediscoveryReviewTag>;
	tags(id: string | number): IBaseQuery<ediscoveryReviewTag> & ediscoveryReviewTagMethods;
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
	reviewSet(): IBaseQuery<ediscoveryReviewSet> & ediscoveryReviewSetMethods;
	search(): IBaseQuery<ediscoverySearch> & ediscoverySearchMethods;
}
/*********************************************
* ediscoveryReviewSet
**********************************************/
export interface ediscoveryReviewSet extends ediscoveryReviewSetProps, ediscoveryReviewSetMethods , dataSet { }
export interface ediscoveryReviewSetProps {

}
export interface ediscoveryReviewSetMethods {
	queries(): IBaseCollection<ediscoveryReviewSetQuery>;
	queries(id: string | number): IBaseQuery<ediscoveryReviewSetQuery> & ediscoveryReviewSetQueryMethods;
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
	additionalSources(): IBaseCollection<dataSource>;
	additionalSources(id: string | number): IBaseQuery<dataSource> & dataSourceMethods;
	addToReviewSetOperation(): IBaseQuery<ediscoveryAddToReviewSetOperation> & ediscoveryAddToReviewSetOperationMethods;
	custodianSources(): IBaseCollection<dataSource>;
	custodianSources(id: string | number): IBaseQuery<dataSource> & dataSourceMethods;
	lastEstimateStatisticsOperation(): IBaseQuery<ediscoveryEstimateOperation> & ediscoveryEstimateOperationMethods;
	noncustodialSources(): IBaseCollection<ediscoveryNoncustodialDataSource>;
	noncustodialSources(id: string | number): IBaseQuery<ediscoveryNoncustodialDataSource> & ediscoveryNoncustodialDataSourceMethods;
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
	lastIndexOperation(): IBaseQuery<ediscoveryIndexOperation> & ediscoveryIndexOperationMethods;
	siteSources(): IBaseCollection<siteSource>;
	siteSources(id: string | number): IBaseQuery<siteSource> & siteSourceMethods;
	unifiedGroupSources(): IBaseCollection<unifiedGroupSource>;
	unifiedGroupSources(id: string | number): IBaseQuery<unifiedGroupSource> & unifiedGroupSourceMethods;
	userSources(): IBaseCollection<userSource>;
	userSources(id: string | number): IBaseQuery<userSource> & userSourceMethods;
}
/*********************************************
* ediscoveryNoncustodialDataSource
**********************************************/
export interface ediscoveryNoncustodialDataSource extends ediscoveryNoncustodialDataSourceProps, ediscoveryNoncustodialDataSourceMethods , dataSourceContainer { }
export interface ediscoveryNoncustodialDataSourceProps {

}
export interface ediscoveryNoncustodialDataSourceMethods {
	dataSource(): IBaseQuery<dataSource> & dataSourceMethods;
	lastIndexOperation(): IBaseQuery<ediscoveryIndexOperation> & ediscoveryIndexOperationMethods;
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
	childTags(): IBaseCollection<ediscoveryReviewTag>;
	childTags(id: string | number): IBaseQuery<ediscoveryReviewTag> & ediscoveryReviewTagMethods;
	parent(): IBaseQuery<ediscoveryReviewTag> & ediscoveryReviewTagMethods;
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
	site(): IBaseQuery<site> & siteMethods;
}
/*********************************************
* unifiedGroupSource
**********************************************/
export interface unifiedGroupSource extends unifiedGroupSourceProps, unifiedGroupSourceMethods , dataSource { }
export interface unifiedGroupSourceProps {
	includedSources: EnumTypes.sourceType;
}
export interface unifiedGroupSourceMethods {
	group(): IBaseQuery<group> & groupMethods;
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
	search(): IBaseQuery<ediscoverySearch> & ediscoverySearchMethods;
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
	reviewSet(): IBaseQuery<ediscoveryReviewSet> & ediscoveryReviewSetMethods;
	reviewSetQuery(): IBaseQuery<ediscoveryReviewSetQuery> & ediscoveryReviewSetQueryMethods;
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
	search(): IBaseQuery<ediscoverySearch> & ediscoverySearchMethods;
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
	healthIssues(): IBaseCollection<healthIssue>;
	healthIssues(id: string | number): IBaseQuery<healthIssue> & healthIssueMethods;
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
	subcategories(): IBaseCollection<subcategoryTemplate>;
	subcategories(id: string | number): IBaseQuery<subcategoryTemplate> & subcategoryTemplateMethods;
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
	authorityTemplate(): IBaseQuery<authorityTemplate> & authorityTemplateMethods;
	categoryTemplate(): IBaseQuery<categoryTemplate> & categoryTemplateMethods;
	citationTemplate(): IBaseQuery<citationTemplate> & citationTemplateMethods;
	departmentTemplate(): IBaseQuery<departmentTemplate> & departmentTemplateMethods;
	filePlanReferenceTemplate(): IBaseQuery<filePlanReferenceTemplate> & filePlanReferenceTemplateMethods;
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
	descriptors(): IBaseQuery<filePlanDescriptor> & filePlanDescriptorMethods;
	dispositionReviewStages(): IBaseCollection<dispositionReviewStage>;
	dispositionReviewStages(id: string | number): IBaseQuery<dispositionReviewStage> & dispositionReviewStageMethods;
	retentionEventType(): IBaseQuery<retentionEventType> & retentionEventTypeMethods;
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
	retentionEventType(): IBaseQuery<retentionEventType> & retentionEventTypeMethods;
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
	host(): IBaseQuery<host> & hostMethods;
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
	childHostPairs(): IBaseCollection<hostPair>;
	childHostPairs(id: string | number): IBaseQuery<hostPair> & hostPairMethods;
	components(): IBaseCollection<hostComponent>;
	components(id: string | number): IBaseQuery<hostComponent> & hostComponentMethods;
	cookies(): IBaseCollection<hostCookie>;
	cookies(id: string | number): IBaseQuery<hostCookie> & hostCookieMethods;
	hostPairs(): IBaseCollection<hostPair>;
	hostPairs(id: string | number): IBaseQuery<hostPair> & hostPairMethods;
	parentHostPairs(): IBaseCollection<hostPair>;
	parentHostPairs(id: string | number): IBaseQuery<hostPair> & hostPairMethods;
	passiveDns(): IBaseCollection<passiveDnsRecord>;
	passiveDns(id: string | number): IBaseQuery<passiveDnsRecord> & passiveDnsRecordMethods;
	passiveDnsReverse(): IBaseCollection<passiveDnsRecord>;
	passiveDnsReverse(id: string | number): IBaseQuery<passiveDnsRecord> & passiveDnsRecordMethods;
	ports(): IBaseCollection<hostPort>;
	ports(id: string | number): IBaseQuery<hostPort> & hostPortMethods;
	reputation(): IBaseQuery<hostReputation> & hostReputationMethods;
	sslCertificates(): IBaseCollection<hostSslCertificate>;
	sslCertificates(id: string | number): IBaseQuery<hostSslCertificate> & hostSslCertificateMethods;
	subdomains(): IBaseCollection<subdomain>;
	subdomains(id: string | number): IBaseQuery<subdomain> & subdomainMethods;
	trackers(): IBaseCollection<hostTracker>;
	trackers(id: string | number): IBaseQuery<hostTracker> & hostTrackerMethods;
	whois(): IBaseQuery<whoisRecord> & whoisRecordMethods;
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
	indicators(): IBaseCollection<articleIndicator>;
	indicators(id: string | number): IBaseQuery<articleIndicator> & articleIndicatorMethods;
}
/*********************************************
* indicator
**********************************************/
export interface indicator extends indicatorProps, indicatorMethods , entity { }
export interface indicatorProps {
	source: EnumTypes.indicatorSource;
}
export interface indicatorMethods {
	artifact(): IBaseQuery<artifact> & artifactMethods;
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
	childHost(): IBaseQuery<host> & hostMethods;
	parentHost(): IBaseQuery<host> & hostMethods;
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
	host(): IBaseQuery<host> & hostMethods;
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
	artifact(): IBaseQuery<artifact> & artifactMethods;
	parentHost(): IBaseQuery<host> & hostMethods;
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
	host(): IBaseQuery<host> & hostMethods;
	mostRecentSslCertificate(): IBaseQuery<sslCertificate> & sslCertificateMethods;
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
	host(): IBaseQuery<host> & hostMethods;
	sslCertificate(): IBaseQuery<sslCertificate> & sslCertificateMethods;
}
/*********************************************
* subdomain
**********************************************/
export interface subdomain extends subdomainProps, subdomainMethods , entity { }
export interface subdomainProps {
	firstSeenDateTime: any;
}
export interface subdomainMethods {
	host(): IBaseQuery<host> & hostMethods;
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
	host(): IBaseQuery<host> & hostMethods;
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
	host(): IBaseQuery<host> & hostMethods;
}
/*********************************************
* whoisRecord
**********************************************/
export interface whoisRecord extends whoisRecordProps, whoisRecordMethods , whoisBaseRecord { }
export interface whoisRecordProps {

}
export interface whoisRecordMethods {
	history(): IBaseCollection<whoisHistoryRecord>;
	history(id: string | number): IBaseQuery<whoisHistoryRecord> & whoisHistoryRecordMethods;
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
	relatedHosts(): IBaseCollection<host>;
	relatedHosts(id: string | number): IBaseQuery<host> & hostMethods;
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
	indicators(): IBaseCollection<intelligenceProfileIndicator>;
	indicators(id: string | number): IBaseQuery<intelligenceProfileIndicator> & intelligenceProfileIndicatorMethods;
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
	articles(): IBaseCollection<article>;
	articles(id: string | number): IBaseQuery<article> & articleMethods;
	components(): IBaseCollection<vulnerabilityComponent>;
	components(id: string | number): IBaseQuery<vulnerabilityComponent> & vulnerabilityComponentMethods;
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
	groups(): IBaseCollection<group>;
	groups(id: string | number): IBaseQuery<group> & groupMethods;
	sets(): IBaseCollection<set>;
	sets(id: string | number): IBaseQuery<set> & setMethods;
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
	children(): IBaseCollection<term>;
	children(id: string | number): IBaseQuery<term> & termMethods;
	parentGroup(): IBaseQuery<group> & groupMethods;
	relations(): IBaseCollection<relation>;
	relations(id: string | number): IBaseQuery<relation> & relationMethods;
	terms(): IBaseCollection<term>;
	terms(id: string | number): IBaseQuery<term> & termMethods;
}
/*********************************************
* relation
**********************************************/
export interface relation extends relationProps, relationMethods , entity { }
export interface relationProps {
	relationship: EnumTypes.relationType;
}
export interface relationMethods {
	fromTerm(): IBaseQuery<term> & termMethods;
	set(): IBaseQuery<set> & setMethods;
	toTerm(): IBaseQuery<term> & termMethods;
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
	children(): IBaseCollection<term>;
	children(id: string | number): IBaseQuery<term> & termMethods;
	relations(): IBaseCollection<relation>;
	relations(id: string | number): IBaseQuery<relation> & relationMethods;
	set(): IBaseQuery<set> & setMethods;
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
	organizer_v2(): IBaseQuery<organizer> & organizerMethods;
	participants_v2(): IBaseCollection<participant>;
	participants_v2(id: string | number): IBaseQuery<participant> & participantMethods;
	sessions(): IBaseCollection<session>;
	sessions(id: string | number): IBaseQuery<session> & sessionMethods;
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
	segments(): IBaseCollection<segment>;
	segments(id: string | number): IBaseQuery<segment> & segmentMethods;
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
	manifests(): IBaseCollection<manifest>;
	manifests(id: string | number): IBaseQuery<manifest> & manifestMethods;
	operations(): IBaseCollection<operation>;
	operations(id: string | number): IBaseQuery<operation> & operationMethods;
	reconciliation(): IBaseQuery<billingReconciliation> & billingReconciliationMethods;
	usage(): IBaseQuery<azureUsage> & azureUsageMethods;
}
/*********************************************
* azureUsage
**********************************************/
export interface azureUsage extends azureUsageProps, azureUsageMethods , entity { }
export interface azureUsageProps {

}
export interface azureUsageMethods {
	billed(): IBaseQuery<billedUsage> & billedUsageMethods;
	unbilled(): IBaseQuery<unbilledUsage> & unbilledUsageMethods;
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
	billed(): IBaseQuery<billedReconciliation> & billedReconciliationMethods;
}
/*********************************************
* exportSuccessOperation
**********************************************/
export interface exportSuccessOperation extends exportSuccessOperationProps, exportSuccessOperationMethods , operation { }
export interface exportSuccessOperationProps {

}
export interface exportSuccessOperationMethods {
	resourceLocation(): IBaseQuery<manifest> & manifestMethods;
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
	connections(): IBaseCollection<externalConnection>;
	connections(id: string | number): IBaseQuery<externalConnection> & externalConnectionMethods;
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
	groups(): IBaseCollection<externalGroup>;
	groups(id: string | number): IBaseQuery<externalGroup> & externalGroupMethods;
	items(): IBaseCollection<externalItem>;
	items(id: string | number): IBaseQuery<externalItem> & externalItemMethods;
	operations(): IBaseCollection<connectionOperation>;
	operations(id: string | number): IBaseQuery<connectionOperation> & connectionOperationMethods;
	schema(): IBaseQuery<schema> & schemaMethods;
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
	members(): IBaseCollection<ComplexTypes.identity>;
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
	activities(): IBaseCollection<externalActivity>;
	activities(id: string | number): IBaseQuery<externalActivity> & externalActivityMethods;
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