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
* AllowedDataLocationEntityDataCollections
**********************************************/
export interface AllowedDataLocationEntityDataCollections {

}

/*********************************************
* IAllowedDataLocation
**********************************************/
export interface IAllowedDataLocation extends AllowedDataLocationCollections,AllowedDataLocationMethods,IBaseQuery<IAllowedDataLocationQuery> {

}

/*********************************************
* IAllowedDataLocationQuery
**********************************************/
export interface IAllowedDataLocationQuery extends AllowedDataLocationQuery, AllowedDataLocationMethods {

}

/*********************************************
* AllowedDataLocation
**********************************************/
export interface AllowedDataLocation extends Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationEntityData, AllowedDataLocationProps, AllowedDataLocationCollections, AllowedDataLocationMethods {

}

/*********************************************
* AllowedDataLocationProps
**********************************************/
export interface AllowedDataLocationProps {

}

/*********************************************
* AllowedDataLocationPropMethods
**********************************************/
export interface AllowedDataLocationPropMethods {

}

/*********************************************
* AllowedDataLocationCollections
**********************************************/
export interface AllowedDataLocationCollections extends AllowedDataLocationPropMethods {

}

/*********************************************
* AllowedDataLocationCollectionMethods
**********************************************/
export interface AllowedDataLocationCollectionMethods {
	getByLocation(location?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation> & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationMethods;
}

/*********************************************
* AllowedDataLocationQuery
**********************************************/
export interface AllowedDataLocationQuery extends AllowedDataLocationProps, AllowedDataLocationMethods {

}

/*********************************************
* AllowedDataLocationMethods
**********************************************/
export interface AllowedDataLocationMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ContentDbSchemaVersion
**********************************************/
export interface ContentDbSchemaVersion {
	Version?: string;
}

/*********************************************
* ContentDbSchemaVersionCollections
**********************************************/
export interface ContentDbSchemaVersionCollections {

}

/*********************************************
* JobEntityData
**********************************************/
export interface JobEntityData {
	Option?: number;
	Reserve?: string;
}

/*********************************************
* JobEntityDataCollections
**********************************************/
export interface JobEntityDataCollections {

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
	SiteId?: any;
	SourceDataLocation?: string;
	State?: number;
	TriggeredBy?: string;
	Type?: number;
}

/*********************************************
* MoveJobEntityDataCollections
**********************************************/
export interface MoveJobEntityDataCollections {

}

/*********************************************
* GroupMoveJobEntityData
**********************************************/
export interface GroupMoveJobEntityData {
	GroupName?: string;
}

/*********************************************
* GroupMoveJobEntityDataCollections
**********************************************/
export interface GroupMoveJobEntityDataCollections {

}

/*********************************************
* ICrossFarmGroupMoveJob
**********************************************/
export interface ICrossFarmGroupMoveJob extends CrossFarmGroupMoveJobCollections,CrossFarmGroupMoveJobMethods,IBaseQuery<ICrossFarmGroupMoveJobQuery> {

}

/*********************************************
* ICrossFarmGroupMoveJobQuery
**********************************************/
export interface ICrossFarmGroupMoveJobQuery extends CrossFarmGroupMoveJobQuery, CrossFarmGroupMoveJobMethods {

}

/*********************************************
* CrossFarmGroupMoveJob
**********************************************/
export interface CrossFarmGroupMoveJob extends CrossFarmGroupMoveJobProps, CrossFarmGroupMoveJobCollections, CrossFarmGroupMoveJobMethods {

}

/*********************************************
* CrossFarmGroupMoveJobProps
**********************************************/
export interface CrossFarmGroupMoveJobProps {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CrossFarmGroupMoveJobPropMethods
**********************************************/
export interface CrossFarmGroupMoveJobPropMethods {

}

/*********************************************
* CrossFarmGroupMoveJobCollections
**********************************************/
export interface CrossFarmGroupMoveJobCollections extends CrossFarmGroupMoveJobPropMethods {

}

/*********************************************
* CrossFarmGroupMoveJobCollectionMethods
**********************************************/
export interface CrossFarmGroupMoveJobCollectionMethods {
	getByMoveId(moveId?: any): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJobMethods;
}

/*********************************************
* CrossFarmGroupMoveJobQuery
**********************************************/
export interface CrossFarmGroupMoveJobQuery extends CrossFarmGroupMoveJobProps, CrossFarmGroupMoveJobMethods {

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
export interface SiteMoveJobEntityData {
	SourceSiteUrl?: string;
	TargetSiteUrl?: string;
}

/*********************************************
* SiteMoveJobEntityDataCollections
**********************************************/
export interface SiteMoveJobEntityDataCollections {

}

/*********************************************
* CrossFarmSiteMoveJobEntityData
**********************************************/
export interface CrossFarmSiteMoveJobEntityData {
	TextPayload?: string;
	WorkflowData?: string;
}

/*********************************************
* CrossFarmSiteMoveJobEntityDataCollections
**********************************************/
export interface CrossFarmSiteMoveJobEntityDataCollections {

}

/*********************************************
* ICrossFarmSiteMoveJob
**********************************************/
export interface ICrossFarmSiteMoveJob extends CrossFarmSiteMoveJobCollections,CrossFarmSiteMoveJobMethods,IBaseQuery<ICrossFarmSiteMoveJobQuery> {

}

/*********************************************
* ICrossFarmSiteMoveJobQuery
**********************************************/
export interface ICrossFarmSiteMoveJobQuery extends CrossFarmSiteMoveJobQuery, CrossFarmSiteMoveJobMethods {

}

/*********************************************
* CrossFarmSiteMoveJob
**********************************************/
export interface CrossFarmSiteMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobEntityData, CrossFarmSiteMoveJobProps, CrossFarmSiteMoveJobCollections, CrossFarmSiteMoveJobMethods {

}

/*********************************************
* CrossFarmSiteMoveJobProps
**********************************************/
export interface CrossFarmSiteMoveJobProps {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CrossFarmSiteMoveJobPropMethods
**********************************************/
export interface CrossFarmSiteMoveJobPropMethods {

}

/*********************************************
* CrossFarmSiteMoveJobCollections
**********************************************/
export interface CrossFarmSiteMoveJobCollections extends CrossFarmSiteMoveJobPropMethods {

}

/*********************************************
* CrossFarmSiteMoveJobCollectionMethods
**********************************************/
export interface CrossFarmSiteMoveJobCollectionMethods {
	getByMoveId(moveId?: any): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobMethods;
}

/*********************************************
* CrossFarmSiteMoveJobQuery
**********************************************/
export interface CrossFarmSiteMoveJobQuery extends CrossFarmSiteMoveJobProps, CrossFarmSiteMoveJobMethods {

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
export interface UserMoveJobEntityData {
	HasOdbInSourceDataLocation?: boolean;
	UserPrincipalName?: string;
	ValidationResult?: number;
}

/*********************************************
* UserMoveJobEntityDataCollections
**********************************************/
export interface UserMoveJobEntityDataCollections {

}

/*********************************************
* CrossFarmUserMoveJobEntityData
**********************************************/
export interface CrossFarmUserMoveJobEntityData {
	TextPayload?: string;
	WorkflowData?: string;
}

/*********************************************
* CrossFarmUserMoveJobEntityDataCollections
**********************************************/
export interface CrossFarmUserMoveJobEntityDataCollections {

}

/*********************************************
* ICrossFarmUserMoveJob
**********************************************/
export interface ICrossFarmUserMoveJob extends CrossFarmUserMoveJobCollections,CrossFarmUserMoveJobMethods,IBaseQuery<ICrossFarmUserMoveJobQuery> {

}

/*********************************************
* ICrossFarmUserMoveJobQuery
**********************************************/
export interface ICrossFarmUserMoveJobQuery extends CrossFarmUserMoveJobQuery, CrossFarmUserMoveJobMethods {

}

/*********************************************
* CrossFarmUserMoveJob
**********************************************/
export interface CrossFarmUserMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobEntityData, CrossFarmUserMoveJobProps, CrossFarmUserMoveJobCollections, CrossFarmUserMoveJobMethods {

}

/*********************************************
* CrossFarmUserMoveJobProps
**********************************************/
export interface CrossFarmUserMoveJobProps {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* CrossFarmUserMoveJobPropMethods
**********************************************/
export interface CrossFarmUserMoveJobPropMethods {

}

/*********************************************
* CrossFarmUserMoveJobCollections
**********************************************/
export interface CrossFarmUserMoveJobCollections extends CrossFarmUserMoveJobPropMethods {

}

/*********************************************
* CrossFarmUserMoveJobCollectionMethods
**********************************************/
export interface CrossFarmUserMoveJobCollectionMethods {
	getByMoveId(moveId?: any): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobMethods;
}

/*********************************************
* CrossFarmUserMoveJobQuery
**********************************************/
export interface CrossFarmUserMoveJobQuery extends CrossFarmUserMoveJobProps, CrossFarmUserMoveJobMethods {

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
* CrossGeoTenantBYOKCollections
**********************************************/
export interface CrossGeoTenantBYOKCollections {

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
* CrossGeoTenantCompatibilityCollections
**********************************************/
export interface CrossGeoTenantCompatibilityCollections {

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
* CrossGeoTenantPropertyEntityDataCollections
**********************************************/
export interface CrossGeoTenantPropertyEntityDataCollections {

}

/*********************************************
* ICrossGeoTenantProperty
**********************************************/
export interface ICrossGeoTenantProperty extends CrossGeoTenantPropertyCollections,CrossGeoTenantPropertyMethods,IBaseQuery<ICrossGeoTenantPropertyQuery> {

}

/*********************************************
* ICrossGeoTenantPropertyQuery
**********************************************/
export interface ICrossGeoTenantPropertyQuery extends CrossGeoTenantPropertyQuery, CrossGeoTenantPropertyMethods {

}

/*********************************************
* CrossGeoTenantProperty
**********************************************/
export interface CrossGeoTenantProperty extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyEntityData, CrossGeoTenantPropertyProps, CrossGeoTenantPropertyCollections, CrossGeoTenantPropertyMethods {

}

/*********************************************
* CrossGeoTenantPropertyProps
**********************************************/
export interface CrossGeoTenantPropertyProps {
	LastModifiedTimeInUtc?: any;
}

/*********************************************
* CrossGeoTenantPropertyPropMethods
**********************************************/
export interface CrossGeoTenantPropertyPropMethods {

}

/*********************************************
* CrossGeoTenantPropertyCollections
**********************************************/
export interface CrossGeoTenantPropertyCollections extends CrossGeoTenantPropertyPropMethods {

}

/*********************************************
* CrossGeoTenantPropertyCollectionMethods
**********************************************/
export interface CrossGeoTenantPropertyCollectionMethods {
	getByPropertyNameAndGeoLocation(propertyName?: string, geo?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyMethods;
	getChanges(startTimeInUtc?: any): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>>;
}

/*********************************************
* CrossGeoTenantPropertyQuery
**********************************************/
export interface CrossGeoTenantPropertyQuery extends CrossGeoTenantPropertyProps, CrossGeoTenantPropertyMethods {

}

/*********************************************
* CrossGeoTenantPropertyMethods
**********************************************/
export interface CrossGeoTenantPropertyMethods {
	delete(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* DBSchemaCompatibilityCheck
**********************************************/
export interface DBSchemaCompatibilityCheck {
	CompatibilityResult?: string;
}

/*********************************************
* DBSchemaCompatibilityCheckCollections
**********************************************/
export interface DBSchemaCompatibilityCheckCollections {

}

/*********************************************
* IGeoAdministrator
**********************************************/
export interface IGeoAdministrator extends GeoAdministratorCollections,GeoAdministratorMethods,IBaseQuery<IGeoAdministratorQuery> {

}

/*********************************************
* IGeoAdministratorQuery
**********************************************/
export interface IGeoAdministratorQuery extends GeoAdministratorQuery, GeoAdministratorMethods {

}

/*********************************************
* GeoAdministrator
**********************************************/
export interface GeoAdministrator extends GeoAdministratorProps, GeoAdministratorCollections, GeoAdministratorMethods {

}

/*********************************************
* GeoAdministratorProps
**********************************************/
export interface GeoAdministratorProps {
	DisplayName?: string;
	GeoLocation?: string;
	LoginName?: string;
	MemberType?: number;
	ObjectId?: any;
}

/*********************************************
* GeoAdministratorPropMethods
**********************************************/
export interface GeoAdministratorPropMethods {

}

/*********************************************
* GeoAdministratorCollections
**********************************************/
export interface GeoAdministratorCollections extends GeoAdministratorPropMethods {

}

/*********************************************
* GeoAdministratorCollectionMethods
**********************************************/
export interface GeoAdministratorCollectionMethods {
	create(parameters?: Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorEntityData): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>;
	getByLoginName(loginName?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorMethods;
	getByLoginNameAndType(loginName?: string, memberType?: number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorMethods;
	getByObjectId(objectId?: any): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorMethods;
}

/*********************************************
* GeoAdministratorQuery
**********************************************/
export interface GeoAdministratorQuery extends GeoAdministratorProps, GeoAdministratorMethods {

}

/*********************************************
* GeoAdministratorMethods
**********************************************/
export interface GeoAdministratorMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IGeoExperience
**********************************************/
export interface IGeoExperience extends GeoExperienceCollections,GeoExperienceMethods,IBaseQuery<IGeoExperienceQuery> {

}

/*********************************************
* IGeoExperienceQuery
**********************************************/
export interface IGeoExperienceQuery extends GeoExperienceQuery, GeoExperienceMethods {

}

/*********************************************
* GeoExperience
**********************************************/
export interface GeoExperience extends GeoExperienceProps, GeoExperienceCollections, GeoExperienceMethods {

}

/*********************************************
* GeoExperienceProps
**********************************************/
export interface GeoExperienceProps {
	GeoLocation?: string;
	MultiGeoExperienceMode?: number;
}

/*********************************************
* GeoExperiencePropMethods
**********************************************/
export interface GeoExperiencePropMethods {

}

/*********************************************
* GeoExperienceCollections
**********************************************/
export interface GeoExperienceCollections extends GeoExperiencePropMethods {

}

/*********************************************
* GeoExperienceQuery
**********************************************/
export interface GeoExperienceQuery extends GeoExperienceProps, GeoExperienceMethods {

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
* GeoMoveTenantCompatibilityCheckCollections
**********************************************/
export interface GeoMoveTenantCompatibilityCheckCollections {

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
* GeoTenantInstanceInformationEntityDataCollections
**********************************************/
export interface GeoTenantInstanceInformationEntityDataCollections {

}

/*********************************************
* GeoTenantInstanceInformation
**********************************************/
export interface GeoTenantInstanceInformation {

}

/*********************************************
* GeoTenantInstanceInformationCollections
**********************************************/
export interface GeoTenantInstanceInformationCollections extends GeoTenantInstanceInformationCollectionMethods {

}

/*********************************************
* GeoTenantInstanceInformationCollectionMethods
**********************************************/
export interface GeoTenantInstanceInformationCollectionMethods {
	getByGeoLocation(geoLocation?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation>;
}

/*********************************************
* GlobalAdminCheck
**********************************************/
export interface GlobalAdminCheck {
	IsGlobalAdministrator?: boolean;
}

/*********************************************
* GlobalAdminCheckCollections
**********************************************/
export interface GlobalAdminCheckCollections {

}

/*********************************************
* IGroupMoveJob
**********************************************/
export interface IGroupMoveJob extends GroupMoveJobCollections,GroupMoveJobMethods,IBaseQuery<IGroupMoveJobQuery> {

}

/*********************************************
* IGroupMoveJobQuery
**********************************************/
export interface IGroupMoveJobQuery extends GroupMoveJobQuery, GroupMoveJobMethods {

}

/*********************************************
* GroupMoveJob
**********************************************/
export interface GroupMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobEntityData, GroupMoveJobProps, GroupMoveJobCollections, GroupMoveJobMethods {

}

/*********************************************
* GroupMoveJobProps
**********************************************/
export interface GroupMoveJobProps {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* GroupMoveJobPropMethods
**********************************************/
export interface GroupMoveJobPropMethods {

}

/*********************************************
* GroupMoveJobCollections
**********************************************/
export interface GroupMoveJobCollections extends GroupMoveJobPropMethods {

}

/*********************************************
* GroupMoveJobCollectionMethods
**********************************************/
export interface GroupMoveJobCollectionMethods {
	getByGroupName(groupname?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobMethods;
	getMoveReport(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>>;
}

/*********************************************
* GroupMoveJobQuery
**********************************************/
export interface GroupMoveJobQuery extends GroupMoveJobProps, GroupMoveJobMethods {

}

/*********************************************
* GroupMoveJobMethods
**********************************************/
export interface GroupMoveJobMethods {
	cancel(): IBaseExecution<any>;
	delete(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
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
* MoveJobCollections
**********************************************/
export interface MoveJobCollections {

}

/*********************************************
* MultiGeoApiVersions
**********************************************/
export interface MultiGeoApiVersions {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	SupportedVersions?: Array<string>;
}

/*********************************************
* MultiGeoApiVersionsCollections
**********************************************/
export interface MultiGeoApiVersionsCollections {

}

/*********************************************
* IMultiGeoServicesBeta
**********************************************/
export interface IMultiGeoServicesBeta extends MultiGeoServicesBetaCollections,MultiGeoServicesBetaMethods,IBaseQuery<IMultiGeoServicesBetaQuery> {

}

/*********************************************
* IMultiGeoServicesBetaQuery
**********************************************/
export interface IMultiGeoServicesBetaQuery extends MultiGeoServicesBetaQuery, MultiGeoServicesBetaMethods {

}

/*********************************************
* MultiGeoServicesBeta
**********************************************/
export interface MultiGeoServicesBeta extends MultiGeoServicesBetaProps, MultiGeoServicesBetaCollections, MultiGeoServicesBetaMethods {

}

/*********************************************
* MultiGeoServicesBetaProps
**********************************************/
export interface MultiGeoServicesBetaProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MultiGeoServicesBetaPropMethods
**********************************************/
export interface MultiGeoServicesBetaPropMethods {
	ContentDbSchemaVersion(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersion> & Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersionCollections;
	CrossGeoTenantBYOK(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOK> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOKCollections;
	CrossGeoTenantCompatibility(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibility> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibilityCollections;
	GeoExperience(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperienceCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperienceMethods;
	GlobalAdminCheck(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheck> & Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheckCollections;
	TaxonomyReplicationParameters(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters> & Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParametersCollections & Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParametersMethods;
}

/*********************************************
* MultiGeoServicesBetaCollections
**********************************************/
export interface MultiGeoServicesBetaCollections extends MultiGeoServicesBetaPropMethods {
	AllowedDataLocations(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation> & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationCollectionMethods;
	AllowedDataLocations(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation> & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationCollections & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationMethods;
	CrossFarmGroupMoveJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJobCollectionMethods;
	CrossFarmGroupMoveJobs(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJobMethods;
	CrossFarmSiteMoveJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobCollectionMethods;
	CrossFarmSiteMoveJobs(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobMethods;
	CrossFarmUserMoveJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobCollectionMethods;
	CrossFarmUserMoveJobs(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobMethods;
	CrossGeoTenantProperties(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyCollectionMethods;
	CrossGeoTenantProperties(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyMethods;
	GeoAdministrators(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorCollectionMethods;
	GeoAdministrators(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorMethods;
	GeoTenantInstanceInformationCollection(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformationCollectionMethods;
	GeoTenantInstanceInformationCollection(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformationCollections;
	GroupMoveJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobCollectionMethods;
	GroupMoveJobs(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobMethods;
	SiteMoveJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobCollectionMethods;
	SiteMoveJobs(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobMethods;
	SiteRenameJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJobCollectionMethods;
	SiteRenameJobs(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJobCollections;
	StorageQuotas(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota> & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaCollectionMethods;
	StorageQuotas(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota> & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaCollections & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaMethods;
	TenantInformationCollection(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation>;
	TenantInformationCollection(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation> & Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformationCollections;
	UnifiedGroups(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup> & Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroupCollectionMethods;
	UnifiedGroups(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup> & Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroupCollections;
	UserMoveJobs(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollectionMethods;
	UserMoveJobs(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobMethods;
}

/*********************************************
* MultiGeoServicesBetaQuery
**********************************************/
export interface MultiGeoServicesBetaQuery extends MultiGeoServicesBetaProps, MultiGeoServicesBetaMethods {
	AllowedDataLocations: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation>;
	ContentDbSchemaVersion: Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersion & Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersionCollections;
	CrossFarmGroupMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob>;
	CrossFarmSiteMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob>;
	CrossFarmUserMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob>;
	CrossGeoTenantBYOK: Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOK & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOKCollections;
	CrossGeoTenantCompatibility: Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibility & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibilityCollections;
	CrossGeoTenantProperties: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>;
	GeoAdministrators: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator>;
	GeoExperience: Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience & Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperienceCollections;
	GeoTenantInstanceInformationCollection: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation>;
	GlobalAdminCheck: Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheck & Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheckCollections;
	GroupMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>;
	SiteMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>;
	SiteRenameJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob>;
	StorageQuotas: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota>;
	TaxonomyReplicationParameters: Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters & Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParametersCollections;
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
export interface ISiteMoveJobQuery extends SiteMoveJobQuery, SiteMoveJobMethods {

}

/*********************************************
* SiteMoveJob
**********************************************/
export interface SiteMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobEntityData, SiteMoveJobProps, SiteMoveJobCollections, SiteMoveJobMethods {

}

/*********************************************
* SiteMoveJobProps
**********************************************/
export interface SiteMoveJobProps {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* SiteMoveJobPropMethods
**********************************************/
export interface SiteMoveJobPropMethods {

}

/*********************************************
* SiteMoveJobCollections
**********************************************/
export interface SiteMoveJobCollections extends SiteMoveJobPropMethods {

}

/*********************************************
* SiteMoveJobCollectionMethods
**********************************************/
export interface SiteMoveJobCollectionMethods {
	getByUrl(url?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobMethods;
	getMoveReport(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>>;
}

/*********************************************
* SiteMoveJobQuery
**********************************************/
export interface SiteMoveJobQuery extends SiteMoveJobProps, SiteMoveJobMethods {

}

/*********************************************
* SiteMoveJobMethods
**********************************************/
export interface SiteMoveJobMethods {
	cancel(): IBaseExecution<any>;
	delete(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* SiteRenameJobEntityData
**********************************************/
export interface SiteRenameJobEntityData {
	SourceSiteUrl?: string;
	TargetSiteTitle?: string;
	TargetSiteUrl?: string;
}

/*********************************************
* SiteRenameJobEntityDataCollections
**********************************************/
export interface SiteRenameJobEntityDataCollections {

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
* SiteRenameJobCollections
**********************************************/
export interface SiteRenameJobCollections extends SiteRenameJobCollectionMethods {

}

/*********************************************
* SiteRenameJobCollectionMethods
**********************************************/
export interface SiteRenameJobCollectionMethods {
	getBySiteUrl(siteUrl?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob>;
}

/*********************************************
* IStorageQuota
**********************************************/
export interface IStorageQuota extends StorageQuotaCollections,StorageQuotaMethods,IBaseQuery<IStorageQuotaQuery> {

}

/*********************************************
* IStorageQuotaQuery
**********************************************/
export interface IStorageQuotaQuery extends StorageQuotaQuery, StorageQuotaMethods {

}

/*********************************************
* StorageQuota
**********************************************/
export interface StorageQuota extends StorageQuotaProps, StorageQuotaCollections, StorageQuotaMethods {

}

/*********************************************
* StorageQuotaProps
**********************************************/
export interface StorageQuotaProps {
	GeoAllocatedStorageMB?: number;
	GeoAvailableStorageMB?: number;
	GeoLocation?: string;
	GeoUsedStorageMB?: number;
	QuotaType?: number;
	TenantStorageMB?: number;
}

/*********************************************
* StorageQuotaPropMethods
**********************************************/
export interface StorageQuotaPropMethods {

}

/*********************************************
* StorageQuotaCollections
**********************************************/
export interface StorageQuotaCollections extends StorageQuotaPropMethods {

}

/*********************************************
* StorageQuotaCollectionMethods
**********************************************/
export interface StorageQuotaCollectionMethods {
	getByLocation(geoLocation?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota> & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaMethods;
}

/*********************************************
* StorageQuotaQuery
**********************************************/
export interface StorageQuotaQuery extends StorageQuotaProps, StorageQuotaMethods {

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
export interface ITaxonomyReplicationParametersQuery extends TaxonomyReplicationParametersQuery, TaxonomyReplicationParametersMethods {

}

/*********************************************
* TaxonomyReplicationParameters
**********************************************/
export interface TaxonomyReplicationParameters extends TaxonomyReplicationParametersProps, TaxonomyReplicationParametersCollections, TaxonomyReplicationParametersMethods {

}

/*********************************************
* TaxonomyReplicationParametersProps
**********************************************/
export interface TaxonomyReplicationParametersProps {
	IsReplicateAllContentTypes?: boolean;
	IsReplicateAllGroups?: boolean;
	ReplicatedContentTypes?: Array<string>;
	ReplicatedGroups?: Array<string>;
}

/*********************************************
* TaxonomyReplicationParametersPropMethods
**********************************************/
export interface TaxonomyReplicationParametersPropMethods {

}

/*********************************************
* TaxonomyReplicationParametersCollections
**********************************************/
export interface TaxonomyReplicationParametersCollections extends TaxonomyReplicationParametersPropMethods {

}

/*********************************************
* TaxonomyReplicationParametersQuery
**********************************************/
export interface TaxonomyReplicationParametersQuery extends TaxonomyReplicationParametersProps, TaxonomyReplicationParametersMethods {

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
* TenantInformationCollections
**********************************************/
export interface TenantInformationCollections {

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
* UnifiedGroupCollections
**********************************************/
export interface UnifiedGroupCollections extends UnifiedGroupCollectionMethods {

}

/*********************************************
* UnifiedGroupCollectionMethods
**********************************************/
export interface UnifiedGroupCollectionMethods {
	getByAlias(alias?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup>;
}

/*********************************************
* IUserMoveJob
**********************************************/
export interface IUserMoveJob extends UserMoveJobCollections,UserMoveJobMethods,IBaseQuery<IUserMoveJobQuery> {

}

/*********************************************
* IUserMoveJobQuery
**********************************************/
export interface IUserMoveJobQuery extends UserMoveJobQuery, UserMoveJobMethods {

}

/*********************************************
* UserMoveJob
**********************************************/
export interface UserMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobEntityData, UserMoveJobProps, UserMoveJobCollections, UserMoveJobMethods {

}

/*********************************************
* UserMoveJobProps
**********************************************/
export interface UserMoveJobProps {
	IsContentMoved?: boolean;
	LastModified?: any;
	StartedDateInUtc?: any;
	StateName?: string;
}

/*********************************************
* UserMoveJobPropMethods
**********************************************/
export interface UserMoveJobPropMethods {

}

/*********************************************
* UserMoveJobCollections
**********************************************/
export interface UserMoveJobCollections extends UserMoveJobPropMethods {

}

/*********************************************
* UserMoveJobCollectionMethods
**********************************************/
export interface UserMoveJobCollectionMethods {
	getByDirection(direction?: string): IBaseQuery<Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>;
	getByMoveId(odbMoveId?: any): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobMethods;
	getByUpn(upn?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobMethods;
	getByValidPdl(validPdl?: boolean): IBaseQuery<Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>;
	getMoveReport(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>;
}

/*********************************************
* UserMoveJobQuery
**********************************************/
export interface UserMoveJobQuery extends UserMoveJobProps, UserMoveJobMethods {

}

/*********************************************
* UserMoveJobMethods
**********************************************/
export interface UserMoveJobMethods {
	cancel(): IBaseExecution<any>;
	delete(): IBaseExecution<any>;
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
* StorageQuotaEntityDataCollections
**********************************************/
export interface StorageQuotaEntityDataCollections {

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
* UserPersonalSiteIdCollections
**********************************************/
export interface UserPersonalSiteIdCollections {

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
* UserPersonalSiteLocationCollections
**********************************************/
export interface UserPersonalSiteLocationCollections {

}
