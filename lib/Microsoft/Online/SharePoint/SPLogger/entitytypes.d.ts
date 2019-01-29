

/*********************************************
* LogExport
**********************************************/
export interface LogExport {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* LogExportMethods
**********************************************/
export interface LogExportMethods {
	getFiles<T=Array<Microsoft.Online.SharePoint.SPLogger.LogFileInfo>>(partitionId?: string, logType?: string): T;
	getLogTypes<T=Array<string>>(): T;
	getPartitions<T=Array<string>>(logType?: string): T;
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
