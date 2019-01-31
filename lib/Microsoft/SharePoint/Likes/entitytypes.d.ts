import { IBaseExecution } from "../../../";
import { IBaseCollection } from "../../../";
import { IBaseResults } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* IlikedByInformation
**********************************************/
export interface IlikedByInformation extends likedByInformationCollections,likedByInformationMethods,IBaseQuery<IlikedByInformationQuery> {

}

/*********************************************
* IlikedByInformationQuery
**********************************************/
export interface IlikedByInformationQuery extends likedByInformationQuery,likedByInformationMethods {

}

/*********************************************
* likedByInformation
**********************************************/
export interface likedByInformation extends likedByInformationCollections, likedByInformationMethods {
	isLikedByUser?: boolean;
	likeCount?: number;
}

/*********************************************
* likedByInformationProps
**********************************************/
export interface likedByInformationProps {

}

/*********************************************
* likedByInformationCollections
**********************************************/
export interface likedByInformationCollections extends likedByInformationProps {
	likedBy(): IBaseCollection<Microsoft.SharePoint.Likes.userEntity>;
}

/*********************************************
* likedByInformationQuery
**********************************************/
export interface likedByInformationQuery extends likedByInformationProps {
	likedBy: IBaseResults<Microsoft.SharePoint.Likes.userEntity>;
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
