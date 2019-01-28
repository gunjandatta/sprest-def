import { Microsoft } from "../../../../";

/*********************************************
* EmailResponse
**********************************************/
export interface EmailResponse {
	ResponseCode?: number;
	SiteId?: any;
}

/*********************************************
* HubSiteProperties
**********************************************/
export interface HubSiteProperties {
	Description?: string;
	ID?: any;
	LogoUrl?: string;
	Permissions?: Array<Microsoft.Online.SharePoint.TenantAdministration.HubSitePermission>;
	RequiresJoinApproval?: boolean;
	SiteDesignId?: any;
	SiteId?: any;
	SiteUrl?: string;
	Title?: string;
}

/*********************************************
* HubSitePropertiesMethods
**********************************************/
export interface HubSitePropertiesMethods {
	update<T=void>(): T;
}

/*********************************************
* Office365CommsMessagesServiceProxy
**********************************************/
export interface Office365CommsMessagesServiceProxy {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* Office365CommsMessagesServiceProxyMethods
**********************************************/
export interface Office365CommsMessagesServiceProxyMethods {
	messageCenterMessages<T=Array<Microsoft.Online.SharePoint.TenantAdministration.ResponseMessageCenter>>(messagesFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.MessagesFieldsData): T;
	serviceHealthMessages<T=Microsoft.Online.SharePoint.TenantAdministration.ResponseServiceHealth>(messagesFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.MessagesFieldsData): T;
}

/*********************************************
* ResponseMessageCenter
**********************************************/
export interface ResponseMessageCenter {
	ActionRequiredByDate?: string;
	Classification?: string;
	Id?: string;
	MessageType?: string;
	StartTime?: any;
	Title?: string;
}

/*********************************************
* ResponseServiceHealth
**********************************************/
export interface ResponseServiceHealth {
	AdvisoryCount?: number;
	IncidentCount?: number;
}

/*********************************************
* SiteCollectionManagementService
**********************************************/
export interface SiteCollectionManagementService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteCollectionManagementServiceMethods
**********************************************/
export interface SiteCollectionManagementServiceMethods {
	emailAdmins<T=Array<Microsoft.Online.SharePoint.TenantAdministration.EmailResponse>>(message?: string, siteIds?: Array<any>, subject?: string): T;
	exportCSVFile<T=string>(): T;
	getSiteDescription<T=string>(siteId?: any): T;
	office365ProvidedSharepointSiteActivityDataReady<T=boolean>(): T;
	resetTimestampUpdateOffice365ProvidedSharepointSiteActivityData<T=void>(): T;
	updateOffice365ProvidedSharepointSiteActivityData<T=boolean>(oauthToken?: string): T;
}

/*********************************************
* SiteProperties
**********************************************/
export interface SiteProperties {
	AllowDownloadingNonWebViewableFiles?: boolean;
	AllowEditing?: boolean;
	AllowSelfServiceUpgrade?: boolean;
	AverageResourceUsage?: number;
	CommentsOnSitePagesDisabled?: boolean;
	CompatibilityLevel?: number;
	ConditionalAccessPolicy?: number;
	CurrentResourceUsage?: number;
	DefaultLinkPermission?: number;
	DefaultSharingLinkType?: number;
	DenyAddAndCustomizePages?: number;
	DisableAppViews?: number;
	DisableCompanyWideSharingLinks?: number;
	DisableFlows?: number;
	HasHolds?: boolean;
	HubSiteId?: any;
	IsHubSite?: boolean;
	LastContentModifiedDate?: any;
	Lcid?: number;
	LimitedAccessFileType?: number;
	LockIssue?: string;
	LockState?: string;
	NewUrl?: string;
	Owner?: string;
	OwnerEmail?: string;
	OwnerName?: string;
	PWAEnabled?: number;
	RestrictedToRegion?: number;
	SandboxedCodeActivationCapability?: number;
	SensitivityLabel?: any;
	SetOwnerWithoutUpdatingSecondaryAdmin?: boolean;
	SharingAllowedDomainList?: string;
	SharingBlockedDomainList?: string;
	SharingCapability?: number;
	SharingDomainRestrictionMode?: number;
	ShowPeoplePickerSuggestionsForGuestUsers?: boolean;
	SiteDefinedSharingCapability?: number;
	SocialBarOnSitePagesDisabled?: boolean;
	Status?: string;
	StorageMaximumLevel?: number;
	StorageQuotaType?: string;
	StorageUsage?: number;
	StorageWarningLevel?: number;
	Template?: string;
	TimeZoneId?: number;
	Title?: string;
	Url?: string;
	UserCodeMaximumLevel?: number;
	UserCodeWarningLevel?: number;
	WebsCount?: number;
}

/*********************************************
* SitePropertiesMethods
**********************************************/
export interface SitePropertiesMethods {
	update<T=Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>(): T;
}

/*********************************************
* SPOTenantCdnPolicy
**********************************************/
export interface SPOTenantCdnPolicy {
	PolicyType?: number;
	PolicyValue?: string;
}

/*********************************************
* SPOTenantWebTemplateCollection
**********************************************/
export interface SPOTenantWebTemplateCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.Online.SharePoint.TenantAdministration.SPOTenantWebTemplate>;
}

/*********************************************
*  SucceededAndFailedSiteIds
**********************************************/
export interface  SucceededAndFailedSiteIds {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	FailedSiteIds?: Array<string>;
	SucceededSiteIds?: Array<string>;
}

/*********************************************
* TenantAdminEndpoints
**********************************************/
export interface TenantAdminEndpoints {
	CFRMSGraphEndpoint?: string;
	MiniMavenEndpoint?: string;
	O365AdminCenterEndpoint?: string;
	O365MessageCenterEndpoint?: string;
	OneDriveAdminCenterEndpoint?: string;
}

/*********************************************
* TenantAdminSettingsService
**********************************************/
export interface TenantAdminSettingsService {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	AutoQuotaEnabled?: Microsoft.Online.SharePoint.TenantAdministration.AutoQuotaEnabled;
	AvailableManagedPathsForSiteCreation?: Array<string>;
	CustomFormUrl?: Microsoft.Online.SharePoint.TenantAdministration.CustomFormUrl;
	DisableGroupify?: Microsoft.Online.SharePoint.TenantAdministration.DisableGroupify;
	MailFromAddress?: Microsoft.Online.SharePoint.TenantAdministration.MailFromAddress;
	MobileNotificationIsEnabledForSharepoint?: Microsoft.Online.SharePoint.TenantAdministration.MobileNotificationIsEnabledForSharepoint;
	NewPortalAsDefault?: Microsoft.Online.SharePoint.TenantAdministration.NewPortalAsDefault;
	NewSiteManagedPath?: Microsoft.Online.SharePoint.TenantAdministration.NewSiteManagedPath;
	NewSubsiteInModernOffForAll?: Microsoft.Online.SharePoint.TenantAdministration.NewSubsiteInModernOffForAll;
	NewSubsiteInModernOffForModernTemplates?: Microsoft.Online.SharePoint.TenantAdministration.NewSubsiteInModernOffForModernTemplates;
	NewTeamSiteManagedPath?: Microsoft.Online.SharePoint.TenantAdministration.NewTeamSiteManagedPath;
	ParentSiteUrl?: Microsoft.Online.SharePoint.TenantAdministration.ParentSiteUrl;
	PolicyOption?: Microsoft.Online.SharePoint.TenantAdministration.PolicyOption;
	RequireSecondaryContact?: Microsoft.Online.SharePoint.TenantAdministration.RequireSecondaryContact;
	ShowNextGenerationSyncClientOnTeamSite?: Microsoft.Online.SharePoint.TenantAdministration.ShowNextGenerationSyncClientOnTeamSite;
	ShowSelfServiceSiteCreation?: Microsoft.Online.SharePoint.TenantAdministration.ShowSelfServiceSiteCreation;
	SiteCreationDefaultStorageQuota?: Microsoft.Online.SharePoint.TenantAdministration.SiteCreationDefaultStorageQuota;
	SiteCreationNewUX?: Microsoft.Online.SharePoint.TenantAdministration.SiteCreationNewUX;
	SmtpServer?: Microsoft.Online.SharePoint.TenantAdministration.SmtpServer;
	SPListModernUXOff?: Microsoft.Online.SharePoint.TenantAdministration.SPListModernUXOff;
	TenantDefaultTimeZoneId?: Microsoft.Online.SharePoint.TenantAdministration.TenantDefaultTimeZoneId;
}

/*********************************************
* TenantAdminSettingsServiceMethods
**********************************************/
export interface TenantAdminSettingsServiceMethods {
	getTenantSharingStatus<T=number>(): T;
	update<T=void>(): T;
}

/*********************************************
* Tenant
**********************************************/
export interface Tenant {
	AllowDownloadingNonWebViewableFiles?: boolean;
	AllowedDomainListForSyncClient?: Array<any>;
	AllowEditing?: boolean;
	AllowLimitedAccessOnUnmanagedDevices?: boolean;
	AllowSelectSGsInODBListInTenant?: string;
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
	CompatibilityRange?: string;
	ConditionalAccessPolicy?: number;
	ContentTypeSyncSiteTemplatesList?: Array<string>;
	CustomizedExternalSharingServiceUrl?: string;
	DefaultLinkPermission?: number;
	DefaultSharingLinkType?: number;
	DisabledWebPartIds?: Array<any>;
	DisableReportProblemDialog?: boolean;
	DisallowInfectedFileDownload?: boolean;
	DisplayNamesOfFileViewers?: boolean;
	DisplayStartASiteOption?: boolean;
	EmailAttestationEnabled?: boolean;
	EmailAttestationReAuthDays?: number;
	EmailAttestationRequired?: boolean;
	EnableAIPIntegration?: boolean;
	EnableGuestSignInAcceleration?: boolean;
	EnableMinimumVersionRequirement?: boolean;
	ExcludedFileExtensionsForSyncClient?: Array<string>;
	ExternalServicesEnabled?: boolean;
	FileAnonymousLinkType?: number;
	FilePickerExternalImageSearchEnabled?: boolean;
	FolderAnonymousLinkType?: number;
	GuestSharingGroupAllowListInTenant?: string;
	HideDefaultThemes?: boolean;
	HideSyncButtonOnODB?: boolean;
	IPAddressAllowList?: string;
	IPAddressEnforcement?: boolean;
	IPAddressWACTokenLifetime?: number;
	IsHubSitesMultiGeoFlightEnabled?: boolean;
	IsMultiGeo?: boolean;
	IsUnmanagedSyncClientForTenantRestricted?: boolean;
	IsUnmanagedSyncClientRestrictionFlightEnabled?: boolean;
	LegacyAuthProtocolsEnabled?: boolean;
	LimitedAccessFileType?: number;
	ManagedPathsForSiteCreation?: Array<string>;
	MarkNewFilesSensitiveByDefault?: number;
	MobileFriendlyUrlEnabledInTenant?: boolean;
	NoAccessRedirectUrl?: string;
	NotificationsInOneDriveForBusinessEnabled?: boolean;
	NotificationsInSharePointEnabled?: boolean;
	NotifyOwnersWhenInvitationsAccepted?: boolean;
	NotifyOwnersWhenItemsReshared?: boolean;
	ODBAccessRequests?: number;
	ODBMembersCanShare?: number;
	ODBSharingCapability?: number;
	OfficeClientADALDisabled?: boolean;
	OneDriveForGuestsEnabled?: boolean;
	OneDriveStorageQuota?: number;
	OptOutOfGrooveBlock?: boolean;
	OptOutOfGrooveSoftBlock?: boolean;
	OrgNewsSiteUrl?: string;
	OrphanedPersonalSitesRetentionPeriod?: number;
	OwnerAnonymousNotification?: boolean;
	PermissiveBrowserFileHandlingOverride?: boolean;
	PreventExternalUsersFromResharing?: boolean;
	ProvisionSharedWithEveryoneFolder?: boolean;
	PublicCdnAllowedFileTypes?: string;
	PublicCdnEnabled?: boolean;
	PublicCdnOrigins?: Array<string>;
	RequireAcceptingAccountMatchInvitedAccount?: boolean;
	RequireAnonymousLinksExpireInDays?: number;
	ResourceQuota?: number;
	ResourceQuotaAllocated?: number;
	RootSiteUrl?: string;
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
	SpecialCharactersStateInFileFolderNames?: number;
	StartASiteFormUrl?: string;
	StorageQuota?: number;
	StorageQuotaAllocated?: number;
	SyncPrivacyProfileProperties?: boolean;
	UseFindPeopleInPeoplePicker?: boolean;
	UsePersistentCookiesForExplorerView?: boolean;
	UserVoiceForFeedbackEnabled?: boolean;
	WhoCanShareAllowListInTenant?: string;
}

/*********************************************
* TenantCollections
**********************************************/
export interface TenantCollections {
	Sites<T=Array<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties>>(): T;
}

/*********************************************
* TenantQuery
**********************************************/
export interface TenantQuery {
	Sites<T=Array<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties>>(): T;
}

/*********************************************
* TenantMethods
**********************************************/
export interface TenantMethods {
	checkTenantIntuneLicense<T=boolean>(): T;
	checkTenantLicenses<T=boolean>(licenses?: Array<string>): T;
	connectSiteToHubSiteById<T=void>(siteUrl?: string, hubSiteId?: any): T;
	createSite<T=Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>(siteCreationProperties?: Microsoft.Online.SharePoint.TenantAdministration.SiteCreationProperties): T;
	getIdleSessionSignOutForUnmanagedDevices<T=string>(): T;
	getSitePropertiesByUrl<T=Microsoft.Online.SharePoint.TenantAdministration.SiteProperties>(url?: string, includeDetail?: boolean): T;
	getSitePropertiesFromSharePointByFilters<T=Array<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties>>(speFilter?: Microsoft.Online.SharePoint.TenantAdministration.SPOSitePropertiesEnumerableFilter): T;
	getSiteSecondaryAdministrators<T=Array<Microsoft.Online.SharePoint.TenantAdministration.SecondaryAdministratorsInfo>>(secondaryAdministratorsFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.SecondaryAdministratorsFieldsData): T;
	getSPOTenantAllWebTemplates<T=Microsoft.Online.SharePoint.TenantAdministration.SPOTenantWebTemplateCollection>(): T;
	registerHubSite<T=Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties>(siteUrl?: string): T;
	registerHubSiteWithCreationInformation<T=Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties>(siteUrl?: string, creationInformation?: SP.HubSiteCreationInformation): T;
	removeDeletedSite<T=Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>(siteUrl?: string): T;
	removeDeletedSitePreferId<T=Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>(siteUrl?: string, siteId?: any): T;
	removeSite<T=Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>(siteUrl?: string): T;
	restoreDeletedSite<T=Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>(siteUrl?: string): T;
	restoreDeletedSitePreferId<T=Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>(siteUrl?: string, siteId?: any): T;
	setIdleSessionSignOutForUnmanagedDevices<T=boolean>(enabled?: boolean, warnAfter?: any, signOutAfter?: any): T;
	setSiteSecondaryAdministrators<T=void>(secondaryAdministratorsFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.SecondaryAdministratorsFieldsData): T;
	unregisterHubSite<T=void>(siteUrl?: string): T;
	update<T=void>(): T;
}

/*********************************************
* SpoOperation
**********************************************/
export interface SpoOperation {
	HasTimedout?: boolean;
	IsComplete?: boolean;
	PollingInterval?: number;
}
