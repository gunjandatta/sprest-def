import { Base } from "../../../";

/*********************************************
* GetRemoteItemInfoRequest
**********************************************/
export interface GetRemoteItemInfoRequest {
	IsCreateMountPointFlow?: boolean;
	MountedRemoteItemUniqueIds?: { results: Array<any> };
	RemoteItemListId?: any;
	RemoteItemSiteId?: any;
	RemoteItemUniqueIds?: { results: Array<any> };
	RemoteItemWebId?: any;
}

/*********************************************
* GetRemoteItemInfoRequestCollections
**********************************************/
export interface GetRemoteItemInfoRequestCollections {

}

/*********************************************
* GetSourceItemMetadataForODCMountPointRequest
**********************************************/
export interface GetSourceItemMetadataForODCMountPointRequest {
	IsCreateMountPointFlow?: boolean;
	MountedRemoteItemUniqueIds?: { results: Array<any> };
	RemoteItemListId?: any;
	RemoteItemSiteId?: any;
	RemoteItemUniqueIds?: { results: Array<any> };
	RemoteItemWebId?: any;
}

/*********************************************
* GetSourceItemMetadataForODCMountPointRequestCollections
**********************************************/
export interface GetSourceItemMetadataForODCMountPointRequestCollections {

}

/*********************************************
* GetSourceItemMetadataForODCMountPointResponse
**********************************************/
export interface GetSourceItemMetadataForODCMountPointResponse {

}

/*********************************************
* GetSourceItemMetadataForODCMountPointResponseCollections
**********************************************/
export interface GetSourceItemMetadataForODCMountPointResponseCollections {

}

/*********************************************
* NotifyChangeToMountPointsRequest
**********************************************/
export interface NotifyChangeToMountPointsRequest {
	MountPointUniqueIds?: { results: Array<any> };
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
	loginName?: string;
	name?: string;
}

/*********************************************
* PlacesUserEntityCollections
**********************************************/
export interface PlacesUserEntityCollections {

}
