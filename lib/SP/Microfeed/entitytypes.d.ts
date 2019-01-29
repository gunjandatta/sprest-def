import { SP } from "../../";

/*********************************************
* MicrofeedPostDefinitionManager
**********************************************/
export interface MicrofeedPostDefinitionManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedPostDefinitionManagerMethods<T = any>
**********************************************/
export interface MicrofeedPostDefinitionManagerMethods<T = any> {
	deleteMicrofeedPostDefinition(postDefinition?: SP.Microfeed.MicrofeedPostDefinition): T;
	getMicrofeedPostDefinition(definitionName?: string): T;
	getMicrofeedPostDefinitions(): T;
	newMicrofeedPostDefinition(definitionName?: string): T;
	updateMicrofeedPostDefinition(postDefinition?: SP.Microfeed.MicrofeedPostDefinition): T;
}

/*********************************************
* MicrofeedAttachmentStore
**********************************************/
export interface MicrofeedAttachmentStore {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedAttachmentStoreMethods<T = any>
**********************************************/
export interface MicrofeedAttachmentStoreMethods<T = any> {
	deletePreProcessedAttachment(attachmentUri?: string): T;
	getImage(imageUrl?: string, key?: string, iv?: string): T;
	preProcessAttachment(link?: SP.Microfeed.MicrofeedLink): T;
	putFile(originalFileName?: string, fileData?: any): T;
	putImage(imageData?: any): T;
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
* MicrofeedDataMethods<T = any>
**********************************************/
export interface MicrofeedDataMethods<T = any> {
	addAttachment(name?: string, bytes?: any): T;
	systemUpdate(): T;
	update(): T;
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
* MicrofeedManagerMethods<T = any>
**********************************************/
export interface MicrofeedManagerMethods<T = any> {
	addUserToPostPeopleList(postIdentifier?: string, UserLoginName?: string): T;
	clearUnreadMentionsCount(): T;
	deleteById(postIdentifier?: string): T;
	deleteUserFromPostPeopleList(postIdentifier?: string, UserLoginName?: string): T;
	getMyCategoricalFeed(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions): T;
	getMyConsolidatedFeed(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions): T;
	getMyPublishedFeed(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions, typeOfPubFeed?: number, ShowPublicView?: boolean): T;
	getPublishedFeed(feedOwner?: string, feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions, typeOfPubFeed?: number): T;
	getThread(postIdentifier?: string): T;
	getUnreadMentionsCount(): T;
	like(postIdentifier?: string): T;
	lockThreadById(threadIdentifier?: string): T;
	post(postOptions?: SP.Microfeed.MicrofeedPostOptions): T;
	postReply(postIdentifier?: string, postReplyOptions?: SP.Microfeed.MicrofeedPostOptions): T;
	repopulateLMT(timeStamp?: any, secureHash?: string): T;
	unLike(postIdentifier?: string): T;
	unLockThreadById(threadIdentifier?: string): T;
	unsubscribeFromEMail(postIdentifier?: string): T;
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
* MicrofeedStoreMethods<T = any>
**********************************************/
export interface MicrofeedStoreMethods<T = any> {
	addData(name?: string, data?: any): T;
	addDataAsStream(name?: string, data?: any): T;
	executePendingOperations(): T;
	getItem(storeIdentifier?: string): T;
	getSocialProperties(accountName?: string): T;
	incrementUnreadAtMentionCount(accountName?: string): T;
	newItem(storeIdentifier?: string): T;
	query(storeIdentifier?: string, query?: SP.Microfeed.MicrofeedDataQuery): T;
	setPostLikeStatus(accountName?: string, postId?: string, like?: boolean): T;
}
