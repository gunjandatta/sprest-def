import { Base } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* OrgAssets
**********************************************/
export interface OrgAssets {
	CentralAssetRepositoryLibraries?: Microsoft.SharePoint.Administration.OrgAssetsLibraryCollection;
	Domain?: SP.ResourcePath;
	OrgAssetsLibraries?: Microsoft.SharePoint.Administration.OrgAssetsLibraryCollection;
	SiteId?: any;
	Url?: SP.ResourcePath;
	WebId?: any;
}

/*********************************************
* OrgAssetsCollections
**********************************************/
export interface OrgAssetsCollections {

}

/*********************************************
* OrgAssetsLibraryCollection
**********************************************/
export interface OrgAssetsLibraryCollection {
	OrgAssetsLibraries?: { results: Array<Microsoft.SharePoint.Administration.OrgAssetsLibrary> };
	Items?: { results: Array<Microsoft.SharePoint.Administration.OrgAssetsLibrary> };
}

/*********************************************
* OrgAssetsLibraryCollectionCollections
**********************************************/
export interface OrgAssetsLibraryCollectionCollections {

}

/*********************************************
* OrgAssetsLibrary
**********************************************/
export interface OrgAssetsLibrary {
	DisplayName?: string;
	FileType?: string;
	LibraryUrl?: SP.ResourcePath;
	ListId?: any;
	OrgAssetFlags?: number;
	OrgAssetType?: number;
	ThumbnailUrl?: SP.ResourcePath;
	UniqueId?: any;
}

/*********************************************
* OrgAssetsLibraryCollections
**********************************************/
export interface OrgAssetsLibraryCollections {

}

/*********************************************
* CustomFontsResource
**********************************************/
export interface CustomFontsResource {
	byteArray?: any;
	fileName?: string;
	fullPath?: string;
	MajVer?: number;
	type?: number;
}

/*********************************************
* CustomFontsResourceCollections
**********************************************/
export interface CustomFontsResourceCollections {

}

/*********************************************
* FileRequestBrandingAssetConfig
**********************************************/
export interface FileRequestBrandingAssetConfig {
	AssetLibraryRelativeUrl?: string;
	AssetLibraryUrl?: string;
	BrandedProfiles?: { results: Array<Microsoft.SharePoint.Administration.FileRequestBrandingProfile> };
}

/*********************************************
* FileRequestBrandingAssetConfigCollections
**********************************************/
export interface FileRequestBrandingAssetConfigCollections {

}

/*********************************************
* FileRequestBrandingProfile
**********************************************/
export interface FileRequestBrandingProfile {
	BackgroundFileId?: any;
	BackgroundFileName?: string;
	BackgroundFileUrl?: string;
	LogoFileId?: any;
	LogoFileName?: string;
	LogoFileUrl?: string;
	ProfileType?: number;
}

/*********************************************
* FileRequestBrandingProfileCollections
**********************************************/
export interface FileRequestBrandingProfileCollections {

}

/*********************************************
* FileRequestBrandingCdnInfo
**********************************************/
export interface FileRequestBrandingCdnInfo {
	BackgroundFilePublicCdnUrl?: string;
	LogoFilePublicCdnUrl?: string;
}

/*********************************************
* FileRequestBrandingCdnInfoCollections
**********************************************/
export interface FileRequestBrandingCdnInfoCollections {

}

/*********************************************
* UsageEntry
**********************************************/
export interface UsageEntry {
	EventTypeId?: number;
	ItemId?: string;
	ScopeId?: any;
	Site?: any;
	User?: string;
}

/*********************************************
* UsageEntryCollections
**********************************************/
export interface UsageEntryCollections {

}
