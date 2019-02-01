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
export interface IApiMetadataQuery extends ApiMetadataQuery, ApiMetadataMethods {

}

/*********************************************
* ApiMetadata
**********************************************/
export interface ApiMetadata extends ApiMetadataProps, ApiMetadataCollections, ApiMetadataMethods {

}

/*********************************************
* ApiMetadataProps
**********************************************/
export interface ApiMetadataProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ApiMetadataPropMethods
**********************************************/
export interface ApiMetadataPropMethods {
	Current(): IBaseExecution<SP.ApiMetadata> & SP.ApiMetadataCollections;
}

/*********************************************
* ApiMetadataCollections
**********************************************/
export interface ApiMetadataCollections extends ApiMetadataPropMethods {
	Types(): IBaseCollection<SP.TypeInformation>;
	Types(id: string | number): IBaseQuery<SP.TypeInformation> & SP.TypeInformationCollections;
}

/*********************************************
* ApiMetadataQuery
**********************************************/
export interface ApiMetadataQuery extends ApiMetadataProps, ApiMetadataMethods {
	Current: SP.ApiMetadata & SP.ApiMetadataCollections;
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
export interface ISiteQuery extends SiteQuery, SiteMethods {

}

/*********************************************
* Site
**********************************************/
export interface Site extends SiteProps, SiteCollections, SiteMethods {

}

/*********************************************
* SiteProps
**********************************************/
export interface SiteProps {
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
* SitePropMethods
**********************************************/
export interface SitePropMethods {
	Audit(): IBaseExecution<SP.Audit> & SP.AuditCollections & SP.AuditMethods;
	Owner(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
	RootWeb(): IBaseExecution<SP.Web> & SP.WebCollections & SP.WebMethods;
	SecondaryContact(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* SiteCollections
**********************************************/
export interface SiteCollections extends SitePropMethods {
	CustomScriptSafeDomains(): IBaseCollection<SP.ScriptSafeDomain> & SP.ScriptSafeDomainCollectionMethods;
	CustomScriptSafeDomains(id: string | number): IBaseQuery<SP.ScriptSafeDomain> & SP.ScriptSafeDomainCollections & SP.ScriptSafeDomainMethods;
	EventReceivers(): IBaseCollection<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollectionMethods;
	EventReceivers(id: string | number): IBaseQuery<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollections & SP.EventReceiverDefinitionMethods;
	Features(): IBaseCollection<SP.Feature> & SP.FeatureCollectionMethods;
	Features(id: string | number): IBaseQuery<SP.Feature> & SP.FeatureCollections;
	RecycleBin(): IBaseCollection<SP.RecycleBinItem, SP.RecycleBinItemQuery> & SP.RecycleBinItemCollectionMethods;
	RecycleBin(id: string | number): IBaseQuery<SP.RecycleBinItem, SP.RecycleBinItemQuery> & SP.RecycleBinItemCollections & SP.RecycleBinItemMethods;
	UserCustomActions(): IBaseCollection<SP.UserCustomAction, SP.UserCustomActionQuery> & SP.UserCustomActionCollectionMethods;
	UserCustomActions(id: string | number): IBaseQuery<SP.UserCustomAction, SP.UserCustomActionQuery> & SP.UserCustomActionCollections & SP.UserCustomActionMethods;
}

/*********************************************
* SiteQuery
**********************************************/
export interface SiteQuery extends SiteProps, SiteMethods {
	Audit: SP.Audit & SP.AuditCollections;
	CustomScriptSafeDomains: IBaseResults<SP.ScriptSafeDomain>;
	EventReceivers: IBaseResults<SP.EventReceiverDefinition>;
	Features: IBaseResults<SP.Feature>;
	Owner: SP.User & SP.UserCollections;
	RecycleBin: IBaseResults<SP.RecycleBinItem>;
	RootWeb: SP.Web & SP.WebCollections;
	SecondaryContact: SP.User & SP.UserCollections;
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
export interface IAuditQuery extends AuditQuery, AuditMethods {

}

/*********************************************
* Audit
**********************************************/
export interface Audit extends AuditProps, AuditCollections, AuditMethods {

}

/*********************************************
* AuditProps
**********************************************/
export interface AuditProps {
	AuditFlags?: number;
}

/*********************************************
* AuditPropMethods
**********************************************/
export interface AuditPropMethods {

}

/*********************************************
* AuditCollections
**********************************************/
export interface AuditCollections extends AuditPropMethods {

}

/*********************************************
* AuditQuery
**********************************************/
export interface AuditQuery extends AuditProps, AuditMethods {

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
export interface IScriptSafeDomainQuery extends ScriptSafeDomainQuery, ScriptSafeDomainMethods {

}

/*********************************************
* ScriptSafeDomain
**********************************************/
export interface ScriptSafeDomain extends ScriptSafeDomainProps, ScriptSafeDomainCollections, ScriptSafeDomainMethods {

}

/*********************************************
* ScriptSafeDomainProps
**********************************************/
export interface ScriptSafeDomainProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ScriptSafeDomainPropMethods
**********************************************/
export interface ScriptSafeDomainPropMethods {

}

/*********************************************
* ScriptSafeDomainCollections
**********************************************/
export interface ScriptSafeDomainCollections extends ScriptSafeDomainPropMethods {

}

/*********************************************
* ScriptSafeDomainCollectionMethods
**********************************************/
export interface ScriptSafeDomainCollectionMethods {
	create(parameters?: SP.ScriptSafeDomainEntityData): IBaseExecution<SP.ScriptSafeDomain>;
	getByDomainName(domainName?: string): IBaseQuery<SP.ScriptSafeDomain>;
}

/*********************************************
* ScriptSafeDomainQuery
**********************************************/
export interface ScriptSafeDomainQuery extends ScriptSafeDomainProps, ScriptSafeDomainMethods {

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
export interface IEventReceiverDefinitionQuery extends EventReceiverDefinitionQuery, EventReceiverDefinitionMethods {

}

/*********************************************
* EventReceiverDefinition
**********************************************/
export interface EventReceiverDefinition extends EventReceiverDefinitionProps, EventReceiverDefinitionCollections, EventReceiverDefinitionMethods {

}

/*********************************************
* EventReceiverDefinitionProps
**********************************************/
export interface EventReceiverDefinitionProps {
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
* EventReceiverDefinitionPropMethods
**********************************************/
export interface EventReceiverDefinitionPropMethods {

}

/*********************************************
* EventReceiverDefinitionCollections
**********************************************/
export interface EventReceiverDefinitionCollections extends EventReceiverDefinitionPropMethods {

}

/*********************************************
* EventReceiverDefinitionCollectionMethods
**********************************************/
export interface EventReceiverDefinitionCollectionMethods {
	add(eventReceiverCreationInformation?: SP.EventReceiverDefinitionCreationInformation): IBaseExecution<SP.EventReceiverDefinition>;
	getById(eventReceiverId?: any): IBaseQuery<SP.EventReceiverDefinition>;
}

/*********************************************
* EventReceiverDefinitionQuery
**********************************************/
export interface EventReceiverDefinitionQuery extends EventReceiverDefinitionProps, EventReceiverDefinitionMethods {

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
	getById(featureId?: any): IBaseQuery<SP.Feature>;
	remove(featureId?: any, force?: boolean): IBaseExecution<any>;
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
export interface IUserQuery extends UserQuery, UserMethods {

}

/*********************************************
* User
**********************************************/
export interface User extends SP.Principal, UserProps, UserCollections, UserMethods {

}

/*********************************************
* UserProps
**********************************************/
export interface UserProps {
	AadObjectId?: SP.UserIdInfo;
	Email?: string;
	IsEmailAuthenticationGuestUser?: boolean;
	IsShareByEmailGuestUser?: boolean;
	IsSiteAdmin?: boolean;
	UserId?: SP.UserIdInfo;
}

/*********************************************
* UserPropMethods
**********************************************/
export interface UserPropMethods {

}

/*********************************************
* UserCollections
**********************************************/
export interface UserCollections extends UserPropMethods {
	Alerts(): IBaseCollection<SP.Alert, SP.AlertQuery> & SP.AlertCollectionMethods;
	Alerts(id: string | number): IBaseQuery<SP.Alert, SP.AlertQuery> & SP.AlertCollections & SP.AlertMethods;
	Groups(): IBaseCollection<SP.Group, SP.GroupQuery> & SP.GroupCollectionMethods;
	Groups(id: string | number): IBaseQuery<SP.Group, SP.GroupQuery> & SP.GroupCollections & SP.GroupMethods;
}

/*********************************************
* UserCollectionMethods
**********************************************/
export interface UserCollectionMethods {
	getByEmail(emailAddress?: string): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections;
	getById(id?: number): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections;
	getByLoginName(loginName?: string): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections;
	removeById(id?: number): IBaseExecution<any>;
	removeByLoginName(loginName?: string): IBaseExecution<any>;
}

/*********************************************
* UserQuery
**********************************************/
export interface UserQuery extends UserProps, UserMethods {
	Alerts: IBaseResults<SP.Alert>;
	Groups: IBaseResults<SP.Group>;
}

/*********************************************
* UserMethods
**********************************************/
export interface UserMethods {
	// update(): IBaseExecution<any>;
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
export interface IAlertQuery extends AlertQuery, AlertMethods {

}

/*********************************************
* Alert
**********************************************/
export interface Alert extends AlertProps, AlertCollections, AlertMethods {

}

/*********************************************
* AlertProps
**********************************************/
export interface AlertProps {
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
* AlertPropMethods
**********************************************/
export interface AlertPropMethods {
	AllProperties(): IBaseExecution<SP.PropertyValues> & SP.PropertyValuesCollections;
	Item(): IBaseExecution<SP.ListItem> & SP.ListItemCollections & SP.ListItemMethods;
	List(): IBaseExecution<SP.List> & SP.ListCollections & SP.ListMethods;
	User(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* AlertCollections
**********************************************/
export interface AlertCollections extends AlertPropMethods {

}

/*********************************************
* AlertCollectionMethods
**********************************************/
export interface AlertCollectionMethods {
	add(alertCreationInformation?: SP.AlertCreationInformation): IBaseExecution<any>;
	contains(idAlert?: any): IBaseExecution<boolean>;
	deleteAlert(idAlert?: any): IBaseExecution<any>;
	deleteAlertAtIndex(index?: number): IBaseExecution<any>;
	getById(idAlert?: any): IBaseQuery<SP.Alert, SP.AlertQuery> & SP.AlertCollections;
}

/*********************************************
* AlertQuery
**********************************************/
export interface AlertQuery extends AlertProps, AlertMethods {
	AllProperties: SP.PropertyValues & SP.PropertyValuesCollections;
	Item: SP.ListItem & SP.ListItemCollections;
	List: SP.List & SP.ListCollections;
	User: SP.User & SP.UserCollections;
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
export interface ISecurableObjectQuery extends SecurableObjectQuery, SecurableObjectMethods {

}

/*********************************************
* SecurableObject
**********************************************/
export interface SecurableObject extends SecurableObjectProps, SecurableObjectCollections, SecurableObjectMethods {

}

/*********************************************
* SecurableObjectProps
**********************************************/
export interface SecurableObjectProps {
	HasUniqueRoleAssignments?: boolean;
}

/*********************************************
* SecurableObjectPropMethods
**********************************************/
export interface SecurableObjectPropMethods {
	FirstUniqueAncestorSecurableObject(): IBaseExecution<SP.SecurableObject> & SP.SecurableObjectCollections & SP.SecurableObjectMethods;
}

/*********************************************
* SecurableObjectCollections
**********************************************/
export interface SecurableObjectCollections extends SecurableObjectPropMethods {
	RoleAssignments(): IBaseCollection<SP.RoleAssignment, SP.RoleAssignmentQuery> & SP.RoleAssignmentCollectionMethods;
	RoleAssignments(id: string | number): IBaseQuery<SP.RoleAssignment, SP.RoleAssignmentQuery> & SP.RoleAssignmentCollections & SP.RoleAssignmentMethods;
}

/*********************************************
* SecurableObjectQuery
**********************************************/
export interface SecurableObjectQuery extends SecurableObjectProps, SecurableObjectMethods {
	FirstUniqueAncestorSecurableObject: SP.SecurableObject & SP.SecurableObjectCollections;
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
export interface IRoleAssignmentQuery extends RoleAssignmentQuery, RoleAssignmentMethods {

}

/*********************************************
* RoleAssignment
**********************************************/
export interface RoleAssignment extends RoleAssignmentProps, RoleAssignmentCollections, RoleAssignmentMethods {

}

/*********************************************
* RoleAssignmentProps
**********************************************/
export interface RoleAssignmentProps {
	PrincipalId?: number;
}

/*********************************************
* RoleAssignmentPropMethods
**********************************************/
export interface RoleAssignmentPropMethods {
	Member(): IBaseExecution<SP.Principal> & SP.PrincipalCollections;
}

/*********************************************
* RoleAssignmentCollections
**********************************************/
export interface RoleAssignmentCollections extends RoleAssignmentPropMethods {
	RoleDefinitionBindings(): IBaseCollection<SP.RoleDefinition> & SP.RoleDefinitionCollectionMethods;
	RoleDefinitionBindings(id: string | number): IBaseQuery<SP.RoleDefinition> & SP.RoleDefinitionCollections & SP.RoleDefinitionMethods;
}

/*********************************************
* RoleAssignmentCollectionMethods
**********************************************/
export interface RoleAssignmentCollectionMethods {
	addRoleAssignment(principalId?: number, roleDefId?: number): IBaseExecution<any>;
	getByPrincipalId(principalId?: number): IBaseQuery<SP.RoleAssignment, SP.RoleAssignmentQuery> & SP.RoleAssignmentCollections;
	removeRoleAssignment(principalId?: number, roleDefId?: number): IBaseExecution<any>;
}

/*********************************************
* RoleAssignmentQuery
**********************************************/
export interface RoleAssignmentQuery extends RoleAssignmentProps, RoleAssignmentMethods {
	Member: SP.Principal & SP.PrincipalCollections;
	RoleDefinitionBindings: IBaseResults<SP.RoleDefinition>;
}

/*********************************************
* RoleAssignmentMethods
**********************************************/
export interface RoleAssignmentMethods {
	delete(): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IRoleDefinitionQuery extends RoleDefinitionQuery, RoleDefinitionMethods {

}

/*********************************************
* RoleDefinition
**********************************************/
export interface RoleDefinition extends RoleDefinitionProps, RoleDefinitionCollections, RoleDefinitionMethods {

}

/*********************************************
* RoleDefinitionProps
**********************************************/
export interface RoleDefinitionProps {
	BasePermissions?: SP.BasePermissions;
	Description?: string;
	Hidden?: boolean;
	Id?: number;
	Name?: string;
	Order?: number;
	RoleTypeKind?: number;
}

/*********************************************
* RoleDefinitionPropMethods
**********************************************/
export interface RoleDefinitionPropMethods {

}

/*********************************************
* RoleDefinitionCollections
**********************************************/
export interface RoleDefinitionCollections extends RoleDefinitionPropMethods {

}

/*********************************************
* RoleDefinitionCollectionMethods
**********************************************/
export interface RoleDefinitionCollectionMethods {
	getById(id?: number): IBaseQuery<SP.RoleDefinition>;
	removeAll(): IBaseExecution<any>;
	getById(id?: number): IBaseQuery<SP.RoleDefinition>;
	getByName(name?: string): IBaseQuery<SP.RoleDefinition>;
	getByType(roleType?: number): IBaseQuery<SP.RoleDefinition>;
	recreateMissingDefaultRoleDefinitions(): IBaseExecution<any>;
}

/*********************************************
* RoleDefinitionQuery
**********************************************/
export interface RoleDefinitionQuery extends RoleDefinitionProps, RoleDefinitionMethods {

}

/*********************************************
* RoleDefinitionMethods
**********************************************/
export interface RoleDefinitionMethods {
	delete(): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IListItemQuery extends ListItemQuery, ListItemMethods {

}

/*********************************************
* ListItem
**********************************************/
export interface ListItem extends SP.SecurableObject, ListItemProps, ListItemCollections, ListItemMethods {

}

/*********************************************
* ListItemProps
**********************************************/
export interface ListItemProps {
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
* ListItemPropMethods
**********************************************/
export interface ListItemPropMethods {
	ContentType(): IBaseExecution<SP.ContentType> & SP.ContentTypeCollections & SP.ContentTypeMethods;
	GetDlpPolicyTip(): IBaseExecution<SP.DlpPolicyTip> & SP.DlpPolicyTipCollections;
	FieldValuesAsHtml(): IBaseExecution<SP.FieldStringValues> & SP.FieldStringValuesCollections;
	FieldValuesAsText(): IBaseExecution<SP.FieldStringValues> & SP.FieldStringValuesCollections;
	FieldValuesForEdit(): IBaseExecution<SP.FieldStringValues> & SP.FieldStringValuesCollections;
	File(): IBaseExecution<SP.File> & SP.FileCollections & SP.FileMethods;
	Folder(): IBaseExecution<SP.Folder> & SP.FolderCollections & SP.FolderMethods;
	LikedByInformation(): IBaseExecution<Microsoft.SharePoint.Likes.likedByInformation> & Microsoft.SharePoint.Likes.likedByInformationCollections;
	ParentList(): IBaseExecution<SP.List> & SP.ListCollections & SP.ListMethods;
	Properties(): IBaseExecution<SP.PropertyValues> & SP.PropertyValuesCollections;
}

/*********************************************
* ListItemCollections
**********************************************/
export interface ListItemCollections extends ListItemPropMethods {
	AttachmentFiles(): IBaseCollection<SP.Attachment> & SP.AttachmentCollectionMethods;
	AttachmentFiles(id: string | number): IBaseQuery<SP.Attachment> & SP.AttachmentCollections & SP.AttachmentMethods;
	Versions(): IBaseCollection<SP.ListItemVersion, SP.ListItemVersionQuery> & SP.ListItemVersionCollectionMethods;
	Versions(id: string | number): IBaseQuery<SP.ListItemVersion, SP.ListItemVersionQuery> & SP.ListItemVersionCollections & SP.ListItemVersionMethods;
}

/*********************************************
* ListItemCollectionMethods
**********************************************/
export interface ListItemCollectionMethods {
	getById(itemId?: number): IBaseQuery<SP.ListItem, SP.ListItemQuery> & SP.ListItemCollections;
	getByStringId(sId?: string): IBaseQuery<SP.ListItem, SP.ListItemQuery> & SP.ListItemCollections;
	add(parameters?: SP.ListItemCreationInformation | any): IBaseExecution<SP.ListItem>;
}

/*********************************************
* ListItemQuery
**********************************************/
export interface ListItemQuery extends ListItemProps, ListItemMethods {
	AttachmentFiles: IBaseResults<SP.Attachment>;
	ContentType: SP.ContentType & SP.ContentTypeCollections;
	GetDlpPolicyTip: SP.DlpPolicyTip & SP.DlpPolicyTipCollections;
	FieldValuesAsHtml: SP.FieldStringValues & SP.FieldStringValuesCollections;
	FieldValuesAsText: SP.FieldStringValues & SP.FieldStringValuesCollections;
	FieldValuesForEdit: SP.FieldStringValues & SP.FieldStringValuesCollections;
	File: SP.File & SP.FileCollections;
	Folder: SP.Folder & SP.FolderCollections;
	LikedByInformation: Microsoft.SharePoint.Likes.likedByInformation & Microsoft.SharePoint.Likes.likedByInformationCollections;
	ParentList: SP.List & SP.ListCollections;
	Properties: SP.PropertyValues & SP.PropertyValuesCollections;
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
	// update(): IBaseExecution<any>;
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
export interface IAttachmentQuery extends AttachmentQuery, AttachmentMethods {

}

/*********************************************
* Attachment
**********************************************/
export interface Attachment extends AttachmentProps, AttachmentCollections, AttachmentMethods {

}

/*********************************************
* AttachmentProps
**********************************************/
export interface AttachmentProps {
	FileName?: string;
	FileNameAsPath?: SP.ResourcePath;
	ServerRelativePath?: SP.ResourcePath;
	ServerRelativeUrl?: string;
}

/*********************************************
* AttachmentPropMethods
**********************************************/
export interface AttachmentPropMethods {

}

/*********************************************
* AttachmentCollections
**********************************************/
export interface AttachmentCollections extends AttachmentPropMethods {

}

/*********************************************
* AttachmentCollectionMethods
**********************************************/
export interface AttachmentCollectionMethods {
	// add(FileName?: string): IBaseExecution<SP.Attachment>;
	addUsingPath(DecodedUrl?: string, contentStream?: any): IBaseExecution<SP.Attachment>;
	getByFileName(fileName?: string): IBaseQuery<SP.Attachment>;
	getByFileNameAsPath(DecodedUrl?: string): IBaseQuery<SP.Attachment>;
	add(FileName?: SP.ListItemCreationInformation, Content?: any): IBaseExecution<SP.ListItem>;
}

/*********************************************
* AttachmentQuery
**********************************************/
export interface AttachmentQuery extends AttachmentProps, AttachmentMethods {

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
export interface IContentTypeQuery extends ContentTypeQuery, ContentTypeMethods {

}

/*********************************************
* ContentType
**********************************************/
export interface ContentType extends ContentTypeProps, ContentTypeCollections, ContentTypeMethods {

}

/*********************************************
* ContentTypeProps
**********************************************/
export interface ContentTypeProps {
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
* ContentTypePropMethods
**********************************************/
export interface ContentTypePropMethods {
	DescriptionResource(): IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
	NameResource(): IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
	Parent(): IBaseExecution<SP.ContentType> & SP.ContentTypeCollections & SP.ContentTypeMethods;
}

/*********************************************
* ContentTypeCollections
**********************************************/
export interface ContentTypeCollections extends ContentTypePropMethods {
	FieldLinks(): IBaseCollection<SP.FieldLink> & SP.FieldLinkCollectionMethods;
	FieldLinks(id: string | number): IBaseQuery<SP.FieldLink> & SP.FieldLinkCollections & SP.FieldLinkMethods;
	Fields(): IBaseCollection<SP.Field, SP.FieldQuery> & SP.FieldCollectionMethods;
	Fields(id: string | number): IBaseQuery<SP.Field, SP.FieldQuery> & SP.FieldCollections & SP.FieldMethods;
	WorkflowAssociations(): IBaseCollection<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollectionMethods;
	WorkflowAssociations(id: string | number): IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollections & SP.Workflow.WorkflowAssociationMethods;
}

/*********************************************
* ContentTypeCollectionMethods
**********************************************/
export interface ContentTypeCollectionMethods {
	addAvailableContentType(contentTypeId?: string): IBaseExecution<SP.ContentType>;
	getById(contentTypeId?: string): IBaseQuery<SP.ContentType, SP.ContentTypeQuery> & SP.ContentTypeCollections;
	add(parameters?: SP.ContentTypeCreationInformation | any): IBaseExecution<SP.ContentType>;
}

/*********************************************
* ContentTypeQuery
**********************************************/
export interface ContentTypeQuery extends ContentTypeProps, ContentTypeMethods {
	DescriptionResource: SP.UserResource & SP.UserResourceCollections;
	FieldLinks: IBaseResults<SP.FieldLink>;
	Fields: IBaseResults<SP.Field>;
	NameResource: SP.UserResource & SP.UserResourceCollections;
	Parent: SP.ContentType & SP.ContentTypeCollections;
	WorkflowAssociations: IBaseResults<SP.Workflow.WorkflowAssociation>;
}

/*********************************************
* ContentTypeMethods
**********************************************/
export interface ContentTypeMethods {
	delete(): IBaseExecution<any>;
	// update(updateChildren?: boolean): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IUserResource
**********************************************/
export interface IUserResource extends UserResourceCollections,UserResourceMethods,IBaseQuery<IUserResourceQuery> {

}

/*********************************************
* IUserResourceQuery
**********************************************/
export interface IUserResourceQuery extends UserResourceQuery, UserResourceMethods {

}

/*********************************************
* UserResource
**********************************************/
export interface UserResource extends UserResourceProps, UserResourceCollections, UserResourceMethods {

}

/*********************************************
* UserResourceProps
**********************************************/
export interface UserResourceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserResourcePropMethods
**********************************************/
export interface UserResourcePropMethods {

}

/*********************************************
* UserResourceCollections
**********************************************/
export interface UserResourceCollections extends UserResourcePropMethods {

}

/*********************************************
* UserResourceQuery
**********************************************/
export interface UserResourceQuery extends UserResourceProps, UserResourceMethods {

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
export interface IFieldLinkQuery extends FieldLinkQuery, FieldLinkMethods {

}

/*********************************************
* FieldLink
**********************************************/
export interface FieldLink extends FieldLinkProps, FieldLinkCollections, FieldLinkMethods {

}

/*********************************************
* FieldLinkProps
**********************************************/
export interface FieldLinkProps {
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
* FieldLinkPropMethods
**********************************************/
export interface FieldLinkPropMethods {

}

/*********************************************
* FieldLinkCollections
**********************************************/
export interface FieldLinkCollections extends FieldLinkPropMethods {

}

/*********************************************
* FieldLinkCollectionMethods
**********************************************/
export interface FieldLinkCollectionMethods {
	getById(id?: any): IBaseQuery<SP.FieldLink>;
	reorder(internalNames?: Array<string>): IBaseExecution<any>;
	add(parameters?: any): IBaseExecution<SP.FieldLink>;
}

/*********************************************
* FieldLinkQuery
**********************************************/
export interface FieldLinkQuery extends FieldLinkProps, FieldLinkMethods {

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
export interface IFieldQuery extends FieldQuery, FieldMethods {

}

/*********************************************
* Field
**********************************************/
export interface Field extends FieldProps, FieldCollections, FieldMethods {

}

/*********************************************
* FieldProps
**********************************************/
export interface FieldProps {
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
* FieldPropMethods
**********************************************/
export interface FieldPropMethods {
	DescriptionResource(): IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
	TitleResource(): IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
}

/*********************************************
* FieldCollections
**********************************************/
export interface FieldCollections extends FieldPropMethods {

}

/*********************************************
* FieldCollectionMethods
**********************************************/
export interface FieldCollectionMethods {
	addDependentLookupField(displayName?: string, primaryLookupFieldId?: any, showField?: string): IBaseExecution<SP.Field>;
	addField(parameters?: SP.FieldCreationInformation): IBaseExecution<SP.Field>;
	// createFieldAsXml(parameters?: SP.XmlSchemaFieldCreationInformation): IBaseExecution<SP.Field>;
	getById(id?: any): IBaseQuery<SP.Field, SP.FieldQuery> & SP.FieldCollections;
	getByInternalNameOrTitle(strName?: string): IBaseQuery<SP.Field, SP.FieldQuery> & SP.FieldCollections;
	getByTitle(title?: string): IBaseQuery<SP.Field, SP.FieldQuery> & SP.FieldCollections;
	createFieldAsXml(schemaXml?: string): IBaseExecution<any>;
}

/*********************************************
* FieldQuery
**********************************************/
export interface FieldQuery extends FieldProps, FieldMethods {
	DescriptionResource: SP.UserResource & SP.UserResourceCollections;
	TitleResource: SP.UserResource & SP.UserResourceCollections;
}

/*********************************************
* FieldMethods
**********************************************/
export interface FieldMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFileQuery extends FileQuery, FileMethods {

}

/*********************************************
* File
**********************************************/
export interface File extends FileProps, FileCollections, FileMethods {

}

/*********************************************
* FileProps
**********************************************/
export interface FileProps {
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
* FilePropMethods
**********************************************/
export interface FilePropMethods {
	Author(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
	CheckedOutByUser(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
	EffectiveInformationRightsManagementSettings(): IBaseExecution<SP.EffectiveInformationRightsManagementSettings> & SP.EffectiveInformationRightsManagementSettingsCollections;
	InformationRightsManagementSettings(): IBaseExecution<SP.InformationRightsManagementFileSettings> & SP.InformationRightsManagementFileSettingsCollections & SP.InformationRightsManagementFileSettingsMethods;
	ListItemAllFields(): IBaseExecution<SP.ListItem> & SP.ListItemCollections & SP.ListItemMethods;
	LockedByUser(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
	ModifiedBy(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
	Properties(): IBaseExecution<SP.PropertyValues> & SP.PropertyValuesCollections;
}

/*********************************************
* FileCollections
**********************************************/
export interface FileCollections extends FilePropMethods {
	VersionEvents(): IBaseCollection<SP.FileVersionEvent>;
	VersionEvents(id: string | number): IBaseQuery<SP.FileVersionEvent> & SP.FileVersionEventCollections;
	Versions(): IBaseCollection<SP.FileVersion, SP.FileVersionQuery> & SP.FileVersionCollectionMethods;
	Versions(id: string | number): IBaseQuery<SP.FileVersion, SP.FileVersionQuery> & SP.FileVersionCollections & SP.FileVersionMethods;
}

/*********************************************
* FileCollectionMethods
**********************************************/
export interface FileCollectionMethods {
	// add(Content?: any, Overwrite?: boolean, Url?: string): IBaseExecution<SP.File>;
	addStub(urlOfFile?: string): IBaseExecution<SP.File>;
	addStubUsingPath(DecodedUrl?: string): IBaseExecution<SP.File>;
	addTemplateFile(urlOfFile?: string, templateFileType?: number): IBaseExecution<SP.File>;
	addUsingPath(DecodedUrl?: string, Overwrite?: boolean, contentStream?: any): IBaseExecution<SP.File>;
	getByPathOrAddStub(DecodedUrl?: string): IBaseQuery<SP.File, SP.FileQuery> & SP.FileCollections;
	getByUrl(url?: string): IBaseQuery<SP.File, SP.FileQuery> & SP.FileCollections;
	getByUrlOrAddStub(urlOfFile?: string): IBaseQuery<SP.File, SP.FileQuery> & SP.FileCollections;
	add(Url?: string, Overwrite?: boolean, Content?: any): IBaseExecution<SP.File>;
}

/*********************************************
* FileQuery
**********************************************/
export interface FileQuery extends FileProps, FileMethods {
	Author: SP.User & SP.UserCollections;
	CheckedOutByUser: SP.User & SP.UserCollections;
	EffectiveInformationRightsManagementSettings: SP.EffectiveInformationRightsManagementSettings & SP.EffectiveInformationRightsManagementSettingsCollections;
	InformationRightsManagementSettings: SP.InformationRightsManagementFileSettings & SP.InformationRightsManagementFileSettingsCollections;
	ListItemAllFields: SP.ListItem & SP.ListItemCollections;
	LockedByUser: SP.User & SP.UserCollections;
	ModifiedBy: SP.User & SP.UserCollections;
	Properties: SP.PropertyValues & SP.PropertyValuesCollections;
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
	// update(): IBaseExecution<any>;
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
export interface IInformationRightsManagementFileSettingsQuery extends InformationRightsManagementFileSettingsQuery, InformationRightsManagementFileSettingsMethods {

}

/*********************************************
* InformationRightsManagementFileSettings
**********************************************/
export interface InformationRightsManagementFileSettings extends InformationRightsManagementFileSettingsProps, InformationRightsManagementFileSettingsCollections, InformationRightsManagementFileSettingsMethods {

}

/*********************************************
* InformationRightsManagementFileSettingsProps
**********************************************/
export interface InformationRightsManagementFileSettingsProps {
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
* InformationRightsManagementFileSettingsPropMethods
**********************************************/
export interface InformationRightsManagementFileSettingsPropMethods {

}

/*********************************************
* InformationRightsManagementFileSettingsCollections
**********************************************/
export interface InformationRightsManagementFileSettingsCollections extends InformationRightsManagementFileSettingsPropMethods {

}

/*********************************************
* InformationRightsManagementFileSettingsQuery
**********************************************/
export interface InformationRightsManagementFileSettingsQuery extends InformationRightsManagementFileSettingsProps, InformationRightsManagementFileSettingsMethods {

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
export interface IFileVersionQuery extends FileVersionQuery, FileVersionMethods {

}

/*********************************************
* FileVersion
**********************************************/
export interface FileVersion extends FileVersionProps, FileVersionCollections, FileVersionMethods {

}

/*********************************************
* FileVersionProps
**********************************************/
export interface FileVersionProps {
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
* FileVersionPropMethods
**********************************************/
export interface FileVersionPropMethods {
	CreatedBy(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* FileVersionCollections
**********************************************/
export interface FileVersionCollections extends FileVersionPropMethods {

}

/*********************************************
* FileVersionCollectionMethods
**********************************************/
export interface FileVersionCollectionMethods {
	deleteAll(): IBaseExecution<any>;
	deleteByID(vid?: number): IBaseExecution<any>;
	deleteByLabel(versionlabel?: string): IBaseExecution<any>;
	getById(versionid?: number): IBaseQuery<SP.FileVersion, SP.FileVersionQuery> & SP.FileVersionCollections;
	recycleByID(vid?: number): IBaseExecution<any>;
	recycleByLabel(versionlabel?: string): IBaseExecution<any>;
	restoreByLabel(versionlabel?: string): IBaseExecution<any>;
}

/*********************************************
* FileVersionQuery
**********************************************/
export interface FileVersionQuery extends FileVersionProps, FileVersionMethods {
	CreatedBy: SP.User & SP.UserCollections;
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
export interface IFolderQuery extends FolderQuery, FolderMethods {

}

/*********************************************
* Folder
**********************************************/
export interface Folder extends FolderProps, FolderCollections, FolderMethods {

}

/*********************************************
* FolderProps
**********************************************/
export interface FolderProps {
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
* FolderPropMethods
**********************************************/
export interface FolderPropMethods {
	ListItemAllFields(): IBaseExecution<SP.ListItem> & SP.ListItemCollections & SP.ListItemMethods;
	ParentFolder(): IBaseExecution<SP.Folder> & SP.FolderCollections & SP.FolderMethods;
	Properties(): IBaseExecution<SP.PropertyValues> & SP.PropertyValuesCollections;
	StorageMetrics(): IBaseExecution<SP.StorageMetrics> & SP.StorageMetricsCollections;
}

/*********************************************
* FolderCollections
**********************************************/
export interface FolderCollections extends FolderPropMethods {
	Files(): IBaseCollection<SP.File, SP.FileQuery> & SP.FileCollectionMethods;
	Files(id: string | number): IBaseQuery<SP.File, SP.FileQuery> & SP.FileCollections & SP.FileMethods;
	Folders(): IBaseCollection<SP.Folder, SP.FolderQuery> & SP.FolderCollectionMethods;
	Folders(id: string | number): IBaseQuery<SP.Folder, SP.FolderQuery> & SP.FolderCollections & SP.FolderMethods;
}

/*********************************************
* FolderCollectionMethods
**********************************************/
export interface FolderCollectionMethods {
	add(url?: string): IBaseExecution<SP.Folder>;
	addUsingPath(DecodedUrl?: string, Overwrite?: boolean): IBaseExecution<SP.Folder>;
	addWithOverwrite(url?: string, overwrite?: boolean): IBaseExecution<SP.Folder>;
	getByPath(DecodedUrl?: string): IBaseQuery<SP.Folder, SP.FolderQuery> & SP.FolderCollections;
	getByUrl(url?: string): IBaseQuery<SP.Folder, SP.FolderQuery> & SP.FolderCollections;
}

/*********************************************
* FolderQuery
**********************************************/
export interface FolderQuery extends FolderProps, FolderMethods {
	Files: IBaseResults<SP.File>;
	ListItemAllFields: SP.ListItem & SP.ListItemCollections;
	ParentFolder: SP.Folder & SP.FolderCollections;
	Properties: SP.PropertyValues & SP.PropertyValuesCollections;
	StorageMetrics: SP.StorageMetrics & SP.StorageMetricsCollections;
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
	// update(): IBaseExecution<any>;
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
export interface IListQuery extends ListQuery, ListMethods {

}

/*********************************************
* List
**********************************************/
export interface List extends SP.SecurableObject, ListProps, ListCollections, ListMethods {

}

/*********************************************
* ListProps
**********************************************/
export interface ListProps {
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
* ListPropMethods
**********************************************/
export interface ListPropMethods {
	CreatablesInfo(): IBaseExecution<SP.CreatablesInfo> & SP.CreatablesInfoCollections;
	DefaultView(): IBaseExecution<SP.View> & SP.ViewCollections & SP.ViewMethods;
	DescriptionResource(): IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
	InformationRightsManagementSettings(): IBaseExecution<SP.InformationRightsManagementSettings> & SP.InformationRightsManagementSettingsCollections & SP.InformationRightsManagementSettingsMethods;
	ParentWeb(): IBaseExecution<SP.Web> & SP.WebCollections & SP.WebMethods;
	RootFolder(): IBaseExecution<SP.Folder> & SP.FolderCollections & SP.FolderMethods;
	TitleResource(): IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
}

/*********************************************
* ListCollections
**********************************************/
export interface ListCollections extends ListPropMethods {
	ContentTypes(): IBaseCollection<SP.ContentType, SP.ContentTypeQuery> & SP.ContentTypeCollectionMethods;
	ContentTypes(id: string | number): IBaseQuery<SP.ContentType, SP.ContentTypeQuery> & SP.ContentTypeCollections & SP.ContentTypeMethods;
	EventReceivers(): IBaseCollection<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollectionMethods;
	EventReceivers(id: string | number): IBaseQuery<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollections & SP.EventReceiverDefinitionMethods;
	Fields(): IBaseCollection<SP.Field, SP.FieldQuery> & SP.FieldCollectionMethods;
	Fields(id: string | number): IBaseQuery<SP.Field, SP.FieldQuery> & SP.FieldCollections & SP.FieldMethods;
	Forms(): IBaseCollection<SP.Form> & SP.FormCollectionMethods;
	Forms(id: string | number): IBaseQuery<SP.Form> & SP.FormCollections;
	Items(): IBaseCollection<SP.ListItem, SP.ListItemQuery> & SP.ListItemCollectionMethods;
	Items(id: string | number): IBaseQuery<SP.ListItem, SP.ListItemQuery> & SP.ListItemCollections & SP.ListItemMethods;
	Subscriptions(): IBaseCollection<Microsoft.SharePoint.Webhooks.Subscription> & Microsoft.SharePoint.Webhooks.SubscriptionCollectionMethods;
	Subscriptions(id: string | number): IBaseQuery<Microsoft.SharePoint.Webhooks.Subscription> & Microsoft.SharePoint.Webhooks.SubscriptionCollections & Microsoft.SharePoint.Webhooks.SubscriptionMethods;
	UserCustomActions(): IBaseCollection<SP.UserCustomAction, SP.UserCustomActionQuery> & SP.UserCustomActionCollectionMethods;
	UserCustomActions(id: string | number): IBaseQuery<SP.UserCustomAction, SP.UserCustomActionQuery> & SP.UserCustomActionCollections & SP.UserCustomActionMethods;
	Views(): IBaseCollection<SP.View, SP.ViewQuery> & SP.ViewCollectionMethods;
	Views(id: string | number): IBaseQuery<SP.View, SP.ViewQuery> & SP.ViewCollections & SP.ViewMethods;
	WorkflowAssociations(): IBaseCollection<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollectionMethods;
	WorkflowAssociations(id: string | number): IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollections & SP.Workflow.WorkflowAssociationMethods;
}

/*********************************************
* ListCollectionMethods
**********************************************/
export interface ListCollectionMethods {
	// add(parameters?: SP.ListCreationInformation): IBaseExecution<SP.List>;
	ensureClientRenderedSitePagesLibrary(): IBaseExecution<SP.List>;
	ensureEventsList(): IBaseExecution<SP.List>;
	ensureSiteAssetsLibrary(): IBaseExecution<SP.List>;
	ensureSitePagesLibrary(): IBaseExecution<SP.List>;
	getById(id?: any): IBaseQuery<SP.List, SP.ListQuery> & SP.ListCollections;
	getByTitle(title?: string): IBaseQuery<SP.List, SP.ListQuery> & SP.ListCollections;
	add(parameters?: SP.ListCreationInformation | any): IBaseExecution<SP.List>;
}

/*********************************************
* ListQuery
**********************************************/
export interface ListQuery extends ListProps, ListMethods {
	ContentTypes: IBaseResults<SP.ContentType>;
	CreatablesInfo: SP.CreatablesInfo & SP.CreatablesInfoCollections;
	DefaultView: SP.View & SP.ViewCollections;
	DescriptionResource: SP.UserResource & SP.UserResourceCollections;
	EventReceivers: IBaseResults<SP.EventReceiverDefinition>;
	Fields: IBaseResults<SP.Field>;
	Forms: IBaseResults<SP.Form>;
	InformationRightsManagementSettings: SP.InformationRightsManagementSettings & SP.InformationRightsManagementSettingsCollections;
	Items: IBaseResults<SP.ListItem>;
	ParentWeb: SP.Web & SP.WebCollections;
	RootFolder: SP.Folder & SP.FolderCollections;
	Subscriptions: IBaseResults<Microsoft.SharePoint.Webhooks.Subscription>;
	TitleResource: SP.UserResource & SP.UserResourceCollections;
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
	// update(): IBaseExecution<any>;
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
export interface IViewQuery extends ViewQuery, ViewMethods {

}

/*********************************************
* View
**********************************************/
export interface View extends ViewProps, ViewCollections, ViewMethods {

}

/*********************************************
* ViewProps
**********************************************/
export interface ViewProps {
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
* ViewPropMethods
**********************************************/
export interface ViewPropMethods {
	ViewFields(): IBaseExecution<SP.ViewFieldCollection> & SP.ViewFieldCollectionCollections & SP.ViewFieldCollectionMethods;
}

/*********************************************
* ViewCollections
**********************************************/
export interface ViewCollections extends ViewPropMethods {

}

/*********************************************
* ViewCollectionMethods
**********************************************/
export interface ViewCollectionMethods {
	// add(parameters?: SP.ViewCreationInformation): IBaseExecution<SP.View>;
	getById(guidId?: any): IBaseQuery<SP.View, SP.ViewQuery> & SP.ViewCollections;
	getByTitle(strTitle?: string): IBaseQuery<SP.View, SP.ViewQuery> & SP.ViewCollections;
	add(properties?: any): IBaseExecution<any>;
}

/*********************************************
* ViewQuery
**********************************************/
export interface ViewQuery extends ViewProps, ViewMethods {
	ViewFields: SP.ViewFieldCollection & SP.ViewFieldCollectionCollections;
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
	// update(): IBaseExecution<any>;
	update(properties?: any): IBaseExecution<any>;
}

/*********************************************
* IViewFieldCollection
**********************************************/
export interface IViewFieldCollection extends ViewFieldCollectionCollections,ViewFieldCollectionMethods,IBaseQuery<IViewFieldCollectionQuery> {

}

/*********************************************
* IViewFieldCollectionQuery
**********************************************/
export interface IViewFieldCollectionQuery extends ViewFieldCollectionQuery, ViewFieldCollectionMethods {

}

/*********************************************
* ViewFieldCollection
**********************************************/
export interface ViewFieldCollection extends ViewFieldCollectionProps, ViewFieldCollectionCollections, ViewFieldCollectionMethods {

}

/*********************************************
* ViewFieldCollectionProps
**********************************************/
export interface ViewFieldCollectionProps {
	SchemaXml?: string;
	Items?: Array<string>;
}

/*********************************************
* ViewFieldCollectionPropMethods
**********************************************/
export interface ViewFieldCollectionPropMethods {

}

/*********************************************
* ViewFieldCollectionCollections
**********************************************/
export interface ViewFieldCollectionCollections extends ViewFieldCollectionPropMethods {

}

/*********************************************
* ViewFieldCollectionQuery
**********************************************/
export interface ViewFieldCollectionQuery extends ViewFieldCollectionProps, ViewFieldCollectionMethods {

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
	getById(id?: any): IBaseQuery<SP.Form>;
	getByPageType(formType?: number): IBaseQuery<SP.Form>;
}

/*********************************************
* IInformationRightsManagementSettings
**********************************************/
export interface IInformationRightsManagementSettings extends InformationRightsManagementSettingsCollections,InformationRightsManagementSettingsMethods,IBaseQuery<IInformationRightsManagementSettingsQuery> {

}

/*********************************************
* IInformationRightsManagementSettingsQuery
**********************************************/
export interface IInformationRightsManagementSettingsQuery extends InformationRightsManagementSettingsQuery, InformationRightsManagementSettingsMethods {

}

/*********************************************
* InformationRightsManagementSettings
**********************************************/
export interface InformationRightsManagementSettings extends InformationRightsManagementSettingsProps, InformationRightsManagementSettingsCollections, InformationRightsManagementSettingsMethods {

}

/*********************************************
* InformationRightsManagementSettingsProps
**********************************************/
export interface InformationRightsManagementSettingsProps {
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
* InformationRightsManagementSettingsPropMethods
**********************************************/
export interface InformationRightsManagementSettingsPropMethods {

}

/*********************************************
* InformationRightsManagementSettingsCollections
**********************************************/
export interface InformationRightsManagementSettingsCollections extends InformationRightsManagementSettingsPropMethods {

}

/*********************************************
* InformationRightsManagementSettingsQuery
**********************************************/
export interface InformationRightsManagementSettingsQuery extends InformationRightsManagementSettingsProps, InformationRightsManagementSettingsMethods {

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
export interface IWebQuery extends WebQuery, WebMethods {

}

/*********************************************
* Web
**********************************************/
export interface Web extends SP.SecurableObject, WebProps, WebCollections, WebMethods {

}

/*********************************************
* WebProps
**********************************************/
export interface WebProps {
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
* WebPropMethods
**********************************************/
export interface WebPropMethods {
	ActivityLogger(): IBaseExecution<Microsoft.SharePoint.Internal.ActivityLogger> & Microsoft.SharePoint.Internal.ActivityLoggerCollections & Microsoft.SharePoint.Internal.ActivityLoggerMethods;
	AllProperties(): IBaseExecution<SP.PropertyValues> & SP.PropertyValuesCollections;
	AssociatedMemberGroup(): IBaseExecution<SP.Group> & SP.GroupCollections & SP.GroupMethods;
	AssociatedOwnerGroup(): IBaseExecution<SP.Group> & SP.GroupCollections & SP.GroupMethods;
	AssociatedVisitorGroup(): IBaseExecution<SP.Group> & SP.GroupCollections & SP.GroupMethods;
	Author(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
	CurrentUser(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
	DataLeakagePreventionStatusInfo(): IBaseExecution<SP.SPDataLeakagePreventionStatusInfo> & SP.SPDataLeakagePreventionStatusInfoCollections;
	DescriptionResource(): IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
	HostedApps(): IBaseExecution<Microsoft.SharePoint.ClientSideComponent.HostedAppsManager> & Microsoft.SharePoint.ClientSideComponent.HostedAppsManagerCollections & Microsoft.SharePoint.ClientSideComponent.HostedAppsManagerMethods;
	Navigation(): IBaseExecution<SP.Navigation> & SP.NavigationCollections & SP.NavigationMethods;
	ParentWeb(): IBaseExecution<SP.WebInformation> & SP.WebInformationCollections;
	RegionalSettings(): IBaseExecution<SP.RegionalSettings> & SP.RegionalSettingsCollections & SP.RegionalSettingsMethods;
	RootFolder(): IBaseExecution<SP.Folder> & SP.FolderCollections & SP.FolderMethods;
	SiteCollectionAppCatalog(): IBaseExecution<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessorCollections & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessorMethods;
	SiteUserInfoList(): IBaseExecution<SP.List> & SP.ListCollections & SP.ListMethods;
	TenantAppCatalog(): IBaseExecution<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessorCollections & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessorMethods;
	ThemeInfo(): IBaseExecution<SP.ThemeInfo> & SP.ThemeInfoCollections & SP.ThemeInfoMethods;
	TitleResource(): IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
}

/*********************************************
* WebCollections
**********************************************/
export interface WebCollections extends WebPropMethods {
	Activities(): IBaseCollection<Microsoft.SharePoint.Activities.SPActivityEntity>;
	Activities(id: string | number): IBaseQuery<Microsoft.SharePoint.Activities.SPActivityEntity> & Microsoft.SharePoint.Activities.SPActivityEntityCollections;
	Alerts(): IBaseCollection<SP.Alert, SP.AlertQuery> & SP.AlertCollectionMethods;
	Alerts(id: string | number): IBaseQuery<SP.Alert, SP.AlertQuery> & SP.AlertCollections & SP.AlertMethods;
	AppTiles(): IBaseCollection<SP.AppTile>;
	AppTiles(id: string | number): IBaseQuery<SP.AppTile> & SP.AppTileCollections;
	AvailableContentTypes(): IBaseCollection<SP.ContentType, SP.ContentTypeQuery> & SP.ContentTypeCollectionMethods;
	AvailableContentTypes(id: string | number): IBaseQuery<SP.ContentType, SP.ContentTypeQuery> & SP.ContentTypeCollections & SP.ContentTypeMethods;
	AvailableFields(): IBaseCollection<SP.Field, SP.FieldQuery> & SP.FieldCollectionMethods;
	AvailableFields(id: string | number): IBaseQuery<SP.Field, SP.FieldQuery> & SP.FieldCollections & SP.FieldMethods;
	ClientWebParts(): IBaseCollection<SP.ClientWebPart> & SP.ClientWebPartCollectionMethods;
	ClientWebParts(id: string | number): IBaseQuery<SP.ClientWebPart> & SP.ClientWebPartCollections & SP.ClientWebPartMethods;
	ContentTypes(): IBaseCollection<SP.ContentType, SP.ContentTypeQuery> & SP.ContentTypeCollectionMethods;
	ContentTypes(id: string | number): IBaseQuery<SP.ContentType, SP.ContentTypeQuery> & SP.ContentTypeCollections & SP.ContentTypeMethods;
	EventReceivers(): IBaseCollection<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollectionMethods;
	EventReceivers(id: string | number): IBaseQuery<SP.EventReceiverDefinition> & SP.EventReceiverDefinitionCollections & SP.EventReceiverDefinitionMethods;
	Features(): IBaseCollection<SP.Feature> & SP.FeatureCollectionMethods;
	Features(id: string | number): IBaseQuery<SP.Feature> & SP.FeatureCollections;
	Fields(): IBaseCollection<SP.Field, SP.FieldQuery> & SP.FieldCollectionMethods;
	Fields(id: string | number): IBaseQuery<SP.Field, SP.FieldQuery> & SP.FieldCollections & SP.FieldMethods;
	Folders(): IBaseCollection<SP.Folder, SP.FolderQuery> & SP.FolderCollectionMethods;
	Folders(id: string | number): IBaseQuery<SP.Folder, SP.FolderQuery> & SP.FolderCollections & SP.FolderMethods;
	Lists(): IBaseCollection<SP.List, SP.ListQuery> & SP.ListCollectionMethods;
	Lists(id: string | number): IBaseQuery<SP.List, SP.ListQuery> & SP.ListCollections & SP.ListMethods;
	ListTemplates(): IBaseCollection<SP.ListTemplate> & SP.ListTemplateCollectionMethods;
	ListTemplates(id: string | number): IBaseQuery<SP.ListTemplate> & SP.ListTemplateCollections & SP.ListTemplateMethods;
	OneDriveSharedItems(): IBaseCollection<SP.Sharing.SharedDocumentInfo>;
	OneDriveSharedItems(id: string | number): IBaseQuery<SP.Sharing.SharedDocumentInfo> & SP.Sharing.SharedDocumentInfoCollections;
	PushNotificationSubscribers(): IBaseCollection<SP.PushNotificationSubscriber, SP.PushNotificationSubscriberQuery> & SP.PushNotificationSubscriberCollectionMethods;
	PushNotificationSubscribers(id: string | number): IBaseQuery<SP.PushNotificationSubscriber, SP.PushNotificationSubscriberQuery> & SP.PushNotificationSubscriberCollections & SP.PushNotificationSubscriberMethods;
	RecycleBin(): IBaseCollection<SP.RecycleBinItem, SP.RecycleBinItemQuery> & SP.RecycleBinItemCollectionMethods;
	RecycleBin(id: string | number): IBaseQuery<SP.RecycleBinItem, SP.RecycleBinItemQuery> & SP.RecycleBinItemCollections & SP.RecycleBinItemMethods;
	RoleDefinitions(): IBaseCollection<SP.RoleDefinition> & SP.RoleDefinitionCollectionMethods;
	RoleDefinitions(id: string | number): IBaseQuery<SP.RoleDefinition> & SP.RoleDefinitionCollections & SP.RoleDefinitionMethods;
	SiteGroups(): IBaseCollection<SP.Group, SP.GroupQuery> & SP.GroupCollectionMethods;
	SiteGroups(id: string | number): IBaseQuery<SP.Group, SP.GroupQuery> & SP.GroupCollections & SP.GroupMethods;
	SiteUsers(): IBaseCollection<SP.User, SP.UserQuery> & SP.UserCollectionMethods;
	SiteUsers(id: string | number): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
	UserCustomActions(): IBaseCollection<SP.UserCustomAction, SP.UserCustomActionQuery> & SP.UserCustomActionCollectionMethods;
	UserCustomActions(id: string | number): IBaseQuery<SP.UserCustomAction, SP.UserCustomActionQuery> & SP.UserCustomActionCollections & SP.UserCustomActionMethods;
	Webs(): IBaseCollection<SP.Web, SP.WebQuery> & SP.WebCollectionMethods;
	Webs(id: string | number): IBaseQuery<SP.Web, SP.WebQuery> & SP.WebCollections & SP.WebMethods;
	WebInfos(): IBaseCollection<SP.WebInformation> & SP.WebInformationCollectionMethods;
	WebInfos(id: string | number): IBaseQuery<SP.WebInformation> & SP.WebInformationCollections;
	WorkflowAssociations(): IBaseCollection<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollectionMethods;
	WorkflowAssociations(id: string | number): IBaseQuery<SP.Workflow.WorkflowAssociation> & SP.Workflow.WorkflowAssociationCollections & SP.Workflow.WorkflowAssociationMethods;
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
export interface WebQuery extends WebProps, WebMethods {
	Activities: IBaseResults<Microsoft.SharePoint.Activities.SPActivityEntity>;
	ActivityLogger: Microsoft.SharePoint.Internal.ActivityLogger & Microsoft.SharePoint.Internal.ActivityLoggerCollections;
	Alerts: IBaseResults<SP.Alert>;
	AllProperties: SP.PropertyValues & SP.PropertyValuesCollections;
	AppTiles: IBaseResults<SP.AppTile>;
	AssociatedMemberGroup: SP.Group & SP.GroupCollections;
	AssociatedOwnerGroup: SP.Group & SP.GroupCollections;
	AssociatedVisitorGroup: SP.Group & SP.GroupCollections;
	Author: SP.User & SP.UserCollections;
	AvailableContentTypes: IBaseResults<SP.ContentType>;
	AvailableFields: IBaseResults<SP.Field>;
	ClientWebParts: IBaseResults<SP.ClientWebPart>;
	ContentTypes: IBaseResults<SP.ContentType>;
	CurrentUser: SP.User & SP.UserCollections;
	DataLeakagePreventionStatusInfo: SP.SPDataLeakagePreventionStatusInfo & SP.SPDataLeakagePreventionStatusInfoCollections;
	DescriptionResource: SP.UserResource & SP.UserResourceCollections;
	EventReceivers: IBaseResults<SP.EventReceiverDefinition>;
	Features: IBaseResults<SP.Feature>;
	Fields: IBaseResults<SP.Field>;
	Folders: IBaseResults<SP.Folder>;
	HostedApps: Microsoft.SharePoint.ClientSideComponent.HostedAppsManager & Microsoft.SharePoint.ClientSideComponent.HostedAppsManagerCollections;
	Lists: IBaseResults<SP.List>;
	ListTemplates: IBaseResults<SP.ListTemplate>;
	Navigation: SP.Navigation & SP.NavigationCollections;
	OneDriveSharedItems: IBaseResults<SP.Sharing.SharedDocumentInfo>;
	ParentWeb: SP.WebInformation & SP.WebInformationCollections;
	PushNotificationSubscribers: IBaseResults<SP.PushNotificationSubscriber>;
	RecycleBin: IBaseResults<SP.RecycleBinItem>;
	RegionalSettings: SP.RegionalSettings & SP.RegionalSettingsCollections;
	RoleDefinitions: IBaseResults<SP.RoleDefinition>;
	RootFolder: SP.Folder & SP.FolderCollections;
	SiteCollectionAppCatalog: Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessor & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionCorporateCatalogAccessorCollections;
	SiteGroups: IBaseResults<SP.Group>;
	SiteUserInfoList: SP.List & SP.ListCollections;
	SiteUsers: IBaseResults<SP.User>;
	TenantAppCatalog: Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessor & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.TenantCorporateCatalogAccessorCollections;
	ThemeInfo: SP.ThemeInfo & SP.ThemeInfoCollections;
	TitleResource: SP.UserResource & SP.UserResourceCollections;
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
	// doesUserHavePermissions(permissionMask?: SP.BasePermissions): IBaseExecution<boolean>;
	ensureUser(logonName?: string): IBaseExecution<SP.User>;
	executeRemoteLOB(inputStream?: any): IBaseExecution<any>;
	getAppBdcCatalog(): IBaseExecution<SP.BusinessData.AppBdcCatalog>;
	getAppBdcCatalogForAppInstance(appInstanceId?: any): IBaseExecution<SP.BusinessData.AppBdcCatalog>;
	getAppInstanceById(appInstanceId?: any): IBaseExecution<SP.AppInstance>;
	getAppInstancesByProductId(productId?: any): IBaseExecution<Array<SP.AppInstance>>;
	getAvailableWebTemplates(lcid?: number, doIncludeCrossLanguage?: boolean): IBaseExecution<Array<SP.WebTemplate>>;
	// getCatalog(typeCatalog?: number): IBaseExecution<SP.List>;
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
	// update(): IBaseExecution<any>;
	doesUserHavePermissions(high?: number, low?: number): IBaseExecution<boolean>;
	getCatalog(listTemplateType?: number): IBaseQuery<SP.List, SP.ListQuery> & SP.ListCollections;
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
export interface IGroupQuery extends GroupQuery, GroupMethods {

}

/*********************************************
* Group
**********************************************/
export interface Group extends SP.Principal, GroupProps, GroupCollections, GroupMethods {

}

/*********************************************
* GroupProps
**********************************************/
export interface GroupProps {
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
* GroupPropMethods
**********************************************/
export interface GroupPropMethods {
	Owner(): IBaseExecution<SP.Principal> & SP.PrincipalCollections;
}

/*********************************************
* GroupCollections
**********************************************/
export interface GroupCollections extends GroupPropMethods {
	Users(): IBaseCollection<SP.User, SP.UserQuery> & SP.UserCollectionMethods;
	Users(id: string | number): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* GroupCollectionMethods
**********************************************/
export interface GroupCollectionMethods {
	getById(id?: number): IBaseQuery<SP.Group, SP.GroupQuery> & SP.GroupCollections;
	getByName(name?: string): IBaseQuery<SP.Group, SP.GroupQuery> & SP.GroupCollections;
	removeById(id?: number): IBaseExecution<any>;
	removeByLoginName(loginName?: string): IBaseExecution<any>;
	add(parameters?: SP.GroupCreationInformation): IBaseExecution<SP.Group>;
}

/*********************************************
* GroupQuery
**********************************************/
export interface GroupQuery extends GroupProps, GroupMethods {
	Owner: SP.Principal & SP.PrincipalCollections;
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
export interface IClientWebPartQuery extends ClientWebPartQuery, ClientWebPartMethods {

}

/*********************************************
* ClientWebPart
**********************************************/
export interface ClientWebPart extends ClientWebPartProps, ClientWebPartCollections, ClientWebPartMethods {

}

/*********************************************
* ClientWebPartProps
**********************************************/
export interface ClientWebPartProps {
	Id?: any;
	Name?: string;
}

/*********************************************
* ClientWebPartPropMethods
**********************************************/
export interface ClientWebPartPropMethods {

}

/*********************************************
* ClientWebPartCollections
**********************************************/
export interface ClientWebPartCollections extends ClientWebPartPropMethods {

}

/*********************************************
* ClientWebPartCollectionMethods
**********************************************/
export interface ClientWebPartCollectionMethods {
	getById(id?: any): IBaseQuery<SP.ClientWebPart>;
}

/*********************************************
* ClientWebPartQuery
**********************************************/
export interface ClientWebPartQuery extends ClientWebPartProps, ClientWebPartMethods {

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
export interface IListTemplateQuery extends ListTemplateQuery, ListTemplateMethods {

}

/*********************************************
* ListTemplate
**********************************************/
export interface ListTemplate extends ListTemplateProps, ListTemplateCollections, ListTemplateMethods {

}

/*********************************************
* ListTemplateProps
**********************************************/
export interface ListTemplateProps {
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
* ListTemplatePropMethods
**********************************************/
export interface ListTemplatePropMethods {

}

/*********************************************
* ListTemplateCollections
**********************************************/
export interface ListTemplateCollections extends ListTemplatePropMethods {

}

/*********************************************
* ListTemplateCollectionMethods
**********************************************/
export interface ListTemplateCollectionMethods {
	getByName(name?: string): IBaseQuery<SP.ListTemplate>;
}

/*********************************************
* ListTemplateQuery
**********************************************/
export interface ListTemplateQuery extends ListTemplateProps, ListTemplateMethods {

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
export interface INavigationQuery extends NavigationQuery, NavigationMethods {

}

/*********************************************
* Navigation
**********************************************/
export interface Navigation extends NavigationProps, NavigationCollections, NavigationMethods {

}

/*********************************************
* NavigationProps
**********************************************/
export interface NavigationProps {
	UseShared?: boolean;
}

/*********************************************
* NavigationPropMethods
**********************************************/
export interface NavigationPropMethods {

}

/*********************************************
* NavigationCollections
**********************************************/
export interface NavigationCollections extends NavigationPropMethods {
	QuickLaunch(): IBaseCollection<SP.NavigationNode, SP.NavigationNodeQuery> & SP.NavigationNodeCollectionMethods;
	QuickLaunch(id: string | number): IBaseQuery<SP.NavigationNode, SP.NavigationNodeQuery> & SP.NavigationNodeCollections & SP.NavigationNodeMethods;
	TopNavigationBar(): IBaseCollection<SP.NavigationNode, SP.NavigationNodeQuery> & SP.NavigationNodeCollectionMethods;
	TopNavigationBar(id: string | number): IBaseQuery<SP.NavigationNode, SP.NavigationNodeQuery> & SP.NavigationNodeCollections & SP.NavigationNodeMethods;
}

/*********************************************
* NavigationQuery
**********************************************/
export interface NavigationQuery extends NavigationProps, NavigationMethods {
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
export interface INavigationNodeQuery extends NavigationNodeQuery, NavigationNodeMethods {

}

/*********************************************
* NavigationNode
**********************************************/
export interface NavigationNode extends NavigationNodeProps, NavigationNodeCollections, NavigationNodeMethods {

}

/*********************************************
* NavigationNodeProps
**********************************************/
export interface NavigationNodeProps {
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
* NavigationNodePropMethods
**********************************************/
export interface NavigationNodePropMethods {

}

/*********************************************
* NavigationNodeCollections
**********************************************/
export interface NavigationNodeCollections extends NavigationNodePropMethods {
	Children(): IBaseCollection<SP.NavigationNode, SP.NavigationNodeQuery> & SP.NavigationNodeCollectionMethods;
	Children(id: string | number): IBaseQuery<SP.NavigationNode, SP.NavigationNodeQuery> & SP.NavigationNodeCollections & SP.NavigationNodeMethods;
}

/*********************************************
* NavigationNodeCollectionMethods
**********************************************/
export interface NavigationNodeCollectionMethods {
	getById(id?: number): IBaseQuery<SP.NavigationNode, SP.NavigationNodeQuery> & SP.NavigationNodeCollections;
	getByIndex(index?: number): IBaseQuery<SP.NavigationNode, SP.NavigationNodeQuery> & SP.NavigationNodeCollections;
	moveAfter(nodeId?: number, previousNodeId?: number): IBaseExecution<any>;
}

/*********************************************
* NavigationNodeQuery
**********************************************/
export interface NavigationNodeQuery extends NavigationNodeProps, NavigationNodeMethods {
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
	getById(id?: any): IBaseQuery<SP.WebInformation>;
}

/*********************************************
* IPushNotificationSubscriber
**********************************************/
export interface IPushNotificationSubscriber extends PushNotificationSubscriberCollections,PushNotificationSubscriberMethods,IBaseQuery<IPushNotificationSubscriberQuery> {

}

/*********************************************
* IPushNotificationSubscriberQuery
**********************************************/
export interface IPushNotificationSubscriberQuery extends PushNotificationSubscriberQuery, PushNotificationSubscriberMethods {

}

/*********************************************
* PushNotificationSubscriber
**********************************************/
export interface PushNotificationSubscriber extends PushNotificationSubscriberProps, PushNotificationSubscriberCollections, PushNotificationSubscriberMethods {

}

/*********************************************
* PushNotificationSubscriberProps
**********************************************/
export interface PushNotificationSubscriberProps {
	CustomArgs?: string;
	DeviceAppInstanceId?: any;
	LastModifiedTimeStamp?: any;
	RegistrationTimeStamp?: any;
	ServiceToken?: string;
	SubscriberType?: string;
}

/*********************************************
* PushNotificationSubscriberPropMethods
**********************************************/
export interface PushNotificationSubscriberPropMethods {
	User(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* PushNotificationSubscriberCollections
**********************************************/
export interface PushNotificationSubscriberCollections extends PushNotificationSubscriberPropMethods {

}

/*********************************************
* PushNotificationSubscriberCollectionMethods
**********************************************/
export interface PushNotificationSubscriberCollectionMethods {
	getByStoreId(id?: string): IBaseQuery<SP.PushNotificationSubscriber, SP.PushNotificationSubscriberQuery> & SP.PushNotificationSubscriberCollections;
}

/*********************************************
* PushNotificationSubscriberQuery
**********************************************/
export interface PushNotificationSubscriberQuery extends PushNotificationSubscriberProps, PushNotificationSubscriberMethods {
	User: SP.User & SP.UserCollections;
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
export interface IRecycleBinItemQuery extends RecycleBinItemQuery, RecycleBinItemMethods {

}

/*********************************************
* RecycleBinItem
**********************************************/
export interface RecycleBinItem extends RecycleBinItemProps, RecycleBinItemCollections, RecycleBinItemMethods {

}

/*********************************************
* RecycleBinItemProps
**********************************************/
export interface RecycleBinItemProps {
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
* RecycleBinItemPropMethods
**********************************************/
export interface RecycleBinItemPropMethods {
	Author(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
	DeletedBy(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* RecycleBinItemCollections
**********************************************/
export interface RecycleBinItemCollections extends RecycleBinItemPropMethods {

}

/*********************************************
* RecycleBinItemCollectionMethods
**********************************************/
export interface RecycleBinItemCollectionMethods {
	deleteAll(): IBaseExecution<any>;
	deleteAllSecondStageItems(): IBaseExecution<any>;
	deleteByIds(ids?: Array<string>): IBaseExecution<any>;
	getById(id?: any): IBaseQuery<SP.RecycleBinItem, SP.RecycleBinItemQuery> & SP.RecycleBinItemCollections;
	moveAllToSecondStage(): IBaseExecution<any>;
	moveToSecondStageByIds(ids?: Array<string>): IBaseExecution<any>;
	restoreAll(): IBaseExecution<any>;
	restoreByIds(ids?: Array<string>): IBaseExecution<any>;
}

/*********************************************
* RecycleBinItemQuery
**********************************************/
export interface RecycleBinItemQuery extends RecycleBinItemProps, RecycleBinItemMethods {
	Author: SP.User & SP.UserCollections;
	DeletedBy: SP.User & SP.UserCollections;
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
export interface IRegionalSettingsQuery extends RegionalSettingsQuery, RegionalSettingsMethods {

}

/*********************************************
* RegionalSettings
**********************************************/
export interface RegionalSettings extends RegionalSettingsProps, RegionalSettingsCollections, RegionalSettingsMethods {

}

/*********************************************
* RegionalSettingsProps
**********************************************/
export interface RegionalSettingsProps {
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
* RegionalSettingsPropMethods
**********************************************/
export interface RegionalSettingsPropMethods {
	InstalledLanguages(): IBaseExecution<SP.LanguageCollection> & SP.LanguageCollectionCollections & SP.LanguageCollectionMethods;
	TimeZone(): IBaseExecution<SP.TimeZone> & SP.TimeZoneCollections & SP.TimeZoneMethods;
}

/*********************************************
* RegionalSettingsCollections
**********************************************/
export interface RegionalSettingsCollections extends RegionalSettingsPropMethods {
	TimeZones(): IBaseCollection<SP.TimeZone> & SP.TimeZoneCollectionMethods;
	TimeZones(id: string | number): IBaseQuery<SP.TimeZone> & SP.TimeZoneCollections & SP.TimeZoneMethods;
}

/*********************************************
* RegionalSettingsQuery
**********************************************/
export interface RegionalSettingsQuery extends RegionalSettingsProps, RegionalSettingsMethods {
	InstalledLanguages: SP.LanguageCollection & SP.LanguageCollectionCollections;
	TimeZone: SP.TimeZone & SP.TimeZoneCollections;
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
export interface ILanguageCollectionQuery extends LanguageCollectionQuery, LanguageCollectionMethods {

}

/*********************************************
* LanguageCollection
**********************************************/
export interface LanguageCollection extends LanguageCollectionProps, LanguageCollectionCollections, LanguageCollectionMethods {

}

/*********************************************
* LanguageCollectionProps
**********************************************/
export interface LanguageCollectionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<SP.Language>;
}

/*********************************************
* LanguageCollectionPropMethods
**********************************************/
export interface LanguageCollectionPropMethods {

}

/*********************************************
* LanguageCollectionCollections
**********************************************/
export interface LanguageCollectionCollections extends LanguageCollectionPropMethods {

}

/*********************************************
* LanguageCollectionQuery
**********************************************/
export interface LanguageCollectionQuery extends LanguageCollectionProps, LanguageCollectionMethods {

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
export interface ITimeZoneQuery extends TimeZoneQuery, TimeZoneMethods {

}

/*********************************************
* TimeZone
**********************************************/
export interface TimeZone extends TimeZoneProps, TimeZoneCollections, TimeZoneMethods {

}

/*********************************************
* TimeZoneProps
**********************************************/
export interface TimeZoneProps {
	Description?: string;
	Id?: number;
	Information?: SP.TimeZoneInformation;
}

/*********************************************
* TimeZonePropMethods
**********************************************/
export interface TimeZonePropMethods {

}

/*********************************************
* TimeZoneCollections
**********************************************/
export interface TimeZoneCollections extends TimeZonePropMethods {

}

/*********************************************
* TimeZoneCollectionMethods
**********************************************/
export interface TimeZoneCollectionMethods {
	getById(id?: number): IBaseQuery<SP.TimeZone>;
}

/*********************************************
* TimeZoneQuery
**********************************************/
export interface TimeZoneQuery extends TimeZoneProps, TimeZoneMethods {

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
export interface IThemeInfoQuery extends ThemeInfoQuery, ThemeInfoMethods {

}

/*********************************************
* ThemeInfo
**********************************************/
export interface ThemeInfo extends ThemeInfoProps, ThemeInfoCollections, ThemeInfoMethods {

}

/*********************************************
* ThemeInfoProps
**********************************************/
export interface ThemeInfoProps {
	AccessibleDescription?: string;
	ThemeBackgroundImageUri?: string;
}

/*********************************************
* ThemeInfoPropMethods
**********************************************/
export interface ThemeInfoPropMethods {

}

/*********************************************
* ThemeInfoCollections
**********************************************/
export interface ThemeInfoCollections extends ThemeInfoPropMethods {

}

/*********************************************
* ThemeInfoQuery
**********************************************/
export interface ThemeInfoQuery extends ThemeInfoProps, ThemeInfoMethods {

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
export interface IUserCustomActionQuery extends UserCustomActionQuery, UserCustomActionMethods {

}

/*********************************************
* UserCustomAction
**********************************************/
export interface UserCustomAction extends UserCustomActionProps, UserCustomActionCollections, UserCustomActionMethods {

}

/*********************************************
* UserCustomActionProps
**********************************************/
export interface UserCustomActionProps {
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
* UserCustomActionPropMethods
**********************************************/
export interface UserCustomActionPropMethods {
	DescriptionResource(): IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
	TitleResource(): IBaseExecution<SP.UserResource> & SP.UserResourceCollections & SP.UserResourceMethods;
}

/*********************************************
* UserCustomActionCollections
**********************************************/
export interface UserCustomActionCollections extends UserCustomActionPropMethods {

}

/*********************************************
* UserCustomActionCollectionMethods
**********************************************/
export interface UserCustomActionCollectionMethods {
	clear(): IBaseExecution<any>;
	getById(id?: any): IBaseQuery<SP.UserCustomAction, SP.UserCustomActionQuery> & SP.UserCustomActionCollections;
	add(properties?: any): IBaseExecution<any>;
}

/*********************************************
* UserCustomActionQuery
**********************************************/
export interface UserCustomActionQuery extends UserCustomActionProps, UserCustomActionMethods {
	DescriptionResource: SP.UserResource & SP.UserResourceCollections;
	TitleResource: SP.UserResource & SP.UserResourceCollections;
}

/*********************************************
* UserCustomActionMethods
**********************************************/
export interface UserCustomActionMethods {
	delete(): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IListItemVersionQuery extends ListItemVersionQuery, ListItemVersionMethods {

}

/*********************************************
* ListItemVersion
**********************************************/
export interface ListItemVersion extends ListItemVersionProps, ListItemVersionCollections, ListItemVersionMethods {

}

/*********************************************
* ListItemVersionProps
**********************************************/
export interface ListItemVersionProps {
	Created?: any;
	IsCurrentVersion?: boolean;
	VersionId?: number;
	VersionLabel?: string;
}

/*********************************************
* ListItemVersionPropMethods
**********************************************/
export interface ListItemVersionPropMethods {
	CreatedBy(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
	FileVersion(): IBaseExecution<SP.FileVersion> & SP.FileVersionCollections & SP.FileVersionMethods;
}

/*********************************************
* ListItemVersionCollections
**********************************************/
export interface ListItemVersionCollections extends ListItemVersionPropMethods {
	Fields(): IBaseCollection<SP.Field, SP.FieldQuery> & SP.FieldCollectionMethods;
	Fields(id: string | number): IBaseQuery<SP.Field, SP.FieldQuery> & SP.FieldCollections & SP.FieldMethods;
}

/*********************************************
* ListItemVersionCollectionMethods
**********************************************/
export interface ListItemVersionCollectionMethods {
	getById(versionId?: number): IBaseQuery<SP.ListItemVersion, SP.ListItemVersionQuery> & SP.ListItemVersionCollections;
}

/*********************************************
* ListItemVersionQuery
**********************************************/
export interface ListItemVersionQuery extends ListItemVersionProps, ListItemVersionMethods {
	CreatedBy: SP.User & SP.UserCollections;
	Fields: IBaseResults<SP.Field>;
	FileVersion: SP.FileVersion & SP.FileVersionCollections;
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
export interface ISPAppLicenseManagerQuery extends SPAppLicenseManagerQuery, SPAppLicenseManagerMethods {

}

/*********************************************
* SPAppLicenseManager
**********************************************/
export interface SPAppLicenseManager extends SPAppLicenseManagerProps, SPAppLicenseManagerCollections, SPAppLicenseManagerMethods {

}

/*********************************************
* SPAppLicenseManagerProps
**********************************************/
export interface SPAppLicenseManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAppLicenseManagerPropMethods
**********************************************/
export interface SPAppLicenseManagerPropMethods {

}

/*********************************************
* SPAppLicenseManagerCollections
**********************************************/
export interface SPAppLicenseManagerCollections extends SPAppLicenseManagerPropMethods {

}

/*********************************************
* SPAppLicenseManagerQuery
**********************************************/
export interface SPAppLicenseManagerQuery extends SPAppLicenseManagerProps, SPAppLicenseManagerMethods {

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
export interface IAppInstanceQuery extends AppInstanceQuery, AppInstanceMethods {

}

/*********************************************
* AppInstance
**********************************************/
export interface AppInstance extends AppInstanceProps, AppInstanceCollections, AppInstanceMethods {

}

/*********************************************
* AppInstanceProps
**********************************************/
export interface AppInstanceProps {
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
* AppInstancePropMethods
**********************************************/
export interface AppInstancePropMethods {

}

/*********************************************
* AppInstanceCollections
**********************************************/
export interface AppInstanceCollections extends AppInstancePropMethods {

}

/*********************************************
* AppInstanceQuery
**********************************************/
export interface AppInstanceQuery extends AppInstanceProps, AppInstanceMethods {

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
export interface IObjectSharingSettingsQuery extends ObjectSharingSettingsQuery, ObjectSharingSettingsMethods {

}

/*********************************************
* ObjectSharingSettings
**********************************************/
export interface ObjectSharingSettings extends ObjectSharingSettingsProps, ObjectSharingSettingsCollections, ObjectSharingSettingsMethods {

}

/*********************************************
* ObjectSharingSettingsProps
**********************************************/
export interface ObjectSharingSettingsProps {
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
* ObjectSharingSettingsPropMethods
**********************************************/
export interface ObjectSharingSettingsPropMethods {
	ObjectSharingInformation(): IBaseExecution<SP.ObjectSharingInformation> & SP.ObjectSharingInformationCollections & SP.ObjectSharingInformationMethods;
	SharePointSettings(): IBaseExecution<SP.SharePointSharingSettings> & SP.SharePointSharingSettingsCollections;
}

/*********************************************
* ObjectSharingSettingsCollections
**********************************************/
export interface ObjectSharingSettingsCollections extends ObjectSharingSettingsPropMethods {
	SharingPermissions(): IBaseCollection<SP.SharingPermissionInformation>;
	SharingPermissions(id: string | number): IBaseQuery<SP.SharingPermissionInformation> & SP.SharingPermissionInformationCollections;
}

/*********************************************
* ObjectSharingSettingsQuery
**********************************************/
export interface ObjectSharingSettingsQuery extends ObjectSharingSettingsProps, ObjectSharingSettingsMethods {
	ObjectSharingInformation: SP.ObjectSharingInformation & SP.ObjectSharingInformationCollections;
	SharePointSettings: SP.SharePointSharingSettings & SP.SharePointSharingSettingsCollections;
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
export interface IObjectSharingInformationQuery extends ObjectSharingInformationQuery, ObjectSharingInformationMethods {

}

/*********************************************
* ObjectSharingInformation
**********************************************/
export interface ObjectSharingInformation extends ObjectSharingInformationProps, ObjectSharingInformationCollections, ObjectSharingInformationMethods {

}

/*********************************************
* ObjectSharingInformationProps
**********************************************/
export interface ObjectSharingInformationProps {
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
* ObjectSharingInformationPropMethods
**********************************************/
export interface ObjectSharingInformationPropMethods {

}

/*********************************************
* ObjectSharingInformationCollections
**********************************************/
export interface ObjectSharingInformationCollections extends ObjectSharingInformationPropMethods {
	SharedWithUsersCollection(): IBaseCollection<SP.ObjectSharingInformationUser, SP.ObjectSharingInformationUserQuery>;
	SharedWithUsersCollection(id: string | number): IBaseQuery<SP.ObjectSharingInformationUser, SP.ObjectSharingInformationUserQuery> & SP.ObjectSharingInformationUserCollections;
}

/*********************************************
* ObjectSharingInformationQuery
**********************************************/
export interface ObjectSharingInformationQuery extends ObjectSharingInformationProps, ObjectSharingInformationMethods {
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
* ObjectSharingInformationUserQuery
**********************************************/
export interface ObjectSharingInformationUserQuery extends ObjectSharingInformationUser {
	Principal: SP.Principal & SP.PrincipalCollections;
	User: SP.User & SP.UserCollections;
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
* SharePointSharingSettingsQuery
**********************************************/
export interface SharePointSharingSettingsQuery extends SharePointSharingSettings {
	PickerProperties: SP.PickerSettings & SP.PickerSettingsCollections;
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
export interface ISharingResultQuery extends SharingResultQuery, SharingResultMethods {

}

/*********************************************
* SharingResult
**********************************************/
export interface SharingResult extends SharingResultProps, SharingResultCollections, SharingResultMethods {

}

/*********************************************
* SharingResultProps
**********************************************/
export interface SharingResultProps {
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
* SharingResultPropMethods
**********************************************/
export interface SharingResultPropMethods {
	GroupUsersAddedTo(): IBaseExecution<SP.Group> & SP.GroupCollections & SP.GroupMethods;
}

/*********************************************
* SharingResultCollections
**********************************************/
export interface SharingResultCollections extends SharingResultPropMethods {
	GroupsSharedWith(): IBaseCollection<SP.Group, SP.GroupQuery> & SP.GroupCollectionMethods;
	GroupsSharedWith(id: string | number): IBaseQuery<SP.Group, SP.GroupQuery> & SP.GroupCollections & SP.GroupMethods;
	UsersWithAccessRequests(): IBaseCollection<SP.User, SP.UserQuery> & SP.UserCollectionMethods;
	UsersWithAccessRequests(id: string | number): IBaseQuery<SP.User, SP.UserQuery> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* SharingResultQuery
**********************************************/
export interface SharingResultQuery extends SharingResultProps, SharingResultMethods {
	GroupsSharedWith: IBaseResults<SP.Group>;
	GroupUsersAddedTo: SP.Group & SP.GroupCollections;
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
* AppContextSiteQuery
**********************************************/
export interface AppContextSiteQuery extends AppContextSite {
	Site: SP.Site & SP.SiteCollections;
	Web: SP.Web & SP.WebCollections;
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
export interface ChangeAlert {
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
export interface ChangeContentType {
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
export interface ChangeField {
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
export interface ChangeFile {
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
export interface ChangeFolder {
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
export interface ChangeGroup {
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
* ChangeItemCollections
**********************************************/
export interface ChangeItemCollections {

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
* ChangeListCollections
**********************************************/
export interface ChangeListCollections {

}

/*********************************************
* ChangeListQuery
**********************************************/
export interface ChangeListQuery extends ChangeList {
	Creator: SP.User & SP.UserCollections;
}

/*********************************************
* ChangeSite
**********************************************/
export interface ChangeSite {

}

/*********************************************
* ChangeSiteCollections
**********************************************/
export interface ChangeSiteCollections {

}

/*********************************************
* ChangeUser
**********************************************/
export interface ChangeUser {
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
export interface ChangeView {
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
export interface ChangeWeb {
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
export interface ICheckedOutFileQuery extends CheckedOutFileQuery, CheckedOutFileMethods {

}

/*********************************************
* CheckedOutFile
**********************************************/
export interface CheckedOutFile extends CheckedOutFileProps, CheckedOutFileCollections, CheckedOutFileMethods {

}

/*********************************************
* CheckedOutFileProps
**********************************************/
export interface CheckedOutFileProps {
	CheckedOutById?: number;
	ServerRelativePath?: SP.ResourcePath;
}

/*********************************************
* CheckedOutFilePropMethods
**********************************************/
export interface CheckedOutFilePropMethods {
	CheckedOutBy(): IBaseExecution<SP.User> & SP.UserCollections & SP.UserMethods;
}

/*********************************************
* CheckedOutFileCollections
**********************************************/
export interface CheckedOutFileCollections extends CheckedOutFilePropMethods {

}

/*********************************************
* CheckedOutFileCollectionMethods
**********************************************/
export interface CheckedOutFileCollectionMethods {
	getByPath(DecodedUrl?: string): IBaseQuery<SP.CheckedOutFile, SP.CheckedOutFileQuery> & SP.CheckedOutFileCollections;
}

/*********************************************
* CheckedOutFileQuery
**********************************************/
export interface CheckedOutFileQuery extends CheckedOutFileProps, CheckedOutFileMethods {
	CheckedOutBy: SP.User & SP.UserCollections;
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
export interface IRequestContextQuery extends RequestContextQuery, RequestContextMethods {

}

/*********************************************
* RequestContext
**********************************************/
export interface RequestContext extends RequestContextProps, RequestContextCollections, RequestContextMethods {

}

/*********************************************
* RequestContextProps
**********************************************/
export interface RequestContextProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* RequestContextPropMethods
**********************************************/
export interface RequestContextPropMethods {
	Current(): IBaseExecution<SP.RequestContext> & SP.RequestContextCollections & SP.RequestContextMethods;
	List(): IBaseExecution<SP.List> & SP.ListCollections & SP.ListMethods;
	Site(): IBaseExecution<SP.Site> & SP.SiteCollections & SP.SiteMethods;
	Web(): IBaseExecution<SP.Web> & SP.WebCollections & SP.WebMethods;
}

/*********************************************
* RequestContextCollections
**********************************************/
export interface RequestContextCollections extends RequestContextPropMethods {

}

/*********************************************
* RequestContextQuery
**********************************************/
export interface RequestContextQuery extends RequestContextProps, RequestContextMethods {
	Current: SP.RequestContext & SP.RequestContextCollections;
	List: SP.List & SP.ListCollections;
	Site: SP.Site & SP.SiteCollections;
	Web: SP.Web & SP.WebCollections;
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
export interface IFieldCalculatedQuery extends FieldCalculatedQuery, FieldCalculatedMethods {

}

/*********************************************
* FieldCalculated
**********************************************/
export interface FieldCalculated extends SP.Field, FieldCalculatedProps, FieldCalculatedCollections, FieldCalculatedMethods {

}

/*********************************************
* FieldCalculatedProps
**********************************************/
export interface FieldCalculatedProps {
	CurrencyLocaleId?: number;
	DateFormat?: number;
	DisplayFormat?: number;
	Formula?: string;
	OutputType?: number;
	ShowAsPercentage?: boolean;
}

/*********************************************
* FieldCalculatedPropMethods
**********************************************/
export interface FieldCalculatedPropMethods {

}

/*********************************************
* FieldCalculatedCollections
**********************************************/
export interface FieldCalculatedCollections extends FieldCalculatedPropMethods {

}

/*********************************************
* FieldCalculatedQuery
**********************************************/
export interface FieldCalculatedQuery extends FieldCalculatedProps, FieldCalculatedMethods {

}

/*********************************************
* FieldCalculatedMethods
**********************************************/
export interface FieldCalculatedMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldMultiChoiceQuery extends FieldMultiChoiceQuery, FieldMultiChoiceMethods {

}

/*********************************************
* FieldMultiChoice
**********************************************/
export interface FieldMultiChoice extends SP.Field, FieldMultiChoiceProps, FieldMultiChoiceCollections, FieldMultiChoiceMethods {

}

/*********************************************
* FieldMultiChoiceProps
**********************************************/
export interface FieldMultiChoiceProps {
	FillInChoice?: boolean;
	Mappings?: string;
	Choices?: Array<string>;
}

/*********************************************
* FieldMultiChoicePropMethods
**********************************************/
export interface FieldMultiChoicePropMethods {

}

/*********************************************
* FieldMultiChoiceCollections
**********************************************/
export interface FieldMultiChoiceCollections extends FieldMultiChoicePropMethods {

}

/*********************************************
* FieldMultiChoiceQuery
**********************************************/
export interface FieldMultiChoiceQuery extends FieldMultiChoiceProps, FieldMultiChoiceMethods {

}

/*********************************************
* FieldMultiChoiceMethods
**********************************************/
export interface FieldMultiChoiceMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldChoiceQuery extends FieldChoiceQuery, FieldChoiceMethods {

}

/*********************************************
* FieldChoice
**********************************************/
export interface FieldChoice extends SP.FieldMultiChoice, FieldChoiceProps, FieldChoiceCollections, FieldChoiceMethods {

}

/*********************************************
* FieldChoiceProps
**********************************************/
export interface FieldChoiceProps {
	EditFormat?: number;
}

/*********************************************
* FieldChoicePropMethods
**********************************************/
export interface FieldChoicePropMethods {

}

/*********************************************
* FieldChoiceCollections
**********************************************/
export interface FieldChoiceCollections extends FieldChoicePropMethods {

}

/*********************************************
* FieldChoiceQuery
**********************************************/
export interface FieldChoiceQuery extends FieldChoiceProps, FieldChoiceMethods {

}

/*********************************************
* FieldChoiceMethods
**********************************************/
export interface FieldChoiceMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldComputedQuery extends FieldComputedQuery, FieldComputedMethods {

}

/*********************************************
* FieldComputed
**********************************************/
export interface FieldComputed extends SP.Field, FieldComputedProps, FieldComputedCollections, FieldComputedMethods {

}

/*********************************************
* FieldComputedProps
**********************************************/
export interface FieldComputedProps {
	EnableLookup?: boolean;
}

/*********************************************
* FieldComputedPropMethods
**********************************************/
export interface FieldComputedPropMethods {

}

/*********************************************
* FieldComputedCollections
**********************************************/
export interface FieldComputedCollections extends FieldComputedPropMethods {

}

/*********************************************
* FieldComputedQuery
**********************************************/
export interface FieldComputedQuery extends FieldComputedProps, FieldComputedMethods {

}

/*********************************************
* FieldComputedMethods
**********************************************/
export interface FieldComputedMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldNumberQuery extends FieldNumberQuery, FieldNumberMethods {

}

/*********************************************
* FieldNumber
**********************************************/
export interface FieldNumber extends SP.Field, FieldNumberProps, FieldNumberCollections, FieldNumberMethods {

}

/*********************************************
* FieldNumberProps
**********************************************/
export interface FieldNumberProps {
	DisplayFormat?: number;
	MaximumValue?: number;
	MinimumValue?: number;
	ShowAsPercentage?: boolean;
}

/*********************************************
* FieldNumberPropMethods
**********************************************/
export interface FieldNumberPropMethods {

}

/*********************************************
* FieldNumberCollections
**********************************************/
export interface FieldNumberCollections extends FieldNumberPropMethods {

}

/*********************************************
* FieldNumberQuery
**********************************************/
export interface FieldNumberQuery extends FieldNumberProps, FieldNumberMethods {

}

/*********************************************
* FieldNumberMethods
**********************************************/
export interface FieldNumberMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldCurrencyQuery extends FieldCurrencyQuery, FieldCurrencyMethods {

}

/*********************************************
* FieldCurrency
**********************************************/
export interface FieldCurrency extends SP.FieldNumber, FieldCurrencyProps, FieldCurrencyCollections, FieldCurrencyMethods {

}

/*********************************************
* FieldCurrencyProps
**********************************************/
export interface FieldCurrencyProps {
	CurrencyLocaleId?: number;
}

/*********************************************
* FieldCurrencyPropMethods
**********************************************/
export interface FieldCurrencyPropMethods {

}

/*********************************************
* FieldCurrencyCollections
**********************************************/
export interface FieldCurrencyCollections extends FieldCurrencyPropMethods {

}

/*********************************************
* FieldCurrencyQuery
**********************************************/
export interface FieldCurrencyQuery extends FieldCurrencyProps, FieldCurrencyMethods {

}

/*********************************************
* FieldCurrencyMethods
**********************************************/
export interface FieldCurrencyMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldDateTimeQuery extends FieldDateTimeQuery, FieldDateTimeMethods {

}

/*********************************************
* FieldDateTime
**********************************************/
export interface FieldDateTime extends SP.Field, FieldDateTimeProps, FieldDateTimeCollections, FieldDateTimeMethods {

}

/*********************************************
* FieldDateTimeProps
**********************************************/
export interface FieldDateTimeProps {
	DateTimeCalendarType?: number;
	DisplayFormat?: number;
	FriendlyDisplayFormat?: number;
}

/*********************************************
* FieldDateTimePropMethods
**********************************************/
export interface FieldDateTimePropMethods {

}

/*********************************************
* FieldDateTimeCollections
**********************************************/
export interface FieldDateTimeCollections extends FieldDateTimePropMethods {

}

/*********************************************
* FieldDateTimeQuery
**********************************************/
export interface FieldDateTimeQuery extends FieldDateTimeProps, FieldDateTimeMethods {

}

/*********************************************
* FieldDateTimeMethods
**********************************************/
export interface FieldDateTimeMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldGeolocationQuery extends FieldGeolocationQuery, FieldGeolocationMethods {

}

/*********************************************
* FieldGeolocation
**********************************************/
export interface FieldGeolocation extends SP.Field, FieldGeolocationProps, FieldGeolocationCollections, FieldGeolocationMethods {

}

/*********************************************
* FieldGeolocationProps
**********************************************/
export interface FieldGeolocationProps {

}

/*********************************************
* FieldGeolocationPropMethods
**********************************************/
export interface FieldGeolocationPropMethods {

}

/*********************************************
* FieldGeolocationCollections
**********************************************/
export interface FieldGeolocationCollections extends FieldGeolocationPropMethods {

}

/*********************************************
* FieldGeolocationQuery
**********************************************/
export interface FieldGeolocationQuery extends FieldGeolocationProps, FieldGeolocationMethods {

}

/*********************************************
* FieldGeolocationMethods
**********************************************/
export interface FieldGeolocationMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldGuidQuery extends FieldGuidQuery, FieldGuidMethods {

}

/*********************************************
* FieldGuid
**********************************************/
export interface FieldGuid extends SP.Field, FieldGuidProps, FieldGuidCollections, FieldGuidMethods {

}

/*********************************************
* FieldGuidProps
**********************************************/
export interface FieldGuidProps {

}

/*********************************************
* FieldGuidPropMethods
**********************************************/
export interface FieldGuidPropMethods {

}

/*********************************************
* FieldGuidCollections
**********************************************/
export interface FieldGuidCollections extends FieldGuidPropMethods {

}

/*********************************************
* FieldGuidQuery
**********************************************/
export interface FieldGuidQuery extends FieldGuidProps, FieldGuidMethods {

}

/*********************************************
* FieldGuidMethods
**********************************************/
export interface FieldGuidMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldMultiLineTextQuery extends FieldMultiLineTextQuery, FieldMultiLineTextMethods {

}

/*********************************************
* FieldMultiLineText
**********************************************/
export interface FieldMultiLineText extends SP.Field, FieldMultiLineTextProps, FieldMultiLineTextCollections, FieldMultiLineTextMethods {

}

/*********************************************
* FieldMultiLineTextProps
**********************************************/
export interface FieldMultiLineTextProps {
	AllowHyperlink?: boolean;
	AppendOnly?: boolean;
	NumberOfLines?: number;
	RestrictedMode?: boolean;
	RichText?: boolean;
	UnlimitedLengthInDocumentLibrary?: boolean;
	WikiLinking?: boolean;
}

/*********************************************
* FieldMultiLineTextPropMethods
**********************************************/
export interface FieldMultiLineTextPropMethods {

}

/*********************************************
* FieldMultiLineTextCollections
**********************************************/
export interface FieldMultiLineTextCollections extends FieldMultiLineTextPropMethods {

}

/*********************************************
* FieldMultiLineTextQuery
**********************************************/
export interface FieldMultiLineTextQuery extends FieldMultiLineTextProps, FieldMultiLineTextMethods {

}

/*********************************************
* FieldMultiLineTextMethods
**********************************************/
export interface FieldMultiLineTextMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldLocationQuery extends FieldLocationQuery, FieldLocationMethods {

}

/*********************************************
* FieldLocation
**********************************************/
export interface FieldLocation extends SP.FieldMultiLineText, FieldLocationProps, FieldLocationCollections, FieldLocationMethods {

}

/*********************************************
* FieldLocationProps
**********************************************/
export interface FieldLocationProps {

}

/*********************************************
* FieldLocationPropMethods
**********************************************/
export interface FieldLocationPropMethods {

}

/*********************************************
* FieldLocationCollections
**********************************************/
export interface FieldLocationCollections extends FieldLocationPropMethods {

}

/*********************************************
* FieldLocationQuery
**********************************************/
export interface FieldLocationQuery extends FieldLocationProps, FieldLocationMethods {

}

/*********************************************
* FieldLocationMethods
**********************************************/
export interface FieldLocationMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldLookupQuery extends FieldLookupQuery, FieldLookupMethods {

}

/*********************************************
* FieldLookup
**********************************************/
export interface FieldLookup extends SP.Field, FieldLookupProps, FieldLookupCollections, FieldLookupMethods {

}

/*********************************************
* FieldLookupProps
**********************************************/
export interface FieldLookupProps {
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
* FieldLookupPropMethods
**********************************************/
export interface FieldLookupPropMethods {

}

/*********************************************
* FieldLookupCollections
**********************************************/
export interface FieldLookupCollections extends FieldLookupPropMethods {

}

/*********************************************
* FieldLookupQuery
**********************************************/
export interface FieldLookupQuery extends FieldLookupProps, FieldLookupMethods {

}

/*********************************************
* FieldLookupMethods
**********************************************/
export interface FieldLookupMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldRatingScaleQuery extends FieldRatingScaleQuery, FieldRatingScaleMethods {

}

/*********************************************
* FieldRatingScale
**********************************************/
export interface FieldRatingScale extends SP.FieldMultiChoice, FieldRatingScaleProps, FieldRatingScaleCollections, FieldRatingScaleMethods {

}

/*********************************************
* FieldRatingScaleProps
**********************************************/
export interface FieldRatingScaleProps {
	GridEndNumber?: number;
	GridNAOptionText?: string;
	GridStartNumber?: number;
	GridTextRangeAverage?: string;
	GridTextRangeHigh?: string;
	GridTextRangeLow?: string;
	RangeCount?: number;
}

/*********************************************
* FieldRatingScalePropMethods
**********************************************/
export interface FieldRatingScalePropMethods {

}

/*********************************************
* FieldRatingScaleCollections
**********************************************/
export interface FieldRatingScaleCollections extends FieldRatingScalePropMethods {

}

/*********************************************
* FieldRatingScaleQuery
**********************************************/
export interface FieldRatingScaleQuery extends FieldRatingScaleProps, FieldRatingScaleMethods {

}

/*********************************************
* FieldRatingScaleMethods
**********************************************/
export interface FieldRatingScaleMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldTextQuery extends FieldTextQuery, FieldTextMethods {

}

/*********************************************
* FieldText
**********************************************/
export interface FieldText extends SP.Field, FieldTextProps, FieldTextCollections, FieldTextMethods {

}

/*********************************************
* FieldTextProps
**********************************************/
export interface FieldTextProps {
	MaxLength?: number;
}

/*********************************************
* FieldTextPropMethods
**********************************************/
export interface FieldTextPropMethods {

}

/*********************************************
* FieldTextCollections
**********************************************/
export interface FieldTextCollections extends FieldTextPropMethods {

}

/*********************************************
* FieldTextQuery
**********************************************/
export interface FieldTextQuery extends FieldTextProps, FieldTextMethods {

}

/*********************************************
* FieldTextMethods
**********************************************/
export interface FieldTextMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldUrlQuery extends FieldUrlQuery, FieldUrlMethods {

}

/*********************************************
* FieldUrl
**********************************************/
export interface FieldUrl extends SP.Field, FieldUrlProps, FieldUrlCollections, FieldUrlMethods {

}

/*********************************************
* FieldUrlProps
**********************************************/
export interface FieldUrlProps {
	DisplayFormat?: number;
}

/*********************************************
* FieldUrlPropMethods
**********************************************/
export interface FieldUrlPropMethods {

}

/*********************************************
* FieldUrlCollections
**********************************************/
export interface FieldUrlCollections extends FieldUrlPropMethods {

}

/*********************************************
* FieldUrlQuery
**********************************************/
export interface FieldUrlQuery extends FieldUrlProps, FieldUrlMethods {

}

/*********************************************
* FieldUrlMethods
**********************************************/
export interface FieldUrlMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IFieldUserQuery extends FieldUserQuery, FieldUserMethods {

}

/*********************************************
* FieldUser
**********************************************/
export interface FieldUser extends SP.FieldLookup, FieldUserProps, FieldUserCollections, FieldUserMethods {

}

/*********************************************
* FieldUserProps
**********************************************/
export interface FieldUserProps {
	AllowDisplay?: boolean;
	Presence?: boolean;
	SelectionGroup?: number;
	SelectionMode?: number;
}

/*********************************************
* FieldUserPropMethods
**********************************************/
export interface FieldUserPropMethods {

}

/*********************************************
* FieldUserCollections
**********************************************/
export interface FieldUserCollections extends FieldUserPropMethods {

}

/*********************************************
* FieldUserQuery
**********************************************/
export interface FieldUserQuery extends FieldUserProps, FieldUserMethods {

}

/*********************************************
* FieldUserMethods
**********************************************/
export interface FieldUserMethods {
	delete(): IBaseExecution<any>;
	setShowInDisplayForm(value?: boolean): IBaseExecution<any>;
	setShowInEditForm(value?: boolean): IBaseExecution<any>;
	setShowInNewForm(value?: boolean): IBaseExecution<any>;
	// update(): IBaseExecution<any>;
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
export interface IHubSiteQuery extends HubSiteQuery, HubSiteMethods {

}

/*********************************************
* HubSite
**********************************************/
export interface HubSite extends HubSiteProps, HubSiteCollections, HubSiteMethods {

}

/*********************************************
* HubSiteProps
**********************************************/
export interface HubSiteProps {
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
* HubSitePropMethods
**********************************************/
export interface HubSitePropMethods {

}

/*********************************************
* HubSiteCollections
**********************************************/
export interface HubSiteCollections extends HubSitePropMethods {

}

/*********************************************
* HubSiteCollectionMethods
**********************************************/
export interface HubSiteCollectionMethods {
	getById(hubSiteId?: any): IBaseQuery<SP.HubSite>;
}

/*********************************************
* HubSiteQuery
**********************************************/
export interface HubSiteQuery extends HubSiteProps, HubSiteMethods {

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
* RelatedFieldQuery
**********************************************/
export interface RelatedFieldQuery extends RelatedField {
	LookupList: SP.List & SP.ListCollections;
}

/*********************************************
* RelatedFieldCollectionMethods
**********************************************/
export interface RelatedFieldCollectionMethods {
	getByFieldId(fieldId?: any): IBaseQuery<SP.RelatedField, SP.RelatedFieldQuery> & SP.RelatedFieldCollections;
}

/*********************************************
* IRemoteWeb
**********************************************/
export interface IRemoteWeb extends RemoteWebCollections,RemoteWebMethods,IBaseQuery<IRemoteWebQuery> {

}

/*********************************************
* IRemoteWebQuery
**********************************************/
export interface IRemoteWebQuery extends RemoteWebQuery, RemoteWebMethods {

}

/*********************************************
* RemoteWeb
**********************************************/
export interface RemoteWeb extends RemoteWebProps, RemoteWebCollections, RemoteWebMethods {

}

/*********************************************
* RemoteWebProps
**********************************************/
export interface RemoteWebProps {
	CanSendEmail?: boolean;
	ShareByEmailEnabled?: boolean;
	ShareByLinkEnabled?: boolean;
}

/*********************************************
* RemoteWebPropMethods
**********************************************/
export interface RemoteWebPropMethods {
	Web(): IBaseExecution<SP.Web> & SP.WebCollections & SP.WebMethods;
}

/*********************************************
* RemoteWebCollections
**********************************************/
export interface RemoteWebCollections extends RemoteWebPropMethods {

}

/*********************************************
* RemoteWebQuery
**********************************************/
export interface RemoteWebQuery extends RemoteWebProps, RemoteWebMethods {
	Web: SP.Web & SP.WebCollections;
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
* RequestUserContextQuery
**********************************************/
export interface RequestUserContextQuery extends RequestUserContext {
	Current: SP.RequestUserContext & SP.RequestUserContextCollections;
	User: SP.User & SP.UserCollections;
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
export interface IVisualizationAppSynchronizationResultQuery extends VisualizationAppSynchronizationResultQuery, VisualizationAppSynchronizationResultMethods {

}

/*********************************************
* VisualizationAppSynchronizationResult
**********************************************/
export interface VisualizationAppSynchronizationResult extends VisualizationAppSynchronizationResultProps, VisualizationAppSynchronizationResultCollections, VisualizationAppSynchronizationResultMethods {

}

/*********************************************
* VisualizationAppSynchronizationResultProps
**********************************************/
export interface VisualizationAppSynchronizationResultProps {
	SynchronizationData?: string;
	SynchronizationStatus?: number;
}

/*********************************************
* VisualizationAppSynchronizationResultPropMethods
**********************************************/
export interface VisualizationAppSynchronizationResultPropMethods {

}

/*********************************************
* VisualizationAppSynchronizationResultCollections
**********************************************/
export interface VisualizationAppSynchronizationResultCollections extends VisualizationAppSynchronizationResultPropMethods {
	AppMappedViews(): IBaseCollection<SP.View, SP.ViewQuery> & SP.ViewCollectionMethods;
	AppMappedViews(id: string | number): IBaseQuery<SP.View, SP.ViewQuery> & SP.ViewCollections & SP.ViewMethods;
}

/*********************************************
* VisualizationAppSynchronizationResultQuery
**********************************************/
export interface VisualizationAppSynchronizationResultQuery extends VisualizationAppSynchronizationResultProps, VisualizationAppSynchronizationResultMethods {
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
	getByName(name?: string): IBaseQuery<SP.WebTemplate>;
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
* TenantSettingsQuery
**********************************************/
export interface TenantSettingsQuery extends TenantSettings {
	Current: SP.TenantSettings & SP.TenantSettingsCollections;
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
* AppPrincipalIdentityProviderQuery
**********************************************/
export interface AppPrincipalIdentityProviderQuery extends AppPrincipalIdentityProvider {
	External: SP.AppPrincipalIdentityProvider & SP.AppPrincipalIdentityProviderCollections;
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
