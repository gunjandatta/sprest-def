import { IBaseExecution } from "../../../";

/*********************************************
* ITenantCdnApi
**********************************************/
export interface ITenantCdnApi extends TenantCdnApiProps,TenantCdnApiMethods,IBaseExecution<TenantCdnApi> {

}

/*********************************************
* TenantCdnApi
**********************************************/
export interface TenantCdnApi extends TenantCdnApiProps, TenantCdnApiMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantCdnApiProps
**********************************************/
export interface TenantCdnApiProps {

}

/*********************************************
* TenantCdnApiMethods
**********************************************/
export interface TenantCdnApiMethods {
	getCdnUrls<T=Array<Microsoft.SharePoint.TenantCdn.TenantCdnUrl>>(items?: Array<string>): IBaseExecution<T>;
}
