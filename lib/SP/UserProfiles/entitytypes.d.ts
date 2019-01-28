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
* FollowedContentMethods
**********************************************/
export interface FollowedContentMethods {
	findAndUpdateFollowedGroup<T=SP.UserProfiles.FollowedItem>(groupId?: any): T;
	findAndUpdateFollowedItem<T=SP.UserProfiles.FollowedItem>(url?: string): T;
	followItem<T=SP.UserProfiles.FollowResult>(item?: SP.UserProfiles.FollowedItem): T;
	getFollowedStatus<T=number>(url?: string): T;
	getGroups<T=Array<SP.UserProfiles.FollowedItem>>(rowLimit?: number): T;
	getItem<T=SP.UserProfiles.FollowedItem>(url?: string): T;
	getItems<T=Array<SP.UserProfiles.FollowedItem>>(options?: number, subtype?: number): T;
	hasGroupMembershipChangedAndSyncChanges<T=boolean>(): T;
	isFollowed<T=boolean>(url?: string): T;
	refreshFollowedItem<T=SP.UserProfiles.FollowedItem>(item?: SP.UserProfiles.FollowedItem): T;
	setItemPinState<T=SP.UserProfiles.FollowResult>(uri?: string, groupId?: any, pinState?: number): T;
	stopFollowing<T=void>(url?: string): T;
	updateFollowedGroupForUser<T=void>(contextUri?: string, groupId?: any, loginName?: string): T;
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
* PeopleManagerMethods
**********************************************/
export interface PeopleManagerMethods {
	amIFollowedBy<T=boolean>(accountName?: string): T;
	amIFollowing<T=boolean>(accountName?: string): T;
	follow<T=void>(accountName?: string): T;
	followTag<T=void>(value?: any): T;
	getDefaultDocumentLibrary<T=string>(accountName?: string, createSiteIfNotExists?: boolean, siteCreationPriority?: number): T;
	getFollowedTags<T=Array<string>>(cTagsToFetch?: number): T;
	getFollowersFor<T=Array<SP.UserProfiles.PersonProperties>>(accountName?: string): T;
	getMyFollowers<T=Array<SP.UserProfiles.PersonProperties>>(): T;
	getMyProperties<T=SP.UserProfiles.PersonProperties>(): T;
	getMySuggestions<T=Array<SP.UserProfiles.PersonProperties>>(): T;
	getPeopleFollowedBy<T=Array<SP.UserProfiles.PersonProperties>>(accountName?: string): T;
	getPeopleFollowedByMe<T=Array<SP.UserProfiles.PersonProperties>>(): T;
	getPropertiesFor<T=SP.UserProfiles.PersonProperties>(accountName?: string): T;
	getSPUserInformation<T=Array<SP.KeyValue>>(accountName?: string, siteId?: any): T;
	getUserProfileProperties<T=Array<SP.KeyValue>>(accountName?: string): T;
	getUserProfilePropertyFor<T=string>(accountName?: string, propertyName?: string): T;
	hardDeleteUserProfile<T=boolean>(accountName?: string, userId?: any): T;
	hideSuggestion<T=void>(accountName?: string): T;
	removeSPUserInformation<T=Array<SP.KeyValue>>(accountName?: string, siteId?: any, redactName?: string): T;
	setMultiValuedProfileProperty<T=void>(accountName?: string, propertyName?: string, propertyValues?: Array<string>): T;
	setMyProfilePicture<T=void>(picture?: any): T;
	setSingleValueProfileProperty<T=void>(accountName?: string, propertyName?: string, propertyValue?: string): T;
	stopFollowing<T=void>(accountName?: string): T;
	stopFollowingTag<T=void>(value?: any): T;
}

/*********************************************
* PersonalCache
**********************************************/
export interface PersonalCache {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PersonalCacheMethods
**********************************************/
export interface PersonalCacheMethods {
	deleteCacheItemsAsync<T=void>(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>): T;
	loadUserProfile<T=void>(email?: string): T;
	readCache<T=Array<SP.UserProfiles.PersonalCacheItem>>(folderPath?: string): T;
	readCacheOrCreate<T=Array<SP.UserProfiles.PersonalCacheItem>>(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean): T;
	readCacheOrCreateOrderById<T=Array<SP.UserProfiles.PersonalCacheItem>>(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean): T;
	writeCache<T=void>(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>): T;
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
* ProfileImageStoreMethods
**********************************************/
export interface ProfileImageStoreMethods {
	saveUploadedFile<T=Array<string>>(profileType?: number, fileNamePrefix?: string, isFeedAttachment?: boolean, clientFilePath?: string, fileSize?: number, fileStream?: any): T;
}

/*********************************************
* ProfileLoader
**********************************************/
export interface ProfileLoader {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProfileLoaderMethods
**********************************************/
export interface ProfileLoaderMethods {
	createPersonalSiteEnqueueBulk<T=Array<string>>(emailIDs?: Array<string>): T;
	getUserProfile<T=SP.UserProfiles.UserProfile>(): T;
}

/*********************************************
* UserProfilePropertiesForUser
**********************************************/
export interface UserProfilePropertiesForUser {
	AccountName?: string;
}

/*********************************************
* UserProfilePropertiesForUserMethods
**********************************************/
export interface UserProfilePropertiesForUserMethods {
	getPropertyNames<T=Array<string>>(): T;
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
* UserProfileCollections
**********************************************/
export interface UserProfileCollections {
	FollowedContent<T=SP.UserProfiles.FollowedContent>(): T;
	PersonalSite<T=SP.Site>(): T;
}

/*********************************************
* UserProfileQuery
**********************************************/
export interface UserProfileQuery {
	FollowedContent<T=SP.UserProfiles.FollowedContent>(): T;
	PersonalSite<T=SP.Site>(): T;
}

/*********************************************
* UserProfileMethods
**********************************************/
export interface UserProfileMethods {
	createPersonalSite<T=void>(lcid?: number): T;
	createPersonalSiteEnque<T=void>(isInteractive?: boolean): T;
	createPersonalSiteFromWorkItem<T=number>(workItemType?: any): T;
	setMySiteFirstRunExperience<T=void>(value?: number): T;
	shareAllSocialData<T=void>(shareAll?: boolean): T;
}
