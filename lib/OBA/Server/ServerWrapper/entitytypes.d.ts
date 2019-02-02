import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../";

/*********************************************
* IDiagnostics
**********************************************/
export interface IDiagnostics extends DiagnosticsCollections, DiagnosticsMethods, IBaseQuery<IDiagnosticsQuery> {

}

/*********************************************
* IDiagnosticsCollection
**********************************************/
export interface IDiagnosticsCollection extends IBaseResults<Diagnostics> {
	done?: (resolve: (value?: Array<Diagnostics>) => void) => void;
}

/*********************************************
* IDiagnosticsQueryCollection
**********************************************/
export interface IDiagnosticsQueryCollection extends IBaseResults<DiagnosticsOData> {
	done?: (resolve: (value?: Array<DiagnosticsOData>) => void) => void;
}

/*********************************************
* IDiagnosticsQuery
**********************************************/
export interface IDiagnosticsQuery extends DiagnosticsOData, DiagnosticsMethods {

}

/*********************************************
* Diagnostics
**********************************************/
export interface Diagnostics extends IBaseResult, DiagnosticsProps, DiagnosticsCollections, DiagnosticsMethods {

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
export interface DiagnosticsCollections extends DiagnosticsPropMethods {

}

/*********************************************
* DiagnosticsOData
**********************************************/
export interface DiagnosticsOData extends IBaseResult, DiagnosticsProps, DiagnosticsMethods {

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
export interface IReporting extends ReportingCollections, ReportingMethods, IBaseQuery<IReportingQuery> {

}

/*********************************************
* IReportingCollection
**********************************************/
export interface IReportingCollection extends IBaseResults<Reporting> {
	done?: (resolve: (value?: Array<Reporting>) => void) => void;
}

/*********************************************
* IReportingQueryCollection
**********************************************/
export interface IReportingQueryCollection extends IBaseResults<ReportingOData> {
	done?: (resolve: (value?: Array<ReportingOData>) => void) => void;
}

/*********************************************
* IReportingQuery
**********************************************/
export interface IReportingQuery extends ReportingOData, ReportingMethods {

}

/*********************************************
* Reporting
**********************************************/
export interface Reporting extends IBaseResult, ReportingProps, ReportingCollections, ReportingMethods {

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
export interface ReportingCollections extends ReportingPropMethods {

}

/*********************************************
* ReportingOData
**********************************************/
export interface ReportingOData extends IBaseResult, ReportingProps, ReportingMethods {

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
export interface ITaskflow extends TaskflowCollections, TaskflowMethods, IBaseQuery<ITaskflowQuery> {

}

/*********************************************
* ITaskflowCollection
**********************************************/
export interface ITaskflowCollection extends IBaseResults<Taskflow> {
	done?: (resolve: (value?: Array<Taskflow>) => void) => void;
}

/*********************************************
* ITaskflowQueryCollection
**********************************************/
export interface ITaskflowQueryCollection extends IBaseResults<TaskflowOData> {
	done?: (resolve: (value?: Array<TaskflowOData>) => void) => void;
}

/*********************************************
* ITaskflowQuery
**********************************************/
export interface ITaskflowQuery extends TaskflowOData, TaskflowMethods {

}

/*********************************************
* Taskflow
**********************************************/
export interface Taskflow extends IBaseResult, TaskflowProps, TaskflowCollections, TaskflowMethods {

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
export interface TaskflowCollections extends TaskflowPropMethods {

}

/*********************************************
* TaskflowOData
**********************************************/
export interface TaskflowOData extends IBaseResult, TaskflowProps, TaskflowMethods {

}

/*********************************************
* TaskflowMethods
**********************************************/
export interface TaskflowMethods {
	processTask(requestBodyStream?: any): IBaseExecution<any>;
}
