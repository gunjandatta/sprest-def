import { IBaseExecution } from "../../../../../";
import { IBaseQuery } from "../../../../../";

/*********************************************
* IDocumentCrawlLog
**********************************************/
export interface IDocumentCrawlLog extends DocumentCrawlLogCollections,DocumentCrawlLogMethods,IBaseQuery<IDocumentCrawlLogQuery> {

}

/*********************************************
* IDocumentCrawlLogCollection
**********************************************/
export interface IDocumentCrawlLogCollection extends IBaseResults<DocumentCrawlLog> {

}

/*********************************************
* IDocumentCrawlLogQueryCollection
**********************************************/
export interface IDocumentCrawlLogQueryCollection extends IBaseResults<DocumentCrawlLogQuery> {

}

/*********************************************
* IDocumentCrawlLogQuery
**********************************************/
export interface IDocumentCrawlLogQuery extends DocumentCrawlLogQuery, DocumentCrawlLogMethods {

}

/*********************************************
* DocumentCrawlLog
**********************************************/
export interface DocumentCrawlLog extends DocumentCrawlLogProps, DocumentCrawlLogCollections, DocumentCrawlLogMethods {

}

/*********************************************
* DocumentCrawlLogProps
**********************************************/
export interface DocumentCrawlLogProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentCrawlLogPropMethods
**********************************************/
export interface DocumentCrawlLogPropMethods {

}

/*********************************************
* DocumentCrawlLogCollections
**********************************************/
export interface DocumentCrawlLogCollections extends DocumentCrawlLogPropMethods {

}

/*********************************************
* DocumentCrawlLogQuery
**********************************************/
export interface DocumentCrawlLogQuery extends DocumentCrawlLogProps, DocumentCrawlLogMethods {

}

/*********************************************
* DocumentCrawlLogMethods
**********************************************/
export interface DocumentCrawlLogMethods {
	getCrawledUrls(getCountOnly?: boolean, maxRows?: number, queryString?: string, isLike?: boolean, contentSourceID?: number, errorLevel?: number, errorID?: number, startDateTime?: any, endDateTime?: any): IBaseExecution<SP.SimpleDataTable>;
}
