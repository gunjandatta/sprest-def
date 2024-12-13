import { IMapperMethod } from "./base";


/** Mapper */
export interface IMapper {
	_case: {
		properties?: Array<string>;

	},
	aadUserConversationMember: {
		properties?: Array<string>;
		user: IMapperMethod,
	},
	accessPackage: {
		properties?: Array<string>;
		accessPackagesIncompatibleWith: IMapperMethod,
		assignmentPolicies: IMapperMethod,
		catalog: IMapperMethod,
		incompatibleAccessPackages: IMapperMethod,
		incompatibleGroups: IMapperMethod,
		resourceRoleScopes: IMapperMethod,
	},
	accessPackageAssignment: {
		properties?: Array<string>;
		accessPackage: IMapperMethod,
		assignmentPolicy: IMapperMethod,
		target: IMapperMethod,
	},
	accessPackageAssignmentPolicy: {
		properties?: Array<string>;
		accessPackage: IMapperMethod,
		catalog: IMapperMethod,
		customExtensionStageSettings: IMapperMethod,
		questions: IMapperMethod,
	},
	accessPackageAssignmentRequest: {
		properties?: Array<string>;
		accessPackage: IMapperMethod,
		assignment: IMapperMethod,
		requestor: IMapperMethod,
	},
	accessPackageAssignmentRequestWorkflowExtension: {
		properties?: Array<string>;

	},
	accessPackageAssignmentWorkflowExtension: {
		properties?: Array<string>;

	},
	accessPackageCatalog: {
		properties?: Array<string>;
		accessPackages: IMapperMethod,
		customWorkflowExtensions: IMapperMethod,
		resourceRoles: IMapperMethod,
		resources: IMapperMethod,
		resourceScopes: IMapperMethod,
	},
	accessPackageMultipleChoiceQuestion: {
		properties?: Array<string>;

	},
	accessPackageQuestion: {
		properties?: Array<string>;

	},
	accessPackageResource: {
		properties?: Array<string>;
		environment: IMapperMethod,
		roles: IMapperMethod,
		scopes: IMapperMethod,
	},
	accessPackageResourceEnvironment: {
		properties?: Array<string>;
		resources: IMapperMethod,
	},
	accessPackageResourceRequest: {
		properties?: Array<string>;
		catalog: IMapperMethod,
		resource: IMapperMethod,
	},
	accessPackageResourceRole: {
		properties?: Array<string>;
		resource: IMapperMethod,
	},
	accessPackageResourceRoleScope: {
		properties?: Array<string>;
		role: IMapperMethod,
		scope: IMapperMethod,
	},
	accessPackageResourceScope: {
		properties?: Array<string>;
		resource: IMapperMethod,
	},
	accessPackageSubject: {
		properties?: Array<string>;
		connectedOrganization: IMapperMethod,
	},
	accessPackageTextInputQuestion: {
		properties?: Array<string>;

	},
	accessReviewHistoryDefinition: {
		properties?: Array<string>;
		instances: IMapperMethod,
	},
	accessReviewHistoryInstance: {
		properties?: Array<string>;

	},
	accessReviewInstance: {
		properties?: Array<string>;
		contactedReviewers: IMapperMethod,
		decisions: IMapperMethod,
		stages: IMapperMethod,
	},
	accessReviewInstanceDecisionItem: {
		properties?: Array<string>;
		insights: IMapperMethod,
	},
	accessReviewReviewer: {
		properties?: Array<string>;

	},
	accessReviewScheduleDefinition: {
		properties?: Array<string>;
		instances: IMapperMethod,
	},
	accessReviewSet: {
		properties?: Array<string>;
		definitions: IMapperMethod,
		historyDefinitions: IMapperMethod,
	},
	accessReviewStage: {
		properties?: Array<string>;
		decisions: IMapperMethod,
	},
	acronym: {
		properties?: Array<string>;

	},
	activityBasedTimeoutPolicy: {
		properties?: Array<string>;

	},
	activityHistoryItem: {
		properties?: Array<string>;
		activity: IMapperMethod,
	},
	addLargeGalleryViewOperation: {
		properties?: Array<string>;

	},
	admin: {
		properties?: Array<string>;
		edge: IMapperMethod,
		sharepoint: IMapperMethod,
		microsoft365Apps: IMapperMethod,
		serviceAnnouncement: IMapperMethod,
		reportSettings: IMapperMethod,
		people: IMapperMethod,
	},
	adminConsentRequestPolicy: {
		properties?: Array<string>;

	},
	adminMicrosoft365Apps: {
		properties?: Array<string>;
		installationOptions: IMapperMethod,
	},
	adminReportSettings: {
		properties?: Array<string>;

	},
	administrativeUnit: {
		properties?: Array<string>;
		members: IMapperMethod,
		scopedRoleMembers: IMapperMethod,
		extensions: IMapperMethod,
	},
	agreement: {
		properties?: Array<string>;
		acceptances: IMapperMethod,
		file: IMapperMethod,
		files: IMapperMethod,
	},
	agreementAcceptance: {
		properties?: Array<string>;

	},
	agreementFile: {
		properties?: Array<string>;
		localizations: IMapperMethod,
	},
	agreementFileLocalization: {
		properties?: Array<string>;
		versions: IMapperMethod,
	},
	agreementFileProperties: {
		properties?: Array<string>;

	},
	agreementFileVersion: {
		properties?: Array<string>;

	},
	alert: {
		properties?: Array<string>;

	},
	allowedValue: {
		properties?: Array<string>;

	},
	androidCompliancePolicy: {
		properties?: Array<string>;

	},
	androidCustomConfiguration: {
		properties?: Array<string>;

	},
	androidGeneralDeviceConfiguration: {
		properties?: Array<string>;

	},
	androidLobApp: {
		properties?: Array<string>;

	},
	androidManagedAppProtection: {
		properties?: Array<string>;
		apps: IMapperMethod,
		deploymentSummary: IMapperMethod,
	},
	androidManagedAppRegistration: {
		properties?: Array<string>;

	},
	androidStoreApp: {
		properties?: Array<string>;

	},
	androidWorkProfileCompliancePolicy: {
		properties?: Array<string>;

	},
	androidWorkProfileCustomConfiguration: {
		properties?: Array<string>;

	},
	androidWorkProfileGeneralDeviceConfiguration: {
		properties?: Array<string>;

	},
	anonymousGuestConversationMember: {
		properties?: Array<string>;

	},
	appCatalogs: {
		properties?: Array<string>;
		teamsApps: IMapperMethod,
	},
	appConsentApprovalRoute: {
		properties?: Array<string>;
		appConsentRequests: IMapperMethod,
	},
	appConsentRequest: {
		properties?: Array<string>;
		userConsentRequests: IMapperMethod,
	},
	appLogCollectionRequest: {
		properties?: Array<string>;

	},
	appManagementPolicy: {
		properties?: Array<string>;
		appliesTo: IMapperMethod,
	},
	appRoleAssignment: {
		properties?: Array<string>;

	},
	appScope: {
		properties?: Array<string>;

	},
	appleDeviceFeaturesConfigurationBase: {
		properties?: Array<string>;

	},
	appleManagedIdentityProvider: {
		properties?: Array<string>;

	},
	applePushNotificationCertificate: {
		properties?: Array<string>;

	},
	application: {
		properties?: Array<string>;
		appManagementPolicies: IMapperMethod,
		createdOnBehalfOf: IMapperMethod,
		extensionProperties: IMapperMethod,
		federatedIdentityCredentials: IMapperMethod,
		homeRealmDiscoveryPolicies: IMapperMethod,
		owners: IMapperMethod,
		tokenIssuancePolicies: IMapperMethod,
		tokenLifetimePolicies: IMapperMethod,
		synchronization: IMapperMethod,
	},
	applicationTemplate: {
		properties?: Array<string>;

	},
	approval: {
		properties?: Array<string>;
		stages: IMapperMethod,
	},
	approvalStage: {
		properties?: Array<string>;

	},
	article: {
		properties?: Array<string>;
		indicators: IMapperMethod,
	},
	articleIndicator: {
		properties?: Array<string>;

	},
	artifact: {
		properties?: Array<string>;

	},
	associatedTeamInfo: {
		properties?: Array<string>;

	},
	attachment: {
		properties?: Array<string>;

	},
	attachmentBase: {
		properties?: Array<string>;

	},
	attachmentSession: {
		properties?: Array<string>;

	},
	attackSimulationOperation: {
		properties?: Array<string>;

	},
	attackSimulationRoot: {
		properties?: Array<string>;
		endUserNotifications: IMapperMethod,
		landingPages: IMapperMethod,
		loginPages: IMapperMethod,
		operations: IMapperMethod,
		payloads: IMapperMethod,
		simulationAutomations: IMapperMethod,
		simulations: IMapperMethod,
		trainings: IMapperMethod,
	},
	attendanceRecord: {
		properties?: Array<string>;

	},
	attributeMappingFunctionSchema: {
		properties?: Array<string>;

	},
	attributeSet: {
		properties?: Array<string>;

	},
	audioRoutingGroup: {
		properties?: Array<string>;

	},
	auditEvent: {
		properties?: Array<string>;

	},
	auditLogRoot: {
		properties?: Array<string>;
		directoryAudits: IMapperMethod,
		provisioning: IMapperMethod,
		signIns: IMapperMethod,
	},
	authentication: {
		properties?: Array<string>;
		emailMethods: IMapperMethod,
		fido2Methods: IMapperMethod,
		methods: IMapperMethod,
		microsoftAuthenticatorMethods: IMapperMethod,
		operations: IMapperMethod,
		passwordMethods: IMapperMethod,
		phoneMethods: IMapperMethod,
		softwareOathMethods: IMapperMethod,
		temporaryAccessPassMethods: IMapperMethod,
		windowsHelloForBusinessMethods: IMapperMethod,
	},
	authenticationCombinationConfiguration: {
		properties?: Array<string>;

	},
	authenticationConditionApplication: {
		properties?: Array<string>;

	},
	authenticationContextClassReference: {
		properties?: Array<string>;

	},
	authenticationEventListener: {
		properties?: Array<string>;

	},
	authenticationEventsFlow: {
		properties?: Array<string>;

	},
	authenticationFlowsPolicy: {
		properties?: Array<string>;

	},
	authenticationMethod: {
		properties?: Array<string>;

	},
	authenticationMethodConfiguration: {
		properties?: Array<string>;

	},
	authenticationMethodModeDetail: {
		properties?: Array<string>;

	},
	authenticationMethodTarget: {
		properties?: Array<string>;

	},
	authenticationMethodsPolicy: {
		properties?: Array<string>;
		authenticationMethodConfigurations: IMapperMethod,
	},
	authenticationMethodsRoot: {
		properties?: Array<string>;
		userRegistrationDetails: IMapperMethod,
	},
	authenticationStrengthPolicy: {
		properties?: Array<string>;
		combinationConfigurations: IMapperMethod,
	},
	authenticationStrengthRoot: {
		properties?: Array<string>;
		authenticationMethodModes: IMapperMethod,
		policies: IMapperMethod,
	},
	authoredNote: {
		properties?: Array<string>;

	},
	authorityTemplate: {
		properties?: Array<string>;

	},
	authorizationPolicy: {
		properties?: Array<string>;

	},
	azureCommunicationServicesUserConversationMember: {
		properties?: Array<string>;

	},
	azureUsage: {
		properties?: Array<string>;
		billed: IMapperMethod,
		unbilled: IMapperMethod,
	},
	b2xIdentityUserFlow: {
		properties?: Array<string>;
		identityProviders: IMapperMethod,
		languages: IMapperMethod,
		userAttributeAssignments: IMapperMethod,
		userFlowIdentityProviders: IMapperMethod,
	},
	backupRestoreRoot: {
		properties?: Array<string>;
		driveInclusionRules: IMapperMethod,
		driveProtectionUnits: IMapperMethod,
		exchangeProtectionPolicies: IMapperMethod,
		exchangeRestoreSessions: IMapperMethod,
		mailboxInclusionRules: IMapperMethod,
		mailboxProtectionUnits: IMapperMethod,
		oneDriveForBusinessProtectionPolicies: IMapperMethod,
		oneDriveForBusinessRestoreSessions: IMapperMethod,
		protectionPolicies: IMapperMethod,
		protectionUnits: IMapperMethod,
		restorePoints: IMapperMethod,
		restoreSessions: IMapperMethod,
		serviceApps: IMapperMethod,
		sharePointProtectionPolicies: IMapperMethod,
		sharePointRestoreSessions: IMapperMethod,
		siteInclusionRules: IMapperMethod,
		siteProtectionUnits: IMapperMethod,
	},
	baseItem: {
		properties?: Array<string>;
		createdByUser: IMapperMethod,
		lastModifiedByUser: IMapperMethod,
	},
	baseItemVersion: {
		properties?: Array<string>;

	},
	baseSitePage: {
		properties?: Array<string>;

	},
	billedReconciliation: {
		properties?: Array<string>;

	},
	billedUsage: {
		properties?: Array<string>;

	},
	billing: {
		properties?: Array<string>;
		manifests: IMapperMethod,
		operations: IMapperMethod,
		reconciliation: IMapperMethod,
		usage: IMapperMethod,
	},
	billingReconciliation: {
		properties?: Array<string>;
		billed: IMapperMethod,
	},
	bitlocker: {
		properties?: Array<string>;
		recoveryKeys: IMapperMethod,
	},
	bitlockerRecoveryKey: {
		properties?: Array<string>;

	},
	bookingAppointment: {
		properties?: Array<string>;

	},
	bookingBusiness: {
		properties?: Array<string>;
		appointments: IMapperMethod,
		calendarView: IMapperMethod,
		customers: IMapperMethod,
		customQuestions: IMapperMethod,
		services: IMapperMethod,
		staffMembers: IMapperMethod,
	},
	bookingCurrency: {
		properties?: Array<string>;

	},
	bookingCustomQuestion: {
		properties?: Array<string>;

	},
	bookingCustomer: {
		properties?: Array<string>;

	},
	bookingCustomerBase: {
		properties?: Array<string>;

	},
	bookingService: {
		properties?: Array<string>;

	},
	bookingStaffMember: {
		properties?: Array<string>;

	},
	bookingStaffMemberBase: {
		properties?: Array<string>;

	},
	bookmark: {
		properties?: Array<string>;

	},
	browserSharedCookie: {
		properties?: Array<string>;

	},
	browserSite: {
		properties?: Array<string>;

	},
	browserSiteList: {
		properties?: Array<string>;
		sharedCookies: IMapperMethod,
		sites: IMapperMethod,
	},
	builtInIdentityProvider: {
		properties?: Array<string>;

	},
	bulkUpload: {
		properties?: Array<string>;

	},
	calendar: {
		properties?: Array<string>;
		calendarPermissions: IMapperMethod,
		calendarView: IMapperMethod,
		events: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	calendarGroup: {
		properties?: Array<string>;
		calendars: IMapperMethod,
	},
	calendarPermission: {
		properties?: Array<string>;

	},
	calendarSharingMessage: {
		properties?: Array<string>;

	},
	call: {
		properties?: Array<string>;
		audioRoutingGroups: IMapperMethod,
		contentSharingSessions: IMapperMethod,
		operations: IMapperMethod,
		participants: IMapperMethod,
	},
	callRecord: {
		properties?: Array<string>;
		organizer_v2: IMapperMethod,
		participants_v2: IMapperMethod,
		sessions: IMapperMethod,
	},
	callRecording: {
		properties?: Array<string>;

	},
	callTranscript: {
		properties?: Array<string>;

	},
	cancelMediaProcessingOperation: {
		properties?: Array<string>;

	},
	canvasLayout: {
		properties?: Array<string>;
		horizontalSections: IMapperMethod,
		verticalSection: IMapperMethod,
	},
	caseOperation: {
		properties?: Array<string>;

	},
	casesRoot: {
		properties?: Array<string>;
		ediscoveryCases: IMapperMethod,
	},
	categoryTemplate: {
		properties?: Array<string>;
		subcategories: IMapperMethod,
	},
	certificateBasedAuthConfiguration: {
		properties?: Array<string>;

	},
	changeTrackedEntity: {
		properties?: Array<string>;

	},
	channel: {
		properties?: Array<string>;
		filesFolder: IMapperMethod,
		members: IMapperMethod,
		messages: IMapperMethod,
		sharedWithTeams: IMapperMethod,
		tabs: IMapperMethod,
	},
	chat: {
		properties?: Array<string>;
		installedApps: IMapperMethod,
		lastMessagePreview: IMapperMethod,
		members: IMapperMethod,
		messages: IMapperMethod,
		permissionGrants: IMapperMethod,
		pinnedMessages: IMapperMethod,
		tabs: IMapperMethod,
	},
	chatMessage: {
		properties?: Array<string>;
		hostedContents: IMapperMethod,
		replies: IMapperMethod,
	},
	chatMessageHostedContent: {
		properties?: Array<string>;

	},
	chatMessageInfo: {
		properties?: Array<string>;

	},
	checklistItem: {
		properties?: Array<string>;

	},
	citationTemplate: {
		properties?: Array<string>;

	},
	claimsMappingPolicy: {
		properties?: Array<string>;

	},
	cloudClipboardItem: {
		properties?: Array<string>;

	},
	cloudClipboardRoot: {
		properties?: Array<string>;
		items: IMapperMethod,
	},
	cloudCommunications: {
		properties?: Array<string>;
		callRecords: IMapperMethod,
		calls: IMapperMethod,
		onlineMeetings: IMapperMethod,
		presences: IMapperMethod,
	},
	cloudPC: {
		properties?: Array<string>;

	},
	cloudPcAuditEvent: {
		properties?: Array<string>;

	},
	cloudPcDeviceImage: {
		properties?: Array<string>;

	},
	cloudPcGalleryImage: {
		properties?: Array<string>;

	},
	cloudPcOnPremisesConnection: {
		properties?: Array<string>;

	},
	cloudPcProvisioningPolicy: {
		properties?: Array<string>;
		assignments: IMapperMethod,
	},
	cloudPcProvisioningPolicyAssignment: {
		properties?: Array<string>;
		assignedUsers: IMapperMethod,
	},
	cloudPcUserSetting: {
		properties?: Array<string>;
		assignments: IMapperMethod,
	},
	cloudPcUserSettingAssignment: {
		properties?: Array<string>;

	},
	columnDefinition: {
		properties?: Array<string>;
		sourceColumn: IMapperMethod,
		update: IMapperMethod & {
			argNames: ["values"]
		},
	},
	columnLink: {
		properties?: Array<string>;

	},
	commsOperation: {
		properties?: Array<string>;

	},
	community: {
		properties?: Array<string>;
		group: IMapperMethod,
		owners: IMapperMethod,
	},
	companySubscription: {
		properties?: Array<string>;

	},
	compliance: {
		properties?: Array<string>;

	},
	complianceManagementPartner: {
		properties?: Array<string>;

	},
	conditionalAccessPolicy: {
		properties?: Array<string>;

	},
	conditionalAccessRoot: {
		properties?: Array<string>;
		authenticationStrength: IMapperMethod,
		authenticationContextClassReferences: IMapperMethod,
		namedLocations: IMapperMethod,
		policies: IMapperMethod,
		templates: IMapperMethod,
	},
	conditionalAccessTemplate: {
		properties?: Array<string>;

	},
	connectedOrganization: {
		properties?: Array<string>;
		externalSponsors: IMapperMethod,
		internalSponsors: IMapperMethod,
	},
	connectionOperation: {
		properties?: Array<string>;

	},
	contact: {
		properties?: Array<string>;
		extensions: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		photo: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	contactFolder: {
		properties?: Array<string>;
		childFolders: IMapperMethod,
		contacts: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	contentSharingSession: {
		properties?: Array<string>;

	},
	contentType: {
		properties?: Array<string>;
		base: IMapperMethod,
		baseTypes: IMapperMethod,
		columnLinks: IMapperMethod,
		columnPositions: IMapperMethod,
		columns: IMapperMethod,
		update: IMapperMethod & {
			argNames: ["values"]
		},
	},
	contract: {
		properties?: Array<string>;

	},
	conversation: {
		properties?: Array<string>;
		threads: IMapperMethod,
	},
	conversationMember: {
		properties?: Array<string>;

	},
	conversationThread: {
		properties?: Array<string>;
		posts: IMapperMethod,
	},
	countryNamedLocation: {
		properties?: Array<string>;

	},
	crossTenantAccessPolicy: {
		properties?: Array<string>;
		default: IMapperMethod,
		partners: IMapperMethod,
		templates: IMapperMethod,
	},
	crossTenantAccessPolicyConfigurationDefault: {
		properties?: Array<string>;

	},
	crossTenantAccessPolicyConfigurationPartner: {
		properties?: Array<string>;
		identitySynchronization: IMapperMethod,
	},
	crossTenantIdentitySyncPolicyPartner: {
		properties?: Array<string>;

	},
	customAuthenticationExtension: {
		properties?: Array<string>;

	},
	customCalloutExtension: {
		properties?: Array<string>;

	},
	customExtensionStageSetting: {
		properties?: Array<string>;
		customExtension: IMapperMethod,
	},
	customSecurityAttributeDefinition: {
		properties?: Array<string>;
		allowedValues: IMapperMethod,
	},
	customTaskExtension: {
		properties?: Array<string>;
		createdBy: IMapperMethod,
		lastModifiedBy: IMapperMethod,
	},
	dataPolicyOperation: {
		properties?: Array<string>;

	},
	dataSet: {
		properties?: Array<string>;

	},
	dataSource: {
		properties?: Array<string>;

	},
	dataSourceContainer: {
		properties?: Array<string>;

	},
	defaultManagedAppProtection: {
		properties?: Array<string>;
		apps: IMapperMethod,
		deploymentSummary: IMapperMethod,
	},
	delegatedAdminAccessAssignment: {
		properties?: Array<string>;

	},
	delegatedAdminCustomer: {
		properties?: Array<string>;
		serviceManagementDetails: IMapperMethod,
	},
	delegatedAdminRelationship: {
		properties?: Array<string>;
		accessAssignments: IMapperMethod,
		operations: IMapperMethod,
		requests: IMapperMethod,
	},
	delegatedAdminRelationshipOperation: {
		properties?: Array<string>;

	},
	delegatedAdminRelationshipRequest: {
		properties?: Array<string>;

	},
	delegatedAdminServiceManagementDetail: {
		properties?: Array<string>;

	},
	delegatedPermissionClassification: {
		properties?: Array<string>;

	},
	deletedChat: {
		properties?: Array<string>;

	},
	deletedItemContainer: {
		properties?: Array<string>;
		workflows: IMapperMethod,
	},
	deletedTeam: {
		properties?: Array<string>;
		channels: IMapperMethod,
	},
	deltaParticipants: {
		properties?: Array<string>;
		participants: IMapperMethod,
	},
	departmentTemplate: {
		properties?: Array<string>;

	},
	detectedApp: {
		properties?: Array<string>;
		managedDevices: IMapperMethod,
	},
	device: {
		properties?: Array<string>;
		memberOf: IMapperMethod,
		registeredOwners: IMapperMethod,
		registeredUsers: IMapperMethod,
		transitiveMemberOf: IMapperMethod,
		extensions: IMapperMethod,
	},
	deviceAndAppManagementRoleAssignment: {
		properties?: Array<string>;

	},
	deviceAndAppManagementRoleDefinition: {
		properties?: Array<string>;

	},
	deviceAppManagement: {
		properties?: Array<string>;
		managedEBooks: IMapperMethod,
		mobileAppCategories: IMapperMethod,
		mobileAppConfigurations: IMapperMethod,
		mobileApps: IMapperMethod,
		vppTokens: IMapperMethod,
		androidManagedAppProtections: IMapperMethod,
		defaultManagedAppProtections: IMapperMethod,
		iosManagedAppProtections: IMapperMethod,
		managedAppPolicies: IMapperMethod,
		managedAppRegistrations: IMapperMethod,
		managedAppStatuses: IMapperMethod,
		mdmWindowsInformationProtectionPolicies: IMapperMethod,
		targetedManagedAppConfigurations: IMapperMethod,
		windowsInformationProtectionPolicies: IMapperMethod,
	},
	deviceCategory: {
		properties?: Array<string>;

	},
	deviceComplianceActionItem: {
		properties?: Array<string>;

	},
	deviceComplianceDeviceOverview: {
		properties?: Array<string>;

	},
	deviceComplianceDeviceStatus: {
		properties?: Array<string>;

	},
	deviceCompliancePolicy: {
		properties?: Array<string>;
		assignments: IMapperMethod,
		deviceSettingStateSummaries: IMapperMethod,
		deviceStatuses: IMapperMethod,
		deviceStatusOverview: IMapperMethod,
		scheduledActionsForRule: IMapperMethod,
		userStatuses: IMapperMethod,
		userStatusOverview: IMapperMethod,
	},
	deviceCompliancePolicyAssignment: {
		properties?: Array<string>;

	},
	deviceCompliancePolicyDeviceStateSummary: {
		properties?: Array<string>;

	},
	deviceCompliancePolicySettingStateSummary: {
		properties?: Array<string>;
		deviceComplianceSettingStates: IMapperMethod,
	},
	deviceCompliancePolicyState: {
		properties?: Array<string>;

	},
	deviceComplianceScheduledActionForRule: {
		properties?: Array<string>;
		scheduledActionConfigurations: IMapperMethod,
	},
	deviceComplianceSettingState: {
		properties?: Array<string>;

	},
	deviceComplianceUserOverview: {
		properties?: Array<string>;

	},
	deviceComplianceUserStatus: {
		properties?: Array<string>;

	},
	deviceConfiguration: {
		properties?: Array<string>;
		assignments: IMapperMethod,
		deviceSettingStateSummaries: IMapperMethod,
		deviceStatuses: IMapperMethod,
		deviceStatusOverview: IMapperMethod,
		userStatuses: IMapperMethod,
		userStatusOverview: IMapperMethod,
	},
	deviceConfigurationAssignment: {
		properties?: Array<string>;

	},
	deviceConfigurationDeviceOverview: {
		properties?: Array<string>;

	},
	deviceConfigurationDeviceStateSummary: {
		properties?: Array<string>;

	},
	deviceConfigurationDeviceStatus: {
		properties?: Array<string>;

	},
	deviceConfigurationState: {
		properties?: Array<string>;

	},
	deviceConfigurationUserOverview: {
		properties?: Array<string>;

	},
	deviceConfigurationUserStatus: {
		properties?: Array<string>;

	},
	deviceEnrollmentConfiguration: {
		properties?: Array<string>;
		assignments: IMapperMethod,
	},
	deviceEnrollmentLimitConfiguration: {
		properties?: Array<string>;

	},
	deviceEnrollmentPlatformRestrictionsConfiguration: {
		properties?: Array<string>;

	},
	deviceEnrollmentWindowsHelloForBusinessConfiguration: {
		properties?: Array<string>;

	},
	deviceInstallState: {
		properties?: Array<string>;

	},
	deviceLocalCredentialInfo: {
		properties?: Array<string>;

	},
	deviceLogCollectionResponse: {
		properties?: Array<string>;

	},
	deviceManagement: {
		properties?: Array<string>;
		auditEvents: IMapperMethod,
		virtualEndpoint: IMapperMethod,
		termsAndConditions: IMapperMethod,
		deviceCompliancePolicies: IMapperMethod,
		deviceCompliancePolicyDeviceStateSummary: IMapperMethod,
		deviceCompliancePolicySettingStateSummaries: IMapperMethod,
		deviceConfigurationDeviceStateSummaries: IMapperMethod,
		deviceConfigurations: IMapperMethod,
		iosUpdateStatuses: IMapperMethod,
		softwareUpdateStatusSummary: IMapperMethod,
		complianceManagementPartners: IMapperMethod,
		conditionalAccessSettings: IMapperMethod,
		deviceCategories: IMapperMethod,
		deviceEnrollmentConfigurations: IMapperMethod,
		deviceManagementPartners: IMapperMethod,
		exchangeConnectors: IMapperMethod,
		mobileThreatDefenseConnectors: IMapperMethod,
		applePushNotificationCertificate: IMapperMethod,
		detectedApps: IMapperMethod,
		managedDeviceOverview: IMapperMethod,
		managedDevices: IMapperMethod,
		mobileAppTroubleshootingEvents: IMapperMethod,
		userExperienceAnalyticsAppHealthApplicationPerformance: IMapperMethod,
		userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDetails: IMapperMethod,
		userExperienceAnalyticsAppHealthApplicationPerformanceByAppVersionDeviceId: IMapperMethod,
		userExperienceAnalyticsAppHealthApplicationPerformanceByOSVersion: IMapperMethod,
		userExperienceAnalyticsAppHealthDeviceModelPerformance: IMapperMethod,
		userExperienceAnalyticsAppHealthDevicePerformance: IMapperMethod,
		userExperienceAnalyticsAppHealthDevicePerformanceDetails: IMapperMethod,
		userExperienceAnalyticsAppHealthOSVersionPerformance: IMapperMethod,
		userExperienceAnalyticsAppHealthOverview: IMapperMethod,
		userExperienceAnalyticsBaselines: IMapperMethod,
		userExperienceAnalyticsCategories: IMapperMethod,
		userExperienceAnalyticsDevicePerformance: IMapperMethod,
		userExperienceAnalyticsDeviceScores: IMapperMethod,
		userExperienceAnalyticsDeviceStartupHistory: IMapperMethod,
		userExperienceAnalyticsDeviceStartupProcesses: IMapperMethod,
		userExperienceAnalyticsDeviceStartupProcessPerformance: IMapperMethod,
		userExperienceAnalyticsMetricHistory: IMapperMethod,
		userExperienceAnalyticsModelScores: IMapperMethod,
		userExperienceAnalyticsOverview: IMapperMethod,
		userExperienceAnalyticsScoreHistory: IMapperMethod,
		userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: IMapperMethod,
		userExperienceAnalyticsWorkFromAnywhereMetrics: IMapperMethod,
		userExperienceAnalyticsWorkFromAnywhereModelPerformance: IMapperMethod,
		windowsMalwareInformation: IMapperMethod,
		importedWindowsAutopilotDeviceIdentities: IMapperMethod,
		windowsAutopilotDeviceIdentities: IMapperMethod,
		notificationMessageTemplates: IMapperMethod,
		resourceOperations: IMapperMethod,
		roleAssignments: IMapperMethod,
		roleDefinitions: IMapperMethod,
		remoteAssistancePartners: IMapperMethod,
		reports: IMapperMethod,
		telecomExpenseManagementPartners: IMapperMethod,
		troubleshootingEvents: IMapperMethod,
		windowsInformationProtectionAppLearningSummaries: IMapperMethod,
		windowsInformationProtectionNetworkLearningSummaries: IMapperMethod,
	},
	deviceManagementCachedReportConfiguration: {
		properties?: Array<string>;

	},
	deviceManagementExchangeConnector: {
		properties?: Array<string>;

	},
	deviceManagementExportJob: {
		properties?: Array<string>;

	},
	deviceManagementPartner: {
		properties?: Array<string>;

	},
	deviceManagementReports: {
		properties?: Array<string>;
		exportJobs: IMapperMethod,
	},
	deviceManagementTroubleshootingEvent: {
		properties?: Array<string>;

	},
	deviceRegistrationPolicy: {
		properties?: Array<string>;

	},
	directory: {
		properties?: Array<string>;
		deviceLocalCredentials: IMapperMethod,
		administrativeUnits: IMapperMethod,
		attributeSets: IMapperMethod,
		customSecurityAttributeDefinitions: IMapperMethod,
		deletedItems: IMapperMethod,
		federationConfigurations: IMapperMethod,
		onPremisesSynchronization: IMapperMethod,
		subscriptions: IMapperMethod,
	},
	directoryAudit: {
		properties?: Array<string>;

	},
	directoryDefinition: {
		properties?: Array<string>;

	},
	directoryObject: {
		properties?: Array<string>;

	},
	directoryObjectPartnerReference: {
		properties?: Array<string>;

	},
	directoryRole: {
		properties?: Array<string>;
		members: IMapperMethod,
		scopedMembers: IMapperMethod,
	},
	directoryRoleTemplate: {
		properties?: Array<string>;

	},
	dispositionReviewStage: {
		properties?: Array<string>;

	},
	documentSetVersion: {
		properties?: Array<string>;

	},
	domain: {
		properties?: Array<string>;
		domainNameReferences: IMapperMethod,
		federationConfiguration: IMapperMethod,
		rootDomain: IMapperMethod,
		serviceConfigurationRecords: IMapperMethod,
		verificationDnsRecords: IMapperMethod,
	},
	domainDnsCnameRecord: {
		properties?: Array<string>;

	},
	domainDnsMxRecord: {
		properties?: Array<string>;

	},
	domainDnsRecord: {
		properties?: Array<string>;

	},
	domainDnsSrvRecord: {
		properties?: Array<string>;

	},
	domainDnsTxtRecord: {
		properties?: Array<string>;

	},
	domainDnsUnavailableRecord: {
		properties?: Array<string>;

	},
	drive: {
		properties?: Array<string>;
		bundles: IMapperMethod,
		following: IMapperMethod,
		items: IMapperMethod,
		list: IMapperMethod,
		root: IMapperMethod,
		special: IMapperMethod,
	},
	driveItem: {
		properties?: Array<string>;
		workbook: IMapperMethod,
		analytics: IMapperMethod,
		children: IMapperMethod,
		listItem: IMapperMethod,
		permissions: IMapperMethod,
		retentionLabel: IMapperMethod,
		subscriptions: IMapperMethod,
		thumbnails: IMapperMethod,
		versions: IMapperMethod,
	},
	driveItemVersion: {
		properties?: Array<string>;

	},
	driveProtectionRule: {
		properties?: Array<string>;

	},
	driveProtectionUnit: {
		properties?: Array<string>;

	},
	driveRestoreArtifact: {
		properties?: Array<string>;

	},
	eBookInstallSummary: {
		properties?: Array<string>;

	},
	edge: {
		properties?: Array<string>;
		internetExplorerMode: IMapperMethod,
	},
	ediscoveryAddToReviewSetOperation: {
		properties?: Array<string>;
		reviewSet: IMapperMethod,
		search: IMapperMethod,
	},
	ediscoveryCase: {
		properties?: Array<string>;
		custodians: IMapperMethod,
		noncustodialDataSources: IMapperMethod,
		operations: IMapperMethod,
		reviewSets: IMapperMethod,
		searches: IMapperMethod,
		settings: IMapperMethod,
		tags: IMapperMethod,
	},
	ediscoveryCaseSettings: {
		properties?: Array<string>;

	},
	ediscoveryCustodian: {
		properties?: Array<string>;
		lastIndexOperation: IMapperMethod,
		siteSources: IMapperMethod,
		unifiedGroupSources: IMapperMethod,
		userSources: IMapperMethod,
	},
	ediscoveryEstimateOperation: {
		properties?: Array<string>;
		search: IMapperMethod,
	},
	ediscoveryExportOperation: {
		properties?: Array<string>;
		reviewSet: IMapperMethod,
		reviewSetQuery: IMapperMethod,
	},
	ediscoveryHoldOperation: {
		properties?: Array<string>;

	},
	ediscoveryIndexOperation: {
		properties?: Array<string>;

	},
	ediscoveryNoncustodialDataSource: {
		properties?: Array<string>;
		dataSource: IMapperMethod,
		lastIndexOperation: IMapperMethod,
	},
	ediscoveryPurgeDataOperation: {
		properties?: Array<string>;

	},
	ediscoveryReviewSet: {
		properties?: Array<string>;
		queries: IMapperMethod,
	},
	ediscoveryReviewSetQuery: {
		properties?: Array<string>;

	},
	ediscoveryReviewTag: {
		properties?: Array<string>;
		childTags: IMapperMethod,
		parent: IMapperMethod,
	},
	ediscoverySearch: {
		properties?: Array<string>;
		additionalSources: IMapperMethod,
		addToReviewSetOperation: IMapperMethod,
		custodianSources: IMapperMethod,
		lastEstimateStatisticsOperation: IMapperMethod,
		noncustodialSources: IMapperMethod,
	},
	ediscoverySearchExportOperation: {
		properties?: Array<string>;
		search: IMapperMethod,
	},
	ediscoveryTagOperation: {
		properties?: Array<string>;

	},
	editionUpgradeConfiguration: {
		properties?: Array<string>;

	},
	educationAssignment: {
		properties?: Array<string>;
		categories: IMapperMethod,
		gradingCategory: IMapperMethod,
		resources: IMapperMethod,
		rubric: IMapperMethod,
		submissions: IMapperMethod,
	},
	educationAssignmentDefaults: {
		properties?: Array<string>;

	},
	educationAssignmentResource: {
		properties?: Array<string>;

	},
	educationAssignmentSettings: {
		properties?: Array<string>;
		gradingCategories: IMapperMethod,
	},
	educationCategory: {
		properties?: Array<string>;

	},
	educationClass: {
		properties?: Array<string>;
		assignmentCategories: IMapperMethod,
		assignmentDefaults: IMapperMethod,
		assignments: IMapperMethod,
		assignmentSettings: IMapperMethod,
		modules: IMapperMethod,
		group: IMapperMethod,
		members: IMapperMethod,
		schools: IMapperMethod,
		teachers: IMapperMethod,
	},
	educationFeedbackOutcome: {
		properties?: Array<string>;

	},
	educationFeedbackResourceOutcome: {
		properties?: Array<string>;

	},
	educationGradingCategory: {
		properties?: Array<string>;

	},
	educationModule: {
		properties?: Array<string>;
		resources: IMapperMethod,
	},
	educationModuleResource: {
		properties?: Array<string>;

	},
	educationOrganization: {
		properties?: Array<string>;

	},
	educationOutcome: {
		properties?: Array<string>;

	},
	educationPointsOutcome: {
		properties?: Array<string>;

	},
	educationRoot: {
		properties?: Array<string>;
		classes: IMapperMethod,
		me: IMapperMethod,
		schools: IMapperMethod,
		users: IMapperMethod,
	},
	educationRubric: {
		properties?: Array<string>;

	},
	educationRubricOutcome: {
		properties?: Array<string>;

	},
	educationSchool: {
		properties?: Array<string>;
		administrativeUnit: IMapperMethod,
		classes: IMapperMethod,
		users: IMapperMethod,
	},
	educationSubmission: {
		properties?: Array<string>;
		outcomes: IMapperMethod,
		resources: IMapperMethod,
		submittedResources: IMapperMethod,
	},
	educationSubmissionResource: {
		properties?: Array<string>;

	},
	educationUser: {
		properties?: Array<string>;
		assignments: IMapperMethod,
		rubrics: IMapperMethod,
		classes: IMapperMethod,
		schools: IMapperMethod,
		taughtClasses: IMapperMethod,
		user: IMapperMethod,
	},
	emailAuthenticationMethod: {
		properties?: Array<string>;

	},
	emailAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		includeTargets: IMapperMethod,
	},
	emailFileAssessmentRequest: {
		properties?: Array<string>;

	},
	employeeExperience: {
		properties?: Array<string>;
		communities: IMapperMethod,
		engagementAsyncOperations: IMapperMethod,
		learningCourseActivities: IMapperMethod,
		learningProviders: IMapperMethod,
	},
	employeeExperienceUser: {
		properties?: Array<string>;
		learningCourseActivities: IMapperMethod,
	},
	endUserNotification: {
		properties?: Array<string>;
		details: IMapperMethod,
	},
	endUserNotificationDetail: {
		properties?: Array<string>;

	},
	endpoint: {
		properties?: Array<string>;

	},
	engagementAsyncOperation: {
		properties?: Array<string>;

	},
	enrollmentConfigurationAssignment: {
		properties?: Array<string>;

	},
	enrollmentTroubleshootingEvent: {
		properties?: Array<string>;

	},
	enterpriseCodeSigningCertificate: {
		properties?: Array<string>;

	},
	entitlementManagement: {
		properties?: Array<string>;
		accessPackageAssignmentApprovals: IMapperMethod,
		accessPackages: IMapperMethod,
		assignmentPolicies: IMapperMethod,
		assignmentRequests: IMapperMethod,
		assignments: IMapperMethod,
		catalogs: IMapperMethod,
		connectedOrganizations: IMapperMethod,
		resourceEnvironments: IMapperMethod,
		resourceRequests: IMapperMethod,
		resourceRoleScopes: IMapperMethod,
		resources: IMapperMethod,
		settings: IMapperMethod,
	},
	entitlementManagementSettings: {
		properties?: Array<string>;

	},
	entity: {
		properties?: Array<string>;

	},
	event: {
		properties?: Array<string>;
		attachments: IMapperMethod,
		calendar: IMapperMethod,
		extensions: IMapperMethod,
		instances: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	eventMessage: {
		properties?: Array<string>;
		event: IMapperMethod,
	},
	eventMessageRequest: {
		properties?: Array<string>;

	},
	eventMessageResponse: {
		properties?: Array<string>;

	},
	exchangeProtectionPolicy: {
		properties?: Array<string>;
		mailboxInclusionRules: IMapperMethod,
		mailboxProtectionUnits: IMapperMethod,
	},
	exchangeRestoreSession: {
		properties?: Array<string>;
		granularMailboxRestoreArtifacts: IMapperMethod,
		mailboxRestoreArtifacts: IMapperMethod,
	},
	exportSuccessOperation: {
		properties?: Array<string>;
		resourceLocation: IMapperMethod,
	},
	extension: {
		properties?: Array<string>;

	},
	extensionProperty: {
		properties?: Array<string>;

	},
	external: {
		properties?: Array<string>;
		connections: IMapperMethod,
	},
	externalActivity: {
		properties?: Array<string>;
		performedBy: IMapperMethod,
	},
	externalActivityResult: {
		properties?: Array<string>;

	},
	externalConnection: {
		properties?: Array<string>;
		groups: IMapperMethod,
		items: IMapperMethod,
		operations: IMapperMethod,
		schema: IMapperMethod,
	},
	externalDomainName: {
		properties?: Array<string>;

	},
	externalGroup: {
		properties?: Array<string>;
		members: IMapperMethod,
	},
	externalItem: {
		properties?: Array<string>;
		activities: IMapperMethod,
	},
	externalUsersSelfServiceSignUpEventsFlow: {
		properties?: Array<string>;

	},
	failedOperation: {
		properties?: Array<string>;

	},
	featureRolloutPolicy: {
		properties?: Array<string>;
		appliesTo: IMapperMethod,
	},
	federatedIdentityCredential: {
		properties?: Array<string>;

	},
	fido2AuthenticationMethod: {
		properties?: Array<string>;

	},
	fido2AuthenticationMethodConfiguration: {
		properties?: Array<string>;
		includeTargets: IMapperMethod,
	},
	fido2CombinationConfiguration: {
		properties?: Array<string>;

	},
	fieldValueSet: {
		properties?: Array<string>;

	},
	fileAssessmentRequest: {
		properties?: Array<string>;

	},
	fileAttachment: {
		properties?: Array<string>;

	},
	filePlanDescriptor: {
		properties?: Array<string>;
		authorityTemplate: IMapperMethod,
		categoryTemplate: IMapperMethod,
		citationTemplate: IMapperMethod,
		departmentTemplate: IMapperMethod,
		filePlanReferenceTemplate: IMapperMethod,
	},
	filePlanDescriptorTemplate: {
		properties?: Array<string>;

	},
	filePlanReferenceTemplate: {
		properties?: Array<string>;

	},
	fileStorage: {
		properties?: Array<string>;
		containers: IMapperMethod,
	},
	fileStorageContainer: {
		properties?: Array<string>;
		drive: IMapperMethod,
		permissions: IMapperMethod,
	},
	filterOperatorSchema: {
		properties?: Array<string>;

	},
	governanceInsight: {
		properties?: Array<string>;

	},
	granularMailboxRestoreArtifact: {
		properties?: Array<string>;

	},
	group: {
		properties?: Array<string>;
		sets: IMapperMethod,
	},
	groupLifecyclePolicy: {
		properties?: Array<string>;

	},
	groupSetting: {
		properties?: Array<string>;

	},
	groupSettingTemplate: {
		properties?: Array<string>;

	},
	healthIssue: {
		properties?: Array<string>;

	},
	homeRealmDiscoveryPolicy: {
		properties?: Array<string>;

	},
	horizontalSection: {
		properties?: Array<string>;
		columns: IMapperMethod,
	},
	horizontalSectionColumn: {
		properties?: Array<string>;
		webparts: IMapperMethod,
	},
	host: {
		properties?: Array<string>;
		childHostPairs: IMapperMethod,
		components: IMapperMethod,
		cookies: IMapperMethod,
		hostPairs: IMapperMethod,
		parentHostPairs: IMapperMethod,
		passiveDns: IMapperMethod,
		passiveDnsReverse: IMapperMethod,
		ports: IMapperMethod,
		reputation: IMapperMethod,
		sslCertificates: IMapperMethod,
		subdomains: IMapperMethod,
		trackers: IMapperMethod,
		whois: IMapperMethod,
	},
	hostComponent: {
		properties?: Array<string>;
		host: IMapperMethod,
	},
	hostCookie: {
		properties?: Array<string>;
		host: IMapperMethod,
	},
	hostPair: {
		properties?: Array<string>;
		childHost: IMapperMethod,
		parentHost: IMapperMethod,
	},
	hostPort: {
		properties?: Array<string>;
		host: IMapperMethod,
		mostRecentSslCertificate: IMapperMethod,
	},
	hostReputation: {
		properties?: Array<string>;

	},
	hostSslCertificate: {
		properties?: Array<string>;
		host: IMapperMethod,
		sslCertificate: IMapperMethod,
	},
	hostTracker: {
		properties?: Array<string>;
		host: IMapperMethod,
	},
	hostname: {
		properties?: Array<string>;

	},
	identity: {
		properties?: Array<string>;

	},
	identityApiConnector: {
		properties?: Array<string>;

	},
	identityBuiltInUserFlowAttribute: {
		properties?: Array<string>;

	},
	identityContainer: {
		properties?: Array<string>;
		healthIssues: IMapperMethod,
		sensors: IMapperMethod,
	},
	identityCustomUserFlowAttribute: {
		properties?: Array<string>;

	},
	identityGovernance: {
		properties?: Array<string>;
		lifecycleWorkflows: IMapperMethod,
		accessReviews: IMapperMethod,
		appConsent: IMapperMethod,
		termsOfUse: IMapperMethod,
		entitlementManagement: IMapperMethod,
		privilegedAccess: IMapperMethod,
	},
	identityProtectionRoot: {
		properties?: Array<string>;
		riskDetections: IMapperMethod,
		riskyServicePrincipals: IMapperMethod,
		riskyUsers: IMapperMethod,
		servicePrincipalRiskDetections: IMapperMethod,
	},
	identityProvider: {
		properties?: Array<string>;

	},
	identityProviderBase: {
		properties?: Array<string>;

	},
	identitySecurityDefaultsEnforcementPolicy: {
		properties?: Array<string>;

	},
	identityUserFlow: {
		properties?: Array<string>;

	},
	identityUserFlowAttribute: {
		properties?: Array<string>;

	},
	identityUserFlowAttributeAssignment: {
		properties?: Array<string>;
		userAttribute: IMapperMethod,
	},
	importedWindowsAutopilotDeviceIdentity: {
		properties?: Array<string>;

	},
	importedWindowsAutopilotDeviceIdentityUpload: {
		properties?: Array<string>;
		deviceIdentities: IMapperMethod,
	},
	incident: {
		properties?: Array<string>;
		alerts: IMapperMethod,
	},
	indicator: {
		properties?: Array<string>;
		artifact: IMapperMethod,
	},
	inferenceClassification: {
		properties?: Array<string>;
		overrides: IMapperMethod,
	},
	inferenceClassificationOverride: {
		properties?: Array<string>;

	},
	informationProtection: {
		properties?: Array<string>;
		bitlocker: IMapperMethod,
		threatAssessmentRequests: IMapperMethod,
	},
	insights: {
		properties?: Array<string>;

	},
	insightsSettings: {
		properties?: Array<string>;

	},
	intelligenceProfile: {
		properties?: Array<string>;
		indicators: IMapperMethod,
	},
	intelligenceProfileIndicator: {
		properties?: Array<string>;

	},
	internalDomainFederation: {
		properties?: Array<string>;

	},
	internetExplorerMode: {
		properties?: Array<string>;
		siteLists: IMapperMethod,
	},
	invitation: {
		properties?: Array<string>;
		invitedUser: IMapperMethod,
		invitedUserSponsors: IMapperMethod,
	},
	inviteParticipantsOperation: {
		properties?: Array<string>;

	},
	iosCertificateProfile: {
		properties?: Array<string>;

	},
	iosCompliancePolicy: {
		properties?: Array<string>;

	},
	iosCustomConfiguration: {
		properties?: Array<string>;

	},
	iosDeviceFeaturesConfiguration: {
		properties?: Array<string>;

	},
	iosGeneralDeviceConfiguration: {
		properties?: Array<string>;

	},
	iosLobApp: {
		properties?: Array<string>;

	},
	iosLobAppProvisioningConfigurationAssignment: {
		properties?: Array<string>;

	},
	iosManagedAppProtection: {
		properties?: Array<string>;
		apps: IMapperMethod,
		deploymentSummary: IMapperMethod,
	},
	iosManagedAppRegistration: {
		properties?: Array<string>;

	},
	iosMobileAppConfiguration: {
		properties?: Array<string>;

	},
	iosStoreApp: {
		properties?: Array<string>;

	},
	iosUpdateConfiguration: {
		properties?: Array<string>;

	},
	iosUpdateDeviceStatus: {
		properties?: Array<string>;

	},
	iosVppApp: {
		properties?: Array<string>;

	},
	iosVppEBook: {
		properties?: Array<string>;

	},
	iosVppEBookAssignment: {
		properties?: Array<string>;

	},
	iosiPadOSWebClip: {
		properties?: Array<string>;

	},
	ipAddress: {
		properties?: Array<string>;

	},
	ipNamedLocation: {
		properties?: Array<string>;

	},
	itemActivity: {
		properties?: Array<string>;
		driveItem: IMapperMethod,
	},
	itemActivityStat: {
		properties?: Array<string>;
		activities: IMapperMethod,
	},
	itemAnalytics: {
		properties?: Array<string>;
		allTime: IMapperMethod,
		itemActivityStats: IMapperMethod,
		lastSevenDays: IMapperMethod,
	},
	itemAttachment: {
		properties?: Array<string>;
		item: IMapperMethod,
	},
	itemInsights: {
		properties?: Array<string>;

	},
	itemRetentionLabel: {
		properties?: Array<string>;

	},
	labelsRoot: {
		properties?: Array<string>;
		authorities: IMapperMethod,
		categories: IMapperMethod,
		citations: IMapperMethod,
		departments: IMapperMethod,
		filePlanReferences: IMapperMethod,
		retentionLabels: IMapperMethod,
	},
	landingPage: {
		properties?: Array<string>;
		details: IMapperMethod,
	},
	landingPageDetail: {
		properties?: Array<string>;

	},
	learningAssignment: {
		properties?: Array<string>;

	},
	learningContent: {
		properties?: Array<string>;

	},
	learningCourseActivity: {
		properties?: Array<string>;

	},
	learningProvider: {
		properties?: Array<string>;
		learningContents: IMapperMethod,
		learningCourseActivities: IMapperMethod,
	},
	learningSelfInitiatedCourse: {
		properties?: Array<string>;

	},
	licenseDetails: {
		properties?: Array<string>;

	},
	lifecycleManagementSettings: {
		properties?: Array<string>;

	},
	lifecycleWorkflowsContainer: {
		properties?: Array<string>;
		customTaskExtensions: IMapperMethod,
		deletedItems: IMapperMethod,
		insights: IMapperMethod,
		settings: IMapperMethod,
		taskDefinitions: IMapperMethod,
		workflows: IMapperMethod,
		workflowTemplates: IMapperMethod,
	},
	linkedResource: {
		properties?: Array<string>;

	},
	list: {
		properties?: Array<string>;
		columns: IMapperMethod,
		contentTypes: IMapperMethod,
		drive: IMapperMethod,
		items: IMapperMethod,
		operations: IMapperMethod,
		subscriptions: IMapperMethod,
		update: IMapperMethod & {
			argNames: ["values"]
		},
	},
	listItem: {
		properties?: Array<string>;
		analytics: IMapperMethod,
		documentSetVersions: IMapperMethod,
		driveItem: IMapperMethod,
		fields: IMapperMethod,
		versions: IMapperMethod,
		extractSensitivityLabel: IMapperMethod & {
			argNames: ["values"]
		},
		setSensitivityLabel: IMapperMethod & {
			argNames: ["values"]
		},
		update: IMapperMethod & {
			argNames: ["values"]
		},
	},
	listItemVersion: {
		properties?: Array<string>;
		fields: IMapperMethod,
	},
	localizedNotificationMessage: {
		properties?: Array<string>;

	},
	loginPage: {
		properties?: Array<string>;

	},
	longRunningOperation: {
		properties?: Array<string>;

	},
	m365AppsInstallationOptions: {
		properties?: Array<string>;

	},
	macOSCompliancePolicy: {
		properties?: Array<string>;

	},
	macOSCustomConfiguration: {
		properties?: Array<string>;

	},
	macOSDeviceFeaturesConfiguration: {
		properties?: Array<string>;

	},
	macOSDmgApp: {
		properties?: Array<string>;

	},
	macOSGeneralDeviceConfiguration: {
		properties?: Array<string>;

	},
	macOSLobApp: {
		properties?: Array<string>;

	},
	macOSMicrosoftDefenderApp: {
		properties?: Array<string>;

	},
	macOSMicrosoftEdgeApp: {
		properties?: Array<string>;

	},
	macOSOfficeSuiteApp: {
		properties?: Array<string>;

	},
	mailAssessmentRequest: {
		properties?: Array<string>;

	},
	mailFolder: {
		properties?: Array<string>;
		childFolders: IMapperMethod,
		messageRules: IMapperMethod,
		messages: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	mailSearchFolder: {
		properties?: Array<string>;

	},
	mailboxProtectionRule: {
		properties?: Array<string>;

	},
	mailboxProtectionUnit: {
		properties?: Array<string>;

	},
	mailboxRestoreArtifact: {
		properties?: Array<string>;

	},
	malwareStateForWindowsDevice: {
		properties?: Array<string>;

	},
	managedAndroidLobApp: {
		properties?: Array<string>;

	},
	managedAndroidStoreApp: {
		properties?: Array<string>;

	},
	managedApp: {
		properties?: Array<string>;

	},
	managedAppConfiguration: {
		properties?: Array<string>;

	},
	managedAppOperation: {
		properties?: Array<string>;

	},
	managedAppPolicy: {
		properties?: Array<string>;

	},
	managedAppPolicyDeploymentSummary: {
		properties?: Array<string>;

	},
	managedAppProtection: {
		properties?: Array<string>;

	},
	managedAppRegistration: {
		properties?: Array<string>;
		appliedPolicies: IMapperMethod,
		intendedPolicies: IMapperMethod,
		operations: IMapperMethod,
	},
	managedAppStatus: {
		properties?: Array<string>;

	},
	managedAppStatusRaw: {
		properties?: Array<string>;

	},
	managedDevice: {
		properties?: Array<string>;
		deviceCompliancePolicyStates: IMapperMethod,
		deviceConfigurationStates: IMapperMethod,
		deviceCategory: IMapperMethod,
		logCollectionRequests: IMapperMethod,
		users: IMapperMethod,
		windowsProtectionState: IMapperMethod,
	},
	managedDeviceMobileAppConfiguration: {
		properties?: Array<string>;
		assignments: IMapperMethod,
		deviceStatuses: IMapperMethod,
		deviceStatusSummary: IMapperMethod,
		userStatuses: IMapperMethod,
		userStatusSummary: IMapperMethod,
	},
	managedDeviceMobileAppConfigurationAssignment: {
		properties?: Array<string>;

	},
	managedDeviceMobileAppConfigurationDeviceStatus: {
		properties?: Array<string>;

	},
	managedDeviceMobileAppConfigurationDeviceSummary: {
		properties?: Array<string>;

	},
	managedDeviceMobileAppConfigurationUserStatus: {
		properties?: Array<string>;

	},
	managedDeviceMobileAppConfigurationUserSummary: {
		properties?: Array<string>;

	},
	managedDeviceOverview: {
		properties?: Array<string>;

	},
	managedEBook: {
		properties?: Array<string>;
		assignments: IMapperMethod,
		deviceStates: IMapperMethod,
		installSummary: IMapperMethod,
		userStateSummary: IMapperMethod,
	},
	managedEBookAssignment: {
		properties?: Array<string>;

	},
	managedIOSLobApp: {
		properties?: Array<string>;

	},
	managedIOSStoreApp: {
		properties?: Array<string>;

	},
	managedMobileApp: {
		properties?: Array<string>;

	},
	managedMobileLobApp: {
		properties?: Array<string>;
		contentVersions: IMapperMethod,
	},
	manifest: {
		properties?: Array<string>;

	},
	mdmWindowsInformationProtectionPolicy: {
		properties?: Array<string>;

	},
	meetingAttendanceReport: {
		properties?: Array<string>;
		attendanceRecords: IMapperMethod,
	},
	membershipOutlierInsight: {
		properties?: Array<string>;
		container: IMapperMethod,
		lastModifiedBy: IMapperMethod,
		member: IMapperMethod,
	},
	message: {
		properties?: Array<string>;
		attachments: IMapperMethod,
		extensions: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	messageRule: {
		properties?: Array<string>;

	},
	microsoftAccountUserConversationMember: {
		properties?: Array<string>;

	},
	microsoftAuthenticatorAuthenticationMethod: {
		properties?: Array<string>;
		device: IMapperMethod,
	},
	microsoftAuthenticatorAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		includeTargets: IMapperMethod,
	},
	microsoftAuthenticatorAuthenticationMethodTarget: {
		properties?: Array<string>;

	},
	microsoftStoreForBusinessApp: {
		properties?: Array<string>;

	},
	mobileApp: {
		properties?: Array<string>;
		assignments: IMapperMethod,
		categories: IMapperMethod,
	},
	mobileAppAssignment: {
		properties?: Array<string>;

	},
	mobileAppCategory: {
		properties?: Array<string>;

	},
	mobileAppContent: {
		properties?: Array<string>;
		containedApps: IMapperMethod,
		files: IMapperMethod,
	},
	mobileAppContentFile: {
		properties?: Array<string>;

	},
	mobileAppTroubleshootingEvent: {
		properties?: Array<string>;
		appLogCollectionRequests: IMapperMethod,
	},
	mobileContainedApp: {
		properties?: Array<string>;

	},
	mobileLobApp: {
		properties?: Array<string>;
		contentVersions: IMapperMethod,
	},
	mobileThreatDefenseConnector: {
		properties?: Array<string>;

	},
	multiTenantOrganization: {
		properties?: Array<string>;
		joinRequest: IMapperMethod,
		tenants: IMapperMethod,
	},
	multiTenantOrganizationIdentitySyncPolicyTemplate: {
		properties?: Array<string>;

	},
	multiTenantOrganizationJoinRequestRecord: {
		properties?: Array<string>;

	},
	multiTenantOrganizationMember: {
		properties?: Array<string>;

	},
	multiTenantOrganizationPartnerConfigurationTemplate: {
		properties?: Array<string>;

	},
	multiValueLegacyExtendedProperty: {
		properties?: Array<string>;

	},
	muteParticipantOperation: {
		properties?: Array<string>;

	},
	namedLocation: {
		properties?: Array<string>;

	},
	networkAdapter: {
		properties?: Array<string>;

	},
	notebook: {
		properties?: Array<string>;
		sectionGroups: IMapperMethod,
		sections: IMapperMethod,
	},
	notificationMessageTemplate: {
		properties?: Array<string>;
		localizedNotificationMessages: IMapperMethod,
	},
	oAuth2PermissionGrant: {
		properties?: Array<string>;

	},
	offerShiftRequest: {
		properties?: Array<string>;

	},
	officeGraphInsights: {
		properties?: Array<string>;
		shared: IMapperMethod,
		trending: IMapperMethod,
		used: IMapperMethod,
	},
	onAttributeCollectionListener: {
		properties?: Array<string>;

	},
	onAuthenticationMethodLoadStartListener: {
		properties?: Array<string>;

	},
	onInteractiveAuthFlowStartListener: {
		properties?: Array<string>;

	},
	onPremisesConditionalAccessSettings: {
		properties?: Array<string>;

	},
	onPremisesDirectorySynchronization: {
		properties?: Array<string>;

	},
	onTokenIssuanceStartCustomExtension: {
		properties?: Array<string>;

	},
	onTokenIssuanceStartListener: {
		properties?: Array<string>;

	},
	onUserCreateStartListener: {
		properties?: Array<string>;

	},
	oneDriveForBusinessProtectionPolicy: {
		properties?: Array<string>;
		driveInclusionRules: IMapperMethod,
		driveProtectionUnits: IMapperMethod,
	},
	oneDriveForBusinessRestoreSession: {
		properties?: Array<string>;
		driveRestoreArtifacts: IMapperMethod,
	},
	onenote: {
		properties?: Array<string>;
		notebooks: IMapperMethod,
		operations: IMapperMethod,
		pages: IMapperMethod,
		resources: IMapperMethod,
		sectionGroups: IMapperMethod,
		sections: IMapperMethod,
	},
	onenoteEntityBaseModel: {
		properties?: Array<string>;

	},
	onenoteEntityHierarchyModel: {
		properties?: Array<string>;

	},
	onenoteEntitySchemaObjectModel: {
		properties?: Array<string>;

	},
	onenoteOperation: {
		properties?: Array<string>;

	},
	onenotePage: {
		properties?: Array<string>;
		parentNotebook: IMapperMethod,
		parentSection: IMapperMethod,
	},
	onenoteResource: {
		properties?: Array<string>;

	},
	onenoteSection: {
		properties?: Array<string>;
		pages: IMapperMethod,
		parentNotebook: IMapperMethod,
		parentSectionGroup: IMapperMethod,
	},
	onlineMeeting: {
		properties?: Array<string>;
		recordings: IMapperMethod,
		transcripts: IMapperMethod,
	},
	onlineMeetingBase: {
		properties?: Array<string>;
		attendanceReports: IMapperMethod,
	},
	openShift: {
		properties?: Array<string>;

	},
	openShiftChangeRequest: {
		properties?: Array<string>;

	},
	openTypeExtension: {
		properties?: Array<string>;

	},
	operation: {
		properties?: Array<string>;

	},
	orgContact: {
		properties?: Array<string>;
		directReports: IMapperMethod,
		manager: IMapperMethod,
		memberOf: IMapperMethod,
		transitiveMemberOf: IMapperMethod,
	},
	organization: {
		properties?: Array<string>;
		branding: IMapperMethod,
		certificateBasedAuthConfiguration: IMapperMethod,
		extensions: IMapperMethod,
	},
	organizationalBranding: {
		properties?: Array<string>;
		localizations: IMapperMethod,
	},
	organizationalBrandingLocalization: {
		properties?: Array<string>;

	},
	organizationalBrandingProperties: {
		properties?: Array<string>;

	},
	organizer: {
		properties?: Array<string>;

	},
	outlookCategory: {
		properties?: Array<string>;

	},
	outlookItem: {
		properties?: Array<string>;

	},
	outlookUser: {
		properties?: Array<string>;
		masterCategories: IMapperMethod,
	},
	participant: {
		properties?: Array<string>;

	},
	participantBase: {
		properties?: Array<string>;

	},
	participantJoiningNotification: {
		properties?: Array<string>;
		call: IMapperMethod,
	},
	participantLeftNotification: {
		properties?: Array<string>;
		call: IMapperMethod,
	},
	partners: {
		properties?: Array<string>;
		billing: IMapperMethod,
	},
	passiveDnsRecord: {
		properties?: Array<string>;
		artifact: IMapperMethod,
		parentHost: IMapperMethod,
	},
	passwordAuthenticationMethod: {
		properties?: Array<string>;

	},
	payload: {
		properties?: Array<string>;

	},
	peopleAdminSettings: {
		properties?: Array<string>;
		profileCardProperties: IMapperMethod,
		pronouns: IMapperMethod,
		itemInsights: IMapperMethod,
	},
	permission: {
		properties?: Array<string>;
		update: IMapperMethod & {
			argNames: ["values"]
		},
	},
	permissionGrantConditionSet: {
		properties?: Array<string>;

	},
	permissionGrantPolicy: {
		properties?: Array<string>;
		excludes: IMapperMethod,
		includes: IMapperMethod,
	},
	person: {
		properties?: Array<string>;

	},
	phoneAuthenticationMethod: {
		properties?: Array<string>;

	},
	pinnedChatMessageInfo: {
		properties?: Array<string>;
		message: IMapperMethod,
	},
	place: {
		properties?: Array<string>;

	},
	planner: {
		properties?: Array<string>;
		buckets: IMapperMethod,
		plans: IMapperMethod,
		tasks: IMapperMethod,
	},
	plannerAssignedToTaskBoardTaskFormat: {
		properties?: Array<string>;

	},
	plannerBucket: {
		properties?: Array<string>;
		tasks: IMapperMethod,
	},
	plannerBucketTaskBoardTaskFormat: {
		properties?: Array<string>;

	},
	plannerGroup: {
		properties?: Array<string>;
		plans: IMapperMethod,
	},
	plannerPlan: {
		properties?: Array<string>;
		buckets: IMapperMethod,
		details: IMapperMethod,
		tasks: IMapperMethod,
	},
	plannerPlanDetails: {
		properties?: Array<string>;

	},
	plannerProgressTaskBoardTaskFormat: {
		properties?: Array<string>;

	},
	plannerTask: {
		properties?: Array<string>;
		assignedToTaskBoardFormat: IMapperMethod,
		bucketTaskBoardFormat: IMapperMethod,
		details: IMapperMethod,
		progressTaskBoardFormat: IMapperMethod,
	},
	plannerTaskDetails: {
		properties?: Array<string>;

	},
	plannerUser: {
		properties?: Array<string>;
		plans: IMapperMethod,
		tasks: IMapperMethod,
	},
	playPromptOperation: {
		properties?: Array<string>;

	},
	policyBase: {
		properties?: Array<string>;

	},
	policyRoot: {
		properties?: Array<string>;
		authenticationMethodsPolicy: IMapperMethod,
		authenticationStrengthPolicies: IMapperMethod,
		authenticationFlowsPolicy: IMapperMethod,
		deviceRegistrationPolicy: IMapperMethod,
		activityBasedTimeoutPolicies: IMapperMethod,
		appManagementPolicies: IMapperMethod,
		authorizationPolicy: IMapperMethod,
		claimsMappingPolicies: IMapperMethod,
		crossTenantAccessPolicy: IMapperMethod,
		defaultAppManagementPolicy: IMapperMethod,
		homeRealmDiscoveryPolicies: IMapperMethod,
		permissionGrantPolicies: IMapperMethod,
		tokenIssuancePolicies: IMapperMethod,
		tokenLifetimePolicies: IMapperMethod,
		featureRolloutPolicies: IMapperMethod,
		adminConsentRequestPolicy: IMapperMethod,
		conditionalAccessPolicies: IMapperMethod,
		identitySecurityDefaultsEnforcementPolicy: IMapperMethod,
		roleManagementPolicies: IMapperMethod,
		roleManagementPolicyAssignments: IMapperMethod,
	},
	policyTemplate: {
		properties?: Array<string>;
		multiTenantOrganizationIdentitySynchronization: IMapperMethod,
		multiTenantOrganizationPartnerConfiguration: IMapperMethod,
	},
	post: {
		properties?: Array<string>;
		attachments: IMapperMethod,
		extensions: IMapperMethod,
		inReplyTo: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	presence: {
		properties?: Array<string>;

	},
	print: {
		properties?: Array<string>;
		connectors: IMapperMethod,
		operations: IMapperMethod,
		printers: IMapperMethod,
		services: IMapperMethod,
		shares: IMapperMethod,
		taskDefinitions: IMapperMethod,
	},
	printConnector: {
		properties?: Array<string>;

	},
	printDocument: {
		properties?: Array<string>;

	},
	printJob: {
		properties?: Array<string>;
		documents: IMapperMethod,
		tasks: IMapperMethod,
	},
	printOperation: {
		properties?: Array<string>;

	},
	printService: {
		properties?: Array<string>;
		endpoints: IMapperMethod,
	},
	printServiceEndpoint: {
		properties?: Array<string>;

	},
	printTask: {
		properties?: Array<string>;
		definition: IMapperMethod,
		trigger: IMapperMethod,
	},
	printTaskDefinition: {
		properties?: Array<string>;
		tasks: IMapperMethod,
	},
	printTaskTrigger: {
		properties?: Array<string>;
		definition: IMapperMethod,
	},
	printUsage: {
		properties?: Array<string>;

	},
	printUsageByPrinter: {
		properties?: Array<string>;

	},
	printUsageByUser: {
		properties?: Array<string>;

	},
	printer: {
		properties?: Array<string>;
		connectors: IMapperMethod,
		shares: IMapperMethod,
		taskTriggers: IMapperMethod,
	},
	printerBase: {
		properties?: Array<string>;
		jobs: IMapperMethod,
	},
	printerCreateOperation: {
		properties?: Array<string>;
		printer: IMapperMethod,
	},
	printerShare: {
		properties?: Array<string>;
		allowedGroups: IMapperMethod,
		allowedUsers: IMapperMethod,
		printer: IMapperMethod,
	},
	privacy: {
		properties?: Array<string>;
		subjectRightsRequests: IMapperMethod,
	},
	privilegedAccessGroup: {
		properties?: Array<string>;
		assignmentApprovals: IMapperMethod,
		assignmentScheduleInstances: IMapperMethod,
		assignmentScheduleRequests: IMapperMethod,
		assignmentSchedules: IMapperMethod,
		eligibilityScheduleInstances: IMapperMethod,
		eligibilityScheduleRequests: IMapperMethod,
		eligibilitySchedules: IMapperMethod,
	},
	privilegedAccessGroupAssignmentSchedule: {
		properties?: Array<string>;
		activatedUsing: IMapperMethod,
		group: IMapperMethod,
		principal: IMapperMethod,
	},
	privilegedAccessGroupAssignmentScheduleInstance: {
		properties?: Array<string>;
		activatedUsing: IMapperMethod,
		group: IMapperMethod,
		principal: IMapperMethod,
	},
	privilegedAccessGroupAssignmentScheduleRequest: {
		properties?: Array<string>;
		activatedUsing: IMapperMethod,
		group: IMapperMethod,
		principal: IMapperMethod,
		targetSchedule: IMapperMethod,
	},
	privilegedAccessGroupEligibilitySchedule: {
		properties?: Array<string>;
		group: IMapperMethod,
		principal: IMapperMethod,
	},
	privilegedAccessGroupEligibilityScheduleInstance: {
		properties?: Array<string>;
		group: IMapperMethod,
		principal: IMapperMethod,
	},
	privilegedAccessGroupEligibilityScheduleRequest: {
		properties?: Array<string>;
		group: IMapperMethod,
		principal: IMapperMethod,
		targetSchedule: IMapperMethod,
	},
	privilegedAccessRoot: {
		properties?: Array<string>;
		group: IMapperMethod,
	},
	privilegedAccessSchedule: {
		properties?: Array<string>;

	},
	privilegedAccessScheduleInstance: {
		properties?: Array<string>;

	},
	privilegedAccessScheduleRequest: {
		properties?: Array<string>;

	},
	profileCardProperty: {
		properties?: Array<string>;

	},
	profilePhoto: {
		properties?: Array<string>;

	},
	pronounsSettings: {
		properties?: Array<string>;

	},
	protectionPolicyBase: {
		properties?: Array<string>;

	},
	protectionRuleBase: {
		properties?: Array<string>;

	},
	protectionUnitBase: {
		properties?: Array<string>;

	},
	provisioningObjectSummary: {
		properties?: Array<string>;

	},
	qna: {
		properties?: Array<string>;

	},
	rbacApplication: {
		properties?: Array<string>;
		resourceNamespaces: IMapperMethod,
		roleAssignments: IMapperMethod,
		roleDefinitions: IMapperMethod,
		roleAssignmentScheduleInstances: IMapperMethod,
		roleAssignmentScheduleRequests: IMapperMethod,
		roleAssignmentSchedules: IMapperMethod,
		roleEligibilityScheduleInstances: IMapperMethod,
		roleEligibilityScheduleRequests: IMapperMethod,
		roleEligibilitySchedules: IMapperMethod,
	},
	recordOperation: {
		properties?: Array<string>;

	},
	referenceAttachment: {
		properties?: Array<string>;

	},
	relation: {
		properties?: Array<string>;
		fromTerm: IMapperMethod,
		set: IMapperMethod,
		toTerm: IMapperMethod,
	},
	relyingPartyDetailedSummary: {
		properties?: Array<string>;

	},
	remoteAssistancePartner: {
		properties?: Array<string>;

	},
	remoteDesktopSecurityConfiguration: {
		properties?: Array<string>;
		targetDeviceGroups: IMapperMethod,
	},
	reportRoot: {
		properties?: Array<string>;
		authenticationMethods: IMapperMethod,
		partners: IMapperMethod,
		dailyPrintUsageByPrinter: IMapperMethod,
		dailyPrintUsageByUser: IMapperMethod,
		monthlyPrintUsageByPrinter: IMapperMethod,
		monthlyPrintUsageByUser: IMapperMethod,
		security: IMapperMethod,
	},
	request: {
		properties?: Array<string>;

	},
	resellerDelegatedAdminRelationship: {
		properties?: Array<string>;

	},
	resourceOperation: {
		properties?: Array<string>;

	},
	resourceSpecificPermissionGrant: {
		properties?: Array<string>;

	},
	restoreArtifactBase: {
		properties?: Array<string>;
		restorePoint: IMapperMethod,
	},
	restorePoint: {
		properties?: Array<string>;
		protectionUnit: IMapperMethod,
	},
	restoreSessionBase: {
		properties?: Array<string>;

	},
	retentionEvent: {
		properties?: Array<string>;
		retentionEventType: IMapperMethod,
	},
	retentionEventType: {
		properties?: Array<string>;

	},
	retentionLabel: {
		properties?: Array<string>;
		descriptors: IMapperMethod,
		dispositionReviewStages: IMapperMethod,
		retentionEventType: IMapperMethod,
	},
	richLongRunningOperation: {
		properties?: Array<string>;

	},
	riskDetection: {
		properties?: Array<string>;

	},
	riskyServicePrincipal: {
		properties?: Array<string>;
		history: IMapperMethod,
	},
	riskyServicePrincipalHistoryItem: {
		properties?: Array<string>;

	},
	riskyUser: {
		properties?: Array<string>;
		history: IMapperMethod,
	},
	riskyUserHistoryItem: {
		properties?: Array<string>;

	},
	roleAssignment: {
		properties?: Array<string>;
		roleDefinition: IMapperMethod,
	},
	roleDefinition: {
		properties?: Array<string>;
		roleAssignments: IMapperMethod,
	},
	roleManagement: {
		properties?: Array<string>;
		directory: IMapperMethod,
		entitlementManagement: IMapperMethod,
	},
	room: {
		properties?: Array<string>;

	},
	roomList: {
		properties?: Array<string>;
		rooms: IMapperMethod,
	},
	run: {
		properties?: Array<string>;
		taskProcessingResults: IMapperMethod,
		userProcessingResults: IMapperMethod,
	},
	runningOperation: {
		properties?: Array<string>;

	},
	samlOrWsFedExternalDomainFederation: {
		properties?: Array<string>;
		domains: IMapperMethod,
	},
	samlOrWsFedProvider: {
		properties?: Array<string>;

	},
	schedule: {
		properties?: Array<string>;
		offerShiftRequests: IMapperMethod,
		openShiftChangeRequests: IMapperMethod,
		openShifts: IMapperMethod,
		schedulingGroups: IMapperMethod,
		shifts: IMapperMethod,
		swapShiftsChangeRequests: IMapperMethod,
		timeOffReasons: IMapperMethod,
		timeOffRequests: IMapperMethod,
		timesOff: IMapperMethod,
	},
	scheduleChangeRequest: {
		properties?: Array<string>;

	},
	schedulingGroup: {
		properties?: Array<string>;

	},
	schema: {
		properties?: Array<string>;

	},
	schemaExtension: {
		properties?: Array<string>;

	},
	scopedRoleMembership: {
		properties?: Array<string>;

	},
	search: {
		properties?: Array<string>;

	},
	searchAnswer: {
		properties?: Array<string>;

	},
	searchEntity: {
		properties?: Array<string>;
		acronyms: IMapperMethod,
		bookmarks: IMapperMethod,
		qnas: IMapperMethod,
	},
	sectionGroup: {
		properties?: Array<string>;
		parentNotebook: IMapperMethod,
		parentSectionGroup: IMapperMethod,
		sectionGroups: IMapperMethod,
		sections: IMapperMethod,
	},
	secureScore: {
		properties?: Array<string>;

	},
	secureScoreControlProfile: {
		properties?: Array<string>;

	},
	security: {
		properties?: Array<string>;
		subjectRightsRequests: IMapperMethod,
		cases: IMapperMethod,
		identities: IMapperMethod,
		alerts_v2: IMapperMethod,
		incidents: IMapperMethod,
		attackSimulation: IMapperMethod,
		labels: IMapperMethod,
		triggers: IMapperMethod,
		triggerTypes: IMapperMethod,
		alerts: IMapperMethod,
		secureScoreControlProfiles: IMapperMethod,
		secureScores: IMapperMethod,
		threatIntelligence: IMapperMethod,
	},
	securityReportsRoot: {
		properties?: Array<string>;

	},
	segment: {
		properties?: Array<string>;

	},
	sendDtmfTonesOperation: {
		properties?: Array<string>;

	},
	sensor: {
		properties?: Array<string>;
		healthIssues: IMapperMethod,
	},
	serviceAnnouncement: {
		properties?: Array<string>;
		healthOverviews: IMapperMethod,
		issues: IMapperMethod,
		messages: IMapperMethod,
	},
	serviceAnnouncementAttachment: {
		properties?: Array<string>;

	},
	serviceAnnouncementBase: {
		properties?: Array<string>;

	},
	serviceApp: {
		properties?: Array<string>;

	},
	serviceHealth: {
		properties?: Array<string>;
		issues: IMapperMethod,
	},
	serviceHealthIssue: {
		properties?: Array<string>;

	},
	servicePrincipal: {
		properties?: Array<string>;
		appManagementPolicies: IMapperMethod,
		appRoleAssignedTo: IMapperMethod,
		appRoleAssignments: IMapperMethod,
		claimsMappingPolicies: IMapperMethod,
		createdObjects: IMapperMethod,
		delegatedPermissionClassifications: IMapperMethod,
		endpoints: IMapperMethod,
		federatedIdentityCredentials: IMapperMethod,
		homeRealmDiscoveryPolicies: IMapperMethod,
		memberOf: IMapperMethod,
		oauth2PermissionGrants: IMapperMethod,
		ownedObjects: IMapperMethod,
		owners: IMapperMethod,
		remoteDesktopSecurityConfiguration: IMapperMethod,
		tokenIssuancePolicies: IMapperMethod,
		tokenLifetimePolicies: IMapperMethod,
		transitiveMemberOf: IMapperMethod,
		synchronization: IMapperMethod,
	},
	servicePrincipalRiskDetection: {
		properties?: Array<string>;

	},
	serviceStorageQuotaBreakdown: {
		properties?: Array<string>;

	},
	serviceUpdateMessage: {
		properties?: Array<string>;
		attachments: IMapperMethod,
	},
	session: {
		properties?: Array<string>;
		segments: IMapperMethod,
	},
	set: {
		properties?: Array<string>;
		children: IMapperMethod,
		parentGroup: IMapperMethod,
		relations: IMapperMethod,
		terms: IMapperMethod,
	},
	settingStateDeviceSummary: {
		properties?: Array<string>;

	},
	sharePointProtectionPolicy: {
		properties?: Array<string>;
		siteInclusionRules: IMapperMethod,
		siteProtectionUnits: IMapperMethod,
	},
	sharePointRestoreSession: {
		properties?: Array<string>;
		siteRestoreArtifacts: IMapperMethod,
	},
	sharedDriveItem: {
		properties?: Array<string>;
		driveItem: IMapperMethod,
		items: IMapperMethod,
		list: IMapperMethod,
		listItem: IMapperMethod,
		permission: IMapperMethod,
		root: IMapperMethod,
		site: IMapperMethod,
	},
	sharedInsight: {
		properties?: Array<string>;
		lastSharedMethod: IMapperMethod,
		resource: IMapperMethod,
	},
	sharedPCConfiguration: {
		properties?: Array<string>;

	},
	sharedWithChannelTeamInfo: {
		properties?: Array<string>;
		allowedMembers: IMapperMethod,
	},
	sharepoint: {
		properties?: Array<string>;
		settings: IMapperMethod,
	},
	sharepointSettings: {
		properties?: Array<string>;

	},
	shift: {
		properties?: Array<string>;

	},
	shiftPreferences: {
		properties?: Array<string>;

	},
	signIn: {
		properties?: Array<string>;

	},
	simulation: {
		properties?: Array<string>;
		landingPage: IMapperMethod,
		loginPage: IMapperMethod,
		payload: IMapperMethod,
	},
	simulationAutomation: {
		properties?: Array<string>;
		runs: IMapperMethod,
	},
	simulationAutomationRun: {
		properties?: Array<string>;

	},
	singleValueLegacyExtendedProperty: {
		properties?: Array<string>;

	},
	site: {
		properties?: Array<string>;
		analytics: IMapperMethod,
		columns: IMapperMethod,
		contentTypes: IMapperMethod,
		drive: IMapperMethod,
		drives: IMapperMethod,
		externalColumns: IMapperMethod,
		items: IMapperMethod,
		lists: IMapperMethod,
		operations: IMapperMethod,
		pages: IMapperMethod,
		permissions: IMapperMethod,
		sites: IMapperMethod,
		termStore: IMapperMethod,
		termStores: IMapperMethod,
		onenote: IMapperMethod,
	},
	sitePage: {
		properties?: Array<string>;
		canvasLayout: IMapperMethod,
		webParts: IMapperMethod,
	},
	siteProtectionRule: {
		properties?: Array<string>;

	},
	siteProtectionUnit: {
		properties?: Array<string>;

	},
	siteRestoreArtifact: {
		properties?: Array<string>;

	},
	siteSource: {
		properties?: Array<string>;
		site: IMapperMethod,
	},
	sites: {
		properties?: Array<string>;
		add: IMapperMethod & {
			argNames: ["values"]
		},
	},
	skypeForBusinessUserConversationMember: {
		properties?: Array<string>;

	},
	skypeUserConversationMember: {
		properties?: Array<string>;

	},
	smsAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		includeTargets: IMapperMethod,
	},
	smsAuthenticationMethodTarget: {
		properties?: Array<string>;

	},
	socialIdentityProvider: {
		properties?: Array<string>;

	},
	softwareOathAuthenticationMethod: {
		properties?: Array<string>;

	},
	softwareOathAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		includeTargets: IMapperMethod,
	},
	softwareUpdateStatusSummary: {
		properties?: Array<string>;

	},
	solutionsRoot: {
		properties?: Array<string>;
		bookingBusinesses: IMapperMethod,
		bookingCurrencies: IMapperMethod,
		backupRestore: IMapperMethod,
		virtualEvents: IMapperMethod,
	},
	sslCertificate: {
		properties?: Array<string>;
		relatedHosts: IMapperMethod,
	},
	standardWebPart: {
		properties?: Array<string>;

	},
	startHoldMusicOperation: {
		properties?: Array<string>;

	},
	stopHoldMusicOperation: {
		properties?: Array<string>;

	},
	storage: {
		properties?: Array<string>;
		fileStorage: IMapperMethod,
		settings: IMapperMethod,
	},
	storageQuotaBreakdown: {
		properties?: Array<string>;

	},
	storageSettings: {
		properties?: Array<string>;
		quota: IMapperMethod,
	},
	store: {
		properties?: Array<string>;
		groups: IMapperMethod,
		sets: IMapperMethod,
	},
	stsPolicy: {
		properties?: Array<string>;
		appliesTo: IMapperMethod,
	},
	subcategoryTemplate: {
		properties?: Array<string>;

	},
	subdomain: {
		properties?: Array<string>;
		host: IMapperMethod,
	},
	subjectRightsRequest: {
		properties?: Array<string>;
		approvers: IMapperMethod,
		collaborators: IMapperMethod,
		notes: IMapperMethod,
		team: IMapperMethod,
	},
	subscribeToToneOperation: {
		properties?: Array<string>;

	},
	subscribedSku: {
		properties?: Array<string>;

	},
	subscription: {
		properties?: Array<string>;

	},
	swapShiftsChangeRequest: {
		properties?: Array<string>;

	},
	synchronization: {
		properties?: Array<string>;
		jobs: IMapperMethod,
		templates: IMapperMethod,
	},
	synchronizationJob: {
		properties?: Array<string>;
		bulkUpload: IMapperMethod,
		schema: IMapperMethod,
	},
	synchronizationSchema: {
		properties?: Array<string>;
		directories: IMapperMethod,
	},
	synchronizationTemplate: {
		properties?: Array<string>;
		schema: IMapperMethod,
	},
	tag: {
		properties?: Array<string>;

	},
	targetDeviceGroup: {
		properties?: Array<string>;

	},
	targetedManagedAppConfiguration: {
		properties?: Array<string>;
		apps: IMapperMethod,
		assignments: IMapperMethod,
		deploymentSummary: IMapperMethod,
	},
	targetedManagedAppPolicyAssignment: {
		properties?: Array<string>;

	},
	targetedManagedAppProtection: {
		properties?: Array<string>;
		assignments: IMapperMethod,
	},
	task: {
		properties?: Array<string>;
		taskProcessingResults: IMapperMethod,
	},
	taskDefinition: {
		properties?: Array<string>;

	},
	taskFileAttachment: {
		properties?: Array<string>;

	},
	taskProcessingResult: {
		properties?: Array<string>;
		subject: IMapperMethod,
		task: IMapperMethod,
	},
	taskReport: {
		properties?: Array<string>;
		task: IMapperMethod,
		taskDefinition: IMapperMethod,
		taskProcessingResults: IMapperMethod,
	},
	team: {
		properties?: Array<string>;
		allChannels: IMapperMethod,
		channels: IMapperMethod,
		group: IMapperMethod,
		incomingChannels: IMapperMethod,
		installedApps: IMapperMethod,
		members: IMapperMethod,
		operations: IMapperMethod,
		permissionGrants: IMapperMethod,
		photo: IMapperMethod,
		primaryChannel: IMapperMethod,
		tags: IMapperMethod,
		template: IMapperMethod,
		schedule: IMapperMethod,
	},
	teamInfo: {
		properties?: Array<string>;
		team: IMapperMethod,
	},
	teamsApp: {
		properties?: Array<string>;
		appDefinitions: IMapperMethod,
	},
	teamsAppDefinition: {
		properties?: Array<string>;
		bot: IMapperMethod,
	},
	teamsAppInstallation: {
		properties?: Array<string>;
		teamsApp: IMapperMethod,
		teamsAppDefinition: IMapperMethod,
	},
	teamsAppSettings: {
		properties?: Array<string>;

	},
	teamsAsyncOperation: {
		properties?: Array<string>;

	},
	teamsTab: {
		properties?: Array<string>;
		teamsApp: IMapperMethod,
	},
	teamsTemplate: {
		properties?: Array<string>;

	},
	teamwork: {
		properties?: Array<string>;
		workforceIntegrations: IMapperMethod,
		deletedChats: IMapperMethod,
		deletedTeams: IMapperMethod,
		teamsAppSettings: IMapperMethod,
	},
	teamworkBot: {
		properties?: Array<string>;

	},
	teamworkHostedContent: {
		properties?: Array<string>;

	},
	teamworkTag: {
		properties?: Array<string>;
		members: IMapperMethod,
	},
	teamworkTagMember: {
		properties?: Array<string>;

	},
	telecomExpenseManagementPartner: {
		properties?: Array<string>;

	},
	temporaryAccessPassAuthenticationMethod: {
		properties?: Array<string>;

	},
	temporaryAccessPassAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		includeTargets: IMapperMethod,
	},
	tenantAppManagementPolicy: {
		properties?: Array<string>;

	},
	tenantRelationship: {
		properties?: Array<string>;
		multiTenantOrganization: IMapperMethod,
		delegatedAdminCustomers: IMapperMethod,
		delegatedAdminRelationships: IMapperMethod,
	},
	term: {
		properties?: Array<string>;
		children: IMapperMethod,
		relations: IMapperMethod,
		set: IMapperMethod,
	},
	termsAndConditions: {
		properties?: Array<string>;
		acceptanceStatuses: IMapperMethod,
		assignments: IMapperMethod,
	},
	termsAndConditionsAcceptanceStatus: {
		properties?: Array<string>;
		termsAndConditions: IMapperMethod,
	},
	termsAndConditionsAssignment: {
		properties?: Array<string>;

	},
	termsOfUseContainer: {
		properties?: Array<string>;
		agreementAcceptances: IMapperMethod,
		agreements: IMapperMethod,
	},
	textWebPart: {
		properties?: Array<string>;

	},
	threatAssessmentRequest: {
		properties?: Array<string>;
		results: IMapperMethod,
	},
	threatAssessmentResult: {
		properties?: Array<string>;

	},
	threatIntelligence: {
		properties?: Array<string>;
		articleIndicators: IMapperMethod,
		articles: IMapperMethod,
		hostComponents: IMapperMethod,
		hostCookies: IMapperMethod,
		hostPairs: IMapperMethod,
		hostPorts: IMapperMethod,
		hosts: IMapperMethod,
		hostSslCertificates: IMapperMethod,
		hostTrackers: IMapperMethod,
		intelligenceProfileIndicators: IMapperMethod,
		intelProfiles: IMapperMethod,
		passiveDnsRecords: IMapperMethod,
		sslCertificates: IMapperMethod,
		subdomains: IMapperMethod,
		vulnerabilities: IMapperMethod,
		whoisHistoryRecords: IMapperMethod,
		whoisRecords: IMapperMethod,
	},
	thumbnailSet: {
		properties?: Array<string>;

	},
	timeOff: {
		properties?: Array<string>;

	},
	timeOffReason: {
		properties?: Array<string>;

	},
	timeOffRequest: {
		properties?: Array<string>;

	},
	todo: {
		properties?: Array<string>;
		lists: IMapperMethod,
	},
	todoTask: {
		properties?: Array<string>;
		attachments: IMapperMethod,
		attachmentSessions: IMapperMethod,
		checklistItems: IMapperMethod,
		extensions: IMapperMethod,
		linkedResources: IMapperMethod,
	},
	todoTaskList: {
		properties?: Array<string>;
		extensions: IMapperMethod,
		tasks: IMapperMethod,
	},
	tokenIssuancePolicy: {
		properties?: Array<string>;

	},
	tokenLifetimePolicy: {
		properties?: Array<string>;

	},
	training: {
		properties?: Array<string>;
		languageDetails: IMapperMethod,
	},
	trainingLanguageDetail: {
		properties?: Array<string>;

	},
	trending: {
		properties?: Array<string>;
		resource: IMapperMethod,
	},
	triggerTypesRoot: {
		properties?: Array<string>;
		retentionEventTypes: IMapperMethod,
	},
	triggersRoot: {
		properties?: Array<string>;
		retentionEvents: IMapperMethod,
	},
	unbilledUsage: {
		properties?: Array<string>;

	},
	unclassifiedArtifact: {
		properties?: Array<string>;

	},
	unifiedGroupSource: {
		properties?: Array<string>;
		group: IMapperMethod,
	},
	unifiedRbacResourceAction: {
		properties?: Array<string>;

	},
	unifiedRbacResourceNamespace: {
		properties?: Array<string>;
		resourceActions: IMapperMethod,
	},
	unifiedRoleAssignment: {
		properties?: Array<string>;
		appScope: IMapperMethod,
		directoryScope: IMapperMethod,
		principal: IMapperMethod,
		roleDefinition: IMapperMethod,
	},
	unifiedRoleAssignmentSchedule: {
		properties?: Array<string>;
		activatedUsing: IMapperMethod,
	},
	unifiedRoleAssignmentScheduleInstance: {
		properties?: Array<string>;
		activatedUsing: IMapperMethod,
	},
	unifiedRoleAssignmentScheduleRequest: {
		properties?: Array<string>;
		activatedUsing: IMapperMethod,
		appScope: IMapperMethod,
		directoryScope: IMapperMethod,
		principal: IMapperMethod,
		roleDefinition: IMapperMethod,
		targetSchedule: IMapperMethod,
	},
	unifiedRoleDefinition: {
		properties?: Array<string>;
		inheritsPermissionsFrom: IMapperMethod,
	},
	unifiedRoleEligibilitySchedule: {
		properties?: Array<string>;

	},
	unifiedRoleEligibilityScheduleInstance: {
		properties?: Array<string>;

	},
	unifiedRoleEligibilityScheduleRequest: {
		properties?: Array<string>;
		appScope: IMapperMethod,
		directoryScope: IMapperMethod,
		principal: IMapperMethod,
		roleDefinition: IMapperMethod,
		targetSchedule: IMapperMethod,
	},
	unifiedRoleManagementPolicy: {
		properties?: Array<string>;
		effectiveRules: IMapperMethod,
		rules: IMapperMethod,
	},
	unifiedRoleManagementPolicyApprovalRule: {
		properties?: Array<string>;

	},
	unifiedRoleManagementPolicyAssignment: {
		properties?: Array<string>;
		policy: IMapperMethod,
	},
	unifiedRoleManagementPolicyAuthenticationContextRule: {
		properties?: Array<string>;

	},
	unifiedRoleManagementPolicyEnablementRule: {
		properties?: Array<string>;

	},
	unifiedRoleManagementPolicyExpirationRule: {
		properties?: Array<string>;

	},
	unifiedRoleManagementPolicyNotificationRule: {
		properties?: Array<string>;

	},
	unifiedRoleManagementPolicyRule: {
		properties?: Array<string>;

	},
	unifiedRoleScheduleBase: {
		properties?: Array<string>;
		appScope: IMapperMethod,
		directoryScope: IMapperMethod,
		principal: IMapperMethod,
		roleDefinition: IMapperMethod,
	},
	unifiedRoleScheduleInstanceBase: {
		properties?: Array<string>;
		appScope: IMapperMethod,
		directoryScope: IMapperMethod,
		principal: IMapperMethod,
		roleDefinition: IMapperMethod,
	},
	unifiedStorageQuota: {
		properties?: Array<string>;
		services: IMapperMethod,
	},
	unmuteParticipantOperation: {
		properties?: Array<string>;

	},
	updateRecordingStatusOperation: {
		properties?: Array<string>;

	},
	urlAssessmentRequest: {
		properties?: Array<string>;

	},
	usedInsight: {
		properties?: Array<string>;
		resource: IMapperMethod,
	},
	user: {
		properties?: Array<string>;
		appRoleAssignments: IMapperMethod,
		createdObjects: IMapperMethod,
		directReports: IMapperMethod,
		licenseDetails: IMapperMethod,
		manager: IMapperMethod,
		memberOf: IMapperMethod,
		oauth2PermissionGrants: IMapperMethod,
		ownedDevices: IMapperMethod,
		ownedObjects: IMapperMethod,
		registeredDevices: IMapperMethod,
		scopedRoleMemberOf: IMapperMethod,
		sponsors: IMapperMethod,
		transitiveMemberOf: IMapperMethod,
		calendar: IMapperMethod,
		calendarGroups: IMapperMethod,
		calendars: IMapperMethod,
		calendarView: IMapperMethod,
		contactFolders: IMapperMethod,
		contacts: IMapperMethod,
		events: IMapperMethod,
		inferenceClassification: IMapperMethod,
		mailFolders: IMapperMethod,
		messages: IMapperMethod,
		outlook: IMapperMethod,
		people: IMapperMethod,
		drive: IMapperMethod,
		drives: IMapperMethod,
		followedSites: IMapperMethod,
		extensions: IMapperMethod,
		agreementAcceptances: IMapperMethod,
		managedDevices: IMapperMethod,
		managedAppRegistrations: IMapperMethod,
		deviceManagementTroubleshootingEvents: IMapperMethod,
		planner: IMapperMethod,
		insights: IMapperMethod,
		settings: IMapperMethod,
		onenote: IMapperMethod,
		cloudClipboard: IMapperMethod,
		photo: IMapperMethod,
		photos: IMapperMethod,
		activities: IMapperMethod,
		onlineMeetings: IMapperMethod,
		presence: IMapperMethod,
		authentication: IMapperMethod,
		chats: IMapperMethod,
		joinedTeams: IMapperMethod,
		permissionGrants: IMapperMethod,
		teamwork: IMapperMethod,
		solutions: IMapperMethod,
		todo: IMapperMethod,
		employeeExperience: IMapperMethod,
	},
	userActivity: {
		properties?: Array<string>;
		historyItems: IMapperMethod,
	},
	userConsentRequest: {
		properties?: Array<string>;
		approval: IMapperMethod,
	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsAppHealthAppPerformanceByOSVersion: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsAppHealthApplicationPerformance: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsAppHealthDeviceModelPerformance: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsAppHealthDevicePerformance: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsAppHealthDevicePerformanceDetails: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsAppHealthOSVersionPerformance: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsBaseline: {
		properties?: Array<string>;
		appHealthMetrics: IMapperMethod,
		batteryHealthMetrics: IMapperMethod,
		bestPracticesMetrics: IMapperMethod,
		deviceBootPerformanceMetrics: IMapperMethod,
		rebootAnalyticsMetrics: IMapperMethod,
		resourcePerformanceMetrics: IMapperMethod,
		workFromAnywhereMetrics: IMapperMethod,
	},
	userExperienceAnalyticsCategory: {
		properties?: Array<string>;
		metricValues: IMapperMethod,
	},
	userExperienceAnalyticsDevicePerformance: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsDeviceScores: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsDeviceStartupHistory: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsDeviceStartupProcess: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsDeviceStartupProcessPerformance: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsMetric: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsMetricHistory: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsModelScores: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsOverview: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsScoreHistory: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsWorkFromAnywhereDevice: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: {
		properties?: Array<string>;

	},
	userExperienceAnalyticsWorkFromAnywhereMetric: {
		properties?: Array<string>;
		metricDevices: IMapperMethod,
	},
	userExperienceAnalyticsWorkFromAnywhereModelPerformance: {
		properties?: Array<string>;

	},
	userFlowLanguageConfiguration: {
		properties?: Array<string>;
		defaultPages: IMapperMethod,
		overridesPages: IMapperMethod,
	},
	userFlowLanguagePage: {
		properties?: Array<string>;

	},
	userInsightsSettings: {
		properties?: Array<string>;

	},
	userInstallStateSummary: {
		properties?: Array<string>;
		deviceStates: IMapperMethod,
	},
	userProcessingResult: {
		properties?: Array<string>;
		subject: IMapperMethod,
		taskProcessingResults: IMapperMethod,
	},
	userRegistrationDetails: {
		properties?: Array<string>;

	},
	userScopeTeamsAppInstallation: {
		properties?: Array<string>;
		chat: IMapperMethod,
	},
	userSettings: {
		properties?: Array<string>;
		itemInsights: IMapperMethod,
		windows: IMapperMethod,
		shiftPreferences: IMapperMethod,
		storage: IMapperMethod,
	},
	userSignInInsight: {
		properties?: Array<string>;

	},
	userSolutionRoot: {
		properties?: Array<string>;
		workingTimeSchedule: IMapperMethod,
	},
	userSource: {
		properties?: Array<string>;

	},
	userStorage: {
		properties?: Array<string>;
		quota: IMapperMethod,
	},
	userTeamwork: {
		properties?: Array<string>;
		associatedTeams: IMapperMethod,
		installedApps: IMapperMethod,
	},
	verticalSection: {
		properties?: Array<string>;
		webparts: IMapperMethod,
	},
	virtualEndpoint: {
		properties?: Array<string>;
		auditEvents: IMapperMethod,
		cloudPCs: IMapperMethod,
		deviceImages: IMapperMethod,
		galleryImages: IMapperMethod,
		onPremisesConnections: IMapperMethod,
		provisioningPolicies: IMapperMethod,
		userSettings: IMapperMethod,
	},
	virtualEvent: {
		properties?: Array<string>;
		presenters: IMapperMethod,
		sessions: IMapperMethod,
	},
	virtualEventPresenter: {
		properties?: Array<string>;

	},
	virtualEventRegistration: {
		properties?: Array<string>;
		sessions: IMapperMethod,
	},
	virtualEventRegistrationConfiguration: {
		properties?: Array<string>;
		questions: IMapperMethod,
	},
	virtualEventRegistrationCustomQuestion: {
		properties?: Array<string>;

	},
	virtualEventRegistrationPredefinedQuestion: {
		properties?: Array<string>;

	},
	virtualEventRegistrationQuestionBase: {
		properties?: Array<string>;

	},
	virtualEventSession: {
		properties?: Array<string>;

	},
	virtualEventTownhall: {
		properties?: Array<string>;

	},
	virtualEventWebinar: {
		properties?: Array<string>;
		registrationConfiguration: IMapperMethod,
		registrations: IMapperMethod,
	},
	virtualEventWebinarRegistrationConfiguration: {
		properties?: Array<string>;

	},
	virtualEventsRoot: {
		properties?: Array<string>;
		events: IMapperMethod,
		townhalls: IMapperMethod,
		webinars: IMapperMethod,
	},
	voiceAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		includeTargets: IMapperMethod,
	},
	vppToken: {
		properties?: Array<string>;

	},
	vulnerability: {
		properties?: Array<string>;
		articles: IMapperMethod,
		components: IMapperMethod,
	},
	vulnerabilityComponent: {
		properties?: Array<string>;

	},
	webApp: {
		properties?: Array<string>;

	},
	webPart: {
		properties?: Array<string>;

	},
	whoisBaseRecord: {
		properties?: Array<string>;
		host: IMapperMethod,
	},
	whoisHistoryRecord: {
		properties?: Array<string>;

	},
	whoisRecord: {
		properties?: Array<string>;
		history: IMapperMethod,
	},
	win32LobApp: {
		properties?: Array<string>;

	},
	windows10CompliancePolicy: {
		properties?: Array<string>;

	},
	windows10CustomConfiguration: {
		properties?: Array<string>;

	},
	windows10EndpointProtectionConfiguration: {
		properties?: Array<string>;

	},
	windows10EnrollmentCompletionPageConfiguration: {
		properties?: Array<string>;

	},
	windows10EnterpriseModernAppManagementConfiguration: {
		properties?: Array<string>;

	},
	windows10GeneralConfiguration: {
		properties?: Array<string>;

	},
	windows10MobileCompliancePolicy: {
		properties?: Array<string>;

	},
	windows10SecureAssessmentConfiguration: {
		properties?: Array<string>;

	},
	windows10TeamGeneralConfiguration: {
		properties?: Array<string>;

	},
	windows81CompliancePolicy: {
		properties?: Array<string>;

	},
	windows81GeneralConfiguration: {
		properties?: Array<string>;

	},
	windowsAppX: {
		properties?: Array<string>;

	},
	windowsAutopilotDeploymentProfile: {
		properties?: Array<string>;
		assignedDevices: IMapperMethod,
	},
	windowsAutopilotDeploymentProfileAssignment: {
		properties?: Array<string>;

	},
	windowsAutopilotDeviceIdentity: {
		properties?: Array<string>;

	},
	windowsDefenderAdvancedThreatProtectionConfiguration: {
		properties?: Array<string>;

	},
	windowsDeviceMalwareState: {
		properties?: Array<string>;

	},
	windowsHelloForBusinessAuthenticationMethod: {
		properties?: Array<string>;
		device: IMapperMethod,
	},
	windowsInformationProtection: {
		properties?: Array<string>;
		assignments: IMapperMethod,
		exemptAppLockerFiles: IMapperMethod,
		protectedAppLockerFiles: IMapperMethod,
	},
	windowsInformationProtectionAppLearningSummary: {
		properties?: Array<string>;

	},
	windowsInformationProtectionAppLockerFile: {
		properties?: Array<string>;

	},
	windowsInformationProtectionNetworkLearningSummary: {
		properties?: Array<string>;

	},
	windowsInformationProtectionPolicy: {
		properties?: Array<string>;

	},
	windowsMalwareInformation: {
		properties?: Array<string>;
		deviceMalwareStates: IMapperMethod,
	},
	windowsMicrosoftEdgeApp: {
		properties?: Array<string>;

	},
	windowsMobileMSI: {
		properties?: Array<string>;

	},
	windowsPhone81CompliancePolicy: {
		properties?: Array<string>;

	},
	windowsPhone81CustomConfiguration: {
		properties?: Array<string>;

	},
	windowsPhone81GeneralConfiguration: {
		properties?: Array<string>;

	},
	windowsProtectionState: {
		properties?: Array<string>;
		detectedMalwareState: IMapperMethod,
	},
	windowsSetting: {
		properties?: Array<string>;
		instances: IMapperMethod,
	},
	windowsSettingInstance: {
		properties?: Array<string>;

	},
	windowsUniversalAppX: {
		properties?: Array<string>;
		committedContainedApps: IMapperMethod,
	},
	windowsUniversalAppXContainedApp: {
		properties?: Array<string>;

	},
	windowsUpdateForBusinessConfiguration: {
		properties?: Array<string>;

	},
	windowsWebApp: {
		properties?: Array<string>;

	},
	workbook: {
		properties?: Array<string>;
		application: IMapperMethod,
		comments: IMapperMethod,
		functions: IMapperMethod,
		names: IMapperMethod,
		operations: IMapperMethod,
		tables: IMapperMethod,
		worksheets: IMapperMethod,
	},
	workbookApplication: {
		properties?: Array<string>;

	},
	workbookChart: {
		properties?: Array<string>;
		axes: IMapperMethod,
		dataLabels: IMapperMethod,
		format: IMapperMethod,
		legend: IMapperMethod,
		series: IMapperMethod,
		title: IMapperMethod,
		worksheet: IMapperMethod,
	},
	workbookChartAreaFormat: {
		properties?: Array<string>;
		fill: IMapperMethod,
		font: IMapperMethod,
	},
	workbookChartAxes: {
		properties?: Array<string>;
		categoryAxis: IMapperMethod,
		seriesAxis: IMapperMethod,
		valueAxis: IMapperMethod,
	},
	workbookChartAxis: {
		properties?: Array<string>;
		format: IMapperMethod,
		majorGridlines: IMapperMethod,
		minorGridlines: IMapperMethod,
		title: IMapperMethod,
	},
	workbookChartAxisFormat: {
		properties?: Array<string>;
		font: IMapperMethod,
		line: IMapperMethod,
	},
	workbookChartAxisTitle: {
		properties?: Array<string>;
		format: IMapperMethod,
	},
	workbookChartAxisTitleFormat: {
		properties?: Array<string>;
		font: IMapperMethod,
	},
	workbookChartDataLabelFormat: {
		properties?: Array<string>;
		fill: IMapperMethod,
		font: IMapperMethod,
	},
	workbookChartDataLabels: {
		properties?: Array<string>;
		format: IMapperMethod,
	},
	workbookChartFill: {
		properties?: Array<string>;

	},
	workbookChartFont: {
		properties?: Array<string>;

	},
	workbookChartGridlines: {
		properties?: Array<string>;
		format: IMapperMethod,
	},
	workbookChartGridlinesFormat: {
		properties?: Array<string>;
		line: IMapperMethod,
	},
	workbookChartLegend: {
		properties?: Array<string>;
		format: IMapperMethod,
	},
	workbookChartLegendFormat: {
		properties?: Array<string>;
		fill: IMapperMethod,
		font: IMapperMethod,
	},
	workbookChartLineFormat: {
		properties?: Array<string>;

	},
	workbookChartPoint: {
		properties?: Array<string>;
		format: IMapperMethod,
	},
	workbookChartPointFormat: {
		properties?: Array<string>;
		fill: IMapperMethod,
	},
	workbookChartSeries: {
		properties?: Array<string>;
		format: IMapperMethod,
		points: IMapperMethod,
	},
	workbookChartSeriesFormat: {
		properties?: Array<string>;
		fill: IMapperMethod,
		line: IMapperMethod,
	},
	workbookChartTitle: {
		properties?: Array<string>;
		format: IMapperMethod,
	},
	workbookChartTitleFormat: {
		properties?: Array<string>;
		fill: IMapperMethod,
		font: IMapperMethod,
	},
	workbookComment: {
		properties?: Array<string>;
		replies: IMapperMethod,
	},
	workbookCommentReply: {
		properties?: Array<string>;

	},
	workbookFilter: {
		properties?: Array<string>;

	},
	workbookFormatProtection: {
		properties?: Array<string>;

	},
	workbookFunctionResult: {
		properties?: Array<string>;

	},
	workbookFunctions: {
		properties?: Array<string>;

	},
	workbookNamedItem: {
		properties?: Array<string>;
		worksheet: IMapperMethod,
	},
	workbookOperation: {
		properties?: Array<string>;

	},
	workbookPivotTable: {
		properties?: Array<string>;
		worksheet: IMapperMethod,
	},
	workbookRange: {
		properties?: Array<string>;
		format: IMapperMethod,
		sort: IMapperMethod,
		worksheet: IMapperMethod,
	},
	workbookRangeBorder: {
		properties?: Array<string>;

	},
	workbookRangeFill: {
		properties?: Array<string>;

	},
	workbookRangeFont: {
		properties?: Array<string>;

	},
	workbookRangeFormat: {
		properties?: Array<string>;
		borders: IMapperMethod,
		fill: IMapperMethod,
		font: IMapperMethod,
		protection: IMapperMethod,
	},
	workbookRangeSort: {
		properties?: Array<string>;

	},
	workbookRangeView: {
		properties?: Array<string>;
		rows: IMapperMethod,
	},
	workbookTable: {
		properties?: Array<string>;
		columns: IMapperMethod,
		rows: IMapperMethod,
		sort: IMapperMethod,
		worksheet: IMapperMethod,
	},
	workbookTableColumn: {
		properties?: Array<string>;
		filter: IMapperMethod,
	},
	workbookTableRow: {
		properties?: Array<string>;

	},
	workbookTableSort: {
		properties?: Array<string>;

	},
	workbookWorksheet: {
		properties?: Array<string>;
		charts: IMapperMethod,
		names: IMapperMethod,
		pivotTables: IMapperMethod,
		protection: IMapperMethod,
		tables: IMapperMethod,
	},
	workbookWorksheetProtection: {
		properties?: Array<string>;

	},
	workflow: {
		properties?: Array<string>;
		executionScope: IMapperMethod,
		runs: IMapperMethod,
		taskReports: IMapperMethod,
		userProcessingResults: IMapperMethod,
		versions: IMapperMethod,
	},
	workflowBase: {
		properties?: Array<string>;
		createdBy: IMapperMethod,
		lastModifiedBy: IMapperMethod,
		tasks: IMapperMethod,
	},
	workflowTemplate: {
		properties?: Array<string>;
		tasks: IMapperMethod,
	},
	workflowVersion: {
		properties?: Array<string>;

	},
	workforceIntegration: {
		properties?: Array<string>;

	},
	workingTimeSchedule: {
		properties?: Array<string>;

	},
	x509CertificateAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		includeTargets: IMapperMethod,
	},
	x509CertificateCombinationConfiguration: {
		properties?: Array<string>;

	},
}