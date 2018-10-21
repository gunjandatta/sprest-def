import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* ActionFacet
**********************************************/
export interface ActionFacet {
	checkin?: Microsoft.SharePoint.Activities.CheckinFacet;
	checkout?: Microsoft.SharePoint.Activities.CheckoutFacet;
	comment?: Microsoft.SharePoint.Activities.GetCommentFacet;
	create?: Microsoft.SharePoint.Activities.CreateFacet;
	delete?: Microsoft.SharePoint.Activities.DeleteFacet;
	discardCheckout?: Microsoft.SharePoint.Activities.DiscardCheckoutFacet;
	edit?: Microsoft.SharePoint.Activities.EditFacet;
	mention?: Microsoft.SharePoint.Activities.GetMentionFacet;
	move?: Microsoft.SharePoint.Activities.MoveFacet;
	pointInTimeRestore?: Microsoft.SharePoint.Activities.PointInTimeRestoreFacet;
	rename?: Microsoft.SharePoint.Activities.RenameFacet;
	restore?: Microsoft.SharePoint.Activities.RestoreFacet;
	share?: Microsoft.SharePoint.Activities.SharingFacet;
	version?: Microsoft.SharePoint.Activities.VersionFacet;
}

/*********************************************
* CheckinFacet
**********************************************/
export interface CheckinFacet {

}

/*********************************************
* CheckoutFacet
**********************************************/
export interface CheckoutFacet {

}

/*********************************************
* GetCommentFacet
**********************************************/
export interface GetCommentFacet {
	commentId?: string;
	isReply?: boolean;
	parentAuthor?: Microsoft.SharePoint.Activities.ActivityIdentity;
	parentCommentId?: string;
	participants?: Array<Microsoft.SharePoint.Activities.ActivityIdentity>;
}

/*********************************************
* ActivityIdentity
**********************************************/
export interface ActivityIdentity {
	email?: string;
	group?: Microsoft.SharePoint.Activities.ActivityIdentityItem;
	name?: string;
	user?: Microsoft.SharePoint.Activities.ActivityIdentityItem;
	userPrincipalName?: string;
}

/*********************************************
* ActivityIdentityItem
**********************************************/
export interface ActivityIdentityItem {
	displayName?: string;
	email?: string;
	userPrincipalName?: string;
}

/*********************************************
* CreateFacet
**********************************************/
export interface CreateFacet {

}

/*********************************************
* DeleteFacet
**********************************************/
export interface DeleteFacet {
	name?: string;
}

/*********************************************
* DiscardCheckoutFacet
**********************************************/
export interface DiscardCheckoutFacet {

}

/*********************************************
* EditFacet
**********************************************/
export interface EditFacet {

}

/*********************************************
* GetMentionFacet
**********************************************/
export interface GetMentionFacet {
	mentionees?: Array<Microsoft.SharePoint.Activities.ActivityIdentity>;
}

/*********************************************
* MoveFacet
**********************************************/
export interface MoveFacet {
	from?: SP.ResourcePath;
	to?: SP.ResourcePath;
}

/*********************************************
* PointInTimeRestoreFacet
**********************************************/
export interface PointInTimeRestoreFacet {
	restoreToDateTime?: string;
}

/*********************************************
* RenameFacet
**********************************************/
export interface RenameFacet {
	oldName?: string;
}

/*********************************************
* RestoreFacet
**********************************************/
export interface RestoreFacet {

}

/*********************************************
* SharingFacet
**********************************************/
export interface SharingFacet {
	recipients?: Array<Microsoft.SharePoint.Activities.ActivityIdentity>;
	sharingType?: string;
}

/*********************************************
* VersionFacet
**********************************************/
export interface VersionFacet {
	newVersion?: string;
}

/*********************************************
* ActivityClientIdentity
**********************************************/
export interface ActivityClientIdentity {
	email?: string;
	name?: string;
	id?: string;
	provider?: string;
}

/*********************************************
* ActivityTimeFacet
**********************************************/
export interface ActivityTimeFacet {
	lastRecordedTime?: string;
	observedTime?: string;
	recordedTime?: string;
}

/*********************************************
* CoalescedFacet
**********************************************/
export interface CoalescedFacet {

}

/*********************************************
* CommentFacet
**********************************************/
export interface CommentFacet {
	commentText?: string;
	parentAuthor?: Microsoft.SharePoint.Activities.ActivityClientIdentity;
	participants?: Array<Microsoft.SharePoint.Activities.ActivityClientIdentity>;
}

/*********************************************
* InDocFacet
**********************************************/
export interface InDocFacet {
	contentId?: string;
	navigationId?: string;
}

/*********************************************
* MentionFacet
**********************************************/
export interface MentionFacet {
	commentContentId?: string;
	mentionees?: Array<Microsoft.SharePoint.Activities.ActivityClientIdentity>;
}

/*********************************************
* ResourceFacet
**********************************************/
export interface ResourceFacet {
	contentTypeId?: string;
	fileSystemObjectType?: number;
	fileType?: string;
	itemId?: string;
	itemUniqueId?: string;
	listId?: string;
	orgId?: string;
	serverRelativePath?: SP.ResourcePath;
	siteId?: string;
	title?: string;
	webId?: string;
}

/*********************************************
* RevisionInfo
**********************************************/
export interface RevisionInfo {
	id?: string;
}

/*********************************************
* RevisionSetFacet
**********************************************/
export interface RevisionSetFacet {
	author?: Microsoft.SharePoint.Activities.ActivityClientIdentity;
	revisions?: Array<Microsoft.SharePoint.Activities.RevisionInfo>;
}

/*********************************************
* ActivityCapabilities
**********************************************/
export interface ActivityCapabilities {
	clientActivitiesEnabled?: boolean;
	enabled?: boolean;
}

/*********************************************
* ActivityClientRequest
**********************************************/
export interface ActivityClientRequest {
	comment?: Microsoft.SharePoint.Activities.CommentFacet;
	contentAction?: string;
	contentId?: string;
	contentOrigin?: string;
	created?: string;
	id?: any;
	mention?: Microsoft.SharePoint.Activities.MentionFacet;
	navigationId?: string;
	revisionSet?: Microsoft.SharePoint.Activities.RevisionSetFacet;
}

/*********************************************
* ActivityClientResponse
**********************************************/
export interface ActivityClientResponse {
	id?: any;
	message?: string;
	serverId?: string;
	status?: number;
}
