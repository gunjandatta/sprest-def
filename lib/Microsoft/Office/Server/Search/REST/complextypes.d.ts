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
* ExpandedQueryParameters
**********************************************/
export interface ExpandedQueryParameters {
	Properties?: Array<SP.KeyValue>;
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
* PromotedResultsOperationsResult
**********************************************/
export interface PromotedResultsOperationsResult {
	Result?: Array<Microsoft.Office.Server.Search.REST.PromotedResultQueryRule>;
	SearchObjectOwner?: Microsoft.Office.Server.Search.REST.SearchObjectOwnerResult;
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
* QueryConfiguration
**********************************************/
export interface QueryConfiguration {
	QueryContext?: Microsoft.Office.Server.Search.REST.QueryContext;
	QueryParameters?: Microsoft.Office.Server.Search.REST.ExpandedQueryParameters;
	QueryRoutingInfo?: Microsoft.Office.Server.Search.REST.QueryRoutingInfo;
	SearchEndpoints?: Microsoft.Office.Server.Search.REST.SearchEndpoints;
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
* QueryRoutingInfo
**********************************************/
export interface QueryRoutingInfo {
	QueryState?: number;
	SearchEndpoints?: Array<Microsoft.Office.Server.Search.REST.SearchEndpoints>;
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
* QueryProperty
**********************************************/
export interface QueryProperty {
	Name?: string;
	Value?: Microsoft.SharePoint.Client.Search.Query.QueryPropertyValue;
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
* Refiner
**********************************************/
export interface Refiner {
	Entries?: Array<Microsoft.Office.Server.Search.REST.RefinerEntry>;
	Name?: string;
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
* XSSearchPolicy
**********************************************/
export interface XSSearchPolicy {
	Policy?: string;
}
