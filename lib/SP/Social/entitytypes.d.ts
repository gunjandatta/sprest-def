import { SP } from "../../";
import { IBaseExecution } from "../../";

/*********************************************
* SocialAnnouncementManager
**********************************************/
export interface SocialAnnouncementManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ISocialFeedManager
**********************************************/
export interface ISocialFeedManager extends SocialFeedManagerProps,SocialFeedManagerMethods,IBaseExecution<SocialFeedManager> {

}

/*********************************************
* SocialFeedManager
**********************************************/
export interface SocialFeedManager extends SocialFeedManagerProps, SocialFeedManagerMethods {
	Owner?: SP.Social.SocialActor;
	PersonalSitePortalUri?: string;
}

/*********************************************
* SocialFeedManagerProps
**********************************************/
export interface SocialFeedManagerProps {

}

/*********************************************
* SocialFeedManagerMethods
**********************************************/
export interface SocialFeedManagerMethods {
	createFileAttachment<T=SP.Social.SocialAttachment>(name?: string, description?: string, fileData?: any): IBaseExecution<T>;
	createImageAttachment<T=SP.Social.SocialAttachment>(name?: string, description?: string, imageData?: any): IBaseExecution<T>;
	createPost<T=SP.Social.SocialThread>(targetId?: string, creationData?: SP.Social.SocialPostCreationData): IBaseExecution<T>;
	deletePost<T=SP.Social.SocialThread>(postId?: string): IBaseExecution<T>;
	getAllLikers<T=Array<SP.Social.SocialActor>>(postId?: string): IBaseExecution<T>;
	getFeed<T=SP.Social.SocialFeed>(type?: number, options?: SP.Social.SocialFeedOptions): IBaseExecution<T>;
	getFeedFor<T=SP.Social.SocialFeed>(actorId?: string, options?: SP.Social.SocialFeedOptions): IBaseExecution<T>;
	getFullThread<T=SP.Social.SocialThread>(threadId?: string): IBaseExecution<T>;
	getMentions<T=SP.Social.SocialFeed>(clearUnreadMentions?: boolean, options?: SP.Social.SocialFeedOptions): IBaseExecution<T>;
	getPreview<T=SP.Social.SocialAttachment>(itemUrl?: string): IBaseExecution<T>;
	getPreviewImage<T=any>(url?: string, key?: string, iv?: string): IBaseExecution<T>;
	getUnreadMentionCount<T=number>(): IBaseExecution<T>;
	likePost<T=SP.Social.SocialThread>(postId?: string): IBaseExecution<T>;
	lockThread<T=SP.Social.SocialThread>(threadId?: string): IBaseExecution<T>;
	suppressThreadNotifications<T=any>(threadId?: string): IBaseExecution<T>;
	unlikePost<T=SP.Social.SocialThread>(postId?: string): IBaseExecution<T>;
	unlockThread<T=SP.Social.SocialThread>(threadId?: string): IBaseExecution<T>;
}

/*********************************************
* ISocialFollowingManager
**********************************************/
export interface ISocialFollowingManager extends SocialFollowingManagerProps,SocialFollowingManagerMethods,IBaseExecution<SocialFollowingManager> {

}

/*********************************************
* SocialFollowingManager
**********************************************/
export interface SocialFollowingManager extends SocialFollowingManagerProps, SocialFollowingManagerMethods {
	FollowedDocumentsUri?: string;
	FollowedSitesUri?: string;
}

/*********************************************
* SocialFollowingManagerProps
**********************************************/
export interface SocialFollowingManagerProps {

}

/*********************************************
* SocialFollowingManagerMethods
**********************************************/
export interface SocialFollowingManagerMethods {
	follow<T=number>(actor?: SP.Social.SocialActorInfo): IBaseExecution<T>;
	getFollowed<T=Array<SP.Social.SocialActor>>(types?: number): IBaseExecution<T>;
	getFollowedCount<T=number>(types?: number): IBaseExecution<T>;
	getFollowers<T=Array<SP.Social.SocialActor>>(): IBaseExecution<T>;
	getSuggestions<T=Array<SP.Social.SocialActor>>(): IBaseExecution<T>;
	isFollowed<T=boolean>(actor?: SP.Social.SocialActorInfo): IBaseExecution<T>;
	stopFollowing<T=boolean>(actor?: SP.Social.SocialActorInfo): IBaseExecution<T>;
}

/*********************************************
* ISocialRestActor
**********************************************/
export interface ISocialRestActor extends SocialRestActorProps,SocialRestActorMethods,IBaseExecution<SocialRestActor> {

}

/*********************************************
* SocialRestActor
**********************************************/
export interface SocialRestActor extends SocialRestActorProps, SocialRestActorMethods {
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
* SocialRestActorMethods
**********************************************/
export interface SocialRestActorMethods {
	feed<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<T>;
	likes<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<T>;
	mentionFeed<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<T>;
	news<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<T>;
	organizationFeed<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<T>;
	timelineFeed<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<T>;
	unreadMentionCount<T=number>(): IBaseExecution<T>;
}

/*********************************************
* ISocialRestFeedManager
**********************************************/
export interface ISocialRestFeedManager extends SocialRestFeedManagerProps,SocialRestFeedManagerMethods,IBaseExecution<SocialRestFeedManager> {

}

/*********************************************
* SocialRestFeedManager
**********************************************/
export interface SocialRestFeedManager extends SocialRestFeedManagerProps, SocialRestFeedManagerMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SocialRestFeedManagerProps
**********************************************/
export interface SocialRestFeedManagerProps {

}

/*********************************************
* SocialRestFeedManagerMethods
**********************************************/
export interface SocialRestFeedManagerMethods {
	actor<T=SP.Social.SocialRestActor>(item?: string): IBaseExecution<T>;
	my<T=SP.Social.SocialRestActor>(): IBaseExecution<T>;
	post<T=SP.Social.SocialRestThread>(ID?: string): IBaseExecution<T>;
}

/*********************************************
* ISocialRestFeed
**********************************************/
export interface ISocialRestFeed extends SocialRestFeedProps,SocialRestFeedMethods,IBaseExecution<SocialRestFeed> {

}

/*********************************************
* SocialRestFeed
**********************************************/
export interface SocialRestFeed extends SocialRestFeedProps, SocialRestFeedMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	SocialFeed?: SP.Social.SocialFeed;
}

/*********************************************
* SocialRestFeedProps
**********************************************/
export interface SocialRestFeedProps {

}

/*********************************************
* SocialRestFeedMethods
**********************************************/
export interface SocialRestFeedMethods {
	clearUnReadMentionCount<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): IBaseExecution<T>;
	post<T=SP.Social.SocialRestThread>(restCreationData?: SP.Social.SocialRestPostCreationData): IBaseExecution<T>;
}

/*********************************************
* ISocialRestFollowingManager
**********************************************/
export interface ISocialRestFollowingManager extends SocialRestFollowingManagerProps,SocialRestFollowingManagerMethods,IBaseExecution<SocialRestFollowingManager> {

}

/*********************************************
* SocialRestFollowingManager
**********************************************/
export interface SocialRestFollowingManager extends SocialRestFollowingManagerProps, SocialRestFollowingManagerMethods {
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
* SocialRestFollowingManagerMethods
**********************************************/
export interface SocialRestFollowingManagerMethods {
	follow<T=number>(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): IBaseExecution<T>;
	followed<T=Array<SP.Social.SocialActor>>(types?: number): IBaseExecution<T>;
	followedCount<T=number>(types?: number): IBaseExecution<T>;
	followers<T=Array<SP.Social.SocialActor>>(): IBaseExecution<T>;
	isFollowed<T=boolean>(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): IBaseExecution<T>;
	my<T=SP.Social.SocialRestFollowingManager>(): IBaseExecution<T>;
	stopFollowing<T=any>(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): IBaseExecution<T>;
	suggestions<T=Array<SP.Social.SocialActor>>(): IBaseExecution<T>;
}

/*********************************************
* ISocialRestThread
**********************************************/
export interface ISocialRestThread extends SocialRestThreadProps,SocialRestThreadMethods,IBaseExecution<SocialRestThread> {

}

/*********************************************
* SocialRestThread
**********************************************/
export interface SocialRestThread extends SocialRestThreadProps, SocialRestThreadMethods {
	ID?: string;
	SocialThread?: SP.Social.SocialThread;
}

/*********************************************
* SocialRestThreadProps
**********************************************/
export interface SocialRestThreadProps {

}

/*********************************************
* SocialRestThreadMethods
**********************************************/
export interface SocialRestThreadMethods {
	delete<T=any>(ID?: string): IBaseExecution<T>;
	like<T=SP.Social.SocialRestThread>(ID?: string): IBaseExecution<T>;
	likers<T=Array<SP.Social.SocialActor>>(ID?: string): IBaseExecution<T>;
	lock<T=SP.Social.SocialRestThread>(ID?: string): IBaseExecution<T>;
	reply<T=SP.Social.SocialRestThread>(restCreationData?: SP.Social.SocialRestPostCreationData): IBaseExecution<T>;
	unLike<T=SP.Social.SocialRestThread>(ID?: string): IBaseExecution<T>;
	unLock<T=SP.Social.SocialRestThread>(ID?: string): IBaseExecution<T>;
}
