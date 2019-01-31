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
* ISPOWebAppServicePrincipalPermissionGrantQuery
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrantQuery extends SPOWebAppServicePrincipalPermissionGrantQuery,SPOWebAppServicePrincipalPermissionGrantMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrant
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrant extends SPOWebAppServicePrincipalPermissionGrantCollections, SPOWebAppServicePrincipalPermissionGrantMethods {
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
* SPOWebAppServicePrincipalPermissionGrantProps
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantProps {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantCollections
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantCollections extends SPOWebAppServicePrincipalPermissionGrantProps {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantQuery
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantQuery extends SPOWebAppServicePrincipalPermissionGrantProps {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrantMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantMethods {
	deleteObject(): IBaseExecution<any>;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequest
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequest extends SPOWebAppServicePrincipalPermissionRequestCollections,SPOWebAppServicePrincipalPermissionRequestMethods,IBaseQuery<ISPOWebAppServicePrincipalPermissionRequestQuery> {

}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequestQuery
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequestQuery extends SPOWebAppServicePrincipalPermissionRequestQuery,SPOWebAppServicePrincipalPermissionRequestMethods {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequest
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequest extends SPOWebAppServicePrincipalPermissionRequestCollections, SPOWebAppServicePrincipalPermissionRequestMethods {
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
* SPOWebAppServicePrincipalPermissionRequestProps
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestProps {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestCollections
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestCollections extends SPOWebAppServicePrincipalPermissionRequestProps {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequestQuery
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestQuery extends SPOWebAppServicePrincipalPermissionRequestProps {

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
* ISPOWebAppServicePrincipalQuery
**********************************************/
export interface ISPOWebAppServicePrincipalQuery extends SPOWebAppServicePrincipalQuery,SPOWebAppServicePrincipalMethods {

}

/*********************************************
* SPOWebAppServicePrincipal
**********************************************/
export interface SPOWebAppServicePrincipal extends SPOWebAppServicePrincipalCollections, SPOWebAppServicePrincipalMethods {
	AccountEnabled?: boolean;
	AppId?: string;
	ReplyUrls?: Array<string>;
}

/*********************************************
* SPOWebAppServicePrincipalProps
**********************************************/
export interface SPOWebAppServicePrincipalProps {

}

/*********************************************
* SPOWebAppServicePrincipalCollections
**********************************************/
export interface SPOWebAppServicePrincipalCollections extends SPOWebAppServicePrincipalProps {
	PermissionGrants(): IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>;
	PermissionRequests(): IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest>;
}

/*********************************************
* SPOWebAppServicePrincipalQuery
**********************************************/
export interface SPOWebAppServicePrincipalQuery extends SPOWebAppServicePrincipalProps {
	PermissionGrants: IBaseResults<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>;
	PermissionRequests: IBaseResults<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest>;
}

/*********************************************
* SPOWebAppServicePrincipalMethods
**********************************************/
export interface SPOWebAppServicePrincipalMethods {
	update(): IBaseExecution<any>;
}
