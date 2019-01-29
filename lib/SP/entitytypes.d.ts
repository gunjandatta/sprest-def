import { SP } from "../";
import { Microsoft } from "../";

/*********************************************
* ApiMetadata
**********************************************/
export interface ApiMetadata {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ApiMetadataCollections
**********************************************/
export interface ApiMetadataCollections {
	Current<T=SP.ApiMetadata>(): T;
	Types<T=Array<SP.TypeInformation>>(): T;
}

/*********************************************
* ApiMetadataQuery
**********************************************/
export interface ApiMetadataQuery {
	Current<T=SP.ApiMetadata>(): T;
	Types<T=Array<SP.TypeInformation>>(): T;
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
* SiteCollections
**********************************************/
export interface SiteCollections {
	Audit<T=SP.Audit>(): T;
	CustomScriptSafeDomains<T=Array<SP.ScriptSafeDomain>>(): T;
	EventReceivers<T=Array<SP.EventReceiverDefinition>>(): T;
	Features<T=Array<SP.Feature>>(): T;
	Owner<T=SP.User>(): T;
	RecycleBin<T=Array<SP.RecycleBinItem>>(): T;
	RootWeb<T=SP.Web>(): T;
	SecondaryContact<T=SP.User>(): T;
	UserCustomActions<T=Array<SP.UserCustomAction>>(): T;
}

/*********************************************
* SiteQuery
**********************************************/
export interface SiteQuery {
	Audit<T=SP.Audit>(): T;
	CustomScriptSafeDomains<T=Array<SP.ScriptSafeDomain>>(): T;
	EventReceivers<T=Array<SP.EventReceiverDefinition>>(): T;
	Features<T=Array<SP.Feature>>(): T;
	Owner<T=SP.User>(): T;
	RecycleBin<T=Array<SP.RecycleBinItem>>(): T;
	RootWeb<T=SP.Web>(): T;
	SecondaryContact<T=SP.User>(): T;
	UserCustomActions<T=Array<SP.UserCustomAction>>(): T;
}

/*********************************************
* SiteMethods
**********************************************/
export interface SiteMethods {
	createCopyJob<T=SP.CopyMigrationInfo>(exportObjectUris?: Array<string>, destinationUri?: string, options?: SP.CopyMigrationOptions): T;
	createCopyJobs<T=Array<SP.CopyMigrationInfo>>(exportObjectUris?: Array<string>, destinationUri?: string, options?: SP.CopyMigrationOptions): T;
	createMigrationIngestionJob<T=any>(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string, ingestionTaskKey?: SP.IngestionTaskKey): T;
	createMigrationJob<T=any>(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string): T;
	createMigrationJobEncrypted<T=any>(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string, options?: SP.EncryptionOption): T;
	createPreviewSPSite<T=void>(upgrade?: boolean, sendemail?: boolean): T;
	deleteMigrationJob<T=boolean>(id?: any): T;
	extendUpgradeReminderDate<T=void>(): T;
	getBringYourOwnKeySiteStatus<T=SP.CustomerKeyStatusInfo>(): T;
	getBringYourOwnKeyTenantStatus<T=SP.CustomerKeyStatusInfo>(): T;
	getCatalog<T=SP.List>(typeCatalog?: number): T;
	getChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): T;
	getCopyJobProgress<T=SP.CopyJobProgress>(copyJobInfo?: SP.CopyMigrationInfo): T;
	getHubSiteJoinApprovalCorrelationId<T=string>(): T;
	getMigrationJobStatus<T=number>(id?: any): T;
	getMigrationStatus<T=Array<SP.SPMigrationJobStatus>>(): T;
	getRecycleBinItems<T=Array<SP.RecycleBinItem>>(pagingInfo?: string, rowLimit?: number, isAscending?: boolean, orderBy?: number, itemState?: number): T;
	getWebPath<T=SP.ResourcePath>(siteId?: any, webId?: any): T;
	getWebTemplates<T=Array<SP.WebTemplate>>(LCID?: number, overrideCompatLevel?: number): T;
	invalidate<T=void>(): T;
	joinHubSite<T=void>(hubSiteId?: any, approvalToken?: string, approvalCorrelationId?: string): T;
	makeHubSite<T=SP.HubSite>(): T;
	multiGeoCopyJob<T=void>(jobId?: any, userId?: number, binaryPayload?: any): T;
	needsUpgradeByType<T=boolean>(versionUpgrade?: boolean, recursive?: boolean): T;
	onboardTenantForBringYourOwnKey<T=SP.CustomerKeyStatusInfo>(keyInfo?: SP.CustomerKeyInfo): T;
	onHubSiteJoinRequestApproved<T=string>(joiningSiteId?: any): T;
	onHubSiteJoinRequestCanceled<T=void>(approvalCorrelationId?: string): T;
	onHubSiteJoinRequestStarted<T=void>(approvalCorrelationId?: string): T;
	openWeb<T=SP.Web>(strUrl?: string): T;
	openWebById<T=SP.Web>(gWebId?: any): T;
	openWebUsingPath<T=SP.Web>(path?: SP.ResourcePath): T;
	provisionMigrationContainers<T=SP.ProvisionedMigrationContainersInfo>(): T;
	provisionMigrationQueue<T=SP.ProvisionedMigrationQueueInfo>(): T;
	recoverTenantForBringYourOwnKey<T=SP.CustomerKeyStatusInfo>(keyInfo?: SP.CustomerKeyInfo): T;
	registerHubSite<T=SP.HubSite>(creationInformation?: SP.HubSiteCreationInformation): T;
	removeHubSite<T=void>(): T;
	rollTenantBringYourOwnKey<T=SP.CustomerKeyStatusInfo>(keyType?: number, keyVaultInfo?: SP.CustomerKeyVaultInfo): T;
	runHealthCheck<T=SP.SiteHealth.SiteHealthSummary>(ruleId?: any, bRepair?: boolean, bRunAlways?: boolean): T;
	runUpgradeSiteSession<T=void>(versionUpgrade?: boolean, queueOnly?: boolean, sendEmail?: boolean): T;
	unregisterHubSite<T=void>(): T;
	updateClientObjectModelUseRemoteAPIsPermissionSetting<T=void>(requireUseRemoteAPIs?: boolean): T;
	validateHubSiteJoinApprovalToken<T=boolean>(joiningSiteId?: any, approvalToken?: string): T;
}

/*********************************************
* Audit
**********************************************/
export interface Audit {
	AuditFlags?: number;
}

/*********************************************
* AuditMethods
**********************************************/
export interface AuditMethods {
	update<T=void>(): T;
}

/*********************************************
* ScriptSafeDomain
**********************************************/
export interface ScriptSafeDomain {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ScriptSafeDomainMethods
**********************************************/
export interface ScriptSafeDomainMethods {
	deleteObject<T=void>(): T;
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
* EventReceiverDefinitionMethods
**********************************************/
export interface EventReceiverDefinitionMethods {
	deleteObject<T=void>(): T;
	update<T=void>(): T;
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
* UserCollections
**********************************************/
export interface UserCollections {
	Alerts<T=Array<SP.Alert>>(): T;
	Groups<T=Array<SP.Group>>(): T;
}

/*********************************************
* UserQuery
**********************************************/
export interface UserQuery {
	Alerts<T=Array<SP.Alert>>(): T;
	Groups<T=Array<SP.Group>>(): T;
}

/*********************************************
* UserMethods
**********************************************/
export interface UserMethods {
	update<T=void>(): T;
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
* AlertCollections
**********************************************/
export interface AlertCollections {
	AllProperties<T=SP.PropertyValues>(): T;
	Item<T=SP.ListItem>(): T;
	List<T=SP.List>(): T;
	User<T=SP.User>(): T;
}

/*********************************************
* AlertQuery
**********************************************/
export interface AlertQuery {
	AllProperties<T=SP.PropertyValues>(): T;
	Item<T=SP.ListItem>(): T;
	List<T=SP.List>(): T;
	User<T=SP.User>(): T;
}

/*********************************************
* AlertMethods
**********************************************/
export interface AlertMethods {
	updateAlert<T=void>(): T;
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
* SecurableObjectCollections
**********************************************/
export interface SecurableObjectCollections {
	FirstUniqueAncestorSecurableObject<T=SP.SecurableObject>(): T;
	RoleAssignments<T=Array<SP.RoleAssignment>>(): T;
}

/*********************************************
* SecurableObjectQuery
**********************************************/
export interface SecurableObjectQuery {
	FirstUniqueAncestorSecurableObject<T=SP.SecurableObject>(): T;
	RoleAssignments<T=Array<SP.RoleAssignment>>(): T;
}

/*********************************************
* SecurableObjectMethods
**********************************************/
export interface SecurableObjectMethods {
	breakRoleInheritance<T=void>(copyRoleAssignments?: boolean, clearSubscopes?: boolean): T;
	resetRoleInheritance<T=void>(): T;
}

/*********************************************
* RoleAssignment
**********************************************/
export interface RoleAssignment {
	PrincipalId?: number;
}

/*********************************************
* RoleAssignmentCollections
**********************************************/
export interface RoleAssignmentCollections {
	Member<T=SP.Principal>(): T;
	RoleDefinitionBindings<T=Array<SP.RoleDefinition>>(): T;
}

/*********************************************
* RoleAssignmentQuery
**********************************************/
export interface RoleAssignmentQuery {
	Member<T=SP.Principal>(): T;
	RoleDefinitionBindings<T=Array<SP.RoleDefinition>>(): T;
}

/*********************************************
* RoleAssignmentMethods
**********************************************/
export interface RoleAssignmentMethods {
	deleteObject<T=void>(): T;
	update<T=void>(): T;
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
* RoleDefinitionMethods
**********************************************/
export interface RoleDefinitionMethods {
	deleteObject<T=void>(): T;
	update<T=void>(): T;
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
* ListItemCollections
**********************************************/
export interface ListItemCollections {
	AttachmentFiles<T=Array<SP.Attachment>>(): T;
	ContentType<T=SP.ContentType>(): T;
	GetDlpPolicyTip<T=SP.DlpPolicyTip>(): T;
	FieldValuesAsHtml<T=SP.FieldStringValues>(): T;
	FieldValuesAsText<T=SP.FieldStringValues>(): T;
	FieldValuesForEdit<T=SP.FieldStringValues>(): T;
	File<T=SP.File>(): T;
	Folder<T=SP.Folder>(): T;
	LikedByInformation<T=Microsoft.SharePoint.Likes.likedByInformation>(): T;
	ParentList<T=SP.List>(): T;
	Properties<T=SP.PropertyValues>(): T;
	Versions<T=Array<SP.ListItemVersion>>(): T;
}

/*********************************************
* ListItemQuery
**********************************************/
export interface ListItemQuery {
	AttachmentFiles<T=Array<SP.Attachment>>(): T;
	ContentType<T=SP.ContentType>(): T;
	GetDlpPolicyTip<T=SP.DlpPolicyTip>(): T;
	FieldValuesAsHtml<T=SP.FieldStringValues>(): T;
	FieldValuesAsText<T=SP.FieldStringValues>(): T;
	FieldValuesForEdit<T=SP.FieldStringValues>(): T;
	File<T=SP.File>(): T;
	Folder<T=SP.Folder>(): T;
	LikedByInformation<T=Microsoft.SharePoint.Likes.likedByInformation>(): T;
	ParentList<T=SP.List>(): T;
	Properties<T=SP.PropertyValues>(): T;
	Versions<T=Array<SP.ListItemVersion>>(): T;
}

/*********************************************
* ListItemMethods
**********************************************/
export interface ListItemMethods {
	breakRoleInheritance<T=void>(copyRoleAssignments?: boolean, clearSubscopes?: boolean): T;
	resetRoleInheritance<T=void>(): T;
	deleteObject<T=void>(): T;
	getChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): T;
	getHashtags<T=Array<SP.Hashtag>>(): T;
	getUserEffectivePermissions<T=SP.BasePermissions>(userName?: string): T;
	getWOPIFrameUrl<T=string>(action?: number): T;
	mediaServiceUpdate<T=void>(parameters?: SP.MediaServiceUpdateParameters): T;
	mediaServiceUpdateV2<T=void>(parameters?: SP.MediaServiceUpdateParameters, eventFiringEnabled?: boolean): T;
	overridePolicyTip<T=number>(userAction?: number, justification?: string): T;
	parseAndSetFieldValue<T=void>(fieldName?: string, value?: string): T;
	recycle<T=any>(): T;
	setCommentsDisabled<T=void>(value?: boolean): T;
	setComplianceTag<T=void>(complianceTag?: string, isTagPolicyHold?: boolean, isTagPolicyRecord?: boolean, isEventBasedTag?: boolean, isTagSuperLock?: boolean): T;
	setComplianceTagWithExplicitMetasUpdate<T=void>(complianceTag?: string, complianceFlags?: number, complianceTagWrittenTime?: any, userEmailAddress?: string): T;
	setComplianceTagWithHold<T=void>(complianceTag?: string): T;
	setComplianceTagWithMetaInfo<T=void>(complianceTag?: string, blockDelete?: boolean, blockEdit?: boolean, complianceTagWrittenTime?: any, userEmailAddress?: string, isTagSuperLock?: boolean): T;
	setComplianceTagWithNoHold<T=void>(complianceTag?: string): T;
	setComplianceTagWithRecord<T=void>(complianceTag?: string): T;
	systemUpdate<T=void>(): T;
	update<T=void>(): T;
	updateEx<T=void>(parameters?: SP.ListItemUpdateParameters): T;
	updateHashtags<T=Array<SP.Hashtag>>(hashtagsToAdd?: Array<SP.Hashtag>, hashtagsToRemove?: Array<SP.Hashtag>): T;
	updateOverwriteVersion<T=void>(): T;
	validateUpdateListItem<T=Array<SP.ListItemFormUpdateValue>>(formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): T;
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
* AttachmentMethods
**********************************************/
export interface AttachmentMethods {
	deleteObject<T=void>(): T;
	recycleObject<T=void>(): T;
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
* ContentTypeCollections
**********************************************/
export interface ContentTypeCollections {
	DescriptionResource<T=SP.UserResource>(): T;
	FieldLinks<T=Array<SP.FieldLink>>(): T;
	Fields<T=Array<SP.Field>>(): T;
	NameResource<T=SP.UserResource>(): T;
	Parent<T=SP.ContentType>(): T;
	WorkflowAssociations<T=Array<SP.Workflow.WorkflowAssociation>>(): T;
}

/*********************************************
* ContentTypeQuery
**********************************************/
export interface ContentTypeQuery {
	DescriptionResource<T=SP.UserResource>(): T;
	FieldLinks<T=Array<SP.FieldLink>>(): T;
	Fields<T=Array<SP.Field>>(): T;
	NameResource<T=SP.UserResource>(): T;
	Parent<T=SP.ContentType>(): T;
	WorkflowAssociations<T=Array<SP.Workflow.WorkflowAssociation>>(): T;
}

/*********************************************
* ContentTypeMethods
**********************************************/
export interface ContentTypeMethods {
	deleteObject<T=void>(): T;
	update<T=void>(updateChildren?: boolean): T;
}

/*********************************************
* UserResource
**********************************************/
export interface UserResource {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserResourceMethods
**********************************************/
export interface UserResourceMethods {
	getValueForUICulture<T=string>(cultureName?: string): T;
	setValueForUICulture<T=void>(cultureName?: string, value?: string): T;
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
* FieldLinkMethods
**********************************************/
export interface FieldLinkMethods {
	deleteObject<T=void>(): T;
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
* FieldCollections
**********************************************/
export interface FieldCollections {
	DescriptionResource<T=SP.UserResource>(): T;
	TitleResource<T=SP.UserResource>(): T;
}

/*********************************************
* FieldQuery
**********************************************/
export interface FieldQuery {
	DescriptionResource<T=SP.UserResource>(): T;
	TitleResource<T=SP.UserResource>(): T;
}

/*********************************************
* FieldMethods
**********************************************/
export interface FieldMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
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
* FileCollections
**********************************************/
export interface FileCollections {
	Author<T=SP.User>(): T;
	CheckedOutByUser<T=SP.User>(): T;
	EffectiveInformationRightsManagementSettings<T=SP.EffectiveInformationRightsManagementSettings>(): T;
	InformationRightsManagementSettings<T=SP.InformationRightsManagementFileSettings>(): T;
	ListItemAllFields<T=SP.ListItem>(): T;
	LockedByUser<T=SP.User>(): T;
	ModifiedBy<T=SP.User>(): T;
	Properties<T=SP.PropertyValues>(): T;
	VersionEvents<T=Array<SP.FileVersionEvent>>(): T;
	Versions<T=Array<SP.FileVersion>>(): T;
}

/*********************************************
* FileQuery
**********************************************/
export interface FileQuery {
	Author<T=SP.User>(): T;
	CheckedOutByUser<T=SP.User>(): T;
	EffectiveInformationRightsManagementSettings<T=SP.EffectiveInformationRightsManagementSettings>(): T;
	InformationRightsManagementSettings<T=SP.InformationRightsManagementFileSettings>(): T;
	ListItemAllFields<T=SP.ListItem>(): T;
	LockedByUser<T=SP.User>(): T;
	ModifiedBy<T=SP.User>(): T;
	Properties<T=SP.PropertyValues>(): T;
	VersionEvents<T=Array<SP.FileVersionEvent>>(): T;
	Versions<T=Array<SP.FileVersion>>(): T;
}

/*********************************************
* FileMethods
**********************************************/
export interface FileMethods {
	addActivities<T=Array<Microsoft.SharePoint.Activities.ActivityClientResponse>>(activities?: Array<Microsoft.SharePoint.Activities.ActivityClientRequest>): T;
	addClientActivities<T=Array<Microsoft.SharePoint.Activities.ActivityClientResponse>>(activitiesStream?: any): T;
	approve<T=void>(comment?: string): T;
	cancelUpload<T=void>(uploadId?: any): T;
	checkAccessAndPostViewAuditEvent<T=boolean>(): T;
	checkIn<T=void>(comment?: string, checkInType?: number): T;
	checkOut<T=void>(): T;
	continueUpload<T=number>(uploadId?: any, fileOffset?: number, stream?: any): T;
	copyTo<T=void>(strNewUrl?: string, bOverWrite?: boolean): T;
	copyToUsingPath<T=void>(DecodedUrl?: string, bOverWrite?: boolean): T;
	deleteObject<T=void>(): T;
	deny<T=void>(comment?: string): T;
	executeCobaltRequest<T=any>(inputStream?: any): T;
	finishUpload<T=SP.File>(uploadId?: any, fileOffset?: number, stream?: any): T;
	getFileUserValue<T=Microsoft.SharePoint.UserActions.officeFileUserValueResponse>(key?: string): T;
	getImagePreviewUri<T=string>(width?: number, height?: number, clientType?: string): T;
	getImagePreviewUrl<T=string>(width?: number, height?: number, clientType?: string): T;
	getLimitedWebPartManager<T=SP.WebParts.LimitedWebPartManager>(scope?: number): T;
	getPreAuthorizedAccessUrl<T=string>(expirationHours?: number): T;
	getUploadStatus<T=SP.Utilities.UploadStatus>(uploadId?: any): T;
	getWOPIFrameUrl<T=string>(action?: number): T;
	moveTo<T=void>(newUrl?: string, flags?: number): T;
	moveToUsingPath<T=void>(DecodedUrl?: string, moveOperations?: number): T;
	openBinaryStream<T=any>(): T;
	openBinaryStreamWithOptions<T=any>(openOptions?: number): T;
	publish<T=void>(comment?: string): T;
	recycle<T=any>(): T;
	recycleWithETag<T=any>(etagMatch?: string): T;
	saveBinaryStream<T=void>(file?: any): T;
	setFileUserValue<T=Microsoft.SharePoint.UserActions.officeFileUserValueResponse>(key?: string, value?: string): T;
	startUpload<T=number>(uploadId?: any, stream?: any): T;
	undoCheckOut<T=void>(): T;
	unPublish<T=void>(comment?: string): T;
	update<T=void>(): T;
	updateVirusInfo<T=void>(virusStatus?: any, virusMessage?: string, etagToCheck?: string): T;
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
* InformationRightsManagementFileSettingsMethods
**********************************************/
export interface InformationRightsManagementFileSettingsMethods {
	reset<T=void>(): T;
	update<T=void>(): T;
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
* FileVersionCollections
**********************************************/
export interface FileVersionCollections {
	CreatedBy<T=SP.User>(): T;
}

/*********************************************
* FileVersionQuery
**********************************************/
export interface FileVersionQuery {
	CreatedBy<T=SP.User>(): T;
}

/*********************************************
* FileVersionMethods
**********************************************/
export interface FileVersionMethods {
	deleteObject<T=void>(): T;
	openBinaryStream<T=any>(): T;
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
* FolderCollections
**********************************************/
export interface FolderCollections {
	Files<T=Array<SP.File>>(): T;
	ListItemAllFields<T=SP.ListItem>(): T;
	ParentFolder<T=SP.Folder>(): T;
	Properties<T=SP.PropertyValues>(): T;
	StorageMetrics<T=SP.StorageMetrics>(): T;
	Folders<T=Array<SP.Folder>>(): T;
}

/*********************************************
* FolderQuery
**********************************************/
export interface FolderQuery {
	Files<T=Array<SP.File>>(): T;
	ListItemAllFields<T=SP.ListItem>(): T;
	ParentFolder<T=SP.Folder>(): T;
	Properties<T=SP.PropertyValues>(): T;
	StorageMetrics<T=SP.StorageMetrics>(): T;
	Folders<T=Array<SP.Folder>>(): T;
}

/*********************************************
* FolderMethods
**********************************************/
export interface FolderMethods {
	addSubFolder<T=void>(leafName?: string): T;
	addSubFolderUsingPath<T=void>(DecodedUrl?: string): T;
	deleteObject<T=void>(): T;
	getChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): T;
	getListItemChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): T;
	moveTo<T=void>(newUrl?: string): T;
	moveToUsingPath<T=void>(DecodedUrl?: string): T;
	recycle<T=any>(): T;
	update<T=void>(): T;
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
* ListCollections
**********************************************/
export interface ListCollections {
	ContentTypes<T=Array<SP.ContentType>>(): T;
	CreatablesInfo<T=SP.CreatablesInfo>(): T;
	DefaultView<T=SP.View>(): T;
	DescriptionResource<T=SP.UserResource>(): T;
	EventReceivers<T=Array<SP.EventReceiverDefinition>>(): T;
	Fields<T=Array<SP.Field>>(): T;
	Forms<T=Array<SP.Form>>(): T;
	InformationRightsManagementSettings<T=SP.InformationRightsManagementSettings>(): T;
	Items<T=Array<SP.ListItem>>(): T;
	ParentWeb<T=SP.Web>(): T;
	RootFolder<T=SP.Folder>(): T;
	Subscriptions<T=Array<Microsoft.SharePoint.Webhooks.Subscription>>(): T;
	TitleResource<T=SP.UserResource>(): T;
	UserCustomActions<T=Array<SP.UserCustomAction>>(): T;
	Views<T=Array<SP.View>>(): T;
	WorkflowAssociations<T=Array<SP.Workflow.WorkflowAssociation>>(): T;
}

/*********************************************
* ListQuery
**********************************************/
export interface ListQuery {
	ContentTypes<T=Array<SP.ContentType>>(): T;
	CreatablesInfo<T=SP.CreatablesInfo>(): T;
	DefaultView<T=SP.View>(): T;
	DescriptionResource<T=SP.UserResource>(): T;
	EventReceivers<T=Array<SP.EventReceiverDefinition>>(): T;
	Fields<T=Array<SP.Field>>(): T;
	Forms<T=Array<SP.Form>>(): T;
	InformationRightsManagementSettings<T=SP.InformationRightsManagementSettings>(): T;
	Items<T=Array<SP.ListItem>>(): T;
	ParentWeb<T=SP.Web>(): T;
	RootFolder<T=SP.Folder>(): T;
	Subscriptions<T=Array<Microsoft.SharePoint.Webhooks.Subscription>>(): T;
	TitleResource<T=SP.UserResource>(): T;
	UserCustomActions<T=Array<SP.UserCustomAction>>(): T;
	Views<T=Array<SP.View>>(): T;
	WorkflowAssociations<T=Array<SP.Workflow.WorkflowAssociation>>(): T;
}

/*********************************************
* ListMethods
**********************************************/
export interface ListMethods {
	breakRoleInheritance<T=void>(copyRoleAssignments?: boolean, clearSubscopes?: boolean): T;
	resetRoleInheritance<T=void>(): T;
	addItem<T=SP.ListItem>(parameters?: SP.ListItemCreationInformation): T;
	addItemUsingPath<T=SP.ListItem>(parameters?: SP.ListItemCreationInformationUsingPath): T;
	addValidateUpdateItem<T=Array<SP.ListItemFormUpdateValue>>(listItemCreateInfo?: SP.ListItemCreationInformation, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): T;
	addValidateUpdateItemUsingPath<T=Array<SP.ListItemFormUpdateValue>>(listItemCreateInfo?: SP.ListItemCreationInformationUsingPath, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): T;
	bulkValidateUpdateListItems<T=Array<SP.ListItemFormUpdateValue>>(itemIds?: Array<number>, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string, folderPath?: string): T;
	createDocumentAndGetEditLink<T=string>(fileName?: string, folderPath?: string, documentTemplateType?: number, templateUrl?: string): T;
	createDocumentWithDefaultName<T=string>(folderPath?: string, extension?: string): T;
	createMappedView<T=SP.View>(appViewCreationInfo?: SP.AppViewCreationInfo, visualizationTarget?: number): T;
	deleteObject<T=void>(): T;
	ensureSignoffStatusField<T=SP.Field>(): T;
	getBloomFilter<T=SP.ListBloomFilter>(startItemId?: number): T;
	getBloomFilterWithCustomFields<T=SP.ListBloomFilter>(listItemStartingID?: number, internalFieldNames?: Array<string>): T;
	getChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): T;
	getCheckedOutFiles<T=Array<SP.CheckedOutFile>>(): T;
	getItemById<T=SP.ListItem>(id?: number): T;
	getItemByStringId<T=SP.ListItem>(sId?: string): T;
	getItemByUniqueId<T=SP.ListItem>(uniqueId?: any): T;
	getItems<T=Array<SP.ListItem>>(query?: SP.CamlQuery): T;
	getListItemChangesSinceToken<T=any>(query?: SP.ChangeLogItemQuery): T;
	getMappedApp<T=SP.VisualizationAppSynchronizationResult>(appId?: any, visualizationAppTarget?: number): T;
	getMappedApps<T=SP.VisualizationAppSynchronizationResult>(visualizationAppTarget?: number): T;
	getRelatedFields<T=Array<SP.RelatedField>>(): T;
	getSpecialFolderUrl<T=string>(type?: number, bForceCreate?: boolean, existingFolderGuid?: any): T;
	getUserEffectivePermissions<T=SP.BasePermissions>(userName?: string): T;
	getView<T=SP.View>(viewGuid?: any): T;
	getWebDavUrl<T=string>(sourceUrl?: string): T;
	publishMappedView<T=SP.View>(appId?: any, visualizationTarget?: number): T;
	recycle<T=any>(): T;
	renderExtendedListFormData<T=string>(itemId?: number, formId?: string, mode?: number, options?: number, cutoffVersion?: number): T;
	renderListContextMenuData<T=any>(CascDelWarnMessage?: string, CustomAction?: string, Field?: string, ID?: string, InplaceFullListSearch?: string, InplaceSearchQuery?: string, IsCSR?: string, IsXslView?: string, ItemId?: string, ListViewPageUrl?: string, OverrideScope?: string, RootFolder?: string, View?: string, ViewCount?: string): T;
	renderListData<T=string>(viewXml?: string): T;
	renderListDataAsStream<T=any>(parameters?: SP.RenderListDataParameters, CascDelWarnMessage?: string, CustomAction?: string, DrillDown?: string, Field?: string, FieldInternalName?: string, Filter?: string, FilterData?: string, FilterData1?: string, FilterData10?: string, FilterData2?: string, FilterData3?: string, FilterData4?: string, FilterData5?: string, FilterData6?: string, FilterData7?: string, FilterData8?: string, FilterData9?: string, FilterField?: string, FilterField1?: string, FilterField10?: string, FilterField2?: string, FilterField3?: string, FilterField4?: string, FilterField5?: string, FilterField6?: string, FilterField7?: string, FilterField8?: string, FilterField9?: string, FilterFields?: string, FilterFields1?: string, FilterFields10?: string, FilterFields2?: string, FilterFields3?: string, FilterFields4?: string, FilterFields5?: string, FilterFields6?: string, FilterFields7?: string, FilterFields8?: string, FilterFields9?: string, FilterLookupId?: string, FilterLookupId1?: string, FilterLookupId10?: string, FilterLookupId2?: string, FilterLookupId3?: string, FilterLookupId4?: string, FilterLookupId5?: string, FilterLookupId6?: string, FilterLookupId7?: string, FilterLookupId8?: string, FilterLookupId9?: string, FilterOp?: string, FilterOp1?: string, FilterOp10?: string, FilterOp2?: string, FilterOp3?: string, FilterOp4?: string, FilterOp5?: string, FilterOp6?: string, FilterOp7?: string, FilterOp8?: string, FilterOp9?: string, FilterValue?: string, FilterValue1?: string, FilterValue10?: string, FilterValue2?: string, FilterValue3?: string, FilterValue4?: string, FilterValue5?: string, FilterValue6?: string, FilterValue7?: string, FilterValue8?: string, FilterValue9?: string, FilterValues?: string, FilterValues1?: string, FilterValues10?: string, FilterValues2?: string, FilterValues3?: string, FilterValues4?: string, FilterValues5?: string, FilterValues6?: string, FilterValues7?: string, FilterValues8?: string, FilterValues9?: string, GroupString?: string, HasOverrideSelectCommand?: string, ID?: string, InplaceFullListSearch?: string, InplaceSearchQuery?: string, IsCSR?: string, IsGroupRender?: string, IsXslView?: string, ListViewPageUrl?: string, OverrideScope?: string, OverrideSelectCommand?: string, PageFirstRow?: string, PageLastRow?: string, RootFolder?: string, SortDir?: string, SortDir1?: string, SortDir10?: string, SortDir2?: string, SortDir3?: string, SortDir4?: string, SortDir5?: string, SortDir6?: string, SortDir7?: string, SortDir8?: string, SortDir9?: string, SortField?: string, SortField1?: string, SortField10?: string, SortField2?: string, SortField3?: string, SortField4?: string, SortField5?: string, SortField6?: string, SortField7?: string, SortField8?: string, SortField9?: string, SortFields?: string, SortFieldValues?: string, View?: string, ViewCount?: string, ViewId?: string, ViewPath?: string, WebPartId?: string): T;
	renderListFilterData<T=any>(ExcludeFieldFilteringHtml?: boolean, FieldInternalName?: string, OverrideScope?: string, ProcessQStringToCAML?: string, ViewId?: string): T;
	renderListFormData<T=string>(itemId?: number, formId?: string, mode?: number): T;
	reserveListItemId<T=number>(): T;
	saveAsNewView<T=string>(oldName?: string, newName?: string, privateView?: boolean, uri?: string): T;
	saveAsTemplate<T=void>(strFileName?: string, strName?: string, strDescription?: string, bSaveData?: boolean): T;
	setExemptFromBlockDownloadOfNonViewableFiles<T=void>(value?: boolean): T;
	syncFlowCallbackUrl<T=SP.FlowSynchronizationResult>(flowId?: string): T;
	syncFlowInstance<T=SP.FlowSynchronizationResult>(flowID?: any): T;
	syncFlowInstances<T=SP.FlowSynchronizationResult>(): T;
	syncFlowTemplates<T=SP.FlowSynchronizationResult>(category?: string): T;
	unpublishMappedView<T=SP.View>(appId?: any, visualizationTarget?: number): T;
	update<T=void>(): T;
	validateAppName<T=SP.VisualizationAppSynchronizationResult>(appDisplayName?: string): T;
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
* ViewCollections
**********************************************/
export interface ViewCollections {
	ViewFields<T=SP.ViewFieldCollection>(): T;
}

/*********************************************
* ViewQuery
**********************************************/
export interface ViewQuery {
	ViewFields<T=SP.ViewFieldCollection>(): T;
}

/*********************************************
* ViewMethods
**********************************************/
export interface ViewMethods {
	addToSpotlight<T=SP.Utilities.SpotlightResult>(itemId?: number, folderPath?: string, afterItemId?: number): T;
	deleteObject<T=void>(): T;
	removeFromSpotlight<T=SP.Utilities.SpotlightResult>(itemId?: number, folderPath?: string): T;
	renderAsHtml<T=string>(): T;
	setViewXml<T=void>(viewXml?: string): T;
	update<T=void>(): T;
}

/*********************************************
* ViewFieldCollection
**********************************************/
export interface ViewFieldCollection {
	SchemaXml?: string;
	Items?: Array<string>;
}

/*********************************************
* ViewFieldCollectionMethods
**********************************************/
export interface ViewFieldCollectionMethods {
	addViewField<T=void>(strField?: string): T;
	moveViewFieldTo<T=void>(field?: string, index?: number): T;
	removeAllViewFields<T=void>(): T;
	removeViewField<T=void>(strField?: string): T;
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
* InformationRightsManagementSettingsMethods
**********************************************/
export interface InformationRightsManagementSettingsMethods {
	reset<T=void>(): T;
	update<T=void>(): T;
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
* WebCollections
**********************************************/
export interface WebCollections {
	Activities<T=Array<Microsoft.SharePoint.Activities.SPActivityEntity>>(): T;
	ActivityLogger<T=Microsoft.SharePoint.Internal.ActivityLogger>(): T;
	Alerts<T=Array<SP.Alert>>(): T;
	AllProperties<T=SP.PropertyValues>(): T;
	AppTiles<T=Array<SP.AppTile>>(): T;
	AssociatedMemberGroup<T=SP.Group>(): T;
	AssociatedOwnerGroup<T=SP.Group>(): T;
	AssociatedVisitorGroup<T=SP.Group>(): T;
	Author<T=SP.User>(): T;
	AvailableContentTypes<T=Array<SP.ContentType>>(): T;
	AvailableFields<T=Array<SP.Field>>(): T;
	ClientWebParts<T=Array<SP.ClientWebPart>>(): T;
	ContentTypes<T=Array<SP.ContentType>>(): T;
	CurrentUser<T=SP.User>(): T;
	DataLeakagePreventionStatusInfo<T=SP.SPDataLeakagePreventionStatusInfo>(): T;
	DescriptionResource<T=SP.UserResource>(): T;
	EventReceivers<T=Array<SP.EventReceiverDefinition>>(): T;
	Features<T=Array<SP.Feature>>(): T;
	Fields<T=Array<SP.Field>>(): T;
	Folders<T=Array<SP.Folder>>(): T;
	HostedApps<T=Microsoft.SharePoint.ClientSideComponent.HostedAppsManager>(): T;
	Lists<T=Array<SP.List>>(): T;
	ListTemplates<T=Array<SP.ListTemplate>>(): T;
	Navigation<T=SP.Navigation>(): T;
	OneDriveSharedItems<T=Array<SP.Sharing.SharedDocumentInfo>>(): T;
	ParentWeb<T=SP.WebInformation>(): T;
	PushNotificationSubscribers<T=Array<SP.PushNotificationSubscriber>>(): T;
	RecycleBin<T=Array<SP.RecycleBinItem>>(): T;
	RegionalSettings<T=SP.RegionalSettings>(): T;
	RoleDefinitions<T=Array<SP.RoleDefinition>>(): T;
	RootFolder<T=SP.Folder>(): T;
	SiteCollectionAppCatalog<T=Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor>(): T;
	SiteGroups<T=Array<SP.Group>>(): T;
	SiteUserInfoList<T=SP.List>(): T;
	SiteUsers<T=Array<SP.User>>(): T;
	TenantAppCatalog<T=Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor>(): T;
	ThemeInfo<T=SP.ThemeInfo>(): T;
	TitleResource<T=SP.UserResource>(): T;
	UserCustomActions<T=Array<SP.UserCustomAction>>(): T;
	Webs<T=Array<SP.Web>>(): T;
	WebInfos<T=Array<SP.WebInformation>>(): T;
	WorkflowAssociations<T=Array<SP.Workflow.WorkflowAssociation>>(): T;
	WorkflowTemplates<T=Array<SP.Workflow.WorkflowTemplate>>(): T;
}

/*********************************************
* WebQuery
**********************************************/
export interface WebQuery {
	Activities<T=Array<Microsoft.SharePoint.Activities.SPActivityEntity>>(): T;
	ActivityLogger<T=Microsoft.SharePoint.Internal.ActivityLogger>(): T;
	Alerts<T=Array<SP.Alert>>(): T;
	AllProperties<T=SP.PropertyValues>(): T;
	AppTiles<T=Array<SP.AppTile>>(): T;
	AssociatedMemberGroup<T=SP.Group>(): T;
	AssociatedOwnerGroup<T=SP.Group>(): T;
	AssociatedVisitorGroup<T=SP.Group>(): T;
	Author<T=SP.User>(): T;
	AvailableContentTypes<T=Array<SP.ContentType>>(): T;
	AvailableFields<T=Array<SP.Field>>(): T;
	ClientWebParts<T=Array<SP.ClientWebPart>>(): T;
	ContentTypes<T=Array<SP.ContentType>>(): T;
	CurrentUser<T=SP.User>(): T;
	DataLeakagePreventionStatusInfo<T=SP.SPDataLeakagePreventionStatusInfo>(): T;
	DescriptionResource<T=SP.UserResource>(): T;
	EventReceivers<T=Array<SP.EventReceiverDefinition>>(): T;
	Features<T=Array<SP.Feature>>(): T;
	Fields<T=Array<SP.Field>>(): T;
	Folders<T=Array<SP.Folder>>(): T;
	HostedApps<T=Microsoft.SharePoint.ClientSideComponent.HostedAppsManager>(): T;
	Lists<T=Array<SP.List>>(): T;
	ListTemplates<T=Array<SP.ListTemplate>>(): T;
	Navigation<T=SP.Navigation>(): T;
	OneDriveSharedItems<T=Array<SP.Sharing.SharedDocumentInfo>>(): T;
	ParentWeb<T=SP.WebInformation>(): T;
	PushNotificationSubscribers<T=Array<SP.PushNotificationSubscriber>>(): T;
	RecycleBin<T=Array<SP.RecycleBinItem>>(): T;
	RegionalSettings<T=SP.RegionalSettings>(): T;
	RoleDefinitions<T=Array<SP.RoleDefinition>>(): T;
	RootFolder<T=SP.Folder>(): T;
	SiteCollectionAppCatalog<T=Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor>(): T;
	SiteGroups<T=Array<SP.Group>>(): T;
	SiteUserInfoList<T=SP.List>(): T;
	SiteUsers<T=Array<SP.User>>(): T;
	TenantAppCatalog<T=Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor>(): T;
	ThemeInfo<T=SP.ThemeInfo>(): T;
	TitleResource<T=SP.UserResource>(): T;
	UserCustomActions<T=Array<SP.UserCustomAction>>(): T;
	Webs<T=Array<SP.Web>>(): T;
	WebInfos<T=Array<SP.WebInformation>>(): T;
	WorkflowAssociations<T=Array<SP.Workflow.WorkflowAssociation>>(): T;
	WorkflowTemplates<T=Array<SP.Workflow.WorkflowTemplate>>(): T;
}

/*********************************************
* WebMethods
**********************************************/
export interface WebMethods {
	breakRoleInheritance<T=void>(copyRoleAssignments?: boolean, clearSubscopes?: boolean): T;
	resetRoleInheritance<T=void>(): T;
	addCrossFarmMessage<T=boolean>(messagePayloadBase64?: string): T;
	addSupportedUILanguage<T=void>(lcid?: number): T;
	applyTheme<T=void>(colorPaletteUrl?: string, fontSchemeUrl?: string, backgroundImageUrl?: string, shareGenerated?: boolean): T;
	applyWebTemplate<T=void>(webTemplate?: string): T;
	createDefaultAssociatedGroups<T=void>(userLogin?: string, userLogin2?: string, groupNameSeed?: string): T;
	defaultDocumentLibrary<T=SP.List>(): T;
	deleteObject<T=void>(): T;
	doesPushNotificationSubscriberExist<T=boolean>(deviceAppInstanceId?: any): T;
	doesUserHavePermissions<T=boolean>(permissionMask?: SP.BasePermissions): T;
	ensureUser<T=SP.User>(logonName?: string): T;
	executeRemoteLOB<T=any>(inputStream?: any): T;
	getAppBdcCatalog<T=SP.BusinessData.AppBdcCatalog>(): T;
	getAppBdcCatalogForAppInstance<T=SP.BusinessData.AppBdcCatalog>(appInstanceId?: any): T;
	getAppInstanceById<T=SP.AppInstance>(appInstanceId?: any): T;
	getAppInstancesByProductId<T=Array<SP.AppInstance>>(productId?: any): T;
	getAvailableWebTemplates<T=Array<SP.WebTemplate>>(lcid?: number, doIncludeCrossLanguage?: boolean): T;
	getCatalog<T=SP.List>(typeCatalog?: number): T;
	getChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): T;
	getClientSideComponents<T=Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult>>(components?: Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentIdentifier>): T;
	getClientSideComponentsById<T=Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult>>(componentIds?: Array<any>): T;
	getClientSideWebParts<T=Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult>>(includeErrors?: boolean): T;
	getCustomListTemplates<T=Array<SP.ListTemplate>>(): T;
	getEntity<T=SP.BusinessData.Entity>(namespace?: string, name?: string): T;
	getFileByGuestUrl<T=SP.File>(guestUrl?: string): T;
	getFileByGuestUrlEnsureAccess<T=SP.File>(guestUrl?: string, ensureAccess?: boolean): T;
	getFileByGuestUrlExtended<T=SP.File>(guestUrl?: string, requestSettings?: SP.Sharing.SharingLinkAccessRequest): T;
	getFileById<T=SP.File>(uniqueId?: any): T;
	getFileByLinkingUrl<T=SP.File>(linkingUrl?: string): T;
	getFileByServerRelativePath<T=SP.File>(DecodedUrl?: string): T;
	getFileByServerRelativeUrl<T=SP.File>(serverRelativeUrl?: string): T;
	getFileByUrl<T=SP.File>(fileUrl?: string): T;
	getFileByWOPIFrameUrl<T=SP.File>(wopiFrameUrl?: string): T;
	getFolderByGuestUrl<T=SP.Folder>(guestUrl?: string, ensureAccess?: boolean): T;
	getFolderByGuestUrlExtended<T=SP.Folder>(guestUrl?: string, requestSettings?: SP.Sharing.SharingLinkAccessRequest): T;
	getFolderById<T=SP.Folder>(uniqueId?: any): T;
	getFolderByServerRelativePath<T=SP.Folder>(DecodedUrl?: string): T;
	getFolderByServerRelativeUrl<T=SP.Folder>(serverRelativeUrl?: string): T;
	getList<T=SP.List>(strUrl?: string): T;
	getListItem<T=SP.ListItem>(strUrl?: string): T;
	getListItemByResourceId<T=SP.ListItem>(resourceId?: string): T;
	getListItemUsingPath<T=SP.ListItem>(DecodedUrl?: string): T;
	getListUsingPath<T=SP.List>(DecodedUrl?: string): T;
	getNewsList<T=SP.List>(allowCreate?: boolean): T;
	getOnePageContextAsStream<T=any>(): T;
	getPushNotificationSubscriber<T=SP.PushNotificationSubscriber>(deviceAppInstanceId?: any): T;
	getPushNotificationSubscribersByArgs<T=Array<SP.PushNotificationSubscriber>>(customArgs?: string): T;
	getPushNotificationSubscribersByUser<T=Array<SP.PushNotificationSubscriber>>(userName?: string): T;
	getRecycleBinItems<T=Array<SP.RecycleBinItem>>(pagingInfo?: string, rowLimit?: number, isAscending?: boolean, orderBy?: number, itemState?: number): T;
	getRecycleBinItemsByQueryInfo<T=Array<SP.RecycleBinItem>>(IsAscending?: boolean, ItemState?: number, OrderBy?: number, PagingInfo?: string, RowLimit?: number, ShowOnlyMyItems?: boolean): T;
	getRegionalDateTimeSchema<T=string>(): T;
	getSharingLinkData<T=SP.SharingLinkData>(linkUrl?: string): T;
	getStorageEntity<T=Microsoft.SharePoint.ClientSideComponent.StorageEntity>(key?: string): T;
	getSubwebsFilteredForCurrentUser<T=Array<SP.WebInformation>>(nWebTemplateFilter?: number, nConfigurationFilter?: number): T;
	getUserById<T=SP.User>(userId?: number): T;
	getUserEffectivePermissions<T=SP.BasePermissions>(userName?: string): T;
	getViewFromPath<T=SP.View>(DecodedUrl?: string): T;
	getViewFromUrl<T=SP.View>(listUrl?: string): T;
	hubSiteData<T=string>(forceRefresh?: boolean): T;
	hubSiteDataAsStream<T=any>(forceRefresh?: boolean): T;
	incrementSiteClientTag<T=void>(): T;
	loadAndInstallApp<T=SP.AppInstance>(appPackageStream?: any): T;
	loadAndInstallAppInSpecifiedLocale<T=SP.AppInstance>(appPackageStream?: any, installationLocaleLCID?: number): T;
	loadApp<T=SP.AppInstance>(appPackageStream?: any, installationLocaleLCID?: number): T;
	mapToIcon<T=string>(fileName?: string, progId?: string, size?: number): T;
	pageContextInfo<T=any>(includeODBSettings?: boolean, emitNavigationInfo?: boolean): T;
	parseDateTime<T=string>(value?: string, displayFormat?: number, calendarType?: number): T;
	processExternalNotification<T=string>(stream?: any): T;
	registerPushNotificationSubscriber<T=SP.PushNotificationSubscriber>(deviceAppInstanceId?: any, serviceToken?: string): T;
	removeStorageEntity<T=void>(key?: string): T;
	removeSupportedUILanguage<T=void>(lcid?: number): T;
	setAccessRequestSiteDescriptionAndUpdate<T=void>(description?: string): T;
	setStorageEntity<T=void>(key?: string, value?: string, description?: string, comments?: string): T;
	setUseAccessRequestDefaultAndUpdate<T=void>(useAccessRequestDefault?: boolean): T;
	syncFlowInstances<T=SP.FlowSynchronizationResult>(targetWebUrl?: string): T;
	syncFlowTemplates<T=SP.FlowSynchronizationResult>(category?: string): T;
	syncHubSiteTheme<T=void>(): T;
	unregisterPushNotificationSubscriber<T=void>(deviceAppInstanceId?: any): T;
	update<T=void>(): T;
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
* GroupCollections
**********************************************/
export interface GroupCollections {
	Owner<T=SP.Principal>(): T;
	Users<T=Array<SP.User>>(): T;
}

/*********************************************
* GroupQuery
**********************************************/
export interface GroupQuery {
	Owner<T=SP.Principal>(): T;
	Users<T=Array<SP.User>>(): T;
}

/*********************************************
* GroupMethods
**********************************************/
export interface GroupMethods {
	setUserAsOwner<T=void>(ownerId?: number): T;
	update<T=void>(): T;
}

/*********************************************
* ClientWebPart
**********************************************/
export interface ClientWebPart {
	Id?: any;
	Name?: string;
}

/*********************************************
* ClientWebPartMethods
**********************************************/
export interface ClientWebPartMethods {
	render<T=string>(properties?: Array<SP.KeyValue>): T;
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
* ListTemplateMethods
**********************************************/
export interface ListTemplateMethods {
	getGlobalSchemaXml<T=any>(): T;
}

/*********************************************
* Navigation
**********************************************/
export interface Navigation {
	UseShared?: boolean;
}

/*********************************************
* NavigationCollections
**********************************************/
export interface NavigationCollections {
	QuickLaunch<T=Array<SP.NavigationNode>>(): T;
	TopNavigationBar<T=Array<SP.NavigationNode>>(): T;
}

/*********************************************
* NavigationQuery
**********************************************/
export interface NavigationQuery {
	QuickLaunch<T=Array<SP.NavigationNode>>(): T;
	TopNavigationBar<T=Array<SP.NavigationNode>>(): T;
}

/*********************************************
* NavigationMethods
**********************************************/
export interface NavigationMethods {
	getNodeById<T=SP.NavigationNode>(id?: number): T;
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
* NavigationNodeCollections
**********************************************/
export interface NavigationNodeCollections {
	Children<T=Array<SP.NavigationNode>>(): T;
}

/*********************************************
* NavigationNodeQuery
**********************************************/
export interface NavigationNodeQuery {
	Children<T=Array<SP.NavigationNode>>(): T;
}

/*********************************************
* NavigationNodeMethods
**********************************************/
export interface NavigationNodeMethods {
	deleteObject<T=void>(): T;
	update<T=void>(): T;
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
* PushNotificationSubscriberCollections
**********************************************/
export interface PushNotificationSubscriberCollections {
	User<T=SP.User>(): T;
}

/*********************************************
* PushNotificationSubscriberQuery
**********************************************/
export interface PushNotificationSubscriberQuery {
	User<T=SP.User>(): T;
}

/*********************************************
* PushNotificationSubscriberMethods
**********************************************/
export interface PushNotificationSubscriberMethods {
	update<T=void>(): T;
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
* RecycleBinItemCollections
**********************************************/
export interface RecycleBinItemCollections {
	Author<T=SP.User>(): T;
	DeletedBy<T=SP.User>(): T;
}

/*********************************************
* RecycleBinItemQuery
**********************************************/
export interface RecycleBinItemQuery {
	Author<T=SP.User>(): T;
	DeletedBy<T=SP.User>(): T;
}

/*********************************************
* RecycleBinItemMethods
**********************************************/
export interface RecycleBinItemMethods {
	deleteObject<T=void>(): T;
	moveToSecondStage<T=void>(): T;
	restore<T=void>(): T;
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
* RegionalSettingsCollections
**********************************************/
export interface RegionalSettingsCollections {
	InstalledLanguages<T=SP.LanguageCollection>(): T;
	TimeZone<T=SP.TimeZone>(): T;
	TimeZones<T=Array<SP.TimeZone>>(): T;
}

/*********************************************
* RegionalSettingsQuery
**********************************************/
export interface RegionalSettingsQuery {
	InstalledLanguages<T=SP.LanguageCollection>(): T;
	TimeZone<T=SP.TimeZone>(): T;
	TimeZones<T=Array<SP.TimeZone>>(): T;
}

/*********************************************
* RegionalSettingsMethods
**********************************************/
export interface RegionalSettingsMethods {
	update<T=void>(): T;
}

/*********************************************
* LanguageCollection
**********************************************/
export interface LanguageCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<SP.Language>;
}

/*********************************************
* LanguageCollectionMethods
**********************************************/
export interface LanguageCollectionMethods {
	getById<T=SP.Language>(id?: number): T;
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
* TimeZoneMethods
**********************************************/
export interface TimeZoneMethods {
	localTimeToUTC<T=any>(date?: any): T;
	uTCToLocalTime<T=any>(date?: any): T;
}

/*********************************************
* ThemeInfo
**********************************************/
export interface ThemeInfo {
	AccessibleDescription?: string;
	ThemeBackgroundImageUri?: string;
}

/*********************************************
* ThemeInfoMethods
**********************************************/
export interface ThemeInfoMethods {
	getThemeFontByName<T=string>(name?: string, lcid?: number): T;
	getThemeShadeByName<T=string>(name?: string): T;
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
* UserCustomActionCollections
**********************************************/
export interface UserCustomActionCollections {
	DescriptionResource<T=SP.UserResource>(): T;
	TitleResource<T=SP.UserResource>(): T;
}

/*********************************************
* UserCustomActionQuery
**********************************************/
export interface UserCustomActionQuery {
	DescriptionResource<T=SP.UserResource>(): T;
	TitleResource<T=SP.UserResource>(): T;
}

/*********************************************
* UserCustomActionMethods
**********************************************/
export interface UserCustomActionMethods {
	deleteObject<T=void>(): T;
	update<T=void>(): T;
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
* ListItemVersionCollections
**********************************************/
export interface ListItemVersionCollections {
	CreatedBy<T=SP.User>(): T;
	Fields<T=Array<SP.Field>>(): T;
	FileVersion<T=SP.FileVersion>(): T;
}

/*********************************************
* ListItemVersionQuery
**********************************************/
export interface ListItemVersionQuery {
	CreatedBy<T=SP.User>(): T;
	Fields<T=Array<SP.Field>>(): T;
	FileVersion<T=SP.FileVersion>(): T;
}

/*********************************************
* ListItemVersionMethods
**********************************************/
export interface ListItemVersionMethods {
	deleteObject<T=void>(): T;
}

/*********************************************
* SPAppLicenseManager
**********************************************/
export interface SPAppLicenseManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAppLicenseManagerMethods
**********************************************/
export interface SPAppLicenseManagerMethods {
	checkLicense<T=SP.AppLicenseCollection>(productId?: any): T;
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
* AppInstanceMethods
**********************************************/
export interface AppInstanceMethods {
	cancelAllJobs<T=boolean>(): T;
	getAppDatabaseConnectionString<T=string>(): T;
	getErrorDetails<T=Array<SP.AppInstanceErrorDetails>>(): T;
	getPreviousAppVersion<T=SP.App>(): T;
	install<T=any>(): T;
	recycle<T=any>(): T;
	restore<T=any>(): T;
	retryAllJobs<T=void>(): T;
	uninstall<T=any>(): T;
	upgrade<T=void>(appPackageStream?: any): T;
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
* ObjectSharingSettingsCollections
**********************************************/
export interface ObjectSharingSettingsCollections {
	ObjectSharingInformation<T=SP.ObjectSharingInformation>(): T;
	SharePointSettings<T=SP.SharePointSharingSettings>(): T;
	SharingPermissions<T=Array<SP.SharingPermissionInformation>>(): T;
}

/*********************************************
* ObjectSharingSettingsQuery
**********************************************/
export interface ObjectSharingSettingsQuery {
	ObjectSharingInformation<T=SP.ObjectSharingInformation>(): T;
	SharePointSettings<T=SP.SharePointSharingSettings>(): T;
	SharingPermissions<T=Array<SP.SharingPermissionInformation>>(): T;
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
* ObjectSharingInformationCollections
**********************************************/
export interface ObjectSharingInformationCollections {
	SharedWithUsersCollection<T=Array<SP.ObjectSharingInformationUser>>(): T;
}

/*********************************************
* ObjectSharingInformationQuery
**********************************************/
export interface ObjectSharingInformationQuery {
	SharedWithUsersCollection<T=Array<SP.ObjectSharingInformationUser>>(): T;
}

/*********************************************
* ObjectSharingInformationMethods
**********************************************/
export interface ObjectSharingInformationMethods {
	getSharedWithUsers<T=Array<SP.ObjectSharingInformationUser>>(): T;
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
* ObjectSharingInformationUserCollections
**********************************************/
export interface ObjectSharingInformationUserCollections {
	Principal<T=SP.Principal>(): T;
	User<T=SP.User>(): T;
}

/*********************************************
* ObjectSharingInformationUserQuery
**********************************************/
export interface ObjectSharingInformationUserQuery {
	Principal<T=SP.Principal>(): T;
	User<T=SP.User>(): T;
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
* SharePointSharingSettingsCollections
**********************************************/
export interface SharePointSharingSettingsCollections {
	PickerProperties<T=SP.PickerSettings>(): T;
}

/*********************************************
* SharePointSharingSettingsQuery
**********************************************/
export interface SharePointSharingSettingsQuery {
	PickerProperties<T=SP.PickerSettings>(): T;
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
* SharingResultCollections
**********************************************/
export interface SharingResultCollections {
	GroupsSharedWith<T=Array<SP.Group>>(): T;
	GroupUsersAddedTo<T=SP.Group>(): T;
	UsersWithAccessRequests<T=Array<SP.User>>(): T;
}

/*********************************************
* SharingResultQuery
**********************************************/
export interface SharingResultQuery {
	GroupsSharedWith<T=Array<SP.Group>>(): T;
	GroupUsersAddedTo<T=SP.Group>(): T;
	UsersWithAccessRequests<T=Array<SP.User>>(): T;
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
* AppContextSiteCollections
**********************************************/
export interface AppContextSiteCollections {
	Site<T=SP.Site>(): T;
	Web<T=SP.Web>(): T;
}

/*********************************************
* AppContextSiteQuery
**********************************************/
export interface AppContextSiteQuery {
	Site<T=SP.Site>(): T;
	Web<T=SP.Web>(): T;
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
* ChangeListCollections
**********************************************/
export interface ChangeListCollections {
	Creator<T=SP.User>(): T;
}

/*********************************************
* ChangeListQuery
**********************************************/
export interface ChangeListQuery {
	Creator<T=SP.User>(): T;
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
* CheckedOutFileCollections
**********************************************/
export interface CheckedOutFileCollections {
	CheckedOutBy<T=SP.User>(): T;
}

/*********************************************
* CheckedOutFileQuery
**********************************************/
export interface CheckedOutFileQuery {
	CheckedOutBy<T=SP.User>(): T;
}

/*********************************************
* CheckedOutFileMethods
**********************************************/
export interface CheckedOutFileMethods {
	takeOverCheckOut<T=void>(): T;
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
* RequestContextCollections
**********************************************/
export interface RequestContextCollections {
	Current<T=SP.RequestContext>(): T;
	List<T=SP.List>(): T;
	Site<T=SP.Site>(): T;
	Web<T=SP.Web>(): T;
}

/*********************************************
* RequestContextQuery
**********************************************/
export interface RequestContextQuery {
	Current<T=SP.RequestContext>(): T;
	List<T=SP.List>(): T;
	Site<T=SP.Site>(): T;
	Web<T=SP.Web>(): T;
}

/*********************************************
* RequestContextMethods
**********************************************/
export interface RequestContextMethods {
	getRemoteContext<T=SP.RequestContext>(): T;
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
* FieldCalculatedMethods
**********************************************/
export interface FieldCalculatedMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
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
* FieldMultiChoiceMethods
**********************************************/
export interface FieldMultiChoiceMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
}

/*********************************************
* FieldChoice
**********************************************/
export interface FieldChoice extends SP.FieldMultiChoice {
	EditFormat?: number;
}

/*********************************************
* FieldChoiceMethods
**********************************************/
export interface FieldChoiceMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
}

/*********************************************
* FieldComputed
**********************************************/
export interface FieldComputed extends SP.Field {
	EnableLookup?: boolean;
}

/*********************************************
* FieldComputedMethods
**********************************************/
export interface FieldComputedMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
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
* FieldNumberMethods
**********************************************/
export interface FieldNumberMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
}

/*********************************************
* FieldCurrency
**********************************************/
export interface FieldCurrency extends SP.FieldNumber {
	CurrencyLocaleId?: number;
}

/*********************************************
* FieldCurrencyMethods
**********************************************/
export interface FieldCurrencyMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
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
* FieldDateTimeMethods
**********************************************/
export interface FieldDateTimeMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
}

/*********************************************
* FieldGeolocation
**********************************************/
export interface FieldGeolocation extends SP.Field {

}

/*********************************************
* FieldGeolocationMethods
**********************************************/
export interface FieldGeolocationMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
}

/*********************************************
* FieldGuid
**********************************************/
export interface FieldGuid extends SP.Field {

}

/*********************************************
* FieldGuidMethods
**********************************************/
export interface FieldGuidMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
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
* FieldMultiLineTextMethods
**********************************************/
export interface FieldMultiLineTextMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
}

/*********************************************
* FieldLocation
**********************************************/
export interface FieldLocation extends SP.FieldMultiLineText {

}

/*********************************************
* FieldLocationMethods
**********************************************/
export interface FieldLocationMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
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
* FieldLookupMethods
**********************************************/
export interface FieldLookupMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
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
* FieldRatingScaleMethods
**********************************************/
export interface FieldRatingScaleMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
}

/*********************************************
* FieldText
**********************************************/
export interface FieldText extends SP.Field {
	MaxLength?: number;
}

/*********************************************
* FieldTextMethods
**********************************************/
export interface FieldTextMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
}

/*********************************************
* FieldUrl
**********************************************/
export interface FieldUrl extends SP.Field {
	DisplayFormat?: number;
}

/*********************************************
* FieldUrlMethods
**********************************************/
export interface FieldUrlMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
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
* FieldUserMethods
**********************************************/
export interface FieldUserMethods {
	deleteObject<T=void>(): T;
	setShowInDisplayForm<T=void>(value?: boolean): T;
	setShowInEditForm<T=void>(value?: boolean): T;
	setShowInNewForm<T=void>(value?: boolean): T;
	update<T=void>(): T;
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
* HubSiteMethods
**********************************************/
export interface HubSiteMethods {
	delete<T=void>(): T;
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
* RelatedFieldCollections
**********************************************/
export interface RelatedFieldCollections {
	LookupList<T=SP.List>(): T;
}

/*********************************************
* RelatedFieldQuery
**********************************************/
export interface RelatedFieldQuery {
	LookupList<T=SP.List>(): T;
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
* RemoteWebCollections
**********************************************/
export interface RemoteWebCollections {
	Web<T=SP.Web>(): T;
}

/*********************************************
* RemoteWebQuery
**********************************************/
export interface RemoteWebQuery {
	Web<T=SP.Web>(): T;
}

/*********************************************
* RemoteWebMethods
**********************************************/
export interface RemoteWebMethods {
	getFileByServerRelativePath<T=SP.File>(serverRelatvieFilePath?: SP.ResourcePath): T;
	getFileByServerRelativeUrl<T=SP.File>(serverRelativeFileUrl?: string): T;
	getFileByUrl<T=SP.File>(fileUrl?: string): T;
	getFolderByServerRelativeUrl<T=SP.Folder>(serverRelativeUrl?: string): T;
	getGroupById<T=SP.Group>(groupId?: number): T;
	getListById<T=SP.List>(listGuid?: any): T;
	getListByServerRelativeUrl<T=SP.List>(serverRelativeUrl?: string): T;
}

/*********************************************
* RequestUserContext
**********************************************/
export interface RequestUserContext {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RequestUserContextCollections
**********************************************/
export interface RequestUserContextCollections {
	Current<T=SP.RequestUserContext>(): T;
	User<T=SP.User>(): T;
}

/*********************************************
* RequestUserContextQuery
**********************************************/
export interface RequestUserContextQuery {
	Current<T=SP.RequestUserContext>(): T;
	User<T=SP.User>(): T;
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
* VisualizationAppSynchronizationResultCollections
**********************************************/
export interface VisualizationAppSynchronizationResultCollections {
	AppMappedViews<T=Array<SP.View>>(): T;
}

/*********************************************
* VisualizationAppSynchronizationResultQuery
**********************************************/
export interface VisualizationAppSynchronizationResultQuery {
	AppMappedViews<T=Array<SP.View>>(): T;
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
* TenantSettingsCollections
**********************************************/
export interface TenantSettingsCollections {
	Current<T=SP.TenantSettings>(): T;
}

/*********************************************
* TenantSettingsQuery
**********************************************/
export interface TenantSettingsQuery {
	Current<T=SP.TenantSettings>(): T;
}

/*********************************************
* AppPrincipalIdentityProvider
**********************************************/
export interface AppPrincipalIdentityProvider {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppPrincipalIdentityProviderCollections
**********************************************/
export interface AppPrincipalIdentityProviderCollections {
	External<T=SP.AppPrincipalIdentityProvider>(): T;
}

/*********************************************
* AppPrincipalIdentityProviderQuery
**********************************************/
export interface AppPrincipalIdentityProviderQuery {
	External<T=SP.AppPrincipalIdentityProvider>(): T;
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
