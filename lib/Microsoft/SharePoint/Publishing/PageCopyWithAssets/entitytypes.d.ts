import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* PageCopyResponse
**********************************************/
export interface PageCopyResponse {
	CanvasString?: string;
	CompletedAssets?: { results: Array<string> };
	CopyToStatusAPI?: string;
	ErrorMessage?: string;
	ErrorType?: number;
	JobState?: number;
	NewPageUniqueId?: any;
	NewPageUrl?: string;
	TotalAssetsToCopy?: number;
	Warnings?: { results: Array<Microsoft.SharePoint.Publishing.PageCopyWithAssets.PageDeepCopyWarning> };
	WorkItemId?: any;
}

/*********************************************
* PageCopyResponseCollections
**********************************************/
export interface PageCopyResponseCollections {

}
