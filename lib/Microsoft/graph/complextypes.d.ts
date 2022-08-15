import * as EnumTypes from "./enumTypes.d";
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
	enforcedGrantControls: Array<string>[];
	enforcedSessionControls: Array<string>[];
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
* identity
**********************************************/
export interface identity  {
	displayName: string;
	id: string;
}
/*********************************************
* userIdentity
**********************************************/
export interface userIdentity  {
	ipAddress: string;
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
* assignedLicense
**********************************************/
export interface assignedLicense  {
	disabledPlans: Array<any>[];
	skuId: any;
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
	disabledPlans: Array<any>[];
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
* onPremisesProvisioningError
**********************************************/
export interface onPremisesProvisioningError  {
	category: string;
	occurredDateTime: any;
	propertyCausingError: string;
	value: string;
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
* applicationServicePrincipal
**********************************************/
export interface applicationServicePrincipal  {

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
	knownClientApplications: Array<any>[];
	oauth2PermissionScopes: permissionScope[];
	preAuthorizedApplications: preAuthorizedApplication[];
	requestedAccessTokenVersion: number;
}
/*********************************************
* appRole
**********************************************/
export interface appRole  {
	allowedMemberTypes: Array<string>[];
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
	countriesBlockedForMinors: Array<string>[];
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
	redirectUris: Array<string>[];
}
/*********************************************
* requiredResourceAccess
**********************************************/
export interface requiredResourceAccess  {
	resourceAccess: resourceAccess[];
	resourceAppId: string;
}
/*********************************************
* spaApplication
**********************************************/
export interface spaApplication  {
	redirectUris: Array<string>[];
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
	redirectUris: Array<string>[];
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
	aaGuids: Array<string>[];
	enforcementType: EnumTypes.fido2RestrictionEnforcementType;
	isEnforced: boolean;
}
/*********************************************
* registrationEnforcement
**********************************************/
export interface registrationEnforcement  {
	authenticationMethodsRegistrationCampaign: authenticationMethodsRegistrationCampaign;
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
	answerOptions: Array<string>[];
	isRequired: boolean;
	question: string;
	questionId: string;
	selectedOptions: Array<string>[];
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
* bookingSchedulingPolicy
**********************************************/
export interface bookingSchedulingPolicy  {
	allowStaffSelection: boolean;
	maximumAdvance: number;
	minimumLeadTime: number;
	sendConfirmationsToOwner: boolean;
	timeSlotInterval: number;
}
/*********************************************
* bookingWorkHours
**********************************************/
export interface bookingWorkHours  {
	day: EnumTypes.dayOfWeek;
	timeSlots: bookingWorkTimeSlot[];
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
* keyValuePair
**********************************************/
export interface keyValuePair  {
	name: string;
	value: string;
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
* assignedLabel
**********************************************/
export interface assignedLabel  {
	displayName: string;
	labelId: string;
}
/*********************************************
* licenseProcessingState
**********************************************/
export interface licenseProcessingState  {
	state: string;
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
	order: Array<string>[];
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
	delegatedPermissionIds: Array<string>[];
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
* defaultUserRolePermissions
**********************************************/
export interface defaultUserRolePermissions  {
	allowedToCreateApps: boolean;
	allowedToCreateSecurityGroups: boolean;
	allowedToReadOtherUsers: boolean;
	permissionGrantPoliciesAssigned: Array<string>[];
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
	suspended: number;
	warning: number;
}
/*********************************************
* optionalClaim
**********************************************/
export interface optionalClaim  {
	additionalProperties: Array<string>[];
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
* unifiedRolePermission
**********************************************/
export interface unifiedRolePermission  {
	allowedResourceActions: Array<string>[];
	condition: string;
	excludedResourceActions: Array<string>[];
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
	recipients: Array<string>[];
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
* genericError
**********************************************/
export interface genericError  {
	code: string;
	message: string;
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
	assignCategories: Array<string>[];
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
	bodyContains: Array<string>[];
	bodyOrSubjectContains: Array<string>[];
	categories: Array<string>[];
	fromAddresses: recipient[];
	hasAttachments: boolean;
	headerContains: Array<string>[];
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
	recipientContains: Array<string>[];
	senderContains: Array<string>[];
	sensitivity: EnumTypes.sensitivity;
	sentCcMe: boolean;
	sentOnlyToMe: boolean;
	sentToAddresses: recipient[];
	sentToMe: boolean;
	sentToOrCcMe: boolean;
	subjectContains: Array<string>[];
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
	tollFreeNumbers: Array<string>[];
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
	nextExpectedRanges: Array<string>[];
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
	choices: Array<string>[];
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
* driveItemUploadableProperties
**********************************************/
export interface driveItemUploadableProperties  {
	description: string;
	fileSize: number;
	fileSystemInfo: fileSystemInfo;
	name: string;
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
* extensionSchemaProperty
**********************************************/
export interface extensionSchemaProperty  {
	name: string;
	type: string;
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
	recommendationsEnabled: boolean;
	recurrence: patternedRecurrence;
	reminderNotificationsEnabled: boolean;
}
/*********************************************
* accessReviewStageSettings
**********************************************/
export interface accessReviewStageSettings  {
	decisionsThatWillMoveToNextStage: Array<string>[];
	dependsOn: Array<string>[];
	durationInDays: number;
	fallbackReviewers: accessReviewReviewerScope[];
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
* cloudAppSecuritySessionControl
**********************************************/
export interface cloudAppSecuritySessionControl  {
	cloudAppSecurityType: EnumTypes.cloudAppSecuritySessionControlType;
}
/*********************************************
* conditionalAccessApplications
**********************************************/
export interface conditionalAccessApplications  {
	excludeApplications: Array<string>[];
	includeApplications: Array<string>[];
	includeAuthenticationContextClassReferences: Array<string>[];
	includeUserActions: Array<string>[];
}
/*********************************************
* conditionalAccessClientApplications
**********************************************/
export interface conditionalAccessClientApplications  {
	excludeServicePrincipals: Array<string>[];
	includeServicePrincipals: Array<string>[];
}
/*********************************************
* conditionalAccessConditionSet
**********************************************/
export interface conditionalAccessConditionSet  {
	applications: conditionalAccessApplications;
	clientApplications: conditionalAccessClientApplications;
	clientAppTypes: EnumTypes.conditionalAccessClientApp[];
	devices: conditionalAccessDevices;
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
	excludeLocations: Array<string>[];
	includeLocations: Array<string>[];
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
	excludeGroups: Array<string>[];
	excludeRoles: Array<string>[];
	excludeUsers: Array<string>[];
	includeGroups: Array<string>[];
	includeRoles: Array<string>[];
	includeUsers: Array<string>[];
}
/*********************************************
* conditionalAccessFilter
**********************************************/
export interface conditionalAccessFilter  {
	mode: EnumTypes.filterMode;
	rule: string;
}
/*********************************************
* conditionalAccessGrantControls
**********************************************/
export interface conditionalAccessGrantControls  {
	builtInControls: EnumTypes.conditionalAccessGrantControl[];
	customAuthenticationFactors: Array<string>[];
	operator: string;
	termsOfUse: Array<string>[];
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
* riskUserActivity
**********************************************/
export interface riskUserActivity  {
	detail: EnumTypes.riskDetail;
	riskEventTypes: Array<string>[];
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
* subjectSet
**********************************************/
export interface subjectSet  {

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
	v8_0: boolean;
	v9_0: boolean;
}
/*********************************************
* iosStoreAppAssignmentSettings
**********************************************/
export interface iosStoreAppAssignmentSettings  {
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
	deliveryOptimizationPriority: EnumTypes.win32LobAppDeliveryOptimizationPriority;
	installTimeSettings: mobileAppInstallTimeSettings;
	notifications: EnumTypes.win32LobAppNotification;
	restartSettings: win32LobAppRestartSettings;
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
* windowsMinimumOperatingSystem
**********************************************/
export interface windowsMinimumOperatingSystem  {
	v10_0: boolean;
	v8_0: boolean;
	v8_1: boolean;
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
	exceptions: Array<string>[];
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
* deviceEnrollmentPlatformRestriction
**********************************************/
export interface deviceEnrollmentPlatformRestriction  {
	osMaximumVersion: string;
	osMinimumVersion: string;
	personalDeviceEnrollmentBlocked: boolean;
	platformBlocked: boolean;
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
	androidCount: number;
	iosCount: number;
	macOSCount: number;
	unknownCount: number;
	windowsCount: number;
	windowsMobileCount: number;
}
/*********************************************
* locateDeviceActionResult
**********************************************/
export interface locateDeviceActionResult  {
	deviceLocation: deviceGeoLocation;
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
	passcode: string;
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
* importedWindowsAutopilotDeviceIdentityState
**********************************************/
export interface importedWindowsAutopilotDeviceIdentityState  {
	deviceErrorCode: number;
	deviceErrorName: string;
	deviceImportStatus: EnumTypes.importedWindowsAutopilotDeviceIdentityImportStatus;
	deviceRegistrationId: string;
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
	resources: Array<string>[];
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
	allowedResourceActions: Array<string>[];
	notAllowedResourceActions: Array<string>[];
}
/*********************************************
* rolePermission
**********************************************/
export interface rolePermission  {
	resourceActions: resourceAction[];
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
* resultTemplate
**********************************************/
export interface resultTemplate  {
	body: Json;
	displayName: string;
}
/*********************************************
* Dictionary
**********************************************/
export interface Dictionary  {

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
}
/*********************************************
* searchRequest
**********************************************/
export interface searchRequest  {
	aggregationFilters: Array<string>[];
	aggregations: aggregationOption[];
	contentSources: Array<string>[];
	enableTopResults: boolean;
	entityTypes: EnumTypes.entityType[];
	fields: Array<string>[];
	from: number;
	query: searchQuery;
	queryAlterationOptions: searchAlterationOptions;
	resultTemplateOptions: resultTemplateOption;
	size: number;
	sortProperties: sortProperty[];
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
	searchTerms: Array<string>[];
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
	enforcedSettings: Array<string>[];
	inheritableSettings: Array<string>[];
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
	bottomMargins: Array<number>[];
	collation: boolean;
	colorModes: EnumTypes.printColorMode[];
	contentTypes: Array<string>[];
	copiesPerJob: integerRange;
	dpis: Array<number>[];
	duplexModes: EnumTypes.printDuplexMode[];
	feedOrientations: EnumTypes.printerFeedOrientation[];
	finishings: EnumTypes.printFinishing[];
	inputBins: Array<string>[];
	isColorPrintingSupported: boolean;
	isPageRangeSupported: boolean;
	leftMargins: Array<number>[];
	mediaColors: Array<string>[];
	mediaSizes: Array<string>[];
	mediaTypes: Array<string>[];
	multipageLayouts: EnumTypes.printMultipageLayout[];
	orientations: EnumTypes.printOrientation[];
	outputBins: Array<string>[];
	pagesPerSheet: Array<number>[];
	qualities: EnumTypes.printQuality[];
	rightMargins: Array<number>[];
	scalings: EnumTypes.printScaling[];
	supportsFitPdfToPage: boolean;
	topMargins: Array<number>[];
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
	organization: Array<string>[];
	postalCode: string;
	roomDescription: string;
	roomName: string;
	site: string;
	stateOrProvince: string;
	streetAddress: string;
	subdivision: Array<string>[];
	subunit: Array<string>[];
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
	comments: Array<string>[];
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
	hashType: EnumTypes.fileHashType;
	hashValue: string;
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
	tollFreeNumbers: Array<string>[];
	tollNumber: string;
	tollNumbers: Array<string>[];
}
/*********************************************
* broadcastMeetingSettings
**********************************************/
export interface broadcastMeetingSettings  {
	allowedAudience: EnumTypes.broadcastMeetingAudience;
	isAttendeeReportEnabled: boolean;
	isQuestionAndAnswerEnabled: boolean;
	isRecordingEnabled: boolean;
	isVideoOnDemandEnabled: boolean;
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
* lobbyBypassSettings
**********************************************/
export interface lobbyBypassSettings  {
	isDialInBypassEnabled: boolean;
	scope: EnumTypes.lobbyBypassScope;
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
	averageJitter: number;
	averagePacketLossRate: any;
	averageRatioOfConcealedSamples: any;
	averageReceivedFrameRate: any;
	averageRoundTripTime: number;
	averageVideoFrameLossPercentage: any;
	averageVideoFrameRate: any;
	averageVideoPacketLossRate: any;
	endDateTime: any;
	lowFrameRateRatio: any;
	lowVideoProcessingCapabilityRatio: any;
	maxAudioNetworkJitter: number;
	maxJitter: number;
	maxPacketLossRate: any;
	maxRatioOfConcealedSamples: any;
	maxRoundTripTime: number;
	packetUtilization: number;
	postForwardErrorCorrectionPacketLossRate: any;
	startDateTime: any;
	streamDirection: EnumTypes.mediaStreamDirection;
	streamId: string;
	videoCodec: EnumTypes.videoCodec;
	wasMediaBypassed: boolean;
}
/*********************************************
* meetingInfo
**********************************************/
export interface meetingInfo  {

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
* meetingParticipants
**********************************************/
export interface meetingParticipants  {
	attendees: meetingParticipantInfo[];
	organizer: meetingParticipantInfo;
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
	validationTokens: Array<string>[];
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
* channelUnsetAsFavoriteByDefaultEventMessageDetail
**********************************************/
export interface channelUnsetAsFavoriteByDefaultEventMessageDetail  {
	channelId: string;
	initiator: identitySet;
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
	thumbnailUrl: string;
}
/*********************************************
* chatMessageFromIdentitySet
**********************************************/
export interface chatMessageFromIdentitySet  {

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
	matchedConditionDescriptions: Array<string>[];
}
/*********************************************
* chatMessageReaction
**********************************************/
export interface chatMessageReaction  {
	createdDateTime: any;
	reactionType: string;
	user: chatMessageReactionIdentitySet;
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
* conversationMemberRoleUpdatedEventMessageDetail
**********************************************/
export interface conversationMemberRoleUpdatedEventMessageDetail  {
	conversationMemberRoles: Array<string>[];
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
* teamRenamedEventMessageDetail
**********************************************/
export interface teamRenamedEventMessageDetail  {
	initiator: identitySet;
	teamDisplayName: string;
	teamId: string;
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
	feedback: userFeedback;
	identity: identitySet;
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
* acl
**********************************************/
export interface acl  {
	accessType: EnumTypes.accessType;
	type: EnumTypes.aclType;
	value: string;
}
/*********************************************
* configuration
**********************************************/
export interface configuration  {
	authorizedAppIds: Array<string>[];
}
/*********************************************
* externalItemContent
**********************************************/
export interface externalItemContent  {
	type: EnumTypes.externalItemContentType;
	value: string;
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
	aliases: Array<string>[];
	isQueryable: boolean;
	isRefinable: boolean;
	isRetrievable: boolean;
	isSearchable: boolean;
	labels: EnumTypes.label[];
	name: string;
	type: EnumTypes.propertyType;
}