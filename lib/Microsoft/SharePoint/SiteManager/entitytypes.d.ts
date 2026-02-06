import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* ISiteManagerService
**********************************************/
export interface ISiteManagerService extends SiteManagerServiceCollections, SiteManagerServiceMethods, Base.IBaseQuery<SiteManagerService, ISiteManagerServiceQuery> {

}

/*********************************************
* ISiteManagerServiceCollection
**********************************************/
export interface ISiteManagerServiceCollection extends Base.IBaseResults<SiteManagerService> {
	done?: (resolve: (value?: Array<SiteManagerService>) => void) => void;
}

/*********************************************
* ISiteManagerServiceQueryCollection
**********************************************/
export interface ISiteManagerServiceQueryCollection extends Base.IBaseResults<SiteManagerServiceOData> {
	done?: (resolve: (value?: Array<SiteManagerServiceOData>) => void) => void;
}

/*********************************************
* ISiteManagerServiceQuery
**********************************************/
export interface ISiteManagerServiceQuery extends SiteManagerServiceOData, SiteManagerServiceMethods {

}

/*********************************************
* SiteManagerService
**********************************************/
export interface SiteManagerService extends Base.IBaseResult, SiteManagerServiceProps, SiteManagerServiceCollections, SiteManagerServiceMethods {

}

/*********************************************
* SiteManagerServiceProps
**********************************************/
export interface SiteManagerServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteManagerServicePropMethods
**********************************************/
export interface SiteManagerServicePropMethods {

}

/*********************************************
* SiteManagerServiceCollections
**********************************************/
export interface SiteManagerServiceCollections extends SiteManagerServicePropMethods {

}

/*********************************************
* SiteManagerServiceOData
**********************************************/
export interface SiteManagerServiceOData extends Base.IBaseResult, SiteManagerServiceProps, SiteManagerServiceMethods {

}

/*********************************************
* SiteManagerServiceMethods
**********************************************/
export interface SiteManagerServiceMethods {
	addSuggestionItems(suggestionItems?: Array<Microsoft.SharePoint.SiteManager.SuggestionItem>): Base.IBaseExecution<any>;
	deleteSuggestionItemsByIdentifiers(cardType?: number, identifiers?: Array<string>): Base.IBaseExecution<any>;
	ensureMissingLinksListFeature(): Base.IBaseExecution<any>;
	ensureRedirectUrlListFeature(): Base.IBaseExecution<any>;
	ensureRetirePageFeature(): Base.IBaseExecution<any>;
	ensureSuggestionListFeature(): Base.IBaseExecution<any>;
	getDismissedContentGapSuggestions(): Base.IBaseCollection<Microsoft.SharePoint.SiteManager.SuggestionItem>;
	logMissingLink(referrerUrl?: string, destinationUrl?: string): Base.IBaseExecution<any>;
	performBAAA(baaaRequest?: Microsoft.SharePoint.SiteManager.BAAARequest): Base.IBaseExecution<Microsoft.SharePoint.SiteManager.BAAAResponse>;
	retirablePages(top?: number, skipToken?: string, isDebug?: boolean, snoozedPaths?: string, isDocument?: boolean, dataSources?: Array<Microsoft.SharePoint.SiteManager.DocumentsDataSource>): Base.IBaseExecution<Microsoft.SharePoint.SiteManager.RetirablePagesQueryResult>;
	retiredPagesView(): Base.IBaseExecution<any>;
	setSiteManagerSignals(signals?: Microsoft.SharePoint.SiteManager.SiteManagerSignals): Base.IBaseExecution<any>;
	siteManagerSignals(): Base.IBaseExecution<Microsoft.SharePoint.SiteManager.SiteManagerSignals>;
	topFiles(maxCount?: number): Base.IBaseExecution<Microsoft.SharePoint.SiteManager.TopSiteFilesResult>;
	topMissingLinks(maxCount?: number, snoozedLinks?: string): Base.IBaseExecution<Microsoft.SharePoint.SiteManager.MissingLinksResult>;
}
