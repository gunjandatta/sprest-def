import { Base } from "../../../../../";
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
	Properties?: Array<SP.KeyValue>;
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
	Properties?: Array<SP.KeyValue>;
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
	ContextConditions?: Array<Microsoft.Office.Server.Search.REST.ContextCondition>;
	CreationDate?: any;
	DisplayName?: string;
	EndDate?: any;
	IsPromotedResultsOnly?: boolean;
	LastModifiedDate?: any;
	PromotedResults?: Array<Microsoft.Office.Server.Search.REST.PromotedResults>;
	QueryConditions?: Array<Microsoft.Office.Server.Search.REST.QueryCondition>;
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
	Terms?: Array<string>;
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
	Result?: Array<Microsoft.Office.Server.Search.REST.PromotedResultQueryRule>;
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
	GroupObjectIds?: Array<any>;
	PortalUrl?: string;
	RoleIds?: Array<any>;
	SpSiteId?: any;
	SpWebId?: any;
	TenantInstanceId?: any;
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
	SearchEndpoints?: Array<Microsoft.Office.Server.Search.REST.SearchEndpoints>;
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
	CustomResults?: Array<Microsoft.Office.Server.Search.REST.CustomResult>;
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
	Properties?: Array<SP.KeyValue>;
	Refiners?: Array<Microsoft.Office.Server.Search.REST.Refiner>;
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
	Entries?: Array<Microsoft.Office.Server.Search.REST.RefinerEntry>;
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
	Properties?: Array<SP.KeyValue>;
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
	Properties?: Array<SP.KeyValue>;
	Results?: Array<Microsoft.Office.Server.Search.REST.SpecialTermResult>;
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
* ReportAbandonedQueriesData
**********************************************/
export interface ReportAbandonedQueriesData {
	AbandonedPercentage?: number;
	QueryText?: string;
	ResultSource?: string;
	Total?: number;
}

/*********************************************
* ReportAbandonedQueriesDataCollections
**********************************************/
export interface ReportAbandonedQueriesDataCollections {

}

/*********************************************
* ReportAbandonedQueriesItem
**********************************************/
export interface ReportAbandonedQueriesItem {
	Date?: string;
	Report?: Array<Microsoft.Office.Server.Search.REST.ReportAbandonedQueriesData>;
}

/*********************************************
* ReportAbandonedQueriesItemCollections
**********************************************/
export interface ReportAbandonedQueriesItemCollections {

}

/*********************************************
* ReportBase
**********************************************/
export interface ReportBase {
	FarmId?: string;
}

/*********************************************
* ReportBaseCollections
**********************************************/
export interface ReportBaseCollections {

}

/*********************************************
* ReportAbandonedQueries
**********************************************/
export interface ReportAbandonedQueries {
	Reports?: Array<Microsoft.Office.Server.Search.REST.ReportAbandonedQueriesItem>;
}

/*********************************************
* ReportAbandonedQueriesCollections
**********************************************/
export interface ReportAbandonedQueriesCollections {

}

/*********************************************
* ReportNoResultData
**********************************************/
export interface ReportNoResultData {
	NoResultPercentage?: number;
	QueryText?: string;
	ResultSource?: string;
	Total?: number;
}

/*********************************************
* ReportNoResultDataCollections
**********************************************/
export interface ReportNoResultDataCollections {

}

/*********************************************
* ReportNoResultItem
**********************************************/
export interface ReportNoResultItem {
	Date?: string;
	Report?: Array<Microsoft.Office.Server.Search.REST.ReportNoResultData>;
}

/*********************************************
* ReportNoResultItemCollections
**********************************************/
export interface ReportNoResultItemCollections {

}

/*********************************************
* ReportNoResultQueries
**********************************************/
export interface ReportNoResultQueries {
	Reports?: Array<Microsoft.Office.Server.Search.REST.ReportNoResultItem>;
}

/*********************************************
* ReportNoResultQueriesCollections
**********************************************/
export interface ReportNoResultQueriesCollections {

}

/*********************************************
* ReportNumberOfQueriesData
**********************************************/
export interface ReportNumberOfQueriesData {
	Hits?: string;
	ResultSource?: string;
	TotalQueries?: string;
}

/*********************************************
* ReportNumberOfQueriesDataCollections
**********************************************/
export interface ReportNumberOfQueriesDataCollections {

}

/*********************************************
* ReportNumberOfQueriesItem
**********************************************/
export interface ReportNumberOfQueriesItem {
	Date?: string;
	Report?: Array<Microsoft.Office.Server.Search.REST.ReportNumberOfQueriesData>;
}

/*********************************************
* ReportNumberOfQueriesItemCollections
**********************************************/
export interface ReportNumberOfQueriesItemCollections {

}

/*********************************************
* ReportNumberOfQueries
**********************************************/
export interface ReportNumberOfQueries {
	Reports?: Array<Microsoft.Office.Server.Search.REST.ReportNumberOfQueriesItem>;
}

/*********************************************
* ReportNumberOfQueriesCollections
**********************************************/
export interface ReportNumberOfQueriesCollections {

}

/*********************************************
* ReportQueryRulesData
**********************************************/
export interface ReportQueryRulesData {
	DictionaryTerms?: string;
	OwnerType?: string;
	PercentagePromotedResult?: string;
	PromotedResultClicks?: string;
	PromotedResultId?: string;
	PromotedResultURL?: string;
	PromotedResultURLName?: string;
	QueryRule?: string;
	QueryRuleId?: string;
	ResultSource?: string;
	TimesFired?: string;
}

/*********************************************
* ReportQueryRulesDataCollections
**********************************************/
export interface ReportQueryRulesDataCollections {

}

/*********************************************
* ReportQueryRulesItem
**********************************************/
export interface ReportQueryRulesItem {
	Date?: string;
	Report?: Array<Microsoft.Office.Server.Search.REST.ReportQueryRulesData>;
}

/*********************************************
* ReportQueryRulesItemCollections
**********************************************/
export interface ReportQueryRulesItemCollections {

}

/*********************************************
* ReportQueryRules
**********************************************/
export interface ReportQueryRules {
	Reports?: Array<Microsoft.Office.Server.Search.REST.ReportQueryRulesItem>;
}

/*********************************************
* ReportQueryRulesCollections
**********************************************/
export interface ReportQueryRulesCollections {

}

/*********************************************
* ReportTopQueriesData
**********************************************/
export interface ReportTopQueriesData {
	QueryPercentage?: number;
	QueryText?: string;
	ResultSource?: string;
	Total?: number;
}

/*********************************************
* ReportTopQueriesDataCollections
**********************************************/
export interface ReportTopQueriesDataCollections {

}

/*********************************************
* ReportTopQueriesItem
**********************************************/
export interface ReportTopQueriesItem {
	Date?: string;
	Report?: Array<Microsoft.Office.Server.Search.REST.ReportTopQueriesData>;
}

/*********************************************
* ReportTopQueriesItemCollections
**********************************************/
export interface ReportTopQueriesItemCollections {

}

/*********************************************
* ReportTopQueries
**********************************************/
export interface ReportTopQueries {
	Reports?: Array<Microsoft.Office.Server.Search.REST.ReportTopQueriesItem>;
}

/*********************************************
* ReportTopQueriesCollections
**********************************************/
export interface ReportTopQueriesCollections {

}

/*********************************************
* ScsEndpoint
**********************************************/
export interface ScsEndpoint {
	FarmLabel?: string;
	PushServiceLocation?: string;
}

/*********************************************
* ScsEndpointCollections
**********************************************/
export interface ScsEndpointCollections {

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
	HitHighlightedProperties?: Array<string>;
	ImpressionId?: string;
	MaxSnippetLength?: number;
	OLSQuerySession?: string;
	PersonalizationData?: any;
	ProcessBestBets?: boolean;
	ProcessPersonalFavorites?: boolean;
	Properties?: Array<Microsoft.Office.Server.Search.REST.QueryProperty>;
	PropertiesToGenerateAcronyms?: Array<string>;
	QueryTag?: string;
	QueryTemplate?: string;
	QueryTemplatePropertiesUrl?: string;
	Querytext?: string;
	RankingModelId?: string;
	RefinementFilters?: Array<string>;
	Refiners?: string;
	ReorderingRules?: Array<Microsoft.SharePoint.Client.Search.Query.ReorderingRule>;
	ResultsUrl?: string;
	RowLimit?: number;
	RowsPerPage?: number;
	SelectProperties?: Array<string>;
	SortList?: Array<Microsoft.SharePoint.Client.Search.Query.Sort>;
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
	Properties?: Array<SP.KeyValue>;
	SecondaryQueryResults?: Array<Microsoft.Office.Server.Search.REST.QueryResult>;
	SpellingSuggestion?: string;
	TriggeredRules?: Array<any>;
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
