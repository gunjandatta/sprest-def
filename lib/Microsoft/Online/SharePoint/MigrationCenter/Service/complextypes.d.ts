import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* MigrationProperty
**********************************************/
export interface MigrationProperty {
	key?: string;
	updatedTimeUtc?: any;
	value?: string;
}

/*********************************************
* MigrationPropertyCollections
**********************************************/
export interface MigrationPropertyCollections {

}

/*********************************************
* PerformanceDashboardData
**********************************************/
export interface PerformanceDashboardData {
	BottleneckList?: Array<string>;
	RecommendationList?: Array<string>;
	ThroughputTrend?: Array<Microsoft.Online.SharePoint.MigrationCenter.Service.ThroughputData>;
}

/*********************************************
* PerformanceDashboardDataCollections
**********************************************/
export interface PerformanceDashboardDataCollections {

}

/*********************************************
* ThroughputData
**********************************************/
export interface ThroughputData {
	Bytes?: number;
	EndTime?: any;
	Files?: number;
	StartTime?: any;
}

/*********************************************
* ThroughputDataCollections
**********************************************/
export interface ThroughputDataCollections {

}
