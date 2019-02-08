import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* PersonalResultSuggestion
**********************************************/
export interface PersonalResultSuggestion {
	HighlightedTitle?: string;
	IsBestBet?: boolean;
	Title?: string;
	Url?: string;
}

/*********************************************
* PersonalResultSuggestionCollections
**********************************************/
export interface PersonalResultSuggestionCollections {

}

/*********************************************
* QueryAutoCompletionMatch
**********************************************/
export interface QueryAutoCompletionMatch {
	Alternation?: boolean;
	Key?: string;
	Length?: number;
	MatchType?: string;
	Score?: number;
	SourceName?: string;
	Start?: number;
	Value?: string;
}

/*********************************************
* QueryAutoCompletionMatchCollections
**********************************************/
export interface QueryAutoCompletionMatchCollections {

}

/*********************************************
* QueryAutoCompletionResults
**********************************************/
export interface QueryAutoCompletionResults {
	CoreExecutionTimeMs?: number;
	CorrelationId?: string;
	Queries?: Array<Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletion>;
}

/*********************************************
* QueryAutoCompletionResultsCollections
**********************************************/
export interface QueryAutoCompletionResultsCollections {

}

/*********************************************
* QueryAutoCompletion
**********************************************/
export interface QueryAutoCompletion {
	Matches?: Array<Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionMatch>;
	Query?: string;
	Score?: number;
	Source?: string;
}

/*********************************************
* QueryAutoCompletionCollections
**********************************************/
export interface QueryAutoCompletionCollections {

}

/*********************************************
* QueryPropertyValue
**********************************************/
export interface QueryPropertyValue {
	BoolVal?: boolean;
	IntVal?: number;
	QueryPropertyValueTypeIndex?: number;
	StrArray?: Array<string>;
	StrVal?: string;
}

/*********************************************
* QueryPropertyValueCollections
**********************************************/
export interface QueryPropertyValueCollections {

}

/*********************************************
* QuerySuggestionQuery
**********************************************/
export interface QuerySuggestionQuery {
	IsPersonal?: boolean;
	Query?: string;
}

/*********************************************
* QuerySuggestionQueryCollections
**********************************************/
export interface QuerySuggestionQueryCollections {

}

/*********************************************
* QuerySuggestionRange
**********************************************/
export interface QuerySuggestionRange {
	Length?: number;
	Start?: number;
}

/*********************************************
* QuerySuggestionRangeCollections
**********************************************/
export interface QuerySuggestionRangeCollections {

}

/*********************************************
* QuerySuggestionResults
**********************************************/
export interface QuerySuggestionResults {
	PeopleNames?: Array<string>;
	PersonalResults?: Array<Microsoft.SharePoint.Client.Search.Query.PersonalResultSuggestion>;
	PopularResults?: Array<Microsoft.SharePoint.Client.Search.Query.PersonalResultSuggestion>;
	Queries?: Array<Microsoft.SharePoint.Client.Search.Query.QuerySuggestionQuery>;
}

/*********************************************
* QuerySuggestionResultsCollections
**********************************************/
export interface QuerySuggestionResultsCollections {

}

/*********************************************
* ReorderingRule
**********************************************/
export interface ReorderingRule {
	Boost?: number;
	MatchType?: number;
	MatchValue?: string;
}

/*********************************************
* ReorderingRuleCollections
**********************************************/
export interface ReorderingRuleCollections {

}

/*********************************************
* Sort
**********************************************/
export interface Sort {
	Direction?: number;
	Property?: string;
}

/*********************************************
* SortCollections
**********************************************/
export interface SortCollections {

}

/*********************************************
* PopularTenantQuery
**********************************************/
export interface PopularTenantQuery {
	ClickCount?: number;
	LCID?: number;
	QueryCount?: number;
	QueryText?: string;
	SiteId?: any;
	SourceId?: any;
	WebId?: any;
}

/*********************************************
* PopularTenantQueryCollections
**********************************************/
export interface PopularTenantQueryCollections {

}
