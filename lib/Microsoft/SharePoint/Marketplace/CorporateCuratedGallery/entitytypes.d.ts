import { IBaseCollection } from "../../../../";
import { Microsoft } from "../../../../";
import { IBaseExecution } from "../../../../";

/*********************************************
* ISiteCollectionCorporateCatalogAccessor
**********************************************/
export interface ISiteCollectionCorporateCatalogAccessor extends SiteCollectionCorporateCatalogAccessorProps,SiteCollectionCorporateCatalogAccessorMethods,IBaseExecution<SiteCollectionCorporateCatalogAccessor> {

}

/*********************************************
* SiteCollectionCorporateCatalogAccessor
**********************************************/
export interface SiteCollectionCorporateCatalogAccessor extends SiteCollectionCorporateCatalogAccessorProps, SiteCollectionCorporateCatalogAccessorMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorProps
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorProps {
	AvailableApps<T=Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata>(): IBaseCollection<T>;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorMethods
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorMethods {
	add<T=SP.File>(Content?: any, Overwrite?: boolean, Url?: string): IBaseExecution<T>;
}

/*********************************************
* ICorporateCatalogAppMetadata
**********************************************/
export interface ICorporateCatalogAppMetadata extends CorporateCatalogAppMetadataProps,CorporateCatalogAppMetadataMethods,IBaseExecution<CorporateCatalogAppMetadata> {

}

/*********************************************
* CorporateCatalogAppMetadata
**********************************************/
export interface CorporateCatalogAppMetadata extends CorporateCatalogAppMetadataProps, CorporateCatalogAppMetadataMethods {
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
* CorporateCatalogAppMetadataProps
**********************************************/
export interface CorporateCatalogAppMetadataProps {

}

/*********************************************
* CorporateCatalogAppMetadataMethods
**********************************************/
export interface CorporateCatalogAppMetadataMethods {
	deploy<T=any>(skipFeatureDeployment?: boolean): IBaseExecution<T>;
	install<T=any>(): IBaseExecution<T>;
	remove<T=any>(): IBaseExecution<T>;
	retract<T=any>(): IBaseExecution<T>;
	uninstall<T=any>(): IBaseExecution<T>;
	upgrade<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ITenantCorporateCatalogAccessor
**********************************************/
export interface ITenantCorporateCatalogAccessor extends TenantCorporateCatalogAccessorProps,TenantCorporateCatalogAccessorMethods,IBaseExecution<TenantCorporateCatalogAccessor> {

}

/*********************************************
* TenantCorporateCatalogAccessor
**********************************************/
export interface TenantCorporateCatalogAccessor extends TenantCorporateCatalogAccessorProps, TenantCorporateCatalogAccessorMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantCorporateCatalogAccessorProps
**********************************************/
export interface TenantCorporateCatalogAccessorProps {
	AvailableApps<T=Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata>(): IBaseCollection<T>;
	SiteCollectionAppCatalogsSites<T=Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem>(): IBaseCollection<T>;
}

/*********************************************
* TenantCorporateCatalogAccessorMethods
**********************************************/
export interface TenantCorporateCatalogAccessorMethods {
	add<T=SP.File>(Content?: any, Overwrite?: boolean, Url?: string): IBaseExecution<T>;
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

/*********************************************
* ICorporateCatalogAppMetadataCollection
**********************************************/
export interface ICorporateCatalogAppMetadataCollection extends CorporateCatalogAppMetadataCollectionProps,CorporateCatalogAppMetadataCollectionMethods,IBaseExecution<CorporateCatalogAppMetadataCollection> {

}

/*********************************************
* CorporateCatalogAppMetadataCollection
**********************************************/
export interface CorporateCatalogAppMetadataCollection extends CorporateCatalogAppMetadataCollectionProps, CorporateCatalogAppMetadataCollectionMethods {

}

/*********************************************
* CorporateCatalogAppMetadataCollectionProps
**********************************************/
export interface CorporateCatalogAppMetadataCollectionProps {

}

/*********************************************
* CorporateCatalogAppMetadataCollectionMethods
**********************************************/
export interface CorporateCatalogAppMetadataCollectionMethods {
	getById<T=Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata>(id?: string): IBaseExecution<T>;
}

/*********************************************
* ISiteCollectionAppCatalogAllowedItemCollection
**********************************************/
export interface ISiteCollectionAppCatalogAllowedItemCollection extends SiteCollectionAppCatalogAllowedItemCollectionProps,SiteCollectionAppCatalogAllowedItemCollectionMethods,IBaseExecution<SiteCollectionAppCatalogAllowedItemCollection> {

}

/*********************************************
* SiteCollectionAppCatalogAllowedItemCollection
**********************************************/
export interface SiteCollectionAppCatalogAllowedItemCollection extends SiteCollectionAppCatalogAllowedItemCollectionProps, SiteCollectionAppCatalogAllowedItemCollectionMethods {

}

/*********************************************
* SiteCollectionAppCatalogAllowedItemCollectionProps
**********************************************/
export interface SiteCollectionAppCatalogAllowedItemCollectionProps {

}

/*********************************************
* SiteCollectionAppCatalogAllowedItemCollectionMethods
**********************************************/
export interface SiteCollectionAppCatalogAllowedItemCollectionMethods {
	add<T=Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem>(absolutePath?: string): IBaseExecution<T>;
	getByAbsoluteUrl<T=Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem>(absolutePath?: string): IBaseExecution<T>;
	remove<T=any>(absolutePath?: string): IBaseExecution<T>;
	removeById<T=any>(siteId?: any): IBaseExecution<T>;
}
