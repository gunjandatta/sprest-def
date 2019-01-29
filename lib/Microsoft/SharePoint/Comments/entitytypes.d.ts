import { Microsoft } from "../../../";
import { SP } from "../../../";

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
* commentCollections<T = any>
**********************************************/
export interface commentCollections<T = any> {
	likedBy(): T;
	replies(): T;
}

/*********************************************
* commentQuery
**********************************************/
export interface commentQuery {
	likedBy(): T;
	replies(): T;
}

/*********************************************
* commentMethods<T = any>
**********************************************/
export interface commentMethods<T = any> {
	like(): T;
	unlike(): T;
}

/*********************************************
* CommentsAPI
**********************************************/
export interface CommentsAPI {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
