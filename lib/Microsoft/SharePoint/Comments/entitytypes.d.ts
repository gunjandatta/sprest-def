import { IBaseExecution } from "../../../";
import { IBaseCollection } from "../../../";
import { IBaseResults } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";
import { IBaseQuery } from "../../../";

/*********************************************
* Icomment
**********************************************/
export interface Icomment extends commentCollections,commentMethods,IBaseQuery<IcommentQuery> {

}

/*********************************************
* IcommentQuery
**********************************************/
export interface IcommentQuery extends commentQuery,commentMethods {

}

/*********************************************
* comment
**********************************************/
export interface comment extends commentCollections, commentMethods {
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

}

/*********************************************
* commentCollections
**********************************************/
export interface commentCollections extends commentProps {
	likedBy(): IBaseCollection<Microsoft.SharePoint.Likes.userEntity>;
	likedBy(id: string | number): IBaseExecution<Microsoft.SharePoint.Likes.userEntity>;
	replies(): IBaseCollection<Microsoft.SharePoint.Comments.comment>;
	replies(id: string | number): IBaseExecution<Microsoft.SharePoint.Comments.comment>;
}

/*********************************************
* commentQuery
**********************************************/
export interface commentQuery extends commentProps {
	likedBy: IBaseResults<Microsoft.SharePoint.Likes.userEntity>;
	replies: IBaseResults<Microsoft.SharePoint.Comments.comment>;
}

/*********************************************
* commentMethods
**********************************************/
export interface commentMethods {
	like(): IBaseExecution<any>;
	unlike(): IBaseExecution<any>;
}

/*********************************************
* CommentsAPI
**********************************************/
export interface CommentsAPI {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
