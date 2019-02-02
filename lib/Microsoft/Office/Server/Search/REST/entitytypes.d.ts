import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* ISearchService
**********************************************/
export interface ISearchService extends SearchServiceCollections, SearchServiceMethods, IBaseExecution<ISearchService> {

}

/*********************************************
* ISearchServiceCollection
**********************************************/
export interface ISearchServiceCollection extends IBaseResults<SearchService> {
	done?: (resolve: (value?: Array<SearchService>) => void) => void;
}

/*********************************************
* ISearchServiceQueryCollection
**********************************************/
export interface ISearchServiceQueryCollection extends IBaseResults<SearchServiceQuery> {
	done?: (resolve: (value?: Array<SearchServiceQuery>) => void) => void;
}

/*********************************************
* ISearchServiceQuery
**********************************************/
export interface ISearchServiceQuery extends SearchServiceQuery, SearchServiceMethods {

}

/*********************************************
* SearchService
**********************************************/
export interface SearchService extends IBaseResult, SearchServiceProps, SearchServiceCollections, SearchServiceMethods {

}

/*********************************************
* SearchServiceProps
**********************************************/
export interface SearchServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SearchServicePropMethods
**********************************************/
export interface SearchServicePropMethods {

}

/*********************************************
* SearchServiceCollections
**********************************************/
export interface SearchServiceCollections extends SearchServicePropMethods {

}

/*********************************************
* SearchServiceQuery
**********************************************/
export interface SearchServiceQuery extends IBaseResult, SearchServiceProps, SearchServiceMethods {

}

/*********************************************
* SearchServiceMethods
**********************************************/
export interface SearchServiceMethods {
	autocompletions(querytext?: string, sources?: string, numberOfCompletions?: number, cursorPosition?: number): IBaseExecution<Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults>;
	export(userName?: string, startTime?: any): IBaseExecution<string>;
	exportpopulartenantqueries(): IBaseCollection<Microsoft.SharePoint.Client.Search.Query.PopularTenantQuery>;
	postquery(request?: Microsoft.Office.Server.Search.REST.SearchRequest): IBaseExecution<Microsoft.Office.Server.Search.REST.SearchResult>;
	query(querytext?: string, queryTemplate?: string, enableInterleaving?: boolean, sourceId?: any, rankingModelId?: string, startRow?: number, rowLimit?: number, rowsPerPage?: number, selectProperties?: string, culture?: number, refinementFilters?: string, refiners?: string, hiddenConstraints?: string, sortList?: string, enableStemming?: boolean, trimDuplicates?: boolean, timeout?: number, enableNicknames?: boolean, enablePhonetic?: boolean, enableFQL?: boolean, hitHighlightedProperties?: string, propertiesToGenerateAcronyms?: string, bypassResultTypes?: boolean, processBestBets?: boolean, clientType?: string, personalizationData?: any, resultsUrl?: string, queryTag?: string, trimDuplicatesIncludeId?: number, totalRowsExactMinimum?: number, impressionId?: string, properties?: string, enableQueryRules?: boolean, summaryLength?: number, maxSnippetLength?: number, desiredSnippetLength?: number, uiLanguage?: number, blockDedupeMode?: number, generateBlockRankLog?: boolean, enableSorting?: boolean, collapseSpecification?: string, processPersonalFavorites?: boolean, enableOrderingHitHighlightedProperty?: boolean, hitHighlightedMultivaluePropertyLimit?: number, queryTemplatePropertiesUrl?: string, timeZoneId?: number, useOLSQuery?: number, OLSQuerySession?: string): IBaseExecution<Microsoft.Office.Server.Search.REST.SearchResult>;
	recordPageClick(pageInfo?: string, clickType?: string, blockType?: number, clickedResultId?: string, subResultIndex?: number, immediacySourceId?: string, immediacyQueryString?: string, immediacyTitle?: string, immediacyUrl?: string): IBaseExecution<any>;
	resultspageaddress(): IBaseExecution<string>;
	searchcenterurl(): IBaseExecution<string>;
	suggest(querytext?: string, iNumberOfQuerySuggestions?: number, iNumberOfResultSuggestions?: number, iNumberOfPopularResultSuggestions?: number, fPreQuerySuggestions?: boolean, fHitHighlighting?: boolean, fCapitalizeFirstLetters?: boolean, culture?: number, enableStemming?: boolean, showPeopleNameSuggestions?: boolean, enableQueryRules?: boolean, fPrefixMatchAllTerms?: boolean, sourceId?: string, clientType?: string, useOLSQuery?: number, OLSQuerySession?: string, zeroTermSuggestions?: boolean): IBaseExecution<Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults>;
}

/*********************************************
* ISearchSetting
**********************************************/
export interface ISearchSetting extends SearchSettingCollections, SearchSettingMethods, IBaseQuery<ISearchSettingQuery> {

}

/*********************************************
* ISearchSettingCollection
**********************************************/
export interface ISearchSettingCollection extends IBaseResults<SearchSetting> {
	done?: (resolve: (value?: Array<SearchSetting>) => void) => void;
}

/*********************************************
* ISearchSettingQueryCollection
**********************************************/
export interface ISearchSettingQueryCollection extends IBaseResults<SearchSettingQuery> {
	done?: (resolve: (value?: Array<SearchSettingQuery>) => void) => void;
}

/*********************************************
* ISearchSettingQuery
**********************************************/
export interface ISearchSettingQuery extends SearchSettingQuery, SearchSettingMethods {

}

/*********************************************
* SearchSetting
**********************************************/
export interface SearchSetting extends IBaseResult, SearchSettingProps, SearchSettingCollections, SearchSettingMethods {

}

/*********************************************
* SearchSettingProps
**********************************************/
export interface SearchSettingProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SearchSettingPropMethods
**********************************************/
export interface SearchSettingPropMethods {

}

/*********************************************
* SearchSettingCollections
**********************************************/
export interface SearchSettingCollections extends SearchSettingPropMethods {

}

/*********************************************
* SearchSettingQuery
**********************************************/
export interface SearchSettingQuery extends IBaseResult, SearchSettingProps, SearchSettingMethods {

}

/*********************************************
* SearchSettingMethods
**********************************************/
export interface SearchSettingMethods {
	getpromotedresultqueryrules(siteCollectionLevel?: boolean, offset?: number, numberOfRules?: number): IBaseExecution<Microsoft.Office.Server.Search.REST.PromotedResultsOperationsResult>;
	getqueryconfiguration(callLocalSearchFarmsOnly?: boolean): IBaseExecution<Microsoft.Office.Server.Search.REST.QueryConfiguration>;
	getxssearchpolicy(): IBaseExecution<Microsoft.Office.Server.Search.REST.XSSearchPolicy>;
	pingadminendpoint(): IBaseExecution<boolean>;
	setxssearchpolicy(policy?: string): IBaseExecution<Microsoft.Office.Server.Search.REST.XSSearchPolicy>;
}
