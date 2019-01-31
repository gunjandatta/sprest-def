import { IBaseExecution } from "../../../";
import { IBaseCollection } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* ISPAppStateQueryJobDefinition
**********************************************/
export interface ISPAppStateQueryJobDefinition extends SPAppStateQueryJobDefinitionProps,SPAppStateQueryJobDefinitionMethods,IBaseExecution<SPAppStateQueryJobDefinition> {

}

/*********************************************
* SPAppStateQueryJobDefinition
**********************************************/
export interface SPAppStateQueryJobDefinition extends SPAppStateQueryJobDefinitionProps, SPAppStateQueryJobDefinitionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAppStateQueryJobDefinitionProps
**********************************************/
export interface SPAppStateQueryJobDefinitionProps {

}

/*********************************************
* SPAppStateQueryJobDefinitionMethods
**********************************************/
export interface SPAppStateQueryJobDefinitionMethods {
	performFastRevokeWithClientIds<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ISPFarm
**********************************************/
export interface ISPFarm extends SPFarmProps,SPFarmMethods,IBaseExecution<SPFarm> {

}

/*********************************************
* SPFarm
**********************************************/
export interface SPFarm extends SPFarmProps, SPFarmMethods {
	Id?: any;
}

/*********************************************
* SPFarmProps
**********************************************/
export interface SPFarmProps {
	Local<T=Microsoft.SharePoint.Administration.SPFarm>(): IBaseExecution<T>;
}

/*********************************************
* SPFarmMethods
**********************************************/
export interface SPFarmMethods {

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
* ISPWebApplication
**********************************************/
export interface ISPWebApplication extends SPWebApplicationProps,SPWebApplicationMethods,IBaseExecution<SPWebApplication> {

}

/*********************************************
* SPWebApplication
**********************************************/
export interface SPWebApplication extends SPWebApplicationProps, SPWebApplicationMethods {
	DisplayName?: string;
	Id?: any;
	OutboundMailPort?: number;
	OutboundMailReplyToAddress?: string;
	OutboundMailSenderAddress?: string;
}

/*********************************************
* SPWebApplicationProps
**********************************************/
export interface SPWebApplicationProps {
	Sites<T=SP.Site>(): IBaseCollection<T>;
}

/*********************************************
* SPWebApplicationMethods
**********************************************/
export interface SPWebApplicationMethods {

}

/*********************************************
* ISPWebService
**********************************************/
export interface ISPWebService extends SPWebServiceProps,SPWebServiceMethods,IBaseExecution<SPWebService> {

}

/*********************************************
* SPWebService
**********************************************/
export interface SPWebService extends SPWebServiceProps, SPWebServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPWebServiceProps
**********************************************/
export interface SPWebServiceProps {
	ContentService<T=Microsoft.SharePoint.Administration.SPWebService>(): IBaseExecution<T>;
	WebApplications<T=Microsoft.SharePoint.Administration.SPWebApplication>(): IBaseCollection<T>;
}

/*********************************************
* SPWebServiceMethods
**********************************************/
export interface SPWebServiceMethods {

}

/*********************************************
* ISPAnalyticsUsageService
**********************************************/
export interface ISPAnalyticsUsageService extends SPAnalyticsUsageServiceProps,SPAnalyticsUsageServiceMethods,IBaseExecution<SPAnalyticsUsageService> {

}

/*********************************************
* SPAnalyticsUsageService
**********************************************/
export interface SPAnalyticsUsageService extends SPAnalyticsUsageServiceProps, SPAnalyticsUsageServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAnalyticsUsageServiceProps
**********************************************/
export interface SPAnalyticsUsageServiceProps {

}

/*********************************************
* SPAnalyticsUsageServiceMethods
**********************************************/
export interface SPAnalyticsUsageServiceMethods {
	logevent<T=any>(usageEntry?: Microsoft.SharePoint.Administration.UsageEntry): IBaseExecution<T>;
}
