import { SP } from "../../";

/*********************************************
* DirectorySession
**********************************************/
export interface DirectorySession {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DirectorySessionMethods<T = any>
**********************************************/
export interface DirectorySessionMethods<T = any> {
	getGraphUser(principalName?: string): T;
	getSharePointDataForUser(userId?: any): T;
	group(groupId?: any, alias?: string): T;
	joinGroup(groupId?: any): T;
	me(): T;
	user(id?: any, principalName?: string): T;
	validateGroupName(displayName?: string, alias?: string): T;
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
* GroupCollections<T = any>
**********************************************/
export interface GroupCollections<T = any> {
	members(): T;
	owners(): T;
}

/*********************************************
* GroupQuery
**********************************************/
export interface GroupQuery {
	members(): T;
	owners(): T;
}

/*********************************************
* GroupMethods<T = any>
**********************************************/
export interface GroupMethods<T = any> {
	delete(): T;
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
* UserCollections<T = any>
**********************************************/
export interface UserCollections<T = any> {
	membership(): T;
	ownership(): T;
	rankedMembership(): T;
}

/*********************************************
* UserQuery
**********************************************/
export interface UserQuery {
	membership(): T;
	ownership(): T;
	rankedMembership(): T;
}

/*********************************************
* UserMethods<T = any>
**********************************************/
export interface UserMethods<T = any> {
	getUserLinks(linkName?: string, groupType?: number): T;
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
* GroupAndUserStatusCollections<T = any>
**********************************************/
export interface GroupAndUserStatusCollections<T = any> {
	Group(): T;
}

/*********************************************
* GroupAndUserStatusQuery
**********************************************/
export interface GroupAndUserStatusQuery {
	Group(): T;
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
