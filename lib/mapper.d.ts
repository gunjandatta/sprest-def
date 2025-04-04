import { IMapperMethod } from "./base";


/** Mapper */
export interface IMapper {
	"MS.FileServices.File": {
		properties?: Array<string>;
		copyTo: IMapperMethod & {
		argNames: [ "target", "overwrite" ],
		},

		delete: IMapperMethod & {
		},

		download: IMapperMethod & {
		},

		moveTo: IMapperMethod & {
		argNames: [ "target", "overwrite" ],
		},

		upload: IMapperMethod & {
		argNames: [ "stream" ],
		},

	}

	"MS.FileServices.FileSystemItem.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "name", "overwrite", "content" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"MS.FileServices.Folder": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		moveTo: IMapperMethod & {
		argNames: [ "target" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.AppServices.AppCollection": {
		properties?: Array<string>;
		getAppsFromStore: IMapperMethod & {
		argNames: [ "addInType", "queryString" ],
		},

		getByType: IMapperMethod & {
		argNames: [ "type" ],
		},

	}

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningHub": {
		properties?: Array<string>;
		checkAIBuilderAccess: IMapperMethod & {
		argNames: [ "environmentName", "isTestEnvironment", "userId" ],
		},

		getAutofillColumnSettings: IMapperMethod & {
		argNames: [ "docLibId" ],
		},

		getByContentTypeId: IMapperMethod & {
		argNames: [ "contentTypeId" ],
		},

		getCDSMetadata: IMapperMethod & {
		argNames: [ "environmentName", "isTestEnvironment" ],
		},

		getColumnLLMInfo: IMapperMethod & {
		argNames: [ "docLibId", "columnId" ],
		},

		getLibraryLLMInfo: IMapperMethod & {
		argNames: [ "docLibId" ],
		},

		getMachineLearningFlags: IMapperMethod & {
		argNames: [ "docLibId" ],
		},

		getModelIdForContentType: IMapperMethod & {
		argNames: [ "contentTypeName" ],
		},

		getModels: IMapperMethod & {
		argNames: [ "listId", "modelTypes", "publicationTypes", "includeManagementNotAllowedModels" ],
		},

		getRetentionLabel: IMapperMethod & {
		argNames: [ "retentionLabelId" ],
		},

		getRetentionLabels: IMapperMethod & {
		},

		getSyntexPoweredColumnPrompts: IMapperMethod & {
		argNames: [ "docLibId" ],
		},

		invokeDataverseQuery: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		setAutofillColumnSettings: IMapperMethod & {
		argNames: [ "docLibId", "autofillColumnSettings" ],
		},

		setColumnLLMInfo: IMapperMethod & {
		argNames: [ "docLibId", "columnId", "autofillPrompt", "isEnabled" ],
		},

		setMachineLearningFlags: IMapperMethod & {
		argNames: [ "docLibId", "machineLearningFlags" ],
		},

		setSyntexPoweredColumnPrompts: IMapperMethod & {
		argNames: [ "docLibId", "syntexPoweredColumnPrompts" ],
		},

		verifyModelUrls: IMapperMethod & {
		argNames: [ "urls" ],
		},

		verifyModelUrlsAndGrantPAC: IMapperMethod & {
		argNames: [ "urls" ],
		},

	}

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningModel": {
		properties?: Array<string>;
		addModelDependency: IMapperMethod & {
		argNames: [ "modelId", "updateExisting" ],
		},

		copy: IMapperMethod & {
		argNames: [ "copyTo" ],
		},

		delete: IMapperMethod & {
		},

		importMeta: IMapperMethod & {
		},

		invokeConnectorQuery: IMapperMethod & {
		},

		removeModelDependency: IMapperMethod & {
		argNames: [ "modelId" ],
		},

		rename: IMapperMethod & {
		argNames: [ "renameTo" ],
		},

		renameExtractor: IMapperMethod & {
		argNames: [ "fromExtractorName", "toExtractorName", "toColumnType" ],
		},

		setAsModelAuthor: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

		updateModelSettings: IMapperMethod & {
		argNames: [ "ModelSettings" ],
		},

		updateModelTypeSpecificSettings: IMapperMethod & {
		argNames: [ "Settings" ],
		},

	}

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningModel.Collection": {
		properties?: Array<string>;
		getByTitle: IMapperMethod & {
		argNames: [ "title" ],
		},

		getByUniqueId: IMapperMethod & {
		argNames: [ "uniqueId" ],
		},

		getExtractorNames: IMapperMethod & {
		argNames: [ "packageName" ],
		},

		import: IMapperMethod & {
		argNames: [ "packageName" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		setupPrimedLibrary: IMapperMethod & {
		argNames: [ "primedLibraryName", "packageName", "isTileViewEnabled", "serverRelativeLibraryPath" ],
		},

		unbindModelFromContentType: IMapperMethod & {
		argNames: [ "contentTypeId" ],
		},

	}

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningPublication.Collection": {
		properties?: Array<string>;
		batchDelete: IMapperMethod & {
		argNames: [ "publications" ],
		},

		batchRemove: IMapperMethod & {
		argNames: [ "modelSiteUrl", "modelWebServerRelativeUrl", "publications" ],
		},

		batchUnpromote: IMapperMethod & {
		argNames: [ "promotions" ],
		},

		checkTenantPublishPermissions: IMapperMethod & {
		},

		getByModelUniqueId: IMapperMethod & {
		argNames: [ "modelUniqueId" ],
		},

		getByModelUniqueIdAndPublicationType: IMapperMethod & {
		argNames: [ "modelUniqueId", "publicationType" ],
		},

		getByUniqueId: IMapperMethod & {
		argNames: [ "uniqueId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningSample": {
		properties?: Array<string>;
		update: IMapperMethod & {
		},

	}

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningSample.Collection": {
		properties?: Array<string>;
		getByModelId: IMapperMethod & {
		argNames: [ "modelID" ],
		},

		getByTitle: IMapperMethod & {
		argNames: [ "title" ],
		},

		getByUniqueId: IMapperMethod & {
		argNames: [ "uniqueId" ],
		},

		getByUniqueIdWithTokenization: IMapperMethod & {
		argNames: [ "uniqueId" ],
		},

		getTemplateByModelId: IMapperMethod & {
		argNames: [ "modelID" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Office.Server.ContentCenter.SPMachineLearningWorkItem.Collection": {
		properties?: Array<string>;
		getByIdentifier: IMapperMethod & {
		argNames: [ "identifier" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Office.Server.Search.REST.SearchService": {
		properties?: Array<string>;
		autocompletions: IMapperMethod & {
		argNames: [ "querytext", "sources", "numberOfCompletions", "cursorPosition" ],
		},

		export: IMapperMethod & {
		argNames: [ "userName", "startTime" ],
		},

		exportmanualsuggestions: IMapperMethod & {
		},

		exportpopulartenantqueries: IMapperMethod & {
		argNames: [ "count" ],
		},

		postquery: IMapperMethod & {
		argNames: [ "request" ],
		},

		query: IMapperMethod & {
		argNames: [ "querytext", "queryTemplate", "enableInterleaving", "sourceId", "rankingModelId", "startRow", "rowLimit", "rowsPerPage", "selectProperties", "culture", "refinementFilters", "refiners", "hiddenConstraints", "sortList", "enableStemming", "trimDuplicates", "timeout", "enableNicknames", "enablePhonetic", "enableFQL", "hitHighlightedProperties", "propertiesToGenerateAcronyms", "bypassResultTypes", "processBestBets", "clientType", "personalizationData", "resultsUrl", "queryTag", "trimDuplicatesIncludeId", "totalRowsExactMinimum", "impressionId", "properties", "enableQueryRules", "summaryLength", "maxSnippetLength", "desiredSnippetLength", "uiLanguage", "blockDedupeMode", "generateBlockRankLog", "enableSorting", "collapseSpecification", "processPersonalFavorites", "enableOrderingHitHighlightedProperty", "hitHighlightedMultivaluePropertyLimit", "queryTemplatePropertiesUrl", "timeZoneId", "useOLSQuery", "OLSQuerySession" ],
		},

		recordPageClick: IMapperMethod & {
		argNames: [ "pageInfo", "clickType", "blockType", "clickedResultId", "subResultIndex", "immediacySourceId", "immediacyQueryString", "immediacyTitle", "immediacyUrl" ],
		},

		resultspageaddress: IMapperMethod & {
		},

		searchcenterurl: IMapperMethod & {
		},

		searchquery: IMapperMethod & {
		argNames: [ "request" ],
		},

		suggest: IMapperMethod & {
		argNames: [ "querytext", "iNumberOfQuerySuggestions", "iNumberOfResultSuggestions", "iNumberOfPopularResultSuggestions", "fPreQuerySuggestions", "fHitHighlighting", "fCapitalizeFirstLetters", "culture", "enableStemming", "showPeopleNameSuggestions", "enableQueryRules", "fPrefixMatchAllTerms", "sourceId", "clientType", "useOLSQuery", "OLSQuerySession", "zeroTermSuggestions" ],
		},

	}

	"Microsoft.Office.Server.Search.REST.SearchSetting": {
		properties?: Array<string>;
		exportSearchReports: IMapperMethod & {
		argNames: [ "TenantId", "ReportType", "Interval", "StartDate", "EndDate", "SiteCollectionId" ],
		},

		getpromotedresultqueryrules: IMapperMethod & {
		argNames: [ "siteCollectionLevel", "offset", "numberOfRules" ],
		},

		getqueryconfiguration: IMapperMethod & {
		argNames: [ "callLocalSearchFarmsOnly", "skipGroupObjectIdLookup", "throwOnRemoteApiCheck" ],
		},

		getxssearchpolicy: IMapperMethod & {
		},

		pingadminendpoint: IMapperMethod & {
		},

		scspartialupdateendpointinfo: IMapperMethod & {
		},

		setxssearchpolicy: IMapperMethod & {
		argNames: [ "policy" ],
		},

	}

	"Microsoft.Online.SharePoint.AppLauncher.AppLauncher": {
		properties?: Array<string>;
		getData: IMapperMethod & {
		argNames: [ "suiteVersion", "isMobileRequest", "locale", "onPremVer" ],
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Common.MigrationUrlParser": {
		properties?: Array<string>;
		parseUrl: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Common.UrlParseResult": {
		properties?: Array<string>;
		setDisplayUrl: IMapperMethod & {
		argNames: [ "displayUrl" ],
		},

		setSPListInformation: IMapperMethod & {
		argNames: [ "spListInformationList" ],
		},

		updateSiteProvisionInformation: IMapperMethod & {
		argNames: [ "spListInformation", "uri", "originalUrl", "errorCode", "message", "freeSiteStorageBytes", "isCurrentUserSiteAdmin" ],
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroup": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.AgentGroup.Collection": {
		properties?: Array<string>;
		createByName: IMapperMethod & {
		argNames: [ "Name" ],
		},

		deleteByName: IMapperMethod & {
		argNames: [ "Name" ],
		},

		getByName: IMapperMethod & {
		argNames: [ "Name" ],
		},

		getGroupList: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.Device": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.Device.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterDeployStatus": {
		properties?: Array<string>;
		isChangeDeployed: IMapperMethod & {
		argNames: [ "changeName" ],
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterStorage": {
		properties?: Array<string>;
		create: IMapperMethod & {
		argNames: [ "config" ],
		},

		delete: IMapperMethod & {
		},

		file: IMapperMethod & {
		argNames: [ "folderName", "fileName", "file", "overwrite" ],
		},

		parseUrl: IMapperMethod & {
		argNames: [ "destinationUrl", "retrieveAllLists", "retrieveFoldersForAllLists", "forceMySiteDefaultList", "migrationType" ],
		},

		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCenterTeams": {
		properties?: Array<string>;
		teamChannels: IMapperMethod & {
		argNames: [ "teamId", "membershipType" ],
		},

		teamChannelsExperiment: IMapperMethod & {
		argNames: [ "teamId", "membershipType" ],
		},

		teams: IMapperMethod & {
		argNames: [ "startsWith", "limit", "withLogo" ],
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredential": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationCredential.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getCredentials: IMapperMethod & {
		argNames: [ "AccountName", "Type" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationProperties": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		argNames: [ "key" ],
		},

		getProperty: IMapperMethod & {
		argNames: [ "key" ],
		},

		setProperty: IMapperMethod & {
		argNames: [ "key", "value", "throwIfExists" ],
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationSPFlight": {
		properties?: Array<string>;
		isFlightEnabled: IMapperMethod & {
		argNames: [ "flightName" ],
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.MigrationTask.Collection": {
		properties?: Array<string>;
		batchCreate: IMapperMethod & {
		argNames: [ "taskDefinitions", "taskSettings", "mmTaskSettings" ],
		},

		batchDelete: IMapperMethod & {
		argNames: [ "taskIdList", "deleteInProgressTask" ],
		},

		batchUpdate: IMapperMethod & {
		argNames: [ "tasks" ],
		},

		createDuplicateTasks: IMapperMethod & {
		argNames: [ "taskDefinition", "taskSettings", "mmTaskSettings", "taskCount" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceData": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MigrationCenter.Service.PerformanceData.Collection": {
		properties?: Array<string>;
		addPerfDataTest: IMapperMethod & {
		argNames: [ "Count", "Bottleneck", "MaxDuration", "MaxTaskFiles" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getData: IMapperMethod & {
		argNames: [ "StartTime", "EndTime", "AgentId", "TimeUnit" ],
		},

		getPerfDataTest: IMapperMethod & {
		argNames: [ "StartTime", "EndTime", "AgentId" ],
		},

		getRawData: IMapperMethod & {
		argNames: [ "StartTime", "EndTime", "AgentId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation.Collection": {
		properties?: Array<string>;
		getByLocation: IMapperMethod & {
		argNames: [ "location" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob.Collection": {
		properties?: Array<string>;
		getByMoveId: IMapperMethod & {
		argNames: [ "moveId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob": {
		properties?: Array<string>;
		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob.Collection": {
		properties?: Array<string>;
		getByMoveId: IMapperMethod & {
		argNames: [ "moveId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob": {
		properties?: Array<string>;
		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob.Collection": {
		properties?: Array<string>;
		getByMoveId: IMapperMethod & {
		argNames: [ "moveId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty.Collection": {
		properties?: Array<string>;
		getByPropertyNameAndGeoLocation: IMapperMethod & {
		argNames: [ "propertyName", "geo" ],
		},

		getChanges: IMapperMethod & {
		argNames: [ "startTimeInUtc" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.DfDeprecationJob": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.DfDeprecationJob.Collection": {
		properties?: Array<string>;
		getBySiteUrl: IMapperMethod & {
		argNames: [ "sourceSiteUrl", "targetSiteUrl" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator.Collection": {
		properties?: Array<string>;
		create: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByLoginName: IMapperMethod & {
		argNames: [ "loginName" ],
		},

		getByLoginNameAndType: IMapperMethod & {
		argNames: [ "loginName", "memberType" ],
		},

		getByObjectId: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience": {
		properties?: Array<string>;
		upgradeAllInstancesToSPOMode: IMapperMethod & {
		},

		upgradeToSPOMode: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation.Collection": {
		properties?: Array<string>;
		getByGeoLocation: IMapperMethod & {
		argNames: [ "geoLocation" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob": {
		properties?: Array<string>;
		cancel: IMapperMethod & {
		},

		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob.Collection": {
		properties?: Array<string>;
		getByGroupName: IMapperMethod & {
		argNames: [ "groupname" ],
		},

		getMoveReport: IMapperMethod & {
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.MoveSiteROState": {
		properties?: Array<string>;
		updateSiteROState: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.MoveSiteROState.Collection": {
		properties?: Array<string>;
		getBySiteId: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.MultiGeoServicesBeta": {
		properties?: Array<string>;
		compatibleDB: IMapperMethod & {
		argNames: [ "dbSchemaVersion", "siteSubscriptionId", "siteUrl" ],
		},

		dBSchemaCompatibilityCheck: IMapperMethod & {
		},

		geoMoveCompatibilityChecks: IMapperMethod & {
		},

		hasMnALicense: IMapperMethod & {
		argNames: [ "mnALicenseType" ],
		},

		mnAGroupMoveValidationResult: IMapperMethod & {
		argNames: [ "encodedQuery" ],
		},

		orgRelationGroupManagedPath: IMapperMethod & {
		argNames: [ "encodedNotificationQuery" ],
		},

		orgRelationNotification: IMapperMethod & {
		argNames: [ "encodedNotificationQuery" ],
		},

		orgRelationVerification: IMapperMethod & {
		argNames: [ "encodedVerificationQuery" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		restoreWorkflowCount: IMapperMethod & {
		argNames: [ "isCrossTenant" ],
		},

		userMnAODMoveValidationResult: IMapperMethod & {
		argNames: [ "encodedQuery" ],
		},

		userPersonalSiteId: IMapperMethod & {
		argNames: [ "userPrincipalName" ],
		},

		userPersonalSiteLocation: IMapperMethod & {
		argNames: [ "userPrincipalName" ],
		},

		xTenantMoveCompatibilityCheck: IMapperMethod & {
		argNames: [ "targetTenantHostUrl" ],
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob": {
		properties?: Array<string>;
		cancel: IMapperMethod & {
		},

		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob.Collection": {
		properties?: Array<string>;
		getByUrl: IMapperMethod & {
		argNames: [ "url" ],
		},

		getMoveJobByUrl: IMapperMethod & {
		argNames: [ "SourceSiteUrl", "SubscriptionId", "SourceDataLocation", "EnableSiteToMoveDatastore" ],
		},

		getMoveReport: IMapperMethod & {
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota": {
		properties?: Array<string>;
		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota.Collection": {
		properties?: Array<string>;
		getByLocation: IMapperMethod & {
		argNames: [ "geoLocation" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters": {
		properties?: Array<string>;
		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup.Collection": {
		properties?: Array<string>;
		getByAlias: IMapperMethod & {
		argNames: [ "alias" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob": {
		properties?: Array<string>;
		cancel: IMapperMethod & {
		},

		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob.Collection": {
		properties?: Array<string>;
		getByDirection: IMapperMethod & {
		argNames: [ "direction" ],
		},

		getByMoveId: IMapperMethod & {
		argNames: [ "odbMoveId" ],
		},

		getByUpn: IMapperMethod & {
		argNames: [ "upn" ],
		},

		getByValidPdl: IMapperMethod & {
		argNames: [ "validPdl" ],
		},

		getMoveReport: IMapperMethod & {
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.Onboarding.RestService.PrioritySiteRename.PrioritySiteRenameJob.Collection": {
		properties?: Array<string>;
		cancel: IMapperMethod & {
		argNames: [ "url" ],
		},

		get: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob.Collection": {
		properties?: Array<string>;
		getBySiteUrl: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		getJobsByParentId: IMapperMethod & {
		argNames: [ "parentId" ],
		},

		getJobsByParentIdAndState: IMapperMethod & {
		argNames: [ "parentId", "state" ],
		},

		getJobsBySiteUrl: IMapperMethod & {
		argNames: [ "url" ],
		},

		getJobsCountByParentIdAndState: IMapperMethod & {
		argNames: [ "parentId", "state" ],
		},

		getSiteRenameReport: IMapperMethod & {
		argNames: [ "state" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJob.Collection": {
		properties?: Array<string>;
		cancel: IMapperMethod & {
		},

		get: IMapperMethod & {
		},

		getV2: IMapperMethod & {
		},

		getWarningMessages: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.SPLogger.LogExport": {
		properties?: Array<string>;
		getFiles: IMapperMethod & {
		argNames: [ "partitionId", "logType" ],
		},

		getLogTypes: IMapperMethod & {
		},

		getPartitions: IMapperMethod & {
		argNames: [ "logType" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdmin.MiddleTier.DDIAdapter": {
		properties?: Array<string>;
		getList: IMapperMethod & {
		argNames: [ "schema", "workflow", "stream" ],
		},

		getObject: IMapperMethod & {
		argNames: [ "schema", "workflow", "stream" ],
		},

		multiObjectExecute: IMapperMethod & {
		argNames: [ "schema", "workflow", "stream" ],
		},

		newObject: IMapperMethod & {
		argNames: [ "schema", "workflow", "stream" ],
		},

		removeObjects: IMapperMethod & {
		argNames: [ "schema", "workflow", "stream" ],
		},

		setObject: IMapperMethod & {
		argNames: [ "schema", "workflow", "stream" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties": {
		properties?: Array<string>;
		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPO3rdPartyAADPermissionGrant.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "servicePrincipalId", "resource", "scope" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		remove: IMapperMethod & {
		argNames: [ "servicePrincipalId", "resource", "scope" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipal": {
		properties?: Array<string>;
		getIsolatedAppDomainsByAppId: IMapperMethod & {
		argNames: [ "appIds" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		removeAppsToDelete: IMapperMethod & {
		argNames: [ "domainsToDelete" ],
		},

		update: IMapperMethod & {
		},

		updateSpfxClientSecret: IMapperMethod & {
		argNames: [ "secretValue" ],
		},

		updateSpfxThirdPartyAppId: IMapperMethod & {
		argNames: [ "appId" ],
		},

		updateSpfxThirdPartyIsolatedComponentFields: IMapperMethod & {
		argNames: [ "catalogItemId", "apAppObjectId", "spObjectId", "appId" ],
		},

		updateSpfxThirdPartyIsolatedSecret: IMapperMethod & {
		argNames: [ "servicePrincipalId", "secretValue" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant.Collection": {
		properties?: Array<string>;
		getByObjectId: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest": {
		properties?: Array<string>;
		approve: IMapperMethod & {
		},

		deny: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest.Collection": {
		properties?: Array<string>;
		approve: IMapperMethod & {
		argNames: [ "resource", "scope" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.TenantAdministration.Office365CommsMessagesServiceProxy": {
		properties?: Array<string>;
		messageCenterMessages: IMapperMethod & {
		argNames: [ "messagesFieldsData" ],
		},

		serviceHealthMessages: IMapperMethod & {
		argNames: [ "messagesFieldsData" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.SPDataGovernanceInsightRestApiClient": {
		properties?: Array<string>;
		createDataAccessGovernanceReport: IMapperMethod & {
		argNames: [ "reportEntity", "workload", "reportType", "fileSensitivityLabelName", "fileSensitivityLabelGUID", "name", "template", "privacy", "siteSensitivityLabelGUID", "countOfUsersMoreThan" ],
		},

		createDataAccessGovernanceReportV2: IMapperMethod & {
		argNames: [ "reportEntity", "workload", "reportType", "fileSensitivityLabelName", "fileSensitivityLabelGUID", "name", "template", "privacy", "siteSensitivityLabelGUID", "countOfUsersMoreThan", "userIDList" ],
		},

		exportSPODataAccessGovernanceInsight: IMapperMethod & {
		argNames: [ "reportId" ],
		},

		getSPODataAccessGovernanceInsight: IMapperMethod & {
		argNames: [ "reportEntity", "workLoad" ],
		},

		getSPODataAccessGovernanceInsightById: IMapperMethod & {
		argNames: [ "reportId" ],
		},

		getSPODataAccessGovernanceInsightV2: IMapperMethod & {
		argNames: [ "reportEntity" ],
		},

		removeDataAccessGovernanceReport: IMapperMethod & {
		argNames: [ "reportId" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.SPDataGovernanceSARRestApiClient": {
		properties?: Array<string>;
		getSPOSiteReview: IMapperMethod & {
		argNames: [ "reportEntity", "siteReviewtatus", "siteReviewID", "siteID" ],
		},

		startSPOSiteReview: IMapperMethod & {
		argNames: [ "detailedSourceReportId", "siteId", "adminComment" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.SPOContentSecurityPolicyConfiguration": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "source" ],
		},

		remove: IMapperMethod & {
		argNames: [ "source" ],
		},

		updateScriptSources: IMapperMethod & {
		argNames: [ "added", "removed" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.SPOCopilotAgentInsightsRestApiClient": {
		properties?: Array<string>;
		createCopilotAgentInsightsReport: IMapperMethod & {
		argNames: [ "reportPeriod" ],
		},

		getAllCopilotAgentInsightsReportsMetadata: IMapperMethod & {
		},

		getCopilotAgentInsightsFullReportContent: IMapperMethod & {
		argNames: [ "reportId", "reportSubType", "isFullDetails" ],
		},

		getCopilotAgentsOnSitesTopDetails: IMapperMethod & {
		argNames: [ "reportId", "isFullDetails" ],
		},

		getSiteDistributionsTopDetails: IMapperMethod & {
		argNames: [ "reportId", "isFullDetails" ],
		},

		getTopSitesDetails: IMapperMethod & {
		argNames: [ "reportId", "isFullDetails" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.SPOGroup": {
		properties?: Array<string>;
		addAsGroupOwnerAndMember: IMapperMethod & {
		argNames: [ "groupId", "userId", "userPrincipalName" ],
		},

		addGroupMember: IMapperMethod & {
		argNames: [ "groupId", "memberId", "memberPrincipalName" ],
		},

		addGroupOwner: IMapperMethod & {
		argNames: [ "groupId", "ownerId", "ownerPrincipalName" ],
		},

		getGroupInfo: IMapperMethod & {
		argNames: [ "groupId" ],
		},

		removeAsGroupOwnerAndMember: IMapperMethod & {
		argNames: [ "groupId", "userId" ],
		},

		removeGroupMember: IMapperMethod & {
		argNames: [ "groupId", "memberId" ],
		},

		removeGroupOwner: IMapperMethod & {
		argNames: [ "groupId", "ownerId" ],
		},

		updateGroupProperties: IMapperMethod & {
		argNames: [ "groupId", "displayName" ],
		},

		updateGroupPropertiesBySiteId: IMapperMethod & {
		argNames: [ "groupId", "siteId", "displayName" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.SPOMalwareFile": {
		properties?: Array<string>;
		getMalwareFileStream: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.TenantAdministration.SPORestrictedContentDiscoverabilityClient": {
		properties?: Array<string>;
		createRestrictedContentDiscoverabilityReport: IMapperMethod & {
		},

		getAllRestrictedContentDiscoverabilityReports: IMapperMethod & {
		},

		getRestrictContentOrgWideSearchUsageInsightsReportContent: IMapperMethod & {
		argNames: [ "reportId" ],
		},

		getSPODataAccessGovernanceInsightById: IMapperMethod & {
		argNames: [ "reportId" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.SPOWebAppServicePrincipalPublic": {
		properties?: Array<string>;
		addCustomSpfx3rdPartyAppPrincipal: IMapperMethod & {
		argNames: [ "appId", "appUri", "clientSecret" ],
		},

		getCustomSpfx3rdPartyAppPrincipal: IMapperMethod & {
		},

		removeCustomSpfx3rdPartyAppPrincipal: IMapperMethod & {
		},

		updateCustomSpfx3rdPartyAppPrincipalClientSecret: IMapperMethod & {
		argNames: [ "clientSecret" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.SiteProperties": {
		properties?: Array<string>;
		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.SiteProperties.Collection": {
		properties?: Array<string>;
		checkSiteIsArchivedById: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		getById: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		getGroupSiteRelationship: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		getLockStateById: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		getSiteStateProperties: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		getSiteUserGroups: IMapperMethod & {
		argNames: [ "siteId", "userGroupIds" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.TenantAdministration.Tenant": {
		properties?: Array<string>;
		acceptSyntexRepositoryTermsOfService: IMapperMethod & {
		},

		activateApplicationBillingPolicy: IMapperMethod & {
		argNames: [ "billingPolicyId" ],
		},

		addBrandFontPackage: IMapperMethod & {
		argNames: [ "creationInformation" ],
		},

		addHomeSite: IMapperMethod & {
		argNames: [ "homeSiteUrl", "order", "audiences" ],
		},

		addRecentAdminAction: IMapperMethod & {
		argNames: [ "payload" ],
		},

		addRecentAdminActionReport: IMapperMethod & {
		argNames: [ "payload" ],
		},

		addRecentAdminActions: IMapperMethod & {
		argNames: [ "payload" ],
		},

		addSPOContainerUserRole: IMapperMethod & {
		argNames: [ "ContainerId", "loginName", "role" ],
		},

		addSPORestrictedSearchAllowedList: IMapperMethod & {
		argNames: [ "siteUrls" ],
		},

		addTenantAdminListItem: IMapperMethod & {
		argNames: [ "columnValues", "listName" ],
		},

		addTenantAdminListView: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		addToOrgAssetsLibAndCdnV2: IMapperMethod & {
		argNames: [ "cdnType", "libUrl", "thumbnailUrl", "orgAssetType", "defaultOriginAdded" ],
		},

		addToOrgAssetsLibAndCdnWithType: IMapperMethod & {
		argNames: [ "cdnType", "libUrl", "thumbnailUrl", "orgAssetType" ],
		},

		addToOrgAssetsLibWithConfig: IMapperMethod & {
		argNames: [ "cdnType", "libUrl", "thumbnailUrl", "orgAssetType", "defaultOriginAdded", "configParam" ],
		},

		archiveSiteById: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		bootstrapPolicyAutomationResources: IMapperMethod & {
		},

		checkTenantIntuneLicense: IMapperMethod & {
		},

		checkTenantLicenses: IMapperMethod & {
		argNames: [ "licenses" ],
		},

		clearRestrictedAccessControlOneDrive: IMapperMethod & {
		},

		clearRestrictedAccessControlSharePoint: IMapperMethod & {
		},

		connectSiteToHubSiteById: IMapperMethod & {
		argNames: [ "siteUrl", "hubSiteId" ],
		},

		createApplicationBillingPolicyValidation: IMapperMethod & {
		argNames: [ "applicationId" ],
		},

		createPolicyDefinition: IMapperMethod & {
		argNames: [ "policyInputParameters" ],
		},

		createSite: IMapperMethod & {
		argNames: [ "siteCreationProperties" ],
		},

		deletePolicyDefinition: IMapperMethod & {
		argNames: [ "itemId" ],
		},

		deleteRecentAdminActionReport: IMapperMethod & {
		argNames: [ "reportId" ],
		},

		disableCollaborationInsightsDataCollection: IMapperMethod & {
		},

		downloadHighVolumeComponentImpactedAssetsReport: IMapperMethod & {
		argNames: [ "category", "documentKey" ],
		},

		downloadRansomwareImpactedAssetsReport: IMapperMethod & {
		argNames: [ "driveId", "fileName", "reportNameType" ],
		},

		downloadSPOContainers: IMapperMethod & {
		argNames: [ "active" ],
		},

		downloadSharingInsights: IMapperMethod & {
		argNames: [ "queryMode", "insightsType" ],
		},

		enableCollaborationInsightsDataCollection: IMapperMethod & {
		},

		ensureBrandCenterFeature: IMapperMethod & {
		},

		executeTranspilerRequest: IMapperMethod & {
		argNames: [ "payload" ],
		},

		exportAdminListToCSV: IMapperMethod & {
		argNames: [ "viewXml", "listName" ],
		},

		exportCSVFile: IMapperMethod & {
		argNames: [ "timeZoneId" ],
		},

		exportToCSV: IMapperMethod & {
		argNames: [ "viewXml", "timeZoneId", "columnsInfo", "listName" ],
		},

		exportUnlicensedOneDriveForBusinessListToCSV: IMapperMethod & {
		},

		getAdminListViews: IMapperMethod & {
		},

		getAllDeletedPersonalSitesPropertiesAllVersions: IMapperMethod & {
		argNames: [ "startIndex" ],
		},

		getBillingPolicyIdForApp: IMapperMethod & {
		argNames: [ "applicationId" ],
		},

		getBrandCenterConfiguration: IMapperMethod & {
		},

		getBrandFontPackages: IMapperMethod & {
		},

		getCollaborationInsightsData: IMapperMethod & {
		},

		getCollaborationInsightsOverview: IMapperMethod & {
		},

		getContentManagementAssessmentResults: IMapperMethod & {
		},

		getContentSecurityPolicy: IMapperMethod & {
		},

		getCopilotPromoOptInStatus: IMapperMethod & {
		},

		getDeletedPersonalSitePropertiesAllVersions: IMapperMethod & {
		argNames: [ "url" ],
		},

		getDeletedSiteProperties: IMapperMethod & {
		argNames: [ "startIndex" ],
		},

		getDeletedSitePropertiesByUrl: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		getDeletedSitePropertiesFromSharePoint: IMapperMethod & {
		argNames: [ "startIndex" ],
		},

		getFileSensitivityLabelInfo: IMapperMethod & {
		argNames: [ "fileUrl" ],
		},

		getFileVersionBatchDeleteJobProgress: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		getFileVersionBatchDeleteJobProgressForLibrary: IMapperMethod & {
		argNames: [ "siteUrl", "listParams" ],
		},

		getFileVersionExpirationReportJobProgress: IMapperMethod & {
		argNames: [ "siteUrl", "reportUrl" ],
		},

		getFileVersionExpirationReportJobProgressForLibrary: IMapperMethod & {
		argNames: [ "siteUrl", "listParams", "reportUrl" ],
		},

		getFileVersionPolicyForLibrary: IMapperMethod & {
		argNames: [ "siteUrl", "listParams" ],
		},

		getFilteredSPListItems: IMapperMethod & {
		argNames: [ "columnName", "columnValue", "columnType", "listName" ],
		},

		getHomeSites: IMapperMethod & {
		},

		getHomeSitesDetails: IMapperMethod & {
		},

		getIBVersionForTenant: IMapperMethod & {
		},

		getIdleSessionSignOutForUnmanagedDevices: IMapperMethod & {
		},

		getInsightsSummary: IMapperMethod & {
		argNames: [ "insightsScenario", "dataFileName", "pageIndex", "modelName", "maxTokenSize", "maxContentSize", "timeoutMS" ],
		},

		getOneDriveSiteSharingInsights: IMapperMethod & {
		argNames: [ "queryMode" ],
		},

		getOrgAssets: IMapperMethod & {
		},

		getPowerAppsEnvironments: IMapperMethod & {
		},

		getRansomwareActivities: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getRansomwareActivitiesOverview: IMapperMethod & {
		argNames: [ "eventId" ],
		},

		getRansomwareEvents: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getRansomwareEventsOverview: IMapperMethod & {
		},

		getRootSiteUrl: IMapperMethod & {
		},

		getSPHSiteUrl: IMapperMethod & {
		},

		getSPListItemCount: IMapperMethod & {
		argNames: [ "listName" ],
		},

		getSPListRootFolderProperties: IMapperMethod & {
		argNames: [ "listName" ],
		},

		getSPOAllWebTemplates: IMapperMethod & {
		argNames: [ "cultureName", "compatibilityLevel" ],
		},

		getSPOAppBillingPolicies: IMapperMethod & {
		},

		getSPOContainerByContainerId: IMapperMethod & {
		argNames: [ "containerId" ],
		},

		getSPOContainerByContainerSiteUrl: IMapperMethod & {
		argNames: [ "containerSiteUrl" ],
		},

		getSPOContainerTypeById: IMapperMethod & {
		argNames: [ "containerTypeId", "containerTenantType" ],
		},

		getSPOContainerTypeConfigurationByContainerTypeId: IMapperMethod & {
		argNames: [ "containerTypeId" ],
		},

		getSPOContainerTypes: IMapperMethod & {
		argNames: [ "containerTenantType" ],
		},

		getSPOContainersByApplicationId: IMapperMethod & {
		argNames: [ "owningApplicationId", "paged", "pagingToken" ],
		},

		getSPODeletedContainers: IMapperMethod & {
		},

		getSPORestrictedSearchAllowedList: IMapperMethod & {
		},

		getSPORestrictedSearchMode: IMapperMethod & {
		},

		getSPOSiteCreationSources: IMapperMethod & {
		},

		getSPOSyntexApplications: IMapperMethod & {
		},

		getSPOSyntexConsumingApplications: IMapperMethod & {
		argNames: [ "owningApplicationId", "applicationId" ],
		},

		getSPOTenantAllWebTemplates: IMapperMethod & {
		},

		getSPOTenantWebTemplates: IMapperMethod & {
		argNames: [ "localeId", "compatibilityLevel" ],
		},

		getSPOWebTemplatesAllowedForArchiving: IMapperMethod & {
		},

		getSharePointSettingData: IMapperMethod & {
		argNames: [ "category" ],
		},

		getSharePointSiteSharingInsights: IMapperMethod & {
		argNames: [ "queryMode" ],
		},

		getSiteAdministrators: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		getSiteAuthorizationCodeForMigration: IMapperMethod & {
		argNames: [ "endpointUrl" ],
		},

		getSiteByUrl: IMapperMethod & {
		argNames: [ "url" ],
		},

		getSiteCohortsSummary: IMapperMethod & {
		argNames: [ "view" ],
		},

		getSiteHealthStatus: IMapperMethod & {
		argNames: [ "sourceUrl" ],
		},

		getSiteProperties: IMapperMethod & {
		argNames: [ "startIndex", "includeDetail" ],
		},

		getSitePropertiesByFilter: IMapperMethod & {
		argNames: [ "filter", "startIndex", "includeDetail" ],
		},

		getSitePropertiesByUrl: IMapperMethod & {
		argNames: [ "url", "includeDetail" ],
		},

		getSitePropertiesFromSharePoint: IMapperMethod & {
		argNames: [ "startIndex", "includeDetail" ],
		},

		getSitePropertiesFromSharePointByFilter: IMapperMethod & {
		argNames: [ "filter", "startIndex", "includeDetail" ],
		},

		getSitePropertiesFromSharePointByFilters: IMapperMethod & {
		argNames: [ "speFilter" ],
		},

		getSiteSecondaryAdministrators: IMapperMethod & {
		argNames: [ "secondaryAdministratorsFieldsData" ],
		},

		getSiteSubscriptionId: IMapperMethod & {
		},

		getSiteThumbnailLogo: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		getSitesByState: IMapperMethod & {
		argNames: [ "states" ],
		},

		getSitesFromSubstrate: IMapperMethod & {
		argNames: [ "searchText" ],
		},

		getSortedSPOContainersByApplicationId: IMapperMethod & {
		argNames: [ "owningApplicationId", "ascending", "paged", "pagingToken" ],
		},

		getTargetedSitesDetails: IMapperMethod & {
		},

		getTargetedSitesDetailsByUserId: IMapperMethod & {
		argNames: [ "userId" ],
		},

		getTenantAllOrCompatibleIBSegments: IMapperMethod & {
		argNames: [ "segments" ],
		},

		getTenantSendFromAddress: IMapperMethod & {
		},

		getTenantSiteCreationSource: IMapperMethod & {
		},

		getTrackViewFeatureAlwaysVisible: IMapperMethod & {
		},

		getVersionPolicyForDocLibsJobProgress: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		getViewByDisplayName: IMapperMethod & {
		argNames: [ "viewName", "listName" ],
		},

		getVivaConnectionsLicense: IMapperMethod & {
		},

		grantHubSiteRightsById: IMapperMethod & {
		argNames: [ "hubSiteId", "principals", "grantedRights" ],
		},

		hasValidEducationLicense: IMapperMethod & {
		},

		isRequestContentManagementAssessmentEligible: IMapperMethod & {
		},

		isSyntexRepositoryTermsOfServiceAccepted: IMapperMethod & {
		},

		newFileVersionBatchDeleteJob: IMapperMethod & {
		argNames: [ "siteUrl", "batchDeleteParams" ],
		},

		newFileVersionBatchDeleteJobForLibrary: IMapperMethod & {
		argNames: [ "siteUrl", "listParams", "batchDeleteParams" ],
		},

		newFileVersionExpirationReportJob: IMapperMethod & {
		argNames: [ "siteUrl", "reportUrl" ],
		},

		newFileVersionExpirationReportJobForLibrary: IMapperMethod & {
		argNames: [ "siteUrl", "listParams", "reportUrl" ],
		},

		newSPOContainerType: IMapperMethod & {
		argNames: [ "containerTypeProperties" ],
		},

		purgeContainer: IMapperMethod & {
		argNames: [ "containerId" ],
		},

		purgeSPODeletedContainerByContainerId: IMapperMethod & {
		argNames: [ "containerId" ],
		},

		purgeSPODeletedContainerByContainerSiteUrl: IMapperMethod & {
		argNames: [ "containerSiteUrl" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		recentAdminActionReportIsAuditEnabled: IMapperMethod & {
		},

		registerHubSite: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		registerHubSiteWithCreationInformation: IMapperMethod & {
		argNames: [ "siteUrl", "creationInformation" ],
		},

		removeContainer: IMapperMethod & {
		argNames: [ "containerId" ],
		},

		removeDeletedSite: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		removeDeletedSitePreferId: IMapperMethod & {
		argNames: [ "siteUrl", "siteId" ],
		},

		removeFileVersionBatchDeleteJob: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		removeFileVersionBatchDeleteJobForLibrary: IMapperMethod & {
		argNames: [ "siteUrl", "listParams" ],
		},

		removeFromOrgAssets: IMapperMethod & {
		argNames: [ "libUrl", "listId" ],
		},

		removeHomeSite: IMapperMethod & {
		argNames: [ "homeSiteUrl" ],
		},

		removeSPHSite: IMapperMethod & {
		},

		removeSPListItem: IMapperMethod & {
		argNames: [ "listItemId", "listName" ],
		},

		removeSPOContainerByContainerId: IMapperMethod & {
		argNames: [ "containerId" ],
		},

		removeSPOContainerByContainerSiteUrl: IMapperMethod & {
		argNames: [ "containerSiteUrl" ],
		},

		removeSPOContainerType: IMapperMethod & {
		argNames: [ "spDeletedContainerTypeProperties" ],
		},

		removeSPOContainerUserRole: IMapperMethod & {
		argNames: [ "ContainerId", "loginName", "role" ],
		},

		removeSPORestrictedSearchAllowedList: IMapperMethod & {
		argNames: [ "siteUrls" ],
		},

		removeSite: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		removeTargetedSite: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		removeTenantAdminListView: IMapperMethod & {
		argNames: [ "viewId" ],
		},

		removeVersionPolicyForDocLibsJob: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		renderActiveContainers: IMapperMethod & {
		argNames: [ "containerId", "viewXml" ],
		},

		renderAdminListData: IMapperMethod & {
		argNames: [ "parameters", "overrideParameters", "listName" ],
		},

		renderContainersAdminApplicationsData: IMapperMethod & {
		},

		renderContainersAdminListData: IMapperMethod & {
		argNames: [ "orderByColumnsList", "filterByColumnsList", "pageSize", "pagingToken", "containerStatus", "searchParameters" ],
		},

		renderDeletedContainers: IMapperMethod & {
		argNames: [ "viewXml" ],
		},

		renderFilteredAdminListData: IMapperMethod & {
		argNames: [ "parameters", "listName" ],
		},

		renderFilteredAdminListDataByGroupId: IMapperMethod & {
		argNames: [ "groupId" ],
		},

		renderIBSegmentListDataAsStream: IMapperMethod & {
		argNames: [ "parameters", "segments", "CascDelWarnMessage", "CustomAction", "DrillDown", "Field", "FieldInternalName", "Filter", "FilterData", "FilterData1", "FilterData10", "FilterData2", "FilterData3", "FilterData4", "FilterData5", "FilterData6", "FilterData7", "FilterData8", "FilterData9", "FilterField", "FilterField1", "FilterField10", "FilterField2", "FilterField3", "FilterField4", "FilterField5", "FilterField6", "FilterField7", "FilterField8", "FilterField9", "FilterFields", "FilterFields1", "FilterFields10", "FilterFields2", "FilterFields3", "FilterFields4", "FilterFields5", "FilterFields6", "FilterFields7", "FilterFields8", "FilterFields9", "FilterLookupId", "FilterLookupId1", "FilterLookupId10", "FilterLookupId2", "FilterLookupId3", "FilterLookupId4", "FilterLookupId5", "FilterLookupId6", "FilterLookupId7", "FilterLookupId8", "FilterLookupId9", "FilterOp", "FilterOp1", "FilterOp10", "FilterOp2", "FilterOp3", "FilterOp4", "FilterOp5", "FilterOp6", "FilterOp7", "FilterOp8", "FilterOp9", "FilterValue", "FilterValue1", "FilterValue10", "FilterValue2", "FilterValue3", "FilterValue4", "FilterValue5", "FilterValue6", "FilterValue7", "FilterValue8", "FilterValue9", "FilterValues", "FilterValues1", "FilterValues10", "FilterValues2", "FilterValues3", "FilterValues4", "FilterValues5", "FilterValues6", "FilterValues7", "FilterValues8", "FilterValues9", "GroupString", "HasOverrideSelectCommand", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsGroupRender", "IsXslView", "ListViewPageUrl", "OverrideRowLimit", "OverrideScope", "OverrideSelectCommand", "PageFirstRow", "PageLastRow", "QueryParams", "RootFolder", "RootFolderUniqueId", "SortDir", "SortDir1", "SortDir10", "SortDir2", "SortDir3", "SortDir4", "SortDir5", "SortDir6", "SortDir7", "SortDir8", "SortDir9", "SortField", "SortField1", "SortField10", "SortField2", "SortField3", "SortField4", "SortField5", "SortField6", "SortField7", "SortField8", "SortField9", "SortFields", "SortFieldValues", "View", "ViewCount", "ViewId", "ViewPath", "WebPartId", "FilterIBSegmentsBasedOnAndCondition" ],
		},

		renderIBSegmentListFilterData: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		renderOwnershipPolicyStorageSPList: IMapperMethod & {
		argNames: [ "parameters", "overrideParameters" ],
		},

		renderPolicyDefinitionList: IMapperMethod & {
		argNames: [ "parameters", "overrideParameters" ],
		},

		renderPolicyExecutionsHistory: IMapperMethod & {
		argNames: [ "parameters", "overrideParameters" ],
		},

		renderPolicyReport: IMapperMethod & {
		argNames: [ "parameters", "overrideParameters" ],
		},

		renderRecentAdminActionReport: IMapperMethod & {
		argNames: [ "parameters", "overrideParameters" ],
		},

		renderRecentAdminActions: IMapperMethod & {
		argNames: [ "parameters", "overrideParameters", "isAutoRefresh" ],
		},

		reorderTargetedSites: IMapperMethod & {
		argNames: [ "siteIds" ],
		},

		requestContentManagementAssessment: IMapperMethod & {
		},

		restoreContainer: IMapperMethod & {
		argNames: [ "containerId" ],
		},

		restoreDeletedSite: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		restoreDeletedSiteById: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		restoreDeletedSitePreferId: IMapperMethod & {
		argNames: [ "siteUrl", "siteId" ],
		},

		restoreSPODeletedContainerByContainerId: IMapperMethod & {
		argNames: [ "containerId" ],
		},

		restoreSPODeletedContainerByContainerSiteUrl: IMapperMethod & {
		argNames: [ "containerSiteUrl" ],
		},

		revokeHubSiteRightsById: IMapperMethod & {
		argNames: [ "hubSiteId", "principals" ],
		},

		sendEmail: IMapperMethod & {
		argNames: [ "siteUrl", "activityEventJson" ],
		},

		setCopilotPromoOptInStatus: IMapperMethod & {
		argNames: [ "copilotPromoOptInEnabled" ],
		},

		setDefaultView: IMapperMethod & {
		argNames: [ "viewId", "listName" ],
		},

		setFileVersionPolicy: IMapperMethod & {
		argNames: [ "isAutoTrimEnabled", "majorVersionLimit", "expireVersionsAfterDays" ],
		},

		setFileVersionPolicyForLibrary: IMapperMethod & {
		argNames: [ "siteUrl", "listParams", "versionPolicyParams" ],
		},

		setIBSegmentsOnSite: IMapperMethod & {
		argNames: [ "siteId", "segments", "ibMode" ],
		},

		setIdleSessionSignOutForUnmanagedDevices: IMapperMethod & {
		argNames: [ "enabled", "warnAfter", "signOutAfter" ],
		},

		setJitDlpPolicyData: IMapperMethod & {
		argNames: [ "markAllFilesAsSensitiveByDefault", "odbSensitivityRefreshWindowInHours", "executionMode" ],
		},

		setOrgAssetsWithConfig: IMapperMethod & {
		argNames: [ "libUrl", "thumbnailUrl", "orgAssetType", "configParam" ],
		},

		setOrgAssetsWithType: IMapperMethod & {
		argNames: [ "libUrl", "thumbnailUrl", "orgAssetType" ],
		},

		setSPEmbeddedApplicationPermissions: IMapperMethod & {
		argNames: [ "spSyntexApplicationProperties" ],
		},

		setSPHSite: IMapperMethod & {
		argNames: [ "sphSiteUrl" ],
		},

		setSPHSiteWithConfiguration: IMapperMethod & {
		argNames: [ "sphSiteUrl", "configuration" ],
		},

		setSPOContainerProperties: IMapperMethod & {
		argNames: [ "spContainerProperties" ],
		},

		setSPOContainerType: IMapperMethod & {
		argNames: [ "containerTypeProperties" ],
		},

		setSPOContainerTypeConfiguration: IMapperMethod & {
		argNames: [ "spContainerTypeConfigurationProperties" ],
		},

		setSPORestrictedSearchMode: IMapperMethod & {
		argNames: [ "mode" ],
		},

		setSPOSyntexApplicationsClearOverrideSharingCapability: IMapperMethod & {
		argNames: [ "owningApplicationId" ],
		},

		setSPOSyntexApplicationsSharingCapability: IMapperMethod & {
		argNames: [ "owningApplicationId", "sharingCapability", "overrideTenantSharingCapability" ],
		},

		setSensitivityLabelContainer: IMapperMethod & {
		argNames: [ "containerId", "sensitivityLabel" ],
		},

		setSiteAdministrators: IMapperMethod & {
		argNames: [ "siteAdministratorsFieldsData" ],
		},

		setSiteSecondaryAdministrators: IMapperMethod & {
		argNames: [ "secondaryAdministratorsFieldsData" ],
		},

		setSiteUserGroups: IMapperMethod & {
		argNames: [ "siteUserGroupsData" ],
		},

		setSyntexPaygFeatureActivation: IMapperMethod & {
		argNames: [ "featureName", "activationStatus" ],
		},

		setTrackViewFeatureAlwaysVisible: IMapperMethod & {
		},

		swapSite: IMapperMethod & {
		argNames: [ "sourceUrl", "targetUrl", "archiveUrl" ],
		},

		swapSiteWithSmartGestureOption: IMapperMethod & {
		argNames: [ "sourceUrl", "targetUrl", "archiveUrl", "includeSmartGestures" ],
		},

		swapSiteWithSmartGestureOptionForce: IMapperMethod & {
		argNames: [ "sourceUrl", "targetUrl", "archiveUrl", "includeSmartGestures", "force" ],
		},

		unarchiveSiteById: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		unlockSensitivityLabelEncryptedFile: IMapperMethod & {
		argNames: [ "fileUrl", "justificationText" ],
		},

		unregisterHubSite: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		update: IMapperMethod & {
		},

		updateFileSearchVisibility: IMapperMethod & {
		argNames: [ "url", "isHidden" ],
		},

		updateGroupSiteProperties: IMapperMethod & {
		argNames: [ "groupId", "siteId", "updateType", "parameters" ],
		},

		updatePolicyDefinition: IMapperMethod & {
		argNames: [ "itemId", "policyInputParameters", "policyOperation" ],
		},

		updateRansomwareActivity: IMapperMethod & {
		argNames: [ "listItemId", "columnValues", "category" ],
		},

		updateRansomwareEvent: IMapperMethod & {
		argNames: [ "listItemId", "columnValues", "forceResolveActivity", "category" ],
		},

		updateSPOContainerUserRole: IMapperMethod & {
		argNames: [ "ContainerId", "loginName", "role" ],
		},

		updateSiteActivityData: IMapperMethod & {
		},

		updateTargetedSite: IMapperMethod & {
		argNames: [ "siteUrl", "configurationParam" ],
		},

		updateTenantAdminListItem: IMapperMethod & {
		argNames: [ "listItemId", "columnValues", "listName" ],
		},

		updateTenantAdminListView: IMapperMethod & {
		argNames: [ "viewId", "viewXml" ],
		},

		validateHomeSite: IMapperMethod & {
		argNames: [ "validationActionType", "siteUrl" ],
		},

		validateMultipleHomeSitesParameterExists: IMapperMethod & {
		argNames: [ "hasParameters" ],
		},

	}

	"Microsoft.Online.SharePoint.TenantAdministration.TenantAdminSettingsService": {
		properties?: Array<string>;
		getTenantSharingStatus: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"Microsoft.Online.SharePoint.TenantManagement.ExternalUser.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "uniqueId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.Online.SharePoint.TenantManagement.Office365Tenant": {
		properties?: Array<string>;
		addPublicCdnOrigin: IMapperMethod & {
		argNames: [ "origin" ],
		},

		addSdnProvider: IMapperMethod & {
		argNames: [ "identifier", "license" ],
		},

		addTenantCdnOrigin: IMapperMethod & {
		argNames: [ "cdnType", "originUrl" ],
		},

		addTenantTheme: IMapperMethod & {
		argNames: [ "name", "themeJson" ],
		},

		addToOrgAssetsLibAndCdn: IMapperMethod & {
		argNames: [ "cdnType", "libUrl", "thumbnailUrl", "orgAssetType", "defaultOriginAdded" ],
		},

		addToOrgAssetsWithConfig: IMapperMethod & {
		argNames: [ "cdnType", "libUrl", "thumbnailUrl", "orgAssetType", "defaultOriginAdded", "configParam" ],
		},

		createTenantCdnDefaultOrigins: IMapperMethod & {
		argNames: [ "cdnType" ],
		},

		deleteImportProfilePropertiesJob: IMapperMethod & {
		argNames: [ "jobId" ],
		},

		deleteTenantTheme: IMapperMethod & {
		argNames: [ "name" ],
		},

		disableSharingForNonOwnersOfSite: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		getAllTenantThemes: IMapperMethod & {
		},

		getCustomFontsMinorVersion: IMapperMethod & {
		argNames: [ "libUrl" ],
		},

		getExternalUsers: IMapperMethod & {
		argNames: [ "position", "pageSize", "filter", "sortOrder" ],
		},

		getExternalUsersForSite: IMapperMethod & {
		argNames: [ "siteUrl", "position", "pageSize", "filter", "sortOrder" ],
		},

		getExternalUsersWithSortBy: IMapperMethod & {
		argNames: [ "position", "pageSize", "filter", "sortPropertyName", "sortOrder" ],
		},

		getHideDefaultThemes: IMapperMethod & {
		},

		getIdleSessionSignOutForUnmanagedDevices: IMapperMethod & {
		},

		getImportProfilePropertyJob: IMapperMethod & {
		argNames: [ "jobId" ],
		},

		getImportProfilePropertyJobs: IMapperMethod & {
		},

		getTenantCdnEnabled: IMapperMethod & {
		argNames: [ "cdnType" ],
		},

		getTenantCdnOrigins: IMapperMethod & {
		argNames: [ "cdnType" ],
		},

		getTenantCdnPolicies: IMapperMethod & {
		argNames: [ "cdnType" ],
		},

		getTenantTheme: IMapperMethod & {
		argNames: [ "name" ],
		},

		incrementCustomFontsMinorVersion: IMapperMethod & {
		argNames: [ "libUrl" ],
		},

		isSharingDisabledForNonOwnersOfSite: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		logCustomFontsLargeUpload: IMapperMethod & {
		argNames: [ "numCatalogs", "numFonts", "totalExpectedFiles" ],
		},

		queueImportProfileProperties: IMapperMethod & {
		argNames: [ "idType", "sourceDataIdProperty", "propertyMap", "sourceUri" ],
		},

		removeExternalUsers: IMapperMethod & {
		argNames: [ "uniqueIds" ],
		},

		removeFromOrgAssets: IMapperMethod & {
		argNames: [ "libUrl", "listId" ],
		},

		removeFromOrgAssetsAndCdn: IMapperMethod & {
		argNames: [ "remove", "cdnType", "libUrl" ],
		},

		removePreviousCustomFontUpload: IMapperMethod & {
		argNames: [ "majVersions", "libUrl" ],
		},

		removePublicCdnOrigin: IMapperMethod & {
		argNames: [ "originId" ],
		},

		removeSdnProvider: IMapperMethod & {
		},

		removeTenantCdnOrigin: IMapperMethod & {
		argNames: [ "cdnType", "originUrl" ],
		},

		revokeAllUserSessions: IMapperMethod & {
		argNames: [ "userName" ],
		},

		revokeAllUserSessionsByPuid: IMapperMethod & {
		argNames: [ "puidList" ],
		},

		setBlockDownloadFileTypePolicyData: IMapperMethod & {
		argNames: [ "blockDownloadFileTypePolicy", "fileTypeIds", "excludedBlockDownloadGroupIds" ],
		},

		setBlockDownloadFileTypePolicyExclusionList: IMapperMethod & {
		argNames: [ "excludedBlockDownloadGroupIds" ],
		},

		setHideDefaultThemes: IMapperMethod & {
		argNames: [ "hideDefaultThemes" ],
		},

		setIdleSessionSignOutForUnmanagedDevices: IMapperMethod & {
		argNames: [ "enabled", "warnAfter", "signOutAfter" ],
		},

		setJitDlpPolicyData: IMapperMethod & {
		argNames: [ "markAllFilesAsSensitiveByDefault", "odbSensitivityRefreshWindowInHours", "executionMode" ],
		},

		setOrgAssetsLib: IMapperMethod & {
		argNames: [ "libUrl", "thumbnailUrl", "orgAssetType" ],
		},

		setOrgAssetsLibWithConfig: IMapperMethod & {
		argNames: [ "libUrl", "thumbnailUrl", "orgAssetType", "configParam" ],
		},

		setTenantCdnEnabled: IMapperMethod & {
		argNames: [ "cdnType", "isEnabled" ],
		},

		setTenantCdnPolicy: IMapperMethod & {
		argNames: [ "cdnType", "policy", "policyValue" ],
		},

		syncAadB2BManagementPolicy: IMapperMethod & {
		},

		updateTenantTheme: IMapperMethod & {
		argNames: [ "name", "themeJson" ],
		},

		uploadCustomFontsAndCatalogLib: IMapperMethod & {
		argNames: [ "customFontFiles", "libUrl" ],
		},

	}

	"Microsoft.SharePoint.Administration.FeatureDefinition.Collection": {
		properties?: Array<string>;
		getFeatureDefinition: IMapperMethod & {
		argNames: [ "featureDisplayName", "compatibilityLevel" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.SharePoint.Administration.SPAnalyticsUsageService": {
		properties?: Array<string>;
		logevent: IMapperMethod & {
		argNames: [ "usageEntry" ],
		},

	}

	"Microsoft.SharePoint.Administration.SPAppStateQueryJobDefinition": {
		properties?: Array<string>;
		performFastRevokeWithClientIds: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Administration.SiteMove.Service.SiteMoveService": {
		properties?: Array<string>;
		acquireSystemSiteLock: IMapperMethod & {
		argNames: [ "lockRequestor", "lockType", "leaseDurationInMinutes" ],
		},

		clearSiteRelocationMarker: IMapperMethod & {
		},

		extendSystemSiteLockExpiration: IMapperMethod & {
		argNames: [ "leaseDurationInMinute" ],
		},

		getCPSChangeToken: IMapperMethod & {
		},

		getCPSSiteDeleteReason: IMapperMethod & {
		},

		getDataChunks: IMapperMethod & {
		},

		getDataReader: IMapperMethod & {
		argNames: [ "sqlCommandText" ],
		},

		getDatabaseProperties: IMapperMethod & {
		},

		getEventCacheDataChunk: IMapperMethod & {
		argNames: [ "lastCopiedId", "searchChangeToken" ],
		},

		getEventCacheExColumns: IMapperMethod & {
		},

		getEventCacheExDataChunk: IMapperMethod & {
		argNames: [ "lastCopiedId" ],
		},

		getEventCacheIds: IMapperMethod & {
		argNames: [ "lastCopiedId" ],
		},

		getMarker: IMapperMethod & {
		},

		getScalarValue: IMapperMethod & {
		argNames: [ "sqlCommandText" ],
		},

		getServiceInfo: IMapperMethod & {
		},

		getSiteProperties: IMapperMethod & {
		},

		getTenantWorkflows: IMapperMethod & {
		},

		getValidationChunks: IMapperMethod & {
		},

		isDbReadOnly: IMapperMethod & {
		},

		isSystemSiteLocked: IMapperMethod & {
		argNames: [ "lockRequestor" ],
		},

		lockSite: IMapperMethod & {
		},

		pauseCrawling: IMapperMethod & {
		argNames: [ "originalCPSDeleteReason" ],
		},

		processStorageMetricsChanges: IMapperMethod & {
		},

		releaseSystemSiteLock: IMapperMethod & {
		argNames: [ "lockRequestor" ],
		},

		removeSiteMapEntry: IMapperMethod & {
		},

		resumeCrawling: IMapperMethod & {
		argNames: [ "originalCPSDeleteReason" ],
		},

		setSiteMoveState: IMapperMethod & {
		argNames: [ "state" ],
		},

		sourceCleanupAfterMove: IMapperMethod & {
		argNames: [ "isDeleted" ],
		},

		unlockSiteOnFailure: IMapperMethod & {
		argNames: [ "originalLockFlags" ],
		},

	}

	"Microsoft.SharePoint.Administration.SiteMove.Service.SiteRelocationJobManagementService": {
		properties?: Array<string>;
		enqueueSiteRelocationJob: IMapperMethod & {
		argNames: [ "siteId", "siteSubscriptionId", "siteUrl", "sourceDatabaseId", "targetDatabaseId", "siteMoveFlags", "preferredStartTimeInUtc" ],
		},

		getServiceInfo: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.AuthPolicy.Events.SPAuthEvent.Collection": {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] },

		roleAssignmentMSGraphNotify: IMapperMethod & {
		argNames: [ "tenant", "action", "type", "resourcePayload", "id", "containerId" ],
		},

	}

	"Microsoft.SharePoint.AuthPolicy.SPTenantIBPolicyComplianceReport.Collection": {
		properties?: Array<string>;
		getAllReportStates: IMapperMethod & {
		},

		getReportById: IMapperMethod & {
		argNames: [ "ReportId", "ShowIncompatibleSegmentsPairsAndInvalidSegmentsFilesContents" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		removeFinalizedReport: IMapperMethod & {
		argNames: [ "ReportId" ],
		},

	}

	"Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog": {
		properties?: Array<string>;
		getCrawledUrls: IMapperMethod & {
		argNames: [ "getCountOnly", "maxRows", "queryString", "isLike", "contentSourceID", "errorLevel", "errorID", "startDateTime", "endDateTime" ],
		},

		getUnsuccesfulCrawledUrls: IMapperMethod & {
		argNames: [ "displayUrl", "startDateTime", "endDateTime" ],
		},

	}

	"Microsoft.SharePoint.Client.Search.Administration.SiteContentProcessingInfoProvider": {
		properties?: Array<string>;
		getAzureContainerToken: IMapperMethod & {
		},

		notifyContentProcessingStatus: IMapperMethod & {
		argNames: [ "webId", "listId", "uniqueId", "properties" ],
		},

		reportContentProcessingStatus: IMapperMethod & {
		argNames: [ "webId", "listId", "uniqueId", "azureContainerTokenUri", "encryptionKey", "priority", "errorCode", "errorDescription" ],
		},

	}

	"Microsoft.SharePoint.Client.Search.Administration.TenantCrawlVersionsInfoProvider": {
		properties?: Array<string>;
		disableCrawlVersions: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		disableCrawlVersionsForTenant: IMapperMethod & {
		},

		enableCrawlVersions: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		enableCrawlVersionsForTenant: IMapperMethod & {
		},

		getSiteCrawlVersionStatus: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		isCrawlVersionsEnabled: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		isCrawlVersionsEnabledForTenant: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Client.Search.Administration.TenantRecycleBinInfoProvider": {
		properties?: Array<string>;
		disableRecycleBinDiscoverabilityForTenant: IMapperMethod & {
		},

		enableRecycleBinDiscoverabilityForTenant: IMapperMethod & {
		},

		isRecycleBinDiscoverabilityEnabledForTenant: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Client.Search.Analytics.SignalStore": {
		properties?: Array<string>;
		signals: IMapperMethod & {
		argNames: [ "signals" ],
		},

	}

	"Microsoft.SharePoint.Client.Search.Query.RankingLabeling": {
		properties?: Array<string>;
		addJudgment: IMapperMethod & {
		argNames: [ "userQuery", "url", "labelId" ],
		},

		getJudgementsForQuery: IMapperMethod & {
		argNames: [ "query" ],
		},

		normalizeResultUrl: IMapperMethod & {
		argNames: [ "url" ],
		},

	}

	"Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "matchType", "matchValue", "boost" ],
		},

		clear: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Client.Search.Query.SortCollection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "strProperty", "direction" ],
		},

		clear: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Client.Search.Query.StringCollection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "property" ],
		},

		clear: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.ClientSideComponent.HostedApp": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		updateWebPartData: IMapperMethod & {
		argNames: [ "webPartDataAsJson" ],
		},

	}

	"Microsoft.SharePoint.ClientSideComponent.HostedAppsManager": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "webPartDataAsJson", "hostType" ],
		},

		addEx: IMapperMethod & {
		argNames: [ "webPartDataAsJson", "hostType" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

	}

	"Microsoft.SharePoint.Comments.comment": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		like: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		unlike: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Comments.comment.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "text" ],
		},

		deleteAll: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.SharePoint.Convergence.ConsumerPermissions": {
		properties?: Array<string>;
		grantConsumerSitePermissions: IMapperMethod & {
		},

		revokeConsumerSitePermissions: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Convergence.MigrationCompleteStateApi": {
		properties?: Array<string>;
		addState: IMapperMethod & {
		},

		isDoclibContributorOwnerEnabled: IMapperMethod & {
		},

		isSuspended: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Convergence.OdcMetadataCleanedUpApi": {
		properties?: Array<string>;
		addState: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.EmployeeEngagement.VivaConnectionsPage": {
		properties?: Array<string>;
		getData: IMapperMethod & {
		},

		setSpotlightConfiguration: IMapperMethod & {
		argNames: [ "configuration" ],
		},

	}

	"Microsoft.SharePoint.EmployeeEngagement.VivaHome": {
		properties?: Array<string>;
		addImage: IMapperMethod & {
		argNames: [ "fileName", "imageStream" ],
		},

		addImageFromExternalUrl: IMapperMethod & {
		argNames: [ "fileName", "externalUrl" ],
		},

		titleRegion: IMapperMethod & {
		argNames: [ "vivaHomeTitleRegion" ],
		},

		updateGoToVCButtonFlag: IMapperMethod & {
		argNames: [ "isGoBackToConnectionsButtonDisabled" ],
		},

	}

	"Microsoft.SharePoint.EmployeeEngagement.VivaResources": {
		properties?: Array<string>;
		addLink: IMapperMethod & {
		argNames: [ "newLink" ],
		},

		getLinks: IMapperMethod & {
		},

		removeLink: IMapperMethod & {
		argNames: [ "id" ],
		},

		reorderLink: IMapperMethod & {
		argNames: [ "linkId", "prevLinkId" ],
		},

		updateLink: IMapperMethod & {
		argNames: [ "updatedLink" ],
		},

		updateLinks: IMapperMethod & {
		argNames: [ "links" ],
		},

	}

	"Microsoft.SharePoint.IR.IRMigration": {
		properties?: Array<string>;
		deleteAndRecreateIRList: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.IdentityModel.SPAllOrgSGManager": {
		properties?: Array<string>;
		createAllOrgSecurityGroup: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Insights.SPTenantIBInsightsReportManager": {
		properties?: Array<string>;
		createReport: IMapperMethod & {
		},

		getAllReportsMetadata: IMapperMethod & {
		},

		getReport: IMapperMethod & {
		argNames: [ "reportId", "siteType" ],
		},

		getReportData: IMapperMethod & {
		argNames: [ "reportId", "siteType", "section" ],
		},

	}

	"Microsoft.SharePoint.Internal.ActivityLogger": {
		properties?: Array<string>;
		feedbackDirect: IMapperMethod & {
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json" ],
		},

		feedbackIndirect: IMapperMethod & {
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json" ],
		},

		logActivity: IMapperMethod & {
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "ExtraProperties", "AuditCreationTime", "IsOffline" ],
		},

		logActivityBulk: IMapperMethod & {
		argNames: [ "Operation", "SiteId", "WebId", "ListId", "Requests" ],
		},

	}

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CardDesigns": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "description", "id", "serializedProperties", "showInToolbox", "title" ],
		},

		update: IMapperMethod & {
		argNames: [ "description", "id", "serializedProperties", "showInToolbox", "title" ],
		},

	}

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata": {
		properties?: Array<string>;
		deploy: IMapperMethod & {
		argNames: [ "skipFeatureDeployment", "isUpdatingApp" ],
		},

		install: IMapperMethod & {
		},

		remove: IMapperMethod & {
		},

		retract: IMapperMethod & {
		},

		uninstall: IMapperMethod & {
		},

		upgrade: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "absolutePath" ],
		},

		getById: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		remove: IMapperMethod & {
		argNames: [ "absolutePath" ],
		},

		removeById: IMapperMethod & {
		argNames: [ "siteId" ],
		},

	}

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "Url", "Overwrite", "Content" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TeamsPackageDownload": {
		properties?: Array<string>;
		downloadTeams: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "Url", "Overwrite", "Content" ],
		},

		addAndDeployStoreAppById: IMapperMethod & {
		argNames: [ "CallerId", "CMU", "isUpdatingApp", "Overwrite", "SkipFeatureDeployment", "StoreAssetId" ],
		},

		addStoreApp: IMapperMethod & {
		argNames: [ "Url", "Overwrite", "IconUrl", "Publisher", "ShortDescription", "StoreAssetId", "Content" ],
		},

		appRequests: IMapperMethod & {
		argNames: [ "AppRequestInfo" ],
		},

		downloadTeamsSolution: IMapperMethod & {
		argNames: [ "id" ],
		},

		downloadTeamsSolutionByUniqueId: IMapperMethod & {
		argNames: [ "id" ],
		},

		getAppById: IMapperMethod & {
		argNames: [ "itemUniqueId" ],
		},

		isAppUpgradeAvailable: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		sendAppRequestStatusNotificationEmail: IMapperMethod & {
		argNames: [ "RequestGuid" ],
		},

		solutionContainsTeamsComponent: IMapperMethod & {
		argNames: [ "id" ],
		},

		syncSolutionToTeams: IMapperMethod & {
		argNames: [ "id" ],
		},

		syncSolutionToTeamsByUniqueId: IMapperMethod & {
		argNames: [ "id" ],
		},

		updateMyRequestStatus: IMapperMethod & {
		argNames: [ "RequestId", "Status" ],
		},

		upload: IMapperMethod & {
		argNames: [ "Url", "Overwrite", "Content" ],
		},

	}

	"Microsoft.SharePoint.MultiGeo.SPMultiGeoProxy": {
		properties?: Array<string>;
		remoteThumbnail: IMapperMethod & {
		argNames: [ "url" ],
		},

	}

	"Microsoft.SharePoint.Navigation.REST.HomeSiteNavigationSettings": {
		properties?: Array<string>;
		enableGlobalNavigation: IMapperMethod & {
		argNames: [ "isEnabled" ],
		},

	}

	"Microsoft.SharePoint.Navigation.REST.NavigationServiceRest": {
		properties?: Array<string>;
		currentResourcesNav: IMapperMethod & {
		argNames: [ "source", "includeVivaResources" ],
		},

		getPublishingNavigationProviderType: IMapperMethod & {
		argNames: [ "mapProviderName" ],
		},

		globalNav: IMapperMethod & {
		argNames: [ "source", "includeVivaResources" ],
		},

		globalNavEnabled: IMapperMethod & {
		},

		homeSiteNavigation: IMapperMethod & {
		argNames: [ "source" ],
		},

		menuNodeKey: IMapperMethod & {
		argNames: [ "currentUrl", "mapProviderName" ],
		},

		menuState: IMapperMethod & {
		argNames: [ "menuNodeKey", "mapProviderName", "depth", "customProperties" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		saveMenuState: IMapperMethod & {
		argNames: [ "menuState", "mapProviderName" ],
		},

		setGlobalNavEnabled: IMapperMethod & {
		argNames: [ "isEnabled" ],
		},

	}

	"Microsoft.SharePoint.OrgNewsSite.OrgNewsSiteApi": {
		properties?: Array<string>;
		details: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Photos.PhotosMigration": {
		properties?: Array<string>;
		migratePhotosData: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Portal.GroupService": {
		properties?: Array<string>;
		getGroupImage: IMapperMethod & {
		argNames: [ "id", "hash", "color" ],
		},

		setGroupImage: IMapperMethod & {
		argNames: [ "imageStream" ],
		},

		syncGroupProperties: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Portal.GroupSiteManager": {
		properties?: Array<string>;
		cacheCurrentUserJoinedTeamsResult: IMapperMethod & {
		argNames: [ "joinedTeams" ],
		},

		canUserCreateGroup: IMapperMethod & {
		},

		clearCurrentUserTeamsCache: IMapperMethod & {
		},

		create: IMapperMethod & {
		argNames: [ "groupId" ],
		},

		createGroup: IMapperMethod & {
		argNames: [ "displayName", "alias", "isPublic", "ownerPrincipalNames", "description", "creationOptions" ],
		},

		createGroupEx: IMapperMethod & {
		argNames: [ "displayName", "alias", "isPublic", "optionalParams" ],
		},

		createGroupForSite: IMapperMethod & {
		argNames: [ "displayName", "alias", "isPublic", "optionalParams" ],
		},

		delete: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		ensureTeamForGroup: IMapperMethod & {
		argNames: [ "siteUrl", "teamTemplate" ],
		},

		ensureTeamForGroupEx: IMapperMethod & {
		argNames: [ "siteUrl", "teamTemplate" ],
		},

		getAllOrgLabels: IMapperMethod & {
		argNames: [ "pageNumber" ],
		},

		getCurrentUserJoinedTeams: IMapperMethod & {
		argNames: [ "getLogoData", "forceCacheUpdate" ],
		},

		getCurrentUserSharedChannelMemberGroups: IMapperMethod & {
		},

		getCurrentUserTeamConnectedMemberGroups: IMapperMethod & {
		},

		getGroupCreationContext: IMapperMethod & {
		},

		getGroupSiteConversionData: IMapperMethod & {
		},

		getParentGroupForChannel: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		getSharedChannelSharePointUrl: IMapperMethod & {
		argNames: [ "tenantId", "groupId" ],
		},

		getSiteStatus: IMapperMethod & {
		argNames: [ "groupId" ],
		},

		getTeamChannelFilesUrl: IMapperMethod & {
		argNames: [ "teamId", "channelId" ],
		},

		getTeamChannels: IMapperMethod & {
		argNames: [ "teamId", "useStagingEndpoint" ],
		},

		getTeamChannelsDirect: IMapperMethod & {
		argNames: [ "teamId" ],
		},

		getTeamChannelsEx: IMapperMethod & {
		argNames: [ "teamId" ],
		},

		getTeamChannelsWithSiteUrl: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		getUserSharedChannelMemberGroups: IMapperMethod & {
		argNames: [ "userName" ],
		},

		getUserTeamConnectedMemberGroups: IMapperMethod & {
		argNames: [ "userName" ],
		},

		getValidSiteUrlFromAlias: IMapperMethod & {
		argNames: [ "alias", "managedPath", "isTeamSite" ],
		},

		hideTeamifyPrompt: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		isTeamifyPromptHidden: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		notebook: IMapperMethod & {
		argNames: [ "groupId" ],
		},

		pinToTeam: IMapperMethod & {
		argNames: [ "requestParams" ],
		},

		recentAndJoinedTeams: IMapperMethod & {
		argNames: [ "includeRecent", "includeTeams", "includePinned", "existingJoinedTeamsData" ],
		},

	}

	"Microsoft.SharePoint.Portal.SPHubSitesUtility": {
		properties?: Array<string>;
		getHubSites: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Portal.SPSiteManager": {
		properties?: Array<string>;
		archiveTeamChannelSite: IMapperMethod & {
		argNames: [ "siteId", "archive" ],
		},

		areSegmentsCompatible: IMapperMethod & {
		argNames: [ "segments" ],
		},

		canCreateHubJoinedSite: IMapperMethod & {
		argNames: [ "hubSiteId" ],
		},

		create: IMapperMethod & {
		argNames: [ "request" ],
		},

		delete: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		getCompatibleSegments: IMapperMethod & {
		argNames: [ "segments" ],
		},

		getIBSegmentLabels: IMapperMethod & {
		argNames: [ "IBSegments" ],
		},

		getTeamChannelSiteOwner: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		landingSiteUrlFromName: IMapperMethod & {
		argNames: [ "siteName" ],
		},

		restoreTeamsChannelSite: IMapperMethod & {
		argNames: [ "siteId", "relatedGroupId" ],
		},

		setIBSegments: IMapperMethod & {
		argNames: [ "IBSegments" ],
		},

		setTeamChannelSiteOwner: IMapperMethod & {
		argNames: [ "siteId", "logonName", "secondaryLogonName" ],
		},

		siteUrl: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		status: IMapperMethod & {
		argNames: [ "url" ],
		},

		updateWorkflow2013Endpoint: IMapperMethod & {
		argNames: [ "workflowServiceAddress", "workflowHostname" ],
		},

		vivaBackendSiteUrlFromName: IMapperMethod & {
		argNames: [ "siteName" ],
		},

	}

	"Microsoft.SharePoint.Portal.SharePointHomeServiceContextBuilder": {
		properties?: Array<string>;
		context: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Portal.SiteIconManager": {
		properties?: Array<string>;
		getSiteLogo: IMapperMethod & {
		argNames: [ "siteUrl", "target", "type", "hash" ],
		},

		setSiteLogo: IMapperMethod & {
		argNames: [ "relativeLogoUrl", "type", "aspect", "focalx", "focaly", "isFocalPatch" ],
		},

	}

	"Microsoft.SharePoint.Portal.SiteLinkingManager": {
		properties?: Array<string>;
		getSiteLinks: IMapperMethod & {
		},

		linkGroup: IMapperMethod & {
		argNames: [ "groupId" ],
		},

		unlinkGroup: IMapperMethod & {
		argNames: [ "groupId" ],
		},

	}

	"Microsoft.SharePoint.Portal.VivaSiteManager": {
		properties?: Array<string>;
		ensureVivaSite: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.QuotaManagement.Consumer.NonQuotaBackfillApi": {
		properties?: Array<string>;
		backfillNonQuota: IMapperMethod & {
		argNames: [ "backfillUserfacts" ],
		},

	}

	"Microsoft.SharePoint.QuotaManagement.Consumer.NonQuotaMigrationApi": {
		properties?: Array<string>;
		migrateNonQuota: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.QuotaManagement.Consumer.QuotaMigrationApi": {
		properties?: Array<string>;
		migrateQuota: IMapperMethod & {
		argNames: [ "IsMaxQuotaCall" ],
		},

	}

	"Microsoft.SharePoint.SectionDesignIdeas.SectionDesignIdeasApi": {
		properties?: Array<string>;
		getSectionDesignIdeas: IMapperMethod & {
		argNames: [ "title", "subTitle" ],
		},

		ping: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.Sharing.Internal.SharingRestrictions": {
		properties?: Array<string>;
		update: IMapperMethod & {
		},

	}

	"Microsoft.SharePoint.TenantCdn.TenantCdnApi": {
		properties?: Array<string>;
		getCdnUrls: IMapperMethod & {
		argNames: [ "items" ],
		},

		isFolderUrlsInTenantCdn: IMapperMethod & {
		argNames: [ "urls", "cdnType" ],
		},

	}

	"Microsoft.SharePoint.Webhooks.Subscription": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		argNames: [ "parameters" ],
		},

	}

	"Microsoft.SharePoint.Webhooks.Subscription.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		remove: IMapperMethod & {
		argNames: [ "subscriptionId" ],
		},

	}

	"OBA.Server.ServerWrapper.Diagnostics": {
		properties?: Array<string>;
		status: IMapperMethod & {
		},

	}

	"OBA.Server.ServerWrapper.Reporting": {
		properties?: Array<string>;
		publishReport: IMapperMethod & {
		argNames: [ "odataPostBodyStm" ],
		},

	}

	"OBA.Server.ServerWrapper.Taskflow": {
		properties?: Array<string>;
		processTask: IMapperMethod & {
		argNames: [ "requestBodyStream" ],
		},

	}

	"PS.BaseCalendarException": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"PS.Calendar": {
		properties?: Array<string>;
		copyTo: IMapperMethod & {
		argNames: [ "name" ],
		},

		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.Calendar.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"PS.CalendarException": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.CalendarException.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.CustomField": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.CustomField.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByAppAlternateId: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"PS.DraftAssignment.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.DraftProjectResource.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		addEnterpriseResourceById: IMapperMethod & {
		argNames: [ "resourceId" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.DraftTask.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.DraftTaskLink.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.EngagementComment.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "comment" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.EnterpriseProjectType": {
		properties?: Array<string>;
		addDepartment: IMapperMethod & {
		argNames: [ "departmentValueGuid" ],
		},

		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		removeDepartment: IMapperMethod & {
		argNames: [ "departmentValueGuid" ],
		},

		updateCreatePDP: IMapperMethod & {
		argNames: [ "pdp" ],
		},

	}

	"PS.EnterpriseProjectType.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"PS.EnterpriseResource": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		forceCheckIn: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		updateClaimsAccount: IMapperMethod & {
		argNames: [ "newClaimsAccount" ],
		},

	}

	"PS.EnterpriseResource.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"PS.EnterpriseResourceCostRate": {
		properties?: Array<string>;
		rESTfulUpdate: IMapperMethod & {
		},

		restfulDelete: IMapperMethod & {
		},

	}

	"PS.EnterpriseResourceCostRate.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByDateUrl: IMapperMethod & {
		argNames: [ "effectiveDate" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.EntityLink": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"PS.EntityLink.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"PS.Event.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		getByInt: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.EventHandler": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.EventHandler.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"PS.LookupCost": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"PS.LookupDate": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"PS.LookupDuration": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"PS.LookupEntry": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"PS.LookupEntry.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByAppAlternateId: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.LookupNumber": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"PS.LookupTable": {
		properties?: Array<string>;
		addMask: IMapperMethod & {
		argNames: [ "mask" ],
		},

		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		updateMask: IMapperMethod & {
		argNames: [ "mask", "level" ],
		},

	}

	"PS.LookupTable.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByAppAlternateId: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"PS.LookupText": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.Phase": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.Phase.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"PS.PlanAssignment": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.PlanAssignment.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.PlanAssignmentInterval.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getByStart: IMapperMethod & {
		argNames: [ "start" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.Project": {
		properties?: Array<string>;
		getResourcePlanByUrl: IMapperMethod & {
		argNames: [ "start", "end", "scale" ],
		},

		leaveProjectStage: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		readyToLeaveProjectStage: IMapperMethod & {
		},

		updateIdeaListItemStatus: IMapperMethod & {
		argNames: [ "status" ],
		},

	}

	"PS.ProjectDetailPage.Collection": {
		properties?: Array<string>;
		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.ProjectEngagement": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		getTimephasedByUrl: IMapperMethod & {
		argNames: [ "start", "end", "scale", "contourType" ],
		},

	}

	"PS.ProjectEngagement.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"PS.ProjectEngagementTimephasedPeriod.Collection": {
		properties?: Array<string>;
		getByStartUrl: IMapperMethod & {
		argNames: [ "start" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.ProjectServer": {
		properties?: Array<string>;
		getDeletedPublishedAssignments: IMapperMethod & {
		argNames: [ "deletedDate" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		stopDelegation: IMapperMethod & {
		},

	}

	"PS.ProjectWorkflowInstance": {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] },

		restartWorkflow: IMapperMethod & {
		},

		restartWorkflowSkipToStage: IMapperMethod & {
		argNames: [ "stageId" ],
		},

	}

	"PS.ProjectWorkflowInstance.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.PublishedAssignment.Collection": {
		properties?: Array<string>;
		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.PublishedProject": {
		properties?: Array<string>;
		checkOut: IMapperMethod & {
		},

		createProjectSite: IMapperMethod & {
		argNames: [ "siteName" ],
		},

		delete: IMapperMethod & {
		},

		getResourcePlanByUrl: IMapperMethod & {
		argNames: [ "start", "end", "scale" ],
		},

		leaveProjectStage: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		readyToLeaveProjectStage: IMapperMethod & {
		},

		submitToWorkflow: IMapperMethod & {
		},

		unlinkProjectSite: IMapperMethod & {
		},

		updateIdeaListItemStatus: IMapperMethod & {
		argNames: [ "status" ],
		},

		updateVisibilityCustomFields: IMapperMethod & {
		},

	}

	"PS.PublishedProject.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

		validate: IMapperMethod & {
		},

	}

	"PS.PublishedProjectResource.Collection": {
		properties?: Array<string>;
		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.PublishedTask": {
		properties?: Array<string>;
		addTaskPlanLink: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		deleteTaskPlanLink: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.PublishedTask.Collection": {
		properties?: Array<string>;
		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.PublishedTaskLink.Collection": {
		properties?: Array<string>;
		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.QueueJob": {
		properties?: Array<string>;
		cancel: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.QueueJob.Collection": {
		properties?: Array<string>;
		getAll: IMapperMethod & {
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.ResourceCalendarException": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"PS.ResourceEngagement": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		getTimephasedByUrl: IMapperMethod & {
		argNames: [ "start", "end", "scale", "contourType" ],
		},

	}

	"PS.ResourceEngagement.Collection": {
		properties?: Array<string>;
		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"PS.ResourceEngagementTimephasedPeriod.Collection": {
		properties?: Array<string>;
		getByStartUrl: IMapperMethod & {
		argNames: [ "start" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.ResourcePlan": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		forceCheckIn: IMapperMethod & {
		},

		publish: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"PS.ServiceStatus": {
		properties?: Array<string>;
		stopDelegation: IMapperMethod & {
		},

	}

	"PS.Stage": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.Stage.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"PS.StageCustomField": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.StageCustomField.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "creationInfo" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.StageDetailPage": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.StageDetailPage.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.StatusAssignment": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		submitStatusUpdates: IMapperMethod & {
		argNames: [ "comment" ],
		},

	}

	"PS.StatusAssignment.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		getTimePhaseByUrl: IMapperMethod & {
		argNames: [ "start", "end" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		submitAllStatusUpdates: IMapperMethod & {
		argNames: [ "comment" ],
		},

		update: IMapperMethod & {
		},

	}

	"PS.StatusAssignmentHistoryLine.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.TaskPlanLink": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"PS.TimeSheet": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		recall: IMapperMethod & {
		},

		submit: IMapperMethod & {
		argNames: [ "comment" ],
		},

		update: IMapperMethod & {
		},

	}

	"PS.TimeSheetLine": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		submit: IMapperMethod & {
		argNames: [ "comment" ],
		},

	}

	"PS.TimeSheetLine.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.TimeSheetPeriod": {
		properties?: Array<string>;
		createTimeSheet: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.TimeSheetPeriod.Collection": {
		properties?: Array<string>;
		getByGuid: IMapperMethod & {
		argNames: [ "uid" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.TimeSheetWork": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"PS.TimeSheetWork.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		getByStartDate: IMapperMethod & {
		argNames: [ "start" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"PS.WorkflowActivities": {
		properties?: Array<string>;
		checkInWithJobId: IMapperMethod & {
		argNames: [ "projId", "jobId", "force" ],
		},

		createProjectFromListItem: IMapperMethod & {
		argNames: [ "webId", "listId", "itemId", "eptId" ],
		},

		enterProjectStage: IMapperMethod & {
		argNames: [ "projectId", "stageId" ],
		},

		leaveProjectStage: IMapperMethod & {
		argNames: [ "projectId" ],
		},

		publishSummaryWithJobId: IMapperMethod & {
		argNames: [ "projId", "jobId" ],
		},

		publishWithJobId: IMapperMethod & {
		argNames: [ "projectId", "jobId" ],
		},

		readBooleanProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId" ],
		},

		readCurrencyProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId" ],
		},

		readDateTimeProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId" ],
		},

		readGuidProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId" ],
		},

		readIntegerProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId" ],
		},

		readNumberProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId" ],
		},

		readProjectProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId" ],
		},

		readTextProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId" ],
		},

		readyToLeaveProjectStage: IMapperMethod & {
		argNames: [ "projectId" ],
		},

		updateBooleanProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId", "value" ],
		},

		updateCurrencyProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId", "value" ],
		},

		updateDateTimeProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId", "value" ],
		},

		updateGuidProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId", "value" ],
		},

		updateIdeaListItemStatus: IMapperMethod & {
		argNames: [ "projectId", "status" ],
		},

		updateIntegerProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId", "value" ],
		},

		updateNumberProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId", "value" ],
		},

		updateProjectStageStatus: IMapperMethod & {
		argNames: [ "projectId", "stageId", "statusInformation", "stageStatusValue", "append" ],
		},

		updateTextProperty: IMapperMethod & {
		argNames: [ "projectId", "propertyId", "value" ],
		},

	}

	"PS.WorkflowDesignerField.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Alert": {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] },

		updateAlert: IMapperMethod & {
		},

	}

	"SP.Alert.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "alertCreationInformation" ],
		},

		contains: IMapperMethod & {
		argNames: [ "idAlert" ],
		},

		deleteAlert: IMapperMethod & {
		argNames: [ "idAlert" ],
		},

		deleteAlertAtIndex: IMapperMethod & {
		argNames: [ "index" ],
		},

		getById: IMapperMethod & {
		argNames: [ "idAlert" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.AppConfiguration": {
		properties?: Array<string>;
		update: IMapperMethod & {
		},

	}

	"SP.AppInstance": {
		properties?: Array<string>;
		cancelAllJobs: IMapperMethod & {
		},

		getAppDatabaseConnectionString: IMapperMethod & {
		},

		getErrorDetails: IMapperMethod & {
		},

		getPreviousAppVersion: IMapperMethod & {
		},

		install: IMapperMethod & {
		},

		recycle: IMapperMethod & {
		},

		restore: IMapperMethod & {
		},

		retryAllJobs: IMapperMethod & {
		},

		uninstall: IMapperMethod & {
		},

		upgrade: IMapperMethod & {
		argNames: [ "appPackageStream" ],
		},

	}

	"SP.Attachment": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		recycleObject: IMapperMethod & {
		},

	}

	"SP.Attachment.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "FileName", "Content" ],
		},

		addUsingPath: IMapperMethod & {
		argNames: [ "DecodedUrl", "contentStream" ],
		},

		getByFileName: IMapperMethod & {
		argNames: [ "fileName" ],
		},

		getByFileNameAsPath: IMapperMethod & {
		argNames: [ "DecodedUrl" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Audit": {
		properties?: Array<string>;
		update: IMapperMethod & {
		},

	}

	"SP.BrandCenter": {
		properties?: Array<string>;
		addSiteTheme: IMapperMethod & {
		argNames: [ "themeData" ],
		},

		addTenantTheme: IMapperMethod & {
		argNames: [ "themeData" ],
		},

		configuration: IMapperMethod & {
		},

		currentBrandingConfiguration: IMapperMethod & {
		},

		deleteSiteTheme: IMapperMethod & {
		argNames: [ "themeId" ],
		},

		deleteTenantTheme: IMapperMethod & {
		argNames: [ "themeId" ],
		},

		ensureBrandColorsListFeature: IMapperMethod & {
		},

		ensureBrandFontsLibraryFeature: IMapperMethod & {
		},

		getFontStream: IMapperMethod & {
		argNames: [ "fontFileUrl" ],
		},

		getSiteThemeById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getSiteThemes: IMapperMethod & {
		},

		getTenantThemeById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getTenantThemes: IMapperMethod & {
		},

		getTenantThemesXgeoUtil: IMapperMethod & {
		},

		orgAssets: IMapperMethod & {
		},

		orgAssetsWithCacheFlag: IMapperMethod & {
		argNames: [ "shouldUseCache" ],
		},

		updateSiteTheme: IMapperMethod & {
		argNames: [ "themeData" ],
		},

		updateTenantTheme: IMapperMethod & {
		argNames: [ "themeData" ],
		},

		validateSiteThemeName: IMapperMethod & {
		argNames: [ "name" ],
		},

		validateTenantThemeName: IMapperMethod & {
		argNames: [ "name" ],
		},

	}

	"SP.BusinessData.AppBdcCatalog": {
		properties?: Array<string>;
		getConnectionId: IMapperMethod & {
		argNames: [ "lobSystemName", "lobSystemInstanceName" ],
		},

		getEntity: IMapperMethod & {
		argNames: [ "namespace", "name" ],
		},

		getLobSystemInstanceProperty: IMapperMethod & {
		argNames: [ "lobSystemName", "lobSystemInstanceName", "propertyName" ],
		},

		getLobSystemProperty: IMapperMethod & {
		argNames: [ "lobSystemName", "propertyName" ],
		},

		getPermissibleConnections: IMapperMethod & {
		},

		setConnectionId: IMapperMethod & {
		argNames: [ "lobSystemName", "lobSystemInstanceName", "connectionId" ],
		},

		setLobSystemInstanceProperty: IMapperMethod & {
		argNames: [ "lobSystemName", "lobSystemInstanceName", "propertyName", "propertyValue" ],
		},

		setLobSystemProperty: IMapperMethod & {
		argNames: [ "lobSystemName", "propertyName", "propertyValue" ],
		},

	}

	"SP.BusinessData.Entity": {
		properties?: Array<string>;
		getAssociationView: IMapperMethod & {
		argNames: [ "associationName" ],
		},

		getCreatorView: IMapperMethod & {
		argNames: [ "methodInstanceName" ],
		},

		getDefaultSpecificFinderView: IMapperMethod & {
		},

		getFilters: IMapperMethod & {
		argNames: [ "methodInstanceName" ],
		},

		getFinderView: IMapperMethod & {
		argNames: [ "methodInstanceName" ],
		},

		getIdentifierCount: IMapperMethod & {
		},

		getIdentifiers: IMapperMethod & {
		},

		getLobSystem: IMapperMethod & {
		},

		getSpecificFinderView: IMapperMethod & {
		argNames: [ "specificFinderName" ],
		},

		getUpdaterView: IMapperMethod & {
		argNames: [ "updaterName" ],
		},

	}

	"SP.BusinessData.EntityIdentifier": {
		properties?: Array<string>;
		containsLocalizedDisplayName: IMapperMethod & {
		},

		getDefaultDisplayName: IMapperMethod & {
		},

		getLocalizedDisplayName: IMapperMethod & {
		},

	}

	"SP.BusinessData.EntityView": {
		properties?: Array<string>;
		getDefaultValues: IMapperMethod & {
		},

		getType: IMapperMethod & {
		argNames: [ "fieldDotNotation" ],
		},

		getTypeDescriptor: IMapperMethod & {
		argNames: [ "fieldDotNotation" ],
		},

		getXmlSchema: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.BusinessData.Infrastructure.ExternalSubscriptionStore": {
		properties?: Array<string>;
		indexStore: IMapperMethod & {
		},

	}

	"SP.BusinessData.LobSystem": {
		properties?: Array<string>;
		getLobSystemInstances: IMapperMethod & {
		},

	}

	"SP.BusinessData.Runtime.EntityFieldValueDictionary": {
		properties?: Array<string>;
		createCollectionInstance: IMapperMethod & {
		argNames: [ "fieldDotNotation", "size" ],
		},

		createInstance: IMapperMethod & {
		argNames: [ "fieldInstanceDotNotation", "fieldDotNotation" ],
		},

		fromXml: IMapperMethod & {
		argNames: [ "xml" ],
		},

		getCollectionSize: IMapperMethod & {
		argNames: [ "fieldDotNotation" ],
		},

		toXml: IMapperMethod & {
		},

	}

	"SP.BusinessData.Runtime.EntityInstance": {
		properties?: Array<string>;
		createCollectionInstance: IMapperMethod & {
		argNames: [ "fieldDotNotation", "size" ],
		},

		createInstance: IMapperMethod & {
		argNames: [ "fieldInstanceDotNotation", "fieldDotNotation" ],
		},

		delete: IMapperMethod & {
		},

		fromXml: IMapperMethod & {
		argNames: [ "xml" ],
		},

		getIdentity: IMapperMethod & {
		},

		toXml: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"SP.BusinessData.TypeDescriptor": {
		properties?: Array<string>;
		containsLocalizedDisplayName: IMapperMethod & {
		},

		getChildTypeDescriptors: IMapperMethod & {
		},

		getDefaultDisplayName: IMapperMethod & {
		},

		getLocalizedDisplayName: IMapperMethod & {
		},

		getParentTypeDescriptor: IMapperMethod & {
		},

		isLeaf: IMapperMethod & {
		},

		isRoot: IMapperMethod & {
		},

	}

	"SP.CheckedOutFile": {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] },

		takeOverCheckOut: IMapperMethod & {
		},

	}

	"SP.CheckedOutFile.Collection": {
		properties?: Array<string>;
		getByPath: IMapperMethod & {
		argNames: [ "DecodedUrl" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.ClientWebPart": {
		properties?: Array<string>;
		render: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.ClientWebPart.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.CompliancePolicy.SPPolicyStoreProxy": {
		properties?: Array<string>;
		bulkUpdateDynamicScopeBindings: IMapperMethod & {
		argNames: [ "scopesToAdd", "scopesToRemove", "siteId" ],
		},

		extendReviewItemsRetention: IMapperMethod & {
		argNames: [ "itemIds", "extensionDate" ],
		},

		getDynamicScopeBindingBySiteId: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		getSiteAdaptivePolicies: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		markReviewItemsForDeletion: IMapperMethod & {
		argNames: [ "itemIds" ],
		},

		openBinaryStreamForOriginalItem: IMapperMethod & {
		argNames: [ "itemId" ],
		},

		removeContainerRetentionPolicy: IMapperMethod & {
		argNames: [ "siteId" ],
		},

		removeContainerSettings: IMapperMethod & {
		argNames: [ "externalId" ],
		},

		retagReviewItems: IMapperMethod & {
		argNames: [ "itemIds", "newTag", "newTagIsRecord", "newTagBlockDelete", "newTagIsEventBased" ],
		},

		retagReviewItemsWithMetas: IMapperMethod & {
		argNames: [ "itemIds", "newTagName", "newTagMetas" ],
		},

		retagUnifiedReviewItemsWithMetas: IMapperMethod & {
		argNames: [ "itemIds", "originalTagName", "newTagName", "newTagMetas" ],
		},

		setContainerRetentionPolicy: IMapperMethod & {
		argNames: [ "siteId", "defaultContainerLabel" ],
		},

		updateContainerSetting: IMapperMethod & {
		argNames: [ "siteId", "externalId", "settingType", "setting" ],
		},

		updateSiteAdaptivePolicies: IMapperMethod & {
		argNames: [ "policiesToAdd", "policiesToRemove", "siteId" ],
		},

	}

	"SP.ContentType": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		reorderFields: IMapperMethod & {
		argNames: [ "fieldNames" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.ContentType.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		addAvailableContentType: IMapperMethod & {
		argNames: [ "contentTypeId" ],
		},

		create: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getById: IMapperMethod & {
		argNames: [ "contentTypeId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Directory.DirectorySession": {
		properties?: Array<string>;
		getGraphUser: IMapperMethod & {
		argNames: [ "principalName" ],
		},

		getSharePointDataForUser: IMapperMethod & {
		argNames: [ "userId" ],
		},

		group: IMapperMethod & {
		argNames: [ "groupId", "alias" ],
		},

		joinGroup: IMapperMethod & {
		argNames: [ "groupId" ],
		},

		me: IMapperMethod & {
		},

		user: IMapperMethod & {
		argNames: [ "id", "principalName" ],
		},

		validateGroupName: IMapperMethod & {
		argNames: [ "displayName", "alias" ],
		},

	}

	"SP.Directory.Group": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Directory.Group.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		remove: IMapperMethod & {
		argNames: [ "objectId" ],
		},

	}

	"SP.Directory.Provider.DirectoryNotification": {
		properties?: Array<string>;
		notifyChanges: IMapperMethod & {
		argNames: [ "directoryObjectChanges" ],
		},

	}

	"SP.Directory.Provider.SharePointDirectoryProvider": {
		properties?: Array<string>;
		createDirectoryObject: IMapperMethod & {
		argNames: [ "data" ],
		},

		deleteDirectoryObject: IMapperMethod & {
		argNames: [ "data" ],
		},

		getOrCreateUnifiedGroupTenantInstanceId: IMapperMethod & {
		argNames: [ "groupId", "tenantInstanceId" ],
		},

		getOrCreateUnifiedGroupWithPreferredDataLocation: IMapperMethod & {
		argNames: [ "groupId", "preferredDataLocation" ],
		},

		notifyDataChanges: IMapperMethod & {
		argNames: [ "data" ],
		},

		readDirectoryObject: IMapperMethod & {
		argNames: [ "data" ],
		},

		readDirectoryObjectBatch: IMapperMethod & {
		argNames: [ "ids", "objectType" ],
		},

		updateCache: IMapperMethod & {
		argNames: [ "data" ],
		},

		updateDirectoryObject: IMapperMethod & {
		argNames: [ "data" ],
		},

	}

	"SP.Directory.User": {
		properties?: Array<string>;
		getUserLinks: IMapperMethod & {
		argNames: [ "linkName", "groupType" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Directory.User.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "objectId", "principalName" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		remove: IMapperMethod & {
		argNames: [ "objectId" ],
		},

	}

	"SP.DocumentManagement.DocumentId": {
		properties?: Array<string>;
		resetDocIdByServerRelativePath: IMapperMethod & {
		argNames: [ "DecodedUrl" ],
		},

		resetDocIdsInLibrary: IMapperMethod & {
		argNames: [ "DecodedUrl", "contentTypeId" ],
		},

		setDocIdSitePrefix: IMapperMethod & {
		argNames: [ "prefix", "scheduleAssignment", "overwriteExistingIds" ],
		},

	}

	"SP.EmployeeEngagement": {
		properties?: Array<string>;
		configuration: IMapperMethod & {
		},

		configuredVivaConnectionsURL: IMapperMethod & {
		},

		dashboardContent: IMapperMethod & {
		argNames: [ "overrideLanguageCode" ],
		},

		dashboardOOBContent: IMapperMethod & {
		argNames: [ "oobContentChoice" ],
		},

		fullDashboardContent: IMapperMethod & {
		argNames: [ "canvasAsJson", "includePersonalizationData" ],
		},

		getDashboardPersonalization: IMapperMethod & {
		},

		getTargetedSitesAsEditor: IMapperMethod & {
		},

		likeNewsPost: IMapperMethod & {
		argNames: [ "pageUrl", "listId", "listItemUniqueId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		setDashboardPersonalization: IMapperMethod & {
		argNames: [ "isEnabled" ],
		},

		unlikeNewsPost: IMapperMethod & {
		argNames: [ "pageUrl", "listId", "listItemUniqueId" ],
		},

		vivaConnections: IMapperMethod & {
		argNames: [ "adminConfiguredUrl" ],
		},

		vivaHome: IMapperMethod & {
		},

		vivaHomeConfiguration: IMapperMethod & {
		argNames: [ "shouldByPassCache" ],
		},

	}

	"SP.EmployeeExperienceController": {
		properties?: Array<string>;
		dashboard: IMapperMethod & {
		argNames: [ "formFactor", "dashboardId", "mySiteUrl" ],
		},

		getAnnouncementsState: IMapperMethod & {
		argNames: [ "mySiteUrl" ],
		},

		saveDashboard: IMapperMethod & {
		argNames: [ "employeeExperienceDashboardData", "userCards", "mySiteUrl" ],
		},

		setAnnouncementState: IMapperMethod & {
		argNames: [ "announcementStates", "mySiteUrl" ],
		},

	}

	"SP.EventReceiverDefinition": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.EventReceiverDefinition.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "eventReceiverCreationInformation" ],
		},

		getById: IMapperMethod & {
		argNames: [ "eventReceiverId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Feature.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "featureId", "force", "featdefScope" ],
		},

		getById: IMapperMethod & {
		argNames: [ "featureId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		remove: IMapperMethod & {
		argNames: [ "featureId", "force" ],
		},

	}

	"SP.Field": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.Field.Collection": {
		properties?: Array<string>;
		addDependentLookupField: IMapperMethod & {
		argNames: [ "displayName", "primaryLookupFieldId", "showField" ],
		},

		addField: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		createFieldAsXml: IMapperMethod & {
		argNames: [ "schemaXml" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getByInternalNameOrTitle: IMapperMethod & {
		argNames: [ "strName" ],
		},

		getByTitle: IMapperMethod & {
		argNames: [ "title" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.FieldCalculated": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldChoice": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldComputed": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldCurrency": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldDateTime": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldGeolocation": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldGuid": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldLink": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldLink.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		reorder: IMapperMethod & {
		argNames: [ "internalNames" ],
		},

	}

	"SP.FieldLocation": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldLookup": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldMultiChoice": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldMultiLineText": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldNumber": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldRatingScale": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldText": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldThumbnail": {
		properties?: Array<string>;
		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldUrl": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.FieldUser": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.File": {
		properties?: Array<string>;
		addClientActivities: IMapperMethod & {
		argNames: [ "activitiesStream" ],
		},

		addFileScannerWorkItem: IMapperMethod & {
		argNames: [ "dispatchType", "jobType", "jobSubType" ],
		},

		approve: IMapperMethod & {
		argNames: [ "comment" ],
		},

		cancelUpload: IMapperMethod & {
		argNames: [ "uploadId" ],
		},

		changeContentStorageSchema: IMapperMethod & {
		argNames: [ "desiredSchema" ],
		},

		checkAccessAndPostViewAuditEvent: IMapperMethod & {
		},

		checkIn: IMapperMethod & {
		argNames: [ "comment", "checkInType" ],
		},

		checkOut: IMapperMethod & {
		},

		content: IMapperMethod & {
		},

		continueUpload: IMapperMethod & {
		argNames: [ "uploadId", "fileOffset", "stream" ],
		},

		copyTo: IMapperMethod & {
		argNames: [ "strNewUrl", "bOverWrite" ],
		},

		copyToUsingPath: IMapperMethod & {
		argNames: [ "DecodedUrl", "bOverWrite" ],
		},

		delete: IMapperMethod & {
		},

		deleteWithParameters: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		deny: IMapperMethod & {
		argNames: [ "comment" ],
		},

		executeCobaltRequest: IMapperMethod & {
		argNames: [ "inputStream" ],
		},

		finishUpload: IMapperMethod & {
		argNames: [ "uploadId", "fileOffset", "stream" ],
		},

		finishUploadWithChecksum: IMapperMethod & {
		argNames: [ "uploadId", "fileOffset", "checksum", "stream", "sandboxId" ],
		},

		getFileUserValue: IMapperMethod & {
		argNames: [ "key" ],
		},

		getImagePreviewUri: IMapperMethod & {
		argNames: [ "width", "height", "clientType" ],
		},

		getImagePreviewUrl: IMapperMethod & {
		argNames: [ "width", "height", "clientType" ],
		},

		getLimitedWebPartManager: IMapperMethod & {
		argNames: [ "scope" ],
		},

		getMediaServiceMetadata: IMapperMethod & {
		},

		getPreAuthorizedAccessUrl: IMapperMethod & {
		argNames: [ "expirationHours" ],
		},

		getPreAuthorizedAccessUrl2: IMapperMethod & {
		argNames: [ "expirationHours", "expirationMinuites" ],
		},

		getUploadStatus: IMapperMethod & {
		argNames: [ "uploadId" ],
		},

		getWOPIFrameUrl: IMapperMethod & {
		argNames: [ "action" ],
		},

		moveTo: IMapperMethod & {
		argNames: [ "newUrl", "flags" ],
		},

		moveToUsingPath: IMapperMethod & {
		argNames: [ "DecodedUrl", "moveOperations" ],
		},

		openBinaryStream: IMapperMethod & {
		},

		openBinaryStreamWithOptions: IMapperMethod & {
		argNames: [ "openOptions" ],
		},

		publish: IMapperMethod & {
		argNames: [ "comment" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		recycle: IMapperMethod & {
		},

		recycleWithETag: IMapperMethod & {
		argNames: [ "etagMatch" ],
		},

		recycleWithParameters: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		saveBinaryStream: IMapperMethod & {
		argNames: [ "file" ],
		},

		setExpirationDate: IMapperMethod & {
		argNames: [ "expirationDate" ],
		},

		setFileUserValue: IMapperMethod & {
		argNames: [ "key", "value" ],
		},

		setMediaServiceMetadata: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		startUpload: IMapperMethod & {
		argNames: [ "uploadId", "stream" ],
		},

		startUploadFile: IMapperMethod & {
		argNames: [ "uploadId", "stream" ],
		},

		unPublish: IMapperMethod & {
		argNames: [ "comment" ],
		},

		undoCheckOut: IMapperMethod & {
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

		updateVirusInfo: IMapperMethod & {
		argNames: [ "virusStatus", "virusMessage", "etagToCheck" ],
		},

		upload: IMapperMethod & {
		argNames: [ "uploadId", "stream" ],
		},

		uploadWithChecksum: IMapperMethod & {
		argNames: [ "uploadId", "checksum", "stream" ],
		},

	}

	"SP.File.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "Url", "Overwrite", "Content" ],
		},

		addStub: IMapperMethod & {
		argNames: [ "urlOfFile" ],
		},

		addStubUsingPath: IMapperMethod & {
		argNames: [ "DecodedUrl", "AutoCheckoutOnInvalidData", "EnsureUniqueFileName", "Overwrite", "XorHash" ],
		},

		addTemplateFile: IMapperMethod & {
		argNames: [ "urlOfFile", "templateFileType" ],
		},

		addUsingPath: IMapperMethod & {
		argNames: [ "DecodedUrl", "AutoCheckoutOnInvalidData", "EnsureUniqueFileName", "Overwrite", "XorHash", "contentStream" ],
		},

		getByPathOrAddStub: IMapperMethod & {
		argNames: [ "DecodedUrl" ],
		},

		getByUrl: IMapperMethod & {
		argNames: [ "url" ],
		},

		getByUrlOrAddStub: IMapperMethod & {
		argNames: [ "urlOfFile" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.FileVersion": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		openBinaryStream: IMapperMethod & {
		},

		openBinaryStreamWithOptions: IMapperMethod & {
		argNames: [ "openOptions" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		setExpirationDate: IMapperMethod & {
		argNames: [ "expirationDate" ],
		},

	}

	"SP.FileVersion.Collection": {
		properties?: Array<string>;
		deleteAll: IMapperMethod & {
		},

		deleteByID: IMapperMethod & {
		argNames: [ "vid" ],
		},

		deleteByLabel: IMapperMethod & {
		argNames: [ "versionlabel" ],
		},

		getById: IMapperMethod & {
		argNames: [ "versionid" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		recycleByID: IMapperMethod & {
		argNames: [ "vid" ],
		},

		recycleByLabel: IMapperMethod & {
		argNames: [ "versionlabel" ],
		},

		restoreByLabel: IMapperMethod & {
		argNames: [ "versionlabel" ],
		},

	}

	"SP.Folder": {
		properties?: Array<string>;
		addSubFolder: IMapperMethod & {
		argNames: [ "leafName", "updateParams" ],
		},

		addSubFolderUsingPath: IMapperMethod & {
		argNames: [ "DecodedUrl" ],
		},

		delete: IMapperMethod & {
		},

		deleteWithParameters: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getChanges: IMapperMethod & {
		argNames: [ "query" ],
		},

		getListItemChanges: IMapperMethod & {
		argNames: [ "query" ],
		},

		moveTo: IMapperMethod & {
		argNames: [ "newUrl" ],
		},

		moveToUsingPath: IMapperMethod & {
		argNames: [ "DecodedUrl" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		recycle: IMapperMethod & {
		},

		recycleWithParameters: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		startDelete: IMapperMethod & {
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.Folder.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "url" ],
		},

		addUsingPath: IMapperMethod & {
		argNames: [ "DecodedUrl", "EnsureUniqueFileName", "Overwrite" ],
		},

		addWithOverwrite: IMapperMethod & {
		argNames: [ "url", "overwrite" ],
		},

		getByPath: IMapperMethod & {
		argNames: [ "DecodedUrl" ],
		},

		getByUrl: IMapperMethod & {
		argNames: [ "url" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.FolderColoring": {
		properties?: Array<string>;
		createFolder: IMapperMethod & {
		argNames: [ "DecodedUrl", "EnsureUniqueFileName", "Overwrite", "coloringInformation" ],
		},

		renameFolder: IMapperMethod & {
		argNames: [ "DecodedUrl", "newName", "coloringInformation" ],
		},

		stampColor: IMapperMethod & {
		argNames: [ "DecodedUrl", "coloringInformation" ],
		},

	}

	"SP.FontPackage": {
		properties?: Array<string>;
		apply: IMapperMethod & {
		},

		delete: IMapperMethod & {
		},

		fontStream: IMapperMethod & {
		argNames: [ "fontFamily" ],
		},

		update: IMapperMethod & {
		},

	}

	"SP.FontPackage.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getByTitle: IMapperMethod & {
		argNames: [ "title" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Form.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getByPageType: IMapperMethod & {
		argNames: [ "formType" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Group": {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] },

		setUserAsOwner: IMapperMethod & {
		argNames: [ "ownerId" ],
		},

		update: IMapperMethod & {
		},

	}

	"SP.Group.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getByName: IMapperMethod & {
		argNames: [ "name" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		removeById: IMapperMethod & {
		argNames: [ "id" ],
		},

		removeByLoginName: IMapperMethod & {
		argNames: [ "loginName" ],
		},

	}

	"SP.HubSite": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"SP.HubSite.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "hubSiteId" ],
		},

		getConnectedHubs: IMapperMethod & {
		argNames: [ "hubSiteId", "option" ],
		},

		getSiteUrlByHubSiteId: IMapperMethod & {
		argNames: [ "hubSiteId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.InformationRightsManagementFileSettings": {
		properties?: Array<string>;
		reset: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"SP.InformationRightsManagementSettings": {
		properties?: Array<string>;
		reset: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"SP.KnowledgeHub": {
		properties?: Array<string>;
		addOrUpdateSiteReference: IMapperMethod & {
		argNames: [ "knowledgeHubSiteUrl" ],
		},

		siteReference: IMapperMethod & {
		},

	}

	"SP.LanguageCollection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

	}

	"SP.List": {
		properties?: Array<string>;
		addItem: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		addItemUsingPath: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		addValidateUpdateItem: IMapperMethod & {
		argNames: [ "listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture" ],
		},

		addValidateUpdateItemUsingPath: IMapperMethod & {
		argNames: [ "listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture" ],
		},

		breakRoleInheritance: IMapperMethod & {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		bulkValidateUpdateListItems: IMapperMethod & {
		argNames: [ "itemIds", "formValues", "bNewDocumentUpdate", "checkInComment", "folderPath" ],
		},

		cAAECreateTempFolder: IMapperMethod & {
		},

		cAAERenameFileInTemporaryFolder: IMapperMethod & {
		argNames: [ "Path", "UpdatedName" ],
		},

		cancelDeleteFileVersions: IMapperMethod & {
		},

		clearBusinessAppMigrationInteractiveData: IMapperMethod & {
		},

		copyTemplateAndGetMetadata: IMapperMethod & {
		argNames: [ "Id" ],
		},

		createDocumentAndGetEditLink: IMapperMethod & {
		argNames: [ "fileName", "folderPath", "documentTemplateType", "templateUrl" ],
		},

		createDocumentFromCAAETemplate: IMapperMethod & {
		argNames: [ "ContentTypeName", "documentGenerationInfo" ],
		},

		createDocumentFromCAAETemplateV2: IMapperMethod & {
		argNames: [ "Id", "documentGenerationInfo" ],
		},

		createDocumentFromContentAssemblyTemplate: IMapperMethod & {
		argNames: [ "TemplateUrl", "documentGenerationInfo" ],
		},

		createDocumentWithDefaultName: IMapperMethod & {
		argNames: [ "folderPath", "extension" ],
		},

		createHVCSItemApprovalRequest: IMapperMethod & {
		argNames: [ "createItemRequestPayload" ],
		},

		createListForm: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		createMappedView: IMapperMethod & {
		argNames: [ "appViewCreationInfo", "visualizationTarget" ],
		},

		createRuleEx: IMapperMethod & {
		argNames: [ "condition", "title", "triggerType", "action", "ruleTemplateId" ],
		},

		createSmartTemplateContentTypeAndAddToList: IMapperMethod & {
		argNames: [ "Name", "Description" ],
		},

		createSmartTemplateContentTypeAndAddToListV2: IMapperMethod & {
		argNames: [ "Name", "Description", "TemplatePath", "Status" ],
		},

		delete: IMapperMethod & {
		},

		deleteRule: IMapperMethod & {
		argNames: [ "ruleId", "triggerType" ],
		},

		enableQueryableColumns: IMapperMethod & {
		},

		enqueueAsyncActionTaskById: IMapperMethod & {
		argNames: [ "id", "parameters" ],
		},

		ensureSignoffStatusField: IMapperMethod & {
		},

		getAllRules: IMapperMethod & {
		argNames: [ "includeQuicksteps", "includeAutomaticRules" ],
		},

		getAsyncActionConfig: IMapperMethod & {
		argNames: [ "id" ],
		},

		getAsyncActionTaskIds: IMapperMethod & {
		},

		getBloomFilter: IMapperMethod & {
		argNames: [ "startItemId" ],
		},

		getBloomFilterWithCustomFields: IMapperMethod & {
		argNames: [ "listItemStartingID", "internalFieldNames" ],
		},

		getBusinessAppMigrationInteractiveData: IMapperMethod & {
		},

		getBusinessAppOperationStatus: IMapperMethod & {
		},

		getCAAETemplateMetadata: IMapperMethod & {
		argNames: [ "Name", "Published" ],
		},

		getCAAETemplateMetadataV2: IMapperMethod & {
		argNames: [ "Id" ],
		},

		getChanges: IMapperMethod & {
		argNames: [ "query" ],
		},

		getCheckedOutFiles: IMapperMethod & {
		},

		getContentAssemblyDocumentFieldValues: IMapperMethod & {
		argNames: [ "DocumentUrl" ],
		},

		getContentAssemblyTemplateFields: IMapperMethod & {
		argNames: [ "TemplateUrl" ],
		},

		getItemById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getItemByStringId: IMapperMethod & {
		argNames: [ "sId" ],
		},

		getItemByUniqueId: IMapperMethod & {
		argNames: [ "uniqueId" ],
		},

		getItems: IMapperMethod & {
		argNames: [ "viewXML" ],
		},

		getItemsByQuery: IMapperMethod & {
		argNames: [ "camlQuery" ],
		},

		getListForms: IMapperMethod & {
		argNames: [ "bSanitize" ],
		},

		getListItemChangesSinceToken: IMapperMethod & {
		argNames: [ "query" ],
		},

		getLookupFieldChoices: IMapperMethod & {
		argNames: [ "targetFieldName", "pagingInfo" ],
		},

		getMappedApp: IMapperMethod & {
		argNames: [ "appId", "visualizationAppTarget" ],
		},

		getMappedApps: IMapperMethod & {
		argNames: [ "visualizationAppTarget" ],
		},

		getProgressForDeleteFileVersions: IMapperMethod & {
		},

		getProgressForFileVersionExpirationReport: IMapperMethod & {
		argNames: [ "reportFileUrl" ],
		},

		getRelatedFields: IMapperMethod & {
		},

		getSpecialFolderUrl: IMapperMethod & {
		argNames: [ "type", "bForceCreate", "existingFolderGuid" ],
		},

		getUserEffectivePermissions: IMapperMethod & {
		argNames: [ "userName" ],
		},

		getView: IMapperMethod & {
		argNames: [ "viewGuid" ],
		},

		isSyntexAIFeaturesFlightEnabled: IMapperMethod & {
		},

		lockSmartTemplate: IMapperMethod & {
		argNames: [ "Id" ],
		},

		mapFieldsToColumnsForModernTemlate: IMapperMethod & {
		argNames: [ "payload" ],
		},

		mapFieldsToColumnsForModernTemplate: IMapperMethod & {
		argNames: [ "templatePayload" ],
		},

		parseDocumentTemplate: IMapperMethod & {
		argNames: [ "Name" ],
		},

		publishMappedView: IMapperMethod & {
		argNames: [ "appId", "visualizationTarget" ],
		},

		publishSnippet: IMapperMethod & {
		argNames: [ "publishSnippetPayload" ],
		},

		publishTemplateV2: IMapperMethod & {
		argNames: [ "payload" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		recycle: IMapperMethod & {
		},

		refreshLockSmartTemplate: IMapperMethod & {
		argNames: [ "Id", "LockId" ],
		},

		renderExtendedListFormData: IMapperMethod & {
		argNames: [ "itemId", "formId", "mode", "options", "cutoffVersion" ],
		},

		renderListContextMenuData: IMapperMethod & {
		argNames: [ "CascDelWarnMessage", "CustomAction", "Field", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsXslView", "ItemId", "ListViewPageUrl", "OverrideScope", "RootFolder", "View", "ViewCount" ],
		},

		renderListData: IMapperMethod & {
		argNames: [ "viewXml" ],
		},

		renderListDataAsStream: IMapperMethod & {
		argNames: [ "parameters", "CascDelWarnMessage", "CustomAction", "DrillDown", "Field", "FieldInternalName", "Filter", "FilterData", "FilterData1", "FilterData10", "FilterData2", "FilterData3", "FilterData4", "FilterData5", "FilterData6", "FilterData7", "FilterData8", "FilterData9", "FilterField", "FilterField1", "FilterField10", "FilterField2", "FilterField3", "FilterField4", "FilterField5", "FilterField6", "FilterField7", "FilterField8", "FilterField9", "FilterFields", "FilterFields1", "FilterFields10", "FilterFields2", "FilterFields3", "FilterFields4", "FilterFields5", "FilterFields6", "FilterFields7", "FilterFields8", "FilterFields9", "FilterLookupId", "FilterLookupId1", "FilterLookupId10", "FilterLookupId2", "FilterLookupId3", "FilterLookupId4", "FilterLookupId5", "FilterLookupId6", "FilterLookupId7", "FilterLookupId8", "FilterLookupId9", "FilterOp", "FilterOp1", "FilterOp10", "FilterOp2", "FilterOp3", "FilterOp4", "FilterOp5", "FilterOp6", "FilterOp7", "FilterOp8", "FilterOp9", "FilterValue", "FilterValue1", "FilterValue10", "FilterValue2", "FilterValue3", "FilterValue4", "FilterValue5", "FilterValue6", "FilterValue7", "FilterValue8", "FilterValue9", "FilterValues", "FilterValues1", "FilterValues10", "FilterValues2", "FilterValues3", "FilterValues4", "FilterValues5", "FilterValues6", "FilterValues7", "FilterValues8", "FilterValues9", "GroupString", "HasOverrideSelectCommand", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsGroupRender", "IsXslView", "ListViewPageUrl", "OverrideRowLimit", "OverrideScope", "OverrideSelectCommand", "PageFirstRow", "PageLastRow", "QueryParams", "RootFolder", "RootFolderUniqueId", "SortDir", "SortDir1", "SortDir10", "SortDir2", "SortDir3", "SortDir4", "SortDir5", "SortDir6", "SortDir7", "SortDir8", "SortDir9", "SortField", "SortField1", "SortField10", "SortField2", "SortField3", "SortField4", "SortField5", "SortField6", "SortField7", "SortField8", "SortField9", "SortFields", "SortFieldValues", "View", "ViewCount", "ViewId", "ViewPath", "WebPartId" ],
		},

		renderListFilterData: IMapperMethod & {
		argNames: [ "ExcludeFieldFilteringHtml", "FieldInternalName", "OverrideScope", "ProcessQStringToCAML", "ViewId", "ViewXml" ],
		},

		renderListFormData: IMapperMethod & {
		argNames: [ "itemId", "formId", "mode" ],
		},

		reserveListItemId: IMapperMethod & {
		},

		resetRoleInheritance: IMapperMethod & {
		},

		saveAsNewView: IMapperMethod & {
		argNames: [ "oldName", "newName", "privateView", "uri" ],
		},

		saveAsTemplate: IMapperMethod & {
		argNames: [ "strFileName", "strName", "strDescription", "bSaveData" ],
		},

		searchLookupFieldChoices: IMapperMethod & {
		argNames: [ "targetFieldName", "beginsWithSearchString", "pagingInfo" ],
		},

		setContentAssemblyTemplateReadOnly: IMapperMethod & {
		argNames: [ "Id" ],
		},

		setExemptFromBlockDownloadOfNonViewableFiles: IMapperMethod & {
		argNames: [ "value" ],
		},

		setItemsOrder: IMapperMethod & {
		argNames: [ "itemIds", "lowerOrderItemId", "higherOrderItemId" ],
		},

		setListCustomOrderFlag: IMapperMethod & {
		argNames: [ "value" ],
		},

		startDeleteFileVersions: IMapperMethod & {
		argNames: [ "deleteOlderThanDays" ],
		},

		startDeleteFileVersionsByMode: IMapperMethod & {
		argNames: [ "batchDeleteParameters" ],
		},

		startFileVersionExpirationReport: IMapperMethod & {
		argNames: [ "reportFileUrl" ],
		},

		startRecycle: IMapperMethod & {
		},

		syncFlowCallbackUrl: IMapperMethod & {
		argNames: [ "flowId" ],
		},

		syncFlowInstance: IMapperMethod & {
		argNames: [ "flowID" ],
		},

		syncFlowInstances: IMapperMethod & {
		argNames: [ "retrieveGroupFlows" ],
		},

		syncFlowTemplates: IMapperMethod & {
		argNames: [ "category" ],
		},

		unlockSmartTemplate: IMapperMethod & {
		argNames: [ "Id", "LockId" ],
		},

		unpublishMappedView: IMapperMethod & {
		argNames: [ "appId", "visualizationTarget" ],
		},

		unsetContentAssemblyTemplateReadOnly: IMapperMethod & {
		argNames: [ "Id" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

		updateCAAETemplate: IMapperMethod & {
		argNames: [ "Name", "updateTemplateInfo" ],
		},

		updateCAAETemplateV2: IMapperMethod & {
		argNames: [ "Id", "updateTemplateInfo" ],
		},

		updateContentAssemblyDocument: IMapperMethod & {
		argNames: [ "TemplateUrl", "contentAssemblyFormAnswers" ],
		},

		updateFormProcessingModelRetentionLabel: IMapperMethod & {
		argNames: [ "retentionLabel" ],
		},

		updateFormProcessingModelSettings: IMapperMethod & {
		argNames: [ "retentionLabel", "linkedList" ],
		},

		updateRuleEx: IMapperMethod & {
		argNames: [ "ruleId", "condition", "title", "status", "action", "triggerType" ],
		},

		validateAppName: IMapperMethod & {
		argNames: [ "appDisplayName" ],
		},

	}

	"SP.List.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		ensureClientRenderedSitePagesLibrary: IMapperMethod & {
		},

		ensureEventsList: IMapperMethod & {
		},

		ensureSiteAssetsLibrary: IMapperMethod & {
		},

		ensureSitePagesLibrary: IMapperMethod & {
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getByTitle: IMapperMethod & {
		argNames: [ "title" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.ListItem": {
		properties?: Array<string>;
		addThumbnailFieldData: IMapperMethod & {
		argNames: [ "imageStream", "imageName", "fieldInternalName", "lockId" ],
		},

		archive: IMapperMethod & {
		},

		breakRoleInheritance: IMapperMethod & {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		delete: IMapperMethod & {
		},

		deleteWithParameters: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getChanges: IMapperMethod & {
		argNames: [ "query" ],
		},

		getComments: IMapperMethod & {
		},

		getUserEffectivePermissions: IMapperMethod & {
		argNames: [ "userName" ],
		},

		getVersionById: IMapperMethod & {
		argNames: [ "versionId" ],
		},

		getVersions: IMapperMethod & {
		argNames: [ "getVersionsParams" ],
		},

		getWOPIFrameUrl: IMapperMethod & {
		argNames: [ "action" ],
		},

		mediaServiceUpdate: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		mediaServiceUpdateV2: IMapperMethod & {
		argNames: [ "parameters", "eventFiringEnabled" ],
		},

		overridePolicyTip: IMapperMethod & {
		argNames: [ "userAction", "justification" ],
		},

		parseAndSetFieldValue: IMapperMethod & {
		argNames: [ "fieldName", "value" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		recycle: IMapperMethod & {
		},

		recycleWithParameters: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		resetRoleInheritance: IMapperMethod & {
		},

		setCommentsDisabled: IMapperMethod & {
		argNames: [ "value" ],
		},

		setComplianceTag: IMapperMethod & {
		argNames: [ "complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock", "isUnlockedAsDefault" ],
		},

		setComplianceTagWithExplicitMetasUpdate: IMapperMethod & {
		argNames: [ "complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress" ],
		},

		setComplianceTagWithHold: IMapperMethod & {
		argNames: [ "complianceTag" ],
		},

		setComplianceTagWithMetaInfo: IMapperMethod & {
		argNames: [ "complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock", "isRecordUnlockedAsDefault" ],
		},

		setComplianceTagWithNoHold: IMapperMethod & {
		argNames: [ "complianceTag" ],
		},

		setComplianceTagWithRecord: IMapperMethod & {
		argNames: [ "complianceTag" ],
		},

		systemUpdate: IMapperMethod & {
		},

		unarchive: IMapperMethod & {
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

		updateEx: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		updateOverwriteVersion: IMapperMethod & {
		},

		validateUpdateFetchListItem: IMapperMethod & {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "View", "RootFolder" ],
		},

		validateUpdateFetchListItemInFolder: IMapperMethod & {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "rootFolder" ],
		},

		validateUpdateListItem: IMapperMethod & {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "sharedLockId" ],
		},

	}

	"SP.ListItem.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getById: IMapperMethod & {
		argNames: [ "itemId" ],
		},

		getByStringId: IMapperMethod & {
		argNames: [ "sId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.ListItemVersion": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		recycle: IMapperMethod & {
		},

	}

	"SP.ListItemVersion.Collection": {
		properties?: Array<string>;
		deleteAll: IMapperMethod & {
		},

		getById: IMapperMethod & {
		argNames: [ "versionId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		recycleAll: IMapperMethod & {
		},

		restoreByID: IMapperMethod & {
		argNames: [ "versionId" ],
		},

	}

	"SP.ListTemplate": {
		properties?: Array<string>;
		getGlobalSchemaXml: IMapperMethod & {
		},

	}

	"SP.ListTemplate.Collection": {
		properties?: Array<string>;
		getByName: IMapperMethod & {
		argNames: [ "name" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.MicroService.MicroServiceManager": {
		properties?: Array<string>;
		addMicroserviceWorkItem: IMapperMethod & {
		argNames: [ "payLoad", "minutes", "properties" ],
		},

		deleteMicroserviceWorkItem: IMapperMethod & {
		argNames: [ "workItemId" ],
		},

		deleteMicroserviceWorkItemByContentDbId: IMapperMethod & {
		argNames: [ "contentDatabaseId", "siteId", "workItemId" ],
		},

		getServiceInternalUrls: IMapperMethod & {
		argNames: [ "service" ],
		},

		getServiceUrls: IMapperMethod & {
		argNames: [ "service" ],
		},

	}

	"SP.Microfeed.MicrofeedAttachmentStore": {
		properties?: Array<string>;
		deletePreProcessedAttachment: IMapperMethod & {
		argNames: [ "attachmentUri" ],
		},

		getImage: IMapperMethod & {
		argNames: [ "imageUrl", "key", "iv" ],
		},

		preProcessAttachment: IMapperMethod & {
		argNames: [ "link" ],
		},

		putFile: IMapperMethod & {
		argNames: [ "originalFileName", "fileData" ],
		},

		putImage: IMapperMethod & {
		argNames: [ "imageData" ],
		},

	}

	"SP.Microfeed.MicrofeedData": {
		properties?: Array<string>;
		addAttachment: IMapperMethod & {
		argNames: [ "name", "bytes" ],
		},

		systemUpdate: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"SP.Microfeed.MicrofeedData.Collection": {
		properties?: Array<string>;
		deleteAll: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Microfeed.MicrofeedManager": {
		properties?: Array<string>;
		addUserToPostPeopleList: IMapperMethod & {
		argNames: [ "postIdentifier", "UserLoginName" ],
		},

		clearUnreadMentionsCount: IMapperMethod & {
		},

		deleteById: IMapperMethod & {
		argNames: [ "postIdentifier" ],
		},

		deleteUserFromPostPeopleList: IMapperMethod & {
		argNames: [ "postIdentifier", "UserLoginName" ],
		},

		getMyCategoricalFeed: IMapperMethod & {
		argNames: [ "feedOptions" ],
		},

		getMyConsolidatedFeed: IMapperMethod & {
		argNames: [ "feedOptions" ],
		},

		getMyPublishedFeed: IMapperMethod & {
		argNames: [ "feedOptions", "typeOfPubFeed", "ShowPublicView" ],
		},

		getPublishedFeed: IMapperMethod & {
		argNames: [ "feedOwner", "feedOptions", "typeOfPubFeed" ],
		},

		getThread: IMapperMethod & {
		argNames: [ "postIdentifier" ],
		},

		getUnreadMentionsCount: IMapperMethod & {
		},

		like: IMapperMethod & {
		argNames: [ "postIdentifier" ],
		},

		lockThreadById: IMapperMethod & {
		argNames: [ "threadIdentifier" ],
		},

		post: IMapperMethod & {
		argNames: [ "postOptions" ],
		},

		postReply: IMapperMethod & {
		argNames: [ "postIdentifier", "postReplyOptions" ],
		},

		repopulateLMT: IMapperMethod & {
		argNames: [ "timeStamp", "secureHash" ],
		},

		unLike: IMapperMethod & {
		argNames: [ "postIdentifier" ],
		},

		unLockThreadById: IMapperMethod & {
		argNames: [ "threadIdentifier" ],
		},

		unsubscribeFromEMail: IMapperMethod & {
		argNames: [ "postIdentifier" ],
		},

	}

	"SP.Microfeed.MicrofeedPostDefinitionManager": {
		properties?: Array<string>;
		deleteMicrofeedPostDefinition: IMapperMethod & {
		argNames: [ "postDefinition" ],
		},

		getMicrofeedPostDefinition: IMapperMethod & {
		argNames: [ "definitionName" ],
		},

		getMicrofeedPostDefinitions: IMapperMethod & {
		},

		newMicrofeedPostDefinition: IMapperMethod & {
		argNames: [ "definitionName" ],
		},

		updateMicrofeedPostDefinition: IMapperMethod & {
		argNames: [ "postDefinition" ],
		},

	}

	"SP.Microfeed.MicrofeedStore": {
		properties?: Array<string>;
		addData: IMapperMethod & {
		argNames: [ "name", "data" ],
		},

		addDataAsStream: IMapperMethod & {
		argNames: [ "name", "data" ],
		},

		executePendingOperations: IMapperMethod & {
		},

		getItem: IMapperMethod & {
		argNames: [ "storeIdentifier" ],
		},

		getSocialProperties: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		incrementUnreadAtMentionCount: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		newItem: IMapperMethod & {
		argNames: [ "storeIdentifier" ],
		},

		query: IMapperMethod & {
		argNames: [ "storeIdentifier", "query" ],
		},

		setPostLikeStatus: IMapperMethod & {
		argNames: [ "accountName", "postId", "like" ],
		},

	}

	"SP.MultilingualSettings": {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] },

		setFollowLangPreference: IMapperMethod & {
		argNames: [ "request" ],
		},

		setNotificationRecipients: IMapperMethod & {
		argNames: [ "request" ],
		},

	}

	"SP.Navigation": {
		properties?: Array<string>;
		getNodeById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.NavigationNode": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"SP.NavigationNode.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "properties" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getByIndex: IMapperMethod & {
		argNames: [ "index" ],
		},

		moveAfter: IMapperMethod & {
		argNames: [ "nodeId", "previousNodeId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.OAuth.Authentication": {
		properties?: Array<string>;
		getRenewalUrl: IMapperMethod & {
		argNames: [ "redirectUrl" ],
		},

	}

	"SP.OAuth.NativeClient": {
		properties?: Array<string>;
		authenticate: IMapperMethod & {
		},

	}

	"SP.OAuth.Token": {
		properties?: Array<string>;
		acquire: IMapperMethod & {
		argNames: [ "resource", "tokenType" ],
		},

	}

	"SP.ObjectSharingInformation": {
		properties?: Array<string>;
		getSharedWithUsers: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.OrganizationNews": {
		properties?: Array<string>;
		sitesReference: IMapperMethod & {
		},

	}

	"SP.PropertyValues.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "key", "value" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		remove: IMapperMethod & {
		argNames: [ "key" ],
		},

	}

	"SP.Publishing.AnnouncementsController": {
		properties?: Array<string>;
		active: IMapperMethod & {
		},

		channel: IMapperMethod & {
		},

		flwPropertyFilteringMapping: IMapperMethod & {
		argNames: [ "flwPropertyFilteringMapping" ],
		},

	}

	"SP.Publishing.CampaignPublication": {
		properties?: Array<string>;
		amplify: IMapperMethod & {
		},

		approveApprovalRequest: IMapperMethod & {
		argNames: [ "comment" ],
		},

		boostNews: IMapperMethod & {
		argNames: [ "SitePageBoost" ],
		},

		cancelApprovalRequest: IMapperMethod & {
		},

		cancelSchedulePublication: IMapperMethod & {
		},

		checkOut: IMapperMethod & {
		},

		checkoutPage: IMapperMethod & {
		},

		copy: IMapperMethod & {
		},

		copyTo: IMapperMethod & {
		argNames: [ "copyToParams" ],
		},

		copyWithConfiguration: IMapperMethod & {
		argNames: [ "sitePageFlags", "isNews", "creationMode" ],
		},

		createApprovalRequest: IMapperMethod & {
		argNames: [ "creationInfo" ],
		},

		createNewsCopy: IMapperMethod & {
		},

		delete: IMapperMethod & {
		},

		deletePublication: IMapperMethod & {
		},

		demoteFromNews: IMapperMethod & {
		},

		discardCoAuth: IMapperMethod & {
		argNames: [ "lockId" ],
		},

		discardPage: IMapperMethod & {
		},

		extendSessionCoAuth: IMapperMethod & {
		argNames: [ "authoringMetadata" ],
		},

		getDependencyMetadata: IMapperMethod & {
		},

		getHighlightsInfo: IMapperMethod & {
		},

		getLatestVersionsInDescendingOrder: IMapperMethod & {
		argNames: [ "numVersions" ],
		},

		getPrePublishValidationStatus: IMapperMethod & {
		},

		getPublishingStatus: IMapperMethod & {
		},

		getVersion: IMapperMethod & {
		argNames: [ "versionId" ],
		},

		loadMailDraft: IMapperMethod & {
		argNames: [ "requestParam" ],
		},

		move: IMapperMethod & {
		argNames: [ "pageMoveParams" ],
		},

		prepare: IMapperMethod & {
		},

		promoteToNews: IMapperMethod & {
		},

		publish: IMapperMethod & {
		},

		publishAsBot: IMapperMethod & {
		argNames: [ "tenantId", "channelIds", "content", "title", "headline" ],
		},

		publishCoAuth: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		publishPublication: IMapperMethod & {
		},

		rejectApprovalRequest: IMapperMethod & {
		argNames: [ "comment" ],
		},

		resetEndpoint: IMapperMethod & {
		argNames: [ "requestParam" ],
		},

		restoreByLabel: IMapperMethod & {
		argNames: [ "versionlabel" ],
		},

		sPSiteValidator: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		saveDraft: IMapperMethod & {
		argNames: [ "sitePage" ],
		},

		saveMailDraft: IMapperMethod & {
		argNames: [ "requestParam" ],
		},

		savePage: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		savePageAsDraft: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		savePageAsTemplate: IMapperMethod & {
		},

		savePageAsTemplate2: IMapperMethod & {
		argNames: [ "creationMode" ],
		},

		savePageAsTemplateOnMySite: IMapperMethod & {
		},

		savePageCoAuth: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		saveStreams: IMapperMethod & {
		argNames: [ "contentStream", "sharedLockId", "scenario" ],
		},

		schedulePublication: IMapperMethod & {
		argNames: [ "publishStartDate" ],
		},

		schedulePublish: IMapperMethod & {
		argNames: [ "sitePage" ],
		},

		sendTestEmail: IMapperMethod & {
		argNames: [ "transpileContent" ],
		},

		sendTestTeamsMessage: IMapperMethod & {
		argNames: [ "audienceId", "transpileContent" ],
		},

		sharePagePreviewByEmail: IMapperMethod & {
		argNames: [ "message", "recipientEmails" ],
		},

		startCoAuth: IMapperMethod & {
		argNames: [ "paramsStream" ],
		},

		startExclusiveAuthoring: IMapperMethod & {
		},

		syncApprovalRequest: IMapperMethod & {
		},

		tryProcessSourcePageAfterPageMovePublish: IMapperMethod & {
		},

		tryProcessSourcePageBeforePageMovePublish: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

		updateSharePointPublishingStatus: IMapperMethod & {
		argNames: [ "destinationSiteId", "destinationUrl", "sharePointPublishingStatus", "sharePointPublishingErrorCode" ],
		},

		validate: IMapperMethod & {
		},

	}

	"SP.Publishing.CommunicationSite": {
		properties?: Array<string>;
		create: IMapperMethod & {
		argNames: [ "request" ],
		},

		enable: IMapperMethod & {
		argNames: [ "designPackageId" ],
		},

		status: IMapperMethod & {
		argNames: [ "url" ],
		},

	}

	"SP.Publishing.EmbedService": {
		properties?: Array<string>;
		embedData: IMapperMethod & {
		argNames: [ "url", "version" ],
		},

	}

	"SP.Publishing.FeedVideoPage": {
		properties?: Array<string>;
		amplify: IMapperMethod & {
		argNames: [ "request" ],
		},

		boostNews: IMapperMethod & {
		argNames: [ "SitePageBoost" ],
		},

		checkOut: IMapperMethod & {
		},

		checkoutPage: IMapperMethod & {
		},

		copy: IMapperMethod & {
		},

		copyTo: IMapperMethod & {
		argNames: [ "copyToParams" ],
		},

		copyWithConfiguration: IMapperMethod & {
		argNames: [ "sitePageFlags", "isNews", "creationMode" ],
		},

		createNewsCopy: IMapperMethod & {
		},

		demoteFromNews: IMapperMethod & {
		},

		discardCoAuth: IMapperMethod & {
		argNames: [ "lockId" ],
		},

		discardPage: IMapperMethod & {
		},

		extendSessionCoAuth: IMapperMethod & {
		argNames: [ "authoringMetadata" ],
		},

		getDependencyMetadata: IMapperMethod & {
		},

		getHighlightsInfo: IMapperMethod & {
		},

		getLatestVersionsInDescendingOrder: IMapperMethod & {
		argNames: [ "numVersions" ],
		},

		getVersion: IMapperMethod & {
		argNames: [ "versionId" ],
		},

		move: IMapperMethod & {
		argNames: [ "pageMoveParams" ],
		},

		promoteToNews: IMapperMethod & {
		},

		publish: IMapperMethod & {
		},

		publishCoAuth: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		restoreByLabel: IMapperMethod & {
		argNames: [ "versionlabel" ],
		},

		saveDraft: IMapperMethod & {
		argNames: [ "sitePage" ],
		},

		savePage: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		savePageAsDraft: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		savePageAsTemplate: IMapperMethod & {
		},

		savePageAsTemplate2: IMapperMethod & {
		argNames: [ "creationMode" ],
		},

		savePageAsTemplateOnMySite: IMapperMethod & {
		},

		savePageCoAuth: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		saveStreams: IMapperMethod & {
		argNames: [ "contentStream", "sharedLockId", "scenario" ],
		},

		schedulePublish: IMapperMethod & {
		argNames: [ "sitePage" ],
		},

		sendTestEmail: IMapperMethod & {
		argNames: [ "transpileContent", "subject", "sensitivityLabelId" ],
		},

		sendTestTeamsMessage: IMapperMethod & {
		argNames: [ "audienceId", "transpileContent" ],
		},

		sharePagePreviewByEmail: IMapperMethod & {
		argNames: [ "message", "recipientEmails" ],
		},

		startCoAuth: IMapperMethod & {
		argNames: [ "paramsStream" ],
		},

		startExclusiveAuthoring: IMapperMethod & {
		},

		tryProcessSourcePageAfterPageMovePublish: IMapperMethod & {
		},

		tryProcessSourcePageBeforePageMovePublish: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"SP.Publishing.FeedVideoPage.Collection": {
		properties?: Array<string>;
		isContentTypeAvailable: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.Navigation.PortalNavigationCacheWrapper": {
		properties?: Array<string>;
		disable: IMapperMethod & {
		},

		enable: IMapperMethod & {
		},

		refresh: IMapperMethod & {
		},

	}

	"SP.Publishing.Navigation.StructuralNavigationCacheWrapper": {
		properties?: Array<string>;
		setSiteState: IMapperMethod & {
		argNames: [ "state" ],
		},

		setWebState: IMapperMethod & {
		argNames: [ "state" ],
		},

		siteState: IMapperMethod & {
		},

		webState: IMapperMethod & {
		},

	}

	"SP.Publishing.PageDiagnosticsController": {
		properties?: Array<string>;
		byPage: IMapperMethod & {
		argNames: [ "pageRelativeFilePath" ],
		},

		save: IMapperMethod & {
		argNames: [ "pageDiagnosticsResult" ],
		},

	}

	"SP.Publishing.PointPublishingPost": {
		properties?: Array<string>;
		addImageFromUrl: IMapperMethod & {
		argNames: [ "fromImageUrl" ],
		},

		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.PointPublishingPost.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id", "publishedOnly" ],
		},

		getByName: IMapperMethod & {
		argNames: [ "name", "publishedOnly" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.PointPublishingPostServiceManager": {
		properties?: Array<string>;
		addBannerImageFromUrl: IMapperMethod & {
		argNames: [ "fromImageUrl" ],
		},

		deleteMagazine: IMapperMethod & {
		},

		getDocProps: IMapperMethod & {
		argNames: [ "docUrls" ],
		},

		getPostsQuery: IMapperMethod & {
		argNames: [ "top", "itemIdBoundary", "directionAscending", "publishedOnly", "draftsOnly" ],
		},

		getTopAuthors: IMapperMethod & {
		argNames: [ "count" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		queryGroupNames: IMapperMethod & {
		argNames: [ "query" ],
		},

		setMagazineProperties: IMapperMethod & {
		argNames: [ "title", "description", "bannerImageUrl", "bannerColor", "bannerPattern" ],
		},

	}

	"SP.Publishing.PointPublishingSiteManager": {
		properties?: Array<string>;
		create: IMapperMethod & {
		argNames: [ "siteInfo" ],
		},

		getSiteStatus: IMapperMethod & {
		argNames: [ "siteInfo" ],
		},

	}

	"SP.Publishing.PointPublishingTenantManager": {
		properties?: Array<string>;
		isBlogEnabled: IMapperMethod & {
		},

	}

	"SP.Publishing.PointPublishingUser": {
		properties?: Array<string>;
		deleteUserFromContainerGroup: IMapperMethod & {
		},

	}

	"SP.Publishing.PointPublishingUser.Collection": {
		properties?: Array<string>;
		addOrUpdateUser: IMapperMethod & {
		argNames: [ "loginName", "isOwner" ],
		},

		getById: IMapperMethod & {
		argNames: [ "userId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.PortalLaunch.PortalLaunchWavesManager": {
		properties?: Array<string>;
		get: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		getAll: IMapperMethod & {
		},

		remove: IMapperMethod & {
		argNames: [ "siteUrl" ],
		},

		saveWaveSetup: IMapperMethod & {
		argNames: [ "portalLaunchSetup" ],
		},

	}

	"SP.Publishing.RepostPage": {
		properties?: Array<string>;
		amplify: IMapperMethod & {
		argNames: [ "request" ],
		},

		boostNews: IMapperMethod & {
		argNames: [ "SitePageBoost" ],
		},

		checkOut: IMapperMethod & {
		},

		checkoutPage: IMapperMethod & {
		},

		copy: IMapperMethod & {
		},

		copyTo: IMapperMethod & {
		argNames: [ "copyToParams" ],
		},

		copyWithConfiguration: IMapperMethod & {
		argNames: [ "sitePageFlags", "isNews", "creationMode" ],
		},

		createNewsCopy: IMapperMethod & {
		},

		demoteFromNews: IMapperMethod & {
		},

		discardCoAuth: IMapperMethod & {
		argNames: [ "lockId" ],
		},

		discardPage: IMapperMethod & {
		},

		extendSessionCoAuth: IMapperMethod & {
		argNames: [ "authoringMetadata" ],
		},

		getDependencyMetadata: IMapperMethod & {
		},

		getHighlightsInfo: IMapperMethod & {
		},

		getLatestVersionsInDescendingOrder: IMapperMethod & {
		argNames: [ "numVersions" ],
		},

		getVersion: IMapperMethod & {
		argNames: [ "versionId" ],
		},

		move: IMapperMethod & {
		argNames: [ "pageMoveParams" ],
		},

		promoteToNews: IMapperMethod & {
		},

		publish: IMapperMethod & {
		},

		publishCoAuth: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		restoreByLabel: IMapperMethod & {
		argNames: [ "versionlabel" ],
		},

		saveDraft: IMapperMethod & {
		argNames: [ "sitePage" ],
		},

		savePage: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		savePageAsDraft: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		savePageAsTemplate: IMapperMethod & {
		},

		savePageAsTemplate2: IMapperMethod & {
		argNames: [ "creationMode" ],
		},

		savePageAsTemplateOnMySite: IMapperMethod & {
		},

		savePageCoAuth: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		saveStreams: IMapperMethod & {
		argNames: [ "contentStream", "sharedLockId", "scenario" ],
		},

		schedulePublish: IMapperMethod & {
		argNames: [ "sitePage" ],
		},

		sendTestEmail: IMapperMethod & {
		argNames: [ "transpileContent", "subject", "sensitivityLabelId" ],
		},

		sendTestTeamsMessage: IMapperMethod & {
		argNames: [ "audienceId", "transpileContent" ],
		},

		sharePagePreviewByEmail: IMapperMethod & {
		argNames: [ "message", "recipientEmails" ],
		},

		startCoAuth: IMapperMethod & {
		argNames: [ "paramsStream" ],
		},

		startExclusiveAuthoring: IMapperMethod & {
		},

		tryProcessSourcePageAfterPageMovePublish: IMapperMethod & {
		},

		tryProcessSourcePageBeforePageMovePublish: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"SP.Publishing.RepostPage.Collection": {
		properties?: Array<string>;
		isContentTypeAvailable: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.RichSharing": {
		properties?: Array<string>;
		sharePageByEmail: IMapperMethod & {
		argNames: [ "url", "message", "recipientEmails", "pageContent", "subject", "ccEmails", "bccEmails", "pageItemId", "scenarioTag", "emailSize" ],
		},

		shareSiteByEmail: IMapperMethod & {
		argNames: [ "CustomDescription", "CustomTitle", "Message", "Url", "recipientEmails" ],
		},

	}

	"SP.Publishing.Search": {
		properties?: Array<string>;
		newest: IMapperMethod & {
		argNames: [ "startItemIndex", "itemLimit" ],
		},

		popular: IMapperMethod & {
		argNames: [ "startItemIndex", "itemLimit" ],
		},

		query: IMapperMethod & {
		argNames: [ "queryText", "startItemIndex", "itemLimit", "culture" ],
		},

		queryChannels: IMapperMethod & {
		argNames: [ "queryText", "startItemIndex", "itemLimit", "culture" ],
		},

		related: IMapperMethod & {
		argNames: [ "videoId", "startItemIndex", "itemLimit" ],
		},

	}

	"SP.Publishing.SharePointHomeServiceManager": {
		properties?: Array<string>;
		getAcronymsAndColors: IMapperMethod & {
		argNames: [ "labels" ],
		},

	}

	"SP.Publishing.SitePage": {
		properties?: Array<string>;
		amplify: IMapperMethod & {
		argNames: [ "request" ],
		},

		boostNews: IMapperMethod & {
		argNames: [ "SitePageBoost" ],
		},

		checkOut: IMapperMethod & {
		},

		checkoutPage: IMapperMethod & {
		},

		copy: IMapperMethod & {
		},

		copyTo: IMapperMethod & {
		argNames: [ "copyToParams" ],
		},

		copyWithConfiguration: IMapperMethod & {
		argNames: [ "sitePageFlags", "isNews", "creationMode" ],
		},

		createNewsCopy: IMapperMethod & {
		},

		demoteFromNews: IMapperMethod & {
		},

		discardCoAuth: IMapperMethod & {
		argNames: [ "lockId" ],
		},

		discardPage: IMapperMethod & {
		},

		extendSessionCoAuth: IMapperMethod & {
		argNames: [ "authoringMetadata" ],
		},

		getDependencyMetadata: IMapperMethod & {
		},

		getHighlightsInfo: IMapperMethod & {
		},

		getLatestVersionsInDescendingOrder: IMapperMethod & {
		argNames: [ "numVersions" ],
		},

		getVersion: IMapperMethod & {
		argNames: [ "versionId" ],
		},

		move: IMapperMethod & {
		argNames: [ "pageMoveParams" ],
		},

		promoteToNews: IMapperMethod & {
		},

		publish: IMapperMethod & {
		},

		publishCoAuth: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		restoreByLabel: IMapperMethod & {
		argNames: [ "versionlabel" ],
		},

		saveDraft: IMapperMethod & {
		argNames: [ "sitePage" ],
		},

		savePage: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		savePageAsDraft: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		savePageAsTemplate: IMapperMethod & {
		},

		savePageAsTemplate2: IMapperMethod & {
		argNames: [ "creationMode" ],
		},

		savePageAsTemplateOnMySite: IMapperMethod & {
		},

		savePageCoAuth: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		saveStreams: IMapperMethod & {
		argNames: [ "contentStream", "sharedLockId", "scenario" ],
		},

		schedulePublish: IMapperMethod & {
		argNames: [ "sitePage" ],
		},

		sendTestEmail: IMapperMethod & {
		argNames: [ "transpileContent", "subject", "sensitivityLabelId" ],
		},

		sendTestTeamsMessage: IMapperMethod & {
		argNames: [ "audienceId", "transpileContent" ],
		},

		sharePagePreviewByEmail: IMapperMethod & {
		argNames: [ "message", "recipientEmails" ],
		},

		startCoAuth: IMapperMethod & {
		argNames: [ "paramsStream" ],
		},

		startExclusiveAuthoring: IMapperMethod & {
		},

		tryProcessSourcePageAfterPageMovePublish: IMapperMethod & {
		},

		tryProcessSourcePageBeforePageMovePublish: IMapperMethod & {
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.Publishing.SitePage.Collection": {
		properties?: Array<string>;
		copyToStatus: IMapperMethod & {
		argNames: [ "workItemId" ],
		},

		createAppPage: IMapperMethod & {
		argNames: [ "webPartDataAsJson" ],
		},

		ensureTitleResource: IMapperMethod & {
		},

		feed: IMapperMethod & {
		argNames: [ "promotedState", "published", "metadataFilter", "languageOverride" ],
		},

		feedTargeted: IMapperMethod & {
		argNames: [ "promotedState", "published", "metadataFilter", "languageOverride" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getByUniqueId: IMapperMethod & {
		argNames: [ "uniqueId" ],
		},

		getByUrl: IMapperMethod & {
		argNames: [ "url" ],
		},

		getPageColumnState: IMapperMethod & {
		argNames: [ "url" ],
		},

		getTranslations: IMapperMethod & {
		argNames: [ "sourceItemId" ],
		},

		isSitePage: IMapperMethod & {
		argNames: [ "url" ],
		},

		pageMoveStatus: IMapperMethod & {
		argNames: [ "workItemId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		setMultilingual: IMapperMethod & {
		argNames: [ "enabled" ],
		},

		setScheduling: IMapperMethod & {
		argNames: [ "enabled" ],
		},

		templates: IMapperMethod & {
		},

		updateAppPage: IMapperMethod & {
		argNames: [ "pageId", "webPartDataAsJson", "title", "includeInNavigation" ],
		},

		updateFullPageApp: IMapperMethod & {
		argNames: [ "serverRelativeUrl", "webPartDataAsJson" ],
		},

	}

	"SP.Publishing.SitePage3D": {
		properties?: Array<string>;
		amplify: IMapperMethod & {
		argNames: [ "request" ],
		},

		boostNews: IMapperMethod & {
		argNames: [ "SitePageBoost" ],
		},

		checkOut: IMapperMethod & {
		},

		checkoutPage: IMapperMethod & {
		},

		copy: IMapperMethod & {
		},

		copyTo: IMapperMethod & {
		argNames: [ "copyToParams" ],
		},

		copyWithConfiguration: IMapperMethod & {
		argNames: [ "sitePageFlags", "isNews", "creationMode" ],
		},

		createNewsCopy: IMapperMethod & {
		},

		demoteFromNews: IMapperMethod & {
		},

		discardCoAuth: IMapperMethod & {
		argNames: [ "lockId" ],
		},

		discardPage: IMapperMethod & {
		},

		extendSessionCoAuth: IMapperMethod & {
		argNames: [ "authoringMetadata" ],
		},

		getDependencyMetadata: IMapperMethod & {
		},

		getHighlightsInfo: IMapperMethod & {
		},

		getLatestVersionsInDescendingOrder: IMapperMethod & {
		argNames: [ "numVersions" ],
		},

		getVersion: IMapperMethod & {
		argNames: [ "versionId" ],
		},

		move: IMapperMethod & {
		argNames: [ "pageMoveParams" ],
		},

		promoteToNews: IMapperMethod & {
		},

		publish: IMapperMethod & {
		},

		publishCoAuth: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		restoreByLabel: IMapperMethod & {
		argNames: [ "versionlabel" ],
		},

		saveDraft: IMapperMethod & {
		argNames: [ "sitePage" ],
		},

		savePage: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		savePageAsDraft: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		savePageAsTemplate: IMapperMethod & {
		},

		savePageAsTemplate2: IMapperMethod & {
		argNames: [ "creationMode" ],
		},

		savePageAsTemplateOnMySite: IMapperMethod & {
		},

		savePageCoAuth: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		saveStreams: IMapperMethod & {
		argNames: [ "contentStream", "sharedLockId", "scenario" ],
		},

		schedulePublish: IMapperMethod & {
		argNames: [ "sitePage" ],
		},

		sendTestEmail: IMapperMethod & {
		argNames: [ "transpileContent", "subject", "sensitivityLabelId" ],
		},

		sendTestTeamsMessage: IMapperMethod & {
		argNames: [ "audienceId", "transpileContent" ],
		},

		sharePagePreviewByEmail: IMapperMethod & {
		argNames: [ "message", "recipientEmails" ],
		},

		startCoAuth: IMapperMethod & {
		argNames: [ "paramsStream" ],
		},

		startExclusiveAuthoring: IMapperMethod & {
		},

		tryProcessSourcePageAfterPageMovePublish: IMapperMethod & {
		},

		tryProcessSourcePageBeforePageMovePublish: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"SP.Publishing.SitePage3D.Collection": {
		properties?: Array<string>;
		activate: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.SitePageMetadata.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.SitePageService": {
		properties?: Array<string>;
		addImage: IMapperMethod & {
		argNames: [ "pageName", "imageFileName", "pageId", "imageStream" ],
		},

		addImageFromExternalUrl: IMapperMethod & {
		argNames: [ "pageName", "imageFileName", "externalUrl", "subFolderName", "pageId" ],
		},

		canCreatePage: IMapperMethod & {
		},

		canCreatePromotedPage: IMapperMethod & {
		},

		enableAmplifyFromAnywhere: IMapperMethod & {
		},

		enableAnnouncements: IMapperMethod & {
		},

		enableCategories: IMapperMethod & {
		},

		getOrCreateAssetFolder: IMapperMethod & {
		argNames: [ "pageName", "createFolderIfNeeded", "subFolderName", "pageId" ],
		},

		pagesInLib: IMapperMethod & {
		argNames: [ "id" ],
		},

		pagesInLibByName: IMapperMethod & {
		argNames: [ "name" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"SP.Publishing.SpotlightChannel": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"SP.Publishing.SpotlightChannel.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.SpotlightVideo": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"SP.Publishing.SpotlightVideo.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.SubtitleFile.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "language", "extension", "stream" ],
		},

		getSubtitleFile: IMapperMethod & {
		argNames: [ "name" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		remove: IMapperMethod & {
		argNames: [ "name" ],
		},

	}

	"SP.Publishing.TopicSitePage": {
		properties?: Array<string>;
		amplify: IMapperMethod & {
		argNames: [ "request" ],
		},

		boostNews: IMapperMethod & {
		argNames: [ "SitePageBoost" ],
		},

		checkOut: IMapperMethod & {
		},

		checkoutPage: IMapperMethod & {
		},

		copy: IMapperMethod & {
		},

		copyTo: IMapperMethod & {
		argNames: [ "copyToParams" ],
		},

		copyWithConfiguration: IMapperMethod & {
		argNames: [ "sitePageFlags", "isNews", "creationMode" ],
		},

		createNewsCopy: IMapperMethod & {
		},

		demoteFromNews: IMapperMethod & {
		},

		discardCoAuth: IMapperMethod & {
		argNames: [ "lockId" ],
		},

		discardPage: IMapperMethod & {
		},

		extendSessionCoAuth: IMapperMethod & {
		argNames: [ "authoringMetadata" ],
		},

		getDependencyMetadata: IMapperMethod & {
		},

		getHighlightsInfo: IMapperMethod & {
		},

		getLatestVersionsInDescendingOrder: IMapperMethod & {
		argNames: [ "numVersions" ],
		},

		getVersion: IMapperMethod & {
		argNames: [ "versionId" ],
		},

		move: IMapperMethod & {
		argNames: [ "pageMoveParams" ],
		},

		promoteToNews: IMapperMethod & {
		},

		publish: IMapperMethod & {
		},

		publishCoAuth: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		restoreByLabel: IMapperMethod & {
		argNames: [ "versionlabel" ],
		},

		saveDraft: IMapperMethod & {
		argNames: [ "sitePage" ],
		},

		savePage: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		savePageAsDraft: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		savePageAsTemplate: IMapperMethod & {
		},

		savePageAsTemplate2: IMapperMethod & {
		argNames: [ "creationMode" ],
		},

		savePageAsTemplateOnMySite: IMapperMethod & {
		},

		savePageCoAuth: IMapperMethod & {
		argNames: [ "pageStream" ],
		},

		saveStreams: IMapperMethod & {
		argNames: [ "contentStream", "sharedLockId", "scenario" ],
		},

		schedulePublish: IMapperMethod & {
		argNames: [ "sitePage" ],
		},

		sendTestEmail: IMapperMethod & {
		argNames: [ "transpileContent", "subject", "sensitivityLabelId" ],
		},

		sendTestTeamsMessage: IMapperMethod & {
		argNames: [ "audienceId", "transpileContent" ],
		},

		sharePagePreviewByEmail: IMapperMethod & {
		argNames: [ "message", "recipientEmails" ],
		},

		startCoAuth: IMapperMethod & {
		argNames: [ "paramsStream" ],
		},

		startExclusiveAuthoring: IMapperMethod & {
		},

		tryProcessSourcePageAfterPageMovePublish: IMapperMethod & {
		},

		tryProcessSourcePageBeforePageMovePublish: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"SP.Publishing.TopicSitePage.Collection": {
		properties?: Array<string>;
		getByEntityId: IMapperMethod & {
		argNames: [ "entityId" ],
		},

		getByEntityIdAndCulture: IMapperMethod & {
		argNames: [ "id", "culture" ],
		},

		getPagesByEntityId: IMapperMethod & {
		argNames: [ "entityId" ],
		},

		isContentTypeAvailable: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.VideoChannel": {
		properties?: Array<string>;
		getAllVideos: IMapperMethod & {
		argNames: [ "skip", "limit" ],
		},

		getChannelPageUrl: IMapperMethod & {
		argNames: [ "viewMode" ],
		},

		getMyVideos: IMapperMethod & {
		argNames: [ "skip", "limit" ],
		},

		getPermissionGroup: IMapperMethod & {
		argNames: [ "permission" ],
		},

		getVideoCount: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"SP.Publishing.VideoChannel.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.VideoItem": {
		properties?: Array<string>;
		customThumbnail: IMapperMethod & {
		},

		delete: IMapperMethod & {
		},

		getFile: IMapperMethod & {
		},

		getPlaybackMetadata: IMapperMethod & {
		argNames: [ "sdnConfiguration" ],
		},

		getPlaybackUrl: IMapperMethod & {
		argNames: [ "videoFormat" ],
		},

		getStreamingKeyAccessToken: IMapperMethod & {
		},

		getVideoDetailedViewCount: IMapperMethod & {
		},

		getVideoEmbedCode: IMapperMethod & {
		argNames: [ "width", "height", "autoplay", "showInfo", "makeResponsive" ],
		},

		getVideoViewProgressCount: IMapperMethod & {
		},

		incrementVideoViewProgressCount: IMapperMethod & {
		argNames: [ "percentageViewed" ],
		},

		incrementViewCount: IMapperMethod & {
		argNames: [ "viewOrigin" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		setPeopleInMedia: IMapperMethod & {
		argNames: [ "loginNames" ],
		},

		setVideoOwner: IMapperMethod & {
		argNames: [ "id" ],
		},

		subtitles: IMapperMethod & {
		},

		thumbnailStream: IMapperMethod & {
		argNames: [ "preferredWidth" ],
		},

		thumbnails: IMapperMethod & {
		argNames: [ "preferredWidth" ],
		},

		update: IMapperMethod & {
		},

		uploadCustomThumbnail: IMapperMethod & {
		argNames: [ "fileExtension", "customVideoThumbnail" ],
		},

	}

	"SP.Publishing.VideoItem.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.VideoPermissionGroup": {
		properties?: Array<string>;
		hasCurrentUser: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.VideoServiceManager": {
		properties?: Array<string>;
		getChannels: IMapperMethod & {
		argNames: [ "startIndex", "limit" ],
		},

		getPermissionGroup: IMapperMethod & {
		argNames: [ "permission" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Publishing.VideoThumbnail.Collection": {
		properties?: Array<string>;
		getByIndex: IMapperMethod & {
		argNames: [ "choice" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.PushNotificationSubscriber": {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"SP.PushNotificationSubscriber.Collection": {
		properties?: Array<string>;
		getByStoreId: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.RecycleBinItem": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		moveToSecondStage: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		restore: IMapperMethod & {
		},

	}

	"SP.RecycleBinItem.Collection": {
		properties?: Array<string>;
		deleteAll: IMapperMethod & {
		},

		deleteAllSecondStageItems: IMapperMethod & {
		},

		deleteByIds: IMapperMethod & {
		argNames: [ "ids" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		moveAllToSecondStage: IMapperMethod & {
		},

		moveToSecondStageByIds: IMapperMethod & {
		argNames: [ "ids" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		restoreAll: IMapperMethod & {
		},

		restoreByIds: IMapperMethod & {
		argNames: [ "ids", "bRenameExistingItems" ],
		},

	}

	"SP.RegionalSettings": {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		},

	}

	"SP.RelatedField.Collection": {
		properties?: Array<string>;
		getByFieldId: IMapperMethod & {
		argNames: [ "fieldId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.RemoteWeb": {
		properties?: Array<string>;
		getFileByServerRelativePath: IMapperMethod & {
		argNames: [ "serverRelatvieFilePath" ],
		},

		getFileByServerRelativeUrl: IMapperMethod & {
		argNames: [ "serverRelativeFileUrl" ],
		},

		getFileByUrl: IMapperMethod & {
		argNames: [ "fileUrl" ],
		},

		getFolderByServerRelativeUrl: IMapperMethod & {
		argNames: [ "serverRelativeUrl" ],
		},

		getGroupById: IMapperMethod & {
		argNames: [ "groupId" ],
		},

		getListById: IMapperMethod & {
		argNames: [ "listGuid" ],
		},

		getListByServerRelativeUrl: IMapperMethod & {
		argNames: [ "serverRelativeUrl" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.RequestContext": {
		properties?: Array<string>;
		getRemoteContext: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.RoleAssignment": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.RoleAssignment.Collection": {
		properties?: Array<string>;
		addRoleAssignment: IMapperMethod & {
		argNames: [ "principalId", "roleDefId" ],
		},

		getByPrincipalId: IMapperMethod & {
		argNames: [ "principalId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		removeRoleAssignment: IMapperMethod & {
		argNames: [ "principalId", "roleDefId" ],
		},

	}

	"SP.RoleDefinition": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.RoleDefinition.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "properties" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getByName: IMapperMethod & {
		argNames: [ "name" ],
		},

		getByType: IMapperMethod & {
		argNames: [ "roleType" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		recreateMissingDefaultRoleDefinitions: IMapperMethod & {
		},

		removeAll: IMapperMethod & {
		},

	}

	"SP.SPAppLicenseManager": {
		properties?: Array<string>;
		checkLicense: IMapperMethod & {
		argNames: [ "productId" ],
		},

	}

	"SP.SPHSite": {
		properties?: Array<string>;
		addHomeSite: IMapperMethod & {
		argNames: [ "siteUrl", "order", "audiences", "vivaConnectionsDefaultStart", "isInDraftMode" ],
		},

		details: IMapperMethod & {
		argNames: [ "includeVivaSites" ],
		},

		setSPHSite: IMapperMethod & {
		argNames: [ "siteUrl", "vivaConnectionsDefaultStart", "isInDraftMode" ],
		},

	}

	"SP.ScriptSafeDomain": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

	}

	"SP.ScriptSafeDomain.Collection": {
		properties?: Array<string>;
		create: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getByDomainName: IMapperMethod & {
		argNames: [ "domainName" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.SecurableObject": {
		properties?: Array<string>;
		breakRoleInheritance: IMapperMethod & {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		resetRoleInheritance: IMapperMethod & {
		},

	}

	"SP.Site": {
		properties?: Array<string>;
		cancelDeleteFileVersions: IMapperMethod & {
		},

		cancelSetVersionPolicyForDocLibs: IMapperMethod & {
		},

		createCopyJob: IMapperMethod & {
		argNames: [ "exportObjectUris", "destinationUri", "options" ],
		},

		createCopyJobs: IMapperMethod & {
		argNames: [ "exportObjectUris", "destinationUri", "options" ],
		},

		createMigrationIngestionJob: IMapperMethod & {
		argNames: [ "gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri", "ingestionTaskKey" ],
		},

		createMigrationJob: IMapperMethod & {
		argNames: [ "gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri" ],
		},

		createMigrationJobEncrypted: IMapperMethod & {
		argNames: [ "gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri", "options" ],
		},

		createPreviewSPSite: IMapperMethod & {
		argNames: [ "upgrade", "sendemail" ],
		},

		createSPAsyncReadJob: IMapperMethod & {
		argNames: [ "url", "readOptions", "encryptionOption", "azureContainerManifestUri", "azureQueueReportUri" ],
		},

		createSPAsyncReadJobWithMultiUrl: IMapperMethod & {
		argNames: [ "urls", "readOptions", "encryptionOption", "azureContainerManifestUri", "azureQueueReportUri" ],
		},

		deleteMigrationJob: IMapperMethod & {
		argNames: [ "id" ],
		},

		enqueueApplySensitivityLabelWork: IMapperMethod & {
		argNames: [ "workItemInformation" ],
		},

		extendUpgradeReminderDate: IMapperMethod & {
		},

		getBlockDownloadPolicyForFilesData: IMapperMethod & {
		},

		getBringYourOwnKeyRecoveryKeyMode: IMapperMethod & {
		},

		getBringYourOwnKeySiteStatus: IMapperMethod & {
		},

		getBringYourOwnKeyTenantStatus: IMapperMethod & {
		},

		getCatalog: IMapperMethod & {
		argNames: [ "typeCatalog" ],
		},

		getChanges: IMapperMethod & {
		argNames: [ "query" ],
		},

		getCopyJobProgress: IMapperMethod & {
		argNames: [ "copyJobInfo" ],
		},

		getHubSiteJoinApprovalCorrelationId: IMapperMethod & {
		},

		getMigrationJobProgress: IMapperMethod & {
		argNames: [ "jobId", "nextToken" ],
		},

		getMigrationJobStatus: IMapperMethod & {
		argNames: [ "id" ],
		},

		getMigrationStatus: IMapperMethod & {
		},

		getProgressForDeleteFileVersions: IMapperMethod & {
		},

		getProgressForExpireFileVersionsBySchedule: IMapperMethod & {
		argNames: [ "scheduleFilePath" ],
		},

		getProgressForFileVersionExpirationReport: IMapperMethod & {
		argNames: [ "reportFileUrl" ],
		},

		getProgressForSetVersionPolicyForDocLibs: IMapperMethod & {
		},

		getRecycleBinItems: IMapperMethod & {
		argNames: [ "pagingInfo", "rowLimit", "isAscending", "orderBy", "itemState" ],
		},

		getWebPath: IMapperMethod & {
		argNames: [ "siteId", "webId" ],
		},

		getWebTemplates: IMapperMethod & {
		argNames: [ "LCID", "overrideCompatLevel" ],
		},

		invalidate: IMapperMethod & {
		},

		joinHubSite: IMapperMethod & {
		argNames: [ "hubSiteId", "approvalToken", "approvalCorrelationId" ],
		},

		multiGeoCopyJob: IMapperMethod & {
		argNames: [ "jobId", "userId", "binaryPayload" ],
		},

		needsUpgradeByType: IMapperMethod & {
		argNames: [ "versionUpgrade", "recursive" ],
		},

		needsUpgradeByTypeFromSpoShell: IMapperMethod & {
		argNames: [ "versionUpgrade", "recursive" ],
		},

		onHubSiteJoinRequestApproved: IMapperMethod & {
		argNames: [ "joiningSiteId" ],
		},

		onHubSiteJoinRequestCanceled: IMapperMethod & {
		argNames: [ "approvalCorrelationId" ],
		},

		onHubSiteJoinRequestStarted: IMapperMethod & {
		argNames: [ "approvalCorrelationId" ],
		},

		onboardTenantForBringYourOwnKey: IMapperMethod & {
		argNames: [ "keyInfo" ],
		},

		openWeb: IMapperMethod & {
		argNames: [ "strUrl" ],
		},

		openWebById: IMapperMethod & {
		argNames: [ "gWebId" ],
		},

		openWebUsingPath: IMapperMethod & {
		argNames: [ "path" ],
		},

		processStorageMetricsChanges: IMapperMethod & {
		},

		provisionMigrationContainers: IMapperMethod & {
		},

		provisionMigrationQueue: IMapperMethod & {
		},

		provisionTemporaryAzureContainer: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		recoverTenantForBringYourOwnKey: IMapperMethod & {
		argNames: [ "keyInfo" ],
		},

		registerHubSite: IMapperMethod & {
		argNames: [ "creationInformation" ],
		},

		rollTenantBringYourOwnKey: IMapperMethod & {
		argNames: [ "keyType", "keyVaultInfo" ],
		},

		runHealthCheck: IMapperMethod & {
		argNames: [ "ruleId", "bRepair", "bRunAlways" ],
		},

		runUpgradeSiteSession: IMapperMethod & {
		argNames: [ "versionUpgrade", "queueOnly", "sendEmail" ],
		},

		setBlockDownloadPolicyForFiles: IMapperMethod & {
		argNames: [ "blockDownloadPolicyFileTypeIds" ],
		},

		setIsContributorOwnerEnabledPropertyForDefaultDocLib: IMapperMethod & {
		argNames: [ "propertyValue", "forceDocLibActivation", "deleteIfDocLibAlreadyExists" ],
		},

		startDeleteFileVersions: IMapperMethod & {
		argNames: [ "deleteOlderThanDays" ],
		},

		startDeleteFileVersionsByMode: IMapperMethod & {
		argNames: [ "batchDeleteParameters" ],
		},

		startExpireFileVersionsBySchedule: IMapperMethod & {
		argNames: [ "scheduleFilePath" ],
		},

		startFileVersionExpirationReport: IMapperMethod & {
		argNames: [ "reportFileUrl" ],
		},

		startSetVersionPolicyForDocLibs: IMapperMethod & {
		argNames: [ "enableAutoTrim", "majorVersionLimit", "majorWithMinorVersionsLimit", "expireAfterDays" ],
		},

		unregisterHubSite: IMapperMethod & {
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

		updateClientObjectModelUseRemoteAPIsPermissionSetting: IMapperMethod & {
		argNames: [ "requireUseRemoteAPIs" ],
		},

		updateInactiveSiteProperties: IMapperMethod & {
		argNames: [ "operation", "executionId" ],
		},

		validateHubSiteJoinApprovalToken: IMapperMethod & {
		argNames: [ "joiningSiteId", "approvalToken" ],
		},

	}

	"SP.SiteVersionPolicyManager": {
		properties?: Array<string>;
		inheritTenantSettings: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		setAutoExpiration: IMapperMethod & {
		},

		setExpireAfter: IMapperMethod & {
		argNames: [ "majorVersionLimit", "expireAfterDays" ],
		},

		setNoExpiration: IMapperMethod & {
		argNames: [ "majorVersionLimit" ],
		},

	}

	"SP.Social.SocialFeedManager": {
		properties?: Array<string>;
		createFileAttachment: IMapperMethod & {
		argNames: [ "name", "description", "fileData" ],
		},

		createImageAttachment: IMapperMethod & {
		argNames: [ "name", "description", "imageData" ],
		},

		createPost: IMapperMethod & {
		argNames: [ "targetId", "creationData" ],
		},

		deletePost: IMapperMethod & {
		argNames: [ "postId" ],
		},

		getAllLikers: IMapperMethod & {
		argNames: [ "postId" ],
		},

		getFeed: IMapperMethod & {
		argNames: [ "type", "options" ],
		},

		getFeedFor: IMapperMethod & {
		argNames: [ "actorId", "options" ],
		},

		getFullThread: IMapperMethod & {
		argNames: [ "threadId" ],
		},

		getMentions: IMapperMethod & {
		argNames: [ "clearUnreadMentions", "options" ],
		},

		getPreview: IMapperMethod & {
		argNames: [ "itemUrl" ],
		},

		getPreviewImage: IMapperMethod & {
		argNames: [ "url", "key", "iv" ],
		},

		getUnreadMentionCount: IMapperMethod & {
		},

		likePost: IMapperMethod & {
		argNames: [ "postId" ],
		},

		lockThread: IMapperMethod & {
		argNames: [ "threadId" ],
		},

		suppressThreadNotifications: IMapperMethod & {
		argNames: [ "threadId" ],
		},

		unlikePost: IMapperMethod & {
		argNames: [ "postId" ],
		},

		unlockThread: IMapperMethod & {
		argNames: [ "threadId" ],
		},

	}

	"SP.Social.SocialFollowingManager": {
		properties?: Array<string>;
		follow: IMapperMethod & {
		argNames: [ "actor" ],
		},

		getFollowed: IMapperMethod & {
		argNames: [ "types" ],
		},

		getFollowedCount: IMapperMethod & {
		argNames: [ "types" ],
		},

		getFollowers: IMapperMethod & {
		},

		getSuggestions: IMapperMethod & {
		},

		isFollowed: IMapperMethod & {
		argNames: [ "actor" ],
		},

		mergeFollowedSites: IMapperMethod & {
		argNames: [ "followedSites" ],
		},

		stopFollowing: IMapperMethod & {
		argNames: [ "actor" ],
		},

	}

	"SP.Social.SocialRestActor": {
		properties?: Array<string>;
		feed: IMapperMethod & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		likes: IMapperMethod & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		mentionFeed: IMapperMethod & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		news: IMapperMethod & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		organizationFeed: IMapperMethod & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		timelineFeed: IMapperMethod & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		unreadMentionCount: IMapperMethod & {
		},

	}

	"SP.Social.SocialRestFeed": {
		properties?: Array<string>;
		clearUnReadMentionCount: IMapperMethod & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
		},

		post: IMapperMethod & {
		argNames: [ "restCreationData" ],
		},

	}

	"SP.Social.SocialRestFeedManager": {
		properties?: Array<string>;
		actor: IMapperMethod & {
		argNames: [ "item" ],
		},

		my: IMapperMethod & {
		},

		post: IMapperMethod & {
		argNames: [ "ID" ],
		},

	}

	"SP.Social.SocialRestFollowingManager": {
		properties?: Array<string>;
		follow: IMapperMethod & {
		argNames: [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
		},

		followed: IMapperMethod & {
		argNames: [ "types", "count" ],
		},

		followedCount: IMapperMethod & {
		argNames: [ "types" ],
		},

		followers: IMapperMethod & {
		},

		isFollowed: IMapperMethod & {
		argNames: [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
		},

		mergeFollowedSites: IMapperMethod & {
		argNames: [ "followedSites" ],
		},

		my: IMapperMethod & {
		},

		stopFollowing: IMapperMethod & {
		argNames: [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
		},

		suggestions: IMapperMethod & {
		},

	}

	"SP.Social.SocialRestThread": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		argNames: [ "ID" ],
		},

		like: IMapperMethod & {
		argNames: [ "ID" ],
		},

		likers: IMapperMethod & {
		argNames: [ "ID" ],
		},

		lock: IMapperMethod & {
		argNames: [ "ID" ],
		},

		reply: IMapperMethod & {
		argNames: [ "restCreationData" ],
		},

		unLike: IMapperMethod & {
		argNames: [ "ID" ],
		},

		unLock: IMapperMethod & {
		argNames: [ "ID" ],
		},

	}

	"SP.Taxonomy.TaxonomyField": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		disableIndex: IMapperMethod & {
		},

		enableIndex: IMapperMethod & {
		},

		setShowInDisplayForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInEditForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		setShowInNewForm: IMapperMethod & {
		argNames: [ "value" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.TenantSettings": {
		properties?: Array<string>;
		clearCorporateCatalog: IMapperMethod & {
		},

		getDataAccessGovernanceReportConfig: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		setCorporateCatalog: IMapperMethod & {
		argNames: [ "url" ],
		},

	}

	"SP.ThemeInfo": {
		properties?: Array<string>;
		getThemeFontByName: IMapperMethod & {
		argNames: [ "name", "lcid" ],
		},

		getThemeShadeByName: IMapperMethod & {
		argNames: [ "name" ],
		},

	}

	"SP.TimeZone": {
		properties?: Array<string>;
		localTimeToUTC: IMapperMethod & {
		argNames: [ "date" ],
		},

		setId: IMapperMethod & {
		argNames: [ "id" ],
		},

		uTCToLocalTime: IMapperMethod & {
		argNames: [ "date" ],
		},

	}

	"SP.TimeZone.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Translation.SyncTranslator": {
		properties?: Array<string>;
		translate: IMapperMethod & {
		argNames: [ "inputFile", "outputFile" ],
		},

		translateStream: IMapperMethod & {
		argNames: [ "inputFile", "fileExtension" ],
		},

	}

	"SP.Translation.TranslationJob": {
		properties?: Array<string>;
		translateFile: IMapperMethod & {
		argNames: [ "inputFile", "outputFile" ],
		},

		translateFolder: IMapperMethod & {
		argNames: [ "inputFolder", "outputFolder", "recursion" ],
		},

		translateLibrary: IMapperMethod & {
		argNames: [ "inputLibrary", "outputLibrary" ],
		},

	}

	"SP.Translation.TranslationJobStatus": {
		properties?: Array<string>;
		getAllItems: IMapperMethod & {
		},

	}

	"SP.TranslationStatusCollection": {
		properties?: Array<string>;
		create: IMapperMethod & {
		argNames: [ "request" ],
		},

		set: IMapperMethod & {
		argNames: [ "request" ],
		},

		updateTranslationLanguages: IMapperMethod & {
		},

	}

	"SP.User": {
		properties?: Array<string>;
		expire: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.User.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "properties" ],
		},

		addUserById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getByEmail: IMapperMethod & {
		argNames: [ "emailAddress" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		getByLoginName: IMapperMethod & {
		argNames: [ "loginName" ],
		},

		getByObjectId: IMapperMethod & {
		argNames: [ "objectId" ],
		},

		getByPuid: IMapperMethod & {
		argNames: [ "puid" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		removeById: IMapperMethod & {
		argNames: [ "id" ],
		},

		removeByLoginName: IMapperMethod & {
		argNames: [ "loginName" ],
		},

	}

	"SP.UserCustomAction": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.UserCustomAction.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "properties" ],
		},

		clear: IMapperMethod & {
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.UserExperienceState": {
		properties?: Array<string>;
		setFlag: IMapperMethod & {
		argNames: [ "flag", "reset" ],
		},

	}

	"SP.UserProfiles.FollowedContent": {
		properties?: Array<string>;
		findAndUpdateFollowedGroup: IMapperMethod & {
		argNames: [ "groupId" ],
		},

		findAndUpdateFollowedItem: IMapperMethod & {
		argNames: [ "url" ],
		},

		followItem: IMapperMethod & {
		argNames: [ "item" ],
		},

		getFollowedStatus: IMapperMethod & {
		argNames: [ "url" ],
		},

		getGroups: IMapperMethod & {
		argNames: [ "rowLimit" ],
		},

		getItem: IMapperMethod & {
		argNames: [ "url" ],
		},

		getItems: IMapperMethod & {
		argNames: [ "options", "subtype" ],
		},

		hasGroupMembershipChangedAndSyncChanges: IMapperMethod & {
		},

		isFollowed: IMapperMethod & {
		argNames: [ "url" ],
		},

		refreshFollowedItem: IMapperMethod & {
		argNames: [ "item" ],
		},

		setItemPinState: IMapperMethod & {
		argNames: [ "uri", "groupId", "pinState" ],
		},

		stopFollowing: IMapperMethod & {
		argNames: [ "url" ],
		},

		updateFollowedGroupForUser: IMapperMethod & {
		argNames: [ "contextUri", "groupId", "loginName" ],
		},

	}

	"SP.UserProfiles.PeopleManager": {
		properties?: Array<string>;
		amIFollowedBy: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		amIFollowing: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		follow: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		followTag: IMapperMethod & {
		argNames: [ "value" ],
		},

		getDefaultDocumentLibrary: IMapperMethod & {
		argNames: [ "accountName", "createSiteIfNotExists", "siteCreationPriority" ],
		},

		getFollowedTags: IMapperMethod & {
		argNames: [ "cTagsToFetch" ],
		},

		getFollowersFor: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		getMyFollowers: IMapperMethod & {
		},

		getMyProperties: IMapperMethod & {
		},

		getMySuggestions: IMapperMethod & {
		},

		getPeopleFollowedBy: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		getPeopleFollowedByMe: IMapperMethod & {
		},

		getPropertiesFor: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		getSPUserInformation: IMapperMethod & {
		argNames: [ "accountName", "siteId" ],
		},

		getUserOneDriveQuotaMax: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		getUserProfileProperties: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		getUserProfilePropertyFor: IMapperMethod & {
		argNames: [ "accountName", "propertyName" ],
		},

		hardDeleteUserProfile: IMapperMethod & {
		argNames: [ "accountName", "userId" ],
		},

		hideSuggestion: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		removeSPUserInformation: IMapperMethod & {
		argNames: [ "accountName", "siteId", "redactName" ],
		},

		resetUserOneDriveQuotaToDefault: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		setMultiValuedProfileProperty: IMapperMethod & {
		argNames: [ "accountName", "propertyName", "propertyValues" ],
		},

		setMyProfilePicture: IMapperMethod & {
		argNames: [ "picture" ],
		},

		setSingleValueProfileProperty: IMapperMethod & {
		argNames: [ "accountName", "propertyName", "propertyValue" ],
		},

		setUserOneDriveQuota: IMapperMethod & {
		argNames: [ "accountName", "newQuota", "newQuotaWarning" ],
		},

		stopFollowing: IMapperMethod & {
		argNames: [ "accountName" ],
		},

		stopFollowingTag: IMapperMethod & {
		argNames: [ "value" ],
		},

	}

	"SP.UserProfiles.PersonalCache": {
		properties?: Array<string>;
		deleteCacheItemsAsync: IMapperMethod & {
		argNames: [ "cacheItems" ],
		},

		deleteCacheItemsAsync2: IMapperMethod & {
		argNames: [ "cacheItems", "mySiteUrl" ],
		},

		dispose: IMapperMethod & {
		},

		readCache: IMapperMethod & {
		argNames: [ "folderPath" ],
		},

		readCache2: IMapperMethod & {
		argNames: [ "folderPath", "mySiteUrl" ],
		},

		readCacheOrCreate: IMapperMethod & {
		argNames: [ "folderPath", "requiredCacheKeys", "createIfMissing" ],
		},

		readCacheOrCreate2: IMapperMethod & {
		argNames: [ "folderPath", "requiredCacheKeys", "createIfMissing", "mySiteUrl" ],
		},

		readCacheOrCreateOrderById: IMapperMethod & {
		argNames: [ "folderPath", "requiredCacheKeys", "createIfMissing" ],
		},

		readCacheOrCreateOrderById2: IMapperMethod & {
		argNames: [ "folderPath", "requiredCacheKeys", "createIfMissing", "mySiteUrl" ],
		},

		writeCache: IMapperMethod & {
		argNames: [ "cacheItems" ],
		},

		writeCache2: IMapperMethod & {
		argNames: [ "cacheItems", "mySiteUrl" ],
		},

	}

	"SP.UserProfiles.ProfileImageStore": {
		properties?: Array<string>;
		saveUploadedFile: IMapperMethod & {
		argNames: [ "profileType", "fileNamePrefix", "isFeedAttachment", "clientFilePath", "fileSize", "fileStream" ],
		},

	}

	"SP.UserProfiles.ProfileLoader": {
		properties?: Array<string>;
		createPersonalSiteEnqueueBulk: IMapperMethod & {
		argNames: [ "emailIDs" ],
		},

		getUserProfile: IMapperMethod & {
		},

	}

	"SP.UserProfiles.UserProfile": {
		properties?: Array<string>;
		createPersonalSite: IMapperMethod & {
		argNames: [ "lcid" ],
		},

		createPersonalSiteEnque: IMapperMethod & {
		argNames: [ "isInteractive" ],
		},

		createPersonalSiteFromWorkItem: IMapperMethod & {
		argNames: [ "workItemType" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		setMySiteFirstRunExperience: IMapperMethod & {
		argNames: [ "value" ],
		},

		shareAllSocialData: IMapperMethod & {
		argNames: [ "shareAll" ],
		},

	}

	"SP.UserProfiles.UserProfilePropertiesForUser": {
		properties?: Array<string>;
		getPropertyNames: IMapperMethod & {
		},

	}

	"SP.UserResource": {
		properties?: Array<string>;
		getResourceEntries: IMapperMethod & {
		},

		getValueForUICulture: IMapperMethod & {
		argNames: [ "cultureName" ],
		},

		setValueForUICulture: IMapperMethod & {
		argNames: [ "cultureName", "value" ],
		},

	}

	"SP.UserSolution.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "solutionGalleryItemId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Utilities.ThemeManager": {
		properties?: Array<string>;
		addTenantTheme: IMapperMethod & {
		argNames: [ "name", "themeJson" ],
		},

		applyTheme: IMapperMethod & {
		argNames: [ "name", "themeJson" ],
		},

		deleteTenantTheme: IMapperMethod & {
		argNames: [ "name" ],
		},

		getAvailableThemes: IMapperMethod & {
		},

		getHideDefaultThemes: IMapperMethod & {
		},

		getTenantTheme: IMapperMethod & {
		argNames: [ "name" ],
		},

		getTenantThemingOptions: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		setHideDefaultThemes: IMapperMethod & {
		argNames: [ "hideDefaultThemes" ],
		},

		updateTenantTheme: IMapperMethod & {
		argNames: [ "name", "themeJson" ],
		},

	}

	"SP.View": {
		properties?: Array<string>;
		addToSpotlight: IMapperMethod & {
		argNames: [ "itemId", "folderPath", "afterItemId" ],
		},

		delete: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		removeFromSpotlight: IMapperMethod & {
		argNames: [ "itemId", "folderPath" ],
		},

		renderAsHtml: IMapperMethod & {
		},

		setViewXml: IMapperMethod & {
		argNames: [ "viewXml" ],
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

	}

	"SP.View.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "properties" ],
		},

		getById: IMapperMethod & {
		argNames: [ "guidId" ],
		},

		getByTitle: IMapperMethod & {
		argNames: [ "strTitle" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.ViewFieldCollection": {
		properties?: Array<string>;
		addViewField: IMapperMethod & {
		argNames: [ "strField" ],
		},

		moveViewFieldTo: IMapperMethod & {
		argNames: [ "field", "index" ],
		},

		removeAllViewFields: IMapperMethod & {
		},

		removeViewField: IMapperMethod & {
		argNames: [ "strField" ],
		},

	}

	"SP.Web": {
		properties?: Array<string>;
		addCrossFarmMessage: IMapperMethod & {
		argNames: [ "messagePayloadBase64" ],
		},

		addPlaceholderUser: IMapperMethod & {
		argNames: [ "listId", "placeholderText" ],
		},

		addSupportedUILanguage: IMapperMethod & {
		argNames: [ "lcid" ],
		},

		addinPermissions: IMapperMethod & {
		argNames: [ "addins" ],
		},

		applyTheme: IMapperMethod & {
		argNames: [ "colorPaletteUrl", "fontSchemeUrl", "backgroundImageUrl", "shareGenerated" ],
		},

		applyWebTemplate: IMapperMethod & {
		argNames: [ "webTemplate" ],
		},

		availableAddins: IMapperMethod & {
		argNames: [ "serverRelativeUrls", "urls" ],
		},

		breakRoleInheritance: IMapperMethod & {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		consentToPowerPlatform: IMapperMethod & {
		},

		createDefaultAssociatedGroups: IMapperMethod & {
		argNames: [ "userLogin", "userLogin2", "groupNameSeed" ],
		},

		createGroupBasedEnvironment: IMapperMethod & {
		},

		createSitePage: IMapperMethod & {
		argNames: [ "pageMetaData" ],
		},

		defaultDocumentLibrary: IMapperMethod & {
		},

		delete: IMapperMethod & {
		},

		doesPushNotificationSubscriberExist: IMapperMethod & {
		argNames: [ "deviceAppInstanceId" ],
		},

		doesUserHavePermissions: IMapperMethod & {
		argNames: [ "high", "low" ],
		},

		ensureEduClassSetup: IMapperMethod & {
		argNames: [ "byPassForAutomation" ],
		},

		ensureSolutioningEnvironment: IMapperMethod & {
		argNames: [ "ensureCdsInstance" ],
		},

		ensureTenantAppCatalog: IMapperMethod & {
		argNames: [ "callerId" ],
		},

		ensureUser: IMapperMethod & {
		argNames: [ "logonName" ],
		},

		ensureUserByObjectId: IMapperMethod & {
		argNames: [ "objectId", "tenantId", "principalType" ],
		},

		executeRemoteLOB: IMapperMethod & {
		argNames: [ "inputStream" ],
		},

		getACSServicePrincipals: IMapperMethod & {
		argNames: [ "appIds" ],
		},

		getAdaptiveCardExtensions: IMapperMethod & {
		argNames: [ "includeErrors", "project" ],
		},

		getAddinPrincipalsHavingPermissionsInSites: IMapperMethod & {
		argNames: [ "serverRelativeUrls", "urls" ],
		},

		getAddinUninstallJobDetail: IMapperMethod & {
		argNames: [ "jobId", "serverRelativeUrl", "url" ],
		},

		getAllClientSideComponents: IMapperMethod & {
		argNames: [ "languages" ],
		},

		getAppBdcCatalog: IMapperMethod & {
		},

		getAppBdcCatalogForAppInstance: IMapperMethod & {
		argNames: [ "appInstanceId" ],
		},

		getAppInstanceById: IMapperMethod & {
		argNames: [ "appInstanceId" ],
		},

		getAppInstancesByProductId: IMapperMethod & {
		argNames: [ "productId" ],
		},

		getAvailableWebTemplates: IMapperMethod & {
		argNames: [ "lcid", "doIncludeCrossLanguage" ],
		},

		getCatalog: IMapperMethod & {
		argNames: [ "typeCatalog" ],
		},

		getChanges: IMapperMethod & {
		argNames: [ "query" ],
		},

		getClientSideComponents: IMapperMethod & {
		argNames: [ "components", "project" ],
		},

		getClientSideComponentsByComponentType: IMapperMethod & {
		argNames: [ "componentTypesString", "supportedHostTypeValue", "includeErrors", "project", "includeManifestActivatedTime" ],
		},

		getClientSideComponentsById: IMapperMethod & {
		argNames: [ "componentIds", "project" ],
		},

		getClientSideWebParts: IMapperMethod & {
		argNames: [ "includeErrors", "project" ],
		},

		getCustomListTemplates: IMapperMethod & {
		},

		getEntity: IMapperMethod & {
		argNames: [ "namespace", "name" ],
		},

		getFileByGuestUrl: IMapperMethod & {
		argNames: [ "guestUrl" ],
		},

		getFileByGuestUrlEnsureAccess: IMapperMethod & {
		argNames: [ "guestUrl", "ensureAccess" ],
		},

		getFileByGuestUrlExtended: IMapperMethod & {
		argNames: [ "guestUrl", "requestSettings" ],
		},

		getFileById: IMapperMethod & {
		argNames: [ "uniqueId" ],
		},

		getFileByLinkingUrl: IMapperMethod & {
		argNames: [ "linkingUrl" ],
		},

		getFileByServerRelativePath: IMapperMethod & {
		argNames: [ "DecodedUrl" ],
		},

		getFileByServerRelativeUrl: IMapperMethod & {
		argNames: [ "serverRelativeUrl" ],
		},

		getFileByStreamFrameUrl: IMapperMethod & {
		argNames: [ "streamFrameUrl" ],
		},

		getFileByUrl: IMapperMethod & {
		argNames: [ "fileUrl" ],
		},

		getFileByWOPIFrameUrl: IMapperMethod & {
		argNames: [ "wopiFrameUrl" ],
		},

		getFolderByGuestUrl: IMapperMethod & {
		argNames: [ "guestUrl", "ensureAccess" ],
		},

		getFolderByGuestUrlExtended: IMapperMethod & {
		argNames: [ "guestUrl", "requestSettings" ],
		},

		getFolderById: IMapperMethod & {
		argNames: [ "uniqueId" ],
		},

		getFolderByServerRelativePath: IMapperMethod & {
		argNames: [ "DecodedUrl" ],
		},

		getFolderByServerRelativeUrl: IMapperMethod & {
		argNames: [ "serverRelativeUrl" ],
		},

		getGroupBasedEnvironment: IMapperMethod & {
		},

		getList: IMapperMethod & {
		argNames: [ "strUrl" ],
		},

		getListByTitle: IMapperMethod & {
		argNames: [ "title" ],
		},

		getListItem: IMapperMethod & {
		argNames: [ "strUrl" ],
		},

		getListItemByResourceId: IMapperMethod & {
		argNames: [ "resourceId" ],
		},

		getListItemUsingPath: IMapperMethod & {
		argNames: [ "DecodedUrl" ],
		},

		getListOperation: IMapperMethod & {
		argNames: [ "listId", "operationId" ],
		},

		getListUsingPath: IMapperMethod & {
		argNames: [ "DecodedUrl" ],
		},

		getLists: IMapperMethod & {
		argNames: [ "getListsParams" ],
		},

		getNewsList: IMapperMethod & {
		argNames: [ "allowCreate" ],
		},

		getPushNotificationSubscriber: IMapperMethod & {
		argNames: [ "deviceAppInstanceId" ],
		},

		getPushNotificationSubscribersByArgs: IMapperMethod & {
		argNames: [ "customArgs" ],
		},

		getPushNotificationSubscribersByUser: IMapperMethod & {
		argNames: [ "userName" ],
		},

		getRecycleBinItems: IMapperMethod & {
		argNames: [ "pagingInfo", "rowLimit", "isAscending", "orderBy", "itemState" ],
		},

		getRecycleBinItemsByQueryInfo: IMapperMethod & {
		argNames: [ "IsAscending", "ItemState", "OrderBy", "PagingInfo", "RowLimit", "ShowOnlyMyItems" ],
		},

		getRegionalDateTimeSchema: IMapperMethod & {
		},

		getSPAppContextAsStream: IMapperMethod & {
		},

		getSharingLinkData: IMapperMethod & {
		argNames: [ "linkUrl" ],
		},

		getSitePageCopyToStatus: IMapperMethod & {
		argNames: [ "workItemId" ],
		},

		getSitePageMoveStatus: IMapperMethod & {
		argNames: [ "workItemId" ],
		},

		getSiteUserIncludingDeletedByPuid: IMapperMethod & {
		argNames: [ "puid" ],
		},

		getStorageEntity: IMapperMethod & {
		argNames: [ "key" ],
		},

		getSubwebsFilteredForCurrentUser: IMapperMethod & {
		argNames: [ "nWebTemplateFilter", "nConfigurationFilter" ],
		},

		getUserById: IMapperMethod & {
		argNames: [ "userId" ],
		},

		getUserEffectivePermissions: IMapperMethod & {
		argNames: [ "userName" ],
		},

		getViewFromPath: IMapperMethod & {
		argNames: [ "DecodedUrl" ],
		},

		getViewFromUrl: IMapperMethod & {
		argNames: [ "listUrl" ],
		},

		hubSiteData: IMapperMethod & {
		argNames: [ "forceRefresh" ],
		},

		hubSiteDataAsStream: IMapperMethod & {
		argNames: [ "forceRefresh" ],
		},

		incrementSiteClientTag: IMapperMethod & {
		},

		listPowerPlatformUserDetails: IMapperMethod & {
		},

		loadAndInstallApp: IMapperMethod & {
		argNames: [ "appPackageStream" ],
		},

		loadAndInstallAppInSpecifiedLocale: IMapperMethod & {
		argNames: [ "appPackageStream", "installationLocaleLCID" ],
		},

		loadApp: IMapperMethod & {
		argNames: [ "appPackageStream", "installationLocaleLCID" ],
		},

		mapToIcon: IMapperMethod & {
		argNames: [ "fileName", "progId", "size" ],
		},

		markReplyUrisUpdated: IMapperMethod & {
		},

		pageContextCore: IMapperMethod & {
		},

		pageContextInfo: IMapperMethod & {
		argNames: [ "includeODBSettings", "emitNavigationInfo" ],
		},

		parseDateTime: IMapperMethod & {
		argNames: [ "value", "displayFormat", "calendarType" ],
		},

		processExternalNotification: IMapperMethod & {
		argNames: [ "stream" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		registerPushNotificationSubscriber: IMapperMethod & {
		argNames: [ "deviceAppInstanceId", "serviceToken" ],
		},

		removeStorageEntity: IMapperMethod & {
		argNames: [ "key" ],
		},

		removeSupportedUILanguage: IMapperMethod & {
		argNames: [ "lcid" ],
		},

		resetRoleInheritance: IMapperMethod & {
		},

		setAccessRequestSiteDescriptionAndUpdate: IMapperMethod & {
		argNames: [ "description" ],
		},

		setChromeOptions: IMapperMethod & {
		argNames: [ "headerLayout", "headerEmphasis", "megaMenuEnabled", "footerEnabled", "footerLayout", "footerEmphasis", "hideTitleInHeader", "logoAlignment", "horizontalQuickLaunch", "headerColorIndexInLightMode", "headerColorIndexInDarkMode", "footerColorIndexInLightMode", "footerColorIndexInDarkMode" ],
		},

		setDefaultNewPageTemplateId: IMapperMethod & {
		argNames: [ "defaultNewPageTemplateId" ],
		},

		setGlobalNavSettings: IMapperMethod & {
		argNames: [ "title", "source" ],
		},

		setStorageEntity: IMapperMethod & {
		argNames: [ "key", "value", "description", "comments" ],
		},

		setUseAccessRequestDefaultAndUpdate: IMapperMethod & {
		argNames: [ "useAccessRequestDefault" ],
		},

		syncFlowInstances: IMapperMethod & {
		argNames: [ "targetWebUrl" ],
		},

		syncFlowTemplates: IMapperMethod & {
		argNames: [ "category" ],
		},

		syncHubSiteTheme: IMapperMethod & {
		},

		syncTeamsComponent: IMapperMethod & {
		argNames: [ "teamsComponent" ],
		},

		uninstallAddins: IMapperMethod & {
		argNames: [ "uninstallAddins" ],
		},

		unregisterPushNotificationSubscriber: IMapperMethod & {
		argNames: [ "deviceAppInstanceId" ],
		},

		unsetIsEduClassProvisionPending: IMapperMethod & {
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

		uploadImage: IMapperMethod & {
		argNames: [ "listTitle", "imageName", "contentStream", "listId", "itemId", "fieldId", "overwrite" ],
		},

	}

	"SP.Web.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.WebInformation.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.WebParts.LimitedWebPartManager": {
		properties?: Array<string>;
		exportWebPart: IMapperMethod & {
		argNames: [ "webPartId" ],
		},

		importWebPart: IMapperMethod & {
		argNames: [ "webPartXml" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.WebParts.WebPartDefinition": {
		properties?: Array<string>;
		closeWebPart: IMapperMethod & {
		},

		deleteWebPart: IMapperMethod & {
		},

		moveWebPartTo: IMapperMethod & {
		argNames: [ "zoneID", "zoneIndex" ],
		},

		openWebPart: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

		saveWebPartChanges: IMapperMethod & {
		},

	}

	"SP.WebParts.WebPartDefinition.Collection": {
		properties?: Array<string>;
		getByControlId: IMapperMethod & {
		argNames: [ "controlId" ],
		},

		getById: IMapperMethod & {
		argNames: [ "id" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.WebTemplate.Collection": {
		properties?: Array<string>;
		getByName: IMapperMethod & {
		argNames: [ "name" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.WorkManagement.OM.BaseSession": {
		properties?: Array<string>;
		addAttributeToTask: IMapperMethod & {
		argNames: [ "taskKey", "attribute" ],
		},

		beginCacheRefresh: IMapperMethod & {
		},

		beginExchangeSync: IMapperMethod & {
		},

		createPersonalTaskAndPromoteToProviderTask: IMapperMethod & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
		},

		createTask: IMapperMethod & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
		},

		deleteTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		getCalloutInfo: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		getRefreshHealthInfo: IMapperMethod & {
		},

		getRefreshHistory: IMapperMethod & {
		argNames: [ "since" ],
		},

		getRefreshStatus: IMapperMethod & {
		argNames: [ "refreshId" ],
		},

		isExchangeJobPending: IMapperMethod & {
		},

		pinTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		promotePersonalTaskToProviderTaskInLocation: IMapperMethod & {
		argNames: [ "taskKey", "locationId" ],
		},

		readAllNonTaskData: IMapperMethod & {
		},

		refreshSingleTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		removeAttributeFromTask: IMapperMethod & {
		argNames: [ "taskKey", "attribute" ],
		},

		removePinOnTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		updateTaskWithLocalizedValue: IMapperMethod & {
		argNames: [ "taskKey", "field", "value" ],
		},

	}

	"SP.WorkManagement.OM.LocationOrientedSortableSession": {
		properties?: Array<string>;
		addAttributeToTask: IMapperMethod & {
		argNames: [ "taskKey", "attribute" ],
		},

		beginCacheRefresh: IMapperMethod & {
		},

		beginExchangeSync: IMapperMethod & {
		},

		createPersonalTaskAndPromoteToProviderTask: IMapperMethod & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
		},

		createTask: IMapperMethod & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
		},

		deleteTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		getCalloutInfo: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		getRefreshHealthInfo: IMapperMethod & {
		},

		getRefreshHistory: IMapperMethod & {
		argNames: [ "since" ],
		},

		getRefreshStatus: IMapperMethod & {
		argNames: [ "refreshId" ],
		},

		isExchangeJobPending: IMapperMethod & {
		},

		movePersonalTaskToLocation: IMapperMethod & {
		argNames: [ "taskKey", "newLocationKey" ],
		},

		pinTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		promotePersonalTaskToProviderTaskInLocation: IMapperMethod & {
		argNames: [ "taskKey", "locationId" ],
		},

		readAllNonTaskData: IMapperMethod & {
		},

		refreshSingleTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		removeAttributeFromTask: IMapperMethod & {
		argNames: [ "taskKey", "attribute" ],
		},

		removePinOnTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		updateTaskWithLocalizedValue: IMapperMethod & {
		argNames: [ "taskKey", "field", "value" ],
		},

	}

	"SP.WorkManagement.OM.LocationOrientedUserOrderedSession": {
		properties?: Array<string>;
		addAttributeToTask: IMapperMethod & {
		argNames: [ "taskKey", "attribute" ],
		},

		beginCacheRefresh: IMapperMethod & {
		},

		beginExchangeSync: IMapperMethod & {
		},

		createPersonalTaskAndPromoteToProviderTask: IMapperMethod & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
		},

		createTask: IMapperMethod & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
		},

		deleteTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		getCalloutInfo: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		getRefreshHealthInfo: IMapperMethod & {
		},

		getRefreshHistory: IMapperMethod & {
		argNames: [ "since" ],
		},

		getRefreshStatus: IMapperMethod & {
		argNames: [ "refreshId" ],
		},

		isExchangeJobPending: IMapperMethod & {
		},

		movePersonalTaskToLocation: IMapperMethod & {
		argNames: [ "taskKey", "newLocationKey" ],
		},

		pinTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		promotePersonalTaskToProviderTaskInLocation: IMapperMethod & {
		argNames: [ "taskKey", "locationId" ],
		},

		readAllNonTaskData: IMapperMethod & {
		},

		refreshSingleTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		removeAttributeFromTask: IMapperMethod & {
		argNames: [ "taskKey", "attribute" ],
		},

		removePinOnTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		reorderTask: IMapperMethod & {
		argNames: [ "taskKey", "newAfterTaskKey" ],
		},

		updateTaskWithLocalizedValue: IMapperMethod & {
		argNames: [ "taskKey", "field", "value" ],
		},

	}

	"SP.WorkManagement.OM.SortableSession": {
		properties?: Array<string>;
		addAttributeToTask: IMapperMethod & {
		argNames: [ "taskKey", "attribute" ],
		},

		beginCacheRefresh: IMapperMethod & {
		},

		beginExchangeSync: IMapperMethod & {
		},

		createPersonalTaskAndPromoteToProviderTask: IMapperMethod & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
		},

		createTask: IMapperMethod & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
		},

		deleteTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		getCalloutInfo: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		getRefreshHealthInfo: IMapperMethod & {
		},

		getRefreshHistory: IMapperMethod & {
		argNames: [ "since" ],
		},

		getRefreshStatus: IMapperMethod & {
		argNames: [ "refreshId" ],
		},

		isExchangeJobPending: IMapperMethod & {
		},

		pinTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		promotePersonalTaskToProviderTaskInLocation: IMapperMethod & {
		argNames: [ "taskKey", "locationId" ],
		},

		readAllNonTaskData: IMapperMethod & {
		},

		refreshSingleTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		removeAttributeFromTask: IMapperMethod & {
		argNames: [ "taskKey", "attribute" ],
		},

		removePinOnTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		updateTaskWithLocalizedValue: IMapperMethod & {
		argNames: [ "taskKey", "field", "value" ],
		},

	}

	"SP.WorkManagement.OM.SortableSessionManager": {
		properties?: Array<string>;
		createLocationOrientedSession: IMapperMethod & {
		},

		createSession: IMapperMethod & {
		},

	}

	"SP.WorkManagement.OM.UserOrderedSession": {
		properties?: Array<string>;
		addAttributeToTask: IMapperMethod & {
		argNames: [ "taskKey", "attribute" ],
		},

		beginCacheRefresh: IMapperMethod & {
		},

		beginExchangeSync: IMapperMethod & {
		},

		createPersonalTaskAndPromoteToProviderTask: IMapperMethod & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
		},

		createTask: IMapperMethod & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
		},

		deleteTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		getCalloutInfo: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		getRefreshHealthInfo: IMapperMethod & {
		},

		getRefreshHistory: IMapperMethod & {
		argNames: [ "since" ],
		},

		getRefreshStatus: IMapperMethod & {
		argNames: [ "refreshId" ],
		},

		isExchangeJobPending: IMapperMethod & {
		},

		pinTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		promotePersonalTaskToProviderTaskInLocation: IMapperMethod & {
		argNames: [ "taskKey", "locationId" ],
		},

		readAllNonTaskData: IMapperMethod & {
		},

		refreshSingleTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		removeAttributeFromTask: IMapperMethod & {
		argNames: [ "taskKey", "attribute" ],
		},

		removePinOnTask: IMapperMethod & {
		argNames: [ "taskKey" ],
		},

		reorderTask: IMapperMethod & {
		argNames: [ "taskKey", "newAfterTaskKey" ],
		},

		updateTaskWithLocalizedValue: IMapperMethod & {
		argNames: [ "taskKey", "field", "value" ],
		},

	}

	"SP.WorkManagement.OM.UserOrderedSessionManager": {
		properties?: Array<string>;
		createLocationOrientedSession: IMapperMethod & {
		},

		createSession: IMapperMethod & {
		},

	}

	"SP.WorkManagement.OM.UserSettingsManager": {
		properties?: Array<string>;
		getAllLocations: IMapperMethod & {
		},

		getExchangeSyncInfo: IMapperMethod & {
		},

		getImportantLocations: IMapperMethod & {
		},

		getLocations: IMapperMethod & {
		argNames: [ "locationsId" ],
		},

		getPersistedProperties: IMapperMethod & {
		},

		getUserSettings: IMapperMethod & {
		},

		isExchangeJobPending: IMapperMethod & {
		},

		optIntoExchangeSync: IMapperMethod & {
		},

		optOutOfExchangeSync: IMapperMethod & {
		},

	}

	"SP.Workflow.SPWorkflowTask": {
		properties?: Array<string>;
		addThumbnailFieldData: IMapperMethod & {
		argNames: [ "imageStream", "imageName", "fieldInternalName", "lockId" ],
		},

		archive: IMapperMethod & {
		},

		breakRoleInheritance: IMapperMethod & {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		delete: IMapperMethod & {
		},

		deleteWithParameters: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getChanges: IMapperMethod & {
		argNames: [ "query" ],
		},

		getComments: IMapperMethod & {
		},

		getUserEffectivePermissions: IMapperMethod & {
		argNames: [ "userName" ],
		},

		getVersionById: IMapperMethod & {
		argNames: [ "versionId" ],
		},

		getVersions: IMapperMethod & {
		argNames: [ "getVersionsParams" ],
		},

		getWOPIFrameUrl: IMapperMethod & {
		argNames: [ "action" ],
		},

		mediaServiceUpdate: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		mediaServiceUpdateV2: IMapperMethod & {
		argNames: [ "parameters", "eventFiringEnabled" ],
		},

		overridePolicyTip: IMapperMethod & {
		argNames: [ "userAction", "justification" ],
		},

		parseAndSetFieldValue: IMapperMethod & {
		argNames: [ "fieldName", "value" ],
		},

		recycle: IMapperMethod & {
		},

		recycleWithParameters: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		resetRoleInheritance: IMapperMethod & {
		},

		setCommentsDisabled: IMapperMethod & {
		argNames: [ "value" ],
		},

		setComplianceTag: IMapperMethod & {
		argNames: [ "complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock", "isUnlockedAsDefault" ],
		},

		setComplianceTagWithExplicitMetasUpdate: IMapperMethod & {
		argNames: [ "complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress" ],
		},

		setComplianceTagWithHold: IMapperMethod & {
		argNames: [ "complianceTag" ],
		},

		setComplianceTagWithMetaInfo: IMapperMethod & {
		argNames: [ "complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock", "isRecordUnlockedAsDefault" ],
		},

		setComplianceTagWithNoHold: IMapperMethod & {
		argNames: [ "complianceTag" ],
		},

		setComplianceTagWithRecord: IMapperMethod & {
		argNames: [ "complianceTag" ],
		},

		systemUpdate: IMapperMethod & {
		},

		unarchive: IMapperMethod & {
		},

		update: IMapperMethod & {
		argNames: [ "properties" ],
		},

		updateEx: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		updateOverwriteVersion: IMapperMethod & {
		},

		validateUpdateFetchListItem: IMapperMethod & {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "View", "RootFolder" ],
		},

		validateUpdateFetchListItemInFolder: IMapperMethod & {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "rootFolder" ],
		},

		validateUpdateListItem: IMapperMethod & {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment", "datesInUTC", "numberInInvariantCulture", "sharedLockId" ],
		},

	}

	"SP.Workflow.WorkflowAssociation": {
		properties?: Array<string>;
		delete: IMapperMethod & {
		},

		update: IMapperMethod & {
		},

	}

	"SP.Workflow.WorkflowAssociation.Collection": {
		properties?: Array<string>;
		add: IMapperMethod & {
		argNames: [ "parameters" ],
		},

		getById: IMapperMethod & {
		argNames: [ "associationId" ],
		},

		getByName: IMapperMethod & {
		argNames: [ "name" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.Workflow.WorkflowTemplate.Collection": {
		properties?: Array<string>;
		getById: IMapperMethod & {
		argNames: [ "templateId" ],
		},

		getByName: IMapperMethod & {
		argNames: [ "name" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.WorkflowServices.InteropService": {
		properties?: Array<string>;
		cancelWorkflow: IMapperMethod & {
		argNames: [ "instanceId" ],
		},

		disableEvents: IMapperMethod & {
		argNames: [ "listId", "itemGuid" ],
		},

		enableEvents: IMapperMethod & {
		argNames: [ "listId", "itemGuid" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		startWorkflow: IMapperMethod & {
		argNames: [ "associationName", "correlationId", "listId", "itemGuid", "workflowParameters" ],
		},

	}

	"SP.WorkflowServices.WorkflowDefinition": {
		properties?: Array<string>;
		setProperty: IMapperMethod & {
		argNames: [ "propertyName", "value" ],
		},

	}

	"SP.WorkflowServices.WorkflowDefinition.Collection": {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] },

		sort: IMapperMethod & {
		},

	}

	"SP.WorkflowServices.WorkflowDeploymentService": {
		properties?: Array<string>;
		deleteCollateral: IMapperMethod & {
		argNames: [ "workflowDefinitionId", "leafFileName" ],
		},

		deleteDefinition: IMapperMethod & {
		argNames: [ "definitionId" ],
		},

		deprecateDefinition: IMapperMethod & {
		argNames: [ "definitionId" ],
		},

		enumerateDefinitions: IMapperMethod & {
		argNames: [ "publishedOnly" ],
		},

		enumerateIntegratedApps: IMapperMethod & {
		},

		getActivitySignatures: IMapperMethod & {
		argNames: [ "lastChanged" ],
		},

		getCollateralUri: IMapperMethod & {
		argNames: [ "workflowDefinitionId", "leafFileName" ],
		},

		getDefinition: IMapperMethod & {
		argNames: [ "definitionId" ],
		},

		isIntegratedApp: IMapperMethod & {
		},

		packageDefinition: IMapperMethod & {
		argNames: [ "definitionId", "packageDefaultFilename", "packageTitle", "packageDescription" ],
		},

		publishDefinition: IMapperMethod & {
		argNames: [ "definitionId" ],
		},

		saveCollateral: IMapperMethod & {
		argNames: [ "workflowDefinitionId", "leafFileName", "fileContent" ],
		},

		validateActivity: IMapperMethod & {
		argNames: [ "activityXaml" ],
		},

	}

	"SP.WorkflowServices.WorkflowInstanceService": {
		properties?: Array<string>;
		enumerateInstancesForListItem: IMapperMethod & {
		argNames: [ "listId", "itemId" ],
		},

		enumerateInstancesForListItemWithOffset: IMapperMethod & {
		argNames: [ "listId", "itemId", "offset" ],
		},

		enumerateInstancesForSite: IMapperMethod & {
		},

		enumerateInstancesForSiteWithOffset: IMapperMethod & {
		argNames: [ "offset" ],
		},

		getInstance: IMapperMethod & {
		argNames: [ "instanceId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		startWorkflowOnListItemBySubscriptionId: IMapperMethod & {
		argNames: [ "subscriptionId", "itemId", "payload" ],
		},

	}

	"SP.WorkflowServices.WorkflowMessagingService": {
		properties?: Array<string>;
		publishEvent: IMapperMethod & {
		argNames: [ "eventSourceId", "eventName", "payload" ],
		},

	}

	"SP.WorkflowServices.WorkflowServicesManager": {
		properties?: Array<string>;
		getWorkflowDeploymentService: IMapperMethod & {
		},

		getWorkflowInstanceService: IMapperMethod & {
		},

		getWorkflowInteropService: IMapperMethod & {
		},

		getWorkflowSubscriptionService: IMapperMethod & {
		},

		isIntegratedApp: IMapperMethod & {
		},

		query: IMapperMethod & { argNames: ["oData"] },

	}

	"SP.WorkflowServices.WorkflowSubscription": {
		properties?: Array<string>;
		getExternalVariable: IMapperMethod & {
		argNames: [ "name" ],
		},

		setExternalVariable: IMapperMethod & {
		argNames: [ "name", "value" ],
		},

		setProperty: IMapperMethod & {
		argNames: [ "name", "value" ],
		},

	}

	"SP.WorkflowServices.WorkflowSubscription.Collection": {
		properties?: Array<string>;
		query: IMapperMethod & { argNames: ["oData"] },

		sort: IMapperMethod & {
		},

	}

	"SP.WorkflowServices.WorkflowSubscriptionService": {
		properties?: Array<string>;
		deleteSubscription: IMapperMethod & {
		argNames: [ "subscriptionId" ],
		},

		enumerateSubscriptions: IMapperMethod & {
		},

		enumerateSubscriptionsByDefinition: IMapperMethod & {
		argNames: [ "definitionId" ],
		},

		enumerateSubscriptionsByEventSource: IMapperMethod & {
		argNames: [ "eventSourceId" ],
		},

		enumerateSubscriptionsByList: IMapperMethod & {
		argNames: [ "listId" ],
		},

		enumerateSubscriptionsByListAndParentContentType: IMapperMethod & {
		argNames: [ "listId", "parentContentTypeId", "includeNoContentTypeSpecified" ],
		},

		enumerateSubscriptionsByListWithContentType: IMapperMethod & {
		argNames: [ "listId", "includeContentTypeSpecified" ],
		},

		getSubscription: IMapperMethod & {
		argNames: [ "subscriptionId" ],
		},

		query: IMapperMethod & { argNames: ["oData"] },

		registerInterestInHostWebList: IMapperMethod & {
		argNames: [ "listId", "eventName" ],
		},

		registerInterestInList: IMapperMethod & {
		argNames: [ "listId", "eventName" ],
		},

		unregisterInterestInHostWebList: IMapperMethod & {
		argNames: [ "listId", "eventName" ],
		},

		unregisterInterestInList: IMapperMethod & {
		argNames: [ "listId", "eventName" ],
		},

	}

}