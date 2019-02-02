import { IBaseExecution } from "../../";
import { IBaseQuery } from "../../";
import { IBaseCollection } from "../../";
import { IBaseResults } from "../../";
import { SP } from "../../";

/*********************************************
* IDirectorySession
**********************************************/
export interface IDirectorySession extends DirectorySessionCollections,DirectorySessionMethods,IBaseQuery<IDirectorySessionQuery> {

}

/*********************************************
* IDirectorySessionQuery
**********************************************/
export interface IDirectorySessionQuery extends DirectorySessionQuery, DirectorySessionMethods {

}

/*********************************************
* DirectorySession
**********************************************/
export interface DirectorySession extends DirectorySessionProps, DirectorySessionCollections, DirectorySessionMethods {

}

/*********************************************
* DirectorySessionProps
**********************************************/
export interface DirectorySessionProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DirectorySessionPropMethods
**********************************************/
export interface DirectorySessionPropMethods {

}

/*********************************************
* DirectorySessionCollections
**********************************************/
export interface DirectorySessionCollections extends DirectorySessionPropMethods {

}

/*********************************************
* DirectorySessionQuery
**********************************************/
export interface DirectorySessionQuery extends DirectorySessionProps, DirectorySessionMethods {

}

/*********************************************
* DirectorySessionMethods
**********************************************/
export interface DirectorySessionMethods {
	getGraphUser(principalName?: string): IBaseQuery<SP.Directory.User, SP.Directory.UserQuery> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	getSharePointDataForUser(userId?: any): IBaseQuery<SP.Directory.User, SP.Directory.UserQuery> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	group(groupId?: any, alias?: string): IBaseQuery<SP.Directory.Group, SP.Directory.GroupQuery> & SP.Directory.GroupCollections & SP.Directory.GroupMethods;
	joinGroup(groupId?: any): IBaseExecution<number>;
	me(): IBaseQuery<SP.Directory.User, SP.Directory.UserQuery> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	user(id?: any, principalName?: string): IBaseQuery<SP.Directory.User, SP.Directory.UserQuery> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	validateGroupName(displayName?: string, alias?: string): IBaseExecution<SP.Directory.GroupNameValidationResult>;
}

/*********************************************
* IGroup
**********************************************/
export interface IGroup extends GroupCollections,GroupMethods,IBaseQuery<IGroupQuery> {

}

/*********************************************
* IGroupQuery
**********************************************/
export interface IGroupQuery extends GroupQuery, GroupMethods {

}

/*********************************************
* Group
**********************************************/
export interface Group extends GroupProps, GroupCollections, GroupMethods {

}

/*********************************************
* GroupProps
**********************************************/
export interface GroupProps {
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
* GroupPropMethods
**********************************************/
export interface GroupPropMethods {

}

/*********************************************
* GroupCollections
**********************************************/
export interface GroupCollections extends GroupPropMethods {
	members(): IBaseCollection<SP.Directory.User, SP.Directory.UserQuery> & SP.Directory.UserCollectionMethods;
	members(id: string | number): IBaseQuery<SP.Directory.User, SP.Directory.UserQuery> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	owners(): IBaseCollection<SP.Directory.User, SP.Directory.UserQuery> & SP.Directory.UserCollectionMethods;
	owners(id: string | number): IBaseQuery<SP.Directory.User, SP.Directory.UserQuery> & SP.Directory.UserCollections & SP.Directory.UserMethods;
}

/*********************************************
* GroupCollectionMethods
**********************************************/
export interface GroupCollectionMethods {
	add(objectId?: any): IBaseExecution<any>;
	remove(objectId?: any): IBaseExecution<any>;
}

/*********************************************
* GroupQuery
**********************************************/
export interface GroupQuery extends GroupProps, GroupMethods {
	members: IBaseResults<SP.Directory.User>;
	owners: IBaseResults<SP.Directory.User>;
}

/*********************************************
* GroupMethods
**********************************************/
export interface GroupMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* IUser
**********************************************/
export interface IUser extends UserCollections,UserMethods,IBaseQuery<IUserQuery> {

}

/*********************************************
* IUserQuery
**********************************************/
export interface IUserQuery extends UserQuery, UserMethods {

}

/*********************************************
* User
**********************************************/
export interface User extends UserProps, UserCollections, UserMethods {

}

/*********************************************
* UserProps
**********************************************/
export interface UserProps {
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
* UserPropMethods
**********************************************/
export interface UserPropMethods {

}

/*********************************************
* UserCollections
**********************************************/
export interface UserCollections extends UserPropMethods {
	membership(): IBaseCollection<SP.Directory.Group, SP.Directory.GroupQuery> & SP.Directory.GroupCollectionMethods;
	membership(id: string | number): IBaseQuery<SP.Directory.Group, SP.Directory.GroupQuery> & SP.Directory.GroupCollections & SP.Directory.GroupMethods;
	ownership(): IBaseCollection<SP.Directory.Group, SP.Directory.GroupQuery> & SP.Directory.GroupCollectionMethods;
	ownership(id: string | number): IBaseQuery<SP.Directory.Group, SP.Directory.GroupQuery> & SP.Directory.GroupCollections & SP.Directory.GroupMethods;
	rankedMembership(): IBaseCollection<SP.Directory.Group, SP.Directory.GroupQuery> & SP.Directory.GroupCollectionMethods;
	rankedMembership(id: string | number): IBaseQuery<SP.Directory.Group, SP.Directory.GroupQuery> & SP.Directory.GroupCollections & SP.Directory.GroupMethods;
}

/*********************************************
* UserCollectionMethods
**********************************************/
export interface UserCollectionMethods {
	add(objectId?: any, principalName?: string): IBaseExecution<any>;
	remove(objectId?: any): IBaseExecution<any>;
}

/*********************************************
* UserQuery
**********************************************/
export interface UserQuery extends UserProps, UserMethods {
	membership: IBaseResults<SP.Directory.Group>;
	ownership: IBaseResults<SP.Directory.Group>;
	rankedMembership: IBaseResults<SP.Directory.Group>;
}

/*********************************************
* UserMethods
**********************************************/
export interface UserMethods {
	getUserLinks(linkName?: string, groupType?: number): IBaseCollection<SP.Directory.Link>;
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
* LinkCollections
**********************************************/
export interface LinkCollections {

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

}

/*********************************************
* GroupAndUserStatusQuery
**********************************************/
export interface GroupAndUserStatusQuery extends GroupAndUserStatus {
	Group: SP.Directory.Group & SP.Directory.GroupCollections;
}

/*********************************************
* MembershipResult
**********************************************/
export interface MembershipResult {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	GroupsList?: Array<any>;
}

/*********************************************
* MembershipResultCollections
**********************************************/
export interface MembershipResultCollections {

}

/*********************************************
* MembersInfo
**********************************************/
export interface MembersInfo {
	MemberNames?: Array<string>;
	TotalCount?: number;
}

/*********************************************
* MembersInfoCollections
**********************************************/
export interface MembersInfoCollections {

}

/*********************************************
* MyGroupsResult
**********************************************/
export interface MyGroupsResult {
	HasNext?: boolean;
	HasPrev?: boolean;
}

/*********************************************
* MyGroupsResultCollections
**********************************************/
export interface MyGroupsResultCollections {

}
