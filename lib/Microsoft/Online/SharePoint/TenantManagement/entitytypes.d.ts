import { Base } from "../../../../";
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
	IsCrossTenant?: boolean;
	LoginName?: string;
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
	getById(uniqueId?: string): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.ExternalUser> & Microsoft.Online.SharePoint.TenantManagement.ExternalUserCollections;
}

/*********************************************
* IGetExternalUsersResults
**********************************************/
export interface IGetExternalUsersResults extends GetExternalUsersResultsCollections, GetExternalUsersResultsMethods, Base.IBaseQuery<GetExternalUsersResults, IGetExternalUsersResultsQuery> {

}

/*********************************************
* IGetExternalUsersResultsCollection
**********************************************/
export interface IGetExternalUsersResultsCollection extends Base.IBaseResults<GetExternalUsersResults> {
	done?: (resolve: (value?: Array<GetExternalUsersResults>) => void) => void;
}

/*********************************************
* IGetExternalUsersResultsQueryCollection
**********************************************/
export interface IGetExternalUsersResultsQueryCollection extends Base.IBaseResults<GetExternalUsersResultsOData> {
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
export interface GetExternalUsersResults extends Base.IBaseResult, GetExternalUsersResultsProps, GetExternalUsersResultsCollections, GetExternalUsersResultsMethods {

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
	ExternalUserCollection(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantManagement.ExternalUser> & Microsoft.Online.SharePoint.TenantManagement.ExternalUserCollectionMethods;
	ExternalUserCollection(id: string | number): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.ExternalUser> & Microsoft.Online.SharePoint.TenantManagement.ExternalUserCollections;
}

/*********************************************
* GetExternalUsersResultsOData
**********************************************/
export interface GetExternalUsersResultsOData extends Base.IBaseResult, GetExternalUsersResultsProps, GetExternalUsersResultsMethods {
	ExternalUserCollection: Base.IBaseResults<Microsoft.Online.SharePoint.TenantManagement.ExternalUser> & Microsoft.Online.SharePoint.TenantManagement.ExternalUserCollectionMethods;
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
	CreationOptions?: { results: Array<string> };
	Description?: string;
	Owners?: { results: Array<string> };
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
export interface IOffice365Tenant extends Office365TenantCollections, Office365TenantMethods, Base.IBaseQuery<Office365Tenant, IOffice365TenantQuery> {

}

/*********************************************
* IOffice365TenantCollection
**********************************************/
export interface IOffice365TenantCollection extends Base.IBaseResults<Office365Tenant> {
	done?: (resolve: (value?: Array<Office365Tenant>) => void) => void;
}

/*********************************************
* IOffice365TenantQueryCollection
**********************************************/
export interface IOffice365TenantQueryCollection extends Base.IBaseResults<Office365TenantOData> {
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
export interface Office365Tenant extends Base.IBaseResult, Office365TenantProps, Office365TenantCollections, Office365TenantMethods {

}

/*********************************************
* Office365TenantProps
**********************************************/
export interface Office365TenantProps {
	AddressbarLinkPermission?: number;
	AllowAnonymousMeetingParticipantsToAccessWhiteboards?: number;
	AllowCommentsTextOnEmailEnabled?: boolean;
	AllowDownloadingNonWebViewableFiles?: boolean;
	AllowedDomainListForSyncClient?: { results: Array<any> };
	AllowEditing?: boolean;
	AllowEveryoneExceptExternalUsersClaimInPrivateSite?: boolean;
	AllowGuestUserShareToUsersNotInSiteCollection?: boolean;
	AllowLimitedAccessOnUnmanagedDevices?: boolean;
	AllowOverrideForBlockUserInfoVisibility?: boolean;
	AllowSelectSecurityGroupsInSPSitesList?: { results: Array<string> };
	AllowSelectSGsInODBList?: { results: Array<string> };
	AllowSharingOutsideRestrictedAccessControlGroups?: boolean;
	AnyoneLinkTrackUsers?: boolean;
	AppBypassInformationBarriers?: boolean;
	ApplyAppEnforcedRestrictionsToAdHocRecipients?: boolean;
	AppOnlyBypassPeoplePickerPolicies?: boolean;
	AuthContextResilienceMode?: number;
	BccExternalSharingInvitations?: boolean;
	BccExternalSharingInvitationsList?: string;
	BlockAccessOnUnmanagedDevices?: boolean;
	BlockAppAccessWithAuthenticationContext?: boolean;
	BlockDownloadFileTypeIds?: { results: Array<number> };
	BlockDownloadFileTypePolicy?: boolean;
	BlockDownloadLinksFileType?: number;
	BlockDownloadOfAllFilesForGuests?: boolean;
	BlockDownloadOfAllFilesOnUnmanagedDevices?: boolean;
	BlockDownloadOfViewableFilesForGuests?: boolean;
	BlockDownloadOfViewableFilesOnUnmanagedDevices?: boolean;
	BlockMacSync?: boolean;
	BlockUserInfoVisibility?: string;
	BlockUserInfoVisibilityInOneDrive?: number;
	BlockUserInfoVisibilityInSharePoint?: number;
	BusinessConnectivityServiceDisabled?: boolean;
	CommentsOnFilesDisabled?: boolean;
	CommentsOnListItemsDisabled?: boolean;
	CommentsOnSitePagesDisabled?: boolean;
	ConditionalAccessPolicy?: number;
	ConditionalAccessPolicyErrorHelpLink?: string;
	ContentTypeSyncSiteTemplatesList?: { results: Array<string> };
	CoreBlockGuestsAsSiteAdmin?: number;
	CoreDefaultLinkToExistingAccess?: boolean;
	CoreDefaultShareLinkRole?: number;
	CoreDefaultShareLinkScope?: number;
	CoreLoopDefaultSharingLinkRole?: number;
	CoreLoopDefaultSharingLinkScope?: number;
	CoreRequestFilesLinkEnabled?: boolean;
	CoreRequestFilesLinkExpirationInDays?: number;
	CoreSharingCapability?: number;
	CustomizedExternalSharingServiceUrl?: string;
	DefaultContentCenterSite?: Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker;
	DefaultLinkPermission?: number;
	DefaultODBMode?: string;
	DefaultSharingLinkType?: number;
	DenySelectSecurityGroupsInSPSitesList?: { results: Array<string> };
	DenySelectSGsInODBList?: { results: Array<string> };
	DisableAddToOneDrive?: boolean;
	DisableBackToClassic?: boolean;
	DisableCustomAppAuthentication?: boolean;
	DisabledModernListTemplateIds?: { results: Array<any> };
	DisableOutlookPSTVersionTrimming?: boolean;
	DisablePersonalListCreation?: boolean;
	DisableSpacesActivation?: boolean;
	DisableVivaConnectionsAnalytics?: boolean;
	DisplayStartASiteOption?: boolean;
	EmailAttestationEnabled?: boolean;
	EmailAttestationReAuthDays?: number;
	EmailAttestationRequired?: boolean;
	EnableAutoExpirationVersionTrim?: boolean;
	EnableAutoNewsDigest?: boolean;
	EnableAzureADB2BIntegration?: boolean;
	EnableGuestSignInAcceleration?: boolean;
	EnablePromotedFileHandlers?: boolean;
	EnableRestrictedAccessControl?: boolean;
	EnableVersionExpirationSetting?: boolean;
	ESignatureEnabled?: boolean;
	ESignatureSiteInfoList?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker> };
	ESignatureSiteList?: { results: Array<any> };
	ESignatureSiteListFileName?: string;
	ESignatureThirdPartyProviderInfoList?: { results: Array<string> };
	ESignatureThirdPartyProviderList?: { results: Array<string> };
	ESignatureThirdPartyProviderListFileName?: string;
	ExcludedBlockDownloadGroupIds?: { results: Array<any> };
	ExcludedFileExtensionsForSyncClient?: { results: Array<string> };
	ExemptNativeUsersFromTenantLevelRestricedAccessControl?: boolean;
	ExpireVersionsAfterDays?: number;
	ExternalServicesEnabled?: boolean;
	ExternalUserExpirationRequired?: boolean;
	ExternalUserExpireInDays?: number;
	FileAnonymousLinkType?: number;
	FilePickerExternalImageSearchEnabled?: boolean;
	FileVersionPolicyXml?: string;
	FolderAnonymousLinkType?: number;
	GetOrgAssets?: Microsoft.SharePoint.Administration.OrgAssets;
	GuestSharingGroupAllowList?: string;
	HasAdminCompletedCUConfiguration?: boolean;
	HideSyncButtonOnDocLib?: boolean;
	HideSyncButtonOnODB?: boolean;
	IBImplicitGroupBased?: boolean;
	ImageTaggingOption?: number;
	ImageTaggingSiteInfoList?: { results: Array<Microsoft.Online.SharePoint.TenantAdministration.SiteInfoForSitePicker> };
	ImageTaggingSiteList?: { results: Array<any> };
	ImageTaggingSiteListFileName?: string;
	IncludeAtAGlanceInShareEmails?: boolean;
	InformationBarriersSuspension?: boolean;
	IPAddressAllowList?: string;
	IPAddressEnforcement?: boolean;
	IPAddressWACTokenLifetime?: number;
	IsUnmanagedSyncClientForTenantRestricted?: boolean;
	IsUnmanagedSyncClientRestrictionFlightEnabled?: boolean;
	LegacyAuthProtocolsEnabled?: boolean;
	LegacyBrowserAuthProtocolsEnabled?: boolean;
	LimitedAccessFileType?: number;
	MachineLearningCaptureEnabled?: boolean;
	MajorVersionLimit?: number;
	MarkAllFilesAsSensitiveByDefault?: boolean;
	MassDeleteNotificationDisabled?: boolean;
	MediaTranscription?: number;
	MediaTranscriptionAutomaticFeatures?: number;
	MobileFriendlyUrlEnabled?: boolean;
	MySitesPublicEnabled?: boolean;
	NotificationsInOneDriveForBusinessEnabled?: boolean;
	NotificationsInSharePointEnabled?: boolean;
	NotifyOwnersWhenItemsReshared?: boolean;
	ODBAccessRequests?: number;
	ODBMembersCanShare?: number;
	ODBSensitivityRefreshWindowInHours?: number;
	ODBSharingCapability?: number;
	OfficeClientADALDisabled?: boolean;
	OneDriveBlockGuestsAsSiteAdmin?: number;
	OneDriveDefaultLinkToExistingAccess?: boolean;
	OneDriveDefaultShareLinkRole?: number;
	OneDriveDefaultShareLinkScope?: number;
	OneDriveForGuestsEnabled?: boolean;
	OneDriveLoopDefaultSharingLinkRole?: number;
	OneDriveLoopDefaultSharingLinkScope?: number;
	OneDriveRequestFilesLinkEnabled?: boolean;
	OneDriveRequestFilesLinkExpirationInDays?: number;
	OwnerAnonymousNotification?: boolean;
	PreventExternalUsersFromResharing?: boolean;
	ProvisionSharedWithEveryoneFolder?: boolean;
	PublicCdnAllowedFileTypes?: string;
	PublicCdnEnabled?: boolean;
	PublicCdnOrigins?: { results: Array<string> };
	RecycleBinRetentionPeriod?: number;
	ReduceTempTokenLifetimeEnabled?: boolean;
	ReduceTempTokenLifetimeValue?: number;
	RequireAnonymousLinksExpireInDays?: number;
	RestrictedAccessControlForOneDriveErrorHelpLink?: string;
	RestrictedAccessControlforSitesErrorHelpLink?: string;
	SearchResolveExactEmailOrUPN?: boolean;
	SelfServiceSiteCreationDisabled?: boolean;
	SharingAllowedDomainList?: string;
	SharingBlockedDomainList?: string;
	SharingCapability?: number;
	SharingDomainRestrictionMode?: number;
	ShowAllUsersClaim?: boolean;
	ShowEveryoneClaim?: boolean;
	ShowEveryoneExceptExternalUsersClaim?: boolean;
	ShowNGSCDialogForSyncOnODB?: boolean;
	ShowOpenInDesktopOptionForSyncedFiles?: boolean;
	ShowPeoplePickerGroupSuggestionsForIB?: boolean;
	ShowPeoplePickerSuggestionsForGuestUsers?: boolean;
	SignInAccelerationDomain?: string;
	SiteOwnerManageLegacyServicePrincipalEnabled?: boolean;
	SocialBarOnSitePagesDisabled?: boolean;
	SPJitDlpPolicyData?: Microsoft.SharePoint.AuthPolicy.SPJitDlpPolicyData;
	StartASiteFormUrl?: string;
	StopNew2010Workflows?: boolean;
	StopNew2013Workflows?: boolean;
	StreamLaunchConfig?: number;
	StreamLaunchConfigLastUpdated?: any;
	StreamLaunchConfigUpdateCount?: number;
	SyncPrivacyProfileProperties?: boolean;
	SyntexBillingSubscriptionSettings?: Microsoft.Online.SharePoint.TenantAdministration.SyntexBillingContext;
	SyntexInternalFeatureFlags?: { results: Array<SP.KeyValue> };
	SyntexMediaAnalyticsSettings?: Microsoft.Online.SharePoint.TenantAdministration.SyntexPremiumFeatureSettings;
	SyntexPaygFeatureActivations?: { results: Array<SP.KeyValue> };
	SyntexPlaybackTranscriptTranslationSettings?: Microsoft.Online.SharePoint.TenantAdministration.SyntexPremiumFeatureSettings;
	SyntexPowerAppsEnvironmentsContext?: Microsoft.Online.SharePoint.TenantAdministration.SyntexPowerAppsEnvironmentsContext;
	TlsTokenBindingPolicyValue?: number;
	UseFindPeopleInPeoplePicker?: boolean;
	UsePersistentCookiesForExplorerView?: boolean;
	ViewersCanCommentOnMediaDisabled?: boolean;
	ViewInFileExplorerEnabled?: boolean;
	WhoCanShareAllowList?: string;
	Workflow2010Disabled?: boolean;
	Workflows2013State?: number;
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
export interface Office365TenantOData extends Base.IBaseResult, Office365TenantProps, Office365TenantMethods {

}

/*********************************************
* Office365TenantMethods
**********************************************/
export interface Office365TenantMethods {
	addPublicCdnOrigin(origin?: string): Base.IBaseExecution<any>;
	addSdnProvider(identifier?: string, license?: string): Base.IBaseExecution<any>;
	addTenantCdnOrigin(cdnType?: number, originUrl?: string): Base.IBaseExecution<any>;
	addTenantTheme(name?: string, themeJson?: string): Base.IBaseExecution<boolean>;
	addToOrgAssetsLibAndCdn(cdnType?: number, libUrl?: SP.ResourcePath, thumbnailUrl?: SP.ResourcePath, orgAssetType?: number, defaultOriginAdded?: boolean): Base.IBaseExecution<any>;
	addToOrgAssetsWithConfig(cdnType?: number, libUrl?: SP.ResourcePath, thumbnailUrl?: SP.ResourcePath, orgAssetType?: number, defaultOriginAdded?: boolean, configParam?: Microsoft.SharePoint.BrandCenter.OrgAssetsLibraryConfigParam): Base.IBaseExecution<any>;
	createTenantCdnDefaultOrigins(cdnType?: number): Base.IBaseExecution<any>;
	deleteImportProfilePropertiesJob(jobId?: any): Base.IBaseExecution<boolean>;
	deleteTenantTheme(name?: string): Base.IBaseExecution<any>;
	disableSharingForNonOwnersOfSite(siteUrl?: string): Base.IBaseExecution<any>;
	getAllTenantThemes(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantManagement.ThemeProperties>;
	getCustomFontsMinorVersion(libUrl?: SP.ResourcePath): Base.IBaseExecution<number>;
	getExternalUsers(position?: number, pageSize?: number, filter?: string, sortOrder?: number): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults, Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsOData> & Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsCollections;
	getExternalUsersForSite(siteUrl?: string, position?: number, pageSize?: number, filter?: string, sortOrder?: number): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults, Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsOData> & Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsCollections;
	getExternalUsersWithSortBy(position?: number, pageSize?: number, filter?: string, sortPropertyName?: string, sortOrder?: number): Base.IBaseQuery<Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResults, Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsOData> & Microsoft.Online.SharePoint.TenantManagement.GetExternalUsersResultsCollections;
	getHideDefaultThemes(): Base.IBaseExecution<boolean>;
	getIdleSessionSignOutForUnmanagedDevices(): Base.IBaseExecution<string>;
	getImportProfilePropertyJob(jobId?: any): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantManagement.ImportProfilePropertiesJobInfo>;
	getImportProfilePropertyJobs(): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantManagement.ImportProfilePropertiesJobInfo>;
	getTenantCdnEnabled(cdnType?: number): Base.IBaseExecution<boolean>;
	getTenantCdnOrigins(cdnType?: number): Base.IBaseCollection<string>;
	getTenantCdnPolicies(cdnType?: number): Base.IBaseCollection<string>;
	getTenantTheme(name?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantManagement.ThemeProperties>;
	incrementCustomFontsMinorVersion(libUrl?: SP.ResourcePath): Base.IBaseExecution<any>;
	isSharingDisabledForNonOwnersOfSite(siteUrl?: string): Base.IBaseExecution<boolean>;
	logCustomFontsLargeUpload(numCatalogs?: number, numFonts?: number, totalExpectedFiles?: number): Base.IBaseExecution<any>;
	queueImportProfileProperties(idType?: number, sourceDataIdProperty?: string, propertyMap?: Array<SP.KeyValue>, sourceUri?: string): Base.IBaseExecution<any>;
	removeExternalUsers(uniqueIds?: Array<string>): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantManagement.RemoveExternalUsersResults>;
	removeFromOrgAssets(libUrl?: SP.ResourcePath, listId?: any): Base.IBaseExecution<any>;
	removeFromOrgAssetsAndCdn(remove?: boolean, cdnType?: number, libUrl?: SP.ResourcePath): Base.IBaseExecution<any>;
	removePreviousCustomFontUpload(majVersions?: Array<string>, libUrl?: SP.ResourcePath): Base.IBaseExecution<any>;
	removePublicCdnOrigin(originId?: string): Base.IBaseExecution<any>;
	removeSdnProvider(): Base.IBaseExecution<any>;
	removeTenantCdnOrigin(cdnType?: number, originUrl?: string): Base.IBaseExecution<any>;
	revokeAllUserSessions(userName?: string): Base.IBaseExecution<Microsoft.Online.SharePoint.TenantManagement.SPOUserSessionRevocationResult>;
	revokeAllUserSessionsByPuid(puidList?: Array<string>): Base.IBaseCollection<Microsoft.Online.SharePoint.TenantManagement.SPOUserSessionRevocationResult>;
	setBlockDownloadFileTypePolicyData(blockDownloadFileTypePolicy?: boolean, fileTypeIds?: Array<number>, excludedBlockDownloadGroupIds?: Array<any>): Base.IBaseExecution<any>;
	setBlockDownloadFileTypePolicyExclusionList(excludedBlockDownloadGroupIds?: Array<any>): Base.IBaseExecution<any>;
	setHideDefaultThemes(hideDefaultThemes?: boolean): Base.IBaseExecution<boolean>;
	setIdleSessionSignOutForUnmanagedDevices(enabled?: boolean, warnAfter?: any, signOutAfter?: any): Base.IBaseExecution<boolean>;
	setJitDlpPolicyData(markAllFilesAsSensitiveByDefault?: boolean, odbSensitivityRefreshWindowInHours?: number, executionMode?: number): Base.IBaseExecution<any>;
	setOrgAssetsLib(libUrl?: SP.ResourcePath, thumbnailUrl?: SP.ResourcePath, orgAssetType?: number): Base.IBaseExecution<any>;
	setOrgAssetsLibWithConfig(libUrl?: SP.ResourcePath, thumbnailUrl?: SP.ResourcePath, orgAssetType?: number, configParam?: Microsoft.SharePoint.BrandCenter.OrgAssetsLibraryConfigParam): Base.IBaseExecution<any>;
	setTenantCdnEnabled(cdnType?: number, isEnabled?: boolean): Base.IBaseExecution<any>;
	setTenantCdnPolicy(cdnType?: number, policy?: number, policyValue?: string): Base.IBaseExecution<any>;
	syncAadB2BManagementPolicy(): Base.IBaseExecution<any>;
	updateTenantTheme(name?: string, themeJson?: string): Base.IBaseExecution<boolean>;
	uploadCustomFontsAndCatalogLib(customFontFiles?: Array<Microsoft.SharePoint.Administration.CustomFontsResource>, libUrl?: SP.ResourcePath): Base.IBaseExecution<boolean>;
}

/*********************************************
* RemoveExternalUsersResults
**********************************************/
export interface RemoveExternalUsersResults {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	RemoveFailed?: { results: Array<string> };
	RemoveSucceeded?: { results: Array<string> };
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
	Palette?: { results: Array<SP.KeyValue> };
}

/*********************************************
* ThemePropertiesCollections
**********************************************/
export interface ThemePropertiesCollections {

}
