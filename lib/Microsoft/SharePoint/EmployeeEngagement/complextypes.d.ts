import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* DashboardConfiguration
**********************************************/
export interface DashboardConfiguration {
	canvasContent?: string;
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
* VivaResourceLink
**********************************************/
export interface VivaResourceLink {
	Audiences?: { results: Array<string> };
	Icon?: string;
	Id?: number;
	Title?: string;
	Url?: string;
}

/*********************************************
* VivaResourceLinkCollections
**********************************************/
export interface VivaResourceLinkCollections {

}
