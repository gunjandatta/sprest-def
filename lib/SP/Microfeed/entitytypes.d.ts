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
export interface IMicrofeedPostDefinitionManagerQuery extends MicrofeedPostDefinitionManagerQuery, MicrofeedPostDefinitionManagerMethods {

}

/*********************************************
* MicrofeedPostDefinitionManager
**********************************************/
export interface MicrofeedPostDefinitionManager extends MicrofeedPostDefinitionManagerProps, MicrofeedPostDefinitionManagerCollections, MicrofeedPostDefinitionManagerMethods {

}

/*********************************************
* MicrofeedPostDefinitionManagerProps
**********************************************/
export interface MicrofeedPostDefinitionManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedPostDefinitionManagerPropMethods
**********************************************/
export interface MicrofeedPostDefinitionManagerPropMethods {

}

/*********************************************
* MicrofeedPostDefinitionManagerCollections
**********************************************/
export interface MicrofeedPostDefinitionManagerCollections extends MicrofeedPostDefinitionManagerPropMethods {

}

/*********************************************
* MicrofeedPostDefinitionManagerQuery
**********************************************/
export interface MicrofeedPostDefinitionManagerQuery extends MicrofeedPostDefinitionManagerProps, MicrofeedPostDefinitionManagerMethods {

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
export interface IMicrofeedAttachmentStoreQuery extends MicrofeedAttachmentStoreQuery, MicrofeedAttachmentStoreMethods {

}

/*********************************************
* MicrofeedAttachmentStore
**********************************************/
export interface MicrofeedAttachmentStore extends MicrofeedAttachmentStoreProps, MicrofeedAttachmentStoreCollections, MicrofeedAttachmentStoreMethods {

}

/*********************************************
* MicrofeedAttachmentStoreProps
**********************************************/
export interface MicrofeedAttachmentStoreProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedAttachmentStorePropMethods
**********************************************/
export interface MicrofeedAttachmentStorePropMethods {

}

/*********************************************
* MicrofeedAttachmentStoreCollections
**********************************************/
export interface MicrofeedAttachmentStoreCollections extends MicrofeedAttachmentStorePropMethods {

}

/*********************************************
* MicrofeedAttachmentStoreQuery
**********************************************/
export interface MicrofeedAttachmentStoreQuery extends MicrofeedAttachmentStoreProps, MicrofeedAttachmentStoreMethods {

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
export interface IMicrofeedDataQuery extends MicrofeedDataQuery, MicrofeedDataMethods {

}

/*********************************************
* MicrofeedData
**********************************************/
export interface MicrofeedData extends MicrofeedDataProps, MicrofeedDataCollections, MicrofeedDataMethods {

}

/*********************************************
* MicrofeedDataProps
**********************************************/
export interface MicrofeedDataProps {
	Created?: any;
	Data?: Array<SP.KeyValue>;
	DefinitionId?: number;
	ItemType?: number;
	Modified?: any;
	TargetIdentifier?: string;
	Version?: string;
}

/*********************************************
* MicrofeedDataPropMethods
**********************************************/
export interface MicrofeedDataPropMethods {

}

/*********************************************
* MicrofeedDataCollections
**********************************************/
export interface MicrofeedDataCollections extends MicrofeedDataPropMethods {

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
export interface MicrofeedDataQuery extends MicrofeedDataProps, MicrofeedDataMethods {

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
export interface IMicrofeedManagerQuery extends MicrofeedManagerQuery, MicrofeedManagerMethods {

}

/*********************************************
* MicrofeedManager
**********************************************/
export interface MicrofeedManager extends MicrofeedManagerProps, MicrofeedManagerCollections, MicrofeedManagerMethods {

}

/*********************************************
* MicrofeedManagerProps
**********************************************/
export interface MicrofeedManagerProps {
	CurrentUser?: SP.Microfeed.MicroBlogEntity;
	IsFeedActivityPublic?: boolean;
	StaticThreadLink?: string;
}

/*********************************************
* MicrofeedManagerPropMethods
**********************************************/
export interface MicrofeedManagerPropMethods {

}

/*********************************************
* MicrofeedManagerCollections
**********************************************/
export interface MicrofeedManagerCollections extends MicrofeedManagerPropMethods {

}

/*********************************************
* MicrofeedManagerQuery
**********************************************/
export interface MicrofeedManagerQuery extends MicrofeedManagerProps, MicrofeedManagerMethods {

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
export interface IMicrofeedStoreQuery extends MicrofeedStoreQuery, MicrofeedStoreMethods {

}

/*********************************************
* MicrofeedStore
**********************************************/
export interface MicrofeedStore extends MicrofeedStoreProps, MicrofeedStoreCollections, MicrofeedStoreMethods {

}

/*********************************************
* MicrofeedStoreProps
**********************************************/
export interface MicrofeedStoreProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MicrofeedStorePropMethods
**********************************************/
export interface MicrofeedStorePropMethods {

}

/*********************************************
* MicrofeedStoreCollections
**********************************************/
export interface MicrofeedStoreCollections extends MicrofeedStorePropMethods {

}

/*********************************************
* MicrofeedStoreQuery
**********************************************/
export interface MicrofeedStoreQuery extends MicrofeedStoreProps, MicrofeedStoreMethods {

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
