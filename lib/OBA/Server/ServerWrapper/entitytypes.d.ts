import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";

/*********************************************
* IDiagnostics
**********************************************/
export interface IDiagnostics extends DiagnosticsCollections,DiagnosticsMethods,IBaseQuery<IDiagnosticsQuery> {

}

/*********************************************
* IDiagnosticsQuery
**********************************************/
export interface IDiagnosticsQuery extends DiagnosticsQuery,DiagnosticsMethods {

}

/*********************************************
* Diagnostics
**********************************************/
export interface Diagnostics extends DiagnosticsCollections, DiagnosticsMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DiagnosticsProps
**********************************************/
export interface DiagnosticsProps {

}

/*********************************************
* DiagnosticsCollections
**********************************************/
export interface DiagnosticsCollections extends DiagnosticsProps {

}

/*********************************************
* DiagnosticsQuery
**********************************************/
export interface DiagnosticsQuery extends DiagnosticsProps {

}

/*********************************************
* DiagnosticsMethods
**********************************************/
export interface DiagnosticsMethods {
	status(): IBaseExecution<string>;
}

/*********************************************
* IReporting
**********************************************/
export interface IReporting extends ReportingCollections,ReportingMethods,IBaseQuery<IReportingQuery> {

}

/*********************************************
* IReportingQuery
**********************************************/
export interface IReportingQuery extends ReportingQuery,ReportingMethods {

}

/*********************************************
* Reporting
**********************************************/
export interface Reporting extends ReportingCollections, ReportingMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ReportingProps
**********************************************/
export interface ReportingProps {

}

/*********************************************
* ReportingCollections
**********************************************/
export interface ReportingCollections extends ReportingProps {

}

/*********************************************
* ReportingQuery
**********************************************/
export interface ReportingQuery extends ReportingProps {

}

/*********************************************
* ReportingMethods
**********************************************/
export interface ReportingMethods {
	publishReport(odataPostBodyStm?: any): IBaseExecution<any>;
}

/*********************************************
* ITaskflow
**********************************************/
export interface ITaskflow extends TaskflowCollections,TaskflowMethods,IBaseQuery<ITaskflowQuery> {

}

/*********************************************
* ITaskflowQuery
**********************************************/
export interface ITaskflowQuery extends TaskflowQuery,TaskflowMethods {

}

/*********************************************
* Taskflow
**********************************************/
export interface Taskflow extends TaskflowCollections, TaskflowMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TaskflowProps
**********************************************/
export interface TaskflowProps {

}

/*********************************************
* TaskflowCollections
**********************************************/
export interface TaskflowCollections extends TaskflowProps {

}

/*********************************************
* TaskflowQuery
**********************************************/
export interface TaskflowQuery extends TaskflowProps {

}

/*********************************************
* TaskflowMethods
**********************************************/
export interface TaskflowMethods {
	processTask(requestBodyStream?: any): IBaseExecution<any>;
}
