

/*********************************************
* LogExport
**********************************************/
export interface LogExport {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* LogExportMethods<T = any>
**********************************************/
export interface LogExportMethods<T = any> {
	getFiles(partitionId?: string, logType?: string): T;
	getLogTypes(): T;
	getPartitions(logType?: string): T;
}

/*********************************************
* LogFileInfo
**********************************************/
export interface LogFileInfo {
	AlternateUrl?: string;
	DecryptionIV?: any;
	DecryptionKey?: any;
	Exception?: string;
	FileName?: string;
	Url?: string;
}
