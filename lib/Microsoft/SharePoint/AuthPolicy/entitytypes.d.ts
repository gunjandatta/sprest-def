import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* SPTenantIBPolicyComplianceReportEntityData
**********************************************/
export interface SPTenantIBPolicyComplianceReportEntityData {
	UpdateOneDriveSegments?: boolean;
}

/*********************************************
* SPTenantIBPolicyComplianceReportEntityDataCollections
**********************************************/
export interface SPTenantIBPolicyComplianceReportEntityDataCollections {

}

/*********************************************
* SPTenantIBPolicyComplianceReport
**********************************************/
export interface SPTenantIBPolicyComplianceReport {
	CompleteTimeInUtc?: any;
	Content?: { results: Array<string> };
	DownloadReportFilePath?: string;
	Id?: any;
	IncompatibleSegmentsPairsContent?: { results: Array<string> };
	InvalidSegmentsContent?: { results: Array<string> };
	QueuedTimeInUtc?: any;
	StartTimeInUtc?: any;
	State?: string;
}

/*********************************************
* SPTenantIBPolicyComplianceReportCollections
**********************************************/
export interface SPTenantIBPolicyComplianceReportCollections extends SPTenantIBPolicyComplianceReportCollectionMethods {

}

/*********************************************
* SPTenantIBPolicyComplianceReportCollectionMethods
**********************************************/
export interface SPTenantIBPolicyComplianceReportCollectionMethods {
	getAllReportStates(): Base.IBaseExecution<Array<Microsoft.SharePoint.AuthPolicy.SPTenantIBPolicyComplianceReport>>;
	getReportById(ReportId?: any, ShowIncompatibleSegmentsPairsAndInvalidSegmentsFilesContents?: boolean): Base.IBaseExecution<Microsoft.SharePoint.AuthPolicy.SPTenantIBPolicyComplianceReport>;
	removeFinalizedReport(ReportId?: any): Base.IBaseExecution<any>;
}
