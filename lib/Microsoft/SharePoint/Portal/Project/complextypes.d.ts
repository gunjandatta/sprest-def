import { Microsoft } from "../../../../";

/*********************************************
* MyRecsCacheBlob
**********************************************/
export interface MyRecsCacheBlob {
	DateCached?: any;
	FillInQuery?: string;
	FillInSortBy?: string;
	Query?: string;
	QueryInfo?: Microsoft.SharePoint.Portal.Project.MyRecsQueryInfo;
	Result?: string;
	SortBy?: string;
}

/*********************************************
* MyRecsQueryInfo
**********************************************/
export interface MyRecsQueryInfo {
	Category?: number;
	ExpertiseTags?: Array<string>;
	FollowedUrls?: Array<string>;
	InterestTags?: Array<string>;
	QueryInfoExists?: boolean;
	SuggestedTags?: Array<string>;
}
