import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";

/*********************************************
* ITenantCdnApi
**********************************************/
export interface ITenantCdnApi extends TenantCdnApiCollections,TenantCdnApiMethods,IBaseQuery<ITenantCdnApiQuery> {

}

/*********************************************
* ITenantCdnApiQuery
**********************************************/
export interface ITenantCdnApiQuery extends TenantCdnApiQuery,TenantCdnApiMethods {

}

/*********************************************
* TenantCdnApi
**********************************************/
export interface TenantCdnApi extends TenantCdnApiCollections, TenantCdnApiMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantCdnApiProps
**********************************************/
export interface TenantCdnApiProps {

}

/*********************************************
* TenantCdnApiCollections
**********************************************/
export interface TenantCdnApiCollections extends TenantCdnApiProps {

}

/*********************************************
* TenantCdnApiQuery
**********************************************/
export interface TenantCdnApiQuery extends TenantCdnApiProps {

}

/*********************************************
* TenantCdnApiMethods
**********************************************/
export interface TenantCdnApiMethods {
	getCdnUrls(items?: Array<string>): IBaseExecution<Array<Microsoft.SharePoint.TenantCdn.TenantCdnUrl>>;
}
