import { IBaseCollection } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* IlikedByInformation
**********************************************/
export interface IlikedByInformation extends likedByInformationProps,likedByInformationMethods,IBaseExecution<likedByInformation> {

}

/*********************************************
* likedByInformation
**********************************************/
export interface likedByInformation extends likedByInformationProps, likedByInformationMethods {
	isLikedByUser?: boolean;
	likeCount?: number;
}

/*********************************************
* likedByInformationProps
**********************************************/
export interface likedByInformationProps {
	likedBy<T=Microsoft.SharePoint.Likes.userEntity>(): IBaseCollection<T>;
}

/*********************************************
* likedByInformationMethods
**********************************************/
export interface likedByInformationMethods {

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
