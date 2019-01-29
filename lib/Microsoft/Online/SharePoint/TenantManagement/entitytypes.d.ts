import { Microsoft } from "../../../../";
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
* GetExternalUsersResults
**********************************************/
export interface GetExternalUsersResults {
	TotalUserCount?: number;
	UserCollectionPosition?: number;
}

/*********************************************
* GetExternalUsersResultsCollections
**********************************************/
export interface GetExternalUsersResultsCollections {
	ExternalUserCollection<T=Array<Microsoft.Online.SharePoint.TenantManagement.ExternalUser>>(): T;
}

/*********************************************
* GetExternalUsersResultsQuery
**********************************************/
export interface GetExternalUsersResultsQuery {
	ExternalUserCollection<T=Array<Microsoft.Online.SharePoint.TenantManagement.ExternalUser>>(): T;
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
* Office365Tenant
**********************************************/
export interface Office365Tenant {
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
* Office365TenantMethods
**********************************************/
export interface Office365TenantMethods {
	addPublicCdnOrigin<T=void>(origin?: string): T;
	addSdnProvider<T=void>(identifier?: string, license?: string): T;
	addTenantCdnOrigin<T=void>(cdnType?: number, originUrl?: string): T;
	addTenantTheme<T=boolean>(name?: string, themeJson?: string): T;
	addToCarLibAndCdn<T=void>(cdnType?: number, libUrl?: SP.ResourcePath, displayName?: string, thumbnailUrl?: SP.ResourcePath): T;
	createTenantCdnDefaultOrigins<T=void>(cdnType?: number): T;
	deleteImportProfilePropertiesJob<T=boolean>(jobId?: any): T;
	deleteTenantTheme<T=void>(name?: string): T;
	disableSharingForNonOwnersOfSite<T=void>(siteUrl?: string): T;
	getAllTenantThemes<T=Array<Microsoft.Online.SharePoint.TenantManagement.ThemeProperties>>(): T;
	getExternalUsers<T=Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults>(position?: number, pageSize?: number, filter?: string, sortOrder?: number): T;
	getExternalUsersForSite<T=Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults>(siteUrl?: string, position?: number, pageSize?: number, filter?: string, sortOrder?: number): T;
	getExternalUsersWithSortBy<T=Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults>(position?: number, pageSize?: number, filter?: string, sortPropertyName?: string, sortOrder?: number): T;
	getHideDefaultThemes<T=boolean>(): T;
	getIdleSessionSignOutForUnmanagedDevices<T=string>(): T;
	getImportProfilePropertyJob<T=Microsoft.Online.SharePoint.TenantManagement.ImportProfilePropertiesJobInfo>(jobId?: any): T;
	getImportProfilePropertyJobs<T=Array<Microsoft.Online.SharePoint.TenantManagement.ImportProfilePropertiesJobInfo>>(): T;
	getTenantCdnEnabled<T=boolean>(cdnType?: number): T;
	getTenantCdnOrigins<T=Array<string>>(cdnType?: number): T;
	getTenantCdnPolicies<T=Array<string>>(cdnType?: number): T;
	getTenantTheme<T=Microsoft.Online.SharePoint.TenantManagement.ThemeProperties>(name?: string): T;
	isSharingDisabledForNonOwnersOfSite<T=boolean>(siteUrl?: string): T;
	queueImportProfileProperties<T=any>(idType?: number, sourceDataIdProperty?: string, propertyMap?: Array<SP.KeyValue>, sourceUri?: string): T;
	removeExternalUsers<T=Microsoft.Online.SharePoint.TenantManagement.RemoveExternalUsersResults>(uniqueIds?: Array<string>): T;
	removeFromCarAndCdn<T=void>(remove?: boolean, cdnType?: number, libUrl?: SP.ResourcePath): T;
	removePublicCdnOrigin<T=void>(originId?: string): T;
	removeSdnProvider<T=void>(): T;
	removeTenantCdnOrigin<T=void>(cdnType?: number, originUrl?: string): T;
	revokeAllUserSessions<T=Microsoft.Online.SharePoint.TenantManagement.SPOUserSessionRevocationResult>(userName?: string): T;
	revokeAllUserSessionsByPuid<T=Array<Microsoft.Online.SharePoint.TenantManagement.SPOUserSessionRevocationResult>>(puidList?: Array<string>): T;
	setHideDefaultThemes<T=boolean>(hideDefaultThemes?: boolean): T;
	setIdleSessionSignOutForUnmanagedDevices<T=boolean>(enabled?: boolean, warnAfter?: any, signOutAfter?: any): T;
	setTenantCdnEnabled<T=void>(cdnType?: number, isEnabled?: boolean): T;
	setTenantCdnPolicy<T=void>(cdnType?: number, policy?: number, policyValue?: string): T;
	updateTenantTheme<T=boolean>(name?: string, themeJson?: string): T;
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
