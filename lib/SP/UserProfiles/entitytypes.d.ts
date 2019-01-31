import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";
import { SP } from "../../";
import { IBaseCollection } from "../../";
import { IBaseResults } from "../../";

/*********************************************
* CrossGeoSync
**********************************************/
export interface CrossGeoSync {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* CrossGeoSyncCollections
**********************************************/
export interface CrossGeoSyncCollections {

}

/*********************************************
* IFollowedContent
**********************************************/
export interface IFollowedContent extends FollowedContentCollections,FollowedContentMethods,IBaseQuery<IFollowedContentQuery> {

}

/*********************************************
* IFollowedContentQuery
**********************************************/
export interface IFollowedContentQuery extends FollowedContentQuery,FollowedContentMethods {

}

/*********************************************
* FollowedContent
**********************************************/
export interface FollowedContent extends FollowedContentCollections, FollowedContentMethods {
	FollowedDocumentsUrl?: string;
	FollowedSitesUrl?: string;
}

/*********************************************
* FollowedContentProps
**********************************************/
export interface FollowedContentProps {

}

/*********************************************
* FollowedContentCollections
**********************************************/
export interface FollowedContentCollections extends FollowedContentProps {

}

/*********************************************
* FollowedContentQuery
**********************************************/
export interface FollowedContentQuery extends FollowedContentProps {

}

/*********************************************
* FollowedContentMethods
**********************************************/
export interface FollowedContentMethods {
	findAndUpdateFollowedGroup(groupId?: any): IBaseExecution<SP.UserProfiles.FollowedItem>;
	findAndUpdateFollowedItem(url?: string): IBaseExecution<SP.UserProfiles.FollowedItem>;
	followItem(item?: SP.UserProfiles.FollowedItem): IBaseExecution<SP.UserProfiles.FollowResult>;
	getFollowedStatus(url?: string): IBaseExecution<number>;
	getGroups(rowLimit?: number): IBaseExecution<Array<SP.UserProfiles.FollowedItem>>;
	getItem(url?: string): IBaseExecution<SP.UserProfiles.FollowedItem>;
	getItems(options?: number, subtype?: number): IBaseExecution<Array<SP.UserProfiles.FollowedItem>>;
	hasGroupMembershipChangedAndSyncChanges(): IBaseExecution<boolean>;
	isFollowed(url?: string): IBaseExecution<boolean>;
	refreshFollowedItem(item?: SP.UserProfiles.FollowedItem): IBaseExecution<SP.UserProfiles.FollowedItem>;
	setItemPinState(uri?: string, groupId?: any, pinState?: number): IBaseExecution<SP.UserProfiles.FollowResult>;
	stopFollowing(url?: string): IBaseExecution<any>;
	updateFollowedGroupForUser(contextUri?: string, groupId?: any, loginName?: string): IBaseExecution<any>;
}

/*********************************************
* FollowedItemData
**********************************************/
export interface FollowedItemData {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Properties?: Array<SP.KeyValue>;
}

/*********************************************
* FollowedItemDataCollections
**********************************************/
export interface FollowedItemDataCollections {

}

/*********************************************
* HashTagCollection
**********************************************/
export interface HashTagCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<SP.UserProfiles.HashTag>;
}

/*********************************************
* HashTagCollectionCollections
**********************************************/
export interface HashTagCollectionCollections {

}

/*********************************************
* IPeopleManager
**********************************************/
export interface IPeopleManager extends PeopleManagerCollections,PeopleManagerMethods,IBaseQuery<IPeopleManagerQuery> {

}

/*********************************************
* IPeopleManagerQuery
**********************************************/
export interface IPeopleManagerQuery extends PeopleManagerQuery,PeopleManagerMethods {

}

/*********************************************
* PeopleManager
**********************************************/
export interface PeopleManager extends PeopleManagerCollections, PeopleManagerMethods {
	EditProfileLink?: string;
	IsMyPeopleListPublic?: boolean;
}

/*********************************************
* PeopleManagerProps
**********************************************/
export interface PeopleManagerProps {

}

/*********************************************
* PeopleManagerCollections
**********************************************/
export interface PeopleManagerCollections extends PeopleManagerProps {

}

/*********************************************
* PeopleManagerQuery
**********************************************/
export interface PeopleManagerQuery extends PeopleManagerProps {

}

/*********************************************
* PeopleManagerMethods
**********************************************/
export interface PeopleManagerMethods {
	amIFollowedBy(accountName?: string): IBaseExecution<boolean>;
	amIFollowing(accountName?: string): IBaseExecution<boolean>;
	follow(accountName?: string): IBaseExecution<any>;
	followTag(value?: any): IBaseExecution<any>;
	getDefaultDocumentLibrary(accountName?: string, createSiteIfNotExists?: boolean, siteCreationPriority?: number): IBaseExecution<string>;
	getFollowedTags(cTagsToFetch?: number): IBaseExecution<Array<string>>;
	getFollowersFor(accountName?: string): IBaseExecution<Array<SP.UserProfiles.PersonProperties>>;
	getMyFollowers(): IBaseExecution<Array<SP.UserProfiles.PersonProperties>>;
	getMyProperties(): IBaseExecution<SP.UserProfiles.PersonProperties>;
	getMySuggestions(): IBaseExecution<Array<SP.UserProfiles.PersonProperties>>;
	getPeopleFollowedBy(accountName?: string): IBaseExecution<Array<SP.UserProfiles.PersonProperties>>;
	getPeopleFollowedByMe(): IBaseExecution<Array<SP.UserProfiles.PersonProperties>>;
	getPropertiesFor(accountName?: string): IBaseExecution<SP.UserProfiles.PersonProperties>;
	getSPUserInformation(accountName?: string, siteId?: any): IBaseExecution<Array<SP.KeyValue>>;
	getUserProfileProperties(accountName?: string): IBaseExecution<Array<SP.KeyValue>>;
	getUserProfilePropertyFor(accountName?: string, propertyName?: string): IBaseExecution<string>;
	hardDeleteUserProfile(accountName?: string, userId?: any): IBaseExecution<boolean>;
	hideSuggestion(accountName?: string): IBaseExecution<any>;
	removeSPUserInformation(accountName?: string, siteId?: any, redactName?: string): IBaseExecution<Array<SP.KeyValue>>;
	setMultiValuedProfileProperty(accountName?: string, propertyName?: string, propertyValues?: Array<string>): IBaseExecution<any>;
	setMyProfilePicture(picture?: any): IBaseExecution<any>;
	setSingleValueProfileProperty(accountName?: string, propertyName?: string, propertyValue?: string): IBaseExecution<any>;
	stopFollowing(accountName?: string): IBaseExecution<any>;
	stopFollowingTag(value?: any): IBaseExecution<any>;
}

/*********************************************
* IPersonalCache
**********************************************/
export interface IPersonalCache extends PersonalCacheCollections,PersonalCacheMethods,IBaseQuery<IPersonalCacheQuery> {

}

/*********************************************
* IPersonalCacheQuery
**********************************************/
export interface IPersonalCacheQuery extends PersonalCacheQuery,PersonalCacheMethods {

}

/*********************************************
* PersonalCache
**********************************************/
export interface PersonalCache extends PersonalCacheCollections, PersonalCacheMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PersonalCacheProps
**********************************************/
export interface PersonalCacheProps {

}

/*********************************************
* PersonalCacheCollections
**********************************************/
export interface PersonalCacheCollections extends PersonalCacheProps {

}

/*********************************************
* PersonalCacheQuery
**********************************************/
export interface PersonalCacheQuery extends PersonalCacheProps {

}

/*********************************************
* PersonalCacheMethods
**********************************************/
export interface PersonalCacheMethods {
	deleteCacheItemsAsync(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>): IBaseExecution<any>;
	loadUserProfile(email?: string): IBaseExecution<any>;
	readCache(folderPath?: string): IBaseExecution<Array<SP.UserProfiles.PersonalCacheItem>>;
	readCacheOrCreate(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean): IBaseExecution<Array<SP.UserProfiles.PersonalCacheItem>>;
	readCacheOrCreateOrderById(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean): IBaseExecution<Array<SP.UserProfiles.PersonalCacheItem>>;
	writeCache(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>): IBaseExecution<any>;
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
* PersonPropertiesCollections
**********************************************/
export interface PersonPropertiesCollections {

}

/*********************************************
* IProfileImageStore
**********************************************/
export interface IProfileImageStore extends ProfileImageStoreCollections,ProfileImageStoreMethods,IBaseQuery<IProfileImageStoreQuery> {

}

/*********************************************
* IProfileImageStoreQuery
**********************************************/
export interface IProfileImageStoreQuery extends ProfileImageStoreQuery,ProfileImageStoreMethods {

}

/*********************************************
* ProfileImageStore
**********************************************/
export interface ProfileImageStore extends ProfileImageStoreCollections, ProfileImageStoreMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProfileImageStoreProps
**********************************************/
export interface ProfileImageStoreProps {

}

/*********************************************
* ProfileImageStoreCollections
**********************************************/
export interface ProfileImageStoreCollections extends ProfileImageStoreProps {

}

/*********************************************
* ProfileImageStoreQuery
**********************************************/
export interface ProfileImageStoreQuery extends ProfileImageStoreProps {

}

/*********************************************
* ProfileImageStoreMethods
**********************************************/
export interface ProfileImageStoreMethods {
	saveUploadedFile(profileType?: number, fileNamePrefix?: string, isFeedAttachment?: boolean, clientFilePath?: string, fileSize?: number, fileStream?: any): IBaseExecution<Array<string>>;
}

/*********************************************
* IProfileLoader
**********************************************/
export interface IProfileLoader extends ProfileLoaderCollections,ProfileLoaderMethods,IBaseQuery<IProfileLoaderQuery> {

}

/*********************************************
* IProfileLoaderQuery
**********************************************/
export interface IProfileLoaderQuery extends ProfileLoaderQuery,ProfileLoaderMethods {

}

/*********************************************
* ProfileLoader
**********************************************/
export interface ProfileLoader extends ProfileLoaderCollections, ProfileLoaderMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProfileLoaderProps
**********************************************/
export interface ProfileLoaderProps {

}

/*********************************************
* ProfileLoaderCollections
**********************************************/
export interface ProfileLoaderCollections extends ProfileLoaderProps {

}

/*********************************************
* ProfileLoaderQuery
**********************************************/
export interface ProfileLoaderQuery extends ProfileLoaderProps {

}

/*********************************************
* ProfileLoaderMethods
**********************************************/
export interface ProfileLoaderMethods {
	createPersonalSiteEnqueueBulk(emailIDs?: Array<string>): IBaseExecution<Array<string>>;
	getUserProfile(): IBaseExecution<SP.UserProfiles.UserProfile>;
}

/*********************************************
* IUserProfilePropertiesForUser
**********************************************/
export interface IUserProfilePropertiesForUser extends UserProfilePropertiesForUserCollections,UserProfilePropertiesForUserMethods,IBaseQuery<IUserProfilePropertiesForUserQuery> {

}

/*********************************************
* IUserProfilePropertiesForUserQuery
**********************************************/
export interface IUserProfilePropertiesForUserQuery extends UserProfilePropertiesForUserQuery,UserProfilePropertiesForUserMethods {

}

/*********************************************
* UserProfilePropertiesForUser
**********************************************/
export interface UserProfilePropertiesForUser extends UserProfilePropertiesForUserCollections, UserProfilePropertiesForUserMethods {
	AccountName?: string;
}

/*********************************************
* UserProfilePropertiesForUserProps
**********************************************/
export interface UserProfilePropertiesForUserProps {

}

/*********************************************
* UserProfilePropertiesForUserCollections
**********************************************/
export interface UserProfilePropertiesForUserCollections extends UserProfilePropertiesForUserProps {

}

/*********************************************
* UserProfilePropertiesForUserQuery
**********************************************/
export interface UserProfilePropertiesForUserQuery extends UserProfilePropertiesForUserProps {

}

/*********************************************
* UserProfilePropertiesForUserMethods
**********************************************/
export interface UserProfilePropertiesForUserMethods {
	getPropertyNames(): IBaseExecution<Array<string>>;
}

/*********************************************
* IUserProfile
**********************************************/
export interface IUserProfile extends UserProfileCollections,UserProfileMethods,IBaseQuery<IUserProfileQuery> {

}

/*********************************************
* IUserProfileQuery
**********************************************/
export interface IUserProfileQuery extends UserProfileQuery,UserProfileMethods {

}

/*********************************************
* UserProfile
**********************************************/
export interface UserProfile extends UserProfileCollections, UserProfileMethods {
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
* UserProfileProps
**********************************************/
export interface UserProfileProps {
	FollowedContent(): IBaseExecution<SP.UserProfiles.FollowedContent>;
	PersonalSite(): IBaseExecution<SP.Site>;
}

/*********************************************
* UserProfileCollections
**********************************************/
export interface UserProfileCollections extends UserProfileProps {

}

/*********************************************
* UserProfileQuery
**********************************************/
export interface UserProfileQuery extends UserProfileProps {

}

/*********************************************
* UserProfileMethods
**********************************************/
export interface UserProfileMethods {
	createPersonalSite(lcid?: number): IBaseExecution<any>;
	createPersonalSiteEnque(isInteractive?: boolean): IBaseExecution<any>;
	createPersonalSiteFromWorkItem(workItemType?: any): IBaseExecution<number>;
	setMySiteFirstRunExperience(value?: number): IBaseExecution<any>;
	shareAllSocialData(shareAll?: boolean): IBaseExecution<any>;
}
