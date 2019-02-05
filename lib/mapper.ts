import { IMapper } from "./mapper.d";
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

	},

	"MS.FileServices.Folder": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

		moveTo: {
		argNames: [ "target" ],
		},

	},

	"Microsoft.AppServices.AppCollection": {
		getAppsFromStore: {
		argNames: [ "addInType", "queryString" ],
		},

		getByType: {
		argNames: [ "type" ],
		},

	},

	"Microsoft.Office.Server.Search.REST.SearchService": {
		autocompletions: {
		argNames: [ "querytext", "sources", "numberOfCompletions", "cursorPosition" ],
		},

		export: {
		argNames: [ "userName", "startTime" ],
		},

		exportpopulartenantqueries: {
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

		suggest: {
		argNames: [ "querytext", "iNumberOfQuerySuggestions", "iNumberOfResultSuggestions", "iNumberOfPopularResultSuggestions", "fPreQuerySuggestions", "fHitHighlighting", "fCapitalizeFirstLetters", "culture", "enableStemming", "showPeopleNameSuggestions", "enableQueryRules", "fPrefixMatchAllTerms", "sourceId", "clientType", "useOLSQuery", "OLSQuerySession", "zeroTermSuggestions" ],
		},

		searchquery: {
		argNames: [ "request" ],
		},

	},

	"Microsoft.Office.Server.Search.REST.SearchSetting": {
		getpromotedresultqueryrules: {
		argNames: [ "siteCollectionLevel", "offset", "numberOfRules" ],
		},

		getqueryconfiguration: {
		argNames: [ "callLocalSearchFarmsOnly" ],
		},

		getxssearchpolicy: {
		},

		pingadminendpoint: {
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

	"Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation.Collection": {
		getByLocation: {
		argNames: [ "location" ],
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob.Collection": {
		getByMoveId: {
		argNames: [ "moveId" ],
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob.Collection": {
		getByMoveId: {
		argNames: [ "moveId" ],
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob.Collection": {
		getByMoveId: {
		argNames: [ "moveId" ],
		},

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

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.MultiGeoServicesBeta": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		crossGeoCredentials: {
		argNames: [ "siteId" ],
		},

		dBSchemaCompatibilityCheck: {
		},

		geoMoveCompatibilityChecks: {
		},

		userPersonalSiteId: {
		argNames: [ "userPrincipalName" ],
		},

		userPersonalSiteLocation: {
		argNames: [ "userPrincipalName" ],
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

		getMoveReport: {
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob.Collection": {
		getBySiteUrl: {
		argNames: [ "siteUrl" ],
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota.Collection": {
		getByLocation: {
		argNames: [ "geoLocation" ],
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup.Collection": {
		getByAlias: {
		argNames: [ "alias" ],
		},

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

	},

	"Microsoft.Online.SharePoint.PointPublishing.PointPublishingAdmin": {
		createTopicMagazine: {
		argNames: [ "magazineName" ],
		},

		deleteTopicMagazine: {
		argNames: [ "magazineId" ],
		},

		provisionPointPublishingAsync: {
		},

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

	"Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipal": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		update: {
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

	},

	"Microsoft.Online.SharePoint.TenantAdministration.Office365CommsMessagesServiceProxy": {
		messageCenterMessages: {
		argNames: [ "messagesFieldsData" ],
		},

		serviceHealthMessages: {
		argNames: [ "messagesFieldsData" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SiteCollectionManagementService": {
		emailAdmins: {
		argNames: [ "message", "siteIds", "subject" ],
		},

		exportCSVFile: {
		},

		getSiteDescription: {
		argNames: [ "siteId" ],
		},

		office365ProvidedSharepointSiteActivityDataReady: {
		},

		resetTimestampUpdateOffice365ProvidedSharepointSiteActivityData: {
		},

		updateOffice365ProvidedSharepointSiteActivityData: {
		argNames: [ "oauthToken" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SiteProperties": {
		update: {
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.SiteProperties.Collection": {
		getById: {
		argNames: [ "siteId" ],
		},

		getLockStateById: {
		argNames: [ "siteId" ],
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.Tenant": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		checkTenantIntuneLicense: {
		},

		checkTenantLicenses: {
		argNames: [ "licenses" ],
		},

		connectSiteToHubSiteById: {
		argNames: [ "siteUrl", "hubSiteId" ],
		},

		createSite: {
		argNames: [ "siteCreationProperties" ],
		},

		getIdleSessionSignOutForUnmanagedDevices: {
		},

		getSitePropertiesByUrl: {
		argNames: [ "url", "includeDetail" ],
		},

		getSitePropertiesFromSharePointByFilters: {
		argNames: [ "speFilter" ],
		},

		getSiteSecondaryAdministrators: {
		argNames: [ "secondaryAdministratorsFieldsData" ],
		},

		getSPOTenantAllWebTemplates: {
		},

		registerHubSite: {
		argNames: [ "siteUrl" ],
		},

		registerHubSiteWithCreationInformation: {
		argNames: [ "siteUrl", "creationInformation" ],
		},

		removeDeletedSite: {
		argNames: [ "siteUrl" ],
		},

		removeDeletedSitePreferId: {
		argNames: [ "siteUrl", "siteId" ],
		},

		removeSite: {
		argNames: [ "siteUrl" ],
		},

		restoreDeletedSite: {
		argNames: [ "siteUrl" ],
		},

		restoreDeletedSitePreferId: {
		argNames: [ "siteUrl", "siteId" ],
		},

		setIdleSessionSignOutForUnmanagedDevices: {
		argNames: [ "enabled", "warnAfter", "signOutAfter" ],
		},

		setSiteSecondaryAdministrators: {
		argNames: [ "secondaryAdministratorsFieldsData" ],
		},

		unregisterHubSite: {
		argNames: [ "siteUrl" ],
		},

		update: {
		},

	},

	"Microsoft.Online.SharePoint.TenantAdministration.TenantAdminSettingsService": {
		getTenantSharingStatus: {
		},

		update: {
		},

	},

	"Microsoft.Online.SharePoint.TenantManagement.ExternalUser.Collection": {
		getById: {
		argNames: [ "uniqueId" ],
		},

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
		argNames: [ "name", "themeJson" ],
		},

		addToCarLibAndCdn: {
		argNames: [ "cdnType", "libUrl", "displayName", "thumbnailUrl" ],
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

		isSharingDisabledForNonOwnersOfSite: {
		argNames: [ "siteUrl" ],
		},

		queueImportProfileProperties: {
		argNames: [ "idType", "sourceDataIdProperty", "propertyMap", "sourceUri" ],
		},

		removeExternalUsers: {
		argNames: [ "uniqueIds" ],
		},

		removeFromCarAndCdn: {
		argNames: [ "remove", "cdnType", "libUrl" ],
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

		setHideDefaultThemes: {
		argNames: [ "hideDefaultThemes" ],
		},

		setIdleSessionSignOutForUnmanagedDevices: {
		argNames: [ "enabled", "warnAfter", "signOutAfter" ],
		},

		setTenantCdnEnabled: {
		argNames: [ "cdnType", "isEnabled" ],
		},

		setTenantCdnPolicy: {
		argNames: [ "cdnType", "policy", "policyValue" ],
		},

		updateTenantTheme: {
		argNames: [ "name", "themeJson" ],
		},

	},

	"Microsoft.SharePoint.Administration.FeatureDefinition.Collection": {
		getFeatureDefinition: {
		argNames: [ "featureDisplayName", "compatibilityLevel" ],
		},

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

	"Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog": {
		getCrawledUrls: {
		argNames: [ "getCountOnly", "maxRows", "queryString", "isLike", "contentSourceID", "errorLevel", "errorID", "startDateTime", "endDateTime" ],
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

		getById: {
		argNames: [ "id" ],
		},

	},

	"Microsoft.SharePoint.Comments.comment": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		like: {
		},

		unlike: {
		},

	},

	"Microsoft.SharePoint.Comments.comment.Collection": {
		deleteAll: {
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
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType" ],
		},

	},

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata": {
		deploy: {
		argNames: [ "skipFeatureDeployment" ],
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

	},

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem.Collection": {
		add: {
		argNames: [ "absolutePath" ],
		},

		getByAbsoluteUrl: {
		argNames: [ "absolutePath" ],
		},

		remove: {
		argNames: [ "absolutePath" ],
		},

		removeById: {
		argNames: [ "siteId" ],
		},

	},

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		add: {
		argNames: [ "Content", "Overwrite", "Url" ],
		},

	},

	"Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		add: {
		argNames: [ "Content", "Overwrite", "Url" ],
		},

	},

	"Microsoft.SharePoint.Navigation.REST.NavigationServiceRest": {
		getPublishingNavigationProviderType: {
		argNames: [ "mapProviderName" ],
		},

		menuNodeKey: {
		argNames: [ "currentUrl", "mapProviderName" ],
		},

		menuState: {
		argNames: [ "menuNodeKey", "mapProviderName", "depth", "customProperties" ],
		},

		saveMenuState: {
		argNames: [ "menuState", "mapProviderName" ],
		},

	},

	"Microsoft.SharePoint.OrgNewsSite.OrgNewsSiteApi": {
		details: {
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
		canUserCreateGroup: {
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

		getGroupCreationContext: {
		},

		getGroupSiteConversionData: {
		},

		getSiteStatus: {
		argNames: [ "groupId" ],
		},

		getValidSiteUrlFromAlias: {
		argNames: [ "alias", "managedPath", "isTeamSite" ],
		},

		notebook: {
		argNames: [ "groupId" ],
		},

	},

	"Microsoft.SharePoint.Portal.SPHubSitesUtility": {
		getHubSites: {
		},

	},

	"Microsoft.SharePoint.Portal.SPSiteManager": {
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

		status: {
		argNames: [ "url" ],
		},

	},

	"Microsoft.SharePoint.Portal.SharePointHomeServiceContextBuilder": {
		context: {
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

	"Microsoft.SharePoint.TenantCdn.TenantCdnApi": {
		getCdnUrls: {
		argNames: [ "items" ],
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

		remove: {
		argNames: [ "subscriptionId" ],
		},

	},

	"OBA.Server.ServerWrapper.Diagnostics": {
		status: {
		},

	},

	"OBA.Server.ServerWrapper.Reporting": {
		publishReport: {
		argNames: [ "odataPostBodyStm" ],
		},

	},

	"OBA.Server.ServerWrapper.Taskflow": {
		processTask: {
		argNames: [ "requestBodyStream" ],
		},

	},

	"PS.BaseCalendarException": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.Calendar": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		copyTo: {
		argNames: [ "name" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

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

		update: {
		},

	},

	"PS.CalendarException": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.CalendarException.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getById: {
		argNames: [ "id" ],
		},

	},

	"PS.CustomField": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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

		update: {
		},

	},

	"PS.DraftAssignment": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
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

	},

	"PS.DraftProject": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		getResourcePlanByUrl: {
		argNames: [ "start", "end", "scale" ],
		},

		leaveProjectStage: {
		},

		readyToLeaveProjectStage: {
		},

		updateIdeaListItemStatus: {
		argNames: [ "status" ],
		},

		changeEnterpriseProjectType: {
		argNames: [ "enterpriseProjectTypeUid" ],
		},

		checkIn: {
		argNames: [ "force" ],
		},

		getChanges: {
		argNames: [ "token" ],
		},

		publish: {
		argNames: [ "checkIn" ],
		},

		update: {
		},

		updateCustomFields: {
		argNames: [ "customFieldDictionary" ],
		},

		validate: {
		},

	},

	"PS.DraftProjectResource": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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

	},

	"PS.DraftTask": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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

	},

	"PS.DraftTaskLink": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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

	},

	"PS.EngagementComment.Collection": {
		add: {
		argNames: [ "comment" ],
		},

	},

	"PS.EnterpriseProjectType": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		addDepartment: {
		argNames: [ "departmentValueGuid" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

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

		update: {
		},

	},

	"PS.EnterpriseResource": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

		forceCheckIn: {
		},

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

		update: {
		},

	},

	"PS.EnterpriseResourceCostRate": {
		restfulDelete: {
		},

		rESTfulUpdate: {
		},

	},

	"PS.EnterpriseResourceCostRate.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getByDateUrl: {
		argNames: [ "effectiveDate" ],
		},

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

	},

	"PS.EventHandler": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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

	},

	"PS.LookupNumber": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.LookupTable": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		addMask: {
		argNames: [ "mask" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

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

		update: {
		},

	},

	"PS.LookupText": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.Phase": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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

		update: {
		},

	},

	"PS.PlanAssignment": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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

	},

	"PS.PlanAssignmentInterval.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		getByStart: {
		argNames: [ "start" ],
		},

	},

	"PS.Project": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		getResourcePlanByUrl: {
		argNames: [ "start", "end", "scale" ],
		},

		leaveProjectStage: {
		},

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

		update: {
		},

	},

	"PS.ProjectEngagementTimephasedPeriod.Collection": {
		getByStartUrl: {
		argNames: [ "start" ],
		},

	},

	"PS.ProjectServer": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		getDeletedPublishedAssignments: {
		argNames: [ "deletedDate" ],
		},

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

	},

	"PS.PublishedAssignment.Collection": {
		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

	},

	"PS.PublishedProject": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		getResourcePlanByUrl: {
		argNames: [ "start", "end", "scale" ],
		},

		leaveProjectStage: {
		},

		readyToLeaveProjectStage: {
		},

		updateIdeaListItemStatus: {
		argNames: [ "status" ],
		},

		checkOut: {
		},

		createProjectSite: {
		argNames: [ "siteName" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		submitToWorkflow: {
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

	},

	"PS.PublishedTask": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		addTaskPlanLink: {
		argNames: [ "parameters" ],
		},

		deleteTaskPlanLink: {
		},

	},

	"PS.PublishedTask.Collection": {
		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

	},

	"PS.PublishedTaskLink.Collection": {
		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

	},

	"PS.QueueJob": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		cancel: {
		},

	},

	"PS.QueueJob.Collection": {
		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

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

		update: {
		},

	},

	"PS.ResourceEngagementTimephasedPeriod.Collection": {
		getByStartUrl: {
		argNames: [ "start" ],
		},

	},

	"PS.ResourcePlan": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

		forceCheckIn: {
		},

		publish: {
		},

		update: {
		},

	},

	"PS.ServiceStatus": {
		stopDelegation: {
		},

	},

	"PS.Stage": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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

		update: {
		},

	},

	"PS.StageCustomField": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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

	},

	"PS.StageDetailPage": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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

	},

	"PS.StatusAssignment": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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

	},

	"PS.TaskPlanLink": {
		delete: {
		requestType: RequestType.Delete
		},

	},

	"PS.TimeSheet": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

		recall: {
		},

		submit: {
		argNames: [ "comment" ],
		},

		update: {
		},

	},

	"PS.TimeSheetLine": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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

	},

	"PS.TimeSheetPeriod": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		createTimeSheet: {
		},

	},

	"PS.TimeSheetPeriod.Collection": {
		getByGuid: {
		argNames: [ "uid" ],
		},

		getById: {
		argNames: [ "objectId" ],
		},

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
		addUsingPath: {
		argNames: [ "DecodedUrl", "contentStream" ],
		},

		getByFileName: {
		argNames: [ "fileName" ],
		},

		getByFileNameAsPath: {
		argNames: [ "DecodedUrl" ],
		},

		add: {
		argNames: [ "FileName", "Content" ],
		},

	},

	"SP.Audit": {
		update: {
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

		getLobSystem: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
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

	},

	"SP.BusinessData.Infrastructure.ExternalSubscriptionStore": {
		indexStore: {
		},

	},

	"SP.BusinessData.LobSystem": {
		getLobSystemInstances: {
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

	},

	"SP.CompliancePolicy.SPPolicyStoreProxy": {
		addDynamicScopeBinding: {
		argNames: [ "identity", "siteId" ],
		},

		bulkUpdateDynamicScopeBindings: {
		argNames: [ "scopesToAdd", "scopesToRemove", "siteId" ],
		},

		deleteDynamicScopeBinding: {
		argNames: [ "identity", "siteId" ],
		},

		extendReviewItemsRetention: {
		argNames: [ "itemIds", "extensionDate" ],
		},

		getDynamicScopeBindingBySiteId: {
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

		setContainerRetentionPolicy: {
		argNames: [ "siteId", "defaultContainerLabel" ],
		},

		updateContainerSetting: {
		argNames: [ "siteId", "externalId", "settingType", "setting" ],
		},

	},

	"SP.ContentType": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.ContentType.Collection": {
		addAvailableContentType: {
		argNames: [ "contentTypeId" ],
		},

		getById: {
		argNames: [ "contentTypeId" ],
		},

		add: {
		argNames: [ "parameters" ],
		},

	},

	"SP.Directory.DirectorySession": {
		getGraphUser: {
		argNames: [ "principalName" ],
		},

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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

	},

	"SP.Directory.Group.Collection": {
		add: {
		argNames: [ "objectId" ],
		},

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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		getUserLinks: {
		argNames: [ "linkName", "groupType" ],
		},

	},

	"SP.Directory.User.Collection": {
		add: {
		argNames: [ "objectId", "principalName" ],
		},

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

	},

	"SP.EventReceiverDefinition": {
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"SP.EventReceiverDefinition.Collection": {
		add: {
		argNames: [ "eventReceiverCreationInformation" ],
		},

		getById: {
		argNames: [ "eventReceiverId" ],
		},

	},

	"SP.Feature.Collection": {
		add: {
		argNames: [ "featureId", "force", "featdefScope" ],
		},

		getById: {
		argNames: [ "featureId" ],
		},

		remove: {
		argNames: [ "featureId", "force" ],
		},

	},

	"SP.Field": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
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

		add: {
		argNames: [ "parameters" ],
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

		getById: {
		argNames: [ "id" ],
		},

		getByInternalNameOrTitle: {
		argNames: [ "strName" ],
		},

		getByTitle: {
		argNames: [ "title" ],
		},

		createFieldAsXml: {
		argNames: [ "schemaXml" ],
		},

	},

	"SP.FieldCalculated": {
		delete: {
		requestType: RequestType.Delete
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

	},

	"SP.FieldLink.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		reorder: {
		argNames: [ "internalNames" ],
		},

		add: {
		argNames: [ "parameters" ],
		},

	},

	"SP.FieldLocation": {
		delete: {
		requestType: RequestType.Delete
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

	"SP.FieldUrl": {
		delete: {
		requestType: RequestType.Delete
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		addActivities: {
		argNames: [ "activities" ],
		},

		addClientActivities: {
		argNames: [ "activitiesStream" ],
		},

		approve: {
		argNames: [ "comment" ],
		},

		cancelUpload: {
		argNames: [ "uploadId" ],
		},

		checkAccessAndPostViewAuditEvent: {
		},

		checkIn: {
		argNames: [ "comment", "checkInType" ],
		},

		checkOut: {
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

		deny: {
		argNames: [ "comment" ],
		},

		executeCobaltRequest: {
		argNames: [ "inputStream" ],
		},

		finishUpload: {
		argNames: [ "uploadId", "fileOffset", "stream" ],
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

		getPreAuthorizedAccessUrl: {
		argNames: [ "expirationHours" ],
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

		recycle: {
		},

		recycleWithETag: {
		argNames: [ "etagMatch" ],
		},

		saveBinaryStream: {
		argNames: [ "file" ],
		},

		setFileUserValue: {
		argNames: [ "key", "value" ],
		},

		startUpload: {
		argNames: [ "uploadId", "stream" ],
		},

		undoCheckOut: {
		},

		unPublish: {
		argNames: [ "comment" ],
		},

		updateVirusInfo: {
		argNames: [ "virusStatus", "virusMessage", "etagToCheck" ],
		},

		content: {
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.File.Collection": {
		addStub: {
		argNames: [ "urlOfFile" ],
		},

		addStubUsingPath: {
		argNames: [ "DecodedUrl" ],
		},

		addTemplateFile: {
		argNames: [ "urlOfFile", "templateFileType" ],
		},

		addUsingPath: {
		argNames: [ "DecodedUrl", "Overwrite", "contentStream" ],
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

		add: {
		argNames: [ "Url", "Overwrite", "Content" ],
		},

	},

	"SP.FileVersion": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

		openBinaryStream: {
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		addSubFolder: {
		argNames: [ "leafName" ],
		},

		addSubFolderUsingPath: {
		argNames: [ "DecodedUrl" ],
		},

		delete: {
		requestType: RequestType.Delete
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

		recycle: {
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
		argNames: [ "DecodedUrl", "Overwrite" ],
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

	},

	"SP.Form.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		getByPageType: {
		argNames: [ "formType" ],
		},

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
		getById: {
		argNames: [ "id" ],
		},

		getByName: {
		argNames: [ "name" ],
		},

		removeById: {
		argNames: [ "id" ],
		},

		removeByLoginName: {
		argNames: [ "loginName" ],
		},

		add: {
		argNames: [ "parameters" ],
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

	"SP.LanguageCollection": {
		getById: {
		argNames: [ "id" ],
		},

	},

	"SP.List": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		breakRoleInheritance: {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		resetRoleInheritance: {
		},

		addItem: {
		argNames: [ "parameters" ],
		},

		addItemUsingPath: {
		argNames: [ "parameters" ],
		},

		addValidateUpdateItem: {
		argNames: [ "listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment" ],
		},

		addValidateUpdateItemUsingPath: {
		argNames: [ "listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment" ],
		},

		bulkValidateUpdateListItems: {
		argNames: [ "itemIds", "formValues", "bNewDocumentUpdate", "checkInComment", "folderPath" ],
		},

		createDocumentAndGetEditLink: {
		argNames: [ "fileName", "folderPath", "documentTemplateType", "templateUrl" ],
		},

		createDocumentWithDefaultName: {
		argNames: [ "folderPath", "extension" ],
		},

		createMappedView: {
		argNames: [ "appViewCreationInfo", "visualizationTarget" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

		ensureSignoffStatusField: {
		},

		getBloomFilter: {
		argNames: [ "startItemId" ],
		},

		getBloomFilterWithCustomFields: {
		argNames: [ "listItemStartingID", "internalFieldNames" ],
		},

		getChanges: {
		argNames: [ "query" ],
		},

		getCheckedOutFiles: {
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

		getListItemChangesSinceToken: {
		argNames: [ "query" ],
		},

		getMappedApp: {
		argNames: [ "appId", "visualizationAppTarget" ],
		},

		getMappedApps: {
		argNames: [ "visualizationAppTarget" ],
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

		getWebDavUrl: {
		argNames: [ "sourceUrl" ],
		},

		publishMappedView: {
		argNames: [ "appId", "visualizationTarget" ],
		},

		recycle: {
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
		argNames: [ "parameters", "CascDelWarnMessage", "CustomAction", "DrillDown", "Field", "FieldInternalName", "Filter", "FilterData", "FilterData1", "FilterData10", "FilterData2", "FilterData3", "FilterData4", "FilterData5", "FilterData6", "FilterData7", "FilterData8", "FilterData9", "FilterField", "FilterField1", "FilterField10", "FilterField2", "FilterField3", "FilterField4", "FilterField5", "FilterField6", "FilterField7", "FilterField8", "FilterField9", "FilterFields", "FilterFields1", "FilterFields10", "FilterFields2", "FilterFields3", "FilterFields4", "FilterFields5", "FilterFields6", "FilterFields7", "FilterFields8", "FilterFields9", "FilterLookupId", "FilterLookupId1", "FilterLookupId10", "FilterLookupId2", "FilterLookupId3", "FilterLookupId4", "FilterLookupId5", "FilterLookupId6", "FilterLookupId7", "FilterLookupId8", "FilterLookupId9", "FilterOp", "FilterOp1", "FilterOp10", "FilterOp2", "FilterOp3", "FilterOp4", "FilterOp5", "FilterOp6", "FilterOp7", "FilterOp8", "FilterOp9", "FilterValue", "FilterValue1", "FilterValue10", "FilterValue2", "FilterValue3", "FilterValue4", "FilterValue5", "FilterValue6", "FilterValue7", "FilterValue8", "FilterValue9", "FilterValues", "FilterValues1", "FilterValues10", "FilterValues2", "FilterValues3", "FilterValues4", "FilterValues5", "FilterValues6", "FilterValues7", "FilterValues8", "FilterValues9", "GroupString", "HasOverrideSelectCommand", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsGroupRender", "IsXslView", "ListViewPageUrl", "OverrideScope", "OverrideSelectCommand", "PageFirstRow", "PageLastRow", "RootFolder", "SortDir", "SortDir1", "SortDir10", "SortDir2", "SortDir3", "SortDir4", "SortDir5", "SortDir6", "SortDir7", "SortDir8", "SortDir9", "SortField", "SortField1", "SortField10", "SortField2", "SortField3", "SortField4", "SortField5", "SortField6", "SortField7", "SortField8", "SortField9", "SortFields", "SortFieldValues", "View", "ViewCount", "ViewId", "ViewPath", "WebPartId" ],
		},

		renderListFilterData: {
		argNames: [ "ExcludeFieldFilteringHtml", "FieldInternalName", "OverrideScope", "ProcessQStringToCAML", "ViewId" ],
		},

		renderListFormData: {
		argNames: [ "itemId", "formId", "mode" ],
		},

		reserveListItemId: {
		},

		saveAsNewView: {
		argNames: [ "oldName", "newName", "privateView", "uri" ],
		},

		saveAsTemplate: {
		argNames: [ "strFileName", "strName", "strDescription", "bSaveData" ],
		},

		setExemptFromBlockDownloadOfNonViewableFiles: {
		argNames: [ "value" ],
		},

		syncFlowCallbackUrl: {
		argNames: [ "flowId" ],
		},

		syncFlowInstance: {
		argNames: [ "flowID" ],
		},

		syncFlowInstances: {
		},

		syncFlowTemplates: {
		argNames: [ "category" ],
		},

		unpublishMappedView: {
		argNames: [ "appId", "visualizationTarget" ],
		},

		validateAppName: {
		argNames: [ "appDisplayName" ],
		},

		getItems: {
		argNames: [ "viewXML" ],
		},

		getItemsByQuery: {
		argNames: [ "camlQuery" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.List.Collection": {
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

		add: {
		argNames: [ "parameters" ],
		},

	},

	"SP.ListItem": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		breakRoleInheritance: {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		resetRoleInheritance: {
		},

		delete: {
		requestType: RequestType.Delete
		},

		getChanges: {
		argNames: [ "query" ],
		},

		getHashtags: {
		},

		getUserEffectivePermissions: {
		argNames: [ "userName" ],
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

		setCommentsDisabled: {
		argNames: [ "value" ],
		},

		setComplianceTag: {
		argNames: [ "complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock" ],
		},

		setComplianceTagWithExplicitMetasUpdate: {
		argNames: [ "complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress" ],
		},

		setComplianceTagWithHold: {
		argNames: [ "complianceTag" ],
		},

		setComplianceTagWithMetaInfo: {
		argNames: [ "complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock" ],
		},

		setComplianceTagWithNoHold: {
		argNames: [ "complianceTag" ],
		},

		setComplianceTagWithRecord: {
		argNames: [ "complianceTag" ],
		},

		systemUpdate: {
		},

		updateEx: {
		argNames: [ "parameters" ],
		},

		updateHashtags: {
		argNames: [ "hashtagsToAdd", "hashtagsToRemove" ],
		},

		updateOverwriteVersion: {
		},

		validateUpdateListItem: {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.ListItem.Collection": {
		getById: {
		argNames: [ "itemId" ],
		},

		getByStringId: {
		argNames: [ "sId" ],
		},

		add: {
		argNames: [ "parameters" ],
		},

	},

	"SP.ListItemVersion": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

	},

	"SP.ListItemVersion.Collection": {
		getById: {
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

	},

	"SP.MicroService.MicroServiceManager": {
		addMicroserviceWorkItem: {
		argNames: [ "payLoad", "minutes", "properties" ],
		},

		deleteMicroserviceWorkItem: {
		argNames: [ "workItemId" ],
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

	"SP.Navigation": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		getNodeById: {
		argNames: [ "id" ],
		},

	},

	"SP.NavigationNode": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"SP.NavigationNode.Collection": {
		getById: {
		argNames: [ "id" ],
		},

		getByIndex: {
		argNames: [ "index" ],
		},

		moveAfter: {
		argNames: [ "nodeId", "previousNodeId" ],
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		getSharedWithUsers: {
		},

	},

	"SP.Publishing.CommunicationSite": {
		create: {
		argNames: [ "request" ],
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

	"SP.Publishing.PointPublishingPost": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		addImageFromUrl: {
		argNames: [ "fromImageUrl" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

	},

	"SP.Publishing.PointPublishingPost.Collection": {
		getById: {
		argNames: [ "id", "publishedOnly" ],
		},

		getByName: {
		argNames: [ "name", "publishedOnly" ],
		},

	},

	"SP.Publishing.PointPublishingPostServiceManager": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
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

	},

	"SP.Publishing.RepostPage": {
		checkOut: {
		},

		checkoutPage: {
		},

		copy: {
		},

		demoteFromNews: {
		},

		discardPage: {
		},

		getVersion: {
		argNames: [ "versionId" ],
		},

		promoteToNews: {
		},

		publish: {
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

		sharePagePreviewByEmail: {
		argNames: [ "message", "recipientEmails" ],
		},

		update: {
		},

	},

	"SP.Publishing.RepostPage.Collection": {
		isContentTypeAvailable: {
		},

	},

	"SP.Publishing.RichSharing": {
		sharePageByEmail: {
		argNames: [ "url", "message", "recipientEmails" ],
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
		checkOut: {
		},

		checkoutPage: {
		},

		copy: {
		},

		demoteFromNews: {
		},

		discardPage: {
		},

		getVersion: {
		argNames: [ "versionId" ],
		},

		promoteToNews: {
		},

		publish: {
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

		sharePagePreviewByEmail: {
		argNames: [ "message", "recipientEmails" ],
		},

		update: {
		},

	},

	"SP.Publishing.SitePage.Collection": {
		ensureTitleResource: {
		},

		feed: {
		argNames: [ "promotedState", "published", "metadataFilter" ],
		},

		feedTargeted: {
		argNames: [ "promotedState", "published", "metadataFilter" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		getByUrl: {
		argNames: [ "url" ],
		},

		getPageColumnState: {
		argNames: [ "url" ],
		},

		isSitePage: {
		argNames: [ "url" ],
		},

		templates: {
		},

	},

	"SP.Publishing.SitePageMetadata.Collection": {
		getById: {
		argNames: [ "id" ],
		},

	},

	"SP.Publishing.SitePageService": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		addImage: {
		argNames: [ "pageName", "imageFileName", "imageStream" ],
		},

		addImageFromExternalUrl: {
		argNames: [ "pageName", "imageFileName", "externalUrl", "subFolderName" ],
		},

		canCreatePromotedPage: {
		},

		update: {
		},

	},

	"SP.Publishing.SpotlightChannel": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"SP.Publishing.SpotlightChannel.Collection": {
		getById: {
		argNames: [ "id" ],
		},

	},

	"SP.Publishing.SpotlightVideo": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		},

	},

	"SP.Publishing.SpotlightVideo.Collection": {
		getById: {
		argNames: [ "id" ],
		},

	},

	"SP.Publishing.SubtitleFile.Collection": {
		add: {
		argNames: [ "language", "extension", "stream" ],
		},

		getSubtitleFile: {
		argNames: [ "name" ],
		},

		remove: {
		argNames: [ "name" ],
		},

	},

	"SP.Publishing.VideoChannel": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
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

		update: {
		},

	},

	"SP.Publishing.VideoChannel.Collection": {
		getById: {
		argNames: [ "id" ],
		},

	},

	"SP.Publishing.VideoItem": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
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

		setPeopleInMedia: {
		argNames: [ "loginNames" ],
		},

		setVideoOwner: {
		argNames: [ "id" ],
		},

		subtitles: {
		},

		thumbnails: {
		argNames: [ "preferredWidth" ],
		},

		thumbnailStream: {
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

	},

	"SP.Publishing.VideoPermissionGroup": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		hasCurrentUser: {
		},

	},

	"SP.Publishing.VideoServiceManager": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		getChannels: {
		argNames: [ "startIndex", "limit" ],
		},

		getPermissionGroup: {
		argNames: [ "permission" ],
		},

	},

	"SP.Publishing.VideoThumbnail.Collection": {
		getByIndex: {
		argNames: [ "choice" ],
		},

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

	},

	"SP.RecycleBinItem": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

		moveToSecondStage: {
		},

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

		restoreAll: {
		},

		restoreByIds: {
		argNames: [ "ids" ],
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

	},

	"SP.RemoteWeb": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
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

	},

	"SP.RequestContext": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		getRemoteContext: {
		},

	},

	"SP.RoleAssignment": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

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
		getById: {
		argNames: [ "id" ],
		},

		removeAll: {
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

		recreateMissingDefaultRoleDefinitions: {
		},

	},

	"SP.SPAppLicenseManager": {
		checkLicense: {
		argNames: [ "productId" ],
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

	},

	"SP.SecurableObject": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		breakRoleInheritance: {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		resetRoleInheritance: {
		},

	},

	"SP.Site": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
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

		deleteMigrationJob: {
		argNames: [ "id" ],
		},

		extendUpgradeReminderDate: {
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

		getMigrationJobStatus: {
		argNames: [ "id" ],
		},

		getMigrationStatus: {
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

		makeHubSite: {
		},

		multiGeoCopyJob: {
		argNames: [ "jobId", "userId", "binaryPayload" ],
		},

		needsUpgradeByType: {
		argNames: [ "versionUpgrade", "recursive" ],
		},

		onboardTenantForBringYourOwnKey: {
		argNames: [ "keyInfo" ],
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

		openWeb: {
		argNames: [ "strUrl" ],
		},

		openWebById: {
		argNames: [ "gWebId" ],
		},

		openWebUsingPath: {
		argNames: [ "path" ],
		},

		provisionMigrationContainers: {
		},

		provisionMigrationQueue: {
		},

		recoverTenantForBringYourOwnKey: {
		argNames: [ "keyInfo" ],
		},

		registerHubSite: {
		argNames: [ "creationInformation" ],
		},

		removeHubSite: {
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

		unregisterHubSite: {
		},

		updateClientObjectModelUseRemoteAPIsPermissionSetting: {
		argNames: [ "requireUseRemoteAPIs" ],
		},

		validateHubSiteJoinApprovalToken: {
		argNames: [ "joiningSiteId", "approvalToken" ],
		},

		update: {
		argNames: [ "properties" ],
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
		argNames: [ "types" ],
		},

		followedCount: {
		argNames: [ "types" ],
		},

		followers: {
		},

		isFollowed: {
		argNames: [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
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

		setShowInDisplayForm: {
		argNames: [ "value" ],
		},

		setShowInEditForm: {
		argNames: [ "value" ],
		},

		setShowInNewForm: {
		argNames: [ "value" ],
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

		uTCToLocalTime: {
		argNames: [ "date" ],
		},

	},

	"SP.TimeZone.Collection": {
		getById: {
		argNames: [ "id" ],
		},

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

	"SP.User": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		add: {
		argNames: [ "properties" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.User.Collection": {
		getByEmail: {
		argNames: [ "emailAddress" ],
		},

		getById: {
		argNames: [ "id" ],
		},

		getByLoginName: {
		argNames: [ "loginName" ],
		},

		removeById: {
		argNames: [ "id" ],
		},

		removeByLoginName: {
		argNames: [ "loginName" ],
		},

	},

	"SP.UserCustomAction": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		delete: {
		requestType: RequestType.Delete
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.UserCustomAction.Collection": {
		clear: {
		},

		getById: {
		argNames: [ "id" ],
		},

		add: {
		argNames: [ "properties" ],
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

		setMultiValuedProfileProperty: {
		argNames: [ "accountName", "propertyName", "propertyValues" ],
		},

		setMyProfilePicture: {
		argNames: [ "picture" ],
		},

		setSingleValueProfileProperty: {
		argNames: [ "accountName", "propertyName", "propertyValue" ],
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

		loadUserProfile: {
		argNames: [ "email" ],
		},

		readCache: {
		argNames: [ "folderPath" ],
		},

		readCacheOrCreate: {
		argNames: [ "folderPath", "requiredCacheKeys", "createIfMissing" ],
		},

		readCacheOrCreateOrderById: {
		argNames: [ "folderPath", "requiredCacheKeys", "createIfMissing" ],
		},

		writeCache: {
		argNames: [ "cacheItems" ],
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		createPersonalSite: {
		argNames: [ "lcid" ],
		},

		createPersonalSiteEnque: {
		argNames: [ "isInteractive" ],
		},

		createPersonalSiteFromWorkItem: {
		argNames: [ "workItemType" ],
		},

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

	},

	"SP.Utilities.ThemeManager": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
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

		setHideDefaultThemes: {
		argNames: [ "hideDefaultThemes" ],
		},

		updateTenantTheme: {
		argNames: [ "name", "themeJson" ],
		},

	},

	"SP.View": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		addToSpotlight: {
		argNames: [ "itemId", "folderPath", "afterItemId" ],
		},

		delete: {
		requestType: RequestType.Delete
		},

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
		getById: {
		argNames: [ "guidId" ],
		},

		getByTitle: {
		argNames: [ "strTitle" ],
		},

		add: {
		argNames: [ "properties" ],
		},

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
		query: { argNames: ["oData"], requestType: RequestType.OData },
		breakRoleInheritance: {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		resetRoleInheritance: {
		},

		addCrossFarmMessage: {
		argNames: [ "messagePayloadBase64" ],
		},

		addSupportedUILanguage: {
		argNames: [ "lcid" ],
		},

		applyTheme: {
		argNames: [ "colorPaletteUrl", "fontSchemeUrl", "backgroundImageUrl", "shareGenerated" ],
		},

		applyWebTemplate: {
		argNames: [ "webTemplate" ],
		},

		createDefaultAssociatedGroups: {
		argNames: [ "userLogin", "userLogin2", "groupNameSeed" ],
		},

		defaultDocumentLibrary: {
		},

		delete: {
		requestType: RequestType.Delete
		},

		doesPushNotificationSubscriberExist: {
		argNames: [ "deviceAppInstanceId" ],
		},

		ensureUser: {
		argNames: [ "logonName" ],
		},

		executeRemoteLOB: {
		argNames: [ "inputStream" ],
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
		argNames: [ "components" ],
		},

		getClientSideComponentsById: {
		argNames: [ "componentIds" ],
		},

		getClientSideWebParts: {
		argNames: [ "includeErrors" ],
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

		getList: {
		argNames: [ "strUrl" ],
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

		getListUsingPath: {
		argNames: [ "DecodedUrl" ],
		},

		getNewsList: {
		argNames: [ "allowCreate" ],
		},

		getOnePageContextAsStream: {
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

		getSharingLinkData: {
		argNames: [ "linkUrl" ],
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

		pageContextInfo: {
		argNames: [ "includeODBSettings", "emitNavigationInfo" ],
		},

		parseDateTime: {
		argNames: [ "value", "displayFormat", "calendarType" ],
		},

		processExternalNotification: {
		argNames: [ "stream" ],
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

		setAccessRequestSiteDescriptionAndUpdate: {
		argNames: [ "description" ],
		},

		setStorageEntity: {
		argNames: [ "key", "value", "description", "comments" ],
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

		unregisterPushNotificationSubscriber: {
		argNames: [ "deviceAppInstanceId" ],
		},

		doesUserHavePermissions: {
		argNames: [ "high", "low" ],
		},

		update: {
		argNames: [ "properties" ],
		},

	},

	"SP.Web.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

	},

	"SP.WebInformation.Collection": {
		add: {
		argNames: [ "parameters" ],
		},

		getById: {
		argNames: [ "id" ],
		},

	},

	"SP.WebParts.LimitedWebPartManager": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		exportWebPart: {
		argNames: [ "webPartId" ],
		},

		importWebPart: {
		argNames: [ "webPartXml" ],
		},

	},

	"SP.WebParts.WebPartDefinition": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		closeWebPart: {
		},

		deleteWebPart: {
		},

		moveWebPartTo: {
		argNames: [ "zoneID", "zoneIndex" ],
		},

		openWebPart: {
		},

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

	},

	"SP.WebTemplate.Collection": {
		getByName: {
		argNames: [ "name" ],
		},

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

		movePersonalTaskToLocation: {
		argNames: [ "taskKey", "newLocationKey" ],
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

		movePersonalTaskToLocation: {
		argNames: [ "taskKey", "newLocationKey" ],
		},

		reorderTask: {
		argNames: [ "taskKey", "newAfterTaskKey" ],
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

		updateTaskWithLocalizedValue: {
		argNames: [ "taskKey", "field", "value" ],
		},

		reorderTask: {
		argNames: [ "taskKey", "newAfterTaskKey" ],
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
		breakRoleInheritance: {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
		},

		resetRoleInheritance: {
		},

		delete: {
		requestType: RequestType.Delete
		},

		getChanges: {
		argNames: [ "query" ],
		},

		getHashtags: {
		},

		getUserEffectivePermissions: {
		argNames: [ "userName" ],
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

		setCommentsDisabled: {
		argNames: [ "value" ],
		},

		setComplianceTag: {
		argNames: [ "complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock" ],
		},

		setComplianceTagWithExplicitMetasUpdate: {
		argNames: [ "complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress" ],
		},

		setComplianceTagWithHold: {
		argNames: [ "complianceTag" ],
		},

		setComplianceTagWithMetaInfo: {
		argNames: [ "complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock" ],
		},

		setComplianceTagWithNoHold: {
		argNames: [ "complianceTag" ],
		},

		setComplianceTagWithRecord: {
		argNames: [ "complianceTag" ],
		},

		systemUpdate: {
		},

		updateEx: {
		argNames: [ "parameters" ],
		},

		updateHashtags: {
		argNames: [ "hashtagsToAdd", "hashtagsToRemove" ],
		},

		updateOverwriteVersion: {
		},

		validateUpdateListItem: {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment" ],
		},

		update: {
		argNames: [ "properties" ],
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

	},

	"SP.Workflow.WorkflowTemplate.Collection": {
		getById: {
		argNames: [ "templateId" ],
		},

		getByName: {
		argNames: [ "name" ],
		},

	},

	"SP.WorkflowServices.InteropService": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
		cancelWorkflow: {
		argNames: [ "instanceId" ],
		},

		disableEvents: {
		argNames: [ "listId", "itemGuid" ],
		},

		enableEvents: {
		argNames: [ "listId", "itemGuid" ],
		},

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
		query: { argNames: ["oData"], requestType: RequestType.OData },
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
		query: { argNames: ["oData"], requestType: RequestType.OData },
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
		sort: {
		},

	},

	"SP.WorkflowServices.WorkflowSubscriptionService": {
		query: { argNames: ["oData"], requestType: RequestType.OData },
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