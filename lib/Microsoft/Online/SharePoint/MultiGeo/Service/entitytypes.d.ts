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
	Reserve?: string;
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
* GeoExperience
**********************************************/
export interface GeoExperience {
	GeoLocation?: string;
	MultiGeoExperienceMode?: number;
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
	AllowedDataLocations?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_AllowedDataLocations_Microsoft_Online_SharePoint_MultiGeo_Service_AllowedDataLocation_AllowedDataLocationsPartner;
	ContentDbSchemaVersion?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_ContentDbSchemaVersion_Microsoft_Online_SharePoint_MultiGeo_Service_ContentDbSchemaVersion_ContentDbSchemaVersionPartner;
	CrossFarmGroupMoveJobs?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_CrossFarmGroupMoveJobs_Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmGroupMoveJob_CrossFarmGroupMoveJobsPartner;
	CrossFarmSiteMoveJobs?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_CrossFarmSiteMoveJobs_Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmSiteMoveJob_CrossFarmSiteMoveJobsPartner;
	CrossFarmUserMoveJobs?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_CrossFarmUserMoveJobs_Microsoft_Online_SharePoint_MultiGeo_Service_CrossFarmUserMoveJob_CrossFarmUserMoveJobsPartner;
	CrossGeoTenantBYOK?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_CrossGeoTenantBYOK_Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantBYOK_CrossGeoTenantBYOKPartner;
	CrossGeoTenantCompatibility?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_CrossGeoTenantCompatibility_Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantCompatibility_CrossGeoTenantCompatibilityPartner;
	CrossGeoTenantProperties?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_CrossGeoTenantProperties_Microsoft_Online_SharePoint_MultiGeo_Service_CrossGeoTenantProperty_CrossGeoTenantPropertiesPartner;
	GeoAdministrators?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_GeoAdministrators_Microsoft_Online_SharePoint_MultiGeo_Service_GeoAdministrator_GeoAdministratorsPartner;
	GeoExperience?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_GeoExperience_Microsoft_Online_SharePoint_MultiGeo_Service_GeoExperience_GeoExperiencePartner;
	GeoTenantInstanceInformationCollection?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_GeoTenantInstanceInformationCollection_Microsoft_Online_SharePoint_MultiGeo_Service_GeoTenantInstanceInformation_GeoTenantInstanceInformationCollectionPartner;
	GlobalAdminCheck?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_GlobalAdminCheck_Microsoft_Online_SharePoint_MultiGeo_Service_GlobalAdminCheck_GlobalAdminCheckPartner;
	GroupMoveJobs?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_GroupMoveJobs_Microsoft_Online_SharePoint_MultiGeo_Service_GroupMoveJob_GroupMoveJobsPartner;
	SiteMoveJobs?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_SiteMoveJobs_Microsoft_Online_SharePoint_MultiGeo_Service_SiteMoveJob_SiteMoveJobsPartner;
	SiteRenameJobs?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_SiteRenameJobs_Microsoft_Online_SharePoint_MultiGeo_Service_SiteRenameJob_SiteRenameJobsPartner;
	StorageQuotas?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_StorageQuotas_Microsoft_Online_SharePoint_MultiGeo_Service_StorageQuota_StorageQuotasPartner;
	TaxonomyReplicationParameters?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_TaxonomyReplicationParameters_Microsoft_Online_SharePoint_MultiGeo_Service_TaxonomyReplicationParameters_TaxonomyReplicationParametersPartner;
	TenantInformationCollection?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_TenantInformationCollection_Microsoft_Online_SharePoint_MultiGeo_Service_TenantInformation_TenantInformationCollectionPartner;
	TenantRenameJobs?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_TenantRenameJobs_Microsoft_Online_SharePoint_MultiGeo_Service_TenantRenameJob_TenantRenameJobsPartner;
	UnifiedGroups?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_UnifiedGroups_Microsoft_Online_SharePoint_MultiGeo_Service_UnifiedGroup_UnifiedGroupsPartner;
	UserMoveJobs?: () => Microsoft.Online.SharePoint.MultiGeo.Service.Microsoft_Online_SharePoint_MultiGeo_Service_MultiGeoServicesBeta_UserMoveJobs_Microsoft_Online_SharePoint_MultiGeo_Service_UserMoveJob_UserMoveJobsPartner;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
* SiteRenameJobEntityData
**********************************************/
export interface SiteRenameJobEntityData extends Microsoft.Online.SharePoint.MultiGeo.Service.JobEntityData {
	Reserved?: string;
	SourceSiteUrl?: string;
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
* TaxonomyReplicationParameters
**********************************************/
export interface TaxonomyReplicationParameters {
	IsReplicateAllContentTypes?: boolean;
	IsReplicateAllGroups?: boolean;
	ReplicatedContentTypes?: Array<string>;
	ReplicatedGroups?: Array<string>;
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
* TenantRenameJobEntityData
**********************************************/
export interface TenantRenameJobEntityData extends Microsoft.Online.SharePoint.MultiGeo.Service.JobEntityData {
	SourceAdminSiteUrl?: string;
	SourceMySiteHostUrl?: string;
	SourceRootSiteUrl?: string;
	TargetAdminSiteUrl?: string;
	TargetMySiteHostUrl?: string;
	TargetRootSiteUrl?: string;
}

/*********************************************
* TenantRenameJob
**********************************************/
export interface TenantRenameJob extends Microsoft.Online.SharePoint.MultiGeo.Service.TenantRenameJobEntityData {
	JobId?: any;
	JobState?: string;
	TriggeredBy?: string;
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
