import { Base } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* BaseGptRequestOptions
**********************************************/
export interface BaseGptRequestOptions {
	FrequencyPenalty?: number;
	MaxTokens?: number;
	PresencePenalty?: number;
	Stop?: string;
	Temperature?: number;
	TopP?: number;
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
	ContentParts?: { results: Array<Microsoft.SharePoint.Internal.ContentPart> };
	Role?: string;
}

/*********************************************
* MessageEntryCollections
**********************************************/
export interface MessageEntryCollections {

}

/*********************************************
* ContentPart
**********************************************/
export interface ContentPart {
	ContentType?: string;
}

/*********************************************
* ContentPartCollections
**********************************************/
export interface ContentPartCollections {

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
* GptAsyncExecuteResponse
**********************************************/
export interface GptAsyncExecuteResponse {
	RequestMetadata?: string;
	Response?: Microsoft.SharePoint.Internal.ChatGptResponse;
	Status?: string;
}

/*********************************************
* GptAsyncExecuteResponseCollections
**********************************************/
export interface GptAsyncExecuteResponseCollections {

}

/*********************************************
* GptAsyncSubmitResponse
**********************************************/
export interface GptAsyncSubmitResponse {
	ErrorMessage?: string;
	FailureReason?: string;
	Status?: string;
}

/*********************************************
* GptAsyncSubmitResponseCollections
**********************************************/
export interface GptAsyncSubmitResponseCollections {

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
* ImageContentPart
**********************************************/
export interface ImageContentPart {
	ImageUrl?: Microsoft.SharePoint.Internal.ImageUrl;
}

/*********************************************
* ImageContentPartCollections
**********************************************/
export interface ImageContentPartCollections {

}

/*********************************************
* ImageUrl
**********************************************/
export interface ImageUrl {
	Detail?: string;
	Url?: string;
}

/*********************************************
* ImageUrlCollections
**********************************************/
export interface ImageUrlCollections {

}

/*********************************************
* LogActivityExtraProperties
**********************************************/
export interface LogActivityExtraProperties {
	CampaignMetadata?: string;
	IsWebWelcomePage?: boolean;
	LinkUrlClicked?: string;
	SPOWebPartInstanceId?: string;
	SPOWebPartManifestId?: string;
	SPOWebPartSubComponentId?: string;
}

/*********************************************
* LogActivityExtraPropertiesCollections
**********************************************/
export interface LogActivityExtraPropertiesCollections {

}

/*********************************************
* LogActivityRequest
**********************************************/
export interface LogActivityRequest {
	LastAccessTime?: string;
	ListItemUniqueId?: any;
}

/*********************************************
* LogActivityRequestCollections
**********************************************/
export interface LogActivityRequestCollections {

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

/*********************************************
* TextContentPart
**********************************************/
export interface TextContentPart {
	Text?: string;
}

/*********************************************
* TextContentPartCollections
**********************************************/
export interface TextContentPartCollections {

}
