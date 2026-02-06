import { Base } from "../../../../../";
import { SP } from "../../../../../";

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
	areAnyTablesTooLarge(threshold?: number): Base.IBaseExecution<string>;
	checkSPSiteContentDatabase(siteId?: any): Base.IBaseExecution<boolean>;
	clearSiteRelocationMarker(): Base.IBaseExecution<any>;
	commitSessionToken(): Base.IBaseExecution<any>;
	extendSystemSiteLockExpiration(leaseDurationInMinute?: number): Base.IBaseExecution<SP.SystemSiteLockExpirationResult>;
	getCPSChangeToken(): Base.IBaseExecution<number>;
	getCPSSiteDeleteReason(): Base.IBaseExecution<number>;
	getDatabaseProperties(): Base.IBaseExecution<string>;
	getDataChunk(tableName?: string, schemaName?: string): Base.IBaseExecution<string>;
	getDataChunks(): Base.IBaseExecution<string>;
	getDataChunksIterator(): Base.IBaseExecution<string>;
	getDataReader(sqlCommandText?: string): Base.IBaseExecution<string>;
	getDBActivities(): Base.IBaseExecution<string>;
	getEventCacheDataChunk(lastCopiedId?: number, searchChangeToken?: number): Base.IBaseExecution<string>;
	getEventCacheExColumns(): Base.IBaseExecution<string>;
	getEventCacheExDataChunk(lastCopiedId?: number): Base.IBaseExecution<string>;
	getEventCacheIds(lastCopiedId?: number): Base.IBaseExecution<string>;
	getFarmProperties(): Base.IBaseExecution<string>;
	getMarker(): Base.IBaseExecution<string>;
	getScalarValue(sqlCommandText?: string): Base.IBaseExecution<number>;
	getServiceVersion(): Base.IBaseExecution<number>;
	getSiteMoveState(): Base.IBaseExecution<string>;
	getSiteProperties(): Base.IBaseExecution<string>;
	getSiteRelocationCompatibleSchemaVersion(): Base.IBaseExecution<string>;
	getSPDeletedSiteRelocationStatus(checkLockTime?: boolean): Base.IBaseExecution<string>;
	getTenantWorkflows(): Base.IBaseCollection<string>;
	getValidationChunks(): Base.IBaseExecution<string>;
	getWorkItem(): Base.IBaseExecution<string>;
	isDbReadOnly(): Base.IBaseExecution<boolean>;
	isSystemSiteLocked(lockRequestor?: string): Base.IBaseExecution<boolean>;
	lockSite(): Base.IBaseExecution<number>;
	pauseCrawling(originalCPSDeleteReason?: number): Base.IBaseExecution<any>;
	processStorageMetricsChanges(): Base.IBaseExecution<any>;
	pulseHeartbeat(): Base.IBaseExecution<any>;
	releaseSystemSiteLock(lockRequestor?: string): Base.IBaseExecution<number>;
	removeSiteMapEntry(): Base.IBaseExecution<any>;
	removeSiteMapEntry_ClearCache(sitePath?: string): Base.IBaseExecution<any>;
	resumeCrawling(originalCPSDeleteReason?: number): Base.IBaseExecution<any>;
	setSiteMoveState(state?: number): Base.IBaseExecution<any>;
	sourceCleanupAfterMove(isDeleted?: boolean): Base.IBaseExecution<any>;
	startLockableSession(): Base.IBaseExecution<any>;
	startSnapshotIsolation(): Base.IBaseExecution<any>;
	stopSessionToken(): Base.IBaseExecution<any>;
	unlockSiteOnFailure(originalLockFlags?: number): Base.IBaseExecution<any>;
	updateAbsBlobDates(): Base.IBaseExecution<any>;
}
