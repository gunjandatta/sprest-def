import { Base } from "../../../../";
import { Microsoft } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* PageDetails
**********************************************/
export interface PageDetails {
	CorrelationId?: any;
	IsPublished?: boolean;
	ListId?: any;
	ListItemId?: number;
	ListItemUniqueId?: any;
	PageLayoutName?: string;
	PageLoadTimeInMS?: number;
	PageType?: string;
	SiteId?: any;
	SpIISLatencyInMS?: number;
	SpRequestDurationInMS?: number;
	Url?: string;
	Version?: string;
	WebId?: any;
}

/*********************************************
* PageDetailsCollections
**********************************************/
export interface PageDetailsCollections {

}

/*********************************************
* PageDiagnosticsResult
**********************************************/
export interface PageDiagnosticsResult {
	CreatedDate?: any;
	PageDetails?: Microsoft.SharePoint.Publishing.Diagnostics.PageDetails;
	suggestions?: Array<SP.Publishing.RuleResult>;
	Score?: number;
	ToolDetails?: Microsoft.SharePoint.Publishing.Diagnostics.ToolDetails;
}

/*********************************************
* PageDiagnosticsResultCollections
**********************************************/
export interface PageDiagnosticsResultCollections {

}

/*********************************************
* ToolDetails
**********************************************/
export interface ToolDetails {
	Name?: string;
	Version?: string;
}

/*********************************************
* ToolDetailsCollections
**********************************************/
export interface ToolDetailsCollections {

}

/*********************************************
* PageDiagnostics
**********************************************/
export interface PageDiagnostics {
	LatestDraftVersion?: string;
	LatestPublishedVersion?: string;
	PageFileName?: string;
	Results?: Array<Microsoft.SharePoint.Publishing.Diagnostics.PageDiagnosticsResult>;
}

/*********************************************
* PageDiagnosticsCollections
**********************************************/
export interface PageDiagnosticsCollections {

}
