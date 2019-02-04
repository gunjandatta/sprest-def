import { IMapper } from "./base";

/* SP_Site */
export interface SP_Site {
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

/* SP_Audit */
export interface SP_Audit {
	update: IMapper & { 

	},
};

/* SP_ScriptSafeDomain */
export interface SP_ScriptSafeDomain {
	deleteObject: IMapper & { 

	},
};

/* SP_ScriptSafeDomain_Collection */
export interface SP_ScriptSafeDomain_Collection {
	create: IMapper & { 
		argNames: [ "parameters" ],
	},
	getByDomainName: IMapper & { 
		argNames: [ "domainName" ],
	},
};

/* SP_EventReceiverDefinition_Collection */
export interface SP_EventReceiverDefinition_Collection {
	add: IMapper & { 
		argNames: [ "eventReceiverCreationInformation" ],
	},
	getById: IMapper & { 
		argNames: [ "eventReceiverId" ],
	},
};

/* SP_EventReceiverDefinition */
export interface SP_EventReceiverDefinition {
	deleteObject: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* SP_Feature_Collection */
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

/* SP_User_Collection */
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

/* SP_User */
export interface SP_User {
	add: IMapper & { 
		argNames: [ "properties" ],
	},
	update: IMapper & { 
		argNames: [ "properties" ],
	},
};

/* SP_Alert_Collection */
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

/* SP_Alert */
export interface SP_Alert {
	updateAlert: IMapper & { 

	},
};

/* SP_SecurableObject */
export interface SP_SecurableObject {
	breakRoleInheritance: IMapper & { 
		argNames: [ "copyRoleAssignments", "clearSubscopes" ],
	},
	resetRoleInheritance: IMapper & { 

	},
};

/* SP_RoleAssignment_Collection */
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

/* SP_RoleAssignment */
export interface SP_RoleAssignment {
	deleteObject: IMapper & { 

	},
	update: IMapper & { 
		argNames: [ "properties" ],
	},
};

/* SP_RoleDefinition_Collection */
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

/* SP_RoleDefinition */
export interface SP_RoleDefinition {
	deleteObject: IMapper & { 

	},
	update: IMapper & { 
		argNames: [ "properties" ],
	},
};

/* SP_ListItem_Collection */
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

/* SP_ListItem */
export interface SP_ListItem {
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

/* SP_Attachment */
export interface SP_Attachment {
	deleteObject: IMapper & { 

	},
	recycleObject: IMapper & { 

	},
};

/* SP_Attachment_Collection */
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

/* SP_ContentType_Collection */
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

/* SP_ContentType */
export interface SP_ContentType {
	deleteObject: IMapper & { 

	},
	update: IMapper & { 
		argNames: [ "properties" ],
	},
};

/* SP_UserResource */
export interface SP_UserResource {
	getValueForUICulture: IMapper & { 
		argNames: [ "cultureName" ],
	},
	setValueForUICulture: IMapper & { 
		argNames: [ "cultureName", "value" ],
	},
};

/* SP_FieldLink_Collection */
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

/* SP_FieldLink */
export interface SP_FieldLink {
	deleteObject: IMapper & { 

	},
};

/* SP_Field */
export interface SP_Field {
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

/* SP_Field_Collection */
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

/* SP_File_Collection */
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

/* SP_File */
export interface SP_File {
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

/* SP_InformationRightsManagementFileSettings */
export interface SP_InformationRightsManagementFileSettings {
	reset: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* SP_FileVersion_Collection */
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

/* SP_FileVersion */
export interface SP_FileVersion {
	deleteObject: IMapper & { 

	},
	openBinaryStream: IMapper & { 

	},
};

/* SP_Folder_Collection */
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

/* SP_Folder */
export interface SP_Folder {
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

/* SP_List */
export interface SP_List {
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

/* SP_List_Collection */
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

/* SP_View_Collection */
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

/* SP_View */
export interface SP_View {
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

/* SP_ViewFieldCollection */
export interface SP_ViewFieldCollection {
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

/* SP_Form_Collection */
export interface SP_Form_Collection {
	getById: IMapper & { 
		argNames: [ "id" ],
	},
	getByPageType: IMapper & { 
		argNames: [ "formType" ],
	},
};

/* SP_InformationRightsManagementSettings */
export interface SP_InformationRightsManagementSettings {
	reset: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* SP_Web_Collection */
export interface SP_Web_Collection {
	add: IMapper & { 
		argNames: [ "parameters" ],
	},
};

/* SP_Web */
export interface SP_Web {
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

/* SP_Group_Collection */
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

/* SP_Group */
export interface SP_Group {
	setUserAsOwner: IMapper & { 
		argNames: [ "ownerId" ],
	},
	update: IMapper & { 

	},
};

/* SP_ClientWebPart_Collection */
export interface SP_ClientWebPart_Collection {
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* SP_ClientWebPart */
export interface SP_ClientWebPart {
	render: IMapper & { 
		argNames: [ "properties" ],
	},
};

/* SP_ListTemplate_Collection */
export interface SP_ListTemplate_Collection {
	getByName: IMapper & { 
		argNames: [ "name" ],
	},
};

/* SP_ListTemplate */
export interface SP_ListTemplate {
	getGlobalSchemaXml: IMapper & { 

	},
};

/* SP_Navigation */
export interface SP_Navigation {
	getNodeById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* SP_NavigationNode_Collection */
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

/* SP_NavigationNode */
export interface SP_NavigationNode {
	deleteObject: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* SP_WebInformation_Collection */
export interface SP_WebInformation_Collection {
	add: IMapper & { 
		argNames: [ "parameters" ],
	},
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* SP_PushNotificationSubscriber_Collection */
export interface SP_PushNotificationSubscriber_Collection {
	getByStoreId: IMapper & { 
		argNames: [ "id" ],
	},
};

/* SP_PushNotificationSubscriber */
export interface SP_PushNotificationSubscriber {
	update: IMapper & { 

	},
};

/* SP_RecycleBinItem_Collection */
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

/* SP_RecycleBinItem */
export interface SP_RecycleBinItem {
	deleteObject: IMapper & { 

	},
	moveToSecondStage: IMapper & { 

	},
	restore: IMapper & { 

	},
};

/* SP_RegionalSettings */
export interface SP_RegionalSettings {
	update: IMapper & { 

	},
};

/* SP_LanguageCollection */
export interface SP_LanguageCollection {
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* SP_TimeZone_Collection */
export interface SP_TimeZone_Collection {
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* SP_TimeZone */
export interface SP_TimeZone {
	localTimeToUTC: IMapper & { 
		argNames: [ "date" ],
	},
	uTCToLocalTime: IMapper & { 
		argNames: [ "date" ],
	},
};

/* SP_ThemeInfo */
export interface SP_ThemeInfo {
	getThemeFontByName: IMapper & { 
		argNames: [ "name", "lcid" ],
	},
	getThemeShadeByName: IMapper & { 
		argNames: [ "name" ],
	},
};

/* SP_UserCustomAction_Collection */
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

/* SP_UserCustomAction */
export interface SP_UserCustomAction {
	deleteObject: IMapper & { 

	},
	update: IMapper & { 
		argNames: [ "properties" ],
	},
};

/* SP_ListItemVersion_Collection */
export interface SP_ListItemVersion_Collection {
	getById: IMapper & { 
		argNames: [ "versionId" ],
	},
};

/* SP_ListItemVersion */
export interface SP_ListItemVersion {
	deleteObject: IMapper & { 

	},
};

/* SP_SPAppLicenseManager */
export interface SP_SPAppLicenseManager {
	checkLicense: IMapper & { 
		argNames: [ "productId" ],
	},
};

/* SP_UserSolution_Collection */
export interface SP_UserSolution_Collection {
	add: IMapper & { 
		argNames: [ "solutionGalleryItemId" ],
	},
};

/* SP_AppInstance */
export interface SP_AppInstance {
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

/* SP_ObjectSharingInformation */
export interface SP_ObjectSharingInformation {
	getSharedWithUsers: IMapper & { 

	},
};

/* SP_CheckedOutFile_Collection */
export interface SP_CheckedOutFile_Collection {
	getByPath: IMapper & { 
		argNames: [ "DecodedUrl" ],
	},
};

/* SP_CheckedOutFile */
export interface SP_CheckedOutFile {
	takeOverCheckOut: IMapper & { 

	},
};

/* SP_RequestContext */
export interface SP_RequestContext {
	getRemoteContext: IMapper & { 

	},
};

/* SP_FieldCalculated */
export interface SP_FieldCalculated {
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

/* SP_FieldMultiChoice */
export interface SP_FieldMultiChoice {
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

/* SP_FieldChoice */
export interface SP_FieldChoice {
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

/* SP_FieldComputed */
export interface SP_FieldComputed {
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

/* SP_FieldNumber */
export interface SP_FieldNumber {
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

/* SP_FieldCurrency */
export interface SP_FieldCurrency {
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

/* SP_FieldDateTime */
export interface SP_FieldDateTime {
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

/* SP_FieldGeolocation */
export interface SP_FieldGeolocation {
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

/* SP_FieldGuid */
export interface SP_FieldGuid {
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

/* SP_FieldMultiLineText */
export interface SP_FieldMultiLineText {
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

/* SP_FieldLocation */
export interface SP_FieldLocation {
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

/* SP_FieldLookup */
export interface SP_FieldLookup {
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

/* SP_FieldRatingScale */
export interface SP_FieldRatingScale {
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

/* SP_FieldText */
export interface SP_FieldText {
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

/* SP_FieldUrl */
export interface SP_FieldUrl {
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

/* SP_FieldUser */
export interface SP_FieldUser {
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

/* SP_HubSite_Collection */
export interface SP_HubSite_Collection {
	getById: IMapper & { 
		argNames: [ "hubSiteId" ],
	},
};

/* SP_HubSite */
export interface SP_HubSite {
	delete: IMapper & { 

	},
};

/* SP_RelatedField_Collection */
export interface SP_RelatedField_Collection {
	getByFieldId: IMapper & { 
		argNames: [ "fieldId" ],
	},
};

/* SP_RemoteWeb */
export interface SP_RemoteWeb {
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

/* SP_WebTemplate_Collection */
export interface SP_WebTemplate_Collection {
	getByName: IMapper & { 
		argNames: [ "name" ],
	},
};

/* SP_Directory_DirectorySession */
export interface SP_Directory_DirectorySession {
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

/* SP_Directory_Group_Collection */
export interface SP_Directory_Group_Collection {
	add: IMapper & { 
		argNames: [ "objectId" ],
	},
	remove: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* SP_Directory_Group */
export interface SP_Directory_Group {
	delete: IMapper & { 

	},
};

/* SP_Directory_User_Collection */
export interface SP_Directory_User_Collection {
	add: IMapper & { 
		argNames: [ "objectId", "principalName" ],
	},
	remove: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* SP_Directory_User */
export interface SP_Directory_User {
	getUserLinks: IMapper & { 
		argNames: [ "linkName", "groupType" ],
	},
};

/* SP_CompliancePolicy_SPPolicyStoreProxy */
export interface SP_CompliancePolicy_SPPolicyStoreProxy {
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

/* MS_FileServices_FileSystemItem_Collection */
export interface MS_FileServices_FileSystemItem_Collection {
	add: IMapper & { 
		argNames: [ "name", "overwrite", "content" ],
	},
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* MS_FileServices_File */
export interface MS_FileServices_File {
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

/* MS_FileServices_Folder */
export interface MS_FileServices_Folder {
	deleteObject: IMapper & { 

	},
	moveTo: IMapper & { 
		argNames: [ "target" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation_Collection {
	getByLocation: IMapper & { 
		argNames: [ "location" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation {
	deleteObject: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmGroupMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmGroupMoveJob_Collection {
	getByMoveId: IMapper & { 
		argNames: [ "moveId" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmGroupMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmGroupMoveJob {
	update: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmSiteMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmSiteMoveJob_Collection {
	getByMoveId: IMapper & { 
		argNames: [ "moveId" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmSiteMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmSiteMoveJob {
	update: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmUserMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmUserMoveJob_Collection {
	getByMoveId: IMapper & { 
		argNames: [ "moveId" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmUserMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmUserMoveJob {
	update: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantProperty_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantProperty_Collection {
	getByPropertyNameAndGeoLocation: IMapper & { 
		argNames: [ "propertyName", "geo" ],
	},
	getChanges: IMapper & { 
		argNames: [ "startTimeInUtc" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantProperty */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantProperty {
	deleteObject: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_GeoAdministrator_Collection */
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

/* Microsoft_Online_SharePoint_MultiGeo_Service_GeoAdministrator */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GeoAdministrator {
	deleteObject: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_GeoExperience */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GeoExperience {
	upgradeAllInstancesToSPOMode: IMapper & { 

	},
	upgradeToSPOMode: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_GeoTenantInstanceInformation_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GeoTenantInstanceInformation_Collection {
	getByGeoLocation: IMapper & { 
		argNames: [ "geoLocation" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob_Collection {
	getByGroupName: IMapper & { 
		argNames: [ "groupname" ],
	},
	getMoveReport: IMapper & { 
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob {
	cancel: IMapper & { 

	},
	deleteObject: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta {
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

/* Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob_Collection {
	getByUrl: IMapper & { 
		argNames: [ "url" ],
	},
	getMoveReport: IMapper & { 
		argNames: [ "moveState", "moveDirection", "limit", "startTime", "endTime" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob {
	cancel: IMapper & { 

	},
	deleteObject: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_SiteRenameJob_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_SiteRenameJob_Collection {
	getBySiteUrl: IMapper & { 
		argNames: [ "siteUrl" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota_Collection {
	getByLocation: IMapper & { 
		argNames: [ "geoLocation" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota {
	update: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_TaxonomyReplicationParameters */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_TaxonomyReplicationParameters {
	update: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_UnifiedGroup_Collection */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_UnifiedGroup_Collection {
	getByAlias: IMapper & { 
		argNames: [ "alias" ],
	},
};

/* Microsoft_Online_SharePoint_MultiGeo_Service_UserMoveJob_Collection */
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

/* Microsoft_Online_SharePoint_MultiGeo_Service_UserMoveJob */
export interface Microsoft_Online_SharePoint_MultiGeo_Service_UserMoveJob {
	cancel: IMapper & { 

	},
	deleteObject: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* SP_Directory_Provider_DirectoryNotification */
export interface SP_Directory_Provider_DirectoryNotification {
	notifyChanges: IMapper & { 
		argNames: [ "directoryObjectChanges" ],
	},
};

/* SP_Directory_Provider_SharePointDirectoryProvider */
export interface SP_Directory_Provider_SharePointDirectoryProvider {
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

/* SP_Microfeed_MicrofeedPostDefinitionManager */
export interface SP_Microfeed_MicrofeedPostDefinitionManager {
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

/* SP_Microfeed_MicrofeedAttachmentStore */
export interface SP_Microfeed_MicrofeedAttachmentStore {
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

/* SP_Microfeed_MicrofeedData_Collection */
export interface SP_Microfeed_MicrofeedData_Collection {
	deleteAll: IMapper & { 

	},
};

/* SP_Microfeed_MicrofeedData */
export interface SP_Microfeed_MicrofeedData {
	addAttachment: IMapper & { 
		argNames: [ "name", "bytes" ],
	},
	systemUpdate: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* SP_Microfeed_MicrofeedManager */
export interface SP_Microfeed_MicrofeedManager {
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

/* SP_Microfeed_MicrofeedStore */
export interface SP_Microfeed_MicrofeedStore {
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

/* SP_Social_SocialFeedManager */
export interface SP_Social_SocialFeedManager {
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

/* SP_Social_SocialFollowingManager */
export interface SP_Social_SocialFollowingManager {
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

/* SP_Social_SocialRestActor */
export interface SP_Social_SocialRestActor {
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

/* SP_Social_SocialRestFeedManager */
export interface SP_Social_SocialRestFeedManager {
	actor: IMapper & { 
		argNames: [ "item" ],
	},
	my: IMapper & { 

	},
	post: IMapper & { 
		argNames: [ "ID" ],
	},
};

/* SP_Social_SocialRestFeed */
export interface SP_Social_SocialRestFeed {
	clearUnReadMentionCount: IMapper & { 
		argNames: [ "MaxThreadCount", "NewerThan", "OlderThan", "SortOrder" ],
	},
	post: IMapper & { 
		argNames: [ "restCreationData" ],
	},
};

/* SP_Social_SocialRestFollowingManager */
export interface SP_Social_SocialRestFollowingManager {
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

/* SP_Social_SocialRestThread */
export interface SP_Social_SocialRestThread {
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

/* SP_UserProfiles_FollowedContent */
export interface SP_UserProfiles_FollowedContent {
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

/* SP_UserProfiles_PeopleManager */
export interface SP_UserProfiles_PeopleManager {
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

/* SP_UserProfiles_PersonalCache */
export interface SP_UserProfiles_PersonalCache {
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

/* SP_UserProfiles_ProfileImageStore */
export interface SP_UserProfiles_ProfileImageStore {
	saveUploadedFile: IMapper & { 
		argNames: [ "profileType", "fileNamePrefix", "isFeedAttachment", "clientFilePath", "fileSize", "fileStream" ],
	},
};

/* SP_UserProfiles_ProfileLoader */
export interface SP_UserProfiles_ProfileLoader {
	createPersonalSiteEnqueueBulk: IMapper & { 
		argNames: [ "emailIDs" ],
	},
	getUserProfile: IMapper & { 

	},
};

/* SP_UserProfiles_UserProfilePropertiesForUser */
export interface SP_UserProfiles_UserProfilePropertiesForUser {
	getPropertyNames: IMapper & { 

	},
};

/* SP_UserProfiles_UserProfile */
export interface SP_UserProfiles_UserProfile {
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

/* PS_CustomField_Collection */
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

/* PS_CustomField */
export interface PS_CustomField {
	deleteObject: IMapper & { 

	},
};

/* PS_LookupEntry */
export interface PS_LookupEntry {
	deleteObject: IMapper & { 

	},
};

/* PS_LookupEntry_Collection */
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

/* PS_LookupTable_Collection */
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

/* PS_LookupTable */
export interface PS_LookupTable {
	addMask: IMapper & { 
		argNames: [ "mask" ],
	},
	deleteObject: IMapper & { 

	},
	updateMask: IMapper & { 
		argNames: [ "mask", "level" ],
	},
};

/* PS_CalendarException */
export interface PS_CalendarException {
	deleteObject: IMapper & { 

	},
};

/* PS_CalendarException_Collection */
export interface PS_CalendarException_Collection {
	add: IMapper & { 
		argNames: [ "parameters" ],
	},
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* PS_Calendar_Collection */
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

/* PS_Calendar */
export interface PS_Calendar {
	copyTo: IMapper & { 
		argNames: [ "name" ],
	},
	deleteObject: IMapper & { 

	},
};

/* PS_BaseCalendarException */
export interface PS_BaseCalendarException {
	deleteObject: IMapper & { 

	},
};

/* PS_DraftAssignment */
export interface PS_DraftAssignment {
	deleteObject: IMapper & { 

	},
};

/* PS_DraftAssignment_Collection */
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

/* PS_EnterpriseResource_Collection */
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

/* PS_EnterpriseResource */
export interface PS_EnterpriseResource {
	deleteObject: IMapper & { 

	},
	forceCheckIn: IMapper & { 

	},
	updateClaimsAccount: IMapper & { 
		argNames: [ "newClaimsAccount" ],
	},
};

/* PS_StatusAssignment_Collection */
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

/* PS_StatusAssignment */
export interface PS_StatusAssignment {
	deleteObject: IMapper & { 

	},
	submitStatusUpdates: IMapper & { 
		argNames: [ "comment" ],
	},
};

/* PS_StatusAssignmentHistoryLine_Collection */
export interface PS_StatusAssignmentHistoryLine_Collection {
	getById: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* PS_Project */
export interface PS_Project {
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

/* PS_EngagementComment_Collection */
export interface PS_EngagementComment_Collection {
	add: IMapper & { 
		argNames: [ "comment" ],
	},
};

/* PS_ProjectEngagement_Collection */
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

/* PS_ProjectEngagement */
export interface PS_ProjectEngagement {
	deleteObject: IMapper & { 

	},
	getTimephasedByUrl: IMapper & { 
		argNames: [ "start", "end", "scale", "contourType" ],
	},
};

/* PS_EnterpriseProjectType_Collection */
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

/* PS_EnterpriseProjectType */
export interface PS_EnterpriseProjectType {
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

/* PS_ProjectDetailPage_Collection */
export interface PS_ProjectDetailPage_Collection {
	getByGuid: IMapper & { 
		argNames: [ "uid" ],
	},
	getById: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* PS_Phase_Collection */
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

/* PS_Phase */
export interface PS_Phase {
	deleteObject: IMapper & { 

	},
};

/* PS_Stage_Collection */
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

/* PS_Stage */
export interface PS_Stage {
	deleteObject: IMapper & { 

	},
};

/* PS_StageCustomField_Collection */
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

/* PS_StageCustomField */
export interface PS_StageCustomField {
	deleteObject: IMapper & { 

	},
};

/* PS_StageDetailPage_Collection */
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

/* PS_StageDetailPage */
export interface PS_StageDetailPage {
	deleteObject: IMapper & { 

	},
};

/* PS_PublishedProject_Collection */
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

/* PS_PublishedProject */
export interface PS_PublishedProject {
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

/* PS_PublishedAssignment_Collection */
export interface PS_PublishedAssignment_Collection {
	getByGuid: IMapper & { 
		argNames: [ "uid" ],
	},
	getById: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* PS_PublishedProjectResource_Collection */
export interface PS_PublishedProjectResource_Collection {
	getByGuid: IMapper & { 
		argNames: [ "uid" ],
	},
	getById: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* PS_PublishedTask_Collection */
export interface PS_PublishedTask_Collection {
	getByGuid: IMapper & { 
		argNames: [ "uid" ],
	},
	getById: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* PS_PublishedTask */
export interface PS_PublishedTask {
	addTaskPlanLink: IMapper & { 
		argNames: [ "parameters" ],
	},
	deleteTaskPlanLink: IMapper & { 

	},
};

/* PS_EntityLink_Collection */
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

/* PS_EntityLink */
export interface PS_EntityLink {
	deleteObject: IMapper & { 

	},
};

/* PS_PublishedTaskLink_Collection */
export interface PS_PublishedTaskLink_Collection {
	getByGuid: IMapper & { 
		argNames: [ "uid" ],
	},
	getById: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* PS_TaskPlanLink */
export interface PS_TaskPlanLink {
	deleteObject: IMapper & { 

	},
};

/* PS_DraftProject */
export interface PS_DraftProject {
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

/* PS_DraftProjectResource */
export interface PS_DraftProjectResource {
	deleteObject: IMapper & { 

	},
};

/* PS_DraftProjectResource_Collection */
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

/* PS_DraftTaskLink */
export interface PS_DraftTaskLink {
	deleteObject: IMapper & { 

	},
};

/* PS_DraftTaskLink_Collection */
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

/* PS_DraftTask */
export interface PS_DraftTask {
	deleteObject: IMapper & { 

	},
};

/* PS_DraftTask_Collection */
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

/* PS_ProjectWorkflowInstance_Collection */
export interface PS_ProjectWorkflowInstance_Collection {
	getById: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* PS_ProjectWorkflowInstance */
export interface PS_ProjectWorkflowInstance {
	restartWorkflow: IMapper & { 

	},
	restartWorkflowSkipToStage: IMapper & { 
		argNames: [ "stageId" ],
	},
};

/* PS_QueueJob_Collection */
export interface PS_QueueJob_Collection {
	getByGuid: IMapper & { 
		argNames: [ "uid" ],
	},
	getById: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* PS_QueueJob */
export interface PS_QueueJob {
	cancel: IMapper & { 

	},
};

/* PS_EnterpriseResourceCostRate_Collection */
export interface PS_EnterpriseResourceCostRate_Collection {
	add: IMapper & { 
		argNames: [ "parameters" ],
	},
	getByDateUrl: IMapper & { 
		argNames: [ "effectiveDate" ],
	},
};

/* PS_EnterpriseResourceCostRate */
export interface PS_EnterpriseResourceCostRate {
	restfulDelete: IMapper & { 

	},
	rESTfulUpdate: IMapper & { 

	},
};

/* PS_ResourceEngagement_Collection */
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

/* PS_ResourceEngagement */
export interface PS_ResourceEngagement {
	deleteObject: IMapper & { 

	},
	getTimephasedByUrl: IMapper & { 
		argNames: [ "start", "end", "scale", "contourType" ],
	},
};

/* PS_Event_Collection */
export interface PS_Event_Collection {
	getById: IMapper & { 
		argNames: [ "objectId" ],
	},
	getByInt: IMapper & { 
		argNames: [ "id" ],
	},
};

/* PS_EventHandler_Collection */
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

/* PS_EventHandler */
export interface PS_EventHandler {
	deleteObject: IMapper & { 

	},
};

/* PS_LookupCost */
export interface PS_LookupCost {
	deleteObject: IMapper & { 

	},
};

/* PS_LookupDate */
export interface PS_LookupDate {
	deleteObject: IMapper & { 

	},
};

/* PS_LookupDuration */
export interface PS_LookupDuration {
	deleteObject: IMapper & { 

	},
};

/* PS_LookupNumber */
export interface PS_LookupNumber {
	deleteObject: IMapper & { 

	},
};

/* PS_LookupText */
export interface PS_LookupText {
	deleteObject: IMapper & { 

	},
};

/* PS_PlanAssignment_Collection */
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

/* PS_PlanAssignment */
export interface PS_PlanAssignment {
	deleteObject: IMapper & { 

	},
};

/* PS_PlanAssignmentInterval_Collection */
export interface PS_PlanAssignmentInterval_Collection {
	getById: IMapper & { 
		argNames: [ "id" ],
	},
	getByStart: IMapper & { 
		argNames: [ "start" ],
	},
};

/* PS_ProjectEngagementTimephasedPeriod_Collection */
export interface PS_ProjectEngagementTimephasedPeriod_Collection {
	getByStartUrl: IMapper & { 
		argNames: [ "start" ],
	},
};

/* PS_ProjectServer */
export interface PS_ProjectServer {
	getDeletedPublishedAssignments: IMapper & { 
		argNames: [ "deletedDate" ],
	},
	stopDelegation: IMapper & { 

	},
};

/* PS_TimeSheetPeriod_Collection */
export interface PS_TimeSheetPeriod_Collection {
	getByGuid: IMapper & { 
		argNames: [ "uid" ],
	},
	getById: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* PS_TimeSheetPeriod */
export interface PS_TimeSheetPeriod {
	createTimeSheet: IMapper & { 

	},
};

/* PS_TimeSheet */
export interface PS_TimeSheet {
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

/* PS_TimeSheetLine_Collection */
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

/* PS_TimeSheetLine */
export interface PS_TimeSheetLine {
	deleteObject: IMapper & { 

	},
	submit: IMapper & { 
		argNames: [ "comment" ],
	},
};

/* PS_TimeSheetWork_Collection */
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

/* PS_TimeSheetWork */
export interface PS_TimeSheetWork {
	deleteObject: IMapper & { 

	},
};

/* PS_WorkflowActivities */
export interface PS_WorkflowActivities {
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

/* PS_WorkflowDesignerField_Collection */
export interface PS_WorkflowDesignerField_Collection {
	getById: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* PS_ResourceCalendarException */
export interface PS_ResourceCalendarException {
	deleteObject: IMapper & { 

	},
};

/* PS_ResourceEngagementTimephasedPeriod_Collection */
export interface PS_ResourceEngagementTimephasedPeriod_Collection {
	getByStartUrl: IMapper & { 
		argNames: [ "start" ],
	},
};

/* PS_ResourcePlan */
export interface PS_ResourcePlan {
	deleteObject: IMapper & { 

	},
	forceCheckIn: IMapper & { 

	},
	publish: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* PS_ServiceStatus */
export interface PS_ServiceStatus {
	stopDelegation: IMapper & { 

	},
};

/* SP_Publishing_CommunicationSite */
export interface SP_Publishing_CommunicationSite {
	create: IMapper & { 
		argNames: [ "request" ],
	},
	status: IMapper & { 
		argNames: [ "url" ],
	},
};

/* SP_Publishing_EmbedService */
export interface SP_Publishing_EmbedService {
	embedData: IMapper & { 
		argNames: [ "url", "version" ],
	},
};

/* SP_Publishing_VideoItem */
export interface SP_Publishing_VideoItem {
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

/* SP_Publishing_VideoItem_Collection */
export interface SP_Publishing_VideoItem_Collection {
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* SP_Publishing_PointPublishingPost_Collection */
export interface SP_Publishing_PointPublishingPost_Collection {
	getById: IMapper & { 
		argNames: [ "id", "publishedOnly" ],
	},
	getByName: IMapper & { 
		argNames: [ "name", "publishedOnly" ],
	},
};

/* SP_Publishing_PointPublishingPost */
export interface SP_Publishing_PointPublishingPost {
	addImageFromUrl: IMapper & { 
		argNames: [ "fromImageUrl" ],
	},
	deleteObject: IMapper & { 

	},
};

/* SP_Publishing_PointPublishingPostServiceManager */
export interface SP_Publishing_PointPublishingPostServiceManager {
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

/* SP_Publishing_PointPublishingUser_Collection */
export interface SP_Publishing_PointPublishingUser_Collection {
	addOrUpdateUser: IMapper & { 
		argNames: [ "loginName", "isOwner" ],
	},
	getById: IMapper & { 
		argNames: [ "userId" ],
	},
};

/* SP_Publishing_PointPublishingUser */
export interface SP_Publishing_PointPublishingUser {
	deleteUserFromContainerGroup: IMapper & { 

	},
};

/* SP_Publishing_PointPublishingSiteManager */
export interface SP_Publishing_PointPublishingSiteManager {
	create: IMapper & { 
		argNames: [ "siteInfo" ],
	},
	getSiteStatus: IMapper & { 
		argNames: [ "siteInfo" ],
	},
};

/* SP_Publishing_PointPublishingTenantManager */
export interface SP_Publishing_PointPublishingTenantManager {
	isBlogEnabled: IMapper & { 

	},
};

/* SP_Publishing_SitePageMetadata_Collection */
export interface SP_Publishing_SitePageMetadata_Collection {
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* SP_Publishing_SitePage */
export interface SP_Publishing_SitePage {
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

/* SP_Publishing_SitePage_Collection */
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

/* SP_Publishing_RepostPage_Collection */
export interface SP_Publishing_RepostPage_Collection {
	isContentTypeAvailable: IMapper & { 

	},
};

/* SP_Publishing_RepostPage */
export interface SP_Publishing_RepostPage {
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

/* SP_Publishing_RichSharing */
export interface SP_Publishing_RichSharing {
	sharePageByEmail: IMapper & { 
		argNames: [ "url", "message", "recipientEmails" ],
	},
	shareSiteByEmail: IMapper & { 
		argNames: [ "CustomDescription", "CustomTitle", "Message", "Url", "recipientEmails" ],
	},
};

/* SP_Publishing_SharePointHomeServiceManager */
export interface SP_Publishing_SharePointHomeServiceManager {
	getAcronymsAndColors: IMapper & { 
		argNames: [ "labels" ],
	},
};

/* SP_Publishing_SitePageService */
export interface SP_Publishing_SitePageService {
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

/* SP_Publishing_SpotlightChannel_Collection */
export interface SP_Publishing_SpotlightChannel_Collection {
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* SP_Publishing_SpotlightChannel */
export interface SP_Publishing_SpotlightChannel {
	deleteObject: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* SP_Publishing_VideoChannel_Collection */
export interface SP_Publishing_VideoChannel_Collection {
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* SP_Publishing_VideoChannel */
export interface SP_Publishing_VideoChannel {
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

/* SP_Publishing_Search */
export interface SP_Publishing_Search {
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

/* SP_Publishing_SpotlightVideo_Collection */
export interface SP_Publishing_SpotlightVideo_Collection {
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* SP_Publishing_SpotlightVideo */
export interface SP_Publishing_SpotlightVideo {
	deleteObject: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* SP_Publishing_SubtitleFile_Collection */
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

/* SP_Publishing_VideoPermissionGroup */
export interface SP_Publishing_VideoPermissionGroup {
	hasCurrentUser: IMapper & { 

	},
};

/* SP_Publishing_VideoServiceManager */
export interface SP_Publishing_VideoServiceManager {
	getChannels: IMapper & { 
		argNames: [ "startIndex", "limit" ],
	},
	getPermissionGroup: IMapper & { 
		argNames: [ "permission" ],
	},
};

/* SP_Publishing_VideoThumbnail_Collection */
export interface SP_Publishing_VideoThumbnail_Collection {
	getByIndex: IMapper & { 
		argNames: [ "choice" ],
	},
};

/* Microsoft_SharePoint_Client_Search_Query_StringCollection */
export interface Microsoft_SharePoint_Client_Search_Query_StringCollection {
	add: IMapper & { 
		argNames: [ "property" ],
	},
	clear: IMapper & { 

	},
};

/* Microsoft_SharePoint_Client_Search_Query_RankingLabeling */
export interface Microsoft_SharePoint_Client_Search_Query_RankingLabeling {
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

/* Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection */
export interface Microsoft_SharePoint_Client_Search_Query_ReorderingRuleCollection {
	add: IMapper & { 
		argNames: [ "matchType", "matchValue", "boost" ],
	},
	clear: IMapper & { 

	},
};

/* Microsoft_SharePoint_Client_Search_Query_SortCollection */
export interface Microsoft_SharePoint_Client_Search_Query_SortCollection {
	add: IMapper & { 
		argNames: [ "strProperty", "direction" ],
	},
	clear: IMapper & { 

	},
};

/* Microsoft_Office_Server_Search_REST_SearchService */
export interface Microsoft_Office_Server_Search_REST_SearchService {
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

/* Microsoft_Office_Server_Search_REST_SearchSetting */
export interface Microsoft_Office_Server_Search_REST_SearchSetting {
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

/* Microsoft_SharePoint_Client_Search_Analytics_SignalStore */
export interface Microsoft_SharePoint_Client_Search_Analytics_SignalStore {
	signals: IMapper & { 
		argNames: [ "signals" ],
	},
};

/* Microsoft_SharePoint_Portal_GroupService */
export interface Microsoft_SharePoint_Portal_GroupService {
	getGroupImage: IMapper & { 
		argNames: [ "id", "hash", "color" ],
	},
	setGroupImage: IMapper & { 
		argNames: [ "imageStream" ],
	},
	syncGroupProperties: IMapper & { 

	},
};

/* Microsoft_SharePoint_Portal_GroupSiteManager */
export interface Microsoft_SharePoint_Portal_GroupSiteManager {
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

/* Microsoft_SharePoint_Portal_SiteLinkingManager */
export interface Microsoft_SharePoint_Portal_SiteLinkingManager {
	getSiteLinks: IMapper & { 

	},
	linkGroup: IMapper & { 
		argNames: [ "groupId" ],
	},
	unlinkGroup: IMapper & { 
		argNames: [ "groupId" ],
	},
};

/* Microsoft_SharePoint_Portal_SharePointHomeServiceContextBuilder */
export interface Microsoft_SharePoint_Portal_SharePointHomeServiceContextBuilder {
	context: IMapper & { 

	},
};

/* Microsoft_SharePoint_Portal_SPHubSitesUtility */
export interface Microsoft_SharePoint_Portal_SPHubSitesUtility {
	getHubSites: IMapper & { 

	},
};

/* Microsoft_SharePoint_Portal_SPSiteManager */
export interface Microsoft_SharePoint_Portal_SPSiteManager {
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

/* Microsoft_SharePoint_Administration_SPAppStateQueryJobDefinition */
export interface Microsoft_SharePoint_Administration_SPAppStateQueryJobDefinition {
	performFastRevokeWithClientIds: IMapper & { 

	},
};

/* Microsoft_SharePoint_Administration_FeatureDefinition_Collection */
export interface Microsoft_SharePoint_Administration_FeatureDefinition_Collection {
	getFeatureDefinition: IMapper & { 
		argNames: [ "featureDisplayName", "compatibilityLevel" ],
	},
};

/* Microsoft_SharePoint_Administration_SPAnalyticsUsageService */
export interface Microsoft_SharePoint_Administration_SPAnalyticsUsageService {
	logevent: IMapper & { 
		argNames: [ "usageEntry" ],
	},
};

/* Microsoft_SharePoint_ClientSideComponent_HostedAppsManager */
export interface Microsoft_SharePoint_ClientSideComponent_HostedAppsManager {
	add: IMapper & { 
		argNames: [ "webPartDataAsJson", "hostType" ],
	},
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* Microsoft_SharePoint_ClientSideComponent_HostedApp */
export interface Microsoft_SharePoint_ClientSideComponent_HostedApp {
	delete: IMapper & { 

	},
	updateWebPartData: IMapper & { 
		argNames: [ "webPartDataAsJson" ],
	},
};

/* Microsoft_SharePoint_Comments_comment */
export interface Microsoft_SharePoint_Comments_comment {
	like: IMapper & { 

	},
	unlike: IMapper & { 

	},
};

/* Microsoft_SharePoint_Comments_comment_Collection */
export interface Microsoft_SharePoint_Comments_comment_Collection {
	deleteAll: IMapper & { 

	},
};

/* Microsoft_SharePoint_Internal_ActivityLogger */
export interface Microsoft_SharePoint_Internal_ActivityLogger {
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

/* SP_MicroService_MicroServiceManager */
export interface SP_MicroService_MicroServiceManager {
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

/* Microsoft_SharePoint_OrgNewsSite_OrgNewsSiteApi */
export interface Microsoft_SharePoint_OrgNewsSite_OrgNewsSiteApi {
	details: IMapper & { 

	},
};

/* SP_Utilities_ThemeManager */
export interface SP_Utilities_ThemeManager {
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

/* SP_WebParts_LimitedWebPartManager */
export interface SP_WebParts_LimitedWebPartManager {
	exportWebPart: IMapper & { 
		argNames: [ "webPartId" ],
	},
	importWebPart: IMapper & { 
		argNames: [ "webPartXml" ],
	},
};

/* SP_WebParts_WebPartDefinition_Collection */
export interface SP_WebParts_WebPartDefinition_Collection {
	getByControlId: IMapper & { 
		argNames: [ "controlId" ],
	},
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* SP_WebParts_WebPartDefinition */
export interface SP_WebParts_WebPartDefinition {
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

/* SP_Workflow_WorkflowAssociation_Collection */
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

/* SP_Workflow_WorkflowAssociation */
export interface SP_Workflow_WorkflowAssociation {
	deleteObject: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* SP_Workflow_WorkflowTemplate_Collection */
export interface SP_Workflow_WorkflowTemplate_Collection {
	getById: IMapper & { 
		argNames: [ "templateId" ],
	},
	getByName: IMapper & { 
		argNames: [ "name" ],
	},
};

/* SP_Workflow_SPWorkflowTask */
export interface SP_Workflow_SPWorkflowTask {
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

/* Microsoft_SharePoint_TenantCdn_TenantCdnApi */
export interface Microsoft_SharePoint_TenantCdn_TenantCdnApi {
	getCdnUrls: IMapper & { 
		argNames: [ "items" ],
	},
};

/* Microsoft_SharePoint_Webhooks_Subscription_Collection */
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

/* Microsoft_SharePoint_Webhooks_Subscription */
export interface Microsoft_SharePoint_Webhooks_Subscription {
	delete: IMapper & { 

	},
	update: IMapper & { 
		argNames: [ "parameters" ],
	},
};

/* SP_Taxonomy_TaxonomyField */
export interface SP_Taxonomy_TaxonomyField {
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

/* Microsoft_Online_SharePoint_TenantAdministration_HubSiteProperties */
export interface Microsoft_Online_SharePoint_TenantAdministration_HubSiteProperties {
	update: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Office365CommsMessagesServiceProxy */
export interface Microsoft_Online_SharePoint_TenantAdministration_Office365CommsMessagesServiceProxy {
	messageCenterMessages: IMapper & { 
		argNames: [ "messagesFieldsData" ],
	},
	serviceHealthMessages: IMapper & { 
		argNames: [ "messagesFieldsData" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_SiteCollectionManagementService */
export interface Microsoft_Online_SharePoint_TenantAdministration_SiteCollectionManagementService {
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

/* Microsoft_Online_SharePoint_TenantAdministration_SiteProperties_Collection */
export interface Microsoft_Online_SharePoint_TenantAdministration_SiteProperties_Collection {
	getById: IMapper & { 
		argNames: [ "siteId" ],
	},
	getLockStateById: IMapper & { 
		argNames: [ "siteId" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_SiteProperties */
export interface Microsoft_Online_SharePoint_TenantAdministration_SiteProperties {
	update: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_TenantAdminSettingsService */
export interface Microsoft_Online_SharePoint_TenantAdministration_TenantAdminSettingsService {
	getTenantSharingStatus: IMapper & { 

	},
	update: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Tenant */
export interface Microsoft_Online_SharePoint_TenantAdministration_Tenant {
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

/* SP_Translation_SyncTranslator */
export interface SP_Translation_SyncTranslator {
	translate: IMapper & { 
		argNames: [ "inputFile", "outputFile" ],
	},
	translateStream: IMapper & { 
		argNames: [ "inputFile", "fileExtension" ],
	},
};

/* SP_Translation_TranslationJob */
export interface SP_Translation_TranslationJob {
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

/* SP_Translation_TranslationJobStatus */
export interface SP_Translation_TranslationJobStatus {
	getAllItems: IMapper & { 

	},
};

/* SP_WorkManagement_OM_BaseSession */
export interface SP_WorkManagement_OM_BaseSession {
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

/* SP_WorkManagement_OM_LocationOrientedSortableSession */
export interface SP_WorkManagement_OM_LocationOrientedSortableSession {
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

/* SP_WorkManagement_OM_LocationOrientedUserOrderedSession */
export interface SP_WorkManagement_OM_LocationOrientedUserOrderedSession {
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

/* SP_WorkManagement_OM_SortableSessionManager */
export interface SP_WorkManagement_OM_SortableSessionManager {
	createLocationOrientedSession: IMapper & { 

	},
	createSession: IMapper & { 

	},
};

/* SP_WorkManagement_OM_SortableSession */
export interface SP_WorkManagement_OM_SortableSession {
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

/* SP_WorkManagement_OM_UserOrderedSessionManager */
export interface SP_WorkManagement_OM_UserOrderedSessionManager {
	createLocationOrientedSession: IMapper & { 

	},
	createSession: IMapper & { 

	},
};

/* SP_WorkManagement_OM_UserOrderedSession */
export interface SP_WorkManagement_OM_UserOrderedSession {
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

/* SP_WorkManagement_OM_UserSettingsManager */
export interface SP_WorkManagement_OM_UserSettingsManager {
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

/* Microsoft_AppServices_AppCollection */
export interface Microsoft_AppServices_AppCollection {
	getAppsFromStore: IMapper & { 
		argNames: [ "addInType", "queryString" ],
	},
	getByType: IMapper & { 
		argNames: [ "type" ],
	},
};

/* SP_DocumentManagement_DocumentId */
export interface SP_DocumentManagement_DocumentId {
	resetDocIdByServerRelativePath: IMapper & { 
		argNames: [ "DecodedUrl" ],
	},
	resetDocIdsInLibrary: IMapper & { 
		argNames: [ "DecodedUrl", "contentTypeId" ],
	},
};

/* OBA_Server_ServerWrapper_Diagnostics */
export interface OBA_Server_ServerWrapper_Diagnostics {
	status: IMapper & { 

	},
};

/* OBA_Server_ServerWrapper_Reporting */
export interface OBA_Server_ServerWrapper_Reporting {
	publishReport: IMapper & { 
		argNames: [ "odataPostBodyStm" ],
	},
};

/* OBA_Server_ServerWrapper_Taskflow */
export interface OBA_Server_ServerWrapper_Taskflow {
	processTask: IMapper & { 
		argNames: [ "requestBodyStream" ],
	},
};

/* SP_WorkflowServices_WorkflowDefinition_Collection */
export interface SP_WorkflowServices_WorkflowDefinition_Collection {
	sort: IMapper & { 

	},
};

/* SP_WorkflowServices_WorkflowDefinition */
export interface SP_WorkflowServices_WorkflowDefinition {
	setProperty: IMapper & { 
		argNames: [ "propertyName", "value" ],
	},
};

/* SP_WorkflowServices_WorkflowDeploymentService */
export interface SP_WorkflowServices_WorkflowDeploymentService {
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

/* SP_WorkflowServices_WorkflowInstanceService */
export interface SP_WorkflowServices_WorkflowInstanceService {
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

/* SP_WorkflowServices_InteropService */
export interface SP_WorkflowServices_InteropService {
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

/* SP_WorkflowServices_WorkflowServicesManager */
export interface SP_WorkflowServices_WorkflowServicesManager {
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

/* SP_WorkflowServices_WorkflowSubscription_Collection */
export interface SP_WorkflowServices_WorkflowSubscription_Collection {
	sort: IMapper & { 

	},
};

/* SP_WorkflowServices_WorkflowSubscription */
export interface SP_WorkflowServices_WorkflowSubscription {
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

/* SP_WorkflowServices_WorkflowSubscriptionService */
export interface SP_WorkflowServices_WorkflowSubscriptionService {
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

/* SP_WorkflowServices_WorkflowMessagingService */
export interface SP_WorkflowServices_WorkflowMessagingService {
	publishEvent: IMapper & { 
		argNames: [ "eventSourceId", "eventName", "payload" ],
	},
};

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionCorporateCatalogAccessor */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionCorporateCatalogAccessor {
	add: IMapper & { 
		argNames: [ "Content", "Overwrite", "Url" ],
	},
};

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata_Collection */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata_Collection {
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata {
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

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_TenantCorporateCatalogAccessor */
export interface Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_TenantCorporateCatalogAccessor {
	add: IMapper & { 
		argNames: [ "Content", "Overwrite", "Url" ],
	},
};

/* Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionAppCatalogAllowedItem_Collection */
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

/* Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog */
export interface Microsoft_SharePoint_Client_Search_Administration_DocumentCrawlLog {
	getCrawledUrls: IMapper & { 
		argNames: [ "getCountOnly", "maxRows", "queryString", "isLike", "contentSourceID", "errorLevel", "errorID", "startDateTime", "endDateTime" ],
	},
};

/* SP_OAuth_NativeClient */
export interface SP_OAuth_NativeClient {
	authenticate: IMapper & { 

	},
};

/* SP_OAuth_Token */
export interface SP_OAuth_Token {
	acquire: IMapper & { 
		argNames: [ "resource", "tokenType" ],
	},
};

/* SP_BusinessData_Runtime_EntityInstance */
export interface SP_BusinessData_Runtime_EntityInstance {
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

/* SP_BusinessData_Runtime_EntityFieldValueDictionary */
export interface SP_BusinessData_Runtime_EntityFieldValueDictionary {
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

/* SP_BusinessData_EntityIdentifier */
export interface SP_BusinessData_EntityIdentifier {
	containsLocalizedDisplayName: IMapper & { 

	},
	getDefaultDisplayName: IMapper & { 

	},
	getLocalizedDisplayName: IMapper & { 

	},
};

/* SP_BusinessData_TypeDescriptor */
export interface SP_BusinessData_TypeDescriptor {
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

/* SP_BusinessData_Entity */
export interface SP_BusinessData_Entity {
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

/* SP_BusinessData_LobSystem */
export interface SP_BusinessData_LobSystem {
	getLobSystemInstances: IMapper & { 

	},
};

/* SP_BusinessData_EntityView */
export interface SP_BusinessData_EntityView {
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

/* SP_BusinessData_AppBdcCatalog */
export interface SP_BusinessData_AppBdcCatalog {
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

/* SP_BusinessData_Infrastructure_ExternalSubscriptionStore */
export interface SP_BusinessData_Infrastructure_ExternalSubscriptionStore {
	indexStore: IMapper & { 

	},
};

/* Microsoft_SharePoint_Navigation_REST_NavigationServiceRest */
export interface Microsoft_SharePoint_Navigation_REST_NavigationServiceRest {
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

/* Microsoft_Online_SharePoint_AppLauncher_AppLauncher */
export interface Microsoft_Online_SharePoint_AppLauncher_AppLauncher {
	getData: IMapper & { 
		argNames: [ "suiteVersion", "isMobileRequest", "locale", "onPremVer" ],
	},
};

/* Microsoft_Online_SharePoint_PointPublishing_PointPublishingAdmin */
export interface Microsoft_Online_SharePoint_PointPublishing_PointPublishingAdmin {
	createTopicMagazine: IMapper & { 
		argNames: [ "magazineName" ],
	},
	deleteTopicMagazine: IMapper & { 
		argNames: [ "magazineId" ],
	},
	provisionPointPublishingAsync: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_SPLogger_LogExport */
export interface Microsoft_Online_SharePoint_SPLogger_LogExport {
	getFiles: IMapper & { 
		argNames: [ "partitionId", "logType" ],
	},
	getLogTypes: IMapper & { 

	},
	getPartitions: IMapper & { 
		argNames: [ "logType" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdmin_MiddleTier_DDIAdapter */
export interface Microsoft_Online_SharePoint_TenantAdmin_MiddleTier_DDIAdapter {
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

/* Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant_Collection */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant_Collection {
	getByObjectId: IMapper & { 
		argNames: [ "objectId" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant {
	deleteObject: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionRequest_Collection */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionRequest_Collection {
	approve: IMapper & { 
		argNames: [ "resource", "scope" ],
	},
	getById: IMapper & { 
		argNames: [ "id" ],
	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionRequest */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionRequest {
	approve: IMapper & { 

	},
	deny: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipal */
export interface Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipal {
	update: IMapper & { 

	},
};

/* Microsoft_Online_SharePoint_TenantManagement_ExternalUser_Collection */
export interface Microsoft_Online_SharePoint_TenantManagement_ExternalUser_Collection {
	getById: IMapper & { 
		argNames: [ "uniqueId" ],
	},
};

/* Microsoft_Online_SharePoint_TenantManagement_Office365Tenant */
export interface Microsoft_Online_SharePoint_TenantManagement_Office365Tenant {
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
