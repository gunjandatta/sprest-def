import { IMapper } from "./mapper.d";
declare var RequestType;

export const Mapper: IMapper = {
	"MS.FileServices.File": {
		copyTo: {
		argNames: [ "target", "overwrite" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		download: {
		},

		moveTo: {
		argNames: [ "target", "overwrite" ],
		},

		upload: {
		argNames: [ "stream" ],
		},

	},

	"MS.FileServices.FileSystemItem.Collection": {
		add: {
		argNames: [ "name", "overwrite", "content" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"MS.FileServices.Folder": {
		delete: {
		requestType: RequestType.Delete
		},

		moveTo: {
		argNames: [ "target" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.AppServices.AppCollection": {
		getAppsFromStore: {
		argNames: [ "addInType", "queryString" ],
		},

		getByType: {
		argNames: [ "type" ],
		},

	},

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningHub": {
		checkAIBuilderAccess: {
		argNames: [ "environmentName", "isTestEnvironment", "userId" ],
		},

		getAutofillColumnSettings: {
		argNames: [ "docLibId" ],
		},

		getAutofillCustomModelDefaultParameters: {
		argNames: [ "customModelId", "keepTokenCountLimit" ],
		},

		getAutofillCustomModelSettings: {
		},

		getAutofillCustomModels: {
		},

		getByContentTypeId: {
		argNames: [ "contentTypeId" ],
		},

		getCDSMetadata: {
		argNames: [ "environmentName", "isTestEnvironment" ],
		},

		getColumnLLMInfo: {
		argNames: [ "docLibId", "columnId" ],
		},

		getLibraryLLMInfo: {
		argNames: [ "docLibId" ],
		},

		getMachineLearningFlags: {
		argNames: [ "docLibId" ],
		},

		getModelIdForContentType: {
		argNames: [ "contentTypeName" ],
		},

		getModels: {
		argNames: [ "listId", "modelTypes", "publicationTypes", "includeManagementNotAllowedModels" ],
		},

		getRetentionLabel: {
		argNames: [ "retentionLabelId" ],
		},

		getRetentionLabels: {
		},

		getSyntexPoweredColumnPrompts: {
		argNames: [ "docLibId" ],
		},

		invokeDataverseQuery: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		setAutofillColumnSettings: {
		argNames: [ "docLibId", "autofillColumnSettings" ],
		},

		setColumnLLMInfo: {
		argNames: [ "docLibId", "columnId", "autofillPrompt", "isEnabled", "customModelId", "customParametersJson", "analyzeImageWithVision", "analyzeImageDetailLevel", "autofillColumnType" ],
		},

		setMachineLearningFlags: {
		argNames: [ "docLibId", "machineLearningFlags" ],
		},

		setSyntexPoweredColumnPrompts: {
		argNames: [ "docLibId", "syntexPoweredColumnPrompts" ],
		},

		verifyModelUrls: {
		argNames: [ "urls" ],
		},

		verifyModelUrlsAndGrantPAC: {
		argNames: [ "urls" ],
		},

	},

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningModel": {
		addModelDependency: {
		argNames: [ "modelId", "updateExisting" ],
		},

		copy: {
		argNames: [ "copyTo" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		importMeta: {
		},

		invokeConnectorQuery: {
		},

		removeModelDependency: {
		argNames: [ "modelId" ],
		},

		rename: {
		argNames: [ "renameTo" ],
		},

		renameExtractor: {
		argNames: [ "fromExtractorName", "toExtractorName", "toColumnType" ],
		},

		setAsModelAuthor: {
		},

		update: {
		},

		updateModelSettings: {
		argNames: [ "ModelSettings" ],
		},

		updateModelTypeSpecificSettings: {
		argNames: [ "Settings" ],
		},

	},

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningModel.Collection": {
		getByTitle: {
		argNames: [ "title" ],
		},

		getByUniqueId: {
		argNames: [ "uniqueId" ],
		},

		getExtractorNames: {
		argNames: [ "packageName" ],
		},

		import: {
		argNames: [ "packageName" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		setupPrimedLibrary: {
		argNames: [ "primedLibraryName", "packageName", "isTileViewEnabled", "serverRelativeLibraryPath" ],
		},

		unbindModelFromContentType: {
		argNames: [ "contentTypeId" ],
		},

	},

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication": {
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication.Collection": {
		batchDelete: {
		argNames: [ "publications" ],
		},

		batchRemove: {
		argNames: [ "modelSiteUrl", "modelWebServerRelativeUrl", "publications" ],
		},

		batchUnpromote: {
		argNames: [ "promotions" ],
		},

		checkTenantPublishPermissions: {
		},

		getByModelUniqueId: {
		argNames: [ "modelUniqueId" ],
		},

		getByModelUniqueIdAndPublicationType: {
		argNames: [ "modelUniqueId", "publicationType" ],
		},

		getByUniqueId: {
		argNames: [ "uniqueId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningSample": {
		update: {
		},

	},

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningSample.Collection": {
		getByModelId: {
		argNames: [ "modelID" ],
		},

		getByTitle: {
		argNames: [ "title" ],
		},

		getByUniqueId: {
		argNames: [ "uniqueId" ],
		},

		getByUniqueIdWithTokenization: {
		argNames: [ "uniqueId" ],
		},

		getTemplateByModelId: {
		argNames: [ "modelID" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItem.Collection": {
		getByIdentifier: {
		argNames: [ "identifier" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Office.Server.Search.REST.SearchService": {
		autocompletions: {
		argNames: [ "querytext", "sources", "numberOfCompletions", "cursorPosition" ],
		},

		export: {
		argNames: [ "userName", "startTime" ],
		},

		exportmanualsuggestions: {
		},

		exportpopulartenantqueries: {
		argNames: [ "count" ],
		},

		postquery: {
		argNames: [ "request" ],
		},

		query: {
		argNames: [ "querytext", "queryTemplate", "enableInterleaving", "sourceId", "rankingModelId", "startRow", "rowLimit", "rowsPerPage", "selectProperties", "culture", "refinementFilters", "refiners", "hiddenConstraints", "sortList", "enableStemming", "trimDuplicates", "timeout", "enableNicknames", "enablePhonetic", "enableFQL", "hitHighlightedProperties", "propertiesToGenerateAcronyms", "bypassResultTypes", "processBestBets", "clientType", "personalizationData", "resultsUrl", "queryTag", "trimDuplicatesIncludeId", "totalRowsExactMinimum", "impressionId", "properties", "enableQueryRules", "summaryLength", "maxSnippetLength", "desiredSnippetLength", "uiLanguage", "blockDedupeMode", "generateBlockRankLog", "enableSorting", "collapseSpecification", "processPersonalFavorites", "enableOrderingHitHighlightedProperty", "hitHighlightedMultivaluePropertyLimit", "queryTemplatePropertiesUrl", "timeZoneId", "useOLSQuery", "OLSQuerySession" ],
		},

		recordPageClick: {
		argNames: [ "pageInfo", "clickType", "blockType", "clickedResultId", "subResultIndex", "immediacySourceId", "immediacyQueryString", "immediacyTitle", "immediacyUrl" ],
		},

		resultspageaddress: {
		},

		searchcenterurl: {
		},

		searchquery: {
		argNames: [ "request" ],
		},

		suggest: {
		argNames: [ "querytext", "iNumberOfQuerySuggestions", "iNumberOfResultSuggestions", "iNumberOfPopularResultSuggestions", "fPreQuerySuggestions", "fHitHighlighting", "fCapitalizeFirstLetters", "culture", "enableStemming", "showPeopleNameSuggestions", "enableQueryRules", "fPrefixMatchAllTerms", "sourceId", "clientType", "useOLSQuery", "OLSQuerySession", "zeroTermSuggestions" ],
		},

	},

	"Microsoft.Office.Server.Search.REST.SearchSetting": {
		exportSearchReports: {
		argNames: [ "TenantId", "ReportType", "Interval", "StartDate", "EndDate", "SiteCollectionId" ],
		},

		getpromotedresultqueryrules: {
		argNames: [ "siteCollectionLevel", "offset", "numberOfRules" ],
		},

		getqueryconfiguration: {
		argNames: [ "callLocalSearchFarmsOnly", "skipGroupObjectIdLookup", "throwOnRemoteApiCheck" ],
		},

		getxssearchpolicy: {
		},

		pingadminendpoint: {
		},

		scspartialupdateendpointinfo: {
		},

		setxssearchpolicy: {
		argNames: [ "policy" ],
		},

	},

	"Microsoft.Online.SharePoint.AppLauncher.AppLauncher": {
		getData: {
		argNames: [ "suiteVersion", "isMobileRequest", "locale", "onPremVer" ],
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationUrlParser": {
		parseUrl: {
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Common.UrlParseResult": {
		setDisplayUrl: {
		argNames: [ "displayUrl" ],
		},

		setSPListInformation: {
		argNames: [ "spListInformationList" ],
		},

		updateSiteProvisionInformation: {
		argNames: [ "spListInformation", "uri", "originalUrl", "errorCode", "message", "freeSiteStorageBytes", "isCurrentUserSiteAdmin" ],
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroup": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroup.Collection": {
		createByName: {
		argNames: [ "Name" ],
		},

		deleteByName: {
		argNames: [ "Name" ],
		},

		getByName: {
		argNames: [ "Name" ],
		},

		getGroupList: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.Device": {
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.Device.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterDeployStatus": {
		isChangeDeployed: {
		argNames: [ "changeName" ],
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorage": {
		create: {
		argNames: [ "config" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		file: {
		argNames: [ "folderName", "fileName", "file", "overwrite" ],
		},

		parseUrl: {
		argNames: [ "destinationUrl", "retrieveAllLists", "retrieveFoldersForAllLists", "forceMySiteDefaultList", "migrationType" ],
		},

		update: {
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterTeams": {
		teamChannels: {
		argNames: [ "teamId", "membershipType" ],
		},

		teamChannelsExperiment: {
		argNames: [ "teamId", "membershipType" ],
		},

		teams: {
		argNames: [ "startsWith", "limit", "withLogo" ],
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredential": {
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredential.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		getCredentials: {
		argNames: [ "AccountName", "Type" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationProperties": {
		delete: {
		argNames: [ "key" ],
		requestType: RequestType.Delete
		},

		getProperty: {
		argNames: [ "key" ],
		},

		setProperty: {
		argNames: [ "key", "value", "throwIfExists" ],
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationSPFlight": {
		isFlightEnabled: {
		argNames: [ "flightName" ],
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask": {
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask.Collection": {
		batchCreate: {
		argNames: [ "taskDefinitions", "taskSettings", "mmTaskSettings" ],
		},

		batchDelete: {
		argNames: [ "taskIdList", "deleteInProgressTask" ],
		},

		batchUpdate: {
		argNames: [ "tasks" ],
		},

		createDuplicateTasks: {
		argNames: [ "taskDefinition", "taskSettings", "mmTaskSettings", "taskCount" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceData": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceData.Collection": {
		addPerfDataTest: {
		argNames: [ "Count", "Bottleneck", "MaxDuration", "MaxTaskFiles" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		getData: {
		argNames: [ "StartTime", "EndTime", "AgentId", "TimeUnit" ],
		},

		getPerfDataTest: {
		argNames: [ "StartTime", "EndTime", "AgentId" ],
		},

		getRawData: {
		argNames: [ "StartTime", "EndTime", "AgentId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation.Collection": {
		getByLocation: {
		argNames: [ "location" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob.Collection": {
		getByMoveId: {
		argNames: [ "moveId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob.Collection": {
		getByMoveId: {
		argNames: [ "moveId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob.Collection": {
		getByMoveId: {
		argNames: [ "moveId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty": {
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty.Collection": {
		getByPropertyNameAndGeoLocation: {
		argNames: [ "propertyName", "geo" ],
		},

		getChanges: {
		argNames: [ "startTimeInUtc" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.DfDeprecationJob": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.DfDeprecationJob.Collection": {
		getBySiteUrl: {
		argNames: [ "sourceSiteUrl", "targetSiteUrl" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator.Collection": {
		create: {
		argNames: [ "parameters" ],
		},

		getByLoginName: {
		argNames: [ "loginName" ],
		},

		getByLoginNameAndType: {
		argNames: [ "loginName", "memberType" ],
		},

		getByObjectId: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience": {
		upgradeAllInstancesToSPOMode: {
		},

		upgradeToSPOMode: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation.Collection": {
		getByGeoLocation: {
		argNames: [ "geoLocation" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob": {
		cancel: {
		},

		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob.Collection": {
		getByGroupName: {
		argNames: [ "groupname" ],
		},

		getMoveReport: {
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.MoveJobReport": {
		getMoveReport: {
		argNames: [ "jobType", "moveState", "moveDirection", "limit", "startTime", "endTime" ],
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.MoveSiteROState": {
		updateSiteROState: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.MoveSiteROState.Collection": {
		getBySiteId: {
		argNames: [ "siteId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.MultiGeoServicesBeta": {
		compatibleDB: {
		argNames: [ "dbSchemaVersion", "siteSubscriptionId", "siteUrl" ],
		},

		dBSchemaCompatibilityCheck: {
		},

		geoMoveCompatibilityChecks: {
		},

		hasMnALicense: {
		argNames: [ "mnALicenseType" ],
		},

		mnAGroupMoveValidationResult: {
		argNames: [ "encodedQuery" ],
		},

		orgRelationGroupManagedPath: {
		argNames: [ "encodedNotificationQuery" ],
		},

		orgRelationNotification: {
		argNames: [ "encodedNotificationQuery" ],
		},

		orgRelationVerification: {
		argNames: [ "encodedVerificationQuery" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		resolveUserUpnByUserObjectId: {
		argNames: [ "userObjectId" ],
		},

		restoreWorkflowCount: {
		argNames: [ "isCrossTenant" ],
		},

		userMnAODMoveValidationResult: {
		argNames: [ "encodedQuery" ],
		},

		userPersonalSiteId: {
		argNames: [ "userPrincipalName" ],
		},

		userPersonalSiteLocation: {
		argNames: [ "userPrincipalName" ],
		},

		xTenantMoveCompatibilityCheck: {
		argNames: [ "targetTenantHostUrl" ],
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.SBSiteMoveJob": {
		cancel: {
		},

		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob": {
		cancel: {
		},

		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob.Collection": {
		getByUrl: {
		argNames: [ "url" ],
		},

		getMoveJobByUrl: {
		argNames: [ "SourceSiteUrl", "SubscriptionId", "SourceDataLocation", "EnableSiteToMoveDatastore" ],
		},

		getMoveReport: {
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota.Collection": {
		getByLocation: {
		argNames: [ "geoLocation" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup.Collection": {
		getByAlias: {
		argNames: [ "alias" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob": {
		cancel: {
		},

		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob.Collection": {
		getByDirection: {
		argNames: [ "direction" ],
		},

		getByMoveId: {
		argNames: [ "odbMoveId" ],
		},

		getByUpn: {
		argNames: [ "upn" ],
		},

		getByValidPdl: {
		argNames: [ "validPdl" ],
		},

		getMoveReport: {
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.Onboarding.RestService.PrioritySiteRename.PrioritySiteRenameJob.Collection": {
		cancel: {
		argNames: [ "url" ],
		},

		get: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob.Collection": {
		getBySiteUrl: {
		argNames: [ "siteUrl" ],
		},

		getJobsByParentId: {
		argNames: [ "parentId" ],
		},

		getJobsByParentIdAndState: {
		argNames: [ "parentId", "state" ],
		},

		getJobsBySiteUrl: {
		argNames: [ "url" ],
		},

		getJobsCountByParentIdAndState: {
		argNames: [ "parentId", "state" ],
		},

		getSiteRenameReport: {
		argNames: [ "state" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJob.Collection": {
		cancel: {
		},

		get: {
		},

		getV2: {
		},

		getWarningMessages: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.SPLogger.LogExport": {
		getFiles: {
		argNames: [ "partitionId", "logType" ],
		},

		getLogTypes: {
		},

		getPartitions: {
		argNames: [ "logType" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdmin.MiddleTier.DDIAdapter": {
		getList: {
		argNames: [ "schema", "workflow", "stream" ],
		},

		getObject: {
		argNames: [ "schema", "workflow", "stream" ],
		},

		multiObjectExecute: {
		argNames: [ "schema", "workflow", "stream" ],
		},

		newObject: {
		argNames: [ "schema", "workflow", "stream" ],
		},

		removeObjects: {
		argNames: [ "schema", "workflow", "stream" ],
		},

		setObject: {
		argNames: [ "schema", "workflow", "stream" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.CatalogManagementCollection": {
		exportPropertyTypeToCSV: {
		argNames: [ "propertyType" ],
		},

		exportToCSV: {
		argNames: [ "propertyType", "valueId" ],
		},

		get: {
		},

		getProperty: {
		argNames: [ "propertyType" ],
		},

		getValue: {
		argNames: [ "propertyId" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPO3rdPartyAADPermissionGrant.Collection": {
		add: {
		argNames: [ "servicePrincipalId", "resource", "scope" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		remove: {
		argNames: [ "servicePrincipalId", "resource", "scope" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipal": {
		getIsolatedAppDomainsByAppId: {
		argNames: [ "appIds" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		removeAppsToDelete: {
		argNames: [ "domainsToDelete" ],
		},

		update: {
		},

		updateSpfxClientSecret: {
		argNames: [ "secretValue" ],
		},

		updateSpfxThirdPartyAppId: {
		argNames: [ "appId" ],
		},

		updateSpfxThirdPartyIsolatedComponentFields: {
		argNames: [ "catalogItemId", "apAppObjectId", "spObjectId", "appId" ],
		},

		updateSpfxThirdPartyIsolatedSecret: {
		argNames: [ "servicePrincipalId", "secretValue" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant.Collection": {
		getByObjectId: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest": {
		approve: {
		},

		deny: {
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest.Collection": {
		approve: {
		argNames: [ "resource", "scope" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SPDataGovernanceInsightRestApiClient": {
		createDataAccessGovernanceReport: {
		argNames: [ "reportEntity", "workload", "reportType", "fileSensitivityLabelName", "fileSensitivityLabelGUID", "name", "template", "privacy", "siteSensitivityLabelGUID", "countOfUsersMoreThan" ],
		},

		createDataAccessGovernanceReportV2: {
		argNames: [ "reportEntity", "workload", "reportType", "fileSensitivityLabelName", "fileSensitivityLabelGUID", "name", "template", "privacy", "siteSensitivityLabelGUID", "countOfUsersMoreThan", "userIDList" ],
		},

		createDataAccessGovernanceReportV3: {
		argNames: [ "reportEntity", "workload", "reportType", "fileSensitivityLabelName", "fileSensitivityLabelGUID", "name", "template", "privacy", "siteSensitivityLabelGUID", "countOfUsersMoreThan", "userEmailList" ],
		},

		createDataAccessGovernanceReportV4: {
		argNames: [ "request" ],
		},

		exportSPODataAccessGovernanceInsight: {
		argNames: [ "reportId" ],
		},

		exportSPODataAccessGovernanceInsightV2: {
		argNames: [ "reportId" ],
		},

		exportSPODataAccessGovernanceInsightV3: {
		argNames: [ "reportId" ],
		},

		getSPOAuditDataCollectionForAllReports: {
		},

		getSPOAuditDataCollectionForReport: {
		argNames: [ "reportEntity" ],
		},

		getSPODataAccessGovernanceInsight: {
		argNames: [ "reportEntity", "workLoad" ],
		},

		getSPODataAccessGovernanceInsightById: {
		argNames: [ "reportId" ],
		},

		getSPODataAccessGovernanceInsightV2: {
		argNames: [ "reportEntity" ],
		},

		getSPODataAccessGovernanceInsightV3: {
		argNames: [ "request" ],
		},

		removeDataAccessGovernanceReport: {
		argNames: [ "reportId" ],
		},

		setOptInStatusForReports: {
		argNames: [ "reportEntity", "optInStatus" ],
		},

		setOptInStatusForReportsV2: {
		argNames: [ "request" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SPDataGovernanceSARRestApiClient": {
		getSPOSiteReview: {
		argNames: [ "reportEntity", "siteReviewtatus", "siteReviewID", "siteID" ],
		},

		startSPOSiteReview: {
		argNames: [ "detailedSourceReportId", "siteId", "adminComment" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SPOContentSecurityPolicyConfiguration": {
		add: {
		argNames: [ "source" ],
		},

		remove: {
		argNames: [ "source" ],
		},

		updateScriptSources: {
		argNames: [ "added", "removed" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SPOCopilotAgentInsightsRestApiClient": {
		createCopilotAgentInsightsReport: {
		argNames: [ "reportPeriod" ],
		},

		getAllCopilotAgentInsightsReportsMetadata: {
		},

		getCopilotAgentInsightsFullReportContent: {
		argNames: [ "reportId", "reportSubType", "isFullDetails" ],
		},

		getCopilotAgentsOnSitesTopDetails: {
		argNames: [ "reportId", "isFullDetails" ],
		},

		getSiteDistributionsTopDetails: {
		argNames: [ "reportId", "isFullDetails" ],
		},

		getTopSitesDetails: {
		argNames: [ "reportId", "isFullDetails" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SPOGroup": {
		addAsGroupOwnerAndMember: {
		argNames: [ "groupId", "userId", "userPrincipalName" ],
		},

		addGroupMember: {
		argNames: [ "groupId", "memberId", "memberPrincipalName" ],
		},

		addGroupOwner: {
		argNames: [ "groupId", "ownerId", "ownerPrincipalName" ],
		},

		getGroupInfo: {
		argNames: [ "groupId" ],
		},

		removeAsGroupOwnerAndMember: {
		argNames: [ "groupId", "userId" ],
		},

		removeGroupMember: {
		argNames: [ "groupId", "memberId" ],
		},

		removeGroupOwner: {
		argNames: [ "groupId", "ownerId" ],
		},

		updateGroupProperties: {
		argNames: [ "groupId", "displayName" ],
		},

		updateGroupPropertiesBySiteId: {
		argNames: [ "groupId", "siteId", "displayName" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SPOM365AgentInsightsRestApiClient": {
		createM365AgentInsightsReport: {
		argNames: [ "reportPeriod" ],
		},

		getAllM365AgentInsightsReportsMetadata: {
		},

		getM365AgentInsightsFullReportContent: {
		argNames: [ "reportId", "reportSubType", "isFullDetails" ],
		},

		getM365AgentsOnSitesTopDetails: {
		argNames: [ "reportId", "isFullDetails" ],
		},

		getSiteDistributionsTopDetails: {
		argNames: [ "reportId", "isFullDetails" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SPOMalwareFile": {
		getMalwareFileStream: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SPORestrictedContentDiscoverabilityClient": {
		createRestrictedContentDiscoverabilityReport: {
		},

		getAllRestrictedContentDiscoverabilityReports: {
		},

		getRestrictContentOrgWideSearchUsageInsightsReportContent: {
		argNames: [ "reportId" ],
		},

		getSPODataAccessGovernanceInsightById: {
		argNames: [ "reportId" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SPOWebAppServicePrincipalPublic": {
		addCustomSpfx3rdPartyAppPrincipal: {
		argNames: [ "appId", "appUri", "clientSecret" ],
		},

		getCustomSpfx3rdPartyAppPrincipal: {
		},

		removeCustomSpfx3rdPartyAppPrincipal: {
		},

		updateCustomSpfx3rdPartyAppPrincipalClientSecret: {
		argNames: [ "clientSecret" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SiteProperties": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SiteProperties.Collection": {
		checkSiteIsArchivedById: {
		argNames: [ "siteId" ],
		},

		getById: {
		argNames: [ "siteId" ],
		},

		getGroupSiteRelationship: {
		argNames: [ "siteId" ],
		},

		getLockStateById: {
		argNames: [ "siteId" ],
		},

		getSiteStateProperties: {
		argNames: [ "siteId" ],
		},

		getSiteUserGroups: {
		argNames: [ "siteId", "userGroupIds" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.TenantAdministration.Tenant": {
		acceptSyntexRepositoryTermsOfService: {
		},

		activateApplicationBillingPolicy: {
		argNames: [ "billingPolicyId" ],
		},

		addBrandFontPackage: {
		argNames: [ "creationInformation" ],
		},

		addCompanyHomeSite: {
		argNames: [ "homeSiteUrl", "order", "audiences" ],
		},

		addHomeSite: {
		argNames: [ "homeSiteUrl", "order", "audiences" ],
		},

		addPreAuthAllowDenyListItemSetting: {
		argNames: [ "allowPreAuth", "newSetting" ],
		},

		addRecentAdminAction: {
		argNames: [ "payload" ],
		},

		addRecentAdminActionReport: {
		argNames: [ "payload" ],
		},

		addRecentAdminActions: {
		argNames: [ "payload" ],
		},

		addSPOContainerUserRole: {
		argNames: [ "ContainerId", "loginName", "role" ],
		},

		addSPORestrictedSearchAllowedList: {
		argNames: [ "siteUrls" ],
		},

		addSPOServicePrioritizationAppRegistration: {
		argNames: [ "appId", "policyId", "quotaMultiplier" ],
		},

		addSyntexCustomModelSetting: {
		argNames: [ "modelSetting", "scenario" ],
		},

		addTenantAdminListItem: {
		argNames: [ "columnValues", "listName" ],
		},

		addTenantAdminListView: {
		argNames: [ "parameters" ],
		},

		addToOrgAssetsLibAndCdnV2: {
		argNames: [ "cdnType", "libUrl", "thumbnailUrl", "orgAssetType", "defaultOriginAdded" ],
		},

		addToOrgAssetsLibAndCdnWithType: {
		argNames: [ "cdnType", "libUrl", "thumbnailUrl", "orgAssetType" ],
		},

		addToOrgAssetsLibWithConfig: {
		argNames: [ "cdnType", "libUrl", "thumbnailUrl", "orgAssetType", "defaultOriginAdded", "configParam" ],
		},

		archiveContainer: {
		argNames: [ "containerId" ],
		},

		archiveSiteById: {
		argNames: [ "siteId" ],
		},

		bootstrapPolicyAutomationResources: {
		},

		bulkRemoveResourceAsAuthoritative: {
		argNames: [ "siteIds" ],
		},

		bulkSetResourceAsAuthoritative: {
		argNames: [ "siteIds" ],
		},

		checkTenantIntuneLicense: {
		},

		checkTenantLicenses: {
		argNames: [ "licenses" ],
		},

		clearPreAuthAllowDenyListSettings: {
		argNames: [ "shouldClearAllowList" ],
		},

		clearRestrictedAccessControlOneDrive: {
		},

		clearRestrictedAccessControlSharePoint: {
		},

		connectSiteToHubSiteById: {
		argNames: [ "siteUrl", "hubSiteId" ],
		},

		createApplicationBillingPolicyValidation: {
		argNames: [ "applicationId" ],
		},

		createPolicyDefinition: {
		argNames: [ "policyInputParameters" ],
		},

		createSite: {
		argNames: [ "siteCreationProperties" ],
		},

		deletePolicyDefinition: {
		argNames: [ "itemId" ],
		},

		deleteRecentAdminActionReport: {
		argNames: [ "reportId" ],
		},

		deleteSPOServicePrioritizationAppRegistration: {
		argNames: [ "appId" ],
		},

		deleteSyntexCustomModelSetting: {
		argNames: [ "uniqueId", "scenario" ],
		},

		downloadHighVolumeComponentImpactedAssetsReport: {
		argNames: [ "category", "documentKey" ],
		},

		downloadRansomwareImpactedAssetsReport: {
		argNames: [ "driveId", "fileName", "reportNameType" ],
		},

		downloadSPOContainers: {
		argNames: [ "active" ],
		},

		enqueueInsights: {
		argNames: [ "insightsScenario", "reportId", "reportDataFile", "reportCreationTime" ],
		},

		ensureBrandCenterFeature: {
		},

		executeSliceAndDiceRequest: {
		argNames: [ "reportFeatureId", "jsonQuery", "filters" ],
		},

		executeTranspilerRequest: {
		argNames: [ "payload" ],
		},

		exportAdminListToCSV: {
		argNames: [ "viewXml", "listName" ],
		},

		exportCSVFile: {
		argNames: [ "timeZoneId" ],
		},

		exportContainersToCSV: {
		},

		exportToCSV: {
		argNames: [ "viewXml", "timeZoneId", "columnsInfo", "listName" ],
		},

		exportUnlicensedOneDriveForBusinessListToCSV: {
		},

		getAdminListViews: {
		},

		getAdminReportData: {
		argNames: [ "featureId", "datasetMetadata", "query" ],
		},

		getAdminReportMetadata: {
		argNames: [ "dataset" ],
		},

		getAllDeletedPersonalSitesPropertiesAllVersions: {
		argNames: [ "startIndex" ],
		},

		getAllSPOContainersFromAdminList: {
		argNames: [ "queryParams" ],
		},

		getArchivableContainerTypes: {
		},

		getAuthoritativeResources: {
		},

		getBaselineSecurityModePreAuthSettings: {
		},

		getBillingPolicyIdForApp: {
		argNames: [ "applicationId" ],
		},

		getBrandCenterConfiguration: {
		},

		getBrandFontPackages: {
		},

		getCatalogManagementSettings: {
		},

		getContainerTypeExists: {
		argNames: [ "billingType" ],
		},

		getContentManagementAssessmentResults: {
		},

		getContentSecurityPolicy: {
		},

		getCopilotPromoOptInStatus: {
		},

		getDeletedPersonalSitePropertiesAllVersions: {
		argNames: [ "url" ],
		},

		getDeletedSiteProperties: {
		argNames: [ "startIndex" ],
		},

		getDeletedSitePropertiesByUrl: {
		argNames: [ "siteUrl" ],
		},

		getDeletedSitePropertiesFromSharePoint: {
		argNames: [ "startIndex" ],
		},

		getFileRequestBrandingProfiles: {
		},

		getFileSensitivityLabelInfo: {
		argNames: [ "fileUrl" ],
		},

		getFileVersionBatchDeleteJobProgress: {
		argNames: [ "siteUrl" ],
		},

		getFileVersionBatchDeleteJobProgressForLibrary: {
		argNames: [ "siteUrl", "listParams" ],
		},

		getFileVersionExpirationReportJobProgress: {
		argNames: [ "siteUrl", "reportUrl" ],
		},

		getFileVersionExpirationReportJobProgressForLibrary: {
		argNames: [ "siteUrl", "listParams", "reportUrl" ],
		},

		getFileVersionPolicyForLibrary: {
		argNames: [ "siteUrl", "listParams" ],
		},

		getFilteredSPListItems: {
		argNames: [ "columnName", "columnValue", "columnType", "listName" ],
		},

		getGeneratedInsightsSummary: {
		argNames: [ "insightsScenario", "dataFileName", "pageIndex" ],
		},

		getHomeSites: {
		},

		getHomeSitesDetails: {
		},

		getIBVersionForTenant: {
		},

		getIdleSessionSignOutForUnmanagedDevices: {
		},

		getInsightsSummary: {
		argNames: [ "insightsScenario", "dataFileName", "pageIndex", "modelName", "maxTokenSize", "maxContentSize", "timeoutMS" ],
		},

		getManageVersionPolicyJobProgress: {
		argNames: [ "siteUrl" ],
		},

		getOrgAssets: {
		},

		getPowerAppsEnvironments: {
		},

		getPreAuthSettings: {
		},

		getRansomwareActivities: {
		argNames: [ "parameters" ],
		},

		getRansomwareActivitiesOverview: {
		argNames: [ "eventId" ],
		},

		getRansomwareEvents: {
		argNames: [ "parameters" ],
		},

		getRansomwareEventsOverview: {
		},

		getRootSiteUrl: {
		},

		getSPHSiteUrl: {
		},

		getSPListItemCount: {
		argNames: [ "listName" ],
		},

		getSPListRootFolderProperties: {
		argNames: [ "listName" ],
		},

		getSPOAllWebTemplates: {
		argNames: [ "cultureName", "compatibilityLevel" ],
		},

		getSPOAppBillingPolicies: {
		},

		getSPOContainerByContainerId: {
		argNames: [ "containerId" ],
		},

		getSPOContainerByContainerSiteUrl: {
		argNames: [ "containerSiteUrl" ],
		},

		getSPOContainerTypeById: {
		argNames: [ "containerTypeId", "containerTenantType" ],
		},

		getSPOContainerTypeConfigurationByContainerTypeId: {
		argNames: [ "containerTypeId" ],
		},

		getSPOContainerTypes: {
		argNames: [ "containerTenantType" ],
		},

		getSPOContainersByApplicationId: {
		argNames: [ "owningApplicationId", "paged", "pagingToken", "archiveStatus" ],
		},

		getSPOCopilotPromoUsageStatistics: {
		},

		getSPODeletedContainers: {
		},

		getSPORestrictedSearchAllowedList: {
		},

		getSPORestrictedSearchMode: {
		},

		getSPOServicePrioritizationAppRegistrations: {
		},

		getSPOServicePrioritizationBillingPayload: {
		argNames: [ "billingPolicyId", "azureSubscriptionId", "resourceGroup", "azureRegion", "friendlyName" ],
		},

		getSPOServicePrioritizationBillingPolicies: {
		},

		getSPOSiteCreationSources: {
		},

		getSPOSyntexApplications: {
		},

		getSPOSyntexConsumingApplications: {
		argNames: [ "owningApplicationId", "applicationId" ],
		},

		getSPOTenantAllWebTemplates: {
		},

		getSPOTenantWebTemplates: {
		argNames: [ "localeId", "compatibilityLevel" ],
		},

		getSPOWebTemplatesAllowedForArchiving: {
		},

		getSharePointSettingData: {
		argNames: [ "category" ],
		},

		getSiteAdministrators: {
		argNames: [ "siteId" ],
		},

		getSiteAuthorizationCodeForMigration: {
		argNames: [ "endpointUrl" ],
		},

		getSiteByUrl: {
		argNames: [ "url" ],
		},

		getSiteCohortsSummary: {
		argNames: [ "view" ],
		},

		getSiteHealthStatus: {
		argNames: [ "sourceUrl" ],
		},

		getSiteProperties: {
		argNames: [ "startIndex", "includeDetail" ],
		},

		getSitePropertiesByFilter: {
		argNames: [ "filter", "startIndex", "includeDetail" ],
		},

		getSitePropertiesBySiteId: {
		argNames: [ "siteId", "includeDetail" ],
		},

		getSitePropertiesByUrl: {
		argNames: [ "url", "includeDetail" ],
		},

		getSitePropertiesFromSharePoint: {
		argNames: [ "startIndex", "includeDetail" ],
		},

		getSitePropertiesFromSharePointByFilter: {
		argNames: [ "filter", "startIndex", "includeDetail" ],
		},

		getSitePropertiesFromSharePointByFilters: {
		argNames: [ "speFilter" ],
		},

		getSiteSecondaryAdministrators: {
		argNames: [ "secondaryAdministratorsFieldsData" ],
		},

		getSiteSubscriptionId: {
		},

		getSiteThumbnailLogo: {
		argNames: [ "siteUrl" ],
		},

		getSitesByState: {
		argNames: [ "states" ],
		},

		getSitesFromSubstrate: {
		argNames: [ "searchText" ],
		},

		getSortedSPOContainersByApplicationId: {
		argNames: [ "owningApplicationId", "ascending", "paged", "pagingToken", "archiveStatus" ],
		},

		getSyntexCustomModelSettings: {
		argNames: [ "scenario" ],
		},

		getTargetedSitesDetails: {
		},

		getTargetedSitesDetailsByUserId: {
		argNames: [ "userId" ],
		},

		getTenantAllOrCompatibleIBSegments: {
		argNames: [ "segments" ],
		},

		getTenantSendFromAddress: {
		},

		getTenantSiteCreationSource: {
		},

		getTrackViewFeatureAlwaysVisible: {
		},

		getVersionPolicyForDocLibsJobProgress: {
		argNames: [ "siteUrl" ],
		},

		getViewByDisplayName: {
		argNames: [ "viewName", "listName" ],
		},

		getVivaConnectionsLicense: {
		},

		grantHubSiteRightsById: {
		argNames: [ "hubSiteId", "principals", "grantedRights" ],
		},

		hasValidEducationLicense: {
		},

		isRequestContentManagementAssessmentEligible: {
		},

		isSyntexRepositoryTermsOfServiceAccepted: {
		},

		logSharePointEmbeddedClientLog: {
		argNames: [ "logProperties" ],
		},

		newFileVersionBatchDeleteJob: {
		argNames: [ "siteUrl", "batchDeleteParams" ],
		},

		newFileVersionBatchDeleteJobForLibrary: {
		argNames: [ "siteUrl", "listParams", "batchDeleteParams" ],
		},

		newFileVersionExpirationReportJob: {
		argNames: [ "siteUrl", "reportUrl" ],
		},

		newFileVersionExpirationReportJobForLibrary: {
		argNames: [ "siteUrl", "listParams", "reportUrl" ],
		},

		newSPOContainerType: {
		argNames: [ "containerTypeProperties" ],
		},

		purgeContainer: {
		argNames: [ "containerId" ],
		},

		purgeSPODeletedContainerByContainerId: {
		argNames: [ "containerId" ],
		},

		purgeSPODeletedContainerByContainerSiteUrl: {
		argNames: [ "containerSiteUrl" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		recentAdminActionReportIsAuditEnabled: {
		},

		registerHubSite: {
		argNames: [ "siteUrl" ],
		},

		registerHubSiteWithCreationInformation: {
		argNames: [ "siteUrl", "creationInformation" ],
		},

		removeContainer: {
		argNames: [ "containerId" ],
		},

		removeDeletedSite: {
		argNames: [ "siteUrl" ],
		},

		removeDeletedSitePreferId: {
		argNames: [ "siteUrl", "siteId" ],
		},

		removeFileRequestBrandingProfile: {
		argNames: [ "profileType" ],
		},

		removeFileTypeVersionPolicy: {
		argNames: [ "fileTypes" ],
		},

		removeFileTypeVersionPolicyForLibrary: {
		argNames: [ "siteUrl", "listParams", "fileTypes" ],
		},

		removeFileVersionBatchDeleteJob: {
		argNames: [ "siteUrl" ],
		},

		removeFileVersionBatchDeleteJobForLibrary: {
		argNames: [ "siteUrl", "listParams" ],
		},

		removeFromOrgAssets: {
		argNames: [ "libUrl", "listId" ],
		},

		removeHomeSite: {
		argNames: [ "homeSiteUrl" ],
		},

		removePreAuthAllowDenyListItemSetting: {
		argNames: [ "itemId" ],
		},

		removeResourceAsAuthoritative: {
		argNames: [ "siteId" ],
		},

		removeSPHSite: {
		},

		removeSPListItem: {
		argNames: [ "listItemId", "listName" ],
		},

		removeSPOContainerByContainerId: {
		argNames: [ "containerId" ],
		},

		removeSPOContainerByContainerSiteUrl: {
		argNames: [ "containerSiteUrl" ],
		},

		removeSPOContainerType: {
		argNames: [ "spDeletedContainerTypeProperties" ],
		},

		removeSPOContainerUserRole: {
		argNames: [ "ContainerId", "loginName", "role" ],
		},

		removeSPORestrictedSearchAllowedList: {
		argNames: [ "siteUrls" ],
		},

		removeSite: {
		argNames: [ "siteUrl" ],
		},

		removeTargetedSite: {
		argNames: [ "siteId" ],
		},

		removeTenantAdminListView: {
		argNames: [ "viewId" ],
		},

		removeVersionPolicyForDocLibsJob: {
		argNames: [ "siteUrl" ],
		},

		renderActiveContainers: {
		argNames: [ "containerId", "viewXml" ],
		},

		renderAdminListData: {
		argNames: [ "parameters", "overrideParameters", "listName" ],
		},

		renderContainersAdminApplicationsData: {
		},

		renderContainersAdminListData: {
		argNames: [ "orderByColumnsList", "filterByColumnsList", "pageSize", "pagingToken", "containerStatus", "searchParameters" ],
		},

		renderDeletedContainers: {
		argNames: [ "viewXml" ],
		},

		renderFilteredAdminListData: {
		argNames: [ "parameters", "listName" ],
		},

		renderFilteredAdminListDataByGroupId: {
		argNames: [ "groupId" ],
		},

		renderIBSegmentListDataAsStream: {
		argNames: [ "parameters", "segments", "CascDelWarnMessage", "CustomAction", "DrillDown", "Field", "FieldInternalName", "Filter", "FilterData", "FilterData1", "FilterData10", "FilterData2", "FilterData3", "FilterData4", "FilterData5", "FilterData6", "FilterData7", "FilterData8", "FilterData9", "FilterField", "FilterField1", "FilterField10", "FilterField2", "FilterField3", "FilterField4", "FilterField5", "FilterField6", "FilterField7", "FilterField8", "FilterField9", "FilterFields", "FilterFields1", "FilterFields10", "FilterFields2", "FilterFields3", "FilterFields4", "FilterFields5", "FilterFields6", "FilterFields7", "FilterFields8", "FilterFields9", "FilterLookupId", "FilterLookupId1", "FilterLookupId10", "FilterLookupId2", "FilterLookupId3", "FilterLookupId4", "FilterLookupId5", "FilterLookupId6", "FilterLookupId7", "FilterLookupId8", "FilterLookupId9", "FilterOp", "FilterOp1", "FilterOp10", "FilterOp2", "FilterOp3", "FilterOp4", "FilterOp5", "FilterOp6", "FilterOp7", "FilterOp8", "FilterOp9", "FilterValue", "FilterValue1", "FilterValue10", "FilterValue2", "FilterValue3", "FilterValue4", "FilterValue5", "FilterValue6", "FilterValue7", "FilterValue8", "FilterValue9", "FilterValues", "FilterValues1", "FilterValues10", "FilterValues2", "FilterValues3", "FilterValues4", "FilterValues5", "FilterValues6", "FilterValues7", "FilterValues8", "FilterValues9", "GroupString", "HasOverrideSelectCommand", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsGroupRender", "IsXslView", "ListViewPageUrl", "OverrideRowLimit", "OverrideScope", "OverrideSelectCommand", "PageFirstRow", "PageLastRow", "QueryParams", "RootFolder", "RootFolderUniqueId", "SortDir", "SortDir1", "SortDir10", "SortDir2", "SortDir3", "SortDir4", "SortDir5", "SortDir6", "SortDir7", "SortDir8", "SortDir9", "SortField", "SortField1", "SortField10", "SortField2", "SortField3", "SortField4", "SortField5", "SortField6", "SortField7", "SortField8", "SortField9", "SortFields", "SortFieldValues", "View", "ViewCount", "ViewId", "ViewPath", "WebPartId", "FilterIBSegmentsBasedOnAndCondition" ],
		},

		renderIBSegmentListFilterData: {
		argNames: [ "parameters" ],
		},

		renderOwnershipPolicyStorageSPList: {
		argNames: [ "parameters", "overrideParameters" ],
		},

		renderPolicyDefinitionList: {
		argNames: [ "parameters", "overrideParameters" ],
		},

		renderPolicyExecutionsHistory: {
		argNames: [ "parameters", "overrideParameters" ],
		},

		renderPolicyReport: {
		argNames: [ "parameters", "overrideParameters" ],
		},

		renderRecentAdminActionReport: {
		argNames: [ "parameters", "overrideParameters" ],
		},

		renderRecentAdminActions: {
		argNames: [ "parameters", "overrideParameters", "isAutoRefresh" ],
		},

		reorderTargetedSites: {
		argNames: [ "siteIds" ],
		},

		requestContentManagementAssessment: {
		},

		restoreContainer: {
		argNames: [ "containerId" ],
		},

		restoreDeletedSite: {
		argNames: [ "siteUrl" ],
		},

		restoreDeletedSiteById: {
		argNames: [ "siteId" ],
		},

		restoreDeletedSitePreferId: {
		argNames: [ "siteUrl", "siteId" ],
		},

		restoreSPODeletedContainerByContainerId: {
		argNames: [ "containerId" ],
		},

		restoreSPODeletedContainerByContainerSiteUrl: {
		argNames: [ "containerSiteUrl" ],
		},

		revokeHubSiteRightsById: {
		argNames: [ "hubSiteId", "principals" ],
		},

		saveFileRequestBrandingAssetConfig: {
		argNames: [ "assetLibraryUrl", "logoFileUrl", "backgroundFileUrl", "profileType" ],
		},

		sendEmail: {
		argNames: [ "siteUrl", "activityEventJson" ],
		},

		setBaselineSecurityModePreAuthSettings: {
		argNames: [ "isDisabled", "allowList" ],
		},

		setCatalogManagementTypeDisplayName: {
		argNames: [ "propertyType", "displayName" ],
		},

		setCatalogManagementValueDisplayName: {
		argNames: [ "id", "displayName" ],
		},

		setCopilotPromoOptInStatus: {
		argNames: [ "copilotPromoOptInEnabled" ],
		},

		setDefaultView: {
		argNames: [ "viewId", "listName" ],
		},

		setFileTypeVersionPolicy: {
		argNames: [ "fileTypes", "isAutoTrimEnabled", "majorVersionLimit", "expireVersionsAfterDays" ],
		},

		setFileVersionPolicy: {
		argNames: [ "isAutoTrimEnabled", "majorVersionLimit", "expireVersionsAfterDays" ],
		},

		setFileVersionPolicyForLibrary: {
		argNames: [ "siteUrl", "listParams", "versionPolicyParams" ],
		},

		setIBSegmentsOnSite: {
		argNames: [ "siteId", "segments", "ibMode" ],
		},

		setIdleSessionSignOutForUnmanagedDevices: {
		argNames: [ "enabled", "warnAfter", "signOutAfter" ],
		},

		setJitDlpPolicyData: {
		argNames: [ "markAllFilesAsSensitiveByDefault", "odbSensitivityRefreshWindowInHours", "executionMode" ],
		},

		setOrgAssetsWithConfig: {
		argNames: [ "libUrl", "thumbnailUrl", "orgAssetType", "configParam" ],
		},

		setOrgAssetsWithType: {
		argNames: [ "libUrl", "thumbnailUrl", "orgAssetType" ],
		},

		setPreAuthIsDisabledSetting: {
		argNames: [ "isDisabled" ],
		},

		setResourceAsAuthoritative: {
		argNames: [ "siteId" ],
		},

		setSPEmbeddedApplicationPermissions: {
		argNames: [ "spSyntexApplicationProperties" ],
		},

		setSPEmbeddedApplicationProperties: {
		argNames: [ "spSyntexApplicationProperties" ],
		},

		setSPHSite: {
		argNames: [ "sphSiteUrl" ],
		},

		setSPHSiteWithConfiguration: {
		argNames: [ "sphSiteUrl", "configuration" ],
		},

		setSPOContainerProperties: {
		argNames: [ "spContainerProperties" ],
		},

		setSPOContainerType: {
		argNames: [ "containerTypeProperties" ],
		},

		setSPOContainerTypeConfiguration: {
		argNames: [ "spContainerTypeConfigurationProperties" ],
		},

		setSPORestrictedSearchMode: {
		argNames: [ "mode" ],
		},

		setSPOServicePrioritizationAppRegistration: {
		argNames: [ "appId", "enabled", "enabledHasValue", "quotaMultiplier", "quotaMultiplierHasValue" ],
		},

		setSPOSyntexApplicationsClearOverrideSharingCapability: {
		argNames: [ "owningApplicationId" ],
		},

		setSPOSyntexApplicationsSharingCapability: {
		argNames: [ "owningApplicationId", "sharingCapability", "overrideTenantSharingCapability" ],
		},

		setSensitivityLabelContainer: {
		argNames: [ "containerId", "sensitivityLabel" ],
		},

		setSiteAdministrators: {
		argNames: [ "siteAdministratorsFieldsData" ],
		},

		setSiteSecondaryAdministrators: {
		argNames: [ "secondaryAdministratorsFieldsData" ],
		},

		setSiteUserGroups: {
		argNames: [ "siteUserGroupsData" ],
		},

		setSyntexPaygFeatureActivation: {
		argNames: [ "featureName", "activationStatus" ],
		},

		setTenantDataLossPreventionQuarantineSettings: {
		argNames: [ "serializedValue" ],
		},

		setTrackViewFeatureAlwaysVisible: {
		},

		swapSite: {
		argNames: [ "sourceUrl", "targetUrl", "archiveUrl" ],
		},

		swapSiteWithSmartGestureOption: {
		argNames: [ "sourceUrl", "targetUrl", "archiveUrl", "includeSmartGestures" ],
		},

		swapSiteWithSmartGestureOptionForce: {
		argNames: [ "sourceUrl", "targetUrl", "archiveUrl", "includeSmartGestures", "force" ],
		},

		switchFileRequestBrandingProfiles: {
		},

		syncVersionPolicyForLibrary: {
		argNames: [ "siteUrl", "listParams", "fileTypes", "excludeDefaultPolicy" ],
		},

		testGenerateReportInsights: {
		argNames: [ "insightsScenario", "reportUrl", "modelName" ],
		},

		testGetInsightGenerationResponseAsync: {
		argNames: [ "jobId", "reportUrl", "modelName" ],
		},

		testGetInsightGenerationStatusAsync: {
		argNames: [ "jobId", "reportUrl", "modelName" ],
		},

		testQueueInsightGenerationAsync: {
		argNames: [ "insightsScenario", "reportUrl", "modelName", "maxTokenSize" ],
		},

		transferContainerPrincipalOwner: {
		argNames: [ "containerId", "newPrincipalOwnerUpn" ],
		},

		unArchiveContainer: {
		argNames: [ "containerId" ],
		},

		unarchiveSiteById: {
		argNames: [ "siteId" ],
		},

		unlockSensitivityLabelEncryptedFile: {
		argNames: [ "fileUrl", "justificationText" ],
		},

		unregisterHubSite: {
		argNames: [ "siteUrl" ],
		},

		update: {
		},

		updateFileSearchVisibility: {
		argNames: [ "url", "isHidden" ],
		},

		updateGroupSiteProperties: {
		argNames: [ "groupId", "siteId", "updateType", "parameters" ],
		},

		updateJobsWorkItems: {
		argNames: [ "jobIds" ],
		},

		updatePolicyDefinition: {
		argNames: [ "itemId", "policyInputParameters", "policyOperation" ],
		},

		updateRansomwareActivity: {
		argNames: [ "listItemId", "columnValues", "category" ],
		},

		updateRansomwareEvent: {
		argNames: [ "listItemId", "columnValues", "forceResolveActivity", "category" ],
		},

		updateSPOContainerUserRole: {
		argNames: [ "ContainerId", "loginName", "role" ],
		},

		updateSiteActivityData: {
		},

		updateSyntexCustomModelSetting: {
		argNames: [ "modelSetting", "scenario" ],
		},

		updateTargetedSite: {
		argNames: [ "siteUrl", "configurationParam" ],
		},

		updateTenantAdminListItem: {
		argNames: [ "listItemId", "columnValues", "listName" ],
		},

		updateTenantAdminListView: {
		argNames: [ "viewId", "viewXml" ],
		},

		validateHomeSite: {
		argNames: [ "validationActionType", "siteUrl" ],
		},

		validateMultipleHomeSitesParameterExists: {
		argNames: [ "hasParameters" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.TenantAdminSettingsService": {
		getTenantAdminSharePointSettingsData: {
		argNames: [ "category" ],
		},

		getTenantSharingStatus: {
		},

		update: {
		},

	},

	"Microsoft.Online.SharePoint.TenantManagement.ExternalUser.Collection": {
		getById: {
		argNames: [ "uniqueId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.Online.SharePoint.TenantManagement.Office365Tenant": {
		addPublicCdnOrigin: {
		argNames: [ "origin" ],
		},

		addSdnProvider: {
		argNames: [ "identifier", "license" ],
		},

		addTenantCdnOrigin: {
		argNames: [ "cdnType", "originUrl" ],
		},

		addTenantTheme: {
		argNames: [ "name", "themeJson", "shouldParseColorPair" ],
		},

		addToOrgAssetsLibAndCdn: {
		argNames: [ "cdnType", "libUrl", "thumbnailUrl", "orgAssetType", "defaultOriginAdded" ],
		},

		addToOrgAssetsWithConfig: {
		argNames: [ "cdnType", "libUrl", "thumbnailUrl", "orgAssetType", "defaultOriginAdded", "configParam" ],
		},

		createTenantCdnDefaultOrigins: {
		argNames: [ "cdnType" ],
		},

		deleteImportProfilePropertiesJob: {
		argNames: [ "jobId" ],
		},

		deleteTenantTheme: {
		argNames: [ "name" ],
		},

		disableSharingForNonOwnersOfSite: {
		argNames: [ "siteUrl" ],
		},

		getAllTenantThemes: {
		},

		getCustomFontsMinorVersion: {
		argNames: [ "libUrl" ],
		},

		getExternalUsers: {
		argNames: [ "position", "pageSize", "filter", "sortOrder" ],
		},

		getExternalUsersForSite: {
		argNames: [ "siteUrl", "position", "pageSize", "filter", "sortOrder" ],
		},

		getExternalUsersWithSortBy: {
		argNames: [ "position", "pageSize", "filter", "sortPropertyName", "sortOrder" ],
		},

		getHideDefaultThemes: {
		},

		getIdleSessionSignOutForUnmanagedDevices: {
		},

		getImportProfilePropertyJob: {
		argNames: [ "jobId" ],
		},

		getImportProfilePropertyJobs: {
		},

		getTenantCdnEnabled: {
		argNames: [ "cdnType" ],
		},

		getTenantCdnOrigins: {
		argNames: [ "cdnType" ],
		},

		getTenantCdnPolicies: {
		argNames: [ "cdnType" ],
		},

		getTenantTheme: {
		argNames: [ "name" ],
		},

		incrementCustomFontsMinorVersion: {
		argNames: [ "libUrl" ],
		},

		isSharingDisabledForNonOwnersOfSite: {
		argNames: [ "siteUrl" ],
		},

		logCustomFontsLargeUpload: {
		argNames: [ "numCatalogs", "numFonts", "totalExpectedFiles" ],
		},

		queueImportProfileProperties: {
		argNames: [ "idType", "sourceDataIdProperty", "propertyMap", "sourceUri" ],
		},

		removeExternalUsers: {
		argNames: [ "uniqueIds" ],
		},

		removeFromOrgAssets: {
		argNames: [ "libUrl", "listId" ],
		},

		removeFromOrgAssetsAndCdn: {
		argNames: [ "remove", "cdnType", "libUrl" ],
		},

		removePreviousCustomFontUpload: {
		argNames: [ "majVersions", "libUrl" ],
		},

		removePublicCdnOrigin: {
		argNames: [ "originId" ],
		},

		removeSdnProvider: {
		},

		removeTenantCdnOrigin: {
		argNames: [ "cdnType", "originUrl" ],
		},

		revokeAllUserSessions: {
		argNames: [ "userName" ],
		},

		revokeAllUserSessionsByPuid: {
		argNames: [ "puidList" ],
		},

		setBlockDownloadFileTypePolicyData: {
		argNames: [ "blockDownloadFileTypePolicy", "fileTypeIds", "excludedBlockDownloadGroupIds" ],
		},

		setBlockDownloadFileTypePolicyExclusionList: {
		argNames: [ "excludedBlockDownloadGroupIds" ],
		},

		setHideDefaultThemes: {
		argNames: [ "hideDefaultThemes" ],
		},

		setIdleSessionSignOutForUnmanagedDevices: {
		argNames: [ "enabled", "warnAfter", "signOutAfter" ],
		},

		setJitDlpPolicyData: {
		argNames: [ "markAllFilesAsSensitiveByDefault", "odbSensitivityRefreshWindowInHours", "executionMode" ],
		},

		setOrgAssetsLib: {
		argNames: [ "libUrl", "thumbnailUrl", "orgAssetType" ],
		},

		setOrgAssetsLibWithConfig: {
		argNames: [ "libUrl", "thumbnailUrl", "orgAssetType", "configParam" ],
		},

		setTenantCdnEnabled: {
		argNames: [ "cdnType", "isEnabled" ],
		},

		setTenantCdnPolicy: {
		argNames: [ "cdnType", "policy", "policyValue" ],
		},

		syncAadB2BManagementPolicy: {
		},

		updateTenantTheme: {
		argNames: [ "name", "themeJson", "shouldParseColorPair" ],
		},

		uploadCustomFontsAndCatalogLib: {
		argNames: [ "customFontFiles", "libUrl" ],
		},

	},

	"Microsoft.SharePoint.Administration.Claims.SPVivaLearningManager": {
		registerListEventReceiver: {
		},

	},

	"Microsoft.SharePoint.Administration.FeatureDefinition.Collection": {
		getFeatureDefinition: {
		argNames: [ "featureDisplayName", "compatibilityLevel" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.SharePoint.Administration.SPAnalyticsUsageService": {
		logevent: {
		argNames: [ "usageEntry" ],
		},

	},

	"Microsoft.SharePoint.Administration.SPAppStateQueryJobDefinition": {
		performFastRevokeWithClientIds: {
		},

	},

	"Microsoft.SharePoint.Administration.SiteMove.Service.SiteMoveService": {
		acquireSystemSiteLock: {
		argNames: [ "lockRequestor", "lockType", "leaseDurationInMinutes" ],
		},

		areAnyTablesTooLarge: {
		argNames: [ "threshold" ],
		},

		checkSPSiteContentDatabase: {
		argNames: [ "siteId" ],
		},

		clearSiteRelocationMarker: {
		},

		commitSessionToken: {
		},

		extendSystemSiteLockExpiration: {
		argNames: [ "leaseDurationInMinute" ],
		},

		getCPSChangeToken: {
		},

		getCPSSiteDeleteReason: {
		},

		getDBActivities: {
		},

		getDataChunk: {
		argNames: [ "tableName", "schemaName" ],
		},

		getDataChunks: {
		},

		getDataChunksIterator: {
		},

		getDataReader: {
		argNames: [ "sqlCommandText" ],
		},

		getDatabaseProperties: {
		},

		getEventCacheDataChunk: {
		argNames: [ "lastCopiedId", "searchChangeToken" ],
		},

		getEventCacheExColumns: {
		},

		getEventCacheExDataChunk: {
		argNames: [ "lastCopiedId" ],
		},

		getEventCacheIds: {
		argNames: [ "lastCopiedId" ],
		},

		getFarmProperties: {
		},

		getMarker: {
		},

		getSPDeletedSiteRelocationStatus: {
		argNames: [ "checkLockTime" ],
		},

		getScalarValue: {
		argNames: [ "sqlCommandText" ],
		},

		getServiceVersion: {
		},

		getSiteMoveState: {
		},

		getSiteProperties: {
		},

		getSiteRelocationCompatibleSchemaVersion: {
		},

		getTenantWorkflows: {
		},

		getValidationChunks: {
		},

		getWorkItem: {
		},

		isDbReadOnly: {
		},

		isSystemSiteLocked: {
		argNames: [ "lockRequestor" ],
		},

		lockSite: {
		},

		pauseCrawling: {
		argNames: [ "originalCPSDeleteReason" ],
		},

		processStorageMetricsChanges: {
		},

		pulseHeartbeat: {
		},

		releaseSystemSiteLock: {
		argNames: [ "lockRequestor" ],
		},

		removeSiteMapEntry: {
		},

		removeSiteMapEntry_ClearCache: {
		argNames: [ "sitePath" ],
		},

		resumeCrawling: {
		argNames: [ "originalCPSDeleteReason" ],
		},

		setSiteMoveState: {
		argNames: [ "state" ],
		},

		sourceCleanupAfterMove: {
		argNames: [ "isDeleted" ],
		},

		startLockableSession: {
		},

		startSnapshotIsolation: {
		},

		stopSessionToken: {
		},

		unlockSiteOnFailure: {
		argNames: [ "originalLockFlags" ],
		},

		updateAbsBlobDates: {
		},

	},

	"Microsoft.SharePoint.AuthPolicy.Events.SPAuthEvent.Collection": {
		query: { argNames: ["oData"], requestType: RequestType.OData },

		roleAssignmentMSGraphNotify: {
		argNames: [ "tenant", "action", "type", "resourcePayload", "id", "containerId" ],
		},

	},

	"Microsoft.SharePoint.AuthPolicy.SPTenantIBPolicyComplianceReport.Collection": {
		getAllReportStates: {
		},

		getReportById: {
		argNames: [ "ReportId", "ShowIncompatibleSegmentsPairsAndInvalidSegmentsFilesContents" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		removeFinalizedReport: {
		argNames: [ "ReportId" ],
		},

	},

	"Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog": {
		getCrawledUrls: {
		argNames: [ "getCountOnly", "maxRows", "queryString", "isLike", "contentSourceID", "errorLevel", "errorID", "startDateTime", "endDateTime" ],
		},

		getUnsuccesfulCrawledUrls: {
		argNames: [ "displayUrl", "startDateTime", "endDateTime" ],
		},

		getUnsuccesfulCrawledUrlsForEdiscovery: {
		argNames: [ "displayUrl", "startDateTime", "endDateTime" ],
		},

	},

	"Microsoft.SharePoint.Client.Search.Administration.SiteContentProcessingInfoProvider": {
		getAzureContainerToken: {
		},

		notifyContentProcessingStatus: {
		argNames: [ "webId", "listId", "uniqueId", "properties" ],
		},

		reportContentProcessingStatus: {
		argNames: [ "webId", "listId", "uniqueId", "azureContainerTokenUri", "encryptionKey", "priority", "errorCode", "errorDescription" ],
		},

	},

	"Microsoft.SharePoint.Client.Search.Administration.SiteProvisioningInfoProvider": {
		checkSiteIngestionStatus: {
		argNames: [ "siteId" ],
		},

	},

	"Microsoft.SharePoint.Client.Search.Administration.TenantCrawlVersionsInfoProvider": {
		disableCrawlVersions: {
		argNames: [ "siteId" ],
		},

		disableCrawlVersionsForTenant: {
		},

		enableCrawlVersions: {
		argNames: [ "siteId" ],
		},

		enableCrawlVersionsForTenant: {
		},

		getSiteCrawlVersionStatus: {
		argNames: [ "siteId" ],
		},

		isCrawlVersionsEnabled: {
		argNames: [ "siteId" ],
		},

		isCrawlVersionsEnabledForTenant: {
		},

	},

	"Microsoft.SharePoint.Client.Search.Administration.TenantRecycleBinInfoProvider": {
		disableRecycleBinDiscoverabilityForTenant: {
		},

		enableRecycleBinDiscoverabilityForTenant: {
		},

		isRecycleBinDiscoverabilityEnabledForTenant: {
		},

	},

	"Microsoft.SharePoint.Client.Search.Analytics.SignalStore": {
		signals: {
		argNames: [ "signals" ],
		},

	},

	"Microsoft.SharePoint.Client.Search.Query.RankingLabeling": {
		addJudgment: {
		argNames: [ "userQuery", "url", "labelId" ],
		},

		getJudgementsForQuery: {
		argNames: [ "query" ],
		},

		normalizeResultUrl: {
		argNames: [ "url" ],
		},

	},

	"Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection": {
		add: {
		argNames: [ "matchType", "matchValue", "boost" ],
		},

		clear: {
		},

	},

	"Microsoft.SharePoint.Client.Search.Query.SortCollection": {
		add: {
		argNames: [ "strProperty", "direction" ],
		},

		clear: {
		},

	},

	"Microsoft.SharePoint.Client.Search.Query.StringCollection": {
		add: {
		argNames: [ "property" ],
		},

		clear: {
		},

	},

	"Microsoft.SharePoint.ClientSideComponent.HostedApp": {
		delete: {
		requestType: RequestType.Delete
		},

		updateWebPartData: {
		argNames: [ "webPartDataAsJson" ],
		},

	},

	"Microsoft.SharePoint.ClientSideComponent.HostedAppsManager": {
		add: {
		argNames: [ "webPartDataAsJson", "hostType" ],
		},

		addEx: {
		argNames: [ "webPartDataAsJson", "hostType" ],
		},

		getById: {
		argNames: [ "id" ],
		},

	},

	"Microsoft.SharePoint.Comments.comment": {
		delete: {
		requestType: RequestType.Delete
		},

		like: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		unlike: {
		},

	},

	"Microsoft.SharePoint.Comments.comment.Collection": {
		add: {
		argNames: [ "text" ],
		},

		deleteAll: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.SharePoint.ContentSolution.API.TemplateAPI": {
		addFields: {
		argNames: [ "request" ],
		},

		createTemplate: {
		argNames: [ "request" ],
		},

		createTemplateUsingStream: {
		argNames: [ "DocumentFolderId", "DocumentLibraryId", "DocumentSiteId", "DocumentWebId", "FormId", "TemplateName", "contentStream" ],
		},

		getContentControlStandardContent: {
		argNames: [ "templateId", "fetchConditionalsOnly" ],
		},

		getFields: {
		argNames: [ "templateId", "versionType" ],
		},

		updateField: {
		argNames: [ "request" ],
		},

	},

	"Microsoft.SharePoint.Convergence.AddNoLiveBlobsInOdcServiceStateApi": {
		addState: {
		},

	},

	"Microsoft.SharePoint.Convergence.ConsumerPermissions": {
		grantConsumerSitePermissions: {
		},

		revokeConsumerSitePermissions: {
		},

	},

	"Microsoft.SharePoint.Convergence.MigrationCompleteStateApi": {
		addState: {
		},

		isDoclibContributorOwnerEnabled: {
		},

		isSuspended: {
		},

	},

	"Microsoft.SharePoint.Convergence.OdcMetadataCleanedUpApi": {
		addState: {
		},

	},

	"Microsoft.SharePoint.EmployeeEngagement.VivaConnectionsPage": {
		getData: {
		},

		setSpotlightConfiguration: {
		argNames: [ "configuration" ],
		},

	},

	"Microsoft.SharePoint.EmployeeEngagement.VivaHome": {
		addImage: {
		argNames: [ "fileName", "imageStream" ],
		},

		addImageFromExternalUrl: {
		argNames: [ "fileName", "externalUrl" ],
		},

		titleRegion: {
		argNames: [ "vivaHomeTitleRegion" ],
		},

		updateGoToVCButtonFlag: {
		argNames: [ "isGoBackToConnectionsButtonDisabled" ],
		},

	},

	"Microsoft.SharePoint.EmployeeEngagement.VivaResources": {
		addLink: {
		argNames: [ "newLink" ],
		},

		getLinks: {
		},

		removeLink: {
		argNames: [ "id" ],
		},

		reorderLink: {
		argNames: [ "linkId", "prevLinkId" ],
		},

		updateLink: {
		argNames: [ "updatedLink" ],
		},

		updateLinks: {
		argNames: [ "links" ],
		},

	},

	"Microsoft.SharePoint.IR.IRMigration": {
		deleteAndRecreateIRList: {
		},

	},

	"Microsoft.SharePoint.IdentityModel.SPAllOrgSGManager": {
		createAllOrgSecurityGroup: {
		},

	},

	"Microsoft.SharePoint.Insights.SPTenantIBInsightsReportManager": {
		createReport: {
		},

		getAllReportsMetadata: {
		},

		getReport: {
		argNames: [ "reportId", "siteType" ],
		},

		getReportData: {
		argNames: [ "reportId", "siteType", "section", "isFullDetails" ],
		},

	},

	"Microsoft.SharePoint.Internal.ActivityLogger": {
		feedbackDirect: {
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json" ],
		},

		feedbackIndirect: {
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json" ],
		},

		logActivity: {
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "ExtraProperties", "AuditCreationTime", "IsOffline", "UserIdList" ],
		},

		logActivityBulk: {
		argNames: [ "Operation", "SiteId", "WebId", "ListId", "MailboxType", "Requests" ],
		},

	},

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CardDesigns": {
		add: {
		argNames: [ "description", "id", "serializedProperties", "showInToolbox", "title" ],
		},

		update: {
		argNames: [ "description", "id", "serializedProperties", "showInToolbox", "title" ],
		},

	},

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata": {
		deploy: {
		argNames: [ "skipFeatureDeployment", "isUpdatingApp" ],
		},

		install: {
		},

		remove: {
		},

		retract: {
		},

		uninstall: {
		},

		upgrade: {
		},

	},

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem.Collection": {
		add: {
		argNames: [ "absolutePath" ],
		},

		getById: {
		argNames: [ "siteId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		remove: {
		argNames: [ "absolutePath" ],
		},

		removeById: {
		argNames: [ "siteId" ],
		},

	},

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor": {
		add: {
		argNames: [ "Url", "Overwrite", "Content" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TeamsPackageDownload": {
		downloadTeams: {
		},

	},

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor": {
		add: {
		argNames: [ "Url", "Overwrite", "Content" ],
		},

		addAndDeployStoreAppById: {
		argNames: [ "CallerId", "CMU", "isUpdatingApp", "Overwrite", "SkipFeatureDeployment", "StoreAssetId" ],
		},

		addStoreApp: {
		argNames: [ "Url", "Overwrite", "IconUrl", "Publisher", "ShortDescription", "StoreAssetId", "Content" ],
		},

		appRequests: {
		argNames: [ "AppRequestInfo" ],
		},

		downloadTeamsSolution: {
		argNames: [ "id" ],
		},

		downloadTeamsSolutionByUniqueId: {
		argNames: [ "id" ],
		},

		getAppById: {
		argNames: [ "itemUniqueId" ],
		},

		isAppUpgradeAvailable: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		sendAppRequestStatusNotificationEmail: {
		argNames: [ "RequestGuid" ],
		},

		solutionContainsTeamsComponent: {
		argNames: [ "id" ],
		},

		syncSolutionToTeams: {
		argNames: [ "id" ],
		},

		syncSolutionToTeamsByUniqueId: {
		argNames: [ "id" ],
		},

		updateMyRequestStatus: {
		argNames: [ "RequestId", "Status" ],
		},

		upload: {
		argNames: [ "Url", "Overwrite", "Content" ],
		},

	},

	"Microsoft.SharePoint.MultiGeo.SPMultiGeoProxy": {
		remoteThumbnail: {
		argNames: [ "url" ],
		},

	},

	"Microsoft.SharePoint.Navigation.REST.HomeSiteNavigationSettings": {
		enableGlobalNavigation: {
		argNames: [ "isEnabled" ],
		},

	},

	"Microsoft.SharePoint.Navigation.REST.NavigationServiceRest": {
		currentResourcesNav: {
		argNames: [ "source", "includeVivaResources" ],
		},

		getPublishingNavigationProviderType: {
		argNames: [ "mapProviderName" ],
		},

		globalNav: {
		argNames: [ "source", "includeVivaResources" ],
		},

		globalNavEnabled: {
		},

		homeSiteNavigation: {
		argNames: [ "source" ],
		},

		menuNodeKey: {
		argNames: [ "currentUrl", "mapProviderName" ],
		},

		menuState: {
		argNames: [ "menuNodeKey", "mapProviderName", "depth", "customProperties" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		saveMenuState: {
		argNames: [ "menuState", "mapProviderName" ],
		},

		setGlobalNavEnabled: {
		argNames: [ "isEnabled" ],
		},

	},

	"Microsoft.SharePoint.OrgNewsSite.OrgNewsSiteApi": {
		details: {
		},

	},

	"Microsoft.SharePoint.Photos.PhotosMigration": {
		migratePhotosData: {
		},

	},

	"Microsoft.SharePoint.Portal.GroupService": {
		getGroupImage: {
		argNames: [ "id", "hash", "color" ],
		},

		setGroupImage: {
		argNames: [ "imageStream" ],
		},

		syncGroupProperties: {
		},

	},

	"Microsoft.SharePoint.Portal.GroupSiteManager": {
		cacheCurrentUserJoinedTeamsResult: {
		argNames: [ "joinedTeams" ],
		},

		canUserCreateGroup: {
		},

		clearCurrentUserTeamsCache: {
		},

		create: {
		argNames: [ "groupId" ],
		},

		createGroup: {
		argNames: [ "displayName", "alias", "isPublic", "ownerPrincipalNames", "description", "creationOptions" ],
		},

		createGroupEx: {
		argNames: [ "displayName", "alias", "isPublic", "optionalParams" ],
		},

		createGroupForSite: {
		argNames: [ "displayName", "alias", "isPublic", "optionalParams" ],
		},

		createTeamsForGroup: {
		argNames: [ "groupId", "teamTemplate" ],
		},

		createTeamsNavLink: {
		argNames: [ "teamsLinkUrl", "siteUrl" ],
		},

		delete: {
		argNames: [ "siteUrl" ],
		requestType: RequestType.Delete
		},

		ensureTeamForGroup: {
		argNames: [ "siteUrl", "teamTemplate" ],
		},

		ensureTeamForGroupEx: {
		argNames: [ "siteUrl", "teamTemplate" ],
		},

		getAllOrgLabels: {
		argNames: [ "pageNumber" ],
		},

		getCurrentUserJoinedTeams: {
		argNames: [ "getLogoData", "forceCacheUpdate" ],
		},

		getCurrentUserSharedChannelMemberGroups: {
		},

		getCurrentUserTeamConnectedMemberGroups: {
		},

		getGroupCreationContext: {
		},

		getGroupSiteConversionData: {
		},

		getParentGroupForChannel: {
		argNames: [ "siteUrl" ],
		},

		getSharedChannelSharePointUrl: {
		argNames: [ "tenantId", "groupId" ],
		},

		getSiteStatus: {
		argNames: [ "groupId" ],
		},

		getTeamChannelFilesUrl: {
		argNames: [ "teamId", "channelId" ],
		},

		getTeamChannels: {
		argNames: [ "teamId", "useStagingEndpoint" ],
		},

		getTeamChannelsDirect: {
		argNames: [ "teamId" ],
		},

		getTeamChannelsEx: {
		argNames: [ "teamId" ],
		},

		getTeamChannelsWithSiteUrl: {
		argNames: [ "siteUrl" ],
		},

		getUserSharedChannelMemberGroups: {
		argNames: [ "userName" ],
		},

		getUserTeamConnectedMemberGroups: {
		argNames: [ "userName" ],
		},

		getValidSiteUrlFromAlias: {
		argNames: [ "alias", "managedPath", "isTeamSite" ],
		},

		hideTeamifyPrompt: {
		argNames: [ "siteUrl" ],
		},

		isTeamifyPromptHidden: {
		argNames: [ "siteUrl" ],
		},

		notebook: {
		argNames: [ "groupId" ],
		},

		pinToTeam: {
		argNames: [ "requestParams" ],
		},

		recentAndJoinedTeams: {
		argNames: [ "includeRecent", "includeTeams", "includePinned", "existingJoinedTeamsData" ],
		},

	},

	"Microsoft.SharePoint.Portal.SPHubSitesUtility": {
		getHubSites: {
		},

	},

	"Microsoft.SharePoint.Portal.SPSiteManager": {
		archiveTeamChannelSite: {
		argNames: [ "siteId", "archive" ],
		},

		archiveTeamConnectedSite: {
		argNames: [ "SiteId", "IsArchive", "ModernGroupMemberMove", "AllTenantUserMove" ],
		},

		areSegmentsCompatible: {
		argNames: [ "segments" ],
		},

		canCreateHubJoinedSite: {
		argNames: [ "hubSiteId" ],
		},

		create: {
		argNames: [ "request" ],
		},

		delete: {
		argNames: [ "siteId" ],
		requestType: RequestType.Delete
		},

		getCompatibleSegments: {
		argNames: [ "segments" ],
		},

		getIBSegmentLabels: {
		argNames: [ "IBSegments" ],
		},

		getProperty: {
		argNames: [ "propertyName" ],
		},

		getTeamChannelSiteOwner: {
		argNames: [ "siteId" ],
		},

		landingSiteUrlFromName: {
		argNames: [ "siteName" ],
		},

		restoreTeamsChannelSite: {
		argNames: [ "siteId", "relatedGroupId" ],
		},

		setIBSegments: {
		argNames: [ "IBSegments" ],
		},

		setTeamChannelSiteOwner: {
		argNames: [ "siteId", "logonName", "secondaryLogonName" ],
		},

		siteUrl: {
		argNames: [ "siteId" ],
		},

		status: {
		argNames: [ "url" ],
		},

		updateWorkflow2013Endpoint: {
		argNames: [ "workflowServiceAddress", "workflowHostname" ],
		},

		vivaBackendSiteUrlFromName: {
		argNames: [ "siteName" ],
		},

	},

	"Microsoft.SharePoint.Portal.SharePointHomeServiceContextBuilder": {
		context: {
		},

	},

	"Microsoft.SharePoint.Portal.SiteIconManager": {
		getSiteLogo: {
		argNames: [ "siteUrl", "target", "type", "hash" ],
		},

		setSiteLogo: {
		argNames: [ "relativeLogoUrl", "type", "aspect", "focalx", "focaly", "isFocalPatch" ],
		},

	},

	"Microsoft.SharePoint.Portal.SiteLinkingManager": {
		getSiteLinks: {
		},

		linkGroup: {
		argNames: [ "groupId" ],
		},

		unlinkGroup: {
		argNames: [ "groupId" ],
		},

	},

	"Microsoft.SharePoint.Portal.VivaSiteManager": {
		ensureVivaSite: {
		},

	},

	"Microsoft.SharePoint.Publishing.Campaigns.Campaign": {
		associate: {
		argNames: [ "publicationId" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		publications: {
		argNames: [ "offset", "limit" ],
		},

		update: {
		argNames: [ "metadata" ],
		},

	},

	"Microsoft.SharePoint.Publishing.Campaigns.Campaign.Collection": {
		create: {
		argNames: [ "metadata" ],
		},

		getAll: {
		argNames: [ "offset", "limit" ],
		},

		getAssociationsByCampaignId: {
		argNames: [ "campaignId" ],
		},

		getByAssociatedPublicationId: {
		argNames: [ "publicationId" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		migrate: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"Microsoft.SharePoint.QuotaManagement.Consumer.NonQuotaBackfillApi": {
		backfillNonQuota: {
		argNames: [ "backfillUserfacts" ],
		},

	},

	"Microsoft.SharePoint.QuotaManagement.Consumer.NonQuotaMigrationApi": {
		migrateNonQuota: {
		},

	},

	"Microsoft.SharePoint.QuotaManagement.Consumer.QuotaMigrationApi": {
		migrateQuota: {
		argNames: [ "IsMaxQuotaCall" ],
		},

	},

	"Microsoft.SharePoint.SectionDesignIdeas.SectionDesignIdeasApi": {
		getSectionDesignIdeas: {
		argNames: [ "title", "subTitle" ],
		},

		ping: {
		},

	},

	"Microsoft.SharePoint.Sharing.Internal.SharingRestrictions": {
		update: {
		},

	},

	"Microsoft.SharePoint.SiteManager.SiteManagerService": {
		addSuggestionItems: {
		argNames: [ "suggestionItems" ],
		},

		deleteSuggestionItemsByIdentifiers: {
		argNames: [ "cardType", "identifiers" ],
		},

		ensureMissingLinksListFeature: {
		},

		ensureRedirectUrlListFeature: {
		},

		ensureRetirePageFeature: {
		},

		ensureSuggestionListFeature: {
		},

		getDismissedContentGapSuggestions: {
		},

		logMissingLink: {
		argNames: [ "referrerUrl", "destinationUrl" ],
		},

		performBAAA: {
		argNames: [ "baaaRequest" ],
		},

		retirablePages: {
		argNames: [ "top", "skipToken", "isDebug", "snoozedPaths", "isDocument", "dataSources" ],
		},

		retiredPagesView: {
		},

		setSiteManagerSignals: {
		argNames: [ "signals" ],
		},

		siteManagerSignals: {
		},

		topFiles: {
		argNames: [ "maxCount" ],
		},

		topMissingLinks: {
		argNames: [ "maxCount", "snoozedLinks" ],
		},

	},

	"Microsoft.SharePoint.TenantCdn.TenantCdnApi": {
		getCdnUrls: {
		argNames: [ "items" ],
		},

		isFolderUrlsInTenantCdn: {
		argNames: [ "urls", "cdnType" ],
		},

	},

	"Microsoft.SharePoint.Webhooks.Subscription": {
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		argNames: [ "parameters" ],
		},

	},

	"Microsoft.SharePoint.Webhooks.Subscription.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		remove: {
		argNames: [ "subscriptionId" ],
		},

	},

	"PS.BaseCalendarException": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.Calendar": {
		copyTo: {
		argNames: [ "name" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.Calendar.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"PS.CalendarException": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.CalendarException.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.CustomField": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.CustomField.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByAppAlternateId: {
		argNames: [ "objectId" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"PS.DraftAssignment.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.DraftProjectResource.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		addEnterpriseResourceById: {
		argNames: [ "resourceId" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.DraftTask.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.DraftTaskLink.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.EngagementComment.Collection": {
		add: {
		argNames: [ "comment" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.EnterpriseProjectType": {
		addDepartment: {
		argNames: [ "departmentValueGuid" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		removeDepartment: {
		argNames: [ "departmentValueGuid" ],
		},

		updateCreatePDP: {
		argNames: [ "pdp" ],
		},

	},

	"PS.EnterpriseProjectType.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"PS.EnterpriseResource": {
		delete: {
		requestType: RequestType.Delete
		},

		forceCheckIn: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		updateClaimsAccount: {
		argNames: [ "newClaimsAccount" ],
		},

	},

	"PS.EnterpriseResource.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"PS.EnterpriseResourceCostRate": {
		rESTfulUpdate: {
		},

		restfulDelete: {
		},

	},

	"PS.EnterpriseResourceCostRate.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByDateUrl: {
		argNames: [ "effectiveDate" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.EntityLink": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.EntityLink.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"PS.Event.Collection": {
		getById: {
		argNames: [ "objectId" ],
		},

		getByInt: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.EventHandler": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.EventHandler.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"PS.LookupCost": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.LookupDate": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.LookupDuration": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.LookupEntry": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.LookupEntry.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByAppAlternateId: {
		argNames: [ "objectId" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.LookupNumber": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.LookupTable": {
		addMask: {
		argNames: [ "mask" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		updateMask: {
		argNames: [ "mask", "level" ],
		},

	},

	"PS.LookupTable.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByAppAlternateId: {
		argNames: [ "objectId" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"PS.LookupText": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.Phase": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.Phase.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"PS.PlanAssignment": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.PlanAssignment.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.PlanAssignmentInterval.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		getByStart: {
		argNames: [ "start" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.Project": {
		getResourcePlanByUrl: {
		argNames: [ "start", "end", "scale" ],
		},

		leaveProjectStage: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		readyToLeaveProjectStage: {
		},

		updateIdeaListItemStatus: {
		argNames: [ "status" ],
		},

	},

	"PS.ProjectDetailPage.Collection": {
		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.ProjectEngagement": {
		delete: {
		requestType: RequestType.Delete
		},

		getTimephasedByUrl: {
		argNames: [ "start", "end", "scale", "contourType" ],
		},

	},

	"PS.ProjectEngagement.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"PS.ProjectEngagementTimephasedPeriod.Collection": {
		getByStartUrl: {
		argNames: [ "start" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.ProjectServer": {
		getDeletedPublishedAssignments: {
		argNames: [ "deletedDate" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		stopDelegation: {
		},

	},

	"PS.ProjectWorkflowInstance": {
		query: { argNames: ["oData"], requestType: RequestType.OData },

		restartWorkflow: {
		},

		restartWorkflowSkipToStage: {
		argNames: [ "stageId" ],
		},

	},

	"PS.ProjectWorkflowInstance.Collection": {
		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.PublishedAssignment.Collection": {
		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.PublishedProject": {
		checkOut: {
		},

		createProjectSite: {
		argNames: [ "siteName" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		getResourcePlanByUrl: {
		argNames: [ "start", "end", "scale" ],
		},

		leaveProjectStage: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		readyToLeaveProjectStage: {
		},

		submitToWorkflow: {
		},

		unlinkProjectSite: {
		},

		updateIdeaListItemStatus: {
		argNames: [ "status" ],
		},

		updateVisibilityCustomFields: {
		},

	},

	"PS.PublishedProject.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

		validate: {
		},

	},

	"PS.PublishedProjectResource.Collection": {
		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.PublishedTask": {
		addTaskPlanLink: {
		argNames: [ "parameters" ],
		},

		deleteTaskPlanLink: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.PublishedTask.Collection": {
		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.PublishedTaskLink.Collection": {
		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.QueueJob": {
		cancel: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.QueueJob.Collection": {
		getAll: {
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.ResourceCalendarException": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.ResourceEngagement": {
		delete: {
		requestType: RequestType.Delete
		},

		getTimephasedByUrl: {
		argNames: [ "start", "end", "scale", "contourType" ],
		},

	},

	"PS.ResourceEngagement.Collection": {
		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"PS.ResourceEngagementTimephasedPeriod.Collection": {
		getByStartUrl: {
		argNames: [ "start" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.ResourcePlan": {
		delete: {
		requestType: RequestType.Delete
		},

		forceCheckIn: {
		},

		publish: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"PS.ServiceStatus": {
		stopDelegation: {
		},

	},

	"PS.Stage": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.Stage.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"PS.StageCustomField": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.StageCustomField.Collection": {
		add: {
		argNames: [ "creationInfo" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.StageDetailPage": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.StageDetailPage.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.StatusAssignment": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		submitStatusUpdates: {
		argNames: [ "comment" ],
		},

	},

	"PS.StatusAssignment.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		getTimePhaseByUrl: {
		argNames: [ "start", "end" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		submitAllStatusUpdates: {
		argNames: [ "comment" ],
		},

		update: {
		},

	},

	"PS.StatusAssignmentHistoryLine.Collection": {
		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.TaskPlanLink": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.TimeSheet": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		recall: {
		},

		submit: {
		argNames: [ "comment" ],
		},

		update: {
		},

	},

	"PS.TimeSheetLine": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		submit: {
		argNames: [ "comment" ],
		},

	},

	"PS.TimeSheetLine.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.TimeSheetPeriod": {
		createTimeSheet: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.TimeSheetPeriod.Collection": {
		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.TimeSheetWork": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.TimeSheetWork.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

		getByStartDate: {
		argNames: [ "start" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"PS.WorkflowActivities": {
		checkInWithJobId: {
		argNames: [ "projId", "jobId", "force" ],
		},

		createProjectFromListItem: {
		argNames: [ "webId", "listId", "itemId", "eptId" ],
		},

		enterProjectStage: {
		argNames: [ "projectId", "stageId" ],
		},

		leaveProjectStage: {
		argNames: [ "projectId" ],
		},

		publishSummaryWithJobId: {
		argNames: [ "projId", "jobId" ],
		},

		publishWithJobId: {
		argNames: [ "projectId", "jobId" ],
		},

		readBooleanProperty: {
		argNames: [ "projectId", "propertyId" ],
		},

		readCurrencyProperty: {
		argNames: [ "projectId", "propertyId" ],
		},

		readDateTimeProperty: {
		argNames: [ "projectId", "propertyId" ],
		},

		readGuidProperty: {
		argNames: [ "projectId", "propertyId" ],
		},

		readIntegerProperty: {
		argNames: [ "projectId", "propertyId" ],
		},

		readNumberProperty: {
		argNames: [ "projectId", "propertyId" ],
		},

		readProjectProperty: {
		argNames: [ "projectId", "propertyId" ],
		},

		readTextProperty: {
		argNames: [ "projectId", "propertyId" ],
		},

		readyToLeaveProjectStage: {
		argNames: [ "projectId" ],
		},

		updateBooleanProperty: {
		argNames: [ "projectId", "propertyId", "value" ],
		},

		updateCurrencyProperty: {
		argNames: [ "projectId", "propertyId", "value" ],
		},

		updateDateTimeProperty: {
		argNames: [ "projectId", "propertyId", "value" ],
		},

		updateGuidProperty: {
		argNames: [ "projectId", "propertyId", "value" ],
		},

		updateIdeaListItemStatus: {
		argNames: [ "projectId", "status" ],
		},

		updateIntegerProperty: {
		argNames: [ "projectId", "propertyId", "value" ],
		},

		updateNumberProperty: {
		argNames: [ "projectId", "propertyId", "value" ],
		},

		updateProjectStageStatus: {
		argNames: [ "projectId", "stageId", "statusInformation", "stageStatusValue", "append" ],
		},

		updateTextProperty: {
		argNames: [ "projectId", "propertyId", "value" ],
		},

	},

	"PS.WorkflowDesignerField.Collection": {
		getById: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Alert": {
		query: { argNames: ["oData"], requestType: RequestType.OData },

		updateAlert: {
		},

	},

	"SP.Alert.Collection": {
		add: {
		argNames: [ "alertCreationInformation" ],
		},

		contains: {
		argNames: [ "idAlert" ],
		},

		deleteAlert: {
		argNames: [ "idAlert" ],
		},

		deleteAlertAtIndex: {
		argNames: [ "index" ],
		},

		getById: {
		argNames: [ "idAlert" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.AppConfiguration": {
		update: {
		},

	},

	"SP.AppInstance": {
		cancelAllJobs: {
		},

		getAppDatabaseConnectionString: {
		},

		getErrorDetails: {
		},

		getPreviousAppVersion: {
		},

		install: {
		},

		recycle: {
		},

		restore: {
		},

		retryAllJobs: {
		},

		uninstall: {
		},

		upgrade: {
		argNames: [ "appPackageStream" ],
		},

	},

	"SP.Attachment": {
		delete: {
		requestType: RequestType.Delete
		},

		recycleObject: {
		},

	},

	"SP.Attachment.Collection": {
		add: {
		argNames: [ "FileName", "Content" ],
		},

		addUsingPath: {
		argNames: [ "DecodedUrl", "contentStream" ],
		},

		getByFileName: {
		argNames: [ "fileName" ],
		},

		getByFileNameAsPath: {
		argNames: [ "DecodedUrl" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Audit": {
		update: {
		},

	},

	"SP.BrandCenter": {
		addSiteTheme: {
		argNames: [ "themeData" ],
		},

		addTenantTheme: {
		argNames: [ "themeData" ],
		},

		configuration: {
		},

		currentBrandingConfiguration: {
		},

		deleteSiteTheme: {
		argNames: [ "themeId" ],
		},

		deleteTenantTheme: {
		argNames: [ "themeId" ],
		},

		ensureBrandColorsListFeature: {
		},

		ensureBrandFontsLibraryFeature: {
		},

		getFontStream: {
		argNames: [ "fontFileUrl" ],
		},

		getSiteThemeById: {
		argNames: [ "id" ],
		},

		getSiteThemes: {
		},

		getTenantThemeById: {
		argNames: [ "id" ],
		},

		getTenantThemeByName: {
		argNames: [ "name" ],
		},

		getTenantThemeByNameXgeoUtil: {
		argNames: [ "name" ],
		},

		getTenantThemes: {
		},

		getTenantThemesXgeoUtil: {
		},

		orgAssets: {
		},

		orgAssetsWithCacheFlag: {
		argNames: [ "shouldUseCache" ],
		},

		setWebTheme: {
		argNames: [ "name", "webUrl" ],
		},

		updateSiteTheme: {
		argNames: [ "themeData" ],
		},

		updateTenantTheme: {
		argNames: [ "themeData" ],
		},

		validateSiteThemeName: {
		argNames: [ "name" ],
		},

		validateTenantThemeName: {
		argNames: [ "name" ],
		},

	},

	"SP.BusinessData.AppBdcCatalog": {
		getConnectionId: {
		argNames: [ "lobSystemName", "lobSystemInstanceName" ],
		},

		getEntity: {
		argNames: [ "namespace", "name" ],
		},

		getLobSystemInstanceProperty: {
		argNames: [ "lobSystemName", "lobSystemInstanceName", "propertyName" ],
		},

		getLobSystemProperty: {
		argNames: [ "lobSystemName", "propertyName" ],
		},

		getPermissibleConnections: {
		},

		setConnectionId: {
		argNames: [ "lobSystemName", "lobSystemInstanceName", "connectionId" ],
		},

		setLobSystemInstanceProperty: {
		argNames: [ "lobSystemName", "lobSystemInstanceName", "propertyName", "propertyValue" ],
		},

		setLobSystemProperty: {
		argNames: [ "lobSystemName", "propertyName", "propertyValue" ],
		},

	},

	"SP.BusinessData.Entity": {
		getAssociationView: {
		argNames: [ "associationName" ],
		},

		getCreatorView: {
		argNames: [ "methodInstanceName" ],
		},

		getDefaultSpecificFinderView: {
		},

		getFilters: {
		argNames: [ "methodInstanceName" ],
		},

		getFinderView: {
		argNames: [ "methodInstanceName" ],
		},

		getIdentifierCount: {
		},

		getIdentifiers: {
		},

		getSpecificFinderView: {
		argNames: [ "specificFinderName" ],
		},

		getUpdaterView: {
		argNames: [ "updaterName" ],
		},

	},

	"SP.BusinessData.EntityIdentifier": {
		containsLocalizedDisplayName: {
		},

		getDefaultDisplayName: {
		},

		getLocalizedDisplayName: {
		},

	},

	"SP.BusinessData.EntityView": {
		getDefaultValues: {
		},

		getType: {
		argNames: [ "fieldDotNotation" ],
		},

		getTypeDescriptor: {
		argNames: [ "fieldDotNotation" ],
		},

		getXmlSchema: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.BusinessData.Infrastructure.ExternalSubscriptionStore": {
		indexStore: {
		},

	},

	"SP.BusinessData.Runtime.EntityFieldValueDictionary": {
		createCollectionInstance: {
		argNames: [ "fieldDotNotation", "size" ],
		},

		createInstance: {
		argNames: [ "fieldInstanceDotNotation", "fieldDotNotation" ],
		},

		fromXml: {
		argNames: [ "xml" ],
		},

		getCollectionSize: {
		argNames: [ "fieldDotNotation" ],
		},

		toXml: {
		},

	},

	"SP.BusinessData.Runtime.EntityInstance": {
		createCollectionInstance: {
		argNames: [ "fieldDotNotation", "size" ],
		},

		createInstance: {
		argNames: [ "fieldInstanceDotNotation", "fieldDotNotation" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		fromXml: {
		argNames: [ "xml" ],
		},

		getIdentity: {
		},

		toXml: {
		},

		update: {
		},

	},

	"SP.BusinessData.TypeDescriptor": {
		containsLocalizedDisplayName: {
		},

		getChildTypeDescriptors: {
		},

		getDefaultDisplayName: {
		},

		getLocalizedDisplayName: {
		},

		getParentTypeDescriptor: {
		},

		isLeaf: {
		},

		isRoot: {
		},

	},

	"SP.CheckedOutFile": {
		query: { argNames: ["oData"], requestType: RequestType.OData },

		takeOverCheckOut: {
		},

	},

	"SP.CheckedOutFile.Collection": {
		getByPath: {
		argNames: [ "DecodedUrl" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.ClientWebPart": {
		render: {
		argNames: [ "properties" ],
		},

	},

	"SP.ClientWebPart.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.CompliancePolicy.SPPolicyStoreProxy": {
		bulkUpdateDynamicScopeBindings: {
		argNames: [ "scopesToAdd", "scopesToRemove", "siteId" ],
		},

		extendReviewItemsRetention: {
		argNames: [ "itemIds", "extensionDate" ],
		},

		getDynamicScopeBindingBySiteId: {
		argNames: [ "siteId" ],
		},

		getSiteAdaptivePolicies: {
		argNames: [ "siteId" ],
		},

		getSiteAdaptivePoliciesV2: {
		argNames: [ "siteId" ],
		},

		markReviewItemsForDeletion: {
		argNames: [ "itemIds" ],
		},

		openBinaryStreamForOriginalItem: {
		argNames: [ "itemId" ],
		},

		removeContainerRetentionPolicy: {
		argNames: [ "siteId" ],
		},

		removeContainerSettings: {
		argNames: [ "externalId" ],
		},

		retagReviewItems: {
		argNames: [ "itemIds", "newTag", "newTagIsRecord", "newTagBlockDelete", "newTagIsEventBased" ],
		},

		retagReviewItemsWithMetas: {
		argNames: [ "itemIds", "newTagName", "newTagMetas" ],
		},

		retagUnifiedReviewItemsWithMetas: {
		argNames: [ "itemIds", "originalTagName", "newTagName", "newTagMetas" ],
		},

		setContainerRetentionPolicy: {
		argNames: [ "siteId", "defaultContainerLabel" ],
		},

		updateContainerSetting: {
		argNames: [ "siteId", "externalId", "settingType", "setting" ],
		},

		updateSiteAdaptivePolicies: {
		argNames: [ "policiesToAdd", "policiesToRemove", "siteId" ],
		},

		updateSiteAdaptivePoliciesV2: {
		argNames: [ "policiesToAdd", "policiesToRemove", "siteId" ],
		},

	},

	"SP.ContentType": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		reorderFields: {
		argNames: [ "fieldNames" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.ContentType.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		addAvailableContentType: {
		argNames: [ "contentTypeId" ],
		},

		create: {
		argNames: [ "parameters" ],
		},

		getById: {
		argNames: [ "contentTypeId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Directory.DirectorySession": {
		getSharePointDataForUser: {
		argNames: [ "userId" ],
		},

		group: {
		argNames: [ "groupId", "alias" ],
		},

		joinGroup: {
		argNames: [ "groupId" ],
		},

		me: {
		},

		user: {
		argNames: [ "id", "principalName" ],
		},

		validateGroupName: {
		argNames: [ "displayName", "alias" ],
		},

	},

	"SP.Directory.Group": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Directory.Group.Collection": {
		add: {
		argNames: [ "objectId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		remove: {
		argNames: [ "objectId" ],
		},

	},

	"SP.Directory.Provider.DirectoryNotification": {
		notifyChanges: {
		argNames: [ "directoryObjectChanges" ],
		},

	},

	"SP.Directory.Provider.SharePointDirectoryProvider": {
		createDirectoryObject: {
		argNames: [ "data" ],
		},

		deleteDirectoryObject: {
		argNames: [ "data" ],
		},

		getOrCreateUnifiedGroupTenantInstanceId: {
		argNames: [ "groupId", "tenantInstanceId" ],
		},

		getOrCreateUnifiedGroupWithPreferredDataLocation: {
		argNames: [ "groupId", "preferredDataLocation" ],
		},

		notifyDataChanges: {
		argNames: [ "data" ],
		},

		readDirectoryObject: {
		argNames: [ "data" ],
		},

		readDirectoryObjectBatch: {
		argNames: [ "ids", "objectType" ],
		},

		updateCache: {
		argNames: [ "data" ],
		},

		updateDirectoryObject: {
		argNames: [ "data" ],
		},

	},

	"SP.Directory.User": {
		getUserLinks: {
		argNames: [ "linkName", "groupType" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Directory.User.Collection": {
		add: {
		argNames: [ "objectId", "principalName" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		remove: {
		argNames: [ "objectId" ],
		},

	},

	"SP.DocumentManagement.DocumentId": {
		resetDocIdByServerRelativePath: {
		argNames: [ "DecodedUrl" ],
		},

		resetDocIdsInLibrary: {
		argNames: [ "DecodedUrl", "contentTypeId" ],
		},

		setDocIdSitePrefix: {
		argNames: [ "prefix", "scheduleAssignment", "overwriteExistingIds" ],
		},

	},

	"SP.DynamicContentUpdateService": {
		addFAQUserSubmittedQuestions: {
		argNames: [ "data" ],
		},

		addOrUpdateFAQContentUpdateSuggestion: {
		argNames: [ "suggestion" ],
		},

		deleteFAQAggregatedQuestion: {
		argNames: [ "data" ],
		},

		deleteFAQContentUpdateSuggestion: {
		argNames: [ "suggestion" ],
		},

		ensureDynamicContentUpdateListFeature: {
		},

		ensureFAQAggregatedQuestionsListItem: {
		argNames: [ "data" ],
		},

		fAQAggregatedQuestions: {
		argNames: [ "pageListItemId", "webPartInstanceId", "uniqueId" ],
		},

		fAQContentUpdateSuggestions: {
		argNames: [ "maxItemCount", "snoozedIdentifiers" ],
		},

		fAQUserSubmittedQuestions: {
		argNames: [ "pageListItemId", "webPartInstanceId", "uniqueId" ],
		},

		updateFAQAggregatedQuestions: {
		argNames: [ "aggregatedData" ],
		},

	},

	"SP.EmployeeEngagement": {
		configuration: {
		},

		configuredVivaConnectionsURL: {
		},

		dashboardContent: {
		argNames: [ "overrideLanguageCode" ],
		},

		dashboardOOBContent: {
		argNames: [ "oobContentChoice" ],
		},

		fullDashboardContent: {
		argNames: [ "canvasAsJson", "includePersonalizationData" ],
		},

		getDashboardPersonalization: {
		},

		getDataForHome: {
		},

		getTargetedSitesAsEditor: {
		},

		likeNewsPost: {
		argNames: [ "pageUrl", "listId", "listItemUniqueId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		setDashboardPersonalization: {
		argNames: [ "isEnabled" ],
		},

		unlikeNewsPost: {
		argNames: [ "pageUrl", "listId", "listItemUniqueId" ],
		},

		vivaConnections: {
		argNames: [ "adminConfiguredUrl" ],
		},

		vivaHome: {
		},

		vivaHomeConfiguration: {
		argNames: [ "shouldByPassCache" ],
		},

	},

	"SP.EmployeeExperienceController": {
		dashboard: {
		argNames: [ "formFactor", "dashboardId", "mySiteUrl" ],
		},

		getAnnouncementsState: {
		argNames: [ "mySiteUrl" ],
		},

		saveDashboard: {
		argNames: [ "employeeExperienceDashboardData", "userCards", "mySiteUrl" ],
		},

		setAnnouncementState: {
		argNames: [ "announcementStates", "mySiteUrl" ],
		},

	},

	"SP.EventReceiverDefinition": {
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.EventReceiverDefinition.Collection": {
		add: {
		argNames: [ "eventReceiverCreationInformation" ],
		},

		getById: {
		argNames: [ "eventReceiverId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Feature.Collection": {
		add: {
		argNames: [ "featureId", "force", "featdefScope" ],
		},

		getById: {
		argNames: [ "featureId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		remove: {
		argNames: [ "featureId", "force" ],
		},

	},

	"SP.Field": {
		add: {
		argNames: [ "parameters" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.Field.Collection": {
		addDependentLookupField: {
		argNames: [ "displayName", "primaryLookupFieldId", "showField" ],
		},

		addField: {
		argNames: [ "parameters" ],
		},

		createFieldAsXml: {
		argNames: [ "schemaXml" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		getByInternalNameOrTitle: {
		argNames: [ "strName" ],
		},

		getByTitle: {
		argNames: [ "title" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.FieldCalculated": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldChoice": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldComputed": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldCurrency": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldDateTime": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldGeolocation": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldGuid": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldLink": {
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldLink.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		reorder: {
		argNames: [ "internalNames" ],
		},

	},

	"SP.FieldLocation": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldLookup": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldMultiChoice": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldMultiLineText": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldNumber": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldRatingScale": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldText": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldThumbnail": {
		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldUrl": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.FieldUser": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.File": {
		addClientActivities: {
		argNames: [ "activitiesStream" ],
		},

		addFileScannerWorkItem: {
		argNames: [ "dispatchType", "jobType", "jobSubType", "additionalJobAttributes" ],
		},

		approve: {
		argNames: [ "comment" ],
		},

		cancelUpload: {
		argNames: [ "uploadId" ],
		},

		changeContentStorageSchema: {
		argNames: [ "desiredSchema" ],
		},

		checkAccessAndPostViewAuditEvent: {
		},

		checkIn: {
		argNames: [ "comment", "checkInType" ],
		},

		checkOut: {
		},

		content: {
		},

		continueUpload: {
		argNames: [ "uploadId", "fileOffset", "stream" ],
		},

		copyTo: {
		argNames: [ "strNewUrl", "bOverWrite" ],
		},

		copyToUsingPath: {
		argNames: [ "DecodedUrl", "bOverWrite" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		deleteWithParameters: {
		argNames: [ "parameters" ],
		},

		deny: {
		argNames: [ "comment" ],
		},

		executeCobaltRequest: {
		argNames: [ "inputStream" ],
		},

		finishUpload: {
		argNames: [ "uploadId", "fileOffset", "stream" ],
		},

		finishUploadWithChecksum: {
		argNames: [ "uploadId", "fileOffset", "checksum", "stream", "sandboxId" ],
		},

		getFileUserValue: {
		argNames: [ "key" ],
		},

		getImagePreviewUri: {
		argNames: [ "width", "height", "clientType" ],
		},

		getImagePreviewUrl: {
		argNames: [ "width", "height", "clientType" ],
		},

		getLimitedWebPartManager: {
		argNames: [ "scope" ],
		},

		getMediaServiceMetadata: {
		},

		getPreAuthorizedAccessUrl: {
		argNames: [ "expirationHours" ],
		},

		getPreAuthorizedAccessUrl2: {
		argNames: [ "expirationHours", "expirationMinuites" ],
		},

		getUploadStatus: {
		argNames: [ "uploadId" ],
		},

		getWOPIFrameUrl: {
		argNames: [ "action" ],
		},

		moveTo: {
		argNames: [ "newUrl", "flags" ],
		},

		moveToUsingPath: {
		argNames: [ "DecodedUrl", "moveOperations" ],
		},

		openBinaryStream: {
		},

		openBinaryStreamWithOptions: {
		argNames: [ "openOptions" ],
		},

		publish: {
		argNames: [ "comment" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		recycle: {
		},

		recycleWithETag: {
		argNames: [ "etagMatch" ],
		},

		recycleWithParameters: {
		argNames: [ "parameters" ],
		},

		saveBinaryStream: {
		argNames: [ "file" ],
		},

		setExpirationDate: {
		argNames: [ "expirationDate" ],
		},

		setFileUserValue: {
		argNames: [ "key", "value" ],
		},

		setMediaServiceMetadata: {
		argNames: [ "parameters" ],
		},

		startUpload: {
		argNames: [ "uploadId", "stream" ],
		},

		startUploadFile: {
		argNames: [ "uploadId", "stream" ],
		},

		unPublish: {
		argNames: [ "comment" ],
		},

		undoCheckOut: {
		},

		update: {
		argNames: [ "properties" ],
		},

		updateVirusInfo: {
		argNames: [ "virusStatus", "virusMessage", "etagToCheck" ],
		},

		upload: {
		argNames: [ "uploadId", "stream" ],
		},

		uploadWithChecksum: {
		argNames: [ "uploadId", "checksum", "stream" ],
		},

	},

	"SP.File.Collection": {
		add: {
		argNames: [ "Url", "Overwrite", "Content" ],
		},

		addStub: {
		argNames: [ "urlOfFile" ],
		},

		addStubUsingPath: {
		argNames: [ "DecodedUrl", "AutoCheckoutOnInvalidData", "EnsureUniqueFileName", "Overwrite", "XorHash" ],
		},

		addTemplateFile: {
		argNames: [ "urlOfFile", "templateFileType" ],
		},

		addUsingPath: {
		argNames: [ "DecodedUrl", "AutoCheckoutOnInvalidData", "EnsureUniqueFileName", "Overwrite", "XorHash", "contentStream" ],
		},

		ensurePublishedFile: {
		argNames: [ "baseFilePath" ],
		},

		getBaseFile: {
		argNames: [ "publishedFilePath" ],
		},

		getByPathOrAddStub: {
		argNames: [ "DecodedUrl" ],
		},

		getByUrl: {
		argNames: [ "url" ],
		},

		getByUrlOrAddStub: {
		argNames: [ "urlOfFile" ],
		},

		getPublishedFile: {
		argNames: [ "baseFilePath" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		stopPublish: {
		argNames: [ "baseFilePath" ],
		},

	},

	"SP.FileUrlVirusStatusUpdate": {
		updateVirusStatus: {
		},

	},

	"SP.FileVersion": {
		delete: {
		requestType: RequestType.Delete
		},

		openBinaryStream: {
		},

		openBinaryStreamWithOptions: {
		argNames: [ "openOptions" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		setExpirationDate: {
		argNames: [ "expirationDate" ],
		},

	},

	"SP.FileVersion.Collection": {
		deleteAll: {
		},

		deleteByID: {
		argNames: [ "vid" ],
		},

		deleteByLabel: {
		argNames: [ "versionlabel" ],
		},

		getById: {
		argNames: [ "versionid" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		recycleByID: {
		argNames: [ "vid" ],
		},

		recycleByLabel: {
		argNames: [ "versionlabel" ],
		},

		restoreByLabel: {
		argNames: [ "versionlabel" ],
		},

	},

	"SP.Folder": {
		addSubFolder: {
		argNames: [ "leafName", "updateParams" ],
		},

		addSubFolderUsingPath: {
		argNames: [ "DecodedUrl" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		deleteWithParameters: {
		argNames: [ "parameters" ],
		},

		getChanges: {
		argNames: [ "query" ],
		},

		getListItemChanges: {
		argNames: [ "query" ],
		},

		moveTo: {
		argNames: [ "newUrl" ],
		},

		moveToUsingPath: {
		argNames: [ "DecodedUrl" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		recycle: {
		},

		recycleWithParameters: {
		argNames: [ "parameters" ],
		},

		startDelete: {
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.Folder.Collection": {
		add: {
		argNames: [ "url" ],
		},

		addUsingPath: {
		argNames: [ "DecodedUrl", "EnsureUniqueFileName", "Overwrite" ],
		},

		addWithOverwrite: {
		argNames: [ "url", "overwrite" ],
		},

		getByPath: {
		argNames: [ "DecodedUrl" ],
		},

		getByUrl: {
		argNames: [ "url" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.FolderColoring": {
		createFolder: {
		argNames: [ "DecodedUrl", "EnsureUniqueFileName", "Overwrite", "coloringInformation" ],
		},

		renameFolder: {
		argNames: [ "DecodedUrl", "newName", "coloringInformation" ],
		},

		stampColor: {
		argNames: [ "DecodedUrl", "coloringInformation" ],
		},

	},

	"SP.FontPackage": {
		apply: {
		},

		delete: {
		requestType: RequestType.Delete
		},

		fontStream: {
		argNames: [ "fontFamily" ],
		},

		update: {
		},

	},

	"SP.FontPackage.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		getByTitle: {
		argNames: [ "title" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Form.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		getByPageType: {
		argNames: [ "formType" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Group": {
		query: { argNames: ["oData"], requestType: RequestType.OData },

		setUserAsOwner: {
		argNames: [ "ownerId" ],
		},

		update: {
		},

	},

	"SP.Group.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		getByName: {
		argNames: [ "name" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		removeById: {
		argNames: [ "id" ],
		},

		removeByLoginName: {
		argNames: [ "loginName" ],
		},

	},

	"SP.HubSite": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"SP.HubSite.Collection": {
		getById: {
		argNames: [ "hubSiteId" ],
		},

		getConnectedHubs: {
		argNames: [ "hubSiteId", "option" ],
		},

		getSiteUrlByHubSiteId: {
		argNames: [ "hubSiteId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.InformationRightsManagementFileSettings": {
		reset: {
		},

		update: {
		},

	},

	"SP.InformationRightsManagementSettings": {
		reset: {
		},

		update: {
		},

	},

	"SP.KnowledgeHub": {
		addOrUpdateSiteReference: {
		argNames: [ "knowledgeHubSiteUrl" ],
		},

		siteReference: {
		},

	},

	"SP.LanguageCollection": {
		getById: {
		argNames: [ "id" ],
		},

	},

	"SP.List": {
		addItem: {
		argNames: [ "parameters" ],
		},

		addItemUsingPath: {
		argNames: [ "parameters" ],
		},

		addValidateUpdateItem: {
		argNames: [ "listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture" ],
		},

		addValidateUpdateItemUsingPath: {
		argNames: [ "listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture" ],
		},

		breakRoleInheritance: {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		bulkValidateUpdateListItems: {
		argNames: [ "itemIds", "formValues", "bNewDocumentUpdate", "checkInComment", "folderPath" ],
		},

		cAAECreateTempFolder: {
		},

		cAAERenameFileInTemporaryFolder: {
		argNames: [ "Path", "UpdatedName" ],
		},

		cancelDeleteFileVersions: {
		},

		clearBusinessAppMigrationInteractiveData: {
		},

		copyTemplateAndGetMetadata: {
		argNames: [ "Id" ],
		},

		createDocumentAndGetEditLink: {
		argNames: [ "fileName", "folderPath", "documentTemplateType", "templateUrl" ],
		},

		createDocumentFromCAAETemplate: {
		argNames: [ "ContentTypeName", "documentGenerationInfo" ],
		},

		createDocumentFromCAAETemplateV2: {
		argNames: [ "Id", "documentGenerationInfo" ],
		},

		createDocumentFromContentAssemblyTemplate: {
		argNames: [ "TemplateUrl", "documentGenerationInfo" ],
		},

		createDocumentWithDefaultName: {
		argNames: [ "folderPath", "extension" ],
		},

		createHVCSItemApprovalRequest: {
		argNames: [ "createItemRequestPayload" ],
		},

		createListForm: {
		argNames: [ "parameters" ],
		},

		createMappedView: {
		argNames: [ "appViewCreationInfo", "visualizationTarget" ],
		},

		createRuleEx: {
		argNames: [ "condition", "title", "triggerType", "action", "ruleTemplateId" ],
		},

		createSmartTemplateContentTypeAndAddToList: {
		argNames: [ "Name", "Description" ],
		},

		createSmartTemplateContentTypeAndAddToListV2: {
		argNames: [ "Name", "Description", "TemplatePath", "Status" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		deleteRule: {
		argNames: [ "ruleId", "triggerType" ],
		},

		enableQueryableColumns: {
		},

		enqueueAsyncActionTaskById: {
		argNames: [ "id", "parameters" ],
		},

		ensureSignoffStatusField: {
		},

		getAllRules: {
		argNames: [ "includeQuicksteps", "includeAutomaticRules" ],
		},

		getAsyncActionConfig: {
		argNames: [ "id" ],
		},

		getAsyncActionTaskIds: {
		},

		getBloomFilter: {
		argNames: [ "startItemId" ],
		},

		getBloomFilterWithCustomFields: {
		argNames: [ "listItemStartingID", "internalFieldNames" ],
		},

		getBusinessAppMigrationInteractiveData: {
		},

		getBusinessAppOperationStatus: {
		},

		getCAAETemplateMetadata: {
		argNames: [ "Name", "Published" ],
		},

		getCAAETemplateMetadataV2: {
		argNames: [ "Id" ],
		},

		getChanges: {
		argNames: [ "query" ],
		},

		getCheckedOutFiles: {
		},

		getContentAssemblyDocumentFieldValues: {
		argNames: [ "DocumentUrl" ],
		},

		getContentAssemblyTemplateFields: {
		argNames: [ "TemplateUrl" ],
		},

		getItemById: {
		argNames: [ "id" ],
		},

		getItemByStringId: {
		argNames: [ "sId" ],
		},

		getItemByUniqueId: {
		argNames: [ "uniqueId" ],
		},

		getItems: {
		argNames: [ "viewXML" ],
		},

		getItemsByQuery: {
		argNames: [ "camlQuery" ],
		},

		getListForms: {
		argNames: [ "bSanitize" ],
		},

		getListItemChangesSinceToken: {
		argNames: [ "query" ],
		},

		getLookupFieldChoices: {
		argNames: [ "targetFieldName", "pagingInfo" ],
		},

		getMappedApp: {
		argNames: [ "appId", "visualizationAppTarget" ],
		},

		getMappedApps: {
		argNames: [ "visualizationAppTarget" ],
		},

		getProgressForDeleteFileVersions: {
		},

		getProgressForFileVersionExpirationReport: {
		argNames: [ "reportFileUrl" ],
		},

		getRelatedFields: {
		},

		getSpecialFolderUrl: {
		argNames: [ "type", "bForceCreate", "existingFolderGuid" ],
		},

		getUserEffectivePermissions: {
		argNames: [ "userName" ],
		},

		getView: {
		argNames: [ "viewGuid" ],
		},

		isSyntexAIFeaturesFlightEnabled: {
		},

		lockSmartTemplate: {
		argNames: [ "Id" ],
		},

		mapFieldsToColumnsForModernTemlate: {
		argNames: [ "payload" ],
		},

		mapFieldsToColumnsForModernTemplate: {
		argNames: [ "templatePayload" ],
		},

		parseDocumentTemplate: {
		argNames: [ "Name" ],
		},

		publishMappedView: {
		argNames: [ "appId", "visualizationTarget" ],
		},

		publishSnippet: {
		argNames: [ "publishSnippetPayload" ],
		},

		publishTemplateV2: {
		argNames: [ "payload" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		recycle: {
		},

		refreshLockSmartTemplate: {
		argNames: [ "Id", "LockId" ],
		},

		renderExtendedListFormData: {
		argNames: [ "itemId", "formId", "mode", "options", "cutoffVersion" ],
		},

		renderListContextMenuData: {
		argNames: [ "CascDelWarnMessage", "CustomAction", "Field", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsXslView", "ItemId", "ListViewPageUrl", "OverrideScope", "RootFolder", "View", "ViewCount" ],
		},

		renderListData: {
		argNames: [ "viewXml" ],
		},

		renderListDataAsStream: {
		argNames: [ "parameters", "CascDelWarnMessage", "CustomAction", "DrillDown", "Field", "FieldInternalName", "Filter", "FilterData", "FilterData1", "FilterData10", "FilterData2", "FilterData3", "FilterData4", "FilterData5", "FilterData6", "FilterData7", "FilterData8", "FilterData9", "FilterField", "FilterField1", "FilterField10", "FilterField2", "FilterField3", "FilterField4", "FilterField5", "FilterField6", "FilterField7", "FilterField8", "FilterField9", "FilterFields", "FilterFields1", "FilterFields10", "FilterFields2", "FilterFields3", "FilterFields4", "FilterFields5", "FilterFields6", "FilterFields7", "FilterFields8", "FilterFields9", "FilterLookupId", "FilterLookupId1", "FilterLookupId10", "FilterLookupId2", "FilterLookupId3", "FilterLookupId4", "FilterLookupId5", "FilterLookupId6", "FilterLookupId7", "FilterLookupId8", "FilterLookupId9", "FilterOp", "FilterOp1", "FilterOp10", "FilterOp2", "FilterOp3", "FilterOp4", "FilterOp5", "FilterOp6", "FilterOp7", "FilterOp8", "FilterOp9", "FilterValue", "FilterValue1", "FilterValue10", "FilterValue2", "FilterValue3", "FilterValue4", "FilterValue5", "FilterValue6", "FilterValue7", "FilterValue8", "FilterValue9", "FilterValues", "FilterValues1", "FilterValues10", "FilterValues2", "FilterValues3", "FilterValues4", "FilterValues5", "FilterValues6", "FilterValues7", "FilterValues8", "FilterValues9", "GroupString", "HasOverrideSelectCommand", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsGroupRender", "IsXslView", "ListViewPageUrl", "OverrideRowLimit", "OverrideScope", "OverrideSelectCommand", "PageFirstRow", "PageLastRow", "QueryParams", "RootFolder", "RootFolderUniqueId", "SortDir", "SortDir1", "SortDir10", "SortDir2", "SortDir3", "SortDir4", "SortDir5", "SortDir6", "SortDir7", "SortDir8", "SortDir9", "SortField", "SortField1", "SortField10", "SortField2", "SortField3", "SortField4", "SortField5", "SortField6", "SortField7", "SortField8", "SortField9", "SortFields", "SortFieldValues", "View", "ViewCount", "ViewId", "ViewPath", "WebPartId" ],
		},

		renderListFilterData: {
		argNames: [ "ExcludeFieldFilteringHtml", "FieldInternalName", "OverrideScope", "ProcessQStringToCAML", "ViewId", "ViewXml" ],
		},

		renderListFormData: {
		argNames: [ "itemId", "formId", "mode" ],
		},

		reserveListItemId: {
		},

		resetRoleInheritance: {
		},

		saveAsNewView: {
		argNames: [ "oldName", "newName", "privateView", "uri" ],
		},

		saveAsTemplate: {
		argNames: [ "strFileName", "strName", "strDescription", "bSaveData" ],
		},

		searchLookupFieldChoices: {
		argNames: [ "targetFieldName", "beginsWithSearchString", "pagingInfo" ],
		},

		setColumnMapping: {
		argNames: [ "columnMapping" ],
		},

		setContentAssemblyTemplateReadOnly: {
		argNames: [ "Id" ],
		},

		setExemptFromBlockDownloadOfNonViewableFiles: {
		argNames: [ "value" ],
		},

		setItemsOrder: {
		argNames: [ "itemIds", "lowerOrderItemId", "higherOrderItemId" ],
		},

		setListCustomOrderFlag: {
		argNames: [ "value" ],
		},

		setQuickstepOrdering: {
		argNames: [ "quickstepIds" ],
		},

		startDeleteFileVersions: {
		argNames: [ "deleteOlderThanDays" ],
		},

		startDeleteFileVersionsByMode: {
		argNames: [ "batchDeleteParameters" ],
		},

		startFileVersionExpirationReport: {
		argNames: [ "reportFileUrl" ],
		},

		startRecycle: {
		},

		syncFlowCallbackUrl: {
		argNames: [ "flowId" ],
		},

		syncFlowInstance: {
		argNames: [ "flowID" ],
		},

		syncFlowInstances: {
		argNames: [ "retrieveGroupFlows" ],
		},

		syncFlowTemplates: {
		argNames: [ "category" ],
		},

		unlockSmartTemplate: {
		argNames: [ "Id", "LockId" ],
		},

		unpublishMappedView: {
		argNames: [ "appId", "visualizationTarget" ],
		},

		unsetContentAssemblyTemplateReadOnly: {
		argNames: [ "Id" ],
		},

		update: {
		argNames: [ "properties" ],
		},

		updateCAAETemplate: {
		argNames: [ "Name", "updateTemplateInfo" ],
		},

		updateCAAETemplateV2: {
		argNames: [ "Id", "updateTemplateInfo" ],
		},

		updateContentAssemblyDocument: {
		argNames: [ "TemplateUrl", "contentAssemblyFormAnswers" ],
		},

		updateFormProcessingModelRetentionLabel: {
		argNames: [ "retentionLabel" ],
		},

		updateFormProcessingModelSettings: {
		argNames: [ "retentionLabel", "linkedList" ],
		},

		updateListForm: {
		argNames: [ "parameters" ],
		},

		updateRuleEx: {
		argNames: [ "ruleId", "condition", "title", "status", "action", "triggerType" ],
		},

		validateAppName: {
		argNames: [ "appDisplayName" ],
		},

	},

	"SP.List.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		ensureClientRenderedSitePagesLibrary: {
		},

		ensureEventsList: {
		},

		ensureSiteAssetsLibrary: {
		},

		ensureSitePagesLibrary: {
		},

		getById: {
		argNames: [ "id" ],
		},

		getByTitle: {
		argNames: [ "title" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.ListItem": {
		addThumbnailFieldData: {
		argNames: [ "imageStream", "imageName", "fieldInternalName", "lockId" ],
		},

		archive: {
		},

		breakRoleInheritance: {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		deleteWithParameters: {
		argNames: [ "parameters" ],
		},

		doEntitiesHaveAccessToLabel: {
		argNames: [ "peoplePickerInput" ],
		},

		folderArchiveProgress: {
		},

		folderUnarchiveProgress: {
		},

		getChanges: {
		argNames: [ "query" ],
		},

		getComments: {
		},

		getUserEffectivePermissions: {
		argNames: [ "userName" ],
		},

		getVersionById: {
		argNames: [ "versionId" ],
		},

		getVersions: {
		argNames: [ "getVersionsParams" ],
		},

		getWOPIFrameUrl: {
		argNames: [ "action" ],
		},

		mediaServiceUpdate: {
		argNames: [ "parameters" ],
		},

		mediaServiceUpdateV2: {
		argNames: [ "parameters", "eventFiringEnabled" ],
		},

		overridePolicyTip: {
		argNames: [ "userAction", "justification" ],
		},

		parseAndSetFieldValue: {
		argNames: [ "fieldName", "value" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		recycle: {
		},

		recycleWithParameters: {
		argNames: [ "parameters" ],
		},

		renderListItemDataAsStream: {
		argNames: [ "options" ],
		},

		resetRoleInheritance: {
		},

		setCommentsDisabled: {
		argNames: [ "value" ],
		},

		setComplianceTag: {
		argNames: [ "complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock", "isUnlockedAsDefault" ],
		},

		setComplianceTagWithExplicitMetasUpdate: {
		argNames: [ "complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress" ],
		},

		setComplianceTagWithHold: {
		argNames: [ "complianceTag" ],
		},

		setComplianceTagWithMetaInfo: {
		argNames: [ "complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock", "isRecordUnlockedAsDefault" ],
		},

		setComplianceTagWithNoHold: {
		argNames: [ "complianceTag" ],
		},

		setComplianceTagWithRecord: {
		argNames: [ "complianceTag" ],
		},

		systemUpdate: {
		},

		unarchive: {
		},

		update: {
		argNames: [ "properties" ],
		},

		updateEx: {
		argNames: [ "parameters" ],
		},

		updateOverwriteVersion: {
		},

		validateUpdateFetchListItem: {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "View", "RootFolder" ],
		},

		validateUpdateFetchListItemInFolder: {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "rootFolder" ],
		},

		validateUpdateListItem: {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "sharedLockId" ],
		},

	},

	"SP.ListItem.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getById: {
		argNames: [ "itemId" ],
		},

		getByStringId: {
		argNames: [ "sId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.ListItemVersion": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		recycle: {
		},

	},

	"SP.ListItemVersion.Collection": {
		deleteAll: {
		},

		getById: {
		argNames: [ "versionId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		recycleAll: {
		},

		restoreByID: {
		argNames: [ "versionId" ],
		},

	},

	"SP.ListTemplate": {
		getGlobalSchemaXml: {
		},

	},

	"SP.ListTemplate.Collection": {
		getByName: {
		argNames: [ "name" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.MicroService.MicroServiceManager": {
		addMicroserviceWorkItem: {
		argNames: [ "payLoad", "minutes", "properties" ],
		},

		deleteMicroserviceWorkItem: {
		argNames: [ "workItemId" ],
		},

		deleteMicroserviceWorkItemByContentDbId: {
		argNames: [ "contentDatabaseId", "siteId", "workItemId" ],
		},

		getServiceInternalUrls: {
		argNames: [ "service" ],
		},

		getServiceUrls: {
		argNames: [ "service" ],
		},

	},

	"SP.Microfeed.MicrofeedAttachmentStore": {
		deletePreProcessedAttachment: {
		argNames: [ "attachmentUri" ],
		},

		getImage: {
		argNames: [ "imageUrl", "key", "iv" ],
		},

		preProcessAttachment: {
		argNames: [ "link" ],
		},

		putFile: {
		argNames: [ "originalFileName", "fileData" ],
		},

		putImage: {
		argNames: [ "imageData" ],
		},

	},

	"SP.Microfeed.MicrofeedData": {
		addAttachment: {
		argNames: [ "name", "bytes" ],
		},

		systemUpdate: {
		},

		update: {
		},

	},

	"SP.Microfeed.MicrofeedData.Collection": {
		deleteAll: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Microfeed.MicrofeedManager": {
		addUserToPostPeopleList: {
		argNames: [ "postIdentifier", "UserLoginName" ],
		},

		clearUnreadMentionsCount: {
		},

		deleteById: {
		argNames: [ "postIdentifier" ],
		},

		deleteUserFromPostPeopleList: {
		argNames: [ "postIdentifier", "UserLoginName" ],
		},

		getMyCategoricalFeed: {
		argNames: [ "feedOptions" ],
		},

		getMyConsolidatedFeed: {
		argNames: [ "feedOptions" ],
		},

		getMyPublishedFeed: {
		argNames: [ "feedOptions", "typeOfPubFeed", "ShowPublicView" ],
		},

		getPublishedFeed: {
		argNames: [ "feedOwner", "feedOptions", "typeOfPubFeed" ],
		},

		getThread: {
		argNames: [ "postIdentifier" ],
		},

		getUnreadMentionsCount: {
		},

		like: {
		argNames: [ "postIdentifier" ],
		},

		lockThreadById: {
		argNames: [ "threadIdentifier" ],
		},

		post: {
		argNames: [ "postOptions" ],
		},

		postReply: {
		argNames: [ "postIdentifier", "postReplyOptions" ],
		},

		repopulateLMT: {
		argNames: [ "timeStamp", "secureHash" ],
		},

		unLike: {
		argNames: [ "postIdentifier" ],
		},

		unLockThreadById: {
		argNames: [ "threadIdentifier" ],
		},

		unsubscribeFromEMail: {
		argNames: [ "postIdentifier" ],
		},

	},

	"SP.Microfeed.MicrofeedPostDefinitionManager": {
		deleteMicrofeedPostDefinition: {
		argNames: [ "postDefinition" ],
		},

		getMicrofeedPostDefinition: {
		argNames: [ "definitionName" ],
		},

		getMicrofeedPostDefinitions: {
		},

		newMicrofeedPostDefinition: {
		argNames: [ "definitionName" ],
		},

		updateMicrofeedPostDefinition: {
		argNames: [ "postDefinition" ],
		},

	},

	"SP.Microfeed.MicrofeedStore": {
		addData: {
		argNames: [ "name", "data" ],
		},

		addDataAsStream: {
		argNames: [ "name", "data" ],
		},

		executePendingOperations: {
		},

		getItem: {
		argNames: [ "storeIdentifier" ],
		},

		getSocialProperties: {
		argNames: [ "accountName" ],
		},

		incrementUnreadAtMentionCount: {
		argNames: [ "accountName" ],
		},

		newItem: {
		argNames: [ "storeIdentifier" ],
		},

		query: {
		argNames: [ "storeIdentifier", "query" ],
		},

		setPostLikeStatus: {
		argNames: [ "accountName", "postId", "like" ],
		},

	},

	"SP.MultilingualSettings": {
		query: { argNames: ["oData"], requestType: RequestType.OData },

		setFollowLangPreference: {
		argNames: [ "request" ],
		},

		setNotificationRecipients: {
		argNames: [ "request" ],
		},

	},

	"SP.Navigation": {
		getNodeById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.NavigationNode": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"SP.NavigationNode.Collection": {
		add: {
		argNames: [ "properties" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		getByIndex: {
		argNames: [ "index" ],
		},

		moveAfter: {
		argNames: [ "nodeId", "previousNodeId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.OAuth.Authentication": {
		getRenewalUrl: {
		argNames: [ "redirectUrl" ],
		},

	},

	"SP.OAuth.NativeClient": {
		authenticate: {
		},

	},

	"SP.OAuth.Token": {
		acquire: {
		argNames: [ "resource", "tokenType" ],
		},

	},

	"SP.ObjectSharingInformation": {
		getSharedWithUsers: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.OrganizationNews": {
		sitesReference: {
		},

	},

	"SP.PropertyValues.Collection": {
		add: {
		argNames: [ "key", "value" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		remove: {
		argNames: [ "key" ],
		},

	},

	"SP.Publishing.AnnouncementsController": {
		active: {
		},

		flwPropertyFilteringMapping: {
		argNames: [ "flwPropertyFilteringMapping" ],
		},

	},

	"SP.Publishing.CampaignPublication": {
		amplify: {
		argNames: [ "request" ],
		},

		amplifyCancelSchedule: {
		},

		amplifyHistory: {
		},

		amplifyPublish: {
		},

		amplifySchedule: {
		argNames: [ "publishStartDate" ],
		},

		amplifySendTestEmailMessage: {
		argNames: [ "contentStream" ],
		},

		amplifySendTestTeamsMessage: {
		argNames: [ "audienceId", "channelName", "groupId", "teamName", "transpileContent" ],
		},

		amplifyValidate: {
		},

		approveApprovalRequest: {
		argNames: [ "comment" ],
		},

		boostNews: {
		argNames: [ "SitePageBoost" ],
		},

		canPerformAmplifyCancelSchedule: {
		},

		canPerformAmplifyPublish: {
		},

		canPerformAmplifySchedule: {
		},

		cancelApprovalRequest: {
		},

		cancelSchedulePublication: {
		},

		checkOut: {
		},

		checkoutPage: {
		},

		copy: {
		},

		copyTo: {
		argNames: [ "copyToParams" ],
		},

		copyWithConfiguration: {
		argNames: [ "sitePageFlags", "isNews", "creationMode" ],
		},

		createApprovalRequest: {
		argNames: [ "creationInfo" ],
		},

		createNewsCopy: {
		},

		delete: {
		requestType: RequestType.Delete
		},

		deletePublication: {
		},

		demoteFromNews: {
		},

		discardCoAuth: {
		argNames: [ "lockId" ],
		},

		discardPage: {
		},

		extendSessionCoAuth: {
		argNames: [ "authoringMetadata", "connectivityUpdateReason" ],
		},

		getDependencyMetadata: {
		},

		getHighlightsInfo: {
		},

		getLatestVersionsInDescendingOrder: {
		argNames: [ "numVersions" ],
		},

		getPrePublishValidationStatus: {
		},

		getPublishingStatus: {
		},

		getVersion: {
		argNames: [ "versionId" ],
		},

		loadMailDraft: {
		argNames: [ "requestParam" ],
		},

		move: {
		argNames: [ "pageMoveParams" ],
		},

		promoteToNews: {
		},

		publish: {
		},

		publishAsBot: {
		argNames: [ "tenantId", "channelIds", "content", "title", "headline" ],
		},

		publishCoAuth: {
		argNames: [ "pageStream" ],
		},

		publishPublication: {
		},

		rejectApprovalRequest: {
		argNames: [ "comment" ],
		},

		repairMissingSharePointDestinationWebIds: {
		argNames: [ "repairItems" ],
		},

		resetEndpoint: {
		argNames: [ "requestParam" ],
		},

		restoreByLabel: {
		argNames: [ "versionlabel" ],
		},

		sPSiteValidator: {
		argNames: [ "siteUrl" ],
		},

		saveDraft: {
		argNames: [ "sitePage" ],
		},

		saveMailDraft: {
		argNames: [ "requestParam" ],
		},

		savePage: {
		argNames: [ "pageStream" ],
		},

		savePageAsDraft: {
		argNames: [ "pageStream" ],
		},

		savePageAsTemplate: {
		},

		savePageAsTemplate2: {
		argNames: [ "creationMode" ],
		},

		savePageAsTemplateOnMySite: {
		},

		savePageCoAuth: {
		argNames: [ "pageStream" ],
		},

		saveStreams: {
		argNames: [ "contentStream", "sharedLockId", "scenario" ],
		},

		schedulePublication: {
		argNames: [ "publishStartDate" ],
		},

		schedulePublish: {
		argNames: [ "sitePage" ],
		},

		sendTestEmail: {
		argNames: [ "transpileContent" ],
		},

		sendTestEmailStream: {
		argNames: [ "contentStream" ],
		},

		sendTestTeamsMessage: {
		argNames: [ "audienceId", "transpileContent" ],
		},

		sharePagePreviewByEmail: {
		argNames: [ "message", "recipientEmails" ],
		},

		startCoAuth: {
		argNames: [ "paramsStream" ],
		},

		startExclusiveAuthoring: {
		},

		syncApprovalRequest: {
		},

		tryProcessSourcePageAfterPageMovePublish: {
		},

		tryProcessSourcePageBeforePageMovePublish: {
		},

		update: {
		},

		updateSharePointPublishingStatus: {
		argNames: [ "destinationSiteId", "destinationUrl", "sharePointPublishingStatus", "sharePointPublishingErrorCode" ],
		},

	},

	"SP.Publishing.CommunicationSite": {
		create: {
		argNames: [ "request" ],
		},

		enable: {
		argNames: [ "designPackageId" ],
		},

		status: {
		argNames: [ "url" ],
		},

	},

	"SP.Publishing.EmbedService": {
		embedData: {
		argNames: [ "url", "version" ],
		},

	},

	"SP.Publishing.FeedVideoPage": {
		amplify: {
		argNames: [ "request" ],
		},

		amplifyHistory: {
		},

		boostNews: {
		argNames: [ "SitePageBoost" ],
		},

		checkOut: {
		},

		checkoutPage: {
		},

		copy: {
		},

		copyTo: {
		argNames: [ "copyToParams" ],
		},

		copyWithConfiguration: {
		argNames: [ "sitePageFlags", "isNews", "creationMode" ],
		},

		createNewsCopy: {
		},

		demoteFromNews: {
		},

		discardCoAuth: {
		argNames: [ "lockId" ],
		},

		discardPage: {
		},

		extendSessionCoAuth: {
		argNames: [ "authoringMetadata", "connectivityUpdateReason" ],
		},

		getDependencyMetadata: {
		},

		getHighlightsInfo: {
		},

		getLatestVersionsInDescendingOrder: {
		argNames: [ "numVersions" ],
		},

		getVersion: {
		argNames: [ "versionId" ],
		},

		move: {
		argNames: [ "pageMoveParams" ],
		},

		promoteToNews: {
		},

		publish: {
		},

		publishCoAuth: {
		argNames: [ "pageStream" ],
		},

		restoreByLabel: {
		argNames: [ "versionlabel" ],
		},

		saveDraft: {
		argNames: [ "sitePage" ],
		},

		savePage: {
		argNames: [ "pageStream" ],
		},

		savePageAsDraft: {
		argNames: [ "pageStream" ],
		},

		savePageAsTemplate: {
		},

		savePageAsTemplate2: {
		argNames: [ "creationMode" ],
		},

		savePageAsTemplateOnMySite: {
		},

		savePageCoAuth: {
		argNames: [ "pageStream" ],
		},

		saveStreams: {
		argNames: [ "contentStream", "sharedLockId", "scenario" ],
		},

		schedulePublish: {
		argNames: [ "sitePage" ],
		},

		sendTestEmail: {
		argNames: [ "transpileContent", "subject", "sensitivityLabelId" ],
		},

		sendTestEmailStream: {
		argNames: [ "contentStream" ],
		},

		sendTestTeamsMessage: {
		argNames: [ "audienceId", "transpileContent" ],
		},

		sharePagePreviewByEmail: {
		argNames: [ "message", "recipientEmails" ],
		},

		startCoAuth: {
		argNames: [ "paramsStream" ],
		},

		startExclusiveAuthoring: {
		},

		tryProcessSourcePageAfterPageMovePublish: {
		},

		tryProcessSourcePageBeforePageMovePublish: {
		},

		update: {
		},

	},

	"SP.Publishing.FeedVideoPage.Collection": {
		isContentTypeAvailable: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.Navigation.PortalNavigationCacheWrapper": {
		disable: {
		},

		enable: {
		},

		refresh: {
		},

	},

	"SP.Publishing.Navigation.StructuralNavigationCacheWrapper": {
		setSiteState: {
		argNames: [ "state" ],
		},

		setWebState: {
		argNames: [ "state" ],
		},

		siteState: {
		},

		webState: {
		},

	},

	"SP.Publishing.PageDiagnosticsController": {
		byPage: {
		argNames: [ "pageRelativeFilePath" ],
		},

		save: {
		argNames: [ "pageDiagnosticsResult" ],
		},

	},

	"SP.Publishing.PointPublishingPost": {
		addImageFromUrl: {
		argNames: [ "fromImageUrl" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.PointPublishingPost.Collection": {
		getById: {
		argNames: [ "id", "publishedOnly" ],
		},

		getByName: {
		argNames: [ "name", "publishedOnly" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.PointPublishingPostServiceManager": {
		addBannerImageFromUrl: {
		argNames: [ "fromImageUrl" ],
		},

		deleteMagazine: {
		},

		getDocProps: {
		argNames: [ "docUrls" ],
		},

		getPostsQuery: {
		argNames: [ "top", "itemIdBoundary", "directionAscending", "publishedOnly", "draftsOnly" ],
		},

		getTopAuthors: {
		argNames: [ "count" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		queryGroupNames: {
		argNames: [ "query" ],
		},

		setMagazineProperties: {
		argNames: [ "title", "description", "bannerImageUrl", "bannerColor", "bannerPattern" ],
		},

	},

	"SP.Publishing.PointPublishingSiteManager": {
		create: {
		argNames: [ "siteInfo" ],
		},

		getSiteStatus: {
		argNames: [ "siteInfo" ],
		},

	},

	"SP.Publishing.PointPublishingTenantManager": {
		isBlogEnabled: {
		},

	},

	"SP.Publishing.PointPublishingUser": {
		deleteUserFromContainerGroup: {
		},

	},

	"SP.Publishing.PointPublishingUser.Collection": {
		addOrUpdateUser: {
		argNames: [ "loginName", "isOwner" ],
		},

		getById: {
		argNames: [ "userId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.PortalLaunch.PortalLaunchWavesManager": {
		get: {
		argNames: [ "siteUrl" ],
		},

		getAll: {
		},

		remove: {
		argNames: [ "siteUrl" ],
		},

		saveWaveSetup: {
		argNames: [ "portalLaunchSetup" ],
		},

	},

	"SP.Publishing.RepostPage": {
		amplify: {
		argNames: [ "request" ],
		},

		amplifyHistory: {
		},

		boostNews: {
		argNames: [ "SitePageBoost" ],
		},

		checkOut: {
		},

		checkoutPage: {
		},

		copy: {
		},

		copyTo: {
		argNames: [ "copyToParams" ],
		},

		copyWithConfiguration: {
		argNames: [ "sitePageFlags", "isNews", "creationMode" ],
		},

		createNewsCopy: {
		},

		demoteFromNews: {
		},

		discardCoAuth: {
		argNames: [ "lockId" ],
		},

		discardPage: {
		},

		extendSessionCoAuth: {
		argNames: [ "authoringMetadata", "connectivityUpdateReason" ],
		},

		getDependencyMetadata: {
		},

		getHighlightsInfo: {
		},

		getLatestVersionsInDescendingOrder: {
		argNames: [ "numVersions" ],
		},

		getVersion: {
		argNames: [ "versionId" ],
		},

		move: {
		argNames: [ "pageMoveParams" ],
		},

		promoteToNews: {
		},

		publish: {
		},

		publishCoAuth: {
		argNames: [ "pageStream" ],
		},

		restoreByLabel: {
		argNames: [ "versionlabel" ],
		},

		saveDraft: {
		argNames: [ "sitePage" ],
		},

		savePage: {
		argNames: [ "pageStream" ],
		},

		savePageAsDraft: {
		argNames: [ "pageStream" ],
		},

		savePageAsTemplate: {
		},

		savePageAsTemplate2: {
		argNames: [ "creationMode" ],
		},

		savePageAsTemplateOnMySite: {
		},

		savePageCoAuth: {
		argNames: [ "pageStream" ],
		},

		saveStreams: {
		argNames: [ "contentStream", "sharedLockId", "scenario" ],
		},

		schedulePublish: {
		argNames: [ "sitePage" ],
		},

		sendTestEmail: {
		argNames: [ "transpileContent", "subject", "sensitivityLabelId" ],
		},

		sendTestEmailStream: {
		argNames: [ "contentStream" ],
		},

		sendTestTeamsMessage: {
		argNames: [ "audienceId", "transpileContent" ],
		},

		sharePagePreviewByEmail: {
		argNames: [ "message", "recipientEmails" ],
		},

		startCoAuth: {
		argNames: [ "paramsStream" ],
		},

		startExclusiveAuthoring: {
		},

		tryProcessSourcePageAfterPageMovePublish: {
		},

		tryProcessSourcePageBeforePageMovePublish: {
		},

		update: {
		},

	},

	"SP.Publishing.RepostPage.Collection": {
		isContentTypeAvailable: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.RichSharing": {
		sharePageByEmail: {
		argNames: [ "url", "message", "recipientEmails", "pageContent", "subject", "ccEmails", "bccEmails", "pageItemId", "scenarioTag", "emailSize" ],
		},

		sharePageByEmailStream: {
		argNames: [ "contentStream" ],
		},

		shareSiteByEmail: {
		argNames: [ "CustomDescription", "CustomTitle", "Message", "Url", "recipientEmails" ],
		},

	},

	"SP.Publishing.Search": {
		newest: {
		argNames: [ "startItemIndex", "itemLimit" ],
		},

		popular: {
		argNames: [ "startItemIndex", "itemLimit" ],
		},

		query: {
		argNames: [ "queryText", "startItemIndex", "itemLimit", "culture" ],
		},

		queryChannels: {
		argNames: [ "queryText", "startItemIndex", "itemLimit", "culture" ],
		},

		related: {
		argNames: [ "videoId", "startItemIndex", "itemLimit" ],
		},

	},

	"SP.Publishing.SharePointHomeServiceManager": {
		getAcronymsAndColors: {
		argNames: [ "labels" ],
		},

	},

	"SP.Publishing.SitePage": {
		amplify: {
		argNames: [ "request" ],
		},

		amplifyHistory: {
		},

		boostNews: {
		argNames: [ "SitePageBoost" ],
		},

		checkOut: {
		},

		checkoutPage: {
		},

		copy: {
		},

		copyTo: {
		argNames: [ "copyToParams" ],
		},

		copyWithConfiguration: {
		argNames: [ "sitePageFlags", "isNews", "creationMode" ],
		},

		createNewsCopy: {
		},

		demoteFromNews: {
		},

		discardCoAuth: {
		argNames: [ "lockId" ],
		},

		discardPage: {
		},

		extendSessionCoAuth: {
		argNames: [ "authoringMetadata", "connectivityUpdateReason" ],
		},

		getDependencyMetadata: {
		},

		getHighlightsInfo: {
		},

		getLatestVersionsInDescendingOrder: {
		argNames: [ "numVersions" ],
		},

		getVersion: {
		argNames: [ "versionId" ],
		},

		move: {
		argNames: [ "pageMoveParams" ],
		},

		promoteToNews: {
		},

		publish: {
		},

		publishCoAuth: {
		argNames: [ "pageStream" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		restoreByLabel: {
		argNames: [ "versionlabel" ],
		},

		saveDraft: {
		argNames: [ "sitePage" ],
		},

		savePage: {
		argNames: [ "pageStream" ],
		},

		savePageAsDraft: {
		argNames: [ "pageStream" ],
		},

		savePageAsTemplate: {
		},

		savePageAsTemplate2: {
		argNames: [ "creationMode" ],
		},

		savePageAsTemplateOnMySite: {
		},

		savePageCoAuth: {
		argNames: [ "pageStream" ],
		},

		saveStreams: {
		argNames: [ "contentStream", "sharedLockId", "scenario" ],
		},

		schedulePublish: {
		argNames: [ "sitePage" ],
		},

		sendTestEmail: {
		argNames: [ "transpileContent", "subject", "sensitivityLabelId" ],
		},

		sendTestEmailStream: {
		argNames: [ "contentStream" ],
		},

		sendTestTeamsMessage: {
		argNames: [ "audienceId", "transpileContent" ],
		},

		sharePagePreviewByEmail: {
		argNames: [ "message", "recipientEmails" ],
		},

		startCoAuth: {
		argNames: [ "paramsStream" ],
		},

		startExclusiveAuthoring: {
		},

		tryProcessSourcePageAfterPageMovePublish: {
		},

		tryProcessSourcePageBeforePageMovePublish: {
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.Publishing.SitePage.Collection": {
		copyToStatus: {
		argNames: [ "workItemId" ],
		},

		createAppPage: {
		argNames: [ "webPartDataAsJson" ],
		},

		ensureTitleResource: {
		},

		feed: {
		argNames: [ "promotedState", "published", "metadataFilter", "languageOverride" ],
		},

		feedTargeted: {
		argNames: [ "promotedState", "published", "metadataFilter", "languageOverride" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		getByUniqueId: {
		argNames: [ "uniqueId" ],
		},

		getByUrl: {
		argNames: [ "url" ],
		},

		getPageColumnState: {
		argNames: [ "url" ],
		},

		getTranslations: {
		argNames: [ "sourceItemId" ],
		},

		isSitePage: {
		argNames: [ "url" ],
		},

		pageMoveStatus: {
		argNames: [ "workItemId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		setMultilingual: {
		argNames: [ "enabled" ],
		},

		setScheduling: {
		argNames: [ "enabled" ],
		},

		templates: {
		},

		updateAppPage: {
		argNames: [ "pageId", "webPartDataAsJson", "title", "includeInNavigation" ],
		},

		updateFullPageApp: {
		argNames: [ "serverRelativeUrl", "webPartDataAsJson" ],
		},

	},

	"SP.Publishing.SitePage3D": {
		amplify: {
		argNames: [ "request" ],
		},

		amplifyHistory: {
		},

		boostNews: {
		argNames: [ "SitePageBoost" ],
		},

		checkOut: {
		},

		checkoutPage: {
		},

		copy: {
		},

		copyTo: {
		argNames: [ "copyToParams" ],
		},

		copyWithConfiguration: {
		argNames: [ "sitePageFlags", "isNews", "creationMode" ],
		},

		createNewsCopy: {
		},

		demoteFromNews: {
		},

		discardCoAuth: {
		argNames: [ "lockId" ],
		},

		discardPage: {
		},

		extendSessionCoAuth: {
		argNames: [ "authoringMetadata", "connectivityUpdateReason" ],
		},

		getDependencyMetadata: {
		},

		getHighlightsInfo: {
		},

		getLatestVersionsInDescendingOrder: {
		argNames: [ "numVersions" ],
		},

		getVersion: {
		argNames: [ "versionId" ],
		},

		move: {
		argNames: [ "pageMoveParams" ],
		},

		promoteToNews: {
		},

		publish: {
		},

		publishCoAuth: {
		argNames: [ "pageStream" ],
		},

		restoreByLabel: {
		argNames: [ "versionlabel" ],
		},

		saveDraft: {
		argNames: [ "sitePage" ],
		},

		savePage: {
		argNames: [ "pageStream" ],
		},

		savePageAsDraft: {
		argNames: [ "pageStream" ],
		},

		savePageAsTemplate: {
		},

		savePageAsTemplate2: {
		argNames: [ "creationMode" ],
		},

		savePageAsTemplateOnMySite: {
		},

		savePageCoAuth: {
		argNames: [ "pageStream" ],
		},

		saveStreams: {
		argNames: [ "contentStream", "sharedLockId", "scenario" ],
		},

		schedulePublish: {
		argNames: [ "sitePage" ],
		},

		sendTestEmail: {
		argNames: [ "transpileContent", "subject", "sensitivityLabelId" ],
		},

		sendTestEmailStream: {
		argNames: [ "contentStream" ],
		},

		sendTestTeamsMessage: {
		argNames: [ "audienceId", "transpileContent" ],
		},

		sharePagePreviewByEmail: {
		argNames: [ "message", "recipientEmails" ],
		},

		startCoAuth: {
		argNames: [ "paramsStream" ],
		},

		startExclusiveAuthoring: {
		},

		tryProcessSourcePageAfterPageMovePublish: {
		},

		tryProcessSourcePageBeforePageMovePublish: {
		},

		update: {
		},

	},

	"SP.Publishing.SitePage3D.Collection": {
		activate: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.SitePageMetadata.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.SitePageService": {
		addImage: {
		argNames: [ "pageName", "imageFileName", "pageId", "gettyId", "imageStream" ],
		},

		addImageFromExternalUrl: {
		argNames: [ "pageName", "imageFileName", "externalUrl", "subFolderName", "pageId" ],
		},

		canCreatePage: {
		},

		canCreatePromotedPage: {
		},

		enableAmplifyFromAnywhere: {
		},

		enableAnnouncements: {
		},

		enableCategories: {
		},

		enableLightweightCampaign: {
		},

		getOrCreateAssetFolder: {
		argNames: [ "pageName", "createFolderIfNeeded", "subFolderName", "pageId" ],
		},

		pagesInLib: {
		argNames: [ "id" ],
		},

		pagesInLibByName: {
		argNames: [ "name" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		reportGettyImages: {
		argNames: [ "images", "isTimerJob" ],
		},

		update: {
		},

	},

	"SP.Publishing.SpotlightChannel": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"SP.Publishing.SpotlightChannel.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.SpotlightVideo": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"SP.Publishing.SpotlightVideo.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.SubtitleFile.Collection": {
		add: {
		argNames: [ "language", "extension", "stream" ],
		},

		getSubtitleFile: {
		argNames: [ "name" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		remove: {
		argNames: [ "name" ],
		},

	},

	"SP.Publishing.TopicSitePage": {
		amplify: {
		argNames: [ "request" ],
		},

		amplifyHistory: {
		},

		boostNews: {
		argNames: [ "SitePageBoost" ],
		},

		checkOut: {
		},

		checkoutPage: {
		},

		copy: {
		},

		copyTo: {
		argNames: [ "copyToParams" ],
		},

		copyWithConfiguration: {
		argNames: [ "sitePageFlags", "isNews", "creationMode" ],
		},

		createNewsCopy: {
		},

		demoteFromNews: {
		},

		discardCoAuth: {
		argNames: [ "lockId" ],
		},

		discardPage: {
		},

		extendSessionCoAuth: {
		argNames: [ "authoringMetadata", "connectivityUpdateReason" ],
		},

		getDependencyMetadata: {
		},

		getHighlightsInfo: {
		},

		getLatestVersionsInDescendingOrder: {
		argNames: [ "numVersions" ],
		},

		getVersion: {
		argNames: [ "versionId" ],
		},

		move: {
		argNames: [ "pageMoveParams" ],
		},

		promoteToNews: {
		},

		publish: {
		},

		publishCoAuth: {
		argNames: [ "pageStream" ],
		},

		restoreByLabel: {
		argNames: [ "versionlabel" ],
		},

		saveDraft: {
		argNames: [ "sitePage" ],
		},

		savePage: {
		argNames: [ "pageStream" ],
		},

		savePageAsDraft: {
		argNames: [ "pageStream" ],
		},

		savePageAsTemplate: {
		},

		savePageAsTemplate2: {
		argNames: [ "creationMode" ],
		},

		savePageAsTemplateOnMySite: {
		},

		savePageCoAuth: {
		argNames: [ "pageStream" ],
		},

		saveStreams: {
		argNames: [ "contentStream", "sharedLockId", "scenario" ],
		},

		schedulePublish: {
		argNames: [ "sitePage" ],
		},

		sendTestEmail: {
		argNames: [ "transpileContent", "subject", "sensitivityLabelId" ],
		},

		sendTestEmailStream: {
		argNames: [ "contentStream" ],
		},

		sendTestTeamsMessage: {
		argNames: [ "audienceId", "transpileContent" ],
		},

		sharePagePreviewByEmail: {
		argNames: [ "message", "recipientEmails" ],
		},

		startCoAuth: {
		argNames: [ "paramsStream" ],
		},

		startExclusiveAuthoring: {
		},

		tryProcessSourcePageAfterPageMovePublish: {
		},

		tryProcessSourcePageBeforePageMovePublish: {
		},

		update: {
		},

	},

	"SP.Publishing.TopicSitePage.Collection": {
		getByEntityId: {
		argNames: [ "entityId" ],
		},

		getByEntityIdAndCulture: {
		argNames: [ "id", "culture" ],
		},

		getPagesByEntityId: {
		argNames: [ "entityId" ],
		},

		isContentTypeAvailable: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.VideoChannel": {
		getAllVideos: {
		argNames: [ "skip", "limit" ],
		},

		getChannelPageUrl: {
		argNames: [ "viewMode" ],
		},

		getMyVideos: {
		argNames: [ "skip", "limit" ],
		},

		getPermissionGroup: {
		argNames: [ "permission" ],
		},

		getVideoCount: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"SP.Publishing.VideoChannel.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.VideoItem": {
		customThumbnail: {
		},

		delete: {
		requestType: RequestType.Delete
		},

		getFile: {
		},

		getPlaybackMetadata: {
		argNames: [ "sdnConfiguration" ],
		},

		getPlaybackUrl: {
		argNames: [ "videoFormat" ],
		},

		getStreamingKeyAccessToken: {
		},

		getVideoDetailedViewCount: {
		},

		getVideoEmbedCode: {
		argNames: [ "width", "height", "autoplay", "showInfo", "makeResponsive" ],
		},

		getVideoViewProgressCount: {
		},

		incrementVideoViewProgressCount: {
		argNames: [ "percentageViewed" ],
		},

		incrementViewCount: {
		argNames: [ "viewOrigin" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		setPeopleInMedia: {
		argNames: [ "loginNames" ],
		},

		setVideoOwner: {
		argNames: [ "id" ],
		},

		subtitles: {
		},

		thumbnailStream: {
		argNames: [ "preferredWidth" ],
		},

		thumbnails: {
		argNames: [ "preferredWidth" ],
		},

		update: {
		},

		uploadCustomThumbnail: {
		argNames: [ "fileExtension", "customVideoThumbnail" ],
		},

	},

	"SP.Publishing.VideoItem.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.VideoPermissionGroup": {
		hasCurrentUser: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.VideoServiceManager": {
		getChannels: {
		argNames: [ "startIndex", "limit" ],
		},

		getPermissionGroup: {
		argNames: [ "permission" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Publishing.VideoThumbnail.Collection": {
		getByIndex: {
		argNames: [ "choice" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.PushNotificationSubscriber": {
		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"SP.PushNotificationSubscriber.Collection": {
		getByStoreId: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.RecycleBinItem": {
		delete: {
		requestType: RequestType.Delete
		},

		moveToSecondStage: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		restore: {
		},

	},

	"SP.RecycleBinItem.Collection": {
		deleteAll: {
		},

		deleteAllSecondStageItems: {
		},

		deleteByIds: {
		argNames: [ "ids" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		moveAllToSecondStage: {
		},

		moveToSecondStageByIds: {
		argNames: [ "ids" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		restoreAll: {
		},

		restoreByIds: {
		argNames: [ "ids", "bRenameExistingItems" ],
		},

	},

	"SP.RegionalSettings": {
		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		},

	},

	"SP.RelatedField.Collection": {
		getByFieldId: {
		argNames: [ "fieldId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.RemoteWeb": {
		getFileByServerRelativePath: {
		argNames: [ "serverRelatvieFilePath" ],
		},

		getFileByServerRelativeUrl: {
		argNames: [ "serverRelativeFileUrl" ],
		},

		getFileByUrl: {
		argNames: [ "fileUrl" ],
		},

		getFolderByServerRelativeUrl: {
		argNames: [ "serverRelativeUrl" ],
		},

		getGroupById: {
		argNames: [ "groupId" ],
		},

		getListById: {
		argNames: [ "listGuid" ],
		},

		getListByServerRelativeUrl: {
		argNames: [ "serverRelativeUrl" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.RequestContext": {
		getRemoteContext: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.RoleAssignment": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.RoleAssignment.Collection": {
		addRoleAssignment: {
		argNames: [ "principalId", "roleDefId" ],
		},

		getByPrincipalId: {
		argNames: [ "principalId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		removeRoleAssignment: {
		argNames: [ "principalId", "roleDefId" ],
		},

	},

	"SP.RoleDefinition": {
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.RoleDefinition.Collection": {
		add: {
		argNames: [ "properties" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		getByName: {
		argNames: [ "name" ],
		},

		getByType: {
		argNames: [ "roleType" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		recreateMissingDefaultRoleDefinitions: {
		},

		removeAll: {
		},

	},

	"SP.SPAppLicenseManager": {
		checkLicense: {
		argNames: [ "productId" ],
		},

	},

	"SP.SPHSite": {
		addHomeSite: {
		argNames: [ "siteUrl", "order", "audiences", "vivaConnectionsDefaultStart", "isInDraftMode" ],
		},

		details: {
		argNames: [ "includeVivaSites" ],
		},

		setSPHSite: {
		argNames: [ "siteUrl", "vivaConnectionsDefaultStart", "isInDraftMode" ],
		},

	},

	"SP.ScriptSafeDomain": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"SP.ScriptSafeDomain.Collection": {
		create: {
		argNames: [ "parameters" ],
		},

		getByDomainName: {
		argNames: [ "domainName" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.SecurableObject": {
		breakRoleInheritance: {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		resetRoleInheritance: {
		},

	},

	"SP.SensitivityLabelCollection": {
		getSensitivityLabelsAsStream: {
		argNames: [ "expand", "filter" ],
		},

	},

	"SP.Site": {
		cancelDeleteFileVersions: {
		},

		cancelSetVersionPolicyForDocLibs: {
		},

		createCopyJob: {
		argNames: [ "exportObjectUris", "destinationUri", "options" ],
		},

		createCopyJobs: {
		argNames: [ "exportObjectUris", "destinationUri", "options" ],
		},

		createMigrationIngestionJob: {
		argNames: [ "gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri", "ingestionTaskKey" ],
		},

		createMigrationJob: {
		argNames: [ "gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri" ],
		},

		createMigrationJobEncrypted: {
		argNames: [ "gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri", "options" ],
		},

		createPreviewSPSite: {
		argNames: [ "upgrade", "sendemail" ],
		},

		createSPAsyncReadJob: {
		argNames: [ "url", "readOptions", "encryptionOption", "azureContainerManifestUri", "azureQueueReportUri" ],
		},

		createSPAsyncReadJobWithMultiUrl: {
		argNames: [ "urls", "readOptions", "encryptionOption", "azureContainerManifestUri", "azureQueueReportUri" ],
		},

		deleteMigrationJob: {
		argNames: [ "id" ],
		},

		enqueueApplySensitivityLabelWork: {
		argNames: [ "workItemInformation" ],
		},

		extendUpgradeReminderDate: {
		},

		getBlockDownloadPolicyForFilesData: {
		},

		getBringYourOwnKeyRecoveryKeyMode: {
		},

		getBringYourOwnKeySiteStatus: {
		},

		getBringYourOwnKeyTenantStatus: {
		},

		getCatalog: {
		argNames: [ "typeCatalog" ],
		},

		getChanges: {
		argNames: [ "query" ],
		},

		getCopyJobProgress: {
		argNames: [ "copyJobInfo" ],
		},

		getHubSiteJoinApprovalCorrelationId: {
		},

		getMigrationJobProgress: {
		argNames: [ "jobId", "nextToken" ],
		},

		getMigrationJobStatus: {
		argNames: [ "id" ],
		},

		getMigrationStatus: {
		},

		getProgressForDeleteFileVersions: {
		},

		getProgressForExpireFileVersionsBySchedule: {
		argNames: [ "scheduleFilePath" ],
		},

		getProgressForFileVersionExpirationReport: {
		argNames: [ "reportFileUrl" ],
		},

		getProgressForSetVersionPolicyForDocLibs: {
		},

		getRecycleBinItems: {
		argNames: [ "pagingInfo", "rowLimit", "isAscending", "orderBy", "itemState" ],
		},

		getWebPath: {
		argNames: [ "siteId", "webId" ],
		},

		getWebTemplates: {
		argNames: [ "LCID", "overrideCompatLevel" ],
		},

		invalidate: {
		},

		joinHubSite: {
		argNames: [ "hubSiteId", "approvalToken", "approvalCorrelationId" ],
		},

		multiGeoCopyJob: {
		argNames: [ "jobId", "userId", "binaryPayload" ],
		},

		needsUpgradeByType: {
		argNames: [ "versionUpgrade", "recursive" ],
		},

		needsUpgradeByTypeFromSpoShell: {
		argNames: [ "versionUpgrade", "recursive" ],
		},

		onHubSiteJoinRequestApproved: {
		argNames: [ "joiningSiteId" ],
		},

		onHubSiteJoinRequestCanceled: {
		argNames: [ "approvalCorrelationId" ],
		},

		onHubSiteJoinRequestStarted: {
		argNames: [ "approvalCorrelationId" ],
		},

		onboardTenantForBringYourOwnKey: {
		argNames: [ "keyInfo" ],
		},

		openWeb: {
		argNames: [ "strUrl" ],
		},

		openWebById: {
		argNames: [ "gWebId" ],
		},

		openWebUsingPath: {
		argNames: [ "path" ],
		},

		processStorageMetricsChanges: {
		},

		provisionMigrationContainers: {
		},

		provisionMigrationQueue: {
		},

		provisionTemporaryAzureContainer: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		recoverTenantForBringYourOwnKey: {
		argNames: [ "keyInfo" ],
		},

		registerHubSite: {
		argNames: [ "creationInformation" ],
		},

		rollTenantBringYourOwnKey: {
		argNames: [ "keyType", "keyVaultInfo" ],
		},

		runHealthCheck: {
		argNames: [ "ruleId", "bRepair", "bRunAlways" ],
		},

		runUpgradeSiteSession: {
		argNames: [ "versionUpgrade", "queueOnly", "sendEmail" ],
		},

		setBlockDownloadPolicyForFiles: {
		argNames: [ "blockDownloadPolicyFileTypeIds" ],
		},

		setIsContributorOwnerEnabledPropertyForDefaultDocLib: {
		argNames: [ "propertyValue", "forceDocLibActivation", "deleteIfDocLibAlreadyExists" ],
		},

		startDeleteFileVersions: {
		argNames: [ "deleteOlderThanDays" ],
		},

		startDeleteFileVersionsByMode: {
		argNames: [ "batchDeleteParameters" ],
		},

		startExpireFileVersionsBySchedule: {
		argNames: [ "scheduleFilePath" ],
		},

		startFileVersionExpirationReport: {
		argNames: [ "reportFileUrl" ],
		},

		startSetVersionPolicyForDocLibs: {
		argNames: [ "enableAutoTrim", "majorVersionLimit", "majorWithMinorVersionsLimit", "expireAfterDays" ],
		},

		unregisterHubSite: {
		},

		update: {
		argNames: [ "properties" ],
		},

		updateClientObjectModelUseRemoteAPIsPermissionSetting: {
		argNames: [ "requireUseRemoteAPIs" ],
		},

		updateInactiveSiteProperties: {
		argNames: [ "operation", "executionId" ],
		},

		validateHubSiteJoinApprovalToken: {
		argNames: [ "joiningSiteId", "approvalToken" ],
		},

	},

	"SP.SiteVersionPolicyManager": {
		inheritTenantSettings: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		setAutoExpiration: {
		},

		setExpireAfter: {
		argNames: [ "majorVersionLimit", "expireAfterDays" ],
		},

		setNoExpiration: {
		argNames: [ "majorVersionLimit" ],
		},

	},

	"SP.Social.SocialFeedManager": {
		createFileAttachment: {
		argNames: [ "name", "description", "fileData" ],
		},

		createImageAttachment: {
		argNames: [ "name", "description", "imageData" ],
		},

		createPost: {
		argNames: [ "targetId", "creationData" ],
		},

		deletePost: {
		argNames: [ "postId" ],
		},

		getAllLikers: {
		argNames: [ "postId" ],
		},

		getFeed: {
		argNames: [ "type", "options" ],
		},

		getFeedFor: {
		argNames: [ "actorId", "options" ],
		},

		getFullThread: {
		argNames: [ "threadId" ],
		},

		getMentions: {
		argNames: [ "clearUnreadMentions", "options" ],
		},

		getPreview: {
		argNames: [ "itemUrl" ],
		},

		getPreviewImage: {
		argNames: [ "url", "key", "iv" ],
		},

		getUnreadMentionCount: {
		},

		likePost: {
		argNames: [ "postId" ],
		},

		lockThread: {
		argNames: [ "threadId" ],
		},

		suppressThreadNotifications: {
		argNames: [ "threadId" ],
		},

		unlikePost: {
		argNames: [ "postId" ],
		},

		unlockThread: {
		argNames: [ "threadId" ],
		},

	},

	"SP.Social.SocialFollowingManager": {
		follow: {
		argNames: [ "actor" ],
		},

		getFollowed: {
		argNames: [ "types" ],
		},

		getFollowedCount: {
		argNames: [ "types" ],
		},

		getFollowers: {
		},

		getSuggestions: {
		},

		isFollowed: {
		argNames: [ "actor" ],
		},

		mergeFollowedSites: {
		argNames: [ "followedSites" ],
		},

		stopFollowing: {
		argNames: [ "actor" ],
		},

	},

	"SP.Social.SocialRestActor": {
		feed: {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		likes: {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		mentionFeed: {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		news: {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		organizationFeed: {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		timelineFeed: {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		unreadMentionCount: {
		},

	},

	"SP.Social.SocialRestFeed": {
		clearUnReadMentionCount: {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		post: {
		argNames: [ "restCreationData" ],
		},

	},

	"SP.Social.SocialRestFeedManager": {
		actor: {
		argNames: [ "item" ],
		},

		my: {
		},

		post: {
		argNames: [ "ID" ],
		},

	},

	"SP.Social.SocialRestFollowingManager": {
		follow: {
		argNames: [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
		},

		followed: {
		argNames: [ "types", "count" ],
		},

		followedCount: {
		argNames: [ "types" ],
		},

		followers: {
		},

		isFollowed: {
		argNames: [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
		},

		mergeFollowedSites: {
		argNames: [ "followedSites" ],
		},

		my: {
		},

		stopFollowing: {
		argNames: [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
		},

		suggestions: {
		},

	},

	"SP.Social.SocialRestThread": {
		delete: {
		argNames: [ "ID" ],
		requestType: RequestType.Delete
		},

		like: {
		argNames: [ "ID" ],
		},

		likers: {
		argNames: [ "ID" ],
		},

		lock: {
		argNames: [ "ID" ],
		},

		reply: {
		argNames: [ "restCreationData" ],
		},

		unLike: {
		argNames: [ "ID" ],
		},

		unLock: {
		argNames: [ "ID" ],
		},

	},

	"SP.Taxonomy.TaxonomyField": {
		delete: {
		requestType: RequestType.Delete
		},

		disableIndex: {
		},

		enableIndex: {
		},

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.TenantSettings": {
		clearCorporateCatalog: {
		},

		getDataAccessGovernanceReportConfig: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		setCorporateCatalog: {
		argNames: [ "url" ],
		},

	},

	"SP.ThemeInfo": {
		getThemeFontByName: {
		argNames: [ "name", "lcid" ],
		},

		getThemeShadeByName: {
		argNames: [ "name" ],
		},

	},

	"SP.TimeZone": {
		localTimeToUTC: {
		argNames: [ "date" ],
		},

		setId: {
		argNames: [ "id" ],
		},

		uTCToLocalTime: {
		argNames: [ "date" ],
		},

	},

	"SP.TimeZone.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Translation.SyncTranslator": {
		translate: {
		argNames: [ "inputFile", "outputFile" ],
		},

		translateStream: {
		argNames: [ "inputFile", "fileExtension" ],
		},

	},

	"SP.Translation.TranslationJob": {
		translateFile: {
		argNames: [ "inputFile", "outputFile" ],
		},

		translateFolder: {
		argNames: [ "inputFolder", "outputFolder", "recursion" ],
		},

		translateLibrary: {
		argNames: [ "inputLibrary", "outputLibrary" ],
		},

	},

	"SP.Translation.TranslationJobStatus": {
		getAllItems: {
		},

	},

	"SP.TranslationStatusCollection": {
		create: {
		argNames: [ "request" ],
		},

		set: {
		argNames: [ "request" ],
		},

		updateTranslationLanguages: {
		},

	},

	"SP.User": {
		expire: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.User.Collection": {
		add: {
		argNames: [ "properties" ],
		},

		addUserById: {
		argNames: [ "id" ],
		},

		getByEmail: {
		argNames: [ "emailAddress" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		getByLoginName: {
		argNames: [ "loginName" ],
		},

		getByObjectId: {
		argNames: [ "objectId" ],
		},

		getByPuid: {
		argNames: [ "puid" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		removeById: {
		argNames: [ "id" ],
		},

		removeByLoginName: {
		argNames: [ "loginName" ],
		},

	},

	"SP.UserCustomAction": {
		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.UserCustomAction.Collection": {
		add: {
		argNames: [ "properties" ],
		},

		clear: {
		},

		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.UserExperienceState": {
		setFlag: {
		argNames: [ "flag", "reset" ],
		},

	},

	"SP.UserProfiles.FollowedContent": {
		findAndUpdateFollowedGroup: {
		argNames: [ "groupId" ],
		},

		findAndUpdateFollowedItem: {
		argNames: [ "url" ],
		},

		followItem: {
		argNames: [ "item" ],
		},

		getFollowedStatus: {
		argNames: [ "url" ],
		},

		getGroups: {
		argNames: [ "rowLimit" ],
		},

		getItem: {
		argNames: [ "url" ],
		},

		getItems: {
		argNames: [ "options", "subtype" ],
		},

		hasGroupMembershipChangedAndSyncChanges: {
		},

		isFollowed: {
		argNames: [ "url" ],
		},

		refreshFollowedItem: {
		argNames: [ "item" ],
		},

		setItemPinState: {
		argNames: [ "uri", "groupId", "pinState" ],
		},

		stopFollowing: {
		argNames: [ "url" ],
		},

		updateFollowedGroupForUser: {
		argNames: [ "contextUri", "groupId", "loginName" ],
		},

	},

	"SP.UserProfiles.PeopleManager": {
		amIFollowedBy: {
		argNames: [ "accountName" ],
		},

		amIFollowing: {
		argNames: [ "accountName" ],
		},

		follow: {
		argNames: [ "accountName" ],
		},

		followTag: {
		argNames: [ "value" ],
		},

		getDefaultDocumentLibrary: {
		argNames: [ "accountName", "createSiteIfNotExists", "siteCreationPriority" ],
		},

		getFollowedTags: {
		argNames: [ "cTagsToFetch" ],
		},

		getFollowersFor: {
		argNames: [ "accountName" ],
		},

		getMyFollowers: {
		},

		getMyProperties: {
		},

		getMySuggestions: {
		},

		getPeopleFollowedBy: {
		argNames: [ "accountName" ],
		},

		getPeopleFollowedByMe: {
		},

		getPropertiesFor: {
		argNames: [ "accountName" ],
		},

		getSPUserInformation: {
		argNames: [ "accountName", "siteId" ],
		},

		getUserOneDriveQuotaMax: {
		argNames: [ "accountName" ],
		},

		getUserProfileProperties: {
		argNames: [ "accountName" ],
		},

		getUserProfilePropertyFor: {
		argNames: [ "accountName", "propertyName" ],
		},

		hardDeleteUserProfile: {
		argNames: [ "accountName", "userId" ],
		},

		hideSuggestion: {
		argNames: [ "accountName" ],
		},

		removeSPUserInformation: {
		argNames: [ "accountName", "siteId", "redactName" ],
		},

		resetUserOneDriveQuotaToDefault: {
		argNames: [ "accountName" ],
		},

		setMultiValuedProfileProperty: {
		argNames: [ "accountName", "propertyName", "propertyValues" ],
		},

		setMyProfilePicture: {
		argNames: [ "picture" ],
		},

		setSingleValueProfileProperty: {
		argNames: [ "accountName", "propertyName", "propertyValue" ],
		},

		setUserOneDriveQuota: {
		argNames: [ "accountName", "newQuota", "newQuotaWarning" ],
		},

		stopFollowing: {
		argNames: [ "accountName" ],
		},

		stopFollowingTag: {
		argNames: [ "value" ],
		},

	},

	"SP.UserProfiles.PersonalCache": {
		deleteCacheItemsAsync: {
		argNames: [ "cacheItems" ],
		},

		deleteCacheItemsAsync2: {
		argNames: [ "cacheItems", "mySiteUrl" ],
		},

		dispose: {
		},

		readCache: {
		argNames: [ "folderPath" ],
		},

		readCache2: {
		argNames: [ "folderPath", "mySiteUrl" ],
		},

		readCacheOrCreate: {
		argNames: [ "folderPath", "requiredCacheKeys", "createIfMissing" ],
		},

		readCacheOrCreate2: {
		argNames: [ "folderPath", "requiredCacheKeys", "createIfMissing", "mySiteUrl" ],
		},

		readCacheOrCreateOrderById: {
		argNames: [ "folderPath", "requiredCacheKeys", "createIfMissing" ],
		},

		readCacheOrCreateOrderById2: {
		argNames: [ "folderPath", "requiredCacheKeys", "createIfMissing", "mySiteUrl" ],
		},

		writeCache: {
		argNames: [ "cacheItems" ],
		},

		writeCache2: {
		argNames: [ "cacheItems", "mySiteUrl" ],
		},

	},

	"SP.UserProfiles.ProfileImageStore": {
		saveUploadedFile: {
		argNames: [ "profileType", "fileNamePrefix", "isFeedAttachment", "clientFilePath", "fileSize", "fileStream" ],
		},

	},

	"SP.UserProfiles.ProfileLoader": {
		createPersonalSiteEnqueueBulk: {
		argNames: [ "emailIDs" ],
		},

		getUserProfile: {
		},

	},

	"SP.UserProfiles.UserProfile": {
		createPersonalSite: {
		argNames: [ "lcid" ],
		},

		createPersonalSiteEnque: {
		argNames: [ "isInteractive" ],
		},

		createPersonalSiteFromWorkItem: {
		argNames: [ "workItemType" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		setMySiteFirstRunExperience: {
		argNames: [ "value" ],
		},

		shareAllSocialData: {
		argNames: [ "shareAll" ],
		},

	},

	"SP.UserProfiles.UserProfilePropertiesForUser": {
		getPropertyNames: {
		},

	},

	"SP.UserResource": {
		getResourceEntries: {
		},

		getValueForUICulture: {
		argNames: [ "cultureName" ],
		},

		setValueForUICulture: {
		argNames: [ "cultureName", "value" ],
		},

	},

	"SP.UserSolution.Collection": {
		add: {
		argNames: [ "solutionGalleryItemId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Utilities.ThemeManager": {
		addTenantTheme: {
		argNames: [ "name", "themeJson" ],
		},

		applyTheme: {
		argNames: [ "name", "themeJson" ],
		},

		deleteTenantTheme: {
		argNames: [ "name" ],
		},

		getAvailableThemes: {
		},

		getHideDefaultThemes: {
		},

		getTenantTheme: {
		argNames: [ "name" ],
		},

		getTenantThemingOptions: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		setHideDefaultThemes: {
		argNames: [ "hideDefaultThemes" ],
		},

		updateTenantTheme: {
		argNames: [ "name", "themeJson" ],
		},

	},

	"SP.View": {
		addToSpotlight: {
		argNames: [ "itemId", "folderPath", "afterItemId" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		removeFromSpotlight: {
		argNames: [ "itemId", "folderPath" ],
		},

		renderAsHtml: {
		},

		setViewXml: {
		argNames: [ "viewXml" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.View.Collection": {
		add: {
		argNames: [ "properties" ],
		},

		getById: {
		argNames: [ "guidId" ],
		},

		getByTitle: {
		argNames: [ "strTitle" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.ViewFieldCollection": {
		addViewField: {
		argNames: [ "strField" ],
		},

		moveViewFieldTo: {
		argNames: [ "field", "index" ],
		},

		removeAllViewFields: {
		},

		removeViewField: {
		argNames: [ "strField" ],
		},

	},

	"SP.Web": {
		addCrossFarmMessage: {
		argNames: [ "messagePayloadBase64" ],
		},

		addPlaceholderUser: {
		argNames: [ "listId", "placeholderText" ],
		},

		addSupportedUILanguage: {
		argNames: [ "lcid" ],
		},

		addinPermissions: {
		argNames: [ "addins" ],
		},

		applyTheme: {
		argNames: [ "colorPaletteUrl", "fontSchemeUrl", "backgroundImageUrl", "shareGenerated" ],
		},

		applyWebTemplate: {
		argNames: [ "webTemplate" ],
		},

		availableAddins: {
		argNames: [ "serverRelativeUrls", "urls" ],
		},

		breakRoleInheritance: {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		consentToPowerPlatform: {
		},

		createDefaultAssociatedGroups: {
		argNames: [ "userLogin", "userLogin2", "groupNameSeed" ],
		},

		createGroupBasedEnvironment: {
		},

		createSitePage: {
		argNames: [ "pageMetaData" ],
		},

		defaultDocumentLibrary: {
		},

		delete: {
		requestType: RequestType.Delete
		},

		doesPushNotificationSubscriberExist: {
		argNames: [ "deviceAppInstanceId" ],
		},

		doesUserHavePermissions: {
		argNames: [ "high", "low" ],
		},

		ensureEduClassSetup: {
		argNames: [ "byPassForAutomation" ],
		},

		ensureSolutioningEnvironment: {
		argNames: [ "ensureCdsInstance" ],
		},

		ensureTenantAppCatalog: {
		argNames: [ "callerId" ],
		},

		ensureUser: {
		argNames: [ "logonName" ],
		},

		ensureUserByObjectId: {
		argNames: [ "objectId", "tenantId", "principalType" ],
		},

		executeRemoteLOB: {
		argNames: [ "inputStream" ],
		},

		getACSServicePrincipals: {
		argNames: [ "appIds" ],
		},

		getAdaptiveCardExtensions: {
		argNames: [ "includeErrors", "project" ],
		},

		getAddinPrincipalsHavingPermissionsInSites: {
		argNames: [ "serverRelativeUrls", "urls" ],
		},

		getAddinUninstallJobDetail: {
		argNames: [ "jobId", "serverRelativeUrl", "url" ],
		},

		getAllClientSideComponents: {
		argNames: [ "languages" ],
		},

		getAppBdcCatalog: {
		},

		getAppBdcCatalogForAppInstance: {
		argNames: [ "appInstanceId" ],
		},

		getAppInstanceById: {
		argNames: [ "appInstanceId" ],
		},

		getAppInstancesByProductId: {
		argNames: [ "productId" ],
		},

		getAvailableWebTemplates: {
		argNames: [ "lcid", "doIncludeCrossLanguage" ],
		},

		getCatalog: {
		argNames: [ "typeCatalog" ],
		},

		getChanges: {
		argNames: [ "query" ],
		},

		getClientSideComponents: {
		argNames: [ "components", "project" ],
		},

		getClientSideComponentsByComponentType: {
		argNames: [ "componentTypesString", "supportedHostTypeValue", "includeErrors", "project", "includeManifestActivatedTime" ],
		},

		getClientSideComponentsById: {
		argNames: [ "componentIds", "project" ],
		},

		getClientSideWebParts: {
		argNames: [ "includeErrors", "project" ],
		},

		getCustomListTemplates: {
		},

		getEntity: {
		argNames: [ "namespace", "name" ],
		},

		getFileByGuestUrl: {
		argNames: [ "guestUrl" ],
		},

		getFileByGuestUrlEnsureAccess: {
		argNames: [ "guestUrl", "ensureAccess" ],
		},

		getFileByGuestUrlExtended: {
		argNames: [ "guestUrl", "requestSettings" ],
		},

		getFileById: {
		argNames: [ "uniqueId" ],
		},

		getFileByLinkingUrl: {
		argNames: [ "linkingUrl" ],
		},

		getFileByServerRelativePath: {
		argNames: [ "DecodedUrl" ],
		},

		getFileByServerRelativeUrl: {
		argNames: [ "serverRelativeUrl" ],
		},

		getFileByStreamFrameUrl: {
		argNames: [ "streamFrameUrl" ],
		},

		getFileByUrl: {
		argNames: [ "fileUrl" ],
		},

		getFileByWOPIFrameUrl: {
		argNames: [ "wopiFrameUrl" ],
		},

		getFolderByGuestUrl: {
		argNames: [ "guestUrl", "ensureAccess" ],
		},

		getFolderByGuestUrlExtended: {
		argNames: [ "guestUrl", "requestSettings" ],
		},

		getFolderById: {
		argNames: [ "uniqueId" ],
		},

		getFolderByServerRelativePath: {
		argNames: [ "DecodedUrl" ],
		},

		getFolderByServerRelativeUrl: {
		argNames: [ "serverRelativeUrl" ],
		},

		getGroupBasedEnvironment: {
		},

		getList: {
		argNames: [ "strUrl" ],
		},

		getListByTitle: {
		argNames: [ "title" ],
		},

		getListItem: {
		argNames: [ "strUrl" ],
		},

		getListItemByResourceId: {
		argNames: [ "resourceId" ],
		},

		getListItemUsingPath: {
		argNames: [ "DecodedUrl" ],
		},

		getListOperation: {
		argNames: [ "listId", "operationId" ],
		},

		getListUsingPath: {
		argNames: [ "DecodedUrl" ],
		},

		getLists: {
		argNames: [ "getListsParams" ],
		},

		getNewsList: {
		argNames: [ "allowCreate" ],
		},

		getPushNotificationSubscriber: {
		argNames: [ "deviceAppInstanceId" ],
		},

		getPushNotificationSubscribersByArgs: {
		argNames: [ "customArgs" ],
		},

		getPushNotificationSubscribersByUser: {
		argNames: [ "userName" ],
		},

		getRecycleBinItems: {
		argNames: [ "pagingInfo", "rowLimit", "isAscending", "orderBy", "itemState" ],
		},

		getRecycleBinItemsByQueryInfo: {
		argNames: [ "IsAscending", "ItemState", "OrderBy", "PagingInfo", "RowLimit", "ShowOnlyMyItems" ],
		},

		getRegionalDateTimeSchema: {
		},

		getSPAppContextAsStream: {
		},

		getSharingLinkData: {
		argNames: [ "linkUrl" ],
		},

		getSitePageCopyToStatus: {
		argNames: [ "workItemId" ],
		},

		getSitePageMoveStatus: {
		argNames: [ "workItemId" ],
		},

		getSiteUserIncludingDeletedByPuid: {
		argNames: [ "puid" ],
		},

		getStorageEntity: {
		argNames: [ "key" ],
		},

		getSubwebsFilteredForCurrentUser: {
		argNames: [ "nWebTemplateFilter", "nConfigurationFilter" ],
		},

		getUserById: {
		argNames: [ "userId" ],
		},

		getUserEffectivePermissions: {
		argNames: [ "userName" ],
		},

		getViewFromPath: {
		argNames: [ "DecodedUrl" ],
		},

		getViewFromUrl: {
		argNames: [ "listUrl" ],
		},

		hubSiteData: {
		argNames: [ "forceRefresh" ],
		},

		hubSiteDataAsStream: {
		argNames: [ "forceRefresh" ],
		},

		incrementSiteClientTag: {
		},

		listPowerPlatformUserDetails: {
		},

		loadAndInstallApp: {
		argNames: [ "appPackageStream" ],
		},

		loadAndInstallAppInSpecifiedLocale: {
		argNames: [ "appPackageStream", "installationLocaleLCID" ],
		},

		loadApp: {
		argNames: [ "appPackageStream", "installationLocaleLCID" ],
		},

		mapToIcon: {
		argNames: [ "fileName", "progId", "size" ],
		},

		markReplyUrisUpdated: {
		},

		pageContextCore: {
		},

		pageContextInfo: {
		argNames: [ "includeODBSettings", "emitNavigationInfo" ],
		},

		parseDateTime: {
		argNames: [ "value", "displayFormat", "calendarType" ],
		},

		processExternalNotification: {
		argNames: [ "stream" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		recycle: {
		},

		registerPushNotificationSubscriber: {
		argNames: [ "deviceAppInstanceId", "serviceToken" ],
		},

		removeStorageEntity: {
		argNames: [ "key" ],
		},

		removeSupportedUILanguage: {
		argNames: [ "lcid" ],
		},

		resetRoleInheritance: {
		},

		setAccessRequestSiteDescriptionAndUpdate: {
		argNames: [ "description" ],
		},

		setChromeOptions: {
		argNames: [ "headerLayout", "headerEmphasis", "megaMenuEnabled", "footerEnabled", "footerLayout", "footerEmphasis", "hideTitleInHeader", "logoAlignment", "horizontalQuickLaunch", "headerColorIndexInLightMode", "headerColorIndexInDarkMode", "footerColorIndexInLightMode", "footerColorIndexInDarkMode", "footerAlignment", "footerBlur", "headerOverlayColor", "headerOverlayGradientDirection", "headerOverlayOpacity", "footerOverlayColor", "footerOverlayGradientDirection", "footerOverlayOpacity", "fontOptionForSiteTitle", "fontOptionForSiteNav", "fontOptionForSiteFooterTitle", "fontOptionForSiteFooterNav" ],
		},

		setDefaultNewPageTemplateId: {
		argNames: [ "defaultNewPageTemplateId" ],
		},

		setGlobalNavSettings: {
		argNames: [ "title", "source" ],
		},

		setStorageEntity: {
		argNames: [ "key", "value", "description", "comments" ],
		},

		setThemeApplicationActionHistory: {
		argNames: [ "themeApplicationActionHistory" ],
		},

		setUseAccessRequestDefaultAndUpdate: {
		argNames: [ "useAccessRequestDefault" ],
		},

		syncFlowInstances: {
		argNames: [ "targetWebUrl" ],
		},

		syncFlowTemplates: {
		argNames: [ "category" ],
		},

		syncHubSiteTheme: {
		},

		syncTeamsComponent: {
		argNames: [ "teamsComponent" ],
		},

		uninstallAddins: {
		argNames: [ "uninstallAddins" ],
		},

		unregisterPushNotificationSubscriber: {
		argNames: [ "deviceAppInstanceId" ],
		},

		unsetIsEduClassProvisionPending: {
		},

		update: {
		argNames: [ "properties" ],
		},

		upgradePrefabAppInstance: {
		argNames: [ "prefabItemId", "hasCustomUpgradeConfiguration" ],
		},

		uploadImage: {
		argNames: [ "listTitle", "imageName", "contentStream", "listId", "itemId", "fieldId", "overwrite" ],
		},

	},

	"SP.Web.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.WebInformation.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.WebParts.LimitedWebPartManager": {
		exportWebPart: {
		argNames: [ "webPartId" ],
		},

		importWebPart: {
		argNames: [ "webPartXml" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.WebParts.WebPartDefinition": {
		closeWebPart: {
		},

		deleteWebPart: {
		},

		moveWebPartTo: {
		argNames: [ "zoneID", "zoneIndex" ],
		},

		openWebPart: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		saveWebPartChanges: {
		},

	},

	"SP.WebParts.WebPartDefinition.Collection": {
		getByControlId: {
		argNames: [ "controlId" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.WebTemplate.Collection": {
		getByName: {
		argNames: [ "name" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.WorkManagement.OM.BaseSession": {
		addAttributeToTask: {
		argNames: [ "taskKey", "attribute" ],
		},

		beginCacheRefresh: {
		},

		beginExchangeSync: {
		},

		createPersonalTaskAndPromoteToProviderTask: {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
		},

		createTask: {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
		},

		deleteTask: {
		argNames: [ "taskKey" ],
		},

		getCalloutInfo: {
		argNames: [ "taskKey" ],
		},

		getRefreshHealthInfo: {
		},

		getRefreshHistory: {
		argNames: [ "since" ],
		},

		getRefreshStatus: {
		argNames: [ "refreshId" ],
		},

		isExchangeJobPending: {
		},

		pinTask: {
		argNames: [ "taskKey" ],
		},

		promotePersonalTaskToProviderTaskInLocation: {
		argNames: [ "taskKey", "locationId" ],
		},

		readAllNonTaskData: {
		},

		refreshSingleTask: {
		argNames: [ "taskKey" ],
		},

		removeAttributeFromTask: {
		argNames: [ "taskKey", "attribute" ],
		},

		removePinOnTask: {
		argNames: [ "taskKey" ],
		},

		updateTaskWithLocalizedValue: {
		argNames: [ "taskKey", "field", "value" ],
		},

	},

	"SP.WorkManagement.OM.LocationOrientedSortableSession": {
		addAttributeToTask: {
		argNames: [ "taskKey", "attribute" ],
		},

		beginCacheRefresh: {
		},

		beginExchangeSync: {
		},

		createPersonalTaskAndPromoteToProviderTask: {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
		},

		createTask: {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
		},

		deleteTask: {
		argNames: [ "taskKey" ],
		},

		getCalloutInfo: {
		argNames: [ "taskKey" ],
		},

		getRefreshHealthInfo: {
		},

		getRefreshHistory: {
		argNames: [ "since" ],
		},

		getRefreshStatus: {
		argNames: [ "refreshId" ],
		},

		isExchangeJobPending: {
		},

		movePersonalTaskToLocation: {
		argNames: [ "taskKey", "newLocationKey" ],
		},

		pinTask: {
		argNames: [ "taskKey" ],
		},

		promotePersonalTaskToProviderTaskInLocation: {
		argNames: [ "taskKey", "locationId" ],
		},

		readAllNonTaskData: {
		},

		refreshSingleTask: {
		argNames: [ "taskKey" ],
		},

		removeAttributeFromTask: {
		argNames: [ "taskKey", "attribute" ],
		},

		removePinOnTask: {
		argNames: [ "taskKey" ],
		},

		updateTaskWithLocalizedValue: {
		argNames: [ "taskKey", "field", "value" ],
		},

	},

	"SP.WorkManagement.OM.LocationOrientedUserOrderedSession": {
		addAttributeToTask: {
		argNames: [ "taskKey", "attribute" ],
		},

		beginCacheRefresh: {
		},

		beginExchangeSync: {
		},

		createPersonalTaskAndPromoteToProviderTask: {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
		},

		createTask: {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
		},

		deleteTask: {
		argNames: [ "taskKey" ],
		},

		getCalloutInfo: {
		argNames: [ "taskKey" ],
		},

		getRefreshHealthInfo: {
		},

		getRefreshHistory: {
		argNames: [ "since" ],
		},

		getRefreshStatus: {
		argNames: [ "refreshId" ],
		},

		isExchangeJobPending: {
		},

		movePersonalTaskToLocation: {
		argNames: [ "taskKey", "newLocationKey" ],
		},

		pinTask: {
		argNames: [ "taskKey" ],
		},

		promotePersonalTaskToProviderTaskInLocation: {
		argNames: [ "taskKey", "locationId" ],
		},

		readAllNonTaskData: {
		},

		refreshSingleTask: {
		argNames: [ "taskKey" ],
		},

		removeAttributeFromTask: {
		argNames: [ "taskKey", "attribute" ],
		},

		removePinOnTask: {
		argNames: [ "taskKey" ],
		},

		reorderTask: {
		argNames: [ "taskKey", "newAfterTaskKey" ],
		},

		updateTaskWithLocalizedValue: {
		argNames: [ "taskKey", "field", "value" ],
		},

	},

	"SP.WorkManagement.OM.SortableSession": {
		addAttributeToTask: {
		argNames: [ "taskKey", "attribute" ],
		},

		beginCacheRefresh: {
		},

		beginExchangeSync: {
		},

		createPersonalTaskAndPromoteToProviderTask: {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
		},

		createTask: {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
		},

		deleteTask: {
		argNames: [ "taskKey" ],
		},

		getCalloutInfo: {
		argNames: [ "taskKey" ],
		},

		getRefreshHealthInfo: {
		},

		getRefreshHistory: {
		argNames: [ "since" ],
		},

		getRefreshStatus: {
		argNames: [ "refreshId" ],
		},

		isExchangeJobPending: {
		},

		pinTask: {
		argNames: [ "taskKey" ],
		},

		promotePersonalTaskToProviderTaskInLocation: {
		argNames: [ "taskKey", "locationId" ],
		},

		readAllNonTaskData: {
		},

		refreshSingleTask: {
		argNames: [ "taskKey" ],
		},

		removeAttributeFromTask: {
		argNames: [ "taskKey", "attribute" ],
		},

		removePinOnTask: {
		argNames: [ "taskKey" ],
		},

		updateTaskWithLocalizedValue: {
		argNames: [ "taskKey", "field", "value" ],
		},

	},

	"SP.WorkManagement.OM.SortableSessionManager": {
		createLocationOrientedSession: {
		},

		createSession: {
		},

	},

	"SP.WorkManagement.OM.UserOrderedSession": {
		addAttributeToTask: {
		argNames: [ "taskKey", "attribute" ],
		},

		beginCacheRefresh: {
		},

		beginExchangeSync: {
		},

		createPersonalTaskAndPromoteToProviderTask: {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
		},

		createTask: {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
		},

		deleteTask: {
		argNames: [ "taskKey" ],
		},

		getCalloutInfo: {
		argNames: [ "taskKey" ],
		},

		getRefreshHealthInfo: {
		},

		getRefreshHistory: {
		argNames: [ "since" ],
		},

		getRefreshStatus: {
		argNames: [ "refreshId" ],
		},

		isExchangeJobPending: {
		},

		pinTask: {
		argNames: [ "taskKey" ],
		},

		promotePersonalTaskToProviderTaskInLocation: {
		argNames: [ "taskKey", "locationId" ],
		},

		readAllNonTaskData: {
		},

		refreshSingleTask: {
		argNames: [ "taskKey" ],
		},

		removeAttributeFromTask: {
		argNames: [ "taskKey", "attribute" ],
		},

		removePinOnTask: {
		argNames: [ "taskKey" ],
		},

		reorderTask: {
		argNames: [ "taskKey", "newAfterTaskKey" ],
		},

		updateTaskWithLocalizedValue: {
		argNames: [ "taskKey", "field", "value" ],
		},

	},

	"SP.WorkManagement.OM.UserOrderedSessionManager": {
		createLocationOrientedSession: {
		},

		createSession: {
		},

	},

	"SP.WorkManagement.OM.UserSettingsManager": {
		getAllLocations: {
		},

		getExchangeSyncInfo: {
		},

		getImportantLocations: {
		},

		getLocations: {
		argNames: [ "locationsId" ],
		},

		getPersistedProperties: {
		},

		getUserSettings: {
		},

		isExchangeJobPending: {
		},

		optIntoExchangeSync: {
		},

		optOutOfExchangeSync: {
		},

	},

	"SP.Workflow.SPWorkflowTask": {
		addThumbnailFieldData: {
		argNames: [ "imageStream", "imageName", "fieldInternalName", "lockId" ],
		},

		archive: {
		},

		breakRoleInheritance: {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		deleteWithParameters: {
		argNames: [ "parameters" ],
		},

		doEntitiesHaveAccessToLabel: {
		argNames: [ "peoplePickerInput" ],
		},

		folderArchiveProgress: {
		},

		folderUnarchiveProgress: {
		},

		getChanges: {
		argNames: [ "query" ],
		},

		getComments: {
		},

		getUserEffectivePermissions: {
		argNames: [ "userName" ],
		},

		getVersionById: {
		argNames: [ "versionId" ],
		},

		getVersions: {
		argNames: [ "getVersionsParams" ],
		},

		getWOPIFrameUrl: {
		argNames: [ "action" ],
		},

		mediaServiceUpdate: {
		argNames: [ "parameters" ],
		},

		mediaServiceUpdateV2: {
		argNames: [ "parameters", "eventFiringEnabled" ],
		},

		overridePolicyTip: {
		argNames: [ "userAction", "justification" ],
		},

		parseAndSetFieldValue: {
		argNames: [ "fieldName", "value" ],
		},

		recycle: {
		},

		recycleWithParameters: {
		argNames: [ "parameters" ],
		},

		renderListItemDataAsStream: {
		argNames: [ "options" ],
		},

		resetRoleInheritance: {
		},

		setCommentsDisabled: {
		argNames: [ "value" ],
		},

		setComplianceTag: {
		argNames: [ "complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock", "isUnlockedAsDefault" ],
		},

		setComplianceTagWithExplicitMetasUpdate: {
		argNames: [ "complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress" ],
		},

		setComplianceTagWithHold: {
		argNames: [ "complianceTag" ],
		},

		setComplianceTagWithMetaInfo: {
		argNames: [ "complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock", "isRecordUnlockedAsDefault" ],
		},

		setComplianceTagWithNoHold: {
		argNames: [ "complianceTag" ],
		},

		setComplianceTagWithRecord: {
		argNames: [ "complianceTag" ],
		},

		systemUpdate: {
		},

		unarchive: {
		},

		update: {
		argNames: [ "properties" ],
		},

		updateEx: {
		argNames: [ "parameters" ],
		},

		updateOverwriteVersion: {
		},

		validateUpdateFetchListItem: {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "View", "RootFolder" ],
		},

		validateUpdateFetchListItemInFolder: {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "rootFolder" ],
		},

		validateUpdateListItem: {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "sharedLockId" ],
		},

	},

	"SP.Workflow.WorkflowAssociation": {
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"SP.Workflow.WorkflowAssociation.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getById: {
		argNames: [ "associationId" ],
		},

		getByName: {
		argNames: [ "name" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.Workflow.WorkflowTemplate.Collection": {
		getById: {
		argNames: [ "templateId" ],
		},

		getByName: {
		argNames: [ "name" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.WorkflowServices.InteropService": {
		cancelWorkflow: {
		argNames: [ "instanceId" ],
		},

		disableEvents: {
		argNames: [ "listId", "itemGuid" ],
		},

		enableEvents: {
		argNames: [ "listId", "itemGuid" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		startWorkflow: {
		argNames: [ "associationName", "correlationId", "listId", "itemGuid", "workflowParameters" ],
		},

	},

	"SP.WorkflowServices.WorkflowDefinition": {
		setProperty: {
		argNames: [ "propertyName", "value" ],
		},

	},

	"SP.WorkflowServices.WorkflowDefinition.Collection": {
		query: { argNames: ["oData"], requestType: RequestType.OData },

		sort: {
		},

	},

	"SP.WorkflowServices.WorkflowDeploymentService": {
		deleteCollateral: {
		argNames: [ "workflowDefinitionId", "leafFileName" ],
		},

		deleteDefinition: {
		argNames: [ "definitionId" ],
		},

		deprecateDefinition: {
		argNames: [ "definitionId" ],
		},

		enumerateDefinitions: {
		argNames: [ "publishedOnly" ],
		},

		enumerateIntegratedApps: {
		},

		getActivitySignatures: {
		argNames: [ "lastChanged" ],
		},

		getCollateralUri: {
		argNames: [ "workflowDefinitionId", "leafFileName" ],
		},

		getDefinition: {
		argNames: [ "definitionId" ],
		},

		isIntegratedApp: {
		},

		packageDefinition: {
		argNames: [ "definitionId", "packageDefaultFilename", "packageTitle", "packageDescription" ],
		},

		publishDefinition: {
		argNames: [ "definitionId" ],
		},

		saveCollateral: {
		argNames: [ "workflowDefinitionId", "leafFileName", "fileContent" ],
		},

		validateActivity: {
		argNames: [ "activityXaml" ],
		},

	},

	"SP.WorkflowServices.WorkflowInstanceService": {
		enumerateInstancesForListItem: {
		argNames: [ "listId", "itemId" ],
		},

		enumerateInstancesForListItemWithOffset: {
		argNames: [ "listId", "itemId", "offset" ],
		},

		enumerateInstancesForSite: {
		},

		enumerateInstancesForSiteWithOffset: {
		argNames: [ "offset" ],
		},

		getInstance: {
		argNames: [ "instanceId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		startWorkflowOnListItemBySubscriptionId: {
		argNames: [ "subscriptionId", "itemId", "payload" ],
		},

	},

	"SP.WorkflowServices.WorkflowMessagingService": {
		publishEvent: {
		argNames: [ "eventSourceId", "eventName", "payload" ],
		},

	},

	"SP.WorkflowServices.WorkflowServicesManager": {
		getWorkflowDeploymentService: {
		},

		getWorkflowInstanceService: {
		},

		getWorkflowInteropService: {
		},

		getWorkflowSubscriptionService: {
		},

		isIntegratedApp: {
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

	},

	"SP.WorkflowServices.WorkflowSubscription": {
		getExternalVariable: {
		argNames: [ "name" ],
		},

		setExternalVariable: {
		argNames: [ "name", "value" ],
		},

		setProperty: {
		argNames: [ "name", "value" ],
		},

	},

	"SP.WorkflowServices.WorkflowSubscription.Collection": {
		query: { argNames: ["oData"], requestType: RequestType.OData },

		sort: {
		},

	},

	"SP.WorkflowServices.WorkflowSubscriptionService": {
		deleteSubscription: {
		argNames: [ "subscriptionId" ],
		},

		enumerateSubscriptions: {
		},

		enumerateSubscriptionsByDefinition: {
		argNames: [ "definitionId" ],
		},

		enumerateSubscriptionsByEventSource: {
		argNames: [ "eventSourceId" ],
		},

		enumerateSubscriptionsByList: {
		argNames: [ "listId" ],
		},

		enumerateSubscriptionsByListAndParentContentType: {
		argNames: [ "listId", "parentContentTypeId", "includeNoContentTypeSpecified" ],
		},

		enumerateSubscriptionsByListWithContentType: {
		argNames: [ "listId", "includeContentTypeSpecified" ],
		},

		getSubscription: {
		argNames: [ "subscriptionId" ],
		},

		query: { argNames: ["oData"], requestType: RequestType.OData },

		registerInterestInHostWebList: {
		argNames: [ "listId", "eventName" ],
		},

		registerInterestInList: {
		argNames: [ "listId", "eventName" ],
		},

		unregisterInterestInHostWebList: {
		argNames: [ "listId", "eventName" ],
		},

		unregisterInterestInList: {
		argNames: [ "listId", "eventName" ],
		},

	},

};