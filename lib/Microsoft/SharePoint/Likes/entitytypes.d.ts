

/*********************************************
* likedByInformation
**********************************************/
export interface likedByInformation {
	isLikedByUser?: boolean;
	likeCount?: number;
}

/*********************************************
* likedByInformationMethods
**********************************************/
export interface likedByInformationMethods extends likedByInformation {
	likedBy?: () => Array<Microsoft.SharePoint.Likes.userEntity>;
}

/*********************************************
* likedByInformationQuery
**********************************************/
export interface likedByInformationQuery extends likedByInformation {
	likedBy?: Array<Microsoft.SharePoint.Likes.userEntity>;
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
