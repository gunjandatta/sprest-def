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
* Audit
**********************************************/
export interface Audit {
	AuditFlags?: number;
}

/*********************************************
* ScriptSafeDomain
**********************************************/
export interface ScriptSafeDomain {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
* Attachment
**********************************************/
export interface Attachment {
	FileName?: string;
	FileNameAsPath?: SP.ResourcePath;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
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
* UserResource
**********************************************/
export interface UserResource {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
* ViewFieldCollection
**********************************************/
export interface ViewFieldCollection {
	SchemaXml?: string;
	Items?: Array<string>;
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
* ClientWebPart
**********************************************/
export interface ClientWebPart {
	Id?: any;
	Name?: string;
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
* LanguageCollection
**********************************************/
export interface LanguageCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<SP.Language>;
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
* ThemeInfo
**********************************************/
export interface ThemeInfo {
	AccessibleDescription?: string;
	ThemeBackgroundImageUri?: string;
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
* SPAppLicenseManager
**********************************************/
export interface SPAppLicenseManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
* FieldMultiChoice
**********************************************/
export interface FieldMultiChoice extends SP.Field {
	FillInChoice?: boolean;
	Mappings?: string;
	Choices?: Array<string>;
}

/*********************************************
* FieldChoice
**********************************************/
export interface FieldChoice extends SP.FieldMultiChoice {
	EditFormat?: number;
}

/*********************************************
* FieldComputed
**********************************************/
export interface FieldComputed extends SP.Field {
	EnableLookup?: boolean;
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
* FieldCurrency
**********************************************/
export interface FieldCurrency extends SP.FieldNumber {
	CurrencyLocaleId?: number;
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
* FieldGeolocation
**********************************************/
export interface FieldGeolocation extends SP.Field {

}

/*********************************************
* FieldGuid
**********************************************/
export interface FieldGuid extends SP.Field {

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
* FieldLocation
**********************************************/
export interface FieldLocation extends SP.FieldMultiLineText {

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
* FieldText
**********************************************/
export interface FieldText extends SP.Field {
	MaxLength?: number;
}

/*********************************************
* FieldUrl
**********************************************/
export interface FieldUrl extends SP.Field {
	DisplayFormat?: number;
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
