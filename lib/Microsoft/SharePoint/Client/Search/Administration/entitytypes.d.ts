import { Base } from "../../../../../";
import { SP } from "../../../../../";

/*********************************************
* IDocumentCrawlLog
**********************************************/
export interface IDocumentCrawlLog extends DocumentCrawlLogCollections, DocumentCrawlLogMethods, Base.IBaseQuery<DocumentCrawlLog, IDocumentCrawlLogQuery> {

}

/*********************************************
* IDocumentCrawlLogCollection
**********************************************/
export interface IDocumentCrawlLogCollection extends Base.IBaseResults<DocumentCrawlLog> {
	done?: (resolve: (value?: Array<DocumentCrawlLog>) => void) => void;
}

/*********************************************
* IDocumentCrawlLogQueryCollection
**********************************************/
export interface IDocumentCrawlLogQueryCollection extends Base.IBaseResults<DocumentCrawlLogOData> {
	done?: (resolve: (value?: Array<DocumentCrawlLogOData>) => void) => void;
}

/*********************************************
* IDocumentCrawlLogQuery
**********************************************/
export interface IDocumentCrawlLogQuery extends DocumentCrawlLogOData, DocumentCrawlLogMethods {

}

/*********************************************
* DocumentCrawlLog
**********************************************/
export interface DocumentCrawlLog extends Base.IBaseResult, DocumentCrawlLogProps, DocumentCrawlLogCollections, DocumentCrawlLogMethods {

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
* DocumentCrawlLogOData
**********************************************/
export interface DocumentCrawlLogOData extends Base.IBaseResult, DocumentCrawlLogProps, DocumentCrawlLogMethods {

}

/*********************************************
* DocumentCrawlLogMethods
**********************************************/
export interface DocumentCrawlLogMethods {
	getCrawledUrls(getCountOnly?: boolean, maxRows?: number, queryString?: string, isLike?: boolean, contentSourceID?: number, errorLevel?: number, errorID?: number, startDateTime?: any, endDateTime?: any): Base.IBaseExecution<SP.SimpleDataTable>;
	getUnsuccesfulCrawledUrls(displayUrl?: string, startDateTime?: any, endDateTime?: any): Base.IBaseExecution<SP.SimpleDataTable>;
}

/*********************************************
* ISiteCrawlVersionInfoProvider
**********************************************/
export interface ISiteCrawlVersionInfoProvider extends SiteCrawlVersionInfoProviderCollections, SiteCrawlVersionInfoProviderMethods, Base.IBaseQuery<SiteCrawlVersionInfoProvider, ISiteCrawlVersionInfoProviderQuery> {

}

/*********************************************
* ISiteCrawlVersionInfoProviderCollection
**********************************************/
export interface ISiteCrawlVersionInfoProviderCollection extends Base.IBaseResults<SiteCrawlVersionInfoProvider> {
	done?: (resolve: (value?: Array<SiteCrawlVersionInfoProvider>) => void) => void;
}

/*********************************************
* ISiteCrawlVersionInfoProviderQueryCollection
**********************************************/
export interface ISiteCrawlVersionInfoProviderQueryCollection extends Base.IBaseResults<SiteCrawlVersionInfoProviderOData> {
	done?: (resolve: (value?: Array<SiteCrawlVersionInfoProviderOData>) => void) => void;
}

/*********************************************
* ISiteCrawlVersionInfoProviderQuery
**********************************************/
export interface ISiteCrawlVersionInfoProviderQuery extends SiteCrawlVersionInfoProviderOData, SiteCrawlVersionInfoProviderMethods {

}

/*********************************************
* SiteCrawlVersionInfoProvider
**********************************************/
export interface SiteCrawlVersionInfoProvider extends Base.IBaseResult, SiteCrawlVersionInfoProviderProps, SiteCrawlVersionInfoProviderCollections, SiteCrawlVersionInfoProviderMethods {

}

/*********************************************
* SiteCrawlVersionInfoProviderProps
**********************************************/
export interface SiteCrawlVersionInfoProviderProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteCrawlVersionInfoProviderPropMethods
**********************************************/
export interface SiteCrawlVersionInfoProviderPropMethods {

}

/*********************************************
* SiteCrawlVersionInfoProviderCollections
**********************************************/
export interface SiteCrawlVersionInfoProviderCollections extends SiteCrawlVersionInfoProviderPropMethods {

}

/*********************************************
* SiteCrawlVersionInfoProviderOData
**********************************************/
export interface SiteCrawlVersionInfoProviderOData extends Base.IBaseResult, SiteCrawlVersionInfoProviderProps, SiteCrawlVersionInfoProviderMethods {

}

/*********************************************
* SiteCrawlVersionInfoProviderMethods
**********************************************/
export interface SiteCrawlVersionInfoProviderMethods {
	getSiteCrawlVersionStatus(): Base.IBaseExecution<SP.SimpleDataTable>;
}
