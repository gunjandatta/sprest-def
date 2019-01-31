import { IBaseExecution } from "../../";
import { SP } from "../../";
import { IBaseCollection } from "../../";

/*********************************************
* CrossGeoSync
**********************************************/
export interface CrossGeoSync {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* IFollowedContent
**********************************************/
export interface IFollowedContent extends FollowedContentProps,FollowedContentMethods,IBaseExecution<FollowedContent> {

}

/*********************************************
* FollowedContent
**********************************************/
export interface FollowedContent extends FollowedContentProps, FollowedContentMethods {
	FollowedDocumentsUrl?: string;
	FollowedSitesUrl?: string;
}

/*********************************************
* FollowedContentProps
**********************************************/
export interface FollowedContentProps {

}

/*********************************************
* FollowedContentMethods
**********************************************/
export interface FollowedContentMethods {
	findAndUpdateFollowedGroup<T=SP.UserProfiles.FollowedItem>(groupId?: any): IBaseExecution<T>;
	findAndUpdateFollowedItem<T=SP.UserProfiles.FollowedItem>(url?: string): IBaseExecution<T>;
	followItem<T=SP.UserProfiles.FollowResult>(item?: SP.UserProfiles.FollowedItem): IBaseExecution<T>;
	getFollowedStatus<T=number>(url?: string): IBaseExecution<T>;
	getGroups<T=Array<SP.UserProfiles.FollowedItem>>(rowLimit?: number): IBaseExecution<T>;
	getItem<T=SP.UserProfiles.FollowedItem>(url?: string): IBaseExecution<T>;
	getItems<T=Array<SP.UserProfiles.FollowedItem>>(options?: number, subtype?: number): IBaseExecution<T>;
	hasGroupMembershipChangedAndSyncChanges<T=boolean>(): IBaseExecution<T>;
	isFollowed<T=boolean>(url?: string): IBaseExecution<T>;
	refreshFollowedItem<T=SP.UserProfiles.FollowedItem>(item?: SP.UserProfiles.FollowedItem): IBaseExecution<T>;
	setItemPinState<T=SP.UserProfiles.FollowResult>(uri?: string, groupId?: any, pinState?: number): IBaseExecution<T>;
	stopFollowing<T=any>(url?: string): IBaseExecution<T>;
	updateFollowedGroupForUser<T=any>(contextUri?: string, groupId?: any, loginName?: string): IBaseExecution<T>;
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
* IPeopleManager
**********************************************/
export interface IPeopleManager extends PeopleManagerProps,PeopleManagerMethods,IBaseExecution<PeopleManager> {

}

/*********************************************
* PeopleManager
**********************************************/
export interface PeopleManager extends PeopleManagerProps, PeopleManagerMethods {
	EditProfileLink?: string;
	IsMyPeopleListPublic?: boolean;
}

/*********************************************
* PeopleManagerProps
**********************************************/
export interface PeopleManagerProps {

}

/*********************************************
* PeopleManagerMethods
**********************************************/
export interface PeopleManagerMethods {
	amIFollowedBy<T=boolean>(accountName?: string): IBaseExecution<T>;
	amIFollowing<T=boolean>(accountName?: string): IBaseExecution<T>;
	follow<T=any>(accountName?: string): IBaseExecution<T>;
	followTag<T=any>(value?: any): IBaseExecution<T>;
	getDefaultDocumentLibrary<T=string>(accountName?: string, createSiteIfNotExists?: boolean, siteCreationPriority?: number): IBaseExecution<T>;
	getFollowedTags<T=Array<string>>(cTagsToFetch?: number): IBaseExecution<T>;
	getFollowersFor<T=Array<SP.UserProfiles.PersonProperties>>(accountName?: string): IBaseExecution<T>;
	getMyFollowers<T=Array<SP.UserProfiles.PersonProperties>>(): IBaseExecution<T>;
	getMyProperties<T=SP.UserProfiles.PersonProperties>(): IBaseExecution<T>;
	getMySuggestions<T=Array<SP.UserProfiles.PersonProperties>>(): IBaseExecution<T>;
	getPeopleFollowedBy<T=Array<SP.UserProfiles.PersonProperties>>(accountName?: string): IBaseExecution<T>;
	getPeopleFollowedByMe<T=Array<SP.UserProfiles.PersonProperties>>(): IBaseExecution<T>;
	getPropertiesFor<T=SP.UserProfiles.PersonProperties>(accountName?: string): IBaseExecution<T>;
	getSPUserInformation<T=Array<SP.KeyValue>>(accountName?: string, siteId?: any): IBaseExecution<T>;
	getUserProfileProperties<T=Array<SP.KeyValue>>(accountName?: string): IBaseExecution<T>;
	getUserProfilePropertyFor<T=string>(accountName?: string, propertyName?: string): IBaseExecution<T>;
	hardDeleteUserProfile<T=boolean>(accountName?: string, userId?: any): IBaseExecution<T>;
	hideSuggestion<T=any>(accountName?: string): IBaseExecution<T>;
	removeSPUserInformation<T=Array<SP.KeyValue>>(accountName?: string, siteId?: any, redactName?: string): IBaseExecution<T>;
	setMultiValuedProfileProperty<T=any>(accountName?: string, propertyName?: string, propertyValues?: Array<string>): IBaseExecution<T>;
	setMyProfilePicture<T=any>(picture?: any): IBaseExecution<T>;
	setSingleValueProfileProperty<T=any>(accountName?: string, propertyName?: string, propertyValue?: string): IBaseExecution<T>;
	stopFollowing<T=any>(accountName?: string): IBaseExecution<T>;
	stopFollowingTag<T=any>(value?: any): IBaseExecution<T>;
}

/*********************************************
* IPersonalCache
**********************************************/
export interface IPersonalCache extends PersonalCacheProps,PersonalCacheMethods,IBaseExecution<PersonalCache> {

}

/*********************************************
* PersonalCache
**********************************************/
export interface PersonalCache extends PersonalCacheProps, PersonalCacheMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PersonalCacheProps
**********************************************/
export interface PersonalCacheProps {

}

/*********************************************
* PersonalCacheMethods
**********************************************/
export interface PersonalCacheMethods {
	deleteCacheItemsAsync<T=any>(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>): IBaseExecution<T>;
	loadUserProfile<T=any>(email?: string): IBaseExecution<T>;
	readCache<T=Array<SP.UserProfiles.PersonalCacheItem>>(folderPath?: string): IBaseExecution<T>;
	readCacheOrCreate<T=Array<SP.UserProfiles.PersonalCacheItem>>(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean): IBaseExecution<T>;
	readCacheOrCreateOrderById<T=Array<SP.UserProfiles.PersonalCacheItem>>(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean): IBaseExecution<T>;
	writeCache<T=any>(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>): IBaseExecution<T>;
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
* IProfileImageStore
**********************************************/
export interface IProfileImageStore extends ProfileImageStoreProps,ProfileImageStoreMethods,IBaseExecution<ProfileImageStore> {

}

/*********************************************
* ProfileImageStore
**********************************************/
export interface ProfileImageStore extends ProfileImageStoreProps, ProfileImageStoreMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProfileImageStoreProps
**********************************************/
export interface ProfileImageStoreProps {

}

/*********************************************
* ProfileImageStoreMethods
**********************************************/
export interface ProfileImageStoreMethods {
	saveUploadedFile<T=Array<string>>(profileType?: number, fileNamePrefix?: string, isFeedAttachment?: boolean, clientFilePath?: string, fileSize?: number, fileStream?: any): IBaseExecution<T>;
}

/*********************************************
* IProfileLoader
**********************************************/
export interface IProfileLoader extends ProfileLoaderProps,ProfileLoaderMethods,IBaseExecution<ProfileLoader> {

}

/*********************************************
* ProfileLoader
**********************************************/
export interface ProfileLoader extends ProfileLoaderProps, ProfileLoaderMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProfileLoaderProps
**********************************************/
export interface ProfileLoaderProps {

}

/*********************************************
* ProfileLoaderMethods
**********************************************/
export interface ProfileLoaderMethods {
	createPersonalSiteEnqueueBulk<T=Array<string>>(emailIDs?: Array<string>): IBaseExecution<T>;
	getUserProfile<T=SP.UserProfiles.UserProfile>(): IBaseExecution<T>;
}

/*********************************************
* IUserProfilePropertiesForUser
**********************************************/
export interface IUserProfilePropertiesForUser extends UserProfilePropertiesForUserProps,UserProfilePropertiesForUserMethods,IBaseExecution<UserProfilePropertiesForUser> {

}

/*********************************************
* UserProfilePropertiesForUser
**********************************************/
export interface UserProfilePropertiesForUser extends UserProfilePropertiesForUserProps, UserProfilePropertiesForUserMethods {
	AccountName?: string;
}

/*********************************************
* UserProfilePropertiesForUserProps
**********************************************/
export interface UserProfilePropertiesForUserProps {

}

/*********************************************
* UserProfilePropertiesForUserMethods
**********************************************/
export interface UserProfilePropertiesForUserMethods {
	getPropertyNames<T=Array<string>>(): IBaseExecution<T>;
}

/*********************************************
* IUserProfile
**********************************************/
export interface IUserProfile extends UserProfileProps,UserProfileMethods,IBaseExecution<UserProfile> {

}

/*********************************************
* UserProfile
**********************************************/
export interface UserProfile extends UserProfileProps, UserProfileMethods {
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
	FollowedContent<T=SP.UserProfiles.FollowedContent>(): IBaseExecution<T>;
	PersonalSite<T=SP.Site>(): IBaseExecution<T>;
}

/*********************************************
* UserProfileMethods
**********************************************/
export interface UserProfileMethods {
	createPersonalSite<T=any>(lcid?: number): IBaseExecution<T>;
	createPersonalSiteEnque<T=any>(isInteractive?: boolean): IBaseExecution<T>;
	createPersonalSiteFromWorkItem<T=number>(workItemType?: any): IBaseExecution<T>;
	setMySiteFirstRunExperience<T=any>(value?: number): IBaseExecution<T>;
	shareAllSocialData<T=any>(shareAll?: boolean): IBaseExecution<T>;
}
