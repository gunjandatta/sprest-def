import { IBaseCollection } from "../";
import { SP } from "../";
import { IBaseExecution } from "../";
import { Microsoft } from "../";

/*********************************************
* IApiMetadata
**********************************************/
export interface IApiMetadata extends ApiMetadataProps,ApiMetadataMethods,IBaseExecution<ApiMetadata> {

}

/*********************************************
* ApiMetadata
**********************************************/
export interface ApiMetadata extends ApiMetadataProps, ApiMetadataMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ApiMetadataProps
**********************************************/
export interface ApiMetadataProps {
	Current<T=SP.ApiMetadata>(): IBaseExecution<T>;
	Types<T=SP.TypeInformation>(): IBaseCollection<T>;
}

/*********************************************
* ApiMetadataMethods
**********************************************/
export interface ApiMetadataMethods {

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
* ISite
**********************************************/
export interface ISite extends SiteProps,SiteMethods,IBaseExecution<Site> {

}

/*********************************************
* Site
**********************************************/
export interface Site extends SiteProps, SiteMethods {
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
* SiteProps
**********************************************/
export interface SiteProps {
	Audit<T=SP.Audit>(): IBaseExecution<T>;
	CustomScriptSafeDomains<T=SP.ScriptSafeDomain>(): IBaseCollection<T>;
	EventReceivers<T=SP.EventReceiverDefinition>(): IBaseCollection<T>;
	Features<T=SP.Feature>(): IBaseCollection<T>;
	Owner<T=SP.User>(): IBaseExecution<T>;
	RecycleBin<T=SP.RecycleBinItem>(): IBaseCollection<T>;
	RootWeb<T=SP.Web>(): IBaseExecution<T>;
	SecondaryContact<T=SP.User>(): IBaseExecution<T>;
	UserCustomActions<T=SP.UserCustomAction>(): IBaseCollection<T>;
}

/*********************************************
* SiteMethods
**********************************************/
export interface SiteMethods {
	createCopyJob<T=SP.CopyMigrationInfo>(exportObjectUris?: Array<string>, destinationUri?: string, options?: SP.CopyMigrationOptions): IBaseExecution<T>;
	createCopyJobs<T=Array<SP.CopyMigrationInfo>>(exportObjectUris?: Array<string>, destinationUri?: string, options?: SP.CopyMigrationOptions): IBaseExecution<T>;
	createMigrationIngestionJob<T=any>(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string, ingestionTaskKey?: SP.IngestionTaskKey): IBaseExecution<T>;
	createMigrationJob<T=any>(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string): IBaseExecution<T>;
	createMigrationJobEncrypted<T=any>(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string, options?: SP.EncryptionOption): IBaseExecution<T>;
	createPreviewSPSite<T=any>(upgrade?: boolean, sendemail?: boolean): IBaseExecution<T>;
	deleteMigrationJob<T=boolean>(id?: any): IBaseExecution<T>;
	extendUpgradeReminderDate<T=any>(): IBaseExecution<T>;
	getBringYourOwnKeySiteStatus<T=SP.CustomerKeyStatusInfo>(): IBaseExecution<T>;
	getBringYourOwnKeyTenantStatus<T=SP.CustomerKeyStatusInfo>(): IBaseExecution<T>;
	getCatalog<T=SP.List>(typeCatalog?: number): IBaseExecution<T>;
	getChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): IBaseExecution<T>;
	getCopyJobProgress<T=SP.CopyJobProgress>(copyJobInfo?: SP.CopyMigrationInfo): IBaseExecution<T>;
	getHubSiteJoinApprovalCorrelationId<T=string>(): IBaseExecution<T>;
	getMigrationJobStatus<T=number>(id?: any): IBaseExecution<T>;
	getMigrationStatus<T=Array<SP.SPMigrationJobStatus>>(): IBaseExecution<T>;
	getRecycleBinItems<T=Array<SP.RecycleBinItem>>(pagingInfo?: string, rowLimit?: number, isAscending?: boolean, orderBy?: number, itemState?: number): IBaseExecution<T>;
	getWebPath<T=SP.ResourcePath>(siteId?: any, webId?: any): IBaseExecution<T>;
	getWebTemplates<T=Array<SP.WebTemplate>>(LCID?: number, overrideCompatLevel?: number): IBaseExecution<T>;
	invalidate<T=any>(): IBaseExecution<T>;
	joinHubSite<T=any>(hubSiteId?: any, approvalToken?: string, approvalCorrelationId?: string): IBaseExecution<T>;
	makeHubSite<T=SP.HubSite>(): IBaseExecution<T>;
	multiGeoCopyJob<T=any>(jobId?: any, userId?: number, binaryPayload?: any): IBaseExecution<T>;
	needsUpgradeByType<T=boolean>(versionUpgrade?: boolean, recursive?: boolean): IBaseExecution<T>;
	onboardTenantForBringYourOwnKey<T=SP.CustomerKeyStatusInfo>(keyInfo?: SP.CustomerKeyInfo): IBaseExecution<T>;
	onHubSiteJoinRequestApproved<T=string>(joiningSiteId?: any): IBaseExecution<T>;
	onHubSiteJoinRequestCanceled<T=any>(approvalCorrelationId?: string): IBaseExecution<T>;
	onHubSiteJoinRequestStarted<T=any>(approvalCorrelationId?: string): IBaseExecution<T>;
	openWeb<T=SP.Web>(strUrl?: string): IBaseExecution<T>;
	openWebById<T=SP.Web>(gWebId?: any): IBaseExecution<T>;
	openWebUsingPath<T=SP.Web>(path?: SP.ResourcePath): IBaseExecution<T>;
	provisionMigrationContainers<T=SP.ProvisionedMigrationContainersInfo>(): IBaseExecution<T>;
	provisionMigrationQueue<T=SP.ProvisionedMigrationQueueInfo>(): IBaseExecution<T>;
	recoverTenantForBringYourOwnKey<T=SP.CustomerKeyStatusInfo>(keyInfo?: SP.CustomerKeyInfo): IBaseExecution<T>;
	registerHubSite<T=SP.HubSite>(creationInformation?: SP.HubSiteCreationInformation): IBaseExecution<T>;
	removeHubSite<T=any>(): IBaseExecution<T>;
	rollTenantBringYourOwnKey<T=SP.CustomerKeyStatusInfo>(keyType?: number, keyVaultInfo?: SP.CustomerKeyVaultInfo): IBaseExecution<T>;
	runHealthCheck<T=SP.SiteHealth.SiteHealthSummary>(ruleId?: any, bRepair?: boolean, bRunAlways?: boolean): IBaseExecution<T>;
	runUpgradeSiteSession<T=any>(versionUpgrade?: boolean, queueOnly?: boolean, sendEmail?: boolean): IBaseExecution<T>;
	unregisterHubSite<T=any>(): IBaseExecution<T>;
	updateClientObjectModelUseRemoteAPIsPermissionSetting<T=any>(requireUseRemoteAPIs?: boolean): IBaseExecution<T>;
	validateHubSiteJoinApprovalToken<T=boolean>(joiningSiteId?: any, approvalToken?: string): IBaseExecution<T>;
}

/*********************************************
* IAudit
**********************************************/
export interface IAudit extends AuditProps,AuditMethods,IBaseExecution<Audit> {

}

/*********************************************
* Audit
**********************************************/
export interface Audit extends AuditProps, AuditMethods {
	AuditFlags?: number;
}

/*********************************************
* AuditProps
**********************************************/
export interface AuditProps {

}

/*********************************************
* AuditMethods
**********************************************/
export interface AuditMethods {
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IScriptSafeDomain
**********************************************/
export interface IScriptSafeDomain extends ScriptSafeDomainProps,ScriptSafeDomainMethods,IBaseExecution<ScriptSafeDomain> {

}

/*********************************************
* ScriptSafeDomain
**********************************************/
export interface ScriptSafeDomain extends ScriptSafeDomainProps, ScriptSafeDomainMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ScriptSafeDomainProps
**********************************************/
export interface ScriptSafeDomainProps {

}

/*********************************************
* ScriptSafeDomainMethods
**********************************************/
export interface ScriptSafeDomainMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IEventReceiverDefinition
**********************************************/
export interface IEventReceiverDefinition extends EventReceiverDefinitionProps,EventReceiverDefinitionMethods,IBaseExecution<EventReceiverDefinition> {

}

/*********************************************
* EventReceiverDefinition
**********************************************/
export interface EventReceiverDefinition extends EventReceiverDefinitionProps, EventReceiverDefinitionMethods {
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
* EventReceiverDefinitionProps
**********************************************/
export interface EventReceiverDefinitionProps {

}

/*********************************************
* EventReceiverDefinitionMethods
**********************************************/
export interface EventReceiverDefinitionMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
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
* IUser
**********************************************/
export interface IUser extends UserProps,UserMethods,IBaseExecution<User> {

}

/*********************************************
* User
**********************************************/
export interface User extends SP.Principal, UserProps, UserMethods {
	AadObjectId?: SP.UserIdInfo;
	Email?: string;
	IsEmailAuthenticationGuestUser?: boolean;
	IsShareByEmailGuestUser?: boolean;
	IsSiteAdmin?: boolean;
	UserId?: SP.UserIdInfo;
}

/*********************************************
* UserProps
**********************************************/
export interface UserProps {
	Alerts<T=SP.Alert>(): IBaseCollection<T>;
	Groups<T=SP.Group>(): IBaseCollection<T>;
}

/*********************************************
* UserMethods
**********************************************/
export interface UserMethods {
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IAlert
**********************************************/
export interface IAlert extends AlertProps,AlertMethods,IBaseExecution<Alert> {

}

/*********************************************
* Alert
**********************************************/
export interface Alert extends AlertProps, AlertMethods {
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
* AlertProps
**********************************************/
export interface AlertProps {
	AllProperties<T=SP.PropertyValues>(): IBaseExecution<T>;
	Item<T=SP.ListItem>(): IBaseExecution<T>;
	List<T=SP.List>(): IBaseExecution<T>;
	User<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* AlertMethods
**********************************************/
export interface AlertMethods {
	updateAlert<T=any>(): IBaseExecution<T>;
}

/*********************************************
* PropertyValues
**********************************************/
export interface PropertyValues {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ISecurableObject
**********************************************/
export interface ISecurableObject extends SecurableObjectProps,SecurableObjectMethods,IBaseExecution<SecurableObject> {

}

/*********************************************
* SecurableObject
**********************************************/
export interface SecurableObject extends SecurableObjectProps, SecurableObjectMethods {
	HasUniqueRoleAssignments?: boolean;
}

/*********************************************
* SecurableObjectProps
**********************************************/
export interface SecurableObjectProps {
	FirstUniqueAncestorSecurableObject<T=SP.SecurableObject>(): IBaseExecution<T>;
	RoleAssignments<T=SP.RoleAssignment>(): IBaseCollection<T>;
}

/*********************************************
* SecurableObjectMethods
**********************************************/
export interface SecurableObjectMethods {
	breakRoleInheritance<T=any>(copyRoleAssignments?: boolean, clearSubscopes?: boolean): IBaseExecution<T>;
	resetRoleInheritance<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IRoleAssignment
**********************************************/
export interface IRoleAssignment extends RoleAssignmentProps,RoleAssignmentMethods,IBaseExecution<RoleAssignment> {

}

/*********************************************
* RoleAssignment
**********************************************/
export interface RoleAssignment extends RoleAssignmentProps, RoleAssignmentMethods {
	PrincipalId?: number;
}

/*********************************************
* RoleAssignmentProps
**********************************************/
export interface RoleAssignmentProps {
	Member<T=SP.Principal>(): IBaseExecution<T>;
	RoleDefinitionBindings<T=SP.RoleDefinition>(): IBaseCollection<T>;
}

/*********************************************
* RoleAssignmentMethods
**********************************************/
export interface RoleAssignmentMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IRoleDefinition
**********************************************/
export interface IRoleDefinition extends RoleDefinitionProps,RoleDefinitionMethods,IBaseExecution<RoleDefinition> {

}

/*********************************************
* RoleDefinition
**********************************************/
export interface RoleDefinition extends RoleDefinitionProps, RoleDefinitionMethods {
	BasePermissions?: SP.BasePermissions;
	Description?: string;
	Hidden?: boolean;
	Id?: number;
	Name?: string;
	Order?: number;
	RoleTypeKind?: number;
}

/*********************************************
* RoleDefinitionProps
**********************************************/
export interface RoleDefinitionProps {

}

/*********************************************
* RoleDefinitionMethods
**********************************************/
export interface RoleDefinitionMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IListItem
**********************************************/
export interface IListItem extends ListItemProps,ListItemMethods,IBaseExecution<ListItem> {

}

/*********************************************
* ListItem
**********************************************/
export interface ListItem extends SP.SecurableObject, ListItemProps, ListItemMethods {
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
* ListItemProps
**********************************************/
export interface ListItemProps {
	AttachmentFiles<T=SP.Attachment>(): IBaseCollection<T>;
	ContentType<T=SP.ContentType>(): IBaseExecution<T>;
	GetDlpPolicyTip<T=SP.DlpPolicyTip>(): IBaseExecution<T>;
	FieldValuesAsHtml<T=SP.FieldStringValues>(): IBaseExecution<T>;
	FieldValuesAsText<T=SP.FieldStringValues>(): IBaseExecution<T>;
	FieldValuesForEdit<T=SP.FieldStringValues>(): IBaseExecution<T>;
	File<T=SP.File>(): IBaseExecution<T>;
	Folder<T=SP.Folder>(): IBaseExecution<T>;
	LikedByInformation<T=Microsoft.SharePoint.Likes.likedByInformation>(): IBaseExecution<T>;
	ParentList<T=SP.List>(): IBaseExecution<T>;
	Properties<T=SP.PropertyValues>(): IBaseExecution<T>;
	Versions<T=SP.ListItemVersion>(): IBaseCollection<T>;
}

/*********************************************
* ListItemMethods
**********************************************/
export interface ListItemMethods {
	breakRoleInheritance<T=any>(copyRoleAssignments?: boolean, clearSubscopes?: boolean): IBaseExecution<T>;
	resetRoleInheritance<T=any>(): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	getChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): IBaseExecution<T>;
	getHashtags<T=Array<SP.Hashtag>>(): IBaseExecution<T>;
	getUserEffectivePermissions<T=SP.BasePermissions>(userName?: string): IBaseExecution<T>;
	getWOPIFrameUrl<T=string>(action?: number): IBaseExecution<T>;
	mediaServiceUpdate<T=any>(parameters?: SP.MediaServiceUpdateParameters): IBaseExecution<T>;
	mediaServiceUpdateV2<T=any>(parameters?: SP.MediaServiceUpdateParameters, eventFiringEnabled?: boolean): IBaseExecution<T>;
	overridePolicyTip<T=number>(userAction?: number, justification?: string): IBaseExecution<T>;
	parseAndSetFieldValue<T=any>(fieldName?: string, value?: string): IBaseExecution<T>;
	recycle<T=any>(): IBaseExecution<T>;
	setCommentsDisabled<T=any>(value?: boolean): IBaseExecution<T>;
	setComplianceTag<T=any>(complianceTag?: string, isTagPolicyHold?: boolean, isTagPolicyRecord?: boolean, isEventBasedTag?: boolean, isTagSuperLock?: boolean): IBaseExecution<T>;
	setComplianceTagWithExplicitMetasUpdate<T=any>(complianceTag?: string, complianceFlags?: number, complianceTagWrittenTime?: any, userEmailAddress?: string): IBaseExecution<T>;
	setComplianceTagWithHold<T=any>(complianceTag?: string): IBaseExecution<T>;
	setComplianceTagWithMetaInfo<T=any>(complianceTag?: string, blockDelete?: boolean, blockEdit?: boolean, complianceTagWrittenTime?: any, userEmailAddress?: string, isTagSuperLock?: boolean): IBaseExecution<T>;
	setComplianceTagWithNoHold<T=any>(complianceTag?: string): IBaseExecution<T>;
	setComplianceTagWithRecord<T=any>(complianceTag?: string): IBaseExecution<T>;
	systemUpdate<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
	updateEx<T=any>(parameters?: SP.ListItemUpdateParameters): IBaseExecution<T>;
	updateHashtags<T=Array<SP.Hashtag>>(hashtagsToAdd?: Array<SP.Hashtag>, hashtagsToRemove?: Array<SP.Hashtag>): IBaseExecution<T>;
	updateOverwriteVersion<T=any>(): IBaseExecution<T>;
	validateUpdateListItem<T=Array<SP.ListItemFormUpdateValue>>(formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): IBaseExecution<T>;
}

/*********************************************
* IAttachment
**********************************************/
export interface IAttachment extends AttachmentProps,AttachmentMethods,IBaseExecution<Attachment> {

}

/*********************************************
* Attachment
**********************************************/
export interface Attachment extends AttachmentProps, AttachmentMethods {
	FileName?: string;
	FileNameAsPath?: SP.ResourcePath;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
}

/*********************************************
* AttachmentProps
**********************************************/
export interface AttachmentProps {

}

/*********************************************
* AttachmentMethods
**********************************************/
export interface AttachmentMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	recycleObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IContentType
**********************************************/
export interface IContentType extends ContentTypeProps,ContentTypeMethods,IBaseExecution<ContentType> {

}

/*********************************************
* ContentType
**********************************************/
export interface ContentType extends ContentTypeProps, ContentTypeMethods {
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
* ContentTypeProps
**********************************************/
export interface ContentTypeProps {
	DescriptionResource<T=SP.UserResource>(): IBaseExecution<T>;
	FieldLinks<T=SP.FieldLink>(): IBaseCollection<T>;
	Fields<T=SP.Field>(): IBaseCollection<T>;
	NameResource<T=SP.UserResource>(): IBaseExecution<T>;
	Parent<T=SP.ContentType>(): IBaseExecution<T>;
	WorkflowAssociations<T=SP.Workflow.WorkflowAssociation>(): IBaseCollection<T>;
}

/*********************************************
* ContentTypeMethods
**********************************************/
export interface ContentTypeMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(updateChildren?: boolean): IBaseExecution<T>;
}

/*********************************************
* IUserResource
**********************************************/
export interface IUserResource extends UserResourceProps,UserResourceMethods,IBaseExecution<UserResource> {

}

/*********************************************
* UserResource
**********************************************/
export interface UserResource extends UserResourceProps, UserResourceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserResourceProps
**********************************************/
export interface UserResourceProps {

}

/*********************************************
* UserResourceMethods
**********************************************/
export interface UserResourceMethods {
	getValueForUICulture<T=string>(cultureName?: string): IBaseExecution<T>;
	setValueForUICulture<T=any>(cultureName?: string, value?: string): IBaseExecution<T>;
}

/*********************************************
* IFieldLink
**********************************************/
export interface IFieldLink extends FieldLinkProps,FieldLinkMethods,IBaseExecution<FieldLink> {

}

/*********************************************
* FieldLink
**********************************************/
export interface FieldLink extends FieldLinkProps, FieldLinkMethods {
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
* FieldLinkProps
**********************************************/
export interface FieldLinkProps {

}

/*********************************************
* FieldLinkMethods
**********************************************/
export interface FieldLinkMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IField
**********************************************/
export interface IField extends FieldProps,FieldMethods,IBaseExecution<Field> {

}

/*********************************************
* Field
**********************************************/
export interface Field extends FieldProps, FieldMethods {
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
* FieldProps
**********************************************/
export interface FieldProps {
	DescriptionResource<T=SP.UserResource>(): IBaseExecution<T>;
	TitleResource<T=SP.UserResource>(): IBaseExecution<T>;
}

/*********************************************
* FieldMethods
**********************************************/
export interface FieldMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
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
* IFile
**********************************************/
export interface IFile extends FileProps,FileMethods,IBaseExecution<File> {

}

/*********************************************
* File
**********************************************/
export interface File extends FileProps, FileMethods {
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
* FileProps
**********************************************/
export interface FileProps {
	Author<T=SP.User>(): IBaseExecution<T>;
	CheckedOutByUser<T=SP.User>(): IBaseExecution<T>;
	EffectiveInformationRightsManagementSettings<T=SP.EffectiveInformationRightsManagementSettings>(): IBaseExecution<T>;
	InformationRightsManagementSettings<T=SP.InformationRightsManagementFileSettings>(): IBaseExecution<T>;
	ListItemAllFields<T=SP.ListItem>(): IBaseExecution<T>;
	LockedByUser<T=SP.User>(): IBaseExecution<T>;
	ModifiedBy<T=SP.User>(): IBaseExecution<T>;
	Properties<T=SP.PropertyValues>(): IBaseExecution<T>;
	VersionEvents<T=SP.FileVersionEvent>(): IBaseCollection<T>;
	Versions<T=SP.FileVersion>(): IBaseCollection<T>;
}

/*********************************************
* FileMethods
**********************************************/
export interface FileMethods {
	addActivities<T=Array<Microsoft.SharePoint.Activities.ActivityClientResponse>>(activities?: Array<Microsoft.SharePoint.Activities.ActivityClientRequest>): IBaseExecution<T>;
	addClientActivities<T=Array<Microsoft.SharePoint.Activities.ActivityClientResponse>>(activitiesStream?: any): IBaseExecution<T>;
	approve<T=any>(comment?: string): IBaseExecution<T>;
	cancelUpload<T=any>(uploadId?: any): IBaseExecution<T>;
	checkAccessAndPostViewAuditEvent<T=boolean>(): IBaseExecution<T>;
	checkIn<T=any>(comment?: string, checkInType?: number): IBaseExecution<T>;
	checkOut<T=any>(): IBaseExecution<T>;
	continueUpload<T=number>(uploadId?: any, fileOffset?: number, stream?: any): IBaseExecution<T>;
	copyTo<T=any>(strNewUrl?: string, bOverWrite?: boolean): IBaseExecution<T>;
	copyToUsingPath<T=any>(DecodedUrl?: string, bOverWrite?: boolean): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	deny<T=any>(comment?: string): IBaseExecution<T>;
	executeCobaltRequest<T=any>(inputStream?: any): IBaseExecution<T>;
	finishUpload<T=SP.File>(uploadId?: any, fileOffset?: number, stream?: any): IBaseExecution<T>;
	getFileUserValue<T=Microsoft.SharePoint.UserActions.officeFileUserValueResponse>(key?: string): IBaseExecution<T>;
	getImagePreviewUri<T=string>(width?: number, height?: number, clientType?: string): IBaseExecution<T>;
	getImagePreviewUrl<T=string>(width?: number, height?: number, clientType?: string): IBaseExecution<T>;
	getLimitedWebPartManager<T=SP.WebParts.LimitedWebPartManager>(scope?: number): IBaseExecution<T>;
	getPreAuthorizedAccessUrl<T=string>(expirationHours?: number): IBaseExecution<T>;
	getUploadStatus<T=SP.Utilities.UploadStatus>(uploadId?: any): IBaseExecution<T>;
	getWOPIFrameUrl<T=string>(action?: number): IBaseExecution<T>;
	moveTo<T=any>(newUrl?: string, flags?: number): IBaseExecution<T>;
	moveToUsingPath<T=any>(DecodedUrl?: string, moveOperations?: number): IBaseExecution<T>;
	openBinaryStream<T=any>(): IBaseExecution<T>;
	openBinaryStreamWithOptions<T=any>(openOptions?: number): IBaseExecution<T>;
	publish<T=any>(comment?: string): IBaseExecution<T>;
	recycle<T=any>(): IBaseExecution<T>;
	recycleWithETag<T=any>(etagMatch?: string): IBaseExecution<T>;
	saveBinaryStream<T=any>(file?: any): IBaseExecution<T>;
	setFileUserValue<T=Microsoft.SharePoint.UserActions.officeFileUserValueResponse>(key?: string, value?: string): IBaseExecution<T>;
	startUpload<T=number>(uploadId?: any, stream?: any): IBaseExecution<T>;
	undoCheckOut<T=any>(): IBaseExecution<T>;
	unPublish<T=any>(comment?: string): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
	updateVirusInfo<T=any>(virusStatus?: any, virusMessage?: string, etagToCheck?: string): IBaseExecution<T>;
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
* IInformationRightsManagementFileSettings
**********************************************/
export interface IInformationRightsManagementFileSettings extends InformationRightsManagementFileSettingsProps,InformationRightsManagementFileSettingsMethods,IBaseExecution<InformationRightsManagementFileSettings> {

}

/*********************************************
* InformationRightsManagementFileSettings
**********************************************/
export interface InformationRightsManagementFileSettings extends InformationRightsManagementFileSettingsProps, InformationRightsManagementFileSettingsMethods {
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
* InformationRightsManagementFileSettingsProps
**********************************************/
export interface InformationRightsManagementFileSettingsProps {

}

/*********************************************
* InformationRightsManagementFileSettingsMethods
**********************************************/
export interface InformationRightsManagementFileSettingsMethods {
	reset<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
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
* IFileVersion
**********************************************/
export interface IFileVersion extends FileVersionProps,FileVersionMethods,IBaseExecution<FileVersion> {

}

/*********************************************
* FileVersion
**********************************************/
export interface FileVersion extends FileVersionProps, FileVersionMethods {
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
* FileVersionProps
**********************************************/
export interface FileVersionProps {
	CreatedBy<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* FileVersionMethods
**********************************************/
export interface FileVersionMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	openBinaryStream<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFolder
**********************************************/
export interface IFolder extends FolderProps,FolderMethods,IBaseExecution<Folder> {

}

/*********************************************
* Folder
**********************************************/
export interface Folder extends FolderProps, FolderMethods {
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
* FolderProps
**********************************************/
export interface FolderProps {
	Files<T=SP.File>(): IBaseCollection<T>;
	ListItemAllFields<T=SP.ListItem>(): IBaseExecution<T>;
	ParentFolder<T=SP.Folder>(): IBaseExecution<T>;
	Properties<T=SP.PropertyValues>(): IBaseExecution<T>;
	StorageMetrics<T=SP.StorageMetrics>(): IBaseExecution<T>;
	Folders<T=SP.Folder>(): IBaseCollection<T>;
}

/*********************************************
* FolderMethods
**********************************************/
export interface FolderMethods {
	addSubFolder<T=any>(leafName?: string): IBaseExecution<T>;
	addSubFolderUsingPath<T=any>(DecodedUrl?: string): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	getChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): IBaseExecution<T>;
	getListItemChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): IBaseExecution<T>;
	moveTo<T=any>(newUrl?: string): IBaseExecution<T>;
	moveToUsingPath<T=any>(DecodedUrl?: string): IBaseExecution<T>;
	recycle<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
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
* IList
**********************************************/
export interface IList extends ListProps,ListMethods,IBaseExecution<List> {

}

/*********************************************
* List
**********************************************/
export interface List extends SP.SecurableObject, ListProps, ListMethods {
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
* ListProps
**********************************************/
export interface ListProps {
	ContentTypes<T=SP.ContentType>(): IBaseCollection<T>;
	CreatablesInfo<T=SP.CreatablesInfo>(): IBaseExecution<T>;
	DefaultView<T=SP.View>(): IBaseExecution<T>;
	DescriptionResource<T=SP.UserResource>(): IBaseExecution<T>;
	EventReceivers<T=SP.EventReceiverDefinition>(): IBaseCollection<T>;
	Fields<T=SP.Field>(): IBaseCollection<T>;
	Forms<T=SP.Form>(): IBaseCollection<T>;
	InformationRightsManagementSettings<T=SP.InformationRightsManagementSettings>(): IBaseExecution<T>;
	Items<T=SP.ListItem>(): IBaseCollection<T>;
	ParentWeb<T=SP.Web>(): IBaseExecution<T>;
	RootFolder<T=SP.Folder>(): IBaseExecution<T>;
	Subscriptions<T=Microsoft.SharePoint.Webhooks.Subscription>(): IBaseCollection<T>;
	TitleResource<T=SP.UserResource>(): IBaseExecution<T>;
	UserCustomActions<T=SP.UserCustomAction>(): IBaseCollection<T>;
	Views<T=SP.View>(): IBaseCollection<T>;
	WorkflowAssociations<T=SP.Workflow.WorkflowAssociation>(): IBaseCollection<T>;
}

/*********************************************
* ListMethods
**********************************************/
export interface ListMethods {
	breakRoleInheritance<T=any>(copyRoleAssignments?: boolean, clearSubscopes?: boolean): IBaseExecution<T>;
	resetRoleInheritance<T=any>(): IBaseExecution<T>;
	addItem<T=SP.ListItem>(parameters?: SP.ListItemCreationInformation): IBaseExecution<T>;
	addItemUsingPath<T=SP.ListItem>(parameters?: SP.ListItemCreationInformationUsingPath): IBaseExecution<T>;
	addValidateUpdateItem<T=Array<SP.ListItemFormUpdateValue>>(listItemCreateInfo?: SP.ListItemCreationInformation, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): IBaseExecution<T>;
	addValidateUpdateItemUsingPath<T=Array<SP.ListItemFormUpdateValue>>(listItemCreateInfo?: SP.ListItemCreationInformationUsingPath, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): IBaseExecution<T>;
	bulkValidateUpdateListItems<T=Array<SP.ListItemFormUpdateValue>>(itemIds?: Array<number>, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string, folderPath?: string): IBaseExecution<T>;
	createDocumentAndGetEditLink<T=string>(fileName?: string, folderPath?: string, documentTemplateType?: number, templateUrl?: string): IBaseExecution<T>;
	createDocumentWithDefaultName<T=string>(folderPath?: string, extension?: string): IBaseExecution<T>;
	createMappedView<T=SP.View>(appViewCreationInfo?: SP.AppViewCreationInfo, visualizationTarget?: number): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	ensureSignoffStatusField<T=SP.Field>(): IBaseExecution<T>;
	getBloomFilter<T=SP.ListBloomFilter>(startItemId?: number): IBaseExecution<T>;
	getBloomFilterWithCustomFields<T=SP.ListBloomFilter>(listItemStartingID?: number, internalFieldNames?: Array<string>): IBaseExecution<T>;
	getChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): IBaseExecution<T>;
	getCheckedOutFiles<T=Array<SP.CheckedOutFile>>(): IBaseExecution<T>;
	getItemById<T=SP.ListItem>(id?: number): IBaseExecution<T>;
	getItemByStringId<T=SP.ListItem>(sId?: string): IBaseExecution<T>;
	getItemByUniqueId<T=SP.ListItem>(uniqueId?: any): IBaseExecution<T>;
	getItems<T=Array<SP.ListItem>>(query?: SP.CamlQuery): IBaseExecution<T>;
	getListItemChangesSinceToken<T=any>(query?: SP.ChangeLogItemQuery): IBaseExecution<T>;
	getMappedApp<T=SP.VisualizationAppSynchronizationResult>(appId?: any, visualizationAppTarget?: number): IBaseExecution<T>;
	getMappedApps<T=SP.VisualizationAppSynchronizationResult>(visualizationAppTarget?: number): IBaseExecution<T>;
	getRelatedFields<T=Array<SP.RelatedField>>(): IBaseExecution<T>;
	getSpecialFolderUrl<T=string>(type?: number, bForceCreate?: boolean, existingFolderGuid?: any): IBaseExecution<T>;
	getUserEffectivePermissions<T=SP.BasePermissions>(userName?: string): IBaseExecution<T>;
	getView<T=SP.View>(viewGuid?: any): IBaseExecution<T>;
	getWebDavUrl<T=string>(sourceUrl?: string): IBaseExecution<T>;
	publishMappedView<T=SP.View>(appId?: any, visualizationTarget?: number): IBaseExecution<T>;
	recycle<T=any>(): IBaseExecution<T>;
	renderExtendedListFormData<T=string>(itemId?: number, formId?: string, mode?: number, options?: number, cutoffVersion?: number): IBaseExecution<T>;
	renderListContextMenuData<T=any>(CascDelWarnMessage?: string, CustomAction?: string, Field?: string, ID?: string, InplaceFullListSearch?: string, InplaceSearchQuery?: string, IsCSR?: string, IsXslView?: string, ItemId?: string, ListViewPageUrl?: string, OverrideScope?: string, RootFolder?: string, View?: string, ViewCount?: string): IBaseExecution<T>;
	renderListData<T=string>(viewXml?: string): IBaseExecution<T>;
	renderListDataAsStream<T=any>(parameters?: SP.RenderListDataParameters, CascDelWarnMessage?: string, CustomAction?: string, DrillDown?: string, Field?: string, FieldInternalName?: string, Filter?: string, FilterData?: string, FilterData1?: string, FilterData10?: string, FilterData2?: string, FilterData3?: string, FilterData4?: string, FilterData5?: string, FilterData6?: string, FilterData7?: string, FilterData8?: string, FilterData9?: string, FilterField?: string, FilterField1?: string, FilterField10?: string, FilterField2?: string, FilterField3?: string, FilterField4?: string, FilterField5?: string, FilterField6?: string, FilterField7?: string, FilterField8?: string, FilterField9?: string, FilterFields?: string, FilterFields1?: string, FilterFields10?: string, FilterFields2?: string, FilterFields3?: string, FilterFields4?: string, FilterFields5?: string, FilterFields6?: string, FilterFields7?: string, FilterFields8?: string, FilterFields9?: string, FilterLookupId?: string, FilterLookupId1?: string, FilterLookupId10?: string, FilterLookupId2?: string, FilterLookupId3?: string, FilterLookupId4?: string, FilterLookupId5?: string, FilterLookupId6?: string, FilterLookupId7?: string, FilterLookupId8?: string, FilterLookupId9?: string, FilterOp?: string, FilterOp1?: string, FilterOp10?: string, FilterOp2?: string, FilterOp3?: string, FilterOp4?: string, FilterOp5?: string, FilterOp6?: string, FilterOp7?: string, FilterOp8?: string, FilterOp9?: string, FilterValue?: string, FilterValue1?: string, FilterValue10?: string, FilterValue2?: string, FilterValue3?: string, FilterValue4?: string, FilterValue5?: string, FilterValue6?: string, FilterValue7?: string, FilterValue8?: string, FilterValue9?: string, FilterValues?: string, FilterValues1?: string, FilterValues10?: string, FilterValues2?: string, FilterValues3?: string, FilterValues4?: string, FilterValues5?: string, FilterValues6?: string, FilterValues7?: string, FilterValues8?: string, FilterValues9?: string, GroupString?: string, HasOverrideSelectCommand?: string, ID?: string, InplaceFullListSearch?: string, InplaceSearchQuery?: string, IsCSR?: string, IsGroupRender?: string, IsXslView?: string, ListViewPageUrl?: string, OverrideScope?: string, OverrideSelectCommand?: string, PageFirstRow?: string, PageLastRow?: string, RootFolder?: string, SortDir?: string, SortDir1?: string, SortDir10?: string, SortDir2?: string, SortDir3?: string, SortDir4?: string, SortDir5?: string, SortDir6?: string, SortDir7?: string, SortDir8?: string, SortDir9?: string, SortField?: string, SortField1?: string, SortField10?: string, SortField2?: string, SortField3?: string, SortField4?: string, SortField5?: string, SortField6?: string, SortField7?: string, SortField8?: string, SortField9?: string, SortFields?: string, SortFieldValues?: string, View?: string, ViewCount?: string, ViewId?: string, ViewPath?: string, WebPartId?: string): IBaseExecution<T>;
	renderListFilterData<T=any>(ExcludeFieldFilteringHtml?: boolean, FieldInternalName?: string, OverrideScope?: string, ProcessQStringToCAML?: string, ViewId?: string): IBaseExecution<T>;
	renderListFormData<T=string>(itemId?: number, formId?: string, mode?: number): IBaseExecution<T>;
	reserveListItemId<T=number>(): IBaseExecution<T>;
	saveAsNewView<T=string>(oldName?: string, newName?: string, privateView?: boolean, uri?: string): IBaseExecution<T>;
	saveAsTemplate<T=any>(strFileName?: string, strName?: string, strDescription?: string, bSaveData?: boolean): IBaseExecution<T>;
	setExemptFromBlockDownloadOfNonViewableFiles<T=any>(value?: boolean): IBaseExecution<T>;
	syncFlowCallbackUrl<T=SP.FlowSynchronizationResult>(flowId?: string): IBaseExecution<T>;
	syncFlowInstance<T=SP.FlowSynchronizationResult>(flowID?: any): IBaseExecution<T>;
	syncFlowInstances<T=SP.FlowSynchronizationResult>(): IBaseExecution<T>;
	syncFlowTemplates<T=SP.FlowSynchronizationResult>(category?: string): IBaseExecution<T>;
	unpublishMappedView<T=SP.View>(appId?: any, visualizationTarget?: number): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
	validateAppName<T=SP.VisualizationAppSynchronizationResult>(appDisplayName?: string): IBaseExecution<T>;
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
* IView
**********************************************/
export interface IView extends ViewProps,ViewMethods,IBaseExecution<View> {

}

/*********************************************
* View
**********************************************/
export interface View extends ViewProps, ViewMethods {
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
* ViewProps
**********************************************/
export interface ViewProps {
	ViewFields<T=SP.ViewFieldCollection>(): IBaseExecution<T>;
}

/*********************************************
* ViewMethods
**********************************************/
export interface ViewMethods {
	addToSpotlight<T=SP.Utilities.SpotlightResult>(itemId?: number, folderPath?: string, afterItemId?: number): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	removeFromSpotlight<T=SP.Utilities.SpotlightResult>(itemId?: number, folderPath?: string): IBaseExecution<T>;
	renderAsHtml<T=string>(): IBaseExecution<T>;
	setViewXml<T=any>(viewXml?: string): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IViewFieldCollection
**********************************************/
export interface IViewFieldCollection extends ViewFieldCollectionProps,ViewFieldCollectionMethods,IBaseExecution<ViewFieldCollection> {

}

/*********************************************
* ViewFieldCollection
**********************************************/
export interface ViewFieldCollection extends ViewFieldCollectionProps, ViewFieldCollectionMethods {
	SchemaXml?: string;
	Items?: Array<string>;
}

/*********************************************
* ViewFieldCollectionProps
**********************************************/
export interface ViewFieldCollectionProps {

}

/*********************************************
* ViewFieldCollectionMethods
**********************************************/
export interface ViewFieldCollectionMethods {
	addViewField<T=any>(strField?: string): IBaseExecution<T>;
	moveViewFieldTo<T=any>(field?: string, index?: number): IBaseExecution<T>;
	removeAllViewFields<T=any>(): IBaseExecution<T>;
	removeViewField<T=any>(strField?: string): IBaseExecution<T>;
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
* IInformationRightsManagementSettings
**********************************************/
export interface IInformationRightsManagementSettings extends InformationRightsManagementSettingsProps,InformationRightsManagementSettingsMethods,IBaseExecution<InformationRightsManagementSettings> {

}

/*********************************************
* InformationRightsManagementSettings
**********************************************/
export interface InformationRightsManagementSettings extends InformationRightsManagementSettingsProps, InformationRightsManagementSettingsMethods {
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
* InformationRightsManagementSettingsProps
**********************************************/
export interface InformationRightsManagementSettingsProps {

}

/*********************************************
* InformationRightsManagementSettingsMethods
**********************************************/
export interface InformationRightsManagementSettingsMethods {
	reset<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IWeb
**********************************************/
export interface IWeb extends WebProps,WebMethods,IBaseExecution<Web> {

}

/*********************************************
* Web
**********************************************/
export interface Web extends SP.SecurableObject, WebProps, WebMethods {
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
* WebProps
**********************************************/
export interface WebProps {
	Activities<T=Microsoft.SharePoint.Activities.SPActivityEntity>(): IBaseCollection<T>;
	ActivityLogger<T=Microsoft.SharePoint.Internal.ActivityLogger>(): IBaseExecution<T>;
	Alerts<T=SP.Alert>(): IBaseCollection<T>;
	AllProperties<T=SP.PropertyValues>(): IBaseExecution<T>;
	AppTiles<T=SP.AppTile>(): IBaseCollection<T>;
	AssociatedMemberGroup<T=SP.Group>(): IBaseExecution<T>;
	AssociatedOwnerGroup<T=SP.Group>(): IBaseExecution<T>;
	AssociatedVisitorGroup<T=SP.Group>(): IBaseExecution<T>;
	Author<T=SP.User>(): IBaseExecution<T>;
	AvailableContentTypes<T=SP.ContentType>(): IBaseCollection<T>;
	AvailableFields<T=SP.Field>(): IBaseCollection<T>;
	ClientWebParts<T=SP.ClientWebPart>(): IBaseCollection<T>;
	ContentTypes<T=SP.ContentType>(): IBaseCollection<T>;
	CurrentUser<T=SP.User>(): IBaseExecution<T>;
	DataLeakagePreventionStatusInfo<T=SP.SPDataLeakagePreventionStatusInfo>(): IBaseExecution<T>;
	DescriptionResource<T=SP.UserResource>(): IBaseExecution<T>;
	EventReceivers<T=SP.EventReceiverDefinition>(): IBaseCollection<T>;
	Features<T=SP.Feature>(): IBaseCollection<T>;
	Fields<T=SP.Field>(): IBaseCollection<T>;
	Folders<T=SP.Folder>(): IBaseCollection<T>;
	HostedApps<T=Microsoft.SharePoint.ClientSideComponent.HostedAppsManager>(): IBaseExecution<T>;
	Lists<T=SP.List>(): IBaseCollection<T>;
	ListTemplates<T=SP.ListTemplate>(): IBaseCollection<T>;
	Navigation<T=SP.Navigation>(): IBaseExecution<T>;
	OneDriveSharedItems<T=SP.Sharing.SharedDocumentInfo>(): IBaseCollection<T>;
	ParentWeb<T=SP.WebInformation>(): IBaseExecution<T>;
	PushNotificationSubscribers<T=SP.PushNotificationSubscriber>(): IBaseCollection<T>;
	RecycleBin<T=SP.RecycleBinItem>(): IBaseCollection<T>;
	RegionalSettings<T=SP.RegionalSettings>(): IBaseExecution<T>;
	RoleDefinitions<T=SP.RoleDefinition>(): IBaseCollection<T>;
	RootFolder<T=SP.Folder>(): IBaseExecution<T>;
	SiteCollectionAppCatalog<T=Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor>(): IBaseExecution<T>;
	SiteGroups<T=SP.Group>(): IBaseCollection<T>;
	SiteUserInfoList<T=SP.List>(): IBaseExecution<T>;
	SiteUsers<T=SP.User>(): IBaseCollection<T>;
	TenantAppCatalog<T=Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor>(): IBaseExecution<T>;
	ThemeInfo<T=SP.ThemeInfo>(): IBaseExecution<T>;
	TitleResource<T=SP.UserResource>(): IBaseExecution<T>;
	UserCustomActions<T=SP.UserCustomAction>(): IBaseCollection<T>;
	Webs<T=SP.Web>(): IBaseCollection<T>;
	WebInfos<T=SP.WebInformation>(): IBaseCollection<T>;
	WorkflowAssociations<T=SP.Workflow.WorkflowAssociation>(): IBaseCollection<T>;
	WorkflowTemplates<T=SP.Workflow.WorkflowTemplate>(): IBaseCollection<T>;
}

/*********************************************
* WebMethods
**********************************************/
export interface WebMethods {
	breakRoleInheritance<T=any>(copyRoleAssignments?: boolean, clearSubscopes?: boolean): IBaseExecution<T>;
	resetRoleInheritance<T=any>(): IBaseExecution<T>;
	addCrossFarmMessage<T=boolean>(messagePayloadBase64?: string): IBaseExecution<T>;
	addSupportedUILanguage<T=any>(lcid?: number): IBaseExecution<T>;
	applyTheme<T=any>(colorPaletteUrl?: string, fontSchemeUrl?: string, backgroundImageUrl?: string, shareGenerated?: boolean): IBaseExecution<T>;
	applyWebTemplate<T=any>(webTemplate?: string): IBaseExecution<T>;
	createDefaultAssociatedGroups<T=any>(userLogin?: string, userLogin2?: string, groupNameSeed?: string): IBaseExecution<T>;
	defaultDocumentLibrary<T=SP.List>(): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	doesPushNotificationSubscriberExist<T=boolean>(deviceAppInstanceId?: any): IBaseExecution<T>;
	doesUserHavePermissions<T=boolean>(permissionMask?: SP.BasePermissions): IBaseExecution<T>;
	ensureUser<T=SP.User>(logonName?: string): IBaseExecution<T>;
	executeRemoteLOB<T=any>(inputStream?: any): IBaseExecution<T>;
	getAppBdcCatalog<T=SP.BusinessData.AppBdcCatalog>(): IBaseExecution<T>;
	getAppBdcCatalogForAppInstance<T=SP.BusinessData.AppBdcCatalog>(appInstanceId?: any): IBaseExecution<T>;
	getAppInstanceById<T=SP.AppInstance>(appInstanceId?: any): IBaseExecution<T>;
	getAppInstancesByProductId<T=Array<SP.AppInstance>>(productId?: any): IBaseExecution<T>;
	getAvailableWebTemplates<T=Array<SP.WebTemplate>>(lcid?: number, doIncludeCrossLanguage?: boolean): IBaseExecution<T>;
	getCatalog<T=SP.List>(typeCatalog?: number): IBaseExecution<T>;
	getChanges<T=Array<SP.Change>>(query?: SP.ChangeQuery): IBaseExecution<T>;
	getClientSideComponents<T=Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult>>(components?: Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentIdentifier>): IBaseExecution<T>;
	getClientSideComponentsById<T=Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult>>(componentIds?: Array<any>): IBaseExecution<T>;
	getClientSideWebParts<T=Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult>>(includeErrors?: boolean): IBaseExecution<T>;
	getCustomListTemplates<T=Array<SP.ListTemplate>>(): IBaseExecution<T>;
	getEntity<T=SP.BusinessData.Entity>(namespace?: string, name?: string): IBaseExecution<T>;
	getFileByGuestUrl<T=SP.File>(guestUrl?: string): IBaseExecution<T>;
	getFileByGuestUrlEnsureAccess<T=SP.File>(guestUrl?: string, ensureAccess?: boolean): IBaseExecution<T>;
	getFileByGuestUrlExtended<T=SP.File>(guestUrl?: string, requestSettings?: SP.Sharing.SharingLinkAccessRequest): IBaseExecution<T>;
	getFileById<T=SP.File>(uniqueId?: any): IBaseExecution<T>;
	getFileByLinkingUrl<T=SP.File>(linkingUrl?: string): IBaseExecution<T>;
	getFileByServerRelativePath<T=SP.File>(DecodedUrl?: string): IBaseExecution<T>;
	getFileByServerRelativeUrl<T=SP.File>(serverRelativeUrl?: string): IBaseExecution<T>;
	getFileByUrl<T=SP.File>(fileUrl?: string): IBaseExecution<T>;
	getFileByWOPIFrameUrl<T=SP.File>(wopiFrameUrl?: string): IBaseExecution<T>;
	getFolderByGuestUrl<T=SP.Folder>(guestUrl?: string, ensureAccess?: boolean): IBaseExecution<T>;
	getFolderByGuestUrlExtended<T=SP.Folder>(guestUrl?: string, requestSettings?: SP.Sharing.SharingLinkAccessRequest): IBaseExecution<T>;
	getFolderById<T=SP.Folder>(uniqueId?: any): IBaseExecution<T>;
	getFolderByServerRelativePath<T=SP.Folder>(DecodedUrl?: string): IBaseExecution<T>;
	getFolderByServerRelativeUrl<T=SP.Folder>(serverRelativeUrl?: string): IBaseExecution<T>;
	getList<T=SP.List>(strUrl?: string): IBaseExecution<T>;
	getListItem<T=SP.ListItem>(strUrl?: string): IBaseExecution<T>;
	getListItemByResourceId<T=SP.ListItem>(resourceId?: string): IBaseExecution<T>;
	getListItemUsingPath<T=SP.ListItem>(DecodedUrl?: string): IBaseExecution<T>;
	getListUsingPath<T=SP.List>(DecodedUrl?: string): IBaseExecution<T>;
	getNewsList<T=SP.List>(allowCreate?: boolean): IBaseExecution<T>;
	getOnePageContextAsStream<T=any>(): IBaseExecution<T>;
	getPushNotificationSubscriber<T=SP.PushNotificationSubscriber>(deviceAppInstanceId?: any): IBaseExecution<T>;
	getPushNotificationSubscribersByArgs<T=Array<SP.PushNotificationSubscriber>>(customArgs?: string): IBaseExecution<T>;
	getPushNotificationSubscribersByUser<T=Array<SP.PushNotificationSubscriber>>(userName?: string): IBaseExecution<T>;
	getRecycleBinItems<T=Array<SP.RecycleBinItem>>(pagingInfo?: string, rowLimit?: number, isAscending?: boolean, orderBy?: number, itemState?: number): IBaseExecution<T>;
	getRecycleBinItemsByQueryInfo<T=Array<SP.RecycleBinItem>>(IsAscending?: boolean, ItemState?: number, OrderBy?: number, PagingInfo?: string, RowLimit?: number, ShowOnlyMyItems?: boolean): IBaseExecution<T>;
	getRegionalDateTimeSchema<T=string>(): IBaseExecution<T>;
	getSharingLinkData<T=SP.SharingLinkData>(linkUrl?: string): IBaseExecution<T>;
	getStorageEntity<T=Microsoft.SharePoint.ClientSideComponent.StorageEntity>(key?: string): IBaseExecution<T>;
	getSubwebsFilteredForCurrentUser<T=Array<SP.WebInformation>>(nWebTemplateFilter?: number, nConfigurationFilter?: number): IBaseExecution<T>;
	getUserById<T=SP.User>(userId?: number): IBaseExecution<T>;
	getUserEffectivePermissions<T=SP.BasePermissions>(userName?: string): IBaseExecution<T>;
	getViewFromPath<T=SP.View>(DecodedUrl?: string): IBaseExecution<T>;
	getViewFromUrl<T=SP.View>(listUrl?: string): IBaseExecution<T>;
	hubSiteData<T=string>(forceRefresh?: boolean): IBaseExecution<T>;
	hubSiteDataAsStream<T=any>(forceRefresh?: boolean): IBaseExecution<T>;
	incrementSiteClientTag<T=any>(): IBaseExecution<T>;
	loadAndInstallApp<T=SP.AppInstance>(appPackageStream?: any): IBaseExecution<T>;
	loadAndInstallAppInSpecifiedLocale<T=SP.AppInstance>(appPackageStream?: any, installationLocaleLCID?: number): IBaseExecution<T>;
	loadApp<T=SP.AppInstance>(appPackageStream?: any, installationLocaleLCID?: number): IBaseExecution<T>;
	mapToIcon<T=string>(fileName?: string, progId?: string, size?: number): IBaseExecution<T>;
	pageContextInfo<T=any>(includeODBSettings?: boolean, emitNavigationInfo?: boolean): IBaseExecution<T>;
	parseDateTime<T=string>(value?: string, displayFormat?: number, calendarType?: number): IBaseExecution<T>;
	processExternalNotification<T=string>(stream?: any): IBaseExecution<T>;
	registerPushNotificationSubscriber<T=SP.PushNotificationSubscriber>(deviceAppInstanceId?: any, serviceToken?: string): IBaseExecution<T>;
	removeStorageEntity<T=any>(key?: string): IBaseExecution<T>;
	removeSupportedUILanguage<T=any>(lcid?: number): IBaseExecution<T>;
	setAccessRequestSiteDescriptionAndUpdate<T=any>(description?: string): IBaseExecution<T>;
	setStorageEntity<T=any>(key?: string, value?: string, description?: string, comments?: string): IBaseExecution<T>;
	setUseAccessRequestDefaultAndUpdate<T=any>(useAccessRequestDefault?: boolean): IBaseExecution<T>;
	syncFlowInstances<T=SP.FlowSynchronizationResult>(targetWebUrl?: string): IBaseExecution<T>;
	syncFlowTemplates<T=SP.FlowSynchronizationResult>(category?: string): IBaseExecution<T>;
	syncHubSiteTheme<T=any>(): IBaseExecution<T>;
	unregisterPushNotificationSubscriber<T=any>(deviceAppInstanceId?: any): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
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
* IGroup
**********************************************/
export interface IGroup extends GroupProps,GroupMethods,IBaseExecution<Group> {

}

/*********************************************
* Group
**********************************************/
export interface Group extends SP.Principal, GroupProps, GroupMethods {
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
* GroupProps
**********************************************/
export interface GroupProps {
	Owner<T=SP.Principal>(): IBaseExecution<T>;
	Users<T=SP.User>(): IBaseCollection<T>;
}

/*********************************************
* GroupMethods
**********************************************/
export interface GroupMethods {
	setUserAsOwner<T=any>(ownerId?: number): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IClientWebPart
**********************************************/
export interface IClientWebPart extends ClientWebPartProps,ClientWebPartMethods,IBaseExecution<ClientWebPart> {

}

/*********************************************
* ClientWebPart
**********************************************/
export interface ClientWebPart extends ClientWebPartProps, ClientWebPartMethods {
	Id?: any;
	Name?: string;
}

/*********************************************
* ClientWebPartProps
**********************************************/
export interface ClientWebPartProps {

}

/*********************************************
* ClientWebPartMethods
**********************************************/
export interface ClientWebPartMethods {
	render<T=string>(properties?: Array<SP.KeyValue>): IBaseExecution<T>;
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
* IListTemplate
**********************************************/
export interface IListTemplate extends ListTemplateProps,ListTemplateMethods,IBaseExecution<ListTemplate> {

}

/*********************************************
* ListTemplate
**********************************************/
export interface ListTemplate extends ListTemplateProps, ListTemplateMethods {
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
* ListTemplateProps
**********************************************/
export interface ListTemplateProps {

}

/*********************************************
* ListTemplateMethods
**********************************************/
export interface ListTemplateMethods {
	getGlobalSchemaXml<T=any>(): IBaseExecution<T>;
}

/*********************************************
* INavigation
**********************************************/
export interface INavigation extends NavigationProps,NavigationMethods,IBaseExecution<Navigation> {

}

/*********************************************
* Navigation
**********************************************/
export interface Navigation extends NavigationProps, NavigationMethods {
	UseShared?: boolean;
}

/*********************************************
* NavigationProps
**********************************************/
export interface NavigationProps {
	QuickLaunch<T=SP.NavigationNode>(): IBaseCollection<T>;
	TopNavigationBar<T=SP.NavigationNode>(): IBaseCollection<T>;
}

/*********************************************
* NavigationMethods
**********************************************/
export interface NavigationMethods {
	getNodeById<T=SP.NavigationNode>(id?: number): IBaseExecution<T>;
}

/*********************************************
* INavigationNode
**********************************************/
export interface INavigationNode extends NavigationNodeProps,NavigationNodeMethods,IBaseExecution<NavigationNode> {

}

/*********************************************
* NavigationNode
**********************************************/
export interface NavigationNode extends NavigationNodeProps, NavigationNodeMethods {
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
* NavigationNodeProps
**********************************************/
export interface NavigationNodeProps {
	Children<T=SP.NavigationNode>(): IBaseCollection<T>;
}

/*********************************************
* NavigationNodeMethods
**********************************************/
export interface NavigationNodeMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
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
* IPushNotificationSubscriber
**********************************************/
export interface IPushNotificationSubscriber extends PushNotificationSubscriberProps,PushNotificationSubscriberMethods,IBaseExecution<PushNotificationSubscriber> {

}

/*********************************************
* PushNotificationSubscriber
**********************************************/
export interface PushNotificationSubscriber extends PushNotificationSubscriberProps, PushNotificationSubscriberMethods {
	CustomArgs?: string;
	DeviceAppInstanceId?: any;
	LastModifiedTimeStamp?: any;
	RegistrationTimeStamp?: any;
	ServiceToken?: string;
	SubscriberType?: string;
}

/*********************************************
* PushNotificationSubscriberProps
**********************************************/
export interface PushNotificationSubscriberProps {
	User<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* PushNotificationSubscriberMethods
**********************************************/
export interface PushNotificationSubscriberMethods {
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IRecycleBinItem
**********************************************/
export interface IRecycleBinItem extends RecycleBinItemProps,RecycleBinItemMethods,IBaseExecution<RecycleBinItem> {

}

/*********************************************
* RecycleBinItem
**********************************************/
export interface RecycleBinItem extends RecycleBinItemProps, RecycleBinItemMethods {
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
* RecycleBinItemProps
**********************************************/
export interface RecycleBinItemProps {
	Author<T=SP.User>(): IBaseExecution<T>;
	DeletedBy<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* RecycleBinItemMethods
**********************************************/
export interface RecycleBinItemMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	moveToSecondStage<T=any>(): IBaseExecution<T>;
	restore<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IRegionalSettings
**********************************************/
export interface IRegionalSettings extends RegionalSettingsProps,RegionalSettingsMethods,IBaseExecution<RegionalSettings> {

}

/*********************************************
* RegionalSettings
**********************************************/
export interface RegionalSettings extends RegionalSettingsProps, RegionalSettingsMethods {
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
* RegionalSettingsProps
**********************************************/
export interface RegionalSettingsProps {
	InstalledLanguages<T=SP.LanguageCollection>(): IBaseExecution<T>;
	TimeZone<T=SP.TimeZone>(): IBaseExecution<T>;
	TimeZones<T=SP.TimeZone>(): IBaseCollection<T>;
}

/*********************************************
* RegionalSettingsMethods
**********************************************/
export interface RegionalSettingsMethods {
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ILanguageCollection
**********************************************/
export interface ILanguageCollection extends LanguageCollectionProps,LanguageCollectionMethods,IBaseExecution<LanguageCollection> {

}

/*********************************************
* LanguageCollection
**********************************************/
export interface LanguageCollection extends LanguageCollectionProps, LanguageCollectionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<SP.Language>;
}

/*********************************************
* LanguageCollectionProps
**********************************************/
export interface LanguageCollectionProps {

}

/*********************************************
* LanguageCollectionMethods
**********************************************/
export interface LanguageCollectionMethods {
	getById<T=SP.Language>(id?: number): IBaseExecution<T>;
}

/*********************************************
* ITimeZone
**********************************************/
export interface ITimeZone extends TimeZoneProps,TimeZoneMethods,IBaseExecution<TimeZone> {

}

/*********************************************
* TimeZone
**********************************************/
export interface TimeZone extends TimeZoneProps, TimeZoneMethods {
	Description?: string;
	Id?: number;
	Information?: SP.TimeZoneInformation;
}

/*********************************************
* TimeZoneProps
**********************************************/
export interface TimeZoneProps {

}

/*********************************************
* TimeZoneMethods
**********************************************/
export interface TimeZoneMethods {
	localTimeToUTC<T=any>(date?: any): IBaseExecution<T>;
	uTCToLocalTime<T=any>(date?: any): IBaseExecution<T>;
}

/*********************************************
* IThemeInfo
**********************************************/
export interface IThemeInfo extends ThemeInfoProps,ThemeInfoMethods,IBaseExecution<ThemeInfo> {

}

/*********************************************
* ThemeInfo
**********************************************/
export interface ThemeInfo extends ThemeInfoProps, ThemeInfoMethods {
	AccessibleDescription?: string;
	ThemeBackgroundImageUri?: string;
}

/*********************************************
* ThemeInfoProps
**********************************************/
export interface ThemeInfoProps {

}

/*********************************************
* ThemeInfoMethods
**********************************************/
export interface ThemeInfoMethods {
	getThemeFontByName<T=string>(name?: string, lcid?: number): IBaseExecution<T>;
	getThemeShadeByName<T=string>(name?: string): IBaseExecution<T>;
}

/*********************************************
* IUserCustomAction
**********************************************/
export interface IUserCustomAction extends UserCustomActionProps,UserCustomActionMethods,IBaseExecution<UserCustomAction> {

}

/*********************************************
* UserCustomAction
**********************************************/
export interface UserCustomAction extends UserCustomActionProps, UserCustomActionMethods {
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
* UserCustomActionProps
**********************************************/
export interface UserCustomActionProps {
	DescriptionResource<T=SP.UserResource>(): IBaseExecution<T>;
	TitleResource<T=SP.UserResource>(): IBaseExecution<T>;
}

/*********************************************
* UserCustomActionMethods
**********************************************/
export interface UserCustomActionMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IListItemVersion
**********************************************/
export interface IListItemVersion extends ListItemVersionProps,ListItemVersionMethods,IBaseExecution<ListItemVersion> {

}

/*********************************************
* ListItemVersion
**********************************************/
export interface ListItemVersion extends ListItemVersionProps, ListItemVersionMethods {
	Created?: any;
	IsCurrentVersion?: boolean;
	VersionId?: number;
	VersionLabel?: string;
}

/*********************************************
* ListItemVersionProps
**********************************************/
export interface ListItemVersionProps {
	CreatedBy<T=SP.User>(): IBaseExecution<T>;
	Fields<T=SP.Field>(): IBaseCollection<T>;
	FileVersion<T=SP.FileVersion>(): IBaseExecution<T>;
}

/*********************************************
* ListItemVersionMethods
**********************************************/
export interface ListItemVersionMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ISPAppLicenseManager
**********************************************/
export interface ISPAppLicenseManager extends SPAppLicenseManagerProps,SPAppLicenseManagerMethods,IBaseExecution<SPAppLicenseManager> {

}

/*********************************************
* SPAppLicenseManager
**********************************************/
export interface SPAppLicenseManager extends SPAppLicenseManagerProps, SPAppLicenseManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAppLicenseManagerProps
**********************************************/
export interface SPAppLicenseManagerProps {

}

/*********************************************
* SPAppLicenseManagerMethods
**********************************************/
export interface SPAppLicenseManagerMethods {
	checkLicense<T=SP.AppLicenseCollection>(productId?: any): IBaseExecution<T>;
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
* IAppInstance
**********************************************/
export interface IAppInstance extends AppInstanceProps,AppInstanceMethods,IBaseExecution<AppInstance> {

}

/*********************************************
* AppInstance
**********************************************/
export interface AppInstance extends AppInstanceProps, AppInstanceMethods {
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
* AppInstanceProps
**********************************************/
export interface AppInstanceProps {

}

/*********************************************
* AppInstanceMethods
**********************************************/
export interface AppInstanceMethods {
	cancelAllJobs<T=boolean>(): IBaseExecution<T>;
	getAppDatabaseConnectionString<T=string>(): IBaseExecution<T>;
	getErrorDetails<T=Array<SP.AppInstanceErrorDetails>>(): IBaseExecution<T>;
	getPreviousAppVersion<T=SP.App>(): IBaseExecution<T>;
	install<T=any>(): IBaseExecution<T>;
	recycle<T=any>(): IBaseExecution<T>;
	restore<T=any>(): IBaseExecution<T>;
	retryAllJobs<T=any>(): IBaseExecution<T>;
	uninstall<T=any>(): IBaseExecution<T>;
	upgrade<T=any>(appPackageStream?: any): IBaseExecution<T>;
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
* IObjectSharingSettings
**********************************************/
export interface IObjectSharingSettings extends ObjectSharingSettingsProps,ObjectSharingSettingsMethods,IBaseExecution<ObjectSharingSettings> {

}

/*********************************************
* ObjectSharingSettings
**********************************************/
export interface ObjectSharingSettings extends ObjectSharingSettingsProps, ObjectSharingSettingsMethods {
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
* ObjectSharingSettingsProps
**********************************************/
export interface ObjectSharingSettingsProps {
	ObjectSharingInformation<T=SP.ObjectSharingInformation>(): IBaseExecution<T>;
	SharePointSettings<T=SP.SharePointSharingSettings>(): IBaseExecution<T>;
	SharingPermissions<T=SP.SharingPermissionInformation>(): IBaseCollection<T>;
}

/*********************************************
* ObjectSharingSettingsMethods
**********************************************/
export interface ObjectSharingSettingsMethods {

}

/*********************************************
* IObjectSharingInformation
**********************************************/
export interface IObjectSharingInformation extends ObjectSharingInformationProps,ObjectSharingInformationMethods,IBaseExecution<ObjectSharingInformation> {

}

/*********************************************
* ObjectSharingInformation
**********************************************/
export interface ObjectSharingInformation extends ObjectSharingInformationProps, ObjectSharingInformationMethods {
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
* ObjectSharingInformationProps
**********************************************/
export interface ObjectSharingInformationProps {
	SharedWithUsersCollection<T=SP.ObjectSharingInformationUser>(): IBaseCollection<T>;
}

/*********************************************
* ObjectSharingInformationMethods
**********************************************/
export interface ObjectSharingInformationMethods {
	getSharedWithUsers<T=Array<SP.ObjectSharingInformationUser>>(): IBaseExecution<T>;
}

/*********************************************
* IObjectSharingInformationUser
**********************************************/
export interface IObjectSharingInformationUser extends ObjectSharingInformationUserProps,ObjectSharingInformationUserMethods,IBaseExecution<ObjectSharingInformationUser> {

}

/*********************************************
* ObjectSharingInformationUser
**********************************************/
export interface ObjectSharingInformationUser extends ObjectSharingInformationUserProps, ObjectSharingInformationUserMethods {
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
* ObjectSharingInformationUserProps
**********************************************/
export interface ObjectSharingInformationUserProps {
	Principal<T=SP.Principal>(): IBaseExecution<T>;
	User<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* ObjectSharingInformationUserMethods
**********************************************/
export interface ObjectSharingInformationUserMethods {

}

/*********************************************
* ISharePointSharingSettings
**********************************************/
export interface ISharePointSharingSettings extends SharePointSharingSettingsProps,SharePointSharingSettingsMethods,IBaseExecution<SharePointSharingSettings> {

}

/*********************************************
* SharePointSharingSettings
**********************************************/
export interface SharePointSharingSettings extends SharePointSharingSettingsProps, SharePointSharingSettingsMethods {
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
* SharePointSharingSettingsProps
**********************************************/
export interface SharePointSharingSettingsProps {
	PickerProperties<T=SP.PickerSettings>(): IBaseExecution<T>;
}

/*********************************************
* SharePointSharingSettingsMethods
**********************************************/
export interface SharePointSharingSettingsMethods {

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
* ISharingResult
**********************************************/
export interface ISharingResult extends SharingResultProps,SharingResultMethods,IBaseExecution<SharingResult> {

}

/*********************************************
* SharingResult
**********************************************/
export interface SharingResult extends SharingResultProps, SharingResultMethods {
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
* SharingResultProps
**********************************************/
export interface SharingResultProps {
	GroupsSharedWith<T=SP.Group>(): IBaseCollection<T>;
	GroupUsersAddedTo<T=SP.Group>(): IBaseExecution<T>;
	UsersWithAccessRequests<T=SP.User>(): IBaseCollection<T>;
}

/*********************************************
* SharingResultMethods
**********************************************/
export interface SharingResultMethods {

}

/*********************************************
* AccessRequests
**********************************************/
export interface AccessRequests {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* IAppContextSite
**********************************************/
export interface IAppContextSite extends AppContextSiteProps,AppContextSiteMethods,IBaseExecution<AppContextSite> {

}

/*********************************************
* AppContextSite
**********************************************/
export interface AppContextSite extends AppContextSiteProps, AppContextSiteMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppContextSiteProps
**********************************************/
export interface AppContextSiteProps {
	Site<T=SP.Site>(): IBaseExecution<T>;
	Web<T=SP.Web>(): IBaseExecution<T>;
}

/*********************************************
* AppContextSiteMethods
**********************************************/
export interface AppContextSiteMethods {

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
* IChangeList
**********************************************/
export interface IChangeList extends ChangeListProps,ChangeListMethods,IBaseExecution<ChangeList> {

}

/*********************************************
* ChangeList
**********************************************/
export interface ChangeList extends SP.Change, ChangeListProps, ChangeListMethods {
	BaseTemplate?: number;
	Editor?: string;
	Hidden?: boolean;
	ListId?: any;
	RootFolderUrl?: string;
	Title?: string;
	WebId?: any;
}

/*********************************************
* ChangeListProps
**********************************************/
export interface ChangeListProps {
	Creator<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* ChangeListMethods
**********************************************/
export interface ChangeListMethods {

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
* ICheckedOutFile
**********************************************/
export interface ICheckedOutFile extends CheckedOutFileProps,CheckedOutFileMethods,IBaseExecution<CheckedOutFile> {

}

/*********************************************
* CheckedOutFile
**********************************************/
export interface CheckedOutFile extends CheckedOutFileProps, CheckedOutFileMethods {
	CheckedOutById?: number;
	ServerRelativePath?: SP.ResourcePath;
}

/*********************************************
* CheckedOutFileProps
**********************************************/
export interface CheckedOutFileProps {
	CheckedOutBy<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* CheckedOutFileMethods
**********************************************/
export interface CheckedOutFileMethods {
	takeOverCheckOut<T=any>(): IBaseExecution<T>;
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
* IRequestContext
**********************************************/
export interface IRequestContext extends RequestContextProps,RequestContextMethods,IBaseExecution<RequestContext> {

}

/*********************************************
* RequestContext
**********************************************/
export interface RequestContext extends RequestContextProps, RequestContextMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RequestContextProps
**********************************************/
export interface RequestContextProps {
	Current<T=SP.RequestContext>(): IBaseExecution<T>;
	List<T=SP.List>(): IBaseExecution<T>;
	Site<T=SP.Site>(): IBaseExecution<T>;
	Web<T=SP.Web>(): IBaseExecution<T>;
}

/*********************************************
* RequestContextMethods
**********************************************/
export interface RequestContextMethods {
	getRemoteContext<T=SP.RequestContext>(): IBaseExecution<T>;
}

/*********************************************
* CurrencyList
**********************************************/
export interface CurrencyList {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* IFieldCalculated
**********************************************/
export interface IFieldCalculated extends FieldCalculatedProps,FieldCalculatedMethods,IBaseExecution<FieldCalculated> {

}

/*********************************************
* FieldCalculated
**********************************************/
export interface FieldCalculated extends SP.Field, FieldCalculatedProps, FieldCalculatedMethods {
	CurrencyLocaleId?: number;
	DateFormat?: number;
	DisplayFormat?: number;
	Formula?: string;
	OutputType?: number;
	ShowAsPercentage?: boolean;
}

/*********************************************
* FieldCalculatedProps
**********************************************/
export interface FieldCalculatedProps {

}

/*********************************************
* FieldCalculatedMethods
**********************************************/
export interface FieldCalculatedMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldMultiChoice
**********************************************/
export interface IFieldMultiChoice extends FieldMultiChoiceProps,FieldMultiChoiceMethods,IBaseExecution<FieldMultiChoice> {

}

/*********************************************
* FieldMultiChoice
**********************************************/
export interface FieldMultiChoice extends SP.Field, FieldMultiChoiceProps, FieldMultiChoiceMethods {
	FillInChoice?: boolean;
	Mappings?: string;
	Choices?: Array<string>;
}

/*********************************************
* FieldMultiChoiceProps
**********************************************/
export interface FieldMultiChoiceProps {

}

/*********************************************
* FieldMultiChoiceMethods
**********************************************/
export interface FieldMultiChoiceMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldChoice
**********************************************/
export interface IFieldChoice extends FieldChoiceProps,FieldChoiceMethods,IBaseExecution<FieldChoice> {

}

/*********************************************
* FieldChoice
**********************************************/
export interface FieldChoice extends SP.FieldMultiChoice, FieldChoiceProps, FieldChoiceMethods {
	EditFormat?: number;
}

/*********************************************
* FieldChoiceProps
**********************************************/
export interface FieldChoiceProps {

}

/*********************************************
* FieldChoiceMethods
**********************************************/
export interface FieldChoiceMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldComputed
**********************************************/
export interface IFieldComputed extends FieldComputedProps,FieldComputedMethods,IBaseExecution<FieldComputed> {

}

/*********************************************
* FieldComputed
**********************************************/
export interface FieldComputed extends SP.Field, FieldComputedProps, FieldComputedMethods {
	EnableLookup?: boolean;
}

/*********************************************
* FieldComputedProps
**********************************************/
export interface FieldComputedProps {

}

/*********************************************
* FieldComputedMethods
**********************************************/
export interface FieldComputedMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldNumber
**********************************************/
export interface IFieldNumber extends FieldNumberProps,FieldNumberMethods,IBaseExecution<FieldNumber> {

}

/*********************************************
* FieldNumber
**********************************************/
export interface FieldNumber extends SP.Field, FieldNumberProps, FieldNumberMethods {
	DisplayFormat?: number;
	MaximumValue?: number;
	MinimumValue?: number;
	ShowAsPercentage?: boolean;
}

/*********************************************
* FieldNumberProps
**********************************************/
export interface FieldNumberProps {

}

/*********************************************
* FieldNumberMethods
**********************************************/
export interface FieldNumberMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldCurrency
**********************************************/
export interface IFieldCurrency extends FieldCurrencyProps,FieldCurrencyMethods,IBaseExecution<FieldCurrency> {

}

/*********************************************
* FieldCurrency
**********************************************/
export interface FieldCurrency extends SP.FieldNumber, FieldCurrencyProps, FieldCurrencyMethods {
	CurrencyLocaleId?: number;
}

/*********************************************
* FieldCurrencyProps
**********************************************/
export interface FieldCurrencyProps {

}

/*********************************************
* FieldCurrencyMethods
**********************************************/
export interface FieldCurrencyMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldDateTime
**********************************************/
export interface IFieldDateTime extends FieldDateTimeProps,FieldDateTimeMethods,IBaseExecution<FieldDateTime> {

}

/*********************************************
* FieldDateTime
**********************************************/
export interface FieldDateTime extends SP.Field, FieldDateTimeProps, FieldDateTimeMethods {
	DateTimeCalendarType?: number;
	DisplayFormat?: number;
	FriendlyDisplayFormat?: number;
}

/*********************************************
* FieldDateTimeProps
**********************************************/
export interface FieldDateTimeProps {

}

/*********************************************
* FieldDateTimeMethods
**********************************************/
export interface FieldDateTimeMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldGeolocation
**********************************************/
export interface IFieldGeolocation extends FieldGeolocationProps,FieldGeolocationMethods,IBaseExecution<FieldGeolocation> {

}

/*********************************************
* FieldGeolocation
**********************************************/
export interface FieldGeolocation extends SP.Field, FieldGeolocationProps, FieldGeolocationMethods {

}

/*********************************************
* FieldGeolocationProps
**********************************************/
export interface FieldGeolocationProps {

}

/*********************************************
* FieldGeolocationMethods
**********************************************/
export interface FieldGeolocationMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldGuid
**********************************************/
export interface IFieldGuid extends FieldGuidProps,FieldGuidMethods,IBaseExecution<FieldGuid> {

}

/*********************************************
* FieldGuid
**********************************************/
export interface FieldGuid extends SP.Field, FieldGuidProps, FieldGuidMethods {

}

/*********************************************
* FieldGuidProps
**********************************************/
export interface FieldGuidProps {

}

/*********************************************
* FieldGuidMethods
**********************************************/
export interface FieldGuidMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldMultiLineText
**********************************************/
export interface IFieldMultiLineText extends FieldMultiLineTextProps,FieldMultiLineTextMethods,IBaseExecution<FieldMultiLineText> {

}

/*********************************************
* FieldMultiLineText
**********************************************/
export interface FieldMultiLineText extends SP.Field, FieldMultiLineTextProps, FieldMultiLineTextMethods {
	AllowHyperlink?: boolean;
	AppendOnly?: boolean;
	NumberOfLines?: number;
	RestrictedMode?: boolean;
	RichText?: boolean;
	UnlimitedLengthInDocumentLibrary?: boolean;
	WikiLinking?: boolean;
}

/*********************************************
* FieldMultiLineTextProps
**********************************************/
export interface FieldMultiLineTextProps {

}

/*********************************************
* FieldMultiLineTextMethods
**********************************************/
export interface FieldMultiLineTextMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldLocation
**********************************************/
export interface IFieldLocation extends FieldLocationProps,FieldLocationMethods,IBaseExecution<FieldLocation> {

}

/*********************************************
* FieldLocation
**********************************************/
export interface FieldLocation extends SP.FieldMultiLineText, FieldLocationProps, FieldLocationMethods {

}

/*********************************************
* FieldLocationProps
**********************************************/
export interface FieldLocationProps {

}

/*********************************************
* FieldLocationMethods
**********************************************/
export interface FieldLocationMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldLookup
**********************************************/
export interface IFieldLookup extends FieldLookupProps,FieldLookupMethods,IBaseExecution<FieldLookup> {

}

/*********************************************
* FieldLookup
**********************************************/
export interface FieldLookup extends SP.Field, FieldLookupProps, FieldLookupMethods {
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
* FieldLookupProps
**********************************************/
export interface FieldLookupProps {

}

/*********************************************
* FieldLookupMethods
**********************************************/
export interface FieldLookupMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldRatingScale
**********************************************/
export interface IFieldRatingScale extends FieldRatingScaleProps,FieldRatingScaleMethods,IBaseExecution<FieldRatingScale> {

}

/*********************************************
* FieldRatingScale
**********************************************/
export interface FieldRatingScale extends SP.FieldMultiChoice, FieldRatingScaleProps, FieldRatingScaleMethods {
	GridEndNumber?: number;
	GridNAOptionText?: string;
	GridStartNumber?: number;
	GridTextRangeAverage?: string;
	GridTextRangeHigh?: string;
	GridTextRangeLow?: string;
	RangeCount?: number;
}

/*********************************************
* FieldRatingScaleProps
**********************************************/
export interface FieldRatingScaleProps {

}

/*********************************************
* FieldRatingScaleMethods
**********************************************/
export interface FieldRatingScaleMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldText
**********************************************/
export interface IFieldText extends FieldTextProps,FieldTextMethods,IBaseExecution<FieldText> {

}

/*********************************************
* FieldText
**********************************************/
export interface FieldText extends SP.Field, FieldTextProps, FieldTextMethods {
	MaxLength?: number;
}

/*********************************************
* FieldTextProps
**********************************************/
export interface FieldTextProps {

}

/*********************************************
* FieldTextMethods
**********************************************/
export interface FieldTextMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldUrl
**********************************************/
export interface IFieldUrl extends FieldUrlProps,FieldUrlMethods,IBaseExecution<FieldUrl> {

}

/*********************************************
* FieldUrl
**********************************************/
export interface FieldUrl extends SP.Field, FieldUrlProps, FieldUrlMethods {
	DisplayFormat?: number;
}

/*********************************************
* FieldUrlProps
**********************************************/
export interface FieldUrlProps {

}

/*********************************************
* FieldUrlMethods
**********************************************/
export interface FieldUrlMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IFieldUser
**********************************************/
export interface IFieldUser extends FieldUserProps,FieldUserMethods,IBaseExecution<FieldUser> {

}

/*********************************************
* FieldUser
**********************************************/
export interface FieldUser extends SP.FieldLookup, FieldUserProps, FieldUserMethods {
	AllowDisplay?: boolean;
	Presence?: boolean;
	SelectionGroup?: number;
	SelectionMode?: number;
}

/*********************************************
* FieldUserProps
**********************************************/
export interface FieldUserProps {

}

/*********************************************
* FieldUserMethods
**********************************************/
export interface FieldUserMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	setShowInDisplayForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInEditForm<T=any>(value?: boolean): IBaseExecution<T>;
	setShowInNewForm<T=any>(value?: boolean): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
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
* IHubSite
**********************************************/
export interface IHubSite extends HubSiteProps,HubSiteMethods,IBaseExecution<HubSite> {

}

/*********************************************
* HubSite
**********************************************/
export interface HubSite extends HubSiteProps, HubSiteMethods {
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
* HubSiteProps
**********************************************/
export interface HubSiteProps {

}

/*********************************************
* HubSiteMethods
**********************************************/
export interface HubSiteMethods {
	delete<T=any>(): IBaseExecution<T>;
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
* IRelatedField
**********************************************/
export interface IRelatedField extends RelatedFieldProps,RelatedFieldMethods,IBaseExecution<RelatedField> {

}

/*********************************************
* RelatedField
**********************************************/
export interface RelatedField extends RelatedFieldProps, RelatedFieldMethods {
	FieldId?: any;
	ListId?: any;
	RelationshipDeleteBehavior?: number;
	WebId?: any;
}

/*********************************************
* RelatedFieldProps
**********************************************/
export interface RelatedFieldProps {
	LookupList<T=SP.List>(): IBaseExecution<T>;
}

/*********************************************
* RelatedFieldMethods
**********************************************/
export interface RelatedFieldMethods {

}

/*********************************************
* IRemoteWeb
**********************************************/
export interface IRemoteWeb extends RemoteWebProps,RemoteWebMethods,IBaseExecution<RemoteWeb> {

}

/*********************************************
* RemoteWeb
**********************************************/
export interface RemoteWeb extends RemoteWebProps, RemoteWebMethods {
	CanSendEmail?: boolean;
	ShareByEmailEnabled?: boolean;
	ShareByLinkEnabled?: boolean;
}

/*********************************************
* RemoteWebProps
**********************************************/
export interface RemoteWebProps {
	Web<T=SP.Web>(): IBaseExecution<T>;
}

/*********************************************
* RemoteWebMethods
**********************************************/
export interface RemoteWebMethods {
	getFileByServerRelativePath<T=SP.File>(serverRelatvieFilePath?: SP.ResourcePath): IBaseExecution<T>;
	getFileByServerRelativeUrl<T=SP.File>(serverRelativeFileUrl?: string): IBaseExecution<T>;
	getFileByUrl<T=SP.File>(fileUrl?: string): IBaseExecution<T>;
	getFolderByServerRelativeUrl<T=SP.Folder>(serverRelativeUrl?: string): IBaseExecution<T>;
	getGroupById<T=SP.Group>(groupId?: number): IBaseExecution<T>;
	getListById<T=SP.List>(listGuid?: any): IBaseExecution<T>;
	getListByServerRelativeUrl<T=SP.List>(serverRelativeUrl?: string): IBaseExecution<T>;
}

/*********************************************
* IRequestUserContext
**********************************************/
export interface IRequestUserContext extends RequestUserContextProps,RequestUserContextMethods,IBaseExecution<RequestUserContext> {

}

/*********************************************
* RequestUserContext
**********************************************/
export interface RequestUserContext extends RequestUserContextProps, RequestUserContextMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RequestUserContextProps
**********************************************/
export interface RequestUserContextProps {
	Current<T=SP.RequestUserContext>(): IBaseExecution<T>;
	User<T=SP.User>(): IBaseExecution<T>;
}

/*********************************************
* RequestUserContextMethods
**********************************************/
export interface RequestUserContextMethods {

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
* IVisualizationAppSynchronizationResult
**********************************************/
export interface IVisualizationAppSynchronizationResult extends VisualizationAppSynchronizationResultProps,VisualizationAppSynchronizationResultMethods,IBaseExecution<VisualizationAppSynchronizationResult> {

}

/*********************************************
* VisualizationAppSynchronizationResult
**********************************************/
export interface VisualizationAppSynchronizationResult extends VisualizationAppSynchronizationResultProps, VisualizationAppSynchronizationResultMethods {
	SynchronizationData?: string;
	SynchronizationStatus?: number;
}

/*********************************************
* VisualizationAppSynchronizationResultProps
**********************************************/
export interface VisualizationAppSynchronizationResultProps {
	AppMappedViews<T=SP.View>(): IBaseCollection<T>;
}

/*********************************************
* VisualizationAppSynchronizationResultMethods
**********************************************/
export interface VisualizationAppSynchronizationResultMethods {

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
* ITenantSettings
**********************************************/
export interface ITenantSettings extends TenantSettingsProps,TenantSettingsMethods,IBaseExecution<TenantSettings> {

}

/*********************************************
* TenantSettings
**********************************************/
export interface TenantSettings extends TenantSettingsProps, TenantSettingsMethods {
	CorporateCatalogUrl?: string;
}

/*********************************************
* TenantSettingsProps
**********************************************/
export interface TenantSettingsProps {
	Current<T=SP.TenantSettings>(): IBaseExecution<T>;
}

/*********************************************
* TenantSettingsMethods
**********************************************/
export interface TenantSettingsMethods {

}

/*********************************************
* IAppPrincipalIdentityProvider
**********************************************/
export interface IAppPrincipalIdentityProvider extends AppPrincipalIdentityProviderProps,AppPrincipalIdentityProviderMethods,IBaseExecution<AppPrincipalIdentityProvider> {

}

/*********************************************
* AppPrincipalIdentityProvider
**********************************************/
export interface AppPrincipalIdentityProvider extends AppPrincipalIdentityProviderProps, AppPrincipalIdentityProviderMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppPrincipalIdentityProviderProps
**********************************************/
export interface AppPrincipalIdentityProviderProps {
	External<T=SP.AppPrincipalIdentityProvider>(): IBaseExecution<T>;
}

/*********************************************
* AppPrincipalIdentityProviderMethods
**********************************************/
export interface AppPrincipalIdentityProviderMethods {

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

/*********************************************
* IListItemCollection
**********************************************/
export interface IListItemCollection extends ListItemCollectionProps,ListItemCollectionMethods,IBaseExecution<ListItemCollection> {

}

/*********************************************
* ListItemCollection
**********************************************/
export interface ListItemCollection extends ListItemCollectionProps, ListItemCollectionMethods {

}

/*********************************************
* ListItemCollectionProps
**********************************************/
export interface ListItemCollectionProps {

}

/*********************************************
* ListItemCollectionMethods
**********************************************/
export interface ListItemCollectionMethods {
	getById<T=SP.ListItem>(itemId?: number): IBaseExecution<T>;
	getByStringId<T=SP.ListItem>(sId?: string): IBaseExecution<T>;
}

/*********************************************
* IFieldCollection
**********************************************/
export interface IFieldCollection extends FieldCollectionProps,FieldCollectionMethods,IBaseExecution<FieldCollection> {

}

/*********************************************
* FieldCollection
**********************************************/
export interface FieldCollection extends FieldCollectionProps, FieldCollectionMethods {

}

/*********************************************
* FieldCollectionProps
**********************************************/
export interface FieldCollectionProps {

}

/*********************************************
* FieldCollectionMethods
**********************************************/
export interface FieldCollectionMethods {
	addDependentLookupField<T=SP.Field>(displayName?: string, primaryLookupFieldId?: any, showField?: string): IBaseExecution<T>;
	addField<T=SP.Field>(parameters?: SP.FieldCreationInformation): IBaseExecution<T>;
	createFieldAsXml<T=SP.Field>(parameters?: SP.XmlSchemaFieldCreationInformation): IBaseExecution<T>;
	getById<T=SP.Field>(id?: any): IBaseExecution<T>;
	getByInternalNameOrTitle<T=SP.Field>(strName?: string): IBaseExecution<T>;
	getByTitle<T=SP.Field>(title?: string): IBaseExecution<T>;
}

/*********************************************
* IFieldLinkCollection
**********************************************/
export interface IFieldLinkCollection extends FieldLinkCollectionProps,FieldLinkCollectionMethods,IBaseExecution<FieldLinkCollection> {

}

/*********************************************
* FieldLinkCollection
**********************************************/
export interface FieldLinkCollection extends FieldLinkCollectionProps, FieldLinkCollectionMethods {

}

/*********************************************
* FieldLinkCollectionProps
**********************************************/
export interface FieldLinkCollectionProps {

}

/*********************************************
* FieldLinkCollectionMethods
**********************************************/
export interface FieldLinkCollectionMethods {
	getById<T=SP.FieldLink>(id?: any): IBaseExecution<T>;
	reorder<T=any>(internalNames?: Array<string>): IBaseExecution<T>;
}

/*********************************************
* IFolderCollection
**********************************************/
export interface IFolderCollection extends FolderCollectionProps,FolderCollectionMethods,IBaseExecution<FolderCollection> {

}

/*********************************************
* FolderCollection
**********************************************/
export interface FolderCollection extends FolderCollectionProps, FolderCollectionMethods {

}

/*********************************************
* FolderCollectionProps
**********************************************/
export interface FolderCollectionProps {

}

/*********************************************
* FolderCollectionMethods
**********************************************/
export interface FolderCollectionMethods {
	add<T=SP.Folder>(url?: string): IBaseExecution<T>;
	addUsingPath<T=SP.Folder>(DecodedUrl?: string, Overwrite?: boolean): IBaseExecution<T>;
	addWithOverwrite<T=SP.Folder>(url?: string, overwrite?: boolean): IBaseExecution<T>;
	getByPath<T=SP.Folder>(DecodedUrl?: string): IBaseExecution<T>;
	getByUrl<T=SP.Folder>(url?: string): IBaseExecution<T>;
}

/*********************************************
* IFormCollection
**********************************************/
export interface IFormCollection extends FormCollectionProps,FormCollectionMethods,IBaseExecution<FormCollection> {

}

/*********************************************
* FormCollection
**********************************************/
export interface FormCollection extends FormCollectionProps, FormCollectionMethods {

}

/*********************************************
* FormCollectionProps
**********************************************/
export interface FormCollectionProps {

}

/*********************************************
* FormCollectionMethods
**********************************************/
export interface FormCollectionMethods {
	getById<T=SP.Form>(id?: any): IBaseExecution<T>;
	getByPageType<T=SP.Form>(formType?: number): IBaseExecution<T>;
}

/*********************************************
* IGroupCollection
**********************************************/
export interface IGroupCollection extends GroupCollectionProps,GroupCollectionMethods,IBaseExecution<GroupCollection> {

}

/*********************************************
* GroupCollection
**********************************************/
export interface GroupCollection extends GroupCollectionProps, GroupCollectionMethods {

}

/*********************************************
* GroupCollectionProps
**********************************************/
export interface GroupCollectionProps {

}

/*********************************************
* GroupCollectionMethods
**********************************************/
export interface GroupCollectionMethods {
	getById<T=SP.Group>(id?: number): IBaseExecution<T>;
	getByName<T=SP.Group>(name?: string): IBaseExecution<T>;
	removeById<T=any>(id?: number): IBaseExecution<T>;
	removeByLoginName<T=any>(loginName?: string): IBaseExecution<T>;
}

/*********************************************
* IPushNotificationSubscriberCollection
**********************************************/
export interface IPushNotificationSubscriberCollection extends PushNotificationSubscriberCollectionProps,PushNotificationSubscriberCollectionMethods,IBaseExecution<PushNotificationSubscriberCollection> {

}

/*********************************************
* PushNotificationSubscriberCollection
**********************************************/
export interface PushNotificationSubscriberCollection extends PushNotificationSubscriberCollectionProps, PushNotificationSubscriberCollectionMethods {

}

/*********************************************
* PushNotificationSubscriberCollectionProps
**********************************************/
export interface PushNotificationSubscriberCollectionProps {

}

/*********************************************
* PushNotificationSubscriberCollectionMethods
**********************************************/
export interface PushNotificationSubscriberCollectionMethods {
	getByStoreId<T=SP.PushNotificationSubscriber>(id?: string): IBaseExecution<T>;
}

/*********************************************
* IRecycleBinItemCollection
**********************************************/
export interface IRecycleBinItemCollection extends RecycleBinItemCollectionProps,RecycleBinItemCollectionMethods,IBaseExecution<RecycleBinItemCollection> {

}

/*********************************************
* RecycleBinItemCollection
**********************************************/
export interface RecycleBinItemCollection extends RecycleBinItemCollectionProps, RecycleBinItemCollectionMethods {

}

/*********************************************
* RecycleBinItemCollectionProps
**********************************************/
export interface RecycleBinItemCollectionProps {

}

/*********************************************
* RecycleBinItemCollectionMethods
**********************************************/
export interface RecycleBinItemCollectionMethods {
	deleteAll<T=any>(): IBaseExecution<T>;
	deleteAllSecondStageItems<T=any>(): IBaseExecution<T>;
	deleteByIds<T=any>(ids?: Array<string>): IBaseExecution<T>;
	getById<T=SP.RecycleBinItem>(id?: any): IBaseExecution<T>;
	moveAllToSecondStage<T=any>(): IBaseExecution<T>;
	moveToSecondStageByIds<T=any>(ids?: Array<string>): IBaseExecution<T>;
	restoreAll<T=any>(): IBaseExecution<T>;
	restoreByIds<T=any>(ids?: Array<string>): IBaseExecution<T>;
}

/*********************************************
* IRelatedFieldCollection
**********************************************/
export interface IRelatedFieldCollection extends RelatedFieldCollectionProps,RelatedFieldCollectionMethods,IBaseExecution<RelatedFieldCollection> {

}

/*********************************************
* RelatedFieldCollection
**********************************************/
export interface RelatedFieldCollection extends RelatedFieldCollectionProps, RelatedFieldCollectionMethods {

}

/*********************************************
* RelatedFieldCollectionProps
**********************************************/
export interface RelatedFieldCollectionProps {

}

/*********************************************
* RelatedFieldCollectionMethods
**********************************************/
export interface RelatedFieldCollectionMethods {
	getByFieldId<T=SP.RelatedField>(fieldId?: any): IBaseExecution<T>;
}

/*********************************************
* IUserCollection
**********************************************/
export interface IUserCollection extends UserCollectionProps,UserCollectionMethods,IBaseExecution<UserCollection> {

}

/*********************************************
* UserCollection
**********************************************/
export interface UserCollection extends UserCollectionProps, UserCollectionMethods {

}

/*********************************************
* UserCollectionProps
**********************************************/
export interface UserCollectionProps {

}

/*********************************************
* UserCollectionMethods
**********************************************/
export interface UserCollectionMethods {
	getByEmail<T=SP.User>(emailAddress?: string): IBaseExecution<T>;
	getById<T=SP.User>(id?: number): IBaseExecution<T>;
	getByLoginName<T=SP.User>(loginName?: string): IBaseExecution<T>;
	removeById<T=any>(id?: number): IBaseExecution<T>;
	removeByLoginName<T=any>(loginName?: string): IBaseExecution<T>;
}

/*********************************************
* IViewCollection
**********************************************/
export interface IViewCollection extends ViewCollectionProps,ViewCollectionMethods,IBaseExecution<ViewCollection> {

}

/*********************************************
* ViewCollection
**********************************************/
export interface ViewCollection extends ViewCollectionProps, ViewCollectionMethods {

}

/*********************************************
* ViewCollectionProps
**********************************************/
export interface ViewCollectionProps {

}

/*********************************************
* ViewCollectionMethods
**********************************************/
export interface ViewCollectionMethods {
	add<T=SP.View>(parameters?: SP.ViewCreationInformation): IBaseExecution<T>;
	getById<T=SP.View>(guidId?: any): IBaseExecution<T>;
	getByTitle<T=SP.View>(strTitle?: string): IBaseExecution<T>;
}

/*********************************************
* IWebCollection
**********************************************/
export interface IWebCollection extends WebCollectionProps,WebCollectionMethods,IBaseExecution<WebCollection> {

}

/*********************************************
* WebCollection
**********************************************/
export interface WebCollection extends WebCollectionProps, WebCollectionMethods {

}

/*********************************************
* WebCollectionProps
**********************************************/
export interface WebCollectionProps {

}

/*********************************************
* WebCollectionMethods
**********************************************/
export interface WebCollectionMethods {
	add<T=SP.Web>(parameters?: SP.WebCreationInformation): IBaseExecution<T>;
}
