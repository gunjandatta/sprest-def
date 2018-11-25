import { SP } from "../";
import { Microsoft } from "../";

/*********************************************
* ApiMetadata
**********************************************/
export interface ApiMetadata {
	Current?: () => SP.SP_ApiMetadata_Current_SP_ApiMetadata_CurrentPartner;
	Types?: () => SP.SP_ApiMetadata_Types_SP_TypeInformation_TypesPartner;
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
	Audit?: () => SP.SP_Site_Audit_SP_Audit_AuditPartner;
	CustomScriptSafeDomains?: () => SP.SP_Site_CustomScriptSafeDomains_SP_ScriptSafeDomain_CustomScriptSafeDomainsPartner;
	EventReceivers?: () => SP.SP_Site_EventReceivers_SP_EventReceiverDefinition_EventReceiversPartner;
	Features?: () => SP.SP_Site_Features_SP_Feature_FeaturesPartner;
	Owner?: () => SP.SP_Site_Owner_SP_User_OwnerPartner;
	RecycleBin?: () => SP.SP_Site_RecycleBin_SP_RecycleBinItem_RecycleBinPartner;
	RootWeb?: () => SP.SP_Site_RootWeb_SP_Web_RootWebPartner;
	SecondaryContact?: () => SP.SP_Site_SecondaryContact_SP_User_SecondaryContactPartner;
	UserCustomActions?: () => SP.SP_Site_UserCustomActions_SP_UserCustomAction_UserCustomActionsPartner;
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
export interface User extends SP.Principal {
	Alerts?: () => SP.SP_User_Alerts_SP_Alert_AlertsPartner;
	Groups?: () => SP.SP_User_Groups_SP_Group_GroupsPartner;
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
	AllProperties?: () => SP.SP_Alert_AllProperties_SP_PropertyValues_AllPropertiesPartner;
	Item?: () => SP.SP_Alert_Item_SP_ListItem_ItemPartner;
	List?: () => SP.SP_Alert_List_SP_List_ListPartner;
	User?: () => SP.SP_Alert_User_SP_User_UserPartner;
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
	FirstUniqueAncestorSecurableObject?: () => SP.SP_SecurableObject_FirstUniqueAncestorSecurableObject_SP_SecurableObject_FirstUniqueAncestorSecurableObjectPartner;
	RoleAssignments?: () => SP.SP_SecurableObject_RoleAssignments_SP_RoleAssignment_RoleAssignmentsPartner;
	HasUniqueRoleAssignments?: boolean;
}

/*********************************************
* RoleAssignment
**********************************************/
export interface RoleAssignment {
	Member?: () => SP.SP_RoleAssignment_Member_SP_Principal_MemberPartner;
	RoleDefinitionBindings?: () => SP.SP_RoleAssignment_RoleDefinitionBindings_SP_RoleDefinition_RoleDefinitionBindingsPartner;
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
export interface ListItem extends SP.SecurableObject {
	AttachmentFiles?: () => SP.SP_ListItem_AttachmentFiles_SP_Attachment_AttachmentFilesPartner;
	ContentType?: () => SP.SP_ListItem_ContentType_SP_ContentType_ContentTypePartner;
	GetDlpPolicyTip?: () => SP.SP_ListItem_GetDlpPolicyTip_SP_DlpPolicyTip_GetDlpPolicyTipPartner;
	FieldValuesAsHtml?: () => SP.SP_ListItem_FieldValuesAsHtml_SP_FieldStringValues_FieldValuesAsHtmlPartner;
	FieldValuesAsText?: () => SP.SP_ListItem_FieldValuesAsText_SP_FieldStringValues_FieldValuesAsTextPartner;
	FieldValuesForEdit?: () => SP.SP_ListItem_FieldValuesForEdit_SP_FieldStringValues_FieldValuesForEditPartner;
	File?: () => SP.SP_ListItem_File_SP_File_FilePartner;
	Folder?: () => SP.SP_ListItem_Folder_SP_Folder_FolderPartner;
	LikedByInformation?: () => Microsoft.SharePoint.Likes.SP_ListItem_LikedByInformation_Microsoft_SharePoint_Likes_likedByInformation_LikedByInformationPartner;
	ParentList?: () => SP.SP_ListItem_ParentList_SP_List_ParentListPartner;
	Properties?: () => SP.SP_ListItem_Properties_SP_PropertyValues_PropertiesPartner;
	Versions?: () => SP.SP_ListItem_Versions_SP_ListItemVersion_VersionsPartner;
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
	DescriptionResource?: () => SP.SP_ContentType_DescriptionResource_SP_UserResource_DescriptionResourcePartner;
	FieldLinks?: () => SP.SP_ContentType_FieldLinks_SP_FieldLink_FieldLinksPartner;
	Fields?: () => SP.SP_ContentType_Fields_SP_Field_FieldsPartner;
	NameResource?: () => SP.SP_ContentType_NameResource_SP_UserResource_NameResourcePartner;
	Parent?: () => SP.SP_ContentType_Parent_SP_ContentType_ParentPartner;
	WorkflowAssociations?: () => SP.Workflow.SP_ContentType_WorkflowAssociations_SP_Workflow_WorkflowAssociation_WorkflowAssociationsPartner;
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
	DescriptionResource?: () => SP.SP_Field_DescriptionResource_SP_UserResource_DescriptionResourcePartner;
	TitleResource?: () => SP.SP_Field_TitleResource_SP_UserResource_TitleResourcePartner;
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
	Author?: () => SP.SP_File_Author_SP_User_AuthorPartner;
	CheckedOutByUser?: () => SP.SP_File_CheckedOutByUser_SP_User_CheckedOutByUserPartner;
	EffectiveInformationRightsManagementSettings?: () => SP.SP_File_EffectiveInformationRightsManagementSettings_SP_EffectiveInformationRightsManagementSettings_EffectiveInformationRightsManagementSettingsPartner;
	InformationRightsManagementSettings?: () => SP.SP_File_InformationRightsManagementSettings_SP_InformationRightsManagementFileSettings_InformationRightsManagementSettingsPartner;
	ListItemAllFields?: () => SP.SP_File_ListItemAllFields_SP_ListItem_ListItemAllFieldsPartner;
	LockedByUser?: () => SP.SP_File_LockedByUser_SP_User_LockedByUserPartner;
	ModifiedBy?: () => SP.SP_File_ModifiedBy_SP_User_ModifiedByPartner;
	Properties?: () => SP.SP_File_Properties_SP_PropertyValues_PropertiesPartner;
	VersionEvents?: () => SP.SP_File_VersionEvents_SP_FileVersionEvent_VersionEventsPartner;
	Versions?: () => SP.SP_File_Versions_SP_FileVersion_VersionsPartner;
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
	CreatedBy?: () => SP.SP_FileVersion_CreatedBy_SP_User_CreatedByPartner;
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
	Files?: () => SP.SP_Folder_Files_SP_File_FilesPartner;
	ListItemAllFields?: () => SP.SP_Folder_ListItemAllFields_SP_ListItem_ListItemAllFieldsPartner;
	ParentFolder?: () => SP.SP_Folder_ParentFolder_SP_Folder_ParentFolderPartner;
	Properties?: () => SP.SP_Folder_Properties_SP_PropertyValues_PropertiesPartner;
	StorageMetrics?: () => SP.SP_Folder_StorageMetrics_SP_StorageMetrics_StorageMetricsPartner;
	Folders?: () => SP.SP_Folder_Folders_SP_Folder_FoldersPartner;
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
export interface List extends SP.SecurableObject {
	ContentTypes?: () => SP.SP_List_ContentTypes_SP_ContentType_ContentTypesPartner;
	CreatablesInfo?: () => SP.SP_List_CreatablesInfo_SP_CreatablesInfo_CreatablesInfoPartner;
	DefaultView?: () => SP.SP_List_DefaultView_SP_View_DefaultViewPartner;
	DescriptionResource?: () => SP.SP_List_DescriptionResource_SP_UserResource_DescriptionResourcePartner;
	EventReceivers?: () => SP.SP_List_EventReceivers_SP_EventReceiverDefinition_EventReceiversPartner;
	Fields?: () => SP.SP_List_Fields_SP_Field_FieldsPartner;
	Forms?: () => SP.SP_List_Forms_SP_Form_FormsPartner;
	InformationRightsManagementSettings?: () => SP.SP_List_InformationRightsManagementSettings_SP_InformationRightsManagementSettings_InformationRightsManagementSettingsPartner;
	Items?: () => SP.SP_List_Items_SP_ListItem_ItemsPartner;
	ParentWeb?: () => SP.SP_List_ParentWeb_SP_Web_ParentWebPartner;
	RootFolder?: () => SP.SP_List_RootFolder_SP_Folder_RootFolderPartner;
	Subscriptions?: () => Microsoft.SharePoint.Webhooks.SP_List_Subscriptions_Microsoft_SharePoint_Webhooks_Subscription_SubscriptionsPartner;
	TitleResource?: () => SP.SP_List_TitleResource_SP_UserResource_TitleResourcePartner;
	UserCustomActions?: () => SP.SP_List_UserCustomActions_SP_UserCustomAction_UserCustomActionsPartner;
	Views?: () => SP.SP_List_Views_SP_View_ViewsPartner;
	WorkflowAssociations?: () => SP.Workflow.SP_List_WorkflowAssociations_SP_Workflow_WorkflowAssociation_WorkflowAssociationsPartner;
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
	ViewFields?: () => SP.SP_View_ViewFields_SP_ViewFieldCollection_ViewFieldsPartner;
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
export interface Web extends SP.SecurableObject {
	Activities?: () => Microsoft.SharePoint.Activities.SP_Web_Activities_Microsoft_SharePoint_Activities_SPActivityEntity_ActivitiesPartner;
	ActivityLogger?: () => Microsoft.SharePoint.Internal.SP_Web_ActivityLogger_Microsoft_SharePoint_Internal_ActivityLogger_ActivityLoggerPartner;
	Alerts?: () => SP.SP_Web_Alerts_SP_Alert_AlertsPartner;
	AllProperties?: () => SP.SP_Web_AllProperties_SP_PropertyValues_AllPropertiesPartner;
	AppTiles?: () => SP.SP_Web_AppTiles_SP_AppTile_AppTilesPartner;
	AssociatedMemberGroup?: () => SP.SP_Web_AssociatedMemberGroup_SP_Group_AssociatedMemberGroupPartner;
	AssociatedOwnerGroup?: () => SP.SP_Web_AssociatedOwnerGroup_SP_Group_AssociatedOwnerGroupPartner;
	AssociatedVisitorGroup?: () => SP.SP_Web_AssociatedVisitorGroup_SP_Group_AssociatedVisitorGroupPartner;
	Author?: () => SP.SP_Web_Author_SP_User_AuthorPartner;
	AvailableContentTypes?: () => SP.SP_Web_AvailableContentTypes_SP_ContentType_AvailableContentTypesPartner;
	AvailableFields?: () => SP.SP_Web_AvailableFields_SP_Field_AvailableFieldsPartner;
	ClientWebParts?: () => SP.SP_Web_ClientWebParts_SP_ClientWebPart_ClientWebPartsPartner;
	ContentTypes?: () => SP.SP_Web_ContentTypes_SP_ContentType_ContentTypesPartner;
	CurrentUser?: () => SP.SP_Web_CurrentUser_SP_User_CurrentUserPartner;
	DataLeakagePreventionStatusInfo?: () => SP.SP_Web_DataLeakagePreventionStatusInfo_SP_SPDataLeakagePreventionStatusInfo_DataLeakagePreventionStatusInfoPartner;
	DescriptionResource?: () => SP.SP_Web_DescriptionResource_SP_UserResource_DescriptionResourcePartner;
	EventReceivers?: () => SP.SP_Web_EventReceivers_SP_EventReceiverDefinition_EventReceiversPartner;
	Features?: () => SP.SP_Web_Features_SP_Feature_FeaturesPartner;
	Fields?: () => SP.SP_Web_Fields_SP_Field_FieldsPartner;
	Folders?: () => SP.SP_Web_Folders_SP_Folder_FoldersPartner;
	HostedApps?: () => Microsoft.SharePoint.ClientSideComponent.SP_Web_HostedApps_Microsoft_SharePoint_ClientSideComponent_HostedAppsManager_HostedAppsPartner;
	Lists?: () => SP.SP_Web_Lists_SP_List_ListsPartner;
	ListTemplates?: () => SP.SP_Web_ListTemplates_SP_ListTemplate_ListTemplatesPartner;
	Navigation?: () => SP.SP_Web_Navigation_SP_Navigation_NavigationPartner;
	OneDriveSharedItems?: () => SP.Sharing.SP_Web_OneDriveSharedItems_SP_Sharing_SharedDocumentInfo_OneDriveSharedItemsPartner;
	ParentWeb?: () => SP.SP_Web_ParentWeb_SP_WebInformation_ParentWebPartner;
	PushNotificationSubscribers?: () => SP.SP_Web_PushNotificationSubscribers_SP_PushNotificationSubscriber_PushNotificationSubscribersPartner;
	RecycleBin?: () => SP.SP_Web_RecycleBin_SP_RecycleBinItem_RecycleBinPartner;
	RegionalSettings?: () => SP.SP_Web_RegionalSettings_SP_RegionalSettings_RegionalSettingsPartner;
	RoleDefinitions?: () => SP.SP_Web_RoleDefinitions_SP_RoleDefinition_RoleDefinitionsPartner;
	RootFolder?: () => SP.SP_Web_RootFolder_SP_Folder_RootFolderPartner;
	SiteCollectionAppCatalog?: () => Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SP_Web_SiteCollectionAppCatalog_Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionCorporateCatalogAccessor_SiteCollectionAppCatalogPartner;
	SiteGroups?: () => SP.SP_Web_SiteGroups_SP_Group_SiteGroupsPartner;
	SiteUserInfoList?: () => SP.SP_Web_SiteUserInfoList_SP_List_SiteUserInfoListPartner;
	SiteUsers?: () => SP.SP_Web_SiteUsers_SP_User_SiteUsersPartner;
	TenantAppCatalog?: () => Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SP_Web_TenantAppCatalog_Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_TenantCorporateCatalogAccessor_TenantAppCatalogPartner;
	ThemeInfo?: () => SP.SP_Web_ThemeInfo_SP_ThemeInfo_ThemeInfoPartner;
	TitleResource?: () => SP.SP_Web_TitleResource_SP_UserResource_TitleResourcePartner;
	UserCustomActions?: () => SP.SP_Web_UserCustomActions_SP_UserCustomAction_UserCustomActionsPartner;
	Webs?: () => SP.SP_Web_Webs_SP_Web_WebsPartner;
	WebInfos?: () => SP.SP_Web_WebInfos_SP_WebInformation_WebInfosPartner;
	WorkflowAssociations?: () => SP.Workflow.SP_Web_WorkflowAssociations_SP_Workflow_WorkflowAssociation_WorkflowAssociationsPartner;
	WorkflowTemplates?: () => SP.Workflow.SP_Web_WorkflowTemplates_SP_Workflow_WorkflowTemplate_WorkflowTemplatesPartner;
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
export interface Group extends SP.Principal {
	Owner?: () => SP.SP_Group_Owner_SP_Principal_OwnerPartner;
	Users?: () => SP.SP_Group_Users_SP_User_UsersPartner;
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
	QuickLaunch?: () => SP.SP_Navigation_QuickLaunch_SP_NavigationNode_QuickLaunchPartner;
	TopNavigationBar?: () => SP.SP_Navigation_TopNavigationBar_SP_NavigationNode_TopNavigationBarPartner;
	UseShared?: boolean;
}

/*********************************************
* NavigationNode
**********************************************/
export interface NavigationNode {
	Children?: () => SP.SP_NavigationNode_Children_SP_NavigationNode_ChildrenPartner;
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
	User?: () => SP.SP_PushNotificationSubscriber_User_SP_User_UserPartner;
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
	Author?: () => SP.SP_RecycleBinItem_Author_SP_User_AuthorPartner;
	DeletedBy?: () => SP.SP_RecycleBinItem_DeletedBy_SP_User_DeletedByPartner;
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
	InstalledLanguages?: () => SP.SP_RegionalSettings_InstalledLanguages_SP_LanguageCollection_InstalledLanguagesPartner;
	TimeZone?: () => SP.SP_RegionalSettings_TimeZone_SP_TimeZone_TimeZonePartner;
	TimeZones?: () => SP.SP_RegionalSettings_TimeZones_SP_TimeZone_TimeZonesPartner;
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
	DescriptionResource?: () => SP.SP_UserCustomAction_DescriptionResource_SP_UserResource_DescriptionResourcePartner;
	TitleResource?: () => SP.SP_UserCustomAction_TitleResource_SP_UserResource_TitleResourcePartner;
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
	CreatedBy?: () => SP.SP_ListItemVersion_CreatedBy_SP_User_CreatedByPartner;
	Fields?: () => SP.SP_ListItemVersion_Fields_SP_Field_FieldsPartner;
	FileVersion?: () => SP.SP_ListItemVersion_FileVersion_SP_FileVersion_FileVersionPartner;
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
	ObjectSharingInformation?: () => SP.SP_ObjectSharingSettings_ObjectSharingInformation_SP_ObjectSharingInformation_ObjectSharingInformationPartner;
	SharePointSettings?: () => SP.SP_ObjectSharingSettings_SharePointSettings_SP_SharePointSharingSettings_SharePointSettingsPartner;
	SharingPermissions?: () => SP.SP_ObjectSharingSettings_SharingPermissions_SP_SharingPermissionInformation_SharingPermissionsPartner;
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
	SharedWithUsersCollection?: () => SP.SP_ObjectSharingInformation_SharedWithUsersCollection_SP_ObjectSharingInformationUser_SharedWithUsersCollectionPartner;
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
	Principal?: () => SP.SP_ObjectSharingInformationUser_Principal_SP_Principal_PrincipalPartner;
	User?: () => SP.SP_ObjectSharingInformationUser_User_SP_User_UserPartner;
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
	PickerProperties?: () => SP.SP_SharePointSharingSettings_PickerProperties_SP_PickerSettings_PickerPropertiesPartner;
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
	GroupsSharedWith?: () => SP.SP_SharingResult_GroupsSharedWith_SP_Group_GroupsSharedWithPartner;
	GroupUsersAddedTo?: () => SP.SP_SharingResult_GroupUsersAddedTo_SP_Group_GroupUsersAddedToPartner;
	UsersWithAccessRequests?: () => SP.SP_SharingResult_UsersWithAccessRequests_SP_User_UsersWithAccessRequestsPartner;
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
	Site?: () => SP.SP_AppContextSite_Site_SP_Site_SitePartner;
	Web?: () => SP.SP_AppContextSite_Web_SP_Web_WebPartner;
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
	Creator?: () => SP.SP_ChangeList_Creator_SP_User_CreatorPartner;
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
	CheckedOutBy?: () => SP.SP_CheckedOutFile_CheckedOutBy_SP_User_CheckedOutByPartner;
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
	Current?: () => SP.SP_RequestContext_Current_SP_RequestContext_CurrentPartner;
	List?: () => SP.SP_RequestContext_List_SP_List_ListPartner;
	Site?: () => SP.SP_RequestContext_Site_SP_Site_SitePartner;
	Web?: () => SP.SP_RequestContext_Web_SP_Web_WebPartner;
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
	LookupList?: () => SP.SP_RelatedField_LookupList_SP_List_LookupListPartner;
	FieldId?: any;
	ListId?: any;
	RelationshipDeleteBehavior?: number;
	WebId?: any;
}

/*********************************************
* RemoteWeb
**********************************************/
export interface RemoteWeb {
	Web?: () => SP.SP_RemoteWeb_Web_SP_Web_WebPartner;
	CanSendEmail?: boolean;
	ShareByEmailEnabled?: boolean;
	ShareByLinkEnabled?: boolean;
}

/*********************************************
* RequestUserContext
**********************************************/
export interface RequestUserContext {
	Current?: () => SP.SP_RequestUserContext_Current_SP_RequestUserContext_CurrentPartner;
	User?: () => SP.SP_RequestUserContext_User_SP_User_UserPartner;
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
	AppMappedViews?: () => SP.SP_VisualizationAppSynchronizationResult_AppMappedViews_SP_View_AppMappedViewsPartner;
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
	Current?: () => SP.SP_TenantSettings_Current_SP_TenantSettings_CurrentPartner;
	CorporateCatalogUrl?: string;
}

/*********************************************
* AppPrincipalIdentityProvider
**********************************************/
export interface AppPrincipalIdentityProvider {
	External?: () => SP.SP_AppPrincipalIdentityProvider_External_SP_AppPrincipalIdentityProvider_ExternalPartner;
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
