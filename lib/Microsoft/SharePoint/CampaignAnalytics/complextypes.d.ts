import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* DimensionsResponse
**********************************************/
export interface DimensionsResponse {
	application?: { results: Array<string> };
}

/*********************************************
* DimensionsResponseCollections
**********************************************/
export interface DimensionsResponseCollections {

}

/*********************************************
* ReportResponse
**********************************************/
export interface ReportResponse {
	dimensions?: { results: Array<Microsoft.SharePoint.CampaignAnalytics.VinciAnalyticsReportTableElement> };
	metrics?: { results: Array<Microsoft.SharePoint.CampaignAnalytics.VinciAnalyticsReportTableElement> };
	rows?: { results: Array<Microsoft.SharePoint.CampaignAnalytics.VinciAnalyticsReportTableRow> };
}

/*********************************************
* ReportResponseCollections
**********************************************/
export interface ReportResponseCollections {

}

/*********************************************
* VinciAnalyticsReportTableElement
**********************************************/
export interface VinciAnalyticsReportTableElement {
	name?: string;
}

/*********************************************
* VinciAnalyticsReportTableElementCollections
**********************************************/
export interface VinciAnalyticsReportTableElementCollections {

}

/*********************************************
* VinciAnalyticsReportTableRow
**********************************************/
export interface VinciAnalyticsReportTableRow {
	dimensionReport?: string;
	metricReport?: string;
}

/*********************************************
* VinciAnalyticsReportTableRowCollections
**********************************************/
export interface VinciAnalyticsReportTableRowCollections {

}

/*********************************************
* VinciAnalyticsDimensionsRequest
**********************************************/
export interface VinciAnalyticsDimensionsRequest {
	campaignId?: string;
}

/*********************************************
* VinciAnalyticsDimensionsRequestCollections
**********************************************/
export interface VinciAnalyticsDimensionsRequestCollections {

}

/*********************************************
* VinciAnalyticsReportRequest
**********************************************/
export interface VinciAnalyticsReportRequest {
	campaignId?: string;
	communicationId?: string;
	dimensions?: { results: Array<Microsoft.SharePoint.CampaignAnalytics.VinciAnalyticsReportTableElement> };
	metrics?: { results: Array<Microsoft.SharePoint.CampaignAnalytics.VinciAnalyticsReportTableElement> };
}

/*********************************************
* VinciAnalyticsReportRequestCollections
**********************************************/
export interface VinciAnalyticsReportRequestCollections {

}
