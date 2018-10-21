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
* SocialFollowingManager
**********************************************/
export interface SocialFollowingManager {
	FollowedDocumentsUri?: string;
	FollowedSitesUri?: string;
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
* SocialRestFeedManager
**********************************************/
export interface SocialRestFeedManager {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SocialRestFeed
**********************************************/
export interface SocialRestFeed {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	SocialFeed?: SP.Social.SocialFeed;
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
* SocialRestThread
**********************************************/
export interface SocialRestThread {
	ID?: string;
	SocialThread?: SP.Social.SocialThread;
}
