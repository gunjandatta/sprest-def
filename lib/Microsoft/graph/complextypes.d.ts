import * as EnumTypes from "./enumTypes.d";
/*********************************************
* workflowExecutionTrigger
**********************************************/
export interface workflowExecutionTrigger  {

}
/*********************************************
* attributeChangeTrigger
**********************************************/
export interface attributeChangeTrigger  {
	triggerAttributes: triggerAttribute[];
}
/*********************************************
* triggerAttribute
**********************************************/
export interface triggerAttribute  {
	name: string;
}
/*********************************************
* customTaskExtensionCallbackConfiguration
**********************************************/
export interface customTaskExtensionCallbackConfiguration  {

}
/*********************************************
* customTaskExtensionCallbackData
**********************************************/
export interface customTaskExtensionCallbackData  {
	operationStatus: EnumTypes.customTaskExtensionOperationStatus;
}
/*********************************************
* customTaskExtensionCalloutData
**********************************************/
export interface customTaskExtensionCalloutData  {

}
/*********************************************
* groupBasedSubjectSet
**********************************************/
export interface groupBasedSubjectSet  {

}
/*********************************************
* membershipChangeTrigger
**********************************************/
export interface membershipChangeTrigger  {
	changeType: EnumTypes.membershipChangeType;
}
/*********************************************
* workflowExecutionConditions
**********************************************/
export interface workflowExecutionConditions  {

}
/*********************************************
* onDemandExecutionOnly
**********************************************/
export interface onDemandExecutionOnly  {

}
/*********************************************
* parameter
**********************************************/
export interface parameter  {
	name: string;
	values: Array<string>;
	valueType: EnumTypes.valueType;
}
/*********************************************
* ruleBasedSubjectSet
**********************************************/
export interface ruleBasedSubjectSet  {
	rule: string;
}
/*********************************************
* runSummary
**********************************************/
export interface runSummary  {
	failedRuns: number;
	failedTasks: number;
	successfulRuns: number;
	totalRuns: number;
	totalTasks: number;
	totalUsers: number;
}
/*********************************************
* taskReportSummary
**********************************************/
export interface taskReportSummary  {
	failedTasks: number;
	successfulTasks: number;
	totalTasks: number;
	unprocessedTasks: number;
}
/*********************************************
* timeBasedAttributeTrigger
**********************************************/
export interface timeBasedAttributeTrigger  {
	offsetInDays: number;
	timeBasedAttribute: EnumTypes.workflowTriggerTimeBasedAttribute;
}
/*********************************************
* topTasksInsightsSummary
**********************************************/
export interface topTasksInsightsSummary  {
	failedTasks: number;
	failedUsers: number;
	successfulTasks: number;
	successfulUsers: number;
	taskDefinitionDisplayName: string;
	taskDefinitionId: string;
	totalTasks: number;
	totalUsers: number;
}
/*********************************************
* topWorkflowsInsightsSummary
**********************************************/
export interface topWorkflowsInsightsSummary  {
	failedRuns: number;
	failedUsers: number;
	successfulRuns: number;
	successfulUsers: number;
	totalRuns: number;
	totalUsers: number;
	workflowCategory: EnumTypes.lifecycleWorkflowCategory;
	workflowDisplayName: string;
	workflowId: string;
	workflowVersion: number;
}
/*********************************************
* triggerAndScopeBasedConditions
**********************************************/
export interface triggerAndScopeBasedConditions  {
	scope: subjectSet;
	trigger: workflowExecutionTrigger;
}
/*********************************************
* usersProcessingSummary
**********************************************/
export interface usersProcessingSummary  {
	failedTasks: number;
	failedUsers: number;
	successfulUsers: number;
	totalTasks: number;
	totalUsers: number;
}
/*********************************************
* userSummary
**********************************************/
export interface userSummary  {
	failedTasks: number;
	failedUsers: number;
	successfulUsers: number;
	totalTasks: number;
	totalUsers: number;
}
/*********************************************
* workflowsInsightsByCategory
**********************************************/
export interface workflowsInsightsByCategory  {
	failedJoinerRuns: number;
	failedLeaverRuns: number;
	failedMoverRuns: number;
	successfulJoinerRuns: number;
	successfulLeaverRuns: number;
	successfulMoverRuns: number;
	totalJoinerRuns: number;
	totalLeaverRuns: number;
	totalMoverRuns: number;
}
/*********************************************
* workflowsInsightsSummary
**********************************************/
export interface workflowsInsightsSummary  {
	failedRuns: number;
	failedTasks: number;
	failedUsers: number;
	successfulRuns: number;
	successfulTasks: number;
	successfulUsers: number;
	totalRuns: number;
	totalTasks: number;
	totalUsers: number;
}
/*********************************************
* customExtensionAuthenticationConfiguration
**********************************************/
export interface customExtensionAuthenticationConfiguration  {

}
/*********************************************
* azureAdPopTokenAuthentication
**********************************************/
export interface azureAdPopTokenAuthentication  {

}
/*********************************************
* customExtensionCallbackConfiguration
**********************************************/
export interface customExtensionCallbackConfiguration  {
	timeoutDuration: number;
}
/*********************************************
* customExtensionCalloutRequest
**********************************************/
export interface customExtensionCalloutRequest  {
	data: customExtensionData;
	source: string;
	type: string;
}
/*********************************************
* customExtensionData
**********************************************/
export interface customExtensionData  {

}
/*********************************************
* customExtensionCalloutResponse
**********************************************/
export interface customExtensionCalloutResponse  {
	data: customExtensionData;
	source: string;
	type: string;
}
/*********************************************
* customExtensionClientConfiguration
**********************************************/
export interface customExtensionClientConfiguration  {
	maximumRetries: number;
	timeoutInMilliseconds: number;
}
/*********************************************
* customExtensionEndpointConfiguration
**********************************************/
export interface customExtensionEndpointConfiguration  {

}
/*********************************************
* emailSettings
**********************************************/
export interface emailSettings  {
	senderDomain: string;
	useCompanyBranding: boolean;
}
/*********************************************
* identity
**********************************************/
export interface identity  {
	displayName: string;
	id: string;
}
/*********************************************
* keyValuePair
**********************************************/
export interface keyValuePair  {
	name: string;
	value: string;
}
/*********************************************
* logicAppTriggerEndpointConfiguration
**********************************************/
export interface logicAppTriggerEndpointConfiguration  {
	logicAppWorkflowName: string;
	resourceGroupName: string;
	subscriptionId: string;
	url: string;
}
/*********************************************
* subjectSet
**********************************************/
export interface subjectSet  {

}
/*********************************************
* addIn
**********************************************/
export interface addIn  {
	id: any;
	properties: keyValue[];
	type: string;
}
/*********************************************
* apiApplication
**********************************************/
export interface apiApplication  {
	acceptMappedClaims: boolean;
	knownClientApplications: Array<any>;
	oauth2PermissionScopes: permissionScope[];
	preAuthorizedApplications: preAuthorizedApplication[];
	requestedAccessTokenVersion: number;
}
/*********************************************
* appRole
**********************************************/
export interface appRole  {
	allowedMemberTypes: Array<string>;
	description: string;
	displayName: string;
	id: any;
	isEnabled: boolean;
	origin: string;
	value: string;
}
/*********************************************
* certification
**********************************************/
export interface certification  {
	certificationDetailsUrl: string;
	certificationExpirationDateTime: any;
	isCertifiedByMicrosoft: boolean;
	isPublisherAttested: boolean;
	lastCertificationDateTime: any;
}
/*********************************************
* informationalUrl
**********************************************/
export interface informationalUrl  {
	logoUrl: string;
	marketingUrl: string;
	privacyStatementUrl: string;
	supportUrl: string;
	termsOfServiceUrl: string;
}
/*********************************************
* keyCredential
**********************************************/
export interface keyCredential  {
	customKeyIdentifier: any;
	displayName: string;
	endDateTime: any;
	key: any;
	keyId: any;
	startDateTime: any;
	type: string;
	usage: string;
}
/*********************************************
* optionalClaims
**********************************************/
export interface optionalClaims  {
	accessToken: optionalClaim[];
	idToken: optionalClaim[];
	saml2Token: optionalClaim[];
}
/*********************************************
* parentalControlSettings
**********************************************/
export interface parentalControlSettings  {
	countriesBlockedForMinors: Array<string>;
	legalAgeGroupRule: string;
}
/*********************************************
* passwordCredential
**********************************************/
export interface passwordCredential  {
	customKeyIdentifier: any;
	displayName: string;
	endDateTime: any;
	hint: string;
	keyId: any;
	secretText: string;
	startDateTime: any;
}
/*********************************************
* publicClientApplication
**********************************************/
export interface publicClientApplication  {
	redirectUris: Array<string>;
}
/*********************************************
* requestSignatureVerification
**********************************************/
export interface requestSignatureVerification  {
	allowedWeakAlgorithms: EnumTypes.weakAlgorithms;
	isSignedRequestRequired: boolean;
}
/*********************************************
* requiredResourceAccess
**********************************************/
export interface requiredResourceAccess  {
	resourceAccess: resourceAccess[];
	resourceAppId: string;
}
/*********************************************
* servicePrincipalLockConfiguration
**********************************************/
export interface servicePrincipalLockConfiguration  {
	allProperties: boolean;
	credentialsWithUsageSign: boolean;
	credentialsWithUsageVerify: boolean;
	isEnabled: boolean;
	tokenEncryptionKeyId: boolean;
}
/*********************************************
* spaApplication
**********************************************/
export interface spaApplication  {
	redirectUris: Array<string>;
}
/*********************************************
* verifiedPublisher
**********************************************/
export interface verifiedPublisher  {
	addedDateTime: any;
	displayName: string;
	verifiedPublisherId: string;
}
/*********************************************
* webApplication
**********************************************/
export interface webApplication  {
	homePageUrl: string;
	implicitGrantSettings: implicitGrantSettings;
	logoutUrl: string;
	redirectUris: Array<string>;
	redirectUriSettings: redirectUriSettings[];
}
/*********************************************
* assignedLabel
**********************************************/
export interface assignedLabel  {
	displayName: string;
	labelId: string;
}
/*********************************************
* assignedLicense
**********************************************/
export interface assignedLicense  {
	disabledPlans: Array<any>;
	skuId: any;
}
/*********************************************
* licenseProcessingState
**********************************************/
export interface licenseProcessingState  {
	state: string;
}
/*********************************************
* onPremisesProvisioningError
**********************************************/
export interface onPremisesProvisioningError  {
	category: string;
	occurredDateTime: any;
	propertyCausingError: string;
	value: string;
}
/*********************************************
* serviceProvisioningError
**********************************************/
export interface serviceProvisioningError  {
	createdDateTime: any;
	isResolved: boolean;
	serviceInstance: string;
}
/*********************************************
* signInActivity
**********************************************/
export interface signInActivity  {
	lastNonInteractiveSignInDateTime: any;
	lastNonInteractiveSignInRequestId: string;
	lastSignInDateTime: any;
	lastSignInRequestId: string;
	lastSuccessfulSignInDateTime: any;
	lastSuccessfulSignInRequestId: string;
}
/*********************************************
* assignedPlan
**********************************************/
export interface assignedPlan  {
	assignedDateTime: any;
	capabilityStatus: string;
	service: string;
	servicePlanId: any;
}
/*********************************************
* authorizationInfo
**********************************************/
export interface authorizationInfo  {
	certificateUserIds: Array<string>;
}
/*********************************************
* customSecurityAttributeValue
**********************************************/
export interface customSecurityAttributeValue  {

}
/*********************************************
* employeeOrgData
**********************************************/
export interface employeeOrgData  {
	costCenter: string;
	division: string;
}
/*********************************************
* objectIdentity
**********************************************/
export interface objectIdentity  {
	issuer: string;
	issuerAssignedId: string;
	signInType: string;
}
/*********************************************
* licenseAssignmentState
**********************************************/
export interface licenseAssignmentState  {
	assignedByGroup: string;
	disabledPlans: Array<any>;
	error: string;
	lastUpdatedDateTime: any;
	skuId: any;
	state: string;
}
/*********************************************
* onPremisesExtensionAttributes
**********************************************/
export interface onPremisesExtensionAttributes  {
	extensionAttribute1: string;
	extensionAttribute10: string;
	extensionAttribute11: string;
	extensionAttribute12: string;
	extensionAttribute13: string;
	extensionAttribute14: string;
	extensionAttribute15: string;
	extensionAttribute2: string;
	extensionAttribute3: string;
	extensionAttribute4: string;
	extensionAttribute5: string;
	extensionAttribute6: string;
	extensionAttribute7: string;
	extensionAttribute8: string;
	extensionAttribute9: string;
}
/*********************************************
* passwordProfile
**********************************************/
export interface passwordProfile  {
	forceChangePasswordNextSignIn: boolean;
	forceChangePasswordNextSignInWithMfa: boolean;
	password: string;
}
/*********************************************
* provisionedPlan
**********************************************/
export interface provisionedPlan  {
	capabilityStatus: string;
	provisioningStatus: string;
	service: string;
}
/*********************************************
* mailboxSettings
**********************************************/
export interface mailboxSettings  {
	archiveFolder: string;
	automaticRepliesSetting: automaticRepliesSetting;
	dateFormat: string;
	delegateMeetingMessageDeliveryOptions: EnumTypes.delegateMeetingMessageDeliveryOptions;
	language: localeInfo;
	timeFormat: string;
	timeZone: string;
	userPurpose: EnumTypes.userPurpose;
	workingHours: workingHours;
}
/*********************************************
* userPrint
**********************************************/
export interface userPrint  {

}
/*********************************************
* appIdentity
**********************************************/
export interface appIdentity  {
	appId: string;
	displayName: string;
	servicePrincipalId: string;
	servicePrincipalName: string;
}
/*********************************************
* appliedConditionalAccessPolicy
**********************************************/
export interface appliedConditionalAccessPolicy  {
	displayName: string;
	enforcedGrantControls: Array<string>;
	enforcedSessionControls: Array<string>;
	id: string;
	result: EnumTypes.appliedConditionalAccessPolicyResult;
}
/*********************************************
* auditActivityInitiator
**********************************************/
export interface auditActivityInitiator  {
	app: appIdentity;
	user: userIdentity;
}
/*********************************************
* userIdentity
**********************************************/
export interface userIdentity  {
	userPrincipalName: string;
}
/*********************************************
* detailsInfo
**********************************************/
export interface detailsInfo  {

}
/*********************************************
* deviceDetail
**********************************************/
export interface deviceDetail  {
	browser: string;
	deviceId: string;
	displayName: string;
	isCompliant: boolean;
	isManaged: boolean;
	operatingSystem: string;
	trustType: string;
}
/*********************************************
* geoCoordinates
**********************************************/
export interface geoCoordinates  {
	altitude: number;
	latitude: number;
	longitude: number;
}
/*********************************************
* initiator
**********************************************/
export interface initiator  {
	initiatorType: EnumTypes.initiatorType;
}
/*********************************************
* keyValue
**********************************************/
export interface keyValue  {
	key: string;
	value: string;
}
/*********************************************
* modifiedProperty
**********************************************/
export interface modifiedProperty  {
	displayName: string;
	newValue: string;
	oldValue: string;
}
/*********************************************
* provisionedIdentity
**********************************************/
export interface provisionedIdentity  {
	details: detailsInfo;
	identityType: string;
}
/*********************************************
* provisioningErrorInfo
**********************************************/
export interface provisioningErrorInfo  {
	additionalDetails: string;
	errorCategory: EnumTypes.provisioningStatusErrorCategory;
	errorCode: string;
	reason: string;
	recommendedAction: string;
}
/*********************************************
* provisioningServicePrincipal
**********************************************/
export interface provisioningServicePrincipal  {

}
/*********************************************
* provisioningStatusInfo
**********************************************/
export interface provisioningStatusInfo  {
	errorInformation: provisioningErrorInfo;
	status: EnumTypes.provisioningResult;
}
/*********************************************
* provisioningStep
**********************************************/
export interface provisioningStep  {
	description: string;
	details: detailsInfo;
	name: string;
	provisioningStepType: EnumTypes.provisioningStepType;
	status: EnumTypes.provisioningResult;
}
/*********************************************
* provisioningSystem
**********************************************/
export interface provisioningSystem  {
	details: detailsInfo;
}
/*********************************************
* signInLocation
**********************************************/
export interface signInLocation  {
	city: string;
	countryOrRegion: string;
	geoCoordinates: geoCoordinates;
	state: string;
}
/*********************************************
* signInStatus
**********************************************/
export interface signInStatus  {
	additionalDetails: string;
	errorCode: number;
	failureReason: string;
}
/*********************************************
* targetResource
**********************************************/
export interface targetResource  {
	displayName: string;
	groupType: EnumTypes.groupType;
	id: string;
	modifiedProperties: modifiedProperty[];
	type: string;
	userPrincipalName: string;
}
/*********************************************
* userRegistrationFeatureCount
**********************************************/
export interface userRegistrationFeatureCount  {
	feature: EnumTypes.authenticationMethodFeature;
	userCount: number;
}
/*********************************************
* userRegistrationFeatureSummary
**********************************************/
export interface userRegistrationFeatureSummary  {
	totalUserCount: number;
	userRegistrationFeatureCounts: userRegistrationFeatureCount[];
	userRoles: EnumTypes.includedUserRoles;
	userTypes: EnumTypes.includedUserTypes;
}
/*********************************************
* userRegistrationMethodCount
**********************************************/
export interface userRegistrationMethodCount  {
	authenticationMethod: string;
	userCount: number;
}
/*********************************************
* userRegistrationMethodSummary
**********************************************/
export interface userRegistrationMethodSummary  {
	totalUserCount: number;
	userRegistrationMethodCounts: userRegistrationMethodCount[];
	userRoles: EnumTypes.includedUserRoles;
	userTypes: EnumTypes.includedUserTypes;
}
/*********************************************
* emailAddress
**********************************************/
export interface emailAddress  {
	address: string;
	name: string;
}
/*********************************************
* invitedUserMessageInfo
**********************************************/
export interface invitedUserMessageInfo  {
	ccRecipients: recipient[];
	customizedMessageBody: string;
	messageLanguage: string;
}
/*********************************************
* recipient
**********************************************/
export interface recipient  {
	emailAddress: emailAddress;
}
/*********************************************
* applicationServicePrincipal
**********************************************/
export interface applicationServicePrincipal  {

}
/*********************************************
* permissionScope
**********************************************/
export interface permissionScope  {
	adminConsentDescription: string;
	adminConsentDisplayName: string;
	id: any;
	isEnabled: boolean;
	origin: string;
	type: string;
	userConsentDescription: string;
	userConsentDisplayName: string;
	value: string;
}
/*********************************************
* resourceSpecificPermission
**********************************************/
export interface resourceSpecificPermission  {
	description: string;
	displayName: string;
	id: any;
	isEnabled: boolean;
	value: string;
}
/*********************************************
* samlSingleSignOnSettings
**********************************************/
export interface samlSingleSignOnSettings  {
	relayState: string;
}
/*********************************************
* authenticationMethodFeatureConfiguration
**********************************************/
export interface authenticationMethodFeatureConfiguration  {
	excludeTarget: featureTarget;
	includeTarget: featureTarget;
	state: EnumTypes.advancedConfigState;
}
/*********************************************
* featureTarget
**********************************************/
export interface featureTarget  {
	id: string;
	targetType: EnumTypes.featureTargetType;
}
/*********************************************
* authenticationMethodsRegistrationCampaign
**********************************************/
export interface authenticationMethodsRegistrationCampaign  {
	excludeTargets: excludeTarget[];
	includeTargets: authenticationMethodsRegistrationCampaignIncludeTarget[];
	snoozeDurationInDays: number;
	state: EnumTypes.advancedConfigState;
}
/*********************************************
* excludeTarget
**********************************************/
export interface excludeTarget  {
	id: string;
	targetType: EnumTypes.authenticationMethodTargetType;
}
/*********************************************
* authenticationMethodsRegistrationCampaignIncludeTarget
**********************************************/
export interface authenticationMethodsRegistrationCampaignIncludeTarget  {
	id: string;
	targetedAuthenticationMethod: string;
	targetType: EnumTypes.authenticationMethodTargetType;
}
/*********************************************
* fido2KeyRestrictions
**********************************************/
export interface fido2KeyRestrictions  {
	aaGuids: Array<string>;
	enforcementType: EnumTypes.fido2RestrictionEnforcementType;
	isEnforced: boolean;
}
/*********************************************
* microsoftAuthenticatorFeatureSettings
**********************************************/
export interface microsoftAuthenticatorFeatureSettings  {
	displayAppInformationRequiredState: authenticationMethodFeatureConfiguration;
	displayLocationInformationRequiredState: authenticationMethodFeatureConfiguration;
}
/*********************************************
* registrationEnforcement
**********************************************/
export interface registrationEnforcement  {
	authenticationMethodsRegistrationCampaign: authenticationMethodsRegistrationCampaign;
}
/*********************************************
* updateAllowedCombinationsResult
**********************************************/
export interface updateAllowedCombinationsResult  {
	additionalInformation: string;
	conditionalAccessReferences: Array<string>;
	currentCombinations: EnumTypes.authenticationMethodModes[];
	previousCombinations: EnumTypes.authenticationMethodModes[];
}
/*********************************************
* x509CertificateAuthenticationModeConfiguration
**********************************************/
export interface x509CertificateAuthenticationModeConfiguration  {
	rules: x509CertificateRule[];
	x509CertificateAuthenticationDefaultMode: EnumTypes.x509CertificateAuthenticationMode;
	x509CertificateDefaultRequiredAffinityLevel: EnumTypes.x509CertificateAffinityLevel;
}
/*********************************************
* x509CertificateRule
**********************************************/
export interface x509CertificateRule  {
	identifier: string;
	issuerSubjectIdentifier: string;
	policyOidIdentifier: string;
	x509CertificateAuthenticationMode: EnumTypes.x509CertificateAuthenticationMode;
	x509CertificateRequiredAffinityLevel: EnumTypes.x509CertificateAffinityLevel;
	x509CertificateRuleType: EnumTypes.x509CertificateRuleType;
}
/*********************************************
* x509CertificateUserBinding
**********************************************/
export interface x509CertificateUserBinding  {
	priority: number;
	trustAffinityLevel: EnumTypes.x509CertificateAffinityLevel;
	userProperty: string;
	x509CertificateField: string;
}
/*********************************************
* availabilityItem
**********************************************/
export interface availabilityItem  {
	endDateTime: dateTimeTimeZone;
	serviceId: string;
	startDateTime: dateTimeTimeZone;
	status: EnumTypes.bookingsAvailabilityStatus;
}
/*********************************************
* dateTimeTimeZone
**********************************************/
export interface dateTimeTimeZone  {
	dateTime: string;
	timeZone: string;
}
/*********************************************
* bookingCustomerInformationBase
**********************************************/
export interface bookingCustomerInformationBase  {

}
/*********************************************
* bookingCustomerInformation
**********************************************/
export interface bookingCustomerInformation  {
	customerId: string;
	customQuestionAnswers: bookingQuestionAnswer[];
	emailAddress: string;
	location: location;
	name: string;
	notes: string;
	phone: string;
	timeZone: string;
}
/*********************************************
* bookingQuestionAnswer
**********************************************/
export interface bookingQuestionAnswer  {
	answer: string;
	answerInputType: EnumTypes.answerInputType;
	answerOptions: Array<string>;
	isRequired: boolean;
	question: string;
	questionId: string;
	selectedOptions: Array<string>;
}
/*********************************************
* location
**********************************************/
export interface location  {
	address: physicalAddress;
	coordinates: outlookGeoCoordinates;
	displayName: string;
	locationEmailAddress: string;
	locationType: EnumTypes.locationType;
	locationUri: string;
	uniqueId: string;
	uniqueIdType: EnumTypes.locationUniqueIdType;
}
/*********************************************
* bookingPageSettings
**********************************************/
export interface bookingPageSettings  {
	accessControl: EnumTypes.bookingPageAccessControl;
	bookingPageColorCode: string;
	businessTimeZone: string;
	customerConsentMessage: string;
	enforceOneTimePassword: boolean;
	isBusinessLogoDisplayEnabled: boolean;
	isCustomerConsentEnabled: boolean;
	isSearchEngineIndexabilityDisabled: boolean;
	isTimeSlotTimeZoneSetToBusinessTimeZone: boolean;
	privacyPolicyWebUrl: string;
	termsAndConditionsWebUrl: string;
}
/*********************************************
* bookingQuestionAssignment
**********************************************/
export interface bookingQuestionAssignment  {
	isRequired: boolean;
	questionId: string;
}
/*********************************************
* bookingReminder
**********************************************/
export interface bookingReminder  {
	message: string;
	offset: number;
	recipients: EnumTypes.bookingReminderRecipients;
}
/*********************************************
* bookingsAvailability
**********************************************/
export interface bookingsAvailability  {
	availabilityType: EnumTypes.bookingsServiceAvailabilityType;
	businessHours: bookingWorkHours[];
}
/*********************************************
* bookingWorkHours
**********************************************/
export interface bookingWorkHours  {
	day: EnumTypes.dayOfWeek;
	timeSlots: bookingWorkTimeSlot[];
}
/*********************************************
* bookingsAvailabilityWindow
**********************************************/
export interface bookingsAvailabilityWindow  {
	endDate: any;
	startDate: any;
}
/*********************************************
* bookingSchedulingPolicy
**********************************************/
export interface bookingSchedulingPolicy  {
	allowStaffSelection: boolean;
	customAvailabilities: bookingsAvailabilityWindow[];
	generalAvailability: bookingsAvailability;
	isMeetingInviteToCustomersEnabled: boolean;
	maximumAdvance: number;
	minimumLeadTime: number;
	sendConfirmationsToOwner: boolean;
	timeSlotInterval: number;
}
/*********************************************
* bookingWorkTimeSlot
**********************************************/
export interface bookingWorkTimeSlot  {
	endTime: any;
	startTime: any;
}
/*********************************************
* physicalAddress
**********************************************/
export interface physicalAddress  {
	city: string;
	countryOrRegion: string;
	postalCode: string;
	state: string;
	street: string;
}
/*********************************************
* outlookGeoCoordinates
**********************************************/
export interface outlookGeoCoordinates  {
	accuracy: number;
	altitude: number;
	altitudeAccuracy: number;
	latitude: number;
	longitude: number;
}
/*********************************************
* phone
**********************************************/
export interface phone  {
	language: string;
	number: string;
	region: string;
	type: EnumTypes.phoneType;
}
/*********************************************
* staffAvailabilityItem
**********************************************/
export interface staffAvailabilityItem  {
	availabilityItems: availabilityItem[];
	staffId: string;
}
/*********************************************
* timeSlot
**********************************************/
export interface timeSlot  {
	end: dateTimeTimeZone;
	start: dateTimeTimeZone;
}
/*********************************************
* cloudPcAuditActor
**********************************************/
export interface cloudPcAuditActor  {
	applicationDisplayName: string;
	applicationId: string;
	ipAddress: string;
	remoteTenantId: string;
	remoteUserId: string;
	servicePrincipalName: string;
	userId: string;
	userPermissions: Array<string>;
	userPrincipalName: string;
	userRoleScopeTags: cloudPcUserRoleScopeTagInfo[];
}
/*********************************************
* cloudPcUserRoleScopeTagInfo
**********************************************/
export interface cloudPcUserRoleScopeTagInfo  {
	displayName: string;
	roleScopeTagId: string;
}
/*********************************************
* cloudPcAuditProperty
**********************************************/
export interface cloudPcAuditProperty  {
	displayName: string;
	newValue: string;
	oldValue: string;
}
/*********************************************
* cloudPcAuditResource
**********************************************/
export interface cloudPcAuditResource  {
	displayName: string;
	modifiedProperties: cloudPcAuditProperty[];
	resourceId: string;
}
/*********************************************
* cloudPcDomainJoinConfiguration
**********************************************/
export interface cloudPcDomainJoinConfiguration  {
	domainJoinType: EnumTypes.cloudPcDomainJoinType;
	onPremisesConnectionId: string;
	regionGroup: EnumTypes.cloudPcRegionGroup;
	regionName: string;
}
/*********************************************
* cloudPcManagementAssignmentTarget
**********************************************/
export interface cloudPcManagementAssignmentTarget  {

}
/*********************************************
* cloudPcManagementGroupAssignmentTarget
**********************************************/
export interface cloudPcManagementGroupAssignmentTarget  {
	groupId: string;
	servicePlanId: string;
}
/*********************************************
* cloudPcOnPremisesConnectionHealthCheck
**********************************************/
export interface cloudPcOnPremisesConnectionHealthCheck  {
	additionalDetail: string;
	correlationId: string;
	displayName: string;
	endDateTime: any;
	errorType: EnumTypes.cloudPcOnPremisesConnectionHealthCheckErrorType;
	recommendedAction: string;
	startDateTime: any;
	status: EnumTypes.cloudPcOnPremisesConnectionStatus;
}
/*********************************************
* cloudPcOnPremisesConnectionStatusDetail
**********************************************/
export interface cloudPcOnPremisesConnectionStatusDetail  {
	endDateTime: any;
	healthChecks: cloudPcOnPremisesConnectionHealthCheck[];
	startDateTime: any;
}
/*********************************************
* cloudPcRestorePointSetting
**********************************************/
export interface cloudPcRestorePointSetting  {
	frequencyType: EnumTypes.cloudPcRestorePointFrequencyType;
	userRestoreEnabled: boolean;
}
/*********************************************
* cloudPcSourceDeviceImage
**********************************************/
export interface cloudPcSourceDeviceImage  {
	displayName: string;
	resourceId: string;
	subscriptionDisplayName: string;
	subscriptionId: string;
}
/*********************************************
* cloudPcWindowsSetting
**********************************************/
export interface cloudPcWindowsSetting  {
	locale: string;
}
/*********************************************
* microsoftManagedDesktop
**********************************************/
export interface microsoftManagedDesktop  {
	managedType: EnumTypes.microsoftManagedDesktopType;
	profile: string;
}
/*********************************************
* deviceManagementSettings
**********************************************/
export interface deviceManagementSettings  {
	deviceComplianceCheckinThresholdDays: number;
	isScheduledActionEnabled: boolean;
	secureByDefault: boolean;
}
/*********************************************
* intuneBrand
**********************************************/
export interface intuneBrand  {
	contactITEmailAddress: string;
	contactITName: string;
	contactITNotes: string;
	contactITPhoneNumber: string;
	darkBackgroundLogo: mimeContent;
	displayName: string;
	lightBackgroundLogo: mimeContent;
	onlineSupportSiteName: string;
	onlineSupportSiteUrl: string;
	privacyUrl: string;
	showDisplayNameNextToLogo: boolean;
	showLogo: boolean;
	showNameNextToLogo: boolean;
	themeColor: rgbColor;
}
/*********************************************
* deviceProtectionOverview
**********************************************/
export interface deviceProtectionOverview  {
	cleanDeviceCount: number;
	criticalFailuresDeviceCount: number;
	inactiveThreatAgentDeviceCount: number;
	pendingFullScanDeviceCount: number;
	pendingManualStepsDeviceCount: number;
	pendingOfflineScanDeviceCount: number;
	pendingQuickScanDeviceCount: number;
	pendingRestartDeviceCount: number;
	pendingSignatureUpdateDeviceCount: number;
	totalReportedDeviceCount: number;
	unknownStateThreatAgentDeviceCount: number;
}
/*********************************************
* userExperienceAnalyticsSettings
**********************************************/
export interface userExperienceAnalyticsSettings  {
	configurationManagerDataConnectorConfigured: boolean;
}
/*********************************************
* windowsMalwareOverview
**********************************************/
export interface windowsMalwareOverview  {
	malwareCategorySummary: windowsMalwareCategoryCount[];
	malwareDetectedDeviceCount: number;
	malwareExecutionStateSummary: windowsMalwareExecutionStateCount[];
	malwareNameSummary: windowsMalwareNameCount[];
	malwareSeveritySummary: windowsMalwareSeverityCount[];
	malwareStateSummary: windowsMalwareStateCount[];
	osVersionsSummary: osVersionCount[];
	totalDistinctMalwareCount: number;
	totalMalwareCount: number;
}
/*********************************************
* dataSubject
**********************************************/
export interface dataSubject  {
	email: string;
	firstName: string;
	lastName: string;
	residency: string;
}
/*********************************************
* identitySet
**********************************************/
export interface identitySet  {
	application: identity;
	device: identity;
	user: identity;
}
/*********************************************
* itemBody
**********************************************/
export interface itemBody  {
	content: string;
	contentType: EnumTypes.bodyType;
}
/*********************************************
* publicError
**********************************************/
export interface publicError  {
	code: string;
	details: publicErrorDetail[];
	innerError: publicInnerError;
	message: string;
	target: string;
}
/*********************************************
* publicErrorDetail
**********************************************/
export interface publicErrorDetail  {
	code: string;
	message: string;
	target: string;
}
/*********************************************
* publicInnerError
**********************************************/
export interface publicInnerError  {
	code: string;
	details: publicErrorDetail[];
	message: string;
	target: string;
}
/*********************************************
* subjectRightsRequestMailboxLocation
**********************************************/
export interface subjectRightsRequestMailboxLocation  {

}
/*********************************************
* subjectRightsRequestAllMailboxLocation
**********************************************/
export interface subjectRightsRequestAllMailboxLocation  {

}
/*********************************************
* subjectRightsRequestSiteLocation
**********************************************/
export interface subjectRightsRequestSiteLocation  {

}
/*********************************************
* subjectRightsRequestAllSiteLocation
**********************************************/
export interface subjectRightsRequestAllSiteLocation  {

}
/*********************************************
* subjectRightsRequestDetail
**********************************************/
export interface subjectRightsRequestDetail  {
	excludedItemCount: number;
	insightCounts: keyValuePair[];
	itemCount: number;
	itemNeedReview: number;
	productItemCounts: keyValuePair[];
	signedOffItemCount: number;
	totalItemSize: number;
}
/*********************************************
* subjectRightsRequestEnumeratedMailboxLocation
**********************************************/
export interface subjectRightsRequestEnumeratedMailboxLocation  {
	userPrincipalNames: Array<string>;
}
/*********************************************
* subjectRightsRequestEnumeratedSiteLocation
**********************************************/
export interface subjectRightsRequestEnumeratedSiteLocation  {
	urls: Array<string>;
}
/*********************************************
* subjectRightsRequestHistory
**********************************************/
export interface subjectRightsRequestHistory  {
	changedBy: identitySet;
	eventDateTime: any;
	stage: EnumTypes.subjectRightsRequestStage;
	stageStatus: EnumTypes.subjectRightsRequestStageStatus;
	type: string;
}
/*********************************************
* subjectRightsRequestStageDetail
**********************************************/
export interface subjectRightsRequestStageDetail  {
	error: publicError;
	stage: EnumTypes.subjectRightsRequestStage;
	status: EnumTypes.subjectRightsRequestStageStatus;
}
/*********************************************
* teamFunSettings
**********************************************/
export interface teamFunSettings  {
	allowCustomMemes: boolean;
	allowGiphy: boolean;
	allowStickersAndMemes: boolean;
	giphyContentRating: EnumTypes.giphyRatingType;
}
/*********************************************
* teamGuestSettings
**********************************************/
export interface teamGuestSettings  {
	allowCreateUpdateChannels: boolean;
	allowDeleteChannels: boolean;
}
/*********************************************
* teamMemberSettings
**********************************************/
export interface teamMemberSettings  {
	allowAddRemoveApps: boolean;
	allowCreatePrivateChannels: boolean;
	allowCreateUpdateChannels: boolean;
	allowCreateUpdateRemoveConnectors: boolean;
	allowCreateUpdateRemoveTabs: boolean;
	allowDeleteChannels: boolean;
}
/*********************************************
* teamMessagingSettings
**********************************************/
export interface teamMessagingSettings  {
	allowChannelMentions: boolean;
	allowOwnerDeleteMessages: boolean;
	allowTeamMentions: boolean;
	allowUserDeleteMessages: boolean;
	allowUserEditMessages: boolean;
}
/*********************************************
* teamSummary
**********************************************/
export interface teamSummary  {
	guestsCount: number;
	membersCount: number;
	ownersCount: number;
}
/*********************************************
* resultInfo
**********************************************/
export interface resultInfo  {
	code: number;
	message: string;
	subcode: number;
}
/*********************************************
* root
**********************************************/
export interface root  {

}
/*********************************************
* sharepointIds
**********************************************/
export interface sharepointIds  {
	listId: string;
	listItemId: string;
	listItemUniqueId: string;
	siteId: string;
	siteUrl: string;
	tenantId: string;
	webId: string;
}
/*********************************************
* siteCollection
**********************************************/
export interface siteCollection  {
	archivalDetails: siteArchivalDetails;
	dataLocationCode: string;
	hostname: string;
	root: root;
}
/*********************************************
* apiAuthenticationConfigurationBase
**********************************************/
export interface apiAuthenticationConfigurationBase  {

}
/*********************************************
* assignmentOrder
**********************************************/
export interface assignmentOrder  {
	order: Array<string>;
}
/*********************************************
* authenticationAttributeCollectionInputConfiguration
**********************************************/
export interface authenticationAttributeCollectionInputConfiguration  {
	attribute: string;
	defaultValue: string;
	editable: boolean;
	hidden: boolean;
	inputType: EnumTypes.authenticationAttributeCollectionInputType;
	label: string;
	options: authenticationAttributeCollectionOptionConfiguration[];
	required: boolean;
	validationRegEx: string;
	writeToDirectory: boolean;
}
/*********************************************
* authenticationAttributeCollectionOptionConfiguration
**********************************************/
export interface authenticationAttributeCollectionOptionConfiguration  {
	label: string;
	value: string;
}
/*********************************************
* authenticationAttributeCollectionPage
**********************************************/
export interface authenticationAttributeCollectionPage  {
	views: authenticationAttributeCollectionPageViewConfiguration[];
}
/*********************************************
* authenticationAttributeCollectionPageViewConfiguration
**********************************************/
export interface authenticationAttributeCollectionPageViewConfiguration  {
	description: string;
	inputs: authenticationAttributeCollectionInputConfiguration[];
	title: string;
}
/*********************************************
* authenticationConditions
**********************************************/
export interface authenticationConditions  {
	applications: authenticationConditionsApplications;
}
/*********************************************
* authenticationConditionsApplications
**********************************************/
export interface authenticationConditionsApplications  {

}
/*********************************************
* authenticationConfigurationValidation
**********************************************/
export interface authenticationConfigurationValidation  {
	errors: genericError[];
	warnings: genericError[];
}
/*********************************************
* genericError
**********************************************/
export interface genericError  {
	code: string;
	message: string;
}
/*********************************************
* azureAdTokenAuthentication
**********************************************/
export interface azureAdTokenAuthentication  {
	resourceId: string;
}
/*********************************************
* basicAuthentication
**********************************************/
export interface basicAuthentication  {
	password: string;
	username: string;
}
/*********************************************
* clientCertificateAuthentication
**********************************************/
export interface clientCertificateAuthentication  {
	certificateList: pkcs12CertificateInformation[];
}
/*********************************************
* pkcs12CertificateInformation
**********************************************/
export interface pkcs12CertificateInformation  {
	isActive: boolean;
	notAfter: number;
	notBefore: number;
	thumbprint: string;
}
/*********************************************
* customExtensionOverwriteConfiguration
**********************************************/
export interface customExtensionOverwriteConfiguration  {
	clientConfiguration: customExtensionClientConfiguration;
}
/*********************************************
* httpRequestEndpoint
**********************************************/
export interface httpRequestEndpoint  {
	targetUrl: string;
}
/*********************************************
* onAttributeCollectionHandler
**********************************************/
export interface onAttributeCollectionHandler  {

}
/*********************************************
* onAttributeCollectionExternalUsersSelfServiceSignUp
**********************************************/
export interface onAttributeCollectionExternalUsersSelfServiceSignUp  {
	attributeCollectionPage: authenticationAttributeCollectionPage;
}
/*********************************************
* onAuthenticationMethodLoadStartHandler
**********************************************/
export interface onAuthenticationMethodLoadStartHandler  {

}
/*********************************************
* onAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp
**********************************************/
export interface onAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp  {

}
/*********************************************
* onInteractiveAuthFlowStartHandler
**********************************************/
export interface onInteractiveAuthFlowStartHandler  {

}
/*********************************************
* onInteractiveAuthFlowStartExternalUsersSelfServiceSignUp
**********************************************/
export interface onInteractiveAuthFlowStartExternalUsersSelfServiceSignUp  {
	isSignUpAllowed: boolean;
}
/*********************************************
* onTokenIssuanceStartHandler
**********************************************/
export interface onTokenIssuanceStartHandler  {

}
/*********************************************
* onTokenIssuanceStartCustomExtensionHandler
**********************************************/
export interface onTokenIssuanceStartCustomExtensionHandler  {
	configuration: customExtensionOverwriteConfiguration;
}
/*********************************************
* onTokenIssuanceStartReturnClaim
**********************************************/
export interface onTokenIssuanceStartReturnClaim  {
	claimIdInApiResponse: string;
}
/*********************************************
* onUserCreateStartHandler
**********************************************/
export interface onUserCreateStartHandler  {

}
/*********************************************
* onUserCreateStartExternalUsersSelfServiceSignUp
**********************************************/
export interface onUserCreateStartExternalUsersSelfServiceSignUp  {
	userTypeToCreate: EnumTypes.userType;
}
/*********************************************
* pkcs12Certificate
**********************************************/
export interface pkcs12Certificate  {
	password: string;
	pkcs12Value: string;
}
/*********************************************
* selfServiceSignUpAuthenticationFlowConfiguration
**********************************************/
export interface selfServiceSignUpAuthenticationFlowConfiguration  {
	isEnabled: boolean;
}
/*********************************************
* userAttributeValuesItem
**********************************************/
export interface userAttributeValuesItem  {
	isDefault: boolean;
	name: string;
	value: string;
}
/*********************************************
* userFlowApiConnectorConfiguration
**********************************************/
export interface userFlowApiConnectorConfiguration  {

}
/*********************************************
* lobbyBypassSettings
**********************************************/
export interface lobbyBypassSettings  {
	isDialInBypassEnabled: boolean;
	scope: EnumTypes.lobbyBypassScope;
}
/*********************************************
* watermarkProtectionValues
**********************************************/
export interface watermarkProtectionValues  {
	isEnabledForContentSharing: boolean;
	isEnabledForVideo: boolean;
}
/*********************************************
* deviceLocalCredential
**********************************************/
export interface deviceLocalCredential  {
	accountName: string;
	accountSid: string;
	backupDateTime: any;
	passwordBase64: string;
}
/*********************************************
* deviceRegistrationMembership
**********************************************/
export interface deviceRegistrationMembership  {

}
/*********************************************
* allDeviceRegistrationMembership
**********************************************/
export interface allDeviceRegistrationMembership  {

}
/*********************************************
* azureADJoinPolicy
**********************************************/
export interface azureADJoinPolicy  {
	allowedToJoin: deviceRegistrationMembership;
	isAdminConfigurable: boolean;
}
/*********************************************
* azureADRegistrationPolicy
**********************************************/
export interface azureADRegistrationPolicy  {
	allowedToRegister: deviceRegistrationMembership;
	isAdminConfigurable: boolean;
}
/*********************************************
* enumeratedDeviceRegistrationMembership
**********************************************/
export interface enumeratedDeviceRegistrationMembership  {
	groups: Array<string>;
	users: Array<string>;
}
/*********************************************
* localAdminPasswordSettings
**********************************************/
export interface localAdminPasswordSettings  {
	isEnabled: boolean;
}
/*********************************************
* noDeviceRegistrationMembership
**********************************************/
export interface noDeviceRegistrationMembership  {

}
/*********************************************
* alternativeSecurityId
**********************************************/
export interface alternativeSecurityId  {
	identityProvider: string;
	key: any;
	type: number;
}
/*********************************************
* preAuthorizedApplication
**********************************************/
export interface preAuthorizedApplication  {
	appId: string;
	delegatedPermissionIds: Array<string>;
}
/*********************************************
* appManagementConfiguration
**********************************************/
export interface appManagementConfiguration  {
	keyCredentials: keyCredentialConfiguration[];
	passwordCredentials: passwordCredentialConfiguration[];
}
/*********************************************
* appManagementApplicationConfiguration
**********************************************/
export interface appManagementApplicationConfiguration  {

}
/*********************************************
* keyCredentialConfiguration
**********************************************/
export interface keyCredentialConfiguration  {
	maxLifetime: number;
	restrictForAppsCreatedAfterDateTime: any;
	restrictionType: EnumTypes.appKeyCredentialRestrictionType;
	state: EnumTypes.appManagementRestrictionState;
}
/*********************************************
* passwordCredentialConfiguration
**********************************************/
export interface passwordCredentialConfiguration  {
	maxLifetime: number;
	restrictForAppsCreatedAfterDateTime: any;
	restrictionType: EnumTypes.appCredentialRestrictionType;
	state: EnumTypes.appManagementRestrictionState;
}
/*********************************************
* appManagementServicePrincipalConfiguration
**********************************************/
export interface appManagementServicePrincipalConfiguration  {

}
/*********************************************
* certificateAuthority
**********************************************/
export interface certificateAuthority  {
	certificate: any;
	certificateRevocationListUrl: string;
	deltaCertificateRevocationListUrl: string;
	isRootAuthority: boolean;
	issuer: string;
	issuerSki: string;
}
/*********************************************
* ComplexExtensionValue
**********************************************/
export interface ComplexExtensionValue  {

}
/*********************************************
* contentCustomization
**********************************************/
export interface contentCustomization  {
	attributeCollection: keyValue[];
	attributeCollectionRelativeUrl: string;
	registrationCampaign: keyValue[];
	registrationCampaignRelativeUrl: string;
}
/*********************************************
* crossTenantAccessPolicyB2BSetting
**********************************************/
export interface crossTenantAccessPolicyB2BSetting  {
	applications: crossTenantAccessPolicyTargetConfiguration;
	usersAndGroups: crossTenantAccessPolicyTargetConfiguration;
}
/*********************************************
* crossTenantAccessPolicyTargetConfiguration
**********************************************/
export interface crossTenantAccessPolicyTargetConfiguration  {
	accessType: EnumTypes.crossTenantAccessPolicyTargetConfigurationAccessType;
	targets: crossTenantAccessPolicyTarget[];
}
/*********************************************
* crossTenantAccessPolicyInboundTrust
**********************************************/
export interface crossTenantAccessPolicyInboundTrust  {
	isCompliantDeviceAccepted: boolean;
	isHybridAzureADJoinedDeviceAccepted: boolean;
	isMfaAccepted: boolean;
}
/*********************************************
* crossTenantAccessPolicyTarget
**********************************************/
export interface crossTenantAccessPolicyTarget  {
	target: string;
	targetType: EnumTypes.crossTenantAccessPolicyTargetType;
}
/*********************************************
* crossTenantAccessPolicyTenantRestrictions
**********************************************/
export interface crossTenantAccessPolicyTenantRestrictions  {
	devices: devicesFilter;
}
/*********************************************
* devicesFilter
**********************************************/
export interface devicesFilter  {
	mode: EnumTypes.crossTenantAccessPolicyTargetConfigurationAccessType;
	rule: string;
}
/*********************************************
* crossTenantUserSyncInbound
**********************************************/
export interface crossTenantUserSyncInbound  {
	isSyncAllowed: boolean;
}
/*********************************************
* customAppManagementConfiguration
**********************************************/
export interface customAppManagementConfiguration  {

}
/*********************************************
* invitationRedemptionIdentityProviderConfiguration
**********************************************/
export interface invitationRedemptionIdentityProviderConfiguration  {
	fallbackIdentityProvider: EnumTypes.b2bIdentityProvidersType;
	primaryIdentityProviderPrecedenceOrder: EnumTypes.b2bIdentityProvidersType[];
}
/*********************************************
* defaultInvitationRedemptionIdentityProviderConfiguration
**********************************************/
export interface defaultInvitationRedemptionIdentityProviderConfiguration  {

}
/*********************************************
* defaultUserRolePermissions
**********************************************/
export interface defaultUserRolePermissions  {
	allowedToCreateApps: boolean;
	allowedToCreateSecurityGroups: boolean;
	allowedToCreateTenants: boolean;
	allowedToReadBitlockerKeysForOwnedDevice: boolean;
	allowedToReadOtherUsers: boolean;
	permissionGrantPoliciesAssigned: Array<string>;
}
/*********************************************
* domainState
**********************************************/
export interface domainState  {
	lastActionDateTime: any;
	operation: string;
	status: string;
}
/*********************************************
* implicitGrantSettings
**********************************************/
export interface implicitGrantSettings  {
	enableAccessTokenIssuance: boolean;
	enableIdTokenIssuance: boolean;
}
/*********************************************
* inboundOutboundPolicyConfiguration
**********************************************/
export interface inboundOutboundPolicyConfiguration  {
	inboundAllowed: boolean;
	outboundAllowed: boolean;
}
/*********************************************
* instanceResourceAccess
**********************************************/
export interface instanceResourceAccess  {
	permissions: resourcePermission[];
	resourceAppId: string;
}
/*********************************************
* resourcePermission
**********************************************/
export interface resourcePermission  {
	type: string;
	value: string;
}
/*********************************************
* licenseUnitsDetail
**********************************************/
export interface licenseUnitsDetail  {
	enabled: number;
	lockedOut: number;
	suspended: number;
	warning: number;
}
/*********************************************
* loginPageLayoutConfiguration
**********************************************/
export interface loginPageLayoutConfiguration  {
	isFooterShown: boolean;
	isHeaderShown: boolean;
	layoutTemplateType: EnumTypes.layoutTemplateType;
}
/*********************************************
* loginPageTextVisibilitySettings
**********************************************/
export interface loginPageTextVisibilitySettings  {
	hideAccountResetCredentials: boolean;
	hideCannotAccessYourAccount: boolean;
	hideForgotMyPassword: boolean;
	hidePrivacyAndCookies: boolean;
	hideResetItNow: boolean;
	hideTermsOfUse: boolean;
}
/*********************************************
* multiTenantOrganizationJoinRequestTransitionDetails
**********************************************/
export interface multiTenantOrganizationJoinRequestTransitionDetails  {
	desiredMemberState: EnumTypes.multiTenantOrganizationMemberState;
	details: string;
	status: EnumTypes.multiTenantOrganizationMemberProcessingStatus;
}
/*********************************************
* multiTenantOrganizationMemberTransitionDetails
**********************************************/
export interface multiTenantOrganizationMemberTransitionDetails  {
	desiredRole: EnumTypes.multiTenantOrganizationMemberRole;
	desiredState: EnumTypes.multiTenantOrganizationMemberState;
	details: string;
	status: EnumTypes.multiTenantOrganizationMemberProcessingStatus;
}
/*********************************************
* onPremisesAccidentalDeletionPrevention
**********************************************/
export interface onPremisesAccidentalDeletionPrevention  {
	alertThreshold: number;
	synchronizationPreventionType: EnumTypes.onPremisesDirectorySynchronizationDeletionPreventionType;
}
/*********************************************
* onPremisesDirectorySynchronizationConfiguration
**********************************************/
export interface onPremisesDirectorySynchronizationConfiguration  {
	accidentalDeletionPrevention: onPremisesAccidentalDeletionPrevention;
}
/*********************************************
* onPremisesDirectorySynchronizationFeature
**********************************************/
export interface onPremisesDirectorySynchronizationFeature  {
	blockCloudObjectTakeoverThroughHardMatchEnabled: boolean;
	blockSoftMatchEnabled: boolean;
	bypassDirSyncOverridesEnabled: boolean;
	cloudPasswordPolicyForPasswordSyncedUsersEnabled: boolean;
	concurrentCredentialUpdateEnabled: boolean;
	concurrentOrgIdProvisioningEnabled: boolean;
	deviceWritebackEnabled: boolean;
	directoryExtensionsEnabled: boolean;
	fopeConflictResolutionEnabled: boolean;
	groupWriteBackEnabled: boolean;
	passwordSyncEnabled: boolean;
	passwordWritebackEnabled: boolean;
	quarantineUponProxyAddressesConflictEnabled: boolean;
	quarantineUponUpnConflictEnabled: boolean;
	softMatchOnUpnEnabled: boolean;
	synchronizeUpnForManagedUsersEnabled: boolean;
	unifiedGroupWritebackEnabled: boolean;
	userForcePasswordChangeOnLogonEnabled: boolean;
	userWritebackEnabled: boolean;
}
/*********************************************
* optionalClaim
**********************************************/
export interface optionalClaim  {
	additionalProperties: Array<string>;
	essential: boolean;
	name: string;
	source: string;
}
/*********************************************
* physicalOfficeAddress
**********************************************/
export interface physicalOfficeAddress  {
	city: string;
	countryOrRegion: string;
	officeLocation: string;
	postalCode: string;
	state: string;
	street: string;
}
/*********************************************
* privacyProfile
**********************************************/
export interface privacyProfile  {
	contactEmail: string;
	statementUrl: string;
}
/*********************************************
* redirectUriSettings
**********************************************/
export interface redirectUriSettings  {
	index: number;
	uri: string;
}
/*********************************************
* resourceAccess
**********************************************/
export interface resourceAccess  {
	id: any;
	type: string;
}
/*********************************************
* selfSignedCertificate
**********************************************/
export interface selfSignedCertificate  {
	customKeyIdentifier: any;
	displayName: string;
	endDateTime: any;
	key: any;
	keyId: any;
	startDateTime: any;
	thumbprint: string;
	type: string;
	usage: string;
}
/*********************************************
* servicePlanInfo
**********************************************/
export interface servicePlanInfo  {
	appliesTo: string;
	provisioningStatus: string;
	servicePlanId: any;
	servicePlanName: string;
}
/*********************************************
* serviceProvisioningXmlError
**********************************************/
export interface serviceProvisioningXmlError  {
	errorDetail: string;
}
/*********************************************
* settingTemplateValue
**********************************************/
export interface settingTemplateValue  {
	defaultValue: string;
	description: string;
	name: string;
	type: string;
}
/*********************************************
* settingValue
**********************************************/
export interface settingValue  {
	name: string;
	value: string;
}
/*********************************************
* signingCertificateUpdateStatus
**********************************************/
export interface signingCertificateUpdateStatus  {
	certificateUpdateResult: string;
	lastRunDateTime: any;
}
/*********************************************
* tenantInformation
**********************************************/
export interface tenantInformation  {
	defaultDomainName: string;
	displayName: string;
	federationBrandName: string;
	tenantId: string;
}
/*********************************************
* unifiedRolePermission
**********************************************/
export interface unifiedRolePermission  {
	allowedResourceActions: Array<string>;
	condition: string;
	excludedResourceActions: Array<string>;
}
/*********************************************
* verifiedDomain
**********************************************/
export interface verifiedDomain  {
	capabilities: string;
	isDefault: boolean;
	isInitial: boolean;
	name: string;
	type: string;
}
/*********************************************
* browserSharedCookieHistory
**********************************************/
export interface browserSharedCookieHistory  {
	comment: string;
	displayName: string;
	hostOnly: boolean;
	hostOrDomain: string;
	lastModifiedBy: identitySet;
	path: string;
	publishedDateTime: any;
	sourceEnvironment: EnumTypes.browserSharedCookieSourceEnvironment;
}
/*********************************************
* browserSiteHistory
**********************************************/
export interface browserSiteHistory  {
	allowRedirect: boolean;
	comment: string;
	compatibilityMode: EnumTypes.browserSiteCompatibilityMode;
	lastModifiedBy: identitySet;
	mergeType: EnumTypes.browserSiteMergeType;
	publishedDateTime: any;
	targetEnvironment: EnumTypes.browserSiteTargetEnvironment;
}
/*********************************************
* educationAssignmentRecipient
**********************************************/
export interface educationAssignmentRecipient  {

}
/*********************************************
* educationAssignmentClassRecipient
**********************************************/
export interface educationAssignmentClassRecipient  {

}
/*********************************************
* educationAssignmentGrade
**********************************************/
export interface educationAssignmentGrade  {
	gradedBy: identitySet;
	gradedDateTime: any;
}
/*********************************************
* educationAssignmentGradeType
**********************************************/
export interface educationAssignmentGradeType  {

}
/*********************************************
* educationAssignmentGroupRecipient
**********************************************/
export interface educationAssignmentGroupRecipient  {

}
/*********************************************
* educationAssignmentIndividualRecipient
**********************************************/
export interface educationAssignmentIndividualRecipient  {
	recipients: Array<string>;
}
/*********************************************
* educationAssignmentPointsGrade
**********************************************/
export interface educationAssignmentPointsGrade  {
	points: any;
}
/*********************************************
* educationAssignmentPointsGradeType
**********************************************/
export interface educationAssignmentPointsGradeType  {
	maxPoints: any;
}
/*********************************************
* educationResource
**********************************************/
export interface educationResource  {
	createdBy: identitySet;
	createdDateTime: any;
	displayName: string;
	lastModifiedBy: identitySet;
	lastModifiedDateTime: any;
}
/*********************************************
* educationChannelResource
**********************************************/
export interface educationChannelResource  {
	url: string;
}
/*********************************************
* educationExcelResource
**********************************************/
export interface educationExcelResource  {
	fileUrl: string;
}
/*********************************************
* educationExternalResource
**********************************************/
export interface educationExternalResource  {
	webUrl: string;
}
/*********************************************
* educationFeedback
**********************************************/
export interface educationFeedback  {
	feedbackBy: identitySet;
	feedbackDateTime: any;
	text: educationItemBody;
}
/*********************************************
* educationItemBody
**********************************************/
export interface educationItemBody  {
	content: string;
	contentType: EnumTypes.bodyType;
}
/*********************************************
* educationFileResource
**********************************************/
export interface educationFileResource  {
	fileUrl: string;
}
/*********************************************
* educationLinkedAssignmentResource
**********************************************/
export interface educationLinkedAssignmentResource  {
	url: string;
}
/*********************************************
* educationLinkResource
**********************************************/
export interface educationLinkResource  {
	link: string;
}
/*********************************************
* educationMediaResource
**********************************************/
export interface educationMediaResource  {
	fileUrl: string;
}
/*********************************************
* educationPowerPointResource
**********************************************/
export interface educationPowerPointResource  {
	fileUrl: string;
}
/*********************************************
* educationSubmissionRecipient
**********************************************/
export interface educationSubmissionRecipient  {

}
/*********************************************
* educationSubmissionIndividualRecipient
**********************************************/
export interface educationSubmissionIndividualRecipient  {
	userId: string;
}
/*********************************************
* educationTeamsAppResource
**********************************************/
export interface educationTeamsAppResource  {
	appIconWebUrl: string;
	appId: string;
	teamsEmbeddedContentUrl: string;
	webUrl: string;
}
/*********************************************
* educationWordResource
**********************************************/
export interface educationWordResource  {
	fileUrl: string;
}
/*********************************************
* rubricCriterion
**********************************************/
export interface rubricCriterion  {
	description: educationItemBody;
}
/*********************************************
* rubricLevel
**********************************************/
export interface rubricLevel  {
	description: educationItemBody;
	displayName: string;
	grading: educationAssignmentGradeType;
	levelId: string;
}
/*********************************************
* rubricQuality
**********************************************/
export interface rubricQuality  {
	criteria: rubricCriterion[];
	description: educationItemBody;
	displayName: string;
	qualityId: string;
	weight: any;
}
/*********************************************
* rubricQualityFeedbackModel
**********************************************/
export interface rubricQualityFeedbackModel  {
	feedback: educationItemBody;
	qualityId: string;
}
/*********************************************
* rubricQualitySelectedColumnModel
**********************************************/
export interface rubricQualitySelectedColumnModel  {
	columnId: string;
	qualityId: string;
}
/*********************************************
* educationCourse
**********************************************/
export interface educationCourse  {
	courseNumber: string;
	description: string;
	displayName: string;
	externalId: string;
	subject: string;
}
/*********************************************
* educationTerm
**********************************************/
export interface educationTerm  {
	displayName: string;
	endDate: any;
	externalId: string;
	startDate: any;
}
/*********************************************
* relatedContact
**********************************************/
export interface relatedContact  {
	accessConsent: boolean;
	displayName: string;
	emailAddress: string;
	mobilePhone: string;
	relationship: EnumTypes.contactRelationship;
}
/*********************************************
* educationOnPremisesInfo
**********************************************/
export interface educationOnPremisesInfo  {
	immutableId: string;
}
/*********************************************
* educationStudent
**********************************************/
export interface educationStudent  {
	birthDate: any;
	externalId: string;
	gender: EnumTypes.educationGender;
	grade: string;
	graduationYear: string;
	studentNumber: string;
}
/*********************************************
* educationTeacher
**********************************************/
export interface educationTeacher  {
	externalId: string;
	teacherNumber: string;
}
/*********************************************
* artifactQuery
**********************************************/
export interface artifactQuery  {
	artifactType: EnumTypes.restorableArtifact;
	queryExpression: string;
}
/*********************************************
* restorePointSearchResponse
**********************************************/
export interface restorePointSearchResponse  {
	noResultProtectionUnitIds: Array<string>;
	searchResponseId: string;
	searchResults: restorePointSearchResult[];
}
/*********************************************
* restorePointSearchResult
**********************************************/
export interface restorePointSearchResult  {
	artifactHitCount: number;
}
/*********************************************
* retentionSetting
**********************************************/
export interface retentionSetting  {
	interval: string;
	period: number;
}
/*********************************************
* serviceStatus
**********************************************/
export interface serviceStatus  {
	backupServiceConsumer: EnumTypes.backupServiceConsumer;
	disableReason: EnumTypes.disableReason;
	gracePeriodDateTime: any;
	lastModifiedBy: identitySet;
	lastModifiedDateTime: any;
	restoreAllowedTillDateTime: any;
	status: EnumTypes.backupServiceStatus;
}
/*********************************************
* timePeriod
**********************************************/
export interface timePeriod  {
	endDateTime: any;
	startDateTime: any;
}
/*********************************************
* Json
**********************************************/
export interface Json  {

}
/*********************************************
* workbookFilterCriteria
**********************************************/
export interface workbookFilterCriteria  {
	color: string;
	criterion1: string;
	criterion2: string;
	dynamicCriteria: string;
	filterOn: string;
	icon: workbookIcon;
	operator: string;
	values: Json;
}
/*********************************************
* workbookIcon
**********************************************/
export interface workbookIcon  {
	index: number;
	set: string;
}
/*********************************************
* workbookFilterDatetime
**********************************************/
export interface workbookFilterDatetime  {
	date: string;
	specificity: string;
}
/*********************************************
* workbookOperationError
**********************************************/
export interface workbookOperationError  {
	code: string;
	innerError: workbookOperationError;
	message: string;
}
/*********************************************
* workbookRangeReference
**********************************************/
export interface workbookRangeReference  {
	address: string;
}
/*********************************************
* workbookSessionInfo
**********************************************/
export interface workbookSessionInfo  {
	id: string;
	persistChanges: boolean;
}
/*********************************************
* workbookSortField
**********************************************/
export interface workbookSortField  {
	ascending: boolean;
	color: string;
	dataOption: string;
	icon: workbookIcon;
	key: number;
	sortOn: string;
}
/*********************************************
* workbookWorksheetProtectionOptions
**********************************************/
export interface workbookWorksheetProtectionOptions  {
	allowAutoFilter: boolean;
	allowDeleteColumns: boolean;
	allowDeleteRows: boolean;
	allowFormatCells: boolean;
	allowFormatColumns: boolean;
	allowFormatRows: boolean;
	allowInsertColumns: boolean;
	allowInsertHyperlinks: boolean;
	allowInsertRows: boolean;
	allowPivotTables: boolean;
	allowSort: boolean;
}
/*********************************************
* quota
**********************************************/
export interface quota  {
	deleted: number;
	remaining: number;
	state: string;
	storagePlanInformation: storagePlanInformation;
	total: number;
	used: number;
}
/*********************************************
* systemFacet
**********************************************/
export interface systemFacet  {

}
/*********************************************
* audio
**********************************************/
export interface audio  {
	album: string;
	albumArtist: string;
	artist: string;
	bitrate: number;
	composers: string;
	copyright: string;
	disc: number;
	discCount: number;
	duration: number;
	genre: string;
	hasDrm: boolean;
	isVariableBitrate: boolean;
	title: string;
	track: number;
	trackCount: number;
	year: number;
}
/*********************************************
* bundle
**********************************************/
export interface bundle  {
	album: album;
	childCount: number;
}
/*********************************************
* deleted
**********************************************/
export interface deleted  {
	state: string;
}
/*********************************************
* file
**********************************************/
export interface file  {
	hashes: hashes;
	mimeType: string;
	processingMetadata: boolean;
}
/*********************************************
* fileSystemInfo
**********************************************/
export interface fileSystemInfo  {
	createdDateTime: any;
	lastAccessedDateTime: any;
	lastModifiedDateTime: any;
}
/*********************************************
* folder
**********************************************/
export interface folder  {
	childCount: number;
	view: folderView;
}
/*********************************************
* image
**********************************************/
export interface image  {
	height: number;
	width: number;
}
/*********************************************
* malware
**********************************************/
export interface malware  {
	description: string;
}
/*********************************************
* package
**********************************************/
export interface package  {
	type: string;
}
/*********************************************
* pendingOperations
**********************************************/
export interface pendingOperations  {
	pendingContentUpdate: pendingContentUpdate;
}
/*********************************************
* photo
**********************************************/
export interface photo  {
	cameraMake: string;
	cameraModel: string;
	exposureDenominator: number;
	exposureNumerator: number;
	fNumber: number;
	focalLength: number;
	iso: number;
	orientation: number;
	takenDateTime: any;
}
/*********************************************
* publicationFacet
**********************************************/
export interface publicationFacet  {
	checkedOutBy: identitySet;
	level: string;
	versionId: string;
}
/*********************************************
* remoteItem
**********************************************/
export interface remoteItem  {
	createdBy: identitySet;
	createdDateTime: any;
	file: file;
	fileSystemInfo: fileSystemInfo;
	folder: folder;
	id: string;
	image: image;
	lastModifiedBy: identitySet;
	lastModifiedDateTime: any;
	name: string;
	package: package;
	parentReference: itemReference;
	shared: shared;
	sharepointIds: sharepointIds;
	size: number;
	specialFolder: specialFolder;
	video: video;
	webDavUrl: string;
	webUrl: string;
}
/*********************************************
* searchResult
**********************************************/
export interface searchResult  {
	onClickTelemetryUrl: string;
}
/*********************************************
* shared
**********************************************/
export interface shared  {
	owner: identitySet;
	scope: string;
	sharedBy: identitySet;
	sharedDateTime: any;
}
/*********************************************
* specialFolder
**********************************************/
export interface specialFolder  {
	name: string;
}
/*********************************************
* video
**********************************************/
export interface video  {
	audioBitsPerSample: number;
	audioChannels: number;
	audioFormat: string;
	audioSamplesPerSecond: number;
	bitrate: number;
	duration: number;
	fourCC: string;
	frameRate: number;
	height: number;
	width: number;
}
/*********************************************
* listInfo
**********************************************/
export interface listInfo  {
	contentTypesEnabled: boolean;
	hidden: boolean;
	template: string;
}
/*********************************************
* attendeeAvailability
**********************************************/
export interface attendeeAvailability  {
	attendee: attendeeBase;
	availability: EnumTypes.freeBusyStatus;
}
/*********************************************
* attendeeBase
**********************************************/
export interface attendeeBase  {
	type: EnumTypes.attendeeType;
}
/*********************************************
* locationConstraint
**********************************************/
export interface locationConstraint  {
	isRequired: boolean;
	locations: locationConstraintItem[];
	suggestLocation: boolean;
}
/*********************************************
* locationConstraintItem
**********************************************/
export interface locationConstraintItem  {
	resolveAvailability: boolean;
}
/*********************************************
* meetingTimeSuggestion
**********************************************/
export interface meetingTimeSuggestion  {
	attendeeAvailability: attendeeAvailability[];
	confidence: number;
	locations: location[];
	meetingTimeSlot: timeSlot;
	order: number;
	organizerAvailability: EnumTypes.freeBusyStatus;
	suggestionReason: string;
}
/*********************************************
* meetingTimeSuggestionsResult
**********************************************/
export interface meetingTimeSuggestionsResult  {
	emptySuggestionsReason: string;
	meetingTimeSuggestions: meetingTimeSuggestion[];
}
/*********************************************
* timeConstraint
**********************************************/
export interface timeConstraint  {
	activityDomain: EnumTypes.activityDomain;
	timeSlots: timeSlot[];
}
/*********************************************
* attachmentItem
**********************************************/
export interface attachmentItem  {
	attachmentType: EnumTypes.attachmentType;
	contentId: string;
	contentType: string;
	isInline: boolean;
	name: string;
	size: number;
}
/*********************************************
* attendee
**********************************************/
export interface attendee  {
	proposedNewTime: timeSlot;
	status: responseStatus;
}
/*********************************************
* responseStatus
**********************************************/
export interface responseStatus  {
	response: EnumTypes.responseType;
	time: any;
}
/*********************************************
* automaticRepliesMailTips
**********************************************/
export interface automaticRepliesMailTips  {
	message: string;
	messageLanguage: localeInfo;
	scheduledEndTime: dateTimeTimeZone;
	scheduledStartTime: dateTimeTimeZone;
}
/*********************************************
* localeInfo
**********************************************/
export interface localeInfo  {
	displayName: string;
	locale: string;
}
/*********************************************
* automaticRepliesSetting
**********************************************/
export interface automaticRepliesSetting  {
	externalAudience: EnumTypes.externalAudienceScope;
	externalReplyMessage: string;
	internalReplyMessage: string;
	scheduledEndDateTime: dateTimeTimeZone;
	scheduledStartDateTime: dateTimeTimeZone;
	status: EnumTypes.automaticRepliesStatus;
}
/*********************************************
* calendarSharingMessageAction
**********************************************/
export interface calendarSharingMessageAction  {
	action: EnumTypes.calendarSharingAction;
	actionType: EnumTypes.calendarSharingActionType;
	importance: EnumTypes.calendarSharingActionImportance;
}
/*********************************************
* convertIdResult
**********************************************/
export interface convertIdResult  {
	errorDetails: genericError;
	sourceId: string;
	targetId: string;
}
/*********************************************
* timeZoneBase
**********************************************/
export interface timeZoneBase  {
	name: string;
}
/*********************************************
* customTimeZone
**********************************************/
export interface customTimeZone  {
	bias: number;
	daylightOffset: daylightTimeZoneOffset;
	standardOffset: standardTimeZoneOffset;
}
/*********************************************
* standardTimeZoneOffset
**********************************************/
export interface standardTimeZoneOffset  {
	dayOccurrence: number;
	dayOfWeek: EnumTypes.dayOfWeek;
	month: number;
	time: any;
	year: number;
}
/*********************************************
* daylightTimeZoneOffset
**********************************************/
export interface daylightTimeZoneOffset  {
	daylightBias: number;
}
/*********************************************
* followupFlag
**********************************************/
export interface followupFlag  {
	completedDateTime: dateTimeTimeZone;
	dueDateTime: dateTimeTimeZone;
	flagStatus: EnumTypes.followupFlagStatus;
	startDateTime: dateTimeTimeZone;
}
/*********************************************
* freeBusyError
**********************************************/
export interface freeBusyError  {
	message: string;
	responseCode: string;
}
/*********************************************
* internetMessageHeader
**********************************************/
export interface internetMessageHeader  {
	name: string;
	value: string;
}
/*********************************************
* workingHours
**********************************************/
export interface workingHours  {
	daysOfWeek: EnumTypes.dayOfWeek[];
	endTime: any;
	startTime: any;
	timeZone: timeZoneBase;
}
/*********************************************
* mailTips
**********************************************/
export interface mailTips  {
	automaticReplies: automaticRepliesMailTips;
	customMailTip: string;
	deliveryRestricted: boolean;
	emailAddress: emailAddress;
	error: mailTipsError;
	externalMemberCount: number;
	isModerated: boolean;
	mailboxFull: boolean;
	maxMessageSize: number;
	recipientScope: EnumTypes.recipientScopeType;
	recipientSuggestions: recipient[];
	totalMemberCount: number;
}
/*********************************************
* mailTipsError
**********************************************/
export interface mailTipsError  {
	code: string;
	message: string;
}
/*********************************************
* messageRuleActions
**********************************************/
export interface messageRuleActions  {
	assignCategories: Array<string>;
	copyToFolder: string;
	delete: boolean;
	forwardAsAttachmentTo: recipient[];
	forwardTo: recipient[];
	markAsRead: boolean;
	markImportance: EnumTypes.importance;
	moveToFolder: string;
	permanentDelete: boolean;
	redirectTo: recipient[];
	stopProcessingRules: boolean;
}
/*********************************************
* messageRulePredicates
**********************************************/
export interface messageRulePredicates  {
	bodyContains: Array<string>;
	bodyOrSubjectContains: Array<string>;
	categories: Array<string>;
	fromAddresses: recipient[];
	hasAttachments: boolean;
	headerContains: Array<string>;
	importance: EnumTypes.importance;
	isApprovalRequest: boolean;
	isAutomaticForward: boolean;
	isAutomaticReply: boolean;
	isEncrypted: boolean;
	isMeetingRequest: boolean;
	isMeetingResponse: boolean;
	isNonDeliveryReport: boolean;
	isPermissionControlled: boolean;
	isReadReceipt: boolean;
	isSigned: boolean;
	isVoicemail: boolean;
	messageActionFlag: EnumTypes.messageActionFlag;
	notSentToMe: boolean;
	recipientContains: Array<string>;
	senderContains: Array<string>;
	sensitivity: EnumTypes.sensitivity;
	sentCcMe: boolean;
	sentOnlyToMe: boolean;
	sentToAddresses: recipient[];
	sentToMe: boolean;
	sentToOrCcMe: boolean;
	subjectContains: Array<string>;
	withinSizeRange: sizeRange;
}
/*********************************************
* sizeRange
**********************************************/
export interface sizeRange  {
	maximumSize: number;
	minimumSize: number;
}
/*********************************************
* onlineMeetingInfo
**********************************************/
export interface onlineMeetingInfo  {
	conferenceId: string;
	joinUrl: string;
	phones: phone[];
	quickDial: string;
	tollFreeNumbers: Array<string>;
	tollNumber: string;
}
/*********************************************
* patternedRecurrence
**********************************************/
export interface patternedRecurrence  {
	pattern: recurrencePattern;
	range: recurrenceRange;
}
/*********************************************
* recurrencePattern
**********************************************/
export interface recurrencePattern  {
	dayOfMonth: number;
	daysOfWeek: EnumTypes.dayOfWeek[];
	firstDayOfWeek: EnumTypes.dayOfWeek;
	index: EnumTypes.weekIndex;
	interval: number;
	month: number;
	type: EnumTypes.recurrencePatternType;
}
/*********************************************
* recurrenceRange
**********************************************/
export interface recurrenceRange  {
	endDate: any;
	numberOfOccurrences: number;
	recurrenceTimeZone: string;
	startDate: any;
	type: EnumTypes.recurrenceRangeType;
}
/*********************************************
* personType
**********************************************/
export interface personType  {
	class: string;
	subclass: string;
}
/*********************************************
* reminder
**********************************************/
export interface reminder  {
	changeKey: string;
	eventEndTime: dateTimeTimeZone;
	eventId: string;
	eventLocation: location;
	eventStartTime: dateTimeTimeZone;
	eventSubject: string;
	eventWebLink: string;
	reminderFireTime: dateTimeTimeZone;
}
/*********************************************
* scheduleInformation
**********************************************/
export interface scheduleInformation  {
	availabilityView: string;
	error: freeBusyError;
	scheduleId: string;
	scheduleItems: scheduleItem[];
	workingHours: workingHours;
}
/*********************************************
* scheduleItem
**********************************************/
export interface scheduleItem  {
	end: dateTimeTimeZone;
	isPrivate: boolean;
	location: string;
	start: dateTimeTimeZone;
	status: EnumTypes.freeBusyStatus;
	subject: string;
}
/*********************************************
* scoredEmailAddress
**********************************************/
export interface scoredEmailAddress  {
	address: string;
	itemId: string;
	relevanceScore: number;
	selectionLikelihood: EnumTypes.selectionLikelihoodInfo;
}
/*********************************************
* timeZoneInformation
**********************************************/
export interface timeZoneInformation  {
	alias: string;
	displayName: string;
}
/*********************************************
* uploadSession
**********************************************/
export interface uploadSession  {
	expirationDateTime: any;
	nextExpectedRanges: Array<string>;
	uploadUrl: string;
}
/*********************************************
* website
**********************************************/
export interface website  {
	address: string;
	displayName: string;
	type: EnumTypes.websiteType;
}
/*********************************************
* Dictionary
**********************************************/
export interface Dictionary  {

}
/*********************************************
* fileStorageContainerCustomPropertyDictionary
**********************************************/
export interface fileStorageContainerCustomPropertyDictionary  {

}
/*********************************************
* fileStorageContainerCustomPropertyValue
**********************************************/
export interface fileStorageContainerCustomPropertyValue  {
	isSearchable: boolean;
	value: string;
}
/*********************************************
* fileStorageContainerSettings
**********************************************/
export interface fileStorageContainerSettings  {
	isItemVersioningEnabled: boolean;
	isOcrEnabled: boolean;
	itemMajorVersionLimit: number;
}
/*********************************************
* fileStorageContainerViewpoint
**********************************************/
export interface fileStorageContainerViewpoint  {
	effectiveRole: string;
}
/*********************************************
* idleSessionSignOut
**********************************************/
export interface idleSessionSignOut  {
	isEnabled: boolean;
	signOutAfterInSeconds: number;
	warnAfterInSeconds: number;
}
/*********************************************
* accessAction
**********************************************/
export interface accessAction  {

}
/*********************************************
* album
**********************************************/
export interface album  {
	coverImageItemId: string;
}
/*********************************************
* booleanColumn
**********************************************/
export interface booleanColumn  {

}
/*********************************************
* calculatedColumn
**********************************************/
export interface calculatedColumn  {
	format: string;
	formula: string;
	outputType: string;
}
/*********************************************
* choiceColumn
**********************************************/
export interface choiceColumn  {
	allowTextEntry: boolean;
	choices: Array<string>;
	displayAs: string;
}
/*********************************************
* columnValidation
**********************************************/
export interface columnValidation  {
	defaultLanguage: string;
	descriptions: displayNameLocalization[];
	formula: string;
}
/*********************************************
* displayNameLocalization
**********************************************/
export interface displayNameLocalization  {
	displayName: string;
	languageTag: string;
}
/*********************************************
* commentAction
**********************************************/
export interface commentAction  {
	isReply: boolean;
	parentAuthor: identitySet;
	participants: identitySet[];
}
/*********************************************
* contentApprovalStatusColumn
**********************************************/
export interface contentApprovalStatusColumn  {

}
/*********************************************
* contentTypeInfo
**********************************************/
export interface contentTypeInfo  {
	id: string;
	name: string;
}
/*********************************************
* contentTypeOrder
**********************************************/
export interface contentTypeOrder  {
	default: boolean;
	position: number;
}
/*********************************************
* createAction
**********************************************/
export interface createAction  {

}
/*********************************************
* currencyColumn
**********************************************/
export interface currencyColumn  {
	locale: string;
}
/*********************************************
* dateTimeColumn
**********************************************/
export interface dateTimeColumn  {
	displayAs: string;
	format: string;
}
/*********************************************
* defaultColumnValue
**********************************************/
export interface defaultColumnValue  {
	formula: string;
	value: string;
}
/*********************************************
* deleteAction
**********************************************/
export interface deleteAction  {
	name: string;
	objectType: string;
}
/*********************************************
* documentSet
**********************************************/
export interface documentSet  {
	allowedContentTypes: contentTypeInfo[];
	defaultContents: documentSetContent[];
	propagateWelcomePageChanges: boolean;
	shouldPrefixNameToFile: boolean;
	welcomePageUrl: string;
}
/*********************************************
* documentSetContent
**********************************************/
export interface documentSetContent  {
	contentType: contentTypeInfo;
	fileName: string;
	folderName: string;
}
/*********************************************
* documentSetVersionItem
**********************************************/
export interface documentSetVersionItem  {
	itemId: string;
	title: string;
	versionId: string;
}
/*********************************************
* driveItemSource
**********************************************/
export interface driveItemSource  {
	application: EnumTypes.driveItemSourceApplication;
	externalId: string;
}
/*********************************************
* driveItemUploadableProperties
**********************************************/
export interface driveItemUploadableProperties  {
	description: string;
	driveItemSource: driveItemSource;
	fileSize: number;
	fileSystemInfo: fileSystemInfo;
	mediaSource: mediaSource;
	name: string;
}
/*********************************************
* mediaSource
**********************************************/
export interface mediaSource  {
	contentCategory: EnumTypes.mediaSourceContentCategory;
}
/*********************************************
* driveRecipient
**********************************************/
export interface driveRecipient  {
	alias: string;
	email: string;
	objectId: string;
}
/*********************************************
* editAction
**********************************************/
export interface editAction  {

}
/*********************************************
* extractSensitivityLabelsResult
**********************************************/
export interface extractSensitivityLabelsResult  {
	labels: sensitivityLabelAssignment[];
}
/*********************************************
* sensitivityLabelAssignment
**********************************************/
export interface sensitivityLabelAssignment  {
	assignmentMethod: EnumTypes.sensitivityLabelAssignmentMethod;
	sensitivityLabelId: string;
	tenantId: string;
}
/*********************************************
* hashes
**********************************************/
export interface hashes  {
	crc32Hash: string;
	quickXorHash: string;
	sha1Hash: string;
	sha256Hash: string;
}
/*********************************************
* folderView
**********************************************/
export interface folderView  {
	sortBy: string;
	sortOrder: string;
	viewType: string;
}
/*********************************************
* geolocationColumn
**********************************************/
export interface geolocationColumn  {

}
/*********************************************
* hyperlinkOrPictureColumn
**********************************************/
export interface hyperlinkOrPictureColumn  {
	isPicture: boolean;
}
/*********************************************
* incompleteData
**********************************************/
export interface incompleteData  {
	missingDataBeforeDateTime: any;
	wasThrottled: boolean;
}
/*********************************************
* itemActionStat
**********************************************/
export interface itemActionStat  {
	actionCount: number;
	actorCount: number;
}
/*********************************************
* itemPreviewInfo
**********************************************/
export interface itemPreviewInfo  {
	getUrl: string;
	postParameters: string;
	postUrl: string;
}
/*********************************************
* itemReference
**********************************************/
export interface itemReference  {
	driveId: string;
	driveType: string;
	id: string;
	name: string;
	path: string;
	shareId: string;
	sharepointIds: sharepointIds;
	siteId: string;
}
/*********************************************
* lookupColumn
**********************************************/
export interface lookupColumn  {
	allowMultipleValues: boolean;
	allowUnlimitedLength: boolean;
	columnName: string;
	listId: string;
	primaryLookupColumnId: string;
}
/*********************************************
* mentionAction
**********************************************/
export interface mentionAction  {
	mentionees: identitySet[];
}
/*********************************************
* metaDataKeyStringPair
**********************************************/
export interface metaDataKeyStringPair  {
	key: string;
	value: string;
}
/*********************************************
* metaDataKeyValuePair
**********************************************/
export interface metaDataKeyValuePair  {
	key: string;
	value: Json;
}
/*********************************************
* moveAction
**********************************************/
export interface moveAction  {
	from: string;
	to: string;
}
/*********************************************
* numberColumn
**********************************************/
export interface numberColumn  {
	decimalPlaces: string;
	displayAs: string;
	maximum: number;
	minimum: number;
}
/*********************************************
* pendingContentUpdate
**********************************************/
export interface pendingContentUpdate  {
	queuedDateTime: any;
}
/*********************************************
* personOrGroupColumn
**********************************************/
export interface personOrGroupColumn  {
	allowMultipleSelection: boolean;
	chooseFromType: string;
	displayAs: string;
}
/*********************************************
* storagePlanInformation
**********************************************/
export interface storagePlanInformation  {
	upgradeAvailable: boolean;
}
/*********************************************
* reactionsFacet
**********************************************/
export interface reactionsFacet  {
	commentCount: number;
	likeCount: number;
	shareCount: number;
}
/*********************************************
* renameAction
**********************************************/
export interface renameAction  {
	newName: string;
	oldName: string;
}
/*********************************************
* restoreAction
**********************************************/
export interface restoreAction  {

}
/*********************************************
* retentionLabelSettings
**********************************************/
export interface retentionLabelSettings  {
	behaviorDuringRetentionPeriod: EnumTypes.behaviorDuringRetentionPeriod;
	isContentUpdateAllowed: boolean;
	isDeleteAllowed: boolean;
	isLabelUpdateAllowed: boolean;
	isMetadataUpdateAllowed: boolean;
	isRecordLocked: boolean;
}
/*********************************************
* serverProcessedContent
**********************************************/
export interface serverProcessedContent  {
	htmlStrings: metaDataKeyStringPair[];
	imageSources: metaDataKeyStringPair[];
	links: metaDataKeyStringPair[];
	searchablePlainTexts: metaDataKeyStringPair[];
}
/*********************************************
* shareAction
**********************************************/
export interface shareAction  {
	recipients: identitySet[];
}
/*********************************************
* sharePointIdentity
**********************************************/
export interface sharePointIdentity  {
	loginName: string;
}
/*********************************************
* sharePointIdentitySet
**********************************************/
export interface sharePointIdentitySet  {
	group: identity;
	siteGroup: sharePointIdentity;
	siteUser: sharePointIdentity;
}
/*********************************************
* sharingInvitation
**********************************************/
export interface sharingInvitation  {
	email: string;
	invitedBy: identitySet;
	redeemedBy: string;
	signInRequired: boolean;
}
/*********************************************
* sharingLink
**********************************************/
export interface sharingLink  {
	application: identity;
	preventsDownload: boolean;
	scope: string;
	type: string;
	webHtml: string;
	webUrl: string;
}
/*********************************************
* siteArchivalDetails
**********************************************/
export interface siteArchivalDetails  {
	archiveStatus: EnumTypes.siteArchiveStatus;
}
/*********************************************
* termColumn
**********************************************/
export interface termColumn  {
	allowMultipleValues: boolean;
	showFullyQualifiedName: boolean;
}
/*********************************************
* textColumn
**********************************************/
export interface textColumn  {
	allowMultipleLines: boolean;
	appendChangesToExistingText: boolean;
	linesForEditing: number;
	maxLength: number;
	textType: string;
}
/*********************************************
* thumbnail
**********************************************/
export interface thumbnail  {
	content: any;
	height: number;
	sourceItemId: string;
	url: string;
	width: number;
}
/*********************************************
* thumbnailColumn
**********************************************/
export interface thumbnailColumn  {

}
/*********************************************
* titleArea
**********************************************/
export interface titleArea  {
	alternativeText: string;
	enableGradientEffect: boolean;
	imageWebUrl: string;
	layout: EnumTypes.titleAreaLayoutType;
	serverProcessedContent: serverProcessedContent;
	showAuthor: boolean;
	showPublishedDate: boolean;
	showTextBlockAboveTitle: boolean;
	textAboveTitle: string;
	textAlignment: EnumTypes.titleAreaTextAlignmentType;
}
/*********************************************
* versionAction
**********************************************/
export interface versionAction  {
	newVersion: string;
}
/*********************************************
* webPartData
**********************************************/
export interface webPartData  {
	dataVersion: string;
	description: string;
	properties: Json;
	serverProcessedContent: serverProcessedContent;
	title: string;
}
/*********************************************
* webPartPosition
**********************************************/
export interface webPartPosition  {
	columnId: number;
	horizontalSectionId: number;
	isInVerticalSection: boolean;
	webPartIndex: number;
}
/*********************************************
* attendeeNotificationInfo
**********************************************/
export interface attendeeNotificationInfo  {
	phoneNumber: string;
	timeZone: string;
}
/*********************************************
* broadcastMeetingSettings
**********************************************/
export interface broadcastMeetingSettings  {
	allowedAudience: EnumTypes.broadcastMeetingAudience;
	captions: broadcastMeetingCaptionSettings;
	isAttendeeReportEnabled: boolean;
	isQuestionAndAnswerEnabled: boolean;
	isRecordingEnabled: boolean;
	isVideoOnDemandEnabled: boolean;
}
/*********************************************
* meetingParticipants
**********************************************/
export interface meetingParticipants  {
	attendees: meetingParticipantInfo[];
	organizer: meetingParticipantInfo;
}
/*********************************************
* extensionSchemaProperty
**********************************************/
export interface extensionSchemaProperty  {
	name: string;
	type: string;
}
/*********************************************
* attributeDefinition
**********************************************/
export interface attributeDefinition  {
	anchor: boolean;
	apiExpressions: stringKeyStringValuePair[];
	caseExact: boolean;
	defaultValue: string;
	flowNullValues: boolean;
	metadata: attributeDefinitionMetadataEntry[];
	multivalued: boolean;
	mutability: EnumTypes.mutability;
	name: string;
	referencedObjects: referencedObject[];
	required: boolean;
	type: EnumTypes.attributeType;
}
/*********************************************
* stringKeyStringValuePair
**********************************************/
export interface stringKeyStringValuePair  {
	key: string;
	value: string;
}
/*********************************************
* attributeDefinitionMetadataEntry
**********************************************/
export interface attributeDefinitionMetadataEntry  {
	key: EnumTypes.attributeDefinitionMetadata;
	value: string;
}
/*********************************************
* referencedObject
**********************************************/
export interface referencedObject  {
	referencedObjectName: string;
	referencedProperty: string;
}
/*********************************************
* attributeMapping
**********************************************/
export interface attributeMapping  {
	defaultValue: string;
	exportMissingReferences: boolean;
	flowBehavior: EnumTypes.attributeFlowBehavior;
	flowType: EnumTypes.attributeFlowType;
	matchingPriority: number;
	source: attributeMappingSource;
	targetAttributeName: string;
}
/*********************************************
* attributeMappingSource
**********************************************/
export interface attributeMappingSource  {
	expression: string;
	name: string;
	parameters: stringKeyAttributeMappingSourceValuePair[];
	type: EnumTypes.attributeMappingSourceType;
}
/*********************************************
* attributeMappingParameterSchema
**********************************************/
export interface attributeMappingParameterSchema  {
	allowMultipleOccurrences: boolean;
	name: string;
	required: boolean;
	type: EnumTypes.attributeType;
}
/*********************************************
* stringKeyAttributeMappingSourceValuePair
**********************************************/
export interface stringKeyAttributeMappingSourceValuePair  {
	key: string;
	value: attributeMappingSource;
}
/*********************************************
* containerFilter
**********************************************/
export interface containerFilter  {
	includedContainers: Array<string>;
}
/*********************************************
* expressionInputObject
**********************************************/
export interface expressionInputObject  {
	definition: objectDefinition;
	properties: stringKeyObjectValuePair[];
}
/*********************************************
* objectDefinition
**********************************************/
export interface objectDefinition  {
	attributes: attributeDefinition[];
	metadata: objectDefinitionMetadataEntry[];
	name: string;
	supportedApis: Array<string>;
}
/*********************************************
* stringKeyObjectValuePair
**********************************************/
export interface stringKeyObjectValuePair  {
	key: string;
}
/*********************************************
* filter
**********************************************/
export interface filter  {
	categoryFilterGroups: filterGroup[];
	groups: filterGroup[];
	inputFilterGroups: filterGroup[];
}
/*********************************************
* filterGroup
**********************************************/
export interface filterGroup  {
	clauses: filterClause[];
	name: string;
}
/*********************************************
* filterClause
**********************************************/
export interface filterClause  {
	operatorName: string;
	sourceOperandName: string;
	targetOperand: filterOperand;
}
/*********************************************
* filterOperand
**********************************************/
export interface filterOperand  {
	values: Array<string>;
}
/*********************************************
* groupFilter
**********************************************/
export interface groupFilter  {
	includedGroups: Array<string>;
}
/*********************************************
* objectDefinitionMetadataEntry
**********************************************/
export interface objectDefinitionMetadataEntry  {
	key: EnumTypes.objectDefinitionMetadata;
	value: string;
}
/*********************************************
* objectMapping
**********************************************/
export interface objectMapping  {
	attributeMappings: attributeMapping[];
	enabled: boolean;
	flowTypes: EnumTypes.objectFlowTypes;
	metadata: objectMappingMetadataEntry[];
	name: string;
	scope: filter;
	sourceObjectName: string;
	targetObjectName: string;
}
/*********************************************
* objectMappingMetadataEntry
**********************************************/
export interface objectMappingMetadataEntry  {
	key: EnumTypes.objectMappingMetadata;
	value: string;
}
/*********************************************
* parseExpressionResponse
**********************************************/
export interface parseExpressionResponse  {
	error: publicError;
	evaluationResult: Array<string>;
	evaluationSucceeded: boolean;
	parsedExpression: attributeMappingSource;
	parsingSucceeded: boolean;
}
/*********************************************
* publicErrorResponse
**********************************************/
export interface publicErrorResponse  {
	error: publicError;
}
/*********************************************
* stringKeyLongValuePair
**********************************************/
export interface stringKeyLongValuePair  {
	key: string;
	value: number;
}
/*********************************************
* synchronizationError
**********************************************/
export interface synchronizationError  {
	code: string;
	message: string;
	tenantActionable: boolean;
}
/*********************************************
* synchronizationJobApplicationParameters
**********************************************/
export interface synchronizationJobApplicationParameters  {
	ruleId: string;
	subjects: synchronizationJobSubject[];
}
/*********************************************
* synchronizationJobSubject
**********************************************/
export interface synchronizationJobSubject  {
	links: synchronizationLinkedObjects;
	objectId: string;
	objectTypeName: string;
}
/*********************************************
* synchronizationJobRestartCriteria
**********************************************/
export interface synchronizationJobRestartCriteria  {
	resetScope: EnumTypes.synchronizationJobRestartScope;
}
/*********************************************
* synchronizationLinkedObjects
**********************************************/
export interface synchronizationLinkedObjects  {
	manager: synchronizationJobSubject;
	members: synchronizationJobSubject[];
	owners: synchronizationJobSubject[];
}
/*********************************************
* synchronizationMetadataEntry
**********************************************/
export interface synchronizationMetadataEntry  {
	key: EnumTypes.synchronizationMetadata;
	value: string;
}
/*********************************************
* synchronizationProgress
**********************************************/
export interface synchronizationProgress  {
	completedUnits: number;
	progressObservationDateTime: any;
	totalUnits: number;
	units: string;
}
/*********************************************
* synchronizationQuarantine
**********************************************/
export interface synchronizationQuarantine  {
	currentBegan: any;
	error: synchronizationError;
	nextAttempt: any;
	reason: EnumTypes.quarantineReason;
	seriesBegan: any;
	seriesCount: number;
}
/*********************************************
* synchronizationRule
**********************************************/
export interface synchronizationRule  {
	containerFilter: containerFilter;
	editable: boolean;
	groupFilter: groupFilter;
	id: string;
	metadata: stringKeyStringValuePair[];
	name: string;
	objectMappings: objectMapping[];
	priority: number;
	sourceDirectoryName: string;
	targetDirectoryName: string;
}
/*********************************************
* synchronizationSchedule
**********************************************/
export interface synchronizationSchedule  {
	expiration: any;
	interval: number;
	state: EnumTypes.synchronizationScheduleState;
}
/*********************************************
* synchronizationSecretKeyStringValuePair
**********************************************/
export interface synchronizationSecretKeyStringValuePair  {
	key: EnumTypes.synchronizationSecret;
	value: string;
}
/*********************************************
* synchronizationStatus
**********************************************/
export interface synchronizationStatus  {
	code: EnumTypes.synchronizationStatusCode;
	countSuccessiveCompleteFailures: number;
	escrowsPruned: boolean;
	lastExecution: synchronizationTaskExecution;
	lastSuccessfulExecution: synchronizationTaskExecution;
	lastSuccessfulExecutionWithExports: synchronizationTaskExecution;
	progress: synchronizationProgress[];
	quarantine: synchronizationQuarantine;
	steadyStateFirstAchievedTime: any;
	steadyStateLastAchievedTime: any;
	synchronizedEntryCountByType: stringKeyLongValuePair[];
	troubleshootingUrl: string;
}
/*********************************************
* synchronizationTaskExecution
**********************************************/
export interface synchronizationTaskExecution  {
	activityIdentifier: string;
	countEntitled: number;
	countEntitledForProvisioning: number;
	countEscrowed: number;
	countEscrowedRaw: number;
	countExported: number;
	countExports: number;
	countImported: number;
	countImportedDeltas: number;
	countImportedReferenceDeltas: number;
	error: synchronizationError;
	state: EnumTypes.synchronizationTaskExecutionResult;
	timeBegan: any;
	timeEnded: any;
}
/*********************************************
* communicationsIdentitySet
**********************************************/
export interface communicationsIdentitySet  {
	applicationInstance: identity;
	assertedIdentity: identity;
	azureCommunicationServicesUser: identity;
	encrypted: identity;
	endpointType: EnumTypes.endpointType;
	guest: identity;
	onPremises: identity;
	phone: identity;
}
/*********************************************
* accessReviewApplyAction
**********************************************/
export interface accessReviewApplyAction  {

}
/*********************************************
* accessReviewHistoryScheduleSettings
**********************************************/
export interface accessReviewHistoryScheduleSettings  {
	recurrence: patternedRecurrence;
	reportRange: string;
}
/*********************************************
* accessReviewScope
**********************************************/
export interface accessReviewScope  {

}
/*********************************************
* accessReviewQueryScope
**********************************************/
export interface accessReviewQueryScope  {
	query: string;
	queryRoot: string;
	queryType: string;
}
/*********************************************
* accessReviewInactiveUsersQueryScope
**********************************************/
export interface accessReviewInactiveUsersQueryScope  {
	inactiveDuration: number;
}
/*********************************************
* accessReviewInstanceDecisionItemResource
**********************************************/
export interface accessReviewInstanceDecisionItemResource  {
	displayName: string;
	id: string;
	type: string;
}
/*********************************************
* accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource
**********************************************/
export interface accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource  {
	accessPackageDisplayName: string;
	accessPackageId: string;
}
/*********************************************
* accessReviewInstanceDecisionItemAzureRoleResource
**********************************************/
export interface accessReviewInstanceDecisionItemAzureRoleResource  {
	scope: accessReviewInstanceDecisionItemResource;
}
/*********************************************
* accessReviewInstanceDecisionItemServicePrincipalResource
**********************************************/
export interface accessReviewInstanceDecisionItemServicePrincipalResource  {
	appId: string;
}
/*********************************************
* accessReviewNotificationRecipientItem
**********************************************/
export interface accessReviewNotificationRecipientItem  {
	notificationRecipientScope: accessReviewNotificationRecipientScope;
	notificationTemplateType: string;
}
/*********************************************
* accessReviewNotificationRecipientScope
**********************************************/
export interface accessReviewNotificationRecipientScope  {

}
/*********************************************
* accessReviewNotificationRecipientQueryScope
**********************************************/
export interface accessReviewNotificationRecipientQueryScope  {
	query: string;
	queryRoot: string;
	queryType: string;
}
/*********************************************
* accessReviewRecommendationInsightSetting
**********************************************/
export interface accessReviewRecommendationInsightSetting  {

}
/*********************************************
* accessReviewReviewerScope
**********************************************/
export interface accessReviewReviewerScope  {
	query: string;
	queryRoot: string;
	queryType: string;
}
/*********************************************
* accessReviewScheduleSettings
**********************************************/
export interface accessReviewScheduleSettings  {
	applyActions: accessReviewApplyAction[];
	autoApplyDecisionsEnabled: boolean;
	decisionHistoriesForReviewersEnabled: boolean;
	defaultDecision: string;
	defaultDecisionEnabled: boolean;
	instanceDurationInDays: number;
	justificationRequiredOnApproval: boolean;
	mailNotificationsEnabled: boolean;
	recommendationInsightSettings: accessReviewRecommendationInsightSetting[];
	recommendationLookBackDuration: number;
	recommendationsEnabled: boolean;
	recurrence: patternedRecurrence;
	reminderNotificationsEnabled: boolean;
}
/*********************************************
* accessReviewStageSettings
**********************************************/
export interface accessReviewStageSettings  {
	decisionsThatWillMoveToNextStage: Array<string>;
	dependsOn: Array<string>;
	durationInDays: number;
	fallbackReviewers: accessReviewReviewerScope[];
	recommendationInsightSettings: accessReviewRecommendationInsightSetting[];
	recommendationsEnabled: boolean;
	reviewers: accessReviewReviewerScope[];
	stageId: string;
}
/*********************************************
* appConsentRequestScope
**********************************************/
export interface appConsentRequestScope  {
	displayName: string;
}
/*********************************************
* disableAndDeleteUserApplyAction
**********************************************/
export interface disableAndDeleteUserApplyAction  {

}
/*********************************************
* groupPeerOutlierRecommendationInsightSettings
**********************************************/
export interface groupPeerOutlierRecommendationInsightSettings  {

}
/*********************************************
* principalResourceMembershipsScope
**********************************************/
export interface principalResourceMembershipsScope  {
	principalScopes: accessReviewScope[];
	resourceScopes: accessReviewScope[];
}
/*********************************************
* removeAccessApplyAction
**********************************************/
export interface removeAccessApplyAction  {

}
/*********************************************
* servicePrincipalIdentity
**********************************************/
export interface servicePrincipalIdentity  {
	appId: string;
}
/*********************************************
* userLastSignInRecommendationInsightSetting
**********************************************/
export interface userLastSignInRecommendationInsightSetting  {
	recommendationLookBackDuration: number;
	signInScope: EnumTypes.userSignInRecommendationScope;
}
/*********************************************
* agreementFileData
**********************************************/
export interface agreementFileData  {
	data: any;
}
/*********************************************
* termsExpiration
**********************************************/
export interface termsExpiration  {
	frequency: number;
	startDateTime: any;
}
/*********************************************
* conditionalAccessSessionControl
**********************************************/
export interface conditionalAccessSessionControl  {
	isEnabled: boolean;
}
/*********************************************
* applicationEnforcedRestrictionsSessionControl
**********************************************/
export interface applicationEnforcedRestrictionsSessionControl  {

}
/*********************************************
* authenticationStrengthUsage
**********************************************/
export interface authenticationStrengthUsage  {

}
/*********************************************
* cloudAppSecuritySessionControl
**********************************************/
export interface cloudAppSecuritySessionControl  {
	cloudAppSecurityType: EnumTypes.cloudAppSecuritySessionControlType;
}
/*********************************************
* conditionalAccessExternalTenants
**********************************************/
export interface conditionalAccessExternalTenants  {
	membershipKind: EnumTypes.conditionalAccessExternalTenantsMembershipKind;
}
/*********************************************
* conditionalAccessAllExternalTenants
**********************************************/
export interface conditionalAccessAllExternalTenants  {

}
/*********************************************
* conditionalAccessApplications
**********************************************/
export interface conditionalAccessApplications  {
	applicationFilter: conditionalAccessFilter;
	excludeApplications: Array<string>;
	includeApplications: Array<string>;
	includeAuthenticationContextClassReferences: Array<string>;
	includeUserActions: Array<string>;
}
/*********************************************
* conditionalAccessFilter
**********************************************/
export interface conditionalAccessFilter  {
	mode: EnumTypes.filterMode;
	rule: string;
}
/*********************************************
* conditionalAccessAuthenticationFlows
**********************************************/
export interface conditionalAccessAuthenticationFlows  {
	transferMethods: EnumTypes.conditionalAccessTransferMethods;
}
/*********************************************
* conditionalAccessClientApplications
**********************************************/
export interface conditionalAccessClientApplications  {
	excludeServicePrincipals: Array<string>;
	includeServicePrincipals: Array<string>;
	servicePrincipalFilter: conditionalAccessFilter;
}
/*********************************************
* conditionalAccessConditionSet
**********************************************/
export interface conditionalAccessConditionSet  {
	applications: conditionalAccessApplications;
	authenticationFlows: conditionalAccessAuthenticationFlows;
	clientApplications: conditionalAccessClientApplications;
	clientAppTypes: EnumTypes.conditionalAccessClientApp[];
	devices: conditionalAccessDevices;
	insiderRiskLevels: EnumTypes.conditionalAccessInsiderRiskLevels;
	locations: conditionalAccessLocations;
	platforms: conditionalAccessPlatforms;
	servicePrincipalRiskLevels: EnumTypes.riskLevel[];
	signInRiskLevels: EnumTypes.riskLevel[];
	userRiskLevels: EnumTypes.riskLevel[];
	users: conditionalAccessUsers;
}
/*********************************************
* conditionalAccessDevices
**********************************************/
export interface conditionalAccessDevices  {
	deviceFilter: conditionalAccessFilter;
}
/*********************************************
* conditionalAccessLocations
**********************************************/
export interface conditionalAccessLocations  {
	excludeLocations: Array<string>;
	includeLocations: Array<string>;
}
/*********************************************
* conditionalAccessPlatforms
**********************************************/
export interface conditionalAccessPlatforms  {
	excludePlatforms: EnumTypes.conditionalAccessDevicePlatform[];
	includePlatforms: EnumTypes.conditionalAccessDevicePlatform[];
}
/*********************************************
* conditionalAccessUsers
**********************************************/
export interface conditionalAccessUsers  {
	excludeGroups: Array<string>;
	excludeGuestsOrExternalUsers: conditionalAccessGuestsOrExternalUsers;
	excludeRoles: Array<string>;
	excludeUsers: Array<string>;
	includeGroups: Array<string>;
	includeGuestsOrExternalUsers: conditionalAccessGuestsOrExternalUsers;
	includeRoles: Array<string>;
	includeUsers: Array<string>;
}
/*********************************************
* conditionalAccessEnumeratedExternalTenants
**********************************************/
export interface conditionalAccessEnumeratedExternalTenants  {
	members: Array<string>;
}
/*********************************************
* conditionalAccessGrantControls
**********************************************/
export interface conditionalAccessGrantControls  {
	builtInControls: EnumTypes.conditionalAccessGrantControl[];
	customAuthenticationFactors: Array<string>;
	operator: string;
	termsOfUse: Array<string>;
}
/*********************************************
* conditionalAccessGuestsOrExternalUsers
**********************************************/
export interface conditionalAccessGuestsOrExternalUsers  {
	externalTenants: conditionalAccessExternalTenants;
	guestOrExternalUserTypes: EnumTypes.conditionalAccessGuestOrExternalUserTypes;
}
/*********************************************
* conditionalAccessPolicyDetail
**********************************************/
export interface conditionalAccessPolicyDetail  {
	conditions: conditionalAccessConditionSet;
	grantControls: conditionalAccessGrantControls;
	sessionControls: conditionalAccessSessionControls;
}
/*********************************************
* conditionalAccessSessionControls
**********************************************/
export interface conditionalAccessSessionControls  {
	applicationEnforcedRestrictions: applicationEnforcedRestrictionsSessionControl;
	cloudAppSecurity: cloudAppSecuritySessionControl;
	disableResilienceDefaults: boolean;
	persistentBrowser: persistentBrowserSessionControl;
	signInFrequency: signInFrequencySessionControl;
}
/*********************************************
* persistentBrowserSessionControl
**********************************************/
export interface persistentBrowserSessionControl  {
	mode: EnumTypes.persistentBrowserSessionMode;
}
/*********************************************
* signInFrequencySessionControl
**********************************************/
export interface signInFrequencySessionControl  {
	authenticationType: EnumTypes.signInFrequencyAuthenticationType;
	frequencyInterval: EnumTypes.signInFrequencyInterval;
	type: EnumTypes.signinFrequencyType;
	value: number;
}
/*********************************************
* ipRange
**********************************************/
export interface ipRange  {

}
/*********************************************
* iPv4CidrRange
**********************************************/
export interface iPv4CidrRange  {
	cidrAddress: string;
}
/*********************************************
* iPv6CidrRange
**********************************************/
export interface iPv6CidrRange  {
	cidrAddress: string;
}
/*********************************************
* riskServicePrincipalActivity
**********************************************/
export interface riskServicePrincipalActivity  {
	detail: EnumTypes.riskDetail;
	riskEventTypes: Array<string>;
}
/*********************************************
* riskUserActivity
**********************************************/
export interface riskUserActivity  {
	detail: EnumTypes.riskDetail;
	riskEventTypes: Array<string>;
}
/*********************************************
* accessPackageAnswer
**********************************************/
export interface accessPackageAnswer  {
	displayValue: string;
}
/*********************************************
* accessPackageAnswerChoice
**********************************************/
export interface accessPackageAnswerChoice  {
	actualValue: string;
	localizations: accessPackageLocalizedText[];
	text: string;
}
/*********************************************
* accessPackageLocalizedText
**********************************************/
export interface accessPackageLocalizedText  {
	languageCode: string;
	text: string;
}
/*********************************************
* accessPackageAnswerString
**********************************************/
export interface accessPackageAnswerString  {
	value: string;
}
/*********************************************
* accessPackageApprovalStage
**********************************************/
export interface accessPackageApprovalStage  {
	durationBeforeAutomaticDenial: number;
	durationBeforeEscalation: number;
	escalationApprovers: subjectSet[];
	fallbackEscalationApprovers: subjectSet[];
	fallbackPrimaryApprovers: subjectSet[];
	isApproverJustificationRequired: boolean;
	isEscalationEnabled: boolean;
	primaryApprovers: subjectSet[];
}
/*********************************************
* accessPackageAssignmentApprovalSettings
**********************************************/
export interface accessPackageAssignmentApprovalSettings  {
	isApprovalRequiredForAdd: boolean;
	isApprovalRequiredForUpdate: boolean;
	stages: accessPackageApprovalStage[];
}
/*********************************************
* accessPackageAssignmentRequestCallbackData
**********************************************/
export interface accessPackageAssignmentRequestCallbackData  {
	customExtensionStageInstanceDetail: string;
	customExtensionStageInstanceId: string;
	stage: EnumTypes.accessPackageCustomExtensionStage;
	state: string;
}
/*********************************************
* accessPackageAssignmentRequestorSettings
**********************************************/
export interface accessPackageAssignmentRequestorSettings  {
	allowCustomAssignmentSchedule: boolean;
	enableOnBehalfRequestorsToAddAccess: boolean;
	enableOnBehalfRequestorsToRemoveAccess: boolean;
	enableOnBehalfRequestorsToUpdateAccess: boolean;
	enableTargetsToSelfAddAccess: boolean;
	enableTargetsToSelfRemoveAccess: boolean;
	enableTargetsToSelfUpdateAccess: boolean;
	onBehalfRequestors: subjectSet[];
}
/*********************************************
* accessPackageAssignmentRequestRequirements
**********************************************/
export interface accessPackageAssignmentRequestRequirements  {
	allowCustomAssignmentSchedule: boolean;
	isApprovalRequiredForAdd: boolean;
	isApprovalRequiredForUpdate: boolean;
	policyDescription: string;
	policyDisplayName: string;
	policyId: string;
	schedule: entitlementManagementSchedule;
}
/*********************************************
* entitlementManagementSchedule
**********************************************/
export interface entitlementManagementSchedule  {
	expiration: expirationPattern;
	recurrence: patternedRecurrence;
	startDateTime: any;
}
/*********************************************
* accessPackageAssignmentReviewSettings
**********************************************/
export interface accessPackageAssignmentReviewSettings  {
	expirationBehavior: EnumTypes.accessReviewExpirationBehavior;
	fallbackReviewers: subjectSet[];
	isEnabled: boolean;
	isRecommendationEnabled: boolean;
	isReviewerJustificationRequired: boolean;
	isSelfReview: boolean;
	primaryReviewers: subjectSet[];
	schedule: entitlementManagementSchedule;
}
/*********************************************
* accessPackageAutomaticRequestSettings
**********************************************/
export interface accessPackageAutomaticRequestSettings  {
	gracePeriodBeforeAccessRemoval: number;
	removeAccessWhenTargetLeavesAllowedTargets: boolean;
	requestAccessForAllowedTargets: boolean;
}
/*********************************************
* accessPackageResourceAttribute
**********************************************/
export interface accessPackageResourceAttribute  {
	destination: accessPackageResourceAttributeDestination;
	isEditable: boolean;
	isPersistedOnAssignmentRemoval: boolean;
	name: string;
	source: accessPackageResourceAttributeSource;
}
/*********************************************
* accessPackageResourceAttributeDestination
**********************************************/
export interface accessPackageResourceAttributeDestination  {

}
/*********************************************
* accessPackageResourceAttributeSource
**********************************************/
export interface accessPackageResourceAttributeSource  {

}
/*********************************************
* accessPackageResourceAttributeQuestion
**********************************************/
export interface accessPackageResourceAttributeQuestion  {

}
/*********************************************
* accessPackageUserDirectoryAttributeStore
**********************************************/
export interface accessPackageUserDirectoryAttributeStore  {

}
/*********************************************
* attributeRuleMembers
**********************************************/
export interface attributeRuleMembers  {
	description: string;
	membershipRule: string;
}
/*********************************************
* connectedOrganizationMembers
**********************************************/
export interface connectedOrganizationMembers  {
	connectedOrganizationId: string;
	description: string;
}
/*********************************************
* connectionInfo
**********************************************/
export interface connectionInfo  {
	url: string;
}
/*********************************************
* customExtensionCalloutInstance
**********************************************/
export interface customExtensionCalloutInstance  {
	customExtensionId: string;
	detail: string;
	externalCorrelationId: string;
	id: string;
	status: EnumTypes.customExtensionCalloutInstanceStatus;
}
/*********************************************
* expirationPattern
**********************************************/
export interface expirationPattern  {
	duration: number;
	endDateTime: any;
	type: EnumTypes.expirationPatternType;
}
/*********************************************
* externalSponsors
**********************************************/
export interface externalSponsors  {

}
/*********************************************
* groupMembers
**********************************************/
export interface groupMembers  {
	description: string;
	groupId: string;
}
/*********************************************
* internalSponsors
**********************************************/
export interface internalSponsors  {

}
/*********************************************
* requestorManager
**********************************************/
export interface requestorManager  {
	managerLevel: number;
}
/*********************************************
* singleServicePrincipal
**********************************************/
export interface singleServicePrincipal  {
	description: string;
	servicePrincipalId: string;
}
/*********************************************
* singleUser
**********************************************/
export interface singleUser  {
	description: string;
	userId: string;
}
/*********************************************
* targetApplicationOwners
**********************************************/
export interface targetApplicationOwners  {

}
/*********************************************
* targetManager
**********************************************/
export interface targetManager  {
	managerLevel: number;
}
/*********************************************
* targetUserSponsors
**********************************************/
export interface targetUserSponsors  {

}
/*********************************************
* identitySource
**********************************************/
export interface identitySource  {

}
/*********************************************
* azureActiveDirectoryTenant
**********************************************/
export interface azureActiveDirectoryTenant  {
	displayName: string;
	tenantId: string;
}
/*********************************************
* crossCloudAzureActiveDirectoryTenant
**********************************************/
export interface crossCloudAzureActiveDirectoryTenant  {
	cloudInstance: string;
	displayName: string;
	tenantId: string;
}
/*********************************************
* domainIdentitySource
**********************************************/
export interface domainIdentitySource  {
	displayName: string;
	domainName: string;
}
/*********************************************
* externalDomainFederation
**********************************************/
export interface externalDomainFederation  {
	displayName: string;
	domainName: string;
	issuerUri: string;
}
/*********************************************
* socialIdentitySource
**********************************************/
export interface socialIdentitySource  {
	displayName: string;
	socialIdentitySourceType: EnumTypes.socialIdentitySourceType;
}
/*********************************************
* deviceAndAppManagementAssignmentTarget
**********************************************/
export interface deviceAndAppManagementAssignmentTarget  {

}
/*********************************************
* allDevicesAssignmentTarget
**********************************************/
export interface allDevicesAssignmentTarget  {

}
/*********************************************
* allLicensedUsersAssignmentTarget
**********************************************/
export interface allLicensedUsersAssignmentTarget  {

}
/*********************************************
* androidMinimumOperatingSystem
**********************************************/
export interface androidMinimumOperatingSystem  {
	v10_0: boolean;
	v11_0: boolean;
	v4_0: boolean;
	v4_0_3: boolean;
	v4_1: boolean;
	v4_2: boolean;
	v4_3: boolean;
	v4_4: boolean;
	v5_0: boolean;
	v5_1: boolean;
	v6_0: boolean;
	v7_0: boolean;
	v7_1: boolean;
	v8_0: boolean;
	v8_1: boolean;
	v9_0: boolean;
}
/*********************************************
* appConfigurationSettingItem
**********************************************/
export interface appConfigurationSettingItem  {
	appConfigKey: string;
	appConfigKeyType: EnumTypes.mdmAppConfigKeyType;
	appConfigKeyValue: string;
}
/*********************************************
* configurationManagerCollectionAssignmentTarget
**********************************************/
export interface configurationManagerCollectionAssignmentTarget  {
	collectionId: string;
}
/*********************************************
* groupAssignmentTarget
**********************************************/
export interface groupAssignmentTarget  {
	groupId: string;
}
/*********************************************
* exclusionGroupAssignmentTarget
**********************************************/
export interface exclusionGroupAssignmentTarget  {

}
/*********************************************
* fileEncryptionInfo
**********************************************/
export interface fileEncryptionInfo  {
	encryptionKey: any;
	fileDigest: any;
	fileDigestAlgorithm: string;
	initializationVector: any;
	mac: any;
	macKey: any;
	profileIdentifier: string;
}
/*********************************************
* iosDeviceType
**********************************************/
export interface iosDeviceType  {
	iPad: boolean;
	iPhoneAndIPod: boolean;
}
/*********************************************
* mobileAppAssignmentSettings
**********************************************/
export interface mobileAppAssignmentSettings  {

}
/*********************************************
* iosLobAppAssignmentSettings
**********************************************/
export interface iosLobAppAssignmentSettings  {
	isRemovable: boolean;
	uninstallOnDeviceRemoval: boolean;
	vpnConfigurationId: string;
}
/*********************************************
* iosMinimumOperatingSystem
**********************************************/
export interface iosMinimumOperatingSystem  {
	v10_0: boolean;
	v11_0: boolean;
	v12_0: boolean;
	v13_0: boolean;
	v14_0: boolean;
	v15_0: boolean;
	v8_0: boolean;
	v9_0: boolean;
}
/*********************************************
* iosStoreAppAssignmentSettings
**********************************************/
export interface iosStoreAppAssignmentSettings  {
	isRemovable: boolean;
	uninstallOnDeviceRemoval: boolean;
	vpnConfigurationId: string;
}
/*********************************************
* iosVppAppAssignmentSettings
**********************************************/
export interface iosVppAppAssignmentSettings  {
	useDeviceLicensing: boolean;
	vpnConfigurationId: string;
}
/*********************************************
* macOSIncludedApp
**********************************************/
export interface macOSIncludedApp  {
	bundleId: string;
	bundleVersion: string;
}
/*********************************************
* macOsLobAppAssignmentSettings
**********************************************/
export interface macOsLobAppAssignmentSettings  {
	uninstallOnDeviceRemoval: boolean;
}
/*********************************************
* macOSLobChildApp
**********************************************/
export interface macOSLobChildApp  {
	buildNumber: string;
	bundleId: string;
	versionNumber: string;
}
/*********************************************
* macOSMinimumOperatingSystem
**********************************************/
export interface macOSMinimumOperatingSystem  {
	v10_10: boolean;
	v10_11: boolean;
	v10_12: boolean;
	v10_13: boolean;
	v10_14: boolean;
	v10_15: boolean;
	v10_7: boolean;
	v10_8: boolean;
	v10_9: boolean;
	v11_0: boolean;
	v12_0: boolean;
	v13_0: boolean;
}
/*********************************************
* microsoftStoreForBusinessAppAssignmentSettings
**********************************************/
export interface microsoftStoreForBusinessAppAssignmentSettings  {
	useDeviceContext: boolean;
}
/*********************************************
* mimeContent
**********************************************/
export interface mimeContent  {
	type: string;
	value: any;
}
/*********************************************
* mobileAppInstallTimeSettings
**********************************************/
export interface mobileAppInstallTimeSettings  {
	deadlineDateTime: any;
	startDateTime: any;
	useLocalTime: boolean;
}
/*********************************************
* vppLicensingType
**********************************************/
export interface vppLicensingType  {
	supportsDeviceLicensing: boolean;
	supportsUserLicensing: boolean;
}
/*********************************************
* win32LobAppAssignmentSettings
**********************************************/
export interface win32LobAppAssignmentSettings  {
	autoUpdateSettings: win32LobAppAutoUpdateSettings;
	deliveryOptimizationPriority: EnumTypes.win32LobAppDeliveryOptimizationPriority;
	installTimeSettings: mobileAppInstallTimeSettings;
	notifications: EnumTypes.win32LobAppNotification;
	restartSettings: win32LobAppRestartSettings;
}
/*********************************************
* win32LobAppAutoUpdateSettings
**********************************************/
export interface win32LobAppAutoUpdateSettings  {
	autoUpdateSupersededAppsState: EnumTypes.win32LobAutoUpdateSupersededAppsState;
}
/*********************************************
* win32LobAppRestartSettings
**********************************************/
export interface win32LobAppRestartSettings  {
	countdownDisplayBeforeRestartInMinutes: number;
	gracePeriodInMinutes: number;
	restartNotificationSnoozeDurationInMinutes: number;
}
/*********************************************
* win32LobAppRule
**********************************************/
export interface win32LobAppRule  {
	ruleType: EnumTypes.win32LobAppRuleType;
}
/*********************************************
* win32LobAppFileSystemRule
**********************************************/
export interface win32LobAppFileSystemRule  {
	check32BitOn64System: boolean;
	comparisonValue: string;
	fileOrFolderName: string;
	operationType: EnumTypes.win32LobAppFileSystemOperationType;
	operator: EnumTypes.win32LobAppRuleOperator;
	path: string;
}
/*********************************************
* win32LobAppInstallExperience
**********************************************/
export interface win32LobAppInstallExperience  {
	deviceRestartBehavior: EnumTypes.win32LobAppRestartBehavior;
	runAsAccount: EnumTypes.runAsAccountType;
}
/*********************************************
* win32LobAppMsiInformation
**********************************************/
export interface win32LobAppMsiInformation  {
	packageType: EnumTypes.win32LobAppMsiPackageType;
	productCode: string;
	productName: string;
	productVersion: string;
	publisher: string;
	requiresReboot: boolean;
	upgradeCode: string;
}
/*********************************************
* win32LobAppPowerShellScriptRule
**********************************************/
export interface win32LobAppPowerShellScriptRule  {
	comparisonValue: string;
	displayName: string;
	enforceSignatureCheck: boolean;
	operationType: EnumTypes.win32LobAppPowerShellScriptRuleOperationType;
	operator: EnumTypes.win32LobAppRuleOperator;
	runAs32Bit: boolean;
	runAsAccount: EnumTypes.runAsAccountType;
	scriptContent: string;
}
/*********************************************
* win32LobAppProductCodeRule
**********************************************/
export interface win32LobAppProductCodeRule  {
	productCode: string;
	productVersion: string;
	productVersionOperator: EnumTypes.win32LobAppRuleOperator;
}
/*********************************************
* win32LobAppRegistryRule
**********************************************/
export interface win32LobAppRegistryRule  {
	check32BitOn64System: boolean;
	comparisonValue: string;
	keyPath: string;
	operationType: EnumTypes.win32LobAppRegistryRuleOperationType;
	operator: EnumTypes.win32LobAppRuleOperator;
	valueName: string;
}
/*********************************************
* win32LobAppReturnCode
**********************************************/
export interface win32LobAppReturnCode  {
	returnCode: number;
	type: EnumTypes.win32LobAppReturnCodeType;
}
/*********************************************
* windowsAppXAppAssignmentSettings
**********************************************/
export interface windowsAppXAppAssignmentSettings  {
	useDeviceContext: boolean;
}
/*********************************************
* windowsMinimumOperatingSystem
**********************************************/
export interface windowsMinimumOperatingSystem  {
	v10_0: boolean;
	v8_0: boolean;
	v8_1: boolean;
}
/*********************************************
* windowsUniversalAppXAppAssignmentSettings
**********************************************/
export interface windowsUniversalAppXAppAssignmentSettings  {
	useDeviceContext: boolean;
}
/*********************************************
* auditActor
**********************************************/
export interface auditActor  {
	applicationDisplayName: string;
	applicationId: string;
	auditActorType: string;
	ipAddress: string;
	servicePrincipalName: string;
	userId: string;
	userPermissions: Array<string>;
	userPrincipalName: string;
}
/*********************************************
* auditProperty
**********************************************/
export interface auditProperty  {
	displayName: string;
	newValue: string;
	oldValue: string;
}
/*********************************************
* auditResource
**********************************************/
export interface auditResource  {
	auditResourceType: string;
	displayName: string;
	modifiedProperties: auditProperty[];
	resourceId: string;
}
/*********************************************
* appListItem
**********************************************/
export interface appListItem  {
	appId: string;
	appStoreUrl: string;
	name: string;
	publisher: string;
}
/*********************************************
* bitLockerRemovableDrivePolicy
**********************************************/
export interface bitLockerRemovableDrivePolicy  {
	blockCrossOrganizationWriteAccess: boolean;
	encryptionMethod: EnumTypes.bitLockerEncryptionMethod;
	requireEncryptionForWriteAccess: boolean;
}
/*********************************************
* defenderDetectedMalwareActions
**********************************************/
export interface defenderDetectedMalwareActions  {
	highSeverity: EnumTypes.defenderThreatAction;
	lowSeverity: EnumTypes.defenderThreatAction;
	moderateSeverity: EnumTypes.defenderThreatAction;
	severeSeverity: EnumTypes.defenderThreatAction;
}
/*********************************************
* deviceCompliancePolicySettingState
**********************************************/
export interface deviceCompliancePolicySettingState  {
	currentValue: string;
	errorCode: number;
	errorDescription: string;
	instanceDisplayName: string;
	setting: string;
	settingName: string;
	sources: settingSource[];
	state: EnumTypes.complianceStatus;
	userEmail: string;
	userId: string;
	userName: string;
	userPrincipalName: string;
}
/*********************************************
* settingSource
**********************************************/
export interface settingSource  {
	displayName: string;
	id: string;
	sourceType: EnumTypes.settingSourceType;
}
/*********************************************
* deviceConfigurationSettingState
**********************************************/
export interface deviceConfigurationSettingState  {
	currentValue: string;
	errorCode: number;
	errorDescription: string;
	instanceDisplayName: string;
	setting: string;
	settingName: string;
	sources: settingSource[];
	state: EnumTypes.complianceStatus;
	userEmail: string;
	userId: string;
	userName: string;
	userPrincipalName: string;
}
/*********************************************
* edgeSearchEngineBase
**********************************************/
export interface edgeSearchEngineBase  {

}
/*********************************************
* edgeSearchEngine
**********************************************/
export interface edgeSearchEngine  {
	edgeSearchEngineType: EnumTypes.edgeSearchEngineType;
}
/*********************************************
* edgeSearchEngineCustom
**********************************************/
export interface edgeSearchEngineCustom  {
	edgeSearchEngineOpenSearchXmlUrl: string;
}
/*********************************************
* iosHomeScreenItem
**********************************************/
export interface iosHomeScreenItem  {
	displayName: string;
}
/*********************************************
* iosHomeScreenApp
**********************************************/
export interface iosHomeScreenApp  {
	bundleID: string;
}
/*********************************************
* iosHomeScreenFolder
**********************************************/
export interface iosHomeScreenFolder  {
	pages: iosHomeScreenFolderPage[];
}
/*********************************************
* iosHomeScreenFolderPage
**********************************************/
export interface iosHomeScreenFolderPage  {
	apps: iosHomeScreenApp[];
	displayName: string;
}
/*********************************************
* iosHomeScreenPage
**********************************************/
export interface iosHomeScreenPage  {
	displayName: string;
	icons: iosHomeScreenItem[];
}
/*********************************************
* iosNetworkUsageRule
**********************************************/
export interface iosNetworkUsageRule  {
	cellularDataBlocked: boolean;
	cellularDataBlockWhenRoaming: boolean;
	managedApps: appListItem[];
}
/*********************************************
* iosNotificationSettings
**********************************************/
export interface iosNotificationSettings  {
	alertType: EnumTypes.iosNotificationAlertType;
	appName: string;
	badgesEnabled: boolean;
	bundleID: string;
	enabled: boolean;
	publisher: string;
	showInNotificationCenter: boolean;
	showOnLockScreen: boolean;
	soundsEnabled: boolean;
}
/*********************************************
* mediaContentRatingAustralia
**********************************************/
export interface mediaContentRatingAustralia  {
	movieRating: EnumTypes.ratingAustraliaMoviesType;
	tvRating: EnumTypes.ratingAustraliaTelevisionType;
}
/*********************************************
* mediaContentRatingCanada
**********************************************/
export interface mediaContentRatingCanada  {
	movieRating: EnumTypes.ratingCanadaMoviesType;
	tvRating: EnumTypes.ratingCanadaTelevisionType;
}
/*********************************************
* mediaContentRatingFrance
**********************************************/
export interface mediaContentRatingFrance  {
	movieRating: EnumTypes.ratingFranceMoviesType;
	tvRating: EnumTypes.ratingFranceTelevisionType;
}
/*********************************************
* mediaContentRatingGermany
**********************************************/
export interface mediaContentRatingGermany  {
	movieRating: EnumTypes.ratingGermanyMoviesType;
	tvRating: EnumTypes.ratingGermanyTelevisionType;
}
/*********************************************
* mediaContentRatingIreland
**********************************************/
export interface mediaContentRatingIreland  {
	movieRating: EnumTypes.ratingIrelandMoviesType;
	tvRating: EnumTypes.ratingIrelandTelevisionType;
}
/*********************************************
* mediaContentRatingJapan
**********************************************/
export interface mediaContentRatingJapan  {
	movieRating: EnumTypes.ratingJapanMoviesType;
	tvRating: EnumTypes.ratingJapanTelevisionType;
}
/*********************************************
* mediaContentRatingNewZealand
**********************************************/
export interface mediaContentRatingNewZealand  {
	movieRating: EnumTypes.ratingNewZealandMoviesType;
	tvRating: EnumTypes.ratingNewZealandTelevisionType;
}
/*********************************************
* mediaContentRatingUnitedKingdom
**********************************************/
export interface mediaContentRatingUnitedKingdom  {
	movieRating: EnumTypes.ratingUnitedKingdomMoviesType;
	tvRating: EnumTypes.ratingUnitedKingdomTelevisionType;
}
/*********************************************
* mediaContentRatingUnitedStates
**********************************************/
export interface mediaContentRatingUnitedStates  {
	movieRating: EnumTypes.ratingUnitedStatesMoviesType;
	tvRating: EnumTypes.ratingUnitedStatesTelevisionType;
}
/*********************************************
* omaSetting
**********************************************/
export interface omaSetting  {
	description: string;
	displayName: string;
	omaUri: string;
}
/*********************************************
* omaSettingBase64
**********************************************/
export interface omaSettingBase64  {
	fileName: string;
	value: string;
}
/*********************************************
* omaSettingBoolean
**********************************************/
export interface omaSettingBoolean  {
	value: boolean;
}
/*********************************************
* omaSettingDateTime
**********************************************/
export interface omaSettingDateTime  {
	value: any;
}
/*********************************************
* omaSettingFloatingPoint
**********************************************/
export interface omaSettingFloatingPoint  {
	value: any;
}
/*********************************************
* omaSettingInteger
**********************************************/
export interface omaSettingInteger  {
	value: number;
}
/*********************************************
* omaSettingString
**********************************************/
export interface omaSettingString  {
	value: string;
}
/*********************************************
* omaSettingStringXml
**********************************************/
export interface omaSettingStringXml  {
	fileName: string;
	value: any;
}
/*********************************************
* report
**********************************************/
export interface report  {
	content: any;
}
/*********************************************
* sharedPCAccountManagerPolicy
**********************************************/
export interface sharedPCAccountManagerPolicy  {
	accountDeletionPolicy: EnumTypes.sharedPCAccountDeletionPolicyType;
	cacheAccountsAboveDiskFreePercentage: number;
	inactiveThresholdDays: number;
	removeAccountsBelowDiskFreePercentage: number;
}
/*********************************************
* windows10NetworkProxyServer
**********************************************/
export interface windows10NetworkProxyServer  {
	address: string;
	exceptions: Array<string>;
	useForLocalAddresses: boolean;
}
/*********************************************
* windowsFirewallNetworkProfile
**********************************************/
export interface windowsFirewallNetworkProfile  {
	authorizedApplicationRulesFromGroupPolicyMerged: boolean;
	connectionSecurityRulesFromGroupPolicyMerged: boolean;
	firewallEnabled: EnumTypes.stateManagementSetting;
	globalPortRulesFromGroupPolicyMerged: boolean;
	inboundConnectionsBlocked: boolean;
	inboundNotificationsBlocked: boolean;
	incomingTrafficBlocked: boolean;
	outboundConnectionsBlocked: boolean;
	policyRulesFromGroupPolicyMerged: boolean;
	securedPacketExemptionAllowed: boolean;
	stealthModeBlocked: boolean;
	unicastResponsesToMulticastBroadcastsBlocked: boolean;
}
/*********************************************
* windowsUpdateInstallScheduleType
**********************************************/
export interface windowsUpdateInstallScheduleType  {

}
/*********************************************
* windowsUpdateActiveHoursInstall
**********************************************/
export interface windowsUpdateActiveHoursInstall  {
	activeHoursEnd: any;
	activeHoursStart: any;
}
/*********************************************
* windowsUpdateScheduledInstall
**********************************************/
export interface windowsUpdateScheduledInstall  {
	scheduledInstallDay: EnumTypes.weeklySchedule;
	scheduledInstallTime: any;
}
/*********************************************
* configurationManagerClientEnabledFeatures
**********************************************/
export interface configurationManagerClientEnabledFeatures  {
	compliancePolicy: boolean;
	deviceConfiguration: boolean;
	inventory: boolean;
	modernApps: boolean;
	resourceAccess: boolean;
	windowsUpdateForBusiness: boolean;
}
/*********************************************
* deviceActionResult
**********************************************/
export interface deviceActionResult  {
	actionName: string;
	actionState: EnumTypes.actionState;
	lastUpdatedDateTime: any;
	startDateTime: any;
}
/*********************************************
* deviceHealthAttestationState
**********************************************/
export interface deviceHealthAttestationState  {
	attestationIdentityKey: string;
	bitLockerStatus: string;
	bootAppSecurityVersion: string;
	bootDebugging: string;
	bootManagerSecurityVersion: string;
	bootManagerVersion: string;
	bootRevisionListInfo: string;
	codeIntegrity: string;
	codeIntegrityCheckVersion: string;
	codeIntegrityPolicy: string;
	contentNamespaceUrl: string;
	contentVersion: string;
	dataExcutionPolicy: string;
	deviceHealthAttestationStatus: string;
	earlyLaunchAntiMalwareDriverProtection: string;
	healthAttestationSupportedStatus: string;
	healthStatusMismatchInfo: string;
	issuedDateTime: any;
	lastUpdateDateTime: string;
	operatingSystemKernelDebugging: string;
	operatingSystemRevListInfo: string;
	pcr0: string;
	pcrHashAlgorithm: string;
	resetCount: number;
	restartCount: number;
	safeMode: string;
	secureBoot: string;
	secureBootConfigurationPolicyFingerPrint: string;
	testSigning: string;
	tpmVersion: string;
	virtualSecureMode: string;
	windowsPE: string;
}
/*********************************************
* complianceManagementPartnerAssignment
**********************************************/
export interface complianceManagementPartnerAssignment  {
	target: deviceAndAppManagementAssignmentTarget;
}
/*********************************************
* deviceAndAppManagementData
**********************************************/
export interface deviceAndAppManagementData  {
	content: any;
}
/*********************************************
* deviceEnrollmentPlatformRestriction
**********************************************/
export interface deviceEnrollmentPlatformRestriction  {
	osMaximumVersion: string;
	osMinimumVersion: string;
	personalDeviceEnrollmentBlocked: boolean;
	platformBlocked: boolean;
}
/*********************************************
* deviceManagementPartnerAssignment
**********************************************/
export interface deviceManagementPartnerAssignment  {
	target: deviceAndAppManagementAssignmentTarget;
}
/*********************************************
* rgbColor
**********************************************/
export interface rgbColor  {
	b: any;
	g: any;
	r: any;
}
/*********************************************
* appLogCollectionDownloadDetails
**********************************************/
export interface appLogCollectionDownloadDetails  {
	appLogDecryptionAlgorithm: EnumTypes.appLogDecryptionAlgorithm;
	decryptionKey: string;
	downloadUrl: string;
}
/*********************************************
* deleteUserFromSharedAppleDeviceActionResult
**********************************************/
export interface deleteUserFromSharedAppleDeviceActionResult  {
	userPrincipalName: string;
}
/*********************************************
* deviceExchangeAccessStateSummary
**********************************************/
export interface deviceExchangeAccessStateSummary  {
	allowedDeviceCount: number;
	blockedDeviceCount: number;
	quarantinedDeviceCount: number;
	unavailableDeviceCount: number;
	unknownDeviceCount: number;
}
/*********************************************
* deviceGeoLocation
**********************************************/
export interface deviceGeoLocation  {
	altitude: number;
	heading: number;
	horizontalAccuracy: number;
	lastCollectedDateTime: any;
	latitude: number;
	longitude: number;
	speed: number;
	verticalAccuracy: number;
}
/*********************************************
* deviceOperatingSystemSummary
**********************************************/
export interface deviceOperatingSystemSummary  {
	androidCorporateWorkProfileCount: number;
	androidCount: number;
	androidDedicatedCount: number;
	androidDeviceAdminCount: number;
	androidFullyManagedCount: number;
	androidWorkProfileCount: number;
	configMgrDeviceCount: number;
	iosCount: number;
	macOSCount: number;
	unknownCount: number;
	windowsCount: number;
	windowsMobileCount: number;
}
/*********************************************
* userExperienceAnalyticsInsightValue
**********************************************/
export interface userExperienceAnalyticsInsightValue  {

}
/*********************************************
* insightValueDouble
**********************************************/
export interface insightValueDouble  {
	value: number;
}
/*********************************************
* insightValueInt
**********************************************/
export interface insightValueInt  {
	value: number;
}
/*********************************************
* locateDeviceActionResult
**********************************************/
export interface locateDeviceActionResult  {
	deviceLocation: deviceGeoLocation;
}
/*********************************************
* osVersionCount
**********************************************/
export interface osVersionCount  {
	deviceCount: number;
	lastUpdateDateTime: any;
	osVersion: string;
}
/*********************************************
* remoteLockActionResult
**********************************************/
export interface remoteLockActionResult  {
	unlockPin: string;
}
/*********************************************
* resetPasscodeActionResult
**********************************************/
export interface resetPasscodeActionResult  {
	errorCode: number;
	passcode: string;
}
/*********************************************
* rotateBitLockerKeysDeviceActionResult
**********************************************/
export interface rotateBitLockerKeysDeviceActionResult  {
	errorCode: number;
}
/*********************************************
* updateWindowsDeviceAccountActionParameter
**********************************************/
export interface updateWindowsDeviceAccountActionParameter  {
	calendarSyncEnabled: boolean;
	deviceAccount: windowsDeviceAccount;
	deviceAccountEmail: string;
	exchangeServer: string;
	passwordRotationEnabled: boolean;
	sessionInitiationProtocalAddress: string;
}
/*********************************************
* windowsDeviceAccount
**********************************************/
export interface windowsDeviceAccount  {
	password: string;
}
/*********************************************
* userExperienceAnalyticsAutopilotDevicesSummary
**********************************************/
export interface userExperienceAnalyticsAutopilotDevicesSummary  {
	devicesNotAutopilotRegistered: number;
	devicesWithoutAutopilotProfileAssigned: number;
	totalWindows10DevicesWithoutTenantAttached: number;
}
/*********************************************
* userExperienceAnalyticsCloudIdentityDevicesSummary
**********************************************/
export interface userExperienceAnalyticsCloudIdentityDevicesSummary  {
	deviceWithoutCloudIdentityCount: number;
}
/*********************************************
* userExperienceAnalyticsCloudManagementDevicesSummary
**********************************************/
export interface userExperienceAnalyticsCloudManagementDevicesSummary  {
	coManagedDeviceCount: number;
	intuneDeviceCount: number;
	tenantAttachDeviceCount: number;
}
/*********************************************
* userExperienceAnalyticsInsight
**********************************************/
export interface userExperienceAnalyticsInsight  {
	insightId: string;
	severity: EnumTypes.userExperienceAnalyticsInsightSeverity;
	userExperienceAnalyticsMetricId: string;
	values: userExperienceAnalyticsInsightValue[];
}
/*********************************************
* userExperienceAnalyticsWindows10DevicesSummary
**********************************************/
export interface userExperienceAnalyticsWindows10DevicesSummary  {
	unsupportedOSversionDeviceCount: number;
}
/*********************************************
* userExperienceAnalyticsWorkFromAnywhereDevicesSummary
**********************************************/
export interface userExperienceAnalyticsWorkFromAnywhereDevicesSummary  {
	autopilotDevicesSummary: userExperienceAnalyticsAutopilotDevicesSummary;
	cloudIdentityDevicesSummary: userExperienceAnalyticsCloudIdentityDevicesSummary;
	cloudManagementDevicesSummary: userExperienceAnalyticsCloudManagementDevicesSummary;
	coManagedDevices: number;
	devicesNotAutopilotRegistered: number;
	devicesWithoutAutopilotProfileAssigned: number;
	devicesWithoutCloudIdentity: number;
	intuneDevices: number;
	tenantAttachDevices: number;
	totalDevices: number;
	unsupportedOSversionDevices: number;
	windows10Devices: number;
	windows10DevicesSummary: userExperienceAnalyticsWindows10DevicesSummary;
	windows10DevicesWithoutTenantAttach: number;
}
/*********************************************
* windowsDefenderScanActionResult
**********************************************/
export interface windowsDefenderScanActionResult  {
	scanType: string;
}
/*********************************************
* windowsDeviceADAccount
**********************************************/
export interface windowsDeviceADAccount  {
	domainName: string;
	userName: string;
}
/*********************************************
* windowsDeviceAzureADAccount
**********************************************/
export interface windowsDeviceAzureADAccount  {
	userPrincipalName: string;
}
/*********************************************
* windowsMalwareCategoryCount
**********************************************/
export interface windowsMalwareCategoryCount  {
	activeMalwareDetectionCount: number;
	category: EnumTypes.windowsMalwareCategory;
	deviceCount: number;
	distinctActiveMalwareCount: number;
	lastUpdateDateTime: any;
}
/*********************************************
* windowsMalwareExecutionStateCount
**********************************************/
export interface windowsMalwareExecutionStateCount  {
	deviceCount: number;
	executionState: EnumTypes.windowsMalwareExecutionState;
	lastUpdateDateTime: any;
}
/*********************************************
* windowsMalwareNameCount
**********************************************/
export interface windowsMalwareNameCount  {
	deviceCount: number;
	lastUpdateDateTime: any;
	malwareIdentifier: string;
	name: string;
}
/*********************************************
* windowsMalwareSeverityCount
**********************************************/
export interface windowsMalwareSeverityCount  {
	distinctMalwareCount: number;
	lastUpdateDateTime: any;
	malwareDetectionCount: number;
	severity: EnumTypes.windowsMalwareSeverity;
}
/*********************************************
* windowsMalwareStateCount
**********************************************/
export interface windowsMalwareStateCount  {
	deviceCount: number;
	distinctMalwareCount: number;
	lastUpdateDateTime: any;
	malwareDetectionCount: number;
	state: EnumTypes.windowsMalwareThreatState;
}
/*********************************************
* importedWindowsAutopilotDeviceIdentityState
**********************************************/
export interface importedWindowsAutopilotDeviceIdentityState  {
	deviceErrorCode: number;
	deviceErrorName: string;
	deviceImportStatus: EnumTypes.importedWindowsAutopilotDeviceIdentityImportStatus;
	deviceRegistrationId: string;
}
/*********************************************
* outOfBoxExperienceSetting
**********************************************/
export interface outOfBoxExperienceSetting  {
	deviceUsageType: EnumTypes.windowsDeviceUsageType;
	escapeLinkHidden: boolean;
	eulaHidden: boolean;
	keyboardSelectionPageSkipped: boolean;
	privacySettingsHidden: boolean;
	userType: EnumTypes.windowsUserType;
}
/*********************************************
* mobileAppIdentifier
**********************************************/
export interface mobileAppIdentifier  {

}
/*********************************************
* androidMobileAppIdentifier
**********************************************/
export interface androidMobileAppIdentifier  {
	packageId: string;
}
/*********************************************
* iosMobileAppIdentifier
**********************************************/
export interface iosMobileAppIdentifier  {
	bundleId: string;
}
/*********************************************
* iPv4Range
**********************************************/
export interface iPv4Range  {
	lowerAddress: string;
	upperAddress: string;
}
/*********************************************
* iPv6Range
**********************************************/
export interface iPv6Range  {
	lowerAddress: string;
	upperAddress: string;
}
/*********************************************
* managedAppDiagnosticStatus
**********************************************/
export interface managedAppDiagnosticStatus  {
	mitigationInstruction: string;
	state: string;
	validationName: string;
}
/*********************************************
* managedAppPolicyDeploymentSummaryPerApp
**********************************************/
export interface managedAppPolicyDeploymentSummaryPerApp  {
	configurationAppliedUserCount: number;
	mobileAppIdentifier: mobileAppIdentifier;
}
/*********************************************
* proxiedDomain
**********************************************/
export interface proxiedDomain  {
	ipAddressOrFQDN: string;
	proxy: string;
}
/*********************************************
* windowsInformationProtectionApp
**********************************************/
export interface windowsInformationProtectionApp  {
	denied: boolean;
	description: string;
	displayName: string;
	productName: string;
	publisherName: string;
}
/*********************************************
* windowsInformationProtectionDataRecoveryCertificate
**********************************************/
export interface windowsInformationProtectionDataRecoveryCertificate  {
	certificate: any;
	description: string;
	expirationDateTime: any;
	subjectName: string;
}
/*********************************************
* windowsInformationProtectionDesktopApp
**********************************************/
export interface windowsInformationProtectionDesktopApp  {
	binaryName: string;
	binaryVersionHigh: string;
	binaryVersionLow: string;
}
/*********************************************
* windowsInformationProtectionIPRangeCollection
**********************************************/
export interface windowsInformationProtectionIPRangeCollection  {
	displayName: string;
	ranges: ipRange[];
}
/*********************************************
* windowsInformationProtectionProxiedDomainCollection
**********************************************/
export interface windowsInformationProtectionProxiedDomainCollection  {
	displayName: string;
	proxiedDomains: proxiedDomain[];
}
/*********************************************
* windowsInformationProtectionResourceCollection
**********************************************/
export interface windowsInformationProtectionResourceCollection  {
	displayName: string;
	resources: Array<string>;
}
/*********************************************
* windowsInformationProtectionStoreApp
**********************************************/
export interface windowsInformationProtectionStoreApp  {

}
/*********************************************
* resourceAction
**********************************************/
export interface resourceAction  {
	allowedResourceActions: Array<string>;
	notAllowedResourceActions: Array<string>;
}
/*********************************************
* rolePermission
**********************************************/
export interface rolePermission  {
	resourceActions: resourceAction[];
}
/*********************************************
* appsInstallationOptionsForMac
**********************************************/
export interface appsInstallationOptionsForMac  {
	isMicrosoft365AppsEnabled: boolean;
	isSkypeForBusinessEnabled: boolean;
}
/*********************************************
* appsInstallationOptionsForWindows
**********************************************/
export interface appsInstallationOptionsForWindows  {
	isMicrosoft365AppsEnabled: boolean;
	isProjectEnabled: boolean;
	isSkypeForBusinessEnabled: boolean;
	isVisioEnabled: boolean;
}
/*********************************************
* serviceHealthIssuePost
**********************************************/
export interface serviceHealthIssuePost  {
	createdDateTime: any;
	description: itemBody;
	postType: EnumTypes.postType;
}
/*********************************************
* serviceUpdateMessageViewpoint
**********************************************/
export interface serviceUpdateMessageViewpoint  {
	isArchived: boolean;
	isFavorited: boolean;
	isRead: boolean;
}
/*********************************************
* aggregationOption
**********************************************/
export interface aggregationOption  {
	bucketDefinition: bucketAggregationDefinition;
	field: string;
	size: number;
}
/*********************************************
* bucketAggregationDefinition
**********************************************/
export interface bucketAggregationDefinition  {
	isDescending: boolean;
	minimumCount: number;
	prefixFilter: string;
	ranges: bucketAggregationRange[];
	sortBy: EnumTypes.bucketAggregationSortProperty;
}
/*********************************************
* alterationResponse
**********************************************/
export interface alterationResponse  {
	originalQueryString: string;
	queryAlteration: searchAlteration;
	queryAlterationType: EnumTypes.searchAlterationType;
}
/*********************************************
* searchAlteration
**********************************************/
export interface searchAlteration  {
	alteredHighlightedQueryString: string;
	alteredQueryString: string;
	alteredQueryTokens: alteredQueryToken[];
}
/*********************************************
* alteredQueryToken
**********************************************/
export interface alteredQueryToken  {
	length: number;
	offset: number;
	suggestion: string;
}
/*********************************************
* bucketAggregationRange
**********************************************/
export interface bucketAggregationRange  {
	from: string;
	to: string;
}
/*********************************************
* collapseProperty
**********************************************/
export interface collapseProperty  {
	fields: Array<string>;
	limit: number;
}
/*********************************************
* resultTemplate
**********************************************/
export interface resultTemplate  {
	body: Json;
	displayName: string;
}
/*********************************************
* resultTemplateDictionary
**********************************************/
export interface resultTemplateDictionary  {

}
/*********************************************
* resultTemplateOption
**********************************************/
export interface resultTemplateOption  {
	enableResultTemplate: boolean;
}
/*********************************************
* searchAggregation
**********************************************/
export interface searchAggregation  {
	buckets: searchBucket[];
	field: string;
}
/*********************************************
* searchBucket
**********************************************/
export interface searchBucket  {
	aggregationFilterToken: string;
	count: number;
	key: string;
}
/*********************************************
* searchAlterationOptions
**********************************************/
export interface searchAlterationOptions  {
	enableModification: boolean;
	enableSuggestion: boolean;
}
/*********************************************
* searchHit
**********************************************/
export interface searchHit  {
	contentSource: string;
	hitId: string;
	isCollapsed: boolean;
	rank: number;
	resultTemplateId: string;
	summary: string;
}
/*********************************************
* searchHitsContainer
**********************************************/
export interface searchHitsContainer  {
	aggregations: searchAggregation[];
	hits: searchHit[];
	moreResultsAvailable: boolean;
	total: number;
}
/*********************************************
* searchQuery
**********************************************/
export interface searchQuery  {
	queryString: string;
	queryTemplate: string;
}
/*********************************************
* searchRequest
**********************************************/
export interface searchRequest  {
	aggregationFilters: Array<string>;
	aggregations: aggregationOption[];
	collapseProperties: collapseProperty[];
	contentSources: Array<string>;
	enableTopResults: boolean;
	entityTypes: EnumTypes.entityType[];
	fields: Array<string>;
	from: number;
	query: searchQuery;
	queryAlterationOptions: searchAlterationOptions;
	region: string;
	resultTemplateOptions: resultTemplateOption;
	sharePointOneDriveOptions: sharePointOneDriveOptions;
	size: number;
	sortProperties: sortProperty[];
}
/*********************************************
* sharePointOneDriveOptions
**********************************************/
export interface sharePointOneDriveOptions  {
	includeContent: EnumTypes.searchContent;
}
/*********************************************
* sortProperty
**********************************************/
export interface sortProperty  {
	isDescending: boolean;
	name: string;
}
/*********************************************
* searchResponse
**********************************************/
export interface searchResponse  {
	hitsContainers: searchHitsContainer[];
	queryAlterationResponse: alterationResponse;
	resultTemplates: resultTemplateDictionary;
	searchTerms: Array<string>;
}
/*********************************************
* plannerAppliedCategories
**********************************************/
export interface plannerAppliedCategories  {

}
/*********************************************
* plannerAssignment
**********************************************/
export interface plannerAssignment  {
	assignedBy: identitySet;
	assignedDateTime: any;
	orderHint: string;
}
/*********************************************
* plannerAssignments
**********************************************/
export interface plannerAssignments  {

}
/*********************************************
* plannerCategoryDescriptions
**********************************************/
export interface plannerCategoryDescriptions  {
	category1: string;
	category10: string;
	category11: string;
	category12: string;
	category13: string;
	category14: string;
	category15: string;
	category16: string;
	category17: string;
	category18: string;
	category19: string;
	category2: string;
	category20: string;
	category21: string;
	category22: string;
	category23: string;
	category24: string;
	category25: string;
	category3: string;
	category4: string;
	category5: string;
	category6: string;
	category7: string;
	category8: string;
	category9: string;
}
/*********************************************
* plannerChecklistItem
**********************************************/
export interface plannerChecklistItem  {
	isChecked: boolean;
	lastModifiedBy: identitySet;
	lastModifiedDateTime: any;
	orderHint: string;
	title: string;
}
/*********************************************
* plannerChecklistItems
**********************************************/
export interface plannerChecklistItems  {

}
/*********************************************
* plannerExternalReference
**********************************************/
export interface plannerExternalReference  {
	alias: string;
	lastModifiedBy: identitySet;
	lastModifiedDateTime: any;
	previewPriority: string;
	type: string;
}
/*********************************************
* plannerExternalReferences
**********************************************/
export interface plannerExternalReferences  {

}
/*********************************************
* plannerOrderHintsByAssignee
**********************************************/
export interface plannerOrderHintsByAssignee  {

}
/*********************************************
* plannerPlanContainer
**********************************************/
export interface plannerPlanContainer  {
	containerId: string;
	type: EnumTypes.plannerContainerType;
	url: string;
}
/*********************************************
* plannerUserIds
**********************************************/
export interface plannerUserIds  {

}
/*********************************************
* insightIdentity
**********************************************/
export interface insightIdentity  {
	address: string;
	displayName: string;
	id: string;
}
/*********************************************
* resourceReference
**********************************************/
export interface resourceReference  {
	id: string;
	type: string;
	webUrl: string;
}
/*********************************************
* resourceVisualization
**********************************************/
export interface resourceVisualization  {
	containerDisplayName: string;
	containerType: string;
	containerWebUrl: string;
	mediaType: string;
	previewImageUrl: string;
	previewText: string;
	title: string;
	type: string;
}
/*********************************************
* sharingDetail
**********************************************/
export interface sharingDetail  {
	sharedBy: insightIdentity;
	sharedDateTime: any;
	sharingReference: resourceReference;
	sharingSubject: string;
	sharingType: string;
}
/*********************************************
* usageDetails
**********************************************/
export interface usageDetails  {
	lastAccessedDateTime: any;
	lastModifiedDateTime: any;
}
/*********************************************
* CopyNotebookModel
**********************************************/
export interface CopyNotebookModel  {
	createdBy: string;
	createdByIdentity: identitySet;
	createdTime: any;
	id: string;
	isDefault: boolean;
	isShared: boolean;
	lastModifiedBy: string;
	lastModifiedByIdentity: identitySet;
	lastModifiedTime: any;
	links: notebookLinks;
	name: string;
	sectionGroupsUrl: string;
	sectionsUrl: string;
	self: string;
	userRole: EnumTypes.onenoteUserRole;
}
/*********************************************
* notebookLinks
**********************************************/
export interface notebookLinks  {
	oneNoteClientUrl: externalLink;
	oneNoteWebUrl: externalLink;
}
/*********************************************
* diagnostic
**********************************************/
export interface diagnostic  {
	message: string;
	url: string;
}
/*********************************************
* externalLink
**********************************************/
export interface externalLink  {
	href: string;
}
/*********************************************
* onenoteOperationError
**********************************************/
export interface onenoteOperationError  {
	code: string;
	message: string;
}
/*********************************************
* onenotePagePreview
**********************************************/
export interface onenotePagePreview  {
	links: onenotePagePreviewLinks;
	previewText: string;
}
/*********************************************
* onenotePagePreviewLinks
**********************************************/
export interface onenotePagePreviewLinks  {
	previewImageUrl: externalLink;
}
/*********************************************
* onenotePatchContentCommand
**********************************************/
export interface onenotePatchContentCommand  {
	action: EnumTypes.onenotePatchActionType;
	content: string;
	position: EnumTypes.onenotePatchInsertPosition;
	target: string;
}
/*********************************************
* pageLinks
**********************************************/
export interface pageLinks  {
	oneNoteClientUrl: externalLink;
	oneNoteWebUrl: externalLink;
}
/*********************************************
* recentNotebook
**********************************************/
export interface recentNotebook  {
	displayName: string;
	lastAccessedTime: any;
	links: recentNotebookLinks;
	sourceService: EnumTypes.onenoteSourceService;
}
/*********************************************
* recentNotebookLinks
**********************************************/
export interface recentNotebookLinks  {
	oneNoteClientUrl: externalLink;
	oneNoteWebUrl: externalLink;
}
/*********************************************
* sectionLinks
**********************************************/
export interface sectionLinks  {
	oneNoteClientUrl: externalLink;
	oneNoteWebUrl: externalLink;
}
/*********************************************
* delegatedAdminAccessContainer
**********************************************/
export interface delegatedAdminAccessContainer  {
	accessContainerId: string;
	accessContainerType: EnumTypes.delegatedAdminAccessContainerType;
}
/*********************************************
* delegatedAdminAccessDetails
**********************************************/
export interface delegatedAdminAccessDetails  {
	unifiedRoles: unifiedRole[];
}
/*********************************************
* unifiedRole
**********************************************/
export interface unifiedRole  {
	roleDefinitionId: string;
}
/*********************************************
* delegatedAdminRelationshipCustomerParticipant
**********************************************/
export interface delegatedAdminRelationshipCustomerParticipant  {
	displayName: string;
	tenantId: string;
}
/*********************************************
* cloudClipboardItemPayload
**********************************************/
export interface cloudClipboardItemPayload  {
	content: string;
	formatName: string;
}
/*********************************************
* profileCardAnnotation
**********************************************/
export interface profileCardAnnotation  {
	displayName: string;
	localizations: displayNameLocalization[];
}
/*********************************************
* approvalSettings
**********************************************/
export interface approvalSettings  {
	approvalMode: string;
	approvalStages: unifiedApprovalStage[];
	isApprovalRequired: boolean;
	isApprovalRequiredForExtension: boolean;
	isRequestorJustificationRequired: boolean;
}
/*********************************************
* unifiedApprovalStage
**********************************************/
export interface unifiedApprovalStage  {
	approvalStageTimeOutInDays: number;
	escalationApprovers: subjectSet[];
	escalationTimeInMinutes: number;
	isApproverJustificationRequired: boolean;
	isEscalationEnabled: boolean;
	primaryApprovers: subjectSet[];
}
/*********************************************
* requestSchedule
**********************************************/
export interface requestSchedule  {
	expiration: expirationPattern;
	recurrence: patternedRecurrence;
	startDateTime: any;
}
/*********************************************
* ticketInfo
**********************************************/
export interface ticketInfo  {
	ticketNumber: string;
	ticketSystem: string;
}
/*********************************************
* unifiedRoleManagementPolicyRuleTarget
**********************************************/
export interface unifiedRoleManagementPolicyRuleTarget  {
	caller: string;
	enforcedSettings: Array<string>;
	inheritableSettings: Array<string>;
	level: string;
	operations: EnumTypes.unifiedRoleManagementPolicyRuleTargetOperations[];
}
/*********************************************
* archivedPrintJob
**********************************************/
export interface archivedPrintJob  {
	acquiredByPrinter: boolean;
	acquiredDateTime: any;
	completionDateTime: any;
	copiesPrinted: number;
	createdBy: userIdentity;
	createdDateTime: any;
	id: string;
	printerId: string;
	printerName: string;
	processingState: EnumTypes.printJobProcessingState;
}
/*********************************************
* integerRange
**********************************************/
export interface integerRange  {
	end: number;
	start: number;
}
/*********************************************
* printCertificateSigningRequest
**********************************************/
export interface printCertificateSigningRequest  {
	content: string;
	transportKey: string;
}
/*********************************************
* printDocumentUploadProperties
**********************************************/
export interface printDocumentUploadProperties  {
	contentType: string;
	documentName: string;
	size: number;
}
/*********************************************
* printerCapabilities
**********************************************/
export interface printerCapabilities  {
	bottomMargins: Array<number>;
	collation: boolean;
	colorModes: EnumTypes.printColorMode[];
	contentTypes: Array<string>;
	copiesPerJob: integerRange;
	dpis: Array<number>;
	duplexModes: EnumTypes.printDuplexMode[];
	feedOrientations: EnumTypes.printerFeedOrientation[];
	finishings: EnumTypes.printFinishing[];
	inputBins: Array<string>;
	isColorPrintingSupported: boolean;
	isPageRangeSupported: boolean;
	leftMargins: Array<number>;
	mediaColors: Array<string>;
	mediaSizes: Array<string>;
	mediaTypes: Array<string>;
	multipageLayouts: EnumTypes.printMultipageLayout[];
	orientations: EnumTypes.printOrientation[];
	outputBins: Array<string>;
	pagesPerSheet: Array<number>;
	qualities: EnumTypes.printQuality[];
	rightMargins: Array<number>;
	scalings: EnumTypes.printScaling[];
	supportsFitPdfToPage: boolean;
	topMargins: Array<number>;
}
/*********************************************
* printerDefaults
**********************************************/
export interface printerDefaults  {
	colorMode: EnumTypes.printColorMode;
	contentType: string;
	copiesPerJob: number;
	dpi: number;
	duplexMode: EnumTypes.printDuplexMode;
	finishings: EnumTypes.printFinishing[];
	fitPdfToPage: boolean;
	inputBin: string;
	mediaColor: string;
	mediaSize: string;
	mediaType: string;
	multipageLayout: EnumTypes.printMultipageLayout;
	orientation: EnumTypes.printOrientation;
	outputBin: string;
	pagesPerSheet: number;
	quality: EnumTypes.printQuality;
	scaling: EnumTypes.printScaling;
}
/*********************************************
* printerLocation
**********************************************/
export interface printerLocation  {
	altitudeInMeters: number;
	building: string;
	city: string;
	countryOrRegion: string;
	floor: string;
	floorDescription: string;
	latitude: number;
	longitude: number;
	organization: Array<string>;
	postalCode: string;
	roomDescription: string;
	roomName: string;
	site: string;
	stateOrProvince: string;
	streetAddress: string;
	subdivision: Array<string>;
	subunit: Array<string>;
}
/*********************************************
* printerShareViewpoint
**********************************************/
export interface printerShareViewpoint  {
	lastUsedDateTime: any;
}
/*********************************************
* printerStatus
**********************************************/
export interface printerStatus  {
	description: string;
	details: EnumTypes.printerProcessingStateDetail[];
	state: EnumTypes.printerProcessingState;
}
/*********************************************
* printJobConfiguration
**********************************************/
export interface printJobConfiguration  {
	collate: boolean;
	colorMode: EnumTypes.printColorMode;
	copies: number;
	dpi: number;
	duplexMode: EnumTypes.printDuplexMode;
	feedOrientation: EnumTypes.printerFeedOrientation;
	finishings: EnumTypes.printFinishing[];
	fitPdfToPage: boolean;
	inputBin: string;
	margin: printMargin;
	mediaSize: string;
	mediaType: string;
	multipageLayout: EnumTypes.printMultipageLayout;
	orientation: EnumTypes.printOrientation;
	outputBin: string;
	pageRanges: integerRange[];
	pagesPerSheet: number;
	quality: EnumTypes.printQuality;
	scaling: EnumTypes.printScaling;
}
/*********************************************
* printMargin
**********************************************/
export interface printMargin  {
	bottom: number;
	left: number;
	right: number;
	top: number;
}
/*********************************************
* printJobStatus
**********************************************/
export interface printJobStatus  {
	description: string;
	details: EnumTypes.printJobStateDetail[];
	isAcquiredByPrinter: boolean;
	state: EnumTypes.printJobProcessingState;
}
/*********************************************
* printOperationStatus
**********************************************/
export interface printOperationStatus  {
	description: string;
	state: EnumTypes.printOperationProcessingState;
}
/*********************************************
* printSettings
**********************************************/
export interface printSettings  {
	documentConversionEnabled: boolean;
}
/*********************************************
* printTaskStatus
**********************************************/
export interface printTaskStatus  {
	description: string;
	state: EnumTypes.printTaskProcessingState;
}
/*********************************************
* imageInfo
**********************************************/
export interface imageInfo  {
	addImageQuery: boolean;
	alternateText: string;
	alternativeText: string;
	iconUrl: string;
}
/*********************************************
* visualInfo
**********************************************/
export interface visualInfo  {
	attribution: imageInfo;
	backgroundColor: string;
	content: Json;
	description: string;
	displayText: string;
}
/*********************************************
* accountTargetContent
**********************************************/
export interface accountTargetContent  {
	type: EnumTypes.accountTargetContentType;
}
/*********************************************
* addressBookAccountTargetContent
**********************************************/
export interface addressBookAccountTargetContent  {
	accountTargetEmails: Array<string>;
}
/*********************************************
* assignedTrainingInfo
**********************************************/
export interface assignedTrainingInfo  {
	assignedUserCount: number;
	completedUserCount: number;
	displayName: string;
}
/*********************************************
* attackSimulationRepeatOffender
**********************************************/
export interface attackSimulationRepeatOffender  {
	attackSimulationUser: attackSimulationUser;
	repeatOffenceCount: number;
}
/*********************************************
* attackSimulationUser
**********************************************/
export interface attackSimulationUser  {
	displayName: string;
	email: string;
	userId: string;
}
/*********************************************
* attackSimulationSimulationUserCoverage
**********************************************/
export interface attackSimulationSimulationUserCoverage  {
	attackSimulationUser: attackSimulationUser;
	clickCount: number;
	compromisedCount: number;
	latestSimulationDateTime: any;
	simulationCount: number;
}
/*********************************************
* attackSimulationTrainingUserCoverage
**********************************************/
export interface attackSimulationTrainingUserCoverage  {
	attackSimulationUser: attackSimulationUser;
	userTrainings: userTrainingStatusInfo[];
}
/*********************************************
* userTrainingStatusInfo
**********************************************/
export interface userTrainingStatusInfo  {
	assignedDateTime: any;
	completionDateTime: any;
	displayName: string;
	trainingStatus: EnumTypes.trainingStatus;
}
/*********************************************
* baseEndUserNotification
**********************************************/
export interface baseEndUserNotification  {
	defaultLanguage: string;
}
/*********************************************
* coachmarkLocation
**********************************************/
export interface coachmarkLocation  {
	length: number;
	offset: number;
	type: EnumTypes.coachmarkLocationType;
}
/*********************************************
* trainingSetting
**********************************************/
export interface trainingSetting  {
	settingType: EnumTypes.trainingSettingType;
}
/*********************************************
* customTrainingSetting
**********************************************/
export interface customTrainingSetting  {
	assignedTo: EnumTypes.trainingAssignedTo[];
	description: string;
	displayName: string;
	durationInMinutes: number;
	url: string;
}
/*********************************************
* emailIdentity
**********************************************/
export interface emailIdentity  {
	email: string;
}
/*********************************************
* payloadDetail
**********************************************/
export interface payloadDetail  {
	coachmarks: payloadCoachmark[];
	content: string;
	phishingUrl: string;
}
/*********************************************
* emailPayloadDetail
**********************************************/
export interface emailPayloadDetail  {
	fromEmail: string;
	fromName: string;
	isExternalSender: boolean;
	subject: string;
}
/*********************************************
* endUserNotificationSetting
**********************************************/
export interface endUserNotificationSetting  {
	notificationPreference: EnumTypes.endUserNotificationPreference;
	positiveReinforcement: positiveReinforcementNotification;
	settingType: EnumTypes.endUserNotificationSettingType;
}
/*********************************************
* positiveReinforcementNotification
**********************************************/
export interface positiveReinforcementNotification  {
	deliveryPreference: EnumTypes.notificationDeliveryPreference;
}
/*********************************************
* includeAllAccountTargetContent
**********************************************/
export interface includeAllAccountTargetContent  {

}
/*********************************************
* microsoftCustomTrainingSetting
**********************************************/
export interface microsoftCustomTrainingSetting  {
	completionDateTime: any;
	trainingAssignmentMappings: microsoftTrainingAssignmentMapping[];
	trainingCompletionDuration: EnumTypes.trainingCompletionDuration;
}
/*********************************************
* microsoftTrainingAssignmentMapping
**********************************************/
export interface microsoftTrainingAssignmentMapping  {
	assignedTo: EnumTypes.trainingAssignedTo[];
}
/*********************************************
* microsoftManagedTrainingSetting
**********************************************/
export interface microsoftManagedTrainingSetting  {
	completionDateTime: any;
	trainingCompletionDuration: EnumTypes.trainingCompletionDuration;
}
/*********************************************
* noTrainingNotificationSetting
**********************************************/
export interface noTrainingNotificationSetting  {
	simulationNotification: simulationNotification;
}
/*********************************************
* simulationNotification
**********************************************/
export interface simulationNotification  {
	targettedUserType: EnumTypes.targettedUserType;
}
/*********************************************
* noTrainingSetting
**********************************************/
export interface noTrainingSetting  {

}
/*********************************************
* oAuthConsentAppDetail
**********************************************/
export interface oAuthConsentAppDetail  {
	appScope: EnumTypes.oAuthAppScope;
	displayLogo: string;
	displayName: string;
}
/*********************************************
* payloadCoachmark
**********************************************/
export interface payloadCoachmark  {
	coachmarkLocation: coachmarkLocation;
	description: string;
	indicator: string;
	isValid: boolean;
	language: string;
	order: string;
}
/*********************************************
* recommendedAction
**********************************************/
export interface recommendedAction  {
	actionWebUrl: string;
	potentialScoreImpact: number;
	title: string;
}
/*********************************************
* simulationEvent
**********************************************/
export interface simulationEvent  {
	count: number;
	eventName: string;
}
/*********************************************
* simulationEventsContent
**********************************************/
export interface simulationEventsContent  {
	compromisedRate: number;
	events: simulationEvent[];
}
/*********************************************
* simulationReport
**********************************************/
export interface simulationReport  {
	overview: simulationReportOverview;
	simulationUsers: userSimulationDetails[];
}
/*********************************************
* simulationReportOverview
**********************************************/
export interface simulationReportOverview  {
	recommendedActions: recommendedAction[];
	resolvedTargetsCount: number;
	simulationEventsContent: simulationEventsContent;
	trainingEventsContent: trainingEventsContent;
}
/*********************************************
* userSimulationDetails
**********************************************/
export interface userSimulationDetails  {
	assignedTrainingsCount: number;
	completedTrainingsCount: number;
	compromisedDateTime: any;
	inProgressTrainingsCount: number;
	isCompromised: boolean;
	reportedPhishDateTime: any;
	simulationEvents: userSimulationEventInfo[];
	simulationUser: attackSimulationUser;
	trainingEvents: userTrainingEventInfo[];
}
/*********************************************
* trainingEventsContent
**********************************************/
export interface trainingEventsContent  {
	assignedTrainingsInfos: assignedTrainingInfo[];
	trainingsAssignedUserCount: number;
}
/*********************************************
* trainingNotificationSetting
**********************************************/
export interface trainingNotificationSetting  {
	trainingAssignment: baseEndUserNotification;
	trainingReminder: trainingReminderNotification;
}
/*********************************************
* trainingReminderNotification
**********************************************/
export interface trainingReminderNotification  {
	deliveryFrequency: EnumTypes.notificationDeliveryFrequency;
}
/*********************************************
* userSimulationEventInfo
**********************************************/
export interface userSimulationEventInfo  {
	browser: string;
	clickSource: EnumTypes.clickSource;
	eventDateTime: any;
	eventName: string;
	ipAddress: string;
	osPlatformDeviceDetails: string;
}
/*********************************************
* userTrainingEventInfo
**********************************************/
export interface userTrainingEventInfo  {
	displayName: string;
	latestTrainingStatus: EnumTypes.trainingStatus;
	trainingAssignedProperties: userTrainingContentEventInfo;
	trainingCompletedProperties: userTrainingContentEventInfo;
	trainingUpdatedProperties: userTrainingContentEventInfo;
}
/*********************************************
* userTrainingContentEventInfo
**********************************************/
export interface userTrainingContentEventInfo  {
	browser: string;
	contentDateTime: any;
	ipAddress: string;
	osPlatformDeviceDetails: string;
	potentialScoreImpact: number;
}
/*********************************************
* alertDetection
**********************************************/
export interface alertDetection  {
	detectionType: string;
	method: string;
	name: string;
}
/*********************************************
* alertHistoryState
**********************************************/
export interface alertHistoryState  {
	appId: string;
	assignedTo: string;
	comments: Array<string>;
	feedback: EnumTypes.alertFeedback;
	status: EnumTypes.alertStatus;
	updatedDateTime: any;
	user: string;
}
/*********************************************
* alertTrigger
**********************************************/
export interface alertTrigger  {
	name: string;
	type: string;
	value: string;
}
/*********************************************
* averageComparativeScore
**********************************************/
export interface averageComparativeScore  {
	averageScore: number;
	basis: string;
}
/*********************************************
* certificationControl
**********************************************/
export interface certificationControl  {
	name: string;
	url: string;
}
/*********************************************
* cloudAppSecurityState
**********************************************/
export interface cloudAppSecurityState  {
	destinationServiceIp: string;
	destinationServiceName: string;
	riskScore: string;
}
/*********************************************
* complianceInformation
**********************************************/
export interface complianceInformation  {
	certificationControls: certificationControl[];
	certificationName: string;
}
/*********************************************
* controlScore
**********************************************/
export interface controlScore  {
	controlCategory: string;
	controlName: string;
	description: string;
	score: number;
}
/*********************************************
* fileHash
**********************************************/
export interface fileHash  {
	algorithm: EnumTypes.fileHashAlgorithm;
	value: string;
}
/*********************************************
* fileSecurityState
**********************************************/
export interface fileSecurityState  {
	fileHash: fileHash;
	name: string;
	path: string;
	riskScore: string;
}
/*********************************************
* hostSecurityState
**********************************************/
export interface hostSecurityState  {
	fqdn: string;
	isAzureAdJoined: boolean;
	isAzureAdRegistered: boolean;
	isHybridAzureDomainJoined: boolean;
	netBiosName: string;
	os: string;
	privateIpAddress: string;
	publicIpAddress: string;
	riskScore: string;
}
/*********************************************
* investigationSecurityState
**********************************************/
export interface investigationSecurityState  {
	name: string;
	status: string;
}
/*********************************************
* malwareState
**********************************************/
export interface malwareState  {
	category: string;
	family: string;
	name: string;
	severity: string;
	wasRunning: boolean;
}
/*********************************************
* messageSecurityState
**********************************************/
export interface messageSecurityState  {
	connectingIP: string;
	deliveryAction: string;
	deliveryLocation: string;
	directionality: string;
	internetMessageId: string;
	messageFingerprint: string;
	messageReceivedDateTime: any;
	messageSubject: string;
	networkMessageId: string;
}
/*********************************************
* networkConnection
**********************************************/
export interface networkConnection  {
	applicationName: string;
	destinationAddress: string;
	destinationDomain: string;
	destinationLocation: string;
	destinationPort: string;
	destinationUrl: string;
	direction: EnumTypes.connectionDirection;
	domainRegisteredDateTime: any;
	localDnsName: string;
	natDestinationAddress: string;
	natDestinationPort: string;
	natSourceAddress: string;
	natSourcePort: string;
	protocol: EnumTypes.securityNetworkProtocol;
	riskScore: string;
	sourceAddress: string;
	sourceLocation: string;
	sourcePort: string;
	status: EnumTypes.connectionStatus;
	urlParameters: string;
}
/*********************************************
* process
**********************************************/
export interface process  {
	accountName: string;
	commandLine: string;
	createdDateTime: any;
	fileHash: fileHash;
	integrityLevel: EnumTypes.processIntegrityLevel;
	isElevated: boolean;
	name: string;
	parentProcessCreatedDateTime: any;
	parentProcessId: number;
	parentProcessName: string;
	path: string;
	processId: number;
}
/*********************************************
* registryKeyState
**********************************************/
export interface registryKeyState  {
	hive: EnumTypes.registryHive;
	key: string;
	oldKey: string;
	oldValueData: string;
	oldValueName: string;
	operation: EnumTypes.registryOperation;
	processId: number;
	valueData: string;
	valueName: string;
	valueType: EnumTypes.registryValueType;
}
/*********************************************
* secureScoreControlStateUpdate
**********************************************/
export interface secureScoreControlStateUpdate  {
	assignedTo: string;
	comment: string;
	state: string;
	updatedBy: string;
	updatedDateTime: any;
}
/*********************************************
* securityResource
**********************************************/
export interface securityResource  {
	resource: string;
	resourceType: EnumTypes.securityResourceType;
}
/*********************************************
* securityVendorInformation
**********************************************/
export interface securityVendorInformation  {
	provider: string;
	providerVersion: string;
	subProvider: string;
	vendor: string;
}
/*********************************************
* uriClickSecurityState
**********************************************/
export interface uriClickSecurityState  {
	clickAction: string;
	clickDateTime: any;
	id: string;
	sourceId: string;
	uriDomain: string;
	verdict: string;
}
/*********************************************
* userSecurityState
**********************************************/
export interface userSecurityState  {
	aadUserId: string;
	accountName: string;
	domainName: string;
	emailRole: EnumTypes.emailRole;
	isVpn: boolean;
	logonDateTime: any;
	logonId: string;
	logonIp: string;
	logonLocation: string;
	logonType: EnumTypes.logonType;
	onPremisesSecurityIdentifier: string;
	riskScore: string;
	userAccountType: EnumTypes.userAccountSecurityType;
	userPrincipalName: string;
}
/*********************************************
* vulnerabilityState
**********************************************/
export interface vulnerabilityState  {
	cve: string;
	severity: string;
	wasRunning: boolean;
}
/*********************************************
* participantJoiningResponse
**********************************************/
export interface participantJoiningResponse  {

}
/*********************************************
* acceptJoinResponse
**********************************************/
export interface acceptJoinResponse  {

}
/*********************************************
* mediaConfig
**********************************************/
export interface mediaConfig  {

}
/*********************************************
* appHostedMediaConfig
**********************************************/
export interface appHostedMediaConfig  {
	blob: string;
}
/*********************************************
* attendanceInterval
**********************************************/
export interface attendanceInterval  {
	durationInSeconds: number;
	joinDateTime: any;
	leaveDateTime: any;
}
/*********************************************
* audioConferencing
**********************************************/
export interface audioConferencing  {
	conferenceId: string;
	dialinUrl: string;
	tollFreeNumber: string;
	tollFreeNumbers: Array<string>;
	tollNumber: string;
	tollNumbers: Array<string>;
}
/*********************************************
* azureCommunicationServicesUserIdentity
**********************************************/
export interface azureCommunicationServicesUserIdentity  {
	azureCommunicationServicesResourceId: string;
}
/*********************************************
* broadcastMeetingCaptionSettings
**********************************************/
export interface broadcastMeetingCaptionSettings  {
	isCaptionEnabled: boolean;
	spokenLanguage: string;
	translationLanguages: Array<string>;
}
/*********************************************
* callMediaState
**********************************************/
export interface callMediaState  {
	audio: EnumTypes.mediaState;
}
/*********************************************
* callOptions
**********************************************/
export interface callOptions  {
	hideBotAfterEscalation: boolean;
	isContentSharingNotificationEnabled: boolean;
	isDeltaRosterEnabled: boolean;
}
/*********************************************
* callRoute
**********************************************/
export interface callRoute  {
	final: identitySet;
	original: identitySet;
	routingType: EnumTypes.routingType;
}
/*********************************************
* callTranscriptionInfo
**********************************************/
export interface callTranscriptionInfo  {
	lastModifiedDateTime: any;
	state: EnumTypes.callTranscriptionState;
}
/*********************************************
* chatInfo
**********************************************/
export interface chatInfo  {
	messageId: string;
	replyChainMessageId: string;
	threadId: string;
}
/*********************************************
* commsNotification
**********************************************/
export interface commsNotification  {
	changeType: EnumTypes.changeType;
	resourceUrl: string;
}
/*********************************************
* commsNotifications
**********************************************/
export interface commsNotifications  {
	value: commsNotification[];
}
/*********************************************
* communicationsApplicationIdentity
**********************************************/
export interface communicationsApplicationIdentity  {
	applicationType: string;
	hidden: boolean;
}
/*********************************************
* communicationsApplicationInstanceIdentity
**********************************************/
export interface communicationsApplicationInstanceIdentity  {
	hidden: boolean;
	tenantId: string;
}
/*********************************************
* communicationsEncryptedIdentity
**********************************************/
export interface communicationsEncryptedIdentity  {

}
/*********************************************
* communicationsGuestIdentity
**********************************************/
export interface communicationsGuestIdentity  {

}
/*********************************************
* communicationsPhoneIdentity
**********************************************/
export interface communicationsPhoneIdentity  {

}
/*********************************************
* communicationsUserIdentity
**********************************************/
export interface communicationsUserIdentity  {
	tenantId: string;
}
/*********************************************
* incomingCallOptions
**********************************************/
export interface incomingCallOptions  {

}
/*********************************************
* incomingContext
**********************************************/
export interface incomingContext  {
	observedParticipantId: string;
	onBehalfOf: identitySet;
	sourceParticipantId: string;
	transferor: identitySet;
}
/*********************************************
* invitationParticipantInfo
**********************************************/
export interface invitationParticipantInfo  {
	hidden: boolean;
	identity: identitySet;
	participantId: string;
	removeFromDefaultAudioRoutingGroup: boolean;
	replacesCallId: string;
}
/*********************************************
* inviteNewBotResponse
**********************************************/
export interface inviteNewBotResponse  {
	inviteUri: string;
}
/*********************************************
* meetingInfo
**********************************************/
export interface meetingInfo  {

}
/*********************************************
* joinMeetingIdMeetingInfo
**********************************************/
export interface joinMeetingIdMeetingInfo  {
	joinMeetingId: string;
	passcode: string;
}
/*********************************************
* joinMeetingIdSettings
**********************************************/
export interface joinMeetingIdSettings  {
	isPasscodeRequired: boolean;
	joinMeetingId: string;
	passcode: string;
}
/*********************************************
* mediaInfo
**********************************************/
export interface mediaInfo  {
	resourceId: string;
	uri: string;
}
/*********************************************
* prompt
**********************************************/
export interface prompt  {

}
/*********************************************
* mediaPrompt
**********************************************/
export interface mediaPrompt  {
	mediaInfo: mediaInfo;
}
/*********************************************
* mediaStream
**********************************************/
export interface mediaStream  {
	audioCodec: EnumTypes.audioCodec;
	averageAudioDegradation: any;
	averageAudioNetworkJitter: number;
	averageBandwidthEstimate: number;
	averageFreezeDuration: number;
	averageJitter: number;
	averagePacketLossRate: any;
	averageRatioOfConcealedSamples: any;
	averageReceivedFrameRate: any;
	averageRoundTripTime: number;
	averageVideoFrameLossPercentage: any;
	averageVideoFrameRate: any;
	averageVideoPacketLossRate: any;
	endDateTime: any;
	isAudioForwardErrorCorrectionUsed: boolean;
	lowFrameRateRatio: any;
	lowVideoProcessingCapabilityRatio: any;
	maxAudioNetworkJitter: number;
	maxJitter: number;
	maxPacketLossRate: any;
	maxRatioOfConcealedSamples: any;
	maxRoundTripTime: number;
	packetUtilization: number;
	postForwardErrorCorrectionPacketLossRate: any;
	rmsFreezeDuration: number;
	startDateTime: any;
	streamDirection: EnumTypes.mediaStreamDirection;
	streamId: string;
	videoCodec: EnumTypes.videoCodec;
	wasMediaBypassed: boolean;
}
/*********************************************
* meetingParticipantInfo
**********************************************/
export interface meetingParticipantInfo  {
	identity: identitySet;
	role: EnumTypes.onlineMeetingRole;
	upn: string;
}
/*********************************************
* onlineMeetingRestricted
**********************************************/
export interface onlineMeetingRestricted  {
	contentSharingDisabled: EnumTypes.onlineMeetingContentSharingDisabledReason;
	videoDisabled: EnumTypes.onlineMeetingVideoDisabledReason;
}
/*********************************************
* organizerMeetingInfo
**********************************************/
export interface organizerMeetingInfo  {
	organizer: identitySet;
}
/*********************************************
* outgoingCallOptions
**********************************************/
export interface outgoingCallOptions  {

}
/*********************************************
* participantInfo
**********************************************/
export interface participantInfo  {
	countryCode: string;
	endpointType: EnumTypes.endpointType;
	identity: identitySet;
	languageId: string;
	participantId: string;
	region: string;
}
/*********************************************
* presenceStatusMessage
**********************************************/
export interface presenceStatusMessage  {
	expiryDateTime: dateTimeTimeZone;
	message: itemBody;
	publishedDateTime: any;
}
/*********************************************
* recordingInfo
**********************************************/
export interface recordingInfo  {
	initiator: identitySet;
	recordingStatus: EnumTypes.recordingStatus;
}
/*********************************************
* rejectJoinResponse
**********************************************/
export interface rejectJoinResponse  {
	reason: EnumTypes.rejectReason;
}
/*********************************************
* removedState
**********************************************/
export interface removedState  {
	reason: string;
}
/*********************************************
* serviceHostedMediaConfig
**********************************************/
export interface serviceHostedMediaConfig  {
	preFetchMedia: mediaInfo[];
}
/*********************************************
* teleconferenceDeviceMediaQuality
**********************************************/
export interface teleconferenceDeviceMediaQuality  {
	averageInboundJitter: number;
	averageInboundPacketLossRateInPercentage: number;
	averageInboundRoundTripDelay: number;
	averageOutboundJitter: number;
	averageOutboundPacketLossRateInPercentage: number;
	averageOutboundRoundTripDelay: number;
	channelIndex: number;
	inboundPackets: number;
	localIPAddress: string;
	localPort: number;
	maximumInboundJitter: number;
	maximumInboundPacketLossRateInPercentage: number;
	maximumInboundRoundTripDelay: number;
	maximumOutboundJitter: number;
	maximumOutboundPacketLossRateInPercentage: number;
	maximumOutboundRoundTripDelay: number;
	mediaDuration: number;
	networkLinkSpeedInBytes: number;
	outboundPackets: number;
	remoteIPAddress: string;
	remotePort: number;
}
/*********************************************
* teleconferenceDeviceAudioQuality
**********************************************/
export interface teleconferenceDeviceAudioQuality  {

}
/*********************************************
* teleconferenceDeviceQuality
**********************************************/
export interface teleconferenceDeviceQuality  {
	callChainId: any;
	cloudServiceDeploymentEnvironment: string;
	cloudServiceDeploymentId: string;
	cloudServiceInstanceName: string;
	cloudServiceName: string;
	deviceDescription: string;
	deviceName: string;
	mediaLegId: any;
	mediaQualityList: teleconferenceDeviceMediaQuality[];
	participantId: any;
}
/*********************************************
* teleconferenceDeviceVideoQuality
**********************************************/
export interface teleconferenceDeviceVideoQuality  {
	averageInboundBitRate: number;
	averageInboundFrameRate: number;
	averageOutboundBitRate: number;
	averageOutboundFrameRate: number;
}
/*********************************************
* teleconferenceDeviceScreenSharingQuality
**********************************************/
export interface teleconferenceDeviceScreenSharingQuality  {

}
/*********************************************
* tokenMeetingInfo
**********************************************/
export interface tokenMeetingInfo  {
	token: string;
}
/*********************************************
* toneInfo
**********************************************/
export interface toneInfo  {
	sequenceId: number;
	tone: EnumTypes.tone;
}
/*********************************************
* virtualEventPresenterDetails
**********************************************/
export interface virtualEventPresenterDetails  {
	bio: itemBody;
	company: string;
	jobTitle: string;
	linkedInProfileWebUrl: string;
	personalSiteWebUrl: string;
	photo: any;
	twitterProfileWebUrl: string;
}
/*********************************************
* virtualEventPresenterInfo
**********************************************/
export interface virtualEventPresenterInfo  {
	presenterDetails: virtualEventPresenterDetails;
}
/*********************************************
* virtualEventRegistrationQuestionAnswer
**********************************************/
export interface virtualEventRegistrationQuestionAnswer  {
	booleanValue: boolean;
	displayName: string;
	multiChoiceValues: Array<string>;
	questionId: string;
	value: string;
}
/*********************************************
* virtualEventSettings
**********************************************/
export interface virtualEventSettings  {
	isAttendeeEmailNotificationEnabled: boolean;
}
/*********************************************
* passwordResetResponse
**********************************************/
export interface passwordResetResponse  {
	newPassword: string;
}
/*********************************************
* changeNotification
**********************************************/
export interface changeNotification  {
	changeType: EnumTypes.changeType;
	clientState: string;
	encryptedContent: changeNotificationEncryptedContent;
	id: string;
	lifecycleEvent: EnumTypes.lifecycleEventType;
	resource: string;
	resourceData: resourceData;
	subscriptionExpirationDateTime: any;
	subscriptionId: any;
	tenantId: any;
}
/*********************************************
* changeNotificationEncryptedContent
**********************************************/
export interface changeNotificationEncryptedContent  {
	data: string;
	dataKey: string;
	dataSignature: string;
	encryptionCertificateId: string;
	encryptionCertificateThumbprint: string;
}
/*********************************************
* resourceData
**********************************************/
export interface resourceData  {

}
/*********************************************
* changeNotificationCollection
**********************************************/
export interface changeNotificationCollection  {
	validationTokens: Array<string>;
	value: changeNotification[];
}
/*********************************************
* actionResultPart
**********************************************/
export interface actionResultPart  {
	error: publicError;
}
/*********************************************
* aadUserConversationMemberResult
**********************************************/
export interface aadUserConversationMemberResult  {
	userId: string;
}
/*********************************************
* teamworkNotificationRecipient
**********************************************/
export interface teamworkNotificationRecipient  {

}
/*********************************************
* aadUserNotificationRecipient
**********************************************/
export interface aadUserNotificationRecipient  {
	userId: string;
}
/*********************************************
* eventMessageDetail
**********************************************/
export interface eventMessageDetail  {

}
/*********************************************
* callEndedEventMessageDetail
**********************************************/
export interface callEndedEventMessageDetail  {
	callDuration: number;
	callEventType: EnumTypes.teamworkCallEventType;
	callId: string;
	callParticipants: callParticipantInfo[];
	initiator: identitySet;
}
/*********************************************
* callParticipantInfo
**********************************************/
export interface callParticipantInfo  {
	participant: identitySet;
}
/*********************************************
* callRecordingEventMessageDetail
**********************************************/
export interface callRecordingEventMessageDetail  {
	callId: string;
	callRecordingDisplayName: string;
	callRecordingDuration: number;
	callRecordingStatus: EnumTypes.callRecordingStatus;
	callRecordingUrl: string;
	initiator: identitySet;
	meetingOrganizer: identitySet;
}
/*********************************************
* callStartedEventMessageDetail
**********************************************/
export interface callStartedEventMessageDetail  {
	callEventType: EnumTypes.teamworkCallEventType;
	callId: string;
	initiator: identitySet;
}
/*********************************************
* callTranscriptEventMessageDetail
**********************************************/
export interface callTranscriptEventMessageDetail  {
	callId: string;
	callTranscriptICalUid: string;
	meetingOrganizer: identitySet;
}
/*********************************************
* channelAddedEventMessageDetail
**********************************************/
export interface channelAddedEventMessageDetail  {
	channelDisplayName: string;
	channelId: string;
	initiator: identitySet;
}
/*********************************************
* channelDeletedEventMessageDetail
**********************************************/
export interface channelDeletedEventMessageDetail  {
	channelDisplayName: string;
	channelId: string;
	initiator: identitySet;
}
/*********************************************
* channelDescriptionUpdatedEventMessageDetail
**********************************************/
export interface channelDescriptionUpdatedEventMessageDetail  {
	channelDescription: string;
	channelId: string;
	initiator: identitySet;
}
/*********************************************
* channelIdentity
**********************************************/
export interface channelIdentity  {
	channelId: string;
	teamId: string;
}
/*********************************************
* channelMembersNotificationRecipient
**********************************************/
export interface channelMembersNotificationRecipient  {
	channelId: string;
	teamId: string;
}
/*********************************************
* channelRenamedEventMessageDetail
**********************************************/
export interface channelRenamedEventMessageDetail  {
	channelDisplayName: string;
	channelId: string;
	initiator: identitySet;
}
/*********************************************
* channelSetAsFavoriteByDefaultEventMessageDetail
**********************************************/
export interface channelSetAsFavoriteByDefaultEventMessageDetail  {
	channelId: string;
	initiator: identitySet;
}
/*********************************************
* channelSummary
**********************************************/
export interface channelSummary  {
	guestsCount: number;
	hasMembersFromOtherTenants: boolean;
	membersCount: number;
	ownersCount: number;
}
/*********************************************
* channelUnsetAsFavoriteByDefaultEventMessageDetail
**********************************************/
export interface channelUnsetAsFavoriteByDefaultEventMessageDetail  {
	channelId: string;
	initiator: identitySet;
}
/*********************************************
* chatMembersNotificationRecipient
**********************************************/
export interface chatMembersNotificationRecipient  {
	chatId: string;
}
/*********************************************
* chatMessageAttachment
**********************************************/
export interface chatMessageAttachment  {
	content: string;
	contentType: string;
	contentUrl: string;
	id: string;
	name: string;
	teamsAppId: string;
	thumbnailUrl: string;
}
/*********************************************
* chatMessageFromIdentitySet
**********************************************/
export interface chatMessageFromIdentitySet  {

}
/*********************************************
* chatMessageHistoryItem
**********************************************/
export interface chatMessageHistoryItem  {
	actions: EnumTypes.chatMessageActions;
	modifiedDateTime: any;
	reaction: chatMessageReaction;
}
/*********************************************
* chatMessageReaction
**********************************************/
export interface chatMessageReaction  {
	createdDateTime: any;
	displayName: string;
	reactionContentUrl: string;
	reactionType: string;
	user: chatMessageReactionIdentitySet;
}
/*********************************************
* chatMessageMention
**********************************************/
export interface chatMessageMention  {
	id: number;
	mentioned: chatMessageMentionedIdentitySet;
	mentionText: string;
}
/*********************************************
* chatMessageMentionedIdentitySet
**********************************************/
export interface chatMessageMentionedIdentitySet  {
	conversation: teamworkConversationIdentity;
}
/*********************************************
* teamworkConversationIdentity
**********************************************/
export interface teamworkConversationIdentity  {
	conversationIdentityType: EnumTypes.teamworkConversationIdentityType;
}
/*********************************************
* chatMessagePolicyViolation
**********************************************/
export interface chatMessagePolicyViolation  {
	dlpAction: EnumTypes.chatMessagePolicyViolationDlpActionTypes;
	justificationText: string;
	policyTip: chatMessagePolicyViolationPolicyTip;
	userAction: EnumTypes.chatMessagePolicyViolationUserActionTypes;
	verdictDetails: EnumTypes.chatMessagePolicyViolationVerdictDetailsTypes;
}
/*********************************************
* chatMessagePolicyViolationPolicyTip
**********************************************/
export interface chatMessagePolicyViolationPolicyTip  {
	complianceUrl: string;
	generalText: string;
	matchedConditionDescriptions: Array<string>;
}
/*********************************************
* chatMessageReactionIdentitySet
**********************************************/
export interface chatMessageReactionIdentitySet  {

}
/*********************************************
* chatRenamedEventMessageDetail
**********************************************/
export interface chatRenamedEventMessageDetail  {
	chatDisplayName: string;
	chatId: string;
	initiator: identitySet;
}
/*********************************************
* chatViewpoint
**********************************************/
export interface chatViewpoint  {
	isHidden: boolean;
	lastMessageReadDateTime: any;
}
/*********************************************
* conversationMemberRoleUpdatedEventMessageDetail
**********************************************/
export interface conversationMemberRoleUpdatedEventMessageDetail  {
	conversationMemberRoles: Array<string>;
	conversationMemberUser: teamworkUserIdentity;
	initiator: identitySet;
}
/*********************************************
* teamworkUserIdentity
**********************************************/
export interface teamworkUserIdentity  {
	userIdentityType: EnumTypes.teamworkUserIdentityType;
}
/*********************************************
* meetingPolicyUpdatedEventMessageDetail
**********************************************/
export interface meetingPolicyUpdatedEventMessageDetail  {
	initiator: identitySet;
	meetingChatEnabled: boolean;
	meetingChatId: string;
}
/*********************************************
* membersAddedEventMessageDetail
**********************************************/
export interface membersAddedEventMessageDetail  {
	initiator: identitySet;
	members: teamworkUserIdentity[];
	visibleHistoryStartDateTime: any;
}
/*********************************************
* membersDeletedEventMessageDetail
**********************************************/
export interface membersDeletedEventMessageDetail  {
	initiator: identitySet;
	members: teamworkUserIdentity[];
}
/*********************************************
* membersJoinedEventMessageDetail
**********************************************/
export interface membersJoinedEventMessageDetail  {
	initiator: identitySet;
	members: teamworkUserIdentity[];
}
/*********************************************
* membersLeftEventMessageDetail
**********************************************/
export interface membersLeftEventMessageDetail  {
	initiator: identitySet;
	members: teamworkUserIdentity[];
}
/*********************************************
* messagePinnedEventMessageDetail
**********************************************/
export interface messagePinnedEventMessageDetail  {
	eventDateTime: any;
	initiator: identitySet;
}
/*********************************************
* messageUnpinnedEventMessageDetail
**********************************************/
export interface messageUnpinnedEventMessageDetail  {
	eventDateTime: any;
	initiator: identitySet;
}
/*********************************************
* operationError
**********************************************/
export interface operationError  {
	code: string;
	message: string;
}
/*********************************************
* provisionChannelEmailResult
**********************************************/
export interface provisionChannelEmailResult  {
	email: string;
}
/*********************************************
* tabUpdatedEventMessageDetail
**********************************************/
export interface tabUpdatedEventMessageDetail  {
	initiator: identitySet;
	tabId: string;
}
/*********************************************
* teamArchivedEventMessageDetail
**********************************************/
export interface teamArchivedEventMessageDetail  {
	initiator: identitySet;
	teamId: string;
}
/*********************************************
* teamClassSettings
**********************************************/
export interface teamClassSettings  {
	notifyGuardiansAboutAssignments: boolean;
}
/*********************************************
* teamCreatedEventMessageDetail
**********************************************/
export interface teamCreatedEventMessageDetail  {
	initiator: identitySet;
	teamDescription: string;
	teamDisplayName: string;
	teamId: string;
}
/*********************************************
* teamDescriptionUpdatedEventMessageDetail
**********************************************/
export interface teamDescriptionUpdatedEventMessageDetail  {
	initiator: identitySet;
	teamDescription: string;
	teamId: string;
}
/*********************************************
* teamJoiningDisabledEventMessageDetail
**********************************************/
export interface teamJoiningDisabledEventMessageDetail  {
	initiator: identitySet;
	teamId: string;
}
/*********************************************
* teamJoiningEnabledEventMessageDetail
**********************************************/
export interface teamJoiningEnabledEventMessageDetail  {
	initiator: identitySet;
	teamId: string;
}
/*********************************************
* teamMembersNotificationRecipient
**********************************************/
export interface teamMembersNotificationRecipient  {
	teamId: string;
}
/*********************************************
* teamRenamedEventMessageDetail
**********************************************/
export interface teamRenamedEventMessageDetail  {
	initiator: identitySet;
	teamDisplayName: string;
	teamId: string;
}
/*********************************************
* teamsAppAuthorization
**********************************************/
export interface teamsAppAuthorization  {
	clientAppId: string;
	requiredPermissionSet: teamsAppPermissionSet;
}
/*********************************************
* teamsAppPermissionSet
**********************************************/
export interface teamsAppPermissionSet  {
	resourceSpecificPermissions: teamsAppResourceSpecificPermission[];
}
/*********************************************
* teamsAppInstalledEventMessageDetail
**********************************************/
export interface teamsAppInstalledEventMessageDetail  {
	initiator: identitySet;
	teamsAppDisplayName: string;
	teamsAppId: string;
}
/*********************************************
* teamsAppResourceSpecificPermission
**********************************************/
export interface teamsAppResourceSpecificPermission  {
	permissionType: EnumTypes.teamsAppResourceSpecificPermissionType;
	permissionValue: string;
}
/*********************************************
* teamsAppRemovedEventMessageDetail
**********************************************/
export interface teamsAppRemovedEventMessageDetail  {
	initiator: identitySet;
	teamsAppDisplayName: string;
	teamsAppId: string;
}
/*********************************************
* teamsAppUpgradedEventMessageDetail
**********************************************/
export interface teamsAppUpgradedEventMessageDetail  {
	initiator: identitySet;
	teamsAppDisplayName: string;
	teamsAppId: string;
}
/*********************************************
* teamsLicensingDetails
**********************************************/
export interface teamsLicensingDetails  {
	hasTeamsLicense: boolean;
}
/*********************************************
* teamsTabConfiguration
**********************************************/
export interface teamsTabConfiguration  {
	contentUrl: string;
	entityId: string;
	removeUrl: string;
	websiteUrl: string;
}
/*********************************************
* teamUnarchivedEventMessageDetail
**********************************************/
export interface teamUnarchivedEventMessageDetail  {
	initiator: identitySet;
	teamId: string;
}
/*********************************************
* teamworkActivityTopic
**********************************************/
export interface teamworkActivityTopic  {
	source: EnumTypes.teamworkActivityTopicSource;
	value: string;
	webUrl: string;
}
/*********************************************
* teamworkApplicationIdentity
**********************************************/
export interface teamworkApplicationIdentity  {
	applicationIdentityType: EnumTypes.teamworkApplicationIdentityType;
}
/*********************************************
* teamworkOnlineMeetingInfo
**********************************************/
export interface teamworkOnlineMeetingInfo  {
	calendarEventId: string;
	joinWebUrl: string;
	organizer: teamworkUserIdentity;
}
/*********************************************
* teamworkTagIdentity
**********************************************/
export interface teamworkTagIdentity  {

}
/*********************************************
* scheduleEntity
**********************************************/
export interface scheduleEntity  {
	endDateTime: any;
	startDateTime: any;
	theme: EnumTypes.scheduleEntityTheme;
}
/*********************************************
* shiftItem
**********************************************/
export interface shiftItem  {
	activities: shiftActivity[];
	displayName: string;
	notes: string;
}
/*********************************************
* openShiftItem
**********************************************/
export interface openShiftItem  {
	openSlotCount: number;
}
/*********************************************
* shiftActivity
**********************************************/
export interface shiftActivity  {
	code: string;
	displayName: string;
	endDateTime: any;
	isPaid: boolean;
	startDateTime: any;
	theme: EnumTypes.scheduleEntityTheme;
}
/*********************************************
* shiftAvailability
**********************************************/
export interface shiftAvailability  {
	recurrence: patternedRecurrence;
	timeSlots: timeRange[];
	timeZone: string;
}
/*********************************************
* timeRange
**********************************************/
export interface timeRange  {
	endTime: any;
	startTime: any;
}
/*********************************************
* timeOffItem
**********************************************/
export interface timeOffItem  {
	timeOffReasonId: string;
}
/*********************************************
* workforceIntegrationEncryption
**********************************************/
export interface workforceIntegrationEncryption  {
	protocol: EnumTypes.workforceIntegrationEncryptionProtocol;
	secret: string;
}
/*********************************************
* attachmentInfo
**********************************************/
export interface attachmentInfo  {
	attachmentType: EnumTypes.attachmentType;
	contentType: string;
	name: string;
	size: number;
}
/*********************************************
* exportFileMetadata
**********************************************/
export interface exportFileMetadata  {
	downloadUrl: string;
	fileName: string;
	size: number;
}
/*********************************************
* ocrSettings
**********************************************/
export interface ocrSettings  {
	isEnabled: boolean;
	maxImageSize: number;
	timeout: number;
}
/*********************************************
* redundancyDetectionSettings
**********************************************/
export interface redundancyDetectionSettings  {
	isEnabled: boolean;
	maxWords: number;
	minWords: number;
	similarityThreshold: number;
}
/*********************************************
* stringValueDictionary
**********************************************/
export interface stringValueDictionary  {

}
/*********************************************
* topicModelingSettings
**********************************************/
export interface topicModelingSettings  {
	dynamicallyAdjustTopicCount: boolean;
	ignoreNumbers: boolean;
	isEnabled: boolean;
	topicCount: number;
}
/*********************************************
* deploymentAccessKeyType
**********************************************/
export interface deploymentAccessKeyType  {
	deploymentAccessKey: string;
}
/*********************************************
* sensorDeploymentPackage
**********************************************/
export interface sensorDeploymentPackage  {
	downloadUrl: string;
	version: string;
}
/*********************************************
* sensorSettings
**********************************************/
export interface sensorSettings  {
	description: string;
	domainControllerDnsNames: Array<string>;
	isDelayedDeploymentEnabled: boolean;
}
/*********************************************
* alertComment
**********************************************/
export interface alertComment  {
	comment: string;
	createdByDisplayName: string;
	createdDateTime: any;
}
/*********************************************
* alertEvidence
**********************************************/
export interface alertEvidence  {
	createdDateTime: any;
	detailedRoles: Array<string>;
	remediationStatus: EnumTypes.evidenceRemediationStatus;
	remediationStatusDetails: string;
	roles: EnumTypes.evidenceRole[];
	tags: Array<string>;
	verdict: EnumTypes.evidenceVerdict;
}
/*********************************************
* amazonResourceEvidence
**********************************************/
export interface amazonResourceEvidence  {
	amazonAccountId: string;
	amazonResourceId: string;
	resourceName: string;
	resourceType: string;
}
/*********************************************
* analyzedMessageEvidence
**********************************************/
export interface analyzedMessageEvidence  {
	antiSpamDirection: string;
	attachmentsCount: number;
	deliveryAction: string;
	deliveryLocation: string;
	internetMessageId: string;
	language: string;
	networkMessageId: string;
	p1Sender: emailSender;
	p2Sender: emailSender;
	receivedDateTime: any;
	recipientEmailAddress: string;
	senderIp: string;
	subject: string;
	threatDetectionMethods: Array<string>;
	threats: Array<string>;
	urlCount: number;
	urls: Array<string>;
	urn: string;
}
/*********************************************
* emailSender
**********************************************/
export interface emailSender  {
	displayName: string;
	domainName: string;
	emailAddress: string;
}
/*********************************************
* azureResourceEvidence
**********************************************/
export interface azureResourceEvidence  {
	resourceId: string;
	resourceName: string;
	resourceType: string;
}
/*********************************************
* blobContainerEvidence
**********************************************/
export interface blobContainerEvidence  {
	name: string;
	storageResource: azureResourceEvidence;
	url: string;
}
/*********************************************
* blobEvidence
**********************************************/
export interface blobEvidence  {
	blobContainer: blobContainerEvidence;
	etag: string;
	fileHashes: fileHash[];
	name: string;
	url: string;
}
/*********************************************
* cloudApplicationEvidence
**********************************************/
export interface cloudApplicationEvidence  {
	appId: number;
	displayName: string;
	instanceId: number;
	instanceName: string;
	saasAppId: number;
	stream: stream;
}
/*********************************************
* stream
**********************************************/
export interface stream  {
	name: string;
}
/*********************************************
* cloudLogonRequestEvidence
**********************************************/
export interface cloudLogonRequestEvidence  {
	requestId: string;
}
/*********************************************
* cloudLogonSessionEvidence
**********************************************/
export interface cloudLogonSessionEvidence  {
	account: userEvidence;
	browser: string;
	deviceName: string;
	operatingSystem: string;
	previousLogonDateTime: any;
	protocol: string;
	sessionId: string;
	startUtcDateTime: any;
	userAgent: string;
}
/*********************************************
* userEvidence
**********************************************/
export interface userEvidence  {
	stream: stream;
	userAccount: userAccount;
}
/*********************************************
* containerEvidence
**********************************************/
export interface containerEvidence  {
	args: Array<string>;
	command: Array<string>;
	containerId: string;
	image: containerImageEvidence;
	isPrivileged: boolean;
	name: string;
	pod: kubernetesPodEvidence;
}
/*********************************************
* containerImageEvidence
**********************************************/
export interface containerImageEvidence  {
	digestImage: containerImageEvidence;
	imageId: string;
	registry: containerRegistryEvidence;
}
/*********************************************
* kubernetesPodEvidence
**********************************************/
export interface kubernetesPodEvidence  {
	containers: containerEvidence[];
	controller: kubernetesControllerEvidence;
	ephemeralContainers: containerEvidence[];
	initContainers: containerEvidence[];
	labels: dictionary;
	name: string;
	namespace: kubernetesNamespaceEvidence;
	podIp: ipEvidence;
	serviceAccount: kubernetesServiceAccountEvidence;
}
/*********************************************
* containerRegistryEvidence
**********************************************/
export interface containerRegistryEvidence  {
	registry: string;
}
/*********************************************
* deviceEvidence
**********************************************/
export interface deviceEvidence  {
	azureAdDeviceId: string;
	defenderAvStatus: EnumTypes.defenderAvStatus;
	deviceDnsName: string;
	dnsDomain: string;
	firstSeenDateTime: any;
	healthStatus: EnumTypes.deviceHealthStatus;
	hostName: string;
	ipInterfaces: Array<string>;
	lastExternalIpAddress: string;
	lastIpAddress: string;
	loggedOnUsers: loggedOnUser[];
	mdeDeviceId: string;
	ntDomain: string;
	onboardingStatus: EnumTypes.onboardingStatus;
	osBuild: number;
	osPlatform: string;
	rbacGroupId: number;
	rbacGroupName: string;
	riskScore: EnumTypes.deviceRiskScore;
	version: string;
	vmMetadata: vmMetadata;
}
/*********************************************
* loggedOnUser
**********************************************/
export interface loggedOnUser  {
	accountName: string;
	domainName: string;
}
/*********************************************
* vmMetadata
**********************************************/
export interface vmMetadata  {
	cloudProvider: EnumTypes.vmCloudProvider;
	resourceId: string;
	subscriptionId: string;
	vmId: string;
}
/*********************************************
* dictionary
**********************************************/
export interface dictionary  {

}
/*********************************************
* dnsEvidence
**********************************************/
export interface dnsEvidence  {
	dnsServerIp: ipEvidence;
	domainName: string;
	hostIpAddress: ipEvidence;
	ipAddresses: ipEvidence[];
}
/*********************************************
* ipEvidence
**********************************************/
export interface ipEvidence  {
	countryLetterCode: string;
	ipAddress: string;
	location: geoLocation;
	stream: stream;
}
/*********************************************
* dynamicColumnValue
**********************************************/
export interface dynamicColumnValue  {

}
/*********************************************
* fileDetails
**********************************************/
export interface fileDetails  {
	fileName: string;
	filePath: string;
	filePublisher: string;
	fileSize: number;
	issuer: string;
	sha1: string;
	sha256: string;
	signer: string;
}
/*********************************************
* fileEvidence
**********************************************/
export interface fileEvidence  {
	detectionStatus: EnumTypes.detectionStatus;
	fileDetails: fileDetails;
	mdeDeviceId: string;
}
/*********************************************
* fileHashEvidence
**********************************************/
export interface fileHashEvidence  {
	algorithm: EnumTypes.fileHashAlgorithm;
	value: string;
}
/*********************************************
* geoLocation
**********************************************/
export interface geoLocation  {
	city: string;
	countryName: string;
	latitude: number;
	longitude: number;
	state: string;
}
/*********************************************
* gitHubOrganizationEvidence
**********************************************/
export interface gitHubOrganizationEvidence  {
	company: string;
	displayName: string;
	email: string;
	login: string;
	orgId: string;
	webUrl: string;
}
/*********************************************
* gitHubRepoEvidence
**********************************************/
export interface gitHubRepoEvidence  {
	baseUrl: string;
	login: string;
	owner: string;
	ownerType: string;
	repoId: string;
}
/*********************************************
* gitHubUserEvidence
**********************************************/
export interface gitHubUserEvidence  {
	email: string;
	login: string;
	name: string;
	userId: string;
	webUrl: string;
}
/*********************************************
* googleCloudResourceEvidence
**********************************************/
export interface googleCloudResourceEvidence  {
	fullResourceName: string;
	location: string;
	locationType: EnumTypes.googleCloudLocationType;
	projectId: string;
	projectNumber: number;
	resourceName: string;
	resourceType: string;
}
/*********************************************
* hostLogonSessionEvidence
**********************************************/
export interface hostLogonSessionEvidence  {
	account: userEvidence;
	endUtcDateTime: any;
	host: deviceEvidence;
	sessionId: string;
	startUtcDateTime: any;
}
/*********************************************
* huntingQueryResults
**********************************************/
export interface huntingQueryResults  {
	results: huntingRowResult[];
	schema: singlePropertySchema[];
}
/*********************************************
* huntingRowResult
**********************************************/
export interface huntingRowResult  {

}
/*********************************************
* singlePropertySchema
**********************************************/
export interface singlePropertySchema  {
	name: string;
	type: string;
}
/*********************************************
* ioTDeviceEvidence
**********************************************/
export interface ioTDeviceEvidence  {
	deviceId: string;
	deviceName: string;
	devicePageLink: string;
	deviceSubType: string;
	deviceType: string;
	importance: EnumTypes.ioTDeviceImportanceType;
	ioTHub: azureResourceEvidence;
	ioTSecurityAgentId: string;
	ipAddress: ipEvidence;
	isAuthorized: boolean;
	isProgramming: boolean;
	isScanner: boolean;
	macAddress: string;
	manufacturer: string;
	model: string;
	nics: nicEvidence[];
	operatingSystem: string;
	owners: Array<string>;
	protocols: Array<string>;
	purdueLayer: string;
	sensor: string;
	serialNumber: string;
	site: string;
	source: string;
	sourceRef: urlEvidence;
	zone: string;
}
/*********************************************
* nicEvidence
**********************************************/
export interface nicEvidence  {
	ipAddress: ipEvidence;
	macAddress: string;
	vlans: Array<string>;
}
/*********************************************
* urlEvidence
**********************************************/
export interface urlEvidence  {
	url: string;
}
/*********************************************
* kubernetesClusterEvidence
**********************************************/
export interface kubernetesClusterEvidence  {
	cloudResource: alertEvidence;
	distribution: string;
	name: string;
	platform: EnumTypes.kubernetesPlatform;
	version: string;
}
/*********************************************
* kubernetesControllerEvidence
**********************************************/
export interface kubernetesControllerEvidence  {
	labels: dictionary;
	name: string;
	namespace: kubernetesNamespaceEvidence;
	type: string;
}
/*********************************************
* kubernetesNamespaceEvidence
**********************************************/
export interface kubernetesNamespaceEvidence  {
	cluster: kubernetesClusterEvidence;
	labels: dictionary;
	name: string;
}
/*********************************************
* kubernetesServiceAccountEvidence
**********************************************/
export interface kubernetesServiceAccountEvidence  {
	name: string;
	namespace: kubernetesNamespaceEvidence;
}
/*********************************************
* kubernetesSecretEvidence
**********************************************/
export interface kubernetesSecretEvidence  {
	name: string;
	namespace: kubernetesNamespaceEvidence;
	secretType: string;
}
/*********************************************
* kubernetesServiceEvidence
**********************************************/
export interface kubernetesServiceEvidence  {
	clusterIP: ipEvidence;
	externalIPs: ipEvidence[];
	labels: dictionary;
	name: string;
	namespace: kubernetesNamespaceEvidence;
	selector: dictionary;
	servicePorts: kubernetesServicePort[];
	serviceType: EnumTypes.kubernetesServiceType;
}
/*********************************************
* kubernetesServicePort
**********************************************/
export interface kubernetesServicePort  {
	appProtocol: string;
	name: string;
	nodePort: number;
	port: number;
	protocol: EnumTypes.containerPortProtocol;
	targetPort: string;
}
/*********************************************
* mailboxConfigurationEvidence
**********************************************/
export interface mailboxConfigurationEvidence  {
	configurationId: string;
	configurationType: EnumTypes.mailboxConfigurationType;
	displayName: string;
	externalDirectoryObjectId: any;
	mailboxPrimaryAddress: string;
	upn: string;
}
/*********************************************
* mailboxEvidence
**********************************************/
export interface mailboxEvidence  {
	displayName: string;
	primaryAddress: string;
	userAccount: userAccount;
}
/*********************************************
* userAccount
**********************************************/
export interface userAccount  {
	accountName: string;
	azureAdUserId: string;
	displayName: string;
	domainName: string;
	userPrincipalName: string;
	userSid: string;
}
/*********************************************
* mailClusterEvidence
**********************************************/
export interface mailClusterEvidence  {
	clusterBy: string;
	clusterByValue: string;
	emailCount: number;
	networkMessageIds: Array<string>;
	query: string;
	urn: string;
}
/*********************************************
* malwareEvidence
**********************************************/
export interface malwareEvidence  {
	category: string;
	files: fileEvidence[];
	name: string;
	processes: processEvidence[];
}
/*********************************************
* processEvidence
**********************************************/
export interface processEvidence  {
	detectionStatus: EnumTypes.detectionStatus;
	imageFile: fileDetails;
	mdeDeviceId: string;
	parentProcessCreationDateTime: any;
	parentProcessId: number;
	parentProcessImageFile: fileDetails;
	processCommandLine: string;
	processCreationDateTime: any;
	processId: number;
	userAccount: userAccount;
}
/*********************************************
* networkConnectionEvidence
**********************************************/
export interface networkConnectionEvidence  {
	destinationAddress: ipEvidence;
	destinationPort: number;
	protocol: EnumTypes.protocolType;
	sourceAddress: ipEvidence;
	sourcePort: number;
}
/*********************************************
* oauthApplicationEvidence
**********************************************/
export interface oauthApplicationEvidence  {
	appId: string;
	displayName: string;
	objectId: string;
	publisher: string;
}
/*********************************************
* registryKeyEvidence
**********************************************/
export interface registryKeyEvidence  {
	registryHive: string;
	registryKey: string;
}
/*********************************************
* registryValueEvidence
**********************************************/
export interface registryValueEvidence  {
	mdeDeviceId: string;
	registryHive: string;
	registryKey: string;
	registryValue: string;
	registryValueName: string;
	registryValueType: string;
}
/*********************************************
* sasTokenEvidence
**********************************************/
export interface sasTokenEvidence  {
	allowedIpAddresses: string;
	allowedResourceTypes: Array<string>;
	allowedServices: Array<string>;
	expiryDateTime: any;
	permissions: Array<string>;
	protocol: string;
	signatureHash: string;
	signedWith: string;
	startDateTime: any;
	storageResource: azureResourceEvidence;
}
/*********************************************
* securityGroupEvidence
**********************************************/
export interface securityGroupEvidence  {
	displayName: string;
	securityGroupId: string;
}
/*********************************************
* servicePrincipalEvidence
**********************************************/
export interface servicePrincipalEvidence  {
	appId: string;
	appOwnerTenantId: string;
	servicePrincipalName: string;
	servicePrincipalObjectId: string;
	servicePrincipalType: EnumTypes.servicePrincipalType;
	tenantId: string;
}
/*********************************************
* submissionMailEvidence
**********************************************/
export interface submissionMailEvidence  {
	networkMessageId: string;
	recipient: string;
	reportType: string;
	sender: string;
	senderIp: string;
	subject: string;
	submissionDateTime: any;
	submissionId: string;
	submitter: string;
}
/*********************************************
* eventPropagationResult
**********************************************/
export interface eventPropagationResult  {
	location: string;
	serviceName: string;
	status: EnumTypes.eventPropagationStatus;
	statusInformation: string;
}
/*********************************************
* eventQuery
**********************************************/
export interface eventQuery  {
	query: string;
	queryType: EnumTypes.queryType;
}
/*********************************************
* filePlanDescriptorBase
**********************************************/
export interface filePlanDescriptorBase  {
	displayName: string;
}
/*********************************************
* filePlanAppliedCategory
**********************************************/
export interface filePlanAppliedCategory  {
	subcategory: filePlanSubcategory;
}
/*********************************************
* filePlanSubcategory
**********************************************/
export interface filePlanSubcategory  {

}
/*********************************************
* filePlanAuthority
**********************************************/
export interface filePlanAuthority  {

}
/*********************************************
* filePlanCitation
**********************************************/
export interface filePlanCitation  {
	citationJurisdiction: string;
	citationUrl: string;
}
/*********************************************
* filePlanDepartment
**********************************************/
export interface filePlanDepartment  {

}
/*********************************************
* filePlanReference
**********************************************/
export interface filePlanReference  {

}
/*********************************************
* retentionDuration
**********************************************/
export interface retentionDuration  {

}
/*********************************************
* retentionDurationForever
**********************************************/
export interface retentionDurationForever  {

}
/*********************************************
* retentionDurationInDays
**********************************************/
export interface retentionDurationInDays  {
	days: number;
}
/*********************************************
* retentionEventStatus
**********************************************/
export interface retentionEventStatus  {
	error: publicError;
	status: EnumTypes.eventStatusType;
}
/*********************************************
* autonomousSystem
**********************************************/
export interface autonomousSystem  {
	name: string;
	number: number;
	organization: string;
	value: string;
}
/*********************************************
* cvssSummary
**********************************************/
export interface cvssSummary  {
	score: number;
	severity: EnumTypes.vulnerabilitySeverity;
	vectorString: string;
}
/*********************************************
* formattedContent
**********************************************/
export interface formattedContent  {
	content: string;
	format: EnumTypes.contentFormat;
}
/*********************************************
* hostPortBanner
**********************************************/
export interface hostPortBanner  {
	banner: string;
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	scanProtocol: string;
	timesObserved: number;
}
/*********************************************
* hostPortComponent
**********************************************/
export interface hostPortComponent  {
	firstSeenDateTime: any;
	isRecent: boolean;
	lastSeenDateTime: any;
}
/*********************************************
* hostReputationRule
**********************************************/
export interface hostReputationRule  {
	description: string;
	name: string;
	relatedDetailsUrl: string;
	severity: EnumTypes.hostReputationRuleSeverity;
}
/*********************************************
* hostSslCertificatePort
**********************************************/
export interface hostSslCertificatePort  {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
	port: number;
}
/*********************************************
* hyperlink
**********************************************/
export interface hyperlink  {
	name: string;
	url: string;
}
/*********************************************
* intelligenceProfileCountryOrRegionOfOrigin
**********************************************/
export interface intelligenceProfileCountryOrRegionOfOrigin  {
	code: string;
	label: string;
}
/*********************************************
* sslCertificateEntity
**********************************************/
export interface sslCertificateEntity  {
	address: physicalAddress;
	alternateNames: Array<string>;
	commonName: string;
	email: string;
	givenName: string;
	organizationName: string;
	organizationUnitName: string;
	serialNumber: string;
	surname: string;
}
/*********************************************
* whoisContact
**********************************************/
export interface whoisContact  {
	address: physicalAddress;
	email: string;
	fax: string;
	name: string;
	organization: string;
	telephone: string;
}
/*********************************************
* whoisNameserver
**********************************************/
export interface whoisNameserver  {
	firstSeenDateTime: any;
	lastSeenDateTime: any;
}
/*********************************************
* localizedDescription
**********************************************/
export interface localizedDescription  {
	description: string;
	languageTag: string;
}
/*********************************************
* localizedLabel
**********************************************/
export interface localizedLabel  {
	isDefault: boolean;
	languageTag: string;
	name: string;
}
/*********************************************
* localizedName
**********************************************/
export interface localizedName  {
	languageTag: string;
	name: string;
}
/*********************************************
* administrativeUnitInfo
**********************************************/
export interface administrativeUnitInfo  {
	id: string;
}
/*********************************************
* userAgent
**********************************************/
export interface userAgent  {
	applicationVersion: string;
	headerValue: string;
}
/*********************************************
* clientUserAgent
**********************************************/
export interface clientUserAgent  {
	azureADAppId: string;
	communicationServiceId: string;
	platform: EnumTypes.clientPlatform;
	productFamily: EnumTypes.productFamily;
}
/*********************************************
* deviceInfo
**********************************************/
export interface deviceInfo  {
	captureDeviceDriver: string;
	captureDeviceName: string;
	captureNotFunctioningEventRatio: any;
	cpuInsufficentEventRatio: any;
	deviceClippingEventRatio: any;
	deviceGlitchEventRatio: any;
	howlingEventCount: number;
	initialSignalLevelRootMeanSquare: any;
	lowSpeechLevelEventRatio: any;
	lowSpeechToNoiseEventRatio: any;
	micGlitchRate: any;
	receivedNoiseLevel: number;
	receivedSignalLevel: number;
	renderDeviceDriver: string;
	renderDeviceName: string;
	renderMuteEventRatio: any;
	renderNotFunctioningEventRatio: any;
	renderZeroVolumeEventRatio: any;
	sentNoiseLevel: number;
	sentSignalLevel: number;
	speakerGlitchRate: any;
}
/*********************************************
* directRoutingLogRow
**********************************************/
export interface directRoutingLogRow  {
	calleeNumber: string;
	callEndSubReason: number;
	callerNumber: string;
	callType: string;
	correlationId: string;
	duration: number;
	endDateTime: any;
	failureDateTime: any;
	finalSipCode: number;
	finalSipCodePhrase: string;
	id: string;
	inviteDateTime: any;
	mediaBypassEnabled: boolean;
	mediaPathLocation: string;
	signalingLocation: string;
	startDateTime: any;
	successfulCall: boolean;
	trunkFullyQualifiedDomainName: string;
	userDisplayName: string;
	userId: string;
	userPrincipalName: string;
}
/*********************************************
* endpoint
**********************************************/
export interface endpoint  {
	userAgent: userAgent;
}
/*********************************************
* failureInfo
**********************************************/
export interface failureInfo  {
	reason: string;
	stage: EnumTypes.failureStage;
}
/*********************************************
* feedbackTokenSet
**********************************************/
export interface feedbackTokenSet  {

}
/*********************************************
* media
**********************************************/
export interface media  {
	calleeDevice: deviceInfo;
	calleeNetwork: networkInfo;
	callerDevice: deviceInfo;
	callerNetwork: networkInfo;
	label: string;
	streams: mediaStream[];
}
/*********************************************
* networkInfo
**********************************************/
export interface networkInfo  {
	bandwidthLowEventRatio: any;
	basicServiceSetIdentifier: string;
	connectionType: EnumTypes.networkConnectionType;
	delayEventRatio: any;
	dnsSuffix: string;
	ipAddress: string;
	linkSpeed: number;
	macAddress: string;
	networkTransportProtocol: EnumTypes.networkTransportProtocol;
	port: number;
	receivedQualityEventRatio: any;
	reflexiveIPAddress: string;
	relayIPAddress: string;
	relayPort: number;
	sentQualityEventRatio: any;
	subnet: string;
	traceRouteHops: traceRouteHop[];
	wifiBand: EnumTypes.wifiBand;
	wifiBatteryCharge: number;
	wifiChannel: number;
	wifiMicrosoftDriver: string;
	wifiMicrosoftDriverVersion: string;
	wifiRadioType: EnumTypes.wifiRadioType;
	wifiSignalStrength: number;
	wifiVendorDriver: string;
	wifiVendorDriverVersion: string;
}
/*********************************************
* traceRouteHop
**********************************************/
export interface traceRouteHop  {
	hopCount: number;
	ipAddress: string;
	roundTripTime: number;
}
/*********************************************
* participantEndpoint
**********************************************/
export interface participantEndpoint  {
	associatedIdentity: identity;
	cpuCoresCount: number;
	cpuName: string;
	cpuProcessorSpeedInMhz: number;
	feedback: userFeedback;
	identity: identitySet;
	name: string;
}
/*********************************************
* userFeedback
**********************************************/
export interface userFeedback  {
	rating: EnumTypes.userFeedbackRating;
	text: string;
	tokens: feedbackTokenSet;
}
/*********************************************
* pstnCallLogRow
**********************************************/
export interface pstnCallLogRow  {
	callDurationSource: EnumTypes.pstnCallDurationSource;
	calleeNumber: string;
	callerNumber: string;
	callId: string;
	callType: string;
	charge: number;
	conferenceId: string;
	connectionCharge: number;
	currency: string;
	destinationContext: string;
	destinationName: string;
	duration: number;
	endDateTime: any;
	id: string;
	inventoryType: string;
	licenseCapability: string;
	operator: string;
	startDateTime: any;
	tenantCountryCode: string;
	usageCountryCode: string;
	userDisplayName: string;
	userId: string;
	userPrincipalName: string;
}
/*********************************************
* serviceEndpoint
**********************************************/
export interface serviceEndpoint  {

}
/*********************************************
* serviceUserAgent
**********************************************/
export interface serviceUserAgent  {
	role: EnumTypes.serviceRole;
}
/*********************************************
* blob
**********************************************/
export interface blob  {
	name: string;
	partitionValue: string;
}
/*********************************************
* answerKeyword
**********************************************/
export interface answerKeyword  {
	keywords: Array<string>;
	matchSimilarKeywords: boolean;
	reservedKeywords: Array<string>;
}
/*********************************************
* answerVariant
**********************************************/
export interface answerVariant  {
	description: string;
	displayName: string;
	languageTag: string;
	platform: EnumTypes.devicePlatformType;
	webUrl: string;
}
/*********************************************
* acl
**********************************************/
export interface acl  {
	accessType: EnumTypes.accessType;
	type: EnumTypes.aclType;
	value: string;
}
/*********************************************
* activitySettings
**********************************************/
export interface activitySettings  {
	urlToItemResolvers: urlToItemResolverBase[];
}
/*********************************************
* urlToItemResolverBase
**********************************************/
export interface urlToItemResolverBase  {
	priority: number;
}
/*********************************************
* configuration
**********************************************/
export interface configuration  {
	authorizedAppIds: Array<string>;
}
/*********************************************
* displayTemplate
**********************************************/
export interface displayTemplate  {
	id: string;
	layout: Json;
	priority: number;
	rules: propertyRule[];
}
/*********************************************
* propertyRule
**********************************************/
export interface propertyRule  {
	operation: EnumTypes.ruleOperation;
	property: string;
	values: Array<string>;
	valuesJoinedBy: EnumTypes.binaryOperator;
}
/*********************************************
* externalItemContent
**********************************************/
export interface externalItemContent  {
	type: EnumTypes.externalItemContentType;
	value: string;
}
/*********************************************
* itemIdResolver
**********************************************/
export interface itemIdResolver  {
	itemId: string;
	urlMatchInfo: urlMatchInfo;
}
/*********************************************
* urlMatchInfo
**********************************************/
export interface urlMatchInfo  {
	baseUrls: Array<string>;
	urlPattern: string;
}
/*********************************************
* properties
**********************************************/
export interface properties  {

}
/*********************************************
* property
**********************************************/
export interface property  {
	aliases: Array<string>;
	isQueryable: boolean;
	isRefinable: boolean;
	isRetrievable: boolean;
	isSearchable: boolean;
	labels: EnumTypes.label[];
	name: string;
	type: EnumTypes.propertyType;
}
/*********************************************
* searchSettings
**********************************************/
export interface searchSettings  {
	searchResultTemplates: displayTemplate[];
}