import { SP } from "../";
import { Microsoft } from "../";

/*********************************************
* ApiMetadata
**********************************************/
export interface ApiMetadata {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
export interface User {
	AadObjectId?: SP.UserIdInfo;
	Email?: string;
	IsEmailAuthenticationGuestUser?: boolean;
	IsShareByEmailGuestUser?: boolean;
	IsSiteAdmin?: boolean;
	UserId?: SP.UserIdInfo;
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
* RoleAssignment
**********************************************/
export interface RoleAssignment {
	PrincipalId?: number;
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
export interface ListItem {
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
export interface List {
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
export interface Web {
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
	WebTemplate?: string;
	WelcomePage?: string;
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
export interface Group {
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
* ListItemVersion
**********************************************/
export interface ListItemVersion {
	Created?: any;
	IsCurrentVersion?: boolean;
	VersionId?: number;
	VersionLabel?: string;
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
export interface ChangeAlert {
	AlertId?: any;
	WebId?: any;
}

/*********************************************
* ChangeContentType
**********************************************/
export interface ChangeContentType {
	ContentTypeId?: SP.ContentTypeId;
	WebId?: any;
}

/*********************************************
* ChangeField
**********************************************/
export interface ChangeField {
	FieldId?: any;
	WebId?: any;
}

/*********************************************
* ChangeFile
**********************************************/
export interface ChangeFile {
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* ChangeFolder
**********************************************/
export interface ChangeFolder {
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* ChangeGroup
**********************************************/
export interface ChangeGroup {
	GroupId?: number;
}

/*********************************************
* ChangeItem
**********************************************/
export interface ChangeItem {
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
export interface ChangeList {
	BaseTemplate?: number;
	Editor?: string;
	Hidden?: boolean;
	ListId?: any;
	RootFolderUrl?: string;
	Title?: string;
	WebId?: any;
}

/*********************************************
* ChangeSite
**********************************************/
export interface ChangeSite {

}

/*********************************************
* ChangeUser
**********************************************/
export interface ChangeUser {
	Activate?: boolean;
	UserId?: number;
}

/*********************************************
* ChangeView
**********************************************/
export interface ChangeView {
	ViewId?: any;
	ListId?: any;
	WebId?: any;
}

/*********************************************
* ChangeWeb
**********************************************/
export interface ChangeWeb {
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
* CurrencyList
**********************************************/
export interface CurrencyList {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* FieldCalculated
**********************************************/
export interface FieldCalculated {
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
export interface FieldMultiChoice {
	FillInChoice?: boolean;
	Mappings?: string;
	Choices?: Array<string>;
}

/*********************************************
* FieldChoice
**********************************************/
export interface FieldChoice {
	EditFormat?: number;
}

/*********************************************
* FieldComputed
**********************************************/
export interface FieldComputed {
	EnableLookup?: boolean;
}

/*********************************************
* FieldNumber
**********************************************/
export interface FieldNumber {
	DisplayFormat?: number;
	MaximumValue?: number;
	MinimumValue?: number;
	ShowAsPercentage?: boolean;
}

/*********************************************
* FieldCurrency
**********************************************/
export interface FieldCurrency {
	CurrencyLocaleId?: number;
}

/*********************************************
* FieldDateTime
**********************************************/
export interface FieldDateTime {
	DateTimeCalendarType?: number;
	DisplayFormat?: number;
	FriendlyDisplayFormat?: number;
}

/*********************************************
* FieldGeolocation
**********************************************/
export interface FieldGeolocation {

}

/*********************************************
* FieldGuid
**********************************************/
export interface FieldGuid {

}

/*********************************************
* FieldMultiLineText
**********************************************/
export interface FieldMultiLineText {
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
export interface FieldLocation {

}

/*********************************************
* FieldLookup
**********************************************/
export interface FieldLookup {
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
export interface FieldRatingScale {
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
export interface FieldText {
	MaxLength?: number;
}

/*********************************************
* FieldUrl
**********************************************/
export interface FieldUrl {
	DisplayFormat?: number;
}

/*********************************************
* FieldUser
**********************************************/
export interface FieldUser {
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
* RemoteWeb
**********************************************/
export interface RemoteWeb {
	CanSendEmail?: boolean;
	ShareByEmailEnabled?: boolean;
	ShareByLinkEnabled?: boolean;
}

/*********************************************
* RequestUserContext
**********************************************/
export interface RequestUserContext {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
* AppPrincipalIdentityProvider
**********************************************/
export interface AppPrincipalIdentityProvider {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
