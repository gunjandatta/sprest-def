import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* Icomment
**********************************************/
export interface Icomment extends commentCollections, commentMethods, IBaseQuery<IcommentQuery> {

}

/*********************************************
* IcommentCollection
**********************************************/
export interface IcommentCollection extends IBaseResults<comment>, commentCollectionMethods {
	done?: (resolve: (value?: Array<comment>) => void) => void;
}

/*********************************************
* IcommentQueryCollection
**********************************************/
export interface IcommentQueryCollection extends IBaseResults<commentOData>, commentCollectionMethods {
	done?: (resolve: (value?: Array<commentOData>) => void) => void;
}

/*********************************************
* IcommentQuery
**********************************************/
export interface IcommentQuery extends commentOData, commentMethods {

}

/*********************************************
* comment
**********************************************/
export interface comment extends IBaseResult, commentProps, commentCollections, commentMethods {

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
export interface commentCollections extends commentPropMethods {
	likedBy(): IBaseCollection<Microsoft.SharePoint.Likes.userEntity>;
	likedBy(id: string | number): IBaseQuery<Microsoft.SharePoint.Likes.userEntity> & Microsoft.SharePoint.Likes.userEntityCollections;
	replies(): IBaseCollection<Microsoft.SharePoint.Comments.comment, Microsoft.SharePoint.Comments.commentOData, IBaseExecution & Microsoft.SharePoint.Comments.commentCollectionMethods> & IBaseExecution & Microsoft.SharePoint.Comments.commentCollectionMethods;
	replies(id: string | number): IBaseQuery<Microsoft.SharePoint.Comments.comment, Microsoft.SharePoint.Comments.commentOData> & Microsoft.SharePoint.Comments.commentCollections & Microsoft.SharePoint.Comments.commentMethods;
}

/*********************************************
* commentCollectionMethods
**********************************************/
export interface commentCollectionMethods {
	deleteAll(): IBaseExecution<boolean>;
}

/*********************************************
* commentOData
**********************************************/
export interface commentOData extends IBaseResult, commentProps, commentMethods {
	likedBy: IBaseResults<Microsoft.SharePoint.Likes.userEntity>;
	replies: IBaseResults<Microsoft.SharePoint.Comments.comment> & Microsoft.SharePoint.Comments.commentCollectionMethods;
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
