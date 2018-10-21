import { SP } from "../../";

/*********************************************
* CrossGeoSyncUserDataBatch
**********************************************/
export interface CrossGeoSyncUserDataBatch {
	LastEventId?: number;
	LastRecordId?: number;
	Properties?: Array<SP.UserProfiles.CrossGeoSyncUserProperty>;
}

/*********************************************
* CrossGeoSyncUserProperty
**********************************************/
export interface CrossGeoSyncUserProperty {
	DsGuid?: any;
	IsMultivalue?: boolean;
	Privacy?: number;
	PropertyId?: number;
	PropertyVal?: string;
	SecondaryVal?: string;
}

/*********************************************
* FollowedItem
**********************************************/
export interface FollowedItem {
	Data?: Array<SP.KeyValue>;
	FileType?: string;
	FileTypeProgid?: string;
	Flags?: string;
	GroupId?: any;
	HasFeed?: boolean;
	Hidden?: boolean;
	IconUrl?: string;
	ItemId?: number;
	ItemType?: number;
	ListId?: any;
	ParentUrl?: string;
	Pinned?: number;
	ServerUrlProgid?: string;
	SiteId?: any;
	Subtype?: number;
	Title?: string;
	UniqueId?: any;
	Url?: string;
	WebId?: any;
}

/*********************************************
* FollowResult
**********************************************/
export interface FollowResult {
	Item?: SP.UserProfiles.FollowedItem;
	ResultType?: number;
}

/*********************************************
* HashTag
**********************************************/
export interface HashTag {
	Name?: string;
	UseCount?: number;
}

/*********************************************
* PersonalCacheItem
**********************************************/
export interface PersonalCacheItem {
	CacheKey?: string;
	CacheValue?: string;
	CacheValueHash?: string;
	CacheVersion?: string;
	ListItemId?: number;
	ListItemUniqueId?: string;
	ModifiedTimeUtc?: any;
}
