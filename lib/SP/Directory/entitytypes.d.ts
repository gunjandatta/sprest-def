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
	members?: () => SP.Directory.SP_Directory_Group_members_SP_Directory_User_membersPartner;
	owners?: () => SP.Directory.SP_Directory_Group_owners_SP_Directory_User_ownersPartner;
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
* User
**********************************************/
export interface User {
	membership?: () => SP.Directory.SP_Directory_User_membership_SP_Directory_Group_membershipPartner;
	ownership?: () => SP.Directory.SP_Directory_User_ownership_SP_Directory_Group_ownershipPartner;
	rankedMembership?: () => SP.Directory.SP_Directory_User_rankedMembership_SP_Directory_Group_rankedMembershipPartner;
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
	Group?: () => SP.Directory.SP_Directory_GroupAndUserStatus_Group_SP_Directory_Group_GroupPartner;
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
