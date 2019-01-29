

/*********************************************
* Diagnostics
**********************************************/
export interface Diagnostics {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DiagnosticsMethods<T = any>
**********************************************/
export interface DiagnosticsMethods<T = any> {
	status(): T;
}

/*********************************************
* Reporting
**********************************************/
export interface Reporting {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ReportingMethods<T = any>
**********************************************/
export interface ReportingMethods<T = any> {
	publishReport(odataPostBodyStm?: any): T;
}

/*********************************************
* Taskflow
**********************************************/
export interface Taskflow {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TaskflowMethods<T = any>
**********************************************/
export interface TaskflowMethods<T = any> {
	processTask(requestBodyStream?: any): T;
}
