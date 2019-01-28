

/*********************************************
* Diagnostics
**********************************************/
export interface Diagnostics {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DiagnosticsMethods
**********************************************/
export interface DiagnosticsMethods {
	status<T=string>(): T;
}

/*********************************************
* Reporting
**********************************************/
export interface Reporting {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ReportingMethods
**********************************************/
export interface ReportingMethods {
	publishReport<T=void>(odataPostBodyStm?: any): T;
}

/*********************************************
* Taskflow
**********************************************/
export interface Taskflow {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TaskflowMethods
**********************************************/
export interface TaskflowMethods {
	processTask<T=void>(requestBodyStream?: any): T;
}
