import { Base } from "../../../../../../";
import { Microsoft } from "../../../../../../";

/*********************************************
* TenantRenameJobEntityData
**********************************************/
export interface TenantRenameJobEntityData {
	SkipDomainCheck?: boolean;
	SourceAdminSiteUrl?: string;
	SourceDomainPrefixFixup?: string;
	SourceMySiteHostUrl?: string;
	SourceRootSiteUrl?: string;
	TargetAdminSiteUrl?: string;
	TargetDomainPrefix?: string;
	TargetMySiteHostUrl?: string;
	TargetRootSiteUrl?: string;
}

/*********************************************
* TenantRenameJobEntityDataCollections
**********************************************/
export interface TenantRenameJobEntityDataCollections {

}

/*********************************************
* TenantRenameJob
**********************************************/
export interface TenantRenameJob {
	JobId?: any;
	JobState?: string;
	TriggeredBy?: string;
}

/*********************************************
* TenantRenameJobCollections
**********************************************/
export interface TenantRenameJobCollections extends TenantRenameJobCollectionMethods {

}

/*********************************************
* TenantRenameJobCollectionMethods
**********************************************/
export interface TenantRenameJobCollectionMethods {
	getState(): Base.IBaseExecution<Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJob>;
}
