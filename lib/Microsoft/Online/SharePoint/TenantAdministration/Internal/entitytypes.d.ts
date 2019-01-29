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
* SPOWebAppServicePrincipalPermissionGrantMethods<T = any>
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrantMethods<T = any> {
	deleteObject(): T;
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
* SPOWebAppServicePrincipalPermissionRequestMethods<T = any>
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequestMethods<T = any> {
	approve(): T;
	deny(): T;
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
* SPOWebAppServicePrincipalCollections<T = any>
**********************************************/
export interface SPOWebAppServicePrincipalCollections<T = any> {
	PermissionGrants(): T;
	PermissionRequests(): T;
}

/*********************************************
* SPOWebAppServicePrincipalQuery<T = any>
**********************************************/
export interface SPOWebAppServicePrincipalQuery<T = any> {
	PermissionGrants(): T;
	PermissionRequests(): T;
}

/*********************************************
* SPOWebAppServicePrincipalMethods<T = any>
**********************************************/
export interface SPOWebAppServicePrincipalMethods<T = any> {
	update(): T;
}
