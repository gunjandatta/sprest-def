import { SP } from "../";
import { Microsoft } from "../";

/*********************************************
* ApiMetadata
**********************************************/
export interface ApiMetadata {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ApiMetadataCollections<T = any>
**********************************************/
export interface ApiMetadataCollections<T = any> {
	Current(): T;
	Types(): T;
}

/*********************************************
* ApiMetadataQuery
**********************************************/
export interface ApiMetadataQuery {
	Current(): T;
	Types(): T;
}

/*********************************************
* TypeInformation
**********************************************/
export interface TypeInformation {
	BaseTypeFullName?: string;
	FullName?: string;
	IsValueObject?: boolean;
	Methods?: Array<SP.MethodInformation>;
	Properties?: Array<SP.PropertyInformation>;
}

/*********************************************
* Site
**********************************************/
export interface Site {
	AllowCreateDeclarativeWorkflow?: boolean;
	AllowDesigner?: boolean;
	AllowExternalEmbeddingWrapper?: number;
	AllowMasterPageEditing?: boolean;
	AllowRevertFromTemplate?: boolean;
	AllowSaveDeclarativeWorkflowAsTemplate?: boolean;
	AllowSavePublishDeclarativeWorkflow?: boolean;
	AllowSelfServiceUpgrade?: boolean;
	AllowSelfServiceUpgradeEvaluation?: boolean;
	AuditLogTrimmingRetention?: number;
	CanUpgrade?: boolean;
	Classification?: string;
	CommentsOnSitePagesDisabled?: boolean;
	CompatibilityLevel?: number;
	ComplianceAttribute?: string;
	CurrentChangeToken?: SP.ChangeToken;
	DisableAppViews?: boolean;
	DisableCompanyWideSharingLinks?: boolean;
	DisableFlows?: boolean;
	ExternalSharingTipsEnabled?: boolean;
	GeoLocation?: string;
	GroupId?: any;
	HubSiteId?: any;
	Id?: any;
	SensitivityLabel?: any;
	IsHubSite?: boolean;
	LockIssue?: string;
	MaxItemsPerThrottledOperation?: number;
	NeedsB2BUpgrade?: boolean;
	ResourcePath?: SP.ResourcePath;
	PrimaryUri?: string;
	ReadOnly?: boolean;
	RequiredDesignerVersion?: string;
	SandboxedCodeActivationCapability?: number;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
	ShareByEmailEnabled?: boolean;
	ShareByLinkEnabled?: boolean;
	ShowPeoplePickerSuggestionsForGuestUsers?: boolean;
	ShowUrlStructure?: boolean;
	SocialBarOnSitePagesDisabled?: boolean;
	StatusBarLink?: string;
	StatusBarText?: string;
	ThicketSupportDisabled?: boolean;
	TrimAuditLog?: boolean;
	UIVersionConfigurationEnabled?: boolean;
	UpgradeInfo?: SP.UpgradeInfo;
	UpgradeReminderDate?: any;
	UpgradeScheduled?: boolean;
	UpgradeScheduledDate?: any;
	Upgrading?: boolean;
	Url?: string;
	Usage?: SP.UsageInfo;
}

/*********************************************
* SiteCollections<T = any>
**********************************************/
export interface SiteCollections<T = any> {
	Audit(): T;
	CustomScriptSafeDomains(): T;
	EventReceivers(): T;
	Features(): T;
	Owner(): T;
	RecycleBin(): T;
	RootWeb(): T;
	SecondaryContact(): T;
	UserCustomActions(): T;
}

/*********************************************
* SiteQuery
**********************************************/
export interface SiteQuery {
	Audit(): T;
	CustomScriptSafeDomains(): T;
	EventReceivers(): T;
	Features(): T;
	Owner(): T;
	RecycleBin(): T;
	RootWeb(): T;
	SecondaryContact(): T;
	UserCustomActions(): T;
}

/*********************************************
* SiteMethods<T = any>
**********************************************/
export interface SiteMethods<T = any> {
	createCopyJob(exportObjectUris?: Array<string>, destinationUri?: string, options?: SP.CopyMigrationOptions): T;
	createCopyJobs(exportObjectUris?: Array<string>, destinationUri?: string, options?: SP.CopyMigrationOptions): T;
	createMigrationIngestionJob(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string, ingestionTaskKey?: SP.IngestionTaskKey): T;
	createMigrationJob(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string): T;
	createMigrationJobEncrypted(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string, options?: SP.EncryptionOption): T;
	createPreviewSPSite(upgrade?: boolean, sendemail?: boolean): T;
	deleteMigrationJob(id?: any): T;
	extendUpgradeReminderDate(): T;
	getBringYourOwnKeySiteStatus(): T;
	getBringYourOwnKeyTenantStatus(): T;
	getCatalog(typeCatalog?: number): T;
	getChanges(query?: SP.ChangeQuery): T;
	getCopyJobProgress(copyJobInfo?: SP.CopyMigrationInfo): T;
	getHubSiteJoinApprovalCorrelationId(): T;
	getMigrationJobStatus(id?: any): T;
	getMigrationStatus(): T;
	getRecycleBinItems(pagingInfo?: string, rowLimit?: number, isAscending?: boolean, orderBy?: number, itemState?: number): T;
	getWebPath(siteId?: any, webId?: any): T;
	getWebTemplates(LCID?: number, overrideCompatLevel?: number): T;
	invalidate(): T;
	joinHubSite(hubSiteId?: any, approvalToken?: string, approvalCorrelationId?: string): T;
	makeHubSite(): T;
	multiGeoCopyJob(jobId?: any, userId?: number, binaryPayload?: any): T;
	needsUpgradeByType(versionUpgrade?: boolean, recursive?: boolean): T;
	onboardTenantForBringYourOwnKey(keyInfo?: SP.CustomerKeyInfo): T;
	onHubSiteJoinRequestApproved(joiningSiteId?: any): T;
	onHubSiteJoinRequestCanceled(approvalCorrelationId?: string): T;
	onHubSiteJoinRequestStarted(approvalCorrelationId?: string): T;
	openWeb(strUrl?: string): T;
	openWebById(gWebId?: any): T;
	openWebUsingPath(path?: SP.ResourcePath): T;
	provisionMigrationContainers(): T;
	provisionMigrationQueue(): T;
	recoverTenantForBringYourOwnKey(keyInfo?: SP.CustomerKeyInfo): T;
	registerHubSite(creationInformation?: SP.HubSiteCreationInformation): T;
	removeHubSite(): T;
	rollTenantBringYourOwnKey(keyType?: number, keyVaultInfo?: SP.CustomerKeyVaultInfo): T;
	runHealthCheck(ruleId?: any, bRepair?: boolean, bRunAlways?: boolean): T;
	runUpgradeSiteSession(versionUpgrade?: boolean, queueOnly?: boolean, sendEmail?: boolean): T;
	unregisterHubSite(): T;
	updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs?: boolean): T;
	validateHubSiteJoinApprovalToken(joiningSiteId?: any, approvalToken?: string): T;
}

/*********************************************
* Audit
**********************************************/
export interface Audit {
	AuditFlags?: number;
}

/*********************************************
* AuditMethods<T = any>
**********************************************/
export interface AuditMethods<T = any> {
	update(): T;
}

/*********************************************
* ScriptSafeDomain
**********************************************/
export interface ScriptSafeDomain {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ScriptSafeDomainMethods<T = any>
**********************************************/
export interface ScriptSafeDomainMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* EventReceiverDefinition
**********************************************/
export interface EventReceiverDefinition {
	ReceiverAssembly?: string;
	ReceiverClass?: string;
	ReceiverId?: any;
	ReceiverName?: string;
	SequenceNumber?: number;
	Synchronization?: number;
	EventType?: number;
	ReceiverUrl?: string;
}

/*********************************************
* EventReceiverDefinitionMethods<T = any>
**********************************************/
export interface EventReceiverDefinitionMethods<T = any> {
	deleteObject(): T;
	update(): T;
}

/*********************************************
* Feature
**********************************************/
export interface Feature {
	DefinitionId?: any;
	DisplayName?: string;
}

/*********************************************
* Principal
**********************************************/
export interface Principal {
	Id?: number;
	IsHiddenInUI?: boolean;
	LoginName?: string;
	Title?: string;
	PrincipalType?: number;
}

/*********************************************
* User
**********************************************/
export interface User extends SP.Principal {
	AadObjectId?: SP.UserIdInfo;
	Email?: string;
	IsEmailAuthenticationGuestUser?: boolean;
	IsShareByEmailGuestUser?: boolean;
	IsSiteAdmin?: boolean;
	UserId?: SP.UserIdInfo;
}

/*********************************************
* UserCollections<T = any>
**********************************************/
export interface UserCollections<T = any> {
	Alerts(): T;
	Groups(): T;
}

/*********************************************
* UserQuery
**********************************************/
export interface UserQuery {
	Alerts(): T;
	Groups(): T;
}

/*********************************************
* UserMethods<T = any>
**********************************************/
export interface UserMethods<T = any> {
	update(): T;
}

/*********************************************
* Alert
**********************************************/
export interface Alert {
	AlertFrequency?: number;
	AlertTemplateName?: string;
	AlertTime?: any;
	AlertType?: number;
	AlwaysNotify?: boolean;
	DeliveryChannels?: number;
	EventType?: number;
	Filter?: string;
	ID?: any;
	ItemID?: number;
	ListID?: any;
	ListUrl?: string;
	Properties?: Array<SP.KeyValue>;
	Status?: number;
	Title?: string;
	UserId?: number;
}

/*********************************************
* AlertCollections<T = any>
**********************************************/
export interface AlertCollections<T = any> {
	AllProperties(): T;
	Item(): T;
	List(): T;
	User(): T;
}

/*********************************************
* AlertQuery
**********************************************/
export interface AlertQuery {
	AllProperties(): T;
	Item(): T;
	List(): T;
	User(): T;
}

/*********************************************
* AlertMethods<T = any>
**********************************************/
export interface AlertMethods<T = any> {
	updateAlert(): T;
}

/*********************************************
* PropertyValues
**********************************************/
export interface PropertyValues {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SecurableObject
**********************************************/
export interface SecurableObject {
	HasUniqueRoleAssignments?: boolean;
}

/*********************************************
* SecurableObjectCollections<T = any>
**********************************************/
export interface SecurableObjectCollections<T = any> {
	FirstUniqueAncestorSecurableObject(): T;
	RoleAssignments(): T;
}

/*********************************************
* SecurableObjectQuery
**********************************************/
export interface SecurableObjectQuery {
	FirstUniqueAncestorSecurableObject(): T;
	RoleAssignments(): T;
}

/*********************************************
* SecurableObjectMethods<T = any>
**********************************************/
export interface SecurableObjectMethods<T = any> {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): T;
	resetRoleInheritance(): T;
}

/*********************************************
* RoleAssignment
**********************************************/
export interface RoleAssignment {
	PrincipalId?: number;
}

/*********************************************
* RoleAssignmentCollections<T = any>
**********************************************/
export interface RoleAssignmentCollections<T = any> {
	Member(): T;
	RoleDefinitionBindings(): T;
}

/*********************************************
* RoleAssignmentQuery
**********************************************/
export interface RoleAssignmentQuery {
	Member(): T;
	RoleDefinitionBindings(): T;
}

/*********************************************
* RoleAssignmentMethods<T = any>
**********************************************/
export interface RoleAssignmentMethods<T = any> {
	deleteObject(): T;
	update(): T;
}

/*********************************************
* RoleDefinition
**********************************************/
export interface RoleDefinition {
	BasePermissions?: SP.BasePermissions;
	Description?: string;
	Hidden?: boolean;
	Id?: number;
	Name?: string;
	Order?: number;
	RoleTypeKind?: number;
}

/*********************************************
* RoleDefinitionMethods<T = any>
**********************************************/
export interface RoleDefinitionMethods<T = any> {
	deleteObject(): T;
	update(): T;
}

/*********************************************
* ListItem
**********************************************/
export interface ListItem extends SP.SecurableObject {
	CommentsDisabled?: boolean;
	CommentsDisabledScope?: number;
	ComplianceInfo?: SP.ListItemComplianceInfo;
	DisplayName?: string;
	EffectiveBasePermissions?: SP.BasePermissions;
	EffectiveBasePermissionsForUI?: SP.BasePermissions;
	FileSystemObjectType?: number;
	IconOverlay?: string;
	Id?: number;
	ServerRedirectedEmbedUri?: string;
	ServerRedirectedEmbedUrl?: string;
	Client_Title?: string;
}

/*********************************************
* ListItemCollections<T = any>
**********************************************/
export interface ListItemCollections<T = any> {
	AttachmentFiles(): T;
	ContentType(): T;
	GetDlpPolicyTip(): T;
	FieldValuesAsHtml(): T;
	FieldValuesAsText(): T;
	FieldValuesForEdit(): T;
	File(): T;
	Folder(): T;
	LikedByInformation(): T;
	ParentList(): T;
	Properties(): T;
	Versions(): T;
}

/*********************************************
* ListItemQuery
**********************************************/
export interface ListItemQuery {
	AttachmentFiles(): T;
	ContentType(): T;
	GetDlpPolicyTip(): T;
	FieldValuesAsHtml(): T;
	FieldValuesAsText(): T;
	FieldValuesForEdit(): T;
	File(): T;
	Folder(): T;
	LikedByInformation(): T;
	ParentList(): T;
	Properties(): T;
	Versions(): T;
}

/*********************************************
* ListItemMethods<T = any>
**********************************************/
export interface ListItemMethods<T = any> {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): T;
	resetRoleInheritance(): T;
	deleteObject(): T;
	getChanges(query?: SP.ChangeQuery): T;
	getHashtags(): T;
	getUserEffectivePermissions(userName?: string): T;
	getWOPIFrameUrl(action?: number): T;
	mediaServiceUpdate(parameters?: SP.MediaServiceUpdateParameters): T;
	mediaServiceUpdateV2(parameters?: SP.MediaServiceUpdateParameters, eventFiringEnabled?: boolean): T;
	overridePolicyTip(userAction?: number, justification?: string): T;
	parseAndSetFieldValue(fieldName?: string, value?: string): T;
	recycle(): T;
	setCommentsDisabled(value?: boolean): T;
	setComplianceTag(complianceTag?: string, isTagPolicyHold?: boolean, isTagPolicyRecord?: boolean, isEventBasedTag?: boolean, isTagSuperLock?: boolean): T;
	setComplianceTagWithExplicitMetasUpdate(complianceTag?: string, complianceFlags?: number, complianceTagWrittenTime?: any, userEmailAddress?: string): T;
	setComplianceTagWithHold(complianceTag?: string): T;
	setComplianceTagWithMetaInfo(complianceTag?: string, blockDelete?: boolean, blockEdit?: boolean, complianceTagWrittenTime?: any, userEmailAddress?: string, isTagSuperLock?: boolean): T;
	setComplianceTagWithNoHold(complianceTag?: string): T;
	setComplianceTagWithRecord(complianceTag?: string): T;
	systemUpdate(): T;
	update(): T;
	updateEx(parameters?: SP.ListItemUpdateParameters): T;
	updateHashtags(hashtagsToAdd?: Array<SP.Hashtag>, hashtagsToRemove?: Array<SP.Hashtag>): T;
	updateOverwriteVersion(): T;
	validateUpdateListItem(formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): T;
}

/*********************************************
* Attachment
**********************************************/
export interface Attachment {
	FileName?: string;
	FileNameAsPath?: SP.ResourcePath;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
}

/*********************************************
* AttachmentMethods<T = any>
**********************************************/
export interface AttachmentMethods<T = any> {
	deleteObject(): T;
	recycleObject(): T;
}

/*********************************************
* ContentType
**********************************************/
export interface ContentType {
	Description?: string;
	DisplayFormTemplateName?: string;
	DisplayFormUrl?: string;
	DocumentTemplate?: string;
	DocumentTemplateUrl?: string;
	EditFormTemplateName?: string;
	EditFormUrl?: string;
	Group?: string;
	Hidden?: boolean;
	Id?: SP.ContentTypeId;
	JSLink?: string;
	MobileDisplayFormUrl?: string;
	MobileEditFormUrl?: string;
	MobileNewFormUrl?: string;
	Name?: string;
	NewFormTemplateName?: string;
	NewFormUrl?: string;
	ReadOnly?: boolean;
	SchemaXml?: string;
	SchemaXmlWithResourceTokens?: string;
	Scope?: string;
	Sealed?: boolean;
	StringId?: string;
}

/*********************************************
* ContentTypeCollections<T = any>
**********************************************/
export interface ContentTypeCollections<T = any> {
	DescriptionResource(): T;
	FieldLinks(): T;
	Fields(): T;
	NameResource(): T;
	Parent(): T;
	WorkflowAssociations(): T;
}

/*********************************************
* ContentTypeQuery
**********************************************/
export interface ContentTypeQuery {
	DescriptionResource(): T;
	FieldLinks(): T;
	Fields(): T;
	NameResource(): T;
	Parent(): T;
	WorkflowAssociations(): T;
}

/*********************************************
* ContentTypeMethods<T = any>
**********************************************/
export interface ContentTypeMethods<T = any> {
	deleteObject(): T;
	update(updateChildren?: boolean): T;
}

/*********************************************
* UserResource
**********************************************/
export interface UserResource {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserResourceMethods<T = any>
**********************************************/
export interface UserResourceMethods<T = any> {
	getValueForUICulture(cultureName?: string): T;
	setValueForUICulture(cultureName?: string, value?: string): T;
}

/*********************************************
* FieldLink
**********************************************/
export interface FieldLink {
	DisplayName?: string;
	FieldInternalName?: string;
	Hidden?: boolean;
	Id?: any;
	Name?: string;
	ReadOnly?: boolean;
	Required?: boolean;
	ShowInDisplayForm?: boolean;
}

/*********************************************
* FieldLinkMethods<T = any>
**********************************************/
export interface FieldLinkMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* Field
**********************************************/
export interface Field {
	AutoIndexed?: boolean;
	CanBeDeleted?: boolean;
	ClientSideComponentId?: any;
	ClientSideComponentProperties?: string;
	CustomFormatter?: string;
	DefaultFormula?: string;
	DefaultValue?: string;
	Description?: string;
	Direction?: string;
	EnforceUniqueValues?: boolean;
	EntityPropertyName?: string;
	Filterable?: boolean;
	FromBaseType?: boolean;
	Group?: string;
	Hidden?: boolean;
	Id?: any;
	Indexed?: boolean;
	InternalName?: string;
	JSLink?: string;
	NoCrawl?: boolean;
	PinnedToFiltersPane?: boolean;
	ReadOnlyField?: boolean;
	Required?: boolean;
	SchemaXml?: string;
	SchemaXmlWithResourceTokens?: string;
	Scope?: string;
	Sealed?: boolean;
	ShowInFiltersPane?: number;
	Sortable?: boolean;
	StaticName?: string;
	Title?: string;
	FieldTypeKind?: number;
	TypeAsString?: string;
	TypeDisplayName?: string;
	TypeShortDescription?: string;
	ValidationFormula?: string;
	ValidationMessage?: string;
}

/*********************************************
* FieldCollections<T = any>
**********************************************/
export interface FieldCollections<T = any> {
	DescriptionResource(): T;
	TitleResource(): T;
}

/*********************************************
* FieldQuery
**********************************************/
export interface FieldQuery {
	DescriptionResource(): T;
	TitleResource(): T;
}

/*********************************************
* FieldMethods<T = any>
**********************************************/
export interface FieldMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* DlpPolicyTip
**********************************************/
export interface DlpPolicyTip {
	AppliedActionsText?: string;
	ComplianceUrl?: string;
	GeneralText?: string;
	LastProcessedTime?: any;
	MatchedConditionDescriptions?: Array<string>;
	OverrideOptions?: number;
	TwoLetterISOLanguageName?: string;
}

/*********************************************
* FieldStringValues
**********************************************/
export interface FieldStringValues {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* File
**********************************************/
export interface File {
	ActivityCapabilities?: Microsoft.SharePoint.Activities.ActivityCapabilities;
	CheckInComment?: string;
	CheckOutType?: number;
	ContentTag?: string;
	CustomizedPageStatus?: number;
	ListId?: any;
	ETag?: string;
	Exists?: boolean;
	IrmEnabled?: boolean;
	Length?: number;
	Level?: any;
	LinkingUri?: string;
	LinkingUrl?: string;
	MajorVersion?: number;
	MinorVersion?: number;
	Name?: string;
	PageRenderType?: number;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
	SiteId?: any;
	TimeCreated?: any;
	TimeLastModified?: any;
	Title?: string;
	UIVersion?: number;
	UIVersionLabel?: string;
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* FileCollections<T = any>
**********************************************/
export interface FileCollections<T = any> {
	Author(): T;
	CheckedOutByUser(): T;
	EffectiveInformationRightsManagementSettings(): T;
	InformationRightsManagementSettings(): T;
	ListItemAllFields(): T;
	LockedByUser(): T;
	ModifiedBy(): T;
	Properties(): T;
	VersionEvents(): T;
	Versions(): T;
}

/*********************************************
* FileQuery
**********************************************/
export interface FileQuery {
	Author(): T;
	CheckedOutByUser(): T;
	EffectiveInformationRightsManagementSettings(): T;
	InformationRightsManagementSettings(): T;
	ListItemAllFields(): T;
	LockedByUser(): T;
	ModifiedBy(): T;
	Properties(): T;
	VersionEvents(): T;
	Versions(): T;
}

/*********************************************
* FileMethods<T = any>
**********************************************/
export interface FileMethods<T = any> {
	addActivities(activities?: Array<Microsoft.SharePoint.Activities.ActivityClientRequest>): T;
	addClientActivities(activitiesStream?: any): T;
	approve(comment?: string): T;
	cancelUpload(uploadId?: any): T;
	checkAccessAndPostViewAuditEvent(): T;
	checkIn(comment?: string, checkInType?: number): T;
	checkOut(): T;
	continueUpload(uploadId?: any, fileOffset?: number, stream?: any): T;
	copyTo(strNewUrl?: string, bOverWrite?: boolean): T;
	copyToUsingPath(DecodedUrl?: string, bOverWrite?: boolean): T;
	deleteObject(): T;
	deny(comment?: string): T;
	executeCobaltRequest(inputStream?: any): T;
	finishUpload(uploadId?: any, fileOffset?: number, stream?: any): T;
	getFileUserValue(key?: string): T;
	getImagePreviewUri(width?: number, height?: number, clientType?: string): T;
	getImagePreviewUrl(width?: number, height?: number, clientType?: string): T;
	getLimitedWebPartManager(scope?: number): T;
	getPreAuthorizedAccessUrl(expirationHours?: number): T;
	getUploadStatus(uploadId?: any): T;
	getWOPIFrameUrl(action?: number): T;
	moveTo(newUrl?: string, flags?: number): T;
	moveToUsingPath(DecodedUrl?: string, moveOperations?: number): T;
	openBinaryStream(): T;
	openBinaryStreamWithOptions(openOptions?: number): T;
	publish(comment?: string): T;
	recycle(): T;
	recycleWithETag(etagMatch?: string): T;
	saveBinaryStream(file?: any): T;
	setFileUserValue(key?: string, value?: string): T;
	startUpload(uploadId?: any, stream?: any): T;
	undoCheckOut(): T;
	unPublish(comment?: string): T;
	update(): T;
	updateVirusInfo(virusStatus?: any, virusMessage?: string, etagToCheck?: string): T;
}

/*********************************************
* EffectiveInformationRightsManagementSettings
**********************************************/
export interface EffectiveInformationRightsManagementSettings {
	AllowPrint?: boolean;
	AllowScript?: boolean;
	AllowWriteCopy?: boolean;
	DisableDocumentBrowserView?: boolean;
	DocumentAccessExpireDays?: number;
	DocumentLibraryProtectionExpireDate?: any;
	EnableDocumentAccessExpire?: boolean;
	EnableDocumentBrowserPublishingView?: boolean;
	EnableGroupProtection?: boolean;
	EnableLicenseCacheExpire?: boolean;
	GroupName?: string;
	IrmEnabled?: boolean;
	LicenseCacheExpireDays?: number;
	PolicyDescription?: string;
	PolicyTitle?: string;
	SettingSource?: number;
	TemplateId?: string;
}

/*********************************************
* InformationRightsManagementFileSettings
**********************************************/
export interface InformationRightsManagementFileSettings {
	AllowPrint?: boolean;
	AllowScript?: boolean;
	AllowWriteCopy?: boolean;
	DisableDocumentBrowserView?: boolean;
	DocumentAccessExpireDays?: number;
	EnableDocumentAccessExpire?: boolean;
	EnableDocumentBrowserPublishingView?: boolean;
	EnableGroupProtection?: boolean;
	EnableLicenseCacheExpire?: boolean;
	GroupName?: string;
	IrmEnabled?: boolean;
	LicenseCacheExpireDays?: number;
	PolicyDescription?: string;
	PolicyTitle?: string;
	TemplateId?: string;
}

/*********************************************
* InformationRightsManagementFileSettingsMethods<T = any>
**********************************************/
export interface InformationRightsManagementFileSettingsMethods<T = any> {
	reset(): T;
	update(): T;
}

/*********************************************
* FileVersionEvent
**********************************************/
export interface FileVersionEvent {
	Editor?: string;
	EditorEmail?: string;
	SharedByUser?: SP.SharedWithUser;
	SharedWithUsers?: SP.SharedWithUserCollection;
	Time?: any;
	EventType?: number;
}

/*********************************************
* FileVersion
**********************************************/
export interface FileVersion {
	CheckInComment?: string;
	Created?: any;
	ID?: number;
	IsCurrentVersion?: boolean;
	Length?: number;
	Size?: number;
	Url?: string;
	VersionLabel?: string;
}

/*********************************************
* FileVersionCollections<T = any>
**********************************************/
export interface FileVersionCollections<T = any> {
	CreatedBy(): T;
}

/*********************************************
* FileVersionQuery
**********************************************/
export interface FileVersionQuery {
	CreatedBy(): T;
}

/*********************************************
* FileVersionMethods<T = any>
**********************************************/
export interface FileVersionMethods<T = any> {
	deleteObject(): T;
	openBinaryStream(): T;
}

/*********************************************
* Folder
**********************************************/
export interface Folder {
	ContentTypeOrder?: Array<SP.ContentTypeId>;
	Exists?: boolean;
	IsWOPIEnabled?: boolean;
	ItemCount?: number;
	Name?: string;
	ProgID?: string;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
	TimeCreated?: any;
	TimeLastModified?: any;
	UniqueContentTypeOrder?: Array<SP.ContentTypeId>;
	UniqueId?: any;
	WelcomePage?: string;
}

/*********************************************
* FolderCollections<T = any>
**********************************************/
export interface FolderCollections<T = any> {
	Files(): T;
	ListItemAllFields(): T;
	ParentFolder(): T;
	Properties(): T;
	StorageMetrics(): T;
	Folders(): T;
}

/*********************************************
* FolderQuery
**********************************************/
export interface FolderQuery {
	Files(): T;
	ListItemAllFields(): T;
	ParentFolder(): T;
	Properties(): T;
	StorageMetrics(): T;
	Folders(): T;
}

/*********************************************
* FolderMethods<T = any>
**********************************************/
export interface FolderMethods<T = any> {
	addSubFolder(leafName?: string): T;
	addSubFolderUsingPath(DecodedUrl?: string): T;
	deleteObject(): T;
	getChanges(query?: SP.ChangeQuery): T;
	getListItemChanges(query?: SP.ChangeQuery): T;
	moveTo(newUrl?: string): T;
	moveToUsingPath(DecodedUrl?: string): T;
	recycle(): T;
	update(): T;
}

/*********************************************
* StorageMetrics
**********************************************/
export interface StorageMetrics {
	LastModified?: any;
	TotalFileCount?: number;
	TotalFileStreamSize?: number;
	TotalSize?: number;
}

/*********************************************
* List
**********************************************/
export interface List extends SP.SecurableObject {
	AllowContentTypes?: boolean;
	AllowDeletion?: boolean;
	BaseTemplate?: number;
	BaseType?: number;
	BrowserFileHandling?: number;
	ContentTypesEnabled?: boolean;
	CrawlNonDefaultViews?: boolean;
	Created?: any;
	CurrentChangeToken?: SP.ChangeToken;
	CustomActionElements?: SP.CustomActionElementCollection;
	DataSource?: SP.ListDataSource;
	DefaultContentApprovalWorkflowId?: any;
	DefaultDisplayFormUrl?: string;
	DefaultEditFormUrl?: string;
	DefaultItemOpenUseListSetting?: boolean;
	DefaultNewFormUrl?: string;
	DefaultViewPath?: SP.ResourcePath;
	DefaultViewUrl?: string;
	Description?: string;
	Direction?: string;
	DisableGridEditing?: boolean;
	DocumentTemplateUrl?: string;
	DraftVersionVisibility?: number;
	EffectiveBasePermissions?: SP.BasePermissions;
	EffectiveBasePermissionsForUI?: SP.BasePermissions;
	EnableAssignToEmail?: boolean;
	EnableAttachments?: boolean;
	EnableFolderCreation?: boolean;
	EnableMinorVersions?: boolean;
	EnableModeration?: boolean;
	EnableRequestSignOff?: boolean;
	EnableVersioning?: boolean;
	EntityTypeName?: string;
	ExcludeFromOfflineClient?: boolean;
	ExemptFromBlockDownloadOfNonViewableFiles?: boolean;
	FileSavePostProcessingEnabled?: boolean;
	ForceCheckout?: boolean;
	HasExternalDataSource?: boolean;
	Hidden?: boolean;
	Id?: any;
	ImagePath?: SP.ResourcePath;
	ImageUrl?: string;
	IrmEnabled?: boolean;
	IrmExpire?: boolean;
	IrmReject?: boolean;
	IsApplicationList?: boolean;
	IsCatalog?: boolean;
	IsEnterpriseGalleryLibrary?: boolean;
	IsPrivate?: boolean;
	IsSiteAssetsLibrary?: boolean;
	IsSystemList?: boolean;
	ItemCount?: number;
	LastItemDeletedDate?: any;
	LastItemModifiedDate?: any;
	LastItemUserModifiedDate?: any;
	ListExperienceOptions?: number;
	ListItemEntityTypeFullName?: string;
	MajorVersionLimit?: number;
	MajorWithMinorVersionsLimit?: number;
	MultipleDataList?: boolean;
	NoCrawl?: boolean;
	OnQuickLaunch?: boolean;
	PageRenderType?: number;
	ParentWebPath?: SP.ResourcePath;
	ParentWebUrl?: string;
	ParserDisabled?: boolean;
	ReadSecurity?: number;
	SchemaXml?: string;
	ServerTemplateCanCreateFolders?: boolean;
	TemplateFeatureId?: any;
	Title?: string;
	ValidationFormula?: string;
	ValidationMessage?: string;
	WriteSecurity?: number;
}

/*********************************************
* ListCollections<T = any>
**********************************************/
export interface ListCollections<T = any> {
	ContentTypes(): T;
	CreatablesInfo(): T;
	DefaultView(): T;
	DescriptionResource(): T;
	EventReceivers(): T;
	Fields(): T;
	Forms(): T;
	InformationRightsManagementSettings(): T;
	Items(): T;
	ParentWeb(): T;
	RootFolder(): T;
	Subscriptions(): T;
	TitleResource(): T;
	UserCustomActions(): T;
	Views(): T;
	WorkflowAssociations(): T;
}

/*********************************************
* ListQuery
**********************************************/
export interface ListQuery {
	ContentTypes(): T;
	CreatablesInfo(): T;
	DefaultView(): T;
	DescriptionResource(): T;
	EventReceivers(): T;
	Fields(): T;
	Forms(): T;
	InformationRightsManagementSettings(): T;
	Items(): T;
	ParentWeb(): T;
	RootFolder(): T;
	Subscriptions(): T;
	TitleResource(): T;
	UserCustomActions(): T;
	Views(): T;
	WorkflowAssociations(): T;
}

/*********************************************
* ListMethods<T = any>
**********************************************/
export interface ListMethods<T = any> {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): T;
	resetRoleInheritance(): T;
	addItem(parameters?: SP.ListItemCreationInformation): T;
	addItemUsingPath(parameters?: SP.ListItemCreationInformationUsingPath): T;
	addValidateUpdateItem(listItemCreateInfo?: SP.ListItemCreationInformation, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): T;
	addValidateUpdateItemUsingPath(listItemCreateInfo?: SP.ListItemCreationInformationUsingPath, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): T;
	bulkValidateUpdateListItems(itemIds?: Array<number>, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string, folderPath?: string): T;
	createDocumentAndGetEditLink(fileName?: string, folderPath?: string, documentTemplateType?: number, templateUrl?: string): T;
	createDocumentWithDefaultName(folderPath?: string, extension?: string): T;
	createMappedView(appViewCreationInfo?: SP.AppViewCreationInfo, visualizationTarget?: number): T;
	deleteObject(): T;
	ensureSignoffStatusField(): T;
	getBloomFilter(startItemId?: number): T;
	getBloomFilterWithCustomFields(listItemStartingID?: number, internalFieldNames?: Array<string>): T;
	getChanges(query?: SP.ChangeQuery): T;
	getCheckedOutFiles(): T;
	getItemById(id?: number): T;
	getItemByStringId(sId?: string): T;
	getItemByUniqueId(uniqueId?: any): T;
	getItems(query?: SP.CamlQuery): T;
	getListItemChangesSinceToken(query?: SP.ChangeLogItemQuery): T;
	getMappedApp(appId?: any, visualizationAppTarget?: number): T;
	getMappedApps(visualizationAppTarget?: number): T;
	getRelatedFields(): T;
	getSpecialFolderUrl(type?: number, bForceCreate?: boolean, existingFolderGuid?: any): T;
	getUserEffectivePermissions(userName?: string): T;
	getView(viewGuid?: any): T;
	getWebDavUrl(sourceUrl?: string): T;
	publishMappedView(appId?: any, visualizationTarget?: number): T;
	recycle(): T;
	renderExtendedListFormData(itemId?: number, formId?: string, mode?: number, options?: number, cutoffVersion?: number): T;
	renderListContextMenuData(CascDelWarnMessage?: string, CustomAction?: string, Field?: string, ID?: string, InplaceFullListSearch?: string, InplaceSearchQuery?: string, IsCSR?: string, IsXslView?: string, ItemId?: string, ListViewPageUrl?: string, OverrideScope?: string, RootFolder?: string, View?: string, ViewCount?: string): T;
	renderListData(viewXml?: string): T;
	renderListDataAsStream(parameters?: SP.RenderListDataParameters, CascDelWarnMessage?: string, CustomAction?: string, DrillDown?: string, Field?: string, FieldInternalName?: string, Filter?: string, FilterData?: string, FilterData1?: string, FilterData10?: string, FilterData2?: string, FilterData3?: string, FilterData4?: string, FilterData5?: string, FilterData6?: string, FilterData7?: string, FilterData8?: string, FilterData9?: string, FilterField?: string, FilterField1?: string, FilterField10?: string, FilterField2?: string, FilterField3?: string, FilterField4?: string, FilterField5?: string, FilterField6?: string, FilterField7?: string, FilterField8?: string, FilterField9?: string, FilterFields?: string, FilterFields1?: string, FilterFields10?: string, FilterFields2?: string, FilterFields3?: string, FilterFields4?: string, FilterFields5?: string, FilterFields6?: string, FilterFields7?: string, FilterFields8?: string, FilterFields9?: string, FilterLookupId?: string, FilterLookupId1?: string, FilterLookupId10?: string, FilterLookupId2?: string, FilterLookupId3?: string, FilterLookupId4?: string, FilterLookupId5?: string, FilterLookupId6?: string, FilterLookupId7?: string, FilterLookupId8?: string, FilterLookupId9?: string, FilterOp?: string, FilterOp1?: string, FilterOp10?: string, FilterOp2?: string, FilterOp3?: string, FilterOp4?: string, FilterOp5?: string, FilterOp6?: string, FilterOp7?: string, FilterOp8?: string, FilterOp9?: string, FilterValue?: string, FilterValue1?: string, FilterValue10?: string, FilterValue2?: string, FilterValue3?: string, FilterValue4?: string, FilterValue5?: string, FilterValue6?: string, FilterValue7?: string, FilterValue8?: string, FilterValue9?: string, FilterValues?: string, FilterValues1?: string, FilterValues10?: string, FilterValues2?: string, FilterValues3?: string, FilterValues4?: string, FilterValues5?: string, FilterValues6?: string, FilterValues7?: string, FilterValues8?: string, FilterValues9?: string, GroupString?: string, HasOverrideSelectCommand?: string, ID?: string, InplaceFullListSearch?: string, InplaceSearchQuery?: string, IsCSR?: string, IsGroupRender?: string, IsXslView?: string, ListViewPageUrl?: string, OverrideScope?: string, OverrideSelectCommand?: string, PageFirstRow?: string, PageLastRow?: string, RootFolder?: string, SortDir?: string, SortDir1?: string, SortDir10?: string, SortDir2?: string, SortDir3?: string, SortDir4?: string, SortDir5?: string, SortDir6?: string, SortDir7?: string, SortDir8?: string, SortDir9?: string, SortField?: string, SortField1?: string, SortField10?: string, SortField2?: string, SortField3?: string, SortField4?: string, SortField5?: string, SortField6?: string, SortField7?: string, SortField8?: string, SortField9?: string, SortFields?: string, SortFieldValues?: string, View?: string, ViewCount?: string, ViewId?: string, ViewPath?: string, WebPartId?: string): T;
	renderListFilterData(ExcludeFieldFilteringHtml?: boolean, FieldInternalName?: string, OverrideScope?: string, ProcessQStringToCAML?: string, ViewId?: string): T;
	renderListFormData(itemId?: number, formId?: string, mode?: number): T;
	reserveListItemId(): T;
	saveAsNewView(oldName?: string, newName?: string, privateView?: boolean, uri?: string): T;
	saveAsTemplate(strFileName?: string, strName?: string, strDescription?: string, bSaveData?: boolean): T;
	setExemptFromBlockDownloadOfNonViewableFiles(value?: boolean): T;
	syncFlowCallbackUrl(flowId?: string): T;
	syncFlowInstance(flowID?: any): T;
	syncFlowInstances(): T;
	syncFlowTemplates(category?: string): T;
	unpublishMappedView(appId?: any, visualizationTarget?: number): T;
	update(): T;
	validateAppName(appDisplayName?: string): T;
}

/*********************************************
* CreatablesInfo
**********************************************/
export interface CreatablesInfo {
	CanCreateFolders?: boolean;
	CanCreateItems?: boolean;
	CanUploadFiles?: boolean;
	CreatablesCollection?: SP.CreatableItemInfoCollection;
}

/*********************************************
* View
**********************************************/
export interface View {
	Aggregations?: string;
	AggregationsStatus?: string;
	BaseViewId?: string;
	ColumnWidth?: string;
	ContentTypeId?: SP.ContentTypeId;
	CustomFormatter?: string;
	DefaultView?: boolean;
	DefaultViewForContentType?: boolean;
	EditorModified?: boolean;
	Formats?: string;
	Hidden?: boolean;
	HtmlSchemaXml?: string;
	Id?: any;
	ImageUrl?: string;
	IncludeRootFolder?: boolean;
	ViewJoins?: string;
	JSLink?: string;
	ListViewXml?: string;
	Method?: string;
	MobileDefaultView?: boolean;
	MobileView?: boolean;
	ModerationType?: string;
	NewDocumentTemplates?: string;
	OrderedView?: boolean;
	Paged?: boolean;
	PageRenderType?: number;
	PersonalView?: boolean;
	ViewProjectedFields?: string;
	ViewQuery?: string;
	ReadOnlyView?: boolean;
	RequiresClientIntegration?: boolean;
	RowLimit?: number;
	Scope?: number;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
	StyleId?: string;
	TabularView?: boolean;
	Threaded?: boolean;
	Title?: string;
	Toolbar?: string;
	ToolbarTemplateName?: string;
	ViewType?: string;
	ViewData?: string;
	VisualizationInfo?: SP.Visualization;
}

/*********************************************
* ViewCollections<T = any>
**********************************************/
export interface ViewCollections<T = any> {
	ViewFields(): T;
}

/*********************************************
* ViewQuery
**********************************************/
export interface ViewQuery {
	ViewFields(): T;
}

/*********************************************
* ViewMethods<T = any>
**********************************************/
export interface ViewMethods<T = any> {
	addToSpotlight(itemId?: number, folderPath?: string, afterItemId?: number): T;
	deleteObject(): T;
	removeFromSpotlight(itemId?: number, folderPath?: string): T;
	renderAsHtml(): T;
	setViewXml(viewXml?: string): T;
	update(): T;
}

/*********************************************
* ViewFieldCollection
**********************************************/
export interface ViewFieldCollection {
	SchemaXml?: string;
	Items?: Array<string>;
}

/*********************************************
* ViewFieldCollectionMethods<T = any>
**********************************************/
export interface ViewFieldCollectionMethods<T = any> {
	addViewField(strField?: string): T;
	moveViewFieldTo(field?: string, index?: number): T;
	removeAllViewFields(): T;
	removeViewField(strField?: string): T;
}

/*********************************************
* Form
**********************************************/
export interface Form {
	Id?: any;
	ResourcePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
	FormType?: number;
}

/*********************************************
* InformationRightsManagementSettings
**********************************************/
export interface InformationRightsManagementSettings {
	AllowPrint?: boolean;
	AllowScript?: boolean;
	AllowWriteCopy?: boolean;
	DisableDocumentBrowserView?: boolean;
	DocumentAccessExpireDays?: number;
	DocumentLibraryProtectionExpireDate?: any;
	EnableDocumentAccessExpire?: boolean;
	EnableDocumentBrowserPublishingView?: boolean;
	EnableGroupProtection?: boolean;
	EnableLicenseCacheExpire?: boolean;
	GroupName?: string;
	LicenseCacheExpireDays?: number;
	PolicyDescription?: string;
	PolicyTitle?: string;
	TemplateId?: string;
}

/*********************************************
* InformationRightsManagementSettingsMethods<T = any>
**********************************************/
export interface InformationRightsManagementSettingsMethods<T = any> {
	reset(): T;
	update(): T;
}

/*********************************************
* Web
**********************************************/
export interface Web extends SP.SecurableObject {
	AccessRequestSiteDescription?: string;
	AllowAutomaticASPXPageIndexing?: boolean;
	AllowCreateDeclarativeWorkflowForCurrentUser?: boolean;
	AllowDesignerForCurrentUser?: boolean;
	AllowMasterPageEditingForCurrentUser?: boolean;
	AllowRevertFromTemplateForCurrentUser?: boolean;
	AllowRssFeeds?: boolean;
	AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser?: boolean;
	AllowSavePublishDeclarativeWorkflowForCurrentUser?: boolean;
	AlternateCssUrl?: string;
	AppInstanceId?: any;
	CommentsOnSitePagesDisabled?: boolean;
	Configuration?: number;
	ContainsConfidentialInfo?: boolean;
	Created?: any;
	CurrentChangeToken?: SP.ChangeToken;
	CustomMasterUrl?: string;
	DepartmentData?: string;
	Description?: string;
	DesignerDownloadUrlForCurrentUser?: string;
	DesignPackageId?: any;
	DisableAppViews?: boolean;
	DisableFlows?: boolean;
	DocumentLibraryCalloutOfficeWebAppPreviewersDisabled?: boolean;
	EffectiveBasePermissions?: SP.BasePermissions;
	EnableMinimalDownload?: boolean;
	ExcludeFromOfflineClient?: boolean;
	FooterEnabled?: boolean;
	HeaderEmphasis?: number;
	HeaderLayout?: number;
	HorizontalQuickLaunch?: boolean;
	Id?: any;
	IsMultilingual?: boolean;
	Language?: number;
	LastItemModifiedDate?: any;
	LastItemUserModifiedDate?: any;
	MasterUrl?: string;
	MegaMenuEnabled?: boolean;
	MembersCanShare?: boolean;
	NoCrawl?: boolean;
	NotificationsInOneDriveForBusinessEnabled?: boolean;
	NotificationsInSharePointEnabled?: boolean;
	ObjectCacheEnabled?: boolean;
	OverwriteTranslationsOnChange?: boolean;
	ResourcePath?: SP.ResourcePath;
	PreviewFeaturesEnabled?: boolean;
	PrimaryColor?: string;
	QuickLaunchEnabled?: boolean;
	RecycleBinEnabled?: boolean;
	RequestAccessEmail?: string;
	SaveSiteAsTemplateEnabled?: boolean;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
	ShowUrlStructureForCurrentUser?: boolean;
	SiteLogoDescription?: string;
	SiteLogoUrl?: string;
	SupportedUILanguageIds?: Array<number>;
	SyndicationEnabled?: boolean;
	TenantTagPolicyEnabled?: boolean;
	ThemeData?: string;
	ThemedCssFolderUrl?: string;
	ThirdPartyMdmEnabled?: boolean;
	Title?: string;
	TreeViewEnabled?: boolean;
	UIVersion?: number;
	UIVersionConfigurationEnabled?: boolean;
	Url?: string;
	UseAccessRequestDefault?: boolean;
	WebTemplate?: string;
	WelcomePage?: string;
}

/*********************************************
* WebCollections<T = any>
**********************************************/
export interface WebCollections<T = any> {
	Activities(): T;
	ActivityLogger(): T;
	Alerts(): T;
	AllProperties(): T;
	AppTiles(): T;
	AssociatedMemberGroup(): T;
	AssociatedOwnerGroup(): T;
	AssociatedVisitorGroup(): T;
	Author(): T;
	AvailableContentTypes(): T;
	AvailableFields(): T;
	ClientWebParts(): T;
	ContentTypes(): T;
	CurrentUser(): T;
	DataLeakagePreventionStatusInfo(): T;
	DescriptionResource(): T;
	EventReceivers(): T;
	Features(): T;
	Fields(): T;
	Folders(): T;
	HostedApps(): T;
	Lists(): T;
	ListTemplates(): T;
	Navigation(): T;
	OneDriveSharedItems(): T;
	ParentWeb(): T;
	PushNotificationSubscribers(): T;
	RecycleBin(): T;
	RegionalSettings(): T;
	RoleDefinitions(): T;
	RootFolder(): T;
	SiteCollectionAppCatalog(): T;
	SiteGroups(): T;
	SiteUserInfoList(): T;
	SiteUsers(): T;
	TenantAppCatalog(): T;
	ThemeInfo(): T;
	TitleResource(): T;
	UserCustomActions(): T;
	Webs(): T;
	WebInfos(): T;
	WorkflowAssociations(): T;
	WorkflowTemplates(): T;
}

/*********************************************
* WebQuery
**********************************************/
export interface WebQuery {
	Activities(): T;
	ActivityLogger(): T;
	Alerts(): T;
	AllProperties(): T;
	AppTiles(): T;
	AssociatedMemberGroup(): T;
	AssociatedOwnerGroup(): T;
	AssociatedVisitorGroup(): T;
	Author(): T;
	AvailableContentTypes(): T;
	AvailableFields(): T;
	ClientWebParts(): T;
	ContentTypes(): T;
	CurrentUser(): T;
	DataLeakagePreventionStatusInfo(): T;
	DescriptionResource(): T;
	EventReceivers(): T;
	Features(): T;
	Fields(): T;
	Folders(): T;
	HostedApps(): T;
	Lists(): T;
	ListTemplates(): T;
	Navigation(): T;
	OneDriveSharedItems(): T;
	ParentWeb(): T;
	PushNotificationSubscribers(): T;
	RecycleBin(): T;
	RegionalSettings(): T;
	RoleDefinitions(): T;
	RootFolder(): T;
	SiteCollectionAppCatalog(): T;
	SiteGroups(): T;
	SiteUserInfoList(): T;
	SiteUsers(): T;
	TenantAppCatalog(): T;
	ThemeInfo(): T;
	TitleResource(): T;
	UserCustomActions(): T;
	Webs(): T;
	WebInfos(): T;
	WorkflowAssociations(): T;
	WorkflowTemplates(): T;
}

/*********************************************
* WebMethods<T = any>
**********************************************/
export interface WebMethods<T = any> {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): T;
	resetRoleInheritance(): T;
	addCrossFarmMessage(messagePayloadBase64?: string): T;
	addSupportedUILanguage(lcid?: number): T;
	applyTheme(colorPaletteUrl?: string, fontSchemeUrl?: string, backgroundImageUrl?: string, shareGenerated?: boolean): T;
	applyWebTemplate(webTemplate?: string): T;
	createDefaultAssociatedGroups(userLogin?: string, userLogin2?: string, groupNameSeed?: string): T;
	defaultDocumentLibrary(): T;
	deleteObject(): T;
	doesPushNotificationSubscriberExist(deviceAppInstanceId?: any): T;
	doesUserHavePermissions(permissionMask?: SP.BasePermissions): T;
	ensureUser(logonName?: string): T;
	executeRemoteLOB(inputStream?: any): T;
	getAppBdcCatalog(): T;
	getAppBdcCatalogForAppInstance(appInstanceId?: any): T;
	getAppInstanceById(appInstanceId?: any): T;
	getAppInstancesByProductId(productId?: any): T;
	getAvailableWebTemplates(lcid?: number, doIncludeCrossLanguage?: boolean): T;
	getCatalog(typeCatalog?: number): T;
	getChanges(query?: SP.ChangeQuery): T;
	getClientSideComponents(components?: Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentIdentifier>): T;
	getClientSideComponentsById(componentIds?: Array<any>): T;
	getClientSideWebParts(includeErrors?: boolean): T;
	getCustomListTemplates(): T;
	getEntity(namespace?: string, name?: string): T;
	getFileByGuestUrl(guestUrl?: string): T;
	getFileByGuestUrlEnsureAccess(guestUrl?: string, ensureAccess?: boolean): T;
	getFileByGuestUrlExtended(guestUrl?: string, requestSettings?: SP.Sharing.SharingLinkAccessRequest): T;
	getFileById(uniqueId?: any): T;
	getFileByLinkingUrl(linkingUrl?: string): T;
	getFileByServerRelativePath(DecodedUrl?: string): T;
	getFileByServerRelativeUrl(serverRelativeUrl?: string): T;
	getFileByUrl(fileUrl?: string): T;
	getFileByWOPIFrameUrl(wopiFrameUrl?: string): T;
	getFolderByGuestUrl(guestUrl?: string, ensureAccess?: boolean): T;
	getFolderByGuestUrlExtended(guestUrl?: string, requestSettings?: SP.Sharing.SharingLinkAccessRequest): T;
	getFolderById(uniqueId?: any): T;
	getFolderByServerRelativePath(DecodedUrl?: string): T;
	getFolderByServerRelativeUrl(serverRelativeUrl?: string): T;
	getList(strUrl?: string): T;
	getListItem(strUrl?: string): T;
	getListItemByResourceId(resourceId?: string): T;
	getListItemUsingPath(DecodedUrl?: string): T;
	getListUsingPath(DecodedUrl?: string): T;
	getNewsList(allowCreate?: boolean): T;
	getOnePageContextAsStream(): T;
	getPushNotificationSubscriber(deviceAppInstanceId?: any): T;
	getPushNotificationSubscribersByArgs(customArgs?: string): T;
	getPushNotificationSubscribersByUser(userName?: string): T;
	getRecycleBinItems(pagingInfo?: string, rowLimit?: number, isAscending?: boolean, orderBy?: number, itemState?: number): T;
	getRecycleBinItemsByQueryInfo(IsAscending?: boolean, ItemState?: number, OrderBy?: number, PagingInfo?: string, RowLimit?: number, ShowOnlyMyItems?: boolean): T;
	getRegionalDateTimeSchema(): T;
	getSharingLinkData(linkUrl?: string): T;
	getStorageEntity(key?: string): T;
	getSubwebsFilteredForCurrentUser(nWebTemplateFilter?: number, nConfigurationFilter?: number): T;
	getUserById(userId?: number): T;
	getUserEffectivePermissions(userName?: string): T;
	getViewFromPath(DecodedUrl?: string): T;
	getViewFromUrl(listUrl?: string): T;
	hubSiteData(forceRefresh?: boolean): T;
	hubSiteDataAsStream(forceRefresh?: boolean): T;
	incrementSiteClientTag(): T;
	loadAndInstallApp(appPackageStream?: any): T;
	loadAndInstallAppInSpecifiedLocale(appPackageStream?: any, installationLocaleLCID?: number): T;
	loadApp(appPackageStream?: any, installationLocaleLCID?: number): T;
	mapToIcon(fileName?: string, progId?: string, size?: number): T;
	pageContextInfo(includeODBSettings?: boolean, emitNavigationInfo?: boolean): T;
	parseDateTime(value?: string, displayFormat?: number, calendarType?: number): T;
	processExternalNotification(stream?: any): T;
	registerPushNotificationSubscriber(deviceAppInstanceId?: any, serviceToken?: string): T;
	removeStorageEntity(key?: string): T;
	removeSupportedUILanguage(lcid?: number): T;
	setAccessRequestSiteDescriptionAndUpdate(description?: string): T;
	setStorageEntity(key?: string, value?: string, description?: string, comments?: string): T;
	setUseAccessRequestDefaultAndUpdate(useAccessRequestDefault?: boolean): T;
	syncFlowInstances(targetWebUrl?: string): T;
	syncFlowTemplates(category?: string): T;
	syncHubSiteTheme(): T;
	unregisterPushNotificationSubscriber(deviceAppInstanceId?: any): T;
	update(): T;
}

/*********************************************
* AppTile
**********************************************/
export interface AppTile {
	AppId?: any;
	AppPrincipalId?: string;
	AppSource?: number;
	AppStatus?: number;
	AppType?: number;
	AssetId?: string;
	BaseTemplate?: number;
	ChildCount?: number;
	ContentMarket?: string;
	CustomSettingsUrl?: string;
	Description?: string;
	IsCorporateCatalogSite?: boolean;
	LastModified?: string;
	LastModifiedDate?: any;
	ProductId?: any;
	Target?: string;
	Thumbnail?: string;
	Title?: string;
	Version?: string;
}

/*********************************************
* Group
**********************************************/
export interface Group extends SP.Principal {
	AllowMembersEditMembership?: boolean;
	AllowRequestToJoinLeave?: boolean;
	AutoAcceptRequestToJoinLeave?: boolean;
	CanCurrentUserEditMembership?: boolean;
	CanCurrentUserManageGroup?: boolean;
	CanCurrentUserViewMembership?: boolean;
	Description?: string;
	OnlyAllowMembersViewMembership?: boolean;
	OwnerTitle?: string;
	RequestToJoinLeaveEmailSetting?: string;
}

/*********************************************
* GroupCollections<T = any>
**********************************************/
export interface GroupCollections<T = any> {
	Owner(): T;
	Users(): T;
}

/*********************************************
* GroupQuery
**********************************************/
export interface GroupQuery {
	Owner(): T;
	Users(): T;
}

/*********************************************
* GroupMethods<T = any>
**********************************************/
export interface GroupMethods<T = any> {
	setUserAsOwner(ownerId?: number): T;
	update(): T;
}

/*********************************************
* ClientWebPart
**********************************************/
export interface ClientWebPart {
	Id?: any;
	Name?: string;
}

/*********************************************
* ClientWebPartMethods<T = any>
**********************************************/
export interface ClientWebPartMethods<T = any> {
	render(properties?: Array<SP.KeyValue>): T;
}

/*********************************************
* SPDataLeakagePreventionStatusInfo
**********************************************/
export interface SPDataLeakagePreventionStatusInfo {
	ContainsConfidentialInfo?: boolean;
	ContainsConfidentialInfoLearnMoreUrl?: string;
	ExternalSharingTipsEnabled?: boolean;
	ExternalSharingTipsLearnMoreUrl?: string;
}

/*********************************************
* ListTemplate
**********************************************/
export interface ListTemplate {
	AllowsFolderCreation?: boolean;
	BaseType?: number;
	Description?: string;
	FeatureId?: any;
	Hidden?: boolean;
	ImageUrl?: string;
	InternalName?: string;
	IsCustomTemplate?: boolean;
	Name?: string;
	OnQuickLaunch?: boolean;
	ListTemplateTypeKind?: number;
	Unique?: boolean;
}

/*********************************************
* ListTemplateMethods<T = any>
**********************************************/
export interface ListTemplateMethods<T = any> {
	getGlobalSchemaXml(): T;
}

/*********************************************
* Navigation
**********************************************/
export interface Navigation {
	UseShared?: boolean;
}

/*********************************************
* NavigationCollections<T = any>
**********************************************/
export interface NavigationCollections<T = any> {
	QuickLaunch(): T;
	TopNavigationBar(): T;
}

/*********************************************
* NavigationQuery
**********************************************/
export interface NavigationQuery {
	QuickLaunch(): T;
	TopNavigationBar(): T;
}

/*********************************************
* NavigationMethods<T = any>
**********************************************/
export interface NavigationMethods<T = any> {
	getNodeById(id?: number): T;
}

/*********************************************
* NavigationNode
**********************************************/
export interface NavigationNode {
	AudienceIds?: Array<any>;
	Id?: number;
	IsDocLib?: boolean;
	IsExternal?: boolean;
	IsVisible?: boolean;
	ListTemplateType?: number;
	Title?: string;
	Url?: string;
}

/*********************************************
* NavigationNodeCollections<T = any>
**********************************************/
export interface NavigationNodeCollections<T = any> {
	Children(): T;
}

/*********************************************
* NavigationNodeQuery
**********************************************/
export interface NavigationNodeQuery {
	Children(): T;
}

/*********************************************
* NavigationNodeMethods<T = any>
**********************************************/
export interface NavigationNodeMethods<T = any> {
	deleteObject(): T;
	update(): T;
}

/*********************************************
* WebInformation
**********************************************/
export interface WebInformation {
	Configuration?: number;
	Created?: any;
	Description?: string;
	Id?: any;
	Language?: number;
	LastItemModifiedDate?: any;
	LastItemUserModifiedDate?: any;
	ServerRelativeUrl?: string;
	Title?: string;
	WebTemplate?: string;
	WebTemplateId?: number;
}

/*********************************************
* PushNotificationSubscriber
**********************************************/
export interface PushNotificationSubscriber {
	CustomArgs?: string;
	DeviceAppInstanceId?: any;
	LastModifiedTimeStamp?: any;
	RegistrationTimeStamp?: any;
	ServiceToken?: string;
	SubscriberType?: string;
}

/*********************************************
* PushNotificationSubscriberCollections<T = any>
**********************************************/
export interface PushNotificationSubscriberCollections<T = any> {
	User(): T;
}

/*********************************************
* PushNotificationSubscriberQuery
**********************************************/
export interface PushNotificationSubscriberQuery {
	User(): T;
}

/*********************************************
* PushNotificationSubscriberMethods<T = any>
**********************************************/
export interface PushNotificationSubscriberMethods<T = any> {
	update(): T;
}

/*********************************************
* RecycleBinItem
**********************************************/
export interface RecycleBinItem {
	AuthorEmail?: string;
	AuthorName?: string;
	DeletedByEmail?: string;
	DeletedByName?: string;
	DeletedDate?: any;
	DeletedDateLocalFormatted?: string;
	DirName?: string;
	DirNamePath?: SP.ResourcePath;
	Id?: any;
	ItemState?: number;
	ItemType?: number;
	LeafName?: string;
	LeafNamePath?: SP.ResourcePath;
	Size?: number;
	Title?: string;
}

/*********************************************
* RecycleBinItemCollections<T = any>
**********************************************/
export interface RecycleBinItemCollections<T = any> {
	Author(): T;
	DeletedBy(): T;
}

/*********************************************
* RecycleBinItemQuery
**********************************************/
export interface RecycleBinItemQuery {
	Author(): T;
	DeletedBy(): T;
}

/*********************************************
* RecycleBinItemMethods<T = any>
**********************************************/
export interface RecycleBinItemMethods<T = any> {
	deleteObject(): T;
	moveToSecondStage(): T;
	restore(): T;
}

/*********************************************
* RegionalSettings
**********************************************/
export interface RegionalSettings {
	AdjustHijriDays?: number;
	AlternateCalendarType?: number;
	AM?: string;
	CalendarType?: number;
	Collation?: number;
	CollationLCID?: number;
	DateFormat?: number;
	DateSeparator?: string;
	DecimalSeparator?: string;
	DigitGrouping?: string;
	FirstDayOfWeek?: number;
	FirstWeekOfYear?: number;
	IsEastAsia?: boolean;
	IsRightToLeft?: boolean;
	IsUIRightToLeft?: boolean;
	ListSeparator?: string;
	LocaleId?: number;
	NegativeSign?: string;
	NegNumberMode?: number;
	PM?: string;
	PositiveSign?: string;
	ShowWeeks?: boolean;
	ThousandSeparator?: string;
	Time24?: boolean;
	TimeMarkerPosition?: number;
	TimeSeparator?: string;
	WorkDayEndHour?: number;
	WorkDays?: number;
	WorkDayStartHour?: number;
}

/*********************************************
* RegionalSettingsCollections<T = any>
**********************************************/
export interface RegionalSettingsCollections<T = any> {
	InstalledLanguages(): T;
	TimeZone(): T;
	TimeZones(): T;
}

/*********************************************
* RegionalSettingsQuery
**********************************************/
export interface RegionalSettingsQuery {
	InstalledLanguages(): T;
	TimeZone(): T;
	TimeZones(): T;
}

/*********************************************
* RegionalSettingsMethods<T = any>
**********************************************/
export interface RegionalSettingsMethods<T = any> {
	update(): T;
}

/*********************************************
* LanguageCollection
**********************************************/
export interface LanguageCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<SP.Language>;
}

/*********************************************
* LanguageCollectionMethods<T = any>
**********************************************/
export interface LanguageCollectionMethods<T = any> {
	getById(id?: number): T;
}

/*********************************************
* TimeZone
**********************************************/
export interface TimeZone {
	Description?: string;
	Id?: number;
	Information?: SP.TimeZoneInformation;
}

/*********************************************
* TimeZoneMethods<T = any>
**********************************************/
export interface TimeZoneMethods<T = any> {
	localTimeToUTC(date?: any): T;
	uTCToLocalTime(date?: any): T;
}

/*********************************************
* ThemeInfo
**********************************************/
export interface ThemeInfo {
	AccessibleDescription?: string;
	ThemeBackgroundImageUri?: string;
}

/*********************************************
* ThemeInfoMethods<T = any>
**********************************************/
export interface ThemeInfoMethods<T = any> {
	getThemeFontByName(name?: string, lcid?: number): T;
	getThemeShadeByName(name?: string): T;
}

/*********************************************
* UserCustomAction
**********************************************/
export interface UserCustomAction {
	ClientSideComponentId?: any;
	ClientSideComponentProperties?: string;
	CommandUIExtension?: string;
	Description?: string;
	Group?: string;
	Id?: any;
	ImageUrl?: string;
	Location?: string;
	Name?: string;
	RegistrationId?: string;
	RegistrationType?: number;
	Rights?: SP.BasePermissions;
	Scope?: number;
	ScriptBlock?: string;
	ScriptSrc?: string;
	Sequence?: number;
	Title?: string;
	Url?: string;
	VersionOfUserCustomAction?: string;
}

/*********************************************
* UserCustomActionCollections<T = any>
**********************************************/
export interface UserCustomActionCollections<T = any> {
	DescriptionResource(): T;
	TitleResource(): T;
}

/*********************************************
* UserCustomActionQuery
**********************************************/
export interface UserCustomActionQuery {
	DescriptionResource(): T;
	TitleResource(): T;
}

/*********************************************
* UserCustomActionMethods<T = any>
**********************************************/
export interface UserCustomActionMethods<T = any> {
	deleteObject(): T;
	update(): T;
}

/*********************************************
* ListItemVersion
**********************************************/
export interface ListItemVersion {
	Created?: any;
	IsCurrentVersion?: boolean;
	VersionId?: number;
	VersionLabel?: string;
}

/*********************************************
* ListItemVersionCollections<T = any>
**********************************************/
export interface ListItemVersionCollections<T = any> {
	CreatedBy(): T;
	Fields(): T;
	FileVersion(): T;
}

/*********************************************
* ListItemVersionQuery
**********************************************/
export interface ListItemVersionQuery {
	CreatedBy(): T;
	Fields(): T;
	FileVersion(): T;
}

/*********************************************
* ListItemVersionMethods<T = any>
**********************************************/
export interface ListItemVersionMethods<T = any> {
	deleteObject(): T;
}

/*********************************************
* SPAppLicenseManager
**********************************************/
export interface SPAppLicenseManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAppLicenseManagerMethods<T = any>
**********************************************/
export interface SPAppLicenseManagerMethods<T = any> {
	checkLicense(productId?: any): T;
}

/*********************************************
* SolutionExporter
**********************************************/
export interface SolutionExporter {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserSolution
**********************************************/
export interface UserSolution {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppCatalog
**********************************************/
export interface AppCatalog {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppInstanceErrorDetails
**********************************************/
export interface AppInstanceErrorDetails {
	CorrelationId?: any;
	ErrorDetail?: string;
	ErrorType?: number;
	ErrorTypeName?: string;
	ExceptionMessage?: string;
	Source?: number;
	SourceName?: string;
}

/*********************************************
* AppInstance
**********************************************/
export interface AppInstance {
	AppPrincipalId?: string;
	AppWebFullUrl?: string;
	Id?: any;
	ImageFallbackUrl?: string;
	ImageUrl?: string;
	InError?: boolean;
	StartPage?: string;
	PackageFingerprint?: any;
	ProductId?: any;
	RemoteAppUrl?: string;
	SettingsPageUrl?: string;
	SiteId?: any;
	Status?: number;
	Title?: string;
	WebId?: any;
}

/*********************************************
* AppInstanceMethods<T = any>
**********************************************/
export interface AppInstanceMethods<T = any> {
	cancelAllJobs(): T;
	getAppDatabaseConnectionString(): T;
	getErrorDetails(): T;
	getPreviousAppVersion(): T;
	install(): T;
	recycle(): T;
	restore(): T;
	retryAllJobs(): T;
	uninstall(): T;
	upgrade(appPackageStream?: any): T;
}

/*********************************************
* App
**********************************************/
export interface App {
	AssetId?: string;
	ContentMarket?: string;
	VersionString?: string;
}

/*********************************************
* AlternateUrl
**********************************************/
export interface AlternateUrl {
	Uri?: string;
	UrlZone?: number;
}

/*********************************************
* ObjectSharingSettings
**********************************************/
export interface ObjectSharingSettings {
	AccessRequestMode?: boolean;
	BlockPeoplePickerAndSharing?: boolean;
	CanCurrentUserManageOrganizationReadonlyLink?: boolean;
	CanCurrentUserManageOrganizationReadWriteLink?: boolean;
	CanCurrentUserManageReadonlyLink?: boolean;
	CanCurrentUserManageReadWriteLink?: boolean;
	CanCurrentUserRetrieveOrganizationReadonlyLink?: boolean;
	CanCurrentUserRetrieveOrganizationReadWriteLink?: boolean;
	CanCurrentUserRetrieveReadonlyLink?: boolean;
	CanCurrentUserRetrieveReadWriteLink?: boolean;
	CanCurrentUserShareExternally?: boolean;
	CanCurrentUserShareInternally?: boolean;
	CanSendEmail?: boolean;
	CanSendLink?: boolean;
	CanShareFolder?: boolean;
	DefaultShareLinkPermission?: number;
	DefaultShareLinkType?: number;
	GroupsList?: Array<SP.KeyValue>;
	HasEditRole?: boolean;
	HasReadRole?: boolean;
	InheritingWebLink?: string;
	IsGuestUser?: boolean;
	IsPictureLibrary?: boolean;
	IsUserSiteAdmin?: boolean;
	ItemId?: string;
	ItemName?: string;
	ItemUrl?: string;
	ListId?: any;
	PermissionsOnlyMode?: boolean;
	RequiredAnonymousLinkExpirationInDays?: number;
	Roles?: Array<SP.KeyValue>;
	ShareByEmailEnabled?: boolean;
	ShowExternalSharingWarning?: boolean;
	SimplifiedRoles?: Array<SP.KeyValue>;
	SupportsAclPropagation?: boolean;
	WebUrl?: string;
}

/*********************************************
* ObjectSharingSettingsCollections<T = any>
**********************************************/
export interface ObjectSharingSettingsCollections<T = any> {
	ObjectSharingInformation(): T;
	SharePointSettings(): T;
	SharingPermissions(): T;
}

/*********************************************
* ObjectSharingSettingsQuery
**********************************************/
export interface ObjectSharingSettingsQuery {
	ObjectSharingInformation(): T;
	SharePointSettings(): T;
	SharingPermissions(): T;
}

/*********************************************
* ObjectSharingInformation
**********************************************/
export interface ObjectSharingInformation {
	AnonymousEditLink?: string;
	AnonymousViewLink?: string;
	CanBeShared?: boolean;
	CanBeUnshared?: boolean;
	CanManagePermissions?: boolean;
	HasPendingAccessRequests?: boolean;
	HasPermissionLevels?: boolean;
	IsFolder?: boolean;
	IsSharedWithCurrentUser?: boolean;
	IsSharedWithGuest?: boolean;
	IsSharedWithMany?: boolean;
	IsSharedWithSecurityGroup?: boolean;
	PendingAccessRequestsLink?: string;
	SharingLinks?: Array<SP.SharingLinkInfo>;
	TotalFileCount?: number;
}

/*********************************************
* ObjectSharingInformationCollections<T = any>
**********************************************/
export interface ObjectSharingInformationCollections<T = any> {
	SharedWithUsersCollection(): T;
}

/*********************************************
* ObjectSharingInformationQuery
**********************************************/
export interface ObjectSharingInformationQuery {
	SharedWithUsersCollection(): T;
}

/*********************************************
* ObjectSharingInformationMethods<T = any>
**********************************************/
export interface ObjectSharingInformationMethods<T = any> {
	getSharedWithUsers(): T;
}

/*********************************************
* ObjectSharingInformationUser
**********************************************/
export interface ObjectSharingInformationUser {
	CustomRoleNames?: string;
	Department?: string;
	Email?: string;
	HasEditPermission?: boolean;
	HasReviewPermission?: boolean;
	HasViewPermission?: boolean;
	Id?: number;
	IsDomainGroup?: boolean;
	IsExternalUser?: boolean;
	IsMemberOfGroup?: boolean;
	IsSiteAdmin?: boolean;
	JobTitle?: string;
	LoginName?: string;
	Name?: string;
	Picture?: string;
	SipAddress?: string;
}

/*********************************************
* ObjectSharingInformationUserCollections<T = any>
**********************************************/
export interface ObjectSharingInformationUserCollections<T = any> {
	Principal(): T;
	User(): T;
}

/*********************************************
* ObjectSharingInformationUserQuery
**********************************************/
export interface ObjectSharingInformationUserQuery {
	Principal(): T;
	User(): T;
}

/*********************************************
* SharePointSharingSettings
**********************************************/
export interface SharePointSharingSettings {
	AddToGroupModeName?: string;
	GroupNameLines?: Array<string>;
	GroupRoleDefinitionNamesLines?: Array<string>;
	IsMobileView?: boolean;
	PanelGivePermissionsVisible?: boolean;
	PanelShowHideMoreOptionsVisible?: boolean;
	PanelSimplifiedRoleSelectorVisible?: boolean;
	RequiredScriptFileLinks?: Array<string>;
	RoleDefinitionNameLines?: Array<string>;
	SelectedGroup?: string;
	SharedWithEnabled?: boolean;
	SharingCssLink?: string;
	TabbedDialogEnabled?: boolean;
	TabToShow?: number;
	txtEmailSubjectText?: string;
	UserDisplayUrl?: string;
}

/*********************************************
* SharePointSharingSettingsCollections<T = any>
**********************************************/
export interface SharePointSharingSettingsCollections<T = any> {
	PickerProperties(): T;
}

/*********************************************
* SharePointSharingSettingsQuery
**********************************************/
export interface SharePointSharingSettingsQuery {
	PickerProperties(): T;
}

/*********************************************
* PickerSettings
**********************************************/
export interface PickerSettings {
	AllowEmailAddresses?: boolean;
	AllowOnlyEmailAddresses?: boolean;
	PrincipalAccountType?: string;
	PrincipalSource?: number;
	QuerySettings?: SP.UI.ApplicationPages.PeoplePickerQuerySettings;
	VisibleSuggestions?: number;
}

/*********************************************
* SharingPermissionInformation
**********************************************/
export interface SharingPermissionInformation {
	IsDefaultPermission?: boolean;
	PermissionDescription?: string;
	PermissionId?: string;
	PermissionKind?: number;
	PermissionName?: string;
	PermissionRoleType?: number;
}

/*********************************************
* RelatedItemManager
**********************************************/
export interface RelatedItemManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ServerSettings
**********************************************/
export interface ServerSettings {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharingResult
**********************************************/
export interface SharingResult {
	ErrorMessage?: string;
	IconUrl?: string;
	InvitedUsers?: Array<SP.SPInvitationCreationResult>;
	Name?: string;
	PermissionsPageRelativeUrl?: string;
	StatusCode?: number;
	UniquelyPermissionedUsers?: Array<SP.Sharing.UserSharingResult>;
	Url?: string;
	UsersAddedToGroup?: Array<SP.Sharing.UserSharingResult>;
}

/*********************************************
* SharingResultCollections<T = any>
**********************************************/
export interface SharingResultCollections<T = any> {
	GroupsSharedWith(): T;
	GroupUsersAddedTo(): T;
	UsersWithAccessRequests(): T;
}

/*********************************************
* SharingResultQuery
**********************************************/
export interface SharingResultQuery {
	GroupsSharedWith(): T;
	GroupUsersAddedTo(): T;
	UsersWithAccessRequests(): T;
}

/*********************************************
* AccessRequests
**********************************************/
export interface AccessRequests {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppContextSite
**********************************************/
export interface AppContextSite {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppContextSiteCollections<T = any>
**********************************************/
export interface AppContextSiteCollections<T = any> {
	Site(): T;
	Web(): T;
}

/*********************************************
* AppContextSiteQuery
**********************************************/
export interface AppContextSiteQuery {
	Site(): T;
	Web(): T;
}

/*********************************************
* AppSiteContextUtility
**********************************************/
export interface AppSiteContextUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppTileProperties
**********************************************/
export interface AppTileProperties {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* Change
**********************************************/
export interface Change {
	ChangeToken?: SP.ChangeToken;
	ChangeType?: number;
	RelativeTime?: string;
	SiteId?: any;
	Time?: any;
}

/*********************************************
* ChangeAlert
**********************************************/
export interface ChangeAlert extends SP.Change {
	AlertId?: any;
	WebId?: any;
}

/*********************************************
* ChangeContentType
**********************************************/
export interface ChangeContentType extends SP.Change {
	ContentTypeId?: SP.ContentTypeId;
	WebId?: any;
}

/*********************************************
* ChangeField
**********************************************/
export interface ChangeField extends SP.Change {
	FieldId?: any;
	WebId?: any;
}

/*********************************************
* ChangeFile
**********************************************/
export interface ChangeFile extends SP.Change {
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* ChangeFolder
**********************************************/
export interface ChangeFolder extends SP.Change {
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* ChangeGroup
**********************************************/
export interface ChangeGroup extends SP.Change {
	GroupId?: number;
}

/*********************************************
* ChangeItem
**********************************************/
export interface ChangeItem extends SP.Change {
	ActivityType?: number;
	ContentTypeId?: SP.ContentTypeId;
	Editor?: string;
	EditorEmailHint?: string;
	EditorLoginName?: string;
	FileSystemObjectType?: number;
	FileType?: string;
	Hashtag?: string;
	Hidden?: boolean;
	ItemId?: number;
	ListId?: any;
	ListTemplate?: number;
	ListTitle?: string;
	ServerRelativeUrl?: string;
	SharedByUser?: SP.SharedWithUser;
	SharedWithUsers?: SP.SharedWithUserCollection;
	Title?: string;
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* ChangeList
**********************************************/
export interface ChangeList extends SP.Change {
	BaseTemplate?: number;
	Editor?: string;
	Hidden?: boolean;
	ListId?: any;
	RootFolderUrl?: string;
	Title?: string;
	WebId?: any;
}

/*********************************************
* ChangeListCollections<T = any>
**********************************************/
export interface ChangeListCollections<T = any> {
	Creator(): T;
}

/*********************************************
* ChangeListQuery
**********************************************/
export interface ChangeListQuery {
	Creator(): T;
}

/*********************************************
* ChangeSite
**********************************************/
export interface ChangeSite extends SP.Change {

}

/*********************************************
* ChangeUser
**********************************************/
export interface ChangeUser extends SP.Change {
	Activate?: boolean;
	UserId?: number;
}

/*********************************************
* ChangeView
**********************************************/
export interface ChangeView extends SP.Change {
	ViewId?: any;
	ListId?: any;
	WebId?: any;
}

/*********************************************
* ChangeWeb
**********************************************/
export interface ChangeWeb extends SP.Change {
	WebId?: any;
}

/*********************************************
* CheckedOutFile
**********************************************/
export interface CheckedOutFile {
	CheckedOutById?: number;
	ServerRelativePath?: SP.ResourcePath;
}

/*********************************************
* CheckedOutFileCollections<T = any>
**********************************************/
export interface CheckedOutFileCollections<T = any> {
	CheckedOutBy(): T;
}

/*********************************************
* CheckedOutFileQuery
**********************************************/
export interface CheckedOutFileQuery {
	CheckedOutBy(): T;
}

/*********************************************
* CheckedOutFileMethods<T = any>
**********************************************/
export interface CheckedOutFileMethods<T = any> {
	takeOverCheckOut(): T;
}

/*********************************************
* CompatibilityRange
**********************************************/
export interface CompatibilityRange {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ConnectorResult
**********************************************/
export interface ConnectorResult {
	ContextData?: string;
	Value?: string;
}

/*********************************************
* APIHubConnector
**********************************************/
export interface APIHubConnector {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RequestContext
**********************************************/
export interface RequestContext {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RequestContextCollections<T = any>
**********************************************/
export interface RequestContextCollections<T = any> {
	Current(): T;
	List(): T;
	Site(): T;
	Web(): T;
}

/*********************************************
* RequestContextQuery
**********************************************/
export interface RequestContextQuery {
	Current(): T;
	List(): T;
	Site(): T;
	Web(): T;
}

/*********************************************
* RequestContextMethods<T = any>
**********************************************/
export interface RequestContextMethods<T = any> {
	getRemoteContext(): T;
}

/*********************************************
* CurrencyList
**********************************************/
export interface CurrencyList {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* FieldCalculated
**********************************************/
export interface FieldCalculated extends SP.Field {
	CurrencyLocaleId?: number;
	DateFormat?: number;
	DisplayFormat?: number;
	Formula?: string;
	OutputType?: number;
	ShowAsPercentage?: boolean;
}

/*********************************************
* FieldCalculatedMethods<T = any>
**********************************************/
export interface FieldCalculatedMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldMultiChoice
**********************************************/
export interface FieldMultiChoice extends SP.Field {
	FillInChoice?: boolean;
	Mappings?: string;
	Choices?: Array<string>;
}

/*********************************************
* FieldMultiChoiceMethods<T = any>
**********************************************/
export interface FieldMultiChoiceMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldChoice
**********************************************/
export interface FieldChoice extends SP.FieldMultiChoice {
	EditFormat?: number;
}

/*********************************************
* FieldChoiceMethods<T = any>
**********************************************/
export interface FieldChoiceMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldComputed
**********************************************/
export interface FieldComputed extends SP.Field {
	EnableLookup?: boolean;
}

/*********************************************
* FieldComputedMethods<T = any>
**********************************************/
export interface FieldComputedMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldNumber
**********************************************/
export interface FieldNumber extends SP.Field {
	DisplayFormat?: number;
	MaximumValue?: number;
	MinimumValue?: number;
	ShowAsPercentage?: boolean;
}

/*********************************************
* FieldNumberMethods<T = any>
**********************************************/
export interface FieldNumberMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldCurrency
**********************************************/
export interface FieldCurrency extends SP.FieldNumber {
	CurrencyLocaleId?: number;
}

/*********************************************
* FieldCurrencyMethods<T = any>
**********************************************/
export interface FieldCurrencyMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldDateTime
**********************************************/
export interface FieldDateTime extends SP.Field {
	DateTimeCalendarType?: number;
	DisplayFormat?: number;
	FriendlyDisplayFormat?: number;
}

/*********************************************
* FieldDateTimeMethods<T = any>
**********************************************/
export interface FieldDateTimeMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldGeolocation
**********************************************/
export interface FieldGeolocation extends SP.Field {

}

/*********************************************
* FieldGeolocationMethods<T = any>
**********************************************/
export interface FieldGeolocationMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldGuid
**********************************************/
export interface FieldGuid extends SP.Field {

}

/*********************************************
* FieldGuidMethods<T = any>
**********************************************/
export interface FieldGuidMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldMultiLineText
**********************************************/
export interface FieldMultiLineText extends SP.Field {
	AllowHyperlink?: boolean;
	AppendOnly?: boolean;
	NumberOfLines?: number;
	RestrictedMode?: boolean;
	RichText?: boolean;
	UnlimitedLengthInDocumentLibrary?: boolean;
	WikiLinking?: boolean;
}

/*********************************************
* FieldMultiLineTextMethods<T = any>
**********************************************/
export interface FieldMultiLineTextMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldLocation
**********************************************/
export interface FieldLocation extends SP.FieldMultiLineText {

}

/*********************************************
* FieldLocationMethods<T = any>
**********************************************/
export interface FieldLocationMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldLookup
**********************************************/
export interface FieldLookup extends SP.Field {
	AllowMultipleValues?: boolean;
	DependentLookupInternalNames?: Array<string>;
	IsDependentLookup?: boolean;
	IsRelationship?: boolean;
	LookupField?: string;
	LookupList?: string;
	LookupWebId?: any;
	PrimaryFieldId?: string;
	RelationshipDeleteBehavior?: number;
	UnlimitedLengthInDocumentLibrary?: boolean;
}

/*********************************************
* FieldLookupMethods<T = any>
**********************************************/
export interface FieldLookupMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldRatingScale
**********************************************/
export interface FieldRatingScale extends SP.FieldMultiChoice {
	GridEndNumber?: number;
	GridNAOptionText?: string;
	GridStartNumber?: number;
	GridTextRangeAverage?: string;
	GridTextRangeHigh?: string;
	GridTextRangeLow?: string;
	RangeCount?: number;
}

/*********************************************
* FieldRatingScaleMethods<T = any>
**********************************************/
export interface FieldRatingScaleMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldText
**********************************************/
export interface FieldText extends SP.Field {
	MaxLength?: number;
}

/*********************************************
* FieldTextMethods<T = any>
**********************************************/
export interface FieldTextMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldUrl
**********************************************/
export interface FieldUrl extends SP.Field {
	DisplayFormat?: number;
}

/*********************************************
* FieldUrlMethods<T = any>
**********************************************/
export interface FieldUrlMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FieldUser
**********************************************/
export interface FieldUser extends SP.FieldLookup {
	AllowDisplay?: boolean;
	Presence?: boolean;
	SelectionGroup?: number;
	SelectionMode?: number;
}

/*********************************************
* FieldUserMethods<T = any>
**********************************************/
export interface FieldUserMethods<T = any> {
	deleteObject(): T;
	setShowInDisplayForm(value?: boolean): T;
	setShowInEditForm(value?: boolean): T;
	setShowInNewForm(value?: boolean): T;
	update(): T;
}

/*********************************************
* FlowSynchronizationResult
**********************************************/
export interface FlowSynchronizationResult {
	SynchronizationData?: string;
	SynchronizationStatus?: number;
}

/*********************************************
* HashtagStoreManager
**********************************************/
export interface HashtagStoreManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HubSite
**********************************************/
export interface HubSite {
	Description?: string;
	ID?: any;
	LogoUrl?: string;
	RequiresJoinApproval?: boolean;
	SiteDesignId?: any;
	SiteId?: any;
	SiteUrl?: string;
	Targets?: string;
	TenantInstanceId?: any;
	Title?: string;
}

/*********************************************
* HubSiteMethods<T = any>
**********************************************/
export interface HubSiteMethods<T = any> {
	delete(): T;
}

/*********************************************
* ListBloomFilter
**********************************************/
export interface ListBloomFilter {
	BloomFilterSize?: number;
	FalsePositiveRate?: number;
	HashedValueSet?: Array<string>;
	IndexMap?: Array<number>;
	ItemProcessedCount?: number;
	K?: number;
	LastListItemIdProcessed?: number;
	MaxItemCount?: number;
}

/*********************************************
* SPMigrationJobStatus
**********************************************/
export interface SPMigrationJobStatus {
	JobId?: any;
	JobState?: number;
}

/*********************************************
* MountedFolderInfo
**********************************************/
export interface MountedFolderInfo {
	FolderUrl?: string;
	HasEditPermission?: boolean;
	ItemId?: number;
	ListTemplateType?: number;
	ListViewUrl?: string;
	WebUrl?: string;
}

/*********************************************
* MountPoint
**********************************************/
export interface MountPoint {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MountPointInfo
**********************************************/
export interface MountPointInfo {
	Name?: string;
	RedirectUrl?: string;
}

/*********************************************
* MoveCopyUtil
**********************************************/
export interface MoveCopyUtil {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RelatedField
**********************************************/
export interface RelatedField {
	FieldId?: any;
	ListId?: any;
	RelationshipDeleteBehavior?: number;
	WebId?: any;
}

/*********************************************
* RelatedFieldCollections<T = any>
**********************************************/
export interface RelatedFieldCollections<T = any> {
	LookupList(): T;
}

/*********************************************
* RelatedFieldQuery
**********************************************/
export interface RelatedFieldQuery {
	LookupList(): T;
}

/*********************************************
* RemoteWeb
**********************************************/
export interface RemoteWeb {
	CanSendEmail?: boolean;
	ShareByEmailEnabled?: boolean;
	ShareByLinkEnabled?: boolean;
}

/*********************************************
* RemoteWebCollections<T = any>
**********************************************/
export interface RemoteWebCollections<T = any> {
	Web(): T;
}

/*********************************************
* RemoteWebQuery
**********************************************/
export interface RemoteWebQuery {
	Web(): T;
}

/*********************************************
* RemoteWebMethods<T = any>
**********************************************/
export interface RemoteWebMethods<T = any> {
	getFileByServerRelativePath(serverRelatvieFilePath?: SP.ResourcePath): T;
	getFileByServerRelativeUrl(serverRelativeFileUrl?: string): T;
	getFileByUrl(fileUrl?: string): T;
	getFolderByServerRelativeUrl(serverRelativeUrl?: string): T;
	getGroupById(groupId?: number): T;
	getListById(listGuid?: any): T;
	getListByServerRelativeUrl(serverRelativeUrl?: string): T;
}

/*********************************************
* RequestUserContext
**********************************************/
export interface RequestUserContext {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RequestUserContextCollections<T = any>
**********************************************/
export interface RequestUserContextCollections<T = any> {
	Current(): T;
	User(): T;
}

/*********************************************
* RequestUserContextQuery
**********************************************/
export interface RequestUserContextQuery {
	Current(): T;
	User(): T;
}

/*********************************************
* SharingUtility
**********************************************/
export interface SharingUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* OpenWebParameters
**********************************************/
export interface OpenWebParameters {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteUrl
**********************************************/
export interface SiteUrl {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TeamChannelManager
**********************************************/
export interface TeamChannelManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantAppInstance
**********************************************/
export interface TenantAppInstance {
	Id?: any;
	SiteId?: any;
	WebId?: any;
}

/*********************************************
* VisualizationAppSynchronizationResult
**********************************************/
export interface VisualizationAppSynchronizationResult {
	SynchronizationData?: string;
	SynchronizationStatus?: number;
}

/*********************************************
* VisualizationAppSynchronizationResultCollections<T = any>
**********************************************/
export interface VisualizationAppSynchronizationResultCollections<T = any> {
	AppMappedViews(): T;
}

/*********************************************
* VisualizationAppSynchronizationResultQuery
**********************************************/
export interface VisualizationAppSynchronizationResultQuery {
	AppMappedViews(): T;
}

/*********************************************
* WebProxy
**********************************************/
export interface WebProxy {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WebTemplate
**********************************************/
export interface WebTemplate {
	Description?: string;
	DisplayCategory?: string;
	Id?: number;
	ImageUrl?: string;
	IsHidden?: boolean;
	IsRootWebOnly?: boolean;
	IsSubWebOnly?: boolean;
	Lcid?: number;
	Name?: string;
	Title?: string;
}

/*********************************************
* TeamChannel
**********************************************/
export interface TeamChannel {
	folderId?: any;
	groupId?: number;
}

/*********************************************
* TenantAppUtility
**********************************************/
export interface TenantAppUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantSettings
**********************************************/
export interface TenantSettings {
	CorporateCatalogUrl?: string;
}

/*********************************************
* TenantSettingsCollections<T = any>
**********************************************/
export interface TenantSettingsCollections<T = any> {
	Current(): T;
}

/*********************************************
* TenantSettingsQuery
**********************************************/
export interface TenantSettingsQuery {
	Current(): T;
}

/*********************************************
* AppPrincipalIdentityProvider
**********************************************/
export interface AppPrincipalIdentityProvider {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppPrincipalIdentityProviderCollections<T = any>
**********************************************/
export interface AppPrincipalIdentityProviderCollections<T = any> {
	External(): T;
}

/*********************************************
* AppPrincipalIdentityProviderQuery
**********************************************/
export interface AppPrincipalIdentityProviderQuery {
	External(): T;
}

/*********************************************
* AppPrincipalManager
**********************************************/
export interface AppPrincipalManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppPrincipalCredential
**********************************************/
export interface AppPrincipalCredential {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppPrincipalName
**********************************************/
export interface AppPrincipalName {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
