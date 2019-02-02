import { IBaseExecution } from "../../../";
import { IBaseQuery } from "../../../";
import { IBaseCollection } from "../../../";
import { IBaseResults } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* ISPAppStateQueryJobDefinition
**********************************************/
export interface ISPAppStateQueryJobDefinition extends SPAppStateQueryJobDefinitionCollections,SPAppStateQueryJobDefinitionMethods,IBaseQuery<ISPAppStateQueryJobDefinitionQuery> {

}

/*********************************************
* ISPAppStateQueryJobDefinitionCollection
**********************************************/
export interface ISPAppStateQueryJobDefinitionCollection extends IBaseResults<SPAppStateQueryJobDefinition> {

}

/*********************************************
* ISPAppStateQueryJobDefinitionQueryCollection
**********************************************/
export interface ISPAppStateQueryJobDefinitionQueryCollection extends IBaseResults<SPAppStateQueryJobDefinitionQuery> {

}

/*********************************************
* ISPAppStateQueryJobDefinitionQuery
**********************************************/
export interface ISPAppStateQueryJobDefinitionQuery extends SPAppStateQueryJobDefinitionQuery, SPAppStateQueryJobDefinitionMethods {

}

/*********************************************
* SPAppStateQueryJobDefinition
**********************************************/
export interface SPAppStateQueryJobDefinition extends SPAppStateQueryJobDefinitionProps, SPAppStateQueryJobDefinitionCollections, SPAppStateQueryJobDefinitionMethods {

}

/*********************************************
* SPAppStateQueryJobDefinitionProps
**********************************************/
export interface SPAppStateQueryJobDefinitionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAppStateQueryJobDefinitionPropMethods
**********************************************/
export interface SPAppStateQueryJobDefinitionPropMethods {

}

/*********************************************
* SPAppStateQueryJobDefinitionCollections
**********************************************/
export interface SPAppStateQueryJobDefinitionCollections extends SPAppStateQueryJobDefinitionPropMethods {

}

/*********************************************
* SPAppStateQueryJobDefinitionQuery
**********************************************/
export interface SPAppStateQueryJobDefinitionQuery extends SPAppStateQueryJobDefinitionProps, SPAppStateQueryJobDefinitionMethods {

}

/*********************************************
* SPAppStateQueryJobDefinitionMethods
**********************************************/
export interface SPAppStateQueryJobDefinitionMethods {
	performFastRevokeWithClientIds(): IBaseExecution<any>;
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

}

/*********************************************
* SPFarmQuery
**********************************************/
export interface SPFarmQuery extends SPFarm {
	Local: Microsoft.SharePoint.Administration.SPFarm & Microsoft.SharePoint.Administration.SPFarmCollections;
}

/*********************************************
* FeatureDefinition
**********************************************/
export interface FeatureDefinition {
	DisplayName?: string;
	Id?: any;
}

/*********************************************
* FeatureDefinitionCollections
**********************************************/
export interface FeatureDefinitionCollections extends FeatureDefinitionCollectionMethods {

}

/*********************************************
* FeatureDefinitionCollectionMethods
**********************************************/
export interface FeatureDefinitionCollectionMethods {
	getFeatureDefinition(featureDisplayName?: string, compatibilityLevel?: number): IBaseExecution<Microsoft.SharePoint.Administration.FeatureDefinition>;
}

/*********************************************
* SPTenantAppInstanceData
**********************************************/
export interface SPTenantAppInstanceData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPTenantAppInstanceDataCollections
**********************************************/
export interface SPTenantAppInstanceDataCollections {

}

/*********************************************
* ISPWebApplication
**********************************************/
export interface ISPWebApplication extends SPWebApplicationCollections,SPWebApplicationMethods,IBaseQuery<ISPWebApplicationQuery> {

}

/*********************************************
* ISPWebApplicationCollection
**********************************************/
export interface ISPWebApplicationCollection extends IBaseResults<SPWebApplication> {

}

/*********************************************
* ISPWebApplicationQueryCollection
**********************************************/
export interface ISPWebApplicationQueryCollection extends IBaseResults<SPWebApplicationQuery> {

}

/*********************************************
* ISPWebApplicationQuery
**********************************************/
export interface ISPWebApplicationQuery extends SPWebApplicationQuery, SPWebApplicationMethods {

}

/*********************************************
* SPWebApplication
**********************************************/
export interface SPWebApplication extends SPWebApplicationProps, SPWebApplicationCollections, SPWebApplicationMethods {

}

/*********************************************
* SPWebApplicationProps
**********************************************/
export interface SPWebApplicationProps {
	DisplayName?: string;
	Id?: any;
	OutboundMailPort?: number;
	OutboundMailReplyToAddress?: string;
	OutboundMailSenderAddress?: string;
}

/*********************************************
* SPWebApplicationPropMethods
**********************************************/
export interface SPWebApplicationPropMethods {

}

/*********************************************
* SPWebApplicationCollections
**********************************************/
export interface SPWebApplicationCollections extends SPWebApplicationPropMethods {
	Sites(): IBaseCollection<SP.Site, SP.SiteQuery>;
	Sites(id: string | number): IBaseQuery<SP.Site, SP.SiteQuery> & SP.SiteCollections & SP.SiteMethods;
}

/*********************************************
* SPWebApplicationQuery
**********************************************/
export interface SPWebApplicationQuery extends SPWebApplicationProps, SPWebApplicationMethods {
	Sites: IBaseResults<SP.Site>;
}

/*********************************************
* SPWebApplicationMethods
**********************************************/
export interface SPWebApplicationMethods {

}

/*********************************************
* ISPWebService
**********************************************/
export interface ISPWebService extends SPWebServiceCollections,SPWebServiceMethods,IBaseQuery<ISPWebServiceQuery> {

}

/*********************************************
* ISPWebServiceCollection
**********************************************/
export interface ISPWebServiceCollection extends IBaseResults<SPWebService> {

}

/*********************************************
* ISPWebServiceQueryCollection
**********************************************/
export interface ISPWebServiceQueryCollection extends IBaseResults<SPWebServiceQuery> {

}

/*********************************************
* ISPWebServiceQuery
**********************************************/
export interface ISPWebServiceQuery extends SPWebServiceQuery, SPWebServiceMethods {

}

/*********************************************
* SPWebService
**********************************************/
export interface SPWebService extends SPWebServiceProps, SPWebServiceCollections, SPWebServiceMethods {

}

/*********************************************
* SPWebServiceProps
**********************************************/
export interface SPWebServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPWebServicePropMethods
**********************************************/
export interface SPWebServicePropMethods {
	ContentService(): IBaseQuery<Microsoft.SharePoint.Administration.SPWebService, Microsoft.SharePoint.Administration.SPWebServiceQuery> & Microsoft.SharePoint.Administration.SPWebServiceCollections;
}

/*********************************************
* SPWebServiceCollections
**********************************************/
export interface SPWebServiceCollections extends SPWebServicePropMethods {
	WebApplications(): IBaseCollection<Microsoft.SharePoint.Administration.SPWebApplication, Microsoft.SharePoint.Administration.SPWebApplicationQuery>;
	WebApplications(id: string | number): IBaseQuery<Microsoft.SharePoint.Administration.SPWebApplication, Microsoft.SharePoint.Administration.SPWebApplicationQuery> & Microsoft.SharePoint.Administration.SPWebApplicationCollections;
}

/*********************************************
* SPWebServiceQuery
**********************************************/
export interface SPWebServiceQuery extends SPWebServiceProps, SPWebServiceMethods {
	ContentService: Microsoft.SharePoint.Administration.SPWebService & Microsoft.SharePoint.Administration.SPWebServiceCollections;
	WebApplications: IBaseResults<Microsoft.SharePoint.Administration.SPWebApplication>;
}

/*********************************************
* SPWebServiceMethods
**********************************************/
export interface SPWebServiceMethods {

}

/*********************************************
* ISPAnalyticsUsageService
**********************************************/
export interface ISPAnalyticsUsageService extends SPAnalyticsUsageServiceCollections,SPAnalyticsUsageServiceMethods,IBaseQuery<ISPAnalyticsUsageServiceQuery> {

}

/*********************************************
* ISPAnalyticsUsageServiceCollection
**********************************************/
export interface ISPAnalyticsUsageServiceCollection extends IBaseResults<SPAnalyticsUsageService> {

}

/*********************************************
* ISPAnalyticsUsageServiceQueryCollection
**********************************************/
export interface ISPAnalyticsUsageServiceQueryCollection extends IBaseResults<SPAnalyticsUsageServiceQuery> {

}

/*********************************************
* ISPAnalyticsUsageServiceQuery
**********************************************/
export interface ISPAnalyticsUsageServiceQuery extends SPAnalyticsUsageServiceQuery, SPAnalyticsUsageServiceMethods {

}

/*********************************************
* SPAnalyticsUsageService
**********************************************/
export interface SPAnalyticsUsageService extends SPAnalyticsUsageServiceProps, SPAnalyticsUsageServiceCollections, SPAnalyticsUsageServiceMethods {

}

/*********************************************
* SPAnalyticsUsageServiceProps
**********************************************/
export interface SPAnalyticsUsageServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAnalyticsUsageServicePropMethods
**********************************************/
export interface SPAnalyticsUsageServicePropMethods {

}

/*********************************************
* SPAnalyticsUsageServiceCollections
**********************************************/
export interface SPAnalyticsUsageServiceCollections extends SPAnalyticsUsageServicePropMethods {

}

/*********************************************
* SPAnalyticsUsageServiceQuery
**********************************************/
export interface SPAnalyticsUsageServiceQuery extends SPAnalyticsUsageServiceProps, SPAnalyticsUsageServiceMethods {

}

/*********************************************
* SPAnalyticsUsageServiceMethods
**********************************************/
export interface SPAnalyticsUsageServiceMethods {
	logevent(usageEntry?: Microsoft.SharePoint.Administration.UsageEntry): IBaseExecution<any>;
}
