import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";
import { SP } from "../../";

/*********************************************
* IMicrofeedPostDefinitionManager
**********************************************/
export interface IMicrofeedPostDefinitionManager extends MicrofeedPostDefinitionManagerCollections, MicrofeedPostDefinitionManagerMethods, IBaseQuery<IMicrofeedPostDefinitionManagerQuery> {

}

/*********************************************
* IMicrofeedPostDefinitionManagerCollection
**********************************************/
export interface IMicrofeedPostDefinitionManagerCollection extends IBaseResults<MicrofeedPostDefinitionManager> {
	done?: (resolve: (value?: Array<MicrofeedPostDefinitionManager>) => void) => void;
}

/*********************************************
* IMicrofeedPostDefinitionManagerQueryCollection
**********************************************/
export interface IMicrofeedPostDefinitionManagerQueryCollection extends IBaseResults<MicrofeedPostDefinitionManagerOData> {
	done?: (resolve: (value?: Array<MicrofeedPostDefinitionManagerOData>) => void) => void;
}

/*********************************************
* IMicrofeedPostDefinitionManagerQuery
**********************************************/
export interface IMicrofeedPostDefinitionManagerQuery extends MicrofeedPostDefinitionManagerOData, MicrofeedPostDefinitionManagerMethods {

}

/*********************************************
* MicrofeedPostDefinitionManager
**********************************************/
export interface MicrofeedPostDefinitionManager extends IBaseResult, MicrofeedPostDefinitionManagerProps, MicrofeedPostDefinitionManagerCollections, MicrofeedPostDefinitionManagerMethods {

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
* MicrofeedPostDefinitionManagerOData
**********************************************/
export interface MicrofeedPostDefinitionManagerOData extends IBaseResult, MicrofeedPostDefinitionManagerProps, MicrofeedPostDefinitionManagerMethods {

}

/*********************************************
* MicrofeedPostDefinitionManagerMethods
**********************************************/
export interface MicrofeedPostDefinitionManagerMethods {
	deleteMicrofeedPostDefinition(postDefinition?: SP.Microfeed.MicrofeedPostDefinition): IBaseExecution<boolean>;
	getMicrofeedPostDefinition(definitionName?: string): IBaseExecution<SP.Microfeed.MicrofeedPostDefinition>;
	getMicrofeedPostDefinitions(): IBaseCollection<SP.Microfeed.MicrofeedPostDefinition>;
	newMicrofeedPostDefinition(definitionName?: string): IBaseExecution<SP.Microfeed.MicrofeedPostDefinition>;
	updateMicrofeedPostDefinition(postDefinition?: SP.Microfeed.MicrofeedPostDefinition): IBaseExecution<SP.Microfeed.MicrofeedPostDefinition>;
}

/*********************************************
* IMicrofeedAttachmentStore
**********************************************/
export interface IMicrofeedAttachmentStore extends MicrofeedAttachmentStoreCollections, MicrofeedAttachmentStoreMethods, IBaseQuery<IMicrofeedAttachmentStoreQuery> {

}

/*********************************************
* IMicrofeedAttachmentStoreCollection
**********************************************/
export interface IMicrofeedAttachmentStoreCollection extends IBaseResults<MicrofeedAttachmentStore> {
	done?: (resolve: (value?: Array<MicrofeedAttachmentStore>) => void) => void;
}

/*********************************************
* IMicrofeedAttachmentStoreQueryCollection
**********************************************/
export interface IMicrofeedAttachmentStoreQueryCollection extends IBaseResults<MicrofeedAttachmentStoreOData> {
	done?: (resolve: (value?: Array<MicrofeedAttachmentStoreOData>) => void) => void;
}

/*********************************************
* IMicrofeedAttachmentStoreQuery
**********************************************/
export interface IMicrofeedAttachmentStoreQuery extends MicrofeedAttachmentStoreOData, MicrofeedAttachmentStoreMethods {

}

/*********************************************
* MicrofeedAttachmentStore
**********************************************/
export interface MicrofeedAttachmentStore extends IBaseResult, MicrofeedAttachmentStoreProps, MicrofeedAttachmentStoreCollections, MicrofeedAttachmentStoreMethods {

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
* MicrofeedAttachmentStoreOData
**********************************************/
export interface MicrofeedAttachmentStoreOData extends IBaseResult, MicrofeedAttachmentStoreProps, MicrofeedAttachmentStoreMethods {

}

/*********************************************
* MicrofeedAttachmentStoreMethods
**********************************************/
export interface MicrofeedAttachmentStoreMethods {
	deletePreProcessedAttachment(attachmentUri?: string): IBaseExecution<any>;
	getImage(imageUrl?: string, key?: string, iv?: string): IBaseExecution<any>;
	preProcessAttachment(link?: SP.Microfeed.MicrofeedLink): IBaseExecution<SP.Microfeed.MicrofeedLink>;
	putFile(originalFileName?: string, fileData?: any): IBaseCollection<string>;
	putImage(imageData?: any): IBaseCollection<string>;
}

/*********************************************
* IMicrofeedData
**********************************************/
export interface IMicrofeedData extends MicrofeedDataCollections, MicrofeedDataMethods, IBaseQuery<IMicrofeedDataQuery> {

}

/*********************************************
* IMicrofeedDataCollection
**********************************************/
export interface IMicrofeedDataCollection extends IBaseResults<MicrofeedData>, MicrofeedDataCollectionMethods {
	done?: (resolve: (value?: Array<MicrofeedData>) => void) => void;
}

/*********************************************
* IMicrofeedDataQueryCollection
**********************************************/
export interface IMicrofeedDataQueryCollection extends IBaseResults<MicrofeedDataOData>, MicrofeedDataCollectionMethods {
	done?: (resolve: (value?: Array<MicrofeedDataOData>) => void) => void;
}

/*********************************************
* IMicrofeedDataQuery
**********************************************/
export interface IMicrofeedDataQuery extends MicrofeedDataOData, MicrofeedDataMethods {

}

/*********************************************
* MicrofeedData
**********************************************/
export interface MicrofeedData extends IBaseResult, MicrofeedDataProps, MicrofeedDataCollections, MicrofeedDataMethods {

}

/*********************************************
* MicrofeedDataProps
**********************************************/
export interface MicrofeedDataProps {
	Created?: any;
	Data?: { results: Array<SP.KeyValue> };
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
* MicrofeedDataOData
**********************************************/
export interface MicrofeedDataOData extends IBaseResult, MicrofeedDataProps, MicrofeedDataMethods {

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
export interface IMicrofeedManager extends MicrofeedManagerCollections, MicrofeedManagerMethods, IBaseQuery<IMicrofeedManagerQuery> {

}

/*********************************************
* IMicrofeedManagerCollection
**********************************************/
export interface IMicrofeedManagerCollection extends IBaseResults<MicrofeedManager> {
	done?: (resolve: (value?: Array<MicrofeedManager>) => void) => void;
}

/*********************************************
* IMicrofeedManagerQueryCollection
**********************************************/
export interface IMicrofeedManagerQueryCollection extends IBaseResults<MicrofeedManagerOData> {
	done?: (resolve: (value?: Array<MicrofeedManagerOData>) => void) => void;
}

/*********************************************
* IMicrofeedManagerQuery
**********************************************/
export interface IMicrofeedManagerQuery extends MicrofeedManagerOData, MicrofeedManagerMethods {

}

/*********************************************
* MicrofeedManager
**********************************************/
export interface MicrofeedManager extends IBaseResult, MicrofeedManagerProps, MicrofeedManagerCollections, MicrofeedManagerMethods {

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
* MicrofeedManagerOData
**********************************************/
export interface MicrofeedManagerOData extends IBaseResult, MicrofeedManagerProps, MicrofeedManagerMethods {

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
	Items?: { results: Array<SP.Microfeed.MicrofeedPostOptions> };
}

/*********************************************
* MicrofeedPostOptionCollectionCollections
**********************************************/
export interface MicrofeedPostOptionCollectionCollections {

}

/*********************************************
* IMicrofeedStore
**********************************************/
export interface IMicrofeedStore extends MicrofeedStoreCollections, MicrofeedStoreMethods, IBaseExecution<IMicrofeedStore> {

}

/*********************************************
* IMicrofeedStoreCollection
**********************************************/
export interface IMicrofeedStoreCollection extends IBaseResults<MicrofeedStore> {
	done?: (resolve: (value?: Array<MicrofeedStore>) => void) => void;
}

/*********************************************
* IMicrofeedStoreQueryCollection
**********************************************/
export interface IMicrofeedStoreQueryCollection extends IBaseResults<MicrofeedStoreOData> {
	done?: (resolve: (value?: Array<MicrofeedStoreOData>) => void) => void;
}

/*********************************************
* IMicrofeedStoreQuery
**********************************************/
export interface IMicrofeedStoreQuery extends MicrofeedStoreOData, MicrofeedStoreMethods {

}

/*********************************************
* MicrofeedStore
**********************************************/
export interface MicrofeedStore extends IBaseResult, MicrofeedStoreProps, MicrofeedStoreCollections, MicrofeedStoreMethods {

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
* MicrofeedStoreOData
**********************************************/
export interface MicrofeedStoreOData extends IBaseResult, MicrofeedStoreProps, MicrofeedStoreMethods {

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
	query(storeIdentifier?: string, query?: SP.Microfeed.MicrofeedDataQuery): IBaseCollection<SP.Microfeed.MicrofeedData> & SP.Microfeed.MicrofeedDataCollectionMethods;
	setPostLikeStatus(accountName?: string, postId?: string, like?: boolean): IBaseExecution<any>;
}
