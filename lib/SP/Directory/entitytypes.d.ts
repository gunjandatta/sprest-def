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
	members<T=Array<SP.Directory.User>>(): T;
	owners<T=Array<SP.Directory.User>>(): T;
}

/*********************************************
* GroupQuery
**********************************************/
export interface GroupQuery {
	members<T=Array<SP.Directory.User>>(): T;
	owners<T=Array<SP.Directory.User>>(): T;
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
	membership<T=Array<SP.Directory.Group>>(): T;
	ownership<T=Array<SP.Directory.Group>>(): T;
	rankedMembership<T=Array<SP.Directory.Group>>(): T;
}

/*********************************************
* UserQuery
**********************************************/
export interface UserQuery {
	membership<T=Array<SP.Directory.Group>>(): T;
	ownership<T=Array<SP.Directory.Group>>(): T;
	rankedMembership<T=Array<SP.Directory.Group>>(): T;
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
	Group<T=SP.Directory.Group>(): T;
}

/*********************************************
* GroupAndUserStatusQuery
**********************************************/
export interface GroupAndUserStatusQuery {
	Group<T=SP.Directory.Group>(): T;
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
