import { Base } from "../../../../";
import { Microsoft } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* AppUpgradeAvailability
**********************************************/
export interface AppUpgradeAvailability {
	AssetId?: string;
	IsUpgradeAvailable?: boolean;
}

/*********************************************
* AppUpgradeAvailabilityCollections
**********************************************/
export interface AppUpgradeAvailabilityCollections {

}

/*********************************************
* SPAddinInstanceInfo
**********************************************/
export interface SPAddinInstanceInfo {
	appIdentifier?: string;
	appInstanceId?: any;
	appSource?: string;
	appWebFullUrl?: string;
	appWebId?: any;
	appWebName?: string;
	assetId?: string;
	creationTimeUtc?: any;
	currentSiteId?: any;
	currentWebId?: any;
	currentWebName?: string;
	currentWebUrl?: string;
	installedBy?: string;
	installedSiteId?: any;
	installedWebId?: any;
	installedWebName?: string;
	installedWebUrl?: string;
	launchUrl?: string;
	licensePurchaseTime?: any;
	locale?: string;
	productId?: any;
	purchaserIdentity?: string;
	status?: string;
	tenantAppData?: string;
	tenantAppDataUpdateTime?: any;
	title?: string;
}

/*********************************************
* SPAddinInstanceInfoCollections
**********************************************/
export interface SPAddinInstanceInfoCollections {

}

/*********************************************
* SPAddinPermissionFailedInfo
**********************************************/
export interface SPAddinPermissionFailedInfo {
	appIdentifier?: string;
	errorMessage?: string;
	serverRelativeUrl?: string;
}

/*********************************************
* SPAddinPermissionFailedInfoCollections
**********************************************/
export interface SPAddinPermissionFailedInfoCollections {

}

/*********************************************
* SPAddinPermissionInfo
**********************************************/
export interface SPAddinPermissionInfo {
	absoluteUrl?: string;
	allowAppOnly?: boolean;
	appIdentifier?: string;
	serverRelativeUrl?: string;
	siteCollectionScopedPermissions?: { results: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SPSiteCollectionScopedPermissionInfo> };
	tenantScopedPermissions?: { results: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SPTenantScopedPermissionInfo> };
}

/*********************************************
* SPAddinPermissionInfoCollections
**********************************************/
export interface SPAddinPermissionInfoCollections {

}

/*********************************************
* SPSiteCollectionScopedPermissionInfo
**********************************************/
export interface SPSiteCollectionScopedPermissionInfo {
	listId?: any;
	right?: string;
	siteId?: any;
	webId?: any;
}

/*********************************************
* SPSiteCollectionScopedPermissionInfoCollections
**********************************************/
export interface SPSiteCollectionScopedPermissionInfoCollections {

}

/*********************************************
* SPTenantScopedPermissionInfo
**********************************************/
export interface SPTenantScopedPermissionInfo {
	feature?: string;
	id?: any;
	right?: string;
	scope?: string;
}

/*********************************************
* SPTenantScopedPermissionInfoCollections
**********************************************/
export interface SPTenantScopedPermissionInfoCollections {

}

/*********************************************
* SPAddinPermissionRequest
**********************************************/
export interface SPAddinPermissionRequest {
	appIdentifiers?: { results: Array<string> };
	serverRelativeUrl?: string;
	url?: string;
}

/*********************************************
* SPAddinPermissionRequestCollections
**********************************************/
export interface SPAddinPermissionRequestCollections {

}

/*********************************************
* SPAddinPermissionResponse
**********************************************/
export interface SPAddinPermissionResponse {
	addinPermissions?: { results: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SPAddinPermissionInfo> };
	failedAddins?: { results: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SPAddinPermissionFailedInfo> };
}

/*********************************************
* SPAddinPermissionResponseCollections
**********************************************/
export interface SPAddinPermissionResponseCollections {

}

/*********************************************
* SPAddinPrincipalInfo
**********************************************/
export interface SPAddinPrincipalInfo {
	absoluteUrl?: string;
	appIdentifier?: string;
	serverRelativeUrl?: string;
	title?: string;
}

/*********************************************
* SPAddinPrincipalInfoCollections
**********************************************/
export interface SPAddinPrincipalInfoCollections {

}

/*********************************************
* SPAppAddAndDeployResponseInfomation
**********************************************/
export interface SPAppAddAndDeployResponseInfomation {
	IsFirstTimeDeployed?: boolean;
	ListId?: string;
	ListItemId?: string;
	ListItemUniqueId?: string;
}

/*********************************************
* SPAppAddAndDeployResponseInfomationCollections
**********************************************/
export interface SPAppAddAndDeployResponseInfomationCollections {

}

/*********************************************
* SPAvailableAddinsResponse
**********************************************/
export interface SPAvailableAddinsResponse {
	addins?: { results: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SPAddinInstanceInfo> };
	errorsWithServerRelativeUrl?: { results: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SPErrorWithServerRelativeUrl> };
}

/*********************************************
* SPAvailableAddinsResponseCollections
**********************************************/
export interface SPAvailableAddinsResponseCollections {

}

/*********************************************
* SPErrorWithServerRelativeUrl
**********************************************/
export interface SPErrorWithServerRelativeUrl {
	errorMessage?: string;
	serverRelativeUrl?: string;
}

/*********************************************
* SPErrorWithServerRelativeUrlCollections
**********************************************/
export interface SPErrorWithServerRelativeUrlCollections {

}

/*********************************************
* CardDesign
**********************************************/
export interface CardDesign {
	description?: string;
	id?: any;
	serializedProperties?: string;
	showInToolbox?: boolean;
	title?: string;
}

/*********************************************
* CardDesignCollections
**********************************************/
export interface CardDesignCollections {

}

/*********************************************
* CardDesignFeatures
**********************************************/
export interface CardDesignFeatures {
	catalogType?: number;
	isContextNotAvailable?: boolean;
	isDisabledByTenantAdmin?: boolean;
	isEnabled?: boolean;
	isFlightDeactivated?: boolean;
	isNotAHomeSite?: boolean;
}

/*********************************************
* CardDesignFeaturesCollections
**********************************************/
export interface CardDesignFeaturesCollections {

}

/*********************************************
* SPFailToTriggerUninstallAddinJobResponse
**********************************************/
export interface SPFailToTriggerUninstallAddinJobResponse {
	appInstanceId?: any;
	errorMessage?: string;
	serverRelativeUrl?: string;
}

/*********************************************
* SPFailToTriggerUninstallAddinJobResponseCollections
**********************************************/
export interface SPFailToTriggerUninstallAddinJobResponseCollections {

}

/*********************************************
* SPGetAddinPrincipalsResponse
**********************************************/
export interface SPGetAddinPrincipalsResponse {
	addinPrincipals?: { results: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SPAddinPrincipalInfo> };
	errorsWithServerRelativeUrl?: { results: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SPErrorWithServerRelativeUrl> };
}

/*********************************************
* SPGetAddinPrincipalsResponseCollections
**********************************************/
export interface SPGetAddinPrincipalsResponseCollections {

}

/*********************************************
* SPStoreAppCreateByIdInformation
**********************************************/
export interface SPStoreAppCreateByIdInformation {
	CallerId?: string;
	CMU?: string;
	isUpdatingApp?: boolean;
	Overwrite?: boolean;
	SkipFeatureDeployment?: boolean;
	StoreAssetId?: string;
}

/*********************************************
* SPStoreAppCreateByIdInformationCollections
**********************************************/
export interface SPStoreAppCreateByIdInformationCollections {

}

/*********************************************
* StoreAppCreationInformation
**********************************************/
export interface StoreAppCreationInformation {
	IconUrl?: string;
	Publisher?: string;
	ShortDescription?: string;
	StoreAssetId?: string;
}

/*********************************************
* StoreAppCreationInformationCollections
**********************************************/
export interface StoreAppCreationInformationCollections {

}

/*********************************************
* SPStoreAppRequestInformation
**********************************************/
export interface SPStoreAppRequestInformation {
	AssetId?: string;
	BillingMarket?: string;
	ContentMarket?: string;
	InstallationSiteId?: any;
	InstallationWebId?: any;
	Justification?: string;
	RequestType?: string;
}

/*********************************************
* SPStoreAppRequestInformationCollections
**********************************************/
export interface SPStoreAppRequestInformationCollections {

}

/*********************************************
* SPStoreAppResponseInformation
**********************************************/
export interface SPStoreAppResponseInformation {
	ItemId?: string;
	ListId?: string;
}

/*********************************************
* SPStoreAppResponseInformationCollections
**********************************************/
export interface SPStoreAppResponseInformationCollections {

}

/*********************************************
* SPTriggeredUninstallAddinJobResponse
**********************************************/
export interface SPTriggeredUninstallAddinJobResponse {
	absoluteUrl?: string;
	appInstanceId?: any;
	serverRelativeUrl?: string;
	uninstallJobId?: any;
}

/*********************************************
* SPTriggeredUninstallAddinJobResponseCollections
**********************************************/
export interface SPTriggeredUninstallAddinJobResponseCollections {

}

/*********************************************
* SPUninstallAddinErrorDetail
**********************************************/
export interface SPUninstallAddinErrorDetail {
	correlationId?: any;
	detail?: string;
	exceptionMessage?: string;
	source?: string;
	type?: string;
}

/*********************************************
* SPUninstallAddinErrorDetailCollections
**********************************************/
export interface SPUninstallAddinErrorDetailCollections {

}

/*********************************************
* SPUninstallAddinJobDetail
**********************************************/
export interface SPUninstallAddinJobDetail {
	absoluteUrl?: string;
	appInstanceId?: any;
	errorDetails?: { results: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SPUninstallAddinErrorDetail> };
	jobId?: any;
	serverRelativeUrl?: string;
	siteId?: any;
	taskStartTime?: any;
}

/*********************************************
* SPUninstallAddinJobDetailCollections
**********************************************/
export interface SPUninstallAddinJobDetailCollections {

}

/*********************************************
* SPUninstallAddinRequest
**********************************************/
export interface SPUninstallAddinRequest {
	appInstanceIds?: { results: Array<any> };
	serverRelativeUrl?: string;
	url?: string;
}

/*********************************************
* SPUninstallAddinRequestCollections
**********************************************/
export interface SPUninstallAddinRequestCollections {

}

/*********************************************
* SPUninstallAddinResponse
**********************************************/
export interface SPUninstallAddinResponse {
	executing?: { results: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SPTriggeredUninstallAddinJobResponse> };
	failed?: { results: Array<Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.SPFailToTriggerUninstallAddinJobResponse> };
}

/*********************************************
* SPUninstallAddinResponseCollections
**********************************************/
export interface SPUninstallAddinResponseCollections {

}
