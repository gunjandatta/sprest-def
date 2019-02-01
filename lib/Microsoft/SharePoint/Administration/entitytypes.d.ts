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
* ISPAppStateQueryJobDefinitionQuery
**********************************************/
export interface ISPAppStateQueryJobDefinitionQuery extends SPAppStateQueryJobDefinitionQuery,SPAppStateQueryJobDefinitionMethods {

}

/*********************************************
* SPAppStateQueryJobDefinition
**********************************************/
export interface SPAppStateQueryJobDefinition extends SPAppStateQueryJobDefinitionCollections, SPAppStateQueryJobDefinitionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAppStateQueryJobDefinitionProps
**********************************************/
export interface SPAppStateQueryJobDefinitionProps {

}

/*********************************************
* SPAppStateQueryJobDefinitionCollections
**********************************************/
export interface SPAppStateQueryJobDefinitionCollections extends SPAppStateQueryJobDefinitionProps {

}

/*********************************************
* SPAppStateQueryJobDefinitionQuery
**********************************************/
export interface SPAppStateQueryJobDefinitionQuery extends SPAppStateQueryJobDefinitionProps {

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
* ISPWebApplicationQuery
**********************************************/
export interface ISPWebApplicationQuery extends SPWebApplicationQuery,SPWebApplicationMethods {

}

/*********************************************
* SPWebApplication
**********************************************/
export interface SPWebApplication extends SPWebApplicationCollections, SPWebApplicationMethods {
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

}

/*********************************************
* SPWebApplicationCollections
**********************************************/
export interface SPWebApplicationCollections extends SPWebApplicationProps {
	Sites(): IBaseCollection<SP.Site>;
	Sites(id: string | number): IBaseQuery<SP.Site>;
}

/*********************************************
* SPWebApplicationQuery
**********************************************/
export interface SPWebApplicationQuery extends SPWebApplicationProps {
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
* ISPWebServiceQuery
**********************************************/
export interface ISPWebServiceQuery extends SPWebServiceQuery,SPWebServiceMethods {

}

/*********************************************
* SPWebService
**********************************************/
export interface SPWebService extends SPWebServiceCollections, SPWebServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPWebServiceProps
**********************************************/
export interface SPWebServiceProps {
	ContentService(): IBaseExecution<Microsoft.SharePoint.Administration.SPWebService>;
}

/*********************************************
* SPWebServiceCollections
**********************************************/
export interface SPWebServiceCollections extends SPWebServiceProps {
	WebApplications(): IBaseCollection<Microsoft.SharePoint.Administration.SPWebApplication>;
	WebApplications(id: string | number): IBaseQuery<Microsoft.SharePoint.Administration.SPWebApplication>;
}

/*********************************************
* SPWebServiceQuery
**********************************************/
export interface SPWebServiceQuery extends SPWebServiceProps {
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
* ISPAnalyticsUsageServiceQuery
**********************************************/
export interface ISPAnalyticsUsageServiceQuery extends SPAnalyticsUsageServiceQuery,SPAnalyticsUsageServiceMethods {

}

/*********************************************
* SPAnalyticsUsageService
**********************************************/
export interface SPAnalyticsUsageService extends SPAnalyticsUsageServiceCollections, SPAnalyticsUsageServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAnalyticsUsageServiceProps
**********************************************/
export interface SPAnalyticsUsageServiceProps {

}

/*********************************************
* SPAnalyticsUsageServiceCollections
**********************************************/
export interface SPAnalyticsUsageServiceCollections extends SPAnalyticsUsageServiceProps {

}

/*********************************************
* SPAnalyticsUsageServiceQuery
**********************************************/
export interface SPAnalyticsUsageServiceQuery extends SPAnalyticsUsageServiceProps {

}

/*********************************************
* SPAnalyticsUsageServiceMethods
**********************************************/
export interface SPAnalyticsUsageServiceMethods {
	logevent(usageEntry?: Microsoft.SharePoint.Administration.UsageEntry): IBaseExecution<any>;
}
