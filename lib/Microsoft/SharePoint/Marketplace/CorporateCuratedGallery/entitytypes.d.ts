

/*********************************************
* SiteCollectionCorporateCatalogAccessor
**********************************************/
export interface SiteCollectionCorporateCatalogAccessor {
	AvailableApps?: () => Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionCorporateCatalogAccessor_AvailableApps_Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata_AvailableAppsPartner;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
	AvailableApps?: () => Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_TenantCorporateCatalogAccessor_AvailableApps_Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_CorporateCatalogAppMetadata_AvailableAppsPartner;
	SiteCollectionAppCatalogsSites?: () => Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_TenantCorporateCatalogAccessor_SiteCollectionAppCatalogsSites_Microsoft_SharePoint_Marketplace_CorporateCuratedGallery_SiteCollectionAppCatalogAllowedItem_SiteCollectionAppCatalogsSitesPartner;
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
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
