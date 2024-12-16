import { IMapperMethod } from "./base";


/** Mapper */
export interface IMapper {
	_case: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	aadUserConversationMember: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		user: IMapperMethod,
	},
	accessPackage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		accessPackagesIncompatibleWith: IMapperMethod,
		assignmentPolicies: IMapperMethod,
		catalog: IMapperMethod,
		incompatibleAccessPackages: IMapperMethod,
		incompatibleGroups: IMapperMethod,
		resourceRoleScopes: IMapperMethod,
	},
	accessPackages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessPackageAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		accessPackage: IMapperMethod,
		assignmentPolicy: IMapperMethod,
		target: IMapperMethod,
	},
	accessPackageAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessPackageAssignmentPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		accessPackage: IMapperMethod,
		catalog: IMapperMethod,
		customExtensionStageSettings: IMapperMethod,
		questions: IMapperMethod,
	},
	accessPackageAssignmentPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessPackageAssignmentRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		accessPackage: IMapperMethod,
		assignment: IMapperMethod,
		requestor: IMapperMethod,
	},
	accessPackageAssignmentRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessPackageAssignmentRequestWorkflowExtension: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	accessPackageAssignmentWorkflowExtension: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	accessPackageCatalog: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		accessPackages: IMapperMethod,
		customWorkflowExtensions: IMapperMethod,
		resourceRoles: IMapperMethod,
		resources: IMapperMethod,
		resourceScopes: IMapperMethod,
	},
	accessPackageCatalogs: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessPackageMultipleChoiceQuestion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	accessPackageQuestion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	accessPackageQuestions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessPackageResource: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		environment: IMapperMethod,
		roles: IMapperMethod,
		scopes: IMapperMethod,
	},
	accessPackageResources: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessPackageResourceEnvironment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		resources: IMapperMethod,
	},
	accessPackageResourceEnvironments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessPackageResourceRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		catalog: IMapperMethod,
		resource: IMapperMethod,
	},
	accessPackageResourceRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessPackageResourceRole: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		resource: IMapperMethod,
	},
	accessPackageResourceRoles: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessPackageResourceRoleScope: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		role: IMapperMethod,
		scope: IMapperMethod,
	},
	accessPackageResourceRoleScopes: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessPackageResourceScope: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		resource: IMapperMethod,
	},
	accessPackageResourceScopes: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessPackageSubject: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		connectedOrganization: IMapperMethod,
	},
	accessPackageTextInputQuestion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	accessReviewHistoryDefinition: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		instances: IMapperMethod,
	},
	accessReviewHistoryDefinitions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessReviewHistoryInstance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	accessReviewHistoryInstances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessReviewInstance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		contactedReviewers: IMapperMethod,
		decisions: IMapperMethod,
		stages: IMapperMethod,
	},
	accessReviewInstances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessReviewInstanceDecisionItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		insights: IMapperMethod,
	},
	accessReviewInstanceDecisionItems: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessReviewReviewer: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	accessReviewReviewers: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessReviewScheduleDefinition: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		instances: IMapperMethod,
	},
	accessReviewScheduleDefinitions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	accessReviewSet: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		definitions: IMapperMethod,
		historyDefinitions: IMapperMethod,
	},
	accessReviewStage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		decisions: IMapperMethod,
	},
	accessReviewStages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	acronym: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	activityBasedTimeoutPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	activityBasedTimeoutPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	activityHistoryItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		activity: IMapperMethod,
	},
	activityHistoryItems: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	addLargeGalleryViewOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	admin: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		edge: IMapperMethod,
		sharepoint: IMapperMethod,
		microsoft365Apps: IMapperMethod,
		serviceAnnouncement: IMapperMethod,
		reportSettings: IMapperMethod,
		people: IMapperMethod,
	},
	adminConsentRequestPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	adminMicrosoft365Apps: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		installationOptions: IMapperMethod,
	},
	adminReportSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	administrativeUnit: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		members: IMapperMethod,
		scopedRoleMembers: IMapperMethod,
		extensions: IMapperMethod,
	},
	administrativeUnits: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	agreement: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		acceptances: IMapperMethod,
		file: IMapperMethod,
		files: IMapperMethod,
	},
	agreements: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	agreementAcceptance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	agreementAcceptances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	agreementFile: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		localizations: IMapperMethod,
	},
	agreementFileLocalization: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		versions: IMapperMethod,
	},
	agreementFileLocalizations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	agreementFileProperties: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	agreementFileVersion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	agreementFileVersions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	alert: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	alerts: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	allowedValue: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	allowedValues: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	androidCompliancePolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	androidCustomConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	androidGeneralDeviceConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	androidLobApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	androidManagedAppProtection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		apps: IMapperMethod,
		deploymentSummary: IMapperMethod,
	},
	androidManagedAppProtections: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	androidManagedAppRegistration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	androidStoreApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	androidWorkProfileCompliancePolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	androidWorkProfileCustomConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	androidWorkProfileGeneralDeviceConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	anonymousGuestConversationMember: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	appCatalogs: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		teamsApps: IMapperMethod,
	},
	appConsentApprovalRoute: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appConsentRequests: IMapperMethod,
	},
	appConsentRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		userConsentRequests: IMapperMethod,
	},
	appConsentRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	appLogCollectionRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	appLogCollectionRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	appManagementPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appliesTo: IMapperMethod,
	},
	appManagementPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	appRoleAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	appRoleAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	appScope: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	appleDeviceFeaturesConfigurationBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	appleManagedIdentityProvider: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	applePushNotificationCertificate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	application: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	approval: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		stages: IMapperMethod,
	},
	approvals: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	approvalStage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	approvalStages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	article: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		indicators: IMapperMethod,
	},
	articleIndicator: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	artifact: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	associatedTeamInfo: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	associatedTeamInfos: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	attachment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	attachments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	attachmentBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	attachmentBases: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	attachmentSession: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	attachmentSessions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	attackSimulationOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	attackSimulationOperations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	attackSimulationRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	attendanceRecords: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	attributeMappingFunctionSchema: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	attributeSet: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	attributeSets: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	audioRoutingGroup: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	audioRoutingGroups: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	auditEvent: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	auditEvents: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	auditLogRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		directoryAudits: IMapperMethod,
		provisioning: IMapperMethod,
		signIns: IMapperMethod,
	},
	authentication: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	authenticationCombinationConfigurations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	authenticationConditionApplication: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	authenticationContextClassReference: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	authenticationContextClassReferences: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	authenticationEventListener: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	authenticationEventListeners: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	authenticationEventsFlow: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	authenticationEventsFlows: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	authenticationFlowsPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	authenticationMethod: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	authenticationMethods: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	authenticationMethodConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	authenticationMethodConfigurations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	authenticationMethodModeDetail: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	authenticationMethodModeDetails: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	authenticationMethodTarget: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	authenticationMethodTargets: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	authenticationMethodsPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		authenticationMethodConfigurations: IMapperMethod,
	},
	authenticationMethodsRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		userRegistrationDetails: IMapperMethod,
	},
	authenticationStrengthPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		combinationConfigurations: IMapperMethod,
	},
	authenticationStrengthPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	authenticationStrengthRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		authenticationMethodModes: IMapperMethod,
		policies: IMapperMethod,
	},
	authoredNote: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	authoredNotes: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	authorityTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	authorizationPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	azureCommunicationServicesUserConversationMember: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	azureUsage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		billed: IMapperMethod,
		unbilled: IMapperMethod,
	},
	b2xIdentityUserFlow: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		identityProviders: IMapperMethod,
		languages: IMapperMethod,
		userAttributeAssignments: IMapperMethod,
		userFlowIdentityProviders: IMapperMethod,
	},
	b2xIdentityUserFlows: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	backupRestoreRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }
		createdByUser: IMapperMethod,
		lastModifiedByUser: IMapperMethod,
	},
	baseItems: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	baseItemVersion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	baseSitePage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	baseSitePages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	billedReconciliation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	billedUsage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	billing: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		manifests: IMapperMethod,
		operations: IMapperMethod,
		reconciliation: IMapperMethod,
		usage: IMapperMethod,
	},
	billingReconciliation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		billed: IMapperMethod,
	},
	bitlocker: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		recoveryKeys: IMapperMethod,
	},
	bitlockerRecoveryKey: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	bitlockerRecoveryKeys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	bookingAppointment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	bookingAppointments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	bookingBusiness: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appointments: IMapperMethod,
		calendarView: IMapperMethod,
		customers: IMapperMethod,
		customQuestions: IMapperMethod,
		services: IMapperMethod,
		staffMembers: IMapperMethod,
	},
	bookingBusinesss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	bookingCurrency: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	bookingCurrencys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	bookingCustomQuestion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	bookingCustomQuestions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	bookingCustomer: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	bookingCustomerBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	bookingCustomerBases: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	bookingService: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	bookingServices: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	bookingStaffMember: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	bookingStaffMemberBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	bookingStaffMemberBases: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	bookmark: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	browserSharedCookie: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	browserSharedCookies: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	browserSite: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	browserSites: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	browserSiteList: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		sharedCookies: IMapperMethod,
		sites: IMapperMethod,
	},
	browserSiteLists: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	builtInIdentityProvider: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	bulkUpload: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	calendar: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		calendarPermissions: IMapperMethod,
		calendarView: IMapperMethod,
		events: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	calendars: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	calendarGroup: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		calendars: IMapperMethod,
	},
	calendarGroups: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	calendarPermission: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	calendarPermissions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	calendarSharingMessage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	call: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		audioRoutingGroups: IMapperMethod,
		contentSharingSessions: IMapperMethod,
		operations: IMapperMethod,
		participants: IMapperMethod,
	},
	calls: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	callRecord: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		organizer_v2: IMapperMethod,
		participants_v2: IMapperMethod,
		sessions: IMapperMethod,
	},
	callRecording: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	callRecordings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	callTranscript: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	callTranscripts: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	cancelMediaProcessingOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	canvasLayout: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		horizontalSections: IMapperMethod,
		verticalSection: IMapperMethod,
	},
	caseOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	casesRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		ediscoveryCases: IMapperMethod,
	},
	categoryTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		subcategories: IMapperMethod,
	},
	certificateBasedAuthConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	certificateBasedAuthConfigurations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	changeTrackedEntity: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	channel: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		filesFolder: IMapperMethod,
		members: IMapperMethod,
		messages: IMapperMethod,
		sharedWithTeams: IMapperMethod,
		tabs: IMapperMethod,
	},
	channels: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	chat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		installedApps: IMapperMethod,
		lastMessagePreview: IMapperMethod,
		members: IMapperMethod,
		messages: IMapperMethod,
		permissionGrants: IMapperMethod,
		pinnedMessages: IMapperMethod,
		tabs: IMapperMethod,
	},
	chats: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	chatMessage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		hostedContents: IMapperMethod,
		replies: IMapperMethod,
	},
	chatMessages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	chatMessageHostedContent: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	chatMessageHostedContents: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	chatMessageInfo: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	checklistItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	checklistItems: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	citationTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	claimsMappingPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	claimsMappingPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	cloudClipboardItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	cloudClipboardItems: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	cloudClipboardRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		items: IMapperMethod,
	},
	cloudCommunications: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		callRecords: IMapperMethod,
		calls: IMapperMethod,
		onlineMeetings: IMapperMethod,
		presences: IMapperMethod,
	},
	cloudPC: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	cloudPCs: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	cloudPcAuditEvent: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	cloudPcAuditEvents: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	cloudPcDeviceImage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	cloudPcDeviceImages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	cloudPcGalleryImage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	cloudPcGalleryImages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	cloudPcOnPremisesConnection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	cloudPcOnPremisesConnections: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	cloudPcProvisioningPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignments: IMapperMethod,
	},
	cloudPcProvisioningPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	cloudPcProvisioningPolicyAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignedUsers: IMapperMethod,
	},
	cloudPcProvisioningPolicyAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	cloudPcUserSetting: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignments: IMapperMethod,
	},
	cloudPcUserSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	cloudPcUserSettingAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	cloudPcUserSettingAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	columnDefinition: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		sourceColumn: IMapperMethod,
		update: IMapperMethod & {
			argNames: ["values"]
		},
	},
	columnDefinitions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	columnLink: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	columnLinks: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	commsOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	commsOperations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	community: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		group: IMapperMethod,
		owners: IMapperMethod,
	},
	communitys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	companySubscription: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	companySubscriptions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	compliance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	complianceManagementPartner: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	complianceManagementPartners: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	conditionalAccessPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	conditionalAccessPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	conditionalAccessRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		authenticationStrength: IMapperMethod,
		authenticationContextClassReferences: IMapperMethod,
		namedLocations: IMapperMethod,
		policies: IMapperMethod,
		templates: IMapperMethod,
	},
	conditionalAccessTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	conditionalAccessTemplates: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	connectedOrganization: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		externalSponsors: IMapperMethod,
		internalSponsors: IMapperMethod,
	},
	connectedOrganizations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	connectionOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	contact: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		extensions: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		photo: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	contacts: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	contactFolder: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		childFolders: IMapperMethod,
		contacts: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	contactFolders: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	contentSharingSession: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	contentSharingSessions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	contentType: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		base: IMapperMethod,
		baseTypes: IMapperMethod,
		columnLinks: IMapperMethod,
		columnPositions: IMapperMethod,
		columns: IMapperMethod,
		update: IMapperMethod & {
			argNames: ["values"]
		},
	},
	contentTypes: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	contract: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	conversation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		threads: IMapperMethod,
	},
	conversations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	conversationMember: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	conversationMembers: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	conversationThread: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		posts: IMapperMethod,
	},
	conversationThreads: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	countryNamedLocation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	crossTenantAccessPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		default: IMapperMethod,
		partners: IMapperMethod,
		templates: IMapperMethod,
	},
	crossTenantAccessPolicyConfigurationDefault: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	crossTenantAccessPolicyConfigurationPartner: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		identitySynchronization: IMapperMethod,
	},
	crossTenantIdentitySyncPolicyPartner: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	customAuthenticationExtension: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	customAuthenticationExtensions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	customCalloutExtension: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	customCalloutExtensions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	customExtensionStageSetting: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		customExtension: IMapperMethod,
	},
	customExtensionStageSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	customSecurityAttributeDefinition: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		allowedValues: IMapperMethod,
	},
	customSecurityAttributeDefinitions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	customTaskExtension: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		createdBy: IMapperMethod,
		lastModifiedBy: IMapperMethod,
	},
	dataPolicyOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	dataSet: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	dataSource: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	dataSourceContainer: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	defaultManagedAppProtection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		apps: IMapperMethod,
		deploymentSummary: IMapperMethod,
	},
	defaultManagedAppProtections: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	delegatedAdminAccessAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	delegatedAdminAccessAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	delegatedAdminCustomer: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		serviceManagementDetails: IMapperMethod,
	},
	delegatedAdminCustomers: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	delegatedAdminRelationship: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		accessAssignments: IMapperMethod,
		operations: IMapperMethod,
		requests: IMapperMethod,
	},
	delegatedAdminRelationships: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	delegatedAdminRelationshipOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	delegatedAdminRelationshipOperations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	delegatedAdminRelationshipRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	delegatedAdminRelationshipRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	delegatedAdminServiceManagementDetail: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	delegatedAdminServiceManagementDetails: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	delegatedPermissionClassification: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	delegatedPermissionClassifications: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deletedChat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deletedChats: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deletedItemContainer: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		workflows: IMapperMethod,
	},
	deletedTeam: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		channels: IMapperMethod,
	},
	deletedTeams: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deltaParticipants: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		participants: IMapperMethod,
	},
	departmentTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	detectedApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		managedDevices: IMapperMethod,
	},
	detectedApps: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	device: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		memberOf: IMapperMethod,
		registeredOwners: IMapperMethod,
		registeredUsers: IMapperMethod,
		transitiveMemberOf: IMapperMethod,
		extensions: IMapperMethod,
	},
	deviceAndAppManagementRoleAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceAndAppManagementRoleAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceAndAppManagementRoleDefinition: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceAppManagement: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceCategorys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceComplianceActionItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceComplianceActionItems: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceComplianceDeviceOverview: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceComplianceDeviceStatus: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceComplianceDeviceStatuss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceCompliancePolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignments: IMapperMethod,
		deviceSettingStateSummaries: IMapperMethod,
		deviceStatuses: IMapperMethod,
		deviceStatusOverview: IMapperMethod,
		scheduledActionsForRule: IMapperMethod,
		userStatuses: IMapperMethod,
		userStatusOverview: IMapperMethod,
	},
	deviceCompliancePolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceCompliancePolicyAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceCompliancePolicyAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceCompliancePolicyDeviceStateSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceCompliancePolicySettingStateSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		deviceComplianceSettingStates: IMapperMethod,
	},
	deviceCompliancePolicySettingStateSummarys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceCompliancePolicyState: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceCompliancePolicyStates: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceComplianceScheduledActionForRule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		scheduledActionConfigurations: IMapperMethod,
	},
	deviceComplianceScheduledActionForRules: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceComplianceSettingState: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceComplianceSettingStates: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceComplianceUserOverview: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceComplianceUserStatus: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceComplianceUserStatuss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignments: IMapperMethod,
		deviceSettingStateSummaries: IMapperMethod,
		deviceStatuses: IMapperMethod,
		deviceStatusOverview: IMapperMethod,
		userStatuses: IMapperMethod,
		userStatusOverview: IMapperMethod,
	},
	deviceConfigurations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceConfigurationAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceConfigurationAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceConfigurationDeviceOverview: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceConfigurationDeviceStateSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceConfigurationDeviceStatus: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceConfigurationDeviceStatuss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceConfigurationState: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceConfigurationStates: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceConfigurationUserOverview: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceConfigurationUserStatus: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceConfigurationUserStatuss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceEnrollmentConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignments: IMapperMethod,
	},
	deviceEnrollmentConfigurations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceEnrollmentLimitConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceEnrollmentPlatformRestrictionsConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceEnrollmentWindowsHelloForBusinessConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceInstallState: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceInstallStates: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceLocalCredentialInfo: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceLocalCredentialInfos: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceLogCollectionResponse: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceLogCollectionResponses: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceManagement: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceManagementExchangeConnector: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceManagementExchangeConnectors: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceManagementExportJob: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceManagementExportJobs: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceManagementPartner: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceManagementPartners: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceManagementReports: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		exportJobs: IMapperMethod,
	},
	deviceManagementTroubleshootingEvent: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	deviceManagementTroubleshootingEvents: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	deviceRegistrationPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	directory: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	directoryAudits: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	directoryDefinition: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	directoryDefinitions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	directoryObject: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	directoryObjects: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	directoryObjectPartnerReference: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	directoryRole: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		members: IMapperMethod,
		scopedMembers: IMapperMethod,
	},
	directoryRoleTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	dispositionReviewStage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	documentSetVersion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	documentSetVersions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	domain: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		domainNameReferences: IMapperMethod,
		federationConfiguration: IMapperMethod,
		rootDomain: IMapperMethod,
		serviceConfigurationRecords: IMapperMethod,
		verificationDnsRecords: IMapperMethod,
	},
	domainDnsCnameRecord: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	domainDnsMxRecord: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	domainDnsRecord: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	domainDnsRecords: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	domainDnsSrvRecord: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	domainDnsTxtRecord: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	domainDnsUnavailableRecord: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	drive: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		bundles: IMapperMethod,
		following: IMapperMethod,
		items: IMapperMethod,
		list: IMapperMethod,
		root: IMapperMethod,
		special: IMapperMethod,
	},
	drives: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	driveItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
	driveItems: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	driveItemVersion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	driveItemVersions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	driveProtectionRule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	driveProtectionRules: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	driveProtectionUnit: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	driveProtectionUnits: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	driveRestoreArtifact: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	driveRestoreArtifacts: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	eBookInstallSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	edge: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		internetExplorerMode: IMapperMethod,
	},
	ediscoveryAddToReviewSetOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		reviewSet: IMapperMethod,
		search: IMapperMethod,
	},
	ediscoveryCase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	ediscoveryCustodian: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		lastIndexOperation: IMapperMethod,
		siteSources: IMapperMethod,
		unifiedGroupSources: IMapperMethod,
		userSources: IMapperMethod,
	},
	ediscoveryEstimateOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		search: IMapperMethod,
	},
	ediscoveryExportOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		reviewSet: IMapperMethod,
		reviewSetQuery: IMapperMethod,
	},
	ediscoveryHoldOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	ediscoveryIndexOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	ediscoveryNoncustodialDataSource: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		dataSource: IMapperMethod,
		lastIndexOperation: IMapperMethod,
	},
	ediscoveryPurgeDataOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	ediscoveryReviewSet: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		queries: IMapperMethod,
	},
	ediscoveryReviewSetQuery: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	ediscoveryReviewTag: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		childTags: IMapperMethod,
		parent: IMapperMethod,
	},
	ediscoverySearch: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		additionalSources: IMapperMethod,
		addToReviewSetOperation: IMapperMethod,
		custodianSources: IMapperMethod,
		lastEstimateStatisticsOperation: IMapperMethod,
		noncustodialSources: IMapperMethod,
	},
	ediscoverySearchExportOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		search: IMapperMethod,
	},
	ediscoveryTagOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	editionUpgradeConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		categories: IMapperMethod,
		gradingCategory: IMapperMethod,
		resources: IMapperMethod,
		rubric: IMapperMethod,
		submissions: IMapperMethod,
	},
	educationAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	educationAssignmentDefaults: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationAssignmentResource: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationAssignmentResources: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	educationAssignmentSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		gradingCategories: IMapperMethod,
	},
	educationCategory: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationCategorys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	educationClass: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
	educationClasss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	educationFeedbackOutcome: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationFeedbackResourceOutcome: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationGradingCategory: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationGradingCategorys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	educationModule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		resources: IMapperMethod,
	},
	educationModules: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	educationModuleResource: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationModuleResources: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	educationOrganization: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationOutcome: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationOutcomes: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	educationPointsOutcome: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		classes: IMapperMethod,
		me: IMapperMethod,
		schools: IMapperMethod,
		users: IMapperMethod,
	},
	educationRubric: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationRubrics: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	educationRubricOutcome: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationSchool: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		administrativeUnit: IMapperMethod,
		classes: IMapperMethod,
		users: IMapperMethod,
	},
	educationSchools: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	educationSubmission: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		outcomes: IMapperMethod,
		resources: IMapperMethod,
		submittedResources: IMapperMethod,
	},
	educationSubmissions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	educationSubmissionResource: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	educationSubmissionResources: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	educationUser: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignments: IMapperMethod,
		rubrics: IMapperMethod,
		classes: IMapperMethod,
		schools: IMapperMethod,
		taughtClasses: IMapperMethod,
		user: IMapperMethod,
	},
	educationUsers: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	emailAuthenticationMethod: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	emailAuthenticationMethods: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	emailAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		includeTargets: IMapperMethod,
	},
	emailFileAssessmentRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	employeeExperience: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		communities: IMapperMethod,
		engagementAsyncOperations: IMapperMethod,
		learningCourseActivities: IMapperMethod,
		learningProviders: IMapperMethod,
	},
	employeeExperienceUser: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		learningCourseActivities: IMapperMethod,
	},
	endUserNotification: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		details: IMapperMethod,
	},
	endUserNotifications: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	endUserNotificationDetail: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	endUserNotificationDetails: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	endpoint: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	endpoints: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	engagementAsyncOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	engagementAsyncOperations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	enrollmentConfigurationAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	enrollmentConfigurationAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	enrollmentTroubleshootingEvent: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	enterpriseCodeSigningCertificate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	entitlementManagement: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	entity: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	event: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		attachments: IMapperMethod,
		calendar: IMapperMethod,
		extensions: IMapperMethod,
		instances: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	events: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	eventMessage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		event: IMapperMethod,
	},
	eventMessageRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	eventMessageResponse: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	exchangeProtectionPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		mailboxInclusionRules: IMapperMethod,
		mailboxProtectionUnits: IMapperMethod,
	},
	exchangeProtectionPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	exchangeRestoreSession: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		granularMailboxRestoreArtifacts: IMapperMethod,
		mailboxRestoreArtifacts: IMapperMethod,
	},
	exchangeRestoreSessions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	exportSuccessOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		resourceLocation: IMapperMethod,
	},
	extension: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	extensions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	extensionProperty: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	extensionPropertys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	external: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		connections: IMapperMethod,
	},
	externalActivity: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		performedBy: IMapperMethod,
	},
	externalActivityResult: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	externalConnection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		groups: IMapperMethod,
		items: IMapperMethod,
		operations: IMapperMethod,
		schema: IMapperMethod,
	},
	externalDomainName: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	externalDomainNames: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	externalGroup: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		members: IMapperMethod,
	},
	externalItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		activities: IMapperMethod,
	},
	externalUsersSelfServiceSignUpEventsFlow: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	failedOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	featureRolloutPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appliesTo: IMapperMethod,
	},
	featureRolloutPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	federatedIdentityCredential: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	federatedIdentityCredentials: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	fido2AuthenticationMethod: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	fido2AuthenticationMethods: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	fido2AuthenticationMethodConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		includeTargets: IMapperMethod,
	},
	fido2CombinationConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	fieldValueSet: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	fileAssessmentRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	fileAttachment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	filePlanDescriptor: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		authorityTemplate: IMapperMethod,
		categoryTemplate: IMapperMethod,
		citationTemplate: IMapperMethod,
		departmentTemplate: IMapperMethod,
		filePlanReferenceTemplate: IMapperMethod,
	},
	filePlanDescriptorTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	filePlanReferenceTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	fileStorage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		containers: IMapperMethod,
	},
	fileStorageContainer: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		drive: IMapperMethod,
		permissions: IMapperMethod,
	},
	fileStorageContainers: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	filterOperatorSchema: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	governanceInsight: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	governanceInsights: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	granularMailboxRestoreArtifact: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	granularMailboxRestoreArtifacts: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	group: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		sets: IMapperMethod,
	},
	groups: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	groupLifecyclePolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	groupLifecyclePolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	groupSetting: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	groupSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	groupSettingTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	healthIssue: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	homeRealmDiscoveryPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	homeRealmDiscoveryPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	horizontalSection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		columns: IMapperMethod,
	},
	horizontalSections: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	horizontalSectionColumn: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		webparts: IMapperMethod,
	},
	horizontalSectionColumns: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	host: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }
		host: IMapperMethod,
	},
	hostCookie: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		host: IMapperMethod,
	},
	hostPair: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		childHost: IMapperMethod,
		parentHost: IMapperMethod,
	},
	hostPort: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		host: IMapperMethod,
		mostRecentSslCertificate: IMapperMethod,
	},
	hostReputation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	hostSslCertificate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		host: IMapperMethod,
		sslCertificate: IMapperMethod,
	},
	hostTracker: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		host: IMapperMethod,
	},
	hostname: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	identity: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	identityApiConnector: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	identityApiConnectors: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	identityBuiltInUserFlowAttribute: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	identityContainer: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		healthIssues: IMapperMethod,
		sensors: IMapperMethod,
	},
	identityCustomUserFlowAttribute: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	identityGovernance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		lifecycleWorkflows: IMapperMethod,
		accessReviews: IMapperMethod,
		appConsent: IMapperMethod,
		termsOfUse: IMapperMethod,
		entitlementManagement: IMapperMethod,
		privilegedAccess: IMapperMethod,
	},
	identityProtectionRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		riskDetections: IMapperMethod,
		riskyServicePrincipals: IMapperMethod,
		riskyUsers: IMapperMethod,
		servicePrincipalRiskDetections: IMapperMethod,
	},
	identityProvider: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	identityProviders: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	identityProviderBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	identityProviderBases: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	identitySecurityDefaultsEnforcementPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	identityUserFlow: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	identityUserFlowAttribute: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	identityUserFlowAttributes: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	identityUserFlowAttributeAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		userAttribute: IMapperMethod,
	},
	identityUserFlowAttributeAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	importedWindowsAutopilotDeviceIdentity: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	importedWindowsAutopilotDeviceIdentitys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	importedWindowsAutopilotDeviceIdentityUpload: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		deviceIdentities: IMapperMethod,
	},
	incident: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		alerts: IMapperMethod,
	},
	indicator: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		artifact: IMapperMethod,
	},
	inferenceClassification: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		overrides: IMapperMethod,
	},
	inferenceClassificationOverride: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	inferenceClassificationOverrides: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	informationProtection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		bitlocker: IMapperMethod,
		threatAssessmentRequests: IMapperMethod,
	},
	insights: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	insightsSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	intelligenceProfile: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		indicators: IMapperMethod,
	},
	intelligenceProfileIndicator: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	internalDomainFederation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	internalDomainFederations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	internetExplorerMode: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		siteLists: IMapperMethod,
	},
	invitation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		invitedUser: IMapperMethod,
		invitedUserSponsors: IMapperMethod,
	},
	inviteParticipantsOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosCertificateProfile: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosCompliancePolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosCustomConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosDeviceFeaturesConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosGeneralDeviceConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosLobApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosLobAppProvisioningConfigurationAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosManagedAppProtection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		apps: IMapperMethod,
		deploymentSummary: IMapperMethod,
	},
	iosManagedAppProtections: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	iosManagedAppRegistration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosMobileAppConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosStoreApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosUpdateConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosUpdateDeviceStatus: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosUpdateDeviceStatuss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	iosVppApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosVppEBook: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosVppEBookAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	iosiPadOSWebClip: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	ipAddress: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	ipNamedLocation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	itemActivity: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		driveItem: IMapperMethod,
	},
	itemActivitys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	itemActivityStat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		activities: IMapperMethod,
	},
	itemActivityStats: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	itemAnalytics: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		allTime: IMapperMethod,
		itemActivityStats: IMapperMethod,
		lastSevenDays: IMapperMethod,
	},
	itemAttachment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		item: IMapperMethod,
	},
	itemInsights: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	itemRetentionLabel: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	labelsRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		authorities: IMapperMethod,
		categories: IMapperMethod,
		citations: IMapperMethod,
		departments: IMapperMethod,
		filePlanReferences: IMapperMethod,
		retentionLabels: IMapperMethod,
	},
	landingPage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		details: IMapperMethod,
	},
	landingPages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	landingPageDetail: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	landingPageDetails: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	learningAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	learningContent: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	learningContents: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	learningCourseActivity: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	learningCourseActivitys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	learningProvider: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		learningContents: IMapperMethod,
		learningCourseActivities: IMapperMethod,
	},
	learningProviders: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	learningSelfInitiatedCourse: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	licenseDetails: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	licenseDetailss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	lifecycleManagementSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	lifecycleWorkflowsContainer: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	linkedResources: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	list: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
	lists: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	listItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
	listItems: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	listItemVersion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		fields: IMapperMethod,
	},
	listItemVersions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	localizedNotificationMessage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	localizedNotificationMessages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	loginPage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	loginPages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	longRunningOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	longRunningOperations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	m365AppsInstallationOptions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	macOSCompliancePolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	macOSCustomConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	macOSDeviceFeaturesConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	macOSDmgApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	macOSGeneralDeviceConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	macOSLobApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	macOSMicrosoftDefenderApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	macOSMicrosoftEdgeApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	macOSOfficeSuiteApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mailAssessmentRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mailFolder: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		childFolders: IMapperMethod,
		messageRules: IMapperMethod,
		messages: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	mailFolders: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	mailSearchFolder: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mailboxProtectionRule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mailboxProtectionRules: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	mailboxProtectionUnit: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mailboxProtectionUnits: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	mailboxRestoreArtifact: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mailboxRestoreArtifacts: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	malwareStateForWindowsDevice: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	malwareStateForWindowsDevices: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedAndroidLobApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedAndroidStoreApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedAppConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedAppOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedAppOperations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedAppPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedAppPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedAppPolicyDeploymentSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedAppProtection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedAppRegistration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appliedPolicies: IMapperMethod,
		intendedPolicies: IMapperMethod,
		operations: IMapperMethod,
	},
	managedAppRegistrations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedAppStatus: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedAppStatuss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedAppStatusRaw: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedDevice: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		deviceCompliancePolicyStates: IMapperMethod,
		deviceConfigurationStates: IMapperMethod,
		deviceCategory: IMapperMethod,
		logCollectionRequests: IMapperMethod,
		users: IMapperMethod,
		windowsProtectionState: IMapperMethod,
	},
	managedDevices: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedDeviceMobileAppConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignments: IMapperMethod,
		deviceStatuses: IMapperMethod,
		deviceStatusSummary: IMapperMethod,
		userStatuses: IMapperMethod,
		userStatusSummary: IMapperMethod,
	},
	managedDeviceMobileAppConfigurations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedDeviceMobileAppConfigurationAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedDeviceMobileAppConfigurationAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedDeviceMobileAppConfigurationDeviceStatus: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedDeviceMobileAppConfigurationDeviceStatuss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedDeviceMobileAppConfigurationDeviceSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedDeviceMobileAppConfigurationUserStatus: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedDeviceMobileAppConfigurationUserStatuss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedDeviceMobileAppConfigurationUserSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedDeviceOverview: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedEBook: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignments: IMapperMethod,
		deviceStates: IMapperMethod,
		installSummary: IMapperMethod,
		userStateSummary: IMapperMethod,
	},
	managedEBooks: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedEBookAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedEBookAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedIOSLobApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedIOSStoreApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedMobileApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	managedMobileApps: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	managedMobileLobApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		contentVersions: IMapperMethod,
	},
	manifest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mdmWindowsInformationProtectionPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mdmWindowsInformationProtectionPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	meetingAttendanceReport: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		attendanceRecords: IMapperMethod,
	},
	meetingAttendanceReports: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	membershipOutlierInsight: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		container: IMapperMethod,
		lastModifiedBy: IMapperMethod,
		member: IMapperMethod,
	},
	message: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		attachments: IMapperMethod,
		extensions: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	messages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	messageRule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	messageRules: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	microsoftAccountUserConversationMember: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	microsoftAuthenticatorAuthenticationMethod: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		device: IMapperMethod,
	},
	microsoftAuthenticatorAuthenticationMethods: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	microsoftAuthenticatorAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		includeTargets: IMapperMethod,
	},
	microsoftAuthenticatorAuthenticationMethodTarget: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	microsoftAuthenticatorAuthenticationMethodTargets: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	microsoftStoreForBusinessApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mobileApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignments: IMapperMethod,
		categories: IMapperMethod,
	},
	mobileApps: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	mobileAppAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mobileAppAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	mobileAppCategory: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mobileAppCategorys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	mobileAppContent: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		containedApps: IMapperMethod,
		files: IMapperMethod,
	},
	mobileAppContents: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	mobileAppContentFile: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mobileAppContentFiles: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	mobileAppTroubleshootingEvent: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appLogCollectionRequests: IMapperMethod,
	},
	mobileAppTroubleshootingEvents: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	mobileContainedApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mobileContainedApps: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	mobileLobApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		contentVersions: IMapperMethod,
	},
	mobileThreatDefenseConnector: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	mobileThreatDefenseConnectors: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	multiTenantOrganization: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		joinRequest: IMapperMethod,
		tenants: IMapperMethod,
	},
	multiTenantOrganizationIdentitySyncPolicyTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	multiTenantOrganizationJoinRequestRecord: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	multiTenantOrganizationMember: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	multiTenantOrganizationMembers: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	multiTenantOrganizationPartnerConfigurationTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	multiValueLegacyExtendedProperty: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	multiValueLegacyExtendedPropertys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	muteParticipantOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	namedLocation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	namedLocations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	networkAdapter: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	notebook: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		sectionGroups: IMapperMethod,
		sections: IMapperMethod,
	},
	notebooks: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	notificationMessageTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		localizedNotificationMessages: IMapperMethod,
	},
	notificationMessageTemplates: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	oAuth2PermissionGrant: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	oAuth2PermissionGrants: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	offerShiftRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	offerShiftRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	officeGraphInsights: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		shared: IMapperMethod,
		trending: IMapperMethod,
		used: IMapperMethod,
	},
	onAttributeCollectionListener: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	onAuthenticationMethodLoadStartListener: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	onInteractiveAuthFlowStartListener: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	onPremisesConditionalAccessSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	onPremisesDirectorySynchronization: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	onPremisesDirectorySynchronizations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	onTokenIssuanceStartCustomExtension: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	onTokenIssuanceStartListener: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	onUserCreateStartListener: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	oneDriveForBusinessProtectionPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		driveInclusionRules: IMapperMethod,
		driveProtectionUnits: IMapperMethod,
	},
	oneDriveForBusinessProtectionPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	oneDriveForBusinessRestoreSession: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		driveRestoreArtifacts: IMapperMethod,
	},
	oneDriveForBusinessRestoreSessions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	onenote: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		notebooks: IMapperMethod,
		operations: IMapperMethod,
		pages: IMapperMethod,
		resources: IMapperMethod,
		sectionGroups: IMapperMethod,
		sections: IMapperMethod,
	},
	onenoteEntityBaseModel: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	onenoteEntityHierarchyModel: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	onenoteEntitySchemaObjectModel: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	onenoteOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	onenoteOperations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	onenotePage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		parentNotebook: IMapperMethod,
		parentSection: IMapperMethod,
	},
	onenotePages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	onenoteResource: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	onenoteResources: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	onenoteSection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		pages: IMapperMethod,
		parentNotebook: IMapperMethod,
		parentSectionGroup: IMapperMethod,
	},
	onenoteSections: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	onlineMeeting: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		recordings: IMapperMethod,
		transcripts: IMapperMethod,
	},
	onlineMeetings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	onlineMeetingBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		attendanceReports: IMapperMethod,
	},
	openShift: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	openShifts: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	openShiftChangeRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	openShiftChangeRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	openTypeExtension: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	operation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	orgContact: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		directReports: IMapperMethod,
		manager: IMapperMethod,
		memberOf: IMapperMethod,
		transitiveMemberOf: IMapperMethod,
	},
	organization: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		branding: IMapperMethod,
		certificateBasedAuthConfiguration: IMapperMethod,
		extensions: IMapperMethod,
	},
	organizationalBranding: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		localizations: IMapperMethod,
	},
	organizationalBrandingLocalization: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	organizationalBrandingLocalizations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	organizationalBrandingProperties: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	organizer: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	outlookCategory: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	outlookCategorys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	outlookItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	outlookUser: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		masterCategories: IMapperMethod,
	},
	participant: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	participants: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	participantBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	participantJoiningNotification: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		call: IMapperMethod,
	},
	participantLeftNotification: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		call: IMapperMethod,
	},
	partners: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		billing: IMapperMethod,
	},
	passiveDnsRecord: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		artifact: IMapperMethod,
		parentHost: IMapperMethod,
	},
	passwordAuthenticationMethod: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	passwordAuthenticationMethods: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	payload: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	payloads: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	peopleAdminSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		profileCardProperties: IMapperMethod,
		pronouns: IMapperMethod,
		itemInsights: IMapperMethod,
	},
	permission: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		update: IMapperMethod & {
			argNames: ["values"]
		},
	},
	permissions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	permissionGrantConditionSet: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	permissionGrantConditionSets: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	permissionGrantPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		excludes: IMapperMethod,
		includes: IMapperMethod,
	},
	permissionGrantPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	person: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	persons: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	phoneAuthenticationMethod: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	phoneAuthenticationMethods: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	pinnedChatMessageInfo: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		message: IMapperMethod,
	},
	pinnedChatMessageInfos: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	place: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	planner: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		buckets: IMapperMethod,
		plans: IMapperMethod,
		tasks: IMapperMethod,
	},
	plannerAssignedToTaskBoardTaskFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	plannerBucket: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		tasks: IMapperMethod,
	},
	plannerBuckets: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	plannerBucketTaskBoardTaskFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	plannerGroup: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		plans: IMapperMethod,
	},
	plannerPlan: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		buckets: IMapperMethod,
		details: IMapperMethod,
		tasks: IMapperMethod,
	},
	plannerPlans: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	plannerPlanDetails: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	plannerProgressTaskBoardTaskFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	plannerTask: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignedToTaskBoardFormat: IMapperMethod,
		bucketTaskBoardFormat: IMapperMethod,
		details: IMapperMethod,
		progressTaskBoardFormat: IMapperMethod,
	},
	plannerTasks: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	plannerTaskDetails: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	plannerUser: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		plans: IMapperMethod,
		tasks: IMapperMethod,
	},
	playPromptOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	policyBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	policyRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }
		multiTenantOrganizationIdentitySynchronization: IMapperMethod,
		multiTenantOrganizationPartnerConfiguration: IMapperMethod,
	},
	post: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		attachments: IMapperMethod,
		extensions: IMapperMethod,
		inReplyTo: IMapperMethod,
		multiValueExtendedProperties: IMapperMethod,
		singleValueExtendedProperties: IMapperMethod,
	},
	posts: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	presence: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	presences: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	print: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		connectors: IMapperMethod,
		operations: IMapperMethod,
		printers: IMapperMethod,
		services: IMapperMethod,
		shares: IMapperMethod,
		taskDefinitions: IMapperMethod,
	},
	printConnector: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	printConnectors: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	printDocument: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	printDocuments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	printJob: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		documents: IMapperMethod,
		tasks: IMapperMethod,
	},
	printJobs: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	printOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	printOperations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	printService: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		endpoints: IMapperMethod,
	},
	printServices: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	printServiceEndpoint: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	printServiceEndpoints: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	printTask: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		definition: IMapperMethod,
		trigger: IMapperMethod,
	},
	printTasks: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	printTaskDefinition: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		tasks: IMapperMethod,
	},
	printTaskDefinitions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	printTaskTrigger: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		definition: IMapperMethod,
	},
	printTaskTriggers: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	printUsage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	printUsageByPrinter: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	printUsageByPrinters: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	printUsageByUser: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	printUsageByUsers: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	printer: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		connectors: IMapperMethod,
		shares: IMapperMethod,
		taskTriggers: IMapperMethod,
	},
	printers: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	printerBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		jobs: IMapperMethod,
	},
	printerCreateOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		printer: IMapperMethod,
	},
	printerShare: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		allowedGroups: IMapperMethod,
		allowedUsers: IMapperMethod,
		printer: IMapperMethod,
	},
	printerShares: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	privacy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		subjectRightsRequests: IMapperMethod,
	},
	privilegedAccessGroup: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }
		activatedUsing: IMapperMethod,
		group: IMapperMethod,
		principal: IMapperMethod,
	},
	privilegedAccessGroupAssignmentSchedules: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	privilegedAccessGroupAssignmentScheduleInstance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		activatedUsing: IMapperMethod,
		group: IMapperMethod,
		principal: IMapperMethod,
	},
	privilegedAccessGroupAssignmentScheduleInstances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	privilegedAccessGroupAssignmentScheduleRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		activatedUsing: IMapperMethod,
		group: IMapperMethod,
		principal: IMapperMethod,
		targetSchedule: IMapperMethod,
	},
	privilegedAccessGroupAssignmentScheduleRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	privilegedAccessGroupEligibilitySchedule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		group: IMapperMethod,
		principal: IMapperMethod,
	},
	privilegedAccessGroupEligibilitySchedules: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	privilegedAccessGroupEligibilityScheduleInstance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		group: IMapperMethod,
		principal: IMapperMethod,
	},
	privilegedAccessGroupEligibilityScheduleInstances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	privilegedAccessGroupEligibilityScheduleRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		group: IMapperMethod,
		principal: IMapperMethod,
		targetSchedule: IMapperMethod,
	},
	privilegedAccessGroupEligibilityScheduleRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	privilegedAccessRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		group: IMapperMethod,
	},
	privilegedAccessSchedule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	privilegedAccessScheduleInstance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	privilegedAccessScheduleRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	profileCardProperty: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	profileCardPropertys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	profilePhoto: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	profilePhotos: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	pronounsSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	protectionPolicyBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	protectionPolicyBases: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	protectionRuleBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	protectionUnitBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	protectionUnitBases: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	provisioningObjectSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	provisioningObjectSummarys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	qna: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	rbacApplication: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	referenceAttachment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	relation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		fromTerm: IMapperMethod,
		set: IMapperMethod,
		toTerm: IMapperMethod,
	},
	relyingPartyDetailedSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	remoteAssistancePartner: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	remoteAssistancePartners: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	remoteDesktopSecurityConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		targetDeviceGroups: IMapperMethod,
	},
	reportRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	resellerDelegatedAdminRelationship: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	resourceOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	resourceOperations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	resourceSpecificPermissionGrant: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	resourceSpecificPermissionGrants: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	restoreArtifactBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		restorePoint: IMapperMethod,
	},
	restorePoint: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		protectionUnit: IMapperMethod,
	},
	restorePoints: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	restoreSessionBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	restoreSessionBases: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	retentionEvent: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		retentionEventType: IMapperMethod,
	},
	retentionEventType: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	retentionLabel: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		descriptors: IMapperMethod,
		dispositionReviewStages: IMapperMethod,
		retentionEventType: IMapperMethod,
	},
	richLongRunningOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	richLongRunningOperations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	riskDetection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	riskDetections: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	riskyServicePrincipal: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		history: IMapperMethod,
	},
	riskyServicePrincipals: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	riskyServicePrincipalHistoryItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	riskyServicePrincipalHistoryItems: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	riskyUser: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		history: IMapperMethod,
	},
	riskyUsers: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	riskyUserHistoryItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	riskyUserHistoryItems: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	roleAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		roleDefinition: IMapperMethod,
	},
	roleAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	roleDefinition: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		roleAssignments: IMapperMethod,
	},
	roleDefinitions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	roleManagement: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		directory: IMapperMethod,
		entitlementManagement: IMapperMethod,
	},
	room: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	rooms: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	roomList: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		rooms: IMapperMethod,
	},
	run: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		taskProcessingResults: IMapperMethod,
		userProcessingResults: IMapperMethod,
	},
	runningOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	samlOrWsFedExternalDomainFederation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		domains: IMapperMethod,
	},
	samlOrWsFedProvider: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	schedule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	schedulingGroup: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	schedulingGroups: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	schema: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	schemaExtension: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	scopedRoleMembership: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	scopedRoleMemberships: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	search: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	searchAnswer: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	searchEntity: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		acronyms: IMapperMethod,
		bookmarks: IMapperMethod,
		qnas: IMapperMethod,
	},
	sectionGroup: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		parentNotebook: IMapperMethod,
		parentSectionGroup: IMapperMethod,
		sectionGroups: IMapperMethod,
		sections: IMapperMethod,
	},
	sectionGroups: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	secureScore: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	secureScores: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	secureScoreControlProfile: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	secureScoreControlProfiles: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	security: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	segment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	sendDtmfTonesOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	sensor: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		healthIssues: IMapperMethod,
	},
	serviceAnnouncement: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		healthOverviews: IMapperMethod,
		issues: IMapperMethod,
		messages: IMapperMethod,
	},
	serviceAnnouncementAttachment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	serviceAnnouncementAttachments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	serviceAnnouncementBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	serviceApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	serviceApps: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	serviceHealth: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		issues: IMapperMethod,
	},
	serviceHealths: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	serviceHealthIssue: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	serviceHealthIssues: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	servicePrincipal: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	servicePrincipalRiskDetections: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	serviceStorageQuotaBreakdown: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	serviceStorageQuotaBreakdowns: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	serviceUpdateMessage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		attachments: IMapperMethod,
	},
	serviceUpdateMessages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	session: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		segments: IMapperMethod,
	},
	set: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		children: IMapperMethod,
		parentGroup: IMapperMethod,
		relations: IMapperMethod,
		terms: IMapperMethod,
	},
	settingStateDeviceSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	settingStateDeviceSummarys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	sharePointProtectionPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		siteInclusionRules: IMapperMethod,
		siteProtectionUnits: IMapperMethod,
	},
	sharePointProtectionPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	sharePointRestoreSession: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		siteRestoreArtifacts: IMapperMethod,
	},
	sharePointRestoreSessions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	sharedDriveItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }
		lastSharedMethod: IMapperMethod,
		resource: IMapperMethod,
	},
	sharedInsights: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	sharedPCConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	sharedWithChannelTeamInfo: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		allowedMembers: IMapperMethod,
	},
	sharedWithChannelTeamInfos: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	sharepoint: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		settings: IMapperMethod,
	},
	sharepointSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	shift: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	shifts: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	shiftPreferences: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	signIn: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	signIns: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	simulation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		landingPage: IMapperMethod,
		loginPage: IMapperMethod,
		payload: IMapperMethod,
	},
	simulations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	simulationAutomation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		runs: IMapperMethod,
	},
	simulationAutomations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	simulationAutomationRun: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	simulationAutomationRuns: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	singleValueLegacyExtendedProperty: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	singleValueLegacyExtendedPropertys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	site: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }
		canvasLayout: IMapperMethod,
		webParts: IMapperMethod,
	},
	siteProtectionRule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	siteProtectionRules: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	siteProtectionUnit: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	siteProtectionUnits: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	siteRestoreArtifact: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	siteRestoreArtifacts: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	siteSource: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		site: IMapperMethod,
	},
	sites: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		add: IMapperMethod & {
			argNames: ["values"]
		},
	},
	skypeForBusinessUserConversationMember: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	skypeUserConversationMember: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	smsAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		includeTargets: IMapperMethod,
	},
	smsAuthenticationMethodTarget: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	smsAuthenticationMethodTargets: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	socialIdentityProvider: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	softwareOathAuthenticationMethod: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	softwareOathAuthenticationMethods: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	softwareOathAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		includeTargets: IMapperMethod,
	},
	softwareUpdateStatusSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	solutionsRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		bookingBusinesses: IMapperMethod,
		bookingCurrencies: IMapperMethod,
		backupRestore: IMapperMethod,
		virtualEvents: IMapperMethod,
	},
	sslCertificate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		relatedHosts: IMapperMethod,
	},
	standardWebPart: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	startHoldMusicOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	stopHoldMusicOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	storage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		fileStorage: IMapperMethod,
		settings: IMapperMethod,
	},
	storageQuotaBreakdown: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	storageSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		quota: IMapperMethod,
	},
	store: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		groups: IMapperMethod,
		sets: IMapperMethod,
	},
	stsPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appliesTo: IMapperMethod,
	},
	subcategoryTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	subdomain: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		host: IMapperMethod,
	},
	subjectRightsRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		approvers: IMapperMethod,
		collaborators: IMapperMethod,
		notes: IMapperMethod,
		team: IMapperMethod,
	},
	subjectRightsRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	subscribeToToneOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	subscribedSku: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	subscription: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	subscriptions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	swapShiftsChangeRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	swapShiftsChangeRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	synchronization: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		jobs: IMapperMethod,
		templates: IMapperMethod,
	},
	synchronizationJob: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		bulkUpload: IMapperMethod,
		schema: IMapperMethod,
	},
	synchronizationJobs: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	synchronizationSchema: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		directories: IMapperMethod,
	},
	synchronizationTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		schema: IMapperMethod,
	},
	synchronizationTemplates: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	tag: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	targetDeviceGroup: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	targetDeviceGroups: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	targetedManagedAppConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		apps: IMapperMethod,
		assignments: IMapperMethod,
		deploymentSummary: IMapperMethod,
	},
	targetedManagedAppConfigurations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	targetedManagedAppPolicyAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	targetedManagedAppPolicyAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	targetedManagedAppProtection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignments: IMapperMethod,
	},
	task: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		taskProcessingResults: IMapperMethod,
	},
	taskDefinition: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	taskFileAttachment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	taskProcessingResult: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		subject: IMapperMethod,
		task: IMapperMethod,
	},
	taskReport: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		task: IMapperMethod,
		taskDefinition: IMapperMethod,
		taskProcessingResults: IMapperMethod,
	},
	team: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
	teams: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	teamInfo: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		team: IMapperMethod,
	},
	teamsApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appDefinitions: IMapperMethod,
	},
	teamsApps: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	teamsAppDefinition: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		bot: IMapperMethod,
	},
	teamsAppDefinitions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	teamsAppInstallation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		teamsApp: IMapperMethod,
		teamsAppDefinition: IMapperMethod,
	},
	teamsAppInstallations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	teamsAppSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	teamsAsyncOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	teamsAsyncOperations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	teamsTab: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		teamsApp: IMapperMethod,
	},
	teamsTabs: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	teamsTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	teamwork: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		workforceIntegrations: IMapperMethod,
		deletedChats: IMapperMethod,
		deletedTeams: IMapperMethod,
		teamsAppSettings: IMapperMethod,
	},
	teamworkBot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	teamworkHostedContent: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	teamworkTag: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		members: IMapperMethod,
	},
	teamworkTags: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	teamworkTagMember: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	teamworkTagMembers: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	telecomExpenseManagementPartner: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	telecomExpenseManagementPartners: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	temporaryAccessPassAuthenticationMethod: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	temporaryAccessPassAuthenticationMethods: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	temporaryAccessPassAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		includeTargets: IMapperMethod,
	},
	tenantAppManagementPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	tenantRelationship: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		multiTenantOrganization: IMapperMethod,
		delegatedAdminCustomers: IMapperMethod,
		delegatedAdminRelationships: IMapperMethod,
	},
	term: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		children: IMapperMethod,
		relations: IMapperMethod,
		set: IMapperMethod,
	},
	termsAndConditions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		acceptanceStatuses: IMapperMethod,
		assignments: IMapperMethod,
	},
	termsAndConditionss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	termsAndConditionsAcceptanceStatus: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		termsAndConditions: IMapperMethod,
	},
	termsAndConditionsAcceptanceStatuss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	termsAndConditionsAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	termsAndConditionsAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	termsOfUseContainer: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		agreementAcceptances: IMapperMethod,
		agreements: IMapperMethod,
	},
	textWebPart: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	threatAssessmentRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		results: IMapperMethod,
	},
	threatAssessmentRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	threatAssessmentResult: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	threatAssessmentResults: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	threatIntelligence: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	thumbnailSets: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	timeOff: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	timeOffs: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	timeOffReason: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	timeOffReasons: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	timeOffRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	timeOffRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	todo: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		lists: IMapperMethod,
	},
	todoTask: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		attachments: IMapperMethod,
		attachmentSessions: IMapperMethod,
		checklistItems: IMapperMethod,
		extensions: IMapperMethod,
		linkedResources: IMapperMethod,
	},
	todoTasks: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	todoTaskList: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		extensions: IMapperMethod,
		tasks: IMapperMethod,
	},
	todoTaskLists: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	tokenIssuancePolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	tokenIssuancePolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	tokenLifetimePolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	tokenLifetimePolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	training: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		languageDetails: IMapperMethod,
	},
	trainings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	trainingLanguageDetail: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	trainingLanguageDetails: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	trending: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		resource: IMapperMethod,
	},
	trendings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	triggerTypesRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		retentionEventTypes: IMapperMethod,
	},
	triggersRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		retentionEvents: IMapperMethod,
	},
	unbilledUsage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	unclassifiedArtifact: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	unifiedGroupSource: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		group: IMapperMethod,
	},
	unifiedRbacResourceAction: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	unifiedRbacResourceActions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRbacResourceNamespace: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		resourceActions: IMapperMethod,
	},
	unifiedRbacResourceNamespaces: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRoleAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appScope: IMapperMethod,
		directoryScope: IMapperMethod,
		principal: IMapperMethod,
		roleDefinition: IMapperMethod,
	},
	unifiedRoleAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRoleAssignmentSchedule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		activatedUsing: IMapperMethod,
	},
	unifiedRoleAssignmentSchedules: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRoleAssignmentScheduleInstance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		activatedUsing: IMapperMethod,
	},
	unifiedRoleAssignmentScheduleInstances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRoleAssignmentScheduleRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		activatedUsing: IMapperMethod,
		appScope: IMapperMethod,
		directoryScope: IMapperMethod,
		principal: IMapperMethod,
		roleDefinition: IMapperMethod,
		targetSchedule: IMapperMethod,
	},
	unifiedRoleAssignmentScheduleRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRoleDefinition: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		inheritsPermissionsFrom: IMapperMethod,
	},
	unifiedRoleDefinitions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRoleEligibilitySchedule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	unifiedRoleEligibilitySchedules: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRoleEligibilityScheduleInstance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	unifiedRoleEligibilityScheduleInstances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRoleEligibilityScheduleRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appScope: IMapperMethod,
		directoryScope: IMapperMethod,
		principal: IMapperMethod,
		roleDefinition: IMapperMethod,
		targetSchedule: IMapperMethod,
	},
	unifiedRoleEligibilityScheduleRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRoleManagementPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		effectiveRules: IMapperMethod,
		rules: IMapperMethod,
	},
	unifiedRoleManagementPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRoleManagementPolicyApprovalRule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	unifiedRoleManagementPolicyAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		policy: IMapperMethod,
	},
	unifiedRoleManagementPolicyAssignments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRoleManagementPolicyAuthenticationContextRule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	unifiedRoleManagementPolicyEnablementRule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	unifiedRoleManagementPolicyExpirationRule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	unifiedRoleManagementPolicyNotificationRule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	unifiedRoleManagementPolicyRule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	unifiedRoleManagementPolicyRules: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	unifiedRoleScheduleBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appScope: IMapperMethod,
		directoryScope: IMapperMethod,
		principal: IMapperMethod,
		roleDefinition: IMapperMethod,
	},
	unifiedRoleScheduleInstanceBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appScope: IMapperMethod,
		directoryScope: IMapperMethod,
		principal: IMapperMethod,
		roleDefinition: IMapperMethod,
	},
	unifiedStorageQuota: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		services: IMapperMethod,
	},
	unmuteParticipantOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	updateRecordingStatusOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	urlAssessmentRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	usedInsight: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		resource: IMapperMethod,
	},
	usedInsights: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	user: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
	users: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userActivity: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		historyItems: IMapperMethod,
	},
	userActivitys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userConsentRequest: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		approval: IMapperMethod,
	},
	userConsentRequests: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIds: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsAppHealthAppPerformanceByOSVersion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsAppHealthAppPerformanceByOSVersions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsAppHealthApplicationPerformance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsAppHealthApplicationPerformances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsAppHealthDeviceModelPerformance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsAppHealthDeviceModelPerformances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsAppHealthDevicePerformance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsAppHealthDevicePerformances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsAppHealthDevicePerformanceDetails: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsAppHealthDevicePerformanceDetailss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsAppHealthOSVersionPerformance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsAppHealthOSVersionPerformances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsBaseline: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		appHealthMetrics: IMapperMethod,
		batteryHealthMetrics: IMapperMethod,
		bestPracticesMetrics: IMapperMethod,
		deviceBootPerformanceMetrics: IMapperMethod,
		rebootAnalyticsMetrics: IMapperMethod,
		resourcePerformanceMetrics: IMapperMethod,
		workFromAnywhereMetrics: IMapperMethod,
	},
	userExperienceAnalyticsBaselines: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsCategory: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		metricValues: IMapperMethod,
	},
	userExperienceAnalyticsCategorys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsDevicePerformance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsDevicePerformances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsDeviceScores: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsDeviceScoress: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsDeviceStartupHistory: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsDeviceStartupHistorys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsDeviceStartupProcess: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsDeviceStartupProcesss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsDeviceStartupProcessPerformance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsDeviceStartupProcessPerformances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsMetric: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsMetrics: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsMetricHistory: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsMetricHistorys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsModelScores: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsModelScoress: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsOverview: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsScoreHistory: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsScoreHistorys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsWorkFromAnywhereDevice: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsWorkFromAnywhereDevices: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsWorkFromAnywhereMetric: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		metricDevices: IMapperMethod,
	},
	userExperienceAnalyticsWorkFromAnywhereMetrics: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userExperienceAnalyticsWorkFromAnywhereModelPerformance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userExperienceAnalyticsWorkFromAnywhereModelPerformances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userFlowLanguageConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		defaultPages: IMapperMethod,
		overridesPages: IMapperMethod,
	},
	userFlowLanguageConfigurations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userFlowLanguagePage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userFlowLanguagePages: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userInsightsSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userInstallStateSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		deviceStates: IMapperMethod,
	},
	userInstallStateSummarys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userProcessingResult: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		subject: IMapperMethod,
		taskProcessingResults: IMapperMethod,
	},
	userRegistrationDetails: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userRegistrationDetailss: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userScopeTeamsAppInstallation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		chat: IMapperMethod,
	},
	userScopeTeamsAppInstallations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	userSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		itemInsights: IMapperMethod,
		windows: IMapperMethod,
		shiftPreferences: IMapperMethod,
		storage: IMapperMethod,
	},
	userSignInInsight: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userSolutionRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		workingTimeSchedule: IMapperMethod,
	},
	userSource: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	userStorage: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		quota: IMapperMethod,
	},
	userTeamwork: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		associatedTeams: IMapperMethod,
		installedApps: IMapperMethod,
	},
	verticalSection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		webparts: IMapperMethod,
	},
	virtualEndpoint: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }
		presenters: IMapperMethod,
		sessions: IMapperMethod,
	},
	virtualEvents: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	virtualEventPresenter: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	virtualEventPresenters: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	virtualEventRegistration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		sessions: IMapperMethod,
	},
	virtualEventRegistrations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	virtualEventRegistrationConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		questions: IMapperMethod,
	},
	virtualEventRegistrationCustomQuestion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	virtualEventRegistrationPredefinedQuestion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	virtualEventRegistrationQuestionBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	virtualEventRegistrationQuestionBases: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	virtualEventSession: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	virtualEventSessions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	virtualEventTownhall: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	virtualEventTownhalls: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	virtualEventWebinar: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		registrationConfiguration: IMapperMethod,
		registrations: IMapperMethod,
	},
	virtualEventWebinars: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	virtualEventWebinarRegistrationConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	virtualEventsRoot: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		events: IMapperMethod,
		townhalls: IMapperMethod,
		webinars: IMapperMethod,
	},
	voiceAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		includeTargets: IMapperMethod,
	},
	vppToken: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	vppTokens: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	vulnerability: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		articles: IMapperMethod,
		components: IMapperMethod,
	},
	vulnerabilityComponent: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	webApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	webPart: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	webParts: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	whoisBaseRecord: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		host: IMapperMethod,
	},
	whoisHistoryRecord: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	whoisRecord: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		history: IMapperMethod,
	},
	win32LobApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windows10CompliancePolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windows10CustomConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windows10EndpointProtectionConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windows10EnrollmentCompletionPageConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windows10EnterpriseModernAppManagementConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windows10GeneralConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windows10MobileCompliancePolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windows10SecureAssessmentConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windows10TeamGeneralConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windows81CompliancePolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windows81GeneralConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsAppX: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsAutopilotDeploymentProfile: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignedDevices: IMapperMethod,
	},
	windowsAutopilotDeploymentProfileAssignment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsAutopilotDeviceIdentity: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsAutopilotDeviceIdentitys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	windowsDefenderAdvancedThreatProtectionConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsDeviceMalwareState: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsDeviceMalwareStates: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	windowsHelloForBusinessAuthenticationMethod: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		device: IMapperMethod,
	},
	windowsHelloForBusinessAuthenticationMethods: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	windowsInformationProtection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		assignments: IMapperMethod,
		exemptAppLockerFiles: IMapperMethod,
		protectedAppLockerFiles: IMapperMethod,
	},
	windowsInformationProtectionAppLearningSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsInformationProtectionAppLearningSummarys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	windowsInformationProtectionAppLockerFile: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsInformationProtectionAppLockerFiles: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	windowsInformationProtectionNetworkLearningSummary: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsInformationProtectionNetworkLearningSummarys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	windowsInformationProtectionPolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsInformationProtectionPolicys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	windowsMalwareInformation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		deviceMalwareStates: IMapperMethod,
	},
	windowsMalwareInformations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	windowsMicrosoftEdgeApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsMobileMSI: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsPhone81CompliancePolicy: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsPhone81CustomConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsPhone81GeneralConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsProtectionState: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		detectedMalwareState: IMapperMethod,
	},
	windowsSetting: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		instances: IMapperMethod,
	},
	windowsSettings: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	windowsSettingInstance: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsSettingInstances: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	windowsUniversalAppX: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		committedContainedApps: IMapperMethod,
	},
	windowsUniversalAppXContainedApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsUpdateForBusinessConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	windowsWebApp: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbook: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
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
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookChart: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		axes: IMapperMethod,
		dataLabels: IMapperMethod,
		format: IMapperMethod,
		legend: IMapperMethod,
		series: IMapperMethod,
		title: IMapperMethod,
		worksheet: IMapperMethod,
	},
	workbookCharts: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookChartAreaFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		fill: IMapperMethod,
		font: IMapperMethod,
	},
	workbookChartAxes: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		categoryAxis: IMapperMethod,
		seriesAxis: IMapperMethod,
		valueAxis: IMapperMethod,
	},
	workbookChartAxis: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		format: IMapperMethod,
		majorGridlines: IMapperMethod,
		minorGridlines: IMapperMethod,
		title: IMapperMethod,
	},
	workbookChartAxisFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		font: IMapperMethod,
		line: IMapperMethod,
	},
	workbookChartAxisTitle: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		format: IMapperMethod,
	},
	workbookChartAxisTitleFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		font: IMapperMethod,
	},
	workbookChartDataLabelFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		fill: IMapperMethod,
		font: IMapperMethod,
	},
	workbookChartDataLabels: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		format: IMapperMethod,
	},
	workbookChartFill: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookChartFont: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookChartGridlines: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		format: IMapperMethod,
	},
	workbookChartGridlinesFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		line: IMapperMethod,
	},
	workbookChartLegend: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		format: IMapperMethod,
	},
	workbookChartLegendFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		fill: IMapperMethod,
		font: IMapperMethod,
	},
	workbookChartLineFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookChartPoint: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		format: IMapperMethod,
	},
	workbookChartPoints: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookChartPointFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		fill: IMapperMethod,
	},
	workbookChartSeries: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		format: IMapperMethod,
		points: IMapperMethod,
	},
	workbookChartSeriess: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookChartSeriesFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		fill: IMapperMethod,
		line: IMapperMethod,
	},
	workbookChartTitle: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		format: IMapperMethod,
	},
	workbookChartTitleFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		fill: IMapperMethod,
		font: IMapperMethod,
	},
	workbookComment: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		replies: IMapperMethod,
	},
	workbookComments: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookCommentReply: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookCommentReplys: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookFilter: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookFormatProtection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookFunctionResult: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookFunctions: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookNamedItem: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		worksheet: IMapperMethod,
	},
	workbookNamedItems: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookOperation: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookOperations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookPivotTable: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		worksheet: IMapperMethod,
	},
	workbookPivotTables: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookRange: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		format: IMapperMethod,
		sort: IMapperMethod,
		worksheet: IMapperMethod,
	},
	workbookRangeBorder: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookRangeBorders: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookRangeFill: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookRangeFont: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookRangeFormat: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		borders: IMapperMethod,
		fill: IMapperMethod,
		font: IMapperMethod,
		protection: IMapperMethod,
	},
	workbookRangeSort: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookRangeView: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		rows: IMapperMethod,
	},
	workbookRangeViews: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookTable: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		columns: IMapperMethod,
		rows: IMapperMethod,
		sort: IMapperMethod,
		worksheet: IMapperMethod,
	},
	workbookTables: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookTableColumn: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		filter: IMapperMethod,
	},
	workbookTableColumns: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookTableRow: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookTableRows: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookTableSort: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workbookWorksheet: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		charts: IMapperMethod,
		names: IMapperMethod,
		pivotTables: IMapperMethod,
		protection: IMapperMethod,
		tables: IMapperMethod,
	},
	workbookWorksheets: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workbookWorksheetProtection: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workflow: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		executionScope: IMapperMethod,
		runs: IMapperMethod,
		taskReports: IMapperMethod,
		userProcessingResults: IMapperMethod,
		versions: IMapperMethod,
	},
	workflowBase: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		createdBy: IMapperMethod,
		lastModifiedBy: IMapperMethod,
		tasks: IMapperMethod,
	},
	workflowTemplate: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		tasks: IMapperMethod,
	},
	workflowVersion: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workforceIntegration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	workforceIntegrations: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
	},
	workingTimeSchedule: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
	x509CertificateAuthenticationMethodConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }
		includeTargets: IMapperMethod,
	},
	x509CertificateCombinationConfiguration: {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] }

	},
}