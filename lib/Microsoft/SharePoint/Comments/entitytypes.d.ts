import { SP } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* comment
**********************************************/
export interface comment {
	likedBy?: () => Microsoft.SharePoint.Likes.Microsoft_SharePoint_Comments_comment_likedBy_Microsoft_SharePoint_Likes_userEntity_likedByPartner;
	replies?: () => Microsoft.SharePoint.Comments.Microsoft_SharePoint_Comments_comment_replies_Microsoft_SharePoint_Comments_comment_repliesPartner;
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
* CommentsAPI
**********************************************/
export interface CommentsAPI {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
