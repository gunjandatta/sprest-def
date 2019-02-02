import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../../../";
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
* AllowedDataLocationEntityDataCollections
**********************************************/
export interface AllowedDataLocationEntityDataCollections {

}

/*********************************************
* IAllowedDataLocation
**********************************************/
export interface IAllowedDataLocation extends AllowedDataLocationCollections, AllowedDataLocationMethods, IBaseQuery<IAllowedDataLocationQuery> {

}

/*********************************************
* IAllowedDataLocationCollection
**********************************************/
export interface IAllowedDataLocationCollection extends IBaseResults<AllowedDataLocation>, AllowedDataLocationCollectionMethods {
	done?: (resolve: (value?: Array<AllowedDataLocation>) => void) => void;
}

/*********************************************
* IAllowedDataLocationQueryCollection
**********************************************/
export interface IAllowedDataLocationQueryCollection extends IBaseResults<AllowedDataLocationOData>, AllowedDataLocationCollectionMethods {
	done?: (resolve: (value?: Array<AllowedDataLocationOData>) => void) => void;
}

/*********************************************
* IAllowedDataLocationQuery
**********************************************/
export interface IAllowedDataLocationQuery extends AllowedDataLocationOData, AllowedDataLocationMethods {

}

/*********************************************
* AllowedDataLocation
**********************************************/
export interface AllowedDataLocation extends Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationEntityData, IBaseResult, AllowedDataLocationProps, AllowedDataLocationCollections, AllowedDataLocationMethods {

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
	getByLocation(location?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation> & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationCollections & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationMethods;
}

/*********************************************
* AllowedDataLocationOData
**********************************************/
export interface AllowedDataLocationOData extends IBaseResult, AllowedDataLocationProps, AllowedDataLocationMethods {

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
export interface ICrossFarmGroupMoveJob extends CrossFarmGroupMoveJobCollections, CrossFarmGroupMoveJobMethods, IBaseQuery<ICrossFarmGroupMoveJobQuery> {

}

/*********************************************
* ICrossFarmGroupMoveJobCollection
**********************************************/
export interface ICrossFarmGroupMoveJobCollection extends IBaseResults<CrossFarmGroupMoveJob>, CrossFarmGroupMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<CrossFarmGroupMoveJob>) => void) => void;
}

/*********************************************
* ICrossFarmGroupMoveJobQueryCollection
**********************************************/
export interface ICrossFarmGroupMoveJobQueryCollection extends IBaseResults<CrossFarmGroupMoveJobOData>, CrossFarmGroupMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<CrossFarmGroupMoveJobOData>) => void) => void;
}

/*********************************************
* ICrossFarmGroupMoveJobQuery
**********************************************/
export interface ICrossFarmGroupMoveJobQuery extends CrossFarmGroupMoveJobOData, CrossFarmGroupMoveJobMethods {

}

/*********************************************
* CrossFarmGroupMoveJob
**********************************************/
export interface CrossFarmGroupMoveJob extends IBaseResult, CrossFarmGroupMoveJobProps, CrossFarmGroupMoveJobCollections, CrossFarmGroupMoveJobMethods {

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
	getByMoveId(moveId?: any): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJobMethods;
}

/*********************************************
* CrossFarmGroupMoveJobOData
**********************************************/
export interface CrossFarmGroupMoveJobOData extends IBaseResult, CrossFarmGroupMoveJobProps, CrossFarmGroupMoveJobMethods {

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
export interface ICrossFarmSiteMoveJob extends CrossFarmSiteMoveJobCollections, CrossFarmSiteMoveJobMethods, IBaseQuery<ICrossFarmSiteMoveJobQuery> {

}

/*********************************************
* ICrossFarmSiteMoveJobCollection
**********************************************/
export interface ICrossFarmSiteMoveJobCollection extends IBaseResults<CrossFarmSiteMoveJob>, CrossFarmSiteMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<CrossFarmSiteMoveJob>) => void) => void;
}

/*********************************************
* ICrossFarmSiteMoveJobQueryCollection
**********************************************/
export interface ICrossFarmSiteMoveJobQueryCollection extends IBaseResults<CrossFarmSiteMoveJobOData>, CrossFarmSiteMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<CrossFarmSiteMoveJobOData>) => void) => void;
}

/*********************************************
* ICrossFarmSiteMoveJobQuery
**********************************************/
export interface ICrossFarmSiteMoveJobQuery extends CrossFarmSiteMoveJobOData, CrossFarmSiteMoveJobMethods {

}

/*********************************************
* CrossFarmSiteMoveJob
**********************************************/
export interface CrossFarmSiteMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobEntityData, IBaseResult, CrossFarmSiteMoveJobProps, CrossFarmSiteMoveJobCollections, CrossFarmSiteMoveJobMethods {

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
	getByMoveId(moveId?: any): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobMethods;
}

/*********************************************
* CrossFarmSiteMoveJobOData
**********************************************/
export interface CrossFarmSiteMoveJobOData extends IBaseResult, CrossFarmSiteMoveJobProps, CrossFarmSiteMoveJobMethods {

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
export interface ICrossFarmUserMoveJob extends CrossFarmUserMoveJobCollections, CrossFarmUserMoveJobMethods, IBaseQuery<ICrossFarmUserMoveJobQuery> {

}

/*********************************************
* ICrossFarmUserMoveJobCollection
**********************************************/
export interface ICrossFarmUserMoveJobCollection extends IBaseResults<CrossFarmUserMoveJob>, CrossFarmUserMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<CrossFarmUserMoveJob>) => void) => void;
}

/*********************************************
* ICrossFarmUserMoveJobQueryCollection
**********************************************/
export interface ICrossFarmUserMoveJobQueryCollection extends IBaseResults<CrossFarmUserMoveJobOData>, CrossFarmUserMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<CrossFarmUserMoveJobOData>) => void) => void;
}

/*********************************************
* ICrossFarmUserMoveJobQuery
**********************************************/
export interface ICrossFarmUserMoveJobQuery extends CrossFarmUserMoveJobOData, CrossFarmUserMoveJobMethods {

}

/*********************************************
* CrossFarmUserMoveJob
**********************************************/
export interface CrossFarmUserMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobEntityData, IBaseResult, CrossFarmUserMoveJobProps, CrossFarmUserMoveJobCollections, CrossFarmUserMoveJobMethods {

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
	getByMoveId(moveId?: any): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobMethods;
}

/*********************************************
* CrossFarmUserMoveJobOData
**********************************************/
export interface CrossFarmUserMoveJobOData extends IBaseResult, CrossFarmUserMoveJobProps, CrossFarmUserMoveJobMethods {

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
export interface ICrossGeoTenantProperty extends CrossGeoTenantPropertyCollections, CrossGeoTenantPropertyMethods, IBaseQuery<ICrossGeoTenantPropertyQuery> {

}

/*********************************************
* ICrossGeoTenantPropertyCollection
**********************************************/
export interface ICrossGeoTenantPropertyCollection extends IBaseResults<CrossGeoTenantProperty>, CrossGeoTenantPropertyCollectionMethods {
	done?: (resolve: (value?: Array<CrossGeoTenantProperty>) => void) => void;
}

/*********************************************
* ICrossGeoTenantPropertyQueryCollection
**********************************************/
export interface ICrossGeoTenantPropertyQueryCollection extends IBaseResults<CrossGeoTenantPropertyOData>, CrossGeoTenantPropertyCollectionMethods {
	done?: (resolve: (value?: Array<CrossGeoTenantPropertyOData>) => void) => void;
}

/*********************************************
* ICrossGeoTenantPropertyQuery
**********************************************/
export interface ICrossGeoTenantPropertyQuery extends CrossGeoTenantPropertyOData, CrossGeoTenantPropertyMethods {

}

/*********************************************
* CrossGeoTenantProperty
**********************************************/
export interface CrossGeoTenantProperty extends Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyEntityData, IBaseResult, CrossGeoTenantPropertyProps, CrossGeoTenantPropertyCollections, CrossGeoTenantPropertyMethods {

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
	getByPropertyNameAndGeoLocation(propertyName?: string, geo?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyCollections & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyMethods;
	getChanges(startTimeInUtc?: any): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty>>;
}

/*********************************************
* CrossGeoTenantPropertyOData
**********************************************/
export interface CrossGeoTenantPropertyOData extends IBaseResult, CrossGeoTenantPropertyProps, CrossGeoTenantPropertyMethods {

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
export interface IGeoAdministrator extends GeoAdministratorCollections, GeoAdministratorMethods, IBaseQuery<IGeoAdministratorQuery> {

}

/*********************************************
* IGeoAdministratorCollection
**********************************************/
export interface IGeoAdministratorCollection extends IBaseResults<GeoAdministrator>, GeoAdministratorCollectionMethods {
	done?: (resolve: (value?: Array<GeoAdministrator>) => void) => void;
}

/*********************************************
* IGeoAdministratorQueryCollection
**********************************************/
export interface IGeoAdministratorQueryCollection extends IBaseResults<GeoAdministratorOData>, GeoAdministratorCollectionMethods {
	done?: (resolve: (value?: Array<GeoAdministratorOData>) => void) => void;
}

/*********************************************
* IGeoAdministratorQuery
**********************************************/
export interface IGeoAdministratorQuery extends GeoAdministratorOData, GeoAdministratorMethods {

}

/*********************************************
* GeoAdministrator
**********************************************/
export interface GeoAdministrator extends IBaseResult, GeoAdministratorProps, GeoAdministratorCollections, GeoAdministratorMethods {

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
	getByLoginName(loginName?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorMethods;
	getByLoginNameAndType(loginName?: string, memberType?: number): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorMethods;
	getByObjectId(objectId?: any): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorMethods;
}

/*********************************************
* GeoAdministratorOData
**********************************************/
export interface GeoAdministratorOData extends IBaseResult, GeoAdministratorProps, GeoAdministratorMethods {

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
export interface IGeoExperience extends GeoExperienceCollections, GeoExperienceMethods, IBaseQuery<IGeoExperienceQuery> {

}

/*********************************************
* IGeoExperienceCollection
**********************************************/
export interface IGeoExperienceCollection extends IBaseResults<GeoExperience> {
	done?: (resolve: (value?: Array<GeoExperience>) => void) => void;
}

/*********************************************
* IGeoExperienceQueryCollection
**********************************************/
export interface IGeoExperienceQueryCollection extends IBaseResults<GeoExperienceOData> {
	done?: (resolve: (value?: Array<GeoExperienceOData>) => void) => void;
}

/*********************************************
* IGeoExperienceQuery
**********************************************/
export interface IGeoExperienceQuery extends GeoExperienceOData, GeoExperienceMethods {

}

/*********************************************
* GeoExperience
**********************************************/
export interface GeoExperience extends IBaseResult, GeoExperienceProps, GeoExperienceCollections, GeoExperienceMethods {

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
* GeoExperienceOData
**********************************************/
export interface GeoExperienceOData extends IBaseResult, GeoExperienceProps, GeoExperienceMethods {

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
	getByGeoLocation(geoLocation?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformationCollections;
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
export interface IGroupMoveJob extends GroupMoveJobCollections, GroupMoveJobMethods, IBaseQuery<IGroupMoveJobQuery> {

}

/*********************************************
* IGroupMoveJobCollection
**********************************************/
export interface IGroupMoveJobCollection extends IBaseResults<GroupMoveJob>, GroupMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<GroupMoveJob>) => void) => void;
}

/*********************************************
* IGroupMoveJobQueryCollection
**********************************************/
export interface IGroupMoveJobQueryCollection extends IBaseResults<GroupMoveJobOData>, GroupMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<GroupMoveJobOData>) => void) => void;
}

/*********************************************
* IGroupMoveJobQuery
**********************************************/
export interface IGroupMoveJobQuery extends GroupMoveJobOData, GroupMoveJobMethods {

}

/*********************************************
* GroupMoveJob
**********************************************/
export interface GroupMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobEntityData, IBaseResult, GroupMoveJobProps, GroupMoveJobCollections, GroupMoveJobMethods {

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
	getByGroupName(groupname?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobMethods;
	getMoveReport(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob>>;
}

/*********************************************
* GroupMoveJobOData
**********************************************/
export interface GroupMoveJobOData extends IBaseResult, GroupMoveJobProps, GroupMoveJobMethods {

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
export interface IMultiGeoServicesBeta extends MultiGeoServicesBetaCollections, MultiGeoServicesBetaMethods, IBaseQuery<IMultiGeoServicesBetaQuery> {

}

/*********************************************
* IMultiGeoServicesBetaCollection
**********************************************/
export interface IMultiGeoServicesBetaCollection extends IBaseResults<MultiGeoServicesBeta> {
	done?: (resolve: (value?: Array<MultiGeoServicesBeta>) => void) => void;
}

/*********************************************
* IMultiGeoServicesBetaQueryCollection
**********************************************/
export interface IMultiGeoServicesBetaQueryCollection extends IBaseResults<MultiGeoServicesBetaOData> {
	done?: (resolve: (value?: Array<MultiGeoServicesBetaOData>) => void) => void;
}

/*********************************************
* IMultiGeoServicesBetaQuery
**********************************************/
export interface IMultiGeoServicesBetaQuery extends MultiGeoServicesBetaOData, MultiGeoServicesBetaMethods {

}

/*********************************************
* MultiGeoServicesBeta
**********************************************/
export interface MultiGeoServicesBeta extends IBaseResult, MultiGeoServicesBetaProps, MultiGeoServicesBetaCollections, MultiGeoServicesBetaMethods {

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
* MultiGeoServicesBetaOData
**********************************************/
export interface MultiGeoServicesBetaOData extends IBaseResult, MultiGeoServicesBetaProps, MultiGeoServicesBetaMethods {
	AllowedDataLocations: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocation> & Microsoft.Online.SharePoint.MultiGeo.Service.AllowedDataLocationCollectionMethods;
	ContentDbSchemaVersion: Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersion & Microsoft.Online.SharePoint.MultiGeo.Service.ContentDbSchemaVersionCollections;
	CrossFarmGroupMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmGroupMoveJobCollectionMethods;
	CrossFarmSiteMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmSiteMoveJobCollectionMethods;
	CrossFarmUserMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossFarmUserMoveJobCollectionMethods;
	CrossGeoTenantBYOK: Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOK & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantBYOKCollections;
	CrossGeoTenantCompatibility: Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibility & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantCompatibilityCollections;
	CrossGeoTenantProperties: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantProperty> & Microsoft.Online.SharePoint.MultiGeo.Service.CrossGeoTenantPropertyCollectionMethods;
	GeoAdministrators: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministrator> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoAdministratorCollectionMethods;
	GeoExperience: Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperience & Microsoft.Online.SharePoint.MultiGeo.Service.GeoExperienceCollections;
	GeoTenantInstanceInformationCollection: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformation> & Microsoft.Online.SharePoint.MultiGeo.Service.GeoTenantInstanceInformationCollectionMethods;
	GlobalAdminCheck: Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheck & Microsoft.Online.SharePoint.MultiGeo.Service.GlobalAdminCheckCollections;
	GroupMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.GroupMoveJobCollectionMethods;
	SiteMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobCollectionMethods;
	SiteRenameJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJobCollectionMethods;
	StorageQuotas: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota> & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaCollectionMethods;
	TaxonomyReplicationParameters: Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParameters & Microsoft.Online.SharePoint.MultiGeo.Service.TaxonomyReplicationParametersCollections;
	TenantInformationCollection: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.TenantInformation>;
	UnifiedGroups: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup> & Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroupCollectionMethods;
	UserMoveJobs: IBaseResults<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollectionMethods;
}

/*********************************************
* MultiGeoServicesBetaMethods
**********************************************/
export interface MultiGeoServicesBetaMethods {
	crossGeoCredentials(siteId?: any): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.GeoCredentials>;
	dBSchemaCompatibilityCheck(): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.DBSchemaCompatibilityCheck>;
	geoMoveCompatibilityChecks(): IBaseCollection<Microsoft.Online.SharePoint.MultiGeo.Service.GeoMoveTenantCompatibilityCheck>;
	userPersonalSiteId(userPrincipalName?: string): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.UserPersonalSiteId>;
	userPersonalSiteLocation(userPrincipalName?: string): IBaseExecution<Microsoft.Online.SharePoint.MultiGeo.Service.UserPersonalSiteLocation>;
}

/*********************************************
* ISiteMoveJob
**********************************************/
export interface ISiteMoveJob extends SiteMoveJobCollections, SiteMoveJobMethods, IBaseQuery<ISiteMoveJobQuery> {

}

/*********************************************
* ISiteMoveJobCollection
**********************************************/
export interface ISiteMoveJobCollection extends IBaseResults<SiteMoveJob>, SiteMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<SiteMoveJob>) => void) => void;
}

/*********************************************
* ISiteMoveJobQueryCollection
**********************************************/
export interface ISiteMoveJobQueryCollection extends IBaseResults<SiteMoveJobOData>, SiteMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<SiteMoveJobOData>) => void) => void;
}

/*********************************************
* ISiteMoveJobQuery
**********************************************/
export interface ISiteMoveJobQuery extends SiteMoveJobOData, SiteMoveJobMethods {

}

/*********************************************
* SiteMoveJob
**********************************************/
export interface SiteMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobEntityData, IBaseResult, SiteMoveJobProps, SiteMoveJobCollections, SiteMoveJobMethods {

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
	getByUrl(url?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJobMethods;
	getMoveReport(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.SiteMoveJob>>;
}

/*********************************************
* SiteMoveJobOData
**********************************************/
export interface SiteMoveJobOData extends IBaseResult, SiteMoveJobProps, SiteMoveJobMethods {

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
	getBySiteUrl(siteUrl?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJob> & Microsoft.Online.SharePoint.MultiGeo.Service.SiteRenameJobCollections;
}

/*********************************************
* IStorageQuota
**********************************************/
export interface IStorageQuota extends StorageQuotaCollections, StorageQuotaMethods, IBaseQuery<IStorageQuotaQuery> {

}

/*********************************************
* IStorageQuotaCollection
**********************************************/
export interface IStorageQuotaCollection extends IBaseResults<StorageQuota>, StorageQuotaCollectionMethods {
	done?: (resolve: (value?: Array<StorageQuota>) => void) => void;
}

/*********************************************
* IStorageQuotaQueryCollection
**********************************************/
export interface IStorageQuotaQueryCollection extends IBaseResults<StorageQuotaOData>, StorageQuotaCollectionMethods {
	done?: (resolve: (value?: Array<StorageQuotaOData>) => void) => void;
}

/*********************************************
* IStorageQuotaQuery
**********************************************/
export interface IStorageQuotaQuery extends StorageQuotaOData, StorageQuotaMethods {

}

/*********************************************
* StorageQuota
**********************************************/
export interface StorageQuota extends IBaseResult, StorageQuotaProps, StorageQuotaCollections, StorageQuotaMethods {

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
	getByLocation(geoLocation?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuota> & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaCollections & Microsoft.Online.SharePoint.MultiGeo.Service.StorageQuotaMethods;
}

/*********************************************
* StorageQuotaOData
**********************************************/
export interface StorageQuotaOData extends IBaseResult, StorageQuotaProps, StorageQuotaMethods {

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
export interface ITaxonomyReplicationParameters extends TaxonomyReplicationParametersCollections, TaxonomyReplicationParametersMethods, IBaseQuery<ITaxonomyReplicationParametersQuery> {

}

/*********************************************
* ITaxonomyReplicationParametersCollection
**********************************************/
export interface ITaxonomyReplicationParametersCollection extends IBaseResults<TaxonomyReplicationParameters> {
	done?: (resolve: (value?: Array<TaxonomyReplicationParameters>) => void) => void;
}

/*********************************************
* ITaxonomyReplicationParametersQueryCollection
**********************************************/
export interface ITaxonomyReplicationParametersQueryCollection extends IBaseResults<TaxonomyReplicationParametersOData> {
	done?: (resolve: (value?: Array<TaxonomyReplicationParametersOData>) => void) => void;
}

/*********************************************
* ITaxonomyReplicationParametersQuery
**********************************************/
export interface ITaxonomyReplicationParametersQuery extends TaxonomyReplicationParametersOData, TaxonomyReplicationParametersMethods {

}

/*********************************************
* TaxonomyReplicationParameters
**********************************************/
export interface TaxonomyReplicationParameters extends IBaseResult, TaxonomyReplicationParametersProps, TaxonomyReplicationParametersCollections, TaxonomyReplicationParametersMethods {

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
* TaxonomyReplicationParametersOData
**********************************************/
export interface TaxonomyReplicationParametersOData extends IBaseResult, TaxonomyReplicationParametersProps, TaxonomyReplicationParametersMethods {

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
	getByAlias(alias?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroup> & Microsoft.Online.SharePoint.MultiGeo.Service.UnifiedGroupCollections;
}

/*********************************************
* IUserMoveJob
**********************************************/
export interface IUserMoveJob extends UserMoveJobCollections, UserMoveJobMethods, IBaseQuery<IUserMoveJobQuery> {

}

/*********************************************
* IUserMoveJobCollection
**********************************************/
export interface IUserMoveJobCollection extends IBaseResults<UserMoveJob>, UserMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<UserMoveJob>) => void) => void;
}

/*********************************************
* IUserMoveJobQueryCollection
**********************************************/
export interface IUserMoveJobQueryCollection extends IBaseResults<UserMoveJobOData>, UserMoveJobCollectionMethods {
	done?: (resolve: (value?: Array<UserMoveJobOData>) => void) => void;
}

/*********************************************
* IUserMoveJobQuery
**********************************************/
export interface IUserMoveJobQuery extends UserMoveJobOData, UserMoveJobMethods {

}

/*********************************************
* UserMoveJob
**********************************************/
export interface UserMoveJob extends Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobEntityData, IBaseResult, UserMoveJobProps, UserMoveJobCollections, UserMoveJobMethods {

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
	getByDirection(direction?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobMethods;
	getByMoveId(odbMoveId?: any): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobMethods;
	getByUpn(upn?: string): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobMethods;
	getByValidPdl(validPdl?: boolean): IBaseQuery<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob> & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobCollections & Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJobMethods;
	getMoveReport(moveState?: number, moveDirection?: number, limit?: number, startTime?: any, endTime?: any): IBaseExecution<Array<Microsoft.Online.SharePoint.MultiGeo.Service.UserMoveJob>>;
}

/*********************************************
* UserMoveJobOData
**********************************************/
export interface UserMoveJobOData extends IBaseResult, UserMoveJobProps, UserMoveJobMethods {

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
