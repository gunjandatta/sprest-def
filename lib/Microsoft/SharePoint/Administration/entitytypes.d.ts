import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* SPAppStateQueryJobDefinition
**********************************************/
export interface SPAppStateQueryJobDefinition {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPFarm
**********************************************/
export interface SPFarm {
	Id?: any;
}

/*********************************************
* SPFarmCollections
**********************************************/
export interface SPFarmCollections {
	Local<T=Microsoft.SharePoint.Administration.SPFarm>(): T;
}

/*********************************************
* SPFarmQuery
**********************************************/
export interface SPFarmQuery {
	Local<T=Microsoft.SharePoint.Administration.SPFarm>(): T;
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
* SPWebApplicationCollections
**********************************************/
export interface SPWebApplicationCollections {
	Sites<T=Array<SP.Site>>(): T;
}

/*********************************************
* SPWebApplicationQuery
**********************************************/
export interface SPWebApplicationQuery {
	Sites<T=Array<SP.Site>>(): T;
}

/*********************************************
* SPWebService
**********************************************/
export interface SPWebService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPWebServiceCollections
**********************************************/
export interface SPWebServiceCollections {
	ContentService<T=Microsoft.SharePoint.Administration.SPWebService>(): T;
	WebApplications<T=Array<Microsoft.SharePoint.Administration.SPWebApplication>>(): T;
}

/*********************************************
* SPWebServiceQuery
**********************************************/
export interface SPWebServiceQuery {
	ContentService<T=Microsoft.SharePoint.Administration.SPWebService>(): T;
	WebApplications<T=Array<Microsoft.SharePoint.Administration.SPWebApplication>>(): T;
}

/*********************************************
* SPAnalyticsUsageService
**********************************************/
export interface SPAnalyticsUsageService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
