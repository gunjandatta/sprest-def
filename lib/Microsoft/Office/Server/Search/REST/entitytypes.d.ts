import { Microsoft } from "../../../../../";

/*********************************************
* SearchService
**********************************************/
export interface SearchService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SearchServiceMethods<T = any>
**********************************************/
export interface SearchServiceMethods<T = any> {
	autocompletions(querytext?: string, sources?: string, numberOfCompletions?: number, cursorPosition?: number): T;
	export(userName?: string, startTime?: any): T;
	exportpopulartenantqueries(): T;
	postquery(request?: Microsoft.Office.Server.Search.REST.SearchRequest): T;
	query(querytext?: string, queryTemplate?: string, enableInterleaving?: boolean, sourceId?: any, rankingModelId?: string, startRow?: number, rowLimit?: number, rowsPerPage?: number, selectProperties?: string, culture?: number, refinementFilters?: string, refiners?: string, hiddenConstraints?: string, sortList?: string, enableStemming?: boolean, trimDuplicates?: boolean, timeout?: number, enableNicknames?: boolean, enablePhonetic?: boolean, enableFQL?: boolean, hitHighlightedProperties?: string, propertiesToGenerateAcronyms?: string, bypassResultTypes?: boolean, processBestBets?: boolean, clientType?: string, personalizationData?: any, resultsUrl?: string, queryTag?: string, trimDuplicatesIncludeId?: number, totalRowsExactMinimum?: number, impressionId?: string, properties?: string, enableQueryRules?: boolean, summaryLength?: number, maxSnippetLength?: number, desiredSnippetLength?: number, uiLanguage?: number, blockDedupeMode?: number, generateBlockRankLog?: boolean, enableSorting?: boolean, collapseSpecification?: string, processPersonalFavorites?: boolean, enableOrderingHitHighlightedProperty?: boolean, hitHighlightedMultivaluePropertyLimit?: number, queryTemplatePropertiesUrl?: string, timeZoneId?: number, useOLSQuery?: number, OLSQuerySession?: string): T;
	recordPageClick(pageInfo?: string, clickType?: string, blockType?: number, clickedResultId?: string, subResultIndex?: number, immediacySourceId?: string, immediacyQueryString?: string, immediacyTitle?: string, immediacyUrl?: string): T;
	resultspageaddress(): T;
	searchcenterurl(): T;
	suggest(querytext?: string, iNumberOfQuerySuggestions?: number, iNumberOfResultSuggestions?: number, iNumberOfPopularResultSuggestions?: number, fPreQuerySuggestions?: boolean, fHitHighlighting?: boolean, fCapitalizeFirstLetters?: boolean, culture?: number, enableStemming?: boolean, showPeopleNameSuggestions?: boolean, enableQueryRules?: boolean, fPrefixMatchAllTerms?: boolean, sourceId?: string, clientType?: string, useOLSQuery?: number, OLSQuerySession?: string, zeroTermSuggestions?: boolean): T;
}

/*********************************************
* SearchSetting
**********************************************/
export interface SearchSetting {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SearchSettingMethods<T = any>
**********************************************/
export interface SearchSettingMethods<T = any> {
	getpromotedresultqueryrules(siteCollectionLevel?: boolean, offset?: number, numberOfRules?: number): T;
	getqueryconfiguration(callLocalSearchFarmsOnly?: boolean): T;
	getxssearchpolicy(): T;
	pingadminendpoint(): T;
	setxssearchpolicy(policy?: string): T;
}
