import { Base } from "../../../../../../";
import { Microsoft } from "../../../../../../";

/*********************************************
* SiteRenameJobEntityData
**********************************************/
export interface SiteRenameJobEntityData {
	SkipGestures?: string;
	SourceSiteUrl?: string;
	TargetSiteTitle?: string;
	TargetSiteUrl?: string;
}

/*********************************************
* SiteRenameJobEntityDataCollections
**********************************************/
export interface SiteRenameJobEntityDataCollections {

}

/*********************************************
* SiteRenameJob
**********************************************/
export interface SiteRenameJob {
	ErrorCode?: number;
	ErrorDescription?: string;
	JobId?: any;
	JobState?: string;
	SiteId?: any;
	TriggeredBy?: string;
}

/*********************************************
* SiteRenameJobCollections
**********************************************/
export interface SiteRenameJobCollections extends SiteRenameJobCollectionMethods {

}

/*********************************************
* SiteRenameJobCollectionMethods
**********************************************/
export interface SiteRenameJobCollectionMethods {
	getBySiteUrl(siteUrl?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob> & Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJobCollections;
	getJobsBySiteUrl(url?: string): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob>>;
	getSiteRenameReport(state?: number): Base.IBaseExecution<Array<Microsoft.Online.SharePoint.Onboarding.RestService.Service.SiteRenameJob>>;
}
