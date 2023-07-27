import { Base } from "../../../../";
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
* MyRecsCacheBlobCollections
**********************************************/
export interface MyRecsCacheBlobCollections {

}

/*********************************************
* MyRecsQueryInfo
**********************************************/
export interface MyRecsQueryInfo {
	Category?: number;
	ExpertiseTags?: { results: Array<string> };
	FollowedUrls?: { results: Array<string> };
	InterestTags?: { results: Array<string> };
	QueryInfoExists?: boolean;
	SuggestedTags?: { results: Array<string> };
}

/*********************************************
* MyRecsQueryInfoCollections
**********************************************/
export interface MyRecsQueryInfoCollections {

}
