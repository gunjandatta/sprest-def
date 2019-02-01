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

}

/*********************************************
* DiagnosticsProps
**********************************************/
export interface DiagnosticsProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DiagnosticsPropMethods
**********************************************/
export interface DiagnosticsPropMethods {

}

/*********************************************
* DiagnosticsCollections
**********************************************/
export interface DiagnosticsCollections extends DiagnosticsProps, DiagnosticsPropMethods {

}

/*********************************************
* DiagnosticsQuery
**********************************************/
export interface DiagnosticsQuery extends DiagnosticsProps,DiagnosticsMethods {

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

}

/*********************************************
* ReportingProps
**********************************************/
export interface ReportingProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ReportingPropMethods
**********************************************/
export interface ReportingPropMethods {

}

/*********************************************
* ReportingCollections
**********************************************/
export interface ReportingCollections extends ReportingProps, ReportingPropMethods {

}

/*********************************************
* ReportingQuery
**********************************************/
export interface ReportingQuery extends ReportingProps,ReportingMethods {

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

}

/*********************************************
* TaskflowProps
**********************************************/
export interface TaskflowProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TaskflowPropMethods
**********************************************/
export interface TaskflowPropMethods {

}

/*********************************************
* TaskflowCollections
**********************************************/
export interface TaskflowCollections extends TaskflowProps, TaskflowPropMethods {

}

/*********************************************
* TaskflowQuery
**********************************************/
export interface TaskflowQuery extends TaskflowProps,TaskflowMethods {

}

/*********************************************
* TaskflowMethods
**********************************************/
export interface TaskflowMethods {
	processTask(requestBodyStream?: any): IBaseExecution<any>;
}
