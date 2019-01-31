import { IBaseExecution } from "../../";
import { SP } from "../../";

/*********************************************
* IMicrofeedPostDefinitionManager
**********************************************/
export interface IMicrofeedPostDefinitionManager extends MicrofeedPostDefinitionManagerProps,MicrofeedPostDefinitionManagerMethods,IBaseExecution<MicrofeedPostDefinitionManager> {

}

/*********************************************
* MicrofeedPostDefinitionManager
**********************************************/
export interface MicrofeedPostDefinitionManager extends MicrofeedPostDefinitionManagerProps, MicrofeedPostDefinitionManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedPostDefinitionManagerProps
**********************************************/
export interface MicrofeedPostDefinitionManagerProps {

}

/*********************************************
* MicrofeedPostDefinitionManagerMethods
**********************************************/
export interface MicrofeedPostDefinitionManagerMethods {
	deleteMicrofeedPostDefinition<T=boolean>(postDefinition?: SP.Microfeed.MicrofeedPostDefinition): IBaseExecution<T>;
	getMicrofeedPostDefinition<T=SP.Microfeed.MicrofeedPostDefinition>(definitionName?: string): IBaseExecution<T>;
	getMicrofeedPostDefinitions<T=Array<SP.Microfeed.MicrofeedPostDefinition>>(): IBaseExecution<T>;
	newMicrofeedPostDefinition<T=SP.Microfeed.MicrofeedPostDefinition>(definitionName?: string): IBaseExecution<T>;
	updateMicrofeedPostDefinition<T=SP.Microfeed.MicrofeedPostDefinition>(postDefinition?: SP.Microfeed.MicrofeedPostDefinition): IBaseExecution<T>;
}

/*********************************************
* IMicrofeedAttachmentStore
**********************************************/
export interface IMicrofeedAttachmentStore extends MicrofeedAttachmentStoreProps,MicrofeedAttachmentStoreMethods,IBaseExecution<MicrofeedAttachmentStore> {

}

/*********************************************
* MicrofeedAttachmentStore
**********************************************/
export interface MicrofeedAttachmentStore extends MicrofeedAttachmentStoreProps, MicrofeedAttachmentStoreMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedAttachmentStoreProps
**********************************************/
export interface MicrofeedAttachmentStoreProps {

}

/*********************************************
* MicrofeedAttachmentStoreMethods
**********************************************/
export interface MicrofeedAttachmentStoreMethods {
	deletePreProcessedAttachment<T=any>(attachmentUri?: string): IBaseExecution<T>;
	getImage<T=any>(imageUrl?: string, key?: string, iv?: string): IBaseExecution<T>;
	preProcessAttachment<T=SP.Microfeed.MicrofeedLink>(link?: SP.Microfeed.MicrofeedLink): IBaseExecution<T>;
	putFile<T=Array<string>>(originalFileName?: string, fileData?: any): IBaseExecution<T>;
	putImage<T=Array<string>>(imageData?: any): IBaseExecution<T>;
}

/*********************************************
* IMicrofeedData
**********************************************/
export interface IMicrofeedData extends MicrofeedDataProps,MicrofeedDataMethods,IBaseExecution<MicrofeedData> {

}

/*********************************************
* MicrofeedData
**********************************************/
export interface MicrofeedData extends MicrofeedDataProps, MicrofeedDataMethods {
	Created?: any;
	Data?: Array<SP.KeyValue>;
	DefinitionId?: number;
	ItemType?: number;
	Modified?: any;
	TargetIdentifier?: string;
	Version?: string;
}

/*********************************************
* MicrofeedDataProps
**********************************************/
export interface MicrofeedDataProps {

}

/*********************************************
* MicrofeedDataMethods
**********************************************/
export interface MicrofeedDataMethods {
	addAttachment<T=any>(name?: string, bytes?: any): IBaseExecution<T>;
	systemUpdate<T=any>(): IBaseExecution<T>;
	update<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IMicrofeedManager
**********************************************/
export interface IMicrofeedManager extends MicrofeedManagerProps,MicrofeedManagerMethods,IBaseExecution<MicrofeedManager> {

}

/*********************************************
* MicrofeedManager
**********************************************/
export interface MicrofeedManager extends MicrofeedManagerProps, MicrofeedManagerMethods {
	CurrentUser?: SP.Microfeed.MicroBlogEntity;
	IsFeedActivityPublic?: boolean;
	StaticThreadLink?: string;
}

/*********************************************
* MicrofeedManagerProps
**********************************************/
export interface MicrofeedManagerProps {

}

/*********************************************
* MicrofeedManagerMethods
**********************************************/
export interface MicrofeedManagerMethods {
	addUserToPostPeopleList<T=number>(postIdentifier?: string, UserLoginName?: string): IBaseExecution<T>;
	clearUnreadMentionsCount<T=number>(): IBaseExecution<T>;
	deleteById<T=SP.Microfeed.MicrofeedThread>(postIdentifier?: string): IBaseExecution<T>;
	deleteUserFromPostPeopleList<T=number>(postIdentifier?: string, UserLoginName?: string): IBaseExecution<T>;
	getMyCategoricalFeed<T=SP.Microfeed.MicrofeedThreadCollection>(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions): IBaseExecution<T>;
	getMyConsolidatedFeed<T=SP.Microfeed.MicrofeedThreadCollection>(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions): IBaseExecution<T>;
	getMyPublishedFeed<T=SP.Microfeed.MicrofeedThreadCollection>(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions, typeOfPubFeed?: number, ShowPublicView?: boolean): IBaseExecution<T>;
	getPublishedFeed<T=SP.Microfeed.MicrofeedThreadCollection>(feedOwner?: string, feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions, typeOfPubFeed?: number): IBaseExecution<T>;
	getThread<T=SP.Microfeed.MicrofeedThread>(postIdentifier?: string): IBaseExecution<T>;
	getUnreadMentionsCount<T=number>(): IBaseExecution<T>;
	like<T=SP.Microfeed.MicrofeedThread>(postIdentifier?: string): IBaseExecution<T>;
	lockThreadById<T=SP.Microfeed.MicrofeedThread>(threadIdentifier?: string): IBaseExecution<T>;
	post<T=SP.Microfeed.MicrofeedThread>(postOptions?: SP.Microfeed.MicrofeedPostOptions): IBaseExecution<T>;
	postReply<T=SP.Microfeed.MicrofeedThread>(postIdentifier?: string, postReplyOptions?: SP.Microfeed.MicrofeedPostOptions): IBaseExecution<T>;
	repopulateLMT<T=number>(timeStamp?: any, secureHash?: string): IBaseExecution<T>;
	unLike<T=SP.Microfeed.MicrofeedThread>(postIdentifier?: string): IBaseExecution<T>;
	unLockThreadById<T=SP.Microfeed.MicrofeedThread>(threadIdentifier?: string): IBaseExecution<T>;
	unsubscribeFromEMail<T=any>(postIdentifier?: string): IBaseExecution<T>;
}

/*********************************************
* MicrofeedPostOptionCollection
**********************************************/
export interface MicrofeedPostOptionCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<SP.Microfeed.MicrofeedPostOptions>;
}

/*********************************************
* IMicrofeedStore
**********************************************/
export interface IMicrofeedStore extends MicrofeedStoreProps,MicrofeedStoreMethods,IBaseExecution<MicrofeedStore> {

}

/*********************************************
* MicrofeedStore
**********************************************/
export interface MicrofeedStore extends MicrofeedStoreProps, MicrofeedStoreMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedStoreProps
**********************************************/
export interface MicrofeedStoreProps {

}

/*********************************************
* MicrofeedStoreMethods
**********************************************/
export interface MicrofeedStoreMethods {
	addData<T=any>(name?: string, data?: any): IBaseExecution<T>;
	addDataAsStream<T=any>(name?: string, data?: any): IBaseExecution<T>;
	executePendingOperations<T=any>(): IBaseExecution<T>;
	getItem<T=SP.Microfeed.MicrofeedData>(storeIdentifier?: string): IBaseExecution<T>;
	getSocialProperties<T=string>(accountName?: string): IBaseExecution<T>;
	incrementUnreadAtMentionCount<T=any>(accountName?: string): IBaseExecution<T>;
	newItem<T=SP.Microfeed.MicrofeedData>(storeIdentifier?: string): IBaseExecution<T>;
	query<T=Array<SP.Microfeed.MicrofeedData>>(storeIdentifier?: string, query?: SP.Microfeed.MicrofeedDataQuery): IBaseExecution<T>;
	setPostLikeStatus<T=any>(accountName?: string, postId?: string, like?: boolean): IBaseExecution<T>;
}

/*********************************************
* IMicrofeedDataCollection
**********************************************/
export interface IMicrofeedDataCollection extends MicrofeedDataCollectionProps,MicrofeedDataCollectionMethods,IBaseExecution<MicrofeedDataCollection> {

}

/*********************************************
* MicrofeedDataCollection
**********************************************/
export interface MicrofeedDataCollection extends MicrofeedDataCollectionProps, MicrofeedDataCollectionMethods {

}

/*********************************************
* MicrofeedDataCollectionProps
**********************************************/
export interface MicrofeedDataCollectionProps {

}

/*********************************************
* MicrofeedDataCollectionMethods
**********************************************/
export interface MicrofeedDataCollectionMethods {
	deleteAll<T=any>(): IBaseExecution<T>;
}
