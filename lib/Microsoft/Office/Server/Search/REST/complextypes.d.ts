import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../../../";
import { SP } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* ContextCondition
**********************************************/
export interface ContextCondition {
	ContextConditionType?: string;
	SourceId?: any;
}

/*********************************************
* ContextConditionCollections
**********************************************/
export interface ContextConditionCollections {

}

/*********************************************
* CustomResult
**********************************************/
export interface CustomResult {
	GroupTemplateId?: string;
	ItemTemplateId?: string;
	Properties?: { results: Array<SP.KeyValue> };
	ResultTitle?: string;
	ResultTitleUrl?: string;
	Table?: SP.SimpleDataTable;
	TableType?: string;
}

/*********************************************
* CustomResultCollections
**********************************************/
export interface CustomResultCollections {

}

/*********************************************
* ExpandedQueryParameters
**********************************************/
export interface ExpandedQueryParameters {
	Properties?: { results: Array<SP.KeyValue> };
}

/*********************************************
* ExpandedQueryParametersCollections
**********************************************/
export interface ExpandedQueryParametersCollections {

}

/*********************************************
* PromotedResultQueryRule
**********************************************/
export interface PromotedResultQueryRule {
	Contact?: string;
	ContextConditions?: { results: Array<Microsoft.Office.Server.Search.REST.ContextCondition> };
	CreationDate?: any;
	DisplayName?: string;
	EndDate?: any;
	IsPromotedResultsOnly?: boolean;
	LastModifiedDate?: any;
	PromotedResults?: { results: Array<Microsoft.Office.Server.Search.REST.PromotedResults> };
	QueryConditions?: { results: Array<Microsoft.Office.Server.Search.REST.QueryCondition> };
	ReviewDate?: any;
	StartDate?: any;
}

/*********************************************
* PromotedResultQueryRuleCollections
**********************************************/
export interface PromotedResultQueryRuleCollections {

}

/*********************************************
* PromotedResults
**********************************************/
export interface PromotedResults {
	Description?: string;
	IsVisual?: boolean;
	LastModifiedTime?: any;
	Title?: string;
	Url?: string;
}

/*********************************************
* PromotedResultsCollections
**********************************************/
export interface PromotedResultsCollections {

}

/*********************************************
* QueryCondition
**********************************************/
export interface QueryCondition {
	LCID?: number;
	MatchingOptions?: string;
	QueryConditionType?: string;
	SubjectTermsOrigin?: string;
	Terms?: { results: Array<string> };
}

/*********************************************
* QueryConditionCollections
**********************************************/
export interface QueryConditionCollections {

}

/*********************************************
* PromotedResultsOperationsResult
**********************************************/
export interface PromotedResultsOperationsResult {
	Result?: { results: Array<Microsoft.Office.Server.Search.REST.PromotedResultQueryRule> };
	SearchObjectOwner?: Microsoft.Office.Server.Search.REST.SearchObjectOwnerResult;
}

/*********************************************
* PromotedResultsOperationsResultCollections
**********************************************/
export interface PromotedResultsOperationsResultCollections {

}

/*********************************************
* SearchObjectOwnerResult
**********************************************/
export interface SearchObjectOwnerResult {
	SiteCollectionId?: string;
	SiteId?: string;
	TenantId?: string;
}

/*********************************************
* SearchObjectOwnerResultCollections
**********************************************/
export interface SearchObjectOwnerResultCollections {

}

/*********************************************
* QueryConfiguration
**********************************************/
export interface QueryConfiguration {
	QueryContext?: Microsoft.Office.Server.Search.REST.QueryContext;
	QueryParameters?: Microsoft.Office.Server.Search.REST.ExpandedQueryParameters;
	QueryRoutingInfo?: Microsoft.Office.Server.Search.REST.QueryRoutingInfo;
	SearchEndpoints?: Microsoft.Office.Server.Search.REST.SearchEndpoints;
}

/*********************************************
* QueryConfigurationCollections
**********************************************/
export interface QueryConfigurationCollections {

}

/*********************************************
* QueryContext
**********************************************/
export interface QueryContext {
	PortalUrl?: string;
	SpSiteId?: any;
	SpWebId?: any;
}

/*********************************************
* QueryContextCollections
**********************************************/
export interface QueryContextCollections {

}

/*********************************************
* QueryRoutingInfo
**********************************************/
export interface QueryRoutingInfo {
	QueryState?: number;
	SearchEndpoints?: { results: Array<Microsoft.Office.Server.Search.REST.SearchEndpoints> };
}

/*********************************************
* QueryRoutingInfoCollections
**********************************************/
export interface QueryRoutingInfoCollections {

}

/*********************************************
* SearchEndpoints
**********************************************/
export interface SearchEndpoints {
	AdminEndpoint?: string;
	AfdEndpoint?: string;
	Geolocation?: string;
	QueryContext?: Microsoft.Office.Server.Search.REST.QueryContext;
	QueryEndpoint?: string;
}

/*********************************************
* SearchEndpointsCollections
**********************************************/
export interface SearchEndpointsCollections {

}

/*********************************************
* QueryProperty
**********************************************/
export interface QueryProperty {
	Name?: string;
	Value?: Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue;
}

/*********************************************
* QueryPropertyCollections
**********************************************/
export interface QueryPropertyCollections {

}

/*********************************************
* QueryResult
**********************************************/
export interface QueryResult {
	CustomResults?: { results: Array<Microsoft.Office.Server.Search.REST.CustomResult> };
	QueryId?: string;
	QueryRuleId?: any;
	RefinementResults?: Microsoft.Office.Server.Search.REST.RefinementResults;
	RelevantResults?: Microsoft.Office.Server.Search.REST.RelevantResults;
	SpecialTermResults?: Microsoft.Office.Server.Search.REST.SpecialTermResults;
}

/*********************************************
* QueryResultCollections
**********************************************/
export interface QueryResultCollections {

}

/*********************************************
* RefinementResults
**********************************************/
export interface RefinementResults {
	GroupTemplateId?: string;
	ItemTemplateId?: string;
	Properties?: { results: Array<SP.KeyValue> };
	Refiners?: { results: Array<Microsoft.Office.Server.Search.REST.Refiner> };
	ResultTitle?: string;
	ResultTitleUrl?: string;
}

/*********************************************
* RefinementResultsCollections
**********************************************/
export interface RefinementResultsCollections {

}

/*********************************************
* Refiner
**********************************************/
export interface Refiner {
	Entries?: { results: Array<Microsoft.Office.Server.Search.REST.RefinerEntry> };
	Name?: string;
}

/*********************************************
* RefinerCollections
**********************************************/
export interface RefinerCollections {

}

/*********************************************
* RefinerEntry
**********************************************/
export interface RefinerEntry {
	RefinementCount?: number;
	RefinementName?: string;
	RefinementToken?: string;
	RefinementValue?: string;
}

/*********************************************
* RefinerEntryCollections
**********************************************/
export interface RefinerEntryCollections {

}

/*********************************************
* RelevantResults
**********************************************/
export interface RelevantResults {
	GroupTemplateId?: string;
	ItemTemplateId?: string;
	Properties?: { results: Array<SP.KeyValue> };
	ResultTitle?: string;
	ResultTitleUrl?: string;
	RowCount?: number;
	Table?: SP.SimpleDataTable;
	TotalRows?: number;
	TotalRowsIncludingDuplicates?: number;
}

/*********************************************
* RelevantResultsCollections
**********************************************/
export interface RelevantResultsCollections {

}

/*********************************************
* SpecialTermResults
**********************************************/
export interface SpecialTermResults {
	GroupTemplateId?: string;
	ItemTemplateId?: string;
	Properties?: { results: Array<SP.KeyValue> };
	Results?: { results: Array<Microsoft.Office.Server.Search.REST.SpecialTermResult> };
	ResultTitle?: string;
	ResultTitleUrl?: string;
}

/*********************************************
* SpecialTermResultsCollections
**********************************************/
export interface SpecialTermResultsCollections {

}

/*********************************************
* SpecialTermResult
**********************************************/
export interface SpecialTermResult {
	Description?: string;
	IsVisualBestBet?: boolean;
	PiSearchResultId?: string;
	RenderTemplateId?: string;
	Title?: string;
	Url?: string;
}

/*********************************************
* SpecialTermResultCollections
**********************************************/
export interface SpecialTermResultCollections {

}

/*********************************************
* SearchRequest
**********************************************/
export interface SearchRequest {
	BlockDedupeMode?: number;
	BypassResultTypes?: boolean;
	ClientType?: string;
	CollapseSpecification?: string;
	Culture?: number;
	DesiredSnippetLength?: number;
	EnableFQL?: boolean;
	EnableInterleaving?: boolean;
	EnableNicknames?: boolean;
	EnableOrderingHitHighlightedProperty?: boolean;
	EnablePhonetic?: boolean;
	EnableQueryRules?: boolean;
	EnableSorting?: boolean;
	EnableStemming?: boolean;
	GenerateBlockRankLog?: boolean;
	HiddenConstraints?: string;
	HitHighlightedMultivaluePropertyLimit?: number;
	HitHighlightedProperties?: { results: Array<string> };
	ImpressionId?: string;
	MaxSnippetLength?: number;
	OLSQuerySession?: string;
	PersonalizationData?: any;
	ProcessBestBets?: boolean;
	ProcessPersonalFavorites?: boolean;
	Properties?: { results: Array<Microsoft.Office.Server.Search.REST.QueryProperty> };
	PropertiesToGenerateAcronyms?: { results: Array<string> };
	QueryTag?: string;
	QueryTemplate?: string;
	QueryTemplatePropertiesUrl?: string;
	Querytext?: string;
	RankingModelId?: string;
	RefinementFilters?: { results: Array<string> };
	Refiners?: string;
	ReorderingRules?: { results: Array<Microsoft.SharePoint.Client.Search.Query.ReorderingRule> };
	ResultsUrl?: string;
	RowLimit?: number;
	RowsPerPage?: number;
	SelectProperties?: { results: Array<string> };
	SortList?: { results: Array<Microsoft.SharePoint.Client.Search.Query.Sort> };
	SourceId?: any;
	StartRow?: number;
	SummaryLength?: number;
	Timeout?: number;
	TimeZoneId?: number;
	TotalRowsExactMinimum?: number;
	TrimDuplicates?: boolean;
	TrimDuplicatesIncludeId?: number;
	UILanguage?: number;
	UseOLSQuery?: number;
}

/*********************************************
* SearchRequestCollections
**********************************************/
export interface SearchRequestCollections {

}

/*********************************************
* SearchResult
**********************************************/
export interface SearchResult {
	ElapsedTime?: number;
	PrimaryQueryResult?: Microsoft.Office.Server.Search.REST.QueryResult;
	Properties?: { results: Array<SP.KeyValue> };
	SecondaryQueryResults?: { results: Array<Microsoft.Office.Server.Search.REST.QueryResult> };
	SpellingSuggestion?: string;
	TriggeredRules?: { results: Array<any> };
}

/*********************************************
* SearchResultCollections
**********************************************/
export interface SearchResultCollections {

}

/*********************************************
* XSSearchPolicy
**********************************************/
export interface XSSearchPolicy {
	Policy?: string;
}

/*********************************************
* XSSearchPolicyCollections
**********************************************/
export interface XSSearchPolicyCollections {

}
