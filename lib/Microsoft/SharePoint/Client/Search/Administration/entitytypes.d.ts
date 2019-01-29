

/*********************************************
* DocumentCrawlLog
**********************************************/
export interface DocumentCrawlLog {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DocumentCrawlLogMethods<T = any>
**********************************************/
export interface DocumentCrawlLogMethods<T = any> {
	getCrawledUrls(getCountOnly?: boolean, maxRows?: number, queryString?: string, isLike?: boolean, contentSourceID?: number, errorLevel?: number, errorID?: number, startDateTime?: any, endDateTime?: any): T;
}
