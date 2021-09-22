import { Base } from "../";
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
* KeyValueCollections
**********************************************/
export interface KeyValueCollections {

}

/*********************************************
* SimpleDataRow
**********************************************/
export interface SimpleDataRow {
	Cells?: Array<SP.KeyValue>;
}

/*********************************************
* SimpleDataRowCollections
**********************************************/
export interface SimpleDataRowCollections {

}

/*********************************************
* SimpleDataTable
**********************************************/
export interface SimpleDataTable {
	Rows?: Array<SP.SimpleDataRow>;
}

/*********************************************
* SimpleDataTableCollections
**********************************************/
export interface SimpleDataTableCollections {

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
* MethodInformationCollections
**********************************************/
export interface MethodInformationCollections {

}

/*********************************************
* ParameterInformation
**********************************************/
export interface ParameterInformation {
	Name?: string;
	ParameterTypeFullName?: string;
}

/*********************************************
* ParameterInformationCollections
**********************************************/
export interface ParameterInformationCollections {

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
* PropertyInformationCollections
**********************************************/
export interface PropertyInformationCollections {

}

/*********************************************
* PortalAndOrgNewsSiteReference
**********************************************/
export interface PortalAndOrgNewsSiteReference {
	SiteId?: any;
	WebId?: any;
}

/*********************************************
* PortalAndOrgNewsSiteReferenceCollections
**********************************************/
export interface PortalAndOrgNewsSiteReferenceCollections {

}

/*********************************************
* OrganizationNewsSiteReference
**********************************************/
export interface OrganizationNewsSiteReference {

}

/*********************************************
* OrganizationNewsSiteReferenceCollections
**********************************************/
export interface OrganizationNewsSiteReferenceCollections {

}

/*********************************************
* SPHSiteReference
**********************************************/
export interface SPHSiteReference {
	LogoUrl?: string;
	Title?: string;
	Url?: string;
}

/*********************************************
* SPHSiteReferenceCollections
**********************************************/
export interface SPHSiteReferenceCollections {

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
* FileCreationInformationCollections
**********************************************/
export interface FileCreationInformationCollections {

}

/*********************************************
* KnowledgeHubSiteReference
**********************************************/
export interface KnowledgeHubSiteReference {
	SiteId?: any;
	Url?: string;
	WebId?: any;
}

/*********************************************
* KnowledgeHubSiteReferenceCollections
**********************************************/
export interface KnowledgeHubSiteReferenceCollections {

}

/*********************************************
* ConfigurationData
**********************************************/
export interface ConfigurationData {
	BridgeAbsolutePath?: SP.ResourcePath;
}

/*********************************************
* ConfigurationDataCollections
**********************************************/
export interface ConfigurationDataCollections {

}

/*********************************************
* ResourcePath
**********************************************/
export interface ResourcePath {
	DecodedUrl?: string;
}

/*********************************************
* ResourcePathCollections
**********************************************/
export interface ResourcePathCollections {

}

/*********************************************
* DashboardItemInfo
**********************************************/
export interface DashboardItemInfo {
	ItemId?: number;
	ListId?: any;
	SiteId?: any;
	WebId?: any;
}

/*********************************************
* DashboardItemInfoCollections
**********************************************/
export interface DashboardItemInfoCollections {

}

/*********************************************
* DashboardItem
**********************************************/
export interface DashboardItem {
	WebAbsolutePath?: SP.ResourcePath;
}

/*********************************************
* DashboardItemCollections
**********************************************/
export interface DashboardItemCollections {

}

/*********************************************
* PivotItem
**********************************************/
export interface PivotItem {
	Audiences?: Array<string>;
	Name?: string;
}

/*********************************************
* PivotItemCollections
**********************************************/
export interface PivotItemCollections {

}

/*********************************************
* VivaConnectionsUrlConfiguration
**********************************************/
export interface VivaConnectionsUrlConfiguration {
	ContentUrl?: string;
	DashboardNotConfiguredWarning?: string;
	GlobalNavNotConfiguredWarning?: string;
	NotHomeSiteUrlWarning?: string;
	SearchUrl?: string;
}

/*********************************************
* VivaConnectionsUrlConfigurationCollections
**********************************************/
export interface VivaConnectionsUrlConfigurationCollections {

}

/*********************************************
* ContentTypeId
**********************************************/
export interface ContentTypeId {
	StringValue?: string;
}

/*********************************************
* ContentTypeIdCollections
**********************************************/
export interface ContentTypeIdCollections {

}

/*********************************************
* FieldLookupValue
**********************************************/
export interface FieldLookupValue {
	LookupId?: number;
	LookupValue?: string;
}

/*********************************************
* FieldLookupValueCollections
**********************************************/
export interface FieldLookupValueCollections {

}

/*********************************************
* FieldUserValue
**********************************************/
export interface FieldUserValue {
	Email?: string;
}

/*********************************************
* FieldUserValueCollections
**********************************************/
export interface FieldUserValueCollections {

}

/*********************************************
* ContentAssemblyFileInfo
**********************************************/
export interface ContentAssemblyFileInfo {
	FileUrl?: string;
	ServerRedirectedEmbedUrl?: string;
}

/*********************************************
* ContentAssemblyFileInfoCollections
**********************************************/
export interface ContentAssemblyFileInfoCollections {

}

/*********************************************
* ContentAssemblyFormAnswer
**********************************************/
export interface ContentAssemblyFormAnswer {
	Answer?: string;
	ContentControlTagName?: string;
}

/*********************************************
* ContentAssemblyFormAnswerCollections
**********************************************/
export interface ContentAssemblyFormAnswerCollections {

}

/*********************************************
* ContentControlInfo
**********************************************/
export interface ContentControlInfo {
	ContentControlTagName?: string;
	EndIndex?: number;
	IsSingleParargaph?: boolean;
	ParagraphIds?: Array<string>;
	StartIndex?: number;
}

/*********************************************
* ContentControlInfoCollections
**********************************************/
export interface ContentControlInfoCollections {

}

/*********************************************
* CountByDate
**********************************************/
export interface CountByDate {
	count?: number;
	date?: number;
}

/*********************************************
* CountByDateCollections
**********************************************/
export interface CountByDateCollections {

}

/*********************************************
* CreatableItemInfoCollection
**********************************************/
export interface CreatableItemInfoCollection {
	Items?: Array<SP.CreatableItemInfo>;
}

/*********************************************
* CreatableItemInfoCollectionCollections
**********************************************/
export interface CreatableItemInfoCollectionCollections {

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
* CreatableItemInfoCollections
**********************************************/
export interface CreatableItemInfoCollections {

}

/*********************************************
* CurrencyInformationCollection
**********************************************/
export interface CurrencyInformationCollection {
	Items?: Array<SP.CurrencyInformation>;
}

/*********************************************
* CurrencyInformationCollectionCollections
**********************************************/
export interface CurrencyInformationCollectionCollections {

}

/*********************************************
* CurrencyInformation
**********************************************/
export interface CurrencyInformation {
	DisplayString?: string;
	LCID?: string;
}

/*********************************************
* CurrencyInformationCollections
**********************************************/
export interface CurrencyInformationCollections {

}

/*********************************************
* CustomizedFormsPageCollection
**********************************************/
export interface CustomizedFormsPageCollection {
	Items?: Array<SP.CustomizedFormsPage>;
}

/*********************************************
* CustomizedFormsPageCollectionCollections
**********************************************/
export interface CustomizedFormsPageCollectionCollections {

}

/*********************************************
* CustomizedFormsPage
**********************************************/
export interface CustomizedFormsPage {
	formType?: number;
	pageId?: any;
	Url?: string;
	webpartId?: any;
}

/*********************************************
* CustomizedFormsPageCollections
**********************************************/
export interface CustomizedFormsPageCollections {

}

/*********************************************
* DocumentGenerationInfo
**********************************************/
export interface DocumentGenerationInfo {
	ContentAssemblyFormAnswers?: Array<SP.ContentAssemblyFormAnswer>;
	FileName?: string;
	IsTempFile?: boolean;
	TempFileUrl?: string;
}

/*********************************************
* DocumentGenerationInfoCollections
**********************************************/
export interface DocumentGenerationInfoCollections {

}

/*********************************************
* EncryptionOption
**********************************************/
export interface EncryptionOption {
	AES256CBCKey?: any;
}

/*********************************************
* EncryptionOptionCollections
**********************************************/
export interface EncryptionOptionCollections {

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
* IngestionTaskKeyCollections
**********************************************/
export interface IngestionTaskKeyCollections {

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
* MultiGeoCopyParametersCollections
**********************************************/
export interface MultiGeoCopyParametersCollections {

}

/*********************************************
* Placeholder
**********************************************/
export interface Placeholder {
	DataType?: string;
	EndPosition?: number;
	Id?: string;
	Name?: string;
	ParagraphId?: string;
	QuestionTitle?: string;
	Source?: string;
	StartPosition?: number;
}

/*********************************************
* PlaceholderCollections
**********************************************/
export interface PlaceholderCollections {

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
* RelatedItemCollections
**********************************************/
export interface RelatedItemCollections {

}

/*********************************************
* RequestedTranslation
**********************************************/
export interface RequestedTranslation {
	LanguageCode?: string;
	WebRelativePath?: SP.ResourcePath;
}

/*********************************************
* RequestedTranslationCollections
**********************************************/
export interface RequestedTranslationCollections {

}

/*********************************************
* ScriptSafeDomainEntityData
**********************************************/
export interface ScriptSafeDomainEntityData {
	DomainName?: string;
}

/*********************************************
* ScriptSafeDomainEntityDataCollections
**********************************************/
export interface ScriptSafeDomainEntityDataCollections {

}

/*********************************************
* SharedWithUserCollection
**********************************************/
export interface SharedWithUserCollection {
	Items?: Array<SP.SharedWithUser>;
}

/*********************************************
* SharedWithUserCollectionCollections
**********************************************/
export interface SharedWithUserCollectionCollections {

}

/*********************************************
* SharedWithUser
**********************************************/
export interface SharedWithUser {
	Email?: string;
	Name?: string;
}

/*********************************************
* SharedWithUserCollections
**********************************************/
export interface SharedWithUserCollections {

}

/*********************************************
* SharingLinkData
**********************************************/
export interface SharingLinkData {
	BlocksDownload?: boolean;
	Description?: string;
	Embeddable?: boolean;
	Expiration?: string;
	HasExternalGuestInvitees?: boolean;
	IsAnonymous?: boolean;
	IsCreateOnlyLink?: boolean;
	IsFormsLink?: boolean;
	IsManageListLink?: boolean;
	IsOriginatedFromSharingFlow?: boolean;
	IsReviewLink?: boolean;
	IsSharingLink?: boolean;
	IsWritable?: boolean;
	LinkKind?: number;
	ObjectType?: number;
	ObjectUniqueId?: any;
	RequiresPassword?: boolean;
	RestrictedShareMembership?: boolean;
	ShareId?: any;
}

/*********************************************
* SharingLinkDataCollections
**********************************************/
export interface SharingLinkDataCollections {

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
	Embeddable?: boolean;
	Expiration?: string;
	HasExternalGuestInvitees?: boolean;
	Invitations?: Array<SP.Sharing.LinkInvitation>;
	IsActive?: boolean;
	IsAddressBarLink?: boolean;
	IsCreateOnlyLink?: boolean;
	IsDefault?: boolean;
	IsEditLink?: boolean;
	IsFormsLink?: boolean;
	IsManageListLink?: boolean;
	IsReviewLink?: boolean;
	IsUnhealthy?: boolean;
	LastModified?: string;
	LastModifiedBy?: SP.Sharing.Principal;
	LimitUseToApplication?: boolean;
	LinkKind?: number;
	PasswordLastModified?: string;
	PasswordLastModifiedBy?: SP.Sharing.Principal;
	RedeemedUsers?: Array<SP.Sharing.LinkInvitation>;
	RequiresPassword?: boolean;
	RestrictedShareMembership?: boolean;
	Scope?: number;
	ShareId?: any;
	ShareTokenString?: string;
	SharingLinkStatus?: number;
	TrackLinkUsers?: boolean;
	Url?: string;
}

/*********************************************
* SharingLinkInfoCollections
**********************************************/
export interface SharingLinkInfoCollections {

}

/*********************************************
* UserIdInfo
**********************************************/
export interface UserIdInfo {
	NameId?: string;
	NameIdIssuer?: string;
}

/*********************************************
* UserIdInfoCollections
**********************************************/
export interface UserIdInfoCollections {

}

/*********************************************
* SmartTemplateContentType
**********************************************/
export interface SmartTemplateContentType {
	Id?: string;
	Name?: string;
	PublishStatus?: string;
}

/*********************************************
* SmartTemplateContentTypeCollections
**********************************************/
export interface SmartTemplateContentTypeCollections {

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
* AlertCreationInformationCollections
**********************************************/
export interface AlertCreationInformationCollections {

}

/*********************************************
* AppLicenseCollection
**********************************************/
export interface AppLicenseCollection {
	Items?: Array<SP.AppLicense>;
}

/*********************************************
* AppLicenseCollectionCollections
**********************************************/
export interface AppLicenseCollectionCollections {

}

/*********************************************
* AppLicense
**********************************************/
export interface AppLicense {
	RawXMLLicenseToken?: string;
}

/*********************************************
* AppLicenseCollections
**********************************************/
export interface AppLicenseCollections {

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
* AppPropertiesCollections
**********************************************/
export interface AppPropertiesCollections {

}

/*********************************************
* AppSiteContext
**********************************************/
export interface AppSiteContext {
	SiteUrl?: string;
}

/*********************************************
* AppSiteContextCollections
**********************************************/
export interface AppSiteContextCollections {

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
* AppViewCreationInfoCollections
**********************************************/
export interface AppViewCreationInfoCollections {

}

/*********************************************
* AsyncReadJobInfo
**********************************************/
export interface AsyncReadJobInfo {
	CurrentChangeToken?: string;
	JobId?: any;
}

/*********************************************
* AsyncReadJobInfoCollections
**********************************************/
export interface AsyncReadJobInfoCollections {

}

/*********************************************
* AsyncReadOptions
**********************************************/
export interface AsyncReadOptions {
	IncludeDirectDescendantsOnly?: boolean;
	IncludeExtendedMetadata?: boolean;
	IncludeSecurity?: boolean;
	IncludeVersions?: boolean;
	StartChangeToken?: string;
}

/*********************************************
* AsyncReadOptionsCollections
**********************************************/
export interface AsyncReadOptionsCollections {

}

/*********************************************
* AttachmentCreationInformation
**********************************************/
export interface AttachmentCreationInformation {
	FileName?: string;
}

/*********************************************
* AttachmentCreationInformationCollections
**********************************************/
export interface AttachmentCreationInformationCollections {

}

/*********************************************
* AutoLabellingWorkInformation
**********************************************/
export interface AutoLabellingWorkInformation {
	RoutingHint?: string;
	ScaleUnitId?: any;
	Watermark?: string;
	WorkItemType?: number;
}

/*********************************************
* AutoLabellingWorkInformationCollections
**********************************************/
export interface AutoLabellingWorkInformationCollections {

}

/*********************************************
* BasePermissions
**********************************************/
export interface BasePermissions {
	High?: number;
	Low?: number;
}

/*********************************************
* BasePermissionsCollections
**********************************************/
export interface BasePermissionsCollections {

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
* ChangeLogItemQueryCollections
**********************************************/
export interface ChangeLogItemQueryCollections {

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
	IgnoreStartTokenNotFoundError?: boolean;
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
* ChangeQueryCollections
**********************************************/
export interface ChangeQueryCollections {

}

/*********************************************
* ChangeToken
**********************************************/
export interface ChangeToken {
	StringValue?: string;
}

/*********************************************
* ChangeTokenCollections
**********************************************/
export interface ChangeTokenCollections {

}

/*********************************************
* ClassificationResult
**********************************************/
export interface ClassificationResult {
	ConfidenceScore?: number;
	ContentTypeId?: string;
	Metas?: Array<SP.KeyValue>;
	ModelId?: string;
	ModelVersion?: string;
	RetentionLabelFlags?: number;
	RetentionLabelName?: string;
	RetryCount?: number;
	SensitivityLabel?: string;
}

/*********************************************
* ClassificationResultCollections
**********************************************/
export interface ClassificationResultCollections {

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
* ListItemComplianceInfoCollections
**********************************************/
export interface ListItemComplianceInfoCollections {

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
* ContentTypeCreationInformationCollections
**********************************************/
export interface ContentTypeCreationInformationCollections {

}

/*********************************************
* ContentTypeEntityData
**********************************************/
export interface ContentTypeEntityData {
	Description?: string;
	Group?: string;
	Name?: string;
	ParentContentTypeId?: string;
}

/*********************************************
* ContentTypeEntityDataCollections
**********************************************/
export interface ContentTypeEntityDataCollections {

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
* ContextWebInformationCollections
**********************************************/
export interface ContextWebInformationCollections {

}

/*********************************************
* CopyJobProgress
**********************************************/
export interface CopyJobProgress {
	JobState?: number;
	Logs?: Array<string>;
}

/*********************************************
* CopyJobProgressCollections
**********************************************/
export interface CopyJobProgressCollections {

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
* CopyMigrationInfoCollections
**********************************************/
export interface CopyMigrationInfoCollections {

}

/*********************************************
* CopyMigrationOptions
**********************************************/
export interface CopyMigrationOptions {
	AllowSchemaMismatch?: boolean;
	AllowSmallerVersionLimitOnDestination?: boolean;
	BypassSharedLock?: boolean;
	ClientEtags?: Array<string>;
	CustomizedItemName?: Array<string>;
	ExcludeChildren?: boolean;
	IgnoreVersionHistory?: boolean;
	IncludeItemPermissions?: boolean;
	IsMoveMode?: boolean;
	MoveAndShareFileInfo?: SP.SPMoveAndShareFileInfo;
	MoveButKeepSource?: boolean;
	NameConflictBehavior?: number;
	SameWebCopyMoveOptimization?: boolean;
}

/*********************************************
* CopyMigrationOptionsCollections
**********************************************/
export interface CopyMigrationOptionsCollections {

}

/*********************************************
* SPMoveAndShareFileInfo
**********************************************/
export interface SPMoveAndShareFileInfo {
	ItemPermissionableUserIds?: Array<number>;
}

/*********************************************
* SPMoveAndShareFileInfoCollections
**********************************************/
export interface SPMoveAndShareFileInfoCollections {

}

/*********************************************
* CustomActionElementCollection
**********************************************/
export interface CustomActionElementCollection {
	Items?: Array<SP.CustomActionElement>;
}

/*********************************************
* CustomActionElementCollectionCollections
**********************************************/
export interface CustomActionElementCollectionCollections {

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
	HostProperties?: string;
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
* CustomActionElementCollections
**********************************************/
export interface CustomActionElementCollections {

}

/*********************************************
* CustomerKeyInfo
**********************************************/
export interface CustomerKeyInfo {
	AvailabilityKeyVault?: SP.CustomerKeyVaultInfo;
	PrimaryKeyVault?: SP.CustomerKeyVaultInfo;
	SecondaryKeyVault?: SP.CustomerKeyVaultInfo;
}

/*********************************************
* CustomerKeyInfoCollections
**********************************************/
export interface CustomerKeyInfoCollections {

}

/*********************************************
* CustomerKeyVaultInfo
**********************************************/
export interface CustomerKeyVaultInfo {
	KeyName?: string;
	KeyVersion?: any;
	ResourceGroupName?: string;
	SubscriptionId?: any;
	Uri?: string;
	VaultName?: string;
}

/*********************************************
* CustomerKeyVaultInfoCollections
**********************************************/
export interface CustomerKeyVaultInfoCollections {

}

/*********************************************
* CustomerKeyStatusInfo
**********************************************/
export interface CustomerKeyStatusInfo {
	AvailabilityKeyVaultUri?: string;
	PrimaryKeyVaultUri?: string;
	RecoveryEnabled?: boolean;
	RegistrationProgress?: number;
	SecondaryKeyVaultUri?: string;
	Status?: number;
}

/*********************************************
* CustomerKeyStatusInfoCollections
**********************************************/
export interface CustomerKeyStatusInfoCollections {

}

/*********************************************
* DocumentLibraryInformation
**********************************************/
export interface DocumentLibraryInformation {
	AbsoluteUrl?: string;
	DriveId?: string;
	FromCrossFarm?: boolean;
	Id?: any;
	IsDefaultDocumentLibrary?: boolean;
	Modified?: any;
	ModifiedFriendlyDisplay?: string;
	ServerRelativeUrl?: string;
	Title?: string;
}

/*********************************************
* DocumentLibraryInformationCollections
**********************************************/
export interface DocumentLibraryInformationCollections {

}

/*********************************************
* EnqueueJobInformation
**********************************************/
export interface EnqueueJobInformation {
	EnqueueJobStatus?: number;
	Message?: string;
}

/*********************************************
* EnqueueJobInformationCollections
**********************************************/
export interface EnqueueJobInformationCollections {

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
* EventReceiverDefinitionCreationInformationCollections
**********************************************/
export interface EventReceiverDefinitionCreationInformationCollections {

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
* ListDataValidationFailureCollections
**********************************************/
export interface ListDataValidationFailureCollections {

}

/*********************************************
* FieldCalculatedErrorValue
**********************************************/
export interface FieldCalculatedErrorValue {
	ErrorMessage?: string;
}

/*********************************************
* FieldCalculatedErrorValueCollections
**********************************************/
export interface FieldCalculatedErrorValueCollections {

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
* FieldCreationInformationCollections
**********************************************/
export interface FieldCreationInformationCollections {

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
* FieldGeolocationValueCollections
**********************************************/
export interface FieldGeolocationValueCollections {

}

/*********************************************
* FieldRatingScaleQuestionAnswer
**********************************************/
export interface FieldRatingScaleQuestionAnswer {
	Answer?: number;
	Question?: string;
}

/*********************************************
* FieldRatingScaleQuestionAnswerCollections
**********************************************/
export interface FieldRatingScaleQuestionAnswerCollections {

}

/*********************************************
* FieldUrlValue
**********************************************/
export interface FieldUrlValue {
	Description?: string;
	Url?: string;
}

/*********************************************
* FieldUrlValueCollections
**********************************************/
export interface FieldUrlValueCollections {

}

/*********************************************
* FileCollectionAddParameters
**********************************************/
export interface FileCollectionAddParameters {
	AutoCheckoutOnInvalidData?: boolean;
	EnsureUniqueFileName?: boolean;
	Overwrite?: boolean;
	XorHash?: string;
}

/*********************************************
* FileCollectionAddParametersCollections
**********************************************/
export interface FileCollectionAddParametersCollections {

}

/*********************************************
* FileDeleteParameters
**********************************************/
export interface FileDeleteParameters {
	BypassSharedLock?: boolean;
	ETagMatch?: string;
}

/*********************************************
* FileDeleteParametersCollections
**********************************************/
export interface FileDeleteParametersCollections {

}

/*********************************************
* FolderCollectionAddParameters
**********************************************/
export interface FolderCollectionAddParameters {
	EnsureUniqueFileName?: boolean;
	Overwrite?: boolean;
}

/*********************************************
* FolderCollectionAddParametersCollections
**********************************************/
export interface FolderCollectionAddParametersCollections {

}

/*********************************************
* FolderDeleteParameters
**********************************************/
export interface FolderDeleteParameters {
	BypassSharedLock?: boolean;
	DeleteIfEmpty?: boolean;
	ETagMatch?: string;
}

/*********************************************
* FolderDeleteParametersCollections
**********************************************/
export interface FolderDeleteParametersCollections {

}

/*********************************************
* GroupCreationInformation
**********************************************/
export interface GroupCreationInformation {
	Description?: string;
	Title?: string;
	AllowMembersEditMembership?: boolean;
	AllowRequestToJoinLeave?: boolean;
	AutoAcceptRequestToJoinLeave?: boolean;
	OnlyAllowMembersViewMembership?: boolean;
}

/*********************************************
* GroupCreationInformationCollections
**********************************************/
export interface GroupCreationInformationCollections {

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
* HashtagCollections
**********************************************/
export interface HashtagCollections {

}

/*********************************************
* HubSiteCreationInformation
**********************************************/
export interface HubSiteCreationInformation {
	Description?: string;
	EnablePermissionsSync?: boolean;
	EnforcedECTs?: string;
	EnforcedECTsVersion?: number;
	HideNameInNavigation?: boolean;
	LogoUrl?: string;
	ParentHubSiteId?: any;
	PermissionsSyncTag?: number;
	RequiresJoinApproval?: boolean;
	SiteDesignId?: any;
	SiteId?: any;
	SiteUrl?: string;
	Targets?: string;
	TenantInstanceId?: any;
	Title?: string;
}

/*********************************************
* HubSiteCreationInformationCollections
**********************************************/
export interface HubSiteCreationInformationCollections {

}

/*********************************************
* SPImageItem
**********************************************/
export interface SPImageItem {
	Name?: string;
	ServerRelativeUrl?: string;
	UniqueId?: any;
}

/*********************************************
* SPImageItemCollections
**********************************************/
export interface SPImageItemCollections {

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
* SPInvitationCreationResultCollections
**********************************************/
export interface SPInvitationCreationResultCollections {

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
* LanguageCollections
**********************************************/
export interface LanguageCollections {

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
* ListCreationInformationCollections
**********************************************/
export interface ListCreationInformationCollections {

}

/*********************************************
* ListDataSource
**********************************************/
export interface ListDataSource {
	Properties?: Array<SP.KeyValue>;
}

/*********************************************
* ListDataSourceCollections
**********************************************/
export interface ListDataSourceCollections {

}

/*********************************************
* ListDataValidationExceptionValue
**********************************************/
export interface ListDataValidationExceptionValue {
	FieldFailures?: Array<SP.ListDataValidationFailure>;
	ItemFailure?: SP.ListDataValidationFailure;
}

/*********************************************
* ListDataValidationExceptionValueCollections
**********************************************/
export interface ListDataValidationExceptionValueCollections {

}

/*********************************************
* ListItemCollectionPosition
**********************************************/
export interface ListItemCollectionPosition {
	PagingInfo?: string;
}

/*********************************************
* ListItemCollectionPositionCollections
**********************************************/
export interface ListItemCollectionPositionCollections {

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
* ListItemCreationInformationUsingPathCollections
**********************************************/
export interface ListItemCreationInformationUsingPathCollections {

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
* ListItemCreationInformationCollections
**********************************************/
export interface ListItemCreationInformationCollections {

}

/*********************************************
* ListItemDeleteParameters
**********************************************/
export interface ListItemDeleteParameters {
	BypassSharedLock?: boolean;
}

/*********************************************
* ListItemDeleteParametersCollections
**********************************************/
export interface ListItemDeleteParametersCollections {

}

/*********************************************
* ListItemFormUpdateValue
**********************************************/
export interface ListItemFormUpdateValue {
	ErrorCode?: number;
	ErrorMessage?: string;
	FieldName?: string;
	FieldValue?: string;
	HasException?: boolean;
	ItemId?: number;
}

/*********************************************
* ListItemFormUpdateValueCollections
**********************************************/
export interface ListItemFormUpdateValueCollections {

}

/*********************************************
* ListItemUpdateParameters
**********************************************/
export interface ListItemUpdateParameters {
	BypassQuotaCheck?: boolean;
	BypassSharedLock?: boolean;
}

/*********************************************
* ListItemUpdateParametersCollections
**********************************************/
export interface ListItemUpdateParametersCollections {

}

/*********************************************
* ListItemUpdateResults
**********************************************/
export interface ListItemUpdateResults {
	UpdatedData?: string;
	UpdateResults?: Array<SP.ListItemFormUpdateValue>;
}

/*********************************************
* ListItemUpdateResultsCollections
**********************************************/
export interface ListItemUpdateResultsCollections {

}

/*********************************************
* SPListRule
**********************************************/
export interface SPListRule {
	ActionType?: number;
	Condition?: string;
	CreateDate?: any;
	ID?: any;
	IsActive?: boolean;
	LastModifiedDate?: any;
	Outcome?: string;
	Owner?: string;
	Title?: string;
	TriggerType?: number;
}

/*********************************************
* SPListRuleCollections
**********************************************/
export interface SPListRuleCollections {

}

/*********************************************
* MachineLearningSampleMeta
**********************************************/
export interface MachineLearningSampleMeta {
	ExtractedText?: string;
}

/*********************************************
* MachineLearningSampleMetaCollections
**********************************************/
export interface MachineLearningSampleMetaCollections {

}

/*********************************************
* MediaServiceUpdateParameters
**********************************************/
export interface MediaServiceUpdateParameters {
	AIPLabelExtractionStatus?: number;
	ClassificationResult?: SP.ClassificationResult;
	ContentVersion?: number;
	MachineLearningSampleMeta?: SP.MachineLearningSampleMeta;
	MediaLengthInSeconds?: number;
	MediaServiceAutoKeyPoints?: string;
	MediaServiceAutoTags?: string;
	MediaServiceDateTaken?: string;
	MediaServiceEventHashCode?: string;
	MediaServiceFastMetadata?: string;
	MediaServiceGenerationTime?: string;
	MediaServiceImageTags?: string;
	MediaServiceKeyPoints?: string;
	MediaServiceLocation?: string;
	MediaServiceMetadata?: string;
	MediaServiceOCR?: string;
	MediaServiceTranscript?: string;
	SensitivityLabel?: string;
	SensitivityLabelAssignmentMethod?: number;
	XTenantLabelInfo?: string;
}

/*********************************************
* MediaServiceUpdateParametersCollections
**********************************************/
export interface MediaServiceUpdateParametersCollections {

}

/*********************************************
* MoveCopyOptions
**********************************************/
export interface MoveCopyOptions {
	KeepBoth?: boolean;
	ResetAuthorAndCreatedOnCopy?: boolean;
	RetainEditorAndModifiedOnMove?: boolean;
	ShouldBypassSharedLocks?: boolean;
}

/*********************************************
* MoveCopyOptionsCollections
**********************************************/
export interface MoveCopyOptionsCollections {

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
* ProvisionedMigrationContainersInfoCollections
**********************************************/
export interface ProvisionedMigrationContainersInfoCollections {

}

/*********************************************
* ProvisionedMigrationQueueInfo
**********************************************/
export interface ProvisionedMigrationQueueInfo {
	JobQueueUri?: string;
}

/*********************************************
* ProvisionedMigrationQueueInfoCollections
**********************************************/
export interface ProvisionedMigrationQueueInfoCollections {

}

/*********************************************
* ProvisionedTemporaryAzureContainerInfo
**********************************************/
export interface ProvisionedTemporaryAzureContainerInfo {
	EncryptionKey?: any;
	Uri?: string;
}

/*********************************************
* ProvisionedTemporaryAzureContainerInfoCollections
**********************************************/
export interface ProvisionedTemporaryAzureContainerInfoCollections {

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
* CamlQueryCollections
**********************************************/
export interface CamlQueryCollections {

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
* RecycleBinQueryInformationCollections
**********************************************/
export interface RecycleBinQueryInformationCollections {

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
* RenderListContextMenuDataParametersCollections
**********************************************/
export interface RenderListContextMenuDataParametersCollections {

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
	OverrideRowLimit?: string;
	OverrideScope?: string;
	OverrideSelectCommand?: string;
	PageFirstRow?: string;
	PageLastRow?: string;
	QueryParams?: Array<SP.KeyValue>;
	RootFolder?: string;
	RootFolderUniqueId?: string;
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
* RenderListDataOverrideParametersCollections
**********************************************/
export interface RenderListDataOverrideParametersCollections {

}

/*********************************************
* RenderListDataParameters
**********************************************/
export interface RenderListDataParameters {
	AddAllFields?: boolean;
	AddAllViewFields?: boolean;
	AddRegionalSettings?: boolean;
	AddRequiredFields?: boolean;
	AllowMultipleValueFilterForTaxonomyFields?: boolean;
	AudienceTarget?: boolean;
	DatesInUtc?: boolean;
	ExpandGroups?: boolean;
	ExpandUserField?: boolean;
	FilterOutChannelFoldersInDefaultDocLib?: boolean;
	FirstGroupOnly?: boolean;
	FolderServerRelativeUrl?: string;
	ImageFieldsToTryRewriteToCdnUrls?: string;
	MergeDefaultView?: boolean;
	ModernListBoot?: boolean;
	OriginalDate?: boolean;
	OverrideViewXml?: string;
	Paging?: string;
	RenderOptions?: number;
	RenderURLFieldInJSON?: boolean;
	ReplaceGroup?: boolean;
	ShowStubFile?: boolean;
	ViewXml?: string;
}

/*********************************************
* RenderListDataParametersCollections
**********************************************/
export interface RenderListDataParametersCollections {

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
	ViewXml?: string;
}

/*********************************************
* RenderListFilterDataParametersCollections
**********************************************/
export interface RenderListFilterDataParametersCollections {

}

/*********************************************
* SPResourceEntry
**********************************************/
export interface SPResourceEntry {
	LCID?: number;
	Value?: string;
}

/*********************************************
* SPResourceEntryCollections
**********************************************/
export interface SPResourceEntryCollections {

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
* RoleDefinitionCreationInformationCollections
**********************************************/
export interface RoleDefinitionCreationInformationCollections {

}

/*********************************************
* SensitivityLabelInfo
**********************************************/
export interface SensitivityLabelInfo {
	DisplayName?: string;
	Id?: string;
}

/*********************************************
* SensitivityLabelInfoCollections
**********************************************/
export interface SensitivityLabelInfoCollections {

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
* UpgradeInfoCollections
**********************************************/
export interface UpgradeInfoCollections {

}

/*********************************************
* SubwebQuery
**********************************************/
export interface SubwebQuery {
	ConfigurationFilter?: number;
	WebTemplateFilter?: number;
}

/*********************************************
* SubwebQueryCollections
**********************************************/
export interface SubwebQueryCollections {

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
* TenantAppInformationCollections
**********************************************/
export interface TenantAppInformationCollections {

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
* TimeZoneInformationCollections
**********************************************/
export interface TimeZoneInformationCollections {

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
* UsageInfoCollections
**********************************************/
export interface UsageInfoCollections {

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
* UserCreationInformationCollections
**********************************************/
export interface UserCreationInformationCollections {

}

/*********************************************
* ViewCreationInformation
**********************************************/
export interface ViewCreationInformation {
	AssociatedContentTypeId?: string;
	baseViewId?: number;
	CalendarViewStyles?: string;
	ColumnWidth?: string;
	Paged?: boolean;
	PersonalView?: boolean;
	Query?: string;
	RowLimit?: number;
	SetAsDefaultView?: boolean;
	Title?: string;
	ViewData?: string;
	ViewFields?: Array<string>;
	ViewTypeKind?: number;
	ViewType2?: string;
}

/*********************************************
* ViewCreationInformationCollections
**********************************************/
export interface ViewCreationInformationCollections {

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
* VisualizationAppInfoCollections
**********************************************/
export interface VisualizationAppInfoCollections {

}

/*********************************************
* VisualizationField
**********************************************/
export interface VisualizationField {
	InternalName?: string;
	Style?: string;
}

/*********************************************
* VisualizationFieldCollections
**********************************************/
export interface VisualizationFieldCollections {

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
* VisualizationStyleSetCollections
**********************************************/
export interface VisualizationStyleSetCollections {

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
* VisualizationCollections
**********************************************/
export interface VisualizationCollections {

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
* WebCreationInformationCollections
**********************************************/
export interface WebCreationInformationCollections {

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
* WebInfoCreationInformationCollections
**********************************************/
export interface WebInfoCreationInformationCollections {

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
* WebRequestInfoCollections
**********************************************/
export interface WebRequestInfoCollections {

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
* WebResponseInfoCollections
**********************************************/
export interface WebResponseInfoCollections {

}

/*********************************************
* XmlSchemaFieldCreationInformation
**********************************************/
export interface XmlSchemaFieldCreationInformation {
	Options?: number;
	SchemaXml?: string;
}

/*********************************************
* XmlSchemaFieldCreationInformationCollections
**********************************************/
export interface XmlSchemaFieldCreationInformationCollections {

}

/*********************************************
* TemplateMetaData
**********************************************/
export interface TemplateMetaData {
	Placeholders?: Array<SP.Placeholder>;
	ServerRedirectedEmbedUrl?: string;
}

/*********************************************
* TemplateMetaDataCollections
**********************************************/
export interface TemplateMetaDataCollections {

}

/*********************************************
* TranslationNotificationRecipientCollection
**********************************************/
export interface TranslationNotificationRecipientCollection {
	LanguageCode?: string;
	Recipients?: Array<SP.TranslationNotificationRecipient>;
}

/*********************************************
* TranslationNotificationRecipientCollectionCollections
**********************************************/
export interface TranslationNotificationRecipientCollectionCollections {

}

/*********************************************
* TranslationNotificationRecipient
**********************************************/
export interface TranslationNotificationRecipient {
	LoginName?: string;
}

/*********************************************
* TranslationNotificationRecipientCollections
**********************************************/
export interface TranslationNotificationRecipientCollections {

}

/*********************************************
* TranslationNotificationRecipientSetRequest
**********************************************/
export interface TranslationNotificationRecipientSetRequest {
	NotificationRecipients?: Array<SP.TranslationNotificationRecipientCollection>;
}

/*********************************************
* TranslationNotificationRecipientSetRequestCollections
**********************************************/
export interface TranslationNotificationRecipientSetRequestCollections {

}

/*********************************************
* TranslationStatusCreationRequest
**********************************************/
export interface TranslationStatusCreationRequest {
	LanguageCodes?: Array<string>;
}

/*********************************************
* TranslationStatusCreationRequestCollections
**********************************************/
export interface TranslationStatusCreationRequestCollections {

}

/*********************************************
* TranslationStatusSetRequest
**********************************************/
export interface TranslationStatusSetRequest {
	RequestedTranslations?: Array<SP.RequestedTranslation>;
}

/*********************************************
* TranslationStatusSetRequestCollections
**********************************************/
export interface TranslationStatusSetRequestCollections {

}

/*********************************************
* TranslationStatus
**********************************************/
export interface TranslationStatus {
	Culture?: string;
	FileStatus?: any;
	HasPublishedVersion?: boolean;
	LastModified?: any;
	Path?: SP.ResourcePath;
	Title?: string;
}

/*********************************************
* TranslationStatusCollections
**********************************************/
export interface TranslationStatusCollections {

}

/*********************************************
* UpdateTemplateInfo
**********************************************/
export interface UpdateTemplateInfo {
	NewName?: string;
	Operation?: number;
	Placeholders?: Array<SP.Placeholder>;
}

/*********************************************
* UpdateTemplateInfoCollections
**********************************************/
export interface UpdateTemplateInfoCollections {

}

/*********************************************
* MenuNode
**********************************************/
export interface MenuNode {
	AudienceIds?: Array<any>;
	CurrentLCID?: number;
	CustomProperties?: Array<SP.KeyValue>;
	FriendlyUrlSegment?: string;
	IsDeleted?: boolean;
	IsHidden?: boolean;
	Key?: string;
	Nodes?: Array<SP.MenuNode>;
	NodeType?: number;
	OpenInNewWindow?: boolean;
	SimpleUrl?: string;
	Title?: string;
	Translations?: Array<SP.SPResourceEntry>;
}

/*********************************************
* MenuNodeCollections
**********************************************/
export interface MenuNodeCollections {

}

/*********************************************
* MenuState
**********************************************/
export interface MenuState {
	AudienceIds?: Array<any>;
	FriendlyUrlPrefix?: string;
	IsAudienceTargetEnabledForGlobalNav?: boolean;
	Nodes?: Array<SP.MenuNode>;
	SimpleUrl?: string;
	SPSitePrefix?: string;
	SPWebPrefix?: string;
	StartingNodeKey?: string;
	StartingNodeTitle?: string;
	Version?: string;
}

/*********************************************
* MenuStateCollections
**********************************************/
export interface MenuStateCollections {

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
* NavigationNodeCreationInformationCollections
**********************************************/
export interface NavigationNodeCreationInformationCollections {

}
