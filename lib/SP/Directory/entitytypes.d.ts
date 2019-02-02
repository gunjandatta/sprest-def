import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../";
import { SP } from "../../";

/*********************************************
* IDirectorySession
**********************************************/
export interface IDirectorySession extends DirectorySessionCollections, DirectorySessionMethods, IBaseQuery<IDirectorySessionQuery> {

}

/*********************************************
* IDirectorySessionCollection
**********************************************/
export interface IDirectorySessionCollection extends IBaseResults<DirectorySession> {
	done?: (resolve: (value?: Array<DirectorySession>) => void) => void;
}

/*********************************************
* IDirectorySessionQueryCollection
**********************************************/
export interface IDirectorySessionQueryCollection extends IBaseResults<DirectorySessionOData> {
	done?: (resolve: (value?: Array<DirectorySessionOData>) => void) => void;
}

/*********************************************
* IDirectorySessionQuery
**********************************************/
export interface IDirectorySessionQuery extends DirectorySessionOData, DirectorySessionMethods {

}

/*********************************************
* DirectorySession
**********************************************/
export interface DirectorySession extends IBaseResult, DirectorySessionProps, DirectorySessionCollections, DirectorySessionMethods {

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
* DirectorySessionOData
**********************************************/
export interface DirectorySessionOData extends IBaseResult, DirectorySessionProps, DirectorySessionMethods {

}

/*********************************************
* DirectorySessionMethods
**********************************************/
export interface DirectorySessionMethods {
	getGraphUser(principalName?: string): IBaseQuery<SP.Directory.User, SP.Directory.UserOData> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	getSharePointDataForUser(userId?: any): IBaseQuery<SP.Directory.User, SP.Directory.UserOData> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	group(groupId?: any, alias?: string): IBaseQuery<SP.Directory.Group, SP.Directory.GroupOData> & SP.Directory.GroupCollections & SP.Directory.GroupMethods;
	joinGroup(groupId?: any): IBaseExecution<number>;
	me(): IBaseQuery<SP.Directory.User, SP.Directory.UserOData> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	user(id?: any, principalName?: string): IBaseQuery<SP.Directory.User, SP.Directory.UserOData> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	validateGroupName(displayName?: string, alias?: string): IBaseExecution<SP.Directory.GroupNameValidationResult>;
}

/*********************************************
* IGroup
**********************************************/
export interface IGroup extends GroupCollections, GroupMethods, IBaseQuery<IGroupQuery> {

}

/*********************************************
* IGroupCollection
**********************************************/
export interface IGroupCollection extends IBaseResults<Group>, GroupCollectionMethods {
	done?: (resolve: (value?: Array<Group>) => void) => void;
}

/*********************************************
* IGroupQueryCollection
**********************************************/
export interface IGroupQueryCollection extends IBaseResults<GroupOData>, GroupCollectionMethods {
	done?: (resolve: (value?: Array<GroupOData>) => void) => void;
}

/*********************************************
* IGroupQuery
**********************************************/
export interface IGroupQuery extends GroupOData, GroupMethods {

}

/*********************************************
* Group
**********************************************/
export interface Group extends IBaseResult, GroupProps, GroupCollections, GroupMethods {

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
	members(): IBaseCollection<SP.Directory.User, SP.Directory.UserOData, IBaseExecution & SP.Directory.UserCollectionMethods> & IBaseExecution & SP.Directory.UserCollectionMethods;
	members(id: string | number): IBaseQuery<SP.Directory.User, SP.Directory.UserOData> & SP.Directory.UserCollections & SP.Directory.UserMethods;
	owners(): IBaseCollection<SP.Directory.User, SP.Directory.UserOData, IBaseExecution & SP.Directory.UserCollectionMethods> & IBaseExecution & SP.Directory.UserCollectionMethods;
	owners(id: string | number): IBaseQuery<SP.Directory.User, SP.Directory.UserOData> & SP.Directory.UserCollections & SP.Directory.UserMethods;
}

/*********************************************
* GroupCollectionMethods
**********************************************/
export interface GroupCollectionMethods {
	add(objectId?: any): IBaseExecution<any>;
	remove(objectId?: any): IBaseExecution<any>;
}

/*********************************************
* GroupOData
**********************************************/
export interface GroupOData extends IBaseResult, GroupProps, GroupMethods {
	members: IBaseResults<SP.Directory.User> & SP.Directory.UserCollectionMethods;
	owners: IBaseResults<SP.Directory.User> & SP.Directory.UserCollectionMethods;
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
export interface IUser extends UserCollections, UserMethods, IBaseQuery<IUserQuery> {

}

/*********************************************
* IUserCollection
**********************************************/
export interface IUserCollection extends IBaseResults<User>, UserCollectionMethods {
	done?: (resolve: (value?: Array<User>) => void) => void;
}

/*********************************************
* IUserQueryCollection
**********************************************/
export interface IUserQueryCollection extends IBaseResults<UserOData>, UserCollectionMethods {
	done?: (resolve: (value?: Array<UserOData>) => void) => void;
}

/*********************************************
* IUserQuery
**********************************************/
export interface IUserQuery extends UserOData, UserMethods {

}

/*********************************************
* User
**********************************************/
export interface User extends IBaseResult, UserProps, UserCollections, UserMethods {

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
	membership(): IBaseCollection<SP.Directory.Group, SP.Directory.GroupOData, IBaseExecution & SP.Directory.GroupCollectionMethods> & IBaseExecution & SP.Directory.GroupCollectionMethods;
	membership(id: string | number): IBaseQuery<SP.Directory.Group, SP.Directory.GroupOData> & SP.Directory.GroupCollections & SP.Directory.GroupMethods;
	ownership(): IBaseCollection<SP.Directory.Group, SP.Directory.GroupOData, IBaseExecution & SP.Directory.GroupCollectionMethods> & IBaseExecution & SP.Directory.GroupCollectionMethods;
	ownership(id: string | number): IBaseQuery<SP.Directory.Group, SP.Directory.GroupOData> & SP.Directory.GroupCollections & SP.Directory.GroupMethods;
	rankedMembership(): IBaseCollection<SP.Directory.Group, SP.Directory.GroupOData, IBaseExecution & SP.Directory.GroupCollectionMethods> & IBaseExecution & SP.Directory.GroupCollectionMethods;
	rankedMembership(id: string | number): IBaseQuery<SP.Directory.Group, SP.Directory.GroupOData> & SP.Directory.GroupCollections & SP.Directory.GroupMethods;
}

/*********************************************
* UserCollectionMethods
**********************************************/
export interface UserCollectionMethods {
	add(objectId?: any, principalName?: string): IBaseExecution<any>;
	remove(objectId?: any): IBaseExecution<any>;
}

/*********************************************
* UserOData
**********************************************/
export interface UserOData extends IBaseResult, UserProps, UserMethods {
	membership: IBaseResults<SP.Directory.Group> & SP.Directory.GroupCollectionMethods;
	ownership: IBaseResults<SP.Directory.Group> & SP.Directory.GroupCollectionMethods;
	rankedMembership: IBaseResults<SP.Directory.Group> & SP.Directory.GroupCollectionMethods;
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
* GroupAndUserStatusOData
**********************************************/
export interface GroupAndUserStatusOData extends IBaseResult, GroupAndUserStatus {
	Group: SP.Directory.Group & SP.Directory.GroupCollections & SP.Directory.GroupCollectionMethods;
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
