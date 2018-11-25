import { SP } from "../../";

/*********************************************
* DirectorySession
**********************************************/
export interface DirectorySession {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* Group
**********************************************/
export interface Group {
	alias?: string;
	allowToAddGuests?: boolean;
	calendarUrl?: string;
	classification?: string;
	description?: string;
	displayName?: string;
	documentsUrl?: string;
	editGroupUrl?: string;
	id?: any;
	inboxUrl?: string;
	isDynamic?: boolean;
	isPublic?: boolean;
	mail?: string;
	notebookUrl?: string;
	peopleUrl?: string;
	pictureUrl?: string;
	principalName?: string;
	siteUrl?: string;
	teamsResources?: Array<SP.KeyValue>;
	yammerResources?: Array<SP.KeyValue>;
}

/*********************************************
* GroupCollections
**********************************************/
export interface GroupCollections {
	members?: () => Array<SP.Directory.User>;
	owners?: () => Array<SP.Directory.User>;
}

/*********************************************
* GroupQuery
**********************************************/
export interface GroupQuery {
	members?: Array<SP.Directory.User>;
	owners?: Array<SP.Directory.User>;
}

/*********************************************
* User
**********************************************/
export interface User {
	aboutMe?: string;
	accountEnabled?: boolean;
	alias?: string;
	birthday?: any;
	displayName?: string;
	hireDate?: any;
	id?: any;
	interests?: Array<string>;
	mail?: string;
	mySite?: string;
	netId?: string;
	officeGraphEnabled?: boolean;
	pastProjects?: Array<string>;
	pointPublishingPersonalSiteUrl?: string;
	preferredName?: string;
	principalName?: string;
	responsibilities?: Array<string>;
	schools?: Array<string>;
	sharePointContentBarViewsTeachingBubble?: boolean;
	sharePointConversationsLinkFirstRun?: boolean;
	sharePointFiltersPaneFirstRun?: boolean;
	sharePointFollowedDocumentsMigrated?: boolean;
	sharePointFollowedSitesMigrated?: boolean;
	sharePointHomeCreateNewsTeachingBubble?: boolean;
	sharePointHomeFirstRun?: boolean;
	sharePointHomeMobileUpsell?: boolean;
	sharePointLibrariesFirstRun?: boolean;
	sharePointListsFirstRun?: boolean;
	sharePointNewsDigestTeachingBubble?: boolean;
	sharePointNewsDigestTeachingBubbleHomePage?: boolean;
	sharePointOneDriveBusinessFirstRun?: boolean;
	sharePointPageAuthoringFirstRun?: boolean;
	sharePointPictureUrl?: string;
	sharePointProfileId?: any;
	sharePointSaveForLaterTeachingBubble?: boolean;
	sharePointTeamsTeachingBubble?: boolean;
	skills?: Array<string>;
	tags?: Array<string>;
	tenantInstanceId?: any;
	userType?: string;
}

/*********************************************
* UserCollections
**********************************************/
export interface UserCollections {
	membership?: () => Array<SP.Directory.Group>;
	ownership?: () => Array<SP.Directory.Group>;
	rankedMembership?: () => Array<SP.Directory.Group>;
}

/*********************************************
* UserQuery
**********************************************/
export interface UserQuery {
	membership?: Array<SP.Directory.Group>;
	ownership?: Array<SP.Directory.Group>;
	rankedMembership?: Array<SP.Directory.Group>;
}

/*********************************************
* Link
**********************************************/
export interface Link {
	id?: any;
	objectSubtype?: number;
	objectType?: string;
}

/*********************************************
* GroupAndUserStatus
**********************************************/
export interface GroupAndUserStatus {
	Status?: number;
}

/*********************************************
* GroupAndUserStatusCollections
**********************************************/
export interface GroupAndUserStatusCollections {
	Group?: () => SP.Directory.Group;
}

/*********************************************
* GroupAndUserStatusQuery
**********************************************/
export interface GroupAndUserStatusQuery {
	Group?: SP.Directory.Group;
}

/*********************************************
* MembershipResult
**********************************************/
export interface MembershipResult {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	GroupsList?: Array<any>;
}

/*********************************************
* MembersInfo
**********************************************/
export interface MembersInfo {
	MemberNames?: Array<string>;
	TotalCount?: number;
}

/*********************************************
* MyGroupsResult
**********************************************/
export interface MyGroupsResult {
	HasNext?: boolean;
	HasPrev?: boolean;
}
