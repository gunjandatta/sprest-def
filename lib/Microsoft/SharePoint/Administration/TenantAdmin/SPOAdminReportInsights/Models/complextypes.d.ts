import { Base } from "../../../../../../";
import { Microsoft } from "../../../../../../";

/*********************************************
* DatasetMetadataInfo
**********************************************/
export interface DatasetMetadataInfo {
	createdDate?: string;
	downloadUrl?: string;
	id?: string;
	lastSyncedDate?: string;
	subType?: string;
}

/*********************************************
* DatasetMetadataInfoCollections
**********************************************/
export interface DatasetMetadataInfoCollections {

}

/*********************************************
* DatasetMetadataRequestInfo
**********************************************/
export interface DatasetMetadataRequestInfo {
	feature?: string;
	subTypes?: { results: Array<string> };
}

/*********************************************
* DatasetMetadataRequestInfoCollections
**********************************************/
export interface DatasetMetadataRequestInfoCollections {

}

/*********************************************
* DatasetMetadataResponse
**********************************************/
export interface DatasetMetadataResponse {
	featureId?: string;
	sitePermissions?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.SPOAdminReportInsights.Models.DatasetMetadataInfo> };
	TenantAdminSiteLifeCycle?: { results: Array<Microsoft.SharePoint.Administration.TenantAdmin.SPOAdminReportInsights.Models.DatasetMetadataInfo> };
}

/*********************************************
* DatasetMetadataResponseCollections
**********************************************/
export interface DatasetMetadataResponseCollections {

}

/*********************************************
* DatasetPolicyMetadataInfo
**********************************************/
export interface DatasetPolicyMetadataInfo {
	feature?: string;
	featureId?: string;
	policyName?: string;
}

/*********************************************
* DatasetPolicyMetadataInfoCollections
**********************************************/
export interface DatasetPolicyMetadataInfoCollections {

}
