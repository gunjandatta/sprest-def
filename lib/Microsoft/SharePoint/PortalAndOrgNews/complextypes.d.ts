import { Base } from "../../../";

/*********************************************
* HomeSiteConfigurationParam
**********************************************/
export interface HomeSiteConfigurationParam {
	Audiences?: { results: Array<any> };
	IsAudiencesPresent?: boolean;
	isInDraftMode?: boolean;
	IsInDraftModePresent?: boolean;
	IsOrderPresent?: boolean;
	IsTargetedLicenseTypePresent?: boolean;
	IsVivaBackendSite?: boolean;
	IsVivaBackendSitePresent?: boolean;
	IsVivaConnectionsDefaultStartPresent?: boolean;
	Order?: number;
	TargetedLicenseType?: number;
	vivaConnectionsDefaultStart?: boolean;
}

/*********************************************
* HomeSiteConfigurationParamCollections
**********************************************/
export interface HomeSiteConfigurationParamCollections {

}
