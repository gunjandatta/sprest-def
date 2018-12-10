import { Microsoft } from "../../../../../";

/*********************************************
* SPOWebAppServicePrincipalPermissionGrant
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrant {
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
* SPOWebAppServicePrincipalPermissionRequest
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequest {
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
* SPOWebAppServicePrincipal
**********************************************/
export interface SPOWebAppServicePrincipal {
	AccountEnabled?: boolean;
	AppId?: string;
	ReplyUrls?: Array<string>;
}

/*********************************************
* SPOWebAppServicePrincipalCollections
**********************************************/
export interface SPOWebAppServicePrincipalCollections {
	PermissionGrants<T=Array<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>>(): T;
	PermissionRequests<T=Array<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest>>(): T;
}

/*********************************************
* SPOWebAppServicePrincipalQuery
**********************************************/
export interface SPOWebAppServicePrincipalQuery {
	PermissionGrants<T=Array<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>>(): T;
	PermissionRequests<T=Array<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest>>(): T;
}
