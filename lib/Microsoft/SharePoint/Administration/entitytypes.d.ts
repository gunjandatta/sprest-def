

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
	Local?: () => Microsoft.SharePoint.Administration.SPFarm;
}

/*********************************************
* SPFarmQuery
**********************************************/
export interface SPFarmQuery {
	Local?: Microsoft.SharePoint.Administration.SPFarm;
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
	Sites?: () => Array<SP.Site>;
}

/*********************************************
* SPWebApplicationQuery
**********************************************/
export interface SPWebApplicationQuery {
	Sites?: Array<SP.Site>;
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
	ContentService?: () => Microsoft.SharePoint.Administration.SPWebService;
	WebApplications?: () => Array<Microsoft.SharePoint.Administration.SPWebApplication>;
}

/*********************************************
* SPWebServiceQuery
**********************************************/
export interface SPWebServiceQuery {
	ContentService?: Microsoft.SharePoint.Administration.SPWebService;
	WebApplications?: Array<Microsoft.SharePoint.Administration.SPWebApplication>;
}

/*********************************************
* SPAnalyticsUsageService
**********************************************/
export interface SPAnalyticsUsageService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
