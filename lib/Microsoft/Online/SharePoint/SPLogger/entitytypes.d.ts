import { IBaseExecution } from "../../../../";

/*********************************************
* ILogExport
**********************************************/
export interface ILogExport extends LogExportProps,LogExportMethods,IBaseExecution<LogExport> {

}

/*********************************************
* LogExport
**********************************************/
export interface LogExport extends LogExportProps, LogExportMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* LogExportProps
**********************************************/
export interface LogExportProps {

}

/*********************************************
* LogExportMethods
**********************************************/
export interface LogExportMethods {
	getFiles<T=Array<Microsoft.Online.SharePoint.SPLogger.LogFileInfo>>(partitionId?: string, logType?: string): IBaseExecution<T>;
	getLogTypes<T=Array<string>>(): IBaseExecution<T>;
	getPartitions<T=Array<string>>(logType?: string): IBaseExecution<T>;
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
