import { Base } from "../../../";

/*********************************************
* GetRemoteItemInfoRequest
**********************************************/
export interface GetRemoteItemInfoRequest {
	IsCreateMountPointFlow?: boolean;
	MountedRemoteItemUniqueIds?: Array<any>;
	RemoteItemListId?: any;
	RemoteItemSiteId?: any;
	RemoteItemSiteUrl?: string;
	RemoteItemUniqueIds?: Array<any>;
	RemoteItemWebId?: any;
	UserEmail?: string;
	UserLoginName?: string;
}

/*********************************************
* GetRemoteItemInfoRequestCollections
**********************************************/
export interface GetRemoteItemInfoRequestCollections {

}

/*********************************************
* NotifyChangeToMountPointsRequest
**********************************************/
export interface NotifyChangeToMountPointsRequest {
	MountPointUniqueIds?: Array<any>;
}

/*********************************************
* NotifyChangeToMountPointsRequestCollections
**********************************************/
export interface NotifyChangeToMountPointsRequestCollections {

}

/*********************************************
* PlacesUserEntity
**********************************************/
export interface PlacesUserEntity {
	email?: string;
	id?: number;
	loginName?: string;
	name?: string;
}

/*********************************************
* PlacesUserEntityCollections
**********************************************/
export interface PlacesUserEntityCollections {

}
