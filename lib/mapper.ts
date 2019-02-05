import { IMapper } from "./base";

/* MS.FileServices.File */
export interface MS_FileServices_File {
	properties?: Array<string>;
	copyTo: IMapper & {
		argNames: [ "target", "overwrite" ],
	},
	deleteObject: IMapper & {

	},
	download: IMapper & {

	},
	moveTo: IMapper & {
		argNames: [ "target", "overwrite" ],
	},
	upload: IMapper & {
		argNames: [ "stream" ],
	},
};

/* MS.FileServices.FileSystemItem.Collection */
export interface MS_FileServices_FileSystemItem_Collection {
	add: IMapper & {
		argNames: [ "name", "overwrite", "content" ],
	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* MS.FileServices.Folder */
export interface MS_FileServices_Folder {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	moveTo: IMapper & {
		argNames: [ "target" ],
	},
};

/* Microsoft.AppServices.AppCollection */
export interface Microsoft_AppServices_AppCollection {
	properties?: Array<string>;
	getAppsFromStore: IMapper & {
		argNames: [ "addInType", "queryString" ],
	},
	getByType: IMapper & {
		argNames: [ "type" ],
	},
};

/* Microsoft.Office.Server.Search.REST.SearchService */
export interface Microsoft_Office_Server_Search_REST_SearchService {
	properties?: Array<string>;
	autocompletions: IMapper & {
		argNames: [ "querytext", "sources", "numberOfCompletions", "cursorPosition" ],
	},
	export: IMapper & {
		argNames: [ "userName", "startTime" ],
	},
	exportpopulartenantqueries: IMapper & {

	},
	postquery: IMapper & {
		argNames: [ "request" ],
	},
	query: IMapper & {
		argNames: [ "querytext", "queryTemplate", "enableInterleaving", "sourceId", "rankingModelId", "startRow", "rowLimit", "rowsPerPage", "selectProperties", "culture", "refinementFilters", "refiners", "hiddenConstraints", "sortList", "enableStemming", "trimDuplicates", "timeout", "enableNicknames", "enablePhonetic", "enableFQL", "hitHighlightedProperties", "propertiesToGenerateAcronyms", "bypassResultTypes", "processBestBets", "clientType", "personalizationData", "resultsUrl", "queryTag", "trimDuplicatesIncludeId", "totalRowsExactMinimum", "impressionId", "properties", "enableQueryRules", "summaryLength", "maxSnippetLength", "desiredSnippetLength", "uiLanguage", "blockDedupeMode", "generateBlockRankLog", "enableSorting", "collapseSpecification", "processPersonalFavorites", "enableOrderingHitHighlightedProperty", "hitHighlightedMultivaluePropertyLimit", "queryTemplatePropertiesUrl", "timeZoneId", "useOLSQuery", "OLSQuerySession" ],
	},
	recordPageClick: IMapper & {
		argNames: [ "pageInfo", "clickType", "blockType", "clickedResultId", "subResultIndex", "immediacySourceId", "immediacyQueryString", "immediacyTitle", "immediacyUrl" ],
	},
	resultspageaddress: IMapper & {

	},
	searchcenterurl: IMapper & {

	},
	suggest: IMapper & {
		argNames: [ "querytext", "iNumberOfQuerySuggestions", "iNumberOfResultSuggestions", "iNumberOfPopularResultSuggestions", "fPreQuerySuggestions", "fHitHighlighting", "fCapitalizeFirstLetters", "culture", "enableStemming", "showPeopleNameSuggestions", "enableQueryRules", "fPrefixMatchAllTerms", "sourceId", "clientType", "useOLSQuery", "OLSQuerySession", "zeroTermSuggestions" ],
	},
	searchquery: IMapper & {
		argNames: [ "request" ],
	},
};

/* Microsoft.Office.Server.Search.REST.SearchSetting */
export interface Microsoft_Office_Server_Search_REST_SearchSetting {
	properties?: Array<string>;
	getpromotedresultqueryrules: IMapper & {
		argNames: [ "siteCollectionLevel", "offset", "numberOfRules" ],
	},
	getqueryconfiguration: IMapper & {
		argNames: [ "callLocalSearchFarmsOnly" ],
	},
	getxssearchpolicy: IMapper & {

	},
	pingadminendpoint: IMapper & {

	},
	setxssearchpolicy: IMapper & {
		argNames: [ "policy" ],
	},
};

/* Microsoft.Online.SharePoint.AppLauncher.AppLauncher */
export interface Microsoft_Online_SharePoint_AppLauncher_AppLauncher {
	properties?: Array<string>;
	getData: IMapper & {
		argNames: [ "suiteVersion", "isMobileRequest", "locale", "onPremVer" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation_Collection {
	getByLocation: IMapper & {
		argNames: [ "location" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmGroupMoveJob {
	properties?: Array<string>;
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmGroupMoveJob_Collection {
	getByMoveId: IMapper & {
		argNames: [ "moveId" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmSiteMoveJob {
	properties?: Array<string>;
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmSiteMoveJob_Collection {
	getByMoveId: IMapper & {
		argNames: [ "moveId" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmUserMoveJob {
	properties?: Array<string>;
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmUserMoveJob_Collection {
	getByMoveId: IMapper & {
		argNames: [ "moveId" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantProperty {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantProperty_Collection {
	getByPropertyNameAndGeoLocation: IMapper & {
		argNames: [ "propertyName", "geo" ],
	},
	getChanges: IMapper & {
		argNames: [ "startTimeInUtc" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GeoAdministrator {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GeoAdministrator_Collection {
	create: IMapper & {
		argNames: [ "parameters" ],
	},
	getByLoginName: IMapper & {
		argNames: [ "loginName" ],
	},
	getByLoginNameAndType: IMapper & {
		argNames: [ "loginName", "memberType" ],
	},
	getByObjectId: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GeoExperience {
	properties?: Array<string>;
	upgradeAllInstancesToSPOMode: IMapper & {

	},
	upgradeToSPOMode: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GeoTenantInstanceInformation_Collection {
	getByGeoLocation: IMapper & {
		argNames: [ "geoLocation" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob {
	properties?: Array<string>;
	cancel: IMapper & {

	},
	deleteObject: IMapper & {

	},
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob_Collection {
	getByGroupName: IMapper & {
		argNames: [ "groupname" ],
	},
	getMoveReport: IMapper & {
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.MultiGeoServicesBeta */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	crossGeoCredentials: IMapper & {
		argNames: [ "siteId" ],
	},
	dBSchemaCompatibilityCheck: IMapper & {

	},
	geoMoveCompatibilityChecks: IMapper & {

	},
	userPersonalSiteId: IMapper & {
		argNames: [ "userPrincipalName" ],
	},
	userPersonalSiteLocation: IMapper & {
		argNames: [ "userPrincipalName" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob {
	properties?: Array<string>;
	cancel: IMapper & {

	},
	deleteObject: IMapper & {

	},
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob_Collection {
	getByUrl: IMapper & {
		argNames: [ "url" ],
	},
	getMoveReport: IMapper & {
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_SiteRenameJob_Collection {
	getBySiteUrl: IMapper & {
		argNames: [ "siteUrl" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota {
	properties?: Array<string>;
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota_Collection {
	getByLocation: IMapper & {
		argNames: [ "geoLocation" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_TaxonomyReplicationParameters {
	properties?: Array<string>;
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_UnifiedGroup_Collection {
	getByAlias: IMapper & {
		argNames: [ "alias" ],
	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_UserMoveJob {
	properties?: Array<string>;
	cancel: IMapper & {

	},
	deleteObject: IMapper & {

	},
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob.Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_UserMoveJob_Collection {
	getByDirection: IMapper & {
		argNames: [ "direction" ],
	},
	getByMoveId: IMapper & {
		argNames: [ "odbMoveId" ],
	},
	getByUpn: IMapper & {
		argNames: [ "upn" ],
	},
	getByValidPdl: IMapper & {
		argNames: [ "validPdl" ],
	},
	getMoveReport: IMapper & {
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
	},
};

/* Microsoft.Online.SharePoint.PointPublishing.PointPublishingAdmin */
export interface Microsoft_Online_SharePoint_PointPublishing_PointPublishingAdmin {
	properties?: Array<string>;
	createTopicMagazine: IMapper & {
		argNames: [ "magazineName" ],
	},
	deleteTopicMagazine: IMapper & {
		argNames: [ "magazineId" ],
	},
	provisionPointPublishingAsync: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.SPLogger.LogExport */
export interface Microsoft_Online_SharePoint_SPLogger_LogExport {
	properties?: Array<string>;
	getFiles: IMapper & {
		argNames: [ "partitionId", "logType" ],
	},
	getLogTypes: IMapper & {

	},
	getPartitions: IMapper & {
		argNames: [ "logType" ],
	},
};

/* Microsoft.Online.SharePoint.TenantAdmin.MiddleTier.DDIAdapter */
export interface Microsoft_Online_SharePoint_TenantAdmin_MiddleTier_DDIAdapter {
	properties?: Array<string>;
	getList: IMapper & {
		argNames: [ "schema", "workflow", "stream" ],
	},
	getObject: IMapper & {
		argNames: [ "schema", "workflow", "stream" ],
	},
	multiObjectExecute: IMapper & {
		argNames: [ "schema", "workflow", "stream" ],
	},
	newObject: IMapper & {
		argNames: [ "schema", "workflow", "stream" ],
	},
	removeObjects: IMapper & {
		argNames: [ "schema", "workflow", "stream" ],
	},
	setObject: IMapper & {
		argNames: [ "schema", "workflow", "stream" ],
	},
};

/* Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties */
export interface Microsoft_Online_SharePoint_TenantAdministration_HubSiteProperties {
	properties?: Array<string>;
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipal */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipal {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant.Collection */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant_Collection {
	getByObjectId: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionRequest {
	properties?: Array<string>;
	approve: IMapper & {

	},
	deny: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest.Collection */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionRequest_Collection {
	approve: IMapper & {
		argNames: [ "resource", "scope" ],
	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* Microsoft.Online.SharePoint.TenantAdministration.Office365CommsMessagesServiceProxy */
export interface Microsoft_Online_SharePoint_TenantAdministration_Office365CommsMessagesServiceProxy {
	properties?: Array<string>;
	messageCenterMessages: IMapper & {
		argNames: [ "messagesFieldsData" ],
	},
	serviceHealthMessages: IMapper & {
		argNames: [ "messagesFieldsData" ],
	},
};

/* Microsoft.Online.SharePoint.TenantAdministration.SiteCollectionManagementService */
export interface Microsoft_Online_SharePoint_TenantAdministration_SiteCollectionManagementService {
	properties?: Array<string>;
	emailAdmins: IMapper & {
		argNames: [ "message", "siteIds", "subject" ],
	},
	exportCSVFile: IMapper & {

	},
	getSiteDescription: IMapper & {
		argNames: [ "siteId" ],
	},
	office365ProvidedSharepointSiteActivityDataReady: IMapper & {

	},
	resetTimestampUpdateOffice365ProvidedSharepointSiteActivityData: IMapper & {

	},
	updateOffice365ProvidedSharepointSiteActivityData: IMapper & {
		argNames: [ "oauthToken" ],
	},
};

/* Microsoft.Online.SharePoint.TenantAdministration.SiteProperties */
export interface Microsoft_Online_SharePoint_TenantAdministration_SiteProperties {
	properties?: Array<string>;
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.TenantAdministration.SiteProperties.Collection */
export interface Microsoft_Online_SharePoint_TenantAdministration_SiteProperties_Collection {
	getById: IMapper & {
		argNames: [ "siteId" ],
	},
	getLockStateById: IMapper & {
		argNames: [ "siteId" ],
	},
};

/* Microsoft.Online.SharePoint.TenantAdministration.Tenant */
export interface Microsoft_Online_SharePoint_TenantAdministration_Tenant {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	checkTenantIntuneLicense: IMapper & {

	},
	checkTenantLicenses: IMapper & {
		argNames: [ "licenses" ],
	},
	connectSiteToHubSiteById: IMapper & {
		argNames: [ "siteUrl", "hubSiteId" ],
	},
	createSite: IMapper & {
		argNames: [ "siteCreationProperties" ],
	},
	getIdleSessionSignOutForUnmanagedDevices: IMapper & {

	},
	getSitePropertiesByUrl: IMapper & {
		argNames: [ "url", "includeDetail" ],
	},
	getSitePropertiesFromSharePointByFilters: IMapper & {
		argNames: [ "speFilter" ],
	},
	getSiteSecondaryAdministrators: IMapper & {
		argNames: [ "secondaryAdministratorsFieldsData" ],
	},
	getSPOTenantAllWebTemplates: IMapper & {

	},
	registerHubSite: IMapper & {
		argNames: [ "siteUrl" ],
	},
	registerHubSiteWithCreationInformation: IMapper & {
		argNames: [ "siteUrl", "creationInformation" ],
	},
	removeDeletedSite: IMapper & {
		argNames: [ "siteUrl" ],
	},
	removeDeletedSitePreferId: IMapper & {
		argNames: [ "siteUrl", "siteId" ],
	},
	removeSite: IMapper & {
		argNames: [ "siteUrl" ],
	},
	restoreDeletedSite: IMapper & {
		argNames: [ "siteUrl" ],
	},
	restoreDeletedSitePreferId: IMapper & {
		argNames: [ "siteUrl", "siteId" ],
	},
	setIdleSessionSignOutForUnmanagedDevices: IMapper & {
		argNames: [ "enabled", "warnAfter", "signOutAfter" ],
	},
	setSiteSecondaryAdministrators: IMapper & {
		argNames: [ "secondaryAdministratorsFieldsData" ],
	},
	unregisterHubSite: IMapper & {
		argNames: [ "siteUrl" ],
	},
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.TenantAdministration.TenantAdminSettingsService */
export interface Microsoft_Online_SharePoint_TenantAdministration_TenantAdminSettingsService {
	properties?: Array<string>;
	getTenantSharingStatus: IMapper & {

	},
	update: IMapper & {

	},
};

/* Microsoft.Online.SharePoint.TenantManagement.ExternalUser.Collection */
export interface Microsoft_Online_SharePoint_TenantManagement_ExternalUser_Collection {
	getById: IMapper & {
		argNames: [ "uniqueId" ],
	},
};

/* Microsoft.Online.SharePoint.TenantManagement.Office365Tenant */
export interface Microsoft_Online_SharePoint_TenantManagement_Office365Tenant {
	properties?: Array<string>;
	addPublicCdnOrigin: IMapper & {
		argNames: [ "origin" ],
	},
	addSdnProvider: IMapper & {
		argNames: [ "identifier", "license" ],
	},
	addTenantCdnOrigin: IMapper & {
		argNames: [ "cdnType", "originUrl" ],
	},
	addTenantTheme: IMapper & {
		argNames: [ "name", "themeJson" ],
	},
	addToCarLibAndCdn: IMapper & {
		argNames: [ "cdnType", "libUrl", "displayName", "thumbnailUrl" ],
	},
	createTenantCdnDefaultOrigins: IMapper & {
		argNames: [ "cdnType" ],
	},
	deleteImportProfilePropertiesJob: IMapper & {
		argNames: [ "jobId" ],
	},
	deleteTenantTheme: IMapper & {
		argNames: [ "name" ],
	},
	disableSharingForNonOwnersOfSite: IMapper & {
		argNames: [ "siteUrl" ],
	},
	getAllTenantThemes: IMapper & {

	},
	getExternalUsers: IMapper & {
		argNames: [ "position", "pageSize", "filter", "sortOrder" ],
	},
	getExternalUsersForSite: IMapper & {
		argNames: [ "siteUrl", "position", "pageSize", "filter", "sortOrder" ],
	},
	getExternalUsersWithSortBy: IMapper & {
		argNames: [ "position", "pageSize", "filter", "sortPropertyName", "sortOrder" ],
	},
	getHideDefaultThemes: IMapper & {

	},
	getIdleSessionSignOutForUnmanagedDevices: IMapper & {

	},
	getImportProfilePropertyJob: IMapper & {
		argNames: [ "jobId" ],
	},
	getImportProfilePropertyJobs: IMapper & {

	},
	getTenantCdnEnabled: IMapper & {
		argNames: [ "cdnType" ],
	},
	getTenantCdnOrigins: IMapper & {
		argNames: [ "cdnType" ],
	},
	getTenantCdnPolicies: IMapper & {
		argNames: [ "cdnType" ],
	},
	getTenantTheme: IMapper & {
		argNames: [ "name" ],
	},
	isSharingDisabledForNonOwnersOfSite: IMapper & {
		argNames: [ "siteUrl" ],
	},
	queueImportProfileProperties: IMapper & {
		argNames: [ "idType", "sourceDataIdProperty", "propertyMap", "sourceUri" ],
	},
	removeExternalUsers: IMapper & {
		argNames: [ "uniqueIds" ],
	},
	removeFromCarAndCdn: IMapper & {
		argNames: [ "remove", "cdnType", "libUrl" ],
	},
	removePublicCdnOrigin: IMapper & {
		argNames: [ "originId" ],
	},
	removeSdnProvider: IMapper & {

	},
	removeTenantCdnOrigin: IMapper & {
		argNames: [ "cdnType", "originUrl" ],
	},
	revokeAllUserSessions: IMapper & {
		argNames: [ "userName" ],
	},
	revokeAllUserSessionsByPuid: IMapper & {
		argNames: [ "puidList" ],
	},
	setHideDefaultThemes: IMapper & {
		argNames: [ "hideDefaultThemes" ],
	},
	setIdleSessionSignOutForUnmanagedDevices: IMapper & {
		argNames: [ "enabled", "warnAfter", "signOutAfter" ],
	},
	setTenantCdnEnabled: IMapper & {
		argNames: [ "cdnType", "isEnabled" ],
	},
	setTenantCdnPolicy: IMapper & {
		argNames: [ "cdnType", "policy", "policyValue" ],
	},
	updateTenantTheme: IMapper & {
		argNames: [ "name", "themeJson" ],
	},
};

/* Microsoft.SharePoint.Administration.FeatureDefinition.Collection */
export interface Microsoft_SharePoint_Administration_FeatureDefinition_Collection {
	getFeatureDefinition: IMapper & {
		argNames: [ "featureDisplayName", "compatibilityLevel" ],
	},
};

/* Microsoft.SharePoint.Administration.SPAnalyticsUsageService */
export interface Microsoft_SharePoint_Administration_SPAnalyticsUsageService {
	properties?: Array<string>;
	logevent: IMapper & {
		argNames: [ "usageEntry" ],
	},
};

/* Microsoft.SharePoint.Administration.SPAppStateQueryJobDefinition */
export interface Microsoft_SharePoint_Administration_SPAppStateQueryJobDefinition {
	properties?: Array<string>;
	performFastRevokeWithClientIds: IMapper & {

	},
};

/* Microsoft.SharePoint.Client.Search.Administration.DocumentCrawlLog */
export interface Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog {
	properties?: Array<string>;
	getCrawledUrls: IMapper & {
		argNames: [ "getCountOnly", "maxRows", "queryString", "isLike", "contentSourceID", "errorLevel", "errorID", "startDateTime", "endDateTime" ],
	},
};

/* Microsoft.SharePoint.Client.Search.Analytics.SignalStore */
export interface Microsoft_SharePoint_Client_Search_Analytics_SignalStore {
	properties?: Array<string>;
	signals: IMapper & {
		argNames: [ "signals" ],
	},
};

/* Microsoft.SharePoint.Client.Search.Query.RankingLabeling */
export interface Microsoft_SharePoint_Client_Search_Query_RankingLabeling {
	properties?: Array<string>;
	addJudgment: IMapper & {
		argNames: [ "userQuery", "url", "labelId" ],
	},
	getJudgementsForQuery: IMapper & {
		argNames: [ "query" ],
	},
	normalizeResultUrl: IMapper & {
		argNames: [ "url" ],
	},
};

/* Microsoft.SharePoint.Client.Search.Query.ReorderingRuleCollection */
export interface Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection {
	properties?: Array<string>;
	add: IMapper & {
		argNames: [ "matchType", "matchValue", "boost" ],
	},
	clear: IMapper & {

	},
};

/* Microsoft.SharePoint.Client.Search.Query.SortCollection */
export interface Microsoft_SharePoint_Client_Search_Query_SortCollection {
	properties?: Array<string>;
	add: IMapper & {
		argNames: [ "strProperty", "direction" ],
	},
	clear: IMapper & {

	},
};

/* Microsoft.SharePoint.Client.Search.Query.StringCollection */
export interface Microsoft_SharePoint_Client_Search_Query_StringCollection {
	properties?: Array<string>;
	add: IMapper & {
		argNames: [ "property" ],
	},
	clear: IMapper & {

	},
};

/* Microsoft.SharePoint.ClientSideComponent.HostedApp */
export interface Microsoft_SharePoint_ClientSideComponent_HostedApp {
	properties?: Array<string>;
	delete: IMapper & {

	},
	updateWebPartData: IMapper & {
		argNames: [ "webPartDataAsJson" ],
	},
};

/* Microsoft.SharePoint.ClientSideComponent.HostedAppsManager */
export interface Microsoft_SharePoint_ClientSideComponent_HostedAppsManager {
	properties?: Array<string>;
	add: IMapper & {
		argNames: [ "webPartDataAsJson", "hostType" ],
	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* Microsoft.SharePoint.Comments.comment */
export interface Microsoft_SharePoint_Comments_comment {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	like: IMapper & {

	},
	unlike: IMapper & {

	},
};

/* Microsoft.SharePoint.Comments.comment.Collection */
export interface Microsoft_SharePoint_Comments_comment_Collection {
	deleteAll: IMapper & {

	},
};

/* Microsoft.SharePoint.Internal.ActivityLogger */
export interface Microsoft_SharePoint_Internal_ActivityLogger {
	properties?: Array<string>;
	feedbackDirect: IMapper & {
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json" ],
	},
	feedbackIndirect: IMapper & {
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json" ],
	},
	logActivity: IMapper & {
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType" ],
	},
};

/* Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata {
	properties?: Array<string>;
	deploy: IMapper & {
		argNames: [ "skipFeatureDeployment" ],
	},
	install: IMapper & {

	},
	remove: IMapper & {

	},
	retract: IMapper & {

	},
	uninstall: IMapper & {

	},
	upgrade: IMapper & {

	},
};

/* Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata.Collection */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem.Collection */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionAppCatalogAllowedItem_Collection {
	add: IMapper & {
		argNames: [ "absolutePath" ],
	},
	getByAbsoluteUrl: IMapper & {
		argNames: [ "absolutePath" ],
	},
	remove: IMapper & {
		argNames: [ "absolutePath" ],
	},
	removeById: IMapper & {
		argNames: [ "siteId" ],
	},
};

/* Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionCorporateCatalogAccessor {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	add: IMapper & {
		argNames: [ "Content", "Overwrite", "Url" ],
	},
};

/* Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_TenantCorporateCatalogAccessor {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	add: IMapper & {
		argNames: [ "Content", "Overwrite", "Url" ],
	},
};

/* Microsoft.SharePoint.Navigation.REST.NavigationServiceRest */
export interface Microsoft_SharePoint_Navigation_REST_NavigationServiceRest {
	properties?: Array<string>;
	getPublishingNavigationProviderType: IMapper & {
		argNames: [ "mapProviderName" ],
	},
	menuNodeKey: IMapper & {
		argNames: [ "currentUrl", "mapProviderName" ],
	},
	menuState: IMapper & {
		argNames: [ "menuNodeKey", "mapProviderName", "depth", "customProperties" ],
	},
	saveMenuState: IMapper & {
		argNames: [ "menuState", "mapProviderName" ],
	},
};

/* Microsoft.SharePoint.OrgNewsSite.OrgNewsSiteApi */
export interface Microsoft_SharePoint_OrgNewsSite_OrgNewsSiteApi {
	properties?: Array<string>;
	details: IMapper & {

	},
};

/* Microsoft.SharePoint.Portal.GroupService */
export interface Microsoft_SharePoint_Portal_GroupService {
	properties?: Array<string>;
	getGroupImage: IMapper & {
		argNames: [ "id", "hash", "color" ],
	},
	setGroupImage: IMapper & {
		argNames: [ "imageStream" ],
	},
	syncGroupProperties: IMapper & {

	},
};

/* Microsoft.SharePoint.Portal.GroupSiteManager */
export interface Microsoft_SharePoint_Portal_GroupSiteManager {
	properties?: Array<string>;
	canUserCreateGroup: IMapper & {

	},
	create: IMapper & {
		argNames: [ "groupId" ],
	},
	createGroup: IMapper & {
		argNames: [ "displayName", "alias", "isPublic", "ownerPrincipalNames", "description", "creationOptions" ],
	},
	createGroupEx: IMapper & {
		argNames: [ "displayName", "alias", "isPublic", "optionalParams" ],
	},
	createGroupForSite: IMapper & {
		argNames: [ "displayName", "alias", "isPublic", "optionalParams" ],
	},
	getGroupCreationContext: IMapper & {

	},
	getGroupSiteConversionData: IMapper & {

	},
	getSiteStatus: IMapper & {
		argNames: [ "groupId" ],
	},
	getValidSiteUrlFromAlias: IMapper & {
		argNames: [ "alias", "managedPath", "isTeamSite" ],
	},
	notebook: IMapper & {
		argNames: [ "groupId" ],
	},
};

/* Microsoft.SharePoint.Portal.SPHubSitesUtility */
export interface Microsoft_SharePoint_Portal_SPHubSitesUtility {
	properties?: Array<string>;
	getHubSites: IMapper & {

	},
};

/* Microsoft.SharePoint.Portal.SPSiteManager */
export interface Microsoft_SharePoint_Portal_SPSiteManager {
	properties?: Array<string>;
	canCreateHubJoinedSite: IMapper & {
		argNames: [ "hubSiteId" ],
	},
	create: IMapper & {
		argNames: [ "request" ],
	},
	delete: IMapper & {
		argNames: [ "siteId" ],
	},
	status: IMapper & {
		argNames: [ "url" ],
	},
};

/* Microsoft.SharePoint.Portal.SharePointHomeServiceContextBuilder */
export interface Microsoft_SharePoint_Portal_SharePointHomeServiceContextBuilder {
	properties?: Array<string>;
	context: IMapper & {

	},
};

/* Microsoft.SharePoint.Portal.SiteLinkingManager */
export interface Microsoft_SharePoint_Portal_SiteLinkingManager {
	properties?: Array<string>;
	getSiteLinks: IMapper & {

	},
	linkGroup: IMapper & {
		argNames: [ "groupId" ],
	},
	unlinkGroup: IMapper & {
		argNames: [ "groupId" ],
	},
};

/* Microsoft.SharePoint.TenantCdn.TenantCdnApi */
export interface Microsoft_SharePoint_TenantCdn_TenantCdnApi {
	properties?: Array<string>;
	getCdnUrls: IMapper & {
		argNames: [ "items" ],
	},
};

/* Microsoft.SharePoint.Webhooks.Subscription */
export interface Microsoft_SharePoint_Webhooks_Subscription {
	properties?: Array<string>;
	delete: IMapper & {

	},
	update: IMapper & {
		argNames: [ "parameters" ],
	},
};

/* Microsoft.SharePoint.Webhooks.Subscription.Collection */
export interface Microsoft_SharePoint_Webhooks_Subscription_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
	remove: IMapper & {
		argNames: [ "subscriptionId" ],
	},
};

/* OBA.Server.ServerWrapper.Diagnostics */
export interface OBA_Server_ServerWrapper_Diagnostics {
	properties?: Array<string>;
	status: IMapper & {

	},
};

/* OBA.Server.ServerWrapper.Reporting */
export interface OBA_Server_ServerWrapper_Reporting {
	properties?: Array<string>;
	publishReport: IMapper & {
		argNames: [ "odataPostBodyStm" ],
	},
};

/* OBA.Server.ServerWrapper.Taskflow */
export interface OBA_Server_ServerWrapper_Taskflow {
	properties?: Array<string>;
	processTask: IMapper & {
		argNames: [ "requestBodyStream" ],
	},
};

/* PS.BaseCalendarException */
export interface PS_BaseCalendarException {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* PS.Calendar */
export interface PS_Calendar {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	copyTo: IMapper & {
		argNames: [ "name" ],
	},
	deleteObject: IMapper & {

	},
};

/* PS.Calendar.Collection */
export interface PS_Calendar_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	update: IMapper & {

	},
};

/* PS.CalendarException */
export interface PS_CalendarException {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.CalendarException.Collection */
export interface PS_CalendarException_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* PS.CustomField */
export interface PS_CustomField {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.CustomField.Collection */
export interface PS_CustomField_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByAppAlternateId: IMapper & {
		argNames: [ "objectId" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	update: IMapper & {

	},
};

/* PS.DraftAssignment */
export interface PS_DraftAssignment {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.DraftAssignment.Collection */
export interface PS_DraftAssignment_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.DraftProject */
export interface PS_DraftProject {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getResourcePlanByUrl: IMapper & {
		argNames: [ "start", "end", "scale" ],
	},
	leaveProjectStage: IMapper & {

	},
	readyToLeaveProjectStage: IMapper & {

	},
	updateIdeaListItemStatus: IMapper & {
		argNames: [ "status" ],
	},
	changeEnterpriseProjectType: IMapper & {
		argNames: [ "enterpriseProjectTypeUid" ],
	},
	checkIn: IMapper & {
		argNames: [ "force" ],
	},
	getChanges: IMapper & {
		argNames: [ "token" ],
	},
	publish: IMapper & {
		argNames: [ "checkIn" ],
	},
	update: IMapper & {

	},
	updateCustomFields: IMapper & {
		argNames: [ "customFieldDictionary" ],
	},
	validate: IMapper & {

	},
};

/* PS.DraftProjectResource */
export interface PS_DraftProjectResource {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.DraftProjectResource.Collection */
export interface PS_DraftProjectResource_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	addEnterpriseResourceById: IMapper & {
		argNames: [ "resourceId" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.DraftTask */
export interface PS_DraftTask {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.DraftTask.Collection */
export interface PS_DraftTask_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.DraftTaskLink */
export interface PS_DraftTaskLink {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.DraftTaskLink.Collection */
export interface PS_DraftTaskLink_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.EngagementComment.Collection */
export interface PS_EngagementComment_Collection {
	add: IMapper & {
		argNames: [ "comment" ],
	},
};

/* PS.EnterpriseProjectType */
export interface PS_EnterpriseProjectType {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	addDepartment: IMapper & {
		argNames: [ "departmentValueGuid" ],
	},
	deleteObject: IMapper & {

	},
	removeDepartment: IMapper & {
		argNames: [ "departmentValueGuid" ],
	},
	updateCreatePDP: IMapper & {
		argNames: [ "pdp" ],
	},
};

/* PS.EnterpriseProjectType.Collection */
export interface PS_EnterpriseProjectType_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	update: IMapper & {

	},
};

/* PS.EnterpriseResource */
export interface PS_EnterpriseResource {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	forceCheckIn: IMapper & {

	},
	updateClaimsAccount: IMapper & {
		argNames: [ "newClaimsAccount" ],
	},
};

/* PS.EnterpriseResource.Collection */
export interface PS_EnterpriseResource_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	update: IMapper & {

	},
};

/* PS.EnterpriseResourceCostRate */
export interface PS_EnterpriseResourceCostRate {
	properties?: Array<string>;
	restfulDelete: IMapper & {

	},
	rESTfulUpdate: IMapper & {

	},
};

/* PS.EnterpriseResourceCostRate.Collection */
export interface PS_EnterpriseResourceCostRate_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByDateUrl: IMapper & {
		argNames: [ "effectiveDate" ],
	},
};

/* PS.EntityLink */
export interface PS_EntityLink {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* PS.EntityLink.Collection */
export interface PS_EntityLink_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "id" ],
	},
	update: IMapper & {

	},
};

/* PS.Event.Collection */
export interface PS_Event_Collection {
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	getByInt: IMapper & {
		argNames: [ "id" ],
	},
};

/* PS.EventHandler */
export interface PS_EventHandler {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.EventHandler.Collection */
export interface PS_EventHandler_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	update: IMapper & {

	},
};

/* PS.LookupCost */
export interface PS_LookupCost {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* PS.LookupDate */
export interface PS_LookupDate {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* PS.LookupDuration */
export interface PS_LookupDuration {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* PS.LookupEntry */
export interface PS_LookupEntry {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* PS.LookupEntry.Collection */
export interface PS_LookupEntry_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByAppAlternateId: IMapper & {
		argNames: [ "objectId" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.LookupNumber */
export interface PS_LookupNumber {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* PS.LookupTable */
export interface PS_LookupTable {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	addMask: IMapper & {
		argNames: [ "mask" ],
	},
	deleteObject: IMapper & {

	},
	updateMask: IMapper & {
		argNames: [ "mask", "level" ],
	},
};

/* PS.LookupTable.Collection */
export interface PS_LookupTable_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByAppAlternateId: IMapper & {
		argNames: [ "objectId" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	update: IMapper & {

	},
};

/* PS.LookupText */
export interface PS_LookupText {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.Phase */
export interface PS_Phase {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.Phase.Collection */
export interface PS_Phase_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	update: IMapper & {

	},
};

/* PS.PlanAssignment */
export interface PS_PlanAssignment {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.PlanAssignment.Collection */
export interface PS_PlanAssignment_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.PlanAssignmentInterval.Collection */
export interface PS_PlanAssignmentInterval_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
	getByStart: IMapper & {
		argNames: [ "start" ],
	},
};

/* PS.Project */
export interface PS_Project {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getResourcePlanByUrl: IMapper & {
		argNames: [ "start", "end", "scale" ],
	},
	leaveProjectStage: IMapper & {

	},
	readyToLeaveProjectStage: IMapper & {

	},
	updateIdeaListItemStatus: IMapper & {
		argNames: [ "status" ],
	},
};

/* PS.ProjectDetailPage.Collection */
export interface PS_ProjectDetailPage_Collection {
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.ProjectEngagement */
export interface PS_ProjectEngagement {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	getTimephasedByUrl: IMapper & {
		argNames: [ "start", "end", "scale", "contourType" ],
	},
};

/* PS.ProjectEngagement.Collection */
export interface PS_ProjectEngagement_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	update: IMapper & {

	},
};

/* PS.ProjectEngagementTimephasedPeriod.Collection */
export interface PS_ProjectEngagementTimephasedPeriod_Collection {
	getByStartUrl: IMapper & {
		argNames: [ "start" ],
	},
};

/* PS.ProjectServer */
export interface PS_ProjectServer {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getDeletedPublishedAssignments: IMapper & {
		argNames: [ "deletedDate" ],
	},
	stopDelegation: IMapper & {

	},
};

/* PS.ProjectWorkflowInstance */
export interface PS_ProjectWorkflowInstance {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	restartWorkflow: IMapper & {

	},
	restartWorkflowSkipToStage: IMapper & {
		argNames: [ "stageId" ],
	},
};

/* PS.ProjectWorkflowInstance.Collection */
export interface PS_ProjectWorkflowInstance_Collection {
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.PublishedAssignment.Collection */
export interface PS_PublishedAssignment_Collection {
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.PublishedProject */
export interface PS_PublishedProject {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getResourcePlanByUrl: IMapper & {
		argNames: [ "start", "end", "scale" ],
	},
	leaveProjectStage: IMapper & {

	},
	readyToLeaveProjectStage: IMapper & {

	},
	updateIdeaListItemStatus: IMapper & {
		argNames: [ "status" ],
	},
	checkOut: IMapper & {

	},
	createProjectSite: IMapper & {
		argNames: [ "siteName" ],
	},
	deleteObject: IMapper & {

	},
	submitToWorkflow: IMapper & {

	},
	updateVisibilityCustomFields: IMapper & {

	},
};

/* PS.PublishedProject.Collection */
export interface PS_PublishedProject_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	update: IMapper & {

	},
	validate: IMapper & {

	},
};

/* PS.PublishedProjectResource.Collection */
export interface PS_PublishedProjectResource_Collection {
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.PublishedTask */
export interface PS_PublishedTask {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	addTaskPlanLink: IMapper & {
		argNames: [ "parameters" ],
	},
	deleteTaskPlanLink: IMapper & {

	},
};

/* PS.PublishedTask.Collection */
export interface PS_PublishedTask_Collection {
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.PublishedTaskLink.Collection */
export interface PS_PublishedTaskLink_Collection {
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.QueueJob */
export interface PS_QueueJob {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	cancel: IMapper & {

	},
};

/* PS.QueueJob.Collection */
export interface PS_QueueJob_Collection {
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.ResourceCalendarException */
export interface PS_ResourceCalendarException {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* PS.ResourceEngagement */
export interface PS_ResourceEngagement {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	getTimephasedByUrl: IMapper & {
		argNames: [ "start", "end", "scale", "contourType" ],
	},
};

/* PS.ResourceEngagement.Collection */
export interface PS_ResourceEngagement_Collection {
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	update: IMapper & {

	},
};

/* PS.ResourceEngagementTimephasedPeriod.Collection */
export interface PS_ResourceEngagementTimephasedPeriod_Collection {
	getByStartUrl: IMapper & {
		argNames: [ "start" ],
	},
};

/* PS.ResourcePlan */
export interface PS_ResourcePlan {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	forceCheckIn: IMapper & {

	},
	publish: IMapper & {

	},
	update: IMapper & {

	},
};

/* PS.ServiceStatus */
export interface PS_ServiceStatus {
	properties?: Array<string>;
	stopDelegation: IMapper & {

	},
};

/* PS.Stage */
export interface PS_Stage {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.Stage.Collection */
export interface PS_Stage_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	update: IMapper & {

	},
};

/* PS.StageCustomField */
export interface PS_StageCustomField {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.StageCustomField.Collection */
export interface PS_StageCustomField_Collection {
	add: IMapper & {
		argNames: [ "creationInfo" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.StageDetailPage */
export interface PS_StageDetailPage {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* PS.StageDetailPage.Collection */
export interface PS_StageDetailPage_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.StatusAssignment */
export interface PS_StatusAssignment {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	submitStatusUpdates: IMapper & {
		argNames: [ "comment" ],
	},
};

/* PS.StatusAssignment.Collection */
export interface PS_StatusAssignment_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	getTimePhaseByUrl: IMapper & {
		argNames: [ "start", "end" ],
	},
	submitAllStatusUpdates: IMapper & {
		argNames: [ "comment" ],
	},
	update: IMapper & {

	},
};

/* PS.StatusAssignmentHistoryLine.Collection */
export interface PS_StatusAssignmentHistoryLine_Collection {
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.TaskPlanLink */
export interface PS_TaskPlanLink {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* PS.TimeSheet */
export interface PS_TimeSheet {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	recall: IMapper & {

	},
	submit: IMapper & {
		argNames: [ "comment" ],
	},
	update: IMapper & {

	},
};

/* PS.TimeSheetLine */
export interface PS_TimeSheetLine {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	submit: IMapper & {
		argNames: [ "comment" ],
	},
};

/* PS.TimeSheetLine.Collection */
export interface PS_TimeSheetLine_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.TimeSheetPeriod */
export interface PS_TimeSheetPeriod {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	createTimeSheet: IMapper & {

	},
};

/* PS.TimeSheetPeriod.Collection */
export interface PS_TimeSheetPeriod_Collection {
	getByGuid: IMapper & {
		argNames: [ "uid" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* PS.TimeSheetWork */
export interface PS_TimeSheetWork {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* PS.TimeSheetWork.Collection */
export interface PS_TimeSheetWork_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
	getByStartDate: IMapper & {
		argNames: [ "start" ],
	},
};

/* PS.WorkflowActivities */
export interface PS_WorkflowActivities {
	properties?: Array<string>;
	checkInWithJobId: IMapper & {
		argNames: [ "projId", "jobId", "force" ],
	},
	createProjectFromListItem: IMapper & {
		argNames: [ "webId", "listId", "itemId", "eptId" ],
	},
	enterProjectStage: IMapper & {
		argNames: [ "projectId", "stageId" ],
	},
	leaveProjectStage: IMapper & {
		argNames: [ "projectId" ],
	},
	publishSummaryWithJobId: IMapper & {
		argNames: [ "projId", "jobId" ],
	},
	publishWithJobId: IMapper & {
		argNames: [ "projectId", "jobId" ],
	},
	readBooleanProperty: IMapper & {
		argNames: [ "projectId", "propertyId" ],
	},
	readCurrencyProperty: IMapper & {
		argNames: [ "projectId", "propertyId" ],
	},
	readDateTimeProperty: IMapper & {
		argNames: [ "projectId", "propertyId" ],
	},
	readGuidProperty: IMapper & {
		argNames: [ "projectId", "propertyId" ],
	},
	readIntegerProperty: IMapper & {
		argNames: [ "projectId", "propertyId" ],
	},
	readNumberProperty: IMapper & {
		argNames: [ "projectId", "propertyId" ],
	},
	readProjectProperty: IMapper & {
		argNames: [ "projectId", "propertyId" ],
	},
	readTextProperty: IMapper & {
		argNames: [ "projectId", "propertyId" ],
	},
	readyToLeaveProjectStage: IMapper & {
		argNames: [ "projectId" ],
	},
	updateBooleanProperty: IMapper & {
		argNames: [ "projectId", "propertyId", "value" ],
	},
	updateCurrencyProperty: IMapper & {
		argNames: [ "projectId", "propertyId", "value" ],
	},
	updateDateTimeProperty: IMapper & {
		argNames: [ "projectId", "propertyId", "value" ],
	},
	updateGuidProperty: IMapper & {
		argNames: [ "projectId", "propertyId", "value" ],
	},
	updateIdeaListItemStatus: IMapper & {
		argNames: [ "projectId", "status" ],
	},
	updateIntegerProperty: IMapper & {
		argNames: [ "projectId", "propertyId", "value" ],
	},
	updateNumberProperty: IMapper & {
		argNames: [ "projectId", "propertyId", "value" ],
	},
	updateProjectStageStatus: IMapper & {
		argNames: [ "projectId", "stageId", "statusInformation", "stageStatusValue", "append" ],
	},
	updateTextProperty: IMapper & {
		argNames: [ "projectId", "propertyId", "value" ],
	},
};

/* PS.WorkflowDesignerField.Collection */
export interface PS_WorkflowDesignerField_Collection {
	getById: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* SP.Alert */
export interface SP_Alert {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	updateAlert: IMapper & {

	},
};

/* SP.Alert.Collection */
export interface SP_Alert_Collection {
	add: IMapper & {
		argNames: [ "alertCreationInformation" ],
	},
	contains: IMapper & {
		argNames: [ "idAlert" ],
	},
	deleteAlert: IMapper & {
		argNames: [ "idAlert" ],
	},
	deleteAlertAtIndex: IMapper & {
		argNames: [ "index" ],
	},
	getById: IMapper & {
		argNames: [ "idAlert" ],
	},
};

/* SP.AppInstance */
export interface SP_AppInstance {
	properties?: Array<string>;
	cancelAllJobs: IMapper & {

	},
	getAppDatabaseConnectionString: IMapper & {

	},
	getErrorDetails: IMapper & {

	},
	getPreviousAppVersion: IMapper & {

	},
	install: IMapper & {

	},
	recycle: IMapper & {

	},
	restore: IMapper & {

	},
	retryAllJobs: IMapper & {

	},
	uninstall: IMapper & {

	},
	upgrade: IMapper & {
		argNames: [ "appPackageStream" ],
	},
};

/* SP.Attachment */
export interface SP_Attachment {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	recycleObject: IMapper & {

	},
};

/* SP.Attachment.Collection */
export interface SP_Attachment_Collection {
	addUsingPath: IMapper & {
		argNames: [ "DecodedUrl", "contentStream" ],
	},
	getByFileName: IMapper & {
		argNames: [ "fileName" ],
	},
	getByFileNameAsPath: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
	add: IMapper & {
		argNames: [ "FileName", "Content" ],
	},
};

/* SP.Audit */
export interface SP_Audit {
	properties?: Array<string>;
	update: IMapper & {

	},
};

/* SP.BusinessData.AppBdcCatalog */
export interface SP_BusinessData_AppBdcCatalog {
	properties?: Array<string>;
	getConnectionId: IMapper & {
		argNames: [ "lobSystemName", "lobSystemInstanceName" ],
	},
	getEntity: IMapper & {
		argNames: [ "namespace", "name" ],
	},
	getLobSystemInstanceProperty: IMapper & {
		argNames: [ "lobSystemName", "lobSystemInstanceName", "propertyName" ],
	},
	getLobSystemProperty: IMapper & {
		argNames: [ "lobSystemName", "propertyName" ],
	},
	getPermissibleConnections: IMapper & {

	},
	setConnectionId: IMapper & {
		argNames: [ "lobSystemName", "lobSystemInstanceName", "connectionId" ],
	},
	setLobSystemInstanceProperty: IMapper & {
		argNames: [ "lobSystemName", "lobSystemInstanceName", "propertyName", "propertyValue" ],
	},
	setLobSystemProperty: IMapper & {
		argNames: [ "lobSystemName", "propertyName", "propertyValue" ],
	},
};

/* SP.BusinessData.Entity */
export interface SP_BusinessData_Entity {
	properties?: Array<string>;
	getAssociationView: IMapper & {
		argNames: [ "associationName" ],
	},
	getCreatorView: IMapper & {
		argNames: [ "methodInstanceName" ],
	},
	getDefaultSpecificFinderView: IMapper & {

	},
	getFilters: IMapper & {
		argNames: [ "methodInstanceName" ],
	},
	getFinderView: IMapper & {
		argNames: [ "methodInstanceName" ],
	},
	getIdentifierCount: IMapper & {

	},
	getIdentifiers: IMapper & {

	},
	getLobSystem: IMapper & {

	},
	getSpecificFinderView: IMapper & {
		argNames: [ "specificFinderName" ],
	},
	getUpdaterView: IMapper & {
		argNames: [ "updaterName" ],
	},
};

/* SP.BusinessData.EntityIdentifier */
export interface SP_BusinessData_EntityIdentifier {
	properties?: Array<string>;
	containsLocalizedDisplayName: IMapper & {

	},
	getDefaultDisplayName: IMapper & {

	},
	getLocalizedDisplayName: IMapper & {

	},
};

/* SP.BusinessData.EntityView */
export interface SP_BusinessData_EntityView {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getDefaultValues: IMapper & {

	},
	getType: IMapper & {
		argNames: [ "fieldDotNotation" ],
	},
	getTypeDescriptor: IMapper & {
		argNames: [ "fieldDotNotation" ],
	},
	getXmlSchema: IMapper & {

	},
};

/* SP.BusinessData.Infrastructure.ExternalSubscriptionStore */
export interface SP_BusinessData_Infrastructure_ExternalSubscriptionStore {
	properties?: Array<string>;
	indexStore: IMapper & {

	},
};

/* SP.BusinessData.LobSystem */
export interface SP_BusinessData_LobSystem {
	properties?: Array<string>;
	getLobSystemInstances: IMapper & {

	},
};

/* SP.BusinessData.Runtime.EntityFieldValueDictionary */
export interface SP_BusinessData_Runtime_EntityFieldValueDictionary {
	properties?: Array<string>;
	createCollectionInstance: IMapper & {
		argNames: [ "fieldDotNotation", "size" ],
	},
	createInstance: IMapper & {
		argNames: [ "fieldInstanceDotNotation", "fieldDotNotation" ],
	},
	fromXml: IMapper & {
		argNames: [ "xml" ],
	},
	getCollectionSize: IMapper & {
		argNames: [ "fieldDotNotation" ],
	},
	toXml: IMapper & {

	},
};

/* SP.BusinessData.Runtime.EntityInstance */
export interface SP_BusinessData_Runtime_EntityInstance {
	properties?: Array<string>;
	createCollectionInstance: IMapper & {
		argNames: [ "fieldDotNotation", "size" ],
	},
	createInstance: IMapper & {
		argNames: [ "fieldInstanceDotNotation", "fieldDotNotation" ],
	},
	deleteObject: IMapper & {

	},
	fromXml: IMapper & {
		argNames: [ "xml" ],
	},
	getIdentity: IMapper & {

	},
	toXml: IMapper & {

	},
	update: IMapper & {

	},
};

/* SP.BusinessData.TypeDescriptor */
export interface SP_BusinessData_TypeDescriptor {
	properties?: Array<string>;
	containsLocalizedDisplayName: IMapper & {

	},
	getChildTypeDescriptors: IMapper & {

	},
	getDefaultDisplayName: IMapper & {

	},
	getLocalizedDisplayName: IMapper & {

	},
	getParentTypeDescriptor: IMapper & {

	},
	isLeaf: IMapper & {

	},
	isRoot: IMapper & {

	},
};

/* SP.CheckedOutFile */
export interface SP_CheckedOutFile {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	takeOverCheckOut: IMapper & {

	},
};

/* SP.CheckedOutFile.Collection */
export interface SP_CheckedOutFile_Collection {
	getByPath: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
};

/* SP.ClientWebPart */
export interface SP_ClientWebPart {
	properties?: Array<string>;
	render: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.ClientWebPart.Collection */
export interface SP_ClientWebPart_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* SP.CompliancePolicy.SPPolicyStoreProxy */
export interface SP_CompliancePolicy_SPPolicyStoreProxy {
	properties?: Array<string>;
	addDynamicScopeBinding: IMapper & {
		argNames: [ "identity", "siteId" ],
	},
	bulkUpdateDynamicScopeBindings: IMapper & {
		argNames: [ "scopesToAdd", "scopesToRemove", "siteId" ],
	},
	deleteDynamicScopeBinding: IMapper & {
		argNames: [ "identity", "siteId" ],
	},
	extendReviewItemsRetention: IMapper & {
		argNames: [ "itemIds", "extensionDate" ],
	},
	getDynamicScopeBindingBySiteId: IMapper & {
		argNames: [ "siteId" ],
	},
	markReviewItemsForDeletion: IMapper & {
		argNames: [ "itemIds" ],
	},
	openBinaryStreamForOriginalItem: IMapper & {
		argNames: [ "itemId" ],
	},
	removeContainerRetentionPolicy: IMapper & {
		argNames: [ "siteId" ],
	},
	removeContainerSettings: IMapper & {
		argNames: [ "externalId" ],
	},
	retagReviewItems: IMapper & {
		argNames: [ "itemIds", "newTag", "newTagIsRecord", "newTagBlockDelete", "newTagIsEventBased" ],
	},
	retagReviewItemsWithMetas: IMapper & {
		argNames: [ "itemIds", "newTagName", "newTagMetas" ],
	},
	setContainerRetentionPolicy: IMapper & {
		argNames: [ "siteId", "defaultContainerLabel" ],
	},
	updateContainerSetting: IMapper & {
		argNames: [ "siteId", "externalId", "settingType", "setting" ],
	},
};

/* SP.ContentType */
export interface SP_ContentType {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.ContentType.Collection */
export interface SP_ContentType_Collection {
	addAvailableContentType: IMapper & {
		argNames: [ "contentTypeId" ],
	},
	getById: IMapper & {
		argNames: [ "contentTypeId" ],
	},
	add: IMapper & {
		argNames: [ "parameters" ],
	},
};

/* SP.Directory.DirectorySession */
export interface SP_Directory_DirectorySession {
	properties?: Array<string>;
	getGraphUser: IMapper & {
		argNames: [ "principalName" ],
	},
	getSharePointDataForUser: IMapper & {
		argNames: [ "userId" ],
	},
	group: IMapper & {
		argNames: [ "groupId", "alias" ],
	},
	joinGroup: IMapper & {
		argNames: [ "groupId" ],
	},
	me: IMapper & {

	},
	user: IMapper & {
		argNames: [ "id", "principalName" ],
	},
	validateGroupName: IMapper & {
		argNames: [ "displayName", "alias" ],
	},
};

/* SP.Directory.Group */
export interface SP_Directory_Group {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	delete: IMapper & {

	},
};

/* SP.Directory.Group.Collection */
export interface SP_Directory_Group_Collection {
	add: IMapper & {
		argNames: [ "objectId" ],
	},
	remove: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* SP.Directory.Provider.DirectoryNotification */
export interface SP_Directory_Provider_DirectoryNotification {
	properties?: Array<string>;
	notifyChanges: IMapper & {
		argNames: [ "directoryObjectChanges" ],
	},
};

/* SP.Directory.Provider.SharePointDirectoryProvider */
export interface SP_Directory_Provider_SharePointDirectoryProvider {
	properties?: Array<string>;
	createDirectoryObject: IMapper & {
		argNames: [ "data" ],
	},
	deleteDirectoryObject: IMapper & {
		argNames: [ "data" ],
	},
	getOrCreateUnifiedGroupTenantInstanceId: IMapper & {
		argNames: [ "groupId", "tenantInstanceId" ],
	},
	notifyDataChanges: IMapper & {
		argNames: [ "data" ],
	},
	readDirectoryObject: IMapper & {
		argNames: [ "data" ],
	},
	readDirectoryObjectBatch: IMapper & {
		argNames: [ "ids", "objectType" ],
	},
	updateCache: IMapper & {
		argNames: [ "data" ],
	},
	updateDirectoryObject: IMapper & {
		argNames: [ "data" ],
	},
};

/* SP.Directory.User */
export interface SP_Directory_User {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getUserLinks: IMapper & {
		argNames: [ "linkName", "groupType" ],
	},
};

/* SP.Directory.User.Collection */
export interface SP_Directory_User_Collection {
	add: IMapper & {
		argNames: [ "objectId", "principalName" ],
	},
	remove: IMapper & {
		argNames: [ "objectId" ],
	},
};

/* SP.DocumentManagement.DocumentId */
export interface SP_DocumentManagement_DocumentId {
	properties?: Array<string>;
	resetDocIdByServerRelativePath: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
	resetDocIdsInLibrary: IMapper & {
		argNames: [ "DecodedUrl", "contentTypeId" ],
	},
};

/* SP.EventReceiverDefinition */
export interface SP_EventReceiverDefinition {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	update: IMapper & {

	},
};

/* SP.EventReceiverDefinition.Collection */
export interface SP_EventReceiverDefinition_Collection {
	add: IMapper & {
		argNames: [ "eventReceiverCreationInformation" ],
	},
	getById: IMapper & {
		argNames: [ "eventReceiverId" ],
	},
};

/* SP.Feature.Collection */
export interface SP_Feature_Collection {
	add: IMapper & {
		argNames: [ "featureId", "force", "featdefScope" ],
	},
	getById: IMapper & {
		argNames: [ "featureId" ],
	},
	remove: IMapper & {
		argNames: [ "featureId", "force" ],
	},
};

/* SP.Field */
export interface SP_Field {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.Field.Collection */
export interface SP_Field_Collection {
	addDependentLookupField: IMapper & {
		argNames: [ "displayName", "primaryLookupFieldId", "showField" ],
	},
	addField: IMapper & {
		argNames: [ "parameters" ],
	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
	getByInternalNameOrTitle: IMapper & {
		argNames: [ "strName" ],
	},
	getByTitle: IMapper & {
		argNames: [ "title" ],
	},
	createFieldAsXml: IMapper & {
		argNames: [ "schemaXml" ],
	},
};

/* SP.FieldCalculated */
export interface SP_FieldCalculated {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldChoice */
export interface SP_FieldChoice {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldComputed */
export interface SP_FieldComputed {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldCurrency */
export interface SP_FieldCurrency {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldDateTime */
export interface SP_FieldDateTime {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldGeolocation */
export interface SP_FieldGeolocation {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldGuid */
export interface SP_FieldGuid {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldLink */
export interface SP_FieldLink {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* SP.FieldLink.Collection */
export interface SP_FieldLink_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
	reorder: IMapper & {
		argNames: [ "internalNames" ],
	},
	add: IMapper & {
		argNames: [ "parameters" ],
	},
};

/* SP.FieldLocation */
export interface SP_FieldLocation {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldLookup */
export interface SP_FieldLookup {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldMultiChoice */
export interface SP_FieldMultiChoice {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldMultiLineText */
export interface SP_FieldMultiLineText {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldNumber */
export interface SP_FieldNumber {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldRatingScale */
export interface SP_FieldRatingScale {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldText */
export interface SP_FieldText {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldUrl */
export interface SP_FieldUrl {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.FieldUser */
export interface SP_FieldUser {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.File */
export interface SP_File {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	addActivities: IMapper & {
		argNames: [ "activities" ],
	},
	addClientActivities: IMapper & {
		argNames: [ "activitiesStream" ],
	},
	approve: IMapper & {
		argNames: [ "comment" ],
	},
	cancelUpload: IMapper & {
		argNames: [ "uploadId" ],
	},
	checkAccessAndPostViewAuditEvent: IMapper & {

	},
	checkIn: IMapper & {
		argNames: [ "comment", "checkInType" ],
	},
	checkOut: IMapper & {

	},
	continueUpload: IMapper & {
		argNames: [ "uploadId", "fileOffset", "stream" ],
	},
	copyTo: IMapper & {
		argNames: [ "strNewUrl", "bOverWrite" ],
	},
	copyToUsingPath: IMapper & {
		argNames: [ "DecodedUrl", "bOverWrite" ],
	},
	deleteObject: IMapper & {

	},
	deny: IMapper & {
		argNames: [ "comment" ],
	},
	executeCobaltRequest: IMapper & {
		argNames: [ "inputStream" ],
	},
	finishUpload: IMapper & {
		argNames: [ "uploadId", "fileOffset", "stream" ],
	},
	getFileUserValue: IMapper & {
		argNames: [ "key" ],
	},
	getImagePreviewUri: IMapper & {
		argNames: [ "width", "height", "clientType" ],
	},
	getImagePreviewUrl: IMapper & {
		argNames: [ "width", "height", "clientType" ],
	},
	getLimitedWebPartManager: IMapper & {
		argNames: [ "scope" ],
	},
	getPreAuthorizedAccessUrl: IMapper & {
		argNames: [ "expirationHours" ],
	},
	getUploadStatus: IMapper & {
		argNames: [ "uploadId" ],
	},
	getWOPIFrameUrl: IMapper & {
		argNames: [ "action" ],
	},
	moveTo: IMapper & {
		argNames: [ "newUrl", "flags" ],
	},
	moveToUsingPath: IMapper & {
		argNames: [ "DecodedUrl", "moveOperations" ],
	},
	openBinaryStream: IMapper & {

	},
	openBinaryStreamWithOptions: IMapper & {
		argNames: [ "openOptions" ],
	},
	publish: IMapper & {
		argNames: [ "comment" ],
	},
	recycle: IMapper & {

	},
	recycleWithETag: IMapper & {
		argNames: [ "etagMatch" ],
	},
	saveBinaryStream: IMapper & {
		argNames: [ "file" ],
	},
	setFileUserValue: IMapper & {
		argNames: [ "key", "value" ],
	},
	startUpload: IMapper & {
		argNames: [ "uploadId", "stream" ],
	},
	undoCheckOut: IMapper & {

	},
	unPublish: IMapper & {
		argNames: [ "comment" ],
	},
	updateVirusInfo: IMapper & {
		argNames: [ "virusStatus", "virusMessage", "etagToCheck" ],
	},
	content: IMapper & {

	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.File.Collection */
export interface SP_File_Collection {
	addStub: IMapper & {
		argNames: [ "urlOfFile" ],
	},
	addStubUsingPath: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
	addTemplateFile: IMapper & {
		argNames: [ "urlOfFile", "templateFileType" ],
	},
	addUsingPath: IMapper & {
		argNames: [ "DecodedUrl", "Overwrite", "contentStream" ],
	},
	getByPathOrAddStub: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
	getByUrl: IMapper & {
		argNames: [ "url" ],
	},
	getByUrlOrAddStub: IMapper & {
		argNames: [ "urlOfFile" ],
	},
	add: IMapper & {
		argNames: [ "Url", "Overwrite", "Content" ],
	},
};

/* SP.FileVersion */
export interface SP_FileVersion {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	openBinaryStream: IMapper & {

	},
};

/* SP.FileVersion.Collection */
export interface SP_FileVersion_Collection {
	deleteAll: IMapper & {

	},
	deleteByID: IMapper & {
		argNames: [ "vid" ],
	},
	deleteByLabel: IMapper & {
		argNames: [ "versionlabel" ],
	},
	getById: IMapper & {
		argNames: [ "versionid" ],
	},
	recycleByID: IMapper & {
		argNames: [ "vid" ],
	},
	recycleByLabel: IMapper & {
		argNames: [ "versionlabel" ],
	},
	restoreByLabel: IMapper & {
		argNames: [ "versionlabel" ],
	},
};

/* SP.Folder */
export interface SP_Folder {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	addSubFolder: IMapper & {
		argNames: [ "leafName" ],
	},
	addSubFolderUsingPath: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
	deleteObject: IMapper & {

	},
	getChanges: IMapper & {
		argNames: [ "query" ],
	},
	getListItemChanges: IMapper & {
		argNames: [ "query" ],
	},
	moveTo: IMapper & {
		argNames: [ "newUrl" ],
	},
	moveToUsingPath: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
	recycle: IMapper & {

	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.Folder.Collection */
export interface SP_Folder_Collection {
	add: IMapper & {
		argNames: [ "url" ],
	},
	addUsingPath: IMapper & {
		argNames: [ "DecodedUrl", "Overwrite" ],
	},
	addWithOverwrite: IMapper & {
		argNames: [ "url", "overwrite" ],
	},
	getByPath: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
	getByUrl: IMapper & {
		argNames: [ "url" ],
	},
};

/* SP.Form.Collection */
export interface SP_Form_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
	getByPageType: IMapper & {
		argNames: [ "formType" ],
	},
};

/* SP.Group */
export interface SP_Group {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	setUserAsOwner: IMapper & {
		argNames: [ "ownerId" ],
	},
	update: IMapper & {

	},
};

/* SP.Group.Collection */
export interface SP_Group_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
	getByName: IMapper & {
		argNames: [ "name" ],
	},
	removeById: IMapper & {
		argNames: [ "id" ],
	},
	removeByLoginName: IMapper & {
		argNames: [ "loginName" ],
	},
	add: IMapper & {
		argNames: [ "parameters" ],
	},
};

/* SP.HubSite */
export interface SP_HubSite {
	properties?: Array<string>;
	delete: IMapper & {

	},
};

/* SP.HubSite.Collection */
export interface SP_HubSite_Collection {
	getById: IMapper & {
		argNames: [ "hubSiteId" ],
	},
};

/* SP.InformationRightsManagementFileSettings */
export interface SP_InformationRightsManagementFileSettings {
	properties?: Array<string>;
	reset: IMapper & {

	},
	update: IMapper & {

	},
};

/* SP.InformationRightsManagementSettings */
export interface SP_InformationRightsManagementSettings {
	properties?: Array<string>;
	reset: IMapper & {

	},
	update: IMapper & {

	},
};

/* SP.LanguageCollection */
export interface SP_LanguageCollection {
	properties?: Array<string>;
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* SP.List */
export interface SP_List {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	breakRoleInheritance: IMapper & {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: IMapper & {

	},
	addItem: IMapper & {
		argNames: [ "parameters" ],
	},
	addItemUsingPath: IMapper & {
		argNames: [ "parameters" ],
	},
	addValidateUpdateItem: IMapper & {
		argNames: [ "listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment" ],
	},
	addValidateUpdateItemUsingPath: IMapper & {
		argNames: [ "listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment" ],
	},
	bulkValidateUpdateListItems: IMapper & {
		argNames: [ "itemIds", "formValues", "bNewDocumentUpdate", "checkInComment", "folderPath" ],
	},
	createDocumentAndGetEditLink: IMapper & {
		argNames: [ "fileName", "folderPath", "documentTemplateType", "templateUrl" ],
	},
	createDocumentWithDefaultName: IMapper & {
		argNames: [ "folderPath", "extension" ],
	},
	createMappedView: IMapper & {
		argNames: [ "appViewCreationInfo", "visualizationTarget" ],
	},
	deleteObject: IMapper & {

	},
	ensureSignoffStatusField: IMapper & {

	},
	getBloomFilter: IMapper & {
		argNames: [ "startItemId" ],
	},
	getBloomFilterWithCustomFields: IMapper & {
		argNames: [ "listItemStartingID", "internalFieldNames" ],
	},
	getChanges: IMapper & {
		argNames: [ "query" ],
	},
	getCheckedOutFiles: IMapper & {

	},
	getItemById: IMapper & {
		argNames: [ "id" ],
	},
	getItemByStringId: IMapper & {
		argNames: [ "sId" ],
	},
	getItemByUniqueId: IMapper & {
		argNames: [ "uniqueId" ],
	},
	getListItemChangesSinceToken: IMapper & {
		argNames: [ "query" ],
	},
	getMappedApp: IMapper & {
		argNames: [ "appId", "visualizationAppTarget" ],
	},
	getMappedApps: IMapper & {
		argNames: [ "visualizationAppTarget" ],
	},
	getRelatedFields: IMapper & {

	},
	getSpecialFolderUrl: IMapper & {
		argNames: [ "type", "bForceCreate", "existingFolderGuid" ],
	},
	getUserEffectivePermissions: IMapper & {
		argNames: [ "userName" ],
	},
	getView: IMapper & {
		argNames: [ "viewGuid" ],
	},
	getWebDavUrl: IMapper & {
		argNames: [ "sourceUrl" ],
	},
	publishMappedView: IMapper & {
		argNames: [ "appId", "visualizationTarget" ],
	},
	recycle: IMapper & {

	},
	renderExtendedListFormData: IMapper & {
		argNames: [ "itemId", "formId", "mode", "options", "cutoffVersion" ],
	},
	renderListContextMenuData: IMapper & {
		argNames: [ "CascDelWarnMessage", "CustomAction", "Field", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsXslView", "ItemId", "ListViewPageUrl", "OverrideScope", "RootFolder", "View", "ViewCount" ],
	},
	renderListData: IMapper & {
		argNames: [ "viewXml" ],
	},
	renderListDataAsStream: IMapper & {
		argNames: [ "parameters", "CascDelWarnMessage", "CustomAction", "DrillDown", "Field", "FieldInternalName", "Filter", "FilterData", "FilterData1", "FilterData10", "FilterData2", "FilterData3", "FilterData4", "FilterData5", "FilterData6", "FilterData7", "FilterData8", "FilterData9", "FilterField", "FilterField1", "FilterField10", "FilterField2", "FilterField3", "FilterField4", "FilterField5", "FilterField6", "FilterField7", "FilterField8", "FilterField9", "FilterFields", "FilterFields1", "FilterFields10", "FilterFields2", "FilterFields3", "FilterFields4", "FilterFields5", "FilterFields6", "FilterFields7", "FilterFields8", "FilterFields9", "FilterLookupId", "FilterLookupId1", "FilterLookupId10", "FilterLookupId2", "FilterLookupId3", "FilterLookupId4", "FilterLookupId5", "FilterLookupId6", "FilterLookupId7", "FilterLookupId8", "FilterLookupId9", "FilterOp", "FilterOp1", "FilterOp10", "FilterOp2", "FilterOp3", "FilterOp4", "FilterOp5", "FilterOp6", "FilterOp7", "FilterOp8", "FilterOp9", "FilterValue", "FilterValue1", "FilterValue10", "FilterValue2", "FilterValue3", "FilterValue4", "FilterValue5", "FilterValue6", "FilterValue7", "FilterValue8", "FilterValue9", "FilterValues", "FilterValues1", "FilterValues10", "FilterValues2", "FilterValues3", "FilterValues4", "FilterValues5", "FilterValues6", "FilterValues7", "FilterValues8", "FilterValues9", "GroupString", "HasOverrideSelectCommand", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsGroupRender", "IsXslView", "ListViewPageUrl", "OverrideScope", "OverrideSelectCommand", "PageFirstRow", "PageLastRow", "RootFolder", "SortDir", "SortDir1", "SortDir10", "SortDir2", "SortDir3", "SortDir4", "SortDir5", "SortDir6", "SortDir7", "SortDir8", "SortDir9", "SortField", "SortField1", "SortField10", "SortField2", "SortField3", "SortField4", "SortField5", "SortField6", "SortField7", "SortField8", "SortField9", "SortFields", "SortFieldValues", "View", "ViewCount", "ViewId", "ViewPath", "WebPartId" ],
	},
	renderListFilterData: IMapper & {
		argNames: [ "ExcludeFieldFilteringHtml", "FieldInternalName", "OverrideScope", "ProcessQStringToCAML", "ViewId" ],
	},
	renderListFormData: IMapper & {
		argNames: [ "itemId", "formId", "mode" ],
	},
	reserveListItemId: IMapper & {

	},
	saveAsNewView: IMapper & {
		argNames: [ "oldName", "newName", "privateView", "uri" ],
	},
	saveAsTemplate: IMapper & {
		argNames: [ "strFileName", "strName", "strDescription", "bSaveData" ],
	},
	setExemptFromBlockDownloadOfNonViewableFiles: IMapper & {
		argNames: [ "value" ],
	},
	syncFlowCallbackUrl: IMapper & {
		argNames: [ "flowId" ],
	},
	syncFlowInstance: IMapper & {
		argNames: [ "flowID" ],
	},
	syncFlowInstances: IMapper & {

	},
	syncFlowTemplates: IMapper & {
		argNames: [ "category" ],
	},
	unpublishMappedView: IMapper & {
		argNames: [ "appId", "visualizationTarget" ],
	},
	validateAppName: IMapper & {
		argNames: [ "appDisplayName" ],
	},
	getItems: IMapper & {
		argNames: [ "viewXML" ],
	},
	getItemsByQuery: IMapper & {
		argNames: [ "camlQuery" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.List.Collection */
export interface SP_List_Collection {
	ensureClientRenderedSitePagesLibrary: IMapper & {

	},
	ensureEventsList: IMapper & {

	},
	ensureSiteAssetsLibrary: IMapper & {

	},
	ensureSitePagesLibrary: IMapper & {

	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
	getByTitle: IMapper & {
		argNames: [ "title" ],
	},
	add: IMapper & {
		argNames: [ "parameters" ],
	},
};

/* SP.ListItem */
export interface SP_ListItem {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	breakRoleInheritance: IMapper & {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: IMapper & {

	},
	deleteObject: IMapper & {

	},
	getChanges: IMapper & {
		argNames: [ "query" ],
	},
	getHashtags: IMapper & {

	},
	getUserEffectivePermissions: IMapper & {
		argNames: [ "userName" ],
	},
	getWOPIFrameUrl: IMapper & {
		argNames: [ "action" ],
	},
	mediaServiceUpdate: IMapper & {
		argNames: [ "parameters" ],
	},
	mediaServiceUpdateV2: IMapper & {
		argNames: [ "parameters", "eventFiringEnabled" ],
	},
	overridePolicyTip: IMapper & {
		argNames: [ "userAction", "justification" ],
	},
	parseAndSetFieldValue: IMapper & {
		argNames: [ "fieldName", "value" ],
	},
	recycle: IMapper & {

	},
	setCommentsDisabled: IMapper & {
		argNames: [ "value" ],
	},
	setComplianceTag: IMapper & {
		argNames: [ "complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock" ],
	},
	setComplianceTagWithExplicitMetasUpdate: IMapper & {
		argNames: [ "complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress" ],
	},
	setComplianceTagWithHold: IMapper & {
		argNames: [ "complianceTag" ],
	},
	setComplianceTagWithMetaInfo: IMapper & {
		argNames: [ "complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock" ],
	},
	setComplianceTagWithNoHold: IMapper & {
		argNames: [ "complianceTag" ],
	},
	setComplianceTagWithRecord: IMapper & {
		argNames: [ "complianceTag" ],
	},
	systemUpdate: IMapper & {

	},
	updateEx: IMapper & {
		argNames: [ "parameters" ],
	},
	updateHashtags: IMapper & {
		argNames: [ "hashtagsToAdd", "hashtagsToRemove" ],
	},
	updateOverwriteVersion: IMapper & {

	},
	validateUpdateListItem: IMapper & {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.ListItem.Collection */
export interface SP_ListItem_Collection {
	getById: IMapper & {
		argNames: [ "itemId" ],
	},
	getByStringId: IMapper & {
		argNames: [ "sId" ],
	},
	add: IMapper & {
		argNames: [ "parameters" ],
	},
};

/* SP.ListItemVersion */
export interface SP_ListItemVersion {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
};

/* SP.ListItemVersion.Collection */
export interface SP_ListItemVersion_Collection {
	getById: IMapper & {
		argNames: [ "versionId" ],
	},
};

/* SP.ListTemplate */
export interface SP_ListTemplate {
	properties?: Array<string>;
	getGlobalSchemaXml: IMapper & {

	},
};

/* SP.ListTemplate.Collection */
export interface SP_ListTemplate_Collection {
	getByName: IMapper & {
		argNames: [ "name" ],
	},
};

/* SP.MicroService.MicroServiceManager */
export interface SP_MicroService_MicroServiceManager {
	properties?: Array<string>;
	addMicroserviceWorkItem: IMapper & {
		argNames: [ "payLoad", "minutes", "properties" ],
	},
	deleteMicroserviceWorkItem: IMapper & {
		argNames: [ "workItemId" ],
	},
	getServiceInternalUrls: IMapper & {
		argNames: [ "service" ],
	},
	getServiceUrls: IMapper & {
		argNames: [ "service" ],
	},
};

/* SP.Microfeed.MicrofeedAttachmentStore */
export interface SP_Microfeed_MicrofeedAttachmentStore {
	properties?: Array<string>;
	deletePreProcessedAttachment: IMapper & {
		argNames: [ "attachmentUri" ],
	},
	getImage: IMapper & {
		argNames: [ "imageUrl", "key", "iv" ],
	},
	preProcessAttachment: IMapper & {
		argNames: [ "link" ],
	},
	putFile: IMapper & {
		argNames: [ "originalFileName", "fileData" ],
	},
	putImage: IMapper & {
		argNames: [ "imageData" ],
	},
};

/* SP.Microfeed.MicrofeedData */
export interface SP_Microfeed_MicrofeedData {
	properties?: Array<string>;
	addAttachment: IMapper & {
		argNames: [ "name", "bytes" ],
	},
	systemUpdate: IMapper & {

	},
	update: IMapper & {

	},
};

/* SP.Microfeed.MicrofeedData.Collection */
export interface SP_Microfeed_MicrofeedData_Collection {
	deleteAll: IMapper & {

	},
};

/* SP.Microfeed.MicrofeedManager */
export interface SP_Microfeed_MicrofeedManager {
	properties?: Array<string>;
	addUserToPostPeopleList: IMapper & {
		argNames: [ "postIdentifier", "UserLoginName" ],
	},
	clearUnreadMentionsCount: IMapper & {

	},
	deleteById: IMapper & {
		argNames: [ "postIdentifier" ],
	},
	deleteUserFromPostPeopleList: IMapper & {
		argNames: [ "postIdentifier", "UserLoginName" ],
	},
	getMyCategoricalFeed: IMapper & {
		argNames: [ "feedOptions" ],
	},
	getMyConsolidatedFeed: IMapper & {
		argNames: [ "feedOptions" ],
	},
	getMyPublishedFeed: IMapper & {
		argNames: [ "feedOptions", "typeOfPubFeed", "ShowPublicView" ],
	},
	getPublishedFeed: IMapper & {
		argNames: [ "feedOwner", "feedOptions", "typeOfPubFeed" ],
	},
	getThread: IMapper & {
		argNames: [ "postIdentifier" ],
	},
	getUnreadMentionsCount: IMapper & {

	},
	like: IMapper & {
		argNames: [ "postIdentifier" ],
	},
	lockThreadById: IMapper & {
		argNames: [ "threadIdentifier" ],
	},
	post: IMapper & {
		argNames: [ "postOptions" ],
	},
	postReply: IMapper & {
		argNames: [ "postIdentifier", "postReplyOptions" ],
	},
	repopulateLMT: IMapper & {
		argNames: [ "timeStamp", "secureHash" ],
	},
	unLike: IMapper & {
		argNames: [ "postIdentifier" ],
	},
	unLockThreadById: IMapper & {
		argNames: [ "threadIdentifier" ],
	},
	unsubscribeFromEMail: IMapper & {
		argNames: [ "postIdentifier" ],
	},
};

/* SP.Microfeed.MicrofeedPostDefinitionManager */
export interface SP_Microfeed_MicrofeedPostDefinitionManager {
	properties?: Array<string>;
	deleteMicrofeedPostDefinition: IMapper & {
		argNames: [ "postDefinition" ],
	},
	getMicrofeedPostDefinition: IMapper & {
		argNames: [ "definitionName" ],
	},
	getMicrofeedPostDefinitions: IMapper & {

	},
	newMicrofeedPostDefinition: IMapper & {
		argNames: [ "definitionName" ],
	},
	updateMicrofeedPostDefinition: IMapper & {
		argNames: [ "postDefinition" ],
	},
};

/* SP.Microfeed.MicrofeedStore */
export interface SP_Microfeed_MicrofeedStore {
	properties?: Array<string>;
	addData: IMapper & {
		argNames: [ "name", "data" ],
	},
	addDataAsStream: IMapper & {
		argNames: [ "name", "data" ],
	},
	executePendingOperations: IMapper & {

	},
	getItem: IMapper & {
		argNames: [ "storeIdentifier" ],
	},
	getSocialProperties: IMapper & {
		argNames: [ "accountName" ],
	},
	incrementUnreadAtMentionCount: IMapper & {
		argNames: [ "accountName" ],
	},
	newItem: IMapper & {
		argNames: [ "storeIdentifier" ],
	},
	query: IMapper & {
		argNames: [ "storeIdentifier", "query" ],
	},
	setPostLikeStatus: IMapper & {
		argNames: [ "accountName", "postId", "like" ],
	},
};

/* SP.Navigation */
export interface SP_Navigation {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getNodeById: IMapper & {
		argNames: [ "id" ],
	},
};

/* SP.NavigationNode */
export interface SP_NavigationNode {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	update: IMapper & {

	},
};

/* SP.NavigationNode.Collection */
export interface SP_NavigationNode_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
	getByIndex: IMapper & {
		argNames: [ "index" ],
	},
	moveAfter: IMapper & {
		argNames: [ "nodeId", "previousNodeId" ],
	},
};

/* SP.OAuth.NativeClient */
export interface SP_OAuth_NativeClient {
	properties?: Array<string>;
	authenticate: IMapper & {

	},
};

/* SP.OAuth.Token */
export interface SP_OAuth_Token {
	properties?: Array<string>;
	acquire: IMapper & {
		argNames: [ "resource", "tokenType" ],
	},
};

/* SP.ObjectSharingInformation */
export interface SP_ObjectSharingInformation {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getSharedWithUsers: IMapper & {

	},
};

/* SP.Publishing.CommunicationSite */
export interface SP_Publishing_CommunicationSite {
	properties?: Array<string>;
	create: IMapper & {
		argNames: [ "request" ],
	},
	status: IMapper & {
		argNames: [ "url" ],
	},
};

/* SP.Publishing.EmbedService */
export interface SP_Publishing_EmbedService {
	properties?: Array<string>;
	embedData: IMapper & {
		argNames: [ "url", "version" ],
	},
};

/* SP.Publishing.PointPublishingPost */
export interface SP_Publishing_PointPublishingPost {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	addImageFromUrl: IMapper & {
		argNames: [ "fromImageUrl" ],
	},
	deleteObject: IMapper & {

	},
};

/* SP.Publishing.PointPublishingPost.Collection */
export interface SP_Publishing_PointPublishingPost_Collection {
	getById: IMapper & {
		argNames: [ "id", "publishedOnly" ],
	},
	getByName: IMapper & {
		argNames: [ "name", "publishedOnly" ],
	},
};

/* SP.Publishing.PointPublishingPostServiceManager */
export interface SP_Publishing_PointPublishingPostServiceManager {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	addBannerImageFromUrl: IMapper & {
		argNames: [ "fromImageUrl" ],
	},
	deleteMagazine: IMapper & {

	},
	getDocProps: IMapper & {
		argNames: [ "docUrls" ],
	},
	getPostsQuery: IMapper & {
		argNames: [ "top", "itemIdBoundary", "directionAscending", "publishedOnly", "draftsOnly" ],
	},
	getTopAuthors: IMapper & {
		argNames: [ "count" ],
	},
	queryGroupNames: IMapper & {
		argNames: [ "query" ],
	},
	setMagazineProperties: IMapper & {
		argNames: [ "title", "description", "bannerImageUrl", "bannerColor", "bannerPattern" ],
	},
};

/* SP.Publishing.PointPublishingSiteManager */
export interface SP_Publishing_PointPublishingSiteManager {
	properties?: Array<string>;
	create: IMapper & {
		argNames: [ "siteInfo" ],
	},
	getSiteStatus: IMapper & {
		argNames: [ "siteInfo" ],
	},
};

/* SP.Publishing.PointPublishingTenantManager */
export interface SP_Publishing_PointPublishingTenantManager {
	properties?: Array<string>;
	isBlogEnabled: IMapper & {

	},
};

/* SP.Publishing.PointPublishingUser */
export interface SP_Publishing_PointPublishingUser {
	properties?: Array<string>;
	deleteUserFromContainerGroup: IMapper & {

	},
};

/* SP.Publishing.PointPublishingUser.Collection */
export interface SP_Publishing_PointPublishingUser_Collection {
	addOrUpdateUser: IMapper & {
		argNames: [ "loginName", "isOwner" ],
	},
	getById: IMapper & {
		argNames: [ "userId" ],
	},
};

/* SP.Publishing.RepostPage */
export interface SP_Publishing_RepostPage {
	properties?: Array<string>;
	checkOut: IMapper & {

	},
	checkoutPage: IMapper & {

	},
	copy: IMapper & {

	},
	demoteFromNews: IMapper & {

	},
	discardPage: IMapper & {

	},
	getVersion: IMapper & {
		argNames: [ "versionId" ],
	},
	promoteToNews: IMapper & {

	},
	publish: IMapper & {

	},
	saveDraft: IMapper & {
		argNames: [ "sitePage" ],
	},
	savePage: IMapper & {
		argNames: [ "pageStream" ],
	},
	savePageAsDraft: IMapper & {
		argNames: [ "pageStream" ],
	},
	savePageAsTemplate: IMapper & {

	},
	sharePagePreviewByEmail: IMapper & {
		argNames: [ "message", "recipientEmails" ],
	},
	update: IMapper & {

	},
};

/* SP.Publishing.RepostPage.Collection */
export interface SP_Publishing_RepostPage_Collection {
	isContentTypeAvailable: IMapper & {

	},
};

/* SP.Publishing.RichSharing */
export interface SP_Publishing_RichSharing {
	properties?: Array<string>;
	sharePageByEmail: IMapper & {
		argNames: [ "url", "message", "recipientEmails" ],
	},
	shareSiteByEmail: IMapper & {
		argNames: [ "CustomDescription", "CustomTitle", "Message", "Url", "recipientEmails" ],
	},
};

/* SP.Publishing.Search */
export interface SP_Publishing_Search {
	properties?: Array<string>;
	newest: IMapper & {
		argNames: [ "startItemIndex", "itemLimit" ],
	},
	popular: IMapper & {
		argNames: [ "startItemIndex", "itemLimit" ],
	},
	query: IMapper & {
		argNames: [ "queryText", "startItemIndex", "itemLimit", "culture" ],
	},
	queryChannels: IMapper & {
		argNames: [ "queryText", "startItemIndex", "itemLimit", "culture" ],
	},
	related: IMapper & {
		argNames: [ "videoId", "startItemIndex", "itemLimit" ],
	},
};

/* SP.Publishing.SharePointHomeServiceManager */
export interface SP_Publishing_SharePointHomeServiceManager {
	properties?: Array<string>;
	getAcronymsAndColors: IMapper & {
		argNames: [ "labels" ],
	},
};

/* SP.Publishing.SitePage */
export interface SP_Publishing_SitePage {
	properties?: Array<string>;
	checkOut: IMapper & {

	},
	checkoutPage: IMapper & {

	},
	copy: IMapper & {

	},
	demoteFromNews: IMapper & {

	},
	discardPage: IMapper & {

	},
	getVersion: IMapper & {
		argNames: [ "versionId" ],
	},
	promoteToNews: IMapper & {

	},
	publish: IMapper & {

	},
	saveDraft: IMapper & {
		argNames: [ "sitePage" ],
	},
	savePage: IMapper & {
		argNames: [ "pageStream" ],
	},
	savePageAsDraft: IMapper & {
		argNames: [ "pageStream" ],
	},
	savePageAsTemplate: IMapper & {

	},
	sharePagePreviewByEmail: IMapper & {
		argNames: [ "message", "recipientEmails" ],
	},
	update: IMapper & {

	},
};

/* SP.Publishing.SitePage.Collection */
export interface SP_Publishing_SitePage_Collection {
	ensureTitleResource: IMapper & {

	},
	feed: IMapper & {
		argNames: [ "promotedState", "published", "metadataFilter" ],
	},
	feedTargeted: IMapper & {
		argNames: [ "promotedState", "published", "metadataFilter" ],
	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
	getByUrl: IMapper & {
		argNames: [ "url" ],
	},
	getPageColumnState: IMapper & {
		argNames: [ "url" ],
	},
	isSitePage: IMapper & {
		argNames: [ "url" ],
	},
	templates: IMapper & {

	},
};

/* SP.Publishing.SitePageMetadata.Collection */
export interface SP_Publishing_SitePageMetadata_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* SP.Publishing.SitePageService */
export interface SP_Publishing_SitePageService {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	addImage: IMapper & {
		argNames: [ "pageName", "imageFileName", "imageStream" ],
	},
	addImageFromExternalUrl: IMapper & {
		argNames: [ "pageName", "imageFileName", "externalUrl", "subFolderName" ],
	},
	canCreatePromotedPage: IMapper & {

	},
	update: IMapper & {

	},
};

/* SP.Publishing.SpotlightChannel */
export interface SP_Publishing_SpotlightChannel {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	update: IMapper & {

	},
};

/* SP.Publishing.SpotlightChannel.Collection */
export interface SP_Publishing_SpotlightChannel_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* SP.Publishing.SpotlightVideo */
export interface SP_Publishing_SpotlightVideo {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	update: IMapper & {

	},
};

/* SP.Publishing.SpotlightVideo.Collection */
export interface SP_Publishing_SpotlightVideo_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* SP.Publishing.SubtitleFile.Collection */
export interface SP_Publishing_SubtitleFile_Collection {
	add: IMapper & {
		argNames: [ "language", "extension", "stream" ],
	},
	getSubtitleFile: IMapper & {
		argNames: [ "name" ],
	},
	remove: IMapper & {
		argNames: [ "name" ],
	},
};

/* SP.Publishing.VideoChannel */
export interface SP_Publishing_VideoChannel {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getAllVideos: IMapper & {
		argNames: [ "skip", "limit" ],
	},
	getChannelPageUrl: IMapper & {
		argNames: [ "viewMode" ],
	},
	getMyVideos: IMapper & {
		argNames: [ "skip", "limit" ],
	},
	getPermissionGroup: IMapper & {
		argNames: [ "permission" ],
	},
	getVideoCount: IMapper & {

	},
	update: IMapper & {

	},
};

/* SP.Publishing.VideoChannel.Collection */
export interface SP_Publishing_VideoChannel_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* SP.Publishing.VideoItem */
export interface SP_Publishing_VideoItem {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	customThumbnail: IMapper & {

	},
	deleteObject: IMapper & {

	},
	getFile: IMapper & {

	},
	getPlaybackMetadata: IMapper & {
		argNames: [ "sdnConfiguration" ],
	},
	getPlaybackUrl: IMapper & {
		argNames: [ "videoFormat" ],
	},
	getStreamingKeyAccessToken: IMapper & {

	},
	getVideoDetailedViewCount: IMapper & {

	},
	getVideoEmbedCode: IMapper & {
		argNames: [ "width", "height", "autoplay", "showInfo", "makeResponsive" ],
	},
	getVideoViewProgressCount: IMapper & {

	},
	incrementVideoViewProgressCount: IMapper & {
		argNames: [ "percentageViewed" ],
	},
	incrementViewCount: IMapper & {
		argNames: [ "viewOrigin" ],
	},
	setPeopleInMedia: IMapper & {
		argNames: [ "loginNames" ],
	},
	setVideoOwner: IMapper & {
		argNames: [ "id" ],
	},
	subtitles: IMapper & {

	},
	thumbnails: IMapper & {
		argNames: [ "preferredWidth" ],
	},
	thumbnailStream: IMapper & {
		argNames: [ "preferredWidth" ],
	},
	update: IMapper & {

	},
	uploadCustomThumbnail: IMapper & {
		argNames: [ "fileExtension", "customVideoThumbnail" ],
	},
};

/* SP.Publishing.VideoItem.Collection */
export interface SP_Publishing_VideoItem_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* SP.Publishing.VideoPermissionGroup */
export interface SP_Publishing_VideoPermissionGroup {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	hasCurrentUser: IMapper & {

	},
};

/* SP.Publishing.VideoServiceManager */
export interface SP_Publishing_VideoServiceManager {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getChannels: IMapper & {
		argNames: [ "startIndex", "limit" ],
	},
	getPermissionGroup: IMapper & {
		argNames: [ "permission" ],
	},
};

/* SP.Publishing.VideoThumbnail.Collection */
export interface SP_Publishing_VideoThumbnail_Collection {
	getByIndex: IMapper & {
		argNames: [ "choice" ],
	},
};

/* SP.PushNotificationSubscriber */
export interface SP_PushNotificationSubscriber {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	update: IMapper & {

	},
};

/* SP.PushNotificationSubscriber.Collection */
export interface SP_PushNotificationSubscriber_Collection {
	getByStoreId: IMapper & {
		argNames: [ "id" ],
	},
};

/* SP.RecycleBinItem */
export interface SP_RecycleBinItem {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	moveToSecondStage: IMapper & {

	},
	restore: IMapper & {

	},
};

/* SP.RecycleBinItem.Collection */
export interface SP_RecycleBinItem_Collection {
	deleteAll: IMapper & {

	},
	deleteAllSecondStageItems: IMapper & {

	},
	deleteByIds: IMapper & {
		argNames: [ "ids" ],
	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
	moveAllToSecondStage: IMapper & {

	},
	moveToSecondStageByIds: IMapper & {
		argNames: [ "ids" ],
	},
	restoreAll: IMapper & {

	},
	restoreByIds: IMapper & {
		argNames: [ "ids" ],
	},
};

/* SP.RegionalSettings */
export interface SP_RegionalSettings {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	update: IMapper & {

	},
};

/* SP.RelatedField.Collection */
export interface SP_RelatedField_Collection {
	getByFieldId: IMapper & {
		argNames: [ "fieldId" ],
	},
};

/* SP.RemoteWeb */
export interface SP_RemoteWeb {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getFileByServerRelativePath: IMapper & {
		argNames: [ "serverRelatvieFilePath" ],
	},
	getFileByServerRelativeUrl: IMapper & {
		argNames: [ "serverRelativeFileUrl" ],
	},
	getFileByUrl: IMapper & {
		argNames: [ "fileUrl" ],
	},
	getFolderByServerRelativeUrl: IMapper & {
		argNames: [ "serverRelativeUrl" ],
	},
	getGroupById: IMapper & {
		argNames: [ "groupId" ],
	},
	getListById: IMapper & {
		argNames: [ "listGuid" ],
	},
	getListByServerRelativeUrl: IMapper & {
		argNames: [ "serverRelativeUrl" ],
	},
};

/* SP.RequestContext */
export interface SP_RequestContext {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getRemoteContext: IMapper & {

	},
};

/* SP.RoleAssignment */
export interface SP_RoleAssignment {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.RoleAssignment.Collection */
export interface SP_RoleAssignment_Collection {
	addRoleAssignment: IMapper & {
		argNames: [ "principalId", "roleDefId" ],
	},
	getByPrincipalId: IMapper & {
		argNames: [ "principalId" ],
	},
	removeRoleAssignment: IMapper & {
		argNames: [ "principalId", "roleDefId" ],
	},
};

/* SP.RoleDefinition */
export interface SP_RoleDefinition {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.RoleDefinition.Collection */
export interface SP_RoleDefinition_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
	removeAll: IMapper & {

	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
	getByName: IMapper & {
		argNames: [ "name" ],
	},
	getByType: IMapper & {
		argNames: [ "roleType" ],
	},
	recreateMissingDefaultRoleDefinitions: IMapper & {

	},
};

/* SP.SPAppLicenseManager */
export interface SP_SPAppLicenseManager {
	properties?: Array<string>;
	checkLicense: IMapper & {
		argNames: [ "productId" ],
	},
};

/* SP.ScriptSafeDomain */
export interface SP_ScriptSafeDomain {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
};

/* SP.ScriptSafeDomain.Collection */
export interface SP_ScriptSafeDomain_Collection {
	create: IMapper & {
		argNames: [ "parameters" ],
	},
	getByDomainName: IMapper & {
		argNames: [ "domainName" ],
	},
};

/* SP.SecurableObject */
export interface SP_SecurableObject {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	breakRoleInheritance: IMapper & {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: IMapper & {

	},
};

/* SP.Site */
export interface SP_Site {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	createCopyJob: IMapper & {
		argNames: [ "exportObjectUris", "destinationUri", "options" ],
	},
	createCopyJobs: IMapper & {
		argNames: [ "exportObjectUris", "destinationUri", "options" ],
	},
	createMigrationIngestionJob: IMapper & {
		argNames: [ "gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri", "ingestionTaskKey" ],
	},
	createMigrationJob: IMapper & {
		argNames: [ "gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri" ],
	},
	createMigrationJobEncrypted: IMapper & {
		argNames: [ "gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri", "options" ],
	},
	createPreviewSPSite: IMapper & {
		argNames: [ "upgrade", "sendemail" ],
	},
	deleteMigrationJob: IMapper & {
		argNames: [ "id" ],
	},
	extendUpgradeReminderDate: IMapper & {

	},
	getBringYourOwnKeySiteStatus: IMapper & {

	},
	getBringYourOwnKeyTenantStatus: IMapper & {

	},
	getCatalog: IMapper & {
		argNames: [ "typeCatalog" ],
	},
	getChanges: IMapper & {
		argNames: [ "query" ],
	},
	getCopyJobProgress: IMapper & {
		argNames: [ "copyJobInfo" ],
	},
	getHubSiteJoinApprovalCorrelationId: IMapper & {

	},
	getMigrationJobStatus: IMapper & {
		argNames: [ "id" ],
	},
	getMigrationStatus: IMapper & {

	},
	getRecycleBinItems: IMapper & {
		argNames: [ "pagingInfo", "rowLimit", "isAscending", "orderBy", "itemState" ],
	},
	getWebPath: IMapper & {
		argNames: [ "siteId", "webId" ],
	},
	getWebTemplates: IMapper & {
		argNames: [ "LCID", "overrideCompatLevel" ],
	},
	invalidate: IMapper & {

	},
	joinHubSite: IMapper & {
		argNames: [ "hubSiteId", "approvalToken", "approvalCorrelationId" ],
	},
	makeHubSite: IMapper & {

	},
	multiGeoCopyJob: IMapper & {
		argNames: [ "jobId", "userId", "binaryPayload" ],
	},
	needsUpgradeByType: IMapper & {
		argNames: [ "versionUpgrade", "recursive" ],
	},
	onboardTenantForBringYourOwnKey: IMapper & {
		argNames: [ "keyInfo" ],
	},
	onHubSiteJoinRequestApproved: IMapper & {
		argNames: [ "joiningSiteId" ],
	},
	onHubSiteJoinRequestCanceled: IMapper & {
		argNames: [ "approvalCorrelationId" ],
	},
	onHubSiteJoinRequestStarted: IMapper & {
		argNames: [ "approvalCorrelationId" ],
	},
	openWeb: IMapper & {
		argNames: [ "strUrl" ],
	},
	openWebById: IMapper & {
		argNames: [ "gWebId" ],
	},
	openWebUsingPath: IMapper & {
		argNames: [ "path" ],
	},
	provisionMigrationContainers: IMapper & {

	},
	provisionMigrationQueue: IMapper & {

	},
	recoverTenantForBringYourOwnKey: IMapper & {
		argNames: [ "keyInfo" ],
	},
	registerHubSite: IMapper & {
		argNames: [ "creationInformation" ],
	},
	removeHubSite: IMapper & {

	},
	rollTenantBringYourOwnKey: IMapper & {
		argNames: [ "keyType", "keyVaultInfo" ],
	},
	runHealthCheck: IMapper & {
		argNames: [ "ruleId", "bRepair", "bRunAlways" ],
	},
	runUpgradeSiteSession: IMapper & {
		argNames: [ "versionUpgrade", "queueOnly", "sendEmail" ],
	},
	unregisterHubSite: IMapper & {

	},
	updateClientObjectModelUseRemoteAPIsPermissionSetting: IMapper & {
		argNames: [ "requireUseRemoteAPIs" ],
	},
	validateHubSiteJoinApprovalToken: IMapper & {
		argNames: [ "joiningSiteId", "approvalToken" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.Social.SocialFeedManager */
export interface SP_Social_SocialFeedManager {
	properties?: Array<string>;
	createFileAttachment: IMapper & {
		argNames: [ "name", "description", "fileData" ],
	},
	createImageAttachment: IMapper & {
		argNames: [ "name", "description", "imageData" ],
	},
	createPost: IMapper & {
		argNames: [ "targetId", "creationData" ],
	},
	deletePost: IMapper & {
		argNames: [ "postId" ],
	},
	getAllLikers: IMapper & {
		argNames: [ "postId" ],
	},
	getFeed: IMapper & {
		argNames: [ "type", "options" ],
	},
	getFeedFor: IMapper & {
		argNames: [ "actorId", "options" ],
	},
	getFullThread: IMapper & {
		argNames: [ "threadId" ],
	},
	getMentions: IMapper & {
		argNames: [ "clearUnreadMentions", "options" ],
	},
	getPreview: IMapper & {
		argNames: [ "itemUrl" ],
	},
	getPreviewImage: IMapper & {
		argNames: [ "url", "key", "iv" ],
	},
	getUnreadMentionCount: IMapper & {

	},
	likePost: IMapper & {
		argNames: [ "postId" ],
	},
	lockThread: IMapper & {
		argNames: [ "threadId" ],
	},
	suppressThreadNotifications: IMapper & {
		argNames: [ "threadId" ],
	},
	unlikePost: IMapper & {
		argNames: [ "postId" ],
	},
	unlockThread: IMapper & {
		argNames: [ "threadId" ],
	},
};

/* SP.Social.SocialFollowingManager */
export interface SP_Social_SocialFollowingManager {
	properties?: Array<string>;
	follow: IMapper & {
		argNames: [ "actor" ],
	},
	getFollowed: IMapper & {
		argNames: [ "types" ],
	},
	getFollowedCount: IMapper & {
		argNames: [ "types" ],
	},
	getFollowers: IMapper & {

	},
	getSuggestions: IMapper & {

	},
	isFollowed: IMapper & {
		argNames: [ "actor" ],
	},
	stopFollowing: IMapper & {
		argNames: [ "actor" ],
	},
};

/* SP.Social.SocialRestActor */
export interface SP_Social_SocialRestActor {
	properties?: Array<string>;
	feed: IMapper & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	likes: IMapper & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	mentionFeed: IMapper & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	news: IMapper & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	organizationFeed: IMapper & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	timelineFeed: IMapper & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	unreadMentionCount: IMapper & {

	},
};

/* SP.Social.SocialRestFeed */
export interface SP_Social_SocialRestFeed {
	properties?: Array<string>;
	clearUnReadMentionCount: IMapper & {
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	post: IMapper & {
		argNames: [ "restCreationData" ],
	},
};

/* SP.Social.SocialRestFeedManager */
export interface SP_Social_SocialRestFeedManager {
	properties?: Array<string>;
	actor: IMapper & {
		argNames: [ "item" ],
	},
	my: IMapper & {

	},
	post: IMapper & {
		argNames: [ "ID" ],
	},
};

/* SP.Social.SocialRestFollowingManager */
export interface SP_Social_SocialRestFollowingManager {
	properties?: Array<string>;
	follow: IMapper & {
		argNames: [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
	},
	followed: IMapper & {
		argNames: [ "types" ],
	},
	followedCount: IMapper & {
		argNames: [ "types" ],
	},
	followers: IMapper & {

	},
	isFollowed: IMapper & {
		argNames: [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
	},
	my: IMapper & {

	},
	stopFollowing: IMapper & {
		argNames: [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
	},
	suggestions: IMapper & {

	},
};

/* SP.Social.SocialRestThread */
export interface SP_Social_SocialRestThread {
	properties?: Array<string>;
	delete: IMapper & {
		argNames: [ "ID" ],
	},
	like: IMapper & {
		argNames: [ "ID" ],
	},
	likers: IMapper & {
		argNames: [ "ID" ],
	},
	lock: IMapper & {
		argNames: [ "ID" ],
	},
	reply: IMapper & {
		argNames: [ "restCreationData" ],
	},
	unLike: IMapper & {
		argNames: [ "ID" ],
	},
	unLock: IMapper & {
		argNames: [ "ID" ],
	},
};

/* SP.Taxonomy.TaxonomyField */
export interface SP_Taxonomy_TaxonomyField {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	setShowInDisplayForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInEditForm: IMapper & {
		argNames: [ "value" ],
	},
	setShowInNewForm: IMapper & {
		argNames: [ "value" ],
	},
};

/* SP.ThemeInfo */
export interface SP_ThemeInfo {
	properties?: Array<string>;
	getThemeFontByName: IMapper & {
		argNames: [ "name", "lcid" ],
	},
	getThemeShadeByName: IMapper & {
		argNames: [ "name" ],
	},
};

/* SP.TimeZone */
export interface SP_TimeZone {
	properties?: Array<string>;
	localTimeToUTC: IMapper & {
		argNames: [ "date" ],
	},
	uTCToLocalTime: IMapper & {
		argNames: [ "date" ],
	},
};

/* SP.TimeZone.Collection */
export interface SP_TimeZone_Collection {
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* SP.Translation.SyncTranslator */
export interface SP_Translation_SyncTranslator {
	properties?: Array<string>;
	translate: IMapper & {
		argNames: [ "inputFile", "outputFile" ],
	},
	translateStream: IMapper & {
		argNames: [ "inputFile", "fileExtension" ],
	},
};

/* SP.Translation.TranslationJob */
export interface SP_Translation_TranslationJob {
	properties?: Array<string>;
	translateFile: IMapper & {
		argNames: [ "inputFile", "outputFile" ],
	},
	translateFolder: IMapper & {
		argNames: [ "inputFolder", "outputFolder", "recursion" ],
	},
	translateLibrary: IMapper & {
		argNames: [ "inputLibrary", "outputLibrary" ],
	},
};

/* SP.Translation.TranslationJobStatus */
export interface SP_Translation_TranslationJobStatus {
	properties?: Array<string>;
	getAllItems: IMapper & {

	},
};

/* SP.User */
export interface SP_User {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	add: IMapper & {
		argNames: [ "properties" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.User.Collection */
export interface SP_User_Collection {
	getByEmail: IMapper & {
		argNames: [ "emailAddress" ],
	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
	getByLoginName: IMapper & {
		argNames: [ "loginName" ],
	},
	removeById: IMapper & {
		argNames: [ "id" ],
	},
	removeByLoginName: IMapper & {
		argNames: [ "loginName" ],
	},
};

/* SP.UserCustomAction */
export interface SP_UserCustomAction {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteObject: IMapper & {

	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.UserCustomAction.Collection */
export interface SP_UserCustomAction_Collection {
	clear: IMapper & {

	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
	add: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.UserProfiles.FollowedContent */
export interface SP_UserProfiles_FollowedContent {
	properties?: Array<string>;
	findAndUpdateFollowedGroup: IMapper & {
		argNames: [ "groupId" ],
	},
	findAndUpdateFollowedItem: IMapper & {
		argNames: [ "url" ],
	},
	followItem: IMapper & {
		argNames: [ "item" ],
	},
	getFollowedStatus: IMapper & {
		argNames: [ "url" ],
	},
	getGroups: IMapper & {
		argNames: [ "rowLimit" ],
	},
	getItem: IMapper & {
		argNames: [ "url" ],
	},
	getItems: IMapper & {
		argNames: [ "options", "subtype" ],
	},
	hasGroupMembershipChangedAndSyncChanges: IMapper & {

	},
	isFollowed: IMapper & {
		argNames: [ "url" ],
	},
	refreshFollowedItem: IMapper & {
		argNames: [ "item" ],
	},
	setItemPinState: IMapper & {
		argNames: [ "uri", "groupId", "pinState" ],
	},
	stopFollowing: IMapper & {
		argNames: [ "url" ],
	},
	updateFollowedGroupForUser: IMapper & {
		argNames: [ "contextUri", "groupId", "loginName" ],
	},
};

/* SP.UserProfiles.PeopleManager */
export interface SP_UserProfiles_PeopleManager {
	properties?: Array<string>;
	amIFollowedBy: IMapper & {
		argNames: [ "accountName" ],
	},
	amIFollowing: IMapper & {
		argNames: [ "accountName" ],
	},
	follow: IMapper & {
		argNames: [ "accountName" ],
	},
	followTag: IMapper & {
		argNames: [ "value" ],
	},
	getDefaultDocumentLibrary: IMapper & {
		argNames: [ "accountName", "createSiteIfNotExists", "siteCreationPriority" ],
	},
	getFollowedTags: IMapper & {
		argNames: [ "cTagsToFetch" ],
	},
	getFollowersFor: IMapper & {
		argNames: [ "accountName" ],
	},
	getMyFollowers: IMapper & {

	},
	getMyProperties: IMapper & {

	},
	getMySuggestions: IMapper & {

	},
	getPeopleFollowedBy: IMapper & {
		argNames: [ "accountName" ],
	},
	getPeopleFollowedByMe: IMapper & {

	},
	getPropertiesFor: IMapper & {
		argNames: [ "accountName" ],
	},
	getSPUserInformation: IMapper & {
		argNames: [ "accountName", "siteId" ],
	},
	getUserProfileProperties: IMapper & {
		argNames: [ "accountName" ],
	},
	getUserProfilePropertyFor: IMapper & {
		argNames: [ "accountName", "propertyName" ],
	},
	hardDeleteUserProfile: IMapper & {
		argNames: [ "accountName", "userId" ],
	},
	hideSuggestion: IMapper & {
		argNames: [ "accountName" ],
	},
	removeSPUserInformation: IMapper & {
		argNames: [ "accountName", "siteId", "redactName" ],
	},
	setMultiValuedProfileProperty: IMapper & {
		argNames: [ "accountName", "propertyName", "propertyValues" ],
	},
	setMyProfilePicture: IMapper & {
		argNames: [ "picture" ],
	},
	setSingleValueProfileProperty: IMapper & {
		argNames: [ "accountName", "propertyName", "propertyValue" ],
	},
	stopFollowing: IMapper & {
		argNames: [ "accountName" ],
	},
	stopFollowingTag: IMapper & {
		argNames: [ "value" ],
	},
};

/* SP.UserProfiles.PersonalCache */
export interface SP_UserProfiles_PersonalCache {
	properties?: Array<string>;
	deleteCacheItemsAsync: IMapper & {
		argNames: [ "cacheItems" ],
	},
	loadUserProfile: IMapper & {
		argNames: [ "email" ],
	},
	readCache: IMapper & {
		argNames: [ "folderPath" ],
	},
	readCacheOrCreate: IMapper & {
		argNames: [ "folderPath", "requiredCacheKeys", "createIfMissing" ],
	},
	readCacheOrCreateOrderById: IMapper & {
		argNames: [ "folderPath", "requiredCacheKeys", "createIfMissing" ],
	},
	writeCache: IMapper & {
		argNames: [ "cacheItems" ],
	},
};

/* SP.UserProfiles.ProfileImageStore */
export interface SP_UserProfiles_ProfileImageStore {
	properties?: Array<string>;
	saveUploadedFile: IMapper & {
		argNames: [ "profileType", "fileNamePrefix", "isFeedAttachment", "clientFilePath", "fileSize", "fileStream" ],
	},
};

/* SP.UserProfiles.ProfileLoader */
export interface SP_UserProfiles_ProfileLoader {
	properties?: Array<string>;
	createPersonalSiteEnqueueBulk: IMapper & {
		argNames: [ "emailIDs" ],
	},
	getUserProfile: IMapper & {

	},
};

/* SP.UserProfiles.UserProfile */
export interface SP_UserProfiles_UserProfile {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	createPersonalSite: IMapper & {
		argNames: [ "lcid" ],
	},
	createPersonalSiteEnque: IMapper & {
		argNames: [ "isInteractive" ],
	},
	createPersonalSiteFromWorkItem: IMapper & {
		argNames: [ "workItemType" ],
	},
	setMySiteFirstRunExperience: IMapper & {
		argNames: [ "value" ],
	},
	shareAllSocialData: IMapper & {
		argNames: [ "shareAll" ],
	},
};

/* SP.UserProfiles.UserProfilePropertiesForUser */
export interface SP_UserProfiles_UserProfilePropertiesForUser {
	properties?: Array<string>;
	getPropertyNames: IMapper & {

	},
};

/* SP.UserResource */
export interface SP_UserResource {
	properties?: Array<string>;
	getValueForUICulture: IMapper & {
		argNames: [ "cultureName" ],
	},
	setValueForUICulture: IMapper & {
		argNames: [ "cultureName", "value" ],
	},
};

/* SP.UserSolution.Collection */
export interface SP_UserSolution_Collection {
	add: IMapper & {
		argNames: [ "solutionGalleryItemId" ],
	},
};

/* SP.Utilities.ThemeManager */
export interface SP_Utilities_ThemeManager {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	addTenantTheme: IMapper & {
		argNames: [ "name", "themeJson" ],
	},
	applyTheme: IMapper & {
		argNames: [ "name", "themeJson" ],
	},
	deleteTenantTheme: IMapper & {
		argNames: [ "name" ],
	},
	getAvailableThemes: IMapper & {

	},
	getHideDefaultThemes: IMapper & {

	},
	getTenantTheme: IMapper & {
		argNames: [ "name" ],
	},
	getTenantThemingOptions: IMapper & {

	},
	setHideDefaultThemes: IMapper & {
		argNames: [ "hideDefaultThemes" ],
	},
	updateTenantTheme: IMapper & {
		argNames: [ "name", "themeJson" ],
	},
};

/* SP.View */
export interface SP_View {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	addToSpotlight: IMapper & {
		argNames: [ "itemId", "folderPath", "afterItemId" ],
	},
	deleteObject: IMapper & {

	},
	removeFromSpotlight: IMapper & {
		argNames: [ "itemId", "folderPath" ],
	},
	renderAsHtml: IMapper & {

	},
	setViewXml: IMapper & {
		argNames: [ "viewXml" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.View.Collection */
export interface SP_View_Collection {
	getById: IMapper & {
		argNames: [ "guidId" ],
	},
	getByTitle: IMapper & {
		argNames: [ "strTitle" ],
	},
	add: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.ViewFieldCollection */
export interface SP_ViewFieldCollection {
	properties?: Array<string>;
	addViewField: IMapper & {
		argNames: [ "strField" ],
	},
	moveViewFieldTo: IMapper & {
		argNames: [ "field", "index" ],
	},
	removeAllViewFields: IMapper & {

	},
	removeViewField: IMapper & {
		argNames: [ "strField" ],
	},
};

/* SP.Web */
export interface SP_Web {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	breakRoleInheritance: IMapper & {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: IMapper & {

	},
	addCrossFarmMessage: IMapper & {
		argNames: [ "messagePayloadBase64" ],
	},
	addSupportedUILanguage: IMapper & {
		argNames: [ "lcid" ],
	},
	applyTheme: IMapper & {
		argNames: [ "colorPaletteUrl", "fontSchemeUrl", "backgroundImageUrl", "shareGenerated" ],
	},
	applyWebTemplate: IMapper & {
		argNames: [ "webTemplate" ],
	},
	createDefaultAssociatedGroups: IMapper & {
		argNames: [ "userLogin", "userLogin2", "groupNameSeed" ],
	},
	defaultDocumentLibrary: IMapper & {

	},
	deleteObject: IMapper & {

	},
	doesPushNotificationSubscriberExist: IMapper & {
		argNames: [ "deviceAppInstanceId" ],
	},
	ensureUser: IMapper & {
		argNames: [ "logonName" ],
	},
	executeRemoteLOB: IMapper & {
		argNames: [ "inputStream" ],
	},
	getAppBdcCatalog: IMapper & {

	},
	getAppBdcCatalogForAppInstance: IMapper & {
		argNames: [ "appInstanceId" ],
	},
	getAppInstanceById: IMapper & {
		argNames: [ "appInstanceId" ],
	},
	getAppInstancesByProductId: IMapper & {
		argNames: [ "productId" ],
	},
	getAvailableWebTemplates: IMapper & {
		argNames: [ "lcid", "doIncludeCrossLanguage" ],
	},
	getCatalog: IMapper & {
		argNames: [ "typeCatalog" ],
	},
	getChanges: IMapper & {
		argNames: [ "query" ],
	},
	getClientSideComponents: IMapper & {
		argNames: [ "components" ],
	},
	getClientSideComponentsById: IMapper & {
		argNames: [ "componentIds" ],
	},
	getClientSideWebParts: IMapper & {
		argNames: [ "includeErrors" ],
	},
	getCustomListTemplates: IMapper & {

	},
	getEntity: IMapper & {
		argNames: [ "namespace", "name" ],
	},
	getFileByGuestUrl: IMapper & {
		argNames: [ "guestUrl" ],
	},
	getFileByGuestUrlEnsureAccess: IMapper & {
		argNames: [ "guestUrl", "ensureAccess" ],
	},
	getFileByGuestUrlExtended: IMapper & {
		argNames: [ "guestUrl", "requestSettings" ],
	},
	getFileById: IMapper & {
		argNames: [ "uniqueId" ],
	},
	getFileByLinkingUrl: IMapper & {
		argNames: [ "linkingUrl" ],
	},
	getFileByServerRelativePath: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
	getFileByServerRelativeUrl: IMapper & {
		argNames: [ "serverRelativeUrl" ],
	},
	getFileByUrl: IMapper & {
		argNames: [ "fileUrl" ],
	},
	getFileByWOPIFrameUrl: IMapper & {
		argNames: [ "wopiFrameUrl" ],
	},
	getFolderByGuestUrl: IMapper & {
		argNames: [ "guestUrl", "ensureAccess" ],
	},
	getFolderByGuestUrlExtended: IMapper & {
		argNames: [ "guestUrl", "requestSettings" ],
	},
	getFolderById: IMapper & {
		argNames: [ "uniqueId" ],
	},
	getFolderByServerRelativePath: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
	getFolderByServerRelativeUrl: IMapper & {
		argNames: [ "serverRelativeUrl" ],
	},
	getList: IMapper & {
		argNames: [ "strUrl" ],
	},
	getListItem: IMapper & {
		argNames: [ "strUrl" ],
	},
	getListItemByResourceId: IMapper & {
		argNames: [ "resourceId" ],
	},
	getListItemUsingPath: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
	getListUsingPath: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
	getNewsList: IMapper & {
		argNames: [ "allowCreate" ],
	},
	getOnePageContextAsStream: IMapper & {

	},
	getPushNotificationSubscriber: IMapper & {
		argNames: [ "deviceAppInstanceId" ],
	},
	getPushNotificationSubscribersByArgs: IMapper & {
		argNames: [ "customArgs" ],
	},
	getPushNotificationSubscribersByUser: IMapper & {
		argNames: [ "userName" ],
	},
	getRecycleBinItems: IMapper & {
		argNames: [ "pagingInfo", "rowLimit", "isAscending", "orderBy", "itemState" ],
	},
	getRecycleBinItemsByQueryInfo: IMapper & {
		argNames: [ "IsAscending", "ItemState", "OrderBy", "PagingInfo", "RowLimit", "ShowOnlyMyItems" ],
	},
	getRegionalDateTimeSchema: IMapper & {

	},
	getSharingLinkData: IMapper & {
		argNames: [ "linkUrl" ],
	},
	getStorageEntity: IMapper & {
		argNames: [ "key" ],
	},
	getSubwebsFilteredForCurrentUser: IMapper & {
		argNames: [ "nWebTemplateFilter", "nConfigurationFilter" ],
	},
	getUserById: IMapper & {
		argNames: [ "userId" ],
	},
	getUserEffectivePermissions: IMapper & {
		argNames: [ "userName" ],
	},
	getViewFromPath: IMapper & {
		argNames: [ "DecodedUrl" ],
	},
	getViewFromUrl: IMapper & {
		argNames: [ "listUrl" ],
	},
	hubSiteData: IMapper & {
		argNames: [ "forceRefresh" ],
	},
	hubSiteDataAsStream: IMapper & {
		argNames: [ "forceRefresh" ],
	},
	incrementSiteClientTag: IMapper & {

	},
	loadAndInstallApp: IMapper & {
		argNames: [ "appPackageStream" ],
	},
	loadAndInstallAppInSpecifiedLocale: IMapper & {
		argNames: [ "appPackageStream", "installationLocaleLCID" ],
	},
	loadApp: IMapper & {
		argNames: [ "appPackageStream", "installationLocaleLCID" ],
	},
	mapToIcon: IMapper & {
		argNames: [ "fileName", "progId", "size" ],
	},
	pageContextInfo: IMapper & {
		argNames: [ "includeODBSettings", "emitNavigationInfo" ],
	},
	parseDateTime: IMapper & {
		argNames: [ "value", "displayFormat", "calendarType" ],
	},
	processExternalNotification: IMapper & {
		argNames: [ "stream" ],
	},
	registerPushNotificationSubscriber: IMapper & {
		argNames: [ "deviceAppInstanceId", "serviceToken" ],
	},
	removeStorageEntity: IMapper & {
		argNames: [ "key" ],
	},
	removeSupportedUILanguage: IMapper & {
		argNames: [ "lcid" ],
	},
	setAccessRequestSiteDescriptionAndUpdate: IMapper & {
		argNames: [ "description" ],
	},
	setStorageEntity: IMapper & {
		argNames: [ "key", "value", "description", "comments" ],
	},
	setUseAccessRequestDefaultAndUpdate: IMapper & {
		argNames: [ "useAccessRequestDefault" ],
	},
	syncFlowInstances: IMapper & {
		argNames: [ "targetWebUrl" ],
	},
	syncFlowTemplates: IMapper & {
		argNames: [ "category" ],
	},
	syncHubSiteTheme: IMapper & {

	},
	unregisterPushNotificationSubscriber: IMapper & {
		argNames: [ "deviceAppInstanceId" ],
	},
	doesUserHavePermissions: IMapper & {
		argNames: [ "high", "low" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.Web.Collection */
export interface SP_Web_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
};

/* SP.WebInformation.Collection */
export interface SP_WebInformation_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* SP.WebParts.LimitedWebPartManager */
export interface SP_WebParts_LimitedWebPartManager {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	exportWebPart: IMapper & {
		argNames: [ "webPartId" ],
	},
	importWebPart: IMapper & {
		argNames: [ "webPartXml" ],
	},
};

/* SP.WebParts.WebPartDefinition */
export interface SP_WebParts_WebPartDefinition {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	closeWebPart: IMapper & {

	},
	deleteWebPart: IMapper & {

	},
	moveWebPartTo: IMapper & {
		argNames: [ "zoneID", "zoneIndex" ],
	},
	openWebPart: IMapper & {

	},
	saveWebPartChanges: IMapper & {

	},
};

/* SP.WebParts.WebPartDefinition.Collection */
export interface SP_WebParts_WebPartDefinition_Collection {
	getByControlId: IMapper & {
		argNames: [ "controlId" ],
	},
	getById: IMapper & {
		argNames: [ "id" ],
	},
};

/* SP.WebTemplate.Collection */
export interface SP_WebTemplate_Collection {
	getByName: IMapper & {
		argNames: [ "name" ],
	},
};

/* SP.WorkManagement.OM.BaseSession */
export interface SP_WorkManagement_OM_BaseSession {
	properties?: Array<string>;
	addAttributeToTask: IMapper & {
		argNames: [ "taskKey", "attribute" ],
	},
	beginCacheRefresh: IMapper & {

	},
	beginExchangeSync: IMapper & {

	},
	createPersonalTaskAndPromoteToProviderTask: IMapper & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
	},
	createTask: IMapper & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
	},
	deleteTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	getCalloutInfo: IMapper & {
		argNames: [ "taskKey" ],
	},
	getRefreshHealthInfo: IMapper & {

	},
	getRefreshHistory: IMapper & {
		argNames: [ "since" ],
	},
	getRefreshStatus: IMapper & {
		argNames: [ "refreshId" ],
	},
	isExchangeJobPending: IMapper & {

	},
	pinTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	promotePersonalTaskToProviderTaskInLocation: IMapper & {
		argNames: [ "taskKey", "locationId" ],
	},
	readAllNonTaskData: IMapper & {

	},
	refreshSingleTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	removeAttributeFromTask: IMapper & {
		argNames: [ "taskKey", "attribute" ],
	},
	removePinOnTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	updateTaskWithLocalizedValue: IMapper & {
		argNames: [ "taskKey", "field", "value" ],
	},
};

/* SP.WorkManagement.OM.LocationOrientedSortableSession */
export interface SP_WorkManagement_OM_LocationOrientedSortableSession {
	properties?: Array<string>;
	addAttributeToTask: IMapper & {
		argNames: [ "taskKey", "attribute" ],
	},
	beginCacheRefresh: IMapper & {

	},
	beginExchangeSync: IMapper & {

	},
	createPersonalTaskAndPromoteToProviderTask: IMapper & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
	},
	createTask: IMapper & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
	},
	deleteTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	getCalloutInfo: IMapper & {
		argNames: [ "taskKey" ],
	},
	getRefreshHealthInfo: IMapper & {

	},
	getRefreshHistory: IMapper & {
		argNames: [ "since" ],
	},
	getRefreshStatus: IMapper & {
		argNames: [ "refreshId" ],
	},
	isExchangeJobPending: IMapper & {

	},
	pinTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	promotePersonalTaskToProviderTaskInLocation: IMapper & {
		argNames: [ "taskKey", "locationId" ],
	},
	readAllNonTaskData: IMapper & {

	},
	refreshSingleTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	removeAttributeFromTask: IMapper & {
		argNames: [ "taskKey", "attribute" ],
	},
	removePinOnTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	updateTaskWithLocalizedValue: IMapper & {
		argNames: [ "taskKey", "field", "value" ],
	},
	movePersonalTaskToLocation: IMapper & {
		argNames: [ "taskKey", "newLocationKey" ],
	},
};

/* SP.WorkManagement.OM.LocationOrientedUserOrderedSession */
export interface SP_WorkManagement_OM_LocationOrientedUserOrderedSession {
	properties?: Array<string>;
	addAttributeToTask: IMapper & {
		argNames: [ "taskKey", "attribute" ],
	},
	beginCacheRefresh: IMapper & {

	},
	beginExchangeSync: IMapper & {

	},
	createPersonalTaskAndPromoteToProviderTask: IMapper & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
	},
	createTask: IMapper & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
	},
	deleteTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	getCalloutInfo: IMapper & {
		argNames: [ "taskKey" ],
	},
	getRefreshHealthInfo: IMapper & {

	},
	getRefreshHistory: IMapper & {
		argNames: [ "since" ],
	},
	getRefreshStatus: IMapper & {
		argNames: [ "refreshId" ],
	},
	isExchangeJobPending: IMapper & {

	},
	pinTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	promotePersonalTaskToProviderTaskInLocation: IMapper & {
		argNames: [ "taskKey", "locationId" ],
	},
	readAllNonTaskData: IMapper & {

	},
	refreshSingleTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	removeAttributeFromTask: IMapper & {
		argNames: [ "taskKey", "attribute" ],
	},
	removePinOnTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	updateTaskWithLocalizedValue: IMapper & {
		argNames: [ "taskKey", "field", "value" ],
	},
	movePersonalTaskToLocation: IMapper & {
		argNames: [ "taskKey", "newLocationKey" ],
	},
	reorderTask: IMapper & {
		argNames: [ "taskKey", "newAfterTaskKey" ],
	},
};

/* SP.WorkManagement.OM.SortableSession */
export interface SP_WorkManagement_OM_SortableSession {
	properties?: Array<string>;
	addAttributeToTask: IMapper & {
		argNames: [ "taskKey", "attribute" ],
	},
	beginCacheRefresh: IMapper & {

	},
	beginExchangeSync: IMapper & {

	},
	createPersonalTaskAndPromoteToProviderTask: IMapper & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
	},
	createTask: IMapper & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
	},
	deleteTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	getCalloutInfo: IMapper & {
		argNames: [ "taskKey" ],
	},
	getRefreshHealthInfo: IMapper & {

	},
	getRefreshHistory: IMapper & {
		argNames: [ "since" ],
	},
	getRefreshStatus: IMapper & {
		argNames: [ "refreshId" ],
	},
	isExchangeJobPending: IMapper & {

	},
	pinTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	promotePersonalTaskToProviderTaskInLocation: IMapper & {
		argNames: [ "taskKey", "locationId" ],
	},
	readAllNonTaskData: IMapper & {

	},
	refreshSingleTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	removeAttributeFromTask: IMapper & {
		argNames: [ "taskKey", "attribute" ],
	},
	removePinOnTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	updateTaskWithLocalizedValue: IMapper & {
		argNames: [ "taskKey", "field", "value" ],
	},
};

/* SP.WorkManagement.OM.SortableSessionManager */
export interface SP_WorkManagement_OM_SortableSessionManager {
	properties?: Array<string>;
	createLocationOrientedSession: IMapper & {

	},
	createSession: IMapper & {

	},
};

/* SP.WorkManagement.OM.UserOrderedSession */
export interface SP_WorkManagement_OM_UserOrderedSession {
	properties?: Array<string>;
	addAttributeToTask: IMapper & {
		argNames: [ "taskKey", "attribute" ],
	},
	beginCacheRefresh: IMapper & {

	},
	beginExchangeSync: IMapper & {

	},
	createPersonalTaskAndPromoteToProviderTask: IMapper & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
	},
	createTask: IMapper & {
		argNames: [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
	},
	deleteTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	getCalloutInfo: IMapper & {
		argNames: [ "taskKey" ],
	},
	getRefreshHealthInfo: IMapper & {

	},
	getRefreshHistory: IMapper & {
		argNames: [ "since" ],
	},
	getRefreshStatus: IMapper & {
		argNames: [ "refreshId" ],
	},
	isExchangeJobPending: IMapper & {

	},
	pinTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	promotePersonalTaskToProviderTaskInLocation: IMapper & {
		argNames: [ "taskKey", "locationId" ],
	},
	readAllNonTaskData: IMapper & {

	},
	refreshSingleTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	removeAttributeFromTask: IMapper & {
		argNames: [ "taskKey", "attribute" ],
	},
	removePinOnTask: IMapper & {
		argNames: [ "taskKey" ],
	},
	updateTaskWithLocalizedValue: IMapper & {
		argNames: [ "taskKey", "field", "value" ],
	},
	reorderTask: IMapper & {
		argNames: [ "taskKey", "newAfterTaskKey" ],
	},
};

/* SP.WorkManagement.OM.UserOrderedSessionManager */
export interface SP_WorkManagement_OM_UserOrderedSessionManager {
	properties?: Array<string>;
	createLocationOrientedSession: IMapper & {

	},
	createSession: IMapper & {

	},
};

/* SP.WorkManagement.OM.UserSettingsManager */
export interface SP_WorkManagement_OM_UserSettingsManager {
	properties?: Array<string>;
	getAllLocations: IMapper & {

	},
	getExchangeSyncInfo: IMapper & {

	},
	getImportantLocations: IMapper & {

	},
	getLocations: IMapper & {
		argNames: [ "locationsId" ],
	},
	getPersistedProperties: IMapper & {

	},
	getUserSettings: IMapper & {

	},
	isExchangeJobPending: IMapper & {

	},
	optIntoExchangeSync: IMapper & {

	},
	optOutOfExchangeSync: IMapper & {

	},
};

/* SP.Workflow.SPWorkflowTask */
export interface SP_Workflow_SPWorkflowTask {
	properties?: Array<string>;
	breakRoleInheritance: IMapper & {
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: IMapper & {

	},
	deleteObject: IMapper & {

	},
	getChanges: IMapper & {
		argNames: [ "query" ],
	},
	getHashtags: IMapper & {

	},
	getUserEffectivePermissions: IMapper & {
		argNames: [ "userName" ],
	},
	getWOPIFrameUrl: IMapper & {
		argNames: [ "action" ],
	},
	mediaServiceUpdate: IMapper & {
		argNames: [ "parameters" ],
	},
	mediaServiceUpdateV2: IMapper & {
		argNames: [ "parameters", "eventFiringEnabled" ],
	},
	overridePolicyTip: IMapper & {
		argNames: [ "userAction", "justification" ],
	},
	parseAndSetFieldValue: IMapper & {
		argNames: [ "fieldName", "value" ],
	},
	recycle: IMapper & {

	},
	setCommentsDisabled: IMapper & {
		argNames: [ "value" ],
	},
	setComplianceTag: IMapper & {
		argNames: [ "complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock" ],
	},
	setComplianceTagWithExplicitMetasUpdate: IMapper & {
		argNames: [ "complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress" ],
	},
	setComplianceTagWithHold: IMapper & {
		argNames: [ "complianceTag" ],
	},
	setComplianceTagWithMetaInfo: IMapper & {
		argNames: [ "complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock" ],
	},
	setComplianceTagWithNoHold: IMapper & {
		argNames: [ "complianceTag" ],
	},
	setComplianceTagWithRecord: IMapper & {
		argNames: [ "complianceTag" ],
	},
	systemUpdate: IMapper & {

	},
	updateEx: IMapper & {
		argNames: [ "parameters" ],
	},
	updateHashtags: IMapper & {
		argNames: [ "hashtagsToAdd", "hashtagsToRemove" ],
	},
	updateOverwriteVersion: IMapper & {

	},
	validateUpdateListItem: IMapper & {
		argNames: [ "formValues", "bNewDocumentUpdate", "checkInComment" ],
	},
	update: IMapper & {
		argNames: [ "properties" ],
	},
};

/* SP.Workflow.WorkflowAssociation */
export interface SP_Workflow_WorkflowAssociation {
	properties?: Array<string>;
	deleteObject: IMapper & {

	},
	update: IMapper & {

	},
};

/* SP.Workflow.WorkflowAssociation.Collection */
export interface SP_Workflow_WorkflowAssociation_Collection {
	add: IMapper & {
		argNames: [ "parameters" ],
	},
	getById: IMapper & {
		argNames: [ "associationId" ],
	},
	getByName: IMapper & {
		argNames: [ "name" ],
	},
};

/* SP.Workflow.WorkflowTemplate.Collection */
export interface SP_Workflow_WorkflowTemplate_Collection {
	getById: IMapper & {
		argNames: [ "templateId" ],
	},
	getByName: IMapper & {
		argNames: [ "name" ],
	},
};

/* SP.WorkflowServices.InteropService */
export interface SP_WorkflowServices_InteropService {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	cancelWorkflow: IMapper & {
		argNames: [ "instanceId" ],
	},
	disableEvents: IMapper & {
		argNames: [ "listId", "itemGuid" ],
	},
	enableEvents: IMapper & {
		argNames: [ "listId", "itemGuid" ],
	},
	startWorkflow: IMapper & {
		argNames: [ "associationName", "correlationId", "listId", "itemGuid", "workflowParameters" ],
	},
};

/* SP.WorkflowServices.WorkflowDefinition */
export interface SP_WorkflowServices_WorkflowDefinition {
	properties?: Array<string>;
	setProperty: IMapper & {
		argNames: [ "propertyName", "value" ],
	},
};

/* SP.WorkflowServices.WorkflowDefinition.Collection */
export interface SP_WorkflowServices_WorkflowDefinition_Collection {
	sort: IMapper & {

	},
};

/* SP.WorkflowServices.WorkflowDeploymentService */
export interface SP_WorkflowServices_WorkflowDeploymentService {
	properties?: Array<string>;
	deleteCollateral: IMapper & {
		argNames: [ "workflowDefinitionId", "leafFileName" ],
	},
	deleteDefinition: IMapper & {
		argNames: [ "definitionId" ],
	},
	deprecateDefinition: IMapper & {
		argNames: [ "definitionId" ],
	},
	enumerateDefinitions: IMapper & {
		argNames: [ "publishedOnly" ],
	},
	enumerateIntegratedApps: IMapper & {

	},
	getActivitySignatures: IMapper & {
		argNames: [ "lastChanged" ],
	},
	getCollateralUri: IMapper & {
		argNames: [ "workflowDefinitionId", "leafFileName" ],
	},
	getDefinition: IMapper & {
		argNames: [ "definitionId" ],
	},
	isIntegratedApp: IMapper & {

	},
	packageDefinition: IMapper & {
		argNames: [ "definitionId", "packageDefaultFilename", "packageTitle", "packageDescription" ],
	},
	publishDefinition: IMapper & {
		argNames: [ "definitionId" ],
	},
	saveCollateral: IMapper & {
		argNames: [ "workflowDefinitionId", "leafFileName", "fileContent" ],
	},
	validateActivity: IMapper & {
		argNames: [ "activityXaml" ],
	},
};

/* SP.WorkflowServices.WorkflowInstanceService */
export interface SP_WorkflowServices_WorkflowInstanceService {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	enumerateInstancesForListItem: IMapper & {
		argNames: [ "listId", "itemId" ],
	},
	enumerateInstancesForListItemWithOffset: IMapper & {
		argNames: [ "listId", "itemId", "offset" ],
	},
	enumerateInstancesForSite: IMapper & {

	},
	enumerateInstancesForSiteWithOffset: IMapper & {
		argNames: [ "offset" ],
	},
	getInstance: IMapper & {
		argNames: [ "instanceId" ],
	},
	startWorkflowOnListItemBySubscriptionId: IMapper & {
		argNames: [ "subscriptionId", "itemId", "payload" ],
	},
};

/* SP.WorkflowServices.WorkflowMessagingService */
export interface SP_WorkflowServices_WorkflowMessagingService {
	properties?: Array<string>;
	publishEvent: IMapper & {
		argNames: [ "eventSourceId", "eventName", "payload" ],
	},
};

/* SP.WorkflowServices.WorkflowServicesManager */
export interface SP_WorkflowServices_WorkflowServicesManager {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	getWorkflowDeploymentService: IMapper & {

	},
	getWorkflowInstanceService: IMapper & {

	},
	getWorkflowInteropService: IMapper & {

	},
	getWorkflowSubscriptionService: IMapper & {

	},
	isIntegratedApp: IMapper & {

	},
};

/* SP.WorkflowServices.WorkflowSubscription */
export interface SP_WorkflowServices_WorkflowSubscription {
	properties?: Array<string>;
	getExternalVariable: IMapper & {
		argNames: [ "name" ],
	},
	setExternalVariable: IMapper & {
		argNames: [ "name", "value" ],
	},
	setProperty: IMapper & {
		argNames: [ "name", "value" ],
	},
};

/* SP.WorkflowServices.WorkflowSubscription.Collection */
export interface SP_WorkflowServices_WorkflowSubscription_Collection {
	sort: IMapper & {

	},
};

/* SP.WorkflowServices.WorkflowSubscriptionService */
export interface SP_WorkflowServices_WorkflowSubscriptionService {
	properties?: Array<string>;
	query: IMapper & { argNames: ["oData"] },
	deleteSubscription: IMapper & {
		argNames: [ "subscriptionId" ],
	},
	enumerateSubscriptions: IMapper & {

	},
	enumerateSubscriptionsByDefinition: IMapper & {
		argNames: [ "definitionId" ],
	},
	enumerateSubscriptionsByEventSource: IMapper & {
		argNames: [ "eventSourceId" ],
	},
	enumerateSubscriptionsByList: IMapper & {
		argNames: [ "listId" ],
	},
	enumerateSubscriptionsByListAndParentContentType: IMapper & {
		argNames: [ "listId", "parentContentTypeId", "includeNoContentTypeSpecified" ],
	},
	enumerateSubscriptionsByListWithContentType: IMapper & {
		argNames: [ "listId", "includeContentTypeSpecified" ],
	},
	getSubscription: IMapper & {
		argNames: [ "subscriptionId" ],
	},
	registerInterestInHostWebList: IMapper & {
		argNames: [ "listId", "eventName" ],
	},
	registerInterestInList: IMapper & {
		argNames: [ "listId", "eventName" ],
	},
	unregisterInterestInHostWebList: IMapper & {
		argNames: [ "listId", "eventName" ],
	},
	unregisterInterestInList: IMapper & {
		argNames: [ "listId", "eventName" ],
	},
};
