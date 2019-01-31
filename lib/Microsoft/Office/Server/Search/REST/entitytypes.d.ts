import { IBaseExecution } from "../../../../../";

/*********************************************
* ISearchService
**********************************************/
export interface ISearchService extends SearchServiceProps,SearchServiceMethods,IBaseExecution<SearchService> {

}

/*********************************************
* SearchService
**********************************************/
export interface SearchService extends SearchServiceProps, SearchServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SearchServiceProps
**********************************************/
export interface SearchServiceProps {

}

/*********************************************
* SearchServiceMethods
**********************************************/
export interface SearchServiceMethods {
	autocompletions<T=Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults>(querytext?: string, sources?: string, numberOfCompletions?: number, cursorPosition?: number): IBaseExecution<T>;
	export<T=string>(userName?: string, startTime?: any): IBaseExecution<T>;
	exportpopulartenantqueries<T=Array<Microsoft.SharePoint.Client.Search.Query.PopularTenantQuery>>(): IBaseExecution<T>;
	postquery<T=Microsoft.Office.Server.Search.REST.SearchResult>(request?: Microsoft.Office.Server.Search.REST.SearchRequest): IBaseExecution<T>;
	query<T=Microsoft.Office.Server.Search.REST.SearchResult>(querytext?: string, queryTemplate?: string, enableInterleaving?: boolean, sourceId?: any, rankingModelId?: string, startRow?: number, rowLimit?: number, rowsPerPage?: number, selectProperties?: string, culture?: number, refinementFilters?: string, refiners?: string, hiddenConstraints?: string, sortList?: string, enableStemming?: boolean, trimDuplicates?: boolean, timeout?: number, enableNicknames?: boolean, enablePhonetic?: boolean, enableFQL?: boolean, hitHighlightedProperties?: string, propertiesToGenerateAcronyms?: string, bypassResultTypes?: boolean, processBestBets?: boolean, clientType?: string, personalizationData?: any, resultsUrl?: string, queryTag?: string, trimDuplicatesIncludeId?: number, totalRowsExactMinimum?: number, impressionId?: string, properties?: string, enableQueryRules?: boolean, summaryLength?: number, maxSnippetLength?: number, desiredSnippetLength?: number, uiLanguage?: number, blockDedupeMode?: number, generateBlockRankLog?: boolean, enableSorting?: boolean, collapseSpecification?: string, processPersonalFavorites?: boolean, enableOrderingHitHighlightedProperty?: boolean, hitHighlightedMultivaluePropertyLimit?: number, queryTemplatePropertiesUrl?: string, timeZoneId?: number, useOLSQuery?: number, OLSQuerySession?: string): IBaseExecution<T>;
	recordPageClick<T=any>(pageInfo?: string, clickType?: string, blockType?: number, clickedResultId?: string, subResultIndex?: number, immediacySourceId?: string, immediacyQueryString?: string, immediacyTitle?: string, immediacyUrl?: string): IBaseExecution<T>;
	resultspageaddress<T=string>(): IBaseExecution<T>;
	searchcenterurl<T=string>(): IBaseExecution<T>;
	suggest<T=Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults>(querytext?: string, iNumberOfQuerySuggestions?: number, iNumberOfResultSuggestions?: number, iNumberOfPopularResultSuggestions?: number, fPreQuerySuggestions?: boolean, fHitHighlighting?: boolean, fCapitalizeFirstLetters?: boolean, culture?: number, enableStemming?: boolean, showPeopleNameSuggestions?: boolean, enableQueryRules?: boolean, fPrefixMatchAllTerms?: boolean, sourceId?: string, clientType?: string, useOLSQuery?: number, OLSQuerySession?: string, zeroTermSuggestions?: boolean): IBaseExecution<T>;
}

/*********************************************
* ISearchSetting
**********************************************/
export interface ISearchSetting extends SearchSettingProps,SearchSettingMethods,IBaseExecution<SearchSetting> {

}

/*********************************************
* SearchSetting
**********************************************/
export interface SearchSetting extends SearchSettingProps, SearchSettingMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SearchSettingProps
**********************************************/
export interface SearchSettingProps {

}

/*********************************************
* SearchSettingMethods
**********************************************/
export interface SearchSettingMethods {
	getpromotedresultqueryrules<T=Microsoft.Office.Server.Search.REST.PromotedResultsOperationsResult>(siteCollectionLevel?: boolean, offset?: number, numberOfRules?: number): IBaseExecution<T>;
	getqueryconfiguration<T=Microsoft.Office.Server.Search.REST.QueryConfiguration>(callLocalSearchFarmsOnly?: boolean): IBaseExecution<T>;
	getxssearchpolicy<T=Microsoft.Office.Server.Search.REST.XSSearchPolicy>(): IBaseExecution<T>;
	pingadminendpoint<T=boolean>(): IBaseExecution<T>;
	setxssearchpolicy<T=Microsoft.Office.Server.Search.REST.XSSearchPolicy>(policy?: string): IBaseExecution<T>;
}
