import { Microsoft } from "../../../";
import { SP } from "../../../";

/*********************************************
* CentralAssetRepositoryLibraryCollection
**********************************************/
export interface CentralAssetRepositoryLibraryCollection {
	Items?: Array<Microsoft.SharePoint.Administration.CentralAssetRepositoryLibrary>;
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
* CentralAssetRepository
**********************************************/
export interface CentralAssetRepository {
	CentralAssetRepositoryLibraries?: Microsoft.SharePoint.Administration.CentralAssetRepositoryLibraryCollection;
	SiteId?: any;
	Url?: SP.ResourcePath;
	WebId?: any;
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
