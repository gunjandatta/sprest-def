

/*********************************************
* likedByInformation
**********************************************/
export interface likedByInformation {
	likedBy?: () => Microsoft.SharePoint.Likes.Microsoft_SharePoint_Likes_likedByInformation_likedBy_Microsoft_SharePoint_Likes_userEntity_likedByPartner;
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
