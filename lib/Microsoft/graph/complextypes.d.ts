import { Base } from "../../";
import { graph } from "../";
import { Edm } from "../../";

/*********************************************
* appIdentity
**********************************************/
export interface appIdentity {
	appId?: string;
	displayName?: string;
	servicePrincipalId?: string;
	servicePrincipalName?: string;
}

/*********************************************
* appIdentityCollections
**********************************************/
export interface appIdentityCollections {

}

/*********************************************
* appliedConditionalAccessPolicy
**********************************************/
export interface appliedConditionalAccessPolicy {
	displayName?: string;
	enforcedGrantControls?: Array<string>;
	enforcedSessionControls?: Array<string>;
	id?: string;
	result?: graph.appliedConditionalAccessPolicyResult;
}

/*********************************************
* appliedConditionalAccessPolicyCollections
**********************************************/
export interface appliedConditionalAccessPolicyCollections {

}

/*********************************************
* auditActivityInitiator
**********************************************/
export interface auditActivityInitiator {
	app?: graph.appIdentity;
	user?: graph.userIdentity;
}

/*********************************************
* auditActivityInitiatorCollections
**********************************************/
export interface auditActivityInitiatorCollections {

}

/*********************************************
* identity
**********************************************/
export interface identity {
	displayName?: string;
	id?: string;
}

/*********************************************
* identityCollections
**********************************************/
export interface identityCollections {

}

/*********************************************
* userIdentity
**********************************************/
export interface userIdentity {
	ipAddress?: string;
	userPrincipalName?: string;
}

/*********************************************
* userIdentityCollections
**********************************************/
export interface userIdentityCollections {

}

/*********************************************
* detailsInfo
**********************************************/
export interface detailsInfo {

}

/*********************************************
* detailsInfoCollections
**********************************************/
export interface detailsInfoCollections {

}

/*********************************************
* deviceDetail
**********************************************/
export interface deviceDetail {
	browser?: string;
	deviceId?: string;
	displayName?: string;
	isCompliant?: boolean;
	isManaged?: boolean;
	operatingSystem?: string;
	trustType?: string;
}

/*********************************************
* deviceDetailCollections
**********************************************/
export interface deviceDetailCollections {

}

/*********************************************
* geoCoordinates
**********************************************/
export interface geoCoordinates {
	altitude?: number;
	latitude?: number;
	longitude?: number;
}

/*********************************************
* geoCoordinatesCollections
**********************************************/
export interface geoCoordinatesCollections {

}

/*********************************************
* initiator
**********************************************/
export interface initiator {
	initiatorType?: graph.initiatorType;
}

/*********************************************
* initiatorCollections
**********************************************/
export interface initiatorCollections {

}

/*********************************************
* keyValue
**********************************************/
export interface keyValue {
	key?: string;
	value?: string;
}

/*********************************************
* keyValueCollections
**********************************************/
export interface keyValueCollections {

}

/*********************************************
* modifiedProperty
**********************************************/
export interface modifiedProperty {
	displayName?: string;
	newValue?: string;
	oldValue?: string;
}

/*********************************************
* modifiedPropertyCollections
**********************************************/
export interface modifiedPropertyCollections {

}

/*********************************************
* provisionedIdentity
**********************************************/
export interface provisionedIdentity {
	details?: graph.detailsInfo;
	identityType?: string;
}

/*********************************************
* provisionedIdentityCollections
**********************************************/
export interface provisionedIdentityCollections {

}

/*********************************************
* provisioningErrorInfo
**********************************************/
export interface provisioningErrorInfo {
	additionalDetails?: string;
	errorCategory?: graph.provisioningStatusErrorCategory;
	errorCode?: string;
	reason?: string;
	recommendedAction?: string;
}

/*********************************************
* provisioningErrorInfoCollections
**********************************************/
export interface provisioningErrorInfoCollections {

}

/*********************************************
* provisioningServicePrincipal
**********************************************/
export interface provisioningServicePrincipal {

}

/*********************************************
* provisioningServicePrincipalCollections
**********************************************/
export interface provisioningServicePrincipalCollections {

}

/*********************************************
* provisioningStatusInfo
**********************************************/
export interface provisioningStatusInfo {
	errorInformation?: graph.provisioningErrorInfo;
	status?: graph.provisioningResult;
}

/*********************************************
* provisioningStatusInfoCollections
**********************************************/
export interface provisioningStatusInfoCollections {

}

/*********************************************
* provisioningStep
**********************************************/
export interface provisioningStep {
	description?: string;
	details?: graph.detailsInfo;
	name?: string;
	provisioningStepType?: graph.provisioningStepType;
	status?: graph.provisioningResult;
}

/*********************************************
* provisioningStepCollections
**********************************************/
export interface provisioningStepCollections {

}

/*********************************************
* provisioningSystem
**********************************************/
export interface provisioningSystem {
	details?: graph.detailsInfo;
}

/*********************************************
* provisioningSystemCollections
**********************************************/
export interface provisioningSystemCollections {

}

/*********************************************
* signInLocation
**********************************************/
export interface signInLocation {
	city?: string;
	countryOrRegion?: string;
	geoCoordinates?: graph.geoCoordinates;
	state?: string;
}

/*********************************************
* signInLocationCollections
**********************************************/
export interface signInLocationCollections {

}

/*********************************************
* signInStatus
**********************************************/
export interface signInStatus {
	additionalDetails?: string;
	errorCode?: number;
	failureReason?: string;
}

/*********************************************
* signInStatusCollections
**********************************************/
export interface signInStatusCollections {

}

/*********************************************
* targetResource
**********************************************/
export interface targetResource {
	displayName?: string;
	groupType?: graph.groupType;
	id?: string;
	modifiedProperties?: Array<graph.modifiedProperty>;
	type?: string;
	userPrincipalName?: string;
}

/*********************************************
* targetResourceCollections
**********************************************/
export interface targetResourceCollections {

}

/*********************************************
* emailAddress
**********************************************/
export interface emailAddress {
	address?: string;
	name?: string;
}

/*********************************************
* emailAddressCollections
**********************************************/
export interface emailAddressCollections {

}

/*********************************************
* invitedUserMessageInfo
**********************************************/
export interface invitedUserMessageInfo {
	ccRecipients?: Array<graph.recipient>;
	customizedMessageBody?: string;
	messageLanguage?: string;
}

/*********************************************
* invitedUserMessageInfoCollections
**********************************************/
export interface invitedUserMessageInfoCollections {

}

/*********************************************
* recipient
**********************************************/
export interface recipient {
	emailAddress?: graph.emailAddress;
}

/*********************************************
* recipientCollections
**********************************************/
export interface recipientCollections {

}

/*********************************************
* assignedLicense
**********************************************/
export interface assignedLicense {
	disabledPlans?: Array<any>;
	skuId?: any;
}

/*********************************************
* assignedLicenseCollections
**********************************************/
export interface assignedLicenseCollections {

}

/*********************************************
* assignedPlan
**********************************************/
export interface assignedPlan {
	assignedDateTime?: any;
	capabilityStatus?: string;
	service?: string;
	servicePlanId?: any;
}

/*********************************************
* assignedPlanCollections
**********************************************/
export interface assignedPlanCollections {

}

/*********************************************
* employeeOrgData
**********************************************/
export interface employeeOrgData {
	costCenter?: string;
	division?: string;
}

/*********************************************
* employeeOrgDataCollections
**********************************************/
export interface employeeOrgDataCollections {

}

/*********************************************
* objectIdentity
**********************************************/
export interface objectIdentity {
	issuer?: string;
	issuerAssignedId?: string;
	signInType?: string;
}

/*********************************************
* objectIdentityCollections
**********************************************/
export interface objectIdentityCollections {

}

/*********************************************
* licenseAssignmentState
**********************************************/
export interface licenseAssignmentState {
	assignedByGroup?: string;
	disabledPlans?: Array<any>;
	error?: string;
	lastUpdatedDateTime?: any;
	skuId?: any;
	state?: string;
}

/*********************************************
* licenseAssignmentStateCollections
**********************************************/
export interface licenseAssignmentStateCollections {

}

/*********************************************
* onPremisesExtensionAttributes
**********************************************/
export interface onPremisesExtensionAttributes {
	extensionAttribute1?: string;
	extensionAttribute10?: string;
	extensionAttribute11?: string;
	extensionAttribute12?: string;
	extensionAttribute13?: string;
	extensionAttribute14?: string;
	extensionAttribute15?: string;
	extensionAttribute2?: string;
	extensionAttribute3?: string;
	extensionAttribute4?: string;
	extensionAttribute5?: string;
	extensionAttribute6?: string;
	extensionAttribute7?: string;
	extensionAttribute8?: string;
	extensionAttribute9?: string;
}

/*********************************************
* onPremisesExtensionAttributesCollections
**********************************************/
export interface onPremisesExtensionAttributesCollections {

}

/*********************************************
* onPremisesProvisioningError
**********************************************/
export interface onPremisesProvisioningError {
	category?: string;
	occurredDateTime?: any;
	propertyCausingError?: string;
	value?: string;
}

/*********************************************
* onPremisesProvisioningErrorCollections
**********************************************/
export interface onPremisesProvisioningErrorCollections {

}

/*********************************************
* passwordProfile
**********************************************/
export interface passwordProfile {
	forceChangePasswordNextSignIn?: boolean;
	forceChangePasswordNextSignInWithMfa?: boolean;
	password?: string;
}

/*********************************************
* passwordProfileCollections
**********************************************/
export interface passwordProfileCollections {

}

/*********************************************
* provisionedPlan
**********************************************/
export interface provisionedPlan {
	capabilityStatus?: string;
	provisioningStatus?: string;
	service?: string;
}

/*********************************************
* provisionedPlanCollections
**********************************************/
export interface provisionedPlanCollections {

}

/*********************************************
* mailboxSettings
**********************************************/
export interface mailboxSettings {
	archiveFolder?: string;
	automaticRepliesSetting?: graph.automaticRepliesSetting;
	dateFormat?: string;
	delegateMeetingMessageDeliveryOptions?: graph.delegateMeetingMessageDeliveryOptions;
	language?: graph.localeInfo;
	timeFormat?: string;
	timeZone?: string;
	userPurpose?: graph.userPurpose;
	workingHours?: graph.workingHours;
}

/*********************************************
* mailboxSettingsCollections
**********************************************/
export interface mailboxSettingsCollections {

}

/*********************************************
* applicationServicePrincipal
**********************************************/
export interface applicationServicePrincipal {

}

/*********************************************
* applicationServicePrincipalCollections
**********************************************/
export interface applicationServicePrincipalCollections {

}

/*********************************************
* addIn
**********************************************/
export interface addIn {
	id?: any;
	properties?: Array<graph.keyValue>;
	type?: string;
}

/*********************************************
* addInCollections
**********************************************/
export interface addInCollections {

}

/*********************************************
* apiApplication
**********************************************/
export interface apiApplication {
	acceptMappedClaims?: boolean;
	knownClientApplications?: Array<any>;
	oauth2PermissionScopes?: Array<graph.permissionScope>;
	preAuthorizedApplications?: Array<graph.preAuthorizedApplication>;
	requestedAccessTokenVersion?: number;
}

/*********************************************
* apiApplicationCollections
**********************************************/
export interface apiApplicationCollections {

}

/*********************************************
* appRole
**********************************************/
export interface appRole {
	allowedMemberTypes?: Array<string>;
	description?: string;
	displayName?: string;
	id?: any;
	isEnabled?: boolean;
	origin?: string;
	value?: string;
}

/*********************************************
* appRoleCollections
**********************************************/
export interface appRoleCollections {

}

/*********************************************
* certification
**********************************************/
export interface certification {
	certificationDetailsUrl?: string;
	certificationExpirationDateTime?: any;
	isCertifiedByMicrosoft?: boolean;
	isPublisherAttested?: boolean;
	lastCertificationDateTime?: any;
}

/*********************************************
* certificationCollections
**********************************************/
export interface certificationCollections {

}

/*********************************************
* informationalUrl
**********************************************/
export interface informationalUrl {
	logoUrl?: string;
	marketingUrl?: string;
	privacyStatementUrl?: string;
	supportUrl?: string;
	termsOfServiceUrl?: string;
}

/*********************************************
* informationalUrlCollections
**********************************************/
export interface informationalUrlCollections {

}

/*********************************************
* keyCredential
**********************************************/
export interface keyCredential {
	customKeyIdentifier?: any;
	displayName?: string;
	endDateTime?: any;
	key?: any;
	keyId?: any;
	startDateTime?: any;
	type?: string;
	usage?: string;
}

/*********************************************
* keyCredentialCollections
**********************************************/
export interface keyCredentialCollections {

}

/*********************************************
* optionalClaims
**********************************************/
export interface optionalClaims {
	accessToken?: Array<graph.optionalClaim>;
	idToken?: Array<graph.optionalClaim>;
	saml2Token?: Array<graph.optionalClaim>;
}

/*********************************************
* optionalClaimsCollections
**********************************************/
export interface optionalClaimsCollections {

}

/*********************************************
* parentalControlSettings
**********************************************/
export interface parentalControlSettings {
	countriesBlockedForMinors?: Array<string>;
	legalAgeGroupRule?: string;
}

/*********************************************
* parentalControlSettingsCollections
**********************************************/
export interface parentalControlSettingsCollections {

}

/*********************************************
* passwordCredential
**********************************************/
export interface passwordCredential {
	customKeyIdentifier?: any;
	displayName?: string;
	endDateTime?: any;
	hint?: string;
	keyId?: any;
	secretText?: string;
	startDateTime?: any;
}

/*********************************************
* passwordCredentialCollections
**********************************************/
export interface passwordCredentialCollections {

}

/*********************************************
* publicClientApplication
**********************************************/
export interface publicClientApplication {
	redirectUris?: Array<string>;
}

/*********************************************
* publicClientApplicationCollections
**********************************************/
export interface publicClientApplicationCollections {

}

/*********************************************
* requiredResourceAccess
**********************************************/
export interface requiredResourceAccess {
	resourceAccess?: Array<graph.resourceAccess>;
	resourceAppId?: string;
}

/*********************************************
* requiredResourceAccessCollections
**********************************************/
export interface requiredResourceAccessCollections {

}

/*********************************************
* spaApplication
**********************************************/
export interface spaApplication {
	redirectUris?: Array<string>;
}

/*********************************************
* spaApplicationCollections
**********************************************/
export interface spaApplicationCollections {

}

/*********************************************
* verifiedPublisher
**********************************************/
export interface verifiedPublisher {
	addedDateTime?: any;
	displayName?: string;
	verifiedPublisherId?: string;
}

/*********************************************
* verifiedPublisherCollections
**********************************************/
export interface verifiedPublisherCollections {

}

/*********************************************
* webApplication
**********************************************/
export interface webApplication {
	homePageUrl?: string;
	implicitGrantSettings?: graph.implicitGrantSettings;
	logoutUrl?: string;
	redirectUris?: Array<string>;
}

/*********************************************
* webApplicationCollections
**********************************************/
export interface webApplicationCollections {

}

/*********************************************
* permissionScope
**********************************************/
export interface permissionScope {
	adminConsentDescription?: string;
	adminConsentDisplayName?: string;
	id?: any;
	isEnabled?: boolean;
	origin?: string;
	type?: string;
	userConsentDescription?: string;
	userConsentDisplayName?: string;
	value?: string;
}

/*********************************************
* permissionScopeCollections
**********************************************/
export interface permissionScopeCollections {

}

/*********************************************
* resourceSpecificPermission
**********************************************/
export interface resourceSpecificPermission {
	description?: string;
	displayName?: string;
	id?: any;
	isEnabled?: boolean;
	value?: string;
}

/*********************************************
* resourceSpecificPermissionCollections
**********************************************/
export interface resourceSpecificPermissionCollections {

}

/*********************************************
* samlSingleSignOnSettings
**********************************************/
export interface samlSingleSignOnSettings {
	relayState?: string;
}

/*********************************************
* samlSingleSignOnSettingsCollections
**********************************************/
export interface samlSingleSignOnSettingsCollections {

}

/*********************************************
* authenticationMethodsRegistrationCampaign
**********************************************/
export interface authenticationMethodsRegistrationCampaign {
	excludeTargets?: Array<graph.excludeTarget>;
	includeTargets?: Array<graph.authenticationMethodsRegistrationCampaignIncludeTarget>;
	snoozeDurationInDays?: number;
	state?: graph.advancedConfigState;
}

/*********************************************
* authenticationMethodsRegistrationCampaignCollections
**********************************************/
export interface authenticationMethodsRegistrationCampaignCollections {

}

/*********************************************
* excludeTarget
**********************************************/
export interface excludeTarget {
	id?: string;
	targetType?: graph.authenticationMethodTargetType;
}

/*********************************************
* excludeTargetCollections
**********************************************/
export interface excludeTargetCollections {

}

/*********************************************
* authenticationMethodsRegistrationCampaignIncludeTarget
**********************************************/
export interface authenticationMethodsRegistrationCampaignIncludeTarget {
	id?: string;
	targetedAuthenticationMethod?: string;
	targetType?: graph.authenticationMethodTargetType;
}

/*********************************************
* authenticationMethodsRegistrationCampaignIncludeTargetCollections
**********************************************/
export interface authenticationMethodsRegistrationCampaignIncludeTargetCollections {

}

/*********************************************
* fido2KeyRestrictions
**********************************************/
export interface fido2KeyRestrictions {
	aaGuids?: Array<string>;
	enforcementType?: graph.fido2RestrictionEnforcementType;
	isEnforced?: boolean;
}

/*********************************************
* fido2KeyRestrictionsCollections
**********************************************/
export interface fido2KeyRestrictionsCollections {

}

/*********************************************
* registrationEnforcement
**********************************************/
export interface registrationEnforcement {
	authenticationMethodsRegistrationCampaign?: graph.authenticationMethodsRegistrationCampaign;
}

/*********************************************
* registrationEnforcementCollections
**********************************************/
export interface registrationEnforcementCollections {

}

/*********************************************
* availabilityItem
**********************************************/
export interface availabilityItem {
	endDateTime?: graph.dateTimeTimeZone;
	serviceId?: string;
	startDateTime?: graph.dateTimeTimeZone;
	status?: graph.bookingsAvailabilityStatus;
}

/*********************************************
* availabilityItemCollections
**********************************************/
export interface availabilityItemCollections {

}

/*********************************************
* dateTimeTimeZone
**********************************************/
export interface dateTimeTimeZone {
	dateTime?: string;
	timeZone?: string;
}

/*********************************************
* dateTimeTimeZoneCollections
**********************************************/
export interface dateTimeTimeZoneCollections {

}

/*********************************************
* bookingCustomerInformationBase
**********************************************/
export interface bookingCustomerInformationBase {

}

/*********************************************
* bookingCustomerInformationBaseCollections
**********************************************/
export interface bookingCustomerInformationBaseCollections {

}

/*********************************************
* bookingCustomerInformation
**********************************************/
export interface bookingCustomerInformation {
	customerId?: string;
	customQuestionAnswers?: Array<graph.bookingQuestionAnswer>;
	emailAddress?: string;
	location?: graph.location;
	name?: string;
	notes?: string;
	phone?: string;
	timeZone?: string;
}

/*********************************************
* bookingCustomerInformationCollections
**********************************************/
export interface bookingCustomerInformationCollections {

}

/*********************************************
* bookingQuestionAnswer
**********************************************/
export interface bookingQuestionAnswer {
	answer?: string;
	answerInputType?: graph.answerInputType;
	answerOptions?: Array<string>;
	isRequired?: boolean;
	question?: string;
	questionId?: string;
	selectedOptions?: Array<string>;
}

/*********************************************
* bookingQuestionAnswerCollections
**********************************************/
export interface bookingQuestionAnswerCollections {

}

/*********************************************
* location
**********************************************/
export interface location {
	address?: graph.physicalAddress;
	coordinates?: graph.outlookGeoCoordinates;
	displayName?: string;
	locationEmailAddress?: string;
	locationType?: graph.locationType;
	locationUri?: string;
	uniqueId?: string;
	uniqueIdType?: graph.locationUniqueIdType;
}

/*********************************************
* locationCollections
**********************************************/
export interface locationCollections {

}

/*********************************************
* bookingQuestionAssignment
**********************************************/
export interface bookingQuestionAssignment {
	isRequired?: boolean;
	questionId?: string;
}

/*********************************************
* bookingQuestionAssignmentCollections
**********************************************/
export interface bookingQuestionAssignmentCollections {

}

/*********************************************
* bookingReminder
**********************************************/
export interface bookingReminder {
	message?: string;
	offset?: number;
	recipients?: graph.bookingReminderRecipients;
}

/*********************************************
* bookingReminderCollections
**********************************************/
export interface bookingReminderCollections {

}

/*********************************************
* bookingSchedulingPolicy
**********************************************/
export interface bookingSchedulingPolicy {
	allowStaffSelection?: boolean;
	maximumAdvance?: number;
	minimumLeadTime?: number;
	sendConfirmationsToOwner?: boolean;
	timeSlotInterval?: number;
}

/*********************************************
* bookingSchedulingPolicyCollections
**********************************************/
export interface bookingSchedulingPolicyCollections {

}

/*********************************************
* bookingWorkHours
**********************************************/
export interface bookingWorkHours {
	day?: graph.dayOfWeek;
	timeSlots?: Array<graph.bookingWorkTimeSlot>;
}

/*********************************************
* bookingWorkHoursCollections
**********************************************/
export interface bookingWorkHoursCollections {

}

/*********************************************
* bookingWorkTimeSlot
**********************************************/
export interface bookingWorkTimeSlot {
	endTime?: anyOfDay;
	startTime?: anyOfDay;
}

/*********************************************
* bookingWorkTimeSlotCollections
**********************************************/
export interface bookingWorkTimeSlotCollections {

}

/*********************************************
* physicalAddress
**********************************************/
export interface physicalAddress {
	city?: string;
	countryOrRegion?: string;
	postalCode?: string;
	state?: string;
	street?: string;
}

/*********************************************
* physicalAddressCollections
**********************************************/
export interface physicalAddressCollections {

}

/*********************************************
* outlookGeoCoordinates
**********************************************/
export interface outlookGeoCoordinates {
	accuracy?: number;
	altitude?: number;
	altitudeAccuracy?: number;
	latitude?: number;
	longitude?: number;
}

/*********************************************
* outlookGeoCoordinatesCollections
**********************************************/
export interface outlookGeoCoordinatesCollections {

}

/*********************************************
* phone
**********************************************/
export interface phone {
	language?: string;
	number?: string;
	region?: string;
	type?: graph.phoneType;
}

/*********************************************
* phoneCollections
**********************************************/
export interface phoneCollections {

}

/*********************************************
* staffAvailabilityItem
**********************************************/
export interface staffAvailabilityItem {
	availabilityItems?: Array<graph.availabilityItem>;
	staffId?: string;
}

/*********************************************
* staffAvailabilityItemCollections
**********************************************/
export interface staffAvailabilityItemCollections {

}

/*********************************************
* timeSlot
**********************************************/
export interface timeSlot {
	end?: graph.dateTimeTimeZone;
	start?: graph.dateTimeTimeZone;
}

/*********************************************
* timeSlotCollections
**********************************************/
export interface timeSlotCollections {

}

/*********************************************
* dataSubject
**********************************************/
export interface dataSubject {
	email?: string;
	firstName?: string;
	lastName?: string;
	residency?: string;
}

/*********************************************
* dataSubjectCollections
**********************************************/
export interface dataSubjectCollections {

}

/*********************************************
* identitySet
**********************************************/
export interface identitySet {
	application?: graph.identity;
	device?: graph.identity;
	user?: graph.identity;
}

/*********************************************
* identitySetCollections
**********************************************/
export interface identitySetCollections {

}

/*********************************************
* itemBody
**********************************************/
export interface itemBody {
	content?: string;
	contentType?: graph.bodyType;
}

/*********************************************
* itemBodyCollections
**********************************************/
export interface itemBodyCollections {

}

/*********************************************
* keyValuePair
**********************************************/
export interface keyValuePair {
	name?: string;
	value?: string;
}

/*********************************************
* keyValuePairCollections
**********************************************/
export interface keyValuePairCollections {

}

/*********************************************
* publicError
**********************************************/
export interface publicError {
	code?: string;
	details?: Array<graph.publicErrorDetail>;
	innerError?: graph.publicInnerError;
	message?: string;
	target?: string;
}

/*********************************************
* publicErrorCollections
**********************************************/
export interface publicErrorCollections {

}

/*********************************************
* publicErrorDetail
**********************************************/
export interface publicErrorDetail {
	code?: string;
	message?: string;
	target?: string;
}

/*********************************************
* publicErrorDetailCollections
**********************************************/
export interface publicErrorDetailCollections {

}

/*********************************************
* publicInnerError
**********************************************/
export interface publicInnerError {
	code?: string;
	details?: Array<graph.publicErrorDetail>;
	message?: string;
	target?: string;
}

/*********************************************
* publicInnerErrorCollections
**********************************************/
export interface publicInnerErrorCollections {

}

/*********************************************
* subjectRightsRequestDetail
**********************************************/
export interface subjectRightsRequestDetail {
	excludedItemCount?: number;
	insightCounts?: Array<graph.keyValuePair>;
	itemCount?: number;
	itemNeedReview?: number;
	productItemCounts?: Array<graph.keyValuePair>;
	signedOffItemCount?: number;
	totalItemSize?: number;
}

/*********************************************
* subjectRightsRequestDetailCollections
**********************************************/
export interface subjectRightsRequestDetailCollections {

}

/*********************************************
* subjectRightsRequestHistory
**********************************************/
export interface subjectRightsRequestHistory {
	changedBy?: graph.identitySet;
	eventDateTime?: any;
	stage?: graph.subjectRightsRequestStage;
	stageStatus?: graph.subjectRightsRequestStageStatus;
	type?: string;
}

/*********************************************
* subjectRightsRequestHistoryCollections
**********************************************/
export interface subjectRightsRequestHistoryCollections {

}

/*********************************************
* subjectRightsRequestStageDetail
**********************************************/
export interface subjectRightsRequestStageDetail {
	error?: graph.publicError;
	stage?: graph.subjectRightsRequestStage;
	status?: graph.subjectRightsRequestStageStatus;
}

/*********************************************
* subjectRightsRequestStageDetailCollections
**********************************************/
export interface subjectRightsRequestStageDetailCollections {

}

/*********************************************
* teamFunSettings
**********************************************/
export interface teamFunSettings {
	allowCustomMemes?: boolean;
	allowGiphy?: boolean;
	allowStickersAndMemes?: boolean;
	giphyContentRating?: graph.giphyRatingType;
}

/*********************************************
* teamFunSettingsCollections
**********************************************/
export interface teamFunSettingsCollections {

}

/*********************************************
* teamGuestSettings
**********************************************/
export interface teamGuestSettings {
	allowCreateUpdateChannels?: boolean;
	allowDeleteChannels?: boolean;
}

/*********************************************
* teamGuestSettingsCollections
**********************************************/
export interface teamGuestSettingsCollections {

}

/*********************************************
* teamMemberSettings
**********************************************/
export interface teamMemberSettings {
	allowAddRemoveApps?: boolean;
	allowCreatePrivateChannels?: boolean;
	allowCreateUpdateChannels?: boolean;
	allowCreateUpdateRemoveConnectors?: boolean;
	allowCreateUpdateRemoveTabs?: boolean;
	allowDeleteChannels?: boolean;
}

/*********************************************
* teamMemberSettingsCollections
**********************************************/
export interface teamMemberSettingsCollections {

}

/*********************************************
* teamMessagingSettings
**********************************************/
export interface teamMessagingSettings {
	allowChannelMentions?: boolean;
	allowOwnerDeleteMessages?: boolean;
	allowTeamMentions?: boolean;
	allowUserDeleteMessages?: boolean;
	allowUserEditMessages?: boolean;
}

/*********************************************
* teamMessagingSettingsCollections
**********************************************/
export interface teamMessagingSettingsCollections {

}

/*********************************************
* teamSummary
**********************************************/
export interface teamSummary {
	guestsCount?: number;
	membersCount?: number;
	ownersCount?: number;
}

/*********************************************
* teamSummaryCollections
**********************************************/
export interface teamSummaryCollections {

}

/*********************************************
* resultInfo
**********************************************/
export interface resultInfo {
	code?: number;
	message?: string;
	subcode?: number;
}

/*********************************************
* resultInfoCollections
**********************************************/
export interface resultInfoCollections {

}

/*********************************************
* assignedLabel
**********************************************/
export interface assignedLabel {
	displayName?: string;
	labelId?: string;
}

/*********************************************
* assignedLabelCollections
**********************************************/
export interface assignedLabelCollections {

}

/*********************************************
* licenseProcessingState
**********************************************/
export interface licenseProcessingState {
	state?: string;
}

/*********************************************
* licenseProcessingStateCollections
**********************************************/
export interface licenseProcessingStateCollections {

}

/*********************************************
* root
**********************************************/
export interface root {

}

/*********************************************
* rootCollections
**********************************************/
export interface rootCollections {

}

/*********************************************
* sharepointIds
**********************************************/
export interface sharepointIds {
	listId?: string;
	listItemId?: string;
	listItemUniqueId?: string;
	siteId?: string;
	siteUrl?: string;
	tenantId?: string;
	webId?: string;
}

/*********************************************
* sharepointIdsCollections
**********************************************/
export interface sharepointIdsCollections {

}

/*********************************************
* siteCollection
**********************************************/
export interface siteCollection {
	dataLocationCode?: string;
	hostname?: string;
	root?: graph.root;
}

/*********************************************
* siteCollectionCollections
**********************************************/
export interface siteCollectionCollections {

}

/*********************************************
* apiAuthenticationConfigurationBase
**********************************************/
export interface apiAuthenticationConfigurationBase {

}

/*********************************************
* apiAuthenticationConfigurationBaseCollections
**********************************************/
export interface apiAuthenticationConfigurationBaseCollections {

}

/*********************************************
* assignmentOrder
**********************************************/
export interface assignmentOrder {
	order?: Array<string>;
}

/*********************************************
* assignmentOrderCollections
**********************************************/
export interface assignmentOrderCollections {

}

/*********************************************
* basicAuthentication
**********************************************/
export interface basicAuthentication {
	password?: string;
	username?: string;
}

/*********************************************
* basicAuthenticationCollections
**********************************************/
export interface basicAuthenticationCollections {

}

/*********************************************
* clientCertificateAuthentication
**********************************************/
export interface clientCertificateAuthentication {
	certificateList?: Array<graph.pkcs12CertificateInformation>;
}

/*********************************************
* clientCertificateAuthenticationCollections
**********************************************/
export interface clientCertificateAuthenticationCollections {

}

/*********************************************
* pkcs12CertificateInformation
**********************************************/
export interface pkcs12CertificateInformation {
	isActive?: boolean;
	notAfter?: number;
	notBefore?: number;
	thumbprint?: string;
}

/*********************************************
* pkcs12CertificateInformationCollections
**********************************************/
export interface pkcs12CertificateInformationCollections {

}

/*********************************************
* pkcs12Certificate
**********************************************/
export interface pkcs12Certificate {
	password?: string;
	pkcs12Value?: string;
}

/*********************************************
* pkcs12CertificateCollections
**********************************************/
export interface pkcs12CertificateCollections {

}

/*********************************************
* selfServiceSignUpAuthenticationFlowConfiguration
**********************************************/
export interface selfServiceSignUpAuthenticationFlowConfiguration {
	isEnabled?: boolean;
}

/*********************************************
* selfServiceSignUpAuthenticationFlowConfigurationCollections
**********************************************/
export interface selfServiceSignUpAuthenticationFlowConfigurationCollections {

}

/*********************************************
* userAttributeValuesItem
**********************************************/
export interface userAttributeValuesItem {
	isDefault?: boolean;
	name?: string;
	value?: string;
}

/*********************************************
* userAttributeValuesItemCollections
**********************************************/
export interface userAttributeValuesItemCollections {

}

/*********************************************
* userFlowApiConnectorConfiguration
**********************************************/
export interface userFlowApiConnectorConfiguration {

}

/*********************************************
* userFlowApiConnectorConfigurationCollections
**********************************************/
export interface userFlowApiConnectorConfigurationCollections {

}

/*********************************************
* alternativeSecurityId
**********************************************/
export interface alternativeSecurityId {
	identityProvider?: string;
	key?: any;
	type?: number;
}

/*********************************************
* alternativeSecurityIdCollections
**********************************************/
export interface alternativeSecurityIdCollections {

}

/*********************************************
* preAuthorizedApplication
**********************************************/
export interface preAuthorizedApplication {
	appId?: string;
	delegatedPermissionIds?: Array<string>;
}

/*********************************************
* preAuthorizedApplicationCollections
**********************************************/
export interface preAuthorizedApplicationCollections {

}

/*********************************************
* certificateAuthority
**********************************************/
export interface certificateAuthority {
	certificate?: any;
	certificateRevocationListUrl?: string;
	deltaCertificateRevocationListUrl?: string;
	isRootAuthority?: boolean;
	issuer?: string;
	issuerSki?: string;
}

/*********************************************
* certificateAuthorityCollections
**********************************************/
export interface certificateAuthorityCollections {

}

/*********************************************
* ComplexExtensionValue
**********************************************/
export interface ComplexExtensionValue {

}

/*********************************************
* ComplexExtensionValueCollections
**********************************************/
export interface ComplexExtensionValueCollections {

}

/*********************************************
* crossTenantAccessPolicyB2BSetting
**********************************************/
export interface crossTenantAccessPolicyB2BSetting {
	applications?: graph.crossTenantAccessPolicyTargetConfiguration;
	usersAndGroups?: graph.crossTenantAccessPolicyTargetConfiguration;
}

/*********************************************
* crossTenantAccessPolicyB2BSettingCollections
**********************************************/
export interface crossTenantAccessPolicyB2BSettingCollections {

}

/*********************************************
* crossTenantAccessPolicyTargetConfiguration
**********************************************/
export interface crossTenantAccessPolicyTargetConfiguration {
	accessType?: graph.crossTenantAccessPolicyTargetConfigurationAccessType;
	targets?: Array<graph.crossTenantAccessPolicyTarget>;
}

/*********************************************
* crossTenantAccessPolicyTargetConfigurationCollections
**********************************************/
export interface crossTenantAccessPolicyTargetConfigurationCollections {

}

/*********************************************
* crossTenantAccessPolicyInboundTrust
**********************************************/
export interface crossTenantAccessPolicyInboundTrust {
	isCompliantDeviceAccepted?: boolean;
	isHybridAzureADJoinedDeviceAccepted?: boolean;
	isMfaAccepted?: boolean;
}

/*********************************************
* crossTenantAccessPolicyInboundTrustCollections
**********************************************/
export interface crossTenantAccessPolicyInboundTrustCollections {

}

/*********************************************
* crossTenantAccessPolicyTarget
**********************************************/
export interface crossTenantAccessPolicyTarget {
	target?: string;
	targetType?: graph.crossTenantAccessPolicyTargetType;
}

/*********************************************
* crossTenantAccessPolicyTargetCollections
**********************************************/
export interface crossTenantAccessPolicyTargetCollections {

}

/*********************************************
* defaultUserRolePermissions
**********************************************/
export interface defaultUserRolePermissions {
	allowedToCreateApps?: boolean;
	allowedToCreateSecurityGroups?: boolean;
	allowedToReadOtherUsers?: boolean;
	permissionGrantPoliciesAssigned?: Array<string>;
}

/*********************************************
* defaultUserRolePermissionsCollections
**********************************************/
export interface defaultUserRolePermissionsCollections {

}

/*********************************************
* domainState
**********************************************/
export interface domainState {
	lastActionDateTime?: any;
	operation?: string;
	status?: string;
}

/*********************************************
* domainStateCollections
**********************************************/
export interface domainStateCollections {

}

/*********************************************
* implicitGrantSettings
**********************************************/
export interface implicitGrantSettings {
	enableAccessTokenIssuance?: boolean;
	enableIdTokenIssuance?: boolean;
}

/*********************************************
* implicitGrantSettingsCollections
**********************************************/
export interface implicitGrantSettingsCollections {

}

/*********************************************
* instanceResourceAccess
**********************************************/
export interface instanceResourceAccess {
	permissions?: Array<graph.resourcePermission>;
	resourceAppId?: string;
}

/*********************************************
* instanceResourceAccessCollections
**********************************************/
export interface instanceResourceAccessCollections {

}

/*********************************************
* resourcePermission
**********************************************/
export interface resourcePermission {
	type?: string;
	value?: string;
}

/*********************************************
* resourcePermissionCollections
**********************************************/
export interface resourcePermissionCollections {

}

/*********************************************
* licenseUnitsDetail
**********************************************/
export interface licenseUnitsDetail {
	enabled?: number;
	suspended?: number;
	warning?: number;
}

/*********************************************
* licenseUnitsDetailCollections
**********************************************/
export interface licenseUnitsDetailCollections {

}

/*********************************************
* optionalClaim
**********************************************/
export interface optionalClaim {
	additionalProperties?: Array<string>;
	essential?: boolean;
	name?: string;
	source?: string;
}

/*********************************************
* optionalClaimCollections
**********************************************/
export interface optionalClaimCollections {

}

/*********************************************
* physicalOfficeAddress
**********************************************/
export interface physicalOfficeAddress {
	city?: string;
	countryOrRegion?: string;
	officeLocation?: string;
	postalCode?: string;
	state?: string;
	street?: string;
}

/*********************************************
* physicalOfficeAddressCollections
**********************************************/
export interface physicalOfficeAddressCollections {

}

/*********************************************
* privacyProfile
**********************************************/
export interface privacyProfile {
	contactEmail?: string;
	statementUrl?: string;
}

/*********************************************
* privacyProfileCollections
**********************************************/
export interface privacyProfileCollections {

}

/*********************************************
* resourceAccess
**********************************************/
export interface resourceAccess {
	id?: any;
	type?: string;
}

/*********************************************
* resourceAccessCollections
**********************************************/
export interface resourceAccessCollections {

}

/*********************************************
* selfSignedCertificate
**********************************************/
export interface selfSignedCertificate {
	customKeyIdentifier?: any;
	displayName?: string;
	endDateTime?: any;
	key?: any;
	keyId?: any;
	startDateTime?: any;
	thumbprint?: string;
	type?: string;
	usage?: string;
}

/*********************************************
* selfSignedCertificateCollections
**********************************************/
export interface selfSignedCertificateCollections {

}

/*********************************************
* servicePlanInfo
**********************************************/
export interface servicePlanInfo {
	appliesTo?: string;
	provisioningStatus?: string;
	servicePlanId?: any;
	servicePlanName?: string;
}

/*********************************************
* servicePlanInfoCollections
**********************************************/
export interface servicePlanInfoCollections {

}

/*********************************************
* settingTemplateValue
**********************************************/
export interface settingTemplateValue {
	defaultValue?: string;
	description?: string;
	name?: string;
	type?: string;
}

/*********************************************
* settingTemplateValueCollections
**********************************************/
export interface settingTemplateValueCollections {

}

/*********************************************
* settingValue
**********************************************/
export interface settingValue {
	name?: string;
	value?: string;
}

/*********************************************
* settingValueCollections
**********************************************/
export interface settingValueCollections {

}

/*********************************************
* signingCertificateUpdateStatus
**********************************************/
export interface signingCertificateUpdateStatus {
	certificateUpdateResult?: string;
	lastRunDateTime?: any;
}

/*********************************************
* signingCertificateUpdateStatusCollections
**********************************************/
export interface signingCertificateUpdateStatusCollections {

}

/*********************************************
* unifiedRolePermission
**********************************************/
export interface unifiedRolePermission {
	allowedResourceActions?: Array<string>;
	condition?: string;
	excludedResourceActions?: Array<string>;
}

/*********************************************
* unifiedRolePermissionCollections
**********************************************/
export interface unifiedRolePermissionCollections {

}

/*********************************************
* verifiedDomain
**********************************************/
export interface verifiedDomain {
	capabilities?: string;
	isDefault?: boolean;
	isInitial?: boolean;
	name?: string;
	type?: string;
}

/*********************************************
* verifiedDomainCollections
**********************************************/
export interface verifiedDomainCollections {

}

/*********************************************
* educationAssignmentRecipient
**********************************************/
export interface educationAssignmentRecipient {

}

/*********************************************
* educationAssignmentRecipientCollections
**********************************************/
export interface educationAssignmentRecipientCollections {

}

/*********************************************
* educationAssignmentClassRecipient
**********************************************/
export interface educationAssignmentClassRecipient {

}

/*********************************************
* educationAssignmentClassRecipientCollections
**********************************************/
export interface educationAssignmentClassRecipientCollections {

}

/*********************************************
* educationAssignmentGrade
**********************************************/
export interface educationAssignmentGrade {
	gradedBy?: graph.identitySet;
	gradedDateTime?: any;
}

/*********************************************
* educationAssignmentGradeCollections
**********************************************/
export interface educationAssignmentGradeCollections {

}

/*********************************************
* educationAssignmentGradeType
**********************************************/
export interface educationAssignmentGradeType {

}

/*********************************************
* educationAssignmentGradeTypeCollections
**********************************************/
export interface educationAssignmentGradeTypeCollections {

}

/*********************************************
* educationAssignmentGroupRecipient
**********************************************/
export interface educationAssignmentGroupRecipient {

}

/*********************************************
* educationAssignmentGroupRecipientCollections
**********************************************/
export interface educationAssignmentGroupRecipientCollections {

}

/*********************************************
* educationAssignmentIndividualRecipient
**********************************************/
export interface educationAssignmentIndividualRecipient {
	recipients?: Array<string>;
}

/*********************************************
* educationAssignmentIndividualRecipientCollections
**********************************************/
export interface educationAssignmentIndividualRecipientCollections {

}

/*********************************************
* educationAssignmentPointsGrade
**********************************************/
export interface educationAssignmentPointsGrade {
	points?: any;
}

/*********************************************
* educationAssignmentPointsGradeCollections
**********************************************/
export interface educationAssignmentPointsGradeCollections {

}

/*********************************************
* educationAssignmentPointsGradeType
**********************************************/
export interface educationAssignmentPointsGradeType {
	maxPoints?: any;
}

/*********************************************
* educationAssignmentPointsGradeTypeCollections
**********************************************/
export interface educationAssignmentPointsGradeTypeCollections {

}

/*********************************************
* educationResource
**********************************************/
export interface educationResource {
	createdBy?: graph.identitySet;
	createdDateTime?: any;
	displayName?: string;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: any;
}

/*********************************************
* educationResourceCollections
**********************************************/
export interface educationResourceCollections {

}

/*********************************************
* educationExcelResource
**********************************************/
export interface educationExcelResource {
	fileUrl?: string;
}

/*********************************************
* educationExcelResourceCollections
**********************************************/
export interface educationExcelResourceCollections {

}

/*********************************************
* educationExternalResource
**********************************************/
export interface educationExternalResource {
	webUrl?: string;
}

/*********************************************
* educationExternalResourceCollections
**********************************************/
export interface educationExternalResourceCollections {

}

/*********************************************
* educationFeedback
**********************************************/
export interface educationFeedback {
	feedbackBy?: graph.identitySet;
	feedbackDateTime?: any;
	text?: graph.educationItemBody;
}

/*********************************************
* educationFeedbackCollections
**********************************************/
export interface educationFeedbackCollections {

}

/*********************************************
* educationItemBody
**********************************************/
export interface educationItemBody {
	content?: string;
	contentType?: graph.bodyType;
}

/*********************************************
* educationItemBodyCollections
**********************************************/
export interface educationItemBodyCollections {

}

/*********************************************
* educationFileResource
**********************************************/
export interface educationFileResource {
	fileUrl?: string;
}

/*********************************************
* educationFileResourceCollections
**********************************************/
export interface educationFileResourceCollections {

}

/*********************************************
* educationLinkResource
**********************************************/
export interface educationLinkResource {
	link?: string;
}

/*********************************************
* educationLinkResourceCollections
**********************************************/
export interface educationLinkResourceCollections {

}

/*********************************************
* educationMediaResource
**********************************************/
export interface educationMediaResource {
	fileUrl?: string;
}

/*********************************************
* educationMediaResourceCollections
**********************************************/
export interface educationMediaResourceCollections {

}

/*********************************************
* educationPowerPointResource
**********************************************/
export interface educationPowerPointResource {
	fileUrl?: string;
}

/*********************************************
* educationPowerPointResourceCollections
**********************************************/
export interface educationPowerPointResourceCollections {

}

/*********************************************
* educationSubmissionRecipient
**********************************************/
export interface educationSubmissionRecipient {

}

/*********************************************
* educationSubmissionRecipientCollections
**********************************************/
export interface educationSubmissionRecipientCollections {

}

/*********************************************
* educationSubmissionIndividualRecipient
**********************************************/
export interface educationSubmissionIndividualRecipient {
	userId?: string;
}

/*********************************************
* educationSubmissionIndividualRecipientCollections
**********************************************/
export interface educationSubmissionIndividualRecipientCollections {

}

/*********************************************
* educationTeamsAppResource
**********************************************/
export interface educationTeamsAppResource {
	appIconWebUrl?: string;
	appId?: string;
	teamsEmbeddedContentUrl?: string;
	webUrl?: string;
}

/*********************************************
* educationTeamsAppResourceCollections
**********************************************/
export interface educationTeamsAppResourceCollections {

}

/*********************************************
* educationWordResource
**********************************************/
export interface educationWordResource {
	fileUrl?: string;
}

/*********************************************
* educationWordResourceCollections
**********************************************/
export interface educationWordResourceCollections {

}

/*********************************************
* rubricCriterion
**********************************************/
export interface rubricCriterion {
	description?: graph.educationItemBody;
}

/*********************************************
* rubricCriterionCollections
**********************************************/
export interface rubricCriterionCollections {

}

/*********************************************
* rubricLevel
**********************************************/
export interface rubricLevel {
	description?: graph.educationItemBody;
	displayName?: string;
	grading?: graph.educationAssignmentGradeType;
	levelId?: string;
}

/*********************************************
* rubricLevelCollections
**********************************************/
export interface rubricLevelCollections {

}

/*********************************************
* rubricQuality
**********************************************/
export interface rubricQuality {
	criteria?: Array<graph.rubricCriterion>;
	description?: graph.educationItemBody;
	displayName?: string;
	qualityId?: string;
	weight?: any;
}

/*********************************************
* rubricQualityCollections
**********************************************/
export interface rubricQualityCollections {

}

/*********************************************
* rubricQualityFeedbackModel
**********************************************/
export interface rubricQualityFeedbackModel {
	feedback?: graph.educationItemBody;
	qualityId?: string;
}

/*********************************************
* rubricQualityFeedbackModelCollections
**********************************************/
export interface rubricQualityFeedbackModelCollections {

}

/*********************************************
* rubricQualitySelectedColumnModel
**********************************************/
export interface rubricQualitySelectedColumnModel {
	columnId?: string;
	qualityId?: string;
}

/*********************************************
* rubricQualitySelectedColumnModelCollections
**********************************************/
export interface rubricQualitySelectedColumnModelCollections {

}

/*********************************************
* educationCourse
**********************************************/
export interface educationCourse {
	courseNumber?: string;
	description?: string;
	displayName?: string;
	externalId?: string;
	subject?: string;
}

/*********************************************
* educationCourseCollections
**********************************************/
export interface educationCourseCollections {

}

/*********************************************
* educationTerm
**********************************************/
export interface educationTerm {
	displayName?: string;
	endDate?: Edm.Date;
	externalId?: string;
	startDate?: Edm.Date;
}

/*********************************************
* educationTermCollections
**********************************************/
export interface educationTermCollections {

}

/*********************************************
* relatedContact
**********************************************/
export interface relatedContact {
	accessConsent?: boolean;
	displayName?: string;
	emailAddress?: string;
	mobilePhone?: string;
	relationship?: graph.contactRelationship;
}

/*********************************************
* relatedContactCollections
**********************************************/
export interface relatedContactCollections {

}

/*********************************************
* educationOnPremisesInfo
**********************************************/
export interface educationOnPremisesInfo {
	immutableId?: string;
}

/*********************************************
* educationOnPremisesInfoCollections
**********************************************/
export interface educationOnPremisesInfoCollections {

}

/*********************************************
* educationStudent
**********************************************/
export interface educationStudent {
	birthDate?: Edm.Date;
	externalId?: string;
	gender?: graph.educationGender;
	grade?: string;
	graduationYear?: string;
	studentNumber?: string;
}

/*********************************************
* educationStudentCollections
**********************************************/
export interface educationStudentCollections {

}

/*********************************************
* educationTeacher
**********************************************/
export interface educationTeacher {
	externalId?: string;
	teacherNumber?: string;
}

/*********************************************
* educationTeacherCollections
**********************************************/
export interface educationTeacherCollections {

}

/*********************************************
* Json
**********************************************/
export interface Json {

}

/*********************************************
* JsonCollections
**********************************************/
export interface JsonCollections {

}

/*********************************************
* workbookFilterCriteria
**********************************************/
export interface workbookFilterCriteria {
	color?: string;
	criterion1?: string;
	criterion2?: string;
	dynamicCriteria?: string;
	filterOn?: string;
	icon?: graph.workbookIcon;
	operator?: string;
	values?: graph.Json;
}

/*********************************************
* workbookFilterCriteriaCollections
**********************************************/
export interface workbookFilterCriteriaCollections {

}

/*********************************************
* workbookIcon
**********************************************/
export interface workbookIcon {
	index?: number;
	set?: string;
}

/*********************************************
* workbookIconCollections
**********************************************/
export interface workbookIconCollections {

}

/*********************************************
* workbookFilterDatetime
**********************************************/
export interface workbookFilterDatetime {
	date?: string;
	specificity?: string;
}

/*********************************************
* workbookFilterDatetimeCollections
**********************************************/
export interface workbookFilterDatetimeCollections {

}

/*********************************************
* workbookOperationError
**********************************************/
export interface workbookOperationError {
	code?: string;
	innerError?: graph.workbookOperationError;
	message?: string;
}

/*********************************************
* workbookOperationErrorCollections
**********************************************/
export interface workbookOperationErrorCollections {

}

/*********************************************
* workbookRangeReference
**********************************************/
export interface workbookRangeReference {
	address?: string;
}

/*********************************************
* workbookRangeReferenceCollections
**********************************************/
export interface workbookRangeReferenceCollections {

}

/*********************************************
* workbookSessionInfo
**********************************************/
export interface workbookSessionInfo {
	id?: string;
	persistChanges?: boolean;
}

/*********************************************
* workbookSessionInfoCollections
**********************************************/
export interface workbookSessionInfoCollections {

}

/*********************************************
* workbookSortField
**********************************************/
export interface workbookSortField {
	ascending?: boolean;
	color?: string;
	dataOption?: string;
	icon?: graph.workbookIcon;
	key?: number;
	sortOn?: string;
}

/*********************************************
* workbookSortFieldCollections
**********************************************/
export interface workbookSortFieldCollections {

}

/*********************************************
* workbookWorksheetProtectionOptions
**********************************************/
export interface workbookWorksheetProtectionOptions {
	allowAutoFilter?: boolean;
	allowDeleteColumns?: boolean;
	allowDeleteRows?: boolean;
	allowFormatCells?: boolean;
	allowFormatColumns?: boolean;
	allowFormatRows?: boolean;
	allowInsertColumns?: boolean;
	allowInsertHyperlinks?: boolean;
	allowInsertRows?: boolean;
	allowPivotTables?: boolean;
	allowSort?: boolean;
}

/*********************************************
* workbookWorksheetProtectionOptionsCollections
**********************************************/
export interface workbookWorksheetProtectionOptionsCollections {

}

/*********************************************
* quota
**********************************************/
export interface quota {
	deleted?: number;
	remaining?: number;
	state?: string;
	storagePlanInformation?: graph.storagePlanInformation;
	total?: number;
	used?: number;
}

/*********************************************
* quotaCollections
**********************************************/
export interface quotaCollections {

}

/*********************************************
* systemFacet
**********************************************/
export interface systemFacet {

}

/*********************************************
* systemFacetCollections
**********************************************/
export interface systemFacetCollections {

}

/*********************************************
* audio
**********************************************/
export interface audio {
	album?: string;
	albumArtist?: string;
	artist?: string;
	bitrate?: number;
	composers?: string;
	copyright?: string;
	disc?: number;
	discCount?: number;
	duration?: number;
	genre?: string;
	hasDrm?: boolean;
	isVariableBitrate?: boolean;
	title?: string;
	track?: number;
	trackCount?: number;
	year?: number;
}

/*********************************************
* audioCollections
**********************************************/
export interface audioCollections {

}

/*********************************************
* bundle
**********************************************/
export interface bundle {
	album?: graph.album;
	childCount?: number;
}

/*********************************************
* bundleCollections
**********************************************/
export interface bundleCollections {

}

/*********************************************
* deleted
**********************************************/
export interface deleted {
	state?: string;
}

/*********************************************
* deletedCollections
**********************************************/
export interface deletedCollections {

}

/*********************************************
* file
**********************************************/
export interface file {
	hashes?: graph.hashes;
	mimeType?: string;
	processingMetadata?: boolean;
}

/*********************************************
* fileCollections
**********************************************/
export interface fileCollections {

}

/*********************************************
* fileSystemInfo
**********************************************/
export interface fileSystemInfo {
	createdDateTime?: any;
	lastAccessedDateTime?: any;
	lastModifiedDateTime?: any;
}

/*********************************************
* fileSystemInfoCollections
**********************************************/
export interface fileSystemInfoCollections {

}

/*********************************************
* folder
**********************************************/
export interface folder {
	childCount?: number;
	view?: graph.folderView;
}

/*********************************************
* folderCollections
**********************************************/
export interface folderCollections {

}

/*********************************************
* image
**********************************************/
export interface image {
	height?: number;
	width?: number;
}

/*********************************************
* imageCollections
**********************************************/
export interface imageCollections {

}

/*********************************************
* malware
**********************************************/
export interface malware {
	description?: string;
}

/*********************************************
* malwareCollections
**********************************************/
export interface malwareCollections {

}

/*********************************************
* package
**********************************************/
export interface package {
	type?: string;
}

/*********************************************
* packageCollections
**********************************************/
export interface packageCollections {

}

/*********************************************
* pendingOperations
**********************************************/
export interface pendingOperations {
	pendingContentUpdate?: graph.pendingContentUpdate;
}

/*********************************************
* pendingOperationsCollections
**********************************************/
export interface pendingOperationsCollections {

}

/*********************************************
* photo
**********************************************/
export interface photo {
	cameraMake?: string;
	cameraModel?: string;
	exposureDenominator?: number;
	exposureNumerator?: number;
	fNumber?: number;
	focalLength?: number;
	iso?: number;
	orientation?: number;
	takenDateTime?: any;
}

/*********************************************
* photoCollections
**********************************************/
export interface photoCollections {

}

/*********************************************
* publicationFacet
**********************************************/
export interface publicationFacet {
	level?: string;
	versionId?: string;
}

/*********************************************
* publicationFacetCollections
**********************************************/
export interface publicationFacetCollections {

}

/*********************************************
* remoteItem
**********************************************/
export interface remoteItem {
	createdBy?: graph.identitySet;
	createdDateTime?: any;
	file?: graph.file;
	fileSystemInfo?: graph.fileSystemInfo;
	folder?: graph.folder;
	id?: string;
	image?: graph.image;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: any;
	name?: string;
	package?: graph.package;
	parentReference?: graph.itemReference;
	shared?: graph.shared;
	sharepointIds?: graph.sharepointIds;
	size?: number;
	specialFolder?: graph.specialFolder;
	video?: graph.video;
	webDavUrl?: string;
	webUrl?: string;
}

/*********************************************
* remoteItemCollections
**********************************************/
export interface remoteItemCollections {

}

/*********************************************
* searchResult
**********************************************/
export interface searchResult {
	onClickTelemetryUrl?: string;
}

/*********************************************
* searchResultCollections
**********************************************/
export interface searchResultCollections {

}

/*********************************************
* shared
**********************************************/
export interface shared {
	owner?: graph.identitySet;
	scope?: string;
	sharedBy?: graph.identitySet;
	sharedDateTime?: any;
}

/*********************************************
* sharedCollections
**********************************************/
export interface sharedCollections {

}

/*********************************************
* specialFolder
**********************************************/
export interface specialFolder {
	name?: string;
}

/*********************************************
* specialFolderCollections
**********************************************/
export interface specialFolderCollections {

}

/*********************************************
* video
**********************************************/
export interface video {
	audioBitsPerSample?: number;
	audioChannels?: number;
	audioFormat?: string;
	audioSamplesPerSecond?: number;
	bitrate?: number;
	duration?: number;
	fourCC?: string;
	frameRate?: number;
	height?: number;
	width?: number;
}

/*********************************************
* videoCollections
**********************************************/
export interface videoCollections {

}

/*********************************************
* listInfo
**********************************************/
export interface listInfo {
	contentTypesEnabled?: boolean;
	hidden?: boolean;
	template?: string;
}

/*********************************************
* listInfoCollections
**********************************************/
export interface listInfoCollections {

}

/*********************************************
* attendeeAvailability
**********************************************/
export interface attendeeAvailability {
	attendee?: graph.attendeeBase;
	availability?: graph.freeBusyStatus;
}

/*********************************************
* attendeeAvailabilityCollections
**********************************************/
export interface attendeeAvailabilityCollections {

}

/*********************************************
* attendeeBase
**********************************************/
export interface attendeeBase {
	type?: graph.attendeeType;
}

/*********************************************
* attendeeBaseCollections
**********************************************/
export interface attendeeBaseCollections {

}

/*********************************************
* locationConstraint
**********************************************/
export interface locationConstraint {
	isRequired?: boolean;
	locations?: Array<graph.locationConstraintItem>;
	suggestLocation?: boolean;
}

/*********************************************
* locationConstraintCollections
**********************************************/
export interface locationConstraintCollections {

}

/*********************************************
* locationConstraintItem
**********************************************/
export interface locationConstraintItem {
	resolveAvailability?: boolean;
}

/*********************************************
* locationConstraintItemCollections
**********************************************/
export interface locationConstraintItemCollections {

}

/*********************************************
* meetingTimeSuggestion
**********************************************/
export interface meetingTimeSuggestion {
	attendeeAvailability?: Array<graph.attendeeAvailability>;
	confidence?: number;
	locations?: Array<graph.location>;
	meetingTimeSlot?: graph.timeSlot;
	order?: number;
	organizerAvailability?: graph.freeBusyStatus;
	suggestionReason?: string;
}

/*********************************************
* meetingTimeSuggestionCollections
**********************************************/
export interface meetingTimeSuggestionCollections {

}

/*********************************************
* meetingTimeSuggestionsResult
**********************************************/
export interface meetingTimeSuggestionsResult {
	emptySuggestionsReason?: string;
	meetingTimeSuggestions?: Array<graph.meetingTimeSuggestion>;
}

/*********************************************
* meetingTimeSuggestionsResultCollections
**********************************************/
export interface meetingTimeSuggestionsResultCollections {

}

/*********************************************
* timeConstraint
**********************************************/
export interface timeConstraint {
	activityDomain?: graph.activityDomain;
	timeSlots?: Array<graph.timeSlot>;
}

/*********************************************
* timeConstraintCollections
**********************************************/
export interface timeConstraintCollections {

}

/*********************************************
* attachmentItem
**********************************************/
export interface attachmentItem {
	attachmentType?: graph.attachmentType;
	contentId?: string;
	contentType?: string;
	isInline?: boolean;
	name?: string;
	size?: number;
}

/*********************************************
* attachmentItemCollections
**********************************************/
export interface attachmentItemCollections {

}

/*********************************************
* attendee
**********************************************/
export interface attendee {
	proposedNewTime?: graph.timeSlot;
	status?: graph.responseStatus;
}

/*********************************************
* attendeeCollections
**********************************************/
export interface attendeeCollections {

}

/*********************************************
* responseStatus
**********************************************/
export interface responseStatus {
	response?: graph.responseType;
	time?: any;
}

/*********************************************
* responseStatusCollections
**********************************************/
export interface responseStatusCollections {

}

/*********************************************
* automaticRepliesMailTips
**********************************************/
export interface automaticRepliesMailTips {
	message?: string;
	messageLanguage?: graph.localeInfo;
	scheduledEndTime?: graph.dateTimeTimeZone;
	scheduledStartTime?: graph.dateTimeTimeZone;
}

/*********************************************
* automaticRepliesMailTipsCollections
**********************************************/
export interface automaticRepliesMailTipsCollections {

}

/*********************************************
* localeInfo
**********************************************/
export interface localeInfo {
	displayName?: string;
	locale?: string;
}

/*********************************************
* localeInfoCollections
**********************************************/
export interface localeInfoCollections {

}

/*********************************************
* automaticRepliesSetting
**********************************************/
export interface automaticRepliesSetting {
	externalAudience?: graph.externalAudienceScope;
	externalReplyMessage?: string;
	internalReplyMessage?: string;
	scheduledEndDateTime?: graph.dateTimeTimeZone;
	scheduledStartDateTime?: graph.dateTimeTimeZone;
	status?: graph.automaticRepliesStatus;
}

/*********************************************
* automaticRepliesSettingCollections
**********************************************/
export interface automaticRepliesSettingCollections {

}

/*********************************************
* calendarSharingMessageAction
**********************************************/
export interface calendarSharingMessageAction {
	action?: graph.calendarSharingAction;
	actionType?: graph.calendarSharingActionType;
	importance?: graph.calendarSharingActionImportance;
}

/*********************************************
* calendarSharingMessageActionCollections
**********************************************/
export interface calendarSharingMessageActionCollections {

}

/*********************************************
* convertIdResult
**********************************************/
export interface convertIdResult {
	errorDetails?: graph.genericError;
	sourceId?: string;
	targetId?: string;
}

/*********************************************
* convertIdResultCollections
**********************************************/
export interface convertIdResultCollections {

}

/*********************************************
* genericError
**********************************************/
export interface genericError {
	code?: string;
	message?: string;
}

/*********************************************
* genericErrorCollections
**********************************************/
export interface genericErrorCollections {

}

/*********************************************
* timeZoneBase
**********************************************/
export interface timeZoneBase {
	name?: string;
}

/*********************************************
* timeZoneBaseCollections
**********************************************/
export interface timeZoneBaseCollections {

}

/*********************************************
* customTimeZone
**********************************************/
export interface customTimeZone {
	bias?: number;
	daylightOffset?: graph.daylightTimeZoneOffset;
	standardOffset?: graph.standardTimeZoneOffset;
}

/*********************************************
* customTimeZoneCollections
**********************************************/
export interface customTimeZoneCollections {

}

/*********************************************
* standardTimeZoneOffset
**********************************************/
export interface standardTimeZoneOffset {
	dayOccurrence?: number;
	dayOfWeek?: graph.dayOfWeek;
	month?: number;
	time?: anyOfDay;
	year?: number;
}

/*********************************************
* standardTimeZoneOffsetCollections
**********************************************/
export interface standardTimeZoneOffsetCollections {

}

/*********************************************
* daylightTimeZoneOffset
**********************************************/
export interface daylightTimeZoneOffset {
	daylightBias?: number;
}

/*********************************************
* daylightTimeZoneOffsetCollections
**********************************************/
export interface daylightTimeZoneOffsetCollections {

}

/*********************************************
* followupFlag
**********************************************/
export interface followupFlag {
	completedDateTime?: graph.dateTimeTimeZone;
	dueDateTime?: graph.dateTimeTimeZone;
	flagStatus?: graph.followupFlagStatus;
	startDateTime?: graph.dateTimeTimeZone;
}

/*********************************************
* followupFlagCollections
**********************************************/
export interface followupFlagCollections {

}

/*********************************************
* freeBusyError
**********************************************/
export interface freeBusyError {
	message?: string;
	responseCode?: string;
}

/*********************************************
* freeBusyErrorCollections
**********************************************/
export interface freeBusyErrorCollections {

}

/*********************************************
* internetMessageHeader
**********************************************/
export interface internetMessageHeader {
	name?: string;
	value?: string;
}

/*********************************************
* internetMessageHeaderCollections
**********************************************/
export interface internetMessageHeaderCollections {

}

/*********************************************
* workingHours
**********************************************/
export interface workingHours {
	daysOfWeek?: Array<graph.dayOfWeek>;
	endTime?: anyOfDay;
	startTime?: anyOfDay;
	timeZone?: graph.timeZoneBase;
}

/*********************************************
* workingHoursCollections
**********************************************/
export interface workingHoursCollections {

}

/*********************************************
* mailTips
**********************************************/
export interface mailTips {
	automaticReplies?: graph.automaticRepliesMailTips;
	customMailTip?: string;
	deliveryRestricted?: boolean;
	emailAddress?: graph.emailAddress;
	error?: graph.mailTipsError;
	externalMemberCount?: number;
	isModerated?: boolean;
	mailboxFull?: boolean;
	maxMessageSize?: number;
	recipientScope?: graph.recipientScopeType;
	recipientSuggestions?: Array<graph.recipient>;
	totalMemberCount?: number;
}

/*********************************************
* mailTipsCollections
**********************************************/
export interface mailTipsCollections {

}

/*********************************************
* mailTipsError
**********************************************/
export interface mailTipsError {
	code?: string;
	message?: string;
}

/*********************************************
* mailTipsErrorCollections
**********************************************/
export interface mailTipsErrorCollections {

}

/*********************************************
* messageRuleActions
**********************************************/
export interface messageRuleActions {
	assignCategories?: Array<string>;
	copyToFolder?: string;
	delete?: boolean;
	forwardAsAttachmentTo?: Array<graph.recipient>;
	forwardTo?: Array<graph.recipient>;
	markAsRead?: boolean;
	markImportance?: graph.importance;
	moveToFolder?: string;
	permanentDelete?: boolean;
	redirectTo?: Array<graph.recipient>;
	stopProcessingRules?: boolean;
}

/*********************************************
* messageRuleActionsCollections
**********************************************/
export interface messageRuleActionsCollections {

}

/*********************************************
* messageRulePredicates
**********************************************/
export interface messageRulePredicates {
	bodyContains?: Array<string>;
	bodyOrSubjectContains?: Array<string>;
	categories?: Array<string>;
	fromAddresses?: Array<graph.recipient>;
	hasAttachments?: boolean;
	headerContains?: Array<string>;
	importance?: graph.importance;
	isApprovalRequest?: boolean;
	isAutomaticForward?: boolean;
	isAutomaticReply?: boolean;
	isEncrypted?: boolean;
	isMeetingRequest?: boolean;
	isMeetingResponse?: boolean;
	isNonDeliveryReport?: boolean;
	isPermissionControlled?: boolean;
	isReadReceipt?: boolean;
	isSigned?: boolean;
	isVoicemail?: boolean;
	messageActionFlag?: graph.messageActionFlag;
	notSentToMe?: boolean;
	recipientContains?: Array<string>;
	senderContains?: Array<string>;
	sensitivity?: graph.sensitivity;
	sentCcMe?: boolean;
	sentOnlyToMe?: boolean;
	sentToAddresses?: Array<graph.recipient>;
	sentToMe?: boolean;
	sentToOrCcMe?: boolean;
	subjectContains?: Array<string>;
	withinSizeRange?: graph.sizeRange;
}

/*********************************************
* messageRulePredicatesCollections
**********************************************/
export interface messageRulePredicatesCollections {

}

/*********************************************
* sizeRange
**********************************************/
export interface sizeRange {
	maximumSize?: number;
	minimumSize?: number;
}

/*********************************************
* sizeRangeCollections
**********************************************/
export interface sizeRangeCollections {

}

/*********************************************
* onlineMeetingInfo
**********************************************/
export interface onlineMeetingInfo {
	conferenceId?: string;
	joinUrl?: string;
	phones?: Array<graph.phone>;
	quickDial?: string;
	tollFreeNumbers?: Array<string>;
	tollNumber?: string;
}

/*********************************************
* onlineMeetingInfoCollections
**********************************************/
export interface onlineMeetingInfoCollections {

}

/*********************************************
* patternedRecurrence
**********************************************/
export interface patternedRecurrence {
	pattern?: graph.recurrencePattern;
	range?: graph.recurrenceRange;
}

/*********************************************
* patternedRecurrenceCollections
**********************************************/
export interface patternedRecurrenceCollections {

}

/*********************************************
* recurrencePattern
**********************************************/
export interface recurrencePattern {
	dayOfMonth?: number;
	daysOfWeek?: Array<graph.dayOfWeek>;
	firstDayOfWeek?: graph.dayOfWeek;
	index?: graph.weekIndex;
	interval?: number;
	month?: number;
	type?: graph.recurrencePatternType;
}

/*********************************************
* recurrencePatternCollections
**********************************************/
export interface recurrencePatternCollections {

}

/*********************************************
* recurrenceRange
**********************************************/
export interface recurrenceRange {
	endDate?: Edm.Date;
	numberOfOccurrences?: number;
	recurrenceTimeZone?: string;
	startDate?: Edm.Date;
	type?: graph.recurrenceRangeType;
}

/*********************************************
* recurrenceRangeCollections
**********************************************/
export interface recurrenceRangeCollections {

}

/*********************************************
* personType
**********************************************/
export interface personType {
	class?: string;
	subclass?: string;
}

/*********************************************
* personTypeCollections
**********************************************/
export interface personTypeCollections {

}

/*********************************************
* reminder
**********************************************/
export interface reminder {
	changeKey?: string;
	eventEndTime?: graph.dateTimeTimeZone;
	eventId?: string;
	eventLocation?: graph.location;
	eventStartTime?: graph.dateTimeTimeZone;
	eventSubject?: string;
	eventWebLink?: string;
	reminderFireTime?: graph.dateTimeTimeZone;
}

/*********************************************
* reminderCollections
**********************************************/
export interface reminderCollections {

}

/*********************************************
* scheduleInformation
**********************************************/
export interface scheduleInformation {
	availabilityView?: string;
	error?: graph.freeBusyError;
	scheduleId?: string;
	scheduleItems?: Array<graph.scheduleItem>;
	workingHours?: graph.workingHours;
}

/*********************************************
* scheduleInformationCollections
**********************************************/
export interface scheduleInformationCollections {

}

/*********************************************
* scheduleItem
**********************************************/
export interface scheduleItem {
	end?: graph.dateTimeTimeZone;
	isPrivate?: boolean;
	location?: string;
	start?: graph.dateTimeTimeZone;
	status?: graph.freeBusyStatus;
	subject?: string;
}

/*********************************************
* scheduleItemCollections
**********************************************/
export interface scheduleItemCollections {

}

/*********************************************
* scoredEmailAddress
**********************************************/
export interface scoredEmailAddress {
	address?: string;
	itemId?: string;
	relevanceScore?: number;
	selectionLikelihood?: graph.selectionLikelihoodInfo;
}

/*********************************************
* scoredEmailAddressCollections
**********************************************/
export interface scoredEmailAddressCollections {

}

/*********************************************
* timeZoneInformation
**********************************************/
export interface timeZoneInformation {
	alias?: string;
	displayName?: string;
}

/*********************************************
* timeZoneInformationCollections
**********************************************/
export interface timeZoneInformationCollections {

}

/*********************************************
* uploadSession
**********************************************/
export interface uploadSession {
	expirationDateTime?: any;
	nextExpectedRanges?: Array<string>;
	uploadUrl?: string;
}

/*********************************************
* uploadSessionCollections
**********************************************/
export interface uploadSessionCollections {

}

/*********************************************
* website
**********************************************/
export interface website {
	address?: string;
	displayName?: string;
	type?: graph.websiteType;
}

/*********************************************
* websiteCollections
**********************************************/
export interface websiteCollections {

}

/*********************************************
* accessAction
**********************************************/
export interface accessAction {

}

/*********************************************
* accessActionCollections
**********************************************/
export interface accessActionCollections {

}

/*********************************************
* album
**********************************************/
export interface album {
	coverImageItemId?: string;
}

/*********************************************
* albumCollections
**********************************************/
export interface albumCollections {

}

/*********************************************
* booleanColumn
**********************************************/
export interface booleanColumn {

}

/*********************************************
* booleanColumnCollections
**********************************************/
export interface booleanColumnCollections {

}

/*********************************************
* calculatedColumn
**********************************************/
export interface calculatedColumn {
	format?: string;
	formula?: string;
	outputType?: string;
}

/*********************************************
* calculatedColumnCollections
**********************************************/
export interface calculatedColumnCollections {

}

/*********************************************
* choiceColumn
**********************************************/
export interface choiceColumn {
	allowTextEntry?: boolean;
	choices?: Array<string>;
	displayAs?: string;
}

/*********************************************
* choiceColumnCollections
**********************************************/
export interface choiceColumnCollections {

}

/*********************************************
* columnValidation
**********************************************/
export interface columnValidation {
	defaultLanguage?: string;
	descriptions?: Array<graph.displayNameLocalization>;
	formula?: string;
}

/*********************************************
* columnValidationCollections
**********************************************/
export interface columnValidationCollections {

}

/*********************************************
* displayNameLocalization
**********************************************/
export interface displayNameLocalization {
	displayName?: string;
	languageTag?: string;
}

/*********************************************
* displayNameLocalizationCollections
**********************************************/
export interface displayNameLocalizationCollections {

}

/*********************************************
* contentApprovalStatusColumn
**********************************************/
export interface contentApprovalStatusColumn {

}

/*********************************************
* contentApprovalStatusColumnCollections
**********************************************/
export interface contentApprovalStatusColumnCollections {

}

/*********************************************
* contentTypeInfo
**********************************************/
export interface contentTypeInfo {
	id?: string;
	name?: string;
}

/*********************************************
* contentTypeInfoCollections
**********************************************/
export interface contentTypeInfoCollections {

}

/*********************************************
* contentTypeOrder
**********************************************/
export interface contentTypeOrder {
	default?: boolean;
	position?: number;
}

/*********************************************
* contentTypeOrderCollections
**********************************************/
export interface contentTypeOrderCollections {

}

/*********************************************
* currencyColumn
**********************************************/
export interface currencyColumn {
	locale?: string;
}

/*********************************************
* currencyColumnCollections
**********************************************/
export interface currencyColumnCollections {

}

/*********************************************
* dateTimeColumn
**********************************************/
export interface dateTimeColumn {
	displayAs?: string;
	format?: string;
}

/*********************************************
* dateTimeColumnCollections
**********************************************/
export interface dateTimeColumnCollections {

}

/*********************************************
* defaultColumnValue
**********************************************/
export interface defaultColumnValue {
	formula?: string;
	value?: string;
}

/*********************************************
* defaultColumnValueCollections
**********************************************/
export interface defaultColumnValueCollections {

}

/*********************************************
* documentSet
**********************************************/
export interface documentSet {
	allowedContentTypes?: Array<graph.contentTypeInfo>;
	defaultContents?: Array<graph.documentSetContent>;
	propagateWelcomePageChanges?: boolean;
	shouldPrefixNameToFile?: boolean;
	welcomePageUrl?: string;
}

/*********************************************
* documentSetCollections
**********************************************/
export interface documentSetCollections {

}

/*********************************************
* documentSetContent
**********************************************/
export interface documentSetContent {
	contentType?: graph.contentTypeInfo;
	fileName?: string;
	folderName?: string;
}

/*********************************************
* documentSetContentCollections
**********************************************/
export interface documentSetContentCollections {

}

/*********************************************
* documentSetVersionItem
**********************************************/
export interface documentSetVersionItem {
	itemId?: string;
	title?: string;
	versionId?: string;
}

/*********************************************
* documentSetVersionItemCollections
**********************************************/
export interface documentSetVersionItemCollections {

}

/*********************************************
* driveItemUploadableProperties
**********************************************/
export interface driveItemUploadableProperties {
	description?: string;
	fileSize?: number;
	fileSystemInfo?: graph.fileSystemInfo;
	name?: string;
}

/*********************************************
* driveItemUploadablePropertiesCollections
**********************************************/
export interface driveItemUploadablePropertiesCollections {

}

/*********************************************
* driveRecipient
**********************************************/
export interface driveRecipient {
	alias?: string;
	email?: string;
	objectId?: string;
}

/*********************************************
* driveRecipientCollections
**********************************************/
export interface driveRecipientCollections {

}

/*********************************************
* hashes
**********************************************/
export interface hashes {
	crc32Hash?: string;
	quickXorHash?: string;
	sha1Hash?: string;
	sha256Hash?: string;
}

/*********************************************
* hashesCollections
**********************************************/
export interface hashesCollections {

}

/*********************************************
* folderView
**********************************************/
export interface folderView {
	sortBy?: string;
	sortOrder?: string;
	viewType?: string;
}

/*********************************************
* folderViewCollections
**********************************************/
export interface folderViewCollections {

}

/*********************************************
* geolocationColumn
**********************************************/
export interface geolocationColumn {

}

/*********************************************
* geolocationColumnCollections
**********************************************/
export interface geolocationColumnCollections {

}

/*********************************************
* hyperlinkOrPictureColumn
**********************************************/
export interface hyperlinkOrPictureColumn {
	isPicture?: boolean;
}

/*********************************************
* hyperlinkOrPictureColumnCollections
**********************************************/
export interface hyperlinkOrPictureColumnCollections {

}

/*********************************************
* incompleteData
**********************************************/
export interface incompleteData {
	missingDataBeforeDateTime?: any;
	wasThrottled?: boolean;
}

/*********************************************
* incompleteDataCollections
**********************************************/
export interface incompleteDataCollections {

}

/*********************************************
* itemActionStat
**********************************************/
export interface itemActionStat {
	actionCount?: number;
	actorCount?: number;
}

/*********************************************
* itemActionStatCollections
**********************************************/
export interface itemActionStatCollections {

}

/*********************************************
* itemPreviewInfo
**********************************************/
export interface itemPreviewInfo {
	getUrl?: string;
	postParameters?: string;
	postUrl?: string;
}

/*********************************************
* itemPreviewInfoCollections
**********************************************/
export interface itemPreviewInfoCollections {

}

/*********************************************
* itemReference
**********************************************/
export interface itemReference {
	driveId?: string;
	driveType?: string;
	id?: string;
	name?: string;
	path?: string;
	shareId?: string;
	sharepointIds?: graph.sharepointIds;
	siteId?: string;
}

/*********************************************
* itemReferenceCollections
**********************************************/
export interface itemReferenceCollections {

}

/*********************************************
* lookupColumn
**********************************************/
export interface lookupColumn {
	allowMultipleValues?: boolean;
	allowUnlimitedLength?: boolean;
	columnName?: string;
	listId?: string;
	primaryLookupColumnId?: string;
}

/*********************************************
* lookupColumnCollections
**********************************************/
export interface lookupColumnCollections {

}

/*********************************************
* numberColumn
**********************************************/
export interface numberColumn {
	decimalPlaces?: string;
	displayAs?: string;
	maximum?: number;
	minimum?: number;
}

/*********************************************
* numberColumnCollections
**********************************************/
export interface numberColumnCollections {

}

/*********************************************
* pendingContentUpdate
**********************************************/
export interface pendingContentUpdate {
	queuedDateTime?: any;
}

/*********************************************
* pendingContentUpdateCollections
**********************************************/
export interface pendingContentUpdateCollections {

}

/*********************************************
* personOrGroupColumn
**********************************************/
export interface personOrGroupColumn {
	allowMultipleSelection?: boolean;
	chooseFromType?: string;
	displayAs?: string;
}

/*********************************************
* personOrGroupColumnCollections
**********************************************/
export interface personOrGroupColumnCollections {

}

/*********************************************
* storagePlanInformation
**********************************************/
export interface storagePlanInformation {
	upgradeAvailable?: boolean;
}

/*********************************************
* storagePlanInformationCollections
**********************************************/
export interface storagePlanInformationCollections {

}

/*********************************************
* sharePointIdentity
**********************************************/
export interface sharePointIdentity {
	loginName?: string;
}

/*********************************************
* sharePointIdentityCollections
**********************************************/
export interface sharePointIdentityCollections {

}

/*********************************************
* sharePointIdentitySet
**********************************************/
export interface sharePointIdentitySet {
	group?: graph.identity;
	siteGroup?: graph.sharePointIdentity;
	siteUser?: graph.sharePointIdentity;
}

/*********************************************
* sharePointIdentitySetCollections
**********************************************/
export interface sharePointIdentitySetCollections {

}

/*********************************************
* sharingInvitation
**********************************************/
export interface sharingInvitation {
	email?: string;
	invitedBy?: graph.identitySet;
	redeemedBy?: string;
	signInRequired?: boolean;
}

/*********************************************
* sharingInvitationCollections
**********************************************/
export interface sharingInvitationCollections {

}

/*********************************************
* sharingLink
**********************************************/
export interface sharingLink {
	application?: graph.identity;
	preventsDownload?: boolean;
	scope?: string;
	type?: string;
	webHtml?: string;
	webUrl?: string;
}

/*********************************************
* sharingLinkCollections
**********************************************/
export interface sharingLinkCollections {

}

/*********************************************
* termColumn
**********************************************/
export interface termColumn {
	allowMultipleValues?: boolean;
	showFullyQualifiedName?: boolean;
}

/*********************************************
* termColumnCollections
**********************************************/
export interface termColumnCollections {

}

/*********************************************
* textColumn
**********************************************/
export interface textColumn {
	allowMultipleLines?: boolean;
	appendChangesToExistingText?: boolean;
	linesForEditing?: number;
	maxLength?: number;
	textType?: string;
}

/*********************************************
* textColumnCollections
**********************************************/
export interface textColumnCollections {

}

/*********************************************
* thumbnail
**********************************************/
export interface thumbnail {
	content?: any;
	height?: number;
	sourceItemId?: string;
	url?: string;
	width?: number;
}

/*********************************************
* thumbnailCollections
**********************************************/
export interface thumbnailCollections {

}

/*********************************************
* thumbnailColumn
**********************************************/
export interface thumbnailColumn {

}

/*********************************************
* thumbnailColumnCollections
**********************************************/
export interface thumbnailColumnCollections {

}

/*********************************************
* extensionSchemaProperty
**********************************************/
export interface extensionSchemaProperty {
	name?: string;
	type?: string;
}

/*********************************************
* extensionSchemaPropertyCollections
**********************************************/
export interface extensionSchemaPropertyCollections {

}

/*********************************************
* accessReviewApplyAction
**********************************************/
export interface accessReviewApplyAction {

}

/*********************************************
* accessReviewApplyActionCollections
**********************************************/
export interface accessReviewApplyActionCollections {

}

/*********************************************
* accessReviewHistoryScheduleSettings
**********************************************/
export interface accessReviewHistoryScheduleSettings {
	recurrence?: graph.patternedRecurrence;
	reportRange?: string;
}

/*********************************************
* accessReviewHistoryScheduleSettingsCollections
**********************************************/
export interface accessReviewHistoryScheduleSettingsCollections {

}

/*********************************************
* accessReviewScope
**********************************************/
export interface accessReviewScope {

}

/*********************************************
* accessReviewScopeCollections
**********************************************/
export interface accessReviewScopeCollections {

}

/*********************************************
* accessReviewQueryScope
**********************************************/
export interface accessReviewQueryScope {
	query?: string;
	queryRoot?: string;
	queryType?: string;
}

/*********************************************
* accessReviewQueryScopeCollections
**********************************************/
export interface accessReviewQueryScopeCollections {

}

/*********************************************
* accessReviewInactiveUsersQueryScope
**********************************************/
export interface accessReviewInactiveUsersQueryScope {
	inactiveDuration?: number;
}

/*********************************************
* accessReviewInactiveUsersQueryScopeCollections
**********************************************/
export interface accessReviewInactiveUsersQueryScopeCollections {

}

/*********************************************
* accessReviewInstanceDecisionItemResource
**********************************************/
export interface accessReviewInstanceDecisionItemResource {
	displayName?: string;
	id?: string;
	type?: string;
}

/*********************************************
* accessReviewInstanceDecisionItemResourceCollections
**********************************************/
export interface accessReviewInstanceDecisionItemResourceCollections {

}

/*********************************************
* accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource
**********************************************/
export interface accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource {
	accessPackageDisplayName?: string;
	accessPackageId?: string;
}

/*********************************************
* accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceCollections
**********************************************/
export interface accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceCollections {

}

/*********************************************
* accessReviewInstanceDecisionItemAzureRoleResource
**********************************************/
export interface accessReviewInstanceDecisionItemAzureRoleResource {
	scope?: graph.accessReviewInstanceDecisionItemResource;
}

/*********************************************
* accessReviewInstanceDecisionItemAzureRoleResourceCollections
**********************************************/
export interface accessReviewInstanceDecisionItemAzureRoleResourceCollections {

}

/*********************************************
* accessReviewInstanceDecisionItemServicePrincipalResource
**********************************************/
export interface accessReviewInstanceDecisionItemServicePrincipalResource {
	appId?: string;
}

/*********************************************
* accessReviewInstanceDecisionItemServicePrincipalResourceCollections
**********************************************/
export interface accessReviewInstanceDecisionItemServicePrincipalResourceCollections {

}

/*********************************************
* accessReviewNotificationRecipientItem
**********************************************/
export interface accessReviewNotificationRecipientItem {
	notificationRecipientScope?: graph.accessReviewNotificationRecipientScope;
	notificationTemplateType?: string;
}

/*********************************************
* accessReviewNotificationRecipientItemCollections
**********************************************/
export interface accessReviewNotificationRecipientItemCollections {

}

/*********************************************
* accessReviewNotificationRecipientScope
**********************************************/
export interface accessReviewNotificationRecipientScope {

}

/*********************************************
* accessReviewNotificationRecipientScopeCollections
**********************************************/
export interface accessReviewNotificationRecipientScopeCollections {

}

/*********************************************
* accessReviewNotificationRecipientQueryScope
**********************************************/
export interface accessReviewNotificationRecipientQueryScope {
	query?: string;
	queryRoot?: string;
	queryType?: string;
}

/*********************************************
* accessReviewNotificationRecipientQueryScopeCollections
**********************************************/
export interface accessReviewNotificationRecipientQueryScopeCollections {

}

/*********************************************
* accessReviewReviewerScope
**********************************************/
export interface accessReviewReviewerScope {
	query?: string;
	queryRoot?: string;
	queryType?: string;
}

/*********************************************
* accessReviewReviewerScopeCollections
**********************************************/
export interface accessReviewReviewerScopeCollections {

}

/*********************************************
* accessReviewScheduleSettings
**********************************************/
export interface accessReviewScheduleSettings {
	applyActions?: Array<graph.accessReviewApplyAction>;
	autoApplyDecisionsEnabled?: boolean;
	decisionHistoriesForReviewersEnabled?: boolean;
	defaultDecision?: string;
	defaultDecisionEnabled?: boolean;
	instanceDurationInDays?: number;
	justificationRequiredOnApproval?: boolean;
	mailNotificationsEnabled?: boolean;
	recommendationsEnabled?: boolean;
	recurrence?: graph.patternedRecurrence;
	reminderNotificationsEnabled?: boolean;
}

/*********************************************
* accessReviewScheduleSettingsCollections
**********************************************/
export interface accessReviewScheduleSettingsCollections {

}

/*********************************************
* accessReviewStageSettings
**********************************************/
export interface accessReviewStageSettings {
	decisionsThatWillMoveToNextStage?: Array<string>;
	dependsOn?: Array<string>;
	durationInDays?: number;
	fallbackReviewers?: Array<graph.accessReviewReviewerScope>;
	recommendationsEnabled?: boolean;
	reviewers?: Array<graph.accessReviewReviewerScope>;
	stageId?: string;
}

/*********************************************
* accessReviewStageSettingsCollections
**********************************************/
export interface accessReviewStageSettingsCollections {

}

/*********************************************
* appConsentRequestScope
**********************************************/
export interface appConsentRequestScope {
	displayName?: string;
}

/*********************************************
* appConsentRequestScopeCollections
**********************************************/
export interface appConsentRequestScopeCollections {

}

/*********************************************
* disableAndDeleteUserApplyAction
**********************************************/
export interface disableAndDeleteUserApplyAction {

}

/*********************************************
* disableAndDeleteUserApplyActionCollections
**********************************************/
export interface disableAndDeleteUserApplyActionCollections {

}

/*********************************************
* principalResourceMembershipsScope
**********************************************/
export interface principalResourceMembershipsScope {
	principalScopes?: Array<graph.accessReviewScope>;
	resourceScopes?: Array<graph.accessReviewScope>;
}

/*********************************************
* principalResourceMembershipsScopeCollections
**********************************************/
export interface principalResourceMembershipsScopeCollections {

}

/*********************************************
* removeAccessApplyAction
**********************************************/
export interface removeAccessApplyAction {

}

/*********************************************
* removeAccessApplyActionCollections
**********************************************/
export interface removeAccessApplyActionCollections {

}

/*********************************************
* servicePrincipalIdentity
**********************************************/
export interface servicePrincipalIdentity {
	appId?: string;
}

/*********************************************
* servicePrincipalIdentityCollections
**********************************************/
export interface servicePrincipalIdentityCollections {

}

/*********************************************
* agreementFileData
**********************************************/
export interface agreementFileData {
	data?: any;
}

/*********************************************
* agreementFileDataCollections
**********************************************/
export interface agreementFileDataCollections {

}

/*********************************************
* termsExpiration
**********************************************/
export interface termsExpiration {
	frequency?: number;
	startDateTime?: any;
}

/*********************************************
* termsExpirationCollections
**********************************************/
export interface termsExpirationCollections {

}

/*********************************************
* conditionalAccessSessionControl
**********************************************/
export interface conditionalAccessSessionControl {
	isEnabled?: boolean;
}

/*********************************************
* conditionalAccessSessionControlCollections
**********************************************/
export interface conditionalAccessSessionControlCollections {

}

/*********************************************
* applicationEnforcedRestrictionsSessionControl
**********************************************/
export interface applicationEnforcedRestrictionsSessionControl {

}

/*********************************************
* applicationEnforcedRestrictionsSessionControlCollections
**********************************************/
export interface applicationEnforcedRestrictionsSessionControlCollections {

}

/*********************************************
* cloudAppSecuritySessionControl
**********************************************/
export interface cloudAppSecuritySessionControl {
	cloudAppSecurityType?: graph.cloudAppSecuritySessionControlType;
}

/*********************************************
* cloudAppSecuritySessionControlCollections
**********************************************/
export interface cloudAppSecuritySessionControlCollections {

}

/*********************************************
* conditionalAccessApplications
**********************************************/
export interface conditionalAccessApplications {
	excludeApplications?: Array<string>;
	includeApplications?: Array<string>;
	includeAuthenticationContextClassReferences?: Array<string>;
	includeUserActions?: Array<string>;
}

/*********************************************
* conditionalAccessApplicationsCollections
**********************************************/
export interface conditionalAccessApplicationsCollections {

}

/*********************************************
* conditionalAccessClientApplications
**********************************************/
export interface conditionalAccessClientApplications {
	excludeServicePrincipals?: Array<string>;
	includeServicePrincipals?: Array<string>;
}

/*********************************************
* conditionalAccessClientApplicationsCollections
**********************************************/
export interface conditionalAccessClientApplicationsCollections {

}

/*********************************************
* conditionalAccessConditionSet
**********************************************/
export interface conditionalAccessConditionSet {
	applications?: graph.conditionalAccessApplications;
	clientApplications?: graph.conditionalAccessClientApplications;
	clientAppTypes?: Array<graph.conditionalAccessClientApp>;
	devices?: graph.conditionalAccessDevices;
	locations?: graph.conditionalAccessLocations;
	platforms?: graph.conditionalAccessPlatforms;
	servicePrincipalRiskLevels?: Array<graph.riskLevel>;
	signInRiskLevels?: Array<graph.riskLevel>;
	userRiskLevels?: Array<graph.riskLevel>;
	users?: graph.conditionalAccessUsers;
}

/*********************************************
* conditionalAccessConditionSetCollections
**********************************************/
export interface conditionalAccessConditionSetCollections {

}

/*********************************************
* conditionalAccessDevices
**********************************************/
export interface conditionalAccessDevices {
	deviceFilter?: graph.conditionalAccessFilter;
}

/*********************************************
* conditionalAccessDevicesCollections
**********************************************/
export interface conditionalAccessDevicesCollections {

}

/*********************************************
* conditionalAccessLocations
**********************************************/
export interface conditionalAccessLocations {
	excludeLocations?: Array<string>;
	includeLocations?: Array<string>;
}

/*********************************************
* conditionalAccessLocationsCollections
**********************************************/
export interface conditionalAccessLocationsCollections {

}

/*********************************************
* conditionalAccessPlatforms
**********************************************/
export interface conditionalAccessPlatforms {
	excludePlatforms?: Array<graph.conditionalAccessDevicePlatform>;
	includePlatforms?: Array<graph.conditionalAccessDevicePlatform>;
}

/*********************************************
* conditionalAccessPlatformsCollections
**********************************************/
export interface conditionalAccessPlatformsCollections {

}

/*********************************************
* conditionalAccessUsers
**********************************************/
export interface conditionalAccessUsers {
	excludeGroups?: Array<string>;
	excludeRoles?: Array<string>;
	excludeUsers?: Array<string>;
	includeGroups?: Array<string>;
	includeRoles?: Array<string>;
	includeUsers?: Array<string>;
}

/*********************************************
* conditionalAccessUsersCollections
**********************************************/
export interface conditionalAccessUsersCollections {

}

/*********************************************
* conditionalAccessFilter
**********************************************/
export interface conditionalAccessFilter {
	mode?: graph.filterMode;
	rule?: string;
}

/*********************************************
* conditionalAccessFilterCollections
**********************************************/
export interface conditionalAccessFilterCollections {

}

/*********************************************
* conditionalAccessGrantControls
**********************************************/
export interface conditionalAccessGrantControls {
	builtInControls?: Array<graph.conditionalAccessGrantControl>;
	customAuthenticationFactors?: Array<string>;
	operator?: string;
	termsOfUse?: Array<string>;
}

/*********************************************
* conditionalAccessGrantControlsCollections
**********************************************/
export interface conditionalAccessGrantControlsCollections {

}

/*********************************************
* conditionalAccessSessionControls
**********************************************/
export interface conditionalAccessSessionControls {
	applicationEnforcedRestrictions?: graph.applicationEnforcedRestrictionsSessionControl;
	cloudAppSecurity?: graph.cloudAppSecuritySessionControl;
	disableResilienceDefaults?: boolean;
	persistentBrowser?: graph.persistentBrowserSessionControl;
	signInFrequency?: graph.signInFrequencySessionControl;
}

/*********************************************
* conditionalAccessSessionControlsCollections
**********************************************/
export interface conditionalAccessSessionControlsCollections {

}

/*********************************************
* persistentBrowserSessionControl
**********************************************/
export interface persistentBrowserSessionControl {
	mode?: graph.persistentBrowserSessionMode;
}

/*********************************************
* persistentBrowserSessionControlCollections
**********************************************/
export interface persistentBrowserSessionControlCollections {

}

/*********************************************
* signInFrequencySessionControl
**********************************************/
export interface signInFrequencySessionControl {
	authenticationType?: graph.signInFrequencyAuthenticationType;
	frequencyInterval?: graph.signInFrequencyInterval;
	type?: graph.signinFrequencyType;
	value?: number;
}

/*********************************************
* signInFrequencySessionControlCollections
**********************************************/
export interface signInFrequencySessionControlCollections {

}

/*********************************************
* ipRange
**********************************************/
export interface ipRange {

}

/*********************************************
* ipRangeCollections
**********************************************/
export interface ipRangeCollections {

}

/*********************************************
* iPv4CidrRange
**********************************************/
export interface iPv4CidrRange {
	cidrAddress?: string;
}

/*********************************************
* iPv4CidrRangeCollections
**********************************************/
export interface iPv4CidrRangeCollections {

}

/*********************************************
* iPv6CidrRange
**********************************************/
export interface iPv6CidrRange {
	cidrAddress?: string;
}

/*********************************************
* iPv6CidrRangeCollections
**********************************************/
export interface iPv6CidrRangeCollections {

}

/*********************************************
* riskUserActivity
**********************************************/
export interface riskUserActivity {
	detail?: graph.riskDetail;
	riskEventTypes?: Array<string>;
}

/*********************************************
* riskUserActivityCollections
**********************************************/
export interface riskUserActivityCollections {

}

/*********************************************
* accessPackageApprovalStage
**********************************************/
export interface accessPackageApprovalStage {
	durationBeforeAutomaticDenial?: number;
	durationBeforeEscalation?: number;
	escalationApprovers?: Array<graph.subjectSet>;
	fallbackEscalationApprovers?: Array<graph.subjectSet>;
	fallbackPrimaryApprovers?: Array<graph.subjectSet>;
	isApproverJustificationRequired?: boolean;
	isEscalationEnabled?: boolean;
	primaryApprovers?: Array<graph.subjectSet>;
}

/*********************************************
* accessPackageApprovalStageCollections
**********************************************/
export interface accessPackageApprovalStageCollections {

}

/*********************************************
* subjectSet
**********************************************/
export interface subjectSet {

}

/*********************************************
* subjectSetCollections
**********************************************/
export interface subjectSetCollections {

}

/*********************************************
* accessPackageAssignmentApprovalSettings
**********************************************/
export interface accessPackageAssignmentApprovalSettings {
	isApprovalRequiredForAdd?: boolean;
	isApprovalRequiredForUpdate?: boolean;
	stages?: Array<graph.accessPackageApprovalStage>;
}

/*********************************************
* accessPackageAssignmentApprovalSettingsCollections
**********************************************/
export interface accessPackageAssignmentApprovalSettingsCollections {

}

/*********************************************
* accessPackageAssignmentRequestorSettings
**********************************************/
export interface accessPackageAssignmentRequestorSettings {
	allowCustomAssignmentSchedule?: boolean;
	enableOnBehalfRequestorsToAddAccess?: boolean;
	enableOnBehalfRequestorsToRemoveAccess?: boolean;
	enableOnBehalfRequestorsToUpdateAccess?: boolean;
	enableTargetsToSelfAddAccess?: boolean;
	enableTargetsToSelfRemoveAccess?: boolean;
	enableTargetsToSelfUpdateAccess?: boolean;
	onBehalfRequestors?: Array<graph.subjectSet>;
}

/*********************************************
* accessPackageAssignmentRequestorSettingsCollections
**********************************************/
export interface accessPackageAssignmentRequestorSettingsCollections {

}

/*********************************************
* accessPackageAssignmentRequestRequirements
**********************************************/
export interface accessPackageAssignmentRequestRequirements {
	allowCustomAssignmentSchedule?: boolean;
	isApprovalRequiredForAdd?: boolean;
	isApprovalRequiredForUpdate?: boolean;
	policyDescription?: string;
	policyDisplayName?: string;
	policyId?: string;
	schedule?: graph.entitlementManagementSchedule;
}

/*********************************************
* accessPackageAssignmentRequestRequirementsCollections
**********************************************/
export interface accessPackageAssignmentRequestRequirementsCollections {

}

/*********************************************
* entitlementManagementSchedule
**********************************************/
export interface entitlementManagementSchedule {
	expiration?: graph.expirationPattern;
	recurrence?: graph.patternedRecurrence;
	startDateTime?: any;
}

/*********************************************
* entitlementManagementScheduleCollections
**********************************************/
export interface entitlementManagementScheduleCollections {

}

/*********************************************
* accessPackageAssignmentReviewSettings
**********************************************/
export interface accessPackageAssignmentReviewSettings {
	expirationBehavior?: graph.accessReviewExpirationBehavior;
	fallbackReviewers?: Array<graph.subjectSet>;
	isEnabled?: boolean;
	isRecommendationEnabled?: boolean;
	isReviewerJustificationRequired?: boolean;
	isSelfReview?: boolean;
	primaryReviewers?: Array<graph.subjectSet>;
	schedule?: graph.entitlementManagementSchedule;
}

/*********************************************
* accessPackageAssignmentReviewSettingsCollections
**********************************************/
export interface accessPackageAssignmentReviewSettingsCollections {

}

/*********************************************
* accessPackageAutomaticRequestSettings
**********************************************/
export interface accessPackageAutomaticRequestSettings {
	gracePeriodBeforeAccessRemoval?: number;
	removeAccessWhenTargetLeavesAllowedTargets?: boolean;
	requestAccessForAllowedTargets?: boolean;
}

/*********************************************
* accessPackageAutomaticRequestSettingsCollections
**********************************************/
export interface accessPackageAutomaticRequestSettingsCollections {

}

/*********************************************
* attributeRuleMembers
**********************************************/
export interface attributeRuleMembers {
	description?: string;
	membershipRule?: string;
}

/*********************************************
* attributeRuleMembersCollections
**********************************************/
export interface attributeRuleMembersCollections {

}

/*********************************************
* connectedOrganizationMembers
**********************************************/
export interface connectedOrganizationMembers {
	connectedOrganizationId?: string;
	description?: string;
}

/*********************************************
* connectedOrganizationMembersCollections
**********************************************/
export interface connectedOrganizationMembersCollections {

}

/*********************************************
* connectionInfo
**********************************************/
export interface connectionInfo {
	url?: string;
}

/*********************************************
* connectionInfoCollections
**********************************************/
export interface connectionInfoCollections {

}

/*********************************************
* expirationPattern
**********************************************/
export interface expirationPattern {
	duration?: number;
	endDateTime?: any;
	type?: graph.expirationPatternType;
}

/*********************************************
* expirationPatternCollections
**********************************************/
export interface expirationPatternCollections {

}

/*********************************************
* externalSponsors
**********************************************/
export interface externalSponsors {

}

/*********************************************
* externalSponsorsCollections
**********************************************/
export interface externalSponsorsCollections {

}

/*********************************************
* groupMembers
**********************************************/
export interface groupMembers {
	description?: string;
	groupId?: string;
}

/*********************************************
* groupMembersCollections
**********************************************/
export interface groupMembersCollections {

}

/*********************************************
* internalSponsors
**********************************************/
export interface internalSponsors {

}

/*********************************************
* internalSponsorsCollections
**********************************************/
export interface internalSponsorsCollections {

}

/*********************************************
* requestorManager
**********************************************/
export interface requestorManager {
	managerLevel?: number;
}

/*********************************************
* requestorManagerCollections
**********************************************/
export interface requestorManagerCollections {

}

/*********************************************
* singleServicePrincipal
**********************************************/
export interface singleServicePrincipal {
	description?: string;
	servicePrincipalId?: string;
}

/*********************************************
* singleServicePrincipalCollections
**********************************************/
export interface singleServicePrincipalCollections {

}

/*********************************************
* singleUser
**********************************************/
export interface singleUser {
	description?: string;
	userId?: string;
}

/*********************************************
* singleUserCollections
**********************************************/
export interface singleUserCollections {

}

/*********************************************
* targetApplicationOwners
**********************************************/
export interface targetApplicationOwners {

}

/*********************************************
* targetApplicationOwnersCollections
**********************************************/
export interface targetApplicationOwnersCollections {

}

/*********************************************
* targetManager
**********************************************/
export interface targetManager {
	managerLevel?: number;
}

/*********************************************
* targetManagerCollections
**********************************************/
export interface targetManagerCollections {

}

/*********************************************
* identitySource
**********************************************/
export interface identitySource {

}

/*********************************************
* identitySourceCollections
**********************************************/
export interface identitySourceCollections {

}

/*********************************************
* azureActiveDirectoryTenant
**********************************************/
export interface azureActiveDirectoryTenant {
	displayName?: string;
	tenantId?: string;
}

/*********************************************
* azureActiveDirectoryTenantCollections
**********************************************/
export interface azureActiveDirectoryTenantCollections {

}

/*********************************************
* domainIdentitySource
**********************************************/
export interface domainIdentitySource {
	displayName?: string;
	domainName?: string;
}

/*********************************************
* domainIdentitySourceCollections
**********************************************/
export interface domainIdentitySourceCollections {

}

/*********************************************
* externalDomainFederation
**********************************************/
export interface externalDomainFederation {
	displayName?: string;
	domainName?: string;
	issuerUri?: string;
}

/*********************************************
* externalDomainFederationCollections
**********************************************/
export interface externalDomainFederationCollections {

}

/*********************************************
* deviceAndAppManagementAssignmentTarget
**********************************************/
export interface deviceAndAppManagementAssignmentTarget {

}

/*********************************************
* deviceAndAppManagementAssignmentTargetCollections
**********************************************/
export interface deviceAndAppManagementAssignmentTargetCollections {

}

/*********************************************
* allDevicesAssignmentTarget
**********************************************/
export interface allDevicesAssignmentTarget {

}

/*********************************************
* allDevicesAssignmentTargetCollections
**********************************************/
export interface allDevicesAssignmentTargetCollections {

}

/*********************************************
* allLicensedUsersAssignmentTarget
**********************************************/
export interface allLicensedUsersAssignmentTarget {

}

/*********************************************
* allLicensedUsersAssignmentTargetCollections
**********************************************/
export interface allLicensedUsersAssignmentTargetCollections {

}

/*********************************************
* androidMinimumOperatingSystem
**********************************************/
export interface androidMinimumOperatingSystem {
	v10_0?: boolean;
	v11_0?: boolean;
	v4_0?: boolean;
	v4_0_3?: boolean;
	v4_1?: boolean;
	v4_2?: boolean;
	v4_3?: boolean;
	v4_4?: boolean;
	v5_0?: boolean;
	v5_1?: boolean;
}

/*********************************************
* androidMinimumOperatingSystemCollections
**********************************************/
export interface androidMinimumOperatingSystemCollections {

}

/*********************************************
* appConfigurationSettingItem
**********************************************/
export interface appConfigurationSettingItem {
	appConfigKey?: string;
	appConfigKeyType?: graph.mdmAppConfigKeyType;
	appConfigKeyValue?: string;
}

/*********************************************
* appConfigurationSettingItemCollections
**********************************************/
export interface appConfigurationSettingItemCollections {

}

/*********************************************
* configurationManagerCollectionAssignmentTarget
**********************************************/
export interface configurationManagerCollectionAssignmentTarget {
	collectionId?: string;
}

/*********************************************
* configurationManagerCollectionAssignmentTargetCollections
**********************************************/
export interface configurationManagerCollectionAssignmentTargetCollections {

}

/*********************************************
* groupAssignmentTarget
**********************************************/
export interface groupAssignmentTarget {
	groupId?: string;
}

/*********************************************
* groupAssignmentTargetCollections
**********************************************/
export interface groupAssignmentTargetCollections {

}

/*********************************************
* exclusionGroupAssignmentTarget
**********************************************/
export interface exclusionGroupAssignmentTarget {

}

/*********************************************
* exclusionGroupAssignmentTargetCollections
**********************************************/
export interface exclusionGroupAssignmentTargetCollections {

}

/*********************************************
* fileEncryptionInfo
**********************************************/
export interface fileEncryptionInfo {
	encryptionKey?: any;
	fileDigest?: any;
	fileDigestAlgorithm?: string;
	initializationVector?: any;
	mac?: any;
	macKey?: any;
	profileIdentifier?: string;
}

/*********************************************
* fileEncryptionInfoCollections
**********************************************/
export interface fileEncryptionInfoCollections {

}

/*********************************************
* iosDeviceType
**********************************************/
export interface iosDeviceType {
	iPad?: boolean;
	iPhoneAndIPod?: boolean;
}

/*********************************************
* iosDeviceTypeCollections
**********************************************/
export interface iosDeviceTypeCollections {

}

/*********************************************
* mobileAppAssignmentSettings
**********************************************/
export interface mobileAppAssignmentSettings {

}

/*********************************************
* mobileAppAssignmentSettingsCollections
**********************************************/
export interface mobileAppAssignmentSettingsCollections {

}

/*********************************************
* iosLobAppAssignmentSettings
**********************************************/
export interface iosLobAppAssignmentSettings {
	vpnConfigurationId?: string;
}

/*********************************************
* iosLobAppAssignmentSettingsCollections
**********************************************/
export interface iosLobAppAssignmentSettingsCollections {

}

/*********************************************
* iosMinimumOperatingSystem
**********************************************/
export interface iosMinimumOperatingSystem {
	v10_0?: boolean;
	v11_0?: boolean;
	v12_0?: boolean;
	v13_0?: boolean;
	v14_0?: boolean;
	v8_0?: boolean;
	v9_0?: boolean;
}

/*********************************************
* iosMinimumOperatingSystemCollections
**********************************************/
export interface iosMinimumOperatingSystemCollections {

}

/*********************************************
* iosStoreAppAssignmentSettings
**********************************************/
export interface iosStoreAppAssignmentSettings {
	vpnConfigurationId?: string;
}

/*********************************************
* iosStoreAppAssignmentSettingsCollections
**********************************************/
export interface iosStoreAppAssignmentSettingsCollections {

}

/*********************************************
* iosVppAppAssignmentSettings
**********************************************/
export interface iosVppAppAssignmentSettings {
	useDeviceLicensing?: boolean;
	vpnConfigurationId?: string;
}

/*********************************************
* iosVppAppAssignmentSettingsCollections
**********************************************/
export interface iosVppAppAssignmentSettingsCollections {

}

/*********************************************
* microsoftStoreForBusinessAppAssignmentSettings
**********************************************/
export interface microsoftStoreForBusinessAppAssignmentSettings {
	useDeviceContext?: boolean;
}

/*********************************************
* microsoftStoreForBusinessAppAssignmentSettingsCollections
**********************************************/
export interface microsoftStoreForBusinessAppAssignmentSettingsCollections {

}

/*********************************************
* mimeContent
**********************************************/
export interface mimeContent {
	type?: string;
	value?: any;
}

/*********************************************
* mimeContentCollections
**********************************************/
export interface mimeContentCollections {

}

/*********************************************
* mobileAppInstallTimeSettings
**********************************************/
export interface mobileAppInstallTimeSettings {
	deadlineDateTime?: any;
	startDateTime?: any;
	useLocalTime?: boolean;
}

/*********************************************
* mobileAppInstallTimeSettingsCollections
**********************************************/
export interface mobileAppInstallTimeSettingsCollections {

}

/*********************************************
* vppLicensingType
**********************************************/
export interface vppLicensingType {
	supportsDeviceLicensing?: boolean;
	supportsUserLicensing?: boolean;
}

/*********************************************
* vppLicensingTypeCollections
**********************************************/
export interface vppLicensingTypeCollections {

}

/*********************************************
* win32LobAppAssignmentSettings
**********************************************/
export interface win32LobAppAssignmentSettings {
	deliveryOptimizationPriority?: graph.win32LobAppDeliveryOptimizationPriority;
	installTimeSettings?: graph.mobileAppInstallTimeSettings;
	notifications?: graph.win32LobAppNotification;
	restartSettings?: graph.win32LobAppRestartSettings;
}

/*********************************************
* win32LobAppAssignmentSettingsCollections
**********************************************/
export interface win32LobAppAssignmentSettingsCollections {

}

/*********************************************
* win32LobAppRestartSettings
**********************************************/
export interface win32LobAppRestartSettings {
	countdownDisplayBeforeRestartInMinutes?: number;
	gracePeriodInMinutes?: number;
	restartNotificationSnoozeDurationInMinutes?: number;
}

/*********************************************
* win32LobAppRestartSettingsCollections
**********************************************/
export interface win32LobAppRestartSettingsCollections {

}

/*********************************************
* win32LobAppRule
**********************************************/
export interface win32LobAppRule {
	ruleType?: graph.win32LobAppRuleType;
}

/*********************************************
* win32LobAppRuleCollections
**********************************************/
export interface win32LobAppRuleCollections {

}

/*********************************************
* win32LobAppFileSystemRule
**********************************************/
export interface win32LobAppFileSystemRule {
	check32BitOn64System?: boolean;
	comparisonValue?: string;
	fileOrFolderName?: string;
	operationType?: graph.win32LobAppFileSystemOperationType;
	operator?: graph.win32LobAppRuleOperator;
	path?: string;
}

/*********************************************
* win32LobAppFileSystemRuleCollections
**********************************************/
export interface win32LobAppFileSystemRuleCollections {

}

/*********************************************
* win32LobAppInstallExperience
**********************************************/
export interface win32LobAppInstallExperience {
	deviceRestartBehavior?: graph.win32LobAppRestartBehavior;
	runAsAccount?: graph.runAsAccountType;
}

/*********************************************
* win32LobAppInstallExperienceCollections
**********************************************/
export interface win32LobAppInstallExperienceCollections {

}

/*********************************************
* win32LobAppMsiInformation
**********************************************/
export interface win32LobAppMsiInformation {
	packageType?: graph.win32LobAppMsiPackageType;
	productCode?: string;
	productName?: string;
	productVersion?: string;
	publisher?: string;
	requiresReboot?: boolean;
	upgradeCode?: string;
}

/*********************************************
* win32LobAppMsiInformationCollections
**********************************************/
export interface win32LobAppMsiInformationCollections {

}

/*********************************************
* win32LobAppPowerShellScriptRule
**********************************************/
export interface win32LobAppPowerShellScriptRule {
	comparisonValue?: string;
	displayName?: string;
	enforceSignatureCheck?: boolean;
	operationType?: graph.win32LobAppPowerShellScriptRuleOperationType;
	operator?: graph.win32LobAppRuleOperator;
	runAs32Bit?: boolean;
	runAsAccount?: graph.runAsAccountType;
	scriptContent?: string;
}

/*********************************************
* win32LobAppPowerShellScriptRuleCollections
**********************************************/
export interface win32LobAppPowerShellScriptRuleCollections {

}

/*********************************************
* win32LobAppProductCodeRule
**********************************************/
export interface win32LobAppProductCodeRule {
	productCode?: string;
	productVersion?: string;
	productVersionOperator?: graph.win32LobAppRuleOperator;
}

/*********************************************
* win32LobAppProductCodeRuleCollections
**********************************************/
export interface win32LobAppProductCodeRuleCollections {

}

/*********************************************
* win32LobAppRegistryRule
**********************************************/
export interface win32LobAppRegistryRule {
	check32BitOn64System?: boolean;
	comparisonValue?: string;
	keyPath?: string;
	operationType?: graph.win32LobAppRegistryRuleOperationType;
	operator?: graph.win32LobAppRuleOperator;
	valueName?: string;
}

/*********************************************
* win32LobAppRegistryRuleCollections
**********************************************/
export interface win32LobAppRegistryRuleCollections {

}

/*********************************************
* win32LobAppReturnCode
**********************************************/
export interface win32LobAppReturnCode {
	returnCode?: number;
	type?: graph.win32LobAppReturnCodeType;
}

/*********************************************
* win32LobAppReturnCodeCollections
**********************************************/
export interface win32LobAppReturnCodeCollections {

}

/*********************************************
* windowsMinimumOperatingSystem
**********************************************/
export interface windowsMinimumOperatingSystem {
	v10_0?: boolean;
	v8_0?: boolean;
	v8_1?: boolean;
}

/*********************************************
* windowsMinimumOperatingSystemCollections
**********************************************/
export interface windowsMinimumOperatingSystemCollections {

}

/*********************************************
* deviceManagementSettings
**********************************************/
export interface deviceManagementSettings {
	deviceComplianceCheckinThresholdDays?: number;
	isScheduledActionEnabled?: boolean;
	secureByDefault?: boolean;
}

/*********************************************
* deviceManagementSettingsCollections
**********************************************/
export interface deviceManagementSettingsCollections {

}

/*********************************************
* intuneBrand
**********************************************/
export interface intuneBrand {
	contactITEmailAddress?: string;
	contactITName?: string;
	contactITNotes?: string;
	contactITPhoneNumber?: string;
	darkBackgroundLogo?: graph.mimeContent;
	displayName?: string;
	lightBackgroundLogo?: graph.mimeContent;
	onlineSupportSiteName?: string;
	onlineSupportSiteUrl?: string;
	privacyUrl?: string;
	showDisplayNameNextToLogo?: boolean;
	showLogo?: boolean;
	showNameNextToLogo?: boolean;
	themeColor?: graph.rgbColor;
}

/*********************************************
* intuneBrandCollections
**********************************************/
export interface intuneBrandCollections {

}

/*********************************************
* appListItem
**********************************************/
export interface appListItem {
	appId?: string;
	appStoreUrl?: string;
	name?: string;
	publisher?: string;
}

/*********************************************
* appListItemCollections
**********************************************/
export interface appListItemCollections {

}

/*********************************************
* bitLockerRemovableDrivePolicy
**********************************************/
export interface bitLockerRemovableDrivePolicy {
	blockCrossOrganizationWriteAccess?: boolean;
	encryptionMethod?: graph.bitLockerEncryptionMethod;
	requireEncryptionForWriteAccess?: boolean;
}

/*********************************************
* bitLockerRemovableDrivePolicyCollections
**********************************************/
export interface bitLockerRemovableDrivePolicyCollections {

}

/*********************************************
* defenderDetectedMalwareActions
**********************************************/
export interface defenderDetectedMalwareActions {
	highSeverity?: graph.defenderThreatAction;
	lowSeverity?: graph.defenderThreatAction;
	moderateSeverity?: graph.defenderThreatAction;
	severeSeverity?: graph.defenderThreatAction;
}

/*********************************************
* defenderDetectedMalwareActionsCollections
**********************************************/
export interface defenderDetectedMalwareActionsCollections {

}

/*********************************************
* deviceCompliancePolicySettingState
**********************************************/
export interface deviceCompliancePolicySettingState {
	currentValue?: string;
	errorCode?: number;
	errorDescription?: string;
	instanceDisplayName?: string;
	setting?: string;
	settingName?: string;
	sources?: Array<graph.settingSource>;
	state?: graph.complianceStatus;
	userEmail?: string;
	userId?: string;
	userName?: string;
	userPrincipalName?: string;
}

/*********************************************
* deviceCompliancePolicySettingStateCollections
**********************************************/
export interface deviceCompliancePolicySettingStateCollections {

}

/*********************************************
* settingSource
**********************************************/
export interface settingSource {
	displayName?: string;
	id?: string;
	sourceType?: graph.settingSourceType;
}

/*********************************************
* settingSourceCollections
**********************************************/
export interface settingSourceCollections {

}

/*********************************************
* deviceConfigurationSettingState
**********************************************/
export interface deviceConfigurationSettingState {
	currentValue?: string;
	errorCode?: number;
	errorDescription?: string;
	instanceDisplayName?: string;
	setting?: string;
	settingName?: string;
	sources?: Array<graph.settingSource>;
	state?: graph.complianceStatus;
	userEmail?: string;
	userId?: string;
	userName?: string;
	userPrincipalName?: string;
}

/*********************************************
* deviceConfigurationSettingStateCollections
**********************************************/
export interface deviceConfigurationSettingStateCollections {

}

/*********************************************
* edgeSearchEngineBase
**********************************************/
export interface edgeSearchEngineBase {

}

/*********************************************
* edgeSearchEngineBaseCollections
**********************************************/
export interface edgeSearchEngineBaseCollections {

}

/*********************************************
* edgeSearchEngine
**********************************************/
export interface edgeSearchEngine {
	edgeSearchEngineType?: graph.edgeSearchEngineType;
}

/*********************************************
* edgeSearchEngineCollections
**********************************************/
export interface edgeSearchEngineCollections {

}

/*********************************************
* edgeSearchEngineCustom
**********************************************/
export interface edgeSearchEngineCustom {
	edgeSearchEngineOpenSearchXmlUrl?: string;
}

/*********************************************
* edgeSearchEngineCustomCollections
**********************************************/
export interface edgeSearchEngineCustomCollections {

}

/*********************************************
* iosHomeScreenItem
**********************************************/
export interface iosHomeScreenItem {
	displayName?: string;
}

/*********************************************
* iosHomeScreenItemCollections
**********************************************/
export interface iosHomeScreenItemCollections {

}

/*********************************************
* iosHomeScreenApp
**********************************************/
export interface iosHomeScreenApp {
	bundleID?: string;
}

/*********************************************
* iosHomeScreenAppCollections
**********************************************/
export interface iosHomeScreenAppCollections {

}

/*********************************************
* iosHomeScreenFolder
**********************************************/
export interface iosHomeScreenFolder {
	pages?: Array<graph.iosHomeScreenFolderPage>;
}

/*********************************************
* iosHomeScreenFolderCollections
**********************************************/
export interface iosHomeScreenFolderCollections {

}

/*********************************************
* iosHomeScreenFolderPage
**********************************************/
export interface iosHomeScreenFolderPage {
	apps?: Array<graph.iosHomeScreenApp>;
	displayName?: string;
}

/*********************************************
* iosHomeScreenFolderPageCollections
**********************************************/
export interface iosHomeScreenFolderPageCollections {

}

/*********************************************
* iosHomeScreenPage
**********************************************/
export interface iosHomeScreenPage {
	displayName?: string;
	icons?: Array<graph.iosHomeScreenItem>;
}

/*********************************************
* iosHomeScreenPageCollections
**********************************************/
export interface iosHomeScreenPageCollections {

}

/*********************************************
* iosNetworkUsageRule
**********************************************/
export interface iosNetworkUsageRule {
	cellularDataBlocked?: boolean;
	cellularDataBlockWhenRoaming?: boolean;
	managedApps?: Array<graph.appListItem>;
}

/*********************************************
* iosNetworkUsageRuleCollections
**********************************************/
export interface iosNetworkUsageRuleCollections {

}

/*********************************************
* iosNotificationSettings
**********************************************/
export interface iosNotificationSettings {
	alertType?: graph.iosNotificationAlertType;
	appName?: string;
	badgesEnabled?: boolean;
	bundleID?: string;
	enabled?: boolean;
	publisher?: string;
	showInNotificationCenter?: boolean;
	showOnLockScreen?: boolean;
	soundsEnabled?: boolean;
}

/*********************************************
* iosNotificationSettingsCollections
**********************************************/
export interface iosNotificationSettingsCollections {

}

/*********************************************
* mediaContentRatingAustralia
**********************************************/
export interface mediaContentRatingAustralia {
	movieRating?: graph.ratingAustraliaMoviesType;
	tvRating?: graph.ratingAustraliaTelevisionType;
}

/*********************************************
* mediaContentRatingAustraliaCollections
**********************************************/
export interface mediaContentRatingAustraliaCollections {

}

/*********************************************
* mediaContentRatingCanada
**********************************************/
export interface mediaContentRatingCanada {
	movieRating?: graph.ratingCanadaMoviesType;
	tvRating?: graph.ratingCanadaTelevisionType;
}

/*********************************************
* mediaContentRatingCanadaCollections
**********************************************/
export interface mediaContentRatingCanadaCollections {

}

/*********************************************
* mediaContentRatingFrance
**********************************************/
export interface mediaContentRatingFrance {
	movieRating?: graph.ratingFranceMoviesType;
	tvRating?: graph.ratingFranceTelevisionType;
}

/*********************************************
* mediaContentRatingFranceCollections
**********************************************/
export interface mediaContentRatingFranceCollections {

}

/*********************************************
* mediaContentRatingGermany
**********************************************/
export interface mediaContentRatingGermany {
	movieRating?: graph.ratingGermanyMoviesType;
	tvRating?: graph.ratingGermanyTelevisionType;
}

/*********************************************
* mediaContentRatingGermanyCollections
**********************************************/
export interface mediaContentRatingGermanyCollections {

}

/*********************************************
* mediaContentRatingIreland
**********************************************/
export interface mediaContentRatingIreland {
	movieRating?: graph.ratingIrelandMoviesType;
	tvRating?: graph.ratingIrelandTelevisionType;
}

/*********************************************
* mediaContentRatingIrelandCollections
**********************************************/
export interface mediaContentRatingIrelandCollections {

}

/*********************************************
* mediaContentRatingJapan
**********************************************/
export interface mediaContentRatingJapan {
	movieRating?: graph.ratingJapanMoviesType;
	tvRating?: graph.ratingJapanTelevisionType;
}

/*********************************************
* mediaContentRatingJapanCollections
**********************************************/
export interface mediaContentRatingJapanCollections {

}

/*********************************************
* mediaContentRatingNewZealand
**********************************************/
export interface mediaContentRatingNewZealand {
	movieRating?: graph.ratingNewZealandMoviesType;
	tvRating?: graph.ratingNewZealandTelevisionType;
}

/*********************************************
* mediaContentRatingNewZealandCollections
**********************************************/
export interface mediaContentRatingNewZealandCollections {

}

/*********************************************
* mediaContentRatingUnitedKingdom
**********************************************/
export interface mediaContentRatingUnitedKingdom {
	movieRating?: graph.ratingUnitedKingdomMoviesType;
	tvRating?: graph.ratingUnitedKingdomTelevisionType;
}

/*********************************************
* mediaContentRatingUnitedKingdomCollections
**********************************************/
export interface mediaContentRatingUnitedKingdomCollections {

}

/*********************************************
* mediaContentRatingUnitedStates
**********************************************/
export interface mediaContentRatingUnitedStates {
	movieRating?: graph.ratingUnitedStatesMoviesType;
	tvRating?: graph.ratingUnitedStatesTelevisionType;
}

/*********************************************
* mediaContentRatingUnitedStatesCollections
**********************************************/
export interface mediaContentRatingUnitedStatesCollections {

}

/*********************************************
* omaSetting
**********************************************/
export interface omaSetting {
	description?: string;
	displayName?: string;
	omaUri?: string;
}

/*********************************************
* omaSettingCollections
**********************************************/
export interface omaSettingCollections {

}

/*********************************************
* omaSettingBase64
**********************************************/
export interface omaSettingBase64 {
	fileName?: string;
	value?: string;
}

/*********************************************
* omaSettingBase64Collections
**********************************************/
export interface omaSettingBase64Collections {

}

/*********************************************
* omaSettingBoolean
**********************************************/
export interface omaSettingBoolean {
	value?: boolean;
}

/*********************************************
* omaSettingBooleanCollections
**********************************************/
export interface omaSettingBooleanCollections {

}

/*********************************************
* omaSettingDateTime
**********************************************/
export interface omaSettingDateTime {
	value?: any;
}

/*********************************************
* omaSettingDateTimeCollections
**********************************************/
export interface omaSettingDateTimeCollections {

}

/*********************************************
* omaSettingFloatingPoint
**********************************************/
export interface omaSettingFloatingPoint {
	value?: any;
}

/*********************************************
* omaSettingFloatingPointCollections
**********************************************/
export interface omaSettingFloatingPointCollections {

}

/*********************************************
* omaSettingInteger
**********************************************/
export interface omaSettingInteger {
	value?: number;
}

/*********************************************
* omaSettingIntegerCollections
**********************************************/
export interface omaSettingIntegerCollections {

}

/*********************************************
* omaSettingString
**********************************************/
export interface omaSettingString {
	value?: string;
}

/*********************************************
* omaSettingStringCollections
**********************************************/
export interface omaSettingStringCollections {

}

/*********************************************
* omaSettingStringXml
**********************************************/
export interface omaSettingStringXml {
	fileName?: string;
	value?: any;
}

/*********************************************
* omaSettingStringXmlCollections
**********************************************/
export interface omaSettingStringXmlCollections {

}

/*********************************************
* report
**********************************************/
export interface report {
	content?: any;
}

/*********************************************
* reportCollections
**********************************************/
export interface reportCollections {

}

/*********************************************
* sharedPCAccountManagerPolicy
**********************************************/
export interface sharedPCAccountManagerPolicy {
	accountDeletionPolicy?: graph.sharedPCAccountDeletionPolicyType;
	cacheAccountsAboveDiskFreePercentage?: number;
	inactiveThresholdDays?: number;
	removeAccountsBelowDiskFreePercentage?: number;
}

/*********************************************
* sharedPCAccountManagerPolicyCollections
**********************************************/
export interface sharedPCAccountManagerPolicyCollections {

}

/*********************************************
* windows10NetworkProxyServer
**********************************************/
export interface windows10NetworkProxyServer {
	address?: string;
	exceptions?: Array<string>;
	useForLocalAddresses?: boolean;
}

/*********************************************
* windows10NetworkProxyServerCollections
**********************************************/
export interface windows10NetworkProxyServerCollections {

}

/*********************************************
* windowsFirewallNetworkProfile
**********************************************/
export interface windowsFirewallNetworkProfile {
	authorizedApplicationRulesFromGroupPolicyMerged?: boolean;
	connectionSecurityRulesFromGroupPolicyMerged?: boolean;
	firewallEnabled?: graph.stateManagementSetting;
	globalPortRulesFromGroupPolicyMerged?: boolean;
	inboundConnectionsBlocked?: boolean;
	inboundNotificationsBlocked?: boolean;
	incomingTrafficBlocked?: boolean;
	outboundConnectionsBlocked?: boolean;
	policyRulesFromGroupPolicyMerged?: boolean;
	securedPacketExemptionAllowed?: boolean;
	stealthModeBlocked?: boolean;
	unicastResponsesToMulticastBroadcastsBlocked?: boolean;
}

/*********************************************
* windowsFirewallNetworkProfileCollections
**********************************************/
export interface windowsFirewallNetworkProfileCollections {

}

/*********************************************
* windowsUpdateInstallScheduleType
**********************************************/
export interface windowsUpdateInstallScheduleType {

}

/*********************************************
* windowsUpdateInstallScheduleTypeCollections
**********************************************/
export interface windowsUpdateInstallScheduleTypeCollections {

}

/*********************************************
* windowsUpdateActiveHoursInstall
**********************************************/
export interface windowsUpdateActiveHoursInstall {
	activeHoursEnd?: anyOfDay;
	activeHoursStart?: anyOfDay;
}

/*********************************************
* windowsUpdateActiveHoursInstallCollections
**********************************************/
export interface windowsUpdateActiveHoursInstallCollections {

}

/*********************************************
* windowsUpdateScheduledInstall
**********************************************/
export interface windowsUpdateScheduledInstall {
	scheduledInstallDay?: graph.weeklySchedule;
	scheduledInstallTime?: anyOfDay;
}

/*********************************************
* windowsUpdateScheduledInstallCollections
**********************************************/
export interface windowsUpdateScheduledInstallCollections {

}

/*********************************************
* configurationManagerClientEnabledFeatures
**********************************************/
export interface configurationManagerClientEnabledFeatures {
	compliancePolicy?: boolean;
	deviceConfiguration?: boolean;
	inventory?: boolean;
	modernApps?: boolean;
	resourceAccess?: boolean;
	windowsUpdateForBusiness?: boolean;
}

/*********************************************
* configurationManagerClientEnabledFeaturesCollections
**********************************************/
export interface configurationManagerClientEnabledFeaturesCollections {

}

/*********************************************
* deviceActionResult
**********************************************/
export interface deviceActionResult {
	actionName?: string;
	actionState?: graph.actionState;
	lastUpdatedDateTime?: any;
	startDateTime?: any;
}

/*********************************************
* deviceActionResultCollections
**********************************************/
export interface deviceActionResultCollections {

}

/*********************************************
* deviceHealthAttestationState
**********************************************/
export interface deviceHealthAttestationState {
	attestationIdentityKey?: string;
	bitLockerStatus?: string;
	bootAppSecurityVersion?: string;
	bootDebugging?: string;
	bootManagerSecurityVersion?: string;
	bootManagerVersion?: string;
	bootRevisionListInfo?: string;
	codeIntegrity?: string;
	codeIntegrityCheckVersion?: string;
	codeIntegrityPolicy?: string;
	contentNamespaceUrl?: string;
	contentVersion?: string;
	dataExcutionPolicy?: string;
	deviceHealthAttestationStatus?: string;
	earlyLaunchAntiMalwareDriverProtection?: string;
	healthAttestationSupportedStatus?: string;
	healthStatusMismatchInfo?: string;
	issuedDateTime?: any;
	lastUpdateDateTime?: string;
	operatingSystemKernelDebugging?: string;
	operatingSystemRevListInfo?: string;
	pcr0?: string;
	pcrHashAlgorithm?: string;
	resetCount?: number;
	restartCount?: number;
	safeMode?: string;
	secureBoot?: string;
	secureBootConfigurationPolicyFingerPrint?: string;
	testSigning?: string;
	tpmVersion?: string;
	virtualSecureMode?: string;
	windowsPE?: string;
}

/*********************************************
* deviceHealthAttestationStateCollections
**********************************************/
export interface deviceHealthAttestationStateCollections {

}

/*********************************************
* complianceManagementPartnerAssignment
**********************************************/
export interface complianceManagementPartnerAssignment {
	target?: graph.deviceAndAppManagementAssignmentTarget;
}

/*********************************************
* complianceManagementPartnerAssignmentCollections
**********************************************/
export interface complianceManagementPartnerAssignmentCollections {

}

/*********************************************
* deviceEnrollmentPlatformRestriction
**********************************************/
export interface deviceEnrollmentPlatformRestriction {
	osMaximumVersion?: string;
	osMinimumVersion?: string;
	personalDeviceEnrollmentBlocked?: boolean;
	platformBlocked?: boolean;
}

/*********************************************
* deviceEnrollmentPlatformRestrictionCollections
**********************************************/
export interface deviceEnrollmentPlatformRestrictionCollections {

}

/*********************************************
* rgbColor
**********************************************/
export interface rgbColor {
	b?: any;
	g?: any;
	r?: any;
}

/*********************************************
* rgbColorCollections
**********************************************/
export interface rgbColorCollections {

}

/*********************************************
* deleteUserFromSharedAppleDeviceActionResult
**********************************************/
export interface deleteUserFromSharedAppleDeviceActionResult {
	userPrincipalName?: string;
}

/*********************************************
* deleteUserFromSharedAppleDeviceActionResultCollections
**********************************************/
export interface deleteUserFromSharedAppleDeviceActionResultCollections {

}

/*********************************************
* deviceExchangeAccessStateSummary
**********************************************/
export interface deviceExchangeAccessStateSummary {
	allowedDeviceCount?: number;
	blockedDeviceCount?: number;
	quarantinedDeviceCount?: number;
	unavailableDeviceCount?: number;
	unknownDeviceCount?: number;
}

/*********************************************
* deviceExchangeAccessStateSummaryCollections
**********************************************/
export interface deviceExchangeAccessStateSummaryCollections {

}

/*********************************************
* deviceGeoLocation
**********************************************/
export interface deviceGeoLocation {
	altitude?: number;
	heading?: number;
	horizontalAccuracy?: number;
	lastCollectedDateTime?: any;
	latitude?: number;
	longitude?: number;
	speed?: number;
	verticalAccuracy?: number;
}

/*********************************************
* deviceGeoLocationCollections
**********************************************/
export interface deviceGeoLocationCollections {

}

/*********************************************
* deviceOperatingSystemSummary
**********************************************/
export interface deviceOperatingSystemSummary {
	androidCount?: number;
	iosCount?: number;
	macOSCount?: number;
	unknownCount?: number;
	windowsCount?: number;
	windowsMobileCount?: number;
}

/*********************************************
* deviceOperatingSystemSummaryCollections
**********************************************/
export interface deviceOperatingSystemSummaryCollections {

}

/*********************************************
* locateDeviceActionResult
**********************************************/
export interface locateDeviceActionResult {
	deviceLocation?: graph.deviceGeoLocation;
}

/*********************************************
* locateDeviceActionResultCollections
**********************************************/
export interface locateDeviceActionResultCollections {

}

/*********************************************
* remoteLockActionResult
**********************************************/
export interface remoteLockActionResult {
	unlockPin?: string;
}

/*********************************************
* remoteLockActionResultCollections
**********************************************/
export interface remoteLockActionResultCollections {

}

/*********************************************
* resetPasscodeActionResult
**********************************************/
export interface resetPasscodeActionResult {
	passcode?: string;
}

/*********************************************
* resetPasscodeActionResultCollections
**********************************************/
export interface resetPasscodeActionResultCollections {

}

/*********************************************
* updateWindowsDeviceAccountActionParameter
**********************************************/
export interface updateWindowsDeviceAccountActionParameter {
	calendarSyncEnabled?: boolean;
	deviceAccount?: graph.windowsDeviceAccount;
	deviceAccountEmail?: string;
	exchangeServer?: string;
	passwordRotationEnabled?: boolean;
	sessionInitiationProtocalAddress?: string;
}

/*********************************************
* updateWindowsDeviceAccountActionParameterCollections
**********************************************/
export interface updateWindowsDeviceAccountActionParameterCollections {

}

/*********************************************
* windowsDeviceAccount
**********************************************/
export interface windowsDeviceAccount {
	password?: string;
}

/*********************************************
* windowsDeviceAccountCollections
**********************************************/
export interface windowsDeviceAccountCollections {

}

/*********************************************
* windowsDefenderScanActionResult
**********************************************/
export interface windowsDefenderScanActionResult {
	scanType?: string;
}

/*********************************************
* windowsDefenderScanActionResultCollections
**********************************************/
export interface windowsDefenderScanActionResultCollections {

}

/*********************************************
* windowsDeviceADAccount
**********************************************/
export interface windowsDeviceADAccount {
	domainName?: string;
	userName?: string;
}

/*********************************************
* windowsDeviceADAccountCollections
**********************************************/
export interface windowsDeviceADAccountCollections {

}

/*********************************************
* windowsDeviceAzureADAccount
**********************************************/
export interface windowsDeviceAzureADAccount {
	userPrincipalName?: string;
}

/*********************************************
* windowsDeviceAzureADAccountCollections
**********************************************/
export interface windowsDeviceAzureADAccountCollections {

}

/*********************************************
* importedWindowsAutopilotDeviceIdentityState
**********************************************/
export interface importedWindowsAutopilotDeviceIdentityState {
	deviceErrorCode?: number;
	deviceErrorName?: string;
	deviceImportStatus?: graph.importedWindowsAutopilotDeviceIdentityImportStatus;
	deviceRegistrationId?: string;
}

/*********************************************
* importedWindowsAutopilotDeviceIdentityStateCollections
**********************************************/
export interface importedWindowsAutopilotDeviceIdentityStateCollections {

}

/*********************************************
* mobileAppIdentifier
**********************************************/
export interface mobileAppIdentifier {

}

/*********************************************
* mobileAppIdentifierCollections
**********************************************/
export interface mobileAppIdentifierCollections {

}

/*********************************************
* androidMobileAppIdentifier
**********************************************/
export interface androidMobileAppIdentifier {
	packageId?: string;
}

/*********************************************
* androidMobileAppIdentifierCollections
**********************************************/
export interface androidMobileAppIdentifierCollections {

}

/*********************************************
* iosMobileAppIdentifier
**********************************************/
export interface iosMobileAppIdentifier {
	bundleId?: string;
}

/*********************************************
* iosMobileAppIdentifierCollections
**********************************************/
export interface iosMobileAppIdentifierCollections {

}

/*********************************************
* iPv4Range
**********************************************/
export interface iPv4Range {
	lowerAddress?: string;
	upperAddress?: string;
}

/*********************************************
* iPv4RangeCollections
**********************************************/
export interface iPv4RangeCollections {

}

/*********************************************
* iPv6Range
**********************************************/
export interface iPv6Range {
	lowerAddress?: string;
	upperAddress?: string;
}

/*********************************************
* iPv6RangeCollections
**********************************************/
export interface iPv6RangeCollections {

}

/*********************************************
* managedAppDiagnosticStatus
**********************************************/
export interface managedAppDiagnosticStatus {
	mitigationInstruction?: string;
	state?: string;
	validationName?: string;
}

/*********************************************
* managedAppDiagnosticStatusCollections
**********************************************/
export interface managedAppDiagnosticStatusCollections {

}

/*********************************************
* managedAppPolicyDeploymentSummaryPerApp
**********************************************/
export interface managedAppPolicyDeploymentSummaryPerApp {
	configurationAppliedUserCount?: number;
	mobileAppIdentifier?: graph.mobileAppIdentifier;
}

/*********************************************
* managedAppPolicyDeploymentSummaryPerAppCollections
**********************************************/
export interface managedAppPolicyDeploymentSummaryPerAppCollections {

}

/*********************************************
* proxiedDomain
**********************************************/
export interface proxiedDomain {
	ipAddressOrFQDN?: string;
	proxy?: string;
}

/*********************************************
* proxiedDomainCollections
**********************************************/
export interface proxiedDomainCollections {

}

/*********************************************
* windowsInformationProtectionApp
**********************************************/
export interface windowsInformationProtectionApp {
	denied?: boolean;
	description?: string;
	displayName?: string;
	productName?: string;
	publisherName?: string;
}

/*********************************************
* windowsInformationProtectionAppCollections
**********************************************/
export interface windowsInformationProtectionAppCollections {

}

/*********************************************
* windowsInformationProtectionDataRecoveryCertificate
**********************************************/
export interface windowsInformationProtectionDataRecoveryCertificate {
	certificate?: any;
	description?: string;
	expirationDateTime?: any;
	subjectName?: string;
}

/*********************************************
* windowsInformationProtectionDataRecoveryCertificateCollections
**********************************************/
export interface windowsInformationProtectionDataRecoveryCertificateCollections {

}

/*********************************************
* windowsInformationProtectionDesktopApp
**********************************************/
export interface windowsInformationProtectionDesktopApp {
	binaryName?: string;
	binaryVersionHigh?: string;
	binaryVersionLow?: string;
}

/*********************************************
* windowsInformationProtectionDesktopAppCollections
**********************************************/
export interface windowsInformationProtectionDesktopAppCollections {

}

/*********************************************
* windowsInformationProtectionIPRangeCollection
**********************************************/
export interface windowsInformationProtectionIPRangeCollection {
	displayName?: string;
	ranges?: Array<graph.ipRange>;
}

/*********************************************
* windowsInformationProtectionIPRangeCollectionCollections
**********************************************/
export interface windowsInformationProtectionIPRangeCollectionCollections {

}

/*********************************************
* windowsInformationProtectionProxiedDomainCollection
**********************************************/
export interface windowsInformationProtectionProxiedDomainCollection {
	displayName?: string;
	proxiedDomains?: Array<graph.proxiedDomain>;
}

/*********************************************
* windowsInformationProtectionProxiedDomainCollectionCollections
**********************************************/
export interface windowsInformationProtectionProxiedDomainCollectionCollections {

}

/*********************************************
* windowsInformationProtectionResourceCollection
**********************************************/
export interface windowsInformationProtectionResourceCollection {
	displayName?: string;
	resources?: Array<string>;
}

/*********************************************
* windowsInformationProtectionResourceCollectionCollections
**********************************************/
export interface windowsInformationProtectionResourceCollectionCollections {

}

/*********************************************
* windowsInformationProtectionStoreApp
**********************************************/
export interface windowsInformationProtectionStoreApp {

}

/*********************************************
* windowsInformationProtectionStoreAppCollections
**********************************************/
export interface windowsInformationProtectionStoreAppCollections {

}

/*********************************************
* resourceAction
**********************************************/
export interface resourceAction {
	allowedResourceActions?: Array<string>;
	notAllowedResourceActions?: Array<string>;
}

/*********************************************
* resourceActionCollections
**********************************************/
export interface resourceActionCollections {

}

/*********************************************
* rolePermission
**********************************************/
export interface rolePermission {
	resourceActions?: Array<graph.resourceAction>;
}

/*********************************************
* rolePermissionCollections
**********************************************/
export interface rolePermissionCollections {

}

/*********************************************
* serviceHealthIssuePost
**********************************************/
export interface serviceHealthIssuePost {
	createdDateTime?: any;
	description?: graph.itemBody;
	postType?: graph.postType;
}

/*********************************************
* serviceHealthIssuePostCollections
**********************************************/
export interface serviceHealthIssuePostCollections {

}

/*********************************************
* serviceUpdateMessageViewpoint
**********************************************/
export interface serviceUpdateMessageViewpoint {
	isArchived?: boolean;
	isFavorited?: boolean;
	isRead?: boolean;
}

/*********************************************
* serviceUpdateMessageViewpointCollections
**********************************************/
export interface serviceUpdateMessageViewpointCollections {

}

/*********************************************
* aggregationOption
**********************************************/
export interface aggregationOption {
	bucketDefinition?: graph.bucketAggregationDefinition;
	field?: string;
	size?: number;
}

/*********************************************
* aggregationOptionCollections
**********************************************/
export interface aggregationOptionCollections {

}

/*********************************************
* bucketAggregationDefinition
**********************************************/
export interface bucketAggregationDefinition {
	isDescending?: boolean;
	minimumCount?: number;
	prefixFilter?: string;
	ranges?: Array<graph.bucketAggregationRange>;
	sortBy?: graph.bucketAggregationSortProperty;
}

/*********************************************
* bucketAggregationDefinitionCollections
**********************************************/
export interface bucketAggregationDefinitionCollections {

}

/*********************************************
* alterationResponse
**********************************************/
export interface alterationResponse {
	originalQueryString?: string;
	queryAlteration?: graph.searchAlteration;
	queryAlterationType?: graph.searchAlterationType;
}

/*********************************************
* alterationResponseCollections
**********************************************/
export interface alterationResponseCollections {

}

/*********************************************
* searchAlteration
**********************************************/
export interface searchAlteration {
	alteredHighlightedQueryString?: string;
	alteredQueryString?: string;
	alteredQueryTokens?: Array<graph.alteredQueryToken>;
}

/*********************************************
* searchAlterationCollections
**********************************************/
export interface searchAlterationCollections {

}

/*********************************************
* alteredQueryToken
**********************************************/
export interface alteredQueryToken {
	length?: number;
	offset?: number;
	suggestion?: string;
}

/*********************************************
* alteredQueryTokenCollections
**********************************************/
export interface alteredQueryTokenCollections {

}

/*********************************************
* bucketAggregationRange
**********************************************/
export interface bucketAggregationRange {
	from?: string;
	to?: string;
}

/*********************************************
* bucketAggregationRangeCollections
**********************************************/
export interface bucketAggregationRangeCollections {

}

/*********************************************
* resultTemplate
**********************************************/
export interface resultTemplate {
	body?: graph.Json;
	displayName?: string;
}

/*********************************************
* resultTemplateCollections
**********************************************/
export interface resultTemplateCollections {

}

/*********************************************
* Dictionary
**********************************************/
export interface Dictionary {

}

/*********************************************
* DictionaryCollections
**********************************************/
export interface DictionaryCollections {

}

/*********************************************
* resultTemplateDictionary
**********************************************/
export interface resultTemplateDictionary {

}

/*********************************************
* resultTemplateDictionaryCollections
**********************************************/
export interface resultTemplateDictionaryCollections {

}

/*********************************************
* resultTemplateOption
**********************************************/
export interface resultTemplateOption {
	enableResultTemplate?: boolean;
}

/*********************************************
* resultTemplateOptionCollections
**********************************************/
export interface resultTemplateOptionCollections {

}

/*********************************************
* searchAggregation
**********************************************/
export interface searchAggregation {
	buckets?: Array<graph.searchBucket>;
	field?: string;
}

/*********************************************
* searchAggregationCollections
**********************************************/
export interface searchAggregationCollections {

}

/*********************************************
* searchBucket
**********************************************/
export interface searchBucket {
	aggregationFilterToken?: string;
	count?: number;
	key?: string;
}

/*********************************************
* searchBucketCollections
**********************************************/
export interface searchBucketCollections {

}

/*********************************************
* searchAlterationOptions
**********************************************/
export interface searchAlterationOptions {
	enableModification?: boolean;
	enableSuggestion?: boolean;
}

/*********************************************
* searchAlterationOptionsCollections
**********************************************/
export interface searchAlterationOptionsCollections {

}

/*********************************************
* searchHit
**********************************************/
export interface searchHit {
	contentSource?: string;
	hitId?: string;
	rank?: number;
	resultTemplateId?: string;
	summary?: string;
}

/*********************************************
* searchHitCollections
**********************************************/
export interface searchHitCollections {

}

/*********************************************
* searchHitsContainer
**********************************************/
export interface searchHitsContainer {
	aggregations?: Array<graph.searchAggregation>;
	hits?: Array<graph.searchHit>;
	moreResultsAvailable?: boolean;
	total?: number;
}

/*********************************************
* searchHitsContainerCollections
**********************************************/
export interface searchHitsContainerCollections {

}

/*********************************************
* searchQuery
**********************************************/
export interface searchQuery {
	queryString?: string;
}

/*********************************************
* searchQueryCollections
**********************************************/
export interface searchQueryCollections {

}

/*********************************************
* searchRequest
**********************************************/
export interface searchRequest {
	aggregationFilters?: Array<string>;
	aggregations?: Array<graph.aggregationOption>;
	contentSources?: Array<string>;
	enableTopResults?: boolean;
	entityTypes?: Array<graph.entityType>;
	fields?: Array<string>;
	from?: number;
	query?: graph.searchQuery;
	queryAlterationOptions?: graph.searchAlterationOptions;
	resultTemplateOptions?: graph.resultTemplateOption;
	size?: number;
	sortProperties?: Array<graph.sortProperty>;
}

/*********************************************
* searchRequestCollections
**********************************************/
export interface searchRequestCollections {

}

/*********************************************
* sortProperty
**********************************************/
export interface sortProperty {
	isDescending?: boolean;
	name?: string;
}

/*********************************************
* sortPropertyCollections
**********************************************/
export interface sortPropertyCollections {

}

/*********************************************
* searchResponse
**********************************************/
export interface searchResponse {
	hitsContainers?: Array<graph.searchHitsContainer>;
	queryAlterationResponse?: graph.alterationResponse;
	resultTemplates?: graph.resultTemplateDictionary;
	searchTerms?: Array<string>;
}

/*********************************************
* searchResponseCollections
**********************************************/
export interface searchResponseCollections {

}

/*********************************************
* plannerAppliedCategories
**********************************************/
export interface plannerAppliedCategories {

}

/*********************************************
* plannerAppliedCategoriesCollections
**********************************************/
export interface plannerAppliedCategoriesCollections {

}

/*********************************************
* plannerAssignment
**********************************************/
export interface plannerAssignment {
	assignedBy?: graph.identitySet;
	assignedDateTime?: any;
	orderHint?: string;
}

/*********************************************
* plannerAssignmentCollections
**********************************************/
export interface plannerAssignmentCollections {

}

/*********************************************
* plannerAssignments
**********************************************/
export interface plannerAssignments {

}

/*********************************************
* plannerAssignmentsCollections
**********************************************/
export interface plannerAssignmentsCollections {

}

/*********************************************
* plannerCategoryDescriptions
**********************************************/
export interface plannerCategoryDescriptions {
	category1?: string;
	category10?: string;
	category11?: string;
	category12?: string;
	category13?: string;
	category14?: string;
	category15?: string;
	category16?: string;
	category17?: string;
	category18?: string;
	category19?: string;
	category2?: string;
	category20?: string;
	category21?: string;
	category22?: string;
	category23?: string;
	category24?: string;
	category25?: string;
	category3?: string;
	category4?: string;
	category5?: string;
	category6?: string;
	category7?: string;
	category8?: string;
	category9?: string;
}

/*********************************************
* plannerCategoryDescriptionsCollections
**********************************************/
export interface plannerCategoryDescriptionsCollections {

}

/*********************************************
* plannerChecklistItem
**********************************************/
export interface plannerChecklistItem {
	isChecked?: boolean;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: any;
	orderHint?: string;
	title?: string;
}

/*********************************************
* plannerChecklistItemCollections
**********************************************/
export interface plannerChecklistItemCollections {

}

/*********************************************
* plannerChecklistItems
**********************************************/
export interface plannerChecklistItems {

}

/*********************************************
* plannerChecklistItemsCollections
**********************************************/
export interface plannerChecklistItemsCollections {

}

/*********************************************
* plannerExternalReference
**********************************************/
export interface plannerExternalReference {
	alias?: string;
	lastModifiedBy?: graph.identitySet;
	lastModifiedDateTime?: any;
	previewPriority?: string;
	type?: string;
}

/*********************************************
* plannerExternalReferenceCollections
**********************************************/
export interface plannerExternalReferenceCollections {

}

/*********************************************
* plannerExternalReferences
**********************************************/
export interface plannerExternalReferences {

}

/*********************************************
* plannerExternalReferencesCollections
**********************************************/
export interface plannerExternalReferencesCollections {

}

/*********************************************
* plannerOrderHintsByAssignee
**********************************************/
export interface plannerOrderHintsByAssignee {

}

/*********************************************
* plannerOrderHintsByAssigneeCollections
**********************************************/
export interface plannerOrderHintsByAssigneeCollections {

}

/*********************************************
* plannerPlanContainer
**********************************************/
export interface plannerPlanContainer {
	containerId?: string;
	type?: graph.plannerContainerType;
	url?: string;
}

/*********************************************
* plannerPlanContainerCollections
**********************************************/
export interface plannerPlanContainerCollections {

}

/*********************************************
* plannerUserIds
**********************************************/
export interface plannerUserIds {

}

/*********************************************
* plannerUserIdsCollections
**********************************************/
export interface plannerUserIdsCollections {

}

/*********************************************
* insightIdentity
**********************************************/
export interface insightIdentity {
	address?: string;
	displayName?: string;
	id?: string;
}

/*********************************************
* insightIdentityCollections
**********************************************/
export interface insightIdentityCollections {

}

/*********************************************
* resourceReference
**********************************************/
export interface resourceReference {
	id?: string;
	type?: string;
	webUrl?: string;
}

/*********************************************
* resourceReferenceCollections
**********************************************/
export interface resourceReferenceCollections {

}

/*********************************************
* resourceVisualization
**********************************************/
export interface resourceVisualization {
	containerDisplayName?: string;
	containerType?: string;
	containerWebUrl?: string;
	mediaType?: string;
	previewImageUrl?: string;
	previewText?: string;
	title?: string;
	type?: string;
}

/*********************************************
* resourceVisualizationCollections
**********************************************/
export interface resourceVisualizationCollections {

}

/*********************************************
* sharingDetail
**********************************************/
export interface sharingDetail {
	sharedBy?: graph.insightIdentity;
	sharedDateTime?: any;
	sharingReference?: graph.resourceReference;
	sharingSubject?: string;
	sharingType?: string;
}

/*********************************************
* sharingDetailCollections
**********************************************/
export interface sharingDetailCollections {

}

/*********************************************
* usageDetails
**********************************************/
export interface usageDetails {
	lastAccessedDateTime?: any;
	lastModifiedDateTime?: any;
}

/*********************************************
* usageDetailsCollections
**********************************************/
export interface usageDetailsCollections {

}

/*********************************************
* CopyNotebookModel
**********************************************/
export interface CopyNotebookModel {
	createdBy?: string;
	createdByIdentity?: graph.identitySet;
	createdTime?: any;
	id?: string;
	isDefault?: boolean;
	isShared?: boolean;
	lastModifiedBy?: string;
	lastModifiedByIdentity?: graph.identitySet;
	lastModifiedTime?: any;
	links?: graph.notebookLinks;
	name?: string;
	sectionGroupsUrl?: string;
	sectionsUrl?: string;
	self?: string;
	userRole?: graph.onenoteUserRole;
}

/*********************************************
* CopyNotebookModelCollections
**********************************************/
export interface CopyNotebookModelCollections {

}

/*********************************************
* notebookLinks
**********************************************/
export interface notebookLinks {
	oneNoteClientUrl?: graph.externalLink;
	oneNoteWebUrl?: graph.externalLink;
}

/*********************************************
* notebookLinksCollections
**********************************************/
export interface notebookLinksCollections {

}

/*********************************************
* diagnostic
**********************************************/
export interface diagnostic {
	message?: string;
	url?: string;
}

/*********************************************
* diagnosticCollections
**********************************************/
export interface diagnosticCollections {

}

/*********************************************
* externalLink
**********************************************/
export interface externalLink {
	href?: string;
}

/*********************************************
* externalLinkCollections
**********************************************/
export interface externalLinkCollections {

}

/*********************************************
* onenoteOperationError
**********************************************/
export interface onenoteOperationError {
	code?: string;
	message?: string;
}

/*********************************************
* onenoteOperationErrorCollections
**********************************************/
export interface onenoteOperationErrorCollections {

}

/*********************************************
* onenotePagePreview
**********************************************/
export interface onenotePagePreview {
	links?: graph.onenotePagePreviewLinks;
	previewText?: string;
}

/*********************************************
* onenotePagePreviewCollections
**********************************************/
export interface onenotePagePreviewCollections {

}

/*********************************************
* onenotePagePreviewLinks
**********************************************/
export interface onenotePagePreviewLinks {
	previewImageUrl?: graph.externalLink;
}

/*********************************************
* onenotePagePreviewLinksCollections
**********************************************/
export interface onenotePagePreviewLinksCollections {

}

/*********************************************
* onenotePatchContentCommand
**********************************************/
export interface onenotePatchContentCommand {
	action?: graph.onenotePatchActionType;
	content?: string;
	position?: graph.onenotePatchInsertPosition;
	target?: string;
}

/*********************************************
* onenotePatchContentCommandCollections
**********************************************/
export interface onenotePatchContentCommandCollections {

}

/*********************************************
* pageLinks
**********************************************/
export interface pageLinks {
	oneNoteClientUrl?: graph.externalLink;
	oneNoteWebUrl?: graph.externalLink;
}

/*********************************************
* pageLinksCollections
**********************************************/
export interface pageLinksCollections {

}

/*********************************************
* recentNotebook
**********************************************/
export interface recentNotebook {
	displayName?: string;
	lastAccessedTime?: any;
	links?: graph.recentNotebookLinks;
	sourceService?: graph.onenoteSourceService;
}

/*********************************************
* recentNotebookCollections
**********************************************/
export interface recentNotebookCollections {

}

/*********************************************
* recentNotebookLinks
**********************************************/
export interface recentNotebookLinks {
	oneNoteClientUrl?: graph.externalLink;
	oneNoteWebUrl?: graph.externalLink;
}

/*********************************************
* recentNotebookLinksCollections
**********************************************/
export interface recentNotebookLinksCollections {

}

/*********************************************
* sectionLinks
**********************************************/
export interface sectionLinks {
	oneNoteClientUrl?: graph.externalLink;
	oneNoteWebUrl?: graph.externalLink;
}

/*********************************************
* sectionLinksCollections
**********************************************/
export interface sectionLinksCollections {

}

/*********************************************
* approvalSettings
**********************************************/
export interface approvalSettings {
	approvalMode?: string;
	approvalStages?: Array<graph.unifiedApprovalStage>;
	isApprovalRequired?: boolean;
	isApprovalRequiredForExtension?: boolean;
	isRequestorJustificationRequired?: boolean;
}

/*********************************************
* approvalSettingsCollections
**********************************************/
export interface approvalSettingsCollections {

}

/*********************************************
* unifiedApprovalStage
**********************************************/
export interface unifiedApprovalStage {
	approvalStageTimeOutInDays?: number;
	escalationApprovers?: Array<graph.subjectSet>;
	escalationTimeInMinutes?: number;
	isApproverJustificationRequired?: boolean;
	isEscalationEnabled?: boolean;
	primaryApprovers?: Array<graph.subjectSet>;
}

/*********************************************
* unifiedApprovalStageCollections
**********************************************/
export interface unifiedApprovalStageCollections {

}

/*********************************************
* requestSchedule
**********************************************/
export interface requestSchedule {
	expiration?: graph.expirationPattern;
	recurrence?: graph.patternedRecurrence;
	startDateTime?: any;
}

/*********************************************
* requestScheduleCollections
**********************************************/
export interface requestScheduleCollections {

}

/*********************************************
* ticketInfo
**********************************************/
export interface ticketInfo {
	ticketNumber?: string;
	ticketSystem?: string;
}

/*********************************************
* ticketInfoCollections
**********************************************/
export interface ticketInfoCollections {

}

/*********************************************
* unifiedRoleManagementPolicyRuleTarget
**********************************************/
export interface unifiedRoleManagementPolicyRuleTarget {
	caller?: string;
	enforcedSettings?: Array<string>;
	inheritableSettings?: Array<string>;
	level?: string;
	operations?: Array<graph.unifiedRoleManagementPolicyRuleTargetOperations>;
}

/*********************************************
* unifiedRoleManagementPolicyRuleTargetCollections
**********************************************/
export interface unifiedRoleManagementPolicyRuleTargetCollections {

}

/*********************************************
* archivedPrintJob
**********************************************/
export interface archivedPrintJob {
	acquiredByPrinter?: boolean;
	acquiredDateTime?: any;
	completionDateTime?: any;
	copiesPrinted?: number;
	createdBy?: graph.userIdentity;
	createdDateTime?: any;
	id?: string;
	printerId?: string;
	processingState?: graph.printJobProcessingState;
}

/*********************************************
* archivedPrintJobCollections
**********************************************/
export interface archivedPrintJobCollections {

}

/*********************************************
* integerRange
**********************************************/
export interface integerRange {
	end?: number;
	start?: number;
}

/*********************************************
* integerRangeCollections
**********************************************/
export interface integerRangeCollections {

}

/*********************************************
* printCertificateSigningRequest
**********************************************/
export interface printCertificateSigningRequest {
	content?: string;
	transportKey?: string;
}

/*********************************************
* printCertificateSigningRequestCollections
**********************************************/
export interface printCertificateSigningRequestCollections {

}

/*********************************************
* printDocumentUploadProperties
**********************************************/
export interface printDocumentUploadProperties {
	contentType?: string;
	documentName?: string;
	size?: number;
}

/*********************************************
* printDocumentUploadPropertiesCollections
**********************************************/
export interface printDocumentUploadPropertiesCollections {

}

/*********************************************
* printerCapabilities
**********************************************/
export interface printerCapabilities {
	bottomMargins?: Array<number>;
	collation?: boolean;
	colorModes?: Array<graph.printColorMode>;
	contentTypes?: Array<string>;
	copiesPerJob?: graph.integerRange;
	dpis?: Array<number>;
	duplexModes?: Array<graph.printDuplexMode>;
	feedOrientations?: Array<graph.printerFeedOrientation>;
	finishings?: Array<graph.printFinishing>;
	inputBins?: Array<string>;
	isColorPrintingSupported?: boolean;
	isPageRangeSupported?: boolean;
	leftMargins?: Array<number>;
	mediaColors?: Array<string>;
	mediaSizes?: Array<string>;
	mediaTypes?: Array<string>;
	multipageLayouts?: Array<graph.printMultipageLayout>;
	orientations?: Array<graph.printOrientation>;
	outputBins?: Array<string>;
	pagesPerSheet?: Array<number>;
	qualities?: Array<graph.printQuality>;
	rightMargins?: Array<number>;
	scalings?: Array<graph.printScaling>;
	supportsFitPdfToPage?: boolean;
	topMargins?: Array<number>;
}

/*********************************************
* printerCapabilitiesCollections
**********************************************/
export interface printerCapabilitiesCollections {

}

/*********************************************
* printerDefaults
**********************************************/
export interface printerDefaults {
	colorMode?: graph.printColorMode;
	contentType?: string;
	copiesPerJob?: number;
	dpi?: number;
	duplexMode?: graph.printDuplexMode;
	finishings?: Array<graph.printFinishing>;
	fitPdfToPage?: boolean;
	inputBin?: string;
	mediaColor?: string;
	mediaSize?: string;
	mediaType?: string;
	multipageLayout?: graph.printMultipageLayout;
	orientation?: graph.printOrientation;
	outputBin?: string;
	pagesPerSheet?: number;
	quality?: graph.printQuality;
	scaling?: graph.printScaling;
}

/*********************************************
* printerDefaultsCollections
**********************************************/
export interface printerDefaultsCollections {

}

/*********************************************
* printerLocation
**********************************************/
export interface printerLocation {
	altitudeInMeters?: number;
	building?: string;
	city?: string;
	countryOrRegion?: string;
	floor?: string;
	floorDescription?: string;
	latitude?: number;
	longitude?: number;
	organization?: Array<string>;
	postalCode?: string;
	roomDescription?: string;
	roomName?: string;
	site?: string;
	stateOrProvince?: string;
	streetAddress?: string;
	subdivision?: Array<string>;
	subunit?: Array<string>;
}

/*********************************************
* printerLocationCollections
**********************************************/
export interface printerLocationCollections {

}

/*********************************************
* printerStatus
**********************************************/
export interface printerStatus {
	description?: string;
	details?: Array<graph.printerProcessingStateDetail>;
	state?: graph.printerProcessingState;
}

/*********************************************
* printerStatusCollections
**********************************************/
export interface printerStatusCollections {

}

/*********************************************
* printJobConfiguration
**********************************************/
export interface printJobConfiguration {
	collate?: boolean;
	colorMode?: graph.printColorMode;
	copies?: number;
	dpi?: number;
	duplexMode?: graph.printDuplexMode;
	feedOrientation?: graph.printerFeedOrientation;
	finishings?: Array<graph.printFinishing>;
	fitPdfToPage?: boolean;
	inputBin?: string;
	margin?: graph.printMargin;
	mediaSize?: string;
	mediaType?: string;
	multipageLayout?: graph.printMultipageLayout;
	orientation?: graph.printOrientation;
	outputBin?: string;
	pageRanges?: Array<graph.integerRange>;
	pagesPerSheet?: number;
	quality?: graph.printQuality;
	scaling?: graph.printScaling;
}

/*********************************************
* printJobConfigurationCollections
**********************************************/
export interface printJobConfigurationCollections {

}

/*********************************************
* printMargin
**********************************************/
export interface printMargin {
	bottom?: number;
	left?: number;
	right?: number;
	top?: number;
}

/*********************************************
* printMarginCollections
**********************************************/
export interface printMarginCollections {

}

/*********************************************
* printJobStatus
**********************************************/
export interface printJobStatus {
	description?: string;
	details?: Array<graph.printJobStateDetail>;
	isAcquiredByPrinter?: boolean;
	state?: graph.printJobProcessingState;
}

/*********************************************
* printJobStatusCollections
**********************************************/
export interface printJobStatusCollections {

}

/*********************************************
* printOperationStatus
**********************************************/
export interface printOperationStatus {
	description?: string;
	state?: graph.printOperationProcessingState;
}

/*********************************************
* printOperationStatusCollections
**********************************************/
export interface printOperationStatusCollections {

}

/*********************************************
* printSettings
**********************************************/
export interface printSettings {
	documentConversionEnabled?: boolean;
}

/*********************************************
* printSettingsCollections
**********************************************/
export interface printSettingsCollections {

}

/*********************************************
* printTaskStatus
**********************************************/
export interface printTaskStatus {
	description?: string;
	state?: graph.printTaskProcessingState;
}

/*********************************************
* printTaskStatusCollections
**********************************************/
export interface printTaskStatusCollections {

}

/*********************************************
* imageInfo
**********************************************/
export interface imageInfo {
	addImageQuery?: boolean;
	alternateText?: string;
	alternativeText?: string;
	iconUrl?: string;
}

/*********************************************
* imageInfoCollections
**********************************************/
export interface imageInfoCollections {

}

/*********************************************
* visualInfo
**********************************************/
export interface visualInfo {
	attribution?: graph.imageInfo;
	backgroundColor?: string;
	content?: graph.Json;
	description?: string;
	displayText?: string;
}

/*********************************************
* visualInfoCollections
**********************************************/
export interface visualInfoCollections {

}

/*********************************************
* alertDetection
**********************************************/
export interface alertDetection {
	detectionType?: string;
	method?: string;
	name?: string;
}

/*********************************************
* alertDetectionCollections
**********************************************/
export interface alertDetectionCollections {

}

/*********************************************
* alertHistoryState
**********************************************/
export interface alertHistoryState {
	appId?: string;
	assignedTo?: string;
	comments?: Array<string>;
	feedback?: graph.alertFeedback;
	status?: graph.alertStatus;
	updatedDateTime?: any;
	user?: string;
}

/*********************************************
* alertHistoryStateCollections
**********************************************/
export interface alertHistoryStateCollections {

}

/*********************************************
* alertTrigger
**********************************************/
export interface alertTrigger {
	name?: string;
	type?: string;
	value?: string;
}

/*********************************************
* alertTriggerCollections
**********************************************/
export interface alertTriggerCollections {

}

/*********************************************
* averageComparativeScore
**********************************************/
export interface averageComparativeScore {
	averageScore?: number;
	basis?: string;
}

/*********************************************
* averageComparativeScoreCollections
**********************************************/
export interface averageComparativeScoreCollections {

}

/*********************************************
* certificationControl
**********************************************/
export interface certificationControl {
	name?: string;
	url?: string;
}

/*********************************************
* certificationControlCollections
**********************************************/
export interface certificationControlCollections {

}

/*********************************************
* cloudAppSecurityState
**********************************************/
export interface cloudAppSecurityState {
	destinationServiceIp?: string;
	destinationServiceName?: string;
	riskScore?: string;
}

/*********************************************
* cloudAppSecurityStateCollections
**********************************************/
export interface cloudAppSecurityStateCollections {

}

/*********************************************
* complianceInformation
**********************************************/
export interface complianceInformation {
	certificationControls?: Array<graph.certificationControl>;
	certificationName?: string;
}

/*********************************************
* complianceInformationCollections
**********************************************/
export interface complianceInformationCollections {

}

/*********************************************
* controlScore
**********************************************/
export interface controlScore {
	controlCategory?: string;
	controlName?: string;
	description?: string;
	score?: number;
}

/*********************************************
* controlScoreCollections
**********************************************/
export interface controlScoreCollections {

}

/*********************************************
* fileHash
**********************************************/
export interface fileHash {
	hashType?: graph.fileHashType;
	hashValue?: string;
}

/*********************************************
* fileHashCollections
**********************************************/
export interface fileHashCollections {

}

/*********************************************
* fileSecurityState
**********************************************/
export interface fileSecurityState {
	fileHash?: graph.fileHash;
	name?: string;
	path?: string;
	riskScore?: string;
}

/*********************************************
* fileSecurityStateCollections
**********************************************/
export interface fileSecurityStateCollections {

}

/*********************************************
* hostSecurityState
**********************************************/
export interface hostSecurityState {
	fqdn?: string;
	isAzureAdJoined?: boolean;
	isAzureAdRegistered?: boolean;
	isHybridAzureDomainJoined?: boolean;
	netBiosName?: string;
	os?: string;
	privateIpAddress?: string;
	publicIpAddress?: string;
	riskScore?: string;
}

/*********************************************
* hostSecurityStateCollections
**********************************************/
export interface hostSecurityStateCollections {

}

/*********************************************
* investigationSecurityState
**********************************************/
export interface investigationSecurityState {
	name?: string;
	status?: string;
}

/*********************************************
* investigationSecurityStateCollections
**********************************************/
export interface investigationSecurityStateCollections {

}

/*********************************************
* malwareState
**********************************************/
export interface malwareState {
	category?: string;
	family?: string;
	name?: string;
	severity?: string;
	wasRunning?: boolean;
}

/*********************************************
* malwareStateCollections
**********************************************/
export interface malwareStateCollections {

}

/*********************************************
* messageSecurityState
**********************************************/
export interface messageSecurityState {
	connectingIP?: string;
	deliveryAction?: string;
	deliveryLocation?: string;
	directionality?: string;
	internetMessageId?: string;
	messageFingerprint?: string;
	messageReceivedDateTime?: any;
	messageSubject?: string;
	networkMessageId?: string;
}

/*********************************************
* messageSecurityStateCollections
**********************************************/
export interface messageSecurityStateCollections {

}

/*********************************************
* networkConnection
**********************************************/
export interface networkConnection {
	applicationName?: string;
	destinationAddress?: string;
	destinationDomain?: string;
	destinationLocation?: string;
	destinationPort?: string;
	destinationUrl?: string;
	direction?: graph.connectionDirection;
	domainRegisteredDateTime?: any;
	localDnsName?: string;
	natDestinationAddress?: string;
	natDestinationPort?: string;
	natSourceAddress?: string;
	natSourcePort?: string;
	protocol?: graph.securityNetworkProtocol;
	riskScore?: string;
	sourceAddress?: string;
	sourceLocation?: string;
	sourcePort?: string;
	status?: graph.connectionStatus;
	urlParameters?: string;
}

/*********************************************
* networkConnectionCollections
**********************************************/
export interface networkConnectionCollections {

}

/*********************************************
* process
**********************************************/
export interface process {
	accountName?: string;
	commandLine?: string;
	createdDateTime?: any;
	fileHash?: graph.fileHash;
	integrityLevel?: graph.processIntegrityLevel;
	isElevated?: boolean;
	name?: string;
	parentProcessCreatedDateTime?: any;
	parentProcessId?: number;
	parentProcessName?: string;
	path?: string;
	processId?: number;
}

/*********************************************
* processCollections
**********************************************/
export interface processCollections {

}

/*********************************************
* registryKeyState
**********************************************/
export interface registryKeyState {
	hive?: graph.registryHive;
	key?: string;
	oldKey?: string;
	oldValueData?: string;
	oldValueName?: string;
	operation?: graph.registryOperation;
	processId?: number;
	valueData?: string;
	valueName?: string;
	valueType?: graph.registryValueType;
}

/*********************************************
* registryKeyStateCollections
**********************************************/
export interface registryKeyStateCollections {

}

/*********************************************
* secureScoreControlStateUpdate
**********************************************/
export interface secureScoreControlStateUpdate {
	assignedTo?: string;
	comment?: string;
	state?: string;
	updatedBy?: string;
	updatedDateTime?: any;
}

/*********************************************
* secureScoreControlStateUpdateCollections
**********************************************/
export interface secureScoreControlStateUpdateCollections {

}

/*********************************************
* securityResource
**********************************************/
export interface securityResource {
	resource?: string;
	resourceType?: graph.securityResourceType;
}

/*********************************************
* securityResourceCollections
**********************************************/
export interface securityResourceCollections {

}

/*********************************************
* securityVendorInformation
**********************************************/
export interface securityVendorInformation {
	provider?: string;
	providerVersion?: string;
	subProvider?: string;
	vendor?: string;
}

/*********************************************
* securityVendorInformationCollections
**********************************************/
export interface securityVendorInformationCollections {

}

/*********************************************
* uriClickSecurityState
**********************************************/
export interface uriClickSecurityState {
	clickAction?: string;
	clickDateTime?: any;
	id?: string;
	sourceId?: string;
	uriDomain?: string;
	verdict?: string;
}

/*********************************************
* uriClickSecurityStateCollections
**********************************************/
export interface uriClickSecurityStateCollections {

}

/*********************************************
* userSecurityState
**********************************************/
export interface userSecurityState {
	aadUserId?: string;
	accountName?: string;
	domainName?: string;
	emailRole?: graph.emailRole;
	isVpn?: boolean;
	logonDateTime?: any;
	logonId?: string;
	logonIp?: string;
	logonLocation?: string;
	logonType?: graph.logonType;
	onPremisesSecurityIdentifier?: string;
	riskScore?: string;
	userAccountType?: graph.userAccountSecurityType;
	userPrincipalName?: string;
}

/*********************************************
* userSecurityStateCollections
**********************************************/
export interface userSecurityStateCollections {

}

/*********************************************
* vulnerabilityState
**********************************************/
export interface vulnerabilityState {
	cve?: string;
	severity?: string;
	wasRunning?: boolean;
}

/*********************************************
* vulnerabilityStateCollections
**********************************************/
export interface vulnerabilityStateCollections {

}

/*********************************************
* participantJoiningResponse
**********************************************/
export interface participantJoiningResponse {

}

/*********************************************
* participantJoiningResponseCollections
**********************************************/
export interface participantJoiningResponseCollections {

}

/*********************************************
* acceptJoinResponse
**********************************************/
export interface acceptJoinResponse {

}

/*********************************************
* acceptJoinResponseCollections
**********************************************/
export interface acceptJoinResponseCollections {

}

/*********************************************
* mediaConfig
**********************************************/
export interface mediaConfig {

}

/*********************************************
* mediaConfigCollections
**********************************************/
export interface mediaConfigCollections {

}

/*********************************************
* appHostedMediaConfig
**********************************************/
export interface appHostedMediaConfig {
	blob?: string;
}

/*********************************************
* appHostedMediaConfigCollections
**********************************************/
export interface appHostedMediaConfigCollections {

}

/*********************************************
* attendanceInterval
**********************************************/
export interface attendanceInterval {
	durationInSeconds?: number;
	joinDateTime?: any;
	leaveDateTime?: any;
}

/*********************************************
* attendanceIntervalCollections
**********************************************/
export interface attendanceIntervalCollections {

}

/*********************************************
* audioConferencing
**********************************************/
export interface audioConferencing {
	conferenceId?: string;
	dialinUrl?: string;
	tollFreeNumber?: string;
	tollFreeNumbers?: Array<string>;
	tollNumber?: string;
	tollNumbers?: Array<string>;
}

/*********************************************
* audioConferencingCollections
**********************************************/
export interface audioConferencingCollections {

}

/*********************************************
* broadcastMeetingSettings
**********************************************/
export interface broadcastMeetingSettings {
	allowedAudience?: graph.broadcastMeetingAudience;
	isAttendeeReportEnabled?: boolean;
	isQuestionAndAnswerEnabled?: boolean;
	isRecordingEnabled?: boolean;
	isVideoOnDemandEnabled?: boolean;
}

/*********************************************
* broadcastMeetingSettingsCollections
**********************************************/
export interface broadcastMeetingSettingsCollections {

}

/*********************************************
* callMediaState
**********************************************/
export interface callMediaState {
	audio?: graph.mediaState;
}

/*********************************************
* callMediaStateCollections
**********************************************/
export interface callMediaStateCollections {

}

/*********************************************
* callOptions
**********************************************/
export interface callOptions {
	hideBotAfterEscalation?: boolean;
}

/*********************************************
* callOptionsCollections
**********************************************/
export interface callOptionsCollections {

}

/*********************************************
* callRoute
**********************************************/
export interface callRoute {
	final?: graph.identitySet;
	original?: graph.identitySet;
	routingType?: graph.routingType;
}

/*********************************************
* callRouteCollections
**********************************************/
export interface callRouteCollections {

}

/*********************************************
* callTranscriptionInfo
**********************************************/
export interface callTranscriptionInfo {
	lastModifiedDateTime?: any;
	state?: graph.callTranscriptionState;
}

/*********************************************
* callTranscriptionInfoCollections
**********************************************/
export interface callTranscriptionInfoCollections {

}

/*********************************************
* chatInfo
**********************************************/
export interface chatInfo {
	messageId?: string;
	replyChainMessageId?: string;
	threadId?: string;
}

/*********************************************
* chatInfoCollections
**********************************************/
export interface chatInfoCollections {

}

/*********************************************
* commsNotification
**********************************************/
export interface commsNotification {
	changeType?: graph.changeType;
	resourceUrl?: string;
}

/*********************************************
* commsNotificationCollections
**********************************************/
export interface commsNotificationCollections {

}

/*********************************************
* commsNotifications
**********************************************/
export interface commsNotifications {
	value?: Array<graph.commsNotification>;
}

/*********************************************
* commsNotificationsCollections
**********************************************/
export interface commsNotificationsCollections {

}

/*********************************************
* incomingCallOptions
**********************************************/
export interface incomingCallOptions {

}

/*********************************************
* incomingCallOptionsCollections
**********************************************/
export interface incomingCallOptionsCollections {

}

/*********************************************
* incomingContext
**********************************************/
export interface incomingContext {
	observedParticipantId?: string;
	onBehalfOf?: graph.identitySet;
	sourceParticipantId?: string;
	transferor?: graph.identitySet;
}

/*********************************************
* incomingContextCollections
**********************************************/
export interface incomingContextCollections {

}

/*********************************************
* invitationParticipantInfo
**********************************************/
export interface invitationParticipantInfo {
	hidden?: boolean;
	identity?: graph.identitySet;
	participantId?: string;
	removeFromDefaultAudioRoutingGroup?: boolean;
	replacesCallId?: string;
}

/*********************************************
* invitationParticipantInfoCollections
**********************************************/
export interface invitationParticipantInfoCollections {

}

/*********************************************
* inviteNewBotResponse
**********************************************/
export interface inviteNewBotResponse {
	inviteUri?: string;
}

/*********************************************
* inviteNewBotResponseCollections
**********************************************/
export interface inviteNewBotResponseCollections {

}

/*********************************************
* lobbyBypassSettings
**********************************************/
export interface lobbyBypassSettings {
	isDialInBypassEnabled?: boolean;
	scope?: graph.lobbyBypassScope;
}

/*********************************************
* lobbyBypassSettingsCollections
**********************************************/
export interface lobbyBypassSettingsCollections {

}

/*********************************************
* mediaInfo
**********************************************/
export interface mediaInfo {
	resourceId?: string;
	uri?: string;
}

/*********************************************
* mediaInfoCollections
**********************************************/
export interface mediaInfoCollections {

}

/*********************************************
* prompt
**********************************************/
export interface prompt {

}

/*********************************************
* promptCollections
**********************************************/
export interface promptCollections {

}

/*********************************************
* mediaPrompt
**********************************************/
export interface mediaPrompt {
	mediaInfo?: graph.mediaInfo;
}

/*********************************************
* mediaPromptCollections
**********************************************/
export interface mediaPromptCollections {

}

/*********************************************
* mediaStream
**********************************************/
export interface mediaStream {
	direction?: graph.mediaDirection;
	label?: string;
	mediaType?: graph.modality;
	serverMuted?: boolean;
	sourceId?: string;
}

/*********************************************
* mediaStreamCollections
**********************************************/
export interface mediaStreamCollections {

}

/*********************************************
* meetingInfo
**********************************************/
export interface meetingInfo {

}

/*********************************************
* meetingInfoCollections
**********************************************/
export interface meetingInfoCollections {

}

/*********************************************
* meetingParticipantInfo
**********************************************/
export interface meetingParticipantInfo {
	identity?: graph.identitySet;
	role?: graph.onlineMeetingRole;
	upn?: string;
}

/*********************************************
* meetingParticipantInfoCollections
**********************************************/
export interface meetingParticipantInfoCollections {

}

/*********************************************
* meetingParticipants
**********************************************/
export interface meetingParticipants {
	attendees?: Array<graph.meetingParticipantInfo>;
	organizer?: graph.meetingParticipantInfo;
}

/*********************************************
* meetingParticipantsCollections
**********************************************/
export interface meetingParticipantsCollections {

}

/*********************************************
* organizerMeetingInfo
**********************************************/
export interface organizerMeetingInfo {
	organizer?: graph.identitySet;
}

/*********************************************
* organizerMeetingInfoCollections
**********************************************/
export interface organizerMeetingInfoCollections {

}

/*********************************************
* outgoingCallOptions
**********************************************/
export interface outgoingCallOptions {

}

/*********************************************
* outgoingCallOptionsCollections
**********************************************/
export interface outgoingCallOptionsCollections {

}

/*********************************************
* participantInfo
**********************************************/
export interface participantInfo {
	countryCode?: string;
	endpointType?: graph.endpointType;
	identity?: graph.identitySet;
	languageId?: string;
	participantId?: string;
	region?: string;
}

/*********************************************
* participantInfoCollections
**********************************************/
export interface participantInfoCollections {

}

/*********************************************
* recordingInfo
**********************************************/
export interface recordingInfo {
	initiator?: graph.identitySet;
	recordingStatus?: graph.recordingStatus;
}

/*********************************************
* recordingInfoCollections
**********************************************/
export interface recordingInfoCollections {

}

/*********************************************
* rejectJoinResponse
**********************************************/
export interface rejectJoinResponse {
	reason?: graph.rejectReason;
}

/*********************************************
* rejectJoinResponseCollections
**********************************************/
export interface rejectJoinResponseCollections {

}

/*********************************************
* serviceHostedMediaConfig
**********************************************/
export interface serviceHostedMediaConfig {
	preFetchMedia?: Array<graph.mediaInfo>;
}

/*********************************************
* serviceHostedMediaConfigCollections
**********************************************/
export interface serviceHostedMediaConfigCollections {

}

/*********************************************
* teleconferenceDeviceMediaQuality
**********************************************/
export interface teleconferenceDeviceMediaQuality {
	averageInboundJitter?: number;
	averageInboundPacketLossRateInPercentage?: number;
	averageInboundRoundTripDelay?: number;
	averageOutboundJitter?: number;
	averageOutboundPacketLossRateInPercentage?: number;
	averageOutboundRoundTripDelay?: number;
	channelIndex?: number;
	inboundPackets?: number;
	localIPAddress?: string;
	localPort?: number;
	maximumInboundJitter?: number;
	maximumInboundPacketLossRateInPercentage?: number;
	maximumInboundRoundTripDelay?: number;
	maximumOutboundJitter?: number;
	maximumOutboundPacketLossRateInPercentage?: number;
	maximumOutboundRoundTripDelay?: number;
	mediaDuration?: number;
	networkLinkSpeedInBytes?: number;
	outboundPackets?: number;
	remoteIPAddress?: string;
	remotePort?: number;
}

/*********************************************
* teleconferenceDeviceMediaQualityCollections
**********************************************/
export interface teleconferenceDeviceMediaQualityCollections {

}

/*********************************************
* teleconferenceDeviceAudioQuality
**********************************************/
export interface teleconferenceDeviceAudioQuality {

}

/*********************************************
* teleconferenceDeviceAudioQualityCollections
**********************************************/
export interface teleconferenceDeviceAudioQualityCollections {

}

/*********************************************
* teleconferenceDeviceQuality
**********************************************/
export interface teleconferenceDeviceQuality {
	callChainId?: any;
	cloudServiceDeploymentEnvironment?: string;
	cloudServiceDeploymentId?: string;
	cloudServiceInstanceName?: string;
	cloudServiceName?: string;
	deviceDescription?: string;
	deviceName?: string;
	mediaLegId?: any;
	mediaQualityList?: Array<graph.teleconferenceDeviceMediaQuality>;
	participantId?: any;
}

/*********************************************
* teleconferenceDeviceQualityCollections
**********************************************/
export interface teleconferenceDeviceQualityCollections {

}

/*********************************************
* teleconferenceDeviceVideoQuality
**********************************************/
export interface teleconferenceDeviceVideoQuality {
	averageInboundBitRate?: number;
	averageInboundFrameRate?: number;
	averageOutboundBitRate?: number;
	averageOutboundFrameRate?: number;
}

/*********************************************
* teleconferenceDeviceVideoQualityCollections
**********************************************/
export interface teleconferenceDeviceVideoQualityCollections {

}

/*********************************************
* teleconferenceDeviceScreenSharingQuality
**********************************************/
export interface teleconferenceDeviceScreenSharingQuality {

}

/*********************************************
* teleconferenceDeviceScreenSharingQualityCollections
**********************************************/
export interface teleconferenceDeviceScreenSharingQualityCollections {

}

/*********************************************
* tokenMeetingInfo
**********************************************/
export interface tokenMeetingInfo {
	token?: string;
}

/*********************************************
* tokenMeetingInfoCollections
**********************************************/
export interface tokenMeetingInfoCollections {

}

/*********************************************
* toneInfo
**********************************************/
export interface toneInfo {
	sequenceId?: number;
	tone?: graph.tone;
}

/*********************************************
* toneInfoCollections
**********************************************/
export interface toneInfoCollections {

}

/*********************************************
* passwordResetResponse
**********************************************/
export interface passwordResetResponse {
	newPassword?: string;
}

/*********************************************
* passwordResetResponseCollections
**********************************************/
export interface passwordResetResponseCollections {

}

/*********************************************
* changeNotification
**********************************************/
export interface changeNotification {
	changeType?: graph.changeType;
	clientState?: string;
	encryptedContent?: graph.changeNotificationEncryptedContent;
	id?: string;
	lifecycleEvent?: graph.lifecycleEventType;
	resource?: string;
	resourceData?: graph.resourceData;
	subscriptionExpirationDateTime?: any;
	subscriptionId?: any;
	tenantId?: any;
}

/*********************************************
* changeNotificationCollections
**********************************************/
export interface changeNotificationCollections {

}

/*********************************************
* changeNotificationEncryptedContent
**********************************************/
export interface changeNotificationEncryptedContent {
	data?: string;
	dataKey?: string;
	dataSignature?: string;
	encryptionCertificateId?: string;
	encryptionCertificateThumbprint?: string;
}

/*********************************************
* changeNotificationEncryptedContentCollections
**********************************************/
export interface changeNotificationEncryptedContentCollections {

}

/*********************************************
* resourceData
**********************************************/
export interface resourceData {

}

/*********************************************
* resourceDataCollections
**********************************************/
export interface resourceDataCollections {

}

/*********************************************
* changeNotificationCollection
**********************************************/
export interface changeNotificationCollection {
	validationTokens?: Array<string>;
	value?: Array<graph.changeNotification>;
}

/*********************************************
* changeNotificationCollectionCollections
**********************************************/
export interface changeNotificationCollectionCollections {

}

/*********************************************
* actionResultPart
**********************************************/
export interface actionResultPart {
	error?: graph.publicError;
}

/*********************************************
* actionResultPartCollections
**********************************************/
export interface actionResultPartCollections {

}

/*********************************************
* aadUserConversationMemberResult
**********************************************/
export interface aadUserConversationMemberResult {
	userId?: string;
}

/*********************************************
* aadUserConversationMemberResultCollections
**********************************************/
export interface aadUserConversationMemberResultCollections {

}

/*********************************************
* teamworkNotificationRecipient
**********************************************/
export interface teamworkNotificationRecipient {

}

/*********************************************
* teamworkNotificationRecipientCollections
**********************************************/
export interface teamworkNotificationRecipientCollections {

}

/*********************************************
* aadUserNotificationRecipient
**********************************************/
export interface aadUserNotificationRecipient {
	userId?: string;
}

/*********************************************
* aadUserNotificationRecipientCollections
**********************************************/
export interface aadUserNotificationRecipientCollections {

}

/*********************************************
* eventMessageDetail
**********************************************/
export interface eventMessageDetail {

}

/*********************************************
* eventMessageDetailCollections
**********************************************/
export interface eventMessageDetailCollections {

}

/*********************************************
* callEndedEventMessageDetail
**********************************************/
export interface callEndedEventMessageDetail {
	callDuration?: number;
	callEventType?: graph.teamworkCallEventType;
	callId?: string;
	callParticipants?: Array<graph.callParticipantInfo>;
	initiator?: graph.identitySet;
}

/*********************************************
* callEndedEventMessageDetailCollections
**********************************************/
export interface callEndedEventMessageDetailCollections {

}

/*********************************************
* callParticipantInfo
**********************************************/
export interface callParticipantInfo {
	participant?: graph.identitySet;
}

/*********************************************
* callParticipantInfoCollections
**********************************************/
export interface callParticipantInfoCollections {

}

/*********************************************
* callRecordingEventMessageDetail
**********************************************/
export interface callRecordingEventMessageDetail {
	callId?: string;
	callRecordingDisplayName?: string;
	callRecordingDuration?: number;
	callRecordingStatus?: graph.callRecordingStatus;
	callRecordingUrl?: string;
	initiator?: graph.identitySet;
	meetingOrganizer?: graph.identitySet;
}

/*********************************************
* callRecordingEventMessageDetailCollections
**********************************************/
export interface callRecordingEventMessageDetailCollections {

}

/*********************************************
* callStartedEventMessageDetail
**********************************************/
export interface callStartedEventMessageDetail {
	callEventType?: graph.teamworkCallEventType;
	callId?: string;
	initiator?: graph.identitySet;
}

/*********************************************
* callStartedEventMessageDetailCollections
**********************************************/
export interface callStartedEventMessageDetailCollections {

}

/*********************************************
* callTranscriptEventMessageDetail
**********************************************/
export interface callTranscriptEventMessageDetail {
	callId?: string;
	callTranscriptICalUid?: string;
	meetingOrganizer?: graph.identitySet;
}

/*********************************************
* callTranscriptEventMessageDetailCollections
**********************************************/
export interface callTranscriptEventMessageDetailCollections {

}

/*********************************************
* channelAddedEventMessageDetail
**********************************************/
export interface channelAddedEventMessageDetail {
	channelDisplayName?: string;
	channelId?: string;
	initiator?: graph.identitySet;
}

/*********************************************
* channelAddedEventMessageDetailCollections
**********************************************/
export interface channelAddedEventMessageDetailCollections {

}

/*********************************************
* channelDeletedEventMessageDetail
**********************************************/
export interface channelDeletedEventMessageDetail {
	channelDisplayName?: string;
	channelId?: string;
	initiator?: graph.identitySet;
}

/*********************************************
* channelDeletedEventMessageDetailCollections
**********************************************/
export interface channelDeletedEventMessageDetailCollections {

}

/*********************************************
* channelDescriptionUpdatedEventMessageDetail
**********************************************/
export interface channelDescriptionUpdatedEventMessageDetail {
	channelDescription?: string;
	channelId?: string;
	initiator?: graph.identitySet;
}

/*********************************************
* channelDescriptionUpdatedEventMessageDetailCollections
**********************************************/
export interface channelDescriptionUpdatedEventMessageDetailCollections {

}

/*********************************************
* channelIdentity
**********************************************/
export interface channelIdentity {
	channelId?: string;
	teamId?: string;
}

/*********************************************
* channelIdentityCollections
**********************************************/
export interface channelIdentityCollections {

}

/*********************************************
* channelRenamedEventMessageDetail
**********************************************/
export interface channelRenamedEventMessageDetail {
	channelDisplayName?: string;
	channelId?: string;
	initiator?: graph.identitySet;
}

/*********************************************
* channelRenamedEventMessageDetailCollections
**********************************************/
export interface channelRenamedEventMessageDetailCollections {

}

/*********************************************
* channelSetAsFavoriteByDefaultEventMessageDetail
**********************************************/
export interface channelSetAsFavoriteByDefaultEventMessageDetail {
	channelId?: string;
	initiator?: graph.identitySet;
}

/*********************************************
* channelSetAsFavoriteByDefaultEventMessageDetailCollections
**********************************************/
export interface channelSetAsFavoriteByDefaultEventMessageDetailCollections {

}

/*********************************************
* channelUnsetAsFavoriteByDefaultEventMessageDetail
**********************************************/
export interface channelUnsetAsFavoriteByDefaultEventMessageDetail {
	channelId?: string;
	initiator?: graph.identitySet;
}

/*********************************************
* channelUnsetAsFavoriteByDefaultEventMessageDetailCollections
**********************************************/
export interface channelUnsetAsFavoriteByDefaultEventMessageDetailCollections {

}

/*********************************************
* chatMessageAttachment
**********************************************/
export interface chatMessageAttachment {
	content?: string;
	contentType?: string;
	contentUrl?: string;
	id?: string;
	name?: string;
	thumbnailUrl?: string;
}

/*********************************************
* chatMessageAttachmentCollections
**********************************************/
export interface chatMessageAttachmentCollections {

}

/*********************************************
* chatMessageFromIdentitySet
**********************************************/
export interface chatMessageFromIdentitySet {

}

/*********************************************
* chatMessageFromIdentitySetCollections
**********************************************/
export interface chatMessageFromIdentitySetCollections {

}

/*********************************************
* chatMessageMention
**********************************************/
export interface chatMessageMention {
	id?: number;
	mentioned?: graph.chatMessageMentionedIdentitySet;
	mentionText?: string;
}

/*********************************************
* chatMessageMentionCollections
**********************************************/
export interface chatMessageMentionCollections {

}

/*********************************************
* chatMessageMentionedIdentitySet
**********************************************/
export interface chatMessageMentionedIdentitySet {
	conversation?: graph.teamworkConversationIdentity;
}

/*********************************************
* chatMessageMentionedIdentitySetCollections
**********************************************/
export interface chatMessageMentionedIdentitySetCollections {

}

/*********************************************
* teamworkConversationIdentity
**********************************************/
export interface teamworkConversationIdentity {
	conversationIdentityType?: graph.teamworkConversationIdentityType;
}

/*********************************************
* teamworkConversationIdentityCollections
**********************************************/
export interface teamworkConversationIdentityCollections {

}

/*********************************************
* chatMessagePolicyViolation
**********************************************/
export interface chatMessagePolicyViolation {
	dlpAction?: graph.chatMessagePolicyViolationDlpActionTypes;
	justificationText?: string;
	policyTip?: graph.chatMessagePolicyViolationPolicyTip;
	userAction?: graph.chatMessagePolicyViolationUserActionTypes;
	verdictDetails?: graph.chatMessagePolicyViolationVerdictDetailsTypes;
}

/*********************************************
* chatMessagePolicyViolationCollections
**********************************************/
export interface chatMessagePolicyViolationCollections {

}

/*********************************************
* chatMessagePolicyViolationPolicyTip
**********************************************/
export interface chatMessagePolicyViolationPolicyTip {
	complianceUrl?: string;
	generalText?: string;
	matchedConditionDescriptions?: Array<string>;
}

/*********************************************
* chatMessagePolicyViolationPolicyTipCollections
**********************************************/
export interface chatMessagePolicyViolationPolicyTipCollections {

}

/*********************************************
* chatMessageReaction
**********************************************/
export interface chatMessageReaction {
	createdDateTime?: any;
	reactionType?: string;
	user?: graph.chatMessageReactionIdentitySet;
}

/*********************************************
* chatMessageReactionCollections
**********************************************/
export interface chatMessageReactionCollections {

}

/*********************************************
* chatMessageReactionIdentitySet
**********************************************/
export interface chatMessageReactionIdentitySet {

}

/*********************************************
* chatMessageReactionIdentitySetCollections
**********************************************/
export interface chatMessageReactionIdentitySetCollections {

}

/*********************************************
* chatRenamedEventMessageDetail
**********************************************/
export interface chatRenamedEventMessageDetail {
	chatDisplayName?: string;
	chatId?: string;
	initiator?: graph.identitySet;
}

/*********************************************
* chatRenamedEventMessageDetailCollections
**********************************************/
export interface chatRenamedEventMessageDetailCollections {

}

/*********************************************
* conversationMemberRoleUpdatedEventMessageDetail
**********************************************/
export interface conversationMemberRoleUpdatedEventMessageDetail {
	conversationMemberRoles?: Array<string>;
	conversationMemberUser?: graph.teamworkUserIdentity;
	initiator?: graph.identitySet;
}

/*********************************************
* conversationMemberRoleUpdatedEventMessageDetailCollections
**********************************************/
export interface conversationMemberRoleUpdatedEventMessageDetailCollections {

}

/*********************************************
* teamworkUserIdentity
**********************************************/
export interface teamworkUserIdentity {
	userIdentityType?: graph.teamworkUserIdentityType;
}

/*********************************************
* teamworkUserIdentityCollections
**********************************************/
export interface teamworkUserIdentityCollections {

}

/*********************************************
* meetingPolicyUpdatedEventMessageDetail
**********************************************/
export interface meetingPolicyUpdatedEventMessageDetail {
	initiator?: graph.identitySet;
	meetingChatEnabled?: boolean;
	meetingChatId?: string;
}

/*********************************************
* meetingPolicyUpdatedEventMessageDetailCollections
**********************************************/
export interface meetingPolicyUpdatedEventMessageDetailCollections {

}

/*********************************************
* membersAddedEventMessageDetail
**********************************************/
export interface membersAddedEventMessageDetail {
	initiator?: graph.identitySet;
	members?: Array<graph.teamworkUserIdentity>;
	visibleHistoryStartDateTime?: any;
}

/*********************************************
* membersAddedEventMessageDetailCollections
**********************************************/
export interface membersAddedEventMessageDetailCollections {

}

/*********************************************
* membersDeletedEventMessageDetail
**********************************************/
export interface membersDeletedEventMessageDetail {
	initiator?: graph.identitySet;
	members?: Array<graph.teamworkUserIdentity>;
}

/*********************************************
* membersDeletedEventMessageDetailCollections
**********************************************/
export interface membersDeletedEventMessageDetailCollections {

}

/*********************************************
* membersJoinedEventMessageDetail
**********************************************/
export interface membersJoinedEventMessageDetail {
	initiator?: graph.identitySet;
	members?: Array<graph.teamworkUserIdentity>;
}

/*********************************************
* membersJoinedEventMessageDetailCollections
**********************************************/
export interface membersJoinedEventMessageDetailCollections {

}

/*********************************************
* membersLeftEventMessageDetail
**********************************************/
export interface membersLeftEventMessageDetail {
	initiator?: graph.identitySet;
	members?: Array<graph.teamworkUserIdentity>;
}

/*********************************************
* membersLeftEventMessageDetailCollections
**********************************************/
export interface membersLeftEventMessageDetailCollections {

}

/*********************************************
* operationError
**********************************************/
export interface operationError {
	code?: string;
	message?: string;
}

/*********************************************
* operationErrorCollections
**********************************************/
export interface operationErrorCollections {

}

/*********************************************
* provisionChannelEmailResult
**********************************************/
export interface provisionChannelEmailResult {
	email?: string;
}

/*********************************************
* provisionChannelEmailResultCollections
**********************************************/
export interface provisionChannelEmailResultCollections {

}

/*********************************************
* tabUpdatedEventMessageDetail
**********************************************/
export interface tabUpdatedEventMessageDetail {
	initiator?: graph.identitySet;
	tabId?: string;
}

/*********************************************
* tabUpdatedEventMessageDetailCollections
**********************************************/
export interface tabUpdatedEventMessageDetailCollections {

}

/*********************************************
* teamArchivedEventMessageDetail
**********************************************/
export interface teamArchivedEventMessageDetail {
	initiator?: graph.identitySet;
	teamId?: string;
}

/*********************************************
* teamArchivedEventMessageDetailCollections
**********************************************/
export interface teamArchivedEventMessageDetailCollections {

}

/*********************************************
* teamClassSettings
**********************************************/
export interface teamClassSettings {
	notifyGuardiansAboutAssignments?: boolean;
}

/*********************************************
* teamClassSettingsCollections
**********************************************/
export interface teamClassSettingsCollections {

}

/*********************************************
* teamCreatedEventMessageDetail
**********************************************/
export interface teamCreatedEventMessageDetail {
	initiator?: graph.identitySet;
	teamDescription?: string;
	teamDisplayName?: string;
	teamId?: string;
}

/*********************************************
* teamCreatedEventMessageDetailCollections
**********************************************/
export interface teamCreatedEventMessageDetailCollections {

}

/*********************************************
* teamDescriptionUpdatedEventMessageDetail
**********************************************/
export interface teamDescriptionUpdatedEventMessageDetail {
	initiator?: graph.identitySet;
	teamDescription?: string;
	teamId?: string;
}

/*********************************************
* teamDescriptionUpdatedEventMessageDetailCollections
**********************************************/
export interface teamDescriptionUpdatedEventMessageDetailCollections {

}

/*********************************************
* teamJoiningDisabledEventMessageDetail
**********************************************/
export interface teamJoiningDisabledEventMessageDetail {
	initiator?: graph.identitySet;
	teamId?: string;
}

/*********************************************
* teamJoiningDisabledEventMessageDetailCollections
**********************************************/
export interface teamJoiningDisabledEventMessageDetailCollections {

}

/*********************************************
* teamJoiningEnabledEventMessageDetail
**********************************************/
export interface teamJoiningEnabledEventMessageDetail {
	initiator?: graph.identitySet;
	teamId?: string;
}

/*********************************************
* teamJoiningEnabledEventMessageDetailCollections
**********************************************/
export interface teamJoiningEnabledEventMessageDetailCollections {

}

/*********************************************
* teamRenamedEventMessageDetail
**********************************************/
export interface teamRenamedEventMessageDetail {
	initiator?: graph.identitySet;
	teamDisplayName?: string;
	teamId?: string;
}

/*********************************************
* teamRenamedEventMessageDetailCollections
**********************************************/
export interface teamRenamedEventMessageDetailCollections {

}

/*********************************************
* teamsAppInstalledEventMessageDetail
**********************************************/
export interface teamsAppInstalledEventMessageDetail {
	initiator?: graph.identitySet;
	teamsAppDisplayName?: string;
	teamsAppId?: string;
}

/*********************************************
* teamsAppInstalledEventMessageDetailCollections
**********************************************/
export interface teamsAppInstalledEventMessageDetailCollections {

}

/*********************************************
* teamsAppRemovedEventMessageDetail
**********************************************/
export interface teamsAppRemovedEventMessageDetail {
	initiator?: graph.identitySet;
	teamsAppDisplayName?: string;
	teamsAppId?: string;
}

/*********************************************
* teamsAppRemovedEventMessageDetailCollections
**********************************************/
export interface teamsAppRemovedEventMessageDetailCollections {

}

/*********************************************
* teamsAppUpgradedEventMessageDetail
**********************************************/
export interface teamsAppUpgradedEventMessageDetail {
	initiator?: graph.identitySet;
	teamsAppDisplayName?: string;
	teamsAppId?: string;
}

/*********************************************
* teamsAppUpgradedEventMessageDetailCollections
**********************************************/
export interface teamsAppUpgradedEventMessageDetailCollections {

}

/*********************************************
* teamsTabConfiguration
**********************************************/
export interface teamsTabConfiguration {
	contentUrl?: string;
	entityId?: string;
	removeUrl?: string;
	websiteUrl?: string;
}

/*********************************************
* teamsTabConfigurationCollections
**********************************************/
export interface teamsTabConfigurationCollections {

}

/*********************************************
* teamUnarchivedEventMessageDetail
**********************************************/
export interface teamUnarchivedEventMessageDetail {
	initiator?: graph.identitySet;
	teamId?: string;
}

/*********************************************
* teamUnarchivedEventMessageDetailCollections
**********************************************/
export interface teamUnarchivedEventMessageDetailCollections {

}

/*********************************************
* teamworkActivityTopic
**********************************************/
export interface teamworkActivityTopic {
	source?: graph.teamworkActivityTopicSource;
	value?: string;
	webUrl?: string;
}

/*********************************************
* teamworkActivityTopicCollections
**********************************************/
export interface teamworkActivityTopicCollections {

}

/*********************************************
* teamworkApplicationIdentity
**********************************************/
export interface teamworkApplicationIdentity {
	applicationIdentityType?: graph.teamworkApplicationIdentityType;
}

/*********************************************
* teamworkApplicationIdentityCollections
**********************************************/
export interface teamworkApplicationIdentityCollections {

}

/*********************************************
* teamworkOnlineMeetingInfo
**********************************************/
export interface teamworkOnlineMeetingInfo {
	calendarEventId?: string;
	joinWebUrl?: string;
	organizer?: graph.teamworkUserIdentity;
}

/*********************************************
* teamworkOnlineMeetingInfoCollections
**********************************************/
export interface teamworkOnlineMeetingInfoCollections {

}

/*********************************************
* teamworkTagIdentity
**********************************************/
export interface teamworkTagIdentity {

}

/*********************************************
* teamworkTagIdentityCollections
**********************************************/
export interface teamworkTagIdentityCollections {

}

/*********************************************
* scheduleEntity
**********************************************/
export interface scheduleEntity {
	endDateTime?: any;
	startDateTime?: any;
	theme?: graph.scheduleEntityTheme;
}

/*********************************************
* scheduleEntityCollections
**********************************************/
export interface scheduleEntityCollections {

}

/*********************************************
* shiftItem
**********************************************/
export interface shiftItem {
	activities?: Array<graph.shiftActivity>;
	displayName?: string;
	notes?: string;
}

/*********************************************
* shiftItemCollections
**********************************************/
export interface shiftItemCollections {

}

/*********************************************
* openShiftItem
**********************************************/
export interface openShiftItem {
	openSlotCount?: number;
}

/*********************************************
* openShiftItemCollections
**********************************************/
export interface openShiftItemCollections {

}

/*********************************************
* shiftActivity
**********************************************/
export interface shiftActivity {
	code?: string;
	displayName?: string;
	endDateTime?: any;
	isPaid?: boolean;
	startDateTime?: any;
	theme?: graph.scheduleEntityTheme;
}

/*********************************************
* shiftActivityCollections
**********************************************/
export interface shiftActivityCollections {

}

/*********************************************
* shiftAvailability
**********************************************/
export interface shiftAvailability {
	recurrence?: graph.patternedRecurrence;
	timeSlots?: Array<graph.timeRange>;
	timeZone?: string;
}

/*********************************************
* shiftAvailabilityCollections
**********************************************/
export interface shiftAvailabilityCollections {

}

/*********************************************
* timeRange
**********************************************/
export interface timeRange {
	endTime?: anyOfDay;
	startTime?: anyOfDay;
}

/*********************************************
* timeRangeCollections
**********************************************/
export interface timeRangeCollections {

}

/*********************************************
* timeOffItem
**********************************************/
export interface timeOffItem {
	timeOffReasonId?: string;
}

/*********************************************
* timeOffItemCollections
**********************************************/
export interface timeOffItemCollections {

}

/*********************************************
* workforceIntegrationEncryption
**********************************************/
export interface workforceIntegrationEncryption {
	protocol?: graph.workforceIntegrationEncryptionProtocol;
	secret?: string;
}

/*********************************************
* workforceIntegrationEncryptionCollections
**********************************************/
export interface workforceIntegrationEncryptionCollections {

}

/*********************************************
* attachmentInfo
**********************************************/
export interface attachmentInfo {
	attachmentType?: graph.attachmentType;
	contentType?: string;
	name?: string;
	size?: number;
}

/*********************************************
* attachmentInfoCollections
**********************************************/
export interface attachmentInfoCollections {

}
