import { Microsoft } from "../../../../";

/*********************************************
* SharePointHomeDataCacheCollection
**********************************************/
export interface SharePointHomeDataCacheCollection {
	Items?: Array<Microsoft.SharePoint.Portal.Home.SharePointHomeDataCache>;
}

/*********************************************
* SharePointHomeDataCache
**********************************************/
export interface SharePointHomeDataCache {
	Key?: string;
	Value?: Microsoft.SharePoint.Portal.Home.SharePointHomeDataCacheEntry;
}

/*********************************************
* SharePointHomeDataCacheEntry
**********************************************/
export interface SharePointHomeDataCacheEntry {
	CacheContext?: Microsoft.SharePoint.Portal.Home.SharePointHomeDataCacheContext;
	CacheValue?: string;
}

/*********************************************
* SharePointHomeDataCacheContext
**********************************************/
export interface SharePointHomeDataCacheContext {
	Hash?: string;
	ListItemId?: number;
	MySiteUrl?: string;
	Time?: string;
	Version?: string;
}

/*********************************************
* SharePointHomePageContext
**********************************************/
export interface SharePointHomePageContext {
	ActiveFlights?: Array<string>;
	AlternateWebAppHost?: string;
	ExperienceState?: number;
	IsGraphEnabled?: boolean;
	IsGroupCreationNewUXEnabled?: boolean;
	IsLoggingUploadEnabled?: boolean;
	IsMobile?: boolean;
	IsModernSearchEnabled?: boolean;
	IsOrgLinksProvisioned?: boolean;
	IsRtl?: boolean;
	IsSelfServiceSiteCreationEnabled?: boolean;
	IsUserVoiceEnabled?: boolean;
	LoadSuiteNav?: boolean;
	MicroserviceFlights?: Array<string>;
	MicroserviceUrl?: string;
	MySiteUrl?: string;
	SearchCenterUrl?: string;
	ShowCreateNewsTeachingBubble?: boolean;
	ShowFirstRunExperience?: boolean;
	ShowMobileUpsell?: boolean;
	UserAcronym?: string;
	UserBannerColor?: string;
	UserPhotoCdnBaseUrl?: string;
	VideoChannelUrlTemplate?: string;
	VideoPlayerUrlTemplate?: string;
}
