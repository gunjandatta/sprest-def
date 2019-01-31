import { IBaseExecution } from "../../../";

/*********************************************
* IDiagnostics
**********************************************/
export interface IDiagnostics extends DiagnosticsProps,DiagnosticsMethods,IBaseExecution<Diagnostics> {

}

/*********************************************
* Diagnostics
**********************************************/
export interface Diagnostics extends DiagnosticsProps, DiagnosticsMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DiagnosticsProps
**********************************************/
export interface DiagnosticsProps {

}

/*********************************************
* DiagnosticsMethods
**********************************************/
export interface DiagnosticsMethods {
	status<T=string>(): IBaseExecution<T>;
}

/*********************************************
* IReporting
**********************************************/
export interface IReporting extends ReportingProps,ReportingMethods,IBaseExecution<Reporting> {

}

/*********************************************
* Reporting
**********************************************/
export interface Reporting extends ReportingProps, ReportingMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ReportingProps
**********************************************/
export interface ReportingProps {

}

/*********************************************
* ReportingMethods
**********************************************/
export interface ReportingMethods {
	publishReport<T=any>(odataPostBodyStm?: any): IBaseExecution<T>;
}

/*********************************************
* ITaskflow
**********************************************/
export interface ITaskflow extends TaskflowProps,TaskflowMethods,IBaseExecution<Taskflow> {

}

/*********************************************
* Taskflow
**********************************************/
export interface Taskflow extends TaskflowProps, TaskflowMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TaskflowProps
**********************************************/
export interface TaskflowProps {

}

/*********************************************
* TaskflowMethods
**********************************************/
export interface TaskflowMethods {
	processTask<T=any>(requestBodyStream?: any): IBaseExecution<T>;
}
