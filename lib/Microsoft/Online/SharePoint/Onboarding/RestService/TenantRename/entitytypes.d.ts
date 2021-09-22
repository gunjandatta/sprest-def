import { Base } from "../../../../../../";
import { Microsoft } from "../../../../../../";

/*********************************************
* TenantRenameJobEntityData
**********************************************/
export interface TenantRenameJobEntityData {
	IncludeGestures?: string;
	JobId?: any;
	ScheduledDateTimeInUtc?: any;
	SkipDomainCheck?: boolean;
	SourceAdminSiteUrl?: string;
	SourceMySiteHostUrl?: string;
	SourceRootSiteUrl?: string;
	TargetAdminSiteUrl?: string;
	TargetDomainPrefix?: string;
	TargetMySiteHostUrl?: string;
	TargetRootSiteUrl?: string;
	UseV2TenantRename?: boolean;
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
	AttentionRequired?: number;
	DateTimeFormat?: string;
	FailedSitesCount?: number;
	InprogressSitesCount?: number;
	JobState?: string;
	QueuedSitesCount?: number;
	RenamedSitesCount?: number;
	RequestedAt?: any;
	ResponseMessages?: { results: Array<string> };
	SuccessSitesCount?: number;
	SuspendedSitesCount?: number;
	TotalSitesCount?: number;
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
	cancel(): Base.IBaseExecution<any>;
	get(): Base.IBaseExecution<Microsoft.Online.SharePoint.Onboarding.RestService.TenantRename.TenantRenameJob>;
	getWarningMessages(): Base.IBaseExecution<Array<string>>;
}
