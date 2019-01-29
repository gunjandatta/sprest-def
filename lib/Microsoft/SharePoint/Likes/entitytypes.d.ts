import { Microsoft } from "../../../";

/*********************************************
* likedByInformation
**********************************************/
export interface likedByInformation {
	isLikedByUser?: boolean;
	likeCount?: number;
}

/*********************************************
* likedByInformationCollections<T = any>
**********************************************/
export interface likedByInformationCollections<T = any> {
	likedBy(): T;
}

/*********************************************
* likedByInformationQuery<T = any>
**********************************************/
export interface likedByInformationQuery<T = any> {
	likedBy(): T;
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
