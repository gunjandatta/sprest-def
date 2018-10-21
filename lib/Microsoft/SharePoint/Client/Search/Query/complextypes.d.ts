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
* QueryAutoCompletionResults
**********************************************/
export interface QueryAutoCompletionResults {
	CoreExecutionTimeMs?: number;
	CorrelationId?: string;
	Queries?: Array<Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletion>;
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
* QuerySuggestionQuery
**********************************************/
export interface QuerySuggestionQuery {
	IsPersonal?: boolean;
	Query?: string;
}

/*********************************************
* QuerySuggestionRange
**********************************************/
export interface QuerySuggestionRange {
	Length?: number;
	Start?: number;
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
* ReorderingRule
**********************************************/
export interface ReorderingRule {
	Boost?: number;
	MatchType?: number;
	MatchValue?: string;
}

/*********************************************
* Sort
**********************************************/
export interface Sort {
	Direction?: number;
	Property?: string;
}
