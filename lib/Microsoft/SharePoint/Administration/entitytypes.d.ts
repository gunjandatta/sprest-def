

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
	Local?: () => Microsoft.SharePoint.Administration.Microsoft_SharePoint_Administration_SPFarm_Local_Microsoft_SharePoint_Administration_SPFarm_LocalPartner;
	Id?: any;
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
	Sites?: () => SP.Microsoft_SharePoint_Administration_SPWebApplication_Sites_SP_Site_SitesPartner;
	DisplayName?: string;
	Id?: any;
	OutboundMailPort?: number;
	OutboundMailReplyToAddress?: string;
	OutboundMailSenderAddress?: string;
}

/*********************************************
* SPWebService
**********************************************/
export interface SPWebService {
	ContentService?: () => Microsoft.SharePoint.Administration.Microsoft_SharePoint_Administration_SPWebService_ContentService_Microsoft_SharePoint_Administration_SPWebService_ContentServicePartner;
	WebApplications?: () => Microsoft.SharePoint.Administration.Microsoft_SharePoint_Administration_SPWebService_WebApplications_Microsoft_SharePoint_Administration_SPWebApplication_WebApplicationsPartner;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAnalyticsUsageService
**********************************************/
export interface SPAnalyticsUsageService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
