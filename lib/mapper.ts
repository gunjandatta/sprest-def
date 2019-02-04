import { IMapper } from "./base";

/* SP_Site */
export interface SP_Site {
	createCopyJob: { 
		argNames: IMapper & [ "exportObjectUris", "destinationUri", "options" ],
	},
	createCopyJobs: { 
		argNames: IMapper & [ "exportObjectUris", "destinationUri", "options" ],
	},
	createMigrationIngestionJob: { 
		argNames: IMapper & [ "gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri", "ingestionTaskKey" ],
	},
	createMigrationJob: { 
		argNames: IMapper & [ "gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri" ],
	},
	createMigrationJobEncrypted: { 
		argNames: IMapper & [ "gWebId", "azureContainerSourceUri", "azureContainerManifestUri", "azureQueueReportUri", "options" ],
	},
	createPreviewSPSite: { 
		argNames: IMapper & [ "upgrade", "sendemail" ],
	},
	deleteMigrationJob: { 
		argNames: IMapper & [ "id" ],
	},
	extendUpgradeReminderDate: { 

	},
	getBringYourOwnKeySiteStatus: { 

	},
	getBringYourOwnKeyTenantStatus: { 

	},
	getCatalog: { 
		argNames: IMapper & [ "typeCatalog" ],
	},
	getChanges: { 
		argNames: IMapper & [ "query" ],
	},
	getCopyJobProgress: { 
		argNames: IMapper & [ "copyJobInfo" ],
	},
	getHubSiteJoinApprovalCorrelationId: { 

	},
	getMigrationJobStatus: { 
		argNames: IMapper & [ "id" ],
	},
	getMigrationStatus: { 

	},
	getRecycleBinItems: { 
		argNames: IMapper & [ "pagingInfo", "rowLimit", "isAscending", "orderBy", "itemState" ],
	},
	getWebPath: { 
		argNames: IMapper & [ "siteId", "webId" ],
	},
	getWebTemplates: { 
		argNames: IMapper & [ "LCID", "overrideCompatLevel" ],
	},
	invalidate: { 

	},
	joinHubSite: { 
		argNames: IMapper & [ "hubSiteId", "approvalToken", "approvalCorrelationId" ],
	},
	makeHubSite: { 

	},
	multiGeoCopyJob: { 
		argNames: IMapper & [ "jobId", "userId", "binaryPayload" ],
	},
	needsUpgradeByType: { 
		argNames: IMapper & [ "versionUpgrade", "recursive" ],
	},
	onboardTenantForBringYourOwnKey: { 
		argNames: IMapper & [ "keyInfo" ],
	},
	onHubSiteJoinRequestApproved: { 
		argNames: IMapper & [ "joiningSiteId" ],
	},
	onHubSiteJoinRequestCanceled: { 
		argNames: IMapper & [ "approvalCorrelationId" ],
	},
	onHubSiteJoinRequestStarted: { 
		argNames: IMapper & [ "approvalCorrelationId" ],
	},
	openWeb: { 
		argNames: IMapper & [ "strUrl" ],
	},
	openWebById: { 
		argNames: IMapper & [ "gWebId" ],
	},
	openWebUsingPath: { 
		argNames: IMapper & [ "path" ],
	},
	provisionMigrationContainers: { 

	},
	provisionMigrationQueue: { 

	},
	recoverTenantForBringYourOwnKey: { 
		argNames: IMapper & [ "keyInfo" ],
	},
	registerHubSite: { 
		argNames: IMapper & [ "creationInformation" ],
	},
	removeHubSite: { 

	},
	rollTenantBringYourOwnKey: { 
		argNames: IMapper & [ "keyType", "keyVaultInfo" ],
	},
	runHealthCheck: { 
		argNames: IMapper & [ "ruleId", "bRepair", "bRunAlways" ],
	},
	runUpgradeSiteSession: { 
		argNames: IMapper & [ "versionUpgrade", "queueOnly", "sendEmail" ],
	},
	unregisterHubSite: { 

	},
	updateClientObjectModelUseRemoteAPIsPermissionSetting: { 
		argNames: IMapper & [ "requireUseRemoteAPIs" ],
	},
	validateHubSiteJoinApprovalToken: { 
		argNames: IMapper & [ "joiningSiteId", "approvalToken" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getByDomainName: { 
		argNames: IMapper & [ "domainName" ],
	},
};

/* SP_EventReceiverDefinition_Collection */
export interface SP_EventReceiverDefinition_Collection {
	add: { 
		argNames: IMapper & [ "eventReceiverCreationInformation" ],
	},
	getById: { 
		argNames: IMapper & [ "eventReceiverId" ],
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
		argNames: IMapper & [ "featureId", "force", "featdefScope" ],
	},
	getById: { 
		argNames: IMapper & [ "featureId" ],
	},
	remove: { 
		argNames: IMapper & [ "featureId", "force" ],
	},
};

/* SP_User_Collection */
export interface SP_User_Collection {
	getByEmail: { 
		argNames: IMapper & [ "emailAddress" ],
	},
	getById: { 
		argNames: IMapper & [ "id" ],
	},
	getByLoginName: { 
		argNames: IMapper & [ "loginName" ],
	},
	removeById: { 
		argNames: IMapper & [ "id" ],
	},
	removeByLoginName: { 
		argNames: IMapper & [ "loginName" ],
	},
};

/* SP_User */
export interface SP_User {
	add: { 
		argNames: IMapper & [ "properties" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_Alert_Collection */
export interface SP_Alert_Collection {
	add: { 
		argNames: IMapper & [ "alertCreationInformation" ],
	},
	contains: { 
		argNames: IMapper & [ "idAlert" ],
	},
	deleteAlert: { 
		argNames: IMapper & [ "idAlert" ],
	},
	deleteAlertAtIndex: { 
		argNames: IMapper & [ "index" ],
	},
	getById: { 
		argNames: IMapper & [ "idAlert" ],
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
		argNames: IMapper & [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: { 

	},
};

/* SP_RoleAssignment_Collection */
export interface SP_RoleAssignment_Collection {
	addRoleAssignment: { 
		argNames: IMapper & [ "principalId", "roleDefId" ],
	},
	getByPrincipalId: { 
		argNames: IMapper & [ "principalId" ],
	},
	removeRoleAssignment: { 
		argNames: IMapper & [ "principalId", "roleDefId" ],
	},
};

/* SP_RoleAssignment */
export interface SP_RoleAssignment {
	deleteObject: { 

	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_RoleDefinition_Collection */
export interface SP_RoleDefinition_Collection {
	getById: { 
		argNames: IMapper & [ "id" ],
	},
	removeAll: { 

	},
	getById: { 
		argNames: IMapper & [ "id" ],
	},
	getByName: { 
		argNames: IMapper & [ "name" ],
	},
	getByType: { 
		argNames: IMapper & [ "roleType" ],
	},
	recreateMissingDefaultRoleDefinitions: { 

	},
};

/* SP_RoleDefinition */
export interface SP_RoleDefinition {
	deleteObject: { 

	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_ListItem_Collection */
export interface SP_ListItem_Collection {
	getById: { 
		argNames: IMapper & [ "itemId" ],
	},
	getByStringId: { 
		argNames: IMapper & [ "sId" ],
	},
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
};

/* SP_ListItem */
export interface SP_ListItem {
	breakRoleInheritance: { 
		argNames: IMapper & [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: { 

	},
	deleteObject: { 

	},
	getChanges: { 
		argNames: IMapper & [ "query" ],
	},
	getHashtags: { 

	},
	getUserEffectivePermissions: { 
		argNames: IMapper & [ "userName" ],
	},
	getWOPIFrameUrl: { 
		argNames: IMapper & [ "action" ],
	},
	mediaServiceUpdate: { 
		argNames: IMapper & [ "parameters" ],
	},
	mediaServiceUpdateV2: { 
		argNames: IMapper & [ "parameters", "eventFiringEnabled" ],
	},
	overridePolicyTip: { 
		argNames: IMapper & [ "userAction", "justification" ],
	},
	parseAndSetFieldValue: { 
		argNames: IMapper & [ "fieldName", "value" ],
	},
	recycle: { 

	},
	setCommentsDisabled: { 
		argNames: IMapper & [ "value" ],
	},
	setComplianceTag: { 
		argNames: IMapper & [ "complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock" ],
	},
	setComplianceTagWithExplicitMetasUpdate: { 
		argNames: IMapper & [ "complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress" ],
	},
	setComplianceTagWithHold: { 
		argNames: IMapper & [ "complianceTag" ],
	},
	setComplianceTagWithMetaInfo: { 
		argNames: IMapper & [ "complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock" ],
	},
	setComplianceTagWithNoHold: { 
		argNames: IMapper & [ "complianceTag" ],
	},
	setComplianceTagWithRecord: { 
		argNames: IMapper & [ "complianceTag" ],
	},
	systemUpdate: { 

	},
	updateEx: { 
		argNames: IMapper & [ "parameters" ],
	},
	updateHashtags: { 
		argNames: IMapper & [ "hashtagsToAdd", "hashtagsToRemove" ],
	},
	updateOverwriteVersion: { 

	},
	validateUpdateListItem: { 
		argNames: IMapper & [ "formValues", "bNewDocumentUpdate", "checkInComment" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
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
		argNames: IMapper & [ "DecodedUrl", "contentStream" ],
	},
	getByFileName: { 
		argNames: IMapper & [ "fileName" ],
	},
	getByFileNameAsPath: { 
		argNames: IMapper & [ "DecodedUrl" ],
	},
	add: { 
		argNames: IMapper & [ "FileName", "Content" ],
	},
};

/* SP_ContentType_Collection */
export interface SP_ContentType_Collection {
	addAvailableContentType: { 
		argNames: IMapper & [ "contentTypeId" ],
	},
	getById: { 
		argNames: IMapper & [ "contentTypeId" ],
	},
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
};

/* SP_ContentType */
export interface SP_ContentType {
	deleteObject: { 

	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_UserResource */
export interface SP_UserResource {
	getValueForUICulture: { 
		argNames: IMapper & [ "cultureName" ],
	},
	setValueForUICulture: { 
		argNames: IMapper & [ "cultureName", "value" ],
	},
};

/* SP_FieldLink_Collection */
export interface SP_FieldLink_Collection {
	getById: { 
		argNames: IMapper & [ "id" ],
	},
	reorder: { 
		argNames: IMapper & [ "internalNames" ],
	},
	add: { 
		argNames: IMapper & [ "parameters" ],
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
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_Field_Collection */
export interface SP_Field_Collection {
	addDependentLookupField: { 
		argNames: IMapper & [ "displayName", "primaryLookupFieldId", "showField" ],
	},
	addField: { 
		argNames: IMapper & [ "parameters" ],
	},
	getById: { 
		argNames: IMapper & [ "id" ],
	},
	getByInternalNameOrTitle: { 
		argNames: IMapper & [ "strName" ],
	},
	getByTitle: { 
		argNames: IMapper & [ "title" ],
	},
	createFieldAsXml: { 
		argNames: IMapper & [ "schemaXml" ],
	},
};

/* SP_File_Collection */
export interface SP_File_Collection {
	addStub: { 
		argNames: IMapper & [ "urlOfFile" ],
	},
	addStubUsingPath: { 
		argNames: IMapper & [ "DecodedUrl" ],
	},
	addTemplateFile: { 
		argNames: IMapper & [ "urlOfFile", "templateFileType" ],
	},
	addUsingPath: { 
		argNames: IMapper & [ "DecodedUrl", "Overwrite", "contentStream" ],
	},
	getByPathOrAddStub: { 
		argNames: IMapper & [ "DecodedUrl" ],
	},
	getByUrl: { 
		argNames: IMapper & [ "url" ],
	},
	getByUrlOrAddStub: { 
		argNames: IMapper & [ "urlOfFile" ],
	},
	add: { 
		argNames: IMapper & [ "Url", "Overwrite", "Content" ],
	},
};

/* SP_File */
export interface SP_File {
	addActivities: { 
		argNames: IMapper & [ "activities" ],
	},
	addClientActivities: { 
		argNames: IMapper & [ "activitiesStream" ],
	},
	approve: { 
		argNames: IMapper & [ "comment" ],
	},
	cancelUpload: { 
		argNames: IMapper & [ "uploadId" ],
	},
	checkAccessAndPostViewAuditEvent: { 

	},
	checkIn: { 
		argNames: IMapper & [ "comment", "checkInType" ],
	},
	checkOut: { 

	},
	continueUpload: { 
		argNames: IMapper & [ "uploadId", "fileOffset", "stream" ],
	},
	copyTo: { 
		argNames: IMapper & [ "strNewUrl", "bOverWrite" ],
	},
	copyToUsingPath: { 
		argNames: IMapper & [ "DecodedUrl", "bOverWrite" ],
	},
	deleteObject: { 

	},
	deny: { 
		argNames: IMapper & [ "comment" ],
	},
	executeCobaltRequest: { 
		argNames: IMapper & [ "inputStream" ],
	},
	finishUpload: { 
		argNames: IMapper & [ "uploadId", "fileOffset", "stream" ],
	},
	getFileUserValue: { 
		argNames: IMapper & [ "key" ],
	},
	getImagePreviewUri: { 
		argNames: IMapper & [ "width", "height", "clientType" ],
	},
	getImagePreviewUrl: { 
		argNames: IMapper & [ "width", "height", "clientType" ],
	},
	getLimitedWebPartManager: { 
		argNames: IMapper & [ "scope" ],
	},
	getPreAuthorizedAccessUrl: { 
		argNames: IMapper & [ "expirationHours" ],
	},
	getUploadStatus: { 
		argNames: IMapper & [ "uploadId" ],
	},
	getWOPIFrameUrl: { 
		argNames: IMapper & [ "action" ],
	},
	moveTo: { 
		argNames: IMapper & [ "newUrl", "flags" ],
	},
	moveToUsingPath: { 
		argNames: IMapper & [ "DecodedUrl", "moveOperations" ],
	},
	openBinaryStream: { 

	},
	openBinaryStreamWithOptions: { 
		argNames: IMapper & [ "openOptions" ],
	},
	publish: { 
		argNames: IMapper & [ "comment" ],
	},
	recycle: { 

	},
	recycleWithETag: { 
		argNames: IMapper & [ "etagMatch" ],
	},
	saveBinaryStream: { 
		argNames: IMapper & [ "file" ],
	},
	setFileUserValue: { 
		argNames: IMapper & [ "key", "value" ],
	},
	startUpload: { 
		argNames: IMapper & [ "uploadId", "stream" ],
	},
	undoCheckOut: { 

	},
	unPublish: { 
		argNames: IMapper & [ "comment" ],
	},
	updateVirusInfo: { 
		argNames: IMapper & [ "virusStatus", "virusMessage", "etagToCheck" ],
	},
	content: { 

	},
	update: { 
		argNames: IMapper & [ "properties" ],
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
		argNames: IMapper & [ "vid" ],
	},
	deleteByLabel: { 
		argNames: IMapper & [ "versionlabel" ],
	},
	getById: { 
		argNames: IMapper & [ "versionid" ],
	},
	recycleByID: { 
		argNames: IMapper & [ "vid" ],
	},
	recycleByLabel: { 
		argNames: IMapper & [ "versionlabel" ],
	},
	restoreByLabel: { 
		argNames: IMapper & [ "versionlabel" ],
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
		argNames: IMapper & [ "url" ],
	},
	addUsingPath: { 
		argNames: IMapper & [ "DecodedUrl", "Overwrite" ],
	},
	addWithOverwrite: { 
		argNames: IMapper & [ "url", "overwrite" ],
	},
	getByPath: { 
		argNames: IMapper & [ "DecodedUrl" ],
	},
	getByUrl: { 
		argNames: IMapper & [ "url" ],
	},
};

/* SP_Folder */
export interface SP_Folder {
	addSubFolder: { 
		argNames: IMapper & [ "leafName" ],
	},
	addSubFolderUsingPath: { 
		argNames: IMapper & [ "DecodedUrl" ],
	},
	deleteObject: { 

	},
	getChanges: { 
		argNames: IMapper & [ "query" ],
	},
	getListItemChanges: { 
		argNames: IMapper & [ "query" ],
	},
	moveTo: { 
		argNames: IMapper & [ "newUrl" ],
	},
	moveToUsingPath: { 
		argNames: IMapper & [ "DecodedUrl" ],
	},
	recycle: { 

	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_List */
export interface SP_List {
	breakRoleInheritance: { 
		argNames: IMapper & [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: { 

	},
	addItem: { 
		argNames: IMapper & [ "parameters" ],
	},
	addItemUsingPath: { 
		argNames: IMapper & [ "parameters" ],
	},
	addValidateUpdateItem: { 
		argNames: IMapper & [ "listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment" ],
	},
	addValidateUpdateItemUsingPath: { 
		argNames: IMapper & [ "listItemCreateInfo", "formValues", "bNewDocumentUpdate", "checkInComment" ],
	},
	bulkValidateUpdateListItems: { 
		argNames: IMapper & [ "itemIds", "formValues", "bNewDocumentUpdate", "checkInComment", "folderPath" ],
	},
	createDocumentAndGetEditLink: { 
		argNames: IMapper & [ "fileName", "folderPath", "documentTemplateType", "templateUrl" ],
	},
	createDocumentWithDefaultName: { 
		argNames: IMapper & [ "folderPath", "extension" ],
	},
	createMappedView: { 
		argNames: IMapper & [ "appViewCreationInfo", "visualizationTarget" ],
	},
	deleteObject: { 

	},
	ensureSignoffStatusField: { 

	},
	getBloomFilter: { 
		argNames: IMapper & [ "startItemId" ],
	},
	getBloomFilterWithCustomFields: { 
		argNames: IMapper & [ "listItemStartingID", "internalFieldNames" ],
	},
	getChanges: { 
		argNames: IMapper & [ "query" ],
	},
	getCheckedOutFiles: { 

	},
	getItemById: { 
		argNames: IMapper & [ "id" ],
	},
	getItemByStringId: { 
		argNames: IMapper & [ "sId" ],
	},
	getItemByUniqueId: { 
		argNames: IMapper & [ "uniqueId" ],
	},
	getListItemChangesSinceToken: { 
		argNames: IMapper & [ "query" ],
	},
	getMappedApp: { 
		argNames: IMapper & [ "appId", "visualizationAppTarget" ],
	},
	getMappedApps: { 
		argNames: IMapper & [ "visualizationAppTarget" ],
	},
	getRelatedFields: { 

	},
	getSpecialFolderUrl: { 
		argNames: IMapper & [ "type", "bForceCreate", "existingFolderGuid" ],
	},
	getUserEffectivePermissions: { 
		argNames: IMapper & [ "userName" ],
	},
	getView: { 
		argNames: IMapper & [ "viewGuid" ],
	},
	getWebDavUrl: { 
		argNames: IMapper & [ "sourceUrl" ],
	},
	publishMappedView: { 
		argNames: IMapper & [ "appId", "visualizationTarget" ],
	},
	recycle: { 

	},
	renderExtendedListFormData: { 
		argNames: IMapper & [ "itemId", "formId", "mode", "options", "cutoffVersion" ],
	},
	renderListContextMenuData: { 
		argNames: IMapper & [ "CascDelWarnMessage", "CustomAction", "Field", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsXslView", "ItemId", "ListViewPageUrl", "OverrideScope", "RootFolder", "View", "ViewCount" ],
	},
	renderListData: { 
		argNames: IMapper & [ "viewXml" ],
	},
	renderListDataAsStream: { 
		argNames: IMapper & [ "parameters", "CascDelWarnMessage", "CustomAction", "DrillDown", "Field", "FieldInternalName", "Filter", "FilterData", "FilterData1", "FilterData10", "FilterData2", "FilterData3", "FilterData4", "FilterData5", "FilterData6", "FilterData7", "FilterData8", "FilterData9", "FilterField", "FilterField1", "FilterField10", "FilterField2", "FilterField3", "FilterField4", "FilterField5", "FilterField6", "FilterField7", "FilterField8", "FilterField9", "FilterFields", "FilterFields1", "FilterFields10", "FilterFields2", "FilterFields3", "FilterFields4", "FilterFields5", "FilterFields6", "FilterFields7", "FilterFields8", "FilterFields9", "FilterLookupId", "FilterLookupId1", "FilterLookupId10", "FilterLookupId2", "FilterLookupId3", "FilterLookupId4", "FilterLookupId5", "FilterLookupId6", "FilterLookupId7", "FilterLookupId8", "FilterLookupId9", "FilterOp", "FilterOp1", "FilterOp10", "FilterOp2", "FilterOp3", "FilterOp4", "FilterOp5", "FilterOp6", "FilterOp7", "FilterOp8", "FilterOp9", "FilterValue", "FilterValue1", "FilterValue10", "FilterValue2", "FilterValue3", "FilterValue4", "FilterValue5", "FilterValue6", "FilterValue7", "FilterValue8", "FilterValue9", "FilterValues", "FilterValues1", "FilterValues10", "FilterValues2", "FilterValues3", "FilterValues4", "FilterValues5", "FilterValues6", "FilterValues7", "FilterValues8", "FilterValues9", "GroupString", "HasOverrideSelectCommand", "ID", "InplaceFullListSearch", "InplaceSearchQuery", "IsCSR", "IsGroupRender", "IsXslView", "ListViewPageUrl", "OverrideScope", "OverrideSelectCommand", "PageFirstRow", "PageLastRow", "RootFolder", "SortDir", "SortDir1", "SortDir10", "SortDir2", "SortDir3", "SortDir4", "SortDir5", "SortDir6", "SortDir7", "SortDir8", "SortDir9", "SortField", "SortField1", "SortField10", "SortField2", "SortField3", "SortField4", "SortField5", "SortField6", "SortField7", "SortField8", "SortField9", "SortFields", "SortFieldValues", "View", "ViewCount", "ViewId", "ViewPath", "WebPartId" ],
	},
	renderListFilterData: { 
		argNames: IMapper & [ "ExcludeFieldFilteringHtml", "FieldInternalName", "OverrideScope", "ProcessQStringToCAML", "ViewId" ],
	},
	renderListFormData: { 
		argNames: IMapper & [ "itemId", "formId", "mode" ],
	},
	reserveListItemId: { 

	},
	saveAsNewView: { 
		argNames: IMapper & [ "oldName", "newName", "privateView", "uri" ],
	},
	saveAsTemplate: { 
		argNames: IMapper & [ "strFileName", "strName", "strDescription", "bSaveData" ],
	},
	setExemptFromBlockDownloadOfNonViewableFiles: { 
		argNames: IMapper & [ "value" ],
	},
	syncFlowCallbackUrl: { 
		argNames: IMapper & [ "flowId" ],
	},
	syncFlowInstance: { 
		argNames: IMapper & [ "flowID" ],
	},
	syncFlowInstances: { 

	},
	syncFlowTemplates: { 
		argNames: IMapper & [ "category" ],
	},
	unpublishMappedView: { 
		argNames: IMapper & [ "appId", "visualizationTarget" ],
	},
	validateAppName: { 
		argNames: IMapper & [ "appDisplayName" ],
	},
	getItems: { 
		argNames: IMapper & [ "viewXML" ],
	},
	getItemsByQuery: { 
		argNames: IMapper & [ "camlQuery" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
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
		argNames: IMapper & [ "id" ],
	},
	getByTitle: { 
		argNames: IMapper & [ "title" ],
	},
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
};

/* SP_View_Collection */
export interface SP_View_Collection {
	getById: { 
		argNames: IMapper & [ "guidId" ],
	},
	getByTitle: { 
		argNames: IMapper & [ "strTitle" ],
	},
	add: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_View */
export interface SP_View {
	addToSpotlight: { 
		argNames: IMapper & [ "itemId", "folderPath", "afterItemId" ],
	},
	deleteObject: { 

	},
	removeFromSpotlight: { 
		argNames: IMapper & [ "itemId", "folderPath" ],
	},
	renderAsHtml: { 

	},
	setViewXml: { 
		argNames: IMapper & [ "viewXml" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_ViewFieldCollection */
export interface SP_ViewFieldCollection {
	addViewField: { 
		argNames: IMapper & [ "strField" ],
	},
	moveViewFieldTo: { 
		argNames: IMapper & [ "field", "index" ],
	},
	removeAllViewFields: { 

	},
	removeViewField: { 
		argNames: IMapper & [ "strField" ],
	},
};

/* SP_Form_Collection */
export interface SP_Form_Collection {
	getById: { 
		argNames: IMapper & [ "id" ],
	},
	getByPageType: { 
		argNames: IMapper & [ "formType" ],
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
		argNames: IMapper & [ "parameters" ],
	},
};

/* SP_Web */
export interface SP_Web {
	breakRoleInheritance: { 
		argNames: IMapper & [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: { 

	},
	addCrossFarmMessage: { 
		argNames: IMapper & [ "messagePayloadBase64" ],
	},
	addSupportedUILanguage: { 
		argNames: IMapper & [ "lcid" ],
	},
	applyTheme: { 
		argNames: IMapper & [ "colorPaletteUrl", "fontSchemeUrl", "backgroundImageUrl", "shareGenerated" ],
	},
	applyWebTemplate: { 
		argNames: IMapper & [ "webTemplate" ],
	},
	createDefaultAssociatedGroups: { 
		argNames: IMapper & [ "userLogin", "userLogin2", "groupNameSeed" ],
	},
	defaultDocumentLibrary: { 

	},
	deleteObject: { 

	},
	doesPushNotificationSubscriberExist: { 
		argNames: IMapper & [ "deviceAppInstanceId" ],
	},
	ensureUser: { 
		argNames: IMapper & [ "logonName" ],
	},
	executeRemoteLOB: { 
		argNames: IMapper & [ "inputStream" ],
	},
	getAppBdcCatalog: { 

	},
	getAppBdcCatalogForAppInstance: { 
		argNames: IMapper & [ "appInstanceId" ],
	},
	getAppInstanceById: { 
		argNames: IMapper & [ "appInstanceId" ],
	},
	getAppInstancesByProductId: { 
		argNames: IMapper & [ "productId" ],
	},
	getAvailableWebTemplates: { 
		argNames: IMapper & [ "lcid", "doIncludeCrossLanguage" ],
	},
	getCatalog: { 
		argNames: IMapper & [ "typeCatalog" ],
	},
	getChanges: { 
		argNames: IMapper & [ "query" ],
	},
	getClientSideComponents: { 
		argNames: IMapper & [ "components" ],
	},
	getClientSideComponentsById: { 
		argNames: IMapper & [ "componentIds" ],
	},
	getClientSideWebParts: { 
		argNames: IMapper & [ "includeErrors" ],
	},
	getCustomListTemplates: { 

	},
	getEntity: { 
		argNames: IMapper & [ "namespace", "name" ],
	},
	getFileByGuestUrl: { 
		argNames: IMapper & [ "guestUrl" ],
	},
	getFileByGuestUrlEnsureAccess: { 
		argNames: IMapper & [ "guestUrl", "ensureAccess" ],
	},
	getFileByGuestUrlExtended: { 
		argNames: IMapper & [ "guestUrl", "requestSettings" ],
	},
	getFileById: { 
		argNames: IMapper & [ "uniqueId" ],
	},
	getFileByLinkingUrl: { 
		argNames: IMapper & [ "linkingUrl" ],
	},
	getFileByServerRelativePath: { 
		argNames: IMapper & [ "DecodedUrl" ],
	},
	getFileByServerRelativeUrl: { 
		argNames: IMapper & [ "serverRelativeUrl" ],
	},
	getFileByUrl: { 
		argNames: IMapper & [ "fileUrl" ],
	},
	getFileByWOPIFrameUrl: { 
		argNames: IMapper & [ "wopiFrameUrl" ],
	},
	getFolderByGuestUrl: { 
		argNames: IMapper & [ "guestUrl", "ensureAccess" ],
	},
	getFolderByGuestUrlExtended: { 
		argNames: IMapper & [ "guestUrl", "requestSettings" ],
	},
	getFolderById: { 
		argNames: IMapper & [ "uniqueId" ],
	},
	getFolderByServerRelativePath: { 
		argNames: IMapper & [ "DecodedUrl" ],
	},
	getFolderByServerRelativeUrl: { 
		argNames: IMapper & [ "serverRelativeUrl" ],
	},
	getList: { 
		argNames: IMapper & [ "strUrl" ],
	},
	getListItem: { 
		argNames: IMapper & [ "strUrl" ],
	},
	getListItemByResourceId: { 
		argNames: IMapper & [ "resourceId" ],
	},
	getListItemUsingPath: { 
		argNames: IMapper & [ "DecodedUrl" ],
	},
	getListUsingPath: { 
		argNames: IMapper & [ "DecodedUrl" ],
	},
	getNewsList: { 
		argNames: IMapper & [ "allowCreate" ],
	},
	getOnePageContextAsStream: { 

	},
	getPushNotificationSubscriber: { 
		argNames: IMapper & [ "deviceAppInstanceId" ],
	},
	getPushNotificationSubscribersByArgs: { 
		argNames: IMapper & [ "customArgs" ],
	},
	getPushNotificationSubscribersByUser: { 
		argNames: IMapper & [ "userName" ],
	},
	getRecycleBinItems: { 
		argNames: IMapper & [ "pagingInfo", "rowLimit", "isAscending", "orderBy", "itemState" ],
	},
	getRecycleBinItemsByQueryInfo: { 
		argNames: IMapper & [ "IsAscending", "ItemState", "OrderBy", "PagingInfo", "RowLimit", "ShowOnlyMyItems" ],
	},
	getRegionalDateTimeSchema: { 

	},
	getSharingLinkData: { 
		argNames: IMapper & [ "linkUrl" ],
	},
	getStorageEntity: { 
		argNames: IMapper & [ "key" ],
	},
	getSubwebsFilteredForCurrentUser: { 
		argNames: IMapper & [ "nWebTemplateFilter", "nConfigurationFilter" ],
	},
	getUserById: { 
		argNames: IMapper & [ "userId" ],
	},
	getUserEffectivePermissions: { 
		argNames: IMapper & [ "userName" ],
	},
	getViewFromPath: { 
		argNames: IMapper & [ "DecodedUrl" ],
	},
	getViewFromUrl: { 
		argNames: IMapper & [ "listUrl" ],
	},
	hubSiteData: { 
		argNames: IMapper & [ "forceRefresh" ],
	},
	hubSiteDataAsStream: { 
		argNames: IMapper & [ "forceRefresh" ],
	},
	incrementSiteClientTag: { 

	},
	loadAndInstallApp: { 
		argNames: IMapper & [ "appPackageStream" ],
	},
	loadAndInstallAppInSpecifiedLocale: { 
		argNames: IMapper & [ "appPackageStream", "installationLocaleLCID" ],
	},
	loadApp: { 
		argNames: IMapper & [ "appPackageStream", "installationLocaleLCID" ],
	},
	mapToIcon: { 
		argNames: IMapper & [ "fileName", "progId", "size" ],
	},
	pageContextInfo: { 
		argNames: IMapper & [ "includeODBSettings", "emitNavigationInfo" ],
	},
	parseDateTime: { 
		argNames: IMapper & [ "value", "displayFormat", "calendarType" ],
	},
	processExternalNotification: { 
		argNames: IMapper & [ "stream" ],
	},
	registerPushNotificationSubscriber: { 
		argNames: IMapper & [ "deviceAppInstanceId", "serviceToken" ],
	},
	removeStorageEntity: { 
		argNames: IMapper & [ "key" ],
	},
	removeSupportedUILanguage: { 
		argNames: IMapper & [ "lcid" ],
	},
	setAccessRequestSiteDescriptionAndUpdate: { 
		argNames: IMapper & [ "description" ],
	},
	setStorageEntity: { 
		argNames: IMapper & [ "key", "value", "description", "comments" ],
	},
	setUseAccessRequestDefaultAndUpdate: { 
		argNames: IMapper & [ "useAccessRequestDefault" ],
	},
	syncFlowInstances: { 
		argNames: IMapper & [ "targetWebUrl" ],
	},
	syncFlowTemplates: { 
		argNames: IMapper & [ "category" ],
	},
	syncHubSiteTheme: { 

	},
	unregisterPushNotificationSubscriber: { 
		argNames: IMapper & [ "deviceAppInstanceId" ],
	},
	doesUserHavePermissions: { 
		argNames: IMapper & [ "high", "low" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_Group_Collection */
export interface SP_Group_Collection {
	getById: { 
		argNames: IMapper & [ "id" ],
	},
	getByName: { 
		argNames: IMapper & [ "name" ],
	},
	removeById: { 
		argNames: IMapper & [ "id" ],
	},
	removeByLoginName: { 
		argNames: IMapper & [ "loginName" ],
	},
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
};

/* SP_Group */
export interface SP_Group {
	setUserAsOwner: { 
		argNames: IMapper & [ "ownerId" ],
	},
	update: { 

	},
};

/* SP_ClientWebPart_Collection */
export interface SP_ClientWebPart_Collection {
	getById: { 
		argNames: IMapper & [ "id" ],
	},
};

/* SP_ClientWebPart */
export interface SP_ClientWebPart {
	render: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_ListTemplate_Collection */
export interface SP_ListTemplate_Collection {
	getByName: { 
		argNames: IMapper & [ "name" ],
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
		argNames: IMapper & [ "id" ],
	},
};

/* SP_NavigationNode_Collection */
export interface SP_NavigationNode_Collection {
	getById: { 
		argNames: IMapper & [ "id" ],
	},
	getByIndex: { 
		argNames: IMapper & [ "index" ],
	},
	moveAfter: { 
		argNames: IMapper & [ "nodeId", "previousNodeId" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getById: { 
		argNames: IMapper & [ "id" ],
	},
};

/* SP_PushNotificationSubscriber_Collection */
export interface SP_PushNotificationSubscriber_Collection {
	getByStoreId: { 
		argNames: IMapper & [ "id" ],
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
		argNames: IMapper & [ "ids" ],
	},
	getById: { 
		argNames: IMapper & [ "id" ],
	},
	moveAllToSecondStage: { 

	},
	moveToSecondStageByIds: { 
		argNames: IMapper & [ "ids" ],
	},
	restoreAll: { 

	},
	restoreByIds: { 
		argNames: IMapper & [ "ids" ],
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
		argNames: IMapper & [ "id" ],
	},
};

/* SP_TimeZone_Collection */
export interface SP_TimeZone_Collection {
	getById: { 
		argNames: IMapper & [ "id" ],
	},
};

/* SP_TimeZone */
export interface SP_TimeZone {
	localTimeToUTC: { 
		argNames: IMapper & [ "date" ],
	},
	uTCToLocalTime: { 
		argNames: IMapper & [ "date" ],
	},
};

/* SP_ThemeInfo */
export interface SP_ThemeInfo {
	getThemeFontByName: { 
		argNames: IMapper & [ "name", "lcid" ],
	},
	getThemeShadeByName: { 
		argNames: IMapper & [ "name" ],
	},
};

/* SP_UserCustomAction_Collection */
export interface SP_UserCustomAction_Collection {
	clear: { 

	},
	getById: { 
		argNames: IMapper & [ "id" ],
	},
	add: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_UserCustomAction */
export interface SP_UserCustomAction {
	deleteObject: { 

	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_ListItemVersion_Collection */
export interface SP_ListItemVersion_Collection {
	getById: { 
		argNames: IMapper & [ "versionId" ],
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
		argNames: IMapper & [ "productId" ],
	},
};

/* SP_UserSolution_Collection */
export interface SP_UserSolution_Collection {
	add: { 
		argNames: IMapper & [ "solutionGalleryItemId" ],
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
		argNames: IMapper & [ "appPackageStream" ],
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
		argNames: IMapper & [ "DecodedUrl" ],
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
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldMultiChoice */
export interface SP_FieldMultiChoice {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldChoice */
export interface SP_FieldChoice {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldComputed */
export interface SP_FieldComputed {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldNumber */
export interface SP_FieldNumber {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldCurrency */
export interface SP_FieldCurrency {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldDateTime */
export interface SP_FieldDateTime {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldGeolocation */
export interface SP_FieldGeolocation {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldGuid */
export interface SP_FieldGuid {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldMultiLineText */
export interface SP_FieldMultiLineText {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldLocation */
export interface SP_FieldLocation {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldLookup */
export interface SP_FieldLookup {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldRatingScale */
export interface SP_FieldRatingScale {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldText */
export interface SP_FieldText {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldUrl */
export interface SP_FieldUrl {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_FieldUser */
export interface SP_FieldUser {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* SP_HubSite_Collection */
export interface SP_HubSite_Collection {
	getById: { 
		argNames: IMapper & [ "hubSiteId" ],
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
		argNames: IMapper & [ "fieldId" ],
	},
};

/* SP_RemoteWeb */
export interface SP_RemoteWeb {
	getFileByServerRelativePath: { 
		argNames: IMapper & [ "serverRelatvieFilePath" ],
	},
	getFileByServerRelativeUrl: { 
		argNames: IMapper & [ "serverRelativeFileUrl" ],
	},
	getFileByUrl: { 
		argNames: IMapper & [ "fileUrl" ],
	},
	getFolderByServerRelativeUrl: { 
		argNames: IMapper & [ "serverRelativeUrl" ],
	},
	getGroupById: { 
		argNames: IMapper & [ "groupId" ],
	},
	getListById: { 
		argNames: IMapper & [ "listGuid" ],
	},
	getListByServerRelativeUrl: { 
		argNames: IMapper & [ "serverRelativeUrl" ],
	},
};

/* SP_WebTemplate_Collection */
export interface SP_WebTemplate_Collection {
	getByName: { 
		argNames: IMapper & [ "name" ],
	},
};

/* SP_Directory_DirectorySession */
export interface SP_Directory_DirectorySession {
	getGraphUser: { 
		argNames: IMapper & [ "principalName" ],
	},
	getSharePointDataForUser: { 
		argNames: IMapper & [ "userId" ],
	},
	group: { 
		argNames: IMapper & [ "groupId", "alias" ],
	},
	joinGroup: { 
		argNames: IMapper & [ "groupId" ],
	},
	me: { 

	},
	user: { 
		argNames: IMapper & [ "id", "principalName" ],
	},
	validateGroupName: { 
		argNames: IMapper & [ "displayName", "alias" ],
	},
};

/* SP_Directory_Group_Collection */
export interface SP_Directory_Group_Collection {
	add: { 
		argNames: IMapper & [ "objectId" ],
	},
	remove: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "objectId", "principalName" ],
	},
	remove: { 
		argNames: IMapper & [ "objectId" ],
	},
};

/* SP_Directory_User */
export interface SP_Directory_User {
	getUserLinks: { 
		argNames: IMapper & [ "linkName", "groupType" ],
	},
};

/* SP_CompliancePolicy_SPPolicyStoreProxy */
export interface SP_CompliancePolicy_SPPolicyStoreProxy {
	addDynamicScopeBinding: { 
		argNames: IMapper & [ "identity", "siteId" ],
	},
	bulkUpdateDynamicScopeBindings: { 
		argNames: IMapper & [ "scopesToAdd", "scopesToRemove", "siteId" ],
	},
	deleteDynamicScopeBinding: { 
		argNames: IMapper & [ "identity", "siteId" ],
	},
	extendReviewItemsRetention: { 
		argNames: IMapper & [ "itemIds", "extensionDate" ],
	},
	getDynamicScopeBindingBySiteId: { 
		argNames: IMapper & [ "siteId" ],
	},
	markReviewItemsForDeletion: { 
		argNames: IMapper & [ "itemIds" ],
	},
	openBinaryStreamForOriginalItem: { 
		argNames: IMapper & [ "itemId" ],
	},
	removeContainerRetentionPolicy: { 
		argNames: IMapper & [ "siteId" ],
	},
	removeContainerSettings: { 
		argNames: IMapper & [ "externalId" ],
	},
	retagReviewItems: { 
		argNames: IMapper & [ "itemIds", "newTag", "newTagIsRecord", "newTagBlockDelete", "newTagIsEventBased" ],
	},
	retagReviewItemsWithMetas: { 
		argNames: IMapper & [ "itemIds", "newTagName", "newTagMetas" ],
	},
	setContainerRetentionPolicy: { 
		argNames: IMapper & [ "siteId", "defaultContainerLabel" ],
	},
	updateContainerSetting: { 
		argNames: IMapper & [ "siteId", "externalId", "settingType", "setting" ],
	},
};

/* MS_FileServices_FileSystemItem_Collection */
export interface MS_FileServices_FileSystemItem_Collection {
	add: { 
		argNames: IMapper & [ "name", "overwrite", "content" ],
	},
	getById: { 
		argNames: IMapper & [ "id" ],
	},
};

/* MS_FileServices_File */
export interface MS_FileServices_File {
	copyTo: { 
		argNames: IMapper & [ "target", "overwrite" ],
	},
	deleteObject: { 

	},
	download: { 

	},
	moveTo: { 
		argNames: IMapper & [ "target", "overwrite" ],
	},
	upload: { 
		argNames: IMapper & [ "stream" ],
	},
};

/* MS_FileServices_Folder */
export interface MS_FileServices_Folder {
	deleteObject: { 

	},
	moveTo: { 
		argNames: IMapper & [ "target" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation_Collection {
	getByLocation: { 
		argNames: IMapper & [ "location" ],
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
		argNames: IMapper & [ "moveId" ],
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
		argNames: IMapper & [ "moveId" ],
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
		argNames: IMapper & [ "moveId" ],
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
		argNames: IMapper & [ "propertyName", "geo" ],
	},
	getChanges: { 
		argNames: IMapper & [ "startTimeInUtc" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getByLoginName: { 
		argNames: IMapper & [ "loginName" ],
	},
	getByLoginNameAndType: { 
		argNames: IMapper & [ "loginName", "memberType" ],
	},
	getByObjectId: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "geoLocation" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob_Collection {
	getByGroupName: { 
		argNames: IMapper & [ "groupname" ],
	},
	getMoveReport: { 
		argNames: IMapper & [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
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
		argNames: IMapper & [ "siteId" ],
	},
	dBSchemaCompatibilityCheck: { 

	},
	geoMoveCompatibilityChecks: { 

	},
	userPersonalSiteId: { 
		argNames: IMapper & [ "userPrincipalName" ],
	},
	userPersonalSiteLocation: { 
		argNames: IMapper & [ "userPrincipalName" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob_Collection {
	getByUrl: { 
		argNames: IMapper & [ "url" ],
	},
	getMoveReport: { 
		argNames: IMapper & [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
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
		argNames: IMapper & [ "siteUrl" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota_Collection {
	getByLocation: { 
		argNames: IMapper & [ "geoLocation" ],
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
		argNames: IMapper & [ "alias" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_UserMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_UserMoveJob_Collection {
	getByDirection: { 
		argNames: IMapper & [ "direction" ],
	},
	getByMoveId: { 
		argNames: IMapper & [ "odbMoveId" ],
	},
	getByUpn: { 
		argNames: IMapper & [ "upn" ],
	},
	getByValidPdl: { 
		argNames: IMapper & [ "validPdl" ],
	},
	getMoveReport: { 
		argNames: IMapper & [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
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
		argNames: IMapper & [ "directoryObjectChanges" ],
	},
};

/* SP_Directory_Provider_SharePointDirectoryProvider */
export interface SP_Directory_Provider_SharePointDirectoryProvider {
	createDirectoryObject: { 
		argNames: IMapper & [ "data" ],
	},
	deleteDirectoryObject: { 
		argNames: IMapper & [ "data" ],
	},
	getOrCreateUnifiedGroupTenantInstanceId: { 
		argNames: IMapper & [ "groupId", "tenantInstanceId" ],
	},
	notifyDataChanges: { 
		argNames: IMapper & [ "data" ],
	},
	readDirectoryObject: { 
		argNames: IMapper & [ "data" ],
	},
	readDirectoryObjectBatch: { 
		argNames: IMapper & [ "ids", "objectType" ],
	},
	updateCache: { 
		argNames: IMapper & [ "data" ],
	},
	updateDirectoryObject: { 
		argNames: IMapper & [ "data" ],
	},
};

/* SP_Microfeed_MicrofeedPostDefinitionManager */
export interface SP_Microfeed_MicrofeedPostDefinitionManager {
	deleteMicrofeedPostDefinition: { 
		argNames: IMapper & [ "postDefinition" ],
	},
	getMicrofeedPostDefinition: { 
		argNames: IMapper & [ "definitionName" ],
	},
	getMicrofeedPostDefinitions: { 

	},
	newMicrofeedPostDefinition: { 
		argNames: IMapper & [ "definitionName" ],
	},
	updateMicrofeedPostDefinition: { 
		argNames: IMapper & [ "postDefinition" ],
	},
};

/* SP_Microfeed_MicrofeedAttachmentStore */
export interface SP_Microfeed_MicrofeedAttachmentStore {
	deletePreProcessedAttachment: { 
		argNames: IMapper & [ "attachmentUri" ],
	},
	getImage: { 
		argNames: IMapper & [ "imageUrl", "key", "iv" ],
	},
	preProcessAttachment: { 
		argNames: IMapper & [ "link" ],
	},
	putFile: { 
		argNames: IMapper & [ "originalFileName", "fileData" ],
	},
	putImage: { 
		argNames: IMapper & [ "imageData" ],
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
		argNames: IMapper & [ "name", "bytes" ],
	},
	systemUpdate: { 

	},
	update: { 

	},
};

/* SP_Microfeed_MicrofeedManager */
export interface SP_Microfeed_MicrofeedManager {
	addUserToPostPeopleList: { 
		argNames: IMapper & [ "postIdentifier", "UserLoginName" ],
	},
	clearUnreadMentionsCount: { 

	},
	deleteById: { 
		argNames: IMapper & [ "postIdentifier" ],
	},
	deleteUserFromPostPeopleList: { 
		argNames: IMapper & [ "postIdentifier", "UserLoginName" ],
	},
	getMyCategoricalFeed: { 
		argNames: IMapper & [ "feedOptions" ],
	},
	getMyConsolidatedFeed: { 
		argNames: IMapper & [ "feedOptions" ],
	},
	getMyPublishedFeed: { 
		argNames: IMapper & [ "feedOptions", "typeOfPubFeed", "ShowPublicView" ],
	},
	getPublishedFeed: { 
		argNames: IMapper & [ "feedOwner", "feedOptions", "typeOfPubFeed" ],
	},
	getThread: { 
		argNames: IMapper & [ "postIdentifier" ],
	},
	getUnreadMentionsCount: { 

	},
	like: { 
		argNames: IMapper & [ "postIdentifier" ],
	},
	lockThreadById: { 
		argNames: IMapper & [ "threadIdentifier" ],
	},
	post: { 
		argNames: IMapper & [ "postOptions" ],
	},
	postReply: { 
		argNames: IMapper & [ "postIdentifier", "postReplyOptions" ],
	},
	repopulateLMT: { 
		argNames: IMapper & [ "timeStamp", "secureHash" ],
	},
	unLike: { 
		argNames: IMapper & [ "postIdentifier" ],
	},
	unLockThreadById: { 
		argNames: IMapper & [ "threadIdentifier" ],
	},
	unsubscribeFromEMail: { 
		argNames: IMapper & [ "postIdentifier" ],
	},
};

/* SP_Microfeed_MicrofeedStore */
export interface SP_Microfeed_MicrofeedStore {
	addData: { 
		argNames: IMapper & [ "name", "data" ],
	},
	addDataAsStream: { 
		argNames: IMapper & [ "name", "data" ],
	},
	executePendingOperations: { 

	},
	getItem: { 
		argNames: IMapper & [ "storeIdentifier" ],
	},
	getSocialProperties: { 
		argNames: IMapper & [ "accountName" ],
	},
	incrementUnreadAtMentionCount: { 
		argNames: IMapper & [ "accountName" ],
	},
	newItem: { 
		argNames: IMapper & [ "storeIdentifier" ],
	},
	query: { 
		argNames: IMapper & [ "storeIdentifier", "query" ],
	},
	setPostLikeStatus: { 
		argNames: IMapper & [ "accountName", "postId", "like" ],
	},
};

/* SP_Social_SocialFeedManager */
export interface SP_Social_SocialFeedManager {
	createFileAttachment: { 
		argNames: IMapper & [ "name", "description", "fileData" ],
	},
	createImageAttachment: { 
		argNames: IMapper & [ "name", "description", "imageData" ],
	},
	createPost: { 
		argNames: IMapper & [ "targetId", "creationData" ],
	},
	deletePost: { 
		argNames: IMapper & [ "postId" ],
	},
	getAllLikers: { 
		argNames: IMapper & [ "postId" ],
	},
	getFeed: { 
		argNames: IMapper & [ "type", "options" ],
	},
	getFeedFor: { 
		argNames: IMapper & [ "actorId", "options" ],
	},
	getFullThread: { 
		argNames: IMapper & [ "threadId" ],
	},
	getMentions: { 
		argNames: IMapper & [ "clearUnreadMentions", "options" ],
	},
	getPreview: { 
		argNames: IMapper & [ "itemUrl" ],
	},
	getPreviewImage: { 
		argNames: IMapper & [ "url", "key", "iv" ],
	},
	getUnreadMentionCount: { 

	},
	likePost: { 
		argNames: IMapper & [ "postId" ],
	},
	lockThread: { 
		argNames: IMapper & [ "threadId" ],
	},
	suppressThreadNotifications: { 
		argNames: IMapper & [ "threadId" ],
	},
	unlikePost: { 
		argNames: IMapper & [ "postId" ],
	},
	unlockThread: { 
		argNames: IMapper & [ "threadId" ],
	},
};

/* SP_Social_SocialFollowingManager */
export interface SP_Social_SocialFollowingManager {
	follow: { 
		argNames: IMapper & [ "actor" ],
	},
	getFollowed: { 
		argNames: IMapper & [ "types" ],
	},
	getFollowedCount: { 
		argNames: IMapper & [ "types" ],
	},
	getFollowers: { 

	},
	getSuggestions: { 

	},
	isFollowed: { 
		argNames: IMapper & [ "actor" ],
	},
	stopFollowing: { 
		argNames: IMapper & [ "actor" ],
	},
};

/* SP_Social_SocialRestActor */
export interface SP_Social_SocialRestActor {
	feed: { 
		argNames: IMapper & [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	likes: { 
		argNames: IMapper & [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	mentionFeed: { 
		argNames: IMapper & [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	news: { 
		argNames: IMapper & [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	organizationFeed: { 
		argNames: IMapper & [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	timelineFeed: { 
		argNames: IMapper & [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	unreadMentionCount: { 

	},
};

/* SP_Social_SocialRestFeedManager */
export interface SP_Social_SocialRestFeedManager {
	actor: { 
		argNames: IMapper & [ "item" ],
	},
	my: { 

	},
	post: { 
		argNames: IMapper & [ "ID" ],
	},
};

/* SP_Social_SocialRestFeed */
export interface SP_Social_SocialRestFeed {
	clearUnReadMentionCount: { 
		argNames: IMapper & [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	post: { 
		argNames: IMapper & [ "restCreationData" ],
	},
};

/* SP_Social_SocialRestFollowingManager */
export interface SP_Social_SocialRestFollowingManager {
	follow: { 
		argNames: IMapper & [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
	},
	followed: { 
		argNames: IMapper & [ "types" ],
	},
	followedCount: { 
		argNames: IMapper & [ "types" ],
	},
	followers: { 

	},
	isFollowed: { 
		argNames: IMapper & [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
	},
	my: { 

	},
	stopFollowing: { 
		argNames: IMapper & [ "AccountName", "ActorType", "ContentUri", "Id", "TagGuid" ],
	},
	suggestions: { 

	},
};

/* SP_Social_SocialRestThread */
export interface SP_Social_SocialRestThread {
	delete: { 
		argNames: IMapper & [ "ID" ],
	},
	like: { 
		argNames: IMapper & [ "ID" ],
	},
	likers: { 
		argNames: IMapper & [ "ID" ],
	},
	lock: { 
		argNames: IMapper & [ "ID" ],
	},
	reply: { 
		argNames: IMapper & [ "restCreationData" ],
	},
	unLike: { 
		argNames: IMapper & [ "ID" ],
	},
	unLock: { 
		argNames: IMapper & [ "ID" ],
	},
};

/* SP_UserProfiles_FollowedContent */
export interface SP_UserProfiles_FollowedContent {
	findAndUpdateFollowedGroup: { 
		argNames: IMapper & [ "groupId" ],
	},
	findAndUpdateFollowedItem: { 
		argNames: IMapper & [ "url" ],
	},
	followItem: { 
		argNames: IMapper & [ "item" ],
	},
	getFollowedStatus: { 
		argNames: IMapper & [ "url" ],
	},
	getGroups: { 
		argNames: IMapper & [ "rowLimit" ],
	},
	getItem: { 
		argNames: IMapper & [ "url" ],
	},
	getItems: { 
		argNames: IMapper & [ "options", "subtype" ],
	},
	hasGroupMembershipChangedAndSyncChanges: { 

	},
	isFollowed: { 
		argNames: IMapper & [ "url" ],
	},
	refreshFollowedItem: { 
		argNames: IMapper & [ "item" ],
	},
	setItemPinState: { 
		argNames: IMapper & [ "uri", "groupId", "pinState" ],
	},
	stopFollowing: { 
		argNames: IMapper & [ "url" ],
	},
	updateFollowedGroupForUser: { 
		argNames: IMapper & [ "contextUri", "groupId", "loginName" ],
	},
};

/* SP_UserProfiles_PeopleManager */
export interface SP_UserProfiles_PeopleManager {
	amIFollowedBy: { 
		argNames: IMapper & [ "accountName" ],
	},
	amIFollowing: { 
		argNames: IMapper & [ "accountName" ],
	},
	follow: { 
		argNames: IMapper & [ "accountName" ],
	},
	followTag: { 
		argNames: IMapper & [ "value" ],
	},
	getDefaultDocumentLibrary: { 
		argNames: IMapper & [ "accountName", "createSiteIfNotExists", "siteCreationPriority" ],
	},
	getFollowedTags: { 
		argNames: IMapper & [ "cTagsToFetch" ],
	},
	getFollowersFor: { 
		argNames: IMapper & [ "accountName" ],
	},
	getMyFollowers: { 

	},
	getMyProperties: { 

	},
	getMySuggestions: { 

	},
	getPeopleFollowedBy: { 
		argNames: IMapper & [ "accountName" ],
	},
	getPeopleFollowedByMe: { 

	},
	getPropertiesFor: { 
		argNames: IMapper & [ "accountName" ],
	},
	getSPUserInformation: { 
		argNames: IMapper & [ "accountName", "siteId" ],
	},
	getUserProfileProperties: { 
		argNames: IMapper & [ "accountName" ],
	},
	getUserProfilePropertyFor: { 
		argNames: IMapper & [ "accountName", "propertyName" ],
	},
	hardDeleteUserProfile: { 
		argNames: IMapper & [ "accountName", "userId" ],
	},
	hideSuggestion: { 
		argNames: IMapper & [ "accountName" ],
	},
	removeSPUserInformation: { 
		argNames: IMapper & [ "accountName", "siteId", "redactName" ],
	},
	setMultiValuedProfileProperty: { 
		argNames: IMapper & [ "accountName", "propertyName", "propertyValues" ],
	},
	setMyProfilePicture: { 
		argNames: IMapper & [ "picture" ],
	},
	setSingleValueProfileProperty: { 
		argNames: IMapper & [ "accountName", "propertyName", "propertyValue" ],
	},
	stopFollowing: { 
		argNames: IMapper & [ "accountName" ],
	},
	stopFollowingTag: { 
		argNames: IMapper & [ "value" ],
	},
};

/* SP_UserProfiles_PersonalCache */
export interface SP_UserProfiles_PersonalCache {
	deleteCacheItemsAsync: { 
		argNames: IMapper & [ "cacheItems" ],
	},
	loadUserProfile: { 
		argNames: IMapper & [ "email" ],
	},
	readCache: { 
		argNames: IMapper & [ "folderPath" ],
	},
	readCacheOrCreate: { 
		argNames: IMapper & [ "folderPath", "requiredCacheKeys", "createIfMissing" ],
	},
	readCacheOrCreateOrderById: { 
		argNames: IMapper & [ "folderPath", "requiredCacheKeys", "createIfMissing" ],
	},
	writeCache: { 
		argNames: IMapper & [ "cacheItems" ],
	},
};

/* SP_UserProfiles_ProfileImageStore */
export interface SP_UserProfiles_ProfileImageStore {
	saveUploadedFile: { 
		argNames: IMapper & [ "profileType", "fileNamePrefix", "isFeedAttachment", "clientFilePath", "fileSize", "fileStream" ],
	},
};

/* SP_UserProfiles_ProfileLoader */
export interface SP_UserProfiles_ProfileLoader {
	createPersonalSiteEnqueueBulk: { 
		argNames: IMapper & [ "emailIDs" ],
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
		argNames: IMapper & [ "lcid" ],
	},
	createPersonalSiteEnque: { 
		argNames: IMapper & [ "isInteractive" ],
	},
	createPersonalSiteFromWorkItem: { 
		argNames: IMapper & [ "workItemType" ],
	},
	setMySiteFirstRunExperience: { 
		argNames: IMapper & [ "value" ],
	},
	shareAllSocialData: { 
		argNames: IMapper & [ "shareAll" ],
	},
};

/* PS_CustomField_Collection */
export interface PS_CustomField_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getByAppAlternateId: { 
		argNames: IMapper & [ "objectId" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getByAppAlternateId: { 
		argNames: IMapper & [ "objectId" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
};

/* PS_LookupTable_Collection */
export interface PS_LookupTable_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getByAppAlternateId: { 
		argNames: IMapper & [ "objectId" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
	update: { 

	},
};

/* PS_LookupTable */
export interface PS_LookupTable {
	addMask: { 
		argNames: IMapper & [ "mask" ],
	},
	deleteObject: { 

	},
	updateMask: { 
		argNames: IMapper & [ "mask", "level" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getById: { 
		argNames: IMapper & [ "id" ],
	},
};

/* PS_Calendar_Collection */
export interface PS_Calendar_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
	update: { 

	},
};

/* PS_Calendar */
export interface PS_Calendar {
	copyTo: { 
		argNames: IMapper & [ "name" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
};

/* PS_EnterpriseResource_Collection */
export interface PS_EnterpriseResource_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "newClaimsAccount" ],
	},
};

/* PS_StatusAssignment_Collection */
export interface PS_StatusAssignment_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
	getTimePhaseByUrl: { 
		argNames: IMapper & [ "start", "end" ],
	},
	submitAllStatusUpdates: { 
		argNames: IMapper & [ "comment" ],
	},
	update: { 

	},
};

/* PS_StatusAssignment */
export interface PS_StatusAssignment {
	deleteObject: { 

	},
	submitStatusUpdates: { 
		argNames: IMapper & [ "comment" ],
	},
};

/* PS_StatusAssignmentHistoryLine_Collection */
export interface PS_StatusAssignmentHistoryLine_Collection {
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
};

/* PS_Project */
export interface PS_Project {
	getResourcePlanByUrl: { 
		argNames: IMapper & [ "start", "end", "scale" ],
	},
	leaveProjectStage: { 

	},
	readyToLeaveProjectStage: { 

	},
	updateIdeaListItemStatus: { 
		argNames: IMapper & [ "status" ],
	},
};

/* PS_EngagementComment_Collection */
export interface PS_EngagementComment_Collection {
	add: { 
		argNames: IMapper & [ "comment" ],
	},
};

/* PS_ProjectEngagement_Collection */
export interface PS_ProjectEngagement_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
	update: { 

	},
};

/* PS_ProjectEngagement */
export interface PS_ProjectEngagement {
	deleteObject: { 

	},
	getTimephasedByUrl: { 
		argNames: IMapper & [ "start", "end", "scale", "contourType" ],
	},
};

/* PS_EnterpriseProjectType_Collection */
export interface PS_EnterpriseProjectType_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
	update: { 

	},
};

/* PS_EnterpriseProjectType */
export interface PS_EnterpriseProjectType {
	addDepartment: { 
		argNames: IMapper & [ "departmentValueGuid" ],
	},
	deleteObject: { 

	},
	removeDepartment: { 
		argNames: IMapper & [ "departmentValueGuid" ],
	},
	updateCreatePDP: { 
		argNames: IMapper & [ "pdp" ],
	},
};

/* PS_ProjectDetailPage_Collection */
export interface PS_ProjectDetailPage_Collection {
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
};

/* PS_Phase_Collection */
export interface PS_Phase_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "creationInfo" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
	update: { 

	},
	validate: { 

	},
};

/* PS_PublishedProject */
export interface PS_PublishedProject {
	getResourcePlanByUrl: { 
		argNames: IMapper & [ "start", "end", "scale" ],
	},
	leaveProjectStage: { 

	},
	readyToLeaveProjectStage: { 

	},
	updateIdeaListItemStatus: { 
		argNames: IMapper & [ "status" ],
	},
	checkOut: { 

	},
	createProjectSite: { 
		argNames: IMapper & [ "siteName" ],
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
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
};

/* PS_PublishedProjectResource_Collection */
export interface PS_PublishedProjectResource_Collection {
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
};

/* PS_PublishedTask_Collection */
export interface PS_PublishedTask_Collection {
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
};

/* PS_PublishedTask */
export interface PS_PublishedTask {
	addTaskPlanLink: { 
		argNames: IMapper & [ "parameters" ],
	},
	deleteTaskPlanLink: { 

	},
};

/* PS_EntityLink_Collection */
export interface PS_EntityLink_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "id" ],
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
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "start", "end", "scale" ],
	},
	leaveProjectStage: { 

	},
	readyToLeaveProjectStage: { 

	},
	updateIdeaListItemStatus: { 
		argNames: IMapper & [ "status" ],
	},
	changeEnterpriseProjectType: { 
		argNames: IMapper & [ "enterpriseProjectTypeUid" ],
	},
	checkIn: { 
		argNames: IMapper & [ "force" ],
	},
	getChanges: { 
		argNames: IMapper & [ "token" ],
	},
	publish: { 
		argNames: IMapper & [ "checkIn" ],
	},
	update: { 

	},
	updateCustomFields: { 
		argNames: IMapper & [ "customFieldDictionary" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	addEnterpriseResourceById: { 
		argNames: IMapper & [ "resourceId" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
};

/* PS_ProjectWorkflowInstance_Collection */
export interface PS_ProjectWorkflowInstance_Collection {
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
};

/* PS_ProjectWorkflowInstance */
export interface PS_ProjectWorkflowInstance {
	restartWorkflow: { 

	},
	restartWorkflowSkipToStage: { 
		argNames: IMapper & [ "stageId" ],
	},
};

/* PS_QueueJob_Collection */
export interface PS_QueueJob_Collection {
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getByDateUrl: { 
		argNames: IMapper & [ "effectiveDate" ],
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
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
	update: { 

	},
};

/* PS_ResourceEngagement */
export interface PS_ResourceEngagement {
	deleteObject: { 

	},
	getTimephasedByUrl: { 
		argNames: IMapper & [ "start", "end", "scale", "contourType" ],
	},
};

/* PS_Event_Collection */
export interface PS_Event_Collection {
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
	getByInt: { 
		argNames: IMapper & [ "id" ],
	},
};

/* PS_EventHandler_Collection */
export interface PS_EventHandler_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "id" ],
	},
	getByStart: { 
		argNames: IMapper & [ "start" ],
	},
};

/* PS_ProjectEngagementTimephasedPeriod_Collection */
export interface PS_ProjectEngagementTimephasedPeriod_Collection {
	getByStartUrl: { 
		argNames: IMapper & [ "start" ],
	},
};

/* PS_ProjectServer */
export interface PS_ProjectServer {
	getDeletedPublishedAssignments: { 
		argNames: IMapper & [ "deletedDate" ],
	},
	stopDelegation: { 

	},
};

/* PS_TimeSheetPeriod_Collection */
export interface PS_TimeSheetPeriod_Collection {
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "comment" ],
	},
	update: { 

	},
};

/* PS_TimeSheetLine_Collection */
export interface PS_TimeSheetLine_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getByGuid: { 
		argNames: IMapper & [ "uid" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
};

/* PS_TimeSheetLine */
export interface PS_TimeSheetLine {
	deleteObject: { 

	},
	submit: { 
		argNames: IMapper & [ "comment" ],
	},
};

/* PS_TimeSheetWork_Collection */
export interface PS_TimeSheetWork_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getById: { 
		argNames: IMapper & [ "objectId" ],
	},
	getByStartDate: { 
		argNames: IMapper & [ "start" ],
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
		argNames: IMapper & [ "projId", "jobId", "force" ],
	},
	createProjectFromListItem: { 
		argNames: IMapper & [ "webId", "listId", "itemId", "eptId" ],
	},
	enterProjectStage: { 
		argNames: IMapper & [ "projectId", "stageId" ],
	},
	leaveProjectStage: { 
		argNames: IMapper & [ "projectId" ],
	},
	publishSummaryWithJobId: { 
		argNames: IMapper & [ "projId", "jobId" ],
	},
	publishWithJobId: { 
		argNames: IMapper & [ "projectId", "jobId" ],
	},
	readBooleanProperty: { 
		argNames: IMapper & [ "projectId", "propertyId" ],
	},
	readCurrencyProperty: { 
		argNames: IMapper & [ "projectId", "propertyId" ],
	},
	readDateTimeProperty: { 
		argNames: IMapper & [ "projectId", "propertyId" ],
	},
	readGuidProperty: { 
		argNames: IMapper & [ "projectId", "propertyId" ],
	},
	readIntegerProperty: { 
		argNames: IMapper & [ "projectId", "propertyId" ],
	},
	readNumberProperty: { 
		argNames: IMapper & [ "projectId", "propertyId" ],
	},
	readProjectProperty: { 
		argNames: IMapper & [ "projectId", "propertyId" ],
	},
	readTextProperty: { 
		argNames: IMapper & [ "projectId", "propertyId" ],
	},
	readyToLeaveProjectStage: { 
		argNames: IMapper & [ "projectId" ],
	},
	updateBooleanProperty: { 
		argNames: IMapper & [ "projectId", "propertyId", "value" ],
	},
	updateCurrencyProperty: { 
		argNames: IMapper & [ "projectId", "propertyId", "value" ],
	},
	updateDateTimeProperty: { 
		argNames: IMapper & [ "projectId", "propertyId", "value" ],
	},
	updateGuidProperty: { 
		argNames: IMapper & [ "projectId", "propertyId", "value" ],
	},
	updateIdeaListItemStatus: { 
		argNames: IMapper & [ "projectId", "status" ],
	},
	updateIntegerProperty: { 
		argNames: IMapper & [ "projectId", "propertyId", "value" ],
	},
	updateNumberProperty: { 
		argNames: IMapper & [ "projectId", "propertyId", "value" ],
	},
	updateProjectStageStatus: { 
		argNames: IMapper & [ "projectId", "stageId", "statusInformation", "stageStatusValue", "append" ],
	},
	updateTextProperty: { 
		argNames: IMapper & [ "projectId", "propertyId", "value" ],
	},
};

/* PS_WorkflowDesignerField_Collection */
export interface PS_WorkflowDesignerField_Collection {
	getById: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "start" ],
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
		argNames: IMapper & [ "request" ],
	},
	status: { 
		argNames: IMapper & [ "url" ],
	},
};

/* SP_Publishing_EmbedService */
export interface SP_Publishing_EmbedService {
	embedData: { 
		argNames: IMapper & [ "url", "version" ],
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
		argNames: IMapper & [ "sdnConfiguration" ],
	},
	getPlaybackUrl: { 
		argNames: IMapper & [ "videoFormat" ],
	},
	getStreamingKeyAccessToken: { 

	},
	getVideoDetailedViewCount: { 

	},
	getVideoEmbedCode: { 
		argNames: IMapper & [ "width", "height", "autoplay", "showInfo", "makeResponsive" ],
	},
	getVideoViewProgressCount: { 

	},
	incrementVideoViewProgressCount: { 
		argNames: IMapper & [ "percentageViewed" ],
	},
	incrementViewCount: { 
		argNames: IMapper & [ "viewOrigin" ],
	},
	setPeopleInMedia: { 
		argNames: IMapper & [ "loginNames" ],
	},
	setVideoOwner: { 
		argNames: IMapper & [ "id" ],
	},
	subtitles: { 

	},
	thumbnails: { 
		argNames: IMapper & [ "preferredWidth" ],
	},
	thumbnailStream: { 
		argNames: IMapper & [ "preferredWidth" ],
	},
	update: { 

	},
	uploadCustomThumbnail: { 
		argNames: IMapper & [ "fileExtension", "customVideoThumbnail" ],
	},
};

/* SP_Publishing_VideoItem_Collection */
export interface SP_Publishing_VideoItem_Collection {
	getById: { 
		argNames: IMapper & [ "id" ],
	},
};

/* SP_Publishing_PointPublishingPost_Collection */
export interface SP_Publishing_PointPublishingPost_Collection {
	getById: { 
		argNames: IMapper & [ "id", "publishedOnly" ],
	},
	getByName: { 
		argNames: IMapper & [ "name", "publishedOnly" ],
	},
};

/* SP_Publishing_PointPublishingPost */
export interface SP_Publishing_PointPublishingPost {
	addImageFromUrl: { 
		argNames: IMapper & [ "fromImageUrl" ],
	},
	deleteObject: { 

	},
};

/* SP_Publishing_PointPublishingPostServiceManager */
export interface SP_Publishing_PointPublishingPostServiceManager {
	addBannerImageFromUrl: { 
		argNames: IMapper & [ "fromImageUrl" ],
	},
	deleteMagazine: { 

	},
	getDocProps: { 
		argNames: IMapper & [ "docUrls" ],
	},
	getPostsQuery: { 
		argNames: IMapper & [ "top", "itemIdBoundary", "directionAscending", "publishedOnly", "draftsOnly" ],
	},
	getTopAuthors: { 
		argNames: IMapper & [ "count" ],
	},
	queryGroupNames: { 
		argNames: IMapper & [ "query" ],
	},
	setMagazineProperties: { 
		argNames: IMapper & [ "title", "description", "bannerImageUrl", "bannerColor", "bannerPattern" ],
	},
};

/* SP_Publishing_PointPublishingUser_Collection */
export interface SP_Publishing_PointPublishingUser_Collection {
	addOrUpdateUser: { 
		argNames: IMapper & [ "loginName", "isOwner" ],
	},
	getById: { 
		argNames: IMapper & [ "userId" ],
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
		argNames: IMapper & [ "siteInfo" ],
	},
	getSiteStatus: { 
		argNames: IMapper & [ "siteInfo" ],
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
		argNames: IMapper & [ "id" ],
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
		argNames: IMapper & [ "versionId" ],
	},
	promoteToNews: { 

	},
	publish: { 

	},
	saveDraft: { 
		argNames: IMapper & [ "sitePage" ],
	},
	savePage: { 
		argNames: IMapper & [ "pageStream" ],
	},
	savePageAsDraft: { 
		argNames: IMapper & [ "pageStream" ],
	},
	savePageAsTemplate: { 

	},
	sharePagePreviewByEmail: { 
		argNames: IMapper & [ "message", "recipientEmails" ],
	},
	update: { 

	},
};

/* SP_Publishing_SitePage_Collection */
export interface SP_Publishing_SitePage_Collection {
	ensureTitleResource: { 

	},
	feed: { 
		argNames: IMapper & [ "promotedState", "published", "metadataFilter" ],
	},
	feedTargeted: { 
		argNames: IMapper & [ "promotedState", "published", "metadataFilter" ],
	},
	getById: { 
		argNames: IMapper & [ "id" ],
	},
	getByUrl: { 
		argNames: IMapper & [ "url" ],
	},
	getPageColumnState: { 
		argNames: IMapper & [ "url" ],
	},
	isSitePage: { 
		argNames: IMapper & [ "url" ],
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
		argNames: IMapper & [ "versionId" ],
	},
	promoteToNews: { 

	},
	publish: { 

	},
	saveDraft: { 
		argNames: IMapper & [ "sitePage" ],
	},
	savePage: { 
		argNames: IMapper & [ "pageStream" ],
	},
	savePageAsDraft: { 
		argNames: IMapper & [ "pageStream" ],
	},
	savePageAsTemplate: { 

	},
	sharePagePreviewByEmail: { 
		argNames: IMapper & [ "message", "recipientEmails" ],
	},
	update: { 

	},
};

/* SP_Publishing_RichSharing */
export interface SP_Publishing_RichSharing {
	sharePageByEmail: { 
		argNames: IMapper & [ "url", "message", "recipientEmails" ],
	},
	shareSiteByEmail: { 
		argNames: IMapper & [ "CustomDescription", "CustomTitle", "Message", "Url", "recipientEmails" ],
	},
};

/* SP_Publishing_SharePointHomeServiceManager */
export interface SP_Publishing_SharePointHomeServiceManager {
	getAcronymsAndColors: { 
		argNames: IMapper & [ "labels" ],
	},
};

/* SP_Publishing_SitePageService */
export interface SP_Publishing_SitePageService {
	addImage: { 
		argNames: IMapper & [ "pageName", "imageFileName", "imageStream" ],
	},
	addImageFromExternalUrl: { 
		argNames: IMapper & [ "pageName", "imageFileName", "externalUrl", "subFolderName" ],
	},
	canCreatePromotedPage: { 

	},
	update: { 

	},
};

/* SP_Publishing_SpotlightChannel_Collection */
export interface SP_Publishing_SpotlightChannel_Collection {
	getById: { 
		argNames: IMapper & [ "id" ],
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
		argNames: IMapper & [ "id" ],
	},
};

/* SP_Publishing_VideoChannel */
export interface SP_Publishing_VideoChannel {
	getAllVideos: { 
		argNames: IMapper & [ "skip", "limit" ],
	},
	getChannelPageUrl: { 
		argNames: IMapper & [ "viewMode" ],
	},
	getMyVideos: { 
		argNames: IMapper & [ "skip", "limit" ],
	},
	getPermissionGroup: { 
		argNames: IMapper & [ "permission" ],
	},
	getVideoCount: { 

	},
	update: { 

	},
};

/* SP_Publishing_Search */
export interface SP_Publishing_Search {
	newest: { 
		argNames: IMapper & [ "startItemIndex", "itemLimit" ],
	},
	popular: { 
		argNames: IMapper & [ "startItemIndex", "itemLimit" ],
	},
	query: { 
		argNames: IMapper & [ "queryText", "startItemIndex", "itemLimit", "culture" ],
	},
	queryChannels: { 
		argNames: IMapper & [ "queryText", "startItemIndex", "itemLimit", "culture" ],
	},
	related: { 
		argNames: IMapper & [ "videoId", "startItemIndex", "itemLimit" ],
	},
};

/* SP_Publishing_SpotlightVideo_Collection */
export interface SP_Publishing_SpotlightVideo_Collection {
	getById: { 
		argNames: IMapper & [ "id" ],
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
		argNames: IMapper & [ "language", "extension", "stream" ],
	},
	getSubtitleFile: { 
		argNames: IMapper & [ "name" ],
	},
	remove: { 
		argNames: IMapper & [ "name" ],
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
		argNames: IMapper & [ "startIndex", "limit" ],
	},
	getPermissionGroup: { 
		argNames: IMapper & [ "permission" ],
	},
};

/* SP_Publishing_VideoThumbnail_Collection */
export interface SP_Publishing_VideoThumbnail_Collection {
	getByIndex: { 
		argNames: IMapper & [ "choice" ],
	},
};

/* Microsoft_SharePoint_Client_Search_Query_StringCollection */
export interface Microsoft_SharePoint_Client_Search_Query_StringCollection {
	add: { 
		argNames: IMapper & [ "property" ],
	},
	clear: { 

	},
};

/* Microsoft_SharePoint_Client_Search_Query_RankingLabeling */
export interface Microsoft_SharePoint_Client_Search_Query_RankingLabeling {
	addJudgment: { 
		argNames: IMapper & [ "userQuery", "url", "labelId" ],
	},
	getJudgementsForQuery: { 
		argNames: IMapper & [ "query" ],
	},
	normalizeResultUrl: { 
		argNames: IMapper & [ "url" ],
	},
};

/* Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection */
export interface Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection {
	add: { 
		argNames: IMapper & [ "matchType", "matchValue", "boost" ],
	},
	clear: { 

	},
};

/* Microsoft_SharePoint_Client_Search_Query_SortCollection */
export interface Microsoft_SharePoint_Client_Search_Query_SortCollection {
	add: { 
		argNames: IMapper & [ "strProperty", "direction" ],
	},
	clear: { 

	},
};

/* Microsoft_Office_Server_Search_REST_SearchService */
export interface Microsoft_Office_Server_Search_REST_SearchService {
	autocompletions: { 
		argNames: IMapper & [ "querytext", "sources", "numberOfCompletions", "cursorPosition" ],
	},
	export: { 
		argNames: IMapper & [ "userName", "startTime" ],
	},
	exportpopulartenantqueries: { 

	},
	postquery: { 
		argNames: IMapper & [ "request" ],
	},
	query: { 
		argNames: IMapper & [ "querytext", "queryTemplate", "enableInterleaving", "sourceId", "rankingModelId", "startRow", "rowLimit", "rowsPerPage", "selectProperties", "culture", "refinementFilters", "refiners", "hiddenConstraints", "sortList", "enableStemming", "trimDuplicates", "timeout", "enableNicknames", "enablePhonetic", "enableFQL", "hitHighlightedProperties", "propertiesToGenerateAcronyms", "bypassResultTypes", "processBestBets", "clientType", "personalizationData", "resultsUrl", "queryTag", "trimDuplicatesIncludeId", "totalRowsExactMinimum", "impressionId", "properties", "enableQueryRules", "summaryLength", "maxSnippetLength", "desiredSnippetLength", "uiLanguage", "blockDedupeMode", "generateBlockRankLog", "enableSorting", "collapseSpecification", "processPersonalFavorites", "enableOrderingHitHighlightedProperty", "hitHighlightedMultivaluePropertyLimit", "queryTemplatePropertiesUrl", "timeZoneId", "useOLSQuery", "OLSQuerySession" ],
	},
	recordPageClick: { 
		argNames: IMapper & [ "pageInfo", "clickType", "blockType", "clickedResultId", "subResultIndex", "immediacySourceId", "immediacyQueryString", "immediacyTitle", "immediacyUrl" ],
	},
	resultspageaddress: { 

	},
	searchcenterurl: { 

	},
	suggest: { 
		argNames: IMapper & [ "querytext", "iNumberOfQuerySuggestions", "iNumberOfResultSuggestions", "iNumberOfPopularResultSuggestions", "fPreQuerySuggestions", "fHitHighlighting", "fCapitalizeFirstLetters", "culture", "enableStemming", "showPeopleNameSuggestions", "enableQueryRules", "fPrefixMatchAllTerms", "sourceId", "clientType", "useOLSQuery", "OLSQuerySession", "zeroTermSuggestions" ],
	},
	searchquery: { 
		argNames: IMapper & [ "request" ],
	},
};

/* Microsoft_Office_Server_Search_REST_SearchSetting */
export interface Microsoft_Office_Server_Search_REST_SearchSetting {
	getpromotedresultqueryrules: { 
		argNames: IMapper & [ "siteCollectionLevel", "offset", "numberOfRules" ],
	},
	getqueryconfiguration: { 
		argNames: IMapper & [ "callLocalSearchFarmsOnly" ],
	},
	getxssearchpolicy: { 

	},
	pingadminendpoint: { 

	},
	setxssearchpolicy: { 
		argNames: IMapper & [ "policy" ],
	},
};

/* Microsoft_SharePoint_Client_Search_Analytics_SignalStore */
export interface Microsoft_SharePoint_Client_Search_Analytics_SignalStore {
	signals: { 
		argNames: IMapper & [ "signals" ],
	},
};

/* Microsoft_SharePoint_Portal_GroupService */
export interface Microsoft_SharePoint_Portal_GroupService {
	getGroupImage: { 
		argNames: IMapper & [ "id", "hash", "color" ],
	},
	setGroupImage: { 
		argNames: IMapper & [ "imageStream" ],
	},
	syncGroupProperties: { 

	},
};

/* Microsoft_SharePoint_Portal_GroupSiteManager */
export interface Microsoft_SharePoint_Portal_GroupSiteManager {
	canUserCreateGroup: { 

	},
	create: { 
		argNames: IMapper & [ "groupId" ],
	},
	createGroup: { 
		argNames: IMapper & [ "displayName", "alias", "isPublic", "ownerPrincipalNames", "description", "creationOptions" ],
	},
	createGroupEx: { 
		argNames: IMapper & [ "displayName", "alias", "isPublic", "optionalParams" ],
	},
	createGroupForSite: { 
		argNames: IMapper & [ "displayName", "alias", "isPublic", "optionalParams" ],
	},
	getGroupCreationContext: { 

	},
	getGroupSiteConversionData: { 

	},
	getSiteStatus: { 
		argNames: IMapper & [ "groupId" ],
	},
	getValidSiteUrlFromAlias: { 
		argNames: IMapper & [ "alias", "managedPath", "isTeamSite" ],
	},
	notebook: { 
		argNames: IMapper & [ "groupId" ],
	},
};

/* Microsoft_SharePoint_Portal_SiteLinkingManager */
export interface Microsoft_SharePoint_Portal_SiteLinkingManager {
	getSiteLinks: { 

	},
	linkGroup: { 
		argNames: IMapper & [ "groupId" ],
	},
	unlinkGroup: { 
		argNames: IMapper & [ "groupId" ],
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
		argNames: IMapper & [ "hubSiteId" ],
	},
	create: { 
		argNames: IMapper & [ "request" ],
	},
	delete: { 
		argNames: IMapper & [ "siteId" ],
	},
	status: { 
		argNames: IMapper & [ "url" ],
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
		argNames: IMapper & [ "featureDisplayName", "compatibilityLevel" ],
	},
};

/* Microsoft_SharePoint_Administration_SPAnalyticsUsageService */
export interface Microsoft_SharePoint_Administration_SPAnalyticsUsageService {
	logevent: { 
		argNames: IMapper & [ "usageEntry" ],
	},
};

/* Microsoft_SharePoint_ClientSideComponent_HostedAppsManager */
export interface Microsoft_SharePoint_ClientSideComponent_HostedAppsManager {
	add: { 
		argNames: IMapper & [ "webPartDataAsJson", "hostType" ],
	},
	getById: { 
		argNames: IMapper & [ "id" ],
	},
};

/* Microsoft_SharePoint_ClientSideComponent_HostedApp */
export interface Microsoft_SharePoint_ClientSideComponent_HostedApp {
	delete: { 

	},
	updateWebPartData: { 
		argNames: IMapper & [ "webPartDataAsJson" ],
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
		argNames: IMapper & [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json" ],
	},
	feedbackIndirect: { 
		argNames: IMapper & [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType", "json" ],
	},
	logActivity: { 
		argNames: IMapper & [ "Operation", "ListId", "ListItemUniqueId", "AffectedResourceUrl", "ItemType" ],
	},
};

/* SP_MicroService_MicroServiceManager */
export interface SP_MicroService_MicroServiceManager {
	addMicroserviceWorkItem: { 
		argNames: IMapper & [ "payLoad", "minutes", "properties" ],
	},
	deleteMicroserviceWorkItem: { 
		argNames: IMapper & [ "workItemId" ],
	},
	getServiceInternalUrls: { 
		argNames: IMapper & [ "service" ],
	},
	getServiceUrls: { 
		argNames: IMapper & [ "service" ],
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
		argNames: IMapper & [ "name", "themeJson" ],
	},
	applyTheme: { 
		argNames: IMapper & [ "name", "themeJson" ],
	},
	deleteTenantTheme: { 
		argNames: IMapper & [ "name" ],
	},
	getAvailableThemes: { 

	},
	getHideDefaultThemes: { 

	},
	getTenantTheme: { 
		argNames: IMapper & [ "name" ],
	},
	getTenantThemingOptions: { 

	},
	setHideDefaultThemes: { 
		argNames: IMapper & [ "hideDefaultThemes" ],
	},
	updateTenantTheme: { 
		argNames: IMapper & [ "name", "themeJson" ],
	},
};

/* SP_WebParts_LimitedWebPartManager */
export interface SP_WebParts_LimitedWebPartManager {
	exportWebPart: { 
		argNames: IMapper & [ "webPartId" ],
	},
	importWebPart: { 
		argNames: IMapper & [ "webPartXml" ],
	},
};

/* SP_WebParts_WebPartDefinition_Collection */
export interface SP_WebParts_WebPartDefinition_Collection {
	getByControlId: { 
		argNames: IMapper & [ "controlId" ],
	},
	getById: { 
		argNames: IMapper & [ "id" ],
	},
};

/* SP_WebParts_WebPartDefinition */
export interface SP_WebParts_WebPartDefinition {
	closeWebPart: { 

	},
	deleteWebPart: { 

	},
	moveWebPartTo: { 
		argNames: IMapper & [ "zoneID", "zoneIndex" ],
	},
	openWebPart: { 

	},
	saveWebPartChanges: { 

	},
};

/* SP_Workflow_WorkflowAssociation_Collection */
export interface SP_Workflow_WorkflowAssociation_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getById: { 
		argNames: IMapper & [ "associationId" ],
	},
	getByName: { 
		argNames: IMapper & [ "name" ],
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
		argNames: IMapper & [ "templateId" ],
	},
	getByName: { 
		argNames: IMapper & [ "name" ],
	},
};

/* SP_Workflow_SPWorkflowTask */
export interface SP_Workflow_SPWorkflowTask {
	breakRoleInheritance: { 
		argNames: IMapper & [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: { 

	},
	deleteObject: { 

	},
	getChanges: { 
		argNames: IMapper & [ "query" ],
	},
	getHashtags: { 

	},
	getUserEffectivePermissions: { 
		argNames: IMapper & [ "userName" ],
	},
	getWOPIFrameUrl: { 
		argNames: IMapper & [ "action" ],
	},
	mediaServiceUpdate: { 
		argNames: IMapper & [ "parameters" ],
	},
	mediaServiceUpdateV2: { 
		argNames: IMapper & [ "parameters", "eventFiringEnabled" ],
	},
	overridePolicyTip: { 
		argNames: IMapper & [ "userAction", "justification" ],
	},
	parseAndSetFieldValue: { 
		argNames: IMapper & [ "fieldName", "value" ],
	},
	recycle: { 

	},
	setCommentsDisabled: { 
		argNames: IMapper & [ "value" ],
	},
	setComplianceTag: { 
		argNames: IMapper & [ "complianceTag", "isTagPolicyHold", "isTagPolicyRecord", "isEventBasedTag", "isTagSuperLock" ],
	},
	setComplianceTagWithExplicitMetasUpdate: { 
		argNames: IMapper & [ "complianceTag", "complianceFlags", "complianceTagWrittenTime", "userEmailAddress" ],
	},
	setComplianceTagWithHold: { 
		argNames: IMapper & [ "complianceTag" ],
	},
	setComplianceTagWithMetaInfo: { 
		argNames: IMapper & [ "complianceTag", "blockDelete", "blockEdit", "complianceTagWrittenTime", "userEmailAddress", "isTagSuperLock" ],
	},
	setComplianceTagWithNoHold: { 
		argNames: IMapper & [ "complianceTag" ],
	},
	setComplianceTagWithRecord: { 
		argNames: IMapper & [ "complianceTag" ],
	},
	systemUpdate: { 

	},
	updateEx: { 
		argNames: IMapper & [ "parameters" ],
	},
	updateHashtags: { 
		argNames: IMapper & [ "hashtagsToAdd", "hashtagsToRemove" ],
	},
	updateOverwriteVersion: { 

	},
	validateUpdateListItem: { 
		argNames: IMapper & [ "formValues", "bNewDocumentUpdate", "checkInComment" ],
	},
	update: { 
		argNames: IMapper & [ "properties" ],
	},
};

/* Microsoft_SharePoint_TenantCdn_TenantCdnApi */
export interface Microsoft_SharePoint_TenantCdn_TenantCdnApi {
	getCdnUrls: { 
		argNames: IMapper & [ "items" ],
	},
};

/* Microsoft_SharePoint_Webhooks_Subscription_Collection */
export interface Microsoft_SharePoint_Webhooks_Subscription_Collection {
	add: { 
		argNames: IMapper & [ "parameters" ],
	},
	getById: { 
		argNames: IMapper & [ "id" ],
	},
	remove: { 
		argNames: IMapper & [ "subscriptionId" ],
	},
};

/* Microsoft_SharePoint_Webhooks_Subscription */
export interface Microsoft_SharePoint_Webhooks_Subscription {
	delete: { 

	},
	update: { 
		argNames: IMapper & [ "parameters" ],
	},
};

/* SP_Taxonomy_TaxonomyField */
export interface SP_Taxonomy_TaxonomyField {
	deleteObject: { 

	},
	setShowInDisplayForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInEditForm: { 
		argNames: IMapper & [ "value" ],
	},
	setShowInNewForm: { 
		argNames: IMapper & [ "value" ],
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
		argNames: IMapper & [ "messagesFieldsData" ],
	},
	serviceHealthMessages: { 
		argNames: IMapper & [ "messagesFieldsData" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_SiteCollectionManagementService */
export interface Microsoft_Online_SharePoint_TenantAdministration_SiteCollectionManagementService {
	emailAdmins: { 
		argNames: IMapper & [ "message", "siteIds", "subject" ],
	},
	exportCSVFile: { 

	},
	getSiteDescription: { 
		argNames: IMapper & [ "siteId" ],
	},
	office365ProvidedSharepointSiteActivityDataReady: { 

	},
	resetTimestampUpdateOffice365ProvidedSharepointSiteActivityData: { 

	},
	updateOffice365ProvidedSharepointSiteActivityData: { 
		argNames: IMapper & [ "oauthToken" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_SiteProperties_Collection */
export interface Microsoft_Online_SharePoint_TenantAdministration_SiteProperties_Collection {
	getById: { 
		argNames: IMapper & [ "siteId" ],
	},
	getLockStateById: { 
		argNames: IMapper & [ "siteId" ],
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
		argNames: IMapper & [ "licenses" ],
	},
	connectSiteToHubSiteById: { 
		argNames: IMapper & [ "siteUrl", "hubSiteId" ],
	},
	createSite: { 
		argNames: IMapper & [ "siteCreationProperties" ],
	},
	getIdleSessionSignOutForUnmanagedDevices: { 

	},
	getSitePropertiesByUrl: { 
		argNames: IMapper & [ "url", "includeDetail" ],
	},
	getSitePropertiesFromSharePointByFilters: { 
		argNames: IMapper & [ "speFilter" ],
	},
	getSiteSecondaryAdministrators: { 
		argNames: IMapper & [ "secondaryAdministratorsFieldsData" ],
	},
	getSPOTenantAllWebTemplates: { 

	},
	registerHubSite: { 
		argNames: IMapper & [ "siteUrl" ],
	},
	registerHubSiteWithCreationInformation: { 
		argNames: IMapper & [ "siteUrl", "creationInformation" ],
	},
	removeDeletedSite: { 
		argNames: IMapper & [ "siteUrl" ],
	},
	removeDeletedSitePreferId: { 
		argNames: IMapper & [ "siteUrl", "siteId" ],
	},
	removeSite: { 
		argNames: IMapper & [ "siteUrl" ],
	},
	restoreDeletedSite: { 
		argNames: IMapper & [ "siteUrl" ],
	},
	restoreDeletedSitePreferId: { 
		argNames: IMapper & [ "siteUrl", "siteId" ],
	},
	setIdleSessionSignOutForUnmanagedDevices: { 
		argNames: IMapper & [ "enabled", "warnAfter", "signOutAfter" ],
	},
	setSiteSecondaryAdministrators: { 
		argNames: IMapper & [ "secondaryAdministratorsFieldsData" ],
	},
	unregisterHubSite: { 
		argNames: IMapper & [ "siteUrl" ],
	},
	update: { 

	},
};

/* SP_Translation_SyncTranslator */
export interface SP_Translation_SyncTranslator {
	translate: { 
		argNames: IMapper & [ "inputFile", "outputFile" ],
	},
	translateStream: { 
		argNames: IMapper & [ "inputFile", "fileExtension" ],
	},
};

/* SP_Translation_TranslationJob */
export interface SP_Translation_TranslationJob {
	translateFile: { 
		argNames: IMapper & [ "inputFile", "outputFile" ],
	},
	translateFolder: { 
		argNames: IMapper & [ "inputFolder", "outputFolder", "recursion" ],
	},
	translateLibrary: { 
		argNames: IMapper & [ "inputLibrary", "outputLibrary" ],
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
		argNames: IMapper & [ "taskKey", "attribute" ],
	},
	beginCacheRefresh: { 

	},
	beginExchangeSync: { 

	},
	createPersonalTaskAndPromoteToProviderTask: { 
		argNames: IMapper & [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
	},
	createTask: { 
		argNames: IMapper & [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
	},
	deleteTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	getCalloutInfo: { 
		argNames: IMapper & [ "taskKey" ],
	},
	getRefreshHealthInfo: { 

	},
	getRefreshHistory: { 
		argNames: IMapper & [ "since" ],
	},
	getRefreshStatus: { 
		argNames: IMapper & [ "refreshId" ],
	},
	isExchangeJobPending: { 

	},
	pinTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	promotePersonalTaskToProviderTaskInLocation: { 
		argNames: IMapper & [ "taskKey", "locationId" ],
	},
	readAllNonTaskData: { 

	},
	refreshSingleTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	removeAttributeFromTask: { 
		argNames: IMapper & [ "taskKey", "attribute" ],
	},
	removePinOnTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	updateTaskWithLocalizedValue: { 
		argNames: IMapper & [ "taskKey", "field", "value" ],
	},
};

/* SP_WorkManagement_OM_LocationOrientedSortableSession */
export interface SP_WorkManagement_OM_LocationOrientedSortableSession {
	addAttributeToTask: { 
		argNames: IMapper & [ "taskKey", "attribute" ],
	},
	beginCacheRefresh: { 

	},
	beginExchangeSync: { 

	},
	createPersonalTaskAndPromoteToProviderTask: { 
		argNames: IMapper & [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
	},
	createTask: { 
		argNames: IMapper & [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
	},
	deleteTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	getCalloutInfo: { 
		argNames: IMapper & [ "taskKey" ],
	},
	getRefreshHealthInfo: { 

	},
	getRefreshHistory: { 
		argNames: IMapper & [ "since" ],
	},
	getRefreshStatus: { 
		argNames: IMapper & [ "refreshId" ],
	},
	isExchangeJobPending: { 

	},
	pinTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	promotePersonalTaskToProviderTaskInLocation: { 
		argNames: IMapper & [ "taskKey", "locationId" ],
	},
	readAllNonTaskData: { 

	},
	refreshSingleTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	removeAttributeFromTask: { 
		argNames: IMapper & [ "taskKey", "attribute" ],
	},
	removePinOnTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	updateTaskWithLocalizedValue: { 
		argNames: IMapper & [ "taskKey", "field", "value" ],
	},
	movePersonalTaskToLocation: { 
		argNames: IMapper & [ "taskKey", "newLocationKey" ],
	},
};

/* SP_WorkManagement_OM_LocationOrientedUserOrderedSession */
export interface SP_WorkManagement_OM_LocationOrientedUserOrderedSession {
	addAttributeToTask: { 
		argNames: IMapper & [ "taskKey", "attribute" ],
	},
	beginCacheRefresh: { 

	},
	beginExchangeSync: { 

	},
	createPersonalTaskAndPromoteToProviderTask: { 
		argNames: IMapper & [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
	},
	createTask: { 
		argNames: IMapper & [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
	},
	deleteTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	getCalloutInfo: { 
		argNames: IMapper & [ "taskKey" ],
	},
	getRefreshHealthInfo: { 

	},
	getRefreshHistory: { 
		argNames: IMapper & [ "since" ],
	},
	getRefreshStatus: { 
		argNames: IMapper & [ "refreshId" ],
	},
	isExchangeJobPending: { 

	},
	pinTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	promotePersonalTaskToProviderTaskInLocation: { 
		argNames: IMapper & [ "taskKey", "locationId" ],
	},
	readAllNonTaskData: { 

	},
	refreshSingleTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	removeAttributeFromTask: { 
		argNames: IMapper & [ "taskKey", "attribute" ],
	},
	removePinOnTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	updateTaskWithLocalizedValue: { 
		argNames: IMapper & [ "taskKey", "field", "value" ],
	},
	movePersonalTaskToLocation: { 
		argNames: IMapper & [ "taskKey", "newLocationKey" ],
	},
	reorderTask: { 
		argNames: IMapper & [ "taskKey", "newAfterTaskKey" ],
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
		argNames: IMapper & [ "taskKey", "attribute" ],
	},
	beginCacheRefresh: { 

	},
	beginExchangeSync: { 

	},
	createPersonalTaskAndPromoteToProviderTask: { 
		argNames: IMapper & [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
	},
	createTask: { 
		argNames: IMapper & [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
	},
	deleteTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	getCalloutInfo: { 
		argNames: IMapper & [ "taskKey" ],
	},
	getRefreshHealthInfo: { 

	},
	getRefreshHistory: { 
		argNames: IMapper & [ "since" ],
	},
	getRefreshStatus: { 
		argNames: IMapper & [ "refreshId" ],
	},
	isExchangeJobPending: { 

	},
	pinTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	promotePersonalTaskToProviderTaskInLocation: { 
		argNames: IMapper & [ "taskKey", "locationId" ],
	},
	readAllNonTaskData: { 

	},
	refreshSingleTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	removeAttributeFromTask: { 
		argNames: IMapper & [ "taskKey", "attribute" ],
	},
	removePinOnTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	updateTaskWithLocalizedValue: { 
		argNames: IMapper & [ "taskKey", "field", "value" ],
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
		argNames: IMapper & [ "taskKey", "attribute" ],
	},
	beginCacheRefresh: { 

	},
	beginExchangeSync: { 

	},
	createPersonalTaskAndPromoteToProviderTask: { 
		argNames: IMapper & [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey" ],
	},
	createTask: { 
		argNames: IMapper & [ "taskName", "description", "localizedStartDate", "localizedDueDate", "completed", "pinned", "locationKey", "editUrl" ],
	},
	deleteTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	getCalloutInfo: { 
		argNames: IMapper & [ "taskKey" ],
	},
	getRefreshHealthInfo: { 

	},
	getRefreshHistory: { 
		argNames: IMapper & [ "since" ],
	},
	getRefreshStatus: { 
		argNames: IMapper & [ "refreshId" ],
	},
	isExchangeJobPending: { 

	},
	pinTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	promotePersonalTaskToProviderTaskInLocation: { 
		argNames: IMapper & [ "taskKey", "locationId" ],
	},
	readAllNonTaskData: { 

	},
	refreshSingleTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	removeAttributeFromTask: { 
		argNames: IMapper & [ "taskKey", "attribute" ],
	},
	removePinOnTask: { 
		argNames: IMapper & [ "taskKey" ],
	},
	updateTaskWithLocalizedValue: { 
		argNames: IMapper & [ "taskKey", "field", "value" ],
	},
	reorderTask: { 
		argNames: IMapper & [ "taskKey", "newAfterTaskKey" ],
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
		argNames: IMapper & [ "locationsId" ],
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
		argNames: IMapper & [ "addInType", "queryString" ],
	},
	getByType: { 
		argNames: IMapper & [ "type" ],
	},
};

/* SP_DocumentManagement_DocumentId */
export interface SP_DocumentManagement_DocumentId {
	resetDocIdByServerRelativePath: { 
		argNames: IMapper & [ "DecodedUrl" ],
	},
	resetDocIdsInLibrary: { 
		argNames: IMapper & [ "DecodedUrl", "contentTypeId" ],
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
		argNames: IMapper & [ "odataPostBodyStm" ],
	},
};

/* OBA_Server_ServerWrapper_Taskflow */
export interface OBA_Server_ServerWrapper_Taskflow {
	processTask: { 
		argNames: IMapper & [ "requestBodyStream" ],
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
		argNames: IMapper & [ "propertyName", "value" ],
	},
};

/* SP_WorkflowServices_WorkflowDeploymentService */
export interface SP_WorkflowServices_WorkflowDeploymentService {
	deleteCollateral: { 
		argNames: IMapper & [ "workflowDefinitionId", "leafFileName" ],
	},
	deleteDefinition: { 
		argNames: IMapper & [ "definitionId" ],
	},
	deprecateDefinition: { 
		argNames: IMapper & [ "definitionId" ],
	},
	enumerateDefinitions: { 
		argNames: IMapper & [ "publishedOnly" ],
	},
	enumerateIntegratedApps: { 

	},
	getActivitySignatures: { 
		argNames: IMapper & [ "lastChanged" ],
	},
	getCollateralUri: { 
		argNames: IMapper & [ "workflowDefinitionId", "leafFileName" ],
	},
	getDefinition: { 
		argNames: IMapper & [ "definitionId" ],
	},
	isIntegratedApp: { 

	},
	packageDefinition: { 
		argNames: IMapper & [ "definitionId", "packageDefaultFilename", "packageTitle", "packageDescription" ],
	},
	publishDefinition: { 
		argNames: IMapper & [ "definitionId" ],
	},
	saveCollateral: { 
		argNames: IMapper & [ "workflowDefinitionId", "leafFileName", "fileContent" ],
	},
	validateActivity: { 
		argNames: IMapper & [ "activityXaml" ],
	},
};

/* SP_WorkflowServices_WorkflowInstanceService */
export interface SP_WorkflowServices_WorkflowInstanceService {
	enumerateInstancesForListItem: { 
		argNames: IMapper & [ "listId", "itemId" ],
	},
	enumerateInstancesForListItemWithOffset: { 
		argNames: IMapper & [ "listId", "itemId", "offset" ],
	},
	enumerateInstancesForSite: { 

	},
	enumerateInstancesForSiteWithOffset: { 
		argNames: IMapper & [ "offset" ],
	},
	getInstance: { 
		argNames: IMapper & [ "instanceId" ],
	},
	startWorkflowOnListItemBySubscriptionId: { 
		argNames: IMapper & [ "subscriptionId", "itemId", "payload" ],
	},
};

/* SP_WorkflowServices_InteropService */
export interface SP_WorkflowServices_InteropService {
	cancelWorkflow: { 
		argNames: IMapper & [ "instanceId" ],
	},
	disableEvents: { 
		argNames: IMapper & [ "listId", "itemGuid" ],
	},
	enableEvents: { 
		argNames: IMapper & [ "listId", "itemGuid" ],
	},
	startWorkflow: { 
		argNames: IMapper & [ "associationName", "correlationId", "listId", "itemGuid", "workflowParameters" ],
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
		argNames: IMapper & [ "name" ],
	},
	setExternalVariable: { 
		argNames: IMapper & [ "name", "value" ],
	},
	setProperty: { 
		argNames: IMapper & [ "name", "value" ],
	},
};

/* SP_WorkflowServices_WorkflowSubscriptionService */
export interface SP_WorkflowServices_WorkflowSubscriptionService {
	deleteSubscription: { 
		argNames: IMapper & [ "subscriptionId" ],
	},
	enumerateSubscriptions: { 

	},
	enumerateSubscriptionsByDefinition: { 
		argNames: IMapper & [ "definitionId" ],
	},
	enumerateSubscriptionsByEventSource: { 
		argNames: IMapper & [ "eventSourceId" ],
	},
	enumerateSubscriptionsByList: { 
		argNames: IMapper & [ "listId" ],
	},
	enumerateSubscriptionsByListAndParentContentType: { 
		argNames: IMapper & [ "listId", "parentContentTypeId", "includeNoContentTypeSpecified" ],
	},
	enumerateSubscriptionsByListWithContentType: { 
		argNames: IMapper & [ "listId", "includeContentTypeSpecified" ],
	},
	getSubscription: { 
		argNames: IMapper & [ "subscriptionId" ],
	},
	registerInterestInHostWebList: { 
		argNames: IMapper & [ "listId", "eventName" ],
	},
	registerInterestInList: { 
		argNames: IMapper & [ "listId", "eventName" ],
	},
	unregisterInterestInHostWebList: { 
		argNames: IMapper & [ "listId", "eventName" ],
	},
	unregisterInterestInList: { 
		argNames: IMapper & [ "listId", "eventName" ],
	},
};

/* SP_WorkflowServices_WorkflowMessagingService */
export interface SP_WorkflowServices_WorkflowMessagingService {
	publishEvent: { 
		argNames: IMapper & [ "eventSourceId", "eventName", "payload" ],
	},
};

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionCorporateCatalogAccessor */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionCorporateCatalogAccessor {
	add: { 
		argNames: IMapper & [ "Content", "Overwrite", "Url" ],
	},
};

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata_Collection */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata_Collection {
	getById: { 
		argNames: IMapper & [ "id" ],
	},
};

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata {
	deploy: { 
		argNames: IMapper & [ "skipFeatureDeployment" ],
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
		argNames: IMapper & [ "Content", "Overwrite", "Url" ],
	},
};

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionAppCatalogAllowedItem_Collection */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionAppCatalogAllowedItem_Collection {
	add: { 
		argNames: IMapper & [ "absolutePath" ],
	},
	getByAbsoluteUrl: { 
		argNames: IMapper & [ "absolutePath" ],
	},
	remove: { 
		argNames: IMapper & [ "absolutePath" ],
	},
	removeById: { 
		argNames: IMapper & [ "siteId" ],
	},
};

/* Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog */
export interface Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog {
	getCrawledUrls: { 
		argNames: IMapper & [ "getCountOnly", "maxRows", "queryString", "isLike", "contentSourceID", "errorLevel", "errorID", "startDateTime", "endDateTime" ],
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
		argNames: IMapper & [ "resource", "tokenType" ],
	},
};

/* SP_BusinessData_Runtime_EntityInstance */
export interface SP_BusinessData_Runtime_EntityInstance {
	createCollectionInstance: { 
		argNames: IMapper & [ "fieldDotNotation", "size" ],
	},
	createInstance: { 
		argNames: IMapper & [ "fieldInstanceDotNotation", "fieldDotNotation" ],
	},
	deleteObject: { 

	},
	fromXml: { 
		argNames: IMapper & [ "xml" ],
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
		argNames: IMapper & [ "fieldDotNotation", "size" ],
	},
	createInstance: { 
		argNames: IMapper & [ "fieldInstanceDotNotation", "fieldDotNotation" ],
	},
	fromXml: { 
		argNames: IMapper & [ "xml" ],
	},
	getCollectionSize: { 
		argNames: IMapper & [ "fieldDotNotation" ],
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
		argNames: IMapper & [ "associationName" ],
	},
	getCreatorView: { 
		argNames: IMapper & [ "methodInstanceName" ],
	},
	getDefaultSpecificFinderView: { 

	},
	getFilters: { 
		argNames: IMapper & [ "methodInstanceName" ],
	},
	getFinderView: { 
		argNames: IMapper & [ "methodInstanceName" ],
	},
	getIdentifierCount: { 

	},
	getIdentifiers: { 

	},
	getLobSystem: { 

	},
	getSpecificFinderView: { 
		argNames: IMapper & [ "specificFinderName" ],
	},
	getUpdaterView: { 
		argNames: IMapper & [ "updaterName" ],
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
		argNames: IMapper & [ "fieldDotNotation" ],
	},
	getTypeDescriptor: { 
		argNames: IMapper & [ "fieldDotNotation" ],
	},
	getXmlSchema: { 

	},
};

/* SP_BusinessData_AppBdcCatalog */
export interface SP_BusinessData_AppBdcCatalog {
	getConnectionId: { 
		argNames: IMapper & [ "lobSystemName", "lobSystemInstanceName" ],
	},
	getEntity: { 
		argNames: IMapper & [ "namespace", "name" ],
	},
	getLobSystemInstanceProperty: { 
		argNames: IMapper & [ "lobSystemName", "lobSystemInstanceName", "propertyName" ],
	},
	getLobSystemProperty: { 
		argNames: IMapper & [ "lobSystemName", "propertyName" ],
	},
	getPermissibleConnections: { 

	},
	setConnectionId: { 
		argNames: IMapper & [ "lobSystemName", "lobSystemInstanceName", "connectionId" ],
	},
	setLobSystemInstanceProperty: { 
		argNames: IMapper & [ "lobSystemName", "lobSystemInstanceName", "propertyName", "propertyValue" ],
	},
	setLobSystemProperty: { 
		argNames: IMapper & [ "lobSystemName", "propertyName", "propertyValue" ],
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
		argNames: IMapper & [ "mapProviderName" ],
	},
	menuNodeKey: { 
		argNames: IMapper & [ "currentUrl", "mapProviderName" ],
	},
	menuState: { 
		argNames: IMapper & [ "menuNodeKey", "mapProviderName", "depth", "customProperties" ],
	},
	saveMenuState: { 
		argNames: IMapper & [ "menuState", "mapProviderName" ],
	},
};

/* Microsoft_Online_SharePoint_AppLauncher_AppLauncher */
export interface Microsoft_Online_SharePoint_AppLauncher_AppLauncher {
	getData: { 
		argNames: IMapper & [ "suiteVersion", "isMobileRequest", "locale", "onPremVer" ],
	},
};

/* Microsoft_Online_SharePoint_PointPublishing_PointPublishingAdmin */
export interface Microsoft_Online_SharePoint_PointPublishing_PointPublishingAdmin {
	createTopicMagazine: { 
		argNames: IMapper & [ "magazineName" ],
	},
	deleteTopicMagazine: { 
		argNames: IMapper & [ "magazineId" ],
	},
	provisionPointPublishingAsync: { 

	},
};

/* Microsoft_Online_SharePoint_SPLogger_LogExport */
export interface Microsoft_Online_SharePoint_SPLogger_LogExport {
	getFiles: { 
		argNames: IMapper & [ "partitionId", "logType" ],
	},
	getLogTypes: { 

	},
	getPartitions: { 
		argNames: IMapper & [ "logType" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdmin_MiddleTier_DDIAdapter */
export interface Microsoft_Online_SharePoint_TenantAdmin_MiddleTier_DDIAdapter {
	getList: { 
		argNames: IMapper & [ "schema", "workflow", "stream" ],
	},
	getObject: { 
		argNames: IMapper & [ "schema", "workflow", "stream" ],
	},
	multiObjectExecute: { 
		argNames: IMapper & [ "schema", "workflow", "stream" ],
	},
	newObject: { 
		argNames: IMapper & [ "schema", "workflow", "stream" ],
	},
	removeObjects: { 
		argNames: IMapper & [ "schema", "workflow", "stream" ],
	},
	setObject: { 
		argNames: IMapper & [ "schema", "workflow", "stream" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant_Collection */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant_Collection {
	getByObjectId: { 
		argNames: IMapper & [ "objectId" ],
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
		argNames: IMapper & [ "resource", "scope" ],
	},
	getById: { 
		argNames: IMapper & [ "id" ],
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
		argNames: IMapper & [ "uniqueId" ],
	},
};

/* Microsoft_Online_SharePoint_TenantManagement_Office365Tenant */
export interface Microsoft_Online_SharePoint_TenantManagement_Office365Tenant {
	addPublicCdnOrigin: { 
		argNames: IMapper & [ "origin" ],
	},
	addSdnProvider: { 
		argNames: IMapper & [ "identifier", "license" ],
	},
	addTenantCdnOrigin: { 
		argNames: IMapper & [ "cdnType", "originUrl" ],
	},
	addTenantTheme: { 
		argNames: IMapper & [ "name", "themeJson" ],
	},
	addToCarLibAndCdn: { 
		argNames: IMapper & [ "cdnType", "libUrl", "displayName", "thumbnailUrl" ],
	},
	createTenantCdnDefaultOrigins: { 
		argNames: IMapper & [ "cdnType" ],
	},
	deleteImportProfilePropertiesJob: { 
		argNames: IMapper & [ "jobId" ],
	},
	deleteTenantTheme: { 
		argNames: IMapper & [ "name" ],
	},
	disableSharingForNonOwnersOfSite: { 
		argNames: IMapper & [ "siteUrl" ],
	},
	getAllTenantThemes: { 

	},
	getExternalUsers: { 
		argNames: IMapper & [ "position", "pageSize", "filter", "sortOrder" ],
	},
	getExternalUsersForSite: { 
		argNames: IMapper & [ "siteUrl", "position", "pageSize", "filter", "sortOrder" ],
	},
	getExternalUsersWithSortBy: { 
		argNames: IMapper & [ "position", "pageSize", "filter", "sortPropertyName", "sortOrder" ],
	},
	getHideDefaultThemes: { 

	},
	getIdleSessionSignOutForUnmanagedDevices: { 

	},
	getImportProfilePropertyJob: { 
		argNames: IMapper & [ "jobId" ],
	},
	getImportProfilePropertyJobs: { 

	},
	getTenantCdnEnabled: { 
		argNames: IMapper & [ "cdnType" ],
	},
	getTenantCdnOrigins: { 
		argNames: IMapper & [ "cdnType" ],
	},
	getTenantCdnPolicies: { 
		argNames: IMapper & [ "cdnType" ],
	},
	getTenantTheme: { 
		argNames: IMapper & [ "name" ],
	},
	isSharingDisabledForNonOwnersOfSite: { 
		argNames: IMapper & [ "siteUrl" ],
	},
	queueImportProfileProperties: { 
		argNames: IMapper & [ "idType", "sourceDataIdProperty", "propertyMap", "sourceUri" ],
	},
	removeExternalUsers: { 
		argNames: IMapper & [ "uniqueIds" ],
	},
	removeFromCarAndCdn: { 
		argNames: IMapper & [ "remove", "cdnType", "libUrl" ],
	},
	removePublicCdnOrigin: { 
		argNames: IMapper & [ "originId" ],
	},
	removeSdnProvider: { 

	},
	removeTenantCdnOrigin: { 
		argNames: IMapper & [ "cdnType", "originUrl" ],
	},
	revokeAllUserSessions: { 
		argNames: IMapper & [ "userName" ],
	},
	revokeAllUserSessionsByPuid: { 
		argNames: IMapper & [ "puidList" ],
	},
	setHideDefaultThemes: { 
		argNames: IMapper & [ "hideDefaultThemes" ],
	},
	setIdleSessionSignOutForUnmanagedDevices: { 
		argNames: IMapper & [ "enabled", "warnAfter", "signOutAfter" ],
	},
	setTenantCdnEnabled: { 
		argNames: IMapper & [ "cdnType", "isEnabled" ],
	},
	setTenantCdnPolicy: { 
		argNames: IMapper & [ "cdnType", "policy", "policyValue" ],
	},
	updateTenantTheme: { 
		argNames: IMapper & [ "name", "themeJson" ],
	},
};
