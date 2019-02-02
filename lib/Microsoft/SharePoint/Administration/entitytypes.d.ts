import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* ISPAppStateQueryJobDefinition
**********************************************/
export interface ISPAppStateQueryJobDefinition extends SPAppStateQueryJobDefinitionCollections, SPAppStateQueryJobDefinitionMethods, IBaseQuery<ISPAppStateQueryJobDefinitionQuery> {

}

/*********************************************
* ISPAppStateQueryJobDefinitionCollection
**********************************************/
export interface ISPAppStateQueryJobDefinitionCollection extends IBaseResults<SPAppStateQueryJobDefinition> {
	done?: (resolve: (value?: Array<SPAppStateQueryJobDefinition>) => void) => void;
}

/*********************************************
* ISPAppStateQueryJobDefinitionQueryCollection
**********************************************/
export interface ISPAppStateQueryJobDefinitionQueryCollection extends IBaseResults<SPAppStateQueryJobDefinitionOData> {
	done?: (resolve: (value?: Array<SPAppStateQueryJobDefinitionOData>) => void) => void;
}

/*********************************************
* ISPAppStateQueryJobDefinitionQuery
**********************************************/
export interface ISPAppStateQueryJobDefinitionQuery extends SPAppStateQueryJobDefinitionOData, SPAppStateQueryJobDefinitionMethods {

}

/*********************************************
* SPAppStateQueryJobDefinition
**********************************************/
export interface SPAppStateQueryJobDefinition extends IBaseResult, SPAppStateQueryJobDefinitionProps, SPAppStateQueryJobDefinitionCollections, SPAppStateQueryJobDefinitionMethods {

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
* SPAppStateQueryJobDefinitionOData
**********************************************/
export interface SPAppStateQueryJobDefinitionOData extends IBaseResult, SPAppStateQueryJobDefinitionProps, SPAppStateQueryJobDefinitionMethods {

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
* SPFarmOData
**********************************************/
export interface SPFarmOData extends IBaseResult, SPFarm {
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
export interface ISPWebApplication extends SPWebApplicationCollections, SPWebApplicationMethods, IBaseQuery<ISPWebApplicationQuery> {

}

/*********************************************
* ISPWebApplicationCollection
**********************************************/
export interface ISPWebApplicationCollection extends IBaseResults<SPWebApplication> {
	done?: (resolve: (value?: Array<SPWebApplication>) => void) => void;
}

/*********************************************
* ISPWebApplicationQueryCollection
**********************************************/
export interface ISPWebApplicationQueryCollection extends IBaseResults<SPWebApplicationOData> {
	done?: (resolve: (value?: Array<SPWebApplicationOData>) => void) => void;
}

/*********************************************
* ISPWebApplicationQuery
**********************************************/
export interface ISPWebApplicationQuery extends SPWebApplicationOData, SPWebApplicationMethods {

}

/*********************************************
* SPWebApplication
**********************************************/
export interface SPWebApplication extends IBaseResult, SPWebApplicationProps, SPWebApplicationCollections, SPWebApplicationMethods {

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
	Sites(): IBaseCollection<SP.Site, SP.SiteOData>;
	Sites(id: string | number): IBaseQuery<SP.Site, SP.SiteOData> & SP.SiteCollections & SP.SiteMethods;
}

/*********************************************
* SPWebApplicationOData
**********************************************/
export interface SPWebApplicationOData extends IBaseResult, SPWebApplicationProps, SPWebApplicationMethods {
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
export interface ISPWebService extends SPWebServiceCollections, SPWebServiceMethods, IBaseQuery<ISPWebServiceQuery> {

}

/*********************************************
* ISPWebServiceCollection
**********************************************/
export interface ISPWebServiceCollection extends IBaseResults<SPWebService> {
	done?: (resolve: (value?: Array<SPWebService>) => void) => void;
}

/*********************************************
* ISPWebServiceQueryCollection
**********************************************/
export interface ISPWebServiceQueryCollection extends IBaseResults<SPWebServiceOData> {
	done?: (resolve: (value?: Array<SPWebServiceOData>) => void) => void;
}

/*********************************************
* ISPWebServiceQuery
**********************************************/
export interface ISPWebServiceQuery extends SPWebServiceOData, SPWebServiceMethods {

}

/*********************************************
* SPWebService
**********************************************/
export interface SPWebService extends IBaseResult, SPWebServiceProps, SPWebServiceCollections, SPWebServiceMethods {

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
	ContentService(): IBaseQuery<Microsoft.SharePoint.Administration.SPWebService, Microsoft.SharePoint.Administration.SPWebServiceOData> & Microsoft.SharePoint.Administration.SPWebServiceCollections;
}

/*********************************************
* SPWebServiceCollections
**********************************************/
export interface SPWebServiceCollections extends SPWebServicePropMethods {
	WebApplications(): IBaseCollection<Microsoft.SharePoint.Administration.SPWebApplication, Microsoft.SharePoint.Administration.SPWebApplicationOData>;
	WebApplications(id: string | number): IBaseQuery<Microsoft.SharePoint.Administration.SPWebApplication, Microsoft.SharePoint.Administration.SPWebApplicationOData> & Microsoft.SharePoint.Administration.SPWebApplicationCollections;
}

/*********************************************
* SPWebServiceOData
**********************************************/
export interface SPWebServiceOData extends IBaseResult, SPWebServiceProps, SPWebServiceMethods {
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
export interface ISPAnalyticsUsageService extends SPAnalyticsUsageServiceCollections, SPAnalyticsUsageServiceMethods, IBaseQuery<ISPAnalyticsUsageServiceQuery> {

}

/*********************************************
* ISPAnalyticsUsageServiceCollection
**********************************************/
export interface ISPAnalyticsUsageServiceCollection extends IBaseResults<SPAnalyticsUsageService> {
	done?: (resolve: (value?: Array<SPAnalyticsUsageService>) => void) => void;
}

/*********************************************
* ISPAnalyticsUsageServiceQueryCollection
**********************************************/
export interface ISPAnalyticsUsageServiceQueryCollection extends IBaseResults<SPAnalyticsUsageServiceOData> {
	done?: (resolve: (value?: Array<SPAnalyticsUsageServiceOData>) => void) => void;
}

/*********************************************
* ISPAnalyticsUsageServiceQuery
**********************************************/
export interface ISPAnalyticsUsageServiceQuery extends SPAnalyticsUsageServiceOData, SPAnalyticsUsageServiceMethods {

}

/*********************************************
* SPAnalyticsUsageService
**********************************************/
export interface SPAnalyticsUsageService extends IBaseResult, SPAnalyticsUsageServiceProps, SPAnalyticsUsageServiceCollections, SPAnalyticsUsageServiceMethods {

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
* SPAnalyticsUsageServiceOData
**********************************************/
export interface SPAnalyticsUsageServiceOData extends IBaseResult, SPAnalyticsUsageServiceProps, SPAnalyticsUsageServiceMethods {

}

/*********************************************
* SPAnalyticsUsageServiceMethods
**********************************************/
export interface SPAnalyticsUsageServiceMethods {
	logevent(usageEntry?: Microsoft.SharePoint.Administration.UsageEntry): IBaseExecution<any>;
}
