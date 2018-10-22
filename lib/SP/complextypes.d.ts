import { SP } from "../";

/*********************************************
* KeyValue
**********************************************/
export interface KeyValue {
	Key?: string;
	Value?: string;
	ValueType?: string;
}

/*********************************************
* SimpleDataRow
**********************************************/
export interface SimpleDataRow {
	Cells?: Array<SP.KeyValue>;
}

/*********************************************
* SimpleDataTable
**********************************************/
export interface SimpleDataTable {
	Rows?: Array<SP.SimpleDataRow>;
}

/*********************************************
* MethodInformation
**********************************************/
export interface MethodInformation {
	IsBeta?: boolean;
	Name?: string;
	Parameters?: Array<SP.ParameterInformation>;
	ReturnTypeFullName?: string;
}

/*********************************************
* ParameterInformation
**********************************************/
export interface ParameterInformation {
	Name?: string;
	ParameterTypeFullName?: string;
}

/*********************************************
* PropertyInformation
**********************************************/
export interface PropertyInformation {
	ExcludeFromDefaultRetrieval?: boolean;
	IsBeta?: boolean;
	Name?: string;
	PropertyTypeFullName?: string;
	ReadOnly?: boolean;
}

/*********************************************
* ContentTypeId
**********************************************/
export interface ContentTypeId {
	StringValue?: string;
}

/*********************************************
* FieldLookupValue
**********************************************/
export interface FieldLookupValue {
	LookupId?: number;
	LookupValue?: string;
}

/*********************************************
* FieldUserValue
**********************************************/
export interface FieldUserValue extends SP.FieldLookupValue {
	Email?: string;
}

/*********************************************
* ResourcePath
**********************************************/
export interface ResourcePath {
	DecodedUrl?: string;
}

/*********************************************
* CreatableItemInfoCollection
**********************************************/
export interface CreatableItemInfoCollection {
	Items?: Array<SP.CreatableItemInfo>;
}

/*********************************************
* CreatableItemInfo
**********************************************/
export interface CreatableItemInfo {
	DocumentTemplate?: number;
	FileExtension?: string;
	ItemType?: string;
}

/*********************************************
* CurrencyInformationCollection
**********************************************/
export interface CurrencyInformationCollection {
	Items?: Array<SP.CurrencyInformation>;
}

/*********************************************
* CurrencyInformation
**********************************************/
export interface CurrencyInformation {
	DisplayString?: string;
	LCID?: string;
}

/*********************************************
* EncryptionOption
**********************************************/
export interface EncryptionOption {
	AES256CBCKey?: any;
}

/*********************************************
* IngestionTaskKey
**********************************************/
export interface IngestionTaskKey {
	IngestionTableAccountKey?: string;
	IngestionTableAccountName?: string;
	JobId?: string;
	TaskId?: string;
	TenantName?: string;
}

/*********************************************
* MultiGeoCopyParameters
**********************************************/
export interface MultiGeoCopyParameters {
	binaryPayload?: any;
	jobId?: any;
	userId?: number;
}

/*********************************************
* MenuNode
**********************************************/
export interface MenuNode {
	CustomProperties?: Array<SP.KeyValue>;
	FriendlyUrlSegment?: string;
	IsDeleted?: boolean;
	IsHidden?: boolean;
	Key?: string;
	Nodes?: Array<SP.MenuNode>;
	NodeType?: number;
	SimpleUrl?: string;
	Title?: string;
}

/*********************************************
* MenuState
**********************************************/
export interface MenuState {
	FriendlyUrlPrefix?: string;
	Nodes?: Array<SP.MenuNode>;
	SimpleUrl?: string;
	SPSitePrefix?: string;
	SPWebPrefix?: string;
	StartingNodeKey?: string;
	StartingNodeTitle?: string;
	Version?: string;
}

/*********************************************
* NavigationNodeCreationInformation
**********************************************/
export interface NavigationNodeCreationInformation {
	AsLastNode?: boolean;
	IsExternal?: boolean;
	Title?: string;
	Url?: string;
}

/*********************************************
* RelatedItem
**********************************************/
export interface RelatedItem {
	IconUrl?: string;
	ItemId?: number;
	ListId?: string;
	Title?: string;
	Url?: string;
	WebId?: string;
}

/*********************************************
* ScriptSafeDomainEntityData
**********************************************/
export interface ScriptSafeDomainEntityData {
	DomainName?: string;
}

/*********************************************
* SharedWithUserCollection
**********************************************/
export interface SharedWithUserCollection {
	Items?: Array<SP.SharedWithUser>;
}

/*********************************************
* SharedWithUser
**********************************************/
export interface SharedWithUser {
	Email?: string;
	Name?: string;
}

/*********************************************
* SharingLinkData
**********************************************/
export interface SharingLinkData {
	BlocksDownload?: boolean;
	Expiration?: string;
	HasExternalGuestInvitees?: boolean;
	IsAnonymous?: boolean;
	IsFormsLink?: boolean;
	IsOriginatedFromSharingFlow?: boolean;
	IsReviewLink?: boolean;
	IsSharingLink?: boolean;
	IsSubmitOnlyLink?: boolean;
	IsWritable?: boolean;
	LinkKind?: number;
	ObjectType?: number;
	ObjectUniqueId?: any;
	RequiresPassword?: boolean;
	RestrictedShareMembership?: boolean;
	ShareId?: any;
}

/*********************************************
* SharingLinkInfo
**********************************************/
export interface SharingLinkInfo {
	AllowsAnonymousAccess?: boolean;
	ApplicationId?: string;
	BlocksDownload?: boolean;
	Created?: string;
	CreatedBy?: SP.Sharing.Principal;
	Description?: string;
	Expiration?: string;
	HasExternalGuestInvitees?: boolean;
	Invitations?: Array<SP.Sharing.LinkInvitation>;
	IsActive?: boolean;
	IsDefault?: boolean;
	IsEditLink?: boolean;
	IsFormsLink?: boolean;
	IsReviewLink?: boolean;
	IsSubmitOnlyLink?: boolean;
	IsUnhealthy?: boolean;
	LastModified?: string;
	LastModifiedBy?: SP.Sharing.Principal;
	LimitUseToApplication?: boolean;
	LinkKind?: number;
	PasswordLastModified?: string;
	PasswordLastModifiedBy?: SP.Sharing.Principal;
	RequiresPassword?: boolean;
	RestrictedShareMembership?: boolean;
	ShareId?: any;
	Url?: string;
}

/*********************************************
* UserIdInfo
**********************************************/
export interface UserIdInfo {
	NameId?: string;
	NameIdIssuer?: string;
}

/*********************************************
* AlertCreationInformation
**********************************************/
export interface AlertCreationInformation {
	AlertFrequency?: number;
	AlertTemplateName?: string;
	AlertTime?: any;
	AlertType?: number;
	AlwaysNotify?: boolean;
	DeliveryChannels?: number;
	EventType?: number;
	EventTypeBitmask?: number;
	Filter?: string;
	Properties?: Array<SP.KeyValue>;
	Status?: number;
	Title?: string;
}

/*********************************************
* AppLicenseCollection
**********************************************/
export interface AppLicenseCollection {
	Items?: Array<SP.AppLicense>;
}

/*********************************************
* AppLicense
**********************************************/
export interface AppLicense {
	RawXMLLicenseToken?: string;
}

/*********************************************
* AppProperties
**********************************************/
export interface AppProperties {
	AppSettingsEnabled?: boolean;
	Description?: string;
	EulaUrl?: string;
	IsAnonymous?: boolean;
	IsDisabled?: boolean;
	ManagedDeploymentEnabled?: boolean;
	ManagePermissionsEnabled?: boolean;
	ManageSeatsEnabled?: boolean;
	MonitoringEnabled?: boolean;
	Publisher?: string;
	RemoveEnabled?: boolean;
	SideLoadEnabled?: boolean;
	SupportUrl?: string;
	ViewInMarketPlaceEnabled?: boolean;
}

/*********************************************
* AppSiteContext
**********************************************/
export interface AppSiteContext {
	SiteUrl?: string;
}

/*********************************************
* AppViewCreationInfo
**********************************************/
export interface AppViewCreationInfo {
	AppId?: any;
	IsPrivate?: boolean;
	Title?: string;
}

/*********************************************
* AttachmentCreationInformation
**********************************************/
export interface AttachmentCreationInformation {
	FileName?: string;
}

/*********************************************
* BasePermissions
**********************************************/
export interface BasePermissions {
	High?: number;
	Low?: number;
}

/*********************************************
* ChangeLogItemQuery
**********************************************/
export interface ChangeLogItemQuery {
	ChangeToken?: string;
	Contains?: string;
	Query?: string;
	QueryOptions?: string;
	RowLimit?: string;
	ViewFields?: string;
	ViewName?: string;
}

/*********************************************
* ChangeQuery
**********************************************/
export interface ChangeQuery {
	Activity?: boolean;
	Add?: boolean;
	Alert?: boolean;
	ChangeTokenEnd?: SP.ChangeToken;
	ChangeTokenStart?: SP.ChangeToken;
	ContentType?: boolean;
	DeleteObject?: boolean;
	FetchLimit?: number;
	Field?: boolean;
	File?: boolean;
	Folder?: boolean;
	Group?: boolean;
	GroupMembershipAdd?: boolean;
	GroupMembershipDelete?: boolean;
	Item?: boolean;
	LatestFirst?: boolean;
	List?: boolean;
	Move?: boolean;
	Navigation?: boolean;
	RecursiveAll?: boolean;
	Rename?: boolean;
	RequireSecurityTrim?: boolean;
	Restore?: boolean;
	RoleAssignmentAdd?: boolean;
	RoleAssignmentDelete?: boolean;
	RoleDefinitionAdd?: boolean;
	RoleDefinitionDelete?: boolean;
	RoleDefinitionUpdate?: boolean;
	SecurityPolicy?: boolean;
	Site?: boolean;
	SystemUpdate?: boolean;
	Update?: boolean;
	User?: boolean;
	View?: boolean;
	Web?: boolean;
}

/*********************************************
* ChangeToken
**********************************************/
export interface ChangeToken {
	StringValue?: string;
}

/*********************************************
* ListItemComplianceInfo
**********************************************/
export interface ListItemComplianceInfo {
	ComplianceTag?: string;
	TagPolicyEventBased?: boolean;
	TagPolicyHold?: boolean;
	TagPolicyRecord?: boolean;
}

/*********************************************
* ContentTypeCreationInformation
**********************************************/
export interface ContentTypeCreationInformation {
	Description?: string;
	Group?: string;
	Id?: string;
	Name?: string;
}

/*********************************************
* ContextWebInformation
**********************************************/
export interface ContextWebInformation {
	FormDigestTimeoutSeconds?: number;
	FormDigestValue?: string;
	LibraryVersion?: string;
	SiteFullUrl?: string;
	SupportedSchemaVersions?: Array<string>;
	WebFullUrl?: string;
}

/*********************************************
* CopyJobProgress
**********************************************/
export interface CopyJobProgress {
	JobState?: number;
	Logs?: Array<string>;
}

/*********************************************
* CopyMigrationInfo
**********************************************/
export interface CopyMigrationInfo {
	EncryptionKey?: any;
	JobId?: any;
	JobQueueUri?: string;
	SourceListItemUniqueIds?: Array<any>;
}

/*********************************************
* CopyMigrationOptions
**********************************************/
export interface CopyMigrationOptions {
	AllowSchemaMismatch?: boolean;
	AllowSmallerVersionLimitOnDestination?: boolean;
	IgnoreVersionHistory?: boolean;
	IsMoveMode?: boolean;
	NameConflictBehavior?: number;
}

/*********************************************
* CustomActionElementCollection
**********************************************/
export interface CustomActionElementCollection {
	Items?: Array<SP.CustomActionElement>;
}

/*********************************************
* CustomActionElement
**********************************************/
export interface CustomActionElement {
	ClientSideComponentId?: any;
	ClientSideComponentProperties?: string;
	CommandUIExtension?: string;
	Id?: string;
	EnabledScript?: string;
	ImageUrl?: string;
	Location?: string;
	RegistrationId?: string;
	RegistrationType?: number;
	RequireSiteAdministrator?: boolean;
	Rights?: SP.BasePermissions;
	Title?: string;
	UrlAction?: string;
}

/*********************************************
* CustomerKeyInfo
**********************************************/
export interface CustomerKeyInfo {
	PrimaryKeyVault?: SP.CustomerKeyVaultInfo;
	SecondaryKeyVault?: SP.CustomerKeyVaultInfo;
}

/*********************************************
* CustomerKeyVaultInfo
**********************************************/
export interface CustomerKeyVaultInfo {
	KeyName?: string;
	KeyVersion?: any;
	VaultName?: string;
}

/*********************************************
* CustomerKeyStatusInfo
**********************************************/
export interface CustomerKeyStatusInfo {
	PrimaryKeyVaultUri?: string;
	RecoveryEnabled?: boolean;
	SecondaryKeyVaultUri?: string;
	Status?: number;
}

/*********************************************
* DocumentLibraryInformation
**********************************************/
export interface DocumentLibraryInformation {
	AbsoluteUrl?: string;
	FromCrossFarm?: boolean;
	Modified?: any;
	ModifiedFriendlyDisplay?: string;
	ServerRelativeUrl?: string;
	Title?: string;
}

/*********************************************
* EventReceiverDefinitionCreationInformation
**********************************************/
export interface EventReceiverDefinitionCreationInformation {
	ReceiverAssembly?: string;
	ReceiverClass?: string;
	ReceiverName?: string;
	SequenceNumber?: number;
	Synchronization?: number;
	EventType?: number;
	ReceiverUrl?: string;
}

/*********************************************
* ListDataValidationFailure
**********************************************/
export interface ListDataValidationFailure {
	DisplayName?: string;
	Message?: string;
	Name?: string;
	Reason?: number;
	ValidationType?: number;
}

/*********************************************
* FieldCalculatedErrorValue
**********************************************/
export interface FieldCalculatedErrorValue {
	ErrorMessage?: string;
}

/*********************************************
* FieldCreationInformation
**********************************************/
export interface FieldCreationInformation {
	Choices?: Array<string>;
	IsCompactName?: boolean;
	LookupFieldName?: string;
	LookupListId?: any;
	LookupWebId?: any;
	Required?: boolean;
	Title?: string;
	FieldTypeKind?: number;
}

/*********************************************
* FieldGeolocationValue
**********************************************/
export interface FieldGeolocationValue {
	Altitude?: number;
	Latitude?: number;
	Longitude?: number;
	Measure?: number;
}

/*********************************************
* FieldRatingScaleQuestionAnswer
**********************************************/
export interface FieldRatingScaleQuestionAnswer {
	Answer?: number;
	Question?: string;
}

/*********************************************
* FieldUrlValue
**********************************************/
export interface FieldUrlValue {
	Description?: string;
	Url?: string;
}

/*********************************************
* FileCollectionAddParameters
**********************************************/
export interface FileCollectionAddParameters {
	Overwrite?: boolean;
}

/*********************************************
* FileCreationInformation
**********************************************/
export interface FileCreationInformation {
	Content?: any;
	Overwrite?: boolean;
	Url?: string;
}

/*********************************************
* FolderCollectionAddParameters
**********************************************/
export interface FolderCollectionAddParameters {
	Overwrite?: boolean;
}

/*********************************************
* GroupCreationInformation
**********************************************/
export interface GroupCreationInformation {
	Description?: string;
	Title?: string;
}

/*********************************************
* Hashtag
**********************************************/
export interface Hashtag {
	Actor?: string;
	Application?: string;
	Label?: string;
	Timestamp?: any;
}

/*********************************************
* HubSiteCreationInformation
**********************************************/
export interface HubSiteCreationInformation {
	Description?: string;
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
* SPInvitationCreationResult
**********************************************/
export interface SPInvitationCreationResult {
	Email?: string;
	InvitationLink?: string;
	Succeeded?: boolean;
}

/*********************************************
* Language
**********************************************/
export interface Language {
	DisplayName?: string;
	LanguageTag?: string;
	Lcid?: number;
}

/*********************************************
* ListCreationInformation
**********************************************/
export interface ListCreationInformation {
	CustomSchemaXml?: string;
	DataSourceProperties?: Array<SP.KeyValue>;
	Description?: string;
	DocumentTemplateType?: number;
	QuickLaunchOption?: number;
	TemplateFeatureId?: any;
	TemplateType?: number;
	Title?: string;
	Url?: string;
}

/*********************************************
* ListDataSource
**********************************************/
export interface ListDataSource {
	Properties?: Array<SP.KeyValue>;
}

/*********************************************
* ListDataValidationExceptionValue
**********************************************/
export interface ListDataValidationExceptionValue {
	FieldFailures?: Array<SP.ListDataValidationFailure>;
	ItemFailure?: SP.ListDataValidationFailure;
}

/*********************************************
* ListItemCollectionPosition
**********************************************/
export interface ListItemCollectionPosition {
	PagingInfo?: string;
}

/*********************************************
* ListItemCreationInformationUsingPath
**********************************************/
export interface ListItemCreationInformationUsingPath {
	FolderPath?: SP.ResourcePath;
	LeafName?: SP.ResourcePath;
	UnderlyingObjectType?: number;
}

/*********************************************
* ListItemCreationInformation
**********************************************/
export interface ListItemCreationInformation {
	FolderUrl?: string;
	LeafName?: string;
	UnderlyingObjectType?: number;
}

/*********************************************
* ListItemFormUpdateValue
**********************************************/
export interface ListItemFormUpdateValue {
	ErrorMessage?: string;
	FieldName?: string;
	FieldValue?: string;
	HasException?: boolean;
	ItemId?: number;
}

/*********************************************
* ListItemUpdateParameters
**********************************************/
export interface ListItemUpdateParameters {
	BypassQuotaCheck?: boolean;
}

/*********************************************
* MediaServiceUpdateParameters
**********************************************/
export interface MediaServiceUpdateParameters {
	ContentVersion?: number;
	MediaServiceAutoKeyPoints?: string;
	MediaServiceAutoTags?: string;
	MediaServiceDateTaken?: string;
	MediaServiceEventHashCode?: string;
	MediaServiceFastMetadata?: string;
	MediaServiceGenerationTime?: string;
	MediaServiceKeyPoints?: string;
	MediaServiceLocation?: string;
	MediaServiceMetadata?: string;
	MediaServiceOCR?: string;
	MediaServiceTranscript?: string;
	SensitivityLabel?: string;
}

/*********************************************
* MoveCopyOptions
**********************************************/
export interface MoveCopyOptions {
	KeepBoth?: boolean;
}

/*********************************************
* ProvisionedMigrationContainersInfo
**********************************************/
export interface ProvisionedMigrationContainersInfo {
	DataContainerUri?: string;
	EncryptionKey?: any;
	MetadataContainerUri?: string;
}

/*********************************************
* ProvisionedMigrationQueueInfo
**********************************************/
export interface ProvisionedMigrationQueueInfo {
	JobQueueUri?: string;
}

/*********************************************
* CamlQuery
**********************************************/
export interface CamlQuery {
	AllowIncrementalResults?: boolean;
	DatesInUtc?: boolean;
	FolderServerRelativePath?: SP.ResourcePath;
	FolderServerRelativeUrl?: string;
	ListItemCollectionPosition?: SP.ListItemCollectionPosition;
	ViewXml?: string;
}

/*********************************************
* RecycleBinQueryInformation
**********************************************/
export interface RecycleBinQueryInformation {
	IsAscending?: boolean;
	ItemState?: number;
	OrderBy?: number;
	PagingInfo?: string;
	RowLimit?: number;
	ShowOnlyMyItems?: boolean;
}

/*********************************************
* RenderListContextMenuDataParameters
**********************************************/
export interface RenderListContextMenuDataParameters {
	CascDelWarnMessage?: string;
	CustomAction?: string;
	Field?: string;
	ID?: string;
	InplaceFullListSearch?: string;
	InplaceSearchQuery?: string;
	IsCSR?: string;
	IsXslView?: string;
	ItemId?: string;
	ListViewPageUrl?: string;
	OverrideScope?: string;
	RootFolder?: string;
	View?: string;
	ViewCount?: string;
}

/*********************************************
* RenderListDataOverrideParameters
**********************************************/
export interface RenderListDataOverrideParameters {
	CascDelWarnMessage?: string;
	CustomAction?: string;
	DrillDown?: string;
	Field?: string;
	FieldInternalName?: string;
	Filter?: string;
	FilterData?: string;
	FilterData1?: string;
	FilterData10?: string;
	FilterData2?: string;
	FilterData3?: string;
	FilterData4?: string;
	FilterData5?: string;
	FilterData6?: string;
	FilterData7?: string;
	FilterData8?: string;
	FilterData9?: string;
	FilterField?: string;
	FilterField1?: string;
	FilterField10?: string;
	FilterField2?: string;
	FilterField3?: string;
	FilterField4?: string;
	FilterField5?: string;
	FilterField6?: string;
	FilterField7?: string;
	FilterField8?: string;
	FilterField9?: string;
	FilterFields?: string;
	FilterFields1?: string;
	FilterFields10?: string;
	FilterFields2?: string;
	FilterFields3?: string;
	FilterFields4?: string;
	FilterFields5?: string;
	FilterFields6?: string;
	FilterFields7?: string;
	FilterFields8?: string;
	FilterFields9?: string;
	FilterLookupId?: string;
	FilterLookupId1?: string;
	FilterLookupId10?: string;
	FilterLookupId2?: string;
	FilterLookupId3?: string;
	FilterLookupId4?: string;
	FilterLookupId5?: string;
	FilterLookupId6?: string;
	FilterLookupId7?: string;
	FilterLookupId8?: string;
	FilterLookupId9?: string;
	FilterOp?: string;
	FilterOp1?: string;
	FilterOp10?: string;
	FilterOp2?: string;
	FilterOp3?: string;
	FilterOp4?: string;
	FilterOp5?: string;
	FilterOp6?: string;
	FilterOp7?: string;
	FilterOp8?: string;
	FilterOp9?: string;
	FilterValue?: string;
	FilterValue1?: string;
	FilterValue10?: string;
	FilterValue2?: string;
	FilterValue3?: string;
	FilterValue4?: string;
	FilterValue5?: string;
	FilterValue6?: string;
	FilterValue7?: string;
	FilterValue8?: string;
	FilterValue9?: string;
	FilterValues?: string;
	FilterValues1?: string;
	FilterValues10?: string;
	FilterValues2?: string;
	FilterValues3?: string;
	FilterValues4?: string;
	FilterValues5?: string;
	FilterValues6?: string;
	FilterValues7?: string;
	FilterValues8?: string;
	FilterValues9?: string;
	GroupString?: string;
	HasOverrideSelectCommand?: string;
	ID?: string;
	InplaceFullListSearch?: string;
	InplaceSearchQuery?: string;
	IsCSR?: string;
	IsGroupRender?: string;
	IsXslView?: string;
	ListViewPageUrl?: string;
	OverrideScope?: string;
	OverrideSelectCommand?: string;
	PageFirstRow?: string;
	PageLastRow?: string;
	RootFolder?: string;
	SortDir?: string;
	SortDir1?: string;
	SortDir10?: string;
	SortDir2?: string;
	SortDir3?: string;
	SortDir4?: string;
	SortDir5?: string;
	SortDir6?: string;
	SortDir7?: string;
	SortDir8?: string;
	SortDir9?: string;
	SortField?: string;
	SortField1?: string;
	SortField10?: string;
	SortField2?: string;
	SortField3?: string;
	SortField4?: string;
	SortField5?: string;
	SortField6?: string;
	SortField7?: string;
	SortField8?: string;
	SortField9?: string;
	SortFields?: string;
	SortFieldValues?: string;
	View?: string;
	ViewCount?: string;
	ViewId?: string;
	ViewPath?: string;
	WebPartId?: string;
}

/*********************************************
* RenderListDataParameters
**********************************************/
export interface RenderListDataParameters {
	AddRequiredFields?: boolean;
	AllowMultipleValueFilterForTaxonomyFields?: boolean;
	AudienceTarget?: boolean;
	DatesInUtc?: boolean;
	ExpandGroups?: boolean;
	FirstGroupOnly?: boolean;
	FolderServerRelativeUrl?: string;
	ImageFieldsToTryRewriteToCdnUrls?: string;
	MergeDefaultView?: boolean;
	OverrideViewXml?: string;
	Paging?: string;
	RenderOptions?: number;
	ReplaceGroup?: boolean;
	ViewXml?: string;
}

/*********************************************
* RenderListFilterDataParameters
**********************************************/
export interface RenderListFilterDataParameters {
	ExcludeFieldFilteringHtml?: boolean;
	FieldInternalName?: string;
	OverrideScope?: string;
	ProcessQStringToCAML?: string;
	ViewId?: string;
}

/*********************************************
* RoleDefinitionCreationInformation
**********************************************/
export interface RoleDefinitionCreationInformation {
	BasePermissions?: SP.BasePermissions;
	Description?: string;
	Name?: string;
	Order?: number;
}

/*********************************************
* UpgradeInfo
**********************************************/
export interface UpgradeInfo {
	ErrorFile?: string;
	Errors?: number;
	LastUpdated?: any;
	LogFile?: string;
	RequestDate?: any;
	RetryCount?: number;
	StartTime?: any;
	Status?: number;
	UpgradeType?: number;
	Warnings?: number;
}

/*********************************************
* SubwebQuery
**********************************************/
export interface SubwebQuery {
	ConfigurationFilter?: number;
	WebTemplateFilter?: number;
}

/*********************************************
* TenantAppInformation
**********************************************/
export interface TenantAppInformation {
	AppPrincipalId?: string;
	AppWebFullUrl?: string;
	CreationTime?: any;
	IconAbsoluteUrl?: string;
	IconFallbackAbsoluteUrl?: string;
	Id?: any;
	LaunchUrl?: string;
	PackageFingerprint?: any;
	ProductId?: any;
	RemoteAppUrl?: string;
	Status?: number;
	Title?: string;
}

/*********************************************
* TimeZoneInformation
**********************************************/
export interface TimeZoneInformation {
	Bias?: number;
	DaylightBias?: number;
	StandardBias?: number;
}

/*********************************************
* UsageInfo
**********************************************/
export interface UsageInfo {
	Bandwidth?: number;
	DiscussionStorage?: number;
	Hits?: number;
	Storage?: number;
	StoragePercentageUsed?: number;
	Visits?: number;
}

/*********************************************
* UserCreationInformation
**********************************************/
export interface UserCreationInformation {
	Email?: string;
	LoginName?: string;
	Title?: string;
}

/*********************************************
* ViewCreationInformation
**********************************************/
export interface ViewCreationInformation {
	baseViewId?: number;
	Paged?: boolean;
	PersonalView?: boolean;
	Query?: string;
	RowLimit?: number;
	SetAsDefaultView?: boolean;
	Title?: string;
	ViewFields?: Array<string>;
	ViewTypeKind?: number;
}

/*********************************************
* VisualizationAppInfo
**********************************************/
export interface VisualizationAppInfo {
	DesignUri?: string;
	Id?: any;
	RuntimeUri?: string;
}

/*********************************************
* VisualizationField
**********************************************/
export interface VisualizationField {
	InternalName?: string;
	Style?: string;
}

/*********************************************
* VisualizationStyleSet
**********************************************/
export interface VisualizationStyleSet {
	AspectRatio?: string;
	BackgroundColor?: string;
	Fields?: Array<SP.VisualizationField>;
	MinHeight?: string;
}

/*********************************************
* Visualization
**********************************************/
export interface Visualization {
	DefaultScreen?: SP.VisualizationStyleSet;
	DetailView?: SP.VisualizationStyleSet;
	MediumScreen?: SP.VisualizationStyleSet;
	SmallScreen?: SP.VisualizationStyleSet;
	VisualizationAppInfo?: SP.VisualizationAppInfo;
	VisualizationType?: number;
}

/*********************************************
* WebCreationInformation
**********************************************/
export interface WebCreationInformation {
	Description?: string;
	Language?: number;
	Title?: string;
	Url?: string;
	UseSamePermissionsAsParentSite?: boolean;
	WebTemplate?: string;
}

/*********************************************
* WebInfoCreationInformation
**********************************************/
export interface WebInfoCreationInformation {
	Description?: string;
	Language?: number;
	Title?: string;
	Url?: string;
	UseUniquePermissions?: boolean;
	WebTemplate?: string;
}

/*********************************************
* WebRequestInfo
**********************************************/
export interface WebRequestInfo {
	Body?: string;
	Headers?: Array<SP.KeyValue>;
	Method?: string;
	Url?: string;
}

/*********************************************
* WebResponseInfo
**********************************************/
export interface WebResponseInfo {
	Body?: string;
	Headers?: Array<SP.KeyValue>;
	StatusCode?: number;
}

/*********************************************
* XmlSchemaFieldCreationInformation
**********************************************/
export interface XmlSchemaFieldCreationInformation {
	Options?: number;
	SchemaXml?: string;
}
