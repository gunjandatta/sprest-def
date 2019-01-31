import { IBaseExecution } from "../../../../";
import { Microsoft } from "../../../../";
import { IBaseQuery } from "../../../../";
import { IBaseCollection } from "../../../../";
import { IBaseResults } from "../../../../";

/*********************************************
* EmailResponse
**********************************************/
export interface EmailResponse {
	ResponseCode?: number;
	SiteId?: any;
}

/*********************************************
* EmailResponseCollections
**********************************************/
export interface EmailResponseCollections {

}

/*********************************************
* IHubSiteProperties
**********************************************/
export interface IHubSiteProperties extends HubSitePropertiesCollections,HubSitePropertiesMethods,IBaseQuery<IHubSitePropertiesQuery> {

}

/*********************************************
* IHubSitePropertiesQuery
**********************************************/
export interface IHubSitePropertiesQuery extends HubSitePropertiesQuery,HubSitePropertiesMethods {

}

/*********************************************
* HubSiteProperties
**********************************************/
export interface HubSiteProperties extends HubSitePropertiesCollections, HubSitePropertiesMethods {
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
* HubSitePropertiesProps
**********************************************/
export interface HubSitePropertiesProps {

}

/*********************************************
* HubSitePropertiesCollections
**********************************************/
export interface HubSitePropertiesCollections extends HubSitePropertiesProps {

}

/*********************************************
* HubSitePropertiesQuery
**********************************************/
export interface HubSitePropertiesQuery extends HubSitePropertiesProps {

}

/*********************************************
* HubSitePropertiesMethods
**********************************************/
export interface HubSitePropertiesMethods {
	update(): IBaseExecution<any>;
}

/*********************************************
* IOffice365CommsMessagesServiceProxy
**********************************************/
export interface IOffice365CommsMessagesServiceProxy extends Office365CommsMessagesServiceProxyCollections,Office365CommsMessagesServiceProxyMethods,IBaseQuery<IOffice365CommsMessagesServiceProxyQuery> {

}

/*********************************************
* IOffice365CommsMessagesServiceProxyQuery
**********************************************/
export interface IOffice365CommsMessagesServiceProxyQuery extends Office365CommsMessagesServiceProxyQuery,Office365CommsMessagesServiceProxyMethods {

}

/*********************************************
* Office365CommsMessagesServiceProxy
**********************************************/
export interface Office365CommsMessagesServiceProxy extends Office365CommsMessagesServiceProxyCollections, Office365CommsMessagesServiceProxyMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* Office365CommsMessagesServiceProxyProps
**********************************************/
export interface Office365CommsMessagesServiceProxyProps {

}

/*********************************************
* Office365CommsMessagesServiceProxyCollections
**********************************************/
export interface Office365CommsMessagesServiceProxyCollections extends Office365CommsMessagesServiceProxyProps {

}

/*********************************************
* Office365CommsMessagesServiceProxyQuery
**********************************************/
export interface Office365CommsMessagesServiceProxyQuery extends Office365CommsMessagesServiceProxyProps {

}

/*********************************************
* Office365CommsMessagesServiceProxyMethods
**********************************************/
export interface Office365CommsMessagesServiceProxyMethods {
	messageCenterMessages(messagesFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.MessagesFieldsData): IBaseExecution<Array<Microsoft.Online.SharePoint.TenantAdministration.ResponseMessageCenter>>;
	serviceHealthMessages(messagesFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.MessagesFieldsData): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.ResponseServiceHealth>;
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
* ResponseMessageCenterCollections
**********************************************/
export interface ResponseMessageCenterCollections {

}

/*********************************************
* ResponseServiceHealth
**********************************************/
export interface ResponseServiceHealth {
	AdvisoryCount?: number;
	IncidentCount?: number;
}

/*********************************************
* ResponseServiceHealthCollections
**********************************************/
export interface ResponseServiceHealthCollections {

}

/*********************************************
* ISiteCollectionManagementService
**********************************************/
export interface ISiteCollectionManagementService extends SiteCollectionManagementServiceCollections,SiteCollectionManagementServiceMethods,IBaseQuery<ISiteCollectionManagementServiceQuery> {

}

/*********************************************
* ISiteCollectionManagementServiceQuery
**********************************************/
export interface ISiteCollectionManagementServiceQuery extends SiteCollectionManagementServiceQuery,SiteCollectionManagementServiceMethods {

}

/*********************************************
* SiteCollectionManagementService
**********************************************/
export interface SiteCollectionManagementService extends SiteCollectionManagementServiceCollections, SiteCollectionManagementServiceMethods {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteCollectionManagementServiceProps
**********************************************/
export interface SiteCollectionManagementServiceProps {

}

/*********************************************
* SiteCollectionManagementServiceCollections
**********************************************/
export interface SiteCollectionManagementServiceCollections extends SiteCollectionManagementServiceProps {

}

/*********************************************
* SiteCollectionManagementServiceQuery
**********************************************/
export interface SiteCollectionManagementServiceQuery extends SiteCollectionManagementServiceProps {

}

/*********************************************
* SiteCollectionManagementServiceMethods
**********************************************/
export interface SiteCollectionManagementServiceMethods {
	emailAdmins(message?: string, siteIds?: Array<any>, subject?: string): IBaseExecution<Array<Microsoft.Online.SharePoint.TenantAdministration.EmailResponse>>;
	exportCSVFile(): IBaseExecution<string>;
	getSiteDescription(siteId?: any): IBaseExecution<string>;
	office365ProvidedSharepointSiteActivityDataReady(): IBaseExecution<boolean>;
	resetTimestampUpdateOffice365ProvidedSharepointSiteActivityData(): IBaseExecution<any>;
	updateOffice365ProvidedSharepointSiteActivityData(oauthToken?: string): IBaseExecution<boolean>;
}

/*********************************************
* ISiteProperties
**********************************************/
export interface ISiteProperties extends SitePropertiesCollections,SitePropertiesMethods,IBaseQuery<ISitePropertiesQuery> {

}

/*********************************************
* ISitePropertiesQuery
**********************************************/
export interface ISitePropertiesQuery extends SitePropertiesQuery,SitePropertiesMethods {

}

/*********************************************
* SiteProperties
**********************************************/
export interface SiteProperties extends SitePropertiesCollections, SitePropertiesMethods {
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
* SitePropertiesProps
**********************************************/
export interface SitePropertiesProps {

}

/*********************************************
* SitePropertiesCollections
**********************************************/
export interface SitePropertiesCollections extends SitePropertiesProps {

}

/*********************************************
* SitePropertiesCollectionMethods
**********************************************/
export interface SitePropertiesCollectionMethods {
	getById(siteId?: any): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties>;
	getLockStateById(siteId?: any): IBaseExecution<number>;
}

/*********************************************
* SitePropertiesQuery
**********************************************/
export interface SitePropertiesQuery extends SitePropertiesProps {

}

/*********************************************
* SitePropertiesMethods
**********************************************/
export interface SitePropertiesMethods {
	update(): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
}

/*********************************************
* SPOTenantCdnPolicy
**********************************************/
export interface SPOTenantCdnPolicy {
	PolicyType?: number;
	PolicyValue?: string;
}

/*********************************************
* SPOTenantCdnPolicyCollections
**********************************************/
export interface SPOTenantCdnPolicyCollections {

}

/*********************************************
* SPOTenantWebTemplateCollection
**********************************************/
export interface SPOTenantWebTemplateCollection {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
	Items?: Array<Microsoft.Online.SharePoint.TenantAdministration.SPOTenantWebTemplate>;
}

/*********************************************
* SPOTenantWebTemplateCollectionCollections
**********************************************/
export interface SPOTenantWebTemplateCollectionCollections {

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
*  SucceededAndFailedSiteIdsCollections
**********************************************/
export interface  SucceededAndFailedSiteIdsCollections {

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
* TenantAdminEndpointsCollections
**********************************************/
export interface TenantAdminEndpointsCollections {

}

/*********************************************
* ITenantAdminSettingsService
**********************************************/
export interface ITenantAdminSettingsService extends TenantAdminSettingsServiceCollections,TenantAdminSettingsServiceMethods,IBaseQuery<ITenantAdminSettingsServiceQuery> {

}

/*********************************************
* ITenantAdminSettingsServiceQuery
**********************************************/
export interface ITenantAdminSettingsServiceQuery extends TenantAdminSettingsServiceQuery,TenantAdminSettingsServiceMethods {

}

/*********************************************
* TenantAdminSettingsService
**********************************************/
export interface TenantAdminSettingsService extends TenantAdminSettingsServiceCollections, TenantAdminSettingsServiceMethods {
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
* TenantAdminSettingsServiceProps
**********************************************/
export interface TenantAdminSettingsServiceProps {

}

/*********************************************
* TenantAdminSettingsServiceCollections
**********************************************/
export interface TenantAdminSettingsServiceCollections extends TenantAdminSettingsServiceProps {

}

/*********************************************
* TenantAdminSettingsServiceQuery
**********************************************/
export interface TenantAdminSettingsServiceQuery extends TenantAdminSettingsServiceProps {

}

/*********************************************
* TenantAdminSettingsServiceMethods
**********************************************/
export interface TenantAdminSettingsServiceMethods {
	getTenantSharingStatus(): IBaseExecution<number>;
	update(): IBaseExecution<any>;
}

/*********************************************
* ITenant
**********************************************/
export interface ITenant extends TenantCollections,TenantMethods,IBaseQuery<ITenantQuery> {

}

/*********************************************
* ITenantQuery
**********************************************/
export interface ITenantQuery extends TenantQuery,TenantMethods {

}

/*********************************************
* Tenant
**********************************************/
export interface Tenant extends TenantCollections, TenantMethods {
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
* TenantProps
**********************************************/
export interface TenantProps {

}

/*********************************************
* TenantCollections
**********************************************/
export interface TenantCollections extends TenantProps {
	Sites(): IBaseCollection<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties> & Microsoft.Online.SharePoint.TenantAdministration.SitePropertiesCollectionMethods;
	Sites(id: string | number): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties> & Microsoft.Online.SharePoint.TenantAdministration.SitePropertiesCollections;
}

/*********************************************
* TenantQuery
**********************************************/
export interface TenantQuery extends TenantProps {
	Sites: IBaseResults<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties>;
}

/*********************************************
* TenantMethods
**********************************************/
export interface TenantMethods {
	checkTenantIntuneLicense(): IBaseExecution<boolean>;
	checkTenantLicenses(licenses?: Array<string>): IBaseExecution<boolean>;
	connectSiteToHubSiteById(siteUrl?: string, hubSiteId?: any): IBaseExecution<any>;
	createSite(siteCreationProperties?: Microsoft.Online.SharePoint.TenantAdministration.SiteCreationProperties): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	getIdleSessionSignOutForUnmanagedDevices(): IBaseExecution<string>;
	getSitePropertiesByUrl(url?: string, includeDetail?: boolean): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties>;
	getSitePropertiesFromSharePointByFilters(speFilter?: Microsoft.Online.SharePoint.TenantAdministration.SPOSitePropertiesEnumerableFilter): IBaseExecution<Array<Microsoft.Online.SharePoint.TenantAdministration.SiteProperties>>;
	getSiteSecondaryAdministrators(secondaryAdministratorsFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.SecondaryAdministratorsFieldsData): IBaseExecution<Array<Microsoft.Online.SharePoint.TenantAdministration.SecondaryAdministratorsInfo>>;
	getSPOTenantAllWebTemplates(): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SPOTenantWebTemplateCollection>;
	registerHubSite(siteUrl?: string): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties>;
	registerHubSiteWithCreationInformation(siteUrl?: string, creationInformation?: SP.HubSiteCreationInformation): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.HubSiteProperties>;
	removeDeletedSite(siteUrl?: string): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	removeDeletedSitePreferId(siteUrl?: string, siteId?: any): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	removeSite(siteUrl?: string): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	restoreDeletedSite(siteUrl?: string): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	restoreDeletedSitePreferId(siteUrl?: string, siteId?: any): IBaseExecution<Microsoft.Online.SharePoint.TenantAdministration.SpoOperation>;
	setIdleSessionSignOutForUnmanagedDevices(enabled?: boolean, warnAfter?: any, signOutAfter?: any): IBaseExecution<boolean>;
	setSiteSecondaryAdministrators(secondaryAdministratorsFieldsData?: Microsoft.Online.SharePoint.TenantAdministration.SecondaryAdministratorsFieldsData): IBaseExecution<any>;
	unregisterHubSite(siteUrl?: string): IBaseExecution<any>;
	update(): IBaseExecution<any>;
}

/*********************************************
* SpoOperation
**********************************************/
export interface SpoOperation {
	HasTimedout?: boolean;
	IsComplete?: boolean;
	PollingInterval?: number;
}

/*********************************************
* SpoOperationCollections
**********************************************/
export interface SpoOperationCollections {

}
