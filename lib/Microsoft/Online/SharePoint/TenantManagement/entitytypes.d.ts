import { IBaseCollection } from "../../../../";
import { Microsoft } from "../../../../";
import { IBaseExecution } from "../../../../";
import { SP } from "../../../../";

/*********************************************
* ExternalUser
**********************************************/
export interface ExternalUser {
	AcceptedAs?: string;
	DisplayName?: string;
	InvitedAs?: string;
	InvitedBy?: string;
	UniqueId?: string;
	UserId?: number;
	WhenCreated?: any;
}

/*********************************************
* IGetExternalUsersResults
**********************************************/
export interface IGetExternalUsersResults extends GetExternalUsersResultsProps,GetExternalUsersResultsMethods,IBaseExecution<GetExternalUsersResults> {

}

/*********************************************
* GetExternalUsersResults
**********************************************/
export interface GetExternalUsersResults extends GetExternalUsersResultsProps, GetExternalUsersResultsMethods {
	TotalUserCount?: number;
	UserCollectionPosition?: number;
}

/*********************************************
* GetExternalUsersResultsProps
**********************************************/
export interface GetExternalUsersResultsProps {
	ExternalUserCollection<T=Microsoft.Online.SharePoint.TenantManagement.ExternalUser>(): IBaseCollection<T>;
}

/*********************************************
* GetExternalUsersResultsMethods
**********************************************/
export interface GetExternalUsersResultsMethods {

}

/*********************************************
* GroupCreationParams
**********************************************/
export interface GroupCreationParams {
	Classification?: string;
	CreationOptions?: Array<string>;
	Description?: string;
	Owners?: Array<string>;
}

/*********************************************
* ImportProfilePropertiesJobInfo
**********************************************/
export interface ImportProfilePropertiesJobInfo {
	Error?: number;
	ErrorMessage?: string;
	JobId?: any;
	LogFolderUri?: string;
	SourceUri?: string;
	State?: number;
}

/*********************************************
* IOffice365Tenant
**********************************************/
export interface IOffice365Tenant extends Office365TenantProps,Office365TenantMethods,IBaseExecution<Office365Tenant> {

}

/*********************************************
* Office365Tenant
**********************************************/
export interface Office365Tenant extends Office365TenantProps, Office365TenantMethods {
	AllowDownloadingNonWebViewableFiles?: boolean;
	AllowedDomainListForSyncClient?: Array<any>;
	AllowEditing?: boolean;
	AllowLimitedAccessOnUnmanagedDevices?: boolean;
	AllowSelectSGsInODBList?: string;
	ApplyAppEnforcedRestrictionsToAdHocRecipients?: boolean;
	BccExternalSharingInvitations?: boolean;
	BccExternalSharingInvitationsList?: string;
	BlockAccessOnUnmanagedDevices?: boolean;
	BlockDownloadOfAllFilesForGuests?: boolean;
	BlockDownloadOfAllFilesOnUnmanagedDevices?: boolean;
	BlockDownloadOfViewableFilesForGuests?: boolean;
	BlockDownloadOfViewableFilesOnUnmanagedDevices?: boolean;
	BlockMacSync?: boolean;
	CommentsOnFilesDisabled?: boolean;
	CommentsOnSitePagesDisabled?: boolean;
	ConditionalAccessPolicy?: number;
	ContentTypeSyncSiteTemplatesList?: Array<string>;
	CustomizedExternalSharingServiceUrl?: string;
	DefaultLinkPermission?: number;
	DefaultSharingLinkType?: number;
	DisplayStartASiteOption?: boolean;
	EmailAttestationEnabled?: boolean;
	EmailAttestationReAuthDays?: number;
	EmailAttestationRequired?: boolean;
	EnableGuestSignInAcceleration?: boolean;
	ExcludedFileExtensionsForSyncClient?: Array<string>;
	ExternalServicesEnabled?: boolean;
	FileAnonymousLinkType?: number;
	FilePickerExternalImageSearchEnabled?: boolean;
	FolderAnonymousLinkType?: number;
	GetCentralAssetRepo?: Microsoft.SharePoint.Administration.CentralAssetRepository;
	GuestSharingGroupAllowList?: string;
	HideSyncButtonOnODB?: boolean;
	IPAddressAllowList?: string;
	IPAddressEnforcement?: boolean;
	IPAddressWACTokenLifetime?: number;
	IsUnmanagedSyncClientForTenantRestricted?: boolean;
	IsUnmanagedSyncClientRestrictionFlightEnabled?: boolean;
	LegacyAuthProtocolsEnabled?: boolean;
	LimitedAccessFileType?: number;
	MobileFriendlyUrlEnabled?: boolean;
	MySitesPublicEnabled?: boolean;
	NotificationsInOneDriveForBusinessEnabled?: boolean;
	NotificationsInSharePointEnabled?: boolean;
	NotifyOwnersWhenInvitationsAccepted?: boolean;
	NotifyOwnersWhenItemsReshared?: boolean;
	ODBAccessRequests?: number;
	ODBMembersCanShare?: number;
	ODBSharingCapability?: number;
	OfficeClientADALDisabled?: boolean;
	OneDriveForGuestsEnabled?: boolean;
	OwnerAnonymousNotification?: boolean;
	PreventExternalUsersFromResharing?: boolean;
	ProvisionSharedWithEveryoneFolder?: boolean;
	PublicCdnAllowedFileTypes?: string;
	PublicCdnEnabled?: boolean;
	PublicCdnOrigins?: Array<string>;
	RequireAcceptingAccountMatchInvitedAccount?: boolean;
	RequireAnonymousLinksExpireInDays?: number;
	SearchResolveExactEmailOrUPN?: boolean;
	SharingAllowedDomainList?: string;
	SharingBlockedDomainList?: string;
	SharingCapability?: number;
	SharingDomainRestrictionMode?: number;
	ShowAllUsersClaim?: boolean;
	ShowEveryoneClaim?: boolean;
	ShowEveryoneExceptExternalUsersClaim?: boolean;
	ShowNGSCDialogForSyncOnODB?: boolean;
	ShowPeoplePickerSuggestionsForGuestUsers?: boolean;
	SignInAccelerationDomain?: string;
	SocialBarOnSitePagesDisabled?: boolean;
	StartASiteFormUrl?: string;
	SyncPrivacyProfileProperties?: boolean;
	UseFindPeopleInPeoplePicker?: boolean;
	UsePersistentCookiesForExplorerView?: boolean;
	UserVoiceForFeedbackEnabled?: boolean;
	WhoCanShareAllowList?: string;
}

/*********************************************
* Office365TenantProps
**********************************************/
export interface Office365TenantProps {

}

/*********************************************
* Office365TenantMethods
**********************************************/
export interface Office365TenantMethods {
	addPublicCdnOrigin<T=any>(origin?: string): IBaseExecution<T>;
	addSdnProvider<T=any>(identifier?: string, license?: string): IBaseExecution<T>;
	addTenantCdnOrigin<T=any>(cdnType?: number, originUrl?: string): IBaseExecution<T>;
	addTenantTheme<T=boolean>(name?: string, themeJson?: string): IBaseExecution<T>;
	addToCarLibAndCdn<T=any>(cdnType?: number, libUrl?: SP.ResourcePath, displayName?: string, thumbnailUrl?: SP.ResourcePath): IBaseExecution<T>;
	createTenantCdnDefaultOrigins<T=any>(cdnType?: number): IBaseExecution<T>;
	deleteImportProfilePropertiesJob<T=boolean>(jobId?: any): IBaseExecution<T>;
	deleteTenantTheme<T=any>(name?: string): IBaseExecution<T>;
	disableSharingForNonOwnersOfSite<T=any>(siteUrl?: string): IBaseExecution<T>;
	getAllTenantThemes<T=Array<Microsoft.Online.SharePoint.TenantManagement.ThemeProperties>>(): IBaseExecution<T>;
	getExternalUsers<T=Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults>(position?: number, pageSize?: number, filter?: string, sortOrder?: number): IBaseExecution<T>;
	getExternalUsersForSite<T=Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults>(siteUrl?: string, position?: number, pageSize?: number, filter?: string, sortOrder?: number): IBaseExecution<T>;
	getExternalUsersWithSortBy<T=Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults>(position?: number, pageSize?: number, filter?: string, sortPropertyName?: string, sortOrder?: number): IBaseExecution<T>;
	getHideDefaultThemes<T=boolean>(): IBaseExecution<T>;
	getIdleSessionSignOutForUnmanagedDevices<T=string>(): IBaseExecution<T>;
	getImportProfilePropertyJob<T=Microsoft.Online.SharePoint.TenantManagement.ImportProfilePropertiesJobInfo>(jobId?: any): IBaseExecution<T>;
	getImportProfilePropertyJobs<T=Array<Microsoft.Online.SharePoint.TenantManagement.ImportProfilePropertiesJobInfo>>(): IBaseExecution<T>;
	getTenantCdnEnabled<T=boolean>(cdnType?: number): IBaseExecution<T>;
	getTenantCdnOrigins<T=Array<string>>(cdnType?: number): IBaseExecution<T>;
	getTenantCdnPolicies<T=Array<string>>(cdnType?: number): IBaseExecution<T>;
	getTenantTheme<T=Microsoft.Online.SharePoint.TenantManagement.ThemeProperties>(name?: string): IBaseExecution<T>;
	isSharingDisabledForNonOwnersOfSite<T=boolean>(siteUrl?: string): IBaseExecution<T>;
	queueImportProfileProperties<T=any>(idType?: number, sourceDataIdProperty?: string, propertyMap?: Array<SP.KeyValue>, sourceUri?: string): IBaseExecution<T>;
	removeExternalUsers<T=Microsoft.Online.SharePoint.TenantManagement.RemoveExternalUsersResults>(uniqueIds?: Array<string>): IBaseExecution<T>;
	removeFromCarAndCdn<T=any>(remove?: boolean, cdnType?: number, libUrl?: SP.ResourcePath): IBaseExecution<T>;
	removePublicCdnOrigin<T=any>(originId?: string): IBaseExecution<T>;
	removeSdnProvider<T=any>(): IBaseExecution<T>;
	removeTenantCdnOrigin<T=any>(cdnType?: number, originUrl?: string): IBaseExecution<T>;
	revokeAllUserSessions<T=Microsoft.Online.SharePoint.TenantManagement.SPOUserSessionRevocationResult>(userName?: string): IBaseExecution<T>;
	revokeAllUserSessionsByPuid<T=Array<Microsoft.Online.SharePoint.TenantManagement.SPOUserSessionRevocationResult>>(puidList?: Array<string>): IBaseExecution<T>;
	setHideDefaultThemes<T=boolean>(hideDefaultThemes?: boolean): IBaseExecution<T>;
	setIdleSessionSignOutForUnmanagedDevices<T=boolean>(enabled?: boolean, warnAfter?: any, signOutAfter?: any): IBaseExecution<T>;
	setTenantCdnEnabled<T=any>(cdnType?: number, isEnabled?: boolean): IBaseExecution<T>;
	setTenantCdnPolicy<T=any>(cdnType?: number, policy?: number, policyValue?: string): IBaseExecution<T>;
	updateTenantTheme<T=boolean>(name?: string, themeJson?: string): IBaseExecution<T>;
}

/*********************************************
* RemoveExternalUsersResults
**********************************************/
export interface RemoveExternalUsersResults {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	RemoveFailed?: Array<string>;
	RemoveSucceeded?: Array<string>;
}

/*********************************************
* SPOUserSessionRevocationResult
**********************************************/
export interface SPOUserSessionRevocationResult {
	State?: number;
}

/*********************************************
* ThemeProperties
**********************************************/
export interface ThemeProperties {
	IsInverted?: boolean;
	Name?: string;
	Palette?: Array<SP.KeyValue>;
}

/*********************************************
* IExternalUserCollection
**********************************************/
export interface IExternalUserCollection extends ExternalUserCollectionProps,ExternalUserCollectionMethods,IBaseExecution<ExternalUserCollection> {

}

/*********************************************
* ExternalUserCollection
**********************************************/
export interface ExternalUserCollection extends ExternalUserCollectionProps, ExternalUserCollectionMethods {

}

/*********************************************
* ExternalUserCollectionProps
**********************************************/
export interface ExternalUserCollectionProps {

}

/*********************************************
* ExternalUserCollectionMethods
**********************************************/
export interface ExternalUserCollectionMethods {
	getById<T=Microsoft.Online.SharePoint.TenantManagement.ExternalUser>(uniqueId?: string): IBaseExecution<T>;
}
