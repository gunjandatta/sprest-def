import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";

/*********************************************
* ITenantCdnApi
**********************************************/
export interface ITenantCdnApi extends TenantCdnApiCollections,TenantCdnApiMethods,IBaseQuery<ITenantCdnApiQuery> {

}

/*********************************************
* ITenantCdnApiCollection
**********************************************/
export interface ITenantCdnApiCollection extends IBaseResults<TenantCdnApi> {

}

/*********************************************
* ITenantCdnApiQueryCollection
**********************************************/
export interface ITenantCdnApiQueryCollection extends IBaseResults<TenantCdnApiQuery> {

}

/*********************************************
* ITenantCdnApiQuery
**********************************************/
export interface ITenantCdnApiQuery extends TenantCdnApiQuery, TenantCdnApiMethods {

}

/*********************************************
* TenantCdnApi
**********************************************/
export interface TenantCdnApi extends TenantCdnApiProps, TenantCdnApiCollections, TenantCdnApiMethods {

}

/*********************************************
* TenantCdnApiProps
**********************************************/
export interface TenantCdnApiProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantCdnApiPropMethods
**********************************************/
export interface TenantCdnApiPropMethods {

}

/*********************************************
* TenantCdnApiCollections
**********************************************/
export interface TenantCdnApiCollections extends TenantCdnApiPropMethods {

}

/*********************************************
* TenantCdnApiQuery
**********************************************/
export interface TenantCdnApiQuery extends TenantCdnApiProps, TenantCdnApiMethods {

}

/*********************************************
* TenantCdnApiMethods
**********************************************/
export interface TenantCdnApiMethods {
	getCdnUrls(items?: Array<string>): IBaseCollection<Microsoft.SharePoint.TenantCdn.TenantCdnUrl>;
}
