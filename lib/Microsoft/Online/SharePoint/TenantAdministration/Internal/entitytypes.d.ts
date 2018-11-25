

/*********************************************
* SPOWebAppServicePrincipalPermissionGrant
**********************************************/
export interface SPOWebAppServicePrincipalPermissionGrant {
	ClientId?: string;
	ConsentType?: string;
	ObjectId?: string;
	Resource?: string;
	ResourceId?: string;
	Scope?: string;
}

/*********************************************
* SPOWebAppServicePrincipalPermissionRequest
**********************************************/
export interface SPOWebAppServicePrincipalPermissionRequest {
	Id?: any;
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
	PermissionGrants?: () => Microsoft.Online.SharePoint.TenantAdministration.Internal.Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipal_PermissionGrants_Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionGrant_PermissionGrantsPartner;
	PermissionRequests?: () => Microsoft.Online.SharePoint.TenantAdministration.Internal.Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipal_PermissionRequests_Microsoft_Online_SharePoint_TenantAdministration_Internal_SPOWebAppServicePrincipalPermissionRequest_PermissionRequestsPartner;
	AccountEnabled?: boolean;
	AppId?: string;
	ReplyUrls?: Array<string>;
}
