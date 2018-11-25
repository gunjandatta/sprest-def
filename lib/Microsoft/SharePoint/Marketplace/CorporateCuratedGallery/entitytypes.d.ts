

/*********************************************
* SiteCollectionCorporateCatalogAccessor
**********************************************/
export interface SiteCollectionCorporateCatalogAccessor {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorMethods
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorMethods extends SiteCollectionCorporateCatalogAccessor {
	AvailableApps?: () => Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata>;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorQuery
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorQuery extends SiteCollectionCorporateCatalogAccessor {
	AvailableApps?: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata>;
}

/*********************************************
* CorporateCatalogAppMetadata
**********************************************/
export interface CorporateCatalogAppMetadata {
	AppCatalogVersion?: string;
	CanUpgrade?: boolean;
	CurrentVersionDeployed?: boolean;
	Deployed?: boolean;
	ID?: string;
	InstalledVersion?: string;
	IsClientSideSolution?: boolean;
	Title?: string;
}

/*********************************************
* TenantCorporateCatalogAccessor
**********************************************/
export interface TenantCorporateCatalogAccessor {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantCorporateCatalogAccessorMethods
**********************************************/
export interface TenantCorporateCatalogAccessorMethods extends TenantCorporateCatalogAccessor {
	AvailableApps?: () => Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata>;
	SiteCollectionAppCatalogsSites?: () => Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem>;
}

/*********************************************
* TenantCorporateCatalogAccessorQuery
**********************************************/
export interface TenantCorporateCatalogAccessorQuery extends TenantCorporateCatalogAccessor {
	AvailableApps?: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata>;
	SiteCollectionAppCatalogsSites?: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem>;
}

/*********************************************
* SiteCollectionAppCatalogAllowedItem
**********************************************/
export interface SiteCollectionAppCatalogAllowedItem {
	AbsoluteUrl?: string;
	SiteID?: any;
}

/*********************************************
* SPCorporateCuratedGallerySettingsBase
**********************************************/
export interface SPCorporateCuratedGallerySettingsBase {
	HostSiteFullUrl?: string;
}

/*********************************************
* SPCorporateCuratedGallerySettingsFactory
**********************************************/
export interface SPCorporateCuratedGallerySettingsFactory {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}
