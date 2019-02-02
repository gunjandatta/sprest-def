import { IBaseExecution } from "../../../../../";
import { IBaseQuery } from "../../../../../";
import { IBaseCollection } from "../../../../../";
import { IBaseResults } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrant
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrant extends SPOWebAppServicePrincipalPermissionGrantCollections,SPOWebAppServicePrincipalPermissionGrantMethods,IBaseQuery<ISPOWebAppServicePrincipalPermissionGrantQuery> {

}

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrantCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrantCollection extends IBaseResults<SPOWebAppServicePrincipalPermissionGrant>, SPOWebAppServicePrincipalPermissionGrantCollectionMethods {

}

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrantQueryCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrantQueryCollection extends IBaseResults<SPOWebAppServicePrincipalPermissionGrantQuery>, SPOWebAppServicePrincipalPermissionGrantCollectionMethods {

}

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrantQuery
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrantQuery extends SPOWebAppServicePrincipalPermissionGrantQuery, SPOWebAppServicePrincipalPermissionGrantMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrant
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrant extends SPOWebAppServicePrincipalPermissionGrantProps, SPOWebAppServicePrincipalPermissionGrantCollections, SPOWebAppServicePrincipalPermissionGrantMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantProps
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantProps {
	ClientId?: string;
	ConsentType?: string;
	IsDomainIsolated?: boolean;
	ObjectId?: string;
	PackageName?: string;
	Resource?: string;
	ResourceId?: string;
	Scope?: string;
}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantPropMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantPropMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantCollections
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantCollections extends SPOWebAppServicePrincipalPermissionGrantPropMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantCollectionMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantCollectionMethods {
	getByObjectId(objectId?: string): IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantCollections & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantMethods;
}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantQuery
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantQuery extends SPOWebAppServicePrincipalPermissionGrantProps, SPOWebAppServicePrincipalPermissionGrantMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantMethods {
	delete(): IBaseExecution<any>;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequest
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequest extends SPOWebAppServicePrincipalPermissionRequestCollections,SPOWebAppServicePrincipalPermissionRequestMethods,IBaseQuery<ISPOWebAppServicePrincipalPermissionRequestQuery> {

}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequestCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequestCollection extends IBaseResults<SPOWebAppServicePrincipalPermissionRequest>, SPOWebAppServicePrincipalPermissionRequestCollectionMethods {

}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequestQueryCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequestQueryCollection extends IBaseResults<SPOWebAppServicePrincipalPermissionRequestQuery>, SPOWebAppServicePrincipalPermissionRequestCollectionMethods {

}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequestQuery
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequestQuery extends SPOWebAppServicePrincipalPermissionRequestQuery, SPOWebAppServicePrincipalPermissionRequestMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequest
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequest extends SPOWebAppServicePrincipalPermissionRequestProps, SPOWebAppServicePrincipalPermissionRequestCollections, SPOWebAppServicePrincipalPermissionRequestMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestProps
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestProps {
	Id?: any;
	IsDomainIsolated?: boolean;
	PackageApproverName?: string;
	PackageName?: string;
	PackageVersion?: string;
	Resource?: string;
	ResourceId?: string;
	Scope?: string;
	TimeRequested?: any;
}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestPropMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestPropMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestCollections
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestCollections extends SPOWebAppServicePrincipalPermissionRequestPropMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestCollectionMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestCollectionMethods {
	approve(resource?: string, scope?: string): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>;
	getById(id?: any): IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestCollections & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestMethods;
}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestQuery
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestQuery extends SPOWebAppServicePrincipalPermissionRequestProps, SPOWebAppServicePrincipalPermissionRequestMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestMethods {
	approve(): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>;
	deny(): IBaseExecution<any>;
}

/*********************************************
* ISPOWebAppServicePrincipal
**********************************************/
export interface ISPOWebAppServicePrincipal extends SPOWebAppServicePrincipalCollections,SPOWebAppServicePrincipalMethods,IBaseQuery<ISPOWebAppServicePrincipalQuery> {

}

/*********************************************
* ISPOWebAppServicePrincipalCollection
**********************************************/
export interface ISPOWebAppServicePrincipalCollection extends IBaseResults<SPOWebAppServicePrincipal> {

}

/*********************************************
* ISPOWebAppServicePrincipalQueryCollection
**********************************************/
export interface ISPOWebAppServicePrincipalQueryCollection extends IBaseResults<SPOWebAppServicePrincipalQuery> {

}

/*********************************************
* ISPOWebAppServicePrincipalQuery
**********************************************/
export interface ISPOWebAppServicePrincipalQuery extends SPOWebAppServicePrincipalQuery, SPOWebAppServicePrincipalMethods {

}

/*********************************************
* SPOWebAppServicePrincipal
**********************************************/
export interface SPOWebAppServicePrincipal extends SPOWebAppServicePrincipalProps, SPOWebAppServicePrincipalCollections, SPOWebAppServicePrincipalMethods {

}

/*********************************************
* SPOWebAppServicePrincipalProps
**********************************************/
export interface SPOWebAppServicePrincipalProps {
	AccountEnabled?: boolean;
	AppId?: string;
	ReplyUrls?: Array<string>;
}

/*********************************************
* SPOWebAppServicePrincipalPropMethods
**********************************************/
export interface SPOWebAppServicePrincipalPropMethods {

}

/*********************************************
* SPOWebAppServicePrincipalCollections
**********************************************/
export interface SPOWebAppServicePrincipalCollections extends SPOWebAppServicePrincipalPropMethods {
	PermissionGrants(): IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>;
	PermissionGrants(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantCollections & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantMethods;
	PermissionRequests(): IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest>;
	PermissionRequests(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestCollections & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestMethods;
}

/*********************************************
* SPOWebAppServicePrincipalQuery
**********************************************/
export interface SPOWebAppServicePrincipalQuery extends SPOWebAppServicePrincipalProps, SPOWebAppServicePrincipalMethods {
	PermissionGrants: IBaseResults<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>;
	PermissionRequests: IBaseResults<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest>;
}

/*********************************************
* SPOWebAppServicePrincipalMethods
**********************************************/
export interface SPOWebAppServicePrincipalMethods {
	update(): IBaseExecution<any>;
}
