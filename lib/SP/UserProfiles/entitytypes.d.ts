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
* PersonalCache
**********************************************/
export interface PersonalCache {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
* ProfileLoader
**********************************************/
export interface ProfileLoader {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UserProfilePropertiesForUser
**********************************************/
export interface UserProfilePropertiesForUser {
	AccountName?: string;
}

/*********************************************
* UserProfile
**********************************************/
export interface UserProfile {
	FollowedContent?: () => SP.UserProfiles.SP_UserProfiles_UserProfile_FollowedContent_SP_UserProfiles_FollowedContent_FollowedContentPartner;
	PersonalSite?: () => SP.SP_UserProfiles_UserProfile_PersonalSite_SP_Site_PersonalSitePartner;
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
