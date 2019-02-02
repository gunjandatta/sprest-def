import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../";
import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* CentralAssetRepositoryLibraryCollection
**********************************************/
export interface CentralAssetRepositoryLibraryCollection {
	Items?: { results: Array<Microsoft.SharePoint.Administration.CentralAssetRepositoryLibrary> };
}

/*********************************************
* CentralAssetRepositoryLibraryCollectionCollections
**********************************************/
export interface CentralAssetRepositoryLibraryCollectionCollections {

}

/*********************************************
* CentralAssetRepositoryLibrary
**********************************************/
export interface CentralAssetRepositoryLibrary {
	DisplayName?: string;
	LibraryUrl?: SP.ResourcePath;
	ThumbnailUrl?: SP.ResourcePath;
}

/*********************************************
* CentralAssetRepositoryLibraryCollections
**********************************************/
export interface CentralAssetRepositoryLibraryCollections {

}

/*********************************************
* CentralAssetRepository
**********************************************/
export interface CentralAssetRepository {
	CentralAssetRepositoryLibraries?: Microsoft.SharePoint.Administration.CentralAssetRepositoryLibraryCollection;
	SiteId?: any;
	Url?: SP.ResourcePath;
	WebId?: any;
}

/*********************************************
* CentralAssetRepositoryCollections
**********************************************/
export interface CentralAssetRepositoryCollections {

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
