import { IBaseCollection, IBaseExecution, IBaseQuery, IBaseResult, IBaseResults } from "../../../../";
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
* ExternalUserCollections
**********************************************/
export interface ExternalUserCollections extends ExternalUserCollectionMethods {

}

/*********************************************
* ExternalUserCollectionMethods
**********************************************/
export interface ExternalUserCollectionMethods {
	getById(uniqueId?: string): IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.ExternalUser> & Microsoft.Online.SharePoint.TenantManagement.ExternalUserCollections;
}

/*********************************************
* IGetExternalUsersResults
**********************************************/
export interface IGetExternalUsersResults extends GetExternalUsersResultsCollections, GetExternalUsersResultsMethods, IBaseQuery<IGetExternalUsersResultsQuery> {

}

/*********************************************
* IGetExternalUsersResultsCollection
**********************************************/
export interface IGetExternalUsersResultsCollection extends IBaseResults<GetExternalUsersResults> {
	done?: (resolve: (value?: Array<GetExternalUsersResults>) => void) => void;
}

/*********************************************
* IGetExternalUsersResultsQueryCollection
**********************************************/
export interface IGetExternalUsersResultsQueryCollection extends IBaseResults<GetExternalUsersResultsOData> {
	done?: (resolve: (value?: Array<GetExternalUsersResultsOData>) => void) => void;
}

/*********************************************
* IGetExternalUsersResultsQuery
**********************************************/
export interface IGetExternalUsersResultsQuery extends GetExternalUsersResultsOData, GetExternalUsersResultsMethods {

}

/*********************************************
* GetExternalUsersResults
**********************************************/
export interface GetExternalUsersResults extends IBaseResult, GetExternalUsersResultsProps, GetExternalUsersResultsCollections, GetExternalUsersResultsMethods {

}

/*********************************************
* GetExternalUsersResultsProps
**********************************************/
export interface GetExternalUsersResultsProps {
	TotalUserCount?: number;
	UserCollectionPosition?: number;
}

/*********************************************
* GetExternalUsersResultsPropMethods
**********************************************/
export interface GetExternalUsersResultsPropMethods {

}

/*********************************************
* GetExternalUsersResultsCollections
**********************************************/
export interface GetExternalUsersResultsCollections extends GetExternalUsersResultsPropMethods {
	ExternalUserCollection(): IBaseCollection<Microsoft.Online.SharePoint.TenantManagement.ExternalUser> & Microsoft.Online.SharePoint.TenantManagement.ExternalUserCollectionMethods;
	ExternalUserCollection(id: string | number): IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.ExternalUser> & Microsoft.Online.SharePoint.TenantManagement.ExternalUserCollections;
}

/*********************************************
* GetExternalUsersResultsOData
**********************************************/
export interface GetExternalUsersResultsOData extends IBaseResult, GetExternalUsersResultsProps, GetExternalUsersResultsMethods {
	ExternalUserCollection: IBaseResults<Microsoft.Online.SharePoint.TenantManagement.ExternalUser> & Microsoft.Online.SharePoint.TenantManagement.ExternalUserCollectionMethods;
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
* GroupCreationParamsCollections
**********************************************/
export interface GroupCreationParamsCollections {

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
* ImportProfilePropertiesJobInfoCollections
**********************************************/
export interface ImportProfilePropertiesJobInfoCollections {

}

/*********************************************
* IOffice365Tenant
**********************************************/
export interface IOffice365Tenant extends Office365TenantCollections, Office365TenantMethods, IBaseQuery<IOffice365TenantQuery> {

}

/*********************************************
* IOffice365TenantCollection
**********************************************/
export interface IOffice365TenantCollection extends IBaseResults<Office365Tenant> {
	done?: (resolve: (value?: Array<Office365Tenant>) => void) => void;
}

/*********************************************
* IOffice365TenantQueryCollection
**********************************************/
export interface IOffice365TenantQueryCollection extends IBaseResults<Office365TenantOData> {
	done?: (resolve: (value?: Array<Office365TenantOData>) => void) => void;
}

/*********************************************
* IOffice365TenantQuery
**********************************************/
export interface IOffice365TenantQuery extends Office365TenantOData, Office365TenantMethods {

}

/*********************************************
* Office365Tenant
**********************************************/
export interface Office365Tenant extends IBaseResult, Office365TenantProps, Office365TenantCollections, Office365TenantMethods {

}

/*********************************************
* Office365TenantProps
**********************************************/
export interface Office365TenantProps {
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
* Office365TenantPropMethods
**********************************************/
export interface Office365TenantPropMethods {

}

/*********************************************
* Office365TenantCollections
**********************************************/
export interface Office365TenantCollections extends Office365TenantPropMethods {

}

/*********************************************
* Office365TenantOData
**********************************************/
export interface Office365TenantOData extends IBaseResult, Office365TenantProps, Office365TenantMethods {

}

/*********************************************
* Office365TenantMethods
**********************************************/
export interface Office365TenantMethods {
	addPublicCdnOrigin(origin?: string): IBaseExecution<any>;
	addSdnProvider(identifier?: string, license?: string): IBaseExecution<any>;
	addTenantCdnOrigin(cdnType?: number, originUrl?: string): IBaseExecution<any>;
	addTenantTheme(name?: string, themeJson?: string): IBaseExecution<boolean>;
	addToCarLibAndCdn(cdnType?: number, libUrl?: SP.ResourcePath, displayName?: string, thumbnailUrl?: SP.ResourcePath): IBaseExecution<any>;
	createTenantCdnDefaultOrigins(cdnType?: number): IBaseExecution<any>;
	deleteImportProfilePropertiesJob(jobId?: any): IBaseExecution<boolean>;
	deleteTenantTheme(name?: string): IBaseExecution<any>;
	disableSharingForNonOwnersOfSite(siteUrl?: string): IBaseExecution<any>;
	getAllTenantThemes(): IBaseCollection<Microsoft.Online.SharePoint.TenantManagement.ThemeProperties>;
	getExternalUsers(position?: number, pageSize?: number, filter?: string, sortOrder?: number): IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults, Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsOData> & Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsCollections;
	getExternalUsersForSite(siteUrl?: string, position?: number, pageSize?: number, filter?: string, sortOrder?: number): IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults, Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsOData> & Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsCollections;
	getExternalUsersWithSortBy(position?: number, pageSize?: number, filter?: string, sortPropertyName?: string, sortOrder?: number): IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults, Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsOData> & Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsCollections;
	getHideDefaultThemes(): IBaseExecution<boolean>;
	getIdleSessionSignOutForUnmanagedDevices(): IBaseExecution<string>;
	getImportProfilePropertyJob(jobId?: any): IBaseExecution<Microsoft.Online.SharePoint.TenantManagement.ImportProfilePropertiesJobInfo>;
	getImportProfilePropertyJobs(): IBaseCollection<Microsoft.Online.SharePoint.TenantManagement.ImportProfilePropertiesJobInfo>;
	getTenantCdnEnabled(cdnType?: number): IBaseExecution<boolean>;
	getTenantCdnOrigins(cdnType?: number): IBaseCollection<string>;
	getTenantCdnPolicies(cdnType?: number): IBaseCollection<string>;
	getTenantTheme(name?: string): IBaseExecution<Microsoft.Online.SharePoint.TenantManagement.ThemeProperties>;
	isSharingDisabledForNonOwnersOfSite(siteUrl?: string): IBaseExecution<boolean>;
	queueImportProfileProperties(idType?: number, sourceDataIdProperty?: string, propertyMap?: Array<SP.KeyValue>, sourceUri?: string): IBaseExecution<any>;
	removeExternalUsers(uniqueIds?: Array<string>): IBaseExecution<Microsoft.Online.SharePoint.TenantManagement.RemoveExternalUsersResults>;
	removeFromCarAndCdn(remove?: boolean, cdnType?: number, libUrl?: SP.ResourcePath): IBaseExecution<any>;
	removePublicCdnOrigin(originId?: string): IBaseExecution<any>;
	removeSdnProvider(): IBaseExecution<any>;
	removeTenantCdnOrigin(cdnType?: number, originUrl?: string): IBaseExecution<any>;
	revokeAllUserSessions(userName?: string): IBaseExecution<Microsoft.Online.SharePoint.TenantManagement.SPOUserSessionRevocationResult>;
	revokeAllUserSessionsByPuid(puidList?: Array<string>): IBaseCollection<Microsoft.Online.SharePoint.TenantManagement.SPOUserSessionRevocationResult>;
	setHideDefaultThemes(hideDefaultThemes?: boolean): IBaseExecution<boolean>;
	setIdleSessionSignOutForUnmanagedDevices(enabled?: boolean, warnAfter?: any, signOutAfter?: any): IBaseExecution<boolean>;
	setTenantCdnEnabled(cdnType?: number, isEnabled?: boolean): IBaseExecution<any>;
	setTenantCdnPolicy(cdnType?: number, policy?: number, policyValue?: string): IBaseExecution<any>;
	updateTenantTheme(name?: string, themeJson?: string): IBaseExecution<boolean>;
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
* RemoveExternalUsersResultsCollections
**********************************************/
export interface RemoveExternalUsersResultsCollections {

}

/*********************************************
* SPOUserSessionRevocationResult
**********************************************/
export interface SPOUserSessionRevocationResult {
	State?: number;
}

/*********************************************
* SPOUserSessionRevocationResultCollections
**********************************************/
export interface SPOUserSessionRevocationResultCollections {

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
* ThemePropertiesCollections
**********************************************/
export interface ThemePropertiesCollections {

}
