import { IBaseExecution } from "../../../../../";
import { IBaseCollection } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* ISPOWebAppServicePrincipalPermissionGrant
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionGrant extends SPOWebAppServicePrincipalPermissionGrantProps,SPOWebAppServicePrincipalPermissionGrantMethods,IBaseExecution<SPOWebAppServicePrincipalPermissionGrant> {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionGrant
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrant extends SPOWebAppServicePrincipalPermissionGrantProps, SPOWebAppServicePrincipalPermissionGrantMethods {
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
* SPOWebAppServicePrincipalPermissionGrantMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantMethods {
	deleteObject<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ISPOWebAppServicePrincipalPermissionRequest
**********************************************/
export interface ISPOWebAppServicePrincipalPermissionRequest extends SPOWebAppServicePrincipalPermissionRequestProps,SPOWebAppServicePrincipalPermissionRequestMethods,IBaseExecution<SPOWebAppServicePrincipalPermissionRequest> {

}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequest
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequest extends SPOWebAppServicePrincipalPermissionRequestProps, SPOWebAppServicePrincipalPermissionRequestMethods {
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
* SPOWebAppServicePrincipalPermissionRequestMethods
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestMethods {
	approve<T=Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>(): IBaseExecution<T>;
	deny<T=any>(): IBaseExecution<T>;
}

/*********************************************
* ISPOWebAppServicePrincipal
**********************************************/
export interface ISPOWebAppServicePrincipal extends SPOWebAppServicePrincipalProps,SPOWebAppServicePrincipalMethods,IBaseExecution<SPOWebAppServicePrincipal> {

}

/*********************************************
* SPOWebAppServicePrincipal
**********************************************/
export interface SPOWebAppServicePrincipal extends SPOWebAppServicePrincipalProps, SPOWebAppServicePrincipalMethods {
	AccountEnabled?: boolean;
	AppId?: string;
	ReplyUrls?: Array<string>;
}

/*********************************************
* SPOWebAppServicePrincipalProps
**********************************************/
export interface SPOWebAppServicePrincipalProps {
	PermissionGrants<T=Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>(): IBaseCollection<T>;
	PermissionRequests<T=Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest>(): IBaseCollection<T>;
}

/*********************************************
* SPOWebAppServicePrincipalMethods
**********************************************/
export interface SPOWebAppServicePrincipalMethods {
	update<T=any>(): IBaseExecution<T>;
}
