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
* SocialFeedManagerMethods<T = any>
**********************************************/
export interface SocialFeedManagerMethods<T = any> {
	createFileAttachment(name?: string, description?: string, fileData?: any): T;
	createImageAttachment(name?: string, description?: string, imageData?: any): T;
	createPost(targetId?: string, creationData?: SP.Social.SocialPostCreationData): T;
	deletePost(postId?: string): T;
	getAllLikers(postId?: string): T;
	getFeed(type?: number, options?: SP.Social.SocialFeedOptions): T;
	getFeedFor(actorId?: string, options?: SP.Social.SocialFeedOptions): T;
	getFullThread(threadId?: string): T;
	getMentions(clearUnreadMentions?: boolean, options?: SP.Social.SocialFeedOptions): T;
	getPreview(itemUrl?: string): T;
	getPreviewImage(url?: string, key?: string, iv?: string): T;
	getUnreadMentionCount(): T;
	likePost(postId?: string): T;
	lockThread(threadId?: string): T;
	suppressThreadNotifications(threadId?: string): T;
	unlikePost(postId?: string): T;
	unlockThread(threadId?: string): T;
}

/*********************************************
* SocialFollowingManager
**********************************************/
export interface SocialFollowingManager {
	FollowedDocumentsUri?: string;
	FollowedSitesUri?: string;
}

/*********************************************
* SocialFollowingManagerMethods<T = any>
**********************************************/
export interface SocialFollowingManagerMethods<T = any> {
	follow(actor?: SP.Social.SocialActorInfo): T;
	getFollowed(types?: number): T;
	getFollowedCount(types?: number): T;
	getFollowers(): T;
	getSuggestions(): T;
	isFollowed(actor?: SP.Social.SocialActorInfo): T;
	stopFollowing(actor?: SP.Social.SocialActorInfo): T;
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
* SocialRestActorMethods<T = any>
**********************************************/
export interface SocialRestActorMethods<T = any> {
	feed(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	likes(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	mentionFeed(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	news(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	organizationFeed(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	timelineFeed(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	unreadMentionCount(): T;
}

/*********************************************
* SocialRestFeedManager
**********************************************/
export interface SocialRestFeedManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SocialRestFeedManagerMethods<T = any>
**********************************************/
export interface SocialRestFeedManagerMethods<T = any> {
	actor(item?: string): T;
	my(): T;
	post(ID?: string): T;
}

/*********************************************
* SocialRestFeed
**********************************************/
export interface SocialRestFeed {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	SocialFeed?: SP.Social.SocialFeed;
}

/*********************************************
* SocialRestFeedMethods<T = any>
**********************************************/
export interface SocialRestFeedMethods<T = any> {
	clearUnReadMentionCount(MaxThreadCount?: number, NewerThan?: any, OlderThan?: any, SortOrder?: number): T;
	post(restCreationData?: SP.Social.SocialRestPostCreationData): T;
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
* SocialRestFollowingManagerMethods<T = any>
**********************************************/
export interface SocialRestFollowingManagerMethods<T = any> {
	follow(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): T;
	followed(types?: number): T;
	followedCount(types?: number): T;
	followers(): T;
	isFollowed(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): T;
	my(): T;
	stopFollowing(AccountName?: string, ActorType?: number, ContentUri?: string, Id?: string, TagGuid?: any): T;
	suggestions(): T;
}

/*********************************************
* SocialRestThread
**********************************************/
export interface SocialRestThread {
	ID?: string;
	SocialThread?: SP.Social.SocialThread;
}

/*********************************************
* SocialRestThreadMethods<T = any>
**********************************************/
export interface SocialRestThreadMethods<T = any> {
	delete(ID?: string): T;
	like(ID?: string): T;
	likers(ID?: string): T;
	lock(ID?: string): T;
	reply(restCreationData?: SP.Social.SocialRestPostCreationData): T;
	unLike(ID?: string): T;
	unLock(ID?: string): T;
}
