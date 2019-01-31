import { IBaseExecution } from "../../";
import { IBaseCollection } from "../../";
import { SP } from "../../";

/*********************************************
* IDirectorySession
**********************************************/
export interface IDirectorySession extends DirectorySessionProps,DirectorySessionMethods,IBaseExecution<DirectorySession> {

}

/*********************************************
* DirectorySession
**********************************************/
export interface DirectorySession extends DirectorySessionProps, DirectorySessionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DirectorySessionProps
**********************************************/
export interface DirectorySessionProps {

}

/*********************************************
* DirectorySessionMethods
**********************************************/
export interface DirectorySessionMethods {
	getGraphUser<T=SP.Directory.User>(principalName?: string): IBaseExecution<T>;
	getSharePointDataForUser<T=SP.Directory.User>(userId?: any): IBaseExecution<T>;
	group<T=SP.Directory.Group>(groupId?: any, alias?: string): IBaseExecution<T>;
	joinGroup<T=number>(groupId?: any): IBaseExecution<T>;
	me<T=SP.Directory.User>(): IBaseExecution<T>;
	user<T=SP.Directory.User>(id?: any, principalName?: string): IBaseExecution<T>;
	validateGroupName<T=SP.Directory.GroupNameValidationResult>(displayName?: string, alias?: string): IBaseExecution<T>;
}

/*********************************************
* IGroup
**********************************************/
export interface IGroup extends GroupProps,GroupMethods,IBaseExecution<Group> {

}

/*********************************************
* Group
**********************************************/
export interface Group extends GroupProps, GroupMethods {
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
* GroupProps
**********************************************/
export interface GroupProps {
	members<T=SP.Directory.User>(): IBaseCollection<T>;
	owners<T=SP.Directory.User>(): IBaseCollection<T>;
}

/*********************************************
* GroupMethods
**********************************************/
export interface GroupMethods {
	delete<T=any>(): IBaseExecution<T>;
}

/*********************************************
* IUser
**********************************************/
export interface IUser extends UserProps,UserMethods,IBaseExecution<User> {

}

/*********************************************
* User
**********************************************/
export interface User extends UserProps, UserMethods {
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
* UserProps
**********************************************/
export interface UserProps {
	membership<T=SP.Directory.Group>(): IBaseCollection<T>;
	ownership<T=SP.Directory.Group>(): IBaseCollection<T>;
	rankedMembership<T=SP.Directory.Group>(): IBaseCollection<T>;
}

/*********************************************
* UserMethods
**********************************************/
export interface UserMethods {
	getUserLinks<T=Array<SP.Directory.Link>>(linkName?: string, groupType?: number): IBaseExecution<T>;
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
* IGroupAndUserStatus
**********************************************/
export interface IGroupAndUserStatus extends GroupAndUserStatusProps,GroupAndUserStatusMethods,IBaseExecution<GroupAndUserStatus> {

}

/*********************************************
* GroupAndUserStatus
**********************************************/
export interface GroupAndUserStatus extends GroupAndUserStatusProps, GroupAndUserStatusMethods {
	Status?: number;
}

/*********************************************
* GroupAndUserStatusProps
**********************************************/
export interface GroupAndUserStatusProps {
	Group<T=SP.Directory.Group>(): IBaseExecution<T>;
}

/*********************************************
* GroupAndUserStatusMethods
**********************************************/
export interface GroupAndUserStatusMethods {

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

/*********************************************
* IGroupCollection
**********************************************/
export interface IGroupCollection extends GroupCollectionProps,GroupCollectionMethods,IBaseExecution<GroupCollection> {

}

/*********************************************
* GroupCollection
**********************************************/
export interface GroupCollection extends GroupCollectionProps, GroupCollectionMethods {

}

/*********************************************
* GroupCollectionProps
**********************************************/
export interface GroupCollectionProps {

}

/*********************************************
* GroupCollectionMethods
**********************************************/
export interface GroupCollectionMethods {
	add<T=any>(objectId?: any): IBaseExecution<T>;
	remove<T=any>(objectId?: any): IBaseExecution<T>;
}

/*********************************************
* IUserCollection
**********************************************/
export interface IUserCollection extends UserCollectionProps,UserCollectionMethods,IBaseExecution<UserCollection> {

}

/*********************************************
* UserCollection
**********************************************/
export interface UserCollection extends UserCollectionProps, UserCollectionMethods {

}

/*********************************************
* UserCollectionProps
**********************************************/
export interface UserCollectionProps {

}

/*********************************************
* UserCollectionMethods
**********************************************/
export interface UserCollectionMethods {
	add<T=any>(objectId?: any, principalName?: string): IBaseExecution<T>;
	remove<T=any>(objectId?: any): IBaseExecution<T>;
}
