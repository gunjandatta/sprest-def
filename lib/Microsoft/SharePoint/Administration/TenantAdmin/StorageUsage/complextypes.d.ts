import { Base } from "../../../../../";

/*********************************************
* StorageUsageMetricsSnapshot
**********************************************/
export interface StorageUsageMetricsSnapshot {
	ActiveSitesCount?: number;
	ActiveUsedStorageMB?: number;
	AllocationType?: number;
	ArchivedFilesUsedStorageMB?: number;
	ArchivedSitesCount?: number;
	ArchivedSitesUsedStorageMB?: number;
	AvailableFreeStorageMB?: number;
	GeoLocations?: { results: Array<string> };
	MetricsAggregationScope?: number;
	SnapshotDate?: any;
	TotalAvailableStorageMB?: number;
}

/*********************************************
* StorageUsageMetricsSnapshotCollections
**********************************************/
export interface StorageUsageMetricsSnapshotCollections {

}
