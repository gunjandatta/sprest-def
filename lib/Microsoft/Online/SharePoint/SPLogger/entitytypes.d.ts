import { IBaseExecution } from "../../../../";
import { IBaseQuery } from "../../../../";

/*********************************************
* ILogExport
**********************************************/
export interface ILogExport extends LogExportCollections,LogExportMethods,IBaseQuery<ILogExportQuery> {

}

/*********************************************
* ILogExportQuery
**********************************************/
export interface ILogExportQuery extends LogExportQuery,LogExportMethods {

}

/*********************************************
* LogExport
**********************************************/
export interface LogExport extends LogExportCollections, LogExportMethods {

}

/*********************************************
* LogExportProps
**********************************************/
export interface LogExportProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* LogExportPropMethods
**********************************************/
export interface LogExportPropMethods {

}

/*********************************************
* LogExportCollections
**********************************************/
export interface LogExportCollections extends LogExportProps, LogExportPropMethods {

}

/*********************************************
* LogExportQuery
**********************************************/
export interface LogExportQuery extends LogExportProps,LogExportMethods {

}

/*********************************************
* LogExportMethods
**********************************************/
export interface LogExportMethods {
	getFiles(partitionId?: string, logType?: string): IBaseExecution<Array<Microsoft.Online.SharePoint.SPLogger.LogFileInfo>>;
	getLogTypes(): IBaseExecution<Array<string>>;
	getPartitions(logType?: string): IBaseExecution<Array<string>>;
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

/*********************************************
* LogFileInfoCollections
**********************************************/
export interface LogFileInfoCollections {

}
