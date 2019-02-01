import { IBaseExecution } from "../";
import { IBaseCollection } from "../";
import { IBaseQuery } from "../";
import { IBaseResults } from "../";
import { SP } from "../";
import { Microsoft } from "../";

/*********************************************
* IApiMetadata
**********************************************/
export interface IApiMetadata extends ApiMetadataCollections,ApiMetadataMethods,IBaseQuery<IApiMetadataQuery> {

}

/*********************************************
* IApiMetadataQuery
**********************************************/
export interface IApiMetadataQuery extends ApiMetadataQuery,ApiMetadataMethods {

}

/*********************************************
* ApiMetadata
**********************************************/
export interface ApiMetadata extends ApiMetadataCollections, ApiMetadataMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ApiMetadataProps
**********************************************/
export interface ApiMetadataProps {
	Current(): IBaseExecution<SP.ApiMetadata>;
}

/*********************************************
* ApiMetadataCollections
**********************************************/
export interface ApiMetadataCollections extends ApiMetadataProps {
	Types(): IBaseCollection<SP.TypeInformation>;
	Types(id: string | number): IBaseQuery<SP.TypeInformation>;
}

/*********************************************
* ApiMetadataQuery
**********************************************/
export interface ApiMetadataQuery extends ApiMetadataProps {
	Types: IBaseResults<SP.TypeInformation>;
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
* TypeInformationCollections
**********************************************/
export interface TypeInformationCollections {

}

/*********************************************
* ISite
**********************************************/
export interface ISite extends SiteCollections,SiteMethods,IBaseQuery<ISiteQuery> {

}

/*********************************************
* ISiteQuery
**********************************************/
export interface ISiteQuery extends SiteQuery,SiteMethods {

}

/*********************************************
* Site
**********************************************/
export interface Site extends SiteCollections, SiteMethods {
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
	Audit(): IBaseExecution<SP.Audit>;
	Owner(): IBaseExecution<SP.User> & SP.UserCollections;
	RootWeb(): IBaseExecution<SP.Web> & SP.WebCollections;
	SecondaryContact(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* SiteCollections
**********************************************/
export interface SiteCollections extends SiteProps {
	CustomScriptSafeDomains(): IBaseCollection<SP.ScriptSafeDomain> & SP.ScriptSafeDomainCollectionMethods;
	CustomScriptSafeDomains(id: string | number): IBaseQuery<SP.ScriptSafeDomain> & SP.ScriptSafeDomainCollections;
	EventReceivers(): IBaseCollection<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollectionMethods;
	EventReceivers(id: string | number): IBaseQuery<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollections;
	Features(): IBaseCollection<SP.Feature> & SP.FeatureCollectionMethods;
	Features(id: string | number): IBaseQuery<SP.Feature> & SP.FeatureCollections;
	RecycleBin(): IBaseCollection<SP.RecycleBinItem> & SP.RecycleBinItemCollectionMethods;
	RecycleBin(id: string | number): IBaseQuery<SP.RecycleBinItem> & SP.RecycleBinItemCollections;
	UserCustomActions(): IBaseCollection<SP.UserCustomAction> & SP.UserCustomActionCollectionMethods;
	UserCustomActions(id: string | number): IBaseQuery<SP.UserCustomAction> & SP.UserCustomActionCollections;
}

/*********************************************
* SiteQuery
**********************************************/
export interface SiteQuery extends SiteProps {
	CustomScriptSafeDomains: IBaseResults<SP.ScriptSafeDomain>;
	EventReceivers: IBaseResults<SP.EventReceiverDefinition>;
	Features: IBaseResults<SP.Feature>;
	RecycleBin: IBaseResults<SP.RecycleBinItem>;
	UserCustomActions: IBaseResults<SP.UserCustomAction>;
}

/*********************************************
* SiteMethods
**********************************************/
export interface SiteMethods {
	createCopyJob(exportObjectUris?: Array<string>, destinationUri?: string, options?: SP.CopyMigrationOptions): IBaseExecution<SP.CopyMigrationInfo>;
	createCopyJobs(exportObjectUris?: Array<string>, destinationUri?: string, options?: SP.CopyMigrationOptions): IBaseExecution<Array<SP.CopyMigrationInfo>>;
	createMigrationIngestionJob(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string, ingestionTaskKey?: SP.IngestionTaskKey): IBaseExecution<any>;
	createMigrationJob(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string): IBaseExecution<any>;
	createMigrationJobEncrypted(gWebId?: any, azureContainerSourceUri?: string, azureContainerManifestUri?: string, azureQueueReportUri?: string, options?: SP.EncryptionOption): IBaseExecution<any>;
	createPreviewSPSite(upgrade?: boolean, sendemail?: boolean): IBaseExecution<any>;
	deleteMigrationJob(id?: any): IBaseExecution<boolean>;
	extendUpgradeReminderDate(): IBaseExecution<any>;
	getBringYourOwnKeySiteStatus(): IBaseExecution<SP.CustomerKeyStatusInfo>;
	getBringYourOwnKeyTenantStatus(): IBaseExecution<SP.CustomerKeyStatusInfo>;
	getCatalog(typeCatalog?: number): IBaseExecution<SP.List>;
	getChanges(query?: SP.ChangeQuery): IBaseExecution<Array<SP.Change>>;
	getCopyJobProgress(copyJobInfo?: SP.CopyMigrationInfo): IBaseExecution<SP.CopyJobProgress>;
	getHubSiteJoinApprovalCorrelationId(): IBaseExecution<string>;
	getMigrationJobStatus(id?: any): IBaseExecution<number>;
	getMigrationStatus(): IBaseExecution<Array<SP.SPMigrationJobStatus>>;
	getRecycleBinItems(pagingInfo?: string, rowLimit?: number, isAscending?: boolean, orderBy?: number, itemState?: number): IBaseExecution<Array<SP.RecycleBinItem>>;
	getWebPath(siteId?: any, webId?: any): IBaseExecution<SP.ResourcePath>;
	getWebTemplates(LCID?: number, overrideCompatLevel?: number): IBaseExecution<Array<SP.WebTemplate>>;
	invalidate(): IBaseExecution<any>;
	joinHubSite(hubSiteId?: any, approvalToken?: string, approvalCorrelationId?: string): IBaseExecution<any>;
	makeHubSite(): IBaseExecution<SP.HubSite>;
	multiGeoCopyJob(jobId?: any, userId?: number, binaryPayload?: any): IBaseExecution<any>;
	needsUpgradeByType(versionUpgrade?: boolean, recursive?: boolean): IBaseExecution<boolean>;
	onboardTenantForBringYourOwnKey(keyInfo?: SP.CustomerKeyInfo): IBaseExecution<SP.CustomerKeyStatusInfo>;
	onHubSiteJoinRequestApproved(joiningSiteId?: any): IBaseExecution<string>;
	onHubSiteJoinRequestCanceled(approvalCorrelationId?: string): IBaseExecution<any>;
	onHubSiteJoinRequestStarted(approvalCorrelationId?: string): IBaseExecution<any>;
	openWeb(strUrl?: string): IBaseExecution<SP.Web>;
	openWebById(gWebId?: any): IBaseExecution<SP.Web>;
	openWebUsingPath(path?: SP.ResourcePath): IBaseExecution<SP.Web>;
	provisionMigrationContainers(): IBaseExecution<SP.ProvisionedMigrationContainersInfo>;
	provisionMigrationQueue(): IBaseExecution<SP.ProvisionedMigrationQueueInfo>;
	recoverTenantForBringYourOwnKey(keyInfo?: SP.CustomerKeyInfo): IBaseExecution<SP.CustomerKeyStatusInfo>;
	registerHubSite(creationInformation?: SP.HubSiteCreationInformation): IBaseExecution<SP.HubSite>;
	removeHubSite(): IBaseExecution<any>;
	rollTenantBringYourOwnKey(keyType?: number, keyVaultInfo?: SP.CustomerKeyVaultInfo): IBaseExecution<SP.CustomerKeyStatusInfo>;
	runHealthCheck(ruleId?: any, bRepair?: boolean, bRunAlways?: boolean): IBaseExecution<SP.SiteHealth.SiteHealthSummary>;
	runUpgradeSiteSession(versionUpgrade?: boolean, queueOnly?: boolean, sendEmail?: boolean): IBaseExecution<any>;
	unregisterHubSite(): IBaseExecution<any>;
	updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs?: boolean): IBaseExecution<any>;
	validateHubSiteJoinApprovalToken(joiningSiteId?: any, approvalToken?: string): IBaseExecution<boolean>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IAudit
**********************************************/
export interface IAudit extends AuditCollections,AuditMethods,IBaseQuery<IAuditQuery> {

}

/*********************************************
* IAuditQuery
**********************************************/
export interface IAuditQuery extends AuditQuery,AuditMethods {

}

/*********************************************
* Audit
**********************************************/
export interface Audit extends AuditCollections, AuditMethods {
	AuditFlags?: number;
}

/*********************************************
* AuditProps
**********************************************/
export interface AuditProps {

}

/*********************************************
* AuditCollections
**********************************************/
export interface AuditCollections extends AuditProps {

}

/*********************************************
* AuditQuery
**********************************************/
export interface AuditQuery extends AuditProps {

}

/*********************************************
* AuditMethods
**********************************************/
export interface AuditMethods {
	update(): IBaseExecution<any>;
}

/*********************************************
* IScriptSafeDomain
**********************************************/
export interface IScriptSafeDomain extends ScriptSafeDomainCollections,ScriptSafeDomainMethods,IBaseQuery<IScriptSafeDomainQuery> {

}

/*********************************************
* IScriptSafeDomainQuery
**********************************************/
export interface IScriptSafeDomainQuery extends ScriptSafeDomainQuery,ScriptSafeDomainMethods {

}

/*********************************************
* ScriptSafeDomain
**********************************************/
export interface ScriptSafeDomain extends ScriptSafeDomainCollections, ScriptSafeDomainMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ScriptSafeDomainProps
**********************************************/
export interface ScriptSafeDomainProps {

}

/*********************************************
* ScriptSafeDomainCollections
**********************************************/
export interface ScriptSafeDomainCollections extends ScriptSafeDomainProps {

}

/*********************************************
* ScriptSafeDomainCollectionMethods
**********************************************/
export interface ScriptSafeDomainCollectionMethods {
	create(parameters?: SP.ScriptSafeDomainEntityData): IBaseExecution<SP.ScriptSafeDomain>;
	getByDomainName(domainName?: string): IBaseExecution<SP.ScriptSafeDomain>;
}

/*********************************************
* ScriptSafeDomainQuery
**********************************************/
export interface ScriptSafeDomainQuery extends ScriptSafeDomainProps {

}

/*********************************************
* ScriptSafeDomainMethods
**********************************************/
export interface ScriptSafeDomainMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IEventReceiverDefinition
**********************************************/
export interface IEventReceiverDefinition extends EventReceiverDefinitionCollections,EventReceiverDefinitionMethods,IBaseQuery<IEventReceiverDefinitionQuery> {

}

/*********************************************
* IEventReceiverDefinitionQuery
**********************************************/
export interface IEventReceiverDefinitionQuery extends EventReceiverDefinitionQuery,EventReceiverDefinitionMethods {

}

/*********************************************
* EventReceiverDefinition
**********************************************/
export interface EventReceiverDefinition extends EventReceiverDefinitionCollections, EventReceiverDefinitionMethods {
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
* EventReceiverDefinitionCollections
**********************************************/
export interface EventReceiverDefinitionCollections extends EventReceiverDefinitionProps {

}

/*********************************************
* EventReceiverDefinitionCollectionMethods
**********************************************/
export interface EventReceiverDefinitionCollectionMethods {
	add(eventReceiverCreationInformation?: SP.EventReceiverDefinitionCreationInformation): IBaseExecution<SP.EventReceiverDefinition>;
	getById(eventReceiverId?: any): IBaseExecution<SP.EventReceiverDefinition>;
}

/*********************************************
* EventReceiverDefinitionQuery
**********************************************/
export interface EventReceiverDefinitionQuery extends EventReceiverDefinitionProps {

}

/*********************************************
* EventReceiverDefinitionMethods
**********************************************/
export interface EventReceiverDefinitionMethods {
	delete(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* Feature
**********************************************/
export interface Feature {
	DefinitionId?: any;
	DisplayName?: string;
}

/*********************************************
* FeatureCollections
**********************************************/
export interface FeatureCollections extends FeatureCollectionMethods {

}

/*********************************************
* FeatureCollectionMethods
**********************************************/
export interface FeatureCollectionMethods {
	add(featureId?: any, force?: boolean, featdefScope?: number): IBaseExecution<SP.Feature>;
	getById(featureId?: any): IBaseExecution<SP.Feature>;
	remove(featureId?: any, force?: boolean): IBaseExecution<any>;
	getByName(name?: string): IBaseExecution<IBaseResults<SP.Feature>>;
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
* PrincipalCollections
**********************************************/
export interface PrincipalCollections {

}

/*********************************************
* IUser
**********************************************/
export interface IUser extends UserCollections,UserMethods,IBaseQuery<IUserQuery> {

}

/*********************************************
* IUserQuery
**********************************************/
export interface IUserQuery extends UserQuery,UserMethods {

}

/*********************************************
* User
**********************************************/
export interface User extends SP.Principal, UserCollections, UserMethods {
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

}

/*********************************************
* UserCollections
**********************************************/
export interface UserCollections extends UserProps {
	Alerts(): IBaseCollection<SP.Alert> & SP.AlertCollectionMethods;
	Alerts(id: string | number): IBaseQuery<SP.Alert> & SP.AlertCollections;
	Groups(): IBaseCollection<SP.Group> & SP.GroupCollectionMethods;
	Groups(id: string | number): IBaseQuery<SP.Group> & SP.GroupCollections;
}

/*********************************************
* UserCollectionMethods
**********************************************/
export interface UserCollectionMethods {
	getByEmail(emailAddress?: string): IBaseExecution<SP.User>;
	getById(id?: number): IBaseExecution<SP.User>;
	getByLoginName(loginName?: string): IBaseExecution<SP.User>;
	removeById(id?: number): IBaseExecution<any>;
	removeByLoginName(loginName?: string): IBaseExecution<any>;
}

/*********************************************
* UserQuery
**********************************************/
export interface UserQuery extends UserProps {
	Alerts: IBaseResults<SP.Alert>;
	Groups: IBaseResults<SP.Group>;
}

/*********************************************
* UserMethods
**********************************************/
export interface UserMethods {
	update(): IBaseExecution<any>;
	add(properties?: SP.UserCreationInformation): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IAlert
**********************************************/
export interface IAlert extends AlertCollections,AlertMethods,IBaseQuery<IAlertQuery> {

}

/*********************************************
* IAlertQuery
**********************************************/
export interface IAlertQuery extends AlertQuery,AlertMethods {

}

/*********************************************
* Alert
**********************************************/
export interface Alert extends AlertCollections, AlertMethods {
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
	AllProperties(): IBaseExecution<SP.PropertyValues>;
	Item(): IBaseExecution<SP.ListItem> & SP.ListItemCollections;
	List(): IBaseExecution<SP.List> & SP.ListCollections;
	User(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* AlertCollections
**********************************************/
export interface AlertCollections extends AlertProps {

}

/*********************************************
* AlertCollectionMethods
**********************************************/
export interface AlertCollectionMethods {
	add(alertCreationInformation?: SP.AlertCreationInformation): IBaseExecution<any>;
	contains(idAlert?: any): IBaseExecution<boolean>;
	deleteAlert(idAlert?: any): IBaseExecution<any>;
	deleteAlertAtIndex(index?: number): IBaseExecution<any>;
	getById(idAlert?: any): IBaseExecution<SP.Alert>;
}

/*********************************************
* AlertQuery
**********************************************/
export interface AlertQuery extends AlertProps {

}

/*********************************************
* AlertMethods
**********************************************/
export interface AlertMethods {
	updateAlert(): IBaseExecution<any>;
}

/*********************************************
* PropertyValues
**********************************************/
export interface PropertyValues {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PropertyValuesCollections
**********************************************/
export interface PropertyValuesCollections {

}

/*********************************************
* ISecurableObject
**********************************************/
export interface ISecurableObject extends SecurableObjectCollections,SecurableObjectMethods,IBaseQuery<ISecurableObjectQuery> {

}

/*********************************************
* ISecurableObjectQuery
**********************************************/
export interface ISecurableObjectQuery extends SecurableObjectQuery,SecurableObjectMethods {

}

/*********************************************
* SecurableObject
**********************************************/
export interface SecurableObject extends SecurableObjectCollections, SecurableObjectMethods {
	HasUniqueRoleAssignments?: boolean;
}

/*********************************************
* SecurableObjectProps
**********************************************/
export interface SecurableObjectProps {
	FirstUniqueAncestorSecurableObject(): IBaseExecution<SP.SecurableObject>;
}

/*********************************************
* SecurableObjectCollections
**********************************************/
export interface SecurableObjectCollections extends SecurableObjectProps {
	RoleAssignments(): IBaseCollection<SP.RoleAssignment> & SP.RoleAssignmentCollectionMethods;
	RoleAssignments(id: string | number): IBaseQuery<SP.RoleAssignment> & SP.RoleAssignmentCollections;
}

/*********************************************
* SecurableObjectQuery
**********************************************/
export interface SecurableObjectQuery extends SecurableObjectProps {
	RoleAssignments: IBaseResults<SP.RoleAssignment>;
}

/*********************************************
* SecurableObjectMethods
**********************************************/
export interface SecurableObjectMethods {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): IBaseExecution<any>;
	resetRoleInheritance(): IBaseExecution<any>;
}

/*********************************************
* IRoleAssignment
**********************************************/
export interface IRoleAssignment extends RoleAssignmentCollections,RoleAssignmentMethods,IBaseQuery<IRoleAssignmentQuery> {

}

/*********************************************
* IRoleAssignmentQuery
**********************************************/
export interface IRoleAssignmentQuery extends RoleAssignmentQuery,RoleAssignmentMethods {

}

/*********************************************
* RoleAssignment
**********************************************/
export interface RoleAssignment extends RoleAssignmentCollections, RoleAssignmentMethods {
	PrincipalId?: number;
}

/*********************************************
* RoleAssignmentProps
**********************************************/
export interface RoleAssignmentProps {
	Member(): IBaseExecution<SP.Principal>;
}

/*********************************************
* RoleAssignmentCollections
**********************************************/
export interface RoleAssignmentCollections extends RoleAssignmentProps {
	RoleDefinitionBindings(): IBaseCollection<SP.RoleDefinition> & SP.RoleDefinitionCollectionMethods;
	RoleDefinitionBindings(id: string | number): IBaseQuery<SP.RoleDefinition> & SP.RoleDefinitionCollections;
}

/*********************************************
* RoleAssignmentCollectionMethods
**********************************************/
export interface RoleAssignmentCollectionMethods {
	addRoleAssignment(principalId?: number, roleDefId?: number): IBaseExecution<any>;
	getByPrincipalId(principalId?: number): IBaseExecution<SP.RoleAssignment>;
	removeRoleAssignment(principalId?: number, roleDefId?: number): IBaseExecution<any>;
}

/*********************************************
* RoleAssignmentQuery
**********************************************/
export interface RoleAssignmentQuery extends RoleAssignmentProps {
	RoleDefinitionBindings: IBaseResults<SP.RoleDefinition>;
}

/*********************************************
* RoleAssignmentMethods
**********************************************/
export interface RoleAssignmentMethods {
	delete(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IRoleDefinition
**********************************************/
export interface IRoleDefinition extends RoleDefinitionCollections,RoleDefinitionMethods,IBaseQuery<IRoleDefinitionQuery> {

}

/*********************************************
* IRoleDefinitionQuery
**********************************************/
export interface IRoleDefinitionQuery extends RoleDefinitionQuery,RoleDefinitionMethods {

}

/*********************************************
* RoleDefinition
**********************************************/
export interface RoleDefinition extends RoleDefinitionCollections, RoleDefinitionMethods {
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
* RoleDefinitionCollections
**********************************************/
export interface RoleDefinitionCollections extends RoleDefinitionProps {

}

/*********************************************
* RoleDefinitionCollectionMethods
**********************************************/
export interface RoleDefinitionCollectionMethods {
	getById(id?: number): IBaseExecution<SP.RoleDefinition>;
	removeAll(): IBaseExecution<any>;
	getById(id?: number): IBaseExecution<SP.RoleDefinition>;
	getByName(name?: string): IBaseExecution<SP.RoleDefinition>;
	getByType(roleType?: number): IBaseExecution<SP.RoleDefinition>;
	recreateMissingDefaultRoleDefinitions(): IBaseExecution<any>;
}

/*********************************************
* RoleDefinitionQuery
**********************************************/
export interface RoleDefinitionQuery extends RoleDefinitionProps {

}

/*********************************************
* RoleDefinitionMethods
**********************************************/
export interface RoleDefinitionMethods {
	delete(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IListItem
**********************************************/
export interface IListItem extends ListItemCollections,ListItemMethods,IBaseQuery<IListItemQuery> {

}

/*********************************************
* IListItemQuery
**********************************************/
export interface IListItemQuery extends ListItemQuery,ListItemMethods {

}

/*********************************************
* ListItem
**********************************************/
export interface ListItem extends SP.SecurableObject, ListItemCollections, ListItemMethods {
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
	ContentType(): IBaseExecution<SP.ContentType> & SP.ContentTypeCollections;
	GetDlpPolicyTip(): IBaseExecution<SP.DlpPolicyTip>;
	FieldValuesAsHtml(): IBaseExecution<SP.FieldStringValues>;
	FieldValuesAsText(): IBaseExecution<SP.FieldStringValues>;
	FieldValuesForEdit(): IBaseExecution<SP.FieldStringValues>;
	File(): IBaseExecution<SP.File> & SP.FileCollections;
	Folder(): IBaseExecution<SP.Folder> & SP.FolderCollections;
	LikedByInformation(): IBaseExecution<Microsoft.SharePoint.Likes.likedByInformation>;
	ParentList(): IBaseExecution<SP.List> & SP.ListCollections;
	Properties(): IBaseExecution<SP.PropertyValues>;
}

/*********************************************
* ListItemCollections
**********************************************/
export interface ListItemCollections extends ListItemProps {
	AttachmentFiles(): IBaseCollection<SP.Attachment> & SP.AttachmentCollectionMethods;
	AttachmentFiles(id: string | number): IBaseQuery<SP.Attachment> & SP.AttachmentCollections;
	Versions(): IBaseCollection<SP.ListItemVersion> & SP.ListItemVersionCollectionMethods;
	Versions(id: string | number): IBaseQuery<SP.ListItemVersion> & SP.ListItemVersionCollections;
}

/*********************************************
* ListItemCollectionMethods
**********************************************/
export interface ListItemCollectionMethods {
	getById(itemId?: number): IBaseExecution<SP.ListItem>;
	getByStringId(sId?: string): IBaseExecution<SP.ListItem>;
	add(parameters?: SP.ListItemCreationInformation | any): IBaseExecution<SP.ListItem>;
}

/*********************************************
* ListItemQuery
**********************************************/
export interface ListItemQuery extends ListItemProps {
	AttachmentFiles: IBaseResults<SP.Attachment>;
	Versions: IBaseResults<SP.ListItemVersion>;
}

/*********************************************
* ListItemMethods
**********************************************/
export interface ListItemMethods {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): IBaseExecution<any>;
	resetRoleInheritance(): IBaseExecution<any>;
	delete(): IBaseExecution<any>;
	getChanges(query?: SP.ChangeQuery): IBaseExecution<Array<SP.Change>>;
	getHashtags(): IBaseExecution<Array<SP.Hashtag>>;
	getUserEffectivePermissions(userName?: string): IBaseExecution<SP.BasePermissions>;
	getWOPIFrameUrl(action?: number): IBaseExecution<string>;
	mediaServiceUpdate(parameters?: SP.MediaServiceUpdateParameters): IBaseExecution<any>;
	mediaServiceUpdateV2(parameters?: SP.MediaServiceUpdateParameters, eventFiringEnabled?: boolean): IBaseExecution<any>;
	overridePolicyTip(userAction?: number, justification?: string): IBaseExecution<number>;
	parseAndSetFieldValue(fieldName?: string, value?: string): IBaseExecution<any>;
	recycle(): IBaseExecution<any>;
	setCommentsDisabled(value?: boolean): IBaseExecution<any>;
	setComplianceTag(complianceTag?: string, isTagPolicyHold?: boolean, isTagPolicyRecord?: boolean, isEventBasedTag?: boolean, isTagSuperLock?: boolean): IBaseExecution<any>;
	setComplianceTagWithExplicitMetasUpdate(complianceTag?: string, complianceFlags?: number, complianceTagWrittenTime?: any, userEmailAddress?: string): IBaseExecution<any>;
	setComplianceTagWithHold(complianceTag?: string): IBaseExecution<any>;
	setComplianceTagWithMetaInfo(complianceTag?: string, blockDelete?: boolean, blockEdit?: boolean, complianceTagWrittenTime?: any, userEmailAddress?: string, isTagSuperLock?: boolean): IBaseExecution<any>;
	setComplianceTagWithNoHold(complianceTag?: string): IBaseExecution<any>;
	setComplianceTagWithRecord(complianceTag?: string): IBaseExecution<any>;
	systemUpdate(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	updateEx(parameters?: SP.ListItemUpdateParameters): IBaseExecution<any>;
	updateHashtags(hashtagsToAdd?: Array<SP.Hashtag>, hashtagsToRemove?: Array<SP.Hashtag>): IBaseExecution<Array<SP.Hashtag>>;
	updateOverwriteVersion(): IBaseExecution<any>;
	validateUpdateListItem(formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): IBaseExecution<Array<SP.ListItemFormUpdateValue>>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IAttachment
**********************************************/
export interface IAttachment extends AttachmentCollections,AttachmentMethods,IBaseQuery<IAttachmentQuery> {

}

/*********************************************
* IAttachmentQuery
**********************************************/
export interface IAttachmentQuery extends AttachmentQuery,AttachmentMethods {

}

/*********************************************
* Attachment
**********************************************/
export interface Attachment extends AttachmentCollections, AttachmentMethods {
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
* AttachmentCollections
**********************************************/
export interface AttachmentCollections extends AttachmentProps {

}

/*********************************************
* AttachmentCollectionMethods
**********************************************/
export interface AttachmentCollectionMethods {
	add(FileName?: string): IBaseExecution<SP.Attachment>;
	addUsingPath(DecodedUrl?: string, contentStream?: any): IBaseExecution<SP.Attachment>;
	getByFileName(fileName?: string): IBaseExecution<SP.Attachment>;
	getByFileNameAsPath(DecodedUrl?: string): IBaseExecution<SP.Attachment>;
	add(FileName?: SP.ListItemCreationInformation, Content?: any): IBaseExecution<SP.ListItem>;
}

/*********************************************
* AttachmentQuery
**********************************************/
export interface AttachmentQuery extends AttachmentProps {

}

/*********************************************
* AttachmentMethods
**********************************************/
export interface AttachmentMethods {
	delete(): IBaseExecution<any>;
	recycleObject(): IBaseExecution<any>;
}

/*********************************************
* IContentType
**********************************************/
export interface IContentType extends ContentTypeCollections,ContentTypeMethods,IBaseQuery<IContentTypeQuery> {

}

/*********************************************
* IContentTypeQuery
**********************************************/
export interface IContentTypeQuery extends ContentTypeQuery,ContentTypeMethods {

}

/*********************************************
* ContentType
**********************************************/
export interface ContentType extends ContentTypeCollections, ContentTypeMethods {
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
	DescriptionResource(): IBaseExecution<SP.UserResource>;
	NameResource(): IBaseExecution<SP.UserResource>;
	Parent(): IBaseExecution<SP.ContentType> & SP.ContentTypeCollections;
}

/*********************************************
* ContentTypeCollections
**********************************************/
export interface ContentTypeCollections extends ContentTypeProps {
	FieldLinks(): IBaseCollection<SP.FieldLink> & SP.FieldLinkCollectionMethods;
	FieldLinks(id: string | number): IBaseQuery<SP.FieldLink> & SP.FieldLinkCollections;
	Fields(): IBaseCollection<SP.Field> & SP.FieldCollectionMethods;
	Fields(id: string | number): IBaseQuery<SP.Field> & SP.FieldCollections;
	WorkflowAssociations(): IBaseCollection<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollectionMethods;
	WorkflowAssociations(id: string | number): IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollections;
}

/*********************************************
* ContentTypeCollectionMethods
**********************************************/
export interface ContentTypeCollectionMethods {
	addAvailableContentType(contentTypeId?: string): IBaseExecution<SP.ContentType>;
	getById(contentTypeId?: string): IBaseExecution<SP.ContentType>;
	add(parameters?: SP.ContentTypeCreationInformation | any): IBaseExecution<SP.ContentType>;
}

/*********************************************
* ContentTypeQuery
**********************************************/
export interface ContentTypeQuery extends ContentTypeProps {
	FieldLinks: IBaseResults<SP.FieldLink>;
	Fields: IBaseResults<SP.Field>;
	WorkflowAssociations: IBaseResults<SP.Workflow.WorkflowAssociation>;
}

/*********************************************
* ContentTypeMethods
**********************************************/
export interface ContentTypeMethods {
	delete(): IBaseExecution<any>;
	update(updateChildren?: boolean): IBaseExecution<any>;
}

/*********************************************
* IUserResource
**********************************************/
export interface IUserResource extends UserResourceCollections,UserResourceMethods,IBaseQuery<IUserResourceQuery> {

}

/*********************************************
* IUserResourceQuery
**********************************************/
export interface IUserResourceQuery extends UserResourceQuery,UserResourceMethods {

}

/*********************************************
* UserResource
**********************************************/
export interface UserResource extends UserResourceCollections, UserResourceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserResourceProps
**********************************************/
export interface UserResourceProps {

}

/*********************************************
* UserResourceCollections
**********************************************/
export interface UserResourceCollections extends UserResourceProps {

}

/*********************************************
* UserResourceQuery
**********************************************/
export interface UserResourceQuery extends UserResourceProps {

}

/*********************************************
* UserResourceMethods
**********************************************/
export interface UserResourceMethods {
	getValueForUICulture(cultureName?: string): IBaseExecution<string>;
	setValueForUICulture(cultureName?: string, value?: string): IBaseExecution<any>;
}

/*********************************************
* IFieldLink
**********************************************/
export interface IFieldLink extends FieldLinkCollections,FieldLinkMethods,IBaseQuery<IFieldLinkQuery> {

}

/*********************************************
* IFieldLinkQuery
**********************************************/
export interface IFieldLinkQuery extends FieldLinkQuery,FieldLinkMethods {

}

/*********************************************
* FieldLink
**********************************************/
export interface FieldLink extends FieldLinkCollections, FieldLinkMethods {
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
* FieldLinkCollections
**********************************************/
export interface FieldLinkCollections extends FieldLinkProps {

}

/*********************************************
* FieldLinkCollectionMethods
**********************************************/
export interface FieldLinkCollectionMethods {
	getById(id?: any): IBaseExecution<SP.FieldLink>;
	reorder(internalNames?: Array<string>): IBaseExecution<any>;
	add(parameters?: any): IBaseExecution<SP.FieldLink>;
}

/*********************************************
* FieldLinkQuery
**********************************************/
export interface FieldLinkQuery extends FieldLinkProps {

}

/*********************************************
* FieldLinkMethods
**********************************************/
export interface FieldLinkMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IField
**********************************************/
export interface IField extends FieldCollections,FieldMethods,IBaseQuery<IFieldQuery> {

}

/*********************************************
* IFieldQuery
**********************************************/
export interface IFieldQuery extends FieldQuery,FieldMethods {

}

/*********************************************
* Field
**********************************************/
export interface Field extends FieldCollections, FieldMethods {
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
	DescriptionResource(): IBaseExecution<SP.UserResource>;
	TitleResource(): IBaseExecution<SP.UserResource>;
}

/*********************************************
* FieldCollections
**********************************************/
export interface FieldCollections extends FieldProps {

}

/*********************************************
* FieldCollectionMethods
**********************************************/
export interface FieldCollectionMethods {
	addDependentLookupField(displayName?: string, primaryLookupFieldId?: any, showField?: string): IBaseExecution<SP.Field>;
	addField(parameters?: SP.FieldCreationInformation): IBaseExecution<SP.Field>;
	createFieldAsXml(parameters?: SP.XmlSchemaFieldCreationInformation): IBaseExecution<SP.Field>;
	getById(id?: any): IBaseExecution<SP.Field>;
	getByInternalNameOrTitle(strName?: string): IBaseExecution<SP.Field>;
	getByTitle(title?: string): IBaseExecution<SP.Field>;
	createFieldAsXml(schemaXml?: string): IBaseExecution<any>;
}

/*********************************************
* FieldQuery
**********************************************/
export interface FieldQuery extends FieldProps {

}

/*********************************************
* FieldMethods
**********************************************/
export interface FieldMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	add(parameters?: SP.FieldCreationInformation | any): IBaseExecution<SP.Field>;
	update(properties?: any): IBaseExecution<any>;
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
* DlpPolicyTipCollections
**********************************************/
export interface DlpPolicyTipCollections {

}

/*********************************************
* FieldStringValues
**********************************************/
export interface FieldStringValues {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* FieldStringValuesCollections
**********************************************/
export interface FieldStringValuesCollections {

}

/*********************************************
* IFile
**********************************************/
export interface IFile extends FileCollections,FileMethods,IBaseQuery<IFileQuery> {

}

/*********************************************
* IFileQuery
**********************************************/
export interface IFileQuery extends FileQuery,FileMethods {

}

/*********************************************
* File
**********************************************/
export interface File extends FileCollections, FileMethods {
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
	Author(): IBaseExecution<SP.User> & SP.UserCollections;
	CheckedOutByUser(): IBaseExecution<SP.User> & SP.UserCollections;
	EffectiveInformationRightsManagementSettings(): IBaseExecution<SP.EffectiveInformationRightsManagementSettings>;
	InformationRightsManagementSettings(): IBaseExecution<SP.InformationRightsManagementFileSettings>;
	ListItemAllFields(): IBaseExecution<SP.ListItem> & SP.ListItemCollections;
	LockedByUser(): IBaseExecution<SP.User> & SP.UserCollections;
	ModifiedBy(): IBaseExecution<SP.User> & SP.UserCollections;
	Properties(): IBaseExecution<SP.PropertyValues>;
}

/*********************************************
* FileCollections
**********************************************/
export interface FileCollections extends FileProps {
	VersionEvents(): IBaseCollection<SP.FileVersionEvent>;
	VersionEvents(id: string | number): IBaseQuery<SP.FileVersionEvent>;
	Versions(): IBaseCollection<SP.FileVersion> & SP.FileVersionCollectionMethods;
	Versions(id: string | number): IBaseQuery<SP.FileVersion> & SP.FileVersionCollections;
}

/*********************************************
* FileCollectionMethods
**********************************************/
export interface FileCollectionMethods {
	add(Content?: any, Overwrite?: boolean, Url?: string): IBaseExecution<SP.File>;
	addStub(urlOfFile?: string): IBaseExecution<SP.File>;
	addStubUsingPath(DecodedUrl?: string): IBaseExecution<SP.File>;
	addTemplateFile(urlOfFile?: string, templateFileType?: number): IBaseExecution<SP.File>;
	addUsingPath(DecodedUrl?: string, Overwrite?: boolean, contentStream?: any): IBaseExecution<SP.File>;
	getByPathOrAddStub(DecodedUrl?: string): IBaseExecution<SP.File>;
	getByUrl(url?: string): IBaseExecution<SP.File>;
	getByUrlOrAddStub(urlOfFile?: string): IBaseExecution<SP.File>;
}

/*********************************************
* FileQuery
**********************************************/
export interface FileQuery extends FileProps {
	VersionEvents: IBaseResults<SP.FileVersionEvent>;
	Versions: IBaseResults<SP.FileVersion>;
}

/*********************************************
* FileMethods
**********************************************/
export interface FileMethods {
	addActivities(activities?: Array<Microsoft.SharePoint.Activities.ActivityClientRequest>): IBaseExecution<Array<Microsoft.SharePoint.Activities.ActivityClientResponse>>;
	addClientActivities(activitiesStream?: any): IBaseExecution<Array<Microsoft.SharePoint.Activities.ActivityClientResponse>>;
	approve(comment?: string): IBaseExecution<any>;
	cancelUpload(uploadId?: any): IBaseExecution<any>;
	checkAccessAndPostViewAuditEvent(): IBaseExecution<boolean>;
	checkIn(comment?: string, checkInType?: number): IBaseExecution<any>;
	checkOut(): IBaseExecution<any>;
	continueUpload(uploadId?: any, fileOffset?: number, stream?: any): IBaseExecution<number>;
	copyTo(strNewUrl?: string, bOverWrite?: boolean): IBaseExecution<any>;
	copyToUsingPath(DecodedUrl?: string, bOverWrite?: boolean): IBaseExecution<any>;
	delete(): IBaseExecution<any>;
	deny(comment?: string): IBaseExecution<any>;
	executeCobaltRequest(inputStream?: any): IBaseExecution<any>;
	finishUpload(uploadId?: any, fileOffset?: number, stream?: any): IBaseExecution<SP.File>;
	getFileUserValue(key?: string): IBaseExecution<Microsoft.SharePoint.UserActions.officeFileUserValueResponse>;
	getImagePreviewUri(width?: number, height?: number, clientType?: string): IBaseExecution<string>;
	getImagePreviewUrl(width?: number, height?: number, clientType?: string): IBaseExecution<string>;
	getLimitedWebPartManager(scope?: number): IBaseExecution<SP.WebParts.LimitedWebPartManager>;
	getPreAuthorizedAccessUrl(expirationHours?: number): IBaseExecution<string>;
	getUploadStatus(uploadId?: any): IBaseExecution<SP.Utilities.UploadStatus>;
	getWOPIFrameUrl(action?: number): IBaseExecution<string>;
	moveTo(newUrl?: string, flags?: number): IBaseExecution<any>;
	moveToUsingPath(DecodedUrl?: string, moveOperations?: number): IBaseExecution<any>;
	openBinaryStream(): IBaseExecution<any>;
	openBinaryStreamWithOptions(openOptions?: number): IBaseExecution<any>;
	publish(comment?: string): IBaseExecution<any>;
	recycle(): IBaseExecution<any>;
	recycleWithETag(etagMatch?: string): IBaseExecution<any>;
	saveBinaryStream(file?: any): IBaseExecution<any>;
	setFileUserValue(key?: string, value?: string): IBaseExecution<Microsoft.SharePoint.UserActions.officeFileUserValueResponse>;
	startUpload(uploadId?: any, stream?: any): IBaseExecution<number>;
	undoCheckOut(): IBaseExecution<any>;
	unPublish(comment?: string): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	updateVirusInfo(virusStatus?: any, virusMessage?: string, etagToCheck?: string): IBaseExecution<any>;
	content(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
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
* EffectiveInformationRightsManagementSettingsCollections
**********************************************/
export interface EffectiveInformationRightsManagementSettingsCollections {

}

/*********************************************
* IInformationRightsManagementFileSettings
**********************************************/
export interface IInformationRightsManagementFileSettings extends InformationRightsManagementFileSettingsCollections,InformationRightsManagementFileSettingsMethods,IBaseQuery<IInformationRightsManagementFileSettingsQuery> {

}

/*********************************************
* IInformationRightsManagementFileSettingsQuery
**********************************************/
export interface IInformationRightsManagementFileSettingsQuery extends InformationRightsManagementFileSettingsQuery,InformationRightsManagementFileSettingsMethods {

}

/*********************************************
* InformationRightsManagementFileSettings
**********************************************/
export interface InformationRightsManagementFileSettings extends InformationRightsManagementFileSettingsCollections, InformationRightsManagementFileSettingsMethods {
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
* InformationRightsManagementFileSettingsCollections
**********************************************/
export interface InformationRightsManagementFileSettingsCollections extends InformationRightsManagementFileSettingsProps {

}

/*********************************************
* InformationRightsManagementFileSettingsQuery
**********************************************/
export interface InformationRightsManagementFileSettingsQuery extends InformationRightsManagementFileSettingsProps {

}

/*********************************************
* InformationRightsManagementFileSettingsMethods
**********************************************/
export interface InformationRightsManagementFileSettingsMethods {
	reset(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
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
* FileVersionEventCollections
**********************************************/
export interface FileVersionEventCollections {

}

/*********************************************
* IFileVersion
**********************************************/
export interface IFileVersion extends FileVersionCollections,FileVersionMethods,IBaseQuery<IFileVersionQuery> {

}

/*********************************************
* IFileVersionQuery
**********************************************/
export interface IFileVersionQuery extends FileVersionQuery,FileVersionMethods {

}

/*********************************************
* FileVersion
**********************************************/
export interface FileVersion extends FileVersionCollections, FileVersionMethods {
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
	CreatedBy(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* FileVersionCollections
**********************************************/
export interface FileVersionCollections extends FileVersionProps {

}

/*********************************************
* FileVersionCollectionMethods
**********************************************/
export interface FileVersionCollectionMethods {
	deleteAll(): IBaseExecution<any>;
	deleteByID(vid?: number): IBaseExecution<any>;
	deleteByLabel(versionlabel?: string): IBaseExecution<any>;
	getById(versionid?: number): IBaseExecution<SP.FileVersion>;
	recycleByID(vid?: number): IBaseExecution<any>;
	recycleByLabel(versionlabel?: string): IBaseExecution<any>;
	restoreByLabel(versionlabel?: string): IBaseExecution<any>;
}

/*********************************************
* FileVersionQuery
**********************************************/
export interface FileVersionQuery extends FileVersionProps {

}

/*********************************************
* FileVersionMethods
**********************************************/
export interface FileVersionMethods {
	delete(): IBaseExecution<any>;
	openBinaryStream(): IBaseExecution<any>;
}

/*********************************************
* IFolder
**********************************************/
export interface IFolder extends FolderCollections,FolderMethods,IBaseQuery<IFolderQuery> {

}

/*********************************************
* IFolderQuery
**********************************************/
export interface IFolderQuery extends FolderQuery,FolderMethods {

}

/*********************************************
* Folder
**********************************************/
export interface Folder extends FolderCollections, FolderMethods {
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
	ListItemAllFields(): IBaseExecution<SP.ListItem> & SP.ListItemCollections;
	ParentFolder(): IBaseExecution<SP.Folder> & SP.FolderCollections;
	Properties(): IBaseExecution<SP.PropertyValues>;
	StorageMetrics(): IBaseExecution<SP.StorageMetrics>;
}

/*********************************************
* FolderCollections
**********************************************/
export interface FolderCollections extends FolderProps {
	Files(): IBaseCollection<SP.File> & SP.FileCollectionMethods;
	Files(id: string | number): IBaseQuery<SP.File> & SP.FileCollections;
	Folders(): IBaseCollection<SP.Folder> & SP.FolderCollectionMethods;
	Folders(id: string | number): IBaseQuery<SP.Folder> & SP.FolderCollections;
}

/*********************************************
* FolderCollectionMethods
**********************************************/
export interface FolderCollectionMethods {
	add(url?: string): IBaseExecution<SP.Folder>;
	addUsingPath(DecodedUrl?: string, Overwrite?: boolean): IBaseExecution<SP.Folder>;
	addWithOverwrite(url?: string, overwrite?: boolean): IBaseExecution<SP.Folder>;
	getByPath(DecodedUrl?: string): IBaseExecution<SP.Folder>;
	getByUrl(url?: string): IBaseExecution<SP.Folder>;
}

/*********************************************
* FolderQuery
**********************************************/
export interface FolderQuery extends FolderProps {
	Files: IBaseResults<SP.File>;
	Folders: IBaseResults<SP.Folder>;
}

/*********************************************
* FolderMethods
**********************************************/
export interface FolderMethods {
	addSubFolder(leafName?: string): IBaseExecution<any>;
	addSubFolderUsingPath(DecodedUrl?: string): IBaseExecution<any>;
	delete(): IBaseExecution<any>;
	getChanges(query?: SP.ChangeQuery): IBaseExecution<Array<SP.Change>>;
	getListItemChanges(query?: SP.ChangeQuery): IBaseExecution<Array<SP.Change>>;
	moveTo(newUrl?: string): IBaseExecution<any>;
	moveToUsingPath(DecodedUrl?: string): IBaseExecution<any>;
	recycle(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	getByUrl(serverRelativeUrl?: string): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
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
* StorageMetricsCollections
**********************************************/
export interface StorageMetricsCollections {

}

/*********************************************
* IList
**********************************************/
export interface IList extends ListCollections,ListMethods,IBaseQuery<IListQuery> {

}

/*********************************************
* IListQuery
**********************************************/
export interface IListQuery extends ListQuery,ListMethods {

}

/*********************************************
* List
**********************************************/
export interface List extends SP.SecurableObject, ListCollections, ListMethods {
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
	CreatablesInfo(): IBaseExecution<SP.CreatablesInfo>;
	DefaultView(): IBaseExecution<SP.View> & SP.ViewCollections;
	DescriptionResource(): IBaseExecution<SP.UserResource>;
	InformationRightsManagementSettings(): IBaseExecution<SP.InformationRightsManagementSettings>;
	ParentWeb(): IBaseExecution<SP.Web> & SP.WebCollections;
	RootFolder(): IBaseExecution<SP.Folder> & SP.FolderCollections;
	TitleResource(): IBaseExecution<SP.UserResource>;
}

/*********************************************
* ListCollections
**********************************************/
export interface ListCollections extends ListProps {
	ContentTypes(): IBaseCollection<SP.ContentType> & SP.ContentTypeCollectionMethods;
	ContentTypes(id: string | number): IBaseQuery<SP.ContentType> & SP.ContentTypeCollections;
	EventReceivers(): IBaseCollection<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollectionMethods;
	EventReceivers(id: string | number): IBaseQuery<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollections;
	Fields(): IBaseCollection<SP.Field> & SP.FieldCollectionMethods;
	Fields(id: string | number): IBaseQuery<SP.Field> & SP.FieldCollections;
	Forms(): IBaseCollection<SP.Form> & SP.FormCollectionMethods;
	Forms(id: string | number): IBaseQuery<SP.Form> & SP.FormCollections;
	Items(): IBaseCollection<SP.ListItem> & SP.ListItemCollectionMethods;
	Items(id: string | number): IBaseQuery<SP.ListItem> & SP.ListItemCollections;
	Subscriptions(): IBaseCollection<Microsoft.SharePoint.Webhooks.Subscription> & Microsoft.SharePoint.Webhooks.SubscriptionCollectionMethods;
	Subscriptions(id: string | number): IBaseQuery<Microsoft.SharePoint.Webhooks.Subscription> & Microsoft.SharePoint.Webhooks.SubscriptionCollections;
	UserCustomActions(): IBaseCollection<SP.UserCustomAction> & SP.UserCustomActionCollectionMethods;
	UserCustomActions(id: string | number): IBaseQuery<SP.UserCustomAction> & SP.UserCustomActionCollections;
	Views(): IBaseCollection<SP.View> & SP.ViewCollectionMethods;
	Views(id: string | number): IBaseQuery<SP.View> & SP.ViewCollections;
	WorkflowAssociations(): IBaseCollection<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollectionMethods;
	WorkflowAssociations(id: string | number): IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollections;
}

/*********************************************
* ListCollectionMethods
**********************************************/
export interface ListCollectionMethods {
	add(parameters?: SP.ListCreationInformation): IBaseExecution<SP.List>;
	ensureClientRenderedSitePagesLibrary(): IBaseExecution<SP.List>;
	ensureEventsList(): IBaseExecution<SP.List>;
	ensureSiteAssetsLibrary(): IBaseExecution<SP.List>;
	ensureSitePagesLibrary(): IBaseExecution<SP.List>;
	getById(id?: any): IBaseExecution<SP.List>;
	getByTitle(title?: string): IBaseExecution<SP.List>;
	add(parameters?: SP.ListCreationInformation | any): IBaseExecution<SP.List>;
}

/*********************************************
* ListQuery
**********************************************/
export interface ListQuery extends ListProps {
	ContentTypes: IBaseResults<SP.ContentType>;
	EventReceivers: IBaseResults<SP.EventReceiverDefinition>;
	Fields: IBaseResults<SP.Field>;
	Forms: IBaseResults<SP.Form>;
	Items: IBaseResults<SP.ListItem>;
	Subscriptions: IBaseResults<Microsoft.SharePoint.Webhooks.Subscription>;
	UserCustomActions: IBaseResults<SP.UserCustomAction>;
	Views: IBaseResults<SP.View>;
	WorkflowAssociations: IBaseResults<SP.Workflow.WorkflowAssociation>;
}

/*********************************************
* ListMethods
**********************************************/
export interface ListMethods {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): IBaseExecution<any>;
	resetRoleInheritance(): IBaseExecution<any>;
	addItem(parameters?: SP.ListItemCreationInformation): IBaseExecution<SP.ListItem>;
	addItemUsingPath(parameters?: SP.ListItemCreationInformationUsingPath): IBaseExecution<SP.ListItem>;
	addValidateUpdateItem(listItemCreateInfo?: SP.ListItemCreationInformation, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): IBaseExecution<Array<SP.ListItemFormUpdateValue>>;
	addValidateUpdateItemUsingPath(listItemCreateInfo?: SP.ListItemCreationInformationUsingPath, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string): IBaseExecution<Array<SP.ListItemFormUpdateValue>>;
	bulkValidateUpdateListItems(itemIds?: Array<number>, formValues?: Array<SP.ListItemFormUpdateValue>, bNewDocumentUpdate?: boolean, checkInComment?: string, folderPath?: string): IBaseExecution<Array<SP.ListItemFormUpdateValue>>;
	createDocumentAndGetEditLink(fileName?: string, folderPath?: string, documentTemplateType?: number, templateUrl?: string): IBaseExecution<string>;
	createDocumentWithDefaultName(folderPath?: string, extension?: string): IBaseExecution<string>;
	createMappedView(appViewCreationInfo?: SP.AppViewCreationInfo, visualizationTarget?: number): IBaseExecution<SP.View>;
	delete(): IBaseExecution<any>;
	ensureSignoffStatusField(): IBaseExecution<SP.Field>;
	getBloomFilter(startItemId?: number): IBaseExecution<SP.ListBloomFilter>;
	getBloomFilterWithCustomFields(listItemStartingID?: number, internalFieldNames?: Array<string>): IBaseExecution<SP.ListBloomFilter>;
	getChanges(query?: SP.ChangeQuery): IBaseExecution<Array<SP.Change>>;
	getCheckedOutFiles(): IBaseExecution<Array<SP.CheckedOutFile>>;
	getItemById(id?: number): IBaseExecution<SP.ListItem>;
	getItemByStringId(sId?: string): IBaseExecution<SP.ListItem>;
	getItemByUniqueId(uniqueId?: any): IBaseExecution<SP.ListItem>;
	getItems(query?: SP.CamlQuery): IBaseExecution<Array<SP.ListItem>>;
	getListItemChangesSinceToken(query?: SP.ChangeLogItemQuery): IBaseExecution<any>;
	getMappedApp(appId?: any, visualizationAppTarget?: number): IBaseExecution<SP.VisualizationAppSynchronizationResult>;
	getMappedApps(visualizationAppTarget?: number): IBaseExecution<SP.VisualizationAppSynchronizationResult>;
	getRelatedFields(): IBaseExecution<Array<SP.RelatedField>>;
	getSpecialFolderUrl(type?: number, bForceCreate?: boolean, existingFolderGuid?: any): IBaseExecution<string>;
	getUserEffectivePermissions(userName?: string): IBaseExecution<SP.BasePermissions>;
	getView(viewGuid?: any): IBaseExecution<SP.View>;
	getWebDavUrl(sourceUrl?: string): IBaseExecution<string>;
	publishMappedView(appId?: any, visualizationTarget?: number): IBaseExecution<SP.View>;
	recycle(): IBaseExecution<any>;
	renderExtendedListFormData(itemId?: number, formId?: string, mode?: number, options?: number, cutoffVersion?: number): IBaseExecution<string>;
	renderListContextMenuData(CascDelWarnMessage?: string, CustomAction?: string, Field?: string, ID?: string, InplaceFullListSearch?: string, InplaceSearchQuery?: string, IsCSR?: string, IsXslView?: string, ItemId?: string, ListViewPageUrl?: string, OverrideScope?: string, RootFolder?: string, View?: string, ViewCount?: string): IBaseExecution<any>;
	renderListData(viewXml?: string): IBaseExecution<string>;
	renderListDataAsStream(parameters?: SP.RenderListDataParameters, CascDelWarnMessage?: string, CustomAction?: string, DrillDown?: string, Field?: string, FieldInternalName?: string, Filter?: string, FilterData?: string, FilterData1?: string, FilterData10?: string, FilterData2?: string, FilterData3?: string, FilterData4?: string, FilterData5?: string, FilterData6?: string, FilterData7?: string, FilterData8?: string, FilterData9?: string, FilterField?: string, FilterField1?: string, FilterField10?: string, FilterField2?: string, FilterField3?: string, FilterField4?: string, FilterField5?: string, FilterField6?: string, FilterField7?: string, FilterField8?: string, FilterField9?: string, FilterFields?: string, FilterFields1?: string, FilterFields10?: string, FilterFields2?: string, FilterFields3?: string, FilterFields4?: string, FilterFields5?: string, FilterFields6?: string, FilterFields7?: string, FilterFields8?: string, FilterFields9?: string, FilterLookupId?: string, FilterLookupId1?: string, FilterLookupId10?: string, FilterLookupId2?: string, FilterLookupId3?: string, FilterLookupId4?: string, FilterLookupId5?: string, FilterLookupId6?: string, FilterLookupId7?: string, FilterLookupId8?: string, FilterLookupId9?: string, FilterOp?: string, FilterOp1?: string, FilterOp10?: string, FilterOp2?: string, FilterOp3?: string, FilterOp4?: string, FilterOp5?: string, FilterOp6?: string, FilterOp7?: string, FilterOp8?: string, FilterOp9?: string, FilterValue?: string, FilterValue1?: string, FilterValue10?: string, FilterValue2?: string, FilterValue3?: string, FilterValue4?: string, FilterValue5?: string, FilterValue6?: string, FilterValue7?: string, FilterValue8?: string, FilterValue9?: string, FilterValues?: string, FilterValues1?: string, FilterValues10?: string, FilterValues2?: string, FilterValues3?: string, FilterValues4?: string, FilterValues5?: string, FilterValues6?: string, FilterValues7?: string, FilterValues8?: string, FilterValues9?: string, GroupString?: string, HasOverrideSelectCommand?: string, ID?: string, InplaceFullListSearch?: string, InplaceSearchQuery?: string, IsCSR?: string, IsGroupRender?: string, IsXslView?: string, ListViewPageUrl?: string, OverrideScope?: string, OverrideSelectCommand?: string, PageFirstRow?: string, PageLastRow?: string, RootFolder?: string, SortDir?: string, SortDir1?: string, SortDir10?: string, SortDir2?: string, SortDir3?: string, SortDir4?: string, SortDir5?: string, SortDir6?: string, SortDir7?: string, SortDir8?: string, SortDir9?: string, SortField?: string, SortField1?: string, SortField10?: string, SortField2?: string, SortField3?: string, SortField4?: string, SortField5?: string, SortField6?: string, SortField7?: string, SortField8?: string, SortField9?: string, SortFields?: string, SortFieldValues?: string, View?: string, ViewCount?: string, ViewId?: string, ViewPath?: string, WebPartId?: string): IBaseExecution<any>;
	renderListFilterData(ExcludeFieldFilteringHtml?: boolean, FieldInternalName?: string, OverrideScope?: string, ProcessQStringToCAML?: string, ViewId?: string): IBaseExecution<any>;
	renderListFormData(itemId?: number, formId?: string, mode?: number): IBaseExecution<string>;
	reserveListItemId(): IBaseExecution<number>;
	saveAsNewView(oldName?: string, newName?: string, privateView?: boolean, uri?: string): IBaseExecution<string>;
	saveAsTemplate(strFileName?: string, strName?: string, strDescription?: string, bSaveData?: boolean): IBaseExecution<any>;
	setExemptFromBlockDownloadOfNonViewableFiles(value?: boolean): IBaseExecution<any>;
	syncFlowCallbackUrl(flowId?: string): IBaseExecution<SP.FlowSynchronizationResult>;
	syncFlowInstance(flowID?: any): IBaseExecution<SP.FlowSynchronizationResult>;
	syncFlowInstances(): IBaseExecution<SP.FlowSynchronizationResult>;
	syncFlowTemplates(category?: string): IBaseExecution<SP.FlowSynchronizationResult>;
	unpublishMappedView(appId?: any, visualizationTarget?: number): IBaseExecution<SP.View>;
	update(): IBaseExecution<any>;
	validateAppName(appDisplayName?: string): IBaseExecution<SP.VisualizationAppSynchronizationResult>;
	update(properties?: any): IBaseExecution<any>;
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
* CreatablesInfoCollections
**********************************************/
export interface CreatablesInfoCollections {

}

/*********************************************
* IView
**********************************************/
export interface IView extends ViewCollections,ViewMethods,IBaseQuery<IViewQuery> {

}

/*********************************************
* IViewQuery
**********************************************/
export interface IViewQuery extends ViewQuery,ViewMethods {

}

/*********************************************
* View
**********************************************/
export interface View extends ViewCollections, ViewMethods {
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
	ViewFields(): IBaseExecution<SP.ViewFieldCollection>;
}

/*********************************************
* ViewCollections
**********************************************/
export interface ViewCollections extends ViewProps {

}

/*********************************************
* ViewCollectionMethods
**********************************************/
export interface ViewCollectionMethods {
	add(parameters?: SP.ViewCreationInformation): IBaseExecution<SP.View>;
	getById(guidId?: any): IBaseExecution<SP.View>;
	getByTitle(strTitle?: string): IBaseExecution<SP.View>;
}

/*********************************************
* ViewQuery
**********************************************/
export interface ViewQuery extends ViewProps {

}

/*********************************************
* ViewMethods
**********************************************/
export interface ViewMethods {
	addToSpotlight(itemId?: number, folderPath?: string, afterItemId?: number): IBaseExecution<SP.Utilities.SpotlightResult>;
	delete(): IBaseExecution<any>;
	removeFromSpotlight(itemId?: number, folderPath?: string): IBaseExecution<SP.Utilities.SpotlightResult>;
	renderAsHtml(): IBaseExecution<string>;
	setViewXml(viewXml?: string): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* IViewFieldCollection
**********************************************/
export interface IViewFieldCollection extends ViewFieldCollectionCollections,ViewFieldCollectionMethods,IBaseQuery<IViewFieldCollectionQuery> {

}

/*********************************************
* IViewFieldCollectionQuery
**********************************************/
export interface IViewFieldCollectionQuery extends ViewFieldCollectionQuery,ViewFieldCollectionMethods {

}

/*********************************************
* ViewFieldCollection
**********************************************/
export interface ViewFieldCollection extends ViewFieldCollectionCollections, ViewFieldCollectionMethods {
	SchemaXml?: string;
	Items?: Array<string>;
}

/*********************************************
* ViewFieldCollectionProps
**********************************************/
export interface ViewFieldCollectionProps {

}

/*********************************************
* ViewFieldCollectionCollections
**********************************************/
export interface ViewFieldCollectionCollections extends ViewFieldCollectionProps {

}

/*********************************************
* ViewFieldCollectionQuery
**********************************************/
export interface ViewFieldCollectionQuery extends ViewFieldCollectionProps {

}

/*********************************************
* ViewFieldCollectionMethods
**********************************************/
export interface ViewFieldCollectionMethods {
	addViewField(strField?: string): IBaseExecution<any>;
	moveViewFieldTo(field?: string, index?: number): IBaseExecution<any>;
	removeAllViewFields(): IBaseExecution<any>;
	removeViewField(strField?: string): IBaseExecution<any>;
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
* FormCollections
**********************************************/
export interface FormCollections extends FormCollectionMethods {

}

/*********************************************
* FormCollectionMethods
**********************************************/
export interface FormCollectionMethods {
	getById(id?: any): IBaseExecution<SP.Form>;
	getByPageType(formType?: number): IBaseExecution<SP.Form>;
}

/*********************************************
* IInformationRightsManagementSettings
**********************************************/
export interface IInformationRightsManagementSettings extends InformationRightsManagementSettingsCollections,InformationRightsManagementSettingsMethods,IBaseQuery<IInformationRightsManagementSettingsQuery> {

}

/*********************************************
* IInformationRightsManagementSettingsQuery
**********************************************/
export interface IInformationRightsManagementSettingsQuery extends InformationRightsManagementSettingsQuery,InformationRightsManagementSettingsMethods {

}

/*********************************************
* InformationRightsManagementSettings
**********************************************/
export interface InformationRightsManagementSettings extends InformationRightsManagementSettingsCollections, InformationRightsManagementSettingsMethods {
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
* InformationRightsManagementSettingsCollections
**********************************************/
export interface InformationRightsManagementSettingsCollections extends InformationRightsManagementSettingsProps {

}

/*********************************************
* InformationRightsManagementSettingsQuery
**********************************************/
export interface InformationRightsManagementSettingsQuery extends InformationRightsManagementSettingsProps {

}

/*********************************************
* InformationRightsManagementSettingsMethods
**********************************************/
export interface InformationRightsManagementSettingsMethods {
	reset(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* IWeb
**********************************************/
export interface IWeb extends WebCollections,WebMethods,IBaseQuery<IWebQuery> {

}

/*********************************************
* IWebQuery
**********************************************/
export interface IWebQuery extends WebQuery,WebMethods {

}

/*********************************************
* Web
**********************************************/
export interface Web extends SP.SecurableObject, WebCollections, WebMethods {
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
	ActivityLogger(): IBaseExecution<Microsoft.SharePoint.Internal.ActivityLogger>;
	AllProperties(): IBaseExecution<SP.PropertyValues>;
	AssociatedMemberGroup(): IBaseExecution<SP.Group> & SP.GroupCollections;
	AssociatedOwnerGroup(): IBaseExecution<SP.Group> & SP.GroupCollections;
	AssociatedVisitorGroup(): IBaseExecution<SP.Group> & SP.GroupCollections;
	Author(): IBaseExecution<SP.User> & SP.UserCollections;
	CurrentUser(): IBaseExecution<SP.User> & SP.UserCollections;
	DataLeakagePreventionStatusInfo(): IBaseExecution<SP.SPDataLeakagePreventionStatusInfo>;
	DescriptionResource(): IBaseExecution<SP.UserResource>;
	HostedApps(): IBaseExecution<Microsoft.SharePoint.ClientSideComponent.HostedAppsManager>;
	Navigation(): IBaseExecution<SP.Navigation>;
	ParentWeb(): IBaseExecution<SP.WebInformation> & SP.WebInformationCollections;
	RegionalSettings(): IBaseExecution<SP.RegionalSettings>;
	RootFolder(): IBaseExecution<SP.Folder> & SP.FolderCollections;
	SiteCollectionAppCatalog(): IBaseExecution<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor>;
	SiteUserInfoList(): IBaseExecution<SP.List> & SP.ListCollections;
	TenantAppCatalog(): IBaseExecution<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor>;
	ThemeInfo(): IBaseExecution<SP.ThemeInfo>;
	TitleResource(): IBaseExecution<SP.UserResource>;
}

/*********************************************
* WebCollections
**********************************************/
export interface WebCollections extends WebProps {
	Activities(): IBaseCollection<Microsoft.SharePoint.Activities.SPActivityEntity>;
	Activities(id: string | number): IBaseQuery<Microsoft.SharePoint.Activities.SPActivityEntity>;
	Alerts(): IBaseCollection<SP.Alert> & SP.AlertCollectionMethods;
	Alerts(id: string | number): IBaseQuery<SP.Alert> & SP.AlertCollections;
	AppTiles(): IBaseCollection<SP.AppTile>;
	AppTiles(id: string | number): IBaseQuery<SP.AppTile>;
	AvailableContentTypes(): IBaseCollection<SP.ContentType> & SP.ContentTypeCollectionMethods;
	AvailableContentTypes(id: string | number): IBaseQuery<SP.ContentType> & SP.ContentTypeCollections;
	AvailableFields(): IBaseCollection<SP.Field> & SP.FieldCollectionMethods;
	AvailableFields(id: string | number): IBaseQuery<SP.Field> & SP.FieldCollections;
	ClientWebParts(): IBaseCollection<SP.ClientWebPart> & SP.ClientWebPartCollectionMethods;
	ClientWebParts(id: string | number): IBaseQuery<SP.ClientWebPart> & SP.ClientWebPartCollections;
	ContentTypes(): IBaseCollection<SP.ContentType> & SP.ContentTypeCollectionMethods;
	ContentTypes(id: string | number): IBaseQuery<SP.ContentType> & SP.ContentTypeCollections;
	EventReceivers(): IBaseCollection<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollectionMethods;
	EventReceivers(id: string | number): IBaseQuery<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollections;
	Features(): IBaseCollection<SP.Feature> & SP.FeatureCollectionMethods;
	Features(id: string | number): IBaseQuery<SP.Feature> & SP.FeatureCollections;
	Fields(): IBaseCollection<SP.Field> & SP.FieldCollectionMethods;
	Fields(id: string | number): IBaseQuery<SP.Field> & SP.FieldCollections;
	Folders(): IBaseCollection<SP.Folder> & SP.FolderCollectionMethods;
	Folders(id: string | number): IBaseQuery<SP.Folder> & SP.FolderCollections;
	Lists(): IBaseCollection<SP.List> & SP.ListCollectionMethods;
	Lists(id: string | number): IBaseQuery<SP.List> & SP.ListCollections;
	ListTemplates(): IBaseCollection<SP.ListTemplate> & SP.ListTemplateCollectionMethods;
	ListTemplates(id: string | number): IBaseQuery<SP.ListTemplate> & SP.ListTemplateCollections;
	OneDriveSharedItems(): IBaseCollection<SP.Sharing.SharedDocumentInfo>;
	OneDriveSharedItems(id: string | number): IBaseQuery<SP.Sharing.SharedDocumentInfo>;
	PushNotificationSubscribers(): IBaseCollection<SP.PushNotificationSubscriber> & SP.PushNotificationSubscriberCollectionMethods;
	PushNotificationSubscribers(id: string | number): IBaseQuery<SP.PushNotificationSubscriber> & SP.PushNotificationSubscriberCollections;
	RecycleBin(): IBaseCollection<SP.RecycleBinItem> & SP.RecycleBinItemCollectionMethods;
	RecycleBin(id: string | number): IBaseQuery<SP.RecycleBinItem> & SP.RecycleBinItemCollections;
	RoleDefinitions(): IBaseCollection<SP.RoleDefinition> & SP.RoleDefinitionCollectionMethods;
	RoleDefinitions(id: string | number): IBaseQuery<SP.RoleDefinition> & SP.RoleDefinitionCollections;
	SiteGroups(): IBaseCollection<SP.Group> & SP.GroupCollectionMethods;
	SiteGroups(id: string | number): IBaseQuery<SP.Group> & SP.GroupCollections;
	SiteUsers(): IBaseCollection<SP.User> & SP.UserCollectionMethods;
	SiteUsers(id: string | number): IBaseQuery<SP.User> & SP.UserCollections;
	UserCustomActions(): IBaseCollection<SP.UserCustomAction> & SP.UserCustomActionCollectionMethods;
	UserCustomActions(id: string | number): IBaseQuery<SP.UserCustomAction> & SP.UserCustomActionCollections;
	Webs(): IBaseCollection<SP.Web> & SP.WebCollectionMethods;
	Webs(id: string | number): IBaseQuery<SP.Web> & SP.WebCollections;
	WebInfos(): IBaseCollection<SP.WebInformation> & SP.WebInformationCollectionMethods;
	WebInfos(id: string | number): IBaseQuery<SP.WebInformation> & SP.WebInformationCollections;
	WorkflowAssociations(): IBaseCollection<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollectionMethods;
	WorkflowAssociations(id: string | number): IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollections;
	WorkflowTemplates(): IBaseCollection<SP.Workflow.WorkflowTemplate> & SP.Workflow.WorkflowTemplateCollectionMethods;
	WorkflowTemplates(id: string | number): IBaseQuery<SP.Workflow.WorkflowTemplate> & SP.Workflow.WorkflowTemplateCollections;
}

/*********************************************
* WebCollectionMethods
**********************************************/
export interface WebCollectionMethods {
	add(parameters?: SP.WebCreationInformation): IBaseExecution<SP.Web>;
}

/*********************************************
* WebQuery
**********************************************/
export interface WebQuery extends WebProps {
	Activities: IBaseResults<Microsoft.SharePoint.Activities.SPActivityEntity>;
	Alerts: IBaseResults<SP.Alert>;
	AppTiles: IBaseResults<SP.AppTile>;
	AvailableContentTypes: IBaseResults<SP.ContentType>;
	AvailableFields: IBaseResults<SP.Field>;
	ClientWebParts: IBaseResults<SP.ClientWebPart>;
	ContentTypes: IBaseResults<SP.ContentType>;
	EventReceivers: IBaseResults<SP.EventReceiverDefinition>;
	Features: IBaseResults<SP.Feature>;
	Fields: IBaseResults<SP.Field>;
	Folders: IBaseResults<SP.Folder>;
	Lists: IBaseResults<SP.List>;
	ListTemplates: IBaseResults<SP.ListTemplate>;
	OneDriveSharedItems: IBaseResults<SP.Sharing.SharedDocumentInfo>;
	PushNotificationSubscribers: IBaseResults<SP.PushNotificationSubscriber>;
	RecycleBin: IBaseResults<SP.RecycleBinItem>;
	RoleDefinitions: IBaseResults<SP.RoleDefinition>;
	SiteGroups: IBaseResults<SP.Group>;
	SiteUsers: IBaseResults<SP.User>;
	UserCustomActions: IBaseResults<SP.UserCustomAction>;
	Webs: IBaseResults<SP.Web>;
	WebInfos: IBaseResults<SP.WebInformation>;
	WorkflowAssociations: IBaseResults<SP.Workflow.WorkflowAssociation>;
	WorkflowTemplates: IBaseResults<SP.Workflow.WorkflowTemplate>;
}

/*********************************************
* WebMethods
**********************************************/
export interface WebMethods {
	breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): IBaseExecution<any>;
	resetRoleInheritance(): IBaseExecution<any>;
	addCrossFarmMessage(messagePayloadBase64?: string): IBaseExecution<boolean>;
	addSupportedUILanguage(lcid?: number): IBaseExecution<any>;
	applyTheme(colorPaletteUrl?: string, fontSchemeUrl?: string, backgroundImageUrl?: string, shareGenerated?: boolean): IBaseExecution<any>;
	applyWebTemplate(webTemplate?: string): IBaseExecution<any>;
	createDefaultAssociatedGroups(userLogin?: string, userLogin2?: string, groupNameSeed?: string): IBaseExecution<any>;
	defaultDocumentLibrary(): IBaseExecution<SP.List>;
	delete(): IBaseExecution<any>;
	doesPushNotificationSubscriberExist(deviceAppInstanceId?: any): IBaseExecution<boolean>;
	doesUserHavePermissions(permissionMask?: SP.BasePermissions): IBaseExecution<boolean>;
	ensureUser(logonName?: string): IBaseExecution<SP.User>;
	executeRemoteLOB(inputStream?: any): IBaseExecution<any>;
	getAppBdcCatalog(): IBaseExecution<SP.BusinessData.AppBdcCatalog>;
	getAppBdcCatalogForAppInstance(appInstanceId?: any): IBaseExecution<SP.BusinessData.AppBdcCatalog>;
	getAppInstanceById(appInstanceId?: any): IBaseExecution<SP.AppInstance>;
	getAppInstancesByProductId(productId?: any): IBaseExecution<Array<SP.AppInstance>>;
	getAvailableWebTemplates(lcid?: number, doIncludeCrossLanguage?: boolean): IBaseExecution<Array<SP.WebTemplate>>;
	getCatalog(typeCatalog?: number): IBaseExecution<SP.List>;
	getChanges(query?: SP.ChangeQuery): IBaseExecution<Array<SP.Change>>;
	getClientSideComponents(components?: Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentIdentifier>): IBaseExecution<Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult>>;
	getClientSideComponentsById(componentIds?: Array<any>): IBaseExecution<Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult>>;
	getClientSideWebParts(includeErrors?: boolean): IBaseExecution<Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult>>;
	getCustomListTemplates(): IBaseExecution<Array<SP.ListTemplate>>;
	getEntity(namespace?: string, name?: string): IBaseExecution<SP.BusinessData.Entity>;
	getFileByGuestUrl(guestUrl?: string): IBaseExecution<SP.File>;
	getFileByGuestUrlEnsureAccess(guestUrl?: string, ensureAccess?: boolean): IBaseExecution<SP.File>;
	getFileByGuestUrlExtended(guestUrl?: string, requestSettings?: SP.Sharing.SharingLinkAccessRequest): IBaseExecution<SP.File>;
	getFileById(uniqueId?: any): IBaseExecution<SP.File>;
	getFileByLinkingUrl(linkingUrl?: string): IBaseExecution<SP.File>;
	getFileByServerRelativePath(DecodedUrl?: string): IBaseExecution<SP.File>;
	getFileByServerRelativeUrl(serverRelativeUrl?: string): IBaseExecution<SP.File>;
	getFileByUrl(fileUrl?: string): IBaseExecution<SP.File>;
	getFileByWOPIFrameUrl(wopiFrameUrl?: string): IBaseExecution<SP.File>;
	getFolderByGuestUrl(guestUrl?: string, ensureAccess?: boolean): IBaseExecution<SP.Folder>;
	getFolderByGuestUrlExtended(guestUrl?: string, requestSettings?: SP.Sharing.SharingLinkAccessRequest): IBaseExecution<SP.Folder>;
	getFolderById(uniqueId?: any): IBaseExecution<SP.Folder>;
	getFolderByServerRelativePath(DecodedUrl?: string): IBaseExecution<SP.Folder>;
	getFolderByServerRelativeUrl(serverRelativeUrl?: string): IBaseExecution<SP.Folder>;
	getList(strUrl?: string): IBaseExecution<SP.List>;
	getListItem(strUrl?: string): IBaseExecution<SP.ListItem>;
	getListItemByResourceId(resourceId?: string): IBaseExecution<SP.ListItem>;
	getListItemUsingPath(DecodedUrl?: string): IBaseExecution<SP.ListItem>;
	getListUsingPath(DecodedUrl?: string): IBaseExecution<SP.List>;
	getNewsList(allowCreate?: boolean): IBaseExecution<SP.List>;
	getOnePageContextAsStream(): IBaseExecution<any>;
	getPushNotificationSubscriber(deviceAppInstanceId?: any): IBaseExecution<SP.PushNotificationSubscriber>;
	getPushNotificationSubscribersByArgs(customArgs?: string): IBaseExecution<Array<SP.PushNotificationSubscriber>>;
	getPushNotificationSubscribersByUser(userName?: string): IBaseExecution<Array<SP.PushNotificationSubscriber>>;
	getRecycleBinItems(pagingInfo?: string, rowLimit?: number, isAscending?: boolean, orderBy?: number, itemState?: number): IBaseExecution<Array<SP.RecycleBinItem>>;
	getRecycleBinItemsByQueryInfo(IsAscending?: boolean, ItemState?: number, OrderBy?: number, PagingInfo?: string, RowLimit?: number, ShowOnlyMyItems?: boolean): IBaseExecution<Array<SP.RecycleBinItem>>;
	getRegionalDateTimeSchema(): IBaseExecution<string>;
	getSharingLinkData(linkUrl?: string): IBaseExecution<SP.SharingLinkData>;
	getStorageEntity(key?: string): IBaseExecution<Microsoft.SharePoint.ClientSideComponent.StorageEntity>;
	getSubwebsFilteredForCurrentUser(nWebTemplateFilter?: number, nConfigurationFilter?: number): IBaseExecution<Array<SP.WebInformation>>;
	getUserById(userId?: number): IBaseExecution<SP.User>;
	getUserEffectivePermissions(userName?: string): IBaseExecution<SP.BasePermissions>;
	getViewFromPath(DecodedUrl?: string): IBaseExecution<SP.View>;
	getViewFromUrl(listUrl?: string): IBaseExecution<SP.View>;
	hubSiteData(forceRefresh?: boolean): IBaseExecution<string>;
	hubSiteDataAsStream(forceRefresh?: boolean): IBaseExecution<any>;
	incrementSiteClientTag(): IBaseExecution<any>;
	loadAndInstallApp(appPackageStream?: any): IBaseExecution<SP.AppInstance>;
	loadAndInstallAppInSpecifiedLocale(appPackageStream?: any, installationLocaleLCID?: number): IBaseExecution<SP.AppInstance>;
	loadApp(appPackageStream?: any, installationLocaleLCID?: number): IBaseExecution<SP.AppInstance>;
	mapToIcon(fileName?: string, progId?: string, size?: number): IBaseExecution<string>;
	pageContextInfo(includeODBSettings?: boolean, emitNavigationInfo?: boolean): IBaseExecution<any>;
	parseDateTime(value?: string, displayFormat?: number, calendarType?: number): IBaseExecution<string>;
	processExternalNotification(stream?: any): IBaseExecution<string>;
	registerPushNotificationSubscriber(deviceAppInstanceId?: any, serviceToken?: string): IBaseExecution<SP.PushNotificationSubscriber>;
	removeStorageEntity(key?: string): IBaseExecution<any>;
	removeSupportedUILanguage(lcid?: number): IBaseExecution<any>;
	setAccessRequestSiteDescriptionAndUpdate(description?: string): IBaseExecution<any>;
	setStorageEntity(key?: string, value?: string, description?: string, comments?: string): IBaseExecution<any>;
	setUseAccessRequestDefaultAndUpdate(useAccessRequestDefault?: boolean): IBaseExecution<any>;
	syncFlowInstances(targetWebUrl?: string): IBaseExecution<SP.FlowSynchronizationResult>;
	syncFlowTemplates(category?: string): IBaseExecution<SP.FlowSynchronizationResult>;
	syncHubSiteTheme(): IBaseExecution<any>;
	unregisterPushNotificationSubscriber(deviceAppInstanceId?: any): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	doesUserHavePermissions(high?: number, low?: number): IBaseExecution<boolean>;
	update(properties?: any): IBaseExecution<any>;
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
* AppTileCollections
**********************************************/
export interface AppTileCollections {

}

/*********************************************
* IGroup
**********************************************/
export interface IGroup extends GroupCollections,GroupMethods,IBaseQuery<IGroupQuery> {

}

/*********************************************
* IGroupQuery
**********************************************/
export interface IGroupQuery extends GroupQuery,GroupMethods {

}

/*********************************************
* Group
**********************************************/
export interface Group extends SP.Principal, GroupCollections, GroupMethods {
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
	Owner(): IBaseExecution<SP.Principal>;
}

/*********************************************
* GroupCollections
**********************************************/
export interface GroupCollections extends GroupProps {
	Users(): IBaseCollection<SP.User> & SP.UserCollectionMethods;
	Users(id: string | number): IBaseQuery<SP.User> & SP.UserCollections;
}

/*********************************************
* GroupCollectionMethods
**********************************************/
export interface GroupCollectionMethods {
	getById(id?: number): IBaseExecution<SP.Group>;
	getByName(name?: string): IBaseExecution<SP.Group>;
	removeById(id?: number): IBaseExecution<any>;
	removeByLoginName(loginName?: string): IBaseExecution<any>;
	add(parameters?: SP.GroupCreationInformation): IBaseExecution<SP.Group>;
}

/*********************************************
* GroupQuery
**********************************************/
export interface GroupQuery extends GroupProps {
	Users: IBaseResults<SP.User>;
}

/*********************************************
* GroupMethods
**********************************************/
export interface GroupMethods {
	setUserAsOwner(ownerId?: number): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* IClientWebPart
**********************************************/
export interface IClientWebPart extends ClientWebPartCollections,ClientWebPartMethods,IBaseQuery<IClientWebPartQuery> {

}

/*********************************************
* IClientWebPartQuery
**********************************************/
export interface IClientWebPartQuery extends ClientWebPartQuery,ClientWebPartMethods {

}

/*********************************************
* ClientWebPart
**********************************************/
export interface ClientWebPart extends ClientWebPartCollections, ClientWebPartMethods {
	Id?: any;
	Name?: string;
}

/*********************************************
* ClientWebPartProps
**********************************************/
export interface ClientWebPartProps {

}

/*********************************************
* ClientWebPartCollections
**********************************************/
export interface ClientWebPartCollections extends ClientWebPartProps {

}

/*********************************************
* ClientWebPartCollectionMethods
**********************************************/
export interface ClientWebPartCollectionMethods {
	getById(id?: any): IBaseExecution<SP.ClientWebPart>;
}

/*********************************************
* ClientWebPartQuery
**********************************************/
export interface ClientWebPartQuery extends ClientWebPartProps {

}

/*********************************************
* ClientWebPartMethods
**********************************************/
export interface ClientWebPartMethods {
	render(properties?: Array<SP.KeyValue>): IBaseExecution<string>;
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
* SPDataLeakagePreventionStatusInfoCollections
**********************************************/
export interface SPDataLeakagePreventionStatusInfoCollections {

}

/*********************************************
* IListTemplate
**********************************************/
export interface IListTemplate extends ListTemplateCollections,ListTemplateMethods,IBaseQuery<IListTemplateQuery> {

}

/*********************************************
* IListTemplateQuery
**********************************************/
export interface IListTemplateQuery extends ListTemplateQuery,ListTemplateMethods {

}

/*********************************************
* ListTemplate
**********************************************/
export interface ListTemplate extends ListTemplateCollections, ListTemplateMethods {
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
* ListTemplateCollections
**********************************************/
export interface ListTemplateCollections extends ListTemplateProps {

}

/*********************************************
* ListTemplateCollectionMethods
**********************************************/
export interface ListTemplateCollectionMethods {
	getByName(name?: string): IBaseExecution<SP.ListTemplate>;
}

/*********************************************
* ListTemplateQuery
**********************************************/
export interface ListTemplateQuery extends ListTemplateProps {

}

/*********************************************
* ListTemplateMethods
**********************************************/
export interface ListTemplateMethods {
	getGlobalSchemaXml(): IBaseExecution<any>;
}

/*********************************************
* INavigation
**********************************************/
export interface INavigation extends NavigationCollections,NavigationMethods,IBaseQuery<INavigationQuery> {

}

/*********************************************
* INavigationQuery
**********************************************/
export interface INavigationQuery extends NavigationQuery,NavigationMethods {

}

/*********************************************
* Navigation
**********************************************/
export interface Navigation extends NavigationCollections, NavigationMethods {
	UseShared?: boolean;
}

/*********************************************
* NavigationProps
**********************************************/
export interface NavigationProps {

}

/*********************************************
* NavigationCollections
**********************************************/
export interface NavigationCollections extends NavigationProps {
	QuickLaunch(): IBaseCollection<SP.NavigationNode> & SP.NavigationNodeCollectionMethods;
	QuickLaunch(id: string | number): IBaseQuery<SP.NavigationNode> & SP.NavigationNodeCollections;
	TopNavigationBar(): IBaseCollection<SP.NavigationNode> & SP.NavigationNodeCollectionMethods;
	TopNavigationBar(id: string | number): IBaseQuery<SP.NavigationNode> & SP.NavigationNodeCollections;
}

/*********************************************
* NavigationQuery
**********************************************/
export interface NavigationQuery extends NavigationProps {
	QuickLaunch: IBaseResults<SP.NavigationNode>;
	TopNavigationBar: IBaseResults<SP.NavigationNode>;
}

/*********************************************
* NavigationMethods
**********************************************/
export interface NavigationMethods {
	getNodeById(id?: number): IBaseExecution<SP.NavigationNode>;
}

/*********************************************
* INavigationNode
**********************************************/
export interface INavigationNode extends NavigationNodeCollections,NavigationNodeMethods,IBaseQuery<INavigationNodeQuery> {

}

/*********************************************
* INavigationNodeQuery
**********************************************/
export interface INavigationNodeQuery extends NavigationNodeQuery,NavigationNodeMethods {

}

/*********************************************
* NavigationNode
**********************************************/
export interface NavigationNode extends NavigationNodeCollections, NavigationNodeMethods {
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

}

/*********************************************
* NavigationNodeCollections
**********************************************/
export interface NavigationNodeCollections extends NavigationNodeProps {
	Children(): IBaseCollection<SP.NavigationNode> & SP.NavigationNodeCollectionMethods;
	Children(id: string | number): IBaseQuery<SP.NavigationNode> & SP.NavigationNodeCollections;
}

/*********************************************
* NavigationNodeCollectionMethods
**********************************************/
export interface NavigationNodeCollectionMethods {
	getById(id?: number): IBaseExecution<SP.NavigationNode>;
	getByIndex(index?: number): IBaseExecution<SP.NavigationNode>;
	moveAfter(nodeId?: number, previousNodeId?: number): IBaseExecution<any>;
}

/*********************************************
* NavigationNodeQuery
**********************************************/
export interface NavigationNodeQuery extends NavigationNodeProps {
	Children: IBaseResults<SP.NavigationNode>;
}

/*********************************************
* NavigationNodeMethods
**********************************************/
export interface NavigationNodeMethods {
	delete(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
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
* WebInformationCollections
**********************************************/
export interface WebInformationCollections extends WebInformationCollectionMethods {

}

/*********************************************
* WebInformationCollectionMethods
**********************************************/
export interface WebInformationCollectionMethods {
	add(parameters?: SP.WebInfoCreationInformation): IBaseExecution<SP.WebInformation>;
	getById(id?: any): IBaseExecution<SP.WebInformation>;
}

/*********************************************
* IPushNotificationSubscriber
**********************************************/
export interface IPushNotificationSubscriber extends PushNotificationSubscriberCollections,PushNotificationSubscriberMethods,IBaseQuery<IPushNotificationSubscriberQuery> {

}

/*********************************************
* IPushNotificationSubscriberQuery
**********************************************/
export interface IPushNotificationSubscriberQuery extends PushNotificationSubscriberQuery,PushNotificationSubscriberMethods {

}

/*********************************************
* PushNotificationSubscriber
**********************************************/
export interface PushNotificationSubscriber extends PushNotificationSubscriberCollections, PushNotificationSubscriberMethods {
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
	User(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* PushNotificationSubscriberCollections
**********************************************/
export interface PushNotificationSubscriberCollections extends PushNotificationSubscriberProps {

}

/*********************************************
* PushNotificationSubscriberCollectionMethods
**********************************************/
export interface PushNotificationSubscriberCollectionMethods {
	getByStoreId(id?: string): IBaseExecution<SP.PushNotificationSubscriber>;
}

/*********************************************
* PushNotificationSubscriberQuery
**********************************************/
export interface PushNotificationSubscriberQuery extends PushNotificationSubscriberProps {

}

/*********************************************
* PushNotificationSubscriberMethods
**********************************************/
export interface PushNotificationSubscriberMethods {
	update(): IBaseExecution<any>;
}

/*********************************************
* IRecycleBinItem
**********************************************/
export interface IRecycleBinItem extends RecycleBinItemCollections,RecycleBinItemMethods,IBaseQuery<IRecycleBinItemQuery> {

}

/*********************************************
* IRecycleBinItemQuery
**********************************************/
export interface IRecycleBinItemQuery extends RecycleBinItemQuery,RecycleBinItemMethods {

}

/*********************************************
* RecycleBinItem
**********************************************/
export interface RecycleBinItem extends RecycleBinItemCollections, RecycleBinItemMethods {
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
	Author(): IBaseExecution<SP.User> & SP.UserCollections;
	DeletedBy(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* RecycleBinItemCollections
**********************************************/
export interface RecycleBinItemCollections extends RecycleBinItemProps {

}

/*********************************************
* RecycleBinItemCollectionMethods
**********************************************/
export interface RecycleBinItemCollectionMethods {
	deleteAll(): IBaseExecution<any>;
	deleteAllSecondStageItems(): IBaseExecution<any>;
	deleteByIds(ids?: Array<string>): IBaseExecution<any>;
	getById(id?: any): IBaseExecution<SP.RecycleBinItem>;
	moveAllToSecondStage(): IBaseExecution<any>;
	moveToSecondStageByIds(ids?: Array<string>): IBaseExecution<any>;
	restoreAll(): IBaseExecution<any>;
	restoreByIds(ids?: Array<string>): IBaseExecution<any>;
}

/*********************************************
* RecycleBinItemQuery
**********************************************/
export interface RecycleBinItemQuery extends RecycleBinItemProps {

}

/*********************************************
* RecycleBinItemMethods
**********************************************/
export interface RecycleBinItemMethods {
	delete(): IBaseExecution<any>;
	moveToSecondStage(): IBaseExecution<any>;
	restore(): IBaseExecution<any>;
}

/*********************************************
* IRegionalSettings
**********************************************/
export interface IRegionalSettings extends RegionalSettingsCollections,RegionalSettingsMethods,IBaseQuery<IRegionalSettingsQuery> {

}

/*********************************************
* IRegionalSettingsQuery
**********************************************/
export interface IRegionalSettingsQuery extends RegionalSettingsQuery,RegionalSettingsMethods {

}

/*********************************************
* RegionalSettings
**********************************************/
export interface RegionalSettings extends RegionalSettingsCollections, RegionalSettingsMethods {
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
	InstalledLanguages(): IBaseExecution<SP.LanguageCollection>;
	TimeZone(): IBaseExecution<SP.TimeZone> & SP.TimeZoneCollections;
}

/*********************************************
* RegionalSettingsCollections
**********************************************/
export interface RegionalSettingsCollections extends RegionalSettingsProps {
	TimeZones(): IBaseCollection<SP.TimeZone> & SP.TimeZoneCollectionMethods;
	TimeZones(id: string | number): IBaseQuery<SP.TimeZone> & SP.TimeZoneCollections;
}

/*********************************************
* RegionalSettingsQuery
**********************************************/
export interface RegionalSettingsQuery extends RegionalSettingsProps {
	TimeZones: IBaseResults<SP.TimeZone>;
}

/*********************************************
* RegionalSettingsMethods
**********************************************/
export interface RegionalSettingsMethods {
	update(): IBaseExecution<any>;
}

/*********************************************
* ILanguageCollection
**********************************************/
export interface ILanguageCollection extends LanguageCollectionCollections,LanguageCollectionMethods,IBaseQuery<ILanguageCollectionQuery> {

}

/*********************************************
* ILanguageCollectionQuery
**********************************************/
export interface ILanguageCollectionQuery extends LanguageCollectionQuery,LanguageCollectionMethods {

}

/*********************************************
* LanguageCollection
**********************************************/
export interface LanguageCollection extends LanguageCollectionCollections, LanguageCollectionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<SP.Language>;
}

/*********************************************
* LanguageCollectionProps
**********************************************/
export interface LanguageCollectionProps {

}

/*********************************************
* LanguageCollectionCollections
**********************************************/
export interface LanguageCollectionCollections extends LanguageCollectionProps {

}

/*********************************************
* LanguageCollectionQuery
**********************************************/
export interface LanguageCollectionQuery extends LanguageCollectionProps {

}

/*********************************************
* LanguageCollectionMethods
**********************************************/
export interface LanguageCollectionMethods {
	getById(id?: number): IBaseExecution<SP.Language>;
}

/*********************************************
* ITimeZone
**********************************************/
export interface ITimeZone extends TimeZoneCollections,TimeZoneMethods,IBaseQuery<ITimeZoneQuery> {

}

/*********************************************
* ITimeZoneQuery
**********************************************/
export interface ITimeZoneQuery extends TimeZoneQuery,TimeZoneMethods {

}

/*********************************************
* TimeZone
**********************************************/
export interface TimeZone extends TimeZoneCollections, TimeZoneMethods {
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
* TimeZoneCollections
**********************************************/
export interface TimeZoneCollections extends TimeZoneProps {

}

/*********************************************
* TimeZoneCollectionMethods
**********************************************/
export interface TimeZoneCollectionMethods {
	getById(id?: number): IBaseExecution<SP.TimeZone>;
}

/*********************************************
* TimeZoneQuery
**********************************************/
export interface TimeZoneQuery extends TimeZoneProps {

}

/*********************************************
* TimeZoneMethods
**********************************************/
export interface TimeZoneMethods {
	localTimeToUTC(date?: any): IBaseExecution<any>;
	uTCToLocalTime(date?: any): IBaseExecution<any>;
}

/*********************************************
* IThemeInfo
**********************************************/
export interface IThemeInfo extends ThemeInfoCollections,ThemeInfoMethods,IBaseQuery<IThemeInfoQuery> {

}

/*********************************************
* IThemeInfoQuery
**********************************************/
export interface IThemeInfoQuery extends ThemeInfoQuery,ThemeInfoMethods {

}

/*********************************************
* ThemeInfo
**********************************************/
export interface ThemeInfo extends ThemeInfoCollections, ThemeInfoMethods {
	AccessibleDescription?: string;
	ThemeBackgroundImageUri?: string;
}

/*********************************************
* ThemeInfoProps
**********************************************/
export interface ThemeInfoProps {

}

/*********************************************
* ThemeInfoCollections
**********************************************/
export interface ThemeInfoCollections extends ThemeInfoProps {

}

/*********************************************
* ThemeInfoQuery
**********************************************/
export interface ThemeInfoQuery extends ThemeInfoProps {

}

/*********************************************
* ThemeInfoMethods
**********************************************/
export interface ThemeInfoMethods {
	getThemeFontByName(name?: string, lcid?: number): IBaseExecution<string>;
	getThemeShadeByName(name?: string): IBaseExecution<string>;
}

/*********************************************
* IUserCustomAction
**********************************************/
export interface IUserCustomAction extends UserCustomActionCollections,UserCustomActionMethods,IBaseQuery<IUserCustomActionQuery> {

}

/*********************************************
* IUserCustomActionQuery
**********************************************/
export interface IUserCustomActionQuery extends UserCustomActionQuery,UserCustomActionMethods {

}

/*********************************************
* UserCustomAction
**********************************************/
export interface UserCustomAction extends UserCustomActionCollections, UserCustomActionMethods {
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
	DescriptionResource(): IBaseExecution<SP.UserResource>;
	TitleResource(): IBaseExecution<SP.UserResource>;
}

/*********************************************
* UserCustomActionCollections
**********************************************/
export interface UserCustomActionCollections extends UserCustomActionProps {

}

/*********************************************
* UserCustomActionCollectionMethods
**********************************************/
export interface UserCustomActionCollectionMethods {
	clear(): IBaseExecution<any>;
	getById(id?: any): IBaseExecution<SP.UserCustomAction>;
	add(properties?: any): IBaseExecution<any>;
}

/*********************************************
* UserCustomActionQuery
**********************************************/
export interface UserCustomActionQuery extends UserCustomActionProps {

}

/*********************************************
* UserCustomActionMethods
**********************************************/
export interface UserCustomActionMethods {
	delete(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IListItemVersion
**********************************************/
export interface IListItemVersion extends ListItemVersionCollections,ListItemVersionMethods,IBaseQuery<IListItemVersionQuery> {

}

/*********************************************
* IListItemVersionQuery
**********************************************/
export interface IListItemVersionQuery extends ListItemVersionQuery,ListItemVersionMethods {

}

/*********************************************
* ListItemVersion
**********************************************/
export interface ListItemVersion extends ListItemVersionCollections, ListItemVersionMethods {
	Created?: any;
	IsCurrentVersion?: boolean;
	VersionId?: number;
	VersionLabel?: string;
}

/*********************************************
* ListItemVersionProps
**********************************************/
export interface ListItemVersionProps {
	CreatedBy(): IBaseExecution<SP.User> & SP.UserCollections;
	FileVersion(): IBaseExecution<SP.FileVersion> & SP.FileVersionCollections;
}

/*********************************************
* ListItemVersionCollections
**********************************************/
export interface ListItemVersionCollections extends ListItemVersionProps {
	Fields(): IBaseCollection<SP.Field> & SP.FieldCollectionMethods;
	Fields(id: string | number): IBaseQuery<SP.Field> & SP.FieldCollections;
}

/*********************************************
* ListItemVersionCollectionMethods
**********************************************/
export interface ListItemVersionCollectionMethods {
	getById(versionId?: number): IBaseExecution<SP.ListItemVersion>;
}

/*********************************************
* ListItemVersionQuery
**********************************************/
export interface ListItemVersionQuery extends ListItemVersionProps {
	Fields: IBaseResults<SP.Field>;
}

/*********************************************
* ListItemVersionMethods
**********************************************/
export interface ListItemVersionMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ISPAppLicenseManager
**********************************************/
export interface ISPAppLicenseManager extends SPAppLicenseManagerCollections,SPAppLicenseManagerMethods,IBaseQuery<ISPAppLicenseManagerQuery> {

}

/*********************************************
* ISPAppLicenseManagerQuery
**********************************************/
export interface ISPAppLicenseManagerQuery extends SPAppLicenseManagerQuery,SPAppLicenseManagerMethods {

}

/*********************************************
* SPAppLicenseManager
**********************************************/
export interface SPAppLicenseManager extends SPAppLicenseManagerCollections, SPAppLicenseManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAppLicenseManagerProps
**********************************************/
export interface SPAppLicenseManagerProps {

}

/*********************************************
* SPAppLicenseManagerCollections
**********************************************/
export interface SPAppLicenseManagerCollections extends SPAppLicenseManagerProps {

}

/*********************************************
* SPAppLicenseManagerQuery
**********************************************/
export interface SPAppLicenseManagerQuery extends SPAppLicenseManagerProps {

}

/*********************************************
* SPAppLicenseManagerMethods
**********************************************/
export interface SPAppLicenseManagerMethods {
	checkLicense(productId?: any): IBaseExecution<SP.AppLicenseCollection>;
}

/*********************************************
* SolutionExporter
**********************************************/
export interface SolutionExporter {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SolutionExporterCollections
**********************************************/
export interface SolutionExporterCollections {

}

/*********************************************
* UserSolution
**********************************************/
export interface UserSolution {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserSolutionCollections
**********************************************/
export interface UserSolutionCollections extends UserSolutionCollectionMethods {

}

/*********************************************
* UserSolutionCollectionMethods
**********************************************/
export interface UserSolutionCollectionMethods {
	add(solutionGalleryItemId?: number): IBaseExecution<SP.UserSolution>;
}

/*********************************************
* AppCatalog
**********************************************/
export interface AppCatalog {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppCatalogCollections
**********************************************/
export interface AppCatalogCollections {

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
* AppInstanceErrorDetailsCollections
**********************************************/
export interface AppInstanceErrorDetailsCollections {

}

/*********************************************
* IAppInstance
**********************************************/
export interface IAppInstance extends AppInstanceCollections,AppInstanceMethods,IBaseQuery<IAppInstanceQuery> {

}

/*********************************************
* IAppInstanceQuery
**********************************************/
export interface IAppInstanceQuery extends AppInstanceQuery,AppInstanceMethods {

}

/*********************************************
* AppInstance
**********************************************/
export interface AppInstance extends AppInstanceCollections, AppInstanceMethods {
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
* AppInstanceCollections
**********************************************/
export interface AppInstanceCollections extends AppInstanceProps {

}

/*********************************************
* AppInstanceQuery
**********************************************/
export interface AppInstanceQuery extends AppInstanceProps {

}

/*********************************************
* AppInstanceMethods
**********************************************/
export interface AppInstanceMethods {
	cancelAllJobs(): IBaseExecution<boolean>;
	getAppDatabaseConnectionString(): IBaseExecution<string>;
	getErrorDetails(): IBaseExecution<Array<SP.AppInstanceErrorDetails>>;
	getPreviousAppVersion(): IBaseExecution<SP.App>;
	install(): IBaseExecution<any>;
	recycle(): IBaseExecution<any>;
	restore(): IBaseExecution<any>;
	retryAllJobs(): IBaseExecution<any>;
	uninstall(): IBaseExecution<any>;
	upgrade(appPackageStream?: any): IBaseExecution<any>;
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
* AppCollections
**********************************************/
export interface AppCollections {

}

/*********************************************
* AlternateUrl
**********************************************/
export interface AlternateUrl {
	Uri?: string;
	UrlZone?: number;
}

/*********************************************
* AlternateUrlCollections
**********************************************/
export interface AlternateUrlCollections {

}

/*********************************************
* IObjectSharingSettings
**********************************************/
export interface IObjectSharingSettings extends ObjectSharingSettingsCollections,ObjectSharingSettingsMethods,IBaseQuery<IObjectSharingSettingsQuery> {

}

/*********************************************
* IObjectSharingSettingsQuery
**********************************************/
export interface IObjectSharingSettingsQuery extends ObjectSharingSettingsQuery,ObjectSharingSettingsMethods {

}

/*********************************************
* ObjectSharingSettings
**********************************************/
export interface ObjectSharingSettings extends ObjectSharingSettingsCollections, ObjectSharingSettingsMethods {
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
	ObjectSharingInformation(): IBaseExecution<SP.ObjectSharingInformation>;
	SharePointSettings(): IBaseExecution<SP.SharePointSharingSettings>;
}

/*********************************************
* ObjectSharingSettingsCollections
**********************************************/
export interface ObjectSharingSettingsCollections extends ObjectSharingSettingsProps {
	SharingPermissions(): IBaseCollection<SP.SharingPermissionInformation>;
	SharingPermissions(id: string | number): IBaseQuery<SP.SharingPermissionInformation>;
}

/*********************************************
* ObjectSharingSettingsQuery
**********************************************/
export interface ObjectSharingSettingsQuery extends ObjectSharingSettingsProps {
	SharingPermissions: IBaseResults<SP.SharingPermissionInformation>;
}

/*********************************************
* ObjectSharingSettingsMethods
**********************************************/
export interface ObjectSharingSettingsMethods {

}

/*********************************************
* IObjectSharingInformation
**********************************************/
export interface IObjectSharingInformation extends ObjectSharingInformationCollections,ObjectSharingInformationMethods,IBaseQuery<IObjectSharingInformationQuery> {

}

/*********************************************
* IObjectSharingInformationQuery
**********************************************/
export interface IObjectSharingInformationQuery extends ObjectSharingInformationQuery,ObjectSharingInformationMethods {

}

/*********************************************
* ObjectSharingInformation
**********************************************/
export interface ObjectSharingInformation extends ObjectSharingInformationCollections, ObjectSharingInformationMethods {
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

}

/*********************************************
* ObjectSharingInformationCollections
**********************************************/
export interface ObjectSharingInformationCollections extends ObjectSharingInformationProps {
	SharedWithUsersCollection(): IBaseCollection<SP.ObjectSharingInformationUser>;
	SharedWithUsersCollection(id: string | number): IBaseQuery<SP.ObjectSharingInformationUser>;
}

/*********************************************
* ObjectSharingInformationQuery
**********************************************/
export interface ObjectSharingInformationQuery extends ObjectSharingInformationProps {
	SharedWithUsersCollection: IBaseResults<SP.ObjectSharingInformationUser>;
}

/*********************************************
* ObjectSharingInformationMethods
**********************************************/
export interface ObjectSharingInformationMethods {
	getSharedWithUsers(): IBaseExecution<Array<SP.ObjectSharingInformationUser>>;
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
* PickerSettingsCollections
**********************************************/
export interface PickerSettingsCollections {

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
* SharingPermissionInformationCollections
**********************************************/
export interface SharingPermissionInformationCollections {

}

/*********************************************
* RelatedItemManager
**********************************************/
export interface RelatedItemManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RelatedItemManagerCollections
**********************************************/
export interface RelatedItemManagerCollections {

}

/*********************************************
* ServerSettings
**********************************************/
export interface ServerSettings {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ServerSettingsCollections
**********************************************/
export interface ServerSettingsCollections {

}

/*********************************************
* ISharingResult
**********************************************/
export interface ISharingResult extends SharingResultCollections,SharingResultMethods,IBaseQuery<ISharingResultQuery> {

}

/*********************************************
* ISharingResultQuery
**********************************************/
export interface ISharingResultQuery extends SharingResultQuery,SharingResultMethods {

}

/*********************************************
* SharingResult
**********************************************/
export interface SharingResult extends SharingResultCollections, SharingResultMethods {
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
	GroupUsersAddedTo(): IBaseExecution<SP.Group> & SP.GroupCollections;
}

/*********************************************
* SharingResultCollections
**********************************************/
export interface SharingResultCollections extends SharingResultProps {
	GroupsSharedWith(): IBaseCollection<SP.Group> & SP.GroupCollectionMethods;
	GroupsSharedWith(id: string | number): IBaseQuery<SP.Group> & SP.GroupCollections;
	UsersWithAccessRequests(): IBaseCollection<SP.User> & SP.UserCollectionMethods;
	UsersWithAccessRequests(id: string | number): IBaseQuery<SP.User> & SP.UserCollections;
}

/*********************************************
* SharingResultQuery
**********************************************/
export interface SharingResultQuery extends SharingResultProps {
	GroupsSharedWith: IBaseResults<SP.Group>;
	UsersWithAccessRequests: IBaseResults<SP.User>;
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
* AccessRequestsCollections
**********************************************/
export interface AccessRequestsCollections {

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

}

/*********************************************
* AppSiteContextUtility
**********************************************/
export interface AppSiteContextUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppSiteContextUtilityCollections
**********************************************/
export interface AppSiteContextUtilityCollections {

}

/*********************************************
* AppTileProperties
**********************************************/
export interface AppTileProperties {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppTilePropertiesCollections
**********************************************/
export interface AppTilePropertiesCollections {

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
* ChangeCollections
**********************************************/
export interface ChangeCollections {

}

/*********************************************
* ChangeAlert
**********************************************/
export interface ChangeAlert extends SP.Change {
	AlertId?: any;
	WebId?: any;
}

/*********************************************
* ChangeAlertCollections
**********************************************/
export interface ChangeAlertCollections {

}

/*********************************************
* ChangeContentType
**********************************************/
export interface ChangeContentType extends SP.Change {
	ContentTypeId?: SP.ContentTypeId;
	WebId?: any;
}

/*********************************************
* ChangeContentTypeCollections
**********************************************/
export interface ChangeContentTypeCollections {

}

/*********************************************
* ChangeField
**********************************************/
export interface ChangeField extends SP.Change {
	FieldId?: any;
	WebId?: any;
}

/*********************************************
* ChangeFieldCollections
**********************************************/
export interface ChangeFieldCollections {

}

/*********************************************
* ChangeFile
**********************************************/
export interface ChangeFile extends SP.Change {
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* ChangeFileCollections
**********************************************/
export interface ChangeFileCollections {

}

/*********************************************
* ChangeFolder
**********************************************/
export interface ChangeFolder extends SP.Change {
	UniqueId?: any;
	WebId?: any;
}

/*********************************************
* ChangeFolderCollections
**********************************************/
export interface ChangeFolderCollections {

}

/*********************************************
* ChangeGroup
**********************************************/
export interface ChangeGroup extends SP.Change {
	GroupId?: number;
}

/*********************************************
* ChangeGroupCollections
**********************************************/
export interface ChangeGroupCollections {

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
* ChangeItemCollections
**********************************************/
export interface ChangeItemCollections {

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

}

/*********************************************
* ChangeSite
**********************************************/
export interface ChangeSite extends SP.Change {

}

/*********************************************
* ChangeSiteCollections
**********************************************/
export interface ChangeSiteCollections {

}

/*********************************************
* ChangeUser
**********************************************/
export interface ChangeUser extends SP.Change {
	Activate?: boolean;
	UserId?: number;
}

/*********************************************
* ChangeUserCollections
**********************************************/
export interface ChangeUserCollections {

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
* ChangeViewCollections
**********************************************/
export interface ChangeViewCollections {

}

/*********************************************
* ChangeWeb
**********************************************/
export interface ChangeWeb extends SP.Change {
	WebId?: any;
}

/*********************************************
* ChangeWebCollections
**********************************************/
export interface ChangeWebCollections {

}

/*********************************************
* ICheckedOutFile
**********************************************/
export interface ICheckedOutFile extends CheckedOutFileCollections,CheckedOutFileMethods,IBaseQuery<ICheckedOutFileQuery> {

}

/*********************************************
* ICheckedOutFileQuery
**********************************************/
export interface ICheckedOutFileQuery extends CheckedOutFileQuery,CheckedOutFileMethods {

}

/*********************************************
* CheckedOutFile
**********************************************/
export interface CheckedOutFile extends CheckedOutFileCollections, CheckedOutFileMethods {
	CheckedOutById?: number;
	ServerRelativePath?: SP.ResourcePath;
}

/*********************************************
* CheckedOutFileProps
**********************************************/
export interface CheckedOutFileProps {
	CheckedOutBy(): IBaseExecution<SP.User> & SP.UserCollections;
}

/*********************************************
* CheckedOutFileCollections
**********************************************/
export interface CheckedOutFileCollections extends CheckedOutFileProps {

}

/*********************************************
* CheckedOutFileCollectionMethods
**********************************************/
export interface CheckedOutFileCollectionMethods {
	getByPath(DecodedUrl?: string): IBaseExecution<SP.CheckedOutFile>;
}

/*********************************************
* CheckedOutFileQuery
**********************************************/
export interface CheckedOutFileQuery extends CheckedOutFileProps {

}

/*********************************************
* CheckedOutFileMethods
**********************************************/
export interface CheckedOutFileMethods {
	takeOverCheckOut(): IBaseExecution<any>;
}

/*********************************************
* CompatibilityRange
**********************************************/
export interface CompatibilityRange {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CompatibilityRangeCollections
**********************************************/
export interface CompatibilityRangeCollections {

}

/*********************************************
* ConnectorResult
**********************************************/
export interface ConnectorResult {
	ContextData?: string;
	Value?: string;
}

/*********************************************
* ConnectorResultCollections
**********************************************/
export interface ConnectorResultCollections {

}

/*********************************************
* APIHubConnector
**********************************************/
export interface APIHubConnector {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* APIHubConnectorCollections
**********************************************/
export interface APIHubConnectorCollections {

}

/*********************************************
* IRequestContext
**********************************************/
export interface IRequestContext extends RequestContextCollections,RequestContextMethods,IBaseQuery<IRequestContextQuery> {

}

/*********************************************
* IRequestContextQuery
**********************************************/
export interface IRequestContextQuery extends RequestContextQuery,RequestContextMethods {

}

/*********************************************
* RequestContext
**********************************************/
export interface RequestContext extends RequestContextCollections, RequestContextMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RequestContextProps
**********************************************/
export interface RequestContextProps {
	Current(): IBaseExecution<SP.RequestContext>;
	List(): IBaseExecution<SP.List> & SP.ListCollections;
	Site(): IBaseExecution<SP.Site>;
	Web(): IBaseExecution<SP.Web> & SP.WebCollections;
}

/*********************************************
* RequestContextCollections
**********************************************/
export interface RequestContextCollections extends RequestContextProps {

}

/*********************************************
* RequestContextQuery
**********************************************/
export interface RequestContextQuery extends RequestContextProps {

}

/*********************************************
* RequestContextMethods
**********************************************/
export interface RequestContextMethods {
	getRemoteContext(): IBaseExecution<SP.RequestContext>;
}

/*********************************************
* CurrencyList
**********************************************/
export interface CurrencyList {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CurrencyListCollections
**********************************************/
export interface CurrencyListCollections {

}

/*********************************************
* IFieldCalculated
**********************************************/
export interface IFieldCalculated extends FieldCalculatedCollections,FieldCalculatedMethods,IBaseQuery<IFieldCalculatedQuery> {

}

/*********************************************
* IFieldCalculatedQuery
**********************************************/
export interface IFieldCalculatedQuery extends FieldCalculatedQuery,FieldCalculatedMethods {

}

/*********************************************
* FieldCalculated
**********************************************/
export interface FieldCalculated extends SP.Field, FieldCalculatedCollections, FieldCalculatedMethods {
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
* FieldCalculatedCollections
**********************************************/
export interface FieldCalculatedCollections extends FieldCalculatedProps {

}

/*********************************************
* FieldCalculatedQuery
**********************************************/
export interface FieldCalculatedQuery extends FieldCalculatedProps {

}

/*********************************************
* FieldCalculatedMethods
**********************************************/
export interface FieldCalculatedMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldMultiChoice
**********************************************/
export interface IFieldMultiChoice extends FieldMultiChoiceCollections,FieldMultiChoiceMethods,IBaseQuery<IFieldMultiChoiceQuery> {

}

/*********************************************
* IFieldMultiChoiceQuery
**********************************************/
export interface IFieldMultiChoiceQuery extends FieldMultiChoiceQuery,FieldMultiChoiceMethods {

}

/*********************************************
* FieldMultiChoice
**********************************************/
export interface FieldMultiChoice extends SP.Field, FieldMultiChoiceCollections, FieldMultiChoiceMethods {
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
* FieldMultiChoiceCollections
**********************************************/
export interface FieldMultiChoiceCollections extends FieldMultiChoiceProps {

}

/*********************************************
* FieldMultiChoiceQuery
**********************************************/
export interface FieldMultiChoiceQuery extends FieldMultiChoiceProps {

}

/*********************************************
* FieldMultiChoiceMethods
**********************************************/
export interface FieldMultiChoiceMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldChoice
**********************************************/
export interface IFieldChoice extends FieldChoiceCollections,FieldChoiceMethods,IBaseQuery<IFieldChoiceQuery> {

}

/*********************************************
* IFieldChoiceQuery
**********************************************/
export interface IFieldChoiceQuery extends FieldChoiceQuery,FieldChoiceMethods {

}

/*********************************************
* FieldChoice
**********************************************/
export interface FieldChoice extends SP.FieldMultiChoice, FieldChoiceCollections, FieldChoiceMethods {
	EditFormat?: number;
}

/*********************************************
* FieldChoiceProps
**********************************************/
export interface FieldChoiceProps {

}

/*********************************************
* FieldChoiceCollections
**********************************************/
export interface FieldChoiceCollections extends FieldChoiceProps {

}

/*********************************************
* FieldChoiceQuery
**********************************************/
export interface FieldChoiceQuery extends FieldChoiceProps {

}

/*********************************************
* FieldChoiceMethods
**********************************************/
export interface FieldChoiceMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldComputed
**********************************************/
export interface IFieldComputed extends FieldComputedCollections,FieldComputedMethods,IBaseQuery<IFieldComputedQuery> {

}

/*********************************************
* IFieldComputedQuery
**********************************************/
export interface IFieldComputedQuery extends FieldComputedQuery,FieldComputedMethods {

}

/*********************************************
* FieldComputed
**********************************************/
export interface FieldComputed extends SP.Field, FieldComputedCollections, FieldComputedMethods {
	EnableLookup?: boolean;
}

/*********************************************
* FieldComputedProps
**********************************************/
export interface FieldComputedProps {

}

/*********************************************
* FieldComputedCollections
**********************************************/
export interface FieldComputedCollections extends FieldComputedProps {

}

/*********************************************
* FieldComputedQuery
**********************************************/
export interface FieldComputedQuery extends FieldComputedProps {

}

/*********************************************
* FieldComputedMethods
**********************************************/
export interface FieldComputedMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldNumber
**********************************************/
export interface IFieldNumber extends FieldNumberCollections,FieldNumberMethods,IBaseQuery<IFieldNumberQuery> {

}

/*********************************************
* IFieldNumberQuery
**********************************************/
export interface IFieldNumberQuery extends FieldNumberQuery,FieldNumberMethods {

}

/*********************************************
* FieldNumber
**********************************************/
export interface FieldNumber extends SP.Field, FieldNumberCollections, FieldNumberMethods {
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
* FieldNumberCollections
**********************************************/
export interface FieldNumberCollections extends FieldNumberProps {

}

/*********************************************
* FieldNumberQuery
**********************************************/
export interface FieldNumberQuery extends FieldNumberProps {

}

/*********************************************
* FieldNumberMethods
**********************************************/
export interface FieldNumberMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldCurrency
**********************************************/
export interface IFieldCurrency extends FieldCurrencyCollections,FieldCurrencyMethods,IBaseQuery<IFieldCurrencyQuery> {

}

/*********************************************
* IFieldCurrencyQuery
**********************************************/
export interface IFieldCurrencyQuery extends FieldCurrencyQuery,FieldCurrencyMethods {

}

/*********************************************
* FieldCurrency
**********************************************/
export interface FieldCurrency extends SP.FieldNumber, FieldCurrencyCollections, FieldCurrencyMethods {
	CurrencyLocaleId?: number;
}

/*********************************************
* FieldCurrencyProps
**********************************************/
export interface FieldCurrencyProps {

}

/*********************************************
* FieldCurrencyCollections
**********************************************/
export interface FieldCurrencyCollections extends FieldCurrencyProps {

}

/*********************************************
* FieldCurrencyQuery
**********************************************/
export interface FieldCurrencyQuery extends FieldCurrencyProps {

}

/*********************************************
* FieldCurrencyMethods
**********************************************/
export interface FieldCurrencyMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldDateTime
**********************************************/
export interface IFieldDateTime extends FieldDateTimeCollections,FieldDateTimeMethods,IBaseQuery<IFieldDateTimeQuery> {

}

/*********************************************
* IFieldDateTimeQuery
**********************************************/
export interface IFieldDateTimeQuery extends FieldDateTimeQuery,FieldDateTimeMethods {

}

/*********************************************
* FieldDateTime
**********************************************/
export interface FieldDateTime extends SP.Field, FieldDateTimeCollections, FieldDateTimeMethods {
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
* FieldDateTimeCollections
**********************************************/
export interface FieldDateTimeCollections extends FieldDateTimeProps {

}

/*********************************************
* FieldDateTimeQuery
**********************************************/
export interface FieldDateTimeQuery extends FieldDateTimeProps {

}

/*********************************************
* FieldDateTimeMethods
**********************************************/
export interface FieldDateTimeMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldGeolocation
**********************************************/
export interface IFieldGeolocation extends FieldGeolocationCollections,FieldGeolocationMethods,IBaseQuery<IFieldGeolocationQuery> {

}

/*********************************************
* IFieldGeolocationQuery
**********************************************/
export interface IFieldGeolocationQuery extends FieldGeolocationQuery,FieldGeolocationMethods {

}

/*********************************************
* FieldGeolocation
**********************************************/
export interface FieldGeolocation extends SP.Field, FieldGeolocationCollections, FieldGeolocationMethods {

}

/*********************************************
* FieldGeolocationProps
**********************************************/
export interface FieldGeolocationProps {

}

/*********************************************
* FieldGeolocationCollections
**********************************************/
export interface FieldGeolocationCollections extends FieldGeolocationProps {

}

/*********************************************
* FieldGeolocationQuery
**********************************************/
export interface FieldGeolocationQuery extends FieldGeolocationProps {

}

/*********************************************
* FieldGeolocationMethods
**********************************************/
export interface FieldGeolocationMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldGuid
**********************************************/
export interface IFieldGuid extends FieldGuidCollections,FieldGuidMethods,IBaseQuery<IFieldGuidQuery> {

}

/*********************************************
* IFieldGuidQuery
**********************************************/
export interface IFieldGuidQuery extends FieldGuidQuery,FieldGuidMethods {

}

/*********************************************
* FieldGuid
**********************************************/
export interface FieldGuid extends SP.Field, FieldGuidCollections, FieldGuidMethods {

}

/*********************************************
* FieldGuidProps
**********************************************/
export interface FieldGuidProps {

}

/*********************************************
* FieldGuidCollections
**********************************************/
export interface FieldGuidCollections extends FieldGuidProps {

}

/*********************************************
* FieldGuidQuery
**********************************************/
export interface FieldGuidQuery extends FieldGuidProps {

}

/*********************************************
* FieldGuidMethods
**********************************************/
export interface FieldGuidMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldMultiLineText
**********************************************/
export interface IFieldMultiLineText extends FieldMultiLineTextCollections,FieldMultiLineTextMethods,IBaseQuery<IFieldMultiLineTextQuery> {

}

/*********************************************
* IFieldMultiLineTextQuery
**********************************************/
export interface IFieldMultiLineTextQuery extends FieldMultiLineTextQuery,FieldMultiLineTextMethods {

}

/*********************************************
* FieldMultiLineText
**********************************************/
export interface FieldMultiLineText extends SP.Field, FieldMultiLineTextCollections, FieldMultiLineTextMethods {
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
* FieldMultiLineTextCollections
**********************************************/
export interface FieldMultiLineTextCollections extends FieldMultiLineTextProps {

}

/*********************************************
* FieldMultiLineTextQuery
**********************************************/
export interface FieldMultiLineTextQuery extends FieldMultiLineTextProps {

}

/*********************************************
* FieldMultiLineTextMethods
**********************************************/
export interface FieldMultiLineTextMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldLocation
**********************************************/
export interface IFieldLocation extends FieldLocationCollections,FieldLocationMethods,IBaseQuery<IFieldLocationQuery> {

}

/*********************************************
* IFieldLocationQuery
**********************************************/
export interface IFieldLocationQuery extends FieldLocationQuery,FieldLocationMethods {

}

/*********************************************
* FieldLocation
**********************************************/
export interface FieldLocation extends SP.FieldMultiLineText, FieldLocationCollections, FieldLocationMethods {

}

/*********************************************
* FieldLocationProps
**********************************************/
export interface FieldLocationProps {

}

/*********************************************
* FieldLocationCollections
**********************************************/
export interface FieldLocationCollections extends FieldLocationProps {

}

/*********************************************
* FieldLocationQuery
**********************************************/
export interface FieldLocationQuery extends FieldLocationProps {

}

/*********************************************
* FieldLocationMethods
**********************************************/
export interface FieldLocationMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldLookup
**********************************************/
export interface IFieldLookup extends FieldLookupCollections,FieldLookupMethods,IBaseQuery<IFieldLookupQuery> {

}

/*********************************************
* IFieldLookupQuery
**********************************************/
export interface IFieldLookupQuery extends FieldLookupQuery,FieldLookupMethods {

}

/*********************************************
* FieldLookup
**********************************************/
export interface FieldLookup extends SP.Field, FieldLookupCollections, FieldLookupMethods {
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
* FieldLookupCollections
**********************************************/
export interface FieldLookupCollections extends FieldLookupProps {

}

/*********************************************
* FieldLookupQuery
**********************************************/
export interface FieldLookupQuery extends FieldLookupProps {

}

/*********************************************
* FieldLookupMethods
**********************************************/
export interface FieldLookupMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldRatingScale
**********************************************/
export interface IFieldRatingScale extends FieldRatingScaleCollections,FieldRatingScaleMethods,IBaseQuery<IFieldRatingScaleQuery> {

}

/*********************************************
* IFieldRatingScaleQuery
**********************************************/
export interface IFieldRatingScaleQuery extends FieldRatingScaleQuery,FieldRatingScaleMethods {

}

/*********************************************
* FieldRatingScale
**********************************************/
export interface FieldRatingScale extends SP.FieldMultiChoice, FieldRatingScaleCollections, FieldRatingScaleMethods {
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
* FieldRatingScaleCollections
**********************************************/
export interface FieldRatingScaleCollections extends FieldRatingScaleProps {

}

/*********************************************
* FieldRatingScaleQuery
**********************************************/
export interface FieldRatingScaleQuery extends FieldRatingScaleProps {

}

/*********************************************
* FieldRatingScaleMethods
**********************************************/
export interface FieldRatingScaleMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldText
**********************************************/
export interface IFieldText extends FieldTextCollections,FieldTextMethods,IBaseQuery<IFieldTextQuery> {

}

/*********************************************
* IFieldTextQuery
**********************************************/
export interface IFieldTextQuery extends FieldTextQuery,FieldTextMethods {

}

/*********************************************
* FieldText
**********************************************/
export interface FieldText extends SP.Field, FieldTextCollections, FieldTextMethods {
	MaxLength?: number;
}

/*********************************************
* FieldTextProps
**********************************************/
export interface FieldTextProps {

}

/*********************************************
* FieldTextCollections
**********************************************/
export interface FieldTextCollections extends FieldTextProps {

}

/*********************************************
* FieldTextQuery
**********************************************/
export interface FieldTextQuery extends FieldTextProps {

}

/*********************************************
* FieldTextMethods
**********************************************/
export interface FieldTextMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldUrl
**********************************************/
export interface IFieldUrl extends FieldUrlCollections,FieldUrlMethods,IBaseQuery<IFieldUrlQuery> {

}

/*********************************************
* IFieldUrlQuery
**********************************************/
export interface IFieldUrlQuery extends FieldUrlQuery,FieldUrlMethods {

}

/*********************************************
* FieldUrl
**********************************************/
export interface FieldUrl extends SP.Field, FieldUrlCollections, FieldUrlMethods {
	DisplayFormat?: number;
}

/*********************************************
* FieldUrlProps
**********************************************/
export interface FieldUrlProps {

}

/*********************************************
* FieldUrlCollections
**********************************************/
export interface FieldUrlCollections extends FieldUrlProps {

}

/*********************************************
* FieldUrlQuery
**********************************************/
export interface FieldUrlQuery extends FieldUrlProps {

}

/*********************************************
* FieldUrlMethods
**********************************************/
export interface FieldUrlMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IFieldUser
**********************************************/
export interface IFieldUser extends FieldUserCollections,FieldUserMethods,IBaseQuery<IFieldUserQuery> {

}

/*********************************************
* IFieldUserQuery
**********************************************/
export interface IFieldUserQuery extends FieldUserQuery,FieldUserMethods {

}

/*********************************************
* FieldUser
**********************************************/
export interface FieldUser extends SP.FieldLookup, FieldUserCollections, FieldUserMethods {
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
* FieldUserCollections
**********************************************/
export interface FieldUserCollections extends FieldUserProps {

}

/*********************************************
* FieldUserQuery
**********************************************/
export interface FieldUserQuery extends FieldUserProps {

}

/*********************************************
* FieldUserMethods
**********************************************/
export interface FieldUserMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* FlowSynchronizationResult
**********************************************/
export interface FlowSynchronizationResult {
	SynchronizationData?: string;
	SynchronizationStatus?: number;
}

/*********************************************
* FlowSynchronizationResultCollections
**********************************************/
export interface FlowSynchronizationResultCollections {

}

/*********************************************
* HashtagStoreManager
**********************************************/
export interface HashtagStoreManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* HashtagStoreManagerCollections
**********************************************/
export interface HashtagStoreManagerCollections {

}

/*********************************************
* IHubSite
**********************************************/
export interface IHubSite extends HubSiteCollections,HubSiteMethods,IBaseQuery<IHubSiteQuery> {

}

/*********************************************
* IHubSiteQuery
**********************************************/
export interface IHubSiteQuery extends HubSiteQuery,HubSiteMethods {

}

/*********************************************
* HubSite
**********************************************/
export interface HubSite extends HubSiteCollections, HubSiteMethods {
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
* HubSiteCollections
**********************************************/
export interface HubSiteCollections extends HubSiteProps {

}

/*********************************************
* HubSiteCollectionMethods
**********************************************/
export interface HubSiteCollectionMethods {
	getById(hubSiteId?: any): IBaseExecution<SP.HubSite>;
}

/*********************************************
* HubSiteQuery
**********************************************/
export interface HubSiteQuery extends HubSiteProps {

}

/*********************************************
* HubSiteMethods
**********************************************/
export interface HubSiteMethods {
	delete(): IBaseExecution<any>;
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
* ListBloomFilterCollections
**********************************************/
export interface ListBloomFilterCollections {

}

/*********************************************
* SPMigrationJobStatus
**********************************************/
export interface SPMigrationJobStatus {
	JobId?: any;
	JobState?: number;
}

/*********************************************
* SPMigrationJobStatusCollections
**********************************************/
export interface SPMigrationJobStatusCollections {

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
* MountedFolderInfoCollections
**********************************************/
export interface MountedFolderInfoCollections {

}

/*********************************************
* MountPoint
**********************************************/
export interface MountPoint {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MountPointCollections
**********************************************/
export interface MountPointCollections {

}

/*********************************************
* MountPointInfo
**********************************************/
export interface MountPointInfo {
	Name?: string;
	RedirectUrl?: string;
}

/*********************************************
* MountPointInfoCollections
**********************************************/
export interface MountPointInfoCollections {

}

/*********************************************
* MoveCopyUtil
**********************************************/
export interface MoveCopyUtil {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MoveCopyUtilCollections
**********************************************/
export interface MoveCopyUtilCollections {

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
export interface RelatedFieldCollections extends RelatedFieldCollectionMethods {

}

/*********************************************
* RelatedFieldCollectionMethods
**********************************************/
export interface RelatedFieldCollectionMethods {
	getByFieldId(fieldId?: any): IBaseExecution<SP.RelatedField>;
}

/*********************************************
* IRemoteWeb
**********************************************/
export interface IRemoteWeb extends RemoteWebCollections,RemoteWebMethods,IBaseQuery<IRemoteWebQuery> {

}

/*********************************************
* IRemoteWebQuery
**********************************************/
export interface IRemoteWebQuery extends RemoteWebQuery,RemoteWebMethods {

}

/*********************************************
* RemoteWeb
**********************************************/
export interface RemoteWeb extends RemoteWebCollections, RemoteWebMethods {
	CanSendEmail?: boolean;
	ShareByEmailEnabled?: boolean;
	ShareByLinkEnabled?: boolean;
}

/*********************************************
* RemoteWebProps
**********************************************/
export interface RemoteWebProps {
	Web(): IBaseExecution<SP.Web> & SP.WebCollections;
}

/*********************************************
* RemoteWebCollections
**********************************************/
export interface RemoteWebCollections extends RemoteWebProps {

}

/*********************************************
* RemoteWebQuery
**********************************************/
export interface RemoteWebQuery extends RemoteWebProps {

}

/*********************************************
* RemoteWebMethods
**********************************************/
export interface RemoteWebMethods {
	getFileByServerRelativePath(serverRelatvieFilePath?: SP.ResourcePath): IBaseExecution<SP.File>;
	getFileByServerRelativeUrl(serverRelativeFileUrl?: string): IBaseExecution<SP.File>;
	getFileByUrl(fileUrl?: string): IBaseExecution<SP.File>;
	getFolderByServerRelativeUrl(serverRelativeUrl?: string): IBaseExecution<SP.Folder>;
	getGroupById(groupId?: number): IBaseExecution<SP.Group>;
	getListById(listGuid?: any): IBaseExecution<SP.List>;
	getListByServerRelativeUrl(serverRelativeUrl?: string): IBaseExecution<SP.List>;
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

}

/*********************************************
* SharingUtility
**********************************************/
export interface SharingUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SharingUtilityCollections
**********************************************/
export interface SharingUtilityCollections {

}

/*********************************************
* OpenWebParameters
**********************************************/
export interface OpenWebParameters {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* OpenWebParametersCollections
**********************************************/
export interface OpenWebParametersCollections {

}

/*********************************************
* SiteUrl
**********************************************/
export interface SiteUrl {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteUrlCollections
**********************************************/
export interface SiteUrlCollections {

}

/*********************************************
* TeamChannelManager
**********************************************/
export interface TeamChannelManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TeamChannelManagerCollections
**********************************************/
export interface TeamChannelManagerCollections {

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
* TenantAppInstanceCollections
**********************************************/
export interface TenantAppInstanceCollections {

}

/*********************************************
* IVisualizationAppSynchronizationResult
**********************************************/
export interface IVisualizationAppSynchronizationResult extends VisualizationAppSynchronizationResultCollections,VisualizationAppSynchronizationResultMethods,IBaseQuery<IVisualizationAppSynchronizationResultQuery> {

}

/*********************************************
* IVisualizationAppSynchronizationResultQuery
**********************************************/
export interface IVisualizationAppSynchronizationResultQuery extends VisualizationAppSynchronizationResultQuery,VisualizationAppSynchronizationResultMethods {

}

/*********************************************
* VisualizationAppSynchronizationResult
**********************************************/
export interface VisualizationAppSynchronizationResult extends VisualizationAppSynchronizationResultCollections, VisualizationAppSynchronizationResultMethods {
	SynchronizationData?: string;
	SynchronizationStatus?: number;
}

/*********************************************
* VisualizationAppSynchronizationResultProps
**********************************************/
export interface VisualizationAppSynchronizationResultProps {

}

/*********************************************
* VisualizationAppSynchronizationResultCollections
**********************************************/
export interface VisualizationAppSynchronizationResultCollections extends VisualizationAppSynchronizationResultProps {
	AppMappedViews(): IBaseCollection<SP.View> & SP.ViewCollectionMethods;
	AppMappedViews(id: string | number): IBaseQuery<SP.View> & SP.ViewCollections;
}

/*********************************************
* VisualizationAppSynchronizationResultQuery
**********************************************/
export interface VisualizationAppSynchronizationResultQuery extends VisualizationAppSynchronizationResultProps {
	AppMappedViews: IBaseResults<SP.View>;
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
* WebProxyCollections
**********************************************/
export interface WebProxyCollections {

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
* WebTemplateCollections
**********************************************/
export interface WebTemplateCollections extends WebTemplateCollectionMethods {

}

/*********************************************
* WebTemplateCollectionMethods
**********************************************/
export interface WebTemplateCollectionMethods {
	getByName(name?: string): IBaseExecution<SP.WebTemplate>;
}

/*********************************************
* TeamChannel
**********************************************/
export interface TeamChannel {
	folderId?: any;
	groupId?: number;
}

/*********************************************
* TeamChannelCollections
**********************************************/
export interface TeamChannelCollections {

}

/*********************************************
* TenantAppUtility
**********************************************/
export interface TenantAppUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantAppUtilityCollections
**********************************************/
export interface TenantAppUtilityCollections {

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

}

/*********************************************
* AppPrincipalManager
**********************************************/
export interface AppPrincipalManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppPrincipalManagerCollections
**********************************************/
export interface AppPrincipalManagerCollections {

}

/*********************************************
* AppPrincipalCredential
**********************************************/
export interface AppPrincipalCredential {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppPrincipalCredentialCollections
**********************************************/
export interface AppPrincipalCredentialCollections {

}

/*********************************************
* AppPrincipalName
**********************************************/
export interface AppPrincipalName {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* AppPrincipalNameCollections
**********************************************/
export interface AppPrincipalNameCollections {

}
