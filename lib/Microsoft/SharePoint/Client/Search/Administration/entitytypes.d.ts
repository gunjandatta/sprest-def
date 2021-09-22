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
* ITenantCrawlVersionsInfoProvider
**********************************************/
export interface ITenantCrawlVersionsInfoProvider extends TenantCrawlVersionsInfoProviderCollections, TenantCrawlVersionsInfoProviderMethods, Base.IBaseQuery<TenantCrawlVersionsInfoProvider, ITenantCrawlVersionsInfoProviderQuery> {

}

/*********************************************
* ITenantCrawlVersionsInfoProviderCollection
**********************************************/
export interface ITenantCrawlVersionsInfoProviderCollection extends Base.IBaseResults<TenantCrawlVersionsInfoProvider> {
	done?: (resolve: (value?: Array<TenantCrawlVersionsInfoProvider>) => void) => void;
}

/*********************************************
* ITenantCrawlVersionsInfoProviderQueryCollection
**********************************************/
export interface ITenantCrawlVersionsInfoProviderQueryCollection extends Base.IBaseResults<TenantCrawlVersionsInfoProviderOData> {
	done?: (resolve: (value?: Array<TenantCrawlVersionsInfoProviderOData>) => void) => void;
}

/*********************************************
* ITenantCrawlVersionsInfoProviderQuery
**********************************************/
export interface ITenantCrawlVersionsInfoProviderQuery extends TenantCrawlVersionsInfoProviderOData, TenantCrawlVersionsInfoProviderMethods {

}

/*********************************************
* TenantCrawlVersionsInfoProvider
**********************************************/
export interface TenantCrawlVersionsInfoProvider extends Base.IBaseResult, TenantCrawlVersionsInfoProviderProps, TenantCrawlVersionsInfoProviderCollections, TenantCrawlVersionsInfoProviderMethods {

}

/*********************************************
* TenantCrawlVersionsInfoProviderProps
**********************************************/
export interface TenantCrawlVersionsInfoProviderProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantCrawlVersionsInfoProviderPropMethods
**********************************************/
export interface TenantCrawlVersionsInfoProviderPropMethods {

}

/*********************************************
* TenantCrawlVersionsInfoProviderCollections
**********************************************/
export interface TenantCrawlVersionsInfoProviderCollections extends TenantCrawlVersionsInfoProviderPropMethods {

}

/*********************************************
* TenantCrawlVersionsInfoProviderOData
**********************************************/
export interface TenantCrawlVersionsInfoProviderOData extends Base.IBaseResult, TenantCrawlVersionsInfoProviderProps, TenantCrawlVersionsInfoProviderMethods {

}

/*********************************************
* TenantCrawlVersionsInfoProviderMethods
**********************************************/
export interface TenantCrawlVersionsInfoProviderMethods {
	disableCrawlVersions(siteId?: any): Base.IBaseExecution<boolean>;
	disableCrawlVersionsForTenant(): Base.IBaseExecution<boolean>;
	enableCrawlVersions(siteId?: any): Base.IBaseExecution<boolean>;
	enableCrawlVersionsForTenant(): Base.IBaseExecution<boolean>;
	getSiteCrawlVersionStatus(siteId?: any): Base.IBaseCollection<SP.KeyValue>;
	isCrawlVersionsEnabled(siteId?: any): Base.IBaseExecution<boolean>;
	isCrawlVersionsEnabledForTenant(): Base.IBaseExecution<boolean>;
}
