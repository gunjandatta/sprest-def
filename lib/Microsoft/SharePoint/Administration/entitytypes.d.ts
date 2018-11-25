

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
* SPFarmMethods
**********************************************/
export interface SPFarmMethods extends SPFarm {
	Local?: () => Microsoft.SharePoint.Administration.SPFarm;
}

/*********************************************
* SPFarmQuery
**********************************************/
export interface SPFarmQuery extends SPFarm {
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
* SPWebApplicationMethods
**********************************************/
export interface SPWebApplicationMethods extends SPWebApplication {
	Sites?: () => Array<SP.Site>;
}

/*********************************************
* SPWebApplicationQuery
**********************************************/
export interface SPWebApplicationQuery extends SPWebApplication {
	Sites?: Array<SP.Site>;
}

/*********************************************
* SPWebService
**********************************************/
export interface SPWebService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPWebServiceMethods
**********************************************/
export interface SPWebServiceMethods extends SPWebService {
	ContentService?: () => Microsoft.SharePoint.Administration.SPWebService;
	WebApplications?: () => Array<Microsoft.SharePoint.Administration.SPWebApplication>;
}

/*********************************************
* SPWebServiceQuery
**********************************************/
export interface SPWebServiceQuery extends SPWebService {
	ContentService?: Microsoft.SharePoint.Administration.SPWebService;
	WebApplications?: Array<Microsoft.SharePoint.Administration.SPWebApplication>;
}

/*********************************************
* SPAnalyticsUsageService
**********************************************/
export interface SPAnalyticsUsageService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
