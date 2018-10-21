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
export interface MoveJobEntityData {
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
export interface GroupMoveJobEntityData {
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
export interface SiteMoveJobEntityData {
	SourceSiteUrl?: string;
	TargetSiteUrl?: string;
}

/*********************************************
* CrossFarmSiteMoveJobEntityData
**********************************************/
export interface CrossFarmSiteMoveJobEntityData {
	TextPayload?: string;
	WorkflowData?: string;
}

/*********************************************
* CrossFarmSiteMoveJob
**********************************************/
export interface CrossFarmSiteMoveJob {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* UserMoveJobEntityData
**********************************************/
export interface UserMoveJobEntityData {
	HasOdbInSourceDataLocation?: boolean;
	UserPrincipalName?: string;
	ValidationResult?: number;
}

/*********************************************
* CrossFarmUserMoveJobEntityData
**********************************************/
export interface CrossFarmUserMoveJobEntityData {
	TextPayload?: string;
	WorkflowData?: string;
}

/*********************************************
* CrossFarmUserMoveJob
**********************************************/
export interface CrossFarmUserMoveJob {
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
export interface CrossGeoTenantProperty {
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
* GlobalAdminCheck
**********************************************/
export interface GlobalAdminCheck {
	IsGlobalAdministrator?: boolean;
}

/*********************************************
* GroupMoveJob
**********************************************/
export interface GroupMoveJob {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* MoveJob
**********************************************/
export interface MoveJob {
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
* SiteMoveJob
**********************************************/
export interface SiteMoveJob {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* SiteRenameJobEntityData
**********************************************/
export interface SiteRenameJobEntityData {
	Reserved?: string;
	SourceSiteUrl?: string;
	TargetSiteUrl?: string;
}

/*********************************************
* SiteRenameJob
**********************************************/
export interface SiteRenameJob {
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
export interface TenantRenameJobEntityData {
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
export interface TenantRenameJob {
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
export interface UserMoveJob {
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
