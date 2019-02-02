import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrant
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrant extends SPOWebAppServicePrincipalPermissionGrantCollections, SPOWebAppServicePrincipalPermissionGrantMethods, IBaseQuery<ISPOWebAppServicePrincipalPermissionGrantQuery> {

}

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrantCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrantCollection extends IBaseResults<SPOWebAppServicePrincipalPermissionGrant>, SPOWebAppServicePrincipalPermissionGrantCollectionMethods {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipalPermissionGrant>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrantQueryCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrantQueryCollection extends IBaseResults<SPOWebAppServicePrincipalPermissionGrantOData>, SPOWebAppServicePrincipalPermissionGrantCollectionMethods {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipalPermissionGrantOData>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrantQuery
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrantQuery extends SPOWebAppServicePrincipalPermissionGrantOData, SPOWebAppServicePrincipalPermissionGrantMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrant
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrant extends IBaseResult, SPOWebAppServicePrincipalPermissionGrantProps, SPOWebAppServicePrincipalPermissionGrantCollections, SPOWebAppServicePrincipalPermissionGrantMethods {

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
* SPOWebAppServicePrincipalPermissionGrantOData
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantOData extends IBaseResult, SPOWebAppServicePrincipalPermissionGrantProps, SPOWebAppServicePrincipalPermissionGrantMethods {

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
export interface ISPOWebAppServicePrincipalPermissionRequest extends SPOWebAppServicePrincipalPermissionRequestCollections, SPOWebAppServicePrincipalPermissionRequestMethods, IBaseQuery<ISPOWebAppServicePrincipalPermissionRequestQuery> {

}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequestCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequestCollection extends IBaseResults<SPOWebAppServicePrincipalPermissionRequest>, SPOWebAppServicePrincipalPermissionRequestCollectionMethods {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipalPermissionRequest>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequestQueryCollection
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequestQueryCollection extends IBaseResults<SPOWebAppServicePrincipalPermissionRequestOData>, SPOWebAppServicePrincipalPermissionRequestCollectionMethods {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipalPermissionRequestOData>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequestQuery
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequestQuery extends SPOWebAppServicePrincipalPermissionRequestOData, SPOWebAppServicePrincipalPermissionRequestMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequest
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequest extends IBaseResult, SPOWebAppServicePrincipalPermissionRequestProps, SPOWebAppServicePrincipalPermissionRequestCollections, SPOWebAppServicePrincipalPermissionRequestMethods {

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
* SPOWebAppServicePrincipalPermissionRequestOData
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestOData extends IBaseResult, SPOWebAppServicePrincipalPermissionRequestProps, SPOWebAppServicePrincipalPermissionRequestMethods {

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
export interface ISPOWebAppServicePrincipal extends SPOWebAppServicePrincipalCollections, SPOWebAppServicePrincipalMethods, IBaseQuery<ISPOWebAppServicePrincipalQuery> {

}

/*********************************************
* ISPOWebAppServicePrincipalCollection
**********************************************/
export interface ISPOWebAppServicePrincipalCollection extends IBaseResults<SPOWebAppServicePrincipal> {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipal>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalQueryCollection
**********************************************/
export interface ISPOWebAppServicePrincipalQueryCollection extends IBaseResults<SPOWebAppServicePrincipalOData> {
	done?: (resolve: (value?: Array<SPOWebAppServicePrincipalOData>) => void) => void;
}

/*********************************************
* ISPOWebAppServicePrincipalQuery
**********************************************/
export interface ISPOWebAppServicePrincipalQuery extends SPOWebAppServicePrincipalOData, SPOWebAppServicePrincipalMethods {

}

/*********************************************
* SPOWebAppServicePrincipal
**********************************************/
export interface SPOWebAppServicePrincipal extends IBaseResult, SPOWebAppServicePrincipalProps, SPOWebAppServicePrincipalCollections, SPOWebAppServicePrincipalMethods {

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
	PermissionGrants(): IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantCollectionMethods;
	PermissionGrants(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantCollections & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantMethods;
	PermissionRequests(): IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestCollectionMethods;
	PermissionRequests(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestCollections & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestMethods;
}

/*********************************************
* SPOWebAppServicePrincipalOData
**********************************************/
export interface SPOWebAppServicePrincipalOData extends IBaseResult, SPOWebAppServicePrincipalProps, SPOWebAppServicePrincipalMethods {
	PermissionGrants: IBaseResults<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrantCollectionMethods;
	PermissionRequests: IBaseResults<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest> & Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequestCollectionMethods;
}

/*********************************************
* SPOWebAppServicePrincipalMethods
**********************************************/
export interface SPOWebAppServicePrincipalMethods {
	update(): IBaseExecution<any>;
}
