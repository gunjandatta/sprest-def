import { SP } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* comment
**********************************************/
export interface comment {
	author?: SP.Sharing.Principal;
	createdDate?: any;
	id?: string;
	isLikedByUser?: boolean;
	isReply?: boolean;
	itemId?: number;
	likeCount?: number;
	listId?: any;
	mentions?: Array<Microsoft.SharePoint.Comments.Client.Identity>;
	parentId?: string;
	relativeCreatedDate?: string;
	replyCount?: number;
	text?: string;
}

/*********************************************
* commentMethods
**********************************************/
export interface commentMethods extends comment {
	likedBy?: () => Array<Microsoft.SharePoint.Likes.userEntity>;
	replies?: () => Array<Microsoft.SharePoint.Comments.comment>;
}

/*********************************************
* commentQuery
**********************************************/
export interface commentQuery extends comment {
	likedBy?: Array<Microsoft.SharePoint.Likes.userEntity>;
	replies?: Array<Microsoft.SharePoint.Comments.comment>;
}

/*********************************************
* CommentsAPI
**********************************************/
export interface CommentsAPI {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
