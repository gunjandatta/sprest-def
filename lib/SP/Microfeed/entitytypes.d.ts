import { SP } from "../../";

/*********************************************
* MicrofeedPostDefinitionManager
**********************************************/
export interface MicrofeedPostDefinitionManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedAttachmentStore
**********************************************/
export interface MicrofeedAttachmentStore {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedData
**********************************************/
export interface MicrofeedData {
	Created?: any;
	Data?: Array<SP.KeyValue>;
	DefinitionId?: number;
	ItemType?: number;
	Modified?: any;
	TargetIdentifier?: string;
	Version?: string;
}

/*********************************************
* MicrofeedManager
**********************************************/
export interface MicrofeedManager {
	CurrentUser?: SP.Microfeed.MicroBlogEntity;
	IsFeedActivityPublic?: boolean;
	StaticThreadLink?: string;
}

/*********************************************
* MicrofeedPostOptionCollection
**********************************************/
export interface MicrofeedPostOptionCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<SP.Microfeed.MicrofeedPostOptions>;
}

/*********************************************
* MicrofeedStore
**********************************************/
export interface MicrofeedStore {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
