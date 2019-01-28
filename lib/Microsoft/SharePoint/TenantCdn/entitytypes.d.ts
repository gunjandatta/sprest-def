

/*********************************************
* TenantCdnApi
**********************************************/
export interface TenantCdnApi {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantCdnApiMethods
**********************************************/
export interface TenantCdnApiMethods {
	getCdnUrls<T=Array<Microsoft.SharePoint.TenantCdn.TenantCdnUrl>>(items?: Array<string>): T;
}
