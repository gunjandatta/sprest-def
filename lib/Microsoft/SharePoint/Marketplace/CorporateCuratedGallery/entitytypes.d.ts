import { Microsoft } from "../../../../";

/*********************************************
* SiteCollectionCorporateCatalogAccessor
**********************************************/
export interface SiteCollectionCorporateCatalogAccessor {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorCollections<T = any>
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorCollections<T = any> {
	AvailableApps(): T;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorQuery
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorQuery {
	AvailableApps(): T;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorMethods<T = any>
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorMethods<T = any> {
	add(Content?: any, Overwrite?: boolean, Url?: string): T;
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
* CorporateCatalogAppMetadataMethods<T = any>
**********************************************/
export interface CorporateCatalogAppMetadataMethods<T = any> {
	deploy(skipFeatureDeployment?: boolean): T;
	install(): T;
	remove(): T;
	retract(): T;
	uninstall(): T;
	upgrade(): T;
}

/*********************************************
* TenantCorporateCatalogAccessor
**********************************************/
export interface TenantCorporateCatalogAccessor {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantCorporateCatalogAccessorCollections<T = any>
**********************************************/
export interface TenantCorporateCatalogAccessorCollections<T = any> {
	AvailableApps(): T;
	SiteCollectionAppCatalogsSites(): T;
}

/*********************************************
* TenantCorporateCatalogAccessorQuery
**********************************************/
export interface TenantCorporateCatalogAccessorQuery {
	AvailableApps(): T;
	SiteCollectionAppCatalogsSites(): T;
}

/*********************************************
* TenantCorporateCatalogAccessorMethods<T = any>
**********************************************/
export interface TenantCorporateCatalogAccessorMethods<T = any> {
	add(Content?: any, Overwrite?: boolean, Url?: string): T;
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
