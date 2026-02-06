import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* BAAAItemProviderRequest
**********************************************/
export interface BAAAItemProviderRequest {
	ItemProviderType?: number;
	ListOfIds?: Microsoft.SharePoint.SiteManager.ListOfIdsProviderParameters;
}

/*********************************************
* BAAAItemProviderRequestCollections
**********************************************/
export interface BAAAItemProviderRequestCollections {

}

/*********************************************
* ListOfIdsProviderParameters
**********************************************/
export interface ListOfIdsProviderParameters {
	ListId?: any;
	ListItemIds?: { results: Array<number> };
}

/*********************************************
* ListOfIdsProviderParametersCollections
**********************************************/
export interface ListOfIdsProviderParametersCollections {

}

/*********************************************
* BAAARequest
**********************************************/
export interface BAAARequest {
	BAAAItemProviderRequest?: Microsoft.SharePoint.SiteManager.BAAAItemProviderRequest;
	ForceRunAsync?: boolean;
	IsDebug?: boolean;
	TaskParameters?: Microsoft.SharePoint.SiteManager.BAAATaskParameters;
}

/*********************************************
* BAAARequestCollections
**********************************************/
export interface BAAARequestCollections {

}

/*********************************************
* BAAATaskParameters
**********************************************/
export interface BAAATaskParameters {
	BulkRetire?: Microsoft.SharePoint.SiteManager.BulkRetireTaskParameters;
	TaskType?: number;
}

/*********************************************
* BAAATaskParametersCollections
**********************************************/
export interface BAAATaskParametersCollections {

}

/*********************************************
* BulkRetireTaskParameters
**********************************************/
export interface BulkRetireTaskParameters {
	ForceRetire?: boolean;
}

/*********************************************
* BulkRetireTaskParametersCollections
**********************************************/
export interface BulkRetireTaskParametersCollections {

}

/*********************************************
* BAAAResponse
**********************************************/
export interface BAAAResponse {
	PageToken?: string;
	TaskResults?: { results: Array<Microsoft.SharePoint.SiteManager.BAAATaskResult> };
	WorkItemId?: any;
}

/*********************************************
* BAAAResponseCollections
**********************************************/
export interface BAAAResponseCollections {

}

/*********************************************
* BAAATaskResult
**********************************************/
export interface BAAATaskResult {
	ErrorCode?: number;
	ErrorMessage?: string;
	ResponseStatus?: number;
	TaskListId?: any;
	TaskListItemId?: number;
	TaskResultDetails?: Microsoft.SharePoint.SiteManager.BAAATaskResultDetails;
}

/*********************************************
* BAAATaskResultCollections
**********************************************/
export interface BAAATaskResultCollections {

}

/*********************************************
* BAAATaskResultDetails
**********************************************/
export interface BAAATaskResultDetails {
	BulkRetire?: Microsoft.SharePoint.SiteManager.BulkRetireTaskResult;
	ScanForMissingLinks?: Microsoft.SharePoint.SiteManager.ScanForMissingLinksTaskResult;
}

/*********************************************
* BAAATaskResultDetailsCollections
**********************************************/
export interface BAAATaskResultDetailsCollections {

}

/*********************************************
* BulkRetireTaskResult
**********************************************/
export interface BulkRetireTaskResult {
	PagePath?: string;
	PageTitle?: string;
	PendingChangesDiscarded?: boolean;
}

/*********************************************
* BulkRetireTaskResultCollections
**********************************************/
export interface BulkRetireTaskResultCollections {

}

/*********************************************
* ScanForMissingLinksTaskResult
**********************************************/
export interface ScanForMissingLinksTaskResult {
	MissingLinks?: { results: Array<string> };
}

/*********************************************
* ScanForMissingLinksTaskResultCollections
**********************************************/
export interface ScanForMissingLinksTaskResultCollections {

}

/*********************************************
* DocumentsDataSource
**********************************************/
export interface DocumentsDataSource {
	documentFolderId?: string;
	documentLibraryId?: string;
}

/*********************************************
* DocumentsDataSourceCollections
**********************************************/
export interface DocumentsDataSourceCollections {

}

/*********************************************
* MissingLinkReferrer
**********************************************/
export interface MissingLinkReferrer {
	Title?: string;
	Url?: string;
}

/*********************************************
* MissingLinkReferrerCollections
**********************************************/
export interface MissingLinkReferrerCollections {

}

/*********************************************
* MissingLinksResult
**********************************************/
export interface MissingLinksResult {
	MissingLinks?: { results: Array<Microsoft.SharePoint.SiteManager.MissingLink> };
}

/*********************************************
* MissingLinksResultCollections
**********************************************/
export interface MissingLinksResultCollections {

}

/*********************************************
* MissingLink
**********************************************/
export interface MissingLink {
	Hits?: number;
	NotFoundUrl?: string;
	Referrers?: { results: Array<Microsoft.SharePoint.SiteManager.MissingLinkReferrer> };
}

/*********************************************
* MissingLinkCollections
**********************************************/
export interface MissingLinkCollections {

}

/*********************************************
* RetirablePageMetadata
**********************************************/
export interface RetirablePageMetadata {
	Description?: string;
	LastActivityTimestamp?: any;
	Path?: string;
	PictureThumbnailUrl?: string;
	Title?: string;
}

/*********************************************
* RetirablePageMetadataCollections
**********************************************/
export interface RetirablePageMetadataCollections {

}

/*********************************************
* RetirablePagesQueryResult
**********************************************/
export interface RetirablePagesQueryResult {
	Files?: { results: Array<Microsoft.SharePoint.SiteManager.RetirablePageMetadata> };
}

/*********************************************
* RetirablePagesQueryResultCollections
**********************************************/
export interface RetirablePagesQueryResultCollections {

}

/*********************************************
* SiteManagerSignals
**********************************************/
export interface SiteManagerSignals {
	RetirePageSignals?: Microsoft.SharePoint.SiteManager.SMARetirePageSignal;
}

/*********************************************
* SiteManagerSignalsCollections
**********************************************/
export interface SiteManagerSignalsCollections {

}

/*********************************************
* SMARetirePageSignal
**********************************************/
export interface SMARetirePageSignal {
	MinimumAge?: Microsoft.SharePoint.SiteManager.SMARetirePageMinimumAgeFeedbackSignal;
}

/*********************************************
* SMARetirePageSignalCollections
**********************************************/
export interface SMARetirePageSignalCollections {

}

/*********************************************
* SMARetirePageMinimumAgeFeedbackSignal
**********************************************/
export interface SMARetirePageMinimumAgeFeedbackSignal {
	DefaultAge?: number;
	FromDismissAction?: number;
	FromEmptyState?: number;
	PreferredAge?: number;
}

/*********************************************
* SMARetirePageMinimumAgeFeedbackSignalCollections
**********************************************/
export interface SMARetirePageMinimumAgeFeedbackSignalCollections {

}

/*********************************************
* SuggestionItem
**********************************************/
export interface SuggestionItem {
	DismissedDate?: any;
	Identifier?: string;
	Metadata?: string;
	State?: number;
	SuggestionType?: number;
}

/*********************************************
* SuggestionItemCollections
**********************************************/
export interface SuggestionItemCollections {

}

/*********************************************
* TopSiteFilesResult
**********************************************/
export interface TopSiteFilesResult {
	Files?: { results: Array<Microsoft.SharePoint.SiteManager.TopSiteFile> };
}

/*********************************************
* TopSiteFilesResultCollections
**********************************************/
export interface TopSiteFilesResultCollections {

}

/*********************************************
* TopSiteFile
**********************************************/
export interface TopSiteFile {
	ContentTypeId?: string;
	ListId?: any;
	Source?: number;
	UniqueId?: any;
}

/*********************************************
* TopSiteFileCollections
**********************************************/
export interface TopSiteFileCollections {

}
