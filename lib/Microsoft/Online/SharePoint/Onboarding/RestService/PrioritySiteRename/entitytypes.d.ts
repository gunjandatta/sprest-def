import { Base } from "../../../../../../";
import { Microsoft } from "../../../../../../";

/*********************************************
* PrioritySiteRenameJobEntityData
**********************************************/
export interface PrioritySiteRenameJobEntityData {
	SiteUrl?: string;
}

/*********************************************
* PrioritySiteRenameJobEntityDataCollections
**********************************************/
export interface PrioritySiteRenameJobEntityDataCollections {

}

/*********************************************
* PrioritySiteRenameJob
**********************************************/
export interface PrioritySiteRenameJob {
	JobId?: any;
	PrioritizedSiteCount?: number;
	ResponseMessages?: { results: Array<string> };
}

/*********************************************
* PrioritySiteRenameJobCollections
**********************************************/
export interface PrioritySiteRenameJobCollections extends PrioritySiteRenameJobCollectionMethods {

}

/*********************************************
* PrioritySiteRenameJobCollectionMethods
**********************************************/
export interface PrioritySiteRenameJobCollectionMethods {
	cancel(url?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.Onboarding.RestService.PrioritySiteRename.PrioritySiteRenameJob>;
	get(): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.Onboarding.RestService.PrioritySiteRename.PrioritySiteRenameJob>>;
}
