import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* ISPTenantIBInsightsReportManager
**********************************************/
export interface ISPTenantIBInsightsReportManager extends SPTenantIBInsightsReportManagerCollections, SPTenantIBInsightsReportManagerMethods, Base.IBaseQuery<SPTenantIBInsightsReportManager, ISPTenantIBInsightsReportManagerQuery> {

}

/*********************************************
* ISPTenantIBInsightsReportManagerCollection
**********************************************/
export interface ISPTenantIBInsightsReportManagerCollection extends Base.IBaseResults<SPTenantIBInsightsReportManager> {
	done?: (resolve: (value?: Array<SPTenantIBInsightsReportManager>) => void) => void;
}

/*********************************************
* ISPTenantIBInsightsReportManagerQueryCollection
**********************************************/
export interface ISPTenantIBInsightsReportManagerQueryCollection extends Base.IBaseResults<SPTenantIBInsightsReportManagerOData> {
	done?: (resolve: (value?: Array<SPTenantIBInsightsReportManagerOData>) => void) => void;
}

/*********************************************
* ISPTenantIBInsightsReportManagerQuery
**********************************************/
export interface ISPTenantIBInsightsReportManagerQuery extends SPTenantIBInsightsReportManagerOData, SPTenantIBInsightsReportManagerMethods {

}

/*********************************************
* SPTenantIBInsightsReportManager
**********************************************/
export interface SPTenantIBInsightsReportManager extends Base.IBaseResult, SPTenantIBInsightsReportManagerProps, SPTenantIBInsightsReportManagerCollections, SPTenantIBInsightsReportManagerMethods {

}

/*********************************************
* SPTenantIBInsightsReportManagerProps
**********************************************/
export interface SPTenantIBInsightsReportManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPTenantIBInsightsReportManagerPropMethods
**********************************************/
export interface SPTenantIBInsightsReportManagerPropMethods {

}

/*********************************************
* SPTenantIBInsightsReportManagerCollections
**********************************************/
export interface SPTenantIBInsightsReportManagerCollections extends SPTenantIBInsightsReportManagerPropMethods {

}

/*********************************************
* SPTenantIBInsightsReportManagerOData
**********************************************/
export interface SPTenantIBInsightsReportManagerOData extends Base.IBaseResult, SPTenantIBInsightsReportManagerProps, SPTenantIBInsightsReportManagerMethods {

}

/*********************************************
* SPTenantIBInsightsReportManagerMethods
**********************************************/
export interface SPTenantIBInsightsReportManagerMethods {
	createReport(): Base.IBaseExecution<Microsoft.SharePoint.Insights.SPTenantIBInsightsReportMetadata>;
	getAllReportsMetadata(): Base.IBaseCollection<Microsoft.SharePoint.Insights.SPTenantIBInsightsReportMetadata>;
	getReport(reportId?: any, siteType?: string): Base.IBaseExecution<Microsoft.SharePoint.Insights.SPTenantIBInsightsReport>;
	getReportData(reportId?: any, siteType?: string, section?: string): Base.IBaseCollection<string>;
}

/*********************************************
* SPTenantIBInsightsReportMetadata
**********************************************/
export interface SPTenantIBInsightsReportMetadata {
	CompleteTimeInUtc?: any;
	Id?: any;
	QueuedTimeInUtc?: any;
	StartTimeInUtc?: any;
	State?: string;
}

/*********************************************
* SPTenantIBInsightsReportMetadataCollections
**********************************************/
export interface SPTenantIBInsightsReportMetadataCollections {

}

/*********************************************
* SPTenantIBInsightsReport
**********************************************/
export interface SPTenantIBInsightsReport {
	Explicit?: { results: Array<string> };
	ModeDistribution?: { results: Array<string> };
	Open?: { results: Array<string> };
	OwnerModerated?: { results: Array<string> };
}

/*********************************************
* SPTenantIBInsightsReportCollections
**********************************************/
export interface SPTenantIBInsightsReportCollections {

}

/*********************************************
* SPTenantIBInsightsReportOneDrive
**********************************************/
export interface SPTenantIBInsightsReportOneDrive {
	Mixed?: { results: Array<string> };
}

/*********************************************
* SPTenantIBInsightsReportOneDriveCollections
**********************************************/
export interface SPTenantIBInsightsReportOneDriveCollections {

}

/*********************************************
* SPTenantIBInsightsReportSharePoint
**********************************************/
export interface SPTenantIBInsightsReportSharePoint {
	Implicit?: { results: Array<string> };
}

/*********************************************
* SPTenantIBInsightsReportSharePointCollections
**********************************************/
export interface SPTenantIBInsightsReportSharePointCollections {

}
