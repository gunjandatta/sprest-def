import { Base } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* ConnectionsConfigurationAndData
**********************************************/
export interface ConnectionsConfigurationAndData {
	SpotlightConfiguration?: Microsoft.SharePoint.EmployeeEngagement.SpotlightConfiguration;
	SpotlightNews?: { results: Array<Microsoft.SharePoint.EmployeeEngagement.SpotlightNews> };
}

/*********************************************
* ConnectionsConfigurationAndDataCollections
**********************************************/
export interface ConnectionsConfigurationAndDataCollections {

}

/*********************************************
* SpotlightConfiguration
**********************************************/
export interface SpotlightConfiguration {
	IsHidden?: boolean;
	NewsSource?: number;
	PinnedNews?: { results: Array<Microsoft.SharePoint.EmployeeEngagement.SpotlightNews> };
	SelectedSites?: { results: Array<Microsoft.SharePoint.EmployeeEngagement.NewsSite> };
}

/*********************************************
* SpotlightConfigurationCollections
**********************************************/
export interface SpotlightConfigurationCollections {

}

/*********************************************
* SpotlightNews
**********************************************/
export interface SpotlightNews {
	AltText?: string;
	ImageUrl?: string;
	IsBoosted?: boolean;
	Order?: number;
	Title?: string;
	Url?: string;
}

/*********************************************
* SpotlightNewsCollections
**********************************************/
export interface SpotlightNewsCollections {

}

/*********************************************
* NewsSite
**********************************************/
export interface NewsSite {
	Acronym?: string;
	BannerColor?: string;
	BannerImageUrl?: string;
	ItemReference?: Microsoft.SharePoint.EmployeeEngagement.ItemReference;
	Title?: string;
	Type?: string;
	Url?: string;
}

/*********************************************
* NewsSiteCollections
**********************************************/
export interface NewsSiteCollections {

}

/*********************************************
* ItemReference
**********************************************/
export interface ItemReference {
	SiteId?: any;
	Type?: string;
	WebId?: any;
}

/*********************************************
* ItemReferenceCollections
**********************************************/
export interface ItemReferenceCollections {

}

/*********************************************
* DashboardConfiguration
**********************************************/
export interface DashboardConfiguration {
	canvasContent?: string;
	dashboardItemId?: string;
	dashboardListId?: string;
	dashboardUniqueItemId?: string;
	dashboardUrl?: string;
	extraComponents?: { results: Array<Microsoft.SharePoint.ClientSideComponent.SPClientSideComponentQueryResult> };
	personalizationData?: Microsoft.SharePoint.EmployeeEngagement.Experience.DashboardContent;
}

/*********************************************
* DashboardConfigurationCollections
**********************************************/
export interface DashboardConfigurationCollections {

}

/*********************************************
* VCConfiguration
**********************************************/
export interface VCConfiguration {
	CompanyLinks?: { results: Array<Microsoft.SharePoint.EmployeeEngagement.VivaResourceLink> };
	SpotlightConfiguration?: Microsoft.SharePoint.EmployeeEngagement.SpotlightConfiguration;
	TitleRegion?: SP.VivaHomeTitleRegion;
}

/*********************************************
* VCConfigurationCollections
**********************************************/
export interface VCConfigurationCollections {

}

/*********************************************
* VivaResourceLink
**********************************************/
export interface VivaResourceLink {
	Audiences?: { results: Array<string> };
	Icon?: string;
	Id?: number;
	ThumbnailOption?: string;
	Title?: string;
	Url?: string;
}

/*********************************************
* VivaResourceLinkCollections
**********************************************/
export interface VivaResourceLinkCollections {

}
