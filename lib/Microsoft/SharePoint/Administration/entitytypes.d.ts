import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* SPAppStateQueryJobDefinition
**********************************************/
export interface SPAppStateQueryJobDefinition {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAppStateQueryJobDefinitionMethods<T = any>
**********************************************/
export interface SPAppStateQueryJobDefinitionMethods<T = any> {
	performFastRevokeWithClientIds(): T;
}

/*********************************************
* SPFarm
**********************************************/
export interface SPFarm {
	Id?: any;
}

/*********************************************
* SPFarmCollections<T = any>
**********************************************/
export interface SPFarmCollections<T = any> {
	Local(): T;
}

/*********************************************
* SPFarmQuery<T = any>
**********************************************/
export interface SPFarmQuery<T = any> {
	Local(): T;
}

/*********************************************
* FeatureDefinition
**********************************************/
export interface FeatureDefinition {
	DisplayName?: string;
	Id?: any;
}

/*********************************************
* SPTenantAppInstanceData
**********************************************/
export interface SPTenantAppInstanceData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPWebApplication
**********************************************/
export interface SPWebApplication {
	DisplayName?: string;
	Id?: any;
	OutboundMailPort?: number;
	OutboundMailReplyToAddress?: string;
	OutboundMailSenderAddress?: string;
}

/*********************************************
* SPWebApplicationCollections<T = any>
**********************************************/
export interface SPWebApplicationCollections<T = any> {
	Sites(): T;
}

/*********************************************
* SPWebApplicationQuery<T = any>
**********************************************/
export interface SPWebApplicationQuery<T = any> {
	Sites(): T;
}

/*********************************************
* SPWebService
**********************************************/
export interface SPWebService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPWebServiceCollections<T = any>
**********************************************/
export interface SPWebServiceCollections<T = any> {
	ContentService(): T;
	WebApplications(): T;
}

/*********************************************
* SPWebServiceQuery<T = any>
**********************************************/
export interface SPWebServiceQuery<T = any> {
	ContentService(): T;
	WebApplications(): T;
}

/*********************************************
* SPAnalyticsUsageService
**********************************************/
export interface SPAnalyticsUsageService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAnalyticsUsageServiceMethods<T = any>
**********************************************/
export interface SPAnalyticsUsageServiceMethods<T = any> {
	logevent(usageEntry?: Microsoft.SharePoint.Administration.UsageEntry): T;
}
