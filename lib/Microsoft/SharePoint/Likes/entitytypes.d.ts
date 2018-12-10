import { Microsoft } from "../../../";

/*********************************************
* likedByInformation
**********************************************/
export interface likedByInformation {
	isLikedByUser?: boolean;
	likeCount?: number;
}

/*********************************************
* likedByInformationCollections
**********************************************/
export interface likedByInformationCollections {
	likedBy<T=Array<Microsoft.SharePoint.Likes.userEntity>>(): T;
}

/*********************************************
* likedByInformationQuery
**********************************************/
export interface likedByInformationQuery {
	likedBy<T=Array<Microsoft.SharePoint.Likes.userEntity>>(): T;
}

/*********************************************
* userEntity
**********************************************/
export interface userEntity {
	creationDate?: any;
	email?: string;
	id?: number;
	loginName?: string;
	name?: string;
}

/*********************************************
* LikesAPI
**********************************************/
export interface LikesAPI {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
