import { IMapper } from "./mapperv2.d";
export const Mapper: IMapper = {
	_case: {

	},
	aadUserConversationMember: {
		user: {
			returnType: "user"
		},
	},
	accessPackage: {
		accessPackagesIncompatibleWith: {
			returnType: "accessPackage"
		},
		assignmentPolicies: {
			returnType: "accessPackageAssignmentPolicy"
		},
		catalog: {
			returnType: "accessPackageCatalog"
		},
		incompatibleAccessPackages: {
			returnType: "accessPackage"
		},
		incompatibleGroups: {
			returnType: "group"
		},
		resourceRoleScopes: {
			returnType: "accessPackageResourceRoleScope"
		},
	},
	accessPackageAssignment: {
		accessPackage: {
			returnType: "accessPackage"
		},
		assignmentPolicy: {
			returnType: "accessPackageAssignmentPolicy"
		},
		target: {
			returnType: "accessPackageSubject"
		},
	},
	accessPackageAssignmentPolicy: {
		accessPackage: {
			returnType: "accessPackage"
		},
		catalog: {
			returnType: "accessPackageCatalog"
		},
		customExtensionStageSettings: {
			returnType: "customExtensionStageSetting"
		},
		questions: {
			returnType: "accessPackageQuestion"
		},
	},
	accessPackageAssignmentRequest: {
		accessPackage: {
			returnType: "accessPackage"
		},
		assignment: {
			returnType: "accessPackageAssignment"
		},
		requestor: {
			returnType: "accessPackageSubject"
		},
	},
	accessPackageAssignmentRequestWorkflowExtension: {

	},
	accessPackageAssignmentWorkflowExtension: {

	},
	accessPackageCatalog: {
		accessPackages: {
			returnType: "accessPackage"
		},
		customWorkflowExtensions: {
			returnType: "customCalloutExtension"
		},
		resourceRoles: {
			returnType: "accessPackageResourceRole"
		},
		resources: {
			returnType: "accessPackageResource"
		},
		resourceScopes: {
			returnType: "accessPackageResourceScope"
		},
	},
	accessPackageMultipleChoiceQuestion: {

	},
	accessPackageQuestion: {

	},
	accessPackageResource: {
		environment: {
			returnType: "accessPackageResourceEnvironment"
		},
		roles: {
			returnType: "accessPackageResourceRole"
		},
		scopes: {
			returnType: "accessPackageResourceScope"
		},
	},
	accessPackageResourceEnvironment: {
		resources: {
			returnType: "accessPackageResource"
		},
	},
	accessPackageResourceRequest: {
		catalog: {
			returnType: "accessPackageCatalog"
		},
		resource: {
			returnType: "accessPackageResource"
		},
	},
	accessPackageResourceRole: {
		resource: {
			returnType: "accessPackageResource"
		},
	},
	accessPackageResourceRoleScope: {
		role: {
			returnType: "accessPackageResourceRole"
		},
		scope: {
			returnType: "accessPackageResourceScope"
		},
	},
	accessPackageResourceScope: {
		resource: {
			returnType: "accessPackageResource"
		},
	},
	accessPackageSubject: {
		connectedOrganization: {
			returnType: "connectedOrganization"
		},
	},
	accessPackageTextInputQuestion: {

	},
	accessReviewHistoryDefinition: {
		instances: {
			returnType: "accessReviewHistoryInstance"
		},
	},
	accessReviewHistoryInstance: {

	},
	accessReviewInstance: {
		contactedReviewers: {
			returnType: "accessReviewReviewer"
		},
		decisions: {
			returnType: "accessReviewInstanceDecisionItem"
		},
		stages: {
			returnType: "accessReviewStage"
		},
	},
	accessReviewInstanceDecisionItem: {
		insights: {
			returnType: "governanceInsight"
		},
	},
	accessReviewReviewer: {

	},
	accessReviewScheduleDefinition: {
		instances: {
			returnType: "accessReviewInstance"
		},
	},
	accessReviewSet: {
		definitions: {
			returnType: "accessReviewScheduleDefinition"
		},
		historyDefinitions: {
			returnType: "accessReviewHistoryDefinition"
		},
	},
	accessReviewStage: {
		decisions: {
			returnType: "accessReviewInstanceDecisionItem"
		},
	},
	acronym: {

	},
	activityBasedTimeoutPolicy: {

	},
	activityHistoryItem: {
		activity: {
			returnType: "userActivity"
		},
	},
	addLargeGalleryViewOperation: {

	},
	admin: {
		edge: {
			returnType: "edge"
		},
		sharepoint: {
			returnType: "sharepoint"
		},
		microsoft365Apps: {
			returnType: "adminMicrosoft365Apps"
		},
		serviceAnnouncement: {
			returnType: "serviceAnnouncement"
		},
		reportSettings: {
			returnType: "adminReportSettings"
		},
		people: {
			returnType: "peopleAdminSettings"
		},
	},
	adminConsentRequestPolicy: {

	},
	adminMicrosoft365Apps: {
		installationOptions: {
			returnType: "m365AppsInstallationOptions"
		},
	},
	adminReportSettings: {

	},
	administrativeUnit: {
		members: {
			returnType: "directoryObject"
		},
		scopedRoleMembers: {
			returnType: "scopedRoleMembership"
		},
		extensions: {
			returnType: "extension"
		},
	},
	agreement: {
		acceptances: {
			returnType: "agreementAcceptance"
		},
		file: {
			returnType: "agreementFile"
		},
		files: {
			returnType: "agreementFileLocalization"
		},
	},
	agreementAcceptance: {

	},
	agreementFile: {
		localizations: {
			returnType: "agreementFileLocalization"
		},
	},
	agreementFileLocalization: {
		versions: {
			returnType: "agreementFileVersion"
		},
	},
	agreementFileProperties: {

	},
	agreementFileVersion: {

	},
	alert: {

	},
	allowedValue: {

	},
	androidCompliancePolicy: {

	},
	androidCustomConfiguration: {

	},
	androidGeneralDeviceConfiguration: {

	},
	androidLobApp: {

	},
	androidManagedAppProtection: {
		apps: {
			returnType: "managedMobileApp"
		},
		deploymentSummary: {
			returnType: "managedAppPolicyDeploymentSummary"
		},
	},
	androidManagedAppRegistration: {

	},
	androidStoreApp: {

	},
	androidWorkProfileCompliancePolicy: {

	},
	androidWorkProfileCustomConfiguration: {

	},
	androidWorkProfileGeneralDeviceConfiguration: {

	},
	anonymousGuestConversationMember: {

	},
	appCatalogs: {
		teamsApps: {
			returnType: "teamsApp"
		},
	},
	appConsentApprovalRoute: {
		appConsentRequests: {
			returnType: "appConsentRequest"
		},
	},
	appConsentRequest: {
		userConsentRequests: {
			returnType: "userConsentRequest"
		},
	},
	appLogCollectionRequest: {

	},
	appManagementPolicy: {
		appliesTo: {
			returnType: "directoryObject"
		},
	},
	appRoleAssignment: {

	},
	appScope: {

	},
	appleDeviceFeaturesConfigurationBase: {

	},
	appleManagedIdentityProvider: {

	},
	applePushNotificationCertificate: {

	},
	application: {
		appManagementPolicies: {
			returnType: "appManagementPolicy"
		},
		createdOnBehalfOf: {
			returnType: "directoryObject"
		},
		extensionProperties: {
			returnType: "extensionProperty"
		},
		federatedIdentityCredentials: {
			returnType: "federatedIdentityCredential"
		},
		homeRealmDiscoveryPolicies: {
			returnType: "homeRealmDiscoveryPolicy"
		},
		owners: {
			returnType: "directoryObject"
		},
		tokenIssuancePolicies: {
			returnType: "tokenIssuancePolicy"
		},
		tokenLifetimePolicies: {
			returnType: "tokenLifetimePolicy"
		},
		synchronization: {
			returnType: "synchronization"
		},
	},
	applicationTemplate: {

	},
	approval: {
		stages: {
			returnType: "approvalStage"
		},
	},
	approvalStage: {

	},
	article: {
		indicators: {
			returnType: "articleIndicator"
		},
	},
	articleIndicator: {

	},
	artifact: {

	},
	associatedTeamInfo: {

	},
	attachment: {

	},
	attachmentBase: {

	},
	attachmentSession: {

	},
	attackSimulationOperation: {

	},
	attackSimulationRoot: {
		endUserNotifications: {
			returnType: "endUserNotification"
		},
		landingPages: {
			returnType: "landingPage"
		},
		loginPages: {
			returnType: "loginPage"
		},
		operations: {
			returnType: "attackSimulationOperation"
		},
		payloads: {
			returnType: "payload"
		},
		simulationAutomations: {
			returnType: "simulationAutomation"
		},
		simulations: {
			returnType: "simulation"
		},
		trainings: {
			returnType: "training"
		},
	},
	attendanceRecord: {

	},
	attributeMappingFunctionSchema: {

	},
	attributeSet: {

	},
	audioRoutingGroup: {

	},
	auditEvent: {

	},
	auditLogRoot: {
		directoryAudits: {
			returnType: "directoryAudit"
		},
		provisioning: {
			returnType: "provisioningObjectSummary"
		},
		signIns: {
			returnType: "signIn"
		},
	},
	authentication: {
		emailMethods: {
			returnType: "emailAuthenticationMethod"
		},
		fido2Methods: {
			returnType: "fido2AuthenticationMethod"
		},
		methods: {
			returnType: "authenticationMethod"
		},
		microsoftAuthenticatorMethods: {
			returnType: "microsoftAuthenticatorAuthenticationMethod"
		},
		operations: {
			returnType: "longRunningOperation"
		},
		passwordMethods: {
			returnType: "passwordAuthenticationMethod"
		},
		phoneMethods: {
			returnType: "phoneAuthenticationMethod"
		},
		softwareOathMethods: {
			returnType: "softwareOathAuthenticationMethod"
		},
		temporaryAccessPassMethods: {
			returnType: "temporaryAccessPassAuthenticationMethod"
		},
		windowsHelloForBusinessMethods: {
			returnType: "windowsHelloForBusinessAuthenticationMethod"
		},
	},
	authenticationCombinationConfiguration: {

	},
	authenticationConditionApplication: {

	},
	authenticationContextClassReference: {

	},
	authenticationEventListener: {

	},
	authenticationEventsFlow: {

	},
	authenticationFlowsPolicy: {

	},
	authenticationMethod: {

	},
	authenticationMethodConfiguration: {

	},
	authenticationMethodModeDetail: {

	},
	authenticationMethodTarget: {

	},
	authenticationMethodsPolicy: {
		authenticationMethodConfigurations: {
			returnType: "authenticationMethodConfiguration"
		},
	},
	authenticationMethodsRoot: {
		userRegistrationDetails: {
			returnType: "userRegistrationDetails"
		},
	},
	authenticationStrengthPolicy: {
		combinationConfigurations: {
			returnType: "authenticationCombinationConfiguration"
		},
	},
	authenticationStrengthRoot: {
		authenticationMethodModes: {
			returnType: "authenticationMethodModeDetail"
		},
		policies: {
			returnType: "authenticationStrengthPolicy"
		},
	},
	authoredNote: {

	},
	authorityTemplate: {

	},
	authorizationPolicy: {

	},
	azureCommunicationServicesUserConversationMember: {

	},
	azureUsage: {
		billed: {
			returnType: "billedUsage"
		},
		unbilled: {
			returnType: "unbilledUsage"
		},
	},
	b2xIdentityUserFlow: {
		identityProviders: {
			returnType: "identityProvider"
		},
		languages: {
			returnType: "userFlowLanguageConfiguration"
		},
		userAttributeAssignments: {
			returnType: "identityUserFlowAttributeAssignment"
		},
		userFlowIdentityProviders: {
			returnType: "identityProviderBase"
		},
	},
	backupRestoreRoot: {
		driveInclusionRules: {
			returnType: "driveProtectionRule"
		},
		driveProtectionUnits: {
			returnType: "driveProtectionUnit"
		},
		exchangeProtectionPolicies: {
			returnType: "exchangeProtectionPolicy"
		},
		exchangeRestoreSessions: {
			returnType: "exchangeRestoreSession"
		},
		mailboxInclusionRules: {
			returnType: "mailboxProtectionRule"
		},
		mailboxProtectionUnits: {
			returnType: "mailboxProtectionUnit"
		},
		oneDriveForBusinessProtectionPolicies: {
			returnType: "oneDriveForBusinessProtectionPolicy"
		},
		oneDriveForBusinessRestoreSessions: {
			returnType: "oneDriveForBusinessRestoreSession"
		},
		protectionPolicies: {
			returnType: "protectionPolicyBase"
		},
		protectionUnits: {
			returnType: "protectionUnitBase"
		},
		restorePoints: {
			returnType: "restorePoint"
		},
		restoreSessions: {
			returnType: "restoreSessionBase"
		},
		serviceApps: {
			returnType: "serviceApp"
		},
		sharePointProtectionPolicies: {
			returnType: "sharePointProtectionPolicy"
		},
		sharePointRestoreSessions: {
			returnType: "sharePointRestoreSession"
		},
		siteInclusionRules: {
			returnType: "siteProtectionRule"
		},
		siteProtectionUnits: {
			returnType: "siteProtectionUnit"
		},
	},
	baseItem: {
		createdByUser: {
			returnType: "user"
		},
		lastModifiedByUser: {
			returnType: "user"
		},
	},
	baseItemVersion: {

	},
	baseSitePage: {

	},
	billedReconciliation: {

	},
	billedUsage: {

	},
	billing: {
		manifests: {
			returnType: "manifest"
		},
		operations: {
			returnType: "operation"
		},
		reconciliation: {
			returnType: "billingReconciliation"
		},
		usage: {
			returnType: "azureUsage"
		},
	},
	billingReconciliation: {
		billed: {
			returnType: "billedReconciliation"
		},
	},
	bitlocker: {
		recoveryKeys: {
			returnType: "bitlockerRecoveryKey"
		},
	},
	bitlockerRecoveryKey: {

	},
	bookingAppointment: {

	},
	bookingBusiness: {
		appointments: {
			returnType: "bookingAppointment"
		},
		calendarView: {
			returnType: "bookingAppointment"
		},
		customers: {
			returnType: "bookingCustomerBase"
		},
		customQuestions: {
			returnType: "bookingCustomQuestion"
		},
		services: {
			returnType: "bookingService"
		},
		staffMembers: {
			returnType: "bookingStaffMemberBase"
		},
	},
	bookingCurrency: {

	},
	bookingCustomQuestion: {

	},
	bookingCustomer: {

	},
	bookingCustomerBase: {

	},
	bookingService: {

	},
	bookingStaffMember: {

	},
	bookingStaffMemberBase: {

	},
	bookmark: {

	},
	browserSharedCookie: {

	},
	browserSite: {

	},
	browserSiteList: {
		sharedCookies: {
			returnType: "browserSharedCookie"
		},
		sites: {
			returnType: "browserSite"
		},
	},
	builtInIdentityProvider: {

	},
	bulkUpload: {

	},
	calendar: {
		calendarPermissions: {
			returnType: "calendarPermission"
		},
		calendarView: {
			returnType: "event"
		},
		events: {
			returnType: "event"
		},
		multiValueExtendedProperties: {
			returnType: "multiValueLegacyExtendedProperty"
		},
		singleValueExtendedProperties: {
			returnType: "singleValueLegacyExtendedProperty"
		},
	},
	calendarGroup: {
		calendars: {
			returnType: "calendar"
		},
	},
	calendarPermission: {

	},
	calendarSharingMessage: {

	},
	call: {
		audioRoutingGroups: {
			returnType: "audioRoutingGroup"
		},
		contentSharingSessions: {
			returnType: "contentSharingSession"
		},
		operations: {
			returnType: "commsOperation"
		},
		participants: {
			returnType: "participant"
		},
	},
	callRecord: {
		organizer_v2: {
			returnType: "organizer"
		},
		participants_v2: {
			returnType: "participant"
		},
		sessions: {
			returnType: "session"
		},
	},
	callRecording: {

	},
	callTranscript: {

	},
	cancelMediaProcessingOperation: {

	},
	canvasLayout: {
		horizontalSections: {
			returnType: "horizontalSection"
		},
		verticalSection: {
			returnType: "verticalSection"
		},
	},
	caseOperation: {

	},
	casesRoot: {
		ediscoveryCases: {
			returnType: "ediscoveryCase"
		},
	},
	categoryTemplate: {
		subcategories: {
			returnType: "subcategoryTemplate"
		},
	},
	certificateBasedAuthConfiguration: {

	},
	changeTrackedEntity: {

	},
	channel: {
		filesFolder: {
			returnType: "driveItem"
		},
		members: {
			returnType: "conversationMember"
		},
		messages: {
			returnType: "chatMessage"
		},
		sharedWithTeams: {
			returnType: "sharedWithChannelTeamInfo"
		},
		tabs: {
			returnType: "teamsTab"
		},
	},
	chat: {
		installedApps: {
			returnType: "teamsAppInstallation"
		},
		lastMessagePreview: {
			returnType: "chatMessageInfo"
		},
		members: {
			returnType: "conversationMember"
		},
		messages: {
			returnType: "chatMessage"
		},
		permissionGrants: {
			returnType: "resourceSpecificPermissionGrant"
		},
		pinnedMessages: {
			returnType: "pinnedChatMessageInfo"
		},
		tabs: {
			returnType: "teamsTab"
		},
	},
	chatMessage: {
		hostedContents: {
			returnType: "chatMessageHostedContent"
		},
		replies: {
			returnType: "chatMessage"
		},
	},
	chatMessageHostedContent: {

	},
	chatMessageInfo: {

	},
	checklistItem: {

	},
	citationTemplate: {

	},
	claimsMappingPolicy: {

	},
	cloudClipboardItem: {

	},
	cloudClipboardRoot: {
		items: {
			returnType: "cloudClipboardItem"
		},
	},
	cloudCommunications: {
		callRecords: {
			returnType: "callRecord"
		},
		calls: {
			returnType: "call"
		},
		onlineMeetings: {
			returnType: "onlineMeeting"
		},
		presences: {
			returnType: "presence"
		},
	},
	cloudPC: {

	},
	cloudPcAuditEvent: {

	},
	cloudPcDeviceImage: {

	},
	cloudPcGalleryImage: {

	},
	cloudPcOnPremisesConnection: {

	},
	cloudPcProvisioningPolicy: {
		assignments: {
			returnType: "cloudPcProvisioningPolicyAssignment"
		},
	},
	cloudPcProvisioningPolicyAssignment: {
		assignedUsers: {
			returnType: "user"
		},
	},
	cloudPcUserSetting: {
		assignments: {
			returnType: "cloudPcUserSettingAssignment"
		},
	},
	cloudPcUserSettingAssignment: {

	},
	columnDefinition: {
		sourceColumn: {
			returnType: "columnDefinition"
		},
		update: {
		argNames: ["values"],
		},
	},
	columnLink: {

	},
	commsOperation: {

	},
	community: {
		group: {
			returnType: "group"
		},
		owners: {
			returnType: "user"
		},
	},
	companySubscription: {

	},
	compliance: {

	},
	complianceManagementPartner: {

	},
	conditionalAccessPolicy: {

	},
	conditionalAccessRoot: {
		authenticationStrength: {
			returnType: "authenticationStrengthRoot"
		},
		authenticationContextClassReferences: {
			returnType: "authenticationContextClassReference"
		},
		namedLocations: {
			returnType: "namedLocation"
		},
		policies: {
			returnType: "conditionalAccessPolicy"
		},
		templates: {
			returnType: "conditionalAccessTemplate"
		},
	},
	conditionalAccessTemplate: {

	},
	connectedOrganization: {
		externalSponsors: {
			returnType: "directoryObject"
		},
		internalSponsors: {
			returnType: "directoryObject"
		},
	},
	connectionOperation: {

	},
	contact: {
		extensions: {
			returnType: "extension"
		},
		multiValueExtendedProperties: {
			returnType: "multiValueLegacyExtendedProperty"
		},
		photo: {
			returnType: "profilePhoto"
		},
		singleValueExtendedProperties: {
			returnType: "singleValueLegacyExtendedProperty"
		},
	},
	contactFolder: {
		childFolders: {
			returnType: "contactFolder"
		},
		contacts: {
			returnType: "contact"
		},
		multiValueExtendedProperties: {
			returnType: "multiValueLegacyExtendedProperty"
		},
		singleValueExtendedProperties: {
			returnType: "singleValueLegacyExtendedProperty"
		},
	},
	contentSharingSession: {

	},
	contentType: {
		base: {
			returnType: "contentType"
		},
		baseTypes: {
			returnType: "contentType"
		},
		columnLinks: {
			returnType: "columnLink"
		},
		columnPositions: {
			returnType: "columnDefinition"
		},
		columns: {
			returnType: "columnDefinition"
		},
		update: {
		argNames: ["values"],
		},
	},
	contract: {

	},
	conversation: {
		threads: {
			returnType: "conversationThread"
		},
	},
	conversationMember: {

	},
	conversationThread: {
		posts: {
			returnType: "post"
		},
	},
	countryNamedLocation: {

	},
	crossTenantAccessPolicy: {
		default: {
			returnType: "crossTenantAccessPolicyConfigurationDefault"
		},
		partners: {
			returnType: "crossTenantAccessPolicyConfigurationPartner"
		},
		templates: {
			returnType: "policyTemplate"
		},
	},
	crossTenantAccessPolicyConfigurationDefault: {

	},
	crossTenantAccessPolicyConfigurationPartner: {
		identitySynchronization: {
			returnType: "crossTenantIdentitySyncPolicyPartner"
		},
	},
	crossTenantIdentitySyncPolicyPartner: {

	},
	customAuthenticationExtension: {

	},
	customCalloutExtension: {

	},
	customExtensionStageSetting: {
		customExtension: {
			returnType: "customCalloutExtension"
		},
	},
	customSecurityAttributeDefinition: {
		allowedValues: {
			returnType: "allowedValue"
		},
	},
	customTaskExtension: {
		createdBy: {
			returnType: "user"
		},
		lastModifiedBy: {
			returnType: "user"
		},
	},
	dataPolicyOperation: {

	},
	dataSet: {

	},
	dataSource: {

	},
	dataSourceContainer: {

	},
	defaultManagedAppProtection: {
		apps: {
			returnType: "managedMobileApp"
		},
		deploymentSummary: {
			returnType: "managedAppPolicyDeploymentSummary"
		},
	},
	delegatedAdminAccessAssignment: {

	},
	delegatedAdminCustomer: {
		serviceManagementDetails: {
			returnType: "delegatedAdminServiceManagementDetail"
		},
	},
	delegatedAdminRelationship: {
		accessAssignments: {
			returnType: "delegatedAdminAccessAssignment"
		},
		operations: {
			returnType: "delegatedAdminRelationshipOperation"
		},
		requests: {
			returnType: "delegatedAdminRelationshipRequest"
		},
	},
	delegatedAdminRelationshipOperation: {

	},
	delegatedAdminRelationshipRequest: {

	},
	delegatedAdminServiceManagementDetail: {

	},
	delegatedPermissionClassification: {

	},
	deletedChat: {

	},
	deletedItemContainer: {
		workflows: {
			returnType: "workflow"
		},
	},
	deletedTeam: {
		channels: {
			returnType: "channel"
		},
	},
	deltaParticipants: {
		participants: {
			returnType: "participant"
		},
	},
	departmentTemplate: {

	},
	detectedApp: {
		managedDevices: {
			returnType: "managedDevice"
		},
	},
	device: {
		memberOf: {
			returnType: "directoryObject"
		},
		registeredOwners: {
			returnType: "directoryObject"
		},
		registeredUsers: {
			returnType: "directoryObject"
		},
		transitiveMemberOf: {
			returnType: "directoryObject"
		},
		extensions: {
			returnType: "extension"
		},
	},
	deviceAndAppManagementRoleAssignment: {

	},
	deviceAndAppManagementRoleDefinition: {

	},
	deviceAppManagement: {
		managedEBooks: {
			returnType: "managedEBook"
		},
		mobileAppCategories: {
			returnType: "mobileAppCategory"
		},
		mobileAppConfigurations: {
			returnType: "managedDeviceMobileAppConfiguration"
		},
		mobileApps: {
			returnType: "mobileApp"
		},
		vppTokens: {
			returnType: "vppToken"
		},
		androidManagedAppProtections: {
			returnType: "androidManagedAppProtection"
		},
		defaultManagedAppProtections: {
			returnType: "defaultManagedAppProtection"
		},
		iosManagedAppProtections: {
			returnType: "iosManagedAppProtection"
		},
		managedAppPolicies: {
			returnType: "managedAppPolicy"
		},
		managedAppRegistrations: {
			returnType: "managedAppRegistration"
		},
		managedAppStatuses: {
			returnType: "managedAppStatus"
		},
		mdmWindowsInformationProtectionPolicies: {
			returnType: "mdmWindowsInformationProtectionPolicy"
		},
		targetedManagedAppConfigurations: {
			returnType: "targetedManagedAppConfiguration"
		},
		windowsInformationProtectionPolicies: {
			returnType: "windowsInformationProtectionPolicy"
		},
	},
	deviceCategory: {

	},
	deviceComplianceActionItem: {

	},
	deviceComplianceDeviceOverview: {

	},
	deviceComplianceDeviceStatus: {

	},
	deviceCompliancePolicy: {
		assignments: {
			returnType: "deviceCompliancePolicyAssignment"
		},
		deviceSettingStateSummaries: {
			returnType: "settingStateDeviceSummary"
		},
		deviceStatuses: {
			returnType: "deviceComplianceDeviceStatus"
		},
		deviceStatusOverview: {
			returnType: "deviceComplianceDeviceOverview"
		},
		scheduledActionsForRule: {
			returnType: "deviceComplianceScheduledActionForRule"
		},
		userStatuses: {
			returnType: "deviceComplianceUserStatus"
		},
		userStatusOverview: {
			returnType: "deviceComplianceUserOverview"
		},
	},
	deviceCompliancePolicyAssignment: {

	},
	deviceCompliancePolicyDeviceStateSummary: {

	},
	deviceCompliancePolicySettingStateSummary: {
		deviceComplianceSettingStates: {
			returnType: "deviceComplianceSettingState"
		},
	},
	deviceCompliancePolicyState: {

	},
	deviceComplianceScheduledActionForRule: {
		scheduledActionConfigurations: {
			returnType: "deviceComplianceActionItem"
		},
	},
	deviceComplianceSettingState: {

	},
	deviceComplianceUserOverview: {

	},
	deviceComplianceUserStatus: {

	},
	deviceConfiguration: {
		assignments: {
			returnType: "deviceConfigurationAssignment"
		},
		deviceSettingStateSummaries: {
			returnType: "settingStateDeviceSummary"
		},
		deviceStatuses: {
			returnType: "deviceConfigurationDeviceStatus"
		},
		deviceStatusOverview: {
			returnType: "deviceConfigurationDeviceOverview"
		},
		userStatuses: {
			returnType: "deviceConfigurationUserStatus"
		},
		userStatusOverview: {
			returnType: "deviceConfigurationUserOverview"
		},
	},
	deviceConfigurationAssignment: {

	},
	deviceConfigurationDeviceOverview: {

	},
	deviceConfigurationDeviceStateSummary: {

	},
	deviceConfigurationDeviceStatus: {

	},
	deviceConfigurationState: {

	},
	deviceConfigurationUserOverview: {

	},
	deviceConfigurationUserStatus: {

	},
	deviceEnrollmentConfiguration: {
		assignments: {
			returnType: "enrollmentConfigurationAssignment"
		},
	},
	deviceEnrollmentLimitConfiguration: {

	},
	deviceEnrollmentPlatformRestrictionsConfiguration: {

	},
	deviceEnrollmentWindowsHelloForBusinessConfiguration: {

	},
	deviceInstallState: {

	},
	deviceLocalCredentialInfo: {

	},
	deviceLogCollectionResponse: {

	},
	deviceManagement: {
		auditEvents: {
			returnType: "auditEvent"
		},
		virtualEndpoint: {
			returnType: "virtualEndpoint"
		},
		termsAndConditions: {
			returnType: "termsAndConditions"
		},
		deviceCompliancePolicies: {
			returnType: "deviceCompliancePolicy"
		},
		deviceCompliancePolicyDeviceStateSummary: {
			returnType: "deviceCompliancePolicyDeviceStateSummary"
		},
		deviceCompliancePolicySettingStateSummaries: {
			returnType: "deviceCompliancePolicySettingStateSummary"
		},
		deviceConfigurationDeviceStateSummaries: {
			returnType: "deviceConfigurationDeviceStateSummary"
		},
		deviceConfigurations: {
			returnType: "deviceConfiguration"
		},
		iosUpdateStatuses: {
			returnType: "iosUpdateDeviceStatus"
		},
		softwareUpdateStatusSummary: {
			returnType: "softwareUpdateStatusSummary"
		},
		complianceManagementPartners: {
			returnType: "complianceManagementPartner"
		},
		conditionalAccessSettings: {
			returnType: "onPremisesConditionalAccessSettings"
		},
		deviceCategories: {
			returnType: "deviceCategory"
		},
		deviceEnrollmentConfigurations: {
			returnType: "deviceEnrollmentConfiguration"
		},
		deviceManagementPartners: {
			returnType: "deviceManagementPartner"
		},
		exchangeConnectors: {
			returnType: "deviceManagementExchangeConnector"
		},
		mobileThreatDefenseConnectors: {
			returnType: "mobileThreatDefenseConnector"
		},
		applePushNotificationCertificate: {
			returnType: "applePushNotificationCertificate"
		},
		detectedApps: {
			returnType: "detectedApp"
		},
		managedDeviceOverview: {
			returnType: "managedDeviceOverview"
		},
		managedDevices: {
			returnType: "managedDevice"
		},
		mobileAppTroubleshootingEvents: {
			returnType: "mobileAppTroubleshootingEvent"
		},
		userExperienceAnalyticsAppHealthApplicationPerformance: {
			returnType: "userExperienceAnalyticsAppHealthApplicationPerformance"
		},
		userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails: {
			returnType: "userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails"
		},
		userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId: {
			returnType: "userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId"
		},
		userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion: {
			returnType: "userExperienceAnalyticsAppHealthAppPerformanceByOSVersion"
		},
		userExperienceAnalyticsAppHealthDeviceModelPerformance: {
			returnType: "userExperienceAnalyticsAppHealthDeviceModelPerformance"
		},
		userExperienceAnalyticsAppHealthDevicePerformance: {
			returnType: "userExperienceAnalyticsAppHealthDevicePerformance"
		},
		userExperienceAnalyticsAppHealthDevicePerformanceDetails: {
			returnType: "userExperienceAnalyticsAppHealthDevicePerformanceDetails"
		},
		userExperienceAnalyticsAppHealthOSVersionPerformance: {
			returnType: "userExperienceAnalyticsAppHealthOSVersionPerformance"
		},
		userExperienceAnalyticsAppHealthOverview: {
			returnType: "userExperienceAnalyticsCategory"
		},
		userExperienceAnalyticsBaselines: {
			returnType: "userExperienceAnalyticsBaseline"
		},
		userExperienceAnalyticsCategories: {
			returnType: "userExperienceAnalyticsCategory"
		},
		userExperienceAnalyticsDevicePerformance: {
			returnType: "userExperienceAnalyticsDevicePerformance"
		},
		userExperienceAnalyticsDeviceScores: {
			returnType: "userExperienceAnalyticsDeviceScores"
		},
		userExperienceAnalyticsDeviceStartupHistory: {
			returnType: "userExperienceAnalyticsDeviceStartupHistory"
		},
		userExperienceAnalyticsDeviceStartupProcesses: {
			returnType: "userExperienceAnalyticsDeviceStartupProcess"
		},
		userExperienceAnalyticsDeviceStartupProcessPerformance: {
			returnType: "userExperienceAnalyticsDeviceStartupProcessPerformance"
		},
		userExperienceAnalyticsMetricHistory: {
			returnType: "userExperienceAnalyticsMetricHistory"
		},
		userExperienceAnalyticsModelScores: {
			returnType: "userExperienceAnalyticsModelScores"
		},
		userExperienceAnalyticsOverview: {
			returnType: "userExperienceAnalyticsOverview"
		},
		userExperienceAnalyticsScoreHistory: {
			returnType: "userExperienceAnalyticsScoreHistory"
		},
		userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: {
			returnType: "userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric"
		},
		userExperienceAnalyticsWorkFromAnywhereMetrics: {
			returnType: "userExperienceAnalyticsWorkFromAnywhereMetric"
		},
		userExperienceAnalyticsWorkFromAnywhereModelPerformance: {
			returnType: "userExperienceAnalyticsWorkFromAnywhereModelPerformance"
		},
		windowsMalwareInformation: {
			returnType: "windowsMalwareInformation"
		},
		importedWindowsAutopilotDeviceIdentities: {
			returnType: "importedWindowsAutopilotDeviceIdentity"
		},
		windowsAutopilotDeviceIdentities: {
			returnType: "windowsAutopilotDeviceIdentity"
		},
		notificationMessageTemplates: {
			returnType: "notificationMessageTemplate"
		},
		resourceOperations: {
			returnType: "resourceOperation"
		},
		roleAssignments: {
			returnType: "deviceAndAppManagementRoleAssignment"
		},
		roleDefinitions: {
			returnType: "roleDefinition"
		},
		remoteAssistancePartners: {
			returnType: "remoteAssistancePartner"
		},
		reports: {
			returnType: "deviceManagementReports"
		},
		telecomExpenseManagementPartners: {
			returnType: "telecomExpenseManagementPartner"
		},
		troubleshootingEvents: {
			returnType: "deviceManagementTroubleshootingEvent"
		},
		windowsInformationProtectionAppLearningSummaries: {
			returnType: "windowsInformationProtectionAppLearningSummary"
		},
		windowsInformationProtectionNetworkLearningSummaries: {
			returnType: "windowsInformationProtectionNetworkLearningSummary"
		},
	},
	deviceManagementCachedReportConfiguration: {

	},
	deviceManagementExchangeConnector: {

	},
	deviceManagementExportJob: {

	},
	deviceManagementPartner: {

	},
	deviceManagementReports: {
		exportJobs: {
			returnType: "deviceManagementExportJob"
		},
	},
	deviceManagementTroubleshootingEvent: {

	},
	deviceRegistrationPolicy: {

	},
	directory: {
		deviceLocalCredentials: {
			returnType: "deviceLocalCredentialInfo"
		},
		administrativeUnits: {
			returnType: "administrativeUnit"
		},
		attributeSets: {
			returnType: "attributeSet"
		},
		customSecurityAttributeDefinitions: {
			returnType: "customSecurityAttributeDefinition"
		},
		deletedItems: {
			returnType: "directoryObject"
		},
		federationConfigurations: {
			returnType: "identityProviderBase"
		},
		onPremisesSynchronization: {
			returnType: "onPremisesDirectorySynchronization"
		},
		subscriptions: {
			returnType: "companySubscription"
		},
	},
	directoryAudit: {

	},
	directoryDefinition: {

	},
	directoryObject: {

	},
	directoryObjectPartnerReference: {

	},
	directoryRole: {
		members: {
			returnType: "directoryObject"
		},
		scopedMembers: {
			returnType: "scopedRoleMembership"
		},
	},
	directoryRoleTemplate: {

	},
	dispositionReviewStage: {

	},
	documentSetVersion: {

	},
	domain: {
		domainNameReferences: {
			returnType: "directoryObject"
		},
		federationConfiguration: {
			returnType: "internalDomainFederation"
		},
		rootDomain: {
			returnType: "domain"
		},
		serviceConfigurationRecords: {
			returnType: "domainDnsRecord"
		},
		verificationDnsRecords: {
			returnType: "domainDnsRecord"
		},
	},
	domainDnsCnameRecord: {

	},
	domainDnsMxRecord: {

	},
	domainDnsRecord: {

	},
	domainDnsSrvRecord: {

	},
	domainDnsTxtRecord: {

	},
	domainDnsUnavailableRecord: {

	},
	drive: {
		bundles: {
			returnType: "driveItem"
		},
		following: {
			returnType: "driveItem"
		},
		items: {
			returnType: "driveItem"
		},
		list: {
			returnType: "list"
		},
		root: {
			returnType: "driveItem"
		},
		special: {
			returnType: "driveItem"
		},
	},
	driveItem: {
		workbook: {
			returnType: "workbook"
		},
		analytics: {
			returnType: "itemAnalytics"
		},
		children: {
			returnType: "driveItem"
		},
		listItem: {
			returnType: "listItem"
		},
		permissions: {
			returnType: "permission"
		},
		retentionLabel: {
			returnType: "itemRetentionLabel"
		},
		subscriptions: {
			returnType: "subscription"
		},
		thumbnails: {
			returnType: "thumbnailSet"
		},
		versions: {
			returnType: "driveItemVersion"
		},
	},
	driveItemVersion: {

	},
	driveProtectionRule: {

	},
	driveProtectionUnit: {

	},
	driveRestoreArtifact: {

	},
	eBookInstallSummary: {

	},
	edge: {
		internetExplorerMode: {
			returnType: "internetExplorerMode"
		},
	},
	ediscoveryAddToReviewSetOperation: {
		reviewSet: {
			returnType: "ediscoveryReviewSet"
		},
		search: {
			returnType: "ediscoverySearch"
		},
	},
	ediscoveryCase: {
		custodians: {
			returnType: "ediscoveryCustodian"
		},
		noncustodialDataSources: {
			returnType: "ediscoveryNoncustodialDataSource"
		},
		operations: {
			returnType: "caseOperation"
		},
		reviewSets: {
			returnType: "ediscoveryReviewSet"
		},
		searches: {
			returnType: "ediscoverySearch"
		},
		settings: {
			returnType: "ediscoveryCaseSettings"
		},
		tags: {
			returnType: "ediscoveryReviewTag"
		},
	},
	ediscoveryCaseSettings: {

	},
	ediscoveryCustodian: {
		lastIndexOperation: {
			returnType: "ediscoveryIndexOperation"
		},
		siteSources: {
			returnType: "siteSource"
		},
		unifiedGroupSources: {
			returnType: "unifiedGroupSource"
		},
		userSources: {
			returnType: "userSource"
		},
	},
	ediscoveryEstimateOperation: {
		search: {
			returnType: "ediscoverySearch"
		},
	},
	ediscoveryExportOperation: {
		reviewSet: {
			returnType: "ediscoveryReviewSet"
		},
		reviewSetQuery: {
			returnType: "ediscoveryReviewSetQuery"
		},
	},
	ediscoveryHoldOperation: {

	},
	ediscoveryIndexOperation: {

	},
	ediscoveryNoncustodialDataSource: {
		dataSource: {
			returnType: "dataSource"
		},
		lastIndexOperation: {
			returnType: "ediscoveryIndexOperation"
		},
	},
	ediscoveryPurgeDataOperation: {

	},
	ediscoveryReviewSet: {
		queries: {
			returnType: "ediscoveryReviewSetQuery"
		},
	},
	ediscoveryReviewSetQuery: {

	},
	ediscoveryReviewTag: {
		childTags: {
			returnType: "ediscoveryReviewTag"
		},
		parent: {
			returnType: "ediscoveryReviewTag"
		},
	},
	ediscoverySearch: {
		additionalSources: {
			returnType: "dataSource"
		},
		addToReviewSetOperation: {
			returnType: "ediscoveryAddToReviewSetOperation"
		},
		custodianSources: {
			returnType: "dataSource"
		},
		lastEstimateStatisticsOperation: {
			returnType: "ediscoveryEstimateOperation"
		},
		noncustodialSources: {
			returnType: "ediscoveryNoncustodialDataSource"
		},
	},
	ediscoverySearchExportOperation: {
		search: {
			returnType: "ediscoverySearch"
		},
	},
	ediscoveryTagOperation: {

	},
	editionUpgradeConfiguration: {

	},
	educationAssignment: {
		categories: {
			returnType: "educationCategory"
		},
		gradingCategory: {
			returnType: "educationGradingCategory"
		},
		resources: {
			returnType: "educationAssignmentResource"
		},
		rubric: {
			returnType: "educationRubric"
		},
		submissions: {
			returnType: "educationSubmission"
		},
	},
	educationAssignmentDefaults: {

	},
	educationAssignmentResource: {

	},
	educationAssignmentSettings: {
		gradingCategories: {
			returnType: "educationGradingCategory"
		},
	},
	educationCategory: {

	},
	educationClass: {
		assignmentCategories: {
			returnType: "educationCategory"
		},
		assignmentDefaults: {
			returnType: "educationAssignmentDefaults"
		},
		assignments: {
			returnType: "educationAssignment"
		},
		assignmentSettings: {
			returnType: "educationAssignmentSettings"
		},
		modules: {
			returnType: "educationModule"
		},
		group: {
			returnType: "group"
		},
		members: {
			returnType: "educationUser"
		},
		schools: {
			returnType: "educationSchool"
		},
		teachers: {
			returnType: "educationUser"
		},
	},
	educationFeedbackOutcome: {

	},
	educationFeedbackResourceOutcome: {

	},
	educationGradingCategory: {

	},
	educationModule: {
		resources: {
			returnType: "educationModuleResource"
		},
	},
	educationModuleResource: {

	},
	educationOrganization: {

	},
	educationOutcome: {

	},
	educationPointsOutcome: {

	},
	educationRoot: {
		classes: {
			returnType: "educationClass"
		},
		me: {
			returnType: "educationUser"
		},
		schools: {
			returnType: "educationSchool"
		},
		users: {
			returnType: "educationUser"
		},
	},
	educationRubric: {

	},
	educationRubricOutcome: {

	},
	educationSchool: {
		administrativeUnit: {
			returnType: "administrativeUnit"
		},
		classes: {
			returnType: "educationClass"
		},
		users: {
			returnType: "educationUser"
		},
	},
	educationSubmission: {
		outcomes: {
			returnType: "educationOutcome"
		},
		resources: {
			returnType: "educationSubmissionResource"
		},
		submittedResources: {
			returnType: "educationSubmissionResource"
		},
	},
	educationSubmissionResource: {

	},
	educationUser: {
		assignments: {
			returnType: "educationAssignment"
		},
		rubrics: {
			returnType: "educationRubric"
		},
		classes: {
			returnType: "educationClass"
		},
		schools: {
			returnType: "educationSchool"
		},
		taughtClasses: {
			returnType: "educationClass"
		},
		user: {
			returnType: "user"
		},
	},
	emailAuthenticationMethod: {

	},
	emailAuthenticationMethodConfiguration: {
		includeTargets: {
			returnType: "authenticationMethodTarget"
		},
	},
	emailFileAssessmentRequest: {

	},
	employeeExperience: {
		communities: {
			returnType: "community"
		},
		engagementAsyncOperations: {
			returnType: "engagementAsyncOperation"
		},
		learningCourseActivities: {
			returnType: "learningCourseActivity"
		},
		learningProviders: {
			returnType: "learningProvider"
		},
	},
	employeeExperienceUser: {
		learningCourseActivities: {
			returnType: "learningCourseActivity"
		},
	},
	endUserNotification: {
		details: {
			returnType: "endUserNotificationDetail"
		},
	},
	endUserNotificationDetail: {

	},
	endpoint: {

	},
	engagementAsyncOperation: {

	},
	enrollmentConfigurationAssignment: {

	},
	enrollmentTroubleshootingEvent: {

	},
	enterpriseCodeSigningCertificate: {

	},
	entitlementManagement: {
		accessPackageAssignmentApprovals: {
			returnType: "approval"
		},
		accessPackages: {
			returnType: "accessPackage"
		},
		assignmentPolicies: {
			returnType: "accessPackageAssignmentPolicy"
		},
		assignmentRequests: {
			returnType: "accessPackageAssignmentRequest"
		},
		assignments: {
			returnType: "accessPackageAssignment"
		},
		catalogs: {
			returnType: "accessPackageCatalog"
		},
		connectedOrganizations: {
			returnType: "connectedOrganization"
		},
		resourceEnvironments: {
			returnType: "accessPackageResourceEnvironment"
		},
		resourceRequests: {
			returnType: "accessPackageResourceRequest"
		},
		resourceRoleScopes: {
			returnType: "accessPackageResourceRoleScope"
		},
		resources: {
			returnType: "accessPackageResource"
		},
		settings: {
			returnType: "entitlementManagementSettings"
		},
	},
	entitlementManagementSettings: {

	},
	entity: {

	},
	event: {
		attachments: {
			returnType: "attachment"
		},
		calendar: {
			returnType: "calendar"
		},
		extensions: {
			returnType: "extension"
		},
		instances: {
			returnType: "event"
		},
		multiValueExtendedProperties: {
			returnType: "multiValueLegacyExtendedProperty"
		},
		singleValueExtendedProperties: {
			returnType: "singleValueLegacyExtendedProperty"
		},
	},
	eventMessage: {
		event: {
			returnType: "event"
		},
	},
	eventMessageRequest: {

	},
	eventMessageResponse: {

	},
	exchangeProtectionPolicy: {
		mailboxInclusionRules: {
			returnType: "mailboxProtectionRule"
		},
		mailboxProtectionUnits: {
			returnType: "mailboxProtectionUnit"
		},
	},
	exchangeRestoreSession: {
		granularMailboxRestoreArtifacts: {
			returnType: "granularMailboxRestoreArtifact"
		},
		mailboxRestoreArtifacts: {
			returnType: "mailboxRestoreArtifact"
		},
	},
	exportSuccessOperation: {
		resourceLocation: {
			returnType: "manifest"
		},
	},
	extension: {

	},
	extensionProperty: {

	},
	external: {
		connections: {
			returnType: "externalConnection"
		},
	},
	externalActivity: {
		performedBy: {
			returnType: "identity"
		},
	},
	externalActivityResult: {

	},
	externalConnection: {
		groups: {
			returnType: "externalGroup"
		},
		items: {
			returnType: "externalItem"
		},
		operations: {
			returnType: "connectionOperation"
		},
		schema: {
			returnType: "schema"
		},
	},
	externalDomainName: {

	},
	externalGroup: {
		members: {
			returnType: "identity"
		},
	},
	externalItem: {
		activities: {
			returnType: "externalActivity"
		},
	},
	externalUsersSelfServiceSignUpEventsFlow: {

	},
	failedOperation: {

	},
	featureRolloutPolicy: {
		appliesTo: {
			returnType: "directoryObject"
		},
	},
	federatedIdentityCredential: {

	},
	fido2AuthenticationMethod: {

	},
	fido2AuthenticationMethodConfiguration: {
		includeTargets: {
			returnType: "authenticationMethodTarget"
		},
	},
	fido2CombinationConfiguration: {

	},
	fieldValueSet: {

	},
	fileAssessmentRequest: {

	},
	fileAttachment: {

	},
	filePlanDescriptor: {
		authorityTemplate: {
			returnType: "authorityTemplate"
		},
		categoryTemplate: {
			returnType: "categoryTemplate"
		},
		citationTemplate: {
			returnType: "citationTemplate"
		},
		departmentTemplate: {
			returnType: "departmentTemplate"
		},
		filePlanReferenceTemplate: {
			returnType: "filePlanReferenceTemplate"
		},
	},
	filePlanDescriptorTemplate: {

	},
	filePlanReferenceTemplate: {

	},
	fileStorage: {
		containers: {
			returnType: "fileStorageContainer"
		},
	},
	fileStorageContainer: {
		drive: {
			returnType: "drive"
		},
		permissions: {
			returnType: "permission"
		},
	},
	filterOperatorSchema: {

	},
	governanceInsight: {

	},
	granularMailboxRestoreArtifact: {

	},
	group: {
		sets: {
			returnType: "set"
		},
	},
	groupLifecyclePolicy: {

	},
	groupSetting: {

	},
	groupSettingTemplate: {

	},
	healthIssue: {

	},
	homeRealmDiscoveryPolicy: {

	},
	horizontalSection: {
		columns: {
			returnType: "horizontalSectionColumn"
		},
	},
	horizontalSectionColumn: {
		webparts: {
			returnType: "webPart"
		},
	},
	host: {
		childHostPairs: {
			returnType: "hostPair"
		},
		components: {
			returnType: "hostComponent"
		},
		cookies: {
			returnType: "hostCookie"
		},
		hostPairs: {
			returnType: "hostPair"
		},
		parentHostPairs: {
			returnType: "hostPair"
		},
		passiveDns: {
			returnType: "passiveDnsRecord"
		},
		passiveDnsReverse: {
			returnType: "passiveDnsRecord"
		},
		ports: {
			returnType: "hostPort"
		},
		reputation: {
			returnType: "hostReputation"
		},
		sslCertificates: {
			returnType: "hostSslCertificate"
		},
		subdomains: {
			returnType: "subdomain"
		},
		trackers: {
			returnType: "hostTracker"
		},
		whois: {
			returnType: "whoisRecord"
		},
	},
	hostComponent: {
		host: {
			returnType: "host"
		},
	},
	hostCookie: {
		host: {
			returnType: "host"
		},
	},
	hostPair: {
		childHost: {
			returnType: "host"
		},
		parentHost: {
			returnType: "host"
		},
	},
	hostPort: {
		host: {
			returnType: "host"
		},
		mostRecentSslCertificate: {
			returnType: "sslCertificate"
		},
	},
	hostReputation: {

	},
	hostSslCertificate: {
		host: {
			returnType: "host"
		},
		sslCertificate: {
			returnType: "sslCertificate"
		},
	},
	hostTracker: {
		host: {
			returnType: "host"
		},
	},
	hostname: {

	},
	identity: {

	},
	identityApiConnector: {

	},
	identityBuiltInUserFlowAttribute: {

	},
	identityContainer: {
		healthIssues: {
			returnType: "healthIssue"
		},
		sensors: {
			returnType: "sensor"
		},
	},
	identityCustomUserFlowAttribute: {

	},
	identityGovernance: {
		lifecycleWorkflows: {
			returnType: "lifecycleWorkflowsContainer"
		},
		accessReviews: {
			returnType: "accessReviewSet"
		},
		appConsent: {
			returnType: "appConsentApprovalRoute"
		},
		termsOfUse: {
			returnType: "termsOfUseContainer"
		},
		entitlementManagement: {
			returnType: "entitlementManagement"
		},
		privilegedAccess: {
			returnType: "privilegedAccessRoot"
		},
	},
	identityProtectionRoot: {
		riskDetections: {
			returnType: "riskDetection"
		},
		riskyServicePrincipals: {
			returnType: "riskyServicePrincipal"
		},
		riskyUsers: {
			returnType: "riskyUser"
		},
		servicePrincipalRiskDetections: {
			returnType: "servicePrincipalRiskDetection"
		},
	},
	identityProvider: {

	},
	identityProviderBase: {

	},
	identitySecurityDefaultsEnforcementPolicy: {

	},
	identityUserFlow: {

	},
	identityUserFlowAttribute: {

	},
	identityUserFlowAttributeAssignment: {
		userAttribute: {
			returnType: "identityUserFlowAttribute"
		},
	},
	importedWindowsAutopilotDeviceIdentity: {

	},
	importedWindowsAutopilotDeviceIdentityUpload: {
		deviceIdentities: {
			returnType: "importedWindowsAutopilotDeviceIdentity"
		},
	},
	incident: {
		alerts: {
			returnType: "alert"
		},
	},
	indicator: {
		artifact: {
			returnType: "artifact"
		},
	},
	inferenceClassification: {
		overrides: {
			returnType: "inferenceClassificationOverride"
		},
	},
	inferenceClassificationOverride: {

	},
	informationProtection: {
		bitlocker: {
			returnType: "bitlocker"
		},
		threatAssessmentRequests: {
			returnType: "threatAssessmentRequest"
		},
	},
	insights: {

	},
	insightsSettings: {

	},
	intelligenceProfile: {
		indicators: {
			returnType: "intelligenceProfileIndicator"
		},
	},
	intelligenceProfileIndicator: {

	},
	internalDomainFederation: {

	},
	internetExplorerMode: {
		siteLists: {
			returnType: "browserSiteList"
		},
	},
	invitation: {
		invitedUser: {
			returnType: "user"
		},
		invitedUserSponsors: {
			returnType: "directoryObject"
		},
	},
	inviteParticipantsOperation: {

	},
	iosCertificateProfile: {

	},
	iosCompliancePolicy: {

	},
	iosCustomConfiguration: {

	},
	iosDeviceFeaturesConfiguration: {

	},
	iosGeneralDeviceConfiguration: {

	},
	iosLobApp: {

	},
	iosLobAppProvisioningConfigurationAssignment: {

	},
	iosManagedAppProtection: {
		apps: {
			returnType: "managedMobileApp"
		},
		deploymentSummary: {
			returnType: "managedAppPolicyDeploymentSummary"
		},
	},
	iosManagedAppRegistration: {

	},
	iosMobileAppConfiguration: {

	},
	iosStoreApp: {

	},
	iosUpdateConfiguration: {

	},
	iosUpdateDeviceStatus: {

	},
	iosVppApp: {

	},
	iosVppEBook: {

	},
	iosVppEBookAssignment: {

	},
	iosiPadOSWebClip: {

	},
	ipAddress: {

	},
	ipNamedLocation: {

	},
	itemActivity: {
		driveItem: {
			returnType: "driveItem"
		},
	},
	itemActivityStat: {
		activities: {
			returnType: "itemActivity"
		},
	},
	itemAnalytics: {
		allTime: {
			returnType: "itemActivityStat"
		},
		itemActivityStats: {
			returnType: "itemActivityStat"
		},
		lastSevenDays: {
			returnType: "itemActivityStat"
		},
	},
	itemAttachment: {
		item: {
			returnType: "outlookItem"
		},
	},
	itemInsights: {

	},
	itemRetentionLabel: {

	},
	labelsRoot: {
		authorities: {
			returnType: "authorityTemplate"
		},
		categories: {
			returnType: "categoryTemplate"
		},
		citations: {
			returnType: "citationTemplate"
		},
		departments: {
			returnType: "departmentTemplate"
		},
		filePlanReferences: {
			returnType: "filePlanReferenceTemplate"
		},
		retentionLabels: {
			returnType: "retentionLabel"
		},
	},
	landingPage: {
		details: {
			returnType: "landingPageDetail"
		},
	},
	landingPageDetail: {

	},
	learningAssignment: {

	},
	learningContent: {

	},
	learningCourseActivity: {

	},
	learningProvider: {
		learningContents: {
			returnType: "learningContent"
		},
		learningCourseActivities: {
			returnType: "learningCourseActivity"
		},
	},
	learningSelfInitiatedCourse: {

	},
	licenseDetails: {

	},
	lifecycleManagementSettings: {

	},
	lifecycleWorkflowsContainer: {
		customTaskExtensions: {
			returnType: "customTaskExtension"
		},
		deletedItems: {
			returnType: "deletedItemContainer"
		},
		insights: {
			returnType: "insights"
		},
		settings: {
			returnType: "lifecycleManagementSettings"
		},
		taskDefinitions: {
			returnType: "taskDefinition"
		},
		workflows: {
			returnType: "workflow"
		},
		workflowTemplates: {
			returnType: "workflowTemplate"
		},
	},
	linkedResource: {

	},
	list: {
		columns: {
			returnType: "columnDefinition"
		},
		contentTypes: {
			returnType: "contentType"
		},
		drive: {
			returnType: "drive"
		},
		items: {
			returnType: "listItem"
		},
		operations: {
			returnType: "richLongRunningOperation"
		},
		subscriptions: {
			returnType: "subscription"
		},
		update: {
		argNames: ["values"],
		},
	},
	listItem: {
		analytics: {
			returnType: "itemAnalytics"
		},
		documentSetVersions: {
			returnType: "documentSetVersion"
		},
		driveItem: {
			returnType: "driveItem"
		},
		fields: {
			returnType: "fieldValueSet"
		},
		versions: {
			returnType: "listItemVersion"
		},
		extractSensitivityLabel: {
		argNames: ["values"],
		},
		setSensitivityLabel: {
		argNames: ["values"],
		},
		update: {
		argNames: ["values"],
		},
	},
	listItemVersion: {
		fields: {
			returnType: "fieldValueSet"
		},
	},
	localizedNotificationMessage: {

	},
	loginPage: {

	},
	longRunningOperation: {

	},
	m365AppsInstallationOptions: {

	},
	macOSCompliancePolicy: {

	},
	macOSCustomConfiguration: {

	},
	macOSDeviceFeaturesConfiguration: {

	},
	macOSDmgApp: {

	},
	macOSGeneralDeviceConfiguration: {

	},
	macOSLobApp: {

	},
	macOSMicrosoftDefenderApp: {

	},
	macOSMicrosoftEdgeApp: {

	},
	macOSOfficeSuiteApp: {

	},
	mailAssessmentRequest: {

	},
	mailFolder: {
		childFolders: {
			returnType: "mailFolder"
		},
		messageRules: {
			returnType: "messageRule"
		},
		messages: {
			returnType: "message"
		},
		multiValueExtendedProperties: {
			returnType: "multiValueLegacyExtendedProperty"
		},
		singleValueExtendedProperties: {
			returnType: "singleValueLegacyExtendedProperty"
		},
	},
	mailSearchFolder: {

	},
	mailboxProtectionRule: {

	},
	mailboxProtectionUnit: {

	},
	mailboxRestoreArtifact: {

	},
	malwareStateForWindowsDevice: {

	},
	managedAndroidLobApp: {

	},
	managedAndroidStoreApp: {

	},
	managedApp: {

	},
	managedAppConfiguration: {

	},
	managedAppOperation: {

	},
	managedAppPolicy: {

	},
	managedAppPolicyDeploymentSummary: {

	},
	managedAppProtection: {

	},
	managedAppRegistration: {
		appliedPolicies: {
			returnType: "managedAppPolicy"
		},
		intendedPolicies: {
			returnType: "managedAppPolicy"
		},
		operations: {
			returnType: "managedAppOperation"
		},
	},
	managedAppStatus: {

	},
	managedAppStatusRaw: {

	},
	managedDevice: {
		deviceCompliancePolicyStates: {
			returnType: "deviceCompliancePolicyState"
		},
		deviceConfigurationStates: {
			returnType: "deviceConfigurationState"
		},
		deviceCategory: {
			returnType: "deviceCategory"
		},
		logCollectionRequests: {
			returnType: "deviceLogCollectionResponse"
		},
		users: {
			returnType: "user"
		},
		windowsProtectionState: {
			returnType: "windowsProtectionState"
		},
	},
	managedDeviceMobileAppConfiguration: {
		assignments: {
			returnType: "managedDeviceMobileAppConfigurationAssignment"
		},
		deviceStatuses: {
			returnType: "managedDeviceMobileAppConfigurationDeviceStatus"
		},
		deviceStatusSummary: {
			returnType: "managedDeviceMobileAppConfigurationDeviceSummary"
		},
		userStatuses: {
			returnType: "managedDeviceMobileAppConfigurationUserStatus"
		},
		userStatusSummary: {
			returnType: "managedDeviceMobileAppConfigurationUserSummary"
		},
	},
	managedDeviceMobileAppConfigurationAssignment: {

	},
	managedDeviceMobileAppConfigurationDeviceStatus: {

	},
	managedDeviceMobileAppConfigurationDeviceSummary: {

	},
	managedDeviceMobileAppConfigurationUserStatus: {

	},
	managedDeviceMobileAppConfigurationUserSummary: {

	},
	managedDeviceOverview: {

	},
	managedEBook: {
		assignments: {
			returnType: "managedEBookAssignment"
		},
		deviceStates: {
			returnType: "deviceInstallState"
		},
		installSummary: {
			returnType: "eBookInstallSummary"
		},
		userStateSummary: {
			returnType: "userInstallStateSummary"
		},
	},
	managedEBookAssignment: {

	},
	managedIOSLobApp: {

	},
	managedIOSStoreApp: {

	},
	managedMobileApp: {

	},
	managedMobileLobApp: {
		contentVersions: {
			returnType: "mobileAppContent"
		},
	},
	manifest: {

	},
	mdmWindowsInformationProtectionPolicy: {

	},
	meetingAttendanceReport: {
		attendanceRecords: {
			returnType: "attendanceRecord"
		},
	},
	membershipOutlierInsight: {
		container: {
			returnType: "directoryObject"
		},
		lastModifiedBy: {
			returnType: "user"
		},
		member: {
			returnType: "directoryObject"
		},
	},
	message: {
		attachments: {
			returnType: "attachment"
		},
		extensions: {
			returnType: "extension"
		},
		multiValueExtendedProperties: {
			returnType: "multiValueLegacyExtendedProperty"
		},
		singleValueExtendedProperties: {
			returnType: "singleValueLegacyExtendedProperty"
		},
	},
	messageRule: {

	},
	microsoftAccountUserConversationMember: {

	},
	microsoftAuthenticatorAuthenticationMethod: {
		device: {
			returnType: "device"
		},
	},
	microsoftAuthenticatorAuthenticationMethodConfiguration: {
		includeTargets: {
			returnType: "microsoftAuthenticatorAuthenticationMethodTarget"
		},
	},
	microsoftAuthenticatorAuthenticationMethodTarget: {

	},
	microsoftStoreForBusinessApp: {

	},
	mobileApp: {
		assignments: {
			returnType: "mobileAppAssignment"
		},
		categories: {
			returnType: "mobileAppCategory"
		},
	},
	mobileAppAssignment: {

	},
	mobileAppCategory: {

	},
	mobileAppContent: {
		containedApps: {
			returnType: "mobileContainedApp"
		},
		files: {
			returnType: "mobileAppContentFile"
		},
	},
	mobileAppContentFile: {

	},
	mobileAppTroubleshootingEvent: {
		appLogCollectionRequests: {
			returnType: "appLogCollectionRequest"
		},
	},
	mobileContainedApp: {

	},
	mobileLobApp: {
		contentVersions: {
			returnType: "mobileAppContent"
		},
	},
	mobileThreatDefenseConnector: {

	},
	multiTenantOrganization: {
		joinRequest: {
			returnType: "multiTenantOrganizationJoinRequestRecord"
		},
		tenants: {
			returnType: "multiTenantOrganizationMember"
		},
	},
	multiTenantOrganizationIdentitySyncPolicyTemplate: {

	},
	multiTenantOrganizationJoinRequestRecord: {

	},
	multiTenantOrganizationMember: {

	},
	multiTenantOrganizationPartnerConfigurationTemplate: {

	},
	multiValueLegacyExtendedProperty: {

	},
	muteParticipantOperation: {

	},
	namedLocation: {

	},
	networkAdapter: {

	},
	notebook: {
		sectionGroups: {
			returnType: "sectionGroup"
		},
		sections: {
			returnType: "onenoteSection"
		},
	},
	notificationMessageTemplate: {
		localizedNotificationMessages: {
			returnType: "localizedNotificationMessage"
		},
	},
	oAuth2PermissionGrant: {

	},
	offerShiftRequest: {

	},
	officeGraphInsights: {
		shared: {
			returnType: "sharedInsight"
		},
		trending: {
			returnType: "trending"
		},
		used: {
			returnType: "usedInsight"
		},
	},
	onAttributeCollectionListener: {

	},
	onAuthenticationMethodLoadStartListener: {

	},
	onInteractiveAuthFlowStartListener: {

	},
	onPremisesConditionalAccessSettings: {

	},
	onPremisesDirectorySynchronization: {

	},
	onTokenIssuanceStartCustomExtension: {

	},
	onTokenIssuanceStartListener: {

	},
	onUserCreateStartListener: {

	},
	oneDriveForBusinessProtectionPolicy: {
		driveInclusionRules: {
			returnType: "driveProtectionRule"
		},
		driveProtectionUnits: {
			returnType: "driveProtectionUnit"
		},
	},
	oneDriveForBusinessRestoreSession: {
		driveRestoreArtifacts: {
			returnType: "driveRestoreArtifact"
		},
	},
	onenote: {
		notebooks: {
			returnType: "notebook"
		},
		operations: {
			returnType: "onenoteOperation"
		},
		pages: {
			returnType: "onenotePage"
		},
		resources: {
			returnType: "onenoteResource"
		},
		sectionGroups: {
			returnType: "sectionGroup"
		},
		sections: {
			returnType: "onenoteSection"
		},
	},
	onenoteEntityBaseModel: {

	},
	onenoteEntityHierarchyModel: {

	},
	onenoteEntitySchemaObjectModel: {

	},
	onenoteOperation: {

	},
	onenotePage: {
		parentNotebook: {
			returnType: "notebook"
		},
		parentSection: {
			returnType: "onenoteSection"
		},
	},
	onenoteResource: {

	},
	onenoteSection: {
		pages: {
			returnType: "onenotePage"
		},
		parentNotebook: {
			returnType: "notebook"
		},
		parentSectionGroup: {
			returnType: "sectionGroup"
		},
	},
	onlineMeeting: {
		recordings: {
			returnType: "callRecording"
		},
		transcripts: {
			returnType: "callTranscript"
		},
	},
	onlineMeetingBase: {
		attendanceReports: {
			returnType: "meetingAttendanceReport"
		},
	},
	openShift: {

	},
	openShiftChangeRequest: {

	},
	openTypeExtension: {

	},
	operation: {

	},
	orgContact: {
		directReports: {
			returnType: "directoryObject"
		},
		manager: {
			returnType: "directoryObject"
		},
		memberOf: {
			returnType: "directoryObject"
		},
		transitiveMemberOf: {
			returnType: "directoryObject"
		},
	},
	organization: {
		branding: {
			returnType: "organizationalBranding"
		},
		certificateBasedAuthConfiguration: {
			returnType: "certificateBasedAuthConfiguration"
		},
		extensions: {
			returnType: "extension"
		},
	},
	organizationalBranding: {
		localizations: {
			returnType: "organizationalBrandingLocalization"
		},
	},
	organizationalBrandingLocalization: {

	},
	organizationalBrandingProperties: {

	},
	organizer: {

	},
	outlookCategory: {

	},
	outlookItem: {

	},
	outlookUser: {
		masterCategories: {
			returnType: "outlookCategory"
		},
	},
	participant: {

	},
	participantBase: {

	},
	participantJoiningNotification: {
		call: {
			returnType: "call"
		},
	},
	participantLeftNotification: {
		call: {
			returnType: "call"
		},
	},
	partners: {
		billing: {
			returnType: "billing"
		},
	},
	passiveDnsRecord: {
		artifact: {
			returnType: "artifact"
		},
		parentHost: {
			returnType: "host"
		},
	},
	passwordAuthenticationMethod: {

	},
	payload: {

	},
	peopleAdminSettings: {
		profileCardProperties: {
			returnType: "profileCardProperty"
		},
		pronouns: {
			returnType: "pronounsSettings"
		},
		itemInsights: {
			returnType: "insightsSettings"
		},
	},
	permission: {
		update: {
		argNames: ["values"],
		},
	},
	permissionGrantConditionSet: {

	},
	permissionGrantPolicy: {
		excludes: {
			returnType: "permissionGrantConditionSet"
		},
		includes: {
			returnType: "permissionGrantConditionSet"
		},
	},
	person: {

	},
	phoneAuthenticationMethod: {

	},
	pinnedChatMessageInfo: {
		message: {
			returnType: "chatMessage"
		},
	},
	place: {

	},
	planner: {
		buckets: {
			returnType: "plannerBucket"
		},
		plans: {
			returnType: "plannerPlan"
		},
		tasks: {
			returnType: "plannerTask"
		},
	},
	plannerAssignedToTaskBoardTaskFormat: {

	},
	plannerBucket: {
		tasks: {
			returnType: "plannerTask"
		},
	},
	plannerBucketTaskBoardTaskFormat: {

	},
	plannerGroup: {
		plans: {
			returnType: "plannerPlan"
		},
	},
	plannerPlan: {
		buckets: {
			returnType: "plannerBucket"
		},
		details: {
			returnType: "plannerPlanDetails"
		},
		tasks: {
			returnType: "plannerTask"
		},
	},
	plannerPlanDetails: {

	},
	plannerProgressTaskBoardTaskFormat: {

	},
	plannerTask: {
		assignedToTaskBoardFormat: {
			returnType: "plannerAssignedToTaskBoardTaskFormat"
		},
		bucketTaskBoardFormat: {
			returnType: "plannerBucketTaskBoardTaskFormat"
		},
		details: {
			returnType: "plannerTaskDetails"
		},
		progressTaskBoardFormat: {
			returnType: "plannerProgressTaskBoardTaskFormat"
		},
	},
	plannerTaskDetails: {

	},
	plannerUser: {
		plans: {
			returnType: "plannerPlan"
		},
		tasks: {
			returnType: "plannerTask"
		},
	},
	playPromptOperation: {

	},
	policyBase: {

	},
	policyRoot: {
		authenticationMethodsPolicy: {
			returnType: "authenticationMethodsPolicy"
		},
		authenticationStrengthPolicies: {
			returnType: "authenticationStrengthPolicy"
		},
		authenticationFlowsPolicy: {
			returnType: "authenticationFlowsPolicy"
		},
		deviceRegistrationPolicy: {
			returnType: "deviceRegistrationPolicy"
		},
		activityBasedTimeoutPolicies: {
			returnType: "activityBasedTimeoutPolicy"
		},
		appManagementPolicies: {
			returnType: "appManagementPolicy"
		},
		authorizationPolicy: {
			returnType: "authorizationPolicy"
		},
		claimsMappingPolicies: {
			returnType: "claimsMappingPolicy"
		},
		crossTenantAccessPolicy: {
			returnType: "crossTenantAccessPolicy"
		},
		defaultAppManagementPolicy: {
			returnType: "tenantAppManagementPolicy"
		},
		homeRealmDiscoveryPolicies: {
			returnType: "homeRealmDiscoveryPolicy"
		},
		permissionGrantPolicies: {
			returnType: "permissionGrantPolicy"
		},
		tokenIssuancePolicies: {
			returnType: "tokenIssuancePolicy"
		},
		tokenLifetimePolicies: {
			returnType: "tokenLifetimePolicy"
		},
		featureRolloutPolicies: {
			returnType: "featureRolloutPolicy"
		},
		adminConsentRequestPolicy: {
			returnType: "adminConsentRequestPolicy"
		},
		conditionalAccessPolicies: {
			returnType: "conditionalAccessPolicy"
		},
		identitySecurityDefaultsEnforcementPolicy: {
			returnType: "identitySecurityDefaultsEnforcementPolicy"
		},
		roleManagementPolicies: {
			returnType: "unifiedRoleManagementPolicy"
		},
		roleManagementPolicyAssignments: {
			returnType: "unifiedRoleManagementPolicyAssignment"
		},
	},
	policyTemplate: {
		multiTenantOrganizationIdentitySynchronization: {
			returnType: "multiTenantOrganizationIdentitySyncPolicyTemplate"
		},
		multiTenantOrganizationPartnerConfiguration: {
			returnType: "multiTenantOrganizationPartnerConfigurationTemplate"
		},
	},
	post: {
		attachments: {
			returnType: "attachment"
		},
		extensions: {
			returnType: "extension"
		},
		inReplyTo: {
			returnType: "post"
		},
		multiValueExtendedProperties: {
			returnType: "multiValueLegacyExtendedProperty"
		},
		singleValueExtendedProperties: {
			returnType: "singleValueLegacyExtendedProperty"
		},
	},
	presence: {

	},
	print: {
		connectors: {
			returnType: "printConnector"
		},
		operations: {
			returnType: "printOperation"
		},
		printers: {
			returnType: "printer"
		},
		services: {
			returnType: "printService"
		},
		shares: {
			returnType: "printerShare"
		},
		taskDefinitions: {
			returnType: "printTaskDefinition"
		},
	},
	printConnector: {

	},
	printDocument: {

	},
	printJob: {
		documents: {
			returnType: "printDocument"
		},
		tasks: {
			returnType: "printTask"
		},
	},
	printOperation: {

	},
	printService: {
		endpoints: {
			returnType: "printServiceEndpoint"
		},
	},
	printServiceEndpoint: {

	},
	printTask: {
		definition: {
			returnType: "printTaskDefinition"
		},
		trigger: {
			returnType: "printTaskTrigger"
		},
	},
	printTaskDefinition: {
		tasks: {
			returnType: "printTask"
		},
	},
	printTaskTrigger: {
		definition: {
			returnType: "printTaskDefinition"
		},
	},
	printUsage: {

	},
	printUsageByPrinter: {

	},
	printUsageByUser: {

	},
	printer: {
		connectors: {
			returnType: "printConnector"
		},
		shares: {
			returnType: "printerShare"
		},
		taskTriggers: {
			returnType: "printTaskTrigger"
		},
	},
	printerBase: {
		jobs: {
			returnType: "printJob"
		},
	},
	printerCreateOperation: {
		printer: {
			returnType: "printer"
		},
	},
	printerShare: {
		allowedGroups: {
			returnType: "group"
		},
		allowedUsers: {
			returnType: "user"
		},
		printer: {
			returnType: "printer"
		},
	},
	privacy: {
		subjectRightsRequests: {
			returnType: "subjectRightsRequest"
		},
	},
	privilegedAccessGroup: {
		assignmentApprovals: {
			returnType: "approval"
		},
		assignmentScheduleInstances: {
			returnType: "privilegedAccessGroupAssignmentScheduleInstance"
		},
		assignmentScheduleRequests: {
			returnType: "privilegedAccessGroupAssignmentScheduleRequest"
		},
		assignmentSchedules: {
			returnType: "privilegedAccessGroupAssignmentSchedule"
		},
		eligibilityScheduleInstances: {
			returnType: "privilegedAccessGroupEligibilityScheduleInstance"
		},
		eligibilityScheduleRequests: {
			returnType: "privilegedAccessGroupEligibilityScheduleRequest"
		},
		eligibilitySchedules: {
			returnType: "privilegedAccessGroupEligibilitySchedule"
		},
	},
	privilegedAccessGroupAssignmentSchedule: {
		activatedUsing: {
			returnType: "privilegedAccessGroupEligibilitySchedule"
		},
		group: {
			returnType: "group"
		},
		principal: {
			returnType: "directoryObject"
		},
	},
	privilegedAccessGroupAssignmentScheduleInstance: {
		activatedUsing: {
			returnType: "privilegedAccessGroupEligibilityScheduleInstance"
		},
		group: {
			returnType: "group"
		},
		principal: {
			returnType: "directoryObject"
		},
	},
	privilegedAccessGroupAssignmentScheduleRequest: {
		activatedUsing: {
			returnType: "privilegedAccessGroupEligibilitySchedule"
		},
		group: {
			returnType: "group"
		},
		principal: {
			returnType: "directoryObject"
		},
		targetSchedule: {
			returnType: "privilegedAccessGroupEligibilitySchedule"
		},
	},
	privilegedAccessGroupEligibilitySchedule: {
		group: {
			returnType: "group"
		},
		principal: {
			returnType: "directoryObject"
		},
	},
	privilegedAccessGroupEligibilityScheduleInstance: {
		group: {
			returnType: "group"
		},
		principal: {
			returnType: "directoryObject"
		},
	},
	privilegedAccessGroupEligibilityScheduleRequest: {
		group: {
			returnType: "group"
		},
		principal: {
			returnType: "directoryObject"
		},
		targetSchedule: {
			returnType: "privilegedAccessGroupEligibilitySchedule"
		},
	},
	privilegedAccessRoot: {
		group: {
			returnType: "privilegedAccessGroup"
		},
	},
	privilegedAccessSchedule: {

	},
	privilegedAccessScheduleInstance: {

	},
	privilegedAccessScheduleRequest: {

	},
	profileCardProperty: {

	},
	profilePhoto: {

	},
	pronounsSettings: {

	},
	protectionPolicyBase: {

	},
	protectionRuleBase: {

	},
	protectionUnitBase: {

	},
	provisioningObjectSummary: {

	},
	qna: {

	},
	rbacApplication: {
		resourceNamespaces: {
			returnType: "unifiedRbacResourceNamespace"
		},
		roleAssignments: {
			returnType: "unifiedRoleAssignment"
		},
		roleDefinitions: {
			returnType: "unifiedRoleDefinition"
		},
		roleAssignmentScheduleInstances: {
			returnType: "unifiedRoleAssignmentScheduleInstance"
		},
		roleAssignmentScheduleRequests: {
			returnType: "unifiedRoleAssignmentScheduleRequest"
		},
		roleAssignmentSchedules: {
			returnType: "unifiedRoleAssignmentSchedule"
		},
		roleEligibilityScheduleInstances: {
			returnType: "unifiedRoleEligibilityScheduleInstance"
		},
		roleEligibilityScheduleRequests: {
			returnType: "unifiedRoleEligibilityScheduleRequest"
		},
		roleEligibilitySchedules: {
			returnType: "unifiedRoleEligibilitySchedule"
		},
	},
	recordOperation: {

	},
	referenceAttachment: {

	},
	relation: {
		fromTerm: {
			returnType: "term"
		},
		set: {
			returnType: "set"
		},
		toTerm: {
			returnType: "term"
		},
	},
	relyingPartyDetailedSummary: {

	},
	remoteAssistancePartner: {

	},
	remoteDesktopSecurityConfiguration: {
		targetDeviceGroups: {
			returnType: "targetDeviceGroup"
		},
	},
	reportRoot: {
		authenticationMethods: {
			returnType: "authenticationMethodsRoot"
		},
		partners: {
			returnType: "partners"
		},
		dailyPrintUsageByPrinter: {
			returnType: "printUsageByPrinter"
		},
		dailyPrintUsageByUser: {
			returnType: "printUsageByUser"
		},
		monthlyPrintUsageByPrinter: {
			returnType: "printUsageByPrinter"
		},
		monthlyPrintUsageByUser: {
			returnType: "printUsageByUser"
		},
		security: {
			returnType: "securityReportsRoot"
		},
	},
	request: {

	},
	resellerDelegatedAdminRelationship: {

	},
	resourceOperation: {

	},
	resourceSpecificPermissionGrant: {

	},
	restoreArtifactBase: {
		restorePoint: {
			returnType: "restorePoint"
		},
	},
	restorePoint: {
		protectionUnit: {
			returnType: "protectionUnitBase"
		},
	},
	restoreSessionBase: {

	},
	retentionEvent: {
		retentionEventType: {
			returnType: "retentionEventType"
		},
	},
	retentionEventType: {

	},
	retentionLabel: {
		descriptors: {
			returnType: "filePlanDescriptor"
		},
		dispositionReviewStages: {
			returnType: "dispositionReviewStage"
		},
		retentionEventType: {
			returnType: "retentionEventType"
		},
	},
	richLongRunningOperation: {

	},
	riskDetection: {

	},
	riskyServicePrincipal: {
		history: {
			returnType: "riskyServicePrincipalHistoryItem"
		},
	},
	riskyServicePrincipalHistoryItem: {

	},
	riskyUser: {
		history: {
			returnType: "riskyUserHistoryItem"
		},
	},
	riskyUserHistoryItem: {

	},
	roleAssignment: {
		roleDefinition: {
			returnType: "roleDefinition"
		},
	},
	roleDefinition: {
		roleAssignments: {
			returnType: "roleAssignment"
		},
	},
	roleManagement: {
		directory: {
			returnType: "rbacApplication"
		},
		entitlementManagement: {
			returnType: "rbacApplication"
		},
	},
	room: {

	},
	roomList: {
		rooms: {
			returnType: "room"
		},
	},
	run: {
		taskProcessingResults: {
			returnType: "taskProcessingResult"
		},
		userProcessingResults: {
			returnType: "userProcessingResult"
		},
	},
	runningOperation: {

	},
	samlOrWsFedExternalDomainFederation: {
		domains: {
			returnType: "externalDomainName"
		},
	},
	samlOrWsFedProvider: {

	},
	schedule: {
		offerShiftRequests: {
			returnType: "offerShiftRequest"
		},
		openShiftChangeRequests: {
			returnType: "openShiftChangeRequest"
		},
		openShifts: {
			returnType: "openShift"
		},
		schedulingGroups: {
			returnType: "schedulingGroup"
		},
		shifts: {
			returnType: "shift"
		},
		swapShiftsChangeRequests: {
			returnType: "swapShiftsChangeRequest"
		},
		timeOffReasons: {
			returnType: "timeOffReason"
		},
		timeOffRequests: {
			returnType: "timeOffRequest"
		},
		timesOff: {
			returnType: "timeOff"
		},
	},
	scheduleChangeRequest: {

	},
	schedulingGroup: {

	},
	schema: {

	},
	schemaExtension: {

	},
	scopedRoleMembership: {

	},
	search: {

	},
	searchAnswer: {

	},
	searchEntity: {
		acronyms: {
			returnType: "acronym"
		},
		bookmarks: {
			returnType: "bookmark"
		},
		qnas: {
			returnType: "qna"
		},
	},
	sectionGroup: {
		parentNotebook: {
			returnType: "notebook"
		},
		parentSectionGroup: {
			returnType: "sectionGroup"
		},
		sectionGroups: {
			returnType: "sectionGroup"
		},
		sections: {
			returnType: "onenoteSection"
		},
	},
	secureScore: {

	},
	secureScoreControlProfile: {

	},
	security: {
		subjectRightsRequests: {
			returnType: "subjectRightsRequest"
		},
		cases: {
			returnType: "casesRoot"
		},
		identities: {
			returnType: "identityContainer"
		},
		alerts_v2: {
			returnType: "alert"
		},
		incidents: {
			returnType: "incident"
		},
		attackSimulation: {
			returnType: "attackSimulationRoot"
		},
		labels: {
			returnType: "labelsRoot"
		},
		triggers: {
			returnType: "triggersRoot"
		},
		triggerTypes: {
			returnType: "triggerTypesRoot"
		},
		alerts: {
			returnType: "alert"
		},
		secureScoreControlProfiles: {
			returnType: "secureScoreControlProfile"
		},
		secureScores: {
			returnType: "secureScore"
		},
		threatIntelligence: {
			returnType: "threatIntelligence"
		},
	},
	securityReportsRoot: {

	},
	segment: {

	},
	sendDtmfTonesOperation: {

	},
	sensor: {
		healthIssues: {
			returnType: "healthIssue"
		},
	},
	serviceAnnouncement: {
		healthOverviews: {
			returnType: "serviceHealth"
		},
		issues: {
			returnType: "serviceHealthIssue"
		},
		messages: {
			returnType: "serviceUpdateMessage"
		},
	},
	serviceAnnouncementAttachment: {

	},
	serviceAnnouncementBase: {

	},
	serviceApp: {

	},
	serviceHealth: {
		issues: {
			returnType: "serviceHealthIssue"
		},
	},
	serviceHealthIssue: {

	},
	servicePrincipal: {
		appManagementPolicies: {
			returnType: "appManagementPolicy"
		},
		appRoleAssignedTo: {
			returnType: "appRoleAssignment"
		},
		appRoleAssignments: {
			returnType: "appRoleAssignment"
		},
		claimsMappingPolicies: {
			returnType: "claimsMappingPolicy"
		},
		createdObjects: {
			returnType: "directoryObject"
		},
		delegatedPermissionClassifications: {
			returnType: "delegatedPermissionClassification"
		},
		endpoints: {
			returnType: "endpoint"
		},
		federatedIdentityCredentials: {
			returnType: "federatedIdentityCredential"
		},
		homeRealmDiscoveryPolicies: {
			returnType: "homeRealmDiscoveryPolicy"
		},
		memberOf: {
			returnType: "directoryObject"
		},
		oauth2PermissionGrants: {
			returnType: "oAuth2PermissionGrant"
		},
		ownedObjects: {
			returnType: "directoryObject"
		},
		owners: {
			returnType: "directoryObject"
		},
		remoteDesktopSecurityConfiguration: {
			returnType: "remoteDesktopSecurityConfiguration"
		},
		tokenIssuancePolicies: {
			returnType: "tokenIssuancePolicy"
		},
		tokenLifetimePolicies: {
			returnType: "tokenLifetimePolicy"
		},
		transitiveMemberOf: {
			returnType: "directoryObject"
		},
		synchronization: {
			returnType: "synchronization"
		},
	},
	servicePrincipalRiskDetection: {

	},
	serviceStorageQuotaBreakdown: {

	},
	serviceUpdateMessage: {
		attachments: {
			returnType: "serviceAnnouncementAttachment"
		},
	},
	session: {
		segments: {
			returnType: "segment"
		},
	},
	set: {
		children: {
			returnType: "term"
		},
		parentGroup: {
			returnType: "group"
		},
		relations: {
			returnType: "relation"
		},
		terms: {
			returnType: "term"
		},
	},
	settingStateDeviceSummary: {

	},
	sharePointProtectionPolicy: {
		siteInclusionRules: {
			returnType: "siteProtectionRule"
		},
		siteProtectionUnits: {
			returnType: "siteProtectionUnit"
		},
	},
	sharePointRestoreSession: {
		siteRestoreArtifacts: {
			returnType: "siteRestoreArtifact"
		},
	},
	sharedDriveItem: {
		driveItem: {
			returnType: "driveItem"
		},
		items: {
			returnType: "driveItem"
		},
		list: {
			returnType: "list"
		},
		listItem: {
			returnType: "listItem"
		},
		permission: {
			returnType: "permission"
		},
		root: {
			returnType: "driveItem"
		},
		site: {
			returnType: "site"
		},
	},
	sharedInsight: {
		lastSharedMethod: {
			returnType: "entity"
		},
		resource: {
			returnType: "entity"
		},
	},
	sharedPCConfiguration: {

	},
	sharedWithChannelTeamInfo: {
		allowedMembers: {
			returnType: "conversationMember"
		},
	},
	sharepoint: {
		settings: {
			returnType: "sharepointSettings"
		},
	},
	sharepointSettings: {

	},
	shift: {

	},
	shiftPreferences: {

	},
	signIn: {

	},
	simulation: {
		landingPage: {
			returnType: "landingPage"
		},
		loginPage: {
			returnType: "loginPage"
		},
		payload: {
			returnType: "payload"
		},
	},
	simulationAutomation: {
		runs: {
			returnType: "simulationAutomationRun"
		},
	},
	simulationAutomationRun: {

	},
	singleValueLegacyExtendedProperty: {

	},
	site: {
		analytics: {
			returnType: "itemAnalytics"
		},
		columns: {
			returnType: "columnDefinition"
		},
		contentTypes: {
			returnType: "contentType"
		},
		drive: {
			returnType: "drive"
		},
		drives: {
			returnType: "drive"
		},
		externalColumns: {
			returnType: "columnDefinition"
		},
		items: {
			returnType: "baseItem"
		},
		lists: {
			returnType: "list"
		},
		operations: {
			returnType: "richLongRunningOperation"
		},
		pages: {
			returnType: "baseSitePage"
		},
		permissions: {
			returnType: "permission"
		},
		sites: {
			returnType: "site"
		},
		termStore: {
			returnType: "store"
		},
		termStores: {
			returnType: "store"
		},
		onenote: {
			returnType: "onenote"
		},
	},
	sitePage: {
		canvasLayout: {
			returnType: "canvasLayout"
		},
		webParts: {
			returnType: "webPart"
		},
	},
	siteProtectionRule: {

	},
	siteProtectionUnit: {

	},
	siteRestoreArtifact: {

	},
	siteSource: {
		site: {
			returnType: "site"
		},
	},
	sites: {
		add: {
		argNames: ["values"],
		},
	},
	skypeForBusinessUserConversationMember: {

	},
	skypeUserConversationMember: {

	},
	smsAuthenticationMethodConfiguration: {
		includeTargets: {
			returnType: "smsAuthenticationMethodTarget"
		},
	},
	smsAuthenticationMethodTarget: {

	},
	socialIdentityProvider: {

	},
	softwareOathAuthenticationMethod: {

	},
	softwareOathAuthenticationMethodConfiguration: {
		includeTargets: {
			returnType: "authenticationMethodTarget"
		},
	},
	softwareUpdateStatusSummary: {

	},
	solutionsRoot: {
		bookingBusinesses: {
			returnType: "bookingBusiness"
		},
		bookingCurrencies: {
			returnType: "bookingCurrency"
		},
		backupRestore: {
			returnType: "backupRestoreRoot"
		},
		virtualEvents: {
			returnType: "virtualEventsRoot"
		},
	},
	sslCertificate: {
		relatedHosts: {
			returnType: "host"
		},
	},
	standardWebPart: {

	},
	startHoldMusicOperation: {

	},
	stopHoldMusicOperation: {

	},
	storage: {
		fileStorage: {
			returnType: "fileStorage"
		},
		settings: {
			returnType: "storageSettings"
		},
	},
	storageQuotaBreakdown: {

	},
	storageSettings: {
		quota: {
			returnType: "unifiedStorageQuota"
		},
	},
	store: {
		groups: {
			returnType: "group"
		},
		sets: {
			returnType: "set"
		},
	},
	stsPolicy: {
		appliesTo: {
			returnType: "directoryObject"
		},
	},
	subcategoryTemplate: {

	},
	subdomain: {
		host: {
			returnType: "host"
		},
	},
	subjectRightsRequest: {
		approvers: {
			returnType: "user"
		},
		collaborators: {
			returnType: "user"
		},
		notes: {
			returnType: "authoredNote"
		},
		team: {
			returnType: "team"
		},
	},
	subscribeToToneOperation: {

	},
	subscribedSku: {

	},
	subscription: {

	},
	swapShiftsChangeRequest: {

	},
	synchronization: {
		jobs: {
			returnType: "synchronizationJob"
		},
		templates: {
			returnType: "synchronizationTemplate"
		},
	},
	synchronizationJob: {
		bulkUpload: {
			returnType: "bulkUpload"
		},
		schema: {
			returnType: "synchronizationSchema"
		},
	},
	synchronizationSchema: {
		directories: {
			returnType: "directoryDefinition"
		},
	},
	synchronizationTemplate: {
		schema: {
			returnType: "synchronizationSchema"
		},
	},
	tag: {

	},
	targetDeviceGroup: {

	},
	targetedManagedAppConfiguration: {
		apps: {
			returnType: "managedMobileApp"
		},
		assignments: {
			returnType: "targetedManagedAppPolicyAssignment"
		},
		deploymentSummary: {
			returnType: "managedAppPolicyDeploymentSummary"
		},
	},
	targetedManagedAppPolicyAssignment: {

	},
	targetedManagedAppProtection: {
		assignments: {
			returnType: "targetedManagedAppPolicyAssignment"
		},
	},
	task: {
		taskProcessingResults: {
			returnType: "taskProcessingResult"
		},
	},
	taskDefinition: {

	},
	taskFileAttachment: {

	},
	taskProcessingResult: {
		subject: {
			returnType: "user"
		},
		task: {
			returnType: "task"
		},
	},
	taskReport: {
		task: {
			returnType: "task"
		},
		taskDefinition: {
			returnType: "taskDefinition"
		},
		taskProcessingResults: {
			returnType: "taskProcessingResult"
		},
	},
	team: {
		allChannels: {
			returnType: "channel"
		},
		channels: {
			returnType: "channel"
		},
		group: {
			returnType: "group"
		},
		incomingChannels: {
			returnType: "channel"
		},
		installedApps: {
			returnType: "teamsAppInstallation"
		},
		members: {
			returnType: "conversationMember"
		},
		operations: {
			returnType: "teamsAsyncOperation"
		},
		permissionGrants: {
			returnType: "resourceSpecificPermissionGrant"
		},
		photo: {
			returnType: "profilePhoto"
		},
		primaryChannel: {
			returnType: "channel"
		},
		tags: {
			returnType: "teamworkTag"
		},
		template: {
			returnType: "teamsTemplate"
		},
		schedule: {
			returnType: "schedule"
		},
	},
	teamInfo: {
		team: {
			returnType: "team"
		},
	},
	teamsApp: {
		appDefinitions: {
			returnType: "teamsAppDefinition"
		},
	},
	teamsAppDefinition: {
		bot: {
			returnType: "teamworkBot"
		},
	},
	teamsAppInstallation: {
		teamsApp: {
			returnType: "teamsApp"
		},
		teamsAppDefinition: {
			returnType: "teamsAppDefinition"
		},
	},
	teamsAppSettings: {

	},
	teamsAsyncOperation: {

	},
	teamsTab: {
		teamsApp: {
			returnType: "teamsApp"
		},
	},
	teamsTemplate: {

	},
	teamwork: {
		workforceIntegrations: {
			returnType: "workforceIntegration"
		},
		deletedChats: {
			returnType: "deletedChat"
		},
		deletedTeams: {
			returnType: "deletedTeam"
		},
		teamsAppSettings: {
			returnType: "teamsAppSettings"
		},
	},
	teamworkBot: {

	},
	teamworkHostedContent: {

	},
	teamworkTag: {
		members: {
			returnType: "teamworkTagMember"
		},
	},
	teamworkTagMember: {

	},
	telecomExpenseManagementPartner: {

	},
	temporaryAccessPassAuthenticationMethod: {

	},
	temporaryAccessPassAuthenticationMethodConfiguration: {
		includeTargets: {
			returnType: "authenticationMethodTarget"
		},
	},
	tenantAppManagementPolicy: {

	},
	tenantRelationship: {
		multiTenantOrganization: {
			returnType: "multiTenantOrganization"
		},
		delegatedAdminCustomers: {
			returnType: "delegatedAdminCustomer"
		},
		delegatedAdminRelationships: {
			returnType: "delegatedAdminRelationship"
		},
	},
	term: {
		children: {
			returnType: "term"
		},
		relations: {
			returnType: "relation"
		},
		set: {
			returnType: "set"
		},
	},
	termsAndConditions: {
		acceptanceStatuses: {
			returnType: "termsAndConditionsAcceptanceStatus"
		},
		assignments: {
			returnType: "termsAndConditionsAssignment"
		},
	},
	termsAndConditionsAcceptanceStatus: {
		termsAndConditions: {
			returnType: "termsAndConditions"
		},
	},
	termsAndConditionsAssignment: {

	},
	termsOfUseContainer: {
		agreementAcceptances: {
			returnType: "agreementAcceptance"
		},
		agreements: {
			returnType: "agreement"
		},
	},
	textWebPart: {

	},
	threatAssessmentRequest: {
		results: {
			returnType: "threatAssessmentResult"
		},
	},
	threatAssessmentResult: {

	},
	threatIntelligence: {
		articleIndicators: {
			returnType: "articleIndicator"
		},
		articles: {
			returnType: "article"
		},
		hostComponents: {
			returnType: "hostComponent"
		},
		hostCookies: {
			returnType: "hostCookie"
		},
		hostPairs: {
			returnType: "hostPair"
		},
		hostPorts: {
			returnType: "hostPort"
		},
		hosts: {
			returnType: "host"
		},
		hostSslCertificates: {
			returnType: "hostSslCertificate"
		},
		hostTrackers: {
			returnType: "hostTracker"
		},
		intelligenceProfileIndicators: {
			returnType: "intelligenceProfileIndicator"
		},
		intelProfiles: {
			returnType: "intelligenceProfile"
		},
		passiveDnsRecords: {
			returnType: "passiveDnsRecord"
		},
		sslCertificates: {
			returnType: "sslCertificate"
		},
		subdomains: {
			returnType: "subdomain"
		},
		vulnerabilities: {
			returnType: "vulnerability"
		},
		whoisHistoryRecords: {
			returnType: "whoisHistoryRecord"
		},
		whoisRecords: {
			returnType: "whoisRecord"
		},
	},
	thumbnailSet: {

	},
	timeOff: {

	},
	timeOffReason: {

	},
	timeOffRequest: {

	},
	todo: {
		lists: {
			returnType: "todoTaskList"
		},
	},
	todoTask: {
		attachments: {
			returnType: "attachmentBase"
		},
		attachmentSessions: {
			returnType: "attachmentSession"
		},
		checklistItems: {
			returnType: "checklistItem"
		},
		extensions: {
			returnType: "extension"
		},
		linkedResources: {
			returnType: "linkedResource"
		},
	},
	todoTaskList: {
		extensions: {
			returnType: "extension"
		},
		tasks: {
			returnType: "todoTask"
		},
	},
	tokenIssuancePolicy: {

	},
	tokenLifetimePolicy: {

	},
	training: {
		languageDetails: {
			returnType: "trainingLanguageDetail"
		},
	},
	trainingLanguageDetail: {

	},
	trending: {
		resource: {
			returnType: "entity"
		},
	},
	triggerTypesRoot: {
		retentionEventTypes: {
			returnType: "retentionEventType"
		},
	},
	triggersRoot: {
		retentionEvents: {
			returnType: "retentionEvent"
		},
	},
	unbilledUsage: {

	},
	unclassifiedArtifact: {

	},
	unifiedGroupSource: {
		group: {
			returnType: "group"
		},
	},
	unifiedRbacResourceAction: {

	},
	unifiedRbacResourceNamespace: {
		resourceActions: {
			returnType: "unifiedRbacResourceAction"
		},
	},
	unifiedRoleAssignment: {
		appScope: {
			returnType: "appScope"
		},
		directoryScope: {
			returnType: "directoryObject"
		},
		principal: {
			returnType: "directoryObject"
		},
		roleDefinition: {
			returnType: "unifiedRoleDefinition"
		},
	},
	unifiedRoleAssignmentSchedule: {
		activatedUsing: {
			returnType: "unifiedRoleEligibilitySchedule"
		},
	},
	unifiedRoleAssignmentScheduleInstance: {
		activatedUsing: {
			returnType: "unifiedRoleEligibilityScheduleInstance"
		},
	},
	unifiedRoleAssignmentScheduleRequest: {
		activatedUsing: {
			returnType: "unifiedRoleEligibilitySchedule"
		},
		appScope: {
			returnType: "appScope"
		},
		directoryScope: {
			returnType: "directoryObject"
		},
		principal: {
			returnType: "directoryObject"
		},
		roleDefinition: {
			returnType: "unifiedRoleDefinition"
		},
		targetSchedule: {
			returnType: "unifiedRoleAssignmentSchedule"
		},
	},
	unifiedRoleDefinition: {
		inheritsPermissionsFrom: {
			returnType: "unifiedRoleDefinition"
		},
	},
	unifiedRoleEligibilitySchedule: {

	},
	unifiedRoleEligibilityScheduleInstance: {

	},
	unifiedRoleEligibilityScheduleRequest: {
		appScope: {
			returnType: "appScope"
		},
		directoryScope: {
			returnType: "directoryObject"
		},
		principal: {
			returnType: "directoryObject"
		},
		roleDefinition: {
			returnType: "unifiedRoleDefinition"
		},
		targetSchedule: {
			returnType: "unifiedRoleEligibilitySchedule"
		},
	},
	unifiedRoleManagementPolicy: {
		effectiveRules: {
			returnType: "unifiedRoleManagementPolicyRule"
		},
		rules: {
			returnType: "unifiedRoleManagementPolicyRule"
		},
	},
	unifiedRoleManagementPolicyApprovalRule: {

	},
	unifiedRoleManagementPolicyAssignment: {
		policy: {
			returnType: "unifiedRoleManagementPolicy"
		},
	},
	unifiedRoleManagementPolicyAuthenticationContextRule: {

	},
	unifiedRoleManagementPolicyEnablementRule: {

	},
	unifiedRoleManagementPolicyExpirationRule: {

	},
	unifiedRoleManagementPolicyNotificationRule: {

	},
	unifiedRoleManagementPolicyRule: {

	},
	unifiedRoleScheduleBase: {
		appScope: {
			returnType: "appScope"
		},
		directoryScope: {
			returnType: "directoryObject"
		},
		principal: {
			returnType: "directoryObject"
		},
		roleDefinition: {
			returnType: "unifiedRoleDefinition"
		},
	},
	unifiedRoleScheduleInstanceBase: {
		appScope: {
			returnType: "appScope"
		},
		directoryScope: {
			returnType: "directoryObject"
		},
		principal: {
			returnType: "directoryObject"
		},
		roleDefinition: {
			returnType: "unifiedRoleDefinition"
		},
	},
	unifiedStorageQuota: {
		services: {
			returnType: "serviceStorageQuotaBreakdown"
		},
	},
	unmuteParticipantOperation: {

	},
	updateRecordingStatusOperation: {

	},
	urlAssessmentRequest: {

	},
	usedInsight: {
		resource: {
			returnType: "entity"
		},
	},
	user: {
		appRoleAssignments: {
			returnType: "appRoleAssignment"
		},
		createdObjects: {
			returnType: "directoryObject"
		},
		directReports: {
			returnType: "directoryObject"
		},
		licenseDetails: {
			returnType: "licenseDetails"
		},
		manager: {
			returnType: "directoryObject"
		},
		memberOf: {
			returnType: "directoryObject"
		},
		oauth2PermissionGrants: {
			returnType: "oAuth2PermissionGrant"
		},
		ownedDevices: {
			returnType: "directoryObject"
		},
		ownedObjects: {
			returnType: "directoryObject"
		},
		registeredDevices: {
			returnType: "directoryObject"
		},
		scopedRoleMemberOf: {
			returnType: "scopedRoleMembership"
		},
		sponsors: {
			returnType: "directoryObject"
		},
		transitiveMemberOf: {
			returnType: "directoryObject"
		},
		calendar: {
			returnType: "calendar"
		},
		calendarGroups: {
			returnType: "calendarGroup"
		},
		calendars: {
			returnType: "calendar"
		},
		calendarView: {
			returnType: "event"
		},
		contactFolders: {
			returnType: "contactFolder"
		},
		contacts: {
			returnType: "contact"
		},
		events: {
			returnType: "event"
		},
		inferenceClassification: {
			returnType: "inferenceClassification"
		},
		mailFolders: {
			returnType: "mailFolder"
		},
		messages: {
			returnType: "message"
		},
		outlook: {
			returnType: "outlookUser"
		},
		people: {
			returnType: "person"
		},
		drive: {
			returnType: "drive"
		},
		drives: {
			returnType: "drive"
		},
		followedSites: {
			returnType: "site"
		},
		extensions: {
			returnType: "extension"
		},
		agreementAcceptances: {
			returnType: "agreementAcceptance"
		},
		managedDevices: {
			returnType: "managedDevice"
		},
		managedAppRegistrations: {
			returnType: "managedAppRegistration"
		},
		deviceManagementTroubleshootingEvents: {
			returnType: "deviceManagementTroubleshootingEvent"
		},
		planner: {
			returnType: "plannerUser"
		},
		insights: {
			returnType: "itemInsights"
		},
		settings: {
			returnType: "userSettings"
		},
		onenote: {
			returnType: "onenote"
		},
		cloudClipboard: {
			returnType: "cloudClipboardRoot"
		},
		photo: {
			returnType: "profilePhoto"
		},
		photos: {
			returnType: "profilePhoto"
		},
		activities: {
			returnType: "userActivity"
		},
		onlineMeetings: {
			returnType: "onlineMeeting"
		},
		presence: {
			returnType: "presence"
		},
		authentication: {
			returnType: "authentication"
		},
		chats: {
			returnType: "chat"
		},
		joinedTeams: {
			returnType: "team"
		},
		permissionGrants: {
			returnType: "resourceSpecificPermissionGrant"
		},
		teamwork: {
			returnType: "userTeamwork"
		},
		solutions: {
			returnType: "userSolutionRoot"
		},
		todo: {
			returnType: "todo"
		},
		employeeExperience: {
			returnType: "employeeExperienceUser"
		},
	},
	userActivity: {
		historyItems: {
			returnType: "activityHistoryItem"
		},
	},
	userConsentRequest: {
		approval: {
			returnType: "approval"
		},
	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails: {

	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId: {

	},
	userExperienceAnalyticsAppHealthAppPerformanceByOSVersion: {

	},
	userExperienceAnalyticsAppHealthApplicationPerformance: {

	},
	userExperienceAnalyticsAppHealthDeviceModelPerformance: {

	},
	userExperienceAnalyticsAppHealthDevicePerformance: {

	},
	userExperienceAnalyticsAppHealthDevicePerformanceDetails: {

	},
	userExperienceAnalyticsAppHealthOSVersionPerformance: {

	},
	userExperienceAnalyticsBaseline: {
		appHealthMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
		batteryHealthMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
		bestPracticesMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
		deviceBootPerformanceMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
		rebootAnalyticsMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
		resourcePerformanceMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
		workFromAnywhereMetrics: {
			returnType: "userExperienceAnalyticsCategory"
		},
	},
	userExperienceAnalyticsCategory: {
		metricValues: {
			returnType: "userExperienceAnalyticsMetric"
		},
	},
	userExperienceAnalyticsDevicePerformance: {

	},
	userExperienceAnalyticsDeviceScores: {

	},
	userExperienceAnalyticsDeviceStartupHistory: {

	},
	userExperienceAnalyticsDeviceStartupProcess: {

	},
	userExperienceAnalyticsDeviceStartupProcessPerformance: {

	},
	userExperienceAnalyticsMetric: {

	},
	userExperienceAnalyticsMetricHistory: {

	},
	userExperienceAnalyticsModelScores: {

	},
	userExperienceAnalyticsOverview: {

	},
	userExperienceAnalyticsScoreHistory: {

	},
	userExperienceAnalyticsWorkFromAnywhereDevice: {

	},
	userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: {

	},
	userExperienceAnalyticsWorkFromAnywhereMetric: {
		metricDevices: {
			returnType: "userExperienceAnalyticsWorkFromAnywhereDevice"
		},
	},
	userExperienceAnalyticsWorkFromAnywhereModelPerformance: {

	},
	userFlowLanguageConfiguration: {
		defaultPages: {
			returnType: "userFlowLanguagePage"
		},
		overridesPages: {
			returnType: "userFlowLanguagePage"
		},
	},
	userFlowLanguagePage: {

	},
	userInsightsSettings: {

	},
	userInstallStateSummary: {
		deviceStates: {
			returnType: "deviceInstallState"
		},
	},
	userProcessingResult: {
		subject: {
			returnType: "user"
		},
		taskProcessingResults: {
			returnType: "taskProcessingResult"
		},
	},
	userRegistrationDetails: {

	},
	userScopeTeamsAppInstallation: {
		chat: {
			returnType: "chat"
		},
	},
	userSettings: {
		itemInsights: {
			returnType: "userInsightsSettings"
		},
		windows: {
			returnType: "windowsSetting"
		},
		shiftPreferences: {
			returnType: "shiftPreferences"
		},
		storage: {
			returnType: "userStorage"
		},
	},
	userSignInInsight: {

	},
	userSolutionRoot: {
		workingTimeSchedule: {
			returnType: "workingTimeSchedule"
		},
	},
	userSource: {

	},
	userStorage: {
		quota: {
			returnType: "unifiedStorageQuota"
		},
	},
	userTeamwork: {
		associatedTeams: {
			returnType: "associatedTeamInfo"
		},
		installedApps: {
			returnType: "userScopeTeamsAppInstallation"
		},
	},
	verticalSection: {
		webparts: {
			returnType: "webPart"
		},
	},
	virtualEndpoint: {
		auditEvents: {
			returnType: "cloudPcAuditEvent"
		},
		cloudPCs: {
			returnType: "cloudPC"
		},
		deviceImages: {
			returnType: "cloudPcDeviceImage"
		},
		galleryImages: {
			returnType: "cloudPcGalleryImage"
		},
		onPremisesConnections: {
			returnType: "cloudPcOnPremisesConnection"
		},
		provisioningPolicies: {
			returnType: "cloudPcProvisioningPolicy"
		},
		userSettings: {
			returnType: "cloudPcUserSetting"
		},
	},
	virtualEvent: {
		presenters: {
			returnType: "virtualEventPresenter"
		},
		sessions: {
			returnType: "virtualEventSession"
		},
	},
	virtualEventPresenter: {

	},
	virtualEventRegistration: {
		sessions: {
			returnType: "virtualEventSession"
		},
	},
	virtualEventRegistrationConfiguration: {
		questions: {
			returnType: "virtualEventRegistrationQuestionBase"
		},
	},
	virtualEventRegistrationCustomQuestion: {

	},
	virtualEventRegistrationPredefinedQuestion: {

	},
	virtualEventRegistrationQuestionBase: {

	},
	virtualEventSession: {

	},
	virtualEventTownhall: {

	},
	virtualEventWebinar: {
		registrationConfiguration: {
			returnType: "virtualEventWebinarRegistrationConfiguration"
		},
		registrations: {
			returnType: "virtualEventRegistration"
		},
	},
	virtualEventWebinarRegistrationConfiguration: {

	},
	virtualEventsRoot: {
		events: {
			returnType: "virtualEvent"
		},
		townhalls: {
			returnType: "virtualEventTownhall"
		},
		webinars: {
			returnType: "virtualEventWebinar"
		},
	},
	voiceAuthenticationMethodConfiguration: {
		includeTargets: {
			returnType: "authenticationMethodTarget"
		},
	},
	vppToken: {

	},
	vulnerability: {
		articles: {
			returnType: "article"
		},
		components: {
			returnType: "vulnerabilityComponent"
		},
	},
	vulnerabilityComponent: {

	},
	webApp: {

	},
	webPart: {

	},
	whoisBaseRecord: {
		host: {
			returnType: "host"
		},
	},
	whoisHistoryRecord: {

	},
	whoisRecord: {
		history: {
			returnType: "whoisHistoryRecord"
		},
	},
	win32LobApp: {

	},
	windows10CompliancePolicy: {

	},
	windows10CustomConfiguration: {

	},
	windows10EndpointProtectionConfiguration: {

	},
	windows10EnrollmentCompletionPageConfiguration: {

	},
	windows10EnterpriseModernAppManagementConfiguration: {

	},
	windows10GeneralConfiguration: {

	},
	windows10MobileCompliancePolicy: {

	},
	windows10SecureAssessmentConfiguration: {

	},
	windows10TeamGeneralConfiguration: {

	},
	windows81CompliancePolicy: {

	},
	windows81GeneralConfiguration: {

	},
	windowsAppX: {

	},
	windowsAutopilotDeploymentProfile: {
		assignedDevices: {
			returnType: "windowsAutopilotDeviceIdentity"
		},
	},
	windowsAutopilotDeploymentProfileAssignment: {

	},
	windowsAutopilotDeviceIdentity: {

	},
	windowsDefenderAdvancedThreatProtectionConfiguration: {

	},
	windowsDeviceMalwareState: {

	},
	windowsHelloForBusinessAuthenticationMethod: {
		device: {
			returnType: "device"
		},
	},
	windowsInformationProtection: {
		assignments: {
			returnType: "targetedManagedAppPolicyAssignment"
		},
		exemptAppLockerFiles: {
			returnType: "windowsInformationProtectionAppLockerFile"
		},
		protectedAppLockerFiles: {
			returnType: "windowsInformationProtectionAppLockerFile"
		},
	},
	windowsInformationProtectionAppLearningSummary: {

	},
	windowsInformationProtectionAppLockerFile: {

	},
	windowsInformationProtectionNetworkLearningSummary: {

	},
	windowsInformationProtectionPolicy: {

	},
	windowsMalwareInformation: {
		deviceMalwareStates: {
			returnType: "malwareStateForWindowsDevice"
		},
	},
	windowsMicrosoftEdgeApp: {

	},
	windowsMobileMSI: {

	},
	windowsPhone81CompliancePolicy: {

	},
	windowsPhone81CustomConfiguration: {

	},
	windowsPhone81GeneralConfiguration: {

	},
	windowsProtectionState: {
		detectedMalwareState: {
			returnType: "windowsDeviceMalwareState"
		},
	},
	windowsSetting: {
		instances: {
			returnType: "windowsSettingInstance"
		},
	},
	windowsSettingInstance: {

	},
	windowsUniversalAppX: {
		committedContainedApps: {
			returnType: "mobileContainedApp"
		},
	},
	windowsUniversalAppXContainedApp: {

	},
	windowsUpdateForBusinessConfiguration: {

	},
	windowsWebApp: {

	},
	workbook: {
		application: {
			returnType: "workbookApplication"
		},
		comments: {
			returnType: "workbookComment"
		},
		functions: {
			returnType: "workbookFunctions"
		},
		names: {
			returnType: "workbookNamedItem"
		},
		operations: {
			returnType: "workbookOperation"
		},
		tables: {
			returnType: "workbookTable"
		},
		worksheets: {
			returnType: "workbookWorksheet"
		},
	},
	workbookApplication: {

	},
	workbookChart: {
		axes: {
			returnType: "workbookChartAxes"
		},
		dataLabels: {
			returnType: "workbookChartDataLabels"
		},
		format: {
			returnType: "workbookChartAreaFormat"
		},
		legend: {
			returnType: "workbookChartLegend"
		},
		series: {
			returnType: "workbookChartSeries"
		},
		title: {
			returnType: "workbookChartTitle"
		},
		worksheet: {
			returnType: "workbookWorksheet"
		},
	},
	workbookChartAreaFormat: {
		fill: {
			returnType: "workbookChartFill"
		},
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookChartAxes: {
		categoryAxis: {
			returnType: "workbookChartAxis"
		},
		seriesAxis: {
			returnType: "workbookChartAxis"
		},
		valueAxis: {
			returnType: "workbookChartAxis"
		},
	},
	workbookChartAxis: {
		format: {
			returnType: "workbookChartAxisFormat"
		},
		majorGridlines: {
			returnType: "workbookChartGridlines"
		},
		minorGridlines: {
			returnType: "workbookChartGridlines"
		},
		title: {
			returnType: "workbookChartAxisTitle"
		},
	},
	workbookChartAxisFormat: {
		font: {
			returnType: "workbookChartFont"
		},
		line: {
			returnType: "workbookChartLineFormat"
		},
	},
	workbookChartAxisTitle: {
		format: {
			returnType: "workbookChartAxisTitleFormat"
		},
	},
	workbookChartAxisTitleFormat: {
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookChartDataLabelFormat: {
		fill: {
			returnType: "workbookChartFill"
		},
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookChartDataLabels: {
		format: {
			returnType: "workbookChartDataLabelFormat"
		},
	},
	workbookChartFill: {

	},
	workbookChartFont: {

	},
	workbookChartGridlines: {
		format: {
			returnType: "workbookChartGridlinesFormat"
		},
	},
	workbookChartGridlinesFormat: {
		line: {
			returnType: "workbookChartLineFormat"
		},
	},
	workbookChartLegend: {
		format: {
			returnType: "workbookChartLegendFormat"
		},
	},
	workbookChartLegendFormat: {
		fill: {
			returnType: "workbookChartFill"
		},
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookChartLineFormat: {

	},
	workbookChartPoint: {
		format: {
			returnType: "workbookChartPointFormat"
		},
	},
	workbookChartPointFormat: {
		fill: {
			returnType: "workbookChartFill"
		},
	},
	workbookChartSeries: {
		format: {
			returnType: "workbookChartSeriesFormat"
		},
		points: {
			returnType: "workbookChartPoint"
		},
	},
	workbookChartSeriesFormat: {
		fill: {
			returnType: "workbookChartFill"
		},
		line: {
			returnType: "workbookChartLineFormat"
		},
	},
	workbookChartTitle: {
		format: {
			returnType: "workbookChartTitleFormat"
		},
	},
	workbookChartTitleFormat: {
		fill: {
			returnType: "workbookChartFill"
		},
		font: {
			returnType: "workbookChartFont"
		},
	},
	workbookComment: {
		replies: {
			returnType: "workbookCommentReply"
		},
	},
	workbookCommentReply: {

	},
	workbookFilter: {

	},
	workbookFormatProtection: {

	},
	workbookFunctionResult: {

	},
	workbookFunctions: {

	},
	workbookNamedItem: {
		worksheet: {
			returnType: "workbookWorksheet"
		},
	},
	workbookOperation: {

	},
	workbookPivotTable: {
		worksheet: {
			returnType: "workbookWorksheet"
		},
	},
	workbookRange: {
		format: {
			returnType: "workbookRangeFormat"
		},
		sort: {
			returnType: "workbookRangeSort"
		},
		worksheet: {
			returnType: "workbookWorksheet"
		},
	},
	workbookRangeBorder: {

	},
	workbookRangeFill: {

	},
	workbookRangeFont: {

	},
	workbookRangeFormat: {
		borders: {
			returnType: "workbookRangeBorder"
		},
		fill: {
			returnType: "workbookRangeFill"
		},
		font: {
			returnType: "workbookRangeFont"
		},
		protection: {
			returnType: "workbookFormatProtection"
		},
	},
	workbookRangeSort: {

	},
	workbookRangeView: {
		rows: {
			returnType: "workbookRangeView"
		},
	},
	workbookTable: {
		columns: {
			returnType: "workbookTableColumn"
		},
		rows: {
			returnType: "workbookTableRow"
		},
		sort: {
			returnType: "workbookTableSort"
		},
		worksheet: {
			returnType: "workbookWorksheet"
		},
	},
	workbookTableColumn: {
		filter: {
			returnType: "workbookFilter"
		},
	},
	workbookTableRow: {

	},
	workbookTableSort: {

	},
	workbookWorksheet: {
		charts: {
			returnType: "workbookChart"
		},
		names: {
			returnType: "workbookNamedItem"
		},
		pivotTables: {
			returnType: "workbookPivotTable"
		},
		protection: {
			returnType: "workbookWorksheetProtection"
		},
		tables: {
			returnType: "workbookTable"
		},
	},
	workbookWorksheetProtection: {

	},
	workflow: {
		executionScope: {
			returnType: "userProcessingResult"
		},
		runs: {
			returnType: "run"
		},
		taskReports: {
			returnType: "taskReport"
		},
		userProcessingResults: {
			returnType: "userProcessingResult"
		},
		versions: {
			returnType: "workflowVersion"
		},
	},
	workflowBase: {
		createdBy: {
			returnType: "user"
		},
		lastModifiedBy: {
			returnType: "user"
		},
		tasks: {
			returnType: "task"
		},
	},
	workflowTemplate: {
		tasks: {
			returnType: "task"
		},
	},
	workflowVersion: {

	},
	workforceIntegration: {

	},
	workingTimeSchedule: {

	},
	x509CertificateAuthenticationMethodConfiguration: {
		includeTargets: {
			returnType: "authenticationMethodTarget"
		},
	},
	x509CertificateCombinationConfiguration: {

	},
};