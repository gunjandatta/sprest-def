
/* SP_Site */
export interface SP_Site {
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
};

/* SP_Audit */
export interface SP_Audit {
	update: { 

	},
};

/* SP_ScriptSafeDomain */
export interface SP_ScriptSafeDomain {
	deleteObject: { 

	},
};

/* SP_ScriptSafeDomain_Collection */
export interface SP_ScriptSafeDomain_Collection {
	create: { 
		argNames: [ "parameters" ],
	},
	getByDomainName: { 
		argNames: [ "domainName" ],
	},
};

/* SP_EventReceiverDefinition_Collection */
export interface SP_EventReceiverDefinition_Collection {
	add: { 
		argNames: [ "eventReceiverCreationInformation" ],
	},
	getById: { 
		argNames: [ "eventReceiverId" ],
	},
};

/* SP_EventReceiverDefinition */
export interface SP_EventReceiverDefinition {
	deleteObject: { 

	},
	update: { 

	},
};

/* SP_Feature_Collection */
export interface SP_Feature_Collection {
	add: { 
		argNames: [ "featureId", "force", "featdefScope" ],
	},
	getById: { 
		argNames: [ "featureId" ],
	},
	remove: { 
		argNames: [ "featureId", "force" ],
	},
};

/* SP_User_Collection */
export interface SP_User_Collection {
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
};

/* SP_User */
export interface SP_User {
	add: { 
		argNames: [ "properties" ],
	},
	update: { 
		argNames: [ "properties" ],
	},
};

/* SP_Alert_Collection */
export interface SP_Alert_Collection {
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
};

/* SP_Alert */
export interface SP_Alert {
	updateAlert: { 

	},
};

/* SP_SecurableObject */
export interface SP_SecurableObject {
	breakRoleInheritance: { 
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: { 

	},
};

/* SP_RoleAssignment_Collection */
export interface SP_RoleAssignment_Collection {
	addRoleAssignment: { 
		argNames: [ "principalId", "roleDefId" ],
	},
	getByPrincipalId: { 
		argNames: [ "principalId" ],
	},
	removeRoleAssignment: { 
		argNames: [ "principalId", "roleDefId" ],
	},
};

/* SP_RoleAssignment */
export interface SP_RoleAssignment {
	deleteObject: { 

	},
	update: { 
		argNames: [ "properties" ],
	},
};

/* SP_RoleDefinition_Collection */
export interface SP_RoleDefinition_Collection {
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
};

/* SP_RoleDefinition */
export interface SP_RoleDefinition {
	deleteObject: { 

	},
	update: { 
		argNames: [ "properties" ],
	},
};

/* SP_ListItem_Collection */
export interface SP_ListItem_Collection {
	getById: { 
		argNames: [ "itemId" ],
	},
	getByStringId: { 
		argNames: [ "sId" ],
	},
	add: { 
		argNames: [ "parameters" ],
	},
};

/* SP_ListItem */
export interface SP_ListItem {
	breakRoleInheritance: { 
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: { 

	},
	deleteObject: { 

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
};

/* SP_Attachment */
export interface SP_Attachment {
	deleteObject: { 

	},
	recycleObject: { 

	},
};

/* SP_Attachment_Collection */
export interface SP_Attachment_Collection {
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
};

/* SP_ContentType_Collection */
export interface SP_ContentType_Collection {
	addAvailableContentType: { 
		argNames: [ "contentTypeId" ],
	},
	getById: { 
		argNames: [ "contentTypeId" ],
	},
	add: { 
		argNames: [ "parameters" ],
	},
};

/* SP_ContentType */
export interface SP_ContentType {
	deleteObject: { 

	},
	update: { 
		argNames: [ "properties" ],
	},
};

/* SP_UserResource */
export interface SP_UserResource {
	getValueForUICulture: { 
		argNames: [ "cultureName" ],
	},
	setValueForUICulture: { 
		argNames: [ "cultureName", "value" ],
	},
};

/* SP_FieldLink_Collection */
export interface SP_FieldLink_Collection {
	getById: { 
		argNames: [ "id" ],
	},
	reorder: { 
		argNames: [ "internalNames" ],
	},
	add: { 
		argNames: [ "parameters" ],
	},
};

/* SP_FieldLink */
export interface SP_FieldLink {
	deleteObject: { 

	},
};

/* SP_Field */
export interface SP_Field {
	deleteObject: { 

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
};

/* SP_Field_Collection */
export interface SP_Field_Collection {
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
};

/* SP_File_Collection */
export interface SP_File_Collection {
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
};

/* SP_File */
export interface SP_File {
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
	deleteObject: { 

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
};

/* SP_InformationRightsManagementFileSettings */
export interface SP_InformationRightsManagementFileSettings {
	reset: { 

	},
	update: { 

	},
};

/* SP_FileVersion_Collection */
export interface SP_FileVersion_Collection {
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
};

/* SP_FileVersion */
export interface SP_FileVersion {
	deleteObject: { 

	},
	openBinaryStream: { 

	},
};

/* SP_Folder_Collection */
export interface SP_Folder_Collection {
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
};

/* SP_Folder */
export interface SP_Folder {
	addSubFolder: { 
		argNames: [ "leafName" ],
	},
	addSubFolderUsingPath: { 
		argNames: [ "DecodedUrl" ],
	},
	deleteObject: { 

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
};

/* SP_List */
export interface SP_List {
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
	deleteObject: { 

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
};

/* SP_List_Collection */
export interface SP_List_Collection {
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
};

/* SP_View_Collection */
export interface SP_View_Collection {
	getById: { 
		argNames: [ "guidId" ],
	},
	getByTitle: { 
		argNames: [ "strTitle" ],
	},
	add: { 
		argNames: [ "properties" ],
	},
};

/* SP_View */
export interface SP_View {
	addToSpotlight: { 
		argNames: [ "itemId", "folderPath", "afterItemId" ],
	},
	deleteObject: { 

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
};

/* SP_ViewFieldCollection */
export interface SP_ViewFieldCollection {
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
};

/* SP_Form_Collection */
export interface SP_Form_Collection {
	getById: { 
		argNames: [ "id" ],
	},
	getByPageType: { 
		argNames: [ "formType" ],
	},
};

/* SP_InformationRightsManagementSettings */
export interface SP_InformationRightsManagementSettings {
	reset: { 

	},
	update: { 

	},
};

/* SP_Web_Collection */
export interface SP_Web_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
};

/* SP_Web */
export interface SP_Web {
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
	deleteObject: { 

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
};

/* SP_Group_Collection */
export interface SP_Group_Collection {
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
};

/* SP_Group */
export interface SP_Group {
	setUserAsOwner: { 
		argNames: [ "ownerId" ],
	},
	update: { 

	},
};

/* SP_ClientWebPart_Collection */
export interface SP_ClientWebPart_Collection {
	getById: { 
		argNames: [ "id" ],
	},
};

/* SP_ClientWebPart */
export interface SP_ClientWebPart {
	render: { 
		argNames: [ "properties" ],
	},
};

/* SP_ListTemplate_Collection */
export interface SP_ListTemplate_Collection {
	getByName: { 
		argNames: [ "name" ],
	},
};

/* SP_ListTemplate */
export interface SP_ListTemplate {
	getGlobalSchemaXml: { 

	},
};

/* SP_Navigation */
export interface SP_Navigation {
	getNodeById: { 
		argNames: [ "id" ],
	},
};

/* SP_NavigationNode_Collection */
export interface SP_NavigationNode_Collection {
	getById: { 
		argNames: [ "id" ],
	},
	getByIndex: { 
		argNames: [ "index" ],
	},
	moveAfter: { 
		argNames: [ "nodeId", "previousNodeId" ],
	},
};

/* SP_NavigationNode */
export interface SP_NavigationNode {
	deleteObject: { 

	},
	update: { 

	},
};

/* SP_WebInformation_Collection */
export interface SP_WebInformation_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getById: { 
		argNames: [ "id" ],
	},
};

/* SP_PushNotificationSubscriber_Collection */
export interface SP_PushNotificationSubscriber_Collection {
	getByStoreId: { 
		argNames: [ "id" ],
	},
};

/* SP_PushNotificationSubscriber */
export interface SP_PushNotificationSubscriber {
	update: { 

	},
};

/* SP_RecycleBinItem_Collection */
export interface SP_RecycleBinItem_Collection {
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
};

/* SP_RecycleBinItem */
export interface SP_RecycleBinItem {
	deleteObject: { 

	},
	moveToSecondStage: { 

	},
	restore: { 

	},
};

/* SP_RegionalSettings */
export interface SP_RegionalSettings {
	update: { 

	},
};

/* SP_LanguageCollection */
export interface SP_LanguageCollection {
	getById: { 
		argNames: [ "id" ],
	},
};

/* SP_TimeZone_Collection */
export interface SP_TimeZone_Collection {
	getById: { 
		argNames: [ "id" ],
	},
};

/* SP_TimeZone */
export interface SP_TimeZone {
	localTimeToUTC: { 
		argNames: [ "date" ],
	},
	uTCToLocalTime: { 
		argNames: [ "date" ],
	},
};

/* SP_ThemeInfo */
export interface SP_ThemeInfo {
	getThemeFontByName: { 
		argNames: [ "name", "lcid" ],
	},
	getThemeShadeByName: { 
		argNames: [ "name" ],
	},
};

/* SP_UserCustomAction_Collection */
export interface SP_UserCustomAction_Collection {
	clear: { 

	},
	getById: { 
		argNames: [ "id" ],
	},
	add: { 
		argNames: [ "properties" ],
	},
};

/* SP_UserCustomAction */
export interface SP_UserCustomAction {
	deleteObject: { 

	},
	update: { 
		argNames: [ "properties" ],
	},
};

/* SP_ListItemVersion_Collection */
export interface SP_ListItemVersion_Collection {
	getById: { 
		argNames: [ "versionId" ],
	},
};

/* SP_ListItemVersion */
export interface SP_ListItemVersion {
	deleteObject: { 

	},
};

/* SP_SPAppLicenseManager */
export interface SP_SPAppLicenseManager {
	checkLicense: { 
		argNames: [ "productId" ],
	},
};

/* SP_UserSolution_Collection */
export interface SP_UserSolution_Collection {
	add: { 
		argNames: [ "solutionGalleryItemId" ],
	},
};

/* SP_AppInstance */
export interface SP_AppInstance {
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
};

/* SP_ObjectSharingInformation */
export interface SP_ObjectSharingInformation {
	getSharedWithUsers: { 

	},
};

/* SP_CheckedOutFile_Collection */
export interface SP_CheckedOutFile_Collection {
	getByPath: { 
		argNames: [ "DecodedUrl" ],
	},
};

/* SP_CheckedOutFile */
export interface SP_CheckedOutFile {
	takeOverCheckOut: { 

	},
};

/* SP_RequestContext */
export interface SP_RequestContext {
	getRemoteContext: { 

	},
};

/* SP_FieldCalculated */
export interface SP_FieldCalculated {
	deleteObject: { 

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
};

/* SP_FieldMultiChoice */
export interface SP_FieldMultiChoice {
	deleteObject: { 

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
};

/* SP_FieldChoice */
export interface SP_FieldChoice {
	deleteObject: { 

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
};

/* SP_FieldComputed */
export interface SP_FieldComputed {
	deleteObject: { 

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
};

/* SP_FieldNumber */
export interface SP_FieldNumber {
	deleteObject: { 

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
};

/* SP_FieldCurrency */
export interface SP_FieldCurrency {
	deleteObject: { 

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
};

/* SP_FieldDateTime */
export interface SP_FieldDateTime {
	deleteObject: { 

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
};

/* SP_FieldGeolocation */
export interface SP_FieldGeolocation {
	deleteObject: { 

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
};

/* SP_FieldGuid */
export interface SP_FieldGuid {
	deleteObject: { 

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
};

/* SP_FieldMultiLineText */
export interface SP_FieldMultiLineText {
	deleteObject: { 

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
};

/* SP_FieldLocation */
export interface SP_FieldLocation {
	deleteObject: { 

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
};

/* SP_FieldLookup */
export interface SP_FieldLookup {
	deleteObject: { 

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
};

/* SP_FieldRatingScale */
export interface SP_FieldRatingScale {
	deleteObject: { 

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
};

/* SP_FieldText */
export interface SP_FieldText {
	deleteObject: { 

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
};

/* SP_FieldUrl */
export interface SP_FieldUrl {
	deleteObject: { 

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
};

/* SP_FieldUser */
export interface SP_FieldUser {
	deleteObject: { 

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
};

/* SP_HubSite_Collection */
export interface SP_HubSite_Collection {
	getById: { 
		argNames: [ "hubSiteId" ],
	},
};

/* SP_HubSite */
export interface SP_HubSite {
	delete: { 

	},
};

/* SP_RelatedField_Collection */
export interface SP_RelatedField_Collection {
	getByFieldId: { 
		argNames: [ "fieldId" ],
	},
};

/* SP_RemoteWeb */
export interface SP_RemoteWeb {
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
};

/* SP_WebTemplate_Collection */
export interface SP_WebTemplate_Collection {
	getByName: { 
		argNames: [ "name" ],
	},
};

/* SP_Directory_DirectorySession */
export interface SP_Directory_DirectorySession {
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
};

/* SP_Directory_Group_Collection */
export interface SP_Directory_Group_Collection {
	add: { 
		argNames: [ "objectId" ],
	},
	remove: { 
		argNames: [ "objectId" ],
	},
};

/* SP_Directory_Group */
export interface SP_Directory_Group {
	delete: { 

	},
};

/* SP_Directory_User_Collection */
export interface SP_Directory_User_Collection {
	add: { 
		argNames: [ "objectId", "principalName" ],
	},
	remove: { 
		argNames: [ "objectId" ],
	},
};

/* SP_Directory_User */
export interface SP_Directory_User {
	getUserLinks: { 
		argNames: [ "linkName", "groupType" ],
	},
};

/* SP_CompliancePolicy_SPPolicyStoreProxy */
export interface SP_CompliancePolicy_SPPolicyStoreProxy {
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
};


/* MS_FileServices_FileSystemItem_Collection */
export interface MS_FileServices_FileSystemItem_Collection {
	add: { 
		argNames: [ "name", "overwrite", "content" ],
	},
	getById: { 
		argNames: [ "id" ],
	},
};

/* MS_FileServices_File */
export interface MS_FileServices_File {
	copyTo: { 
		argNames: [ "target", "overwrite" ],
	},
	deleteObject: { 

	},
	download: { 

	},
	moveTo: { 
		argNames: [ "target", "overwrite" ],
	},
	upload: { 
		argNames: [ "stream" ],
	},
};

/* MS_FileServices_Folder */
export interface MS_FileServices_Folder {
	deleteObject: { 

	},
	moveTo: { 
		argNames: [ "target" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation_Collection {
	getByLocation: { 
		argNames: [ "location" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation {
	deleteObject: { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmGroupMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmGroupMoveJob_Collection {
	getByMoveId: { 
		argNames: [ "moveId" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmGroupMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmGroupMoveJob {
	update: { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmSiteMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmSiteMoveJob_Collection {
	getByMoveId: { 
		argNames: [ "moveId" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmSiteMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmSiteMoveJob {
	update: { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmUserMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmUserMoveJob_Collection {
	getByMoveId: { 
		argNames: [ "moveId" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmUserMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmUserMoveJob {
	update: { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantProperty_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantProperty_Collection {
	getByPropertyNameAndGeoLocation: { 
		argNames: [ "propertyName", "geo" ],
	},
	getChanges: { 
		argNames: [ "startTimeInUtc" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantProperty */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantProperty {
	deleteObject: { 

	},
	update: { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_GeoAdministrator_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GeoAdministrator_Collection {
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
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_GeoAdministrator */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GeoAdministrator {
	deleteObject: { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_GeoExperience */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GeoExperience {
	upgradeAllInstancesToSPOMode: { 

	},
	upgradeToSPOMode: { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_GeoTenantInstanceInformation_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GeoTenantInstanceInformation_Collection {
	getByGeoLocation: { 
		argNames: [ "geoLocation" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob_Collection {
	getByGroupName: { 
		argNames: [ "groupname" ],
	},
	getMoveReport: { 
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob {
	cancel: { 

	},
	deleteObject: { 

	},
	update: { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta {
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
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob_Collection {
	getByUrl: { 
		argNames: [ "url" ],
	},
	getMoveReport: { 
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob {
	cancel: { 

	},
	deleteObject: { 

	},
	update: { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_SiteRenameJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_SiteRenameJob_Collection {
	getBySiteUrl: { 
		argNames: [ "siteUrl" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota_Collection {
	getByLocation: { 
		argNames: [ "geoLocation" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota {
	update: { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_TaxonomyReplicationParameters */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_TaxonomyReplicationParameters {
	update: { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_UnifiedGroup_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_UnifiedGroup_Collection {
	getByAlias: { 
		argNames: [ "alias" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_UserMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_UserMoveJob_Collection {
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
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_UserMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_UserMoveJob {
	cancel: { 

	},
	deleteObject: { 

	},
	update: { 

	},
};

/* SP_Directory_Provider_DirectoryNotification */
export interface SP_Directory_Provider_DirectoryNotification {
	notifyChanges: { 
		argNames: [ "directoryObjectChanges" ],
	},
};

/* SP_Directory_Provider_SharePointDirectoryProvider */
export interface SP_Directory_Provider_SharePointDirectoryProvider {
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
};

/* SP_Microfeed_MicrofeedPostDefinitionManager */
export interface SP_Microfeed_MicrofeedPostDefinitionManager {
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
};

/* SP_Microfeed_MicrofeedAttachmentStore */
export interface SP_Microfeed_MicrofeedAttachmentStore {
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
};

/* SP_Microfeed_MicrofeedData_Collection */
export interface SP_Microfeed_MicrofeedData_Collection {
	deleteAll: { 

	},
};

/* SP_Microfeed_MicrofeedData */
export interface SP_Microfeed_MicrofeedData {
	addAttachment: { 
		argNames: [ "name", "bytes" ],
	},
	systemUpdate: { 

	},
	update: { 

	},
};

/* SP_Microfeed_MicrofeedManager */
export interface SP_Microfeed_MicrofeedManager {
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
};

/* SP_Microfeed_MicrofeedStore */
export interface SP_Microfeed_MicrofeedStore {
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
};

/* SP_Social_SocialFeedManager */
export interface SP_Social_SocialFeedManager {
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
};

/* SP_Social_SocialFollowingManager */
export interface SP_Social_SocialFollowingManager {
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
};

/* SP_Social_SocialRestActor */
export interface SP_Social_SocialRestActor {
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
};

/* SP_Social_SocialRestFeedManager */
export interface SP_Social_SocialRestFeedManager {
	actor: { 
		argNames: [ "item" ],
	},
	my: { 

	},
	post: { 
		argNames: [ "ID" ],
	},
};

/* SP_Social_SocialRestFeed */
export interface SP_Social_SocialRestFeed {
	clearUnReadMentionCount: { 
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	post: { 
		argNames: [ "restCreationData" ],
	},
};

/* SP_Social_SocialRestFollowingManager */
export interface SP_Social_SocialRestFollowingManager {
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
};

/* SP_Social_SocialRestThread */
export interface SP_Social_SocialRestThread {
	delete: { 
		argNames: [ "ID" ],
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
};

/* SP_UserProfiles_FollowedContent */
export interface SP_UserProfiles_FollowedContent {
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
};

/* SP_UserProfiles_PeopleManager */
export interface SP_UserProfiles_PeopleManager {
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
};

/* SP_UserProfiles_PersonalCache */
export interface SP_UserProfiles_PersonalCache {
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
};

/* SP_UserProfiles_ProfileImageStore */
export interface SP_UserProfiles_ProfileImageStore {
	saveUploadedFile: { 
		argNames: [ "profileType", "fileNamePrefix", "isFeedAttachment", "clientFilePath", "fileSize", "fileStream" ],
	},
};

/* SP_UserProfiles_ProfileLoader */
export interface SP_UserProfiles_ProfileLoader {
	createPersonalSiteEnqueueBulk: { 
		argNames: [ "emailIDs" ],
	},
	getUserProfile: { 

	},
};

/* SP_UserProfiles_UserProfilePropertiesForUser */
export interface SP_UserProfiles_UserProfilePropertiesForUser {
	getPropertyNames: { 

	},
};

/* SP_UserProfiles_UserProfile */
export interface SP_UserProfiles_UserProfile {
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
};

/* PS_CustomField_Collection */
export interface PS_CustomField_Collection {
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
};

/* PS_CustomField */
export interface PS_CustomField {
	deleteObject: { 

	},
};

/* PS_LookupEntry */
export interface PS_LookupEntry {
	deleteObject: { 

	},
};

/* PS_LookupEntry_Collection */
export interface PS_LookupEntry_Collection {
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
};

/* PS_LookupTable_Collection */
export interface PS_LookupTable_Collection {
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
};

/* PS_LookupTable */
export interface PS_LookupTable {
	addMask: { 
		argNames: [ "mask" ],
	},
	deleteObject: { 

	},
	updateMask: { 
		argNames: [ "mask", "level" ],
	},
};

/* PS_CalendarException */
export interface PS_CalendarException {
	deleteObject: { 

	},
};

/* PS_CalendarException_Collection */
export interface PS_CalendarException_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getById: { 
		argNames: [ "id" ],
	},
};

/* PS_Calendar_Collection */
export interface PS_Calendar_Collection {
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
};

/* PS_Calendar */
export interface PS_Calendar {
	copyTo: { 
		argNames: [ "name" ],
	},
	deleteObject: { 

	},
};

/* PS_BaseCalendarException */
export interface PS_BaseCalendarException {
	deleteObject: { 

	},
};

/* PS_DraftAssignment */
export interface PS_DraftAssignment {
	deleteObject: { 

	},
};

/* PS_DraftAssignment_Collection */
export interface PS_DraftAssignment_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_EnterpriseResource_Collection */
export interface PS_EnterpriseResource_Collection {
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
};

/* PS_EnterpriseResource */
export interface PS_EnterpriseResource {
	deleteObject: { 

	},
	forceCheckIn: { 

	},
	updateClaimsAccount: { 
		argNames: [ "newClaimsAccount" ],
	},
};

/* PS_StatusAssignment_Collection */
export interface PS_StatusAssignment_Collection {
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
};

/* PS_StatusAssignment */
export interface PS_StatusAssignment {
	deleteObject: { 

	},
	submitStatusUpdates: { 
		argNames: [ "comment" ],
	},
};

/* PS_StatusAssignmentHistoryLine_Collection */
export interface PS_StatusAssignmentHistoryLine_Collection {
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_Project */
export interface PS_Project {
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
};

/* PS_EngagementComment_Collection */
export interface PS_EngagementComment_Collection {
	add: { 
		argNames: [ "comment" ],
	},
};

/* PS_ProjectEngagement_Collection */
export interface PS_ProjectEngagement_Collection {
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
};

/* PS_ProjectEngagement */
export interface PS_ProjectEngagement {
	deleteObject: { 

	},
	getTimephasedByUrl: { 
		argNames: [ "start", "end", "scale", "contourType" ],
	},
};

/* PS_EnterpriseProjectType_Collection */
export interface PS_EnterpriseProjectType_Collection {
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
};

/* PS_EnterpriseProjectType */
export interface PS_EnterpriseProjectType {
	addDepartment: { 
		argNames: [ "departmentValueGuid" ],
	},
	deleteObject: { 

	},
	removeDepartment: { 
		argNames: [ "departmentValueGuid" ],
	},
	updateCreatePDP: { 
		argNames: [ "pdp" ],
	},
};

/* PS_ProjectDetailPage_Collection */
export interface PS_ProjectDetailPage_Collection {
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_Phase_Collection */
export interface PS_Phase_Collection {
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
};

/* PS_Phase */
export interface PS_Phase {
	deleteObject: { 

	},
};

/* PS_Stage_Collection */
export interface PS_Stage_Collection {
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
};

/* PS_Stage */
export interface PS_Stage {
	deleteObject: { 

	},
};

/* PS_StageCustomField_Collection */
export interface PS_StageCustomField_Collection {
	add: { 
		argNames: [ "creationInfo" ],
	},
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_StageCustomField */
export interface PS_StageCustomField {
	deleteObject: { 

	},
};

/* PS_StageDetailPage_Collection */
export interface PS_StageDetailPage_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_StageDetailPage */
export interface PS_StageDetailPage {
	deleteObject: { 

	},
};

/* PS_PublishedProject_Collection */
export interface PS_PublishedProject_Collection {
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
};

/* PS_PublishedProject */
export interface PS_PublishedProject {
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
	deleteObject: { 

	},
	submitToWorkflow: { 

	},
	updateVisibilityCustomFields: { 

	},
};

/* PS_PublishedAssignment_Collection */
export interface PS_PublishedAssignment_Collection {
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_PublishedProjectResource_Collection */
export interface PS_PublishedProjectResource_Collection {
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_PublishedTask_Collection */
export interface PS_PublishedTask_Collection {
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_PublishedTask */
export interface PS_PublishedTask {
	addTaskPlanLink: { 
		argNames: [ "parameters" ],
	},
	deleteTaskPlanLink: { 

	},
};

/* PS_EntityLink_Collection */
export interface PS_EntityLink_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getByGuid: { 
		argNames: [ "id" ],
	},
	update: { 

	},
};

/* PS_EntityLink */
export interface PS_EntityLink {
	deleteObject: { 

	},
};

/* PS_PublishedTaskLink_Collection */
export interface PS_PublishedTaskLink_Collection {
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_TaskPlanLink */
export interface PS_TaskPlanLink {
	deleteObject: { 

	},
};

/* PS_DraftProject */
export interface PS_DraftProject {
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
};

/* PS_DraftProjectResource */
export interface PS_DraftProjectResource {
	deleteObject: { 

	},
};

/* PS_DraftProjectResource_Collection */
export interface PS_DraftProjectResource_Collection {
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
};

/* PS_DraftTaskLink */
export interface PS_DraftTaskLink {
	deleteObject: { 

	},
};

/* PS_DraftTaskLink_Collection */
export interface PS_DraftTaskLink_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_DraftTask */
export interface PS_DraftTask {
	deleteObject: { 

	},
};

/* PS_DraftTask_Collection */
export interface PS_DraftTask_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_ProjectWorkflowInstance_Collection */
export interface PS_ProjectWorkflowInstance_Collection {
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_ProjectWorkflowInstance */
export interface PS_ProjectWorkflowInstance {
	restartWorkflow: { 

	},
	restartWorkflowSkipToStage: { 
		argNames: [ "stageId" ],
	},
};

/* PS_QueueJob_Collection */
export interface PS_QueueJob_Collection {
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_QueueJob */
export interface PS_QueueJob {
	cancel: { 

	},
};

/* PS_EnterpriseResourceCostRate_Collection */
export interface PS_EnterpriseResourceCostRate_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getByDateUrl: { 
		argNames: [ "effectiveDate" ],
	},
};

/* PS_EnterpriseResourceCostRate */
export interface PS_EnterpriseResourceCostRate {
	restfulDelete: { 

	},
	rESTfulUpdate: { 

	},
};

/* PS_ResourceEngagement_Collection */
export interface PS_ResourceEngagement_Collection {
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
	update: { 

	},
};

/* PS_ResourceEngagement */
export interface PS_ResourceEngagement {
	deleteObject: { 

	},
	getTimephasedByUrl: { 
		argNames: [ "start", "end", "scale", "contourType" ],
	},
};

/* PS_Event_Collection */
export interface PS_Event_Collection {
	getById: { 
		argNames: [ "objectId" ],
	},
	getByInt: { 
		argNames: [ "id" ],
	},
};

/* PS_EventHandler_Collection */
export interface PS_EventHandler_Collection {
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
};

/* PS_EventHandler */
export interface PS_EventHandler {
	deleteObject: { 

	},
};

/* PS_LookupCost */
export interface PS_LookupCost {
	deleteObject: { 

	},
};

/* PS_LookupDate */
export interface PS_LookupDate {
	deleteObject: { 

	},
};

/* PS_LookupDuration */
export interface PS_LookupDuration {
	deleteObject: { 

	},
};

/* PS_LookupNumber */
export interface PS_LookupNumber {
	deleteObject: { 

	},
};

/* PS_LookupText */
export interface PS_LookupText {
	deleteObject: { 

	},
};

/* PS_PlanAssignment_Collection */
export interface PS_PlanAssignment_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_PlanAssignment */
export interface PS_PlanAssignment {
	deleteObject: { 

	},
};

/* PS_PlanAssignmentInterval_Collection */
export interface PS_PlanAssignmentInterval_Collection {
	getById: { 
		argNames: [ "id" ],
	},
	getByStart: { 
		argNames: [ "start" ],
	},
};

/* PS_ProjectEngagementTimephasedPeriod_Collection */
export interface PS_ProjectEngagementTimephasedPeriod_Collection {
	getByStartUrl: { 
		argNames: [ "start" ],
	},
};

/* PS_ProjectServer */
export interface PS_ProjectServer {
	getDeletedPublishedAssignments: { 
		argNames: [ "deletedDate" ],
	},
	stopDelegation: { 

	},
};

/* PS_TimeSheetPeriod_Collection */
export interface PS_TimeSheetPeriod_Collection {
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_TimeSheetPeriod */
export interface PS_TimeSheetPeriod {
	createTimeSheet: { 

	},
};

/* PS_TimeSheet */
export interface PS_TimeSheet {
	deleteObject: { 

	},
	recall: { 

	},
	submit: { 
		argNames: [ "comment" ],
	},
	update: { 

	},
};

/* PS_TimeSheetLine_Collection */
export interface PS_TimeSheetLine_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getByGuid: { 
		argNames: [ "uid" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_TimeSheetLine */
export interface PS_TimeSheetLine {
	deleteObject: { 

	},
	submit: { 
		argNames: [ "comment" ],
	},
};

/* PS_TimeSheetWork_Collection */
export interface PS_TimeSheetWork_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getById: { 
		argNames: [ "objectId" ],
	},
	getByStartDate: { 
		argNames: [ "start" ],
	},
};

/* PS_TimeSheetWork */
export interface PS_TimeSheetWork {
	deleteObject: { 

	},
};

/* PS_WorkflowActivities */
export interface PS_WorkflowActivities {
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
};

/* PS_WorkflowDesignerField_Collection */
export interface PS_WorkflowDesignerField_Collection {
	getById: { 
		argNames: [ "objectId" ],
	},
};

/* PS_ResourceCalendarException */
export interface PS_ResourceCalendarException {
	deleteObject: { 

	},
};

/* PS_ResourceEngagementTimephasedPeriod_Collection */
export interface PS_ResourceEngagementTimephasedPeriod_Collection {
	getByStartUrl: { 
		argNames: [ "start" ],
	},
};

/* PS_ResourcePlan */
export interface PS_ResourcePlan {
	deleteObject: { 

	},
	forceCheckIn: { 

	},
	publish: { 

	},
	update: { 

	},
};

/* PS_ServiceStatus */
export interface PS_ServiceStatus {
	stopDelegation: { 

	},
};

/* SP_Publishing_CommunicationSite */
export interface SP_Publishing_CommunicationSite {
	create: { 
		argNames: [ "request" ],
	},
	status: { 
		argNames: [ "url" ],
	},
};

/* SP_Publishing_EmbedService */
export interface SP_Publishing_EmbedService {
	embedData: { 
		argNames: [ "url", "version" ],
	},
};

/* SP_Publishing_VideoItem */
export interface SP_Publishing_VideoItem {
	customThumbnail: { 

	},
	deleteObject: { 

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
};

/* SP_Publishing_VideoItem_Collection */
export interface SP_Publishing_VideoItem_Collection {
	getById: { 
		argNames: [ "id" ],
	},
};

/* SP_Publishing_PointPublishingPost_Collection */
export interface SP_Publishing_PointPublishingPost_Collection {
	getById: { 
		argNames: [ "id", "publishedOnly" ],
	},
	getByName: { 
		argNames: [ "name", "publishedOnly" ],
	},
};

/* SP_Publishing_PointPublishingPost */
export interface SP_Publishing_PointPublishingPost {
	addImageFromUrl: { 
		argNames: [ "fromImageUrl" ],
	},
	deleteObject: { 

	},
};

/* SP_Publishing_PointPublishingPostServiceManager */
export interface SP_Publishing_PointPublishingPostServiceManager {
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
};

/* SP_Publishing_PointPublishingUser_Collection */
export interface SP_Publishing_PointPublishingUser_Collection {
	addOrUpdateUser: { 
		argNames: [ "loginName", "isOwner" ],
	},
	getById: { 
		argNames: [ "userId" ],
	},
};

/* SP_Publishing_PointPublishingUser */
export interface SP_Publishing_PointPublishingUser {
	deleteUserFromContainerGroup: { 

	},
};

/* SP_Publishing_PointPublishingSiteManager */
export interface SP_Publishing_PointPublishingSiteManager {
	create: { 
		argNames: [ "siteInfo" ],
	},
	getSiteStatus: { 
		argNames: [ "siteInfo" ],
	},
};

/* SP_Publishing_PointPublishingTenantManager */
export interface SP_Publishing_PointPublishingTenantManager {
	isBlogEnabled: { 

	},
};

/* SP_Publishing_SitePageMetadata_Collection */
export interface SP_Publishing_SitePageMetadata_Collection {
	getById: { 
		argNames: [ "id" ],
	},
};

/* SP_Publishing_SitePage */
export interface SP_Publishing_SitePage {
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
};

/* SP_Publishing_SitePage_Collection */
export interface SP_Publishing_SitePage_Collection {
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
};

/* SP_Publishing_RepostPage_Collection */
export interface SP_Publishing_RepostPage_Collection {
	isContentTypeAvailable: { 

	},
};

/* SP_Publishing_RepostPage */
export interface SP_Publishing_RepostPage {
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
};

/* SP_Publishing_RichSharing */
export interface SP_Publishing_RichSharing {
	sharePageByEmail: { 
		argNames: [ "url", "message", "recipientEmails" ],
	},
	shareSiteByEmail: { 
		argNames: [ "CustomDescription", "CustomTitle", "Message", "Url", "recipientEmails" ],
	},
};

/* SP_Publishing_SharePointHomeServiceManager */
export interface SP_Publishing_SharePointHomeServiceManager {
	getAcronymsAndColors: { 
		argNames: [ "labels" ],
	},
};

/* SP_Publishing_SitePageService */
export interface SP_Publishing_SitePageService {
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
};

/* SP_Publishing_SpotlightChannel_Collection */
export interface SP_Publishing_SpotlightChannel_Collection {
	getById: { 
		argNames: [ "id" ],
	},
};

/* SP_Publishing_SpotlightChannel */
export interface SP_Publishing_SpotlightChannel {
	deleteObject: { 

	},
	update: { 

	},
};

/* SP_Publishing_VideoChannel_Collection */
export interface SP_Publishing_VideoChannel_Collection {
	getById: { 
		argNames: [ "id" ],
	},
};

/* SP_Publishing_VideoChannel */
export interface SP_Publishing_VideoChannel {
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
};

/* SP_Publishing_Search */
export interface SP_Publishing_Search {
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
};

/* SP_Publishing_SpotlightVideo_Collection */
export interface SP_Publishing_SpotlightVideo_Collection {
	getById: { 
		argNames: [ "id" ],
	},
};

/* SP_Publishing_SpotlightVideo */
export interface SP_Publishing_SpotlightVideo {
	deleteObject: { 

	},
	update: { 

	},
};

/* SP_Publishing_SubtitleFile_Collection */
export interface SP_Publishing_SubtitleFile_Collection {
	add: { 
		argNames: [ "language", "extension", "stream" ],
	},
	getSubtitleFile: { 
		argNames: [ "name" ],
	},
	remove: { 
		argNames: [ "name" ],
	},
};

/* SP_Publishing_VideoPermissionGroup */
export interface SP_Publishing_VideoPermissionGroup {
	hasCurrentUser: { 

	},
};

/* SP_Publishing_VideoServiceManager */
export interface SP_Publishing_VideoServiceManager {
	getChannels: { 
		argNames: [ "startIndex", "limit" ],
	},
	getPermissionGroup: { 
		argNames: [ "permission" ],
	},
};

/* SP_Publishing_VideoThumbnail_Collection */
export interface SP_Publishing_VideoThumbnail_Collection {
	getByIndex: { 
		argNames: [ "choice" ],
	},
};

/* Microsoft_SharePoint_Client_Search_Query_StringCollection */
export interface Microsoft_SharePoint_Client_Search_Query_StringCollection {
	add: { 
		argNames: [ "property" ],
	},
	clear: { 

	},
};

/* Microsoft_SharePoint_Client_Search_Query_RankingLabeling */
export interface Microsoft_SharePoint_Client_Search_Query_RankingLabeling {
	addJudgment: { 
		argNames: [ "userQuery", "url", "labelId" ],
	},
	getJudgementsForQuery: { 
		argNames: [ "query" ],
	},
	normalizeResultUrl: { 
		argNames: [ "url" ],
	},
};

/* Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection */
export interface Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection {
	add: { 
		argNames: [ "matchType", "matchValue", "boost" ],
	},
	clear: { 

	},
};

/* Microsoft_SharePoint_Client_Search_Query_SortCollection */
export interface Microsoft_SharePoint_Client_Search_Query_SortCollection {
	add: { 
		argNames: [ "strProperty", "direction" ],
	},
	clear: { 

	},
};

/* Microsoft_Office_Server_Search_REST_SearchService */
export interface Microsoft_Office_Server_Search_REST_SearchService {
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
};

/* Microsoft_Office_Server_Search_REST_SearchSetting */
export interface Microsoft_Office_Server_Search_REST_SearchSetting {
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
};

/* Microsoft_SharePoint_Client_Search_Analytics_SignalStore */
export interface Microsoft_SharePoint_Client_Search_Analytics_SignalStore {
	signals: { 
		argNames: [ "signals" ],
	},
};


/* Microsoft_SharePoint_Portal_GroupService */
export interface Microsoft_SharePoint_Portal_GroupService {
	getGroupImage: { 
		argNames: [ "id", "hash", "color" ],
	},
	setGroupImage: { 
		argNames: [ "imageStream" ],
	},
	syncGroupProperties: { 

	},
};

/* Microsoft_SharePoint_Portal_GroupSiteManager */
export interface Microsoft_SharePoint_Portal_GroupSiteManager {
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
};

/* Microsoft_SharePoint_Portal_SiteLinkingManager */
export interface Microsoft_SharePoint_Portal_SiteLinkingManager {
	getSiteLinks: { 

	},
	linkGroup: { 
		argNames: [ "groupId" ],
	},
	unlinkGroup: { 
		argNames: [ "groupId" ],
	},
};

/* Microsoft_SharePoint_Portal_SharePointHomeServiceContextBuilder */
export interface Microsoft_SharePoint_Portal_SharePointHomeServiceContextBuilder {
	context: { 

	},
};

/* Microsoft_SharePoint_Portal_SPHubSitesUtility */
export interface Microsoft_SharePoint_Portal_SPHubSitesUtility {
	getHubSites: { 

	},
};

/* Microsoft_SharePoint_Portal_SPSiteManager */
export interface Microsoft_SharePoint_Portal_SPSiteManager {
	canCreateHubJoinedSite: { 
		argNames: [ "hubSiteId" ],
	},
	create: { 
		argNames: [ "request" ],
	},
	delete: { 
		argNames: [ "siteId" ],
	},
	status: { 
		argNames: [ "url" ],
	},
};






/* Microsoft_SharePoint_Administration_SPAppStateQueryJobDefinition */
export interface Microsoft_SharePoint_Administration_SPAppStateQueryJobDefinition {
	performFastRevokeWithClientIds: { 

	},
};

/* Microsoft_SharePoint_Administration_FeatureDefinition_Collection */
export interface Microsoft_SharePoint_Administration_FeatureDefinition_Collection {
	getFeatureDefinition: { 
		argNames: [ "featureDisplayName", "compatibilityLevel" ],
	},
};

/* Microsoft_SharePoint_Administration_SPAnalyticsUsageService */
export interface Microsoft_SharePoint_Administration_SPAnalyticsUsageService {
	logevent: { 
		argNames: [ "usageEntry" ],
	},
};

/* Microsoft_SharePoint_ClientSideComponent_HostedAppsManager */
export interface Microsoft_SharePoint_ClientSideComponent_HostedAppsManager {
	add: { 
		argNames: [ "webPartDataAsJson", "hostType" ],
	},
	getById: { 
		argNames: [ "id" ],
	},
};

/* Microsoft_SharePoint_ClientSideComponent_HostedApp */
export interface Microsoft_SharePoint_ClientSideComponent_HostedApp {
	delete: { 

	},
	updateWebPartData: { 
		argNames: [ "webPartDataAsJson" ],
	},
};


/* Microsoft_SharePoint_Comments_comment */
export interface Microsoft_SharePoint_Comments_comment {
	like: { 

	},
	unlike: { 

	},
};

/* Microsoft_SharePoint_Comments_comment_Collection */
export interface Microsoft_SharePoint_Comments_comment_Collection {
	deleteAll: { 

	},
};


/* Microsoft_SharePoint_Internal_ActivityLogger */
export interface Microsoft_SharePoint_Internal_ActivityLogger {
	feedbackDirect: { 
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json" ],
	},
	feedbackIndirect: { 
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json" ],
	},
	logActivity: { 
		argNames: [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType" ],
	},
};

/* SP_MicroService_MicroServiceManager */
export interface SP_MicroService_MicroServiceManager {
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
};

/* Microsoft_SharePoint_OrgNewsSite_OrgNewsSiteApi */
export interface Microsoft_SharePoint_OrgNewsSite_OrgNewsSiteApi {
	details: { 

	},
};





/* SP_Utilities_ThemeManager */
export interface SP_Utilities_ThemeManager {
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
};

/* SP_WebParts_LimitedWebPartManager */
export interface SP_WebParts_LimitedWebPartManager {
	exportWebPart: { 
		argNames: [ "webPartId" ],
	},
	importWebPart: { 
		argNames: [ "webPartXml" ],
	},
};

/* SP_WebParts_WebPartDefinition_Collection */
export interface SP_WebParts_WebPartDefinition_Collection {
	getByControlId: { 
		argNames: [ "controlId" ],
	},
	getById: { 
		argNames: [ "id" ],
	},
};

/* SP_WebParts_WebPartDefinition */
export interface SP_WebParts_WebPartDefinition {
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
};

/* SP_Workflow_WorkflowAssociation_Collection */
export interface SP_Workflow_WorkflowAssociation_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getById: { 
		argNames: [ "associationId" ],
	},
	getByName: { 
		argNames: [ "name" ],
	},
};

/* SP_Workflow_WorkflowAssociation */
export interface SP_Workflow_WorkflowAssociation {
	deleteObject: { 

	},
	update: { 

	},
};

/* SP_Workflow_WorkflowTemplate_Collection */
export interface SP_Workflow_WorkflowTemplate_Collection {
	getById: { 
		argNames: [ "templateId" ],
	},
	getByName: { 
		argNames: [ "name" ],
	},
};

/* SP_Workflow_SPWorkflowTask */
export interface SP_Workflow_SPWorkflowTask {
	breakRoleInheritance: { 
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: { 

	},
	deleteObject: { 

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
};

/* Microsoft_SharePoint_TenantCdn_TenantCdnApi */
export interface Microsoft_SharePoint_TenantCdn_TenantCdnApi {
	getCdnUrls: { 
		argNames: [ "items" ],
	},
};



/* Microsoft_SharePoint_Webhooks_Subscription_Collection */
export interface Microsoft_SharePoint_Webhooks_Subscription_Collection {
	add: { 
		argNames: [ "parameters" ],
	},
	getById: { 
		argNames: [ "id" ],
	},
	remove: { 
		argNames: [ "subscriptionId" ],
	},
};

/* Microsoft_SharePoint_Webhooks_Subscription */
export interface Microsoft_SharePoint_Webhooks_Subscription {
	delete: { 

	},
	update: { 
		argNames: [ "parameters" ],
	},
};

/* SP_Taxonomy_TaxonomyField */
export interface SP_Taxonomy_TaxonomyField {
	deleteObject: { 

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
};

/* Microsoft_Online_SharePoint_TenantAdministration_HubSiteProperties */
export interface Microsoft_Online_SharePoint_TenantAdministration_HubSiteProperties {
	update: { 

	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Office365CommsMessagesServiceProxy */
export interface Microsoft_Online_SharePoint_TenantAdministration_Office365CommsMessagesServiceProxy {
	messageCenterMessages: { 
		argNames: [ "messagesFieldsData" ],
	},
	serviceHealthMessages: { 
		argNames: [ "messagesFieldsData" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_SiteCollectionManagementService */
export interface Microsoft_Online_SharePoint_TenantAdministration_SiteCollectionManagementService {
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
};

/* Microsoft_Online_SharePoint_TenantAdministration_SiteProperties_Collection */
export interface Microsoft_Online_SharePoint_TenantAdministration_SiteProperties_Collection {
	getById: { 
		argNames: [ "siteId" ],
	},
	getLockStateById: { 
		argNames: [ "siteId" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_SiteProperties */
export interface Microsoft_Online_SharePoint_TenantAdministration_SiteProperties {
	update: { 

	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_TenantAdminSettingsService */
export interface Microsoft_Online_SharePoint_TenantAdministration_TenantAdminSettingsService {
	getTenantSharingStatus: { 

	},
	update: { 

	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Tenant */
export interface Microsoft_Online_SharePoint_TenantAdministration_Tenant {
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
};

/* SP_Translation_SyncTranslator */
export interface SP_Translation_SyncTranslator {
	translate: { 
		argNames: [ "inputFile", "outputFile" ],
	},
	translateStream: { 
		argNames: [ "inputFile", "fileExtension" ],
	},
};

/* SP_Translation_TranslationJob */
export interface SP_Translation_TranslationJob {
	translateFile: { 
		argNames: [ "inputFile", "outputFile" ],
	},
	translateFolder: { 
		argNames: [ "inputFolder", "outputFolder", "recursion" ],
	},
	translateLibrary: { 
		argNames: [ "inputLibrary", "outputLibrary" ],
	},
};

/* SP_Translation_TranslationJobStatus */
export interface SP_Translation_TranslationJobStatus {
	getAllItems: { 

	},
};

/* SP_WorkManagement_OM_BaseSession */
export interface SP_WorkManagement_OM_BaseSession {
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
};

/* SP_WorkManagement_OM_LocationOrientedSortableSession */
export interface SP_WorkManagement_OM_LocationOrientedSortableSession {
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
};

/* SP_WorkManagement_OM_LocationOrientedUserOrderedSession */
export interface SP_WorkManagement_OM_LocationOrientedUserOrderedSession {
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
};

/* SP_WorkManagement_OM_SortableSessionManager */
export interface SP_WorkManagement_OM_SortableSessionManager {
	createLocationOrientedSession: { 

	},
	createSession: { 

	},
};

/* SP_WorkManagement_OM_SortableSession */
export interface SP_WorkManagement_OM_SortableSession {
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
};

/* SP_WorkManagement_OM_UserOrderedSessionManager */
export interface SP_WorkManagement_OM_UserOrderedSessionManager {
	createLocationOrientedSession: { 

	},
	createSession: { 

	},
};

/* SP_WorkManagement_OM_UserOrderedSession */
export interface SP_WorkManagement_OM_UserOrderedSession {
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
};

/* SP_WorkManagement_OM_UserSettingsManager */
export interface SP_WorkManagement_OM_UserSettingsManager {
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
};

/* Microsoft_AppServices_AppCollection */
export interface Microsoft_AppServices_AppCollection {
	getAppsFromStore: { 
		argNames: [ "addInType", "queryString" ],
	},
	getByType: { 
		argNames: [ "type" ],
	},
};

/* SP_DocumentManagement_DocumentId */
export interface SP_DocumentManagement_DocumentId {
	resetDocIdByServerRelativePath: { 
		argNames: [ "DecodedUrl" ],
	},
	resetDocIdsInLibrary: { 
		argNames: [ "DecodedUrl", "contentTypeId" ],
	},
};


/* OBA_Server_ServerWrapper_Diagnostics */
export interface OBA_Server_ServerWrapper_Diagnostics {
	status: { 

	},
};

/* OBA_Server_ServerWrapper_Reporting */
export interface OBA_Server_ServerWrapper_Reporting {
	publishReport: { 
		argNames: [ "odataPostBodyStm" ],
	},
};

/* OBA_Server_ServerWrapper_Taskflow */
export interface OBA_Server_ServerWrapper_Taskflow {
	processTask: { 
		argNames: [ "requestBodyStream" ],
	},
};

/* SP_WorkflowServices_WorkflowDefinition_Collection */
export interface SP_WorkflowServices_WorkflowDefinition_Collection {
	sort: { 

	},
};

/* SP_WorkflowServices_WorkflowDefinition */
export interface SP_WorkflowServices_WorkflowDefinition {
	setProperty: { 
		argNames: [ "propertyName", "value" ],
	},
};

/* SP_WorkflowServices_WorkflowDeploymentService */
export interface SP_WorkflowServices_WorkflowDeploymentService {
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
};

/* SP_WorkflowServices_WorkflowInstanceService */
export interface SP_WorkflowServices_WorkflowInstanceService {
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
};

/* SP_WorkflowServices_InteropService */
export interface SP_WorkflowServices_InteropService {
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
};

/* SP_WorkflowServices_WorkflowServicesManager */
export interface SP_WorkflowServices_WorkflowServicesManager {
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
};

/* SP_WorkflowServices_WorkflowSubscription_Collection */
export interface SP_WorkflowServices_WorkflowSubscription_Collection {
	sort: { 

	},
};

/* SP_WorkflowServices_WorkflowSubscription */
export interface SP_WorkflowServices_WorkflowSubscription {
	getExternalVariable: { 
		argNames: [ "name" ],
	},
	setExternalVariable: { 
		argNames: [ "name", "value" ],
	},
	setProperty: { 
		argNames: [ "name", "value" ],
	},
};

/* SP_WorkflowServices_WorkflowSubscriptionService */
export interface SP_WorkflowServices_WorkflowSubscriptionService {
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
};

/* SP_WorkflowServices_WorkflowMessagingService */
export interface SP_WorkflowServices_WorkflowMessagingService {
	publishEvent: { 
		argNames: [ "eventSourceId", "eventName", "payload" ],
	},
};



/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionCorporateCatalogAccessor */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionCorporateCatalogAccessor {
	add: { 
		argNames: [ "Content", "Overwrite", "Url" ],
	},
};

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata_Collection */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata_Collection {
	getById: { 
		argNames: [ "id" ],
	},
};

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata {
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
};

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_TenantCorporateCatalogAccessor */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_TenantCorporateCatalogAccessor {
	add: { 
		argNames: [ "Content", "Overwrite", "Url" ],
	},
};

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionAppCatalogAllowedItem_Collection */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionAppCatalogAllowedItem_Collection {
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
};


/* Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog */
export interface Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog {
	getCrawledUrls: { 
		argNames: [ "getCountOnly", "maxRows", "queryString", "isLike", "contentSourceID", "errorLevel", "errorID", "startDateTime", "endDateTime" ],
	},
};






/* SP_OAuth_NativeClient */
export interface SP_OAuth_NativeClient {
	authenticate: { 

	},
};

/* SP_OAuth_Token */
export interface SP_OAuth_Token {
	acquire: { 
		argNames: [ "resource", "tokenType" ],
	},
};


/* SP_BusinessData_Runtime_EntityInstance */
export interface SP_BusinessData_Runtime_EntityInstance {
	createCollectionInstance: { 
		argNames: [ "fieldDotNotation", "size" ],
	},
	createInstance: { 
		argNames: [ "fieldInstanceDotNotation", "fieldDotNotation" ],
	},
	deleteObject: { 

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
};

/* SP_BusinessData_Runtime_EntityFieldValueDictionary */
export interface SP_BusinessData_Runtime_EntityFieldValueDictionary {
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
};

/* SP_BusinessData_EntityIdentifier */
export interface SP_BusinessData_EntityIdentifier {
	containsLocalizedDisplayName: { 

	},
	getDefaultDisplayName: { 

	},
	getLocalizedDisplayName: { 

	},
};

/* SP_BusinessData_TypeDescriptor */
export interface SP_BusinessData_TypeDescriptor {
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
};

/* SP_BusinessData_Entity */
export interface SP_BusinessData_Entity {
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
};

/* SP_BusinessData_LobSystem */
export interface SP_BusinessData_LobSystem {
	getLobSystemInstances: { 

	},
};

/* SP_BusinessData_EntityView */
export interface SP_BusinessData_EntityView {
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
};

/* SP_BusinessData_AppBdcCatalog */
export interface SP_BusinessData_AppBdcCatalog {
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
};


/* SP_BusinessData_Infrastructure_ExternalSubscriptionStore */
export interface SP_BusinessData_Infrastructure_ExternalSubscriptionStore {
	indexStore: { 

	},
};


/* Microsoft_SharePoint_Navigation_REST_NavigationServiceRest */
export interface Microsoft_SharePoint_Navigation_REST_NavigationServiceRest {
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
};



/* Microsoft_Online_SharePoint_AppLauncher_AppLauncher */
export interface Microsoft_Online_SharePoint_AppLauncher_AppLauncher {
	getData: { 
		argNames: [ "suiteVersion", "isMobileRequest", "locale", "onPremVer" ],
	},
};

/* Microsoft_Online_SharePoint_PointPublishing_PointPublishingAdmin */
export interface Microsoft_Online_SharePoint_PointPublishing_PointPublishingAdmin {
	createTopicMagazine: { 
		argNames: [ "magazineName" ],
	},
	deleteTopicMagazine: { 
		argNames: [ "magazineId" ],
	},
	provisionPointPublishingAsync: { 

	},
};

/* Microsoft_Online_SharePoint_SPLogger_LogExport */
export interface Microsoft_Online_SharePoint_SPLogger_LogExport {
	getFiles: { 
		argNames: [ "partitionId", "logType" ],
	},
	getLogTypes: { 

	},
	getPartitions: { 
		argNames: [ "logType" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdmin_MiddleTier_DDIAdapter */
export interface Microsoft_Online_SharePoint_TenantAdmin_MiddleTier_DDIAdapter {
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
};

/* Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant_Collection */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant_Collection {
	getByObjectId: { 
		argNames: [ "objectId" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant {
	deleteObject: { 

	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionRequest_Collection */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionRequest_Collection {
	approve: { 
		argNames: [ "resource", "scope" ],
	},
	getById: { 
		argNames: [ "id" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionRequest */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionRequest {
	approve: { 

	},
	deny: { 

	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipal */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipal {
	update: { 

	},
};

/* Microsoft_Online_SharePoint_TenantManagement_ExternalUser_Collection */
export interface Microsoft_Online_SharePoint_TenantManagement_ExternalUser_Collection {
	getById: { 
		argNames: [ "uniqueId" ],
	},
};

/* Microsoft_Online_SharePoint_TenantManagement_Office365Tenant */
export interface Microsoft_Online_SharePoint_TenantManagement_Office365Tenant {
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
};

