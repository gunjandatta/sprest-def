import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* BaseGptRequestOptions
**********************************************/
export interface BaseGptRequestOptions {
	FrequencyPenalty?: number;
	MaxTokens?: number;
	PresencePenalty?: number;
	Temperature?: number;
}

/*********************************************
* BaseGptRequestOptionsCollections
**********************************************/
export interface BaseGptRequestOptionsCollections {

}

/*********************************************
* BaseGptResponse
**********************************************/
export interface BaseGptResponse {
	Created?: number;
	Id?: string;
	Model?: string;
	ObjectType?: string;
}

/*********************************************
* BaseGptResponseCollections
**********************************************/
export interface BaseGptResponseCollections {

}

/*********************************************
* ChatGptRequestOptions
**********************************************/
export interface ChatGptRequestOptions {
	Messages?: { results: Array<Microsoft.SharePoint.Internal.MessageEntry> };
	Stop?: string;
	TopP?: number;
}

/*********************************************
* ChatGptRequestOptionsCollections
**********************************************/
export interface ChatGptRequestOptionsCollections {

}

/*********************************************
* MessageEntry
**********************************************/
export interface MessageEntry {
	Content?: string;
	Role?: string;
}

/*********************************************
* MessageEntryCollections
**********************************************/
export interface MessageEntryCollections {

}

/*********************************************
* ChatGptResponseChoice
**********************************************/
export interface ChatGptResponseChoice {
	FinishReason?: string;
	Index?: number;
	Message?: Microsoft.SharePoint.Internal.MessageEntry;
}

/*********************************************
* ChatGptResponseChoiceCollections
**********************************************/
export interface ChatGptResponseChoiceCollections {

}

/*********************************************
* ChatGptResponse
**********************************************/
export interface ChatGptResponse {
	Choices?: { results: Array<Microsoft.SharePoint.Internal.ChatGptResponseChoice> };
	Usage?: Microsoft.SharePoint.Internal.GptResponseUsage;
}

/*********************************************
* ChatGptResponseCollections
**********************************************/
export interface ChatGptResponseCollections {

}

/*********************************************
* GptResponseUsage
**********************************************/
export interface GptResponseUsage {
	CompletionTokens?: number;
	PromptTokens?: number;
	TotalTokens?: number;
}

/*********************************************
* GptResponseUsageCollections
**********************************************/
export interface GptResponseUsageCollections {

}

/*********************************************
* GptEmbeddingsRequestOptions
**********************************************/
export interface GptEmbeddingsRequestOptions {
	Input?: string;
}

/*********************************************
* GptEmbeddingsRequestOptionsCollections
**********************************************/
export interface GptEmbeddingsRequestOptionsCollections {

}

/*********************************************
* GptEmbeddingsResponseData
**********************************************/
export interface GptEmbeddingsResponseData {
	Embedding?: { results: Array<any> };
	Index?: number;
	Object?: string;
}

/*********************************************
* GptEmbeddingsResponseDataCollections
**********************************************/
export interface GptEmbeddingsResponseDataCollections {

}

/*********************************************
* GptEmbeddingsResponse
**********************************************/
export interface GptEmbeddingsResponse {
	Data?: { results: Array<Microsoft.SharePoint.Internal.GptEmbeddingsResponseData> };
	Usage?: Microsoft.SharePoint.Internal.GptResponseUsage;
}

/*********************************************
* GptEmbeddingsResponseCollections
**********************************************/
export interface GptEmbeddingsResponseCollections {

}

/*********************************************
* GptRequestOptions
**********************************************/
export interface GptRequestOptions {
	BestOf?: number;
	Prompt?: string;
}

/*********************************************
* GptRequestOptionsCollections
**********************************************/
export interface GptRequestOptionsCollections {

}

/*********************************************
* GptResponseChoice
**********************************************/
export interface GptResponseChoice {
	FinishReason?: string;
	Index?: number;
	Text?: string;
}

/*********************************************
* GptResponseChoiceCollections
**********************************************/
export interface GptResponseChoiceCollections {

}

/*********************************************
* GptResponse
**********************************************/
export interface GptResponse {
	Choices?: { results: Array<Microsoft.SharePoint.Internal.GptResponseChoice> };
	Usage?: Microsoft.SharePoint.Internal.GptResponseUsage;
}

/*********************************************
* GptResponseCollections
**********************************************/
export interface GptResponseCollections {

}

/*********************************************
* TrackedItemUpdatesRequest
**********************************************/
export interface TrackedItemUpdatesRequest {
	TimeStamp?: any;
	TrackedItemsAsJson?: string;
	UserEmail?: string;
	UserLogin?: string;
	UserPuid?: string;
}

/*********************************************
* TrackedItemUpdatesRequestCollections
**********************************************/
export interface TrackedItemUpdatesRequestCollections {

}
