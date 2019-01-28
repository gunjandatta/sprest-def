import { SP } from "../../";

/*********************************************
* SocialAnnouncementManager
**********************************************/
export interface SocialAnnouncementManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SocialFeedManager
**********************************************/
export interface SocialFeedManager {
	Owner?: SP.Social.SocialActor;
	PersonalSitePortalUri?: string;
}

/*********************************************
* SocialFeedManagerMethods
**********************************************/
export interface SocialFeedManagerMethods {
	createFileAttachment<T=SP.Social.SocialAttachment>(name?: string, description?: string, fileData?: any): T;
	createImageAttachment<T=SP.Social.SocialAttachment>(name?: string, description?: string, imageData?: any): T;
	createPost<T=SP.Social.SocialThread>(targetId?: string, creationData?: SP.Social.SocialPostCreationData): T;
	deletePost<T=SP.Social.SocialThread>(postId?: string): T;
	getAllLikers<T=Array<SP.Social.SocialActor>>(postId?: string): T;
	getFeed<T=SP.Social.SocialFeed>(type?: number, options?: SP.Social.SocialFeedOptions): T;
	getFeedFor<T=SP.Social.SocialFeed>(actorId?: string, options?: SP.Social.SocialFeedOptions): T;
	getFullThread<T=SP.Social.SocialThread>(threadId?: string): T;
	getMentions<T=SP.Social.SocialFeed>(clearUnreadMentions?: boolean, options?: SP.Social.SocialFeedOptions): T;
	getPreview<T=SP.Social.SocialAttachment>(itemUrl?: string): T;
	getPreviewImage<T=any>(url?: string, key?: string, iv?: string): T;
	getUnreadMentionCount<T=number>(): T;
	likePost<T=SP.Social.SocialThread>(postId?: string): T;
	lockThread<T=SP.Social.SocialThread>(threadId?: string): T;
	suppressThreadNotifications<T=void>(threadId?: string): T;
	unlikePost<T=SP.Social.SocialThread>(postId?: string): T;
	unlockThread<T=SP.Social.SocialThread>(threadId?: string): T;
}

/*********************************************
* SocialFollowingManager
**********************************************/
export interface SocialFollowingManager {
	FollowedDocumentsUri?: string;
	FollowedSitesUri?: string;
}

/*********************************************
* SocialFollowingManagerMethods
**********************************************/
export interface SocialFollowingManagerMethods {
	follow<T=number>(actor?: SP.Social.SocialActorInfo): T;
	getFollowed<T=Array<SP.Social.SocialActor>>(types?: number): T;
	getFollowedCount<T=number>(types?: number): T;
	getFollowers<T=Array<SP.Social.SocialActor>>(): T;
	getSuggestions<T=Array<SP.Social.SocialActor>>(): T;
	isFollowed<T=boolean>(actor?: SP.Social.SocialActorInfo): T;
	stopFollowing<T=boolean>(actor?: SP.Social.SocialActorInfo): T;
}

/*********************************************
* SocialRestActor
**********************************************/
export interface SocialRestActor {
	FollowableItem?: string;
	FollowableItemActor?: SP.Social.SocialActor;
	Me?: SP.Social.SocialActor;
}

/*********************************************
* SocialRestActorMethods
**********************************************/
export interface SocialRestActorMethods {
	feed<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	likes<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	mentionFeed<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	news<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	organizationFeed<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	timelineFeed<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	unreadMentionCount<T=number>(): T;
}

/*********************************************
* SocialRestFeedManager
**********************************************/
export interface SocialRestFeedManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SocialRestFeedManagerMethods
**********************************************/
export interface SocialRestFeedManagerMethods {
	actor<T=SP.Social.SocialRestActor>(item?: string): T;
	my<T=SP.Social.SocialRestActor>(): T;
	post<T=SP.Social.SocialRestThread>(ID?: string): T;
}

/*********************************************
* SocialRestFeed
**********************************************/
export interface SocialRestFeed {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	SocialFeed?: SP.Social.SocialFeed;
}

/*********************************************
* SocialRestFeedMethods
**********************************************/
export interface SocialRestFeedMethods {
	clearUnReadMentionCount<T=SP.Social.SocialRestFeed>(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	post<T=SP.Social.SocialRestThread>(restCreationData?: SP.Social.SocialRestPostCreationData): T;
}

/*********************************************
* SocialRestFollowingManager
**********************************************/
export interface SocialRestFollowingManager {
	FollowedDocumentsUri?: string;
	FollowedSitesUri?: string;
	MyFollowedDocumentsUri?: string;
	MyFollowedSitesUri?: string;
	SocialActor?: SP.Social.SocialActor;
}

/*********************************************
* SocialRestFollowingManagerMethods
**********************************************/
export interface SocialRestFollowingManagerMethods {
	follow<T=number>(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): T;
	followed<T=Array<SP.Social.SocialActor>>(types?: number): T;
	followedCount<T=number>(types?: number): T;
	followers<T=Array<SP.Social.SocialActor>>(): T;
	isFollowed<T=boolean>(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): T;
	my<T=SP.Social.SocialRestFollowingManager>(): T;
	stopFollowing<T=void>(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): T;
	suggestions<T=Array<SP.Social.SocialActor>>(): T;
}

/*********************************************
* SocialRestThread
**********************************************/
export interface SocialRestThread {
	ID?: string;
	SocialThread?: SP.Social.SocialThread;
}

/*********************************************
* SocialRestThreadMethods
**********************************************/
export interface SocialRestThreadMethods {
	delete<T=void>(ID?: string): T;
	like<T=SP.Social.SocialRestThread>(ID?: string): T;
	likers<T=Array<SP.Social.SocialActor>>(ID?: string): T;
	lock<T=SP.Social.SocialRestThread>(ID?: string): T;
	reply<T=SP.Social.SocialRestThread>(restCreationData?: SP.Social.SocialRestPostCreationData): T;
	unLike<T=SP.Social.SocialRestThread>(ID?: string): T;
	unLock<T=SP.Social.SocialRestThread>(ID?: string): T;
}
