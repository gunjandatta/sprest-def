import { IBaseExecution } from "../../";
import { SP } from "../../";
import { IBaseQuery } from "../../";

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
* ISocialFeedManagerQuery
**********************************************/
export interface ISocialFeedManagerQuery extends SocialFeedManagerQuery,SocialFeedManagerMethods {

}

/*********************************************
* SocialFeedManager
**********************************************/
export interface SocialFeedManager extends SocialFeedManagerCollections, SocialFeedManagerMethods {
	Owner?: SP.Social.SocialActor;
	PersonalSitePortalUri?: string;
}

/*********************************************
* SocialFeedManagerProps
**********************************************/
export interface SocialFeedManagerProps {

}

/*********************************************
* SocialFeedManagerCollections
**********************************************/
export interface SocialFeedManagerCollections extends SocialFeedManagerProps {

}

/*********************************************
* SocialFeedManagerQuery
**********************************************/
export interface SocialFeedManagerQuery extends SocialFeedManagerProps {

}

/*********************************************
* SocialFeedManagerMethods
**********************************************/
export interface SocialFeedManagerMethods {
	createFileAttachment(name?: string, description?: string, fileData?: any): IBaseExecution<SP.Social.SocialAttachment>;
	createImageAttachment(name?: string, description?: string, imageData?: any): IBaseExecution<SP.Social.SocialAttachment>;
	createPost(targetId?: string, creationData?: SP.Social.SocialPostCreationData): IBaseExecution<SP.Social.SocialThread>;
	deletePost(postId?: string): IBaseExecution<SP.Social.SocialThread>;
	getAllLikers(postId?: string): IBaseExecution<Array<SP.Social.SocialActor>>;
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
* ISocialFollowingManagerQuery
**********************************************/
export interface ISocialFollowingManagerQuery extends SocialFollowingManagerQuery,SocialFollowingManagerMethods {

}

/*********************************************
* SocialFollowingManager
**********************************************/
export interface SocialFollowingManager extends SocialFollowingManagerCollections, SocialFollowingManagerMethods {
	FollowedDocumentsUri?: string;
	FollowedSitesUri?: string;
}

/*********************************************
* SocialFollowingManagerProps
**********************************************/
export interface SocialFollowingManagerProps {

}

/*********************************************
* SocialFollowingManagerCollections
**********************************************/
export interface SocialFollowingManagerCollections extends SocialFollowingManagerProps {

}

/*********************************************
* SocialFollowingManagerQuery
**********************************************/
export interface SocialFollowingManagerQuery extends SocialFollowingManagerProps {

}

/*********************************************
* SocialFollowingManagerMethods
**********************************************/
export interface SocialFollowingManagerMethods {
	follow(actor?: SP.Social.SocialActorInfo): IBaseExecution<number>;
	getFollowed(types?: number): IBaseExecution<Array<SP.Social.SocialActor>>;
	getFollowedCount(types?: number): IBaseExecution<number>;
	getFollowers(): IBaseExecution<Array<SP.Social.SocialActor>>;
	getSuggestions(): IBaseExecution<Array<SP.Social.SocialActor>>;
	isFollowed(actor?: SP.Social.SocialActorInfo): IBaseExecution<boolean>;
	stopFollowing(actor?: SP.Social.SocialActorInfo): IBaseExecution<boolean>;
}

/*********************************************
* ISocialRestActor
**********************************************/
export interface ISocialRestActor extends SocialRestActorCollections,SocialRestActorMethods,IBaseQuery<ISocialRestActorQuery> {

}

/*********************************************
* ISocialRestActorQuery
**********************************************/
export interface ISocialRestActorQuery extends SocialRestActorQuery,SocialRestActorMethods {

}

/*********************************************
* SocialRestActor
**********************************************/
export interface SocialRestActor extends SocialRestActorCollections, SocialRestActorMethods {
	FollowableItem?: string;
	FollowableItemActor?: SP.Social.SocialActor;
	Me?: SP.Social.SocialActor;
}

/*********************************************
* SocialRestActorProps
**********************************************/
export interface SocialRestActorProps {

}

/*********************************************
* SocialRestActorCollections
**********************************************/
export interface SocialRestActorCollections extends SocialRestActorProps {

}

/*********************************************
* SocialRestActorQuery
**********************************************/
export interface SocialRestActorQuery extends SocialRestActorProps {

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
* ISocialRestFeedManagerQuery
**********************************************/
export interface ISocialRestFeedManagerQuery extends SocialRestFeedManagerQuery,SocialRestFeedManagerMethods {

}

/*********************************************
* SocialRestFeedManager
**********************************************/
export interface SocialRestFeedManager extends SocialRestFeedManagerCollections, SocialRestFeedManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SocialRestFeedManagerProps
**********************************************/
export interface SocialRestFeedManagerProps {

}

/*********************************************
* SocialRestFeedManagerCollections
**********************************************/
export interface SocialRestFeedManagerCollections extends SocialRestFeedManagerProps {

}

/*********************************************
* SocialRestFeedManagerQuery
**********************************************/
export interface SocialRestFeedManagerQuery extends SocialRestFeedManagerProps {

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
* ISocialRestFeedQuery
**********************************************/
export interface ISocialRestFeedQuery extends SocialRestFeedQuery,SocialRestFeedMethods {

}

/*********************************************
* SocialRestFeed
**********************************************/
export interface SocialRestFeed extends SocialRestFeedCollections, SocialRestFeedMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	SocialFeed?: SP.Social.SocialFeed;
}

/*********************************************
* SocialRestFeedProps
**********************************************/
export interface SocialRestFeedProps {

}

/*********************************************
* SocialRestFeedCollections
**********************************************/
export interface SocialRestFeedCollections extends SocialRestFeedProps {

}

/*********************************************
* SocialRestFeedQuery
**********************************************/
export interface SocialRestFeedQuery extends SocialRestFeedProps {

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
* ISocialRestFollowingManagerQuery
**********************************************/
export interface ISocialRestFollowingManagerQuery extends SocialRestFollowingManagerQuery,SocialRestFollowingManagerMethods {

}

/*********************************************
* SocialRestFollowingManager
**********************************************/
export interface SocialRestFollowingManager extends SocialRestFollowingManagerCollections, SocialRestFollowingManagerMethods {
	FollowedDocumentsUri?: string;
	FollowedSitesUri?: string;
	MyFollowedDocumentsUri?: string;
	MyFollowedSitesUri?: string;
	SocialActor?: SP.Social.SocialActor;
}

/*********************************************
* SocialRestFollowingManagerProps
**********************************************/
export interface SocialRestFollowingManagerProps {

}

/*********************************************
* SocialRestFollowingManagerCollections
**********************************************/
export interface SocialRestFollowingManagerCollections extends SocialRestFollowingManagerProps {

}

/*********************************************
* SocialRestFollowingManagerQuery
**********************************************/
export interface SocialRestFollowingManagerQuery extends SocialRestFollowingManagerProps {

}

/*********************************************
* SocialRestFollowingManagerMethods
**********************************************/
export interface SocialRestFollowingManagerMethods {
	follow(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): IBaseExecution<number>;
	followed(types?: number): IBaseExecution<Array<SP.Social.SocialActor>>;
	followedCount(types?: number): IBaseExecution<number>;
	followers(): IBaseExecution<Array<SP.Social.SocialActor>>;
	isFollowed(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): IBaseExecution<boolean>;
	my(): IBaseExecution<SP.Social.SocialRestFollowingManager>;
	stopFollowing(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): IBaseExecution<any>;
	suggestions(): IBaseExecution<Array<SP.Social.SocialActor>>;
}

/*********************************************
* ISocialRestThread
**********************************************/
export interface ISocialRestThread extends SocialRestThreadCollections,SocialRestThreadMethods,IBaseQuery<ISocialRestThreadQuery> {

}

/*********************************************
* ISocialRestThreadQuery
**********************************************/
export interface ISocialRestThreadQuery extends SocialRestThreadQuery,SocialRestThreadMethods {

}

/*********************************************
* SocialRestThread
**********************************************/
export interface SocialRestThread extends SocialRestThreadCollections, SocialRestThreadMethods {
	ID?: string;
	SocialThread?: SP.Social.SocialThread;
}

/*********************************************
* SocialRestThreadProps
**********************************************/
export interface SocialRestThreadProps {

}

/*********************************************
* SocialRestThreadCollections
**********************************************/
export interface SocialRestThreadCollections extends SocialRestThreadProps {

}

/*********************************************
* SocialRestThreadQuery
**********************************************/
export interface SocialRestThreadQuery extends SocialRestThreadProps {

}

/*********************************************
* SocialRestThreadMethods
**********************************************/
export interface SocialRestThreadMethods {
	delete(ID?: string): IBaseExecution<any>;
	like(ID?: string): IBaseExecution<SP.Social.SocialRestThread>;
	likers(ID?: string): IBaseExecution<Array<SP.Social.SocialActor>>;
	lock(ID?: string): IBaseExecution<SP.Social.SocialRestThread>;
	reply(restCreationData?: SP.Social.SocialRestPostCreationData): IBaseExecution<SP.Social.SocialRestThread>;
	unLike(ID?: string): IBaseExecution<SP.Social.SocialRestThread>;
	unLock(ID?: string): IBaseExecution<SP.Social.SocialRestThread>;
}
