import { SP } from "../../";

/*********************************************
* MicrofeedPostDefinitionManager
**********************************************/
export interface MicrofeedPostDefinitionManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedPostDefinitionManagerMethods
**********************************************/
export interface MicrofeedPostDefinitionManagerMethods {
	deleteMicrofeedPostDefinition<T=boolean>(postDefinition?: SP.Microfeed.MicrofeedPostDefinition): T;
	getMicrofeedPostDefinition<T=SP.Microfeed.MicrofeedPostDefinition>(definitionName?: string): T;
	getMicrofeedPostDefinitions<T=Array<SP.Microfeed.MicrofeedPostDefinition>>(): T;
	newMicrofeedPostDefinition<T=SP.Microfeed.MicrofeedPostDefinition>(definitionName?: string): T;
	updateMicrofeedPostDefinition<T=SP.Microfeed.MicrofeedPostDefinition>(postDefinition?: SP.Microfeed.MicrofeedPostDefinition): T;
}

/*********************************************
* MicrofeedAttachmentStore
**********************************************/
export interface MicrofeedAttachmentStore {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedAttachmentStoreMethods
**********************************************/
export interface MicrofeedAttachmentStoreMethods {
	deletePreProcessedAttachment<T=void>(attachmentUri?: string): T;
	getImage<T=any>(imageUrl?: string, key?: string, iv?: string): T;
	preProcessAttachment<T=SP.Microfeed.MicrofeedLink>(link?: SP.Microfeed.MicrofeedLink): T;
	putFile<T=Array<string>>(originalFileName?: string, fileData?: any): T;
	putImage<T=Array<string>>(imageData?: any): T;
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
* MicrofeedDataMethods
**********************************************/
export interface MicrofeedDataMethods {
	addAttachment<T=void>(name?: string, bytes?: any): T;
	systemUpdate<T=void>(): T;
	update<T=void>(): T;
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
* MicrofeedManagerMethods
**********************************************/
export interface MicrofeedManagerMethods {
	addUserToPostPeopleList<T=number>(postIdentifier?: string, UserLoginName?: string): T;
	clearUnreadMentionsCount<T=number>(): T;
	deleteById<T=SP.Microfeed.MicrofeedThread>(postIdentifier?: string): T;
	deleteUserFromPostPeopleList<T=number>(postIdentifier?: string, UserLoginName?: string): T;
	getMyCategoricalFeed<T=SP.Microfeed.MicrofeedThreadCollection>(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions): T;
	getMyConsolidatedFeed<T=SP.Microfeed.MicrofeedThreadCollection>(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions): T;
	getMyPublishedFeed<T=SP.Microfeed.MicrofeedThreadCollection>(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions, typeOfPubFeed?: number, ShowPublicView?: boolean): T;
	getPublishedFeed<T=SP.Microfeed.MicrofeedThreadCollection>(feedOwner?: string, feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions, typeOfPubFeed?: number): T;
	getThread<T=SP.Microfeed.MicrofeedThread>(postIdentifier?: string): T;
	getUnreadMentionsCount<T=number>(): T;
	like<T=SP.Microfeed.MicrofeedThread>(postIdentifier?: string): T;
	lockThreadById<T=SP.Microfeed.MicrofeedThread>(threadIdentifier?: string): T;
	post<T=SP.Microfeed.MicrofeedThread>(postOptions?: SP.Microfeed.MicrofeedPostOptions): T;
	postReply<T=SP.Microfeed.MicrofeedThread>(postIdentifier?: string, postReplyOptions?: SP.Microfeed.MicrofeedPostOptions): T;
	repopulateLMT<T=number>(timeStamp?: any, secureHash?: string): T;
	unLike<T=SP.Microfeed.MicrofeedThread>(postIdentifier?: string): T;
	unLockThreadById<T=SP.Microfeed.MicrofeedThread>(threadIdentifier?: string): T;
	unsubscribeFromEMail<T=void>(postIdentifier?: string): T;
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

/*********************************************
* MicrofeedStoreMethods
**********************************************/
export interface MicrofeedStoreMethods {
	addData<T=void>(name?: string, data?: any): T;
	addDataAsStream<T=void>(name?: string, data?: any): T;
	executePendingOperations<T=void>(): T;
	getItem<T=SP.Microfeed.MicrofeedData>(storeIdentifier?: string): T;
	getSocialProperties<T=string>(accountName?: string): T;
	incrementUnreadAtMentionCount<T=void>(accountName?: string): T;
	newItem<T=SP.Microfeed.MicrofeedData>(storeIdentifier?: string): T;
	query<T=Array<SP.Microfeed.MicrofeedData>>(storeIdentifier?: string, query?: SP.Microfeed.MicrofeedDataQuery): T;
	setPostLikeStatus<T=void>(accountName?: string, postId?: string, like?: boolean): T;
}
