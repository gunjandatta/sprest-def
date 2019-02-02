import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";
import { SP } from "../../";

/*********************************************
* SocialAnnouncementManager
**********************************************/
export interface SocialAnnouncementManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SocialAnnouncementManagerCollections
**********************************************/
export interface SocialAnnouncementManagerCollections {

}

/*********************************************
* ISocialFeedManager
**********************************************/
export interface ISocialFeedManager extends SocialFeedManagerCollections,SocialFeedManagerMethods,IBaseQuery<ISocialFeedManagerQuery> {

}

/*********************************************
* ISocialFeedManagerCollection
**********************************************/
export interface ISocialFeedManagerCollection extends IBaseResults<SocialFeedManager> {
	done(resolve: (value?: Array<SocialFeedManager | any>) => void);
}

/*********************************************
* ISocialFeedManagerQueryCollection
**********************************************/
export interface ISocialFeedManagerQueryCollection extends IBaseResults<SocialFeedManagerQuery> {
	done(resolve: (value?: Array<SocialFeedManagerQuery | any>) => void);
}

/*********************************************
* ISocialFeedManagerQuery
**********************************************/
export interface ISocialFeedManagerQuery extends SocialFeedManagerQuery, SocialFeedManagerMethods {

}

/*********************************************
* SocialFeedManager
**********************************************/
export interface SocialFeedManager extends IBaseResult, SocialFeedManagerProps, SocialFeedManagerCollections, SocialFeedManagerMethods {

}

/*********************************************
* SocialFeedManagerProps
**********************************************/
export interface SocialFeedManagerProps {
	Owner?: SP.Social.SocialActor;
	PersonalSitePortalUri?: string;
}

/*********************************************
* SocialFeedManagerPropMethods
**********************************************/
export interface SocialFeedManagerPropMethods {

}

/*********************************************
* SocialFeedManagerCollections
**********************************************/
export interface SocialFeedManagerCollections extends SocialFeedManagerPropMethods {

}

/*********************************************
* SocialFeedManagerQuery
**********************************************/
export interface SocialFeedManagerQuery extends IBaseResult, SocialFeedManagerProps, SocialFeedManagerMethods {

}

/*********************************************
* SocialFeedManagerMethods
**********************************************/
export interface SocialFeedManagerMethods {
	createFileAttachment(name?: string, description?: string, fileData?: any): IBaseExecution<SP.Social.SocialAttachment>;
	createImageAttachment(name?: string, description?: string, imageData?: any): IBaseExecution<SP.Social.SocialAttachment>;
	createPost(targetId?: string, creationData?: SP.Social.SocialPostCreationData): IBaseExecution<SP.Social.SocialThread>;
	deletePost(postId?: string): IBaseExecution<SP.Social.SocialThread>;
	getAllLikers(postId?: string): IBaseCollection<SP.Social.SocialActor>;
	getFeed(type?: number, options?: SP.Social.SocialFeedOptions): IBaseExecution<SP.Social.SocialFeed>;
	getFeedFor(actorId?: string, options?: SP.Social.SocialFeedOptions): IBaseExecution<SP.Social.SocialFeed>;
	getFullThread(threadId?: string): IBaseExecution<SP.Social.SocialThread>;
	getMentions(clearUnreadMentions?: boolean, options?: SP.Social.SocialFeedOptions): IBaseExecution<SP.Social.SocialFeed>;
	getPreview(itemUrl?: string): IBaseExecution<SP.Social.SocialAttachment>;
	getPreviewImage(url?: string, key?: string, iv?: string): IBaseExecution<any>;
	getUnreadMentionCount(): IBaseExecution<number>;
	likePost(postId?: string): IBaseExecution<SP.Social.SocialThread>;
	lockThread(threadId?: string): IBaseExecution<SP.Social.SocialThread>;
	suppressThreadNotifications(threadId?: string): IBaseExecution<any>;
	unlikePost(postId?: string): IBaseExecution<SP.Social.SocialThread>;
	unlockThread(threadId?: string): IBaseExecution<SP.Social.SocialThread>;
}

/*********************************************
* ISocialFollowingManager
**********************************************/
export interface ISocialFollowingManager extends SocialFollowingManagerCollections,SocialFollowingManagerMethods,IBaseQuery<ISocialFollowingManagerQuery> {

}

/*********************************************
* ISocialFollowingManagerCollection
**********************************************/
export interface ISocialFollowingManagerCollection extends IBaseResults<SocialFollowingManager> {
	done(resolve: (value?: Array<SocialFollowingManager | any>) => void);
}

/*********************************************
* ISocialFollowingManagerQueryCollection
**********************************************/
export interface ISocialFollowingManagerQueryCollection extends IBaseResults<SocialFollowingManagerQuery> {
	done(resolve: (value?: Array<SocialFollowingManagerQuery | any>) => void);
}

/*********************************************
* ISocialFollowingManagerQuery
**********************************************/
export interface ISocialFollowingManagerQuery extends SocialFollowingManagerQuery, SocialFollowingManagerMethods {

}

/*********************************************
* SocialFollowingManager
**********************************************/
export interface SocialFollowingManager extends IBaseResult, SocialFollowingManagerProps, SocialFollowingManagerCollections, SocialFollowingManagerMethods {

}

/*********************************************
* SocialFollowingManagerProps
**********************************************/
export interface SocialFollowingManagerProps {
	FollowedDocumentsUri?: string;
	FollowedSitesUri?: string;
}

/*********************************************
* SocialFollowingManagerPropMethods
**********************************************/
export interface SocialFollowingManagerPropMethods {

}

/*********************************************
* SocialFollowingManagerCollections
**********************************************/
export interface SocialFollowingManagerCollections extends SocialFollowingManagerPropMethods {

}

/*********************************************
* SocialFollowingManagerQuery
**********************************************/
export interface SocialFollowingManagerQuery extends IBaseResult, SocialFollowingManagerProps, SocialFollowingManagerMethods {

}

/*********************************************
* SocialFollowingManagerMethods
**********************************************/
export interface SocialFollowingManagerMethods {
	follow(actor?: SP.Social.SocialActorInfo): IBaseExecution<number>;
	getFollowed(types?: number): IBaseCollection<SP.Social.SocialActor>;
	getFollowedCount(types?: number): IBaseExecution<number>;
	getFollowers(): IBaseCollection<SP.Social.SocialActor>;
	getSuggestions(): IBaseCollection<SP.Social.SocialActor>;
	isFollowed(actor?: SP.Social.SocialActorInfo): IBaseExecution<boolean>;
	stopFollowing(actor?: SP.Social.SocialActorInfo): IBaseExecution<boolean>;
}

/*********************************************
* ISocialRestActor
**********************************************/
export interface ISocialRestActor extends SocialRestActorCollections,SocialRestActorMethods,IBaseQuery<ISocialRestActorQuery> {

}

/*********************************************
* ISocialRestActorCollection
**********************************************/
export interface ISocialRestActorCollection extends IBaseResults<SocialRestActor> {
	done(resolve: (value?: Array<SocialRestActor | any>) => void);
}

/*********************************************
* ISocialRestActorQueryCollection
**********************************************/
export interface ISocialRestActorQueryCollection extends IBaseResults<SocialRestActorQuery> {
	done(resolve: (value?: Array<SocialRestActorQuery | any>) => void);
}

/*********************************************
* ISocialRestActorQuery
**********************************************/
export interface ISocialRestActorQuery extends SocialRestActorQuery, SocialRestActorMethods {

}

/*********************************************
* SocialRestActor
**********************************************/
export interface SocialRestActor extends IBaseResult, SocialRestActorProps, SocialRestActorCollections, SocialRestActorMethods {

}

/*********************************************
* SocialRestActorProps
**********************************************/
export interface SocialRestActorProps {
	FollowableItem?: string;
	FollowableItemActor?: SP.Social.SocialActor;
	Me?: SP.Social.SocialActor;
}

/*********************************************
* SocialRestActorPropMethods
**********************************************/
export interface SocialRestActorPropMethods {

}

/*********************************************
* SocialRestActorCollections
**********************************************/
export interface SocialRestActorCollections extends SocialRestActorPropMethods {

}

/*********************************************
* SocialRestActorQuery
**********************************************/
export interface SocialRestActorQuery extends IBaseResult, SocialRestActorProps, SocialRestActorMethods {

}

/*********************************************
* SocialRestActorMethods
**********************************************/
export interface SocialRestActorMethods {
	feed(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<SP.Social.SocialRestFeed>;
	likes(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<SP.Social.SocialRestFeed>;
	mentionFeed(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<SP.Social.SocialRestFeed>;
	news(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<SP.Social.SocialRestFeed>;
	organizationFeed(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<SP.Social.SocialRestFeed>;
	timelineFeed(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<SP.Social.SocialRestFeed>;
	unreadMentionCount(): IBaseExecution<number>;
}

/*********************************************
* ISocialRestFeedManager
**********************************************/
export interface ISocialRestFeedManager extends SocialRestFeedManagerCollections,SocialRestFeedManagerMethods,IBaseQuery<ISocialRestFeedManagerQuery> {

}

/*********************************************
* ISocialRestFeedManagerCollection
**********************************************/
export interface ISocialRestFeedManagerCollection extends IBaseResults<SocialRestFeedManager> {
	done(resolve: (value?: Array<SocialRestFeedManager | any>) => void);
}

/*********************************************
* ISocialRestFeedManagerQueryCollection
**********************************************/
export interface ISocialRestFeedManagerQueryCollection extends IBaseResults<SocialRestFeedManagerQuery> {
	done(resolve: (value?: Array<SocialRestFeedManagerQuery | any>) => void);
}

/*********************************************
* ISocialRestFeedManagerQuery
**********************************************/
export interface ISocialRestFeedManagerQuery extends SocialRestFeedManagerQuery, SocialRestFeedManagerMethods {

}

/*********************************************
* SocialRestFeedManager
**********************************************/
export interface SocialRestFeedManager extends IBaseResult, SocialRestFeedManagerProps, SocialRestFeedManagerCollections, SocialRestFeedManagerMethods {

}

/*********************************************
* SocialRestFeedManagerProps
**********************************************/
export interface SocialRestFeedManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SocialRestFeedManagerPropMethods
**********************************************/
export interface SocialRestFeedManagerPropMethods {

}

/*********************************************
* SocialRestFeedManagerCollections
**********************************************/
export interface SocialRestFeedManagerCollections extends SocialRestFeedManagerPropMethods {

}

/*********************************************
* SocialRestFeedManagerQuery
**********************************************/
export interface SocialRestFeedManagerQuery extends IBaseResult, SocialRestFeedManagerProps, SocialRestFeedManagerMethods {

}

/*********************************************
* SocialRestFeedManagerMethods
**********************************************/
export interface SocialRestFeedManagerMethods {
	actor(item?: string): IBaseExecution<SP.Social.SocialRestActor>;
	my(): IBaseExecution<SP.Social.SocialRestActor>;
	post(ID?: string): IBaseExecution<SP.Social.SocialRestThread>;
}

/*********************************************
* ISocialRestFeed
**********************************************/
export interface ISocialRestFeed extends SocialRestFeedCollections,SocialRestFeedMethods,IBaseQuery<ISocialRestFeedQuery> {

}

/*********************************************
* ISocialRestFeedCollection
**********************************************/
export interface ISocialRestFeedCollection extends IBaseResults<SocialRestFeed> {
	done(resolve: (value?: Array<SocialRestFeed | any>) => void);
}

/*********************************************
* ISocialRestFeedQueryCollection
**********************************************/
export interface ISocialRestFeedQueryCollection extends IBaseResults<SocialRestFeedQuery> {
	done(resolve: (value?: Array<SocialRestFeedQuery | any>) => void);
}

/*********************************************
* ISocialRestFeedQuery
**********************************************/
export interface ISocialRestFeedQuery extends SocialRestFeedQuery, SocialRestFeedMethods {

}

/*********************************************
* SocialRestFeed
**********************************************/
export interface SocialRestFeed extends IBaseResult, SocialRestFeedProps, SocialRestFeedCollections, SocialRestFeedMethods {

}

/*********************************************
* SocialRestFeedProps
**********************************************/
export interface SocialRestFeedProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	SocialFeed?: SP.Social.SocialFeed;
}

/*********************************************
* SocialRestFeedPropMethods
**********************************************/
export interface SocialRestFeedPropMethods {

}

/*********************************************
* SocialRestFeedCollections
**********************************************/
export interface SocialRestFeedCollections extends SocialRestFeedPropMethods {

}

/*********************************************
* SocialRestFeedQuery
**********************************************/
export interface SocialRestFeedQuery extends IBaseResult, SocialRestFeedProps, SocialRestFeedMethods {

}

/*********************************************
* SocialRestFeedMethods
**********************************************/
export interface SocialRestFeedMethods {
	clearUnReadMentionCount(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<SP.Social.SocialRestFeed>;
	post(restCreationData?: SP.Social.SocialRestPostCreationData): IBaseExecution<SP.Social.SocialRestThread>;
}

/*********************************************
* ISocialRestFollowingManager
**********************************************/
export interface ISocialRestFollowingManager extends SocialRestFollowingManagerCollections,SocialRestFollowingManagerMethods,IBaseQuery<ISocialRestFollowingManagerQuery> {

}

/*********************************************
* ISocialRestFollowingManagerCollection
**********************************************/
export interface ISocialRestFollowingManagerCollection extends IBaseResults<SocialRestFollowingManager> {
	done(resolve: (value?: Array<SocialRestFollowingManager | any>) => void);
}

/*********************************************
* ISocialRestFollowingManagerQueryCollection
**********************************************/
export interface ISocialRestFollowingManagerQueryCollection extends IBaseResults<SocialRestFollowingManagerQuery> {
	done(resolve: (value?: Array<SocialRestFollowingManagerQuery | any>) => void);
}

/*********************************************
* ISocialRestFollowingManagerQuery
**********************************************/
export interface ISocialRestFollowingManagerQuery extends SocialRestFollowingManagerQuery, SocialRestFollowingManagerMethods {

}

/*********************************************
* SocialRestFollowingManager
**********************************************/
export interface SocialRestFollowingManager extends IBaseResult, SocialRestFollowingManagerProps, SocialRestFollowingManagerCollections, SocialRestFollowingManagerMethods {

}

/*********************************************
* SocialRestFollowingManagerProps
**********************************************/
export interface SocialRestFollowingManagerProps {
	FollowedDocumentsUri?: string;
	FollowedSitesUri?: string;
	MyFollowedDocumentsUri?: string;
	MyFollowedSitesUri?: string;
	SocialActor?: SP.Social.SocialActor;
}

/*********************************************
* SocialRestFollowingManagerPropMethods
**********************************************/
export interface SocialRestFollowingManagerPropMethods {

}

/*********************************************
* SocialRestFollowingManagerCollections
**********************************************/
export interface SocialRestFollowingManagerCollections extends SocialRestFollowingManagerPropMethods {

}

/*********************************************
* SocialRestFollowingManagerQuery
**********************************************/
export interface SocialRestFollowingManagerQuery extends IBaseResult, SocialRestFollowingManagerProps, SocialRestFollowingManagerMethods {

}

/*********************************************
* SocialRestFollowingManagerMethods
**********************************************/
export interface SocialRestFollowingManagerMethods {
	follow(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): IBaseExecution<number>;
	followed(types?: number): IBaseCollection<SP.Social.SocialActor>;
	followedCount(types?: number): IBaseExecution<number>;
	followers(): IBaseCollection<SP.Social.SocialActor>;
	isFollowed(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): IBaseExecution<boolean>;
	my(): IBaseExecution<SP.Social.SocialRestFollowingManager>;
	stopFollowing(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): IBaseExecution<any>;
	suggestions(): IBaseCollection<SP.Social.SocialActor>;
}

/*********************************************
* ISocialRestThread
**********************************************/
export interface ISocialRestThread extends SocialRestThreadCollections,SocialRestThreadMethods,IBaseQuery<ISocialRestThreadQuery> {

}

/*********************************************
* ISocialRestThreadCollection
**********************************************/
export interface ISocialRestThreadCollection extends IBaseResults<SocialRestThread> {
	done(resolve: (value?: Array<SocialRestThread | any>) => void);
}

/*********************************************
* ISocialRestThreadQueryCollection
**********************************************/
export interface ISocialRestThreadQueryCollection extends IBaseResults<SocialRestThreadQuery> {
	done(resolve: (value?: Array<SocialRestThreadQuery | any>) => void);
}

/*********************************************
* ISocialRestThreadQuery
**********************************************/
export interface ISocialRestThreadQuery extends SocialRestThreadQuery, SocialRestThreadMethods {

}

/*********************************************
* SocialRestThread
**********************************************/
export interface SocialRestThread extends IBaseResult, SocialRestThreadProps, SocialRestThreadCollections, SocialRestThreadMethods {

}

/*********************************************
* SocialRestThreadProps
**********************************************/
export interface SocialRestThreadProps {
	ID?: string;
	SocialThread?: SP.Social.SocialThread;
}

/*********************************************
* SocialRestThreadPropMethods
**********************************************/
export interface SocialRestThreadPropMethods {

}

/*********************************************
* SocialRestThreadCollections
**********************************************/
export interface SocialRestThreadCollections extends SocialRestThreadPropMethods {

}

/*********************************************
* SocialRestThreadQuery
**********************************************/
export interface SocialRestThreadQuery extends IBaseResult, SocialRestThreadProps, SocialRestThreadMethods {

}

/*********************************************
* SocialRestThreadMethods
**********************************************/
export interface SocialRestThreadMethods {
	delete(ID?: string): IBaseExecution<any>;
	like(ID?: string): IBaseExecution<SP.Social.SocialRestThread>;
	likers(ID?: string): IBaseCollection<SP.Social.SocialActor>;
	lock(ID?: string): IBaseExecution<SP.Social.SocialRestThread>;
	reply(restCreationData?: SP.Social.SocialRestPostCreationData): IBaseExecution<SP.Social.SocialRestThread>;
	unLike(ID?: string): IBaseExecution<SP.Social.SocialRestThread>;
	unLock(ID?: string): IBaseExecution<SP.Social.SocialRestThread>;
}
