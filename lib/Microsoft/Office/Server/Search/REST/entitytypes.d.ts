

/*********************************************
* SearchService
**********************************************/
export interface SearchService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SearchServiceMethods
**********************************************/
export interface SearchServiceMethods {
	autocompletions<T=Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults>(querytext?: string, sources?: string, numberOfCompletions?: number, cursorPosition?: number): T;
	export<T=string>(userName?: string, startTime?: any): T;
	exportpopulartenantqueries<T=Array<Microsoft.SharePoint.Client.Search.Query.PopularTenantQuery>>(): T;
	postquery<T=Microsoft.Office.Server.Search.REST.SearchResult>(request?: Microsoft.Office.Server.Search.REST.SearchRequest): T;
	query<T=Microsoft.Office.Server.Search.REST.SearchResult>(querytext?: string, queryTemplate?: string, enableInterleaving?: boolean, sourceId?: any, rankingModelId?: string, startRow?: number, rowLimit?: number, rowsPerPage?: number, selectProperties?: string, culture?: number, refinementFilters?: string, refiners?: string, hiddenConstraints?: string, sortList?: string, enableStemming?: boolean, trimDuplicates?: boolean, timeout?: number, enableNicknames?: boolean, enablePhonetic?: boolean, enableFQL?: boolean, hitHighlightedProperties?: string, propertiesToGenerateAcronyms?: string, bypassResultTypes?: boolean, processBestBets?: boolean, clientType?: string, personalizationData?: any, resultsUrl?: string, queryTag?: string, trimDuplicatesIncludeId?: number, totalRowsExactMinimum?: number, impressionId?: string, properties?: string, enableQueryRules?: boolean, summaryLength?: number, maxSnippetLength?: number, desiredSnippetLength?: number, uiLanguage?: number, blockDedupeMode?: number, generateBlockRankLog?: boolean, enableSorting?: boolean, collapseSpecification?: string, processPersonalFavorites?: boolean, enableOrderingHitHighlightedProperty?: boolean, hitHighlightedMultivaluePropertyLimit?: number, queryTemplatePropertiesUrl?: string, timeZoneId?: number, useOLSQuery?: number, OLSQuerySession?: string): T;
	recordPageClick<T=void>(pageInfo?: string, clickType?: string, blockType?: number, clickedResultId?: string, subResultIndex?: number, immediacySourceId?: string, immediacyQueryString?: string, immediacyTitle?: string, immediacyUrl?: string): T;
	resultspageaddress<T=string>(): T;
	searchcenterurl<T=string>(): T;
	suggest<T=Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults>(querytext?: string, iNumberOfQuerySuggestions?: number, iNumberOfResultSuggestions?: number, iNumberOfPopularResultSuggestions?: number, fPreQuerySuggestions?: boolean, fHitHighlighting?: boolean, fCapitalizeFirstLetters?: boolean, culture?: number, enableStemming?: boolean, showPeopleNameSuggestions?: boolean, enableQueryRules?: boolean, fPrefixMatchAllTerms?: boolean, sourceId?: string, clientType?: string, useOLSQuery?: number, OLSQuerySession?: string, zeroTermSuggestions?: boolean): T;
}

/*********************************************
* SearchSetting
**********************************************/
export interface SearchSetting {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SearchSettingMethods
**********************************************/
export interface SearchSettingMethods {
	getpromotedresultqueryrules<T=Microsoft.Office.Server.Search.REST.PromotedResultsOperationsResult>(siteCollectionLevel?: boolean, offset?: number, numberOfRules?: number): T;
	getqueryconfiguration<T=Microsoft.Office.Server.Search.REST.QueryConfiguration>(callLocalSearchFarmsOnly?: boolean): T;
	getxssearchpolicy<T=Microsoft.Office.Server.Search.REST.XSSearchPolicy>(): T;
	pingadminendpoint<T=boolean>(): T;
	setxssearchpolicy<T=Microsoft.Office.Server.Search.REST.XSSearchPolicy>(policy?: string): T;
}
