import { IBaseExecution } from "../../../../";
import { IBaseCollection } from "../../../../";
import { IBaseQuery } from "../../../../";
import { IBaseResults } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* ISiteCollectionCorporateCatalogAccessor
**********************************************/
export interface ISiteCollectionCorporateCatalogAccessor extends SiteCollectionCorporateCatalogAccessorCollections,SiteCollectionCorporateCatalogAccessorMethods,IBaseQuery<ISiteCollectionCorporateCatalogAccessorQuery> {

}

/*********************************************
* ISiteCollectionCorporateCatalogAccessorQuery
**********************************************/
export interface ISiteCollectionCorporateCatalogAccessorQuery extends SiteCollectionCorporateCatalogAccessorQuery,SiteCollectionCorporateCatalogAccessorMethods {

}

/*********************************************
* SiteCollectionCorporateCatalogAccessor
**********************************************/
export interface SiteCollectionCorporateCatalogAccessor extends SiteCollectionCorporateCatalogAccessorCollections, SiteCollectionCorporateCatalogAccessorMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorProps
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorProps {

}

/*********************************************
* SiteCollectionCorporateCatalogAccessorCollections
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorCollections extends SiteCollectionCorporateCatalogAccessorProps {
	AvailableApps(): IBaseCollection<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollectionMethods;
	AvailableApps(id: string | number): IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollections;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorQuery
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorQuery extends SiteCollectionCorporateCatalogAccessorProps {
	AvailableApps: IBaseResults<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata>;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorMethods
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorMethods {
	add(Content?: any, Overwrite?: boolean, Url?: string): IBaseExecution<SP.File>;
}

/*********************************************
* ICorporateCatalogAppMetadata
**********************************************/
export interface ICorporateCatalogAppMetadata extends CorporateCatalogAppMetadataCollections,CorporateCatalogAppMetadataMethods,IBaseQuery<ICorporateCatalogAppMetadataQuery> {

}

/*********************************************
* ICorporateCatalogAppMetadataQuery
**********************************************/
export interface ICorporateCatalogAppMetadataQuery extends CorporateCatalogAppMetadataQuery,CorporateCatalogAppMetadataMethods {

}

/*********************************************
* CorporateCatalogAppMetadata
**********************************************/
export interface CorporateCatalogAppMetadata extends CorporateCatalogAppMetadataCollections, CorporateCatalogAppMetadataMethods {
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
* CorporateCatalogAppMetadataCollections
**********************************************/
export interface CorporateCatalogAppMetadataCollections extends CorporateCatalogAppMetadataProps {

}

/*********************************************
* CorporateCatalogAppMetadataCollectionMethods
**********************************************/
export interface CorporateCatalogAppMetadataCollectionMethods {
	getById(id?: string): IBaseExecution<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata>;
}

/*********************************************
* CorporateCatalogAppMetadataQuery
**********************************************/
export interface CorporateCatalogAppMetadataQuery extends CorporateCatalogAppMetadataProps {

}

/*********************************************
* CorporateCatalogAppMetadataMethods
**********************************************/
export interface CorporateCatalogAppMetadataMethods {
	deploy(skipFeatureDeployment?: boolean): IBaseExecution<any>;
	install(): IBaseExecution<any>;
	remove(): IBaseExecution<any>;
	retract(): IBaseExecution<any>;
	uninstall(): IBaseExecution<any>;
	upgrade(): IBaseExecution<any>;
}

/*********************************************
* ITenantCorporateCatalogAccessor
**********************************************/
export interface ITenantCorporateCatalogAccessor extends TenantCorporateCatalogAccessorCollections,TenantCorporateCatalogAccessorMethods,IBaseQuery<ITenantCorporateCatalogAccessorQuery> {

}

/*********************************************
* ITenantCorporateCatalogAccessorQuery
**********************************************/
export interface ITenantCorporateCatalogAccessorQuery extends TenantCorporateCatalogAccessorQuery,TenantCorporateCatalogAccessorMethods {

}

/*********************************************
* TenantCorporateCatalogAccessor
**********************************************/
export interface TenantCorporateCatalogAccessor extends TenantCorporateCatalogAccessorCollections, TenantCorporateCatalogAccessorMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantCorporateCatalogAccessorProps
**********************************************/
export interface TenantCorporateCatalogAccessorProps {

}

/*********************************************
* TenantCorporateCatalogAccessorCollections
**********************************************/
export interface TenantCorporateCatalogAccessorCollections extends TenantCorporateCatalogAccessorProps {
	AvailableApps(): IBaseCollection<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollectionMethods;
	AvailableApps(id: string | number): IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollections;
	SiteCollectionAppCatalogsSites(): IBaseCollection<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItemCollectionMethods;
	SiteCollectionAppCatalogsSites(id: string | number): IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItemCollections;
}

/*********************************************
* TenantCorporateCatalogAccessorQuery
**********************************************/
export interface TenantCorporateCatalogAccessorQuery extends TenantCorporateCatalogAccessorProps {
	AvailableApps: IBaseResults<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata>;
	SiteCollectionAppCatalogsSites: IBaseResults<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem>;
}

/*********************************************
* TenantCorporateCatalogAccessorMethods
**********************************************/
export interface TenantCorporateCatalogAccessorMethods {
	add(Content?: any, Overwrite?: boolean, Url?: string): IBaseExecution<SP.File>;
}

/*********************************************
* SiteCollectionAppCatalogAllowedItem
**********************************************/
export interface SiteCollectionAppCatalogAllowedItem {
	AbsoluteUrl?: string;
	SiteID?: any;
}

/*********************************************
* SiteCollectionAppCatalogAllowedItemCollections
**********************************************/
export interface SiteCollectionAppCatalogAllowedItemCollections extends SiteCollectionAppCatalogAllowedItemCollectionMethods {

}

/*********************************************
* SiteCollectionAppCatalogAllowedItemCollectionMethods
**********************************************/
export interface SiteCollectionAppCatalogAllowedItemCollectionMethods {
	add(absolutePath?: string): IBaseExecution<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem>;
	getByAbsoluteUrl(absolutePath?: string): IBaseExecution<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem>;
	remove(absolutePath?: string): IBaseExecution<any>;
	removeById(siteId?: any): IBaseExecution<any>;
}

/*********************************************
* SPCorporateCuratedGallerySettingsBase
**********************************************/
export interface SPCorporateCuratedGallerySettingsBase {
	HostSiteFullUrl?: string;
}

/*********************************************
* SPCorporateCuratedGallerySettingsBaseCollections
**********************************************/
export interface SPCorporateCuratedGallerySettingsBaseCollections {

}

/*********************************************
* SPCorporateCuratedGallerySettingsFactory
**********************************************/
export interface SPCorporateCuratedGallerySettingsFactory {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPCorporateCuratedGallerySettingsFactoryCollections
**********************************************/
export interface SPCorporateCuratedGallerySettingsFactoryCollections {

}
