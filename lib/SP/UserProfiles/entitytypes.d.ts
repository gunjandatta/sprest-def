import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";
import { SP } from "../../";

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
* IFollowedContentCollection
**********************************************/
export interface IFollowedContentCollection extends IBaseResults<FollowedContent> {
	done(resolve: (value?: Array<FollowedContent | any>) => void);
}

/*********************************************
* IFollowedContentQueryCollection
**********************************************/
export interface IFollowedContentQueryCollection extends IBaseResults<FollowedContentQuery> {
	done(resolve: (value?: Array<FollowedContentQuery | any>) => void);
}

/*********************************************
* IFollowedContentQuery
**********************************************/
export interface IFollowedContentQuery extends FollowedContentQuery, FollowedContentMethods {

}

/*********************************************
* FollowedContent
**********************************************/
export interface FollowedContent extends IBaseResult, FollowedContentProps, FollowedContentCollections, FollowedContentMethods {

}

/*********************************************
* FollowedContentProps
**********************************************/
export interface FollowedContentProps {
	FollowedDocumentsUrl?: string;
	FollowedSitesUrl?: string;
}

/*********************************************
* FollowedContentPropMethods
**********************************************/
export interface FollowedContentPropMethods {

}

/*********************************************
* FollowedContentCollections
**********************************************/
export interface FollowedContentCollections extends FollowedContentPropMethods {

}

/*********************************************
* FollowedContentQuery
**********************************************/
export interface FollowedContentQuery extends IBaseResult, FollowedContentProps, FollowedContentMethods {

}

/*********************************************
* FollowedContentMethods
**********************************************/
export interface FollowedContentMethods {
	findAndUpdateFollowedGroup(groupId?: any): IBaseExecution<SP.UserProfiles.FollowedItem>;
	findAndUpdateFollowedItem(url?: string): IBaseExecution<SP.UserProfiles.FollowedItem>;
	followItem(item?: SP.UserProfiles.FollowedItem): IBaseExecution<SP.UserProfiles.FollowResult>;
	getFollowedStatus(url?: string): IBaseExecution<number>;
	getGroups(rowLimit?: number): IBaseCollection<SP.UserProfiles.FollowedItem>;
	getItem(url?: string): IBaseExecution<SP.UserProfiles.FollowedItem>;
	getItems(options?: number, subtype?: number): IBaseCollection<SP.UserProfiles.FollowedItem>;
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
* IPeopleManagerCollection
**********************************************/
export interface IPeopleManagerCollection extends IBaseResults<PeopleManager> {
	done(resolve: (value?: Array<PeopleManager | any>) => void);
}

/*********************************************
* IPeopleManagerQueryCollection
**********************************************/
export interface IPeopleManagerQueryCollection extends IBaseResults<PeopleManagerQuery> {
	done(resolve: (value?: Array<PeopleManagerQuery | any>) => void);
}

/*********************************************
* IPeopleManagerQuery
**********************************************/
export interface IPeopleManagerQuery extends PeopleManagerQuery, PeopleManagerMethods {

}

/*********************************************
* PeopleManager
**********************************************/
export interface PeopleManager extends IBaseResult, PeopleManagerProps, PeopleManagerCollections, PeopleManagerMethods {

}

/*********************************************
* PeopleManagerProps
**********************************************/
export interface PeopleManagerProps {
	EditProfileLink?: string;
	IsMyPeopleListPublic?: boolean;
}

/*********************************************
* PeopleManagerPropMethods
**********************************************/
export interface PeopleManagerPropMethods {

}

/*********************************************
* PeopleManagerCollections
**********************************************/
export interface PeopleManagerCollections extends PeopleManagerPropMethods {

}

/*********************************************
* PeopleManagerQuery
**********************************************/
export interface PeopleManagerQuery extends IBaseResult, PeopleManagerProps, PeopleManagerMethods {

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
	getFollowedTags(cTagsToFetch?: number): IBaseCollection<string>;
	getFollowersFor(accountName?: string): IBaseCollection<SP.UserProfiles.PersonProperties>;
	getMyFollowers(): IBaseCollection<SP.UserProfiles.PersonProperties>;
	getMyProperties(): IBaseExecution<SP.UserProfiles.PersonProperties>;
	getMySuggestions(): IBaseCollection<SP.UserProfiles.PersonProperties>;
	getPeopleFollowedBy(accountName?: string): IBaseCollection<SP.UserProfiles.PersonProperties>;
	getPeopleFollowedByMe(): IBaseCollection<SP.UserProfiles.PersonProperties>;
	getPropertiesFor(accountName?: string): IBaseExecution<SP.UserProfiles.PersonProperties>;
	getSPUserInformation(accountName?: string, siteId?: any): IBaseCollection<SP.KeyValue>;
	getUserProfileProperties(accountName?: string): IBaseCollection<SP.KeyValue>;
	getUserProfilePropertyFor(accountName?: string, propertyName?: string): IBaseExecution<string>;
	hardDeleteUserProfile(accountName?: string, userId?: any): IBaseExecution<boolean>;
	hideSuggestion(accountName?: string): IBaseExecution<any>;
	removeSPUserInformation(accountName?: string, siteId?: any, redactName?: string): IBaseCollection<SP.KeyValue>;
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
* IPersonalCacheCollection
**********************************************/
export interface IPersonalCacheCollection extends IBaseResults<PersonalCache> {
	done(resolve: (value?: Array<PersonalCache | any>) => void);
}

/*********************************************
* IPersonalCacheQueryCollection
**********************************************/
export interface IPersonalCacheQueryCollection extends IBaseResults<PersonalCacheQuery> {
	done(resolve: (value?: Array<PersonalCacheQuery | any>) => void);
}

/*********************************************
* IPersonalCacheQuery
**********************************************/
export interface IPersonalCacheQuery extends PersonalCacheQuery, PersonalCacheMethods {

}

/*********************************************
* PersonalCache
**********************************************/
export interface PersonalCache extends IBaseResult, PersonalCacheProps, PersonalCacheCollections, PersonalCacheMethods {

}

/*********************************************
* PersonalCacheProps
**********************************************/
export interface PersonalCacheProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* PersonalCachePropMethods
**********************************************/
export interface PersonalCachePropMethods {

}

/*********************************************
* PersonalCacheCollections
**********************************************/
export interface PersonalCacheCollections extends PersonalCachePropMethods {

}

/*********************************************
* PersonalCacheQuery
**********************************************/
export interface PersonalCacheQuery extends IBaseResult, PersonalCacheProps, PersonalCacheMethods {

}

/*********************************************
* PersonalCacheMethods
**********************************************/
export interface PersonalCacheMethods {
	deleteCacheItemsAsync(cacheItems?: Array<SP.UserProfiles.PersonalCacheItem>): IBaseExecution<any>;
	loadUserProfile(email?: string): IBaseExecution<any>;
	readCache(folderPath?: string): IBaseCollection<SP.UserProfiles.PersonalCacheItem>;
	readCacheOrCreate(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean): IBaseCollection<SP.UserProfiles.PersonalCacheItem>;
	readCacheOrCreateOrderById(folderPath?: SP.ResourcePath, requiredCacheKeys?: Array<string>, createIfMissing?: boolean): IBaseCollection<SP.UserProfiles.PersonalCacheItem>;
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
* IProfileImageStoreCollection
**********************************************/
export interface IProfileImageStoreCollection extends IBaseResults<ProfileImageStore> {
	done(resolve: (value?: Array<ProfileImageStore | any>) => void);
}

/*********************************************
* IProfileImageStoreQueryCollection
**********************************************/
export interface IProfileImageStoreQueryCollection extends IBaseResults<ProfileImageStoreQuery> {
	done(resolve: (value?: Array<ProfileImageStoreQuery | any>) => void);
}

/*********************************************
* IProfileImageStoreQuery
**********************************************/
export interface IProfileImageStoreQuery extends ProfileImageStoreQuery, ProfileImageStoreMethods {

}

/*********************************************
* ProfileImageStore
**********************************************/
export interface ProfileImageStore extends IBaseResult, ProfileImageStoreProps, ProfileImageStoreCollections, ProfileImageStoreMethods {

}

/*********************************************
* ProfileImageStoreProps
**********************************************/
export interface ProfileImageStoreProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProfileImageStorePropMethods
**********************************************/
export interface ProfileImageStorePropMethods {

}

/*********************************************
* ProfileImageStoreCollections
**********************************************/
export interface ProfileImageStoreCollections extends ProfileImageStorePropMethods {

}

/*********************************************
* ProfileImageStoreQuery
**********************************************/
export interface ProfileImageStoreQuery extends IBaseResult, ProfileImageStoreProps, ProfileImageStoreMethods {

}

/*********************************************
* ProfileImageStoreMethods
**********************************************/
export interface ProfileImageStoreMethods {
	saveUploadedFile(profileType?: number, fileNamePrefix?: string, isFeedAttachment?: boolean, clientFilePath?: string, fileSize?: number, fileStream?: any): IBaseCollection<string>;
}

/*********************************************
* IProfileLoader
**********************************************/
export interface IProfileLoader extends ProfileLoaderCollections,ProfileLoaderMethods,IBaseQuery<IProfileLoaderQuery> {

}

/*********************************************
* IProfileLoaderCollection
**********************************************/
export interface IProfileLoaderCollection extends IBaseResults<ProfileLoader> {
	done(resolve: (value?: Array<ProfileLoader | any>) => void);
}

/*********************************************
* IProfileLoaderQueryCollection
**********************************************/
export interface IProfileLoaderQueryCollection extends IBaseResults<ProfileLoaderQuery> {
	done(resolve: (value?: Array<ProfileLoaderQuery | any>) => void);
}

/*********************************************
* IProfileLoaderQuery
**********************************************/
export interface IProfileLoaderQuery extends ProfileLoaderQuery, ProfileLoaderMethods {

}

/*********************************************
* ProfileLoader
**********************************************/
export interface ProfileLoader extends IBaseResult, ProfileLoaderProps, ProfileLoaderCollections, ProfileLoaderMethods {

}

/*********************************************
* ProfileLoaderProps
**********************************************/
export interface ProfileLoaderProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ProfileLoaderPropMethods
**********************************************/
export interface ProfileLoaderPropMethods {

}

/*********************************************
* ProfileLoaderCollections
**********************************************/
export interface ProfileLoaderCollections extends ProfileLoaderPropMethods {

}

/*********************************************
* ProfileLoaderQuery
**********************************************/
export interface ProfileLoaderQuery extends IBaseResult, ProfileLoaderProps, ProfileLoaderMethods {

}

/*********************************************
* ProfileLoaderMethods
**********************************************/
export interface ProfileLoaderMethods {
	createPersonalSiteEnqueueBulk(emailIDs?: Array<string>): IBaseCollection<string>;
	getUserProfile(): IBaseQuery<SP.UserProfiles.UserProfile, SP.UserProfiles.UserProfileQuery> & SP.UserProfiles.UserProfileCollections & SP.UserProfiles.UserProfileMethods;
}

/*********************************************
* IUserProfilePropertiesForUser
**********************************************/
export interface IUserProfilePropertiesForUser extends UserProfilePropertiesForUserCollections,UserProfilePropertiesForUserMethods,IBaseQuery<IUserProfilePropertiesForUserQuery> {

}

/*********************************************
* IUserProfilePropertiesForUserCollection
**********************************************/
export interface IUserProfilePropertiesForUserCollection extends IBaseResults<UserProfilePropertiesForUser> {
	done(resolve: (value?: Array<UserProfilePropertiesForUser | any>) => void);
}

/*********************************************
* IUserProfilePropertiesForUserQueryCollection
**********************************************/
export interface IUserProfilePropertiesForUserQueryCollection extends IBaseResults<UserProfilePropertiesForUserQuery> {
	done(resolve: (value?: Array<UserProfilePropertiesForUserQuery | any>) => void);
}

/*********************************************
* IUserProfilePropertiesForUserQuery
**********************************************/
export interface IUserProfilePropertiesForUserQuery extends UserProfilePropertiesForUserQuery, UserProfilePropertiesForUserMethods {

}

/*********************************************
* UserProfilePropertiesForUser
**********************************************/
export interface UserProfilePropertiesForUser extends IBaseResult, UserProfilePropertiesForUserProps, UserProfilePropertiesForUserCollections, UserProfilePropertiesForUserMethods {

}

/*********************************************
* UserProfilePropertiesForUserProps
**********************************************/
export interface UserProfilePropertiesForUserProps {
	AccountName?: string;
}

/*********************************************
* UserProfilePropertiesForUserPropMethods
**********************************************/
export interface UserProfilePropertiesForUserPropMethods {

}

/*********************************************
* UserProfilePropertiesForUserCollections
**********************************************/
export interface UserProfilePropertiesForUserCollections extends UserProfilePropertiesForUserPropMethods {

}

/*********************************************
* UserProfilePropertiesForUserQuery
**********************************************/
export interface UserProfilePropertiesForUserQuery extends IBaseResult, UserProfilePropertiesForUserProps, UserProfilePropertiesForUserMethods {

}

/*********************************************
* UserProfilePropertiesForUserMethods
**********************************************/
export interface UserProfilePropertiesForUserMethods {
	getPropertyNames(): IBaseCollection<string>;
}

/*********************************************
* IUserProfile
**********************************************/
export interface IUserProfile extends UserProfileCollections,UserProfileMethods,IBaseQuery<IUserProfileQuery> {

}

/*********************************************
* IUserProfileCollection
**********************************************/
export interface IUserProfileCollection extends IBaseResults<UserProfile> {
	done(resolve: (value?: Array<UserProfile | any>) => void);
}

/*********************************************
* IUserProfileQueryCollection
**********************************************/
export interface IUserProfileQueryCollection extends IBaseResults<UserProfileQuery> {
	done(resolve: (value?: Array<UserProfileQuery | any>) => void);
}

/*********************************************
* IUserProfileQuery
**********************************************/
export interface IUserProfileQuery extends UserProfileQuery, UserProfileMethods {

}

/*********************************************
* UserProfile
**********************************************/
export interface UserProfile extends IBaseResult, UserProfileProps, UserProfileCollections, UserProfileMethods {

}

/*********************************************
* UserProfileProps
**********************************************/
export interface UserProfileProps {
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
* UserProfilePropMethods
**********************************************/
export interface UserProfilePropMethods {
	FollowedContent(): IBaseExecution<SP.UserProfiles.FollowedContent> & SP.UserProfiles.FollowedContentCollections & SP.UserProfiles.FollowedContentMethods;
	PersonalSite(): IBaseQuery<SP.Site, SP.SiteQuery> & SP.SiteCollections & SP.SiteMethods;
}

/*********************************************
* UserProfileCollections
**********************************************/
export interface UserProfileCollections extends UserProfilePropMethods {

}

/*********************************************
* UserProfileQuery
**********************************************/
export interface UserProfileQuery extends IBaseResult, UserProfileProps, UserProfileMethods {
	FollowedContent: SP.UserProfiles.FollowedContent & SP.UserProfiles.FollowedContentCollections;
	PersonalSite: SP.Site & SP.SiteCollections;
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
