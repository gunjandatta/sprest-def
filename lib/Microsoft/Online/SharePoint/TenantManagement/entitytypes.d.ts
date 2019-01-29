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
* GetExternalUsersResultsCollections<T = any>
**********************************************/
export interface GetExternalUsersResultsCollections<T = any> {
	ExternalUserCollection(): T;
}

/*********************************************
* GetExternalUsersResultsQuery
**********************************************/
export interface GetExternalUsersResultsQuery {
	ExternalUserCollection(): T;
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
* Office365TenantMethods<T = any>
**********************************************/
export interface Office365TenantMethods<T = any> {
	addPublicCdnOrigin(origin?: string): T;
	addSdnProvider(identifier?: string, license?: string): T;
	addTenantCdnOrigin(cdnType?: number, originUrl?: string): T;
	addTenantTheme(name?: string, themeJson?: string): T;
	addToCarLibAndCdn(cdnType?: number, libUrl?: SP.ResourcePath, displayName?: string, thumbnailUrl?: SP.ResourcePath): T;
	createTenantCdnDefaultOrigins(cdnType?: number): T;
	deleteImportProfilePropertiesJob(jobId?: any): T;
	deleteTenantTheme(name?: string): T;
	disableSharingForNonOwnersOfSite(siteUrl?: string): T;
	getAllTenantThemes(): T;
	getExternalUsers(position?: number, pageSize?: number, filter?: string, sortOrder?: number): T;
	getExternalUsersForSite(siteUrl?: string, position?: number, pageSize?: number, filter?: string, sortOrder?: number): T;
	getExternalUsersWithSortBy(position?: number, pageSize?: number, filter?: string, sortPropertyName?: string, sortOrder?: number): T;
	getHideDefaultThemes(): T;
	getIdleSessionSignOutForUnmanagedDevices(): T;
	getImportProfilePropertyJob(jobId?: any): T;
	getImportProfilePropertyJobs(): T;
	getTenantCdnEnabled(cdnType?: number): T;
	getTenantCdnOrigins(cdnType?: number): T;
	getTenantCdnPolicies(cdnType?: number): T;
	getTenantTheme(name?: string): T;
	isSharingDisabledForNonOwnersOfSite(siteUrl?: string): T;
	queueImportProfileProperties(idType?: number, sourceDataIdProperty?: string, propertyMap?: Array<SP.KeyValue>, sourceUri?: string): T;
	removeExternalUsers(uniqueIds?: Array<string>): T;
	removeFromCarAndCdn(remove?: boolean, cdnType?: number, libUrl?: SP.ResourcePath): T;
	removePublicCdnOrigin(originId?: string): T;
	removeSdnProvider(): T;
	removeTenantCdnOrigin(cdnType?: number, originUrl?: string): T;
	revokeAllUserSessions(userName?: string): T;
	revokeAllUserSessionsByPuid(puidList?: Array<string>): T;
	setHideDefaultThemes(hideDefaultThemes?: boolean): T;
	setIdleSessionSignOutForUnmanagedDevices(enabled?: boolean, warnAfter?: any, signOutAfter?: any): T;
	setTenantCdnEnabled(cdnType?: number, isEnabled?: boolean): T;
	setTenantCdnPolicy(cdnType?: number, policy?: number, policyValue?: string): T;
	updateTenantTheme(name?: string, themeJson?: string): T;
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
