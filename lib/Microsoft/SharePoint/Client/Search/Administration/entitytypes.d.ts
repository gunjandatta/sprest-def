import { IBaseExecution } from "../../../../../";
import { IBaseQuery } from "../../../../../";

/*********************************************
* IDocumentCrawlLog
**********************************************/
export interface IDocumentCrawlLog extends DocumentCrawlLogCollections,DocumentCrawlLogMethods,IBaseQuery<IDocumentCrawlLogQuery> {

}

/*********************************************
* IDocumentCrawlLogQuery
**********************************************/
export interface IDocumentCrawlLogQuery extends DocumentCrawlLogQuery,DocumentCrawlLogMethods {

}

/*********************************************
* DocumentCrawlLog
**********************************************/
export interface DocumentCrawlLog extends DocumentCrawlLogCollections, DocumentCrawlLogMethods {

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
export interface DocumentCrawlLogCollections extends DocumentCrawlLogProps, DocumentCrawlLogPropMethods {

}

/*********************************************
* DocumentCrawlLogQuery
**********************************************/
export interface DocumentCrawlLogQuery extends DocumentCrawlLogProps,DocumentCrawlLogMethods {

}

/*********************************************
* DocumentCrawlLogMethods
**********************************************/
export interface DocumentCrawlLogMethods {
	getCrawledUrls(getCountOnly?: boolean, maxRows?: number, queryString?: string, isLike?: boolean, contentSourceID?: number, errorLevel?: number, errorID?: number, startDateTime?: any, endDateTime?: any): IBaseExecution<SP.SimpleDataTable>;
}
