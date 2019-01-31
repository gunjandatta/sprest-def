import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";
import { SP } from "../../";

/*********************************************
* IMicrofeedPostDefinitionManager
**********************************************/
export interface IMicrofeedPostDefinitionManager extends MicrofeedPostDefinitionManagerCollections,MicrofeedPostDefinitionManagerMethods,IBaseQuery<IMicrofeedPostDefinitionManagerQuery> {

}

/*********************************************
* IMicrofeedPostDefinitionManagerQuery
**********************************************/
export interface IMicrofeedPostDefinitionManagerQuery extends MicrofeedPostDefinitionManagerQuery,MicrofeedPostDefinitionManagerMethods {

}

/*********************************************
* MicrofeedPostDefinitionManager
**********************************************/
export interface MicrofeedPostDefinitionManager extends MicrofeedPostDefinitionManagerCollections, MicrofeedPostDefinitionManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedPostDefinitionManagerProps
**********************************************/
export interface MicrofeedPostDefinitionManagerProps {

}

/*********************************************
* MicrofeedPostDefinitionManagerCollections
**********************************************/
export interface MicrofeedPostDefinitionManagerCollections extends MicrofeedPostDefinitionManagerProps {

}

/*********************************************
* MicrofeedPostDefinitionManagerQuery
**********************************************/
export interface MicrofeedPostDefinitionManagerQuery extends MicrofeedPostDefinitionManagerProps {

}

/*********************************************
* MicrofeedPostDefinitionManagerMethods
**********************************************/
export interface MicrofeedPostDefinitionManagerMethods {
	deleteMicrofeedPostDefinition(postDefinition?: SP.Microfeed.MicrofeedPostDefinition): IBaseExecution<boolean>;
	getMicrofeedPostDefinition(definitionName?: string): IBaseExecution<SP.Microfeed.MicrofeedPostDefinition>;
	getMicrofeedPostDefinitions(): IBaseExecution<Array<SP.Microfeed.MicrofeedPostDefinition>>;
	newMicrofeedPostDefinition(definitionName?: string): IBaseExecution<SP.Microfeed.MicrofeedPostDefinition>;
	updateMicrofeedPostDefinition(postDefinition?: SP.Microfeed.MicrofeedPostDefinition): IBaseExecution<SP.Microfeed.MicrofeedPostDefinition>;
}

/*********************************************
* IMicrofeedAttachmentStore
**********************************************/
export interface IMicrofeedAttachmentStore extends MicrofeedAttachmentStoreCollections,MicrofeedAttachmentStoreMethods,IBaseQuery<IMicrofeedAttachmentStoreQuery> {

}

/*********************************************
* IMicrofeedAttachmentStoreQuery
**********************************************/
export interface IMicrofeedAttachmentStoreQuery extends MicrofeedAttachmentStoreQuery,MicrofeedAttachmentStoreMethods {

}

/*********************************************
* MicrofeedAttachmentStore
**********************************************/
export interface MicrofeedAttachmentStore extends MicrofeedAttachmentStoreCollections, MicrofeedAttachmentStoreMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedAttachmentStoreProps
**********************************************/
export interface MicrofeedAttachmentStoreProps {

}

/*********************************************
* MicrofeedAttachmentStoreCollections
**********************************************/
export interface MicrofeedAttachmentStoreCollections extends MicrofeedAttachmentStoreProps {

}

/*********************************************
* MicrofeedAttachmentStoreQuery
**********************************************/
export interface MicrofeedAttachmentStoreQuery extends MicrofeedAttachmentStoreProps {

}

/*********************************************
* MicrofeedAttachmentStoreMethods
**********************************************/
export interface MicrofeedAttachmentStoreMethods {
	deletePreProcessedAttachment(attachmentUri?: string): IBaseExecution<any>;
	getImage(imageUrl?: string, key?: string, iv?: string): IBaseExecution<any>;
	preProcessAttachment(link?: SP.Microfeed.MicrofeedLink): IBaseExecution<SP.Microfeed.MicrofeedLink>;
	putFile(originalFileName?: string, fileData?: any): IBaseExecution<Array<string>>;
	putImage(imageData?: any): IBaseExecution<Array<string>>;
}

/*********************************************
* IMicrofeedData
**********************************************/
export interface IMicrofeedData extends MicrofeedDataCollections,MicrofeedDataMethods,IBaseQuery<IMicrofeedDataQuery> {

}

/*********************************************
* IMicrofeedDataQuery
**********************************************/
export interface IMicrofeedDataQuery extends MicrofeedDataQuery,MicrofeedDataMethods {

}

/*********************************************
* MicrofeedData
**********************************************/
export interface MicrofeedData extends MicrofeedDataCollections, MicrofeedDataMethods {
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
* MicrofeedDataCollections
**********************************************/
export interface MicrofeedDataCollections extends MicrofeedDataProps {

}

/*********************************************
* MicrofeedDataCollectionMethods
**********************************************/
export interface MicrofeedDataCollectionMethods {
	deleteAll(): IBaseExecution<any>;
}

/*********************************************
* MicrofeedDataQuery
**********************************************/
export interface MicrofeedDataQuery extends MicrofeedDataProps {

}

/*********************************************
* MicrofeedDataMethods
**********************************************/
export interface MicrofeedDataMethods {
	addAttachment(name?: string, bytes?: any): IBaseExecution<any>;
	systemUpdate(): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* IMicrofeedManager
**********************************************/
export interface IMicrofeedManager extends MicrofeedManagerCollections,MicrofeedManagerMethods,IBaseQuery<IMicrofeedManagerQuery> {

}

/*********************************************
* IMicrofeedManagerQuery
**********************************************/
export interface IMicrofeedManagerQuery extends MicrofeedManagerQuery,MicrofeedManagerMethods {

}

/*********************************************
* MicrofeedManager
**********************************************/
export interface MicrofeedManager extends MicrofeedManagerCollections, MicrofeedManagerMethods {
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
* MicrofeedManagerCollections
**********************************************/
export interface MicrofeedManagerCollections extends MicrofeedManagerProps {

}

/*********************************************
* MicrofeedManagerQuery
**********************************************/
export interface MicrofeedManagerQuery extends MicrofeedManagerProps {

}

/*********************************************
* MicrofeedManagerMethods
**********************************************/
export interface MicrofeedManagerMethods {
	addUserToPostPeopleList(postIdentifier?: string, UserLoginName?: string): IBaseExecution<number>;
	clearUnreadMentionsCount(): IBaseExecution<number>;
	deleteById(postIdentifier?: string): IBaseExecution<SP.Microfeed.MicrofeedThread>;
	deleteUserFromPostPeopleList(postIdentifier?: string, UserLoginName?: string): IBaseExecution<number>;
	getMyCategoricalFeed(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions): IBaseExecution<SP.Microfeed.MicrofeedThreadCollection>;
	getMyConsolidatedFeed(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions): IBaseExecution<SP.Microfeed.MicrofeedThreadCollection>;
	getMyPublishedFeed(feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions, typeOfPubFeed?: number, ShowPublicView?: boolean): IBaseExecution<SP.Microfeed.MicrofeedThreadCollection>;
	getPublishedFeed(feedOwner?: string, feedOptions?: SP.Microfeed.MicrofeedRetrievalOptions, typeOfPubFeed?: number): IBaseExecution<SP.Microfeed.MicrofeedThreadCollection>;
	getThread(postIdentifier?: string): IBaseExecution<SP.Microfeed.MicrofeedThread>;
	getUnreadMentionsCount(): IBaseExecution<number>;
	like(postIdentifier?: string): IBaseExecution<SP.Microfeed.MicrofeedThread>;
	lockThreadById(threadIdentifier?: string): IBaseExecution<SP.Microfeed.MicrofeedThread>;
	post(postOptions?: SP.Microfeed.MicrofeedPostOptions): IBaseExecution<SP.Microfeed.MicrofeedThread>;
	postReply(postIdentifier?: string, postReplyOptions?: SP.Microfeed.MicrofeedPostOptions): IBaseExecution<SP.Microfeed.MicrofeedThread>;
	repopulateLMT(timeStamp?: any, secureHash?: string): IBaseExecution<number>;
	unLike(postIdentifier?: string): IBaseExecution<SP.Microfeed.MicrofeedThread>;
	unLockThreadById(threadIdentifier?: string): IBaseExecution<SP.Microfeed.MicrofeedThread>;
	unsubscribeFromEMail(postIdentifier?: string): IBaseExecution<any>;
}

/*********************************************
* MicrofeedPostOptionCollection
**********************************************/
export interface MicrofeedPostOptionCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<SP.Microfeed.MicrofeedPostOptions>;
}

/*********************************************
* MicrofeedPostOptionCollectionCollections
**********************************************/
export interface MicrofeedPostOptionCollectionCollections {

}

/*********************************************
* IMicrofeedStore
**********************************************/
export interface IMicrofeedStore extends MicrofeedStoreCollections,MicrofeedStoreMethods,IBaseQuery<IMicrofeedStoreQuery> {

}

/*********************************************
* IMicrofeedStoreQuery
**********************************************/
export interface IMicrofeedStoreQuery extends MicrofeedStoreQuery,MicrofeedStoreMethods {

}

/*********************************************
* MicrofeedStore
**********************************************/
export interface MicrofeedStore extends MicrofeedStoreCollections, MicrofeedStoreMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedStoreProps
**********************************************/
export interface MicrofeedStoreProps {

}

/*********************************************
* MicrofeedStoreCollections
**********************************************/
export interface MicrofeedStoreCollections extends MicrofeedStoreProps {

}

/*********************************************
* MicrofeedStoreQuery
**********************************************/
export interface MicrofeedStoreQuery extends MicrofeedStoreProps {

}

/*********************************************
* MicrofeedStoreMethods
**********************************************/
export interface MicrofeedStoreMethods {
	addData(name?: string, data?: any): IBaseExecution<any>;
	addDataAsStream(name?: string, data?: any): IBaseExecution<any>;
	executePendingOperations(): IBaseExecution<any>;
	getItem(storeIdentifier?: string): IBaseExecution<SP.Microfeed.MicrofeedData>;
	getSocialProperties(accountName?: string): IBaseExecution<string>;
	incrementUnreadAtMentionCount(accountName?: string): IBaseExecution<any>;
	newItem(storeIdentifier?: string): IBaseExecution<SP.Microfeed.MicrofeedData>;
	query(storeIdentifier?: string, query?: SP.Microfeed.MicrofeedDataQuery): IBaseExecution<Array<SP.Microfeed.MicrofeedData>>;
	setPostLikeStatus(accountName?: string, postId?: string, like?: boolean): IBaseExecution<any>;
}
