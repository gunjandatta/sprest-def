import { Base } from "../../../../../";
import { SP } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* ISiteMoveService
**********************************************/
export interface ISiteMoveService extends SiteMoveServiceCollections, SiteMoveServiceMethods, Base.IBaseQuery<SiteMoveService, ISiteMoveServiceQuery> {

}

/*********************************************
* ISiteMoveServiceCollection
**********************************************/
export interface ISiteMoveServiceCollection extends Base.IBaseResults<SiteMoveService> {
	done?: (resolve: (value?: Array<SiteMoveService>) => void) => void;
}

/*********************************************
* ISiteMoveServiceQueryCollection
**********************************************/
export interface ISiteMoveServiceQueryCollection extends Base.IBaseResults<SiteMoveServiceOData> {
	done?: (resolve: (value?: Array<SiteMoveServiceOData>) => void) => void;
}

/*********************************************
* ISiteMoveServiceQuery
**********************************************/
export interface ISiteMoveServiceQuery extends SiteMoveServiceOData, SiteMoveServiceMethods {

}

/*********************************************
* SiteMoveService
**********************************************/
export interface SiteMoveService extends Base.IBaseResult, SiteMoveServiceProps, SiteMoveServiceCollections, SiteMoveServiceMethods {

}

/*********************************************
* SiteMoveServiceProps
**********************************************/
export interface SiteMoveServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteMoveServicePropMethods
**********************************************/
export interface SiteMoveServicePropMethods {

}

/*********************************************
* SiteMoveServiceCollections
**********************************************/
export interface SiteMoveServiceCollections extends SiteMoveServicePropMethods {

}

/*********************************************
* SiteMoveServiceOData
**********************************************/
export interface SiteMoveServiceOData extends Base.IBaseResult, SiteMoveServiceProps, SiteMoveServiceMethods {

}

/*********************************************
* SiteMoveServiceMethods
**********************************************/
export interface SiteMoveServiceMethods {
	acquireSystemSiteLock(lockRequestor?: string, lockType?: any, leaseDurationInMinutes?: number): Base.IBaseExecution<SP.SystemSiteLockExpirationResult>;
	clearState(): Base.IBaseExecution<any>;
	extendSystemSiteLockExpiration(leaseDurationInMinute?: number): Base.IBaseExecution<SP.SystemSiteLockExpirationResult>;
	getChecksumForTable(schemaName?: string, tableName?: string, partitionColumnName?: string, columnsToChecksum?: Array<string>): Base.IBaseExecution<number>;
	getDatabaseProperties(): Base.IBaseExecution<string>;
	getDataReader(sqlCommandText?: string): Base.IBaseExecution<string>;
	getMarker(): Base.IBaseExecution<string>;
	getRowCountForTable(schemaName?: string, tableName?: string, partitionColumnName?: string): Base.IBaseExecution<number>;
	getScalarValue(sqlCommandText?: string): Base.IBaseExecution<number>;
	getServiceInfo(): Base.IBaseExecution<Microsoft.SharePoint.Administration.SiteMove.Service.SiteMoveServiceInfo>;
	getSiteProperties(): Base.IBaseExecution<string>;
	getTenantWorkflows(): Base.IBaseCollection<string>;
	isDbReadOnly(): Base.IBaseExecution<boolean>;
	isSystemSiteLocked(lockRequestor?: string): Base.IBaseExecution<boolean>;
	processStorageMetricsChanges(): Base.IBaseExecution<any>;
	releaseSystemSiteLock(lockRequestor?: string): Base.IBaseExecution<number>;
	sourceCleanupAfterMove(isDeleted?: boolean): Base.IBaseExecution<any>;
}

/*********************************************
* ISiteRelocationJobManagementService
**********************************************/
export interface ISiteRelocationJobManagementService extends SiteRelocationJobManagementServiceCollections, SiteRelocationJobManagementServiceMethods, Base.IBaseQuery<SiteRelocationJobManagementService, ISiteRelocationJobManagementServiceQuery> {

}

/*********************************************
* ISiteRelocationJobManagementServiceCollection
**********************************************/
export interface ISiteRelocationJobManagementServiceCollection extends Base.IBaseResults<SiteRelocationJobManagementService> {
	done?: (resolve: (value?: Array<SiteRelocationJobManagementService>) => void) => void;
}

/*********************************************
* ISiteRelocationJobManagementServiceQueryCollection
**********************************************/
export interface ISiteRelocationJobManagementServiceQueryCollection extends Base.IBaseResults<SiteRelocationJobManagementServiceOData> {
	done?: (resolve: (value?: Array<SiteRelocationJobManagementServiceOData>) => void) => void;
}

/*********************************************
* ISiteRelocationJobManagementServiceQuery
**********************************************/
export interface ISiteRelocationJobManagementServiceQuery extends SiteRelocationJobManagementServiceOData, SiteRelocationJobManagementServiceMethods {

}

/*********************************************
* SiteRelocationJobManagementService
**********************************************/
export interface SiteRelocationJobManagementService extends Base.IBaseResult, SiteRelocationJobManagementServiceProps, SiteRelocationJobManagementServiceCollections, SiteRelocationJobManagementServiceMethods {

}

/*********************************************
* SiteRelocationJobManagementServiceProps
**********************************************/
export interface SiteRelocationJobManagementServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteRelocationJobManagementServicePropMethods
**********************************************/
export interface SiteRelocationJobManagementServicePropMethods {

}

/*********************************************
* SiteRelocationJobManagementServiceCollections
**********************************************/
export interface SiteRelocationJobManagementServiceCollections extends SiteRelocationJobManagementServicePropMethods {

}

/*********************************************
* SiteRelocationJobManagementServiceOData
**********************************************/
export interface SiteRelocationJobManagementServiceOData extends Base.IBaseResult, SiteRelocationJobManagementServiceProps, SiteRelocationJobManagementServiceMethods {

}

/*********************************************
* SiteRelocationJobManagementServiceMethods
**********************************************/
export interface SiteRelocationJobManagementServiceMethods {
	enqueueSiteRelocationJob(siteId?: any, siteSubscriptionId?: any, siteUrl?: string, sourceDatabaseId?: any, targetDatabaseId?: any, siteMoveFlags?: number, preferredStartTimeInUtc?: any): Base.IBaseExecution<any>;
	getServiceInfo(): Base.IBaseExecution<Microsoft.SharePoint.Administration.SiteMove.Service.SiteRelocationJobManagementServiceInfo>;
}
