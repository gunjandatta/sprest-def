import { Microsoft } from "../../../../../";

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
* AllowedDataLocation
**********************************************/
export interface AllowedDataLocation extends Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationEntityData {

}

/*********************************************
* AllowedDataLocationMethods
**********************************************/
export interface AllowedDataLocationMethods {
	deleteObject<T=void>(): T;
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
* CrossFarmGroupMoveJob
**********************************************/
export interface CrossFarmGroupMoveJob {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CrossFarmGroupMoveJobMethods
**********************************************/
export interface CrossFarmGroupMoveJobMethods {
	update<T=void>(): T;
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
* CrossFarmSiteMoveJob
**********************************************/
export interface CrossFarmSiteMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobEntityData {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CrossFarmSiteMoveJobMethods
**********************************************/
export interface CrossFarmSiteMoveJobMethods {
	update<T=void>(): T;
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
* CrossFarmUserMoveJob
**********************************************/
export interface CrossFarmUserMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobEntityData {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CrossFarmUserMoveJobMethods
**********************************************/
export interface CrossFarmUserMoveJobMethods {
	update<T=void>(): T;
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
* CrossGeoTenantProperty
**********************************************/
export interface CrossGeoTenantProperty extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyEntityData {
	LastModifiedTimeInUtc?: any;
}

/*********************************************
* CrossGeoTenantPropertyMethods
**********************************************/
export interface CrossGeoTenantPropertyMethods {
	deleteObject<T=void>(): T;
	update<T=void>(): T;
}

/*********************************************
* DBSchemaCompatibilityCheck
**********************************************/
export interface DBSchemaCompatibilityCheck {
	CompatibilityResult?: string;
}

/*********************************************
* GeoAdministrator
**********************************************/
export interface GeoAdministrator {
	DisplayName?: string;
	GeoLocation?: string;
	LoginName?: string;
	MemberType?: number;
	ObjectId?: any;
}

/*********************************************
* GeoAdministratorMethods
**********************************************/
export interface GeoAdministratorMethods {
	deleteObject<T=void>(): T;
}

/*********************************************
* GeoExperience
**********************************************/
export interface GeoExperience {
	GeoLocation?: string;
	MultiGeoExperienceMode?: number;
}

/*********************************************
* GeoExperienceMethods
**********************************************/
export interface GeoExperienceMethods {
	upgradeAllInstancesToSPOMode<T=void>(): T;
	upgradeToSPOMode<T=void>(): T;
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
* GroupMoveJob
**********************************************/
export interface GroupMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobEntityData {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* GroupMoveJobMethods
**********************************************/
export interface GroupMoveJobMethods {
	cancel<T=void>(): T;
	deleteObject<T=void>(): T;
	update<T=void>(): T;
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
* MultiGeoServicesBeta
**********************************************/
export interface MultiGeoServicesBeta {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MultiGeoServicesBetaCollections
**********************************************/
export interface MultiGeoServicesBetaCollections {
	AllowedDataLocations<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation>>(): T;
	ContentDbSchemaVersion<T=Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersion>(): T;
	CrossFarmGroupMoveJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob>>(): T;
	CrossFarmSiteMoveJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob>>(): T;
	CrossFarmUserMoveJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob>>(): T;
	CrossGeoTenantBYOK<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOK>(): T;
	CrossGeoTenantCompatibility<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibility>(): T;
	CrossGeoTenantProperties<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>>(): T;
	GeoAdministrators<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>>(): T;
	GeoExperience<T=Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience>(): T;
	GeoTenantInstanceInformationCollection<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation>>(): T;
	GlobalAdminCheck<T=Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheck>(): T;
	GroupMoveJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>>(): T;
	SiteMoveJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>>(): T;
	SiteRenameJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob>>(): T;
	StorageQuotas<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota>>(): T;
	TaxonomyReplicationParameters<T=Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters>(): T;
	TenantInformationCollection<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation>>(): T;
	UnifiedGroups<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup>>(): T;
	UserMoveJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>(): T;
}

/*********************************************
* MultiGeoServicesBetaQuery
**********************************************/
export interface MultiGeoServicesBetaQuery {
	AllowedDataLocations<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation>>(): T;
	ContentDbSchemaVersion<T=Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersion>(): T;
	CrossFarmGroupMoveJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob>>(): T;
	CrossFarmSiteMoveJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob>>(): T;
	CrossFarmUserMoveJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob>>(): T;
	CrossGeoTenantBYOK<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOK>(): T;
	CrossGeoTenantCompatibility<T=Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibility>(): T;
	CrossGeoTenantProperties<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>>(): T;
	GeoAdministrators<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>>(): T;
	GeoExperience<T=Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience>(): T;
	GeoTenantInstanceInformationCollection<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation>>(): T;
	GlobalAdminCheck<T=Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheck>(): T;
	GroupMoveJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>>(): T;
	SiteMoveJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>>(): T;
	SiteRenameJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob>>(): T;
	StorageQuotas<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota>>(): T;
	TaxonomyReplicationParameters<T=Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters>(): T;
	TenantInformationCollection<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation>>(): T;
	UnifiedGroups<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup>>(): T;
	UserMoveJobs<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>(): T;
}

/*********************************************
* MultiGeoServicesBetaMethods
**********************************************/
export interface MultiGeoServicesBetaMethods {
	crossGeoCredentials<T=Microsoft.Online.SharePoint.MultiGeo.Service.GeoCredentials>(siteId?: any): T;
	dBSchemaCompatibilityCheck<T=Microsoft.Online.SharePoint.MultiGeo.Service.DBSchemaCompatibilityCheck>(): T;
	geoMoveCompatibilityChecks<T=Array<Microsoft.Online.SharePoint.MultiGeo.Service.GeoMoveTenantCompatibilityCheck>>(): T;
	userPersonalSiteId<T=Microsoft.Online.SharePoint.MultiGeo.Service.UserPersonalSiteId>(userPrincipalName?: string): T;
	userPersonalSiteLocation<T=Microsoft.Online.SharePoint.MultiGeo.Service.UserPersonalSiteLocation>(userPrincipalName?: string): T;
}

/*********************************************
* SiteMoveJob
**********************************************/
export interface SiteMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobEntityData {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* SiteMoveJobMethods
**********************************************/
export interface SiteMoveJobMethods {
	cancel<T=void>(): T;
	deleteObject<T=void>(): T;
	update<T=void>(): T;
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
* StorageQuota
**********************************************/
export interface StorageQuota {
	GeoAllocatedStorageMB?: number;
	GeoAvailableStorageMB?: number;
	GeoLocation?: string;
	GeoUsedStorageMB?: number;
	QuotaType?: number;
	TenantStorageMB?: number;
}

/*********************************************
* StorageQuotaMethods
**********************************************/
export interface StorageQuotaMethods {
	update<T=void>(): T;
}

/*********************************************
* TaxonomyReplicationParameters
**********************************************/
export interface TaxonomyReplicationParameters {
	IsReplicateAllContentTypes?: boolean;
	IsReplicateAllGroups?: boolean;
	ReplicatedContentTypes?: Array<string>;
	ReplicatedGroups?: Array<string>;
}

/*********************************************
* TaxonomyReplicationParametersMethods
**********************************************/
export interface TaxonomyReplicationParametersMethods {
	update<T=void>(): T;
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
* UserMoveJob
**********************************************/
export interface UserMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobEntityData {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* UserMoveJobMethods
**********************************************/
export interface UserMoveJobMethods {
	cancel<T=void>(): T;
	deleteObject<T=void>(): T;
	update<T=void>(): T;
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
