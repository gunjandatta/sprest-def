import { IBaseCollection } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";
import { IBaseExecution } from "../../../";

/*********************************************
* Icomment
**********************************************/
export interface Icomment extends commentProps,commentMethods,IBaseExecution<comment> {

}

/*********************************************
* comment
**********************************************/
export interface comment extends commentProps, commentMethods {
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
* commentProps
**********************************************/
export interface commentProps {
	likedBy<T=Microsoft.SharePoint.Likes.userEntity>(): IBaseCollection<T>;
	replies<T=Microsoft.SharePoint.Comments.comment>(): IBaseCollection<T>;
}

/*********************************************
* commentMethods
**********************************************/
export interface commentMethods {
	like<T=any>(): IBaseExecution<T>;
	unlike<T=any>(): IBaseExecution<T>;
}

/*********************************************
* CommentsAPI
**********************************************/
export interface CommentsAPI {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
