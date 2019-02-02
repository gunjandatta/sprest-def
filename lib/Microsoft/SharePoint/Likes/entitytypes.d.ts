import { IBaseExecution, IBaseResult } from "../../../";
import { IBaseCollection, IBaseQuery, IBaseResults } from "../../../";
import { Microsoft } from "../../../";

/*********************************************
* IlikedByInformation
**********************************************/
export interface IlikedByInformation extends likedByInformationCollections,likedByInformationMethods,IBaseQuery<IlikedByInformationQuery> {

}

/*********************************************
* IlikedByInformationCollection
**********************************************/
export interface IlikedByInformationCollection extends IBaseResults<likedByInformation> {
	done(resolve: (value?: Array<likedByInformation | any>) => void);
}

/*********************************************
* IlikedByInformationQueryCollection
**********************************************/
export interface IlikedByInformationQueryCollection extends IBaseResults<likedByInformationQuery> {
	done(resolve: (value?: Array<likedByInformationQuery | any>) => void);
}

/*********************************************
* IlikedByInformationQuery
**********************************************/
export interface IlikedByInformationQuery extends likedByInformationQuery, likedByInformationMethods {

}

/*********************************************
* likedByInformation
**********************************************/
export interface likedByInformation extends IBaseResult, likedByInformationProps, likedByInformationCollections, likedByInformationMethods {

}

/*********************************************
* likedByInformationProps
**********************************************/
export interface likedByInformationProps {
	isLikedByUser?: boolean;
	likeCount?: number;
}

/*********************************************
* likedByInformationPropMethods
**********************************************/
export interface likedByInformationPropMethods {

}

/*********************************************
* likedByInformationCollections
**********************************************/
export interface likedByInformationCollections extends likedByInformationPropMethods {
	likedBy(): IBaseCollection<Microsoft.SharePoint.Likes.userEntity>;
	likedBy(id: string | number): IBaseQuery<Microsoft.SharePoint.Likes.userEntity> & Microsoft.SharePoint.Likes.userEntityCollections;
}

/*********************************************
* likedByInformationQuery
**********************************************/
export interface likedByInformationQuery extends IBaseResult, likedByInformationProps, likedByInformationMethods {
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
* userEntityCollections
**********************************************/
export interface userEntityCollections {

}

/*********************************************
* LikesAPI
**********************************************/
export interface LikesAPI {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* LikesAPICollections
**********************************************/
export interface LikesAPICollections {

}
