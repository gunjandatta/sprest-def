

/*********************************************
* likedByInformation
**********************************************/
export interface likedByInformation {
	likedBy?: () => Array<Microsoft.SharePoint.Likes.userEntity>;
	isLikedByUser?: boolean;
	likeCount?: number;
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
