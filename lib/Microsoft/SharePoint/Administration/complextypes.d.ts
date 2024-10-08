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
