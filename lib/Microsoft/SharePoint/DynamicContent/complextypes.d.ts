import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* FAQRequestPayload
**********************************************/
export interface FAQRequestPayload {
	PageListItemId?: number;
	UniqueId?: any;
	WebPartInstanceId?: any;
}

/*********************************************
* FAQRequestPayloadCollections
**********************************************/
export interface FAQRequestPayloadCollections {

}

/*********************************************
* AddRawQuestionsPayload
**********************************************/
export interface AddRawQuestionsPayload {
	Questions?: { results: Array<string> };
}

/*********************************************
* AddRawQuestionsPayloadCollections
**********************************************/
export interface AddRawQuestionsPayloadCollections {

}

/*********************************************
* AggregatedQuestionsPayload
**********************************************/
export interface AggregatedQuestionsPayload {
	AggregatedQuestions?: { results: Array<Microsoft.SharePoint.DynamicContent.AggregatedQuestion> };
	AggregatedRawQuestionIds?: { results: Array<any> };
}

/*********************************************
* AggregatedQuestionsPayloadCollections
**********************************************/
export interface AggregatedQuestionsPayloadCollections {

}

/*********************************************
* Question
**********************************************/
export interface Question {
	CreatedTime?: any;
	Id?: any;
	QuestionText?: string;
}

/*********************************************
* QuestionCollections
**********************************************/
export interface QuestionCollections {

}

/*********************************************
* AggregatedQuestion
**********************************************/
export interface AggregatedQuestion {
	AskedCount?: number;
}

/*********************************************
* AggregatedQuestionCollections
**********************************************/
export interface AggregatedQuestionCollections {

}

/*********************************************
* AggregatedQuestionsResult
**********************************************/
export interface AggregatedQuestionsResult {
	AggregatedQuestions?: { results: Array<Microsoft.SharePoint.DynamicContent.AggregatedQuestion> };
}

/*********************************************
* AggregatedQuestionsResultCollections
**********************************************/
export interface AggregatedQuestionsResultCollections {

}

/*********************************************
* DeleteAggregatedQuestionsPayload
**********************************************/
export interface DeleteAggregatedQuestionsPayload {
	QuestionIds?: { results: Array<any> };
}

/*********************************************
* DeleteAggregatedQuestionsPayloadCollections
**********************************************/
export interface DeleteAggregatedQuestionsPayloadCollections {

}

/*********************************************
* EnsureListItemResult
**********************************************/
export interface EnsureListItemResult {
	ListItemId?: number;
	UniqueId?: any;
}

/*********************************************
* EnsureListItemResultCollections
**********************************************/
export interface EnsureListItemResultCollections {

}

/*********************************************
* FaqSuggestionItem
**********************************************/
export interface FaqSuggestionItem {
	Identifier?: string;
	Metadata?: string;
	PageItemId?: number;
	PageUrl?: string;
}

/*********************************************
* FaqSuggestionItemCollections
**********************************************/
export interface FaqSuggestionItemCollections {

}

/*********************************************
* RawQuestionsResult
**********************************************/
export interface RawQuestionsResult {
	Questions?: { results: Array<Microsoft.SharePoint.DynamicContent.Question> };
}

/*********************************************
* RawQuestionsResultCollections
**********************************************/
export interface RawQuestionsResultCollections {

}

/*********************************************
* SuggestionItemParameters
**********************************************/
export interface SuggestionItemParameters {
	Metadata?: string;
	PageItemId?: number;
	State?: string;
	WebPartInstanceId?: any;
}

/*********************************************
* SuggestionItemParametersCollections
**********************************************/
export interface SuggestionItemParametersCollections {

}
