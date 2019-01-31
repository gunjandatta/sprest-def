import { IBaseExecution } from "../../../../../";
import { Microsoft } from "../../../../../";
import { IBaseQuery } from "../../../../../";
import { IBaseCollection } from "../../../../../";
import { IBaseResults } from "../../../../../";

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
export interface IAllowedDataLocation extends AllowedDataLocationCollections,AllowedDataLocationMethods,IBaseQuery<IAllowedDataLocationQuery> {

}

/*********************************************
* IAllowedDataLocationQuery
**********************************************/
export interface IAllowedDataLocationQuery extends AllowedDataLocationQuery,AllowedDataLocationMethods {

}

/*********************************************
* AllowedDataLocation
**********************************************/
export interface AllowedDataLocation extends Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationEntityData, AllowedDataLocationCollections, AllowedDataLocationMethods {

}

/*********************************************
* AllowedDataLocationProps
**********************************************/
export interface AllowedDataLocationProps {

}

/*********************************************
* AllowedDataLocationCollections
**********************************************/
export interface AllowedDataLocationCollections extends AllowedDataLocationProps {

}

/*********************************************
* AllowedDataLocationQuery
**********************************************/
export interface AllowedDataLocationQuery extends AllowedDataLocationProps {

}

/*********************************************
* AllowedDataLocationMethods
**********************************************/
export interface AllowedDataLocationMethods {
	deleteObject(): IBaseExecution<any>;
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
export interface ICrossFarmGroupMoveJob extends CrossFarmGroupMoveJobCollections,CrossFarmGroupMoveJobMethods,IBaseQuery<ICrossFarmGroupMoveJobQuery> {

}

/*********************************************
* ICrossFarmGroupMoveJobQuery
**********************************************/
export interface ICrossFarmGroupMoveJobQuery extends CrossFarmGroupMoveJobQuery,CrossFarmGroupMoveJobMethods {

}

/*********************************************
* CrossFarmGroupMoveJob
**********************************************/
export interface CrossFarmGroupMoveJob extends CrossFarmGroupMoveJobCollections, CrossFarmGroupMoveJobMethods {
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
* CrossFarmGroupMoveJobCollections
**********************************************/
export interface CrossFarmGroupMoveJobCollections extends CrossFarmGroupMoveJobProps {

}

/*********************************************
* CrossFarmGroupMoveJobQuery
**********************************************/
export interface CrossFarmGroupMoveJobQuery extends CrossFarmGroupMoveJobProps {

}

/*********************************************
* CrossFarmGroupMoveJobMethods
**********************************************/
export interface CrossFarmGroupMoveJobMethods {
	update(): IBaseExecution<any>;
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
export interface ICrossFarmSiteMoveJob extends CrossFarmSiteMoveJobCollections,CrossFarmSiteMoveJobMethods,IBaseQuery<ICrossFarmSiteMoveJobQuery> {

}

/*********************************************
* ICrossFarmSiteMoveJobQuery
**********************************************/
export interface ICrossFarmSiteMoveJobQuery extends CrossFarmSiteMoveJobQuery,CrossFarmSiteMoveJobMethods {

}

/*********************************************
* CrossFarmSiteMoveJob
**********************************************/
export interface CrossFarmSiteMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobEntityData, CrossFarmSiteMoveJobCollections, CrossFarmSiteMoveJobMethods {
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
* CrossFarmSiteMoveJobCollections
**********************************************/
export interface CrossFarmSiteMoveJobCollections extends CrossFarmSiteMoveJobProps {

}

/*********************************************
* CrossFarmSiteMoveJobQuery
**********************************************/
export interface CrossFarmSiteMoveJobQuery extends CrossFarmSiteMoveJobProps {

}

/*********************************************
* CrossFarmSiteMoveJobMethods
**********************************************/
export interface CrossFarmSiteMoveJobMethods {
	update(): IBaseExecution<any>;
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
export interface ICrossFarmUserMoveJob extends CrossFarmUserMoveJobCollections,CrossFarmUserMoveJobMethods,IBaseQuery<ICrossFarmUserMoveJobQuery> {

}

/*********************************************
* ICrossFarmUserMoveJobQuery
**********************************************/
export interface ICrossFarmUserMoveJobQuery extends CrossFarmUserMoveJobQuery,CrossFarmUserMoveJobMethods {

}

/*********************************************
* CrossFarmUserMoveJob
**********************************************/
export interface CrossFarmUserMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobEntityData, CrossFarmUserMoveJobCollections, CrossFarmUserMoveJobMethods {
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
* CrossFarmUserMoveJobCollections
**********************************************/
export interface CrossFarmUserMoveJobCollections extends CrossFarmUserMoveJobProps {

}

/*********************************************
* CrossFarmUserMoveJobQuery
**********************************************/
export interface CrossFarmUserMoveJobQuery extends CrossFarmUserMoveJobProps {

}

/*********************************************
* CrossFarmUserMoveJobMethods
**********************************************/
export interface CrossFarmUserMoveJobMethods {
	update(): IBaseExecution<any>;
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
export interface ICrossGeoTenantProperty extends CrossGeoTenantPropertyCollections,CrossGeoTenantPropertyMethods,IBaseQuery<ICrossGeoTenantPropertyQuery> {

}

/*********************************************
* ICrossGeoTenantPropertyQuery
**********************************************/
export interface ICrossGeoTenantPropertyQuery extends CrossGeoTenantPropertyQuery,CrossGeoTenantPropertyMethods {

}

/*********************************************
* CrossGeoTenantProperty
**********************************************/
export interface CrossGeoTenantProperty extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyEntityData, CrossGeoTenantPropertyCollections, CrossGeoTenantPropertyMethods {
	LastModifiedTimeInUtc?: any;
}

/*********************************************
* CrossGeoTenantPropertyProps
**********************************************/
export interface CrossGeoTenantPropertyProps {

}

/*********************************************
* CrossGeoTenantPropertyCollections
**********************************************/
export interface CrossGeoTenantPropertyCollections extends CrossGeoTenantPropertyProps {

}

/*********************************************
* CrossGeoTenantPropertyQuery
**********************************************/
export interface CrossGeoTenantPropertyQuery extends CrossGeoTenantPropertyProps {

}

/*********************************************
* CrossGeoTenantPropertyMethods
**********************************************/
export interface CrossGeoTenantPropertyMethods {
	deleteObject(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
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
export interface IGeoAdministrator extends GeoAdministratorCollections,GeoAdministratorMethods,IBaseQuery<IGeoAdministratorQuery> {

}

/*********************************************
* IGeoAdministratorQuery
**********************************************/
export interface IGeoAdministratorQuery extends GeoAdministratorQuery,GeoAdministratorMethods {

}

/*********************************************
* GeoAdministrator
**********************************************/
export interface GeoAdministrator extends GeoAdministratorCollections, GeoAdministratorMethods {
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
* GeoAdministratorCollections
**********************************************/
export interface GeoAdministratorCollections extends GeoAdministratorProps {

}

/*********************************************
* GeoAdministratorQuery
**********************************************/
export interface GeoAdministratorQuery extends GeoAdministratorProps {

}

/*********************************************
* GeoAdministratorMethods
**********************************************/
export interface GeoAdministratorMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* IGeoExperience
**********************************************/
export interface IGeoExperience extends GeoExperienceCollections,GeoExperienceMethods,IBaseQuery<IGeoExperienceQuery> {

}

/*********************************************
* IGeoExperienceQuery
**********************************************/
export interface IGeoExperienceQuery extends GeoExperienceQuery,GeoExperienceMethods {

}

/*********************************************
* GeoExperience
**********************************************/
export interface GeoExperience extends GeoExperienceCollections, GeoExperienceMethods {
	GeoLocation?: string;
	MultiGeoExperienceMode?: number;
}

/*********************************************
* GeoExperienceProps
**********************************************/
export interface GeoExperienceProps {

}

/*********************************************
* GeoExperienceCollections
**********************************************/
export interface GeoExperienceCollections extends GeoExperienceProps {

}

/*********************************************
* GeoExperienceQuery
**********************************************/
export interface GeoExperienceQuery extends GeoExperienceProps {

}

/*********************************************
* GeoExperienceMethods
**********************************************/
export interface GeoExperienceMethods {
	upgradeAllInstancesToSPOMode(): IBaseExecution<any>;
	upgradeToSPOMode(): IBaseExecution<any>;
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
export interface IGroupMoveJob extends GroupMoveJobCollections,GroupMoveJobMethods,IBaseQuery<IGroupMoveJobQuery> {

}

/*********************************************
* IGroupMoveJobQuery
**********************************************/
export interface IGroupMoveJobQuery extends GroupMoveJobQuery,GroupMoveJobMethods {

}

/*********************************************
* GroupMoveJob
**********************************************/
export interface GroupMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobEntityData, GroupMoveJobCollections, GroupMoveJobMethods {
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
* GroupMoveJobCollections
**********************************************/
export interface GroupMoveJobCollections extends GroupMoveJobProps {

}

/*********************************************
* GroupMoveJobQuery
**********************************************/
export interface GroupMoveJobQuery extends GroupMoveJobProps {

}

/*********************************************
* GroupMoveJobMethods
**********************************************/
export interface GroupMoveJobMethods {
	cancel(): IBaseExecution<any>;
	deleteObject(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
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
export interface IMultiGeoServicesBeta extends MultiGeoServicesBetaCollections,MultiGeoServicesBetaMethods,IBaseQuery<IMultiGeoServicesBetaQuery> {

}

/*********************************************
* IMultiGeoServicesBetaQuery
**********************************************/
export interface IMultiGeoServicesBetaQuery extends MultiGeoServicesBetaQuery,MultiGeoServicesBetaMethods {

}

/*********************************************
* MultiGeoServicesBeta
**********************************************/
export interface MultiGeoServicesBeta extends MultiGeoServicesBetaCollections, MultiGeoServicesBetaMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MultiGeoServicesBetaProps
**********************************************/
export interface MultiGeoServicesBetaProps {
	ContentDbSchemaVersion(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersion>;
	CrossGeoTenantBYOK(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOK>;
	CrossGeoTenantCompatibility(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibility>;
	GeoExperience(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience>;
	GlobalAdminCheck(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheck>;
	TaxonomyReplicationParameters(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters>;
}

/*********************************************
* MultiGeoServicesBetaCollections
**********************************************/
export interface MultiGeoServicesBetaCollections extends MultiGeoServicesBetaProps {
	AllowedDataLocations(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation>;
	AllowedDataLocations(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation>;
	CrossFarmGroupMoveJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob>;
	CrossFarmGroupMoveJobs(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob>;
	CrossFarmSiteMoveJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob>;
	CrossFarmSiteMoveJobs(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob>;
	CrossFarmUserMoveJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob>;
	CrossFarmUserMoveJobs(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob>;
	CrossGeoTenantProperties(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>;
	CrossGeoTenantProperties(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>;
	GeoAdministrators(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>;
	GeoAdministrators(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>;
	GeoTenantInstanceInformationCollection(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation>;
	GeoTenantInstanceInformationCollection(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation>;
	GroupMoveJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>;
	GroupMoveJobs(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>;
	SiteMoveJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>;
	SiteMoveJobs(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>;
	SiteRenameJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob>;
	SiteRenameJobs(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob>;
	StorageQuotas(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota>;
	StorageQuotas(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota>;
	TenantInformationCollection(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation>;
	TenantInformationCollection(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation>;
	UnifiedGroups(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup>;
	UnifiedGroups(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup>;
	UserMoveJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>;
	UserMoveJobs(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>;
}

/*********************************************
* MultiGeoServicesBetaQuery
**********************************************/
export interface MultiGeoServicesBetaQuery extends MultiGeoServicesBetaProps {
	AllowedDataLocations: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation>;
	CrossFarmGroupMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob>;
	CrossFarmSiteMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob>;
	CrossFarmUserMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob>;
	CrossGeoTenantProperties: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>;
	GeoAdministrators: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>;
	GeoTenantInstanceInformationCollection: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation>;
	GroupMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>;
	SiteMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>;
	SiteRenameJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob>;
	StorageQuotas: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota>;
	TenantInformationCollection: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation>;
	UnifiedGroups: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup>;
	UserMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>;
}

/*********************************************
* MultiGeoServicesBetaMethods
**********************************************/
export interface MultiGeoServicesBetaMethods {
	crossGeoCredentials(siteId?: any): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoCredentials>;
	dBSchemaCompatibilityCheck(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.DBSchemaCompatibilityCheck>;
	geoMoveCompatibilityChecks(): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.GeoMoveTenantCompatibilityCheck>>;
	userPersonalSiteId(userPrincipalName?: string): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.UserPersonalSiteId>;
	userPersonalSiteLocation(userPrincipalName?: string): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.UserPersonalSiteLocation>;
}

/*********************************************
* ISiteMoveJob
**********************************************/
export interface ISiteMoveJob extends SiteMoveJobCollections,SiteMoveJobMethods,IBaseQuery<ISiteMoveJobQuery> {

}

/*********************************************
* ISiteMoveJobQuery
**********************************************/
export interface ISiteMoveJobQuery extends SiteMoveJobQuery,SiteMoveJobMethods {

}

/*********************************************
* SiteMoveJob
**********************************************/
export interface SiteMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobEntityData, SiteMoveJobCollections, SiteMoveJobMethods {
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
* SiteMoveJobCollections
**********************************************/
export interface SiteMoveJobCollections extends SiteMoveJobProps {

}

/*********************************************
* SiteMoveJobQuery
**********************************************/
export interface SiteMoveJobQuery extends SiteMoveJobProps {

}

/*********************************************
* SiteMoveJobMethods
**********************************************/
export interface SiteMoveJobMethods {
	cancel(): IBaseExecution<any>;
	deleteObject(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
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
export interface IStorageQuota extends StorageQuotaCollections,StorageQuotaMethods,IBaseQuery<IStorageQuotaQuery> {

}

/*********************************************
* IStorageQuotaQuery
**********************************************/
export interface IStorageQuotaQuery extends StorageQuotaQuery,StorageQuotaMethods {

}

/*********************************************
* StorageQuota
**********************************************/
export interface StorageQuota extends StorageQuotaCollections, StorageQuotaMethods {
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
* StorageQuotaCollections
**********************************************/
export interface StorageQuotaCollections extends StorageQuotaProps {

}

/*********************************************
* StorageQuotaQuery
**********************************************/
export interface StorageQuotaQuery extends StorageQuotaProps {

}

/*********************************************
* StorageQuotaMethods
**********************************************/
export interface StorageQuotaMethods {
	update(): IBaseExecution<any>;
}

/*********************************************
* ITaxonomyReplicationParameters
**********************************************/
export interface ITaxonomyReplicationParameters extends TaxonomyReplicationParametersCollections,TaxonomyReplicationParametersMethods,IBaseQuery<ITaxonomyReplicationParametersQuery> {

}

/*********************************************
* ITaxonomyReplicationParametersQuery
**********************************************/
export interface ITaxonomyReplicationParametersQuery extends TaxonomyReplicationParametersQuery,TaxonomyReplicationParametersMethods {

}

/*********************************************
* TaxonomyReplicationParameters
**********************************************/
export interface TaxonomyReplicationParameters extends TaxonomyReplicationParametersCollections, TaxonomyReplicationParametersMethods {
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
* TaxonomyReplicationParametersCollections
**********************************************/
export interface TaxonomyReplicationParametersCollections extends TaxonomyReplicationParametersProps {

}

/*********************************************
* TaxonomyReplicationParametersQuery
**********************************************/
export interface TaxonomyReplicationParametersQuery extends TaxonomyReplicationParametersProps {

}

/*********************************************
* TaxonomyReplicationParametersMethods
**********************************************/
export interface TaxonomyReplicationParametersMethods {
	update(): IBaseExecution<any>;
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
export interface IUserMoveJob extends UserMoveJobCollections,UserMoveJobMethods,IBaseQuery<IUserMoveJobQuery> {

}

/*********************************************
* IUserMoveJobQuery
**********************************************/
export interface IUserMoveJobQuery extends UserMoveJobQuery,UserMoveJobMethods {

}

/*********************************************
* UserMoveJob
**********************************************/
export interface UserMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobEntityData, UserMoveJobCollections, UserMoveJobMethods {
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
* UserMoveJobCollections
**********************************************/
export interface UserMoveJobCollections extends UserMoveJobProps {

}

/*********************************************
* UserMoveJobQuery
**********************************************/
export interface UserMoveJobQuery extends UserMoveJobProps {

}

/*********************************************
* UserMoveJobMethods
**********************************************/
export interface UserMoveJobMethods {
	cancel(): IBaseExecution<any>;
	deleteObject(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
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
export interface ICrossFarmGroupMoveJobCollection extends CrossFarmGroupMoveJobCollectionCollections,CrossFarmGroupMoveJobCollectionMethods,IBaseQuery<ICrossFarmGroupMoveJobCollectionQuery> {

}

/*********************************************
* ICrossFarmGroupMoveJobCollectionQuery
**********************************************/
export interface ICrossFarmGroupMoveJobCollectionQuery extends CrossFarmGroupMoveJobCollectionQuery,CrossFarmGroupMoveJobCollectionMethods {

}

/*********************************************
* CrossFarmGroupMoveJobCollection
**********************************************/
export interface CrossFarmGroupMoveJobCollection extends CrossFarmGroupMoveJobCollectionCollections, CrossFarmGroupMoveJobCollectionMethods {

}

/*********************************************
* CrossFarmGroupMoveJobCollectionProps
**********************************************/
export interface CrossFarmGroupMoveJobCollectionProps {

}

/*********************************************
* CrossFarmGroupMoveJobCollectionCollections
**********************************************/
export interface CrossFarmGroupMoveJobCollectionCollections extends CrossFarmGroupMoveJobCollectionProps {

}

/*********************************************
* CrossFarmGroupMoveJobCollectionQuery
**********************************************/
export interface CrossFarmGroupMoveJobCollectionQuery extends CrossFarmGroupMoveJobCollectionProps {

}

/*********************************************
* CrossFarmGroupMoveJobCollectionMethods
**********************************************/
export interface CrossFarmGroupMoveJobCollectionMethods {
	getByMoveId(moveId?: any): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob>;
}

/*********************************************
* ICrossFarmSiteMoveJobCollection
**********************************************/
export interface ICrossFarmSiteMoveJobCollection extends CrossFarmSiteMoveJobCollectionCollections,CrossFarmSiteMoveJobCollectionMethods,IBaseQuery<ICrossFarmSiteMoveJobCollectionQuery> {

}

/*********************************************
* ICrossFarmSiteMoveJobCollectionQuery
**********************************************/
export interface ICrossFarmSiteMoveJobCollectionQuery extends CrossFarmSiteMoveJobCollectionQuery,CrossFarmSiteMoveJobCollectionMethods {

}

/*********************************************
* CrossFarmSiteMoveJobCollection
**********************************************/
export interface CrossFarmSiteMoveJobCollection extends CrossFarmSiteMoveJobCollectionCollections, CrossFarmSiteMoveJobCollectionMethods {

}

/*********************************************
* CrossFarmSiteMoveJobCollectionProps
**********************************************/
export interface CrossFarmSiteMoveJobCollectionProps {

}

/*********************************************
* CrossFarmSiteMoveJobCollectionCollections
**********************************************/
export interface CrossFarmSiteMoveJobCollectionCollections extends CrossFarmSiteMoveJobCollectionProps {

}

/*********************************************
* CrossFarmSiteMoveJobCollectionQuery
**********************************************/
export interface CrossFarmSiteMoveJobCollectionQuery extends CrossFarmSiteMoveJobCollectionProps {

}

/*********************************************
* CrossFarmSiteMoveJobCollectionMethods
**********************************************/
export interface CrossFarmSiteMoveJobCollectionMethods {
	getByMoveId(moveId?: any): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob>;
}

/*********************************************
* ICrossFarmUserMoveJobCollection
**********************************************/
export interface ICrossFarmUserMoveJobCollection extends CrossFarmUserMoveJobCollectionCollections,CrossFarmUserMoveJobCollectionMethods,IBaseQuery<ICrossFarmUserMoveJobCollectionQuery> {

}

/*********************************************
* ICrossFarmUserMoveJobCollectionQuery
**********************************************/
export interface ICrossFarmUserMoveJobCollectionQuery extends CrossFarmUserMoveJobCollectionQuery,CrossFarmUserMoveJobCollectionMethods {

}

/*********************************************
* CrossFarmUserMoveJobCollection
**********************************************/
export interface CrossFarmUserMoveJobCollection extends CrossFarmUserMoveJobCollectionCollections, CrossFarmUserMoveJobCollectionMethods {

}

/*********************************************
* CrossFarmUserMoveJobCollectionProps
**********************************************/
export interface CrossFarmUserMoveJobCollectionProps {

}

/*********************************************
* CrossFarmUserMoveJobCollectionCollections
**********************************************/
export interface CrossFarmUserMoveJobCollectionCollections extends CrossFarmUserMoveJobCollectionProps {

}

/*********************************************
* CrossFarmUserMoveJobCollectionQuery
**********************************************/
export interface CrossFarmUserMoveJobCollectionQuery extends CrossFarmUserMoveJobCollectionProps {

}

/*********************************************
* CrossFarmUserMoveJobCollectionMethods
**********************************************/
export interface CrossFarmUserMoveJobCollectionMethods {
	getByMoveId(moveId?: any): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob>;
}

/*********************************************
* ICrossGeoTenantPropertyCollection
**********************************************/
export interface ICrossGeoTenantPropertyCollection extends CrossGeoTenantPropertyCollectionCollections,CrossGeoTenantPropertyCollectionMethods,IBaseQuery<ICrossGeoTenantPropertyCollectionQuery> {

}

/*********************************************
* ICrossGeoTenantPropertyCollectionQuery
**********************************************/
export interface ICrossGeoTenantPropertyCollectionQuery extends CrossGeoTenantPropertyCollectionQuery,CrossGeoTenantPropertyCollectionMethods {

}

/*********************************************
* CrossGeoTenantPropertyCollection
**********************************************/
export interface CrossGeoTenantPropertyCollection extends CrossGeoTenantPropertyCollectionCollections, CrossGeoTenantPropertyCollectionMethods {

}

/*********************************************
* CrossGeoTenantPropertyCollectionProps
**********************************************/
export interface CrossGeoTenantPropertyCollectionProps {

}

/*********************************************
* CrossGeoTenantPropertyCollectionCollections
**********************************************/
export interface CrossGeoTenantPropertyCollectionCollections extends CrossGeoTenantPropertyCollectionProps {

}

/*********************************************
* CrossGeoTenantPropertyCollectionQuery
**********************************************/
export interface CrossGeoTenantPropertyCollectionQuery extends CrossGeoTenantPropertyCollectionProps {

}

/*********************************************
* CrossGeoTenantPropertyCollectionMethods
**********************************************/
export interface CrossGeoTenantPropertyCollectionMethods {
	getByPropertyNameAndGeoLocation(propertyName?: string, geo?: string): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>;
	getChanges(startTimeInUtc?: any): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>>;
}

/*********************************************
* IGeoAdministratorCollection
**********************************************/
export interface IGeoAdministratorCollection extends GeoAdministratorCollectionCollections,GeoAdministratorCollectionMethods,IBaseQuery<IGeoAdministratorCollectionQuery> {

}

/*********************************************
* IGeoAdministratorCollectionQuery
**********************************************/
export interface IGeoAdministratorCollectionQuery extends GeoAdministratorCollectionQuery,GeoAdministratorCollectionMethods {

}

/*********************************************
* GeoAdministratorCollection
**********************************************/
export interface GeoAdministratorCollection extends GeoAdministratorCollectionCollections, GeoAdministratorCollectionMethods {

}

/*********************************************
* GeoAdministratorCollectionProps
**********************************************/
export interface GeoAdministratorCollectionProps {

}

/*********************************************
* GeoAdministratorCollectionCollections
**********************************************/
export interface GeoAdministratorCollectionCollections extends GeoAdministratorCollectionProps {

}

/*********************************************
* GeoAdministratorCollectionQuery
**********************************************/
export interface GeoAdministratorCollectionQuery extends GeoAdministratorCollectionProps {

}

/*********************************************
* GeoAdministratorCollectionMethods
**********************************************/
export interface GeoAdministratorCollectionMethods {
	create(parameters?: Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorEntityData): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>;
	getByLoginName(loginName?: string): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>;
	getByLoginNameAndType(loginName?: string, memberType?: number): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>;
	getByObjectId(objectId?: any): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>;
}

/*********************************************
* IGroupMoveJobCollection
**********************************************/
export interface IGroupMoveJobCollection extends GroupMoveJobCollectionCollections,GroupMoveJobCollectionMethods,IBaseQuery<IGroupMoveJobCollectionQuery> {

}

/*********************************************
* IGroupMoveJobCollectionQuery
**********************************************/
export interface IGroupMoveJobCollectionQuery extends GroupMoveJobCollectionQuery,GroupMoveJobCollectionMethods {

}

/*********************************************
* GroupMoveJobCollection
**********************************************/
export interface GroupMoveJobCollection extends GroupMoveJobCollectionCollections, GroupMoveJobCollectionMethods {

}

/*********************************************
* GroupMoveJobCollectionProps
**********************************************/
export interface GroupMoveJobCollectionProps {

}

/*********************************************
* GroupMoveJobCollectionCollections
**********************************************/
export interface GroupMoveJobCollectionCollections extends GroupMoveJobCollectionProps {

}

/*********************************************
* GroupMoveJobCollectionQuery
**********************************************/
export interface GroupMoveJobCollectionQuery extends GroupMoveJobCollectionProps {

}

/*********************************************
* GroupMoveJobCollectionMethods
**********************************************/
export interface GroupMoveJobCollectionMethods {
	getByGroupName(groupname?: string): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>;
	getMoveReport(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>>;
}

/*********************************************
* ISiteMoveJobCollection
**********************************************/
export interface ISiteMoveJobCollection extends SiteMoveJobCollectionCollections,SiteMoveJobCollectionMethods,IBaseQuery<ISiteMoveJobCollectionQuery> {

}

/*********************************************
* ISiteMoveJobCollectionQuery
**********************************************/
export interface ISiteMoveJobCollectionQuery extends SiteMoveJobCollectionQuery,SiteMoveJobCollectionMethods {

}

/*********************************************
* SiteMoveJobCollection
**********************************************/
export interface SiteMoveJobCollection extends SiteMoveJobCollectionCollections, SiteMoveJobCollectionMethods {

}

/*********************************************
* SiteMoveJobCollectionProps
**********************************************/
export interface SiteMoveJobCollectionProps {

}

/*********************************************
* SiteMoveJobCollectionCollections
**********************************************/
export interface SiteMoveJobCollectionCollections extends SiteMoveJobCollectionProps {

}

/*********************************************
* SiteMoveJobCollectionQuery
**********************************************/
export interface SiteMoveJobCollectionQuery extends SiteMoveJobCollectionProps {

}

/*********************************************
* SiteMoveJobCollectionMethods
**********************************************/
export interface SiteMoveJobCollectionMethods {
	getByUrl(url?: string): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>;
	getMoveReport(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>>;
}

/*********************************************
* ISiteRenameJobCollection
**********************************************/
export interface ISiteRenameJobCollection extends SiteRenameJobCollectionCollections,SiteRenameJobCollectionMethods,IBaseQuery<ISiteRenameJobCollectionQuery> {

}

/*********************************************
* ISiteRenameJobCollectionQuery
**********************************************/
export interface ISiteRenameJobCollectionQuery extends SiteRenameJobCollectionQuery,SiteRenameJobCollectionMethods {

}

/*********************************************
* SiteRenameJobCollection
**********************************************/
export interface SiteRenameJobCollection extends SiteRenameJobCollectionCollections, SiteRenameJobCollectionMethods {

}

/*********************************************
* SiteRenameJobCollectionProps
**********************************************/
export interface SiteRenameJobCollectionProps {

}

/*********************************************
* SiteRenameJobCollectionCollections
**********************************************/
export interface SiteRenameJobCollectionCollections extends SiteRenameJobCollectionProps {

}

/*********************************************
* SiteRenameJobCollectionQuery
**********************************************/
export interface SiteRenameJobCollectionQuery extends SiteRenameJobCollectionProps {

}

/*********************************************
* SiteRenameJobCollectionMethods
**********************************************/
export interface SiteRenameJobCollectionMethods {
	getBySiteUrl(siteUrl?: string): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob>;
}

/*********************************************
* IStorageQuotaCollection
**********************************************/
export interface IStorageQuotaCollection extends StorageQuotaCollectionCollections,StorageQuotaCollectionMethods,IBaseQuery<IStorageQuotaCollectionQuery> {

}

/*********************************************
* IStorageQuotaCollectionQuery
**********************************************/
export interface IStorageQuotaCollectionQuery extends StorageQuotaCollectionQuery,StorageQuotaCollectionMethods {

}

/*********************************************
* StorageQuotaCollection
**********************************************/
export interface StorageQuotaCollection extends StorageQuotaCollectionCollections, StorageQuotaCollectionMethods {

}

/*********************************************
* StorageQuotaCollectionProps
**********************************************/
export interface StorageQuotaCollectionProps {

}

/*********************************************
* StorageQuotaCollectionCollections
**********************************************/
export interface StorageQuotaCollectionCollections extends StorageQuotaCollectionProps {

}

/*********************************************
* StorageQuotaCollectionQuery
**********************************************/
export interface StorageQuotaCollectionQuery extends StorageQuotaCollectionProps {

}

/*********************************************
* StorageQuotaCollectionMethods
**********************************************/
export interface StorageQuotaCollectionMethods {
	getByLocation(geoLocation?: string): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota>;
}

/*********************************************
* IUnifiedGroupCollection
**********************************************/
export interface IUnifiedGroupCollection extends UnifiedGroupCollectionCollections,UnifiedGroupCollectionMethods,IBaseQuery<IUnifiedGroupCollectionQuery> {

}

/*********************************************
* IUnifiedGroupCollectionQuery
**********************************************/
export interface IUnifiedGroupCollectionQuery extends UnifiedGroupCollectionQuery,UnifiedGroupCollectionMethods {

}

/*********************************************
* UnifiedGroupCollection
**********************************************/
export interface UnifiedGroupCollection extends UnifiedGroupCollectionCollections, UnifiedGroupCollectionMethods {

}

/*********************************************
* UnifiedGroupCollectionProps
**********************************************/
export interface UnifiedGroupCollectionProps {

}

/*********************************************
* UnifiedGroupCollectionCollections
**********************************************/
export interface UnifiedGroupCollectionCollections extends UnifiedGroupCollectionProps {

}

/*********************************************
* UnifiedGroupCollectionQuery
**********************************************/
export interface UnifiedGroupCollectionQuery extends UnifiedGroupCollectionProps {

}

/*********************************************
* UnifiedGroupCollectionMethods
**********************************************/
export interface UnifiedGroupCollectionMethods {
	getByAlias(alias?: string): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup>;
}

/*********************************************
* IUserMoveJobCollection
**********************************************/
export interface IUserMoveJobCollection extends UserMoveJobCollectionCollections,UserMoveJobCollectionMethods,IBaseQuery<IUserMoveJobCollectionQuery> {

}

/*********************************************
* IUserMoveJobCollectionQuery
**********************************************/
export interface IUserMoveJobCollectionQuery extends UserMoveJobCollectionQuery,UserMoveJobCollectionMethods {

}

/*********************************************
* UserMoveJobCollection
**********************************************/
export interface UserMoveJobCollection extends UserMoveJobCollectionCollections, UserMoveJobCollectionMethods {

}

/*********************************************
* UserMoveJobCollectionProps
**********************************************/
export interface UserMoveJobCollectionProps {

}

/*********************************************
* UserMoveJobCollectionCollections
**********************************************/
export interface UserMoveJobCollectionCollections extends UserMoveJobCollectionProps {

}

/*********************************************
* UserMoveJobCollectionQuery
**********************************************/
export interface UserMoveJobCollectionQuery extends UserMoveJobCollectionProps {

}

/*********************************************
* UserMoveJobCollectionMethods
**********************************************/
export interface UserMoveJobCollectionMethods {
	getByDirection(direction?: string): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>;
	getByMoveId(odbMoveId?: any): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>;
	getByUpn(upn?: string): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>;
	getByValidPdl(validPdl?: boolean): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>;
	getMoveReport(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>;
}
