import { SP } from "../../";

/*********************************************
* CrossGeoSync
**********************************************/
export interface CrossGeoSync {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* FollowedContent
**********************************************/
export interface FollowedContent {
	FollowedDocumentsUrl?: string;
	FollowedSitesUrl?: string;
}

/*********************************************
* FollowedContentMethods<T = any>
**********************************************/
export interface FollowedContentMethods<T = any> {
	findAndUpdateFollowedGroup(groupId?: any): T;
	findAndUpdateFollowedItem(url?: string): T;
	followItem(item?: SP.UserProfiles.FollowedItem): T;
	getFollowedStatus(url?: string): T;
	getGroups(rowLimit?: number): T;
	getItem(url?: string): T;
	getItems(options?: number, subtype?: number): T;
	hasGroupMembershipChangedAndSyncChanges(): T;
	isFollowed(url?: string): T;
	refreshFollowedItem(item?: SP.UserProfiles.FollowedItem): T;
	setItemPinState(uri?: string, groupId?: any, pinState?: number): T;
	stopFollowing(url?: string): T;
	updateFollowedGroupForUser(contextUri?: string, groupId?: any, loginName?: string): T;
}

/*********************************************
* FollowedItemData
**********************************************/
export interface FollowedItemData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Properties?: Array<SP.KeyValue>;
}

/*********************************************
* HashTagCollection
**********************************************/
export interface HashTagCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<SP.UserProfiles.HashTag>;
}

/*********************************************
* PeopleManager
**********************************************/
export interface PeopleManager {
	EditProfileLink?: string;
	IsMyPeopleListPublic?: boolean;
}

/*********************************************
* PeopleManagerMethods<T = any>
**********************************************/
export interface PeopleManagerMethods<T = any> {
	amIFollowedBy(accountName?: string): T;
	amIFollowing(accountName?: string): T;
	follow(accountName?: string): T;
	followTag(value?: any): T;
	getDefaultDocumentLibrary(accountName?: string, createSiteIfNotExists?: boolean, siteCreationPriority?: number): T;
	getFollowedTags(cTagsToFetch?: number): T;
	getFollowersFor(accountName?: string): T;
	getMyFollowers(): T;
	getMyProperties(): T;
	getMySuggestions(): T;
	getPeopleFollowedBy(accountName?: string): T;
	getPeopleFollowedByMe(): T;
	getPropertiesFor(accountName?: string): T;
	getSPUserInformation(accountName?: string, siteId?: any): T;
	getUserProfileProperties(accountName?: string): T;
	getUserProfilePropertyFor(accountName?: string, propertyName?: string): T;
	hardDeleteUserProfile(accountName?: string, userId?: any): T;
	hideSuggestion(accountName?: string): T;
	removeSPUserInformation(accountName?: string, siteId?: any, redactName?: string): T;
	setMultiValuedProfileProperty(accountName?: string, propertyName?: string, propertyValues?: Array<string>): T;
	setMyProfilePicture(picture?: any): T;
	setSingleValueProfileProperty(accountName?: string, propertyName?: string, propertyValue?: string): T;
	stopFollowing(accountName?: string): T;
	stopFollowingTag(value?: any): T;
}

/*********************************************
* PersonalCache
**********************************************/
export interface PersonalCache {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PersonalCacheMethods<T = any>
**********************************************/
export interface PersonalCacheMethods<T = any> {
	deleteCacheItemsAsync(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>): T;
	loadUserProfile(email?: string): T;
	readCache(folderPath?: string): T;
	readCacheOrCreate(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean): T;
	readCacheOrCreateOrderById(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean): T;
	writeCache(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>): T;
}

/*********************************************
* PersonProperties
**********************************************/
export interface PersonProperties {
	AccountName?: string;
	DirectReports?: Array<string>;
	DisplayName?: string;
	Email?: string;
	ExtendedManagers?: Array<string>;
	ExtendedReports?: Array<string>;
	IsFollowed?: boolean;
	LatestPost?: string;
	Peers?: Array<string>;
	PersonalSiteHostUrl?: string;
	PersonalUrl?: string;
	PictureUrl?: string;
	Title?: string;
	UserProfileProperties?: Array<SP.KeyValue>;
	UserUrl?: string;
}

/*********************************************
* ProfileImageStore
**********************************************/
export interface ProfileImageStore {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProfileImageStoreMethods<T = any>
**********************************************/
export interface ProfileImageStoreMethods<T = any> {
	saveUploadedFile(profileType?: number, fileNamePrefix?: string, isFeedAttachment?: boolean, clientFilePath?: string, fileSize?: number, fileStream?: any): T;
}

/*********************************************
* ProfileLoader
**********************************************/
export interface ProfileLoader {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProfileLoaderMethods<T = any>
**********************************************/
export interface ProfileLoaderMethods<T = any> {
	createPersonalSiteEnqueueBulk(emailIDs?: Array<string>): T;
	getUserProfile(): T;
}

/*********************************************
* UserProfilePropertiesForUser
**********************************************/
export interface UserProfilePropertiesForUser {
	AccountName?: string;
}

/*********************************************
* UserProfilePropertiesForUserMethods<T = any>
**********************************************/
export interface UserProfilePropertiesForUserMethods<T = any> {
	getPropertyNames(): T;
}

/*********************************************
* UserProfile
**********************************************/
export interface UserProfile {
	AccountName?: string;
	DisplayName?: string;
	FollowPersonalSiteUrl?: string;
	IsDefaultDocumentLibraryBlocked?: boolean;
	IsPeopleListPublic?: boolean;
	IsPrivacySettingOn?: boolean;
	IsSelf?: boolean;
	JobTitle?: string;
	MySiteFirstRunExperience?: number;
	MySiteHostUrl?: string;
	O15FirstRunExperience?: number;
	PersonalSiteCapabilities?: number;
	PersonalSiteFirstCreationError?: string;
	PersonalSiteFirstCreationTime?: any;
	PersonalSiteInstantiationState?: number;
	PersonalSiteLastCreationTime?: any;
	PersonalSiteNumberOfRetries?: number;
	PictureImportEnabled?: boolean;
	PictureUrl?: string;
	PublicUrl?: string;
	SipAddress?: string;
	UrlToCreatePersonalSite?: string;
}

/*********************************************
* UserProfileCollections<T = any>
**********************************************/
export interface UserProfileCollections<T = any> {
	FollowedContent(): T;
	PersonalSite(): T;
}

/*********************************************
* UserProfileQuery<T = any>
**********************************************/
export interface UserProfileQuery<T = any> {
	FollowedContent(): T;
	PersonalSite(): T;
}

/*********************************************
* UserProfileMethods<T = any>
**********************************************/
export interface UserProfileMethods<T = any> {
	createPersonalSite(lcid?: number): T;
	createPersonalSiteEnque(isInteractive?: boolean): T;
	createPersonalSiteFromWorkItem(workItemType?: any): T;
	setMySiteFirstRunExperience(value?: number): T;
	shareAllSocialData(shareAll?: boolean): T;
}
