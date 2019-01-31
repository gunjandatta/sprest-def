import { Microsoft } from "../../../../../";
import { IBaseExecution } from "../../../../../";
import { IBaseCollection } from "../../../../../";

/*********************************************
* AllowedDataLocationEntityData
**********************************************/
export interface AllowedDataLocationEntityData {
	appId?: string;
	domain?: string;
	isDefault?: boolean;
	location?: string;
}

/*********************************************
* IAllowedDataLocation
**********************************************/
export interface IAllowedDataLocation extends AllowedDataLocationProps,AllowedDataLocationMethods,IBaseExecution<AllowedDataLocation> {

}

/*********************************************
* AllowedDataLocation
**********************************************/
export interface AllowedDataLocation extends Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationEntityData, AllowedDataLocationProps, AllowedDataLocationMethods {

}

/*********************************************
* AllowedDataLocationProps
**********************************************/
export interface AllowedDataLocationProps {

}

/*********************************************
* AllowedDataLocationMethods
**********************************************/
export interface AllowedDataLocationMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ContentDbSchemaVersion
**********************************************/
export interface ContentDbSchemaVersion {
	Version?: string;
}

/*********************************************
* JobEntityData
**********************************************/
export interface JobEntityData {
	Option?: number;
	Reserve?: string;
}

/*********************************************
* MoveJobEntityData
**********************************************/
export interface MoveJobEntityData extends Microsoft.Online.SharePoint.MultiGeo.Service.JobEntityData {
	ApiVersion?: string;
	CancelTriggeredBy?: string;
	DestinationDataLocation?: string;
	Direction?: number;
	ErrorMessage?: string;
	FinishedDateInUtc?: any;
	Id?: any;
	JobPhase?: number;
	Notify?: string;
	PreferredMoveBeginDateInUtc?: any;
	PreferredMoveEndDateInUtc?: any;
	SiteId?: any;
	SourceDataLocation?: string;
	State?: number;
	TriggeredBy?: string;
	Type?: number;
}

/*********************************************
* GroupMoveJobEntityData
**********************************************/
export interface GroupMoveJobEntityData extends Microsoft.Online.SharePoint.MultiGeo.Service.MoveJobEntityData {
	GroupName?: string;
}

/*********************************************
* ICrossFarmGroupMoveJob
**********************************************/
export interface ICrossFarmGroupMoveJob extends CrossFarmGroupMoveJobProps,CrossFarmGroupMoveJobMethods,IBaseExecution<CrossFarmGroupMoveJob> {

}

/*********************************************
* CrossFarmGroupMoveJob
**********************************************/
export interface CrossFarmGroupMoveJob extends CrossFarmGroupMoveJobProps, CrossFarmGroupMoveJobMethods {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CrossFarmGroupMoveJobProps
**********************************************/
export interface CrossFarmGroupMoveJobProps {

}

/*********************************************
* CrossFarmGroupMoveJobMethods
**********************************************/
export interface CrossFarmGroupMoveJobMethods {
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* SiteMoveJobEntityData
**********************************************/
export interface SiteMoveJobEntityData extends Microsoft.Online.SharePoint.MultiGeo.Service.MoveJobEntityData {
	SourceSiteUrl?: string;
	TargetSiteUrl?: string;
}

/*********************************************
* CrossFarmSiteMoveJobEntityData
**********************************************/
export interface CrossFarmSiteMoveJobEntityData extends Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobEntityData {
	TextPayload?: string;
	WorkflowData?: string;
}

/*********************************************
* ICrossFarmSiteMoveJob
**********************************************/
export interface ICrossFarmSiteMoveJob extends CrossFarmSiteMoveJobProps,CrossFarmSiteMoveJobMethods,IBaseExecution<CrossFarmSiteMoveJob> {

}

/*********************************************
* CrossFarmSiteMoveJob
**********************************************/
export interface CrossFarmSiteMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobEntityData, CrossFarmSiteMoveJobProps, CrossFarmSiteMoveJobMethods {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CrossFarmSiteMoveJobProps
**********************************************/
export interface CrossFarmSiteMoveJobProps {

}

/*********************************************
* CrossFarmSiteMoveJobMethods
**********************************************/
export interface CrossFarmSiteMoveJobMethods {
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* UserMoveJobEntityData
**********************************************/
export interface UserMoveJobEntityData extends Microsoft.Online.SharePoint.MultiGeo.Service.MoveJobEntityData {
	HasOdbInSourceDataLocation?: boolean;
	UserPrincipalName?: string;
	ValidationResult?: number;
}

/*********************************************
* CrossFarmUserMoveJobEntityData
**********************************************/
export interface CrossFarmUserMoveJobEntityData extends Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobEntityData {
	TextPayload?: string;
	WorkflowData?: string;
}

/*********************************************
* ICrossFarmUserMoveJob
**********************************************/
export interface ICrossFarmUserMoveJob extends CrossFarmUserMoveJobProps,CrossFarmUserMoveJobMethods,IBaseExecution<CrossFarmUserMoveJob> {

}

/*********************************************
* CrossFarmUserMoveJob
**********************************************/
export interface CrossFarmUserMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobEntityData, CrossFarmUserMoveJobProps, CrossFarmUserMoveJobMethods {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CrossFarmUserMoveJobProps
**********************************************/
export interface CrossFarmUserMoveJobProps {

}

/*********************************************
* CrossFarmUserMoveJobMethods
**********************************************/
export interface CrossFarmUserMoveJobMethods {
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* CrossGeoTenantBYOK
**********************************************/
export interface CrossGeoTenantBYOK {
	BYOKEnabled?: boolean;
}

/*********************************************
* CrossGeoTenantCompatibility
**********************************************/
export interface CrossGeoTenantCompatibility {
	AbsCredentialsCount?: number;
	DbExtensionSchemaNames?: Array<string>;
	DbExtensionSchemaVersions?: Array<string>;
	DbSchemaVersion?: string;
}

/*********************************************
* CrossGeoTenantPropertyEntityData
**********************************************/
export interface CrossGeoTenantPropertyEntityData {
	GeoLocation?: string;
	Name?: string;
	Value?: string;
}

/*********************************************
* ICrossGeoTenantProperty
**********************************************/
export interface ICrossGeoTenantProperty extends CrossGeoTenantPropertyProps,CrossGeoTenantPropertyMethods,IBaseExecution<CrossGeoTenantProperty> {

}

/*********************************************
* CrossGeoTenantProperty
**********************************************/
export interface CrossGeoTenantProperty extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyEntityData, CrossGeoTenantPropertyProps, CrossGeoTenantPropertyMethods {
	LastModifiedTimeInUtc?: any;
}

/*********************************************
* CrossGeoTenantPropertyProps
**********************************************/
export interface CrossGeoTenantPropertyProps {

}

/*********************************************
* CrossGeoTenantPropertyMethods
**********************************************/
export interface CrossGeoTenantPropertyMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* DBSchemaCompatibilityCheck
**********************************************/
export interface DBSchemaCompatibilityCheck {
	CompatibilityResult?: string;
}

/*********************************************
* IGeoAdministrator
**********************************************/
export interface IGeoAdministrator extends GeoAdministratorProps,GeoAdministratorMethods,IBaseExecution<GeoAdministrator> {

}

/*********************************************
* GeoAdministrator
**********************************************/
export interface GeoAdministrator extends GeoAdministratorProps, GeoAdministratorMethods {
	DisplayName?: string;
	GeoLocation?: string;
	LoginName?: string;
	MemberType?: number;
	ObjectId?: any;
}

/*********************************************
* GeoAdministratorProps
**********************************************/
export interface GeoAdministratorProps {

}

/*********************************************
* GeoAdministratorMethods
**********************************************/
export interface GeoAdministratorMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IGeoExperience
**********************************************/
export interface IGeoExperience extends GeoExperienceProps,GeoExperienceMethods,IBaseExecution<GeoExperience> {

}

/*********************************************
* GeoExperience
**********************************************/
export interface GeoExperience extends GeoExperienceProps, GeoExperienceMethods {
	GeoLocation?: string;
	MultiGeoExperienceMode?: number;
}

/*********************************************
* GeoExperienceProps
**********************************************/
export interface GeoExperienceProps {

}

/*********************************************
* GeoExperienceMethods
**********************************************/
export interface GeoExperienceMethods {
	upgradeAllInstancesToSPOMode<T=any>(): IBaseExecution<T>;
	upgradeToSPOMode<T=any>(): IBaseExecution<T>;
}

/*********************************************
* GeoMoveTenantCompatibilityCheck
**********************************************/
export interface GeoMoveTenantCompatibilityCheck {
	DestinationDataLocation?: string;
	GeoMoveTenantCompatibilityResult?: number;
	GeoMoveTenantPropertyCompatibilityChecks?: Array<Microsoft.Online.SharePoint.MultiGeo.Service.GeoMoveTenantPropertyCompatibilityCheck>;
	SourceDataLocation?: string;
}

/*********************************************
* GeoTenantInstanceInformationEntityData
**********************************************/
export interface GeoTenantInstanceInformationEntityData {
	GeoLocation?: string;
	InstanceId?: any;
	InstanceState?: number;
	IsCurrentUserGeoAdministrator?: boolean;
	IsDefaultGeoLocation?: boolean;
	MySiteHostDomain?: string;
	OdbCount?: number;
	PortalDomain?: string;
	RegularSiteCount?: number;
	RootSiteDomain?: string;
	TenantAdminDomain?: string;
}

/*********************************************
* GeoTenantInstanceInformation
**********************************************/
export interface GeoTenantInstanceInformation extends Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformationEntityData {

}

/*********************************************
* GlobalAdminCheck
**********************************************/
export interface GlobalAdminCheck {
	IsGlobalAdministrator?: boolean;
}

/*********************************************
* IGroupMoveJob
**********************************************/
export interface IGroupMoveJob extends GroupMoveJobProps,GroupMoveJobMethods,IBaseExecution<GroupMoveJob> {

}

/*********************************************
* GroupMoveJob
**********************************************/
export interface GroupMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobEntityData, GroupMoveJobProps, GroupMoveJobMethods {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* GroupMoveJobProps
**********************************************/
export interface GroupMoveJobProps {

}

/*********************************************
* GroupMoveJobMethods
**********************************************/
export interface GroupMoveJobMethods {
	cancel<T=any>(): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* MoveJob
**********************************************/
export interface MoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.MoveJobEntityData {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* MultiGeoApiVersions
**********************************************/
export interface MultiGeoApiVersions {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	SupportedVersions?: Array<string>;
}

/*********************************************
* IMultiGeoServicesBeta
**********************************************/
export interface IMultiGeoServicesBeta extends MultiGeoServicesBetaProps,MultiGeoServicesBetaMethods,IBaseExecution<MultiGeoServicesBeta> {

}

/*********************************************
* MultiGeoServicesBeta
**********************************************/
export interface MultiGeoServicesBeta extends MultiGeoServicesBetaProps, MultiGeoServicesBetaMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MultiGeoServicesBetaProps
**********************************************/
export interface MultiGeoServicesBetaProps {
	AllowedDataLocations<T=Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation>(): IBaseCollection<T>;
	ContentDbSchemaVersion<T=Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersion>(): IBaseExecution<T>;
	CrossFarmGroupMoveJobs<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob>(): IBaseCollection<T>;
	CrossFarmSiteMoveJobs<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob>(): IBaseCollection<T>;
	CrossFarmUserMoveJobs<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob>(): IBaseCollection<T>;
	CrossGeoTenantBYOK<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOK>(): IBaseExecution<T>;
	CrossGeoTenantCompatibility<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibility>(): IBaseExecution<T>;
	CrossGeoTenantProperties<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>(): IBaseCollection<T>;
	GeoAdministrators<T=Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>(): IBaseCollection<T>;
	GeoExperience<T=Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience>(): IBaseExecution<T>;
	GeoTenantInstanceInformationCollection<T=Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation>(): IBaseCollection<T>;
	GlobalAdminCheck<T=Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheck>(): IBaseExecution<T>;
	GroupMoveJobs<T=Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>(): IBaseCollection<T>;
	SiteMoveJobs<T=Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>(): IBaseCollection<T>;
	SiteRenameJobs<T=Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob>(): IBaseCollection<T>;
	StorageQuotas<T=Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota>(): IBaseCollection<T>;
	TaxonomyReplicationParameters<T=Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters>(): IBaseExecution<T>;
	TenantInformationCollection<T=Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation>(): IBaseCollection<T>;
	UnifiedGroups<T=Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup>(): IBaseCollection<T>;
	UserMoveJobs<T=Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>(): IBaseCollection<T>;
}

/*********************************************
* MultiGeoServicesBetaMethods
**********************************************/
export interface MultiGeoServicesBetaMethods {
	crossGeoCredentials<T=Microsoft.Online.SharePoint.MultiGeo.Service.GeoCredentials>(siteId?: any): IBaseExecution<T>;
	dBSchemaCompatibilityCheck<T=Microsoft.Online.SharePoint.MultiGeo.Service.DBSchemaCompatibilityCheck>(): IBaseExecution<T>;
	geoMoveCompatibilityChecks<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.GeoMoveTenantCompatibilityCheck>>(): IBaseExecution<T>;
	userPersonalSiteId<T=Microsoft.Online.SharePoint.MultiGeo.Service.UserPersonalSiteId>(userPrincipalName?: string): IBaseExecution<T>;
	userPersonalSiteLocation<T=Microsoft.Online.SharePoint.MultiGeo.Service.UserPersonalSiteLocation>(userPrincipalName?: string): IBaseExecution<T>;
}

/*********************************************
* ISiteMoveJob
**********************************************/
export interface ISiteMoveJob extends SiteMoveJobProps,SiteMoveJobMethods,IBaseExecution<SiteMoveJob> {

}

/*********************************************
* SiteMoveJob
**********************************************/
export interface SiteMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobEntityData, SiteMoveJobProps, SiteMoveJobMethods {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* SiteMoveJobProps
**********************************************/
export interface SiteMoveJobProps {

}

/*********************************************
* SiteMoveJobMethods
**********************************************/
export interface SiteMoveJobMethods {
	cancel<T=any>(): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* SiteRenameJobEntityData
**********************************************/
export interface SiteRenameJobEntityData extends Microsoft.Online.SharePoint.MultiGeo.Service.JobEntityData {
	SourceSiteUrl?: string;
	TargetSiteTitle?: string;
	TargetSiteUrl?: string;
}

/*********************************************
* SiteRenameJob
**********************************************/
export interface SiteRenameJob extends Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJobEntityData {
	JobId?: any;
	JobState?: string;
	SiteId?: any;
	TriggeredBy?: string;
}

/*********************************************
* IStorageQuota
**********************************************/
export interface IStorageQuota extends StorageQuotaProps,StorageQuotaMethods,IBaseExecution<StorageQuota> {

}

/*********************************************
* StorageQuota
**********************************************/
export interface StorageQuota extends StorageQuotaProps, StorageQuotaMethods {
	GeoAllocatedStorageMB?: number;
	GeoAvailableStorageMB?: number;
	GeoLocation?: string;
	GeoUsedStorageMB?: number;
	QuotaType?: number;
	TenantStorageMB?: number;
}

/*********************************************
* StorageQuotaProps
**********************************************/
export interface StorageQuotaProps {

}

/*********************************************
* StorageQuotaMethods
**********************************************/
export interface StorageQuotaMethods {
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ITaxonomyReplicationParameters
**********************************************/
export interface ITaxonomyReplicationParameters extends TaxonomyReplicationParametersProps,TaxonomyReplicationParametersMethods,IBaseExecution<TaxonomyReplicationParameters> {

}

/*********************************************
* TaxonomyReplicationParameters
**********************************************/
export interface TaxonomyReplicationParameters extends TaxonomyReplicationParametersProps, TaxonomyReplicationParametersMethods {
	IsReplicateAllContentTypes?: boolean;
	IsReplicateAllGroups?: boolean;
	ReplicatedContentTypes?: Array<string>;
	ReplicatedGroups?: Array<string>;
}

/*********************************************
* TaxonomyReplicationParametersProps
**********************************************/
export interface TaxonomyReplicationParametersProps {

}

/*********************************************
* TaxonomyReplicationParametersMethods
**********************************************/
export interface TaxonomyReplicationParametersMethods {
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* TenantInformation
**********************************************/
export interface TenantInformation {
	GeoLocation?: string;
	MySiteHostDomain?: string;
	PortalDomain?: string;
	RootSiteDomain?: string;
	TenantAdminDomain?: string;
}

/*********************************************
* UnifiedGroup
**********************************************/
export interface UnifiedGroup {
	DisplayName?: string;
	GroupAlias?: string;
	Mail?: string;
	ObjectId?: any;
	PreferredDataLocation?: string;
	SiteUrl?: string;
}

/*********************************************
* IUserMoveJob
**********************************************/
export interface IUserMoveJob extends UserMoveJobProps,UserMoveJobMethods,IBaseExecution<UserMoveJob> {

}

/*********************************************
* UserMoveJob
**********************************************/
export interface UserMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobEntityData, UserMoveJobProps, UserMoveJobMethods {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* UserMoveJobProps
**********************************************/
export interface UserMoveJobProps {

}

/*********************************************
* UserMoveJobMethods
**********************************************/
export interface UserMoveJobMethods {
	cancel<T=any>(): IBaseExecution<T>;
	deleteObject<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* StorageQuotaEntityData
**********************************************/
export interface StorageQuotaEntityData {
	GeoAllocatedStorageMB?: string;
	GeoAvailableStorageMB?: string;
	GeoLocation?: string;
	GeoUsedStorageMB?: string;
	QuotaType?: number;
	TenantStorageMB?: string;
}

/*********************************************
* UserPersonalSiteId
**********************************************/
export interface UserPersonalSiteId {
	MySiteUrl?: string;
	SiteId?: any;
	UserPrincipalName?: string;
}

/*********************************************
* UserPersonalSiteLocation
**********************************************/
export interface UserPersonalSiteLocation {
	Location?: string;
	MySiteUrl?: string;
	SiteId?: any;
	UserPrincipalName?: string;
}

/*********************************************
* ICrossFarmGroupMoveJobCollection
**********************************************/
export interface ICrossFarmGroupMoveJobCollection extends CrossFarmGroupMoveJobCollectionProps,CrossFarmGroupMoveJobCollectionMethods,IBaseExecution<CrossFarmGroupMoveJobCollection> {

}

/*********************************************
* CrossFarmGroupMoveJobCollection
**********************************************/
export interface CrossFarmGroupMoveJobCollection extends CrossFarmGroupMoveJobCollectionProps, CrossFarmGroupMoveJobCollectionMethods {

}

/*********************************************
* CrossFarmGroupMoveJobCollectionProps
**********************************************/
export interface CrossFarmGroupMoveJobCollectionProps {

}

/*********************************************
* CrossFarmGroupMoveJobCollectionMethods
**********************************************/
export interface CrossFarmGroupMoveJobCollectionMethods {
	getByMoveId<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob>(moveId?: any): IBaseExecution<T>;
}

/*********************************************
* ICrossFarmSiteMoveJobCollection
**********************************************/
export interface ICrossFarmSiteMoveJobCollection extends CrossFarmSiteMoveJobCollectionProps,CrossFarmSiteMoveJobCollectionMethods,IBaseExecution<CrossFarmSiteMoveJobCollection> {

}

/*********************************************
* CrossFarmSiteMoveJobCollection
**********************************************/
export interface CrossFarmSiteMoveJobCollection extends CrossFarmSiteMoveJobCollectionProps, CrossFarmSiteMoveJobCollectionMethods {

}

/*********************************************
* CrossFarmSiteMoveJobCollectionProps
**********************************************/
export interface CrossFarmSiteMoveJobCollectionProps {

}

/*********************************************
* CrossFarmSiteMoveJobCollectionMethods
**********************************************/
export interface CrossFarmSiteMoveJobCollectionMethods {
	getByMoveId<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob>(moveId?: any): IBaseExecution<T>;
}

/*********************************************
* ICrossFarmUserMoveJobCollection
**********************************************/
export interface ICrossFarmUserMoveJobCollection extends CrossFarmUserMoveJobCollectionProps,CrossFarmUserMoveJobCollectionMethods,IBaseExecution<CrossFarmUserMoveJobCollection> {

}

/*********************************************
* CrossFarmUserMoveJobCollection
**********************************************/
export interface CrossFarmUserMoveJobCollection extends CrossFarmUserMoveJobCollectionProps, CrossFarmUserMoveJobCollectionMethods {

}

/*********************************************
* CrossFarmUserMoveJobCollectionProps
**********************************************/
export interface CrossFarmUserMoveJobCollectionProps {

}

/*********************************************
* CrossFarmUserMoveJobCollectionMethods
**********************************************/
export interface CrossFarmUserMoveJobCollectionMethods {
	getByMoveId<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob>(moveId?: any): IBaseExecution<T>;
}

/*********************************************
* ICrossGeoTenantPropertyCollection
**********************************************/
export interface ICrossGeoTenantPropertyCollection extends CrossGeoTenantPropertyCollectionProps,CrossGeoTenantPropertyCollectionMethods,IBaseExecution<CrossGeoTenantPropertyCollection> {

}

/*********************************************
* CrossGeoTenantPropertyCollection
**********************************************/
export interface CrossGeoTenantPropertyCollection extends CrossGeoTenantPropertyCollectionProps, CrossGeoTenantPropertyCollectionMethods {

}

/*********************************************
* CrossGeoTenantPropertyCollectionProps
**********************************************/
export interface CrossGeoTenantPropertyCollectionProps {

}

/*********************************************
* CrossGeoTenantPropertyCollectionMethods
**********************************************/
export interface CrossGeoTenantPropertyCollectionMethods {
	getByPropertyNameAndGeoLocation<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>(propertyName?: string, geo?: string): IBaseExecution<T>;
	getChanges<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>>(startTimeInUtc?: any): IBaseExecution<T>;
}

/*********************************************
* IGeoAdministratorCollection
**********************************************/
export interface IGeoAdministratorCollection extends GeoAdministratorCollectionProps,GeoAdministratorCollectionMethods,IBaseExecution<GeoAdministratorCollection> {

}

/*********************************************
* GeoAdministratorCollection
**********************************************/
export interface GeoAdministratorCollection extends GeoAdministratorCollectionProps, GeoAdministratorCollectionMethods {

}

/*********************************************
* GeoAdministratorCollectionProps
**********************************************/
export interface GeoAdministratorCollectionProps {

}

/*********************************************
* GeoAdministratorCollectionMethods
**********************************************/
export interface GeoAdministratorCollectionMethods {
	create<T=Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>(parameters?: Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorEntityData): IBaseExecution<T>;
	getByLoginName<T=Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>(loginName?: string): IBaseExecution<T>;
	getByLoginNameAndType<T=Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>(loginName?: string, memberType?: number): IBaseExecution<T>;
	getByObjectId<T=Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>(objectId?: any): IBaseExecution<T>;
}

/*********************************************
* IGroupMoveJobCollection
**********************************************/
export interface IGroupMoveJobCollection extends GroupMoveJobCollectionProps,GroupMoveJobCollectionMethods,IBaseExecution<GroupMoveJobCollection> {

}

/*********************************************
* GroupMoveJobCollection
**********************************************/
export interface GroupMoveJobCollection extends GroupMoveJobCollectionProps, GroupMoveJobCollectionMethods {

}

/*********************************************
* GroupMoveJobCollectionProps
**********************************************/
export interface GroupMoveJobCollectionProps {

}

/*********************************************
* GroupMoveJobCollectionMethods
**********************************************/
export interface GroupMoveJobCollectionMethods {
	getByGroupName<T=Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>(groupname?: string): IBaseExecution<T>;
	getMoveReport<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>>(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): IBaseExecution<T>;
}

/*********************************************
* ISiteMoveJobCollection
**********************************************/
export interface ISiteMoveJobCollection extends SiteMoveJobCollectionProps,SiteMoveJobCollectionMethods,IBaseExecution<SiteMoveJobCollection> {

}

/*********************************************
* SiteMoveJobCollection
**********************************************/
export interface SiteMoveJobCollection extends SiteMoveJobCollectionProps, SiteMoveJobCollectionMethods {

}

/*********************************************
* SiteMoveJobCollectionProps
**********************************************/
export interface SiteMoveJobCollectionProps {

}

/*********************************************
* SiteMoveJobCollectionMethods
**********************************************/
export interface SiteMoveJobCollectionMethods {
	getByUrl<T=Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>(url?: string): IBaseExecution<T>;
	getMoveReport<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>>(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): IBaseExecution<T>;
}

/*********************************************
* ISiteRenameJobCollection
**********************************************/
export interface ISiteRenameJobCollection extends SiteRenameJobCollectionProps,SiteRenameJobCollectionMethods,IBaseExecution<SiteRenameJobCollection> {

}

/*********************************************
* SiteRenameJobCollection
**********************************************/
export interface SiteRenameJobCollection extends SiteRenameJobCollectionProps, SiteRenameJobCollectionMethods {

}

/*********************************************
* SiteRenameJobCollectionProps
**********************************************/
export interface SiteRenameJobCollectionProps {

}

/*********************************************
* SiteRenameJobCollectionMethods
**********************************************/
export interface SiteRenameJobCollectionMethods {
	getBySiteUrl<T=Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob>(siteUrl?: string): IBaseExecution<T>;
}

/*********************************************
* IStorageQuotaCollection
**********************************************/
export interface IStorageQuotaCollection extends StorageQuotaCollectionProps,StorageQuotaCollectionMethods,IBaseExecution<StorageQuotaCollection> {

}

/*********************************************
* StorageQuotaCollection
**********************************************/
export interface StorageQuotaCollection extends StorageQuotaCollectionProps, StorageQuotaCollectionMethods {

}

/*********************************************
* StorageQuotaCollectionProps
**********************************************/
export interface StorageQuotaCollectionProps {

}

/*********************************************
* StorageQuotaCollectionMethods
**********************************************/
export interface StorageQuotaCollectionMethods {
	getByLocation<T=Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota>(geoLocation?: string): IBaseExecution<T>;
}

/*********************************************
* IUnifiedGroupCollection
**********************************************/
export interface IUnifiedGroupCollection extends UnifiedGroupCollectionProps,UnifiedGroupCollectionMethods,IBaseExecution<UnifiedGroupCollection> {

}

/*********************************************
* UnifiedGroupCollection
**********************************************/
export interface UnifiedGroupCollection extends UnifiedGroupCollectionProps, UnifiedGroupCollectionMethods {

}

/*********************************************
* UnifiedGroupCollectionProps
**********************************************/
export interface UnifiedGroupCollectionProps {

}

/*********************************************
* UnifiedGroupCollectionMethods
**********************************************/
export interface UnifiedGroupCollectionMethods {
	getByAlias<T=Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup>(alias?: string): IBaseExecution<T>;
}

/*********************************************
* IUserMoveJobCollection
**********************************************/
export interface IUserMoveJobCollection extends UserMoveJobCollectionProps,UserMoveJobCollectionMethods,IBaseExecution<UserMoveJobCollection> {

}

/*********************************************
* UserMoveJobCollection
**********************************************/
export interface UserMoveJobCollection extends UserMoveJobCollectionProps, UserMoveJobCollectionMethods {

}

/*********************************************
* UserMoveJobCollectionProps
**********************************************/
export interface UserMoveJobCollectionProps {

}

/*********************************************
* UserMoveJobCollectionMethods
**********************************************/
export interface UserMoveJobCollectionMethods {
	getByDirection<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>(direction?: string): IBaseExecution<T>;
	getByMoveId<T=Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>(odbMoveId?: any): IBaseExecution<T>;
	getByUpn<T=Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>(upn?: string): IBaseExecution<T>;
	getByValidPdl<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>(validPdl?: boolean): IBaseExecution<T>;
	getMoveReport<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): IBaseExecution<T>;
}
