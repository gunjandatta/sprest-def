import { IBaseExecution } from "../../../../../";

/*********************************************
* IDocumentCrawlLog
**********************************************/
export interface IDocumentCrawlLog extends DocumentCrawlLogProps,DocumentCrawlLogMethods,IBaseExecution<DocumentCrawlLog> {

}

/*********************************************
* DocumentCrawlLog
**********************************************/
export interface DocumentCrawlLog extends DocumentCrawlLogProps, DocumentCrawlLogMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentCrawlLogProps
**********************************************/
export interface DocumentCrawlLogProps {

}

/*********************************************
* DocumentCrawlLogMethods
**********************************************/
export interface DocumentCrawlLogMethods {
	getCrawledUrls<T=SP.SimpleDataTable>(getCountOnly?: boolean, maxRows?: number, queryString?: string, isLike?: boolean, contentSourceID?: number, errorLevel?: number, errorID?: number, startDateTime?: any, endDateTime?: any): IBaseExecution<T>;
}
