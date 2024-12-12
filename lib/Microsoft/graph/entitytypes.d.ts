import { IBaseExecution, IBaseQuery } from "../../base";
import * as ComplexTypes from "./complexTypes.d";
import * as EnumTypes from "./enumTypes.d";
/*********************************************
* workflowBase
**********************************************/
export interface workflowBase  {
	category: EnumTypes.lifecycleWorkflowCategory;
	createdDateTime: any;
	description: string;
	displayName: string;
	executionConditions: ComplexTypes.workflowExecutionConditions;
	isEnabled: boolean;
	isSchedulingEnabled: boolean;
	lastModifiedDateTime: any;
	createdBy(): IBaseQuery<user>;
	lastModifiedBy(): IBaseQuery<user>;
	tasks(): IBaseQuery<task[]>;
	tasks(id: string | number): IBaseQuery<task>;
}
/*********************************************
* workflow
**********************************************/
export interface workflow extends workflowBase {
	deletedDateTime: any;
	id: string;
	nextScheduleRunDateTime: any;
	version: number;
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
export interface lifecycleWorkflowsContainer extends entity {

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
export interface task extends entity {
	arguments: ComplexTypes.keyValuePair[];
	category: EnumTypes.lifecycleTaskCategory;
	continueOnError: boolean;
	description: string;
	displayName: string;
	executionSequence: number;
	isEnabled: boolean;
	taskDefinitionId: string;
	taskProcessingResults(): IBaseQuery<taskProcessingResult[]>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult>;
}
/*********************************************
* taskProcessingResult
**********************************************/
export interface taskProcessingResult extends entity {
	completedDateTime: any;
	createdDateTime: any;
	failureReason: string;
	processingStatus: EnumTypes.lifecycleWorkflowProcessingStatus;
	startedDateTime: any;
	subject(): IBaseQuery<user>;
	task(): IBaseQuery<task>;
}
/*********************************************
* customTaskExtension
**********************************************/
export interface customTaskExtension extends customCalloutExtension {
	callbackConfiguration: ComplexTypes.customExtensionCallbackConfiguration;
	createdDateTime: any;
	lastModifiedDateTime: any;
	createdBy(): IBaseQuery<user>;
	lastModifiedBy(): IBaseQuery<user>;
}
/*********************************************
* insights
**********************************************/
export interface insights extends entity {


}
/*********************************************
* lifecycleManagementSettings
**********************************************/
export interface lifecycleManagementSettings extends entity {
	emailSettings: ComplexTypes.emailSettings;
	workflowScheduleIntervalInHours: number;

}
/*********************************************
* taskDefinition
**********************************************/
export interface taskDefinition extends entity {
	category: EnumTypes.lifecycleTaskCategory;
	continueOnError: boolean;
	description: string;
	displayName: string;
	parameters: ComplexTypes.parameter[];
	version: number;

}
/*********************************************
* workflowTemplate
**********************************************/
export interface workflowTemplate extends entity {
	category: EnumTypes.lifecycleWorkflowCategory;
	description: string;
	displayName: string;
	executionConditions: ComplexTypes.workflowExecutionConditions;
	tasks(): IBaseQuery<task[]>;
	tasks(id: string | number): IBaseQuery<task>;
}
/*********************************************
* run
**********************************************/
export interface run extends entity {
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
	taskProcessingResults(): IBaseQuery<taskProcessingResult[]>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult>;
	userProcessingResults(): IBaseQuery<userProcessingResult[]>;
	userProcessingResults(id: string | number): IBaseQuery<userProcessingResult>;
}
/*********************************************
* userProcessingResult
**********************************************/
export interface userProcessingResult extends entity {
	completedDateTime: any;
	failedTasksCount: number;
	processingStatus: EnumTypes.lifecycleWorkflowProcessingStatus;
	scheduledDateTime: any;
	startedDateTime: any;
	totalTasksCount: number;
	totalUnprocessedTasksCount: number;
	workflowExecutionType: EnumTypes.workflowExecutionType;
	workflowVersion: number;
	subject(): IBaseQuery<user>;
	taskProcessingResults(): IBaseQuery<taskProcessingResult[]>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult>;
}
/*********************************************
* taskReport
**********************************************/
export interface taskReport extends entity {
	completedDateTime: any;
	failedUsersCount: number;
	lastUpdatedDateTime: any;
	processingStatus: EnumTypes.lifecycleWorkflowProcessingStatus;
	runId: string;
	startedDateTime: any;
	successfulUsersCount: number;
	totalUsersCount: number;
	unprocessedUsersCount: number;
	task(): IBaseQuery<task>;
	taskDefinition(): IBaseQuery<taskDefinition>;
	taskProcessingResults(): IBaseQuery<taskProcessingResult[]>;
	taskProcessingResults(id: string | number): IBaseQuery<taskProcessingResult>;
}
/*********************************************
* workflowVersion
**********************************************/
export interface workflowVersion extends workflowBase {
	versionNumber: number;

}
/*********************************************
* entity
**********************************************/
export interface entity  {
	id: string;

}
/*********************************************
* directoryObject
**********************************************/
export interface directoryObject extends entity {
	deletedDateTime: any;

}
/*********************************************
* application
**********************************************/
export interface application extends directoryObject {
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
export interface policyBase extends directoryObject {
	description: string;
	displayName: string;

}
/*********************************************
* appManagementPolicy
**********************************************/
export interface appManagementPolicy extends policyBase {
	isEnabled: boolean;
	restrictions: ComplexTypes.customAppManagementConfiguration;
	appliesTo(): IBaseQuery<directoryObject[]>;
	appliesTo(id: string | number): IBaseQuery<directoryObject>;
}
/*********************************************
* extensionProperty
**********************************************/
export interface extensionProperty extends directoryObject {
	appDisplayName: string;
	dataType: string;
	isMultiValued: boolean;
	isSyncedFromOnPremises: boolean;
	name: string;
	targetObjects: Array<string>[];

}
/*********************************************
* federatedIdentityCredential
**********************************************/
export interface federatedIdentityCredential extends entity {
	audiences: Array<string>[];
	description: string;
	issuer: string;
	name: string;
	subject: string;

}
/*********************************************
* stsPolicy
**********************************************/
export interface stsPolicy extends policyBase {
	definition: Array<string>[];
	isOrganizationDefault: boolean;
	appliesTo(): IBaseQuery<directoryObject[]>;
	appliesTo(id: string | number): IBaseQuery<directoryObject>;
}
/*********************************************
* homeRealmDiscoveryPolicy
**********************************************/
export interface homeRealmDiscoveryPolicy extends stsPolicy {


}
/*********************************************
* tokenIssuancePolicy
**********************************************/
export interface tokenIssuancePolicy extends stsPolicy {


}
/*********************************************
* tokenLifetimePolicy
**********************************************/
export interface tokenLifetimePolicy extends stsPolicy {


}
/*********************************************
* synchronization
**********************************************/
export interface synchronization extends entity {
	secrets: ComplexTypes.synchronizationSecretKeyStringValuePair[];
	jobs(): IBaseQuery<synchronizationJob[]>;
	jobs(id: string | number): IBaseQuery<synchronizationJob>;
	templates(): IBaseQuery<synchronizationTemplate[]>;
	templates(id: string | number): IBaseQuery<synchronizationTemplate>;
}
/*********************************************
* customCalloutExtension
**********************************************/
export interface customCalloutExtension extends entity {
	authenticationConfiguration: ComplexTypes.customExtensionAuthenticationConfiguration;
	clientConfiguration: ComplexTypes.customExtensionClientConfiguration;
	description: string;
	displayName: string;
	endpointConfiguration: ComplexTypes.customExtensionEndpointConfiguration;

}
/*********************************************
* deletedItemContainer
**********************************************/
export interface deletedItemContainer extends entity {

	workflows(): IBaseQuery<workflow[]>;
	workflows(id: string | number): IBaseQuery<workflow>;
}
/*********************************************
* group
**********************************************/
export interface group extends entity {
	createdDateTime: any;
	description: string;
	displayName: string;
	parentSiteId: string;
	scope: EnumTypes.termGroupScope;
	sets(): IBaseQuery<set[]>;
	sets(id: string | number): IBaseQuery<set>;
}
/*********************************************
* appRoleAssignment
**********************************************/
export interface appRoleAssignment extends directoryObject {
	appRoleId: any;
	createdDateTime: any;
	principalDisplayName: string;
	principalId: any;
	principalType: string;
	resourceDisplayName: string;
	resourceId: any;

}
/*********************************************
* resourceSpecificPermissionGrant
**********************************************/
export interface resourceSpecificPermissionGrant extends directoryObject {
	clientAppId: string;
	clientId: string;
	permission: string;
	permissionType: string;
	resourceAppId: string;

}
/*********************************************
* groupSetting
**********************************************/
export interface groupSetting extends entity {
	displayName: string;
	templateId: string;
	values: ComplexTypes.settingValue[];

}
/*********************************************
* calendar
**********************************************/
export interface calendar extends entity {
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
export interface outlookItem extends entity {
	categories: Array<string>[];
	changeKey: string;
	createdDateTime: any;
	lastModifiedDateTime: any;

}
/*********************************************
* event
**********************************************/
export interface event extends outlookItem {
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
export interface conversation extends entity {
	hasAttachments: boolean;
	lastDeliveredDateTime: any;
	preview: string;
	topic: string;
	uniqueSenders: Array<string>[];
	threads(): IBaseQuery<conversationThread[]>;
	threads(id: string | number): IBaseQuery<conversationThread>;
}
/*********************************************
* conversationThread
**********************************************/
export interface conversationThread extends entity {
	ccRecipients: ComplexTypes.recipient[];
	hasAttachments: boolean;
	isLocked: boolean;
	lastDeliveredDateTime: any;
	preview: string;
	topic: string;
	toRecipients: ComplexTypes.recipient[];
	uniqueSenders: Array<string>[];
	posts(): IBaseQuery<post[]>;
	posts(id: string | number): IBaseQuery<post>;
}
/*********************************************
* baseItem
**********************************************/
export interface baseItem extends entity {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	eTag: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	name: string;
	parentReference: ComplexTypes.itemReference;
	webUrl: string;
	createdByUser(): IBaseQuery<user>;
	lastModifiedByUser(): IBaseQuery<user>;
}
/*********************************************
* drive
**********************************************/
export interface drive extends baseItem {
	driveType: string;
	owner: ComplexTypes.identitySet;
	quota: ComplexTypes.quota;
	sharePointIds: ComplexTypes.sharepointIds;
	system: ComplexTypes.systemFacet;
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
export interface site extends baseItem {
	displayName: string;
	error: ComplexTypes.publicError;
	isPersonalSite: boolean;
	root: ComplexTypes.root;
	sharepointIds: ComplexTypes.sharepointIds;
	siteCollection: ComplexTypes.siteCollection;
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
	permissions(): IBaseQuery<permissionCollection>;
	permissions(id: string): IBaseQuery<permission>;
}
/*********************************************
* extension
**********************************************/
export interface extension extends entity {


}
/*********************************************
* groupLifecyclePolicy
**********************************************/
export interface groupLifecyclePolicy extends entity {
	alternateNotificationEmails: string;
	groupLifetimeInDays: number;
	managedGroupTypes: string;

}
/*********************************************
* plannerGroup
**********************************************/
export interface plannerGroup extends entity {

	plans(): IBaseQuery<plannerPlan[]>;
	plans(id: string | number): IBaseQuery<plannerPlan>;
}
/*********************************************
* onenote
**********************************************/
export interface onenote extends entity {

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
export interface profilePhoto extends entity {
	height: number;
	width: number;

}
/*********************************************
* team
**********************************************/
export interface team extends entity {
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
export interface identityGovernance  {

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
export interface accessReviewSet extends entity {

	definitions(): IBaseQuery<accessReviewScheduleDefinition[]>;
	definitions(id: string | number): IBaseQuery<accessReviewScheduleDefinition>;
	historyDefinitions(): IBaseQuery<accessReviewHistoryDefinition[]>;
	historyDefinitions(id: string | number): IBaseQuery<accessReviewHistoryDefinition>;
}
/*********************************************
* appConsentApprovalRoute
**********************************************/
export interface appConsentApprovalRoute extends entity {

	appConsentRequests(): IBaseQuery<appConsentRequest[]>;
	appConsentRequests(id: string | number): IBaseQuery<appConsentRequest>;
}
/*********************************************
* termsOfUseContainer
**********************************************/
export interface termsOfUseContainer extends entity {

	agreementAcceptances(): IBaseQuery<agreementAcceptance[]>;
	agreementAcceptances(id: string | number): IBaseQuery<agreementAcceptance>;
	agreements(): IBaseQuery<agreement[]>;
	agreements(id: string | number): IBaseQuery<agreement>;
}
/*********************************************
* entitlementManagement
**********************************************/
export interface entitlementManagement extends entity {

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
export interface privilegedAccessRoot extends entity {

	group(): IBaseQuery<privilegedAccessGroup>;
}
/*********************************************
* user
**********************************************/
export interface user extends directoryObject {
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
export interface licenseDetails extends entity {
	servicePlans: ComplexTypes.servicePlanInfo[];
	skuId: any;
	skuPartNumber: string;

}
/*********************************************
* oAuth2PermissionGrant
**********************************************/
export interface oAuth2PermissionGrant extends entity {
	clientId: string;
	consentType: string;
	principalId: string;
	resourceId: string;
	scope: string;

}
/*********************************************
* scopedRoleMembership
**********************************************/
export interface scopedRoleMembership extends entity {
	administrativeUnitId: string;
	roleId: string;
	roleMemberInfo: ComplexTypes.identity;

}
/*********************************************
* calendarGroup
**********************************************/
export interface calendarGroup extends entity {
	changeKey: string;
	classId: any;
	name: string;
	calendars(): IBaseQuery<calendar[]>;
	calendars(id: string | number): IBaseQuery<calendar>;
}
/*********************************************
* contactFolder
**********************************************/
export interface contactFolder extends entity {
	displayName: string;
	parentFolderId: string;
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
export interface contact extends outlookItem {
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
export interface inferenceClassification extends entity {

	overrides(): IBaseQuery<inferenceClassificationOverride[]>;
	overrides(id: string | number): IBaseQuery<inferenceClassificationOverride>;
}
/*********************************************
* mailFolder
**********************************************/
export interface mailFolder extends entity {
	childFolderCount: number;
	displayName: string;
	isHidden: boolean;
	parentFolderId: string;
	totalItemCount: number;
	unreadItemCount: number;
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
export interface message extends outlookItem {
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
export interface outlookUser extends entity {

	masterCategories(): IBaseQuery<outlookCategory[]>;
	masterCategories(id: string | number): IBaseQuery<outlookCategory>;
}
/*********************************************
* person
**********************************************/
export interface person extends entity {
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
* agreementAcceptance
**********************************************/
export interface agreementAcceptance extends entity {
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
export interface managedDevice extends entity {
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
export interface managedAppRegistration extends entity {
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
export interface deviceManagementTroubleshootingEvent extends entity {
	correlationId: string;
	eventDateTime: any;

}
/*********************************************
* plannerUser
**********************************************/
export interface plannerUser extends entity {

	plans(): IBaseQuery<plannerPlan[]>;
	plans(id: string | number): IBaseQuery<plannerPlan>;
	tasks(): IBaseQuery<plannerTask[]>;
	tasks(id: string | number): IBaseQuery<plannerTask>;
}
/*********************************************
* officeGraphInsights
**********************************************/
export interface officeGraphInsights extends entity {

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
export interface itemInsights extends officeGraphInsights {


}
/*********************************************
* userSettings
**********************************************/
export interface userSettings extends entity {
	contributionToContentDiscoveryAsOrganizationDisabled: boolean;
	contributionToContentDiscoveryDisabled: boolean;
	itemInsights(): IBaseQuery<userInsightsSettings>;
	windows(): IBaseQuery<windowsSetting[]>;
	windows(id: string | number): IBaseQuery<windowsSetting>;
	shiftPreferences(): IBaseQuery<shiftPreferences>;
	storage(): IBaseQuery<userStorage>;
}
/*********************************************
* cloudClipboardRoot
**********************************************/
export interface cloudClipboardRoot extends entity {

	items(): IBaseQuery<cloudClipboardItem[]>;
	items(id: string | number): IBaseQuery<cloudClipboardItem>;
}
/*********************************************
* userActivity
**********************************************/
export interface userActivity extends entity {
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
	historyItems(): IBaseQuery<activityHistoryItem[]>;
	historyItems(id: string | number): IBaseQuery<activityHistoryItem>;
}
/*********************************************
* onlineMeetingBase
**********************************************/
export interface onlineMeetingBase extends entity {
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
	attendanceReports(): IBaseQuery<meetingAttendanceReport[]>;
	attendanceReports(id: string | number): IBaseQuery<meetingAttendanceReport>;
}
/*********************************************
* onlineMeeting
**********************************************/
export interface onlineMeeting extends onlineMeetingBase {
	attendeeReport: any;
	broadcastSettings: ComplexTypes.broadcastMeetingSettings;
	creationDateTime: any;
	endDateTime: any;
	externalId: string;
	isBroadcast: boolean;
	participants: ComplexTypes.meetingParticipants;
	startDateTime: any;
	recordings(): IBaseQuery<callRecording[]>;
	recordings(id: string | number): IBaseQuery<callRecording>;
	transcripts(): IBaseQuery<callTranscript[]>;
	transcripts(id: string | number): IBaseQuery<callTranscript>;
}
/*********************************************
* presence
**********************************************/
export interface presence extends entity {
	activity: string;
	availability: string;
	statusMessage: ComplexTypes.presenceStatusMessage;

}
/*********************************************
* authentication
**********************************************/
export interface authentication extends entity {

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
export interface chat extends entity {
	chatType: EnumTypes.chatType;
	createdDateTime: any;
	lastUpdatedDateTime: any;
	onlineMeetingInfo: ComplexTypes.teamworkOnlineMeetingInfo;
	tenantId: string;
	topic: string;
	viewpoint: ComplexTypes.chatViewpoint;
	webUrl: string;
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
export interface userTeamwork extends entity {
	locale: string;
	region: string;
	associatedTeams(): IBaseQuery<associatedTeamInfo[]>;
	associatedTeams(id: string | number): IBaseQuery<associatedTeamInfo>;
	installedApps(): IBaseQuery<userScopeTeamsAppInstallation[]>;
	installedApps(id: string | number): IBaseQuery<userScopeTeamsAppInstallation>;
}
/*********************************************
* userSolutionRoot
**********************************************/
export interface userSolutionRoot extends entity {

	workingTimeSchedule(): IBaseQuery<workingTimeSchedule>;
}
/*********************************************
* todo
**********************************************/
export interface todo extends entity {

	lists(): IBaseQuery<todoTaskList[]>;
	lists(id: string | number): IBaseQuery<todoTaskList>;
}
/*********************************************
* employeeExperienceUser
**********************************************/
export interface employeeExperienceUser extends entity {

	learningCourseActivities(): IBaseQuery<learningCourseActivity[]>;
	learningCourseActivities(id: string | number): IBaseQuery<learningCourseActivity>;
}
/*********************************************
* auditLogRoot
**********************************************/
export interface auditLogRoot  {

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
export interface directoryAudit extends entity {
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
export interface provisioningObjectSummary extends entity {
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
export interface signIn extends entity {
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
* authenticationMethodsRoot
**********************************************/
export interface authenticationMethodsRoot extends entity {

	userRegistrationDetails(): IBaseQuery<userRegistrationDetails[]>;
	userRegistrationDetails(id: string | number): IBaseQuery<userRegistrationDetails>;
}
/*********************************************
* userRegistrationDetails
**********************************************/
export interface userRegistrationDetails extends entity {
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
/*********************************************
* governanceInsight
**********************************************/
export interface governanceInsight extends entity {
	insightCreatedDateTime: any;

}
/*********************************************
* membershipOutlierInsight
**********************************************/
export interface membershipOutlierInsight extends governanceInsight {
	containerId: string;
	memberId: string;
	outlierContainerType: EnumTypes.outlierContainerType;
	outlierMemberType: EnumTypes.outlierMemberType;
	container(): IBaseQuery<directoryObject>;
	lastModifiedBy(): IBaseQuery<user>;
	member(): IBaseQuery<directoryObject>;
}
/*********************************************
* relyingPartyDetailedSummary
**********************************************/
export interface relyingPartyDetailedSummary extends entity {
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
/*********************************************
* reportRoot
**********************************************/
export interface reportRoot  {

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
export interface partners extends entity {

	billing(): IBaseQuery<billing>;
}
/*********************************************
* printUsage
**********************************************/
export interface printUsage extends entity {
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
/*********************************************
* printUsageByPrinter
**********************************************/
export interface printUsageByPrinter extends printUsage {
	printerId: string;
	printerName: string;

}
/*********************************************
* printUsageByUser
**********************************************/
export interface printUsageByUser extends printUsage {
	userPrincipalName: string;

}
/*********************************************
* securityReportsRoot
**********************************************/
export interface securityReportsRoot extends entity {


}
/*********************************************
* invitation
**********************************************/
export interface invitation extends entity {
	invitedUserDisplayName: string;
	invitedUserEmailAddress: string;
	invitedUserMessageInfo: ComplexTypes.invitedUserMessageInfo;
	invitedUserType: string;
	inviteRedeemUrl: string;
	inviteRedirectUrl: string;
	resetRedemption: boolean;
	sendInvitationMessage: boolean;
	status: string;
	invitedUser(): IBaseQuery<user>;
	invitedUserSponsors(): IBaseQuery<directoryObject[]>;
	invitedUserSponsors(id: string | number): IBaseQuery<directoryObject>;
}
/*********************************************
* servicePrincipal
**********************************************/
export interface servicePrincipal extends directoryObject {
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
export interface applicationTemplate extends entity {
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
export interface claimsMappingPolicy extends stsPolicy {


}
/*********************************************
* delegatedPermissionClassification
**********************************************/
export interface delegatedPermissionClassification extends entity {
	classification: EnumTypes.permissionClassificationType;
	permissionId: string;
	permissionName: string;

}
/*********************************************
* endpoint
**********************************************/
export interface endpoint extends directoryObject {
	capability: string;
	providerId: string;
	providerName: string;
	providerResourceId: string;
	uri: string;

}
/*********************************************
* remoteDesktopSecurityConfiguration
**********************************************/
export interface remoteDesktopSecurityConfiguration extends entity {
	isRemoteDesktopProtocolEnabled: boolean;
	targetDeviceGroups(): IBaseQuery<targetDeviceGroup[]>;
	targetDeviceGroups(id: string | number): IBaseQuery<targetDeviceGroup>;
}
/*********************************************
* authenticationCombinationConfiguration
**********************************************/
export interface authenticationCombinationConfiguration extends entity {
	appliesToCombinations: EnumTypes.authenticationMethodModes[];

}
/*********************************************
* authenticationMethodConfiguration
**********************************************/
export interface authenticationMethodConfiguration extends entity {
	excludeTargets: ComplexTypes.excludeTarget[];
	state: EnumTypes.authenticationMethodState;

}
/*********************************************
* authenticationMethodModeDetail
**********************************************/
export interface authenticationMethodModeDetail extends entity {
	authenticationMethod: EnumTypes.baseAuthenticationMethod;
	displayName: string;

}
/*********************************************
* authenticationMethodsPolicy
**********************************************/
export interface authenticationMethodsPolicy extends entity {
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	policyMigrationState: EnumTypes.authenticationMethodsPolicyMigrationState;
	policyVersion: string;
	reconfirmationInDays: number;
	registrationEnforcement: ComplexTypes.registrationEnforcement;
	authenticationMethodConfigurations(): IBaseQuery<authenticationMethodConfiguration[]>;
	authenticationMethodConfigurations(id: string | number): IBaseQuery<authenticationMethodConfiguration>;
}
/*********************************************
* authenticationMethodTarget
**********************************************/
export interface authenticationMethodTarget extends entity {
	isRegistrationRequired: boolean;
	targetType: EnumTypes.authenticationMethodTargetType;

}
/*********************************************
* authenticationStrengthPolicy
**********************************************/
export interface authenticationStrengthPolicy extends entity {
	allowedCombinations: EnumTypes.authenticationMethodModes[];
	createdDateTime: any;
	description: string;
	displayName: string;
	modifiedDateTime: any;
	policyType: EnumTypes.authenticationStrengthPolicyType;
	requirementsSatisfied: EnumTypes.authenticationStrengthRequirements;
	combinationConfigurations(): IBaseQuery<authenticationCombinationConfiguration[]>;
	combinationConfigurations(id: string | number): IBaseQuery<authenticationCombinationConfiguration>;
}
/*********************************************
* authenticationStrengthRoot
**********************************************/
export interface authenticationStrengthRoot extends entity {
	combinations: EnumTypes.authenticationMethodModes[];
	authenticationMethodModes(): IBaseQuery<authenticationMethodModeDetail[]>;
	authenticationMethodModes(id: string | number): IBaseQuery<authenticationMethodModeDetail>;
	policies(): IBaseQuery<authenticationStrengthPolicy[]>;
	policies(id: string | number): IBaseQuery<authenticationStrengthPolicy>;
}
/*********************************************
* conditionalAccessRoot
**********************************************/
export interface conditionalAccessRoot extends entity {

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
export interface authenticationContextClassReference extends entity {
	description: string;
	displayName: string;
	isAvailable: boolean;

}
/*********************************************
* namedLocation
**********************************************/
export interface namedLocation extends entity {
	createdDateTime: any;
	displayName: string;
	modifiedDateTime: any;

}
/*********************************************
* conditionalAccessPolicy
**********************************************/
export interface conditionalAccessPolicy extends entity {
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
/*********************************************
* conditionalAccessTemplate
**********************************************/
export interface conditionalAccessTemplate extends entity {
	description: string;
	details: ComplexTypes.conditionalAccessPolicyDetail;
	name: string;
	scenarios: EnumTypes.templateScenarios;

}
/*********************************************
* emailAuthenticationMethodConfiguration
**********************************************/
export interface emailAuthenticationMethodConfiguration extends authenticationMethodConfiguration {
	allowExternalIdToUseEmailOtp: EnumTypes.externalEmailOtpState;
	includeTargets(): IBaseQuery<authenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget>;
}
/*********************************************
* fido2AuthenticationMethodConfiguration
**********************************************/
export interface fido2AuthenticationMethodConfiguration extends authenticationMethodConfiguration {
	isAttestationEnforced: boolean;
	isSelfServiceRegistrationAllowed: boolean;
	keyRestrictions: ComplexTypes.fido2KeyRestrictions;
	includeTargets(): IBaseQuery<authenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget>;
}
/*********************************************
* fido2CombinationConfiguration
**********************************************/
export interface fido2CombinationConfiguration extends authenticationCombinationConfiguration {
	allowedAAGUIDs: Array<string>[];

}
/*********************************************
* microsoftAuthenticatorAuthenticationMethodConfiguration
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodConfiguration extends authenticationMethodConfiguration {
	featureSettings: ComplexTypes.microsoftAuthenticatorFeatureSettings;
	isSoftwareOathEnabled: boolean;
	includeTargets(): IBaseQuery<microsoftAuthenticatorAuthenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<microsoftAuthenticatorAuthenticationMethodTarget>;
}
/*********************************************
* microsoftAuthenticatorAuthenticationMethodTarget
**********************************************/
export interface microsoftAuthenticatorAuthenticationMethodTarget extends authenticationMethodTarget {
	authenticationMode: EnumTypes.microsoftAuthenticatorAuthenticationMode;

}
/*********************************************
* policyRoot
**********************************************/
export interface policyRoot extends entity {

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
export interface authenticationFlowsPolicy extends entity {
	description: string;
	displayName: string;
	selfServiceSignUp: ComplexTypes.selfServiceSignUpAuthenticationFlowConfiguration;

}
/*********************************************
* deviceRegistrationPolicy
**********************************************/
export interface deviceRegistrationPolicy extends entity {
	azureADJoin: ComplexTypes.azureADJoinPolicy;
	azureADRegistration: ComplexTypes.azureADRegistrationPolicy;
	description: string;
	displayName: string;
	localAdminPassword: ComplexTypes.localAdminPasswordSettings;
	multiFactorAuthConfiguration: EnumTypes.multiFactorAuthConfiguration;
	userDeviceQuota: number;

}
/*********************************************
* activityBasedTimeoutPolicy
**********************************************/
export interface activityBasedTimeoutPolicy extends stsPolicy {


}
/*********************************************
* authorizationPolicy
**********************************************/
export interface authorizationPolicy extends policyBase {
	allowedToSignUpEmailBasedSubscriptions: boolean;
	allowedToUseSSPR: boolean;
	allowEmailVerifiedUsersToJoinOrganization: boolean;
	allowInvitesFrom: EnumTypes.allowInvitesFrom;
	allowUserConsentForRiskyApps: boolean;
	blockMsolPowerShell: boolean;
	defaultUserRolePermissions: ComplexTypes.defaultUserRolePermissions;
	guestUserRoleId: any;

}
/*********************************************
* crossTenantAccessPolicy
**********************************************/
export interface crossTenantAccessPolicy extends policyBase {
	allowedCloudEndpoints: Array<string>[];
	default(): IBaseQuery<crossTenantAccessPolicyConfigurationDefault>;
	partners(): IBaseQuery<crossTenantAccessPolicyConfigurationPartner[]>;
	partners(id: string | number): IBaseQuery<crossTenantAccessPolicyConfigurationPartner>;
	templates(): IBaseQuery<policyTemplate>;
}
/*********************************************
* tenantAppManagementPolicy
**********************************************/
export interface tenantAppManagementPolicy extends policyBase {
	applicationRestrictions: ComplexTypes.appManagementApplicationConfiguration;
	isEnabled: boolean;
	servicePrincipalRestrictions: ComplexTypes.appManagementServicePrincipalConfiguration;

}
/*********************************************
* permissionGrantPolicy
**********************************************/
export interface permissionGrantPolicy extends policyBase {

	excludes(): IBaseQuery<permissionGrantConditionSet[]>;
	excludes(id: string | number): IBaseQuery<permissionGrantConditionSet>;
	includes(): IBaseQuery<permissionGrantConditionSet[]>;
	includes(id: string | number): IBaseQuery<permissionGrantConditionSet>;
}
/*********************************************
* featureRolloutPolicy
**********************************************/
export interface featureRolloutPolicy extends entity {
	description: string;
	displayName: string;
	feature: EnumTypes.stagedFeatureName;
	isAppliedToOrganization: boolean;
	isEnabled: boolean;
	appliesTo(): IBaseQuery<directoryObject[]>;
	appliesTo(id: string | number): IBaseQuery<directoryObject>;
}
/*********************************************
* adminConsentRequestPolicy
**********************************************/
export interface adminConsentRequestPolicy extends entity {
	isEnabled: boolean;
	notifyReviewers: boolean;
	remindersEnabled: boolean;
	requestDurationInDays: number;
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	version: number;

}
/*********************************************
* identitySecurityDefaultsEnforcementPolicy
**********************************************/
export interface identitySecurityDefaultsEnforcementPolicy extends policyBase {
	isEnabled: boolean;

}
/*********************************************
* unifiedRoleManagementPolicy
**********************************************/
export interface unifiedRoleManagementPolicy extends entity {
	description: string;
	displayName: string;
	isOrganizationDefault: boolean;
	lastModifiedBy: ComplexTypes.identity;
	lastModifiedDateTime: any;
	scopeId: string;
	scopeType: string;
	effectiveRules(): IBaseQuery<unifiedRoleManagementPolicyRule[]>;
	effectiveRules(id: string | number): IBaseQuery<unifiedRoleManagementPolicyRule>;
	rules(): IBaseQuery<unifiedRoleManagementPolicyRule[]>;
	rules(id: string | number): IBaseQuery<unifiedRoleManagementPolicyRule>;
}
/*********************************************
* unifiedRoleManagementPolicyAssignment
**********************************************/
export interface unifiedRoleManagementPolicyAssignment extends entity {
	policyId: string;
	roleDefinitionId: string;
	scopeId: string;
	scopeType: string;
	policy(): IBaseQuery<unifiedRoleManagementPolicy>;
}
/*********************************************
* smsAuthenticationMethodConfiguration
**********************************************/
export interface smsAuthenticationMethodConfiguration extends authenticationMethodConfiguration {

	includeTargets(): IBaseQuery<smsAuthenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<smsAuthenticationMethodTarget>;
}
/*********************************************
* smsAuthenticationMethodTarget
**********************************************/
export interface smsAuthenticationMethodTarget extends authenticationMethodTarget {
	isUsableForSignIn: boolean;

}
/*********************************************
* softwareOathAuthenticationMethodConfiguration
**********************************************/
export interface softwareOathAuthenticationMethodConfiguration extends authenticationMethodConfiguration {

	includeTargets(): IBaseQuery<authenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget>;
}
/*********************************************
* temporaryAccessPassAuthenticationMethodConfiguration
**********************************************/
export interface temporaryAccessPassAuthenticationMethodConfiguration extends authenticationMethodConfiguration {
	defaultLength: number;
	defaultLifetimeInMinutes: number;
	isUsableOnce: boolean;
	maximumLifetimeInMinutes: number;
	minimumLifetimeInMinutes: number;
	includeTargets(): IBaseQuery<authenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget>;
}
/*********************************************
* voiceAuthenticationMethodConfiguration
**********************************************/
export interface voiceAuthenticationMethodConfiguration extends authenticationMethodConfiguration {
	isOfficePhoneAllowed: boolean;
	includeTargets(): IBaseQuery<authenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget>;
}
/*********************************************
* x509CertificateAuthenticationMethodConfiguration
**********************************************/
export interface x509CertificateAuthenticationMethodConfiguration extends authenticationMethodConfiguration {
	authenticationModeConfiguration: ComplexTypes.x509CertificateAuthenticationModeConfiguration;
	certificateUserBindings: ComplexTypes.x509CertificateUserBinding[];
	includeTargets(): IBaseQuery<authenticationMethodTarget[]>;
	includeTargets(id: string | number): IBaseQuery<authenticationMethodTarget>;
}
/*********************************************
* x509CertificateCombinationConfiguration
**********************************************/
export interface x509CertificateCombinationConfiguration extends authenticationCombinationConfiguration {
	allowedIssuerSkis: Array<string>[];
	allowedPolicyOIDs: Array<string>[];

}
/*********************************************
* bitlocker
**********************************************/
export interface bitlocker extends entity {

	recoveryKeys(): IBaseQuery<bitlockerRecoveryKey[]>;
	recoveryKeys(id: string | number): IBaseQuery<bitlockerRecoveryKey>;
}
/*********************************************
* bitlockerRecoveryKey
**********************************************/
export interface bitlockerRecoveryKey extends entity {
	createdDateTime: any;
	deviceId: string;
	key: string;
	volumeType: EnumTypes.volumeType;

}
/*********************************************
* informationProtection
**********************************************/
export interface informationProtection  {

	bitlocker(): IBaseQuery<bitlocker>;
	threatAssessmentRequests(): IBaseQuery<threatAssessmentRequest[]>;
	threatAssessmentRequests(id: string | number): IBaseQuery<threatAssessmentRequest>;
}
/*********************************************
* threatAssessmentRequest
**********************************************/
export interface threatAssessmentRequest extends entity {
	category: EnumTypes.threatCategory;
	contentType: EnumTypes.threatAssessmentContentType;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	expectedAssessment: EnumTypes.threatExpectedAssessment;
	requestSource: EnumTypes.threatAssessmentRequestSource;
	status: EnumTypes.threatAssessmentStatus;
	results(): IBaseQuery<threatAssessmentResult[]>;
	results(id: string | number): IBaseQuery<threatAssessmentResult>;
}
/*********************************************
* bookingAppointment
**********************************************/
export interface bookingAppointment extends entity {
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
/*********************************************
* bookingBusiness
**********************************************/
export interface bookingBusiness extends entity {
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
export interface bookingCustomerBase extends entity {


}
/*********************************************
* bookingCustomQuestion
**********************************************/
export interface bookingCustomQuestion extends entity {
	answerInputType: EnumTypes.answerInputType;
	answerOptions: Array<string>[];
	createdDateTime: any;
	displayName: string;
	lastUpdatedDateTime: any;

}
/*********************************************
* bookingService
**********************************************/
export interface bookingService extends entity {
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
/*********************************************
* bookingStaffMemberBase
**********************************************/
export interface bookingStaffMemberBase extends entity {


}
/*********************************************
* bookingCurrency
**********************************************/
export interface bookingCurrency extends entity {
	symbol: string;

}
/*********************************************
* bookingCustomer
**********************************************/
export interface bookingCustomer extends bookingCustomerBase {
	addresses: ComplexTypes.physicalAddress[];
	createdDateTime: any;
	displayName: string;
	emailAddress: string;
	lastUpdatedDateTime: any;
	phones: ComplexTypes.phone[];

}
/*********************************************
* bookingStaffMember
**********************************************/
export interface bookingStaffMember extends bookingStaffMemberBase {
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
/*********************************************
* solutionsRoot
**********************************************/
export interface solutionsRoot  {

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
export interface backupRestoreRoot extends entity {
	serviceStatus: ComplexTypes.serviceStatus;
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
export interface virtualEventsRoot extends entity {

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
export interface cloudPC extends entity {
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
/*********************************************
* cloudPcAuditEvent
**********************************************/
export interface cloudPcAuditEvent extends entity {
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
/*********************************************
* cloudPcDeviceImage
**********************************************/
export interface cloudPcDeviceImage extends entity {
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
/*********************************************
* cloudPcGalleryImage
**********************************************/
export interface cloudPcGalleryImage extends entity {
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
/*********************************************
* cloudPcOnPremisesConnection
**********************************************/
export interface cloudPcOnPremisesConnection extends entity {
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
/*********************************************
* cloudPcProvisioningPolicy
**********************************************/
export interface cloudPcProvisioningPolicy extends entity {
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
	assignments(): IBaseQuery<cloudPcProvisioningPolicyAssignment[]>;
	assignments(id: string | number): IBaseQuery<cloudPcProvisioningPolicyAssignment>;
}
/*********************************************
* cloudPcProvisioningPolicyAssignment
**********************************************/
export interface cloudPcProvisioningPolicyAssignment extends entity {
	target: ComplexTypes.cloudPcManagementAssignmentTarget;
	assignedUsers(): IBaseQuery<user[]>;
	assignedUsers(id: string | number): IBaseQuery<user>;
}
/*********************************************
* cloudPcUserSetting
**********************************************/
export interface cloudPcUserSetting extends entity {
	createdDateTime: any;
	displayName: string;
	lastModifiedDateTime: any;
	localAdminEnabled: boolean;
	resetEnabled: boolean;
	restorePointSetting: ComplexTypes.cloudPcRestorePointSetting;
	assignments(): IBaseQuery<cloudPcUserSettingAssignment[]>;
	assignments(id: string | number): IBaseQuery<cloudPcUserSettingAssignment>;
}
/*********************************************
* cloudPcUserSettingAssignment
**********************************************/
export interface cloudPcUserSettingAssignment extends entity {
	createdDateTime: any;
	target: ComplexTypes.cloudPcManagementAssignmentTarget;

}
/*********************************************
* deviceManagement
**********************************************/
export interface deviceManagement extends entity {
	intuneAccountId: any;
	settings: ComplexTypes.deviceManagementSettings;
	intuneBrand: ComplexTypes.intuneBrand;
	deviceProtectionOverview: ComplexTypes.deviceProtectionOverview;
	subscriptionState: EnumTypes.deviceManagementSubscriptionState;
	userExperienceAnalyticsSettings: ComplexTypes.userExperienceAnalyticsSettings;
	windowsMalwareOverview: ComplexTypes.windowsMalwareOverview;
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
export interface auditEvent extends entity {
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
/*********************************************
* virtualEndpoint
**********************************************/
export interface virtualEndpoint extends entity {

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
export interface termsAndConditions extends entity {
	acceptanceStatement: string;
	bodyText: string;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	title: string;
	version: number;
	acceptanceStatuses(): IBaseQuery<termsAndConditionsAcceptanceStatus[]>;
	acceptanceStatuses(id: string | number): IBaseQuery<termsAndConditionsAcceptanceStatus>;
	assignments(): IBaseQuery<termsAndConditionsAssignment[]>;
	assignments(id: string | number): IBaseQuery<termsAndConditionsAssignment>;
}
/*********************************************
* deviceCompliancePolicy
**********************************************/
export interface deviceCompliancePolicy extends entity {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	version: number;
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
export interface deviceCompliancePolicyDeviceStateSummary extends entity {
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
export interface deviceCompliancePolicySettingStateSummary extends entity {
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
	deviceComplianceSettingStates(): IBaseQuery<deviceComplianceSettingState[]>;
	deviceComplianceSettingStates(id: string | number): IBaseQuery<deviceComplianceSettingState>;
}
/*********************************************
* deviceConfigurationDeviceStateSummary
**********************************************/
export interface deviceConfigurationDeviceStateSummary extends entity {
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
export interface deviceConfiguration extends entity {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	version: number;
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
export interface iosUpdateDeviceStatus extends entity {
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
export interface softwareUpdateStatusSummary extends entity {
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
export interface complianceManagementPartner extends entity {
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
export interface onPremisesConditionalAccessSettings extends entity {
	enabled: boolean;
	excludedGroups: Array<any>[];
	includedGroups: Array<any>[];
	overrideDefaultRule: boolean;

}
/*********************************************
* deviceCategory
**********************************************/
export interface deviceCategory extends entity {
	description: string;
	displayName: string;

}
/*********************************************
* deviceEnrollmentConfiguration
**********************************************/
export interface deviceEnrollmentConfiguration extends entity {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	priority: number;
	version: number;
	assignments(): IBaseQuery<enrollmentConfigurationAssignment[]>;
	assignments(id: string | number): IBaseQuery<enrollmentConfigurationAssignment>;
}
/*********************************************
* deviceManagementPartner
**********************************************/
export interface deviceManagementPartner extends entity {
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
/*********************************************
* deviceManagementExchangeConnector
**********************************************/
export interface deviceManagementExchangeConnector extends entity {
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
export interface mobileThreatDefenseConnector extends entity {
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
/*********************************************
* applePushNotificationCertificate
**********************************************/
export interface applePushNotificationCertificate extends entity {
	appleIdentifier: string;
	certificate: string;
	certificateSerialNumber: string;
	certificateUploadFailureReason: string;
	certificateUploadStatus: string;
	expirationDateTime: any;
	lastModifiedDateTime: any;
	topicIdentifier: string;

}
/*********************************************
* detectedApp
**********************************************/
export interface detectedApp extends entity {
	deviceCount: number;
	displayName: string;
	platform: EnumTypes.detectedAppPlatformType;
	publisher: string;
	sizeInByte: number;
	version: string;
	managedDevices(): IBaseQuery<managedDevice[]>;
	managedDevices(id: string | number): IBaseQuery<managedDevice>;
}
/*********************************************
* managedDeviceOverview
**********************************************/
export interface managedDeviceOverview extends entity {
	deviceExchangeAccessStateSummary: ComplexTypes.deviceExchangeAccessStateSummary;
	deviceOperatingSystemSummary: ComplexTypes.deviceOperatingSystemSummary;
	dualEnrolledDeviceCount: number;
	enrolledDeviceCount: number;
	mdmEnrolledCount: number;

}
/*********************************************
* mobileAppTroubleshootingEvent
**********************************************/
export interface mobileAppTroubleshootingEvent extends entity {

	appLogCollectionRequests(): IBaseQuery<appLogCollectionRequest[]>;
	appLogCollectionRequests(id: string | number): IBaseQuery<appLogCollectionRequest>;
}
/*********************************************
* userExperienceAnalyticsAppHealthApplicationPerformance
**********************************************/
export interface userExperienceAnalyticsAppHealthApplicationPerformance extends entity {
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
/*********************************************
* userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails
**********************************************/
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails extends entity {
	appCrashCount: number;
	appDisplayName: string;
	appName: string;
	appPublisher: string;
	appVersion: string;
	deviceCountWithCrashes: number;
	isLatestUsedVersion: boolean;
	isMostUsedVersion: boolean;

}
/*********************************************
* userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId
**********************************************/
export interface userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId extends entity {
	appCrashCount: number;
	appDisplayName: string;
	appName: string;
	appPublisher: string;
	appVersion: string;
	deviceDisplayName: string;
	deviceId: string;
	processedDateTime: any;

}
/*********************************************
* userExperienceAnalyticsAppHealthAppPerformanceByOSVersion
**********************************************/
export interface userExperienceAnalyticsAppHealthAppPerformanceByOSVersion extends entity {
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
/*********************************************
* userExperienceAnalyticsAppHealthDeviceModelPerformance
**********************************************/
export interface userExperienceAnalyticsAppHealthDeviceModelPerformance extends entity {
	activeDeviceCount: number;
	deviceManufacturer: string;
	deviceModel: string;
	healthStatus: EnumTypes.userExperienceAnalyticsHealthState;
	meanTimeToFailureInMinutes: number;
	modelAppHealthScore: number;

}
/*********************************************
* userExperienceAnalyticsAppHealthDevicePerformance
**********************************************/
export interface userExperienceAnalyticsAppHealthDevicePerformance extends entity {
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
/*********************************************
* userExperienceAnalyticsAppHealthDevicePerformanceDetails
**********************************************/
export interface userExperienceAnalyticsAppHealthDevicePerformanceDetails extends entity {
	appDisplayName: string;
	appPublisher: string;
	appVersion: string;
	deviceDisplayName: string;
	deviceId: string;
	eventDateTime: any;
	eventType: string;

}
/*********************************************
* userExperienceAnalyticsAppHealthOSVersionPerformance
**********************************************/
export interface userExperienceAnalyticsAppHealthOSVersionPerformance extends entity {
	activeDeviceCount: number;
	meanTimeToFailureInMinutes: number;
	osBuildNumber: string;
	osVersion: string;
	osVersionAppHealthScore: number;

}
/*********************************************
* userExperienceAnalyticsCategory
**********************************************/
export interface userExperienceAnalyticsCategory extends entity {
	insights: ComplexTypes.userExperienceAnalyticsInsight[];
	metricValues(): IBaseQuery<userExperienceAnalyticsMetric[]>;
	metricValues(id: string | number): IBaseQuery<userExperienceAnalyticsMetric>;
}
/*********************************************
* userExperienceAnalyticsBaseline
**********************************************/
export interface userExperienceAnalyticsBaseline extends entity {
	createdDateTime: any;
	displayName: string;
	isBuiltIn: boolean;
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
export interface userExperienceAnalyticsDevicePerformance extends entity {
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
* userExperienceAnalyticsDeviceScores
**********************************************/
export interface userExperienceAnalyticsDeviceScores extends entity {
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
/*********************************************
* userExperienceAnalyticsDeviceStartupHistory
**********************************************/
export interface userExperienceAnalyticsDeviceStartupHistory extends entity {
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
/*********************************************
* userExperienceAnalyticsDeviceStartupProcess
**********************************************/
export interface userExperienceAnalyticsDeviceStartupProcess extends entity {
	managedDeviceId: string;
	processName: string;
	productName: string;
	publisher: string;
	startupImpactInMs: number;

}
/*********************************************
* userExperienceAnalyticsDeviceStartupProcessPerformance
**********************************************/
export interface userExperienceAnalyticsDeviceStartupProcessPerformance extends entity {
	deviceCount: number;
	medianImpactInMs: number;
	processName: string;
	productName: string;
	publisher: string;
	totalImpactInMs: number;

}
/*********************************************
* userExperienceAnalyticsMetricHistory
**********************************************/
export interface userExperienceAnalyticsMetricHistory extends entity {
	deviceId: string;
	metricDateTime: any;
	metricType: string;

}
/*********************************************
* userExperienceAnalyticsModelScores
**********************************************/
export interface userExperienceAnalyticsModelScores extends entity {
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
/*********************************************
* userExperienceAnalyticsOverview
**********************************************/
export interface userExperienceAnalyticsOverview extends entity {
	insights: ComplexTypes.userExperienceAnalyticsInsight[];

}
/*********************************************
* userExperienceAnalyticsScoreHistory
**********************************************/
export interface userExperienceAnalyticsScoreHistory extends entity {
	startupDateTime: any;

}
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric extends entity {
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
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereMetric
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereMetric extends entity {

	metricDevices(): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereDevice[]>;
	metricDevices(id: string | number): IBaseQuery<userExperienceAnalyticsWorkFromAnywhereDevice>;
}
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereModelPerformance
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereModelPerformance extends entity {
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
/*********************************************
* windowsMalwareInformation
**********************************************/
export interface windowsMalwareInformation extends entity {
	additionalInformationUrl: string;
	category: EnumTypes.windowsMalwareCategory;
	displayName: string;
	lastDetectionDateTime: any;
	severity: EnumTypes.windowsMalwareSeverity;
	deviceMalwareStates(): IBaseQuery<malwareStateForWindowsDevice[]>;
	deviceMalwareStates(id: string | number): IBaseQuery<malwareStateForWindowsDevice>;
}
/*********************************************
* importedWindowsAutopilotDeviceIdentity
**********************************************/
export interface importedWindowsAutopilotDeviceIdentity extends entity {
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
export interface windowsAutopilotDeviceIdentity extends entity {
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
export interface notificationMessageTemplate extends entity {
	brandingOptions: EnumTypes.notificationTemplateBrandingOptions;
	defaultLocale: string;
	displayName: string;
	lastModifiedDateTime: any;
	roleScopeTagIds: Array<string>[];
	localizedNotificationMessages(): IBaseQuery<localizedNotificationMessage[]>;
	localizedNotificationMessages(id: string | number): IBaseQuery<localizedNotificationMessage>;
}
/*********************************************
* resourceOperation
**********************************************/
export interface resourceOperation extends entity {
	actionName: string;
	description: string;
	resourceName: string;

}
/*********************************************
* roleAssignment
**********************************************/
export interface roleAssignment extends entity {
	description: string;
	displayName: string;
	resourceScopes: Array<string>[];
	roleDefinition(): IBaseQuery<roleDefinition>;
}
/*********************************************
* deviceAndAppManagementRoleAssignment
**********************************************/
export interface deviceAndAppManagementRoleAssignment extends roleAssignment {
	members: Array<string>[];

}
/*********************************************
* roleDefinition
**********************************************/
export interface roleDefinition extends entity {
	description: string;
	displayName: string;
	isBuiltIn: boolean;
	rolePermissions: ComplexTypes.rolePermission[];
	roleAssignments(): IBaseQuery<roleAssignment[]>;
	roleAssignments(id: string | number): IBaseQuery<roleAssignment>;
}
/*********************************************
* remoteAssistancePartner
**********************************************/
export interface remoteAssistancePartner extends entity {
	displayName: string;
	lastConnectionDateTime: any;
	onboardingStatus: EnumTypes.remoteAssistanceOnboardingStatus;
	onboardingUrl: string;

}
/*********************************************
* deviceManagementReports
**********************************************/
export interface deviceManagementReports extends entity {

	exportJobs(): IBaseQuery<deviceManagementExportJob[]>;
	exportJobs(id: string | number): IBaseQuery<deviceManagementExportJob>;
}
/*********************************************
* telecomExpenseManagementPartner
**********************************************/
export interface telecomExpenseManagementPartner extends entity {
	appAuthorized: boolean;
	displayName: string;
	enabled: boolean;
	lastConnectionDateTime: any;
	url: string;

}
/*********************************************
* windowsInformationProtectionAppLearningSummary
**********************************************/
export interface windowsInformationProtectionAppLearningSummary extends entity {
	applicationName: string;
	applicationType: EnumTypes.applicationType;
	deviceCount: number;

}
/*********************************************
* windowsInformationProtectionNetworkLearningSummary
**********************************************/
export interface windowsInformationProtectionNetworkLearningSummary extends entity {
	deviceCount: number;
	url: string;

}
/*********************************************
* authoredNote
**********************************************/
export interface authoredNote extends entity {
	author: ComplexTypes.identity;
	content: ComplexTypes.itemBody;
	createdDateTime: any;

}
/*********************************************
* privacy
**********************************************/
export interface privacy  {

	subjectRightsRequests(): IBaseQuery<subjectRightsRequest[]>;
	subjectRightsRequests(id: string | number): IBaseQuery<subjectRightsRequest>;
}
/*********************************************
* subjectRightsRequest
**********************************************/
export interface subjectRightsRequest extends entity {
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
export interface security  {

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
export interface attackSimulationRoot extends entity {

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
export interface alert extends entity {
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
/*********************************************
* secureScoreControlProfile
**********************************************/
export interface secureScoreControlProfile extends entity {
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
export interface secureScore extends entity {
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
* channel
**********************************************/
export interface channel extends entity {
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
export interface teamsAppInstallation extends entity {
	consentedPermissionSet: ComplexTypes.teamsAppPermissionSet;
	teamsApp(): IBaseQuery<teamsApp>;
	teamsAppDefinition(): IBaseQuery<teamsAppDefinition>;
}
/*********************************************
* conversationMember
**********************************************/
export interface conversationMember extends entity {
	displayName: string;
	roles: Array<string>[];
	visibleHistoryStartDateTime: any;

}
/*********************************************
* teamsAsyncOperation
**********************************************/
export interface teamsAsyncOperation extends entity {
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
* teamworkTag
**********************************************/
export interface teamworkTag extends entity {
	description: string;
	displayName: string;
	memberCount: number;
	tagType: EnumTypes.teamworkTagType;
	teamId: string;
	members(): IBaseQuery<teamworkTagMember[]>;
	members(id: string | number): IBaseQuery<teamworkTagMember>;
}
/*********************************************
* teamsTemplate
**********************************************/
export interface teamsTemplate extends entity {


}
/*********************************************
* schedule
**********************************************/
export interface schedule extends entity {
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
export interface compliance  {


}
/*********************************************
* itemAnalytics
**********************************************/
export interface itemAnalytics extends entity {

	allTime(): IBaseQuery<itemActivityStat>;
	itemActivityStats(): IBaseQuery<itemActivityStat[]>;
	itemActivityStats(id: string | number): IBaseQuery<itemActivityStat>;
	lastSevenDays(): IBaseQuery<itemActivityStat>;
}
/*********************************************
* columnDefinition
**********************************************/
export interface columnDefinition extends entity {
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
	sourceColumn(): IBaseQuery<columnDefinition>;
	update(values: any): IBaseQuery<null>;
}
/*********************************************
* contentType
**********************************************/
export interface contentType extends entity {
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
	base(): IBaseQuery<contentType>;
	baseTypes(): IBaseQuery<contentType[]>;
	baseTypes(id: string | number): IBaseQuery<contentType>;
	columnLinks(): IBaseQuery<columnLink[]>;
	columnLinks(id: string | number): IBaseQuery<columnLink>;
	columnPositions(): IBaseQuery<columnDefinition[]>;
	columnPositions(id: string | number): IBaseQuery<columnDefinition>;
	columns(): IBaseQuery<columnDefinition[]>;
	columns(id: string | number): IBaseQuery<columnDefinition>;
	update(values: any): IBaseQuery<null>;
}
/*********************************************
* list
**********************************************/
export interface list extends baseItem {
	displayName: string;
	list: ComplexTypes.listInfo;
	sharepointIds: ComplexTypes.sharepointIds;
	system: ComplexTypes.systemFacet;
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
	update(values: any): IBaseQuery<null>;
}
/*********************************************
* longRunningOperation
**********************************************/
export interface longRunningOperation extends entity {
	createdDateTime: any;
	lastActionDateTime: any;
	resourceLocation: string;
	status: EnumTypes.longRunningOperationStatus;
	statusDetail: string;

}
/*********************************************
* richLongRunningOperation
**********************************************/
export interface richLongRunningOperation extends longRunningOperation {
	error: ComplexTypes.publicError;
	percentageComplete: number;
	resourceId: string;
	type: string;

}
/*********************************************
* baseSitePage
**********************************************/
export interface baseSitePage extends baseItem {
	pageLayout: EnumTypes.pageLayoutType;
	publishingState: ComplexTypes.publicationFacet;
	title: string;

}
/*********************************************
* permission
**********************************************/
export interface permission extends entity {
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
	update(values: any): IBaseQuery<null>;
}
/*********************************************
* authenticationConditionApplication
**********************************************/
export interface authenticationConditionApplication  {
	appId: string;

}
/*********************************************
* identityUserFlowAttribute
**********************************************/
export interface identityUserFlowAttribute extends entity {
	dataType: EnumTypes.identityUserFlowAttributeDataType;
	description: string;
	displayName: string;
	userFlowAttributeType: EnumTypes.identityUserFlowAttributeType;

}
/*********************************************
* identityProviderBase
**********************************************/
export interface identityProviderBase extends entity {
	displayName: string;

}
/*********************************************
* customAuthenticationExtension
**********************************************/
export interface customAuthenticationExtension extends customCalloutExtension {


}
/*********************************************
* onTokenIssuanceStartCustomExtension
**********************************************/
export interface onTokenIssuanceStartCustomExtension extends customAuthenticationExtension {
	claimsForTokenConfiguration: ComplexTypes.onTokenIssuanceStartReturnClaim[];

}
/*********************************************
* identityApiConnector
**********************************************/
export interface identityApiConnector extends entity {
	authenticationConfiguration: ComplexTypes.apiAuthenticationConfigurationBase;
	displayName: string;
	targetUrl: string;

}
/*********************************************
* appleManagedIdentityProvider
**********************************************/
export interface appleManagedIdentityProvider extends identityProviderBase {
	certificateData: string;
	developerId: string;
	keyId: string;
	serviceId: string;

}
/*********************************************
* authenticationEventListener
**********************************************/
export interface authenticationEventListener extends entity {
	authenticationEventsFlowId: string;
	conditions: ComplexTypes.authenticationConditions;

}
/*********************************************
* authenticationEventsFlow
**********************************************/
export interface authenticationEventsFlow extends entity {
	conditions: ComplexTypes.authenticationConditions;
	description: string;
	displayName: string;

}
/*********************************************
* identityUserFlow
**********************************************/
export interface identityUserFlow extends entity {
	userFlowType: EnumTypes.userFlowType;
	userFlowTypeVersion: any;

}
/*********************************************
* b2xIdentityUserFlow
**********************************************/
export interface b2xIdentityUserFlow extends identityUserFlow {
	apiConnectorConfiguration: ComplexTypes.userFlowApiConnectorConfiguration;
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
export interface identityProvider extends entity {
	clientId: string;
	clientSecret: string;
	name: string;
	type: string;

}
/*********************************************
* userFlowLanguageConfiguration
**********************************************/
export interface userFlowLanguageConfiguration extends entity {
	displayName: string;
	isEnabled: boolean;
	defaultPages(): IBaseQuery<userFlowLanguagePage[]>;
	defaultPages(id: string | number): IBaseQuery<userFlowLanguagePage>;
	overridesPages(): IBaseQuery<userFlowLanguagePage[]>;
	overridesPages(id: string | number): IBaseQuery<userFlowLanguagePage>;
}
/*********************************************
* identityUserFlowAttributeAssignment
**********************************************/
export interface identityUserFlowAttributeAssignment extends entity {
	displayName: string;
	isOptional: boolean;
	requiresVerification: boolean;
	userAttributeValues: ComplexTypes.userAttributeValuesItem[];
	userInputType: EnumTypes.identityUserFlowAttributeInputType;
	userAttribute(): IBaseQuery<identityUserFlowAttribute>;
}
/*********************************************
* builtInIdentityProvider
**********************************************/
export interface builtInIdentityProvider extends identityProviderBase {
	identityProviderType: string;

}
/*********************************************
* externalUsersSelfServiceSignUpEventsFlow
**********************************************/
export interface externalUsersSelfServiceSignUpEventsFlow extends authenticationEventsFlow {
	onAttributeCollection: ComplexTypes.onAttributeCollectionHandler;
	onAuthenticationMethodLoadStart: ComplexTypes.onAuthenticationMethodLoadStartHandler;
	onInteractiveAuthFlowStart: ComplexTypes.onInteractiveAuthFlowStartHandler;
	onUserCreateStart: ComplexTypes.onUserCreateStartHandler;

}
/*********************************************
* identityBuiltInUserFlowAttribute
**********************************************/
export interface identityBuiltInUserFlowAttribute extends identityUserFlowAttribute {


}
/*********************************************
* identityContainer
**********************************************/
export interface identityContainer extends entity {

	healthIssues(): IBaseQuery<healthIssue[]>;
	healthIssues(id: string | number): IBaseQuery<healthIssue>;
	sensors(): IBaseQuery<sensor[]>;
	sensors(id: string | number): IBaseQuery<sensor>;
}
/*********************************************
* identityCustomUserFlowAttribute
**********************************************/
export interface identityCustomUserFlowAttribute extends identityUserFlowAttribute {


}
/*********************************************
* onAttributeCollectionListener
**********************************************/
export interface onAttributeCollectionListener extends authenticationEventListener {
	handler: ComplexTypes.onAttributeCollectionHandler;

}
/*********************************************
* onAuthenticationMethodLoadStartListener
**********************************************/
export interface onAuthenticationMethodLoadStartListener extends authenticationEventListener {
	handler: ComplexTypes.onAuthenticationMethodLoadStartHandler;

}
/*********************************************
* onInteractiveAuthFlowStartListener
**********************************************/
export interface onInteractiveAuthFlowStartListener extends authenticationEventListener {
	handler: ComplexTypes.onInteractiveAuthFlowStartHandler;

}
/*********************************************
* onTokenIssuanceStartListener
**********************************************/
export interface onTokenIssuanceStartListener extends authenticationEventListener {
	handler: ComplexTypes.onTokenIssuanceStartHandler;

}
/*********************************************
* onUserCreateStartListener
**********************************************/
export interface onUserCreateStartListener extends authenticationEventListener {
	handler: ComplexTypes.onUserCreateStartHandler;

}
/*********************************************
* socialIdentityProvider
**********************************************/
export interface socialIdentityProvider extends identityProviderBase {
	clientId: string;
	clientSecret: string;
	identityProviderType: string;

}
/*********************************************
* userFlowLanguagePage
**********************************************/
export interface userFlowLanguagePage extends entity {


}
/*********************************************
* deviceLocalCredentialInfo
**********************************************/
export interface deviceLocalCredentialInfo extends entity {
	credentials: ComplexTypes.deviceLocalCredential[];
	deviceName: string;
	lastBackupDateTime: any;
	refreshDateTime: any;

}
/*********************************************
* directory
**********************************************/
export interface directory extends entity {

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
export interface administrativeUnit extends directoryObject {
	description: string;
	displayName: string;
	isMemberManagementRestricted: boolean;
	membershipRule: string;
	membershipRuleProcessingState: string;
	membershipType: string;
	visibility: string;
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
export interface attributeSet extends entity {
	description: string;
	maxAttributesPerSet: number;

}
/*********************************************
* customSecurityAttributeDefinition
**********************************************/
export interface customSecurityAttributeDefinition extends entity {
	attributeSet: string;
	description: string;
	isCollection: boolean;
	isSearchable: boolean;
	name: string;
	status: string;
	type: string;
	usePreDefinedValuesOnly: boolean;
	allowedValues(): IBaseQuery<allowedValue[]>;
	allowedValues(id: string | number): IBaseQuery<allowedValue>;
}
/*********************************************
* onPremisesDirectorySynchronization
**********************************************/
export interface onPremisesDirectorySynchronization extends entity {
	configuration: ComplexTypes.onPremisesDirectorySynchronizationConfiguration;
	features: ComplexTypes.onPremisesDirectorySynchronizationFeature;

}
/*********************************************
* companySubscription
**********************************************/
export interface companySubscription extends entity {
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
/*********************************************
* allowedValue
**********************************************/
export interface allowedValue extends entity {
	isActive: boolean;

}
/*********************************************
* appScope
**********************************************/
export interface appScope extends entity {
	displayName: string;
	type: string;

}
/*********************************************
* certificateBasedAuthConfiguration
**********************************************/
export interface certificateBasedAuthConfiguration extends entity {
	certificateAuthorities: ComplexTypes.certificateAuthority[];

}
/*********************************************
* contract
**********************************************/
export interface contract extends directoryObject {
	contractType: string;
	customerId: any;
	defaultDomainName: string;
	displayName: string;

}
/*********************************************
* crossTenantAccessPolicyConfigurationDefault
**********************************************/
export interface crossTenantAccessPolicyConfigurationDefault extends entity {
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
/*********************************************
* crossTenantAccessPolicyConfigurationPartner
**********************************************/
export interface crossTenantAccessPolicyConfigurationPartner  {
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
	identitySynchronization(): IBaseQuery<crossTenantIdentitySyncPolicyPartner>;
}
/*********************************************
* policyTemplate
**********************************************/
export interface policyTemplate extends entity {

	multiTenantOrganizationIdentitySynchronization(): IBaseQuery<multiTenantOrganizationIdentitySyncPolicyTemplate>;
	multiTenantOrganizationPartnerConfiguration(): IBaseQuery<multiTenantOrganizationPartnerConfigurationTemplate>;
}
/*********************************************
* crossTenantIdentitySyncPolicyPartner
**********************************************/
export interface crossTenantIdentitySyncPolicyPartner  {
	displayName: string;
	tenantId: string;
	userSyncInbound: ComplexTypes.crossTenantUserSyncInbound;

}
/*********************************************
* device
**********************************************/
export interface device extends directoryObject {
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
export interface directoryObjectPartnerReference extends directoryObject {
	description: string;
	displayName: string;
	externalPartnerTenantId: any;
	objectType: string;

}
/*********************************************
* directoryRole
**********************************************/
export interface directoryRole extends directoryObject {
	description: string;
	displayName: string;
	roleTemplateId: string;
	members(): IBaseQuery<directoryObject[]>;
	members(id: string | number): IBaseQuery<directoryObject>;
	scopedMembers(): IBaseQuery<scopedRoleMembership[]>;
	scopedMembers(id: string | number): IBaseQuery<scopedRoleMembership>;
}
/*********************************************
* directoryRoleTemplate
**********************************************/
export interface directoryRoleTemplate extends directoryObject {
	description: string;
	displayName: string;

}
/*********************************************
* domain
**********************************************/
export interface domain extends entity {
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
export interface samlOrWsFedProvider extends identityProviderBase {
	issuerUri: string;
	metadataExchangeUri: string;
	passiveSignInUri: string;
	preferredAuthenticationProtocol: EnumTypes.authenticationProtocol;
	signingCertificate: string;

}
/*********************************************
* internalDomainFederation
**********************************************/
export interface internalDomainFederation extends samlOrWsFedProvider {
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
export interface domainDnsRecord extends entity {
	isOptional: boolean;
	label: string;
	recordType: string;
	supportedService: string;
	ttl: number;

}
/*********************************************
* domainDnsCnameRecord
**********************************************/
export interface domainDnsCnameRecord extends domainDnsRecord {
	canonicalName: string;

}
/*********************************************
* domainDnsMxRecord
**********************************************/
export interface domainDnsMxRecord extends domainDnsRecord {
	mailExchange: string;
	preference: number;

}
/*********************************************
* domainDnsSrvRecord
**********************************************/
export interface domainDnsSrvRecord extends domainDnsRecord {
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
export interface domainDnsTxtRecord extends domainDnsRecord {
	text: string;

}
/*********************************************
* domainDnsUnavailableRecord
**********************************************/
export interface domainDnsUnavailableRecord extends domainDnsRecord {
	description: string;

}
/*********************************************
* externalDomainName
**********************************************/
export interface externalDomainName extends entity {


}
/*********************************************
* groupSettingTemplate
**********************************************/
export interface groupSettingTemplate extends directoryObject {
	description: string;
	displayName: string;
	values: ComplexTypes.settingTemplateValue[];

}
/*********************************************
* multiTenantOrganization
**********************************************/
export interface multiTenantOrganization extends entity {
	createdDateTime: any;
	description: string;
	displayName: string;
	state: EnumTypes.multiTenantOrganizationState;
	joinRequest(): IBaseQuery<multiTenantOrganizationJoinRequestRecord>;
	tenants(): IBaseQuery<multiTenantOrganizationMember[]>;
	tenants(id: string | number): IBaseQuery<multiTenantOrganizationMember>;
}
/*********************************************
* multiTenantOrganizationJoinRequestRecord
**********************************************/
export interface multiTenantOrganizationJoinRequestRecord extends entity {
	addedByTenantId: string;
	memberState: EnumTypes.multiTenantOrganizationMemberState;
	role: EnumTypes.multiTenantOrganizationMemberRole;
	transitionDetails: ComplexTypes.multiTenantOrganizationJoinRequestTransitionDetails;

}
/*********************************************
* multiTenantOrganizationMember
**********************************************/
export interface multiTenantOrganizationMember extends directoryObject {
	addedByTenantId: any;
	addedDateTime: any;
	displayName: string;
	joinedDateTime: any;
	role: EnumTypes.multiTenantOrganizationMemberRole;
	state: EnumTypes.multiTenantOrganizationMemberState;
	tenantId: string;
	transitionDetails: ComplexTypes.multiTenantOrganizationMemberTransitionDetails;

}
/*********************************************
* multiTenantOrganizationIdentitySyncPolicyTemplate
**********************************************/
export interface multiTenantOrganizationIdentitySyncPolicyTemplate extends entity {
	templateApplicationLevel: EnumTypes.templateApplicationLevel;
	userSyncInbound: ComplexTypes.crossTenantUserSyncInbound;

}
/*********************************************
* multiTenantOrganizationPartnerConfigurationTemplate
**********************************************/
export interface multiTenantOrganizationPartnerConfigurationTemplate extends entity {
	automaticUserConsentSettings: ComplexTypes.inboundOutboundPolicyConfiguration;
	b2bCollaborationInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bCollaborationOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectInbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	b2bDirectConnectOutbound: ComplexTypes.crossTenantAccessPolicyB2BSetting;
	inboundTrust: ComplexTypes.crossTenantAccessPolicyInboundTrust;
	templateApplicationLevel: EnumTypes.templateApplicationLevel;

}
/*********************************************
* organization
**********************************************/
export interface organization extends directoryObject {
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
	branding(): IBaseQuery<organizationalBranding>;
	certificateBasedAuthConfiguration(): IBaseQuery<certificateBasedAuthConfiguration[]>;
	certificateBasedAuthConfiguration(id: string | number): IBaseQuery<certificateBasedAuthConfiguration>;
	extensions(): IBaseQuery<extension[]>;
	extensions(id: string | number): IBaseQuery<extension>;
}
/*********************************************
* organizationalBrandingProperties
**********************************************/
export interface organizationalBrandingProperties extends entity {
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
/*********************************************
* organizationalBranding
**********************************************/
export interface organizationalBranding extends organizationalBrandingProperties {

	localizations(): IBaseQuery<organizationalBrandingLocalization[]>;
	localizations(id: string | number): IBaseQuery<organizationalBrandingLocalization>;
}
/*********************************************
* organizationalBrandingLocalization
**********************************************/
export interface organizationalBrandingLocalization extends organizationalBrandingProperties {


}
/*********************************************
* orgContact
**********************************************/
export interface orgContact extends directoryObject {
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
export interface permissionGrantConditionSet extends entity {
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
export interface rbacApplication extends entity {

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
export interface unifiedRbacResourceNamespace extends entity {
	name: string;
	resourceActions(): IBaseQuery<unifiedRbacResourceAction[]>;
	resourceActions(id: string | number): IBaseQuery<unifiedRbacResourceAction>;
}
/*********************************************
* unifiedRoleAssignment
**********************************************/
export interface unifiedRoleAssignment extends entity {
	appScopeId: string;
	condition: string;
	directoryScopeId: string;
	principalId: string;
	roleDefinitionId: string;
	appScope(): IBaseQuery<appScope>;
	directoryScope(): IBaseQuery<directoryObject>;
	principal(): IBaseQuery<directoryObject>;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition>;
}
/*********************************************
* unifiedRoleDefinition
**********************************************/
export interface unifiedRoleDefinition extends entity {
	description: string;
	displayName: string;
	isBuiltIn: boolean;
	isEnabled: boolean;
	resourceScopes: Array<string>[];
	rolePermissions: ComplexTypes.unifiedRolePermission[];
	templateId: string;
	version: string;
	inheritsPermissionsFrom(): IBaseQuery<unifiedRoleDefinition[]>;
	inheritsPermissionsFrom(id: string | number): IBaseQuery<unifiedRoleDefinition>;
}
/*********************************************
* unifiedRoleScheduleInstanceBase
**********************************************/
export interface unifiedRoleScheduleInstanceBase extends entity {
	appScopeId: string;
	directoryScopeId: string;
	principalId: string;
	roleDefinitionId: string;
	appScope(): IBaseQuery<appScope>;
	directoryScope(): IBaseQuery<directoryObject>;
	principal(): IBaseQuery<directoryObject>;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition>;
}
/*********************************************
* unifiedRoleAssignmentScheduleInstance
**********************************************/
export interface unifiedRoleAssignmentScheduleInstance extends unifiedRoleScheduleInstanceBase {
	assignmentType: string;
	endDateTime: any;
	memberType: string;
	roleAssignmentOriginId: string;
	roleAssignmentScheduleId: string;
	startDateTime: any;
	activatedUsing(): IBaseQuery<unifiedRoleEligibilityScheduleInstance>;
}
/*********************************************
* request
**********************************************/
export interface request extends entity {
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
export interface unifiedRoleAssignmentScheduleRequest extends request {
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
export interface unifiedRoleScheduleBase extends entity {
	appScopeId: string;
	createdDateTime: any;
	createdUsing: string;
	directoryScopeId: string;
	modifiedDateTime: any;
	principalId: string;
	roleDefinitionId: string;
	status: string;
	appScope(): IBaseQuery<appScope>;
	directoryScope(): IBaseQuery<directoryObject>;
	principal(): IBaseQuery<directoryObject>;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition>;
}
/*********************************************
* unifiedRoleAssignmentSchedule
**********************************************/
export interface unifiedRoleAssignmentSchedule extends unifiedRoleScheduleBase {
	assignmentType: string;
	memberType: string;
	scheduleInfo: ComplexTypes.requestSchedule;
	activatedUsing(): IBaseQuery<unifiedRoleEligibilitySchedule>;
}
/*********************************************
* unifiedRoleEligibilityScheduleInstance
**********************************************/
export interface unifiedRoleEligibilityScheduleInstance extends unifiedRoleScheduleInstanceBase {
	endDateTime: any;
	memberType: string;
	roleEligibilityScheduleId: string;
	startDateTime: any;

}
/*********************************************
* unifiedRoleEligibilityScheduleRequest
**********************************************/
export interface unifiedRoleEligibilityScheduleRequest extends request {
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
	appScope(): IBaseQuery<appScope>;
	directoryScope(): IBaseQuery<directoryObject>;
	principal(): IBaseQuery<directoryObject>;
	roleDefinition(): IBaseQuery<unifiedRoleDefinition>;
	targetSchedule(): IBaseQuery<unifiedRoleEligibilitySchedule>;
}
/*********************************************
* unifiedRoleEligibilitySchedule
**********************************************/
export interface unifiedRoleEligibilitySchedule extends unifiedRoleScheduleBase {
	memberType: string;
	scheduleInfo: ComplexTypes.requestSchedule;

}
/*********************************************
* targetDeviceGroup
**********************************************/
export interface targetDeviceGroup extends entity {
	displayName: string;

}
/*********************************************
* roleManagement
**********************************************/
export interface roleManagement  {

	directory(): IBaseQuery<rbacApplication>;
	entitlementManagement(): IBaseQuery<rbacApplication>;
}
/*********************************************
* samlOrWsFedExternalDomainFederation
**********************************************/
export interface samlOrWsFedExternalDomainFederation extends samlOrWsFedProvider {

	domains(): IBaseQuery<externalDomainName[]>;
	domains(id: string | number): IBaseQuery<externalDomainName>;
}
/*********************************************
* subscribedSku
**********************************************/
export interface subscribedSku extends entity {
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
/*********************************************
* tenantRelationship
**********************************************/
export interface tenantRelationship  {

	multiTenantOrganization(): IBaseQuery<multiTenantOrganization>;
	delegatedAdminCustomers(): IBaseQuery<delegatedAdminCustomer[]>;
	delegatedAdminCustomers(id: string | number): IBaseQuery<delegatedAdminCustomer>;
	delegatedAdminRelationships(): IBaseQuery<delegatedAdminRelationship[]>;
	delegatedAdminRelationships(id: string | number): IBaseQuery<delegatedAdminRelationship>;
}
/*********************************************
* delegatedAdminCustomer
**********************************************/
export interface delegatedAdminCustomer extends entity {
	displayName: string;
	tenantId: string;
	serviceManagementDetails(): IBaseQuery<delegatedAdminServiceManagementDetail[]>;
	serviceManagementDetails(id: string | number): IBaseQuery<delegatedAdminServiceManagementDetail>;
}
/*********************************************
* delegatedAdminRelationship
**********************************************/
export interface delegatedAdminRelationship extends entity {
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
export interface unifiedRbacResourceAction extends entity {
	actionVerb: string;
	authenticationContextId: string;
	description: string;
	isAuthenticationContextSettable: boolean;
	name: string;
	resourceScopeId: string;

}
/*********************************************
* admin
**********************************************/
export interface admin  {

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
export interface edge extends entity {

	internetExplorerMode(): IBaseQuery<internetExplorerMode>;
}
/*********************************************
* sharepoint
**********************************************/
export interface sharepoint extends entity {

	settings(): IBaseQuery<sharepointSettings>;
}
/*********************************************
* adminMicrosoft365Apps
**********************************************/
export interface adminMicrosoft365Apps extends entity {

	installationOptions(): IBaseQuery<m365AppsInstallationOptions>;
}
/*********************************************
* serviceAnnouncement
**********************************************/
export interface serviceAnnouncement extends entity {

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
export interface adminReportSettings extends entity {
	displayConcealedNames: boolean;

}
/*********************************************
* peopleAdminSettings
**********************************************/
export interface peopleAdminSettings extends entity {

	profileCardProperties(): IBaseQuery<profileCardProperty[]>;
	profileCardProperties(id: string | number): IBaseQuery<profileCardProperty>;
	pronouns(): IBaseQuery<pronounsSettings>;
	itemInsights(): IBaseQuery<insightsSettings>;
}
/*********************************************
* browserSharedCookie
**********************************************/
export interface browserSharedCookie extends entity {
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
/*********************************************
* browserSite
**********************************************/
export interface browserSite extends entity {
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
/*********************************************
* browserSiteList
**********************************************/
export interface browserSiteList extends entity {
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	publishedBy: ComplexTypes.identitySet;
	publishedDateTime: any;
	revision: string;
	status: EnumTypes.browserSiteListStatus;
	sharedCookies(): IBaseQuery<browserSharedCookie[]>;
	sharedCookies(id: string | number): IBaseQuery<browserSharedCookie>;
	sites(): IBaseQuery<browserSite[]>;
	sites(id: string | number): IBaseQuery<browserSite>;
}
/*********************************************
* internetExplorerMode
**********************************************/
export interface internetExplorerMode extends entity {

	siteLists(): IBaseQuery<browserSiteList[]>;
	siteLists(id: string | number): IBaseQuery<browserSiteList>;
}
/*********************************************
* educationAssignment
**********************************************/
export interface educationAssignment extends entity {
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
export interface educationCategory extends entity {
	displayName: string;

}
/*********************************************
* educationGradingCategory
**********************************************/
export interface educationGradingCategory extends entity {
	displayName: string;
	percentageWeight: number;

}
/*********************************************
* educationAssignmentResource
**********************************************/
export interface educationAssignmentResource extends entity {
	distributeForStudentWork: boolean;
	resource: ComplexTypes.educationResource;

}
/*********************************************
* educationRubric
**********************************************/
export interface educationRubric extends entity {
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
export interface educationSubmission extends entity {
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
export interface educationAssignmentDefaults extends entity {
	addedStudentAction: EnumTypes.educationAddedStudentAction;
	addToCalendarAction: EnumTypes.educationAddToCalendarOptions;
	dueTime: any;
	notificationChannelUrl: string;

}
/*********************************************
* educationAssignmentSettings
**********************************************/
export interface educationAssignmentSettings extends entity {
	submissionAnimationDisabled: boolean;
	gradingCategories(): IBaseQuery<educationGradingCategory[]>;
	gradingCategories(id: string | number): IBaseQuery<educationGradingCategory>;
}
/*********************************************
* educationClass
**********************************************/
export interface educationClass extends entity {
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
export interface educationModule extends entity {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
	isPinned: boolean;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	resourcesFolderUrl: string;
	status: EnumTypes.educationModuleStatus;
	resources(): IBaseQuery<educationModuleResource[]>;
	resources(id: string | number): IBaseQuery<educationModuleResource>;
}
/*********************************************
* educationUser
**********************************************/
export interface educationUser extends entity {
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
export interface educationOrganization extends entity {
	description: string;
	displayName: string;
	externalSource: EnumTypes.educationExternalSource;
	externalSourceDetail: string;

}
/*********************************************
* educationSchool
**********************************************/
export interface educationSchool extends educationOrganization {
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
	administrativeUnit(): IBaseQuery<administrativeUnit>;
	classes(): IBaseQuery<educationClass[]>;
	classes(id: string | number): IBaseQuery<educationClass>;
	users(): IBaseQuery<educationUser[]>;
	users(id: string | number): IBaseQuery<educationUser>;
}
/*********************************************
* educationOutcome
**********************************************/
export interface educationOutcome extends entity {
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;

}
/*********************************************
* educationFeedbackOutcome
**********************************************/
export interface educationFeedbackOutcome extends educationOutcome {
	feedback: ComplexTypes.educationFeedback;
	publishedFeedback: ComplexTypes.educationFeedback;

}
/*********************************************
* educationFeedbackResourceOutcome
**********************************************/
export interface educationFeedbackResourceOutcome extends educationOutcome {
	feedbackResource: ComplexTypes.educationResource;
	resourceStatus: EnumTypes.educationFeedbackResourceOutcomeStatus;

}
/*********************************************
* educationModuleResource
**********************************************/
export interface educationModuleResource extends entity {
	resource: ComplexTypes.educationResource;

}
/*********************************************
* educationPointsOutcome
**********************************************/
export interface educationPointsOutcome extends educationOutcome {
	points: ComplexTypes.educationAssignmentPointsGrade;
	publishedPoints: ComplexTypes.educationAssignmentPointsGrade;

}
/*********************************************
* educationRoot
**********************************************/
export interface educationRoot  {

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
export interface educationRubricOutcome extends educationOutcome {
	publishedRubricQualityFeedback: ComplexTypes.rubricQualityFeedbackModel[];
	publishedRubricQualitySelectedLevels: ComplexTypes.rubricQualitySelectedColumnModel[];
	rubricQualityFeedback: ComplexTypes.rubricQualityFeedbackModel[];
	rubricQualitySelectedLevels: ComplexTypes.rubricQualitySelectedColumnModel[];

}
/*********************************************
* educationSubmissionResource
**********************************************/
export interface educationSubmissionResource extends entity {
	assignmentResourceUrl: string;
	resource: ComplexTypes.educationResource;

}
/*********************************************
* restorePoint
**********************************************/
export interface restorePoint extends entity {
	expirationDateTime: any;
	protectionDateTime: any;
	tags: EnumTypes.restorePointTags;
	protectionUnit(): IBaseQuery<protectionUnitBase>;
}
/*********************************************
* protectionRuleBase
**********************************************/
export interface protectionRuleBase extends entity {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	error: ComplexTypes.publicError;
	isAutoApplyEnabled: boolean;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	status: EnumTypes.protectionRuleStatus;

}
/*********************************************
* driveProtectionRule
**********************************************/
export interface driveProtectionRule extends protectionRuleBase {
	driveExpression: string;

}
/*********************************************
* protectionUnitBase
**********************************************/
export interface protectionUnitBase extends entity {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	error: ComplexTypes.publicError;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	policyId: string;
	status: EnumTypes.protectionUnitStatus;

}
/*********************************************
* driveProtectionUnit
**********************************************/
export interface driveProtectionUnit extends protectionUnitBase {
	directoryObjectId: string;
	displayName: string;
	email: string;

}
/*********************************************
* protectionPolicyBase
**********************************************/
export interface protectionPolicyBase extends entity {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	retentionSettings: ComplexTypes.retentionSetting[];
	status: EnumTypes.protectionPolicyStatus;

}
/*********************************************
* exchangeProtectionPolicy
**********************************************/
export interface exchangeProtectionPolicy extends protectionPolicyBase {

	mailboxInclusionRules(): IBaseQuery<mailboxProtectionRule[]>;
	mailboxInclusionRules(id: string | number): IBaseQuery<mailboxProtectionRule>;
	mailboxProtectionUnits(): IBaseQuery<mailboxProtectionUnit[]>;
	mailboxProtectionUnits(id: string | number): IBaseQuery<mailboxProtectionUnit>;
}
/*********************************************
* restoreSessionBase
**********************************************/
export interface restoreSessionBase extends entity {
	completedDateTime: any;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	error: ComplexTypes.publicError;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	status: EnumTypes.restoreSessionStatus;

}
/*********************************************
* exchangeRestoreSession
**********************************************/
export interface exchangeRestoreSession extends restoreSessionBase {

	granularMailboxRestoreArtifacts(): IBaseQuery<granularMailboxRestoreArtifact[]>;
	granularMailboxRestoreArtifacts(id: string | number): IBaseQuery<granularMailboxRestoreArtifact>;
	mailboxRestoreArtifacts(): IBaseQuery<mailboxRestoreArtifact[]>;
	mailboxRestoreArtifacts(id: string | number): IBaseQuery<mailboxRestoreArtifact>;
}
/*********************************************
* mailboxProtectionRule
**********************************************/
export interface mailboxProtectionRule extends protectionRuleBase {
	mailboxExpression: string;

}
/*********************************************
* mailboxProtectionUnit
**********************************************/
export interface mailboxProtectionUnit extends protectionUnitBase {
	directoryObjectId: string;
	displayName: string;
	email: string;

}
/*********************************************
* oneDriveForBusinessProtectionPolicy
**********************************************/
export interface oneDriveForBusinessProtectionPolicy extends protectionPolicyBase {

	driveInclusionRules(): IBaseQuery<driveProtectionRule[]>;
	driveInclusionRules(id: string | number): IBaseQuery<driveProtectionRule>;
	driveProtectionUnits(): IBaseQuery<driveProtectionUnit[]>;
	driveProtectionUnits(id: string | number): IBaseQuery<driveProtectionUnit>;
}
/*********************************************
* oneDriveForBusinessRestoreSession
**********************************************/
export interface oneDriveForBusinessRestoreSession extends restoreSessionBase {

	driveRestoreArtifacts(): IBaseQuery<driveRestoreArtifact[]>;
	driveRestoreArtifacts(id: string | number): IBaseQuery<driveRestoreArtifact>;
}
/*********************************************
* serviceApp
**********************************************/
export interface serviceApp extends entity {
	application: ComplexTypes.identity;
	effectiveDateTime: any;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	registrationDateTime: any;
	status: EnumTypes.serviceAppStatus;

}
/*********************************************
* sharePointProtectionPolicy
**********************************************/
export interface sharePointProtectionPolicy extends protectionPolicyBase {

	siteInclusionRules(): IBaseQuery<siteProtectionRule[]>;
	siteInclusionRules(id: string | number): IBaseQuery<siteProtectionRule>;
	siteProtectionUnits(): IBaseQuery<siteProtectionUnit[]>;
	siteProtectionUnits(id: string | number): IBaseQuery<siteProtectionUnit>;
}
/*********************************************
* sharePointRestoreSession
**********************************************/
export interface sharePointRestoreSession extends restoreSessionBase {

	siteRestoreArtifacts(): IBaseQuery<siteRestoreArtifact[]>;
	siteRestoreArtifacts(id: string | number): IBaseQuery<siteRestoreArtifact>;
}
/*********************************************
* siteProtectionRule
**********************************************/
export interface siteProtectionRule extends protectionRuleBase {
	siteExpression: string;

}
/*********************************************
* siteProtectionUnit
**********************************************/
export interface siteProtectionUnit extends protectionUnitBase {
	siteId: string;
	siteName: string;
	siteWebUrl: string;

}
/*********************************************
* restoreArtifactBase
**********************************************/
export interface restoreArtifactBase extends entity {
	completionDateTime: any;
	destinationType: EnumTypes.destinationType;
	error: ComplexTypes.publicError;
	startDateTime: any;
	status: EnumTypes.artifactRestoreStatus;
	restorePoint(): IBaseQuery<restorePoint>;
}
/*********************************************
* driveRestoreArtifact
**********************************************/
export interface driveRestoreArtifact extends restoreArtifactBase {
	restoredSiteId: string;
	restoredSiteName: string;
	restoredSiteWebUrl: string;

}
/*********************************************
* mailboxRestoreArtifact
**********************************************/
export interface mailboxRestoreArtifact extends restoreArtifactBase {
	restoredFolderId: string;
	restoredFolderName: string;

}
/*********************************************
* granularMailboxRestoreArtifact
**********************************************/
export interface granularMailboxRestoreArtifact extends mailboxRestoreArtifact {
	artifactCount: number;
	searchResponseId: string;

}
/*********************************************
* siteRestoreArtifact
**********************************************/
export interface siteRestoreArtifact extends restoreArtifactBase {
	restoredSiteId: string;
	restoredSiteName: string;
	restoredSiteWebUrl: string;

}
/*********************************************
* driveItem
**********************************************/
export interface driveItem extends baseItem {
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
export interface workbook extends entity {

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
export interface listItem extends baseItem {
	contentType: ComplexTypes.contentTypeInfo;
	sharepointIds: ComplexTypes.sharepointIds;
	analytics(): IBaseQuery<itemAnalytics>;
	documentSetVersions(): IBaseQuery<documentSetVersion[]>;
	documentSetVersions(id: string | number): IBaseQuery<documentSetVersion>;
	driveItem(): IBaseQuery<driveItem>;
	fields(): IBaseQuery<fieldValueSet>;
	versions(): IBaseQuery<listItemVersion[]>;
	versions(id: string | number): IBaseQuery<listItemVersion>;
	extractSensitivityLabel(values: any): IBaseQuery<null>;
	setSensitivityLabel(values: { actionSource?: string; assignmentMethod?: string; id: string; justificationText?: string; }): IBaseQuery<null>;
	update(values: any): IBaseQuery<null>;
}
/*********************************************
* itemRetentionLabel
**********************************************/
export interface itemRetentionLabel extends entity {
	isLabelAppliedExplicitly: boolean;
	labelAppliedBy: ComplexTypes.identitySet;
	labelAppliedDateTime: any;
	name: string;
	retentionSettings: ComplexTypes.retentionLabelSettings;

}
/*********************************************
* subscription
**********************************************/
export interface subscription extends entity {
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
export interface thumbnailSet extends entity {
	large: ComplexTypes.thumbnail;
	medium: ComplexTypes.thumbnail;
	small: ComplexTypes.thumbnail;
	source: ComplexTypes.thumbnail;

}
/*********************************************
* baseItemVersion
**********************************************/
export interface baseItemVersion extends entity {
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	publication: ComplexTypes.publicationFacet;

}
/*********************************************
* driveItemVersion
**********************************************/
export interface driveItemVersion extends baseItemVersion {
	content: any;
	size: number;

}
/*********************************************
* workbookApplication
**********************************************/
export interface workbookApplication extends entity {
	calculationMode: string;

}
/*********************************************
* workbookComment
**********************************************/
export interface workbookComment extends entity {
	content: string;
	contentType: string;
	replies(): IBaseQuery<workbookCommentReply[]>;
	replies(id: string | number): IBaseQuery<workbookCommentReply>;
}
/*********************************************
* workbookFunctions
**********************************************/
export interface workbookFunctions extends entity {


}
/*********************************************
* workbookNamedItem
**********************************************/
export interface workbookNamedItem extends entity {
	comment: string;
	name: string;
	scope: string;
	type: string;
	value: ComplexTypes.Json;
	visible: boolean;
	worksheet(): IBaseQuery<workbookWorksheet>;
}
/*********************************************
* workbookOperation
**********************************************/
export interface workbookOperation extends entity {
	error: ComplexTypes.workbookOperationError;
	resourceLocation: string;
	status: EnumTypes.workbookOperationStatus;

}
/*********************************************
* workbookTable
**********************************************/
export interface workbookTable extends entity {
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
export interface workbookWorksheet extends entity {
	name: string;
	position: number;
	visibility: string;
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
export interface workbookChart extends entity {
	height: number;
	left: number;
	name: string;
	top: number;
	width: number;
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
export interface workbookChartAxes extends entity {

	categoryAxis(): IBaseQuery<workbookChartAxis>;
	seriesAxis(): IBaseQuery<workbookChartAxis>;
	valueAxis(): IBaseQuery<workbookChartAxis>;
}
/*********************************************
* workbookChartDataLabels
**********************************************/
export interface workbookChartDataLabels extends entity {
	position: string;
	separator: string;
	showBubbleSize: boolean;
	showCategoryName: boolean;
	showLegendKey: boolean;
	showPercentage: boolean;
	showSeriesName: boolean;
	showValue: boolean;
	format(): IBaseQuery<workbookChartDataLabelFormat>;
}
/*********************************************
* workbookChartAreaFormat
**********************************************/
export interface workbookChartAreaFormat extends entity {

	fill(): IBaseQuery<workbookChartFill>;
	font(): IBaseQuery<workbookChartFont>;
}
/*********************************************
* workbookChartLegend
**********************************************/
export interface workbookChartLegend extends entity {
	overlay: boolean;
	position: string;
	visible: boolean;
	format(): IBaseQuery<workbookChartLegendFormat>;
}
/*********************************************
* workbookChartSeries
**********************************************/
export interface workbookChartSeries extends entity {
	name: string;
	format(): IBaseQuery<workbookChartSeriesFormat>;
	points(): IBaseQuery<workbookChartPoint[]>;
	points(id: string | number): IBaseQuery<workbookChartPoint>;
}
/*********************************************
* workbookChartTitle
**********************************************/
export interface workbookChartTitle extends entity {
	overlay: boolean;
	text: string;
	visible: boolean;
	format(): IBaseQuery<workbookChartTitleFormat>;
}
/*********************************************
* workbookChartFill
**********************************************/
export interface workbookChartFill extends entity {


}
/*********************************************
* workbookChartFont
**********************************************/
export interface workbookChartFont extends entity {
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
export interface workbookChartAxis extends entity {
	majorUnit: ComplexTypes.Json;
	maximum: ComplexTypes.Json;
	minimum: ComplexTypes.Json;
	minorUnit: ComplexTypes.Json;
	format(): IBaseQuery<workbookChartAxisFormat>;
	majorGridlines(): IBaseQuery<workbookChartGridlines>;
	minorGridlines(): IBaseQuery<workbookChartGridlines>;
	title(): IBaseQuery<workbookChartAxisTitle>;
}
/*********************************************
* workbookChartAxisFormat
**********************************************/
export interface workbookChartAxisFormat extends entity {

	font(): IBaseQuery<workbookChartFont>;
	line(): IBaseQuery<workbookChartLineFormat>;
}
/*********************************************
* workbookChartGridlines
**********************************************/
export interface workbookChartGridlines extends entity {
	visible: boolean;
	format(): IBaseQuery<workbookChartGridlinesFormat>;
}
/*********************************************
* workbookChartAxisTitle
**********************************************/
export interface workbookChartAxisTitle extends entity {
	text: string;
	visible: boolean;
	format(): IBaseQuery<workbookChartAxisTitleFormat>;
}
/*********************************************
* workbookChartLineFormat
**********************************************/
export interface workbookChartLineFormat extends entity {
	color: string;

}
/*********************************************
* workbookChartAxisTitleFormat
**********************************************/
export interface workbookChartAxisTitleFormat extends entity {

	font(): IBaseQuery<workbookChartFont>;
}
/*********************************************
* workbookChartDataLabelFormat
**********************************************/
export interface workbookChartDataLabelFormat extends entity {

	fill(): IBaseQuery<workbookChartFill>;
	font(): IBaseQuery<workbookChartFont>;
}
/*********************************************
* workbookChartGridlinesFormat
**********************************************/
export interface workbookChartGridlinesFormat extends entity {

	line(): IBaseQuery<workbookChartLineFormat>;
}
/*********************************************
* workbookChartLegendFormat
**********************************************/
export interface workbookChartLegendFormat extends entity {

	fill(): IBaseQuery<workbookChartFill>;
	font(): IBaseQuery<workbookChartFont>;
}
/*********************************************
* workbookChartPoint
**********************************************/
export interface workbookChartPoint extends entity {
	value: ComplexTypes.Json;
	format(): IBaseQuery<workbookChartPointFormat>;
}
/*********************************************
* workbookChartPointFormat
**********************************************/
export interface workbookChartPointFormat extends entity {

	fill(): IBaseQuery<workbookChartFill>;
}
/*********************************************
* workbookChartSeriesFormat
**********************************************/
export interface workbookChartSeriesFormat extends entity {

	fill(): IBaseQuery<workbookChartFill>;
	line(): IBaseQuery<workbookChartLineFormat>;
}
/*********************************************
* workbookChartTitleFormat
**********************************************/
export interface workbookChartTitleFormat extends entity {

	fill(): IBaseQuery<workbookChartFill>;
	font(): IBaseQuery<workbookChartFont>;
}
/*********************************************
* workbookCommentReply
**********************************************/
export interface workbookCommentReply extends entity {
	content: string;
	contentType: string;

}
/*********************************************
* workbookFilter
**********************************************/
export interface workbookFilter extends entity {
	criteria: ComplexTypes.workbookFilterCriteria;

}
/*********************************************
* workbookFormatProtection
**********************************************/
export interface workbookFormatProtection extends entity {
	formulaHidden: boolean;
	locked: boolean;

}
/*********************************************
* workbookFunctionResult
**********************************************/
export interface workbookFunctionResult extends entity {
	error: string;
	value: ComplexTypes.Json;

}
/*********************************************
* workbookPivotTable
**********************************************/
export interface workbookPivotTable extends entity {
	name: string;
	worksheet(): IBaseQuery<workbookWorksheet>;
}
/*********************************************
* workbookRange
**********************************************/
export interface workbookRange extends entity {
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
	format(): IBaseQuery<workbookRangeFormat>;
	sort(): IBaseQuery<workbookRangeSort>;
	worksheet(): IBaseQuery<workbookWorksheet>;
}
/*********************************************
* workbookRangeFormat
**********************************************/
export interface workbookRangeFormat extends entity {
	columnWidth: number;
	horizontalAlignment: string;
	rowHeight: number;
	verticalAlignment: string;
	wrapText: boolean;
	borders(): IBaseQuery<workbookRangeBorder[]>;
	borders(id: string | number): IBaseQuery<workbookRangeBorder>;
	fill(): IBaseQuery<workbookRangeFill>;
	font(): IBaseQuery<workbookRangeFont>;
	protection(): IBaseQuery<workbookFormatProtection>;
}
/*********************************************
* workbookRangeSort
**********************************************/
export interface workbookRangeSort extends entity {


}
/*********************************************
* workbookRangeBorder
**********************************************/
export interface workbookRangeBorder extends entity {
	color: string;
	sideIndex: string;
	style: string;
	weight: string;

}
/*********************************************
* workbookRangeFill
**********************************************/
export interface workbookRangeFill extends entity {
	color: string;

}
/*********************************************
* workbookRangeFont
**********************************************/
export interface workbookRangeFont extends entity {
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
export interface workbookRangeView extends entity {
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
	rows(): IBaseQuery<workbookRangeView[]>;
	rows(id: string | number): IBaseQuery<workbookRangeView>;
}
/*********************************************
* workbookTableColumn
**********************************************/
export interface workbookTableColumn extends entity {
	index: number;
	name: string;
	values: ComplexTypes.Json;
	filter(): IBaseQuery<workbookFilter>;
}
/*********************************************
* workbookTableRow
**********************************************/
export interface workbookTableRow extends entity {
	index: number;
	values: ComplexTypes.Json;

}
/*********************************************
* workbookTableSort
**********************************************/
export interface workbookTableSort extends entity {
	fields: ComplexTypes.workbookSortField[];
	matchCase: boolean;
	method: string;

}
/*********************************************
* workbookWorksheetProtection
**********************************************/
export interface workbookWorksheetProtection extends entity {
	options: ComplexTypes.workbookWorksheetProtectionOptions;
	protected: boolean;

}
/*********************************************
* place
**********************************************/
export interface place extends entity {
	address: ComplexTypes.physicalAddress;
	displayName: string;
	geoCoordinates: ComplexTypes.outlookGeoCoordinates;
	phone: string;

}
/*********************************************
* room
**********************************************/
export interface room extends place {
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
export interface roomList extends place {
	emailAddress: string;
	rooms(): IBaseQuery<room[]>;
	rooms(id: string | number): IBaseQuery<room>;
}
/*********************************************
* attachment
**********************************************/
export interface attachment extends entity {
	contentType: string;
	isInline: boolean;
	lastModifiedDateTime: any;
	name: string;
	size: number;

}
/*********************************************
* calendarPermission
**********************************************/
export interface calendarPermission extends entity {
	allowedRoles: EnumTypes.calendarRoleType[];
	emailAddress: ComplexTypes.emailAddress;
	isInsideOrganization: boolean;
	isRemovable: boolean;
	role: EnumTypes.calendarRoleType;

}
/*********************************************
* multiValueLegacyExtendedProperty
**********************************************/
export interface multiValueLegacyExtendedProperty extends entity {
	value: Array<string>[];

}
/*********************************************
* singleValueLegacyExtendedProperty
**********************************************/
export interface singleValueLegacyExtendedProperty extends entity {
	value: string;

}
/*********************************************
* calendarSharingMessage
**********************************************/
export interface calendarSharingMessage extends message {
	canAccept: boolean;
	sharingMessageAction: ComplexTypes.calendarSharingMessageAction;
	sharingMessageActions: ComplexTypes.calendarSharingMessageAction[];
	suggestedCalendarName: string;

}
/*********************************************
* post
**********************************************/
export interface post extends outlookItem {
	body: ComplexTypes.itemBody;
	conversationId: string;
	conversationThreadId: string;
	from: ComplexTypes.recipient;
	hasAttachments: boolean;
	newParticipants: ComplexTypes.recipient[];
	receivedDateTime: any;
	sender: ComplexTypes.recipient;
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
export interface eventMessage extends message {
	endDateTime: ComplexTypes.dateTimeTimeZone;
	isAllDay: boolean;
	isDelegated: boolean;
	isOutOfDate: boolean;
	location: ComplexTypes.location;
	meetingMessageType: EnumTypes.meetingMessageType;
	recurrence: ComplexTypes.patternedRecurrence;
	startDateTime: ComplexTypes.dateTimeTimeZone;
	type: EnumTypes.eventType;
	event(): IBaseQuery<event>;
}
/*********************************************
* eventMessageRequest
**********************************************/
export interface eventMessageRequest extends eventMessage {
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
export interface eventMessageResponse extends eventMessage {
	proposedNewTime: ComplexTypes.timeSlot;
	responseType: EnumTypes.responseType;

}
/*********************************************
* fileAttachment
**********************************************/
export interface fileAttachment extends attachment {
	contentBytes: any;
	contentId: string;
	contentLocation: string;

}
/*********************************************
* inferenceClassificationOverride
**********************************************/
export interface inferenceClassificationOverride extends entity {
	classifyAs: EnumTypes.inferenceClassificationType;
	senderEmailAddress: ComplexTypes.emailAddress;

}
/*********************************************
* itemAttachment
**********************************************/
export interface itemAttachment extends attachment {

	item(): IBaseQuery<outlookItem>;
}
/*********************************************
* messageRule
**********************************************/
export interface messageRule extends entity {
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
export interface mailSearchFolder extends mailFolder {
	filterQuery: string;
	includeNestedFolders: boolean;
	isSupported: boolean;
	sourceFolderIds: Array<string>[];

}
/*********************************************
* openTypeExtension
**********************************************/
export interface openTypeExtension extends extension {
	extensionName: string;

}
/*********************************************
* outlookCategory
**********************************************/
export interface outlookCategory extends entity {
	color: EnumTypes.categoryColor;
	displayName: string;

}
/*********************************************
* referenceAttachment
**********************************************/
export interface referenceAttachment extends attachment {


}
/*********************************************
* fileStorage
**********************************************/
export interface fileStorage extends entity {

	containers(): IBaseQuery<fileStorageContainer[]>;
	containers(id: string | number): IBaseQuery<fileStorageContainer>;
}
/*********************************************
* fileStorageContainer
**********************************************/
export interface fileStorageContainer extends entity {
	containerTypeId: any;
	createdDateTime: any;
	customProperties: ComplexTypes.fileStorageContainerCustomPropertyDictionary;
	description: string;
	displayName: string;
	settings: ComplexTypes.fileStorageContainerSettings;
	status: EnumTypes.fileStorageContainerStatus;
	viewpoint: ComplexTypes.fileStorageContainerViewpoint;
	drive(): IBaseQuery<drive>;
	permissions(): IBaseQuery<permission[]>;
	permissions(id: string | number): IBaseQuery<permission>;
}
/*********************************************
* sharepointSettings
**********************************************/
export interface sharepointSettings extends entity {
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
/*********************************************
* storage
**********************************************/
export interface storage  {

	fileStorage(): IBaseQuery<fileStorage>;
	settings(): IBaseQuery<storageSettings>;
}
/*********************************************
* storageSettings
**********************************************/
export interface storageSettings extends entity {

	quota(): IBaseQuery<unifiedStorageQuota>;
}
/*********************************************
* canvasLayout
**********************************************/
export interface canvasLayout extends entity {

	horizontalSections(): IBaseQuery<horizontalSection[]>;
	horizontalSections(id: string | number): IBaseQuery<horizontalSection>;
	verticalSection(): IBaseQuery<verticalSection>;
}
/*********************************************
* horizontalSection
**********************************************/
export interface horizontalSection extends entity {
	emphasis: EnumTypes.sectionEmphasisType;
	layout: EnumTypes.horizontalSectionLayoutType;
	columns(): IBaseQuery<horizontalSectionColumn[]>;
	columns(id: string | number): IBaseQuery<horizontalSectionColumn>;
}
/*********************************************
* verticalSection
**********************************************/
export interface verticalSection extends entity {
	emphasis: EnumTypes.sectionEmphasisType;
	webparts(): IBaseQuery<webPart[]>;
	webparts(id: string | number): IBaseQuery<webPart>;
}
/*********************************************
* columnLink
**********************************************/
export interface columnLink extends entity {
	name: string;

}
/*********************************************
* listItemVersion
**********************************************/
export interface listItemVersion extends baseItemVersion {

	fields(): IBaseQuery<fieldValueSet>;
}
/*********************************************
* documentSetVersion
**********************************************/
export interface documentSetVersion extends listItemVersion {
	comment: string;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	items: ComplexTypes.documentSetVersionItem[];
	shouldCaptureMinorVersion: boolean;

}
/*********************************************
* fieldValueSet
**********************************************/
export interface fieldValueSet extends entity {


}
/*********************************************
* horizontalSectionColumn
**********************************************/
export interface horizontalSectionColumn extends entity {
	width: number;
	webparts(): IBaseQuery<webPart[]>;
	webparts(id: string | number): IBaseQuery<webPart>;
}
/*********************************************
* webPart
**********************************************/
export interface webPart extends entity {


}
/*********************************************
* itemActivity
**********************************************/
export interface itemActivity extends entity {
	access: ComplexTypes.accessAction;
	activityDateTime: any;
	actor: ComplexTypes.identitySet;
	driveItem(): IBaseQuery<driveItem>;
}
/*********************************************
* itemActivityStat
**********************************************/
export interface itemActivityStat extends entity {
	access: ComplexTypes.itemActionStat;
	create: ComplexTypes.itemActionStat;
	delete: ComplexTypes.itemActionStat;
	edit: ComplexTypes.itemActionStat;
	endDateTime: any;
	incompleteData: ComplexTypes.incompleteData;
	isTrending: boolean;
	move: ComplexTypes.itemActionStat;
	startDateTime: any;
	activities(): IBaseQuery<itemActivity[]>;
	activities(id: string | number): IBaseQuery<itemActivity>;
}
/*********************************************
* sharedDriveItem
**********************************************/
export interface sharedDriveItem extends baseItem {
	owner: ComplexTypes.identitySet;
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
export interface sitePage extends baseSitePage {
	promotionKind: EnumTypes.pagePromotionType;
	reactions: ComplexTypes.reactionsFacet;
	showComments: boolean;
	showRecommendedPages: boolean;
	thumbnailWebUrl: string;
	titleArea: ComplexTypes.titleArea;
	canvasLayout(): IBaseQuery<canvasLayout>;
	webParts(): IBaseQuery<webPart[]>;
	webParts(id: string | number): IBaseQuery<webPart>;
}
/*********************************************
* standardWebPart
**********************************************/
export interface standardWebPart extends webPart {
	containerTextWebPartId: string;
	data: ComplexTypes.webPartData;
	webPartType: string;

}
/*********************************************
* textWebPart
**********************************************/
export interface textWebPart extends webPart {
	innerHtml: string;

}
/*********************************************
* callRecording
**********************************************/
export interface callRecording extends entity {
	callId: string;
	content: any;
	contentCorrelationId: string;
	createdDateTime: any;
	endDateTime: any;
	meetingId: string;
	meetingOrganizer: ComplexTypes.identitySet;
	recordingContentUrl: string;

}
/*********************************************
* callTranscript
**********************************************/
export interface callTranscript extends entity {
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
/*********************************************
* schemaExtension
**********************************************/
export interface schemaExtension extends entity {
	description: string;
	owner: string;
	properties: ComplexTypes.extensionSchemaProperty[];
	status: string;
	targetTypes: Array<string>[];

}
/*********************************************
* attributeMappingFunctionSchema
**********************************************/
export interface attributeMappingFunctionSchema extends entity {
	parameters: ComplexTypes.attributeMappingParameterSchema[];

}
/*********************************************
* bulkUpload
**********************************************/
export interface bulkUpload extends entity {


}
/*********************************************
* directoryDefinition
**********************************************/
export interface directoryDefinition extends entity {
	discoverabilities: EnumTypes.directoryDefinitionDiscoverabilities;
	discoveryDateTime: any;
	name: string;
	objects: ComplexTypes.objectDefinition[];
	readOnly: boolean;
	version: string;

}
/*********************************************
* filterOperatorSchema
**********************************************/
export interface filterOperatorSchema extends entity {
	arity: EnumTypes.scopeOperatorType;
	multivaluedComparisonType: EnumTypes.scopeOperatorMultiValuedComparisonType;
	supportedAttributeTypes: EnumTypes.attributeType[];

}
/*********************************************
* synchronizationJob
**********************************************/
export interface synchronizationJob extends entity {
	schedule: ComplexTypes.synchronizationSchedule;
	status: ComplexTypes.synchronizationStatus;
	synchronizationJobSettings: ComplexTypes.keyValuePair[];
	templateId: string;
	bulkUpload(): IBaseQuery<bulkUpload>;
	schema(): IBaseQuery<synchronizationSchema>;
}
/*********************************************
* synchronizationTemplate
**********************************************/
export interface synchronizationTemplate extends entity {
	applicationId: any;
	default: boolean;
	description: string;
	discoverable: boolean;
	factoryTag: string;
	metadata: ComplexTypes.synchronizationMetadataEntry[];
	schema(): IBaseQuery<synchronizationSchema>;
}
/*********************************************
* synchronizationSchema
**********************************************/
export interface synchronizationSchema extends entity {
	synchronizationRules: ComplexTypes.synchronizationRule[];
	version: string;
	directories(): IBaseQuery<directoryDefinition[]>;
	directories(id: string | number): IBaseQuery<directoryDefinition>;
}
/*********************************************
* cloudCommunications
**********************************************/
export interface cloudCommunications  {

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
export interface call extends entity {
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
export interface accessReviewHistoryDefinition extends entity {
	createdBy: ComplexTypes.userIdentity;
	createdDateTime: any;
	decisions: EnumTypes.accessReviewHistoryDecisionFilter[];
	displayName: string;
	reviewHistoryPeriodEndDateTime: any;
	reviewHistoryPeriodStartDateTime: any;
	scheduleSettings: ComplexTypes.accessReviewHistoryScheduleSettings;
	scopes: ComplexTypes.accessReviewScope[];
	status: EnumTypes.accessReviewHistoryStatus;
	instances(): IBaseQuery<accessReviewHistoryInstance[]>;
	instances(id: string | number): IBaseQuery<accessReviewHistoryInstance>;
}
/*********************************************
* accessReviewHistoryInstance
**********************************************/
export interface accessReviewHistoryInstance extends entity {
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
export interface accessReviewInstance extends entity {
	endDateTime: any;
	fallbackReviewers: ComplexTypes.accessReviewReviewerScope[];
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	scope: ComplexTypes.accessReviewScope;
	startDateTime: any;
	status: string;
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
export interface accessReviewReviewer extends entity {
	createdDateTime: any;
	displayName: string;
	userPrincipalName: string;

}
/*********************************************
* accessReviewInstanceDecisionItem
**********************************************/
export interface accessReviewInstanceDecisionItem extends entity {
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
	insights(): IBaseQuery<governanceInsight[]>;
	insights(id: string | number): IBaseQuery<governanceInsight>;
}
/*********************************************
* accessReviewStage
**********************************************/
export interface accessReviewStage extends entity {
	endDateTime: any;
	fallbackReviewers: ComplexTypes.accessReviewReviewerScope[];
	reviewers: ComplexTypes.accessReviewReviewerScope[];
	startDateTime: any;
	status: string;
	decisions(): IBaseQuery<accessReviewInstanceDecisionItem[]>;
	decisions(id: string | number): IBaseQuery<accessReviewInstanceDecisionItem>;
}
/*********************************************
* accessReviewScheduleDefinition
**********************************************/
export interface accessReviewScheduleDefinition extends entity {
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
	instances(): IBaseQuery<accessReviewInstance[]>;
	instances(id: string | number): IBaseQuery<accessReviewInstance>;
}
/*********************************************
* appConsentRequest
**********************************************/
export interface appConsentRequest extends entity {
	appDisplayName: string;
	appId: string;
	pendingScopes: ComplexTypes.appConsentRequestScope[];
	userConsentRequests(): IBaseQuery<userConsentRequest[]>;
	userConsentRequests(id: string | number): IBaseQuery<userConsentRequest>;
}
/*********************************************
* userConsentRequest
**********************************************/
export interface userConsentRequest extends request {
	reason: string;
	approval(): IBaseQuery<approval>;
}
/*********************************************
* approval
**********************************************/
export interface approval extends entity {

	stages(): IBaseQuery<approvalStage[]>;
	stages(id: string | number): IBaseQuery<approvalStage>;
}
/*********************************************
* approvalStage
**********************************************/
export interface approvalStage extends entity {
	assignedToMe: boolean;
	displayName: string;
	justification: string;
	reviewedBy: ComplexTypes.identity;
	reviewedDateTime: any;
	reviewResult: string;
	status: string;

}
/*********************************************
* accessPackage
**********************************************/
export interface accessPackage extends entity {
	createdDateTime: any;
	description: string;
	displayName: string;
	isHidden: boolean;
	modifiedDateTime: any;
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
export interface accessPackageAssignmentPolicy extends entity {
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
export interface accessPackageAssignmentRequest extends entity {
	answers: ComplexTypes.accessPackageAnswer[];
	completedDateTime: any;
	createdDateTime: any;
	customExtensionCalloutInstances: ComplexTypes.customExtensionCalloutInstance[];
	requestType: EnumTypes.accessPackageRequestType;
	schedule: ComplexTypes.entitlementManagementSchedule;
	state: EnumTypes.accessPackageRequestState;
	status: string;
	accessPackage(): IBaseQuery<accessPackage>;
	assignment(): IBaseQuery<accessPackageAssignment>;
	requestor(): IBaseQuery<accessPackageSubject>;
}
/*********************************************
* accessPackageAssignment
**********************************************/
export interface accessPackageAssignment extends entity {
	customExtensionCalloutInstances: ComplexTypes.customExtensionCalloutInstance[];
	expiredDateTime: any;
	schedule: ComplexTypes.entitlementManagementSchedule;
	state: EnumTypes.accessPackageAssignmentState;
	status: string;
	accessPackage(): IBaseQuery<accessPackage>;
	assignmentPolicy(): IBaseQuery<accessPackageAssignmentPolicy>;
	target(): IBaseQuery<accessPackageSubject>;
}
/*********************************************
* accessPackageCatalog
**********************************************/
export interface accessPackageCatalog extends entity {
	catalogType: EnumTypes.accessPackageCatalogType;
	createdDateTime: any;
	description: string;
	displayName: string;
	isExternallyVisible: boolean;
	modifiedDateTime: any;
	state: EnumTypes.accessPackageCatalogState;
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
export interface connectedOrganization extends entity {
	createdDateTime: any;
	description: string;
	displayName: string;
	identitySources: ComplexTypes.identitySource[];
	modifiedDateTime: any;
	state: EnumTypes.connectedOrganizationState;
	externalSponsors(): IBaseQuery<directoryObject[]>;
	externalSponsors(id: string | number): IBaseQuery<directoryObject>;
	internalSponsors(): IBaseQuery<directoryObject[]>;
	internalSponsors(id: string | number): IBaseQuery<directoryObject>;
}
/*********************************************
* accessPackageResourceEnvironment
**********************************************/
export interface accessPackageResourceEnvironment extends entity {
	connectionInfo: ComplexTypes.connectionInfo;
	createdDateTime: any;
	description: string;
	displayName: string;
	isDefaultEnvironment: boolean;
	modifiedDateTime: any;
	originId: string;
	originSystem: string;
	resources(): IBaseQuery<accessPackageResource[]>;
	resources(id: string | number): IBaseQuery<accessPackageResource>;
}
/*********************************************
* accessPackageResourceRequest
**********************************************/
export interface accessPackageResourceRequest extends entity {
	createdDateTime: any;
	requestType: EnumTypes.accessPackageRequestType;
	state: EnumTypes.accessPackageRequestState;
	catalog(): IBaseQuery<accessPackageCatalog>;
	resource(): IBaseQuery<accessPackageResource>;
}
/*********************************************
* accessPackageResourceRoleScope
**********************************************/
export interface accessPackageResourceRoleScope extends entity {
	createdDateTime: any;
	role(): IBaseQuery<accessPackageResourceRole>;
	scope(): IBaseQuery<accessPackageResourceScope>;
}
/*********************************************
* accessPackageResource
**********************************************/
export interface accessPackageResource extends entity {
	attributes: ComplexTypes.accessPackageResourceAttribute[];
	createdDateTime: any;
	description: string;
	displayName: string;
	modifiedDateTime: any;
	originId: string;
	originSystem: string;
	environment(): IBaseQuery<accessPackageResourceEnvironment>;
	roles(): IBaseQuery<accessPackageResourceRole[]>;
	roles(id: string | number): IBaseQuery<accessPackageResourceRole>;
	scopes(): IBaseQuery<accessPackageResourceScope[]>;
	scopes(id: string | number): IBaseQuery<accessPackageResourceScope>;
}
/*********************************************
* entitlementManagementSettings
**********************************************/
export interface entitlementManagementSettings extends entity {
	durationUntilExternalUserDeletedAfterBlocked: number;
	externalUserLifecycleAction: EnumTypes.accessPackageExternalUserLifecycleAction;

}
/*********************************************
* privilegedAccessGroup
**********************************************/
export interface privilegedAccessGroup extends entity {

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
export interface privilegedAccessScheduleInstance extends entity {
	endDateTime: any;
	startDateTime: any;

}
/*********************************************
* privilegedAccessGroupAssignmentScheduleInstance
**********************************************/
export interface privilegedAccessGroupAssignmentScheduleInstance extends privilegedAccessScheduleInstance {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	assignmentScheduleId: string;
	assignmentType: EnumTypes.privilegedAccessGroupAssignmentType;
	groupId: string;
	memberType: EnumTypes.privilegedAccessGroupMemberType;
	principalId: string;
	activatedUsing(): IBaseQuery<privilegedAccessGroupEligibilityScheduleInstance>;
	group(): IBaseQuery<group>;
	principal(): IBaseQuery<directoryObject>;
}
/*********************************************
* privilegedAccessScheduleRequest
**********************************************/
export interface privilegedAccessScheduleRequest extends request {
	action: EnumTypes.scheduleRequestActions;
	isValidationOnly: boolean;
	justification: string;
	scheduleInfo: ComplexTypes.requestSchedule;
	ticketInfo: ComplexTypes.ticketInfo;

}
/*********************************************
* privilegedAccessGroupAssignmentScheduleRequest
**********************************************/
export interface privilegedAccessGroupAssignmentScheduleRequest extends privilegedAccessScheduleRequest {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	groupId: string;
	principalId: string;
	targetScheduleId: string;
	activatedUsing(): IBaseQuery<privilegedAccessGroupEligibilitySchedule>;
	group(): IBaseQuery<group>;
	principal(): IBaseQuery<directoryObject>;
	targetSchedule(): IBaseQuery<privilegedAccessGroupEligibilitySchedule>;
}
/*********************************************
* privilegedAccessSchedule
**********************************************/
export interface privilegedAccessSchedule extends entity {
	createdDateTime: any;
	createdUsing: string;
	modifiedDateTime: any;
	scheduleInfo: ComplexTypes.requestSchedule;
	status: string;

}
/*********************************************
* privilegedAccessGroupAssignmentSchedule
**********************************************/
export interface privilegedAccessGroupAssignmentSchedule extends privilegedAccessSchedule {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	assignmentType: EnumTypes.privilegedAccessGroupAssignmentType;
	groupId: string;
	memberType: EnumTypes.privilegedAccessGroupMemberType;
	principalId: string;
	activatedUsing(): IBaseQuery<privilegedAccessGroupEligibilitySchedule>;
	group(): IBaseQuery<group>;
	principal(): IBaseQuery<directoryObject>;
}
/*********************************************
* privilegedAccessGroupEligibilityScheduleInstance
**********************************************/
export interface privilegedAccessGroupEligibilityScheduleInstance extends privilegedAccessScheduleInstance {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	eligibilityScheduleId: string;
	groupId: string;
	memberType: EnumTypes.privilegedAccessGroupMemberType;
	principalId: string;
	group(): IBaseQuery<group>;
	principal(): IBaseQuery<directoryObject>;
}
/*********************************************
* privilegedAccessGroupEligibilityScheduleRequest
**********************************************/
export interface privilegedAccessGroupEligibilityScheduleRequest extends privilegedAccessScheduleRequest {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	groupId: string;
	principalId: string;
	targetScheduleId: string;
	group(): IBaseQuery<group>;
	principal(): IBaseQuery<directoryObject>;
	targetSchedule(): IBaseQuery<privilegedAccessGroupEligibilitySchedule>;
}
/*********************************************
* privilegedAccessGroupEligibilitySchedule
**********************************************/
export interface privilegedAccessGroupEligibilitySchedule extends privilegedAccessSchedule {
	accessId: EnumTypes.privilegedAccessGroupRelationships;
	groupId: string;
	memberType: EnumTypes.privilegedAccessGroupMemberType;
	principalId: string;
	group(): IBaseQuery<group>;
	principal(): IBaseQuery<directoryObject>;
}
/*********************************************
* userSignInInsight
**********************************************/
export interface userSignInInsight extends governanceInsight {
	lastSignInDateTime: any;

}
/*********************************************
* agreement
**********************************************/
export interface agreement extends entity {
	displayName: string;
	isPerDeviceAcceptanceRequired: boolean;
	isViewingBeforeAcceptanceRequired: boolean;
	termsExpiration: ComplexTypes.termsExpiration;
	userReacceptRequiredFrequency: number;
	acceptances(): IBaseQuery<agreementAcceptance[]>;
	acceptances(id: string | number): IBaseQuery<agreementAcceptance>;
	file(): IBaseQuery<agreementFile>;
	files(): IBaseQuery<agreementFileLocalization[]>;
	files(id: string | number): IBaseQuery<agreementFileLocalization>;
}
/*********************************************
* agreementFileProperties
**********************************************/
export interface agreementFileProperties extends entity {
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
export interface agreementFile extends agreementFileProperties {

	localizations(): IBaseQuery<agreementFileLocalization[]>;
	localizations(id: string | number): IBaseQuery<agreementFileLocalization>;
}
/*********************************************
* agreementFileLocalization
**********************************************/
export interface agreementFileLocalization extends agreementFileProperties {

	versions(): IBaseQuery<agreementFileVersion[]>;
	versions(id: string | number): IBaseQuery<agreementFileVersion>;
}
/*********************************************
* agreementFileVersion
**********************************************/
export interface agreementFileVersion extends agreementFileProperties {


}
/*********************************************
* countryNamedLocation
**********************************************/
export interface countryNamedLocation extends namedLocation {
	countriesAndRegions: Array<string>[];
	countryLookupMethod: EnumTypes.countryLookupMethodType;
	includeUnknownCountriesAndRegions: boolean;

}
/*********************************************
* identityProtectionRoot
**********************************************/
export interface identityProtectionRoot  {

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
export interface riskDetection extends entity {
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
* riskyServicePrincipal
**********************************************/
export interface riskyServicePrincipal extends entity {
	appId: string;
	displayName: string;
	isEnabled: boolean;
	isProcessing: boolean;
	riskDetail: EnumTypes.riskDetail;
	riskLastUpdatedDateTime: any;
	riskLevel: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	servicePrincipalType: string;
	history(): IBaseQuery<riskyServicePrincipalHistoryItem[]>;
	history(id: string | number): IBaseQuery<riskyServicePrincipalHistoryItem>;
}
/*********************************************
* riskyUser
**********************************************/
export interface riskyUser extends entity {
	isDeleted: boolean;
	isProcessing: boolean;
	riskDetail: EnumTypes.riskDetail;
	riskLastUpdatedDateTime: any;
	riskLevel: EnumTypes.riskLevel;
	riskState: EnumTypes.riskState;
	userDisplayName: string;
	userPrincipalName: string;
	history(): IBaseQuery<riskyUserHistoryItem[]>;
	history(id: string | number): IBaseQuery<riskyUserHistoryItem>;
}
/*********************************************
* servicePrincipalRiskDetection
**********************************************/
export interface servicePrincipalRiskDetection extends entity {
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
/*********************************************
* ipNamedLocation
**********************************************/
export interface ipNamedLocation extends namedLocation {
	ipRanges: ComplexTypes.ipRange[];
	isTrusted: boolean;

}
/*********************************************
* riskyServicePrincipalHistoryItem
**********************************************/
export interface riskyServicePrincipalHistoryItem extends riskyServicePrincipal {
	activity: ComplexTypes.riskServicePrincipalActivity;
	initiatedBy: string;

}
/*********************************************
* riskyUserHistoryItem
**********************************************/
export interface riskyUserHistoryItem extends riskyUser {
	activity: ComplexTypes.riskUserActivity;
	initiatedBy: string;
	userId: string;

}
/*********************************************
* accessPackageQuestion
**********************************************/
export interface accessPackageQuestion extends entity {
	isAnswerEditable: boolean;
	isRequired: boolean;
	localizations: ComplexTypes.accessPackageLocalizedText[];
	sequence: number;
	text: string;

}
/*********************************************
* accessPackageSubject
**********************************************/
export interface accessPackageSubject extends entity {
	displayName: string;
	email: string;
	objectId: string;
	onPremisesSecurityIdentifier: string;
	principalName: string;
	subjectType: EnumTypes.accessPackageSubjectType;
	connectedOrganization(): IBaseQuery<connectedOrganization>;
}
/*********************************************
* customExtensionStageSetting
**********************************************/
export interface customExtensionStageSetting extends entity {
	stage: EnumTypes.accessPackageCustomExtensionStage;
	customExtension(): IBaseQuery<customCalloutExtension>;
}
/*********************************************
* accessPackageAssignmentRequestWorkflowExtension
**********************************************/
export interface accessPackageAssignmentRequestWorkflowExtension extends customCalloutExtension {
	callbackConfiguration: ComplexTypes.customExtensionCallbackConfiguration;
	createdBy: string;
	createdDateTime: any;
	lastModifiedBy: string;
	lastModifiedDateTime: any;

}
/*********************************************
* accessPackageAssignmentWorkflowExtension
**********************************************/
export interface accessPackageAssignmentWorkflowExtension extends customCalloutExtension {
	callbackConfiguration: ComplexTypes.customExtensionCallbackConfiguration;
	createdBy: string;
	createdDateTime: any;
	lastModifiedBy: string;
	lastModifiedDateTime: any;

}
/*********************************************
* accessPackageResourceRole
**********************************************/
export interface accessPackageResourceRole extends entity {
	description: string;
	displayName: string;
	originId: string;
	originSystem: string;
	resource(): IBaseQuery<accessPackageResource>;
}
/*********************************************
* accessPackageResourceScope
**********************************************/
export interface accessPackageResourceScope extends entity {
	description: string;
	displayName: string;
	isRootScope: boolean;
	originId: string;
	originSystem: string;
	resource(): IBaseQuery<accessPackageResource>;
}
/*********************************************
* accessPackageMultipleChoiceQuestion
**********************************************/
export interface accessPackageMultipleChoiceQuestion extends accessPackageQuestion {
	choices: ComplexTypes.accessPackageAnswerChoice[];
	isMultipleSelectionAllowed: boolean;

}
/*********************************************
* accessPackageTextInputQuestion
**********************************************/
export interface accessPackageTextInputQuestion extends accessPackageQuestion {
	isSingleLineQuestion: boolean;
	regexPattern: string;

}
/*********************************************
* mobileApp
**********************************************/
export interface mobileApp extends entity {
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
	assignments(): IBaseQuery<mobileAppAssignment[]>;
	assignments(id: string | number): IBaseQuery<mobileAppAssignment>;
	categories(): IBaseQuery<mobileAppCategory[]>;
	categories(id: string | number): IBaseQuery<mobileAppCategory>;
}
/*********************************************
* mobileLobApp
**********************************************/
export interface mobileLobApp extends mobileApp {
	committedContentVersion: string;
	fileName: string;
	size: number;
	contentVersions(): IBaseQuery<mobileAppContent[]>;
	contentVersions(id: string | number): IBaseQuery<mobileAppContent>;
}
/*********************************************
* androidLobApp
**********************************************/
export interface androidLobApp extends mobileLobApp {
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;
	versionCode: string;
	versionName: string;

}
/*********************************************
* androidStoreApp
**********************************************/
export interface androidStoreApp extends mobileApp {
	appStoreUrl: string;
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;

}
/*********************************************
* deviceAppManagement
**********************************************/
export interface deviceAppManagement extends entity {
	isEnabledForMicrosoftStoreForBusiness: boolean;
	microsoftStoreForBusinessLanguage: string;
	microsoftStoreForBusinessLastCompletedApplicationSyncTime: any;
	microsoftStoreForBusinessLastSuccessfulSyncDateTime: any;
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
export interface managedEBook extends entity {
	createdDateTime: any;
	description: string;
	displayName: string;
	informationUrl: string;
	largeCover: ComplexTypes.mimeContent;
	lastModifiedDateTime: any;
	privacyInformationUrl: string;
	publishedDateTime: any;
	publisher: string;
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
export interface mobileAppCategory extends entity {
	displayName: string;
	lastModifiedDateTime: any;

}
/*********************************************
* managedDeviceMobileAppConfiguration
**********************************************/
export interface managedDeviceMobileAppConfiguration extends entity {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	targetedMobileApps: Array<string>[];
	version: number;
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
export interface vppToken extends entity {
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
export interface managedAppPolicy extends entity {
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	version: string;

}
/*********************************************
* managedAppProtection
**********************************************/
export interface managedAppProtection extends managedAppPolicy {
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
export interface targetedManagedAppProtection extends managedAppProtection {
	isAssigned: boolean;
	assignments(): IBaseQuery<targetedManagedAppPolicyAssignment[]>;
	assignments(id: string | number): IBaseQuery<targetedManagedAppPolicyAssignment>;
}
/*********************************************
* androidManagedAppProtection
**********************************************/
export interface androidManagedAppProtection extends targetedManagedAppProtection {
	customBrowserDisplayName: string;
	customBrowserPackageId: string;
	deployedAppCount: number;
	disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean;
	encryptAppData: boolean;
	minimumRequiredPatchVersion: string;
	minimumWarningPatchVersion: string;
	screenCaptureBlocked: boolean;
	apps(): IBaseQuery<managedMobileApp[]>;
	apps(id: string | number): IBaseQuery<managedMobileApp>;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary>;
}
/*********************************************
* defaultManagedAppProtection
**********************************************/
export interface defaultManagedAppProtection extends managedAppProtection {
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
	apps(): IBaseQuery<managedMobileApp[]>;
	apps(id: string | number): IBaseQuery<managedMobileApp>;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary>;
}
/*********************************************
* iosManagedAppProtection
**********************************************/
export interface iosManagedAppProtection extends targetedManagedAppProtection {
	appDataEncryptionType: EnumTypes.managedAppDataEncryptionType;
	customBrowserProtocol: string;
	deployedAppCount: number;
	faceIdBlocked: boolean;
	minimumRequiredSdkVersion: string;
	apps(): IBaseQuery<managedMobileApp[]>;
	apps(id: string | number): IBaseQuery<managedMobileApp>;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary>;
}
/*********************************************
* managedAppStatus
**********************************************/
export interface managedAppStatus extends entity {
	displayName: string;
	version: string;

}
/*********************************************
* windowsInformationProtection
**********************************************/
export interface windowsInformationProtection extends managedAppPolicy {
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
export interface mdmWindowsInformationProtectionPolicy extends windowsInformationProtection {


}
/*********************************************
* managedAppConfiguration
**********************************************/
export interface managedAppConfiguration extends managedAppPolicy {
	customSettings: ComplexTypes.keyValuePair[];

}
/*********************************************
* targetedManagedAppConfiguration
**********************************************/
export interface targetedManagedAppConfiguration extends managedAppConfiguration {
	deployedAppCount: number;
	isAssigned: boolean;
	apps(): IBaseQuery<managedMobileApp[]>;
	apps(id: string | number): IBaseQuery<managedMobileApp>;
	assignments(): IBaseQuery<targetedManagedAppPolicyAssignment[]>;
	assignments(id: string | number): IBaseQuery<targetedManagedAppPolicyAssignment>;
	deploymentSummary(): IBaseQuery<managedAppPolicyDeploymentSummary>;
}
/*********************************************
* windowsInformationProtectionPolicy
**********************************************/
export interface windowsInformationProtectionPolicy extends windowsInformationProtection {
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
* deviceManagementExportJob
**********************************************/
export interface deviceManagementExportJob extends entity {
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
* enterpriseCodeSigningCertificate
**********************************************/
export interface enterpriseCodeSigningCertificate extends entity {
	content: any;
	expirationDateTime: any;
	issuer: string;
	issuerName: string;
	status: EnumTypes.certificateStatus;
	subject: string;
	subjectName: string;
	uploadDateTime: any;

}
/*********************************************
* iosiPadOSWebClip
**********************************************/
export interface iosiPadOSWebClip extends mobileApp {
	appUrl: string;
	useManagedBrowser: boolean;

}
/*********************************************
* iosLobApp
**********************************************/
export interface iosLobApp extends mobileLobApp {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	buildNumber: string;
	bundleId: string;
	expirationDateTime: any;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;
	versionNumber: string;

}
/*********************************************
* iosLobAppProvisioningConfigurationAssignment
**********************************************/
export interface iosLobAppProvisioningConfigurationAssignment extends entity {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* iosMobileAppConfiguration
**********************************************/
export interface iosMobileAppConfiguration extends managedDeviceMobileAppConfiguration {
	encodedSettingXml: any;
	settings: ComplexTypes.appConfigurationSettingItem[];

}
/*********************************************
* iosStoreApp
**********************************************/
export interface iosStoreApp extends mobileApp {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	appStoreUrl: string;
	bundleId: string;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;

}
/*********************************************
* iosVppApp
**********************************************/
export interface iosVppApp extends mobileApp {
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
* macOSDmgApp
**********************************************/
export interface macOSDmgApp extends mobileLobApp {
	ignoreVersionDetection: boolean;
	includedApps: ComplexTypes.macOSIncludedApp[];
	minimumSupportedOperatingSystem: ComplexTypes.macOSMinimumOperatingSystem;
	primaryBundleId: string;
	primaryBundleVersion: string;

}
/*********************************************
* macOSLobApp
**********************************************/
export interface macOSLobApp extends mobileLobApp {
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
/*********************************************
* macOSMicrosoftDefenderApp
**********************************************/
export interface macOSMicrosoftDefenderApp extends mobileApp {


}
/*********************************************
* macOSMicrosoftEdgeApp
**********************************************/
export interface macOSMicrosoftEdgeApp extends mobileApp {
	channel: EnumTypes.microsoftEdgeChannel;

}
/*********************************************
* macOSOfficeSuiteApp
**********************************************/
export interface macOSOfficeSuiteApp extends mobileApp {


}
/*********************************************
* managedApp
**********************************************/
export interface managedApp extends mobileApp {
	appAvailability: EnumTypes.managedAppAvailability;
	version: string;

}
/*********************************************
* managedMobileLobApp
**********************************************/
export interface managedMobileLobApp extends managedApp {
	committedContentVersion: string;
	fileName: string;
	size: number;
	contentVersions(): IBaseQuery<mobileAppContent[]>;
	contentVersions(id: string | number): IBaseQuery<mobileAppContent>;
}
/*********************************************
* managedAndroidLobApp
**********************************************/
export interface managedAndroidLobApp extends managedMobileLobApp {
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;
	versionCode: string;
	versionName: string;

}
/*********************************************
* managedAndroidStoreApp
**********************************************/
export interface managedAndroidStoreApp extends managedApp {
	appStoreUrl: string;
	minimumSupportedOperatingSystem: ComplexTypes.androidMinimumOperatingSystem;
	packageId: string;

}
/*********************************************
* managedDeviceMobileAppConfigurationAssignment
**********************************************/
export interface managedDeviceMobileAppConfigurationAssignment extends entity {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* managedDeviceMobileAppConfigurationDeviceStatus
**********************************************/
export interface managedDeviceMobileAppConfigurationDeviceStatus extends entity {
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
export interface managedDeviceMobileAppConfigurationDeviceSummary extends entity {
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
export interface managedDeviceMobileAppConfigurationUserStatus extends entity {
	devicesCount: number;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userDisplayName: string;
	userPrincipalName: string;

}
/*********************************************
* managedDeviceMobileAppConfigurationUserSummary
**********************************************/
export interface managedDeviceMobileAppConfigurationUserSummary extends entity {
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
export interface managedIOSLobApp extends managedMobileLobApp {
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
export interface managedIOSStoreApp extends managedApp {
	applicableDeviceType: ComplexTypes.iosDeviceType;
	appStoreUrl: string;
	bundleId: string;
	minimumSupportedOperatingSystem: ComplexTypes.iosMinimumOperatingSystem;

}
/*********************************************
* mobileAppContent
**********************************************/
export interface mobileAppContent extends entity {

	containedApps(): IBaseQuery<mobileContainedApp[]>;
	containedApps(id: string | number): IBaseQuery<mobileContainedApp>;
	files(): IBaseQuery<mobileAppContentFile[]>;
	files(id: string | number): IBaseQuery<mobileAppContentFile>;
}
/*********************************************
* microsoftStoreForBusinessApp
**********************************************/
export interface microsoftStoreForBusinessApp extends mobileApp {
	licenseType: EnumTypes.microsoftStoreForBusinessLicenseType;
	packageIdentityName: string;
	productKey: string;
	totalLicenseCount: number;
	usedLicenseCount: number;

}
/*********************************************
* mobileAppAssignment
**********************************************/
export interface mobileAppAssignment extends entity {
	intent: EnumTypes.installIntent;
	settings: ComplexTypes.mobileAppAssignmentSettings;
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* mobileContainedApp
**********************************************/
export interface mobileContainedApp extends entity {


}
/*********************************************
* mobileAppContentFile
**********************************************/
export interface mobileAppContentFile extends entity {
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
/*********************************************
* webApp
**********************************************/
export interface webApp extends mobileApp {
	appUrl: string;
	useManagedBrowser: boolean;

}
/*********************************************
* win32LobApp
**********************************************/
export interface win32LobApp extends mobileLobApp {
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
* windowsAppX
**********************************************/
export interface windowsAppX extends mobileLobApp {
	applicableArchitectures: EnumTypes.windowsArchitecture;
	identityName: string;
	identityPublisherHash: string;
	identityResourceIdentifier: string;
	identityVersion: string;
	isBundle: boolean;
	minimumSupportedOperatingSystem: ComplexTypes.windowsMinimumOperatingSystem;

}
/*********************************************
* windowsMicrosoftEdgeApp
**********************************************/
export interface windowsMicrosoftEdgeApp extends mobileApp {
	channel: EnumTypes.microsoftEdgeChannel;
	displayLanguageLocale: string;

}
/*********************************************
* windowsMobileMSI
**********************************************/
export interface windowsMobileMSI extends mobileLobApp {
	commandLine: string;
	ignoreVersionDetection: boolean;
	productCode: string;
	productVersion: string;

}
/*********************************************
* windowsUniversalAppX
**********************************************/
export interface windowsUniversalAppX extends mobileLobApp {
	applicableArchitectures: EnumTypes.windowsArchitecture;
	applicableDeviceTypes: EnumTypes.windowsDeviceType;
	identityName: string;
	identityPublisherHash: string;
	identityResourceIdentifier: string;
	identityVersion: string;
	isBundle: boolean;
	minimumSupportedOperatingSystem: ComplexTypes.windowsMinimumOperatingSystem;
	committedContainedApps(): IBaseQuery<mobileContainedApp[]>;
	committedContainedApps(id: string | number): IBaseQuery<mobileContainedApp>;
}
/*********************************************
* windowsUniversalAppXContainedApp
**********************************************/
export interface windowsUniversalAppXContainedApp extends mobileContainedApp {
	appUserModelId: string;

}
/*********************************************
* windowsWebApp
**********************************************/
export interface windowsWebApp extends mobileApp {
	appUrl: string;

}
/*********************************************
* deviceInstallState
**********************************************/
export interface deviceInstallState extends entity {
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
export interface eBookInstallSummary extends entity {
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
export interface iosVppEBook extends managedEBook {
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
export interface managedEBookAssignment extends entity {
	installIntent: EnumTypes.installIntent;
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* iosVppEBookAssignment
**********************************************/
export interface iosVppEBookAssignment extends managedEBookAssignment {


}
/*********************************************
* userInstallStateSummary
**********************************************/
export interface userInstallStateSummary extends entity {
	failedDeviceCount: number;
	installedDeviceCount: number;
	notInstalledDeviceCount: number;
	userName: string;
	deviceStates(): IBaseQuery<deviceInstallState[]>;
	deviceStates(id: string | number): IBaseQuery<deviceInstallState>;
}
/*********************************************
* termsAndConditionsAcceptanceStatus
**********************************************/
export interface termsAndConditionsAcceptanceStatus extends entity {
	acceptedDateTime: any;
	acceptedVersion: number;
	userDisplayName: string;
	userPrincipalName: string;
	termsAndConditions(): IBaseQuery<termsAndConditions>;
}
/*********************************************
* termsAndConditionsAssignment
**********************************************/
export interface termsAndConditionsAssignment extends entity {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* androidCompliancePolicy
**********************************************/
export interface androidCompliancePolicy extends deviceCompliancePolicy {
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
export interface androidCustomConfiguration extends deviceConfiguration {
	omaSettings: ComplexTypes.omaSetting[];

}
/*********************************************
* androidGeneralDeviceConfiguration
**********************************************/
export interface androidGeneralDeviceConfiguration extends deviceConfiguration {
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
export interface androidWorkProfileCompliancePolicy extends deviceCompliancePolicy {
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
export interface androidWorkProfileCustomConfiguration extends deviceConfiguration {
	omaSettings: ComplexTypes.omaSetting[];

}
/*********************************************
* androidWorkProfileGeneralDeviceConfiguration
**********************************************/
export interface androidWorkProfileGeneralDeviceConfiguration extends deviceConfiguration {
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
export interface appleDeviceFeaturesConfigurationBase extends deviceConfiguration {


}
/*********************************************
* deviceComplianceActionItem
**********************************************/
export interface deviceComplianceActionItem extends entity {
	actionType: EnumTypes.deviceComplianceActionType;
	gracePeriodHours: number;
	notificationMessageCCList: Array<string>[];
	notificationTemplateId: string;

}
/*********************************************
* deviceComplianceDeviceOverview
**********************************************/
export interface deviceComplianceDeviceOverview extends entity {
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
export interface deviceComplianceDeviceStatus extends entity {
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
export interface deviceCompliancePolicyAssignment extends entity {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* settingStateDeviceSummary
**********************************************/
export interface settingStateDeviceSummary extends entity {
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
export interface deviceComplianceScheduledActionForRule extends entity {
	ruleName: string;
	scheduledActionConfigurations(): IBaseQuery<deviceComplianceActionItem[]>;
	scheduledActionConfigurations(id: string | number): IBaseQuery<deviceComplianceActionItem>;
}
/*********************************************
* deviceComplianceUserStatus
**********************************************/
export interface deviceComplianceUserStatus extends entity {
	devicesCount: number;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userDisplayName: string;
	userPrincipalName: string;

}
/*********************************************
* deviceComplianceUserOverview
**********************************************/
export interface deviceComplianceUserOverview extends entity {
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
export interface deviceComplianceSettingState extends entity {
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
export interface deviceCompliancePolicyState extends entity {
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
export interface deviceConfigurationAssignment extends entity {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* deviceConfigurationDeviceStatus
**********************************************/
export interface deviceConfigurationDeviceStatus extends entity {
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
export interface deviceConfigurationDeviceOverview extends entity {
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
export interface deviceConfigurationUserStatus extends entity {
	devicesCount: number;
	lastReportedDateTime: any;
	status: EnumTypes.complianceStatus;
	userDisplayName: string;
	userPrincipalName: string;

}
/*********************************************
* deviceConfigurationUserOverview
**********************************************/
export interface deviceConfigurationUserOverview extends entity {
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
export interface deviceConfigurationState extends entity {
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
export interface editionUpgradeConfiguration extends deviceConfiguration {
	license: string;
	licenseType: EnumTypes.editionUpgradeLicenseType;
	productKey: string;
	targetEdition: EnumTypes.windows10EditionType;

}
/*********************************************
* iosCertificateProfile
**********************************************/
export interface iosCertificateProfile extends deviceConfiguration {


}
/*********************************************
* iosCompliancePolicy
**********************************************/
export interface iosCompliancePolicy extends deviceCompliancePolicy {
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
export interface iosCustomConfiguration extends deviceConfiguration {
	payload: any;
	payloadFileName: string;
	payloadName: string;

}
/*********************************************
* iosDeviceFeaturesConfiguration
**********************************************/
export interface iosDeviceFeaturesConfiguration extends appleDeviceFeaturesConfigurationBase {
	assetTagTemplate: string;
	homeScreenDockIcons: ComplexTypes.iosHomeScreenItem[];
	homeScreenPages: ComplexTypes.iosHomeScreenPage[];
	lockScreenFootnote: string;
	notificationSettings: ComplexTypes.iosNotificationSettings[];

}
/*********************************************
* iosGeneralDeviceConfiguration
**********************************************/
export interface iosGeneralDeviceConfiguration extends deviceConfiguration {
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
export interface iosUpdateConfiguration extends deviceConfiguration {
	activeHoursEnd: any;
	activeHoursStart: any;
	scheduledInstallDays: EnumTypes.dayOfWeek[];
	utcTimeOffsetInMinutes: number;

}
/*********************************************
* macOSCompliancePolicy
**********************************************/
export interface macOSCompliancePolicy extends deviceCompliancePolicy {
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
export interface macOSCustomConfiguration extends deviceConfiguration {
	payload: any;
	payloadFileName: string;
	payloadName: string;

}
/*********************************************
* macOSDeviceFeaturesConfiguration
**********************************************/
export interface macOSDeviceFeaturesConfiguration extends appleDeviceFeaturesConfigurationBase {


}
/*********************************************
* macOSGeneralDeviceConfiguration
**********************************************/
export interface macOSGeneralDeviceConfiguration extends deviceConfiguration {
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
* deviceLogCollectionResponse
**********************************************/
export interface deviceLogCollectionResponse extends entity {
	enrolledByUser: string;
	expirationDateTimeUTC: any;
	initiatedByUserPrincipalName: string;
	managedDeviceId: any;
	receivedDateTimeUTC: any;
	requestedDateTimeUTC: any;
	sizeInKB: number;
	status: EnumTypes.appLogUploadState;

}
/*********************************************
* windowsProtectionState
**********************************************/
export interface windowsProtectionState extends entity {
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
	detectedMalwareState(): IBaseQuery<windowsDeviceMalwareState[]>;
	detectedMalwareState(id: string | number): IBaseQuery<windowsDeviceMalwareState>;
}
/*********************************************
* sharedPCConfiguration
**********************************************/
export interface sharedPCConfiguration extends deviceConfiguration {
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
export interface windows10CompliancePolicy extends deviceCompliancePolicy {
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
export interface windows10CustomConfiguration extends deviceConfiguration {
	omaSettings: ComplexTypes.omaSetting[];

}
/*********************************************
* windows10EndpointProtectionConfiguration
**********************************************/
export interface windows10EndpointProtectionConfiguration extends deviceConfiguration {
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
export interface windows10EnterpriseModernAppManagementConfiguration extends deviceConfiguration {
	uninstallBuiltInApps: boolean;

}
/*********************************************
* windows10GeneralConfiguration
**********************************************/
export interface windows10GeneralConfiguration extends deviceConfiguration {
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
export interface windows10MobileCompliancePolicy extends deviceCompliancePolicy {
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
export interface windows10SecureAssessmentConfiguration extends deviceConfiguration {
	allowPrinting: boolean;
	allowScreenCapture: boolean;
	allowTextSuggestion: boolean;
	configurationAccount: string;
	launchUri: string;

}
/*********************************************
* windows10TeamGeneralConfiguration
**********************************************/
export interface windows10TeamGeneralConfiguration extends deviceConfiguration {
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
export interface windows81CompliancePolicy extends deviceCompliancePolicy {
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
export interface windows81GeneralConfiguration extends deviceConfiguration {
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
export interface windowsDefenderAdvancedThreatProtectionConfiguration extends deviceConfiguration {
	allowSampleSharing: boolean;
	enableExpeditedTelemetryReporting: boolean;

}
/*********************************************
* windowsPhone81CompliancePolicy
**********************************************/
export interface windowsPhone81CompliancePolicy extends deviceCompliancePolicy {
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
export interface windowsPhone81CustomConfiguration extends deviceConfiguration {
	omaSettings: ComplexTypes.omaSetting[];

}
/*********************************************
* windowsPhone81GeneralConfiguration
**********************************************/
export interface windowsPhone81GeneralConfiguration extends deviceConfiguration {
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
export interface windowsUpdateForBusinessConfiguration extends deviceConfiguration {
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
/*********************************************
* enrollmentConfigurationAssignment
**********************************************/
export interface enrollmentConfigurationAssignment extends entity {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* deviceEnrollmentLimitConfiguration
**********************************************/
export interface deviceEnrollmentLimitConfiguration extends deviceEnrollmentConfiguration {
	limit: number;

}
/*********************************************
* deviceEnrollmentPlatformRestrictionsConfiguration
**********************************************/
export interface deviceEnrollmentPlatformRestrictionsConfiguration extends deviceEnrollmentConfiguration {
	androidRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	iosRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	macOSRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	windowsMobileRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;
	windowsRestriction: ComplexTypes.deviceEnrollmentPlatformRestriction;

}
/*********************************************
* deviceEnrollmentWindowsHelloForBusinessConfiguration
**********************************************/
export interface deviceEnrollmentWindowsHelloForBusinessConfiguration extends deviceEnrollmentConfiguration {
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
* windows10EnrollmentCompletionPageConfiguration
**********************************************/
export interface windows10EnrollmentCompletionPageConfiguration extends deviceEnrollmentConfiguration {
	allowNonBlockingAppInstallation: boolean;

}
/*********************************************
* appLogCollectionRequest
**********************************************/
export interface appLogCollectionRequest extends entity {
	completedDateTime: any;
	customLogFolders: Array<string>[];
	errorMessage: string;
	status: EnumTypes.appLogUploadState;

}
/*********************************************
* malwareStateForWindowsDevice
**********************************************/
export interface malwareStateForWindowsDevice extends entity {
	detectionCount: number;
	deviceName: string;
	executionState: EnumTypes.windowsMalwareExecutionState;
	initialDetectionDateTime: any;
	lastStateChangeDateTime: any;
	threatState: EnumTypes.windowsMalwareThreatState;

}
/*********************************************
* userExperienceAnalyticsMetric
**********************************************/
export interface userExperienceAnalyticsMetric extends entity {
	unit: string;
	value: number;

}
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereDevice
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereDevice extends entity {
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
/*********************************************
* windowsDeviceMalwareState
**********************************************/
export interface windowsDeviceMalwareState extends entity {
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
/*********************************************
* importedWindowsAutopilotDeviceIdentityUpload
**********************************************/
export interface importedWindowsAutopilotDeviceIdentityUpload extends entity {
	createdDateTimeUtc: any;
	status: EnumTypes.importedWindowsAutopilotDeviceIdentityUploadStatus;
	deviceIdentities(): IBaseQuery<importedWindowsAutopilotDeviceIdentity[]>;
	deviceIdentities(id: string | number): IBaseQuery<importedWindowsAutopilotDeviceIdentity>;
}
/*********************************************
* windowsAutopilotDeploymentProfile
**********************************************/
export interface windowsAutopilotDeploymentProfile extends entity {
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
	assignedDevices(): IBaseQuery<windowsAutopilotDeviceIdentity[]>;
	assignedDevices(id: string | number): IBaseQuery<windowsAutopilotDeviceIdentity>;
}
/*********************************************
* windowsAutopilotDeploymentProfileAssignment
**********************************************/
export interface windowsAutopilotDeploymentProfileAssignment extends entity {


}
/*********************************************
* managedMobileApp
**********************************************/
export interface managedMobileApp extends entity {
	mobileAppIdentifier: ComplexTypes.mobileAppIdentifier;
	version: string;

}
/*********************************************
* managedAppPolicyDeploymentSummary
**********************************************/
export interface managedAppPolicyDeploymentSummary extends entity {
	configurationDeployedUserCount: number;
	configurationDeploymentSummaryPerApp: ComplexTypes.managedAppPolicyDeploymentSummaryPerApp[];
	displayName: string;
	lastRefreshTime: any;
	version: string;

}
/*********************************************
* androidManagedAppRegistration
**********************************************/
export interface androidManagedAppRegistration extends managedAppRegistration {


}
/*********************************************
* iosManagedAppRegistration
**********************************************/
export interface iosManagedAppRegistration extends managedAppRegistration {


}
/*********************************************
* managedAppOperation
**********************************************/
export interface managedAppOperation extends entity {
	displayName: string;
	lastModifiedDateTime: any;
	state: string;
	version: string;

}
/*********************************************
* managedAppStatusRaw
**********************************************/
export interface managedAppStatusRaw extends managedAppStatus {
	content: ComplexTypes.Json;

}
/*********************************************
* targetedManagedAppPolicyAssignment
**********************************************/
export interface targetedManagedAppPolicyAssignment extends entity {
	target: ComplexTypes.deviceAndAppManagementAssignmentTarget;

}
/*********************************************
* windowsInformationProtectionAppLockerFile
**********************************************/
export interface windowsInformationProtectionAppLockerFile extends entity {
	displayName: string;
	file: any;
	fileHash: string;
	version: string;

}
/*********************************************
* localizedNotificationMessage
**********************************************/
export interface localizedNotificationMessage extends entity {
	isDefault: boolean;
	lastModifiedDateTime: any;
	locale: string;
	messageTemplate: string;
	subject: string;

}
/*********************************************
* deviceAndAppManagementRoleDefinition
**********************************************/
export interface deviceAndAppManagementRoleDefinition extends roleDefinition {


}
/*********************************************
* deviceManagementCachedReportConfiguration
**********************************************/
export interface deviceManagementCachedReportConfiguration extends entity {


}
/*********************************************
* enrollmentTroubleshootingEvent
**********************************************/
export interface enrollmentTroubleshootingEvent extends deviceManagementTroubleshootingEvent {
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
* m365AppsInstallationOptions
**********************************************/
export interface m365AppsInstallationOptions extends entity {
	appsForMac: ComplexTypes.appsInstallationOptionsForMac;
	appsForWindows: ComplexTypes.appsInstallationOptionsForWindows;
	updateChannel: EnumTypes.appsUpdateChannelType;

}
/*********************************************
* serviceHealth
**********************************************/
export interface serviceHealth extends entity {
	service: string;
	status: EnumTypes.serviceHealthStatus;
	issues(): IBaseQuery<serviceHealthIssue[]>;
	issues(id: string | number): IBaseQuery<serviceHealthIssue>;
}
/*********************************************
* serviceAnnouncementBase
**********************************************/
export interface serviceAnnouncementBase extends entity {
	details: ComplexTypes.keyValuePair[];
	endDateTime: any;
	lastModifiedDateTime: any;
	startDateTime: any;
	title: string;

}
/*********************************************
* serviceHealthIssue
**********************************************/
export interface serviceHealthIssue extends serviceAnnouncementBase {
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
export interface serviceUpdateMessage extends serviceAnnouncementBase {
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
	attachments(): IBaseQuery<serviceAnnouncementAttachment[]>;
	attachments(id: string | number): IBaseQuery<serviceAnnouncementAttachment>;
}
/*********************************************
* serviceAnnouncementAttachment
**********************************************/
export interface serviceAnnouncementAttachment extends entity {
	content: any;
	contentType: string;
	lastModifiedDateTime: any;
	name: string;
	size: number;

}
/*********************************************
* searchEntity
**********************************************/
export interface searchEntity extends entity {

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
export interface planner extends entity {

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
export interface plannerBucket extends entity {
	name: string;
	orderHint: string;
	planId: string;
	tasks(): IBaseQuery<plannerTask[]>;
	tasks(id: string | number): IBaseQuery<plannerTask>;
}
/*********************************************
* plannerPlan
**********************************************/
export interface plannerPlan extends entity {
	container: ComplexTypes.plannerPlanContainer;
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	owner: string;
	title: string;
	buckets(): IBaseQuery<plannerBucket[]>;
	buckets(id: string | number): IBaseQuery<plannerBucket>;
	details(): IBaseQuery<plannerPlanDetails>;
	tasks(): IBaseQuery<plannerTask[]>;
	tasks(id: string | number): IBaseQuery<plannerTask>;
}
/*********************************************
* plannerTask
**********************************************/
export interface plannerTask extends entity {
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
	assignedToTaskBoardFormat(): IBaseQuery<plannerAssignedToTaskBoardTaskFormat>;
	bucketTaskBoardFormat(): IBaseQuery<plannerBucketTaskBoardTaskFormat>;
	details(): IBaseQuery<plannerTaskDetails>;
	progressTaskBoardFormat(): IBaseQuery<plannerProgressTaskBoardTaskFormat>;
}
/*********************************************
* plannerAssignedToTaskBoardTaskFormat
**********************************************/
export interface plannerAssignedToTaskBoardTaskFormat extends entity {
	orderHintsByAssignee: ComplexTypes.plannerOrderHintsByAssignee;
	unassignedOrderHint: string;

}
/*********************************************
* plannerBucketTaskBoardTaskFormat
**********************************************/
export interface plannerBucketTaskBoardTaskFormat extends entity {
	orderHint: string;

}
/*********************************************
* plannerPlanDetails
**********************************************/
export interface plannerPlanDetails extends entity {
	categoryDescriptions: ComplexTypes.plannerCategoryDescriptions;
	sharedWith: ComplexTypes.plannerUserIds;

}
/*********************************************
* plannerProgressTaskBoardTaskFormat
**********************************************/
export interface plannerProgressTaskBoardTaskFormat extends entity {
	orderHint: string;

}
/*********************************************
* plannerTaskDetails
**********************************************/
export interface plannerTaskDetails extends entity {
	checklist: ComplexTypes.plannerChecklistItems;
	description: string;
	previewType: EnumTypes.plannerPreviewType;
	references: ComplexTypes.plannerExternalReferences;

}
/*********************************************
* sharedInsight
**********************************************/
export interface sharedInsight extends entity {
	lastShared: ComplexTypes.sharingDetail;
	resourceReference: ComplexTypes.resourceReference;
	resourceVisualization: ComplexTypes.resourceVisualization;
	sharingHistory: ComplexTypes.sharingDetail[];
	lastSharedMethod(): IBaseQuery<entity>;
	resource(): IBaseQuery<entity>;
}
/*********************************************
* trending
**********************************************/
export interface trending extends entity {
	lastModifiedDateTime: any;
	resourceReference: ComplexTypes.resourceReference;
	resourceVisualization: ComplexTypes.resourceVisualization;
	weight: number;
	resource(): IBaseQuery<entity>;
}
/*********************************************
* usedInsight
**********************************************/
export interface usedInsight extends entity {
	lastUsed: ComplexTypes.usageDetails;
	resourceReference: ComplexTypes.resourceReference;
	resourceVisualization: ComplexTypes.resourceVisualization;
	resource(): IBaseQuery<entity>;
}
/*********************************************
* userInsightsSettings
**********************************************/
export interface userInsightsSettings extends entity {
	isEnabled: boolean;

}
/*********************************************
* windowsSetting
**********************************************/
export interface windowsSetting extends entity {
	payloadType: string;
	settingType: EnumTypes.windowsSettingType;
	windowsDeviceId: string;
	instances(): IBaseQuery<windowsSettingInstance[]>;
	instances(id: string | number): IBaseQuery<windowsSettingInstance>;
}
/*********************************************
* changeTrackedEntity
**********************************************/
export interface changeTrackedEntity extends entity {
	createdDateTime: any;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;

}
/*********************************************
* shiftPreferences
**********************************************/
export interface shiftPreferences extends changeTrackedEntity {
	availability: ComplexTypes.shiftAvailability[];

}
/*********************************************
* userStorage
**********************************************/
export interface userStorage extends entity {

	quota(): IBaseQuery<unifiedStorageQuota>;
}
/*********************************************
* onenoteEntityBaseModel
**********************************************/
export interface onenoteEntityBaseModel extends entity {
	self: string;

}
/*********************************************
* onenoteEntitySchemaObjectModel
**********************************************/
export interface onenoteEntitySchemaObjectModel extends onenoteEntityBaseModel {
	createdDateTime: any;

}
/*********************************************
* onenoteEntityHierarchyModel
**********************************************/
export interface onenoteEntityHierarchyModel extends onenoteEntitySchemaObjectModel {
	createdBy: ComplexTypes.identitySet;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;

}
/*********************************************
* notebook
**********************************************/
export interface notebook extends onenoteEntityHierarchyModel {
	isDefault: boolean;
	isShared: boolean;
	links: ComplexTypes.notebookLinks;
	sectionGroupsUrl: string;
	sectionsUrl: string;
	userRole: EnumTypes.onenoteUserRole;
	sectionGroups(): IBaseQuery<sectionGroup[]>;
	sectionGroups(id: string | number): IBaseQuery<sectionGroup>;
	sections(): IBaseQuery<onenoteSection[]>;
	sections(id: string | number): IBaseQuery<onenoteSection>;
}
/*********************************************
* sectionGroup
**********************************************/
export interface sectionGroup extends onenoteEntityHierarchyModel {
	sectionGroupsUrl: string;
	sectionsUrl: string;
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
export interface onenoteSection extends onenoteEntityHierarchyModel {
	isDefault: boolean;
	links: ComplexTypes.sectionLinks;
	pagesUrl: string;
	pages(): IBaseQuery<onenotePage[]>;
	pages(id: string | number): IBaseQuery<onenotePage>;
	parentNotebook(): IBaseQuery<notebook>;
	parentSectionGroup(): IBaseQuery<sectionGroup>;
}
/*********************************************
* operation
**********************************************/
export interface operation extends entity {
	createdDateTime: any;
	lastActionDateTime: any;
	status: EnumTypes.longRunningOperationStatus;

}
/*********************************************
* onenoteOperation
**********************************************/
export interface onenoteOperation extends operation {
	error: ComplexTypes.onenoteOperationError;
	percentComplete: string;
	resourceId: string;
	resourceLocation: string;

}
/*********************************************
* onenotePage
**********************************************/
export interface onenotePage extends onenoteEntitySchemaObjectModel {
	content: any;
	contentUrl: string;
	createdByAppId: string;
	lastModifiedDateTime: any;
	level: number;
	links: ComplexTypes.pageLinks;
	order: number;
	title: string;
	userTags: Array<string>[];
	parentNotebook(): IBaseQuery<notebook>;
	parentSection(): IBaseQuery<onenoteSection>;
}
/*********************************************
* onenoteResource
**********************************************/
export interface onenoteResource extends onenoteEntityBaseModel {
	content: any;
	contentUrl: string;

}
/*********************************************
* delegatedAdminAccessAssignment
**********************************************/
export interface delegatedAdminAccessAssignment extends entity {
	accessContainer: ComplexTypes.delegatedAdminAccessContainer;
	accessDetails: ComplexTypes.delegatedAdminAccessDetails;
	createdDateTime: any;
	lastModifiedDateTime: any;
	status: EnumTypes.delegatedAdminAccessAssignmentStatus;

}
/*********************************************
* delegatedAdminServiceManagementDetail
**********************************************/
export interface delegatedAdminServiceManagementDetail extends entity {
	serviceManagementUrl: string;
	serviceName: string;

}
/*********************************************
* delegatedAdminRelationshipOperation
**********************************************/
export interface delegatedAdminRelationshipOperation extends entity {
	createdDateTime: any;
	data: string;
	lastModifiedDateTime: any;
	operationType: EnumTypes.delegatedAdminRelationshipOperationType;
	status: EnumTypes.longRunningOperationStatus;

}
/*********************************************
* delegatedAdminRelationshipRequest
**********************************************/
export interface delegatedAdminRelationshipRequest extends entity {
	action: EnumTypes.delegatedAdminRelationshipRequestAction;
	createdDateTime: any;
	lastModifiedDateTime: any;
	status: EnumTypes.delegatedAdminRelationshipRequestStatus;

}
/*********************************************
* resellerDelegatedAdminRelationship
**********************************************/
export interface resellerDelegatedAdminRelationship extends delegatedAdminRelationship {
	indirectProviderTenantId: string;
	isPartnerConsentPending: boolean;

}
/*********************************************
* cloudClipboardItem
**********************************************/
export interface cloudClipboardItem extends entity {
	createdDateTime: any;
	expirationDateTime: any;
	lastModifiedDateTime: any;
	payloads: ComplexTypes.cloudClipboardItemPayload[];

}
/*********************************************
* windowsSettingInstance
**********************************************/
export interface windowsSettingInstance extends entity {
	createdDateTime: any;
	expirationDateTime: any;
	lastModifiedDateTime: any;
	payload: string;

}
/*********************************************
* profileCardProperty
**********************************************/
export interface profileCardProperty extends entity {
	annotations: ComplexTypes.profileCardAnnotation[];
	directoryPropertyName: string;

}
/*********************************************
* pronounsSettings
**********************************************/
export interface pronounsSettings extends entity {
	isEnabledInOrganization: boolean;

}
/*********************************************
* insightsSettings
**********************************************/
export interface insightsSettings extends entity {
	disabledForGroup: string;
	isEnabledInOrganization: boolean;

}
/*********************************************
* unifiedRoleManagementPolicyRule
**********************************************/
export interface unifiedRoleManagementPolicyRule extends entity {
	target: ComplexTypes.unifiedRoleManagementPolicyRuleTarget;

}
/*********************************************
* unifiedRoleManagementPolicyApprovalRule
**********************************************/
export interface unifiedRoleManagementPolicyApprovalRule extends unifiedRoleManagementPolicyRule {
	setting: ComplexTypes.approvalSettings;

}
/*********************************************
* unifiedRoleManagementPolicyAuthenticationContextRule
**********************************************/
export interface unifiedRoleManagementPolicyAuthenticationContextRule extends unifiedRoleManagementPolicyRule {
	claimValue: string;
	isEnabled: boolean;

}
/*********************************************
* unifiedRoleManagementPolicyEnablementRule
**********************************************/
export interface unifiedRoleManagementPolicyEnablementRule extends unifiedRoleManagementPolicyRule {
	enabledRules: Array<string>[];

}
/*********************************************
* unifiedRoleManagementPolicyExpirationRule
**********************************************/
export interface unifiedRoleManagementPolicyExpirationRule extends unifiedRoleManagementPolicyRule {
	isExpirationRequired: boolean;
	maximumDuration: number;

}
/*********************************************
* unifiedRoleManagementPolicyNotificationRule
**********************************************/
export interface unifiedRoleManagementPolicyNotificationRule extends unifiedRoleManagementPolicyRule {
	isDefaultRecipientsEnabled: boolean;
	notificationLevel: string;
	notificationRecipients: Array<string>[];
	notificationType: string;
	recipientType: string;

}
/*********************************************
* printerBase
**********************************************/
export interface printerBase extends entity {
	capabilities: ComplexTypes.printerCapabilities;
	defaults: ComplexTypes.printerDefaults;
	displayName: string;
	isAcceptingJobs: boolean;
	location: ComplexTypes.printerLocation;
	manufacturer: string;
	model: string;
	status: ComplexTypes.printerStatus;
	jobs(): IBaseQuery<printJob[]>;
	jobs(id: string | number): IBaseQuery<printJob>;
}
/*********************************************
* printerShare
**********************************************/
export interface printerShare extends printerBase {
	allowAllUsers: boolean;
	createdDateTime: any;
	viewPoint: ComplexTypes.printerShareViewpoint;
	allowedGroups(): IBaseQuery<group[]>;
	allowedGroups(id: string | number): IBaseQuery<group>;
	allowedUsers(): IBaseQuery<user[]>;
	allowedUsers(id: string | number): IBaseQuery<user>;
	printer(): IBaseQuery<printer>;
}
/*********************************************
* print
**********************************************/
export interface print  {
	settings: ComplexTypes.printSettings;
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
export interface printConnector extends entity {
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
export interface printOperation extends entity {
	createdDateTime: any;
	status: ComplexTypes.printOperationStatus;

}
/*********************************************
* printer
**********************************************/
export interface printer extends printerBase {
	hasPhysicalDevice: boolean;
	isShared: boolean;
	lastSeenDateTime: any;
	registeredDateTime: any;
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
export interface printService extends entity {

	endpoints(): IBaseQuery<printServiceEndpoint[]>;
	endpoints(id: string | number): IBaseQuery<printServiceEndpoint>;
}
/*********************************************
* printTaskDefinition
**********************************************/
export interface printTaskDefinition extends entity {
	createdBy: ComplexTypes.appIdentity;
	displayName: string;
	tasks(): IBaseQuery<printTask[]>;
	tasks(id: string | number): IBaseQuery<printTask>;
}
/*********************************************
* printDocument
**********************************************/
export interface printDocument extends entity {
	contentType: string;
	displayName: string;
	size: number;

}
/*********************************************
* printTaskTrigger
**********************************************/
export interface printTaskTrigger extends entity {
	event: EnumTypes.printEvent;
	definition(): IBaseQuery<printTaskDefinition>;
}
/*********************************************
* printJob
**********************************************/
export interface printJob extends entity {
	configuration: ComplexTypes.printJobConfiguration;
	createdBy: ComplexTypes.userIdentity;
	createdDateTime: any;
	isFetchable: boolean;
	redirectedFrom: string;
	redirectedTo: string;
	status: ComplexTypes.printJobStatus;
	documents(): IBaseQuery<printDocument[]>;
	documents(id: string | number): IBaseQuery<printDocument>;
	tasks(): IBaseQuery<printTask[]>;
	tasks(id: string | number): IBaseQuery<printTask>;
}
/*********************************************
* printerCreateOperation
**********************************************/
export interface printerCreateOperation extends printOperation {
	certificate: string;
	printer(): IBaseQuery<printer>;
}
/*********************************************
* printTask
**********************************************/
export interface printTask extends entity {
	parentUrl: string;
	status: ComplexTypes.printTaskStatus;
	definition(): IBaseQuery<printTaskDefinition>;
	trigger(): IBaseQuery<printTaskTrigger>;
}
/*********************************************
* printServiceEndpoint
**********************************************/
export interface printServiceEndpoint extends entity {
	displayName: string;
	uri: string;

}
/*********************************************
* activityHistoryItem
**********************************************/
export interface activityHistoryItem extends entity {
	activeDurationSeconds: number;
	createdDateTime: any;
	expirationDateTime: any;
	lastActiveDateTime: any;
	lastModifiedDateTime: any;
	startedDateTime: any;
	status: EnumTypes.status;
	userTimezone: string;
	activity(): IBaseQuery<userActivity>;
}
/*********************************************
* dataPolicyOperation
**********************************************/
export interface dataPolicyOperation extends entity {
	completedDateTime: any;
	progress: number;
	status: EnumTypes.dataPolicyOperationStatus;
	storageLocation: string;
	submittedDateTime: any;
	userId: string;

}
/*********************************************
* endUserNotification
**********************************************/
export interface endUserNotification extends entity {
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
	details(): IBaseQuery<endUserNotificationDetail[]>;
	details(id: string | number): IBaseQuery<endUserNotificationDetail>;
}
/*********************************************
* training
**********************************************/
export interface training extends entity {
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
	languageDetails(): IBaseQuery<trainingLanguageDetail[]>;
	languageDetails(id: string | number): IBaseQuery<trainingLanguageDetail>;
}
/*********************************************
* attackSimulationOperation
**********************************************/
export interface attackSimulationOperation extends longRunningOperation {
	percentageCompleted: number;
	tenantId: string;
	type: EnumTypes.attackSimulationOperationType;

}
/*********************************************
* landingPage
**********************************************/
export interface landingPage extends entity {
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
	details(): IBaseQuery<landingPageDetail[]>;
	details(id: string | number): IBaseQuery<landingPageDetail>;
}
/*********************************************
* loginPage
**********************************************/
export interface loginPage extends entity {
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
/*********************************************
* payload
**********************************************/
export interface payload extends entity {
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
/*********************************************
* simulationAutomation
**********************************************/
export interface simulationAutomation extends entity {
	createdBy: ComplexTypes.emailIdentity;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.emailIdentity;
	lastModifiedDateTime: any;
	lastRunDateTime: any;
	nextRunDateTime: any;
	status: EnumTypes.simulationAutomationStatus;
	runs(): IBaseQuery<simulationAutomationRun[]>;
	runs(id: string | number): IBaseQuery<simulationAutomationRun>;
}
/*********************************************
* simulation
**********************************************/
export interface simulation extends entity {
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
	landingPage(): IBaseQuery<landingPage>;
	loginPage(): IBaseQuery<loginPage>;
	payload(): IBaseQuery<payload>;
}
/*********************************************
* endUserNotificationDetail
**********************************************/
export interface endUserNotificationDetail extends entity {
	emailContent: string;
	isDefaultLangauge: boolean;
	language: string;
	locale: string;
	sentFrom: ComplexTypes.emailIdentity;
	subject: string;

}
/*********************************************
* landingPageDetail
**********************************************/
export interface landingPageDetail extends entity {
	content: string;
	isDefaultLangauge: boolean;
	language: string;

}
/*********************************************
* simulationAutomationRun
**********************************************/
export interface simulationAutomationRun extends entity {
	endDateTime: any;
	simulationId: string;
	startDateTime: any;
	status: EnumTypes.simulationAutomationRunStatus;

}
/*********************************************
* trainingLanguageDetail
**********************************************/
export interface trainingLanguageDetail extends entity {
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
/*********************************************
* commsOperation
**********************************************/
export interface commsOperation extends entity {
	clientContext: string;
	resultInfo: ComplexTypes.resultInfo;
	status: EnumTypes.operationStatus;

}
/*********************************************
* addLargeGalleryViewOperation
**********************************************/
export interface addLargeGalleryViewOperation extends commsOperation {


}
/*********************************************
* attendanceRecord
**********************************************/
export interface attendanceRecord extends entity {
	attendanceIntervals: ComplexTypes.attendanceInterval[];
	emailAddress: string;
	identity: ComplexTypes.identity;
	role: string;
	totalAttendanceInSeconds: number;

}
/*********************************************
* audioRoutingGroup
**********************************************/
export interface audioRoutingGroup extends entity {
	receivers: Array<string>[];
	routingMode: EnumTypes.routingMode;
	sources: Array<string>[];

}
/*********************************************
* contentSharingSession
**********************************************/
export interface contentSharingSession extends entity {


}
/*********************************************
* participant
**********************************************/
export interface participant extends participantBase {


}
/*********************************************
* cancelMediaProcessingOperation
**********************************************/
export interface cancelMediaProcessingOperation extends commsOperation {


}
/*********************************************
* deltaParticipants
**********************************************/
export interface deltaParticipants extends entity {
	sequenceNumber: number;
	participants(): IBaseQuery<participant[]>;
	participants(id: string | number): IBaseQuery<participant>;
}
/*********************************************
* inviteParticipantsOperation
**********************************************/
export interface inviteParticipantsOperation extends commsOperation {
	participants: ComplexTypes.invitationParticipantInfo[];

}
/*********************************************
* meetingAttendanceReport
**********************************************/
export interface meetingAttendanceReport extends entity {
	meetingEndDateTime: any;
	meetingStartDateTime: any;
	totalParticipantCount: number;
	attendanceRecords(): IBaseQuery<attendanceRecord[]>;
	attendanceRecords(id: string | number): IBaseQuery<attendanceRecord>;
}
/*********************************************
* muteParticipantOperation
**********************************************/
export interface muteParticipantOperation extends commsOperation {


}
/*********************************************
* participantJoiningNotification
**********************************************/
export interface participantJoiningNotification extends entity {

	call(): IBaseQuery<call>;
}
/*********************************************
* participantLeftNotification
**********************************************/
export interface participantLeftNotification extends entity {
	participantId: string;
	call(): IBaseQuery<call>;
}
/*********************************************
* playPromptOperation
**********************************************/
export interface playPromptOperation extends commsOperation {


}
/*********************************************
* recordOperation
**********************************************/
export interface recordOperation extends commsOperation {
	recordingAccessToken: string;
	recordingLocation: string;

}
/*********************************************
* sendDtmfTonesOperation
**********************************************/
export interface sendDtmfTonesOperation extends commsOperation {
	completionReason: EnumTypes.sendDtmfCompletionReason;

}
/*********************************************
* startHoldMusicOperation
**********************************************/
export interface startHoldMusicOperation extends commsOperation {


}
/*********************************************
* stopHoldMusicOperation
**********************************************/
export interface stopHoldMusicOperation extends commsOperation {


}
/*********************************************
* subscribeToToneOperation
**********************************************/
export interface subscribeToToneOperation extends commsOperation {


}
/*********************************************
* unmuteParticipantOperation
**********************************************/
export interface unmuteParticipantOperation extends commsOperation {


}
/*********************************************
* updateRecordingStatusOperation
**********************************************/
export interface updateRecordingStatusOperation extends commsOperation {


}
/*********************************************
* virtualEvent
**********************************************/
export interface virtualEvent extends entity {
	createdBy: ComplexTypes.communicationsIdentitySet;
	description: ComplexTypes.itemBody;
	displayName: string;
	endDateTime: ComplexTypes.dateTimeTimeZone;
	settings: ComplexTypes.virtualEventSettings;
	startDateTime: ComplexTypes.dateTimeTimeZone;
	status: EnumTypes.virtualEventStatus;
	presenters(): IBaseQuery<virtualEventPresenter[]>;
	presenters(id: string | number): IBaseQuery<virtualEventPresenter>;
	sessions(): IBaseQuery<virtualEventSession[]>;
	sessions(id: string | number): IBaseQuery<virtualEventSession>;
}
/*********************************************
* virtualEventPresenter
**********************************************/
export interface virtualEventPresenter extends entity {
	email: string;
	identity: ComplexTypes.identity;
	presenterDetails: ComplexTypes.virtualEventPresenterDetails;

}
/*********************************************
* virtualEventSession
**********************************************/
export interface virtualEventSession extends onlineMeetingBase {
	endDateTime: ComplexTypes.dateTimeTimeZone;
	startDateTime: ComplexTypes.dateTimeTimeZone;

}
/*********************************************
* virtualEventRegistration
**********************************************/
export interface virtualEventRegistration extends entity {
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
	sessions(): IBaseQuery<virtualEventSession[]>;
	sessions(id: string | number): IBaseQuery<virtualEventSession>;
}
/*********************************************
* virtualEventRegistrationConfiguration
**********************************************/
export interface virtualEventRegistrationConfiguration extends entity {
	capacity: number;
	registrationWebUrl: string;
	questions(): IBaseQuery<virtualEventRegistrationQuestionBase[]>;
	questions(id: string | number): IBaseQuery<virtualEventRegistrationQuestionBase>;
}
/*********************************************
* virtualEventRegistrationQuestionBase
**********************************************/
export interface virtualEventRegistrationQuestionBase extends entity {
	displayName: string;
	isRequired: boolean;

}
/*********************************************
* virtualEventRegistrationCustomQuestion
**********************************************/
export interface virtualEventRegistrationCustomQuestion extends virtualEventRegistrationQuestionBase {
	answerChoices: Array<string>[];
	answerInputType: EnumTypes.virtualEventRegistrationQuestionAnswerInputType;

}
/*********************************************
* virtualEventRegistrationPredefinedQuestion
**********************************************/
export interface virtualEventRegistrationPredefinedQuestion extends virtualEventRegistrationQuestionBase {
	label: EnumTypes.virtualEventRegistrationPredefinedQuestionLabel;

}
/*********************************************
* virtualEventTownhall
**********************************************/
export interface virtualEventTownhall extends virtualEvent {
	audience: EnumTypes.meetingAudience;
	coOrganizers: ComplexTypes.communicationsUserIdentity[];
	invitedAttendees: ComplexTypes.identity[];
	isInviteOnly: boolean;

}
/*********************************************
* virtualEventWebinar
**********************************************/
export interface virtualEventWebinar extends virtualEvent {
	audience: EnumTypes.meetingAudience;
	coOrganizers: ComplexTypes.communicationsUserIdentity[];
	registrationConfiguration(): IBaseQuery<virtualEventWebinarRegistrationConfiguration>;
	registrations(): IBaseQuery<virtualEventRegistration[]>;
	registrations(id: string | number): IBaseQuery<virtualEventRegistration>;
}
/*********************************************
* virtualEventWebinarRegistrationConfiguration
**********************************************/
export interface virtualEventWebinarRegistrationConfiguration extends virtualEventRegistrationConfiguration {
	isManualApprovalEnabled: boolean;
	isWaitlistEnabled: boolean;

}
/*********************************************
* authenticationMethod
**********************************************/
export interface authenticationMethod extends entity {


}
/*********************************************
* emailAuthenticationMethod
**********************************************/
export interface emailAuthenticationMethod extends authenticationMethod {
	emailAddress: string;

}
/*********************************************
* fido2AuthenticationMethod
**********************************************/
export interface fido2AuthenticationMethod extends authenticationMethod {
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
export interface microsoftAuthenticatorAuthenticationMethod extends authenticationMethod {
	createdDateTime: any;
	deviceTag: string;
	displayName: string;
	phoneAppVersion: string;
	device(): IBaseQuery<device>;
}
/*********************************************
* passwordAuthenticationMethod
**********************************************/
export interface passwordAuthenticationMethod extends authenticationMethod {
	createdDateTime: any;
	password: string;

}
/*********************************************
* phoneAuthenticationMethod
**********************************************/
export interface phoneAuthenticationMethod extends authenticationMethod {
	phoneNumber: string;
	phoneType: EnumTypes.authenticationPhoneType;
	smsSignInState: EnumTypes.authenticationMethodSignInState;

}
/*********************************************
* softwareOathAuthenticationMethod
**********************************************/
export interface softwareOathAuthenticationMethod extends authenticationMethod {
	secretKey: string;

}
/*********************************************
* temporaryAccessPassAuthenticationMethod
**********************************************/
export interface temporaryAccessPassAuthenticationMethod extends authenticationMethod {
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
export interface windowsHelloForBusinessAuthenticationMethod extends authenticationMethod {
	createdDateTime: any;
	displayName: string;
	keyStrength: EnumTypes.authenticationMethodKeyStrength;
	device(): IBaseQuery<device>;
}
/*********************************************
* aadUserConversationMember
**********************************************/
export interface aadUserConversationMember extends conversationMember {
	email: string;
	tenantId: string;
	userId: string;
	user(): IBaseQuery<user>;
}
/*********************************************
* anonymousGuestConversationMember
**********************************************/
export interface anonymousGuestConversationMember extends conversationMember {
	anonymousGuestId: string;

}
/*********************************************
* appCatalogs
**********************************************/
export interface appCatalogs extends entity {

	teamsApps(): IBaseQuery<teamsApp[]>;
	teamsApps(id: string | number): IBaseQuery<teamsApp>;
}
/*********************************************
* teamsApp
**********************************************/
export interface teamsApp extends entity {
	displayName: string;
	distributionMethod: EnumTypes.teamsAppDistributionMethod;
	externalId: string;
	appDefinitions(): IBaseQuery<teamsAppDefinition[]>;
	appDefinitions(id: string | number): IBaseQuery<teamsAppDefinition>;
}
/*********************************************
* teamInfo
**********************************************/
export interface teamInfo extends entity {
	displayName: string;
	tenantId: string;
	team(): IBaseQuery<team>;
}
/*********************************************
* associatedTeamInfo
**********************************************/
export interface associatedTeamInfo extends teamInfo {


}
/*********************************************
* azureCommunicationServicesUserConversationMember
**********************************************/
export interface azureCommunicationServicesUserConversationMember extends conversationMember {
	azureCommunicationServicesId: string;

}
/*********************************************
* chatMessage
**********************************************/
export interface chatMessage extends entity {
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
	hostedContents(): IBaseQuery<chatMessageHostedContent[]>;
	hostedContents(id: string | number): IBaseQuery<chatMessageHostedContent>;
	replies(): IBaseQuery<chatMessage[]>;
	replies(id: string | number): IBaseQuery<chatMessage>;
}
/*********************************************
* sharedWithChannelTeamInfo
**********************************************/
export interface sharedWithChannelTeamInfo extends teamInfo {
	isHostTeam: boolean;
	allowedMembers(): IBaseQuery<conversationMember[]>;
	allowedMembers(id: string | number): IBaseQuery<conversationMember>;
}
/*********************************************
* teamsTab
**********************************************/
export interface teamsTab extends entity {
	configuration: ComplexTypes.teamsTabConfiguration;
	displayName: string;
	webUrl: string;
	teamsApp(): IBaseQuery<teamsApp>;
}
/*********************************************
* chatMessageInfo
**********************************************/
export interface chatMessageInfo extends entity {
	body: ComplexTypes.itemBody;
	createdDateTime: any;
	eventDetail: ComplexTypes.eventMessageDetail;
	from: ComplexTypes.chatMessageFromIdentitySet;
	isDeleted: boolean;
	messageType: EnumTypes.chatMessageType;

}
/*********************************************
* pinnedChatMessageInfo
**********************************************/
export interface pinnedChatMessageInfo extends entity {

	message(): IBaseQuery<chatMessage>;
}
/*********************************************
* teamworkHostedContent
**********************************************/
export interface teamworkHostedContent extends entity {
	contentBytes: any;
	contentType: string;

}
/*********************************************
* chatMessageHostedContent
**********************************************/
export interface chatMessageHostedContent extends teamworkHostedContent {


}
/*********************************************
* deletedChat
**********************************************/
export interface deletedChat extends entity {


}
/*********************************************
* deletedTeam
**********************************************/
export interface deletedTeam extends entity {

	channels(): IBaseQuery<channel[]>;
	channels(id: string | number): IBaseQuery<channel>;
}
/*********************************************
* microsoftAccountUserConversationMember
**********************************************/
export interface microsoftAccountUserConversationMember extends conversationMember {
	userId: string;

}
/*********************************************
* skypeForBusinessUserConversationMember
**********************************************/
export interface skypeForBusinessUserConversationMember extends conversationMember {
	tenantId: string;
	userId: string;

}
/*********************************************
* skypeUserConversationMember
**********************************************/
export interface skypeUserConversationMember extends conversationMember {
	skypeId: string;

}
/*********************************************
* teamsAppDefinition
**********************************************/
export interface teamsAppDefinition extends entity {
	authorization: ComplexTypes.teamsAppAuthorization;
	createdBy: ComplexTypes.identitySet;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;
	publishingState: EnumTypes.teamsAppPublishingState;
	shortDescription: string;
	teamsAppId: string;
	version: string;
	bot(): IBaseQuery<teamworkBot>;
}
/*********************************************
* teamworkBot
**********************************************/
export interface teamworkBot extends entity {


}
/*********************************************
* teamsAppSettings
**********************************************/
export interface teamsAppSettings extends entity {
	allowUserRequestsForAppAccess: boolean;
	isUserPersonalScopeResourceSpecificConsentEnabled: boolean;

}
/*********************************************
* teamwork
**********************************************/
export interface teamwork extends entity {
	isTeamsEnabled: boolean;
	region: string;
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
export interface workforceIntegration extends changeTrackedEntity {
	apiVersion: number;
	displayName: string;
	encryption: ComplexTypes.workforceIntegrationEncryption;
	isActive: boolean;
	supportedEntities: EnumTypes.workforceIntegrationSupportedEntities;
	url: string;

}
/*********************************************
* teamworkTagMember
**********************************************/
export interface teamworkTagMember extends entity {
	displayName: string;
	tenantId: string;
	userId: string;

}
/*********************************************
* userScopeTeamsAppInstallation
**********************************************/
export interface userScopeTeamsAppInstallation extends teamsAppInstallation {

	chat(): IBaseQuery<chat>;
}
/*********************************************
* scheduleChangeRequest
**********************************************/
export interface scheduleChangeRequest extends changeTrackedEntity {
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
export interface offerShiftRequest extends scheduleChangeRequest {
	recipientActionDateTime: any;
	recipientActionMessage: string;
	recipientUserId: string;
	senderShiftId: string;

}
/*********************************************
* openShift
**********************************************/
export interface openShift extends changeTrackedEntity {
	draftOpenShift: ComplexTypes.openShiftItem;
	schedulingGroupId: string;
	sharedOpenShift: ComplexTypes.openShiftItem;

}
/*********************************************
* openShiftChangeRequest
**********************************************/
export interface openShiftChangeRequest extends scheduleChangeRequest {
	openShiftId: string;

}
/*********************************************
* schedulingGroup
**********************************************/
export interface schedulingGroup extends changeTrackedEntity {
	displayName: string;
	isActive: boolean;
	userIds: Array<string>[];

}
/*********************************************
* shift
**********************************************/
export interface shift extends changeTrackedEntity {
	draftShift: ComplexTypes.shiftItem;
	schedulingGroupId: string;
	sharedShift: ComplexTypes.shiftItem;
	userId: string;

}
/*********************************************
* swapShiftsChangeRequest
**********************************************/
export interface swapShiftsChangeRequest extends offerShiftRequest {
	recipientShiftId: string;

}
/*********************************************
* timeOffReason
**********************************************/
export interface timeOffReason extends changeTrackedEntity {
	displayName: string;
	iconType: EnumTypes.timeOffReasonIconType;
	isActive: boolean;

}
/*********************************************
* timeOffRequest
**********************************************/
export interface timeOffRequest extends scheduleChangeRequest {
	endDateTime: any;
	startDateTime: any;
	timeOffReasonId: string;

}
/*********************************************
* timeOff
**********************************************/
export interface timeOff extends changeTrackedEntity {
	draftTimeOff: ComplexTypes.timeOffItem;
	sharedTimeOff: ComplexTypes.timeOffItem;
	userId: string;

}
/*********************************************
* workingTimeSchedule
**********************************************/
export interface workingTimeSchedule extends entity {


}
/*********************************************
* emailFileAssessmentRequest
**********************************************/
export interface emailFileAssessmentRequest extends threatAssessmentRequest {
	contentData: string;
	destinationRoutingReason: EnumTypes.mailDestinationRoutingReason;
	recipientEmail: string;

}
/*********************************************
* fileAssessmentRequest
**********************************************/
export interface fileAssessmentRequest extends threatAssessmentRequest {
	contentData: string;
	fileName: string;

}
/*********************************************
* mailAssessmentRequest
**********************************************/
export interface mailAssessmentRequest extends threatAssessmentRequest {
	destinationRoutingReason: EnumTypes.mailDestinationRoutingReason;
	messageUri: string;
	recipientEmail: string;

}
/*********************************************
* threatAssessmentResult
**********************************************/
export interface threatAssessmentResult extends entity {
	createdDateTime: any;
	message: string;
	resultType: EnumTypes.threatAssessmentResultType;

}
/*********************************************
* urlAssessmentRequest
**********************************************/
export interface urlAssessmentRequest extends threatAssessmentRequest {
	url: string;

}
/*********************************************
* attachmentBase
**********************************************/
export interface attachmentBase extends entity {
	contentType: string;
	lastModifiedDateTime: any;
	name: string;
	size: number;

}
/*********************************************
* attachmentSession
**********************************************/
export interface attachmentSession extends entity {
	content: any;
	expirationDateTime: any;
	nextExpectedRanges: Array<string>[];

}
/*********************************************
* checklistItem
**********************************************/
export interface checklistItem extends entity {
	checkedDateTime: any;
	createdDateTime: any;
	displayName: string;
	isChecked: boolean;

}
/*********************************************
* linkedResource
**********************************************/
export interface linkedResource extends entity {
	applicationName: string;
	displayName: string;
	externalId: string;
	webUrl: string;

}
/*********************************************
* taskFileAttachment
**********************************************/
export interface taskFileAttachment extends attachmentBase {
	contentBytes: any;

}
/*********************************************
* todoTaskList
**********************************************/
export interface todoTaskList extends entity {
	displayName: string;
	isOwner: boolean;
	isShared: boolean;
	wellknownListName: EnumTypes.wellknownListName;
	extensions(): IBaseQuery<extension[]>;
	extensions(id: string | number): IBaseQuery<extension>;
	tasks(): IBaseQuery<todoTask[]>;
	tasks(id: string | number): IBaseQuery<todoTask>;
}
/*********************************************
* todoTask
**********************************************/
export interface todoTask extends entity {
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
export interface storageQuotaBreakdown extends entity {
	displayName: string;
	manageWebUrl: string;
	used: number;

}
/*********************************************
* serviceStorageQuotaBreakdown
**********************************************/
export interface serviceStorageQuotaBreakdown extends storageQuotaBreakdown {


}
/*********************************************
* unifiedStorageQuota
**********************************************/
export interface unifiedStorageQuota extends entity {
	deleted: number;
	manageWebUrl: string;
	remaining: number;
	state: string;
	total: number;
	used: number;
	services(): IBaseQuery<serviceStorageQuotaBreakdown[]>;
	services(id: string | number): IBaseQuery<serviceStorageQuotaBreakdown>;
}
/*********************************************
* community
**********************************************/
export interface community extends entity {
	description: string;
	displayName: string;
	groupId: string;
	privacy: EnumTypes.communityPrivacy;
	group(): IBaseQuery<group>;
	owners(): IBaseQuery<user[]>;
	owners(id: string | number): IBaseQuery<user>;
}
/*********************************************
* employeeExperience
**********************************************/
export interface employeeExperience  {

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
export interface engagementAsyncOperation extends longRunningOperation {
	operationType: EnumTypes.engagementAsyncOperationType;
	resourceId: string;

}
/*********************************************
* learningCourseActivity
**********************************************/
export interface learningCourseActivity extends entity {
	completedDateTime: any;
	completionPercentage: number;
	externalcourseActivityId: string;
	learnerUserId: string;
	learningContentId: string;
	learningProviderId: string;
	status: EnumTypes.courseStatus;

}
/*********************************************
* learningProvider
**********************************************/
export interface learningProvider extends entity {
	displayName: string;
	isCourseActivitySyncEnabled: boolean;
	loginWebUrl: string;
	longLogoWebUrlForDarkTheme: string;
	longLogoWebUrlForLightTheme: string;
	squareLogoWebUrlForDarkTheme: string;
	squareLogoWebUrlForLightTheme: string;
	learningContents(): IBaseQuery<learningContent[]>;
	learningContents(id: string | number): IBaseQuery<learningContent>;
	learningCourseActivities(): IBaseQuery<learningCourseActivity[]>;
	learningCourseActivities(id: string | number): IBaseQuery<learningCourseActivity>;
}
/*********************************************
* learningAssignment
**********************************************/
export interface learningAssignment extends learningCourseActivity {
	assignedDateTime: any;
	assignerUserId: string;
	assignmentType: EnumTypes.assignmentType;
	dueDateTime: ComplexTypes.dateTimeTimeZone;
	notes: ComplexTypes.itemBody;

}
/*********************************************
* learningContent
**********************************************/
export interface learningContent extends entity {
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
/*********************************************
* learningSelfInitiatedCourse
**********************************************/
export interface learningSelfInitiatedCourse extends learningCourseActivity {
	startedDateTime: any;

}
/*********************************************
* casesRoot
**********************************************/
export interface casesRoot extends entity {

	ediscoveryCases(): IBaseQuery<ediscoveryCase[]>;
	ediscoveryCases(id: string | number): IBaseQuery<ediscoveryCase>;
}
/*********************************************
* incident
**********************************************/
export interface incident extends entity {
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
	alerts(): IBaseQuery<alert[]>;
	alerts(id: string | number): IBaseQuery<alert>;
}
/*********************************************
* labelsRoot
**********************************************/
export interface labelsRoot extends entity {

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
export interface triggersRoot extends entity {

	retentionEvents(): IBaseQuery<retentionEvent[]>;
	retentionEvents(id: string | number): IBaseQuery<retentionEvent>;
}
/*********************************************
* triggerTypesRoot
**********************************************/
export interface triggerTypesRoot extends entity {

	retentionEventTypes(): IBaseQuery<retentionEventType[]>;
	retentionEventTypes(id: string | number): IBaseQuery<retentionEventType>;
}
/*********************************************
* threatIntelligence
**********************************************/
export interface threatIntelligence extends entity {

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
export interface _case extends entity {
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
export interface caseOperation extends entity {
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
export interface dataSet extends entity {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;

}
/*********************************************
* dataSource
**********************************************/
export interface dataSource extends entity {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;
	holdStatus: EnumTypes.dataSourceHoldStatus;

}
/*********************************************
* dataSourceContainer
**********************************************/
export interface dataSourceContainer extends entity {
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
export interface ediscoveryAddToReviewSetOperation extends caseOperation {

	reviewSet(): IBaseQuery<ediscoveryReviewSet>;
	search(): IBaseQuery<ediscoverySearch>;
}
/*********************************************
* ediscoveryReviewSet
**********************************************/
export interface ediscoveryReviewSet extends dataSet {

	queries(): IBaseQuery<ediscoveryReviewSetQuery[]>;
	queries(id: string | number): IBaseQuery<ediscoveryReviewSetQuery>;
}
/*********************************************
* search
**********************************************/
export interface search extends entity {
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
export interface ediscoverySearch extends search {
	dataSourceScopes: EnumTypes.dataSourceScopes;
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
export interface ediscoveryCustodian extends dataSourceContainer {
	acknowledgedDateTime: any;
	email: string;
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
export interface ediscoveryNoncustodialDataSource extends dataSourceContainer {

	dataSource(): IBaseQuery<dataSource>;
	lastIndexOperation(): IBaseQuery<ediscoveryIndexOperation>;
}
/*********************************************
* ediscoveryCaseSettings
**********************************************/
export interface ediscoveryCaseSettings extends entity {
	ocr: ComplexTypes.ocrSettings;
	redundancyDetection: ComplexTypes.redundancyDetectionSettings;
	topicModeling: ComplexTypes.topicModelingSettings;

}
/*********************************************
* tag
**********************************************/
export interface tag extends entity {
	createdBy: ComplexTypes.identitySet;
	description: string;
	displayName: string;
	lastModifiedDateTime: any;

}
/*********************************************
* ediscoveryReviewTag
**********************************************/
export interface ediscoveryReviewTag extends tag {
	childSelectability: EnumTypes.childSelectability;
	childTags(): IBaseQuery<ediscoveryReviewTag[]>;
	childTags(id: string | number): IBaseQuery<ediscoveryReviewTag>;
	parent(): IBaseQuery<ediscoveryReviewTag>;
}
/*********************************************
* ediscoveryIndexOperation
**********************************************/
export interface ediscoveryIndexOperation extends caseOperation {


}
/*********************************************
* siteSource
**********************************************/
export interface siteSource extends dataSource {

	site(): IBaseQuery<site>;
}
/*********************************************
* unifiedGroupSource
**********************************************/
export interface unifiedGroupSource extends dataSource {
	includedSources: EnumTypes.sourceType;
	group(): IBaseQuery<group>;
}
/*********************************************
* userSource
**********************************************/
export interface userSource extends dataSource {
	email: string;
	includedSources: EnumTypes.sourceType;
	siteWebUrl: string;

}
/*********************************************
* ediscoveryEstimateOperation
**********************************************/
export interface ediscoveryEstimateOperation extends caseOperation {
	indexedItemCount: number;
	indexedItemsSize: number;
	mailboxCount: number;
	siteCount: number;
	unindexedItemCount: number;
	unindexedItemsSize: number;
	search(): IBaseQuery<ediscoverySearch>;
}
/*********************************************
* ediscoveryExportOperation
**********************************************/
export interface ediscoveryExportOperation extends caseOperation {
	description: string;
	exportFileMetadata: ComplexTypes.exportFileMetadata[];
	exportOptions: EnumTypes.exportOptions;
	exportStructure: EnumTypes.exportFileStructure;
	outputName: string;
	reviewSet(): IBaseQuery<ediscoveryReviewSet>;
	reviewSetQuery(): IBaseQuery<ediscoveryReviewSetQuery>;
}
/*********************************************
* ediscoveryReviewSetQuery
**********************************************/
export interface ediscoveryReviewSetQuery extends search {


}
/*********************************************
* ediscoveryHoldOperation
**********************************************/
export interface ediscoveryHoldOperation extends caseOperation {


}
/*********************************************
* ediscoveryPurgeDataOperation
**********************************************/
export interface ediscoveryPurgeDataOperation extends caseOperation {


}
/*********************************************
* ediscoverySearchExportOperation
**********************************************/
export interface ediscoverySearchExportOperation extends caseOperation {
	additionalOptions: EnumTypes.additionalOptions;
	description: string;
	displayName: string;
	exportCriteria: EnumTypes.exportCriteria;
	exportFileMetadata: ComplexTypes.exportFileMetadata[];
	exportFormat: EnumTypes.exportFormat;
	exportLocation: EnumTypes.exportLocation;
	exportSingleItems: boolean;
	search(): IBaseQuery<ediscoverySearch>;
}
/*********************************************
* ediscoveryTagOperation
**********************************************/
export interface ediscoveryTagOperation extends caseOperation {


}
/*********************************************
* networkAdapter
**********************************************/
export interface networkAdapter extends entity {
	isEnabled: boolean;
	name: string;

}
/*********************************************
* healthIssue
**********************************************/
export interface healthIssue extends entity {
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
/*********************************************
* sensor
**********************************************/
export interface sensor extends entity {
	createdDateTime: any;
	deploymentStatus: EnumTypes.deploymentStatus;
	displayName: string;
	domainName: string;
	healthStatus: EnumTypes.sensorHealthStatus;
	openHealthIssuesCount: number;
	sensorType: EnumTypes.sensorType;
	settings: ComplexTypes.sensorSettings;
	version: string;
	healthIssues(): IBaseQuery<healthIssue[]>;
	healthIssues(id: string | number): IBaseQuery<healthIssue>;
}
/*********************************************
* filePlanDescriptorTemplate
**********************************************/
export interface filePlanDescriptorTemplate extends entity {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	displayName: string;

}
/*********************************************
* authorityTemplate
**********************************************/
export interface authorityTemplate extends filePlanDescriptorTemplate {


}
/*********************************************
* categoryTemplate
**********************************************/
export interface categoryTemplate extends filePlanDescriptorTemplate {

	subcategories(): IBaseQuery<subcategoryTemplate[]>;
	subcategories(id: string | number): IBaseQuery<subcategoryTemplate>;
}
/*********************************************
* subcategoryTemplate
**********************************************/
export interface subcategoryTemplate extends filePlanDescriptorTemplate {


}
/*********************************************
* citationTemplate
**********************************************/
export interface citationTemplate extends filePlanDescriptorTemplate {
	citationJurisdiction: string;
	citationUrl: string;

}
/*********************************************
* departmentTemplate
**********************************************/
export interface departmentTemplate extends filePlanDescriptorTemplate {


}
/*********************************************
* dispositionReviewStage
**********************************************/
export interface dispositionReviewStage  {
	name: string;
	reviewersEmailAddresses: Array<string>[];
	stageNumber: string;

}
/*********************************************
* filePlanDescriptor
**********************************************/
export interface filePlanDescriptor extends entity {
	authority: ComplexTypes.filePlanAuthority;
	category: ComplexTypes.filePlanAppliedCategory;
	citation: ComplexTypes.filePlanCitation;
	department: ComplexTypes.filePlanDepartment;
	filePlanReference: ComplexTypes.filePlanReference;
	authorityTemplate(): IBaseQuery<authorityTemplate>;
	categoryTemplate(): IBaseQuery<categoryTemplate>;
	citationTemplate(): IBaseQuery<citationTemplate>;
	departmentTemplate(): IBaseQuery<departmentTemplate>;
	filePlanReferenceTemplate(): IBaseQuery<filePlanReferenceTemplate>;
}
/*********************************************
* filePlanReferenceTemplate
**********************************************/
export interface filePlanReferenceTemplate extends filePlanDescriptorTemplate {


}
/*********************************************
* retentionLabel
**********************************************/
export interface retentionLabel extends entity {
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
	descriptors(): IBaseQuery<filePlanDescriptor>;
	dispositionReviewStages(): IBaseQuery<dispositionReviewStage[]>;
	dispositionReviewStages(id: string | number): IBaseQuery<dispositionReviewStage>;
	retentionEventType(): IBaseQuery<retentionEventType>;
}
/*********************************************
* retentionEvent
**********************************************/
export interface retentionEvent extends entity {
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
	retentionEventType(): IBaseQuery<retentionEventType>;
}
/*********************************************
* retentionEventType
**********************************************/
export interface retentionEventType extends entity {
	createdBy: ComplexTypes.identitySet;
	createdDateTime: any;
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;

}
/*********************************************
* artifact
**********************************************/
export interface artifact extends entity {


}
/*********************************************
* hostComponent
**********************************************/
export interface hostComponent extends artifact {
	category: string;
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	name: string;
	version: string;
	host(): IBaseQuery<host>;
}
/*********************************************
* host
**********************************************/
export interface host extends artifact {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
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
export interface article extends entity {
	body: ComplexTypes.formattedContent;
	createdDateTime: any;
	imageUrl: string;
	isFeatured: boolean;
	lastUpdatedDateTime: any;
	summary: ComplexTypes.formattedContent;
	tags: Array<string>[];
	title: string;
	indicators(): IBaseQuery<articleIndicator[]>;
	indicators(id: string | number): IBaseQuery<articleIndicator>;
}
/*********************************************
* indicator
**********************************************/
export interface indicator extends entity {
	source: EnumTypes.indicatorSource;
	artifact(): IBaseQuery<artifact>;
}
/*********************************************
* articleIndicator
**********************************************/
export interface articleIndicator extends indicator {


}
/*********************************************
* hostPair
**********************************************/
export interface hostPair extends entity {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	linkKind: string;
	childHost(): IBaseQuery<host>;
	parentHost(): IBaseQuery<host>;
}
/*********************************************
* hostCookie
**********************************************/
export interface hostCookie extends artifact {
	domain: string;
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	name: string;
	host(): IBaseQuery<host>;
}
/*********************************************
* passiveDnsRecord
**********************************************/
export interface passiveDnsRecord extends artifact {
	collectedDateTime: any;
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	recordType: string;
	artifact(): IBaseQuery<artifact>;
	parentHost(): IBaseQuery<host>;
}
/*********************************************
* hostPort
**********************************************/
export interface hostPort extends entity {
	banners: ComplexTypes.hostPortBanner[];
	firstSeenDateTime: any;
	lastScanDateTime: any;
	lastSeenDateTime: any;
	port: number;
	protocol: EnumTypes.hostPortProtocol;
	services: ComplexTypes.hostPortComponent[];
	status: EnumTypes.hostPortStatus;
	timesObserved: number;
	host(): IBaseQuery<host>;
	mostRecentSslCertificate(): IBaseQuery<sslCertificate>;
}
/*********************************************
* hostReputation
**********************************************/
export interface hostReputation extends entity {
	classification: EnumTypes.hostReputationClassification;
	rules: ComplexTypes.hostReputationRule[];
	score: number;

}
/*********************************************
* hostSslCertificate
**********************************************/
export interface hostSslCertificate extends artifact {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	ports: ComplexTypes.hostSslCertificatePort[];
	host(): IBaseQuery<host>;
	sslCertificate(): IBaseQuery<sslCertificate>;
}
/*********************************************
* subdomain
**********************************************/
export interface subdomain extends entity {
	firstSeenDateTime: any;
	host(): IBaseQuery<host>;
}
/*********************************************
* hostTracker
**********************************************/
export interface hostTracker extends artifact {
	firstSeenDateTime: any;
	kind: string;
	lastSeenDateTime: any;
	value: string;
	host(): IBaseQuery<host>;
}
/*********************************************
* whoisBaseRecord
**********************************************/
export interface whoisBaseRecord extends entity {
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
	host(): IBaseQuery<host>;
}
/*********************************************
* whoisRecord
**********************************************/
export interface whoisRecord extends whoisBaseRecord {

	history(): IBaseQuery<whoisHistoryRecord[]>;
	history(id: string | number): IBaseQuery<whoisHistoryRecord>;
}
/*********************************************
* hostname
**********************************************/
export interface hostname extends host {
	registrant: string;
	registrar: string;

}
/*********************************************
* sslCertificate
**********************************************/
export interface sslCertificate extends artifact {
	expirationDateTime: any;
	fingerprint: string;
	firstSeenDateTime: any;
	issueDateTime: any;
	issuer: ComplexTypes.sslCertificateEntity;
	lastSeenDateTime: any;
	serialNumber: string;
	sha1: string;
	subject: ComplexTypes.sslCertificateEntity;
	relatedHosts(): IBaseQuery<host[]>;
	relatedHosts(id: string | number): IBaseQuery<host>;
}
/*********************************************
* intelligenceProfile
**********************************************/
export interface intelligenceProfile extends entity {
	aliases: Array<string>[];
	countriesOrRegionsOfOrigin: ComplexTypes.intelligenceProfileCountryOrRegionOfOrigin[];
	description: ComplexTypes.formattedContent;
	firstActiveDateTime: any;
	kind: EnumTypes.intelligenceProfileKind;
	summary: ComplexTypes.formattedContent;
	targets: Array<string>[];
	title: string;
	tradecraft: ComplexTypes.formattedContent;
	indicators(): IBaseQuery<intelligenceProfileIndicator[]>;
	indicators(id: string | number): IBaseQuery<intelligenceProfileIndicator>;
}
/*********************************************
* intelligenceProfileIndicator
**********************************************/
export interface intelligenceProfileIndicator extends indicator {
	firstSeenDateTime: any;
	lastSeenDateTime: any;

}
/*********************************************
* ipAddress
**********************************************/
export interface ipAddress extends host {
	autonomousSystem: ComplexTypes.autonomousSystem;
	countryOrRegion: string;
	hostingProvider: string;
	netblock: string;

}
/*********************************************
* vulnerability
**********************************************/
export interface vulnerability extends entity {
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
	articles(): IBaseQuery<article[]>;
	articles(id: string | number): IBaseQuery<article>;
	components(): IBaseQuery<vulnerabilityComponent[]>;
	components(id: string | number): IBaseQuery<vulnerabilityComponent>;
}
/*********************************************
* whoisHistoryRecord
**********************************************/
export interface whoisHistoryRecord extends whoisBaseRecord {


}
/*********************************************
* unclassifiedArtifact
**********************************************/
export interface unclassifiedArtifact extends artifact {
	kind: string;
	value: string;

}
/*********************************************
* vulnerabilityComponent
**********************************************/
export interface vulnerabilityComponent extends entity {
	name: string;

}
/*********************************************
* store
**********************************************/
export interface store extends entity {
	defaultLanguageTag: string;
	languageTags: Array<string>[];
	groups(): IBaseQuery<group[]>;
	groups(id: string | number): IBaseQuery<group>;
	sets(): IBaseQuery<set[]>;
	sets(id: string | number): IBaseQuery<set>;
}
/*********************************************
* set
**********************************************/
export interface set extends entity {
	createdDateTime: any;
	description: string;
	localizedNames: ComplexTypes.localizedName[];
	properties: ComplexTypes.keyValue[];
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
export interface relation extends entity {
	relationship: EnumTypes.relationType;
	fromTerm(): IBaseQuery<term>;
	set(): IBaseQuery<set>;
	toTerm(): IBaseQuery<term>;
}
/*********************************************
* term
**********************************************/
export interface term extends entity {
	createdDateTime: any;
	descriptions: ComplexTypes.localizedDescription[];
	labels: ComplexTypes.localizedLabel[];
	lastModifiedDateTime: any;
	properties: ComplexTypes.keyValue[];
	children(): IBaseQuery<term[]>;
	children(id: string | number): IBaseQuery<term>;
	relations(): IBaseQuery<relation[]>;
	relations(id: string | number): IBaseQuery<relation>;
	set(): IBaseQuery<set>;
}
/*********************************************
* callRecord
**********************************************/
export interface callRecord extends entity {
	endDateTime: any;
	joinWebUrl: string;
	lastModifiedDateTime: any;
	modalities: EnumTypes.modality[];
	organizer: ComplexTypes.identitySet;
	participants: ComplexTypes.identitySet[];
	startDateTime: any;
	type: EnumTypes.callType;
	version: number;
	organizer_v2(): IBaseQuery<organizer>;
	participants_v2(): IBaseQuery<participant[]>;
	participants_v2(id: string | number): IBaseQuery<participant>;
	sessions(): IBaseQuery<session[]>;
	sessions(id: string | number): IBaseQuery<session>;
}
/*********************************************
* participantBase
**********************************************/
export interface participantBase extends entity {
	administrativeUnitInfos: ComplexTypes.administrativeUnitInfo[];
	identity: ComplexTypes.communicationsIdentitySet;

}
/*********************************************
* organizer
**********************************************/
export interface organizer extends participantBase {


}
/*********************************************
* session
**********************************************/
export interface session extends entity {
	callee: ComplexTypes.endpoint;
	caller: ComplexTypes.endpoint;
	endDateTime: any;
	failureInfo: ComplexTypes.failureInfo;
	isTest: boolean;
	modalities: EnumTypes.modality[];
	startDateTime: any;
	segments(): IBaseQuery<segment[]>;
	segments(id: string | number): IBaseQuery<segment>;
}
/*********************************************
* segment
**********************************************/
export interface segment extends entity {
	callee: ComplexTypes.endpoint;
	caller: ComplexTypes.endpoint;
	endDateTime: any;
	failureInfo: ComplexTypes.failureInfo;
	media: ComplexTypes.media[];
	startDateTime: any;

}
/*********************************************
* billing
**********************************************/
export interface billing extends entity {

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
export interface azureUsage extends entity {

	billed(): IBaseQuery<billedUsage>;
	unbilled(): IBaseQuery<unbilledUsage>;
}
/*********************************************
* billedUsage
**********************************************/
export interface billedUsage extends entity {


}
/*********************************************
* unbilledUsage
**********************************************/
export interface unbilledUsage extends entity {


}
/*********************************************
* billedReconciliation
**********************************************/
export interface billedReconciliation extends entity {


}
/*********************************************
* manifest
**********************************************/
export interface manifest extends entity {
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
/*********************************************
* billingReconciliation
**********************************************/
export interface billingReconciliation extends entity {

	billed(): IBaseQuery<billedReconciliation>;
}
/*********************************************
* exportSuccessOperation
**********************************************/
export interface exportSuccessOperation extends operation {

	resourceLocation(): IBaseQuery<manifest>;
}
/*********************************************
* failedOperation
**********************************************/
export interface failedOperation extends operation {
	error: ComplexTypes.publicError;

}
/*********************************************
* runningOperation
**********************************************/
export interface runningOperation extends operation {


}
/*********************************************
* searchAnswer
**********************************************/
export interface searchAnswer extends entity {
	description: string;
	displayName: string;
	lastModifiedBy: ComplexTypes.identitySet;
	lastModifiedDateTime: any;
	webUrl: string;

}
/*********************************************
* acronym
**********************************************/
export interface acronym extends searchAnswer {
	standsFor: string;
	state: EnumTypes.answerState;

}
/*********************************************
* bookmark
**********************************************/
export interface bookmark extends searchAnswer {
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
/*********************************************
* qna
**********************************************/
export interface qna extends searchAnswer {
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
/*********************************************
* connectionOperation
**********************************************/
export interface connectionOperation extends entity {
	error: ComplexTypes.publicError;
	status: EnumTypes.connectionOperationStatus;

}
/*********************************************
* external
**********************************************/
export interface external  {

	connections(): IBaseQuery<externalConnection[]>;
	connections(id: string | number): IBaseQuery<externalConnection>;
}
/*********************************************
* externalConnection
**********************************************/
export interface externalConnection extends entity {
	activitySettings: ComplexTypes.activitySettings;
	configuration: ComplexTypes.configuration;
	connectorId: string;
	description: string;
	name: string;
	searchSettings: ComplexTypes.searchSettings;
	state: EnumTypes.connectionState;
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
export interface externalActivity extends entity {
	startDateTime: any;
	type: EnumTypes.externalActivityType;
	performedBy(): IBaseQuery<ComplexTypes.identity>;
}
/*********************************************
* identity
**********************************************/
export interface identity extends entity {
	type: EnumTypes.identityType;

}
/*********************************************
* externalActivityResult
**********************************************/
export interface externalActivityResult extends externalActivity {
	error: ComplexTypes.publicError;

}
/*********************************************
* externalGroup
**********************************************/
export interface externalGroup extends entity {
	description: string;
	displayName: string;
	members(): IBaseQuery<ComplexTypes.identity[]>;
	members(id: string | number): IBaseQuery<ComplexTypes.identity>;
}
/*********************************************
* externalItem
**********************************************/
export interface externalItem extends entity {
	acl: ComplexTypes.acl[];
	content: ComplexTypes.externalItemContent;
	properties: ComplexTypes.properties;
	activities(): IBaseQuery<externalActivity[]>;
	activities(id: string | number): IBaseQuery<externalActivity>;
}
/*********************************************
* schema
**********************************************/
export interface schema extends entity {
	baseType: string;
	properties: ComplexTypes.property[];

}
/*********************************************
* columnDefinitionCollection
**********************************************/
export interface columnDefinitionCollection  {

	add(values: any): IBaseQuery<columnDefinition>;
}
/*********************************************
* contentTypeCollection
**********************************************/
export interface contentTypeCollection  {

	add(values: any): IBaseQuery<contentType>;
}
/*********************************************
* item
**********************************************/
export interface item  {

	extractSensitivityLabel(values: any): IBaseQuery<null>;
	setSensitivityLabel(values: { actionSource?: string; assignmentMethod?: string; id: string; justificationText?: string; }): IBaseQuery<null>;
	update(values: any): IBaseQuery<null>;
}
/*********************************************
* listItemCollection
**********************************************/
export interface listItemCollection  {

	add(values: any): IBaseQuery<item>;
}
/*********************************************
* listCollection
**********************************************/
export interface listCollection  {

	add(values: any): IBaseQuery<list>;
	getById(id: string): IBaseQuery<list>;
	getByTitle(title: string): IBaseQuery<list>;
}
/*********************************************
* permissionCollection
**********************************************/
export interface permissionCollection  {

	add(values: any): IBaseQuery<permission>;
}
/*********************************************
* siteCollection
**********************************************/
export interface siteCollection  {

	add(values: any): IBaseQuery<site>;
}