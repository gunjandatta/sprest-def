import { IBaseExecution } from "../../../";
import { IBaseCollection } from "../../../";
import { IBaseQuery } from "../../../";
import { IBaseResults } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

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

}

/*********************************************
* commentProps
**********************************************/
export interface commentProps {
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
* commentPropMethods
**********************************************/
export interface commentPropMethods {

}

/*********************************************
* commentCollections
**********************************************/
export interface commentCollections extends commentProps, commentPropMethods {
	likedBy(): IBaseCollection<Microsoft.SharePoint.Likes.userEntity>;
	likedBy(id: string | number): IBaseQuery<Microsoft.SharePoint.Likes.userEntity>;
	replies(): IBaseCollection<Microsoft.SharePoint.Comments.comment, Microsoft.SharePoint.Comments.commentQuery> & Microsoft.SharePoint.Comments.commentCollectionMethods;
	replies(id: string | number): IBaseQuery<Microsoft.SharePoint.Comments.comment, Microsoft.SharePoint.Comments.commentQuery> & Microsoft.SharePoint.Comments.commentCollections;
}

/*********************************************
* commentCollectionMethods
**********************************************/
export interface commentCollectionMethods {
	deleteAll(): IBaseExecution<boolean>;
}

/*********************************************
* commentQuery
**********************************************/
export interface commentQuery extends commentProps,commentMethods {
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

/*********************************************
* CommentsAPICollections
**********************************************/
export interface CommentsAPICollections {

}
