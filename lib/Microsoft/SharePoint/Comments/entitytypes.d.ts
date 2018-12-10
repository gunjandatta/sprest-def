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
* commentCollections
**********************************************/
export interface commentCollections {
	likedBy<T=Array<Microsoft.SharePoint.Likes.userEntity>>(): T;
	replies<T=Array<Microsoft.SharePoint.Comments.comment>>(): T;
}

/*********************************************
* commentQuery
**********************************************/
export interface commentQuery {
	likedBy<T=Array<Microsoft.SharePoint.Likes.userEntity>>(): T;
	replies<T=Array<Microsoft.SharePoint.Comments.comment>>(): T;
}

/*********************************************
* CommentsAPI
**********************************************/
export interface CommentsAPI {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
