import { IBaseExecution, IBaseResult } from "../../../../";
import { IBaseCollection, IBaseQuery, IBaseResults } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* ISiteCollectionCorporateCatalogAccessor
**********************************************/
export interface ISiteCollectionCorporateCatalogAccessor extends SiteCollectionCorporateCatalogAccessorCollections,SiteCollectionCorporateCatalogAccessorMethods,IBaseQuery<ISiteCollectionCorporateCatalogAccessorQuery> {

}

/*********************************************
* ISiteCollectionCorporateCatalogAccessorCollection
**********************************************/
export interface ISiteCollectionCorporateCatalogAccessorCollection extends IBaseResults<SiteCollectionCorporateCatalogAccessor> {
	done(resolve: (value?: Array<SiteCollectionCorporateCatalogAccessor | any>) => void);
}

/*********************************************
* ISiteCollectionCorporateCatalogAccessorQueryCollection
**********************************************/
export interface ISiteCollectionCorporateCatalogAccessorQueryCollection extends IBaseResults<SiteCollectionCorporateCatalogAccessorQuery> {
	done(resolve: (value?: Array<SiteCollectionCorporateCatalogAccessorQuery | any>) => void);
}

/*********************************************
* ISiteCollectionCorporateCatalogAccessorQuery
**********************************************/
export interface ISiteCollectionCorporateCatalogAccessorQuery extends SiteCollectionCorporateCatalogAccessorQuery, SiteCollectionCorporateCatalogAccessorMethods {

}

/*********************************************
* SiteCollectionCorporateCatalogAccessor
**********************************************/
export interface SiteCollectionCorporateCatalogAccessor extends IBaseResult, SiteCollectionCorporateCatalogAccessorProps, SiteCollectionCorporateCatalogAccessorCollections, SiteCollectionCorporateCatalogAccessorMethods {

}

/*********************************************
* SiteCollectionCorporateCatalogAccessorProps
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorPropMethods
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorPropMethods {

}

/*********************************************
* SiteCollectionCorporateCatalogAccessorCollections
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorCollections extends SiteCollectionCorporateCatalogAccessorPropMethods {
	AvailableApps(): IBaseCollection<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata>;
	AvailableApps(id: string | number): IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollections & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataMethods;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorQuery
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorQuery extends IBaseResult, SiteCollectionCorporateCatalogAccessorProps, SiteCollectionCorporateCatalogAccessorMethods {
	AvailableApps: IBaseResults<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollectionMethods;
}

/*********************************************
* SiteCollectionCorporateCatalogAccessorMethods
**********************************************/
export interface SiteCollectionCorporateCatalogAccessorMethods {
	add(Content?: any, Overwrite?: boolean, Url?: string): IBaseQuery<SP.File, SP.FileQuery> & SP.FileCollections & SP.FileMethods;
}

/*********************************************
* ICorporateCatalogAppMetadata
**********************************************/
export interface ICorporateCatalogAppMetadata extends CorporateCatalogAppMetadataCollections,CorporateCatalogAppMetadataMethods,IBaseQuery<ICorporateCatalogAppMetadataQuery> {

}

/*********************************************
* ICorporateCatalogAppMetadataCollection
**********************************************/
export interface ICorporateCatalogAppMetadataCollection extends IBaseResults<CorporateCatalogAppMetadata>, CorporateCatalogAppMetadataCollectionMethods {
	done(resolve: (value?: Array<CorporateCatalogAppMetadata | any>) => void);
}

/*********************************************
* ICorporateCatalogAppMetadataQueryCollection
**********************************************/
export interface ICorporateCatalogAppMetadataQueryCollection extends IBaseResults<CorporateCatalogAppMetadataQuery>, CorporateCatalogAppMetadataCollectionMethods {
	done(resolve: (value?: Array<CorporateCatalogAppMetadataQuery | any>) => void);
}

/*********************************************
* ICorporateCatalogAppMetadataQuery
**********************************************/
export interface ICorporateCatalogAppMetadataQuery extends CorporateCatalogAppMetadataQuery, CorporateCatalogAppMetadataMethods {

}

/*********************************************
* CorporateCatalogAppMetadata
**********************************************/
export interface CorporateCatalogAppMetadata extends IBaseResult, CorporateCatalogAppMetadataProps, CorporateCatalogAppMetadataCollections, CorporateCatalogAppMetadataMethods {

}

/*********************************************
* CorporateCatalogAppMetadataProps
**********************************************/
export interface CorporateCatalogAppMetadataProps {
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
* CorporateCatalogAppMetadataPropMethods
**********************************************/
export interface CorporateCatalogAppMetadataPropMethods {

}

/*********************************************
* CorporateCatalogAppMetadataCollections
**********************************************/
export interface CorporateCatalogAppMetadataCollections extends CorporateCatalogAppMetadataPropMethods {

}

/*********************************************
* CorporateCatalogAppMetadataCollectionMethods
**********************************************/
export interface CorporateCatalogAppMetadataCollectionMethods {
	getById(id?: string): IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollections & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataMethods;
}

/*********************************************
* CorporateCatalogAppMetadataQuery
**********************************************/
export interface CorporateCatalogAppMetadataQuery extends IBaseResult, CorporateCatalogAppMetadataProps, CorporateCatalogAppMetadataMethods {

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
* ITenantCorporateCatalogAccessorCollection
**********************************************/
export interface ITenantCorporateCatalogAccessorCollection extends IBaseResults<TenantCorporateCatalogAccessor> {
	done(resolve: (value?: Array<TenantCorporateCatalogAccessor | any>) => void);
}

/*********************************************
* ITenantCorporateCatalogAccessorQueryCollection
**********************************************/
export interface ITenantCorporateCatalogAccessorQueryCollection extends IBaseResults<TenantCorporateCatalogAccessorQuery> {
	done(resolve: (value?: Array<TenantCorporateCatalogAccessorQuery | any>) => void);
}

/*********************************************
* ITenantCorporateCatalogAccessorQuery
**********************************************/
export interface ITenantCorporateCatalogAccessorQuery extends TenantCorporateCatalogAccessorQuery, TenantCorporateCatalogAccessorMethods {

}

/*********************************************
* TenantCorporateCatalogAccessor
**********************************************/
export interface TenantCorporateCatalogAccessor extends IBaseResult, TenantCorporateCatalogAccessorProps, TenantCorporateCatalogAccessorCollections, TenantCorporateCatalogAccessorMethods {

}

/*********************************************
* TenantCorporateCatalogAccessorProps
**********************************************/
export interface TenantCorporateCatalogAccessorProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* TenantCorporateCatalogAccessorPropMethods
**********************************************/
export interface TenantCorporateCatalogAccessorPropMethods {

}

/*********************************************
* TenantCorporateCatalogAccessorCollections
**********************************************/
export interface TenantCorporateCatalogAccessorCollections extends TenantCorporateCatalogAccessorPropMethods {
	AvailableApps(): IBaseCollection<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata>;
	AvailableApps(id: string | number): IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollections & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataMethods;
	SiteCollectionAppCatalogsSites(): IBaseCollection<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem>;
	SiteCollectionAppCatalogsSites(id: string | number): IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItemCollections;
}

/*********************************************
* TenantCorporateCatalogAccessorQuery
**********************************************/
export interface TenantCorporateCatalogAccessorQuery extends IBaseResult, TenantCorporateCatalogAccessorProps, TenantCorporateCatalogAccessorMethods {
	AvailableApps: IBaseResults<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadataCollectionMethods;
	SiteCollectionAppCatalogsSites: IBaseResults<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItemCollectionMethods;
}

/*********************************************
* TenantCorporateCatalogAccessorMethods
**********************************************/
export interface TenantCorporateCatalogAccessorMethods {
	add(Content?: any, Overwrite?: boolean, Url?: string): IBaseQuery<SP.File, SP.FileQuery> & SP.FileCollections & SP.FileMethods;
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
	getByAbsoluteUrl(absolutePath?: string): IBaseQuery<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItem> & Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SiteCollectionAppCatalogAllowedItemCollections;
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
