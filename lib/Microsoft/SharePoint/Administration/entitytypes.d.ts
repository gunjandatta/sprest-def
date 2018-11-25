

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
	Local?: () => Microsoft.SharePoint.Administration.SPFarm;
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
	Sites?: () => Array<SP.Site>;
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
	ContentService?: () => Microsoft.SharePoint.Administration.SPWebService;
	WebApplications?: () => Array<Microsoft.SharePoint.Administration.SPWebApplication>;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPAnalyticsUsageService
**********************************************/
export interface SPAnalyticsUsageService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
