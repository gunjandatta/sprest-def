

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
* SPOWebAppServicePrincipalMethods
**********************************************/
export interface SPOWebAppServicePrincipalMethods extends SPOWebAppServicePrincipal {
	PermissionGrants?: () => Array<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>;
	PermissionRequests?: () => Array<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest>;
}

/*********************************************
* SPOWebAppServicePrincipalQuery
**********************************************/
export interface SPOWebAppServicePrincipalQuery extends SPOWebAppServicePrincipal {
	PermissionGrants?: Array<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionGrant>;
	PermissionRequests?: Array<Microsoft.Online.SharePoint.TenantAdministration.Internal.SPOWebAppServicePrincipalPermissionRequest>;
}
