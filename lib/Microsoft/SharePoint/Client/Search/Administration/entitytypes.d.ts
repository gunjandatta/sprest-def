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
	getUnsuccesfulCrawledUrlsForEdiscovery(displayUrl?: string, startDateTime?: any, endDateTime?: any): Base.IBaseExecution<SP.SimpleDataTable>;
}

/*********************************************
* ISiteContentProcessingInfoProvider
**********************************************/
export interface ISiteContentProcessingInfoProvider extends SiteContentProcessingInfoProviderCollections, SiteContentProcessingInfoProviderMethods, Base.IBaseQuery<SiteContentProcessingInfoProvider, ISiteContentProcessingInfoProviderQuery> {

}

/*********************************************
* ISiteContentProcessingInfoProviderCollection
**********************************************/
export interface ISiteContentProcessingInfoProviderCollection extends Base.IBaseResults<SiteContentProcessingInfoProvider> {
	done?: (resolve: (value?: Array<SiteContentProcessingInfoProvider>) => void) => void;
}

/*********************************************
* ISiteContentProcessingInfoProviderQueryCollection
**********************************************/
export interface ISiteContentProcessingInfoProviderQueryCollection extends Base.IBaseResults<SiteContentProcessingInfoProviderOData> {
	done?: (resolve: (value?: Array<SiteContentProcessingInfoProviderOData>) => void) => void;
}

/*********************************************
* ISiteContentProcessingInfoProviderQuery
**********************************************/
export interface ISiteContentProcessingInfoProviderQuery extends SiteContentProcessingInfoProviderOData, SiteContentProcessingInfoProviderMethods {

}

/*********************************************
* SiteContentProcessingInfoProvider
**********************************************/
export interface SiteContentProcessingInfoProvider extends Base.IBaseResult, SiteContentProcessingInfoProviderProps, SiteContentProcessingInfoProviderCollections, SiteContentProcessingInfoProviderMethods {

}

/*********************************************
* SiteContentProcessingInfoProviderProps
**********************************************/
export interface SiteContentProcessingInfoProviderProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteContentProcessingInfoProviderPropMethods
**********************************************/
export interface SiteContentProcessingInfoProviderPropMethods {

}

/*********************************************
* SiteContentProcessingInfoProviderCollections
**********************************************/
export interface SiteContentProcessingInfoProviderCollections extends SiteContentProcessingInfoProviderPropMethods {

}

/*********************************************
* SiteContentProcessingInfoProviderOData
**********************************************/
export interface SiteContentProcessingInfoProviderOData extends Base.IBaseResult, SiteContentProcessingInfoProviderProps, SiteContentProcessingInfoProviderMethods {

}

/*********************************************
* SiteContentProcessingInfoProviderMethods
**********************************************/
export interface SiteContentProcessingInfoProviderMethods {
	getAzureContainerToken(): Base.IBaseExecution<string>;
	notifyContentProcessingStatus(webId?: any, listId?: any, uniqueId?: any, properties?: Array<SP.KeyValue>): Base.IBaseExecution<any>;
	reportContentProcessingStatus(webId?: any, listId?: any, uniqueId?: any, azureContainerTokenUri?: string, encryptionKey?: any, priority?: number, errorCode?: number, errorDescription?: string): Base.IBaseExecution<any>;
}

/*********************************************
* ISiteProvisioningInfoProvider
**********************************************/
export interface ISiteProvisioningInfoProvider extends SiteProvisioningInfoProviderCollections, SiteProvisioningInfoProviderMethods, Base.IBaseQuery<SiteProvisioningInfoProvider, ISiteProvisioningInfoProviderQuery> {

}

/*********************************************
* ISiteProvisioningInfoProviderCollection
**********************************************/
export interface ISiteProvisioningInfoProviderCollection extends Base.IBaseResults<SiteProvisioningInfoProvider> {
	done?: (resolve: (value?: Array<SiteProvisioningInfoProvider>) => void) => void;
}

/*********************************************
* ISiteProvisioningInfoProviderQueryCollection
**********************************************/
export interface ISiteProvisioningInfoProviderQueryCollection extends Base.IBaseResults<SiteProvisioningInfoProviderOData> {
	done?: (resolve: (value?: Array<SiteProvisioningInfoProviderOData>) => void) => void;
}

/*********************************************
* ISiteProvisioningInfoProviderQuery
**********************************************/
export interface ISiteProvisioningInfoProviderQuery extends SiteProvisioningInfoProviderOData, SiteProvisioningInfoProviderMethods {

}

/*********************************************
* SiteProvisioningInfoProvider
**********************************************/
export interface SiteProvisioningInfoProvider extends Base.IBaseResult, SiteProvisioningInfoProviderProps, SiteProvisioningInfoProviderCollections, SiteProvisioningInfoProviderMethods {

}

/*********************************************
* SiteProvisioningInfoProviderProps
**********************************************/
export interface SiteProvisioningInfoProviderProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteProvisioningInfoProviderPropMethods
**********************************************/
export interface SiteProvisioningInfoProviderPropMethods {

}

/*********************************************
* SiteProvisioningInfoProviderCollections
**********************************************/
export interface SiteProvisioningInfoProviderCollections extends SiteProvisioningInfoProviderPropMethods {

}

/*********************************************
* SiteProvisioningInfoProviderOData
**********************************************/
export interface SiteProvisioningInfoProviderOData extends Base.IBaseResult, SiteProvisioningInfoProviderProps, SiteProvisioningInfoProviderMethods {

}

/*********************************************
* SiteProvisioningInfoProviderMethods
**********************************************/
export interface SiteProvisioningInfoProviderMethods {
	checkSiteIngestionStatus(siteId?: any): Base.IBaseExecution<boolean>;
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

/*********************************************
* ITenantRecycleBinInfoProvider
**********************************************/
export interface ITenantRecycleBinInfoProvider extends TenantRecycleBinInfoProviderCollections, TenantRecycleBinInfoProviderMethods, Base.IBaseQuery<TenantRecycleBinInfoProvider, ITenantRecycleBinInfoProviderQuery> {

}

/*********************************************
* ITenantRecycleBinInfoProviderCollection
**********************************************/
export interface ITenantRecycleBinInfoProviderCollection extends Base.IBaseResults<TenantRecycleBinInfoProvider> {
	done?: (resolve: (value?: Array<TenantRecycleBinInfoProvider>) => void) => void;
}

/*********************************************
* ITenantRecycleBinInfoProviderQueryCollection
**********************************************/
export interface ITenantRecycleBinInfoProviderQueryCollection extends Base.IBaseResults<TenantRecycleBinInfoProviderOData> {
	done?: (resolve: (value?: Array<TenantRecycleBinInfoProviderOData>) => void) => void;
}

/*********************************************
* ITenantRecycleBinInfoProviderQuery
**********************************************/
export interface ITenantRecycleBinInfoProviderQuery extends TenantRecycleBinInfoProviderOData, TenantRecycleBinInfoProviderMethods {

}

/*********************************************
* TenantRecycleBinInfoProvider
**********************************************/
export interface TenantRecycleBinInfoProvider extends Base.IBaseResult, TenantRecycleBinInfoProviderProps, TenantRecycleBinInfoProviderCollections, TenantRecycleBinInfoProviderMethods {

}

/*********************************************
* TenantRecycleBinInfoProviderProps
**********************************************/
export interface TenantRecycleBinInfoProviderProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantRecycleBinInfoProviderPropMethods
**********************************************/
export interface TenantRecycleBinInfoProviderPropMethods {

}

/*********************************************
* TenantRecycleBinInfoProviderCollections
**********************************************/
export interface TenantRecycleBinInfoProviderCollections extends TenantRecycleBinInfoProviderPropMethods {

}

/*********************************************
* TenantRecycleBinInfoProviderOData
**********************************************/
export interface TenantRecycleBinInfoProviderOData extends Base.IBaseResult, TenantRecycleBinInfoProviderProps, TenantRecycleBinInfoProviderMethods {

}

/*********************************************
* TenantRecycleBinInfoProviderMethods
**********************************************/
export interface TenantRecycleBinInfoProviderMethods {
	disableRecycleBinDiscoverabilityForTenant(): Base.IBaseExecution<boolean>;
	enableRecycleBinDiscoverabilityForTenant(): Base.IBaseExecution<boolean>;
	isRecycleBinDiscoverabilityEnabledForTenant(): Base.IBaseExecution<boolean>;
}
