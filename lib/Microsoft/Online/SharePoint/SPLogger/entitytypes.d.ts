import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* ILogExport
**********************************************/
export interface ILogExport extends LogExportCollections, LogExportMethods, IBaseQuery<ILogExportQuery> {

}

/*********************************************
* ILogExportCollection
**********************************************/
export interface ILogExportCollection extends IBaseResults<LogExport> {
	done?: (resolve: (value?: Array<LogExport>) => void) => void;
}

/*********************************************
* ILogExportQueryCollection
**********************************************/
export interface ILogExportQueryCollection extends IBaseResults<LogExportQuery> {
	done?: (resolve: (value?: Array<LogExportQuery>) => void) => void;
}

/*********************************************
* ILogExportQuery
**********************************************/
export interface ILogExportQuery extends LogExportQuery, LogExportMethods {

}

/*********************************************
* LogExport
**********************************************/
export interface LogExport extends IBaseResult, LogExportProps, LogExportCollections, LogExportMethods {

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
export interface LogExportCollections extends LogExportPropMethods {

}

/*********************************************
* LogExportQuery
**********************************************/
export interface LogExportQuery extends IBaseResult, LogExportProps, LogExportMethods {

}

/*********************************************
* LogExportMethods
**********************************************/
export interface LogExportMethods {
	getFiles(partitionId?: string, logType?: string): IBaseCollection<Microsoft.Online.SharePoint.SPLogger.LogFileInfo>;
	getLogTypes(): IBaseCollection<string>;
	getPartitions(logType?: string): IBaseCollection<string>;
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
