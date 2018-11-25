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
	AllowedDataLocations?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation>;
	ContentDbSchemaVersion?: () => Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersion;
	CrossFarmGroupMoveJobs?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob>;
	CrossFarmSiteMoveJobs?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob>;
	CrossFarmUserMoveJobs?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob>;
	CrossGeoTenantBYOK?: () => Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOK;
	CrossGeoTenantCompatibility?: () => Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibility;
	CrossGeoTenantProperties?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>;
	GeoAdministrators?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>;
	GeoExperience?: () => Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience;
	GeoTenantInstanceInformationCollection?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation>;
	GlobalAdminCheck?: () => Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheck;
	GroupMoveJobs?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>;
	SiteMoveJobs?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>;
	SiteRenameJobs?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob>;
	StorageQuotas?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota>;
	TaxonomyReplicationParameters?: () => Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters;
	TenantInformationCollection?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation>;
	TenantRenameJobs?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.TenantRenameJob>;
	UnifiedGroups?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup>;
	UserMoveJobs?: () => Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>;
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
