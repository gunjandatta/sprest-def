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
export interface IDirectorySessionQuery extends DirectorySessionQuery,DirectorySessionMethods {

}

/*********************************************
* DirectorySession
**********************************************/
export interface DirectorySession extends DirectorySessionCollections, DirectorySessionMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* DirectorySessionProps
**********************************************/
export interface DirectorySessionProps {

}

/*********************************************
* DirectorySessionCollections
**********************************************/
export interface DirectorySessionCollections extends DirectorySessionProps {

}

/*********************************************
* DirectorySessionQuery
**********************************************/
export interface DirectorySessionQuery extends DirectorySessionProps {

}

/*********************************************
* DirectorySessionMethods
**********************************************/
export interface DirectorySessionMethods {
	getGraphUser(principalName?: string): IBaseExecution<SP.Directory.User>;
	getSharePointDataForUser(userId?: any): IBaseExecution<SP.Directory.User>;
	group(groupId?: any, alias?: string): IBaseExecution<SP.Directory.Group>;
	joinGroup(groupId?: any): IBaseExecution<number>;
	me(): IBaseExecution<SP.Directory.User>;
	user(id?: any, principalName?: string): IBaseExecution<SP.Directory.User>;
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
export interface IGroupQuery extends GroupQuery,GroupMethods {

}

/*********************************************
* Group
**********************************************/
export interface Group extends GroupCollections, GroupMethods {
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

}

/*********************************************
* GroupCollections
**********************************************/
export interface GroupCollections extends GroupProps {
	members(): IBaseCollection<SP.Directory.User>;
	owners(): IBaseCollection<SP.Directory.User>;
}

/*********************************************
* GroupQuery
**********************************************/
export interface GroupQuery extends GroupProps {
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
export interface IUserQuery extends UserQuery,UserMethods {

}

/*********************************************
* User
**********************************************/
export interface User extends UserCollections, UserMethods {
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

}

/*********************************************
* UserCollections
**********************************************/
export interface UserCollections extends UserProps {
	membership(): IBaseCollection<SP.Directory.Group>;
	ownership(): IBaseCollection<SP.Directory.Group>;
	rankedMembership(): IBaseCollection<SP.Directory.Group>;
}

/*********************************************
* UserQuery
**********************************************/
export interface UserQuery extends UserProps {
	membership: IBaseResults<SP.Directory.Group>;
	ownership: IBaseResults<SP.Directory.Group>;
	rankedMembership: IBaseResults<SP.Directory.Group>;
}

/*********************************************
* UserMethods
**********************************************/
export interface UserMethods {
	getUserLinks(linkName?: string, groupType?: number): IBaseExecution<Array<SP.Directory.Link>>;
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
export interface IGroupCollection extends GroupCollectionCollections,GroupCollectionMethods,IBaseQuery<IGroupCollectionQuery> {

}

/*********************************************
* IGroupCollectionQuery
**********************************************/
export interface IGroupCollectionQuery extends GroupCollectionQuery,GroupCollectionMethods {

}

/*********************************************
* GroupCollection
**********************************************/
export interface GroupCollection extends GroupCollectionCollections, GroupCollectionMethods {

}

/*********************************************
* GroupCollectionProps
**********************************************/
export interface GroupCollectionProps {

}

/*********************************************
* GroupCollectionCollections
**********************************************/
export interface GroupCollectionCollections extends GroupCollectionProps {

}

/*********************************************
* GroupCollectionQuery
**********************************************/
export interface GroupCollectionQuery extends GroupCollectionProps {

}

/*********************************************
* GroupCollectionMethods
**********************************************/
export interface GroupCollectionMethods {
	add(objectId?: any): IBaseExecution<any>;
	remove(objectId?: any): IBaseExecution<any>;
}

/*********************************************
* IUserCollection
**********************************************/
export interface IUserCollection extends UserCollectionCollections,UserCollectionMethods,IBaseQuery<IUserCollectionQuery> {

}

/*********************************************
* IUserCollectionQuery
**********************************************/
export interface IUserCollectionQuery extends UserCollectionQuery,UserCollectionMethods {

}

/*********************************************
* UserCollection
**********************************************/
export interface UserCollection extends UserCollectionCollections, UserCollectionMethods {

}

/*********************************************
* UserCollectionProps
**********************************************/
export interface UserCollectionProps {

}

/*********************************************
* UserCollectionCollections
**********************************************/
export interface UserCollectionCollections extends UserCollectionProps {

}

/*********************************************
* UserCollectionQuery
**********************************************/
export interface UserCollectionQuery extends UserCollectionProps {

}

/*********************************************
* UserCollectionMethods
**********************************************/
export interface UserCollectionMethods {
	add(objectId?: any, principalName?: string): IBaseExecution<any>;
	remove(objectId?: any): IBaseExecution<any>;
}
